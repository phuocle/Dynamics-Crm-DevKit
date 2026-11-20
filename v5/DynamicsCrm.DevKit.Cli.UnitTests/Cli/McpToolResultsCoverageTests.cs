using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public class McpToolResultsCoverageTests
{
    [TestMethod]
    public void Success_Structure()
    {
        var r = McpToolResults.Success("done", new { count = 5 });
        Assert.IsNotNull(r);
        Assert.IsTrue(r.IsError != true);
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Success]");
        StringAssert.Contains(text, "done");
    }

    [TestMethod]
    public void Success_StripsExistingPrefix()
    {
        var r = McpToolResults.Success("[Success] already done", null);
        var text = ((TextContentBlock)r.Content[0]).Text;
        Assert.IsTrue(text.StartsWith("[Success] "));
        Assert.IsFalse(text.Contains("[Success] [Success]"));
    }

    [TestMethod]
    public void Success_StructuredContent_IncludesSummary()
    {
        var r = McpToolResults.Success("done", new { foo = "bar" });
        var json = JsonSerializer.Serialize(r.StructuredContent);
        StringAssert.Contains(json, "summary");
        StringAssert.Contains(json, "foo");
    }

    [TestMethod]
    public void Success_NullStructured_StillWorks()
    {
        var r = McpToolResults.Success("done", null);
        Assert.IsNotNull(r);
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Success]");
    }

    [TestMethod]
    public void Partial_Structure()
    {
        var r = McpToolResults.Partial("some done", new { count = 3 });
        Assert.IsTrue(r.IsError);
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Partial]");
        StringAssert.Contains(text, "[Detail]");
    }

    [TestMethod]
    public void Partial_StripsPrefix()
    {
        var r = McpToolResults.Partial("[Partial] already partial", new { });
        var text = ((TextContentBlock)r.Content[0]).Text;
        Assert.IsFalse(text.Contains("[Partial] [Partial]"));
    }

    [TestMethod]
    public void Failed_Structure()
    {
        var r = McpToolResults.Failed("all failed", new { errs = 5 });
        Assert.IsTrue(r.IsError);
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Failed]");
        StringAssert.Contains(text, "[Detail]");
    }

    [TestMethod]
    public void Failed_StripsPrefix()
    {
        var r = McpToolResults.Failed("[Failed] already", new { });
        var text = ((TextContentBlock)r.Content[0]).Text;
        Assert.IsFalse(text.Contains("[Failed] [Failed]"));
    }

    [TestMethod]
    public void Error_MessageOnly()
    {
        var r = McpToolResults.Error("bad input");
        Assert.IsTrue(r.IsError);
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Error]");
        StringAssert.Contains(text, "bad input");
    }

    [TestMethod]
    public void Error_WithHint()
    {
        var r = McpToolResults.Error("oops", "try this");
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Hint]");
        StringAssert.Contains(text, "try this");
    }

    [TestMethod]
    public void Error_WithDetails()
    {
        var r = McpToolResults.Error("oops", null, new { candidates = new[] { "a", "b" } });
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[Detail]");
    }

    [TestMethod]
    public void Error_StripsExistingPrefix()
    {
        var r = McpToolResults.Error("[Error] already error", "hint", null);
        var text = ((TextContentBlock)r.Content[0]).Text;
        Assert.IsFalse(text.Contains("[Error] [Error]"));
    }

    [TestMethod]
    public void DryRun_Structure()
    {
        var r = McpToolResults.DryRun("Would do X", new { x = 1 });
        var text = ((TextContentBlock)r.Content[0]).Text;
        StringAssert.Contains(text, "[DryRun]");
    }

    [TestMethod]
    public void DryRun_NoSummary_NullText()
    {
        var r = McpToolResults.DryRun(null!, new { });
        Assert.IsNotNull(r);
    }

    [TestMethod]
    [DoNotParallelize]
    [DataRow(nameof(McpToolResults.Success), false)]
    [DataRow(nameof(McpToolResults.DryRun), false)]
    [DataRow(nameof(McpToolResults.Partial), true)]
    [DataRow(nameof(McpToolResults.Failed), true)]
    [DataRow(nameof(McpToolResults.Error), true)]
    [DataRow(nameof(McpToolResults.ThrowException), true)]
    public void TextDetail_UsesShortEscapesOnlyForAntigravity(string resultType, bool otherClientShowsDetail)
    {
        const string xml = "<condition value=\"1033\" />";
        const string defaultEscaping = @"\u003Ccondition value=\u00221033\u0022 /\u003E";
        const string shortEscaping = """<condition value=\"1033\" />""";
        const string detailSeparator = "\n[Detail] ";
        var payload = new { fetchXml = xml };
        var previousClient = McpToolResults.ClientName;
        try
        {
            McpToolResults.ClientName = "Antigravity";
            var antigravity = BuildResult();
            McpToolResults.ClientName = "Other MCP client";
            var otherClient = BuildResult();

            Assert.AreEqual(otherClient.StructuredContent!.Value.GetRawText(), antigravity.StructuredContent!.Value.GetRawText());
            var antigravityDetail = antigravity.GetText().Split(detailSeparator, 2, StringSplitOptions.None)[1];
            StringAssert.Contains(antigravityDetail, shortEscaping);
            using var parsedDetail = JsonDocument.Parse(antigravityDetail);
            var xmlProperty = resultType == nameof(McpToolResults.ThrowException) ? "message" : "fetchXml";
            Assert.AreEqual(xml, parsedDetail.RootElement.GetProperty(xmlProperty).GetString());

            var otherText = otherClient.GetText();
            if (otherClientShowsDetail)
            {
                var otherDetail = otherText.Split(detailSeparator, 2, StringSplitOptions.None)[1];
                StringAssert.Contains(otherDetail, defaultEscaping);
            }
            else
                Assert.IsFalse(otherText.Contains(detailSeparator, StringComparison.Ordinal));
        }
        finally
        {
            McpToolResults.ClientName = previousClient;
        }

        CallToolResult BuildResult() => resultType switch
        {
            nameof(McpToolResults.Success) => McpToolResults.Success("summary", payload),
            nameof(McpToolResults.DryRun) => McpToolResults.DryRun("summary", payload),
            nameof(McpToolResults.Partial) => McpToolResults.Partial("summary", payload),
            nameof(McpToolResults.Failed) => McpToolResults.Failed("summary", payload),
            nameof(McpToolResults.Error) => McpToolResults.Error("summary", details: payload),
            nameof(McpToolResults.ThrowException) => McpToolResults.ThrowException(new InvalidOperationException(xml)),
            _ => throw new ArgumentOutOfRangeException(nameof(resultType))
        };
    }
}
