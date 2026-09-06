using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetSolutionComponents;

/// <summary>
/// FakeXrmEasy-driven sweep coverage for GetSolutionComponentsTool: solution resolution
/// (found / ambiguous / not-found / invisible-solution exclusion), component paging with
/// MoreRecords + paging cookie, full-entity and per-type name resolution (entity / attribute /
/// relationship metadata plus every BatchResolve selector family), environment-variable-value
/// alias fallbacks, active-layer checks (success / active-layers-only / fault), formatter
/// fallbacks (FormattedValues label, unknown type ids, unresolved names) and the top-level
/// exception branch. All Dataverse answers are hand-built in a decorator org service.
/// </summary>
[TestClass]
public sealed class GetSolutionComponentsFakeXrmEasySweepTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private SweepOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-getsolutioncomponents-tests-" + Guid.NewGuid().ToString("N"));
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

        _service = new SweepOrgService(_ctx.GetOrganizationService());
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private GetSolutionComponentsTool NewTool() => new(_service);

    private static string Text(CallToolResult r) => r.GetText();

    private static GetSolutionComponentsResult Payload(CallToolResult r)
    {
        // Success() overwrites payload["summary"] with the one-line text — strip it
        // so the production model (Summary is a list) can deserialize cleanly.
        var node = System.Text.Json.Nodes.JsonNode.Parse(r.StructuredContent!.Value.GetRawText());
        if (node is System.Text.Json.Nodes.JsonObject obj)
            obj.Remove("summary");
        return node.Deserialize<GetSolutionComponentsResult>()!;
    }

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private (Entity Solution, Guid Id) SeedSolution(string uniqueName, string friendlyName, bool isVisible = true)
    {
        var id = Guid.NewGuid();
        var solution = new Entity("solution", id)
        {
            ["uniquename"] = uniqueName,
            ["friendlyname"] = friendlyName,
            ["version"] = "1.2.3.4",
            ["ismanaged"] = false,
            ["isvisible"] = isVisible,
            ["pub.friendlyname"] = new AliasedValue("publisher", "friendlyname", "Contoso Publishers")
        };
        _service.AddRow("solution", solution);
        return (solution, id);
    }

    private static Entity Component(Guid solutionId, int typeId, int? rootBehavior = null)
    {
        var id = Guid.NewGuid();
        var e = new Entity("solutioncomponent", id) { ["objectid"] = id, ["solutionid"] = solutionId };
        e["componenttype"] = new OptionSetValue(typeId);
        if (rootBehavior.HasValue)
            e["rootcomponentbehavior"] = new OptionSetValue(rootBehavior.Value);
        return e;
    }

    private void SeedRow(string entityName, Guid id, string pkAttribute, params (string attr, object value)[] attrs)
    {
        var e = new Entity(entityName, id);
        e[pkAttribute] = id;
        foreach (var (attr, value) in attrs)
            e[attr] = value;
        _service.AddRow(entityName, e);
    }

    private static SolutionComponentEntry Entry(GetSolutionComponentsResult payload, Guid id) =>
        payload.Components.Single(c => c.ObjectId == id.ToString());

    // ──────────────────────────────────────────────
    // solution resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SolutionNotFound_InvisibleSolutionsExcluded_ReturnsNotFound()
    {
        SeedSolution("Ghost_Core", "Ghost Core", isVisible: false);
        var result = NewTool().get_solution_components("Ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'Ghost' was not found by Display Name or Logical/Unique/Schema Name.");
    }

    [TestMethod]
    public void AmbiguousDisplayName_ReturnsCandidatesInStructuredDetails()
    {
        SeedSolution("DevKit_Core", "DevKit Core");
        SeedSolution("DevKit_Core_Util", "DevKit Core Util");

        var result = NewTool().get_solution_components("Core");

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "Multiple candidates match 'Core' during display name search.");
        StringAssert.Contains(text, "Re-call with a more specific solution_name value.");

        using var doc = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText());
        var matches = doc.RootElement.GetProperty("details").GetProperty("solutionMatches");
        Assert.AreEqual(2, matches.GetArrayLength());
        var uniqueNames = matches.EnumerateArray().Select(m => m.GetProperty("uniqueName").GetString()).ToList();
        CollectionAssert.AreEquivalent(new[] { "DevKit_Core", "DevKit_Core_Util" }, uniqueNames);
    }

    // ──────────────────────────────────────────────
    // full listing + name resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public void AllComponentTypes_AreListedAndNamesResolved()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");

        var components = new List<Entity>
        {
            Component(solutionId, 1, rootBehavior: 0),    // full entity (resolved via metadata In query)
            Component(solutionId, 1, rootBehavior: 2),    // regular entity (resolved via Equals query)
            Component(solutionId, 2),                     // attribute
            Component(solutionId, 3),                     // relationship
            Component(solutionId, 20),                    // role
            Component(solutionId, 24),                    // system form
            Component(solutionId, 26),                    // saved query
            Component(solutionId, 29),                    // workflow
            Component(solutionId, 31),                    // report
            Component(solutionId, 36),                    // template
            Component(solutionId, 61),                    // web resource (formatted label)
            Component(solutionId, 61),                    // web resource (displayname fallback)
            Component(solutionId, 62),                    // sitemap
            Component(solutionId, 80),                    // model driven app
            Component(solutionId, 90),                    // plugin type
            Component(solutionId, 91),                    // plugin assembly
            Component(solutionId, 92),                    // sdk message processing step
            Component(solutionId, 380),                   // environment variable definition
            Component(solutionId, 381),                   // environment variable value (schema name)
            Component(solutionId, 381),                   // environment variable value (displayname fallback)
            Component(solutionId, 381),                   // environment variable value (id fallback)
            Component(solutionId, 300),                   // canvas app
            Component(solutionId, 10036),                 // custom api (uniquename)
            Component(solutionId, 10036),                 // custom api (name fallback)
            Component(solutionId, 9999),                  // unknown type
            Component(solutionId, 50)                     // known type without resolver
        };

        var fullEntityId = components[0].GetAttributeValue<Guid>("objectid");
        var refEntityId = components[1].GetAttributeValue<Guid>("objectid");
        var attrId = components[2].GetAttributeValue<Guid>("objectid");
        var relId = components[3].GetAttributeValue<Guid>("objectid");
        var roleId = components[4].GetAttributeValue<Guid>("objectid");
        var formId = components[5].GetAttributeValue<Guid>("objectid");
        var viewId = components[6].GetAttributeValue<Guid>("objectid");
        var workflowId = components[7].GetAttributeValue<Guid>("objectid");
        var reportId = components[8].GetAttributeValue<Guid>("objectid");
        var templateId = components[9].GetAttributeValue<Guid>("objectid");
        var webResource1Id = components[10].GetAttributeValue<Guid>("objectid");
        var webResource2Id = components[11].GetAttributeValue<Guid>("objectid");
        var sitemapId = components[12].GetAttributeValue<Guid>("objectid");
        var appId = components[13].GetAttributeValue<Guid>("objectid");
        var pluginTypeId = components[14].GetAttributeValue<Guid>("objectid");
        var assemblyId = components[15].GetAttributeValue<Guid>("objectid");
        var stepId = components[16].GetAttributeValue<Guid>("objectid");
        var envDefId = components[17].GetAttributeValue<Guid>("objectid");
        var envVal1Id = components[18].GetAttributeValue<Guid>("objectid");
        var envVal2Id = components[19].GetAttributeValue<Guid>("objectid");
        var envVal3Id = components[20].GetAttributeValue<Guid>("objectid");
        var canvasId = components[21].GetAttributeValue<Guid>("objectid");
        var customApi1Id = components[22].GetAttributeValue<Guid>("objectid");
        var customApi2Id = components[23].GetAttributeValue<Guid>("objectid");
        var unknownId = components[24].GetAttributeValue<Guid>("objectid");
        var ribbonId = components[25].GetAttributeValue<Guid>("objectid");

        components[10].FormattedValues["componenttype"] = "WebResource Label";

        _service.AddRow("solutioncomponent", components.ToArray());

        _service.MetadataById[fullEntityId] = new EntityMetadata { LogicalName = "account", MetadataId = fullEntityId };
        _service.MetadataById[refEntityId] = new EntityMetadata { LogicalName = "contact", MetadataId = refEntityId };
        _service.AttributeOwners[attrId] = ("account", "name");
        _service.RelationshipOwners[relId] = ("new_account_contact", OneToMany: true);

        SeedRow("role", roleId, "roleid", ("name", "Salesperson"));
        SeedRow("systemform", formId, "formid", ("name", "Main Form"), ("objecttypecode", "account"));
        SeedRow("savedquery", viewId, "savedqueryid", ("name", "Active Accounts"), ("returnedtypecode", "account"));
        SeedRow("workflow", workflowId, "workflowid", ("name", "My Workflow"));
        SeedRow("report", reportId, "reportid", ("name", "My Report"));
        SeedRow("template", templateId, "templateid", ("title", "Welcome Email"));
        SeedRow("webresource", webResource1Id, "webresourceid", ("name", "devkit_/js/app.js"), ("displayname", "App JS"));
        SeedRow("webresource", webResource2Id, "webresourceid", ("name", ""), ("displayname", "Helper JS"));
        SeedRow("sitemap", sitemapId, "sitemapid", ("sitemapname", "devkit_sitemap"));
        SeedRow("appmodule", appId, "appmoduleid", ("name", "My App"), ("uniquename", "app_unique"));
        SeedRow("plugintype", pluginTypeId, "plugintypeid", ("typename", "DevKit.Plugins.Step1"));
        SeedRow("pluginassembly", assemblyId, "pluginassemblyid", ("name", "DevKit.Plugins"), ("version", "1.0.0.0"));
        SeedRow("sdkmessageprocessingstep", stepId, "sdkmessageprocessingstepid", ("name", "Step on Create"));
        SeedRow("environmentvariabledefinition", envDefId, "environmentvariabledefinitionid",
            ("schemaname", "devkit_env"), ("displayname", "Env Var"));
        SeedRow("environmentvariablevalue", envVal1Id, "environmentvariablevalueid",
            ("def.schemaname", new AliasedValue("environmentvariabledefinition", "schemaname", "devkit_env")),
            ("def.displayname", new AliasedValue("environmentvariabledefinition", "displayname", "Env Var")));
        SeedRow("environmentvariablevalue", envVal2Id, "environmentvariablevalueid",
            ("def.schemaname", new AliasedValue("environmentvariabledefinition", "schemaname", "")),
            ("def.displayname", new AliasedValue("environmentvariabledefinition", "displayname", "Env Display")));
        SeedRow("environmentvariablevalue", envVal3Id, "environmentvariablevalueid",
            ("def.schemaname", new AliasedValue("environmentvariabledefinition", "schemaname", "")),
            ("def.displayname", new AliasedValue("environmentvariabledefinition", "displayname", "")));
        SeedRow("canvasapp", canvasId, "canvasappid", ("name", "canvas_name"), ("displayname", "My Canvas"));
        SeedRow("customapi", customApi1Id, "customapiid", ("name", "DoThing"), ("uniquename", "devkit_DoThing"));
        SeedRow("customapi", customApi2Id, "customapiid", ("name", "DoFallback"), ("uniquename", ""));

        var result = NewTool().get_solution_components("DevKit_Core");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] DevKit Core (DevKit_Core): 26 components.");

        var payload = Payload(result);
        Assert.IsNotNull(payload.Solution);
        Assert.AreEqual("DevKit_Core", payload.Solution.UniqueName);
        Assert.AreEqual("DevKit Core", payload.Solution.DisplayName);
        Assert.AreEqual("1.2.3.4", payload.Solution.Version);
        Assert.AreEqual("Contoso Publishers", payload.Solution.PublisherName);
        Assert.AreEqual(false, payload.Solution.IsManaged);
        Assert.AreEqual(26, payload.TotalComponents);
        Assert.IsFalse(payload.IncludeActiveLayers);
        Assert.IsNull(payload.ActiveLayerCount);
        Assert.IsNotNull(payload.FullEntities);
        CollectionAssert.AreEquivalent(new[] { "account" }, payload.FullEntities);

        Assert.AreEqual("account", Entry(payload, fullEntityId).Name);
        Assert.IsTrue(Entry(payload, fullEntityId).IsFullEntity);
        Assert.AreEqual("contact", Entry(payload, refEntityId).Name);
        Assert.IsFalse(Entry(payload, refEntityId).IsFullEntity);
        Assert.AreEqual("account.name", Entry(payload, attrId).Name);
        Assert.AreEqual("new_account_contact", Entry(payload, relId).Name);
        Assert.AreEqual("Salesperson", Entry(payload, roleId).Name);
        Assert.AreEqual("account / Main Form", Entry(payload, formId).Name);
        Assert.AreEqual("account / Active Accounts", Entry(payload, viewId).Name);
        Assert.AreEqual("My Workflow", Entry(payload, workflowId).Name);
        Assert.AreEqual("My Report", Entry(payload, reportId).Name);
        Assert.AreEqual("Welcome Email", Entry(payload, templateId).Name);
        Assert.AreEqual("devkit_/js/app.js", Entry(payload, webResource1Id).Name);
        Assert.AreEqual("WebResource Label", Entry(payload, webResource1Id).Type);
        Assert.AreEqual("Helper JS", Entry(payload, webResource2Id).Name);
        Assert.AreEqual("devkit_sitemap", Entry(payload, sitemapId).Name);
        Assert.AreEqual("My App (app_unique)", Entry(payload, appId).Name);
        Assert.AreEqual("DevKit.Plugins.Step1", Entry(payload, pluginTypeId).Name);
        Assert.AreEqual("DevKit.Plugins v1.0.0.0", Entry(payload, assemblyId).Name);
        Assert.AreEqual("Step on Create", Entry(payload, stepId).Name);
        Assert.AreEqual("devkit_env (Env Var)", Entry(payload, envDefId).Name);
        Assert.AreEqual("devkit_env", Entry(payload, envVal1Id).Name);
        Assert.AreEqual("Env Display", Entry(payload, envVal2Id).Name);
        Assert.AreEqual(envVal3Id.ToString(), Entry(payload, envVal3Id).Name);
        Assert.AreEqual("My Canvas", Entry(payload, canvasId).Name);
        Assert.AreEqual("devkit_DoThing", Entry(payload, customApi1Id).Name);
        Assert.AreEqual("DoFallback", Entry(payload, customApi2Id).Name);
        Assert.AreEqual("Type_9999", Entry(payload, unknownId).Type);
        Assert.AreEqual("(unresolved)", Entry(payload, unknownId).Name);
        Assert.AreEqual("Ribbon Customization", Entry(payload, ribbonId).Type);
        Assert.AreEqual("(unresolved)", Entry(payload, ribbonId).Name);

        // summary list is overwritten by the one-line text in structured content —
        // verify the count via the text instead
        StringAssert.Contains(Text(result), "26 components.");
    }

    [TestMethod]
    public void ComponentPaging_MoreRecordsAcrossPages_UsesPagingCookie()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");
        _service.AddRow("solutioncomponent", Component(solutionId, 50), Component(solutionId, 50), Component(solutionId, 50));
        _service.ComponentPageSize = 2;

        var result = NewTool().get_solution_components("DevKit_Core");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "3 components.");
        Assert.AreEqual(2, _service.LastComponentPageNumber);
        Assert.AreEqual("cookie-1", _service.IncomingPagingCookie);

        var payload = Payload(result);
        Assert.AreEqual(3, payload.TotalComponents);
        Assert.AreEqual(3, payload.Components.Count);
    }

    [TestMethod]
    public void FullEntityMetadataLookupFails_NameStaysUnresolved()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");
        var comp = Component(solutionId, 1, rootBehavior: 0);
        _service.AddRow("solutioncomponent", comp);

        var result = NewTool().get_solution_components("DevKit_Core");

        Assert.IsFalse(result.IsError == true, Text(result));
        var payload = Payload(result);
        Assert.IsNull(payload.FullEntities);
        var entry = Entry(payload, comp.GetAttributeValue<Guid>("objectid"));
        Assert.AreEqual("(unresolved)", entry.Name);
        Assert.IsFalse(entry.IsFullEntity);
    }

    // ──────────────────────────────────────────────
    // active layers
    // ──────────────────────────────────────────────

    [TestMethod]
    public void IncludeActiveLayers_ReportsActiveFlagsAndCounts()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");
        var webResource = Component(solutionId, 61);
        var workflow = Component(solutionId, 29);
        var role = Component(solutionId, 20);
        _service.AddRow("solutioncomponent", webResource, workflow, role);
        _service.ActiveLayerIds.Add(webResource.GetAttributeValue<Guid>("objectid"));
        _service.InactiveLayerNames[workflow.GetAttributeValue<Guid>("objectid")] = "Base Solution";

        var result = NewTool().get_solution_components("DevKit_Core", include_active_layers: true);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "3 components, 1 with active layers.");

        var payload = Payload(result);
        Assert.IsTrue(payload.IncludeActiveLayers);
        Assert.AreEqual(1, payload.ActiveLayerCount);
        Assert.AreEqual(3, payload.TotalComponents);
        Assert.IsTrue(Entry(payload, webResource.GetAttributeValue<Guid>("objectid")).HasActiveLayer);
        Assert.IsFalse(Entry(payload, workflow.GetAttributeValue<Guid>("objectid")).HasActiveLayer);
        Assert.IsFalse(Entry(payload, role.GetAttributeValue<Guid>("objectid")).HasActiveLayer);
    }

    [TestMethod]
    public void ActiveLayersOnly_FiltersComponentsToActive()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");
        var webResource = Component(solutionId, 61);
        var workflow = Component(solutionId, 29);
        _service.AddRow("solutioncomponent", webResource, workflow);
        _service.ActiveLayerIds.Add(webResource.GetAttributeValue<Guid>("objectid"));

        var result = NewTool().get_solution_components("DevKit_Core", active_layers_only: true);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "1 active-layer components of 2 total.");

        var payload = Payload(result);
        Assert.IsTrue(payload.ActiveLayersOnly);
        Assert.IsTrue(payload.IncludeActiveLayers);
        Assert.AreEqual(2, payload.TotalComponents);
        Assert.AreEqual(1, payload.Components.Count);
        Assert.AreEqual(webResource.GetAttributeValue<Guid>("objectid").ToString(), payload.Components[0].ObjectId);
        Assert.IsTrue(payload.Components[0].HasActiveLayer);
    }

    [TestMethod]
    public void ActiveLayersFaultInExecuteMultiple_ReturnsFriendlyError()
    {
        var (_, solutionId) = SeedSolution("DevKit_Core", "DevKit Core");
        _service.AddRow("solutioncomponent", Component(solutionId, 61));
        _service.BulkFaultMessage = "component layer check exploded";

        var result = NewTool().get_solution_components("DevKit_Core", include_active_layers: true);

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "InvalidState");
        StringAssert.Contains(text, "component layer check exploded");
    }

    [TestMethod]
    public void EmptySolution_WithActiveLayers_ReturnsZeroCounts()
    {
        SeedSolution("DevKit_Core", "DevKit Core");

        var result = NewTool().get_solution_components("DevKit_Core", include_active_layers: true);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "0 components, 0 with active layers.");
        var payload = Payload(result);
        Assert.AreEqual(0, payload.TotalComponents);
        Assert.IsTrue(payload.IncludeActiveLayers);
        Assert.AreEqual(0, payload.ActiveLayerCount);
        Assert.AreEqual(0, payload.Components.Count);
    }

    // ──────────────────────────────────────────────
    // exception branch
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SolutionQueryThrows_ReturnsFriendlyError()
    {
        SeedSolution("DevKit_Core", "DevKit Core");
        _service.QueryException = new InvalidOperationException("solution query exploded");

        var result = NewTool().get_solution_components("DevKit_Core");

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "InvalidState");
        StringAssert.Contains(text, "solution query exploded");
    }

    // ──────────────────────────────────────────────
    // fake organization service
    // ──────────────────────────────────────────────

    private sealed class SweepOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public SweepOrgService(IOrganizationService inner) => _inner = inner;

        public readonly Dictionary<string, List<Entity>> Rows = new();
        public readonly Dictionary<Guid, EntityMetadata> MetadataById = new();
        public readonly Dictionary<Guid, (string Entity, string Attribute)> AttributeOwners = new();
        public readonly Dictionary<Guid, (string SchemaName, bool OneToMany)> RelationshipOwners = new();
        public readonly HashSet<Guid> ActiveLayerIds = new();
        public readonly Dictionary<Guid, string> InactiveLayerNames = new();
        public int ComponentPageSize;
        public int LastComponentPageNumber;
        public string IncomingPagingCookie;
        public string BulkFaultMessage;
        public Exception QueryException;

        public void AddRow(string entityName, params Entity[] entities)
        {
            if (!Rows.TryGetValue(entityName, out var list))
                Rows[entityName] = list = new List<Entity>();
            list.AddRange(entities);
        }

        public Guid Create(Entity entity) => _inner.Create(entity);

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity) => _inner.Update(entity);

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (QueryException != null)
                throw QueryException;
            if (query is QueryExpression qe)
                return RunQuery(qe);
            return _inner.RetrieveMultiple(query);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case RetrieveMetadataChangesRequest changes when changes.Query is EntityQueryExpression entityQuery:
                    return MetadataChangesResponse(entityQuery);
                case ExecuteMultipleRequest bulk:
                    return ExecuteMultipleResponse(bulk);
                default:
                    return _inner.Execute(request);
            }
        }

        private EntityCollection RunQuery(QueryExpression qe)
        {
            var matched = (Rows.TryGetValue(qe.EntityName, out var rows) ? rows : new List<Entity>())
                .Where(r => MatchesFilter(r, qe.Criteria))
                .ToList();

            if (qe.EntityName == "solutioncomponent" && ComponentPageSize > 0)
            {
                var pageNumber = qe.PageInfo?.PageNumber ?? 1;
                LastComponentPageNumber = pageNumber;
                if (pageNumber > 1)
                    IncomingPagingCookie = qe.PageInfo?.PagingCookie;
                var skip = (pageNumber - 1) * ComponentPageSize;
                var page = matched.Skip(skip).Take(ComponentPageSize).ToList();
                var hasMore = skip + page.Count < matched.Count;
                return new EntityCollection(page)
                {
                    MoreRecords = hasMore,
                    PagingCookie = hasMore ? $"cookie-{pageNumber}" : null
                };
            }

            return new EntityCollection(matched);
        }

        private static bool MatchesFilter(Entity row, FilterExpression filter)
        {
            if (filter == null) return true;
            var results = new List<bool>();
            foreach (var condition in filter.Conditions)
                results.Add(MatchesCondition(row, condition));
            foreach (var sub in filter.Filters)
                results.Add(MatchesFilter(row, sub));
            if (results.Count == 0) return true;
            var isOr = Equals(filter.GetType().GetProperty("FilterOperator")?.GetValue(filter), LogicalOperator.Or);
            return isOr ? results.Any(r => r) : results.All(r => r);
        }

        private static bool MatchesCondition(Entity row, ConditionExpression condition)
        {
            var expected = condition.Values.Count > 0 ? condition.Values[0] : null;
            switch (condition.Operator)
            {
                case ConditionOperator.In:
                {
                    var actual = RowValue(row, condition.AttributeName);
                    return condition.Values.OfType<Guid>().Any(v => actual is Guid g && g == v);
                }
                case ConditionOperator.Equal:
                    return Equals(RowValue(row, condition.AttributeName), expected);
                case ConditionOperator.Like:
                {
                    var term = expected as string;
                    if (term == null) return false;
                    term = term.Trim('%').Replace("[_]", "_").Replace("[%]", "%");
                    var actual = RowValue(row, condition.AttributeName) as string;
                    return actual != null && actual.Contains(term, StringComparison.OrdinalIgnoreCase);
                }
                default:
                    return true;
            }
        }

        private static object RowValue(Entity row, string attribute) =>
            row.Contains(attribute) ? row[attribute] : row.Id;

        private static OrganizationResponse MetadataResponse(EntityMetadataCollection collection)
        {
            var response = new RetrieveMetadataChangesResponse();
            response.Results["EntityMetadata"] = collection;
            return response;
        }

        private OrganizationResponse MetadataChangesResponse(EntityQueryExpression query)
        {
            if (query.AttributeQuery != null)
            {
                var requested = ExtractIds(query.AttributeQuery.Criteria)
                    .Where(AttributeOwners.ContainsKey)
                    .Distinct()
                    .ToList();
                var collection = new EntityMetadataCollection();
                foreach (var group in requested.Select(id => AttributeOwners[id].Entity).Distinct())
                {
                    var meta = new EntityMetadata { LogicalName = group };
                    Set(meta, "Attributes", requested
                        .Where(id => AttributeOwners[id].Entity == group)
                        .Select(id => new AttributeMetadata
                        {
                            LogicalName = AttributeOwners[id].Attribute,
                            MetadataId = id
                        })
                        .Cast<AttributeMetadata>()
                        .ToArray());
                    collection.Add(meta);
                }
                return MetadataResponse(collection);
            }

            if (query.RelationshipQuery != null)
            {
                var requested = ExtractIds(query.RelationshipQuery.Criteria)
                    .Where(RelationshipOwners.ContainsKey)
                    .Distinct()
                    .ToList();
                var meta = new EntityMetadata { LogicalName = "synthetic" };
                Set(meta, "OneToManyRelationships", requested
                    .Where(id => RelationshipOwners[id].OneToMany)
                    .Select(id => new OneToManyRelationshipMetadata
                    {
                        SchemaName = RelationshipOwners[id].SchemaName,
                        MetadataId = id
                    })
                    .ToArray());
                Set(meta, "ManyToManyRelationships", requested
                    .Where(id => !RelationshipOwners[id].OneToMany)
                    .Select(id => new ManyToManyRelationshipMetadata
                    {
                        SchemaName = RelationshipOwners[id].SchemaName,
                        MetadataId = id
                    })
                    .ToArray());
                var collection = new EntityMetadataCollection { meta };
                return MetadataResponse(collection);
            }

            var entities = new EntityMetadataCollection();
            foreach (var id in ExtractIds(query.Criteria).Distinct())
                if (MetadataById.TryGetValue(id, out var metadata))
                    entities.Add(metadata);
            return MetadataResponse(entities);
        }

        private static IEnumerable<Guid> ExtractIds(MetadataFilterExpression filter)
        {
            if (filter?.Conditions == null)
                yield break;
            foreach (var condition in filter.Conditions)
            {
                if (!string.Equals(condition.PropertyName, "MetadataId", StringComparison.OrdinalIgnoreCase))
                    continue;
                switch (condition.Value)
                {
                    case Guid id:
                        yield return id;
                        break;
                    case System.Collections.IEnumerable list when list is not string:
                        foreach (var item in list)
                            if (item is Guid g)
                                yield return g;
                        break;
                }
            }
        }

        private OrganizationResponse ExecuteMultipleResponse(ExecuteMultipleRequest bulk)
        {
            var responses = new ExecuteMultipleResponseItemCollection();
            for (var i = 0; i < bulk.Requests.Count; i++)
            {
                var item = new ExecuteMultipleResponseItem { RequestIndex = i };
                if (BulkFaultMessage != null && i == 0)
                {
                    item.Fault = new OrganizationServiceFault { Message = BulkFaultMessage };
                }
                else
                {
                    var entityCollection = new EntityCollection();
                    var objectId = ExtractComponentLayerId(bulk.Requests[i]);
                    if (objectId.HasValue)
                    {
                        if (ActiveLayerIds.Contains(objectId.Value))
                            entityCollection.Entities.Add(new Entity("msdyn_componentlayer") { ["msdyn_solutionname"] = "Active" });
                        else if (InactiveLayerNames.TryGetValue(objectId.Value, out var layerName))
                            entityCollection.Entities.Add(new Entity("msdyn_componentlayer") { ["msdyn_solutionname"] = layerName });
                    }
                    var retrieve = new RetrieveMultipleResponse();
                    retrieve.Results["EntityCollection"] = entityCollection;
                    item.Response = retrieve;
                }
                responses.Add(item);
            }
            var response = new ExecuteMultipleResponse();
            response.Results["Responses"] = responses;
            return response;
        }

        private static Guid? ExtractComponentLayerId(OrganizationRequest request)
        {
            if (request is not RetrieveMultipleRequest retrieve || retrieve.Query is not QueryExpression qe)
                return null;
            foreach (var condition in qe.Criteria.Conditions)
            {
                if (string.Equals(condition.AttributeName, "msdyn_componentid", StringComparison.OrdinalIgnoreCase) &&
                    condition.Values.Count > 0 &&
                    condition.Values[0] is Guid id)
                    return id;
            }
            return null;
        }
    }
}
