using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using DynamicsCrm.DevKit.Shared.Helper;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskGenerator
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[GENERATOR]";
        private JsonGenerator json;
        List<string> IgnoreEntities = new List<string> { "Entity" };

        public TaskGenerator(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .generators.FirstOrDefault(x => x.profile == arguments.Profile);
        }

        public void Run()
        {
            if (!IsValid()) return;
            if (json.type.ToLower() == "csharp")
                GeneratorLateBound();
            else if (json.type.ToLower() == "jsform")
                GeneratorJsForm();
            else if (json.type.ToLower() == "jswebapi")
                GeneratorWebApi();
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.rootnamespace.Length == 0 || json.rootnamespace == "???")
                throw new Exception($"{LOG} 'rootnamespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.rootfolder == "???")
                throw new Exception($"{LOG} 'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.crmversion.Length == 0 || json.crmversion == "???")
                throw new Exception($"{LOG} 'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.crmversion.ToLower() != "365".ToLower() &&
                json.crmversion.ToLower() != "2016".ToLower() &&
                json.crmversion.ToLower() != "2015".ToLower() &&
                json.crmversion.ToLower() != "2013".ToLower() &&
                json.crmversion.ToLower() != "2011".ToLower())
                throw new Exception($"{LOG} 'crmversion' should be: '365' or '2016' or '2015' or '2013' or '2011'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.type.Length == 0 || json.type == "???")
                throw new Exception($"{LOG} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.type.ToLower() != "JsForm".ToLower() &&
                json.type.ToLower() != "JsWebApi".ToLower() &&
                json.type.ToLower() != "CSharp".ToLower())
                throw new Exception($"{LOG} 'type' should be: 'JsForm' or 'JsWebApi' or 'CSharp'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }

        private void GeneratorLateBound()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "[GENERATOR CSHARP LATE BOUND]");
            CliLog.WriteLine();

            var entities = new List<string>();
            string[] files = new string[] { };
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            if (!folder.EndsWith("\\")) folder += "\\";
            if (json.entities == null || json.entities.Trim().Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "current folder", CliLog.ColorGreen, " with pattern values: ", CliLog.ColorCyan, "*.generated.cs");
                CliLog.WriteLine();
                var pattern = "*.generated.cs";
                files = Directory.GetFiles(folder, pattern);
            }
            else
            {
                if (json.entities.Trim().ToLower() == "*")
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, "*");
                    CliLog.WriteLine();

                    var schemas = GetAllEntitySchemas();
                    files = schemas.Select(e => $"{folder}{e}.generated.cs").ToArray();
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, json.entities);
                    CliLog.WriteLine();

                    files = json.entities.Split(",".ToCharArray()).Select(e => $"{folder}{e}.generated.cs").ToArray();
                    files = ConvertToSchemaName(files);
                }
            }
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorCyan, "ENTIIES");
                CliLog.WriteLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR CSHARP LATE BOUND]");
                return;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorYellow, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                if (IgnoreEntities.Contains(entity)) {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + entities.Count.ToString().Length + "}", "", i) + ": ", CliLog.ColorRed, "IGNORED ", CliLog.ColorCyan, entity);
                    i++;
                    continue;
                }
                else
                    GeneratorLateBound(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR CSHARP LATE BOUND]");
        }

        private List<string> GetAllEntitySchemas()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            return response.EntityMetadata.OrderBy(x => x.SchemaName).Select(x => x.SchemaName).ToList<string>();
        }

        private string[] ConvertToSchemaName(string[] files)
        {
            var list = new List<string>();
            foreach(var file in files)
            {
                var fileName = Path.GetFileName(file);
                var logicalName = fileName.Substring(0, fileName.Length - ".generated.cs".Length);
                var schemaName = GetEntitySchemaName(logicalName);
                var fileInfo = new FileInfo(file);
                list.Add(Path.Combine(fileInfo.DirectoryName, $"{schemaName}.generated.cs"));
            }
            return list.ToArray();
        }

        private string[] ConvertToSchemaNameJs(string[] files)
        {
            var list = new List<string>();
            foreach (var file in files)
            {
                var fileName = Path.GetFileName(file);
                var logicalName = fileName.Substring(0, fileName.Length - ".form.js".Length);
                var schemaName = GetEntitySchemaName(logicalName);
                var fileInfo = new FileInfo(file);
                list.Add(Path.Combine(fileInfo.DirectoryName, $"{schemaName}.form.js"));
            }
            return list.ToArray();
        }

        private string[] ConvertToSchemaNameWebApi(string[] files)
        {
            var list = new List<string>();
            foreach (var file in files)
            {
                var fileName = Path.GetFileName(file);
                var logicalName = fileName.Substring(0, fileName.Length - ".webapi.js".Length);
                var schemaName = GetEntitySchemaName(logicalName);
                var fileInfo = new FileInfo(file);
                list.Add(Path.Combine(fileInfo.DirectoryName, $"{schemaName}.webapi.js"));
            }
            return list.ToArray();
        }

        private string RemoveForCompare(string value)
        {
            return value
                .Replace(" ", string.Empty)
                .Replace("\r\n", string.Empty)
                .Replace("\t", string.Empty);
        }

        private string GetEntitySchemaName(string entityLogicalName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.Entity
            };
            var response = (RetrieveEntityResponse)crmServiceClient.Execute(request);
            return response.EntityMetadata.SchemaName;
        }

        private void GeneratorLateBound(string entity, int i, int count)
        {
            var lateBound = new CSharpLateBound();
            var rootNameSpace = json.rootnamespace;
            var sharedNameSpace = GetSharedNameSpace(json.rootnamespace);
            var crmVersionName = (CrmVersionName)int.Parse(json.crmversion);
            var generated = lateBound.Go(crmServiceClient, crmVersionName, entity, rootNameSpace, sharedNameSpace);
            var file = $"{currentDirectory}\\{json.rootfolder}\\{entity}.generated.cs";
            var old = string.Empty;
            if (File.Exists(file))
            {
                old = File.ReadAllText(file);
            }
            var @new = generated;
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(file))
                {
                    File.WriteAllText(file, generated, System.Text.Encoding.UTF8);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".generated.cs");
                }
                else
                {
                    var latebound = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.Generator.LateBound.cs");
                    latebound = latebound.Replace("$NameSpace$", json.rootnamespace).Replace("$class$", entity);
                    var fileLateBound = $"{currentDirectory}\\{json.rootfolder}\\{entity}.cs";

                    File.WriteAllText(fileLateBound, latebound, System.Text.Encoding.UTF8);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".cs");

                    File.WriteAllText(file, generated, System.Text.Encoding.UTF8);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".generated.cs");
                }
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".generated.cs");
            }
        }

        private string GetSharedNameSpace(string rootnamespace)
        {
            var parts = rootnamespace.Split(".".ToCharArray());
            var value = string.Empty;
            for(var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value.TrimEnd(".".ToCharArray());
        }

        private void GeneratorWebApi()
        {
            // /conn:"AuthType=Office365;Url=https://crmgridplus-developer.api.crm5.dynamics.com/XRMServices/2011/Organization.svc;Username=developer@crmgridplus.com;Password=67ubH5C8nrSvsmDAv/Zixw==;" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"JS-WEBAPI"
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "[GENERATOR JS WEBAPI]");
            CliLog.WriteLine();

            var entities = new List<string>();
            string[] files = new string[] { };
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            if (!folder.EndsWith("\\")) folder += "\\";
            if (json.entities == null || json.entities.Trim().Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "current folder", CliLog.ColorGreen, " with pattern values: ", CliLog.ColorCyan, "*.webapi.js");
                CliLog.WriteLine();
                var pattern = "*.webapi.js";
                files = Directory.GetFiles(folder, pattern);
            }
            else
            {
                if (json.entities.Trim().ToLower() == "*")
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, "*");
                    CliLog.WriteLine();

                    var schemas = GetAllEntitySchemas();
                    files = schemas.Select(e => $"{folder}{e}.webapi.js").ToArray();
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, json.entities);
                    CliLog.WriteLine();

                    files = json.entities.Split(",".ToCharArray()).Select(e => $"{folder}{e}.webapi.js").ToArray();
                    files = ConvertToSchemaNameWebApi(files);
                }
            }
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorCyan, "ENTIIES");
                CliLog.WriteLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR JS WEBAPI]");
                return;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorYellow, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorJsWebApi(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR JS WEBAPI]");


        }

        private void GeneratorJsWebApi(string entity, int i, int count)
        {
            var jsForm = new List<string>();
            var isDebugForm = false;
            var isDebugWebApi = false;
            var jsFormVersion = "v2";
            if (!File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = string.Empty;
                text += "//@ts-check\r\n";
                text += $"///<reference path=\"{entity}.d.ts\" />\r\n";
                Utility.ForceWriteAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js", text);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".js");
            }
            var fileTypeScriptDeclaration = $"{currentDirectory}\\{json.rootfolder}\\{entity}.d.ts";
            if (File.Exists(fileTypeScriptDeclaration))
            {
                var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                if (lines.Count() != 0)
                {
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    isDebugWebApi = comment.IsDebugWebApi;
                    jsForm = comment.JsForm;
                    isDebugForm = comment.IsDebugForm;
                    jsFormVersion = comment.JsFormVersion;
                }
            }
            var parts = json.rootnamespace.Split(".".ToCharArray());
            var projectName = parts.Length > 1 ? parts[1] : parts[0];
            if (json.debug.Length > 0)
            {
                isDebugWebApi = json.debug == "yes" ? true : false;
            }
            var jsWebApi = new JsWebApi(crmServiceClient, projectName, entity, isDebugWebApi, jsForm, isDebugForm, jsFormVersion);
            jsWebApi.GeneratorCode();
            var old = string.Empty;
            if (File.Exists(fileTypeScriptDeclaration))
                old = File.ReadAllText(fileTypeScriptDeclaration);//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = jsWebApi.WebApiCodeTypeScriptDeclaration;//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileTypeScriptDeclaration))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".d.ts");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".d.ts");
                Utility.ForceWriteAllText(fileTypeScriptDeclaration, jsWebApi.WebApiCodeTypeScriptDeclaration);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".d.ts");
            var fileWebApi = $"{currentDirectory}\\{json.rootfolder}\\{entity}.webapi.js";
            old = string.Empty;
            if (File.Exists(fileWebApi))
                old = File.ReadAllText(fileWebApi);//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            @new = jsWebApi.WebApiCode;//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileWebApi))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".webapi.js");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".webapi.js");
                Utility.ForceWriteAllText(fileWebApi, jsWebApi.WebApiCode);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".webapi.js");
        }

        private void GeneratorJsForm()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "[GENERATOR JS FORM]");
            CliLog.WriteLine();

            var entities = new List<string>();
            string[] files = new string[] { };
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            if (!folder.EndsWith("\\")) folder += "\\";
            if (json.entities == null || json.entities.Trim().Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "current folder", CliLog.ColorGreen, " with pattern values: ", CliLog.ColorCyan, "*.form.js");
                CliLog.WriteLine();
                var pattern = "*.form.js";
                files = Directory.GetFiles(folder, pattern);
            }
            else
            {
                if (json.entities.Trim().ToLower() == "*")
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, "*");
                    CliLog.WriteLine();

                    var schemas = GetAllEntitySchemas();
                    files = schemas.Select(e => $"{folder}{e}.form.js").ToArray();
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Filter by: ", CliLog.ColorCyan, "json.entities", CliLog.ColorGreen, " with values: ", CliLog.ColorCyan, json.entities);
                    CliLog.WriteLine();

                    files = json.entities.Split(",".ToCharArray()).Select(e => $"{folder}{e}.form.js").ToArray();
                    files = ConvertToSchemaNameJs(files);
                }
            }
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorCyan, "ENTIIES");
                CliLog.WriteLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR JS FORM]");
                return;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorYellow, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                var jsFormVersion = "v2";
                var fileTypeScriptDeclaration = $"{currentDirectory}\\{json.rootfolder}\\{entity}.d.ts";
                if (File.Exists(fileTypeScriptDeclaration))
                {

                    var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                    if (lines.Count() != 0)
                    {
                        var json = lines[lines.Length - 1];
                        var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                        jsFormVersion = comment.JsFormVersion;
                    }
                }
                if (jsFormVersion == "v2")
                {
                    GeneratorJsForm2(entity, i, entities.Count);
                }
                else
                {
                    GeneratorJsForm(entity, i, entities.Count);
                }
                i++;
            }

            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[GENERATOR JS FORM]");
        }
        private void GeneratorJsForm2(string entity, int i, int count)
        {
            var forms = new List<string>();
            var isDebugForm = true;
            var webApi = false;
            var isDebugWebApi = false;
            var fileTypeScriptDeclaration = $"{currentDirectory}\\{json.rootfolder}\\{entity}.d.ts";
            if (File.Exists(fileTypeScriptDeclaration))
            {
                var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                if (lines.Count() != 0)
                {
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    forms = comment.JsForm;
                    isDebugForm = comment.IsDebugForm;
                    webApi = comment.JsWebApi;
                    isDebugWebApi = comment.IsDebugWebApi;
                }
            }
            if (forms.Count == 0)
            {
                var parts2 = json.rootnamespace.Split(".".ToCharArray());
                var projectName2 = parts2.Length > 1 ? parts2[1] : parts2[0];
                var jsForm2 = new JsForm2(crmServiceClient, projectName2, entity);
                forms = GetAllForms(entity, jsForm2);
            }
            if (forms.Count == 0)
            {
                if (File.Exists(fileTypeScriptDeclaration))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".d.ts");
                if (File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.form.js"))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".form.js");
                return;
            }
            if (File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = File.ReadAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js");
                text = text.Replace("\r\n", string.Empty);
                if (text.Length == 0 || text == $"//@ts-check///<reference path=\"{entity}.d.ts\" />")
                {
                    Utility.TryDeleteFile($"{currentDirectory}\\{json.rootfolder}\\{entity}.js");
                }
            }
            var parts = json.rootnamespace.Split(".".ToCharArray());
            var projectName = parts.Length > 1 ? parts[1] : parts[0];
            var jsForm = new JsForm2(crmServiceClient, projectName, entity);
            if (json.debug.Length > 0) isDebugForm = json.debug == "yes" ? true : false;
            jsForm.GeneratorCode(forms, isDebugForm, webApi, isDebugWebApi);
            if (!File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = jsForm.Form;
                text = text.Replace($"[[{entity}]]", $"{entity}.d.ts");
                Utility.ForceWriteAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js", text);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".js");
            }
            var old = string.Empty;
            if (File.Exists(fileTypeScriptDeclaration))
                old = File.ReadAllText(fileTypeScriptDeclaration);
            var @new = jsForm.FormCodeTypeScriptDeclaration2;
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileTypeScriptDeclaration))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".d.ts");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".d.ts");
                Utility.ForceWriteAllText(fileTypeScriptDeclaration, jsForm.FormCodeTypeScriptDeclaration2);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".d.ts");
            var fileForm = $"{currentDirectory}\\{json.rootfolder}\\{entity}.form.js";
            old = string.Empty;
            if (File.Exists(fileForm))
                old = File.ReadAllText(fileForm);
            @new = jsForm.FormCode;
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileForm))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".form.js");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".form.js");
                Utility.ForceWriteAllText(fileForm, jsForm.FormCode);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".form.js");
        }
        private void GeneratorJsForm(string entity, int i, int count)
        {
            var forms = new List<string>();
            var isDebugForm = true;
            var webApi = false;
            var isDebugWebApi = false;
            var fileTypeScriptDeclaration = $"{currentDirectory}\\{json.rootfolder}\\{entity}.d.ts";
            if (File.Exists(fileTypeScriptDeclaration))
            {
                var lines = File.ReadAllLines(fileTypeScriptDeclaration);
                if (lines.Count() != 0)
                {
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    forms = comment.JsForm;
                    isDebugForm = comment.IsDebugForm;
                    webApi = comment.JsWebApi;
                    isDebugWebApi = comment.IsDebugWebApi;
                }
            }
            if (forms.Count == 0)
            {
                var parts2 = json.rootnamespace.Split(".".ToCharArray());
                var projectName2 = parts2.Length > 1 ? parts2[1] : parts2[0];
                var jsForm2 = new JsForm2(crmServiceClient, projectName2, entity);
                forms = GetAllForms(entity, jsForm2);
            }
            if (forms.Count == 0)
            {
                if (File.Exists(fileTypeScriptDeclaration))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".d.ts");
                if (File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.form.js"))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".form.js");
                return;
            }
            if (File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = File.ReadAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js");
                text = text.Replace("\r\n", string.Empty);
                if (text.Length == 0 || text == $"//@ts-check///<reference path=\"{entity}.d.ts\" />")
                {
                    Utility.TryDeleteFile($"{currentDirectory}\\{json.rootfolder}\\{entity}.js");
                }
            }
            var parts = json.rootnamespace.Split(".".ToCharArray());
            var projectName = parts.Length > 1 ? parts[1] : parts[0];
            var jsForm = new JsForm(crmServiceClient, projectName, entity);
            if (json.debug.Length > 0) isDebugForm = json.debug == "yes" ? true : false;
            jsForm.GeneratorCode(forms, isDebugForm, webApi, isDebugWebApi);
            if (!File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = jsForm.Form;
                text = text.Replace($"[[{entity}]]", $"{entity}.d.ts");
                Utility.ForceWriteAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js", text);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".js");
            }
            var old = string.Empty;
            if (File.Exists(fileTypeScriptDeclaration))
                old = File.ReadAllText(fileTypeScriptDeclaration);//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = jsForm.FormCodeTypeScriptDeclaration;//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileTypeScriptDeclaration))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".d.ts");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".d.ts");
                Utility.ForceWriteAllText(fileTypeScriptDeclaration, jsForm.FormCodeTypeScriptDeclaration);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".d.ts");
            var fileForm = $"{currentDirectory}\\{json.rootfolder}\\{entity}.form.js";
            old = string.Empty;
            if (File.Exists(fileForm))
                old = File.ReadAllText(fileForm);//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            @new = jsForm.FormCode;//.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (RemoveForCompare(old) != RemoveForCompare(@new))
            {
                if (File.Exists(fileForm))
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Updated ", CliLog.ColorGreen, entity, ".form.js");
                else
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Created ", CliLog.ColorGreen, entity, ".form.js");
                Utility.ForceWriteAllText(fileForm, jsForm.FormCode);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorGreen, entity, ".form.js");
        }
        private List<string> GetAllForms(string entity, JsForm2 jsForm)
        {
            var forms = jsForm.GetForms().ToList();
            if (forms.Count == 0) return new List<string>();
            forms = forms.Distinct().ToList();
            forms.Sort();
            return forms;
        }

        //private string[] GetAllEntities()
        //{
        //    var request = new RetrieveAllEntitiesRequest
        //    {
        //        EntityFilters = EntityFilters.Entity,
        //        RetrieveAsIfPublished = true
        //    };
        //    var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
        //    var metaDataEntities = response.EntityMetadata.OrderBy(a => a.SchemaName);
        //    var entities = new List<string>();
        //    foreach (var entity in metaDataEntities)
        //    {
        //        if (entity.IsBPFEntity.HasValue && entity.IsBPFEntity.Value) continue;
        //        if (entity.IsIntersect.HasValue && entity.IsIntersect.Value) continue;
        //        entities.Add(entity.SchemaName);
        //    }
        //    entities.Sort();
        //    return entities.ToArray();
        //}
    }
}
