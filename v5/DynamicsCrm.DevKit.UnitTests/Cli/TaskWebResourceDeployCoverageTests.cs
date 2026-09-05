using FakeItEasy;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

/// <summary>
/// Deployment-flow coverage for <see cref="TaskWebResource"/> driven by a stubbed
/// IOrganizationServiceAsync2 (single-file fast path, pattern mode, dependencies).
/// </summary>
[TestClass]
public sealed class TaskWebResourceDeployCoverageTests
{
    private string _root = null!;
    private IOrganizationServiceAsync2 _service = null!;
    private EntityCollection _webResourceRows = new();
    private EntityCollection _dependencyTargetRows = new();
    private EntityCollection _dependencyLibRows = new();
    private List<Entity> _created = null!;
    private List<Entity> _updated = null!;
    private List<PublishXmlRequest> _published = null!;
    private List<AddSolutionComponentRequest> _addedComponents = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskWebResource", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        _webResourceRows = new EntityCollection();
        _dependencyTargetRows = new EntityCollection();
        _dependencyLibRows = new EntityCollection();
        _created = new List<Entity>();
        _updated = new List<Entity>();
        _published = new List<PublishXmlRequest>();
        _addedComponents = new List<AddSolutionComponentRequest>();

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
        if (fetch.Contains("solutioncomponent")) return new EntityCollection();
        if (fetch.Contains("entity name='solution'")) return SolutionRows();
        if (fetch.Contains("dependencyxml")) return _dependencyTargetRows;
        if (fetch.Contains("webresourceidunique")) return _dependencyLibRows;
        if (fetch.Contains("entity name='webresource'")) return _webResourceRows;
        return new EntityCollection();
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case RetrieveVersionRequest:
                var version = new RetrieveVersionResponse();
                version.Results["Version"] = "9.2.0.0";
                return version;
            case RetrieveAllEntitiesRequest:
                var allEntities = new RetrieveAllEntitiesResponse();
                allEntities.Results["EntityMetadata"] = Array.Empty<Microsoft.Xrm.Sdk.Metadata.EntityMetadata>();
                return allEntities;
            case RetrieveProvisionedLanguagesRequest:
                var languages = new RetrieveProvisionedLanguagesResponse();
                languages.Results["RetrieveProvisionedLanguages"] = new[] { 1033 };
                return languages;
            case PublishXmlRequest publish:
                _published.Add(publish);
                return new PublishXmlResponse();
            case AddSolutionComponentRequest add:
                _addedComponents.Add(add);
                return new AddSolutionComponentResponse();
            default:
                return new OrganizationResponse();
        }
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

    private TaskWebResource CreateTask(CommandLineArgs arg, JsonWebResource json)
    {
        var task = new TaskWebResource(arg, json)
        {
            CurrentDirectory = _root,
            OrgServiceAsync = _service
        };
        return task;
    }

    private static JsonWebResource JsonForPatternMode() => new()
    {
        profile = "p",
        solution = "Sol",
        rootfolder = ".",
        includefiles = ["*.js"],
        excludefiles = [],
        dependencies = []
    };

    private async Task<string> WriteFileAsync(string name, string content)
    {
        var file = Path.Combine(_root, name);
        await File.WriteAllTextAsync(file, content);
        return file;
    }

    [TestMethod]
    public async Task IsValidAsync_BypassesProfileChecksForSingleFileDeploy()
    {
        var task = CreateTask(
            new CommandLineArgs { File = "app.js", WebResource = "dev_/app.js" },
            new JsonWebResource { solution = "???", includefiles = [], excludefiles = [], dependencies = [] });

        Assert.IsTrue(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsMissingProfileAndInvalidSolution()
    {
        var arg = new CommandLineArgs { Profile = "missing" };
        Assert.IsFalse(await CreateTask(arg, null!).IsValidAsync());

        var placeholder = new JsonWebResource { profile = "p", solution = "???", includefiles = [], excludefiles = [], dependencies = [] };
        Assert.IsFalse(await CreateTask(arg, placeholder).IsValidAsync());

        var empty = new JsonWebResource { profile = "p", solution = " ", includefiles = [], excludefiles = [], dependencies = [] };
        Assert.IsFalse(await CreateTask(arg, empty).IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsPlaceholderDependencyPrefix()
    {
        var json = JsonForPatternMode();
        json.dependencies = [new Dependency { webresources = ["???_/a.js"], dependencies = ["dev_/lib.js"] }];

        Assert.IsFalse(await CreateTask(new CommandLineArgs { Profile = "p" }, json).IsValidAsync());
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_CreatesPublishesAndMapsWebResource()
    {
        var file = await WriteFileAsync("app.js", "// v1");
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/js/app.js" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        var created = _created.Single();
        Assert.AreEqual("dev_/js/app.js", created.GetAttributeValue<string>("name"));
        Assert.AreEqual(3, created.GetAttributeValue<OptionSetValue>("webresourcetype").Value);
        Assert.AreEqual(Convert.ToBase64String(File.ReadAllBytes(file)), created.GetAttributeValue<string>("content"));
        Assert.AreEqual(0, _updated.Count);
        Assert.AreEqual(0, _addedComponents.Count);
        var publish = _published.Single();
        StringAssert.Contains(publish.ParameterXml, created.Id.ToString());
        var configFile = Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson);
        Assert.IsTrue(File.Exists(configFile));
        StringAssert.Contains(await File.ReadAllTextAsync(configFile), "dev_/js/app.js");
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_UpdatesExistingWhenContentDiffers()
    {
        var file = await WriteFileAsync("app.js", "// v2");
        var existingId = Guid.NewGuid();
        _webResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", existingId)
            {
                ["name"] = "dev_/js/app.js",
                ["content"] = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("// old")),
                ["ismanaged"] = false
            }
        });
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/js/app.js" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        Assert.AreEqual(0, _created.Count);
        var updated = _updated.Single();
        Assert.AreEqual("dev_/js/app.js", updated.GetAttributeValue<string>("name"));
        Assert.AreEqual(Convert.ToBase64String(File.ReadAllBytes(file)), updated.GetAttributeValue<string>("content"));
        Assert.AreEqual(existingId, updated.GetAttributeValue<Guid>("webresourceid"));
        StringAssert.Contains(_published.Single().ParameterXml, existingId.ToString());
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_DoesNothingWhenContentMatches()
    {
        var file = await WriteFileAsync("app.js", "// same");
        _webResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "dev_/js/app.js",
                ["content"] = Convert.ToBase64String(File.ReadAllBytes(file)),
                ["ismanaged"] = false
            }
        });
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/js/app.js" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        Assert.AreEqual(0, _created.Count);
        Assert.AreEqual(0, _updated.Count);
        Assert.AreEqual(0, _published.Count);
        Assert.IsTrue(File.Exists(Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson)));
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_ErrorsOnMultipleMatches()
    {
        var file = await WriteFileAsync("app.js", "// v1");
        _webResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/js/app.js", ["content"] = "eA==" },
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/js/app.backup.js", ["content"] = "eA==" }
        });
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/js/app.js" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        Assert.AreEqual(0, _created.Count);
        Assert.AreEqual(0, _updated.Count);
        Assert.AreEqual(0, _published.Count);
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_SkipsManagedNotCustomizable()
    {
        var file = await WriteFileAsync("app.js", "// v1");
        _webResourceRows = new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "dev_/js/app.js",
                ["content"] = "eA==",
                ["ismanaged"] = true,
                ["iscustomizable"] = new BooleanManagedProperty(false)
            }
        });
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/js/app.js" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        Assert.AreEqual(0, _created.Count);
        Assert.AreEqual(0, _updated.Count);
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_ResxRejectsUnprovisionedLanguage()
    {
        var file = await WriteFileAsync("strings.9999.resx", "x");
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/strings.9999.resx" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await Assert.ThrowsExactlyAsync<Exception>(() => task.RunAsync());
    }

    [TestMethod]
    public async Task RunAsync_SingleFile_UnsupportedExtension_DeploysNothing()
    {
        var file = await WriteFileAsync("notes.txt", "text");
        var task = CreateTask(
            new CommandLineArgs { File = file, WebResource = "dev_/notes.txt" },
            new JsonWebResource { solution = "Sol", includefiles = [], excludefiles = [], dependencies = [] });

        await task.RunAsync();

        Assert.AreEqual(0, _created.Count);
        Assert.AreEqual(0, _updated.Count);
        Assert.AreEqual(0, _published.Count);
    }

    [TestMethod]
    public async Task RunAsync_PatternMode_CreatesAddsToSolutionAndSkipsFormFiles()
    {
        await WriteFileAsync("script.js", "// script");
        await WriteFileAsync("account.form.js", "// form");
        await WriteFileAsync("ignore.txt", "text");
        var task = CreateTask(new CommandLineArgs { Profile = "p" }, JsonForPatternMode());

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        Assert.AreEqual(2, _created.Count);
        var names = _created.Select(x => x.GetAttributeValue<string>("name")).OrderBy(x => x).ToArray();
        CollectionAssert.AreEqual(new[] { "dev_/account.form.js", "dev_/script.js" }, names);
        Assert.AreEqual(2, _addedComponents.Count);
        Assert.IsTrue(_addedComponents.All(x => x.ComponentType == 61 && x.SolutionUniqueName == "Sol"));
        Assert.AreEqual(1, _published.Count);
    }

    [TestMethod]
    public async Task RunAsync_PatternMode_UpdatesDependencyXml()
    {
        await WriteFileAsync("script.js", "// script");
        var libId = Guid.NewGuid();
        _dependencyLibRows = new EntityCollection(new List<Entity>
        {
            new("webresource", libId)
            {
                ["name"] = "dev_/lib.js",
                ["displayname"] = "lib",
                ["webresourceidunique"] = Guid.NewGuid()
            }
        });
        var targetId = Guid.NewGuid();
        _dependencyTargetRows = new EntityCollection(new List<Entity>
        {
            new("webresource", targetId) { ["name"] = "dev_/script.js" }
        });
        var json = JsonForPatternMode();
        json.dependencies = [new Dependency { webresources = ["dev_/script.js"], dependencies = ["dev_/lib.js"] }];
        var task = CreateTask(new CommandLineArgs { Profile = "p" }, json);

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        var dependencyUpdate = _updated.FirstOrDefault(x => x.Id == targetId);
        Assert.IsNotNull(dependencyUpdate);
        var dependencyXml = dependencyUpdate.GetAttributeValue<string>("dependencyxml");
        StringAssert.Contains(dependencyXml, "dev_/lib.js");
        StringAssert.Contains(_published.Single().ParameterXml, targetId.ToString());
    }
}
