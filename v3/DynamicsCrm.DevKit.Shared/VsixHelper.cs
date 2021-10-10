using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {
        public static class SelectedItem
        {
            public static SolutionItem PhysicalFile()
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () => {
                    return await PhysicalFileAsync();
                });
            }
            public static async Task<SolutionItem> PhysicalFileAsync()
            {
                var selectedItem = await VS.Solutions.GetActiveItemAsync();
                return selectedItem;
            }
            public static string Extension()
            {
                var selectedItem = PhysicalFile();
                return Path.GetExtension(selectedItem.FullPath);
            }
            public static string FullFileName()
            {
                var selectedItem = PhysicalFile();
                return selectedItem.FullPath;
            }
            public static string FileName()
            {
                var fullFileName = FullFileName();
                return Path.GetFileName(fullFileName);
            }
        }
        public static string GetDynamicsCrmDevKitJsonFileName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetDynamicsCrmDevKitJsonFileNameAsync();
            });
        }
        public static async Task<string> GetDynamicsCrmDevKitJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitJson}";
        }
        public static DevKitConnections GetDevKitConnections()
        {
            var fileName = GetDynamicsCrmDevKitJsonFileName();
            if (fileName == null || !File.Exists(fileName))
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
            if (fileName != null)
                Utility.ForceWriteAllText(fileName, json);
        }
        public static void SaveDefaultCrmConnection(string defaultCrmConnection)
        {
            var devKitConnections = GetDevKitConnections();
            if (devKitConnections != null)
            {
                devKitConnections.DefaultCrmConnection = defaultCrmConnection;
                SaveDevKitConnections(devKitConnections);
            }
        }
    }
}
