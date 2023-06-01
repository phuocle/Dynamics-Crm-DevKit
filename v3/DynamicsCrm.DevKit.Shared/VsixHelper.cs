using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {
        public static class SelectedItem
        {
            public static SolutionItem GetPhysicalFile()
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () => {
                    return await GetPhysicalFileAsync();
                });
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
            public static string FullFileName
            {
                get
                {
                    var selectedItem = GetPhysicalFile();
                    return selectedItem.FullPath;
                }
            }
            public static string FileName
            {
                get
                {
                    return Path.GetFileName(FullFileName);
                }
            }
        }
        public static string GetDynamicsCrmDevKitJsonFileName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetDynamicsCrmDevKitJsonFileNameAsync();
            });
        }
        public static string GetSolutionFolder()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetSolutionFolderAsync();
            });
        }
        public static async Task<string> GetSolutionFolderAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}";
        }

        public static string GetSolutionName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetSolutionNameAsync();
            });
        }
        public static async Task<string> GetSolutionNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetFileNameWithoutExtension(solution.FullPath)}";
        }

        public static string GetActiveProjectFolder()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetActiveProjectFolderAsync();
            });
        }
        public static async Task<string> GetActiveProjectFolderAsync()
        {
            var project = await VS.Solutions.GetActiveProjectAsync();
            return $"{Path.GetDirectoryName(project.FullPath)}";
        }
        public static string GetDynamicsCrmDevKitCachedJsonFileName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetDynamicsCrmDevKitCachedJsonFileNameAsync();
            });
        }
        public static async Task<string> GetDynamicsCrmDevKitJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitJson}";
        }
        public static async Task<string> GetDynamicsCrmDevKitCachedJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitCachedJson}";
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

        public static bool IsExistProject(string projectName)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await IsExistProjectAsync(projectName);
            });
        }

        public static async Task<bool> IsExistProjectAsync(string projectName)
        {
            var projects = await VS.Solutions.GetAllProjectsAsync(ProjectStateFilter.All);
            return projects.Any(x => x.Name == projectName);
        }
    }
}
