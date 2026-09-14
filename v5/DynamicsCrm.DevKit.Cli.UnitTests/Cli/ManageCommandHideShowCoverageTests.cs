using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class ManageCommandHideShowCoverageTests
{
    private static readonly MethodInfo HandleHideShowMethod =
        typeof(ManageCommandTool).GetMethod("HandleHideShow", BindingFlags.NonPublic | BindingFlags.Instance)!;

    private static readonly MethodInfo LocationOobNamePrefixMethod =
        typeof(ManageCommandTool).GetMethod("LocationOobNamePrefix", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo ResolvePublisherPrefixMethod =
        typeof(ManageCommandTool).GetMethod("ResolvePublisherPrefix", BindingFlags.NonPublic | BindingFlags.Instance)!;

    [TestMethod]
    public void HandleHideShow_DryRun_ReturnsDryRunResult()
    {
        var dryRunOptions = new McpDryRunOptions { DryRun = true };
        var tool = new ManageCommandTool(null!, dryRunOptions, new McpExecutionContext(true));

        var resultHide = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { "cmd-123", null, null, null, null, null, true })!;
        Assert.IsNotNull(resultHide);
        var textHide = ((TextContentBlock)resultHide.Content[0]).Text;
        Assert.IsTrue(textHide.Contains("Would hide appaction command 'cmd-123'"));

        var resultShow = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { "cmd-456", null, null, null, null, null, false })!;
        Assert.IsNotNull(resultShow);
        var textShow = ((TextContentBlock)resultShow.Content[0]).Text;
        Assert.IsTrue(textShow.Contains("Would show appaction command 'cmd-456'"));
    }

    [TestMethod]
    public void HandleHideShow_InvalidCommandIdGuid_ReturnsError()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions { DryRun = false }, new McpExecutionContext(true));
        var result = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { "not-a-guid", null, null, null, null, null, true })!;
        Assert.IsNotNull(result);
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("is not a valid GUID"));
    }

    [TestMethod]
    public void HandleHideShow_MissingLabelOrEntityOrLocation_ReturnsValidationErrors()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions { DryRun = false }, new McpExecutionContext(true));

        // Missing label
        var res1 = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { null, "account", "form", "app1", null, null, true })!;
        Assert.IsTrue(res1.IsError);
        Assert.IsTrue(((TextContentBlock)res1.Content[0]).Text.Contains("Provide command_id OR"));

        // Missing entity_name
        var res2 = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { null, null, "form", "app1", null, "Save", true })!;
        Assert.IsTrue(res2.IsError);
        Assert.IsTrue(((TextContentBlock)res2.Content[0]).Text.Contains("entity_name is required"));

        // Missing location
        var res3 = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { null, "account", null, "app1", null, "Save", true })!;
        Assert.IsTrue(res3.IsError);
        Assert.IsTrue(((TextContentBlock)res3.Content[0]).Text.Contains("location is required"));

        // wantHidden = true and missing appId/appName
        var res4 = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { null, "account", "form", null, null, "Save", true })!;
        Assert.IsTrue(res4.IsError);
        Assert.IsTrue(((TextContentBlock)res4.Content[0]).Text.Contains("app_id or app_name is required"));

        // Invalid location string
        var res5 = (CallToolResult)HandleHideShowMethod.Invoke(tool, new object?[] { null, "account", "invalid_location", "app1", null, "Save", true })!;
        Assert.IsTrue(res5.IsError);
        Assert.IsTrue(((TextContentBlock)res5.Content[0]).Text.Contains("Invalid location"));
    }

    [TestMethod]
    public void LocationOobNamePrefix_AllKnownLocations()
    {
        Assert.AreEqual("Form", LocationOobNamePrefixMethod.Invoke(null, new object[] { 0 }));
        Assert.AreEqual("HomepageGrid", LocationOobNamePrefixMethod.Invoke(null, new object[] { 1 }));
        Assert.AreEqual("SubGrid", LocationOobNamePrefixMethod.Invoke(null, new object[] { 2 }));
        Assert.AreEqual("SubGrid", LocationOobNamePrefixMethod.Invoke(null, new object[] { 3 }));
        Assert.AreEqual("QuickForm", LocationOobNamePrefixMethod.Invoke(null, new object[] { 4 }));
        Assert.AreEqual("GlobalHeader", LocationOobNamePrefixMethod.Invoke(null, new object[] { 5 }));
        Assert.AreEqual("Dashboard", LocationOobNamePrefixMethod.Invoke(null, new object[] { 6 }));
        Assert.AreEqual("Form", LocationOobNamePrefixMethod.Invoke(null, new object[] { 999 })); // default fallback
    }

    [TestMethod]
    public void ResolvePublisherPrefix_PrefixedAndNonPrefixed()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var prefix1 = (string)ResolvePublisherPrefixMethod.Invoke(tool, new object[] { "new_custom_entity" })!;
        Assert.AreEqual("new", prefix1);

        var prefix2 = (string)ResolvePublisherPrefixMethod.Invoke(tool, new object[] { "account" })!;
        Assert.AreEqual("account", prefix2);
    }
}
