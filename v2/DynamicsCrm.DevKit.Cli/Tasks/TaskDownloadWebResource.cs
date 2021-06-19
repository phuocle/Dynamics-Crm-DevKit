using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using DynamicsCrm.DevKit.Shared.Helper;

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

        private string Prefix = string.Empty;

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
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "[DOWNLOAD-WEBRESOURCES]");
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            DownloadWebResources();

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "[DOWNLOAD-WEBRESOURCES]");
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            Prefix = prefix;
            return true;
        }

        private void DownloadWebResources()
        {
            var fetchData = new
            {
                uniquename = json.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
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

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
                throw new Exception("Not found any webresources to download");
            var downloadFiles = DownloadFiles(rows.Entities);

            var totalDownloadWebResources = downloadFiles.Count;
            var len = totalDownloadWebResources.ToString().Length;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorYellow, totalDownloadWebResources, CliLog.ColorGreen, " webresources");
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            foreach (var downloadFile in downloadFiles)
            {
                Utility.TryDeleteFile(downloadFile.FileName);
            }

            var i = 1;
            foreach (var downloadFile in downloadFiles)
            {
                var isOk = DownloadWebResourceFile(downloadFile, i, totalDownloadWebResources);
                if (isOk)
                {
                    var shortFileName = downloadFile.FileName.Substring(currentDirectory.Length + 1);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded ", CliLog.ColorGreen, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, shortFileName);
                }
                i++;
            }
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
                if (name.EndsWith(extension)) name = name.Substring(0, name.Length - extension.Length);
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
    }
}
