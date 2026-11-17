using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    internal static class McpConnectionFactory
    {
        internal static async Task<ServiceClient> ConnectAsync(McpCommandArgs settings)
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
                LogError("Connection failed: authentication or connection validation failed.");
                serviceClient?.Dispose();
                return null;
            }

            ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            LogInfo($"Connected: {serviceClient.ConnectedOrgUriActual}");

            return serviceClient;
        }

        internal static async Task<ServiceClient> ConnectModernAsync(McpCommandArgs settings)
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
                Name = settings.AuthenticationCacheName ?? "mcp",
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
                    LogInfo($"[DeviceCode env {settings.Env ?? "default"}] {message}");
                };
            }

            return await builder.CreateServiceClientAsync(connection);
        }

        internal static void ValidateGroupRequiredFields(string authType, CrmConnection connection, string groupId)
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

        internal static string GetConnectionUserName(McpCommandArgs settings)
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


        private static void LogInfo(string message) => Console.Error.WriteLine($"[DevKit MCP] {message}");
        private static void LogError(string message) => Console.Error.WriteLine($"[DevKit MCP ERROR] {message}");

        internal static string ApplyConfiguredImpersonation(ServiceClient serviceClient, string asUser)
        {
            if (string.IsNullOrWhiteSpace(asUser)) return null;
            try
            {
                if (!RoleGateHelper.IsSystemAdministrator(serviceClient))
                    throw new McpConnectionConfigurationException("Configured AS_USER could not be applied: the connecting user is not a System Administrator.");
                var id = Commands.McpCommand.ResolveAsUser(serviceClient, asUser, out var display);
                if (!id.HasValue) throw new McpConnectionConfigurationException("Configured AS_USER could not be applied: the target user is unresolved or disabled.");
                serviceClient.CallerId = id.Value;
                return display;
                }
            catch (McpConnectionConfigurationException) { throw; }
            catch (Exception) { throw new McpConnectionConfigurationException("Configured AS_USER could not be applied: authorization or user resolution failed."); }
        }

        internal static async Task<ConnectionBundle> ConnectBundleAsync(string id, McpCommandArgs args, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            // Include project and endpoint/account identity, not merely the numeric group.
            var identity = $"{args.EnvironmentSnapshotPath}|{id}|{args.Url}|{args.ClientId}|{args.Username}|{args.PacProfile}";
            args.AuthenticationCacheName = "mcp-group-" + Convert.ToHexString(System.Security.Cryptography.SHA256.HashData(System.Text.Encoding.UTF8.GetBytes(identity)));
            ServiceClient serviceClient = null;
            try
            {
                serviceClient = await ConnectAsync(args).ConfigureAwait(false);
                if (serviceClient == null) throw new InvalidOperationException("Connection failed.");
                cancellationToken.ThrowIfCancellationRequested();
                var display = ApplyConfiguredImpersonation(serviceClient, args.AsUser);
                return new ConnectionBundle(id, serviceClient, args.DryRun, display);
            }
            catch { serviceClient?.Dispose(); throw; }
        }
    }
}
