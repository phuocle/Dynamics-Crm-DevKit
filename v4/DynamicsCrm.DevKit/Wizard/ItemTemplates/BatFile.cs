using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Windows.Input;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class BatFile : ItemTemplateBase, IWizard
    {
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
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormPlugin(ItemType.BatFile, replacementsDictionary["$rootnamespace$"]);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    replacementsDictionary.Add("$batfilename$", form.BatFileName);
                    switch (form.BatFileName)
                    {
                        case "download.reports.bat":
                            var content = await VsixHelper.ReadEmbeddedResourceAsync("download.reports.bat");
                            content = content.Replace("$ConnectionString$", Helper.BuildConnectionString(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content);
                            break;
                        case "download.webresources.bat":
                            var content2 = await VsixHelper.ReadEmbeddedResourceAsync("download.webresources.bat");
                            content2 = content2.Replace("$ConnectionString$", Helper.BuildConnectionString(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content2);
                            break;
                        case "deploy.datasource.bat":
                            var content3 = await VsixHelper.ReadEmbeddedResourceAsync("deploy.datasource.bat");
                            content3 = content3.Replace("$ConnectionString$", Helper.BuildConnectionString(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content3);
                            break;
                    }
                    await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    Mouse.OverrideCursor = null;
                }
                else
                {
                    VsixHelper.ThrowWizardCancelledException();
                }
            });

        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
