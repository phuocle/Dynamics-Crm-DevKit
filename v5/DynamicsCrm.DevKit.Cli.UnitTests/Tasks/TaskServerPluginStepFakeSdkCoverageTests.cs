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

/// <summary>
/// TaskServer full plugin deployment: a plugin DLL (compiled at test time with
/// Roslyn) carrying CrmPluginRegistration attributes flows through GetTypes,
/// plugintype registration, sdkmessage/sdkmessagefilter resolution, and
/// pluginstep creation — all against a FakeSdkClient.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskServerPluginStepFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private string _workDir = null!;
    private string _originalCwd = null!;
    private EntityCollection _solutionRows = null!;
    private EntityCollection _pluginAssemblyRows = null!;
    private EntityCollection _pluginTypeRows = null!;
    private EntityCollection _sdkMessageRows = null!;
    private EntityCollection _sdkMessageFilterRows = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _executes = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _workDir = Path.Combine(Path.GetTempPath(), "devkit-taskserver-step-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(Path.Combine(_workDir, "serverfiles"));
        Directory.SetCurrentDirectory(_workDir);
        _solutionRows = new EntityCollection();
        _pluginAssemblyRows = new EntityCollection();
        _pluginTypeRows = new EntityCollection();
        _sdkMessageRows = new EntityCollection();
        _sdkMessageFilterRows = new EntityCollection();
        _entities.Clear();
        _executes.Clear();
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.COUNT_ExecuteAsync = 0;
        XrmHelper.COUNT_RetrieveMultipleAsync = 0;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
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
                _ => new OrganizationResponse()
            };
        };
    }

    public void Dispose()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        Directory.SetCurrentDirectory(_originalCwd);        _fake.Dispose();
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
            if (fetch.Contains("<entity name='sdkmessagefilter'"))
            {
                // filter fetch reads plain primaryobjecttypecode (string) + aliased s.name
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

    /// <summary>Compile a tiny plugin assembly carrying a CrmPluginRegistration attribute.</summary>
    private string CompilePluginDll()
    {
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        var source = """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace DevKitTestPlugins
            {
                [CrmPluginRegistration(
                    Message = "Create",
                    EntityLogicalName = "account",
                    Name = "TestPlugin.Create",
                    FriendlyName = "Test Step",
                    PluginType = PluginType.Plugin,
                    Stage = StageEnum.PostOperation,
                    ExecutionMode = ExecutionModeEnum.Synchronous,
                    IsolationMode = IsolationModeEnum.Sandbox)]
                public class TestPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
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
            "DevKitTestPlugins",
            new[] { CSharpSyntaxTree.ParseText(source) },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        var dllPath = Path.Combine(_workDir, "serverfiles", "DevKitTestPlugins.dll");
        var result = compilation.Emit(dllPath);
        Assert.IsTrue(result.Success, "test plugin DLL compiled: " + string.Join(" | ", result.Diagnostics.Take(3)));
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
    public async Task RunAsync_PluginWithStep_RegistersTypeAndStep()
    {
        SeedHappyPath();
        CompilePluginDll();

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"),
            "assembly registered");
        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "plugintype"),
            "plugintype registered");
        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "sdkmessageprocessingstep"),
            "pluginstep registered");
    }

    [TestMethod]
    public async Task RunAsync_ExistingType_UpdatesInsteadOfCreates()
    {
        SeedHappyPath();
        CompilePluginDll();
        var existingTypeId = Guid.NewGuid();
        _pluginTypeRows.Entities.Add(new Entity("plugintype", existingTypeId)
        {
            ["plugintypeid"] = existingTypeId,
            ["typename"] = "DevKitTestPlugins.TestPlugin",
            ["name"] = "DevKitTestPlugins.TestPlugin",
            ["friendlyname"] = "TestPlugin",
            ["workflowactivitygroupname"] = "",
            ["description"] = ""
        });

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<UpdateRequest>().Any(r => r.Target.LogicalName == "plugintype"),
            "existing plugintype is updated, not duplicated.");
    }
}
