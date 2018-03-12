using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class CSharpCustomActionItemTemplateWizard : IWizard
    {
        private DTE DTE { get; set; }
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

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                DTE = (DTE)automationObject;
                var projects = (object[])DTE.ActiveSolutionProjects;
                var project = (Project)projects[0];
                var entityName = string.Empty;
                if (project.Name.Split('.').Length == 4 )
                    entityName = project.Name.Split('.')[3];
                var logicalName = entityName.ToLower();
                var form = new FormClassPlugin(DTE, FormType.CustomActionItem, entityName, logicalName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$entityname$", form.EntityName);
                    replacementsDictionary.Add("$message$", form.Message);
                    replacementsDictionary.Add("$stage_string$", form.StageString);
                    replacementsDictionary.Add("$execution$", form.Execution);
                    replacementsDictionary.Add("$privateclass$", form.PrivateClass);
                    replacementsDictionary.Add("$logicalname$", form.LogicalName);
                }
                else
                    throw new WizardCancelledException("Cancel Click");
            }
            else
                throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
