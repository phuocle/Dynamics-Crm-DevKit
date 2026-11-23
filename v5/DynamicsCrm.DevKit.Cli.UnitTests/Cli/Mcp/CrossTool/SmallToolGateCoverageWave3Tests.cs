using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

/// <summary>
/// Gate and rare-path coverage for small tools: the full read_instruction catalog,
/// execute_fetchxml auto-paging, manage_record catch paths, and manage_column
/// create validation gates (collision, required level, unknown type).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class SmallToolGateCoverageWave3Tests
{
    // ──────────────────────────────────────────────
    // read_instruction catalog
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ReadInstruction_Catalog_Returns_Content_For_Every_Entry()
    {
        var tool = new ReadInstructionTool();
        var catalog = await tool.read_instruction("");
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(catalog)));

        string[] uris =
        [
            "docs://data_operations_guide",
            "docs://instructions_for_sql",
            "docs://instructions_for_manage_ribbon",
            "docs://instructions_for_manage_report",
            "docs://instructions_for_manage_app",
            "docs://instructions_for_formxml",
            "docs://instructions_for_views",
            "docs://schema_tools_guide",
            "docs://server_logic_guide",
            "schema://formxml",
            "schema://layoutxml",
            "schema://fetchxml",
            "schema://sitemapxml"
        ];
        foreach (var uri in uris)
        {
            var result = await tool.read_instruction(uri);
            Assert.IsFalse(string.IsNullOrWhiteSpace(Text(result)), uri + " returned no content.");
        }

        var unknown = await tool.read_instruction("docs://no_such_resource");
        Assert.IsTrue(unknown.IsError == true || !string.IsNullOrWhiteSpace(Text(unknown)));
    }

    // ──────────────────────────────────────────────
    // execute_fetchxml paging
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteFetchXml_GetAll_Pages_Until_No_More_Records()
    {
        var pageOne = new EntityCollection(new List<Entity>
        {
            new("account", Guid.NewGuid()) { ["name"] = "First" }
        })
        {
            MoreRecords = true,
            PagingCookie = "cookie-1",
            TotalRecordCount = 2
        };
        var pageTwo = new EntityCollection(new List<Entity>
        {
            new("account", Guid.NewGuid()) { ["name"] = "Second" }
        })
        {
            MoreRecords = false
        };
        var service = new PagingOrgService([pageOne, pageTwo]);
        var tool = new ExecuteFetchXmlTool(service);

        var result = tool.execute_fetchxml("<fetch><entity name='account'><attribute name='name' /></entity></fetch>",
            get_all: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2");
    }

    // ──────────────────────────────────────────────
    // manage_record catch paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageRecord_Invalid_Action_Returns_Action_Error()
    {
        var tool = NewRecordTool(_ => { }, retrieveThrows: false);
        var result = tool.manage_record("bogus", entity_name: "account");
        StringAssert.Contains(Text(result), "Invalid action 'bogus'");
    }

    [TestMethod]
    public void ManageRecord_Ambiguous_Field_Returns_Candidates()
    {
        var tool = NewRecordTool(account =>
        {
            SetAttributes(account, MakeStringAttribute("a1", "New Field"), MakeStringAttribute("a2", "New Field"));
        }, retrieveThrows: false);
        var result = tool.manage_record("create", entity_name: "account",
            fields_json: "{\"New Field\":\"x\"}");
        StringAssert.Contains(Text(result), "Re-call with a more specific fields_json key value");
    }

    [TestMethod]
    public void ManageRecord_Service_Failure_Returns_Friendly_Error()
    {
        var tool = NewRecordTool(_ => { }, retrieveThrows: true);
        var result = tool.manage_record("read", entity_name: "account",
            record_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        Assert.IsFalse(Text(result).Contains("Connection routing"));
    }

    // ──────────────────────────────────────────────
    // manage_column create gates
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageColumn_Create_Ambiguous_Collision_Reports_Ambiguity()
    {
        var tool = NewColumnTool(account =>
        {
            SetAttributes(account, MakeStringAttribute("name", "Name"), MakeStringAttribute("name2", "Name"));
        });
        var result = tool.manage_column(entity_name: "account", display_name: "Name", attribute_type: "string");
        Assert.IsTrue(result.IsError);
        Assert.IsFalse(Text(result).Contains("already exists on entity"));
    }

    [TestMethod]
    public void ManageColumn_Create_Invalid_Required_Level()
    {
        var tool = NewColumnTool(account =>
        {
            SetAttributes(account, MakeStringAttribute("other", "Other"));
        });
        var result = tool.manage_column(entity_name: "account", display_name: "New Field",
            required_level: "Bogus");
        StringAssert.Contains(Text(result), "Invalid required_level 'Bogus'");
    }

    [TestMethod]
    public void ManageColumn_Create_Unknown_Attribute_Type()
    {
        var tool = NewColumnTool(account =>
        {
            SetAttributes(account, MakeStringAttribute("other", "Other"));
        });
        var result = tool.manage_column(entity_name: "account", display_name: "New Field",
            attribute_type: "bogus");
        StringAssert.Contains(Text(result), "Unknown attribute_type 'bogus'");
    }

    // ──────────────────────────────────────────────
    // fixtures
    // ──────────────────────────────────────────────

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private static StringAttributeMetadata MakeStringAttribute(string logical, string display) =>
        new()
        {
            LogicalName = logical,
            SchemaName = logical,
            DisplayName = new Label(display, 1033) { UserLocalizedLabel = new LocalizedLabel(display, 1033) }
        };

    private static void SetAttributes(EntityMetadata meta, params AttributeMetadata[] attributes) =>
        typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(meta, attributes);

    private static ManageRecordTool NewRecordTool(Action<EntityMetadata> configure, bool retrieveThrows)
    {
        var script = NewScriptService(configure, retrieveThrows);
        return new ManageRecordTool(script, new McpDryRunOptions(), new McpExecutionContext(false));
    }

    private static ManageColumnTool NewColumnTool(Action<EntityMetadata> configure)
    {
        var script = NewScriptService(configure, retrieveThrows: false);
        return new ManageColumnTool(script, new McpDryRunOptions(), new McpExecutionContext(false),
            new StubWebApiExecutor());
    }

    private static MetadataScriptOrgService NewScriptService(Action<EntityMetadata> configure, bool retrieveThrows)
    {
        var ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        var service = ctx.GetOrganizationService();
        service.Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        var script = new MetadataScriptOrgService(service)
        {
            RetrieveThrows = retrieveThrows
        };
        configure(script.Entities[0]);
        return script;
    }

    private sealed class MetadataScriptOrgService(IOrganizationService inner) : IOrganizationService
    {
        public readonly List<EntityMetadata> Entities = [MakeAccountMetadata()];
        public bool RetrieveThrows { get; set; }

        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet)
        {
            if (RetrieveThrows) throw new InvalidOperationException("simulated retrieve failure");
            return inner.Retrieve(entityName, id, columnSet);
        }
        public void Update(Entity entity) => inner.Update(entity);
        public void Delete(string entityName, Guid id) => inner.Delete(entityName, id);
        public EntityCollection RetrieveMultiple(QueryBase query) => inner.RetrieveMultiple(query);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is RetrieveAllEntitiesRequest all)
            {
                var resp = new RetrieveAllEntitiesResponse();
                resp.Results["EntityMetadata"] = Entities.ToArray();
                return resp;
            }
            if (request is RetrieveEntityRequest retrieveEntity)
            {
                var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase))
                    ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName };
                var resp = new RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta;
                return resp;
            }
            return inner.Execute(request);
        }

        private static EntityMetadata MakeAccountMetadata()
        {
            var meta = new EntityMetadata { LogicalName = "account", SchemaName = "Account", MetadataId = Guid.NewGuid() };
            typeof(EntityMetadata).GetProperty("DisplayName")!.SetValue(meta,
                new Label("Account", 1033) { UserLocalizedLabel = new LocalizedLabel("Account", 1033) });
            SetAttributes(meta, MakeStringAttribute("name", "Name"));
            return meta;
        }
    }

    private sealed class StubWebApiExecutor : IWebApiExecutor
    {
        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null,
            CancellationToken cancellationToken = default)
            => new HttpResponseMessage(System.Net.HttpStatusCode.NotFound) { Content = new StringContent("{}") };

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null,
            CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "stub-token";
    }

    private sealed class PagingOrgService(EntityCollection[] pages) : IOrganizationService
    {
        private int _calls;

        public Guid Create(Entity entity) => Guid.NewGuid();
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => new(entityName, id);
        public void Update(Entity entity) { }
        public void Delete(string entityName, Guid id) { }
        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            var page = pages[Math.Min(_calls, pages.Length - 1)];
            _calls++;
            return page;
        }
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) { }
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) { }

        public OrganizationResponse Execute(OrganizationRequest request) => new();
    }
}
