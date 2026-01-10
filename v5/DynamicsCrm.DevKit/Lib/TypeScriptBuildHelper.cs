using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using Microsoft.VisualStudio.Shell;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    /// <summary>
    /// Shared helper class for TypeScript build operations and status display
    /// Used by CommandWebResource and CommandNewWebResource to avoid code duplication
    /// </summary>
    public static class TypeScriptBuildHelper
    {
        /// <summary>
        /// Build a TypeScript file to JavaScript using npm run debug command
        /// Shows a modal popup with live build output
        /// </summary>
        /// <param name="tsFilePath">Full path to the .ts file</param>
        /// <returns>Tuple containing success status, path to built .js file, and error message if failed</returns>
        public static async Task<(bool success, string jsFilePath, string error)> BuildTypeScriptAsync(string tsFilePath)
        {
            var directory = Path.GetDirectoryName(tsFilePath);
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(tsFilePath);
            var fileName = Path.GetFileName(tsFilePath);

            // Find the project root directory containing package.json
            var projectRoot = directory;
            while (!string.IsNullOrEmpty(projectRoot))
            {
                if (File.Exists(Path.Combine(projectRoot, "package.json")))
                {
                    break;
                }
                projectRoot = Path.GetDirectoryName(projectRoot);
            }

            if (string.IsNullOrEmpty(projectRoot))
            {
                return (false, null, "Could not find package.json in any parent directory");
            }

            // Run build with modal popup showing live output
            bool buildSuccess = false;
            string jsFilePath = null;
            string errorMessage = null;

            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            var form = new FormBuildOutput(fileName);

            // Start build process in background
            var buildTask = Task.Run(async () =>
            {
                var processStartInfo = new ProcessStartInfo
                {
                    FileName = "cmd.exe",
                    Arguments = $"/c npm run debug {fileNameWithoutExtension}",
                    WorkingDirectory = projectRoot,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                };

                using (var process = new Process { StartInfo = processStartInfo })
                {
                    process.OutputDataReceived += (sender, args) =>
                    {
                        if (!string.IsNullOrEmpty(args.Data))
                        {
                            form.AppendOutput(args.Data);
                        }
                    };
                    process.ErrorDataReceived += (sender, args) =>
                    {
                        if (!string.IsNullOrEmpty(args.Data))
                        {
                            form.AppendOutput($"[ERROR] {args.Data}");
                        }
                    };

                    process.Start();
                    process.BeginOutputReadLine();
                    process.BeginErrorReadLine();
                    process.WaitForExit();

                    if (process.ExitCode == 0)
                    {
                        // The .js file is output to the build folder
                        jsFilePath = Path.Combine(projectRoot, "build", fileNameWithoutExtension + ".js");
                        if (File.Exists(jsFilePath))
                        {
                            buildSuccess = true;
                            form.BuildComplete(true);
                        }
                        else
                        {
                            errorMessage = "Build succeeded but .js file not found";
                            form.BuildComplete(false, errorMessage);
                        }
                    }
                    else
                    {
                        errorMessage = $"TypeScript build failed with exit code {process.ExitCode}";
                        form.BuildComplete(false, errorMessage);
                    }
                }
            });

            // Show modal dialog - blocks until build completes and dialog closes
            form.ShowModal();

            // Wait for build task to complete
            await buildTask;

            return (buildSuccess, jsFilePath, errorMessage);
        }

        /// <summary>
        /// Show a status message in the Visual Studio status bar
        /// </summary>
        /// <param name="url">The connected CRM URL</param>
        /// <param name="message">The status message to display</param>
        public static async Task ShowStatusAsync(string url, string message)
        {
            await VS.StatusBar.ShowMessageAsync($"[{url}] >>> {message} <<<");
        }

        /// <summary>
        /// Show an error message in both the status bar and a message box
        /// </summary>
        /// <param name="url">The connected CRM URL</param>
        /// <param name="message">The error message to display</param>
        public static async Task ShowStatusAndErrorAsync(string url, string message)
        {
            var formattedMessage = $"[{url}] >>> {message} <<<";
            await VS.StatusBar.ShowMessageAsync(formattedMessage);
            await VS.MessageBox.ShowErrorAsync(formattedMessage);
        }

        /// <summary>
        /// Process a TypeScript file for deployment - builds it and returns the .js file path
        /// </summary>
        /// <param name="fullFileName">Full path to the file (can be .ts or .js)</param>
        /// <param name="url">The connected CRM URL for status messages</param>
        /// <returns>Tuple containing success status, file path to deploy (original or built .js), and error message if failed</returns>
        public static async Task<(bool success, string deployFilePath, string error)> ProcessTypeScriptForDeploymentAsync(string fullFileName, string url)
        {
            var extension = Path.GetExtension(fullFileName).ToLowerInvariant();
            
            if (extension != ".ts")
            {
                // Not a TypeScript file, return as-is
                return (true, fullFileName, null);
            }

            await ShowStatusAsync(url, "Building TypeScript ...");
            var (buildSuccess, jsFilePath, buildError) = await BuildTypeScriptAsync(fullFileName);

            if (!buildSuccess)
            {
                return (false, null, buildError);
            }

            // Return the built JS file path for deployment
            return (true, jsFilePath, null);
        }
    }
}

