using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class LateBound : ItemTemplateBase, IWizard
    {
        private string _Class_ { get; set; } = string.Empty;
        private string _GeneratedClass_ { get; set; } = string.Empty;
        private EntityMetadata EntityMetadata { get; set; }
        private ProjectItem ProjectItem { get; set; } = null;

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                if (IsFilePathExist)
                {
                    var oldCode = await FileHelper.ReadAllTextFromLine6Async(FullFilePath);
                    var newCode = await Helper.ReadContentFromLine6Async(_GeneratedClass_);
                    if (!Helper.IsTheSame(oldCode, newCode))
                    {
                        await FileHelper.ForceWriteAllTextAsync(FullFilePath, _GeneratedClass_);
                    }
                }
                else
                {
                    try
                    {
                        ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.cs";
                    }
                    catch
                    {
                        var LateBoundProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.cs");
                        var LateBoundGeneratedProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.generated.cs");
                        var LateBoundGeneratedProjectItemFullPath = LateBoundGeneratedProjectItem.FileNames[0];
                        LateBoundGeneratedProjectItem.Remove();
                        LateBoundProjectItem.ProjectItems.AddFromFile(LateBoundGeneratedProjectItemFullPath);
                    }
                }
                var customFile = System.IO.Path.Combine(System.IO.Path.GetDirectoryName(FullFilePath), $"{ItemName}.cs");
                if (System.IO.File.Exists(customFile))
                {
                    var customContent = System.IO.File.ReadAllText(customFile);
                    var oldDeclaration = $"public partial class {ItemName}";
                    if (customContent.Contains(oldDeclaration))
                    {
                        var newContent = customContent.Replace(oldDeclaration, $"internal partial class {ItemName}");
                        System.IO.File.WriteAllText(customFile, newContent);
                    }
                }
                await VS.StatusBar.ShowMessageAsync($"{ItemName}.generated.cs up to date!!!");
                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.LateBound);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    _Class_ = Helper.GetDefaultFileWithCs(EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                    var sharedNamespace = await VsixHelper.IsAddToSharedProjectAsync() ? null : await VsixHelper.GetSharedProjectAsync();
                    _GeneratedClass_ = CSharpLateBound.GetCsCode(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], sharedNamespace);
                    replacementsDictionary["$Class$"] = _Class_;
                    replacementsDictionary["$GeneratedClass$"] = _GeneratedClass_;
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
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FilePath = filePath == "Class.cs" ? $"{ItemName}.cs" : $"{ItemName}.generated.cs";
                FullFilePath = System.IO.Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = System.IO.File.Exists(FullFilePath);
                return !IsFilePathExist;
            });
        }
    }
}
