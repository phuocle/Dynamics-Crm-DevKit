#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing;
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
public sealed class Phase1RouterTests
{
    private static readonly string[] Phase1ToolNames =
    [
        "get_context",
        "read_instruction",
        "query_data",
        "inspect_metadata",
        "inspect_automation",
        "inspect_diagnostics"
    ];

    private static readonly string[] RetiredPhase1ToolNames =
    [
        "whoami", "connection_list", "parse_record_url",
        "execute_fetchxml", "execute_sql", "search_records",
        "get_tables", "get_solution_components", "get_custom_controls",
        "get_plugins", "get_workflows", "get_flows", "get_business_process_flows", "get_business_rules", "get_messages",
        "get_audit_history", "get_plugin_trace_logs", "get_system_jobs"
    ];

    // ── McpPayload unit tests ────────────────────────────────────────────────

    [TestMethod]
    public void McpPayload_SupportsDualSnakeAndCamelCase_AndJsonCoercion()
    {
        var json = JsonNode.Parse("""
        {
          "maxLength": 250,
          "custom_only": true,
          "operations": [{"action": "add_button"}],
          "viewIds": ["v1", "v2"],
          "precision": "4",
          "ratio": 1.5
        }
        """)!.AsObject();

        var p = McpPayload.From(json);
        Assert.IsTrue(p.HasKey("max_length"));
        Assert.AreEqual(250, p.GetInt("max_length", 0));
        Assert.IsTrue(p.GetBool("custom_only", false));
        Assert.AreEqual("[{\"action\":\"add_button\"}]", p.GetJsonString("operations"));
        CollectionAssert.AreEqual(new[] { "v1", "v2" }, p.GetStringArray("view_ids"));
        Assert.AreEqual(4, p.GetInt("precision", -1));
        Assert.AreEqual(1.5, p.GetNullableDouble("ratio"));
    }

    [TestMethod]
    public void McpPayload_ValidateAllowedKeys_RejectsUnknownKeysWithHint()
    {
        var p = McpPayload.From(JsonNode.Parse("""{"custom_only": true, "bogusKey": 123}""")!.AsObject());
        var err = p.ValidateAllowedKeys(["custom_only", "include_intersect"], "inspect_metadata(tables)", "docs://schema_tools_guide");

        Assert.IsNotNull(err);
        Assert.IsTrue(err.IsError == true);
        var text = Text(err);
        StringAssert.Contains(text, "bogusKey");
        StringAssert.Contains(text, "custom_only, include_intersect");
        StringAssert.Contains(text, "docs://schema_tools_guide");
    }

    [TestMethod]
    public void McpPayload_InvalidTypes_ThrowArgumentException()
    {
        var p = McpPayload.From(JsonNode.Parse("""{"n": "not-an-int", "b": "maybe"}""")!.AsObject());
        Assert.ThrowsExactly<ArgumentException>(() => p.GetInt("n", 0));
        Assert.ThrowsExactly<ArgumentException>(() => p.GetBool("b", false));
    }

    // ── GetContextTool tests ─────────────────────────────────────────────────

    [TestMethod]
    public async Task GetContext_RoutesConnectionsParseUrlAndRejectsInvalidAction()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new GetContextTool(resolver);

        var conns = await tool.InvokeAsync(action: "connections");
        Assert.IsFalse(conns.IsError == true, Text(conns));
        StringAssert.Contains(Text(conns), "connection group");

        var connsWithEnv = await tool.InvokeAsync(action: "connections", env: "2");
        Assert.IsTrue(connsWithEnv.IsError == true);
        StringAssert.Contains(Text(connsWithEnv), "env is not used");

        var parsed = await tool.InvokeAsync(
            action: "parse_url",
            input: "https://org.crm.dynamics.com/main.aspx?etn=account&id=11111111-1111-1111-1111-111111111111");
        Assert.IsFalse(parsed.IsError == true, Text(parsed));
        StringAssert.Contains(Text(parsed), "account");
        StringAssert.Contains(Text(parsed), "11111111-1111-1111-1111-111111111111");

