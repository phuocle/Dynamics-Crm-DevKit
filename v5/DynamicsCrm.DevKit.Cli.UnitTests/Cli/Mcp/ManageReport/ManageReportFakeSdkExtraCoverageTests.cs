using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageReport;

/// <summary>
/// Extra manage_report coverage on a FakeSdkClient: the embedded report
/// template preparation (with and without connection info), the non-provisioned
/// language guard on update-by-name, downloads that sync a single .rptproj,
/// and add_dataset field derivation (paging attributes, missing attribute
/// names, unknown attributes, aggregate aliases and the count override).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageReportFakeSdkExtraCoverageTests
{
    private const string ReportNs = "http://schemas.microsoft.com/sqlserver/reporting/2008/01/reportdefinition";

    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;
    private FakeSdkClient _fake = null!;
    private Entity _report = null!;
    private List<EntityMetadata> _metadata = new();
    private int[] _provisionedLanguages = [1033];

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-report-extra-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _fake = new FakeSdkClient();
        _report = new Entity("report", Guid.NewGuid())
        {
            ["reportid"] = Guid.NewGuid(),
            ["name"] = "Extra Report",
            ["filename"] = "extra.rdl",
            ["languagecode"] = 1033,
            ["ismanaged"] = false,
            ["bodytext"] = MinimalRdl(),
            ["modifiedon"] = DateTime.UtcNow
        };
        _metadata = new List<EntityMetadata>
        {
            TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Account Name"))
        };
        _provisionedLanguages = [1033];

        _fake.OnExecute = request => request switch
        {
            RetrieveProvisionedLanguagesRequest => new RetrieveProvisionedLanguagesResponse
            {
                Results = { ["RetrieveProvisionedLanguages"] = _provisionedLanguages }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _metadata.First(m =>
                    string.Equals(m.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase)) }
            },
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _metadata.ToArray() }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        _fake.Dispose();
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            if (fe.Query.Contains("entity name='languagelocale'"))
                return new EntityCollection(new[] { new Entity("languagelocale", Guid.NewGuid()) { ["localeid"] = 1036, ["language"] = "French" } });
            if (fe.Query.Contains("entity name='organization'"))
                return new EntityCollection(new[] { new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 } });
            return new EntityCollection();
        }
        if (query is QueryExpression qe && qe.EntityName == "report")
            return new EntityCollection(new[] { _report });
        return new EntityCollection();
    }

    private static string MinimalRdl(string datasetName = "Main") =>
        $"<Report xmlns=\"{ReportNs}\"><DataSources><DataSource Name=\"Dynamics365\"/></DataSources>" +
        $"<DataSets><DataSet Name=\"{datasetName}\"><Query><DataSourceName>Dynamics365</DataSourceName><CommandText>query</CommandText></Query>" +
        "<Fields><Field Name=\"name\"><DataField>name</DataField></Field></Fields></DataSet></DataSets></Report>";

    private sealed class StubConnectionInfo : IMcpConnectionInfo
    {
        public Uri? Uri { get; set; }
        public string? UniqueName { get; set; }

        Uri IMcpConnectionInfo.ConnectedOrgUri => Uri!;
        string IMcpConnectionInfo.ConnectedOrgFriendlyName => "Fake Org";
        string IMcpConnectionInfo.ConnectedOrgUniqueName => UniqueName!;
        Version IMcpConnectionInfo.ConnectedOrgVersion => new Version("9.2.0.0");
        Guid IMcpConnectionInfo.TenantId => Guid.Empty;
        string IMcpConnectionInfo.EnvironmentId => "";
    }

    private ManageReportTool NewTool(bool withConnection = true)
    {
        IMcpConnectionInfo info;
        if (withConnection)
        {
            info = new StubConnectionInfo { Uri = new Uri("https://fakeorg.crm.dynamics.com"), UniqueName = "fakeorg" };
        }
        else
        {
            info = new StubConnectionInfo();
        }
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        return new ManageReportTool(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), info);
    }

    private string WriteRdl(string fileName = "template.rdl", string content = null!)
    {
        var path = Path.Combine(_tempDir, fileName);
        File.WriteAllText(path, content ?? MinimalRdl());
        return path;
    }

    // ── create ──

    [TestMethod]
    public async Task Create_EmbeddedTemplate_WithoutConnection_ReportsError()
    {
        var result = await NewTool(withConnection: false).manage_report(null!, "create", name: "NoConn");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "organization URL or unique name is unavailable");
    }

    [TestMethod]
    public async Task Create_EmbeddedTemplate_RewritesConnectStringAndSavesFile()
    {
        var result = await NewTool().manage_report(null!, "create", name: "Extra Report");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Extra Report");
        var saved = (result.StructuredContent?.GetRawText() ?? result.GetText());
        StringAssert.Contains(saved, ".rdl");
        var files = Directory.GetFiles(Path.Combine(_tempDir, ".devkit", "manage_report"), "*.rdl", SearchOption.AllDirectories);
        Assert.AreEqual(1, files.Length);
        var written = File.ReadAllText(files[0]);
        StringAssert.Contains(written, "https://fakeorg.crm.dynamics.com/;fakeorg");
        StringAssert.Contains(written, "en-US");
    }

    // ── update: language guard ──

    [TestMethod]
    public async Task Update_ByLanguageName_NotProvisioned_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "update", report_id: "Extra Report", language: "French");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'French' (LCID 1036) is not installed");
    }

    // ── download: rptproj sync ──

    [TestMethod]
    public async Task Download_IntoFolderWithSingleRptproj_SyncsProject()
    {
        var outputFolder = Path.Combine(_tempDir, "reports-out");
        Directory.CreateDirectory(outputFolder);
        await File.WriteAllTextAsync(Path.Combine(outputFolder, "Reporting.rptproj"), $"""
<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
    <Report Include="other.rdl" />
  </ItemGroup>
</Project>
""");

        var result = await NewTool().manage_report(null!, "download", report_id: _report.Id.ToString(),
            output_folder: outputFolder);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Downloaded report 'Extra Report'");
        var savedPath = Path.Combine(outputFolder, "extra.rdl");
        Assert.IsTrue(File.Exists(savedPath));
        var project = File.ReadAllText(Path.Combine(outputFolder, "Reporting.rptproj"));
        StringAssert.Contains(project, "extra.rdl");
    }

    // ── add_dataset field derivation ──

    [TestMethod]
    public async Task AddDataset_WithPagingAttributes_AddsPagingFields()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Paged", fetchxml: "<fetch page='2' count='10'><entity name='account'><attribute name='name' /></entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var written = File.ReadAllText(rdl);
        StringAssert.Contains(written, "PagingCookie");
        StringAssert.Contains(written, "MoreRecords");
    }

    [TestMethod]
    public async Task AddDataset_LinkEntityFields_UseAliasPrefix()
    {
        _metadata.Add(TestMetadata.Entity("contact", "Contact", TestMetadata.String("fullname", "Full Name")));
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Linked",
            fetchxml: "<fetch><entity name='account'><attribute name='name' /><link-entity name='contact' alias='c' from='accountid' to='accountid'><attribute name='fullname' /></link-entity></entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var written = File.ReadAllText(rdl);
        StringAssert.Contains(written, "c_fullname");
    }

    [TestMethod]
    public async Task AddDataset_AggregateWithoutAlias_ReturnsError()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Agg",
            fetchxml: "<fetch aggregate='true'><entity name='account'><attribute name='name' aggregate='count' /></entity></fetch>");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Aggregate/grouped attribute 'name' requires an explicit alias");
    }

    [TestMethod]
    public async Task AddDataset_CountAggregateWithAlias_UsesAliasAsFieldName()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Count",
            fetchxml: "<fetch aggregate='true'><entity name='account'><attribute name='name' aggregate='count' alias='cnt' /></entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var written = File.ReadAllText(rdl);
        StringAssert.Contains(written, "cnt");
    }

    [TestMethod]
    public async Task AddDataset_AttributeWithoutName_ReturnsError()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "NoName",
            fetchxml: "<fetch><entity name='account'><attribute /></entity></fetch>");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Every <attribute> requires a name");
    }

    [TestMethod]
    public async Task AddDataset_UnknownAttribute_ReturnsError()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Unknown",
            fetchxml: "<fetch><entity name='account'><attribute name='nosuchattr' /></entity></fetch>");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'nosuchattr' was not found on entity 'account'");
    }

    [TestMethod]
    public async Task AddDataset_FetchWithoutAttributes_ReturnsError()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Empty",
            fetchxml: "<fetch><entity name='account' /></fetch>");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "must contain at least one attribute");
    }
}
