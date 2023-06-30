using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TextTemplating.VSHost;
using Microsoft.VisualStudio.TextTemplating;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    internal class T4Helper
    {
        public static string GetT4Code(ItemType itemType)
        {
            string T4CodePlugin()
            {
                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                return code;
            }
            if (itemType == ItemType.Plugin)
                return T4CodePlugin();
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
                PluginClass = pluginClass,
                PluginComment = pluginComment,
                PluginSharedNameSpace = pluginSharedNameSpace
            };
            return t4Context;
        }

        internal static string ProcessTemplate(string t4code, T4Context context)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () => {
                return await ProcessTemplateAsync(t4code, context);
            });
        }

        private static async Task<string> ProcessTemplateAsync(string t4code, T4Context context)
        {
            var t4 = await VS.GetServiceAsync<STextTemplating, ITextTemplating>();
            ITextTemplatingSessionHost sessionHost = t4 as ITextTemplatingSessionHost;
            sessionHost.Session = sessionHost.CreateSession();
            sessionHost.Session["Context"] = context;
            t4code = "<#@ parameter type=\"DynamicsCrm.DevKit.Shared.Models.T4Context\" name=\"Context\"#>" + t4code;
            var code = t4.ProcessTemplate("", t4code);

             //  "<#@parameter type=\"System.String\" name=\"parameter1\"#>"
             //+ "<#@parameter type=\"System.DateTime\" name=\"parameter2\"#>"
             //+ "<#@parameter type=\"System.Int32\" name=\"parameter3\"#>"
             //+ "Test: <#=parameter1#>    <#=parameter2#>    <#=parameter3#>");
            return code;
        }
    }
}
