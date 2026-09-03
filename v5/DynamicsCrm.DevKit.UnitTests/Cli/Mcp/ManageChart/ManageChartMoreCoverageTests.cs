using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChart;

[TestClass]
public sealed class ManageChartMoreCoverageTests
{
    private static readonly Type ToolType = typeof(ManageChartTool);

    [TestMethod]
    public void Constructor_RequiresOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageChartTool(null!, null!, new McpExecutionContext(true)));
        Assert.Throws<ArgumentNullException>(() => new ManageChartTool(null!, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    public async Task PublicValidation_RejectsMissingActionAndEntityBeforeDataverse()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        Assert.IsTrue((await tool.manage_chart(null!, action: "")).IsError);
        Assert.IsTrue((await tool.manage_chart(null!, action: "list", entity_name: " ")).IsError);
    }

    [TestMethod]
    public void ChartTypeAndCurrentTypeHelpers_CoverDefaultsAndMalformedXml()
    {
        var blank = InvokeWithOut("ResolveChartType", " ");
        Assert.AreEqual("Pie", blank.Value);
        Assert.IsTrue(blank.Defaulted);
        var known = InvokeWithOut("ResolveChartType", "line");
        Assert.AreEqual("Line", known.Value);
        Assert.IsFalse(known.Defaulted);
        Assert.AreEqual("Bar", Static("GetCurrentChartType", "<Chart><Series ChartType='Bar' /></Chart>"));
        Assert.AreEqual("Column", Static("GetCurrentChartType", "<Chart />"));
        Assert.IsNull(Static("GetCurrentChartType", "not xml"));
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;

    private static (string Value, bool Defaulted) InvokeWithOut(string name, string input)
    {
        var args = new object?[] { input, false };
        var value = (string)ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;
        return (value, (bool)args[1]!);
    }
}
