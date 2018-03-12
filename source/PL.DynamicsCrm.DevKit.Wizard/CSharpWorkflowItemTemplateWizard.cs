using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class CSharpWorkflowItemTemplateWizard : IWizard
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
                var entityName = project.Name.Split('.')[3];
                var form = new FormProject(FormType.WorkflowItem, DTE, entityName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.ProjectName);
                    replacementsDictionary.Add("$EntityName$", entityName);
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
