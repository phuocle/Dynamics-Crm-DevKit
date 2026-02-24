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
    internal class JsForm : ItemTemplateBase, IWizard
    {
        private string _Javascript_ { get; set; } = string.Empty;
        private string _JavascriptForm_ { get; set; } = string.Empty;
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
        }

        private async Task<bool> IsJsWebApiExistAsync()
        {
            var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
            return System.IO.File.Exists(System.IO.Path.Combine(selectedItem.FullPath, $"{ItemName}.webapi.js"));
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                var JavascriptFormProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.form.js");
                var JavascriptFormProjectItemFullPath = JavascriptFormProjectItem.FileNames[0];
                var JavascriptdtsProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.d.ts");
                var JavascriptdtsProjectItemFullPath = JavascriptdtsProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(JavascriptFormProjectItemFullPath, _JavascriptForm_);
                await FileHelper.ForceWriteAllTextAsync(JavascriptdtsProjectItemFullPath, _Javascriptdts_);
                var JavascriptProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.js");
                try
                {
                    JavascriptFormProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                    JavascriptdtsProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                }
                catch
                {
                    JavascriptFormProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(JavascriptFormProjectItemFullPath);
                    JavascriptdtsProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(JavascriptdtsProjectItemFullPath);
                }
                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.ShowMessageAsync($"{ItemName}.form.js up to date!!!");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.JsForm);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    _Javascript_ = await new CodeGenService(form.ServiceClient).GetDefaultJsFormFileAsync(EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                    replacementsDictionary["$Javascript$"] = _Javascript_;
                    (_JavascriptForm_, _Javascriptdts_) = await DynamicsCrm.DevKit.Shared.Logic.JsForm.GetJsFormCodeAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], await IsJsWebApiExistAsync());
                    await Replacement.SetAsync(replacementsDictionary, form);
                    await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                }
                else
                {
                    VsixHelper.ThrowWizardCancelledException();
                }
            });

        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                switch (filePath)
                {
                    case "Javascript.js":
                        FilePath = $"{ItemName}.js";
                        break;
                    case "Javascript.d.ts":
                        FilePath = $"{ItemName}.d.ts";
                        break;
                    default:
                        FilePath = $"{ItemName}.form.js";
                        break;
                }
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FullFilePath = System.IO.Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = System.IO.File.Exists(FullFilePath);
                return !IsFilePathExist;
            });
        }
    }
}
