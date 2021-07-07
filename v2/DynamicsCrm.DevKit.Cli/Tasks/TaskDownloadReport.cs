using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using Microsoft.Xrm.Sdk;
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
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            var folder = Path.Combine(currentDirectory, json.solution);
            if (!Directory.Exists(folder))
                Directory.CreateDirectory(folder);
            else
            {
                var files = Directory.GetFiles(folder, "*.*", SearchOption.AllDirectories);
                if (files.Count() > 0)
                    throw new Exception($"{LOG} Folder '{folder}' have an exsiting file(s). Please delete all file(s) and try it again.");
            }

            ReadDownloadedReportFiles(folder);

            if (downloadedReportFiles.Count() == 0)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Not found any reports to download");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
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

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
        }

        private void ReadDownloadedReportFiles(string folder)
        {
            var fetchData = new
            {
                componenttype = "31",
                uniquename = json.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='filename' />
    <attribute name='bodytext' />
    <attribute name='languagecode' />
    <order attribute='filename' />
    <link-entity name='solutioncomponent' from='objectid' to='reportid' link-type='inner' alias='sc'>
      <filter type='and'>
        <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype/*31*/}'/>
      </filter>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename/*TestReport*/}'/>
        </filter>
      </link-entity>
    </link-entity>
    <link-entity name='languagelocale' from='localeid' to='languagecode' link-type='inner' alias='l'>
      <attribute name='language' />
    </link-entity>
  </entity>
</fetch>";

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var entity in rows.Entities)
            {
                var reportFolder = folder + "\\" + (entity.GetAttributeValue<AliasedValue>("l.language")?.Value ?? "English");
                downloadedReportFiles.Add(new DownloadFile
                {
                    Content = entity.GetAttributeValue<string>("bodytext"),
                    FileName = Path.Combine(reportFolder, entity.GetAttributeValue<string>("filename")),
                    Name = Path.GetFileName(Path.Combine(reportFolder, entity.GetAttributeValue<string>("filename")))
                });
            }
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution == "???" || (json.solution != null && json?.solution?.Trim().Length == 0))
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            return true;
        }
    }
}
