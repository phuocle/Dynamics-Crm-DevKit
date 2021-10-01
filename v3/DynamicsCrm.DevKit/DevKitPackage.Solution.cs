using System;
using System.Runtime.InteropServices;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Task = System.Threading.Tasks.Task;
using Microsoft.VisualStudio.OLE.Interop;
namespace DynamicsCrm.DevKit
{
    public partial class DevKitPackage
    {
        private const string SELECTED_WEB_RESOURCES = "SelectedWebResources";
        private const string SELECTED_REPORTS = "SelectedReports";

        private async Task SolutionInitializeAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            IVsSolutionPersistence solutionPersistence = await GetServiceAsync(typeof(IVsSolutionPersistence)) as IVsSolutionPersistence ?? throw new ArgumentNullException(nameof(solutionPersistence));
            solutionPersistence.LoadPackageUserOpts(this, SELECTED_WEB_RESOURCES);
            solutionPersistence.LoadPackageUserOpts(this, SELECTED_REPORTS);
        }

        public int LoadUserOptions(IVsSolutionPersistence pPersistence, [ComAliasName("Microsoft.VisualStudio.Shell.Interop.VSLOADUSEROPTS")] uint grfLoadOpts)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            pPersistence.LoadPackageUserOpts(this, SELECTED_WEB_RESOURCES);
            pPersistence.LoadPackageUserOpts(this, SELECTED_REPORTS);
            return VSConstants.S_OK;
        }
        public int SaveUserOptions(IVsSolutionPersistence pPersistence)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            pPersistence.SavePackageUserOpts(this, SELECTED_WEB_RESOURCES);
            pPersistence.SavePackageUserOpts(this, SELECTED_REPORTS);
            return VSConstants.S_OK;
        }
        public int ReadUserOptions(IStream pOptionsStream, [ComAliasName("Microsoft.VisualStudio.OLE.Interop.LPCOLESTR")] string pszKey)
        {
            //using (StreamEater wrapper = new StreamEater(pOptionsStream))
            //{
            //    string value;
            //    using (var bReader = new System.IO.BinaryReader(wrapper))
            //    {
            //        value = bReader.ReadString();
            //    }
            //    try
            //    {
            //        switch (pszKey)
            //        {
            //            case SELECTED_WEB_RESOURCES:
            //                DevKitSetting.SelectedWebResources = SimpleJson.DeserializeObject<List<SavedMappingWebResource>>(value);
            //                break;
            //            case SELECTED_REPORTS:
            //                DevKitSetting.SelectedReports = SimpleJson.DeserializeObject<List<SavedMappingReport>>(value);
            //                break;
            //        }
            //    }
            //    catch { }
            //}
            return VSConstants.S_OK;
        }
        public int WriteUserOptions(IStream pOptionsStream, string pszKey)
        {
            //string value;
            //switch (pszKey)
            //{
            //    case SELECTED_WEB_RESOURCES:
            //        value = SimpleJson.SerializeObject(DevKitSetting.SelectedWebResources);
            //        break;
            //    case SELECTED_REPORTS:
            //        value = SimpleJson.SerializeObject(DevKitSetting.SelectedReports);
            //        break;
            //    default:
            //        return VSConstants.S_OK;
            //}
            //using (StreamEater wrapper = new StreamEater(pOptionsStream))
            //{
            //    using (var bw = new System.IO.BinaryWriter(wrapper))
            //    {
            //        bw.Write(value);
            //    }
            //}
            return VSConstants.S_OK;
        }
    }
}
