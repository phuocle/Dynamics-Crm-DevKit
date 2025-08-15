using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
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
            if (Json.type.ToLower() != nameof(GeneratorType.jsform) && Json.type.ToLower() != nameof(GeneratorType.jswebapi) && Json.type.ToLower() != nameof(GeneratorType.csharp))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' should be: 'JsForm' or 'JsWebApi' or 'CSharp'. Please check DynamicsCrm.DevKit.Cli.json file.");
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
                    await ReadEntitiesMetadataAsync(ServiceClient);
                else
                    XrmHelper.EntitiesMetadata = await XrmHelper.GetEntitiesMetadataAsync(ServiceClient, schemaNames);
                schemaNames = [.. XrmHelper.EntitiesMetadata.Select(x => x.SchemaName)];
                if (Json.type.ToLower() == nameof(GeneratorType.csharp))
                    await GeneratorLateBoundAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jsform))
                    await GeneratorJsFormAsync(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jswebapi))
                    await GeneratorWebApiAsync(schemaNames);
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
                await ReadEntitiesMetadataAsync(ServiceClient);
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
                    var comment = await XrmHelper.GetCommentAsync(ServiceClient, entityMetadata.LogicalName, dtsFile);
                    if (IsAll)
                    {
                        if (!File.Exists(dtsFile)) comment.UseForm = false;
                        comment.UseWebApi = true;
                    }
                    if (!comment.UseWebApi)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var (newCode, newDTS) = await JsWebApi.GetCodeAsync(ServiceClient, entityMetadata, Json.rootnamespace, comment);
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
                    var comment = await XrmHelper.GetCommentAsync(ServiceClient, entityMetadata.LogicalName, dtsFile);
                    if (IsAll)
                    {
                        comment.UseForm = true;
                        if (!File.Exists(dtsFile)) comment.UseWebApi = false;
                    }
                    if (!comment.UseForm)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var (newCode, newDTS) = await JsForm.GetCodeAsync(ServiceClient, entityMetadata, Json.rootnamespace, comment);
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
                    var newCode = CSharpLateBound.GetCode(ServiceClient, entityMetadata, Json.rootnamespace);
                    if (newCode == String.Empty || Helper.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        var code = string.Empty;
                        var NEW_LINE = "\r\n";
                        var TAB = "\t";
                        code += $"//---------------------------------------------------------------------------------------------------{NEW_LINE}";
                        code += $"// <auto-generated>{NEW_LINE}";
                        code += $"//{TAB}{TAB}Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.{NEW_LINE}";
                        code += $"//{TAB}{TAB}Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit{NEW_LINE}";
                        code += $"//{TAB}{TAB}Last Modified: {DateTime.Now:yyyy-MM-dd HH:mm:ss}{NEW_LINE}";
                        code += $"// </auto-generated>{NEW_LINE}";
                        code += $"//---------------------------------------------------------------------------------------------------{NEW_LINE}";
                        newCode = $"{code}{newCode}";
                        if (File.Exists(fileEndsWith))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileEndsWith, newCode);
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

        private async Task ReadEntitiesMetadataAsync(ServiceClient serviceClient)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0 && XrmHelper.EntitiesFormXml.Count == 0 && XrmHelper.EntitiesProcessForm.Count == 0)
            {
                using (var cancellationTokenSource = new CancellationTokenSource())
                {
                    var waitingTask = Task.Run(() => CliLog.WaitingWithCancellation("Reading entities Metadata ", cancellationTokenSource.Token), cancellationTokenSource.Token);
                    try
                    {
                        await XrmHelper.ReadEntitiesMetadataAsync(serviceClient);
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