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
using System.Text.RegularExpressions;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageReport;

/// <summary>
/// Wave-2 gap coverage for ManageReportTool: the nested &lt;value&gt; condition
/// tokens in ApplyFetchParameters, the all-attributes dataset projection and
/// the unresolvable-entity guard, the system-view resolution error paths
/// (missing entity / not found / ambiguous / broken FetchXML / entity_name
/// mismatch), the update-by-name language resolution paths (provisioned
/// language accepted, base language unresolvable, unknown language name,
/// zero/multiple language matches), the download-by-name resolver error and
/// the unreadable RDL file guard.
///
/// NOTE (dead code — not coverable):
/// - HandleCreate ~232-233 ("Embedded ReportTemplate.rdl resource not
///   found"): the resource is embedded in the CLI assembly.
/// - PrepareEmbeddedReportTemplate ~956 ("...no Dynamics 365
///   ConnectString"): the embedded template always carries ConnectString;
///   the file_path create mode never calls this method.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageReportGapWave2CoverageTests
{
    private const string ReportNs = "http://schemas.microsoft.com/sqlserver/reporting/2008/01/reportdefinition";

    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;
    private FakeSdkClient _fake = null!;
    private Entity _report = null!;
    private List<EntityMetadata> _metadata = new();
    private int[] _provisionedLanguages = [1033];
    private List<Entity>? _savedQueryViews;
    private List<Entity> _namedReportFetchResult = new();
    private bool _organizationFetchEmpty;
    private Dictionary<string, int> _languageLocales = new() { ["English"] = 1033, ["French"] = 1036 };

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-report-gap2-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _fake = new FakeSdkClient();
        _report = new Entity("report", Guid.NewGuid())
        {
            ["reportid"] = Guid.NewGuid(),
            ["name"] = "Gap Report",
            ["filename"] = "gap.rdl",
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
        _savedQueryViews = null;
        _namedReportFetchResult = new List<Entity> { _report };
        _organizationFetchEmpty = false;

        _fake.OnExecute = request => request switch
        {
            RetrieveProvisionedLanguagesRequest => new RetrieveProvisionedLanguagesResponse
            {
                Results = { ["RetrieveProvisionedLanguages"] = _provisionedLanguages }
            },
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _metadata.ToArray() }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _metadata.FirstOrDefault(m =>
                    string.Equals(m.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase))! }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
            entityName == "report" ? _report : new Entity(entityName, id);
        _fake.OnUpdate = _ => { };
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        _fake.Dispose();
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private static readonly Regex LanguageConditionRegex =
        new(@"attribute='language'\s+operator='eq'\s+value='([^']*)'", RegexOptions.Compiled);

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            if (fe.Query.Contains("entity name='languagelocale'"))
            {
                var match = LanguageConditionRegex.Match(fe.Query);
                if (match.Success && _languageLocales.TryGetValue(match.Groups[1].Value, out var localeId))
                    return new EntityCollection(new[]
                    {
                        new Entity("languagelocale", Guid.NewGuid()) { ["localeid"] = localeId, ["language"] = match.Groups[1].Value }
                    });
                return new EntityCollection();
            }
            if (fe.Query.Contains("entity name='organization'"))
                return _organizationFetchEmpty
                    ? new EntityCollection()
                    : new EntityCollection(new[] { new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 } });
            if (fe.Query.Contains("entity name='report'"))
                return new EntityCollection(_namedReportFetchResult);
            return new EntityCollection();
        }
        if (query is QueryExpression qe)
        {
            if (qe.EntityName == "report")
                return new EntityCollection(new[] { _report });
            if (qe.EntityName == "savedquery" && _savedQueryViews != null)
                return new EntityCollection(_savedQueryViews);
        }
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

    private ManageReportTool NewTool()
    {
        var info = new StubConnectionInfo { Uri = new Uri("https://fakeorg.crm.dynamics.com"), UniqueName = "fakeorg" };
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        return new ManageReportTool(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), info);
    }

    private string WriteRdl(string fileName = "template.rdl", string? content = null)
    {
        var path = Path.Combine(_tempDir, fileName);
        File.WriteAllText(path, content ?? MinimalRdl());
        return path;
    }

    // ── add_dataset: fetch parameter tokens + all-attributes ─────────────

    [TestMethod]
    public async Task AddDataset_ConditionNestedValues_BecomeQueryParameters()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Params",
            fetchxml: "<fetch><entity name='account'><attribute name='name' />" +
                      "<filter><condition attribute='name' operator='in'><value>@p1</value><value>Literal</value></condition></filter>" +
                      "</entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var written = File.ReadAllText(rdl);
        StringAssert.Contains(written, "Parameters!p1.Value");
        StringAssert.Contains(written, "Name=\"p1\"");
    }

    [TestMethod]
    public async Task AddDataset_AllAttributes_ExpandsEverySupportedField()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "AllFields",
            fetchxml: "<fetch><entity name='account'><all-attributes /></entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var written = File.ReadAllText(rdl);
        StringAssert.Contains(written, "DataField>name<");
    }

    [TestMethod]
    public async Task AddDataset_EntityMetadataNull_ReportsUnresolvable()
    {
        // RetrieveEntityRequest succeeds but returns a null EntityMetadata, so
        // the field builder reports the entity as unresolvable.
        var rdl = WriteRdl();
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse { Results = { ["EntityMetadata"] = null! } },
            _ => new OrganizationResponse()
        };

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Ghost",
            fetchxml: "<fetch><entity name='account'><attribute name='name' /></entity></fetch>");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Entity 'account' metadata could not be resolved.");
    }

    // ── system view resolution paths ─────────────────────────────────────

    [TestMethod]
    public async Task AddDataset_SystemView_UnknownEntity_ReturnsError()
    {
        var rdl = WriteRdl();

        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "Views", fetchxml: "My Missing View", entity_name: "No Such Entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Use get_tables to resolve a valid entity name.");
    }

    [TestMethod]
    public async Task AddDataset_SystemView_NotFoundOrAmbiguousOrBroken_ReturnsErrors()
    {
        var rdl = WriteRdl();

        // Not found: no savedquery rows.
        _savedQueryViews = new List<Entity>();
        var notFound = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "V1", fetchxml: "Missing View", entity_name: "account");
        Assert.IsTrue(notFound.IsError == true);
        StringAssert.Contains(notFound.GetText(), "System view 'Missing View' was not found for entity 'account'");

        // Ambiguous: two savedquery rows with the same name.
        _savedQueryViews = new List<Entity>
        {
            new("savedquery", Guid.NewGuid()) { ["name"] = "Dup View", ["returnedtypecode"] = "account", ["fetchxml"] = "<fetch><entity name='account'><attribute name='name' /></entity></fetch>" },
            new("savedquery", Guid.NewGuid()) { ["name"] = "Dup View", ["returnedtypecode"] = "account", ["fetchxml"] = "<fetch><entity name='account'><attribute name='name' /></entity></fetch>" }
        };
        var ambiguous = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "V2", fetchxml: "Dup View", entity_name: "account");
        Assert.IsTrue(ambiguous.IsError == true);
        StringAssert.Contains(ambiguous.GetText(), "System view 'Dup View' is ambiguous for entity 'account'");

        // Broken FetchXML stored on the view.
        _savedQueryViews = new List<Entity>
        {
            new("savedquery", Guid.NewGuid()) { ["name"] = "Broken View", ["returnedtypecode"] = "account", ["fetchxml"] = "<fetch><entity name='account'>" }
        };
        var broken = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "V3", fetchxml: "Broken View", entity_name: "account");
        Assert.IsTrue(broken.IsError == true);
        StringAssert.Contains(broken.GetText(), "System view 'Broken View' has invalid FetchXML");
    }

    [TestMethod]
    public async Task AddDataset_SystemView_EntityNameMismatch_ReturnsError()
    {
        var rdl = WriteRdl();

        // Direct FetchXML plus an entity_name that resolves to another
        // entity must be rejected before any dataset edit.
        var result = await NewTool().manage_report(null!, "add_dataset", file_path: rdl,
            dataset_name: "V4",
            fetchxml: "<fetch><entity name='account'><attribute name='name' /></entity></fetch>",
            entity_name: "Contact");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name 'Contact' does not match FetchXML entity 'account'");
    }

    // ── update by name: language paths ───────────────────────────────────

    [TestMethod]
    public async Task Update_ByName_ProvisionedLanguage_UpdatesReport()
    {
        var result = await NewTool().manage_report(null!, "update", report_id: "Gap Report",
            language: "English", description: "updated");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated report 'Gap Report'");
    }

    [TestMethod]
    public async Task Update_ByName_OrganizationLanguageUnresolvable_ReturnsError()
    {
        _organizationFetchEmpty = true;

        var result = await NewTool().manage_report(null!, "update", report_id: "Gap Report", description: "x");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Organization base language could not be resolved");
    }

    [TestMethod]
    public async Task Update_ByName_UnknownLanguageName_ReturnsError()
    {
        var result = await NewTool().manage_report(null!, "update", report_id: "Gap Report",
            language: "Klingon", description: "x");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Language 'Klingon' not found");
    }

    [TestMethod]
    public async Task Update_ByName_NoLanguageMatch_ReturnsError()
    {
        _report["languagecode"] = 1036; // only a French row, caller asks for English

        var result = await NewTool().manage_report(null!, "update", report_id: "Gap Report",
            language: "English", description: "x");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Report 'Gap Report' not found for language 1033");
    }

    [TestMethod]
    public async Task Update_ByName_MultipleLanguageMatches_ReturnsError()
    {
        var frenchCopy = new Entity("report", Guid.NewGuid())
        {
            ["reportid"] = Guid.NewGuid(),
            ["name"] = "Gap Report",
            ["filename"] = "gap.fr.rdl",
            ["languagecode"] = 1033,
            ["ismanaged"] = false,
            ["bodytext"] = MinimalRdl(),
            ["modifiedon"] = DateTime.UtcNow
        };
        _namedReportFetchResult = new List<Entity> { _report, frenchCopy };

        var result = await NewTool().manage_report(null!, "update", report_id: "Gap Report",
            language: "English", description: "x");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple reports match 'Gap Report' for language 1033");
    }

    // ── download: name resolver error ────────────────────────────────────

    [TestMethod]
    public async Task Download_ByName_NoReport_ReturnsError()
    {
        _namedReportFetchResult = new List<Entity>();

        var result = await NewTool().manage_report(null!, "download", report_id: "No Such Report");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "manage_report(action='list')");
    }

    // NOTE (dead code — not coverable): HandleDatasetLocal's "Could not read
    // RDL file" guard (~354-357) is unreachable — FileHelper.ReadAllTextAsync
    // swallows every IO exception and returns string.Empty, so an unreadable
    // file degrades to the "not well-formed XML" parse error instead.
}
