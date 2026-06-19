using System;
using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsWebApi : ItemTemplateBase, IWizard
    {
        private string _Javascript_ { get; set; } = string.Empty;
        private string _JavascriptWebApi_ { get; set; } = string.Empty;
        private string _Javascriptdts_ { get; set; } = string.Empty;
        private EntityMetadata EntityMetadata { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            TrackGeneratedProjectItem(projectItem);
        }

        private async Task<bool> IsJsFormExistAsync()
        {
            var container = await VsixHelper.SelectedItem.GetProjectItemsContainerAsync();
            return System.IO.File.Exists(System.IO.Path.Combine(container?.FolderPath ?? string.Empty, $"{ItemName}.form.js"));
        }

        public void RunFinished()
        {
            using (TraceRunFinished())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    try
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        var webApiFileName = $"{ItemName}.webapi.js";
                        var declarationFileName = $"{ItemName}.d.ts";
                        var userFileName = $"{ItemName}.js";
                        var webApiProjectItem = GetGeneratedProjectItem(webApiFileName);
                        var declarationProjectItem = GetGeneratedProjectItem(declarationFileName);
                        if (webApiProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(webApiFileName, _JavascriptWebApi_);
                        }

                        if (declarationProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(declarationFileName, _Javascriptdts_);
                        }

                        VsixHelper.TrySetDependentUpon(webApiProjectItem ?? GetGeneratedProjectItem(webApiFileName), userFileName);
                        VsixHelper.TrySetDependentUpon(declarationProjectItem ?? GetGeneratedProjectItem(declarationFileName), userFileName);
                        await VS.StatusBar.ShowMessageAsync($"{webApiFileName} up to date!!!");
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"DevKit: JsWebApi.RunFinished failed: {ex.Message}");
                    }
                    finally
                    {
                        await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    }
                });
            }
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            using (TraceRunStarted())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var form = new FormItem(ItemType.JsWebApi);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        ItemName = form.ItemName;
                        EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                        using (Trace("GenerateDefaultJavaScript", $"entity={ItemName}"))
                        {
                            _Javascript_ = await new CodeGenService(null).GetDefaultWebApiFileAsync(ItemName);
                        }
                        replacementsDictionary["$Javascript$"] = _Javascript_;
                        using (Trace("GenerateWebApiJavaScript", $"entity={ItemName}"))
                        {
                            (_JavascriptWebApi_, _Javascriptdts_) = await DynamicsCrm.DevKit.Shared.Logic.JsWebApi.GetJsWebApiCodeAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], await IsJsFormExistAsync());
                        }
                        replacementsDictionary["$Javascript.webapi.js$"] = _JavascriptWebApi_;
                        replacementsDictionary["$Javascript.d.ts$"] = _Javascriptdts_;
                        await Replacement.SetAsync(replacementsDictionary, form);
                        await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    }
                    else
                    {
                        VsixHelper.ThrowWizardCancelledException();
                    }
                });
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            using (TraceShouldAddProjectItem(filePath))
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var targetFileName = filePath switch
                    {
                        "Javascript.js" => $"{ItemName}.js",
                        "Javascript.d.ts" => $"{ItemName}.d.ts",
                        _ => $"{ItemName}.webapi.js"
                    };
                    return await ShouldAddProjectItemAsync(filePath, targetFileName);
                });
            }
        }
    }
}
