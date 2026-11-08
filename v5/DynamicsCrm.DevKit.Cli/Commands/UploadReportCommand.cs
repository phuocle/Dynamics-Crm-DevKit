using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit uploadreport' — DEPRECATED, auto-redirects to
    /// 'devkit report --type upload' (pattern ProxyTypeCommand). Kept so the
    /// generated upload.reports.bat/.sh scripts in existing user projects
    /// keep working; behavior is unchanged apart from the notice.
    /// </summary>
    public class UploadReportCommand : DevKitCommand<UploadReportCommandArgs>
    {
        protected override async Task RunTaskAsync(UploadReportCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit uploadreport' is deprecated and now auto-redirects to 'devkit report --type upload'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit report --type upload' directly.");
            SpectreLog.ActionWithLevel0("[INFO]", "In DynamicsCrm.DevKit.Cli.json, the 'uploadreports' section is unchanged.");
            SpectreLog.WriteLine();

            await new ReportCommand().RunReportAsync(new ReportCommandArgs
            {
                Type = "upload",
                File = settings.File,
                Report = settings.Report,
                Language = settings.Language,
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
        protected override bool IsProfileRequired(UploadReportCommandArgs settings)
        {
            return string.IsNullOrEmpty(settings.File);
        }
        protected override bool IsJsonRequired(UploadReportCommandArgs settings)
        {
            return string.IsNullOrEmpty(settings.File);
        }
        protected override List<string[]> BuildArgRows(UploadReportCommandArgs settings)
        {
            var rows = new List<string[]>();
            if (!string.IsNullOrEmpty(settings.File))
            {
                rows.Add(new[] { "           --file", settings.File });
            }
            if (!string.IsNullOrEmpty(settings.Report))
            {
                rows.Add(new[] { "           --report", settings.Report });
            }
            if (!string.IsNullOrEmpty(settings.Language))
            {
                rows.Add(new[] { "           --language", settings.Language });
            }
            return rows;
        }
    }
}
