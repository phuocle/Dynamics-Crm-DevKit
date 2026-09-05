using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageReport;

[TestClass]
public sealed class ManageReportPlannerMoreCoverageTests
{
    private static readonly Type ToolType = typeof(ManageReportTool);

    [TestMethod]
    public void ResolveReportIdInput_HandlesGuidMissingAndOfflineNames()
    {
        var tool = new ManageReportTool(null!, new McpDryRunOptions(), new McpExecutionContext(true), null!);
        var id = Guid.NewGuid();
        var valid = ((Guid? Id, string Error))Instance(tool, "ResolveReportIdInput", " " + id + " ");
        var missing = ((Guid? Id, string Error))Instance(tool, "ResolveReportIdInput", " ");
        var text = ((Guid? Id, string Error))Instance(tool, "ResolveReportIdInput", "report-name");
        Assert.AreEqual(id, valid.Id);
        Assert.IsNull(valid.Error);
        StringAssert.Contains(missing.Error, "required");
        StringAssert.Contains(text.Error, "not a valid GUID");
    }

    [TestMethod]
    public void RdlPlanner_CoversEmptyFetchAndInvalidLayoutShapes()
    {
        var ns = XNamespace.Get("urn:rdl");
        var report = new XElement(ns + "Report",
            new XElement(ns + "ReportParametersLayout", new XElement(ns + "GridLayoutDefinition")));
        var noEntity = XDocument.Parse("<fetch />");
        var unchanged = (XDocument)Static("EnsurePrefilter", report, noEntity, "account", ns);
        Assert.IsNull(unchanged.Root!.Element("entity"));

        Static("EnsureReportParameterLayoutCell", report, ns, "P1");
        Assert.AreEqual(0, report.Descendants(ns + "CellDefinition").Count());

        var dataSet = (XElement)Static("CreateRdlDataSet", ns, noEntity, new System.Collections.Generic.List<XElement>());
        StringAssert.Contains(dataSet.ToString(), "CRM_FilteredEntity");
    }

    [TestMethod]
    public void StaticValidationHelpers_CoverNullAndSanitizedPaths()
    {
        Assert.Throws<TargetInvocationException>(() => Static("IsValidRdlName", new object[] { null! }));
        Assert.IsNull(Static("NullIfEmpty", new object[] { null! }));
        Assert.Throws<TargetInvocationException>(() => Static("ResolveFilePath", new object[] { null!, "C:\\work" }));
        StringAssert.Contains((string)Static("GetReportOutputPath", "C:\\work", "Report:/Name", 1033), "Report__Name.rdl");
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;

    private static object Instance(ManageReportTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(tool, args)!;
}
