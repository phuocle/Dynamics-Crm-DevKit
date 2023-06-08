using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class JsForm : IWizard
    {
        private object dte { get; set; }
        public string JavascriptCode { get; set; }
        public string Javascript_dts_Code { get; set; }
        public string Javascript_form_js_Code { get; set; }
        public string ItemName { get; set; }
        private ProjectItem JavascriptProjectItem { get; set; }
        private ProjectItem Javascript_dts_ProjectItem { get; set; }
        private ProjectItem Javascript_form_js_ProjectItem { get; set; }
        public string JavascriptFile { get; set; }
        public string Javascript_dts_File { get; set; }
        public string Javascript_form_js_File { get; set; }
        public bool IsNew { get; set; } = false;
        public bool IsWebApi { get; set; } = false;

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItem.Name == $"{ItemName}.js") JavascriptProjectItem = projectItem;
            if (projectItem.Name == $"{ItemName}.d.ts") Javascript_dts_ProjectItem = projectItem;
            if (projectItem.Name == $"{ItemName}.form.js") Javascript_form_js_ProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (!File.Exists(JavascriptFile) || "$Javascript$" == File.ReadAllText(JavascriptFile)) Utility.ForceWriteAllText(JavascriptFile, JavascriptCode);
            Utility.ForceWriteAllText(Javascript_dts_File, Javascript_dts_Code);
            Utility.ForceWriteAllText(Javascript_form_js_File, Javascript_form_js_Code);
            if (IsNew)
            {
                try
                {
                    Javascript_dts_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                    Javascript_form_js_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                }
                catch
                {
                    Javascript_dts_ProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_dts_File);
                    Javascript_form_js_ProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_form_js_File);
                }
            }
            VsixHelper.SetStatusMessage($"{ItemName} generated");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var form = new FormProject(ItemType.JsForm);
            var ok = form.ShowModal() ?? false;
            Replacement.SetItem(replacementsDictionary, form);
            if (ok)
            {
                dte = automationObject;
                ItemName = form.ItemName;
                IsWebApi = File.Exists(GetFullFileName($"{ItemName}.webapi.js"));
                var entitiesMetadatas = XrmHelper.GetEntitiesMetadata(form.CrmServiceClient, new List<string> { form.ItemName });
                JavascriptCode = VsixHelper.GetDefaultFileWithForm(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"]);
                var comment = new CommentTypeScriptDeclaration
                {
                    UseForm = true,
                    UseWebApi = IsWebApi,
                    Version = IsNew ? Const.Version : ReadVersion(GetFullFileName($"{ItemName}.dt.ts"))
                };
                Javascript_form_js_Code = DynamicsCrm.DevKit.Shared.JsForm.GetCode(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"], comment, out var dts);
                Javascript_dts_Code = dts;
            }
        }

        private string ReadVersion(string file)
        {
            return "1.0.0.0";
        }

        string GetFullFileName(string projectItemName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var selectDirectoryName = string.Empty;
            var selectItem = ((EnvDTE.DTE)dte).SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
            {
                projectItems = selectItem.Project.ProjectItems;
                selectDirectoryName = Path.GetDirectoryName(selectItem.Project.FullName);
            }
            else if (selectItem.ProjectItem != null)
            {
                projectItems = selectItem.ProjectItem.ProjectItems;
                selectDirectoryName = Path.GetDirectoryName(selectItem.ProjectItem.FileNames[0]);
            }
            if (projectItems == null) throw new WizardCancelledException("Cancel Click");
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name == projectItemName)
                    return Path.Combine(Path.GetDirectoryName(projectItem.FileNames[0]), projectItemName);
            }
            return Path.Combine(selectDirectoryName, projectItemName);
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            if (filePath == "Javascript.js")
            {
                JavascriptFile = GetFullFileName($"{ItemName}.js");
                IsNew = !File.Exists(JavascriptFile);
            }
            else if (filePath == "Javascript.d.ts")
            {
                Javascript_dts_File = GetFullFileName($"{ItemName}.d.ts");
            }
            else if (filePath == "Javascript.form.js")
            {
                Javascript_form_js_File = GetFullFileName($"{ItemName}.form.js");
            }
            return IsNew;
        }
    }
}
