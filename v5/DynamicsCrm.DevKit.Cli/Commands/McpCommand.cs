using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Spectre.Console.Cli;
using System;
using System.ComponentModel;
using System.IO;
using System.Linq;
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
                    LogError($"Invalid --env value '{settings.Env}'. Expected a positive integer group ID without leading zeros, an alias, or default (for example: 1, 2, org-b, default).");
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
            WriteGuideHeading("DevKit MCP Setup Guide");
            Console.WriteLine("One MCP server can serve multiple environments. Choose the group on each Dataverse tool call.");
            Console.WriteLine();

            WriteGuideHeading("1. Define your groups in the project .env");
            Console.WriteLine("""
                Choose the authentication method independently for each group. This sample uses
                FromPac for org-a and ClientSecret for org-b. Replace the PAC profile, Dataverse URL,
                application (client) ID and client secret with your values. Keep .env out of Git.
                For one environment, keep just the default group and configure its authentication.

                  # Group default, alias org-a
                  DEVKIT_AUTH_TYPE=FromPac
                  DEVKIT_PAC_PROFILE=PAC_PROFILE_NAME
                  DEVKIT_ALIAS=org-a

                  # Group 1, alias org-b
                  DEVKIT_1_AUTH_TYPE=ClientSecret
                  DEVKIT_1_URL=https://org-b.crm.dynamics.com
                  DEVKIT_1_CLIENT_ID=APP_ID
                  DEVKIT_1_CLIENT_SECRET=APP_SECRET
                  DEVKIT_1_ALIAS=org-b
                  DEVKIT_1_DRY_RUN=true
                """);
            Console.WriteLine();

            WriteGuideHeading("2. Add one entry to your MCP client");
            Console.WriteLine("""
                For Codex, merge this stdio server entry into .codex/config.toml. For other clients,
                see the matching example below. Launch the server from the project directory.

                  [mcp_servers.dynamicscrm-devkit]
                  command = "devkit"
                  args = ["mcp", "devkit-codex"]
                  startup_timeout_sec = 20
                  tool_timeout_sec = 600

                These args start the server in group default and make group 1 available on demand.
                """);
            Console.WriteLine();

            WriteGuideHeading("3. Reload the client and verify the groups");
            Console.WriteLine("""
                Invoke these MCP tools from your client. The middle column is the JSON argument object.

                  Tool          JSON arguments                               Expected with this .env
                  get_context   {"action":"connections"}                     default (org-a, startup), 1 (org-b, dry-run)
                  get_context   {"action":"whoami"}                          env=default, dryRun=false
                  get_context   {"action":"whoami","env":"org-b"}            env=1, dryRun=true

                Check that get_context(action='whoami') returns the intended organization for each group.
                With just one group configured, skip the org-b check.

                Pass env on any Dataverse tool call to select a group. "org-b" and "1" select
                the same group on this server. Omit env to use the startup group.
                """);
            Console.WriteLine();

            WriteGuideHeading("Change the startup group");
            Console.WriteLine("""
                To make calls without env use org-b, change args in the same server entry and reload.

                  args = ["mcp", "devkit-codex", "--env", "org-b"]

                After the change, get_context(action='whoami') returns env=1. Use {"action":"whoami","env":"default"}
                to call the unnumbered DEVKIT_* group when it is configured. --env accepts an ID, alias or default.
                """);
            Console.WriteLine();

            WriteGuideHeading("Other MCP clients");
            Console.WriteLine("""
                Use one of these entries in step 2. Merge it into the client config. Keep credentials in .env.

                Claude Code (.mcp.json)
                {"mcpServers":{"dynamicscrm-devkit":{"command":"devkit","args":["mcp","devkit-claude"],"timeout":600000}}}

                VS Code Copilot (.vscode/mcp.json)
                {"servers":{"dynamicscrm-devkit":{"type":"stdio","command":"devkit","args":["mcp","devkit-copilot"]}}}

                Antigravity (.agents/mcp_config.json or ~/.gemini/config/mcp_config.json)
                {"mcpServers":{"dynamicscrm-devkit":{"command":"devkit","args":["mcp","devkit-antigravity"],"timeoutSeconds":600}}}

                ZCode (.zcode/config.json or ~/.zcode/cli/config.json)
                {"mcp":{"servers":{"dynamicscrm-devkit":{"type":"stdio","command":"devkit","args":["mcp","devkit-zcode"],"timeoutMs":600000}}}}
                """);
            Console.WriteLine();

            WriteGuideHeading("Group rules");
            Console.WriteLine("""
                - MCP reads the nearest .env found by searching upward from the launch directory.
                  Each group uses its own connection settings and may use a different auth type.
                  A missing or incomplete startup group stops the server. Other groups connect
                  on their first tool call. get_context(action='connections') lists groups without connecting them.
                - Use positive numeric IDs without leading zeros (1, 2, 100). Aliases must be unique
                  ignoring case, start with an ASCII letter, and use only ASCII letters, digits, _ or -.
                  The alias default is reserved.
                - Dry-run blocks Dataverse mutations. MCP uses the group's DRY_RUN value if set,
                  otherwise DEVKIT_DRY_RUN, otherwise false. Aliases and DRY_RUN (true/false) are
                  validated at startup. AS_USER applies to its own group and is checked when
                  that group connects. A failed impersonation stops that group's connection.
                - Restart the server after editing .env. get_context(action='connections'), read_instruction and
                  resources have no env parameter. Use devkit mcp --tools for the tool list.

                Authentication settings per group
                Set AUTH_TYPE and the matching fields with prefix DEVKIT_ or DEVKIT_<id>_.
                - FromPac uses PAC_PROFILE when specified. Omit it to use the active profile.
                - ClientSecret uses URL, CLIENT_ID and CLIENT_SECRET.
                - Interactive and DeviceCode use URL.
                - OAuth (legacy) and AD (on-premises) use URL, USERNAME and PASSWORD.
                  AD also accepts an optional DOMAIN.
                """);
            Console.WriteLine();

            WriteGuideHeading("Args-only mode (one organization)");
            Console.WriteLine("""
                Only the instance name and optional --env select .env mode. Other configuration
                options, including --dry-run, --as-user and --plain, require a complete args-only
                connection. Use --auth with its required options or use --conn. Args-only mode
                skips .env and cannot be combined with --env.

                  devkit mcp devkit-codex --auth FromPac --pacprofile PAC_PROFILE_NAME --dry-run

                See devkit mcp --help for connection options.
                """);
            Console.WriteLine();

            WriteGuideHeading("Optional second MCP server");
            Console.WriteLine("""
                Add a second entry only if you want a separate process with a different startup group.
                Use a unique client key and instance name. For example, add this entry in Codex.

                  [mcp_servers.dynamicscrm-devkit-2]
                  command = "devkit"
                  args = ["mcp", "devkit-codex-2", "--env", "1"]
                  startup_timeout_sec = 20
                  tool_timeout_sec = 600

                Both servers still serve the configured groups. After reloading the client, call
                get_context(action='whoami') on each server to verify its startup group and process ID.
                """);
        }

        private static void PrintTools()
        {
            var tools = Mcp.McpServerHost.GetToolCatalog();

            Console.WriteLine();
            Console.WriteLine($"DevKit MCP Tools ({tools.Count})");
            Console.WriteLine("=========================================================================");

            for (var index = 0; index < tools.Count; index++)
            {
                var tool = tools[index];
                Console.WriteLine($"  {index + 1,3}. {tool.Name,-30} {tool.Title}");
            }

            Console.WriteLine();
            Console.WriteLine("=========================================================================");
            Console.WriteLine("Run 'devkit mcp --setup-guide' for setup instructions.");
        }
    }
}
