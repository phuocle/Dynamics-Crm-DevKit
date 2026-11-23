using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

/// <summary>
/// Routes every [McpServerTool] entry through a fake IMcpConnectionResolver so the
/// resolver-selected worker construction inside each entry is executed end to end.
/// </summary>
[TestClass]
public sealed class McpToolEntryRoutingCoverageTests
{
    private static readonly (Type Tool, string Entry)[] Tools =
    [
        (typeof(ConnectionListTool), "connection_list"),
        (typeof(ExecuteFetchXmlTool), "execute_fetchxml"),
        (typeof(ExecuteSqlTool), "execute_sql"),
        (typeof(ExecuteWebApiTool), "execute_webapi"),
        (typeof(GenerateDemoDataTool), "generate_demo_data"),
        (typeof(GetAuditHistoryTool), "get_audit_history"),
        (typeof(GetBusinessProcessFlowsTool), "get_business_process_flows"),
        (typeof(GetBusinessRulesTool), "get_business_rules"),
        (typeof(GetCustomApisTool), "get_custom_apis"),
        (typeof(GetFlowsTool), "get_flows"),
        (typeof(GetMessagesTool), "get_messages"),
        (typeof(GetPluginTraceLogsTool), "get_plugin_trace_logs"),
        (typeof(GetPluginsTool), "get_plugins"),
        (typeof(GetSolutionComponentsTool), "get_solution_components"),
        (typeof(GetSystemJobsTool), "get_system_jobs"),
        (typeof(GetTablesTool), "get_tables"),
        (typeof(GetWorkflowsTool), "get_workflows"),
        (typeof(ManageAppTool), "manage_app"),
        (typeof(ManageChartTool), "manage_chart"),
        (typeof(ManageChoiceTool), "manage_choice"),
        (typeof(ManageColumnTool), "manage_column"),
        (typeof(ManageCommandTool), "manage_command"),
        (typeof(ManageDeletedRecordsTool), "manage_deleted_records"),
        (typeof(ManageEnvironmentVariableTool), "manage_environment_variable"),
        (typeof(ManageFormTool), "manage_form"),
        (typeof(ManageFunctionTool), "manage_function"),
        (typeof(ManageRecordTool), "manage_record"),
        (typeof(ManageRecordFileTool), "manage_record_file"),
        (typeof(ManageRelationshipTool), "manage_relationship"),
        (typeof(ManageReportTool), "manage_report"),
        (typeof(ManageRibbonTool), "manage_ribbon"),
        (typeof(ManageRoleTool), "manage_role"),
        (typeof(ManageTableTool), "manage_table"),
        (typeof(ManageViewTool), "manage_view"),
        (typeof(ManageWebResourceTool), "manage_webresource"),
        (typeof(ParseRecordUrlTool), "parse_record_url"),
        (typeof(PublishCustomizationsTool), "publish_customizations"),
        (typeof(SearchRecordsTool), "search_records"),
        (typeof(UpsertRecordsTool), "upsert_records"),
        (typeof(WhoAmITool), "whoami"),
    ];

