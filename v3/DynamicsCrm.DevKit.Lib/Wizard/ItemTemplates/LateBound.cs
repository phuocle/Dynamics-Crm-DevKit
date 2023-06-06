using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
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
        public string ClassFile { get; set; }
        public string GeneratedClassFile { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItem.Name == $"{ItemName}.generated.cs") projectItem.Properties.Item("DependentUpon").Value = $"{ItemName}.cs";
        }

        public void RunFinished()
        {
            if ("$Class$" == File.ReadAllText(ClassFile)) Utility.ForceWriteAllText(ClassFile, ClassCode);
            Utility.ForceWriteAllText(GeneratedClassFile, GeneratedClassCode);
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
                var selectItem = ((EnvDTE.DTE)dte).SelectedItems.Item(1);
                ProjectItems projectItems = null;
                if (selectItem.Project != null)
                    projectItems = selectItem.Project.ProjectItems;
                else if (selectItem.ProjectItem != null)
                    projectItems = selectItem.ProjectItem.ProjectItems;
                if (projectItems == null) throw new WizardCancelledException("Cancel Click");
                foreach (ProjectItem projectItem in projectItems)
                {
                    if (projectItem.Name == projectItemName)
                        return Path.Combine(Path.GetDirectoryName(projectItem.FileNames[0]), projectItemName);
                }
                return Path.Combine(Path.GetDirectoryName(projectItems.Item(1).FileNames[0]), projectItemName);
            }
            if (filePath == "Class.cs")
            {
                ClassFile = GetFullFileName($"{ItemName}.cs");
                return !File.Exists(ClassFile);
            }
            else if (filePath == "GeneratedClass.cs")
            {
                GeneratedClassFile = GetFullFileName ($"{ItemName}.generated.cs");
                return !File.Exists(GeneratedClassFile);
            }
            return false;
        }
    }
}
