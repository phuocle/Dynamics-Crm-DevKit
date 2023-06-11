using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class JsWebApi : IWizard
    {
        private object dte { get; set; }
        public string JavascriptCode { get; set; }
        public string Javascript_dts_Code { get; set; }
        public string Javascript_webapi_js_Code { get; set; }
        public string ItemName { get; set; }
        private ProjectItem JavascriptProjectItem { get; set; } = null;
        private ProjectItem Javascript_dts_ProjectItem { get; set; } = null;
        private ProjectItem Javascript_webapi_js_ProjectItem { get; set; } = null;
        public string JavascriptFile { get; set; }
        public string Javascript_dts_File { get; set; }
        public string Javascript_webapi_js_File { get; set; }
        public bool IsNewJavascript { get; set; } = false;
        public bool IsNewJavascript_webapi_js { get; set; } = false;
        public bool IsNewJavascript_dts { get; set; } = false;
        public bool IsForm { get; set; } = false;

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
            if (IsNewJavascript_webapi_js && projectItem.Name == $"{ItemName}.webapi.js") Javascript_webapi_js_ProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (!File.Exists(JavascriptFile) || "$Javascript$" == File.ReadAllText(JavascriptFile)) Utility.ForceWriteAllText(JavascriptFile, JavascriptCode);
            Utility.ForceWriteAllText(Javascript_dts_File, Javascript_dts_Code);
            Utility.ForceWriteAllText(Javascript_webapi_js_File, Javascript_webapi_js_Code);
            if (IsNewJavascript_webapi_js)
            {
                if (JavascriptProjectItem == null) JavascriptProjectItem = GetProjectItem($"{ItemName}.js");
                if (Javascript_webapi_js_ProjectItem == null) Javascript_webapi_js_ProjectItem = GetProjectItem($"{ItemName}.webapi.js");
                try
                {
                    if (Javascript_dts_ProjectItem != null)
                    {
                        Javascript_dts_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                    }
                    Javascript_webapi_js_ProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.js";
                }
                catch
                {
                    if (Javascript_dts_ProjectItem != null)
                    {
                        Javascript_dts_ProjectItem.Remove();
                        JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_dts_File);
                    }
                    Javascript_webapi_js_ProjectItem.Remove();
                    JavascriptProjectItem.ProjectItems.AddFromFile(Javascript_webapi_js_File);
                }
            }
            VsixHelper.ExecuteCommand("File.SaveAll");
            VsixHelper.SetStatusMessage($"{ItemName}.webapi.js generated");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var form = new FormProject(ItemType.JsWebApi);
            var ok = form.ShowModal() ?? false;
            Replacement.SetItem(replacementsDictionary, form);
            if (ok)
            {
                dte = automationObject;
                ItemName = form.ItemName;
                IsForm = File.Exists(GetFullFileName($"{ItemName}.form.js"));
                var entitiesMetadatas = XrmHelper.GetEntitiesMetadata(form.CrmServiceClient, new List<string> { form.ItemName });
                JavascriptCode = VsixHelper.GetDefaultFileWithWebApi(ItemName);
                var comment = new CommentTypeScriptDeclaration
                {
                    UseForm = IsForm,
                    UseWebApi = true,
                    Version = ReadVersion(GetFullFileName($"{ItemName}.dt.ts"))
                };
                Javascript_webapi_js_Code = DynamicsCrm.DevKit.Shared.JsWebApi2.GetCode(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"], comment, out var dts);
                Javascript_dts_Code = dts;
            }
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
            var selectItem = ((EnvDTE.DTE)dte).SelectedItems.Item(1);
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
                IsNewJavascript = !File.Exists(JavascriptFile);
                return IsNewJavascript;
            }
            else if (filePath == "Javascript.d.ts")
            {
                Javascript_dts_File = GetFullFileName($"{ItemName}.d.ts");
                IsNewJavascript_dts = !File.Exists(Javascript_dts_File);
                return IsNewJavascript_dts;
            }
            else if (filePath == "Javascript.webapi.js")
            {
                Javascript_webapi_js_File = GetFullFileName($"{ItemName}.webapi.js");
                IsNewJavascript_webapi_js = !File.Exists(Javascript_webapi_js_File);
                return IsNewJavascript_webapi_js;
            }
            return false;
        }
    }
}
