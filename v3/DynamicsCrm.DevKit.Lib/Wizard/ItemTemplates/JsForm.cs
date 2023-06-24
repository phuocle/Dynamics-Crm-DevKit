using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class JsForm : IWizard
    {
        private object Dte { get; set; }
        public string JavascriptCode { get; set; }
        public string Javascript_dts_Code { get; set; }
        public string Javascript_form_js_Code { get; set; }
        public string ItemName { get; set; }
        private ProjectItem JavascriptProjectItem { get; set; } = null;
        private ProjectItem Javascript_dts_ProjectItem { get; set; } = null;
        private ProjectItem Javascript_form_js_ProjectItem { get; set; } = null;
        public string JavascriptFile { get; set; }
        public string Javascript_dts_File { get; set; }
        public string Javascript_form_js_File { get; set; }
        public bool IsNewJavascript { get; set; } = false;
        public bool IsNewJavascript_form_js { get; set; } = false;
        public bool IsNewJavascript_dts { get; set; } = false;
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
            if (IsNewJavascript && projectItem.Name == $"{ItemName}.js") JavascriptProjectItem = projectItem;
            if (IsNewJavascript_dts && projectItem.Name == $"{ItemName}.d.ts") Javascript_dts_ProjectItem = projectItem;
            if (IsNewJavascript_form_js && projectItem.Name == $"{ItemName}.form.js") Javascript_form_js_ProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (!File.Exists(JavascriptFile) || "$Javascript$" == File.ReadAllText(JavascriptFile)) Utility.ForceWriteAllText(JavascriptFile, JavascriptCode);
            Utility.ForceWriteAllText(Javascript_dts_File, Javascript_dts_Code);
            Utility.ForceWriteAllText(Javascript_form_js_File, Javascript_form_js_Code);

            if (IsNewJavascript_form_js)
            {
                JavascriptProjectItem ??= GetProjectItem($"{ItemName}.js");
                Javascript_dts_ProjectItem ??= GetProjectItem($"{ItemName}.d.ts");
                Javascript_form_js_ProjectItem ??= GetProjectItem($"{ItemName}.form.js");
                try
                {
                    if (Javascript_dts_ProjectItem != null)
                    {
                        Javascript_dts_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                    }
                    Javascript_form_js_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                }
                catch
                {
                    if (Javascript_dts_ProjectItem != null)
                    {
                        Javascript_dts_ProjectItem.Remove();
                        JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_dts_File);
                    }
                    Javascript_form_js_ProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_form_js_File);
                }
            }
            VsixHelper.ExecuteCommand("File.SaveAll");
            VsixHelper.SetStatusMessage($"{ItemName}.form.js generated");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var form = new FormProject(ItemType.JsForm);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                Replacement.SetItem(replacementsDictionary, form);
                Dte = automationObject;
                ItemName = form.ItemName;
                IsWebApi = File.Exists(GetFullFileName($"{ItemName}.webapi.js"));
                var entitiesMetadatas = XrmHelper.GetEntitiesMetadata(form.CrmServiceClient, new List<string> { form.ItemName });
                JavascriptCode = VsixHelper.GetDefaultFileWithForm(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"]);
                var comment = new CommentTypeScriptDeclaration
                {
                    UseForm = true,
                    UseWebApi = IsWebApi,
                    Version = ReadVersion(GetFullFileName($"{ItemName}.dt.ts"))
                };
                Javascript_form_js_Code = DynamicsCrm.DevKit.Shared.JsForm.GetCode(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"], comment, out var dts);
                Javascript_dts_Code = dts;
            }
            else
                VsixHelper.ThrowWizardCancelledException();
        }

        private string ReadVersion(string dtsFile)
        {
            if (File.Exists(dtsFile))
            {
                var lines = File.ReadAllLines(dtsFile);
                try
                {
                    var json = lines[lines.Length - 1];
                    var oldComment = SimpleJson.DeserializeObject<OldCommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    return oldComment?.Version ?? comment?.Version ?? Const.Version;
                }
                catch
                {
                    return Const.Version;
                }
            }
            return Const.Version;
        }

        ProjectItem GetProjectItem(string projectItemName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var selectItem = ((EnvDTE.DTE)Dte).SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
            {
                projectItems = selectItem.Project.ProjectItems;
            }
            else if (selectItem.ProjectItem != null)
            {
                projectItems = selectItem.ProjectItem.ProjectItems;
            }
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name == projectItemName)
                    return projectItem;
            }
            return null;
        }

        string GetFullFileName(string projectItemName)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var selectDirectoryName = string.Empty;
            var selectItem = ((EnvDTE.DTE)Dte).SelectedItems.Item(1);
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
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name == projectItemName)
                    return Path.Combine(Path.GetDirectoryName(projectItem.FileNames[0]), projectItemName);
            }
            return Path.Combine(selectDirectoryName, projectItemName);
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (filePath == "Javascript.js")
            {
                JavascriptFile = GetFullFileName($"{ItemName}.js");
                IsNewJavascript = !File.Exists(JavascriptFile);
                return IsNewJavascript;
            }
            else if (filePath == "Javascript.d.ts")
            {
                Javascript_dts_File = GetFullFileName($"{ItemName}.d.ts");
                IsNewJavascript_dts = !File.Exists(Javascript_dts_File);
                return IsNewJavascript_dts;
            }
            else if (filePath == "Javascript.form.js")
            {
                Javascript_form_js_File = GetFullFileName($"{ItemName}.form.js");
                IsNewJavascript_form_js = !File.Exists(Javascript_form_js_File);
                return IsNewJavascript_form_js;
            }
            return false;
        }
    }
}
