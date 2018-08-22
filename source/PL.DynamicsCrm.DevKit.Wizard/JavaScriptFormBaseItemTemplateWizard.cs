using System.Collections.Generic;
using System.IO;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using NUglify;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class JavaScriptFormBaseItemTemplateWizard : IWizard
    {
        private string ProjectName { get; set; }
        private string CrmForm { get; set; }
        private string CrmFormDebug { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (projectItem.Name.Contains(".debug.js"))
            {
                CrmFormDebug = projectItem.FileNames[0];
                CreateCrmFormDebug();
            }
            else
            {
                CrmForm = projectItem.FileNames[0];
                CreateCrmForm();
                projectItem.ProjectItems.AddFromFile(CrmFormDebug);
                projectItem.ContainingProject.Save();
            }
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            var parts = replacementsDictionary["$rootnamespace$"].Split(".".ToCharArray());
            ProjectName = $"{parts[1]}";
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }

        private void CreateCrmForm()
        {
            //var code = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.FormBase.js");

            var code = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.DevKit.js");
            //var codeSetting = new CodeSettings()
            //{

            //};

            code = Uglify.Js(code).Code;
            //var minifier = new JsMinifier();
            //code = minifier.Minify(code);

            //code = code.Replace("$ProjectName$", ProjectName);
            //var pattern = @"\/\/(.*)";
            //code = Regex.Replace(code, pattern, string.Empty);
            //code = Regex.Replace(code, @"^\s+$[\r\n]*", "", RegexOptions.Multiline);

            File.WriteAllText(CrmForm, code);
        }

        private void CreateCrmFormDebug()
        {
            var code = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.FormBase.js");
            code = code.Replace("$ProjectName$", ProjectName);
            code = code.Replace("//if (", "if (");
            File.WriteAllText(CrmFormDebug, code);
        }
    }
}