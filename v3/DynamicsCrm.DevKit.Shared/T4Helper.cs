using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TextTemplating.VSHost;
using Microsoft.VisualStudio.TextTemplating;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;
using DynamicsCrm.DevKit.Lib.Forms;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    internal class T4Helper
    {
        public static string GetT4Code2(ItemType itemType, string templateTitle)
        {
            if (templateTitle.ToLower() == "default") return DefaultT4Code(itemType, templateTitle);
            var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            if (!File.Exists(fileName)) return DefaultT4Code(itemType, templateTitle);
            var CachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Type == itemType.ToString() && x.Title == templateTitle);
            if (found == null) return DefaultT4Code(itemType, templateTitle);
            return Utility.Decompress(found.Body);
        }

        private static string DefaultT4Code(ItemType itemType, string templateTitle)
        {
            switch (itemType)
            {
                case ItemType.Plugin:
                    return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                case ItemType.Workflow:
                    return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                case ItemType.CustomAction:
                    return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                case ItemType.CustomApi:
                    return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                case ItemType.Test:
                    if (templateTitle == $"Default - {ItemType.Plugin.ToString()}")
                        return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestPlugin.tt");
                    else if (templateTitle == $"Default - {ItemType.Workflow.ToString()}")
                        return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestWorkflow.tt");
                    else if (templateTitle == $"Default - {ItemType.CustomAction.ToString()}")
                        return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestCustomAction.tt");
                    else if (templateTitle == $"Default - {ItemType.CustomApi.ToString()}")
                        return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestCustomApi.tt");
                    return string.Empty;
                case ItemType.UiTest:
                    return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.UiTest.tt");
                default:
                    return string.Empty;
            }
        }

        public static string GetT4Code(ItemType itemType, string subName = null)
        {
            string T4CodePlugin()
            {
                //var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //{
                //    var json = File.ReadAllText(fileName);
                //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //    if (cachedJson.Plugin != null) code = Utility.Decompress(cachedJson.Plugin);
                //}
                //return code;
                return string.Empty;
            }
            string T4CodeWorkflow()
            {
                //var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //{
                //    var json = File.ReadAllText(fileName);
                //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //    if (cachedJson.Workflow != null) code = Utility.Decompress(cachedJson.Workflow);
                //}
                //return code;
                return string.Empty;
            }
            string T4CodeCustomAction()
            {
                //var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //{
                //    var json = File.ReadAllText(fileName);
                //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //    if (cachedJson.CustomAction != null) code = Utility.Decompress(cachedJson.CustomAction);
                //}
                //return code;
                return string.Empty;
            }
            string T4CodeCustomApi()
            {
                //var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //{
                //    var json = File.ReadAllText(fileName);
                //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //    if (cachedJson.CustomApi != null) code = Utility.Decompress(cachedJson.CustomApi);
                //}
                //return code;
                return string.Empty;
            }
            string T4CodeUiTest()
            {
                //var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.UiTest.tt");
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //{
                //    var json = File.ReadAllText(fileName);
                //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //    if (cachedJson.UiTest != null) code = Utility.Decompress(cachedJson.UiTest);
                //}
                //return code;
                return string.Empty;
            }
            string T4CodeDataProvider()
            {
                if (subName == "Create")
                {
                    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderCreate.tt");
                    //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                    //if (File.Exists(fileName))
                    //{
                    //    var json = File.ReadAllText(fileName);
                    //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    //    if (cachedJson.DataProviderCreate != null) code = Utility.Decompress(cachedJson.DataProviderCreate);
                    //}
                    return code;
                }
                else if (subName == "Update")
                {
                    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderUpdate.tt");
                    //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                    //if (File.Exists(fileName))
                    //{
                    //    var json = File.ReadAllText(fileName);
                    //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    //    if (cachedJson.DataProviderUpdate != null) code = Utility.Decompress(cachedJson.DataProviderUpdate);
                    //}
                    return code;
                }
                else if (subName == "Delete")
                {
                    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderDelete.tt");
                    //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                    //if (File.Exists(fileName))
                    //{
                    //    var json = File.ReadAllText(fileName);
                    //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    //    if (cachedJson.DataProviderDelete != null) code = Utility.Decompress(cachedJson.DataProviderDelete);
                    //}
                    return code;
                }
                else if(subName == "Retrieve")
                {
                    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieve.tt");
                    //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                    //if (File.Exists(fileName))
                    //{
                    //    var json = File.ReadAllText(fileName);
                    //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    //    if (cachedJson.DataProviderRetrieve != null) code = Utility.Decompress(cachedJson.DataProviderRetrieve);
                    //}
                    return code;
                }
                else if (subName == "RetrieveMultiple")
                {
                    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieveMultiple.tt");
                    //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                    //if (File.Exists(fileName))
                    //{
                    //    var json = File.ReadAllText(fileName);
                    //    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    //    if (cachedJson.DataProviderRetrieveMultiple != null) code = Utility.Decompress(cachedJson.DataProviderRetrieveMultiple);
                    //}
                    return code;
                }
                return string.Empty;
            }
            string T4CodeTest()
            {
                //if (subName == "Plugin")
                //{
                //    var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestPlugin.tt");
                //    var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //    if (File.Exists(fileName))
                //    {
                //        var json = File.ReadAllText(fileName);
                //        var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                //        if (cachedJson.TestPlugin != null) code = Utility.Decompress(cachedJson.TestPlugin);
                //    }
                //    return code;
                //}
                return string.Empty;
            }
            if (itemType == ItemType.Plugin)
                return T4CodePlugin();
            else if (itemType == ItemType.Workflow)
                return T4CodeWorkflow();
            else if (itemType == ItemType.CustomAction)
                return T4CodeCustomAction();
            else if (itemType == ItemType.CustomApi)
                return T4CodeCustomApi();
            else if (itemType == ItemType.UiTest)
                return T4CodeUiTest();
            else if (itemType == ItemType.DataProvider)
                return T4CodeDataProvider();
            else if (itemType == ItemType.Test)
                return T4CodeTest();
            return string.Empty;
        }

        public static T4Context BuildContext(Dictionary<string, string> replacementsDictionary, Lib.Forms.FormPlugin form)
        {
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var solutionName = VsixHelper.GetSolutionName();

            var pluginSharedNameSpace = $"{solutionName}.Shared";
            var pluginNameSpace = nameSpace.Contains($".{ItemType.Plugin}.") ? nameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}") : nameSpace;
            var pluginMessage = form.PluginMessage;
            var pluginLogicalName = form.PluginLogicalName;
            var pluginSchemaName = form.PluginSchemaName;
            var pluginStage = form.PluginStage;
            var pluginExecution = form.PluginExecution;
            var pluginComment = form.PluginComment;
            var pluginClass = form.PluginClass;

            var t4Context = new T4Context
            {
                PluginNameSpace = pluginNameSpace,
                PluginMessage = pluginMessage,
                PluginLogicalName = pluginLogicalName,
                PluginSchemaName = pluginSchemaName,
                PluginStage = pluginStage,
                PluginExecution = pluginExecution,
                Class = pluginClass,
                PluginComment = pluginComment,
                PluginSharedNameSpace = pluginSharedNameSpace
            };
            return t4Context;
        }

        public static T4Context BuildContext(ItemType itemType, Dictionary<string, string> replacementsDictionary, FormProject form, string serverType = null)
        {
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var solutionName = VsixHelper.GetSolutionName();
            var pluginSharedNameSpace = $"{solutionName}.Shared";
            var pluginNameSpace = string.Empty;
            if (serverType == "Plugin" || serverType == "Workflow" || serverType == "CustomAction" || serverType == "CustomApi" || serverType == "DataProvider")
                pluginNameSpace = nameSpace.Contains($".{serverType}.") ? nameSpace.Replace($".{serverType}.", $".{serverType}") : nameSpace;
            else
                pluginNameSpace = nameSpace.Contains($".{ItemType.Plugin}.") ? nameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}") : nameSpace;
            if (itemType == ItemType.Workflow)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = form.ItemName
                };
                return t4Context;
            }
            else if (itemType == ItemType.DataProvider)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = form.ItemName,
                    DataSource = form.ItemName
                };
                return t4Context;
            }
            else if (itemType == ItemType.Test)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = form.ItemName,
                    DataSource = form.ItemName,
                    ProxyTypes = $"{solutionName}.ProxyTypes",
                    PluginStage = form.PluginStage,
                    PluginMessage = form.PluginMessage,
                    PluginExecution = form.PluginExecution,
                    PluginLogicalName = form.PluginLogicalName,
                };
                return t4Context;
            }
            return new T4Context();
        }

        internal static string ProcessTemplate(string t4code, T4Context context)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await ProcessTemplateAsync(t4code, context);
            });
        }

        private static async Task<string> ProcessTemplateAsync(string t4code, T4Context context)
        {
            T4Callback cb = new T4Callback();
            var t4 = await VS.GetServiceAsync<STextTemplating, ITextTemplating>();
            ITextTemplatingSessionHost sessionHost = t4 as ITextTemplatingSessionHost;
            sessionHost.Session = sessionHost.CreateSession();
            sessionHost.Session["Context"] = context;
            t4code = "<#@ parameter type=\"DynamicsCrm.DevKit.Shared.Models.T4Context\" name=\"Context\"#>" + t4code;
            var code = t4.ProcessTemplate("", t4code, cb);
            if (cb.errorMessages.Count > 0) return string.Join("\r\n", cb.errorMessages);
            return code;
        }
    }
}
