using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageEnvironmentVariable;

/// <summary>
/// Coverage for ManageEnvironmentVariableTool (list/detail/create/update/clear/delete).
/// Definition-list fetches and current-value queries are intercepted in the decorator;
/// solution/publisher resolution and definition lookups go through FakeXrmEasy CRUD.
/// </summary>
[TestClass]
public sealed class ManageEnvironmentVariableFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private EnvVarOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        var publisherId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", publisherId)
        {
            ["uniquename"] = "devkitpub",
            ["customizationprefix"] = "devkit"
        });
        _ctx.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", publisherId)
        });

        var defaultPublisherId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", defaultPublisherId)
        {
            ["uniquename"] = "defaultpub",
            ["customizationprefix"] = "new"
        });
        _ctx.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DefaultSolution",
            ["friendlyname"] = "Default",
            ["publisherid"] = new EntityReference("publisher", defaultPublisherId)
        });

        _service = new EnvVarOrgService(_ctx.GetOrganizationService());
    }

    private ManageEnvironmentVariableTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private Guid SeedDefinition(string schemaName, string displayName, int type = 100000000,
        string defaultValue = "", string description = "")
    {
        var id = Guid.NewGuid();
        var def = new Entity("environmentvariabledefinition", id)
        {
            ["schemaname"] = schemaName,
            ["displayname"] = displayName,
            ["type"] = new OptionSetValue(type)
        };
        if (defaultValue != "") def["defaultvalue"] = defaultValue;
        if (description != "") def["description"] = description;
        _ctx.GetOrganizationService().Create(def);
        return id;
    }

    private void SeedValue(Guid definitionId, string value)
    {
        _ctx.GetOrganizationService().Create(new Entity("environmentvariablevalue", Guid.NewGuid())
        {
            ["value"] = value,
            ["environmentvariabledefinitionid"] = new EntityReference("environmentvariabledefinition", definitionId)
        });
    }

    private static string Text(CallToolResult r) => r.GetText();

    private static string Json(CallToolResult r) => r.StructuredContent?.GetRawText() ?? "";

    // ──────────────────────────────────────────────
    // entry
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MissingAction_ReturnsError()
    {
        var result = NewTool().manage_environment_variable();
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action is required");
    }

    [TestMethod]
    public void InvalidAction_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public void List_NoVariables_ReturnsZero()
    {
        var result = NewTool().manage_environment_variable("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No environment variables found");
    }

    [TestMethod]
    public void List_WithVariables_ReturnsMaskedItems()
    {
        SeedDefinition("devkit_api", "Api", 100000000, "https://x", "endpoint");
        var secretId = SeedDefinition("devkit_secret", "Secret", 100000005, "topsecret");
        SeedValue(secretId, "s3cret");
        var result = NewTool().manage_environment_variable("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 environment variable(s)");
        var json = Json(result);
        StringAssert.Contains(json, "devkit_api");
        StringAssert.Contains(json, "(secret)");
        Assert.IsFalse(json.Contains("topsecret"));
        Assert.IsFalse(json.Contains("s3cret"));
    }

    [TestMethod]
    public void List_WithSolutionFilter_BuildsJoinFetch()
    {
        SeedDefinition("devkit_api", "Api");
        var result = NewTool().manage_environment_variable("list", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "in solution 'DevKit'");
        StringAssert.Contains(_service.LastListFetch!, "uniquename");
    }

    [TestMethod]
    public void List_UnknownSolution_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("list", solution_name: "ghost");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_MissingName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("detail");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "variable_name is required for 'detail'");
    }

    [TestMethod]
    public void Detail_UnknownName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("detail", variable_name: "devkit_ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "devkit_ghost");
    }

    [TestMethod]
    public void Detail_Found_WithCurrentValue()
    {
        var id = SeedDefinition("devkit_api", "Api Endpoint", 100000000, "https://default", "the endpoint");
        SeedValue(id, "https://current");
        var result = NewTool().manage_environment_variable("detail", variable_name: "devkit_api");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Environment variable 'devkit_api' (String)");
        var json = Json(result);
        StringAssert.Contains(json, "https://default");
        StringAssert.Contains(json, "https://current");
        StringAssert.Contains(json, "the endpoint");
    }

    [TestMethod]
    public void Detail_Secret_Masked()
    {
        var id = SeedDefinition("devkit_secret", "Secret", 100000005, "topsecret");
        SeedValue(id, "s3cret");
        var result = NewTool().manage_environment_variable("detail", variable_name: "devkit_secret");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "(secret)");
        Assert.IsFalse(json.Contains("topsecret"));
        Assert.IsFalse(json.Contains("s3cret"));
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_MissingDisplayName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("create", type: "string", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "display_name is required for 'create'");
    }

    [TestMethod]
    public void Create_MissingType_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "Api", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "type is required for 'create'");
    }

    [TestMethod]
    public void Create_DuplicateDisplayName_ReturnsError()
    {
        SeedDefinition("devkit_api", "Api Endpoint");
        var result = NewTool().manage_environment_variable("create", display_name: "Api Endpoint",
            type: "string", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "resolves to existing environment variable");
        StringAssert.Contains(Text(result), "Use action='update' to modify it");
    }

    [TestMethod]
    public void Create_MissingSolution_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "New Var", type: "string");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "solution_name is required for action='create'");
    }

    [TestMethod]
    public void Create_UnknownSolution_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "New Var",
            type: "string", solution_name: "ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create_ReservedNewPrefix_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "New Var",
            type: "string", solution_name: "DefaultSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "reserved prefix 'new'");
    }

    [TestMethod]
    public void Create_InvalidType_ReturnsError()
    {
        // display name unique, solution ok, but type invalid → HandleCreate maps to -1
        var result = NewTool().manage_environment_variable("create", display_name: "Brand New",
            type: "floppy", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid type 'floppy'");
    }

    [TestMethod]
    public void Create_DerivedSchemaNameAlreadyExists_ReturnsError()
    {
        SeedDefinition("devkit_ApiEndpoint", "Api Endpoint Existing");
        var result = NewTool().manage_environment_variable("create", display_name: "ApiEndpoint",
            type: "string", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Use action='update' to modify it");
    }

    [TestMethod]
    public void Create_DryRun_NoMutation()
    {
        var result = NewTool(dryRun: true).manage_environment_variable("create", display_name: "Dry Var",
            type: "json", default_value: "{}", value: "{}", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE environment variable 'devkit_DryVar' (type: JSON)");
        Assert.AreEqual(0, _service.Creates);
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Create_Success_WithValue()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "Api Endpoint",
            type: "string", default_value: "https://d", value: "https://c", description: "desc", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created environment variable 'devkit_ApiEndpoint' (String) in solution 'DevKit'");
        Assert.AreEqual(2, _service.Creates); // definition + current value
        StringAssert.Contains(Json(result), "\"https://c\"");
    }

    [TestMethod]
    public void Create_Success_NoValue()
    {
        var result = NewTool().manage_environment_variable("create", display_name: "No Value Var",
            type: "number", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created environment variable 'devkit_NoValueVar' (Number)");
        Assert.AreEqual(1, _service.Creates);
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_MissingName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("update");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "variable_name is required for 'update'");
    }

    [TestMethod]
    public void Update_UnknownName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Update_NothingToChange_ReturnsError()
    {
        SeedDefinition("devkit_api", "Api");
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_api");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Nothing to update");
        StringAssert.Contains(Text(result), "use action='clear' to remove it");
    }

    [TestMethod]
    public void Update_DefaultValueAndDescription_Updates()
    {
        SeedDefinition("devkit_api", "Api");
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_api",
            default_value: "https://new-default", description: "new desc");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated environment variable 'devkit_api' (definition)");
        Assert.AreEqual(1, _service.Updates);
    }

    [TestMethod]
    public void Update_Value_NoExisting_Creates()
    {
        var id = SeedDefinition("devkit_api", "Api");
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_api", value: "fresh");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "(current value)");
        StringAssert.Contains(Json(result), "\"fresh\"");
        Assert.AreEqual(1, _service.Creates);
    }

    [TestMethod]
    public void Update_Value_Existing_UpdatesInPlace()
    {
        var id = SeedDefinition("devkit_api", "Api");
        SeedValue(id, "old");
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_api", value: "new-value");
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(0, _service.Creates);
        StringAssert.Contains(Json(result), "\"new-value\"");
    }

    [TestMethod]
    public void Update_ValueOnly_KeepsExistingCurrent()
    {
        var id = SeedDefinition("devkit_api", "Api");
        SeedValue(id, "kept");
        var result = NewTool().manage_environment_variable("update", variable_name: "devkit_api",
            default_value: "dd");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Json(result), "\"kept\"");
    }

    [TestMethod]
    public void Update_DryRun()
    {
        SeedDefinition("devkit_api", "Api");
        var result = NewTool(dryRun: true).manage_environment_variable("update", variable_name: "devkit_api",
            display_name: "Renamed", value: "v2");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "(definition + current value)");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Creates);
    }

    // ──────────────────────────────────────────────
    // clear
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Clear_MissingName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("clear");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "variable_name is required for 'clear'");
    }

    [TestMethod]
    public void Clear_UnknownName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("clear", variable_name: "devkit_ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Clear_DryRun()
    {
        var id = SeedDefinition("devkit_api", "Api", 100000000, "def-val");
        SeedValue(id, "cur");
        var result = NewTool(dryRun: true).manage_environment_variable("clear", variable_name: "devkit_api");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CLEAR current value");
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Clear_Success_DeletesCurrentValue()
    {
        var id = SeedDefinition("devkit_api", "Api", 100000000, "def-val");
        SeedValue(id, "cur");
        var result = NewTool().manage_environment_variable("clear", variable_name: "devkit_api");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Cleared current value of environment variable 'devkit_api' (reverts to default)");
        Assert.AreEqual(1, _service.Deletes);
        StringAssert.Contains(Json(result), "\"def-val\"");
    }

    // ──────────────────────────────────────────────
    // delete
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Delete_MissingName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("delete");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "variable_name is required for 'delete'");
    }

    [TestMethod]
    public void Delete_UnknownName_ReturnsError()
    {
        var result = NewTool().manage_environment_variable("delete", variable_name: "devkit_ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Delete_DryRun()
    {
        SeedDefinition("devkit_api", "Api");
        var result = NewTool(dryRun: true).manage_environment_variable("delete", variable_name: "devkit_api");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would DELETE environment variable 'devkit_api'");
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Delete_Success_RemovesValueAndDefinition()
    {
        var id = SeedDefinition("devkit_api", "Api");
        SeedValue(id, "cur");
        var result = NewTool().manage_environment_variable("delete", variable_name: "devkit_api");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Deleted environment variable 'devkit_api'");
        Assert.AreEqual(2, _service.Deletes); // value + definition
    }

    // ──────────────────────────────────────────────
    // decorator
    // ──────────────────────────────────────────────

    private sealed class EnvVarOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public int Creates;
        public int Updates;
        public int Deletes;
        public string? LastListFetch;

        public EnvVarOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            return _inner.Create(entity);
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id)
        {
            Deletes++;
            _inner.Delete(entityName, id);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is AddSolutionComponentRequest)
                return new OrganizationResponse();
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fe && fe.Query.Contains("environmentvariabledefinition"))
            {
                LastListFetch = fe.Query;
                var rows = _inner.RetrieveMultiple(new QueryExpression("environmentvariabledefinition")
                {
                    ColumnSet = new ColumnSet(true)
                });
                // solution filter: without a join-aware executor, return all definitions
                return rows;
            }
            if (query is QueryExpression qe && string.Equals(qe.EntityName, "environmentvariablevalue", StringComparison.OrdinalIgnoreCase))
            {
                // Evaluate In/Equal conditions on environmentvariabledefinitionid manually.
                var all = _inner.RetrieveMultiple(new QueryExpression("environmentvariablevalue")
                {
                    ColumnSet = new ColumnSet(true)
                });
                var ids = new List<Guid>();
                foreach (var cond in qe.Criteria.Conditions)
                {
                    if (!string.Equals(cond.AttributeName, "environmentvariabledefinitionid", StringComparison.OrdinalIgnoreCase))
                        continue;
                    foreach (var v in cond.Values)
                        if (v is EntityReference er) ids.Add(er.Id);
                        else if (v is Guid g) ids.Add(g);
                }
                var rows = new EntityCollection();
                foreach (var row in all.Entities)
                {
                    var defRef = row.GetAttributeValue<EntityReference>("environmentvariabledefinitionid");
                    if (defRef != null && ids.Contains(defRef.Id))
                        rows.Entities.Add(row);
                }
                return rows;
            }
            return _inner.RetrieveMultiple(query);
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
