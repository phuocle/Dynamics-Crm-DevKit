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
        /// The connected connection rides with the settings either way — the
        /// BatFile bats embed the CLI connection arguments. A .env-only
        /// connection (every connection argument arrived empty and the
        /// project .env filled them) behaves like the wizard's
        /// UseProjectEnvironment connections from DynamicsCrm.DevKit.json:
        /// CliArgsBuilder emits no arguments and the bat picks the project
        /// .env up at runtime. Built HERE so the shared connect flow in
        /// DevKitCommand stays untouched.
        /// </summary>
        private async Task<ServiceClient> ConnectAsync(NewItemCommandArgs settings)
        {
            if (!string.IsNullOrWhiteSpace(settings.AuthType))
            {
                var serviceClient = await ConnectWithModernAuthAsync(settings);
                settings.CrmConnection = new CrmConnection
                {
                    Name = settings.Profile,
                    Url = settings.Url,
                    UserName = GetConnectionUserName(settings),
                    Password = settings.Password,
                    ClientId = settings.ClientId,
                    ClientSecret = settings.ClientSecret,
                    Type = settings.AuthType,
                    PacProfile = settings.PacProfile,
                    UseProjectEnvironment = settings.ConnectionFromProjectEnvironment,
                };
                return serviceClient;
            }
            if (!string.IsNullOrWhiteSpace(settings.Connection))
            {
                var legacyBuilder = new LegacyConnectionBuilder();
                var crmConn = legacyBuilder.ParseConnectionString(settings.Connection);
                if (crmConn == null) throw new DevKitConnectionException("Invalid connection string");
                settings.CrmConnection = crmConn;
                var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
                return await builder.CreateServiceClientAsync(crmConn);
            }
            throw new DevKitConnectionException("--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.");
        }

        /// <summary>
        /// The connection user name — AD joins the domain (the same rule
        /// DevKitCommand applies to the connection it validates with; kept
        /// here so the shared connect flow stays untouched).
        /// </summary>
        private static string GetConnectionUserName(NewItemCommandArgs settings)
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
}
