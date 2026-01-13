using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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
    [ProvideBindingPath] // Helps VS resolve assemblies from VSIX location automatically
    public sealed partial class DevKitPackage : ToolkitPackage
    {
        private static bool _assembliesLoaded = false;
        private static readonly object _lockObject = new object();
        private static readonly HashSet<string> _loadedAssemblyNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        private static string _vsixLocation;

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            // Load assemblies in background - NO need for main thread
            await Task.Run(() => LoadRequiredAssemblies(), cancellationToken);

            // Only switch to main thread for UI-related operations (command registration)
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);
            await this.RegisterCommandsAsync();
        }

        private void LoadRequiredAssemblies()
        {
            if (_assembliesLoaded) return;

            lock (_lockObject)
            {
                if (_assembliesLoaded) return;

                try
                {
                    _vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                    // Cache currently loaded assemblies for fast lookup
                    CacheLoadedAssemblies();

                    // Preload critical assemblies
                    PreloadCriticalAssemblies();

                    // Register assembly resolver for lazy loading
                    AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;

                    _assembliesLoaded = true;
                }
                catch (Exception ex)
                {
                    Debug.WriteLine($"[DynamicsCrm.DevKit] Failed to load assemblies: {ex.Message}");
                }
            }
        }

        private void CacheLoadedAssemblies()
        {
            try
            {
                foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
                {
                    try
                    {
                        _loadedAssemblyNames.Add(assembly.GetName().Name);
                    }
                    catch
                    {
                        // Some assemblies may throw when accessing GetName()
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"[DynamicsCrm.DevKit] Failed to cache assemblies: {ex.Message}");
            }
        }

        private void PreloadCriticalAssemblies()
        {
            // Only preload assemblies that are ALWAYS needed at startup
            // Other assemblies will be loaded on-demand via AssemblyResolve
            var criticalAssemblies = new[]
            {
                "Microsoft.PowerPlatform.Dataverse.Client.dll",
                "System.Runtime.CompilerServices.Unsafe.dll"
            };

            foreach (var assemblyFileName in criticalAssemblies)
            {
                LoadAssemblyIfNeeded(assemblyFileName);
            }
        }

        private Assembly LoadAssemblyIfNeeded(string assemblyFileName)
        {
            try
            {
                var assemblyName = Path.GetFileNameWithoutExtension(assemblyFileName);

                // Fast check using cached HashSet
                if (_loadedAssemblyNames.Contains(assemblyName))
                {
                    return null;
                }

                var assemblyPath = Path.Combine(_vsixLocation, assemblyFileName);
                if (File.Exists(assemblyPath))
                {
                    var assembly = Assembly.LoadFrom(assemblyPath);
                    _loadedAssemblyNames.Add(assemblyName);
                    Debug.WriteLine($"[DynamicsCrm.DevKit] Loaded assembly: {assemblyName}");
                    return assembly;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"[DynamicsCrm.DevKit] Failed to load {assemblyFileName}: {ex.Message}");
            }
            return null;
        }

        private Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)
        {
            try
            {
                var assemblyName = new AssemblyName(args.Name).Name;

                // Fast check using cached HashSet - avoid expensive GetAssemblies() call
                if (_loadedAssemblyNames.Contains(assemblyName))
                {
                    // Return from already loaded assemblies
                    foreach (var loadedAssembly in AppDomain.CurrentDomain.GetAssemblies())
                    {
                        try
                        {
                            if (loadedAssembly.GetName().Name.Equals(assemblyName, StringComparison.OrdinalIgnoreCase))
                            {
                                return loadedAssembly;
                            }
                        }
                        catch
                        {
                            // Some assemblies may throw
                        }
                    }
                }

                // Try to load from VSIX location (lazy loading)
                return LoadAssemblyIfNeeded(assemblyName + ".dll");
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"[DynamicsCrm.DevKit] AssemblyResolve failed for {args.Name}: {ex.Message}");
            }
            return null;
        }
    }
}
