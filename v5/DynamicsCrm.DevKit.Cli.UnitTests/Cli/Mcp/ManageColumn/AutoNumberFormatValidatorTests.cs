using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Pure client-side validation of Dataverse autonumber patterns. Dataverse itself
/// only rejects a bad pattern when the first record is saved, so the validator is
/// the only line of defense at tool-validation time.
/// </summary>
[TestClass]
public class AutoNumberFormatValidatorTests
{
    private static (string Error, int MinLength, List<string> Warnings) Validate(string pattern)
    {
        var error = AutoNumberFormatValidator.Validate(pattern, out var minLength, out var warnings);
        return (error, minLength, warnings);
    }

    // ── valid patterns (from Microsoft docs) ──

    [TestMethod]
    public void Valid_SeqNumOnly()
    {
        var (error, minLength, warnings) = Validate("{SEQNUM:10}");
        Assert.IsNull(error);
        Assert.AreEqual(10, minLength);
        Assert.AreEqual(0, warnings.Count);
    }

    [TestMethod]
    public void Valid_LiteralPlusSeqNum_MinLengthIsLiteralPlusDigits()
    {
        var (error, minLength, warnings) = Validate("KA-{SEQNUM:4}");
        Assert.IsNull(error);
        Assert.AreEqual(7, minLength); // "KA-" (3) + 4 digits
        Assert.AreEqual(0, warnings.Count);
    }

    [TestMethod]
    public void Valid_CaseNumber_Composite()
    {
        var (error, minLength, _) = Validate("CAS-{SEQNUM:6}-{RANDSTRING:6}-{DATETIMEUTC:yyyyMMddhhmmss}");
        Assert.IsNull(error);
        // 4 + 6 + 1 + 6 + 1 + 14
        Assert.AreEqual(32, minLength);
    }

    [TestMethod]
    public void Valid_QuoteNumber_MultipleRandStrings()
    {
        var (error, minLength, _) = Validate("QUO-{SEQNUM:3}#{RANDSTRING:3}#{RANDSTRING:5}");
        Assert.IsNull(error);
        Assert.AreEqual(4 + 3 + 1 + 3 + 1 + 5, minLength);
    }

    [TestMethod]
    public void Valid_AllThreePlaceholders()
    {
        var (error, _, _) = Validate("WID-{SEQNUM:5}-{RANDSTRING:6}-{DATETIMEUTC:yyyyMMddhhmmss}");
        Assert.IsNull(error);
    }

    [TestMethod]
    public void Valid_DatetimeFormatLengthUsesFormattedOutput()
    {
        var (error, minLength, _) = Validate("A{DATETIMEUTC:yyyyMMdd}");
        Assert.IsNull(error);
        Assert.AreEqual(9, minLength); // "A" + 8 formatted chars
    }

    // ── invalid patterns ──

    [TestMethod]
    public void Invalid_RandStringSeven_CitesMicrosoftLimit()
    {
        var (error, _, _) = Validate("{RANDSTRING:7}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "1-6");
    }

    [TestMethod]
    public void Invalid_RandStringZero()
    {
        var (error, _, _) = Validate("{RANDSTRING:0}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "RANDSTRING");
    }

    [TestMethod]
    public void Invalid_SeqNumZero()
    {
        var (error, _, _) = Validate("{SEQNUM:0}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "SEQNUM");
    }

    [TestMethod]
    public void Invalid_SeqNumNotAnInteger()
    {
        var (error, _, _) = Validate("{SEQNUM:x}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "SEQNUM");
    }

    [TestMethod]
    public void Invalid_UnknownPlaceholder()
    {
        var (error, _, _) = Validate("{FOO:3}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "FOO");
        StringAssert.Contains(error, "SEQNUM");
    }

    [TestMethod]
    public void Invalid_UnclosedBrace()
    {
        var (error, _, _) = Validate("{SEQNUM:3");
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void Invalid_StrayClosingBrace()
    {
        var (error, _, _) = Validate("ABC}");
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void Invalid_EmptyDatetimeFormat()
    {
        var (error, _, _) = Validate("{DATETIMEUTC:}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "DATETIMEUTC");
    }

    [TestMethod]
    public void Invalid_BadDatetimeFormat()
    {
        // .NET only rejects a format string when it is a single unknown standard
        // specifier ("Q"); mixed strings treat unknown letters as literals, so the
        // client-side ToString check catches exactly the hard-invalid cases.
        var (error, _, _) = Validate("{DATETIMEUTC:Q}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "format string");
    }

    [TestMethod]
    public void Invalid_LowerCasePlaceholder_ShowsCorrectCasing()
    {
        var (error, _, _) = Validate("{seqnum:3}");
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "case-sensitive");
        StringAssert.Contains(error, "SEQNUM");
    }

    [TestMethod]
    public void Invalid_EmptyPattern()
    {
        var (error, _, _) = Validate("   ");
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void Invalid_TooLongPattern()
    {
        var (error, _, _) = Validate(new string('A', 4001));
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "4000");
    }

    // ── warnings (non-fatal) ──

    [TestMethod]
    public void Warning_NoSeqNum_MayNotBeUnique()
    {
        var (error, minLength, warnings) = Validate("INV-{RANDSTRING:6}");
        Assert.IsNull(error);
        Assert.AreEqual(10, minLength);
        Assert.AreEqual(1, warnings.Count);
        StringAssert.Contains(warnings[0], "SEQNUM");
    }

    [TestMethod]
    public void Warning_OutParameterIsNullSafeForErrors()
    {
        // On error the out params must still be initialized (no null refs for callers).
        var warnings = new List<string>();
        var error = AutoNumberFormatValidator.Validate("{SEQNUM:0}", out var minLength, out warnings);
        Assert.IsNotNull(error);
        Assert.AreEqual(0, minLength);
        Assert.AreEqual(0, warnings.Count);
    }
}
