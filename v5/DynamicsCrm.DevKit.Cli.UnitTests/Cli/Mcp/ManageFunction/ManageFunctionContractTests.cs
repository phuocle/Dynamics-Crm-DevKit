using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageFunction;

/// <summary>
/// Contract tests for manage_function: dispatch, gate messages for the
/// authoring actions, and the MCP attribute surface (category membership,
/// structured output schema type, tool name).
/// </summary>
[TestClass]
public class ManageFunctionContractTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageFunctionTool);

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageFunctionTool NewTool() =>
        new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(),
            new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(false));

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) =>
        (result.Content[0] as ModelContextProtocol.Protocol.TextContentBlock)?.Text ?? "";

    // ──────────────────────────────────────────────
    // MCP attribute surface
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ToolAttribute_HasExpectedFlagsAndName()
    {
        var method = ToolType.GetMethod("manage_function")!;
        var attr = method.GetCustomAttribute<ModelContextProtocol.Server.McpServerToolAttribute>()!;

        Assert.AreEqual("manage_function", attr.Name);
        Assert.IsFalse(attr.ReadOnly, "manage_function is a mixed tool and must stay in the Mutation category");
        Assert.IsTrue(attr.Destructive);
        Assert.IsFalse(attr.Idempotent);
        Assert.IsTrue(attr.UseStructuredContent);
        Assert.AreEqual(typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.ManageFunctionResult), attr.OutputSchemaType);
    }

    [TestMethod]
    public void ToolDescription_AdvertisesOnlyShippedActions()
    {
        var method = ToolType.GetMethod("manage_function")!;
        var desc = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()!.Description;

        foreach (var shipped in new[] { "list", "detail", "validate", "invoke" })
            Assert.IsTrue(desc.Contains(shipped), $"Description must mention '{shipped}'");

        Assert.IsTrue(desc.Contains("'create', 'update', 'delete') are gated"),
            "Description must state that authoring actions are gated");
        Assert.IsTrue(desc.Contains("maker portal"), "Gated authoring must point at the maker portal");
        Assert.IsTrue(desc.Contains("get_custom_apis"), "RELATED TOOLS must mention get_custom_apis");
    }

    // ──────────────────────────────────────────────
    // dispatch
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MissingAction_ReturnsError()
    {
        var result = NewTool().manage_function();
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action is required");
        StringAssert.Contains(Text(result), "list, detail, validate, invoke");
    }

    [TestMethod]
    public void InvalidAction_ReturnsErrorWithSupportedList()
    {
        var result = NewTool().manage_function("frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
        StringAssert.Contains(Text(result), "list, detail, validate, invoke");
    }

    // ──────────────────────────────────────────────
    // authoring gate
    // ──────────────────────────────────────────────

    [TestMethod]
    public void CreateAction_IsGatedWithSpecificReason()
    {
        var result = NewTool().manage_function("create", definition_json: "{\"displayName\":\"X\",\"formula\":\"{ A: 1 }\"}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action='create' is not available yet");
        StringAssert.Contains(Text(result), "fxexpression.parameters serialization format");
        StringAssert.Contains(Text(result), "maker portal");
    }

    [TestMethod]
    public void UpdateAction_IsGatedWithSpecificReason()
    {
        var result = NewTool().manage_function("update", function_name: "all_Something");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action='update' is not available yet");
        StringAssert.Contains(Text(result), "parameter binding");
    }

    [TestMethod]
    public void DeleteAction_IsGatedWithOrphanReason()
    {
        var result = NewTool().manage_function("delete", function_name: "all_Something");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action='delete' is not available yet");
        StringAssert.Contains(Text(result), "orphaned");
    }

    [TestMethod]
    public void GatedActions_DoNotTouchTheOrganizationService()
    {
        // The tool was constructed with null org service; any Dataverse access
        // would throw NullReferenceException instead of returning the gate error.
        foreach (var gated in new[] { "create", "update", "delete" })
        {
            var result = NewTool().manage_function(gated, function_name: "all_Something");
            Assert.IsTrue(result.IsError == true, gated);
            StringAssert.Contains(Text(result), "not available yet");
        }
    }

    // ──────────────────────────────────────────────
    // FunctionDefinitionValidator (structural)
    // ──────────────────────────────────────────────

    private static bool Validate(string json, out System.Collections.Generic.List<string> issues) =>
        DynamicsCrm.DevKit.Cli.Mcp.Tools.Function.FunctionDefinitionValidator.TryValidate(
            json, out issues, out _);

    [TestMethod]
    public void DefinitionValidator_ValidMinimalDefinition_Passes()
    {
        var ok = Validate(
            "{\"displayName\":\"Calc Total\",\"formula\":\"{ Total: Quantity * UnitPrice }\"," +
            "\"inputs\":[{\"name\":\"Quantity\",\"type\":\"integer\"},{\"name\":\"UnitPrice\",\"type\":\"decimal\"}]," +
            "\"outputs\":[{\"name\":\"Total\",\"type\":\"decimal\"}],\"tableReferences\":[]}",
            out var issues);
        Assert.IsTrue(ok, string.Join("; ", issues));
        Assert.HasCount(0, issues);
    }

    [TestMethod]
    public void DefinitionValidator_EmptyInput_Fails()
    {
        var ok = Validate("", out var issues);
        Assert.IsFalse(ok);
        StringAssert.Contains(issues[0], "definition_json is empty");
    }

    [TestMethod]
    public void DefinitionValidator_MalformedJson_FailsWithParseIssue()
    {
        var ok = Validate("{not json", out var issues);
        Assert.IsFalse(ok);
        StringAssert.Contains(issues[0], "not valid JSON");
    }

    [TestMethod]
    public void DefinitionValidator_UnknownKey_IsRejected()
    {
        var ok = Validate("{\"displayName\":\"X\",\"formula\":\"{ A: 1 }\",\"migrate\":true}", out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("Unknown key 'migrate'")));
    }

    [TestMethod]
    public void DefinitionValidator_EmptyFormula_IsRejected()
    {
        var ok = Validate("{\"displayName\":\"X\",\"formula\":\"\"}", out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("formula is required")));
    }

    [TestMethod]
    public void DefinitionValidator_NonRecordFormula_IsRejected()
    {
        var ok = Validate("{\"displayName\":\"X\",\"formula\":\"1 + 1\"}", out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("record expression")));
    }

    [TestMethod]
    public void DefinitionValidator_UnsupportedType_IsRejected()
    {
        var ok = Validate(
            "{\"displayName\":\"X\",\"formula\":\"{ A: B }\",\"inputs\":[{\"name\":\"B\",\"type\":\"money\"}]}",
            out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("type 'money' is outside the supported scalars")));
    }

    [TestMethod]
    public void DefinitionValidator_DuplicateAndBadNames_AreRejected()
    {
        var ok = Validate(
            "{\"displayName\":\"X\",\"formula\":\"{ A: B }\",\"inputs\":[" +
            "{\"name\":\"B\",\"type\":\"integer\"},{\"name\":\"B\",\"type\":\"integer\"},{\"name\":\"1bad\",\"type\":\"integer\"}]}",
            out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("duplicate name 'B'")));
        Assert.IsTrue(issues.Any(i => i.Contains("name '1bad'")));
    }

    [TestMethod]
    public void DefinitionValidator_TooManyTableReferences_IsRejected()
    {
        var tables = string.Join(",", Enumerable.Range(0, 6).Select(i => $"\"table{i}\""));
        var ok = Validate(
            $"{{\"displayName\":\"X\",\"formula\":\"{{ A: 1 }}\",\"tableReferences\":[{tables}]}}",
            out var issues);
        Assert.IsFalse(ok);
        Assert.IsTrue(issues.Any(i => i.Contains("limit of 5 table references")));
    }

    // ──────────────────────────────────────────────
    // FunctionInvoker.ConvertValue (scalar conversions)
    // ──────────────────────────────────────────────

    private static object Convert(string type, System.Text.Json.JsonElement value) =>
        DynamicsCrm.DevKit.Cli.Mcp.Tools.Function.FunctionInvoker.ConvertValue("arg", type, value);

    private static System.Text.Json.JsonElement Json(string raw) =>
        System.Text.Json.JsonDocument.Parse(raw).RootElement.Clone();

    [TestMethod]
    public void ConvertValue_Integer_AcceptsWholeNumberOnly()
    {
        Assert.AreEqual(42, Convert("Integer", Json("42")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Integer", Json("42.5")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Integer", Json("2147483648")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Integer", Json("\"42\"")));
    }

    [TestMethod]
    public void ConvertValue_DecimalAndFloat_KeepNumbers()
    {
        Assert.AreEqual(12.5m, Convert("Decimal", Json("12.5")));
        Assert.AreEqual(12.5d, Convert("Float", Json("12.5")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Decimal", Json("\"12.5\"")));
    }

    [TestMethod]
    public void ConvertValue_Boolean_AcceptsOnlyJsonBooleans()
    {
        Assert.AreEqual(true, Convert("Boolean", Json("true")));
        Assert.AreEqual(false, Convert("Boolean", Json("false")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Boolean", Json("\"true\"")));
    }

    [TestMethod]
    public void ConvertValue_String_KeepsUnicode()
    {
        Assert.AreEqual("giá trị", Convert("String", Json("\"giá trị\"")));
        Assert.ThrowsExactly<ArgumentException>(() => Convert("String", Json("{\"a\":1}")));
    }

    [TestMethod]
    public void ConvertValue_DateTime_ParsesIso8601WithOffset()
    {
        var value = (DateTime)Convert("DateTime", Json("\"2026-01-31T12:00:00+07:00\""));
        Assert.AreEqual(new DateTime(2026, 1, 31, 5, 0, 0, DateTimeKind.Utc), value);
        Assert.ThrowsExactly<ArgumentException>(() => Convert("DateTime", Json("\"31/01/2026\"")));
    }

    [TestMethod]
    public void ConvertValue_UnknownType_IsRejected()
    {
        Assert.ThrowsExactly<ArgumentException>(() => Convert("Money", Json("1")));
    }
}
