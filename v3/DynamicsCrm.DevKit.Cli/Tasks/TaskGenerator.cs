using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskGenerator : ITask
    {
        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string TaskType => "[GENERATOR]";

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
            if (json.type.ToLower() != nameof(GeneratorType.jsform)  && json.type.ToLower() != nameof(GeneratorType.jswebapi) && json.type.ToLower() != nameof(GeneratorType.csharp))
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
                if (json.type.ToLower() == nameof(GeneratorType.csharp))
                    GeneratorLateBound(".generated.cs");
                else if (json.type.ToLower() == nameof(GeneratorType.jsform))
                    GeneratorJsForm();
                else if (json.type.ToLower() == nameof(GeneratorType.jswebapi))
                    GeneratorWebApi();
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private void GeneratorWebApi()
        {
        }

        private void GeneratorJsForm()
        {
        }

        private void GeneratorLateBound(string endsWith)
        {
            var files = GetFiles(endsWith);
            var totalFiles = files.Count();
            var len = totalFiles.ToString().Length;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalFiles, ConsoleColor.Green, " entities");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach(var file in files)
            {
                var schemaName = GetSchemaNameFromFile(file, endsWith);
                var oldCsCode = Utility.ReadAllText(file);
                var newCsCode = CSharpLateBound.GetCsCode(CrmServiceClient, file, json.rootnamespace);
                if (Utility.IsTheSame(oldCsCode, newCsCode))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                }
                else
                {
                    if (File.Exists(file))
                    {
                        Utility.ForceWriteAllText(file, newCsCode);
                        CliLog.WriteLineChanged(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        var newFileName = Path.Combine(Path.GetDirectoryName(file), $"{schemaName}.cs");
                        var newFileNameContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.LateBound.cs");
                        Utility.ForceWriteAllText(newFileName, newFileNameContent);
                        CliLog.WriteLineChanged(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}.cs");
                        Utility.ForceWriteAllText(file, newCsCode);
                        CliLog.WriteLineChanged(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Created, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                }
                i++;
            }
        }

        private string GetSchemaNameFromFile(string file, string endsWith)
        {
            var fileName = Path.GetFileName(file);
            return fileName.Substring(0, fileName.Length - endsWith.Length);
        }

        private string[] GetFiles(string endsWith)
        {
            EntitiesMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient);
            var folder = $"{CurrentDirectory}\\{json.rootfolder}";
            if (!folder.EndsWith("\\")) folder += "\\";
            if (json.entities == null || json.entities.Trim().Length == 0 || json.entities.Trim().ToLower() == "folder")
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "current folder", ConsoleColor.Green, " with pattern values: ", ConsoleColor.White, $"*{endsWith}");
                CliLog.WriteLine(ConsoleColor.White, "|");
                var pattern = $"*{endsWith}";
                var entities = Directory
                    .GetFiles(folder, pattern)
                    .Select(x => GetSchemaNameFromFile(x, endsWith))
                    .ToList();
                return EntitiesMetadata
                        .Where(x => entities.Contains(x.SchemaName))
                        .OrderBy(x => x.SchemaName)
                        .Select(x => $"{folder}{x.SchemaName}{endsWith}")
                        .ToArray();
            }
            else
            {
                if (json.entities.Trim().ToLower() == "*" || json.entities.Trim().ToLower() == "all")
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim().ToLower());
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    return EntitiesMetadata
                        .OrderBy(x => x.SchemaName)
                        .Select(x=> $"{folder}{x.SchemaName}{endsWith}")
                        .ToArray();
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Filter by: ", ConsoleColor.White, "json.entities", ConsoleColor.Green, " with values: ", ConsoleColor.White, json.entities.Trim().ToLower());
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    var entities = json.entities.Split(",".ToCharArray());
                    return EntitiesMetadata
                        .Where(x => entities.Contains(x.SchemaName))
                        .OrderBy(x => x.SchemaName)
                        .Select(x => $"{folder}{x.SchemaName}{endsWith}")
                        .ToArray();
                }
            }
        }

        private JsonGenerator json { get; set; }
        public TaskGenerator(CrmServiceClient crmServiceClient, string currentDirectory, JsonGenerator json)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            this.json = json;
        }

        private EntityMetadata[] EntitiesMetadata { get; set; }
    }
}
