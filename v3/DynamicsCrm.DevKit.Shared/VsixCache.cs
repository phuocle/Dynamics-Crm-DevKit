﻿using Community.VisualStudio.Toolkit;
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

        public DeployWebResource GetNewWebResource(string fullFileName)
        {
            var form = new FormWebResource(true);
            form.ShowDialog();
            return form.SelectedWebResource;
        }

        public DeployWebResource GetExistingWebResource(CrmServiceClient service, List<DeployWebResource> webResources, string fullFileName)
        {
            var form = new FormWebResource(webResources, fullFileName);
            form.ShowDialog();
            var selectedWebResource = form.SelectedWebResource;
            var cachedWebResources = AddWebResourcesToCached(selectedWebResource);
            SavedTo_DynamicsCrmDevKitCachedJsonFileName(cachedWebResources);
            return selectedWebResource;
        }

        private void SavedTo_DynamicsCrmDevKitCachedJsonFileName(List<DeployWebResource> cachedWebResources)
        {
            var json = string.Empty;
            var savedJson = new SavedJson();
            var fileName = VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName();
            if (File.Exists(fileName))
            {
                json = File.ReadAllText(VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName());
                savedJson = SimpleJson.DeserializeObject<SavedJson>(json);
            }
            cachedWebResources = cachedWebResources.OrderBy(x => x.WebResourceName).ToList();
            savedJson.DeployWebResources = cachedWebResources;
            json = JsonHelper.FormatJson(SimpleJson.SerializeObject(savedJson));
            Utility.ForceWriteAllText(fileName, json);
        }

        public static void SavedJson(string json)
        {
            var fileName = VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName();
            if (fileName != null) Utility.ForceWriteAllText(fileName, json);
        }

        private List<DeployWebResource> AddWebResourcesToCached(DeployWebResource selectedWebResource)
        {
            var cachedWebResources = new List<DeployWebResource>();
            var cached = GetCached(nameof(VsixCache.WebResources));
            if (cached != null) cachedWebResources = (List<DeployWebResource>)cached;
            cachedWebResources.Add(selectedWebResource); ;
            SetCached(nameof(VsixCache.WebResources), cachedWebResources);
            return cachedWebResources;
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