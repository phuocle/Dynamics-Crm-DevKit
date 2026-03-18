using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Spectre.Console.Cli;
using System;
using System.IO;
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

                settings.ResolveEnvironmentDefaults();
                LogConnectionInfo(settings);
                var serviceClient = await ConnectAsync(settings);
                if (serviceClient == null) return 2;

                LogInfo($"Org: {serviceClient.ConnectedOrgFriendlyName} ({serviceClient.ConnectedOrgUniqueName})");
                LogInfo($"Version: {serviceClient.ConnectedOrgVersion}");
                LogInfo($"Starting MCP server v{Shared.Const.Version}...");

                var host = new Mcp.McpServerHost(serviceClient);
                await host.RunAsync();

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
            Console.WriteLine("3. AVAILABLE TOOLS (12 Tools)");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   - whoami                  : Get current user identity & roles");
            Console.WriteLine("   - get_environment_info    : Get environment version & details");
            Console.WriteLine("   - get_entities_metadata   : List all tables in environment");
            Console.WriteLine("   - get_entity_metadata     : Get detailed metadata for one table");
            Console.WriteLine("   - get_global_optionsets   : Get global choices/optionsets");
            Console.WriteLine("   - get_messages            : Discover Dataverse SDK messages/APIs");
            Console.WriteLine("   - execute_fetchxml        : Query data using FetchXML");
            Console.WriteLine("   - search                  : Dataverse Relevance Search");
            Console.WriteLine("   - get_record              : Retrieve a single record by ID");
            Console.WriteLine("   - create_record           : Create a new record");
            Console.WriteLine("   - update_record           : Update an existing record");
            Console.WriteLine("   - delete_record           : Delete a record");
            Console.WriteLine();
            Console.WriteLine("4. MCP.JSON CONFIGURATION EXAMPLES");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   [VS Code / Cursor]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [\"mcp\"],");
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
    }
}
