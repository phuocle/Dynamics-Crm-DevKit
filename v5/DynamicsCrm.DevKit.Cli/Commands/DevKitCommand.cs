using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Spectre.Console;
using Spectre.Console.Cli;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Base class for all DevKit CLI commands.
    /// Handles common logic: header, connection, validation, output formatting.
    /// </summary>
    public abstract class DevKitCommand<T> : AsyncCommand<T> where T : DevKitCommandArgs
    {
        protected virtual string CommandName => GetType().Name.Replace("Command", "").ToLower();
        protected virtual bool IsProfileRequired(T settings) => true;
        protected virtual bool IsJsonRequired(T settings) => true;

        public override async Task<int> ExecuteAsync(CommandContext context, T settings, CancellationToken cancellationToken)
        {
            var stopwatch = Stopwatch.StartNew();

            try
            {
                settings.ResolveEnvironmentDefaults();
                SpectreLog.WriteHeader();

                if (await IsValidAsync(settings))
                {
                    await RunTaskAsync(settings);
                    stopwatch.Stop();
                    return ExitCodes.Success;
                }

                return ExitCodes.ValidationError;
            }
            catch (DevKitValidationException ex)
            {
                return HandleException(settings, ex, ExitCodes.ValidationError, stopwatch);
            }
            catch (DevKitConnectionException ex)
            {
                return HandleException(settings, ex, ExitCodes.ConnectionError, stopwatch);
            }
            catch (DevKitConfigurationException ex)
            {
                return HandleException(settings, ex, ExitCodes.ConfigurationError, stopwatch);
            }
            catch (DevKitDeploymentException ex)
            {
                return HandleException(settings, ex, ExitCodes.RuntimeError, stopwatch);
            }
            catch (Exception ex)
            {
                return HandleException(settings, ex, ExitCodes.RuntimeError, stopwatch);
            }
        }

        private int HandleException(T settings, Exception ex, int exitCode, Stopwatch stopwatch)
        {
            stopwatch.Stop();
            SpectreLog.ActionError($"Error: {ex.Message}");
            if (ex.InnerException != null)
            {
                SpectreLog.ActionError($"Inner: {ex.InnerException.Message}");
            }

            return exitCode;
        }

        protected abstract Task RunTaskAsync(T settings);

        protected virtual List<string[]> BuildArgRows(T settings)
        {
            return new List<string[]>();
        }

        protected virtual async Task<bool> IsValidAsync(T settings)
        {
            var pathRows = new List<string[]>
            {
                new[] { "Current Directory", settings.CurrentDirectory },
                new[] { "DynamicsCrm.DevKit.Cli.exe", Assembly.GetExecutingAssembly().Location },
                new[] { "DynamicsCrm.DevKit.Cli.json", settings.JsonFile ?? "Not found" }
            };
            SpectreLog.WriteTable(pathRows);

            var argRows = new List<string[]>();
            var connLog = string.Empty;
            if (!string.IsNullOrEmpty(settings.Connection))
            {
                var legacyBuilder = new LegacyConnectionBuilder();
                var crmConn = legacyBuilder.ParseConnectionString(settings.Connection);
                if (crmConn != null)
                {
                    try
                    {
                        var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
                        connLog = builder.BuildConnectionString(crmConn, true);
                    }
                    catch {}
                }
            }

            if (!string.IsNullOrEmpty(settings.AuthType))
            {
                argRows.Add(new[] { "Arguments: --auth", settings.AuthType });
                argRows.Add(new[] { "           --url", settings.Url ?? "" });
                if (!string.IsNullOrEmpty(settings.ClientId))
                {
                    argRows.Add(new[] { "           --clientid", settings.ClientId });
                }
                if (settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
                {
                    var profileDisplay = string.IsNullOrEmpty(settings.PacProfile) ? "(active)" : settings.PacProfile;
                    argRows.Add(new[] { "           --pacprofile", profileDisplay });
                }
                else if (!string.IsNullOrEmpty(settings.PacProfile))
                {
                    argRows.Add(new[] { "           --pacprofile", settings.PacProfile });
                }
                if (!string.IsNullOrEmpty(settings.Json))
                {
                    argRows.Add(new[] { "           --json", settings.Json });
                }
                if (!string.IsNullOrEmpty(settings.Profile))
                {
                    argRows.Add(new[] { "           --profile", settings.Profile });
                }
            }
            else
            {
                argRows.Add(new[] { "Arguments: --conn", connLog });
                if (!string.IsNullOrEmpty(settings.Json))
                {
                    argRows.Add(new[] { "           --json", settings.Json });
                }
                if (!string.IsNullOrEmpty(settings.Profile))
                {
                    argRows.Add(new[] { "           --profile", settings.Profile });
                }
            }

            argRows.AddRange(BuildArgRows(settings));

            SpectreLog.WriteTable(argRows);

            if (IsProfileRequired(settings) && string.IsNullOrEmpty(settings.Profile))
            {
                SpectreLog.ActionError("--profile: required");
                return false;
            }

            if (IsJsonRequired(settings) && string.IsNullOrEmpty(settings.JsonFile))
            {
                SpectreLog.ActionError("--json: required or file not found");
                return false;
            }

            ServiceClient serviceClient = null;

            await SpectreLog.WithStatusAsync("Connecting to Dynamics 365...", async ctx =>
            {
                if (!string.IsNullOrEmpty(settings.AuthType))
                {
                    serviceClient = await ConnectWithModernAuthAsync(settings);
                }
                else
                {
                    if (string.IsNullOrEmpty(settings.Connection))
                    {
                        throw new DevKitConnectionException("--conn or --auth: required");
                    }
                    var legacyBuilder = new LegacyConnectionBuilder();
                    var crmConn = legacyBuilder.ParseConnectionString(settings.Connection);
                    if (crmConn == null) throw new DevKitConnectionException("Invalid connection string");

                    var builder = ConnectionBuilderFactory.GetBuilder(crmConn.Type);
                    serviceClient = await builder.CreateServiceClientAsync(crmConn);

                    if (serviceClient == null)
                    {
                        throw new DevKitConnectionException("Unknown connection error");
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

        protected async Task<ServiceClient> ConnectWithModernAuthAsync(T settings)
        {
            if (string.IsNullOrEmpty(settings.Url) && !settings.AuthType.Equals("FromPac", StringComparison.OrdinalIgnoreCase))
            {
                throw new DevKitConnectionException("--url: required for modern authentication (except FromPac)");
            }

            if (!ConnectionBuilderFactory.IsSupported(settings.AuthType))
            {
                var (planned, phase) = ConnectionBuilderFactory.GetFuturePlanning(settings.AuthType);
                if (planned)
                {
                    throw new DevKitConnectionException($"Authentication type '{settings.AuthType}' will be implemented in {phase}");
                }
                throw new DevKitConnectionException($"Authentication type '{settings.AuthType}' is not supported. Use: Interactive, DeviceCode");
            }

            var builder = ConnectionBuilderFactory.GetBuilder(settings.AuthType);

            var clientSecret = settings.ClientSecret;
            if (!string.IsNullOrEmpty(clientSecret))
            {
                var decrypted = Helper.DecryptString(clientSecret);
                clientSecret = decrypted;
            }

            var connection = new CrmConnection
            {
                Name = settings.Profile,
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = clientSecret,
                Type = settings.AuthType,
                PacProfile = settings.PacProfile
            };

            var (isValid, error) = await builder.ValidateAsync(connection);
            if (!isValid)
            {
                throw new DevKitConnectionException(error);
            }

            if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder)
            {
                deviceCodeBuilder.DeviceCodeCallback = message =>
                {
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

            var serviceClient = await builder.CreateServiceClientAsync(connection);

            if (serviceClient?.IsReady != true)
            {
                throw new DevKitConnectionException($"Modern authentication failed: {serviceClient?.LastError}");
            }

            return serviceClient;
        }
    }
}
