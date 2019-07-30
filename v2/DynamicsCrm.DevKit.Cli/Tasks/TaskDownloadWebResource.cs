using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDownloadWebResource
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[DOWNLOAD-WEB-RESOURCE]";
        private JsonDownloadWebResource json;
        private List<DownloadFile> downloadedFiles = null;

        public TaskDownloadWebResource(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .downloadwebresources.FirstOrDefault(x => x.profile == arguments.Profile);
            downloadedFiles = new List<DownloadFile>();
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "DOWNLOAD-WEBRESOURCES");

            if (!IsValid()) return;

            var list = DownloadWebResources();
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);

            var all = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile));
            var jsonWebResource = all.webresources.FirstOrDefault(x => x.profile == arguments.Profile);
            if (jsonWebResource != null)
            {
                foreach (var item in list)
                {
                    if (!jsonWebResource.includefiles.Contains(item))
                    {
                        jsonWebResource.includefiles.Add(item);
                    }
                }
                jsonWebResource.dependencies = GetUpdateDependencies(jsonWebResource.dependencies);
                var updateJson = SimpleJson.SerializeObject(all);
                updateJson = updateJson.Replace("[entity]", "__entity__");
                updateJson = Utility.FormatJson(updateJson);
                updateJson = updateJson.Replace("__entity__", "[entity]");
                Utility.ForceWriteAllText(jsonFile, updateJson);
            }
            AddProjectItemGroup(list);

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "DOWNLOAD-WEBRESOURCES");
        }

        private void AddProjectItemGroup(List<string> list)
        {
            var projects = Directory.GetFiles(currentDirectory, "*.csproj");
            foreach (var project in projects)
            {
                var content = File.ReadAllText(project);
                if (content.IndexOf("download.webresources.bat") > 0)
                {
                    var xdoc = XDocument.Parse(content);
                    var items = (from x in xdoc.Descendants()
                                 where x?.Attribute("Include")?.Value != null
                                 select x?.Attribute("Include")?.Value
                                ).ToList();
                    var lines = from item in list
                                where !items.Contains(item)
                                select item;
                    if (lines.Count() == 0) break;
                    var itemGroup = "\t<ItemGroup>\r\n";
                    foreach (var item in lines)
                    {
                        if (item.EndsWith(".resx"))
                            itemGroup += $"\t\t<None Include=\"{item}\" />\r\n";
                        else
                            itemGroup += $"\t\t<Content Include=\"{item}\" />\r\n";
                    }
                    itemGroup += "\t</ItemGroup>\r\n";
                    content = content.Replace("</Project>", itemGroup + "</Project>");
                    File.WriteAllText(project, content);
                    break;
                }
            }
        }

        private List<Dependency> GetUpdateDependencies(List<Dependency> dependencies)
        {
            if (!IsSupportWebResourceDependency)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, "Your organization don't suport WebResource dependency");
                return dependencies;
            }
            var i = 1;
            var total = downloadedFiles.Count;
            var len = total.ToString().Length;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, total, CliLog.ColorGreen, " webresources");
            foreach (var downloadedFile in downloadedFiles)
            {
                var fetchData = new
                {
                    webresourceid = downloadedFile.ObjectId
                };
                var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='dependencyxml' />
    <filter type='and'>
      <condition attribute='webresourceid' operator='eq' value='{fetchData.webresourceid}'/>
    </filter>
  </entity>
</fetch>";
                var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1) continue;
                var name = rows.Entities[0].GetAttributeValue<string>("name");
                var dependencyxml = rows.Entities[0].GetAttributeValue<string>("dependencyxml");
                if (dependencyxml == null)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Dependency: ", CliLog.ColorGreen, name, CliLog.ColorWhite, " not found");
                    i++;
                    continue;
                }
                var xdoc = XDocument.Parse(dependencyxml);
                var webResources = (from x in xdoc.Descendants("Dependencies").Descendants("Dependency").Elements("Library")
                                    select new
                                    {
                                        name = x?.Attribute("name")?.Value
                                    }).ToList();
                if (webResources.Count == 0)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Dependency: ", CliLog.ColorGreen, name, CliLog.ColorWhite, " not found");
                    i++;
                    continue;
                }
                var existing = dependencies.FirstOrDefault(d => d.webresources.Contains(name));
                List<string> dependenciesLog;
                if (existing == null)
                {
                    dependenciesLog = webResources.Select(w => w.name).ToList();
                    dependencies.Add(new Dependency
                    {
                        webresources = new List<string> { name },
                        dependencies = dependenciesLog
                    });
                }
                else
                {
                    var update = existing.dependencies;
                    update.AddRange(webResources.Select(w => w.name).ToList());
                    update = update.Distinct().ToList();
                    existing.dependencies = update;
                    dependenciesLog = update;
                }
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Dependency: ", CliLog.ColorGreen, name, CliLog.ColorWhite, " dependencies");
                foreach (var dependency in dependenciesLog)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "\t", CliLog.ColorGreen, dependency);
                }
                i++;
            }
            return dependencies;
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.prefix.Length == 0 || json.prefix == "???")
                throw new Exception($"{LOG} 'prefix' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }

        private List<string> DownloadWebResources()
        {
            var list = new List<string>();
            var fetchData = new
            {
                ismanaged = "0",
                iscustomizable = "1",
                uniquename = json.solution,
                name = json.prefix
            };
            var fetchXml = string.Empty;
            if (json.solution.Length > 0)
            {
                fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable}'/>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
      <condition attribute='name' operator='begins-with' value='{fetchData.name}'/>
    </filter>
    <order attribute='name' />
    <link-entity name='solutioncomponent' from='objectid' to='webresourceid' link-type='inner' alias='sc'>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            }
            else
            {
                fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable}'/>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
    </filter>
    <order attribute='name' />
  </entity>
</fetch>";
            }
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
                throw new Exception("Not found any webresources to download");
            var downloadFiles = DownloadFiles(rows.Entities);

            var totalDownloadWebResources = downloadFiles.Count;
            var len = totalDownloadWebResources.ToString().Length;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, totalDownloadWebResources, CliLog.ColorGreen, " webresources");
            //DELETE first
            foreach (var downloadFile in downloadFiles)
            {
                Utility.TryDeleteFile(downloadFile.FileName);
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   !!!   Deleted ", CliLog.ColorWhite, totalDownloadWebResources, CliLog.ColorRed, " existing files   !!!   ");

            var i = 1;
            foreach (var downloadFile in downloadFiles)
            {
                var isOk = DownloadWebResourceFile(downloadFile, i, totalDownloadWebResources);
                if (isOk)
                {
                    var shortFileName = downloadFile.FileName.Substring(currentDirectory.Length + 1);
                    list.Add(shortFileName);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, shortFileName);
                }
                i++;
            }
            return list;
        }

        private bool DownloadWebResourceFile(DownloadFile downloadFile, int i, int totalDownloadWebResources)
        {
            if (File.Exists(downloadFile.FileName))
            {
                var len = totalDownloadWebResources.ToString().Length;
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorRed, "Failed: ", CliLog.ColorGreen, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, downloadFile.FileName);
                return false;
            }
            else
            {
                var directoryName = Path.GetDirectoryName(downloadFile.FileName);
                if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName ?? throw new InvalidOperationException());
                byte[] decode = Convert.FromBase64String(downloadFile.Content);
                File.WriteAllBytes(downloadFile.FileName, decode);
                downloadedFiles.Add(downloadFile);
                return true;
            }
        }


        private List<DownloadFile> DownloadFiles(DataCollection<Entity> entities)
        {
            var list = new List<DownloadFile>();
            foreach (var entity in entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var webresourcetype = (WebResourceWebResourceType)entity.GetAttributeValue<OptionSetValue>("webresourcetype").Value;
                var content = entity.GetAttributeValue<string>("content");
                var extension = GetExtension(webresourcetype);
                if (name.StartsWith("/")) name = name.Substring(1);
                if (name.StartsWith(json.prefix))
                    name = name.Substring(json.prefix.Length);
                if (name.StartsWith("/"))
                    name = name.Substring(1);
                else
                    name = json.prefix + name;
                if (name.EndsWith(extension))
                    name = name.Substring(0, name.Length - extension.Length);
                var fileName = $"{currentDirectory}\\{name.Replace("/", "\\")}{extension}";
                list.Add(new DownloadFile
                {
                    Content = content,
                    FileName = fileName,
                    Name = entity.GetAttributeValue<string>("name"),
                    ObjectId = entity.Id
                });
            }
            return list;
        }

        private string GetExtension(WebResourceWebResourceType webresourcetype)
        {
            switch (webresourcetype)
            {
                case WebResourceWebResourceType.WebpageHtml: return ".html";
                case WebResourceWebResourceType.ScriptJScript: return ".js";
                case WebResourceWebResourceType.PngFormat: return ".png";
                case WebResourceWebResourceType.GifFormat: return ".gif";
                case WebResourceWebResourceType.JpgFormat: return ".jpg";
                case WebResourceWebResourceType.StyleSheetCss: return ".css";
                case WebResourceWebResourceType.IcoFormat: return ".ico";
                case WebResourceWebResourceType.DataXml: return ".xml";
                case WebResourceWebResourceType.StyleSheetXsl: return ".xsl";
                case WebResourceWebResourceType.SilverlightXap: return ".xap";
                case WebResourceWebResourceType.StringResx: return ".resx";
                case WebResourceWebResourceType.SvgFormat: return ".svg";
            }
            return ".html";
        }

        private bool? _isSupportWebResourceDependency = (bool?)null;
        private bool IsSupportWebResourceDependency
        {
            get
            {
                if (_isSupportWebResourceDependency != null) return _isSupportWebResourceDependency.Value;
                var request = new RetrieveVersionRequest();
                var response = (RetrieveVersionResponse)crmServiceClient.Execute(request);
                var version = new Version(response.Version);
                _isSupportWebResourceDependency = version >= new Version("9.0");
                return _isSupportWebResourceDependency.Value;
            }
        }
    }
}
