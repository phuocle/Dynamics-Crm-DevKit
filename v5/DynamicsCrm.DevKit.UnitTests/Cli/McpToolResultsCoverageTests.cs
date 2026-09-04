using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

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
}
