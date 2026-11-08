using Microsoft.PowerPlatform.Dataverse.Client;
using FakeItEasy;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Wave-2 TaskWebResource coverage: every webresourcetype extension case of
/// the deploy switch (html/png/gif/jpg/jpeg/css/ico/xml/xsl/xap/svg/resx with
/// a provisioned language), the dependency-placeholder check on the
/// dependencies list, the j++ counter for dependencies that do not exist in
/// the org (IsTheSameDependencyXmlAsync), the GetDependenciesAsync merge of
/// two dependency entries sharing a webresource, the SaveWebResourceMappings
/// update branch against a pre-existing DynamicsCrm.DevKit.Config.json, and
/// the TransformPatternAsync entity-name match loop.
/// </summary>
[TestClass]
public sealed class TaskWebResourceExtensionAndMappingTests
{
    private string _root = null!;
    private IOrganizationServiceAsync2 _service = null!;
    private EntityCollection _webResourceRows = new();
    private EntityCollection _existingWebResourceRows = new();
    private EntityCollection _dependencyTargetRows = new();
    private EntityCollection _dependencyLibRows = new();
    private List<Entity> _created = null!;
    private List<Entity> _updated = null!;
    private List<PublishXmlRequest> _published = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskWebResourceExtra", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        _webResourceRows = new EntityCollection();
        _existingWebResourceRows = new EntityCollection();
        _dependencyTargetRows = new EntityCollection();
        _dependencyLibRows = new EntityCollection();
        _created = new List<Entity>();
        _updated = new List<Entity>();
        _published = new List<PublishXmlRequest>();

        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieve((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.CreateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                var entity = (Entity)call.Arguments[0];
                entity.Id = Guid.NewGuid();
                _created.Add(entity);
                return Task.FromResult(entity.Id);
            });
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                _updated.Add((Entity)call.Arguments[0]);
                return Task.CompletedTask;
            });
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private EntityCollection OnRetrieve(QueryBase query)
    {
        var fetch = (query as FetchExpression)?.Query ?? string.Empty;
        // The webresource fetches are told apart by their attribute lists:
        // GetDependencyXmlAsync reads webresourceidunique, UpdateDependencyAsync
        // reads dependencyxml, the deploy lookup reads content, and
        // IsExistWebResourceAsync reads just the name.
        if (fetch.Contains("webresourceidunique")) return _dependencyLibRows;
        if (fetch.Contains("dependencyxml")) return _dependencyTargetRows;
        if (fetch.Contains("'content'")) return _webResourceRows;
        if (fetch.Contains("entity name='webresource'")) return _existingWebResourceRows;
        if (fetch.Contains("entity name='solution'")) return SolutionRows();
        return new EntityCollection();
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case RetrieveVersionRequest:
                return new RetrieveVersionResponse { Results = { ["Version"] = "9.2.0.0" } };
            case RetrieveAllEntitiesRequest:
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = new EntityMetadata[]
                    {
                        MetadataDouble("Account")
                    } }
                };
            case RetrieveProvisionedLanguagesRequest:
                return new RetrieveProvisionedLanguagesResponse
                {
                    Results = { ["RetrieveProvisionedLanguages"] = new[] { 1033 } }
                };
            case PublishXmlRequest publish:
                _published.Add(publish);
                return new PublishXmlResponse();
            case AddSolutionComponentRequest:
                return new AddSolutionComponentResponse();
            default:
                return new OrganizationResponse();
        }
    }

    private static EntityMetadata MetadataDouble(string schemaName)
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.SchemaName))?.SetValue(meta, schemaName);
        return meta;
    }

    private static EntityCollection SolutionRows()
    {
        var solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "Sol",
            ["p.customizationprefix"] = new AliasedValue("p", "customizationprefix", "dev")
        };
        return new EntityCollection(new List<Entity> { solution });
    }

    private TaskWebResource CreateTask(JsonWebResource json)
    {
        var arg = new CommandLineArgs { Profile = "p" };
        return new TaskWebResource(arg, json)
        {
            CurrentDirectory = _root,
            OrgServiceAsync = _service
        };
    }

    private static JsonWebResource JsonForPatternMode(IEnumerable<string> patterns) => new()
    {
        profile = "p",
        solution = "Sol",
        rootfolder = ".",
        includefiles = [.. patterns],
        excludefiles = [],
        dependencies = []
    };

    private async Task WriteFileAsync(string name, string content)
    {
        await File.WriteAllTextAsync(Path.Combine(_root, name), content);
    }

    // ────────────────────────────────────────────────────────────────────
    // The webresourcetype switch: one file per supported extension.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_PatternMode_DeploysEverySupportedExtension()
    {
        await WriteFileAsync("page.html", "<html/>");
        await WriteFileAsync("page.htm", "<html/>");
        await WriteFileAsync("pic.png", "png");
        await WriteFileAsync("pic.gif", "gif");
        await WriteFileAsync("pic.jpg", "jpg");
        await WriteFileAsync("pic.jpeg", "jpeg");
        await WriteFileAsync("style.css", "css");
        await WriteFileAsync("fav.ico", "ico");
        await WriteFileAsync("data.xml", "<x/>");
        await WriteFileAsync("sheet.xsl", "xsl");
        await WriteFileAsync("sheet2.xslt", "xslt");
        await WriteFileAsync("app.xap", "xap");
        await WriteFileAsync("icon.svg", "svg");
        await WriteFileAsync("Resources.1033.resx", "<root/>");

        var patterns = new[] { "*.html", "*.htm", "*.png", "*.gif", "*.jpg", "*.jpeg", "*.css",
            "*.ico", "*.xml", "*.xsl", "*.xslt", "*.xap", "*.svg", "*.resx" };
        var task = CreateTask(JsonForPatternMode(patterns));

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        Assert.HasCount(14, _created, "every supported extension deployed exactly one webresource.");
        var byName = _created.ToDictionary(x => x.GetAttributeValue<string>("name")!, x => x);
        Assert.AreEqual((int)WebResourceWebResourceType.WebpageHtml, byName["dev_/page.html"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.WebpageHtml, byName["dev_/page.htm"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.PngFormat, byName["dev_/pic.png"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.GifFormat, byName["dev_/pic.gif"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.JpgFormat, byName["dev_/pic.jpg"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.JpgFormat, byName["dev_/pic.jpeg"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.StyleSheetCss, byName["dev_/style.css"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.IcoFormat, byName["dev_/fav.ico"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.DataXml, byName["dev_/data.xml"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.StyleSheetXsl, byName["dev_/sheet.xsl"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.StyleSheetXsl, byName["dev_/sheet2.xslt"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.SilverlightXap, byName["dev_/app.xap"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.SvgFormat, byName["dev_/icon.svg"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual((int)WebResourceWebResourceType.StringResx, byName["dev_/Resources.1033.resx"].GetAttributeValue<OptionSetValue>("webresourcetype")!.Value);
        Assert.AreEqual(1033, byName["dev_/Resources.1033.resx"].GetAttributeValue<int?>("languagecode"),
            "the resx language code was verified against the provisioned languages.");
    }

    // ────────────────────────────────────────────────────────────────────
    // The dependency placeholder check on the 'dependencies' list (the
    // sibling wave-1 test covers the 'webresources' list).
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task IsValidAsync_DependencyPlaceholderInDependenciesList_Fails()
    {
        await WriteFileAsync("script.js", "// script");
        var json = JsonForPatternMode(new[] { "*.js" });
        json.dependencies = [new Dependency
        {
            webresources = ["dev_/script.js"],
            dependencies = ["???_/placeholder.js"]
        }];
        var task = CreateTask(json);

        Assert.IsFalse(await task.IsValidAsync(), "a '???_/' dependency token fails the validation.");
    }

    // ────────────────────────────────────────────────────────────────────
    // IsTheSameDependencyXmlAsync: a dependency that does not exist in the
    // org increments j and the stored XML is refreshed.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_DependencyXml_MissingDependencyWebResource_IsCounted()
    {
        // Two dependencies, neither present in the stored XML: one exists in
        // the org (no j increment), one does not (j++) — so i == nodes.Count
        // but i != dependencies.Count - j and the stored XML is refreshed.
        await WriteFileAsync("script.js", "// script");
        var targetId = Guid.NewGuid();
        _dependencyTargetRows = new EntityCollection(new List<Entity>
        {
            new("webresource", targetId)
            {
                ["name"] = "dev_/script.js",
                ["dependencyxml"] = "<Dependencies></Dependencies>"
            }
        });
        _existingWebResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/lib.js" }
        });
        _dependencyLibRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "dev_/lib.js",
                ["displayname"] = "lib",
                ["webresourceidunique"] = Guid.NewGuid()
            }
        });
        var json = JsonForPatternMode(new[] { "*.js" });
        json.dependencies = [new Dependency
        {
            webresources = ["dev_/script.js"],
            dependencies = ["dev_/lib.js", "dev_/missing.js"]
        }];
        var task = CreateTask(json);

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        var dependencyUpdate = _updated.FirstOrDefault(x => x.Id == targetId);
        Assert.IsNotNull(dependencyUpdate, "the empty stored XML is refreshed.");
        StringAssert.Contains(dependencyUpdate.GetAttributeValue<string>("dependencyxml"), "dev_/lib.js");
    }

    // ────────────────────────────────────────────────────────────────────
    // GetDependenciesAsync: two entries sharing a webresource merge into
    // one dependency with a combined list.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_DependenciesSharingWebResource_MergeTheirLists()
    {
        await WriteFileAsync("script.js", "// script");
        var targetId = Guid.NewGuid();
        _dependencyTargetRows = new EntityCollection(new List<Entity>
        {
            new("webresource", targetId)
            {
                ["name"] = "dev_/script.js",
                ["dependencyxml"] = "<Dependencies></Dependencies>"
            }
        });
        _dependencyLibRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "dev_/lib.js",
                ["displayname"] = "lib",
                ["webresourceidunique"] = Guid.NewGuid()
            }
        });
        // The dependency webresources must exist in the org, otherwise every
        // entry increments the missing counter and the stored XML counts as
        // 'the same' (idempotent no-update).
        _existingWebResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/lib.js" }
        });
        var json = JsonForPatternMode(new[] { "*.js" });
        json.dependencies =
        [
            new Dependency { webresources = ["dev_/script.js"], dependencies = ["dev_/lib.js"] },
            new Dependency { webresources = ["dev_/script.js"], dependencies = ["dev_/lib.js"] }
        ];
        var task = CreateTask(json);

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        // Both entries resolved to the same webresource — the second one's
        // dependency list merged into the first (one target update total).
        Assert.AreEqual(1, _updated.Count(x => x.Id == targetId),
            "the shared webresource produced a single dependency update.");
    }

    // ────────────────────────────────────────────────────────────────────
    // SaveWebResourceMappingsAsync: a pre-existing Config.json mapping is
    // updated in place instead of duplicated.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_ExistingConfigMapping_IsUpdatedInPlace()
    {
        await WriteFileAsync("app.js", "// v2");
        var existingId = Guid.NewGuid();
        _webResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", existingId)
            {
                ["name"] = "dev_/app.js",
                ["content"] = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("// v1")),
                ["ismanaged"] = false
            }
        });
        // AddWebResourceMapping stores the config-relative value
        // (GetConfigFileValue → '\app.js'), so the pre-existing mapping
        // carries the same root-relative form to hit the update branch.
        await WriteFileAsync("DynamicsCrm.DevKit.Config.json", """
            {
              "WebResources": [
                {
                  "File": "\\app.js",
                  "WebResource": "dev_/app.js",
                  "WebResourceId": "00000000-0000-0000-0000-000000000000",
                  "IsManaged": true
                }
              ]
            }
            """);
        var task = CreateTask(JsonForPatternMode(new[] { "*.js" }));

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        var config = await File.ReadAllTextAsync(Path.Combine(_root, "DynamicsCrm.DevKit.Config.json"));
        using var doc = JsonDocument.Parse(config);
        var entries = doc.RootElement.GetProperty("WebResources");
        Assert.HasCount(1, entries.EnumerateArray().ToArray(), "the mapping was updated, not duplicated.");
        var entry = entries.EnumerateArray().Single();
        Assert.IsFalse(entry.GetProperty("IsManaged").GetBoolean(), "the unmanaged server row reset the managed flag.");
        Assert.AreNotEqual(Guid.Empty, Guid.Parse(entry.GetProperty("WebResourceId").GetString()!),
            "the mapping now carries the real webresource id.");
    }

    // ────────────────────────────────────────────────────────────────────
    // TransformPatternAsync: without form/webapi files the entity list is
    // matched against the deployed file names (Account.js ↔ 'Account').
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_EntityTokenDependency_ExpandsFromTheFileName()
    {
        await WriteFileAsync("Account.js", "// account");
        var json = JsonForPatternMode(new[] { "*.js" });
        json.dependencies = [new Dependency
        {
            webresources = ["dev_/[entity].js"],
            dependencies = []
        }];
        var task = CreateTask(json);

        await task.RunAsync();

        Assert.IsTrue(task.IsOk, "the [entity] token expanded from the file name and the missing target failed gracefully.");
    }

    // NOTE (skipped branches):
    // - get_WebResourceFiles' .ts auto-redirect (npm build via cmd.exe) runs
    //   a real Node build — out of scope for offline unit tests.
    // - GetWebResourceMapping's TypeScript-candidate hit is covered by the
    //   wave-1 mapping tests; the remaining closing-brace lines belong to
    //   that same already-exercised flow.
    // - DeployResolvedWebResourceAsync's iscustomizable=false error for the
    //   multi-row path is covered by the wave-1 deploy suite.
    // All left uncovered by design.
}
