using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
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
                        var loginForm = new FormLogin(false);
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

        //public DeployWebResource GetNewWebResource(CrmServiceClient service, string fullFileName)
        //{
        //    var form = new FormWebResource(true);
        //    form.ShowDialog();
        //    return form.SelectedWebResource;
        //}

        public DeployWebResource GetExistingWebResource(CrmServiceClient service, List<DeployWebResource> webResources, string fullFileName)
        {
            var form = new FormWebResource(webResources, fullFileName);
            var result = form.ShowModal() ?? false;
            if (result)
            {
                var selectedWebResource = form.SelectedWebResource;
                AddWebResourcesToCached(selectedWebResource);
                SavedTo_DynamicsCrmDevKitCachedJsonFileName(selectedWebResource);
                return selectedWebResource;
            }
            return null;
        }

        public DeployWebResource GetNewWebResource(CrmServiceClient service, string fullFileName, string fullFileName2, List<NameValueGuidExtend> solutions)
        {
            var form = new FormWebResource(true, fullFileName, solutions);
            var result = form.ShowModal() ?? false;
            if (result)
            {
                var selectedNewWebResource = form.SelectedNewWebResource;
                selectedNewWebResource.FullFileName = fullFileName2;
                AddWebResourcesToCached(selectedNewWebResource);
                SavedTo_DynamicsCrmDevKitCachedJsonFileName(selectedNewWebResource);
                return selectedNewWebResource;
            }
            return null;
        }


        private void SavedTo_DynamicsCrmDevKitCachedJsonFileName(DeployWebResource deployWebResource)
        {
            var json = string.Empty;
            var cachedJson = new CachedJson();
            var fileName = VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName();
            if (File.Exists(fileName))
            {
                json = File.ReadAllText(VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName());
                cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
            }
            var found = cachedJson.DeployWebResources.Where(x => x.FullFileName == deployWebResource.FullFileName).FirstOrDefault();
            if (found != null)
            {
                found.WebResourceName = deployWebResource.WebResourceName;
            }
            else
            {
                cachedJson.DeployWebResources.Add(deployWebResource);
            }
            cachedJson.DeployWebResources.OrderBy(x => x.FullFileName).ToList();
            json = JsonHelper.FormatJson(SimpleJson.SerializeObject(cachedJson));
            Utility.ForceWriteAllText(fileName, json);
        }

        public static void SavedJson(string json)
        {
            var fileName = VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName();
            if (fileName != null) Utility.ForceWriteAllText(fileName, json);
        }

        public void AddWebResourcesToCached(DeployWebResource selectedWebResource)
        {
            var cachedWebResources = new List<DeployWebResource>();
            var cached = GetCached(nameof(VsixCache.WebResources));
            if (cached != null) cachedWebResources = (List<DeployWebResource>)cached;
            var found = cachedWebResources.Where(x => x.WebResourceName == selectedWebResource.WebResourceName).FirstOrDefault();
            if (found != null) cachedWebResources.Remove(found);
            cachedWebResources.Add(selectedWebResource);
            SetCached(nameof(VsixCache.WebResources), cachedWebResources);
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
}
