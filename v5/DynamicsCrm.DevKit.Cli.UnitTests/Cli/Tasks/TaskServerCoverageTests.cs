using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
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
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

/// <summary>
/// Coverage for TaskServer: the IsValidAsync ladder and the assembly deploy
/// pipeline (DeployAssemblyAsync / DeployPluginTypeAsync / DeployPluginStepAsync
/// / DeployPluginImageAsync / DeployCustomApiStepAsync), driven by plugin
/// assemblies compiled in-memory with Roslyn and an A.Fake
/// IOrganizationServiceAsync2 answering all LoadAll* fetches and metadata
/// requests by content.
/// </summary>
[TestClass]
public sealed class TaskServerCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;
    private List<string> _created = new();
    private List<string> _updatedViaRequest = new();
    private List<(string EntityName, Entity Entity)> _updatedViaUpdateAsync = new();
    private bool _solutionExists = true;
    private List<Entity> _assemblyRows = new();
    private List<Entity> _pluginTypeRows = new();
    private List<Entity> _stepRows = new();
    private List<Entity> _imageRows = new();
    private List<Entity> _sdkMessageRows = new();
    private List<Entity> _sdkMessageFilterRows = new();
    private List<Entity> _customApiRows = new();

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_tsrv_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        _created = new List<string>();
        _updatedViaRequest = new List<string>();
        _updatedViaUpdateAsync = new List<(string, Entity)>();
        _solutionExists = true;
        _assemblyRows = new List<Entity>();
        _pluginTypeRows = new List<Entity>();
        _stepRows = new List<Entity>();
        _imageRows = new List<Entity>();
        _sdkMessageRows = new List<Entity>();
        _sdkMessageFilterRows = new List<Entity>();
        _customApiRows = new List<Entity>();

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieveMultiple((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored, A<CancellationToken>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.CreateAsync(A<Entity>.Ignored))
            .Invokes(call => { _created.Add("createasync:" + ((Entity)call.Arguments[0]).LogicalName); })
            .ReturnsLazily(call => Task.FromResult(Guid.NewGuid()));
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .Invokes(call => { var e = (Entity)call.Arguments[0]; _updatedViaUpdateAsync.Add((e.LogicalName, e)); })
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
            // RetrieveAllRecordsByFetchXmlAsync reserializes fetch XML with
            // double quotes; normalize so single-quote patterns match both shapes
            var q = fe.Query.Replace("\"", "'");
            // angle-bracket matching: "link-entity name='sdkmessage'" would
            // otherwise substring-match "<entity name='sdkmessagefilter'>" fetches
            if (q.Contains("<entity name='solution'"))
            {
                if (!_solutionExists) return new EntityCollection();
                var solution = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
                solution["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
                return new EntityCollection(new List<Entity> { solution });
            }
            if (q.Contains("<entity name='pluginassembly'>")) return new EntityCollection(_assemblyRows.ToList());
            if (q.Contains("<entity name='plugintype'>")) return new EntityCollection(_pluginTypeRows.ToList());
            if (q.Contains("sdkmessageprocessingstepsecureconfig")) return new EntityCollection();
            // IsValidTypesWithCDSAsync probes registered types via a step->plugintype
            // ->pluginassembly link; only that fetch aliases the link as 'plugintype'
            if (q.Contains("<entity name='sdkmessageprocessingstep'>") && q.Contains("alias='plugintype'")) return new EntityCollection();
            if (q.Contains("<entity name='sdkmessageprocessingstepimage'>")) return new EntityCollection(_imageRows.ToList());
            if (q.Contains("<entity name='sdkmessageprocessingstep'>")) return new EntityCollection(_stepRows.ToList());
            if (q.Contains("<entity name='sdkmessagefilter'>")) return new EntityCollection(_sdkMessageFilterRows.ToList());
            if (q.Contains("<entity name='sdkmessage'>")) return new EntityCollection(_sdkMessageRows.ToList());
            if (q.Contains("<entity name='customapi'>")) return new EntityCollection(_customApiRows.ToList());
        }
        return new EntityCollection();
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case CreateRequest create:
            {
                _created.Add(create.Target.LogicalName);
                var resp = new CreateResponse();
                resp.Results["id"] = Guid.NewGuid();
                return resp;
            }
            case UpdateRequest update:
            {
                _updatedViaRequest.Add(update.Target.LogicalName);
                return new UpdateResponse();
            }
            case RetrieveAllEntitiesRequest:
            {
                var metadata = new EntityMetadata { LogicalName = "account", SchemaName = "Account" };
                metadata.GetType().GetProperty("ObjectTypeCode")!.SetValue(metadata, 1);
                metadata.GetType().GetProperty("PrimaryIdAttribute")!.SetValue(metadata, "accountid");
                var allResp = new RetrieveAllEntitiesResponse();
                allResp.Results["EntityMetadata"] = new EntityMetadata[] { metadata };
                return allResp;
            }
            default:
                return new OrganizationResponse();
        }
    }

    // ──────────────────────────────────────────────
    // Roslyn plugin compilation helpers
    // ──────────────────────────────────────────────

    private const string AttributeAndEnumsSource = """
        using System;
        namespace TestPlugins
        {
            public enum PluginType { Plugin = 0, Workflow = 1, CustomAction = 2, DataProvider = 3, CustomApi = 4, DataSource = 5 }
            public enum StageEnum { PreValidation = 10, PreOperation = 20, PostOperation = 40 }
            public enum ExecutionModeEnum { Synchronous = 0, Asynchronous = 1 }
            public enum ImageTypeEnum { PreImage = 0, PostImage = 1, Both = 2 }
            public enum IsolationModeEnum { None = 0, Sandbox = 1, External = 2 }
            public enum SourceTypeEnum { Database = 0, Disk = 1, Normal = 2, AzureWebApp = 3, FileStore = 4 }
            public enum PluginStepOperationEnum { Activate = 0, Deactivate = 1 }

            [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
            public class CrmPluginRegistrationAttribute : Attribute
            {
                public string Id { get; set; } = string.Empty;
                public bool Unregister { get; set; } = false;
                public string RunAs { get; set; } = string.Empty;
                public string FriendlyName { get; set; } = string.Empty;
                public string GroupName { get; set; } = string.Empty;
                public string Description { get; set; } = string.Empty;
                public bool DeleteAsyncOperation { get; set; } = true;
                public bool Offline { get; set; } = false;
                public bool Server { get; set; } = true;
                public PluginStepOperationEnum Action { get; set; } = PluginStepOperationEnum.Activate;
                public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
                public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
                public string Message { get; set; } = string.Empty;
                public string EntityLogicalName { get; set; } = string.Empty;
                public string FilteringAttributes { get; set; } = string.Empty;
                public string Name { get; set; } = string.Empty;
                public int ExecutionOrder { get; set; } = 1;
                public StageEnum Stage { get; set; } = StageEnum.PostOperation;
                public ExecutionModeEnum ExecutionMode { get; set; } = ExecutionModeEnum.Asynchronous;
                public string UnSecureConfiguration { get; set; } = string.Empty;
                public string SecureConfiguration { get; set; } = string.Empty;
                public string Image1Name { get; set; } = string.Empty;
                public string Image1Alias { get; set; } = string.Empty;
                public ImageTypeEnum Image1Type { get; set; } = ImageTypeEnum.PreImage;
                public string Image1Attributes { get; set; } = string.Empty;
                public PluginType PluginType { get; set; }
                public string DataSource { get; set; }
            }
        """;

    private static string BuildPluginSource(string classes) =>
        AttributeAndEnumsSource + "\n" + classes + "\n}\n";

    private string CompilePluginAssembly(string assemblyName, string classes)
    {
        var syntaxTree = CSharpSyntaxTree.ParseText(BuildPluginSource(classes));
        var references = new List<MetadataReference> { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) };
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        foreach (var framework in new[] { "System.Runtime.dll", "netstandard.dll" })
        {
            var path = Path.Combine(runtimeDir, framework);
            if (File.Exists(path)) references.Add(MetadataReference.CreateFromFile(path));
        }
        var compilation = CSharpCompilation.Create(
            assemblyName,
            new[] { syntaxTree },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        using var ms = new MemoryStream();
        var result = compilation.Emit(ms);
        if (!result.Success)
        {
            Assert.Fail("Plugin compilation failed: " +
                string.Join("; ", result.Diagnostics.Take(5).Select(d => d.ToString())));
        }
        var bytes = ms.ToArray();
        var path2 = Path.Combine(_tempDir, "deploy", assemblyName + ".dll");
        Directory.CreateDirectory(Path.GetDirectoryName(path2)!);
        File.WriteAllBytes(path2, bytes);
        return path2;
    }

    private const string PluginClassWithStepAndImage = """
            [CrmPluginRegistration(Message = "Create", EntityLogicalName = "account", Name = "Account Create Step", PluginType = PluginType.Plugin, Stage = StageEnum.PostOperation, ExecutionMode = ExecutionModeEnum.Synchronous, Image1Name = "PreImage", Image1Alias = "alias", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]
            public class AccountCreatePlugin { }
        """;

    private const string WorkflowClass = """
            [CrmPluginRegistration(Name = "My Workflow", FriendlyName = "My Workflow", Description = "desc", GroupName = "My Group", IsolationMode = IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
            public class MyWorkflow { }
        """;

    private const string CustomApiClass = """
            [CrmPluginRegistration(Name = "dev_MyApi", Message = "dev_MyApi", PluginType = PluginType.CustomApi)]
            public class MyCustomApi { }
        """;

    // ──────────────────────────────────────────────
    // Task construction
    // ──────────────────────────────────────────────

    private TaskServer NewTask(Json? json = null, bool onlyUpdateAssembly = false)
    {
        var arg = new CommandLineArgs
        {
            Profile = "DEBUG",
            Type = "servers",
            OnlyUpdateAssembly = onlyUpdateAssembly
        };
        var task = new TaskServer(arg, json ?? new Json
        {
            servers = new List<JsonServer>
            {
                new()
                {
                    profile = "DEBUG",
                    folder = "deploy",
                    solution = "DevKit",
                    includefiles = new List<string> { "*.dll" },
                    excludefiles = new List<string>()
                }
            }
        });
        task.OrgServiceAsync = _service;
        task.CurrentDirectory = _tempDir;
        return task;
    }

    // ──────────────────────────────────────────────
    // IsValidAsync ladder
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task IsValid_ProfileNotFound_Fails()
    {
        var task = NewTask(new Json { servers = new List<JsonServer>() });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_FolderPlaceholder_Fails()
    {
        var task = NewTask(new Json
        {
            servers = new List<JsonServer> { new() { profile = "DEBUG", folder = "???", solution = "DevKit" } }
        });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_SolutionPlaceholder_Fails()
    {
        var task = NewTask(new Json
        {
            servers = new List<JsonServer> { new() { profile = "DEBUG", folder = "deploy", solution = "???" } }
        });
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
    public async Task IsValid_Valid_True()
    {
        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
        Assert.AreEqual("dev_", task.SolutionPrefix);
    }

    // ──────────────────────────────────────────────
    // RunAsync: file discovery
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_NoFiles_Error()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "deploy"));
        var task = NewTask();
        await task.RunAsync();
        Assert.AreEqual(0, _created.Count);
    }

    [TestMethod]
    public async Task RunAsync_UnsupportedExtension_Error()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "deploy"));
        File.WriteAllText(Path.Combine(_tempDir, "deploy", "readme.txt"), "x");
        var json = new Json
        {
            servers = new List<JsonServer>
            {
                new() { profile = "DEBUG", folder = "deploy", solution = "DevKit", includefiles = new List<string> { "*.txt" }, excludefiles = new List<string>() }
            }
        };
        var task = NewTask(json);
        await task.RunAsync();
        Assert.AreEqual(0, _created.Count);
    }

    // ──────────────────────────────────────────────
    // RunAsync: dll deploy pipeline
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_PluginWithStepAndImage_CreatesAll()
    {
        var dll = CompilePluginAssembly("PlgFull", PluginClassWithStepAndImage);
        _sdkMessageRows.Add(new Entity("sdkmessage", Guid.NewGuid())
        {
            ["sdkmessageid"] = Guid.NewGuid(),
            ["name"] = "Create",
            ["s.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", "account")
        });
        _sdkMessageFilterRows.Add(new Entity("sdkmessagefilter", Guid.NewGuid())
        {
            ["sdkmessagefilterid"] = Guid.NewGuid(),
            ["primaryobjecttypecode"] = "account",
            ["s.name"] = new AliasedValue("sdkmessage", "name", "Create")
        });
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.Contains(_created, "pluginassembly");
        CollectionAssert.Contains(_created, "plugintype");
        CollectionAssert.Contains(_created, "sdkmessageprocessingstep");
        CollectionAssert.Contains(_created, "sdkmessageprocessingstepimage");
    }

    [TestMethod]
    public async Task RunAsync_ExistingAssembly_SameContent_AssemblyDoNothing()
    {
        var dll = CompilePluginAssembly("PlgSame", PluginClassWithStepAndImage);
        _assemblyRows.Add(new Entity("pluginassembly", Guid.NewGuid())
        {
            ["name"] = "TestPlugins",
            ["content"] = Convert.ToBase64String(File.ReadAllBytes(dll))
        });
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.DoesNotContain(_created, "pluginassembly");
        CollectionAssert.Contains(_created, "plugintype");
    }

    [TestMethod]
    public async Task RunAsync_OnlyUpdateAssembly_StopsAfterAssembly()
    {
        CompilePluginAssembly("PlgOnly", PluginClassWithStepAndImage);
        var task = NewTask(onlyUpdateAssembly: true);

        await task.RunAsync();

        CollectionAssert.Contains(_created, "pluginassembly");
        CollectionAssert.DoesNotContain(_created, "plugintype");
    }

    [TestMethod]
    public async Task RunAsync_ExistingPluginType_UpdatesWhenChanged()
    {
        CompilePluginAssembly("PlgTypeUpd", PluginClassWithStepAndImage);
        var existingTypeId = Guid.NewGuid();
        // type exists with an old friendly name → update path
        _pluginTypeRows.Add(new Entity("plugintype", existingTypeId)
        {
            ["plugintypeid"] = existingTypeId,
            ["typename"] = "TestPlugins.AccountCreatePlugin",
            ["name"] = "Account Create Step",
            ["friendlyname"] = "OLD friendly name",
            ["description"] = null
        });
        _sdkMessageRows.Add(new Entity("sdkmessage", Guid.NewGuid())
        {
            ["sdkmessageid"] = Guid.NewGuid(),
            ["name"] = "Create",
            ["s.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", "account")
        });
        _sdkMessageFilterRows.Add(new Entity("sdkmessagefilter", Guid.NewGuid())
        {
            ["sdkmessagefilterid"] = Guid.NewGuid(),
            ["primaryobjecttypecode"] = "account",
            ["s.name"] = new AliasedValue("sdkmessage", "name", "Create")
        });
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.Contains(_updatedViaRequest, "plugintype");
        CollectionAssert.Contains(_created, "sdkmessageprocessingstep");
    }

    [TestMethod]
    public async Task RunAsync_ExistingStepSameName_UpdatesStep()
    {
        var dll = CompilePluginAssembly("PlgStepUpd", PluginClassWithStepAndImage);
        var pluginTypeId = Guid.NewGuid();
        var stepId = Guid.NewGuid();
        _pluginTypeRows.Add(new Entity("plugintype", pluginTypeId)
        {
            ["plugintypeid"] = pluginTypeId,
            ["typename"] = "TestPlugins.AccountCreatePlugin",
            ["name"] = "Account Create Step",
            ["friendlyname"] = "TestPlugins.AccountCreatePlugin"
        });
        _stepRows.Add(new Entity("sdkmessageprocessingstep", stepId)
        {
            ["sdkmessageprocessingstepid"] = stepId,
            ["name"] = "Account Create Step",
            ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId),
            // fields IsChangedPluginStep dereferences on the old step
            ["mode"] = new OptionSetValue(0),
            ["rank"] = 1,
            ["stage"] = new OptionSetValue(40),
            ["asyncautodelete"] = false,
            ["statuscode"] = new OptionSetValue(1),
            ["statecode"] = new OptionSetValue(0),
            ["supporteddeployment"] = new OptionSetValue(0)
        });
        _sdkMessageRows.Add(new Entity("sdkmessage", Guid.NewGuid())
        {
            ["sdkmessageid"] = Guid.NewGuid(),
            ["name"] = "Create",
            ["s.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", "account")
        });
        _sdkMessageFilterRows.Add(new Entity("sdkmessagefilter", Guid.NewGuid())
        {
            ["sdkmessagefilterid"] = Guid.NewGuid(),
            ["primaryobjecttypecode"] = "account",
            ["s.name"] = new AliasedValue("sdkmessage", "name", "Create")
        });
        _assemblyRows.Add(new Entity("pluginassembly", Guid.NewGuid())
        {
            ["name"] = "TestPlugins",
            ["content"] = Convert.ToBase64String(File.ReadAllBytes(dll))
        });
        var task = NewTask();

        await task.RunAsync();

        // step exists → updated via UpdateRequest instead of created
        CollectionAssert.Contains(_updatedViaRequest, "sdkmessageprocessingstep");
        CollectionAssert.DoesNotContain(_created, "sdkmessageprocessingstep");
    }

    [TestMethod]
    public async Task RunAsync_WorkflowType_CreatesTypeButNoStep()
    {
        CompilePluginAssembly("WfTest", WorkflowClass);
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.Contains(_created, "plugintype");
        CollectionAssert.DoesNotContain(_created, "sdkmessageprocessingstep");
    }

    [TestMethod]
    public async Task RunAsync_CustomApi_UpdatesCustomApiEntity()
    {
        CompilePluginAssembly("ApiTest1", CustomApiClass);
        _customApiRows.Add(new Entity("customapi", Guid.NewGuid())
        {
            ["customapiid"] = Guid.NewGuid(),
            ["uniquename"] = "dev_MyApi"
        });
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.Contains(_created, "plugintype");
        Assert.IsTrue(_updatedViaUpdateAsync.Any(x => x.EntityName == "customapi"), "customapi must be bound to the plugin type via UpdateAsync");
    }

    [TestMethod]
    public async Task RunAsync_CustomApiMessageNotFound_DeploymentStops()
    {
        CompilePluginAssembly("ApiTest2", CustomApiClass);
        // no customapi rows → "Custom Api with message ... not found"
        var task = NewTask();

        await task.RunAsync();

        CollectionAssert.Contains(_created, "plugintype");
        Assert.IsFalse(_updatedViaUpdateAsync.Any(x => x.EntityName == "customapi"));
    }

    // ──────────────────────────────────────────────
    // RunAsync: nuget package deploy
    // ──────────────────────────────────────────────

    private string BuildNupkg(string packageName, string version, string dllPath)
    {
        var nupkgPath = Path.Combine(_tempDir, "deploy", $"{packageName}{version}.nupkg");
        using var fs = new FileStream(nupkgPath, FileMode.Create);
        using var zip = new ZipArchive(fs, ZipArchiveMode.Create);
        var nuspecEntry = zip.CreateEntry("package.nuspec");
        using (var writer = new StreamWriter(nuspecEntry.Open(), Encoding.UTF8))
        {
            writer.Write($"<?xml version=\"1.0\"?><package><metadata><id>{packageName}</id><version>{version}</version><authors>t</authors><description>d</description></metadata></package>");
        }
        var dllEntry = zip.CreateEntry($"lib/{packageName}{version}.dll");
        using (var source = File.OpenRead(dllPath))
        {
            source.CopyTo(dllEntry.Open());
        }
        return nupkgPath;
    }

    [TestMethod]
    public async Task RunAsync_NugetWithWorkflow_Rejected()
    {
        var dll = CompilePluginAssembly("WfSrc", WorkflowClass);
        var nupkg = BuildNupkg("TestPkg", "1.0.0", dll);
        var json = new Json
        {
            servers = new List<JsonServer>
            {
                new() { profile = "DEBUG", folder = "deploy", solution = "DevKit", includefiles = new List<string> { "*.nupkg" }, excludefiles = new List<string>() }
            }
        };
        var task = NewTask(json);

        await task.RunAsync();

        // workflow activities in packages are rejected before any registration
        CollectionAssert.DoesNotContain(_created, "pluginassembly");
        CollectionAssert.DoesNotContain(_created, "plugintype");
    }
}
