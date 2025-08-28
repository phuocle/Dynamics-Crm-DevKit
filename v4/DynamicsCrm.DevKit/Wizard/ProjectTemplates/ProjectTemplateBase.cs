using EnvDTE;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class ProjectTemplateBase
    {
        protected object DTE { get; set; }
        protected Project Project { get; set; }
        protected string ProjectName { get; set; }
    }
}
