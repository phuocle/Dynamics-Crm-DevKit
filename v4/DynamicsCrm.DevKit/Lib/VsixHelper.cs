using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using EnvDTE80;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit
{
    public class VsixHelper
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
                    CrmConnections = []
                };
            }
            var json = await Task.Run(() => File.ReadAllText(fileName));
            var devKitConnections = SimpleJson.DeserializeObject<DevKitConnections>(json);
            devKitConnections.CrmConnections ??= [];
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
            configJson.WebResources = [.. configJson.WebResources.OrderBy(x => x.WebResource)];
            var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
            await FileHelper.ForceWriteAllTextAsync(fileName, json);
        }

        public static async Task SaveDevKitConnectionsAsync(DevKitConnections connections)
        {
            var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(connections));
            var fileName = await GetDynamicsCrmDevKitJsonFileNameAsync();
            if (fileName != null && File.Exists(fileName)) await FileHelper.ForceWriteAllTextAsync(fileName, json);
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
        public static async Task<string> GetSolutionNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return Path.GetFileNameWithoutExtension(solution.FullPath);
        }

        public static string GetSolutionName(object dte)
        {
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            if (dte == null) return string.Empty;
            
            var dte2 = (DTE2)dte;
            var solutionFullPath = dte2.Solution?.FullName;
            if (string.IsNullOrEmpty(solutionFullPath)) return string.Empty;
            
            return Path.GetFileNameWithoutExtension(solutionFullPath);
        }

        public static async Task<string> GetActiveProjectFolderAsync()
        {
            var project = await VS.Solutions.GetActiveProjectAsync();
            return $"{Path.GetDirectoryName(project.FullPath)}";
        }

        public static async Task<string> GetSharedProjectAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            var solutionFullName = solution?.FullPath;
            if (string.IsNullOrEmpty(solutionFullName))
                return string.Empty;
                
            if (solutionFullName.EndsWith(".Test.sln")) 
                solutionFullName = solutionFullName.Substring(0, solutionFullName.Length - ".Test.sln".Length) + ".sln";
            if (!File.Exists(solutionFullName)) 
                solutionFullName = solution?.FullPath;
                
            if (string.IsNullOrEmpty(solutionFullName))
                return string.Empty;
                
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{ProjectType.Shared}";
        }

        public static async Task<bool> IsProjectExistAsync(string projectName)
        {
            if (string.IsNullOrEmpty(projectName))
                return false;
            var projects = await VS.Solutions.GetAllProjectsAsync(ProjectStateFilter.All);
            return projects.Any(x => x.Name == projectName);
        }

        public static bool HasImplementedPlugin(CodeClass @class)
        {
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeInterface @interface in @class.ImplementedInterfaces)
            {
                if (@interface.FullName == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }
            foreach (var @base in @class.Bases)
            {
                if (@base is not CodeClass baseClass) continue;
                if (HasImplementedPlugin(baseClass))
                    return true;
            }
            return false;
        }

        public static bool HasImplementedWorkflow(CodeClass @class)
        {
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            foreach (var @base in @class.Bases)
            {
                if (@base is not CodeClass baseClass) continue;
                if (baseClass.FullName == "System.Activities.CodeActivity")
                    return true;
                if (HasImplementedWorkflow(baseClass))
                    return true;
            }
            return false;
        }

        public static bool HasAttributeCrmPluginRegistration(CodeClass @class)
        {
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "CrmPluginRegistration") return true;
            }
            return false;
        }

        public static void FixProjectFolder(object dte, EnvDTE.Project project, string projectName)
        {
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            if (dte == null || project == null || string.IsNullOrEmpty(projectName))
                return;

            try
            {
                var currentProjectPath = Path.GetDirectoryName(project.FullName);
                if (string.IsNullOrEmpty(currentProjectPath))
                    return;
                var currentFolderName = Path.GetFileName(currentProjectPath);
                if (string.Equals(currentFolderName, projectName, StringComparison.OrdinalIgnoreCase))
                    return;
                var solutionDirectory = Directory.GetParent(currentProjectPath)?.FullName;
                if (string.IsNullOrEmpty(solutionDirectory))
                    return;
                var newProjectPath = Path.Combine(solutionDirectory, projectName);
                var dte2 = (DTE2)dte;

                // STEP 1: Completely unload the project to release all file handles
                var solutionFullPath = dte2.Solution.FullName;
                var projectFullPath = project.FullName;

                // Save solution first
                dte2.Solution.SaveAs(solutionFullPath);

                // Remove project from solution completely
                dte2.Solution.Remove(project);

                // Force garbage collection to release any remaining handles
                GC.Collect();
                GC.WaitForPendingFinalizers();
                GC.Collect();

                // STEP 2: Use retry logic for the move operation
                var moveSuccess = RetryFileOperation(() =>
                {
                    // Clean up target directory if it exists
                    if (Directory.Exists(newProjectPath))
                    {
                        DeleteDirectoryWithRetry(newProjectPath);
                    }

                    // Move the directory
                    Directory.Move(currentProjectPath, newProjectPath);
                    return true;
                }, maxRetries: 5, delayMs: 500);

                if (!moveSuccess)
                {
                    System.Diagnostics.Debug.WriteLine("Failed to move project directory after multiple retries");
                    return;
                }

                // STEP 3: Rename project files
                RenameProjectFiles(newProjectPath, currentFolderName, projectName);

                // STEP 4: Add project back to solution with new path
                var newProjectFile = Path.Combine(newProjectPath, projectName + ".shproj");
                if (File.Exists(newProjectFile))
                {
                    // Use retry for adding project back
                    RetryFileOperation(() =>
                    {
                        Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
                        dte2.Solution.AddFromFile(newProjectFile);
                        return true;
                    }, maxRetries: 3, delayMs: 200);
                }

                // Save the solution with the updated project
                dte2.Solution.SaveAs(solutionFullPath);
            }
            catch (Exception ex)
            {
                // Log error but don't fail the wizard
                System.Diagnostics.Debug.WriteLine($"FixProjectFolder error: {ex.Message}");
            }

            bool RetryFileOperation(Func<bool> operation, int maxRetries = 3, int delayMs = 500)
            {
                for (int i = 0; i < maxRetries; i++)
                {
                    try
                    {
                        return operation();
                    }
                    catch (IOException) when (i < maxRetries - 1)
                    {
                        // Wait before retry, with exponential backoff
                        System.Threading.Thread.Sleep(delayMs * (i + 1));

                        // Force garbage collection between retries
                        GC.Collect();
                        GC.WaitForPendingFinalizers();
                    }
                    catch (UnauthorizedAccessException) when (i < maxRetries - 1)
                    {
                        // Wait before retry for access issues
                        System.Threading.Thread.Sleep(delayMs * (i + 1));

                        // Force garbage collection between retries
                        GC.Collect();
                        GC.WaitForPendingFinalizers();
                    }
                }
                return false;
            }
            void DeleteDirectoryWithRetry(string path)
            {
                RetryFileOperation(() =>
                {
                    if (Directory.Exists(path))
                    {
                        // First, remove read-only attributes from all files
                        foreach (var file in Directory.GetFiles(path, "*", SearchOption.AllDirectories))
                        {
                            File.SetAttributes(file, FileAttributes.Normal);
                        }
                        Directory.Delete(path, true);
                    }
                    return true;
                }, maxRetries: 3, delayMs: 300);
            }
            void RenameProjectFiles(string projectPath, string oldName, string newName)
            {
                try
                {
                    // Rename .shproj file
                    var oldProjectFile = Path.Combine(projectPath, oldName + ".shproj");
                    var newProjectFile = Path.Combine(projectPath, newName + ".shproj");

                    if (File.Exists(oldProjectFile) && !string.Equals(oldProjectFile, newProjectFile, StringComparison.OrdinalIgnoreCase))
                    {
                        RetryFileOperation(() =>
                        {
                            File.Move(oldProjectFile, newProjectFile);
                            return true;
                        });
                    }

                    // Rename .projitems file
                    var oldProjItemsFile = Path.Combine(projectPath, oldName + ".projitems");
                    var newProjItemsFile = Path.Combine(projectPath, newName + ".projitems");

                    if (File.Exists(oldProjItemsFile) && !string.Equals(oldProjItemsFile, newProjItemsFile, StringComparison.OrdinalIgnoreCase))
                    {
                        RetryFileOperation(() =>
                        {
                            File.Move(oldProjItemsFile, newProjItemsFile);
                            return true;
                        });
                    }
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"RenameProjectFiles error: {ex.Message}");
                }
            }
        }
    }
}
