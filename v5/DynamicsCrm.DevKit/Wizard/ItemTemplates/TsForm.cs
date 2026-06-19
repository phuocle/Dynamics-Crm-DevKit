using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class TsForm : ItemTemplateBase, IWizard
    {
        private string _TypeScript_ { get; set; } = string.Empty;
        private string _TypeScriptForm_ { get; set; } = string.Empty;
        private EntityMetadata EntityMetadata { get; set; }
        private ServiceClient ServiceClient { get; set; }

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
                        var formFileName = $"{ItemName}.form.ts";
                        var userFileName = $"{ItemName}.ts";
                        var formProjectItem = GetGeneratedProjectItem(formFileName);
                        if (formProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(formFileName, _TypeScriptForm_);
                        }

                        VsixHelper.TrySetDependentUpon(formProjectItem ?? GetGeneratedProjectItem(formFileName), userFileName);
                        await RefreshOptionSetAsync();
                        await VS.StatusBar.ShowMessageAsync($"{formFileName} up to date!!!");
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"DevKit: TsForm.RunFinished failed: {ex.Message}");
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
                    var form = new FormItem(ItemType.TsForm);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        ItemName = form.ItemName;
                        ServiceClient = form.ServiceClient;
                        EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                        await EnsureEntityMetadataAsync();
                        if (!await TargetFileExistsAsync($"{ItemName}.ts"))
                        {
                            using (Trace("GenerateDefaultTypeScript", $"entity={ItemName}"))
                            {
                                _TypeScript_ = await new CodeGenService(form.ServiceClient).GetDefaultTsFormFileAsync(EntityMetadata);
                            }
                        }
                        replacementsDictionary["$TypeScript$"] = _TypeScript_;
                        using (Trace("GenerateFormTypeScript", $"entity={ItemName}"))
                        {
                            _TypeScriptForm_ = await DynamicsCrm.DevKit.Shared.Logic.TsForm.GetTsFormCodeAsync(form.ServiceClient, EntityMetadata);
                        }
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
                        "TypeScript.ts" => $"{ItemName}.ts",
                        _ => $"{ItemName}.form.ts"
                    };
                    return await ShouldAddProjectItemAsync(filePath, targetFileName);
                });
            }
        }

        private async Task EnsureEntityMetadataAsync()
        {
            using (Trace("EnsureEntityMetadata", $"entity={ItemName}"))
            {
                if (EntityMetadata?.Attributes != null) return;
                EntityMetadata = await new MetadataService(ServiceClient).FetchEntityMetadataAsync(EntityMetadata.LogicalName);
            }
        }

        private async Task RefreshOptionSetAsync()
        {
            using (Trace("RefreshOptionSet", $"entity={ItemName}"))
            {
                var optionSetFilePath = GetTargetFilePath("OptionSet.ts");
                if (string.IsNullOrWhiteSpace(optionSetFilePath)) return;

                var existingContent = File.Exists(optionSetFilePath) ? await FileHelper.ReadAllTextAsync(optionSetFilePath) : null;
                var optionSetCode = await Task.Run(async () => await TsOptionSet.GetTsOptionSetCodeAsync(ServiceClient, new List<EntityMetadata> { EntityMetadata }, existingContent));
                await WriteTargetFileIfChangedAsync("OptionSet.ts", optionSetCode);
                await AddTargetFileToProjectAsync("OptionSet.ts");
            }
        }

        private async Task<bool> TargetFileExistsAsync(string targetFileName)
        {
            using (Trace("TargetFileExists", $"targetFile={targetFileName}"))
            {
                var container = await VsixHelper.SelectedItem.GetProjectItemsContainerAsync();
                var fullPath = Path.Combine(container?.FolderPath ?? string.Empty, targetFileName);
                return File.Exists(fullPath);
            }
        }
    }
}
