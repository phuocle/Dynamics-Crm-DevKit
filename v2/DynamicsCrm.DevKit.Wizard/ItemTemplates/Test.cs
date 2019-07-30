using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class Test : IWizard
    {
        private DTE DTE { get; set; }
        private string ClassType { get; set; }
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
            try
            {
                DTE = (DTE)automationObject;
                var form = new FormItem(ItemType.Test, DTE, string.Empty, string.Empty);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating item ...
                var projects = (object[])DTE.ActiveSolutionProjects;
                var project = (Project)projects[0];
                if (project.Name.Contains(".Plugin") || project.Name.Contains(".Plugin."))
                    ClassType = "Plugin";
                else if (project.Name.Contains(".CustomAction") || project.Name.EndsWith(".CustomAction."))
                    ClassType = "CustomAction";
                else if (project.Name.Contains(".Workflow") || project.Name.EndsWith(".Workflow."))
                    ClassType = "Workflow";
                else if (project.Name.Contains(".DataProvider") || project.Name.EndsWith(".DataProvider."))
                    ClassType = "DataProvider";
                else
                    ClassType = "";
                Wizard.ProcessItemReplacementsDictionary(replacementsDictionary, form);
            }
            catch
            {
                throw;
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            if (ClassType.Length == 0) return false;
            return filePath.ToLower().Contains(ClassType.ToLower());
        }
    }
}
