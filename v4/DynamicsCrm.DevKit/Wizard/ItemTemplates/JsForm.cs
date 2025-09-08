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
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsForm : ItemTemplateBase, IWizard
    {
        private string _Javascript_ { get; set; } = string.Empty;
        private string _JavascriptForm_ { get; set; } = string.Empty;
        private string _Javascriptdts_ { get; set; } = string.Empty;
        private EntityMetadata EntityMetadata { get; set; }
        private bool IsJsWebApiExist { get; set; } = false;
        //private ProjectItem ProjectItemForm { get; set; }
        //private ProjectItem ProjectItemdts { get; set; }
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
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
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                if (!IsFilePathExist)
                {
                    var JavascriptFormProjectItem = VsixHelper.GetProjectItem(this.DTE, $"{ItemName}.form.js");
                    var JavascriptFormProjectItemFullPath = JavascriptFormProjectItem.FileNames[0];
                    JavascriptFormProjectItem.Remove();

                    var JavascriptdtsProjectItem = VsixHelper.GetProjectItem(this.DTE, $"{ItemName}.d.ts");
                    var JavascriptdtsProjectItemFullPath = JavascriptdtsProjectItem.FileNames[0];
                    JavascriptdtsProjectItem.Remove();

                    var JavascriptProjectItem = VsixHelper.GetProjectItem(this.DTE, $"{ItemName}.js");
                    JavascriptProjectItem.ProjectItems.AddFromFile(JavascriptFormProjectItemFullPath);
                    JavascriptdtsProjectItem.ProjectItems.AddFromFile(JavascriptdtsProjectItemFullPath);

                    await VS.StatusBar.ShowMessageAsync($"{ItemName}.js, {ItemName}.form.js, {ItemName}.d.ts created!!!");
                    await VsixHelper.ExecuteCommandAsync("File.SaveAll");
                }
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var form = new FormItem(ItemType.JsForm);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    DTE = (EnvDTE.DTE)automationObject;
                    ItemName = form.ItemName;
                    EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    _Javascript_ = await XrmHelper.GetDefaultFileWithFormAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                    (_JavascriptForm_, _Javascriptdts_) = await DynamicsCrm.DevKit.Shared.Logic.JsForm.GetJsFormCodeAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], IsJsWebApiExist);
                    replacementsDictionary["$Javascript.d.ts$"] = _Javascriptdts_;
                    replacementsDictionary["$Javascript.form.js$"] = _JavascriptForm_;
                    replacementsDictionary["$Javascript$"] = _Javascript_;
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
                    case "Javascript.js":
                        FilePath = $"{ItemName}.js";
                        break;
                    case "Javascript.d.ts":
                        FilePath = $"{ItemName}.d.ts";
                        break;
                    default:
                        FilePath = $"{ItemName}.form.js";
                        break;
                }
                var selectedItem = await VsixHelper.SelectedItem.GetSolutionItemAsync();
                FullFilePath = System.IO.Path.Combine(selectedItem.FullPath, FilePath);
                IsFilePathExist = System.IO.File.Exists(FullFilePath);
                IsJsWebApiExist = System.IO.File.Exists(System.IO.Path.Combine(selectedItem.FullPath, ".webapi.js"));
                return !IsFilePathExist;
            });
        }
    }
}
