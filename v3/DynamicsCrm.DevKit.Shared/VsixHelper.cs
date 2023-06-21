using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.VisualStudio.Text.Editor;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Project = EnvDTE.Project;

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

        public static Community.VisualStudio.Toolkit.Project GetActiveProject()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetActiveProjectAsync();
            });
        }
        public static async Task<Community.VisualStudio.Toolkit.Project> GetActiveProjectAsync()
        {
            return await VS.Solutions.GetActiveProjectAsync();
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

        internal static bool IsSharedTestProjectExist()
        {
            var proxyTypesProjectName = $"{VsixHelper.GetSolutionName()}.Shared.Test";
            if (!VsixHelper.IsExistProject(proxyTypesProjectName))
            {
                VS.MessageBox.ShowError($"Please add DynamicsCrm.DevKit 15. Shared Test Project and try it again");
                return false;
            }
            return true;
        }

        internal static void ThrowWizardCancelledException(string OOBDestinationDirectory)
        {
            Utility.TryDeleteDirectory(OOBDestinationDirectory);
            throw new WizardCancelledException();
        }

        internal static void ThrowWizardCancelledException()
        {
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

        internal static List<XrmEntity> GetTestClasses(DTE dte)
        {
            var list1 = GetAllClassesOfPluginAndWorkflow(dte);
            var list2 = GetAllTestClasses(dte);
            return list1.Where(x => !list2.Contains(x.Name)).ToList();
        }

        public static List<string> GetAllTestClasses(DTE dte)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var list = new List<string>();
            var projectItems = GetAllProjectItems(dte);
            foreach (var projectItem in projectItems)
            {
                if (projectItem.FileCodeModel == null) continue;
                foreach (CodeElement codeElement in projectItem.FileCodeModel?.CodeElements)
                {
                    if (codeElement == null) continue;
                    if (codeElement.Kind != vsCMElement.vsCMElementNamespace) continue;
                    foreach (CodeElement codeClass in codeElement.Children)
                    {
                        if (codeClass.Kind != vsCMElement.vsCMElementClass) continue;
                        var @class = codeClass as CodeClass;
                        if (!HasAttributeTestClass(@class)) continue;
                        var className = codeClass.Name;
                        className = className.ToLower().EndsWith("test") ? className.Substring(0, className.Length - "Test".Length) : className;
                        list.Add(className);
                    }
                }
            }
            return list;
        }

        public static bool HasAttributeTestClass(CodeClass @class)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "TestClass") return true;
            }
            return false;
        }

        public static List<ProjectItem> GetAllProjectItems(DTE dte)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var Projects = (object[])dte.ActiveSolutionProjects;
            var project = (Project)Projects[0];
            var projectItems = new List<ProjectItem>();
            foreach (ProjectItem item in project.ProjectItems)
            {
                projectItems.Add(item);
                GetAllProjectItems(projectItems, item);
            }
            return projectItems;
        }

        internal static List<XrmEntity> GetAllClassesOfPluginAndWorkflow(DTE dte)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var list = new List<XrmEntity>();
            var projectItems = GetAllTestProjectItems(dte);
            foreach (var projectItem in projectItems)
            {
                if (projectItem.FileCodeModel == null) continue;
                foreach (CodeElement codeElement in projectItem.FileCodeModel?.CodeElements)
                {
                    if (codeElement == null) continue;
                    if (codeElement.Kind != vsCMElement.vsCMElementNamespace) continue;
                    foreach (CodeElement codeClass in codeElement.Children)
                    {
                        if (codeClass.Kind != vsCMElement.vsCMElementClass) continue;
                        var @class = codeClass as CodeClass;
                        if (@class.IsAbstract) continue;
                        if (!@class.IsCodeType) continue;
                        if (!HasImplementedPlugin(@class) && !HasImplementedWorkflow(@class)) continue;
                        if (!HasAttributeCrmPluginRegistration(@class, out var pluginAttribute)) continue;
                        var className = codeClass.Name;
                        list.Add(new XrmEntity
                        {
                            Name = className,
                            ServerType = GetPluginType(@class),
                            ServerLogicalName = pluginAttribute.EntityLogicalName,
                            ServerMessage = pluginAttribute.Message,
                            ServerMode = pluginAttribute.ExecutionMode.ToString(),
                            ServerStage = pluginAttribute.Stage.ToString()
                        });
                    }
                }
            }
            return list;
        }

        public static bool HasImplementedWorkflow(CodeClass @class)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (baseClass.FullName == "System.Activities.CodeActivity")
                    return true;
                if (HasImplementedWorkflow(baseClass))
                    return true;
            }
            return false;
        }

        private static string GetPluginType(CodeClass @class)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "CrmPluginRegistration")
                {
                    if (attribute.Value.Contains("PluginType.Workflow")) return "Workflow";
                    if (attribute.Value.Contains("PluginType.CustomAction")) return "CustomAction";
                    if (attribute.Value.Contains("PluginType.CustomApi")) return "CustomApi";
                    if (attribute.Value.Contains("PluginType.DataProvider")) return "DataProvider";
                    if (attribute.Value.Contains("PluginType.Plugin")) return "Plugin";
                    return "Plugin";
                }
            }
            return "Plugin";
        }

        public static bool HasAttributeCrmPluginRegistration(CodeClass @class, out CrmPluginRegistrationAttribute pluginAttribute)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            pluginAttribute = new CrmPluginRegistrationAttribute();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "CrmPluginRegistration")
                {
                    var array = attribute.Value.Split(',');
                    pluginAttribute.Message = array[0].Trim();
                    pluginAttribute.EntityLogicalName = array[1].Trim();
                    Enum.TryParse(array[2].Split('.')[1], out StageEnum stage);
                    pluginAttribute.Stage = stage;
                    Enum.TryParse(array[3].Split('.')[1], out ExecutionModeEnum mode);
                    pluginAttribute.ExecutionMode = mode;
                    return true;
                }
            }
            return false;
        }

        public static bool HasImplementedPlugin(CodeClass @class)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeInterface @interface in @class.ImplementedInterfaces)
            {
                if (@interface.FullName == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (HasImplementedPlugin(baseClass))
                    return true;
            }
            return false;
        }

        public static List<ProjectItem> GetAllTestProjectItems(DTE dte)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var Projects = (object[])dte.ActiveSolutionProjects;
            var project = (Project)Projects[0];
            Project projectWithoutTest = null;
            foreach (Project p in GetProjects(dte.Solution))
            {
                if ($"{p.Name}.Test" == project.Name)
                {
                    projectWithoutTest = p;
                    break;
                }
            }
            if (projectWithoutTest == null) return new List<ProjectItem>();
            var projectItems = new List<ProjectItem>();
            foreach (ProjectItem item in projectWithoutTest.ProjectItems)
            {
                projectItems.Add(item);
                GetAllProjectItems(projectItems, item);
            }
            return projectItems;
        }

        private static void GetAllProjectItems(List<ProjectItem> projectItems, ProjectItem item)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (ProjectItem item2 in item.ProjectItems)
            {
                projectItems.Add(item2);
                GetAllProjectItems(projectItems, item2);
            }
        }

        private static List<Project> GetProjects(EnvDTE.Solution sln)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            List<Project> list = new List<Project>();
            if (sln == null) return list;
            list.AddRange(sln.Projects.Cast<Project>());

            for (int i = 0; i < list.Count; i++)
                list.AddRange(list[i]?.ProjectItems?.Cast<ProjectItem>().Select(x => x?.SubProject)?.OfType<Project>());

            return list;
        }

        internal static Community.VisualStudio.Toolkit.Project GetProject(string projectName)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await GetProjectAsync(projectName);
            });
        }

        private static async Task<Community.VisualStudio.Toolkit.Project> GetProjectAsync(string projectName)
        {
            var projects = await VS.Solutions.GetAllProjectsAsync();
            foreach (var project in projects)
            {
                if (project.Name == projectName) return project;
            }
            return null;
        }

        public static string GetDefaultFileWithCs(EntityMetadata entityMetadata, string @namespace)
        {
            const string NEW_LINE = "\r\n";
            const string TAB = "\t";
            var code = string.Empty;
            var @class = Utility.SafeDeclareName(entityMetadata.SchemaName, GeneratorType.csharp);
            var key = (entityMetadata.IsActivity ?? false) ? "activityid" : $"{@class.ToLower()}id";
            code += $"using Microsoft.Xrm.Sdk;{NEW_LINE}";
            code += $"using System;{NEW_LINE}";
            code += NEW_LINE;
            code += $"namespace {@namespace}{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{TAB}public partial class {@class}{NEW_LINE}";
            code += $"{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}#region --- PROPERTIES ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}//public string StringField {{ get {{ return GetAliasedValue<string>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public int? IntField {{ get {{ return GetAliasedValue<int?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public DateTime? DateTimeField {{ get {{ return GetAliasedValue<DateTime?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public EntityReference LookupField {{ get {{ return GetAliasedValue<EntityReference>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public xxxOptionSets.xxx? OptionSetField {{ get {{ return (xxxOptionSets.xxx?)GetAliasedValue<OptionSetValue>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public decimal? MoneyField {{ get {{ return GetAliasedValue<Money>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#region --- STATIC METHODS ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}public static {@class} Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchData = new{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{key} = recordId ?? Guid.Empty{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchXml = $@\"{NEW_LINE}";
            code += $"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>{NEW_LINE}";
            code += $"  <entity name='{@class.ToLower()}'>{NEW_LINE}";
            code += $"    <all-attributes/>{NEW_LINE}";
            code += $"    <filter type='and'>{NEW_LINE}";
            code += $"      <condition attribute='{key}' operator='eq' value='{{fetchData.{key}}}'/>{NEW_LINE}";
            code += $"    </filter>{NEW_LINE}";
            code += $"  </entity>{NEW_LINE}";
            code += $"</fetch>{NEW_LINE}";
            code += $"\";{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var rows = serviceAdmin.RetrieveMultiple<{entityMetadata.SchemaName}>(fetchXml);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (rows.Count == 1) return rows[0];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return new {entityMetadata.SchemaName}();{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}{NEW_LINE}";
            return code;
        }

        public static string GetDefaultFileWithForm(CrmServiceClient CrmServiceClient, EntityMetadata entityMetadata, string rootnamespace)
        {
            string GetUnquieFormName(List<string> FormNames, string formName)
            {
                if (!FormNames.Contains(formName))
                {
                    FormNames.Add(formName);
                    return formName;
                }
                else
                {
                    var count = FormNames.Count(x => x == formName) + 1;
                    FormNames.Add(formName);
                    return $"{formName}{count}";
                }
            }
            var forms = XrmHelper.GetEntityForms(CrmServiceClient, entityMetadata.LogicalName);
            if (!forms.Any()) return GetDefaultFileWithWebApi(entityMetadata.SchemaName);
            var @namespace = Utility.GetNameSpace(rootnamespace);
            var code = string.Empty;
            code += $"//@ts-check\r\n";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />\r\n";
            code += "\"use strict\";\r\n";
            var formNames = new List<string>();
            foreach (var form in forms)
            {
                var formName = Utility.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                var type = $"{@namespace}.Form{Utility.SafeIdentifier(formName)}";
                code += $"var form{Utility.SafeIdentifier(formName)} = (function () {{\r\n";
                code += $"\t\"use strict\";\r\n";
                code += $"\t/** @type {type} */\r\n";
                code += $"\tvar form = null;\r\n";
                code += $"\tasync function onLoad(executionContext) {{\r\n";
                code += $"\t\tform = new {type}(executionContext);\r\n";
                code += $"\t\tregisterEvents();\r\n";
                code += $"\t\tawait onLoadData();\r\n";
                code += $"\t}}\r\n";
                code += $"\tfunction registerEvents() {{\r\n";
                code += $"\t\tif (form.ExecutionContext.IsInitialLoad()) {{\r\n";
                code += $"\t\t}}\r\n";
                code += $"\t}}\r\n";
                code += $"\t//BEGIN ON LOAD ========================================================\r\n";
                code += $"\tasync function onLoadData() {{\r\n";
                code += $"\t}}\r\n";
                code += $"\t//END ON LOAD ==========================================================\r\n";
                code += $"\t//BEGIN ON CHANGE ======================================================\r\n";
                code += $"\r\n";
                code += $"\t//END ON CHANGE ========================================================\r\n";
                code += $"\t//BEGIN PRE SEARCH =====================================================\r\n";
                code += $"\r\n";
                code += $"\t//END PRE SEARCH =======================================================\r\n";
                code += $"\t//BEGIN OTHERS =========================================================\r\n";
                code += $"\r\n";
                code += $"\t//END OTHERS ===========================================================\r\n";
                code += $"\treturn {{\r\n\t\tOnLoad: onLoad\r\n\t}};\r\n";
                code += $"}})();\r\n";
            }
            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        public static string GetDefaultFileWithWebApi(string schemaName)
        {
            const string NEW_LINE = "\r\n";
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{schemaName}.d.ts\" />{NEW_LINE}";
            return code;
        }

        internal static void SetStatusMessage(string message)
        {
            _ = Task.Factory.StartNew(() => {
                ThreadHelper.JoinableTaskFactory.Run(async delegate
                {
                    await VS.StatusBar.ShowMessageAsync($"{message}");
                });
            }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
        }

        internal static void ExecuteCommand(string command)
        {
            _ = Task.Factory.StartNew(() => {
                ThreadHelper.JoinableTaskFactory.Run(async delegate
                {
                    await VS.Commands.ExecuteAsync(command);
                });
            }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
        }
    }
}
