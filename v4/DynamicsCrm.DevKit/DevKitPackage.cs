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
            //LoadRequiredAssemblies();
            LoadRequiredAssemblies2();
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

        private void LoadRequiredAssemblies2()
        {
            if (_assembliesLoaded) return;
            try
            {
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                // Preload only the most critical assemblies that VS might conflict with
                PreloadCriticalAssemblies(vsixLocation);

                // Handle any other assemblies at runtime
                AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;
                _assembliesLoaded = true;
            }
            catch (Exception ex)
            {
                WriteDebugLog($"DynamicsCrm.DevKit: Error in LoadRequiredAssemblies: {ex.Message}");
            }
        }

        private void PreloadCriticalAssemblies(string vsixLocation)
        {
            // Only preload assemblies that VS is likely to have different versions of
            var criticalAssemblies = new[]
            {
                "Microsoft.Extensions.DependencyInjection.dll",
                "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
                "Microsoft.Extensions.Caching.Memory.dll",
                "Microsoft.Extensions.Caching.Abstractions.dll",
                "Microsoft.PowerPlatform.Dataverse.Client.dll",
                "System.Runtime.CompilerServices.Unsafe.dll" // Add this if you have it
            };

            WriteDebugLog("DynamicsCrm.DevKit: Starting preload of critical assemblies...");

            foreach (var assemblyFileName in criticalAssemblies)
            {
                try
                {
                    var assemblyPath = Path.Combine(vsixLocation, assemblyFileName);
                    if (File.Exists(assemblyPath))
                    {
                        var assemblyName = Path.GetFileNameWithoutExtension(assemblyFileName);

                        // Only load if not already loaded
                        if (!IsAssemblyLoaded(assemblyName))
                        {
                            var assembly = Assembly.LoadFrom(assemblyPath);
                            WriteDebugLog($"DynamicsCrm.DevKit: Preloaded critical assembly: {assemblyName} (Version: {assembly.GetName().Version})");
                        }
                        else
                        {
                            WriteDebugLog($"DynamicsCrm.DevKit: Critical assembly already loaded: {assemblyName}");
                        }
                    }
                }
                catch (Exception ex)
                {
                    WriteDebugLog($"DynamicsCrm.DevKit: Failed to preload {assemblyFileName}: {ex.Message}");
                }
            }
        }

        private bool IsAssemblyLoaded(string assemblyName)
        {
            var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
            foreach (var assembly in loadedAssemblies)
            {
                if (assembly.GetName().Name == assemblyName)
                    return true;
            }
            return false;
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

                // Look for the assembly in the VSIX location
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                var assemblyPath = Path.Combine(vsixLocation, assemblyName + ".dll");

                if (File.Exists(assemblyPath))
                {
                    var assembly = Assembly.LoadFrom(assemblyPath);
                    WriteDebugLog($"DynamicsCrm.DevKit: Loading {assemblyName} from VSIX location (Version: {assembly.GetName().Version})");
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
