using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageChoiceToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool);
    private static readonly MethodInfo DerivePortalOptionSetNameMethod = ToolType
        .GetMethod("DerivePortalOptionSetName", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // Return type — CallToolResult with IsError
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_ReturnType_IsCallToolResult()
    {
        var method = ToolType.GetMethod("manage_choice")!;
        Assert.AreEqual("CallToolResult", method.ReturnType.Name,
            "manage_choice must return CallToolResult, not string");
    }

    // ──────────────────────────────────────────────
    // Empty / null action — validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_EmptyAction_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "");
        Assert.IsTrue(result.IsError, "Should return IsError=true when action is empty");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("action is required"), "Error should mention action is required");
    }

    [TestMethod]
    public void ManageChoice_NullAction_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: null!);
        Assert.IsTrue(result.IsError, "Should return IsError=true when action is null");
    }

    [TestMethod]
    public void ManageChoice_InvalidAction_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "delete");
        Assert.IsTrue(result.IsError, "Should return IsError=true for invalid action");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("Invalid action"), "Error should mention invalid action");
        Assert.IsTrue(text.Contains("delete"), "Error should echo back the invalid action");
    }

    // ──────────────────────────────────────────────
    // action='list' — ListAllOptionSets path
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_List_NullServiceClient_ThrowsWrappedAsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "list");
        Assert.IsTrue(result.IsError, "Should return IsError=true when service client is null");
    }

    // ──────────────────────────────────────────────
    // action='detail' — optionset_name validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_Detail_EmptyName_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "detail", optionset_name: "");
        Assert.IsTrue(result.IsError, "Should return IsError=true when optionset_name is empty");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("optionset_name is required"), "Error should mention optionset_name is required");
    }

    [TestMethod]
    public void ManageChoice_Detail_InvalidName_ReturnsErrorWithHint()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "detail", optionset_name: "nonexistent_xyz");
        Assert.IsTrue(result.IsError, "Error response must have IsError=true");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("nonexistent_xyz"), "Error should echo back the input name");
        Assert.IsTrue(text.Contains("manage_choice"), "Error should suggest using manage_choice");
    }

    [TestMethod]
    public void ManageChoice_Detail_UppercaseName_IsNormalized()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "detail", optionset_name: "MY_OPTION_SET");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("my_option_set"), "Name should be lowercased in error message");
        Assert.IsFalse(text.Contains("MY_OPTION_SET"), "Original case should not appear");
    }

    [TestMethod]
    public void ManageChoice_Detail_WhitespaceName_IsTrimmed()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "detail", optionset_name: "  some_name  ");
        var text = GetText(result);
        Assert.IsTrue(text.Contains("'some_name'"), "Name should be trimmed");
    }

    // ──────────────────────────────────────────────
    // action='create' — validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_Create_EmptyName_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "create", optionset_name: "");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("display_name is required"), "Error should mention display_name is required");
    }

    [TestMethod]
    public void ManageChoice_Create_MissingDisplayName_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "create", optionset_name: "test_os", display_name: "");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("display_name is required"), "Error should mention display_name is required");
    }

    [TestMethod]
    public void ManageChoice_Create_MissingOptions_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "create", optionset_name: "test_os",
            display_name: "Test", options: "");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("options is required"), "Error should mention options is required");
    }

    [TestMethod]
    public void ManageChoice_Create_InvalidOptionsFormat_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "create", optionset_name: "test_os",
            display_name: "Test", options: ":invalid_format");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("Invalid options format"), "Error should mention invalid format");
    }

    [TestMethod]
    public void ManageChoice_Create_NegativeOptionValue_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "create", optionset_name: "test_os",
            display_name: "Test", options: "-1:Bad");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("Invalid options format"), "Error should mention invalid format for negative values");
    }

    // ──────────────────────────────────────────────
    // action='update' — validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_Update_EmptyName_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "update", optionset_name: "");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("optionset_name is required"), "Error should mention optionset_name is required");
    }

    [TestMethod]
    public void ManageChoice_Update_NoChanges_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "update", optionset_name: "test_os");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("No changes specified"), "Error should mention no changes");
    }

    [TestMethod]
    public void ManageChoice_Update_InvalidAddOptionsFormat_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "update", optionset_name: "test_os",
            add_options: "invalid_format");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("Invalid add_options format"), "Error should mention invalid add_options format");
    }

    [TestMethod]
    public void ManageChoice_Update_InvalidRemoveFormat_ReturnsError()
    {
        var tool = CreateTool();
        var result = tool.manage_choice(action: "update", optionset_name: "test_os",
            remove_options: ",");
        Assert.IsTrue(result.IsError);
        var text = GetText(result);
        Assert.IsTrue(text.Contains("Invalid remove_options format"), "Error should mention invalid remove format");
    }

    // ──────────────────────────────────────────────
    // ParseOptions — static method tests
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseOptions_EmptyInput_ReturnsEmptyList()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("");
        Assert.IsNotNull(result);
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void ParseOptions_NullInput_ReturnsEmptyList()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions(null!);
        Assert.IsNotNull(result);
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void ParseOptions_ValidPairs_ReturnsCorrectList()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions(
            "100000000:Active;100000001:Inactive");
        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual(100000000, result[0].value);
        Assert.AreEqual("Active", result[0].label);
        Assert.AreEqual(100000001, result[1].value);
        Assert.AreEqual("Inactive", result[1].label);
    }

    [TestMethod]
    public void ParseOptions_WithSpaces_TrimsCorrectly()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions(
            " 100000000 : Active ; 100000001 : Inactive ");
        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual("Active", result[0].label);
    }

    [TestMethod]
    public void ParseOptions_InvalidFormat_NoColon_ReturnsNull()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("not_valid");
        Assert.IsNull(result);
    }

    [TestMethod]
    public void ParseOptions_InvalidFormat_NonIntegerValue_ReturnsNull()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("abc:Label");
        Assert.IsNull(result);
    }

    [TestMethod]
    public void ParseOptions_NegativeValue_ReturnsNull()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("-1:Label");
        Assert.IsNull(result);
    }

    [TestMethod]
    public void ParseOptions_EmptyLabel_ReturnsNull()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("100000000:");
        Assert.IsNull(result);
    }

    [TestMethod]
    public void ParseOptions_TrailingSemicolon_IgnoresEmpty()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseOptions("100000000:Active;");
        Assert.IsNotNull(result);
        Assert.AreEqual(1, result.Count);
    }

    [TestMethod]
    [DataRow("Invoice Status", "devkit", "devkit_invoicestatus")]
    [DataRow("This Is A Global Choice", "devkit", "devkit_thisisaglobalchoice")]
    [DataRow("PO Number", "DevKit", "devkit_ponumber")]
    public void DerivePortalOptionSetName_UsesCompactLowercasePortalDefault(string displayName, string prefix, string expected)
    {
        var result = (string)DerivePortalOptionSetNameMethod.Invoke(null, new object[] { displayName, prefix })!;
        Assert.AreEqual(expected, result);
    }

    // ──────────────────────────────────────────────
    // ParseRemoveValues — static method tests
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRemoveValues_EmptyInput_ReturnsEmptyList()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseRemoveValues("");
        Assert.IsNotNull(result);
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void ParseRemoveValues_ValidValues_ReturnsCorrectList()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseRemoveValues("100000002,100000003");
        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual(100000002, result[0]);
        Assert.AreEqual(100000003, result[1]);
    }

    [TestMethod]
    public void ParseRemoveValues_InvalidFormat_ReturnsNull()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseRemoveValues("abc,def");
        Assert.IsNull(result);
    }

    [TestMethod]
    public void ParseRemoveValues_TrailingComma_IgnoresEmpty()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool.ParseRemoveValues("100000002,");
        Assert.IsNotNull(result);
        Assert.AreEqual(1, result.Count);
    }

    // ──────────────────────────────────────────────
    // SuccessResult / ErrorResult / DryRunResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SuccessResult_ReturnsCallToolResult_WithContent()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Success("test content", null);
        Assert.AreEqual(1, result.Content.Count, "SuccessResult should have exactly 1 content block");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("test content", text);
    }

    [TestMethod]
    public void SuccessResult_Content_ContainsText()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Success("hello world", null);
        Assert.AreEqual(1, result.Content.Count, "Should have exactly 1 content block");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("hello world", text);
    }

    [TestMethod]
    public void SuccessResult_EmptyText_HasContent()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Success("", null);
        Assert.AreEqual(1, result.Content.Count, "Should have 1 content block even for empty text");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("", text);
    }

    [TestMethod]
    public void ErrorResult_ReturnsCallToolResult_WithIsErrorTrue()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Error("something failed");
        Assert.IsTrue(result.IsError, "ErrorResult should have IsError=true");
    }

    [TestMethod]
    public void ErrorResult_Content_ContainsErrorMessage()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Error("Error: test message");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("Error: test message", text);
    }

    [TestMethod]
    public void ErrorResult_EmptyText_StillSetsIsError()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Error("");
        Assert.IsTrue(result.IsError, "ErrorResult should always set IsError=true");
        Assert.AreEqual(1, result.Content.Count);
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetDetail — additional coverage
    // ──────────────────────────────────────────────

    private static readonly Type CompactFormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter")!;

    private static readonly MethodInfo FormatOptionSetDetailMethod = CompactFormatterType
        .GetMethod("FormatOptionSetDetail", BindingFlags.Public | BindingFlags.Static)!;

    [TestMethod]
    public void FormatOptionSetDetail_PicklistWithZeroOptions_Shows0Total()
    {
        var osm = new OptionSetMetadata
        {
            IsGlobal = true
        };
        osm.GetType().GetProperty("Name")!.SetValue(osm, "test_empty");
        osm.GetType().GetProperty("OptionSetType")!.SetValue(osm, (OptionSetType?)OptionSetType.Picklist);

        var result = (string)FormatOptionSetDetailMethod.Invoke(null, [osm])!;
        Assert.IsTrue(result.Contains("[Options] 0 total"),
            "Empty OptionSetMetadata should show '[Options] 0 total'");
    }

    [TestMethod]
    public void FormatOptionSetDetail_PicklistWithOptions_ShowsCorrectCount()
    {
        var label0 = new Microsoft.Xrm.Sdk.Label();
        label0.UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel("Active", 1033);
        var label1 = new Microsoft.Xrm.Sdk.Label();
        label1.UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel("Inactive", 1033);

        var opt0 = new OptionMetadata { Value = 0, Label = label0 };
        var opt1 = new OptionMetadata { Value = 1, Label = label1 };

        var osm = new OptionSetMetadata(new OptionMetadataCollection { opt0, opt1 })
        {
            IsGlobal = true
        };
        osm.GetType().GetProperty("Name")!.SetValue(osm, "test_status");
        osm.GetType().GetProperty("OptionSetType")!.SetValue(osm, (OptionSetType?)OptionSetType.Picklist);

        var result = (string)FormatOptionSetDetailMethod.Invoke(null, [osm])!;
        Assert.IsTrue(result.Contains("[Options] 2 total"), "Should show 2 total options");
        Assert.IsTrue(result.Contains("Active"), "Should contain the 'Active' label");
        Assert.IsTrue(result.Contains("Inactive"), "Should contain the 'Inactive' label");
    }

    [TestMethod]
    public void FormatOptionSetDetail_WithDescription_ShowsDescription()
    {
        var osm = new OptionSetMetadata { IsGlobal = true };
        osm.GetType().GetProperty("Name")!.SetValue(osm, "test_desc");
        var descLabel = new Microsoft.Xrm.Sdk.Label();
        descLabel.UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel("My description", 1033);
        osm.GetType().GetProperty("Description")!.SetValue(osm, descLabel);

        var result = (string)FormatOptionSetDetailMethod.Invoke(null, [osm])!;
        Assert.IsTrue(result.Contains("Description: My description"), "Should show description");
    }

    [TestMethod]
    public void FormatOptionSetDetail_BooleanOptionSet_ShowsTrueFalse()
    {
        var boolOs = new BooleanOptionSetMetadata
        {
            Name = "test_boolean",
            TrueOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Yes", 1033), 1),
            FalseOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("No", 1033), 0)
        };

        var result = (string)FormatOptionSetDetailMethod.Invoke(null, [boolOs])!;

        Assert.IsTrue(result.Contains("[test_boolean]"));
        Assert.IsTrue(result.Contains("[Options] 2 total"));
        Assert.IsTrue(result.Contains("Value\tLabel"));
    }

    // ──────────────────────────────────────────────
    // DryRunResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void DryRunResult_ContainsDryRunPrefix()
    {
        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.DryRun(
            "Would do something", new { message = "Would do something" });
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("[DryRun]"), "DryRunResult should contain [DryRun] prefix");
        Assert.IsFalse(result.StructuredContent!.Value.ToString().Contains("dryRun", StringComparison.OrdinalIgnoreCase));
        Assert.IsTrue(result.StructuredContent.Value.ToString().Contains("message"));
    }

    // ──────────────────────────────────────────────
    // Helpers
    // ──────────────────────────────────────────────

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool CreateTool()
    {
        return new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageChoiceTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));
    }

    private static string GetText(CallToolResult result)
    {
        return ((TextContentBlock)result.Content[0]).Text;
    }
}
