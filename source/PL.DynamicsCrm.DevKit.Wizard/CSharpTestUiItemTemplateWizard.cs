using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class CSharpTestUiItemTemplateWizard : IWizard
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
                if (project.Name.Split('.').Length == 3)
                    entityName = "none";
                else
                    entityName = project.Name.Split('.')[3];
                var logicalName = entityName.ToLower();
                var form = new FormProject(FormType.UiTestItem, DTE, entityName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.ProjectName);
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
