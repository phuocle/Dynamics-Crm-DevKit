using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE80;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit._2019
{
    internal static class ReportConfigHelper
    {
        private const string ConfigFileName = "DynamicsCrm.DevKit.Config.json";

        public static string GetConfigFileName(DTE2 dte)
        {
            var solutionFile = dte?.Solution?.FullName;
            if (string.IsNullOrWhiteSpace(solutionFile)) return null;
            return Path.Combine(Path.GetDirectoryName(solutionFile), ConfigFileName);
        }

        public static ConfigJson ReadConfig(string fileName)
        {
            if (string.IsNullOrWhiteSpace(fileName) || !File.Exists(fileName)) return new ConfigJson();
            var json = JObject.Parse(File.ReadAllText(fileName));
            var config = new ConfigJson
            {
                Reports = json["Reports"]?.ToObject<System.Collections.Generic.List<DeployReport>>() ?? new System.Collections.Generic.List<DeployReport>()
            };
            config.Reports = config.Reports ?? new System.Collections.Generic.List<DeployReport>();
            return config;
        }

        public static DeployReport GetReport(ConfigJson config, string fullFileName)
        {
            return config?.Reports?.FirstOrDefault(x => string.Equals(x.File, fullFileName, StringComparison.OrdinalIgnoreCase));
        }

        public static void SaveReport(string fileName, ConfigJson config, DeployReport report)
        {
            config.Reports = config.Reports ?? new System.Collections.Generic.List<DeployReport>();
            var found = config.Reports.FirstOrDefault(x => string.Equals(x.File, report.File, StringComparison.OrdinalIgnoreCase));
            if (found == null)
            {
                config.Reports.Add(report);
            }
            else
            {
                found.ReportId = report.ReportId;
                found.ReportName = report.ReportName;
                found.ReportFileName = report.ReportFileName;
                found.SolutionUniqueName = report.SolutionUniqueName;
                found.LanguageCode = report.LanguageCode;
                found.Language = report.Language;
            }
            config.Reports = config.Reports.OrderBy(x => x.File).ToList();

            var json = File.Exists(fileName)
                ? JObject.Parse(File.ReadAllText(fileName))
                : new JObject();
            json["Reports"] = JArray.FromObject(config.Reports);
            File.WriteAllText(fileName, JsonConvert.SerializeObject(json, Formatting.Indented));
        }
    }
}
