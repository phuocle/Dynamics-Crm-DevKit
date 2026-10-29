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
    /// Command for 'devkit new-item' — scaffolds one DevKit ITEM template
    /// into the required --project. Every add connects to Dataverse first
    /// (aP ruling 2026-10-29 — the VSIX wizard connects before any item
    /// dialog opens; --offline is removed from this command, the engine
    /// keeps its offline path for tests/MCP).
    /// </summary>
    public class NewItemCommand : DevKitCommand<NewItemCommandArgs>
    {
        protected override bool IsProfileRequired(NewItemCommandArgs settings)
        {
            return false;
        }

        protected override bool IsJsonRequired(NewItemCommandArgs settings)
        {
            return false;
        }

        protected override async Task<bool> IsValidAsync(NewItemCommandArgs settings)
        {
            // 'devkit new-item list' is a catalog print — no args table and
            // no connection.
            if (!string.IsNullOrWhiteSpace(settings.List)) return true;
            var argRows = new List<string[]>
            {
                new[] { "Arguments: --type", settings.Type },
                new[] { "           --name", settings.Name },
                new[] { "           --entity", settings.Entity },
                new[] { "           --project", settings.Project },
                new[] { "           --out", settings.Out },
                new[] { "           --force", settings.Force ? "true" : "false" }
            };
            SpectreLog.WriteTable(argRows);

            // Connect FIRST like the wizard: the connection dialog opens
            // before any item dialog, whatever the item template is.
            settings.ServiceClient = await ConnectAsync(settings);
            ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            var timeout = (int)ServiceClient.MaxConnectionTimeout.TotalSeconds;
            SpectreLog.WriteHighLight("Connected: ", settings.ServiceClient.ConnectedUrl(), " with connection timeout: ", $"{timeout:#,###}", " (seconds)");
            return true;
        }

        protected override async Task RunTaskAsync(NewItemCommandArgs settings)
        {
            await TaskNewItem.RunAsync(settings);
        }

        /// <summary>
        /// Same chain as the base command: modern auth (--auth/--url/... —
        /// the project .env fallback is already applied by
        /// ResolveProjectEnvironmentDefaults), else the legacy --conn string.
        /// </summary>
        private async Task<ServiceClient> ConnectAsync(NewItemCommandArgs settings)
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
            throw new DevKitConnectionException("--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.");
        }
    }
}
