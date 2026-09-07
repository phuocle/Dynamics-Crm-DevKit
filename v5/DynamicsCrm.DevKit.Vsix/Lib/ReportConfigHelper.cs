using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Community.VisualStudio.Toolkit;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    internal static class ReportConfigHelper
    {
        public static ConfigJson ReadConfig(string fileName)
        {
            if (string.IsNullOrWhiteSpace(fileName) || !File.Exists(fileName)) return new ConfigJson();
            var config = JsonHelper.Deserialize<ConfigJson>(File.ReadAllText(fileName)) ?? new ConfigJson();
            config.Reports ??= [];
            return config;
        }

        public static DeployReport GetReport(ConfigJson config, string fullFileName) =>
            config?.Reports?.FirstOrDefault(x => string.Equals(x?.File, fullFileName, StringComparison.OrdinalIgnoreCase));

        public static async Task SaveReportAsync(string fileName, ConfigJson config, DeployReport report)
        {
            if (string.IsNullOrWhiteSpace(fileName) || report == null) return;
            config ??= new ConfigJson();
            config.Reports ??= [];
            var found = config.Reports.FirstOrDefault(x => string.Equals(x?.File, report.File, StringComparison.OrdinalIgnoreCase));
            if (found == null)
                config.Reports.Add(report);
            else
            {
                found.ReportId = report.ReportId;
                found.ReportName = report.ReportName;
                found.ReportFileName = report.ReportFileName;
                found.LanguageCode = report.LanguageCode;
                found.Language = report.Language;
                found.IsManaged = report.IsManaged;
            }
            config.Reports = [.. config.Reports.Where(x => x != null).OrderBy(x => x.File)];
            var json = JsonHelper.FormatJson(JsonHelper.Serialize(config));
            await FileHelper.ForceWriteAllTextAsync(fileName, json);
        }
    }
}
