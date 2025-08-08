using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using System;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Threading;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit
{
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [InstalledProductRegistration(Vsix.Name, Vsix.Description, Vsix.Version)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(PackageGuids.DynamicsCrmDevKitString)]
    [ProvideAutoLoad(VSConstants.UICONTEXT.SolutionExistsAndFullyLoaded_string, PackageAutoLoadFlags.BackgroundLoad)]
    public sealed partial class DevKitPackage : ToolkitPackage
    {
        private static bool _assembliesLoaded = false;

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);

            // Load assemblies before registering commands
            LoadRequiredAssemblies();

            await this.RegisterCommandsAsync();
        }

        /// <summary>
        /// Enhanced logging method that outputs to multiple destinations
        /// </summary>
        private static void WriteDebugLog(string message)
        {
            // Output to Debug console (visible in Output window → Debug)
            System.Diagnostics.Debug.WriteLine(message);

            // Output to Trace (can be captured by trace listeners)
            System.Diagnostics.Trace.WriteLine(message);

            // Also output to console if available (useful for some debugging scenarios)
            try
            {
                Console.WriteLine(message);
            }
            catch
            {
                // Console might not be available in VSIX context, ignore
            }

#if DEBUG
            // In debug builds, also try to write to a log file for persistent debugging
            try
            {
                var logPath = Path.Combine(Path.GetTempPath(), "DynamicsCrm.DevKit.debug.log");
                File.AppendAllText(logPath, $"{DateTime.Now:yyyy-MM-dd HH:mm:ss.fff} - {message}{Environment.NewLine}");
            }
            catch
            {
                // Ignore file write errors
            }
#endif
        }

        private void LoadRequiredAssemblies()
        {
            if (_assembliesLoaded) return;

            try
            {
                // Get the current assembly location (VSIX installation folder)
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                // Try to find dll folder - first check hardcoded path for testing
                var sourceDllFolder = @"D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit\dll";

                // If hardcoded path doesn't exist, try to find it relative to the assembly location
                if (!Directory.Exists(sourceDllFolder))
                {
                    // Try to find the dll folder in the VSIX package itself
                    var possibleDllFolder = Path.Combine(vsixLocation, "dll");
                    if (Directory.Exists(possibleDllFolder))
                    {
                        sourceDllFolder = possibleDllFolder;
                    }
                    else
                    {
                        // Look for dll folder in parent directories (development scenario)
                        var currentDir = vsixLocation;
                        for (int i = 0; i < 5; i++) // Check up to 5 levels up
                        {
                            var parentDir = Directory.GetParent(currentDir)?.FullName;
                            if (parentDir == null) break;

                            var testDllFolder = Path.Combine(parentDir, "DynamicsCrm.DevKit", "dll");
                            if (Directory.Exists(testDllFolder))
                            {
                                sourceDllFolder = testDllFolder;
                                break;
                            }
                            currentDir = parentDir;
                        }
                    }
                }

                // Check if source folder exists
                if (Directory.Exists(sourceDllFolder))
                {
                    // Get DLL files from source folder only (no subdirectories)
                    var dllFiles = Directory.GetFiles(sourceDllFolder, "*.dll", SearchOption.TopDirectoryOnly);

                    WriteDebugLog($"DynamicsCrm.DevKit: Found {dllFiles.Length} DLL files in {sourceDllFolder}");

                    int copiedCount = 0;
                    int skippedCount = 0;
                    int failedCount = 0;

                    foreach (var sourceFile in dllFiles)
                    {
                        try
                        {
                            var fileName = Path.GetFileName(sourceFile);
                            var targetFile = Path.Combine(vsixLocation, fileName);

                            // Skip copying if target file already exists
                            if (File.Exists(targetFile))
                            {
                                skippedCount++;
                                WriteDebugLog($"DynamicsCrm.DevKit: Skipped {fileName} - already exists in VSIX location");
                                continue;
                            }

                            // Copy file only if it doesn't exist
                            File.Copy(sourceFile, targetFile, overwrite: false);
                            copiedCount++;
                            WriteDebugLog($"DynamicsCrm.DevKit: Copied {fileName} to VSIX location");
                        }
                        catch (UnauthorizedAccessException ex)
                        {
                            // File might be in use, try to handle it gracefully
                            failedCount++;
                            WriteDebugLog($"DynamicsCrm.DevKit: Access denied copying {sourceFile}: {ex.Message}");
                        }
                        catch (IOException ex)
                        {
                            // File might be locked, try to handle it gracefully
                            failedCount++;
                            WriteDebugLog($"DynamicsCrm.DevKit: IO error copying {sourceFile}: {ex.Message}");
                        }
                        catch (Exception ex)
                        {
                            // Log error but continue with other files
                            failedCount++;
                            WriteDebugLog($"DynamicsCrm.DevKit: Failed to copy {sourceFile}: {ex.Message}");
                        }
                    }

                    WriteDebugLog($"DynamicsCrm.DevKit: Copy summary - Copied: {copiedCount}, Skipped: {skippedCount}, Failed: {failedCount}, Total: {dllFiles.Length}");

                    // Preload critical assemblies to avoid version conflicts
                    PreloadCriticalAssemblies(vsixLocation, sourceDllFolder);
                }
                else
                {
                    WriteDebugLog($"DynamicsCrm.DevKit: Could not find dll folder. Checked: {sourceDllFolder}");
                }

                // Set up assembly resolve event handler for runtime loading
                AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;
                _assembliesLoaded = true;
            }
            catch (Exception ex)
            {
                WriteDebugLog($"DynamicsCrm.DevKit: Error in LoadRequiredAssemblies: {ex.Message}");
            }
        }

        private void PreloadCriticalAssemblies(string vsixLocation, string sourceDllFolder)
        {
            // List of critical assemblies that should be preloaded to avoid version conflicts
            var criticalAssemblies = new[]
            {
                "Microsoft.Extensions.DependencyInjection.dll",
                "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
                "Microsoft.Extensions.Caching.Memory.dll",
                "Microsoft.Extensions.Caching.Abstractions.dll",
                "Microsoft.Extensions.Options.dll",
                "Microsoft.Extensions.Logging.dll",
                "Microsoft.Extensions.Logging.Abstractions.dll",
                "Microsoft.Extensions.Configuration.dll",
                "Microsoft.Extensions.Configuration.Abstractions.dll",
                "Microsoft.Extensions.Primitives.dll",
                "Microsoft.PowerPlatform.Dataverse.Client.dll"
            };

            WriteDebugLog("DynamicsCrm.DevKit: Starting preload of critical assemblies...");

            foreach (var assemblyFileName in criticalAssemblies)
            {
                try
                {
                    var assemblyPath = Path.Combine(vsixLocation, assemblyFileName);
                    if (!File.Exists(assemblyPath))
                    {
                        assemblyPath = Path.Combine(sourceDllFolder, assemblyFileName);
                    }

                    if (File.Exists(assemblyPath))
                    {
                        // Check if assembly is already loaded
                        var assemblyName = Path.GetFileNameWithoutExtension(assemblyFileName);
                        var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
                        bool alreadyLoaded = false;

                        foreach (var loadedAssembly in loadedAssemblies)
                        {
                            if (loadedAssembly.GetName().Name == assemblyName)
                            {
                                alreadyLoaded = true;
                                WriteDebugLog($"DynamicsCrm.DevKit: Critical assembly already loaded: {assemblyName} (Version: {loadedAssembly.GetName().Version})");
                                break;
                            }
                        }

                        if (!alreadyLoaded)
                        {
                            var assembly = Assembly.LoadFrom(assemblyPath);
                            WriteDebugLog($"DynamicsCrm.DevKit: Preloaded critical assembly: {assemblyName} (Version: {assembly.GetName().Version})");
                        }
                    }
                    else
                    {
                        WriteDebugLog($"DynamicsCrm.DevKit: Critical assembly not found: {assemblyFileName}");
                    }
                }
                catch (Exception ex)
                {
                    WriteDebugLog($"DynamicsCrm.DevKit: Failed to preload {assemblyFileName}: {ex.Message}");
                    // Continue with other assemblies
                }
            }

            WriteDebugLog("DynamicsCrm.DevKit: Finished preloading critical assemblies.");
        }

        private Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)
        {
            try
            {
                // Extract assembly name from the full name
                var assemblyName = new AssemblyName(args.Name).Name;

                WriteDebugLog($"DynamicsCrm.DevKit: Attempting to resolve assembly: {assemblyName}");
                WriteDebugLog($"DynamicsCrm.DevKit: Full assembly name requested: {args.Name}");

                // First, check if the assembly is already loaded in the current AppDomain
                var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
                foreach (var loadedAssembly in loadedAssemblies)
                {
                    if (loadedAssembly.GetName().Name == assemblyName)
                    {
                        WriteDebugLog($"DynamicsCrm.DevKit: Using already loaded assembly: {assemblyName} (Version: {loadedAssembly.GetName().Version})");
                        return loadedAssembly;
                    }
                }

                // Look for the assembly in the VSIX location first
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                var assemblyPath = Path.Combine(vsixLocation, assemblyName + ".dll");

                if (File.Exists(assemblyPath))
                {
                    var assembly = Assembly.LoadFrom(assemblyPath);
                    WriteDebugLog($"DynamicsCrm.DevKit: Loading {assemblyName} from VSIX location (Version: {assembly.GetName().Version})");
                    return assembly;
                }

                // Fallback: try to load from the hardcoded dll folder
                var sourceDllFolder = @"D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit\dll";
                var fallbackPath = Path.Combine(sourceDllFolder, assemblyName + ".dll");

                if (File.Exists(fallbackPath))
                {
                    var assembly = Assembly.LoadFrom(fallbackPath);
                    WriteDebugLog($"DynamicsCrm.DevKit: Loading {assemblyName} from fallback location (Version: {assembly.GetName().Version})");
                    return assembly;
                }

                WriteDebugLog($"DynamicsCrm.DevKit: Could not resolve assembly: {assemblyName}");
            }
            catch (Exception ex)
            {
                WriteDebugLog($"DynamicsCrm.DevKit: Error resolving assembly {args.Name}: {ex.Message}");
            }

            return null;
        }
    }
}
