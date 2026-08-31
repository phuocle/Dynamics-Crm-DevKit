using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

[TestClass]
public class DisplayNameFirstResolverCoverageTests
{
    [TestMethod]
    public void Resolve_EmptyInput_ReturnsError()
    {
        var result = DisplayNameFirstResolver.Resolve("", Candidates(), "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Error, result.Status);
        StringAssert.Contains(result.Error, "Input cannot be empty");
    }

    [TestMethod]
    public void Resolve_ExactLogicalName_WinsBeforeDisplayContains()
    {
        var result = DisplayNameFirstResolver.Resolve("account", Candidates(), "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("account", result.Value);
        Assert.AreEqual("account", result.CanonicalName);
    }

    [TestMethod]
    public void Resolve_CompositeDisplayAndIdentifier_ReturnsSingleMatch()
    {
        var result = DisplayNameFirstResolver.Resolve("Account (account)", Candidates(), "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("account", result.Value);
    }

    [TestMethod]
    public void Resolve_CompositeDisplayAndIdentifier_CanBeAmbiguous()
    {
        var candidates = Candidates().Concat(
        [
            new DisplayNameFirstCandidate<string>
            {
                Value = "duplicate",
                DisplayName = "Duplicate",
                LogicalName = "dup",
                SchemaName = "dup",
                CanonicalName = "dup",
                Kind = "entity"
            },
            new DisplayNameFirstCandidate<string>
            {
                Value = "duplicate2",
                DisplayName = "Duplicate",
                LogicalName = "dup",
                SchemaName = "dup",
                CanonicalName = "dup",
                Kind = "entity"
            }
        ]);

        var result = DisplayNameFirstResolver.Resolve("Duplicate (dup)", candidates, "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Ambiguous, result.Status);
        StringAssert.Contains(result.Error, "Multiple candidates match");
        StringAssert.Contains(result.Error, "entity_name");
        Assert.AreEqual(2, result.Candidates.Count);
    }

    [TestMethod]
    public void Resolve_DisplayContainsSingleMatch_ReturnsCandidate()
    {
        var result = DisplayNameFirstResolver.Resolve("Primary Contact", Candidates(), "[Ambiguous]", "[Missing]", "Tip", "attribute_name");

        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("primarycontactid", result.Value);
    }

    [TestMethod]
    public void Resolve_DisplayContainsMultipleExactOne_ReturnsExactDisplayMatch()
    {
        var candidates = Candidates().Concat(
        [
            new DisplayNameFirstCandidate<string>
            {
                Value = "account summary",
                DisplayName = "Account Summary",
                LogicalName = "accountsummary",
                SchemaName = "AccountSummary",
                CanonicalName = "accountsummary",
                Kind = "field"
            }
        ]);

        var result = DisplayNameFirstResolver.Resolve("Account", candidates, "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("account", result.Value);
    }

    [TestMethod]
    public void Resolve_DisplayContainsMultiple_ReturnsAmbiguousWithCandidates()
    {
        var result = DisplayNameFirstResolver.Resolve("account", Candidates(includeLogicalAccount: false), "[Ambiguous]", "[Missing]", "Tip", "entity_name");

        Assert.AreEqual(ResolveStatus.Ambiguous, result.Status);
        StringAssert.Contains(result.Error, "Multiple candidates match");
        Assert.IsTrue(result.Candidates.Count >= 2);
    }

    [TestMethod]
    public void Resolve_LogicalContainsSingleMatch_ReturnsCandidate()
    {
        var result = DisplayNameFirstResolver.Resolve("primarycontact", Candidates(), "[Ambiguous]", "[Missing]", "Tip", "attribute_name");

        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("primarycontactid", result.Value);
    }

    [TestMethod]
    public void Resolve_LogicalContainsMultiple_ReturnsAmbiguous()
    {
        var candidates = Candidates().Concat(
        [
            new DisplayNameFirstCandidate<string>
            {
                Value = "first custom",
                DisplayName = "First Extra",
                LogicalName = "new_customfirst",
                SchemaName = "new_CustomFirst",
                CanonicalName = "new_customfirst",
                Kind = "attribute"
            },
            new DisplayNameFirstCandidate<string>
            {
                Value = "second custom",
                DisplayName = "Second Extra",
                LogicalName = "new_customsecond",
                SchemaName = "new_CustomSecond",
                CanonicalName = "new_customsecond",
                Kind = "attribute"
            }
        ]);

        var result = DisplayNameFirstResolver.Resolve("custom", candidates, "[Ambiguous]", "[Missing]", "Tip", "attribute_name");

        Assert.AreEqual(ResolveStatus.Ambiguous, result.Status);
        StringAssert.Contains(result.Error, "logical");
    }

    [TestMethod]
    public void Resolve_NoMatch_ReturnsNotFoundWithTip()
    {
        var result = DisplayNameFirstResolver.Resolve("missing", Candidates(), "[Ambiguous]", "[Missing]", "Use get_tables", "entity_name");

        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
        StringAssert.Contains(result.Error, "was not found by Display Name or Logical/Unique/Schema Name");
        StringAssert.Contains(result.Error, "Use get_tables");
    }

    private static IEnumerable<DisplayNameFirstCandidate<string>> Candidates(bool includeLogicalAccount = true)
    {
        if (includeLogicalAccount)
        {
            yield return new DisplayNameFirstCandidate<string>
            {
                Value = "account",
                DisplayName = "Account",
                LogicalName = "account",
                UniqueName = "account",
                SchemaName = "Account",
                Id = Guid.Parse("11111111-2222-3333-4444-555555555555"),
                Kind = "entity",
                CanonicalName = "account"
            };
        }

        yield return new DisplayNameFirstCandidate<string>
        {
            Value = "accountname",
            DisplayName = "Account Name",
            LogicalName = "name",
            SchemaName = "Name",
            Kind = "attribute",
            CanonicalName = "name"
        };
        yield return new DisplayNameFirstCandidate<string>
        {
            Value = "primarycontactid",
            DisplayName = "Primary Contact",
            LogicalName = "primarycontactid",
            SchemaName = "PrimaryContactId",
            Kind = "attribute",
            CanonicalName = "primarycontactid"
        };
        yield return new DisplayNameFirstCandidate<string>
        {
            Value = "fullname",
            DisplayName = "Full Name",
            LogicalName = "fullname",
            SchemaName = "FullName",
            Kind = "attribute",
            CanonicalName = "fullname"
        };
        yield return new DisplayNameFirstCandidate<string>
        {
            Value = "lastname",
            DisplayName = "Last Name",
            LogicalName = "lastname",
            SchemaName = "LastName",
            Kind = "attribute",
            CanonicalName = "lastname"
        };
        yield return new DisplayNameFirstCandidate<string>
        {
            Value = "account summary",
            DisplayName = "Account Snapshot",
            LogicalName = "accountsnapshot",
            SchemaName = "AccountSnapshot",
            Kind = "field",
            CanonicalName = "accountsnapshot"
        };
    }
}
