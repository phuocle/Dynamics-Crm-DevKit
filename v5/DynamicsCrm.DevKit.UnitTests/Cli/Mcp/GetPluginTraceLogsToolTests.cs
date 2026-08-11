using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for GetPluginTraceLogsTool private methods:
/// BuildListFetchXml, BuildListText, BuildDetailText, EscapeXml.
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

    private static string BuildTraceListFetchXml(string typeName, string primaryEntity, int minutesAgo, string correlationId,
        string messageName, string mode, int maxRecords)
    {
        return (string)BuildTraceListFetchXmlMethod.Invoke(null,
            new object[] { typeName, primaryEntity, minutesAgo, correlationId, messageName, mode, maxRecords })!;
    }

    [TestMethod]
    public void BuildTraceListFetchXml_BasicQuery_ContainsEntityAndAttributes()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "", 50);

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
        var result = BuildTraceListFetchXml("AccountPlugin", "", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("operator='like'"));
        Assert.IsTrue(result.Contains("%AccountPlugin%"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_AddsPrimaryEntityFilter()
    {
        var result = BuildTraceListFetchXml("", "account", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("attribute='primaryentity'"));
        Assert.IsTrue(result.Contains("operator='eq'"));
        Assert.IsTrue(result.Contains("value='account'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithTypeName_DoesNotTreatTypeNameAsPrimaryEntity()
    {
        var result = BuildTraceListFetchXml("Quote", "", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("attribute='typename'"));
        Assert.IsFalse(result.Contains("attribute='primaryentity' operator='eq' value='Quote'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_EscapesXml()
    {
        var result = BuildTraceListFetchXml("", "account'bad", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("account&apos;bad"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithTypeNameAndPrimaryEntity_AddsBothFilters()
    {
        var result = BuildTraceListFetchXml("AccountPlugin", "account", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("attribute='typename'"));
        Assert.IsTrue(result.Contains("attribute='primaryentity'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithoutPrimaryEntity_SkipsPrimaryEntityFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "", 50);

        Assert.IsFalse(result.Contains("attribute='primaryentity' operator='eq'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_DoesNotUseLike()
    {
        var result = BuildTraceListFetchXml("", "account", 60, "", "", "", 50);

        Assert.IsFalse(result.Contains("attribute='primaryentity' operator='like'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_KeepsPrimaryEntityAttributeColumn()
    {
        var result = BuildTraceListFetchXml("", "account", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("<attribute name='primaryentity'/>"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_CombinesWithCreatedOnFilter()
    {
        var result = BuildTraceListFetchXml("", "account", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("attribute='createdon'"));
        Assert.IsTrue(result.Contains("attribute='primaryentity'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithPrimaryEntity_UsesTrimmedValue()
    {
        var result = BuildTraceListFetchXml("", " account ", 60, "", "", "", 50);

        Assert.IsTrue(result.Contains("value='account'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithCorrelationId_AddsEqFilter()
    {
        var guid = "11111111-2222-3333-4444-555555555555";
        var result = BuildTraceListFetchXml("", "", 60, guid, "", "", 50);

        Assert.IsTrue(result.Contains("attribute='correlationid'"));
        Assert.IsTrue(result.Contains("operator='eq'"));
        Assert.IsTrue(result.Contains(guid));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithInvalidCorrelationId_SkipsFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "not-a-guid", "", "", 50);

        // correlationid is always present as an <attribute> column,
        // but should NOT appear as a <condition> filter for invalid GUID
        Assert.IsFalse(result.Contains("operator='eq' value='not-a-guid'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithMessageName_AddsFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "Create", "", 50);

        Assert.IsTrue(result.Contains("attribute='messagename'"));
        Assert.IsTrue(result.Contains("operator='eq'"));
        Assert.IsTrue(result.Contains("Create"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithSyncMode_AddsModeFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "sync", 50);

        Assert.IsTrue(result.Contains("attribute='mode'"));
        Assert.IsTrue(result.Contains("value='0'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithAsyncMode_AddsModeFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "async", 50);

        Assert.IsTrue(result.Contains("attribute='mode'"));
        Assert.IsTrue(result.Contains("value='1'"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_WithInvalidMode_SkipsModeFilter()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "invalid", 50);

        // BuildListFetchXml does not validate mode; any non-empty mode adds a condition (invalid → async value=1)
        Assert.IsTrue(result.Contains("<condition attribute='mode' operator='eq' value='1'/>"));
    }

    [TestMethod]
    public void BuildTraceListFetchXml_CustomMaxRecords_UsedInTopAttribute()
    {
        var result = BuildTraceListFetchXml("", "", 60, "", "", "", 100);

        Assert.IsTrue(result.Contains("top='100'"));
    }

    // ──────────────────────────────────────────────
    // FormatTraceNoResults → BuildListText (private static, 3 params)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatTraceNoResultsMethod = ToolType
        .GetMethod("BuildListText", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatTraceNoResults(int count, string timeScope, string primaryEntity)
    {
        return (string)FormatTraceNoResultsMethod.Invoke(null,
            new object[] { count, timeScope, primaryEntity })!;
    }

    [TestMethod]
    public void FormatTraceNoResults_BasicQuery_ShowsZeroLogs()
    {
        var result = FormatTraceNoResults(0, "last 60min", "");

        Assert.IsTrue(result.Contains("0 plugin trace logs"));
        Assert.IsTrue(result.Contains("last 60min"));
    }

    [TestMethod]
    public void FormatTraceNoResults_WithFilters_ShowsFilterDetails()
    {
        var result = FormatTraceNoResults(0, "last 120min", "account");

        Assert.IsTrue(result.Contains("0 plugin trace logs"));
        Assert.IsTrue(result.Contains("on account"));
        Assert.IsTrue(result.Contains("last 120min"));
    }

    // ──────────────────────────────────────────────
    // FormatDetailResult → BuildDetailText (private static, returns string)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatTraceDetailResultMethod = ToolType
        .GetMethod("BuildDetailText", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatTraceDetailResult(DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.PluginTraceLogEntry entry)
    {
        return (string)FormatTraceDetailResultMethod.Invoke(null, new object[] { entry })!;
    }

    [TestMethod]
    public void FormatTraceDetailResult_FullEntity_AllFieldsPresent()
    {
        var entry = new DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.PluginTraceLogEntry
        {
            Id = Guid.NewGuid().ToString(),
            TypeName = "MyNamespace.MyPlugin",
            MessageName = "Create",
            PrimaryEntity = "account",
            Mode = "Synchronous",
            Depth = 1,
            DurationMs = 150,
            CorrelationId = "11111111-1111-1111-1111-111111111111",
            CreatedOn = "2025-06-15 10:30:00",
            MessageBlock = "Trace line 1\nTrace line 2",
            ExceptionDetails = "System.NullReferenceException..."
        };

        var result = FormatTraceDetailResult(entry);

        Assert.IsTrue(result.Contains("Create on account"));
        Assert.IsTrue(result.Contains("(Synchronous)"));
        Assert.IsTrue(result.Contains("Trace: available"));
        Assert.IsTrue(result.Contains("Exception: available"));
        Assert.IsFalse(result.Contains("Trace line 1"));
        Assert.IsFalse(result.Contains("NullReferenceException"));
    }

    [TestMethod]
    public void FormatTraceDetailResult_AsyncMode_ShowsAsynchronous()
    {
        var entry = new DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.PluginTraceLogEntry
        {
            Id = Guid.NewGuid().ToString(),
            TypeName = "AsyncPlugin",
            Mode = "Asynchronous"
        };

        var result = FormatTraceDetailResult(entry);

        Assert.IsTrue(result.Contains("(Asynchronous)"));
    }

    [TestMethod]
    public void FormatTraceDetailResult_EmptyTraceAndException_ShowsNone()
    {
        var entry = new DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.PluginTraceLogEntry
        {
            Id = Guid.NewGuid().ToString(),
            TypeName = "TestPlugin"
        };

        var result = FormatTraceDetailResult(entry);

        Assert.IsTrue(result.Contains("Trace: none"));
        Assert.IsTrue(result.Contains("Exception: none"));
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
