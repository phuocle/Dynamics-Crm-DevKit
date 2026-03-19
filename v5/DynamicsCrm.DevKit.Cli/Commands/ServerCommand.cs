using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit server' - deploys plugins/workflows/dataproviders.
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
                rows.Add(new[] { $"{indent} --only-assembly", "yes" });
            }
            return rows;
        }

        protected override async Task RunTaskAsync(ServerCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            // Determine server type: use arg if provided, otherwise use default for this command
            var serverType = !string.IsNullOrEmpty(settings.ServerType)
                ? settings.ServerType
                : GetDefaultServerType();

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
