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
    internal class JsDialog : ItemTemplateBase, IWizard
    {
        private string _JavaScript_ { get; set; } = string.Empty;
        private string _JavaScriptDialog_ { get; set; } = string.Empty;
        private string _TypeScriptDialog_ { get; set; } = string.Empty;
        private string DialogClassName { get; set; }
        private string DialogLogicalName { get; set; }
        private ServiceClient ServiceClient { get; set; }
        private SystemForm SelectedDialogForm { get; set; }
        private bool IsDialogJsExisting { get; set; }

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
                        var dialogFileName = $"{DialogClassName}.dialog.js";
                        var declarationFileName = $"{DialogClassName}.dialog.d.ts";
                        var userFileName = $"{DialogClassName}.js";
                        var dialogProjectItem = GetGeneratedProjectItem(dialogFileName);
                        var declarationProjectItem = GetGeneratedProjectItem(declarationFileName);
                        if (dialogProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(dialogFileName, _JavaScriptDialog_);
                        }

                        if (declarationProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(declarationFileName, _TypeScriptDialog_);
                        }

                        if (!IsDialogJsExisting && GetGeneratedProjectItem(userFileName) == null)
                        {
                            await WriteTargetFileIfChangedAsync(userFileName, _JavaScript_);
                        }

                        VsixHelper.TrySetDependentUpon(dialogProjectItem ?? GetGeneratedProjectItem(dialogFileName), userFileName);
                        VsixHelper.TrySetDependentUpon(declarationProjectItem ?? GetGeneratedProjectItem(declarationFileName), userFileName);
                        await VS.StatusBar.ShowMessageAsync($"{DialogClassName} JS Dialog generated successfully!!!");
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"DevKit: JsDialog.RunFinished failed: {ex.Message}");
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

                        using (Trace("GenerateDialogJavaScript", $"dialog={DialogClassName}"))
                        {
                            var result = await Shared.Logic.JsDialog.GetJsDialogCodeAsync(form.ServiceClient, SelectedDialogForm);
                            _JavaScriptDialog_ = result.code;
                            _TypeScriptDialog_ = result.dts;
                        }

                        using (Trace("GenerateDefaultJavaScript", $"dialog={DialogClassName}"))
                        {
                            _JavaScript_ = await new CodeGenService(form.ServiceClient).GetDefaultJsDialogFileAsync(SelectedDialogForm, DialogClassName);
                        }

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
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            using (TraceShouldAddProjectItem(filePath))
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var targetFileName = filePath switch
                    {
                        "JavaScript.js" => $"{DialogClassName}.js",
                        "JavaScript.d.ts" => $"{DialogClassName}.dialog.d.ts",
                        _ => $"{DialogClassName}.dialog.js"
                    };
                    var shouldAdd = await ShouldAddProjectItemAsync(filePath, targetFileName);
                    if (filePath == "JavaScript.js")
                    {
                        IsDialogJsExisting = IsFilePathExist;
                        return shouldAdd;
                    }

                    return shouldAdd;
                });
            }
        }
    }
}
