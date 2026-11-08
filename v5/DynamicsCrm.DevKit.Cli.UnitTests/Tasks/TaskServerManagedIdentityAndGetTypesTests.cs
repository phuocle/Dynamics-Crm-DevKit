using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

/// <summary>
/// Wave-2 TaskServer coverage that the sibling suites do not touch: the
/// managed-identity assembly attribute path (IsNeedSignAssembly's validation
/// ladder plus the CustomAttributeData walk of
/// DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute), the sign-failure
/// stop inside DeployFilesAsync, the empty-folder and multi-file RunAsync
/// branches, the External isolation-mode mapping, the
/// ReflectionTypeLoadException recovery in GetTypes (a plugin DLL whose
/// dependency DLL was deleted from disk — which also drives the
/// CurrentDomain_AssemblyResolve handler), and the DataProvider registration
/// loop inside DeployFileAsync.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskServerManagedIdentityAndGetTypesTests
{
    private FakeSdkClient _fake = null!;
    private string _workDir = null!;
    private string _originalCwd = null!;
    private EntityCollection _solutionRows = null!;
    private EntityCollection _pluginAssemblyRows = null!;
    private EntityCollection _pluginTypeRows = null!;
    private EntityCollection _sdkMessageRows = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _executes = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _workDir = Path.Combine(Path.GetTempPath(), "devkit-taskserver-mi-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(Path.Combine(_workDir, "serverfiles"));
        Directory.SetCurrentDirectory(_workDir);
        _solutionRows = new EntityCollection();
        _pluginAssemblyRows = new EntityCollection();
        _pluginTypeRows = new EntityCollection();
        _sdkMessageRows = new EntityCollection();
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
                RetrieveVersionRequest => new RetrieveVersionResponse { Results = { ["Version"] = "9.2.0.0" } },
                RetrieveMetadataChangesRequest => new RetrieveMetadataChangesResponse
                {
                    // IsExistDataSourceAsync probes the virtual table backed by
                    // the DevKit data provider: solution prefix 'dev' + the
                    // attribute's DataSource 'mydata'.
                    Results = { ["EntityMetadata"] = new EntityMetadataCollection { TestMetadata.Entity("dev_mydata") } }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
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
            if (fetch.Contains("<entity name='sdkmessagefilter'"))
            {
                // The sdkmessagefilter fetch reads plain primaryobjecttypecode
                // (string) plus the aliased s.name of the linked sdkmessage.
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
                // The sdkmessage fetch with the sdkmessagefilter link reads the
                // aliased s.primaryobjecttypecode — add it like the real org does.
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

    // ── compilation helpers ─────────────────────────────────────────────

    private static List<MetadataReference> BaseReferences()
    {
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        return new List<MetadataReference>
        {
            MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "System.Runtime.dll")),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "System.ComponentModel.dll")),
            MetadataReference.CreateFromFile(typeof(Entity).Assembly.Location),
            MetadataReference.CreateFromFile(typeof(DynamicsCrm.DevKit.Shared.Helper).Assembly.Location),
            MetadataReference.CreateFromFile(Path.Combine(runtimeDir, "netstandard.dll"))
        };
    }

    private string CompileDll(string source, string dllName, IEnumerable<MetadataReference>? extra = null)
    {
        var references = BaseReferences();
        if (extra != null) references.AddRange(extra);
        var compilation = CSharpCompilation.Create(
            Path.GetFileNameWithoutExtension(dllName),
            new[] { CSharpSyntaxTree.ParseText(source) },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        var dllPath = Path.Combine(_workDir, "serverfiles", dllName);
        var result = compilation.Emit(dllPath);
        Assert.IsTrue(result.Success, dllName + " compiled: " + string.Join(" | ", result.Diagnostics.Take(3)));
        return dllPath;
    }

    private const string PluginSource = """
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
                IsolationMode = ISOLATION)]
            public class TestPlugin : IPlugin
            {
                public void Execute(IServiceProvider serviceProvider) { }
            }
        }
        """;

    private string CompilePluginDll(string isolationMode = "IsolationModeEnum.Sandbox", string dllName = "DevKitTestPlugins.dll")
        => CompileDll(PluginSource.Replace("ISOLATION", isolationMode), dllName);

    private string CompileWithManagedIdentity(string tenantId, string applicationIds, string certificateFileName)
    {
        var source = $$"""
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            [assembly: DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute(
                TenantId = "{{tenantId}}",
                ApplicationIds = "{{applicationIds}}",
                CertificateFileName = "{{certificateFileName}}")]

            namespace DevKitTestPlugins
            {
                [CrmPluginRegistration(
                    Message = "Create",
                    EntityLogicalName = "account",
                    Name = "TestPlugin.Create",
                    FriendlyName = "Test Step",
                    PluginType = PluginType.Plugin,
                    Stage = StageEnum.PostOperation,
                    ExecutionMode = ExecutionModeEnum.Synchronous)]
                public class TestPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        return CompileDll(source, $"DevKitTestPlugins.{Guid.NewGuid():N}.dll");
    }

    // ── task helpers ────────────────────────────────────────────────────

    private TaskServer NewTask()
    {
        var arg = new CommandLineArgs
        {
            Type = "servers",
            Profile = "test",
            ServiceClient = _fake.Client
        };
        return new TaskServer(arg, new Json
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
        })
        {
            SolutionId = Guid.NewGuid(),
            SolutionPrefix = "dev_"
        };
    }

    private static object? InvokeIsNeedSignAssembly(TaskServer task, string dllPath)
    {
        var method = typeof(TaskServer).GetMethod("IsNeedSignAssembly", BindingFlags.NonPublic | BindingFlags.Instance)!;
        return method.Invoke(task, new object?[] { dllPath });
    }

    private static (bool needSign, string error) ToTuple(object? result)
    {
        var tuple = (ITuple)result!;
        return ((bool)tuple[0]!, (string)tuple[1]!);
    }

    private void SeedHappyPath()
    {
        _solutionRows.Entities.Add(new Entity("solution", Guid.NewGuid())
        {
            // IsExistSolutionAsync appends '_' to the publisher prefix:
            // 'dev' → SolutionPrefix 'dev_' → the data source 'dev_mydata'.
            ["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev")
        });
        _entities.Add(TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name")));
        var messageId = Guid.NewGuid();
        _sdkMessageRows.Entities.Add(new Entity("sdkmessage", messageId)
        {
            ["name"] = "Create",
            ["sdkmessageid"] = messageId
        });
    }

    // ── tests ───────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_NoFiles_ReportsErrorAndEnds()
    {
        // The files.Count == 0 branch: the folder holds no matching file.
        await NewTask().RunAsync();
        Assert.IsFalse(_executes.OfType<CreateRequest>().Any() || _executes.OfType<UpdateRequest>().Any(),
            "nothing was deployed.");
    }

    [TestMethod]
    public async Task RunAsync_MultipleFiles_ListsEachFile()
    {
        // files.Count > 1: the per-file listing runs before deployment.
        CompilePluginDll("IsolationModeEnum.Sandbox", "DevKitTestPlugins.dll");
        CompilePluginDll("IsolationModeEnum.External", "DevKitTestPlugins2.dll");
        SeedHappyPath();

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"),
            "assemblies registered.");
    }

    [TestMethod]
    public async Task RunAsync_ExternalIsolation_MapsToSandboxValue3()
    {
        // GetIsolationMode: IsolationModeEnum.External → ("Sandbox", 3) —
        // the branch after the None and Sandbox checks.
        CompilePluginDll("IsolationModeEnum.External");
        SeedHappyPath();

        await NewTask().RunAsync();

        var assemblyCreate = _executes.OfType<CreateRequest>().First(r => r.Target.LogicalName == "pluginassembly");
        Assert.AreEqual(3, assemblyCreate.Target.GetAttributeValue<OptionSetValue>("isolationmode")?.Value,
            "External maps to the org's Sandbox value 3.");
    }

    // ── managed identity attribute ──────────────────────────────────────

    [TestMethod]
    public void IsNeedSignAssembly_MissingTenantId_ReportsError()
    {
        var dll = CompileWithManagedIdentity("", "app-id", "cert.pfx");
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsFalse(needSign);
        StringAssert.Contains(error, "TenantId");
    }

    [TestMethod]
    public void IsNeedSignAssembly_MissingApplicationIds_ReportsError()
    {
        var dll = CompileWithManagedIdentity("tenant", "", "cert.pfx");
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsFalse(needSign);
        StringAssert.Contains(error, "ApplicationId");
    }

    [TestMethod]
    public void IsNeedSignAssembly_MissingCertificateFileName_ReportsError()
    {
        var dll = CompileWithManagedIdentity("tenant", "app-id", "");
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsFalse(needSign);
        StringAssert.Contains(error, "CertificateFile");
    }

    [TestMethod]
    public void IsNeedSignAssembly_CertificateNotPfx_ReportsError()
    {
        var dll = CompileWithManagedIdentity("tenant", "app-id", "cert.txt");
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsFalse(needSign);
        StringAssert.Contains(error, ".pfx");
    }

    [TestMethod]
    public void IsNeedSignAssembly_CertificateFileMissing_ReportsError()
    {
        var dll = CompileWithManagedIdentity("tenant", "app-id", "absent.pfx");
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsFalse(needSign);
        StringAssert.Contains(error, "CertificateFile not exist");
    }

    [TestMethod]
    public void IsNeedSignAssembly_ValidAttribute_NeedsSign()
    {
        // The certificate file exists, so the ladder passes and the caller
        // proceeds to the (failing) sign step. This is the path that reads
        // the attribute's named arguments through CustomAttributeData.
        var dll = CompileWithManagedIdentity("tenant", "app-id", "fake.pfx");
        File.WriteAllBytes(Path.Combine(_workDir, "fake.pfx"), new byte[] { 0x01, 0x02, 0x03, 0x04 });
        var (needSign, error) = ToTuple(InvokeIsNeedSignAssembly(NewTask(), dll));
        Assert.IsTrue(needSign);
        Assert.AreEqual(string.Empty, error);
    }

    [TestMethod]
    public async Task RunAsync_ManagedIdentity_InvalidPfx_SignFailsAndDeployStops()
    {
        // The assembly carries a well-formed managed identity attribute and a
        // certificate file exists — but its bytes are not a PFX, so the sign
        // step fails and the deployment of that assembly is skipped.
        var dll = CompileWithManagedIdentity("tenant", "app-id", "fake.pfx");
        File.WriteAllBytes(Path.Combine(_workDir, "fake.pfx"), new byte[] { 0x01, 0x02, 0x03, 0x04 });
        SeedHappyPath();

        await NewTask().RunAsync();

        Assert.IsFalse(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"),
            "the assembly was not deployed because signing failed.");
    }

    // ── GetTypes recovery + AssemblyResolve ─────────────────────────────

    [TestMethod]
    public async Task GetTypes_MissingDependency_RecoversThroughReflectionTypeLoadException()
    {
        // dep.dll defines the base class; plugin.dll derives from it. After
        // deleting dep.dll the plugin type cannot load: DefinedTypes throws
        // ReflectionTypeLoadException, the handler salvages the loaded types
        // (none carry the attribute) and the deployment ends quietly instead
        // of crashing. CurrentDomain_AssemblyResolve fires for the missing
        // dependency on the way.
        var depSource = """
            using Microsoft.Xrm.Sdk;
            using System;

            namespace DevKitTestDeps
            {
                public class BasePlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        var depDll = CompileDll(depSource, "DevKitTestDeps.dll");
        var pluginSource = """
            using DynamicsCrm.DevKit.Shared.Models;
            using DevKitTestDeps;
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
                    ExecutionMode = ExecutionModeEnum.Synchronous)]
                public class TestPlugin : BasePlugin
                {
                }
            }
            """;
        CompileDll(pluginSource, "DevKitTestPlugins.dll",
            new[] { MetadataReference.CreateFromFile(depDll) });
        File.Delete(depDll);
        SeedHappyPath();

        await NewTask().RunAsync();

        Assert.IsFalse(_executes.OfType<CreateRequest>().Any(r =>
                r.Target.LogicalName is "plugintype" or "pluginassembly"),
            "the unloadable assembly produced no registrations.");
    }

    // ── DataProvider registration loop ──────────────────────────────────

    private string CompileDataProviderDll()
    {
        var source = """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace DevKitTestPlugins
            {
                [CrmPluginRegistration(
                    Message = "RetrieveMultiple",
                    EntityLogicalName = "",
                    Name = "TestDP.RetrieveMultiple",
                    FriendlyName = "Test DP",
                    PluginType = PluginType.DataProvider,
                    DataSource = "mydata")]
                public class TestDataProvider : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """;
        return CompileDll(source, "DevKitTestPlugins.dll");
    }

    [TestMethod]
    public async Task RunAsync_DataProvider_RegistersTheEntityDataProvider()
    {
        CompileDataProviderDll();
        SeedHappyPath();

        await NewTask().RunAsync();

        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"),
            "the assembly registered.");
        Assert.IsTrue(_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "entitydataprovider"),
            "the data provider event loop reached RegisterDataProviderAsync.");
    }

    // NOTE (skipped branches):
    // - DeployManagedIdentityAsync's post-sign bind blocks (TaskServer
    //   ~264-295 and ~414-429) run only after a SUCCESSFUL code sign, which
    //   needs a real PFX and the real signing tool against a timestamp URL.
    // - GetTypes' generic `catch (Exception)` around type enumeration
    //   (~1999-2003) and IsNeedSignAssembly's successful-sign path are
    //   unreachable for the same reason.
    // - CurrentDomain_AssemblyResolve's local-file and Framework64 fallbacks
    //   (~2068-2090) need a resolvable dependency next to the plugin DLL that
    //   the default load context cannot find — not deterministically
    //   reproducible next to a running test host; the null-return path is
    //   covered by the deleted-dependency test above.
    // - The `.ThenBy` fallback (type.FullName when attributes are empty) is
    //   dead: every type in _AttributesCache carries at least one attribute.
    // - IsValidTypes' multi-attribute Workflow error needs a type with two
    //   CrmPluginRegistration attributes where one is a Workflow — the
    //   AllowMultiple attribute combination is covered by the sibling suite.
}
