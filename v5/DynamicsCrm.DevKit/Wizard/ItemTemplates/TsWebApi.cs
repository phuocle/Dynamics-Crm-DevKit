using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
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
    internal class TsWebApi : ItemTemplateBase, IWizard
    {
        private string _TypeScriptWebApi_ { get; set; } = string.Empty;
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
                    await WriteTargetFileIfChangedAsync($"{ItemName}.webapi.ts", _TypeScriptWebApi_);
                    VsixHelper.TrySetDependentUpon(GetGeneratedProjectItem($"{ItemName}.webapi.ts"), $"{ItemName}.ts");

                    // Generate OptionSet.ts
                    var optionSetFilePath = GetTargetFilePath("OptionSet.ts");
                    if (!string.IsNullOrWhiteSpace(optionSetFilePath))
                    {
                        var existingContent = File.Exists(optionSetFilePath) ? await FileHelper.ReadAllTextAsync(optionSetFilePath) : null;
                        var optionSetCode = await Task.Run(async () => await TsOptionSet.GetTsOptionSetCodeAsync(ServiceClient, new List<EntityMetadata> { EntityMetadata }, existingContent));
                        await WriteTargetFileIfChangedAsync("OptionSet.ts", optionSetCode);
                        await AddTargetFileToProjectAsync("OptionSet.ts");
                    }
                    await VS.StatusBar.ShowMessageAsync($"{ItemName}.webapi.ts up to date!!!");
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"DevKit: TsWebApi.RunFinished failed: {ex.Message}");
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
                var form = new FormItem(ItemType.TsWebApi);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    ServiceClient = form.ServiceClient;
                    EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    _TypeScriptWebApi_ = await DynamicsCrm.DevKit.Shared.Logic.TsWebApi.GetTsWebApiCodeAsync(form.ServiceClient, EntityMetadata);
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
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var targetFileName = filePath switch
                {
                    "TypeScript.ts" => $"{ItemName}.ts",
                    _ => $"{ItemName}.webapi.ts"
                };
                return await ShouldAddProjectItemAsync(filePath, targetFileName);
            });
        }
    }
}
