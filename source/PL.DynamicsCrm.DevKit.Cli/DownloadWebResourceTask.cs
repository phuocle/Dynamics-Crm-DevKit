using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class DownloadWebResourceTask
    {
        public DownloadWebResourceTask(CrmServiceClient crmServiceClient, string currentDirectory, DownloadWebResource downloadWebResourceJson, string version, string cliJsonFile)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            DownloadWebResourceJson = downloadWebResourceJson;
            Version = version;
            CliJsonFile = cliJsonFile;
        }

        private CrmServiceClient CrmServiceClient { get; }
        private DownloadWebResource DownloadWebResourceJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }
        private string CliJsonFile { get; set; }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START DOWNLOAD WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (DownloadWebResourceJson.solution == "???") throw new Exception("No solution found in download webresources profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (DownloadWebResourceJson.prefix.Length == 0 || DownloadWebResourceJson.prefix == "???") throw new Exception("No prefix found in download webresources profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            var list = DownloadWebResources();
            var json = SimpleJson.DeserializeObject<CliJson>(File.ReadAllText(CliJsonFile));
            var update = json.webresources.FirstOrDefault(x => x.profile == "DEBUG");
            if (update != null)
            {
                foreach(var item in list)
                {
                    if(!update.includefiles.Contains(item))
                    {
                        update.includefiles.Add(item);
                    }
                }
                update.dependencies = GetUpdateDependencies(update.dependencies);
                var updateJson = SimpleJson.SerializeObject(json);
                updateJson = updateJson.Replace("[entity]", "__entity__");
                updateJson = Utility.FormatJson(updateJson);
                updateJson = updateJson.Replace("__entity__", "[entity]");
                File.WriteAllText(CliJsonFile, updateJson);
            }
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END DOWNLOAD WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private List<Dependency> GetUpdateDependencies(List<Dependency> dependencies)
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (!IsSupportWebResourceDependency)
            {
                CliLog.WriteLine(CliLog.ColorCyan, "Your organization don't suport WebResource dependency");
                return dependencies;
            }
            var i = 1;
            var total = downloadedFiles.Count;
            var len = total.ToString().Length;
            foreach (var downloadedFile in downloadedFiles)
            {
                var fetchData = new
                {
                    webresourceid = downloadedFile.WebResourceId
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
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1) continue;
                var name = rows.Entities[0].GetAttributeValue<string>("name");
                var dependencyxml = rows.Entities[0].GetAttributeValue<string>("dependencyxml");
                if (dependencyxml == null)
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Dependency: ", CliLog.ColorGreen, name, CliLog.ColorWhite, " not found");
                    i++;
                    continue;
                }
                var xdoc = XDocument.Parse(dependencyxml);
                var webResources = (from x in xdoc.Descendants("Dependencies").Descendants("Dependency").Elements("Library")
                                    select new
                                    {
                                        name = x?.Attribute("name")?.Value
                                    }).ToList();
                var existing = dependencies.FirstOrDefault(d => d.webresources.Contains(name));
                if (existing == null)
                {
                    dependencies.Add(new Dependency
                    {
                        webresources = new List<string> { name },
                        dependencies = webResources.Select(w => w.name).ToList()
                    });
                }
                else
                {
                    var update = existing.dependencies;
                    update.AddRange(webResources.Select(w => w.name).ToList());
                    update = update.Distinct().ToList();
                    existing.dependencies = update;
                }
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Dependency: ", CliLog.ColorGreen, name, CliLog.ColorWhite, " dependencies");
                foreach (var dependency in dependencies.FirstOrDefault(d => d.webresources.Contains(name)).dependencies)
                {
                    CliLog.WriteLine(CliLog.ColorGreen, "\t", CliLog.ColorGreen, dependency);
                }
                i++;
            }
            return dependencies;
        }

        private List<string> DownloadWebResources()
        {
            var list = new List<string>();
            var fetchData = new
            {
                ismanaged = "0",
                uniquename = DownloadWebResourceJson.solution,
                name = DownloadWebResourceJson.prefix
            };
            var fetchXml = string.Empty;
            if (DownloadWebResourceJson.solution.Length > 0)
            {
                fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
    <filter type='and'>
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
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
      <condition attribute='name' operator='begins-with' value='{fetchData.name}'/>
    </filter>
    <order attribute='name' />
  </entity>
</fetch>";
            }
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
                throw new Exception("Not found any webresources to download");
            var downloadFiles = DownloadFiles(rows.Entities);

            var totalDownloadWebResources = downloadFiles.Count;
            var len = totalDownloadWebResources.ToString().Length;
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, totalDownloadWebResources, CliLog.ColorGreen, " webresources");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            //DELETE first
            foreach (var downloadFile in downloadFiles)
            {
                Utility.TryDeleteFile(downloadFile.FileName);
            }
            CliLog.WriteLine(CliLog.ColorRed, "   !!!   Deleted ", CliLog.ColorWhite, totalDownloadWebResources, CliLog.ColorRed, " existing files   !!!   ");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));

            var i = 1;
            foreach (var downloadFile in downloadFiles)
            {
                var isOk = DownloadWebResourceFile(downloadFile, i, totalDownloadWebResources);
                if (isOk)
                {
                    var shortFileName = downloadFile.FileName.Substring(CurrentDirectory.Length + 1);
                    list.Add(shortFileName);
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, shortFileName);
                }
                i++;
            }
            return list;
        }

        private class DownloadFile
        {
            public string FileName { get; set; }
            public string Content { get; set; }
            public string Name { get; set; }
            public Guid WebResourceId { get; set; }
        }

        private List<DownloadFile> DownloadFiles(DataCollection<Entity> entities)
        {
            var list = new List<DownloadFile>();
            foreach(var entity in entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var webresourcetype = (WebResourceWebResourceType)entity.GetAttributeValue<OptionSetValue>("webresourcetype").Value;
                var content = entity.GetAttributeValue<string>("content");
                var extension = GetExtension(webresourcetype);
                if (name.StartsWith("/")) name = name.Substring(1);
                if (name.StartsWith(DownloadWebResourceJson.prefix))
                    name = name.Substring(DownloadWebResourceJson.prefix.Length);
                if (name.StartsWith("/"))
                    name = name.Substring(1);
                else
                    name = DownloadWebResourceJson.prefix + name;
                if (name.EndsWith(extension))
                    name = name.Substring(0, name.Length - extension.Length);
                var fileName = $"{CurrentDirectory}\\{name.Replace("/", "\\")}{extension}";
                list.Add(new DownloadFile
                {
                    Content = content,
                    FileName = fileName,
                    Name = entity.GetAttributeValue<string>("name"),
                    WebResourceId = entity.Id
                });
            }
            return list;
        }

        List<DownloadFile> downloadedFiles = new List<DownloadFile>();

        private bool DownloadWebResourceFile(DownloadFile downloadFile, int i, int totalDownloadWebResources)
        {
            if (File.Exists(downloadFile.FileName))
            {
                var len = totalDownloadWebResources.ToString().Length;
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorRed, "Failed: ", CliLog.ColorGreen, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, downloadFile.FileName);
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

        private bool? _isSupportWebResourceDependency;
        private bool IsSupportWebResourceDependency
        {
            get
            {
                if (_isSupportWebResourceDependency != null) return _isSupportWebResourceDependency.Value;
                var request = new RetrieveVersionRequest();
                var response = (RetrieveVersionResponse)CrmServiceClient.Execute(request);
                var version = new Version(response.Version);
                _isSupportWebResourceDependency = version >= new Version("9.0");
                return _isSupportWebResourceDependency.Value;
            }
        }

    }
}
