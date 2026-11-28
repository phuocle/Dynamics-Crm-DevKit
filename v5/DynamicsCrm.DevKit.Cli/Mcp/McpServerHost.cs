using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    public class McpServerHost
    {
        private readonly ServiceClient _serviceClient;
        private readonly IMcpConnectionResolver _connections;

        public McpServerHost(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        internal McpServerHost(ServiceClient serviceClient, IMcpConnectionResolver connections) : this(serviceClient)
        {
            _connections = connections;
        }

        private const string DefaultServerName = "DynamicsCrm.DevKit";

        // Tools permanently disabled (set = type names using nameof() for compile-time safety)
        internal static readonly HashSet<string> DisabledToolSet = new()
        {
        };

        // Maps disabled tool type name → associated resource names (Name from [McpServerResource(Name=...)])
        internal static readonly Dictionary<string, string[]> ToolResourceMap = new()
        {
            [nameof(Tools.QueryDataTool)] = new[] { "instructions_for_sql" },
            [nameof(Tools.ManageCommandingTool)] = new[] { "instructions_for_manage_ribbon", "instructions_for_manage_command" },
            [nameof(Tools.ManageAssetsTool)] = new[] { "instructions_for_manage_report" },
            [nameof(Tools.ManageUiTool)] = new[] { "formxml_instructions", "layoutxml_instructions", "instructions_for_manage_app" },
            [nameof(Tools.ManageSchemaTool)] = new[] { "schema_tools_guide" },
        };

        public async Task RunAsync(bool dryRun = false, string instanceName = null,
            Guid? impersonatedUserId = null, string impersonatedUserDisplay = null,
            string envGroup = null, string connectionSource = null, bool usedFallback = false)
        {
            var tools = GetToolCatalog();

            var builder = Host.CreateApplicationBuilder();

            builder.Logging.AddConsole(options =>
            {
                options.LogToStandardErrorThreshold = Microsoft.Extensions.Logging.LogLevel.Trace;
            });

            if (_connections == null)
                RegisterSharedServices(builder.Services, _serviceClient, dryRun, impersonatedUserDisplay);
            else
            {
                var startup = await _connections.ResolveAsync(null, System.Threading.CancellationToken.None);
                // Externally owned instances: only the registry disposes connected clients.
                builder.Services.AddSingleton(_connections);
                builder.Services.AddSingleton(startup.Client);
                builder.Services.AddSingleton(startup.OrgService);
                builder.Services.AddSingleton(startup.OrgServiceAsync);
                builder.Services.AddSingleton(startup.Metadata);
                builder.Services.AddSingleton(startup.ConnectionInfo);
                builder.Services.AddSingleton(startup.WebApi);
                builder.Services.AddSingleton(startup.Options);
                builder.Services.AddSingleton(startup.Context);
            }

            var serverName = string.IsNullOrWhiteSpace(instanceName)
                ? DefaultServerName
                : instanceName;

            builder.Services
                .AddMcpServer(options =>
                {
                    options.ServerInfo = new()
                    {
                        Name = serverName,
                        Version = DynamicsCrm.DevKit.Shared.Const.Version
                    };
                    options.ServerInstructions = BuildServerInstructions(
                        serverName,
                        tools.Count,
                        _serviceClient.ConnectedOrgUriActual,
                        _serviceClient.ConnectedOrgFriendlyName,
                        _serviceClient.ConnectedOrgUniqueName,
                        _serviceClient.ConnectedOrgVersion,
                        impersonatedUserDisplay,
                        envGroup,
                        connectionSource,
                        usedFallback) + BuildConnectionInstructions(_connections);
                })
                .WithStdioServerTransport()
                .WithToolsFromAssembly()
                .WithResourcesFromAssembly()
                .WithRequestFilters(filters =>
                {
                    filters.AddCallToolFilter(next => (context, cancellationToken) =>
                    {
                        Tools.Helper.McpToolResults.ClientName = context.Server?.ClientInfo?.Name;
                        return next(context, cancellationToken);
                    });
                });

            if (DisabledToolSet.Count > 0)
            {
                var allowedToolNames = tools.Select(t => t.Name).ToHashSet();
                var disabledResourceNames = GetDisabledResourceNames();
                builder.Services.PostConfigure<McpServerOptions>(options =>
                {
                    if (options.ToolCollection != null)
                    {
                        var toRemove = options.ToolCollection
                            .Where(t => !allowedToolNames.Contains(t.ProtocolTool.Name))
                            .ToList();
                        foreach (var tool in toRemove)
                            options.ToolCollection.Remove(tool);
                    }

                    if (disabledResourceNames.Count > 0 && options.ResourceCollection != null)
                    {
                        var toRemove = options.ResourceCollection
                            .Where(r => disabledResourceNames.Contains(r.ProtocolResource.Name))
                            .ToList();
                        foreach (var resource in toRemove)
                            options.ResourceCollection.Remove(resource);
                    }
                });
            }

            using var host = builder.Build();
            await host.RunAsync();
        }

        internal static string BuildConnectionInstructions(IMcpConnectionResolver connections)
        {
            if (connections == null) return "";
            var groups = connections.ListGroups();
            if (groups.Count == 1 && groups[0].Alias == null) return "";
            var labels = groups.Select(g => g.Env +
                (g.Alias == null ? "" : $" ({g.Alias})") +
                (g.IsStartupDefault ? " (startup)" : "") +
                (g.DryRun ? " (dry-run: mutations blocked)" : ""));
            return $" | Startup connection: {connections.StartupEnvId}. Connection groups: {string.Join(", ", labels)}. " +
                "Omit env to use the startup connection; pass an ID, alias, or default for the unnumbered group. " +
                "Call get_context(action='connections') for details. Dataverse tools accept env; read_instruction and get_context(action='connections') do not.";
        }

        /// <summary>
        /// Registers the shared tool dependencies used by both the MCP stdio host
        /// (RunAsync) and the CLI invocation scope (ToolServices.CreateInvocationServices):
        /// the connected ServiceClient, its interface projections, connection info,
        /// Web API executor, and the startup execution policy with its projections.
        /// </summary>
        internal static void RegisterSharedServices(IServiceCollection services, ServiceClient serviceClient, bool dryRun, string impersonatedUserDisplay)
        {
            services.AddSingleton(serviceClient);
            services.AddSingleton(new MetadataService(serviceClient));
            // Test seams: tools depend on interfaces, not concrete ServiceClient.
            // ServiceClient implements IOrganizationService/IOrganizationServiceAsync2,
            // so production behavior is unchanged — same live instance behind each interface.
            services.AddSingleton<Microsoft.Xrm.Sdk.IOrganizationService>(sp => sp.GetRequiredService<ServiceClient>());
            services.AddSingleton<IOrganizationServiceAsync2>(sp => sp.GetRequiredService<ServiceClient>());
            services.AddSingleton<IMcpConnectionInfo>(sp => new ServiceClientConnectionInfo(sp.GetRequiredService<ServiceClient>()));
            services.AddSingleton<IWebApiExecutor>(sp => new ServiceClientWebApiExecutor(sp.GetRequiredService<ServiceClient>()));
            var executionPolicy = new McpExecutionPolicy(mutationsBlocked: dryRun, impersonatedUserDisplay: impersonatedUserDisplay);
            services.AddSingleton(executionPolicy);
            services.AddSingleton(executionPolicy.Options);
            services.AddSingleton(executionPolicy.Context);
        }

        internal static List<McpToolInfo> GetToolCatalog()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var toolTypes = assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null
                         && !DisabledToolSet.Contains(t.Name));

            var tools = new List<McpToolInfo>();
            foreach (var type in toolTypes)
            {
                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var attr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (attr == null) continue;
                    var name = attr.Name ?? method.Name;
                    tools.Add(new McpToolInfo(name, attr.Title ?? name));
                }
            }

            return tools.OrderBy(t => t.Name, StringComparer.Ordinal).ToList();
        }

        internal record McpToolInfo(string Name, string Title);

        internal static int GetResourceCount()
        {
            var disabledResourceNames = GetDisabledResourceNames();
            return Assembly.GetExecutingAssembly().GetTypes()
                .Where(type => type.GetCustomAttribute<McpServerResourceTypeAttribute>() != null)
                .SelectMany(type => type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                .Count(method => method.GetCustomAttribute<McpServerResourceAttribute>() is { } resource &&
                                 !disabledResourceNames.Contains(resource.Name ?? method.Name));
        }

        private static HashSet<string> GetDisabledResourceNames() => DisabledToolSet
            .Where(ToolResourceMap.ContainsKey)
            .SelectMany(typeName => ToolResourceMap[typeName])
            .ToHashSet();

        internal static string BuildServerInstructions(
            string serverName,
            int toolCount,
            Uri connectedOrgUriActual,
            string connectedOrgFriendlyName,
            string connectedOrgUniqueName,
            Version connectedOrgVersion,
            string impersonatedUserDisplay = null,
            string envGroup = null,
            string connectionSource = null,
            bool usedFallback = false)
        {
            var resolvedName = string.IsNullOrWhiteSpace(serverName)
                ? DefaultServerName
                : serverName;
            var fallbackGroupText = string.IsNullOrEmpty(envGroup)
                ? (usedFallback ? "default (DEVKIT_*)" : "default (DEVKIT_*; fallback not used)")
                : (usedFallback ? $"{envGroup} (DEVKIT_{envGroup}_*)" : $"{envGroup} (DEVKIT_{envGroup}_*; fallback not used)");
            var sourceText = string.IsNullOrWhiteSpace(connectionSource)
                ? (usedFallback ? "project .env" : "command-line arguments (fallback not used)")
                : connectionSource;

            return
                $"Instance: {resolvedName} | " +
                $"Fallback group: {fallbackGroupText} | " +
                $"Connection source: {sourceText} | " +
                $"Connected to Dataverse environment: {connectedOrgUriActual} | " +
                $"Org: {connectedOrgFriendlyName} ({connectedOrgUniqueName}) | " +
                $"Version: {connectedOrgVersion} | " +
                $"Available tools: {toolCount}. " +
                "Tool descriptions reference docs:// and schema:// resources for detailed contracts. " +
                "When your client supports MCP resources, read the relevant resource before complex operations; " +
                "if it does not support resources, call the read_instruction tool (empty name returns the catalog, a name returns the full content). " +
                "Use tool parameter descriptions for basic inputs and do not guess missing fields." +
                (string.IsNullOrEmpty(impersonatedUserDisplay)
                    ? ""
                    : $" | Impersonating: {impersonatedUserDisplay} (CallerId set server-side)");
        }
    }
}
