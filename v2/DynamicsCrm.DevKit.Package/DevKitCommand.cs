using System;
using System.ComponentModel.Design;
using DynamicsCrm.DevKit.Package.MenuItem;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit.Package
{
    internal sealed class DevKitCommand
    {
        private static IMenuCommandService MenuService;
        private static DTE dte;

        public static async Task InitializeAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            MenuService = await package.GetServiceAsync((typeof(IMenuCommandService))) as OleMenuCommandService ?? throw new ArgumentNullException(nameof(MenuService));
            dte = await package.GetServiceAsync(typeof(DTE)) as DTE ?? throw new ArgumentNullException(nameof(dte));

            var commandIdDeployWebResource = new CommandID(DeployWebResource2.CommandSetDeployWebResource, DeployWebResource2.CommandDeployWebResourceId);
            var oleMenuCommandDeployWebResource = new OleMenuCommand((s, e) => oleMenuCommandDeployWebResource_Click(package), commandIdDeployWebResource);
            oleMenuCommandDeployWebResource.BeforeQueryStatus += oleMenuCommandDeployWebResource_BeforeQueryStatus;
            MenuService.AddCommand(oleMenuCommandDeployWebResource);

            var commandIdAddCrmPluginRegistration = new CommandID(AddCrmPluginRegistration.CommandSetAddCrmPluginRegistration, AddCrmPluginRegistration.CommandAddCrmPluginRegistrationId);
            var oleMenuCommandAddCrmPluginRegistration = new OleMenuCommand((s, e) => oleMenuCommandAddCrmPluginRegistration_Click(package), commandIdAddCrmPluginRegistration);
            oleMenuCommandAddCrmPluginRegistration.BeforeQueryStatus += OleMenuCommandAddCrmPluginRegistration_BeforeQueryStatus;
            MenuService.AddCommand(oleMenuCommandAddCrmPluginRegistration);

            var commandIdDeployReport = new CommandID(DeployReport.CommandSetDeployReport, DeployReport.CommandDeployReportId);
            var oleMenuCommandDeployReport = new OleMenuCommand((s, e) => oleMenuCommandDeployReport_Click(package), commandIdDeployReport);
            oleMenuCommandDeployReport.BeforeQueryStatus += oleMenuCommandDeployReport_BeforeQueryStatus;
            MenuService.AddCommand(oleMenuCommandDeployReport);

            var commandIdDeployWebResource2 = new CommandID(DeployWebResource2.CommandSetDeployWebResource2, DeployWebResource2.CommandDeployWebResource2Id);
            var oleMenuCommandDeployWebResource2 = new OleMenuCommand((s, e) => oleMenuCommandDeployWebResource2_Click(package), commandIdDeployWebResource2);
            oleMenuCommandDeployWebResource2.BeforeQueryStatus += oleMenuCommandDeployWebResource2_BeforeQueryStatus;
            MenuService.AddCommand(oleMenuCommandDeployWebResource2);
        }

        private static void OleMenuCommandAddCrmPluginRegistration_BeforeQueryStatus(object sender, EventArgs e)
        {
            AddCrmPluginRegistration.BeforeQueryStatus(sender, dte);
        }

        private static void oleMenuCommandAddCrmPluginRegistration_Click(AsyncPackage package)
        {
            AddCrmPluginRegistration.Click(dte);
        }

        private static void oleMenuCommandDeployWebResource_BeforeQueryStatus(object sender, EventArgs e)
        {
            DeployWebResource2.BeforeQueryStatus(sender, dte);
        }

        private static void oleMenuCommandDeployWebResource_Click(AsyncPackage package)
        {
            DeployWebResource2.Click(dte);
        }

        private static void oleMenuCommandDeployReport_BeforeQueryStatus(object sender, EventArgs e)
        {
            DeployReport.BeforeQueryStatus(sender, dte);
        }

        private static void oleMenuCommandDeployReport_Click(AsyncPackage package)
        {
            DeployReport.Click(dte);
        }

        private static void oleMenuCommandDeployWebResource2_BeforeQueryStatus(object sender, EventArgs e)
        {
            DeployWebResource2.BeforeQueryStatus(sender, dte);
        }

        private static void oleMenuCommandDeployWebResource2_Click(AsyncPackage package)
        {
            DeployWebResource2.Click(dte);
        }
    }
}
