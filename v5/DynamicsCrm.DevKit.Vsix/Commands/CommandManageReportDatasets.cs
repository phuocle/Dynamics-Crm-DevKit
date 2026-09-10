using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using Microsoft.VisualStudio.Shell;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandManageReportDatasets)]
    public sealed class CommandManageReportDatasets : BaseCommand<CommandManageReportDatasets>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            try
            {
                await VsixHelper.SaveSelectedItemAsync();
                if (!await HasSingleSelectionAsync()) return;
                var file = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                if (!string.Equals(Path.GetExtension(file), ".rdl", StringComparison.OrdinalIgnoreCase) || !File.Exists(file))
                    return;
                var form = new FormReportDatasets(file, () => CacheHelper.GetServiceClientAsync());
                form.ShowModal();
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync("Manage report datasets failed: " + ex.Message);
            }
        }
        protected override void BeforeQueryStatus(EventArgs e)
        {
            Command.Visible = false;
            Command.Enabled = false;
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                try
                {
                    var extension = await VsixHelper.SelectedItem.GetExtensionAsync();
                    var isReport = await HasSingleSelectionAsync() && string.Equals(extension, ".rdl", StringComparison.OrdinalIgnoreCase);
                    Command.Visible = isReport;
                    Command.Enabled = isReport;
                }
                catch
                {
                    Command.Visible = false;
                    Command.Enabled = false;
                }
            });
        }

        private static async Task<bool> HasSingleSelectionAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var dte = await VS.GetServiceAsync<EnvDTE.DTE, EnvDTE.DTE>();
            return dte?.SelectedItems?.Count == 1;
        }
    }
}
