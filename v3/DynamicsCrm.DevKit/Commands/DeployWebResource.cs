using EnvDTE;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Commands
{
    public class DeployWebResource
    {
        public const int CommandDeployWebResourceId = 0x0100;
        public static readonly Guid CommandSetDeployWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        public const int CommandDeployWebResource2Id = 0x0400;
        public static readonly Guid CommandSetDeployWebResource2 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");

        public const int CommandDeployWebResource3Id = 0x0500;
        public static readonly Guid CommandSetDeployWebResource3 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        internal static void BeforeQueryStatus(object sender, DTE dte)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            try
            {
                if (dte == null || dte.SelectedItems == null || dte.SelectedItems.Count != 1) return;
                var selectedItem = dte.SelectedItems.Item(1);
                if (selectedItem.ProjectItem == null) return;
                var fileName = selectedItem.ProjectItem.FileNames[0];
                var extension = Path.GetExtension(fileName);
                var allowExtions = new List<string> { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };
                if (!allowExtions.Contains(extension)) return;
                menuCommand.Visible = true;
            }
            catch { }
        }

        internal static void Click(DTE dte)
        {
            throw new NotImplementedException();
        }
    }
}
