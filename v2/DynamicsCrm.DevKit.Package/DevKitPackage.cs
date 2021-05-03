using System;
using System.Runtime.InteropServices;
using System.Threading;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Task = System.Threading.Tasks.Task;
using System.Collections.Generic;
using DynamicsCrm.DevKit.Package.Helpers;
using Microsoft.VisualStudio.OLE.Interop;
using EnvDTE;

namespace DynamicsCrm.DevKit.Package
{
    [InstalledProductRegistration("#110", "#112", Const.Version, IconResourceID = 400)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [Guid(PackageGuidString)]
    [PackageRegistration(UseManagedResourcesOnly = true, AllowsBackgroundLoading = true)]
    [ProvideAutoLoad(VSConstants.UICONTEXT.SolutionExistsAndFullyLoaded_string, PackageAutoLoadFlags.BackgroundLoad)]
    public sealed class DevKitPackage : AsyncPackage, IVsPersistSolutionOpts
    {
        public const string PackageGuidString = "7e37eef9-8cbe-4b10-81f7-66413cd2c9d3";

        protected override async Task InitializeAsync(CancellationToken cancellationToken, IProgress<ServiceProgressData> progress)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync(cancellationToken);
            await SolutionDevKitSettingInitializeAsync();
            await DevKitCommand.InitializeAsync(this);
        }

        private async Task SolutionDevKitSettingInitializeAsync()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            IVsSolutionPersistence solutionPersistence = await GetServiceAsync(typeof(IVsSolutionPersistence)) as IVsSolutionPersistence ?? throw new ArgumentNullException(nameof(solutionPersistence));
            solutionPersistence.LoadPackageUserOpts(this, SELECTED_WEB_RESOURCES);
        }

        private const string SELECTED_WEB_RESOURCES = "SelectedWebResources";

        public int LoadUserOptions(IVsSolutionPersistence pPersistence, [ComAliasName("Microsoft.VisualStudio.Shell.Interop.VSLOADUSEROPTS")] uint grfLoadOpts)
        {
            pPersistence.LoadPackageUserOpts(this, SELECTED_WEB_RESOURCES);
            return VSConstants.S_OK;
        }
        public int SaveUserOptions(IVsSolutionPersistence pPersistence)
        {
            pPersistence.SavePackageUserOpts(this, SELECTED_WEB_RESOURCES);
            return VSConstants.S_OK;
        }
        public int ReadUserOptions(IStream pOptionsStream, [ComAliasName("Microsoft.VisualStudio.OLE.Interop.LPCOLESTR")] string pszKey)
        {
            using (StreamEater wrapper = new StreamEater(pOptionsStream))
            {
                string value;
                using (var bReader = new System.IO.BinaryReader(wrapper))
                {
                    value = bReader.ReadString();
                }
                try
                {
                    switch (pszKey)
                    {
                        case SELECTED_WEB_RESOURCES:
                            DevKitSetting.SelectedWebResources = SimpleJson.DeserializeObject<List<SavedMappingWebResource>>(value);
                            break;
                    }
                }
                catch { }
            }
            return VSConstants.S_OK;
        }
        public int WriteUserOptions(IStream pOptionsStream, string pszKey)
        {
            string value;
            switch (pszKey)
            {
                case SELECTED_WEB_RESOURCES:
                    value = SimpleJson.SerializeObject(DevKitSetting.SelectedWebResources);
                    break;
                default:
                    return VSConstants.S_OK;
            }
            using (StreamEater wrapper = new StreamEater(pOptionsStream))
            {
                using (var bw = new System.IO.BinaryWriter(wrapper))
                {
                    bw.Write(value);
                }
            }
            return VSConstants.S_OK;
        }
    }
}
