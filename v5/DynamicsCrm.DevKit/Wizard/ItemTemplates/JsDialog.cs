using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsDialog : ItemTemplateBase, IWizard
    {
        private string _JavaScript_ { get; set; } = string.Empty;
        private string _JavaScriptDialog_ { get; set; } = string.Empty;
        private string _TypeScriptDialog_ { get; set; } = string.Empty;
        private string DialogClassName { get; set; }
        private string DialogLogicalName { get; set; }
        private ServiceClient ServiceClient { get; set; }
        private SystemForm SelectedDialogForm { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);

                // 1. Write the generated .dialog.js file content
                var dialogProjectItem = await VsixHelper.GetProjectItemAsync($"{DialogClassName}.dialog.js");
                var dialogProjectItemFullPath = dialogProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(dialogProjectItemFullPath, _JavaScriptDialog_);

                // 2. Write the generated .dialog.d.ts file content
                var dtsProjectItem = await VsixHelper.GetProjectItemAsync($"{DialogClassName}.dialog.d.ts");
                var dtsProjectItemFullPath = dtsProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(dtsProjectItemFullPath, _TypeScriptDialog_);

                // 3. Handle {DialogClassName}.js (user code)
                var jsProjectItem = await VsixHelper.GetProjectItemAsync($"{DialogClassName}.js");
                var jsPath = jsProjectItem.FileNames[0];

                // For JsDialog we don't append. If it exists, we skip overwrite of user code unless it was just created by template.
                // The template creates the default content.
                await FileHelper.ForceWriteAllTextAsync(jsPath, _JavaScript_);

                // 4. Nest .dialog.js and .d.ts under .js
                try
                {
                    dialogProjectItem.Properties.Item("DependentUpon").Value = $"{DialogClassName}.js";
                }
                catch
                {
                    dialogProjectItem.Remove();
                    jsProjectItem.ProjectItems.AddFromFile(dialogProjectItemFullPath);
                }

                try
                {
                    dtsProjectItem.Properties.Item("DependentUpon").Value = $"{DialogClassName}.js";
                }
                catch
                {
                    dtsProjectItem.Remove();
                    jsProjectItem.ProjectItems.AddFromFile(dtsProjectItemFullPath);
                }

                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.ShowMessageAsync($"{DialogClassName} JS Dialog generated successfully!!!");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.JsDialog);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    ServiceClient = form.ServiceClient;
                    SelectedDialogForm = form.SelectedDialogForm;
                    DialogLogicalName = SelectedDialogForm.Name;
                    DialogClassName = SelectedDialogForm.UniqueName;

                    // Generate the .dialog.js and .d.ts content
                    var result = await Shared.Logic.JsDialog.GetJsDialogCodeAsync(form.ServiceClient, SelectedDialogForm);
                    _JavaScriptDialog_ = result.code;
                    _TypeScriptDialog_ = result.dts;

                    // Generate user code (.js)
                    _JavaScript_ = await new CodeGenService(form.ServiceClient).GetDefaultJsDialogFileAsync(SelectedDialogForm, DialogClassName);

                    replacementsDictionary["$JavaScript$"] = _JavaScript_;
                    replacementsDictionary["$JavaScriptDialog$"] = _JavaScriptDialog_;
                    replacementsDictionary["$TypeScriptDialog$"] = _TypeScriptDialog_;
                    replacementsDictionary["$DialogName$"] = DialogClassName;
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
                    case "JavaScript.js":
                        FilePath = $"{DialogClassName}.js";
                        break;
                    case "JavaScript.d.ts":
                        FilePath = $"{DialogClassName}.dialog.d.ts";
                        break;
                    default:
                        FilePath = $"{DialogClassName}.dialog.js";
                        break;
                }
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FullFilePath = Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = File.Exists(FullFilePath);

                // For the user script (.js), do not overwrite if exists
                if (filePath == "JavaScript.js")
                {
                    return !IsFilePathExist;
                }

                return !IsFilePathExist;
            });
        }
    }
}
