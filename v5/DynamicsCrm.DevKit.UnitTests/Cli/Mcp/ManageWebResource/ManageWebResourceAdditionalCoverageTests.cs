using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageWebResource;

[TestClass]
public sealed class ManageWebResourceAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageWebResourceTool);

    private static ManageWebResourceTool Tool(bool dryRun = true) =>
        new(null!, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(true));

    [TestMethod]
    public void Constructor_RequiresOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageWebResourceTool(null!, null!, new McpExecutionContext(true)));
        Assert.Throws<ArgumentNullException>(() => new ManageWebResourceTool(null!, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    public void ResolveWebResourceIdInput_HandlesGuidAndNullServiceFallback()
    {
        var tool = Tool();
        var guid = Guid.Parse("11999999-1111-1111-1111-111111111111");

        var valid = ((ValueTuple<Guid?, string>)Instance(tool, "ResolveWebResourceIdInput", "  " + guid + "  "));
        var missing = ((ValueTuple<Guid?, string>)Instance(tool, "ResolveWebResourceIdInput", " "));
        var invalid = ((ValueTuple<Guid?, string>)Instance(tool, "ResolveWebResourceIdInput", "not-guid"));

        Assert.AreEqual(guid, valid.Item1);
        Assert.IsNull(valid.Item2);
        Assert.IsNull(missing.Item1);
        StringAssert.Contains(missing.Item2, "required");
        Assert.IsNull(invalid.Item1);
        StringAssert.Contains(invalid.Item2, "not a valid GUID");
    }

    [TestMethod]
    public void MapEntry_UsesNamesFormattingAndUnknownType()
    {
        var id = Guid.Parse("22999999-2222-2222-2222-222222222222");
        var e = new Entity("webresource", id)
        {
            ["name"] = "prefix_/test.js",
            ["displayname"] = "  Display  ",
            ["webresourcetype"] = new OptionSetValue(999),
            ["ismanaged"] = true,
            ["modifiedon"] = new DateTime(2026, 8, 31, 1, 2, 3),
            ["modifiedby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Maker" }
        };

        var mapped = (WebResourceEntry)Static("MapEntry", e);

        Assert.AreEqual(id.ToString(), mapped.WebResourceId);
        Assert.AreEqual("Display", mapped.DisplayName);
        Assert.AreEqual("999", mapped.Type);
        Assert.AreEqual("2026-08-31 01:02:03", mapped.ModifiedOn);
        Assert.AreEqual("Maker", mapped.ModifiedBy);
    }

    [TestMethod]
    public void ValidationAndLocalFilePaths_AreHandledBeforeDataverse()
    {
        var tool = Tool();
        Assert.IsTrue(tool.manage_webresource("list", type_filter: "bad").IsError);
        Assert.IsTrue(tool.manage_webresource("create", name: "x", file_path: "does-not-exist", type: "js").IsError);
        Assert.IsTrue(tool.manage_webresource("create", name: "x", file_path: "does-not-exist", type: " ").IsError);
        Assert.IsTrue(tool.manage_webresource("update", web_resource_id: "bad-id").IsError);
        Assert.IsTrue(tool.manage_webresource("delete", web_resource_id: "bad-id").IsError);
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;

    private static object Instance(ManageWebResourceTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(tool, args)!;
}
