using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRecord;

[TestClass]
public sealed class ManageRecordExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _requests = new();
    private readonly Guid _createdId = Guid.NewGuid();

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
                    Results = { ["EntityMetadata"] = _entities.Single(entity => entity.LogicalName == req.LogicalName) }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = _createdId } },
                AddSolutionComponentRequest => new AddSolutionComponentResponse(),
                RemoveSolutionComponentRequest => new RemoveSolutionComponentResponse(),
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
    [DataRow("create", false, "odata.bind")]
    [DataRow("update", false, "ODATA.BIND")]
    [DataRow("create", true, "OData.Bind")]
    [DataRow("update", true, "odata.bind")]
    public void ManageRecord_ODataBindFieldKey_ReturnsLookupSyntaxHint(string action, bool dryRun, string suffix)
    {
        var key = $"primarycontactid@{suffix}";
        var fields = $$"""{"{{key}}":"/contacts(d7d36758-c7e8-f111-84e9-7ced8dfe9a07)"}""";
        var result = CreateTool(dryRun).manage_record(action: action, entity_name: "account",
            record_id: action == "update" ? Guid.NewGuid().ToString() : "", fields_json: fields);

        Assert.IsTrue(result.IsError == true, result.GetText());
        var text = result.GetText();
        StringAssert.StartsWith(text, $"[Error] Invalid field key '{key}':");
        StringAssert.Contains(text, "[Hint] Use '\"primarycontactid\": \"<guid>\"'");
        StringAssert.Contains(text, "'\"primarycontactid@<target_entity>\": \"<guid>\"'");
        Assert.AreEqual(1, _requests.OfType<RetrieveAllEntitiesRequest>().Count(), "Only the primary table should be resolved.");
        Assert.IsFalse(_requests.OfType<RetrieveEntityRequest>().Any(), "The key should be rejected before attribute metadata lookup.");
    }

    [TestMethod]
    public void ManageRecord_LiveCreateReadUpdateDelete_ExecutesSuccessfully()
    {
        var tool = CreateTool(dryRun: false);
        var recordId = Guid.NewGuid().ToString("D");

        var createResult = tool.manage_record(action: "create", entity_name: "account", fields_json: "{\"name\":\"Contoso Live\"}");
        Assert.IsFalse(createResult.IsError == true, createResult.GetText());
        StringAssert.Contains(createResult.GetText(), "Created account");
        Assert.IsFalse(_requests.OfType<CreateRequest>().Any());

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
    public void ManageRecord_CreateConnectionReference_UsesResolvedSolutionUniqueName()
    {
        _entities.Add(TestMetadata.Entity("connectionreference", "Connection Reference",
            TestMetadata.String("connectionreferencelogicalname"), TestMetadata.String("connectionreferencedisplayname"),
            TestMetadata.String("connectorid")));
        const string fields = """
            {"connectionreferencelogicalname":"contoso_shared_ref","connectionreferencedisplayname":"Shared Reference","connectorid":"/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps"}
            """;

        var request = CreateRecordInSolution("connectionreference", fields, "Solution Components");

        Assert.AreEqual("contoso_shared_ref", request.Target.GetAttributeValue<string>("connectionreferencelogicalname"));
    }

    [TestMethod]
    public void ManageRecord_CreateCloudFlow_UsesResolvedSolutionUniqueName()
    {
        _entities.Add(TestMetadata.Entity("workflow", "Process", TestMetadata.String("name"),
            TestMetadata.Picklist("category", "Category", (5, "Cloud Flow")), TestMetadata.Picklist("type", "Type", (1, "Definition")),
            TestMetadata.String("primaryentity"), TestMetadata.Memo("clientdata")));
        const string fields = """
            {"name":"Sample Flow","category":5,"type":1,"primaryentity":"none","clientdata":"{}"}
            """;

        var request = CreateRecordInSolution("workflow", fields, "solution_components");

        Assert.AreEqual("Sample Flow", request.Target.GetAttributeValue<string>("name"));
        Assert.AreEqual(5, request.Target.GetAttributeValue<OptionSetValue>("category").Value);
        Assert.AreEqual(1, request.Target.GetAttributeValue<OptionSetValue>("type").Value);
    }

    [TestMethod]
    public void ManageRecord_CreateInSolution_DryRunShowsSolutionAndSkipsMutation()
    {
        SeedSolution();
        _fake.OnCreate = _ => throw new InvalidOperationException("Dry run issued an SDK create.");

        var result = CreateTool(dryRun: true).manage_record(action: "create", entity_name: "account",
            fields_json: """{"name":"Preview"}""", solution_name: "Solution Components");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "in solution 'solution_components'");
        Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.IsFalse(_requests.OfType<CreateRequest>().Any());
    }

    [TestMethod]
    [DataRow(true, "Solution Components", "is managed")]
    [DataRow(false, "Missing Solution", "was not found")]
    public void ManageRecord_CreateInSolution_RejectsInvalidSolutionBeforeMutation(bool isManaged, string solutionName, string expectedError)
    {
        SeedSolution(isManaged);
        var legacyCreateCalled = false;
        _fake.OnCreate = _ =>
        {
            legacyCreateCalled = true;
            return Guid.NewGuid();
        };

        var result = CreateTool().manage_record(action: "create", entity_name: "account",
            fields_json: """{"name":"Create"}""", solution_name: solutionName);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), expectedError);
        Assert.IsFalse(_requests.OfType<CreateRequest>().Any());
        Assert.IsFalse(legacyCreateCalled);
    }

    [TestMethod]
    public void ManageRecord_SolutionNameForOtherActions_ReturnsSupportedActions()
    {
        var result = CreateTool().manage_record(action: "update", entity_name: "account", record_id: Guid.NewGuid().ToString(),
            fields_json: """{"name":"Update"}""", solution_name: "Solution Components");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "solution_name is supported for 'create', 'add_to_solution', 'remove_from_solution', and 'add_solution_component' only");
        Assert.IsEmpty(_requests);
    }

    [TestMethod]
    [DataRow("workflow", "\"workflow\"", 29)]
    [DataRow("workflow", "29", 29)]
    [DataRow("workflow", "\"Cloud Flow\"", 29)]
    [DataRow("role", "\"Security Role\"", 20)]
    [DataRow("role", "20", 20)]
    [DataRow("connectionreference", "\"connectionreference\"", 10426)]
    [DataRow("connectionreference", "\"Connection Reference\"", 10169)]
    [DataRow("connectionreference", "10169", 10169)]
    public void AddSolutionComponent_ResolvesNameOrTypeIdAndDisablesDependencies(string entity, string typeJson, int typeId)
    {
        var record = new Entity(entity, Guid.NewGuid()) { ["ismanaged"] = false };
        SeedComponentForAddition(record, typeId);

        var result = CreateTool().manage_record(action: "add_solution_component", record_id: record.Id.ToString(),
            solution_name: "Solution Components", component_type: JsonSerializer.Deserialize<JsonElement>(typeJson));

        Assert.IsFalse(result.IsError == true, result.GetText());
        var request = _requests.OfType<AddSolutionComponentRequest>().Single();
        Assert.AreEqual(record.Id, request.ComponentId);
        Assert.AreEqual(typeId, request.ComponentType);
        Assert.AreEqual("solution_components", request.SolutionUniqueName);
        Assert.IsFalse(request.AddRequiredComponents);
        Assert.IsTrue(request.DoNotIncludeSubcomponents);
        var payload = result.StructuredContent!.Value;
        Assert.AreEqual("added_to_solution", payload.GetProperty("status").GetString());
        Assert.AreEqual(typeId, payload.GetProperty("componentType").GetInt32());
        Assert.AreEqual("solution_components", payload.GetProperty("solutionName").GetString());
    }

    [TestMethod]
    [DataRow("Default", "Default Solution", false, "system solution")]
    [DataRow("Active", "Active Solution", false, "system solution")]
    [DataRow("managed_core", "Managed Core", true, "is managed")]
    public void AddSolutionComponent_RejectsDefaultActiveAndManagedTargets(string uniqueName, string displayName, bool isManaged, string error)
    {
        SeedSolution(isManaged, uniqueName, displayName);
        _fake.OnRetrieve = (_, _, _) => throw new InvalidOperationException("Invalid targets must fail before publisher lookup.");

        var result = CreateTool().manage_record(action: "add_solution_component", record_id: Guid.NewGuid().ToString(),
            solution_name: displayName, component_type: JsonSerializer.SerializeToElement(29));

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), error);
        Assert.IsFalse(_requests.OfType<AddSolutionComponentRequest>().Any());
    }

    [TestMethod]
    [DataRow(true, true, 29, "managed")]
    [DataRow(false, false, 29, "was not found")]
    [DataRow(true, false, 10169, "unknown or ambiguous")]
    public void AddSolutionComponent_RejectsInvalidSourceOrOrgSpecificType(bool recordExists, bool managed, int requestedType, string error)
    {
        var record = new Entity("workflow", Guid.NewGuid()) { ["ismanaged"] = managed };
        SeedComponentForAddition(record, 29, recordExists);

        var result = CreateTool().manage_record(action: "add_solution_component", record_id: record.Id.ToString(),
            solution_name: "solution_components", component_type: JsonSerializer.SerializeToElement(requestedType));

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), error);
        Assert.IsFalse(_requests.OfType<AddSolutionComponentRequest>().Any());
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public void AddSolutionComponent_MetadataIdUsesExistingMembershipToVerifySource(bool managed)
    {
        var metadataId = Guid.NewGuid();
        SeedSolution();
        var resolveTarget = _fake.OnRetrieveMultiple;
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is not QueryExpression { EntityName: "solution", LinkEntities.Count: > 0 } membership)
                return resolveTarget!(query);

            var conditions = membership.LinkEntities.Single().LinkCriteria.Conditions
                .ToDictionary(condition => condition.AttributeName);
            Assert.AreEqual(metadataId, conditions["objectid"].Values.Single());
            Assert.AreEqual(9, conditions["componenttype"].Values.Single());
            Assert.AreEqual("ismanaged", membership.Orders.Single().AttributeName);
            Assert.AreEqual(OrderType.Descending, membership.Orders.Single().OrderType);
            return new EntityCollection([new Entity("solution") { ["ismanaged"] = managed }]);
        };

        var result = CreateTool().manage_record(action: "add_solution_component", record_id: metadataId.ToString(),
            solution_name: "solution_components", component_type: JsonSerializer.SerializeToElement("Global Option Set"));

        Assert.AreEqual(managed, result.IsError == true, result.GetText());
        if (managed)
            Assert.IsFalse(_requests.OfType<AddSolutionComponentRequest>().Any());
        else
            Assert.AreEqual(metadataId, _requests.OfType<AddSolutionComponentRequest>().Single().ComponentId);
    }

    [TestMethod]
    public void AddSolutionComponent_DryRunReturnsResolvedTypeAndDoesNotAttach()
    {
        var record = new Entity("connectionreference", Guid.NewGuid()) { ["ismanaged"] = false };
        SeedComponentForAddition(record, 10169);

        var result = CreateTool(dryRun: true).manage_record(action: "add_solution_component", record_id: record.Id.ToString(),
            solution_name: "solution_components", component_type: JsonSerializer.SerializeToElement(10169));

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual(10169, result.StructuredContent.Value.GetProperty("componentType").GetInt32());
        Assert.IsFalse(_requests.OfType<AddSolutionComponentRequest>().Any());
    }

    private void SeedComponentForAddition(Entity record, int typeId, bool recordExists = true)
    {
        SeedSolution();
        var resolveTarget = _fake.OnRetrieveMultiple;
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression entityQuery && entityQuery.EntityName == record.LogicalName)
            {
                var condition = entityQuery.Criteria.Conditions.Single();
                Assert.AreEqual(record.LogicalName + "id", condition.AttributeName);
                Assert.AreEqual(record.Id, condition.Values.Single());
                return recordExists ? new EntityCollection([record]) : new EntityCollection();
            }
            if (typeId >= 10000 && query is QueryExpression { EntityName: "solutioncomponentdefinition" })
                return new EntityCollection([new Entity("solutioncomponentdefinition")
                {
                    ["solutioncomponenttype"] = typeId,
                    ["primaryentityname"] = record.LogicalName,
                    ["name"] = "Connection Reference"
                }]);
            return resolveTarget!(query);
        };
    }

    [TestMethod]
    [DataRow("connectionreference", 10041)]
    [DataRow("connectionreference", 10372)]
    [DataRow("workflow", 29)]
    [DataRow("role", 20)]
    public void ManageRecord_AddExistingComponent_UsesCorrectTypeAndSolution(string entityName, int componentType)
    {
        var recordId = Guid.NewGuid();
        if (entityName == "connectionreference")
            SeedExistingComponent(entityName, recordId, componentType);
        else
            SeedExistingComponent(entityName, recordId);

        var result = CreateTool().manage_record(action: "add_to_solution", entity_name: entityName,
            record_id: recordId.ToString(), solution_name: "Solution Components");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var request = _requests.OfType<AddSolutionComponentRequest>().Single();
        Assert.AreEqual(recordId, request.ComponentId);
        Assert.AreEqual(componentType, request.ComponentType);
        Assert.AreEqual("solution_components", request.SolutionUniqueName);
        Assert.IsFalse(request.AddRequiredComponents);
        Assert.AreEqual("added_to_solution", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual(recordId.ToString(), result.StructuredContent.Value.GetProperty("id").GetString());
        StringAssert.Contains(result.GetText(), "to solution 'solution_components'");
    }

    [TestMethod]
    public void ManageRecord_AddExistingComponent_DryRunResolvesTypeAndSkipsMutation()
    {
        var recordId = Guid.NewGuid();
        SeedExistingComponent("connectionreference", recordId, 10426);

        var result = CreateTool(dryRun: true).manage_record(action: "add_to_solution", entity_name: "connectionreference",
            record_id: recordId.ToString(), solution_name: "solution_components");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would add 'connectionreference'");
        StringAssert.Contains(result.GetText(), "(component type 10426) to solution 'solution_components'");
        Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.IsFalse(_requests.OfType<AddSolutionComponentRequest>().Any());
    }

    [TestMethod]
    [DataRow("connectionreference", 10041)]
    [DataRow("connectionreference", 10372)]
    [DataRow("workflow", 29)]
    [DataRow("role", 20)]
    public void ManageRecord_RemoveFromSolution_RemovesMembershipAndPreservesRecord(string entityName, int componentType)
    {
        var recordId = Guid.NewGuid();
        SeedExistingComponent(entityName, recordId, entityName == "connectionreference" ? [componentType] : []);
        _fake.OnDelete = (_, _) => Assert.Fail("Removal must never call Delete on the record.");
        _fake.OnUpdate = _ => Assert.Fail("Removal must never update the record.");

        var result = CreateTool().manage_record(action: "remove_from_solution", entity_name: entityName,
            record_id: recordId.ToString(), solution_name: "Solution Components");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var request = _requests.Single(item => item is not RetrieveAllEntitiesRequest);
        Assert.IsInstanceOfType<RemoveSolutionComponentRequest>(request);
        var removal = (RemoveSolutionComponentRequest)request;
        Assert.AreEqual(recordId, removal.ComponentId);
        Assert.AreEqual(componentType, removal.ComponentType);
        Assert.AreEqual("solution_components", removal.SolutionUniqueName);
        Assert.AreEqual("removed_from_solution", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual(recordId, _fake.Client.Retrieve(entityName, recordId, new ColumnSet()).Id);
        StringAssert.Contains(result.GetText(), "from solution 'solution_components'");
    }

    [TestMethod]
    public void ManageRecord_RemoveFromSolution_DryRunResolvesTypeAndSkipsMutation()
    {
        var recordId = Guid.NewGuid();
        SeedExistingComponent("connectionreference", recordId, 10426);
        _fake.OnDelete = (_, _) => Assert.Fail("Dry run must never delete a record.");

        var result = CreateTool(dryRun: true).manage_record(action: "remove_from_solution", entity_name: "connectionreference",
            record_id: recordId.ToString(), solution_name: "solution_components");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would remove 'connectionreference'");
        StringAssert.Contains(result.GetText(), "(component type 10426) from solution 'solution_components'");
        Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
    }

    [TestMethod]
    [DataRow("connectionreference", 10041, false)]
    [DataRow("connectionreference", 10372, true)]
    [DataRow("workflow", 29, false)]
    [DataRow("role", 20, false)]
    public void ManageRecord_ListSolutions_ReturnsManagedAndUnmanagedMemberships(string entityName, int componentType, bool dryRun)
    {
        var recordId = Guid.NewGuid();
        SeedExistingComponent(entityName, recordId, entityName == "connectionreference" ? [componentType] : []);
        _fake.OnCreate = _ => throw new InvalidOperationException("Listing solutions must never create records.");
        _fake.OnUpdate = _ => Assert.Fail("Listing solutions must never update records.");
        _fake.OnDelete = (_, _) => Assert.Fail("Listing solutions must never delete records.");
        var managed = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "managed_core", ["friendlyname"] = "Managed Core", ["ismanaged"] = true,
            ["version"] = "1.2.3.4", ["pub.friendlyname"] = new AliasedValue("publisher", "friendlyname", "Contoso")
        };
        var unmanaged = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "unmanaged_extension", ["friendlyname"] = "Unmanaged Extension", ["ismanaged"] = false
        };
        StubContainingSolutions(recordId, componentType, query =>
        {
            if (query.PageInfo.PageNumber == 1)
                return new EntityCollection(new[] { managed }) { MoreRecords = true, PagingCookie = "next-page" };

            Assert.AreEqual(2, query.PageInfo.PageNumber);
            Assert.AreEqual("next-page", query.PageInfo.PagingCookie);
            return new EntityCollection(new[] { unmanaged });
        });
        var tool = new ManageRecordTool(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: dryRun));

        var result = tool.manage_record(action: "list_solutions", entity_name: entityName, record_id: recordId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
        StringAssert.Contains(result.GetText(), "Found 2 solution(s)");
        var payload = result.StructuredContent!.Value;
        Assert.AreEqual("list_solutions", payload.GetProperty("action").GetString());
        Assert.AreEqual("listed", payload.GetProperty("status").GetString());
        Assert.AreEqual(recordId.ToString(), payload.GetProperty("id").GetString());
        var solutions = payload.GetProperty("solutions");
        Assert.AreEqual(2, solutions.GetArrayLength());
        Assert.AreEqual(managed.Id.ToString(), solutions[0].GetProperty("solutionId").GetString());
        Assert.AreEqual("managed_core", solutions[0].GetProperty("uniqueName").GetString());
        Assert.AreEqual("Managed Core", solutions[0].GetProperty("displayName").GetString());
        Assert.AreEqual("1.2.3.4", solutions[0].GetProperty("version").GetString());
        Assert.AreEqual("Contoso", solutions[0].GetProperty("publisherName").GetString());
        Assert.IsTrue(solutions[0].GetProperty("isManaged").GetBoolean());
        Assert.AreEqual("unmanaged_extension", solutions[1].GetProperty("uniqueName").GetString());
        Assert.IsFalse(solutions[1].GetProperty("isManaged").GetBoolean());
    }

    [TestMethod]
    public void ManageRecord_ListSolutions_NoMemberships_ReturnsEmptyArray()
    {
        var recordId = Guid.NewGuid();
        SeedExistingComponent("role", recordId);
        StubContainingSolutions(recordId, 20, _ => new EntityCollection());

        var result = CreateTool().manage_record(action: "list_solutions", entity_name: "role", record_id: recordId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 0 solution(s)");
        Assert.AreEqual(0, result.StructuredContent!.Value.GetProperty("solutions").GetArrayLength());
    }

    private void StubContainingSolutions(Guid recordId, int componentType, Func<QueryExpression, EntityCollection> pages)
    {
        var retrieveMultiple = _fake.OnRetrieveMultiple!;
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is not QueryExpression { EntityName: "solution" } solutionQuery)
                return retrieveMultiple(query);

            var link = solutionQuery.LinkEntities.Single(item => item.LinkToEntityName == "solutioncomponent");
            Assert.AreEqual(JoinOperator.Exists, link.JoinOperator);
            Assert.AreEqual("solutionid", link.LinkFromAttributeName);
            Assert.AreEqual("solutionid", link.LinkToAttributeName);
            var objectIdFilter = link.LinkCriteria.Conditions.Single(condition => condition.AttributeName == "objectid");
            var typeFilter = link.LinkCriteria.Conditions.Single(condition => condition.AttributeName == "componenttype");
            Assert.AreEqual(ConditionOperator.Equal, objectIdFilter.Operator);
            Assert.AreEqual(recordId, objectIdFilter.Values.Single());
            Assert.AreEqual(ConditionOperator.Equal, typeFilter.Operator);
            Assert.AreEqual(componentType, typeFilter.Values.Single());
            return pages(solutionQuery);
        };
    }

    [TestMethod]
    [DataRow("add_to_solution", false)]
    [DataRow("add_to_solution", true)]
    [DataRow("remove_from_solution", false)]
    [DataRow("remove_from_solution", true)]
    [DataRow("list_solutions", false)]
    public void ManageRecord_SolutionMembership_RejectsMissingOrAmbiguousDynamicType(string action, bool ambiguous)
    {
        var recordId = Guid.NewGuid();
        if (ambiguous)
            SeedExistingComponent("connectionreference", recordId, 10041, 10372);
        else
            SeedExistingComponent("connectionreference", recordId);

        var result = CreateTool().manage_record(action: action, entity_name: "connectionreference",
            record_id: recordId.ToString(), solution_name: action == "list_solutions" ? null : "solution_components");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Could not resolve a unique solution component type");
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
    }

    [TestMethod]
    [DataRow("add_to_solution")]
    [DataRow("remove_from_solution")]
    public void ManageRecord_SolutionMembership_RejectsManagedSolution(string action)
    {
        SeedSolution(isManaged: true);
        _entities.Add(TestMetadata.Entity("role", "Role"));

        var result = CreateTool().manage_record(action: action, entity_name: "role",
            record_id: Guid.NewGuid().ToString(), solution_name: "Solution Components");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "is managed");
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
    }

    [TestMethod]
    [DataRow("add_to_solution", "", "Solution Components", "record_id is required")]
    [DataRow("add_to_solution", "invalid", "Solution Components", "not a valid GUID")]
    [DataRow("add_to_solution", "00000000-0000-0000-0000-000000000000", "Solution Components", "must be a non-empty GUID")]
    [DataRow("add_to_solution", "076e0b2f-a6da-4e51-96d0-cf92f350cbe9", "", "solution_name is required")]
    [DataRow("remove_from_solution", "", "Solution Components", "record_id is required")]
    [DataRow("remove_from_solution", "076e0b2f-a6da-4e51-96d0-cf92f350cbe9", "", "solution_name is required")]
    public void ManageRecord_SolutionMembership_ValidatesRequiredArguments(string action, string recordId, string solutionName, string expectedError)
    {
        _entities.Add(TestMetadata.Entity("role", "Role"));

        var result = CreateTool().manage_record(action: action, entity_name: "role",
            record_id: recordId, solution_name: solutionName);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), expectedError);
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
    }

    [TestMethod]
    [DataRow("add_to_solution")]
    [DataRow("remove_from_solution")]
    [DataRow("list_solutions")]
    public void ManageRecord_SolutionMembership_RejectsMissingRecordBeforeMutation(string action)
    {
        SeedExistingComponent("workflow", Guid.NewGuid());

        var result = CreateTool().manage_record(action: action, entity_name: "workflow",
            record_id: Guid.NewGuid().ToString(), solution_name: action == "list_solutions" ? null : "solution_components");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "No 'workflow' record found");
        Assert.IsTrue(_requests.All(request => request is RetrieveAllEntitiesRequest));
    }

    private void SeedExistingComponent(string entityName, Guid recordId, params int[] componentTypes)
    {
        SeedSolution();
        _entities.Add(TestMetadata.Entity(entityName));
        var retrieve = _fake.OnRetrieve!;
        _fake.OnRetrieve = (table, id, columns) =>
        {
            if (table != entityName)
                return retrieve(table, id, columns);
            Assert.IsFalse(columns.AllColumns);
            Assert.IsEmpty(columns.Columns);
            return id == recordId ? new Entity(table, id) : null!;
        };
        var retrieveMultiple = _fake.OnRetrieveMultiple!;
        _fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "solutioncomponentdefinition" }
            ? new EntityCollection(componentTypes.Select(type => new Entity("solutioncomponentdefinition")
            {
                ["solutioncomponenttype"] = type,
                ["primaryentityname"] = entityName,
                ["name"] = "Connection Reference"
            }).ToArray())
            : retrieveMultiple(query);
    }

    private CreateRequest CreateRecordInSolution(string entityName, string fields, string solutionName)
    {
        SeedSolution();
        _fake.OnCreate = _ => throw new InvalidOperationException("Solution create used the convenience Create method.");

        var result = CreateTool().manage_record(action: "create", entity_name: entityName, fields_json: fields, solution_name: solutionName);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "in solution 'solution_components'");
        Assert.AreEqual(_createdId.ToString(), result.StructuredContent!.Value.GetProperty("id").GetString());
        var request = _requests.OfType<CreateRequest>().Single();
        Assert.AreEqual(entityName, request.Target.LogicalName);
        Assert.AreEqual("solution_components", request.Parameters["SolutionUniqueName"]);
        return request;
    }

    private void SeedSolution(bool isManaged = false, string uniqueName = "solution_components", string displayName = "Solution Components")
    {
        var publisher = new Entity("publisher", Guid.NewGuid()) { ["customizationprefix"] = "contoso" };
        var solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = uniqueName,
            ["friendlyname"] = displayName,
            ["ismanaged"] = isManaged,
            ["publisherid"] = publisher.ToEntityReference()
        };
        _fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "solution" }
            ? new EntityCollection(new[] { solution })
            : new EntityCollection();
        _fake.OnRetrieve = (entityName, id, _) => entityName == "publisher" && id == publisher.Id
            ? publisher
            : throw new InvalidOperationException($"Unexpected retrieve of {entityName} {id}.");
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
