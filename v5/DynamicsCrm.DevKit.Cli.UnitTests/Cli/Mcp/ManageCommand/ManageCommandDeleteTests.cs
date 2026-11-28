using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageCommand;

[TestClass]
public sealed class ManageCommandDeleteTests
{
    private DeleteService _service = null!;
    private Guid _tableId;
    private Guid _appId;

    [TestInitialize]
    public void Initialize()
    {
        _tableId = Guid.NewGuid();
        _appId = Guid.NewGuid();
        var context = MiddlewareBuilder.New().AddCrud().AddFakeMessageExecutors().UseCrud().UseMessages()
            .SetLicense(FakeXrmEasyLicense.RPL_1_5).Build();
        _service = new DeleteService(context.GetOrganizationService(), new EntityMetadata
        {
            LogicalName = "account", SchemaName = "Account", MetadataId = _tableId,
            DisplayName = new Label("Business Account", 1033) { UserLocalizedLabel = new LocalizedLabel("Business Account", 1033) }
        });
        _service.Create(new Entity("appmodule", _appId) { ["name"] = "Sales Hub", ["uniquename"] = "sales_hub" });
    }

    [TestMethod]
    [DataRow(1)]
    [DataRow(2)]
    public void DeleteById_DeletesExclusiveRulesThenNestedChildrenAndParent_BeforePublishing(int containerType)
    {
        var root = AddCommand(appId: _appId, onTable: true, type: containerType);
        var group = AddCommand(parent: root, type: 3);
        var item = AddCommand(parent: group, inactive: true);
        var other = AddCommand();
        var exclusive = AddRule(false, root, item);
        var shared = AddRule(false, root, other);

        var result = Tool().manage_command(action: " DELETE ", command_id: root.ToString(), label: "ignored");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = JsonSerializer.SerializeToElement(result.StructuredContent);
        Assert.AreEqual("delete", structured.GetProperty("action").GetString());
        Assert.AreEqual("success", structured.GetProperty("status").GetString());
        Assert.AreEqual(root.ToString(), structured.GetProperty("commandId").GetString());
        CollectionAssert.AreEqual(new[] { exclusive, item, group, root }, _service.DeletedIds.ToArray());
        Assert.AreEqual(1, _service.TransactionCount);
        Assert.AreEqual(1, _service.PublishRequests.Count);
        StringAssert.Contains(_service.PublishRequests[0], "<entity>account</entity>");
        CollectionAssert.AreEqual(new[] { "delete", "publish" }, _service.WriteOrder.ToArray());
        Assert.IsTrue(_service.Exists("appactionrule", shared));
        Assert.IsTrue(_service.Exists("appaction", other));
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public void DeleteByExactLabelOrUniqueName_ResolvesTableAndApp_AndRestrictsLocation(bool byUniqueName)
    {
        var target = AddCommand("Run", "my_Run", _appId, onTable: true, contextValue: false);
        var differentLabel = AddCommand("Run Later", "my_Run_Later", _appId, onTable: true);
        var differentLocation = AddCommand("Run", "my_Run", _appId, onTable: true, location: 1);
        var differentApp = AddCommand("Run", "my_Run", Guid.NewGuid(), onTable: true);
        var noApp = AddCommand("Run", "my_Run", onTable: true);
        var noTable = AddCommand("Run", "my_Run", _appId);

        var result = Tool().manage_command(action: "delete", entity_name: "Business Account", location: "form",
            label: byUniqueName ? "" : " Run ", uniquename: byUniqueName ? "my_Run" : "",
            app_id: byUniqueName ? _appId.ToString() : "", app_name: byUniqueName ? "" : "Sales Hub");

        Assert.IsFalse(result.IsError == true, result.GetText());
        CollectionAssert.AreEqual(new[] { target }, _service.DeletedIds.ToArray());
        Assert.AreEqual(_tableId, _service.RetrievedByMetadataId);
        StringAssert.Contains(_service.PublishRequests.Single(), "<entity>account</entity>");
        Assert.IsTrue(new[] { differentLabel, differentLocation, differentApp, noApp, noTable }.All(id => _service.Exists("appaction", id)));
    }

    [TestMethod]
    public void DeleteTableScope_MatchesEnhancedMigratedRowsWithNullApp()
    {
        var tableCommand = AddCommand("Clean", "my_Clean", onTable: true, enhancedMigrated: true, inactive: true);
        var appCommand = AddCommand("Clean", "my_Clean", _appId, onTable: true);
        var globalCommand = AddCommand("Clean", "my_Clean");

        var result = Tool().manage_command(action: "delete", uniquename: "my_Clean", entity_name: "account", location: "form");

        Assert.IsFalse(result.IsError == true, result.GetText());
        CollectionAssert.AreEqual(new[] { tableCommand }, _service.DeletedIds.ToArray());
        Assert.AreEqual(1, _service.PublishRequests.Count);
        Assert.IsTrue(_service.Exists("appaction", appCommand));
        Assert.IsTrue(_service.Exists("appaction", globalCommand));
    }

    [TestMethod]
    [DataRow("global")]
    [DataRow("app")]
    public void DeleteWithoutTableContext_TargetsOnlyRequestedAppOrGlobalScopeAndSkipsPublish(string scope)
    {
        var global = AddCommand("Header", location: 5, enhancedMigrated: true);
        var app = AddCommand("Header", appId: _appId, location: 5);
        var table = AddCommand("Header", onTable: true, location: 5);

        var result = Tool().manage_command(action: "delete", label: "Header", location: "global_header",
            scope: scope, app_name: scope == "app" ? "sales_hub" : "");

        Assert.IsFalse(result.IsError == true, result.GetText());
        CollectionAssert.AreEqual(new[] { scope == "global" ? global : app }, _service.DeletedIds.ToArray());
        Assert.IsEmpty(_service.PublishRequests);
        Assert.IsTrue(_service.Exists("appaction", scope == "global" ? app : global));
        Assert.IsTrue(_service.Exists("appaction", table));
    }

    [TestMethod]
    [DataRow("target")]
    [DataRow("child")]
    [DataRow("rule")]
    public void Delete_ManagedTargetOrDependencyBlocksAllWrites(string managed)
    {
        var root = AddCommand(managed: managed == "target", onTable: true);
        var child = AddCommand(parent: root, managed: managed == "child");
        var rule = AddRule(managed == "rule", root);
        var blockedId = managed == "rule" ? rule : managed == "child" ? child : root;

        var result = Tool().manage_command(action: "delete", command_id: root.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), blockedId.ToString());
        StringAssert.Contains(result.GetText(), "managed (ismanaged=true)");
        Assert.IsEmpty(_service.WriteOrder);
        Assert.IsTrue(_service.Exists("appaction", root));
        Assert.IsTrue(_service.Exists("appaction", child));
        Assert.IsTrue(_service.Exists("appactionrule", rule));
    }

