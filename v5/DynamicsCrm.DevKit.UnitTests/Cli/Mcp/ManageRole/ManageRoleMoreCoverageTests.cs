using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleMoreCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRoleTool);

    [TestMethod]
    public void RemainingPureMappings_UseFallbacksAndCaseInsensitiveValues()
    {
        Assert.AreEqual("User", Static("NormalizeDepth", "USER"));
        Assert.AreEqual("None", Static("NormalizeDepth", "none"));
        Assert.AreEqual("Invalid", Static("NormalizeDepth", "invalid"));
        Assert.AreEqual("Unknown(0)", Static("MapDepthMask", 0));
        Assert.AreEqual(0, Static("DepthRank", new object[] { null! }));
        Assert.AreEqual(("", "(misc)"), Static("ParsePrivilegeName", ""));
        Assert.AreEqual(("prvCustom", "(misc)"), Static("ParsePrivilegeName", "prvCustom"));
    }

    [TestMethod]
    public void ConstructorAndPrivateRoleHandlers_ValidateOfflineInputs()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageRoleTool(null!, null!, new McpExecutionContext(true)));
        var tool = new ManageRoleTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var create = (ModelContextProtocol.Protocol.CallToolResult)Instance(tool, "HandleCreate", "", "");
        Assert.IsTrue(create.IsError == true);
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static object Instance(ManageRoleTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(tool, args)!;
}
