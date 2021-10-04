using DynamicsCrm.DevKit.Commands;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using System;
using System.ComponentModel.Design;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit
{
    public partial class DevKitPackage
    {
        private static IMenuCommandService MenuService;       

        private async Task CommandsInitializeAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            MenuService = await GetServiceAsync(typeof(IMenuCommandService)) as OleMenuCommandService ?? throw new ArgumentNullException(nameof(MenuService));

            var commandIdDeployWebResource = new CommandID(DeployWebResource.CommandSetDeployWebResource, DeployWebResource.CommandDeployWebResourceId);
            var oleMenuCommandDeployWebResource = new OleMenuCommand((s, e) => OleMenuCommandDeployWebResource_Click(this), commandIdDeployWebResource);
            oleMenuCommandDeployWebResource.BeforeQueryStatus += OleMenuCommandDeployWebResource_BeforeQueryStatus;
            MenuService.AddCommand(oleMenuCommandDeployWebResource);

            //var commandIdAddCrmPluginRegistration = new CommandID(AddCrmPluginRegistration.CommandSetAddCrmPluginRegistration, AddCrmPluginRegistration.CommandAddCrmPluginRegistrationId);
            //var oleMenuCommandAddCrmPluginRegistration = new OleMenuCommand((s, e) => oleMenuCommandAddCrmPluginRegistration_Click(package), commandIdAddCrmPluginRegistration);
            //oleMenuCommandAddCrmPluginRegistration.BeforeQueryStatus += OleMenuCommandAddCrmPluginRegistration_BeforeQueryStatus;
            //MenuService.AddCommand(oleMenuCommandAddCrmPluginRegistration);

            //var commandIdDeployReport = new CommandID(DeployReport.CommandSetDeployReport, DeployReport.CommandDeployReportId);
            //var oleMenuCommandDeployReport = new OleMenuCommand((s, e) => oleMenuCommandDeployReport_Click(package), commandIdDeployReport);
            //oleMenuCommandDeployReport.BeforeQueryStatus += oleMenuCommandDeployReport_BeforeQueryStatus;
            //MenuService.AddCommand(oleMenuCommandDeployReport);

            //var commandIdDeployWebResource2 = new CommandID(DeployWebResource2.CommandSetDeployWebResource2, DeployWebResource2.CommandDeployWebResource2Id);
            //var oleMenuCommandDeployWebResource2 = new OleMenuCommand((s, e) => oleMenuCommandDeployWebResource2_Click(package), commandIdDeployWebResource2);
            //oleMenuCommandDeployWebResource2.BeforeQueryStatus += oleMenuCommandDeployWebResource2_BeforeQueryStatus;
            //MenuService.AddCommand(oleMenuCommandDeployWebResource2);

            //var commandIdDeployWebResource3 = new CommandID(DeployWebResource2.CommandSetDeployWebResource3, DeployWebResource2.CommandDeployWebResource3Id);
            //var oleMenuCommandDeployWebResource3 = new OleMenuCommand((s, e) => oleMenuCommandDeployWebResource3_Click(package), commandIdDeployWebResource3);
            //oleMenuCommandDeployWebResource3.BeforeQueryStatus += oleMenuCommandDeployWebResource3_BeforeQueryStatus;
            //MenuService.AddCommand(oleMenuCommandDeployWebResource3);
        }

        //private static void OleMenuCommandAddCrmPluginRegistration_BeforeQueryStatus(object sender, EventArgs e)
        //{
        //    AddCrmPluginRegistration.BeforeQueryStatus(sender, dte);
        //}

        //private static void oleMenuCommandAddCrmPluginRegistration_Click(AsyncPackage package)
        //{
        //    AddCrmPluginRegistration.Click(dte);
        //}

        private static void OleMenuCommandDeployWebResource_BeforeQueryStatus(object sender, EventArgs e)
        {
            DeployWebResource.BeforeQueryStatus(sender);
        }

        private static void OleMenuCommandDeployWebResource_Click(AsyncPackage package)
        {
            DeployWebResource.Click();
        }

        //private static void oleMenuCommandDeployReport_BeforeQueryStatus(object sender, EventArgs e)
        //{
        //    DeployReport.BeforeQueryStatus(sender, dte);
        //}

        //private static void oleMenuCommandDeployReport_Click(AsyncPackage package)
        //{
        //    DeployReport.Click(dte);
        //}

        //private static void oleMenuCommandDeployWebResource2_BeforeQueryStatus(object sender, EventArgs e)
        //{
        //    DeployWebResource2.BeforeQueryStatus(sender, dte);
        //}

        //private static void oleMenuCommandDeployWebResource2_Click(AsyncPackage package)
        //{
        //    DeployWebResource2.Click(dte);
        //}

        //private static void oleMenuCommandDeployWebResource3_BeforeQueryStatus(object sender, EventArgs e)
        //{
        //    DeployWebResource2.BeforeQueryStatus(sender, dte);
        //}

        //private static void oleMenuCommandDeployWebResource3_Click(AsyncPackage package)
        //{
        //    DeployWebResource2.ClickNew(dte);
        //}
    }
}
