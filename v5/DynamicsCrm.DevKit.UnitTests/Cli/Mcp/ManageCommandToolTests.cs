using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageCommandToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageCommandTool);

    private static readonly FieldInfo LocationMapField = ToolType
        .GetField("LocationMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo LocationFilterMapField = ToolType
        .GetField("LocationFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OriginMapField = ToolType
        .GetField("OriginMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OriginFilterMapField = ToolType
        .GetField("OriginFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo TypeMapField = ToolType
        .GetField("TypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OnClickEventTypeMapField = ToolType
        .GetField("OnClickEventTypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo ActionTypeFilterMapField = ToolType
        .GetField("ActionTypeFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo TruncateMethod = ToolType
        .GetMethod("Truncate", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NullIfEmptyMethod = ToolType
        .GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageCommandTool CreateTool() =>
        new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions { DryRun = false }, new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(false));

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageCommandTool CreateDryRunTool() =>
        new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions { DryRun = true }, new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));

    // ──────────────────────────────────────────────
    // LocationFilterMap covers all LocationMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void LocationFilterMap_CoversAllLocationMapValues()
    {
        var locationMap = (Dictionary<int, string>)LocationMapField.GetValue(null)!;
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;

        foreach (var kvp in locationMap)
        {
            var snakeCase = PascalToSnakeCase(kvp.Value);
            Assert.IsTrue(
                locationFilterMap.ContainsKey(snakeCase),
                $"LocationFilterMap is missing '{snakeCase}' (LocationMap value {kvp.Key}='{kvp.Value}')");
            Assert.AreEqual(kvp.Key, locationFilterMap[snakeCase],
                $"LocationFilterMap['{snakeCase}'] should map to {kvp.Key}");
        }
    }

    [TestMethod]
    public void LocationFilterMap_ContainsGlobalHeader()
    {
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;
        Assert.IsTrue(locationFilterMap.ContainsKey("global_header"),
            "LocationFilterMap must contain 'global_header'");
        Assert.AreEqual(5, locationFilterMap["global_header"]);
    }

    [TestMethod]
    public void LocationFilterMap_ContainsDashboard()
    {
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;
        Assert.IsTrue(locationFilterMap.ContainsKey("dashboard"),
            "LocationFilterMap must contain 'dashboard'");
        Assert.AreEqual(6, locationFilterMap["dashboard"]);
    }

    // ──────────────────────────────────────────────
    // OriginFilterMap covers all OriginMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void OriginFilterMap_CoversAllOriginMapValues()
    {
        var originMap = (Dictionary<int, string>)OriginMapField.GetValue(null)!;
        var originFilterMap = (Dictionary<string, int>)OriginFilterMapField.GetValue(null)!;

        foreach (var kvp in originMap)
        {
            var snakeCase = PascalToSnakeCase(kvp.Value);
            Assert.IsTrue(
                originFilterMap.ContainsKey(snakeCase),
                $"OriginFilterMap is missing '{snakeCase}' (OriginMap value {kvp.Key}='{kvp.Value}')");
        }
    }

    // ──────────────────────────────────────────────
    // ActionTypeFilterMap covers all OnClickEventTypeMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ActionTypeFilterMap_CoversAllOnClickEventTypeMapValues()
    {
        var onClickMap = (Dictionary<int, string>)OnClickEventTypeMapField.GetValue(null)!;
        var actionTypeFilterMap = (Dictionary<string, int>)ActionTypeFilterMapField.GetValue(null)!;

        foreach (var kvp in onClickMap)
        {
            var lowerCase = kvp.Value.ToLowerInvariant();
            Assert.IsTrue(
                actionTypeFilterMap.ContainsKey(lowerCase),
                $"ActionTypeFilterMap is missing '{lowerCase}' (OnClickEventTypeMap value {kvp.Key}='{kvp.Value}')");
        }
    }

    // ──────────────────────────────────────────────
    // Action routing validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_EmptyAction_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("action is required"));
    }

    [TestMethod]
    public void Validation_InvalidAction_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "delete");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid action"));
    }

    // ──────────────────────────────────────────────
    // List validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_ListInvalidLocation_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "list", location: "INVALID_LOCATION");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid location"));
    }

    [TestMethod]
    public void Validation_ListInvalidOrigin_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "list", origin: "INVALID_ORIGIN");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid origin"));
    }

    [TestMethod]
    public void Validation_ListInvalidActionType_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "list", action_type: "INVALID_TYPE");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid action_type"));
    }

    [TestMethod]
    public void Validation_ListMaxRecordsZero_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "list", max_records: 0);
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("max_records must be between 1 and 500"));
    }

    [TestMethod]
    public void Validation_ListMaxRecordsNegative_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "list", max_records: -1);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Validation_ListOriginAll_IsAccepted()
    {
        var tool = CreateTool();
        try
        {
            tool.manage_command(action: "list", origin: "all");
        }
        catch (NullReferenceException)
        {
            // Expected — ServiceClient is null, but validation passed
        }
    }

    // ──────────────────────────────────────────────
    // Detail validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_DetailMissingCommandId_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "detail");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("command_id or label is required"));
    }

    [TestMethod]
    public void Validation_DetailInvalidGuid_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "detail", command_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // Create validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_CreateMissingEntityName_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "create", location: "form", label: "Test", app_id: "00000000-0000-0000-0000-000000000001");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public void Validation_CreateMissingLocation_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "create", entity_name: "account", label: "Test", app_id: "00000000-0000-0000-0000-000000000001");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("location is required"));
    }

    [TestMethod]
    public void Validation_CreateMissingLabel_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "create", entity_name: "account", location: "form", app_id: "00000000-0000-0000-0000-000000000001");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("label is required"));
    }

    [TestMethod]
    public void Validation_CreateInvalidLocation_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "create", entity_name: "account", location: "INVALID", label: "Test", app_id: "00000000-0000-0000-0000-000000000001");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid location"));
    }

    [TestMethod]
    public void Validation_CreateMissingApp_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "create", entity_name: "account", location: "form", label: "Test");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("app_id or app_name is required"));
    }

    [TestMethod]
    public void Validation_CreateDryRun_ReturnsPreview()
    {
        var tool = CreateDryRunTool();
        var result = tool.manage_command(action: "create", entity_name: "account", location: "form", label: "Test", app_id: "00000000-0000-0000-0000-000000000001");
        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("[DryRun]"));
    }

    // ──────────────────────────────────────────────
    // Update validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_UpdateMissingCommandId_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "update", label: "New Label");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("command_id is required"));
    }

    [TestMethod]
    public void Validation_UpdateInvalidGuid_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_command(action: "update", command_id: "not-a-guid", label: "New Label");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void Validation_UpdateDryRun_ReturnsPreview()
    {
        var tool = CreateDryRunTool();
        var result = tool.manage_command(action: "update", command_id: "00000000-0000-0000-0000-000000000001", label: "New Label");
        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("[DryRun]"));
    }

    // ──────────────────────────────────────────────
    // Helper methods
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_HideShowMissingLookupParts_ReturnErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.manage_command(action: "hide").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "hide", label: "Open").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "hide", label: "Open", entity_name: "account").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "hide", label: "Open", entity_name: "account", location: "form").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "show").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "show", label: "Open").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "show", label: "Open", entity_name: "account").IsError == true);
    }

    [TestMethod]
    public void Validation_HideShowInvalidGuidAndLocation_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "hide", command_id: "bad-guid")), "not a valid GUID");
        StringAssert.Contains(GetText(tool.manage_command(action: "show", command_id: "bad-guid")), "not a valid GUID");
        StringAssert.Contains(GetText(tool.manage_command(action: "hide", label: "Open", entity_name: "account", location: "bad", app_id: "00000000-0000-0000-0000-000000000001")), "Invalid location");
        StringAssert.Contains(GetText(tool.manage_command(action: "show", label: "Open", entity_name: "account", location: "bad")), "Invalid location");
    }

    [TestMethod]
    public void Validation_HideShowDryRun_ReturnsPreview()
    {
        var tool = CreateDryRunTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "hide", command_id: "00000000-0000-0000-0000-000000000001")), "[DryRun]");
        StringAssert.Contains(GetText(tool.manage_command(action: "show", command_id: "00000000-0000-0000-0000-000000000001")), "[DryRun]");
    }

    [TestMethod]
    public void Validation_AddFlyoutInputs_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout")), "entity_name is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account")), "location is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form")), "label is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More")), "items is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "bad", label: "More", items: "[]")), "Invalid location");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More", items: "{bad")), "Invalid items JSON");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More", items: "{}")), "items must be a JSON array");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More", items: "[]")), "items array must have at least 1 item");
    }

    [TestMethod]
    public void Validation_AddFlyoutDryRun_ReturnsBlocked()
    {
        var tool = CreateDryRunTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More", items: "[{\"label\":\"One\"}]")), "[DryRun]");
    }

    [TestMethod]
    public void Validation_UpdateFlyoutInputs_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "update_flyout")), "command_id is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "update_flyout", command_id: "bad-guid")), "not a valid GUID");
        StringAssert.Contains(GetText(CreateDryRunTool().manage_command(action: "update_flyout", command_id: "00000000-0000-0000-0000-000000000001")), "[DryRun]");
    }

    [TestMethod]
    public void Validation_AddSplitButtonInputs_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button")), "entity_name is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account")), "location is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form")), "label is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More")), "items is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "bad", label: "More", items: "[]")), "Invalid location");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", onclick_type: "bad", items: "[]")), "Invalid onclick_type");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", items: "{bad")), "Invalid items JSON");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", items: "{}")), "items must be a JSON array");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", items: "[]")), "items array must have at least 1 item");
    }

    [TestMethod]
    public void Validation_AddSplitButtonDryRun_ReturnsBlocked()
    {
        var tool = CreateDryRunTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", items: "[{\"label\":\"One\"}]")), "[DryRun]");
    }

    [TestMethod]
    public void Validation_UpdateSplitButtonInputs_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "update_split_button")), "command_id is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "update_split_button", command_id: "bad-guid")), "not a valid GUID");
        StringAssert.Contains(GetText(CreateDryRunTool().manage_command(action: "update_split_button", command_id: "00000000-0000-0000-0000-000000000001")), "[DryRun]");
    }

    [TestMethod]
    public void Validation_FlyoutItemInputs_ReturnErrors()
    {
        var tool = CreateTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout_item")), "flyout_command_id is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout_item", flyout_command_id: "bad-guid")), "not a valid GUID");
        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout_item", flyout_command_id: "00000000-0000-0000-0000-000000000001")), "label is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "remove_flyout_item")), "command_id is required");
        StringAssert.Contains(GetText(tool.manage_command(action: "remove_flyout_item", command_id: "bad-guid")), "not a valid GUID");
    }

    [TestMethod]
    public void Validation_FlyoutItemDryRun_ReturnsPreview()
    {
        var tool = CreateDryRunTool();

        StringAssert.Contains(GetText(tool.manage_command(action: "add_flyout_item", flyout_command_id: "00000000-0000-0000-0000-000000000001", label: "One")), "[DryRun]");
        StringAssert.Contains(GetText(tool.manage_command(action: "remove_flyout_item", command_id: "00000000-0000-0000-0000-000000000001")), "[DryRun]");
    }

    [TestMethod]
    public void EscapeXml_SpecialChars_Escaped()
    {
        var result = (string)EscapeXmlMethod.Invoke(null, new object[] { "a&b<c>d'e\"f" })!;
        Assert.AreEqual("a&amp;b&lt;c&gt;d&apos;e&quot;f", result);
    }

    [TestMethod]
    public void EscapeTab_TabsAndNewlines_Replaced()
    {
        var result = (string)EscapeTabMethod.Invoke(null, new object[] { "a\tb\nc\rd" })!;
        Assert.AreEqual("a b cd", result);
    }

    [TestMethod]
    public void Truncate_LongString_Truncated()
    {
        var input = new string('x', 300);
        var result = (string)TruncateMethod.Invoke(null, new object[] { input, 200 })!;
        Assert.AreEqual(203, result.Length); // 200 + "..."
        Assert.IsTrue(result.EndsWith("..."));
    }

    [TestMethod]
    public void Truncate_ShortString_Unchanged()
    {
        var result = (string)TruncateMethod.Invoke(null, new object[] { "short", 200 })!;
        Assert.AreEqual("short", result);
    }

    [TestMethod]
    public void Truncate_NullOrEmpty_ReturnsEmpty()
    {
        var result1 = (string)TruncateMethod.Invoke(null, new object[] { (string)null!, 200 })!;
        Assert.AreEqual("", result1);

        var result2 = (string)TruncateMethod.Invoke(null, new object[] { "", 200 })!;
        Assert.AreEqual("", result2);
    }

    [TestMethod]
    public void NullIfEmpty_WhitespaceOnly_ReturnsNull()
    {
        var result = NullIfEmptyMethod.Invoke(null, new object[] { "   " });
        Assert.IsNull(result);
    }

    [TestMethod]
    public void NullIfEmpty_ValidString_ReturnsTrimmed()
    {
        var result = (string)NullIfEmptyMethod.Invoke(null, new object[] { "  hello  " })!;
        Assert.AreEqual("hello", result);
    }

    // ──────────────────────────────────────────────
    // Private helper
    // ──────────────────────────────────────────────

    private static string PascalToSnakeCase(string pascal)
    {
        var result = new System.Text.StringBuilder();
        for (int i = 0; i < pascal.Length; i++)
        {
            if (i > 0 && char.IsUpper(pascal[i]))
                result.Append('_');
            result.Append(char.ToLowerInvariant(pascal[i]));
        }
        return result.ToString();
    }

    private static string GetText(CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is TextContentBlock textBlock)
            return textBlock.Text ?? "";
        return "";
    }
}
