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
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.rootnamespace == "???" || (Json.rootnamespace != null && Json?.rootnamespace?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootnamespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.rootfolder == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type == "???" || (Json.type != null && Json?.type?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (
                Json.type.ToLower() != nameof(GeneratorType.jsform) &&
                Json.type.ToLower() != nameof(GeneratorType.tsform) &&
                Json.type.ToLower() != nameof(GeneratorType.jswebapi) &&
                Json.type.ToLower() != nameof(GeneratorType.csharp) /*&&
                Json.type.ToLower() != nameof(GeneratorType.earlybound)*/
                )
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' should be: 'JsForm' or 'TsForm' or 'JsWebApi' or 'CSharp' or 'EarlyBound'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            await Helper.DelayAsync(1);
            return true;
        }

        public async Task RunAsync()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");

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
                //else if (Json.type.ToLower() == nameof(GeneratorType.earlybound))
                //    await GeneratorEarlyBoundAsync(schemaNames);
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
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
                CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ");
                CliLog.WriteSuccess(ConsoleColor.White, "json.entities");
                CliLog.Write(ConsoleColor.Green, " with values: ");
                CliLog.WriteSuccess(ConsoleColor.White, Json.entities.Trim());
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.White, "|");
                await ReadEntitiesMetadataAsync(ServiceClient, EntityFilters.Attributes);
                return [.. XrmHelper.EntitiesMetadata.Select(x => x.SchemaName)];
            }
            else if (Json.entities == null || Json.entities.Trim().Length == 0 || Json.entities.Trim().ToLower() == "folder")
            {
                CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ");
                CliLog.WriteSuccess(ConsoleColor.White, "current folder");
                CliLog.Write(ConsoleColor.Green, " with pattern values: ");
                CliLog.WriteSuccess(ConsoleColor.White, $"*{endsWith}");
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.White, "|");
                var pattern = $"*{endsWith}";
                return [.. Directory
                    .GetFiles(CurrentFolder, pattern)
                    .Select(x => Helper.GetSchemaNameFromFile(x, endsWith))];
            }
            else
            {
                CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ");
                CliLog.WriteSuccess(ConsoleColor.White, "json.entities");
                CliLog.Write(ConsoleColor.Green, " with values: ");
                CliLog.WriteSuccess(ConsoleColor.White, Json.entities.Trim());
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.White, "|");
                return [.. Json.entities.Split(",".ToCharArray())];
            }
        }

        private async Task GeneratorWebApiAsync(List<string> schemaNames)
        {
            const string endsWith = ".webapi.js";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var schemaName in schemaNames)
            {
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
                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Helper.IsTheSame(oldDTS, newDTS))
                        {
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            if (!File.Exists(file))
                            {
                                await FileHelper.ForceWriteAllTextAsync(file, Helper.GetDefaultFileWithWebApi(entityMetadata.SchemaName));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.ERROR, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private async Task GeneratorJsFormAsync(List<string> schemaNames)
        {
            const string endsWith = ".form.js";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var schemaName in schemaNames)
            {
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
                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Helper.IsTheSame(oldDTS, newDTS))
                        {
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            await FileHelper.ForceWriteAllTextAsync(dtsFile, newDTS);
                            if (!File.Exists(file))
                            {
                                await FileHelper.ForceWriteAllTextAsync(file, await XrmHelper.GetDefaultFileWithFormAsync(ServiceClient, entityMetadata, Json.rootnamespace));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.ERROR, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private async Task GeneratorTsFormAsync(List<string> schemaNames)
        {
            const string endsWith = ".form.ts";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var schemaName in schemaNames)
            {
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var oldCode = await FileHelper.ReadAllTextAsync(fileEndsWith);
                    var isJsWebApiExist = File.Exists(Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.webapi.js"));
                    var newCode = await TsForm.GetTsFormCodeAsync(ServiceClient, entityMetadata, Json.rootnamespace, isJsWebApiExist);

                    // Skip if no forms exist for this entity
                    if (string.IsNullOrEmpty(newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.DarkGray, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}", ConsoleColor.DarkGray, " (no forms)");
                        i++;
                        continue;
                    }

                    if (Helper.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.ERROR, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        //private async Task GeneratorEarlyBoundAsync(List<string> schemaNames)
        //{
        //    const string endsWith = ".generated.cs";
        //    var totalFiles = schemaNames.Count();
        //    var len = totalFiles.ToString().Length;
        //    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
        //    CliLog.WriteLine(ConsoleColor.White, "|");
        //    var i = 1;
        //    foreach (var schemaName in schemaNames)
        //    {
        //        var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
        //        if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
        //        {
        //            var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.cs");
        //            var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
        //            var oldCode = await FileHelper.ReadAllTextFromLine6Async(fileEndsWith);
        //            if (Json.@namespace != null && Json.@namespace.Trim().Length == 0) Json.@namespace = null;
        //            var _GeneratedClass_ = CSharpEarlyBound.GetCsCode(ServiceClient, entityMetadata, Json.rootnamespace, Json.@namespace);
        //            var newCode = await Helper.ReadContentFromLine6Async(_GeneratedClass_);
        //            if (File.Exists(fileEndsWith) && Helper.IsTheSame(oldCode, newCode))
        //            {
        //                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
        //            }
        //            else
        //            {
        //                if (File.Exists(fileEndsWith))
        //                {
        //                    await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
        //                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
        //                }
        //                else
        //                {
        //                    await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
        //                    if (!File.Exists(file))
        //                    {
        //                        await FileHelper.ForceWriteAllTextAsync(file, Helper.GetDefaultFileWithCs(entityMetadata, Json.rootnamespace));
        //                    }
        //                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{schemaName}{endsWith}");
        //                }
        //            }
        //        }
        //        else
        //        {
        //            CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.ERROR, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
        //        }
        //        i++;
        //    }
        //}
        private async Task GeneratorLateBoundAsync(List<string> schemaNames)
        {
            const string endsWith = ".generated.cs";
            var totalFiles = schemaNames.Count();
            var len = totalFiles.ToString().Length;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var schemaName in schemaNames)
            {
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var file = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}.cs");
                    var fileEndsWith = Path.Combine(CurrentFolder, $"{entityMetadata.SchemaName}{endsWith}");
                    var oldCode = await FileHelper.ReadAllTextFromLine6Async(fileEndsWith);
                    if (Json.@namespace != null && Json.@namespace.Trim().Length == 0) Json.@namespace = null;
                    var _GeneratedClass_ = CSharpLateBound.GetCsCode(ServiceClient, entityMetadata, Json.rootnamespace, Json.@namespace);
                    var newCode = await Helper.ReadContentFromLine6Async(_GeneratedClass_);
                    if (File.Exists(fileEndsWith) && Helper.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, _GeneratedClass_);
                            if (!File.Exists(file))
                            {
                                await FileHelper.ForceWriteAllTextAsync(file, Helper.GetDefaultFileWithCs(entityMetadata, Json.rootnamespace));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.ERROR, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private async Task ReadEntitiesMetadataAsync(ServiceClient serviceClient, EntityFilters entityFilters)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0 && XrmHelper.EntitiesFormXml.Count == 0 && XrmHelper.EntitiesProcessForm.Count == 0)
            {
                using (var cancellationTokenSource = new CancellationTokenSource())
                {
                    var waitingTask = Task.Run(() => CliLog.WaitingWithCancellation("Reading entities Metadata ", cancellationTokenSource.Token), cancellationTokenSource.Token);
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
                CliLog.WriteLine();
                if (Json.type.ToLower() != nameof(GeneratorType.csharp))
                {
                    IsAll = true;
                    using (var cancellationTokenSource = new CancellationTokenSource())
                    {
                        var waitingTask = Task.Run(() => CliLog.WaitingWithCancellation("Reading entities FormXml ", cancellationTokenSource.Token), cancellationTokenSource.Token);
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
                    CliLog.WriteLine();
                }
                CliLog.WriteLine(ConsoleColor.White, "|");
            }
        }
    }
}