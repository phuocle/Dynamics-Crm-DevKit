using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public class VsixSessionCache
    {
        private enum VsixCache
        {
            CrmServiceClient,
            WebResources
        }

        private DTE _dte = null;
        public VsixSessionCache(DTE dte)
        {
            _dte = dte;
        }

        private object GetCache(string name)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var globals = _dte.Globals;
            return globals.VariableExists[name] ? globals[name] : null;
        }

        private void SetCache(string name, object @object)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var globals = _dte.Globals;
            globals[name] = @object;
        }

        public CrmServiceClient GetCrmServiceClient()
        {
            var cached = GetCache(nameof(VsixCache.CrmServiceClient));
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
                        SetCache(nameof(VsixCache.CrmServiceClient), service);
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
        private void LoginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        public DeployWebResource GetWebResource(string fullFileName)
        {
            var cached = GetCache(nameof(VsixCache.WebResources));
            if (cached == null) return null;
            var webResources = (List<DeployWebResource>)cached;
            return webResources.FirstOrDefault(x => x.FullFileName == fullFileName);
        }
    }

    public class VsixStorageCache
    {

    }
}
