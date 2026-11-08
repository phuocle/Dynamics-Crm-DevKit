using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit server' - deploys plugins/workflows/dataproviders
    /// and creates data source entities (--type datasources, moved from
    /// 'devkit datasource').
    /// Syntax: devkit server --conn "..." --json "..." --profile "..."
    /// Also registered as: plugin, workflow, dataprovider
    /// </summary>
    public class ServerCommand : DevKitCommand<ServerCommandArgs>
    {
        protected override List<string[]> BuildArgRows(ServerCommandArgs settings)
        {
            var rows = new List<string[]>();
            var indent = "           ";
            var serverType = !string.IsNullOrEmpty(settings.ServerType)
                ? settings.ServerType
                : GetDefaultServerType();
            if (serverType != "servers")
            {
                rows.Add(new[] { $"{indent} --type", serverType });
            }
            if (settings.OnlyUpdateAssembly)
            {
                rows.Add(new[] { $"{indent}--only-assembly", "yes" });
            }
            return rows;
        }

        protected override async Task RunTaskAsync(ServerCommandArgs settings)
        {
            await RunServerAsync(settings);
        }

        /// <summary>
        /// Shared dispatch — also called by the deprecated 'devkit datasource'
        /// redirect shim.
        /// </summary>
        internal async Task RunServerAsync(ServerCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            // Determine server type: use arg if provided, otherwise use default for this command
            var serverType = NormalizeServerType(
                !string.IsNullOrEmpty(settings.ServerType) ? settings.ServerType : GetDefaultServerType());

            if (serverType == "datasources")
            {
                await RunDataSourceAsync(settings, json);
                return;
            }

            // Create CommandLineArgs for TaskServer compatibility
            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = serverType,
                ServiceClient = settings.ServiceClient,
                OnlyUpdateAssembly = settings.OnlyUpdateAssembly
            };

            var server = new TaskServer(args, json);
            await server.RunAsync();
        }

        private static async Task RunDataSourceAsync(ServerCommandArgs settings, Json json)
        {
            if (json.datasources == null)
            {
                SpectreLog.ActionError("'datasources' section not found in json file");
                return;
            }

            var profile = json.datasources.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "datasources",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskDataSource(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'datasources' section");
            }
        }

        /// <summary>
        /// 'datasource' (aP's shorthand) normalizes to 'datasources' — the
        /// plural family form shared by plugins/workflows/dataproviders.
        /// </summary>
        internal static string NormalizeServerType(string serverType)
        {
            var value = (serverType ?? string.Empty).Trim().ToLowerInvariant();
            return value == "datasource" ? "datasources" : value;
        }

        /// <summary>
        /// Gets the default server type for this command.
        /// Override in derived classes to set different defaults.
        /// </summary>
        protected virtual string GetDefaultServerType() => "servers";
    }

    /// <summary>
    /// Alias for ServerCommand with 'plugins' as server type
    /// </summary>
    public class PluginCommand : ServerCommand
    {
        protected override string GetDefaultServerType() => "plugins";
    }

    /// <summary>
    /// Alias for ServerCommand with 'workflows' as server type
    /// </summary>
    public class WorkflowCommand : ServerCommand
    {
        protected override string GetDefaultServerType() => "workflows";
    }

    /// <summary>
    /// Alias for ServerCommand with 'dataproviders' as server type
    /// </summary>
    public class DataProviderCommand : ServerCommand
    {
        protected override string GetDefaultServerType() => "dataproviders";
    }
}
