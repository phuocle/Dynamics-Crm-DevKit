using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;
using System.IO;
using System;
using System.Text;
using System.Diagnostics;
using Microsoft.Xrm.Sdk.Query;

namespace PL.DynamicsCrm.DevKit.Cli
{
    class SolutionPackagerTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private SolutionPackager SolutionPackagerJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        public SolutionPackagerTask(CrmServiceClient crmServiceClient, string currentDirectory, SolutionPackager solutionPackagerJson, string version)
        {
            if (solutionPackagerJson.rootfolder != null)
            {
                currentDirectory = currentDirectory + "\\" + solutionPackagerJson.rootfolder;
            }
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            SolutionPackagerJson = solutionPackagerJson;
            Version = version;
            if (!Directory.Exists(Path.Combine(CurrentDirectory, SolutionPackagerJson.solutionzipfolder)))
            {
                Directory.CreateDirectory(Path.Combine(CurrentDirectory, SolutionPackagerJson.solutionzipfolder));
            }
            if (!Directory.Exists(Path.Combine(CurrentDirectory, SolutionPackagerJson.folder)))
            {
                Directory.CreateDirectory(Path.Combine(CurrentDirectory, SolutionPackagerJson.folder));
            }
            if (SolutionPackagerJson.logfolder != null)
            {
                if (!Directory.Exists(Path.Combine(CurrentDirectory, SolutionPackagerJson.folder, SolutionPackagerJson.logfolder)))
                {
                    Directory.CreateDirectory(Path.Combine(CurrentDirectory, SolutionPackagerJson.folder, SolutionPackagerJson.logfolder));
                }
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START SOLUTIONPACKAGER TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));

            var solution = GetSolutionFromCrm();
            Packger(solution);

            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END SOLUTIONPACKAGER TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private string CreateCommandArgs(string solutionFile)
        {
            var command = new StringBuilder();
            command.Append($"/action:{SolutionPackagerJson.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{CurrentDirectory}\\{SolutionPackagerJson.folder}\\{SolutionPackagerJson.solutiontype}\"");
            command.Append(" /clobber /nologo /localize /allowdelete:Yes /allowwrite:Yes");
            if (SolutionPackagerJson.mapfile != null)
            {
                var map = $"{CurrentDirectory}\\{SolutionPackagerJson.mapfile}";
                if (File.Exists(map))
                {
                    command.Append($" /map: \"{map}\"");
                }
            }
            if (SolutionPackagerJson.logfolder != null)
            {
                command.Append($" /log:\"{CurrentDirectory}\\{SolutionPackagerJson.folder}\\{SolutionPackagerJson.logfolder}\\{DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + SolutionPackagerJson.solutiontype + ".txt"}\"");
            }
            command.Append($" /packagetype:{SolutionPackagerJson.solutiontype}");
            return command.ToString();
        }

        private void Packger(string solutionFile)
        {
            var command = CreateCommandArgs(solutionFile);
            var path = "\"" + GetParentFolder(CurrentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\SolutionPackager.exe" + "\"";
            CliLog.WriteLine(CliLog.ColorGreen, "Executing Solution Packager");
            CliLog.WriteLine(CliLog.ColorCyan, "\t" + path);
            CliLog.WriteLine(CliLog.ColorCyan, "\t" + command);
            CliLog.WriteLine(CliLog.ColorGreen, "");
            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = $"{command}",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                }
            };
            process.Start();
            while (!process.StandardOutput.EndOfStream)
            {
                var line = process.StandardOutput.ReadLine();
                CliLog.WriteLine(CliLog.ColorWhite, line);
            }
            process.WaitForExit();
            CliLog.WriteLine(CliLog.ColorGreen, "Executed Solution Packager");
        }

        private string GetParentFolder(string currentDirectory)
        {
            var directory = new DirectoryInfo(currentDirectory);
            return directory.Parent != null ? directory.Parent.FullName : string.Empty;
        }

        private string CrmVersion
        {
            get
            {
                var fetchData = new
                {
                    uniquename = SolutionPackagerJson.solution
                };
                var fetchXml = $@"
<fetch>
  <entity name='solution'>
    <attribute name='version' />
    <filter type='and'>
      <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1) return "1.0.0.0";
                var solution = rows.Entities[0];
                return solution.GetAttributeValue<string>("version");
            }
        }

        private string GetSolutionFromCrm()
        {
            CliLog.WriteLine(CliLog.ColorGreen, $"Exporting {SolutionPackagerJson.solutiontype} solution: ", CliLog.ColorCyan, SolutionPackagerJson.solution, CliLog.ColorGreen, " to:");
            var fileName = FileHandler.FormatSolutionVersionString(SolutionPackagerJson.solution, System.Version.Parse(CrmVersion), SolutionPackagerJson.solutiontype);
            var solutionFile = Path.Combine(CurrentDirectory, SolutionPackagerJson.solutionzipfolder, DateTime.Now.ToString("yyyyMMdd") + "-" + fileName);
            CliLog.WriteLine(CliLog.ColorCyan, "\t" + solutionFile);
            var request = new ExportSolutionRequest
            {
                Managed = SolutionPackagerJson.solutiontype == "Managed",
                SolutionName = SolutionPackagerJson.solution
            };
            var response = (ExportSolutionResponse)CrmServiceClient.Execute(request);
            var tempFile = FileHandler.WriteTempFile(fileName, response.ExportSolutionFile);
            File.Copy(tempFile, solutionFile, true);
            CliLog.WriteLine(CliLog.ColorGreen, $"Exported {SolutionPackagerJson.solutiontype} solution: ", CliLog.ColorCyan);
            return solutionFile;
        }
    }
}
