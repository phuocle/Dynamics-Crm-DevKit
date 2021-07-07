using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using DynamicsCrm.DevKit.Package.Helpers;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio;
using Microsoft.VisualStudio.OLE.Interop;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;

namespace DynamicsCrm.DevKit.Package
{
    public sealed class  SolutionDevKitSetting : IVsPersistSolutionOpts
    {
        public async System.Threading.Tasks.Task InitializeAsync(AsyncPackage package)
        {
            IVsSolutionPersistence solutionPersistence = await package.GetServiceAsync((typeof(IVsSolutionPersistence))) as IVsSolutionPersistence ?? throw new ArgumentNullException(nameof(solutionPersistence));
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
                switch (pszKey)
                {
                    case SELECTED_WEB_RESOURCES:
                        DevKitSetting.SelectedWebResources = SimpleJson.DeserializeObject<List<NameValueGuid>>(value);
                        break;
                }
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
