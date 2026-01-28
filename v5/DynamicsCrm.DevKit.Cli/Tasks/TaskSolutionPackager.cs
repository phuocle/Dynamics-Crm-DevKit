using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskSolutionPackager(CommandLineArgs arg, JsonSolutionPackager json) : ITask
    {
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonSolutionPackager Json { get; set; } = json;
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.solutionpackagers).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        private string Version { get; set; } = arg.Version;
        private string SolutionPackagerExe { get; set; }
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
                    SpectreLog.ActionError($"{TaskType} Invalid folder for Pack solution.");
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

            // Auto-detect version if not provided
            if (string.IsNullOrEmpty(Version))
            {
                Version = AutoDetectCoreToolsVersion(CurrentDirectory);
                if (string.IsNullOrEmpty(Version))
                {
                    SpectreLog.ActionError($"{TaskType} Cannot auto-detect Microsoft.CrmSdk.CoreTools version. Please ensure the package is installed in the packages folder or specify --version parameter.");
                    return false;
                }
                SpectreLog.ActionWithLevel0("AUTO-DETECT: ", $"Microsoft.CrmSdk.CoreTools {Version}");
            }

            if (!IsExistSolutionPackager(CurrentDirectory))
            {
                SpectreLog.ActionError($"{TaskType} Not found SolutionPackager.exe file.");
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

        /// <summary>
        /// Auto-detect Microsoft.CrmSdk.CoreTools version by scanning packages folder.
        /// Supports both old-style (Microsoft.CrmSdk.CoreTools.X.Y.Z) and SDK-style (microsoft.crmsdk.coretools\X.Y.Z) paths.
        /// Returns the latest version found or null if not found.
        /// </summary>
        private string AutoDetectCoreToolsVersion(string startDirectory)
        {
            var directory = startDirectory;
            while (!string.IsNullOrEmpty(directory))
            {
                var packagesFolder = Path.Combine(directory, "packages");
                if (Directory.Exists(packagesFolder))
                {
                    // Try SDK-style path first: packages\microsoft.crmsdk.coretools\X.Y.Z
                    var sdkStylePath = Path.Combine(packagesFolder, "microsoft.crmsdk.coretools");
                    if (Directory.Exists(sdkStylePath))
                    {
                        var versions = Directory.GetDirectories(sdkStylePath)
                            .Select(d => new DirectoryInfo(d).Name)
                            .OrderByDescending(v => v)
                            .ToList();

                        if (versions.Count > 0)
                        {
                            return versions.First();
                        }
                    }

                    // Fallback to old-style path: packages\Microsoft.CrmSdk.CoreTools.X.Y.Z
                    var coreToolsFolders = Directory.GetDirectories(packagesFolder, "Microsoft.CrmSdk.CoreTools.*")
                        .Select(d => new DirectoryInfo(d).Name)
                        .Where(n => n.StartsWith("Microsoft.CrmSdk.CoreTools."))
                        .Select(n => n.Substring("Microsoft.CrmSdk.CoreTools.".Length))
                        .OrderByDescending(v => v)
                        .ToList();

                    if (coreToolsFolders.Count > 0)
                    {
                        return coreToolsFolders.First();
                    }
                }
                var parentDir = new DirectoryInfo(directory)?.Parent?.FullName;
                if (parentDir == directory) break;
                directory = parentDir;
            }
            return null;
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
            SpectreLog.ActionCreated($"..{solutionFile.Substring(CurrentDirectory.Length)}", $"({timer.Elapsed:c})");
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

        private bool IsExistSolutionPackager(string currentDirectory)
        {
            // Try SDK-style path first: packages\microsoft.crmsdk.coretools\X.Y.Z\content\bin\coretools\SolutionPackager.exe
            var sdkStylePath = $@"packages\microsoft.crmsdk.coretools\{Version}\content\bin\coretools\SolutionPackager.exe";
            SolutionPackagerExe = Path.Combine(currentDirectory, sdkStylePath);
            if (File.Exists(SolutionPackagerExe))
            {
                return true;
            }

            // Fallback to old-style path: packages\Microsoft.CrmSdk.CoreTools.X.Y.Z\content\bin\coretools\SolutionPackager.exe
            var oldStylePath = $@"packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\SolutionPackager.exe";
            SolutionPackagerExe = Path.Combine(currentDirectory, oldStylePath);
            if (File.Exists(SolutionPackagerExe))
            {
                return true;
            }

            // Search parent directories
            var parentDirectory = new DirectoryInfo(currentDirectory)?.Parent?.FullName;
            if (parentDirectory == null) return false;
            return IsExistSolutionPackager(parentDirectory);
        }

        private string CreateCommandArgs(string solutionFile)
        {
            var command = new StringBuilder();
            command.Append($"/action:{Json.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{CurrentDirectory}\\{Json.folder}\\{Json.solutiontype}\"");
            command.Append(" /clobber /nologo /localize /allowdelete:Yes /allowwrite:Yes");
            if (Json.mapfile != null)
            {
                var map = $"{CurrentDirectory}\\{Json.mapfile}";
                if (File.Exists(map))
                {
                    command.Append($" /map:\"{map}\"");
                }
            }
            command.Append($" /log:\"{CurrentDirectory}\\{Json.folder}\\log\\{DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + Json.solutiontype + ".txt"}\"");
            command.Append($" /packagetype:{Json.solutiontype}");
            return command.ToString();
        }

        private string FormatSolutionVersionString(string solutionName, Version version, string solutionType)
        {
            var result = new StringBuilder();
            result.Append($"{solutionName}_");
            var build = "00000" + version.Build.ToString();
            build = build.Substring(build.Length - 4);
            result.Append($"{version.Major}.{version.Minor}.{build}.{version.Revision}");
            if (solutionType.ToLower().Trim() == "managed")
                result.Append("_managed");
            result.Append(".zip");
            return result.ToString();
        }

        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                // Log execution info
                SpectreLog.ActionWithLevel0("EXECUTE: ", $"SolutionPackager.exe {Version}");
                SpectreLog.ActionWithLevel1("ACTION: ", Json.type);
                SpectreLog.ActionWithLevel1("SOLUTION: ", Json.solution);
                SpectreLog.ActionWithLevel1("TYPE: ", Json.solutiontype);
                SpectreLog.ActionWithLevel1("FOLDER: ", $"..\\{Json.folder}\\{Json.solutiontype}");

                var solutionZipFile = await GetSolutionZipFileAsync();
                if (Json.type.ToLower().Trim() == "Pack".ToLower())
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

                await RunSolutionPackagerAsync(solutionZipFile);
            }

            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }

        private async Task RunSolutionPackagerAsync(string solutionZipFile)
        {
            var command = CreateCommandArgs(solutionZipFile);
            var path = "\"" + SolutionPackagerExe + "\"";

            SpectreLog.WriteWithLevel(LogLevel.Level0, path + " " + command);
            SpectreLog.WriteLine();

            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = command,
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
                        SpectreLog.ActionError(line);
                    }
                }
            });

            await Task.WhenAll(outputTask, errorTask);
            await Task.Run(() => process.WaitForExit());

            SpectreLog.WriteLine();

            if (process.ExitCode == 0)
            {
                if (Json.type.ToLower() == "extract")
                {
                    SpectreLog.ActionUpdated("Solution extracted successfully to", $"..\\{Json.folder}\\{Json.solutiontype}");
                }
                else
                {
                    SpectreLog.ActionUpdated("Solution packed successfully");
                }
            }
            else
            {
                SpectreLog.ActionError($"SolutionPackager exited with code {process.ExitCode}");
            }
        }
    }
}