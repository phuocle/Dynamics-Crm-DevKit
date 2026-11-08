using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit downloadreport' — DEPRECATED, auto-redirects to
    /// 'devkit report --type download' (pattern ProxyTypeCommand). Kept so the
    /// generated download.reports.bat/.sh scripts in existing user projects
    /// keep working; behavior is unchanged apart from the notice.
    /// </summary>
    public class DownloadReportCommand : DevKitCommand<DownloadReportCommandArgs>
    {
        protected override async Task RunTaskAsync(DownloadReportCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit downloadreport' is deprecated and now auto-redirects to 'devkit report --type download'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit report --type download' directly.");
            SpectreLog.ActionWithLevel0("[INFO]", "In DynamicsCrm.DevKit.Cli.json, the 'downloadreports' section is unchanged.");
            SpectreLog.WriteLine();

            await new ReportCommand().RunReportAsync(new ReportCommandArgs
            {
                Type = "download",
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                AuthType = settings.AuthType,
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = settings.ClientSecret,
                PacProfile = settings.PacProfile,
                Username = settings.Username,
                Password = settings.Password,
                Domain = settings.Domain,
                SdkLogin = settings.SdkLogin,
                ServiceClient = settings.ServiceClient
            });
        }
    }
}
