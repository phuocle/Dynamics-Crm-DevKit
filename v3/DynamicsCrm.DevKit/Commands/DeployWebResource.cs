using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.Shell;
using System;

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

        internal static void BeforeQueryStatus(object sender)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = Utility.IsWebResourceExtension(VsixHelper.GetSelectedItemExtension());
        }

        internal static void Click()
        {
            var xamlDialog = new FormProject();
            xamlDialog.ShowModal();
        }
    }
}
