using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
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
            var argColumnWidth = 28; // Default for --auth and --sdk-login (increased for --pacprofile)

            // Phase 2: Display --auth args if using modern auth
            if (!string.IsNullOrEmpty(settings.AuthType))
            {
                argRows.Add(new[] { $"{label}[white] --auth[/]", $"[cyan]{Markup.Escape(settings.AuthType)}[/]" });
                argRows.Add(new[] { $"{indent}[white] --url[/]", $"[cyan]{Markup.Escape(settings.Url ?? "")}[/]" });
                if (!string.IsNullOrEmpty(settings.ClientId))
                {
                    argRows.Add(new[] { $"{indent}[white] --clientid[/]", $"[cyan]{Markup.Escape(settings.ClientId)}[/]" });
                }
                // Show --pacprofile for FromPac auth (show "(active)" when no profile specified)
                if (settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
                {
                    var profileDisplay = string.IsNullOrEmpty(settings.PacProfile) ? "(active)" : settings.PacProfile;
                    argRows.Add(new[] { $"{indent}[white] --pacprofile[/]", $"[cyan]{Markup.Escape(profileDisplay)}[/]" });
                }
                else if (!string.IsNullOrEmpty(settings.PacProfile))
                {
                    argRows.Add(new[] { $"{indent}[white] --pacprofile[/]", $"[cyan]{Markup.Escape(settings.PacProfile)}[/]" });
                }
                argRows.Add(new[] { $"{indent}[white] --json[/]", $"[cyan]{Markup.Escape(settings.Json)}[/]" });
                argRows.Add(new[] { $"{indent}[white] --profile[/]", $"[cyan]{Markup.Escape(settings.Profile)}[/]" });
            }
            else if (settings.IsSdkLogin)
            {
                argRows.Add(new[] { $"{label}[white] --sdk-login[/]", "[cyan]yes[/]" });
                argRows.Add(new[] { $"{indent}[white] --url[/]", $"[cyan]{Markup.Escape(settings.Url ?? "")}[/]" });
                argRows.Add(new[] { $"{indent}[white] --json[/]", $"[cyan]{Markup.Escape(settings.Json)}[/]" });
                argRows.Add(new[] { $"{indent}[white] --profile[/]", $"[cyan]{Markup.Escape(settings.Profile)}[/]" });
            }
            else
            {
                // --conn mode needs wider column for long connection string
                argColumnWidth = 55;
                argRows.Add(new[] { $"{label}[white] --conn[/]", $"[cyan]{Markup.Escape(connLog)}[/]" });
                argRows.Add(new[] { $"{indent}[white] --json[/]", $"[cyan]{Markup.Escape(settings.Json)}[/]" });
                argRows.Add(new[] { $"{indent}[white] --profile[/]", $"[cyan]{Markup.Escape(settings.Profile)}[/]" });
            }

            // Add command-specific args
            argRows.AddRange(BuildArgRows(settings));

            SpectreLog.WriteTable(argRows, argColumnWidth);

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
                // Phase 2: Modern Interactive Auth via --auth argument
                if (!string.IsNullOrEmpty(settings.AuthType))
                {
                    serviceClient = await ConnectWithModernAuthAsync(settings);
                }
                // Legacy: SDK Login dialog
                else if (settings.IsSdkLogin)
                {
                    serviceClient = await ConnectWithSdkLoginAsync(settings.Url);
                }
                // Legacy: Connection string
                else
                {
                    if (string.IsNullOrEmpty(settings.Connection))
                    {
                        throw new Exception("--conn or --auth: required");
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

            // ═══════════════════════════════════════════════════════════════════
            // DEV-ONLY: Early exit after connection check for connection type development
            // Set to true when testing connection types, false for normal operation
            // TODO: Remove this block before release
            // ═══════════════════════════════════════════════════════════════════
            // const bool DEV_CONNECTION_TEST_ONLY = true;
            // if (DEV_CONNECTION_TEST_ONLY)
            // {
            //     SpectreLog.WriteLine("[DEV] Connection test successful - exiting early for connection type development");
            //     SpectreLog.WriteLine("END");
            //     SpectreLog.WriteLine();
            //     AnsiConsole.MarkupLine("[grey]Press any key to exit...[/]");
            //     Console.ReadKey(true);
            //     Environment.Exit(0);
            // }
            // ═══════════════════════════════════════════════════════════════════

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

        /// <summary>
        /// Connect using modern authentication (Interactive, DeviceCode).
        /// Phase 2: Uses ConnectionBuilderFactory to get the appropriate builder.
        /// </summary>
        protected async Task<ServiceClient> ConnectWithModernAuthAsync(T settings)
        {
            // FromPac gets URL from PAC profile, other auth types require --url
            if (string.IsNullOrEmpty(settings.Url) && !settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
            {
                throw new Exception("--url: required for modern authentication (except FromPac)");
            }

            if (!ConnectionBuilderFactory.IsSupported(settings.AuthType))
            {
                var (planned, phase) = ConnectionBuilderFactory.GetFuturePlanning(settings.AuthType);
                if (planned)
                {
                    throw new NotImplementedException($"Authentication type '{settings.AuthType}' will be implemented in {phase}");
                }
                throw new NotSupportedException($"Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode");
            }

            var builder = ConnectionBuilderFactory.GetBuilder(settings.AuthType);

            // Handle ClientSecret - auto-detect encrypted vs plain text (legacy behavior)
            // If DecryptString returns different value, it was encrypted; otherwise it's plain text
            var clientSecret = settings.ClientSecret;
            if (!string.IsNullOrEmpty(clientSecret))
            {
                var decrypted = Helper.DecryptString(clientSecret);
                clientSecret = decrypted; // DecryptString returns plain if already plain, or decrypted if was encrypted
            }

            // Build CrmConnection from settings
            var connection = new CrmConnection
            {
                Name = settings.Profile, // Use profile as connection name for token cache
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = clientSecret,
                Type = settings.AuthType,
                // Phase 4: FromPac
                PacProfile = settings.PacProfile
            };

            // Validate connection before attempting to connect
            var (isValid, error) = await builder.ValidateAsync(connection);
            if (!isValid)
            {
                throw new Exception(error);
            }

            // For DeviceCode, set up the callback to use AnsiConsole
            if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder)
            {
                deviceCodeBuilder.DeviceCodeCallback = message =>
                {
                    // Use AnsiConsole directly for proper color rendering
                    AnsiConsole.WriteLine();
                    AnsiConsole.MarkupLine("[yellow]═══════════════════════════════════════════════════════════════[/]");
                    AnsiConsole.MarkupLine("[yellow] Device Code Authentication[/]");
                    AnsiConsole.WriteLine();
                    AnsiConsole.MarkupLine($"[green] {Markup.Escape(message)}[/]");
                    AnsiConsole.WriteLine();
                    AnsiConsole.MarkupLine("[yellow] Waiting for authentication...[/]");
                    AnsiConsole.MarkupLine("[yellow]═══════════════════════════════════════════════════════════════[/]");
                };
            }

            // Create ServiceClient
            var serviceClient = await builder.CreateServiceClientAsync(connection);

            if (serviceClient?.IsReady != true)
            {
                throw new Exception($"Modern authentication failed: {serviceClient?.LastError}");
            }

            return serviceClient;
        }
    }
}
