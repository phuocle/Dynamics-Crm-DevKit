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

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskPortal
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[PORTAL]";
        private JsonPortal json;
        private List<string> downloadedFiles = null;

        public TaskPortal(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .portals.FirstOrDefault(x => x.profile == arguments.Profile);
            downloadedFiles = new List<string>();
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "PORTAL");

            if (!IsValid()) return;

            //DownloadEntityForm();
            //DownloadEntityList();
            //DownloadWebFile();
            //DownloadWebPage();

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "PORTAL");
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.name.Length == 0 || json.name == "???")
                throw new Exception($"{LOG} 'name' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }

        private Guid _webSiteId = Guid.Empty;
        private Guid WebSiteId
        {
            get
            {
                if (_webSiteId != Guid.Empty) return _webSiteId;
                var fetchData = new
                {
                    adx_name = json.name
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
                var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1)
                    throw new Exception("Can not found the WebSite name in the DynamicsCrm.DevKit.Cli.json");
                _webSiteId = rows.Entities[0].Id;
                return _webSiteId;
            }
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            var folder = Path.Combine(currentDirectory, "Web File");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count();
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Processing Web Page ...");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " web page");
            var rows2 = (from entity in rows.Entities
                         select new
                         {
                             adx_name = entity.GetAttributeValue<string>("adx_name") ?? string.Empty,
                             adx_customjavascript = entity.GetAttributeValue<string>("adx_customjavascript") ?? string.Empty,
                             adx_customcss = entity.GetAttributeValue<string>("adx_customcss") ?? string.Empty,
                             adx_copy = entity.GetAttributeValue<string>("adx_copy") ?? string.Empty,
                             adx_summary = entity.GetAttributeValue<string>("adx_summary") ?? string.Empty
                         }).ToList();
            foreach (var row in rows2)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            var folder = Path.Combine(currentDirectory, "Web File");
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
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Processing Web File ...");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " web file");
            foreach (var row in rows2)
            {
                if (check.Contains(row.adx_webfileid)) continue;
                var file = Path.Combine(folder, $"{row.filename}");
                var extension = Path.GetExtension(file);
                file = Path.Combine(folder, $"{row.adx_name}{extension}");
                var shortFile = file.Substring(currentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                byte[] content = Convert.FromBase64String(row.documentbody);
                File.WriteAllBytes(file, content);
                downloadedFiles.Add(file);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            var folder = Path.Combine(currentDirectory, "Entity Form");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count;
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Processing Entity Form ...");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " entity form");
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("adx_name");
                if (name == null) continue;
                var file = Path.Combine(folder, $"{name}.js");
                var shortFile = file.Substring(currentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                var script = entity.GetAttributeValue<string>("adx_registerstartupscript") ?? string.Empty;
                downloadedFiles.Add(file);
                Utility.ForceWriteAllText(file, script);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;
            var folder = Path.Combine(currentDirectory, "Entity List");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var total = rows.Entities.Count;
            var len = total.ToString().Length;
            var i = 1;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Processing Entity List ...");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorRed, total, CliLog.ColorGreen, " entity list");
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("adx_name");
                if (name == null) continue;
                var file = Path.Combine(folder, $"{name}.js");
                var shortFile = file.Substring(currentDirectory.Length + 1);
                if (File.Exists(file)) Utility.TryDeleteFile(file);
                var script = entity.GetAttributeValue<string>("adx_registerstartupscript") ?? string.Empty;
                downloadedFiles.Add(file);
                Utility.ForceWriteAllText(file, script);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded: ", CliLog.ColorGreen, shortFile);
                i++;
            }
        }
    }
}
