using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandDeployWebResource)]
    public class DeployWebResource : BaseCommand<DeployWebResource>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            await VS.MessageBox.ShowErrorAsync("AAAA");
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var solutionItem = await VS.Solutions.GetActiveItemAsync();
                var allowExtensions = new List<string> { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };
                var fileInfo = new FileInfo(solutionItem.FullPath);
                this.Command.Visible = allowExtensions.Contains(fileInfo.Extension);
            });
        }
    }
}
