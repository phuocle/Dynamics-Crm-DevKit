using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDownloadReport
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[DOWNLOAD-REPORT]";
        private JsonDownloadReport json;
        private List<DownloadFile> downloadedReportFiles = null;
        public TaskDownloadReport(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .downloadreports.FirstOrDefault(x => x.profile == arguments.Profile);
            downloadedReportFiles = new List<DownloadFile>();
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine();

            if (!IsValid()) return;

            var folder = Path.Combine(currentDirectory, json.folder);
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            ReadDownloadedReportFiles(folder);

            if (downloadedReportFiles.Count() == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Not found any reports to download");
                CliLog.WriteLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
                return;
            }
            var totalDownloadFiles = downloadedReportFiles.Count;
            var len = totalDownloadFiles.ToString().Length;
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Found: ", CliLog.ColorYellow, totalDownloadFiles, CliLog.ColorGreen, " reports");

            var i = 1;
            foreach (var downloadFile in downloadedReportFiles)
            {
                Utility.ForceWriteAllText(downloadFile.FileName, downloadFile.Content);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, string.Format("{0,0}{1," + len + "}", "", i) + ": ", CliLog.ColorWhite, "Downloaded ", CliLog.ColorCyan, downloadFile.Name, CliLog.ColorWhite, " to: ", CliLog.ColorGreen, downloadFile.FileName);
                i++;
            }

            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
        }

        private void ReadDownloadedReportFiles(string folder)
        {
            var fetchXml = string.Empty;
            if (json.solution.Length == 0)
            {

                var fetchData = new
                {
                    ismanaged = "0"
                };
                fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='filename' />
    <attribute name='bodytext' />
    <filter>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
    </filter>
    <order attribute='filename' />
  </entity>
</fetch>";
            }
            else
            {
                var fetchData = new
                {
                    ismanaged = "0",
                    componenttype = "31",
                    uniquename = json.solution
                };
                fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='filename' />
    <attribute name='bodytext' />
    <filter>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
    </filter>
    <order attribute='filename' />
    <link-entity name='solutioncomponent' from='objectid' to='reportid' link-type='inner' alias='sc'>
      <filter type='and'>
        <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/>
      </filter>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            }
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var entity in rows.Entities)
            {
                downloadedReportFiles.Add(new DownloadFile
                {
                    Content = entity.GetAttributeValue<string>("bodytext"),
                    FileName = Path.Combine(folder, entity.GetAttributeValue<string>("filename")),
                    Name = Path.GetFileName(Path.Combine(folder, entity.GetAttributeValue<string>("filename")))
                });
            }
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.folder.Length == 0 || json.folder == "???")
                throw new Exception($"{LOG} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }
    }
}
