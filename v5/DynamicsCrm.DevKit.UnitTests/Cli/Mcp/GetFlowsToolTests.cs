using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetFlowsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetFlowsTool);

    private static readonly MethodInfo BuildStatusFilterMethod =
        ToolType.GetMethod("BuildStatusFilter", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatDurationMethod =
        ToolType.GetMethod("FormatDuration", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NullIfEmptyMethod =
        ToolType.GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod =
        ToolType.GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod =
        ToolType.GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ── Helpers ───────────────────────────────────────────────────────────────

    private static string BuildStatusFilter(string statusFilter) =>
        (string)BuildStatusFilterMethod.Invoke(null, [statusFilter])!;

    private static string FormatDuration(DateTime? started, DateTime? completed) =>
        (string)FormatDurationMethod.Invoke(null, [started, completed]);

    private static string NullIfEmpty(string value) =>
        (string)NullIfEmptyMethod.Invoke(null, [value]);

    private static string EscapeXml(string value) =>
        (string)EscapeXmlMethod.Invoke(null, [value])!;

    private static string EscapeTab(string value) =>
        (string)EscapeTabMethod.Invoke(null, [value])!;

    // ── BuildStatusFilter ─────────────────────────────────────────────────────

    [TestMethod]
    public void BuildStatusFilter_Succeeded_ReturnsStatusCode4()
    {
        var result = BuildStatusFilter("succeeded");
        Assert.IsTrue(result.Contains("value='4'"), "succeeded should map to statuscode=4");
    }

    [TestMethod]
    public void BuildStatusFilter_Failed_ReturnsStatusCode8()
    {
        var result = BuildStatusFilter("failed");
        Assert.IsTrue(result.Contains("value='8'"), "failed should map to statuscode=8");
    }

    [TestMethod]
    public void BuildStatusFilter_Running_ReturnsStatusCode2()
    {
        var result = BuildStatusFilter("running");
        Assert.IsTrue(result.Contains("value='2'"), "running should map to statuscode=2");
    }

    [TestMethod]
    public void BuildStatusFilter_Cancelled_ReturnsStatusCode7()
    {
        var result = BuildStatusFilter("cancelled");
        Assert.IsTrue(result.Contains("value='7'"), "cancelled should map to statuscode=7");
    }

    [TestMethod]
    public void BuildStatusFilter_Waiting_ReturnsStatusCode3()
    {
        var result = BuildStatusFilter("waiting");
        Assert.IsTrue(result.Contains("value='3'"), "waiting should map to statuscode=3");
    }

    [TestMethod]
    public void BuildStatusFilter_Paused_ReturnsStatusCode1()
    {
        var result = BuildStatusFilter("paused");
        Assert.IsTrue(result.Contains("value='1'"), "paused should map to statuscode=1");
    }

    [TestMethod]
    public void BuildStatusFilter_Skipped_ReturnsStatusCode5()
    {
        var result = BuildStatusFilter("skipped");
        Assert.IsTrue(result.Contains("value='5'"), "skipped should map to statuscode=5");
    }

    [TestMethod]
    public void BuildStatusFilter_Suspended_ReturnsStatusCode6()
    {
        var result = BuildStatusFilter("suspended");
        Assert.IsTrue(result.Contains("value='6'"), "suspended should map to statuscode=6");
    }

    [TestMethod]
    public void BuildStatusFilter_Empty_ReturnsEmpty()
    {
        var result = BuildStatusFilter("");
        Assert.AreEqual("", result, "empty should return empty string (no filter)");
    }

    [TestMethod]
    public void BuildStatusFilter_Null_ReturnsEmpty()
    {
        var result = BuildStatusFilter(null);
        Assert.AreEqual("", result, "null should return empty string");
    }

    [TestMethod]
    public void BuildStatusFilter_Unknown_ReturnsEmpty()
    {
        var result = BuildStatusFilter("invalid_status");
        Assert.AreEqual("", result, "unknown status should return empty string");
    }

    [TestMethod]
    public void BuildStatusFilter_CaseInsensitive_Succeeded()
    {
        var result = BuildStatusFilter("SUCCEEDED");
        Assert.IsTrue(result.Contains("value='4'"), "BuildStatusFilter should be case-insensitive");
    }

    // ── FormatDuration ────────────────────────────────────────────────────────

    [TestMethod]
    public void FormatDuration_BothNull_ReturnsNull()
    {
        Assert.IsNull(FormatDuration(null, null));
    }

    [TestMethod]
    public void FormatDuration_StartedNull_ReturnsNull()
    {
        Assert.IsNull(FormatDuration(null, DateTime.UtcNow));
    }

    [TestMethod]
    public void FormatDuration_CompletedNull_ReturnsNull()
    {
        Assert.IsNull(FormatDuration(DateTime.UtcNow, null));
    }

    [TestMethod]
    public void FormatDuration_UnderOneSecond_ReturnsLessThan1s()
    {
        var start = new DateTime(2024, 1, 1, 10, 0, 0);
        var end = start.AddMilliseconds(500);
        var result = FormatDuration(start, end);
        Assert.AreEqual("<1s", result);
    }

    [TestMethod]
    public void FormatDuration_UnderOneMinute_ReturnsSeconds()
    {
        var start = new DateTime(2024, 1, 1, 10, 0, 0);
        var end = start.AddSeconds(45);
        var result = FormatDuration(start, end);
        Assert.AreEqual("45s", result);
    }

    [TestMethod]
    public void FormatDuration_UnderOneHour_ReturnsMinutesAndSeconds()
    {
        var start = new DateTime(2024, 1, 1, 10, 0, 0);
        var end = start.AddMinutes(5).AddSeconds(30);
        var result = FormatDuration(start, end);
        Assert.AreEqual("5m 30s", result);
    }

    [TestMethod]
    public void FormatDuration_OverOneHour_ReturnsHoursAndMinutes()
    {
        var start = new DateTime(2024, 1, 1, 10, 0, 0);
        var end = start.AddHours(2).AddMinutes(15);
        var result = FormatDuration(start, end);
        Assert.AreEqual("2h 15m", result);
    }

    // ── NullIfEmpty ───────────────────────────────────────────────────────────

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
    public void NullIfEmpty_Whitespace_ReturnsNull()
    {
        Assert.IsNull(NullIfEmpty("   "));
    }

    [TestMethod]
    public void NullIfEmpty_ValidString_ReturnsTrimmed()
    {
        Assert.AreEqual("hello", NullIfEmpty("  hello  "));
    }

    // ── EscapeXml ─────────────────────────────────────────────────────────────

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
    public void EscapeXml_NoSpecialChars_Unchanged()
    {
        Assert.AreEqual("hello world", EscapeXml("hello world"));
    }

    // ── EscapeTab ─────────────────────────────────────────────────────────────

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
