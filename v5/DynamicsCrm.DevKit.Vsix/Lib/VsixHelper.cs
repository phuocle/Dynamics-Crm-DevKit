using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    public class VsixHelper
    {
        private static readonly ConcurrentDictionary<string, string> EmbeddedResourceCache = new ConcurrentDictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        internal sealed class ProjectItemsContainer
        {
            internal string FolderPath { get; set; }
            internal ProjectItems ProjectItems { get; set; }
            internal EnvDTE.Project Project { get; set; }
        }

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

            public static async Task AddFileToProjectAsync(string filePath)
            {
                var container = await GetProjectItemsContainerAsync();
                await TryAddProjectItemAsync(container?.ProjectItems, filePath);
            }

            internal static async Task<ProjectItemsContainer> GetProjectItemsContainerAsync()
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await VS.GetServiceAsync<DTE, DTE>();
                if (dte?.SelectedItems != null && dte.SelectedItems.Count > 0)
                {
                    var container = TryGetProjectItemsContainer(dte.SelectedItems.Item(1));
                    if (container?.ProjectItems != null) return container;
                }

                var activeProjects = dte?.ActiveSolutionProjects as Array;
                if (activeProjects?.Length > 0 && activeProjects.GetValue(0) is EnvDTE.Project activeProject)
                {
                    return new ProjectItemsContainer
                    {
                        FolderPath = NormalizeFolderPath(activeProject.FullName),
                        ProjectItems = activeProject.ProjectItems,
                        Project = activeProject
                    };
                }

                var selectedItem = await GetSolutionItemAsync();
                return new ProjectItemsContainer
                {
                    FolderPath = NormalizeFolderPath(selectedItem?.FullPath)
                };
            }

            private static ProjectItemsContainer TryGetProjectItemsContainer(EnvDTE.SelectedItem selectedItem)
            {
                ThreadHelper.ThrowIfNotOnUIThread();
                if (selectedItem == null) return null;

                if (selectedItem.ProjectItem != null)
                {
                    var projectItem = selectedItem.ProjectItem;
                    var itemPath = TryGetProjectItemFullPath(projectItem);
                    var isFolder = string.Equals(projectItem.Kind, EnvDTE.Constants.vsProjectItemKindPhysicalFolder, StringComparison.OrdinalIgnoreCase) || IsFolderPath(itemPath);
                    var folderPath = NormalizeFolderPath(itemPath);
                    var projectItems = isFolder ? projectItem.ProjectItems : projectItem.Collection;

                    return new ProjectItemsContainer
                    {
                        FolderPath = folderPath,
                        ProjectItems = projectItems,
                        Project = projectItem.ContainingProject
                    };
                }

                if (selectedItem.Project != null)
                {
                    return new ProjectItemsContainer
                    {
                        FolderPath = NormalizeFolderPath(selectedItem.Project.FullName),
                        ProjectItems = selectedItem.Project.ProjectItems,
                        Project = selectedItem.Project
                    };
                }

                return null;
            }
        }

        public static async Task<string> GetDynamicsCrmDevKitJsonFullFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitJson}";
        }


        public static async Task<string> GetDynamicsCrmDevKitJsonCliJsonFullFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitCliJson}";
        }
        public static async Task<string> GetDynamicsCrmDevKitConfigJsonFullFileNameAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return $"{Path.GetDirectoryName(solution.FullPath)}\\{Const.DynamicsCrmDevKitConfigJson}";
        }

        public static async Task<DevKitConnections> GetDevKitConnectionsAsync()
        {
            var fileName = await GetDynamicsCrmDevKitJsonFullFileNameAsync();
            if (fileName == null || !File.Exists(fileName))
            {
                return new DevKitConnections()
                {
                    CrmConnections = []
                };
            }
            var json = await Task.Run(() => File.ReadAllText(fileName));
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var devKitConnections = JsonSerializer.Deserialize<DevKitConnections>(json, options);
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
            var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
            if (File.Exists(fileName)) configJson = JsonHelper.Deserialize<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName)));
            var found = configJson.WebResources.Where(x => x?.File == deployWebResource?.File).FirstOrDefault();
            if (found != null)
            {
                found.WebResource = deployWebResource.WebResource;
                found.WebResourceId = deployWebResource.WebResourceId;
                found.IsManaged = deployWebResource.IsManaged;
                found.SolutionUniqueName = deployWebResource.SolutionUniqueName;
            }
            else
            {   
                configJson.WebResources.Add(deployWebResource); 
            }
            configJson.WebResources = [.. configJson.WebResources.OrderBy(x => x.File)];
            var json = JsonHelper.FormatJson(JsonHelper.Serialize(configJson));
            await FileHelper.ForceWriteAllTextAsync(fileName, json);
        }

        public static async Task SaveDevKitConnectionsAsync(DevKitConnections connections)
        {
            // Migrate legacy format to new format for ClientSecret connections
            foreach (var conn in connections.CrmConnections)
            {
                if (conn.Type == "ClientSecret")
                {
                    // Migrate UserName -> ClientId if needed
                    if (string.IsNullOrEmpty(conn.ClientId) && !string.IsNullOrEmpty(conn.UserName))
                    {
                        conn.ClientId = conn.UserName;
                        conn.UserName = null;
                    }
                    // Migrate Password -> ClientSecret if needed
                    if (string.IsNullOrEmpty(conn.ClientSecret) && !string.IsNullOrEmpty(conn.Password))
                    {
                        conn.ClientSecret = conn.Password;
                        conn.Password = null;
                    }
                }
            }

            // Use System.Text.Json with options to ignore null values
            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
            };
            var json = JsonSerializer.Serialize(connections, options);
            var fileName = await GetDynamicsCrmDevKitJsonFullFileNameAsync();
            await FileHelper.ForceWriteAllTextAsync(fileName, json);
        }

        public static async Task<ServiceClient> CreateServiceClientAsync(CrmConnection crmConnection, Action<string> deviceCodeCallback = null)
        {
            try
            {
                var type = crmConnection.Type ?? "OAuth";
                // Use ConnectionBuilderFactory for supported connection types
                if (ConnectionBuilderFactory.IsSupported(type))
                {
                    var builder = ConnectionBuilderFactory.GetBuilder(type);
                    
                    // Set DeviceCode callback if applicable
                    if (builder is DeviceCodeConnectionBuilder deviceCodeBuilder && deviceCodeCallback != null)
                    {
                        deviceCodeBuilder.DeviceCodeCallback = deviceCodeCallback;
                    }
                    
                    return await builder.CreateServiceClientAsync(crmConnection);
                }
                
                throw new InvalidOperationException($"Connection type '{type}' is not supported.");
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"DevKit: Failed to create ServiceClient: {ex.Message}");
                return null;
            }
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

        public static async Task<string> GetActiveProjectFolderAsync()
        {
            var project = await VS.Solutions.GetActiveProjectAsync();
            return $"{Path.GetDirectoryName(project.FullPath)}";
        }

        public static async Task<string> GetSharedProjectAsync()
        {
            var solutionName = await VsixHelper.GetSolutionNameAsync();
            return $"{solutionName}.{ProjectType.Shared}";
        }

        public static async Task<bool> IsProjectExistAsync(string projectName)
        {
            if (string.IsNullOrEmpty(projectName))
                return false;
            var projects = await VS.Solutions.GetAllProjectsAsync(ProjectStateFilter.All);
            return projects.Any(x => x.Name == projectName);
        }


        internal static bool IsValidProjectName(string projectName)
        {
            var list = new List<string>() { "/", "?", ":", "&", @"\\", "*", "\"", "<", ">", "|", "#", "%", "'" };
            return list.Count(x => projectName.Contains(x)) == 0;
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

        public static EnvDTE.Project FixProjectFolder(EnvDTE.DTE dte, EnvDTE.Project project, string projectName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var oldProjectFolder = Path.GetDirectoryName(project.FullName);
            var newProjectFolder = Path.Combine(Directory.GetParent(oldProjectFolder).FullName, projectName);
            var projectFileName = Path.GetFileName(project.FullName);

            try
            {
                // Step 1: Close all documents in the project with better error handling
                var documentsToClose = new List<Document>();
                try
                {
                    foreach (Document doc in dte.Documents)
                    {
                        if (doc.FullName.StartsWith(oldProjectFolder, StringComparison.OrdinalIgnoreCase))
                        {
                            documentsToClose.Add(doc);
                        }
                    }

                    foreach (var doc in documentsToClose)
                    {
                        try
                        {
                            doc.Close(vsSaveChanges.vsSaveChangesPrompt);
                        }
                        catch (Exception ex)
                        {
                            System.Diagnostics.Debug.WriteLine($"Failed to close document {doc.FullName}: {ex.Message}");
                        }
                    }
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"Error during document closure: {ex.Message}");
                }

                // Step 2: Remove project from solution
                dte.Solution.Remove(project);

                // Step 3: Copy directory to new location, then delete old in background
                CopyDirectoryThenDelete(oldProjectFolder, newProjectFolder);

                // Step 4: Re-add project to solution
                var newProjectPath = Path.Combine(newProjectFolder, projectFileName);
                var p = dte.Solution.AddFromFile(newProjectPath);
                dte.Solution.SaveAs(dte.Solution.FullName);
                return p;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to fix project folder: {ex.Message}", ex);
            }
        }

        private static void CopyDirectoryThenDelete(string sourceDir, string destDir)
        {
            // Step 1: Create destination directory
            Directory.CreateDirectory(destDir);

            // Step 2: Copy all files and subdirectories
            CopyDirectoryRecursive(sourceDir, destDir);

            // Step 3: Delete source directory in background with retry
            // This runs on a separate thread so it doesn't block the wizard
            _ = System.Threading.Tasks.Task.Run(() =>
            {
                DeleteDirectoryWithRetry(sourceDir);
            });
        }

        private static void CopyDirectoryRecursive(string sourceDir, string destDir)
        {
            // Copy all files
            foreach (var file in Directory.GetFiles(sourceDir))
            {
                var destFile = Path.Combine(destDir, Path.GetFileName(file));
                File.Copy(file, destFile, overwrite: true);
            }

            // Copy all subdirectories
            foreach (var dir in Directory.GetDirectories(sourceDir))
            {
                var destSubDir = Path.Combine(destDir, Path.GetFileName(dir));
                Directory.CreateDirectory(destSubDir);
                CopyDirectoryRecursive(dir, destSubDir);
            }
        }

        private static void DeleteDirectoryWithRetry(string path)
        {
            const int maxRetries = 10;
            const int delayMs = 1000;

            for (int attempt = 0; attempt < maxRetries; attempt++)
            {
                try
                {
                    // Wait before first attempt to let VS release file handles
                    System.Threading.Thread.Sleep(delayMs);

                    // Force garbage collection to release any file handles
                    GC.Collect();
                    GC.WaitForPendingFinalizers();
                    GC.Collect();

                    if (Directory.Exists(path))
                    {
                        Directory.Delete(path, recursive: true);
                    }
                    return; // Success
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"Delete attempt {attempt + 1} failed: {ex.Message}");
                    // Continue trying
                }
            }
            // If all retries fail, log but don't throw - the project is already in the correct location
            System.Diagnostics.Debug.WriteLine($"Failed to delete old project folder after {maxRetries} attempts: {path}");
        }

        internal static void ThrowWizardCancelledException(string OOBDestinationDirectory = null)
        {
            if (OOBDestinationDirectory != null) Helper.TryDeleteDirectory(OOBDestinationDirectory);
            throw new WizardCancelledException();
        }

        internal static async Task AddDynamicsCrmDevKitCliJsonAsync()
        {
            var cliJsonFile = await VsixHelper.GetDynamicsCrmDevKitJsonCliJsonFullFileNameAsync();
            if (!File.Exists(cliJsonFile))
            {
                var solutionName = await VsixHelper.GetSolutionNameAsync();
                var json = await VsixHelper.ReadEmbeddedResourceAsync(Const.DynamicsCrmDevKitCliJson);
                json = json
                        .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                        .Replace("???.Plugin.*.nupkg", $"{solutionName}.Plugin.*.nupkg")
                        .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.CustomApi.*.dll", $"{solutionName}.CustomApi.*.dll")
                        .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                        .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                        .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll");
                await FileHelper.ForceWriteAllTextAsync(cliJsonFile, json);
            }

            ProjectEnvironment.EnsureFile(Path.GetDirectoryName(cliJsonFile));
        }

        internal static async Task<string> ReadEmbeddedResourceAsync(string path)
        {
            using (ItemTemplateTelemetry.Start("VsixHelper", "vsix", "ReadEmbeddedResource", $"path={path}"))
            {
                if (!string.IsNullOrWhiteSpace(path) && EmbeddedResourceCache.TryGetValue(path, out var cached))
                {
                    ItemTemplateTelemetry.Log("VsixHelper", "vsix", "ReadEmbeddedResource", $"cacheHit path={path}");
                    return cached;
                }

                try
                {
                    var content = await Helper.ReadEmbeddedResourceAsync($"{typeof(DevKitPackage).Assembly.GetName().Name}.Resources.{path}");
                    if (!string.IsNullOrWhiteSpace(path) && content != null)
                    {
                        EmbeddedResourceCache[path] = content;
                    }
                    return content;
                }
                catch
                {
                    // Resource not found - return null for graceful fallback
                    return null;
                }
            }
        }

        internal static async Task ExecuteCommandAsync(string command)
        {
            await VS.Commands.ExecuteAsync(command);
        }

        internal static string TryGetProjectItemFullPath(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItem == null) return null;
            try
            {
                for (short i = 1; i <= projectItem.FileCount; i++)
                {
                    var fileName = projectItem.FileNames[i];
                    if (!string.IsNullOrWhiteSpace(fileName)) return fileName;
                }
            }
            catch
            {
            }

            try
            {
                return projectItem.Properties?.Item("FullPath")?.Value as string;
            }
            catch
            {
            }

            return null;
        }

        internal static bool TrySetDependentUpon(ProjectItem childItem, string parentFileName)
        {
            using (ItemTemplateTelemetry.Start("VsixHelper", "vsix", "TrySetDependentUpon", $"child={childItem?.Name}; parent={parentFileName}"))
            {
                if (childItem == null || string.IsNullOrWhiteSpace(parentFileName)) return false;
                try
                {
                    ThreadHelper.ThrowIfNotOnUIThread();
                    childItem.Properties.Item("DependentUpon").Value = parentFileName;
                    return true;
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"DevKit: Unable to set DependentUpon for {childItem.Name}: {ex.Message}");
                    return false;
                }
            }
        }

        internal static async Task<ProjectItem> TryAddProjectItemAsync(ProjectItems projectItems, string filePath)
        {
            using (ItemTemplateTelemetry.Start("VsixHelper", "vsix", "TryAddProjectItem", $"filePath={filePath}"))
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                if (projectItems == null || string.IsNullOrWhiteSpace(filePath) || !File.Exists(filePath)) return null;

                try
                {
                    var existingItem = TryFindProjectItem(projectItems, filePath);
                    if (existingItem != null) return existingItem;
                    return projectItems.AddFromFile(filePath);
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"DevKit: Unable to add project item {filePath}: {ex.Message}");
                    return null;
                }
            }
        }

        private static ProjectItem TryFindProjectItem(ProjectItems projectItems, string filePath)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItems == null || string.IsNullOrWhiteSpace(filePath)) return null;
            var fileName = Path.GetFileName(filePath);
            foreach (ProjectItem item in projectItems)
            {
                if (item == null) continue;
                if (string.Equals(item.Name, fileName, StringComparison.OrdinalIgnoreCase)) return item;
                var itemPath = TryGetProjectItemFullPath(item);
                if (string.Equals(itemPath, filePath, StringComparison.OrdinalIgnoreCase)) return item;
            }
            return null;
        }

        private static string NormalizeFolderPath(string path)
        {
            if (string.IsNullOrWhiteSpace(path)) return path;
            if (IsFolderPath(path)) return path;
            return Path.GetDirectoryName(path);
        }

        private static bool IsFolderPath(string path)
        {
            if (string.IsNullOrWhiteSpace(path)) return false;
            if (Directory.Exists(path)) return true;
            if (File.Exists(path)) return false;
            return string.IsNullOrEmpty(Path.GetExtension(path));
        }

        public static async Task<bool> IsAddToSharedProjectAsync()
        {            
            await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var sharedProjectName = await VsixHelper.GetSharedProjectAsync();
            var activeProject = await VS.Solutions.GetActiveProjectAsync();
            if (activeProject != null && activeProject.Name == sharedProjectName) return true;
            var dte = await VS.GetServiceAsync<DTE, DTE>();
            if (dte?.SelectedItems == null || dte.SelectedItems.Count == 0) return false;
            EnvDTE.SelectedItem selectedItem = dte.SelectedItems.Item(1);
            string projectName = null;
            if (selectedItem.Project != null)
                projectName = selectedItem.Project.Name;
            else if (selectedItem.ProjectItem?.ContainingProject != null)
                projectName = selectedItem.ProjectItem.ContainingProject.Name;
            if (string.IsNullOrEmpty(projectName)) return false;
            return projectName == sharedProjectName;
        }
        internal static async Task<List<CustomTemplate>> GetCustomTemplatesAsync(ItemType itemType)
        {
            using (ItemTemplateTelemetry.Start("VsixHelper", "vsix", "GetCustomTemplates", $"itemType={itemType}"))
            {
                var customTemplates = new List<CustomTemplate>();
                var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                if (File.Exists(fileName))
                {
                    customTemplates = JsonHelper.Deserialize<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName))).CustomTemplates;
                    customTemplates = [.. customTemplates.Where(x => x.Type == $"{itemType}")];
                }
                if (itemType == ItemType.Test)
                {
                    customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = "Default", Body = await GetDefaultCustomTemplateBodyAsync(itemType), IsDefault = false });
                }
                else
                    customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = "Default", Body = await GetDefaultCustomTemplateBodyAsync(itemType), IsDefault = false });
                return customTemplates;
            }
        }

        internal static async Task<string> GetDefaultCustomTemplateBodyAsync(ItemType itemType, string subType = null)
        {
            using (ItemTemplateTelemetry.Start("VsixHelper", "vsix", "GetDefaultCustomTemplateBody", $"itemType={itemType}; subType={subType}"))
            {
                if (itemType == ItemType.Plugin)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.Plugin.tt");
                else if (itemType == ItemType.Workflow)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.Workflow.tt");
                else if (itemType == ItemType.CustomAction)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.CustomAction.tt");
                else if (itemType == ItemType.CustomApi)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.CustomApi.tt");
                else if (itemType == ItemType.Test)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.Test.tt");
                else if (itemType == ItemType.UiTest)
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.UiTest.tt");
                else if (itemType == ItemType.DataProvider)
                {
                    if (subType == $"Create")
                        return await VsixHelper.ReadEmbeddedResourceAsync("tt.DataProviderCreate.tt");
                    else if (subType == $"Update")
                        return await VsixHelper.ReadEmbeddedResourceAsync("tt.DataProviderUpdate.tt");
                    else if (subType == $"Delete")
                        return await VsixHelper.ReadEmbeddedResourceAsync("tt.DataProviderDelete.tt");
                    else if (subType == $"Retrieve")
                        return await VsixHelper.ReadEmbeddedResourceAsync("tt.DataProviderRetrieve.tt");
                    else if (subType == $"RetrieveMultiple")
                        return await VsixHelper.ReadEmbeddedResourceAsync("tt.DataProviderRetrieveMultiple.tt");
                }
                return string.Empty;
            }
        }

        internal static async Task SaveCustomTemplatesAsync(CustomTemplate save)
        {
            var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
            if (File.Exists(fileName))
            {
                var configJson = JsonHelper.Deserialize<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName)));
                var found = configJson.CustomTemplates.Where(x => x.Type == save.Type && x.Title == save.Title).FirstOrDefault();
                if (found != null)
                {
                    found.IsDefault = save.IsDefault;
                    found.Body = save.Body;
                }
                else
                {
                    configJson.CustomTemplates.Add(save);
                    configJson.CustomTemplates = [.. configJson.CustomTemplates.OrderBy(x => x.Type).ThenBy(x => x.Title)];
                }
                var json = JsonHelper.FormatJson(JsonHelper.Serialize(configJson));
                await FileHelper.ForceWriteAllTextAsync(fileName, json);
            }
            else
            {
                var configJson = new ConfigJson
                {
                    CustomTemplates = [save]
                };
                var json = JsonHelper.FormatJson(JsonHelper.Serialize(configJson));
                await FileHelper.ForceWriteAllTextAsync(fileName, json);
            }
        }        

        internal static async Task<int> PluginOrderAsync(string @class)
        {
            var baseName = @class?.Trim();
            if (string.IsNullOrWhiteSpace(baseName)) return 1;
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var dte = await VS.GetServiceAsync<DTE, DTE>();
            if (dte?.SelectedItems == null || dte.SelectedItems.Count == 0) return 1;
            EnvDTE.SelectedItem selectedItem = dte.SelectedItems.Item(1);
            ProjectItems containerItems = null;
            if (selectedItem.ProjectItem != null)
            {
                var kind = selectedItem.ProjectItem.Kind;
                if (!string.Equals(kind, EnvDTE.Constants.vsProjectItemKindPhysicalFile, StringComparison.OrdinalIgnoreCase))
                {
                    containerItems = selectedItem.ProjectItem.ProjectItems;
                }
            }
            else if (selectedItem.Project != null)
            {
                containerItems = selectedItem.Project.ProjectItems;
            }
            if (containerItems == null) return 1;
            int maxFound = 0;
            foreach (ProjectItem item in containerItems)
            {
                if (item == null) continue;
                string name = item.Name;
                if (string.IsNullOrEmpty(name)) continue;
                if (!name.EndsWith(".cs")) continue;
                var nameWithoutExt = System.IO.Path.GetFileNameWithoutExtension(name);
                if (nameWithoutExt.Equals(baseName, StringComparison.OrdinalIgnoreCase))
                {
                    if (maxFound < 1) maxFound = 1;
                    continue;
                }
                if (nameWithoutExt.StartsWith(baseName, StringComparison.OrdinalIgnoreCase))
                {
                    var suffix = nameWithoutExt.Substring(baseName.Length);
                    if (int.TryParse(suffix, out int number) && number > maxFound)
                        maxFound = number;
                }
            }
            return maxFound == 0 ? 1 : maxFound + 1;
        }
    }
}
