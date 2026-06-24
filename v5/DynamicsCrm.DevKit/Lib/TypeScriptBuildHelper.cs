using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
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
        /// Build a TypeScript file to JavaScript
        /// Shows a modal popup with live build output
        /// </summary>
        /// <param name="tsFilePath">Full path to the .ts file</param>
        /// <param name="isRelease">True for release mode (minified), false for debug mode (with sourcemap)</param>
        /// <returns>Tuple containing success status, path to built .js file, and error message if failed</returns>
        public static async Task<(bool success, string jsFilePath, string error)> BuildTypeScriptAsync(string tsFilePath, bool isRelease = false)
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

            var buildMode = isRelease ? "Release" : "Debug";
            var npmCommand = isRelease ? "release" : "debug";
            var form = new FormBuildOutput(fileName, buildMode);

            // Start build process in background
            bool hasErrors = false;
            var buildTask = Task.Run(async () =>
            {
                var processStartInfo = new ProcessStartInfo
                {
                    FileName = "cmd.exe",
                    Arguments = $"/c chcp 65001 >nul && npm run {npmCommand} {fileNameWithoutExtension}",
                    WorkingDirectory = projectRoot,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true,
                    StandardOutputEncoding = System.Text.Encoding.UTF8,
                    StandardErrorEncoding = System.Text.Encoding.UTF8
                };

                using (var process = new Process { StartInfo = processStartInfo })
                {
                    process.OutputDataReceived += (sender, args) =>
                    {
                        if (!string.IsNullOrEmpty(args.Data))
                        {
                            form.AppendOutput(args.Data);
                            // Check for specific error indicators in output
                            // Use specific patterns to avoid false positives like "Checking for TypeScript errors..."
                            if (args.Data.Contains("✗") || 
                                args.Data.Contains("error TS") || 
                                args.Data.Contains(": error") ||
                                args.Data.Contains("Build failed"))
                            {
                                hasErrors = true;
                            }
                        }
                    };
                    process.ErrorDataReceived += (sender, args) =>
                    {
                        if (!string.IsNullOrEmpty(args.Data))
                        {
                            // Show stderr output but only set hasErrors for actual error messages
                            // npm/tsc can output warnings to stderr even on successful builds
                            form.AppendOutput($"[STDERR] {args.Data}");
                            if (args.Data.Contains("✗") || args.Data.Contains("error TS") || args.Data.Contains("Error:"))
                            {
                                hasErrors = true;
                            }
                        }
                    };

                    process.Start();
                    process.BeginOutputReadLine();
                    process.BeginErrorReadLine();
                    process.WaitForExit();

                    if (process.ExitCode != 0 || hasErrors)
                    {
                        errorMessage = hasErrors 
                            ? "TypeScript build failed - see output for details"
                            : $"TypeScript build failed with exit code {process.ExitCode}";
                        form.BuildComplete(false, errorMessage);
                    }
                    else
                    {
                        jsFilePath = TypeScriptBuildPathHelper.ResolveBuiltJavaScriptFile(tsFilePath, projectRoot);
                        if (!string.IsNullOrEmpty(jsFilePath))
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
                }
            });

            // Show modal dialog - blocks until build completes and dialog closes
            form.ShowModal();

            // Wait for build task to complete
            await buildTask;

            return (buildSuccess, jsFilePath, errorMessage);
        }

        public static List<string> GetWebResourcePathCandidates(string sourceFilePath, string deployFilePath, string solutionFolder)
        {
            return TypeScriptBuildPathHelper.GetWebResourcePathCandidates(sourceFilePath, deployFilePath, solutionFolder);
        }

        public static DeployWebResource GetCachedWebResource(IEnumerable<string> webResourcePathCandidates, out string matchedPath)
        {
            matchedPath = null;
            if (webResourcePathCandidates == null) return null;

            foreach (var candidate in webResourcePathCandidates)
            {
                var cached = CacheHelper.GetWebResource(candidate);
                if (cached == null || cached.WebResourceId == Guid.Empty) continue;

                matchedPath = candidate;
                return cached;
            }

            return null;
        }

        public static async Task<List<DeployWebResource>> GetWebResourcesAsync(DeploymentService deployment, IEnumerable<string> webResourcePathCandidates)
        {
            var webResources = new List<DeployWebResource>();
            if (deployment == null || webResourcePathCandidates == null) return webResources;

            foreach (var candidate in webResourcePathCandidates)
            {
                var matches = await deployment.GetWebResourcesAsync(candidate);
                foreach (var match in matches)
                {
                    if (webResources.Exists(existing => existing.WebResourceId == match.WebResourceId)) continue;
                    webResources.Add(match);
                }
            }

            return webResources;
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
        /// Check if a file is a deployable TypeScript file
        /// Excludes generated files like *.form.ts and *.webapi.ts which are not meant to be deployed directly
        /// </summary>
        /// <param name="filePath">Full path or filename</param>
        /// <returns>True if file is a deployable .ts file (not *.form.ts or *.webapi.ts)</returns>
        public static bool IsDeployableTypeScript(string filePath)
        {
            return TypeScriptBuildPathHelper.IsDeployableTypeScript(filePath);
        }

        /// <summary>
        /// Process a TypeScript file for deployment - builds it and returns the .js file path
        /// </summary>
        /// <param name="fullFileName">Full path to the file (can be .ts or .js)</param>
        /// <param name="url">The connected CRM URL for status messages</param>
        /// <param name="isRelease">True for release mode (minified), false for debug mode (with sourcemap)</param>
        /// <returns>Tuple containing success status, file path to deploy (original or built .js), and error message if failed</returns>
        public static async Task<(bool success, string deployFilePath, string error)> ProcessTypeScriptForDeploymentAsync(string fullFileName, string url, bool isRelease = false)
        {
            // Check if this is a deployable TypeScript file
            if (!IsDeployableTypeScript(fullFileName))
            {
                // Not a deployable TypeScript file, return as-is (for .js, *.form.ts, *.webapi.ts etc.)
                return (true, fullFileName, null);
            }

            var modeText = isRelease ? "Release" : "Debug";
            await ShowStatusAsync(url, $"Building TypeScript ({modeText}) ...");
            var (buildSuccess, jsFilePath, buildError) = await BuildTypeScriptAsync(fullFileName, isRelease);

            if (!buildSuccess)
            {
                return (false, null, buildError);
            }

            // Return the built JS file path for deployment
            return (true, jsFilePath, null);
        }
    }
}

