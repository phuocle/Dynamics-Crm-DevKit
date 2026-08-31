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
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandUploadReport)]
    internal sealed class CommandUploadReport : BaseCommand<CommandUploadReport>
    {
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
                var report = ReportConfigHelper.GetReport(config, fullFileName);
                if (report == null)
                {
                    await TypeScriptBuildHelper.ShowStatusAsync(url, "Loading report mapping ...");
                    var form = new FormReportMapping(serviceClient, fullFileName, null);
                    if (form.ShowModal() != true) return;
                    report = form.SelectedReport;
                    await ReportConfigHelper.SaveReportAsync(configFileName, config, report);
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
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var extension = await VsixHelper.SelectedItem.GetExtensionAsync();
                Command.Visible = string.Equals(extension, ".rdl", StringComparison.OrdinalIgnoreCase);
                Command.Enabled = Command.Visible;
            });
        }

        private static bool IsReportFile(string filePath) =>
            string.Equals(Path.GetExtension(filePath), ".rdl", StringComparison.OrdinalIgnoreCase);
    }
}
