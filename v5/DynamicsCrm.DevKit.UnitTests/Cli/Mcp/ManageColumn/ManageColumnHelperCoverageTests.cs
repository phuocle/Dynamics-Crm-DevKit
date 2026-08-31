using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public sealed class ManageColumnHelperCoverageTests
{
    private static readonly Type ToolType = typeof(ManageColumnTool);
    private static readonly BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    private static object InvokeStatic(string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateStatic)!.Invoke(null, args);

    private static T InvokeStatic<T>(string name, params object[] args) => (T)InvokeStatic(name, args)!;

    private static object InvokeInstance(ManageColumnTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateInstance)!.Invoke(tool, args);

    [TestMethod]
    public void FormulaHelpers_CoverKindsLogicalNamesAndTypeValidation()
    {
        Assert.AreEqual((3, null), InvokeStatic<(int, string)>("ParseFormulaSourceType", ""));
        Assert.AreEqual((3, null), InvokeStatic<(int, string)>("ParseFormulaSourceType", "power fx"));
        Assert.AreEqual((1, null), InvokeStatic<(int, string)>("ParseFormulaSourceType", "calc"));
        Assert.AreEqual((2, null), InvokeStatic<(int, string)>("ParseFormulaSourceType", "rollup"));
        var invalidKind = InvokeStatic<(int, string)>("ParseFormulaSourceType", "bad");
        Assert.AreEqual(0, invalidKind.Item1);
        StringAssert.Contains(invalidKind.Item2, "Invalid formula_source_type");

        foreach (var valid in new[] { "name", "_name", "name_2" })
            Assert.IsTrue(InvokeStatic<bool>("IsLogicalName", valid));
        foreach (var invalid in new[] { "", "Name", "name-value", "2name", "name value" })
            Assert.IsFalse(InvokeStatic<bool>("IsLogicalName", invalid));

        Assert.IsNull(InvokeStatic<string>("ValidateFormulaAttributeType", "string", "powerfx"));
        var unsupported = InvokeStatic<string>("ValidateFormulaAttributeType", "lookup", "rollup");
        StringAssert.Contains(unsupported, "not supported");
    }

    [TestMethod]
    public void FormatResolvers_CoverRemainingAcceptedValues()
    {
        Assert.AreEqual(StringFormatName.TextArea.Value, ResolveString("TextArea"));
        Assert.AreEqual(StringFormatName.TickerSymbol.Value, ResolveString("TickerSymbol"));
        Assert.AreEqual(StringFormatName.Text.Value, ResolveString("Text"));
        Assert.AreEqual(IntegerFormat.Locale, ResolveInteger("Locale"));
        Assert.AreEqual(AttributeRequiredLevel.ApplicationRequired, InvokeStatic<AttributeRequiredLevel?>("ParseRequiredLevel", "applicationrequired"));
    }

    [TestMethod]
    public void OptionAndDefaultParsers_CoverEmptyInvalidMembershipAndSuccess()
    {
        var empty = InvokeStatic("ParseOptions", " ");
        Assert.IsNull(TupleField(empty, "Item1"));
        Assert.IsNull(TupleField(empty, "Item2"));
        var invalid = InvokeStatic("ParseOptions", "not json");
        StringAssert.Contains(TupleField<string>(invalid, "Item2"), "Invalid JSON");
        var parsed = InvokeStatic("ParseOptions", "[{\"label\":\"Low\",\"value\":100000000,\"color\":\"#808080\",\"state\":1}]");
        var items = ((IEnumerable)TupleField(parsed, "Item1")).Cast<object>().ToList();
        Assert.AreEqual(1, items.Count);
        Assert.AreEqual("Low", Property<string>(items[0], "Label"));
        Assert.AreEqual(100000000, Property<int?>(items[0], "Value"));
        Assert.AreEqual(1, Property<int?>(items[0], "State"));

        var picklist = new PicklistAttributeMetadata();
        Assert.IsNull(InvokeStatic<string>("ApplyPicklistDefaultValue", picklist, "", false, null));
        StringAssert.Contains(InvokeStatic<string>("ApplyPicklistDefaultValue", picklist, "1", true, null), "not supported");
        StringAssert.Contains(InvokeStatic<string>("ApplyPicklistDefaultValue", picklist, "abc", false, null), "Invalid default_value");
        StringAssert.Contains(InvokeStatic<string>("ApplyPicklistDefaultValue", picklist, "2", false, new List<int?> { 1 }), "does not match");
        Assert.IsNull(InvokeStatic<string>("ApplyPicklistDefaultValue", picklist, "2", false, new List<int?> { 1, 2 }));
        Assert.AreEqual(2, picklist.DefaultFormValue);
        StringAssert.Contains(InvokeStatic<string>("ApplyPicklistDefaultValue", new StringAttributeMetadata(), "2", false, null), "only be applied");
    }

    [TestMethod]
    public void AttributeAndDeleteValueParsers_CoverAllMetadataTypes()
    {
        var attributes = new AttributeMetadata[]
        {
            new StringAttributeMetadata(), new MemoAttributeMetadata(), new IntegerAttributeMetadata(),
            new BigIntAttributeMetadata(), new DecimalAttributeMetadata(), new MoneyAttributeMetadata(),
            new DoubleAttributeMetadata(), new BooleanAttributeMetadata(), new DateTimeAttributeMetadata(),
            new LookupAttributeMetadata(), new PicklistAttributeMetadata(), new MultiSelectPicklistAttributeMetadata(),
            new ImageAttributeMetadata(), new FileAttributeMetadata(), new StatusAttributeMetadata()
        };
        foreach (var attribute in attributes)
            Assert.IsFalse(string.IsNullOrWhiteSpace(InvokeStatic<string>("GetAttributeTypeName", attribute)), attribute.GetType().Name);

        Assert.AreEqual((null, null), InvokeStatic<(List<int>, string)>("ParseDeleteValues", ""));
        var parsed = InvokeStatic<(List<int>, string)>("ParseDeleteValues", "[1,2,3]");
        CollectionAssert.AreEqual(new[] { 1, 2, 3 }, parsed.Item1);
        StringAssert.Contains(InvokeStatic<(List<int>, string)>("ParseDeleteValues", "{bad").Item2, "Invalid JSON");
    }

    [TestMethod]
    public void FormulaCloneValidation_ReturnsUsefulErrorsBeforeServiceCalls()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var args = new object[] { "bad", null, 0, null, null, null, null };
        Assert.IsFalse((bool)InvokeInstance(tool, "TryResolveFormulaCloneSource", args));
        StringAssert.Contains((string)args[6], "Invalid formula_definition");
        args = new object[] { "Account:Total", null, 0, null, null, null, null };
        Assert.IsFalse((bool)InvokeInstance(tool, "TryResolveFormulaCloneSource", args));
        StringAssert.Contains((string)args[6], "lowercase Dataverse logical names");
        args = new object[] { "account:total:extra", null, 0, null, null, null, null };
        Assert.IsFalse((bool)InvokeInstance(tool, "TryResolveFormulaCloneSource", args));
        StringAssert.Contains((string)args[6], "Invalid formula_definition");
    }

    [TestMethod]
    public void ResultAndExceptionFormatters_CoverBranchesWithoutDataverse()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        var duplicate = (CallToolResult)InvokeInstance(tool, "HandleException", new InvalidOperationException("duplicate attribute already exists"), "account", "name", "devkit");
        StringAssert.Contains(Text(duplicate), "already exists");
        var entityMissing = (CallToolResult)InvokeInstance(tool, "HandleException", new InvalidOperationException("entity does not exist"), "account", "name", "devkit");
        StringAssert.Contains(Text(entityMissing), "not found");
        var solutionMissing = (CallToolResult)InvokeInstance(tool, "HandleException", new InvalidOperationException("solution not found"), "account", "name", "devkit");
        StringAssert.Contains(Text(solutionMissing), "Solution");
        var generic = (CallToolResult)InvokeInstance(tool, "HandleException", new InvalidOperationException("unexpected"), "account", "name", "devkit");
        StringAssert.Contains(Text(generic), "Failed to create attribute");

        var result = new CallToolResult
        {
            Content = [new TextContentBlock { Text = "summary" }],
            StructuredContent = JsonSerializer.SerializeToElement(new { summary = "summary" })
        };
        var warned = InvokeStatic<CallToolResult>("AppendFormulaCloneWarning", result, "source warning");
        StringAssert.Contains(Text(warned), "1 warning(s)");
        StringAssert.Contains(warned.StructuredContent!.Value.GetRawText(), "source warning");

        var header = InvokeStatic<System.Text.StringBuilder>("FormatHeader", "account", "name", "String", "Name", AttributeRequiredLevel.None);
        StringAssert.Contains(header.ToString(), "Created String column");
        InvokeStatic("AppendFooter", header, " devkit ", true, Guid.Empty);
        StringAssert.Contains(header.ToString(), "Solution: devkit");
    }

    private static string ResolveString(string value)
    {
        var args = new object[] { value, null };
        var result = (StringFormatName)ToolType.GetMethod("ResolveStringFormat", PrivateStatic)!.Invoke(null, args)!;
        Assert.IsNull(args[1]);
        return result.Value;
    }

    private static IntegerFormat ResolveInteger(string value)
    {
        var args = new object[] { value, null };
        var result = (IntegerFormat)ToolType.GetMethod("ResolveIntegerFormat", PrivateStatic)!.Invoke(null, args)!;
        Assert.IsNull(args[1]);
        return result;
    }

    private static object TupleField(object value, string name) => value.GetType().GetField(name)!.GetValue(value);

    private static T TupleField<T>(object value, string name) => (T)TupleField(value, name)!;

    private static T Property<T>(object value, string name) => (T)value.GetType().GetProperty(name)!.GetValue(value)!;

    private static string Text(CallToolResult result) =>
        result.Content?.FirstOrDefault() is TextContentBlock block ? block.Text ?? "" : "";
}
