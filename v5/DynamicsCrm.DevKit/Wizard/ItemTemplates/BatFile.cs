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

        private bool IsPluginManagedIdentity { get; set; } = false;
        private bool IsDevkitJs { get; set; } = false;

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            using (TraceRunStarted())
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
                        case "devkit.js":
                            IsDevkitJs = true;
                            var devkitJs = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.js");
                            replacementsDictionary.Add("$devkit.js$", devkitJs);
                            var devkitDts = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.d.ts");
                            replacementsDictionary.Add("$devkit.d.ts$", devkitDts);
                            break;
                        case "download.reports.bat":
                            var content = await VsixHelper.ReadEmbeddedResourceAsync("bat.download.reports.bat");
                            content = content.Replace("$CliConnectionArgs$", CliArgsBuilder.Build(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content);
                            break;
                        case "upload.reports.bat":
                            var contentUploadReports = await VsixHelper.ReadEmbeddedResourceAsync("bat.upload.reports.bat");
                            contentUploadReports = contentUploadReports.Replace("$CliConnectionArgs$", CliArgsBuilder.Build(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", contentUploadReports);
                            break;
                        case "download.webresources.bat":
                            var content2 = await VsixHelper.ReadEmbeddedResourceAsync("bat.download.webresources.bat");
                            content2 = content2.Replace("$CliConnectionArgs$", CliArgsBuilder.Build(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content2);
                            break;
                        case "deploy.datasource.bat":
                            var content3 = await VsixHelper.ReadEmbeddedResourceAsync("bat.deploy.datasource.bat");
                            content3 = content3.Replace("$CliConnectionArgs$", CliArgsBuilder.Build(form.CrmConnection, true));
                            replacementsDictionary.Add("$batfile.bat$", content3);
                            break;
                        case "Plugin-Managed-Identity.ps1":
                            IsPluginManagedIdentity = true;
                            var content4 = await VsixHelper.ReadEmbeddedResourceAsync("ManagedIdentity.Plugin-Managed-Identity.ps1");
                            content4 = content4.Replace("$batfile.bat$", content4);
                            replacementsDictionary.Add("$batfile.bat$", content4);
                            var content5 = await VsixHelper.ReadEmbeddedResourceAsync("ManagedIdentity.Plugin-Managed-Identity-Config.json");
                            content5 = content5.Replace("$config.json$", content5);
                            replacementsDictionary.Add("$config.json$", content5);
                            var content6 = await VsixHelper.ReadEmbeddedResourceAsync("ManagedIdentity.Plugin-Managed-Identity.md");
                            replacementsDictionary.Add("$mdfile$", content6);
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

        }

        public bool ShouldAddProjectItem(string filePath)
        {
            if (filePath == "batfile.bat") return !IsDevkitJs;
            if (filePath == "devkit.js") return IsDevkitJs;
            if (filePath == "devkit.d.ts") return IsDevkitJs;
            if (filePath == "Plugin-Managed-Identity-Config.json") return IsPluginManagedIdentity;
            if (filePath == "Plugin-Managed-Identity.md") return IsPluginManagedIdentity;
            return true;
        }
    }
}
