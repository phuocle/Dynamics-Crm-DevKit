using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
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

                settings.ResolveMachineEnvironmentDefaults();
                LogConnectionInfo(settings);
                var serviceClient = await ConnectAsync(settings);
                if (serviceClient == null) return 2;

                LogInfo($"Org: {serviceClient.ConnectedOrgFriendlyName} ({serviceClient.ConnectedOrgUniqueName})");
                LogInfo($"Version: {serviceClient.ConnectedOrgVersion}");
                if (settings.DryRun)
                    LogInfo("DRY-RUN MODE: Mutating operations will NOT execute.");
                if (!string.IsNullOrEmpty(settings.Name))
                    LogInfo($"Instance: {settings.Name}");

                // ── Impersonation (--as-user) ────────────────────────────────────
                // Resolve and validate before starting the server. If the connecting
                // user is not a System Administrator (or lacks prvActOnBehalfOfAnotherUser),
                // the setting is IGNORED with a warning rather than failing the server.
                Guid? impersonatedUserId = null;
                string impersonatedUserDisplay = null;
                if (!string.IsNullOrWhiteSpace(settings.AsUser))
                {
                    if (RoleGateHelper.IsSystemAdministrator(serviceClient))
                    {
                        impersonatedUserId = ResolveAsUser(serviceClient, settings.AsUser, out impersonatedUserDisplay);
                        if (impersonatedUserId.HasValue)
                        {
                            serviceClient.CallerId = impersonatedUserId.Value;
                            LogInfo($"Impersonating: {impersonatedUserDisplay}");
                        }
                        else
                        {
                            LogInfo($"WARNING: --as-user '{settings.AsUser}' was ignored. Target user could not be resolved or is disabled. MCP server will run as the connecting user.");
                        }
                    }
                    else
                    {
                        var roles = RoleGateHelper.GetCurrentRoleNames(serviceClient);
                        var rolesList = roles.Count > 0 ? string.Join(", ", roles) : "(none)";
                        LogInfo($"WARNING: --as-user '{settings.AsUser}' was ignored. The connecting user is not a System Administrator (roles: {rolesList}). MCP server will run as the connecting user.");
                    }
                }

                LogInfo($"Starting MCP server v{Shared.Const.Version}...");

                var host = new Mcp.McpServerHost(serviceClient);
                await host.RunAsync(settings.Category, settings.DryRun, settings.Name, impersonatedUserId, impersonatedUserDisplay);

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
                UserName = GetConnectionUserName(settings),
                Password = settings.Password,
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
            if (!settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase) && !string.IsNullOrEmpty(settings.Url))
                LogInfo($"URL: {settings.Url}");
            if (ShouldLogClientId(settings.AuthType) && !string.IsNullOrEmpty(settings.ClientId))
                LogInfo($"Client ID: {settings.ClientId}");
            if (ShouldLogUsername(settings.AuthType) && !string.IsNullOrEmpty(settings.Username))
                LogInfo($"Username: {settings.Username}");
            if (settings.AuthType.Equals("AD", StringComparison.OrdinalIgnoreCase) && !string.IsNullOrEmpty(settings.Domain))
                LogInfo($"Domain: {settings.Domain}");
            if (settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase) && !string.IsNullOrEmpty(settings.PacProfile))
                LogInfo($"PAC Profile: {settings.PacProfile}");
        }

        private static bool ShouldLogClientId(string authType)
        {
            return authType.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase) ||
                   authType.Equals("Interactive", StringComparison.OrdinalIgnoreCase) ||
                   authType.Equals("DeviceCode", StringComparison.OrdinalIgnoreCase) ||
                   authType.Equals("OAuth", StringComparison.OrdinalIgnoreCase);
        }

        private static bool ShouldLogUsername(string authType)
        {
            return authType.Equals("OAuth", StringComparison.OrdinalIgnoreCase) ||
                   authType.Equals("AD", StringComparison.OrdinalIgnoreCase);
        }

        private static string GetConnectionUserName(McpCommandArgs settings)
        {
            if (!settings.AuthType.Equals("AD", StringComparison.OrdinalIgnoreCase) ||
                string.IsNullOrEmpty(settings.Domain) ||
                string.IsNullOrEmpty(settings.Username) ||
                settings.Username.Contains("\\"))
            {
                return settings.Username;
            }

            return $"{settings.Domain}\\{settings.Username}";
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

        // ── Impersonation helpers ──────────────────────────────────────────────

        /// <summary>
        /// Resolve <c>--as-user</c> to a <c>systemuserid</c> GUID and validate the
        /// target user. Returns <c>null</c> if the user cannot be resolved, does not
        /// exist, or is disabled. Never throws — the caller checks for <c>null</c>.
        /// Privilege check is done separately via <see cref="RoleGateHelper.IsSystemAdministrator"/>
        /// before calling this method.
        /// </summary>
        private static Guid? ResolveAsUser(ServiceClient serviceClient, string asUser, out string display)
        {
            display = null;

            // Step 1: Resolve the target user (GUID or email).
            Guid? targetUserId;
            if (Guid.TryParse(asUser.Trim(), out var parsedGuid))
            {
                targetUserId = parsedGuid;
            }
            else
            {
                // Treat as email — resolve to systemuserid.
                targetUserId = ResolveUserByEmail(serviceClient, asUser.Trim(), out var emailFullName);
                if (!targetUserId.HasValue)
                {
                    LogInfo($"No systemuser found with email '{asUser}'. Check the email address or use a systemuserid GUID.");
                    return null;
                }
            }

            // Step 2: Validate the target user exists and is active.
            if (!ValidateTargetUser(serviceClient, targetUserId.Value, out var fullName, out var email, out var isDisabled))
            {
                LogInfo($"Impersonation target user '{targetUserId.Value}' not found or not accessible.");
                return null;
            }

            display = !string.IsNullOrEmpty(fullName)
                ? $"{fullName} ({email ?? asUser})"
                : (email ?? asUser);

            if (isDisabled)
            {
                LogInfo($"Impersonation target user '{display}' is disabled. Cannot impersonate a disabled user.");
                return null;
            }

            return targetUserId;
        }

        /// <summary>
        /// Resolve an email address to a <c>systemuserid</c> GUID.
        /// Returns <c>null</c> if no user or multiple users found. Never throws.
        /// </summary>
        private static Guid? ResolveUserByEmail(ServiceClient serviceClient, string email, out string fullName)
        {
            fullName = null;
            try
            {
                var query = new QueryExpression("systemuser")
                {
                    ColumnSet = new ColumnSet("systemuserid", "fullname"),
                    TopCount = 2
                };
                query.Criteria.AddCondition("internalemailaddress", ConditionOperator.Equal, email);

                var result = serviceClient.RetrieveMultiple(query);
                if (result.Entities.Count == 0)
                    return null;

                if (result.Entities.Count > 1)
                {
                    LogInfo($"Multiple systemusers found with email '{email}'. Use a systemuserid GUID instead to disambiguate.");
                    return null;
                }

                fullName = result.Entities[0].GetAttributeValue<string>("fullname");
                return result.Entities[0].Id;
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// Validate that the target user exists and is active.
        /// Uses <c>RetrieveMultiple</c> (not <c>Retrieve</c>) so a missing user
        /// returns an empty collection instead of throwing. Never throws.
        /// </summary>
        private static bool ValidateTargetUser(ServiceClient serviceClient, Guid userId, out string fullName, out string email, out bool isDisabled)
        {
            fullName = null;
            email = null;
            isDisabled = false;

            var query = new QueryExpression("systemuser")
            {
                ColumnSet = new ColumnSet("fullname", "internalemailaddress", "isdisabled"),
                TopCount = 1
            };
            query.Criteria.AddCondition("systemuserid", ConditionOperator.Equal, userId);

            var result = serviceClient.RetrieveMultiple(query);
            if (result?.Entities == null || result.Entities.Count == 0)
                return false;

            var user = result.Entities[0];
            fullName = user.GetAttributeValue<string>("fullname");
            email = user.GetAttributeValue<string>("internalemailaddress");
            isDisabled = user.GetAttributeValue<bool?>("isdisabled") ?? false;
            return true;
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
            Console.WriteLine("2. ENVIRONMENT VARIABLES");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   Required:");
            Console.WriteLine("   DEVKIT_AUTH_TYPE     : Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD");
            Console.WriteLine("   DEVKIT_URL           : https://org.crm.dynamics.com (except FromPac)");
            Console.WriteLine();
            Console.WriteLine("   Optional (auto-detected for Interactive/DeviceCode):");
            Console.WriteLine("   DEVKIT_CLIENT_ID     : Azure AD Application (Client) ID");
            Console.WriteLine("   DEVKIT_CLIENT_SECRET : Azure AD Client Secret (required for ClientSecret)");
            Console.WriteLine("   DEVKIT_PAC_PROFILE   : PAC CLI profile name (required for FromPac)");
            Console.WriteLine("   DEVKIT_USERNAME      : Username");
            Console.WriteLine("   DEVKIT_PASSWORD      : Password");
            Console.WriteLine("   DEVKIT_DOMAIN        : Domain");
            Console.WriteLine();
            Console.WriteLine($"3. AVAILABLE TOOLS ({tools.Count} Tools)");
            Console.WriteLine("-------------------------------------------------------------------------");
            var readonlyCount = Mcp.McpServerHost.GetToolCount(Mcp.McpServerHost.CategoryLevel["readonly"]);
            var allCount = Mcp.McpServerHost.GetToolCount(Mcp.McpServerHost.CategoryLevel["all"]);
            Console.WriteLine($"   Filter tools with --category: readonly ({readonlyCount}), all ({allCount})");
            Console.WriteLine("   Default: all (loads everything)");
            Console.WriteLine();
            foreach (var tool in tools)
            {
                Console.WriteLine($"   - {tool.Name,-30}: {tool.Title}");
            }
            Console.WriteLine();
            Console.WriteLine("4. MCP CONFIGURATION EXAMPLES");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine("   Use client-specific process aliases so Task Manager, logs, and");
            Console.WriteLine("   MCP diagnostics can identify which AI client started devkit mcp:");
            Console.WriteLine();
            Console.WriteLine("     Claude      : devkit mcp devkit-claude");
            Console.WriteLine("     Codex       : devkit mcp devkit-codex");
            Console.WriteLine("     Copilot     : devkit mcp devkit-copilot");
            Console.WriteLine("     Antigravity : devkit mcp devkit-antigravity");
            Console.WriteLine();
            Console.WriteLine("   [Claude - .mcp.json.example -> .mcp.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [\"mcp\", \"devkit-claude\"],");
            Console.WriteLine("         \"env\": {");
            Console.WriteLine("           \"DEVKIT_AUTH_TYPE\": \"FromPac\",");
            Console.WriteLine("           \"DEVKIT_PAC_PROFILE\": \"default\"");
            Console.WriteLine("         }");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   [Codex - .codex/config.toml.example -> .codex/config.toml]");
            Console.WriteLine("   [mcp_servers.dynamicscrm-devkit]");
            Console.WriteLine("   command = \"devkit\"");
            Console.WriteLine("   args = [\"mcp\", \"devkit-codex\"]");
            Console.WriteLine("   env_vars = [");
            Console.WriteLine("     \"DEVKIT_AUTH_TYPE\",");
            Console.WriteLine("     \"DEVKIT_URL\",");
            Console.WriteLine("     \"DEVKIT_CLIENT_ID\",");
            Console.WriteLine("     \"DEVKIT_CLIENT_SECRET\",");
            Console.WriteLine("     \"DEVKIT_PAC_PROFILE\",");
            Console.WriteLine("     \"DEVKIT_USERNAME\",");
            Console.WriteLine("     \"DEVKIT_PASSWORD\",");
            Console.WriteLine("     \"DEVKIT_DOMAIN\"");
            Console.WriteLine("   ]");
            Console.WriteLine("   startup_timeout_sec = 20");
            Console.WriteLine("   tool_timeout_sec = 120");
            Console.WriteLine();
            Console.WriteLine("   [VS Code Copilot - .vscode/mcp.json.example -> .vscode/mcp.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"servers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"type\": \"stdio\",");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [\"mcp\", \"devkit-copilot\"],");
            Console.WriteLine("         \"env\": {");
            Console.WriteLine("           \"DEVKIT_AUTH_TYPE\": \"${input:devkitAuthType}\",");
            Console.WriteLine("           \"DEVKIT_URL\": \"${input:devkitUrl}\",");
            Console.WriteLine("           \"DEVKIT_PAC_PROFILE\": \"${input:devkitPacProfile}\"");
            Console.WriteLine("         }");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   [Antigravity CLI workspace - .agents/mcp_config.json.example -> .agents/mcp_config.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [\"mcp\", \"devkit-antigravity\"],");
            Console.WriteLine("         \"env\": {");
            Console.WriteLine("           \"DEVKIT_AUTH_TYPE\": \"FromPac\",");
            Console.WriteLine("           \"DEVKIT_PAC_PROFILE\": \"default\"");
            Console.WriteLine("         }");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   Tracked examples in this repo:");
            Console.WriteLine("     .mcp.json.example");
            Console.WriteLine("     .codex/config.toml.example");
            Console.WriteLine("     .vscode/mcp.json.example");
            Console.WriteLine("     .agents/mcp_config.json.example");
            Console.WriteLine();
            Console.WriteLine("   Copy an example to the real local config file and keep secrets local.");
            Console.WriteLine("   Antigravity Editor custom MCP config: ~/.gemini/config/mcp_config.json");
            Console.WriteLine("   Antigravity CLI global MCP config: ~/.gemini/antigravity-cli/mcp_config.json");
            Console.WriteLine("=========================================================================");
        }

        private static void PrintTools()
        {
            var tools = GetMcpToolInfos();
            var categories = new (string Name, string Description)[]
            {
                ("ReadOnly", "Query data and inspect metadata — never changes anything"),
                ("Mutation", "Create, update, delete, publish — changes data or metadata")
            };

            Console.WriteLine();
            Console.WriteLine($"DevKit MCP Tools ({tools.Count})");
            Console.WriteLine("=========================================================================");

            var index = 1;
            foreach (var (name, description) in categories)
            {
                var categoryTools = tools.Where(t => t.Category == name).ToList();
                if (categoryTools.Count == 0) continue;

                Console.WriteLine();
                Console.WriteLine($"  {name} ({categoryTools.Count} tools) - {description}");
                Console.WriteLine("  -------------------------------------------------------------------------");
                foreach (var tool in categoryTools)
                {
                    Console.WriteLine($"  {index,3}. {tool.Name,-30} {tool.Title}");
                    index++;
                }
            }

            Console.WriteLine();
            Console.WriteLine("=========================================================================");
            Console.WriteLine("Filter with: devkit mcp --category readonly|all");
            Console.WriteLine("Run 'devkit mcp --setup-guide' for full configuration guide.");
        }

        private static List<McpToolInfo> GetMcpToolInfos()
        {
            var results = new List<McpToolInfo>();
            var assembly = Assembly.GetExecutingAssembly();
            var toolTypes = assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null
                         && !Mcp.McpServerHost.DisabledToolSet.Contains(t.Name));

            foreach (var type in toolTypes)
            {
                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var toolAttr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (toolAttr == null) continue;

                    var name = toolAttr.Name ?? method.Name;
                    var title = toolAttr.Title ?? name;

                    var category = toolAttr.ReadOnly ? "ReadOnly" : "Mutation";
                    results.Add(new McpToolInfo(name, title, category));
                }
            }

            var categoryOrder = new Dictionary<string, int>
            {
                ["ReadOnly"] = 0,
                ["Mutation"] = 1
            };

            return results
                .OrderBy(t => categoryOrder.TryGetValue(t.Category, out var order) ? order : 99)
                .ThenBy(t => t.Name)
                .ToList();
        }

        private record McpToolInfo(string Name, string Title, string Category);
    }
}
