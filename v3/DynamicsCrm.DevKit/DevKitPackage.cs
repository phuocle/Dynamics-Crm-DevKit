using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using EnvDTE80;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using System;
using System.Runtime.InteropServices;
using System.Threading;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit
{
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [InstalledProductRegistration("#110", "#112", Const.Version, IconResourceID = 400)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(PACKAGE_GUID_STRING)]
    [ProvideAutoLoad(VSConstants.UICONTEXT.SolutionExistsAndFullyLoaded_string, PackageAutoLoadFlags.BackgroundLoad)]
    public sealed partial class DevKitPackage : AsyncPackage, IVsPersistSolutionOpts
    {
        public const string PACKAGE_GUID_STRING = "7e37eef9-8cbe-4b10-81f7-66413cd2c9d3";

        private static DTE dte;

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);

            dte = await GetServiceAsync(typeof(DTE)) as DTE ?? throw new ArgumentNullException(nameof(dte));
            VsixHelper.DTE = dte;

            await CommandsInitializeAsync();
            await SolutionInitializeAsync();
        }
    }
}
