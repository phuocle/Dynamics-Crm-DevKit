using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ProjectTemplates
{
    public class Shared : IWizard
    {
        private object DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName {get;set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            project.Name = ProjectName;
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var form = new FormProject(DevKit.Shared.ProjectType.Shared);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                DTE = automationObject;
                Replacement.Set(replacementsDictionary, form);
                ProjectName = form.ProjectName;
                if (!File.Exists(VsixHelper.GetDynamicsCrmDevKitCliJsonFileName())) {
                    var solutionName = VsixHelper.GetSolutionName();
                    var json = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DynamicsCrm.DevKit.Cli.json");
                    json = json
                        .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                        .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.CustomApi.*.dll", $"{solutionName}.CustomApi.*.dll")
                        .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                        .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                        .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll")
                        ;
                    Utility.ForceWriteAllText(VsixHelper.GetDynamicsCrmDevKitCliJsonFileName(), json);
                }
            }
            else
            {
                Utility.TryDeleteDirectory(Replacement.DestinationDirectory);
                throw new WizardCancelledException();
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
