using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Spectre.Console;
using Spectre.Console.Cli;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Base class for all DevKit CLI commands.
    /// Handles common logic: header, connection, validation.
    /// </summary>
    public abstract class DevKitCommand<T> : AsyncCommand<T> where T : DevKitCommandArgs
    {
        public override async Task<int> ExecuteAsync(CommandContext context, T settings, CancellationToken cancellationToken)
        {
            try
            {
                SpectreLog.WriteHeader();

                if (await IsValidAsync(settings))
                {
                    await RunTaskAsync(settings);
                    return 0;
                }

                return 1;
            }
            catch (Exception ex)
            {
                SpectreLog.ActionError($"Error: {ex.Message}");
                if (ex.InnerException != null)
                {
                    SpectreLog.ActionError($"Inner: {ex.InnerException.Message}");
                }
                return 1;
            }
        }

        /// <summary>
        /// Override this method to run the specific task logic.
        /// </summary>
        protected abstract Task RunTaskAsync(T settings);

        /// <summary>
        /// Override this method to add command-specific argument rows to the display table.
        /// </summary>
        protected virtual List<string[]> BuildArgRows(T settings)
        {
            return new List<string[]>();
        }

        /// <summary>
        /// Validates common settings and connects to Dynamics 365.
        /// </summary>
        protected virtual async Task<bool> IsValidAsync(T settings)
        {
            // Display paths
            var pathRows = new List<string[]>
            {
                new[] { $"[green] Current Directory[/]", $"[cyan]{Markup.Escape(settings.CurrentDirectory)}[/]" },
                new[] { $"[green] DynamicsCrm.DevKit.Cli.exe[/]", $"[cyan]{Markup.Escape(Assembly.GetExecutingAssembly().Location)}[/]" },
                new[] { $"[green] DynamicsCrm.DevKit.Cli.json[/]", $"[cyan]{Markup.Escape(settings.JsonFile ?? "Not found")}[/]" }
            };
            SpectreLog.WriteTable(pathRows);

            // Display arguments (common + command-specific)
            var argRows = new List<string[]>();
            var connLog = Helper.BuildConnectionStringLog(settings.Connection);
            var label = "[green] Arguments:[/]";
            var indent = "           ";
            if (settings.IsSdkLogin)
            {
                argRows.Add(new[] { $"{label}[white] --sdk-login[/]", "[cyan]yes[/]" });
                argRows.Add(new[] { $"{indent}[white] --url[/]", $"[cyan]{Markup.Escape(settings.Url ?? "")}[/]" });
            }
            else
            {
                argRows.Add(new[] { $"{label}[white] --conn[/]", $"[cyan]{Markup.Escape(connLog)}[/]" });
            }
            argRows.Add(new[] { $"{indent}[white] --json[/]", $"[cyan]{Markup.Escape(settings.Json)}[/]" });
            argRows.Add(new[] { $"{indent}[white] --profile[/]", $"[cyan]{Markup.Escape(settings.Profile)}[/]" });

            // Add command-specific args
            argRows.AddRange(BuildArgRows(settings));

            SpectreLog.WriteTable(argRows);

            // Validate required args
            if (string.IsNullOrEmpty(settings.Profile))
            {
                SpectreLog.ActionError("--profile: required");
                return false;
            }

            if (string.IsNullOrEmpty(settings.JsonFile))
            {
                SpectreLog.ActionError("--json: required or file not found");
                return false;
            }

            // Connect to Dynamics 365
            ServiceClient serviceClient = null;

            await SpectreLog.WithStatusAsync("Connecting to Dynamics 365...", async ctx =>
            {
                if (settings.IsSdkLogin)
                {
                    serviceClient = await ConnectWithSdkLoginAsync(settings.Url);
                }
                else
                {
                    if (string.IsNullOrEmpty(settings.Connection))
                    {
                        throw new Exception("--conn: required");
                    }
                    var crmConn = Helper.ParseConnectionString(settings.Connection);
                    var decryptedConnString = Helper.BuildConnectionString(crmConn);
                    var result = await Helper.IsConnectedAsync(decryptedConnString);
                    serviceClient = result.serviceClient;
                    if (serviceClient == null)
                    {
                        throw new Exception(result.error ?? "Unknown connection error");
                    }
                }
            });

            if (serviceClient == null)
            {
                SpectreLog.ActionError("Connection failed");
                return false;
            }

            ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            settings.ServiceClient = serviceClient;

            var timeout = (int)ServiceClient.MaxConnectionTimeout.TotalSeconds;
            SpectreLog.WriteLine();
            SpectreLog.WriteHighLight("Connected: ", serviceClient.ConnectedUrl(), " with connection timeout: ", $"{timeout:#,###}", " (seconds)");
            SpectreLog.WriteLine();
            return true;
        }

        /// <summary>
        /// Connect using SDK OAuth dialog.
        /// </summary>
        protected async Task<ServiceClient> ConnectWithSdkLoginAsync(string url)
        {
            if (string.IsNullOrEmpty(url))
            {
                throw new Exception("--url: required for SDK login");
            }

            var serviceClient = new ServiceClient(
                userId: null,
                password: null,
                hostUri: new Uri(url),
                useUniqueInstance: true,
                clientId: "51f81489-12ee-4a9e-aaae-a2591f45987d",
                redirectUri: new Uri("app://58145B91-0C36-4500-8554-080854F2AC97"),
                promptBehavior: Microsoft.PowerPlatform.Dataverse.Client.Auth.PromptBehavior.Always,
                useDefaultCreds: false,
                tokenCacheStorePath: null,
                logger: null
            );

            await Task.Delay(100);

            if (serviceClient?.IsReady == true)
            {
                return serviceClient;
            }

            var timeout = TimeSpan.FromSeconds(30);
            var start = DateTime.Now;
            while (serviceClient != null && !serviceClient.IsReady && DateTime.Now - start < timeout)
            {
                await Task.Delay(500);
            }

            if (serviceClient?.IsReady == true)
            {
                return serviceClient;
            }

            throw new Exception($"OAuth authentication failed: {serviceClient?.LastError}");
        }
    }
}
