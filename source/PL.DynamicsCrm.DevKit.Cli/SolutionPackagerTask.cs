using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;
using System.IO;
using System;
using System.Text;
using System.Threading;
using System.Diagnostics;

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
                if (!Directory.Exists(Path.Combine(CurrentDirectory, SolutionPackagerJson.logfolder)))
                {
                    Directory.CreateDirectory(Path.Combine(CurrentDirectory, SolutionPackagerJson.logfolder));
                }
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "START SOLUTIONPACKAGER TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            var solution = GetSolutionFromCrm();
            Packger(solution);
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "END SOLUTIONPACKAGER TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
        }

        private string CreateCommandArgs(string solutionFile)
        {
            var command = new StringBuilder();
            command.Append($" /action:{SolutionPackagerJson.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{CurrentDirectory}\\{SolutionPackagerJson.solutionzipfolder}\"");
            command.Append(" /clobber");
            if (SolutionPackagerJson.mapfile != null)
            {
                //MapFile.Create(unpackSettings.SolutionPackageConfig, Path.Combine(unpackSettings.ProjectPath, ExtensionConstants.SolutionPackagerMapFile));
                //if (File.Exists(Path.Combine(unpackSettings.ProjectPath, ExtensionConstants.SolutionPackagerMapFile)))
                //    command.Append($" /map: \"{Path.Combine(unpackSettings.ProjectPath, ExtensionConstants.SolutionPackagerMapFile)}\"");
            }
            if (SolutionPackagerJson.logfolder != null)
            {
                command.Append($" /log:\"{Path.Combine(CurrentDirectory, SolutionPackagerJson.logfolder, DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + SolutionPackagerJson.solutiontype + ".txt")}\"");
            }
            command.Append($" /packagetype:{SolutionPackagerJson.solutiontype}");
            return command.ToString();
        }

        private void Packger(string solutionFile)
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, "Creating Command Args");
            var command = CreateCommandArgs(solutionFile);
            CliLog.WriteLine(CliLog.COLOR_CYAN, "\t" + command);
            CliLog.WriteLine(CliLog.COLOR_GREEN, "Created Command Args");
            int timeout = 60000;
            CliLog.WriteLine(CliLog.COLOR_GREEN, "Executing Solution Packager");

            using (Process process = new Process())
            {
                var processStartInfo = CreateProcessStartInfo(command);
                process.StartInfo = processStartInfo;
                process.StartInfo.WorkingDirectory = CurrentDirectory;

                StringBuilder output = new StringBuilder();
                StringBuilder errorDataReceived = new StringBuilder();

                using (AutoResetEvent outputWaitHandle = new AutoResetEvent(false))
                {
                    using (AutoResetEvent errorWaitHandle = new AutoResetEvent(false))
                    {
                        process.OutputDataReceived += (sender, e) =>
                        {
                            if (e.Data == null)
                                outputWaitHandle.Set();
                            else
                                output.AppendLine(e.Data);
                        };
                        process.ErrorDataReceived += (sender, e) =>
                        {
                            if (e.Data == null)
                                errorWaitHandle.Set();
                            else
                                errorDataReceived.AppendLine(e.Data);
                        };

                        process.Start();
                        process.BeginOutputReadLine();
                        process.BeginErrorReadLine();

                        if (process.WaitForExit(timeout) && outputWaitHandle.WaitOne(timeout) && errorWaitHandle.WaitOne(timeout))
                        {
                            if (process.ExitCode == 0)
                            {
                                return;
                            }
                        }
                        else
                        {
                            ;
                        }
                    }
                }
            }
            CliLog.WriteLine(CliLog.COLOR_GREEN, "Executed Solution Packager");
        }

        private ProcessStartInfo CreateProcessStartInfo(string command)
        {
            var processStartInfo = new ProcessStartInfo
            {
                FileName = "cmd",
                Arguments = $"/c \"\\bin\\coretools\\SolutionPackager.exe {command}\"",
                RedirectStandardError = true,
                RedirectStandardOutput = true,
                CreateNoWindow = true,
                UseShellExecute = false
            };
            return processStartInfo;
        }

        private string GetSolutionFromCrm()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, $"Exporting {SolutionPackagerJson.solutiontype} solution: ", CliLog.COLOR_CYAN, SolutionPackagerJson.solution);
            var fileName = FileHandler.FormatSolutionVersionString(SolutionPackagerJson.solution, System.Version.Parse(Version), SolutionPackagerJson.solutiontype);
            var solutionFile = Path.Combine(CurrentDirectory, SolutionPackagerJson.solutionzipfolder, fileName);
            CliLog.WriteLine(CliLog.COLOR_CYAN, "\t" + solutionFile);
            var request = new ExportSolutionRequest
            {
                Managed = SolutionPackagerJson.solutiontype == "Managed" ? true : false,
                SolutionName = SolutionPackagerJson.solution
            };
            var response = (ExportSolutionResponse)CrmServiceClient.Execute(request);

            string tempFile = FileHandler.WriteTempFile(fileName, response.ExportSolutionFile);
            File.Copy(tempFile, solutionFile, true);
            CliLog.WriteLine(CliLog.COLOR_GREEN, $"Exported {SolutionPackagerJson.solutiontype} solution: ", CliLog.COLOR_CYAN, SolutionPackagerJson.solution);
            return solutionFile;
        }

    }
}
