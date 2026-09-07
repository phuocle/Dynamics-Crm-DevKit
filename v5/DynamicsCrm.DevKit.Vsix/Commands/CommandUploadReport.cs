using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Concurrent;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandUploadReport)]
    public sealed class CommandUploadReport : BaseCommand<CommandUploadReport>
    {
        private static readonly ConcurrentDictionary<string, DeployReport> CachedReports =
            new(StringComparer.OrdinalIgnoreCase);

        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VsixHelper.ExecuteCommandAsync("File.Save");
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            try
            {
                var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                if (!IsReportFile(fullFileName)) return;
                var serviceClient = await CacheHelper.GetServiceClientAsync();
                if (serviceClient == null)
                {
                    await VS.MessageBox.ShowErrorAsync("Connection cancelled by user");
                    return;
                }
                var url = serviceClient.ConnectedUrl();
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Connected");
                var configFileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                var config = ReportConfigHelper.ReadConfig(configFileName);
                var report = CachedReports.TryGetValue(fullFileName, out var cachedReport)
                    ? cachedReport
                    : null;
                if (report == null)
                {
                    await TypeScriptBuildHelper.ShowStatusAsync(url, "Loading report mapping ...");
                    // Match web resource behavior: show the selector once per VS session,
                    // while using the solution config as the default selection.
                    var configuredReport = ReportConfigHelper.GetReport(config, fullFileName);
                    var form = new FormReportMapping(serviceClient, fullFileName, configuredReport);
                    if (form.ShowModal() != true) return;
                    report = form.SelectedReport;
                    await ReportConfigHelper.SaveReportAsync(configFileName, config, report);
                    CachedReports[fullFileName] = report;
                }
                if (report.IsManaged)
                {
                    await TypeScriptBuildHelper.ShowStatusAndErrorAsync(url, "Managed reports cannot be updated.");
                    return;
                }
                var localBodyText = await Task.Run(() => File.ReadAllText(fullFileName));
                var current = await serviceClient.RetrieveAsync("report", report.ReportId, new ColumnSet("bodytext"));
                var currentBodyText = current.GetAttributeValue<string>("bodytext") ?? string.Empty;
                if (string.Equals(currentBodyText, localBodyText, StringComparison.Ordinal))
                {
                    await TypeScriptBuildHelper.ShowStatusAsync(url, "Report is already up to date.");
                    return;
                }
                var update = new Entity("report", report.ReportId) { ["bodytext"] = localBodyText };
                await serviceClient.UpdateAsync(update);
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Report deployed successfully.");
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"Deploy report failed: {ex.Message}");
            }
            finally
            {
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
            }
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            // Reset synchronously so a previous .rdl selection cannot leak into
            // the next context-menu query before the async lookup completes.
            this.Command.Visible = false;
            this.Command.Enabled = false;
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var extension = await VsixHelper.SelectedItem.GetExtensionAsync();
                this.Command.Visible = string.Equals(extension, ".rdl", StringComparison.OrdinalIgnoreCase);
                this.Command.Enabled = this.Command.Visible;
            });
        }

        private static bool IsReportFile(string filePath) =>
            string.Equals(Path.GetExtension(filePath), ".rdl", StringComparison.OrdinalIgnoreCase);

    }
}
