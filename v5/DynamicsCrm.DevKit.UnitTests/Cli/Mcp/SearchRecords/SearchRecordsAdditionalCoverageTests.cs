using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using System.Text.Json;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.SearchRecords;

[TestClass]
public sealed class SearchRecordsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool);
    private static readonly Type ResultType = typeof(SearchRecordsResult);
    private static readonly MethodInfo BuildSearchResultMethod = ToolType.GetMethod(
        "BuildSearchResult", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildStatusResultMethod = ToolType.GetMethod(
        "BuildStatusResult", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildSearchTextMethod = ToolType.GetMethod(
        "BuildSearchText", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildStatusTextMethod = ToolType.GetMethod(
        "BuildStatusText", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo GetObjectTypeCodeMethod = ToolType.GetMethod(
        "GetObjectTypeCode", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo SetRecordNamesMethod = ToolType.GetMethod(
        "SetRecordNames", BindingFlags.NonPublic | BindingFlags.Instance)!;

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool CreateTool()
        => new(null!, new McpDryRunOptions(), null!);

    [TestMethod]
    public async Task SearchRecords_EmptyAction_ReturnsRequiredError()
    {
        var result = await CreateTool().search_records(null!, action: "");

        StringAssert.Contains(result.GetText(), "action is required");
    }

    [TestMethod]
    public async Task SearchRecords_InvalidDetailLevel_ReturnsError()
    {
        var result = await CreateTool().search_records(null!, detail_level: "verbose");

        StringAssert.Contains(result.GetText(), "is not a valid detail_level");
    }

    [TestMethod]
    public async Task SearchRecords_InvalidAction_ReturnsError()
    {
        var result = await CreateTool().search_records(null!, action: "unknown");

        StringAssert.Contains(result.GetText(), "Invalid action");
    }

    [TestMethod]
    public async Task SearchRecords_SearchWithoutTerm_ReturnsRequiredError()
    {
        var result = await CreateTool().search_records(null!, action: "search", search_term: "");

        StringAssert.Contains(result.GetText(), "search_term is required");
    }

    [TestMethod]
    public async Task SearchRecords_OverlongTerm_ReturnsValidationError()
    {
        var result = await CreateTool().search_records(null!, action: "search", search_term: new string('x', 101));

        StringAssert.Contains(result.GetText(), "100 characters or less");
    }

    [TestMethod]
    public async Task SearchRecords_TopBelowRangeIsClampedBeforeNetworkBoundary()
    {
        var result = await CreateTool().search_records(null!, action: "search", search_term: "account", top: 0);

        Assert.IsTrue(result.IsError);
        Assert.IsFalse(result.GetText().Contains("top must"));
    }

    [TestMethod]
    public async Task SearchRecords_TopAboveRangeIsClampedBeforeNetworkBoundary()
    {
        var result = await CreateTool().search_records(null!, action: "search", search_term: "account", top: 101);

        Assert.IsTrue(result.IsError);
        Assert.IsFalse(result.GetText().Contains("top must"));
    }

    [TestMethod]
    public async Task SearchRecords_StatusWithNullServiceIsHandledAsError()
    {
        var result = await CreateTool().search_records(null!, action: "status");

        Assert.IsTrue(result.IsError);
    }

    [TestMethod]
    public void BuildSearchResult_CopiesQueryContextWarningsErrorsAndObjectTypeCode()
    {
        var json = JsonSerializer.Serialize(new
        {
            value = new[]
            {
                new
                {
                    id = "id",
                    entityName = "account",
                    objectTypeCode = 1,
                    score = 1.5,
                    attributes = new Dictionary<string, object> { ["@search.objecttypecode"] = 42 },
                    highlights = new Dictionary<string, string[]>(),
                }
            },
            count = 7,
            queryContext = new { originalQuery = "raw", alteredQuery = "altered", reason = "spell", spellSuggestions = new[] { "raw2" } },
            warningList = new[] { "warning" },
            errorList = new[] { "error" }
        });

        var result = (SearchRecordsResult)BuildSearchResultMethod.Invoke(null, new object[] { json, "raw" })!;

        Assert.AreEqual(42, result.Records![0].ObjectTypeCode);
        Assert.AreEqual("raw", result.QueryContext!.OriginalQuery);
        CollectionAssert.Contains(result.WarningList!, "warning");
        CollectionAssert.Contains(result.ErrorList!, "error");
    }

    [TestMethod]
    public void BuildStatusResult_NullValueReturnsParseError()
    {
        var result = (SearchRecordsResult)BuildStatusResultMethod.Invoke(null, new object?[] { "{\"value\":null}", null })!;

        Assert.AreEqual("status", result.Action);
        Assert.AreEqual("Unable to parse status response.", result.ErrorMessage);
    }

    [TestMethod]
    public void BuildStatusResult_EmptyStatisticsValueLeavesStatisticsNull()
    {
        var statusJson = "{\"value\":{\"status\":\"provisioned\",\"entitystatusresults\":[]}}";
        var statsJson = "{\"value\":null}";

        var result = (SearchRecordsResult)BuildStatusResultMethod.Invoke(null, new object[] { statusJson, statsJson })!;

        Assert.IsNotNull(result.Status);
        Assert.IsNull(result.Statistics);
    }

    [TestMethod]
    public void BuildSearchText_AppendsFilePayloadNotice()
    {
        var result = new SearchRecordsResult
        {
            ReturnedCount = 1,
            TotalCount = 1,
            SearchTerm = "\"account\"",
            FilePath = "C:/payload.json"
        };

        var text = (string)BuildSearchTextMethod.Invoke(null, new object[] { result, 12L })!;

        StringAssert.Contains(text, "Found 1 result (1 total) for \"account\" in 12ms.");
        StringAssert.Contains(text, "Full payload written");
    }

    [TestMethod]
    public void BuildStatusText_AppendsFilePayloadNotice()
    {
        var result = new SearchRecordsResult
        {
            Status = new SearchStatusEntry { Status = "provisioned", EntityStatusResults = new List<SearchEntityStatusEntry>() },
            FilePath = "C:/status.json"
        };

        var text = (string)BuildStatusTextMethod.Invoke(null, new object[] { result })!;

        StringAssert.Contains(text, "Search Provisioned | 0 indexed entities.");
        StringAssert.Contains(text, "Full payload written");
    }

    [TestMethod]
    public void GetObjectTypeCode_HandlesIntStringAndFallbackValues()
    {
        var nestedType = ToolType.GetNestedType("QueryResult", BindingFlags.NonPublic)!;
        var attributesProperty = nestedType.GetProperty("Attributes")!;
        var objectTypeCodeProperty = nestedType.GetProperty("ObjectTypeCode")!;

        var intResult = Activator.CreateInstance(nestedType, nonPublic: true)!;
        attributesProperty.SetValue(intResult, new Dictionary<string, object> { ["@search.objecttypecode"] = 12 });
        Assert.AreEqual(12, GetObjectTypeCodeMethod.Invoke(null, new[] { intResult }));

        var stringResult = Activator.CreateInstance(nestedType, nonPublic: true)!;
        attributesProperty.SetValue(stringResult, new Dictionary<string, object> { ["@search.objecttypecode"] = "13" });
        Assert.AreEqual(13, GetObjectTypeCodeMethod.Invoke(null, new[] { stringResult }));

        var fallbackResult = Activator.CreateInstance(nestedType, nonPublic: true)!;
        attributesProperty.SetValue(fallbackResult, new Dictionary<string, object>());
        objectTypeCodeProperty.SetValue(fallbackResult, 14);
        Assert.AreEqual(14, GetObjectTypeCodeMethod.Invoke(null, new[] { fallbackResult }));
    }

    [TestMethod]
    public void SetRecordNames_EmptyRecordsReturnsWithoutServiceCall()
    {
        var result = new SearchRecordsResult { Records = new List<SearchRecordEntry>() };

        SetRecordNamesMethod.Invoke(CreateTool(), new object[] { result });

        Assert.AreEqual(0, result.Records!.Count);
    }
}
