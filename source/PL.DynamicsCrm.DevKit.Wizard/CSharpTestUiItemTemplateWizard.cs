using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class CSharpTestUiItemTemplateWizard : IWizard
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
                if (project.Name.Split('.').Length == 3)
                    entityName = "none";
                else
                    if (project.Name.Split('.').Length == 4)
                        entityName = project.Name.Split('.')[3];
                    else
                        entityName = "none";
                var logicalName = entityName.ToLower();
                var form = new FormProject(FormType.UiTestItem, Dte, entityName);
                if (form.ShowDialog() == DialogResult.OK)
                    replacementsDictionary.Add("$class$", form.ProjectName);
                else
                    throw new WizardCancelledException("Cancel Click");
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