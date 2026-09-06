using DynamicsCrm.DevKit.Cli.Tasks;
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
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

/// <summary>
/// Coverage for TaskModelBuilder: the IsValidAsync validation ladder and the
/// RunModelBuilderAsync pipeline (real Microsoft PowerPlatform ModelBuilder
/// invoked in-process against an A.Fake IOrganizationServiceAsync2 that answers
/// metadata requests), including the all-entities and entity-filter argument
/// shapes.
/// </summary>
[TestClass]
public sealed class TaskModelBuilderCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_tmb_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(new EntityCollection()));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored, A<CancellationToken>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { /* best effort */ }
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case WhoAmIRequest:
            {
                var who = new WhoAmIResponse();
                who.Results["UserId"] = Guid.NewGuid();
                who.Results["OrganizationId"] = Guid.NewGuid();
                who.Results["BusinessUnitId"] = Guid.NewGuid();
                return who;
            }
            case RetrieveAllEntitiesRequest:
            {
                var allResp = new RetrieveAllEntitiesResponse();
                allResp.Results["EntityMetadata"] = new EntityMetadata[] { MakeAccountMetadata() };
                return allResp;
            }
            case RetrieveEntityRequest:
            {
                var entityResp = new RetrieveEntityResponse();
                entityResp.Results["EntityMetadata"] = MakeAccountMetadata();
                return entityResp;
            }
            default:
                return new OrganizationResponse();
        }
    }

    private static EntityMetadata MakeAccountMetadata()
    {
        var metadata = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account"
        };
        metadata.GetType().GetProperty("PrimaryIdAttribute")!.SetValue(metadata, "accountid");
        metadata.GetType().GetProperty("PrimaryNameAttribute")!.SetValue(metadata, "name");

        var nameAttribute = new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired) };
        nameAttribute.GetType().GetProperty("AttributeType")!.SetValue(nameAttribute, AttributeTypeCode.String);
        var employeesAttribute = new IntegerAttributeMetadata { LogicalName = "employees", SchemaName = "Employees" };
        employeesAttribute.GetType().GetProperty("AttributeType")!.SetValue(employeesAttribute, AttributeTypeCode.Integer);
        var idAttribute = new AttributeMetadata { LogicalName = "accountid", SchemaName = "AccountId" };
        idAttribute.GetType().GetProperty("AttributeType")!.SetValue(idAttribute, AttributeTypeCode.Uniqueidentifier);

        var attributes = new AttributeMetadata[] { nameAttribute, employeesAttribute, idAttribute };
        metadata.GetType().GetProperty("Attributes")!.SetValue(metadata, attributes);
        return metadata;
    }

    private TaskModelBuilder NewTask(JsonModelBuilder? json = null)
    {
        var arg = new CommandLineArgs
        {
            Profile = "MODELBUILDER",
            Type = "modelbuilders"
        };
        var task = new TaskModelBuilder(arg, json ?? new JsonModelBuilder
        {
            @namespace = "DevKit.Crm",
            output = "Xrm.cs",
            entities = "account"
        });
        task.CurrentDirectory = _tempDir;
        task.OrgServiceAsync = _service;
        return task;
    }

    // ──────────────────────────────────────────────
    // IsValidAsync ladder
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task IsValid_NullJson_Throws()
    {
        var arg = new CommandLineArgs { Profile = "MODELBUILDER", Type = "modelbuilders" };
        var task = new TaskModelBuilder(arg, null!);
        task.OrgServiceAsync = _service;
        // production dereferences Json.profile inside the error message when Json is null
        await Assert.ThrowsExactlyAsync<NullReferenceException>(() => task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_NamespacePlaceholder_Fails()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "???", output = "Xrm.cs", entities = "account" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_NamespaceEmpty_Fails()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "  ", output = "Xrm.cs", entities = "account" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_OutputPlaceholder_Fails()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "DevKit.Crm", output = "???", entities = "account" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_OutputEmpty_Fails()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "DevKit.Crm", output = "  ", entities = "account" });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_Valid_True()
    {
        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
    }

    // ──────────────────────────────────────────────
    // RunAsync: ModelBuilder invocation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_EntityFilter_CompletesWithoutError()
    {
        var task = NewTask();
        await task.RunAsync(); // must not throw regardless of ModelBuilder exit code
        Assert.IsFalse(task.IsOk); // TaskModelBuilder never sets IsOk
    }

    [TestMethod]
    public async Task RunAsync_AllEntities_CompletesWithoutError()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "DevKit.Crm", output = "All.cs", entities = "*" });
        await task.RunAsync();
        Assert.IsFalse(task.IsOk);
    }

    [TestMethod]
    public async Task RunAsync_InvalidInput_NothingGenerated()
    {
        var task = NewTask(new JsonModelBuilder { @namespace = "???", output = "Xrm.cs", entities = "account" });
        await task.RunAsync();
        Assert.IsFalse(File.Exists(Path.Combine(_tempDir, "Xrm.cs")));
    }
}
