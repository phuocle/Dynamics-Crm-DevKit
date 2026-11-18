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
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    [Description(Mcp.McpStartupConfiguration.Description)]
    public class McpCommand : AsyncCommand<McpCommandArgs>
    {
        private static TextWriter Stderr => Console.Error;
        private static string RedactConnectionError(string message, McpCommandArgs settings)
        {
            var text = message ?? "";
            foreach (var secret in new[] { settings.ClientSecret, settings.Password, settings.Connection })
                if (!string.IsNullOrEmpty(secret)) text = text.Replace(secret, "[redacted]", StringComparison.Ordinal);
            return System.Text.RegularExpressions.Regex.Replace(text,
                @"(?i)(clientsecret|client_secret|password|access_token|refresh_token)\s*=\s*[^;\r\n]+", "$1=[redacted]");
        }

        public Task<int> ExecuteAsyncForTesting(CommandContext context, McpCommandArgs settings, CancellationToken cancellationToken)
            => ExecuteAsync(context, settings, cancellationToken);

        public override async Task<int> ExecuteAsync(CommandContext context, McpCommandArgs settings, CancellationToken cancellationToken)
        {
            try
            {
                if (settings.Env != null && !Mcp.McpConnectionSnapshot.IsSelector(settings.Env))
                {
                    LogError($"Invalid --env value '{settings.Env}'. Expected a positive integer group ID without leading zeros, an alias, or default (for example: 1, 2, prod, default).");
                    return 2;
                }

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

                var dryRunFlag = settings.DryRun;
                var legacyAsUser = !string.IsNullOrWhiteSpace(settings.AsUser);
                var snapshot = Mcp.McpStartupConfiguration.Resolve(settings, context?.Arguments, context?.Data is true);

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
                if (!legacyAsUser && !string.IsNullOrWhiteSpace(settings.AsUser))
                {
                    try { impersonatedUserDisplay = Mcp.McpConnectionFactory.ApplyConfiguredImpersonation(serviceClient, settings.AsUser); impersonatedUserId = serviceClient.CallerId; }
                    catch { serviceClient.Dispose(); throw; }
                }
                else if (!string.IsNullOrWhiteSpace(settings.AsUser))
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

                var startupBundle = new Mcp.ConnectionBundle(snapshot.StartupEnvId, serviceClient, settings.DryRun, impersonatedUserDisplay);
                await using var connections = new Mcp.McpConnectionRegistry(snapshot, settings, dryRunFlag, startupBundle);
                var host = new Mcp.McpServerHost(serviceClient, connections);
                await host.RunAsync(
                    settings.Category,
                    settings.DryRun,
                    settings.Name,
                    impersonatedUserId,
                    impersonatedUserDisplay,
                    settings.Env,
                    settings.ResolvedConnectionSource,
                    settings.UsedEnvironmentFallback);

                return 0;
            }
            catch (Mcp.McpConnectionConfigurationException ex)
            {
                LogError(RedactConnectionError(ex.Message, settings));
                return 2;
            }
            catch (Exception ex)
            {
                LogError(RedactConnectionError(ex.Message, settings));
                if (ex.InnerException != null)
                    LogError($"Inner: {RedactConnectionError(ex.InnerException.Message, settings)}");
                return 1;
            }
        }

        private Task<ServiceClient> ConnectAsync(McpCommandArgs settings) => Mcp.McpConnectionFactory.ConnectAsync(settings);
        private static Task<ServiceClient> ConnectModernAsync(McpCommandArgs settings) => Mcp.McpConnectionFactory.ConnectModernAsync(settings);
        private static void ValidateGroupRequiredFields(string authType, CrmConnection connection, string groupId) => Mcp.McpConnectionFactory.ValidateGroupRequiredFields(authType, connection, groupId);

        private static void LogConnectionInfo(McpCommandArgs settings)
        {
            LogInfo($"Auth: {(string.IsNullOrEmpty(settings.AuthType) ? "(legacy --conn)" : settings.AuthType)}");
            if (!string.IsNullOrEmpty(settings.Env))
            {
                LogInfo(settings.UsedEnvironmentGroupFallback
                    ? $"Fallback group: {settings.Env} (DEVKIT_{settings.Env}_*)"
                    : $"Fallback group: {settings.Env} (DEVKIT_{settings.Env}_*; not used)");
            }
            if (!string.IsNullOrEmpty(settings.ResolvedConnectionSource))
                LogInfo($"Connection source: {settings.ResolvedConnectionSource}");
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

        private static string GetConnectionUserName(McpCommandArgs settings) => Mcp.McpConnectionFactory.GetConnectionUserName(settings);

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
        internal static Guid? ResolveAsUser(ServiceClient serviceClient, string asUser, out string display)
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

        private static void WriteGuideHeading(string text)
        {
            if (SpectreLog.IsPlain || Console.IsOutputRedirected)
            {
                Console.WriteLine(text);
                return;
            }

            var previousColor = Console.ForegroundColor;
            try
            {
                Console.ForegroundColor = ConsoleColor.Cyan;
                Console.WriteLine(text);
            }
            finally
            {
                Console.ForegroundColor = previousColor;
            }
        }
        private void PrintSetupGuide()
        {
            var tools = GetMcpToolInfos();
            Console.WriteLine("=========================================================================");
            WriteGuideHeading(" DevKit MCP Setup Guide");
            Console.WriteLine("=========================================================================");
            Console.WriteLine();
            WriteGuideHeading("1. INSTALLATION");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   dotnet tool install -g DynamicsCrm.DevKit.Cli");
            Console.WriteLine();
            WriteGuideHeading("2. CONNECTION (PROJECT .env OR COMMAND-LINE ARGUMENTS)");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine("   Choose exactly one source. Configuration arguments and .env never mix.");
            Console.WriteLine("   .env mode: devkit mcp <name>, optionally followed by --env <id|alias|default>.");
            Console.WriteLine("   Only .env mode discovers multiple organizations. Startup uses DEVKIT_*");
            Console.WriteLine("   unless --env selects another group. Missing startup fields stop the server.");
            Console.WriteLine("   Any other configuration option selects args-only mode: one organization,");
            Console.WriteLine("   complete connection arguments required, no .env lookup or merging.");
            Console.WriteLine("   This includes explicit default/empty values and --dry-run, --category,");
            Console.WriteLine("   --as-user, --transport, --json, --profile and --plain.");
            Console.WriteLine("   --env plus any configuration option is an error. --conn plus --auth is an error.");
            Console.WriteLine("   .env is searched from the process working directory upward to the drive root.");
            Console.WriteLine("   Only the nearest .env file is used (never merged with parent .env files).");
            Console.WriteLine("   OS environment variables are not read for connection values.");
            Console.WriteLine("   Configure the MCP client to launch devkit with the project/workspace as");
            Console.WriteLine("   its working directory. Global installation does not change this directory.");
            Console.WriteLine("   Keep .env local and ignored by Git; commit the MCP config without secrets.");
            Console.WriteLine();
            Console.WriteLine("   Connection groups in project .env:");
            Console.WriteLine("   - Default group (no --env): DEVKIT_<FIELD> (for example DEVKIT_URL)");
            Console.WriteLine("   - Numbered group (--env <id>): DEVKIT_<id>_<FIELD> (for example DEVKIT_1_URL)");
            Console.WriteLine("   - Groups do not need to be consecutive (1, 2, 100); there is no fixed group");
            Console.WriteLine("     limit and no group list declaration is needed.");
            Console.WriteLine("   - Groups are never mixed: in .env mode, --env 1 reads only");
            Console.WriteLine("     DEVKIT_1_* keys and fails if the .env file or group 1 is missing.");
            Console.WriteLine();
            Console.WriteLine("   Example project .env with multiple groups (do not commit):");
            Console.WriteLine("     # Default group");
            Console.WriteLine("     DEVKIT_AUTH_TYPE=ClientSecret");
            Console.WriteLine("     DEVKIT_URL=https://org.crm.dynamics.com");
            Console.WriteLine("     DEVKIT_CLIENT_ID=APP_ID");
            Console.WriteLine("     DEVKIT_CLIENT_SECRET=SECRET");
            Console.WriteLine();
            Console.WriteLine("     # Group 1 (--env 1)");
            Console.WriteLine("     DEVKIT_1_AUTH_TYPE=ClientSecret");
            Console.WriteLine("     DEVKIT_1_URL=https://org-one.crm.dynamics.com");
            Console.WriteLine("     DEVKIT_1_CLIENT_ID=APP_ID_ONE");
            Console.WriteLine("     DEVKIT_1_CLIENT_SECRET=SECRET_ONE");
            Console.WriteLine();
            Console.WriteLine("     # Group 2 (--env 2): can use a different auth type");
            Console.WriteLine("     DEVKIT_2_AUTH_TYPE=FromPac");
            Console.WriteLine("     DEVKIT_2_PAC_PROFILE=UAT");
            Console.WriteLine();
            Console.WriteLine("     # Group 100 (--env 100): non-consecutive IDs are valid");
            Console.WriteLine("     DEVKIT_100_AUTH_TYPE=ClientSecret");
            Console.WriteLine("     DEVKIT_100_URL=https://org-hundred.crm.dynamics.com");
            Console.WriteLine("     DEVKIT_100_CLIENT_ID=APP_ID_HUNDRED");
            Console.WriteLine("     DEVKIT_100_CLIENT_SECRET=SECRET_HUNDRED");
            Console.WriteLine();
            Console.WriteLine("   --env <id>           : Startup .env group (selects DEVKIT_<id>_*; default: DEVKIT_*)");
            Console.WriteLine("   --env also accepts an alias or default (the unnumbered DEVKIT_* group).");
            Console.WriteLine("   One process can serve multiple connections. Dataverse tools take optional env:");
            Console.WriteLine("     omitted = startup; numeric ID/alias = that group; default = DEVKIT_*.");
            Console.WriteLine("   Call connection_list to inspect groups and whoami with env to verify identity.");
            Console.WriteLine("   Aliases: DEVKIT_ALIAS=dev, DEVKIT_1_ALIAS=prod; unique ignoring case,");
            Console.WriteLine("     start with a letter, then letters/digits/_/-. The name default is reserved.");
            Console.WriteLine("   Protect PROD with DEVKIT_1_DRY_RUN=true; DEV may remain writable.");
            Console.WriteLine("     In .env mode group DRY_RUN overrides DEVKIT_DRY_RUN; --dry-run is args-only.");
            Console.WriteLine("   DEVKIT_AS_USER and DEVKIT_1_AS_USER apply only to their own group.");
            Console.WriteLine("     --as-user is args-only; unresolved .env AS_USER fails that connection.");
            Console.WriteLine("   New policy values are validated at startup. File edits require a server restart.");
            Console.WriteLine("   read_instruction, connection_list and resources do not take env.");
            Console.WriteLine("   --auth               : Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD");
            Console.WriteLine("   --url                : https://org.crm.dynamics.com (except FromPac)");
            Console.WriteLine("   --clientid           : Azure AD Application (Client) ID");
            Console.WriteLine("   --clientsecret       : Azure AD Client Secret (required for ClientSecret)");
            Console.WriteLine("   --pacprofile         : PAC CLI profile name (optional; defaults to active profile)");
            Console.WriteLine("   --username           : Username (OAuth)");
            Console.WriteLine("   --password           : Password (OAuth, can be encrypted)");
            Console.WriteLine("   --domain             : Optional domain (AD, on-premises)");
            Console.WriteLine("   --conn               : Full legacy connection string (alternative to the above)");
            Console.WriteLine();
            Console.WriteLine("   Examples:");
            Console.WriteLine("     devkit mcp devkit-claude                  (reads DEVKIT_* from project .env)");
            Console.WriteLine("     devkit mcp devkit-claude-2 --env 1 (reads DEVKIT_1_* from project .env)");
            Console.WriteLine();
            WriteGuideHeading($"3. AVAILABLE TOOLS ({tools.Count} Tools)");
            Console.WriteLine("-------------------------------------------------------------------------");
            var readonlyCount = Mcp.McpServerHost.GetToolCount(Mcp.McpServerHost.CategoryLevel["readonly"]);
            var allCount = Mcp.McpServerHost.GetToolCount(Mcp.McpServerHost.CategoryLevel["all"]);
            Console.WriteLine($"   Filter tools with --category: readonly ({readonlyCount}), all ({allCount})");
            Console.WriteLine("   Default: all (loads everything)");
            Console.WriteLine("   Session options:");
            Console.WriteLine("   --dry-run              : Block mutations at execution time (keeps full catalog;");
            Console.WriteLine("                            differs from --category readonly which hides mutation tools)");
            Console.WriteLine("   --as-user <guid|email> : Impersonate a user for the whole session");
            Console.WriteLine("                            (requires System Administrator)");
            Console.WriteLine();
            foreach (var tool in tools)
            {
                Console.WriteLine($"   - {tool.Name,-30}: {tool.Title}");
            }
            Console.WriteLine();
            WriteGuideHeading("4. MCP CONFIGURATION EXAMPLES");
            Console.WriteLine("-------------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine("   Use client-specific instance names so logs and MCP clients");
            Console.WriteLine("   can identify which AI client started devkit mcp:");
            Console.WriteLine();
            Console.WriteLine("     Claude      : devkit mcp devkit-claude");
            Console.WriteLine("     Codex       : devkit mcp devkit-codex");
            Console.WriteLine("     Copilot     : devkit mcp devkit-copilot");
            Console.WriteLine("     ZCode       : devkit mcp devkit-zcode");
            Console.WriteLine("     Antigravity : devkit mcp devkit-antigravity");
            Console.WriteLine();
            Console.WriteLine("   Multi-instance naming and verification:");
            Console.WriteLine("   - [name] sets the instance display name; --env <id> selects DEVKIT_<id>_*.");
            Console.WriteLine("   - A number in [name] (such as devkit-codex-2) is independent of --env <id>");
            Console.WriteLine("     (for example, instance 2 can use --env 1 while instance 1 uses DEVKIT_*).");
            Console.WriteLine("   - Keep the client server key and [name] aligned so each instance is clear.");
            Console.WriteLine("   - Reload or restart the MCP client after editing its configuration, then");
            Console.WriteLine("     call 'whoami' on each server to verify separate live PIDs, URLs, and Org IDs.");
            Console.WriteLine();
            Console.WriteLine("   Scope: project = current workspace; user = all projects for one OS user;");
            Console.WriteLine("   system = all OS users (admin-managed where supported). ~ is the user home.");
            Console.WriteLine("   Merge the example into the chosen config; do not overwrite other entries.");
            Console.WriteLine("   Project config discovery depends on each client's workspace/trust rules.");
            Console.WriteLine();
            WriteGuideHeading("   [Claude Code project - .mcp.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"devkit-claude\"");
            Console.WriteLine("         ],");
            Console.WriteLine("         \"timeout\": 600000");
            Console.WriteLine("       },");
            Console.WriteLine("       \"dynamicscrm-devkit-2\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-claude-2\"");
            Console.WriteLine("         ],");
            Console.WriteLine("         \"timeout\": 600000");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   User: ~/.claude.json (managed by Claude Code). In PowerShell or a Unix shell:");
            Console.WriteLine("   claude mcp add-json --scope user dynamicscrm-devkit '{\"command\":\"devkit\",\"args\":[\"mcp\",\"devkit-claude\"],\"timeout\":600000}'");
            Console.WriteLine("   claude mcp add-json --scope user dynamicscrm-devkit-2 '{\"command\":\"devkit\",\"args\":[\"mcp\",\"--env\",\"1\",\"devkit-claude-2\"],\"timeout\":600000}'");
            Console.WriteLine("   System: managed-mcp.json (admin only), using the same JSON structure:");
            Console.WriteLine("     Windows: C:\\Program Files\\ClaudeCode\\managed-mcp.json");
            Console.WriteLine("     macOS:   /Library/Application Support/ClaudeCode/managed-mcp.json");
            Console.WriteLine("     Linux:   /etc/claude-code/managed-mcp.json");
            Console.WriteLine("   Caution: managed-mcp.json restricts which other MCP servers can load.");
            Console.WriteLine();
            WriteGuideHeading("   [Codex project - .codex/config.toml]");
            Console.WriteLine("   [mcp_servers.dynamicscrm-devkit]");
            Console.WriteLine("   command = \"devkit\"");
            Console.WriteLine("   args = [");
            Console.WriteLine("     \"mcp\", \"devkit-codex\"");
            Console.WriteLine("   ]");
            Console.WriteLine("   startup_timeout_sec = 20");
            Console.WriteLine("   tool_timeout_sec = 600");
            Console.WriteLine();
            Console.WriteLine("   [mcp_servers.dynamicscrm-devkit-2]");
            Console.WriteLine("   command = \"devkit\"");
            Console.WriteLine("   args = [");
            Console.WriteLine("     \"mcp\", \"--env\", \"1\", \"devkit-codex-2\"");
            Console.WriteLine("   ]");
            Console.WriteLine("   startup_timeout_sec = 20");
            Console.WriteLine("   tool_timeout_sec = 600");
            Console.WriteLine();
            Console.WriteLine("   User:   ~/.codex/config.toml (same TOML; CODEX_HOME may change the path)");
            Console.WriteLine("   System: /etc/codex/config.toml on Unix (same TOML; admin-managed).");
            Console.WriteLine("           Windows: consult Codex managed configuration documentation.");
            Console.WriteLine("   Codex only loads project configuration for trusted projects.");
            Console.WriteLine();
            WriteGuideHeading("   [VS Code Copilot workspace - .vscode/mcp.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"servers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"type\": \"stdio\",");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"devkit-copilot\"");
            Console.WriteLine("         ]");
            Console.WriteLine("       },");
            Console.WriteLine("       \"dynamicscrm-devkit-2\": {");
            Console.WriteLine("         \"type\": \"stdio\",");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-copilot-2\"");
            Console.WriteLine("         ]");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   User: open 'MCP: Open User Configuration' in VS Code (same JSON format).");
            Console.WriteLine("   System: no standard all-users config file documented; see admin policy.");
            Console.WriteLine();
            WriteGuideHeading("   [Antigravity - workspace or enabled plugin MCP config]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcpServers\": {");
            Console.WriteLine("       \"dynamicscrm-devkit\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"devkit-antigravity\"");
            Console.WriteLine("         ],");
            Console.WriteLine("         \"timeoutSeconds\": 600");
            Console.WriteLine("       },");
            Console.WriteLine("       \"dynamicscrm-devkit-2\": {");
            Console.WriteLine("         \"command\": \"devkit\",");
            Console.WriteLine("         \"args\": [");
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-antigravity-2\"");
            Console.WriteLine("         ],");
            Console.WriteLine("         \"timeoutSeconds\": 600");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   Antigravity configuration locations (choose one):");
            Console.WriteLine("     Workspace: .agents/mcp_config.json");
            Console.WriteLine("     Plugin:    .agents/plugins/<plugin>/mcp_config.json");
            Console.WriteLine("                (requires a valid, enabled plugin)");
            Console.WriteLine("     User:      ~/.gemini/config/mcp_config.json");
            Console.WriteLine("     System:    no standard all-users MCP file documented.");
            Console.WriteLine("   Antigravity supports a per-server cwd: set it to the workspace path if");
            Console.WriteLine("   needed for .env discovery. Avoid defining the same server twice.");
            Console.WriteLine();
            WriteGuideHeading("   [ZCode workspace - .zcode/config.json]");
            Console.WriteLine("   {");
            Console.WriteLine("     \"mcp\": {");
            Console.WriteLine("       \"servers\": {");
            Console.WriteLine("         \"dynamicscrm-devkit\": {");
            Console.WriteLine("           \"type\": \"stdio\",");
            Console.WriteLine("           \"command\": \"devkit\",");
            Console.WriteLine("           \"args\": [\"mcp\", \"devkit-zcode\"],");
            Console.WriteLine("           \"timeoutMs\": 600000");
            Console.WriteLine("         },");
            Console.WriteLine("         \"dynamicscrm-devkit-2\": {");
            Console.WriteLine("           \"type\": \"stdio\",");
            Console.WriteLine("           \"command\": \"devkit\",");
            Console.WriteLine("           \"args\": [\"mcp\", \"--env\", \"1\", \"devkit-zcode-2\"],");
            Console.WriteLine("           \"timeoutMs\": 600000");
            Console.WriteLine("         }");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine("   ZCode user config: ~/.zcode/cli/config.json (same mcp.servers format).");
            Console.WriteLine("   System: no standard all-users MCP file documented.");
            Console.WriteLine("   .agents/mcp.json is a fallback per scope when .zcode has no servers.");
            Console.WriteLine();
            Console.WriteLine("   The configured timeouts allow 10 minutes per tool call; they are client");
            Console.WriteLine("   settings, not a DevKit server limit. Codex startup timeout remains 20 seconds.");
            Console.WriteLine("   VS Code .vscode/mcp.json: no per-tool timeout is documented for this");
            Console.WriteLine("   format. Check the active agent's timeout; do not assume a 10-minute limit.");
            Console.WriteLine();
            Console.WriteLine("   The tool must be available to the OS user launching the MCP process.");
            Console.WriteLine("   User/system server scope does not guarantee the project working directory:");
            Console.WriteLine("   verify the client's launch cwd, or set it where the client supports cwd.");
            Console.WriteLine();
            Console.WriteLine("   Add the appropriate example to your client configuration. Keep it secret-free:");
            Console.WriteLine("   connection secrets belong in the ignored project .env, never in MCP args.");
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
            Console.WriteLine("This catalog describes one DevKit MCP instance.");
            Console.WriteLine("Use only the instance name and optional --env <id> to select .env connections.");
            Console.WriteLine("Any configuration option selects args-only mode; --env cannot be mixed with it.");
            Console.WriteLine("Args-only mode requires complete connection arguments and never reads .env,");
            Console.WriteLine("and supports one organization. Multiple organizations require .env mode.");
            Console.WriteLine("Different MCP client entries can run separate instances with the same tool names.");
            Console.WriteLine("Example: devkit mcp devkit-codex-2 --env 1");
            Console.WriteLine("Run 'devkit mcp --setup-guide' for multi-instance configuration.");
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
