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
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class TsDialog : ItemTemplateBase, IWizard
    {
        private string _TypeScript_ { get; set; } = string.Empty;
        private string _TypeScriptDialog_ { get; set; } = string.Empty;
        private string DialogClassName { get; set; }
        private string DialogLogicalName { get; set; }
        private ServiceClient ServiceClient { get; set; }
        private SystemForm SelectedDialogForm { get; set; }
        private bool IsDialogTsExisting { get; set; }

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

                // 1. Write the generated .dialog.ts file content
                var dialogProjectItem = await VsixHelper.GetProjectItemAsync($"{DialogClassName}.dialog.ts");
                var dialogProjectItemFullPath = dialogProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(dialogProjectItemFullPath, _TypeScriptDialog_);

                // 2. Handle {DialogClassName}.ts (user code)
                var dialogTsProjectItem = await VsixHelper.GetProjectItemAsync($"{DialogClassName}.ts");
                var dialogTsPath = dialogTsProjectItem.FileNames[0];

                if (!IsDialogTsExisting)
                {
                    // Dialog.ts was just created - write initial content
                    await FileHelper.ForceWriteAllTextAsync(dialogTsPath, _TypeScript_);
                }
                // If Dialog.ts already exists, don't touch it - user has customized their code

                // 3. Nest .dialog.ts under Dialog.ts
                try
                {
                    dialogProjectItem.Properties.Item("DependentUpon").Value = $"{DialogClassName}.ts";
                }
                catch
                {
                    dialogProjectItem.Remove();
                    dialogTsProjectItem.ProjectItems.AddFromFile(dialogProjectItemFullPath);
                }

                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.ShowMessageAsync($"{DialogClassName}.dialog.ts up to date!!!");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.TsDialog);
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

                    // Generate the .dialog.ts content
                    _TypeScriptDialog_ = await Shared.Logic.TsDialog.GetTsDialogCodeAsync(form.ServiceClient, SelectedDialogForm);

                    // Generate Dialog.ts user code (IIFE block)
                    _TypeScript_ = await new CodeGenService(form.ServiceClient).GetDefaultTsDialogFileAsync(SelectedDialogForm, DialogClassName);

                    replacementsDictionary["$TypeScript$"] = _TypeScript_;
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
                    case "TypeScript.ts":
                        FilePath = $"{DialogClassName}.ts";
                        break;
                    default:
                        FilePath = $"{DialogClassName}.dialog.ts";
                        break;
                }
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FullFilePath = Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = File.Exists(FullFilePath);
                if (filePath == "TypeScript.ts")
                {
                    IsDialogTsExisting = IsFilePathExist;
                    // If {DialogClassName}.ts exists, don't add it (we'll append in RunFinished)
                    // If {DialogClassName}.ts doesn't exist, add it so template creates it
                    return !IsFilePathExist;
                }
                return !IsFilePathExist;
            });
        }
    }
}
