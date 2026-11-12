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
    [Description("Start MCP server for AI agent integration. Without --env, preserve the original DEVKIT_* per-property merge, including optional fields, auth/conn merging and credential alias priority. With --env <id>, complete explicit connection args skip .env; missing values use only DEVKIT_<id>_* (a missing selected group is an error when fallback is needed). [[name]] sets the MCP instance display name, --env <id> selects the .env fallback group, and --profile is for DynamicsCrm.DevKit.Cli.json commands. Run 'devkit mcp --setup-guide' for multi-instance configuration.")]
    public class McpCommand : AsyncCommand<McpCommandArgs>
    {
        private static TextWriter Stderr => Console.Error;

        public Task<int> ExecuteAsyncForTesting(CommandContext context, McpCommandArgs settings, CancellationToken cancellationToken)
            => ExecuteAsync(context, settings, cancellationToken);

        public override async Task<int> ExecuteAsync(CommandContext context, McpCommandArgs settings, CancellationToken cancellationToken)
        {
            try
            {
                if (settings.Env != null && !ProjectEnvironment.IsValidGroupId(settings.Env))
                {
                    LogError($"Invalid --env value '{settings.Env}'. Expected a positive integer group ID without leading zeros (for example: 1, 2, 10, 100).");
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

                if (!ResolveConnectionSettings(settings))
                    return 2;

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
            catch (Exception ex)
            {
                LogError(ex.Message);
                if (ex.InnerException != null)
                    LogError($"Inner: {ex.InnerException.Message}");
                return 1;
            }
        }

        private static bool ResolveConnectionSettings(McpCommandArgs settings)
        {
            var hadExplicitArgs = settings.HasExplicitConnectionArgs();

            // Preserve the pre-selector resolver for every call without --env,
            // including optional fields and the original auth/connection merge.
            if (settings.Env == null)
            {
                var defaultValues = ProjectEnvironment.Read(ProjectEnvironment.ResolveFileFromJsonOrDirectory(settings.JsonFile, settings.CurrentDirectory));
                var hadDefaultEnvValues = ProjectEnvironment.HasGroup(defaultValues, null);
                settings.ResolveProjectEnvironmentDefaults(defaultValues);
                settings.UsedEnvironmentFallback = hadDefaultEnvValues;
                settings.UsedEnvironmentGroupFallback = false;
                settings.ResolvedConnectionSource = hadExplicitArgs && hadDefaultEnvValues
                    ? "command-line arguments + project .env (DEVKIT_*)"
                    : hadDefaultEnvValues
                        ? "project .env (DEVKIT_*)"
                        : "command-line arguments";
                return true;
            }

            if (settings.HasCompleteExplicitConnectionArgs())
            {
                settings.UsedEnvironmentFallback = false;
                settings.UsedEnvironmentGroupFallback = false;
                settings.ResolvedConnectionSource = $"command-line arguments (fallback group {settings.Env} (DEVKIT_{settings.Env}_*) was not used)";
                return true;
            }

            // Use the resolved --json directory (when provided) or the process working directory
            // to find the nearest project .env upward to the drive root.
            var envFile = ProjectEnvironment.ResolveFileFromJsonOrDirectory(settings.JsonFile, settings.CurrentDirectory);

            if (string.IsNullOrEmpty(envFile) || !File.Exists(envFile))
            {
                LogError($"Cannot resolve environment group '{settings.Env}': no project .env file was found.");
                return false;
            }

            var envValues = ProjectEnvironment.Read(envFile);
            if (!ProjectEnvironment.HasGroup(envValues, settings.Env))
            {
                LogError($"Environment group '{settings.Env}' was not found in the selected .env file (expected DEVKIT_{settings.Env}_* connection keys).");
                return false;
            }

            settings.ResolveProjectEnvironmentDefaults(envValues, settings.Env);
            settings.UsedEnvironmentFallback = true;
            settings.UsedEnvironmentGroupFallback = true;
            settings.ResolvedConnectionSource = hadExplicitArgs
                ? $"command-line arguments + project .env (DEVKIT_{settings.Env}_*)"
                : $"project .env (DEVKIT_{settings.Env}_*)";
            return true;
        }

        private async Task<ServiceClient> ConnectAsync(McpCommandArgs settings)
        {
            var groupId = settings.UsedEnvironmentGroupFallback && !string.IsNullOrEmpty(settings.Env)
                ? settings.Env
                : null;

            if (string.IsNullOrEmpty(settings.AuthType) && string.IsNullOrEmpty(settings.Connection))
            {
                if (groupId != null)
                {
                    LogError($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.AuthType, groupId)} (or --auth) or {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Connection, groupId)} (or --conn) is required for MCP server.");
                }
                else
                {
                    LogError("--auth or --conn is required for MCP server. Provide connection arguments or set DEVKIT_* values in a project .env file.");
                }
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
                    LogError(groupId != null
                        ? $"Environment group '{groupId}' ({ProjectEnvironment.GetGroupKey(ProjectEnvironment.Connection, groupId)}): Invalid connection string."
                        : "Invalid connection string.");
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
            var groupId = settings.UsedEnvironmentGroupFallback && !string.IsNullOrEmpty(settings.Env)
                ? settings.Env
                : null;

            if (string.IsNullOrEmpty(settings.Url) && !settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
            {
                if (groupId != null)
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Url, groupId)} or --url is required for {settings.AuthType} authentication.");
                throw new Exception("--url is required for modern authentication (except FromPac).");
            }

            if (!ConnectionBuilderFactory.IsSupported(settings.AuthType))
            {
                if (groupId != null)
                    throw new Exception($"Environment group '{groupId}': Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD.");
                throw new Exception($"Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD.");
            }

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

            if (groupId != null)
            {
                ValidateGroupRequiredFields(settings.AuthType, connection, groupId);
            }

            var (isValid, error) = await builder.ValidateAsync(connection);
            if (!isValid)
            {
                if (groupId != null)
                    throw new Exception($"Environment group '{groupId}' (DEVKIT_{groupId}_*): Validation failed: {error}");
                throw new Exception($"Validation failed: {error}");
            }

            if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder)
            {
                deviceCodeBuilder.DeviceCodeCallback = message =>
                {
                    LogInfo($"[DeviceCode] {message}");
                };
            }

            return await builder.CreateServiceClientAsync(connection);
        }

        private static void ValidateGroupRequiredFields(string authType, CrmConnection connection, string groupId)
        {
            if (authType.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase))
            {
                if (string.IsNullOrEmpty(connection.ClientId) && string.IsNullOrEmpty(connection.UserName))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.ClientId, groupId)} or --clientid is required for ClientSecret authentication.");
                if (string.IsNullOrEmpty(connection.ClientSecret) && string.IsNullOrEmpty(connection.Password))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.ClientSecret, groupId)} or --clientsecret is required for ClientSecret authentication.");
            }
            else if (authType.Equals("OAuth", StringComparison.OrdinalIgnoreCase))
            {
                if (string.IsNullOrEmpty(connection.UserName))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Username, groupId)} or --username is required for OAuth authentication.");
                if (string.IsNullOrEmpty(connection.Password))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Password, groupId)} or --password is required for OAuth authentication.");
            }
            else if (authType.Equals("AD", StringComparison.OrdinalIgnoreCase))
            {
                if (string.IsNullOrEmpty(connection.UserName))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Username, groupId)} or --username is required for AD authentication.");
                if (string.IsNullOrEmpty(connection.Password))
                    throw new Exception($"Environment group '{groupId}': {ProjectEnvironment.GetGroupKey(ProjectEnvironment.Password, groupId)} or --password is required for AD authentication.");
            }
        }

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
            Console.WriteLine("   Without --env: preserve the original DEVKIT_* per-property merge, even");
            Console.WriteLine("   with complete args. Empty optional fields are still filled from .env.");
            Console.WriteLine("   Both --auth and --conn may be filled; a non-empty auth selects its builder.");
            Console.WriteLine("   ClientSecret prefers ClientId/ClientSecret over username/password aliases.");
            Console.WriteLine("   With --env <id>: explicit connection args take priority. Complete args");
            Console.WriteLine("   skip .env; otherwise only DEVKIT_<id>_* fills missing connection values.");
            Console.WriteLine("   Neither mode requires .env when args suffice to connect without it.");
            Console.WriteLine("   When reading project defaults, MCP uses the");
            Console.WriteLine("   first .env found by searching from the resolved --json directory (if set)");
            Console.WriteLine("   or from the process working directory upward to the drive root.");
            Console.WriteLine("   Only the nearest .env file is used (never merged with parent .env files).");
            Console.WriteLine("   OS environment variables are not read for connection values.");
            Console.WriteLine("   Configure the MCP client to launch devkit with the project/workspace as");
            Console.WriteLine("   its working directory. Global installation does not change this directory.");
            Console.WriteLine("   Keep .env local and ignored by Git; commit the MCP config without secrets.");
            Console.WriteLine();
            Console.WriteLine("   Fallback key groups in project .env:");
            Console.WriteLine("   - Default group (no --env): DEVKIT_<FIELD> (for example DEVKIT_URL)");
            Console.WriteLine("   - Numbered group (--env <id>): DEVKIT_<id>_<FIELD> (for example DEVKIT_1_URL)");
            Console.WriteLine("   - Groups do not need to be consecutive (1, 2, 100); there is no fixed group");
            Console.WriteLine("     limit and no group list declaration is needed.");
            Console.WriteLine("   - Groups are never mixed: when fallback is needed, --env 1 reads only");
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
            Console.WriteLine("   --env <id>           : Project .env fallback group (selects DEVKIT_<id>_*; default: DEVKIT_*)");
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
            Console.WriteLine("     devkit mcp --env 1 devkit-claude-2 --dry-run (reads DEVKIT_1_* from project .env)");
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
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-claude-2\", \"--dry-run\"");
            Console.WriteLine("         ],");
            Console.WriteLine("         \"timeout\": 600000");
            Console.WriteLine("       }");
            Console.WriteLine("     }");
            Console.WriteLine("   }");
            Console.WriteLine();
            Console.WriteLine("   User: ~/.claude.json (managed by Claude Code). In PowerShell or a Unix shell:");
            Console.WriteLine("   claude mcp add-json --scope user dynamicscrm-devkit '{\"command\":\"devkit\",\"args\":[\"mcp\",\"devkit-claude\"],\"timeout\":600000}'");
            Console.WriteLine("   claude mcp add-json --scope user dynamicscrm-devkit-2 '{\"command\":\"devkit\",\"args\":[\"mcp\",\"--env\",\"1\",\"devkit-claude-2\",\"--dry-run\"],\"timeout\":600000}'");
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
            Console.WriteLine("     \"mcp\", \"--env\", \"1\", \"devkit-codex-2\", \"--dry-run\"");
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
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-copilot-2\", \"--dry-run\"");
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
            Console.WriteLine("           \"mcp\", \"--env\", \"1\", \"devkit-antigravity-2\", \"--dry-run\"");
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
            Console.WriteLine("           \"args\": [\"mcp\", \"--env\", \"1\", \"devkit-zcode-2\", \"--dry-run\"],");
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
            Console.WriteLine("Use --env <id> to select DEVKIT_<id>_* fallback connection keys.");
            Console.WriteLine("Explicit connection args still take priority.");
            Console.WriteLine("Without --env, the original DEVKIT_* per-property merge is preserved,");
            Console.WriteLine("including optional fields, auth/conn merging, and credential alias priority.");
            Console.WriteLine("Different MCP client entries can run separate instances with the same tool names.");
            Console.WriteLine("Example: devkit mcp --env 1 devkit-codex-2 --dry-run");
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
