using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
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
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// Rare-branch coverage for ManageAppTool: add/remove component validation gates,
/// component-update failure catch, undo snapshot guards, and entity-metadata
/// resolution fallbacks driven through scripted IOrganizationService responses.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageAppRareBranchWave3CoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private Guid _appId;
    private Guid _appModuleIdUnique;
    private Guid _viewId;
    private Guid _dashboardId;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-app-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
        _appId = Guid.NewGuid();
        _appModuleIdUnique = Guid.NewGuid();
        _viewId = Guid.NewGuid();
        _dashboardId = Guid.NewGuid();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public async Task AddComponents_Validation_Branches()
    {
        var tool = NewTool(script => { });
        var missingComponents = await tool.manage_app(null!, action: "add_components", app: "Sales");
        StringAssert.Contains(Text(missingComponents), "At least one component is required");

        var whitespaceComponent = await tool.manage_app(null!, action: "add_components", app: "Sales",
            dashboard_ids: new[] { "  " });
        StringAssert.Contains(Text(whitespaceComponent), "Component selectors must be non-empty");

        var viewWithoutEntity = await tool.manage_app(null!, action: "add_components", app: "Sales",
            view_ids: new[] { _viewId.ToString() });
        StringAssert.Contains(Text(viewWithoutEntity), "entity_name is required");

        var unknownApp = await tool.manage_app(null!, action: "remove_components", app: "NoSuchApp",
            dashboard_ids: new[] { "My Dashboard" });
        Assert.IsTrue(unknownApp.IsError);

        var unknownEntity = await tool.manage_app(null!, action: "add_components", app: "Sales",
            entity_name: "NoSuchEntity", view_ids: new[] { _viewId.ToString() });
        StringAssert.Contains(Text(unknownEntity), "Use inspect_metadata(resource='tables') to find the table");

        var noMetadataId = NewTool(script => script.MetadataIdNull = true);
        var missingMetadataId = await noMetadataId.manage_app(null!, action: "add_components", app: "Sales", entity_name: "account");
        Assert.IsTrue(missingMetadataId.IsError);
        StringAssert.Contains(Text(missingMetadataId), "Entity metadata id not found for 'account'.");
    }

    [TestMethod]
    public async Task AddComponents_ServiceThrow_CatchesComponentUpdateFailure()
    {
        var tool = NewTool(script => script.ComponentError = new InvalidOperationException("fake add fail"));
        var result = await tool.manage_app(null!, action: "add_components", app: "Sales",
            dashboard_ids: new[] { "My Dashboard" });
        StringAssert.Contains(Text(result), "Component update for app 'Sales' failed");
        StringAssert.Contains(Text(result), "fake add fail");
    }

    [TestMethod]
    public async Task Undo_InvalidComponentScope_Backup()
    {
        var path = WriteBackup(new
        {
            kind = "manage_app.snapshot",
            appModuleId = _appId.ToString(),
            componentScope = new[] { new { componentType = 999, objectId = "not-a-guid" } }
        });
        var tool = NewTool(script => { });
        var result = await tool.manage_app(null!, action: "undo", app: "Sales", operations: path);
        StringAssert.Contains(Text(result), "Backup contains an invalid app component scope");
    }

    [TestMethod]
    public async Task Undo_SnapshotWithoutScope_NoSiteMap()
    {
        var path = WriteBackup(new { kind = "manage_app.snapshot", appModuleId = _appId.ToString() });
        var tool = NewTool(script => { });
        var result = await tool.manage_app(null!, action: "undo", app: "Sales", operations: path);
        StringAssert.Contains(Text(result), "has no sitemap component");
    }

    [TestMethod]
    public void EntityMetadata_Resolution_Branches()
    {
        var throwing = NewTool(script => script.MetadataNull = true);
        var resolveLogicalName = typeof(ManageAppTool).GetMethod("ResolveEntityLogicalName", BindingFlags.NonPublic | BindingFlags.Instance)!;
        Assert.ThrowsExactly<TargetInvocationException>(() =>
            resolveLogicalName.Invoke(throwing, new object[] { Guid.NewGuid() }));

        var resolveMeta = typeof(ManageAppTool).GetMethod("ResolveEntityMetadata", BindingFlags.NonPublic | BindingFlags.Instance)!;
        Assert.ThrowsExactly<TargetInvocationException>(() =>
            resolveMeta.Invoke(throwing, new object[] { "account" }));
    }

    // ──────────────────────────────────────────────
    // fixtures
    // ──────────────────────────────────────────────

    private ManageAppTool NewTool(Action<ScriptedOrgService> configure)
    {
        var ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        var service = ctx.GetOrganizationService();
        service.Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        service.Create(new Entity("appmodule", _appId)
        {
            ["name"] = "Sales",
            ["uniquename"] = "sales",
            ["appmoduleidunique"] = _appModuleIdUnique
        });
        service.Create(new Entity("savedquery", _viewId) { ["name"] = "Active Accounts" });
        service.Create(new Entity("systemform", _dashboardId) { ["name"] = "My Dashboard", ["type"] = new OptionSetValue(0) });

        var script = new ScriptedOrgService(service,
        [
            new EntityMetadata { LogicalName = "account", SchemaName = "Account", MetadataId = Guid.NewGuid(), DisplayName = new Label("Account", 1033) },
            new EntityMetadata { LogicalName = "contact", SchemaName = "Contact", MetadataId = Guid.NewGuid(), DisplayName = new Label("Contact", 1033) }
        ]);
        configure(script);
        return new ManageAppTool(script, new McpDryRunOptions(), new McpExecutionContext(false));
    }

    private string WriteBackup(object snapshot)
    {
        var path = Path.Combine(_tempDir, "backup-" + Guid.NewGuid().ToString("N") + ".app.json");
        File.WriteAllText(path, JsonSerializer.Serialize(snapshot));
        return path;
    }

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private sealed class ScriptedOrgService(IOrganizationService inner, EntityMetadata[] entities) : IOrganizationService
    {
        public Exception? ComponentError { get; set; }
        public bool MetadataIdNull { get; set; }
        public bool MetadataNull { get; set; }

        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => inner.Update(entity);
        public void Delete(string entityName, Guid id) => inner.Delete(entityName, id);
        public EntityCollection RetrieveMultiple(QueryBase query) => inner.RetrieveMultiple(query);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request.RequestName)
            {
                case "RetrieveAllEntities":
                    return new RetrieveAllEntitiesResponse
                    {
                        Results = { ["EntityMetadata"] = MetadataIdNull ? new[] { new EntityMetadata { LogicalName = "account" } } : entities }
                    };
                case "RetrieveEntity" when MetadataNull:
                    return new RetrieveEntityResponse { Results = { ["EntityMetadata"] = null! } };
                case "AddAppComponents" or "RemoveAppComponents" when ComponentError != null:
                    throw ComponentError;
                default:
                    return inner.Execute(request);
            }
        }
    }
}
