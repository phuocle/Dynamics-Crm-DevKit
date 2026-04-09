using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class BuildFormXMLToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool);

    // ──────────────────────────────────────────────
    // Finding 1: Operations parameter description lists fewer actions than code supports
    // ──────────────────────────────────────────────

    [TestMethod]
    public void OperationsDescription_ListsAllSupportedActions()
    {
        var method = ToolType.GetMethod("build_form_xml", BindingFlags.Public | BindingFlags.Instance)!;
        var opsParam = method.GetParameters().First(p => p.Name == "operations");
        var descAttr = opsParam.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()!;
        var descText = descAttr.Description;

        // The description should list all 10 actions in the "Actions:" line
        var actionsLine = descText.Split('\n')
            .FirstOrDefault(l => l.TrimStart().StartsWith("Actions:"));
        Assert.IsNotNull(actionsLine, "Description must have an 'Actions:' line listing supported actions");

        var expectedActions = new[]
        {
            "add_tab", "add_section", "add_fields", "add_library", "add_event",
            "remove_tab", "remove_section", "remove_fields", "remove_library", "remove_event"
        };

        foreach (var action in expectedActions)
        {
            Assert.IsTrue(actionsLine.Contains(action),
                $"Actions line must list '{action}'. Got: {actionsLine}");
        }
    }

    [TestMethod]
    public void ToolDescription_ListsAllTenOperations()
    {
        var method = ToolType.GetMethod("build_form_xml", BindingFlags.Public | BindingFlags.Instance)!;
        var descAttr = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()!;
        var descText = descAttr.Description;

        var expectedOperations = new[]
        {
            "add_fields", "add_section", "add_tab", "add_library", "add_event",
            "remove_tab", "remove_section", "remove_fields", "remove_library", "remove_event"
        };

        foreach (var op in expectedOperations)
        {
            Assert.IsTrue(descText.Contains(op),
                $"Tool description must mention '{op}'. Description length: {descText.Length}");
        }
    }

    // ──────────────────────────────────────────────
    // Input validation tests (no Dataverse connection needed)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void BuildFormXml_EmptyEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "",
            form_id: "38c60f9f-e1db-f011-8406-0022480b95a5",
            operations: "[{\"action\":\"add_fields\"}]");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void BuildFormXml_WhitespaceEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "   ",
            form_id: "38c60f9f-e1db-f011-8406-0022480b95a5",
            operations: "[{\"action\":\"add_fields\"}]");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void BuildFormXml_InvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "account",
            form_id: "not-a-guid",
            operations: "[{\"action\":\"add_fields\"}]");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void BuildFormXml_EmptyOperations_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "account",
            form_id: "38c60f9f-e1db-f011-8406-0022480b95a5",
            operations: "");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("operations is required"));
    }

    [TestMethod]
    public void BuildFormXml_InvalidJson_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "account",
            form_id: "38c60f9f-e1db-f011-8406-0022480b95a5",
            operations: "not valid json");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Invalid operations JSON"));
    }

    [TestMethod]
    public void BuildFormXml_EmptyArray_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "account",
            form_id: "38c60f9f-e1db-f011-8406-0022480b95a5",
            operations: "[]");

        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("non-empty JSON array"));
    }

    [TestMethod]
    public void BuildFormXml_GuidWithBraces_ParsesCorrectly()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.BuildFormXMLTool(null!);
        var result = tool.build_form_xml(
            entity_name: "account",
            form_id: "{38c60f9f-e1db-f011-8406-0022480b95a5}",
            operations: "[{\"action\":\"add_fields\",\"tab\":\"t\",\"section\":\"s\",\"fields\":[\"name\"]}]");

        // Should NOT get "not a valid GUID" error — should fail later at Dataverse call
        var text = GetText(result);
        Assert.IsFalse(text.Contains("not a valid GUID"),
            $"GUID with braces should be accepted. Got: {text}");
    }

    // ──────────────────────────────────────────────
    // Helper
    // ──────────────────────────────────────────────

    private static string GetText(CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is TextContentBlock textBlock)
            return textBlock.Text ?? "";
        return "";
    }
}
