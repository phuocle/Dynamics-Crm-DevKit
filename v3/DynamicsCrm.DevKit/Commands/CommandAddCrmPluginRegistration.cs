using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandDeployWebResource2)]
    public class CommandAddCrmPluginRegistration : BaseCommand<CommandAddCrmPluginRegistration>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VS.MessageBox.ShowWarningAsync("AAA");
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = true;
        }
    }
}