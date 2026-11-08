using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// manage_app rare-branch coverage on a FakeSdkClient: create solution/icon
/// resolution errors and unique-name normalization, update icon/description
/// branches, navigation operation failures and dry-run preview, undo backup
/// validation (XSD failures, kind/appId mismatches), unpublished app merge,
/// sitemap fallback resolution, and the full create/publish/validate flow.
/// </summary>
[TestClass]
public sealed class ManageAppErrorPathCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _appModules = new();
    private readonly List<Entity> _unpublishedApps = new();
    private readonly List<Entity> _appComponents = new();
    private readonly List<Entity> _sitemaps = new();
    private readonly List<Entity> _solutions = new();
    private readonly List<Entity> _webResources = new();
    private List<EntityMetadata> _entityMetadata = new();
    private bool _failRetrieveEntity;
    private OrganizationResponse? _validateAppResponse;
    private List<Entity> _unpublishedForRetrieve = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _appModules.Clear();
        _unpublishedApps.Clear();
        _appComponents.Clear();
        _sitemaps.Clear();
        _solutions.Clear();
        _webResources.Clear();
        _entityMetadata.Clear();
        _failRetrieveEntity = false;
        _validateAppResponse = null;
        _unpublishedForRetrieve = _unpublishedApps;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieve = (_, _, _) => new Entity("publisher", Guid.NewGuid())
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request)
    {
        switch (request)
        {
            case RetrieveUnpublishedMultipleRequest:
                return new RetrieveUnpublishedMultipleResponse
                {
                    Results = { ["EntityCollection"] = new EntityCollection(_unpublishedForRetrieve) }
                };
            case RetrieveAllEntitiesRequest:
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entityMetadata.ToArray() }
                };
            case RetrieveEntityRequest when _failRetrieveEntity:
                throw new InvalidOperationException("entity metadata unavailable");
            case RetrieveEntityRequest:
                var match = _entityMetadata.FirstOrDefault(m =>
                    m.LogicalName == ((RetrieveEntityRequest)request).LogicalName) ?? _entityMetadata.First();
                return new RetrieveEntityResponse { Results = { ["EntityMetadata"] = match } };
            case AddAppComponentsRequest:
            case AddSolutionComponentRequest:
            case PublishXmlRequest:
                return new OrganizationResponse();
            default:
                if (request.RequestName == "ValidateApp")
                    return _validateAppResponse ?? new OrganizationResponse();
                return new OrganizationResponse();
        }
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "appmodule" => new EntityCollection(_appModules),
                "appmodulecomponent" => new EntityCollection(_appComponents),
                "sitemap" => new EntityCollection(_sitemaps),
                "solution" => new EntityCollection(_solutions),
                "webresource" => new EntityCollection(_webResources),
                _ => new EntityCollection()
            };
        }
        if (query is FetchExpression fe && fe.Query.Contains("organization"))
        {
            return new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = 1033 } });
        }
        return new EntityCollection();
    }

    private ManageAppTool NewDryRunTool() =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext());

    private ManageAppTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    private static Entity MakeApp(string name, string uniqueName, Guid? appModuleIdUnique = null)
    {
        var app = new Entity("appmodule", Guid.NewGuid())
        {
            ["name"] = name,
            ["description"] = "demo"
        };
        if (uniqueName != null) app["uniquename"] = uniqueName;
        if (appModuleIdUnique.HasValue) app["appmoduleidunique"] = appModuleIdUnique.Value;
        return app;
    }

    /// <summary>Account metadata with a MetadataId — BuildEntityAppComponents requires it.</summary>
    private static EntityMetadata AccountMetadataWithId()
    {
        var meta = TestMetadata.Entity("account");
        TestMetadata.Set(meta, nameof(MetadataBase.MetadataId), Guid.NewGuid());
        return meta;
    }

    private void SeedResolvableApp(Guid appModuleIdUnique, string sitemapXml = null)
    {
        var app = MakeApp("Test App", "dev_test_app", appModuleIdUnique);
        _appModules.Add(app);
        if (sitemapXml != null)
        {
            var siteMapId = Guid.NewGuid();
            _appComponents.Add(new Entity("appmodulecomponent", Guid.NewGuid())
            {
                ["componenttype"] = new OptionSetValue(62),
                ["objectid"] = siteMapId
            });
            _sitemaps.Add(new Entity("sitemap", siteMapId) { ["sitemapxml"] = sitemapXml });
        }
        return;
    }

    private static string ValidSiteMapXml =>
        """<SiteMap><Area Id="area_default" ShowGroups="true"><Titles><Title LCID="1033" Title="Workspace"/></Titles><Group Id="group_default" IsProfile="false"><Titles><Title LCID="1033" Title="Default"/></Titles><SubArea Id="sa_account" Entity="account"><Titles><Title LCID="1033" Title="Accounts"/></Titles></SubArea></Group></Area></SiteMap>""";

    private static string MinimalSiteMapXml =>
        """<SiteMap><Area Id="area_default"><Group Id="group_default"><Titles><Title LCID="1033" Title="Default"/></Titles></Group></Area></SiteMap>""";

    // ── create ──────────────────────────────────────────────────────────────

    private void SeedSolution(string friendlyName, string uniqueName)
    {
        _solutions.Add(new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = friendlyName,
            ["uniquename"] = uniqueName,
            ["publisherid"] = new EntityReference("publisher", Guid.NewGuid())
        });
    }

    [TestMethod]
    public async Task Create_AmbiguousSolution_ReturnsSolutionMatches()
    {
        SeedSolution("My Solution One", "all_one");
        SeedSolution("My Solution Two", "all_two");

        var result = await NewTool().manage_app(null!, action: "create", solution_name: "My Sol", display_name: "Demo");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'My Sol'");
        StringAssert.Contains(result.GetText(), "Re-call with a more specific solution_name value.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("blocked_solution_resolution", json.GetProperty("details").GetProperty("status").GetString());
        Assert.AreEqual(2, json.GetProperty("details").GetProperty("solutionMatches").GetArrayLength());
    }

    [TestMethod]
    public async Task Create_UniqueNameWithoutPrefix_IsNormalizedAndTruncated()
    {
        SeedSolution("My Solution", "all_my_solution");
        var longName = new string('x', 30) + " App Display Name";

        var result = await NewDryRunTool().manage_app(null!, action: "create",
            solution_name: "My Solution", display_name: "Demo", unique_name: longName);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would create app 'Demo'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        var uniqueName = json.GetProperty("uniqueName").GetString()!;
        Assert.HasCount(40, uniqueName.ToCharArray());
        Assert.IsTrue(uniqueName.StartsWith("dev_", StringComparison.Ordinal), uniqueName);
    }

    [TestMethod]
    public async Task Create_IconWebResourceNotFound_ReturnsError()
    {
        SeedSolution("My Solution", "all_my_solution");

        var result = await NewTool().manage_app(null!, action: "create",
            solution_name: "My Solution", display_name: "Demo", icon_webresource: "missing_icon_resource");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "icon_webresource 'missing_icon_resource'");
        StringAssert.Contains(result.GetText(), "was not found by Display Name");
    }

    [TestMethod]
    public async Task Create_FullFlow_CreatesAppSitemapComponentsAndPublishes()
    {
        SeedSolution("My Solution", "all_my_solution");
        _entityMetadata.Add(AccountMetadataWithId());
        _fake.OnCreate = entity =>
        {
            var id = Guid.NewGuid();
            if (entity.LogicalName == "appmodule")
            {
                var created = new Entity("appmodule", id)
                {
                    ["appmoduleidunique"] = entity.GetAttributeValue<Guid>("appmoduleidunique"),
                    ["name"] = entity.GetAttributeValue<string>("name"),
                    ["uniquename"] = entity.GetAttributeValue<string>("uniquename"),
                    ["description"] = entity.GetAttributeValue<string>("description")
                };
                _appModules.Add(created);
            }
            return id;
        };

        var result = await NewTool().manage_app(null!, action: "create",
            solution_name: "My Solution", display_name: "Demo App", description: "d");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created app 'Demo App' (dev_");
        StringAssert.Contains(result.GetText(), "and published");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("created", json.GetProperty("status").GetString());
        Assert.IsTrue(json.GetProperty("published").GetBoolean());
        var added = json.GetProperty("addedSolutionComponents").EnumerateArray().Select(e => e.GetString()).ToList();
        CollectionAssert.Contains(added, "appmodule");
        CollectionAssert.Contains(added, "sitemap");
    }

    [TestMethod]
    public async Task Create_ValidationErrorsAreReported()
    {
        SeedSolution("My Solution", "all_my_solution");
        _entityMetadata.Add(AccountMetadataWithId());
        var container = new ValidationIssueContainer
        {
            ValidationIssueList = new List<ValidationIssue> { new() { Message = "bad app", ErrorType = "Error" } }
        };
        _validateAppResponse = new OrganizationResponse();
        _validateAppResponse.Results["AppValidationResponse"] = container;
        _fake.OnCreate = entity =>
        {
            var id = Guid.NewGuid();
            if (entity.LogicalName == "appmodule")
            {
                _appModules.Add(new Entity("appmodule", id)
                {
                    ["appmoduleidunique"] = entity.GetAttributeValue<Guid>("appmoduleidunique"),
                    ["name"] = entity.GetAttributeValue<string>("name"),
                    ["uniquename"] = entity.GetAttributeValue<string>("uniquename")
                });
            }
            return id;
        };

        var result = await NewTool().manage_app(null!, action: "create",
            solution_name: "My Solution", display_name: "Demo App");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Validation failed.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("created_validation_failed", json.GetProperty("status").GetString());
    }

    // ── update ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Update_AppNotFound_ReturnsResolveError()
    {
        var result = await NewTool().manage_app(null!, action: "update", app: "missing", display_name: "X");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No model-driven app found matching 'missing'");
    }

    [TestMethod]
    public async Task Update_DescriptionOnly_DryRunListsChange()
    {
        SeedResolvableApp(Guid.NewGuid());

        var result = await NewDryRunTool().manage_app(null!, action: "update", app: "Test App", description: "new text");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would update app 'Test App'");
        StringAssert.Contains(result.GetText(), "description updated");
    }

    [TestMethod]
    public async Task Update_IconWebResource_DryRunListsChange()
    {
        SeedResolvableApp(Guid.NewGuid());
        var iconId = Guid.NewGuid();
        _webResources.Add(new Entity("webresource", iconId)
        {
            ["name"] = "dev_icon.png",
            ["webresourcetype"] = new OptionSetValue(5)
        });

        var result = await NewDryRunTool().manage_app(null!, action: "update",
            app: "Test App", icon_webresource: iconId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "icon_webresource=");
    }

    // ── validate / resolve errors ───────────────────────────────────────────

    [TestMethod]
    public async Task Validate_AppNotFound_ReturnsResolveError()
    {
        var result = await NewTool().manage_app(null!, action: "validate", app: "missing");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No model-driven app found matching 'missing'");
    }

    [TestMethod]
    public async Task ResolveApp_MatchingRecordWithoutNameMatch_ReturnsNotFound()
    {
        _appModules.Add(MakeApp("Something Else", "other_app"));

        var result = await NewTool().manage_app(null!, action: "detail", app: "zzz");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'zzz' was not found by Display Name or Logical/Unique/Schema Name");
    }

    [TestMethod]
    public async Task Detail_AppWithoutUniqueName_SiteMapResolutionReturnsNull()
    {
        var app = MakeApp("Test App", null, Guid.NewGuid());
        _appModules.Add(app);

        var result = await NewTool().manage_app(null!, action: "detail", app: "Test App");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "SiteMap: none");
        StringAssert.Contains(result.GetText(), "Components: 0");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.IsFalse(json.TryGetProperty("siteMapId", out _), "siteMapId should be omitted when null");
    }

    [TestMethod]
    public async Task List_MergesUnpublishedApps()
    {
        _appModules.Add(MakeApp("Published App", "dev_published", Guid.NewGuid()));
        _unpublishedForRetrieve = new List<Entity> { MakeApp("Draft App", "dev_draft", Guid.NewGuid()) };

        var result = await NewTool().manage_app(null!, action: "list");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 2 model-driven app(s)");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("totalCount").GetInt32());
        var names = json.GetProperty("apps").EnumerateArray().Select(a => a.GetProperty("name").GetString()).ToList();
        CollectionAssert.Contains(names, "Published App");
        CollectionAssert.Contains(names, "Draft App");
    }

    // ── update_navigation ───────────────────────────────────────────────────

    [TestMethod]
    public async Task UpdateNavigation_AppNotFound_ReturnsResolveError()
    {
        var result = await NewTool().manage_app(null!, action: "update_navigation",
            app: "missing", operations: """[{"action":"add_group","title":"X"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No model-driven app found matching 'missing'");
    }

    [TestMethod]
    public async Task UpdateNavigation_OperationWithoutLabel_ReturnsActionError()
    {
        SeedResolvableApp(Guid.NewGuid(), MinimalSiteMapXml);

        var result = await NewTool().manage_app(null!, action: "update_navigation",
            app: "Test App", operations: """[{"action":"add_group"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Navigation operation 'add_group' failed");
    }

    [TestMethod]
    public async Task UpdateNavigation_EntityComponentBuildFailure_BlocksNavigation()
    {
        SeedResolvableApp(Guid.NewGuid(), MinimalSiteMapXml);
        _entityMetadata.Add(TestMetadata.Entity("account"));
        _failRetrieveEntity = true;

        var result = await NewTool().manage_app(null!, action: "update_navigation",
            app: "Test App",
            operations: """[{"action":"add_item","area":"area_default","group":"group_default","entity":"account"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Entity validation failed");
        StringAssert.Contains(result.GetText(), "account: entity metadata unavailable");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("blocked_entity_validation", json.GetProperty("details").GetProperty("status").GetString());
    }

    [TestMethod]
    public async Task UpdateNavigation_DryRun_PreviewsChangedOperations()
    {
        SeedResolvableApp(Guid.NewGuid(), MinimalSiteMapXml);

        var result = await NewDryRunTool().manage_app(null!, action: "update_navigation",
            app: "Test App",
            operations: """[{"action":"add_group","area":"area_default","id":"group_new","title":"New Group"}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would update navigation of app 'Test App'");
        StringAssert.Contains(result.GetText(), "1 changed, 0 no-op");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        Assert.AreEqual(1, json.GetProperty("operationsCount").GetInt32());
        Assert.IsTrue(json.GetProperty("navigationChanged").GetBoolean());
    }

    // ── undo ────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_AppNotFound_ReturnsResolveError()
    {
        var result = await NewTool().manage_app(null!, action: "undo", app: "missing", operations: "backup.app.json");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No model-driven app found matching 'missing'");
    }

    [TestMethod]
    public async Task Undo_AppWithoutAppModuleIdUnique_ReturnsError()
    {
        _appModules.Add(MakeApp("Test App", null));

        var result = await NewTool().manage_app(null!, action: "undo", app: "Test App", operations: "backup.app.json");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "has no appmoduleidunique");
    }

    [TestMethod]
    public async Task Undo_AppWithoutSitemap_ReturnsError()
    {
        SeedResolvableApp(Guid.NewGuid());

        var result = await NewTool().manage_app(null!, action: "undo", app: "Test App", operations: "backup.app.json");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "has no sitemap component");
    }

    private static string WriteBackupFile(string json)
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.app.json");
        File.WriteAllText(path, json);
        return path;
    }

    [TestMethod]
    public async Task Undo_BackupSitemapFailsXsd_BlocksUndo()
    {
        var appModuleIdUnique = Guid.NewGuid();
        SeedResolvableApp(appModuleIdUnique, ValidSiteMapXml);
        var app = _appModules[0];
        // Area without required Id attribute → schema error (not a warning, not "not declared")
        var path = WriteBackupFile($$"""
            { "kind": "manage_app.snapshot", "appModuleId": "{{app.Id}}", "sitemapxml": "<SiteMap><Area><Group Id=\"g\"/></Area></SiteMap>" }
            """);
        try
        {
            var result = await NewTool().manage_app(null!, action: "undo", app: "Test App", operations: path);

            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "failed XSD validation");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.AreEqual("blocked_validation", json.GetProperty("details").GetProperty("status").GetString());
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Undo_DryRun_PreviewsRestore()
    {
        var appModuleIdUnique = Guid.NewGuid();
        SeedResolvableApp(appModuleIdUnique, ValidSiteMapXml);
        var app = _appModules[0];
        var path = WriteBackupFile($$"""
            { "kind": "manage_app.snapshot", "appModuleId": "{{app.Id}}", "sitemapxml": "<SiteMap><Area Id=\"area_default\"><Group Id=\"group_default\"><Titles><Title LCID=\"1033\" Title=\"Default\"/></Titles></Group></Area></SiteMap>" }
            """);
        try
        {
            var result = await NewDryRunTool().manage_app(null!, action: "undo", app: "Test App", operations: path);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would restore app 'Test App' navigation from backup");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
            Assert.IsNotNull(json.GetProperty("restoredFromBackup").GetString());
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Undo_BackupAppIdMismatch_ReturnsError()
    {
        var appModuleIdUnique = Guid.NewGuid();
        SeedResolvableApp(appModuleIdUnique, ValidSiteMapXml);
        var path = WriteBackupFile($$"""
            { "kind": "manage_app.snapshot", "appModuleId": "{{Guid.NewGuid()}}", "sitemapxml": "<SiteMap />" }
            """);
        try
        {
            var result = await NewTool().manage_app(null!, action: "undo", app: "Test App", operations: path);

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "backup app ID does not match current app");
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Undo_BackupWithoutSitemapXml_ReturnsError()
    {
        var appModuleIdUnique = Guid.NewGuid();
        SeedResolvableApp(appModuleIdUnique, ValidSiteMapXml);
        var app = _appModules[0];
        var path = WriteBackupFile($$"""
            { "kind": "manage_app.snapshot", "appModuleId": "{{app.Id}}" }
            """);
        try
        {
            var result = await NewTool().manage_app(null!, action: "undo", app: "Test App", operations: path);

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "backup does not contain sitemapxml");
        }
        finally { File.Delete(path); }
    }

    private sealed class ValidationIssueContainer
    {
        public List<ValidationIssue> ValidationIssueList { get; set; } = [];
    }

    private sealed class ValidationIssue
    {
        public string Message { get; set; } = "";
        public string ErrorType { get; set; } = "";
    }
}
