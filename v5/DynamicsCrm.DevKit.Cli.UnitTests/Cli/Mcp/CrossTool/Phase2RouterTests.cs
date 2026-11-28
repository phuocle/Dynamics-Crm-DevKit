#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

[TestClass]
public sealed class Phase2RouterTests
{
    private static readonly string[] All14ToolNames =
    [
        "get_context", "read_instruction", "query_data",
        "inspect_metadata", "inspect_automation", "inspect_diagnostics",
        "manage_data", "manage_schema", "manage_ui",
        "manage_commanding", "manage_logic", "manage_assets",
        "manage_admin", "execute_webapi"
    ];

    private static readonly string[] Phase1RoToolNames =
    [
        "get_context", "read_instruction", "query_data",
        "inspect_metadata", "inspect_automation", "inspect_diagnostics"
    ];

    private static readonly string[] Phase2RwToolNames =
    [
        "manage_data", "manage_schema", "manage_ui",
        "manage_commanding", "manage_logic", "manage_assets",
        "manage_admin", "execute_webapi"
    ];

    private static readonly string[] All40RetiredToolNames =
    [
        // Phase 1 retired (18)
        "whoami", "connection_list", "parse_record_url",
        "execute_fetchxml", "execute_sql", "search_records",
        "get_tables", "get_solution_components", "get_custom_controls",
        "get_plugins", "get_workflows", "get_flows", "get_business_process_flows", "get_business_rules", "get_messages",
        "get_audit_history", "get_plugin_trace_logs", "get_system_jobs",
        // Phase 2 retired (22)
        "manage_record", "upsert_records", "manage_record_file", "manage_deleted_records", "generate_demo_data",
        "manage_table", "manage_column", "manage_relationship", "manage_choice",
        "manage_form", "manage_view", "manage_chart", "manage_app",
        "manage_ribbon", "manage_command",
        "manage_custom_api", "manage_function",
        "manage_webresource", "manage_report",
        "manage_role", "manage_environment_variable", "publish_customizations"
    ];

    // ── Governance, Token Budget, SDK 2.x & Zero-Stale-Hint Guards ───────────

