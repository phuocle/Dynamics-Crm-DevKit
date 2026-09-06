using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.PowerPlatform.Dataverse.Client;
using FakeItEasy;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageReport;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageReportTool (list/detail/create/download/
/// update/dataset actions). The async org service is an A.Fake<IOrganizationServiceAsync2>
/// delegating to FakeXrmEasy; metadata and provisioned-language requests are answered
/// locally; create/download/update touch only the temp workspace on disk.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageReportFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private IOrganizationServiceAsync2 _service = null!;
    private int _updates;
    private List<EntityMetadata> _metadata = null!;

    [TestInitialize]
    public async Task Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-report-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        _localeRowId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("languagelocale", _localeRowId)
        {
            ["localeid"] = 1033,
            ["language"] = "English"
        });

        _metadata = new List<EntityMetadata> { MakeAccountMetadata() };

        var inner = _ctx.GetOrganizationService();
        _updates = 0;
        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultiple(A<QueryBase>.Ignored))
            .ReturnsLazily(call => OnRetrieveMultiple((QueryBase)call.Arguments[0]));
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(inner.RetrieveMultiple((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.Retrieve(A<string>.Ignored, A<Guid>.Ignored, A<ColumnSet>.Ignored))
            .ReturnsLazily(call => inner.Retrieve((string)call.Arguments[0], (Guid)call.Arguments[1], (ColumnSet)call.Arguments[2]));
        A.CallTo(() => _service.Execute(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => OnExecute((OrganizationRequest)call.Arguments[0]));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call => { _updates++; inner.Update((Entity)call.Arguments[0]); return Task.CompletedTask; });
        A.CallTo(() => _service.Update(A<Entity>.Ignored))
            .Invokes(call => { _updates++; inner.Update((Entity)call.Arguments[0]); });
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private Guid _localeRowId;

    private EntityCollection OnRetrieveMultiple(QueryBase query)
    {
        // FakeXrmEasy cannot parse localeid conditions on languagelocale — answer manually.
        if (query is FetchExpression fe && fe.Query.Contains("<entity name='languagelocale'"))
        {
            var rows = new EntityCollection();
            if (_localeRowId != Guid.Empty)
                rows.Entities.Add(new Entity("languagelocale", _localeRowId) { ["localeid"] = 1033, ["language"] = "English" });
            return rows;
        }
        return _ctx.GetOrganizationService().RetrieveMultiple(query);
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        if (request is RetrieveProvisionedLanguagesRequest)
        {
            var resp = new RetrieveProvisionedLanguagesResponse();
            resp.Results["RetrieveProvisionedLanguages"] = new[] { 1033, 1036 };
            return resp;
        }
        if (request is RetrieveEntityRequest retrieveEntity)
        {
            var meta = _metadata.FirstOrDefault(m => string.Equals(m.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase))
                ?? throw new InvalidOperationException($"Metadata not found: {retrieveEntity.LogicalName}");
            var resp = new RetrieveEntityResponse();
            resp.Results["EntityMetadata"] = meta;
            return resp;
        }
        if (request is RetrieveAllEntitiesRequest)
        {
            var resp = new RetrieveAllEntitiesResponse();
            resp.Results["EntityMetadata"] = _metadata.ToArray();
            return resp;
        }
        if (request is PublishXmlRequest)
            return new OrganizationResponse();
        return _ctx.GetOrganizationService().Execute(request);
    }

    private ManageReportTool NewTool(bool dryRun = false, bool withConnection = false)
    {
        IMcpConnectionInfo? info = null;
        if (withConnection)
        {
            info = A.Fake<IMcpConnectionInfo>();
            A.CallTo(() => info.ConnectedOrgUri).Returns(new Uri("https://fakeorg.crm.dynamics.com"));
            A.CallTo(() => info.ConnectedOrgUniqueName).Returns("fakeorg");
        }
        return new ManageReportTool(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false), info!);
    }

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeAccountMetadata()
    {
        var name = new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", DisplayName = MakeLabel("Name") };
        var created = new DateTimeAttributeMetadata { LogicalName = "createdon", SchemaName = "CreatedOn", DisplayName = MakeLabel("Created On") };
        var number = new DecimalAttributeMetadata { LogicalName = "new_number", SchemaName = "New_Number", DisplayName = MakeLabel("Number") };
        var owner = new LookupAttributeMetadata { LogicalName = "ownerid", SchemaName = "OwnerId", DisplayName = MakeLabel("Owner") };
        var file = new FileAttributeMetadata { LogicalName = "new_file", SchemaName = "New_File", DisplayName = MakeLabel("File") };
        var meta = new EntityMetadata { LogicalName = "account", SchemaName = "Account", DisplayName = MakeLabel("Account") };
        Set(meta, "PrimaryIdAttribute", "accountid");
        Set(meta, "PrimaryNameAttribute", "name");
        Set(meta, "Attributes", new AttributeMetadata[] { name, created, number, owner, file });
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private const string ReportNs = "http://schemas.microsoft.com/sqlserver/reporting/2008/01/reportdefinition";

    private static string MinimalRdl(string datasetName = "Main") =>
        $"<Report xmlns=\"{ReportNs}\"><DataSources><DataSource Name=\"Dynamics365\"/></DataSources>" +
        $"<DataSets><DataSet Name=\"{datasetName}\"><Query><DataSourceName>Dynamics365</DataSourceName><CommandText>query</CommandText></Query>" +
        "<Fields><Field Name=\"name\"><DataField>name</DataField></Field></Fields></DataSet></DataSets></Report>";

    private Guid SeedReport(string name, string bodyText = "", string fileName = "", int languageCode = 1033,
        bool isManaged = false, string description = "")
    {
        var id = Guid.NewGuid();
        var row = new Entity("report", id)
        {
            ["reportid"] = id,
            ["name"] = name,
            ["filename"] = string.IsNullOrEmpty(fileName) ? name + ".rdl" : fileName,
            ["languagecode"] = languageCode,
            ["ismanaged"] = isManaged,
            ["bodytext"] = bodyText,
            ["modifiedon"] = DateTime.UtcNow,
        };
        if (!string.IsNullOrEmpty(description)) row["description"] = description;
        _ctx.GetOrganizationService().Create(row);
        return id;
    }

    private static string Text(CallToolResult r) => r.GetText();

    private static object InvokeStatic(string method, params object[] args)
    {
        var m = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageReportTool).GetMethod(method,
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
        return m!.Invoke(null, args)!;
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_ZeroMaxRecords_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "list", max_records: 0);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "max_records must be between 1 and 500");
    }

    [TestMethod]
    public async Task List_NegativeMaxRecords_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "list", max_records: -5);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task List_NoReports_ReturnsZero()
    {
        var result = await NewTool().manage_report(null!, "list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 reports found");
    }

    [TestMethod]
    public async Task List_WithReports_ReturnsEntries()
    {
        SeedReport("Account Overview");
        SeedReport("Contact List");
        var result = await NewTool().manage_report(null!, "list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 reports found");
    }

    [TestMethod]
    public async Task List_NameFilter_FiltersReports()
    {
        SeedReport("Account Overview");
        SeedReport("Contact List");
        var result = await NewTool().manage_report(null!, "list", name_filter: "Account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 report found");
    }

    [TestMethod]
    public async Task List_UnknownSolution_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "list", solution_name: "nosuchsolution");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_MissingId_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "detail");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "report_id is required for 'detail'");
    }

    [TestMethod]
    public async Task Detail_ByGuid_Found_ParsesBodyText()
    {
        var id = SeedReport("Detail Report", bodyText: MinimalRdl());
        var result = await NewTool().manage_report(null!, "detail", report_id: id.ToString());
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "'Detail Report'");
        StringAssert.Contains(Text(result), "English (1033)");
    }

    [TestMethod]
    public async Task Detail_ByGuid_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "detail", report_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not found");
    }

    [TestMethod]
    public async Task Detail_ByName_Resolves()
    {
        SeedReport("Named Report");
        var result = await NewTool().manage_report(null!, "detail", report_id: "Named Report");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Named Report'");
    }

    [TestMethod]
    public async Task Detail_ByName_Unknown_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "detail", report_id: "Ghost Report");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Ghost Report");
    }

    [TestMethod]
    public async Task Detail_InvalidBodyText_LeavesDataSetsNull()
    {
        var id = SeedReport("Bad Body", bodyText: "not-xml {{");
        var result = await NewTool().manage_report(null!, "detail", report_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Bad Body'");
    }

    // ──────────────────────────────────────────────
    // create (local only)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_FromEmbeddedTemplate_WritesLocalFile()
    {
        var result = await NewTool(withConnection: true).manage_report(null!, "create", name: "Templated Report");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created local report file");
        StringAssert.Contains(Text(result), "source: embedded_template");
        Assert.IsTrue(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_report")));
    }

    [TestMethod]
    public async Task Create_FromFile_WritesLocalFile()
    {
        var src = Path.Combine(_tempDir, "source.rdl");
        await File.WriteAllTextAsync(src, MinimalRdl());
        var result = await NewTool().manage_report(null!, "create", file_path: src);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "source: file");
        StringAssert.Contains(Text(result), "source.rdl");
    }

    [TestMethod]
    public async Task Create_MissingFile_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "create", file_path: Path.Combine(_tempDir, "ghost.rdl"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "File not found at path");
    }

    [TestMethod]
    public async Task Create_NonRdlExtension_ReturnsError()
    {
        var src = Path.Combine(_tempDir, "source.txt");
        await File.WriteAllTextAsync(src, "x");
        var result = await NewTool().manage_report(null!, "create", file_path: src);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not an .rdl report definition");
    }

    [TestMethod]
    public async Task Create_ExistingOutputFile_Fails()
    {
        var src = Path.Combine(_tempDir, "dupe.rdl");
        await File.WriteAllTextAsync(src, MinimalRdl());
        var first = await NewTool().manage_report(null!, "create", file_path: src);
        Assert.IsFalse(first.IsError == true);
        var second = await NewTool().manage_report(null!, "create", file_path: src);
        Assert.IsTrue(second.IsError == true);
        StringAssert.Contains(Text(second), "already exists");
    }

    [TestMethod]
    public async Task Create_DryRun_NoFileWritten()
    {
        var result = await NewTool(dryRun: true, withConnection: true).manage_report(null!, "create", name: "Dry Report");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE local report file");
        Assert.IsFalse(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_report")));
    }

    [TestMethod]
    public async Task Create_CustomOutputFolder_SavesThere()
    {
        var folder = Path.Combine(_tempDir, "custom-out");
        var result = await NewTool(withConnection: true).manage_report(null!, "create", name: "Custom Out", output_folder: folder);
        Assert.IsFalse(result.IsError == true, Text(result));
        Assert.IsTrue(File.Exists(Path.Combine(folder, "Custom Out.rdl")));
    }

    [TestMethod]
    public async Task Create_CustomOutputFolder_WithSingleRptproj_AddsReportItem()
    {
        var folder = Path.Combine(_tempDir, "rptproj-out");
        Directory.CreateDirectory(folder);
        const string rptproj = "<Project xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\"></Project>";
        var projectPath = Path.Combine(folder, "MyProject.rptproj");
        await File.WriteAllTextAsync(projectPath, rptproj);
        var result = await NewTool(withConnection: true).manage_report(null!, "create", name: "Proj Report", output_folder: folder);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Added report to project 'MyProject.rptproj'");
    }

    [TestMethod]
    public async Task Create_CustomOutputFolder_ReportAlreadyInRptproj()
    {
        var folder = Path.Combine(_tempDir, "rptproj-out2");
        Directory.CreateDirectory(folder);
        var projectPath = Path.Combine(folder, "P2.rptproj");
        await File.WriteAllTextAsync(projectPath, "<Project xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\"><ItemGroup><Report Include=\"Proj Two.rdl\"/></ItemGroup></Project>");
        var result = await NewTool(withConnection: true).manage_report(null!, "create", name: "Proj Two", output_folder: folder);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "already listed in project 'P2.rptproj'");
    }

    // ──────────────────────────────────────────────
    // download
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Download_MissingId_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "download");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "report_id is required for 'download'");
    }

    [TestMethod]
    public async Task Download_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "download", report_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Download_EmptyBodyText_ReturnsError()
    {
        var id = SeedReport("Empty Body");
        var result = await NewTool().manage_report(null!, "download", report_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "empty bodytext");
    }

    [TestMethod]
    public async Task Download_Success_WritesFile()
    {
        var id = SeedReport("Down Report", bodyText: MinimalRdl());
        var result = await NewTool().manage_report(null!, "download", report_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "saved to file");
        Assert.IsTrue(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_report", "downloads", "1033")));
    }

    [TestMethod]
    public async Task Download_DryRun_NoFileWritten()
    {
        var id = SeedReport("Dry Down", bodyText: MinimalRdl());
        var result = await NewTool(dryRun: true).manage_report(null!, "download", report_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "No file written");
    }

    [TestMethod]
    public async Task Download_CustomOutputFolder_SavesThere()
    {
        var id = SeedReport("Custom Down", bodyText: MinimalRdl());
        var folder = Path.Combine(_tempDir, "dl-out");
        var result = await NewTool().manage_report(null!, "download", report_id: id.ToString(), output_folder: folder);
        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(Directory.GetFiles(folder, "*.rdl").Length == 1);
    }

    [TestMethod]
    public async Task Download_ByName_Works()
    {
        SeedReport("Down By Name", bodyText: MinimalRdl());
        var result = await NewTool().manage_report(null!, "download", report_id: "Down By Name");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "saved to file");
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_MissingId_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "update");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "report_id is required for 'update'");
    }

    [TestMethod]
    public async Task Update_NoFields_ReturnsError()
    {
        var id = SeedReport("No Fields");
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No fields to update");
    }

    [TestMethod]
    public async Task Update_DescriptionOnly_Succeeds()
    {
        var id = SeedReport("Desc Only");
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), description: "new desc");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "fieldsUpdated=1");
        Assert.AreEqual(1, _updates);
    }

    [TestMethod]
    public async Task Update_FilePath_Succeeds()
    {
        var id = SeedReport("File Upd", bodyText: MinimalRdl());
        var src = Path.Combine(_tempDir, "upd.rdl");
        await File.WriteAllTextAsync(src, MinimalRdl("Changed"));
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), file_path: src);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated report");
        Assert.AreEqual(1, _updates);
    }

    [TestMethod]
    public async Task Update_IdenticalBodyText_NoChange()
    {
        const string body = "<report>same</report>";
        var id = SeedReport("Same Body", bodyText: body);
        var src = Path.Combine(_tempDir, "same.rdl");
        await File.WriteAllTextAsync(src, body);
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), file_path: src);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "up-to-date");
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task Update_FileNotFound_ReturnsError()
    {
        var id = SeedReport("Ghost File");
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), file_path: Path.Combine(_tempDir, "ghost.rdl"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "File not found at path");
    }

    [TestMethod]
    public async Task Update_NonRdlFile_ReturnsError()
    {
        var id = SeedReport("Bad Ext");
        var src = Path.Combine(_tempDir, "x.txt");
        await File.WriteAllTextAsync(src, "x");
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), file_path: src);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not an .rdl report definition");
    }

    [TestMethod]
    public async Task Update_ManagedNonCustomizable_ReturnsError()
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("report", id)
        {
            ["reportid"] = id,
            ["name"] = "Managed Report",
            ["filename"] = "managed.rdl",
            ["languagecode"] = 1033,
            ["ismanaged"] = true,
            ["iscustomizable"] = new BooleanManagedProperty(false),
        });
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), description: "x");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "managed and not customizable");
    }

    [TestMethod]
    public async Task Update_DryRun_NoMutation()
    {
        var id = SeedReport("Dry Upd");
        var result = await NewTool(dryRun: true).manage_report(null!, "update", report_id: id.ToString(), description: "dry desc");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task Update_ByGuid_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "update", report_id: Guid.NewGuid().ToString(), description: "x");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Update_RdlWithReportFilter_SyncsDefaultFilter()
    {
        var id = SeedReport("Filter Sync", bodyText: "<report/>");
        var fetchXml = "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"account\"><all-attributes/><filter type=\"and\"><condition attribute=\"name\" operator=\"eq\" value=\"Acme\"/></filter></entity></fetch>";
        var escapedFetch = fetchXml.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;");
        var reportFilterXml = "<ReportFilter><ReportEntity paramname=\"CRM_FilteredAccount\" displayname=\"account\" donotconvert=\"1\">" +
            escapedFetch + "</ReportEntity></ReportFilter>";
        // Production shape: <Value> holds ESCAPED text of <MSCRM> whose content is the
        // ReportFilter XML as escaped text (fetch is text inside ReportEntity).
        var innerEscaped = reportFilterXml.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;");
        var escapedFilter = ("<MSCRM xmlns=\"mscrm\">" + innerEscaped + "</MSCRM>")
            .Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;");
        var rdlWithFilter = "<Report xmlns=\"" + ReportNs + "\"><CustomProperties><CustomProperty><Name>Custom</Name>" +
            "<Value>" + escapedFilter + "</Value></CustomProperty></CustomProperties></Report>";
        var src = Path.Combine(_tempDir, "filter.rdl");
        await File.WriteAllTextAsync(src, rdlWithFilter);
        var result = await NewTool().manage_report(null!, "update", report_id: id.ToString(), file_path: src);
        Assert.IsFalse(result.IsError == true);
        var extracted = InvokeStatic("ExtractDefaultFilter", rdlWithFilter);
        Assert.IsNotNull(extracted, "ExtractDefaultFilter returned null for: " + rdlWithFilter);
        StringAssert.Contains(Text(result), "fieldsUpdated=2");
        Assert.AreEqual(1, _updates);
    }

    [TestMethod]
    public async Task Update_ByName_BaseLanguage_Resolves()
    {
        SeedReport("Name Upd Report");
        var result = await NewTool().manage_report(null!, "update", report_id: "Name Upd Report", description: "via name");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated report 'Name Upd Report'");
        Assert.AreEqual(1, _updates);
    }

    // ──────────────────────────────────────────────
    // dataset actions (local .rdl editing)
    // ──────────────────────────────────────────────

    private async Task<string> WriteRdlAsync(string fileName, string? datasetName = "Main")
    {
        var path = Path.Combine(_tempDir, fileName);
        var rdl = $"<Report xmlns=\"{ReportNs}\"><DataSources><DataSource Name=\"Dynamics365\"/></DataSources><DataSets>";
        if (datasetName != null)
            rdl += $"<DataSet Name=\"{datasetName}\"><Query><DataSourceName>Dynamics365</DataSourceName><CommandText>query</CommandText></Query>" +
                   "<Fields><Field Name=\"name\"><DataField>name</DataField></Field></Fields></DataSet>";
        rdl += "</DataSets></Report>";
        await File.WriteAllTextAsync(path, rdl);
        return path;
    }

    private const string SimpleFetch = "<fetch><entity name='account'><attribute name='name'/><attribute name='createdon'/><attribute name='ownerid'/></entity></fetch>";

    [TestMethod]
    public async Task Dataset_MissingFilePath_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "add_dataset", dataset_name: "D1");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "file_path is required for dataset actions");
    }

    [TestMethod]
    public async Task Dataset_NonRdlFile_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: "x.txt", dataset_name: "D1");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not an .rdl report definition");
    }

    [TestMethod]
    public async Task Dataset_MissingFile_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: Path.Combine(_tempDir, "ghost.rdl"), dataset_name: "D1");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "File not found at path");
    }

    [TestMethod]
    public async Task Dataset_MissingDatasetName_ReturnsError()
    {
        var rdl = await WriteRdlAsync("noname.rdl");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "dataset_name is required for dataset actions");
    }

    [TestMethod]
    public async Task Dataset_InvalidName_ReturnsError()
    {
        var rdl = await WriteRdlAsync("badname.rdl");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "1Bad Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not a valid simple RDL name");
    }

    [TestMethod]
    public async Task Dataset_NotReportRoot_ReturnsError()
    {
        var path = Path.Combine(_tempDir, "notreport.rdl");
        await File.WriteAllTextAsync(path, "<Html><Body/></Html>");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: path, dataset_name: "D1", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not a valid RDL report definition");
    }

    [TestMethod]
    public async Task Dataset_NoDataSetsContainer_ReturnsError()
    {
        var path = Path.Combine(_tempDir, "nodatasets.rdl");
        await File.WriteAllTextAsync(path, $"<Report xmlns=\"{ReportNs}\"><DataSources><DataSource Name=\"Dynamics365\"/></DataSources></Report>");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: path, dataset_name: "D1", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "no DataSets container");
    }

    [TestMethod]
    public async Task Dataset_NoDynamics365Source_ReturnsError()
    {
        var path = Path.Combine(_tempDir, "nosource.rdl");
        await File.WriteAllTextAsync(path, $"<Report xmlns=\"{ReportNs}\"><DataSources/><DataSets/></Report>");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: path, dataset_name: "D1", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "no 'Dynamics365' data source");
    }

    [TestMethod]
    public async Task AddDataset_AlreadyExists_ReturnsError()
    {
        var rdl = await WriteRdlAsync("exists.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "Main", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "already exists in");
    }

    [TestMethod]
    public async Task UpdateDataset_Missing_ReturnsError()
    {
        var rdl = await WriteRdlAsync("missingds.rdl", "Main");
        var result = await NewTool().manage_report(null!, "update_dataset", file_path: rdl, dataset_name: "Nope", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "was not found in");
    }

    [TestMethod]
    public async Task AddDataset_MissingFetchXml_ReturnsError()
    {
        var rdl = await WriteRdlAsync("nofetch.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "fetchxml is required for 'add_dataset'");
    }

    [TestMethod]
    public async Task AddDataset_MalformedFetchXml_ReturnsError()
    {
        var rdl = await WriteRdlAsync("badxml.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: "<<<");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not well-formed XML");
    }

    [TestMethod]
    public async Task AddDataset_NonFetchRoot_ReturnsError()
    {
        var rdl = await WriteRdlAsync("notfetch.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: "<other/>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "must contain one <fetch> document");
    }

    [TestMethod]
    public async Task AddDataset_AggregateFetch_ReturnsError()
    {
        var rdl = await WriteRdlAsync("agg.rdl", "Main");
        const string agg = "<fetch aggregate='true'><entity name='account'><attribute name='name' aggregate='count'/></entity></fetch>";
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: agg);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Aggregate and group-by FetchXML is not supported");
    }

    [TestMethod]
    public async Task AddDataset_MissingRootEntityName_ReturnsError()
    {
        var rdl = await WriteRdlAsync("noentname.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: "<fetch><entity/></fetch>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "one root entity with a name");
    }

    [TestMethod]
    public async Task AddDataset_AllAttributes_ReturnsError()
    {
        var rdl = await WriteRdlAsync("allattrs.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "<fetch><entity name='account'><all-attributes/></entity></fetch>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "<all-attributes /> is not supported");
    }

    [TestMethod]
    public async Task AddDataset_UnsupportedAttributeType_ReturnsError()
    {
        var rdl = await WriteRdlAsync("fileattr.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "<fetch><entity name='account'><attribute name='new_file'/></entity></fetch>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not supported by the SSRS fetch extension");
    }

    [TestMethod]
    public async Task AddDataset_UnknownAttribute_ReturnsError()
    {
        var rdl = await WriteRdlAsync("unknownattr.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "<fetch><entity name='account'><attribute name='nosuchfield'/></entity></fetch>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "was not found on entity 'account'");
    }

    [TestMethod]
    public async Task AddDataset_EmptyFetch_ReturnsError()
    {
        var rdl = await WriteRdlAsync("emptyfetch.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "<fetch></fetch>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "one root entity with a name");
    }

    [TestMethod]
    public async Task AddDataset_EntityNameMismatch_ReturnsError()
    {
        var rdl = await WriteRdlAsync("mismatch.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", entity_name: "Contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "does not match FetchXML entity 'account'");
    }

    [TestMethod]
    public async Task AddDataset_ViewName_WithoutEntityName_ReturnsError()
    {
        var rdl = await WriteRdlAsync("viewnoent.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: "My Open Accounts");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name is required when fetchxml is a system view name");
    }

    [TestMethod]
    public async Task AddDataset_ViewName_NotFound_ReturnsError()
    {
        var rdl = await WriteRdlAsync("viewmissing.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "Ghost View", entity_name: "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "was not found for entity 'account'");
    }

    [TestMethod]
    public async Task AddDataset_ViewName_Found_UsesViewFetch()
    {
        _ctx.GetOrganizationService().Create(new Entity("savedquery", Guid.NewGuid())
        {
            ["name"] = "Seeded View",
            ["returnedtypecode"] = "account",
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='name'/></entity></fetch>"
        });
        var rdl = await WriteRdlAsync("viewok.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New",
            fetchxml: "Seeded View", entity_name: "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "dataset action 'add_dataset' completed for 'New'");
        Assert.IsTrue(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_report", "backups")));
    }

    [TestMethod]
    public async Task AddDataset_DirectFetch_Succeeds()
    {
        var rdl = await WriteRdlAsync("addok.rdl", "Main");
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl, dataset_name: "New", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "dataset action 'add_dataset' completed for 'New'");
        var saved = await File.ReadAllTextAsync(rdl);
        StringAssert.Contains(saved, "New");
        StringAssert.Contains(saved, "createdonValue");
        StringAssert.Contains(saved, "owneridEntityName");
        StringAssert.Contains(saved, "enableprefiltering");
    }

    [TestMethod]
    public async Task UpdateDataset_Existing_Succeeds()
    {
        var rdl = await WriteRdlAsync("updok.rdl", "Main");
        var result = await NewTool().manage_report(null!, "update_dataset", file_path: rdl, dataset_name: "Main", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "dataset action 'update_dataset' completed for 'Main'");
    }

    [TestMethod]
    public async Task DeleteDataset_Existing_Succeeds()
    {
        var rdl = await WriteRdlAsync("delok.rdl", "Main");
        var result = await NewTool().manage_report(null!, "delete_dataset", file_path: rdl, dataset_name: "Main");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "dataset action 'delete_dataset' completed for 'Main'");
        var saved = await File.ReadAllTextAsync(rdl);
        Assert.IsFalse(saved.Contains("\"Main\""));
    }

    [TestMethod]
    public async Task DeleteDataset_Missing_ReturnsError()
    {
        var rdl = await WriteRdlAsync("delmiss.rdl", "Main");
        var result = await NewTool().manage_report(null!, "delete_dataset", file_path: rdl, dataset_name: "Ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "was not found in");
    }

    // ──────────────────────────────────────────────
    // misc
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task MissingAction_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action is required");
    }

    [TestMethod]
    public async Task InvalidAction_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }
}
