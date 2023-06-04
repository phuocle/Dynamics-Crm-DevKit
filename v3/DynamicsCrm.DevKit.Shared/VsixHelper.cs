using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections;
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

        public static string GetDynamicsCrmDevKitCliJsonFileName()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetDynamicsCrmDevKitCliJsonFileNameAsync();
            });
        }

        public static async Task<string> GetDynamicsCrmDevKitCliJsonFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitCliJson}";
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

        internal static void FixProjectFolder(object dte, EnvDTE.Project project, string projectName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var DTE = (EnvDTE.DTE)dte;
            var oldProjectFolder = Path.GetDirectoryName(project.FullName);
            var newProjectFolder = Directory.GetParent(oldProjectFolder).FullName + "\\" + projectName;
            var projectFileName = Path.GetFileName(project.FullName);
            DTE.Solution.Remove(project);
            Directory.Move(oldProjectFolder, newProjectFolder);
            DTE.Solution.AddFromFile(newProjectFolder + "\\" + projectFileName);
            DTE.Solution.SaveAs(DTE.Solution.FullName);
        }

        internal static bool IsSharedProjectExist()
        {
            var sharedProjectName = $"{VsixHelper.GetSolutionName()}.Shared";
            if (!VsixHelper.IsExistProject(sharedProjectName))
            {
                VS.MessageBox.ShowError($"Please add DynamicsCrm.DevKit 01. Shared Project and try it again");
                return false;
            }
            return true;
        }

        internal static bool IsProxyTypesProjectExist()
        {
            var proxyTypesProjectName = $"{VsixHelper.GetSolutionName()}.ProxyTypes";
            if (!VsixHelper.IsExistProject(proxyTypesProjectName))
            {
                VS.MessageBox.ShowError($"Please add DynamicsCrm.DevKit 12. Proxy Types Project and try it again");
                return false;
            }
            return true;
        }

        internal static void ThrowWizardCancelledException(string OOBDestinationDirectory)
        {
            Utility.TryDeleteDirectory(OOBDestinationDirectory);
            throw new WizardCancelledException();
        }

        internal static bool IsValidProjectName(string projectName)
        {
            var list = new List<string>() { "/", "?", ":",  "&",  @"\",  "*",  "\"",  "<",  ">", "|", "#" , "%", "'" };
            return list.Count(x => projectName.Contains(x)) == 0;
        }

        internal static List<XrmEntity> GetAllProjects()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetAllProjectsAsync();
            });
        }

        private static async  Task<List<XrmEntity>> GetAllProjectsAsync()
        {
            var list = new List<XrmEntity>();
            var projects = await VS.Solutions.GetAllProjectsAsync();
            foreach (var project in projects)
            {
                if (
                    project.Name.EndsWith(".Test") ||
                    project.Name.EndsWith(".UiTest") ||
                    project.Name.EndsWith(".Shared") ||
                    project.Name.EndsWith(".ProxyTypes")
                    ) continue;
                if (
                    await IsExistProjectAsync($"{project.Name}.Test") ||
                    await IsExistProjectAsync($"{project.Name}.UiTest")
                    ) continue;
                list.Add(new XrmEntity {
                    Name = project.Name
                });
            }
            return list;
        }
    }
}
