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
        private string CurrentFolder => $"{CurrentDirectory}\\{json.rootfolder}";
        private static bool IsAll { get; set; } = false;

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
                if (schemaNames.Count > 500)
                    ReadEntitiesMetadata(CrmServiceClient);
                else
                    XrmHelper.EntitiesMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient, schemaNames);
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
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    if (IsAll)
                    {
                        if (!File.Exists(dtsFile)) comment.UseForm = false;
                        comment.UseWebApi = true;
                    }
                    if (!comment.UseWebApi)
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

        private string GetDefaultFileWithCs(EntityMetadata entityMetadata, string @namespace)
        {
            const string NEW_LINE = "\r\n";
            const string TAB = "\t";
            var code = string.Empty;
            var @class = Utility.SafeDeclareName(entityMetadata.SchemaName, null);
            code += $"namespace {@namespace}{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{TAB}public partial class {@class}{NEW_LINE}";
            code += $"{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}#region --- PROPERTIES ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}//public DateTime? DateTime {{ get {{ return GetAliasedValue<DateTime?>(\"c.birthdate\"); }} }}{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#region --- STATIC METHODS ---{NEW_LINE}";
            code += NEW_LINE;
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}{NEW_LINE}";
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
                        if(!File.Exists(dtsFile)) comment.UseWebApi = false;
                    }
                    if (!comment.UseForm)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                        i++;
                        continue;
                    }
                    var newCode = JsForm.GetCode(CrmServiceClient, entityMetadata, json.rootnamespace, comment, out var newDTS);
                    if (newCode == String.Empty || Utility.IsTheSame(oldCode, newCode))
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
                                Utility.ForceWriteAllText(file, GetDefaultFileWithForm(entityMetadata));
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

        private string GetDefaultFileWithForm(EntityMetadata entityMetadata)
        {
            var forms = XrmHelper.GetEntityForms(CrmServiceClient, entityMetadata.LogicalName);
            if (!forms.Any()) return GetDefaultFileWithApi(entityMetadata.SchemaName);
            var @namespace = Utility.GetNameSpace(json.rootnamespace);
            var code = string.Empty;
            code += $"//@ts-check\r\n";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />\r\n";
            code += "\"use strict\";\r\n";
            foreach (var form in forms)
            {
                var formName = Utility.GetFormName(form.Name, entityMetadata.SchemaName);
                var type = $"{@namespace}.Form{Utility.SafeIdentifier(formName)}";
                code += $"var form{Utility.SafeIdentifier(formName)} = (function () {{\r\n";
                code += $"\t\"use strict\";\r\n";
                code += $"\t/** @type {type} */\r\n";
                code += $"\tvar form = null;\r\n";
                code += $"\tasync function onLoad(executionContext) {{\r\n";
                code += $"\t\tform = new {type}(executionContext);\r\n";
                code += $"\r\n";
                code += $"\t}}\r\n";
                code += $"\tasync function onSave(executionContext) {{\r\n";
                code += $"\t}}\r\n";
                code += $"\treturn {{\r\n\t\tOnLoad: onLoad,\r\n\t\tOnSave: onSave\r\n\t}};\r\n";
                code += $"}})();\r\n";
            }
            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
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
                    var newCode = CSharpLateBound.GetCode(CrmServiceClient, entityMetadata, json.rootnamespace);
                    if (newCode == String.Empty || Utility.IsTheSame(oldCode, newCode))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{schemaName}{endsWith}");
                    }
                    else
                    {
                        if (File.Exists(fileEndsWith))
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            CliLog.WriteLineWarning(ConsoleColor.Yellow, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{schemaName}{endsWith}");
                        }
                        else
                        {
                            Utility.ForceWriteAllText(fileEndsWith, newCode);
                            if (!File.Exists(file))
                            {
                                Utility.ForceWriteAllText(file, GetDefaultFileWithCs(entityMetadata, json.rootnamespace));
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

        private void ReadEntitiesMetadata(CrmServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0 &&
                XrmHelper.EntitiesFormXml.Count == 0 &&
                XrmHelper.EntitiesProcessForm.Count == 0)
            {
                var wait = new Thread(() => CliLog.Waiting("Reading entities Metadata "));
                wait.Start();
                XrmHelper.ReadEntitiesMetadata(crmServiceClient);
                CliLog.WriteLine("");
                wait.Abort();

                if (json.type.ToLower() != nameof(GeneratorType.csharp))
                {
                    IsAll = true;
                    wait = new Thread(() => CliLog.Waiting("Reading entities FormXml "));
                    wait.Start();
                    XrmHelper.ReadEntitiesFormXml(crmServiceClient);
                    CliLog.WriteLine("");
                    wait.Abort();

                    wait = new Thread(() => CliLog.Waiting("Reading entities Process "));
                    wait.Start();
                    XrmHelper.ReadEntitiesProcessForm(crmServiceClient);
                    CliLog.WriteLine("");
                    wait.Abort();
                }
                CliLog.WriteLine(ConsoleColor.White, "|");
            }
        }

        public TaskGenerator(CrmServiceClient crmServiceClient, string currentDirectory, JsonGenerator json)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            this.json = json;
            TaskType = $"[GENERATOR - {json.type.ToUpper() }]";
        }
    }
}
