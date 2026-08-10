using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class CreateRecordsInternalsCoverageTests
{
    private static readonly Type ToolType = typeof(CreateRecordsTool);

    [TestMethod]
    public void ParseCsvLine_HandlesQuotesCommasAndEscapedQuotes()
    {
        var result = (string[])InvokeStatic("ParseCsvLine", "name,\"ACME, Inc\",\"he said \"\"hi\"\"\"");

        CollectionAssert.AreEqual(new[] { "name", "ACME, Inc", "he said \"hi\"" }, result);
    }

    [TestMethod]
    public void EscapeXml_EscapesAllXmlSpecialCharacters()
    {
        var result = (string)InvokeStatic("EscapeXml", "a&b<c>d'e\"");

        Assert.AreEqual("a&amp;b&lt;c&gt;d&apos;e&quot;", result);
    }

    [TestMethod]
    public void ResolveRecordsInput_InlineJsonAndJsonFile_ReturnContent()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var inline = (string)InvokeInstance(tool, "ResolveRecordsInput", "[{\"name\":\"A\"}]", "account", warnings, true)!;
        Assert.AreEqual("[{\"name\":\"A\"}]", inline);

        var path = Path.Combine(Path.GetTempPath(), $"records-{Guid.NewGuid():N}.json");
        File.WriteAllText(path, "[{\"name\":\"B\"}]");
        var fileContent = (string)InvokeInstance(tool, "ResolveRecordsInput", path, "account", warnings, true)!;
        Assert.AreEqual("[{\"name\":\"B\"}]", fileContent);
        Assert.IsFalse(File.Exists(path), "Resolved temp json files are deleted after read.");

        var missing = InvokeInstance(tool, "ResolveRecordsInput", path, "account", warnings, true);
        Assert.IsNull(missing);

        var emptyCsv = Path.Combine(Path.GetTempPath(), $"records-{Guid.NewGuid():N}.csv");
        File.WriteAllText(emptyCsv, "Name");
        var emptyCsvJson = (string)InvokeInstance(tool, "ResolveRecordsInput", emptyCsv, "account", warnings, true)!;
        Assert.AreEqual("[]", emptyCsvJson);
        Assert.IsTrue(warnings.Exists(w => w.Contains("no data rows")));
        Assert.IsFalse(File.Exists(emptyCsv), "Resolved temp csv files are deleted after read.");

        var csvWithoutMetadata = Path.Combine(Path.GetTempPath(), $"records-{Guid.NewGuid():N}.csv");
        File.WriteAllText(csvWithoutMetadata, "Name\r\nContoso");
        var noMetadataJson = (string)InvokeInstance(tool, "ResolveRecordsInput", csvWithoutMetadata, "account", warnings, true)!;
        Assert.AreEqual("[]", noMetadataJson);
        Assert.IsTrue(warnings.Exists(w => w.Contains("Failed to load metadata")));
    }

    [TestMethod]
    public void ConvertCsvValue_Primitives_ReturnConvertedValuesAndWarnings()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);

        AssertValue(tool, new StringAttributeMetadata(), "hello", "name", "hello", warnings, cache);
        AssertValue(tool, new MemoAttributeMetadata(), "memo", "description", "memo", warnings, cache);
        AssertValue(tool, new IntegerAttributeMetadata(), "42", "numberofemployees", 42, warnings, cache);
        AssertValue(tool, new BigIntAttributeMetadata(), "42000000000", "big", 42000000000L, warnings, cache);
        AssertValue(tool, new DecimalAttributeMetadata(), "12.34", "decimal", 12.34m, warnings, cache);
        AssertValue(tool, new DoubleAttributeMetadata(), "56.78", "double", 56.78m, warnings, cache);
        AssertValue(tool, new MoneyAttributeMetadata(), "90.12", "revenue", 90.12m, warnings, cache);
        AssertValue(tool, new BooleanAttributeMetadata(), "yes", "active", true, warnings, cache);

        var dateResult = InvokeConvert(tool, new DateTimeAttributeMetadata(), "2026-05-18", "createdon", warnings, cache);
        Assert.IsTrue(GetTupleValue(dateResult!, "key")?.Equals("createdon") == true);
        StringAssert.Contains(GetTupleValue(dateResult!, "value")!.ToString()!, "2026-05-18");
    }

    [TestMethod]
    public void ConvertCsvValue_InvalidPrimitiveValues_AddWarningsAndReturnNull()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);

        Assert.IsNull(InvokeConvert(tool, new IntegerAttributeMetadata(), "NaN", "whole", warnings, cache));
        Assert.IsNull(InvokeConvert(tool, new BigIntAttributeMetadata(), "NaN", "big", warnings, cache));
        Assert.IsNull(InvokeConvert(tool, new DecimalAttributeMetadata(), "NaN", "money", warnings, cache));
        Assert.IsNull(InvokeConvert(tool, new BooleanAttributeMetadata(), "maybe", "flag", warnings, cache));
        Assert.IsNull(InvokeConvert(tool, new DateTimeAttributeMetadata(), "not a date", "date", warnings, cache));
        Assert.IsTrue(warnings.Count >= 5);
    }

    [TestMethod]
    public void ConvertCsvValue_PicklistAndMultiSelect_ResolveLabels()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);
        var options = new OptionMetadataCollection
        {
            Option("Active", 1),
            Option("Inactive", 2)
        };

        var picklist = new PicklistAttributeMetadata { OptionSet = new OptionSetMetadata(options) };
        AssertValue(tool, picklist, "active", "statuscode", 1, warnings, cache);
        Assert.IsNull(InvokeConvert(tool, picklist, "missing", "statuscode", warnings, cache));

        var multi = new MultiSelectPicklistAttributeMetadata { OptionSet = new OptionSetMetadata(options) };
        var result = InvokeConvert(tool, multi, "Active;Inactive;Missing", "categories", warnings, cache);
        var values = (List<int>)GetTupleValue(result!, "value")!;
        CollectionAssert.AreEqual(new List<int> { 1, 2 }, values);
        Assert.IsTrue(warnings.Exists(w => w.Contains("Missing", StringComparison.OrdinalIgnoreCase)));
    }

    [TestMethod]
    public void ConvertCsvValue_LookupWithoutTargetsAndUnsupportedType_ReturnWarnings()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);

        Assert.IsNull(InvokeConvert(tool, new LookupAttributeMetadata(), "Contoso", "parentaccountid", warnings, cache));
        Assert.IsNull(InvokeConvert(tool, new ImageAttributeMetadata(), "image", "entityimage", warnings, cache));
        Assert.IsTrue(warnings.Exists(w => w.Contains("no target entity")));
        Assert.IsTrue(warnings.Exists(w => w.Contains("not supported")));
    }

    // ── ImportSequenceNumber auto-fill tests ──────────────────────────────

    /// <summary>
    /// ApplyBatchImportSequenceNumber fills the ISN field on entities that do
    /// not already have it set. Entities with a user-provided ISN keep their value.
    /// </summary>
    [TestMethod]
    public void ApplyBatchImportSequenceNumber_FillsMissingPreservesUserValue()
    {
        var parsed = new (Entity entity, string error)[]
        {
            (new Entity("account"), (string)null!),
            (new Entity("account") { ["importsequencenumber"] = 4567 }, (string)null!),
            (null!, "parse error"),
            (new Entity("account"), (string)null!),
        };

        InvokeStatic("ApplyBatchImportSequenceNumber", parsed, 999990);

        Assert.AreEqual(999990, parsed[0].entity!["importsequencenumber"]);
        Assert.AreEqual(4567, parsed[1].entity!["importsequencenumber"]);
        Assert.IsNull(parsed[2].entity);
        Assert.AreEqual(999990, parsed[3].entity!["importsequencenumber"]);
    }

    /// <summary>
    /// ApplyBatchImportSequenceNumber does not overwrite an explicitly-set
    /// ISN of 0 (edge case: user sets it to 0, which is a valid value).
    /// Entity.Contains returns true for explicitly set values including 0.
    /// </summary>
    [TestMethod]
    public void ApplyBatchImportSequenceNumber_PreservesExplicitZero()
    {
        var parsed = new (Entity entity, string error)[]
        {
            (new Entity("account") { ["importsequencenumber"] = 0 }, (string)null!),
        };

        InvokeStatic("ApplyBatchImportSequenceNumber", parsed, 999990);

        Assert.AreEqual(0, parsed[0].entity!["importsequencenumber"]);
    }

    /// <summary>
    /// ApplyBatchImportSequenceNumber handles an all-null array (all parse
    /// failures) without throwing.
    /// </summary>
    [TestMethod]
    public void ApplyBatchImportSequenceNumber_AllNulls_DoesNotThrow()
    {
        var parsed = new (Entity entity, string error)[]
        {
            (null!, "error 1"),
            (null!, "error 2"),
        };

        InvokeStatic("ApplyBatchImportSequenceNumber", parsed, 999990);
        Assert.IsNull(parsed[0].entity);
        Assert.IsNull(parsed[1].entity);
    }

    private static void AssertValue(CreateRecordsTool tool, AttributeMetadata attr, string cellValue, string logicalName,
        object expected, List<string> warnings, Dictionary<string, Guid?> cache)
    {
        var result = InvokeConvert(tool, attr, cellValue, logicalName, warnings, cache);
        Assert.IsNotNull(result);
        Assert.AreEqual(logicalName, GetTupleValue(result, "key"));
        var actual = GetTupleValue(result, "value");
        if (expected is decimal expectedDecimal)
            Assert.AreEqual(expectedDecimal, Convert.ToDecimal(actual, CultureInfo.InvariantCulture));
        else
            Assert.AreEqual(expected, actual);
    }

    private static object? InvokeConvert(CreateRecordsTool tool, AttributeMetadata attr, string cellValue, string logicalName,
        List<string> warnings, Dictionary<string, Guid?> cache)
    {
        return InvokeInstance(tool, "ConvertCsvValue", attr, cellValue, logicalName, 2, "account", cache, warnings);
    }

    private static object? GetTupleValue(object tuple, string name)
    {
        var fieldName = name == "key" ? "Item1" : "Item2";
        return tuple.GetType().GetField(fieldName)!.GetValue(tuple);
    }

    private static OptionMetadata Option(string label, int value)
    {
        var localized = new Microsoft.Xrm.Sdk.LocalizedLabel(label, 1033);
        return new OptionMetadata
        {
            Value = value,
            Label = new Microsoft.Xrm.Sdk.Label
            {
                UserLocalizedLabel = localized,
                LocalizedLabels = { localized }
            }
        };
    }

    private static object InvokeStatic(string methodName, params object[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static object? InvokeInstance(object target, string methodName, params object[] args)
    {
        foreach (var method in ToolType.GetMethods(BindingFlags.NonPublic | BindingFlags.Instance))
        {
            if (method.Name == methodName && method.GetParameters().Length == args.Length)
                return method.Invoke(target, args);
        }

        throw new MissingMethodException(ToolType.FullName, methodName);
    }
}
