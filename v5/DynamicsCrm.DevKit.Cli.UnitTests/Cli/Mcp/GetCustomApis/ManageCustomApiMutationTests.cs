using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetCustomApis;

[TestClass]
public sealed class ManageCustomApiMutationTests
{
    private FakeSdkClient _fake = null!;
    private Guid _publisherId;
    private Guid _solutionId;
    private Guid _existingApiId;
    private Guid _existingReqParamId;
    private Guid _existingRespPropId;
    private string _publisherPrefix = "ntf";
    private bool _existingApiIsManaged;
    private EntityReference? _fxExpression;
    private bool _rejectTransaction;
    private readonly List<ExecuteTransactionRequest> _transactions = [];
    private readonly List<CreateRequest> _createdRequests = [];
    private readonly List<Entity> _updatedEntities = [];
    private readonly List<(string EntityName, Guid Id)> _deletedRecords = [];

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _publisherId = Guid.NewGuid();
        _solutionId = Guid.NewGuid();
        _existingApiId = Guid.NewGuid();
        _existingReqParamId = Guid.NewGuid();
        _existingRespPropId = Guid.NewGuid();
        _publisherPrefix = "ntf";
        _existingApiIsManaged = false;
        _fxExpression = null;
        _rejectTransaction = false;
        _transactions.Clear();
        _createdRequests.Clear();
        _updatedEntities.Clear();
        _deletedRecords.Clear();

        _fake.OnExecute = request =>
        {
            if (request is ExecuteTransactionRequest transaction)
            {
                _transactions.Add(transaction);
                if (_rejectTransaction)
                    throw new InvalidOperationException("Dataverse rejected the transaction.");

                foreach (var operation in transaction.Requests)
                {
                    switch (operation)
                    {
                        case CreateRequest create:
                            _createdRequests.Add(create);
                            break;
                        case UpdateRequest update:
                            _updatedEntities.Add(update.Target);
                            break;
                        case DeleteRequest delete:
                            _deletedRecords.Add((delete.Target.LogicalName, delete.Target.Id));
                            break;
                        default:
                            throw new InvalidOperationException($"Unexpected transaction operation: {operation.RequestName}");
                    }
                }
                return new ExecuteTransactionResponse();
            }
            if (request is CreateRequest createReq)
            {
                _createdRequests.Add(createReq);
                return new CreateResponse { Results = { ["id"] = createReq.Target.Id } };
            }
            if (request is UpdateRequest updateReq)
            {
                _updatedEntities.Add(updateReq.Target);
                return new UpdateResponse();
            }
            if (request is DeleteRequest deleteReq)
            {
                _deletedRecords.Add((deleteReq.Target.LogicalName, deleteReq.Target.Id));
                return new DeleteResponse();
            }
            if (request is RetrieveRequest retrieveReq)
            {
                if (retrieveReq.Target.LogicalName == "publisher")
                {
                    return new RetrieveResponse
                    {
                        Results =
                        {
                            ["Entity"] = new Entity("publisher", _publisherId)
                            {
                                ["customizationprefix"] = _publisherPrefix,
                                ["customizationoptionvalueprefix"] = 55555
                            }
                        }
                    };
                }
                if (retrieveReq.Target.LogicalName == "customapi")
                {
                    var api = new Entity("customapi", _existingApiId)
                    {
                        ["uniquename"] = "ntf_SendNotification",
                        ["displayname"] = "Send Notification",
                        ["ismanaged"] = _existingApiIsManaged
                    };
                    if (_fxExpression is not null && retrieveReq.ColumnSet.Columns.Contains("fxexpressionid"))
                        api["fxexpressionid"] = _fxExpression;
                    return new RetrieveResponse { Results = { ["Entity"] = api } };
                }
            }
            if (request is RetrieveMultipleRequest rmReq)
            {
                var entityName = (rmReq.Query as QueryExpression)?.EntityName;
                if (entityName == "solution")
                {
                    var sol = new Entity("solution", _solutionId)
                    {
                        ["uniquename"] = "notification",
                        ["friendlyname"] = "Notification",
                        ["ismanaged"] = false,
                        ["publisherid"] = new EntityReference("publisher", _publisherId)
                    };
                    return new RetrieveMultipleResponse { Results = { ["EntityCollection"] = new EntityCollection([sol]) } };
                }
                if (entityName == "customapi")
                {
                    var qe = (QueryExpression)rmReq.Query;
                    var hasEqCondition = qe.Criteria.Conditions.Any(c =>
                        c.AttributeName == "uniquename" && c.Operator == ConditionOperator.Equal &&
                        string.Equals(c.Values.FirstOrDefault()?.ToString(), "ntf_NewApi", StringComparison.OrdinalIgnoreCase));
                    if (hasEqCondition)
                        return new RetrieveMultipleResponse { Results = { ["EntityCollection"] = new EntityCollection() } };

                    var existing = new Entity("customapi", _existingApiId)
                    {
                        ["uniquename"] = "ntf_SendNotification",
                        ["name"] = "ntf_SendNotification",
                        ["displayname"] = "Send Notification"
                    };
                    return new RetrieveMultipleResponse { Results = { ["EntityCollection"] = new EntityCollection([existing]) } };
                }
                if (entityName == "customapirequestparameter")
                {
                    var p = new Entity("customapirequestparameter", _existingReqParamId)
                    {
                        ["uniquename"] = "ntf_To",
                        ["name"] = "ntf_To",
                        ["type"] = new OptionSetValue(10),
                        ["isoptional"] = true
                    };
                    return new RetrieveMultipleResponse { Results = { ["EntityCollection"] = new EntityCollection([p]) } };
                }
                if (entityName == "customapiresponseproperty")
                {
                    var r = new Entity("customapiresponseproperty", _existingRespPropId)
                    {
                        ["uniquename"] = "ntf_IsSuccess",
                        ["name"] = "ntf_IsSuccess",
                        ["type"] = new OptionSetValue(0)
                    };
                    return new RetrieveMultipleResponse { Results = { ["EntityCollection"] = new EntityCollection([r]) } };
                }
            }
            return new OrganizationResponse();
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private ManageCustomApiTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(dryRun));

