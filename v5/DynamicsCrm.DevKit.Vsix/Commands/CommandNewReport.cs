using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandNewReport)]
    public sealed class CommandNewReport : BaseCommand<CommandNewReport>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VsixHelper.ExecuteCommandAsync("File.Save");
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            try
            {
                var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                if (!string.Equals(Path.GetExtension(fullFileName), ".rdl", StringComparison.OrdinalIgnoreCase)) return;
                var serviceClient = await CacheHelper.GetServiceClientAsync();
                if (serviceClient == null)
                {
                    await VS.MessageBox.ShowErrorAsync("Connection cancelled by user");
                    return;
                }
                var url = serviceClient.ConnectedUrl();
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Connected");
                var solutions = await new DeploymentService(serviceClient).GetSolutionsAsync();
                var form = new FormReportMapping(serviceClient, fullFileName, solutions);
                if (form.ShowModal() != true) return;

                var report = form.SelectedReport;
                var duplicate = await serviceClient.RetrieveMultipleAsync(new QueryExpression("report")
                {
                    ColumnSet = new ColumnSet(false),
                    Criteria = new FilterExpression(LogicalOperator.And)
                    {
                        Conditions =
                        {
                            new ConditionExpression("name", ConditionOperator.Equal, report.ReportName),
                            new ConditionExpression("languagecode", ConditionOperator.Equal, report.LanguageCode)
                        }
                    },
                    TopCount = 1
                });
                if (duplicate.Entities.Count > 0)
                {
                    await VS.MessageBox.ShowErrorAsync($"Report already exists: {report.ReportName} ({report.LanguageCode})");
                    return;
                }

                await TypeScriptBuildHelper.ShowStatusAsync(url, "Deploying new report ...");
                var created = new Entity("report")
                {
                    ["name"] = report.ReportName,
                    ["filename"] = report.ReportFileName,
                    ["bodytext"] = await FileHelper.ReadAllTextAsync(fullFileName),
                    ["languagecode"] = report.LanguageCode,
                    ["reporttypecode"] = new OptionSetValue(1),
                    ["ispersonal"] = false
                };
                var reportId = await serviceClient.CreateAsync(created);
                await serviceClient.ExecuteAsync(new AddSolutionComponentRequest
                {
                    AddRequiredComponents = true,
                    ComponentType = 31,
                    ComponentId = reportId,
                    SolutionUniqueName = form.SelectedSolutionUniqueName
                });

                report.ReportId = reportId;
                var configFileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                var config = ReportConfigHelper.ReadConfig(configFileName);
                await ReportConfigHelper.SaveReportAsync(configFileName, config, report);
                await TypeScriptBuildHelper.ShowStatusAsync(url, "New report deployed successfully.");
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"Deploy new report failed: {ex.Message}");
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
    }
}
