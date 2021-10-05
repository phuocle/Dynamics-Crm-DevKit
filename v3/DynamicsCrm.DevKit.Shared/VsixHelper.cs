using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {
        public static DTE DTE { get; set; }

        public static string GetSelectedItemExtension()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (DTE?.SelectedItems?.Count != 1) return null;
            var selectedItem = DTE.SelectedItems.Item(1);
            if (selectedItem.ProjectItem == null) return null;
            var fileName = selectedItem.ProjectItem.FileNames[0];
            return Path.GetExtension(fileName);
        }
        public static string GetDynamicsCrmDevKitJsonFileName()
        {
            var solutionFullName = DTE?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new Exception($"{nameof(solutionFullName)} not found"));
            return $"{fInfo.DirectoryName}\\{Const.DynamicsCrmDevKitJson}";
        }

        public static DevKitConnections GetDevKitConnections()
        {
            var fileName = GetDynamicsCrmDevKitJsonFileName();
            if (!File.Exists(fileName))
            {
                return new DevKitConnections()
                {
                    CrmConnections = new List<CrmConnection>()
                };
            }
            var json = File.ReadAllText(fileName);
            var devKitConnections = SimpleJson.DeserializeObject<DevKitConnections>(json);
            if (devKitConnections.CrmConnections == null) devKitConnections.CrmConnections = new List<CrmConnection>();
            return devKitConnections;
        }

        public static void SaveDevKitConnections(DevKitConnections connections)
        {
            var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(connections));
            var fileName = GetDynamicsCrmDevKitJsonFileName();
            Utility.ForceWriteAllText(fileName, json);
        }

        public static void SaveDefaultCrmConnection(string defaultCrmConnection)
        {
            var devKitConnections = GetDevKitConnections();
            devKitConnections.DefaultCrmConnection = defaultCrmConnection;
            SaveDevKitConnections(devKitConnections);
        }

        public static object GetCache(string name)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (DTE == null) return null;
            var globals = DTE.Globals;
            return globals.VariableExists[name] ? globals[name] : null;
        }

        public static void SetCache(string name, object @object)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (DTE == null) return;
            var globals = DTE.Globals;
            globals[name] = @object;
        }

        public static CrmServiceClient GetCacheCrmServiceClient()
        {
            if (DTE == null) return null;
            var cached = GetCache(nameof(Const.CACHE.CrmServiceClient));
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
                        SetCache(nameof(Const.CACHE.CrmServiceClient), service);
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

        private static void LoginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }
    }
}
