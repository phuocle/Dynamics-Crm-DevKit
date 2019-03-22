using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class PortalTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private Portal PortalJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        private Guid _webSiteId = Guid.Empty;
        private Guid WebSiteId
        {
            get
            {
                if (_webSiteId != Guid.Empty) return _webSiteId;
                var fetchData = new
                {
                    adx_name = PortalJson.name
                };
                var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='adx_website'>
    <attribute name='adx_websiteid'/>
    <filter type='and'>
      <condition attribute='adx_name' operator='eq' value='{fetchData.adx_name}'/>
    </filter>
  </entity>
</fetch>
";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1)
                    throw new Exception("Can not found the WebSite name in the PL.DynamicsCrm.DevKit.Cli.json");
                _webSiteId = rows.Entities[0].Id;
                return _webSiteId;
            }
        }
        private List<string> DownloadedFiles { get; set; }

        public PortalTask(CrmServiceClient crmServiceClient, string currentDirectory, Portal portalJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            PortalJson = portalJson;
            Version = version;
            DownloadedFiles = new List<string>();
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START DOWNLOAD PORTAL WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (PortalJson.name.Length == 0 || PortalJson.name == "???") throw new Exception("No name found in download portal webresources profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            DownloadEntityForm();
            DownloadEntityList();
            DownloadWebFile();
            DownloadWebPage();
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END DOWNLOAD PORTAL WEBRESOURCES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private void DownloadWebPage()
        {
            var fetchData = new
            {
                adx_websiteid = WebSiteId
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='adx_webpage'>
    <attribute name='adx_webpageid'/>
    <attribute name='adx_name'/>
    <attribute name='adx_customjavascript'/>
    <attribute name='adx_customcss'/>
    <attribute name='adx_copy'/>
    <attribute name='adx_summary'/>
    <order attribute='adx_name' descending='false'/>
    <filter type='and'>
      <condition attribute='adx_websiteid' operator='eq' value='{fetchData.adx_websiteid}'/>
      <condition attribute='adx_rootwebpageid' operator='not-null'/>
    </filter>
  </entity>
</fetch>
";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var folder = Path.Combine(CurrentDirectory, "Web File");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count();
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorGreen, "Processing Web Page ...");
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " web page");
            var rows2 = (from entity in rows.Entities
                         select new
                         {
                             adx_name = entity.GetAttributeValue<string>("adx_name") ?? string.Empty,
                             adx_customjavascript = entity.GetAttributeValue<string>("adx_customjavascript") ?? string.Empty,
                             adx_customcss = entity.GetAttributeValue<string>("adx_customcss") ?? string.Empty,
                             adx_copy = entity.GetAttributeValue<string>("adx_copy") ?? string.Empty,
                             adx_summary = entity.GetAttributeValue<string>("adx_summary") ?? string.Empty
                         }).ToList();
            foreach(var row in rows2)
            {

                i++;
            }

        }

        private void DownloadWebFile()
        {
            var fetchData = new
            {
                adx_websiteid = WebSiteId
            };
            var fetchXml = $@"
<fetch>
  <entity name='annotation'>
    <attribute name='filename' />
    <attribute name='mimetype' />
    <attribute name='documentbody' />
    <attribute name='modifiedon' />
    <order attribute='annotationid' />
    <link-entity name='adx_webfile' from='adx_webfileid' to='objectid' alias='wf'>
      <attribute name='adx_name' />
      <attribute name='adx_webfileid' />
      <filter type='and'>
        <condition attribute='adx_websiteid' operator='eq' value='{fetchData.adx_websiteid}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var folder = Path.Combine(CurrentDirectory, "Web File");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var rows2 = from entity in rows.Entities
                        select new
                        {
                            filename = entity.GetAttributeValue<string>("filename") ?? string.Empty,
                            documentbody = entity.GetAttributeValue<string>("documentbody") ?? string.Empty,
                            modifiedon = entity.GetAttributeValue<DateTime>("modifiedon"),
                            adx_name = (string)entity.GetAttributeValue<AliasedValue>("wf.adx_name")?.Value ?? string.Empty,
                            adx_webfileid = ((Guid)entity.GetAttributeValue<AliasedValue>("wf.adx_webfileid").Value).ToString()
                        };
            var total = (from row2 in rows2 select row2.adx_webfileid).Distinct().Count();
            var len = total.ToString().Length;
            var check = new List<string>();
            rows2 = rows2.OrderBy(o => o.adx_webfileid).ThenByDescending(o => o.modifiedon).ToList();
            var i = 1;
            CliLog.WriteLine(CliLog.ColorGreen, "Processing Web File ...");
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " web file");
            foreach (var row in rows2)
            {
                if (check.Contains(row.adx_webfileid)) continue;
                var file = Path.Combine(folder, $"{row.filename}");
                var extension = Path.GetExtension(file);
                file = Path.Combine(folder, $"{row.adx_name}{extension}");
                var shortFile = file.Substring(CurrentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                byte[] content = Convert.FromBase64String(row.documentbody);
                File.WriteAllBytes(file, content);
                DownloadedFiles.Add(file);
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
                check.Add(row.adx_webfileid);
                i++;
            }
        }

        private void DownloadEntityForm()
        {
            var fetchData = new
            {
                adx_websiteid = WebSiteId
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='adx_entityform'>
    <attribute name='adx_registerstartupscript'/>
    <attribute name='adx_name'/>
    <order attribute='adx_name' descending='false'/>
    <filter type='and'>
      <condition attribute='adx_websiteid' operator='eq' value='{fetchData.adx_websiteid}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            var folder = Path.Combine(CurrentDirectory, "Entity Form");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count;
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorGreen, "Processing Entity Form ...");
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " entity form");
            foreach(var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("adx_name");
                if (name == null) continue;
                var file = Path.Combine(folder, $"{name}.js");
                var shortFile = file.Substring(CurrentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                var script = entity.GetAttributeValue<string>("adx_registerstartupscript") ?? string.Empty;
                DownloadedFiles.Add(file);
                File.WriteAllText(file, script);
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
                i++;
            }
        }

        private void DownloadEntityList()
        {
            var fetchData = new
            {
                adx_websiteid = WebSiteId
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='adx_entitylist'>
    <attribute name='adx_registerstartupscript'/>
    <attribute name='adx_name'/>
    <order attribute='adx_name' descending='false'/>
    <filter type='and'>
      <condition attribute='adx_websiteid' operator='eq' value='{fetchData.adx_websiteid}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var folder = Path.Combine(CurrentDirectory, "Entity List");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count;
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorGreen, "Processing Entity List ...");
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " entity list");
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("adx_name");
                if (name == null) continue;
                var file = Path.Combine(folder, $"{name}.js");
                var shortFile = file.Substring(CurrentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                var script = entity.GetAttributeValue<string>("adx_registerstartupscript") ?? string.Empty;
                DownloadedFiles.Add(file);
                File.WriteAllText(file, script);
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
                i++;
            }
        }
    }
}
