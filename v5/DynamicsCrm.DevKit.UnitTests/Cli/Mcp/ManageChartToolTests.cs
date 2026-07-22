using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageChartToolTests
{
    private static readonly Type ToolType = typeof(ManageChartTool);

    [TestMethod]
    public void ManageChart_ToolHasMcpServerToolAttribute()
    {
        var attr = ToolType.GetCustomAttribute<ModelContextProtocol.Server.McpServerToolTypeAttribute>();
        Assert.IsNotNull(attr, "ManageChartTool must have [McpServerToolType] attribute.");
    }

    [TestMethod]
    public void ManageChart_RegisteredInToolCategoryMapAsStandard()
    {
        Assert.IsTrue(McpServerHost.ToolCategoryMap.ContainsKey(nameof(ManageChartTool)), "ToolCategoryMap must contain ManageChartTool.");
        Assert.AreEqual("standard", McpServerHost.ToolCategoryMap[nameof(ManageChartTool)]);
    }

    [TestMethod]
    public void ManageChart_EmptyAction_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "action is required");
    }

    [TestMethod]
    public void ManageChart_InvalidAction_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "invalid_action");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "Unknown action");
    }

    [TestMethod]
    public void ManageChart_InvalidChartIdGuid_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "detail", chart_id: "not-a-guid");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "not a valid GUID");
    }

    [TestMethod]
    public void ManageChart_CreateAction_EmptyEntityName_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "create", entity_name: "", chart_name: "Test Chart", view_name: "Active Accounts");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "entity_name is required");
    }

    [TestMethod]
    public void ManageChart_CreateAction_EmptyChartName_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "create", entity_name: "account", chart_name: "", view_name: "Active Accounts");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "chart_name is required");
    }

    [TestMethod]
    public void ManageChart_CreateAction_EmptyViewName_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "create", entity_name: "account", chart_name: "Test Chart", view_name: "");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "view_name is required");
    }

    [TestMethod]
    public void ManageChart_UndoAction_MissingBackupFile_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions());
        var result = tool.manage_chart(action: "undo", chart_id: Guid.NewGuid().ToString(), presentationdescription: "non_existent_file.chart.json");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "Backup file not found");
    }

    [TestMethod]
    public void ManageChart_PieTemplate_IsEmbeddedAndMatchesPortalShape()
    {
        var assembly = typeof(ManageChartTool).Assembly;
        var resourceName = assembly.GetManifestResourceNames()
            .FirstOrDefault(n => n.EndsWith("Resources.charts.Pie.xml", StringComparison.OrdinalIgnoreCase));
        Assert.IsNotNull(resourceName, "Pie.xml must be embedded in CLI assembly.");

        using var stream = assembly.GetManifestResourceStream(resourceName!);
        Assert.IsNotNull(stream);
        using var reader = new StreamReader(stream!, Encoding.UTF8);
        var xml = reader.ReadToEnd();

        var doc = XDocument.Parse(xml);
        Assert.AreEqual("Chart", doc.Root?.Name.LocalName);
        Assert.AreEqual("None", doc.Root?.Attribute("Palette")?.Value);
        Assert.IsFalse(string.IsNullOrWhiteSpace(doc.Root?.Attribute("PaletteCustomColors")?.Value));

        var series = doc.Descendants("Series")
            .FirstOrDefault(s => s.Attribute("ChartType") != null);
        Assert.IsNotNull(series);
        // OOB pie charts use lowercase chart type token.
        Assert.AreEqual("pie", series!.Attribute("ChartType")?.Value);
        Assert.AreEqual("true", series.Attribute("IsValueShownAsLabel")?.Value);
        Assert.AreEqual("0", series.Attribute("ShadowOffset")?.Value);
        Assert.AreEqual("PieLabelStyle=Inside, PieDrawingStyle=Default", series.Attribute("CustomProperties")?.Value);
        Assert.IsNull(series.Attribute("Name"), "Portal pie series does not use Name attribute.");
        Assert.IsNotNull(series.Element("SmartLabelStyle"));

        Assert.IsNotNull(doc.Descendants("Legend").FirstOrDefault());
        var title = doc.Descendants("Title").FirstOrDefault();
        Assert.IsNotNull(title);
        Assert.AreEqual("Title1", title!.Attribute("Name")?.Value);
        Assert.IsNotNull(doc.Descendants("Area3DStyle").FirstOrDefault());
    }

    [TestMethod]
    public void ManageChart_BuildPresentationDescription_Pie_ReturnsRawChartXml()
    {
        var method = ToolType.GetMethod("BuildPresentationDescription", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var xml = method!.Invoke(null, new object?[] { "Pie", "Contact by Status", "aggregate_column" }) as string;
        Assert.IsFalse(string.IsNullOrWhiteSpace(xml));
        Assert.IsTrue(xml!.TrimStart().StartsWith("<Chart", StringComparison.Ordinal));
        Assert.IsFalse(xml.Contains("<presentationdescription>", StringComparison.OrdinalIgnoreCase));

        var doc = XDocument.Parse(xml);
        var series = doc.Descendants("Series").FirstOrDefault(s => s.Attribute("ChartType") != null);
        Assert.IsNotNull(series);
        Assert.AreEqual("pie", series!.Attribute("ChartType")?.Value);
        Assert.IsNull(series.Attribute("Name"));
    }
}
