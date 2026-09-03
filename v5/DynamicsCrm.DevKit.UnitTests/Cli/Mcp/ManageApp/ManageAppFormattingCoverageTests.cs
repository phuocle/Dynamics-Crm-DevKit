using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageApp;

[TestClass]
public sealed class ManageAppFormattingCoverageTests
{
    private static readonly Type ToolType = typeof(ManageAppTool);
    private const BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;

    [TestMethod]
    public void SiteMapFormatting_CoversTitlesEntitiesUrlsAndInvalidXml()
    {
        var xml = "<SiteMap><Area Id='area'><Titles><Title Title='Sales'/></Titles><Group Id='group'><Titles><Title Title='Customers'/></Titles><SubArea Id='accounts' Entity='account'><Titles><Title Title='Accounts'/></Titles></SubArea><SubArea Id='help' Url='https://example.test'><Titles><Title Title='Help'/></Titles></SubArea></Group></Area></SiteMap>";

        var tree = Invoke<string>("FormatNavigationTree", xml);
        StringAssert.Contains(tree, "Area: Sales");
        StringAssert.Contains(tree, "Entity: account (Accounts)");
        StringAssert.Contains(tree, "Item: Help");

        var areas = ((System.Collections.IEnumerable)Invoke("ParseNavigationAreas", xml)).Cast<object>().ToList();
        Assert.AreEqual(1, areas.Count);
        Assert.AreEqual("Sales", Property<string>(areas[0], "Title"));
        var groups = (System.Collections.IEnumerable)Property<object>(areas[0], "Groups");
        var group = groups.Cast<object>().Single();
        var items = ((System.Collections.IEnumerable)Property<object>(group, "Items")).Cast<object>().ToList();
        Assert.AreEqual("account", Property<string>(items[0], "Entity"));
        Assert.AreEqual("https://example.test", Property<string>(items[1], "Url"));

        StringAssert.Contains(Invoke<string>("FormatNavigationTree", "<SiteMap>"), "failed to parse");
        Assert.AreEqual(0, ((System.Collections.IEnumerable)Invoke("ParseNavigationAreas", "<SiteMap>")).Cast<object>().Count());
        Assert.AreEqual("", Invoke<string>("FormatNavigationTree", " "));
    }

    [TestMethod]
    public void AppUtilityHelpers_CoverComponentDescriptionsWarningsAndValidation()
    {
        var components = new EntityReferenceCollection
        {
            new("entity", Guid.NewGuid()),
            new("sitemap", Guid.NewGuid())
        };
        var descriptions = Invoke<List<string>>("DescribeEntityAppComponents", "account", components, true);
        CollectionAssert.Contains(descriptions, "account");
        CollectionAssert.Contains(descriptions, "sitemap");

        Assert.IsNull(Invoke<List<string>>("MergeWarnings", null, null));
        CollectionAssert.AreEqual(new[] { "a", "SiteMap XSD: b" }, Invoke<List<string>>("MergeWarnings", new List<string> { "a" }, new List<string> { "b" }));
        Assert.IsTrue(Invoke<bool>("IsImageWebResourceType", 5));
        Assert.IsFalse(Invoke<bool>("IsImageWebResourceType", 3));
        Assert.IsTrue(Invoke<bool>("IsSchemaEvolutionError", "attribute is not declared"));

        var malformed = Invoke<object>("ValidateSiteMapXml", "<SiteMap>");
        var errors = (List<string>)malformed.GetType().GetField("Item1")!.GetValue(malformed)!;
        Assert.AreEqual(1, errors.Count);
    }

    [TestMethod]
    public void MutationHandlers_RejectRequiredInputsWithoutDataverse()
    {
        var tool = new ManageAppTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        StringAssert.Contains(Text(InvokeInstance(tool, "HandleCreate", "", "", "", "", "")), "solution_name is required");
        StringAssert.Contains(Text(InvokeInstance(tool, "HandleCreate", "solution", "", "", "", "")), "display_name is required");
        StringAssert.Contains(Text(InvokeInstance(tool, "HandleUpdate", "", "", "", "")), "app is required");
        StringAssert.Contains(Text(InvokeInstance(tool, "HandleValidate", "")), "app is required");
    }

    private static T Invoke<T>(string name, params object?[] args) => (T)Invoke(name, args)!;

    private static object? Invoke(string name, params object?[] args)
    {
        var method = ToolType.GetMethods(PrivateStatic)
            .Single(m => m.Name == name && m.GetParameters().Length == args.Length);
        return method.Invoke(null, args);
    }

    private static CallToolResult InvokeInstance(ManageAppTool tool, string name, params object?[] args) =>
        (CallToolResult)ToolType.GetMethods(BindingFlags.NonPublic | BindingFlags.Instance)
            .Single(m => m.Name == name && m.GetParameters().Length == args.Length).Invoke(tool, args)!;

    private static string Text(CallToolResult result) =>
        ((TextContentBlock)result.Content.First()).Text ?? "";

    private static T Property<T>(object value, string name) => (T)value.GetType().GetProperty(name)!.GetValue(value)!;
}
