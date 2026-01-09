using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class TsForm : ItemTemplateBase, IWizard
    {
        private string _TypeScript_ { get; set; } = string.Empty;
        private string _TypeScriptForm_ { get; set; } = string.Empty;
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

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                var TypeScriptFormProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.form.ts");
                var TypeScriptFormProjectItemFullPath = TypeScriptFormProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(TypeScriptFormProjectItemFullPath, _TypeScriptForm_);
                var TypeScriptProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.ts");
                TypeScriptFormProjectItem.Remove();
                TypeScriptProjectItem.ProjectItems.AddFromFile(TypeScriptFormProjectItemFullPath);
                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.ShowMessageAsync($"{ItemName}.form.ts up to date!!!");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.TsForm);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    _TypeScript_ = await XrmHelper.GetDefaultTsFileWithFormAsync(form.ServiceClient, EntityMetadata);
                    replacementsDictionary["$TypeScript$"] = _TypeScript_;
                    _TypeScriptForm_ = await DynamicsCrm.DevKit.Shared.Logic.TsForm.GetTsFormCodeAsync(form.ServiceClient, EntityMetadata);
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
                        FilePath = $"{ItemName}.ts";
                        break;
                    default:
                        FilePath = $"{ItemName}.form.ts";
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
