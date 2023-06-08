using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.PlatformUI;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class LateBound : IWizard
    {
        private object dte { get; set; }
        public string ClassCode { get; set; }
        public string GeneratedClassCode { get; set; }
        public string ItemName { get; set; }
        private ProjectItem ItemNameProjectItem { get; set; }
        private ProjectItem ItemNameGeneratedProjectItem { get; set; }
        public string ClassFile { get; set; }
        public string GeneratedClassFile { get; set; }
        public bool IsNew { get; set; } = false;

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItem.Name == $"{ItemName}.cs") ItemNameProjectItem = projectItem;
            if (projectItem.Name == $"{ItemName}.generated.cs") ItemNameGeneratedProjectItem = projectItem;
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (!File.Exists(ClassFile) || "$Class$" == File.ReadAllText(ClassFile)) Utility.ForceWriteAllText(ClassFile, ClassCode);
            Utility.ForceWriteAllText(GeneratedClassFile, GeneratedClassCode);
            if (IsNew)
            {
                try
                {
                    ItemNameGeneratedProjectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.cs";
                }
                catch
                {
                    ItemNameGeneratedProjectItem.Remove();
                    ItemNameProjectItem.ProjectItems.AddFromFile(GeneratedClassFile);
                }
            }
            VsixHelper.SetStatusMessage($"{ItemName} generated");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var form = new FormProject(ItemType.LateBound);
            var ok = form.ShowModal() ?? false;
            Replacement.SetItem(replacementsDictionary, form);
            if (ok)
            {
                dte = automationObject;
                ItemName = form.ItemName;
                var entitiesMetadatas = XrmHelper.GetEntitiesMetadata(form.CrmServiceClient, new List<string> { form.ItemName });
                ClassCode = VsixHelper.GetDefaultFileWithCs(entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"]);
                GeneratedClassCode = CSharpLateBound.GetCode(form.CrmServiceClient, entitiesMetadatas[0], replacementsDictionary["$rootnamespace$"]);
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            string GetFullFileName(string projectItemName)
            {
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
            if (filePath == "Class.cs")
            {
                ClassFile = GetFullFileName($"{ItemName}.cs");
                IsNew = !File.Exists(ClassFile);
            }
            else if (filePath == "GeneratedClass.cs")
            {
                GeneratedClassFile = GetFullFileName ($"{ItemName}.generated.cs");
                IsNew = !File.Exists(GeneratedClassFile);
            }
            return IsNew;
        }
    }
}
