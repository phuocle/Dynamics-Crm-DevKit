using EnvDTE;
using EnvDTE80;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.ComponentModel.Design;
using System.IO;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit._2019
{
    internal sealed class UploadReportCommand
    {
        private readonly AsyncPackage package;
        private static CrmServiceClient cachedServiceClient;
        private static string cachedUrl;

        private UploadReportCommand(AsyncPackage package, OleMenuCommandService commandService)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            this.package = package;

            var commandId = new CommandID(PackageGuids.CommandSet, PackageIds.UploadReportCommand);
            var command = new OleMenuCommand(Execute, commandId);
            command.BeforeQueryStatus += BeforeQueryStatus;
            commandService.AddCommand(command);
        }

        public static async Task InitializeAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync(package.DisposalToken);

            var commandService = await package.GetServiceAsync(typeof(IMenuCommandService)) as OleMenuCommandService;
            if (commandService != null)
            {
                _ = new UploadReportCommand(package, commandService);
            }
        }

        private void BeforeQueryStatus(object sender, EventArgs e)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            var command = (OleMenuCommand)sender;
            var isReport = IsReportFile(GetSelectedFilePath());
            command.Visible = isReport;
            command.Enabled = isReport;
        }

        private void Execute(object sender, EventArgs e)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            if (TryUseCachedConnection())
            {
                ShowMessage($"Using cached connection: {cachedUrl}");
                return;
            }

            var loginForm = new FormLogin();
            loginForm.ConnectionToCrmCompleted += LoginForm_ConnectionToCrmCompleted;
            loginForm.ShowDialog();

            var crmServiceClient = loginForm.CrmConnectionMgr?.CrmSvc;
            if (crmServiceClient != null && crmServiceClient.IsReady)
            {
                cachedServiceClient = crmServiceClient;
                cachedUrl = crmServiceClient.CrmConnectOrgUriActual?.ToString() ?? "Connected";
                ShowMessage($"Connected: {cachedUrl}");
                return;
            }

            ShowMessage("Connection cancelled or failed.");
        }

        private static bool TryUseCachedConnection()
        {
            return cachedServiceClient != null && cachedServiceClient.IsReady;
        }

        private static void LoginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        private void ShowMessage(string message)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            VsShellUtilities.ShowMessageBox(
                package,
                message,
                "Upload Report",
                OLEMSGICON.OLEMSGICON_INFO,
                OLEMSGBUTTON.OLEMSGBUTTON_OK,
                OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
        }

        private static bool IsReportFile(string filePath)
        {
            return string.Equals(Path.GetExtension(filePath), ".rdl", StringComparison.OrdinalIgnoreCase);
        }

        private static string GetSelectedFilePath()
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            var dte = Package.GetGlobalService(typeof(SDTE)) as DTE2;
            if (dte == null) return null;

            try
            {
                if (dte.SelectedItems != null && dte.SelectedItems.Count == 1)
                {
                    var projectItem = dte.SelectedItems.Item(1)?.ProjectItem;
                    if (projectItem != null && projectItem.FileCount > 0)
                    {
                        var fileName = GetProjectItemFileName(projectItem);
                        if (!string.IsNullOrEmpty(fileName)) return fileName;
                    }
                }
            }
            catch
            {
                // Non-file Solution Explorer nodes can throw when FileNames is accessed.
            }

            try
            {
                return dte.ActiveDocument?.FullName;
            }
            catch
            {
                return null;
            }
        }

        private static string GetProjectItemFileName(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();

            try
            {
                return projectItem.FileNames[0];
            }
            catch
            {
            }

            try
            {
                return projectItem.FileNames[1];
            }
            catch
            {
                return null;
            }
        }
    }
}
