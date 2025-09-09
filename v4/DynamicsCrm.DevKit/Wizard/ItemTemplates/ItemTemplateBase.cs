using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Community.VisualStudio.Toolkit;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class ItemTemplateBase
    {
        protected string ItemName { get; set; }
        protected string FilePath { get; set; }
        protected bool IsFilePathExist { get; set; } = false;
        protected string FullFilePath {get;set; }

    }
}
