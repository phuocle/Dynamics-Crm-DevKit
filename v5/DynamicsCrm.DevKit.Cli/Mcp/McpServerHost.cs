using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
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

        // Tool category assignment — cumulative levels
        // Uses nameof() for compile-time safety
        internal static readonly Dictionary<string, string> ToolCategoryMap = new()
        {
            // basic (9 tools)
            [nameof(WhoAmITool)] = "basic",
            [nameof(GetTablesTool)] = "basic",
            [nameof(ManageChoiceTool)] = "basic",
            [nameof(ManageRecordTool)] = "basic",
            [nameof(CreateRecordsTool)] = "basic",
            [nameof(GenerateDemoDataTool)] = "basic",
            [nameof(ExecuteFetchXmlTool)] = "basic",
            [nameof(SearchRecordsTool)] = "basic",
            [nameof(ParseRecordUrlTool)] = "basic",

            // standard (17 additional tools)
            [nameof(PublishCustomizationsTool)] = "standard",
            [nameof(ManageFormTool)] = "standard",
            [nameof(ManageViewTool)] = "standard",
            [nameof(ManageRoleTool)] = "standard",
            [nameof(GetMessagesTool)] = "standard",
            [nameof(ManageEnvironmentVariableTool)] = "standard",
            [nameof(GetWorkflowsTool)] = "standard",
            [nameof(GetFlowsTool)] = "standard",
            [nameof(GetBusinessProcessFlowsTool)] = "standard",
            [nameof(GetBusinessRulesTool)] = "standard",
            [nameof(GetCustomApisTool)] = "standard",
            [nameof(GetAuditHistoryTool)] = "standard",
            [nameof(GetSolutionComponentsTool)] = "standard",
            [nameof(GetPluginTraceLogsTool)] = "standard",
            [nameof(GetSystemJobsTool)] = "standard",
            [nameof(GetPluginsTool)] = "standard",
            [nameof(ManageWebResourceTool)] = "standard",

            // advanced (7 additional tools)
            [nameof(ManageCommandTool)] = "advanced",
            [nameof(ManageAppTool)] = "advanced",
            [nameof(UpsertTableTool)] = "advanced",
            [nameof(UpsertColumnTool)] = "advanced",
            [nameof(UpsertRelationshipTool)] = "advanced",
            [nameof(ExecuteWebApiTool)] = "advanced",
            [nameof(ManageRibbonTool)] = "advanced",
        };

        // Tools permanently disabled (set = type names using nameof() for compile-time safety)
        internal static readonly HashSet<string> DisabledToolSet = new()
        {
        };

        // Maps disabled tool type name → associated resource names (Name from [McpServerResource(Name=...)])
        internal static readonly Dictionary<string, string[]> ToolResourceMap = new()
        {
        };

        internal static readonly Dictionary<string, int> CategoryLevel = new()
        {
            ["basic"] = 1,
            ["standard"] = 2,
            ["advanced"] = 3,
            ["all"] = 3,
        };

        public async Task RunAsync(string category = "all", bool dryRun = false, string instanceName = null)
        {
            var normalizedCategory = category.Trim().ToLowerInvariant();
            var requestedLevel = CategoryLevel.TryGetValue(normalizedCategory, out var lvl) ? lvl : 3;
            var allowedTypeNames = GetFilteredToolTypeNames(requestedLevel);
            var toolCount = allowedTypeNames.Count;

            var builder = Host.CreateApplicationBuilder();

            builder.Logging.AddConsole(options =>
            {
                options.LogToStandardErrorThreshold = Microsoft.Extensions.Logging.LogLevel.Trace;
            });

            builder.Services.AddSingleton(_serviceClient);
            builder.Services.AddSingleton(new MetadataService(_serviceClient));
            builder.Services.AddSingleton(new McpDryRunOptions { DryRun = dryRun });

            var displayCategory = normalizedCategory == "all" ? "all" : normalizedCategory;
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
                        (dryRun ? " | DRY-RUN MODE ACTIVE: All mutating operations are blocked. Read operations work normally." : "");
                })
                .WithStdioServerTransport()
                .WithToolsFromAssembly()
                .WithResourcesFromAssembly();

            // Compute resource names to disable (from DisabledToolSet)
            var disabledResourceNames = new System.Collections.Generic.HashSet<string>(
                DisabledToolSet
                    .Where(t => ToolResourceMap.ContainsKey(t))
                    .SelectMany(t => ToolResourceMap[t]));

            var needsCategoryFilter = requestedLevel < 3;
            var needsResourceFilter = disabledResourceNames.Count > 0;

            // Filter tools by category and/or disabled resources after registration
            if (needsCategoryFilter || needsResourceFilter)
            {
                builder.Services.PostConfigure<McpServerOptions>(options =>
                {
                    if (needsCategoryFilter && options.ToolCollection != null)
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

            var unmapped = allToolTypes
                .Where(t => !ToolCategoryMap.ContainsKey(t.Name))
                .Select(t => t.Name)
                .ToList();

            if (unmapped.Count > 0)
                throw new System.InvalidOperationException(
                    $"MCP tools missing from ToolCategoryMap: {string.Join(", ", unmapped)}. " +
                    $"Add them to McpServerHost.ToolCategoryMap before running.");

            // Resolve MCP tool names from [McpServerTool(Name = "...")] attributes
            var allowedNames = new HashSet<string>();
            foreach (var type in allToolTypes)
            {
                if (DisabledToolSet.Contains(type.Name)) continue;

                var toolCategory = ToolCategoryMap[type.Name];
                var toolLevel = CategoryLevel.TryGetValue(toolCategory, out var tl) ? tl : 3;
                if (toolLevel > requestedLevel) continue;

                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var attr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (attr != null)
                        allowedNames.Add(attr.Name ?? method.Name);
                }
            }

            return allowedNames;
        }

        internal static int GetToolCount(int requestedLevel)
        {
            return ToolCategoryMap.Count(kv =>
            {
                if (DisabledToolSet.Contains(kv.Key)) return false;
                var toolLevel = CategoryLevel.TryGetValue(kv.Value, out var tl) ? tl : 3;
                return toolLevel <= requestedLevel;
            });
        }
    }
}
