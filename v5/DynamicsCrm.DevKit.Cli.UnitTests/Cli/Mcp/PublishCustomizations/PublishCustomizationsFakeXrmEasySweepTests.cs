using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
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
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.PublishCustomizations;

/// <summary>
/// FakeXrmEasy-driven sweep coverage for PublishCustomizationsTool: System Administrator
/// role gate (with/without roles), every target-resolution branch (entities by display and
/// logical name, appmodules by GUID/display-name/ghost-row, dashboards GUID validation,
/// webresources by GUID/braced GUID/logical name), dry-run previews for all target kinds,
/// PublishAll async execution, targeted PublishXml success (incl. the 20s propagation wait),
/// the Dataverse-rejected publish failure branch and the top-level exception branch.
/// All Dataverse answers are hand-built in a decorator org service.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class PublishCustomizationsFakeXrmEasySweepTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private SweepOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-publishcustomizations-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new SweepOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeEntityMetadata("account", "Account"));
        _service.Entities.Add(MakeEntityMetadata("contact", "Contact"));
        _service.Roles.Add(new Entity("role", Guid.NewGuid()) { ["name"] = "System Administrator" });
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private PublishCustomizationsTool NewTool(bool dryRun) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static string Text(CallToolResult r) => r.GetText();

    private static PublishResult Payload(CallToolResult r) =>
        JsonSerializer.Deserialize<PublishResult>(r.StructuredContent!.Value.GetRawText())!;

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeEntityMetadata(string logicalName, string displayName)
    {
        var meta = new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = logicalName,
            DisplayName = new Label(displayName, 1033) { UserLocalizedLabel = new LocalizedLabel(displayName, 1033) }
        };
        return meta;
    }

    private Guid SeedAppModule(string name, string uniqueName, Guid? id = null)
    {
        id ??= new Guid("44444444-4444-4444-4444-444444444444");
        _service.AppModules.Add(new Entity("appmodule", id.Value)
        {
            ["appmoduleid"] = id,
            ["name"] = name,
            ["uniquename"] = uniqueName
        });
        return id.Value;
    }

    private void SeedWebResource(string name)
    {
        var id = new Guid("55555555-5555-5555-5555-555555555555");
        _service.WebResources.Add(new Entity("webresource", id)
        {
            ["webresourceid"] = id,
            ["name"] = name
        });
    }

    // ──────────────────────────────────────────────
    // role gate + exceptions
    // ──────────────────────────────────────────────

    [TestMethod]
    public void NonAdminWithRoles_GateErrorListsCurrentRoles()
    {
        _service.Roles.Clear();
        _service.Roles.Add(new Entity("role", Guid.NewGuid()) { ["name"] = "Sales Manager" });
        _service.Roles.Add(new Entity("role", Guid.NewGuid()) { ["name"] = "App Opener" });

        var result = NewTool(dryRun: false).publish_customizations(entities: "account");

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "requires the 'System Administrator' role");
        StringAssert.Contains(text, "Sales Manager, App Opener");
        StringAssert.Contains(text, "Ask a System Administrator to assign");
        Assert.AreEqual(0, _service.PublishXmlCount);
    }

    [TestMethod]
    public void ExecuteThrows_ReturnsFriendlyError()
    {
        _service.ExecuteException = new InvalidOperationException("whoami boom");

        var result = NewTool(dryRun: false).publish_customizations();

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "InvalidState");
        StringAssert.Contains(text, "whoami boom");
    }

    // ──────────────────────────────────────────────
    // dry-run previews
    // ──────────────────────────────────────────────

    [TestMethod]
    public void DryRun_NoTargets_PublishAllPreviewNotExecuted()
    {
        var result = NewTool(dryRun: true).publish_customizations();

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun] Would PUBLISH ALL customizations.");

        var payload = Payload(result);
        Assert.AreEqual("all_async", payload.Mode);
        Assert.AreEqual("not_executed", payload.Status);
        Assert.IsNull(payload.EntityCount);
        Assert.AreEqual(0, _service.PublishXmlCount);
        Assert.AreEqual(0, _service.PublishAllCount);
    }

    [TestMethod]
    public void DryRun_AllTargetKinds_BuildsSpecificPreviewAndDoesNotPublish()
    {
        SeedAppModule("My App", "app_unique");
        SeedAppModule("My App Two", "app_unique_two", new Guid("33333333-3333-3333-3333-333333333333"));
        SeedWebResource("devkit_/js/app.js");

        var result = NewTool(dryRun: true).publish_customizations(
            entities: "Account, contact, contact",
            appmodules: "33333333-3333-3333-3333-333333333333, My App",
            optionset_names: "new_priority",
            include_ribbons: true,
            dashboards: "{22222222-2222-2222-2222-222222222222}",
            webresources: "devkit_/js/app.js",
            include_sitemap: true);

        Assert.IsFalse(result.IsError == true, Text(result));
        var text = Text(result);
        StringAssert.Contains(text, "[DryRun] Would PUBLISH 2 entities: account, contact");
        StringAssert.Contains(text, "2 appmodules: 33333333-3333-3333-3333-333333333333, 44444444-4444-4444-4444-444444444444");
        StringAssert.Contains(text, "optionsets: new_priority");
        StringAssert.Contains(text, "application ribbon");
        StringAssert.Contains(text, "1 dashboard(s)");
        StringAssert.Contains(text, "1 web resource(s)");
        StringAssert.Contains(text, "sitemap");

        var payload = Payload(result);
        Assert.AreEqual("specific", payload.Mode);
        Assert.AreEqual("not_executed", payload.Status);
        Assert.AreEqual(2, payload.EntityCount);
        CollectionAssert.AreEquivalent(new[] { "account", "contact" }, payload.Entities);
        Assert.AreEqual(2, payload.AppModuleCount);
        Assert.IsTrue(payload.IncludeSiteMap);
        Assert.IsFalse(payload.IncludeGlobalOptionSets, "dry-run keeps the raw include_global_optionset flag");
        Assert.AreEqual(0, _service.PublishXmlCount);
        Assert.AreEqual(0, _service.PublishAllCount);
    }

    [TestMethod]
    public void DryRun_GlobalOptionSetOnly_UsesAllOptionSetsLabel()
    {
        var result = NewTool(dryRun: true).publish_customizations(include_global_optionset: true);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun] Would PUBLISH all global option sets.");

        var payload = Payload(result);
        Assert.AreEqual("specific", payload.Mode);
        Assert.IsTrue(payload.IncludeGlobalOptionSets);
    }

    // ──────────────────────────────────────────────
    // resolution/validation errors
    // ──────────────────────────────────────────────

    [TestMethod]
    public void DryRun_UnresolvableEntity_ReturnsError()
    {
        var result = NewTool(dryRun: true).publish_customizations(entities: "zzz");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entities 'zzz': could not be resolved.");
        StringAssert.Contains(Text(result), "Use get_tables to list entities before calling publish_customizations.");
    }

    [TestMethod]
    public void DryRun_CommaOnlyEntities_ReturnsParseError()
    {
        var result = NewTool(dryRun: true).publish_customizations(entities: ",,,");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No valid entity names found after parsing the 'entities' parameter.");
    }

    [TestMethod]
    public void DryRun_AppModules_ByGuidAndDisplayName_ResolvesBoth()
    {
        SeedAppModule("My App", "app_unique");

        var result = NewTool(dryRun: true).publish_customizations(
            appmodules: "33333333-3333-3333-3333-333333333333, My App");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "2 appmodules");

        var payload = Payload(result);
        Assert.AreEqual(2, payload.AppModuleCount);
        Assert.IsNull(payload.Entities);
        Assert.AreEqual(0, payload.EntityCount);
    }

    [TestMethod]
    public void DryRun_UnresolvableAppModule_ReturnsError()
    {
        var result = NewTool(dryRun: true).publish_customizations(appmodules: "Nope");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "appmodules 'Nope': could not be resolved.");
        StringAssert.Contains(Text(result), "Use manage_app(action='list') to discover valid appmodule identifiers.");
    }

    [TestMethod]
    public void DryRun_CommaOnlyAppModules_ReturnsParseError()
    {
        var result = NewTool(dryRun: true).publish_customizations(appmodules: ",");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No valid appmodule values found after parsing the 'appmodules' parameter.");
    }

    [TestMethod]
    public void DryRun_AppModuleRowWithoutId_ReturnsResolutionError()
    {
        _service.AppModules.Add(new Entity("appmodule") { ["name"] = "Ghost App" });

        var result = NewTool(dryRun: true).publish_customizations(appmodules: "Ghost App");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "appmodules 'Ghost App': could not be resolved.");
    }

    [TestMethod]
    public void Dashboards_InvalidGuid_ReturnsError()
    {
        var result = NewTool(dryRun: true).publish_customizations(dashboards: "abc");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "dashboards 'abc': contains a value that is not a valid GUID.");
    }

    [TestMethod]
    public void WebResources_UnknownLogicalName_ReturnsError()
    {
        var result = NewTool(dryRun: true).publish_customizations(webresources: "nope.js");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "webresources 'nope.js': no web resource found with that name.");
        StringAssert.Contains(Text(result), "Use manage_webresource(action='list') to find valid names.");
    }

    [TestMethod]
    public void WebResources_GuidBracedAndLogicalName_AllResolve()
    {
        SeedWebResource("devkit_/js/app.js");

        var result = NewTool(dryRun: true).publish_customizations(webresources:
            "{11111111-1111-1111-1111-111111111111}, devkit_/js/app.js, 22222222-2222-2222-2222-222222222222");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "3 web resource(s)");

        var payload = Payload(result);
        Assert.AreEqual("specific", payload.Mode);
        Assert.AreEqual(0, _service.PublishXmlCount);
    }

    // ──────────────────────────────────────────────
    // real publishes
    // ──────────────────────────────────────────────

    [TestMethod]
    public void PublishAll_ExecutesAsyncPublishJob()
    {
        var result = NewTool(dryRun: false).publish_customizations();

        Assert.IsFalse(result.IsError == true, Text(result));
        var text = Text(result);
        StringAssert.Contains(text, "Published ALL customizations asynchronously");
        StringAssert.Contains(text, "99999999-9999-9999-9999-999999999999");
        StringAssert.Contains(text, "Use get_system_jobs(record_id=\"99999999-9999-9999-9999-999999999999\")");

        var payload = Payload(result);
        Assert.AreEqual("all_async", payload.Mode);
        Assert.AreEqual("in_progress", payload.Status);
        Assert.AreEqual("99999999-9999-9999-9999-999999999999", payload.AsyncOperationId);
        Assert.AreEqual(1, _service.PublishAllCount);
        Assert.AreEqual(0, _service.PublishXmlCount);
    }

    [TestMethod]
    public void TargetedPublish_WhenDataverseRejects_ReturnsFailedResult()
    {
        _service.PublishFailureMessage = "publish rejected by server";

        var result = NewTool(dryRun: false).publish_customizations(entities: "Account");

        Assert.IsTrue(result.IsError == true);
        var text = Text(result);
        StringAssert.Contains(text, "Publish failed for 1 entity: account");
        StringAssert.Contains(text, "Dataverse rejected the publish batch");

        using var doc = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText());
        Assert.AreEqual("failed", doc.RootElement.GetProperty("details").GetProperty("status").GetString());
        Assert.AreEqual(1, _service.PublishXmlCount);
    }

    [TestMethod]
    public void TargetedPublish_Success_PublishesXml()
    {
        // NOTE: PublishHelper.PublishTargeted waits 20s after a successful publish
        // (MetadataOperationWaitHelper propagation delay hardcoded by the tool).
        var result = NewTool(dryRun: false).publish_customizations(entities: "Account");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] Published 1 entity: account");

        var payload = Payload(result);
        Assert.AreEqual("specific", payload.Mode);
        Assert.AreEqual("published", payload.Status);
        Assert.AreEqual(1, payload.EntityCount);
        CollectionAssert.AreEquivalent(new[] { "account" }, payload.Entities);
        Assert.AreEqual(1, _service.PublishXmlCount);
        StringAssert.Contains(_service.LastParameterXml, "<importexportxml><entities><entity>account</entity></entities>");
        StringAssert.Contains(_service.LastParameterXml, "<optionsets />");
        StringAssert.Contains(_service.LastParameterXml, "<sitemaps />");
    }

    // ──────────────────────────────────────────────
    // fake organization service
    // ──────────────────────────────────────────────

    private sealed class SweepOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public SweepOrgService(IOrganizationService inner) => _inner = inner;

        public readonly List<EntityMetadata> Entities = new();
        public readonly List<Entity> Roles = new();
        public readonly List<Entity> AppModules = new();
        public readonly List<Entity> WebResources = new();
        public int PublishXmlCount;
        public int PublishAllCount;
        public string LastParameterXml;
        public string PublishFailureMessage;
        public Exception ExecuteException;
        public Guid AsyncJobId { get; } = new("99999999-9999-9999-9999-999999999999");

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
            switch (query)
            {
                case FetchExpression fetch when fetch.Query.Contains("name='role'"):
                    return new EntityCollection(Roles.ToList());
                case QueryExpression qe:
                    return RunQuery(qe);
                default:
                    return _inner.RetrieveMultiple(query);
            }
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (ExecuteException != null)
                throw ExecuteException;

            switch (request)
            {
                case WhoAmIRequest:
                {
                    var who = new WhoAmIResponse();
                    who.Results["UserId"] = Guid.NewGuid();
                    who.Results["OrganizationId"] = Guid.NewGuid();
                    who.Results["BusinessUnitId"] = Guid.NewGuid();
                    return who;
                }
                case PublishXmlRequest publishXml:
                {
                    PublishXmlCount++;
                    LastParameterXml = publishXml.ParameterXml;
                    if (PublishFailureMessage != null)
                        throw new InvalidOperationException(PublishFailureMessage);
                    return new OrganizationResponse();
                }
                case PublishAllXmlAsyncRequest:
                {
                    PublishAllCount++;
                    var published = new PublishAllXmlAsyncResponse();
                    published.Results["AsyncOperationId"] = AsyncJobId;
                    return published;
                }
                case RetrieveAllEntitiesRequest:
                {
                    var all = new RetrieveAllEntitiesResponse();
                    all.Results["EntityMetadata"] = Entities.ToArray();
                    return all;
                }
                default:
                    return _inner.Execute(request);
            }
        }

        private EntityCollection RunQuery(QueryExpression qe)
        {
            var rows = qe.EntityName switch
            {
                "appmodule" => AppModules,
                "webresource" => WebResources,
                _ => null
            };
            if (rows == null)
                return new EntityCollection();
            var matched = rows.Where(r => MatchesFilter(r, qe.Criteria)).ToList();
            return new EntityCollection(matched);
        }


        private static bool IsOrFilter(FilterExpression filter)
        {
            var opValue = filter.GetType().GetProperty("FilterOperator")?.GetValue(filter)
                          ?? filter.GetType().GetProperty("LogicalOperator")?.GetValue(filter);
            return Equals(opValue, LogicalOperator.Or);
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
            return IsOrFilter(filter)
                ? results.Any(r => r)
                : results.All(r => r);
        }

        private static bool MatchesCondition(Entity row, ConditionExpression condition)
        {
            var expected = condition.Values.Count > 0 ? condition.Values[0] : null;
            switch (condition.Operator)
            {
                case ConditionOperator.Equal:
                    return Equals(RowValue(row, condition.AttributeName), expected);
                case ConditionOperator.Like:
                {
                    var term = expected as string;
                    if (term == null) return false;
                    term = term.Trim('%');
                    var actual = RowValue(row, condition.AttributeName) as string;
                    return actual != null && actual.Contains(term, StringComparison.OrdinalIgnoreCase);
                }
                default:
                    return true;
            }
        }

        private static object RowValue(Entity row, string attribute) =>
            row.Contains(attribute) ? row[attribute] : row.Id;
    }
}
