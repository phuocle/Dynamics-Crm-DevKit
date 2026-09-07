using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

/// <summary>
/// TaskServer deployment pipeline on a FakeSdkClient: profile/config
/// validation, solution existence check, file discovery, and the assembly
/// register/update/no-op flows (OnlyUpdateAssembly mode keeps the fixture
/// focused on the assembly level, skipping plugin step orchestration).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskServerFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private string _workDir = null!;
    private EntityCollection _solutionRows = null!;
    private EntityCollection _pluginAssemblyRows = null!;
    private readonly List<OrganizationRequest> _executes = new();
    private readonly List<EntityMetadata> _entities = new();

    private string _originalCwd = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _workDir = Path.Combine(Path.GetTempPath(), "devkit-taskserver-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(Path.Combine(_workDir, "serverfiles"));
        Directory.SetCurrentDirectory(_workDir);
        _solutionRows = new EntityCollection();
        _pluginAssemblyRows = new EntityCollection();
        _executes.Clear();
        _entities.Clear();
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
        Directory.SetCurrentDirectory(_originalCwd);
        _fake.Dispose();
        Helper.TryDeleteDirectory(_workDir);
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query.Replace('"', '\'');
            if (fetch.Contains("<entity name='solution'") && fetch.Contains("uniquename")) return _solutionRows;
            if (fetch.Contains("<entity name='pluginassembly'")) return _pluginAssemblyRows;
        }
        return new EntityCollection();
    }

    private CommandLineArgs NewArgs(string profile = "test") => new()
    {
        Type = "servers",
        Profile = profile,
        ServiceClient = _fake.Client,
    };

    private Json NewJson(string profile = "test", string folder = "serverfiles", string solution = "TestSolution") => new()
    {
        servers =
        [
            new JsonServer
            {
                profile = profile,
                folder = folder,
                solution = solution,
                includefiles = ["*.dll"],
                excludefiles = []
            }
        ]
    };

    private string CopyTestDll()
    {
        var dllSource = typeof(TaskServerFakeSdkCoverageTests).Assembly.Location;
        var dest = Path.Combine(_workDir, "serverfiles", Path.GetFileName(dllSource));
        File.Copy(dllSource, dest, true);
        return dest;
    }

    private void SeedSolution()
    {
        _solutionRows.Entities.Add(new Entity("solution", Guid.NewGuid())
        {
            ["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "all")
        });
    }

    [TestMethod]
    public async Task RunAsync_ProfileNotFound_CompletesWithoutSdk()
    {
        var task = new TaskServer(NewArgs("nope"), NewJson("test"));
        await task.RunAsync();
        Assert.IsEmpty(_executes, "no SDK call when the profile is unknown.");
    }

    [TestMethod]
    public async Task RunAsync_InvalidFolderAndSolution_FailsValidation()
    {
        var task1 = new TaskServer(NewArgs(), NewJson(folder: "???"));
        await task1.RunAsync();
        Assert.IsEmpty(_executes);

        var task2 = new TaskServer(NewArgs(), NewJson(solution: "???"));
        await task2.RunAsync();
        Assert.IsEmpty(_executes);
    }

    [TestMethod]
    public async Task RunAsync_SolutionNotExist_Fails()
    {
        var task = new TaskServer(NewArgs(), NewJson());
        await task.RunAsync();
        Assert.IsEmpty(_executes, "solution lookup returned zero rows → no mutations.");
    }

    [TestMethod]
    public async Task RunAsync_NoFilesFound_StopsBeforeDeploy()
    {
        SeedSolution();
        var task = new TaskServer(NewArgs(), NewJson());
        await task.RunAsync();
        Assert.IsEmpty(_executes, "no files matched → assembly deploy never runs.");
    }

    [TestMethod]
    public async Task RunAsync_NewAssembly_RegistersViaCreate()
    {
        SeedSolution();
        CopyTestDll();

        var task = new TaskServer(NewArgs(), NewJson());
        await task.RunAsync();

        var create = _executes.OfType<CreateRequest>().FirstOrDefault(r => r.Target.LogicalName == "pluginassembly");
        Assert.IsNotNull(create, "assembly is registered via CreateRequest.");
        Assert.IsTrue(create.Target.Contains("content"));
    }

    [TestMethod]
    public async Task RunAsync_SameContent_NoOperation()
    {
        SeedSolution();
        var dllPath = CopyTestDll();
        var content = Convert.ToBase64String(File.ReadAllBytes(dllPath));
        _pluginAssemblyRows.Entities.Add(new Entity("pluginassembly", Guid.NewGuid())
        {
            ["name"] = Path.GetFileNameWithoutExtension(dllPath),
            ["content"] = content
        });

        var task = new TaskServer(NewArgs(), NewJson());
        await task.RunAsync();

        Assert.IsTrue(!_executes.OfType<CreateRequest>().Any(r => r.Target.LogicalName == "pluginassembly")
            && !_executes.OfType<UpdateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"),
            "identical assembly content → no assembly create/update executed.");
    }

    [TestMethod]
    public async Task RunAsync_ChangedContent_UpdatesAssembly()
    {
        SeedSolution();
        var dllPath = CopyTestDll();
        _pluginAssemblyRows.Entities.Add(new Entity("pluginassembly", Guid.NewGuid())
        {
            ["name"] = Path.GetFileNameWithoutExtension(dllPath),
            ["content"] = Convert.ToBase64String(new byte[] { 1, 2, 3 })
        });

        var task = new TaskServer(NewArgs(), NewJson());
        await task.RunAsync();

        Assert.IsTrue(_executes.OfType<UpdateRequest>().Any(r => r.Target.LogicalName == "pluginassembly"), "changed content → UpdateRequest for the assembly.");
    }
}
