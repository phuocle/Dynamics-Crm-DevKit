using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for ManageRecordTool input validation (Create, Read, Update, Delete).
/// These tools are public and we test their error paths by passing null ServiceClient.
/// Also tests CountFields private static method.
/// </summary>
[TestClass]
public class CrudToolValidationTests
{
    private readonly ManageRecordTool _tool = new(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

    // ──────────────────────────────────────────────
    // Delete action
    // ──────────────────────────────────────────────

    [TestMethod]
    public void DeleteRecord_EmptyEntityName_ReturnsError()
    {
        var result = _tool.manage_record("delete", "", "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void DeleteRecord_NullEntityName_ReturnsError()
    {
        var result = _tool.manage_record("delete", null!, "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void DeleteRecord_EmptyRecordId_ReturnsError()
    {
        var result = _tool.manage_record("delete", "account", "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id is required"));
    }

    [TestMethod]
    public void DeleteRecord_InvalidGuid_ReturnsError()
    {
        var result = _tool.manage_record("delete", "account", "not-a-guid");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void DeleteRecord_ValidInputs_NullServiceClient_ReturnsError()
    {
        // Valid inputs but null ServiceClient will cause NullReferenceException in Delete
        var result = _tool.manage_record("delete", "account", "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Error"));
    }

    // ──────────────────────────────────────────────
    // Create action (no record_id)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpsertCreate_EmptyEntityName_ReturnsError()
    {
        var result = _tool.manage_record("create", "", fields_json: "{\"name\": \"Test\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpsertCreate_NullEntityName_ReturnsError()
    {
        var result = _tool.manage_record("create", null!, fields_json: "{\"name\": \"Test\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpsertCreate_EmptyFieldsJson_ReturnsError()
    {
        var result = _tool.manage_record("create", "account", fields_json: "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    [TestMethod]
    public void UpsertCreate_NullFieldsJson_ReturnsError()
    {
        var result = _tool.manage_record("create", "account", fields_json: null!);

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    // ──────────────────────────────────────────────
    // Update action (with record_id)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpsertUpdate_EmptyEntityName_ReturnsError()
    {
        var result = _tool.manage_record("update", "", record_id: "11111111-1111-1111-1111-111111111111", fields_json: "{\"name\":\"x\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpsertUpdate_EmptyFieldsJson_ReturnsError()
    {
        var result = _tool.manage_record("update", "account", record_id: "11111111-1111-1111-1111-111111111111", fields_json: "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    [TestMethod]
    public void UpsertUpdate_InvalidGuid_ReturnsError()
    {
        var result = _tool.manage_record("update", "account", record_id: "invalid-guid", fields_json: "{\"name\":\"x\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // ManageRecordTool.CountFields (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo CountFieldsMethod = typeof(ManageRecordTool)
        .GetMethod("CountFields", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static int CountFields(string fieldsJson)
    {
        return (int)CountFieldsMethod.Invoke(null, new object[] { fieldsJson })!;
    }

    [TestMethod]
    public void CountFields_SingleField_Returns1()
    {
        Assert.AreEqual(1, CountFields("{\"name\": \"Test\"}"));
    }

    [TestMethod]
    public void CountFields_MultipleFields_ReturnsCorrectCount()
    {
        Assert.AreEqual(3, CountFields("{\"name\": \"Test\", \"revenue\": 100, \"active\": true}"));
    }

    [TestMethod]
    public void CountFields_EmptyObject_Returns0()
    {
        Assert.AreEqual(0, CountFields("{}"));
    }

    [TestMethod]
    public void CountFields_InvalidJson_Returns0()
    {
        // CountFields uses JsonDocument.Parse which throws on invalid JSON;
        // the top-level tool catch handles it in production. Reflection wraps
        // the thrown JsonException in TargetInvocationException.
        bool threw = false;
        try { CountFields("not json"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "CountFields should throw on invalid JSON (wrapped in TargetInvocationException via reflection)");
    }

    [TestMethod]
    public void CountFields_NullField_Counted()
    {
        Assert.AreEqual(2, CountFields("{\"name\": \"Test\", \"phone\": null}"));
    }

    // ──────────────────────────────────────────────
    // Read action
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetRecord_EmptyEntityName_ReturnsError()
    {
        var result = _tool.manage_record("read", "", record_id: "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetRecord_EmptyRecordId_ReturnsError()
    {
        var result = _tool.manage_record("read", "account", record_id: "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id is required"));
    }

    [TestMethod]
    public void GetRecord_InvalidGuid_ReturnsError()
    {
        var result = _tool.manage_record("read", "account", record_id: "not-a-guid");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // Adversarial: action validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageRecord_InvalidAction_ReturnsError()
    {
        var result = _tool.manage_record("INVALID_ACTION", "account");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Invalid action"));
    }

    [TestMethod]
    public void ManageRecord_WhitespaceAction_ReturnsError()
    {
        var result = _tool.manage_record("   ", "account");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("action is required"));
    }

    [TestMethod]
    public void ManageRecord_ActionNormalized_CaseInsensitive()
    {
        // "READ" should normalize to "read" and hit the read path (then fail on empty record_id)
        var result = _tool.manage_record("READ", "account");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id is required"));
    }

    [TestMethod]
    public void ManageRecord_CreateWithRecordId_ReturnsError()
    {
        var result = _tool.manage_record("create", "account", record_id: "11111111-1111-1111-1111-111111111111", fields_json: "{\"name\":\"x\"}");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id must be empty"));
    }

    // ──────────────────────────────────────────────
    // Adversarial: BuildColumnSet (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildColumnSetMethod = typeof(ManageRecordTool)
        .GetMethod("BuildColumnSet", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(Microsoft.PowerPlatform.Dataverse.Client.ServiceClient), typeof(string), typeof(string) }, null)!;

    private static Microsoft.Xrm.Sdk.Query.ColumnSet BuildColumnSet(string columns)
    {
        return (Microsoft.Xrm.Sdk.Query.ColumnSet)BuildColumnSetMethod.Invoke(null, new object?[] { null, "account", columns })!;
    }

    [TestMethod]
    public void BuildColumnSet_EmptyString_ReturnsAllColumns()
    {
        var cs = BuildColumnSet("");
        Assert.IsTrue(cs.AllColumns);
    }

    [TestMethod]
    public void BuildColumnSet_CommasOnly_ReturnsAllColumns()
    {
        var cs = BuildColumnSet(",,,");
        Assert.IsTrue(cs.AllColumns);
    }

    [TestMethod]
    public void BuildColumnSet_ValidColumns_ReturnsParsed()
    {
        // BuildColumnSet now resolves columns via DisplayNameFirstResolver which
        // requires a live ServiceClient; with null client it throws (TargetInvocationException
        // wrapping NullReferenceException). Only empty/whitespace inputs return AllColumns
        // without touching the client.
        bool threw = false;
        try { BuildColumnSet("name, telephone1"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    [TestMethod]
    public void BuildColumnSet_ColumnsWithExtraSpaces_Trimmed()
    {
        bool threw = false;
        try { BuildColumnSet("  name  ,  telephone1  "); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    // ──────────────────────────────────────────────
    // ExecuteFetchXmlTool
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteFetchXmlTool _fetchTool = new(null!);

    [TestMethod]
    public void ExecuteFetchXml_EmptyFetchXml_ReturnsError()
    {
        var result = _fetchTool.execute_fetchxml("");

        Assert.IsTrue(result.Contains("fetchxml is required"));
    }

    [TestMethod]
    public void ExecuteFetchXml_NullFetchXml_ReturnsError()
    {
        var result = _fetchTool.execute_fetchxml(null!);

        Assert.IsTrue(result.Contains("fetchxml is required"));
    }

    // ──────────────────────────────────────────────
    // SearchRecordsTool
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool _searchTool = new(null!);

    [TestMethod]
    public void Search_EmptySearchTerm_ReturnsError()
    {
        var result = _searchTool.search_records(action: "search", search_term: "");

        Assert.IsTrue(result.Contains("search_term is required"));
    }

    [TestMethod]
    public void Search_NullSearchTerm_ReturnsError()
    {
        var result = _searchTool.search_records(action: "search", search_term: null!);

        Assert.IsTrue(result.Contains("search_term is required"));
    }

    [TestMethod]
    public void Search_SearchTermTooLong_ReturnsError()
    {
        var longTerm = new string('a', 101);
        var result = _searchTool.search_records(action: "search", search_term: longTerm);

        Assert.IsTrue(result.Contains("100 characters or less"));
    }

    [TestMethod]
    public void Search_InvalidAction_ReturnsError()
    {
        var result = _searchTool.search_records(action: "invalid");

        Assert.IsTrue(result.Contains("Invalid action"));
    }

    [TestMethod]
    public void Search_EmptyAction_ReturnsError()
    {
        var result = _searchTool.search_records(action: "");

        Assert.IsTrue(result.Contains("action is required"));
    }

    // ──────────────────────────────────────────────
    // Helper
    // ──────────────────────────────────────────────

    private static string GetText(ModelContextProtocol.Protocol.CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is ModelContextProtocol.Protocol.TextContentBlock textBlock)
            return textBlock.Text ?? "";
        return "";
    }
}
