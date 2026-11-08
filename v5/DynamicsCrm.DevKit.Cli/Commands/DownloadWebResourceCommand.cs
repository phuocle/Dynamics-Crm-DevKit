using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit downloadwebresource' — DEPRECATED, auto-redirects
    /// to 'devkit webresource --type download' (pattern ProxyTypeCommand).
    /// Kept so the generated download.webresources.bat/.sh scripts in
    /// existing user projects keep working; behavior is unchanged apart from
    /// the notice.
    /// </summary>
    public class DownloadWebResourceCommand : DevKitCommand<DownloadWebResourceCommandArgs>
    {
        protected override async Task RunTaskAsync(DownloadWebResourceCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit downloadwebresource' is deprecated and now auto-redirects to 'devkit webresource --type download'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit webresource --type download' directly.");
            SpectreLog.ActionWithLevel0("[INFO]", "In DynamicsCrm.DevKit.Cli.json, the 'downloadwebresources' section is unchanged.");
            SpectreLog.WriteLine();

            await new WebResourceCommand().RunWebResourceAsync(new WebResourceCommandArgs
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
