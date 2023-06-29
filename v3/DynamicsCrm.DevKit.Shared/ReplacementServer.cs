using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared
{
    internal class ReplacementServer
    {
        private Dictionary<string, string> replacementsDictionary = null;
        FormPlugin form = null;

        public ReplacementServer(Dictionary<string, string> _replacementsDictionary, FormPlugin _form)
        {
            replacementsDictionary = _replacementsDictionary;
            form = _form;
        }

        public string Code
        {
            get
            {
                var Replacements = new List<NameValue>();

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
                var pluginDeleteAsyncOperation = pluginExecution == "Asynchronous" ? "true" : "false";

                Replacements.Add(new NameValue { Name = "$PluginSharedNameSpace$", Value = $"{pluginSharedNameSpace}" });
                Replacements.Add(new NameValue { Name = "$PluginNameSpace$", Value = $"{pluginNameSpace}" });
                Replacements.Add(new NameValue { Name = "$PluginMessage$", Value = $"{pluginMessage}" });
                Replacements.Add(new NameValue { Name = "$PluginLogicalName$", Value = $"{pluginLogicalName}" });
                Replacements.Add(new NameValue { Name = "$PluginSchemaName$", Value = $"{pluginSchemaName}" });
                Replacements.Add(new NameValue { Name = "$PluginStage$", Value = $"{pluginStage}" });
                Replacements.Add(new NameValue { Name = "$PluginExecution$", Value = $"{pluginExecution}" });
                Replacements.Add(new NameValue { Name = "$PluginComment$", Value = $"{pluginComment}" });
                Replacements.Add(new NameValue { Name = "$PluginClass$", Value = $"{pluginClass}" });
                Replacements.Add(new NameValue { Name = "$PluginDeleteAsyncOperation$", Value = $"{pluginDeleteAsyncOperation}" });

                var code = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.cs");
                foreach (var Replacement in Replacements)
                    code = code.Replace(Replacement.Name, Replacement.Value);
                return code;
            }
        }
    }
}
