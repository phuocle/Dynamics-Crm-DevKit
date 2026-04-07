using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for GetAuditHistoryTool private static methods:
/// BuildBrowseFetchXml, ParseActionName, FormatAction, FormatOperation,
/// FormatTimeWindow, FormatBrowseNoResults, EscapeTab, EscapeXml.
/// </summary>
[TestClass]
public class GetAuditHistoriesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetAuditHistoryTool);

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.GetAuditHistoryTool _tool = new(null!);

    [TestMethod]
    public void GetAuditHistories_RecordIdWithoutEntityName_ReturnsError()
    {
        var result = _tool.get_audit_history(record_id: "11111111-1111-1111-1111-111111111111");
        Assert.IsTrue(GetText(result).Contains("entity_name is required when record_id is provided"));
    }

    [TestMethod]
    public void GetAuditHistories_InvalidRecordId_ReturnsError()
    {
        var result = _tool.get_audit_history(entity_name: "account", record_id: "not-a-guid");
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void GetAuditHistories_InvalidFromDate_ReturnsError()
    {
        var result = _tool.get_audit_history(from_date: "not-a-date");
        Assert.IsTrue(GetText(result).Contains("not a valid ISO 8601 date"));
    }

    [TestMethod]
    public void GetAuditHistories_InvalidToDate_ReturnsError()
    {
        var result = _tool.get_audit_history(to_date: "not-a-date");
        Assert.IsTrue(GetText(result).Contains("not a valid ISO 8601 date"));
    }

    // ──────────────────────────────────────────────
    // BuildBrowseFetchXml (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildBrowseFetchXmlMethod = ToolType
        .GetMethod("BuildBrowseFetchXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string BuildBrowseFetchXml(int? objectTypeCode, DateTime sinceUtc, DateTime untilUtc,
        string operation, int maxRecords)
    {
        return (string)BuildBrowseFetchXmlMethod.Invoke(null,
            new object?[] { objectTypeCode, sinceUtc, untilUtc, operation, maxRecords })!;
    }

    [TestMethod]
    public void BuildBrowseFetchXml_Basic_ContainsAuditEntity()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        Assert.IsTrue(result.Contains("<entity name='audit'>"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_Basic_ContainsRequiredAttributes()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        Assert.IsTrue(result.Contains("<attribute name='auditid'/>"));
        Assert.IsTrue(result.Contains("<attribute name='createdon'/>"));
        Assert.IsTrue(result.Contains("<attribute name='userid'/>"));
        Assert.IsTrue(result.Contains("<attribute name='objectid'/>"));
        Assert.IsTrue(result.Contains("<attribute name='action'/>"));
        Assert.IsTrue(result.Contains("<attribute name='operation'/>"));
        Assert.IsTrue(result.Contains("<attribute name='objecttypecode'/>"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_Basic_ContainsOrderDesc()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        Assert.IsTrue(result.Contains("<order attribute='createdon' descending='true'/>"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_Basic_UsesTopAttribute()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        Assert.IsTrue(result.Contains("top='50'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_WithObjectTypeCode_AddsFilter()
    {
        var result = BuildBrowseFetchXml(1, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        Assert.IsTrue(result.Contains("attribute='objecttypecode'"));
        Assert.IsTrue(result.Contains("value='1'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_NullObjectTypeCode_NoFilter()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 50);

        // objecttypecode exists as an <attribute> but should NOT exist as a <condition> filter
        Assert.IsFalse(result.Contains("attribute='objecttypecode' operator="));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_WithCreateOperation_AddsActionFilter()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "Create", 50);

        Assert.IsTrue(result.Contains("attribute='action'"));
        Assert.IsTrue(result.Contains("value='1'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_WithDeleteOperation_AddsActionValue3()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "Delete", 50);

        Assert.IsTrue(result.Contains("attribute='action'"));
        Assert.IsTrue(result.Contains("value='3'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_WithAssignOperation_AddsActionValue13()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "Assign", 50);

        Assert.IsTrue(result.Contains("attribute='action'"));
        Assert.IsTrue(result.Contains("value='13'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_InvalidOperation_NoActionFilter()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "InvalidOp", 50);

        Assert.IsFalse(result.Contains("attribute='action'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_CustomMaxRecords_UsedInTop()
    {
        var result = BuildBrowseFetchXml(null, DateTime.UtcNow.AddHours(-1), DateTime.UtcNow, "", 100);

        Assert.IsTrue(result.Contains("top='100'"));
    }

    [TestMethod]
    public void BuildBrowseFetchXml_DateRange_ContainsBothGeAndLe()
    {
        var since = new DateTime(2026, 3, 1, 0, 0, 0, DateTimeKind.Utc);
        var until = new DateTime(2026, 3, 15, 23, 59, 59, DateTimeKind.Utc);
        var result = BuildBrowseFetchXml(null, since, until, "", 50);

        Assert.IsTrue(result.Contains("operator='ge'"));
        Assert.IsTrue(result.Contains("operator='le'"));
        Assert.IsTrue(result.Contains("2026-03-01T00:00:00Z"));
        Assert.IsTrue(result.Contains("2026-03-15T23:59:59Z"));
    }

    // ──────────────────────────────────────────────
    // ParseActionName (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseActionNameMethod = ToolType
        .GetMethod("ParseActionName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static int? ParseActionName(string operation)
    {
        return (int?)ParseActionNameMethod.Invoke(null, new object[] { operation });
    }

    [TestMethod]
    public void ParseActionName_Create_Returns1()
    {
        Assert.AreEqual(1, ParseActionName("Create"));
    }

    [TestMethod]
    public void ParseActionName_CaseInsensitive_Returns1()
    {
        Assert.AreEqual(1, ParseActionName("create"));
    }

    [TestMethod]
    public void ParseActionName_Update_Returns2()
    {
        Assert.AreEqual(2, ParseActionName("Update"));
    }

    [TestMethod]
    public void ParseActionName_Delete_Returns3()
    {
        Assert.AreEqual(3, ParseActionName("Delete"));
    }

    [TestMethod]
    public void ParseActionName_Activate_Returns4()
    {
        Assert.AreEqual(4, ParseActionName("Activate"));
    }

    [TestMethod]
    public void ParseActionName_Deactivate_Returns5()
    {
        Assert.AreEqual(5, ParseActionName("Deactivate"));
    }

    [TestMethod]
    public void ParseActionName_Cascade_Returns11()
    {
        Assert.AreEqual(11, ParseActionName("Cascade"));
    }

    [TestMethod]
    public void ParseActionName_Merge_Returns12()
    {
        Assert.AreEqual(12, ParseActionName("Merge"));
    }

    [TestMethod]
    public void ParseActionName_Assign_Returns13()
    {
        Assert.AreEqual(13, ParseActionName("Assign"));
    }

    [TestMethod]
    public void ParseActionName_SetState_Returns41()
    {
        Assert.AreEqual(41, ParseActionName("SetState"));
    }

    [TestMethod]
    public void ParseActionName_Invalid_ReturnsNull()
    {
        Assert.IsNull(ParseActionName("BadOp"));
    }

    // ──────────────────────────────────────────────
    // FormatAction (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatActionMethod = ToolType
        .GetMethod("FormatAction", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatAction(int actionValue)
    {
        return (string)FormatActionMethod.Invoke(null, new object[] { actionValue })!;
    }

    [TestMethod]
    public void FormatAction_Create() => Assert.AreEqual("Create", FormatAction(1));

    [TestMethod]
    public void FormatAction_Update() => Assert.AreEqual("Update", FormatAction(2));

    [TestMethod]
    public void FormatAction_Delete() => Assert.AreEqual("Delete", FormatAction(3));

    [TestMethod]
    public void FormatAction_Activate() => Assert.AreEqual("Activate", FormatAction(4));

    [TestMethod]
    public void FormatAction_Deactivate() => Assert.AreEqual("Deactivate", FormatAction(5));

    [TestMethod]
    public void FormatAction_Cascade() => Assert.AreEqual("Cascade", FormatAction(11));

    [TestMethod]
    public void FormatAction_Merge() => Assert.AreEqual("Merge", FormatAction(12));

    [TestMethod]
    public void FormatAction_Assign() => Assert.AreEqual("Assign", FormatAction(13));

    [TestMethod]
    public void FormatAction_SetState() => Assert.AreEqual("SetState", FormatAction(41));

    [TestMethod]
    public void FormatAction_Unknown_ReturnsFallback() => Assert.AreEqual("Action(999)", FormatAction(999));

    // ──────────────────────────────────────────────
    // FormatOperation (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatOperationMethod = ToolType
        .GetMethod("FormatOperation", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatOperation(int operationValue)
    {
        return (string)FormatOperationMethod.Invoke(null, new object[] { operationValue })!;
    }

    [TestMethod]
    public void FormatOperation_Create() => Assert.AreEqual("Create", FormatOperation(1));

    [TestMethod]
    public void FormatOperation_Update() => Assert.AreEqual("Update", FormatOperation(2));

    [TestMethod]
    public void FormatOperation_Delete() => Assert.AreEqual("Delete", FormatOperation(3));

    [TestMethod]
    public void FormatOperation_Access() => Assert.AreEqual("Access", FormatOperation(4));

    [TestMethod]
    public void FormatOperation_Unknown_ReturnsFallback() => Assert.AreEqual("Op(999)", FormatOperation(999));

    // ──────────────────────────────────────────────
    // FormatTimeWindow (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatTimeWindowMethod = ToolType
        .GetMethod("FormatTimeWindow", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatTimeWindow(int minutesAgo)
    {
        return (string)FormatTimeWindowMethod.Invoke(null, new object[] { minutesAgo })!;
    }

    [TestMethod]
    public void FormatTimeWindow_30_Returns30min() => Assert.AreEqual("30 min", FormatTimeWindow(30));

    [TestMethod]
    public void FormatTimeWindow_60_Returns60min() => Assert.AreEqual("60 min", FormatTimeWindow(60));

    [TestMethod]
    public void FormatTimeWindow_120_Returns2h() => Assert.AreEqual("2h", FormatTimeWindow(120));

    [TestMethod]
    public void FormatTimeWindow_1440_Returns24h() => Assert.AreEqual("24h", FormatTimeWindow(1440));

    [TestMethod]
    public void FormatTimeWindow_2880_Returns2d() => Assert.AreEqual("2d", FormatTimeWindow(2880));

    [TestMethod]
    public void FormatTimeWindow_43200_Returns30d() => Assert.AreEqual("30d", FormatTimeWindow(43200));

    // ──────────────────────────────────────────────
    // FormatBrowseNoResults (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatBrowseNoResultsMethod = ToolType
        .GetMethod("FormatBrowseNoResults", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatBrowseNoResults(string entityName, string timeScope, string userFilter, string operation)
    {
        return (string)FormatBrowseNoResultsMethod.Invoke(null,
            new object[] { entityName, timeScope, userFilter, operation })!;
    }

    [TestMethod]
    public void FormatBrowseNoResults_Basic_ShowsZeroEntries()
    {
        var result = FormatBrowseNoResults("", "last 24h", "", "");

        Assert.IsTrue(result.Contains("[AuditBrowse] 0 entries found"));
        Assert.IsTrue(result.Contains("auditing is enabled"));
    }

    [TestMethod]
    public void FormatBrowseNoResults_WithFilters_ShowsFilterDetails()
    {
        var result = FormatBrowseNoResults("account", "last 24h", "John", "Create");

        Assert.IsTrue(result.Contains("entity = \"account\""));
        Assert.IsTrue(result.Contains("user contains \"John\""));
        Assert.IsTrue(result.Contains("operation = \"Create\""));
    }

    // ──────────────────────────────────────────────
    // EscapeTab (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapeTab(string value)
    {
        return (string)EscapeTabMethod.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void EscapeTab_TabReplaced()
    {
        Assert.AreEqual("a b", EscapeTab("a\tb"));
    }

    [TestMethod]
    public void EscapeTab_NewlineReplaced()
    {
        Assert.AreEqual("a b", EscapeTab("a\nb"));
    }

    [TestMethod]
    public void EscapeTab_CarriageReturnRemoved()
    {
        Assert.AreEqual("ab", EscapeTab("a\rb"));
    }

    // ──────────────────────────────────────────────
    // EscapeXml (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapeXml(string value)
    {
        return (string)EscapeXmlMethod.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void EscapeXml_AmpersandEscaped()
    {
        Assert.AreEqual("a&amp;b", EscapeXml("a&b"));
    }

    [TestMethod]
    public void EscapeXml_LessThanEscaped()
    {
        Assert.AreEqual("a&lt;b", EscapeXml("a<b"));
    }

    [TestMethod]
    public void EscapeXml_GreaterThanEscaped()
    {
        Assert.AreEqual("a&gt;b", EscapeXml("a>b"));
    }

    [TestMethod]
    public void EscapeXml_ApostropheEscaped()
    {
        Assert.AreEqual("a&apos;b", EscapeXml("a'b"));
    }

    [TestMethod]
    public void EscapeXml_QuoteEscaped()
    {
        Assert.AreEqual("a&quot;b", EscapeXml("a\"b"));
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
