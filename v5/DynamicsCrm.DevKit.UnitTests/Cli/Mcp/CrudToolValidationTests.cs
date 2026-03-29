using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for CRUD tool input validation (Create, Update, Delete, GetRecord).
/// These tools are public and we test their error paths by passing null ServiceClient.
/// For Update — also tests CountFields private static method.
/// </summary>
[TestClass]
public class CrudToolValidationTests
{
    // ──────────────────────────────────────────────
    // DeleteRecordTool
    // ──────────────────────────────────────────────

    private readonly DeleteRecordTool _deleteTool = new(null!);

    [TestMethod]
    public void DeleteRecord_EmptyEntityName_ReturnsError()
    {
        var result = _deleteTool.delete_record("", "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void DeleteRecord_NullEntityName_ReturnsError()
    {
        var result = _deleteTool.delete_record(null!, "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void DeleteRecord_EmptyRecordId_ReturnsError()
    {
        var result = _deleteTool.delete_record("account", "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id is required"));
    }

    [TestMethod]
    public void DeleteRecord_InvalidGuid_ReturnsError()
    {
        var result = _deleteTool.delete_record("account", "not-a-guid");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void DeleteRecord_ValidInputs_NullServiceClient_ReturnsError()
    {
        // Valid inputs but null ServiceClient will cause NullReferenceException in Delete
        var result = _deleteTool.delete_record("account", "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Error"));
    }

    // ──────────────────────────────────────────────
    // CreateRecordTool
    // ──────────────────────────────────────────────

    private readonly CreateRecordTool _createTool = new(null!);

    [TestMethod]
    public void CreateRecord_EmptyEntityName_ReturnsError()
    {
        var result = _createTool.create_record("", "{\"name\": \"Test\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void CreateRecord_NullEntityName_ReturnsError()
    {
        var result = _createTool.create_record(null!, "{\"name\": \"Test\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void CreateRecord_EmptyFieldsJson_ReturnsError()
    {
        var result = _createTool.create_record("account", "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    [TestMethod]
    public void CreateRecord_NullFieldsJson_ReturnsError()
    {
        var result = _createTool.create_record("account", null!);

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    // ──────────────────────────────────────────────
    // UpdateRecordTool
    // ──────────────────────────────────────────────

    private readonly UpdateRecordTool _updateTool = new(null!);

    [TestMethod]
    public void UpdateRecord_EmptyEntityName_ReturnsError()
    {
        var result = _updateTool.update_record("", "11111111-1111-1111-1111-111111111111", "{\"name\":\"x\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpdateRecord_EmptyRecordId_ReturnsError()
    {
        var result = _updateTool.update_record("account", "", "{\"name\":\"x\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("record_id is required"));
    }

    [TestMethod]
    public void UpdateRecord_EmptyFieldsJson_ReturnsError()
    {
        var result = _updateTool.update_record("account", "11111111-1111-1111-1111-111111111111", "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("fields_json is required"));
    }

    [TestMethod]
    public void UpdateRecord_InvalidGuid_ReturnsError()
    {
        var result = _updateTool.update_record("account", "invalid-guid", "{\"name\":\"x\"}");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // UpdateRecordTool.CountFields (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo CountFieldsMethod = typeof(UpdateRecordTool)
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
        Assert.AreEqual(0, CountFields("not json"));
    }

    [TestMethod]
    public void CountFields_NullField_Counted()
    {
        Assert.AreEqual(2, CountFields("{\"name\": \"Test\", \"phone\": null}"));
    }

    // ──────────────────────────────────────────────
    // GetRecordTool
    // ──────────────────────────────────────────────

    private readonly GetRecordTool _getRecordTool = new(null!);

    [TestMethod]
    public void GetRecord_EmptyEntityName_ReturnsError()
    {
        var result = _getRecordTool.get_record("", "11111111-1111-1111-1111-111111111111");

        Assert.IsTrue(result.Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetRecord_EmptyRecordId_ReturnsError()
    {
        var result = _getRecordTool.get_record("account", "");

        Assert.IsTrue(result.Contains("record_id is required"));
    }

    [TestMethod]
    public void GetRecord_InvalidGuid_ReturnsError()
    {
        var result = _getRecordTool.get_record("account", "not-a-guid");

        Assert.IsTrue(result.Contains("not a valid GUID"));
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
    // SearchTool
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchTool _searchTool = new(null!);

    [TestMethod]
    public void Search_EmptySearchTerm_ReturnsError()
    {
        var result = _searchTool.search("");

        Assert.IsTrue(result.Contains("search_term is required"));
    }

    [TestMethod]
    public void Search_NullSearchTerm_ReturnsError()
    {
        var result = _searchTool.search(null!);

        Assert.IsTrue(result.Contains("search_term is required"));
    }

    [TestMethod]
    public void Search_SearchTermTooLong_ReturnsError()
    {
        var longTerm = new string('a', 101);
        var result = _searchTool.search(longTerm);

        Assert.IsTrue(result.Contains("100 characters or less"));
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
