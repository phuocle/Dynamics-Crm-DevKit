using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    /// <summary>Select one configuration source before any project-file lookup.</summary>
    internal static class McpStartupConfiguration
    {
        internal const string Description = "Start an MCP server over stdio only. Use the instance name with optional --env <id|alias|default> to load project .env and serve multiple groups from one server. Other configuration options select args-only mode for one organization, require complete connection arguments, and skip .env. Run 'devkit mcp --setup-guide' for setup instructions.";

        internal static bool HasConfigurationOptions(IEnumerable<string> arguments)
        {
            if (arguments == null) return false;
            using var tokens = arguments.GetEnumerator();
            while (tokens.MoveNext())
            {
                var token = tokens.Current ?? "";
                if (token.Equals("--env", StringComparison.OrdinalIgnoreCase)) { tokens.MoveNext(); continue; }
                if (token.StartsWith("--env=", StringComparison.OrdinalIgnoreCase)) continue;
                if (token.StartsWith("-", StringComparison.Ordinal)) return true;
            }
            return false;
        }

        internal static McpConnectionSnapshot Resolve(McpCommandArgs settings, IEnumerable<string> arguments = null, bool plainOption = false)
        {
            var argsOnly = plainOption || HasConfigurationOptions(arguments) || settings.HasExplicitConnectionArgs()
                || !string.IsNullOrEmpty(settings.Json) || !string.IsNullOrEmpty(settings.Profile) || settings.SdkLogin
                || settings.DryRun || settings.AsUser != null || settings.Transport != "stdio";
            settings.UsedEnvironmentFallback = false;
            settings.UsedEnvironmentGroupFallback = false;
            settings.EnvironmentSnapshot = null;
            settings.EnvironmentSnapshotPath = null;
            if (argsOnly)
            {
                if (settings.Env != null)
                    throw new McpConnectionConfigurationException("--env cannot be combined with configuration arguments. Use only the instance name and --env for .env mode, or remove --env and supply a complete args-only connection.");
                var authOption = !string.IsNullOrEmpty(settings.AuthType) || (arguments?.Any(a => string.Equals(a, "--auth", StringComparison.OrdinalIgnoreCase) || (a?.StartsWith("--auth=", StringComparison.OrdinalIgnoreCase) ?? false)) ?? false);
                var connectionOption = !string.IsNullOrEmpty(settings.Connection) || (arguments?.Any(a => string.Equals(a, "--conn", StringComparison.OrdinalIgnoreCase) || (a?.StartsWith("--conn=", StringComparison.OrdinalIgnoreCase) ?? false)) ?? false);
                if (connectionOption && authOption)
                    throw new McpConnectionConfigurationException("--conn cannot be combined with --auth. Choose one connection method in args-only mode.");
                if (!settings.HasCompleteExplicitConnectionArgs() || (string.IsNullOrWhiteSpace(settings.AuthType) && string.IsNullOrWhiteSpace(settings.Connection)))
                    throw new McpConnectionConfigurationException("Incomplete MCP connection arguments. Supply all required fields for --auth, or a complete --conn. Args-only mode never reads .env.");
                settings.ResolvedConnectionSource = "command-line arguments (args-only; .env is not read)";
                return new McpConnectionSnapshot(new Dictionary<string, string>());
            }

            if (settings.Env != null && !McpConnectionSnapshot.IsSelector(settings.Env))
                throw new McpConnectionConfigurationException($"Invalid --env value '{McpConnectionSnapshot.Escape(settings.Env)}'. Expected a positive integer group ID without leading zeros, an alias, or default.");
            var snapshot = McpConnectionSnapshot.Load(settings);
            if (string.IsNullOrEmpty(snapshot.FilePath) || !File.Exists(snapshot.FilePath))
                throw new McpConnectionConfigurationException(settings.Env == null
                    ? "No project .env file was found. Configure DEVKIT_AUTH_TYPE or DEVKIT_CONNECTION in .env, or supply complete connection arguments."
                    : $"Cannot resolve environment group '{settings.Env}': no project .env file was found.");
            var id = snapshot.StartupEnvId;
            var values = snapshot.CopyValues();
            if (!ProjectEnvironment.HasGroup(values, id == "default" ? null : id))
                throw new McpConnectionConfigurationException($"Environment group '{id}' was not found in the selected .env file (expected {(id == "default" ? "DEVKIT_*" : $"DEVKIT_{id}_*")} connection keys).");
            settings.Env = id == "default" ? null : id;
            settings.EnvironmentSnapshot = values;
            settings.EnvironmentSnapshotPath = snapshot.FilePath;
            settings.ResolveProjectEnvironmentDefaults(values, settings.Env);
            settings.DryRun = snapshot.DryRun(id, false);
            settings.AsUser = snapshot.Value(id, "AS_USER")?.Trim();
            settings.UsedEnvironmentFallback = true;
            settings.UsedEnvironmentGroupFallback = id != "default";
            settings.ResolvedConnectionSource = $"project .env ({(id == "default" ? "DEVKIT_*" : $"DEVKIT_{id}_*")})";
            if (!settings.HasCompleteExplicitConnectionArgs())
                throw new McpConnectionConfigurationException($"Incomplete connection configuration for environment group '{id}' in the project .env. Fill the required connection keys in that group; arguments and other groups cannot supply missing values.");
            if (!string.IsNullOrWhiteSpace(ProjectEnvironment.GetValue(values, ProjectEnvironment.NoColor)))
                SpectreLog.IsPlain = true;
            return snapshot;
        }
    }
}
