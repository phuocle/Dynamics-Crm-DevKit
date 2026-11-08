using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageView;

/// <summary>
/// Wave-2 gap coverage for ManageViewTool: the LayoutXML builder's
/// link-entity handling — alias-less link-entities are auto-aliased by
/// EnsureLayoutBuildableFetchXml before the layout is built.
///
/// NOTE (dead code — not coverable):
/// - BuildLayoutXmlFromFetch ~1807-1808 ("link-entity ... has attributes
///   but no alias"): both callers (create ~262/305, update ~427/440) run
///   EnsureLayoutBuildableFetchXml first, which assigns an alias to every
///   alias-less direct link-entity that carries attributes — the guard can
///   never fire.
/// - HandleUpdate ~506-514 (`newFetchXml != null && !regenerateLayout`):
///   `regenerateLayout = newFetchXml != null && !hasCellUpdates` and the
///   cell-updates+fetchxml combination is rejected ~389-391, so whenever
///   newFetchXml is set, regenerateLayout is already true — the block can
///   never run.
/// - ResolveViewByName ~942-943 (empty view_name): all three callers
///   (detail/update/set_default) reject a missing view_id+view_name pair
///   before calling it.
/// </summary>
[TestClass]
public sealed class ManageViewGapWave2CoverageTests : IDisposable
{
    private FakeSdkClient _fake = null!;
    private readonly FakeWebApi _webApi = new();
    private Entity _view = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        // accountid rides on both entities so the link-entity from/to
        // references resolve during FetchXML name normalization.
        var contactMeta = TestMetadata.Entity("contact", "Contact",
            TestMetadata.String("fullname", "Full Name"),
            TestMetadata.Lookup("accountid", "Account", "account"));
        var accountMeta = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name", "Account Name"),
            TestMetadata.Lookup("accountid", "Account", "contact"));

        _view = new Entity("savedquery", Guid.NewGuid())
        {
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='name' /></entity></fetch>",
            ["layoutxml"] = "<grid><row><cell name='name' width='200' /></row></grid>",
            ["name"] = "Active Accounts",
            ["returnedtypecode"] = "account",
            ["querytype"] = 0
        };

        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[] { accountMeta, contactMeta } }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = r.LogicalName == "contact" ? contactMeta : accountMeta }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnUpdate = _ => { };
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression qe && qe.EntityName == "savedquery")
                return new EntityCollection(new[] { _view });
            return new EntityCollection();
        };
    }

    public void Dispose()
    {
        _fake.Dispose();
        _webApi.Dispose();
    }

    private ManageViewTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), _webApi);

    [TestMethod]
    public async Task Update_LinkEntityWithoutAlias_AliasIsAutoAssigned()
    {
        // EnsureLayoutBuildableFetchXml auto-assigns the entity name as alias
        // for alias-less link-entities before the LayoutXML is built, so the
        // update succeeds and rebuilds both fetchxml and layout.
        var result = await NewTool().manage_view(null!, entity_name: "Account", view_id: _view.Id.ToString(),
            action: "update",
            fetchxml: "<fetch><entity name='account'><attribute name='name' />" +
                      "<link-entity name='contact' from='accountid' to='accountid'><attribute name='fullname' /></link-entity>" +
                      "</entity></fetch>");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated view 'Active Accounts'");
        StringAssert.Contains(result.GetText(), "LayoutXML (regenerated from FetchXML) + FetchXML");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "regenerated from FetchXML");
    }

    private sealed class FakeWebApi : IWebApiExecutor, IDisposable
    {
        private readonly System.Collections.Generic.List<HttpResponseMessage> _responses = new();

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<string>> customHeaders,
            string contentType = null, CancellationToken cancellationToken = default)
        {
            var response = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent("")
            };
            _responses.Add(response);
            return response;
        }

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<string>> customHeaders,
            string contentType = null, CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "fake-token";

        public void Dispose()
        {
            foreach (var response in _responses) response.Dispose();
        }
    }
}
