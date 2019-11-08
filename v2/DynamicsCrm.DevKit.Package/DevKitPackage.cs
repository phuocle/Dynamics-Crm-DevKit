using System;
using System.Runtime.InteropServices;
using System.Threading;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit.Package
{
    [InstalledProductRegistration("#110", "#112", "2.1.1", IconResourceID = 400)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(PackageGuidString)]
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [ProvideAutoLoad(VSConstants.UICONTEXT.SolutionExistsAndFullyLoaded_string, PackageAutoLoadFlags.BackgroundLoad)]
    public sealed class DevKitPackage : AsyncPackage
    {
        public const string PackageGuidString = "7e37eef9-8cbe-4b10-81f7-66413cd2c9d3";

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);
            await DevKitCommand.InitializeAsync(this);
        }
    }
}
