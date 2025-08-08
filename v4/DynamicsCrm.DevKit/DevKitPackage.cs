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
            LoadRequiredAssemblies2();
            await this.RegisterCommandsAsync();
        }

        private void LoadRequiredAssemblies2()
        {
            if (_assembliesLoaded) return;
            try
            {
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                PreloadCriticalAssemblies(vsixLocation);
                AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;
                _assembliesLoaded = true;
            }
            catch
            {
            }
        }

        private void PreloadCriticalAssemblies(string vsixLocation)
        {
            var criticalAssemblies = new[]
            {
                "Microsoft.Extensions.DependencyInjection.dll",
                "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
                "Microsoft.Extensions.Caching.Memory.dll",
                "Microsoft.Extensions.Caching.Abstractions.dll",
                "Microsoft.PowerPlatform.Dataverse.Client.dll",
                "System.Runtime.CompilerServices.Unsafe.dll"
            };
            foreach (var assemblyFileName in criticalAssemblies)
            {
                try
                {
                    var assemblyPath = Path.Combine(vsixLocation, assemblyFileName);
                    if (File.Exists(assemblyPath))
                    {
                        var assemblyName = Path.GetFileNameWithoutExtension(assemblyFileName);
                        if (!IsAssemblyLoaded(assemblyName))
                        {
                            Assembly.LoadFrom(assemblyPath);
                        }
                    }
                }
                catch
                {
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
                var assemblyName = new AssemblyName(args.Name).Name;
                var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
                foreach (var loadedAssembly in loadedAssemblies)
                {
                    if (loadedAssembly.GetName().Name == assemblyName)
                    {
                        return loadedAssembly;
                    }
                }
                var vsixLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                var assemblyPath = Path.Combine(vsixLocation, assemblyName + ".dll");
                if (File.Exists(assemblyPath))
                {
                    var assembly = Assembly.LoadFrom(assemblyPath);
                    return assembly;
                }
            }
            catch
            {
            }
            return null;
        }
    }
}