    [TestMethod]
    public void Create_WithParamsAndSolution_AppliesSolutionUniqueNameToAllCreatedRecords()
    {
        var tool = CreateTool();
        var res = tool.manage_custom_api(
            action: "create",
            api_name: "ntf_NewApi",
            display_name: "New API",
            description: "Test custom API",
            solution_name: "notification",
            request_parameters: "[{\"name\":\"ntf_Input\",\"type\":\"String\",\"is_optional\":true}]",
            response_properties: "[{\"name\":\"ntf_Output\",\"type\":\"Boolean\"}]");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual(1, _transactions.Count);
        Assert.AreEqual(3, _createdRequests.Count);
        Assert.IsTrue(_createdRequests.All(r => (string)r["SolutionUniqueName"] == "notification"));
        Assert.AreEqual("customapi", _createdRequests[0].Target.LogicalName);
        Assert.AreEqual("customapirequestparameter", _createdRequests[1].Target.LogicalName);
        Assert.AreEqual("customapiresponseproperty", _createdRequests[2].Target.LogicalName);
        var apiId = _createdRequests[0].Target.Id;
        Assert.AreNotEqual(Guid.Empty, apiId);
        Assert.AreEqual(apiId.ToString(), res.StructuredContent!.Value.GetProperty("customApiId").GetString());
        foreach (var child in _createdRequests.Skip(1))
            Assert.AreEqual(apiId, child.Target.GetAttributeValue<EntityReference>("customapiid").Id);
    }

    [TestMethod]
    public void Create_WithoutChildren_SendsSingleCreateRequest()
    {
        var res = CreateTool().manage_custom_api(
            action: "create", api_name: "ntf_NewApi", display_name: "New API", solution_name: "notification");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual(0, _transactions.Count);
        Assert.AreEqual(1, _createdRequests.Count);
        Assert.AreEqual("notification", _createdRequests[0]["SolutionUniqueName"]);
    }