    [TestMethod]
    public void DeleteByLabel_AmbiguousMatchRequiresGuid()
    {
        var first = AddCommand("Same", _appId.ToString(), _appId, onTable: true);
        var second = AddCommand("Same", "other", _appId, onTable: true);

        var result = Tool().manage_command(action: "delete", label: "Same", entity_name: "account", location: "form", app_id: _appId.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple appactions match");
        StringAssert.Contains(result.GetText(), first.ToString());
        StringAssert.Contains(result.GetText(), second.ToString());
        Assert.IsEmpty(_service.WriteOrder);
    }

    [TestMethod]
    [DataRow("bad", "", "", "", "", "", "valid command_id GUID")]
    [DataRow("", "", "", "", "", "", "exactly one of label and uniquename")]
    [DataRow("", "Run", "run", "form", "", "", "exactly one of label and uniquename")]
    [DataRow("", "Run", "", "bad", "", "", "valid location")]
    [DataRow("", "Run", "", "form", "", "bad", "Invalid scope")]
    [DataRow("", "Run", "", "form", "", "app", "app_id or app_name is required")]
    [DataRow("", "Run", "", "form", "", "table", "entity_name is required")]
    [DataRow("", "Run", "", "form", "bad", "", "valid app_id GUID")]
    [DataRow("", "Run", "", "form", "bad", "global", "Omit app_id and app_name")]
    [DataRow("", "Run", "", "form", "", "global", "No matching appaction")]
    public void Delete_InvalidOrMissingTarget_DoesNotWrite(string id, string label, string uniqueName, string location, string appId, string scope, string error)
    {
        var result = Tool().manage_command(action: "delete", command_id: id, label: label, uniquename: uniqueName,
            location: location, app_id: appId, scope: scope);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), error);
        Assert.IsEmpty(_service.WriteOrder);
    }

    [TestMethod]
    public void DeleteById_MissingRecord_DoesNotWrite()
    {
        var result = Tool().manage_command(action: "delete", command_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No matching appaction");
        Assert.IsEmpty(_service.WriteOrder);
    }

    [TestMethod]
    public void DeleteById_WhenHierarchyHasCycle_DoesNotWrite()
    {
        var id = Guid.NewGuid();
        _service.Create(new Entity("appaction", id) { ["parentappactionid"] = new EntityReference("appaction", id) });

        var result = Tool().manage_command(action: "delete", command_id: id.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "child hierarchy has a cycle");
        Assert.IsEmpty(_service.WriteOrder);
    }

    [TestMethod]
    public void DeleteById_InspectsManagedChildOnLaterPageBeforeAnyWrites()
    {
        var root = AddCommand();
        AddCommand(parent: root);
        AddCommand(parent: root);
        AddCommand(parent: root);
        var managed = new Guid("ffffffff-ffff-ffff-ffff-ffffffffffff");
        _service.Create(new Entity("appaction", managed)
        {
            ["parentappactionid"] = new EntityReference("appaction", root), ["ismanaged"] = true
        });
        _service.PageChildren = true;

        var result = Tool().manage_command(action: "delete", command_id: root.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), managed.ToString());
        Assert.IsTrue(_service.ReadLaterChildPage);
        Assert.IsEmpty(_service.WriteOrder);
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public void Delete_DryRun_ReturnsPreviewWithoutConnection(bool byId)
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        var result = byId
            ? tool.manage_command(action: "delete", command_id: Guid.NewGuid().ToString())
            : tool.manage_command(action: "delete", uniquename: "my_command", location: "form", entity_name: "account");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "[DryRun]");
        Assert.AreEqual("not_executed", JsonSerializer.SerializeToElement(result.StructuredContent).GetProperty("status").GetString());
    }

    [TestMethod]
    public void Delete_TransactionFailureDoesNotPublish()
    {
        var id = AddCommand(onTable: true);
        var child = AddCommand(parent: id);
        _service.FailDelete = true;

        var result = Tool().manage_command(action: "delete", command_id: id.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Delete transaction rejected");
        Assert.IsEmpty(_service.PublishRequests);
        Assert.IsTrue(_service.Exists("appaction", id));
        Assert.IsTrue(_service.Exists("appaction", child));
    }

    [TestMethod]
    public void Delete_PublishFailureReportsCompletedDeletionAndHowToRetryPublish()
    {
        var id = AddCommand(onTable: true);
        _service.FailPublish = true;

        var result = Tool().manage_command(action: "delete", command_id: id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsFalse(_service.Exists("appaction", id));
        StringAssert.Contains(result.GetText(), "Publishing table 'account' failed");
        StringAssert.Contains(result.GetText(), "manage_admin(resource='publish')");
    }

    [TestMethod]
    public void InputSchema_ExposesDeleteAndUniqueName()
    {
        var method = typeof(ManageCommandTool).GetMethod(nameof(ManageCommandTool.InvokeAsync))!;
        var schema = McpServerTool.Create(method, Tool(), new McpServerToolCreateOptions()).ProtocolTool.InputSchema;
        var properties = schema.GetProperty("properties");
        StringAssert.Contains(properties.GetProperty("action").GetProperty("description").GetString(), "/delete/");
        Assert.AreEqual("string", properties.GetProperty("uniquename").GetProperty("type").GetString());
        Assert.IsFalse(properties.TryGetProperty("cancellationToken", out _));
    }

    private ManageCommandTool Tool() => new(_service, new McpDryRunOptions(), new McpExecutionContext(false));

    private Guid AddCommand(string label = "Command", string? uniqueName = null, Guid? appId = null,
        bool onTable = false, bool contextValue = true, int location = 0, int type = 0, Guid? parent = null,
        bool managed = false, bool inactive = false, bool enhancedMigrated = false)
    {
        var id = Guid.NewGuid();
        var entity = new Entity("appaction", id)
        {
            ["buttonlabeltext"] = label, ["uniquename"] = uniqueName ?? id.ToString(),
            ["location"] = new OptionSetValue(location), ["type"] = new OptionSetValue(type),
            ["ismanaged"] = managed, ["statecode"] = new OptionSetValue(inactive ? 1 : 0),
            ["origin"] = new OptionSetValue(enhancedMigrated ? 2 : 0)
        };
        if (appId.HasValue) entity["appmoduleid"] = new EntityReference("appmodule", appId.Value);
        if (parent.HasValue) entity["parentappactionid"] = new EntityReference("appaction", parent.Value);
        if (onTable)
        {
            entity["contextentity"] = new EntityReference("entity", _tableId);
            if (contextValue) entity["contextvalue"] = "account";
        }
        return _service.Create(entity);
    }

    private Guid AddRule(bool managed, params Guid[] commands)
    {
        var rule = _service.Create(new Entity("appactionrule", Guid.NewGuid()) { ["ismanaged"] = managed });
        foreach (var command in commands)
            _service.Create(new Entity("appaction_appactionrule_classicrules", Guid.NewGuid())
            {
                ["appactionid"] = command, ["appactionruleid"] = rule
            });
        return rule;
    }

    private sealed class DeleteService(IOrganizationService inner, EntityMetadata table) : IOrganizationService
    {
        public List<Guid> DeletedIds { get; } = [];
        public List<string> PublishRequests { get; } = [];
        public List<string> WriteOrder { get; } = [];
        public int TransactionCount { get; private set; }
        public Guid? RetrievedByMetadataId { get; private set; }
        public bool FailDelete { get; set; }
        public bool FailPublish { get; set; }
        public bool PageChildren { get; set; }
        public bool ReadLaterChildPage { get; private set; }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case ExecuteTransactionRequest transaction:
                    TransactionCount++;
                    if (FailDelete) throw new InvalidOperationException("Delete transaction rejected");
                    WriteOrder.Add("delete");
                    foreach (var delete in transaction.Requests.Cast<DeleteRequest>())
                    {
                        inner.Delete(delete.Target.LogicalName, delete.Target.Id);
                        DeletedIds.Add(delete.Target.Id);
                    }
                    return new ExecuteTransactionResponse();
                case PublishXmlRequest publish:
                    WriteOrder.Add("publish");
                    PublishRequests.Add(publish.ParameterXml);
                    if (FailPublish) throw new InvalidOperationException("Publish rejected");
                    return new PublishXmlResponse();
                case RetrieveAllEntitiesRequest:
                    return new RetrieveAllEntitiesResponse { Results = new ParameterCollection { ["EntityMetadata"] = new[] { table } } };
                case RetrieveEntityRequest retrieve:
                    RetrievedByMetadataId = retrieve.MetadataId;
                    Assert.AreEqual(table.MetadataId, retrieve.MetadataId);
                    return new RetrieveEntityResponse { Results = new ParameterCollection { ["EntityMetadata"] = table } };
                default:
                    return inner.Execute(request);
            }
        }

        public bool Exists(string entityName, Guid id) => inner.RetrieveMultiple(new QueryExpression(entityName)
        {
            Criteria = new FilterExpression { Conditions = { new ConditionExpression(entityName + "id", ConditionOperator.Equal, id) } }
        }).Entities.Count == 1;

        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => inner.Retrieve(entityName, id, columnSet);
        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (PageChildren && query is QueryExpression children &&
                children.Criteria.Conditions.Any(condition => condition.AttributeName == "parentappactionid"))
            {
                children.PageInfo.Count = 1;
                ReadLaterChildPage |= children.PageInfo.PageNumber > 1;
            }
            return inner.RetrieveMultiple(query);
        }
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id)
        {
            inner.Delete(entityName, id);
            WriteOrder.Add("delete");
            DeletedIds.Add(id);
        }
        public void Associate(string entityName, Guid id, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid id, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
    }
}
