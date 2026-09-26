#nullable enable
using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Cli.Tool.Commands;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Connection establishment for <c>devkit tool call</c>. Reuses the shared
/// connection builders with the project .env fallback: the .env file is searched
/// from the current directory upward to the drive root and the search stops
/// there. OS environment variables are never consulted for connection values.
///
/// Reconciliation happens explicitly against which options were EXPLICITLY set
/// on the command line before the fallback ran:
/// <c>explicit --conn &gt; explicit modern options (--auth/--url/...) &gt; .env fallback &gt; empty</c>.
/// A .env DEVKIT_CONNECTION can therefore never override an explicitly
/// passed --url/--auth combination.
/// </summary>
public static class ToolConnection
{
    /// <summary>Connected client plus resolved impersonation display name for one call.</summary>
    public sealed class ToolConnectionResult
    {
        public required ServiceClient ServiceClient { get; init; }

        /// <summary>Display name of the impersonated user, or null when running as the connecting user.</summary>
        public string? ImpersonatedUserDisplay { get; set; }

        public Guid? ImpersonatedUserId { get; set; }
    }

    /// <summary>
    /// Connects exactly once for the whole call. Throws <see cref="ToolCliException"/>
    /// with <see cref="ToolExitCodes.ConnectionFailure"/> on any connection failure;
    /// message texts mirror what <c>devkit mcp</c> produces.
    /// </summary>
    public static async Task<ToolConnectionResult> ConnectAsync(ToolCallSettings settings, CancellationToken cancellationToken)
    {
        // Snapshot explicit command-line state BEFORE any fallback fills empty fields.
        var explicitConnection = !string.IsNullOrEmpty(settings.Connection);
        var explicitModern = !string.IsNullOrEmpty(settings.AuthType) ||
                             !string.IsNullOrEmpty(settings.Url) ||
                             !string.IsNullOrEmpty(settings.ClientId) ||
                             !string.IsNullOrEmpty(settings.ClientSecret) ||
                             !string.IsNullOrEmpty(settings.PacProfile) ||
                             !string.IsNullOrEmpty(settings.Username) ||
                             !string.IsNullOrEmpty(settings.Password) ||
                             !string.IsNullOrEmpty(settings.Domain);

        // Project .env fallback: searched from the current directory upward to
        // the drive root. OS environment variables are never consulted.
        settings.ResolveProjectEnvironmentDefaults();

        ServiceClient serviceClient;

        if (explicitConnection)
        {
            serviceClient = await ConnectLegacyAsync(settings.Connection);
        }
        else if (explicitModern)
        {
            if (string.IsNullOrEmpty(settings.AuthType))
                throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                    "--auth or --conn is required for tool call.");
            serviceClient = await ConnectModernAsync(settings, cancellationToken);
        }
        else if (!string.IsNullOrEmpty(settings.AuthType))
        {
            serviceClient = await ConnectModernAsync(settings, cancellationToken);
        }
        else if (!string.IsNullOrEmpty(settings.Connection))
        {
            serviceClient = await ConnectLegacyAsync(settings.Connection);
        }
        else
        {
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                "--auth or --conn is required for tool call. " +
                "Provide connection options on the command line or a project .env file " +
                "(searched from the current directory upward to the drive root).");
        }

        if (serviceClient?.IsReady != true)
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                $"Connection failed: {serviceClient?.LastError ?? "unknown connection error"}");

        ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);

        // Reading ConnectedOrgFriendlyName lazily triggers the client's
        // RefreshInstanceDetails, which fills ConnectedOrgVersion with the real
        // value. The MCP server warms this cache while building its startup
        // ServerInstructions; the CLI must do the same or tools observe the
        // client's 9.0.0.0 login baseline instead of the org's actual version.
        ToolOutput.Info($"Connected: {serviceClient.ConnectedOrgUriActual} " +
                        $"({serviceClient.ConnectedOrgFriendlyName} | Dataverse {serviceClient.ConnectedOrgVersion})");

        var result = new ToolConnectionResult { ServiceClient = serviceClient };
        ApplyImpersonation(settings, serviceClient, result);
        return result;
    }

    private static async Task<ServiceClient> ConnectLegacyAsync(string connection)
    {
        var legacyBuilder = new LegacyConnectionBuilder();
        var crmConn = legacyBuilder.ParseConnectionString(connection);
        if (crmConn == null)
            throw new ToolCliException(ToolExitCodes.ConnectionFailure, "Invalid connection string.");

        try
        {
            var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
            return await builder.CreateServiceClientAsync(crmConn);
        }
        catch (Exception exception) when (exception is not OperationCanceledException)
        {
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                $"Connection failed: {exception.Message}");
        }
    }

    /// <summary>Same modern-auth flow as the MCP command (validation, secret decryption, device-code prompt).</summary>
    private static async Task<ServiceClient> ConnectModernAsync(ToolCallSettings settings, CancellationToken cancellationToken)
    {
        if (string.IsNullOrEmpty(settings.Url) && !settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                "--url is required for modern authentication (except FromPac).");

        if (!ConnectionBuilderFactory.IsSupported(settings.AuthType))
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                $"Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD.");

        var builder = ConnectionBuilderFactory.GetBuilder(settings.AuthType);

        var clientSecret = settings.ClientSecret;
        if (!string.IsNullOrEmpty(clientSecret))
            clientSecret = Helper.DecryptString(clientSecret);

        var connection = new CrmConnection
        {
            Name = "tool",
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
            throw new ToolCliException(ToolExitCodes.ConnectionFailure, $"Validation failed: {error}");

        if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder)
        {
            deviceCodeBuilder.DeviceCodeCallback = message =>
            {
                // Diagnostics belong on stderr; the device-code message never contains a secret.
                ToolOutput.Info($"[DeviceCode] {message}");
            };
        }

        try
        {
            return await builder.CreateServiceClientAsync(connection);
        }
        catch (Exception exception) when (exception is not OperationCanceledException)
        {
            throw new ToolCliException(ToolExitCodes.ConnectionFailure,
                $"Connection failed: {exception.Message}");
        }
    }

    /// <summary>
    /// Same gating as the MCP server: without System Administrator (or
    /// prvActOnBehalfOfAnotherUser) the option is IGNORED with a visible stderr
    /// warning; the command never claims the identity was applied.
    /// </summary>
    private static void ApplyImpersonation(ToolCallSettings settings, ServiceClient serviceClient, ToolConnectionResult result)
    {
        if (string.IsNullOrWhiteSpace(settings.AsUser))
            return;

        if (RoleGateHelper.IsSystemAdministrator(serviceClient))
        {
            var impersonatedUserId = McpCommand.ResolveAsUser(serviceClient, settings.AsUser, out var display);
            if (impersonatedUserId.HasValue)
            {
                serviceClient.CallerId = impersonatedUserId.Value;
                result.ImpersonatedUserId = impersonatedUserId;
                result.ImpersonatedUserDisplay = display;
                ToolOutput.Info($"Impersonating: {display}");
            }
            else
            {
                ToolOutput.Warn(
                    $"--as-user '{settings.AsUser}' was ignored. Target user could not be resolved or is disabled. The tool call will run as the connecting user.");
            }
        }
        else
        {
            var roles = RoleGateHelper.GetCurrentRoleNames(serviceClient);
            var rolesList = roles.Count > 0 ? string.Join(", ", roles) : "(none)";
            ToolOutput.Warn(
                $"--as-user '{settings.AsUser}' was ignored. The connecting user is not a System Administrator (roles: {rolesList}). The tool call will run as the connecting user.");
        }
    }

    private static string GetConnectionUserName(ToolCallSettings settings)
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
}
