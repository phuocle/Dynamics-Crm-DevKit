using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetBusinessProcessFlows;

[TestClass]
public sealed class GetBusinessProcessFlowsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetBusinessProcessFlowsTool);

    [TestMethod]
    public void ParseStageOrder_CoversEmptyInvalidAndNestedStageSteps()
    {
        var empty = InvokeStatic<List<Guid>>("ParseStageOrder", (object?)null);
        Assert.AreEqual(0, empty.Count);
        Assert.AreEqual(0, InvokeStatic<List<Guid>>("ParseStageOrder", "not json").Count);

        var first = Guid.NewGuid();
        var second = Guid.NewGuid();
        var json = $"{{\"steps\":{{\"list\":[{{\"__class\":\"StageStep:One\",\"stageId\":\"{first}\"}},{{\"steps\":{{\"list\":[{{\"__class\":\"StageStep:Two\",\"stageId\":\"{second}\"}}]}}}}]}}}}";
        var parsed = InvokeStatic<List<Guid>>("ParseStageOrder", json);

        CollectionAssert.AreEqual(new[] { first, second }, parsed);
    }

    [TestMethod]
    public void OrderStages_UsesVisualOrderAndNameFallback()
    {
        var first = Guid.NewGuid();
        var second = Guid.NewGuid();
        var stages = new List<BpfStageEntry>
        {
            new() { StageId = second.ToString(), StageName = "Beta" },
            new() { StageId = first.ToString(), StageName = "Alpha" },
            new() { StageId = "not-guid", StageName = "Zulu" }
        };

        var ordered = InvokeStatic<List<BpfStageEntry>>("OrderStages", stages, new List<Guid> { first, second });
        Assert.AreEqual(first.ToString(), ordered[0].StageId);
        Assert.AreEqual(second.ToString(), ordered[1].StageId);
        Assert.AreEqual("Zulu", ordered[2].StageName);

        var fallback = InvokeStatic<List<BpfStageEntry>>("OrderStages", stages, new List<Guid>());
        Assert.AreEqual("Alpha", fallback[0].StageName);
    }

    [TestMethod]
    public void CollectStageIds_IgnoresNonObjectsAndInvalidIds()
    {
        var order = new List<Guid>();
        using var document = System.Text.Json.JsonDocument.Parse("[1, {\"__class\":\"StageStep:X\",\"stageId\":\"bad\"}]");
        ToolType.GetMethod("CollectStageIds", BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null,
            new object?[] { document.RootElement, order });
        Assert.AreEqual(0, order.Count);
    }

    [TestMethod]
    public void EscapeXmlAndSanitizeDescription_CoverNullAndSpecialValues()
    {
        Assert.IsNull(InvokeStatic<string>("SanitizeDescription", "Click to add description."));
        Assert.AreEqual("Description", InvokeStatic<string>("SanitizeDescription", " Description "));
        Assert.AreEqual("&lt;&amp;&gt;&quot;&apos;", InvokeStatic<string>("EscapeXml", "<&>\"'"));
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
