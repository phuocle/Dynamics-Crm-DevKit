using System.Collections.Generic;
using System.IO;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using NUglify;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class JsDevkit : IWizard
    {
        private DTE DTE { get; set; }
        private string CurrentFolder { get; set; }
        private ProjectItem SelectedProjectItem { get; set; }

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
            var devkitFileName = Path.Combine(CurrentFolder, "devkit.js");
            var devkitCode = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.devkit.365.js");
            //var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var devkitCodeMin = devkitCode;
            if (File.Exists(devkitFileName))
                Utility.ForceWriteAllText(devkitFileName, devkitCodeMin);
            else
            {
                Utility.ForceWriteAllText(devkitFileName, devkitCodeMin);
                SelectedProjectItem.ProjectItems.AddFromFile(devkitFileName);
            }
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            DTE = (DTE)automationObject;
            SelectedProjectItem = GetProjectItem();
            if (SelectedProjectItem == null) throw new WizardCancelledException();
            CurrentFolder = Path.GetDirectoryName(SelectedProjectItem.FileNames[0]);
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }

        private ProjectItem GetProjectItem()
        {
            var selectItem = DTE.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            return projectItems.Parent as ProjectItem;
        }
    }
}
