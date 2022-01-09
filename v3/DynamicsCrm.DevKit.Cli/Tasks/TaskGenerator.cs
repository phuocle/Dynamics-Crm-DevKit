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
        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string TaskType { get; set; }
        private JsonGenerator json { get; set; }
        //private List<EntityMetadata> FilesMapWithEntityMetadata { get; set; }
        private string CurrentFolder => $"{CurrentDirectory}\\{json.rootfolder}";

        public bool IsValid()
        {
            if (json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.rootnamespace == "???" || (json.rootnamespace != null && json?.rootnamespace?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootnamespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.rootfolder == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.type == "???" || (json.type != null && json?.type?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.type.ToLower() != nameof(GeneratorType.jsform) && json.type.ToLower() != nameof(GeneratorType.jswebapi) && json.type.ToLower() != nameof(GeneratorType.csharp))
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
                if (XrmHelper.EntitiesMetadata == null)
                {
                    if (schemaNames.Count > 500)
                        ReadEntitiesMetadata(CrmServiceClient);
                    else
                        XrmHelper.EntitiesMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient, schemaNames);
                }
                if (json.type.ToLower() == nameof(GeneratorType.csharp))
                    GeneratorLateBound(schemaNames);
                else if (json.type.ToLower() == nameof(GeneratorType.jsform))
                    GeneratorJsForm(schemaNames);
                else if (json.type.ToLower() == nameof(GeneratorType.jswebapi))
                    GeneratorWebApi(schemaNames);
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private List<string> GetSchemaNames()
        {
            var endsWith = string.Empty;
            if (json.type.ToLower() == nameof(GeneratorType.csharp))
                endsWith = ".generated.cs";
            else if (json.type.ToLower() == nameof(GeneratorType.jsform))
                endsWith = ".form.js";
            else if (json.type.ToLower() == nameof(GeneratorType.jswebapi))
                endsWith = ".webapi.js";
            if (json.entities != null && (json.entities.Trim().ToLower() == "*" || json.entities.Trim().ToLower() == "all"))
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim());
                CliLog.WriteLine(ConsoleColor.White, "|");
                ReadEntitiesMetadata(CrmServiceClient);
                return XrmHelper.EntitiesMetadata
                    .Select(x => x.SchemaName)
                    .ToList();
            }
            else if (json.entities == null || json.entities.Trim().Length == 0 || json.entities.Trim().ToLower() == "folder")
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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim());
                CliLog.WriteLine(ConsoleColor.White, "|");
                return json.entities.Split(",".ToCharArray()).ToList();
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
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.ObjectTypeCode, dtsFile);
                    if (!comment.JsWebApi)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var newCode = JsWebApi.GetCode(CrmServiceClient, entityMetadata, json.rootnamespace, comment, out var newDTS);
                    if (Utility.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            Utility.ForceWriteAllText(dtsFile, newDTS);
                            if (!File.Exists(file))
                            {
                                Utility.ForceWriteAllText(file, GetDefaultFileWithApi(entityMetadata.SchemaName));
                            }
                            CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private string GetDefaultFileWithApi(string schemaName)
        {
            const string NEW_LINE = "\r\n";
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{schemaName}.d.ts\" />{NEW_LINE}";
            return code;
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
                var file = Path.Combine(CurrentFolder, $"{schemaName}{endsWith}");
                var dtsFile = Path.Combine(CurrentFolder, $"{schemaName}.d.ts");
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if ((entityMetadata?.Attributes?.Length ?? 0) > 0)
                {
                    var oldCode = Utility.ReadAllText(file);
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.ObjectTypeCode, dtsFile);
                    if (!comment.JsForm)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var newCode = JsForm.GetCode(CrmServiceClient, entityMetadata, json.rootnamespace, comment);
                    if (Utility.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(file))
                        {
                            Utility.ForceWriteAllText(file, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            //var newFileName = Path.Combine(Path.GetDirectoryName(file), $"{schemaName}.cs");
                            //var newFileNameContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.LateBound.cs");
                            //newFileNameContent = newFileNameContent
                            //    .Replace("$NameSpace$", json.rootnamespace)
                            //    .Replace("$class$", schemaName);
                            //Utility.ForceWriteAllText(newFileName, newFileNameContent);
                            //CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}.cs");
                            Utility.ForceWriteAllText(file, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                    }
                }
                else
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity schema name: ", ConsoleColor.DarkMagenta, schemaName, ConsoleColor.White, " not found in the current instance !!!");
                }
                i++;
            }
        }

        private void GeneratorLateBound(List<string> schemaNames)
        {
            //var totalSchemaNames = schemaNames.Count();
            //var len = totalSchemaNames.ToString().Length;
            //CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalSchemaNames, ConsoleColor.Green, " entities");
            //CliLog.WriteLine(ConsoleColor.White, "|");
            //var i = 1;
            //foreach(var file in files)
            //{
            //    var schemaName = Utility.GetSchemaNameFromFile(file, endsWith);
            //    var entityMetadata = FilesMapWithEntityMetadata.FirstOrDefault(x => x.SchemaName == schemaName);
            //    if (entityMetadata?.Attributes?.Length > 0)
            //    {
            //        var oldCsCode = Utility.ReadAllText(file);
            //        var newCsCode = CSharpLateBound.GetCsCode(CrmServiceClient, entityMetadata, schemaName, json.rootnamespace);
            //        if (Utility.IsTheSame(oldCsCode, newCsCode))
            //        {
            //            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
            //        }
            //        else
            //        {
            //            if (File.Exists(file))
            //            {
            //                Utility.ForceWriteAllText(file, newCsCode);
            //                CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
            //            }
            //            else
            //            {
            //                var newFileName = Path.Combine(Path.GetDirectoryName(file), $"{schemaName}.cs");
            //                var newFileNameContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.LateBound.cs");
            //                newFileNameContent = newFileNameContent
            //                    .Replace("$NameSpace$", json.rootnamespace)
            //                    .Replace("$class$", schemaName);
            //                Utility.ForceWriteAllText(newFileName, newFileNameContent);
            //                CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}.cs");
            //                Utility.ForceWriteAllText(file, newCsCode);
            //                CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
            //            }
            //        }
            //    }
            //    else
            //    {
            //        CliLog.WriteLineError(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Error, ConsoleColor.White, $"entity logical name: ", ConsoleColor.DarkMagenta, entityMetadata.LogicalName, ConsoleColor.White, " not found in the current instance !!!");
            //    }
            //    i++;
            //}
        }

        //private void ReadFilesWithEntitiesMetadata(string endsWith)
        //{
        //    if (json.entities == null || json.entities.Trim().Length == 0 || json.entities.Trim().ToLower() == "folder")
        //    {
        //        var pattern = $"*{endsWith}";
        //        var entities = Directory
        //            .GetFiles(CurrentFolder, pattern)
        //            .Select(x => Utility.GetSchemaNameFromFile(x, endsWith))
        //            .ToList();
        //        FilesMapWithEntityMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient, entities);
        //    }
        //    else if (json.entities.Trim().ToLower() == "*" || json.entities.Trim().ToLower() == "all")
        //    {
        //        FilesMapWithEntityMetadata = XrmHelper.EntitiesMetadata;
        //    }
        //    else
        //    {
        //        var entities = json.entities.Split(",".ToCharArray()).ToList();
        //        FilesMapWithEntityMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient, entities);
        //    }
        //}

        private void ReadEntitiesMetadata(CrmServiceClient crmServiceClient)
        {
            var wait = new Thread(() => CliLog.Waiting("Reading entities metadata "));
            wait.Start();
            XrmHelper.ReadEntitiesMetadata(crmServiceClient);
            wait.Abort();
            CliLog.WriteLine("");
            CliLog.WriteLine(ConsoleColor.White, "|");
        }

        //private List<string> GetFiles(string endsWith)
        //{
        //    if (json.entities != null && (json.entities.Trim().ToLower() == "*" || json.entities.Trim().ToLower() == "all"))
        //    {
        //        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim().ToLower());
        //        CliLog.WriteLine(ConsoleColor.White, "|");
        //    }
        //    else if (json.entities == null || json.entities.Trim().Length == 0 || json.entities.Trim().ToLower() == "folder")
        //    {
        //        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "current folder", ConsoleColor.Green, " with pattern values: ", ConsoleColor.White, $"*{endsWith}");
        //        CliLog.WriteLine(ConsoleColor.White, "|");
        //    }
        //    else
        //    {
        //        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim().ToLower());
        //        CliLog.WriteLine(ConsoleColor.White, "|");
        //    }
        //    ReadFilesWithEntitiesMetadata(endsWith);
        //    return FilesMapWithEntityMetadata
        //            .OrderBy(x => x.SchemaName)
        //            .Select(x => $"{CurrentFolder}{x.SchemaName}{endsWith}")
        //            .ToList();
        //}

        public TaskGenerator(CrmServiceClient crmServiceClient, string currentDirectory, JsonGenerator json)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            this.json = json;
            TaskType = $"[GENERATOR - {json.type.ToUpper() }]";
        }
    }
}
