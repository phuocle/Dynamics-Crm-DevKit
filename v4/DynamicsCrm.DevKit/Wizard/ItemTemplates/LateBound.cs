using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class LateBound : ItemTemplateBase, IWizard
    {
        private string _Class_ { get; set; } = string.Empty;
        private string _GeneratedClass_ { get; set; } = string.Empty;

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                if (FilePath == $"{ItemName}.generated.cs" && IsFilePathExist)
                {
                    await FileHelper.ForceWriteAllTextAsync(FullFilePath, _GeneratedClass_);
                }
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            //ItemName = "Account";

            _Class_ = $"//{DateTime.Now}";
            _GeneratedClass_ = $"////{DateTime.Now}";

            //replacementsDictionary["$SchemaName$"] = ItemName;
            //replacementsDictionary["$Class$"] = _Class_;
            //replacementsDictionary["$GeneratedClass$"] = _GeneratedClass_;


            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.LateBound);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    ItemName = form.ItemName;

                    await Replacement.SetAsync(replacementsDictionary, form);
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
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FilePath = filePath == "Class.cs" ? $"{ItemName}.cs" : $"{ItemName}.generated.cs";
                FullFilePath = System.IO.Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = System.IO.File.Exists(FullFilePath) == true;
                return !IsFilePathExist;
            });
        }
    }
}