    [TestMethod]
    public void Phase2Schema_HasExact14Tools_CompactBudget_ValidAnnotations_AndZeroStaleHints()
    {
        var services = new ServiceCollection();
        services.AddLogging();
        services.AddMcpServer().WithToolsFromAssembly(typeof(McpServerHost).Assembly);

        using var sp = services.BuildServiceProvider();
        var protocolTools = sp.GetRequiredService<IOptions<McpServerOptions>>().Value
            .ToolCollection!.Select(t => t.ProtocolTool).ToList();

        Assert.AreEqual(14, protocolTools.Count, "Consolidated server must expose exactly 14 tools (6 RO + 8 RW).");
        Assert.IsTrue(protocolTools.Count <= 16, "Hard tool budget cap is 16 tools.");

        var names = protocolTools.Select(t => t.Name).ToHashSet(StringComparer.Ordinal);
        foreach (var expected in All14ToolNames)
            Assert.IsTrue(names.Contains(expected), $"Missing consolidated tool '{expected}'.");
        foreach (var retired in All40RetiredToolNames)
            Assert.IsFalse(names.Contains(retired), $"Retired tool '{retired}' must not be registered.");

        var opts = new JsonSerializerOptions { WriteIndented = false, DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };
        var totalChars = 0;

        var retiredPattern = new Regex(
            @"(?<!\.devkit/)\b(connection_list|parse_record_url|execute_fetchxml|execute_sql|search_records|get_tables|get_solution_components|get_custom_controls|get_plugins|get_workflows|get_flows|get_business_process_flows|get_business_rules|get_messages|get_audit_history|get_plugin_trace_logs|get_system_jobs|manage_record|upsert_records|manage_record_file|manage_deleted_records|generate_demo_data|manage_table|manage_column|manage_relationship|manage_choice|manage_form|manage_view|manage_chart|manage_app|manage_ribbon|manage_command|manage_custom_api|manage_function|manage_webresource|manage_report|manage_role|manage_environment_variable|publish_customizations)\b",
            RegexOptions.Compiled);
        var bareWhoamiPattern = new Regex(
            @"(?<!action=')(?<!['""])\bwhoami\b(?!['""])",
            RegexOptions.Compiled);

        var violations = new List<string>();
        foreach (var tool in protocolTools)
        {
            if (Phase1RoToolNames.Contains(tool.Name))
            {
                Assert.AreEqual(true, tool.Annotations?.ReadOnlyHint, $"{tool.Name} must be ReadOnly=true.");
                Assert.AreEqual(false, tool.Annotations?.DestructiveHint, $"{tool.Name} must be Destructive=false.");
                Assert.AreEqual(true, tool.Annotations?.IdempotentHint, $"{tool.Name} must be Idempotent=true.");
            }
            else if (Phase2RwToolNames.Contains(tool.Name))
            {
                Assert.AreEqual(false, tool.Annotations?.ReadOnlyHint, $"{tool.Name} must be ReadOnly=false.");
                Assert.AreEqual(true, tool.Annotations?.DestructiveHint, $"{tool.Name} must be Destructive=true.");
            }

            // MCP SDK 2.x rule: no optional params forced into required[]
            Assert.IsFalse(
                tool.InputSchema.TryGetProperty("required", out var req) && req.GetArrayLength() > 0,
                $"{tool.Name} has unexpected required[] entries in InputSchema.");

            // All 12 polymorphic routers must emit compact {"type":"object"} outputSchema
            if (tool.Name is not ("read_instruction" or "execute_webapi"))
            {
                Assert.IsTrue(tool.OutputSchema.HasValue, $"{tool.Name} must declare OutputSchemaType=typeof(JsonObject).");
                Assert.AreEqual("{\"type\":\"object\"}", JsonSerializer.Serialize(tool.OutputSchema.Value, opts),
                    $"{tool.Name} polymorphic router must emit compact {{\"type\":\"object\"}} outputSchema.");
            }

            totalChars += JsonSerializer.Serialize(tool, opts).Length;

            var blob = (tool.Description ?? string.Empty) + "\n" + tool.InputSchema.GetRawText();
            foreach (Match m in retiredPattern.Matches(blob))
                violations.Add($"{tool.Name}: mentions retired tool '{m.Value}'");
            foreach (Match m in bareWhoamiPattern.Matches(blob))
                violations.Add($"{tool.Name}: mentions bare retired tool '{m.Value}'");
        }

        Assert.AreEqual(0, violations.Count,
            "Stale retired tool names found in registered MCP tool schemas:\n" + string.Join("\n", violations));

        // Baseline 42 tools = 215,375 chars; consolidated 14 tools must be < 48,000 chars (>77% reduction)
        Assert.IsTrue(totalChars < 48_000,
            $"Consolidated 14 tools serialized to {totalChars} chars, exceeding 48,000-char budget (baseline was 215,375 chars).");
    }

    // ── ManageDataTool (manage_data) Parity & Validation ─────────────────────

    [TestMethod]
    public async Task ManageData_ValidatesResourceActionPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var webApi = new StubWebApiExecutor();
        var resolver = new FakeResolver(service, opts, ctx, webApi);
        var router = new ManageDataTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bulk", action: "delete")).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "demo", action: "delete")).IsError == true);

        var badKey = await router.InvokeAsync(resource: "record", action: "read", payload: JsonNode.Parse("""{"unknownKey":1}""")!.AsObject());
        Assert.IsTrue(badKey.IsError == true);
        StringAssert.Contains(Text(badKey), "docs://data_operations_guide");

        AssertResultParity("manage_data(record invalid action)",
            await router.InvokeAsync(resource: "record", action: "invalid"),
            new ManageRecordTool(service, opts, ctx).manage_record(action: "invalid"));

