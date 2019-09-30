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

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskGenerator
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[GENERATOR]";
        private JsonGenerator json;

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
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "GENERATOR CSHARP LATE BOUND");

            var entities = new List<string>();
            string[] files;
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            //if (json.entities == null || json.entities.Count == 0)
            //{
                var pattern = "*.generated.cs";
                files = Directory.GetFiles(folder, pattern);
            //}
            //else
            //{
            //    //if (json.entities.Count == 1 && json.entities[0].ToLower() == "all")
            //    //    files = GetAllEntitiesForWebApi();
            //    //else
            //        files = json.entities.Select(e => $"{folder}{e}.generated.js").ToArray();
            //}
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorMagenta, " ENTIIES !!!");
                return;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorMagenta, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorLateBound(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "GENERATOR CSHARP LATE BOUND");
        }

        private void GeneratorLateBound(string entity, int i, int count)
        {
            var lateBound = new CSharpLateBound();
            var rootNameSpace = json.rootnamespace;
            var sharedNameSpace = GetSharedNameSpace(json.rootnamespace);
            var crmVersionName = (CrmVersionName)int.Parse(json.crmversion);
            var generated = lateBound.Go(crmServiceClient.OrganizationServiceProxy, crmVersionName, entity, rootNameSpace, sharedNameSpace);
            var file = $"{currentDirectory}\\{json.rootfolder}\\{entity}.generated.cs";
            var old = string.Empty;
            if (File.Exists(file))
                old = File.ReadAllText(file).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = generated.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (old != @new)
            {
                File.WriteAllText(file, generated, System.Text.Encoding.UTF8);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Processing ", CliLog.ColorGreen, entity, ".generated.cs");
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "No change ", CliLog.ColorGreen, entity, ".generated.cs");
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
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "GENERATOR JS WEBAPI");

            var entities = new List<string>();
            string[] files;
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            //if (json.entities == null || json.entities.Count == 0)
            //{
                var pattern = "*.webapi.js";
                files = Directory.GetFiles(folder, pattern);
            //}
            //else
            //{
            //    //if (json.entities.Count == 1 && json.entities[0].ToLower() == "all")
            //    //    files = GetAllEntitiesForWebApi();
            //    //else
            //        files = json.entities.Select(e => $"{folder}{e}.webapi.js").ToArray();
            //}
            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorMagenta, " ENTIIES !!!");
                return;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorMagenta, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorJsWebApi(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "GENERATOR JS WEBAPI");
        }

        private void GeneratorJsWebApi(string entity, int i, int count)
        {
            var jsForm = new List<string>();
            var isDebugForm = true;
            var isDebugWebApi = true;

            if (!File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = string.Empty;
                text += "//@ts-check\r\n";
                text += $"///<reference path=\"{entity}.d.ts\" />\r\n";
                Utility.ForceWriteAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js", text);
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
                }
            }
            var parts = json.rootnamespace.Split(".".ToCharArray());
            var projectName = parts.Length > 1 ? parts[1] : parts[0];
            if (json.debug.Length > 0) isDebugWebApi = json.debug == "yes" ? true : false;
            var jsWebApi = new JsWebApi(crmServiceClient.OrganizationServiceProxy, projectName, entity, isDebugWebApi, jsForm, isDebugForm);
            jsWebApi.GeneratorCode();
            var old = string.Empty;
            if (File.Exists(fileTypeScriptDeclaration))
                old = File.ReadAllText(fileTypeScriptDeclaration).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = jsWebApi.WebApiCodeTypeScriptDeclaration.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (old != @new)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Processing ", CliLog.ColorGreen, entity, ".d.ts");
                Utility.ForceWriteAllText(fileTypeScriptDeclaration, jsWebApi.WebApiCodeTypeScriptDeclaration);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "No change ", CliLog.ColorGreen, entity, ".d.ts");
            var fileWebApi = $"{currentDirectory}\\{json.rootfolder}\\{entity}.webapi.js";
            old = string.Empty;
            if (File.Exists(fileWebApi))
                old = File.ReadAllText(fileWebApi).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            @new = jsWebApi.WebApiCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (old != @new)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Processing ", CliLog.ColorGreen, entity, ".webapi.js");
                Utility.ForceWriteAllText(fileWebApi, jsWebApi.WebApiCode);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "No change ", CliLog.ColorGreen, entity, ".webapi.js");
        }

        private string[] GetAllEntitiesForWebApi()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            var metaDataEntities = response.EntityMetadata.OrderBy(a => a.SchemaName);
            var entities = new List<string>();
            foreach (var entity in metaDataEntities)
            {
                entities.Add(entity.SchemaName);
            }
            entities.Sort();
            return entities.ToArray();
        }

        private void GeneratorJsForm()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "GENERATOR JS FORM");

            var entities = new List<string>();
            string[] files;
            var folder = $"{currentDirectory}\\{json.rootfolder}";
            //if (json.entities == null || json.entities.Count == 0)
            //{
                var pattern = "*.form.js";
                files = Directory.GetFiles(folder, pattern);
            //}
            //else
            //{
            //    //if (json.entities.Count == 1 && json.entities[0].ToLower() == "all")
            //    //    files = GetAllEntities();
            //    //else
            //        files = json.entities.Select(e => $"{folder}{e}.form.js").ToArray();
            //}

            foreach (var file in files)
            {
                var fInfo = new FileInfo(file);
                var columns = fInfo.Name.Split(".".ToCharArray());
                entities.Add(columns[0]);
            }
            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "NOT FOUND ", CliLog.ColorMagenta, " ENTIIES !!!");
                return;
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorMagenta, entities.Count, CliLog.ColorGreen, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
#if DEBUG
                //if (entity != "abiz_Sla") continue;
