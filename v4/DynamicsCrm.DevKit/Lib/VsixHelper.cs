using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit
{
    internal class VsixHelper
    {
        public static class SelectedItem
        {
            public static SolutionItem GetPhysicalFile()
            {
                return ThreadHelper.JoinableTaskFactory.Run(GetPhysicalFileAsync);
            }
            public static async Task<SolutionItem> GetPhysicalFileAsync()
            {
                var selectedItem = await VS.Solutions.GetActiveItemAsync();
                return selectedItem;
            }
            public static string Extension
            {
                get
                {
                    var selectedItem = GetPhysicalFile();
                    return Path.GetExtension(selectedItem.FullPath);
                }
            }
        }

        public static async Task<string> GetDynamicsCrmDevKitJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitJson}";
        }       

        public static async Task<DevKitConnections> GetDevKitConnectionsAsync()
        {
            var fileName = await GetDynamicsCrmDevKitJsonFileNameAsync();
            if (fileName == null || !File.Exists(fileName))
            {
                return new DevKitConnections()
                {
                    CrmConnections = new List<CrmConnection>()
                };
            }
            var json = await Task.Run(() => File.ReadAllText(fileName));
            var devKitConnections = SimpleJson.DeserializeObject<DevKitConnections>(json);
            if (devKitConnections.CrmConnections == null)
                devKitConnections.CrmConnections = new List<CrmConnection>();
            return devKitConnections;
        }

        public static async Task SaveDefaultCrmConnectionAsync(string defaultCrmConnection)
        {
            var devKitConnections = await GetDevKitConnectionsAsync();
            if (devKitConnections != null)
            {
                devKitConnections.DefaultCrmConnection = defaultCrmConnection;
                await SaveDevKitConnectionsAsync(devKitConnections);
            }
        }

        public static async Task SaveDevKitConnectionsAsync(DevKitConnections connections)
        {
            var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(connections));
            var fileName = await GetDynamicsCrmDevKitJsonFileNameAsync();
            if (fileName != null)
            {
                await Task.Run(() => Helper.ForceWriteAllText(fileName, json));
            }
        }

        public static async Task<ServiceClient> CreateServiceClientAsync(CrmConnection crmConnection)
        {
            string connectionString = Helper.BuildConnectionString(crmConnection);
            try
            {
                return new ServiceClient(connectionString);
            }
            catch
            {
                await VS.MessageBox.ShowErrorAsync("Failed to connect create ServiceClient. Please check your connection settings.");
            }
            return null;
        }
    }
}