    [TestMethod]
    public void Create_PrefixMismatch_ReturnsError()
    {
        var tool = CreateTool();
        var res = tool.manage_custom_api(
            action: "create",
            api_name: "ab_WrongPrefix",
            display_name: "Wrong Prefix",
            solution_name: "notification");

        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "ntf_");
        Assert.AreEqual(0, _createdRequests.Count);
    }

    [TestMethod]
    public void Create_ReservedNewPrefix_ReturnsError()
    {
        _publisherPrefix = "new";
        var tool = CreateTool();
        var res = tool.manage_custom_api(
            action: "create",
            display_name: "Blocked API",
            solution_name: "notification");

        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "reserved prefix 'new'");
    }

    [TestMethod]
    public void Create_DryRun_DoesNotExecuteWrites()
    {
        var tool = CreateTool(dryRun: true);
        var res = tool.manage_custom_api(
            action: "create",
            api_name: "ntf_NewApi",
            display_name: "New API",
            solution_name: "notification",
            request_parameters: "[{\"name\":\"ntf_Input\",\"type\":\"String\"}]");

        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.StartsWith(res.GetText(), "[DryRun]");
        var json = res.StructuredContent!.Value;
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        Assert.IsFalse(json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("none", json.GetProperty("addToSolutionMethod").GetString());
        Assert.AreEqual(0, _transactions.Count);
    }

    [TestMethod]
    public void Update_MetadataAndParameters_AppliesAddUpdateRemove()
    {
        var tool = CreateTool();
        var res = tool.manage_custom_api(
            action: "update",
            api_name: "ntf_SendNotification",
            display_name: "Send Notification v2",
            solution_name: "notification",
            allowed_custom_processing_step_type: "None",
            workflow_sdk_step_enabled: false,
            request_parameters: """
                [
                  {"action":"add","name":"ntf_Cc","type":"String","is_optional":true},
                  {"action":"update","name":"ntf_To","type":"String","is_optional":true,"description":"Updated To"}
                ]
                """,
            response_properties: "[{\"action\":\"remove\",\"name\":\"ntf_IsSuccess\"}]");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual(1, _transactions.Count);
        Assert.AreEqual(4, _transactions[0].Requests.Count);
        Assert.AreEqual(2, _updatedEntities.Count); // customapi + customapirequestparameter
        CollectionAssert.AreEquivalent(new[] { "displayname" }, _updatedEntities[0].Attributes.Keys.ToArray());
        CollectionAssert.AreEquivalent(new[] { "description" }, _updatedEntities[1].Attributes.Keys.ToArray());
        Assert.AreEqual(1, _createdRequests.Count); // added ntf_Cc
        Assert.AreEqual("notification", _createdRequests[0]["SolutionUniqueName"]);
        Assert.AreEqual(1, _deletedRecords.Count); // removed ntf_IsSuccess
    }

    [TestMethod]
    public void Update_DryRun_DoesNotExecuteWrites()
    {
        var res = CreateTool(dryRun: true).manage_custom_api(
            action: "update", api_name: "ntf_SendNotification", display_name: "New display name",
            request_parameters: """[{"action":"add","name":"ntf_Input","type":"String"}]""");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual("not_executed", res.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual(0, _transactions.Count);
        Assert.AreEqual(0, _createdRequests.Count);
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    [DataRow("create")]
    [DataRow("update")]
    public void Write_WhenDataverseRejectsTransaction_ReturnsError(string action)
    {
        _rejectTransaction = true;
        var res = CreateTool().manage_custom_api(
            action: action,
            api_name: action == "create" ? "ntf_NewApi" : "ntf_SendNotification",
            display_name: "New display name",
            solution_name: "notification",
            request_parameters: """[{"action":"add","name":"ntf_Input","type":"String"}]""");

        Assert.IsTrue(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Dataverse rejected the transaction.");
        Assert.AreEqual(1, _transactions.Count);
        Assert.AreEqual(2, _transactions[0].Requests.Count);
        Assert.AreEqual(0, _createdRequests.Count);
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    [DataRow("update")]
    [DataRow("delete")]
    public void Write_WhenApiBacksPowerFxFunction_ReturnsError(string action)
    {
        _fxExpression = new EntityReference("fxexpression", Guid.NewGuid());
        var res = CreateTool().manage_custom_api(
            action: action, api_name: "ntf_SendNotification", display_name: "New display name");

        Assert.IsTrue(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "backs a Power Fx function");
        Assert.AreEqual(0, _transactions.Count);
        Assert.AreEqual(0, _deletedRecords.Count);
    }

    [TestMethod]
    [DataRow("allowed_custom_processing_step_type")]
    [DataRow("workflow_sdk_step_enabled")]
    public void Update_WhenApiCreationFieldChanges_ReturnsError(string field)
    {
        var res = CreateTool().manage_custom_api(
            action: "update", api_name: "ntf_SendNotification", display_name: "New display name",
            allowed_custom_processing_step_type: field == "allowed_custom_processing_step_type" ? "AsyncOnly" : null!,
            workflow_sdk_step_enabled: field == "workflow_sdk_step_enabled" ? true : null);

        Assert.IsTrue(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), $"{field} can only be set when creating");
        Assert.AreEqual(0, _transactions.Count);
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    [DataRow(true, "type", "\"Boolean\"")]
    [DataRow(true, "is_optional", "false")]
    [DataRow(true, "logical_entity_name", "\"account\"")]
    [DataRow(false, "type", "\"String\"")]
    [DataRow(false, "logical_entity_name", "\"account\"")]
    public void Update_WhenChildCreationFieldChanges_ReturnsError(bool isRequest, string field, string value)
    {
        var childName = isRequest ? "ntf_To" : "ntf_IsSuccess";
        var patch = $$"""[{"action":"update","name":"{{childName}}","{{field}}":{{value}}}]""";
        var res = CreateTool().manage_custom_api(
            action: "update", api_name: "ntf_SendNotification", display_name: "New display name",
            request_parameters: isRequest ? patch : null!, response_properties: isRequest ? null! : patch);

        Assert.IsTrue(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), $"Cannot change {field}");
        Assert.AreEqual(0, _transactions.Count);
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    public void Update_ManagedApi_ReturnsError()
    {
        _existingApiIsManaged = true;
        var tool = CreateTool();
        var res = tool.manage_custom_api(
            action: "update",
            api_name: "ntf_SendNotification",
            display_name: "Should Fail");

        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "managed");
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    public void Delete_UnmanagedApi_DeletesRecord()
    {
        var tool = CreateTool();
        var res = tool.manage_custom_api(action: "delete", api_name: "ntf_SendNotification");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual(1, _deletedRecords.Count);
        Assert.AreEqual(("customapi", _existingApiId), _deletedRecords[0]);
    }

    [TestMethod]
    public void Delete_ManagedApi_ReturnsError()
    {
        _existingApiIsManaged = true;
        var tool = CreateTool();
        var res = tool.manage_custom_api(action: "delete", api_name: "ntf_SendNotification");

        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "managed");
        Assert.AreEqual(0, _deletedRecords.Count);
    }

    [TestMethod]
    public void Delete_DryRun_DoesNotDeleteRecord()
    {
        var tool = CreateTool(dryRun: true);
        var res = tool.manage_custom_api(action: "delete", api_name: "ntf_SendNotification");

        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.StartsWith(res.GetText(), "[DryRun]");
        Assert.AreEqual(0, _deletedRecords.Count);
    }

    [TestMethod]
    public void ExecuteWebApi_BlocksCustomApiWritesAndRedirectsToManageCustomApi()
    {
        var webApi = new ExecuteWebApiTool(null!, new McpDryRunOptions { DryRun = false }, new McpExecutionContext(false), null!);

        var postApi = webApi.execute_webapi(method: "POST", url: "customapis", body: "{}");
        Assert.IsTrue(postApi.IsError == true);
        StringAssert.Contains(postApi.GetText(), "manage_logic(resource='custom_api')");

        var postParam = webApi.execute_webapi(method: "POST", url: "customapirequestparameters", body: "{}");
        Assert.IsTrue(postParam.IsError == true);
        StringAssert.Contains(postParam.GetText(), "manage_logic(resource='custom_api')");

        var postProp = webApi.execute_webapi(method: "POST", url: "customapiresponseproperties", body: "{}");
        Assert.IsTrue(postProp.IsError == true);
        StringAssert.Contains(postProp.GetText(), "manage_logic(resource='custom_api')");

        var patchApi = webApi.execute_webapi(method: "PATCH", url: $"customapis({_existingApiId})", body: "{}");
        Assert.IsTrue(patchApi.IsError == true);
        StringAssert.Contains(patchApi.GetText(), "manage_logic(resource='custom_api')");

        var deleteApi = webApi.execute_webapi(method: "DELETE", url: $"customapis({_existingApiId})");
        Assert.IsTrue(deleteApi.IsError == true);
        StringAssert.Contains(deleteApi.GetText(), "manage_logic(resource='custom_api')");
    }
}
