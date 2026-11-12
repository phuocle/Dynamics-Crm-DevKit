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

        public McpServerHost(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        // Tool category derives from [McpServerTool(ReadOnly = ...)] on each tool method —
        // single source of truth, no manual mapping. Two cumulative levels:
        // readonly = read-only tools only; all = every tool (default).

        // Tools permanently disabled (set = type names using nameof() for compile-time safety)
        internal static readonly HashSet<string> DisabledToolSet = new()
        {
        };

        // Maps disabled tool type name → associated resource names (Name from [McpServerResource(Name=...)])
        internal static readonly Dictionary<string, string[]> ToolResourceMap = new()
        {
            [nameof(Tools.ExecuteSqlTool)] = new[] { "instructions_for_sql" },
            [nameof(Tools.ManageRibbonTool)] = new[] { "instructions_for_manage_ribbon" },
            [nameof(Tools.ManageReportTool)] = new[] { "instructions_for_manage_report" },
        };

        internal static readonly Dictionary<string, int> CategoryLevel = new()
        {
            ["readonly"] = 1,
            ["all"] = 2,
        };

        public async Task RunAsync(string category = "all", bool dryRun = false, string instanceName = null,
            Guid? impersonatedUserId = null, string impersonatedUserDisplay = null,
            string envGroup = null, string connectionSource = null, bool usedFallback = false)
        {
            var normalizedCategory = category.Trim().ToLowerInvariant();
            if (!CategoryLevel.ContainsKey(normalizedCategory))
                throw new InvalidOperationException(
                    $"Unknown tool category '{category}'. Supported: readonly ({GetToolCount(CategoryLevel["readonly"])} tools), all ({GetToolCount(CategoryLevel["all"])} tools). " +
                    "Note: basic/standard/advanced were removed — use 'all' (default) or 'readonly'.");
            var requestedLevel = CategoryLevel[normalizedCategory];
            var allowedTypeNames = GetFilteredToolTypeNames(requestedLevel);
            var toolCount = allowedTypeNames.Count;

            var builder = Host.CreateApplicationBuilder();

            builder.Logging.AddConsole(options =>
            {
                options.LogToStandardErrorThreshold = Microsoft.Extensions.Logging.LogLevel.Trace;
            });

            RegisterSharedServices(builder.Services, _serviceClient, dryRun, impersonatedUserDisplay);

            var displayCategory = normalizedCategory;
            var serverName = string.IsNullOrWhiteSpace(instanceName)
                ? $"DynamicsCrm.DevKit ({displayCategory})"
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
                        displayCategory,
                        toolCount,
                        _serviceClient.ConnectedOrgUriActual,
                        _serviceClient.ConnectedOrgFriendlyName,
                        _serviceClient.ConnectedOrgUniqueName,
                        _serviceClient.ConnectedOrgVersion,
                        impersonatedUserDisplay,
                        envGroup,
                        connectionSource,
                        usedFallback);
                })
                .WithStdioServerTransport()
                .WithToolsFromAssembly()
                .WithResourcesFromAssembly();

            // Compute resource names to disable (from DisabledToolSet)
            var disabledResourceNames = new System.Collections.Generic.HashSet<string>(
                DisabledToolSet
                    .Where(t => ToolResourceMap.ContainsKey(t))
                    .SelectMany(t => ToolResourceMap[t]));

            var needsCategoryFilter = requestedLevel < CategoryLevel["all"];
            var needsToolFilter = needsCategoryFilter || DisabledToolSet.Count > 0;
            var needsResourceFilter = disabledResourceNames.Count > 0;

            // Filter tools by category and/or disabled resources after registration
            if (needsToolFilter || needsResourceFilter)
            {
                builder.Services.PostConfigure<McpServerOptions>(options =>
                {
                    if (needsToolFilter && options.ToolCollection != null)
                    {
                        var toRemove = options.ToolCollection
                            .Where(t => !allowedTypeNames.Contains(t.ProtocolTool.Name))
                            .ToList();
                        foreach (var tool in toRemove)
                            options.ToolCollection.Remove(tool);
                    }

                    if (needsResourceFilter && options.ResourceCollection != null)
                    {
                        var toRemove = options.ResourceCollection
                            .Where(r => disabledResourceNames.Contains(r.ProtocolResource.Name))
                            .ToList();
                        foreach (var resource in toRemove)
                            options.ResourceCollection.Remove(resource);
                    }
                });
            }

            await builder.Build().RunAsync();
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

        internal static HashSet<string> GetFilteredToolTypeNames(int requestedLevel)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var allToolTypes = assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null)
                .ToList();

            // Resolve MCP tool names from [McpServerTool(Name = "...")] attributes.
            // Category filter derives from the attribute's ReadOnly flag.
            var allowedNames = new HashSet<string>();
            foreach (var type in allToolTypes)
            {
                if (DisabledToolSet.Contains(type.Name)) continue;

                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var attr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (attr == null) continue;
                    if (requestedLevel < CategoryLevel["all"] && !attr.ReadOnly) continue;
                    allowedNames.Add(attr.Name ?? method.Name);
                }
            }

            return allowedNames;
        }

        internal static string BuildServerInstructions(
            string serverName,
            string displayCategory,
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
                ? $"DynamicsCrm.DevKit ({displayCategory})"
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
                $"Category: {displayCategory} ({toolCount} tools). " +
                "Tool descriptions reference docs:// and schema:// resources for detailed contracts. " +
                "When your client supports MCP resources, read the relevant resource before complex operations; " +
                "if it does not support resources, call the read_instruction tool (empty name returns the catalog, a name returns the full content). " +
                "Use tool parameter descriptions for basic inputs and do not guess missing fields." +
                (string.IsNullOrEmpty(impersonatedUserDisplay)
                    ? ""
                    : $" | Impersonating: {impersonatedUserDisplay} (CallerId set server-side)");
        }

        internal static int GetToolCount(int requestedLevel)
        {
            return GetFilteredToolTypeNames(requestedLevel).Count;
        }
    }
}
