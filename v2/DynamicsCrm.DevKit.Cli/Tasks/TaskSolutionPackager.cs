using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using DynamicsCrm.DevKit.Shared.Helper;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class ThreadWork
    {
        public static void SolutionPackagerDots()
        {
            CliLog.Write(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Exporting ");
            while (true)
            {
                CliLog.Write(CliLog.ColorWhite, ".");
                Thread.Sleep(1000);
            }
        }

        public static void Dot()
        {
            while (true)
            {
                CliLog.Write(CliLog.ColorWhite, ".");
                Thread.Sleep(1000);
            }
        }

    }

    public class TaskSolutionPackager
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[SOLUTION-PACKAGER]";
        private JsonSolutionPackager json;

        public TaskSolutionPackager(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            var solution = GetSolutionFromCrm();
            Packger(solution);

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solutiontype.Length == 0 || json.solutiontype == "???")
                throw new Exception($"{LOG} 'solutiontype' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solutiontype.ToLower() != "Managed".ToLower() && json.solutiontype.ToLower() != "Unmanaged".ToLower())
                throw new Exception($"{LOG} 'solutiontype' should be: 'Managed' or 'Unmanaged'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.folder.Length == 0 || json.folder == "???")
                throw new Exception($"{LOG} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.type.Length == 0 || json.type == "???")
                throw new Exception($"{LOG} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.type.ToLower() != "Extract".ToLower() && json.type.ToLower() != "Pack".ToLower())
                throw new Exception($"{LOG} 'type' should be: 'Extract' or 'Pack'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            if (json.mapfile != null && json.mapfile.Length > 0)
            {
                var map = $"{currentDirectory}\\{json.mapfile}";
                if (!File.Exists(map))
                    throw new Exception($"{LOG} mapfile '{map}' not exist");
            }
            return true;
        }

        private string GetSolutionFromCrm()
        {
            if (json.type.ToLower().Trim() == "Extract".ToLower())
            {
                var timer = Stopwatch.StartNew();
                var fileName = Utility.FormatSolutionVersionString(json.solution, System.Version.Parse(CrmVersion), json.solutiontype);
                var solutionFile = Path.Combine(currentDirectory, json.folder, "Solutions", fileName);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Export ", CliLog.ColorCyan, json.solutiontype, CliLog.ColorGreen, " solution: ", CliLog.ColorCyan, json.solution, CliLog.ColorGreen, " to: ", CliLog.ColorCyan, solutionFile);
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                var request = new ExportSolutionRequest
                {
                    Managed = json.solutiontype == "Managed",
                    SolutionName = json.solution
                };
                try
                {
                    var wait = new Thread(ThreadWork.SolutionPackagerDots);
                    wait.Start();
                    var response = (ExportSolutionResponse)crmServiceClient.Execute(request);
                    wait.Abort();
                    CliLog.WriteLine();
                    var tempFile = Utility.WriteTempFile(fileName, response.ExportSolutionFile);
                    var dir = Path.GetDirectoryName(solutionFile);
                    if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
                    File.Copy(tempFile, solutionFile, true);
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, $"Solution exported in  {timer.Elapsed:c}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return solutionFile;
                }
                catch (TimeoutException te)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(ConsoleColor.White, te.Message);
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(ConsoleColor.Red, "!!! [SOLUTION-PACKAGER] FAILED !!!");
                    throw;
                }
            }
            else
            {
                var fileName = Utility.FormatSolutionVersionString(json.solution, System.Version.Parse(CrmVersion), json.solutiontype);
                var solutionFile = Path.Combine(currentDirectory, json.folder, "Solutions", fileName);
                return solutionFile;
            }
        }

        private string CrmVersion
        {
            get
            {
                var fetchData = new
                {
                    uniquename = json.solution
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
                var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count != 1) return "1.0.0.0";
                var solution = rows.Entities[0];
                return solution.GetAttributeValue<string>("version");
            }
        }

        private void Packger(string solutionFile)
        {
            var command = CreateCommandArgs(solutionFile);
            var path = "\"" + GetParentFolder(currentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{arguments.Version}\content\bin\coretools\SolutionPackager.exe" + "\"";
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Executing ", CliLog.ColorRed, "Solution Packager");
            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, " " + path + " " + command);
            CliLog.WriteLine();
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, line);
            }
            process.WaitForExit();
        }

        private string GetParentFolder(string currentDirectory)
        {
            if (json.rootfolder.Length > 0)
                currentDirectory += "\\" + json.rootfolder;
            var directory = new DirectoryInfo(currentDirectory);
            if (directory.Parent == null) throw new Exception($"{LOG} Not found packages folder");
            if (Directory.Exists($"{directory.Parent.FullName}\\packages")) return directory.Parent.FullName;
            return GetParentFolder(directory.Parent.FullName);
        }

        private string CreateCommandArgs(string solutionFile)
        {
            var command = new StringBuilder();
            command.Append($"/action:{json.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{currentDirectory}\\{json.folder}\\{json.solutiontype}\"");
            command.Append(" /clobber /nologo /localize /allowdelete:Yes /allowwrite:Yes");
            if (json.mapfile != null)
            {
                var map = $"{currentDirectory}\\{json.mapfile}";
                if (File.Exists(map))
                {
                    command.Append($" /map:\"{map}\"");
                }
            }
            command.Append($" /log:\"{currentDirectory}\\{json.folder}\\log\\{DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + json.solutiontype + ".txt"}\"");
            command.Append($" /packagetype:{json.solutiontype}");
            return command.ToString();
        }
    }
}
