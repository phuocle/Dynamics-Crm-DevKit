using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
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
            var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
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
            var fileName = await GetDynamicsCrmDevKitJsonFullFileNameAsync();
            await FileHelper.ForceWriteAllTextAsync(fileName, json);
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

                // Step 3: Move directory with improved retry logic
                MoveDirectoryWithRetry(oldProjectFolder, newProjectFolder);

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

        private static void MoveDirectoryWithRetry(string oldPath, string newPath)
        {
            const int maxRetries = 5;
            const int baseDelayMs = 500;
            const int maxDelayMs = 5000;

            for (int attempt = 0; attempt < maxRetries; attempt++)
            {
                try
                {
                    // Ensure target directory doesn't exist
                    if (Directory.Exists(newPath))
                    {
                        throw new InvalidOperationException($"Target directory already exists: {newPath}");
                    }

                    Directory.Move(oldPath, newPath);
                    return; // Success
                }
                catch (IOException ex) when (ex.Message.Contains("being used by another process") && attempt < maxRetries - 1)
                {
                    // Calculate exponential backoff delay
                    var delay = Math.Min(baseDelayMs * (int)Math.Pow(2, attempt), maxDelayMs);
                    
                    System.Diagnostics.Debug.WriteLine($"Directory move attempt {attempt + 1} failed, retrying in {delay}ms: {ex.Message}");
                    
                    System.Threading.Thread.Sleep(delay);
                    
                    // Force garbage collection to release any file handles
                    GC.Collect();
                    GC.WaitForPendingFinalizers();
                    GC.Collect();
                }
                catch (Exception ex)
                {
                    // For non-recoverable exceptions, provide detailed error message
                    throw new InvalidOperationException(
                        $"Unable to move project folder from '{oldPath}' to '{newPath}' after {attempt + 1} attempts. " +
                        $"Error: {ex.Message}. Please ensure no files are in use and try again.", ex);
                }
            }

            // If we get here, all retries failed
            throw new InvalidOperationException(
                $"Unable to move project folder after {maxRetries} attempts. " +
                $"Please close Visual Studio, manually rename the folder from '{oldPath}' to '{newPath}', " +
                $"and then reopen the solution.");
        }

        internal static void ThrowWizardCancelledException(string OOBDestinationDirectory = null)
        {
            if (OOBDestinationDirectory != null) Helper.TryDeleteDirectory(OOBDestinationDirectory);
            throw new WizardCancelledException();
        }

        internal static async Task AddDynamicsCrmDevKitCliJsonAsync()
        {
            if (!File.Exists(await VsixHelper.GetDynamicsCrmDevKitJsonCliJsonFullFileNameAsync()))
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
                await FileHelper.ForceWriteAllTextAsync(await VsixHelper.GetDynamicsCrmDevKitJsonCliJsonFullFileNameAsync(), json);
            }
        }

        internal static async Task<string> ReadEmbeddedResourceAsync(string path)
        {
            return await Helper.ReadEmbeddedResourceAsync($"{typeof(DevKitPackage).Assembly.GetName().Name}.Resources.{path}");
        }

        internal static async Task ExecuteCommandAsync(string command)
        {
            await VS.Commands.ExecuteAsync(command);
        }

        internal static async Task<ProjectItem> GetProjectItemAsync(string projectItemName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            if (string.IsNullOrWhiteSpace(projectItemName)) return null;
            var dte = await VS.GetServiceAsync<EnvDTE.DTE, EnvDTE.DTE>();
            if (dte == null || dte.SelectedItems == null || dte.SelectedItems.Count == 0) return null;
            EnvDTE.SelectedItem dteSelectedItem = dte.SelectedItems.Item(1);
            ProjectItems rootItems = null;
            if (dteSelectedItem.Project != null) rootItems = dteSelectedItem.Project.ProjectItems;
            else if (dteSelectedItem.ProjectItem != null) rootItems = dteSelectedItem.ProjectItem.ProjectItems;
            if (rootItems == null) return null;
            var queue = new Queue<ProjectItems>();
            queue.Enqueue(rootItems);
            while (queue.Count > 0)
            {
                var items = queue.Dequeue();
                foreach (ProjectItem item in items)
                {
                    if (item == null) continue;
                    if (string.Equals(item.Name, projectItemName, StringComparison.OrdinalIgnoreCase))
                        return item;
                    if (item.ProjectItems != null && item.ProjectItems.Count > 0)
                        queue.Enqueue(item.ProjectItems);
                }
            }
            return null;
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
            var customTemplates = new List<CustomTemplate>();
            var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
            if (File.Exists(fileName))
            {
                customTemplates = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName))).CustomTemplates;
                customTemplates = [.. customTemplates.Where(x => x.Type == $"{itemType}")];
            }
            if (itemType == ItemType.Test)
            {
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - {ItemType.CustomApi}", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"{ItemType.CustomApi}"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - {ItemType.CustomAction}", Body = await GetDefaultCustomTemplateBodyAsync(itemType,$"{ItemType.CustomAction}"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - {ItemType.Workflow}", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"{ItemType.Workflow}"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - {ItemType.Plugin}", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"{ItemType.Plugin}"), IsDefault = false });
            }
            else if (itemType == ItemType.DataProvider)
            {
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - RetrieveMultiple", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"RetrieveMultiple"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - Retrieve", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"Retrieve"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - Delete", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"Delete"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - Update", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"Update"), IsDefault = false });
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = $"Default - Create", Body = await GetDefaultCustomTemplateBodyAsync(itemType, $"Create"), IsDefault = false });                                                             
            }
            else
                customTemplates.Insert(0, new CustomTemplate { Type = $"{itemType}", Title = "Default", Body = await GetDefaultCustomTemplateBodyAsync(itemType), IsDefault = false });
            return customTemplates;
        }

        internal static async Task<string> GetDefaultCustomTemplateBodyAsync(ItemType itemType, string subType = null)
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
            {
                if (subType == $"{ItemType.Plugin}")
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.TestPlugin.tt");
                else if (subType == $"{ItemType.Workflow}")
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.TestWorkflow.tt");
                else if (subType == $"{ItemType.CustomAction}")
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.TestCustomAction.tt");
                else if (subType == $"{ItemType.CustomApi}")
                    return await VsixHelper.ReadEmbeddedResourceAsync("tt.TestCustomApi.tt");
            }
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

        internal static async Task SaveCustomTemplatesAsync(CustomTemplate save)
        {
            var fileName = await GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
            if (File.Exists(fileName))
            {
                var configJson = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => File.ReadAllText(fileName)));
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
                var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
                await FileHelper.ForceWriteAllTextAsync(fileName, json);
            }
            else
            {
                var configJson = new ConfigJson
                {
                    CustomTemplates = [save]
                };
                var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
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
