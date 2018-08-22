using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class WebResourceTask
    {
        public WebResourceTask(CrmServiceClient crmServiceClient, string currentDirectory, WebResource webResourceJson,
            string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            WebResourceJson = webResourceJson;
            Version = version;
            WebResourcesToPublish = new List<Guid>();
        }

        private CrmServiceClient CrmServiceClient { get; }
        private WebResource WebResourceJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }
        private List<Guid> WebResourcesToPublish { get; }

        private List<WebResourceFile> WebResourceFiles
        {
            get
            {
                var items = new List<WebResourceFile>();
                var includefiles = new List<string>();
                foreach (var pattern in WebResourceJson.includefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    includefiles.AddRange(GetFiles(filePattern));
                }

                var excludefiles = new List<string>();
                foreach (var pattern in WebResourceJson.excludefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    excludefiles.AddRange(GetFiles(filePattern));
                }

                var files = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
                foreach (var file in files)
                {
                    var name = WebResourceJson.prefix + "/" + file
                                   .Substring($"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\".Replace(@"\\", @"\")
                                       .Length).Replace("\\", "/");
                    var webResourceFile = new WebResourceFile
                    {
                        file = file,
                        version = Version,
                        uniquename = name,
                        displayname = name
                    };
                    items.Add(webResourceFile);
                }

                return items;
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "START WEBRESOURCE TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            foreach (var webResourceFile in WebResourceFiles)
                DeployWebResource(webResourceFile);
            if (WebResourcesToPublish.Count > 0)
                PublishWebResources();
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "END WEBRESOURCE TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
        }

        private Entity DeployWebResource(WebResourceFile webResourceFile)
        {
            var fetchData = new
            {
                name = webResourceFile.uniquename
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var content = string.Empty;
            var webResourceId = Guid.Empty;
            if (rows.Entities.Count > 0)
            {
                var entity = rows.Entities[0];
                webResourceId = entity.Id;
                content = entity?["content"]?.ToString();
            }

            var fileContent = Convert.ToBase64String(File.ReadAllBytes(webResourceFile.file));
            if (fileContent == content)
                return null;
            var webResource = new Entity("webresource");
            webResource["name"] = webResourceFile.uniquename;
            webResource["displayname"] = webResourceFile.displayname;
            webResource["description"] = webResourceFile.version;
            webResource["content"] = fileContent;

            var webResourceFileInfo = new FileInfo(webResourceFile.file);
            var filetype = WebResourceWebResourceType.Script_JScript;
            switch (webResourceFileInfo.Extension.ToLower().TrimStart('.'))
            {
                case "html":
                case "htm":
                    filetype = WebResourceWebResourceType.Webpage_HTML;
                    break;
                case "js":
                    filetype = WebResourceWebResourceType.Script_JScript;
                    break;
                case "png":
                    filetype = WebResourceWebResourceType.PNGformat;
                    break;
                case "gif":
                    filetype = WebResourceWebResourceType.GIFformat;
                    break;
                case "jpg":
                case "jpeg":
                    filetype = WebResourceWebResourceType.JPGformat;
                    break;
                case "css":
                    filetype = WebResourceWebResourceType.StyleSheet_CSS;
                    break;
                case "ico":
                    filetype = WebResourceWebResourceType.ICOformat;
                    break;
                case "xml":
                    filetype = WebResourceWebResourceType.Data_XML;
                    break;
                case "xsl":
                case "xslt":
                    filetype = WebResourceWebResourceType.StyleSheet_XSL;
                    break;
                case "xap":
                    filetype = WebResourceWebResourceType.Silverlight_XAP;
                    break;
            }

            webResource["webresourcetype"] = new OptionSetValue((int) filetype);
            if (webResourceId == Guid.Empty)
            {
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Creating WebResource ", CliLog.COLOR_CYAN, webResourceFile.file,
                    CliLog.COLOR_GREEN, " to ", CliLog.COLOR_CYAN, webResourceFile.uniquename);
                webResourceId = CrmServiceClient.Create(webResource);
                webResource["webresourceid"] = webResourceId;
            }
            else
            {
                webResource["webresourceid"] = webResourceId;
                CliLog.WriteLine(CliLog.COLOR_BLUE, "Updating WebResource ", CliLog.COLOR_CYAN, webResourceFile.file,
                    CliLog.COLOR_GREEN, " to ", CliLog.COLOR_CYAN, webResourceFile.uniquename);
                CrmServiceClient.Update(webResource);
            }

            WebResourcesToPublish.Add(webResourceId);
            AddWebResourceToSolution(webResource);
            return webResource;
        }

        private void AddWebResourceToSolution(Entity webResource)
        {
            var fetchData = new
            {
                objectid = Guid.Parse(webResource["webresourceid"].ToString()),
                componenttype = 61,
                uniquename = WebResourceJson.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='solutioncomponent'>
    <attribute name='solutioncomponentid' />
    <filter type='and'>
      <condition attribute='objectid' operator='eq' value='{fetchData.objectid}'/>
      <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/>
    </filter>
    <link-entity name='solution' from='solutionid' to='solutionid'>
      <filter type='and'>
        <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                var request = new AddSolutionComponentRequest
                {
                    AddRequiredComponents = true,
                    ComponentType = 61,
                    ComponentId = Guid.Parse(webResource["webresourceid"].ToString()),
                    SolutionUniqueName = WebResourceJson.solution
                };
                CliLog.WriteLine(CliLog.COLOR_GREEN, "\tAdding WebResource: ", CliLog.COLOR_CYAN,
                    $"{webResource["name"]} ", CliLog.COLOR_GREEN, "to solution: ", CliLog.COLOR_CYAN,
                    $"{WebResourceJson.solution}");
                CrmServiceClient.Execute(request);
            }
        }

        public void PublishWebResources()
        {
            var stringGuids = WebResourcesToPublish.Select(g => g.ToString());
            var webresources = string.Join("</webresource><webresource>", stringGuids);
            var publish = new PublishXmlRequest
            {
                ParameterXml =
                    "<importexportxml><webresources>" +
                    "<webresource>" + webresources + "</webresource>" +
                    "</webresources></importexportxml>"
            };
            CliLog.WriteLine(CliLog.COLOR_YELLOW, "Publishing WebResources !!!");
            CrmServiceClient.Execute(publish);
        }

        private List<string> GetFiles(string filePattern)
        {
            var folder = filePattern.Substring(0, filePattern.LastIndexOf("\\"));
            var pattern = filePattern.Substring(folder.Length + 1);
            return Directory.GetFiles(folder, pattern).ToList();
        }

        private enum WebResourceWebResourceType
        {
            Webpage_HTML = 1,
            StyleSheet_CSS = 2,
            Script_JScript = 3,
            Data_XML = 4,
            PNGformat = 5,
            JPGformat = 6,
            GIFformat = 7,
            Silverlight_XAP = 8,
            StyleSheet_XSL = 9,
            ICOformat = 10,
            String_RESX = 11
        }
    }
}