#endif
                GeneratorJsForm(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "GENERATOR JS FORM");
        }

        private void GeneratorJsForm(string entity, int i, int count)
        {
            var forms = new List<string>();
            var isDebugForm = true;
            var webApi = true;
            var isDebugWebApi = true;
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
                var jsForm2 = new JsForm(crmServiceClient.OrganizationServiceProxy, projectName2, entity);
                forms = GetAllForms(entity, jsForm2);
            }
            if (forms.Count == 0) return;
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
            var jsForm = new JsForm(crmServiceClient.OrganizationServiceProxy, projectName, entity);
            if (json.debug.Length > 0) isDebugForm = json.debug == "yes" ? true : false;
            jsForm.GeneratorCode(forms, isDebugForm, webApi, isDebugWebApi);
            if (!File.Exists($"{currentDirectory}\\{json.rootfolder}\\{entity}.js"))
            {
                var text = jsForm.Form;
                text = text.Replace($"[[{entity}]]", $"{entity}.d.ts");
                Utility.ForceWriteAllText($"{currentDirectory}\\{json.rootfolder}\\{entity}.js", text);
            }
            var old = string.Empty;
            if (File.Exists(fileTypeScriptDeclaration))
                old = File.ReadAllText(fileTypeScriptDeclaration).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            var @new = jsForm.FormCodeTypeScriptDeclaration.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (old != @new)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Processing ", CliLog.ColorGreen, entity, ".d.ts");
                Utility.ForceWriteAllText(fileTypeScriptDeclaration, jsForm.FormCodeTypeScriptDeclaration);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "No change ", CliLog.ColorGreen, entity, ".d.ts");
            var fileForm = $"{currentDirectory}\\{json.rootfolder}\\{entity}.form.js";
            old = string.Empty;
            if (File.Exists(fileForm))
                old = File.ReadAllText(fileForm).Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            @new = jsForm.FormCode.Replace(" ", string.Empty).Replace("\r\n", string.Empty).Replace("\t", string.Empty);
            if (old != @new)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "Processing ", CliLog.ColorGreen, entity, ".form.js");
                Utility.ForceWriteAllText(fileForm, jsForm.FormCode);
            }
            else
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + count.ToString().Length + "}", "", i) + ": ", CliLog.ColorMagenta, "No change ", CliLog.ColorGreen, entity, ".form.js");
        }

        private List<string> GetAllForms(string entity, JsForm jsForm)
        {
            var forms = jsForm.GetForms().ToList();
            if (forms.Count == 0) return new List<string>();
            forms = forms.Distinct().ToList();
            return forms;
        }

        private string[] GetAllEntities()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            var metaDataEntities = response.EntityMetadata.OrderBy(a => a.SchemaName);
            var entities = new List<string>();
            foreach (var entity in metaDataEntities)
            {
                if (entity.IsBPFEntity.HasValue && entity.IsBPFEntity.Value) continue;
                if (entity.IsIntersect.HasValue && entity.IsIntersect.Value) continue;
                entities.Add(entity.SchemaName);
            }
            entities.Sort();
            return entities.ToArray();
        }
    }
}
