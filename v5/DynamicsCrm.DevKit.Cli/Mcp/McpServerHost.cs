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
            [nameof(GetMetadataEntitiesTool)] = "basic",
            [nameof(GetGlobalOptionSetsTool)] = "basic",
            [nameof(GetRecordTool)] = "basic",
            [nameof(UpsertRecordTool)] = "basic",
            [nameof(DeleteRecordTool)] = "basic",
            [nameof(ExecuteFetchXmlTool)] = "basic",
            [nameof(RelevanceSearchTool)] = "basic",
            [nameof(ParseRecordUrlTool)] = "basic",

            // standard (20 additional tools)
            [nameof(PublishCustomizationsTool)] = "standard",
            [nameof(GetFormsTool)] = "standard",
            [nameof(GetViewsTool)] = "standard",
            [nameof(GetRolesTool)] = "standard",
            [nameof(GetSdkMessagesTool)] = "standard",
            [nameof(GetVariablesTool)] = "standard",
            [nameof(GetClassicWorkflowsTool)] = "standard",
            [nameof(GetCloudFlowsTool)] = "standard",
            [nameof(GetBpfsTool)] = "standard",
            [nameof(GetBusinessRulesTool)] = "standard",
            [nameof(GetCustomApisTool)] = "standard",
            [nameof(GetAuditHistoryTool)] = "standard",
            [nameof(GetSolutionComponentsTool)] = "standard",
            [nameof(GetPluginTraceLogsTool)] = "standard",
            [nameof(GetJobsTool)] = "standard",
            [nameof(GetPluginsTool)] = "standard",
            [nameof(GetCommandsTool)] = "standard",
            [nameof(UpsertVariableTool)] = "standard",
            [nameof(BuildFormxmlTool)] = "standard",
            [nameof(GetWebResourcesTool)] = "standard",

            // advanced (6 additional tools)
            [nameof(UpsertFormTool)] = "advanced",
            [nameof(UpsertViewTool)] = "advanced",
            [nameof(UpsertSiteMapTool)] = "advanced",
            [nameof(UpsertEntityTool)] = "advanced",
            [nameof(UpsertAttributeTool)] = "advanced",
            [nameof(ExecuteWebApiTool)] = "advanced",
        };

        internal static readonly Dictionary<string, int> CategoryLevel = new()
        {
            ["basic"] = 1,
            ["standard"] = 2,
            ["advanced"] = 3,
            ["all"] = 3,
        };

        public async Task RunAsync(string category = "all")
        {
            var normalizedCategory = category.Trim().ToLowerInvariant();
            var requestedLevel = CategoryLevel.TryGetValue(normalizedCategory, out var lvl) ? lvl : 3;
            var filteredTypes = GetFilteredToolTypes(requestedLevel);
            var toolCount = filteredTypes.Count;

            var builder = Host.CreateApplicationBuilder();

            builder.Logging.AddConsole(options =>
            {
                options.LogToStandardErrorThreshold = Microsoft.Extensions.Logging.LogLevel.Trace;
            });

            builder.Services.AddSingleton(_serviceClient);
            builder.Services.AddSingleton(new MetadataService(_serviceClient));

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
                        $"Category: {displayCategory} ({toolCount} tools)";
                })
                .WithStdioServerTransport()
                .WithTools(filteredTypes)
                .WithResourcesFromAssembly();

            await builder.Build().RunAsync();
        }

        private static List<System.Type> GetFilteredToolTypes(int requestedLevel)
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

            return allToolTypes
                .Where(t =>
                {
                    var toolCategory = ToolCategoryMap[t.Name];
                    var toolLevel = CategoryLevel.TryGetValue(toolCategory, out var tl) ? tl : 3;
                    return toolLevel <= requestedLevel;
                })
                .ToList();
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
