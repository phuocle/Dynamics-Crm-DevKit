using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetChoicesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool);

    private static readonly MethodInfo GetSingleOptionSetMethod = ToolType
        .GetMethod("GetSingleOptionSet", BindingFlags.NonPublic | BindingFlags.Instance)!;

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

    [TestMethod]
    public void GetChoices_EmptyName_NullServiceClient_ThrowsWrappedAsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "");
        Assert.IsTrue(result.IsError, "Should return IsError=true when service client is null");
    }

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
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("my_bad_name"), "Error should echo back the input name");
    }

    [TestMethod]
    public void GetChoices_UppercaseName_IsNormalized()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "MY_OPTION_SET");
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("my_option_set"), "Name should be lowercased in error message");
        Assert.IsFalse(text.Contains("MY_OPTION_SET"), "Original case should not appear");
    }

    [TestMethod]
    public void GetChoices_WhitespaceName_IsTrimmed()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetChoicesTool(null!);
        var result = tool.get_choices(optionset_name: "  some_name  ");
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("'some_name'"), "Name should be trimmed");
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetDetail — empty options
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
}
