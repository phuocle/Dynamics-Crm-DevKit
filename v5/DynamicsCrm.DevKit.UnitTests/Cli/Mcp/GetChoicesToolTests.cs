using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetChoicesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool);

    // ──────────────────────────────────────────────
    // Return type — CallToolResult with IsError
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetChoices_ReturnType_IsCallToolResult()
    {
        var method = ToolType.GetMethod("get_choices")!;
        Assert.AreEqual("CallToolResult", method.ReturnType.Name,
            "get_choices must return CallToolResult, not string");
    }

    // ──────────────────────────────────────────────
    // Empty / null optionset_name — ListAllOptionSets path
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetChoices_EmptyName_NullServiceClient_ThrowsWrappedAsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "");
        Assert.IsTrue(result.IsError, "Should return IsError=true when service client is null");
    }

    [TestMethod]
    public void GetChoices_NullName_NullServiceClient_ThrowsWrappedAsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: null!);
        Assert.IsTrue(result.IsError, "Should return IsError=true when service client is null");
    }

    [TestMethod]
    public void GetChoices_WhitespaceOnlyName_TreatedAsEmpty_ListPath()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "   ");
        Assert.IsTrue(result.IsError, "Whitespace-only name should be treated as empty and route to ListAll, which fails on null client");
    }

    [TestMethod]
    public void GetChoices_EmptyName_ErrorContainsContextMessage()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Error"), "Error text should contain 'Error'");
        Assert.IsTrue(text.Contains("global option sets"), "Error text should mention global option sets");
    }

    // ──────────────────────────────────────────────
    // Named optionset_name — GetSingleOptionSet path
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetChoices_InvalidName_ReturnsIsErrorTrue()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "nonexistent_xyz");
        Assert.IsTrue(result.IsError, "Error response must have IsError=true");
    }

    [TestMethod]
    public void GetChoices_InvalidName_ErrorMessageContainsName()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "my_bad_name");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("my_bad_name"), "Error should echo back the input name");
    }

    [TestMethod]
    public void GetChoices_InvalidName_ErrorMessageContainsCallHint()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "test_name");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Call get_choices"), "Error should suggest calling get_choices with empty name");
    }

    [TestMethod]
    public void GetChoices_UppercaseName_IsNormalized()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "MY_OPTION_SET");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("my_option_set"), "Name should be lowercased in error message");
        Assert.IsFalse(text.Contains("MY_OPTION_SET"), "Original case should not appear");
    }

    [TestMethod]
    public void GetChoices_WhitespaceName_IsTrimmed()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "  some_name  ");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("'some_name'"), "Name should be trimmed");
    }

    [TestMethod]
    public void GetChoices_MixedCaseWithSpaces_NormalizedAndTrimmed()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "  MY_Status  ");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("my_status"), "Name should be trimmed and lowercased");
    }

    // ──────────────────────────────────────────────
    // SuccessResult / ErrorResult (private static) via reflection
    // ──────────────────────────────────────────────

    private static readonly MethodInfo SuccessResultMethod = ToolType
        .GetMethod("SuccessResult", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo ErrorResultMethod = ToolType
        .GetMethod("ErrorResult", BindingFlags.NonPublic | BindingFlags.Static)!;

    [TestMethod]
    public void SuccessResult_ReturnsCallToolResult_WithContent()
    {
        var result = (CallToolResult)SuccessResultMethod.Invoke(null, new object[] { "test content" })!;
        Assert.AreEqual(1, result.Content.Count, "SuccessResult should have exactly 1 content block");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("test content", text);
    }

    [TestMethod]
    public void SuccessResult_Content_ContainsText()
    {
        var result = (CallToolResult)SuccessResultMethod.Invoke(null, new object[] { "hello world" })!;
        Assert.AreEqual(1, result.Content.Count, "Should have exactly 1 content block");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("hello world", text);
    }

    [TestMethod]
    public void SuccessResult_EmptyText_HasContent()
    {
        var result = (CallToolResult)SuccessResultMethod.Invoke(null, new object[] { "" })!;
        Assert.AreEqual(1, result.Content.Count, "Should have 1 content block even for empty text");
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("", text);
    }

    [TestMethod]
    public void ErrorResult_ReturnsCallToolResult_WithIsErrorTrue()
    {
        var result = (CallToolResult)ErrorResultMethod.Invoke(null, new object[] { "something failed" })!;
        Assert.IsTrue(result.IsError, "ErrorResult should have IsError=true");
    }

    [TestMethod]
    public void ErrorResult_Content_ContainsErrorMessage()
    {
        var result = (CallToolResult)ErrorResultMethod.Invoke(null, new object[] { "Error: test message" })!;
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.AreEqual("Error: test message", text);
    }

    [TestMethod]
    public void ErrorResult_EmptyText_StillSetsIsError()
    {
        var result = (CallToolResult)ErrorResultMethod.Invoke(null, new object[] { "" })!;
        Assert.IsTrue(result.IsError, "ErrorResult should always set IsError=true");
        Assert.AreEqual(1, result.Content.Count);
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetDetail — additional coverage
    // ──────────────────────────────────────────────

    private static readonly Type CompactFormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool).Assembly
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
}
