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
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

/// <summary>
/// Gate and rare-path coverage: get_business_process_flows resolution/empty/paging
/// paths and manage_environment_variable create gates plus definition lookups.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class SmallToolGateCoverageWave3bTests
{
    // ──────────────────────────────────────────────
    // get_business_process_flows
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task GetBpf_Unknown_Entity_Returns_Resolver_Error()
    {
        var tool = NewBpfTool(null);
        var result = await CallWorker(tool, "get_business_process_flows",
            ("entity_name", "NoSuchEntity"));
        StringAssert.Contains(Text(result), "Use inspect_metadata(resource='tables') to list entities before calling");
    }

    [TestMethod]
    public async Task GetBpf_Name_Without_Match_Returns_Error()
    {
        var tool = NewBpfTool(null);
        var result = await CallWorker(tool, "get_business_process_flows",
            ("bpf_name", "NoSuch Flow"));
        StringAssert.Contains(Text(result), "No Business Process Flow matched bpf_name");
    }

    [TestMethod]
    public async Task GetBpf_Empty_List_Reports_Zero_Found()
    {
        var tool = NewBpfTool(null);
        var result = await CallWorker(tool, "get_business_process_flows");
        StringAssert.Contains(Text(result), "0 found");
    }

    [TestMethod]
    public async Task GetBpf_Paging_Follows_More_Records()
    {
        var pageOne = new EntityCollection(new List<Entity>
        {
            new("workflow", Guid.NewGuid()) { ["name"] = "BPF One" }
        })
        {
            MoreRecords = true,
            PagingCookie = "bpf-cookie-1"
        };
        var pageTwo = new EntityCollection(new List<Entity>
        {
            new("workflow", Guid.NewGuid()) { ["name"] = "BPF Two" }
        })
        {
            MoreRecords = false
        };
        var tool = NewBpfTool(new Queue<EntityCollection>(new[] { pageOne, pageTwo }));
        var result = await CallWorker(tool, "get_business_process_flows", ("status", "all"));
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(result)));
    }

    // ──────────────────────────────────────────────
    // manage_environment_variable
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageEnvVar_Create_Requires_Display_Name()
    {
        var tool = NewEnvVarTool();
        var result = tool.manage_environment_variable("create", variable_name: "devkit_new");
        StringAssert.Contains(Text(result), "display_name is required for 'create'");
    }

    [TestMethod]
    public void ManageEnvVar_Create_Requires_Type()
    {
        var tool = NewEnvVarTool();
        var result = tool.manage_environment_variable("create", variable_name: "devkit_new",
            display_name: "New Variable");
        StringAssert.Contains(Text(result), "type is required for 'create'");
    }

    [TestMethod]
    public void ManageEnvVar_Detail_Looks_Up_Definition()
    {
        var tool = NewEnvVarTool();
        var detail = tool.manage_environment_variable("detail", variable_name: "devkit_missing");
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(detail)));
        var list = tool.manage_environment_variable("list");
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(list)));
    }

    // ──────────────────────────────────────────────
    // get_business_rules / get_plugins / get_solution_components
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task GetBusinessRules_Unknown_Entity_Returns_Resolver_Error()
    {
        var tool = new GetBusinessRulesTool(NewScriptService(null));
        var result = await CallWorker(tool, "get_business_rules", ("entity_name", "NoSuchEntity"));
        StringAssert.Contains(Text(result), "Use inspect_metadata(resource='tables') to list entities before calling");
    }

    [TestMethod]
    public async Task GetBusinessRules_RuleId_Detail_Path()
    {
        var tool = new GetBusinessRulesTool(NewScriptService(null));
        var result = await CallWorker(tool, "get_business_rules",
            ("entity_name", "account"), ("rule_id", Guid.NewGuid().ToString()));
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(result)));
    }

    [TestMethod]
    public async Task GetPlugins_Stage_Name_Maps_To_Value()
    {
        var tool = new GetPluginsTool(NewScriptService(null));
        var result = await CallWorker(tool, "get_plugins", ("stage", "preoperation"));
        Assert.IsFalse(string.IsNullOrWhiteSpace(Text(result)));
    }

    [TestMethod]
    public async Task GetSolutionComponents_Unknown_Solution_Returns_Error()
    {
        var tool = new GetSolutionComponentsTool(NewScriptService(null));
        var result = await CallWorker(tool, "get_solution_components", ("solution_name", "NoSuchSolution"));
        Assert.IsTrue(result.IsError);
    }

    // ──────────────────────────────────────────────
    // fixtures
    // ──────────────────────────────────────────────

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private static GetBusinessProcessFlowsTool NewBpfTool(Queue<EntityCollection>? pages)
    {
        var script = NewScriptService(pages);
        return new GetBusinessProcessFlowsTool(script);
    }

    private static ManageEnvironmentVariableTool NewEnvVarTool()
    {
        var script = NewScriptService(null);
        return new ManageEnvironmentVariableTool(script, new McpDryRunOptions(), new McpExecutionContext(false));
    }

    private static MetadataScriptOrgService NewScriptService(Queue<EntityCollection>? pages)
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
        return new MetadataScriptOrgService(service, pages);
    }

    private static async Task<CallToolResult> CallEntry(object tool, string toolName,
        params (string Key, object? Value)[] overrides)
    {
        var method = FindMethod(tool, toolName, attributedOnly: true);
        return await Invoke(method, tool, BuildArgs(method, overrides));
    }

    private static async Task<CallToolResult> CallWorker(object tool, string methodName,
        params (string Key, object? Value)[] overrides)
    {
        var method = FindMethod(tool, methodName, attributedOnly: false);
        return await Invoke(method, tool, BuildArgs(method, overrides));
    }

    private static MethodInfo FindMethod(object tool, string name, bool attributedOnly)
    {
        return tool.GetType().GetMethods()
            .Where(m => attributedOnly
                ? m.GetCustomAttribute(typeof(ModelContextProtocol.Server.McpServerToolAttribute), false) is ModelContextProtocol.Server.McpServerToolAttribute attr && string.Equals(attr.Name, name, StringComparison.Ordinal)
                : m.Name == name)
            .OrderByDescending(m => m.GetParameters().Length)
            .First();
    }

    private static object?[] BuildArgs(MethodInfo method, (string Key, object? Value)[] overrides)
    {
        var parameters = method.GetParameters();
        var args = parameters.Select(p => p.HasDefaultValue
            ? Type.Missing
            : p.ParameterType.IsValueType ? Activator.CreateInstance(p.ParameterType) : null).ToArray();
        foreach (var (key, value) in overrides)
        {
            var index = Array.FindIndex(parameters, p => p.Name == key);
            Assert.IsTrue(index >= 0, $"Parameter '{key}' not found on {method.DeclaringType!.Name}.{method.Name}.");
            args[index] = value;
        }
        return args;
    }

    private static async Task<CallToolResult> Invoke(MethodInfo method, object tool, object?[] args)
    {
        var raw = method.Invoke(tool,
            BindingFlags.OptionalParamBinding | BindingFlags.Instance | BindingFlags.Public, null, args, null)!;
        return raw is Task<CallToolResult> task ? await task.ConfigureAwait(false) : (CallToolResult)raw;
    }

    private sealed class MetadataScriptOrgService(IOrganizationService inner, Queue<EntityCollection>? pages) : IOrganizationService
    {
        public readonly List<EntityMetadata> Entities =
        [
            new() { LogicalName = "account", SchemaName = "Account", MetadataId = Guid.NewGuid() }
        ];

        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => inner.Update(entity);
        public void Delete(string entityName, Guid id) => inner.Delete(entityName, id);

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (pages is { Count: > 0 })
                return pages.Dequeue();
            if (query is FetchExpression fetch && fetch.Query.Contains("workflow"))
                return new EntityCollection();
            return inner.RetrieveMultiple(query);
        }

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
    }
}
