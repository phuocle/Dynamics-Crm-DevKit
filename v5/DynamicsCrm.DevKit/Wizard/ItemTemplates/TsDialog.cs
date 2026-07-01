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
            using (TraceRunFinished())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    try
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        var dialogFileName = $"{DialogClassName}.dialog.ts";
                        var userFileName = $"{DialogClassName}.ts";
                        var dialogProjectItem = GetGeneratedProjectItem(dialogFileName);
                        if (dialogProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(dialogFileName, _TypeScriptDialog_);
                        }

                        if (!IsDialogTsExisting && GetGeneratedProjectItem(userFileName) == null)
                        {
                            await WriteTargetFileIfChangedAsync(userFileName, _TypeScript_);
                        }

                        VsixHelper.TrySetDependentUpon(dialogProjectItem ?? GetGeneratedProjectItem(dialogFileName), userFileName);
                        await VS.StatusBar.ShowMessageAsync($"{dialogFileName} up to date!!!");
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
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            using (TraceRunStarted())
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

                        using (Trace("GenerateDialogTypeScript", $"dialog={DialogClassName}"))
                        {
                            _TypeScriptDialog_ = await Shared.Logic.TsDialog.GetTsDialogCodeAsync(form.ServiceClient, SelectedDialogForm);
                        }

                        using (Trace("GenerateDefaultTypeScript", $"dialog={DialogClassName}"))
                        {
                            _TypeScript_ = await new CodeGenService(form.ServiceClient).GetDefaultTsDialogFileAsync(SelectedDialogForm, DialogClassName);
                        }

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
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            using (TraceShouldAddProjectItem(filePath))
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
                        return shouldAdd;
                    }
                    return shouldAdd;
                });
            }
        }
    }
}
