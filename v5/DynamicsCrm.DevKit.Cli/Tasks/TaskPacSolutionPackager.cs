using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Diagnostics;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskPacSolutionPackager(CommandLineArgs arg, JsonSolutionPackager json) : ITask
    {
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonSolutionPackager Json { get; set; } = json;
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.solutionpackagers).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        private string SolutionXmlFile => $"{CurrentDirectory}\\{Json.folder}\\{Json.solutiontype}\\Other\\Solution.xml";

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solutiontype == "???" || (Json.solutiontype != null && Json?.solutiontype?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'solutiontype' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solutiontype.ToLower() != "Managed".ToLower() &&
                Json.solutiontype.ToLower() != "Unmanaged".ToLower() &&
                Json.solutiontype.ToLower() != "Both".ToLower())
            {
                SpectreLog.ActionError($"{TaskType} 'solutiontype' should be: 'Managed' or 'Unmanaged' or 'Both'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.folder == "???" || (Json.folder != null && Json?.folder?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type == "???" || (Json.folder != null && Json?.type?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type.ToLower() != "Extract".ToLower() &&
                Json.type.ToLower() != "Pack".ToLower())
            {
                SpectreLog.ActionError($"{TaskType} 'type' should be: 'Extract' or 'Pack'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type.ToLower() == "Pack".ToLower())
            {
                if (!File.Exists(SolutionXmlFile))
                {
                    SpectreLog.ActionError($"{TaskType} Invalid folder for Pack solution: {SolutionXmlFile}");
                    return false;
                }
            }
            if (Json.mapfile != null && Json.mapfile.Length != 0)
            {
                var mapfile = Path.Combine(CurrentDirectory, Json.mapfile);
                if (!File.Exists(mapfile))
                {
                    SpectreLog.ActionError($"{TaskType} mapfile '{mapfile}' not exist");
                    return false;
                }
            }

            // Check if pac is installed
            if (!IsPacInstalled())
            {
                SpectreLog.ActionError($"{TaskType} 'pac' command not found.");
                SpectreLog.WriteLine();
                SpectreLog.WriteLine("Please install Power Platform CLI by running the following command:");
                SpectreLog.WriteLine();
                var installCmd = "dotnet tool install --global Microsoft.PowerApps.CLI.Tool";
                SpectreLog.ActionWithLevel1(installCmd);
                SpectreLog.WriteLine();
                SpectreLog.ActionWithLevel1("Ref: https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction");
                return false;
            }

            if (Json.type.ToLower() == "Extract".ToLower())
            {
                (IsOk, SolutionId, SolutionPrefix) = await XrmHelper.IsExistSolutionAsync(ServiceClient, Json.solution);
                if (!IsOk)
                {
                    SpectreLog.ActionError($"{TaskType} solution '{Json.solution}' not exist");
                    return false;
                }
            }
            return true;
        }

        private bool IsPacInstalled()
        {
            try
            {
                var process = new Process
                {
                    StartInfo = new ProcessStartInfo("pac", "help")
                    {
                        UseShellExecute = false,
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        CreateNoWindow = true
                    }
                };
                process.Start();
                process.WaitForExit();
                return process.ExitCode == 0;
            }
            catch
            {
                return false;
            }
        }

        private async Task<string> GetSolutionZipFileAsync()
        {
            if (Json.type.ToLower().Trim() == "Extract".ToLower())
            {
                if (Json.solutiontype.ToLower().Trim() == "Both".ToLower())
                {
                    await ExportSolutionAsync("Managed");
                    return await ExportSolutionAsync("Unmanaged");
                }
                else
                {
                    return await ExportSolutionAsync(Json.solutiontype);
                }
            }
            else
            {
                var crmVersion = await GetCrmVersionFromSolutionFolderAsync();
                var fileName = FormatSolutionVersionString(Json.solution, System.Version.Parse(crmVersion), Json.solutiontype);
                var solutionFile = Path.Combine(CurrentDirectory, Json.folder, "Solutions-Pack", fileName);
                return solutionFile;
            }
        }

        private async Task<string> ExportSolutionAsync(string solutionType)
        {
            var timer = Stopwatch.StartNew();
            var request = new ExportSolutionRequest
            {
                Managed = solutionType.ToLower() == "Managed".ToLower(),
                SolutionName = Json.solution
            };

            SpectreLog.ActionWithLevel0(CliAction.EXPORT, $"{solutionType} solution {Json.solution}");

            // Need to get CRM version for filename
            var crmVersion = await GetCrmVersionFromInstanceAsync();
            var response = (ExportSolutionResponse)await ServiceClient.ExecuteAsync(request);

            var fileName = FormatSolutionVersionString(Json.solution, System.Version.Parse(crmVersion), Json.solutiontype);
            var solutionFile = Path.Combine(CurrentDirectory, Json.folder, "Solutions-Extract", fileName);
            if (solutionType.ToLower() == "Managed".ToLower())
                solutionFile = $"{Path.GetDirectoryName(solutionFile)}\\{Path.GetFileNameWithoutExtension(solutionFile)}_managed.zip";

            var tempFile = await FileHelper.WriteTempFileAsync(fileName, response.ExportSolutionFile);
            var dir = Path.GetDirectoryName(solutionFile);
            if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
            File.Copy(tempFile, solutionFile, true);

            timer.Stop();
            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"..{solutionFile.Substring(CurrentDirectory.Length)}", $"({timer.Elapsed:c})");
            return solutionFile;
        }

        private async Task<string> GetCrmVersionFromInstanceAsync()
        {
            var fetchData = new
            {
                uniquename = Json.solution
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return "1.0.0.0";
            var solution = rows.Entities[0];
            return solution.GetAttributeValue<string>("version");
        }

        private async Task<string> GetCrmVersionFromSolutionFolderAsync()
        {
            string pattern = @"<Version>\d+\.\d+\.\d+\.\d+<\/Version>";
            RegexOptions options = RegexOptions.Multiline;
            var fileContent = await FileHelper.ReadAllTextAsync(SolutionXmlFile);
            foreach (Match m in Regex.Matches(fileContent, pattern, options))
            {
                var version = m.Value;
                version = version.Replace("<Version>", string.Empty).Replace("</Version>", string.Empty);
                return version;
            }
            return "1.0.0.0";
        }

        private string FormatSolutionVersionString(string solutionName, Version version, string solutionType)
        {
            var result = "";
            result += $"{solutionName}_";
            var build = "00000" + version.Build.ToString();
            build = build.Substring(build.Length - 4);
            result += $"{version.Major}.{version.Minor}.{build}.{version.Revision}";
            if (solutionType.ToLower().Trim() == "managed")
                result += "_managed";
            result += ".zip";
            return result;
        }

        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                var action = Json.type.ToLower();
                SpectreLog.ActionWithLevel0("EXECUTE: ", $"pac solution {action}");
                SpectreLog.ActionWithLevel1("ACTION: ", Json.type);
                SpectreLog.ActionWithLevel1("SOLUTION: ", Json.solution);
                SpectreLog.ActionWithLevel1("TYPE: ", Json.solutiontype);
                SpectreLog.ActionWithLevel1("FOLDER: ", $"..\\{Json.folder}\\{Json.solutiontype}");

                var solutionZipFile = await GetSolutionZipFileAsync();

                // For Pack action, log output
                if (action == "pack")
                {
                    if (Json.solutiontype.ToLower().Trim() == "Both".ToLower())
                    {
                        SpectreLog.ActionWithLevel1("OUTPUT: ", ".." + solutionZipFile.Substring(CurrentDirectory.Length));
                        var solutionZipFileManaged = $"{Path.GetDirectoryName(solutionZipFile)}\\{Path.GetFileNameWithoutExtension(solutionZipFile)}_managed.zip";
                        SpectreLog.ActionWithLevel1("OUTPUT: ", ".." + solutionZipFileManaged.Substring(CurrentDirectory.Length));
                    }
                    else
                    {
                        SpectreLog.ActionWithLevel1("OUTPUT: ", ".." + solutionZipFile.Substring(CurrentDirectory.Length));
                    }
                }

                await RunPacAsync(solutionZipFile);
            }

            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }

        private async Task RunPacAsync(string solutionZipFile)
        {
            // Prepare arguments
            var action = Json.type.ToLower(); // extract or pack
            if (action == "extract") action = "unpack"; // pac uses 'unpack' instead of 'extract'

            var args = $"solution {action}";
            args += $" --zipfile \"{solutionZipFile}\"";
            args += $" --folder \"{Path.Combine(CurrentDirectory, Json.folder, Json.solutiontype)}\"";

            // Map package type
            var packageType = Json.solutiontype; // Managed, Unmanaged, Both
            args += $" --packageType {packageType}";

            args += " --allowDelete";
            args += " --allowWrite";
            // args += " --clobber"; // pac doesn't seem to have clobber, allowWrite/allowDelete should suffice

            if (Json.mapfile != null)
            {
                var map = $"{CurrentDirectory}\\{Json.mapfile}";
                if (File.Exists(map))
                {
                    args += $" --map \"{map}\"";
                }
            }

            SpectreLog.ActionWithLevel0($"pac {args}");
            SpectreLog.WriteLine();

            var process = new Process
            {
                StartInfo = new ProcessStartInfo("pac", args)
                {
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                }
            };

            process.Start();

            // Read output and error asynchronously
            var outputTask = Task.Run(async () =>
            {
                string line;
                while ((line = await process.StandardOutput.ReadLineAsync()) != null)
                {
                    if (!string.IsNullOrWhiteSpace(line))
                    {
                        SpectreLog.WriteProcessOutput(line);
                    }
                }
            });

            var errorTask = Task.Run(async () =>
            {
                string line;
                while ((line = await process.StandardError.ReadLineAsync()) != null)
                {
                    if (!string.IsNullOrWhiteSpace(line))
                    {
                        // Some tools output info to stderr, check content
                        if (line.Contains("Error") || line.Contains("Exception"))
                             SpectreLog.ActionError(line);
                        else
                             SpectreLog.WriteProcessOutput(line);
                    }
                }
            });

            await Task.WhenAll(outputTask, errorTask);
            await Task.Run(() => process.WaitForExit());

            SpectreLog.WriteLine();

            if (process.ExitCode == 0)
            {
                SpectreLog.ActionWithLevel0(CliAction.UPDATED, $"PAC solution {action} completed successfully");
            }
            else
            {
                SpectreLog.ActionError($"PAC exited with code {process.ExitCode}");
            }
        }
    }
}
