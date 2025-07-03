using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Wizard.ProjectTemplates
{
    internal class Test : IWizard
    {
        private object DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
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
            ThreadHelper.ThrowIfNotOnUIThread();
            VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
            if (!VsixHelper.IsProxyTypesProjectExist()) VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
            if (!VsixHelper.IsSharedTestProjectExist()) VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
            var form = new FormProject(ProjectType.Test);
            var ok = form.ShowModal() ?? false;
            Replacement.Set(replacementsDictionary, form);
            if (ok)
            {
                DTE = automationObject;
                ProjectName = form.ProjectName;
                var runsettings = Utility.GetTestRunSettingsFile((DTE)DTE);
                if (!System.IO.File.Exists(runsettings))
                {
                    var text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.VsTest.runsettings");
                    if (text.Length > 0)
                    {
                        text = text.Replace("[[ProxyTypes.dll]]", Utility.GetProxyTypesProject((DTE)DTE) + ".dll");
                        text = text.Replace("[[Namespace]]", replacementsDictionary["$specifiedsolutionname$"]);
                        Utility.ForceWriteAllText(runsettings, text);
                    }
                }
            }
            else
            {
                VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
