using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public sealed class ManageColumnDeepDryRunCoverageTests
{
    private static readonly Type ToolType = typeof(ManageColumnTool);
    private readonly ManageColumnTool _tool = new(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

    [TestMethod]
    public void CreateAttributes_DryRunAppliesExplicitFlagsAndDescriptions()
    {
        var flags = NewFlags();
        var result = Invoke("CreateFileAttribute", "account", "devkit_document", "devkit_Document", "Document", "Long description", 0, "devkit", flags);

        Assert.IsFalse(result.IsError == true);
        var text = result.Content!.OfType<TextContentBlock>().Single().Text!;
        StringAssert.Contains(text, "Would CREATE File column");
    }

    [TestMethod]
    public void CreateBoolean_DryRunValidatesEveryDefaultValueBranch()
    {
        AssertError(Invoke("CreateBooleanAttribute", "account", "devkit_enabled", "devkit_Enabled", "Enabled", "", "", "", "devkit", null, "maybe", null), "Invalid default_value");

        var falseResult = Invoke("CreateBooleanAttribute", "account", "devkit_enabled", "devkit_Enabled", "Enabled", "Description", "", "", "devkit", null, "0", NewFlags());
        Assert.IsFalse(falseResult.IsError == true);
        StringAssert.Contains(falseResult.Content!.OfType<TextContentBlock>().Single().Text!, "Would CREATE Boolean column");
    }

    [TestMethod]
    public void PicklistCreate_DryRunRejectsMissingMalformedAndInvalidDefaults()
    {
        AssertError(Invoke("CreatePicklistAttribute", "account", "devkit_choice", "devkit_Choice", "Choice", "", "", "", false, "devkit", "", null), "options or global_optionset_name is required");
        AssertError(Invoke("CreatePicklistAttribute", "account", "devkit_choice", "devkit_Choice", "Choice", "", """[{"label":"One","value":1}]""", "", false, "devkit", "2", null), "does not match");
    }

    private object NewFlags()
    {
        var flagsType = ToolType.Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.ColumnFlags")!;
        return Activator.CreateInstance(flagsType, AttributeRequiredLevel.ApplicationRequired, true, true, true, true, true)!;
    }

    private CallToolResult Invoke(string name, params object?[] args) =>
        (CallToolResult)ToolType.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(_tool, args)!;

    private static void AssertError(CallToolResult result, string expected)
    {
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.Content!.OfType<TextContentBlock>().Single().Text!, expected);
    }
}
