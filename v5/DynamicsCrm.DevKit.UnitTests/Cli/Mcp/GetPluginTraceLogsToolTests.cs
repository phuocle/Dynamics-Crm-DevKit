using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for GetPluginTraceLogsTool private static methods:
/// BuildTraceListFetchXml, FormatTraceNoResults, FormatTraceDetailResult, EscapeTab, EscapeXml.
/// </summary>
[TestClass]
public class GetPluginTraceLogsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginTraceLogsTool);

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginTraceLogsTool _tool = new(null!);

    [TestMethod]
    public void GetPluginTraceLogs_InvalidRecordId_ReturnsError()
    {
        var result = _tool.get_plugin_trace_logs(record_id: "not-a-guid");
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // BuildTraceListFetchXml (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildTraceListFetchXmlMethod = ToolType
        .GetMethod("BuildListFetchXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string BuildTraceListFetchXml(string typeName, int minutesAgo, string correlationId,
        string messageName, string mode, int maxRecords)
    {
        return (string)BuildTraceListFetchXmlMethod.Invoke(null,
            new object[] { typeName, minutesAgo, correlationId, messageName, mode, maxRecords })!;
    }

    [TestMethod]
    public void BuildTraceListFetchXml_BasicQuery_ContainsEntityAndAttributes()
    {
        var result = BuildTraceListFetchXml("", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("<entity name='plugintracelog'>"));
        Assert.IsTrue(result.Contains("<attribute name='plugintracelogid'/>"));
        Assert.IsTrue(result.Contains("<attribute name='typename'/>"));
        Assert.IsTrue(result.Contains("<attribute name='messagename'/>"));
        Assert.IsTrue(result.Contains("<order attribute='createdon' descending='true'/>"));
        Assert.IsTrue(result.Contains("top='50'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithTypeName_AddsLikeFilter()
    {
        var result = BuildTraceListFetchXml("AccountPlugin", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("operator='like'"));
        Assert.IsTrue(result.Contains("%AccountPlugin%"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithCorrelationId_AddsEqFilter()
    {
        var guid = "11111111-2222-3333-4444-555555555555";
        var result = BuildTraceListFetchXml("", 60, guid, "", "", 50);

        Assert.IsTrue(result.Contains("attribute='correlationid'"));
        Assert.IsTrue(result.Contains("operator='eq'"));
        Assert.IsTrue(result.Contains(guid));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithInvalidCorrelationId_SkipsFilter()
    {
        var result = BuildTraceListFetchXml("", 60, "not-a-guid", "", "", 50);

        // correlationid is always present as an <attribute> column,
        // but should NOT appear as a <condition> filter for invalid GUID
        Assert.IsFalse(result.Contains("operator='eq' value='not-a-guid'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithMessageName_AddsFilter()
    {
        var result = BuildTraceListFetchXml("", 60, "", "Create", "", 50);

        Assert.IsTrue(result.Contains("attribute='messagename'"));
        Assert.IsTrue(result.Contains("operator='eq'"));
        Assert.IsTrue(result.Contains("Create"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithSyncMode_AddsModeFilter()
    {
        var result = BuildTraceListFetchXml("", 60, "", "", "sync", 50);

        Assert.IsTrue(result.Contains("attribute='mode'"));
        Assert.IsTrue(result.Contains("value='0'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithAsyncMode_AddsModeFilter()
    {
        var result = BuildTraceListFetchXml("", 60, "", "", "async", 50);

        Assert.IsTrue(result.Contains("attribute='mode'"));
        Assert.IsTrue(result.Contains("value='1'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithInvalidMode_SkipsModeFilter()
    {
        var result = BuildTraceListFetchXml("", 60, "", "", "invalid", 50);

        Assert.IsFalse(result.Contains("attribute='mode'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_CustomMaxRecords_UsedInTopAttribute()
    {
        var result = BuildTraceListFetchXml("", 60, "", "", "", 100);

        Assert.IsTrue(result.Contains("top='100'"));
    }

    // ──────────────────────────────────────────────
    // FormatTraceNoResults (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatTraceNoResultsMethod = ToolType
        .GetMethod("FormatNoResults", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatTraceNoResults(string typeName, int minutesAgo, string correlationId,
        string messageName, string mode)
    {
        return (string)FormatTraceNoResultsMethod.Invoke(null,
            new object[] { typeName, minutesAgo, correlationId, messageName, mode })!;
    }

    [TestMethod]
    public void FormatTraceNoResults_BasicQuery_ShowsZeroLogs()
    {
        var result = FormatTraceNoResults("", 60, "", "", "");

        Assert.IsTrue(result.Contains("[PluginTraceLogs] 0 logs found"));
        Assert.IsTrue(result.Contains("last 60 minutes"));
        Assert.IsTrue(result.Contains("Plugin Trace Log is enabled"));
    }

    [TestMethod]
    public void FormatTraceNoResults_WithFilters_ShowsFilterDetails()
    {
        var result = FormatTraceNoResults("MyPlugin", 120, "11111111-1111-1111-1111-111111111111", "Create", "sync");

        Assert.IsTrue(result.Contains("typename contains \"MyPlugin\""));
        Assert.IsTrue(result.Contains("correlationid"));
        Assert.IsTrue(result.Contains("message = \"Create\""));
        Assert.IsTrue(result.Contains("mode = \"sync\""));
        Assert.IsTrue(result.Contains("last 120 minutes"));
    }

    // ──────────────────────────────────────────────
    // FormatTraceDetailResult (private static, returns CallToolResult)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatTraceDetailResultMethod = ToolType
        .GetMethod("FormatDetailResult", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static ModelContextProtocol.Protocol.CallToolResult FormatTraceDetailResult(Entity entity)
    {
        return (ModelContextProtocol.Protocol.CallToolResult)FormatTraceDetailResultMethod.Invoke(null, new object[] { entity })!;
    }

    [TestMethod]
    public void FormatTraceDetailResult_FullEntity_AllFieldsPresent()
    {
        var entity = new Entity("plugintracelog", Guid.NewGuid());
        entity["typename"] = "MyNamespace.MyPlugin";
        entity["messagename"] = "Create";
        entity["primaryentity"] = "account";
        entity["mode"] = new OptionSetValue(0);
        entity["depth"] = 1;
        entity["performanceexecutionduration"] = 150;
        entity["correlationid"] = Guid.Parse("11111111-1111-1111-1111-111111111111");
        entity["createdon"] = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc);
        entity["messageblock"] = "Trace line 1\nTrace line 2";
        entity["exceptiondetails"] = "System.NullReferenceException...";

        var result = GetText(FormatTraceDetailResult(entity));

        Assert.IsTrue(result.Contains("[PluginTraceLog] MyNamespace.MyPlugin"));
        Assert.IsTrue(result.Contains("Message: Create"));
        Assert.IsTrue(result.Contains("Entity: account"));
        Assert.IsTrue(result.Contains("Mode: Synchronous"));
        Assert.IsTrue(result.Contains("Depth: 1"));
        Assert.IsTrue(result.Contains("Duration: 150ms"));
        Assert.IsTrue(result.Contains("CorrelationId: 11111111-1111-1111-1111-111111111111"));
        Assert.IsTrue(result.Contains("[Trace Output]"));
        Assert.IsTrue(result.Contains("Trace line 1"));
        Assert.IsTrue(result.Contains("[Exception]"));
        Assert.IsTrue(result.Contains("NullReferenceException"));
    }

    [TestMethod]
    public void FormatTraceDetailResult_AsyncMode_ShowsAsynchronous()
    {
        var entity = new Entity("plugintracelog", Guid.NewGuid());
        entity["typename"] = "AsyncPlugin";
        entity["mode"] = new OptionSetValue(1);

        var result = GetText(FormatTraceDetailResult(entity));

        Assert.IsTrue(result.Contains("Mode: Asynchronous"));
    }

    [TestMethod]
    public void FormatTraceDetailResult_EmptyTraceAndException_ShowsNone()
    {
        var entity = new Entity("plugintracelog", Guid.NewGuid());
        entity["typename"] = "TestPlugin";

        var result = GetText(FormatTraceDetailResult(entity));

        Assert.IsTrue(result.Contains("[Trace Output]"));
        Assert.IsTrue(result.Contains("(none)"));
        Assert.IsTrue(result.Contains("[Exception]"));
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
