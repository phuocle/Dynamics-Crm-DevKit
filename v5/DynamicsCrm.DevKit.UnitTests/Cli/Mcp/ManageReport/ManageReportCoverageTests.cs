using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageReport;

[TestClass]
public sealed class ManageReportCoverageTests
{
    private static ManageReportTool CreateTool() =>
        new(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));

    [TestMethod]
    public void RdlNameAndPathHelpers_ValidateAndNormalizeValues()
    {
        Assert.IsTrue((bool)InvokeStatic("IsValidRdlName", "Dataset_01"));
        Assert.IsTrue((bool)InvokeStatic("IsValidRdlName", "_Dataset"));
        Assert.IsFalse((bool)InvokeStatic("IsValidRdlName", ""));
        Assert.IsFalse((bool)InvokeStatic("IsValidRdlName", "1Dataset"));
        Assert.IsFalse((bool)InvokeStatic("IsValidRdlName", "Dataset-01"));
        StringAssert.Contains((string)InvokeStatic("ResolveFilePath", "relative.rdl", "C:\\workspace"), "workspace");
        Assert.AreEqual("C:\\absolute.rdl", InvokeStatic("ResolveFilePath", "C:\\absolute.rdl", "C:\\workspace"));
        Assert.IsNull(InvokeStatic("NullIfEmpty", "  "));
        Assert.AreEqual("report", InvokeStatic("NullIfEmpty", " report "));
        StringAssert.Contains((string)InvokeStatic("GetReportOutputFolder", "C:\\workspace", 1033), "1033");
        StringAssert.Contains((string)InvokeStatic("GetReportOutputPath", "C:\\workspace", "My Report", 1033), "My Report.rdl");
        Assert.AreEqual("A&amp;B &lt;x&gt; &apos;p&apos; &quot;q&quot;", InvokeStatic("EscapeXml", "A&B <x> 'p' \"q\""));
    }

    [TestMethod]
    public void RdlTypeAndElementHelpers_CreateExpectedXml()
    {
        var ns = XNamespace.Get("http://schemas.microsoft.com/sqlserver/reporting/2008/01/reportdefinition");
        var fetch = XDocument.Parse("<fetch><entity name='account'><attribute name='name'/></entity></fetch>");
        var field = (XElement)InvokeStatic("CreateRdlField", ns, "account.name", "System.String");
        var dataSet = (XElement)InvokeStatic("CreateRdlDataSet", ns, fetch, new List<XElement> { field });

        Assert.AreEqual("__DATASET_NAME__", (string)dataSet.Attribute("Name"));
        Assert.AreEqual("Dynamics365", (string)dataSet.Element(ns + "Query")!.Element(ns + "DataSourceName"));
        Assert.AreEqual("account.name", (string)dataSet.Element(ns + "Fields")!.Element(ns + "Field")!.Attribute("Name"));
        Assert.AreEqual("System.Boolean", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Boolean));
        Assert.AreEqual("System.DateTime", InvokeStatic("GetRdlTypeName", AttributeTypeCode.DateTime));
        Assert.AreEqual("System.Decimal", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Decimal));
        Assert.AreEqual("System.Decimal", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Money));
        Assert.AreEqual("System.Double", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Double));
        Assert.AreEqual("System.Int32", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Integer));
        Assert.AreEqual("System.Int32", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Picklist));
        Assert.AreEqual("System.Int32", InvokeStatic("GetRdlTypeName", AttributeTypeCode.State));
        Assert.AreEqual("System.Int32", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Status));
        Assert.AreEqual("System.Int64", InvokeStatic("GetRdlTypeName", AttributeTypeCode.BigInt));
        Assert.AreEqual("System.Guid", InvokeStatic("GetRdlTypeName", AttributeTypeCode.Uniqueidentifier));
        Assert.AreEqual("System.String", InvokeStatic("GetRdlTypeName", (object)null!));
    }

    [TestMethod]
    public void EnsurePrefilter_AddsParameterLayoutAndCustomFilter()
    {
        var ns = XNamespace.Get("urn:test-report");
        var report = new XElement(ns + "Report");
        var fetch = XDocument.Parse("<fetch><entity name='account'><attribute name='name'/></entity></fetch>");

        var result = (XDocument)InvokeStatic("EnsurePrefilter", report, fetch, " Account ", ns);
        var parameterName = "CRM_FilteredAccount";

        Assert.AreEqual("1", (string)result.Root!.Element("entity")!.Attribute("enableprefiltering"));
        Assert.AreEqual(parameterName, (string)result.Root.Element("entity")!.Attribute("prefilterparametername"));
        Assert.IsNotNull(report.Element(ns + "ReportParameters")!.Element(ns + "ReportParameter"));
        Assert.IsNotNull(report.Element(ns + "ReportParametersLayout"));
        StringAssert.Contains(report.ToString(), "ReportEntity");

        // Existing parameter/custom property/layout paths are idempotent and also parse the existing CRM filter.
        var customValue = report.Element(ns + "CustomProperties")!.Element(ns + "CustomProperty")!.Element(ns + "Value")!;
        customValue.Value = "<mscrm><MSCRM><ReportFilter><ReportEntity paramname='Existing' /></ReportFilter></MSCRM></mscrm>";
        var second = (XDocument)InvokeStatic("EnsurePrefilter", report, fetch, "account", ns);
        Assert.IsNotNull(second.Root);
        Assert.AreEqual(1, report.Element(ns + "ReportParameters")!.Elements(ns + "ReportParameter").Count());
    }

    [TestMethod]
    public void EnsureParameterLayout_UsesNextCellAndExpandsRows()
    {
        var ns = XNamespace.Get("urn:test-report");
        var report = new XElement(ns + "Report",
            new XElement(ns + "ReportParametersLayout",
                new XElement(ns + "GridLayoutDefinition",
                    new XElement(ns + "NumberOfColumns", "1"),
                    new XElement(ns + "NumberOfRows", "1"),
                    new XElement(ns + "CellDefinitions",
                        new XElement(ns + "CellDefinition",
                            new XElement(ns + "ColumnIndex", "0"),
                            new XElement(ns + "RowIndex", "0"),
                            new XElement(ns + "ParameterName", "Existing"))))));

        InvokeStatic("EnsureReportParameterLayoutCell", report, ns, "NewParameter");
        InvokeStatic("EnsureReportParameterLayoutCell", report, ns, "NewParameter");

        Assert.AreEqual("2", (string)report.Element(ns + "ReportParametersLayout")!.Element(ns + "GridLayoutDefinition")!.Element(ns + "NumberOfRows"));
        Assert.AreEqual(2, report.Descendants(ns + "CellDefinition").Count());
    }

    [TestMethod]
    public void DatasetSourceValidation_RejectsMalformedOrUnsupportedFetchXml()
    {
        var tool = CreateTool();
        var invalid = InvokeTask(tool, "ResolveSimpleDatasetSourceAsync", "<fetch", null!);
        var wrongRoot = InvokeTask(tool, "ResolveSimpleDatasetSourceAsync", "<query />", null!);
        var aggregate = InvokeTask(tool, "ResolveSimpleDatasetSourceAsync", "<fetch><entity name='account'><attribute name='name' aggregate='count'/></entity></fetch>", null!);
        var missingEntity = InvokeTask(tool, "ResolveSimpleDatasetSourceAsync", "<fetch />", null!);
        var viewWithoutEntity = InvokeTask(tool, "ResolveSimpleDatasetSourceAsync", "My View", "");

        Assert.IsFalse((bool)invalid.GetType().GetField("Item1")!.GetValue(invalid)!);
        Assert.IsFalse((bool)wrongRoot.GetType().GetField("Item1")!.GetValue(wrongRoot)!);
        Assert.IsFalse((bool)aggregate.GetType().GetField("Item1")!.GetValue(aggregate)!);
        Assert.IsFalse((bool)missingEntity.GetType().GetField("Item1")!.GetValue(missingEntity)!);
        Assert.IsFalse((bool)viewWithoutEntity.GetType().GetField("Item1")!.GetValue(viewWithoutEntity)!);
    }

    [TestMethod]
    public void ReportEntryAndParameterHelpers_MapAndMutateExpectedValues()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("report", id)
        {
            ["name"] = " Quarterly report ",
            ["filename"] = " quarterly.rdl ",
            ["languagecode"] = 1033,
            ["ismanaged"] = true,
            ["modifiedon"] = new DateTime(2026, 8, 31, 11, 12, 13),
            ["modifiedby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Jane" },
            ["l.language"] = new AliasedValue("languagelocale", "language", "English")
        };
        var entry = InvokeStatic("MapEntry", entity);
        Assert.AreEqual(id.ToString(), entry.GetType().GetProperty("ReportId")!.GetValue(entry));
        Assert.AreEqual("quarterly.rdl", entry.GetType().GetProperty("FileName")!.GetValue(entry));
        Assert.AreEqual("2026-08-31 11:12:13", entry.GetType().GetProperty("ModifiedOn")!.GetValue(entry));

        var ns = XNamespace.Get("urn:rdl");
        var parameter = new XElement(ns + "ReportParameter");
        InvokeStatic("SetReportParameterDefault", parameter, "1033");
        InvokeStatic("SetReportParameterDefault", parameter, "1041");
        Assert.AreEqual("1041", parameter.Descendants(ns + "Value").Single().Value);
        InvokeStatic("SetReportParameterDefault", null!, "ignored");
    }

    [TestMethod]
    public void DatasetActionValidation_CoversRdlStructureErrors()
    {
        var tool = CreateTool();
        var basePath = Path.Combine(Path.GetTempPath(), "devkit-report-" + Guid.NewGuid().ToString("N"));
        try
        {
            var nonRdl = basePath + ".txt";
            var malformed = basePath + ".rdl";
            File.WriteAllText(malformed, "<Report");
            Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDatasetLocal", "add_dataset", nonRdl, "Data", "<fetch />", "", Path.GetTempPath())).Contains("not an .rdl"));
            Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDatasetLocal", "add_dataset", malformed, "Data", "<fetch />", "", Path.GetTempPath())).Contains("not well-formed XML"));

            File.WriteAllText(malformed, "<root />");
            Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDatasetLocal", "add_dataset", malformed, "Data", "<fetch />", "", Path.GetTempPath())).Contains("not a valid RDL"));
            File.WriteAllText(malformed, "<Report xmlns='urn:rdl' />");
            Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDatasetLocal", "add_dataset", malformed, "Data", "<fetch />", "", Path.GetTempPath())).Contains("no DataSets container"));
        }
        finally
        {
            var candidate = basePath + ".rdl";
            if (File.Exists(candidate)) File.Delete(candidate);
        }
    }

    [TestMethod]
    public async Task PublicAndLocalActionValidation_ReturnsActionableErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.manage_report(null!, "")).Contains("action is required"));
        Assert.IsTrue((await tool.manage_report(null!, "unknown")).Contains("Invalid action"));
        Assert.IsTrue(((CallToolResult)Invoke(tool, "HandleList", "", "", 0)).Contains("max_records must be between"));
        Assert.IsTrue(((CallToolResult)Invoke(tool, "HandleDetail", "")).Contains("report_id is required"));
        Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDatasetLocal", "add_dataset", "", "Dataset", "<fetch />", "", "")).Contains("file_path is required"));
        Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleDownload", "", "")).Contains("report_id is required"));
        Assert.IsTrue(((CallToolResult)InvokeTask(tool, "HandleUpdate", "", "", "", "")).Contains("report_id is required"));
        Assert.IsTrue(((CallToolResult)Invoke(tool, "HandleDelete", "")).Contains("report_id is required"));
    }

    private static object Invoke(object instance, string name, params object[] arguments) =>
        typeof(ManageReportTool).GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(instance, arguments)!;

    private static object InvokeStatic(string name, params object[] arguments) =>
        typeof(ManageReportTool).GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!
            .Invoke(null, arguments)!;

    private static object InvokeTask(object instance, string name, params object[] arguments)
    {
        var task = (System.Threading.Tasks.Task)Invoke(instance, name, arguments);
        task.GetAwaiter().GetResult();
        return task.GetType().GetProperty("Result")!.GetValue(task)!;
    }
}
