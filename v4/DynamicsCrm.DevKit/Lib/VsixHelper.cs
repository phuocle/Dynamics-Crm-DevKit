using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit
{
    internal class VsixHelper
    {
        public static class SelectedItem
        {
            public static async Task<SolutionItem> GetSolutionItemAsync()
            {
                var selectedItem = await VS.Solutions.GetActiveItemAsync();
                return selectedItem;
            }
            public static async Task<string> GetExtensionAsync()
            {
                var selectedItem = await GetSolutionItemAsync();
                return Path.GetExtension(selectedItem.FullPath);
            }

            public static async Task<string> GetFullFileNameAsync()
            {
                var selectedItem = await GetSolutionItemAsync();
                return selectedItem.FullPath;
            }

            public static async Task<string> GetFileNameAsync()
            {
                var fullFileName = await GetFullFileNameAsync();
                return Path.GetFileName(fullFileName);
            }
        }

        public static async Task<string> GetDynamicsCrmDevKitJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitJson}";
        }

        public static async Task<string> GetDynamicsCrmDevKitConfigJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitConfigJson}";
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

        public static async Task SaveDynamicsCrmDevKitConfigJsonAsync(DeployWebResource deployWebResource)
        {
            var configJson = new ConfigJson();
            var fileName = await GetDynamicsCrmDevKitConfigJsonFileNameAsync();
            if (File.Exists(fileName))
            {
                configJson.WebResources = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName))).WebResources;
            }
            var found = configJson.WebResources.Where(x => x?.File == deployWebResource?.File).FirstOrDefault();
            if (found != null)
            {
                if (found.WebResource != deployWebResource.WebResource)
                    found.WebResource = deployWebResource.WebResource;
                else
                    return;                
            }
            else
            {   
                configJson.WebResources.Add(deployWebResource); 
            }
            configJson.WebResources = configJson.WebResources.OrderBy(x => x.WebResource).ToList();
            var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
            Helper.ForceWriteAllText(fileName, json);
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

        public static async Task<string> GetSolutionFolderAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return Path.GetDirectoryName(solution.FullPath);
        }

        public static async Task<string> GetActiveProjectFolderAsync()
        {
            var project = await VS.Solutions.GetActiveProjectAsync();
            return $"{Path.GetDirectoryName(project.FullPath)}";
        }
    }
}
