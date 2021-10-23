using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public class VsixSessionCache
    {
        private enum VsixCache
        {
            CrmServiceClient,
            WebResources
        }

        public object GetCached(string name)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                return await GetCachedAsync(name);
            });
        }
        public async Task<object> GetCachedAsync(string name)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var dte = await VS.GetServiceAsync<DTE, DTE>();
            return dte.Globals.VariableExists[name] ? dte.Globals[name] : null;
        }
        public void SetCached(string name, object @object)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await SetCachedAsync(name, @object);
            });
        }
        public async Task SetCachedAsync(string name, object @object)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var dte = await VS.GetServiceAsync<DTE, DTE>();
            dte.Globals[name] = @object;
        }

        public CrmServiceClient GetCrmServiceClient()
        {
            var cached = GetCached(nameof(VsixCache.CrmServiceClient));
            if (cached == null)
            {
                var formConnection = new FormConnection();
                var result = formConnection.ShowModal() ?? false;
                if (result)
                {
                    CrmServiceClient service = null;
                    if (formConnection.IsOOBConnection)
                    {
                        var loginForm = new FormLogin();
                        loginForm.ConnectionToCrmCompleted += LoginForm_ConnectionToCrmCompleted;
                        loginForm.ShowDialog();
                        if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                        {
                            service = loginForm.CrmConnectionMgr.CrmSvc;
                        }
                    }
                    else
                    {
                        service = formConnection.CrmServiceClient;
                    }
                    if (service != null)
                    {
                        SetCached(nameof(VsixCache.CrmServiceClient), service);
                        return service;
                    }
                    return null;
                }
                else
                    return null;
            }
            else
            {
                return (CrmServiceClient)cached;
            }
        }

        public DeployWebResource GetNewWebResource(string fullFileName)
        {
            throw new NotImplementedException();
        }

        public DeployWebResource GetExistingWebResource(List<DeployWebResource> webResources, string fullFileName)
        {
            throw new NotImplementedException();
        }

        private void LoginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        public DeployWebResource GetWebResource(string fullFileName)
        {
            var cached = GetCached(nameof(VsixCache.WebResources));
            if (cached == null) return null;
            var webResources = (List<DeployWebResource>)cached;
            return webResources.FirstOrDefault(x => x.FullFileName == fullFileName);
        }
    }

    public class VsixStorageCache
    {

    }
}
