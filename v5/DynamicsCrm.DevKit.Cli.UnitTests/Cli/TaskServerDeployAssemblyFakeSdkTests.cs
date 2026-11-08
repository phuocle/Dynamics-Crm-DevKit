using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// TaskServer.DeployAssemblyAsync against a FakeSdkClient: the create path
/// (isolation/source-type defaults), the content-equal do-nothing update,
/// the changed-content update, the multi-row abort, and the isolation /
/// source-type values driven from the cached CrmPluginRegistration
/// attributes. The managed-identity bind tail and the ReflectionTypeLoad
/// fallback of GetTypes need a signed certificate or a deliberately broken
/// assembly — unreachable here.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskServerDeployAssemblyFakeSdkTests
{
    private FakeSdkClient _fake = null!;
    private EntityCollection _assemblyRows = null!;
    private readonly List<OrganizationRequest> _executes = new();
    private string _assemblyFile = null!;
    private string _work = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _work = Path.Combine(Path.GetTempPath(), "DevKitCli_DeployAssembly", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_work);
        _assemblyFile = typeof(TaskServerDeployAssemblyFakeSdkTests).Assembly.Location;
        _assemblyRows = new EntityCollection();
        _executes.Clear();
        XrmHelper.COUNT_ExecuteAsync = 0;
        XrmHelper.COUNT_RetrieveMultipleAsync = 0;
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is FetchExpression fetch && fetch.Query.Contains("'pluginassembly'"))
                return _assemblyRows;
            return new EntityCollection();
        };
        _fake.OnExecute = request =>
        {
            _executes.Add(request);
            return request switch
            {
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                _ => new OrganizationResponse()
            };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
        if (Directory.Exists(_work)) Directory.Delete(_work, true);
    }

    private TaskServer NewTask()
    {
        var task = new TaskServer(
            new CommandLineArgs { Type = "servers", Profile = "test", ServiceClient = _fake.Client },
            new Json
            {
                servers =
                [
                    new JsonServer { profile = "test", folder = "serverfiles", solution = "TestSolution" }
                ]
            });
        task.CurrentDirectory = _work;
        return task;
    }

    private async Task<Guid?> DeployAsync(TaskServer task)
    {
        var method = typeof(TaskServer).GetMethod("DeployAssemblyAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;
        return await (Task<Guid?>)method.Invoke(task, new object?[] { _assemblyFile, DeployFileType.Dll })!;
    }

    private static Entity AssemblyRow(string content, Guid? id = null) => new("pluginassembly", id ?? Guid.NewGuid())
    {
        ["content"] = content,
        ["name"] = "DynamicsCrm.DevKit.Cli.UnitTests"
    };

    [TestMethod]
    public async Task DeployAssembly_NewAssembly_CreatesWithDefaultIsolationAndSourceType()
    {
        var task = NewTask();
        var id = await DeployAsync(task);

        Assert.IsNotNull(id, "the create path returned the new assembly id.");
        var create = _executes.OfType<CreateRequest>().Single(r => r.Target.LogicalName == "pluginassembly");
        Assert.AreEqual("TestSolution", create.Parameters["SolutionUniqueName"]);
        Assert.AreEqual(2, ((OptionSetValue)create.Target["isolationmode"]).Value,
            "no cached attributes — the Sandbox default applies.");
        Assert.AreEqual(0, ((OptionSetValue)create.Target["sourcetype"]).Value,
            "no cached attributes — the Database default applies.");
    }

    [TestMethod]
    public async Task DeployAssembly_CachedAttributes_DriveIsolationAndSourceType()
    {
        var task = NewTask();
        var attributes = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer)
            .GetField("_AttributesCache", BindingFlags.NonPublic | BindingFlags.Instance)!.GetValue(task)!;
        attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>(
            "Some.Type",
            new List<CrmPluginRegistrationAttribute>
            {
                new() { IsolationMode = IsolationModeEnum.None, SourceType = SourceTypeEnum.Disk }
            }));

        await DeployAsync(task);

        var create = _executes.OfType<CreateRequest>().Single(r => r.Target.LogicalName == "pluginassembly");
        Assert.AreEqual(1, ((OptionSetValue)create.Target["isolationmode"]).Value, "IsolationMode None → 1.");
        Assert.AreEqual(1, ((OptionSetValue)create.Target["sourcetype"]).Value, "SourceType Disk → 1.");
    }

    [TestMethod]
    public async Task DeployAssembly_SameContent_DoesNothing()
    {
        var task = NewTask();
        var existingId = Guid.NewGuid();
        _assemblyRows.Entities.Add(AssemblyRow(Convert.ToBase64String(await File.ReadAllBytesAsync(_assemblyFile)), existingId));

        var id = await DeployAsync(task);

        Assert.AreEqual(existingId, id, "the existing assembly id is returned unchanged.");
        Assert.IsFalse(_executes.Any(r => r is CreateRequest or UpdateRequest),
            "identical content triggers no writes.");
    }

    [TestMethod]
    public async Task DeployAssembly_ChangedContent_Updates()
    {
        var task = NewTask();
        var existingId = Guid.NewGuid();
        _assemblyRows.Entities.Add(AssemblyRow("stale-content", existingId));

        var id = await DeployAsync(task);

        Assert.AreEqual(existingId, id);
        var update = _executes.OfType<UpdateRequest>().Single(r => r.Target.LogicalName == "pluginassembly");
        // The product targets the row through the primary-key attribute —
        // Entity.Id itself stays empty.
        Assert.AreEqual(existingId, update.Target.GetAttributeValue<Guid>("pluginassemblyid"));
        Assert.AreEqual("TestSolution", update.Parameters["SolutionUniqueName"]);
    }

    [TestMethod]
    public async Task DeployAssembly_MultipleRows_AbortsTheDeployment()
    {
        var task = NewTask();
        _assemblyRows.Entities.Add(AssemblyRow("a"));
        _assemblyRows.Entities.Add(AssemblyRow("b"));

        var id = await DeployAsync(task);

        Assert.IsNull(id, "more than one plugin assembly row stops the deployment.");
        Assert.IsEmpty(_executes, "no create or update ran.");
    }
}
