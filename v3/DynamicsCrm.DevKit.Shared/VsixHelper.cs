using EnvDTE;
using Microsoft.VisualStudio.Shell;
using System.IO;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {
        public static DTE DTE { get; set; }

        public static string GetSelectedItemExtension()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (DTE?.SelectedItems?.Count != 1) return null;
            var selectedItem = DTE.SelectedItems.Item(1);
            if (selectedItem.ProjectItem == null) return null;
            var fileName = selectedItem.ProjectItem.FileNames[0];
            return Path.GetExtension(fileName);
        }
    }
}