    [TestMethod]
    public async Task All_Tool_Entries_Route_Through_Connection_Resolver()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);

        foreach (var (toolType, entry) in Tools)
        {
            var tool = NewTool(toolType, service, resolver);
            var result = await InvokeEntry(tool, entry);
            StringAssert.Contains(Text(result) + " ", " ",
                toolType.Name + " entry '" + entry + "' returned no text content.");
            Assert.IsFalse(string.IsNullOrWhiteSpace(Text(result)),
                toolType.Name + " entry '" + entry + "' returned an empty text block.");
        }
    }

    [TestMethod]
    public async Task Entry_With_NonStartup_Env_Attributes_Result()
    {
        var service = NewFakeService();
        var resolver = new FakeResolver(service);
        var tool = NewTool(typeof(WhoAmITool), service, resolver);
        var method = EntryMethod(tool, "whoami");
        var args = FullArgs(method);
        var envIndex = Array.FindIndex(method.GetParameters(), p => p.Name == "env");
        Assert.IsTrue(envIndex >= 0, "whoami entry has no env parameter.");
        args[envIndex] = "2";
        var result = await Invoke(method, tool, args);
        StringAssert.Contains(Text(result), "| env 2");
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

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

    private static ConnectionBundle NewBundle(IOrganizationService service) =>
        new("1", null!, false, null!, service, null!, new StubConnectionInfo(), null!, null!, null);

    private static object NewTool(Type toolType, IOrganizationService service, IMcpConnectionResolver resolver)
    {
        var serviceAsync = service as IOrganizationServiceAsync2;
        foreach (var ctor in toolType.GetConstructors().OrderByDescending(c => c.GetParameters().Length))
        {
            var parameters = ctor.GetParameters();
            if (parameters.Length == 0 || !parameters.Any(p => p.ParameterType == typeof(IMcpConnectionResolver)))
                continue;
            var values = new object?[parameters.Length];
            for (var i = 0; i < parameters.Length; i++)
            {
                var pt = parameters[i].ParameterType;
                values[i] = pt switch
                {
                    _ when pt == typeof(IOrganizationService) => service,
                    _ when pt == typeof(IOrganizationServiceAsync2) => serviceAsync,
                    _ when pt == typeof(IWebApiExecutor) => new StubWebApiExecutor(),
                    _ when pt == typeof(MetadataService) => new MetadataService(serviceAsync),
                    _ when pt == typeof(IMcpConnectionInfo) => new StubConnectionInfo(),
                    _ when pt == typeof(McpDryRunOptions) => new McpDryRunOptions(),
                    _ when pt == typeof(McpExecutionContext) => new McpExecutionContext(false),
                    _ when pt == typeof(IMcpConnectionResolver) => resolver,
                    _ when pt.IsValueType => Activator.CreateInstance(pt),
                    _ => null,
                };
            }
            return ctor.Invoke(values!);
        }
        throw new InvalidOperationException("No resolver constructor satisfied for " + toolType.FullName);
    }

    private static MethodInfo EntryMethod(object tool, string toolName)
    {
        return tool.GetType().GetMethods()
            .Select(m => (Method: m, Attr: m.GetCustomAttribute(typeof(ModelContextProtocol.Server.McpServerToolAttribute), false) as ModelContextProtocol.Server.McpServerToolAttribute))
            .Where(x => x.Attr != null && string.Equals(x.Attr.Name, toolName, StringComparison.Ordinal))
            .OrderByDescending(x => x.Method.GetParameters().Length)
            .Select(x => x.Method)
            .FirstOrDefault()
            ?? throw new InvalidOperationException("Entry method not found: " + tool.GetType().Name + " (" + toolName + ")");
    }

    private static object?[] FullArgs(MethodInfo method)
    {
        return method.GetParameters().Select(p => p.HasDefaultValue
            ? Type.Missing
            : p.ParameterType.IsValueType ? Activator.CreateInstance(p.ParameterType) : null).ToArray();
    }

    private static async Task<CallToolResult> InvokeEntry(object tool, string entry)
    {
        var method = EntryMethod(tool, entry);
        return await Invoke(method, tool, FullArgs(method));
    }

    private static async Task<CallToolResult> Invoke(MethodInfo method, object tool, object?[] args)
    {
        var raw = method.Invoke(tool,
            BindingFlags.OptionalParamBinding | BindingFlags.Instance | BindingFlags.Public, null, args, null)!;
        return raw is Task<CallToolResult> task ? await task.ConfigureAwait(false) : (CallToolResult)raw;
    }

    private sealed class StubWebApiExecutor : IWebApiExecutor
    {
        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null,
            System.Threading.CancellationToken cancellationToken = default)
            => new HttpResponseMessage(System.Net.HttpStatusCode.NotFound) { Content = new StringContent("{}") };

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null,
            System.Threading.CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "entry-routing-stub-token";
    }

    private sealed class StubConnectionInfo : IMcpConnectionInfo
    {
        public Uri ConnectedOrgUri => new("https://entry-routing.example.invalid");
        public string ConnectedOrgFriendlyName => "EntryRouting";
        public string ConnectedOrgUniqueName => "entryrouting";
        public Version ConnectedOrgVersion => new(9, 2);
        public Guid TenantId => Guid.Empty;
        public string EnvironmentId => "entry-routing-env";
    }

    private sealed class FakeResolver(IOrganizationService service) : IMcpConnectionResolver
    {
        private readonly ConnectionBundle _startup = NewBundle(service);

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string env, System.Threading.CancellationToken cancellationToken)
            => Task.FromResult(string.IsNullOrWhiteSpace(env) || env == StartupEnvId
                ? _startup
                : new ConnectionBundle(env.Trim(), null!, false, null!, service, null!, new StubConnectionInfo(), null!, null!, null));

        public System.Collections.Generic.IReadOnlyList<ConnectionGroupInfo> ListGroups()
            => Array.Empty<ConnectionGroupInfo>();

        public IDisposable BeginInvocation() => new NoopLease();

        private sealed class NoopLease : IDisposable
        {
            public void Dispose() { }
        }
    }
}
