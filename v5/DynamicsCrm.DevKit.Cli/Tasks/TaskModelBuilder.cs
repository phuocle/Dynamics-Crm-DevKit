using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib.Status;
using Microsoft.Xrm.Sdk;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskModelBuilder(CommandLineArgs arg, JsonModelBuilder json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;
        public JsonModelBuilder Json { get; set; } = json;

        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.modelbuilders).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.@namespace == "???" || (Json.@namespace != null && Json?.@namespace?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'namespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.output == "???" || (Json.output != null && Json?.output?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'output' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }

            await Helper.DelayAsync(1);
            return true;
        }

        private string[] BuildModelBuilderArgs()
        {
            var args = new System.Collections.Generic.List<string>();

            // No logo
            args.Add("/nologo");

            // Suppress generated code attribute
            args.Add("/suppressGeneratedCodeAttribute");

            // Output file
            var outputPath = Path.Combine(CurrentDirectory, Json.output);
            args.Add($"/out:{outputPath}");

            // Namespace
            if (!string.IsNullOrEmpty(Json.@namespace))
            {
                args.Add($"/namespace:{Json.@namespace}");
            }

            // Entity filter
            if (!string.IsNullOrEmpty(Json.entities) && Json.entities != "*" && Json.entities.ToLower() != "all")
            {
                // ModelBuilder uses semicolon-separated entity names
                var entityFilter = Json.entities.ToLower().Replace(",", ";");
                args.Add($"/entitynamesfilter:{entityFilter}");
            }

            // Emit fields classes
            args.Add("/emitFieldsClasses");

            // Generate global option sets
            args.Add("/generateGlobalOptionSets");

            return args.ToArray();
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                await RunModelBuilderAsync();
            }

            SpectreLog.WriteRequestCounts();
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }

        private async Task RunModelBuilderAsync()
        {
            try
            {
                // Create logger for ModelBuilder
                var loggerFactory = LoggerFactory.Create(builder =>
                {
                    builder.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Information);
                });
                var logger = loggerFactory.CreateLogger<TaskModelBuilder>();

                // Create ModelBuilder instance
                var modelBuilder = new ModelBuilder(logger);

                // Subscribe to progress events
                modelBuilder.Parameters.Logger.OnWriteProgressItem += OnWriteProgressItem;

                // Load arguments
                var args = BuildModelBuilderArgs();
                modelBuilder.Parameters.LoadArguments(args);

                SpectreLog.ActionWithLevel0("[EXECUTE]", "ModelBuilder", "2.0.16");

                if (Json.entities == "*" || Json.entities.ToLower() == "all")
                {
                    SpectreLog.ActionWithLevel1("[FILTER]", "All entities");
                }
                else
                {
                    SpectreLog.ActionWithLevel1("[FILTER]", "Entities", Json.entities);
                }

                SpectreLog.ActionWithLevel1("[OUTPUT]", Json.output);
                SpectreLog.ActionWithLevel1("[NAMESPACE]", Json.@namespace);
                SpectreLog.WriteLine();
                SpectreLog.ActionWithLevel0($"ModelBuilder {string.Join(" ", args)}");
                SpectreLog.WriteLine();

                // Verify arguments
                if (!modelBuilder.Parameters.VerifyArguments())
                {
                    SpectreLog.ActionError("Failed to verify ModelBuilder arguments");
                    return;
                }

                // Get IOrganizationService from ServiceClient
                IOrganizationService orgService = null;
                if (modelBuilder.IsLiveConnectionRequired)
                {
                    if (ServiceClient != null)
                    {
                        orgService = ServiceClient as IOrganizationService;
                    }
                    else
                    {
                        SpectreLog.ActionError("ServiceClient is required but not available");
                        return;
                    }
                }

                // Invoke ModelBuilder
                var exitCode = modelBuilder.Invoke(orgService);

                SpectreLog.WriteLine();

                if (exitCode == 0)
                {
                    SpectreLog.ActionWithLevel0(CliAction.UPDATED, "Model classes generated successfully to", Json.output);
                }
                else
                {
                    SpectreLog.ActionError($"ModelBuilder exited with code {exitCode}");
                }

                // Unsubscribe from progress events
                modelBuilder.Parameters.Logger.OnWriteProgressItem -= OnWriteProgressItem;

                await Task.CompletedTask;
            }
            catch (Exception ex)
            {
                SpectreLog.ActionError($"Error running ModelBuilder: {ex.Message}");
                SpectreLog.WriteException(ex);
            }
        }

        private void OnWriteProgressItem(object sender, ProgressStatus e)
        {
            var message = e.StatusMessage;
            if (e.Indent)
            {
                message = "\t" + message;
            }

            switch (e.StatusType)
            {
                case ProgressType.Information:
                    SpectreLog.WriteProcessOutput(message);
                    break;
                case ProgressType.Warning:
                    SpectreLog.ActionWithLevel0("[WARNING]", message);
                    break;
                case ProgressType.Error:
                    SpectreLog.ActionError(message);
                    break;
            }
        }
    }
}
