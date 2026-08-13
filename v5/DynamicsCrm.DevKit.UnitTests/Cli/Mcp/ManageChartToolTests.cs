using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
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
    public void ManageChart_IsMutatingTool_NotInReadonlyCategory()
    {
        var attr = ToolType.GetMethods(BindingFlags.Public | BindingFlags.Instance)
            .Select(m => m.GetCustomAttribute<McpServerToolAttribute>())
            .FirstOrDefault(a => a != null && (a.Name ?? "") == "manage_chart");
        Assert.IsNotNull(attr, "manage_chart must have [McpServerTool] attribute.");
        Assert.IsFalse(attr.ReadOnly, "manage_chart mutates — ReadOnly must be false so it stays out of the 'readonly' category.");
    }

    [TestMethod]
    public void ManageChart_EmptyAction_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_chart(action: "");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "action is required");
    }

    [TestMethod]
    public void ManageChart_InvalidAction_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_chart(action: "invalid_action");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "Invalid action");
    }

    [TestMethod]
    public void ManageChart_InvalidChartIdGuid_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_chart(action: "detail", chart_id: "not-a-guid");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "not a valid GUID");
    }

    [TestMethod]
    public void ManageChart_CreateAction_EmptyEntityName_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_chart(action: "create", entity_name: "", chart_name: "Test Chart");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "entity_name is required");
    }

    [TestMethod]
    public void ManageChart_CreateAction_EmptyChartName_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_chart(action: "create", entity_name: "account", chart_name: "");
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "chart_name is required");
    }

    [TestMethod]
    public void ManageChart_CreateAction_HasNoViewNameParameter()
    {
        var method = ToolType.GetMethod("manage_chart");
        Assert.IsNotNull(method);
        var names = method!.GetParameters().Select(p => p.Name).ToArray();
        CollectionAssert.DoesNotContain(names, "view_name");
        CollectionAssert.Contains(names, "confirmed");
    }

    [TestMethod]
    public void ManageChart_BuildDataDescriptionFromEntity_UsesProvidedCategoryAndLegend()
    {
        var method = ToolType.GetMethod("BuildDataDescriptionFromEntity", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var result = method!.Invoke(null, new object?[] { "contact", "statecode", "importsequencenumber", "count", null });
        Assert.IsNotNull(result);
        var tuple = ((string Xml, string AggregateAlias, string Error))result!;
        Assert.IsNull(tuple.Error);
        Assert.AreEqual("aggregate_column", tuple.AggregateAlias);
        StringAssert.Contains(tuple.Xml, "entity name=\"contact\"");
        StringAssert.Contains(tuple.Xml, "name=\"importsequencenumber\" aggregate=\"count\"");
        StringAssert.Contains(tuple.Xml, "groupby=\"true\" alias=\"groupby_column\" name=\"statecode\"");
    }

    [TestMethod]
    public void ManageChart_ResolveChartType_DefaultsToPieWhenMissing()
    {
        var method = ToolType.GetMethod("ResolveChartType", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var args = new object?[] { "", false };
        var chartType = method!.Invoke(null, args) as string;
        Assert.AreEqual("Pie", chartType);
        Assert.IsTrue((bool)args[1]!);
    }

    [TestMethod]
    public void ManageChart_GetCurrentChartType_ReadsSeriesChartType()
    {
        var method = ToolType.GetMethod("GetCurrentChartType", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var pieXml = "<presentationdescription><Chart><Series ChartType=\"Pie\" /></Chart></presentationdescription>";
        Assert.AreEqual("Pie", method!.Invoke(null, new object?[] { pieXml }) as string);

        // Series without ChartType attribute defaults to Column (OOB behavior).
        var noAttrXml = "<presentationdescription><Chart><Series Name=\"x\" /></Chart></presentationdescription>";
        Assert.AreEqual("Column", method.Invoke(null, new object?[] { noAttrXml }) as string);

        Assert.IsNull(method.Invoke(null, new object?[] { "not xml" }));
        Assert.IsNull(method.Invoke(null, new object?[] { "" }));
    }

    [TestMethod]
    public void ManageChart_GetCurrentChartType_ReadsInnerSeriesFromOobWrapper()
    {
        // Dataverse OOB template wraps the actual series in an outer
        // <Series> container without a ChartType attr; the inner
        // <Series ChartType="pie"> holds the real type. Descendants("Series")
        // returns BOTH; the first match is the outer wrapper, which would
        // silently report "Column" and let multi-measure updates corrupt
        // Pie/Doughnut/Funnel charts. The helper must look for the FIRST
        // Series that actually carries a ChartType attribute.
        var method = ToolType.GetMethod("GetCurrentChartType", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var oobPieXml = "<presentationdescription><Chart><Series><Series ShadowOffset=\"0\" ChartType=\"Pie\" /></Series></Chart></presentationdescription>";
        Assert.AreEqual("Pie", method!.Invoke(null, new object?[] { oobPieXml }) as string);

        var oobDoughnutXml = "<presentationdescription><Chart><Series><Series ChartType=\"Doughnut\" /></Series></Chart></presentationdescription>";
        Assert.AreEqual("Doughnut", method.Invoke(null, new object?[] { oobDoughnutXml }) as string);

        var oobFunnelXml = "<presentationdescription><Chart><Series><Series ChartType=\"Funnel\" /></Series></Chart></presentationdescription>";
        Assert.AreEqual("Funnel", method.Invoke(null, new object?[] { oobFunnelXml }) as string);
    }

    [TestMethod]
    public void ManageChart_UndoAction_MissingBackupFile_ReturnsErrorResult()
    {
        var tool = new ManageChartTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
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
