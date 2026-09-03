using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChoice;

[TestClass]
public sealed class ManageChoiceMoreCoverageTests
{
    private static readonly Type ToolType = typeof(ManageChoiceTool);

    [TestMethod]
    public void ConstructorAndPublicActionValidation_AreFriendly()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageChoiceTool(null!, null!, new McpExecutionContext(true)));
        Assert.Throws<ArgumentNullException>(() => new ManageChoiceTool(null!, new McpDryRunOptions(), null!));
        var tool = new ManageChoiceTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        Assert.IsTrue(tool.manage_choice("").IsError);
        Assert.IsTrue(tool.manage_choice("unknown").IsError);
    }

    [TestMethod]
    public void ColorAndPortalHelpers_NormalizeAndCoverFallbacks()
    {
        Assert.IsTrue((bool)Static("ColorEquals", " #abc123 ", "#ABC123"));
        Assert.IsFalse((bool)Static("ColorEquals", "#abc123", "#123456"));
        Assert.AreEqual("abc123", Static("NormalizeColor", " abc123 "));
        Assert.AreEqual("", Static("NormalizeColor", new object[] { null! }));
        Assert.AreEqual("new_newprefixchoice", Static("DerivePortalOptionSetName", "New Prefix Choice", "new"));
        Assert.AreEqual("new_choice", Static("DerivePortalOptionSetName", "Choice", "new"));
    }

    [TestMethod]
    public void OptionColorLookup_AndProjectedOptions_HandleMissingValues()
    {
        var metadata = new OptionSetMetadata { Options = { new OptionMetadata { Value = 1, Color = "#123456" } } };
        Assert.AreEqual("#123456", Static("GetOptionColor", metadata, 1));
        Assert.IsNull(Static("GetOptionColor", metadata, 2));
        var projected = (List<(int value, string label)>)Static("BuildProjectedOptions", metadata,
            new List<int>(), new List<(int value, string newLabel)>(), new List<(int value, string label)>());
        Assert.AreEqual(1, projected.Count);
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;
}
