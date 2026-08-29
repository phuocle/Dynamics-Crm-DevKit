using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit uploadreport' - uploads reports to a solution.
    /// Syntax: devkit uploadreport --conn "..." --json "..." --profile "..."
    /// Fast deploy: devkit uploadreport --conn "..." --file "..." --report "..."
    /// </summary>
    public class UploadReportCommand : DevKitCommand<UploadReportCommandArgs>
    {
        protected override async Task RunTaskAsync(UploadReportCommandArgs settings)
        {
            JsonUploadReport profile = null;
            if (System.IO.File.Exists(settings.JsonFile))
            {
                var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));
                if (json?.uploadreports == null && string.IsNullOrEmpty(settings.File))
                {
                    SpectreLog.ActionError("'uploadreports' section not found in json file");
                    return;
                }
                profile = json?.uploadreports?.FirstOrDefault(x => x.profile == settings.Profile);
            }
            if (profile == null)
            {
                if (string.IsNullOrEmpty(settings.File))
                {
                    SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'uploadreports' section");
                    return;
                }
                profile = new JsonUploadReport(); // dummy profile for single file fast deploy
            }
            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = "uploadreports",
                ServiceClient = settings.ServiceClient,
                File = settings.File,
                Report = settings.Report,
                Language = settings.Language
            };
            var task = new TaskUploadReport(args, profile);
            await task.RunAsync();
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
