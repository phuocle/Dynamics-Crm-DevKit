using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TextTemplating.VSHost;
using Microsoft.VisualStudio.TextTemplating;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;
using DynamicsCrm.DevKit.Lib.Forms;

namespace DynamicsCrm.DevKit.Shared
{
    internal class T4Helper
    {
        public static string GetT4Code(ItemType itemType)
        {
            string T4CodePlugin()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    if (cachedJson.Plugin != null) code = Utility.Decompress(cachedJson.Plugin);
                }
                return code;
            }
            string T4CodeWorkflow()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    if (cachedJson.Workflow != null) code = Utility.Decompress(cachedJson.Workflow);
                }
                return code;
            }
            string T4CodeCustomAction()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    if (cachedJson.CustomAction != null) code = Utility.Decompress(cachedJson.CustomAction);
                }
                return code;
            }
            string T4CodeCustomApi()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    if (cachedJson.CustomApi != null) code = Utility.Decompress(cachedJson.CustomApi);
                }
                return code;
            }
            string T4CodeUiTest()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.UiTest.tt");
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                    if (cachedJson.UiTest != null) code = Utility.Decompress(cachedJson.UiTest);
                }
                return code;
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
            return string.Empty;
        }

        internal static T4Context BuildContext(Dictionary<string, string> replacementsDictionary, Lib.Forms.FormPlugin form)
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

        internal static T4Context BuildContext(ItemType itemType, Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var solutionName = VsixHelper.GetSolutionName();
            var pluginSharedNameSpace = $"{solutionName}.Shared";
            var pluginNameSpace = nameSpace.Contains($".{ItemType.Plugin}.") ? nameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}") : nameSpace;

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
