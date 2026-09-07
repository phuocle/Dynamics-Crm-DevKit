using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class LateBound : ItemTemplateBase, IWizard
    {
        private string _Class_ { get; set; } = string.Empty;
        private string _GeneratedClass_ { get; set; } = string.Empty;
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
                        var generatedFileName = $"{ItemName}.generated.cs";
                        var generatedProjectItem = GetGeneratedProjectItem(generatedFileName);
                        if (generatedProjectItem == null)
                        {
                            await UpdateExistingGeneratedFileAsync(generatedFileName);
                        }

                        VsixHelper.TrySetDependentUpon(generatedProjectItem ?? GetGeneratedProjectItem(generatedFileName), $"{ItemName}.cs");

                        if (GetGeneratedProjectItem($"{ItemName}.cs") == null)
                        {
                            await NormalizeExistingCustomFileAsync();
                        }
                        await VS.StatusBar.ShowMessageAsync($"{ItemName}.generated.cs up to date!!!");
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"DevKit: LateBound.RunFinished failed: {ex.Message}");
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
                    var form = new FormItem(ItemType.LateBound);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        ItemName = form.ItemName;
                        EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                        using (Trace("GenerateDefaultClass"))
                        {
                            _Class_ = Helper.GetDefaultFileWithCs(EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                        }
                        var sharedNamespace = await VsixHelper.IsAddToSharedProjectAsync() ? null : await VsixHelper.GetSharedProjectAsync();
                        using (Trace("GenerateLateBoundClass"))
                        {
                            _GeneratedClass_ = CSharpLateBound.GetCsCode(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], sharedNamespace);
                        }
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
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            using (TraceShouldAddProjectItem(filePath))
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var targetFileName = filePath == "Class.cs" ? $"{ItemName}.cs" : $"{ItemName}.generated.cs";
                    return await ShouldAddProjectItemAsync(filePath, targetFileName);
                });
            }
        }

        private async System.Threading.Tasks.Task UpdateExistingGeneratedFileAsync(string generatedFileName)
        {
            using (Trace("UpdateExistingGeneratedFile", $"targetFile={generatedFileName}"))
            {
                var generatedPath = GetTargetFilePath(generatedFileName);
                if (System.IO.File.Exists(generatedPath))
                {
                    var oldCode = await FileHelper.ReadAllTextFromLine6Async(generatedPath);
                    var newCode = await Helper.ReadContentFromLine6Async(_GeneratedClass_);
                    if (!Helper.IsTheSame(oldCode, newCode))
                    {
                        await FileHelper.ForceWriteAllTextAsync(generatedPath, _GeneratedClass_);
                    }
                    return;
                }

                await WriteTargetFileIfChangedAsync(generatedFileName, _GeneratedClass_);
            }
        }

        private async System.Threading.Tasks.Task NormalizeExistingCustomFileAsync()
        {
            using (Trace("NormalizeExistingCustomFile"))
            {
                var customFile = GetTargetFilePath($"{ItemName}.cs");
                if (!System.IO.File.Exists(customFile)) return;

                var customContent = await FileHelper.ReadAllTextAsync(customFile);
                var oldDeclaration = $"public partial class {ItemName}";
                if (!customContent.Contains(oldDeclaration)) return;

                var newContent = customContent.Replace(oldDeclaration, $"internal partial class {ItemName}");
                await FileHelper.ForceWriteAllTextAsync(customFile, newContent);
            }
        }
    }
}
