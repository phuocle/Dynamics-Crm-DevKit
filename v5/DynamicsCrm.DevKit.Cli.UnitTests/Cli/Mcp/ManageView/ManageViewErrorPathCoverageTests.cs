using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageView;

/// <summary>
/// manage_view rare-branch coverage: personal-view name resolution, create
/// validation blocks (XSD, field names, layout build, sync), update blocks
/// (server validation, cell patch, RunValidation), icon updates, fetch
/// normalization aliases, set_default by-name errors, and undo backup
/// validation failures.
/// </summary>
[TestClass]
public sealed class ManageViewErrorPathCoverageTests
{
    private FakeSdkClient _fake = null!;
    private FakeWebApi _webApi = null!;
    private readonly List<Entity> _savedQueries = new();
    private readonly List<Entity> _userQueries = new();
    private List<EntityMetadata> _entityMetadata = new();

    private const string EntityName = "accountviewtarget";
    private const string LinkEntityName = "contactviewlink";

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _webApi = new FakeWebApi();
        _savedQueries.Clear();
        _userQueries.Clear();
        _entityMetadata.Clear();
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
        _webApi.Dispose();
    }

    private sealed class FakeWebApi : IWebApiExecutor, IDisposable
    {
        public string ResponseBody { get; set; } = "";
        private readonly List<HttpResponseMessage> _responses = new();

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
        {
            var response = new HttpResponseMessage(HttpStatusCode.OK) { Content = new StringContent(ResponseBody) };
            _responses.Add(response);
            return response;
        }

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "fake-token";

        public void Dispose()
        {
            foreach (var response in _responses) response.Dispose();
        }
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = _entityMetadata.ToArray() }
        },
        RetrieveEntityRequest r => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _entityMetadata.First(m => m.LogicalName == r.LogicalName) }
        },
        UpdateRequest => new UpdateResponse(),
        _ => new OrganizationResponse()
    };

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "savedquery" => new EntityCollection(_savedQueries),
                "userquery" => new EntityCollection(_userQueries),
                _ => new EntityCollection()
            };
        }
        if (query is FetchExpression fe)
        {
            if (fe.Query.Contains("name='userquery'")) return new EntityCollection(_userQueries);
            if (fe.Query.Contains("name='savedquery'")) return new EntityCollection(_savedQueries);
            return new EntityCollection();
        }
        return new EntityCollection();
    }

    private ManageViewTool NewDryRunTool() =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext(), _webApi);

    private ManageViewTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), _webApi);

    private static EntityMetadata EntityWithAttributes(string logicalName, params AttributeMetadata[] attributes) =>
        TestMetadata.Entity(logicalName, char.ToUpperInvariant(logicalName[0]) + logicalName[1..], attributes);

    private void SeedStandardMetadata()
    {
        _entityMetadata.Add(EntityWithAttributes(EntityName,
            TestMetadata.String("name", "Name"),
            TestMetadata.String("telephone1", "Phone"),
            TestMetadata.String("fullname", "Account Full Name"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", LinkEntityName)));
        _entityMetadata.Add(EntityWithAttributes(LinkEntityName,
            TestMetadata.String("fullname", "Full Name"),
            TestMetadata.String("emailaddress1", "Email"),
            TestMetadata.Integer("accountidlink", "Account Id")));
    }

    private static Entity MakeSystemView(string fetchXml, string layoutXml, int queryType = 0)
    {
        var id = Guid.NewGuid();
        return new Entity("savedquery", id)
        {
            ["savedqueryid"] = id,
            ["name"] = "Target View",
            ["returnedtypecode"] = EntityName,
            ["querytype"] = queryType,
            ["statecode"] = new OptionSetValue(0),
            ["fetchxml"] = fetchXml,
            ["layoutxml"] = layoutXml
        };
    }

    private static string LayoutWithCells(params string[] cellNames)
    {
        var cells = string.Join("", cellNames.Select((n, i) => $"<cell name=\"{n}\" width=\"150\"/>"));
        return $"<grid name=\"resultset\" object=\"10000\" jump=\"name\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"{EntityName}id\">{cells}</row></grid>";
    }

    // ── list / detail ───────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_PersonalViewNameMatch_FallsBackToPersonalDetail()
    {
        SeedStandardMetadata();
        var id = Guid.NewGuid();
        _userQueries.Add(new Entity("userquery", id)
        {
            ["userqueryid"] = id,
            ["name"] = "My Personal View",
            ["returnedtypecode"] = EntityName,
            ["querytype"] = 0,
            ["statecode"] = new OptionSetValue(0)
        });

        var result = await NewTool().manage_view(null!, action: "list", entity_name: EntityName, view_name: "Personal", is_personal_view: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "'My Personal View'");
        StringAssert.Contains(result.GetText(), "personal");
    }

    // ── create ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Create_FetchXmlSchemaError_BlocksCreate()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Bad Fetch", fetchxml: $"<fetch><entity name='{EntityName}'><attribute/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "CREATE view 'Bad Fetch'");
        StringAssert.Contains(result.GetText(), "validation error(s)");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("blocked_validation", json.GetProperty("details").GetProperty("status").GetString());
    }

    [TestMethod]
    public async Task Create_FieldNotInMetadata_BlocksCreate()
    {
        _entityMetadata.Add(EntityWithAttributes(EntityName));

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Ghost Field", fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='ghostfield'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "field(s) not found in entity metadata");
        StringAssert.Contains(result.GetText(), "'ghostfield' not found");
    }

    [TestMethod]
    public async Task Create_AliasedMainAttribute_FailsFieldValidation()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Aliased",
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='c.fullname'/><link-entity name='{LinkEntityName}' alias='c' from='accountidlink' to='primarycontactid'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "'c.fullname' not found on '" + EntityName + "'");
    }

    [TestMethod]
    public async Task Create_LinkEntityWithoutName_BlocksNameResolution()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "No Link Name",
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/><link-entity><attribute name='fullname'/></link-entity></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "link-entity is missing required 'name' attribute");
    }

    [TestMethod]
    public async Task Create_AliasedAttributeWithoutLink_BlocksNameResolution()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Dangling Alias",
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='c.fullname'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "alias 'c' was not found in FetchXML");
    }

    [TestMethod]
    public async Task Create_FetchWithoutEntityElement_BlocksLayoutBuild()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Empty Fetch", fetchxml: "<fetch/>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "FetchXML has no <entity> element");
    }

    [TestMethod]
    public async Task Create_OrderColumnNotDisplayed_BlocksSync()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Order Sync",
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/><order attribute='telephone1'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "generated layout failed sync check");
        StringAssert.Contains(result.GetText(), "'telephone1'");
    }

    [TestMethod]
    public async Task Create_RichFetch_DryRunGeneratesLayout()
    {
        SeedStandardMetadata();

        var result = await NewDryRunTool().manage_view(null!, action: "create", entity_name: EntityName,
            view_name: "Rich View",
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/><order attribute='name'/>" +
                      "<filter><condition entityname='c' attribute='fullname' operator='like' value='%x%'/></filter>" +
                      $"<link-entity name='{LinkEntityName}' alias='c' from='accountidlink' to='primarycontactid'>" +
                      "<attribute name='fullname'/>" +
                      "</link-entity></entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would CREATE view 'Rich View'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        var layout = json.GetProperty("layoutXml").GetString()!;
        StringAssert.Contains(layout, "c.fullname");
    }

    // ── update ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Update_ServerSideValidationFails_BlocksUpdate()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));
        _webApi.ResponseBody = """{"ValidationResults":{"Messages":[{"Severity":"Error","LocalizedMessageText":"bad fetch expression"}]}}""";

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "FetchXML failed server-side validation");
        StringAssert.Contains(result.GetText(), "bad fetch expression");
    }

    [TestMethod]
    public async Task Update_FetchWithoutEntityElement_BlocksLayoutBuild()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(), fetchxml: "<fetch/>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "FetchXML has no <entity> element");
    }

    [TestMethod]
    public async Task Update_CellPatchForMissingCell_BlocksPatch()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"telephone1","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "cell patch failed");
        StringAssert.Contains(result.GetText(), "Cell 'telephone1' not found in LayoutXML");
    }

    [TestMethod]
    public async Task Update_CellPatchSucceedsButSyncFails_BlocksUpdate()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"name","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "blocked");
        StringAssert.Contains(result.GetText(), "'telephone1' in FetchXML has no matching <cell>");
    }

    [TestMethod]
    public async Task Update_FieldNotInMetadata_BlocksUpdate()
    {
        _entityMetadata.Add(EntityWithAttributes(EntityName));
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='ghostfield'/></entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "field(s) not found in entity metadata");
        StringAssert.Contains(result.GetText(), "'ghostfield' not found");
    }

    [TestMethod]
    public async Task Update_LinkOrderFieldMissing_ReportsSimilarFields()
    {
        SeedStandardMetadata();
        _entityMetadata[1] = EntityWithAttributes(LinkEntityName,
            TestMetadata.String("fullname", "Full Name"),
            TestMetadata.String("emailaddress1", "Email"),
            TestMetadata.Integer("accountidlink", "Account Id"),
            TestMetadata.String("nosuchorder2", "Similar Field"));
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/>" +
            $"<link-entity name='{LinkEntityName}' alias='c' from='accountidlink' to='primarycontactid'><order attribute='nosuchorder'/></link-entity>" +
            "</entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"name","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "'nosuchorder' not found on '" + LinkEntityName + "'");
        StringAssert.Contains(result.GetText(), "(Similar: nosuchorder2)");
    }

    [TestMethod]
    public async Task Update_AliasedCellPatch_DryRunSucceeds()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><link-entity name='{LinkEntityName}' alias='c' from='accountidlink' to='primarycontactid'/></entity></fetch>",
            LayoutWithCells("c.fullname")));

        var result = await NewDryRunTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"c.fullname","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE view 'Target View'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        StringAssert.Contains(json.GetProperty("updatedParts").GetString()!, "cell patch");
    }

    [TestMethod]
    public async Task Update_CellPatchWithUnknownAlias_BlocksNameResolution()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"c.fullname","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "alias 'c' was not found in FetchXML for 'c.fullname'");
        StringAssert.Contains(result.GetText(), "name resolution failed");
    }

    [TestMethod]
    public async Task Update_IconFunctionNameWithWhitespace_BlocksUpdate()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderfunctionname":"bad fn name"}}]""");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "must be a non-empty JS function name without whitespace");
    }

    [TestMethod]
    public async Task Update_LinkAttributeWithoutName_SkipsCellThenFailsFetchValidation()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            fetchxml: $"<fetch><entity name='{EntityName}'><attribute name='name'/>" +
                      $"<link-entity name='{LinkEntityName}' alias='c' from='accountidlink' to='primarycontactid'><attribute/><attribute name='fullname'/></link-entity>" +
                      "</entity></fetch>");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "blocked");
    }

    [TestMethod]
    public async Task Update_NamelessLinkEntityInCurrentFetch_PatchSucceeds()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/><link-entity from='x' to='y'/></entity></fetch>",
            LayoutWithCells("name")));

        var result = await NewDryRunTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"name","set_attributes":{"ishidden":"1"}}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE view 'Target View'");
    }

    [TestMethod]
    public async Task Update_ObjectTypeCodeMissing_KeepsLayoutWithoutObject()
    {
        var meta = EntityWithAttributes(EntityName, TestMetadata.String("name", "Name"));
        TestMetadata.Set(meta, nameof(EntityMetadata.ObjectTypeCode), (int?)null);
        _entityMetadata.Add(meta);
        var layoutWithoutObject = "<grid name=\"resultset\" jump=\"name\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"accountviewtargetid\"><cell name=\"name\" width=\"150\"/></row></grid>";
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            layoutWithoutObject));

        var result = await NewDryRunTool().manage_view(null!, action: "update", entity_name: EntityName,
            view_id: _savedQueries[0].Id.ToString(),
            cell_updates_json: """[{"cell_name":"name","set_attributes":{"ishidden":"1"}}]""");

        // Layout stays without 'object'; XSD validation then blocks the update.
        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "blocked");
    }

    // ── set_default ─────────────────────────────────────────────────────────

    [TestMethod]
    public async Task SetDefault_ByUnknownName_ReturnsResolveError()
    {
        SeedStandardMetadata();

        var result = await NewTool().manage_view(null!, action: "set_default", entity_name: EntityName, view_name: "missing");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No system view found matching name 'missing'");
    }

    // ── undo ────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_BackupPairFailsValidation_BlocksUndo()
    {
        SeedStandardMetadata();
        _savedQueries.Add(MakeSystemView(
            $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>",
            LayoutWithCells("name")));

        var stem = $"devkit-{Guid.NewGuid():N}";
        var fetchPath = Path.Combine(Path.GetTempPath(), $"{stem}.fetchxml.xml");
        var layoutPath = Path.Combine(Path.GetTempPath(), $"{stem}.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, $"<fetch><entity name='{EntityName}'><attribute name='name'/></entity></fetch>");
        await File.WriteAllTextAsync(layoutPath, LayoutWithCells("other"));
        try
        {
            var result = await NewTool().manage_view(null!, action: "undo", entity_name: EntityName,
                view_id: _savedQueries[0].Id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);

            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "backup file(s) failed validation");
            StringAssert.Contains(result.GetText(), "'name' in FetchXML has no matching <cell>");
        }
        finally
        {
            File.Delete(fetchPath);
            File.Delete(layoutPath);
        }
    }
}
