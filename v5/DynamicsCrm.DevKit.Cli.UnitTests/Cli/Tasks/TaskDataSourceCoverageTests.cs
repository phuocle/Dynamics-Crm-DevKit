using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

/// <summary>
/// Coverage for TaskDataSource: the full IsValidAsync validation ladder and the
/// RegisterDataSourceAsync metadata pipeline, driven by an A.Fake
/// IOrganizationServiceAsync2 answering solution lookup, language fetch,
/// CreateEntity/RetrieveEntity/RetrieveAttribute/UpdateAttribute/PublishAll and
/// RetrieveMetadataChanges requests.
/// </summary>
[TestClass]
public sealed class TaskDataSourceCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private int _creates;
    private int _updates;
    private int _publishAll;
    private bool _dataSourceExists;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _creates = 0;
        _updates = 0;
        _publishAll = 0;
        _dataSourceExists = false;

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieveMultiple((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored, A<CancellationToken>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
    }

    private EntityCollection OnRetrieveMultiple(QueryBase query)
    {
        var rows = new EntityCollection();
        if (query is FetchExpression fe)
        {
            if (fe.Query.Contains("entity name='solution'"))
            {
                var solution = new Entity("solution", Guid.NewGuid())
                {
                    ["solutionid"] = Guid.NewGuid()
                };
                solution.FormattedValues["p.customizationprefix"] = "dev";
                solution["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
                rows.Entities.Add(solution);
            }
            else if (fe.Query.Contains("entity name='organization'"))
            {
                rows.Entities.Add(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
            }
        }
        return rows;
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case CreateEntityRequest createEntity:
            {
                _creates++;
                var resp = new CreateEntityResponse();
                resp.Results["EntityId"] = Guid.NewGuid();
                return resp;
            }
            case RetrieveEntityRequest:
            {
                var meta = new EntityMetadata { LogicalName = "new_datasource" };
                var id = new AttributeMetadata { LogicalName = "new_datasourceid", SchemaName = "New_DataSourceId" };
                var name = new StringAttributeMetadata { LogicalName = "new_datasourcename", SchemaName = "New_DataSourceName" };
                var idBase = (AttributeMetadata)id;
                typeof(AttributeMetadata).GetProperty("AttributeType")!.SetValue(idBase, AttributeTypeCode.Uniqueidentifier);
                typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(meta, new AttributeMetadata[] { idBase, name });
                var resp = new RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta;
                return resp;
            }
            case RetrieveAttributeRequest retrieveAttribute:
            {
                var attr = retrieveAttribute.LogicalName!.EndsWith("id")
                    ? new AttributeMetadata { LogicalName = retrieveAttribute.LogicalName, SchemaName = retrieveAttribute.LogicalName }
                    : (AttributeMetadata)new StringAttributeMetadata { LogicalName = retrieveAttribute.LogicalName, SchemaName = retrieveAttribute.LogicalName };
                var resp = new RetrieveAttributeResponse();
                resp.Results["AttributeMetadata"] = attr;
                return resp;
            }
            case UpdateAttributeRequest:
                _updates++;
                return new UpdateAttributeResponse();
            case PublishAllXmlRequest:
                if (_failPublishAll) throw new InvalidOperationException("publish down");
                _publishAll++;
                return new PublishAllXmlResponse();
            case RetrieveMetadataChangesRequest:
            {
                var resp = new RetrieveMetadataChangesResponse();
                var collection = new EntityMetadataCollection();
                if (_dataSourceExists)
                {
                    var meta = new EntityMetadata { LogicalName = "dev_weathersource" };
                    resp.Results["EntityMetadata"] = collection;
                    collection.Add(meta);
                }
                else
                {
                    resp.Results["EntityMetadata"] = collection;
                }
                return resp;
            }
            default:
                return new OrganizationResponse();
        }
    }

    private bool _failPublishAll;

    private TaskDataSource NewTask(JsonDataSource? json = null, string profile = "DATASOURCE")
    {
        var arg = new CommandLineArgs
        {
            Profile = profile,
            Type = "datasources"
        };
        var task = new TaskDataSource(arg, json ?? new JsonDataSource
        {
            solution = "DevKit",
            displayname = "Weather Source",
            pluralname = "Weather Sources"
        });
        task.OrgServiceAsync = _service;
        return task;
    }

    // ──────────────────────────────────────────────
    // IsValidAsync ladder
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task IsValid_EmptySolution_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "", displayname = "Weather", pluralname = "Weathers" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_PlaceholderSolution_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "???", displayname = "Weather", pluralname = "Weathers" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_EmptyDisplayName_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "DevKit", displayname = "", pluralname = "Weathers" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_EmptyPluralName_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "DevKit", displayname = "Weather", pluralname = "" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_InvalidDisplayNameCharacters_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "DevKit", displayname = "Weather-Source!", pluralname = "Weathers" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_InvalidPluralNameCharacters_Fails()
    {
        var task = NewTask(new JsonDataSource { solution = "DevKit", displayname = "Weather", pluralname = "Weathers@1" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_SolutionNotFound_Fails()
    {
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(new EntityCollection());
        var task = NewTask();
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_DataSourceNameAlreadyExists_Fails()
    {
        _dataSourceExists = true;
        var task = NewTask();
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_AllGood_PassesAndCapturesSolution()
    {
        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
        Assert.IsTrue(task.IsOk);
        Assert.AreNotEqual(Guid.Empty, task.SolutionId);
        Assert.AreEqual("dev_", task.SolutionPrefix);
    }

    // ──────────────────────────────────────────────
    // RunAsync / RegisterDataSourceAsync
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_InvalidInput_DoesNotCreate()
    {
        var task = NewTask(new JsonDataSource { solution = "", displayname = "Weather", pluralname = "Weathers" });
        await task.RunAsync();
        Assert.AreEqual(0, _creates);
    }

    [TestMethod]
    public async Task RunAsync_Valid_FullMetadataPipeline()
    {
        var task = NewTask();
        await task.RunAsync();
        Assert.AreEqual(1, _creates);
        Assert.AreEqual(2, _updates);
        Assert.AreEqual(1, _publishAll);
    }

    [TestMethod]
    public async Task RegisterDataSource_CreatesEntityWithSolutionParameter()
    {
        await NewTask().RegisterDataSourceAsync();
        Assert.AreEqual(1, _creates);
        Assert.AreEqual(2, _updates);
    }

    [TestMethod]
    public async Task RegisterDataSource_PublishFailure_IsSwallowed()
    {
        _failPublishAll = true;
        await NewTask().RegisterDataSourceAsync();
        Assert.AreEqual(1, _creates);
        Assert.AreEqual(2, _updates);
        Assert.AreEqual(0, _publishAll);
    }

    [TestMethod]
    public async Task RegisterDataSource_RetrieveAttributeRequests_UseExpectedNames()
    {
        RetrieveAttributeRequest? lastAttribute = null;
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .Invokes(call => { if (call.Arguments[0] is RetrieveAttributeRequest r) lastAttribute = r; })
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));

        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
        await task.RegisterDataSourceAsync();
        Assert.IsNotNull(lastAttribute);
        Assert.AreEqual("dev_weathersourcename", lastAttribute!.LogicalName);
    }
}
