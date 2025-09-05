using EnvDTE;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class ItemTemplateBase
    {
        protected EnvDTE.DTE DTE { get; set; }
        protected Project Project { get; set; }
        protected ProjectItem ProjectItem { get; set; }
        protected string ItemName { get; set; }
        protected string FilePath { get; set; }
        protected bool IsFilePathExist { get; set; } = false;
        protected string FullFilePath {get;set; }
    }
}
