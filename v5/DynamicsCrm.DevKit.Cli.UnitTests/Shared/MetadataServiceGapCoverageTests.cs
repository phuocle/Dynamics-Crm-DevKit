using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// Second-pass coverage for MetadataService: the schema-name lookup, the
/// ExecuteMultiple fill of GetEntitiesMetadataAsync (hits and faults),
/// GetEntityMetadataAsync, the systemform projection lambdas of
/// GetEntityFormXmlAsync and the OutputParameters half of
/// GetPluginCommentAsync — plus the MessageDiscoveryHelper markdown
/// assembly (custom actions, custom apis and the api-name de-dup filter)
/// those org reads feed.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class MetadataServiceGapCoverageTests
{
    private FakeSdkClient _fake = null!;
    private MetadataService _service = null!;
    private List<EntityMetadata> _originalMetadataCache = null!;
    private List<Entity> _sdkMessages = null!;
    private List<Entity> _sdkMessageRequests = null!;
    private List<Entity> _sdkMessageResponses = null!;
    private List<Entity> _customApis = null!;
    private List<Entity> _organization = null!;
    private List<Entity> _dialogForms = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _sdkMessages = new List<Entity>();
        _sdkMessageRequests = new List<Entity>();
        _sdkMessageResponses = new List<Entity>();
        _customApis = new List<Entity>();
        _organization = new List<Entity>();
        _dialogForms = new List<Entity>();
        _originalMetadataCache = XrmHelper.EntitiesMetadata;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _service = new MetadataService(_fake.Client);
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
        XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new List<EntityMetadata>();
    }

    private static EntityMetadata Entity(int objectKeyCode, string logicalName)
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))!.SetValue(meta, logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.SchemaName))!.SetValue(meta, "New" + logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ObjectTypeCode))!.SetValue(meta, (int?)objectKeyCode);
        return meta;
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveEntityRequest r => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = Entity(1, r.LogicalName) }
        },
        ExecuteMultipleRequest multiple => MultipleResponse(multiple),
        _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
    };

    private ExecuteMultipleResponse MultipleResponse(ExecuteMultipleRequest multiple)
    {
        // Unknown entities come back as faults — the service degrades
        // them to stub metadata instead of failing the batch.
        var responses = new ExecuteMultipleResponseItemCollection();
        foreach (var item in multiple.Requests
            .Cast<RetrieveEntityRequest>()
            .Select((req, index) => req.LogicalName == "ghost"
                ? new ExecuteMultipleResponseItem { RequestIndex = index, Fault = new OrganizationServiceFault() }
                : new ExecuteMultipleResponseItem
                {
                    RequestIndex = index,
                    Response = new RetrieveEntityResponse { Results = { ["EntityMetadata"] = Entity(1, req.LogicalName) } }
                }))
        {
            responses.Add(item);
        }
        return new ExecuteMultipleResponse { Results = { ["Responses"] = responses } };
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        var fetch = ((query as FetchExpression)?.Query ?? string.Empty).Replace("\"", "'");
        if (fetch.Contains("sdkmessagerequestfield"))
            return new EntityCollection(_sdkMessageRequests);
        if (fetch.Contains("sdkmessageresponsefield"))
            return new EntityCollection(_sdkMessageResponses);
        if (fetch.Contains("entity name='sdkmessagerequest'"))
            return new EntityCollection(_sdkMessageRequests);
        if (fetch.Contains("entity name='sdkmessage'"))
            return new EntityCollection(_sdkMessages);
        if (fetch.Contains("entity name='customapi'"))
            return new EntityCollection(_customApis);
        if (fetch.Contains("entity name='organization'"))
            return new EntityCollection(_organization);
        if (fetch.Contains("entity name='systemform'"))
            return new EntityCollection(_dialogForms);
        return new EntityCollection();
    }

    // ── GetSchemaNameAsync (private) ─────────────────────────────────────────

    [TestMethod]
    public async Task GetSchemaNameAsync_ReadsSchemaFromEntityResponse()
    {
        var method = typeof(MetadataService).GetMethod("GetSchemaNameAsync", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method);

        Assert.AreEqual("None", await (Task<string>)method!.Invoke(_service, ["none"])!);
        Assert.AreEqual("Newaccount", await (Task<string>)method.Invoke(_service, ["account"])!);
    }

    // ── GetEntitiesMetadataAsync(List) — ExecuteMultiple fill ────────────────

    [TestMethod]
    public async Task GetEntitiesMetadataAsync_FillsMissingThroughExecuteMultiple()
    {
        // The cache holds nothing, so both schema names go to the org as one
        // ExecuteMultipleRequest; the faulting half degrades to a stub.
        var result = await _service.GetEntitiesMetadataAsync(new List<string> { "account", "ghost" });

        Assert.HasCount(2, result);
        Assert.AreEqual("Newaccount", result[0].SchemaName);
        Assert.AreEqual("ghost", result[1].LogicalName); // fault → logical name doubles as schema name
        Assert.AreEqual("ghost", result[1].SchemaName);
    }

    [TestMethod]
    public async Task GetEntitiesMetadataAsync_CacheHitsSkipTheOrg()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { Entity(1, "account") };
        var result = await _service.GetEntitiesMetadataAsync(new List<string> { "Account" });
        Assert.HasCount(1, result);
        Assert.AreEqual("Newaccount", result[0].SchemaName);
    }

    // ── GetEntityMetadataAsync ───────────────────────────────────────────────

    [TestMethod]
    public async Task GetEntityMetadataAsync_ReturnsCacheHitOrFaultStub()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { Entity(1, "account") };
        var metadata = await _service.GetEntityMetadataAsync("account");
        Assert.IsNotNull(metadata);
        Assert.AreEqual("account", metadata.LogicalName);

        // An unknown entity degrades through the ExecuteMultiple fault path.
        var ghost = await _service.GetEntityMetadataAsync("ghost");
        Assert.IsNotNull(ghost);
        Assert.AreEqual("ghost", ghost.LogicalName);
        Assert.AreEqual("ghost", ghost.SchemaName);
    }

    // ── GetEntityFormXmlAsync — the SystemForm projection ────────────────────

    [TestMethod]
    public async Task GetEntityFormXmlAsync_ProjectsSystemFormRows()
    {
        _dialogForms.Add(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Contact Main",
            ["description"] = "contact main form",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue((int)FormType.Main),
            ["objecttypecode"] = "contact",
            ["formid"] = Guid.NewGuid(),
        });
        _dialogForms.Add(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Account Quick",
            ["description"] = "account quick create",
            ["formxml"] = "<form quick />",
            ["type"] = new OptionSetValue((int)FormType.QuickCreate),
            ["objecttypecode"] = "account",
            ["formid"] = Guid.NewGuid(),
        });

        var forms = await _service.GetEntityFormXmlAsync(null);

        Assert.HasCount(2, forms);
        Assert.AreEqual("Account Quick", forms[0].Name); // ordered by entity logical name first
        Assert.AreEqual("account", forms[0].EntityLogicalName);
        Assert.IsTrue(forms[0].IsQuickCreate);
        Assert.AreEqual(FormType.QuickCreate, forms[0].FormType);
        Assert.IsFalse(forms[1].IsQuickCreate);
        Assert.AreEqual("<form quick />", forms[0].FormXml);
        Assert.IsNotNull(forms[0].FormId);
    }

    [TestMethod]
    public async Task GetEntityFormXmlAsync_EmptyResult_ReturnsEmptyList()
    {
        var forms = await _service.GetEntityFormXmlAsync(1);
        Assert.HasCount(0, forms);
    }

    // ── GetPluginCommentAsync — the OutputParameters half ────────────────────

    [TestMethod]
    public async Task GetPluginCommentAsync_RendersInputAndOutputBlocks()
    {
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest", Guid.NewGuid())
        {
            ["f.name"] = new AliasedValue("sdkmessagerequestfield", "name", "Target"),
            ["f.clrparser"] = new AliasedValue("sdkmessagerequestfield", "clrparser", "Microsoft.Xrm.Sdk.Entity, mscorlib"),
            ["f.optional"] = new AliasedValue("sdkmessagerequestfield", "optional", false),
            ["f.position"] = new AliasedValue("sdkmessagerequestfield", "position", 1),
        });
        _sdkMessageResponses.Add(new Entity("sdkmessageresponse", Guid.NewGuid())
        {
            ["f.name"] = new AliasedValue("sdkmessageresponsefield", "name", "id"),
            ["f.clrformatter"] = new AliasedValue("sdkmessageresponsefield", "clrformatter", "System.Guid, mscorlib"),
            ["f.position"] = new AliasedValue("sdkmessageresponsefield", "position", 0),
        });

        var comment = await _service.GetPluginCommentAsync("account", "Create");

        StringAssert.Contains(comment, "InputParameters:");
        StringAssert.Contains(comment, "Target");
        StringAssert.Contains(comment, "OutputParameters:");
        StringAssert.Contains(comment, "id");
        StringAssert.Contains(comment, "System.Guid");
    }

    [TestMethod]
    public async Task GetPluginCommentAsync_NoParametersOrMissingInput_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, await _service.GetPluginCommentAsync("account", "Create"));

        // Input rows exist but the message itself is missing → still empty.
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest", Guid.NewGuid())
        {
            ["f.name"] = new AliasedValue("sdkmessagerequestfield", "name", "Target"),
            ["f.clrparser"] = new AliasedValue("sdkmessagerequestfield", "clrparser", "System.String"),
            ["f.optional"] = new AliasedValue("sdkmessagerequestfield", "optional", true),
            ["f.position"] = new AliasedValue("sdkmessagerequestfield", "position", 1),
        });
        Assert.AreEqual(string.Empty, await _service.GetPluginCommentAsync(null, null));
    }

    // ── MessageDiscoveryHelper over the same org reads ───────────────────────

    [TestMethod]
    public async Task GetMessageMarkdownAsync_NoneScope_IncludesCustomActionsAndApis()
    {
        _sdkMessages.Add(new Entity("sdkmessage") { ["name"] = "WhoAmI" });
        // Unbound custom action (sdkmessagerequest with primaryobjecttypecode none).
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest")
        {
            ["name"] = "new_MyAction",
            ["primaryobjecttypecode"] = "none",
        });
        _customApis.Add(new Entity("customapi")
        {
            ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "new_MyAction" },
        });

        var markdown = await MessageDiscoveryHelper.GetMessageMarkdownAsync(_service, "none", includeCustomActions: true);

        StringAssert.Contains(markdown, "WhoAmI");
        Assert.IsFalse(markdown.Contains("new_MyAction")); // filtered: a custom api claims the same name
    }

    [TestMethod]
    public async Task GetMessageMarkdownAsync_EntityScope_UsesBoundReads()
    {
        _sdkMessages.Add(new Entity("sdkmessage") { ["name"] = "Create" });
        _customApis.Add(new Entity("customapi")
        {
            ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "new_BoundApi" },
        });

        var markdown = await MessageDiscoveryHelper.GetMessageMarkdownAsync(_service, "ACCOUNT", includeCustomActions: false);

        StringAssert.Contains(markdown, "Create");
        StringAssert.Contains(markdown, "account"); // the normalized scope is echoed
    }

    [TestMethod]
    public void NormalizeScope_TrimsAndMapsGlobalToNone()
    {
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope(null));
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope("  "));
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope("GLOBAL"));
        Assert.AreEqual("account", MessageDiscoveryHelper.NormalizeScope(" Account "));
    }

    // NOTE: McpServerHost.RunAsync's success path builds and runs a real
    // stdio MCP host (Host.CreateApplicationBuilder + RunAsync) — in the
    // test runner the transport never completes, so the McpServerOptions /
    // ConsoleLogger lambdas stay uncovered without product change.
}
