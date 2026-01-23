using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskProxyType(CommandLineArgs arg, JsonProxyType json) : ITask
    {
        private const string ENVIRONMENT_ENTITIES = "DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities";

        public CommandLineArgs Arg { get; set; } = arg;
        public JsonProxyType Json { get; set; } = json;

        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.proxytypes).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        private string Version { get; set; } = arg.Version;
        private string CrmSvcUtil { get; set; }
        private string Connection { get; set; } = arg.Connection;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.@namespace == "???" || (Json.@namespace != null && Json?.@namespace?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'namespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.output == "???" || (Json.output != null && Json?.output?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'output' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
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
                SpectreLog.ActionWithLevel(LogLevel.Level0, "AUTO-DETECT: ", $"Microsoft.CrmSdk.CoreTools", Version);
            }

            if (!FindCrmSvcUtil(CurrentDirectory))
            {
                SpectreLog.ActionError($"{TaskType} Not found CrmSvcUtil.exe file.");
                return false;
            }
            await Helper.DelayAsync(1);
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

        private bool FindCrmSvcUtil(string currentDirectory)
        {
            // Try SDK-style path first: packages\microsoft.crmsdk.coretools\X.Y.Z\content\bin\coretools\CrmSvcUtil.exe
            var sdkStylePath = $@"packages\microsoft.crmsdk.coretools\{Version}\content\bin\coretools\CrmSvcUtil.exe";
            CrmSvcUtil = Path.Combine(currentDirectory, sdkStylePath);
            if (File.Exists(CrmSvcUtil))
            {
                return true;
            }

            // Fallback to old-style path: packages\Microsoft.CrmSdk.CoreTools.X.Y.Z\content\bin\coretools\CrmSvcUtil.exe
            var oldStylePath = $@"packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\CrmSvcUtil.exe";
            CrmSvcUtil = Path.Combine(currentDirectory, oldStylePath);
            if (File.Exists(CrmSvcUtil))
            {
                return true;
            }

            // Search parent directories
            var parentDirectory = new DirectoryInfo(currentDirectory)?.Parent?.FullName;
            if (parentDirectory == null) return false;
            return FindCrmSvcUtil(parentDirectory);
        }

        private async Task CopyExtensionDllAsync()
        {
            await Helper.DelayAsync(0);
            var fileExecuting = Assembly.GetExecutingAssembly().Location;
            var fiFileExecuting = new FileInfo(fileExecuting);
            var fileCrmSvcUtilExtension = Path.Combine(fiFileExecuting.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileCrmSvcUtilExtension)) throw new Exception("Not found DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            var fiCrmSvcUtil = new FileInfo(CrmSvcUtil);
            var fileToCopy = Path.Combine(fiCrmSvcUtil.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileToCopy))
            {
                File.Copy(fileCrmSvcUtilExtension, fileToCopy);
                SpectreLog.ActionCreated($"Copied DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll to CrmSvcUtil directory");
            }
        }

        private string CreateCommandArgs()
        {
            var command = new StringBuilder();
            // Only use /interactivelogin for Interactive or DeviceCode auth types
            // For ClientSecret or connection string, use /connectionstring parameter
            if (!string.IsNullOrEmpty(Arg.AuthType) && 
                (Arg.AuthType.Equals("Interactive", StringComparison.OrdinalIgnoreCase) ||
                 Arg.AuthType.Equals("DeviceCode", StringComparison.OrdinalIgnoreCase)))
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                // Use connection string for ClientSecret or traditional connection string auth
                var crmConn = Helper.ParseConnectionString(Connection);
                var decryptedConnString = Helper.BuildConnectionString(crmConn);
                command.Append($"/connectionstring:\"{decryptedConnString}\" ");
            }
            command.Append($"/nologo ");
            command.Append($"/SuppressGeneratedCodeAttribute ");
            command.Append($"/emitfieldsclasses ");
            command.Append($"/generateGlobalOptionSets ");
            command.Append($"/namespace:\"{Json.@namespace}\" ");
            if (Json.entities != null && Json.entities.Length > 0)
            {
                if (Json.entities != "*" && Json.entities.ToLower() != "all")
                {
                    command.Append($"/codewriterfilter:\"DynamicsCrm.DevKit.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.CrmSvcUtilExtensions\" ");
                }
            }
            command.Append($"/out:\"{Json.output}\"");
            return command.ToString();
        }

        private string CreateCommandArgsLog()
        {
            var command = new StringBuilder();
            // Only use /interactivelogin for Interactive or DeviceCode auth types
            if (!string.IsNullOrEmpty(Arg.AuthType) && 
                (Arg.AuthType.Equals("Interactive", StringComparison.OrdinalIgnoreCase) ||
                 Arg.AuthType.Equals("DeviceCode", StringComparison.OrdinalIgnoreCase)))
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                command.Append($"/connectionstring:\"{Helper.BuildConnectionStringLog(Connection)}\" ");
            }
            if (Json.entities != null && Json.entities.Length > 0)
            {
                if (Json.entities != "*" && Json.entities.ToLower() != "all")
                {
                    command.Append($"/codewriterfilter:\"DynamicsCrm.DevKit.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.CrmSvcUtilExtensions\" ");
                }
            }
            command.Append($"/nologo ");
            command.Append($"/SuppressGeneratedCodeAttribute ");
            command.Append($"/emitfieldsclasses ");
            command.Append($"/generateGlobalOptionSets ");
            command.Append($"/namespace:\"{Json.@namespace}\" ");
            command.Append($"/out:\"{Json.output}\"");
            return command.ToString();
        }

        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                await CopyExtensionDllAsync();
                await RunProxyTypeAsync();
            }

            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }

        private async Task RunProxyTypeAsync()
        {
            var path = "\"" + CrmSvcUtil + "\"";

            // Log execution info
            SpectreLog.ActionWithLevel(LogLevel.Level0, "EXECUTE: ", "CrmSvcUtil.exe", $"{Version}");

            if (Json.entities == "*" || Json.entities.ToLower() == "all")
            {
                SpectreLog.ActionWithLevel(LogLevel.Level1, "FILTER: ", "All entities");
            }
            else
            {
                SpectreLog.ActionWithLevel(LogLevel.Level1, "FILTER: ", "Entities:", Json.entities);
            }

            SpectreLog.ActionWithLevel(LogLevel.Level1, "OUTPUT: ", Json.output);
            SpectreLog.ActionWithLevel(LogLevel.Level1, "NAMESPACE: ", Json.@namespace);

            SpectreLog.WriteWithLevel(LogLevel.Level0, path + " " + CreateCommandArgsLog());
            SpectreLog.WriteLine();

            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = CreateCommandArgs(),
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                }
            };

            if (Json.entities != null && Json.entities.Length > 0)
            {
                if (Json.entities != "*" && Json.entities.ToLower() != "all")
                {
                    process.StartInfo.EnvironmentVariables.Add(ENVIRONMENT_ENTITIES, string.Join(",", Json.entities));
                }
            }

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
                SpectreLog.ActionUpdated("Proxy types generated successfully to", Json.output);
            }
            else
            {
                SpectreLog.ActionError($"CrmSvcUtil exited with code {process.ExitCode}");
            }
        }
    }
}