using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetSolutionComponents;

[TestClass]
public sealed class GetSolutionComponentsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetSolutionComponentsTool);

    [TestMethod]
    public void BuildSummaryText_CoversActiveLayerAndFallbackBranches()
    {
        var solution = new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = "Solution",
            ["uniquename"] = "contoso_core"
        };
        var components = new List<Entity>
        {
            new("solutioncomponent", Guid.NewGuid()) { ["objectid"] = Guid.NewGuid() },
            new("solutioncomponent", Guid.NewGuid()) { ["objectid"] = Guid.NewGuid() }
        };
        var active = new Dictionary<Guid, bool>
        {
            [components[0].GetAttributeValue<Guid>("objectid")] = true,
            [components[1].GetAttributeValue<Guid>("objectid")] = false
        };

        Assert.AreEqual("Solution (contoso_core): 2 components.",
            InvokeStatic<string>("BuildSummaryText", solution, components, null, false));
        StringAssert.Contains(InvokeStatic<string>("BuildSummaryText", solution, components, active, false), "1 with active layers");
        StringAssert.Contains(InvokeStatic<string>("BuildSummaryText", solution, components, active, true), "1 active-layer components");
    }

    [TestMethod]
    public void BuildStructuredResult_EmptyComponentsProducesStableResult()
    {
        var tool = new GetSolutionComponentsTool(null!);
        var solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "core",
            ["friendlyname"] = "Core",
            ["version"] = "1.0",
            ["ismanaged"] = false,
            ["pub.friendlyname"] = new AliasedValue("publisher", "friendlyname", "Contoso")
        };
        var result = ToolType.GetMethod("BuildStructuredResult", BindingFlags.NonPublic | BindingFlags.Instance)!
            .Invoke(tool, new object?[] { solution, new List<Entity>(), new Dictionary<Guid, string>(), null, false });

        Assert.IsNotNull(result);
        Assert.AreEqual(0, result!.GetType().GetProperty("TotalComponents")!.GetValue(result));
    }

    [TestMethod]
    public void GetComponentApiNameAndStringHelper_CoverUnknownAndEscapedValues()
    {
        Assert.AreEqual("Entity", InvokeStatic<string>("GetComponentApiName", 1));
        Assert.AreEqual("999", InvokeStatic<string>("GetComponentApiName", 999));
        var entity = new Entity("x") { ["name"] = " Name " };
        Assert.AreEqual(" Name ", InvokeStatic<string>("S", entity, "name"));
        Assert.AreEqual("", InvokeStatic<string>("S", new Entity("x"), "missing"));
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
