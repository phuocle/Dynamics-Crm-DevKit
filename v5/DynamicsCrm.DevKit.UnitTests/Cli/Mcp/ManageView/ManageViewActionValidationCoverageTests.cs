using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

[TestClass]
public sealed class ManageViewActionValidationCoverageTests
{
    private static readonly Type ToolType = typeof(ManageViewTool);
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;
    private static readonly BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;

    [TestMethod]
    public void MutationHandlers_RejectInvalidInputsBeforeAnyDataverseCall()
    {
        var tool = new ManageViewTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        StringAssert.Contains(Text(Invoke(tool, "HandleCreate", "account", "", "")), "view_name is required");
        StringAssert.Contains(Text(Invoke(tool, "HandleUpdate", "account", "", "", false, "", "")), "view_id or view_name is required");
        StringAssert.Contains(Text(Invoke(tool, "HandleUpdate", "account", "not-a-guid", "", false, "", "")), "not a valid GUID");
        StringAssert.Contains(Text(Invoke(tool, "HandleRename", "account", "", "")), "view_id is required");
        StringAssert.Contains(Text(Invoke(tool, "HandleRename", "account", "bad", "")), "not a valid GUID");
        StringAssert.Contains(Text(Invoke(tool, "HandleSetDefault", "account", "", "")), "view_id or view_name is required");
        StringAssert.Contains(Text(Invoke(tool, "HandleSetDefault", "account", "bad", "")), "not a valid GUID");
        StringAssert.Contains(Text(Invoke(tool, "HandleUndo", "account", "", "", "")), "view_id is required");
        StringAssert.Contains(Text(Invoke(tool, "HandleUndo", "account", "bad", "", "")), "not a valid GUID");
    }

    [TestMethod]
    public void ViewSelectionAndValidationHelpers_CoverExactAndBrokenXmlPaths()
    {
        var exact = new Microsoft.Xrm.Sdk.Entity("savedquery") { ["name"] = " Active Accounts " };
        var contains = new Microsoft.Xrm.Sdk.Entity("savedquery") { ["name"] = "Active Accounts - old" };
        var preferred = (System.Collections.Generic.List<Microsoft.Xrm.Sdk.Entity>)InvokeStatic("PreferExactViewNameMatches", new[] { contains, exact }, "active accounts")!;
        Assert.AreSame(exact, preferred.Single());
        Assert.AreEqual(2, ((System.Collections.Generic.List<Microsoft.Xrm.Sdk.Entity>)InvokeStatic("PreferExactViewNameMatches", new[] { contains, exact }, "none")!).Count);

        Assert.IsNotNull(InvokeStatic("RunValidation",
            "<grid><row id='accountid'><cell name='name' width='150'/></row></grid>",
            "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/></entity></fetch>",
            "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/></entity></fetch>", 0, ""));
        Assert.IsNotNull(InvokeStatic("RunValidation", "<grid>", null,
            "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", 0, ""));
    }

    private static CallToolResult Invoke(ManageViewTool tool, string name, params object?[] args) =>
        (CallToolResult)ToolType.GetMethods(PrivateInstance).Single(m => m.Name == name && m.GetParameters().Length == args.Length).Invoke(tool, args)!;

    private static object? InvokeStatic(string name, params object?[] args) =>
        ToolType.GetMethods(PrivateStatic).Single(m => m.Name == name && m.GetParameters().Length == args.Length).Invoke(null, args);

    private static string Text(CallToolResult result) =>
        ((TextContentBlock)result.Content.First()).Text ?? "";
}
