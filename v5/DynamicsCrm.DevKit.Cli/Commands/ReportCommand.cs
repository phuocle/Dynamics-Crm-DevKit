using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit report' — report operations selected by --type:
    /// dataset (manage FetchXML datasets in a .rdl — port of the VSIX
    /// "Manage Datasets..." dialog), upload (moved from 'devkit uploadreport'),
    /// download (moved from 'devkit downloadreport').
    /// Each type owns a strict option set — an option outside the set fails
    /// loudly because Spectre otherwise drops unknown options silently.
    /// </summary>
    public class ReportCommand : DevKitCommand<ReportCommandArgs>
    {
        private static readonly Dictionary<string, string[]> AllowedOptions = new(StringComparer.OrdinalIgnoreCase)
        {
            ["dataset"] = new[] { "file", "action", "name", "new-name", "fetchxml", "fetchxml-file", "prefilter", "force" },
            ["upload"] = new[] { "file", "report", "reportid", "language" },
            ["download"] = Array.Empty<string>(),
        };

        protected override bool IsProfileRequired(ReportCommandArgs settings)
        {
            return RequiresJsonProfile(settings);
        }

        protected override bool IsJsonRequired(ReportCommandArgs settings)
        {
            return RequiresJsonProfile(settings);
        }

        private static bool RequiresJsonProfile(ReportCommandArgs settings)
        {
            var type = NormalizeType(settings?.Type, validate: false);
            if (type == "dataset") return false;
            if (type == "upload") return string.IsNullOrEmpty(settings.File);
            if (type == "download") return true;
            return false; // unknown/missing type is reported by the pre-connection check below
        }

        /// <summary>
        /// Type and option-set validation runs BEFORE the connection attempt
        /// (base.IsValidAsync) so a bad --type fails fast with exit 1.
        /// </summary>
        protected override async Task<bool> IsValidAsync(ReportCommandArgs settings)
        {
            var type = NormalizeType(settings.Type, validate: true);
            ValidateOptionsForType(settings, type);
            ValidateReportIdRules(settings, type);
            return await base.IsValidAsync(settings);
        }

        /// <summary>
        /// --reportid fast-deploy rules (checked directly by tests — running
        /// them through Execute would attempt a real connection via .env).
        /// </summary>
        internal static void ValidateReportIdRules(ReportCommandArgs settings, string type)
        {
            if (string.IsNullOrEmpty(settings.ReportId)) return;
            if (type == "download")
                throw new DevKitValidationException("--reportid: not valid for --type download (valid: --json, --profile).");
            if (!Guid.TryParse(settings.ReportId.Trim(), out _))
                throw new DevKitValidationException($"--reportid '{settings.ReportId}': not a valid GUID.");
            if (string.IsNullOrEmpty(settings.File))
                throw new DevKitValidationException("--reportid: requires --file (deploy that single file straight to the report id).");
            if (!string.IsNullOrEmpty(settings.Report))
                throw new DevKitValidationException("use only one: pass either --report or --reportid, not both.");
        }

        protected override async Task RunTaskAsync(ReportCommandArgs settings)
        {
            await RunReportAsync(settings);
        }

        /// <summary>
        /// Shared dispatch — also called by the deprecated 'devkit uploadreport'
        /// and 'devkit downloadreport' redirect shims.
        /// </summary>
        internal async Task RunReportAsync(ReportCommandArgs settings)
        {
            var type = NormalizeType(settings.Type, validate: true);
            ValidateOptionsForType(settings, type);
            switch (type)
            {
                case "dataset": await RunDatasetAsync(settings); break;
                case "upload": await RunUploadAsync(settings); break;
                case "download": await RunDownloadAsync(settings); break;
            }
        }

        protected override List<string[]> BuildArgRows(ReportCommandArgs settings)
        {
            var rows = new List<string[]>();
            var type = NormalizeType(settings?.Type, validate: false);
            if (type != null) rows.Add(new[] { "           --type", type });
            if (!string.IsNullOrEmpty(settings?.File)) rows.Add(new[] { "           --file", settings.File });
            if (!string.IsNullOrEmpty(settings?.Action)) rows.Add(new[] { "           --action", settings.Action });
            if (!string.IsNullOrEmpty(settings?.Name)) rows.Add(new[] { "           --name", settings.Name });
            if (!string.IsNullOrEmpty(settings?.NewName)) rows.Add(new[] { "           --new-name", settings.NewName });
            if (!string.IsNullOrEmpty(settings?.FetchXml)) rows.Add(new[] { "           --fetchxml", $"(inline, {settings.FetchXml.Length} chars)" });
            if (!string.IsNullOrEmpty(settings?.FetchXmlFile)) rows.Add(new[] { "           --fetchxml-file", settings.FetchXmlFile });
            if (!string.IsNullOrEmpty(settings?.PreFilter)) rows.Add(new[] { "           --prefilter", settings.PreFilter });
            if (settings?.Force == true) rows.Add(new[] { "           --force", "yes" });
            if (!string.IsNullOrEmpty(settings?.Report)) rows.Add(new[] { "           --report", settings.Report });
            if (!string.IsNullOrEmpty(settings?.ReportId)) rows.Add(new[] { "           --reportid", settings.ReportId });
            if (!string.IsNullOrEmpty(settings?.Language)) rows.Add(new[] { "           --language", settings.Language });
            return rows;
        }

        internal static string NormalizeType(string type, bool validate)
        {
            var value = (type ?? string.Empty).Trim().ToLowerInvariant();
            if (string.IsNullOrEmpty(value))
            {
                if (validate)
                    throw new DevKitValidationException("--type: required — dataset, upload, download.");
                return null;
            }
            if (!AllowedOptions.ContainsKey(value))
            {
                if (validate)
                    throw new DevKitValidationException($"--type '{type}': unknown — valid: dataset, upload, download.");
                return null;
            }
            return value;
        }

        internal static void ValidateOptionsForType(ReportCommandArgs settings, string type)
        {
            if (!AllowedOptions.TryGetValue(type, out var allowed)) return;
            var provided = new List<KeyValuePair<string, bool>>
            {
                new("file", !string.IsNullOrEmpty(settings.File)),
                new("action", !string.IsNullOrEmpty(settings.Action)),
                new("name", !string.IsNullOrEmpty(settings.Name)),
                new("new-name", !string.IsNullOrEmpty(settings.NewName)),
                new("fetchxml", !string.IsNullOrEmpty(settings.FetchXml)),
                new("fetchxml-file", !string.IsNullOrEmpty(settings.FetchXmlFile)),
                new("prefilter", !string.IsNullOrEmpty(settings.PreFilter)),
                new("force", settings.Force),
                new("report", !string.IsNullOrEmpty(settings.Report)),
                new("language", !string.IsNullOrEmpty(settings.Language)),
            };
            foreach (var (option, isProvided) in provided)
            {
                if (isProvided && !allowed.Contains(option))
                    throw new DevKitValidationException(
                        $"--{option}: not valid for --type {type} (valid: {string.Join(", ", allowed.Select(a => "--" + a))}).");
            }
        }

        private async Task RunDatasetAsync(ReportCommandArgs settings)
        {
            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = "reportdatasets",
                ServiceClient = settings.ServiceClient,
                File = settings.File
            };
            var request = new ReportDatasetRequest
            {
                Action = settings.Action,
                Name = settings.Name,
                NewName = settings.NewName,
                FetchXml = settings.FetchXml,
                FetchXmlFile = settings.FetchXmlFile,
                PreFilter = settings.PreFilter,
                Force = settings.Force
            };
            var task = new TaskReportDataset(args, request);
            await task.RunAsync();
        }

        private async Task RunUploadAsync(ReportCommandArgs settings)
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
                ReportId = Guid.TryParse(settings.ReportId?.Trim(), out var reportId) ? reportId : null,
                Language = settings.Language
            };
            var task = new TaskUploadReport(args, profile);
            await task.RunAsync();
        }

        private async Task RunDownloadAsync(ReportCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.downloadreports == null)
            {
                SpectreLog.ActionError("'downloadreports' section not found in json file");
                return;
            }

            var profile = json.downloadreports.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "downloadreports",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskDownloadReport(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'downloadreports' section");
            }
        }
    }
}
