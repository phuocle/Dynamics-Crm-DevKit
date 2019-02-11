using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class CSharpTestItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
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
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE) automationObject;
                var projects = (object[]) Dte.ActiveSolutionProjects;
                var project = (Project) projects[0];
                var entityName = project.Name.Split('.')[project.Name.Split('.').Length - 2];
                var logicalName = entityName.ToLower();
                var form = new FormProject(FormType.TestItem, Dte, entityName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    var entityName2 = form.EntityNameTest;// logicalName.ToLower()=="customaction" ? "None" : entityName;
                    if (entityName2 == "None") logicalName = "none"; else logicalName = entityName.ToLower();
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
                    if (project.Name.Contains(".Plugin") || project.Name.Contains(".Plugin."))
                        ClassType = "Plugin";
                    else if (project.Name.Contains(".CustomAction") || project.Name.EndsWith(".CustomAction."))
                        ClassType = "CustomAction";
                    else if (project.Name.Contains(".Workflow") || project.Name.EndsWith(".Workflow."))
                        ClassType = "Workflow";
                    else if (project.Name.Contains(".DataProvider") || project.Name.EndsWith(".DataProvider."))
                        ClassType = "DataProvider";
                        var solutionFullName = Dte?.Solution?.FullName;
                    var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
                    var parts = fInfo.Name.Split(".".ToCharArray());
                    replacementsDictionary.Add("$DevKitShared$", $"{GetName(parts)}Shared");
                    replacementsDictionary.Add("$ProxyTypes$", $"{GetName(parts)}ProxyTypes");
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

        private string GetName(string[] parts)
        {
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            return data;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return filePath.ToLower().Contains(ClassType.ToLower());
        }
    }
}
