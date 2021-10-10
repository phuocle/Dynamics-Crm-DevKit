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
        public static SolutionItem GetSelectedItemPhysicalFile()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async delegate {
                return await GetSelectedItemPhysicalFileAsync();
            });
        }
        public static async Task<SolutionItem> GetSelectedItemPhysicalFileAsync()
        {
            var selectedItem = await VS.Solutions.GetActiveItemAsync();
            return selectedItem;
        }
        public static string GetSelectedItemExtension()
        {
            var selectedItem = GetSelectedItemPhysicalFile();
            return selectedItem?.FullPath == null ? null : Path.GetExtension(selectedItem.FullPath);
        }
        public static string GetSelectedItemFullFileName()
        {
            var selectedItem = GetSelectedItemPhysicalFile();
            return selectedItem?.FullPath == null ? null : selectedItem.FullPath;
        }
        public static string GetSelectedItemFileName()
        {
            var fullFileName = GetSelectedItemFullFileName();
            return fullFileName == null ? null : Path.GetFileName(fullFileName);
        }
        public static string GetDynamicsCrmDevKitJsonFileName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async delegate {
                return await GetDynamicsCrmDevKitJsonFileNameAsync();
            });
        }
        public static async Task<string> GetDynamicsCrmDevKitJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return solution?.FullPath == null ? null : $"{solution.FullPath}\\{Const.DynamicsCrmDevKitJson}";
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
