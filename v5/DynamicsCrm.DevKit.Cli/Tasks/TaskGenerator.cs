using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Spectre.Console;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskGenerator(CommandLineArgs arg, JsonGenerator json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;

        private JsonGenerator Json { get; set; } = json;

        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;

        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;

        public string TaskType { get; set; } = $"[{nameof(CliType.generators).ToUpper()} - {json.type.ToUpper()}]";

        private string CurrentFolder => $"{CurrentDirectory}\\{Json.rootfolder}";

        private static bool IsAll { get; set; } = false;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.rootfolder == "???")
            {
                SpectreLog.ActionError($"'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type == "???" || (Json.type != null && Json?.type?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (
                Json.type.ToLower() != nameof(GeneratorType.jsform) &&
                Json.type.ToLower() != nameof(GeneratorType.tsform) &&
                Json.type.ToLower() != nameof(GeneratorType.jswebapi) &&
                Json.type.ToLower() != nameof(GeneratorType.tswebapi) &&
                Json.type.ToLower() != nameof(GeneratorType.csharp)
                )
            {
                SpectreLog.ActionError($"'type' should be: 'JsForm' or 'TsForm' or 'JsWebApi' or 'CSharp' or 'EarlyBound'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            // Skip rootnamespace validation for TsForm and TsWebApi since they no longer use rootnamespace
            if (Json.type.ToLower() != nameof(GeneratorType.tsform) && Json.type.ToLower() != nameof(GeneratorType.tswebapi))
            {
                if (Json.rootnamespace == "???" || (Json.rootnamespace != null && Json?.rootnamespace?.Trim().Length == 0))
                {
                    SpectreLog.ActionError($"'rootnamespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                    return false;
                }
            }
            return true;
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                var schemaNames = await GetSchemaNamesAsync();
                if (schemaNames.Count > 500)
                    await ReadEntitiesMetadataAsync(ServiceClient, EntityFilters.Attributes);
                else
                    XrmHelper.EntitiesMetadata = await XrmHelper.GetEntitiesMetadataAsync(ServiceClient, schemaNames);
                schemaNames = [.. XrmHelper.EntitiesMetadata.Select(x => x.SchemaName)];
                if (Json.type.ToLower() == nameof(GeneratorType.csharp))
                    await GeneratorLateBoundAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jsform))
                    await GeneratorJsFormAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.tsform))
                    await GeneratorTsFormAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jswebapi))
                    await GeneratorWebApiAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.tswebapi))
                    await GeneratorTsWebApiAsync(schemaNames);
            }

            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }

        private async Task<List<string>> GetSchemaNamesAsync()
        {
            var endsWith = string.Empty;
            if (Json.type.ToLower() == nameof(GeneratorType.csharp))
                endsWith = ".generated.cs";
            else if (Json.type.ToLower() == nameof(GeneratorType.jsform))
                endsWith = ".form.js";
            else if (Json.type.ToLower() == nameof(GeneratorType.tsform))
                endsWith = ".form.ts";
            else if (Json.type.ToLower() == nameof(GeneratorType.jswebapi))
                endsWith = ".webapi.js";
            if (Json.entities != null && (Json.entities.Trim().ToLower() == "*" || Json.entities.Trim().ToLower() == "all"))
            {
                SpectreLog.WriteHighLight("Filter by: ", "json.entities", " with values: ", Json.entities.Trim(), ".");
                SpectreLog.WriteLine();
                await ReadEntitiesMetadataAsync(ServiceClient, EntityFilters.Attributes);
                return [.. XrmHelper.EntitiesMetadata.Select(x => x.SchemaName)];
            }
            else if (Json.entities == null || Json.entities.Trim().Length == 0 || Json.entities.Trim().ToLower() == "folder")
            {
                SpectreLog.WriteHighLight("Filter by: ", "current folder", " with pattern values: ", $"*{endsWith}", ".");
                SpectreLog.WriteLine();
                var pattern = $"*{endsWith}";
                return [.. Directory
                    .GetFiles(CurrentFolder, pattern)
                    .Select(x => Helper.GetSchemaNameFromFile(x, endsWith))];
            }
            else
            {
                SpectreLog.WriteHighLight("Filter by: ", "json.entities", " with values: ", Json.entities.Trim(), ".");
                SpectreLog.WriteLine();
                return [.. Json.entities.Split(",".ToCharArray())];
            }
        }

        private async Task GeneratorWebApiAsync(List<string> schemaNames)
        {
            const string endsWith = ".webapi.js";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            SpectreLog.WriteHighLight("Found: ", totalFiles.ToString(), " entities");
            SpectreLog.WriteLine();
            var i = 0;
            foreach (var schemaName in schemaNames)
            {
                i++;
                SpectreLog.WriteProgress(i, totalFiles);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.js");
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var dtsFile = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.d.ts");
                    var oldCode = await FileHelper.ReadAllTextAsync(fileEndsWith);
                    var oldDTS = await FileHelper.ReadAllTextAsync(dtsFile);
                    var isJsFormExist = File.Exists(Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.form.js"));
                    var (newCode, newDTS) = await JsWebApi.GetJsWebApiCodeAsync(ServiceClient, entityMetadata, Json.rootnamespace, isJsFormExist);
                    if (!File.Exists(file))
                    {
                        await FileHelper.ForceWriteAllTextAsync(file, Helper.GetDefaultFileWithWebApi(entityMetadata.SchemaName));
                    }
                    SpectreLog.ClearProgress();
                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Helper.IsTheSame(oldDTS, newDTS))
                        {
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    SpectreLog.ClearProgress();
                    SpectreLog.ActionError($"entity schema name: {schemaName} not found in the current instance !!!");
                }
            }
        }

        private async Task GeneratorTsWebApiAsync(List<string> schemaNames)
        {
            const string endsWith = ".webapi.ts";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            SpectreLog.WriteHighLight("Found: ", totalFiles.ToString(), " entities");
            SpectreLog.WriteLine();
            var i = 0;
            foreach (var schemaName in schemaNames)
            {
                i++;
                SpectreLog.WriteProgress(i, totalFiles);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.ts");
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var oldCode = await FileHelper.ReadAllTextAsync(fileEndsWith);
                    var isJsFormExist = File.Exists(Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.form.js"));
                    var newCode = await TsWebApi.GetTsWebApiCodeAsync(ServiceClient, entityMetadata);

                    SpectreLog.ClearProgress();
                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    SpectreLog.ClearProgress();
                    SpectreLog.ActionError($"entity schema name: {schemaName} not found in the current instance !!!");
                }
            }
        }

        private async Task GeneratorJsFormAsync(List<string> schemaNames)
        {
            const string endsWith = ".form.js";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            SpectreLog.WriteHighLight("Found: ", totalFiles.ToString(), " entities");
            SpectreLog.WriteLine();
            var i = 0;
            foreach (var schemaName in schemaNames)
            {
                i++;
                SpectreLog.WriteProgress(i, totalFiles);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.js");
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var dtsFile = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.d.ts");
                    var oldCode = await FileHelper.ReadAllTextAsync(fileEndsWith);
                    var oldDTS = await FileHelper.ReadAllTextAsync(dtsFile);
                    var isJsWebApiExist = File.Exists(Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.webapi.js"));
                    var (newCode, newDTS) = await JsForm.GetJsFormCodeAsync(ServiceClient, entityMetadata, Json.rootnamespace, isJsWebApiExist);

                    // Skip if no forms exist for this entity
                    SpectreLog.ClearProgress();
                    if (string.IsNullOrEmpty(newCode))
                    {
                        SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}", "(no forms)");
                        continue;
                    }

                    if (!File.Exists(file))
                    {
                        await FileHelper.ForceWriteAllTextAsync(file, await XrmHelper.GetDefaultFileWithFormAsync(ServiceClient, entityMetadata, Json.rootnamespace));
                    }
                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Helper.IsTheSame(oldDTS, newDTS))
                        {
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    SpectreLog.ClearProgress();
                    SpectreLog.ActionError($"entity schema name: {schemaName} not found in the current instance !!!");
                }
            }
        }

        private async Task GeneratorTsFormAsync(List<string> schemaNames)
        {
            const string endsWith = ".form.ts";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            SpectreLog.WriteHighLight("Found: ", totalFiles.ToString(), " entities");
            SpectreLog.WriteLine();
            var processedEntities = new List<EntityMetadata>();
            var i = 0;
            foreach (var schemaName in schemaNames)
            {
                i++;
                SpectreLog.WriteProgress(i, totalFiles);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    processedEntities.Add(entityMetadata);
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var oldCode = await FileHelper.ReadAllTextAsync(fileEndsWith);
                    var isJsWebApiExist = File.Exists(Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.webapi.js"));
                    var newCode = await TsForm.GetTsFormCodeAsync(ServiceClient, entityMetadata);

                    // Skip if no forms exist for this entity
                    SpectreLog.ClearProgress();
                    if (string.IsNullOrEmpty(newCode))
                    {
                        SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}", "(no forms)");
                        continue;
                    }

                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.ts");
                    if (!File.Exists(file))
                    {
                        var tsCode = await XrmHelper.GetDefaultTsFileWithFormAsync(ServiceClient, entityMetadata);
                        if (!string.IsNullOrEmpty(tsCode))
                        {
                            await FileHelper.ForceWriteAllTextAsync(file, tsCode);
                        }
                    }

                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    SpectreLog.ClearProgress();
                    SpectreLog.ActionError($"entity schema name: {schemaName} not found in the current instance !!!");
                }
            }

            // Generate OptionSet.ts after processing all entities
            if (processedEntities.Count > 0)
            {
                var optionSetFile = Path.Combine(CurrentFolder, "OptionSet.ts");
                var existingContent = await FileHelper.ReadAllTextAsync(optionSetFile);
                var newOptionSetCode = await TsOptionSet.GetTsOptionSetCodeAsync(ServiceClient, processedEntities, existingContent);

                if (Helper.IsTheSame(existingContent, newOptionSetCode))
                {
                    SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, "OptionSet.ts");
                }
                else
                {
                    await FileHelper.ForceWriteAllTextAsync(optionSetFile, newOptionSetCode);
                    if (File.Exists(optionSetFile))
                        SpectreLog.ActionWithLevel0(CliAction.UPDATED, "OptionSet.ts");
                    else
                        SpectreLog.ActionWithLevel0(CliAction.CREATED, "OptionSet.ts");
                }
            }
        }

        private async Task GeneratorLateBoundAsync(List<string> schemaNames)
        {
            const string endsWith = ".generated.cs";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            SpectreLog.WriteHighLight("Found: ", totalFiles.ToString(), " entities");
            SpectreLog.WriteLine();
            var i = 0;
            foreach (var schemaName in schemaNames)
            {
                i++;
                SpectreLog.WriteProgress(i, totalFiles);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.cs");
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var oldCode = await FileHelper.ReadAllTextFromLine6Async(fileEndsWith);
                    if (Json.@namespace != null && Json.@namespace.Trim().Length == 0) Json.@namespace = null;
                    var _GeneratedClass_ = CSharpLateBound.GetCsCode(ServiceClient, entityMetadata, Json.rootnamespace, Json.@namespace);
                    var newCode = await Helper.ReadContentFromLine6Async(_GeneratedClass_);
                    SpectreLog.ClearProgress();
                    if (File.Exists(fileEndsWith) && Helper.IsTheSame(oldCode, newCode))
                    {
                        SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
                            SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
                            if (!File.Exists(file))
                            {
                                await FileHelper.ForceWriteAllTextAsync(file, Helper.GetDefaultFileWithCs(entityMetadata, Json.rootnamespace));
                            }
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    SpectreLog.ClearProgress();
                    SpectreLog.ActionError($"entity schema name: {schemaName} not found in the current instance !!!");
                }
            }
        }

        private async Task ReadEntitiesMetadataAsync(ServiceClient serviceClient, EntityFilters entityFilters)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0 && XrmHelper.EntitiesFormXml.Count == 0 && XrmHelper.EntitiesProcessForm.Count == 0)
            {
                using (var cancellationTokenSource = new CancellationTokenSource())
                {
                    var waitingTask = Task.Run(() => SpectreLog.WaitingWithCancellation("Reading entities Metadata ", cancellationTokenSource.Token), cancellationTokenSource.Token);
                    try
                    {
                        await XrmHelper.ReadEntitiesMetadataAsync(serviceClient, entityFilters);
                    }
                    finally
                    {
                        cancellationTokenSource.Cancel();
                        try
                        {
                            await waitingTask;
                        }
                        catch (OperationCanceledException)
                        {
                        }
                    }
                }
                if (Json.type.ToLower() != nameof(GeneratorType.csharp))
                {
                    IsAll = true;
                    using (var cancellationTokenSource = new CancellationTokenSource())
                    {
                        var waitingTask = Task.Run(() => SpectreLog.WaitingWithCancellation("Reading entities FormXml ", cancellationTokenSource.Token), cancellationTokenSource.Token);
                        try
                        {
                            await XrmHelper.ReadEntitiesFormXmlAsync(serviceClient);
                        }
                        finally
                        {
                            cancellationTokenSource.Cancel();
                            try
                            {
                                await waitingTask;
                            }
                            catch (OperationCanceledException)
                            {
                            }
                        }
                    }
                }
            }
        }
    }
}