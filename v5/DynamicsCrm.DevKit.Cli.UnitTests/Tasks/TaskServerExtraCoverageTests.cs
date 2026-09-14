using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

[TestClass]
[DoNotParallelize]
public sealed class TaskServerExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private string _workDir = null!;
    private string _originalCwd = null!;
    private EntityCollection _solutionRows = null!;
    private EntityCollection _pluginAssemblyRows = null!;
    private EntityCollection _pluginTypeRows = null!;
    private EntityCollection _sdkMessageRows = null!;
    private EntityCollection _sdkMessageFilterRows = null!;
    private EntityCollection _customApiRows = null!;
    private EntityCollection _pluginImageRows = null!;
    private EntityCollection _pluginStepRows = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _executes = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _workDir = Path.Combine(Path.GetTempPath(), "devkit-taskserver-extra-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(Path.Combine(_workDir, "serverfiles"));
        Directory.SetCurrentDirectory(_workDir);
        _solutionRows = new EntityCollection();
        _pluginAssemblyRows = new EntityCollection();
        _pluginTypeRows = new EntityCollection();
        _sdkMessageRows = new EntityCollection();
        _sdkMessageFilterRows = new EntityCollection();
        _customApiRows = new EntityCollection();
        _pluginImageRows = new EntityCollection();
        _pluginStepRows = new EntityCollection();
        _entities.Clear();
        _executes.Clear();
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.COUNT_ExecuteAsync = 0;
        XrmHelper.COUNT_RetrieveMultipleAsync = 0;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnCreate = entity =>
        {
            var req = new CreateRequest { Target = entity };
            _executes.Add(req);
            return Guid.NewGuid();
        };
        _fake.OnUpdate = entity =>
        {
            var req = new UpdateRequest { Target = entity };
            _executes.Add(req);
        };
        _fake.OnDelete = (entityName, id) =>
        {
            var req = new DeleteRequest { Target = new EntityReference(entityName, id) };
            _executes.Add(req);
        };
        _fake.OnExecute = request =>
        {
            _executes.Add(request);
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                DeleteRequest => new DeleteResponse(),
                _ => new OrganizationResponse()
            };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        Directory.SetCurrentDirectory(_originalCwd);
        _fake.Dispose();
        Helper.TryDeleteDirectory(_workDir);
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query.Replace('"', '\'');
            if (fetch.Contains("<entity name='solution'")) return _solutionRows;
            if (fetch.Contains("<entity name='pluginassembly'")) return _pluginAssemblyRows;
            if (fetch.Contains("<entity name='plugintype'")) return _pluginTypeRows;
            if (fetch.Contains("<entity name='customapi'")) return _customApiRows;
            if (fetch.Contains("<entity name='sdkmessageprocessingstepimage'")) return _pluginImageRows;
            if (fetch.Contains("<entity name='sdkmessageprocessingstep'")) return _pluginStepRows;
            if (fetch.Contains("<entity name='sdkmessagefilter'"))
            {
                var filterRows = new EntityCollection();
                foreach (var message in _sdkMessageRows.Entities)
                {
                    filterRows.Entities.Add(new Entity("sdkmessagefilter", Guid.NewGuid())
                    {
                        ["primaryobjecttypecode"] = "1",
                        ["s.name"] = new AliasedValue("sdkmessage", "name", message.GetAttributeValue<string>("name")),
                        ["sdkmessagefilterid"] = Guid.NewGuid()
                    });
                }
                return filterRows;
            }
            if (fetch.Contains("<entity name='sdkmessage'"))
            {
                if (fetch.Contains("sdkmessagefilter"))
                {
                    foreach (var row in _sdkMessageRows.Entities)
                    {
                        if (!row.Contains("s.primaryobjecttypecode"))
                            row["s.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", new OptionSetValue(1));
                    }
                }
                return _sdkMessageRows;
            }
        }
        return new EntityCollection();
    }

    private string CompileSourceToDll(string sourceCode, string assemblyName)
    {
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        var references = new List<MetadataReference>
        {
            MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "System.Runtime.dll")),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "System.ComponentModel.dll")),
            MetadataReference.CreateFromFile(typeof(Entity).Assembly.Location),
            MetadataReference.CreateFromFile(typeof(DynamicsCrm.DevKit.Shared.Helper).Assembly.Location),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "netstandard.dll"))
        };
        var compilation = CSharpCompilation.Create(
            assemblyName,
            new[] { CSharpSyntaxTree.ParseText(sourceCode) },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        var dllPath = Path.Combine(_workDir, "serverfiles", $"{assemblyName}.dll");
        var result = compilation.Emit(dllPath);
        Assert.IsTrue(result.Success, "Assembly compiled: " + string.Join(" | ", result.Diagnostics.Take(3)));
        return dllPath;
    }

    private void SeedHappyPath()
    {
        _solutionRows.Entities.Add(new Entity("solution", Guid.NewGuid())
        {
            ["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "all")
        });
        _entities.Add(TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name")));
        var messageId = Guid.NewGuid();
        _sdkMessageRows.Entities.Add(new Entity("sdkmessage", messageId)
        {
            ["name"] = "Create",
            ["sdkmessageid"] = messageId
        });
        _sdkMessageRows.Entities.Add(new Entity("sdkmessage", messageId)
        {
            ["name"] = "Update",
            ["sdkmessageid"] = messageId
        });
        _sdkMessageFilterRows.Entities.Add(new Entity("sdkmessagefilter", Guid.NewGuid())
        {
            ["primaryobjecttypecode"] = new OptionSetValue(1),
            ["sdkmessageid"] = new EntityReference("sdkmessage", messageId)
        });
    }

    private TaskServer NewTask() =>
        new(new CommandLineArgs
        {
            Type = "servers",
            Profile = "test",
            ServiceClient = _fake.Client
        },
        new Json
        {
            servers =
            [
                new JsonServer
                {
                    profile = "test",
                    folder = "serverfiles",
                    solution = "TestSolution",
                    includefiles = ["*.dll"],
                    excludefiles = []
                }
            ]
        });

    [TestMethod]
    public async Task RunAsync_UnregisterAttribute_UnregistersPluginType()
    {
        SeedHappyPath();
        var code = """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace ExtraCoveragePlugins
            {
                [CrmPluginRegistration(
                    Unregister = true,
                    Message = "Create",
                    EntityLogicalName = "account",
                    Name = "TestPlugin.Unregister",
                    PluginType = PluginType.Plugin)]
                public class UnregisterPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        CompileSourceToDll(code, "UnregisterAssembly");

        var existingTypeId = Guid.NewGuid();
        _pluginTypeRows.Entities.Add(new Entity("plugintype", existingTypeId)
        {
            ["plugintypeid"] = existingTypeId,
            ["typename"] = "ExtraCoveragePlugins.UnregisterPlugin",
            ["name"] = "ExtraCoveragePlugins.UnregisterPlugin"
        });

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<DeleteRequest>().Any(r => r.Target.LogicalName == "plugintype" && r.Target.Id == existingTypeId),
            "Unregister=true deletes existing plugintype");
    }

    [TestMethod]
    public async Task RunAsync_PluginWithPreImage_RegistersImage()
    {
        SeedHappyPath();
        var code = """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace ExtraCoveragePlugins
            {
                [CrmPluginRegistration(
                    Message = "Update",
                    EntityLogicalName = "account",
                    Name = "TestPlugin.UpdateWithImage",
                    PluginType = PluginType.Plugin,
                    Stage = StageEnum.PostOperation,
                    ExecutionMode = ExecutionModeEnum.Synchronous,
                    FilteringAttributes = "name",
                    Image1Name = "PreImage",
                    Image1Alias = "PreImage",
                    Image1Type = ImageTypeEnum.PreImage,
                    Image1Attributes = "name")]
                public class ImagePlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        CompileSourceToDll(code, "ImageAssembly");

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "sdkmessageprocessingstepimage"),
            "Plugin with PreImage registers sdkmessageprocessingstepimage");
    }

    [TestMethod]
    public async Task RunAsync_CustomApiPlugin_RegistersCustomApi()
    {
        SeedHappyPath();
        var code = """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace ExtraCoveragePlugins
            {
                [CrmPluginRegistration(
                    Message = "devkit_CustomApiTest",
                    EntityLogicalName = "none",
                    Name = "TestPlugin.CustomApi",
                    PluginType = PluginType.CustomApi,
                    Action = PluginStepOperationEnum.Activate)]
                public class CustomApiPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        CompileSourceToDll(code, "CustomApiAssembly");

        var customApiId = Guid.NewGuid();
        _customApiRows.Entities.Add(new Entity("customapi", customApiId)
        {
            ["customapiid"] = customApiId,
            ["uniquename"] = "devkit_CustomApiTest",
            ["plugintypeid"] = null
        });

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<UpdateRequest>().Any(r => r.Target.LogicalName == "customapi"),
            "CustomApi plugin updates plugintypeid on customapi entity");
    }
}
