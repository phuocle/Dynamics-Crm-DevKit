using System;
using System.IO;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class DownloadWebResourceTask
    {
        public DownloadWebResourceTask(CrmServiceClient crmServiceClient, string currentDirectory, DownloadWebResource downloadWebResourceJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            DownloadWebResourceJson = downloadWebResourceJson;
            Version = version;
        }

        private CrmServiceClient CrmServiceClient { get; }
        private DownloadWebResource DownloadWebResourceJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }


        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START DOWNLOAD WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));

            DownloadWebResources();

            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END DOWNLOAD WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private void DownloadWebResources()
        {
            var fetchData = new
            {
                ismanaged = "0",
                uniquename = DownloadWebResourceJson.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='displayname' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
                throw new Exception("Not found any webresources to download");
            foreach(var row in rows.Entities)
            {
                DownloadWebResource(row);
            }
        }

        private void DownloadWebResource(Entity row)
        {
            var name = row.GetAttributeValue<string>("name"); //paz_/entities/Lead.form.js
            var displayname = row.GetAttributeValue<string>("displayname"); //paz_/entities/Lead.form.js
            var webresourcetype = (WebResourceWebResourceType)row.GetAttributeValue<OptionSetValue>("webresourcetype").Value;
            var content = row.GetAttributeValue<string>("content");
            //C:\sources\github\phuocle\Dynamics-Crm-DevKit\test\TestWebResources\WebProject
            if (!name.StartsWith(DownloadWebResourceJson.prefix)) {
                CliLog.WriteLine(CliLog.ColorGreen, "WebResource name: ", CliLog.ColorWhite, name, CliLog.ColorGreen, " not begin with: ", CliLog.ColorRed, DownloadWebResourceJson.prefix);
                return;
            }
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
            DownloadFile(fileName, content);
        }

        private void DownloadFile(string fileName, string content)
        {
            if (File.Exists(fileName)) Utility.TryDeleteFile(fileName);
            var directoryName = Path.GetDirectoryName(fileName);
            if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName ?? throw new InvalidOperationException());
            byte[] decode = Convert.FromBase64String(content);
            File.WriteAllBytes(fileName, decode);
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
