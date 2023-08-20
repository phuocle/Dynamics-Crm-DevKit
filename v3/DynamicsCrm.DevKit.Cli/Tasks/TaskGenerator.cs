using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskGenerator : ITask
    {
        public TaskGenerator(CommandLineArgs arg, JsonGenerator json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;

            TaskType = $"[{nameof(CliType.generators).ToUpper()} - {json.type.ToUpper()}]";
        }

        public CommandLineArgs Arg { get; set; }

        private JsonGenerator Json { get; set; }

        public string CurrentDirectory { get; set; }

        public CrmServiceClient CrmServiceClient { get; set; }

        public string TaskType { get; set; }

        private string CurrentFolder => $"{CurrentDirectory}\\{Json.rootfolder}";

        private static bool IsAll { get; set; } = false;

        public bool IsValid()
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
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var schemaNames = GetSchemaNames();
                if (schemaNames.Count > 500)
                    ReadEntitiesMetadata(CrmServiceClient);
                else
                    XrmHelper.EntitiesMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient, schemaNames);
                if (Json.type.ToLower() == nameof(GeneratorType.csharp))
                    GeneratorLateBound(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jsform))
                    GeneratorJsForm(schemaNames);
                else if (Json.type.ToLower() == nameof(GeneratorType.jswebapi))
                    GeneratorWebApi(schemaNames);
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private List<string> GetSchemaNames()
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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, Json.entities.Trim());
                CliLog.WriteLine(ConsoleColor.White, "|");
                ReadEntitiesMetadata(CrmServiceClient);
                return XrmHelper.EntitiesMetadata
                    .Select(x => x.SchemaName)
                    .ToList();
            }
            else if (Json.entities == null || Json.entities.Trim().Length == 0 || Json.entities.Trim().ToLower() == "folder")
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "current folder", ConsoleColor.Green, " with pattern values: ", ConsoleColor.White, $"*{endsWith}");
                CliLog.WriteLine(ConsoleColor.White, "|");
                var pattern = $"*{endsWith}";
                return Directory
                    .GetFiles(CurrentFolder, pattern)
                    .Select(x => Utility.GetSchemaNameFromFile(x, endsWith))
                    .ToList();
            }
            else
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, Json.entities.Trim());
                CliLog.WriteLine(ConsoleColor.White, "|");
                return Json.entities.Split(",".ToCharArray()).ToList();
            }
        }

        private void GeneratorWebApi(List<string> schemaNames)
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
                    var oldCode = Utility.ReadAllText(fileEndsWith);
                    var oldDTS = Utility.ReadAllText(dtsFile);
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    if (IsAll)
                    {
                        if (!File.Exists(dtsFile)) comment.UseForm = false;
                        comment.UseWebApi = true;
                    }
                    if (!comment.UseWebApi)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var newCode = string.Empty;
                    var newDTS = string.Empty;
                    //if (Json.version == null) comment.WebApiVersion = null;
                    //if (Json.version == "2") comment.WebApiVersion = "2";
                    //if (comment.WebApiVersion == "2")
                    newCode = JsWebApi2.GetCode(CrmServiceClient, entityMetadata, Json.rootnamespace, comment, out newDTS);
                    //else
                    //    newCode = JsWebApi.GetCode(CrmServiceClient, entityMetadata, Json.rootnamespace, comment, out newDTS);
                    if (Utility.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Utility.IsTheSame(oldDTS, newDTS))
                        {
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            if (!File.Exists(file))
                            {
                                Utility.ForceWriteAllText(file, VsixHelper.GetDefaultFileWithWebApi(entityMetadata.SchemaName));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private void GeneratorJsForm(List<string> schemaNames)
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
                    var oldCode = Utility.ReadAllText(fileEndsWith);
                    var oldDTS = Utility.ReadAllText(dtsFile);
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    if (IsAll)
                    {
                        comment.UseForm = true;
                        if (!File.Exists(dtsFile)) comment.UseWebApi = false;
                    }
                    if (!comment.UseForm)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var newCode = JsForm.GetCode(CrmServiceClient, entityMetadata, Json.rootnamespace, comment, out var newDTS);
                    if (Utility.IsTheSame(oldCode, newCode))
                    {
                        if (oldCode?.Length > 0 && newCode?.Length > 0 && !Utility.IsTheSame(oldDTS, newDTS))
                        {
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            if (!File.Exists(file))
                            {
                                Utility.ForceWriteAllText(file, VsixHelper.GetDefaultFileWithForm(CrmServiceClient, entityMetadata, Json.rootnamespace));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private void GeneratorLateBound(List<string> schemaNames)
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
                    var oldCode = Utility.ReadAllText(fileEndsWith);
                    var newCode = CSharpLateBound.GetCode(CrmServiceClient, entityMetadata, Json.rootnamespace);
                    if (newCode == String.Empty || Utility.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            if (!File.Exists(file))
                            {
                                Utility.ForceWriteAllText(file, VsixHelper.GetDefaultFileWithCs(entityMetadata, Json.rootnamespace));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private void ReadEntitiesMetadata(CrmServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0 &&
                XrmHelper.EntitiesFormXml.Count == 0 &&
                XrmHelper.EntitiesProcessForm.Count == 0)
            {
                var wait = new Thread(() => CliLog.Waiting("Reading entities Metadata "));
                wait.Start();
                XrmHelper.ReadEntitiesMetadata(crmServiceClient);
                wait.Abort();
                CliLog.WriteLine();
                if (Json.type.ToLower() != nameof(GeneratorType.csharp))
                {
                    IsAll = true;
                    wait = new Thread(() => CliLog.Waiting("Reading entities FormXml "));
                    wait.Start();
                    XrmHelper.ReadEntitiesFormXml(crmServiceClient);
                    wait.Abort();
                    CliLog.WriteLine();
                }
                CliLog.WriteLine(ConsoleColor.White, "|");
            }
        }
    }
}