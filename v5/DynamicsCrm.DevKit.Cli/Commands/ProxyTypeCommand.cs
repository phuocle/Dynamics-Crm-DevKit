using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit proxytype' - DEPRECATED, auto-redirects to ModelBuilder.
    /// Reads 'proxytypes' section from JSON config and runs TaskModelBuilder instead of the removed TaskProxyType.
    /// </summary>
    public class ProxyTypeCommand : DevKitCommand<ProxyTypeCommandArgs>
    {
        protected override List<string[]> BuildArgRows(ProxyTypeCommandArgs settings)
        {
            return new List<string[]>();
        }

        protected override async Task RunTaskAsync(ProxyTypeCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit proxytype' is deprecated and now auto-redirects to 'devkit modelbuilder'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit modelbuilder' directly.");
            SpectreLog.ActionWithLevel0("[INFO]", "In DynamicsCrm.DevKit.Cli.json, you can rename 'proxytypes' to 'modelbuilders'.");
            SpectreLog.WriteLine();

            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.proxytypes == null)
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, "'proxytypes' section not found in json file");
                return;
            }

            var proxyTypeProfile = json.proxytypes.FirstOrDefault(x => x.profile == settings.Profile);
            if (proxyTypeProfile == null)
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, $"Profile '{settings.Profile}' not found in 'proxytypes' section");
                return;
            }

            var modelBuilderProfile = new JsonModelBuilder
            {
                profile = proxyTypeProfile.profile,
                @namespace = proxyTypeProfile.@namespace,
                output = proxyTypeProfile.output,
                entities = proxyTypeProfile.entities
            };

            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = "modelbuilders",
                ServiceClient = settings.ServiceClient,
                AuthType = settings.AuthType,
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = settings.ClientSecret,
                Username = settings.Username,
                Password = settings.Password,
                Domain = settings.Domain,
                PacProfile = settings.PacProfile
            };

            SpectreLog.ActionWithLevel0("[REDIRECT]", "Running ModelBuilder with proxytypes profile...");
            SpectreLog.WriteLine();

            var modelBuilder = new TaskModelBuilder(args, modelBuilderProfile);
            await modelBuilder.RunAsync();
        }
    }
}
