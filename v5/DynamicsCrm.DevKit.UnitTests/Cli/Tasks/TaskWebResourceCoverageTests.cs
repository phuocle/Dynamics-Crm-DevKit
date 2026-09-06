using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Tasks;

/// <summary>
/// Coverage for TaskWebResource: the IsValidAsync ladder, pattern-based file
/// scanning, and the DeployWebResourceFileAsync create/update/skip decision
/// matrix, driven by an A.Fake IOrganizationServiceAsync2 answering solution,
/// webresource, solutioncomponent, RetrieveVersion, RetrieveAllEntities and
/// PublishXml requests. All requests are dispatched by FetchExpression content.
/// </summary>
[TestClass]
public sealed class TaskWebResourceCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;
    private int _creates;
    private int _updates;
    private int _publishXml;
    private int _addSolutionComponent;
    private int _retrieveVersion;
    private string _version = "9.2.1.2";
    private bool _solutionExists = true;
    private bool _existWebResource;
    private Entity? _lastCreated;
    private Entity? _lastUpdated;
    private List<Entity> _contentRows = new();
    private Entity? _dependencyXmlRow;
    private Entity? _dependencyLibraryRow;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_twr_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        _creates = 0;
        _updates = 0;
        _publishXml = 0;
        _addSolutionComponent = 0;
        _retrieveVersion = 0;
        _version = "9.2.1.2";
        _solutionExists = true;
        _existWebResource = false;
        _lastCreated = null;
        _lastUpdated = null;
        _contentRows = new List<Entity>();
        _dependencyXmlRow = null;
        _dependencyLibraryRow = null;

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieveMultiple((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored, A<CancellationToken>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.CreateAsync(A<Entity>.Ignored))
            .Invokes(call => { _creates++; _lastCreated = (Entity)call.Arguments[0]; })
            .ReturnsLazily(call => Task.FromResult(Guid.NewGuid()));
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .Invokes(call => { _updates++; _lastUpdated = (Entity)call.Arguments[0]; })
            .Returns(Task.CompletedTask);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { /* best effort */ }
    }

    private EntityCollection OnRetrieveMultiple(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var q = fe.Query;
            if (q.Contains("entity name='solutioncomponent'"))
                return new EntityCollection();
            if (q.Contains("entity name='solution'"))
            {
                if (!_solutionExists) return new EntityCollection();
                var solution = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
                solution["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
                return new EntityCollection(new List<Entity> { solution });
            }
            if (q.Contains("attribute name='dependencyxml'"))
                return _dependencyXmlRow != null
                    ? new EntityCollection(new List<Entity> { _dependencyXmlRow })
                    : new EntityCollection();
            if (q.Contains("attribute name='webresourceidunique'"))
                return _dependencyLibraryRow != null
                    ? new EntityCollection(new List<Entity> { _dependencyLibraryRow })
                    : new EntityCollection();
            if (q.Contains("attribute name='content'"))
                return new EntityCollection(_contentRows.ToList());
            // IsExistWebResourceAsync: fetch on name only
            return _existWebResource
                ? new EntityCollection(new List<Entity> { new Entity("webresource", Guid.NewGuid()) { ["name"] = "x" } })
                : new EntityCollection();
        }
        return new EntityCollection();
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case PublishXmlRequest:
                _publishXml++;
                return new PublishXmlResponse();
            case RetrieveVersionRequest:
                _retrieveVersion++;
                var versionResp = new RetrieveVersionResponse();
                versionResp.Results["Version"] = _version;
                return versionResp;
            case RetrieveAllEntitiesRequest:
            {
                var allResp = new RetrieveAllEntitiesResponse();
                allResp.Results["EntityMetadata"] = new EntityMetadata[] { new() { SchemaName = "account" } };
                return allResp;
            }
            case AddSolutionComponentRequest:
                _addSolutionComponent++;
                return new AddSolutionComponentResponse();
            case RetrieveProvisionedLanguagesRequest:
            {
                var langResp = new RetrieveProvisionedLanguagesResponse();
                langResp.Results["RetrieveProvisionedLanguages"] = new int[] { 1033 };
                return langResp;
            }
            default:
                return new OrganizationResponse();
        }
    }

    private TaskWebResource NewTask(JsonWebResource? json = null, string? file = null, string? webResource = null)
    {
        var arg = new CommandLineArgs
        {
            Profile = "WEBRESOURCE",
            Type = "webresources",
            File = file,
            WebResource = webResource,
            Version = "1.0.0.0"
        };
        var task = new TaskWebResource(arg, json ?? DefaultJson());
        task.CurrentDirectory = _tempDir;
        task.OrgServiceAsync = _service;
        return task;
    }

    private static JsonWebResource DefaultJson() => new()
    {
        solution = "DevKit",
        rootfolder = "webresources",
        // production patterns use backslashes and "**" glued to the extension
        // (e.g. "js\\**.js" in DynamicsCrm.DevKit.Cli.json); "**/*.js" would make
        // GetFiles pass a directory separator into Directory.GetFiles and throw
        includefiles = new List<string> { "**.js" },
        excludefiles = new List<string>(),
        dependencies = new List<Dependency>()
    };

    private string WriteFile(string relativePath, string content)
    {
        var fullPath = Path.Combine(_tempDir, relativePath.Replace('/', Path.DirectorySeparatorChar));
        Directory.CreateDirectory(Path.GetDirectoryName(fullPath)!);
        File.WriteAllText(fullPath, content);
        return fullPath;
    }

    // ──────────────────────────────────────────────
    // IsValidAsync ladder
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task IsValid_NullJson_Fails()
    {
        var arg = new CommandLineArgs { Profile = "WEBRESOURCE", Type = "webresources" };
        var task = new TaskWebResource(arg, null!);
        task.OrgServiceAsync = _service;
        Assert.IsFalse(await task.IsValidAsync());
        Assert.AreEqual(0, _retrieveVersion);
    }

    [TestMethod]
    public async Task IsValid_SolutionPlaceholder_Fails()
    {
        var task = NewTask(new JsonWebResource { solution = "???", rootfolder = "webresources", includefiles = new List<string>(), dependencies = new List<Dependency>() });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_EmptySolution_Fails()
    {
        var task = NewTask(new JsonWebResource { solution = "   ", rootfolder = "webresources", includefiles = new List<string>(), dependencies = new List<Dependency>() });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_SolutionNotFound_Fails()
    {
        _solutionExists = false;
        var task = NewTask();
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_FilePlusWebResource_BypassesValidation()
    {
        var file = WriteFile("webresources/js/app.js", "console.log('app');");
        var task = NewTask(file: file, webResource: "dev_/js/app.js");
        Assert.IsTrue(await task.IsValidAsync());
        Assert.AreEqual(0, _retrieveVersion); // bypass runs no server validation
    }

    [TestMethod]
    public async Task IsValid_DependencyPlaceholderPrefix_Fails()
    {
        var task = NewTask(new JsonWebResource
        {
            solution = "DevKit",
            rootfolder = "webresources",
            includefiles = new List<string> { "**.js" },
            excludefiles = new List<string>(),
            dependencies = new List<Dependency>
            {
                new() { webresources = new List<string> { "???_/js/lib.js" }, dependencies = new List<string>() }
            }
        });
        Assert.IsFalse(await task.IsValidAsync());
        Assert.AreEqual(1, _retrieveVersion); // dependency support check ran
    }

    [TestMethod]
    public async Task IsValid_Valid_NoDependencies_True()
    {
        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
        Assert.AreEqual("dev_", task.SolutionPrefix);
        Assert.AreNotEqual(Guid.Empty, task.SolutionId);
        Assert.IsTrue(task.IsOk);
    }

    // ──────────────────────────────────────────────
    // RunAsync: pattern-mode deploy matrix
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_NewFiles_CreatesPublishesAddsToSolutionAndSavesMappings()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        WriteFile("webresources/css/style.css", "body {}");
        var json = DefaultJson();
        json.includefiles = new List<string> { "**.js", "**.css" };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(2, _creates);
        Assert.AreEqual(0, _updates);
        Assert.AreEqual(2, _addSolutionComponent);
        Assert.AreEqual(1, _publishXml);
        Assert.IsNotNull(_lastCreated);
        Assert.AreEqual("dev_/js/app.js", _lastCreated!["name"]);
        var configPath = Path.Combine(_tempDir, Const.DynamicsCrmDevKitConfigJson);
        Assert.IsTrue(File.Exists(configPath), "config json must be written after deploy");
        StringAssert.Contains(File.ReadAllText(configPath), "app.js");
    }

    [TestMethod]
    public async Task RunAsync_UnsupportedExtensionsExcluded()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        WriteFile("webresources/notes.txt", "not deployable");
        var json = DefaultJson();
        json.includefiles = new List<string> { "**" };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);
    }

    [TestMethod]
    public async Task RunAsync_ExistingSameContent_DoesNothingButAddsToSolution()
    {
        var file = WriteFile("webresources/js/app.js", "console.log('app');");
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = Convert.ToBase64String(File.ReadAllBytes(file)),
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(0, _creates);
        Assert.AreEqual(0, _updates);
        Assert.AreEqual(0, _publishXml);
        Assert.AreEqual(1, _addSolutionComponent); // still ensured in solution
    }

    [TestMethod]
    public async Task RunAsync_ExistingDifferentContent_Updates()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = "old-content",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(0, _creates);
        Assert.AreEqual(1, _updates);
        Assert.AreEqual(1, _publishXml);
        Assert.IsNotNull(_lastUpdated);
        Assert.AreEqual("dev_/js/app.js", _lastUpdated!["name"]);
    }

    [TestMethod]
    public async Task RunAsync_ManagedNotCustomizable_Skips()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = "old-content",
            ["ismanaged"] = true,
            ["iscustomizable"] = new BooleanManagedProperty(false)
        });
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(0, _creates);
        Assert.AreEqual(0, _updates);
        Assert.AreEqual(0, _publishXml);
        Assert.AreEqual(0, _addSolutionComponent);
    }

    [TestMethod]
    public async Task RunAsync_ManagedButCustomizable_Updates()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = "old-content",
            ["ismanaged"] = true,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(1, _updates);
    }

    [TestMethod]
    public async Task RunAsync_ExactNameMatchWinsOverName2()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        // name2 = "dev_/js/app" (uniquename minus extension) also exists on server
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app",
            ["content"] = "name2-content",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = "exact-content",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(1, _updates);
        Assert.IsNotNull(_lastUpdated);
        Assert.AreEqual("dev_/js/app.js", _lastUpdated!["name"]);
    }

    [TestMethod]
    public async Task RunAsync_FileOutsideRootFolder_NoDeploy()
    {
        var outside = WriteFile("outside.js", "console.log('outside');");
        var task = NewTask(file: outside, webResource: null);

        await task.RunAsync();

        Assert.AreEqual(0, _creates);
        Assert.AreEqual(0, _publishXml);
    }

    [TestMethod]
    public async Task RunAsync_SingleFileWithWebResource_SkipsSolutionAdd()
    {
        var file = WriteFile("webresources/js/app.js", "console.log('app');");
        _contentRows.Add(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["content"] = "old-content",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });
        var task = NewTask(file: file, webResource: "dev_/js/app.js");

        await task.RunAsync();

        Assert.AreEqual(1, _updates);
        Assert.AreEqual(1, _publishXml);
        Assert.AreEqual(0, _addSolutionComponent); // explicit --file + --webresource skips solution add
    }

    // ──────────────────────────────────────────────
    // RunAsync: resx language branch
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_ResxWithProvisionedLanguage_CreatesWithLanguageCode()
    {
        WriteFile("webresources/strings/Account.1033.resx", "<root/>");
        var json = DefaultJson();
        json.includefiles = new List<string> { "**.resx" };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);
        Assert.IsNotNull(_lastCreated);
        Assert.AreEqual(1033, _lastCreated!["languagecode"]);
        Assert.AreEqual((int)WebResourceWebResourceType.StringResx, ((OptionSetValue)_lastCreated["webresourcetype"]).Value);
    }

    [TestMethod]
    public async Task RunAsync_ResxUnprovisionedLanguage_Throws()
    {
        WriteFile("webresources/strings/Account.1031.resx", "<root/>");
        var json = DefaultJson();
        json.includefiles = new List<string> { "**.resx" };
        var task = NewTask(json);

        await Assert.ThrowsExactlyAsync<Exception>(() => task.RunAsync());
    }

    // ──────────────────────────────────────────────
    // RunAsync: webresource dependency update
    // ──────────────────────────────────────────────

    private static string DependencyXml(params string[] libraries)
    {
        var libs = string.Join("", libraries.Select(l =>
            $"<Library name=\"{l}\" displayName=\"d\" languagecode=\"1033\" description=\"desc\" libraryUniqueId=\"{{{Guid.NewGuid()}}}\"/>"));
        return $"<Dependencies><Dependency componentType=\"WebResource\">{libs}</Dependency></Dependencies>";
    }

    [TestMethod]
    public async Task RunAsync_DependencyChanged_UpdatesAndPublishes()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _existWebResource = true;
        _dependencyXmlRow = new Entity("webresource", Guid.NewGuid())
        {
            ["dependencyxml"] = DependencyXml("dev_/js/other.js")
        };
        _dependencyLibraryRow = new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["displayname"] = "App",
            ["description"] = "desc",
            ["webresourceidunique"] = Guid.NewGuid(),
            ["languagecode"] = 1033
        };
        var json = DefaultJson();
        json.dependencies = new List<Dependency>
        {
            new() { webresources = new List<string> { "dev_/js/lib.js" }, dependencies = new List<string> { "dev_/js/app.js" } }
        };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);          // app.js deployed
        Assert.AreEqual(1, _updates);          // lib.js dependencyxml updated
        Assert.AreEqual(1, _publishXml);
        Assert.IsNotNull(_lastUpdated);
        Assert.IsNotNull(_lastUpdated!["dependencyxml"]);
        StringAssert.Contains((string)_lastUpdated["dependencyxml"], "dev_/js/app.js");
    }

    [TestMethod]
    public async Task RunAsync_DependencyAlreadySame_NoUpdate()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _existWebResource = true;
        _dependencyXmlRow = new Entity("webresource", Guid.NewGuid())
        {
            ["dependencyxml"] = DependencyXml("dev_/js/app.js")
        };
        _dependencyLibraryRow = new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["displayname"] = "App",
            ["description"] = "desc",
            ["webresourceidunique"] = Guid.NewGuid(),
            ["languagecode"] = 1033
        };
        var json = DefaultJson();
        json.dependencies = new List<Dependency>
        {
            new() { webresources = new List<string> { "dev_/js/lib.js" }, dependencies = new List<string> { "dev_/js/app.js" } }
        };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);          // app.js deployed
        Assert.AreEqual(0, _updates);          // dependency already matches
        Assert.AreEqual(1, _publishXml);       // published because app.js was created
    }

    [TestMethod]
    public async Task RunAsync_DependencyWebResourceMissing_NoUpdate()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _dependencyXmlRow = null; // dependency webresource not found on server
        var json = DefaultJson();
        json.dependencies = new List<Dependency>
        {
            new() { webresources = new List<string> { "dev_/js/lib.js" }, dependencies = new List<string> { "dev_/js/app.js" } }
        };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);
        Assert.AreEqual(0, _updates);
        Assert.AreEqual(1, _publishXml);       // dependency webresource missing, but app.js was created
    }

    [TestMethod]
    public async Task RunAsync_OldPlatformVersion_SkipsDependencies()
    {
        WriteFile("webresources/js/app.js", "console.log('app');");
        _version = "8.2.0.0";
        _existWebResource = true;
        _dependencyXmlRow = new Entity("webresource", Guid.NewGuid())
        {
            ["dependencyxml"] = DependencyXml("dev_/js/other.js")
        };
        _dependencyLibraryRow = new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "dev_/js/app.js",
            ["displayname"] = "App",
            ["description"] = "desc",
            ["webresourceidunique"] = Guid.NewGuid(),
            ["languagecode"] = 1033
        };
        var json = DefaultJson();
        json.dependencies = new List<Dependency>
        {
            new() { webresources = new List<string> { "dev_/js/lib.js" }, dependencies = new List<string> { "dev_/js/app.js" } }
        };
        var task = NewTask(json);

        await task.RunAsync();

        Assert.AreEqual(1, _creates);
        Assert.AreEqual(0, _updates);          // dependency support requires >= 9.0
        Assert.AreEqual(1, _publishXml);       // published because app.js was created
    }
}
