using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for ManageWebResourceTool: action validation, type maps, input normalization, and helpers.
/// </summary>
[TestClass]
public class ManageWebResourceToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool);

    // ──────────────────────────────────────────────
    // TypeFilterMap (private static readonly)
    // ──────────────────────────────────────────────

    private static readonly FieldInfo TypeFilterMapField = ToolType
        .GetField("TypeFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static Dictionary<string, int> GetTypeFilterMap()
    {
        return (Dictionary<string, int>)TypeFilterMapField.GetValue(null)!;
    }

    // ──────────────────────────────────────────────
    // TypeCodeMap (private static readonly)
    // ──────────────────────────────────────────────

    private static readonly FieldInfo TypeCodeMapField = ToolType
        .GetField("TypeCodeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static Dictionary<int, string> GetTypeCodeMap()
    {
        return (Dictionary<int, string>)TypeCodeMapField.GetValue(null)!;
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

    // ──────────────────────────────────────────────
    // EscapeTab (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapeTab(string value)
    {
        return (string)EscapeTabMethod.Invoke(null, new object[] { value })!;
    }

    // ──────────────────────────────────────────────
    // NullIfEmpty (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo NullIfEmptyMethod = ToolType
        .GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string? NullIfEmpty(string? value)
    {
        return (string?)NullIfEmptyMethod.Invoke(null, new object?[] { value });
    }

    // ═══════════════════════════════════════════════
    // TypeFilterMap Tests
    // ═══════════════════════════════════════════════

    [TestMethod]
    public void TypeFilterMap_Contains12Types_IncludingXslAndXap()
    {
        var map = GetTypeFilterMap();

        Assert.AreEqual(12, map.Count, "TypeFilterMap should have 12 entries");
        Assert.IsTrue(map.ContainsKey("xsl"), "TypeFilterMap must contain 'xsl'");
        Assert.IsTrue(map.ContainsKey("xap"), "TypeFilterMap must contain 'xap'");
        Assert.IsTrue(map.ContainsKey("js"), "TypeFilterMap must contain 'js'");
        Assert.IsTrue(map.ContainsKey("html"), "TypeFilterMap must contain 'html'");
    }

    [TestMethod]
    public void TypeFilterMap_IsCaseInsensitive()
    {
        var map = GetTypeFilterMap();

        Assert.IsTrue(map.ContainsKey("JS"), "TypeFilterMap should be case-insensitive for 'JS'");
        Assert.IsTrue(map.ContainsKey("Html"), "TypeFilterMap should be case-insensitive for 'Html'");
        Assert.IsTrue(map.ContainsKey("XSL"), "TypeFilterMap should be case-insensitive for 'XSL'");
    }

    [TestMethod]
    public void TypeFilterMap_AndTypeCodeMap_AreInSync()
    {
        var filterMap = GetTypeFilterMap();
        var codeMap = GetTypeCodeMap();

        foreach (var kvp in filterMap)
        {
            Assert.IsTrue(codeMap.ContainsKey(kvp.Value),
                $"TypeFilterMap entry '{kvp.Key}' maps to code {kvp.Value}, but TypeCodeMap has no entry for {kvp.Value}");
        }
    }

    // ═══════════════════════════════════════════════
    // Action Validation Tests (via direct instantiation)
    // ═══════════════════════════════════════════════

    [TestMethod]
    public void ManageWebResource_EmptyAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("action is required"));
    }

    [TestMethod]
    public void ManageWebResource_WhitespaceAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "   ");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("action is required"));
    }

    [TestMethod]
    public void ManageWebResource_InvalidAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "invalid_xyz");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid action"));
        Assert.IsTrue(text.Contains("invalid_xyz"));
    }

    [TestMethod]
    public void ManageWebResource_DetailWithoutId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "detail");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("web_resource_id is required"));
    }

    [TestMethod]
    public void ManageWebResource_DetailWithInvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "detail", web_resource_id: "not-a-guid");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("not a valid GUID"));
    }

    [TestMethod]
    public void ManageWebResource_CreateMissingName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "create");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("name is required"));
    }

    [TestMethod]
    public void ManageWebResource_CreateMissingFilePath_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "create", name: "test_wr");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("file_path is required"));
    }

    [TestMethod]
    public void ManageWebResource_CreateMissingType_ReturnsError()
    {
        var tempFile = System.IO.Path.GetTempFileName();
        System.IO.File.WriteAllText(tempFile, "test");
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "create", name: "test_wr", file_path: tempFile);

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("type is required"));

        System.IO.File.Delete(tempFile);
    }

    [TestMethod]
    public void ManageWebResource_CreateInvalidType_ReturnsError()
    {
        var tempFile = System.IO.Path.GetTempFileName();
        System.IO.File.WriteAllText(tempFile, "test");
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "create", name: "test_wr", file_path: tempFile, type: "invalid");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid type"));

        System.IO.File.Delete(tempFile);
    }

    [TestMethod]
    public void ManageWebResource_UpdateWithoutId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "update");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("web_resource_id is required"));
    }

    [TestMethod]
    public void ManageWebResource_DeleteWithoutId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "delete");

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("web_resource_id is required"));
    }

    // ═══════════════════════════════════════════════
    // max_records Validation
    // ═══════════════════════════════════════════════

    [TestMethod]
    public void ManageWebResource_ListWithMaxRecordsZero_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "list", max_records: 0);

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("max_records must be between 1 and 500"));
    }

    [TestMethod]
    public void ManageWebResource_ListWithNegativeMaxRecords_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageWebResourceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
        var result = tool.manage_webresource(action: "list", max_records: -5);

        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("max_records must be between 1 and 500"));
    }

    // ═══════════════════════════════════════════════
    // Helper Method Tests
    // ═══════════════════════════════════════════════

    [TestMethod]
    public void EscapeXml_EscapesAllSpecialCharacters()
    {
        var result = EscapeXml("A&B<C>D'E\"F");
        Assert.AreEqual("A&amp;B&lt;C&gt;D&apos;E&quot;F", result);
    }

    [TestMethod]
    public void EscapeTab_RemovesTabsAndNewlines()
    {
        var result = EscapeTab("A\tB\nC\rD");
        Assert.AreEqual("A B CD", result);
    }

    [TestMethod]
    public void NullIfEmpty_ReturnsNullForEmpty()
    {
        Assert.IsNull(NullIfEmpty(""));
        Assert.IsNull(NullIfEmpty("   "));
        Assert.IsNull(NullIfEmpty(null));
    }

    [TestMethod]
    public void NullIfEmpty_ReturnsTrimmedValue()
    {
        Assert.AreEqual("hello", NullIfEmpty("  hello  "));
        Assert.AreEqual("test", NullIfEmpty("test"));
    }
}
