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
            // basic (7 tools)
            [nameof(WhoAmITool)] = "basic",
            [nameof(GetTablesTool)] = "basic",
            [nameof(ManageChoiceTool)] = "basic",
            [nameof(ManageRecordTool)] = "basic",
            [nameof(ExecuteFetchXmlTool)] = "basic",
            [nameof(SearchRecordsTool)] = "basic",
            [nameof(ParseRecordUrlTool)] = "basic",

            // standard (19 additional tools)
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
            [nameof(GetDataverseCommandsTool)] = "standard",
            [nameof(BuildFormXMLTool)] = "standard",
            [nameof(BuildSiteMapXmlTool)] = "standard",
            [nameof(ManageWebResourceTool)] = "standard",

            // advanced (5 additional tools)
            [nameof(ManageSiteMapTool)] = "advanced",
            [nameof(UpsertTableTool)] = "advanced",
            [nameof(UpsertColumnTool)] = "advanced",
            [nameof(UpsertRelationshipTool)] = "advanced",
            [nameof(ExecuteWebApiTool)] = "advanced",
        };

        internal static readonly Dictionary<string, int> CategoryLevel = new()
        {
            ["basic"] = 1,
            ["standard"] = 2,
            ["advanced"] = 3,
            ["all"] = 3,
        };

        public async Task RunAsync(string category = "all", bool dryRun = false)
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

            builder.Services
                .AddMcpServer(options =>
                {
                    options.ServerInfo = new()
                    {
                        Name = $"DynamicsCrm.DevKit ({displayCategory})",
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

            // Filter tools by category after registration
            if (requestedLevel < 3)
            {
                builder.Services.PostConfigure<McpServerOptions>(options =>
                {
                    if (options.ToolCollection == null) return;
                    var toRemove = options.ToolCollection
                        .Where(t => !allowedTypeNames.Contains(t.ProtocolTool.Name))
                        .ToList();
                    foreach (var tool in toRemove)
                        options.ToolCollection.Remove(tool);
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
                var toolLevel = CategoryLevel.TryGetValue(kv.Value, out var tl) ? tl : 3;
                return toolLevel <= requestedLevel;
            });
        }
    }
}
