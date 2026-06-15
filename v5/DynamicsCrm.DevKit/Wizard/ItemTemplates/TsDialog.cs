using System;
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
            ThreadHelper.ThrowIfNotOnUIThread();
            TrackGeneratedProjectItem(projectItem);
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                try
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    await WriteTargetFileIfChangedAsync($"{DialogClassName}.dialog.ts", _TypeScriptDialog_);
                    if (!IsDialogTsExisting)
                        await WriteTargetFileIfChangedAsync($"{DialogClassName}.ts", _TypeScript_);

                    VsixHelper.TrySetDependentUpon(GetGeneratedProjectItem($"{DialogClassName}.dialog.ts"), $"{DialogClassName}.ts");
                    await VS.StatusBar.ShowMessageAsync($"{DialogClassName}.dialog.ts up to date!!!");
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"DevKit: TsDialog.RunFinished failed: {ex.Message}");
                }
                finally
                {
                    await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                }
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
                var targetFileName = filePath switch
                {
                    "TypeScript.ts" => $"{DialogClassName}.ts",
                    _ => $"{DialogClassName}.dialog.ts"
                };
                var shouldAdd = await ShouldAddProjectItemAsync(filePath, targetFileName);
                if (filePath == "TypeScript.ts")
                {
                    IsDialogTsExisting = IsFilePathExist;
                    // If {DialogClassName}.ts exists, preserve it; otherwise let the template create it.
                    return shouldAdd;
                }
                return shouldAdd;
            });
        }
    }
}
