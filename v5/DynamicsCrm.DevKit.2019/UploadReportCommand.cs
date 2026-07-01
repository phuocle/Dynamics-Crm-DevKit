using EnvDTE;
using EnvDTE80;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.IO;
using Task = System.Threading.Tasks.Task;

namespace DynamicsCrm.DevKit2019
{
    internal sealed class UploadReportCommand
    {
        private readonly AsyncPackage package;
        private static CrmServiceClient cachedServiceClient;
        private static string cachedUrl;
        private static readonly Dictionary<string, DeployReport> cachedReports = new Dictionary<string, DeployReport>(StringComparer.OrdinalIgnoreCase);

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

            var fullFileName = GetSelectedFilePath();
            if (!IsReportFile(fullFileName)) return;

            var serviceClient = GetServiceClient();
            if (serviceClient == null)
            {
                ShowMessage("Connection cancelled or failed.");
                return;
            }

            var dte = Package.GetGlobalService(typeof(SDTE)) as DTE2;
            var configFileName = ReportConfigHelper.GetConfigFileName(dte);
            var config = ReportConfigHelper.ReadConfig(configFileName);
            var report = GetCachedReport(fullFileName);
            if (report == null)
            {
                report = ReportConfigHelper.GetReport(config, fullFileName);
                SetStatusBar(dte, "Loading report mapping ...");

                var form = new FormReportMapping(serviceClient, fullFileName, report);
                if (form.ShowDialog() != true) return;

                report = form.SelectedReport;
                ReportConfigHelper.SaveReport(configFileName, config, report);
                CacheReport(report);
                SetStatusBar(dte, "Report mapping saved.");
            }
            else
            {
                SetStatusBar(dte, "Using cached report mapping ...");
            }

            try
            {
                SetStatusBar(dte, "Deploying report ...");
                var deployMessage = DeployReport(serviceClient, report, fullFileName);
                SetStatusBar(dte, deployMessage);
            }
            catch (Exception ex)
            {
                SetStatusBar(dte, "Deploy report failed !!!");
                ShowMessage($"Deploy report failed: {ex.Message}");
            }
        }

        private static CrmServiceClient GetServiceClient()
        {
            if (cachedServiceClient != null && cachedServiceClient.IsReady)
            {
                return cachedServiceClient;
            }

            var loginForm = new FormLogin();
            loginForm.ConnectionToCrmCompleted += LoginForm_ConnectionToCrmCompleted;
            loginForm.ShowDialog();

            var crmServiceClient = loginForm.CrmConnectionMgr?.CrmSvc;
            if (crmServiceClient != null && crmServiceClient.IsReady)
            {
                cachedServiceClient = crmServiceClient;
                cachedUrl = crmServiceClient.CrmConnectOrgUriActual?.ToString() ?? "Connected";
                return cachedServiceClient;
            }

            return null;
        }

        private static DeployReport GetCachedReport(string fullFileName)
        {
            return cachedReports.TryGetValue(fullFileName, out var report) ? report : null;
        }

        private static void CacheReport(DeployReport report)
        {
            if (report == null || string.IsNullOrWhiteSpace(report.File)) return;
            cachedReports[report.File] = report;
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

        private static string DeployReport(CrmServiceClient serviceClient, DeployReport report, string fullFileName)
        {
            var localBodyText = File.ReadAllText(fullFileName);
            var current = serviceClient.Retrieve("report", report.ReportId, new ColumnSet("bodytext"));
            var currentBodyText = current.GetAttributeValue<string>("bodytext") ?? string.Empty;
            if (string.Equals(currentBodyText, localBodyText, StringComparison.Ordinal))
            {
                return "Report is already up to date.";
            }

            var update = new Entity("report", report.ReportId);
            update["bodytext"] = localBodyText;
            serviceClient.Update(update);
            return "Deployed report !!!";
        }

        private static void SetStatusBar(DTE2 dte, string message)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (dte?.StatusBar != null)
            {
                dte.StatusBar.Text = string.IsNullOrWhiteSpace(cachedUrl) ? message : $"[{cachedUrl}] {message}";
            }
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
