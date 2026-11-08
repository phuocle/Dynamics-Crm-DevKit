using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit datasource' — DEPRECATED, auto-redirects to
    /// 'devkit server --type datasources' (pattern ProxyTypeCommand). Kept so
    /// the generated deploy.datasource.bat/.sh scripts in existing user
    /// projects keep working; behavior is unchanged apart from the notice.
    /// </summary>
    public class DataSourceCommand : DevKitCommand<DataSourceCommandArgs>
    {
        protected override async Task RunTaskAsync(DataSourceCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit datasource' is deprecated and now auto-redirects to 'devkit server --type datasources'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit server --type datasources' directly ('devkit server --type datasource' is accepted as a shorthand).");
            SpectreLog.ActionWithLevel0("[INFO]", "In DynamicsCrm.DevKit.Cli.json, the 'datasources' section is unchanged.");
            SpectreLog.WriteLine();

            await new ServerCommand().RunServerAsync(new ServerCommandArgs
            {
                ServerType = "datasources",
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
