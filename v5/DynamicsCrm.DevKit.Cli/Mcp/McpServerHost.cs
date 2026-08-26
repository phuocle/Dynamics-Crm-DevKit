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
        };

        internal static readonly Dictionary<string, int> CategoryLevel = new()
        {
            ["readonly"] = 1,
            ["all"] = 2,
        };

        public async Task RunAsync(string category = "all", bool dryRun = false, string instanceName = null,
            Guid? impersonatedUserId = null, string impersonatedUserDisplay = null)
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

            builder.Services.AddSingleton(_serviceClient);
            builder.Services.AddSingleton(new MetadataService(_serviceClient));
            var executionPolicy = new McpExecutionPolicy(mutationsBlocked: dryRun, impersonatedUserDisplay: impersonatedUserDisplay);
            builder.Services.AddSingleton(executionPolicy);
            builder.Services.AddSingleton(executionPolicy.Options);
            builder.Services.AddSingleton(executionPolicy.Context);

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
                    options.ServerInstructions =
                        $"Connected to Dataverse environment: {_serviceClient.ConnectedOrgUriActual} | " +
                        $"Org: {_serviceClient.ConnectedOrgFriendlyName} ({_serviceClient.ConnectedOrgUniqueName}) | " +
                        $"Version: {_serviceClient.ConnectedOrgVersion} | " +
                        $"Category: {displayCategory} ({toolCount} tools)" +
                        (string.IsNullOrEmpty(impersonatedUserDisplay)
                            ? ""
                            : $" | Impersonating: {impersonatedUserDisplay} (CallerId set server-side)");
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

        private static HashSet<string> GetFilteredToolTypeNames(int requestedLevel)
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

        internal static int GetToolCount(int requestedLevel)
        {
            return GetFilteredToolTypeNames(requestedLevel).Count;
        }
    }
}
