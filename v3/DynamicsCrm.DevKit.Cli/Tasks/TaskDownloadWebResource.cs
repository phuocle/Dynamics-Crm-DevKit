using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;
using System.Linq;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDownloadWebResource : ITask
    {
        public TaskDownloadWebResource(CommandLineArgs arg, JsonDownloadWebResource json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.downloadwebresources).ToUpper()}]";
        public CrmServiceClient CrmServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonDownloadWebResource Json { get; set; }
        public bool IsValid()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (!XrmHelper.IsExistSolution(CrmServiceClient, Json.solution).IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            var folder = Path.Combine(CurrentDirectory, Json.solution);
            if (!Directory.Exists(folder))
                Directory.CreateDirectory(folder);
            else
            {
                var files = Directory.GetFiles(folder, "*.*", SearchOption.AllDirectories);
                if (files.Count() > 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Folder '{folder}' have an exsiting file(s). Please delete all file(s) and try it again.");
                    return false;
                }
            }
            return true;
        }
        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (IsValid())
            {
                var webResourcesFiles = XrmHelper.GetWebResourcesBySolution(CrmServiceClient, Json.solution);
                if (webResourcesFiles.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any webresource to download");
                }
                else
                {
                    var totalDownloadFiles = webResourcesFiles.Count;
                    var len = totalDownloadFiles.ToString().Length;
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalDownloadFiles, ConsoleColor.Green, " webresources");
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    var i = 1;
                    foreach (var webResourceFile in webResourcesFiles)
                    {
                        var fileName = Path.Combine(CurrentDirectory, Json.solution, webResourceFile.FileName);
                        var directoryName = Path.GetDirectoryName(fileName);
                        if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName ?? throw new InvalidOperationException());
                        byte[] decode = Convert.FromBase64String(webResourceFile.Content);
                        File.WriteAllBytes(fileName, decode);
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Downloaded, ConsoleColor.White, webResourceFile.FileName, ConsoleColor.Green, " to: ", ConsoleColor.White, ".." + fileName.Substring(CurrentDirectory.Length));
                        i++;
                    }
                }
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
    }
}
