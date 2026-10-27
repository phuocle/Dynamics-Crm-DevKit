using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit new' - scaffolds DevKit project/item templates
    /// cross-platform through the shared ScaffoldingEngine. Scaffolding a
    /// new project in an empty folder needs neither a profile nor a
    /// DynamicsCrm.DevKit.Cli.json, and most templates generate offline,
    /// so validation requires no Dataverse connection.
    /// </summary>
    public class NewCommand : DevKitCommand<NewCommandArgs>
    {
        protected override bool IsProfileRequired(NewCommandArgs settings)
        {
            return false;
        }

        protected override bool IsJsonRequired(NewCommandArgs settings)
        {
            return false;
        }

        protected override async Task<bool> IsValidAsync(NewCommandArgs settings)
        {
            var argRows = new List<string[]>
            {
                new[] { "Arguments: --kind", settings.Kind },
                new[] { "           --type", settings.Type },
                new[] { "           --name", settings.Name },
                new[] { "           --entity", settings.Entity },
                new[] { "           --out", settings.Out },
                new[] { "           --solution", settings.Solution },
                new[] { "           --offline", settings.Offline ? "true" : "false" },
                new[] { "           --force", settings.Force ? "true" : "false" }
            };
            SpectreLog.WriteTable(argRows);

            // Item templates marked RequiresConnection (LateBound) generate
            // from live entity metadata — connect here like the base command
            // does, while the project templates and 'new list' stay fully
            // offline.
            if (ItemConnectionRequired(settings))
            {
                settings.ServiceClient = await ConnectAsync(settings);
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                var timeout = (int)ServiceClient.MaxConnectionTimeout.TotalSeconds;
                SpectreLog.WriteHighLight("Connected: ", settings.ServiceClient.ConnectedUrl(), " with connection timeout: ", $"{timeout:#,###}", " (seconds)");
            }
            return true;
        }

        protected override async Task RunTaskAsync(NewCommandArgs settings)
        {
            await TaskNew.RunAsync(settings);
        }

        private static bool ItemConnectionRequired(NewCommandArgs settings)
        {
            var kind = (settings.Kind ?? string.Empty).Trim();
            if (!kind.Equals("item", StringComparison.OrdinalIgnoreCase)) return false;
            if (string.IsNullOrWhiteSpace(settings.Type) || settings.Offline) return false;
            var descriptor = TemplateCatalog.Find(settings.Type, TemplateKind.Item);
            return descriptor?.RequiresConnection == true;
        }

        /// <summary>
        /// Same chain as the base command: modern auth (--auth/--url/... —
        /// the project .env fallback is already applied by
        /// ResolveProjectEnvironmentDefaults), else the legacy --conn string.
        /// </summary>
        private async Task<ServiceClient> ConnectAsync(NewCommandArgs settings)
        {
            if (!string.IsNullOrWhiteSpace(settings.AuthType))
            {
                return await ConnectWithModernAuthAsync(settings);
            }
            if (!string.IsNullOrWhiteSpace(settings.Connection))
            {
                var legacyBuilder = new LegacyConnectionBuilder();
                var crmConn = legacyBuilder.ParseConnectionString(settings.Connection);
                if (crmConn == null) throw new DevKitConnectionException("Invalid connection string");
                var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
                return await builder.CreateServiceClientAsync(crmConn);
            }
            throw new DevKitConnectionException($"--conn or --auth: required (or a project .env). The '{settings.Type}' item template reads entity metadata from Dataverse.");
        }
    }
}
