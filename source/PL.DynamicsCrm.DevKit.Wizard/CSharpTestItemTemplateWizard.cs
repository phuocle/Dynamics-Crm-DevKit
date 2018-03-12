using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class CSharpTestItemTemplateWizard : IWizard
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
                var form = new FormProject(FormType.TestItem, DTE, entityName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$entityname$", entityName);
                    replacementsDictionary.Add("$message$", form.Message);
                    replacementsDictionary.Add("$stage_string$", form.StageString);
                    replacementsDictionary.Add("$execution$", form.Execution);
                    var cols = project.Name.Split(".".ToCharArray());
                    replacementsDictionary.Add("$namespace2$", $"{cols[0]}.{cols[1]}.{cols[2]}");
                    replacementsDictionary.Add("$namespace3$", $"{cols[0]}.{cols[1]}");
                    replacementsDictionary.Add("$PrimaryEntityName$", entityName);
                    replacementsDictionary.Add("$FilteringAttributes$", form.FilteringAttributes);
                    replacementsDictionary.Add("$logicalname$", logicalName);
                    if (project.Name.Contains(".Plugin.") ||
                        project.Name.Contains(".CustomAction.") ||
                        project.Name.EndsWith(".CustomAction"))
                    {
                        replacementsDictionary.Add("$FormType$", "true");
                        if (project.Name.Contains(".CustomAction.") ||
                            project.Name.EndsWith(".CustomAction"))
                            replacementsDictionary.Add("$Plugin$", "false");
                        else
                            replacementsDictionary.Add("$Plugin$", "true");
                    }
                    else
                        replacementsDictionary.Add("$FormType$", "false");
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
