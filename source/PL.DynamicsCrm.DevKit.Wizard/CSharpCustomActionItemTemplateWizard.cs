using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class CSharpCustomActionItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE) automationObject;
                var projects = (object[]) Dte.ActiveSolutionProjects;
                var project = (Project) projects[0];
                var entityName = string.Empty;
                if (project.Name.Split('.').Length == 4)
                    entityName = project.Name.Split('.')[3];
                var logicalName = entityName.ToLower();
                var form = new FormClassPlugin(Dte, FormType.CustomActionItem, entityName, logicalName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$entityname$", form.EntityName);
                    replacementsDictionary.Add("$message$", form.Message);
                    replacementsDictionary.Add("$stage_string$", form.StageString);
                    replacementsDictionary.Add("$execution$", form.Execution);
                    replacementsDictionary.Add("$privateclass$", form.PrivateClass);
                    replacementsDictionary.Add("$logicalname$", form.LogicalName);
                    replacementsDictionary.Add("$DevKitShared$", $"{project.Name.Split('.')[0]}.{project.Name.Split('.')[1]}.Shared");
                }
                else
                {
                    throw new WizardCancelledException("Cancel Click");
                }
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}