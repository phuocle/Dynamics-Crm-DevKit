using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared.Models;
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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
[DoNotParallelize]
public sealed class TaskServerDataProviderAndManagedIdentityCoverageTests
{
    private FakeSdkClient _fake = null!;
    private string _workDir = null!;
    private string _originalCwd = null!;
    private readonly List<OrganizationRequest> _executes = new();
    private readonly List<Entity> _records = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _workDir = Path.Combine(Path.GetTempPath(), "devkit-taskserver-dp-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_workDir);
        Directory.SetCurrentDirectory(_workDir);
        _executes.Clear();
        _records.Clear();

        _fake.OnRetrieveMultiple = query =>
        {
            if (query is FetchExpression fe)
            {
                var fetch = fe.Query;
                if (fetch.Contains("entity name='entitydataprovider'"))
                {
                    return new EntityCollection(_records.FindAll(e => e.LogicalName == "entitydataprovider"));
                }
                if (fetch.Contains("entity name='managedidentity'"))
                {
                    return new EntityCollection(_records.FindAll(e => e.LogicalName == "managedidentity"));
                }
                if (fetch.Contains("entity name='sdkmessageprocessingstepimage'"))
                {
                    return new EntityCollection(_records.FindAll(e => e.LogicalName == "sdkmessageprocessingstepimage"));
                }
            }
            return new EntityCollection();
        };

        _fake.OnExecute = request =>
        {
            _executes.Add(request);
            if (request is Microsoft.Crm.Sdk.Messages.RetrieveVersionRequest)
            {
                return new Microsoft.Crm.Sdk.Messages.RetrieveVersionResponse
                {
                    Results = { ["Version"] = "9.2.0.0" }
                };
            }
            if (request is Microsoft.Xrm.Sdk.Messages.RetrieveMetadataChangesRequest)
            {
                var entityMetadata = new EntityMetadata();
                typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))?.SetValue(entityMetadata, "devkit_mydata");
                var emc = new EntityMetadataCollection { entityMetadata };
                return new Microsoft.Xrm.Sdk.Messages.RetrieveMetadataChangesResponse
                {
                    Results = { ["EntityMetadata"] = emc }
                };
            }
            if (request is CreateRequest cr)
            {
                var id = Guid.NewGuid();
                cr.Target.Id = id;
                _records.Add(cr.Target);
                return new CreateResponse { Results = { ["id"] = id } };
            }
            if (request is UpdateRequest ur)
            {
                return new UpdateResponse();
            }
            return new OrganizationResponse();
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        Directory.SetCurrentDirectory(_originalCwd);
        _fake.Dispose();
        if (Directory.Exists(_workDir))
        {
            try { Directory.Delete(_workDir, true); } catch { }
        }
    }

    private TaskServer CreateTaskServer()
    {
        var arg = new CommandLineArgs
        {
            Type = "servers",
            Profile = "DEBUG",
            ServiceClient = _fake.Client
        };
        var json = new Json
        {
            servers = new List<JsonServer>
            {
                new JsonServer
                {
                    profile = "DEBUG",
                    solution = "devkit_solution",
                    folder = "serverfiles"
                }
            }
        };
        var taskServer = new TaskServer(arg, json)
        {
            SolutionId = Guid.NewGuid(),
            SolutionPrefix = "devkit_"
        };
        return taskServer;
    }

    [TestMethod]
    public async Task IsValidDataProviderAsync_ValidationChecks()
    {
        var server = CreateTaskServer();
        var isValidMethod = typeof(TaskServer).GetMethod("IsValidDataProviderAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var events = new List<DataProviderEvent>
        {
            new DataProviderEvent { Message = "Retrieve", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() },
            new DataProviderEvent { Message = "RetrieveMultiple", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() }
        };

        // Prefix mismatch
        var taskInvalidPrefix = (Task<bool>)isValidMethod.Invoke(server, new object[] { events, "other_mydata" })!;
        var res1 = await taskInvalidPrefix;
        Assert.IsFalse(res1);

        // Valid prefix and single retrieve/retrievemultiple
        var taskValid = (Task<bool>)isValidMethod.Invoke(server, new object[] { events, "devkit_mydata" })!;
        var res2 = await taskValid;
        Assert.IsTrue(res2);

        // Multiple Retrieve events
        var eventsDup = new List<DataProviderEvent>
        {
            new DataProviderEvent { Message = "Retrieve", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() },
            new DataProviderEvent { Message = "Retrieve", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() },
            new DataProviderEvent { Message = "RetrieveMultiple", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() }
        };
        var taskDup = (Task<bool>)isValidMethod.Invoke(server, new object[] { eventsDup, "devkit_mydata" })!;
        var res3 = await taskDup;
        Assert.IsFalse(res3);
    }

    [TestMethod]
    public async Task RegisterDataProviderAsync_RegistersNewDataProvider()
    {
        var server = CreateTaskServer();
        var registerMethod = typeof(TaskServer).GetMethod("RegisterDataProviderAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var events = new List<DataProviderEvent>
        {
            new DataProviderEvent { Message = "Retrieve", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() },
            new DataProviderEvent { Message = "RetrieveMultiple", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() },
            new DataProviderEvent { Message = "Create", DataSource = "devkit_mydata", PluginTypeId = Guid.NewGuid() }
        };

        var task = (Task)registerMethod.Invoke(server, new object[] { events, "devkit_mydata" })!;
        await task;

        Assert.IsTrue(_executes.Count > 0);
        var created = _records.Find(e => e.LogicalName == "entitydataprovider");
        Assert.IsNotNull(created);
        Assert.AreEqual("devkit_mydata", created.GetAttributeValue<string>("name"));
    }

    [TestMethod]
    public async Task DeployManagedIdentityAsync_CreatesManagedIdentityRecords()
    {
        var server = CreateTaskServer();
        var deployMethod = typeof(TaskServer).GetMethod("DeployManagedIdentityAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var tenantId = Guid.NewGuid();
        var appId1 = Guid.NewGuid().ToString();
        var appId2 = Guid.NewGuid().ToString();

        var task = (Task<(Guid ManagedIdentityId, Guid ApplicationId)>)deployMethod.Invoke(
            server, new object[] { "MyAssembly", tenantId, $"{appId1};{appId2}" })!;
        var (managedIdentityId, applicationId) = await task;

        Assert.AreNotEqual(Guid.Empty, managedIdentityId);
        Assert.AreEqual(Guid.Parse(appId1), applicationId);
        Assert.IsTrue(_records.Exists(e => e.LogicalName == "managedidentity"));
    }

    [TestMethod]
    public void GetDynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute_NullWhenNoAttribute()
    {
        var server = CreateTaskServer();
        var getAttrMethod = typeof(TaskServer).GetMethod("GetDynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var currentAssembly = Assembly.GetExecutingAssembly();
        var attr = getAttrMethod.Invoke(server, new object[] { currentAssembly });
        Assert.IsNull(attr);
    }

    [TestMethod]
    public async Task DeployPluginImageAsync_CreatesPluginImage()
    {
        var server = CreateTaskServer();
        var deployImageMethod = typeof(TaskServer).GetMethod("DeployPluginImageAsync",
            BindingFlags.NonPublic | BindingFlags.Instance,
            null,
            new[] { typeof(string), typeof(string), typeof(string), typeof(ImageTypeEnum), typeof(string), typeof(Guid), typeof(string) },
            null)!;

        var stepId = Guid.NewGuid();
        var task = (Task<Guid>)deployImageMethod.Invoke(server, new object[] {
            "Update", "PreImage", "pre_image", ImageTypeEnum.PreImage, "name,telephone1", stepId, "StepName"
        })!;
        var imageId = await task;

        Assert.AreNotEqual(Guid.Empty, imageId);
        Assert.IsTrue(_records.Exists(e => e.LogicalName == "sdkmessageprocessingstepimage"));
    }
}
