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
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

[TestClass]
public sealed class TaskServerDataProviderCoverageTests
{
    private static readonly BindingFlags InstancePrivate = BindingFlags.NonPublic | BindingFlags.Instance;
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;
    private bool _dataSourceExistsInMetadata = false;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_tsrv_dp_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        _dataSourceExistsInMetadata = false;

        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call =>
            {
                var req = (OrganizationRequest)call.Arguments[0];
                if (req is RetrieveMetadataChangesRequest)
                {
                    var changes = new RetrieveMetadataChangesResponse();
                    var collection = new EntityMetadataCollection();
                    if (_dataSourceExistsInMetadata)
                    {
                        var meta = new EntityMetadata { LogicalName = "dev_source" };
                        collection.Add(meta);
                    }
                    changes.Results["EntityMetadata"] = collection;
                    return Task.FromResult<OrganizationResponse>(changes);
                }
                if (req is RetrieveVersionRequest)
                {
                    var ver = new RetrieveVersionResponse();
                    ver.Results["Version"] = "9.2.0.0";
                    return Task.FromResult<OrganizationResponse>(ver);
                }
                if (req is CreateRequest)
                {
                    var createResp = new CreateResponse();
                    createResp.Results["id"] = Guid.NewGuid();
                    return Task.FromResult<OrganizationResponse>(createResp);
                }
                return Task.FromResult(new OrganizationResponse());
            });
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private TaskServer CreateTask(string solution = "devkit")
    {
        var json = new Json
        {
            servers = [new JsonServer { profile = "DEV", solution = solution }]
        };
        var args = new CommandLineArgs
        {
            Type = nameof(CliType.servers),
            Profile = "DEV"
        };
        return new TaskServer(args, json)
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service,
            SolutionPrefix = "dev_",
            SolutionId = Guid.NewGuid()
        };
    }

    [TestMethod]
    public async Task IsValidDataProviderAsync_ValidationLadder()
    {
        var task = CreateTask("devkit");
        var isValidMethod = typeof(TaskServer).GetMethod("IsValidDataProviderAsync", InstancePrivate);
        Assert.IsNotNull(isValidMethod);

        // 1. Data source not exist in metadata
        _dataSourceExistsInMetadata = false;
        var events = new List<DataProviderEvent>();
        var r1 = await (Task<bool>)isValidMethod.Invoke(task, [events, "dev_source"])!;
        Assert.IsFalse(r1);

        // Setup data source exists in metadata
        _dataSourceExistsInMetadata = true;

        // 2. Multiple Retrieve events
        var multiRetrieve = new List<DataProviderEvent>
        {
            new() { Message = "Retrieve", DataSource = "dev_source" },
            new() { Message = "Retrieve", DataSource = "dev_source" }
        };
        var r2 = await (Task<bool>)isValidMethod.Invoke(task, [multiRetrieve, "dev_source"])!;
        Assert.IsFalse(r2);

        // 3. Multiple RetrieveMultiple events
        var multiRetrieveMultiple = new List<DataProviderEvent>
        {
            new() { Message = "RetrieveMultiple", DataSource = "dev_source" },
            new() { Message = "RetrieveMultiple", DataSource = "dev_source" }
        };
        var r3 = await (Task<bool>)isValidMethod.Invoke(task, [multiRetrieveMultiple, "dev_source"])!;
        Assert.IsFalse(r3);

        // 4. Valid single Retrieve and single RetrieveMultiple
        var validEvents = new List<DataProviderEvent>
        {
            new() { Message = "Retrieve", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() },
            new() { Message = "RetrieveMultiple", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() }
        };
        var r4 = await (Task<bool>)isValidMethod.Invoke(task, [validEvents, "dev_source"])!;
        Assert.IsTrue(r4);
    }

    [TestMethod]
    public async Task RegisterDataProviderAsync_RegistersAndMapsEvents()
    {
        var task = CreateTask("devkit");
        var registerMethod = typeof(TaskServer).GetMethod("RegisterDataProviderAsync", InstancePrivate);
        Assert.IsNotNull(registerMethod);

        // EntityDataProvider query returns empty -> needs creation
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));

        var events = new List<DataProviderEvent>
        {
            new() { Message = "Retrieve", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() },
            new() { Message = "RetrieveMultiple", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() },
            new() { Message = "Create", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() },
            new() { Message = "Update", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() },
            new() { Message = "Delete", DataSource = "dev_source", PluginTypeId = Guid.NewGuid() }
        };

        await (Task)registerMethod.Invoke(task, [events, "dev_source"])!;
    }

    [TestMethod]
    public async Task DeployManagedIdentityAsync_CreatesWhenNotFound_AndSkipsWhenFound()
    {
        var task = CreateTask("devkit");
        var deployMiMethod = typeof(TaskServer).GetMethod("DeployManagedIdentityAsync", InstancePrivate);
        Assert.IsNotNull(deployMiMethod);

        var tenantId = Guid.NewGuid();
        var appId = Guid.NewGuid();

        // 1. Not found -> creates
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));

        var resTask = (Task<(Guid ManagedIdentityId, Guid ApplicationId)>)deployMiMethod.Invoke(task, [
            "MyAssembly",
            tenantId,
            appId.ToString()
        ])!;
        var (miId, outAppId) = await resTask;
        Assert.AreNotEqual(Guid.Empty, miId);
        Assert.AreEqual(appId, outAppId);

        // 2. Found in Dataverse -> DO_NOTHING
        var existingMi = new Entity("managedidentity", Guid.NewGuid());
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([existingMi])));

        var task2 = CreateTask("devkit");
        var resTask2 = (Task<(Guid ManagedIdentityId, Guid ApplicationId)>)deployMiMethod.Invoke(task2, [
            "MyAssembly",
            tenantId,
            appId.ToString()
        ])!;
        var (miId2, outAppId2) = await resTask2;
        Assert.AreEqual(existingMi.Id, miId2);
        Assert.AreEqual(appId, outAppId2);
    }
}
