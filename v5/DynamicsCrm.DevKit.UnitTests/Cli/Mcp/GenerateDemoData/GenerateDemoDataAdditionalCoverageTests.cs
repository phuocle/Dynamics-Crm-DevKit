using Bogus;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GenerateDemoData;

[TestClass]
public sealed class GenerateDemoDataAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GenerateDemoDataTool);
    private static readonly MethodInfo ConvertOverrideValueMethod = ToolType.GetMethod(
        "ConvertOverrideValue", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo OverrideValueAsStringMethod = ToolType.GetMethod(
        "OverrideValueAsString", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo SetOverrideValueMethod = ToolType.GetMethod(
        "SetOverrideValue", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo GenerateValueMethod = ToolType.GetMethod(
        "GenerateValue", BindingFlags.NonPublic | BindingFlags.Instance)!;
    private static readonly MethodInfo GenerateStringValueMethod = ToolType.GetMethod(
        "GenerateStringValue", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo IsSkippedTypeMethod = ToolType.GetMethod(
        "IsSkippedType", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo IsAutoSelectSkipPatternMethod = ToolType.GetMethod(
        "IsAutoSelectSkipPattern", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly Type FieldOverrideType = ToolType.Assembly.GetType(
        "DynamicsCrm.DevKit.Cli.Mcp.Tools.FieldOverride")!;

    [TestMethod]
    public async System.Threading.Tasks.Task GenerateDemoData_InvalidFromDateReturnsValidationError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "account", "not-a-date", "2026-01-31");

        StringAssert.Contains(result.GetText(), "is not a valid date");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task GenerateDemoData_InvalidToDateReturnsValidationError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "account", "2026-01-01", "not-a-date");

        StringAssert.Contains(result.GetText(), "is not a valid date");
    }

    [TestMethod]
    public void ConvertOverrideValue_CoversJsonKindsAndNumericParsing()
    {
        Assert.AreEqual("42", ConvertOverride(JsonDocument.Parse("\"42\"").RootElement, false));
        Assert.AreEqual(42, ConvertOverride(JsonDocument.Parse("\"42\"").RootElement, true));
        Assert.AreEqual(42, ConvertOverride(JsonDocument.Parse("42").RootElement));
        Assert.AreEqual(true, ConvertOverride(JsonDocument.Parse("true").RootElement));
        Assert.AreEqual(false, ConvertOverride(JsonDocument.Parse("false").RootElement));
        Assert.IsNull(ConvertOverride(JsonDocument.Parse("null").RootElement));
        Assert.AreEqual("[1,2]", ConvertOverride(JsonDocument.Parse("[1,2]").RootElement));
    }

    [TestMethod]
    public void OverrideValueAsString_UsesRawTextForNonStringValues()
    {
        Assert.AreEqual("hello", OverrideValueAsString(JsonDocument.Parse("\"hello\"").RootElement));
        Assert.AreEqual("123", OverrideValueAsString(JsonDocument.Parse("123").RootElement));
    }

    [TestMethod]
    public void SetOverrideValue_RemovesPreviousPolymorphicVariants()
    {
        var record = new Dictionary<string, object>(StringComparer.OrdinalIgnoreCase)
        {
            ["customerid@account"] = "account-id",
            ["customerid@contact"] = "contact-id",
            ["name"] = "old"
        };

        SetOverrideValueMethod.Invoke(null, new object[] { record, "customerid@lead", "lead-id" });

        Assert.IsFalse(record.ContainsKey("customerid@account"));
        Assert.IsFalse(record.ContainsKey("customerid@contact"));
        Assert.AreEqual("lead-id", record["customerid@lead"]);
        Assert.AreEqual("old", record["name"]);
    }

    [TestMethod]
    public void SkipHelpersRecognizeSystemPatternsAndUnsupportedMetadata()
    {
        Assert.IsTrue((bool)IsAutoSelectSkipPatternMethod.Invoke(null, new object[] { "adx_portalfield" })!);
        Assert.IsTrue((bool)IsAutoSelectSkipPatternMethod.Invoke(null, new object[] { "revenue_base" })!);
        Assert.IsFalse((bool)IsAutoSelectSkipPatternMethod.Invoke(null, new object[] { "name" })!);

        Assert.IsTrue(IsSkipped(new UniqueIdentifierAttributeMetadata()));
        Assert.IsTrue(IsSkipped(new ImageAttributeMetadata()));
        Assert.IsTrue(IsSkipped(new FileAttributeMetadata()));
        Assert.IsTrue(IsSkipped(new EntityNameAttributeMetadata()));
        Assert.IsTrue(IsSkipped(new StateAttributeMetadata()));
        Assert.IsTrue(IsSkipped(new StatusAttributeMetadata()));
        Assert.IsFalse(IsSkipped(new StringAttributeMetadata()));
    }

    [TestMethod]
    public void GenerateValue_EmptyOptionsAndUnsupportedTypeAddWarnings()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());
        var faker = new Faker { Random = new Randomizer(99) };
        var warnings = new List<string>();
        var pools = new Dictionary<string, List<Guid>>();

        var emptyPicklist = new PicklistAttributeMetadata { LogicalName = "empty_choice", OptionSet = new OptionSetMetadata() };
        var emptyMulti = new MultiSelectPicklistAttributeMetadata { LogicalName = "empty_multi", OptionSet = new OptionSetMetadata() };
        var unsupported = new EntityNameAttributeMetadata { LogicalName = "unsupported" };

        Assert.IsNull(InvokeGenerateValue(tool, faker, "account", emptyPicklist, pools, warnings));
        Assert.IsNull(InvokeGenerateValue(tool, faker, "account", emptyMulti, pools, warnings));
        Assert.IsNull(InvokeGenerateValue(tool, faker, "account", unsupported, pools, warnings));
        Assert.AreEqual(3, warnings.Count);
    }

    [TestMethod]
    public void GenerateValue_LookupWithoutAvailableTargetReturnsNull()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());
        var lookup = new LookupAttributeMetadata { LogicalName = "customerid", Targets = new[] { "account", "contact" } };
        var warnings = new List<string>();

        var value = InvokeGenerateValue(tool, new Faker(), "account", lookup,
            new Dictionary<string, List<Guid>>(), warnings);

        Assert.IsNull(value);
        Assert.AreEqual(0, warnings.Count);
    }

    [TestMethod]
    public void GenerateValue_SingleTargetLookupReturnsGuidString()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());
        var id = Guid.Parse("11111111-1111-1111-1111-111111111111");
        var lookup = new LookupAttributeMetadata { LogicalName = "parentid", Targets = new[] { "account" } };
        var pools = new Dictionary<string, List<Guid>> { ["account"] = new() { id } };

        var value = InvokeGenerateValue(tool, new Faker(), "contact", lookup, pools, new List<string>());

        Assert.AreEqual(id.ToString(), value);
    }

    [TestMethod]
    public void GenerateStringValue_CoversRemainingMappingsAndLengthLimit()
    {
        var faker = new Faker { Random = new Randomizer(88) };
        var values = new[]
        {
            GenerateString(faker, "account", "address1_line2"),
            GenerateString(faker, "account", "department"),
            GenerateString(faker, "account", "subject"),
            GenerateString(faker, "contact", "companyname"),
            GenerateString(faker, "contact", "customfield")
        };

        Assert.IsTrue(Array.TrueForAll(values, value => !string.IsNullOrWhiteSpace(value)));
        Assert.IsTrue(GenerateString(faker, "account", "customfield", 2).Length <= 2);
    }

    [TestMethod]
    public void ApplyOverrides_EndsWithNonEmailUsesRandomPrefix()
    {
        var faker = new Faker { Random = new Randomizer(12) };
        var record = new Dictionary<string, object>();
        var overrideObject = Activator.CreateInstance(FieldOverrideType, nonPublic: true)!;
        FieldOverrideType.GetProperty("LogicalName")!.SetValue(overrideObject, "code");
        FieldOverrideType.GetProperty("Operator")!.SetValue(overrideObject, "endswith");
        FieldOverrideType.GetProperty("Values")!.SetValue(overrideObject,
            new List<JsonElement> { JsonDocument.Parse("\"-END\"").RootElement.Clone() });

        var method = ToolType.GetMethod("ApplyOverrides", BindingFlags.NonPublic | BindingFlags.Static)!;
        var overrides = new List<FieldOverride> { (FieldOverride)overrideObject };
        method.Invoke(null, new object[] { faker, record, overrides, new List<string>() });

        StringAssert.EndsWith((string)record["code"], "-END");
    }

    private static object? ConvertOverride(JsonElement value, bool parseNumericStrings = false)
        => ConvertOverrideValueMethod.Invoke(null, new object[] { value, parseNumericStrings });

    private static string OverrideValueAsString(JsonElement value)
        => (string)OverrideValueAsStringMethod.Invoke(null, new object[] { value })!;

    private static bool IsSkipped(AttributeMetadata metadata)
        => (bool)IsSkippedTypeMethod.Invoke(null, new object[] { metadata })!;

    private static object? InvokeGenerateValue(
        GenerateDemoDataTool tool,
        Faker faker,
        string entity,
        AttributeMetadata attr,
        Dictionary<string, List<Guid>> pools,
        List<string> warnings)
        => GenerateValueMethod.Invoke(tool, new object[] { faker, entity, attr, pools, DateTime.UtcNow.AddDays(-1), DateTime.UtcNow, warnings });

    private static string GenerateString(Faker faker, string entity, string logicalName, int maxLength = 100)
        => (string)GenerateStringValueMethod.Invoke(null, new object[] { faker, entity, logicalName, maxLength })!;
}
