using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using Spectre.Console.Cli;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    public class McpCommand : AsyncCommand<McpCommandArgs>
    {
        private static TextWriter Stderr => Console.Error;

        public override async Task<int> ExecuteAsync(CommandContext context, McpCommandArgs settings, CancellationToken cancellationToken)
        {
            try
            {
                if (settings.SetupGuide)
                {
                    PrintSetupGuide();
                    return 0;
                }

                if (settings.ListTools)
                {
                    PrintTools();
                    return 0;
                }

                settings.ResolveEnvironmentDefaults();
                LogConnectionInfo(settings);
                var serviceClient = await ConnectAsync(settings);
                if (serviceClient == null) return 2;

                LogInfo($"Org: {serviceClient.ConnectedOrgFriendlyName} ({serviceClient.ConnectedOrgUniqueName})");
                LogInfo($"Version: {serviceClient.ConnectedOrgVersion}");
                LogInfo($"Starting MCP server v{Shared.Const.Version}...");

                var host = new Mcp.McpServerHost(serviceClient);
                await host.RunAsync(settings.Category);

                return 0;
            }
            catch (Exception ex)
            {
                LogError(ex.Message);
                if (ex.InnerException != null)
                    LogError($"Inner: {ex.InnerException.Message}");
                return 1;
            }
        }

        private async Task<ServiceClient> ConnectAsync(McpCommandArgs settings)
        {
            if (string.IsNullOrEmpty(settings.AuthType) && string.IsNullOrEmpty(settings.Connection))
            {
                LogError("--auth or --conn is required for MCP server.");
                return null;
            }

            LogInfo("Connecting to Dynamics 365...");

            ServiceClient serviceClient;

            if (!string.IsNullOrEmpty(settings.AuthType))
            {
                serviceClient = await ConnectModernAsync(settings);
            }
            else
            {
                var legacyBuilder = new LegacyConnectionBuilder();
                var crmConn = legacyBuilder.ParseConnectionString(settings.Connection);
                if (crmConn == null)
                {
                    LogError("Invalid connection string.");
                    return null;
                }

                var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
                serviceClient = await builder.CreateServiceClientAsync(crmConn);
            }

            if (serviceClient?.IsReady != true)
            {
                LogError($"Connection failed: {serviceClient?.LastError}");
                return null;
            }

            ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            LogInfo($"Connected: {serviceClient.ConnectedOrgUriActual}");

            return serviceClient;
        }

        private static async Task<ServiceClient> ConnectModernAsync(McpCommandArgs settings)
        {
            if (string.IsNullOrEmpty(settings.Url) && !settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
                throw new Exception("--url is required for modern authentication (except FromPac).");

            if (!ConnectionBuilderFactory.IsSupported(settings.AuthType))
                throw new Exception($"Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD.");

            var builder = ConnectionBuilderFactory.GetBuilder(settings.AuthType);

            var clientSecret = settings.ClientSecret;
            if (!string.IsNullOrEmpty(clientSecret))
                clientSecret = Helper.DecryptString(clientSecret);

            var connection = new CrmConnection
            {
                Name = "mcp",
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = clientSecret,
                Type = settings.AuthType,
                PacProfile = settings.PacProfile
            };

            var (isValid, error) = await builder.ValidateAsync(connection);
            if (!isValid)
                throw new Exception($"Validation failed: {error}");

            if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder)
            {
                deviceCodeBuilder.DeviceCodeCallback = message =>
                {
                    LogInfo($"[DeviceCode] {message}");
                };
            }

            return await builder.CreateServiceClientAsync(connection);
        }

        private static void LogConnectionInfo(McpCommandArgs settings)
        {
            LogInfo($"Auth: {(string.IsNullOrEmpty(settings.AuthType) ? "(legacy --conn)" : settings.AuthType)}");
            if (!string.IsNullOrEmpty(settings.Url))
                LogInfo($"URL: {settings.Url}");
            if (!string.IsNullOrEmpty(settings.PacProfile))
                LogInfo($"PAC Profile: {settings.PacProfile}");
        }

        private static void LogInfo(string message)
        {
            Stderr.WriteLine($"[DevKit MCP] {message}");
            Stderr.Flush();
        }

        private static void LogError(string message)
        {
            Stderr.WriteLine($"[DevKit MCP ERROR] {message}");
            Stderr.Flush();
        }

        private void PrintSetupGuide()
        {
            var tools = GetMcpToolInfos();
            Console.WriteLine("=========================================================================");
            Console.WriteLine(" DevKit MCP Setup Guide");
            Console.WriteLine("=========================================================================");
            Console.WriteLine();
            Console.WriteLine("1. INSTALLATION");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   dotnet tool install -g DynamicsCrm.DevKit.Cli");
            Console.WriteLine();
            Console.WriteLine("2. ENVIRONMENT VARIABLES (Optional but recommended)");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   DEVKIT_AUTH_TYPE     : Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD");
            Console.WriteLine("   DEVKIT_URL           : https://org.crm.dynamics.com");
            Console.WriteLine("   DEVKIT_CLIENT_ID     : Azure AD Application (Client) ID");
            Console.WriteLine("   DEVKIT_CLIENT_SECRET : Azure AD Client Secret");
            Console.WriteLine("   DEVKIT_PAC_PROFILE   : PAC CLI profile name");
            Console.WriteLine("   DEVKIT_USERNAME      : Username");
            Console.WriteLine("   DEVKIT_PASSWORD      : Password");
            Console.WriteLine("   DEVKIT_DOMAIN        : Domain");
            Console.WriteLine();
            Console.WriteLine($"3. AVAILABLE TOOLS ({tools.Count} Tools)");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   Filter tools with --category: basic (9), standard (29), advanced (35)");
            Console.WriteLine("   Default: all (loads everything)");
            Console.WriteLine();
            foreach (var tool in tools)
            {
                Console.WriteLine($"   - {tool.Name,-30}: {tool.Title}");
            }
            Console.WriteLine();
            Console.WriteLine("4. MCP.JSON CONFIGURATION EXAMPLES");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   [VS Code / Cursor]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [\"mcp\"],   // or [\"mcp\", \"--category\", \"basic\"]");
            Console.WriteLine("         \"env\": {");
            Console.WriteLine("           \"DEVKIT_AUTH_TYPE\": \"ClientSecret\",");
            Console.WriteLine("           \"DEVKIT_URL\": \"https://org.crm.dynamics.com\",");
            Console.WriteLine("           \"DEVKIT_CLIENT_ID\": \"your-client-id\",");
            Console.WriteLine("           \"DEVKIT_CLIENT_SECRET\": \"your-client-secret\"");
            Console.WriteLine("         }");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   [Antigravity IDE]");
            Console.WriteLine("   Same as above, placed in: C:\\Users\\[User]\\.gemini\\antigravity\\mcp_config.json");
            Console.WriteLine("=========================================================================");
        }

        private static void PrintTools()
        {
            var tools = GetMcpToolInfos();
            var categories = new[]
            {
                "Basic",
                "Standard",
                "Advanced"
            };

            Console.WriteLine();
            Console.WriteLine($"DevKit MCP Tools ({tools.Count})");
            Console.WriteLine("=========================================================================");

            var index = 1;
            foreach (var category in categories)
            {
                var categoryTools = tools.Where(t => t.Category == category).ToList();
                if (categoryTools.Count == 0) continue;

                Console.WriteLine();
                Console.WriteLine($"  {category} ({categoryTools.Count} tools)");
                Console.WriteLine("  -------------------------------------------------------------------------");
                foreach (var tool in categoryTools)
                {
                    Console.WriteLine($"  {index,3}. {tool.Name,-25} - {tool.Title}");
                    index++;
                }
            }

            Console.WriteLine();
            Console.WriteLine("=========================================================================");
            Console.WriteLine("Filter with: devkit mcp --category basic|standard|advanced");
            Console.WriteLine("Run 'devkit mcp --setup-guide' for full configuration guide.");
        }

        private static List<McpToolInfo> GetMcpToolInfos()
        {
            var results = new List<McpToolInfo>();
            var assembly = Assembly.GetExecutingAssembly();
            var toolTypes = assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null);

            foreach (var type in toolTypes)
            {
                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var toolAttr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (toolAttr == null) continue;

                    var name = toolAttr.Name ?? method.Name;
                    var title = toolAttr.Title ?? name;

                    var category = GetCategory(type.Name);
                    results.Add(new McpToolInfo(name, title, category));
                }
            }

            var categoryOrder = new Dictionary<string, int>
            {
                ["Basic"] = 0,
                ["Standard"] = 1,
                ["Advanced"] = 2
            };

            return results
                .OrderBy(t => categoryOrder.TryGetValue(t.Category, out var order) ? order : 99)
                .ThenBy(t => t.Name)
                .ToList();
        }

        private static string GetCategory(string typeName)
        {
            if (Mcp.McpServerHost.ToolCategoryMap.TryGetValue(typeName, out var category))
            {
                return category switch
                {
                    "basic" => "Basic",
                    "standard" => "Standard",
                    "advanced" => "Advanced",
                    _ => "Advanced"
                };
            }
            return "Advanced";
        }

        private record McpToolInfo(string Name, string Title, string Category);
    }
}
