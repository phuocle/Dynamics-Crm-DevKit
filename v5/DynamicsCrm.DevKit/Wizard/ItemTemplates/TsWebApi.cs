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
        }

        public void RunFinished()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                var TypeScriptWebApiProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.webapi.ts");
                var TypeScriptWebApiProjectItemFullPath = TypeScriptWebApiProjectItem.FileNames[0];
                await FileHelper.ForceWriteAllTextAsync(TypeScriptWebApiProjectItemFullPath, _TypeScriptWebApi_);
                var TypeScriptProjectItem = await VsixHelper.GetProjectItemAsync($"{ItemName}.ts");
                try
                {
                    TypeScriptWebApiProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.ts";
                }
                catch
                {
                    TypeScriptWebApiProjectItem.Remove();
                    TypeScriptProjectItem.ProjectItems.AddFromFile(TypeScriptWebApiProjectItemFullPath);
                }

                // Generate OptionSet.ts
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                var currentFolder = selectedItem.FullPath;
                var optionSetFilePath = Path.Combine(currentFolder, "OptionSet.ts");
                var existingContent = File.Exists(optionSetFilePath) ? await FileHelper.ReadAllTextAsync(optionSetFilePath) : null;
                var optionSetCode = await TsOptionSet.GetTsOptionSetCodeAsync(ServiceClient, new List<EntityMetadata> { EntityMetadata }, existingContent);
                await FileHelper.ForceWriteAllTextAsync(optionSetFilePath, optionSetCode);

                // Add OptionSet.ts to project if new
                var optionSetProjectItem = await VsixHelper.GetProjectItemAsync("OptionSet.ts");
                if (optionSetProjectItem == null)
                {
                    await VsixHelper.SelectedItem.AddFileToProjectAsync(optionSetFilePath);
                }

                await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                await VS.StatusBar.ShowMessageAsync($"{ItemName}.webapi.ts up to date!!!");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
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
                        FilePath = $"{ItemName}.webapi.ts";
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
