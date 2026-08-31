using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ParseRecordUrl;

[TestClass]
public sealed class ParseRecordUrlAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ParseRecordUrlTool);

    [TestMethod]
    public void CleanGuidAndQueryHelpers_CoverEncodedInvalidAndHashInputs()
    {
        Assert.AreEqual("11111111-2222-3333-4444-555555555555", InvokeStatic<string>("CleanGuid", " %7B11111111-2222-3333-4444-555555555555%7D "));
        Assert.IsNull(InvokeStatic<string>("CleanGuid", "not-guid"));
        Assert.IsNull(InvokeStatic<string>("CleanGuid", (object?)null));
        Assert.AreEqual("?id=1", InvokeStatic<string>("ExtractQueryString", "https://org/path?id=1#fragment"));
        Assert.IsNull(InvokeStatic<string>("ExtractQueryString", "https://org/path"));
        Assert.IsNotNull(InvokeStatic("ExtractAndParseQueryString", "https://org/path?id=1&name=Test"));
    }

    [TestMethod]
    public void FormattingHelpers_CoverKnownAndUnknownDisplayValues()
    {
        var formatted = InvokeStatic("FormatResult", "account", "id", "source");
        Assert.AreEqual("account", formatted.GetType().GetProperty("EntityName")!.GetValue(formatted));
        var maker = InvokeStatic("FormatMakerResult", "workflow", "id", "environment", "source", "flow");
        Assert.AreEqual("flow", maker.GetType().GetProperty("FlowId")!.GetValue(maker));
        Assert.AreEqual("account id (source).", InvokeStatic<string>("BuildCompactText", formatted));
        var empty = InvokeStatic("FormatResult", null, null, "source");
        Assert.AreEqual("(unknown) (none) (source).", InvokeStatic<string>("BuildCompactText", empty));
    }

    [TestMethod]
    public void TryParseRawGuid_RejectsTextWithoutGuid()
    {
        Assert.IsNull(InvokeStatic("TryParseRawGuid", "plain text"));
        Assert.IsNotNull(InvokeStatic("TryParseRawGuid", "prefix 11111111-2222-3333-4444-555555555555 suffix"));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
