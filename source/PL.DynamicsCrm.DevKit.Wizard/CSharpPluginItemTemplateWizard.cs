using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class CSharpPluginItemTemplateWizard : IWizard
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

                var entityName = project.Name.Split('.')[project.Name.Split('.').Length - 1];
                var logicalName = entityName.ToLower();

                var form = new FormClassPlugin(Dte, FormType.PluginItem, entityName, logicalName);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$entityname$", form.EntityName);
                    replacementsDictionary.Add("$message$", form.Message);
                    replacementsDictionary.Add("$stage_string$", form.StageString);
                    replacementsDictionary.Add("$execution$", form.Execution);
                    replacementsDictionary.Add("$privateclass$", form.PrivateClass);
                    replacementsDictionary.Add("$logicalname$", form.LogicalName);
                    var solutionFullName = Dte?.Solution?.FullName;
                    var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
                    var parts = fInfo.Name.Split(".".ToCharArray());
                    replacementsDictionary.Add("$DevKitShared$", $"{GetName(parts)}Shared");
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
            return true;
        }
    }
}