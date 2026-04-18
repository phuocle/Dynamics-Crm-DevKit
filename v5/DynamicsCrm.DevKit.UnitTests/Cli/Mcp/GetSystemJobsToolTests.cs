using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetSystemJobsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSystemJobsTool);

    private static readonly MethodInfo BuildStatusFilterMethod =
        ToolType.GetMethod("BuildStatusFilter", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo BuildOperationTypeFilterMethod =
        ToolType.GetMethod("BuildOperationTypeFilter", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapOperationTypeMethod =
        ToolType.GetMethod("MapOperationType", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapStatusCodeMethod =
        ToolType.GetMethod("MapStatusCode", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatExecutionTimeMethod =
        ToolType.GetMethod("FormatExecutionTime", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatTimeLabelMethod =
        ToolType.GetMethod("FormatTimeLabel", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo TruncateMessageMethod =
        ToolType.GetMethod("TruncateMessage", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NullIfEmptyMethod =
        ToolType.GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod =
        ToolType.GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod =
        ToolType.GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ── Helpers ──────────────────────────────────────────────────────────────

    private static string BuildStatusFilter(string? status) =>
        (string)BuildStatusFilterMethod.Invoke(null, [status])!;

    private static string BuildOperationTypeFilter(string? operationType) =>
        (string)BuildOperationTypeFilterMethod.Invoke(null, [operationType])!;

    private static string MapOperationType(int value) =>
        (string)MapOperationTypeMethod.Invoke(null, [value])!;

    private static string MapStatusCode(int value) =>
        (string)MapStatusCodeMethod.Invoke(null, [value])!;

    private static string FormatExecutionTime(double? seconds) =>
        (string)FormatExecutionTimeMethod.Invoke(null, [seconds])!;

    private static string FormatTimeLabel(int minutesAgo) =>
        (string)FormatTimeLabelMethod.Invoke(null, [minutesAgo])!;

    private static string? TruncateMessage(string? message, int maxLength) =>
        (string?)TruncateMessageMethod.Invoke(null, [message, maxLength]);

    private static string? NullIfEmpty(string? value) =>
        (string?)NullIfEmptyMethod.Invoke(null, [value]);

    private static string EscapeXml(string value) =>
        (string)EscapeXmlMethod.Invoke(null, [value])!;

    private static string EscapeTab(string value) =>
        (string)EscapeTabMethod.Invoke(null, [value])!;

    // ── BuildStatusFilter ────────────────────────────────────────────────────

    [TestMethod]
    public void BuildStatusFilter_Failed_ReturnsStatusCode31()
    {
        var result = BuildStatusFilter("failed");
        Assert.IsTrue(result.Contains("value='31'"), "failed should map to statuscode=31");
    }

    [TestMethod]
    public void BuildStatusFilter_Succeeded_ReturnsStatusCode30()
    {
        var result = BuildStatusFilter("succeeded");
        Assert.IsTrue(result.Contains("value='30'"), "succeeded should map to statuscode=30");
    }

    [TestMethod]
    public void BuildStatusFilter_InProgress_ReturnsStatusCode20()
    {
        var result = BuildStatusFilter("in_progress");
        Assert.IsTrue(result.Contains("value='20'"), "in_progress should map to statuscode=20");
    }

    [TestMethod]
    public void BuildStatusFilter_Canceled_ReturnsStatusCode32()
    {
        var result = BuildStatusFilter("canceled");
        Assert.IsTrue(result.Contains("value='32'"), "canceled should map to statuscode=32");
    }

    [TestMethod]
    public void BuildStatusFilter_Waiting_ReturnsOrFilter()
    {
        var result = BuildStatusFilter("waiting");
        Assert.IsTrue(result.Contains("value='0'"), "waiting should include statuscode=0");
        Assert.IsTrue(result.Contains("value='10'"), "waiting should include statuscode=10");
        Assert.IsTrue(result.Contains("filter type='or'"), "waiting should use OR filter");
    }

    [TestMethod]
    public void BuildStatusFilter_All_ReturnsEmpty()
    {
        var result = BuildStatusFilter("all");
        Assert.AreEqual("", result, "all should return empty string (no filter)");
    }

    [TestMethod]
    public void BuildStatusFilter_Unknown_DefaultsToFailed()
    {
        var result = BuildStatusFilter("xyz");
        Assert.IsTrue(result.Contains("value='31'"), "unknown status should default to failed (statuscode=31)");
    }

    [TestMethod]
    public void BuildStatusFilter_NullStatus_DefaultsToFailed()
    {
        var result = BuildStatusFilter(null);
        Assert.IsTrue(result.Contains("value='31'"), "null status should default to failed (statuscode=31)");
    }

    // ── BuildOperationTypeFilter ─────────────────────────────────────────────

    [TestMethod]
    public void BuildOperationTypeFilter_Plugin_IncludesValues1And54()
    {
        var result = BuildOperationTypeFilter("plugin");
        Assert.IsTrue(result.Contains("value='1'"), "plugin filter should include operationtype=1");
        Assert.IsTrue(result.Contains("value='54'"), "plugin filter should include operationtype=54");
        Assert.IsTrue(result.Contains("filter type='or'"), "plugin filter should use OR");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_Workflow_ReturnsValue10()
    {
        var result = BuildOperationTypeFilter("workflow");
        Assert.IsTrue(result.Contains("value='10'"), "workflow filter should include operationtype=10");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_BulkDelete_IncludesValues13And23()
    {
        var result = BuildOperationTypeFilter("bulk_delete");
        Assert.IsTrue(result.Contains("value='13'"), "bulk_delete filter should include operationtype=13");
        Assert.IsTrue(result.Contains("value='23'"), "bulk_delete filter should include operationtype=23");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_Import_IncludesValues5And17()
    {
        var result = BuildOperationTypeFilter("import");
        Assert.IsTrue(result.Contains("value='5'"), "import filter should include operationtype=5");
        Assert.IsTrue(result.Contains("value='17'"), "import filter should include operationtype=17");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_GoalRollUp_ReturnsValue40()
    {
        var result = BuildOperationTypeFilter("goal_rollup");
        Assert.IsTrue(result.Contains("value='40'"), "goal_rollup filter should include operationtype=40");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_Solution_IncludesValues202_203_204()
    {
        var result = BuildOperationTypeFilter("solution");
        Assert.IsTrue(result.Contains("value='202'"), "solution filter should include 202");
        Assert.IsTrue(result.Contains("value='203'"), "solution filter should include 203");
        Assert.IsTrue(result.Contains("value='204'"), "solution filter should include 204");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_All_ReturnsEmpty()
    {
        var result = BuildOperationTypeFilter("all");
        Assert.AreEqual("", result, "all should return empty string");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_Empty_ReturnsEmpty()
    {
        var result = BuildOperationTypeFilter("");
        Assert.AreEqual("", result, "empty string should return empty string");
    }

    [TestMethod]
    public void BuildOperationTypeFilter_Null_ReturnsEmpty()
    {
        var result = BuildOperationTypeFilter(null);
        Assert.AreEqual("", result, "null should return empty string");
    }

    // ── MapOperationType ─────────────────────────────────────────────────────

    [TestMethod]
    public void MapOperationType_1_ReturnsPlugin()
    {
        Assert.AreEqual("Plugin", MapOperationType(1));
    }

    [TestMethod]
    public void MapOperationType_10_ReturnsWorkflow()
    {
        Assert.AreEqual("Workflow", MapOperationType(10));
    }

    [TestMethod]
    public void MapOperationType_202_ReturnsExportSolution()
    {
        Assert.AreEqual("ExportSolution", MapOperationType(202));
    }

    [TestMethod]
    public void MapOperationType_UnknownValue_ReturnsSystemLabel()
    {
        var result = MapOperationType(999);
        Assert.IsTrue(result.Contains("999"), "unknown type should contain the numeric value");
        Assert.IsTrue(result.StartsWith("System("), "unknown type should use System() prefix");
    }

    // ── MapStatusCode ────────────────────────────────────────────────────────

    [TestMethod]
    public void MapStatusCode_30_ReturnsSucceeded()
    {
        Assert.AreEqual("Succeeded", MapStatusCode(30));
    }

    [TestMethod]
    public void MapStatusCode_31_ReturnsFailed()
    {
        Assert.AreEqual("Failed", MapStatusCode(31));
    }

    [TestMethod]
    public void MapStatusCode_20_ReturnsInProgress()
    {
        Assert.AreEqual("InProgress", MapStatusCode(20));
    }

    [TestMethod]
    public void MapStatusCode_UnknownValue_ReturnsStringRepresentation()
    {
        Assert.AreEqual("999", MapStatusCode(999));
    }

    // ── FormatExecutionTime ──────────────────────────────────────────────────

    [TestMethod]
    public void FormatExecutionTime_Null_ReturnsDash()
    {
        Assert.AreEqual("-", FormatExecutionTime(null));
    }

    [TestMethod]
    public void FormatExecutionTime_Zero_ReturnsDash()
    {
        Assert.AreEqual("-", FormatExecutionTime(0));
    }

    [TestMethod]
    public void FormatExecutionTime_UnderOneSecond_ReturnsMilliseconds()
    {
        var result = FormatExecutionTime(0.5);
        Assert.IsTrue(result.EndsWith("ms"), "sub-second should display in ms");
    }

    [TestMethod]
    public void FormatExecutionTime_Under60Seconds_ReturnsSeconds()
    {
        var result = FormatExecutionTime(30.5);
        Assert.IsTrue(result.EndsWith("s") && !result.Contains("m"), "under 60s should display in seconds");
    }

    [TestMethod]
    public void FormatExecutionTime_Under3600Seconds_ReturnsMinutesAndSeconds()
    {
        var result = FormatExecutionTime(125);
        Assert.IsTrue(result.Contains("m") && result.Contains("s"), "125s should display as Xm Ys");
    }

    [TestMethod]
    public void FormatExecutionTime_Over3600Seconds_ReturnsHoursAndMinutes()
    {
        var result = FormatExecutionTime(3661);
        Assert.IsTrue(result.Contains("h") && result.Contains("m"), "3661s should display as Xh Ym");
    }

    // ── FormatTimeLabel ──────────────────────────────────────────────────────

    [TestMethod]
    public void FormatTimeLabel_30Minutes_ReturnsMLabel()
    {
        var result = FormatTimeLabel(30);
        Assert.AreEqual("30m", result);
    }

    [TestMethod]
    public void FormatTimeLabel_120Minutes_ReturnsHoursLabel()
    {
        var result = FormatTimeLabel(120);
        Assert.AreEqual("2h", result);
    }

    [TestMethod]
    public void FormatTimeLabel_2880Minutes_ReturnsDaysLabel()
    {
        var result = FormatTimeLabel(2880);
        Assert.AreEqual("2d", result);
    }

    // ── TruncateMessage ──────────────────────────────────────────────────────

    [TestMethod]
    public void TruncateMessage_NullMessage_ReturnsNull()
    {
        Assert.IsNull(TruncateMessage(null, 100));
    }

    [TestMethod]
    public void TruncateMessage_WhitespaceMessage_ReturnsNull()
    {
        Assert.IsNull(TruncateMessage("   ", 100));
    }

    [TestMethod]
    public void TruncateMessage_ShortMessage_ReturnsUnchanged()
    {
        var result = TruncateMessage("Short message", 100);
        Assert.AreEqual("Short message", result);
    }

    [TestMethod]
    public void TruncateMessage_LongMessage_TruncatesWithEllipsis()
    {
        var message = new string('A', 200);
        var result = TruncateMessage(message, 100);
        Assert.AreEqual(103, result!.Length, "Truncated message should be maxLength + 3 chars for '...'");
        Assert.IsTrue(result.EndsWith("..."), "Truncated message should end with '...'");
    }

    [TestMethod]
    public void TruncateMessage_NewLines_ReplacedWithSpaces()
    {
        var result = TruncateMessage("line1\nline2\r\nline3", 100);
        Assert.IsFalse(result!.Contains("\n"), "Newlines should be replaced");
        Assert.IsFalse(result.Contains("\r"), "Carriage returns should be replaced");
    }

    // ── NullIfEmpty ──────────────────────────────────────────────────────────

    [TestMethod]
    public void NullIfEmpty_Null_ReturnsNull()
    {
        Assert.IsNull(NullIfEmpty(null));
    }

    [TestMethod]
    public void NullIfEmpty_EmptyString_ReturnsNull()
    {
        Assert.IsNull(NullIfEmpty(""));
    }

    [TestMethod]
    public void NullIfEmpty_WhitespaceOnly_ReturnsNull()
    {
        Assert.IsNull(NullIfEmpty("   "));
    }

    [TestMethod]
    public void NullIfEmpty_ValidString_ReturnsTrimmed()
    {
        Assert.AreEqual("hello", NullIfEmpty("  hello  "));
    }

    // ── EscapeXml ────────────────────────────────────────────────────────────

    [TestMethod]
    public void EscapeXml_Ampersand_EscapedCorrectly()
    {
        Assert.AreEqual("a&amp;b", EscapeXml("a&b"));
    }

    [TestMethod]
    public void EscapeXml_LessThan_EscapedCorrectly()
    {
        Assert.AreEqual("a&lt;b", EscapeXml("a<b"));
    }

    [TestMethod]
    public void EscapeXml_GreaterThan_EscapedCorrectly()
    {
        Assert.AreEqual("a&gt;b", EscapeXml("a>b"));
    }

    [TestMethod]
    public void EscapeXml_SingleQuote_EscapedCorrectly()
    {
        Assert.AreEqual("a&apos;b", EscapeXml("a'b"));
    }

    [TestMethod]
    public void EscapeXml_DoubleQuote_EscapedCorrectly()
    {
        Assert.AreEqual("a&quot;b", EscapeXml("a\"b"));
    }

    [TestMethod]
    public void EscapeXml_PlainString_Unchanged()
    {
        Assert.AreEqual("hello world", EscapeXml("hello world"));
    }

    // ── EscapeTab ────────────────────────────────────────────────────────────

    [TestMethod]
    public void EscapeTab_Tab_ReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\tb"));
    }

    [TestMethod]
    public void EscapeTab_Newline_ReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\nb"));
    }

    [TestMethod]
    public void EscapeTab_CarriageReturn_Removed()
    {
        Assert.AreEqual("ab", EscapeTab("a\rb"));
    }

    [TestMethod]
    public void EscapeTab_PlainString_Unchanged()
    {
        Assert.AreEqual("hello", EscapeTab("hello"));
    }
}
