using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security;
using System.Text.Json;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageReport;

/// <summary>
/// manage_report rare-branch coverage on a FakeSdkClient: list with solution
/// join, embedded-template creation guards (org URL, base language, unmapped
/// LCID), report-name resolution without an id, default-filter extraction with
/// broken fetch text, dataset field/alias validation, fetch-parameter query
/// parameters, custom-filter merging, and .rptproj synchronization arms.
/// </summary>
[TestClass]
public sealed class ManageReportErrorPathCoverageTests
{
    private const string EntityName = "reportfetchtarget";
    private const string ReportNamespace = "http://schemas.microsoft.com/sqlserver/reporting/2008/01/reportdefinition";

    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _reports = new();
    private readonly List<Entity> _solutions = new();
    private EntityMetadata _metadata;
    private int? _organizationLanguageCode = 1033;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _reports.Clear();
        _solutions.Clear();
        _organizationLanguageCode = 1033;
        _metadata = TestMetadata.Entity(EntityName, null,
            TestMetadata.String("name", "Name"),
            TestMetadata.String("owneridvalue", "Owner Value"),
            TestMetadata.Lookup("ownerid", "Owner"));
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression qe)
            {
                return qe.EntityName switch
                {
                    "report" => new EntityCollection(_reports),
                    "solution" => new EntityCollection(_solutions),
                    _ => new EntityCollection()
                };
            }
            if (query is FetchExpression fe)
            {
                if (fe.Query.Contains("entity name='report'")) return new EntityCollection(_reports);
                if (fe.Query.Contains("organization"))
                {
                    return _organizationLanguageCode.HasValue
                        ? new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = _organizationLanguageCode.Value } })
                        : new EntityCollection();
                }
            }
            return new EntityCollection();
        };
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[] { _metadata } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _metadata }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieve = (_, _, _) => new Entity("publisher", Guid.NewGuid())
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private sealed class FakeConnectionInfo : DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionInfo
    {
        public Uri ConnectedOrgUri { get; init; }
        public string ConnectedOrgFriendlyName => "Org";
        public string ConnectedOrgUniqueName { get; init; }
        public Version ConnectedOrgVersion => new(9, 2, 0, 0);
        public Guid TenantId => Guid.NewGuid();
        public string EnvironmentId => "env-id";
    }

    private ManageReportTool NewDryRunTool(DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionInfo connectionInfo = null) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext(), connectionInfo);

    private ManageReportTool NewTool(DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionInfo connectionInfo = null) =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), connectionInfo);

    private void SeedSolution()
    {
        _solutions.Add(new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = "My Report Solution",
            ["uniquename"] = "all_report_solution",
            ["publisherid"] = new EntityReference("publisher", Guid.NewGuid())
        });
    }

    private static string BuildRdl(string customFilterValue = null)
    {
        XNamespace ns = ReportNamespace;
        var report = new XElement(ns + "Report",
            new XElement(ns + "DataSources",
                new XElement(ns + "DataSource", new XAttribute("Name", "Dynamics365"),
                    new XElement(ns + "DataSourceReference", "org"))),
            new XElement(ns + "DataSets"));
        if (customFilterValue != null)
        {
            report.Add(new XElement(ns + "CustomProperties",
                new XElement(ns + "CustomProperty",
                    new XElement(ns + "Name", "Custom"),
                    new XElement(ns + "Value", customFilterValue))));
        }
        return report.ToString(SaveOptions.DisableFormatting);
    }

    private static string WrapMscrmFilter(string innerFilterMarkup)
    {
        return new XElement(XNamespace.Get("mscrm") + "MSCRM", new XText(innerFilterMarkup))
            .ToString(SaveOptions.DisableFormatting);
    }

    private static string BuildFilterMarkup(string fetchText)
    {
        var escaped = SecurityElement.Escape(fetchText);
        return $"<ReportFilter><ReportEntity paramname='old' displayname='Old'>{escaped}</ReportEntity></ReportFilter>";
    }

    private static string WriteTempFile(string extension, string content)
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}{extension}");
        File.WriteAllText(path, content);
        return path;
    }

    private static string CreateTempFolder()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-rptproj-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(path);
        return path;
    }

    // ── list ────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_WithSolutionFilter_BuildsSolutionJoinAndReportsName()
    {
        SeedSolution();

        var result = await NewTool().manage_report(null!, action: "list", solution_name: "My Report Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 reports found.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("all_report_solution", json.GetProperty("solutionName").GetString());
    }

    // ── create (embedded template guards) ───────────────────────────────────

    [TestMethod]
    public async Task Create_EmbeddedTemplate_MissingOrgUrl_ReturnsFriendlyError()
    {
        var connectionInfo = new FakeConnectionInfo { ConnectedOrgUri = null, ConnectedOrgUniqueName = "orgname" };

        var result = await NewTool(connectionInfo).manage_report(null!, action: "create");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "organization URL or unique name is unavailable");
    }

    [TestMethod]
    public async Task Create_EmbeddedTemplate_MissingBaseLanguage_ReturnsFriendlyError()
    {
        var connectionInfo = new FakeConnectionInfo
        {
            ConnectedOrgUri = new Uri("https://org.crm.dynamics.com"),
            ConnectedOrgUniqueName = "orgname"
        };
        _organizationLanguageCode = null;

        var result = await NewTool(connectionInfo).manage_report(null!, action: "create");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "base language could not be resolved");
    }

    [TestMethod]
    public async Task Create_EmbeddedTemplate_UnmappedLcid_WritesLocalReport()
    {
        var connectionInfo = new FakeConnectionInfo
        {
            ConnectedOrgUri = new Uri("https://org.crm.dynamics.com"),
            ConnectedOrgUniqueName = "orgname"
        };
        _organizationLanguageCode = 4096; // custom-locale LCID with no .NET culture mapping

        var result = await NewTool(connectionInfo).manage_report(null!, action: "create", name: "Lcid Report");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created local report file");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        var savedPath = json.GetProperty("savedPath").GetString();
        Assert.IsTrue(File.Exists(savedPath), $"report file should exist: {savedPath}");
        File.Delete(savedPath);
    }

    // ── detail ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_ReportNameWithoutUsableId_ReturnsError()
    {
        _reports.Add(new Entity("report")
        {
            ["reportid"] = Guid.Empty,
            ["name"] = "Some Report",
            ["filename"] = "some.rdl"
        });

        var result = await NewTool().manage_report(null!, action: "detail", report_id: "Some Report");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'Some Report' resolved without a valid ID");
    }

    // ── update (default filter extraction) ──────────────────────────────────

    [TestMethod]
    public async Task Update_RdlWithBrokenFetchInFilter_SkipsBrokenEntity()
    {
        var reportId = Guid.NewGuid();
        _reports.Add(new Entity("report", reportId)
        {
            ["reportid"] = reportId,
            ["name"] = "Filter Report",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var rdlPath = WriteTempFile(".rdl", BuildRdl(WrapMscrmFilter(BuildFilterMarkup("<fetch><entity <<<"))));
        try
        {
            var result = await NewDryRunTool().manage_report(null!, action: "update",
                report_id: reportId.ToString(), file_path: rdlPath);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would UPDATE report 'Filter Report'");
        }
        finally { File.Delete(rdlPath); }
    }

    // ── dataset actions ─────────────────────────────────────────────────────

    [TestMethod]
    public async Task AddDataset_DuplicateGeneratedField_ReturnsError()
    {
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            var result = await NewTool().manage_report(null!, action: "add_dataset",
                file_path: rdlPath, dataset_name: "Main",
                fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='ownerid'/><attribute name='owneridvalue'/></entity></fetch>");

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "Duplicate generated RDL field 'owneridvalue'");
            StringAssert.Contains(result.GetText(), "Fix the FetchXML projection and retry.");
        }
        finally { File.Delete(rdlPath); }
    }

    [TestMethod]
    public async Task AddDataset_DuplicateEntityAlias_ReturnsError()
    {
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            var result = await NewTool().manage_report(null!, action: "add_dataset",
                file_path: rdlPath, dataset_name: "Main",
                fetchxml: $"<fetch><entity name='{EntityName}' alias='dup'><link-entity name='other' alias='dup' from='a' to='b'><attribute name='name'/></link-entity></entity></fetch>");

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "Duplicate entity alias 'dup'");
        }
        finally { File.Delete(rdlPath); }
    }

    [TestMethod]
    public async Task AddDataset_WithoutPrefilter_ParamCondition_CreatesReportParameter()
    {
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            var result = await NewTool().manage_report(null!, action: "add_dataset",
                file_path: rdlPath, dataset_name: "Main", prefilter: false,
                fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/><filter><condition attribute='name' operator='eq' value='@myparam'/></filter></entity></fetch>");

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "dataset action 'add_dataset' completed for 'Main'");
            var updated = File.ReadAllText(rdlPath);
            StringAssert.Contains(updated, "myparam");
            StringAssert.Contains(updated, "ReportParameter");
        }
        finally { File.Delete(rdlPath); }
    }

    [TestMethod]
    public async Task AddDataset_ExistingCustomFilter_MergesExistingEntities()
    {
        var rdlPath = WriteTempFile(".rdl", BuildRdl(WrapMscrmFilter(BuildFilterMarkup(
            $"<fetch><entity name='{EntityName}'><all-attributes/></entity></fetch>"))));
        try
        {
            var result = await NewTool().manage_report(null!, action: "add_dataset",
                file_path: rdlPath, dataset_name: "Main", prefilter: true,
                fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>");

            Assert.IsFalse(result.IsError == true, result.GetText());
            var updated = File.ReadAllText(rdlPath);
            StringAssert.Contains(updated, "paramname=\"old\"");
            StringAssert.Contains(updated, "CRM_FilteredReportfetchtarget");
        }
        finally { File.Delete(rdlPath); }
    }

    [TestMethod]
    public async Task AddDataset_ExistingCustomFilter_InvalidXml_IsIgnored()
    {
        var rdlPath = WriteTempFile(".rdl", BuildRdl(WrapMscrmFilter("not <<< valid")));
        try
        {
            var result = await NewTool().manage_report(null!, action: "add_dataset",
                file_path: rdlPath, dataset_name: "Main", prefilter: true,
                fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>");

            Assert.IsFalse(result.IsError == true, result.GetText());
        }
        finally { File.Delete(rdlPath); }
    }

    // ── create with .rptproj sync ───────────────────────────────────────────

    [TestMethod]
    public async Task Create_OutputFolder_SingleRptproj_DryRun_WouldAdd()
    {
        var folder = CreateTempFolder();
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            File.WriteAllText(Path.Combine(folder, "Project.rptproj"),
                """<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003"><ItemGroup><Report Include="Existing.rdl" /></ItemGroup></Project>""");

            var result = await NewDryRunTool().manage_report(null!, action: "create",
                file_path: rdlPath, output_folder: folder);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would add report to project 'Project.rptproj'");
        }
        finally
        {
            File.Delete(rdlPath);
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public async Task Create_OutputFolder_MultipleRptproj_SkipsProjectSync()
    {
        var folder = CreateTempFolder();
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            File.WriteAllText(Path.Combine(folder, "A.rptproj"), "<Project />");
            File.WriteAllText(Path.Combine(folder, "B.rptproj"), "<Project />");

            var result = await NewDryRunTool().manage_report(null!, action: "create",
                file_path: rdlPath, output_folder: folder);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Multiple .rptproj files found in the folder");
        }
        finally
        {
            File.Delete(rdlPath);
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public async Task Create_OutputFolder_BrokenRptproj_ReportsError()
    {
        var folder = CreateTempFolder();
        var rdlPath = WriteTempFile(".rdl", BuildRdl());
        try
        {
            File.WriteAllText(Path.Combine(folder, "Broken.rptproj"), "not <<< xml");

            var result = await NewDryRunTool().manage_report(null!, action: "create",
                file_path: rdlPath, output_folder: folder);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Could not update project 'Broken.rptproj'");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.IsTrue(json.GetProperty("rptprojStatus").GetString()!.StartsWith("error:"));
        }
        finally
        {
            File.Delete(rdlPath);
            Directory.Delete(folder, recursive: true);
        }
    }
}