        AssertResultParity("manage_data(file invalid action)",
            await router.InvokeAsync(resource: "file", action: "invalid"),
            await new ManageRecordFileTool(service, opts, ctx).manage_record_file(null, action: "invalid"));

        AssertResultParity("manage_data(deleted invalid action)",
            await router.InvokeAsync(resource: "deleted", action: "invalid"),
            new ManageDeletedRecordsTool(service, opts, ctx, webApi).manage_deleted_records(action: "invalid"));

        AssertResultParity("manage_data(demo empty entity)",
            await router.InvokeAsync(resource: "demo", entity_name: ""),
            await new GenerateDemoDataTool(service, opts).generate_demo_data(null, entity_name: ""));

        var envResult = await router.InvokeAsync(resource: "record", action: "invalid", env: "2");
        StringAssert.Contains(Text(envResult), "| env 2");
    }

    // ── ManageSchemaTool (manage_schema) Parity & Validation ─────────────────

    [TestMethod]
    public async Task ManageSchema_ValidatesResourceActionPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var webApi = new StubWebApiExecutor();
        var resolver = new FakeResolver(service, opts, ctx, webApi);
        var router = new ManageSchemaTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "table", action: "drop")).IsError == true);

        var badKey = await router.InvokeAsync(resource: "column", payload: JsonNode.Parse("""{"nope":true}""")!.AsObject());
        Assert.IsTrue(badKey.IsError == true);
        StringAssert.Contains(Text(badKey), "docs://schema_tools_guide");

        AssertResultParity("manage_schema(table missing fields)",
            await router.InvokeAsync(resource: "table"),
            new ManageTableTool(service, opts, ctx).manage_table());

        AssertResultParity("manage_schema(column missing entity)",
            await router.InvokeAsync(resource: "column", entity_name: ""),
            new ManageColumnTool(service, opts, ctx, webApi, resolver).manage_column(entity_name: ""));

        AssertResultParity("manage_schema(relationship invalid action)",
            await router.InvokeAsync(resource: "relationship", action: "invalid"),
            new ManageRelationshipTool(service, opts, ctx).manage_relationship(action: "invalid"));

        AssertResultParity("manage_schema(choice invalid action)",
            await router.InvokeAsync(resource: "choice", action: "invalid"),
            new ManageChoiceTool(service, opts, ctx).manage_choice(action: "invalid"));
    }

    // ── ManageUiTool (manage_ui) Parity & Validation ─────────────────────────

    [TestMethod]
    public async Task ManageUi_ValidatesResourceAndPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var webApi = new StubWebApiExecutor();
        var resolver = new FakeResolver(service, opts, ctx, webApi);
        var router = new ManageUiTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);

        AssertResultParity("manage_ui(form invalid action)",
            await router.InvokeAsync(resource: "form", action: "invalid"),
            await new ManageFormTool(service, opts, ctx).manage_form(null, action: "invalid"));

        AssertResultParity("manage_ui(view invalid action)",
            await router.InvokeAsync(resource: "view", action: "invalid"),
            await new ManageViewTool(service, opts, ctx, webApi).manage_view(null, action: "invalid"));

        AssertResultParity("manage_ui(chart invalid action)",
            await router.InvokeAsync(resource: "chart", action: "invalid"),
            await new ManageChartTool(service, opts, ctx).manage_chart(null, action: "invalid"));

        AssertResultParity("manage_ui(app invalid action)",
            await router.InvokeAsync(resource: "app", action: "invalid"),
            await new ManageAppTool(service, opts, ctx).manage_app(null, action: "invalid"));
    }

    // ── ManageCommandingTool (manage_commanding) Parity & Validation ─────────

    [TestMethod]
    public async Task ManageCommanding_ValidatesResourceAndPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var resolver = new FakeResolver(service, opts, ctx, new StubWebApiExecutor());
        var router = new ManageCommandingTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);

        AssertResultParity("manage_commanding(ribbon invalid action)",
            await router.InvokeAsync(resource: "ribbon", action: "invalid"),
            await new ManageRibbonTool(service, opts, ctx).manage_ribbon(null, action: "invalid"));

        AssertResultParity("manage_commanding(command invalid action)",
            await router.InvokeAsync(resource: "command", action: "invalid"),
            new ManageCommandTool(service, opts, ctx).manage_command(action: "invalid"));
    }

    // ── ManageLogicTool (manage_logic) Parity & Validation ───────────────────

    [TestMethod]
    public async Task ManageLogic_ValidatesResourceAndPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var resolver = new FakeResolver(service, opts, ctx, new StubWebApiExecutor());
        var router = new ManageLogicTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);

        AssertResultParity("manage_logic(custom_api invalid action)",
            await router.InvokeAsync(resource: "custom_api", action: "invalid"),
            new ManageCustomApiTool(service, opts, ctx).manage_custom_api(action: "invalid"));

        AssertResultParity("manage_logic(function invalid action)",
            await router.InvokeAsync(resource: "function", action: "invalid"),
            new ManageFunctionTool(service, opts, ctx).manage_function(action: "invalid"));
    }

    // ── ManageAssetsTool (manage_assets) Parity & Validation ─────────────────

    [TestMethod]
    public async Task ManageAssets_ValidatesResourceAndPayload_AndMatchesLegacyWorkers()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions();
        var ctx = new McpExecutionContext(false);
        var resolver = new FakeResolver(service, opts, ctx, new StubWebApiExecutor());
        var router = new ManageAssetsTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);

        AssertResultParity("manage_assets(webresource invalid action)",
            await router.InvokeAsync(resource: "webresource", action: "invalid"),
            new ManageWebResourceTool(service, opts, ctx).manage_webresource(action: "invalid"));

        AssertResultParity("manage_assets(report invalid action)",
            await router.InvokeAsync(resource: "report", action: "invalid"),
            await new ManageReportTool(null!, opts, ctx, new StubConnectionInfo()).manage_report(null, action: "invalid"));
    }

    // ── ManageAdminTool (manage_admin) Parity, Dry-Run & Validation ──────────

    [TestMethod]
    public async Task ManageAdmin_ValidatesResourceActionPayload_MatchesLegacyWorkers_AndPreservesDryRun()
    {
        var service = NewFakeService();
        var opts = new McpDryRunOptions { DryRun = true };
        var ctx = new McpExecutionContext(true);
        var resolver = new FakeResolver(service, true, new StubWebApiExecutor());
        var router = new ManageAdminTool(resolver);

        Assert.IsTrue((await router.InvokeAsync()).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "bogus")).IsError == true);
        Assert.IsTrue((await router.InvokeAsync(resource: "publish", action: "rollback")).IsError == true);

        AssertResultParity("manage_admin(role invalid action)",
            await router.InvokeAsync(resource: "role", action: "invalid"),
            await new ManageRoleTool(service, opts, ctx).manage_role(null, action: "invalid"));

        AssertResultParity("manage_admin(env_var invalid action)",
            await router.InvokeAsync(resource: "env_var", action: "invalid"),
            new ManageEnvironmentVariableTool(service, opts, ctx).manage_environment_variable(action: "invalid"));

        // Dry-run preservation through router on publish (PublishAll 1-1 parity + [DryRun] prefix)
        var rDry = await router.InvokeAsync(resource: "publish");
        var lDry = new PublishCustomizationsTool(service, opts, ctx).publish_customizations();
        AssertResultParity("manage_admin(publish dry-run)", rDry, lDry);
        StringAssert.StartsWith(Text(rDry), "[DryRun]");
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private static void AssertResultParity(string label, CallToolResult routerResult, CallToolResult legacyResult)
    {
        Assert.AreEqual(legacyResult.IsError, routerResult.IsError, $"{label}: IsError mismatch.");
        Assert.AreEqual(Text(legacyResult), Text(routerResult), $"{label}: Text mismatch.");
        var legacyJson = legacyResult.StructuredContent?.GetRawText() ?? string.Empty;
        var routerJson = routerResult.StructuredContent?.GetRawText() ?? string.Empty;
        Assert.AreEqual(legacyJson, routerJson, $"{label}: StructuredContent JSON mismatch.");
    }

    private static readonly Guid CallerUserId = Guid.Parse("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa");

    private static IOrganizationService NewFakeService()
    {
        var ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        var svc = ctx.GetOrganizationService();
        svc.Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        var adminRoleId = Guid.NewGuid();
        svc.Create(new Entity("role", adminRoleId)
        {
            ["name"] = "System Administrator",
            ["roletemplateid"] = new EntityReference("roletemplate", new Guid("627090ff-40a3-4053-8790-584edc5be201"))
        });
        svc.Create(new Entity("systemuserroles", Guid.NewGuid())
        {
            ["systemuserid"] = CallerUserId,
            ["roleid"] = adminRoleId
        });
        return new WhoAmIShimService(svc);
    }

    private sealed class WhoAmIShimService(IOrganizationService inner) : IOrganizationService
    {
        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, Microsoft.Xrm.Sdk.Query.ColumnSet columnSet) => inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => inner.Update(entity);
        public void Delete(string entityName, Guid id) => inner.Delete(entityName, id);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => inner.Disassociate(entityName, entityId, relationship, relatedEntities);
        public EntityCollection RetrieveMultiple(Microsoft.Xrm.Sdk.Query.QueryBase query) => inner.RetrieveMultiple(query);
        public OrganizationResponse Execute(OrganizationRequest request) =>
            request is Microsoft.Crm.Sdk.Messages.WhoAmIRequest
                ? new Microsoft.Crm.Sdk.Messages.WhoAmIResponse { ["UserId"] = CallerUserId, ["BusinessUnitId"] = Guid.NewGuid(), ["OrganizationId"] = Guid.NewGuid() }
                : inner.Execute(request);
    }

    private sealed class StubWebApiExecutor : IWebApiExecutor
    {
        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string? contentType = null,
            CancellationToken cancellationToken = default)
            => new HttpResponseMessage(System.Net.HttpStatusCode.NotFound) { Content = new StringContent("{}") };

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string? contentType = null,
            CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "phase2-router-stub-token";
    }

    private sealed class StubConnectionInfo : IMcpConnectionInfo
    {
        public Uri ConnectedOrgUri => new("https://phase2-router.example.invalid");
        public string ConnectedOrgFriendlyName => "Phase2Router";
        public string ConnectedOrgUniqueName => "phase2router";
        public Version ConnectedOrgVersion => new(9, 2);
        public Guid TenantId => Guid.Empty;
        public string EnvironmentId => "phase2-router-env";
    }

    private sealed class FakeResolver(
        IOrganizationService service,
        bool dryRun,
        IWebApiExecutor webApi) : IMcpConnectionResolver
    {
        public FakeResolver(IOrganizationService service, McpDryRunOptions options, McpExecutionContext context, IWebApiExecutor webApi)
            : this(service, options.DryRun, webApi) { }

        private readonly ConnectionBundle _startup = new(
            "1", null!, dryRun, null!, service, null!, new StubConnectionInfo(), webApi, new MetadataService(null!), null);

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string? env, CancellationToken cancellationToken)
            => Task.FromResult(string.IsNullOrWhiteSpace(env) || env == StartupEnvId
                ? _startup
                : new ConnectionBundle(env.Trim(), null!, dryRun, null!, service, null!, new StubConnectionInfo(), webApi, new MetadataService(null!), null));

        public IReadOnlyList<ConnectionGroupInfo> ListGroups() =>
        [
            new ConnectionGroupInfo { Env = "1", Alias = "dev", IsStartupDefault = true, DryRun = dryRun }
        ];

        public IDisposable BeginInvocation() => new NoopLease();

        private sealed class NoopLease : IDisposable { public void Dispose() { } }
    }
}
