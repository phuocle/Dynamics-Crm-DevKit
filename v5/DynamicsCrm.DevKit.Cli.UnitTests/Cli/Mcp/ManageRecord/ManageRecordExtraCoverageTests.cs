using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRecord;

[TestClass]
public sealed class ManageRecordExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _requests = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _requests.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        var contactMeta = TestMetadata.Entity("contact", "Contact", TestMetadata.String("fullname", "Full Name"));
        _entities.Add(accountMeta);
        _entities.Add(contactMeta);

        _fake.OnExecute = request =>
        {
            _requests.Add(request);
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                RetrieveEntityRequest req => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = req.LogicalName == "contact" ? contactMeta : accountMeta }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                DeleteRequest => new DeleteResponse(),
                AssociateRequest => new AssociateResponse(),
                DisassociateRequest => new DisassociateResponse(),
                _ => new OrganizationResponse()
            };
        };
        _fake.OnCreate = entity => Guid.NewGuid();
        _fake.OnUpdate = entity => { };
        _fake.OnDelete = (entityName, id) => { };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            var entity = new Entity(entityName, id);
            entity["name"] = "Contoso Live";
            return entity;
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private ManageRecordTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: false));

    [TestMethod]
    public void ManageRecord_LiveCreateReadUpdateDelete_ExecutesSuccessfully()
    {
        var tool = CreateTool(dryRun: false);
        var recordId = Guid.NewGuid().ToString("D");

        var createResult = tool.manage_record(action: "create", entity_name: "account", fields_json: "{\"name\":\"Contoso Live\"}");
        Assert.IsFalse(createResult.IsError == true, createResult.GetText());
        StringAssert.Contains(createResult.GetText(), "Created account");

        var readResult = tool.manage_record(action: "read", entity_name: "account", record_id: recordId);
        Assert.IsFalse(readResult.IsError == true, readResult.GetText());
        StringAssert.Contains(readResult.GetText(), "Contoso Live");

        var readWithColsResult = tool.manage_record(action: "read", entity_name: "account", record_id: recordId, columns: "name");
        Assert.IsFalse(readWithColsResult.IsError == true, readWithColsResult.GetText());

        var updateResult = tool.manage_record(action: "update", entity_name: "account", record_id: recordId, fields_json: "{\"name\":\"Contoso Updated\"}");
        Assert.IsFalse(updateResult.IsError == true, updateResult.GetText());
        StringAssert.Contains(updateResult.GetText(), "Updated account");

        var deleteResult = tool.manage_record(action: "delete", entity_name: "account", record_id: recordId);
        Assert.IsFalse(deleteResult.IsError == true, deleteResult.GetText());
        StringAssert.Contains(deleteResult.GetText(), "Deleted account");
    }

    [TestMethod]
    public void ManageRecord_LiveAssociateDisassociate_ExecutesSuccessfully()
    {
        var tool = CreateTool(dryRun: false);
        var accountId = Guid.NewGuid().ToString("D");
        var contactId = Guid.NewGuid().ToString("D");

        var assocResult = tool.manage_record(
            action: "associate",
            entity_name: "account",
            record_id: accountId,
            related_entity_name: "contact",
            related_record_id: contactId,
            relationship_name: "account_contacts");
        Assert.IsFalse(assocResult.IsError == true, assocResult.GetText());
        StringAssert.Contains(assocResult.GetText(), "Associated account");

        var disassocResult = tool.manage_record(
            action: "disassociate",
            entity_name: "account",
            record_id: accountId,
            related_entity_name: "contact",
            related_record_id: contactId,
            relationship_name: "account_contacts");
        Assert.IsFalse(disassocResult.IsError == true, disassocResult.GetText());
        StringAssert.Contains(disassocResult.GetText(), "Disassociated account");
    }

    [TestMethod]
    public void ManageRecord_DryRunAssociateDisassociate_ReturnsPreviews()
    {
        var tool = CreateTool(dryRun: true);
        var accountId = Guid.NewGuid().ToString("D");
        var contactId = Guid.NewGuid().ToString("D");

        var assocResult = tool.manage_record(
            action: "associate",
            entity_name: "account",
            record_id: accountId,
            related_entity_name: "contact",
            related_record_id: contactId,
            relationship_name: "account_contacts");
        Assert.IsFalse(assocResult.IsError == true, assocResult.GetText());
        StringAssert.Contains(assocResult.GetText(), "[DryRun]");

        var disassocResult = tool.manage_record(
            action: "disassociate",
            entity_name: "account",
            record_id: accountId,
            related_entity_name: "contact",
            related_record_id: contactId,
            relationship_name: "account_contacts");
        Assert.IsFalse(disassocResult.IsError == true, disassocResult.GetText());
        StringAssert.Contains(disassocResult.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void ManageRecord_AssociateValidationErrors()
    {
        var tool = CreateTool(dryRun: false);
        var accountId = Guid.NewGuid().ToString("D");

        Assert.IsTrue(tool.manage_record(action: "associate", entity_name: "account", record_id: accountId, related_entity_name: "", related_record_id: accountId, relationship_name: "rel").GetText().Contains("related_entity_name is required"));
        Assert.IsTrue(tool.manage_record(action: "associate", entity_name: "account", record_id: accountId, related_entity_name: "contact", related_record_id: "", relationship_name: "rel").GetText().Contains("related_record_id is required"));
        Assert.IsTrue(tool.manage_record(action: "associate", entity_name: "account", record_id: accountId, related_entity_name: "contact", related_record_id: accountId, relationship_name: "").GetText().Contains("relationship_name is required"));
    }
}