        var invalid = await tool.InvokeAsync(action: "unknown");
        Assert.IsTrue(invalid.IsError == true);
        StringAssert.Contains(Text(invalid), "Invalid action");
    }

    [TestMethod]
    public async Task GetContext_DefaultAction_RoutesWhoAmIWithEnvAttribution()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new GetContextTool(resolver);

        var result = await tool.InvokeAsync(env: "2");
        StringAssert.Contains(Text(result), "| env 2");
    }

    // ── QueryDataTool tests ──────────────────────────────────────────────────

    [TestMethod]
    public async Task QueryData_ValidatesMode_AndRoutesFetchXmlSqlAndSearch()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new QueryDataTool(resolver);

        var missing = await tool.InvokeAsync();
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(Text(missing), "mode is required");

        var invalid = await tool.InvokeAsync(mode: "graphql");
        Assert.IsTrue(invalid.IsError == true);
        StringAssert.Contains(Text(invalid), "Invalid mode");

        var badFetch = await tool.InvokeAsync(mode: "fetchxml", query: "");
        Assert.IsTrue(badFetch.IsError == true);
        StringAssert.Contains(Text(badFetch), "fetchxml is required");

        var badSql = await tool.InvokeAsync(mode: "sql", query: "DELETE FROM account");
        Assert.IsTrue(badSql.IsError == true);
        StringAssert.Contains(Text(badSql), "Only SELECT statements are supported");

        var badSearch = await tool.InvokeAsync(mode: "search", query: "");
        Assert.IsTrue(badSearch.IsError == true);
        StringAssert.Contains(Text(badSearch), "search_term is required");
    }

    // ── InspectMetadataTool tests ────────────────────────────────────────────

    [TestMethod]
    public async Task InspectMetadata_ValidatesResourceAndOptions_AndRoutesAllResources()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new InspectMetadataTool(resolver);

        var invalid = await tool.InvokeAsync(resource: "widgets");
        Assert.IsTrue(invalid.IsError == true);
        StringAssert.Contains(Text(invalid), "Invalid resource");

        var badOpt = await tool.InvokeAsync(resource: "tables", options: JsonNode.Parse("""{"bad_key":true}""")!.AsObject());
        Assert.IsTrue(badOpt.IsError == true);
        StringAssert.Contains(Text(badOpt), "Unknown option/payload key");

        var missingSol = await tool.InvokeAsync(resource: "solution_components", name: "");
        Assert.IsTrue(missingSol.IsError == true);
        StringAssert.Contains(Text(missingSol), "solution_name is required");

        var badPcf = await tool.InvokeAsync(resource: "custom_controls", options: JsonNode.Parse("""{"nameMatch":"regex"}""")!.AsObject());
        Assert.IsTrue(badPcf.IsError == true);
        StringAssert.Contains(Text(badPcf), "name_match must be contains, prefix, or exact");
    }

    // ── InspectAutomationTool tests ──────────────────────────────────────────

    [TestMethod]
    public async Task InspectAutomation_ValidatesResourceAndOptions_AndRoutesAllSixResources()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new InspectAutomationTool(resolver);

        var missing = await tool.InvokeAsync();
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(Text(missing), "resource is required");

        var invalid = await tool.InvokeAsync(resource: "triggers");
        Assert.IsTrue(invalid.IsError == true);
        StringAssert.Contains(Text(invalid), "Invalid resource");

        var badOpt = await tool.InvokeAsync(resource: "workflows", options: JsonNode.Parse("""{"wrong":1}""")!.AsObject());
        Assert.IsTrue(badOpt.IsError == true);
        StringAssert.Contains(Text(badOpt), "docs://server_logic_guide");

        var badFlow = await tool.InvokeAsync(resource: "flows", options: JsonNode.Parse("""{"action":"runs"}""")!.AsObject());
        Assert.IsTrue(badFlow.IsError == true);
        StringAssert.Contains(Text(badFlow), "requires flow_id");

        var badBpf = await tool.InvokeAsync(resource: "bpfs", status: "bogus");
        Assert.IsTrue(badBpf.IsError == true);
        StringAssert.Contains(Text(badBpf), "Invalid status");

        var badBr = await tool.InvokeAsync(resource: "business_rules", entity_name: "");
        Assert.IsTrue(badBr.IsError == true);
        StringAssert.Contains(Text(badBr), "entity_name is required");

        var badWf = await tool.InvokeAsync(resource: "workflows", options: JsonNode.Parse("""{"mode":"invalid"}""")!.AsObject());
        Assert.IsTrue(badWf.IsError == true);
        StringAssert.Contains(Text(badWf), "not a valid mode");
    }

    // ── InspectDiagnosticsTool tests ─────────────────────────────────────────

    [TestMethod]
    public async Task InspectDiagnostics_ValidatesResourceAndOptions_AndRoutesAllThreeResources()
    {
        var resolver = new FakeResolver(NewFakeService());
        var tool = new InspectDiagnosticsTool(resolver);

        var missing = await tool.InvokeAsync();
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(Text(missing), "resource is required");

        var invalid = await tool.InvokeAsync(resource: "metrics");
        Assert.IsTrue(invalid.IsError == true);
        StringAssert.Contains(Text(invalid), "Invalid resource");

        var badAudit = await tool.InvokeAsync(resource: "audit", record_id: Guid.NewGuid().ToString(), entity_name: "");
        Assert.IsTrue(badAudit.IsError == true);
        StringAssert.Contains(Text(badAudit), "entity_name is required");

        var badTrace = await tool.InvokeAsync(resource: "plugin_traces", options: JsonNode.Parse("""{"mode":"parallel"}""")!.AsObject());
        Assert.IsTrue(badTrace.IsError == true);
        StringAssert.Contains(Text(badTrace), "Invalid mode");

        var badJob = await tool.InvokeAsync(resource: "system_jobs", options: JsonNode.Parse("""{"status":"exploded"}""")!.AsObject());
        Assert.IsTrue(badJob.IsError == true);
        StringAssert.Contains(Text(badJob), "not a valid status");
    }

    // ── MCP SDK 2.x Schema & Token Budget Verification ───────────────────────

    [TestMethod]
    public void Phase1Schema_HasExpectedToolCount_Annotations_OutputSchema_AndReducedTokenFootprint()
    {
        var services = new ServiceCollection();
        services.AddLogging();
        services.AddMcpServer().WithToolsFromAssembly(typeof(McpServerHost).Assembly);

        using var sp = services.BuildServiceProvider();
        var protocolTools = sp.GetRequiredService<IOptions<McpServerOptions>>().Value
            .ToolCollection!.Select(t => t.ProtocolTool).ToList();

        Assert.AreEqual(29, protocolTools.Count, "Phase 1 must expose exactly 29 tools (6 RO + 23 RW).");

        var names = protocolTools.Select(t => t.Name).ToHashSet(StringComparer.Ordinal);
        foreach (var expected in Phase1ToolNames)
            Assert.IsTrue(names.Contains(expected), $"Missing Phase 1 tool '{expected}'.");
        foreach (var retired in RetiredPhase1ToolNames)
            Assert.IsFalse(names.Contains(retired), $"Retired tool '{retired}' should not be registered.");

        var opts = new JsonSerializerOptions { WriteIndented = false, DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull };
        var roTools = protocolTools.Where(t => Phase1ToolNames.Contains(t.Name)).ToList();
        Assert.AreEqual(6, roTools.Count);

        var roTotalChars = 0;
        foreach (var tool in roTools)
        {
            Assert.AreEqual(true, tool.Annotations?.ReadOnlyHint, $"{tool.Name} must be ReadOnly=true.");
            Assert.AreEqual(false, tool.Annotations?.DestructiveHint, $"{tool.Name} must be Destructive=false.");
            Assert.AreEqual(true, tool.Annotations?.IdempotentHint, $"{tool.Name} must be Idempotent=true.");

            // Verify MCP SDK 2.x rule: no optional params accidentally forced into required[]
            Assert.IsFalse(
                tool.InputSchema.TryGetProperty("required", out var req) && req.GetArrayLength() > 0,
                $"{tool.Name} has unexpected required[] entries in InputSchema (use nullable optional params).");

            if (tool.Name != "read_instruction")
            {
                Assert.IsTrue(tool.OutputSchema.HasValue, $"{tool.Name} must declare OutputSchemaType=typeof(JsonObject).");
                Assert.AreEqual("{\"type\":\"object\"}", JsonSerializer.Serialize(tool.OutputSchema.Value, opts),
                    $"{tool.Name} polymorphic router must emit compact {{\"type\":\"object\"}} outputSchema.");
            }

            roTotalChars += JsonSerializer.Serialize(tool, opts).Length;
        }

        // Baseline 19 RO tools = 80,571 chars; Phase 1 6 RO tools must be < 17,000 chars (>78% reduction)
        Assert.IsTrue(roTotalChars < 17_000,
            $"Phase 1 RO tools serialized to {roTotalChars} chars, exceeding 17,000-char budget (baseline was 80,571 chars).");
    }

    [TestMethod]
    public void Phase1Schema_NoRegisteredToolDescriptionMentionsRetiredToolNames()
    {
        var services = new ServiceCollection();
        services.AddLogging();
        services.AddMcpServer().WithToolsFromAssembly(typeof(McpServerHost).Assembly);

        using var sp = services.BuildServiceProvider();
        var protocolTools = sp.GetRequiredService<IOptions<McpServerOptions>>().Value
            .ToolCollection!.Select(t => t.ProtocolTool).ToList();

        var retiredPattern = new Regex(
            @"(?<!\.devkit/)\b(connection_list|parse_record_url|execute_fetchxml|execute_sql|search_records|get_tables|get_solution_components|get_custom_controls|get_plugins|get_workflows|get_flows|get_business_process_flows|get_business_rules|get_messages|get_audit_history|get_plugin_trace_logs|get_system_jobs)\b",
            RegexOptions.Compiled);
        var bareWhoamiPattern = new Regex(
            @"(?<!action=')(?<!['""])\bwhoami\b(?!['""])",
            RegexOptions.Compiled);

        var violations = new List<string>();
        foreach (var tool in protocolTools)
        {
            var blob = (tool.Description ?? string.Empty) + "\n" + tool.InputSchema.GetRawText();
            foreach (Match m in retiredPattern.Matches(blob))
                violations.Add($"{tool.Name}: mentions retired tool '{m.Value}'");
            foreach (Match m in bareWhoamiPattern.Matches(blob))
                violations.Add($"{tool.Name}: mentions bare retired tool '{m.Value}'");
        }

        Assert.AreEqual(0, violations.Count,
            "Stale retired Phase 1 tool names found in registered MCP tool schemas:\n" + string.Join("\n", violations));
    }

    // ── 1-to-1 Router vs Legacy Worker Parity Tests ──────────────────────────

    [TestMethod]
    public async Task GetContext_ParityWithLegacyWorkers_ConnectionsAndParseUrl()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var router = new GetContextTool(resolver);
        var legacyConn = new ConnectionListTool(resolver);
        var legacyParse = new ParseRecordUrlTool(service);

        // 1. connections parity
        var rConn = await router.InvokeAsync(action: "connections");
        var lConn = legacyConn.connection_list();
        AssertResultParity("get_context(connections)", rConn, lConn);

        // 2. parse_url valid parity
        const string validUrl = "https://org.crm.dynamics.com/main.aspx?etn=account&id=11111111-1111-1111-1111-111111111111";
        var rValid = await router.InvokeAsync(action: "parse_url", input: validUrl);
        var lValid = legacyParse.parse_record_url(validUrl);
        AssertResultParity("get_context(parse_url valid)", rValid, lValid);

        // 3. parse_url invalid parity
        var rInvalid = await router.InvokeAsync(action: "parse_url", input: "not-a-url");
        var lInvalid = legacyParse.parse_record_url("not-a-url");
        AssertResultParity("get_context(parse_url invalid)", rInvalid, lInvalid);
    }

    [TestMethod]
    public async Task QueryData_ParityWithLegacyWorkers_FetchXmlSqlAndSearch()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var router = new QueryDataTool(resolver);
        var webApi = new StubWebApiExecutor();
        var metadata = new MetadataService(null!);
        var legacyFetch = new ExecuteFetchXmlTool(service);
        var legacySql = new ExecuteSqlTool(webApi, metadata);
        var legacySearch = new SearchRecordsTool(service, new McpDryRunOptions(), webApi);

        // 1. FetchXML empty query parity
        AssertResultParity("query_data(fetchxml empty)",
            await router.InvokeAsync(mode: "fetchxml", query: ""),
            legacyFetch.execute_fetchxml(""));

        // 2. SQL policy errors parity (SELECT *, DELETE, multi-statement, TOP 0)
        foreach (var sql in new[] { "SELECT * FROM account", "DELETE FROM account", "SELECT name FROM account; SELECT name FROM contact", "SELECT TOP 0 name FROM account" })
        {
            AssertResultParity($"query_data(sql: {sql})",
                await router.InvokeAsync(mode: "sql", query: sql),
                await legacySql.execute_sql(sql));
        }

        // 3. Search empty query parity
        AssertResultParity("query_data(search empty)",
            await router.InvokeAsync(mode: "search", query: ""),
            await legacySearch.search_records(null!, "search", ""));

        // 4. Non-startup env forwarding parity
        var envResult = await router.InvokeAsync(mode: "sql", query: "SELECT * FROM account", env: "2");
        Assert.IsTrue(envResult.IsError == true);
        StringAssert.Contains(Text(envResult), "| env 2");
    }

    [TestMethod]
    public async Task InspectMetadata_ParityWithLegacyWorkers_SolutionComponentsAndCustomControls()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var router = new InspectMetadataTool(resolver);
        var legacySol = new GetSolutionComponentsTool(service);
        var legacyPcf = new GetCustomControlsTool(service);

        // 1. solution_components missing name parity
        AssertResultParity("inspect_metadata(solution_components empty)",
            await router.InvokeAsync(resource: "solution_components", name: ""),
            legacySol.get_solution_components(""));

        // 2. custom_controls invalid name_match parity (camelCase option -> snake_case worker arg)
        AssertResultParity("inspect_metadata(custom_controls invalid name_match)",
            await router.InvokeAsync(resource: "custom_controls", options: JsonNode.Parse("""{"nameMatch":"regex"}""")!.AsObject()),
            legacyPcf.get_custom_controls(name_match: "regex"));

        // 3. env forwarding parity
        var envResult = await router.InvokeAsync(resource: "solution_components", name: "", env: "2");
        Assert.IsTrue(envResult.IsError == true);
        StringAssert.Contains(Text(envResult), "| env 2");
    }

    [TestMethod]
    public async Task InspectAutomation_ParityWithLegacyWorkers_AllSixResources()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var router = new InspectAutomationTool(resolver);

        AssertResultParity("inspect_automation(flows runs without flow_id)",
            await router.InvokeAsync(resource: "flows", options: JsonNode.Parse("""{"action":"runs"}""")!.AsObject()),
            new GetFlowsTool(service).get_flows(action: "runs"));

        AssertResultParity("inspect_automation(bpfs invalid status)",
            await router.InvokeAsync(resource: "bpfs", status: "bogus"),
            new GetBusinessProcessFlowsTool(service).get_business_process_flows(status: "bogus"));

        AssertResultParity("inspect_automation(business_rules missing entity)",
            await router.InvokeAsync(resource: "business_rules", entity_name: ""),
            new GetBusinessRulesTool(service).get_business_rules(entity_name: ""));

        AssertResultParity("inspect_automation(workflows invalid mode)",
            await router.InvokeAsync(resource: "workflows", options: JsonNode.Parse("""{"mode":"invalid"}""")!.AsObject()),
            new GetWorkflowsTool(service).get_workflows(mode: "invalid"));

        AssertResultParity("inspect_automation(plugins invalid stage)",
            await router.InvokeAsync(resource: "plugins", options: JsonNode.Parse("""{"stage":"bogus"}""")!.AsObject()),
            await new GetPluginsTool(service).get_plugins(stage: "bogus"));

        var msgEnvResult = await router.InvokeAsync(resource: "messages", max_records: 0, env: "2");
        StringAssert.Contains(Text(msgEnvResult), "| env 2");
    }

    [TestMethod]
    public async Task InspectDiagnostics_ParityWithLegacyWorkers_AllThreeResources()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var router = new InspectDiagnosticsTool(resolver);
        var id = Guid.NewGuid().ToString();

        AssertResultParity("inspect_diagnostics(audit missing entity)",
            await router.InvokeAsync(resource: "audit", record_id: id, entity_name: ""),
            new GetAuditHistoryTool(service).get_audit_history(entity_name: "", record_id: id));

        AssertResultParity("inspect_diagnostics(plugin_traces invalid mode)",
            await router.InvokeAsync(resource: "plugin_traces", options: JsonNode.Parse("""{"mode":"parallel"}""")!.AsObject()),
            new GetPluginTraceLogsTool(service).get_plugin_trace_logs(mode: "parallel"));

        AssertResultParity("inspect_diagnostics(system_jobs invalid status)",
            await router.InvokeAsync(resource: "system_jobs", options: JsonNode.Parse("""{"status":"exploded"}""")!.AsObject()),
            new GetSystemJobsTool(service).get_system_jobs(status: "exploded"));

        var envResult = await router.InvokeAsync(resource: "system_jobs", options: JsonNode.Parse("""{"status":"exploded"}""")!.AsObject(), env: "2");
        Assert.IsTrue(envResult.IsError == true);
        StringAssert.Contains(Text(envResult), "| env 2");
    }

    [TestMethod]
    public async Task ReadInstruction_ListsAllResourcesDynamically_AndReadsKnownResource()
    {
        var tool = new ReadInstructionTool();
        var listing = await tool.read_instruction(name: null);
        Assert.IsFalse(listing.IsError == true, Text(listing));
        StringAssert.Contains(Text(listing), "10 instruction(s) (docs://) and 4 schema(s) (schema://)");

        var unknown = await tool.read_instruction(name: "docs://does_not_exist");
        Assert.IsTrue(unknown.IsError == true);
        StringAssert.Contains(Text(unknown), "14 available resources (10 docs:// instructions, 4 schema:// schemas)");

        var guide = await tool.read_instruction(name: "docs://data_operations_guide");
        Assert.IsFalse(guide.IsError == true, Text(guide));
        Assert.IsTrue(Text(guide).Length > 100, "Expected non-empty guide content.");
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private static void AssertResultParity(string label, CallToolResult routerResult, CallToolResult legacyResult)
    {
        Assert.AreEqual(legacyResult.IsError, routerResult.IsError, $"{label}: IsError mismatch.");
        Assert.AreEqual(Text(legacyResult), Text(routerResult), $"{label}: Text mismatch.");
        var legacyJson = legacyResult.StructuredContent?.GetRawText() ?? string.Empty;
        var routerJson = routerResult.StructuredContent?.GetRawText() ?? string.Empty;
        Assert.AreEqual(legacyJson, routerJson, $"{label}: StructuredContent JSON mismatch.");
    }

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private static IOrganizationService NewFakeService()
    {
        var ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        return ctx.GetOrganizationService();
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

        public string CurrentAccessToken => "phase1-router-stub-token";
    }

    private sealed class StubConnectionInfo : IMcpConnectionInfo
    {
        public Uri ConnectedOrgUri => new("https://phase1-router.example.invalid");
        public string ConnectedOrgFriendlyName => "Phase1Router";
        public string ConnectedOrgUniqueName => "phase1router";
        public Version ConnectedOrgVersion => new(9, 2);
        public Guid TenantId => Guid.Empty;
        public string EnvironmentId => "phase1-router-env";
    }

    private sealed class FakeResolver(IOrganizationService service) : IMcpConnectionResolver
    {
        private readonly ConnectionBundle _startup = new(
            "1", null!, false, null!, service, null!, new StubConnectionInfo(), new StubWebApiExecutor(), new MetadataService(null!), null);

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string? env, CancellationToken cancellationToken)
            => Task.FromResult(string.IsNullOrWhiteSpace(env) || env == StartupEnvId
                ? _startup
                : new ConnectionBundle(env.Trim(), null!, false, null!, service, null!, new StubConnectionInfo(), new StubWebApiExecutor(), new MetadataService(null!), null));

        public IReadOnlyList<ConnectionGroupInfo> ListGroups() =>
        [
            new ConnectionGroupInfo
            {
                Env = "1",
                Alias = "dev",
                IsStartupDefault = true,
                DryRun = false
            }
        ];

        public IDisposable BeginInvocation() => new NoopLease();

        private sealed class NoopLease : IDisposable
        {
            public void Dispose() { }
        }
    }
}
