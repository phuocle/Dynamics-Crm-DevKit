using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE80;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit2019
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
                found.LanguageCode = report.LanguageCode;
                found.Language = report.Language;
                found.IsManaged = report.IsManaged;
            }
            config.Reports = config.Reports.OrderBy(x => x.File).ToList();

            var encoding = File.Exists(fileName) ? GetEncoding(fileName) : new UTF8Encoding(false);
            var text = File.Exists(fileName) ? File.ReadAllText(fileName, encoding) : "{}";
            File.WriteAllText(fileName, SaveReportsOnly(text, config.Reports), encoding);
        }

        private static string SaveReportsOnly(string text, System.Collections.Generic.List<DeployReport> reports)
        {
            if (string.IsNullOrWhiteSpace(text)) text = "{}";
            JObject.Parse(text);

            var newLine = text.Contains("\r\n") ? "\r\n" : "\n";
            var rootIndent = GetRootIndent(text) ?? "    ";
            var reportsProperty = BuildReportsProperty(reports, newLine, rootIndent);
            var propertyStart = FindPropertyStart(text, "Reports");
            if (propertyStart >= 0)
            {
                var colon = FindNextNonStringChar(text, ':', propertyStart);
                var valueStart = SkipWhiteSpace(text, colon + 1);
                var valueEnd = FindValueEnd(text, valueStart);
                return text.Substring(0, propertyStart) + reportsProperty + text.Substring(valueEnd + 1);
            }

            var objectEnd = FindLastObjectEnd(text);
            var before = text.Substring(0, objectEnd).TrimEnd();
            var after = text.Substring(objectEnd);
            var separator = HasObjectProperties(before) ? "," : string.Empty;
            return before + separator + newLine + reportsProperty + newLine + after;
        }

        private static string BuildReportsProperty(System.Collections.Generic.List<DeployReport> reports, string newLine, string rootIndent)
        {
            var stringWriter = new StringWriter();
            using (var jsonWriter = new JsonTextWriter(stringWriter) { Formatting = Formatting.Indented, Indentation = 4 })
            {
                JArray.FromObject(reports).WriteTo(jsonWriter);
            }
            var arrayJson = stringWriter.ToString()
                .Replace("\r\n", "\n")
                .Replace("\n", newLine);
            return rootIndent + "\"Reports\": " + arrayJson.Replace(newLine, newLine + rootIndent);
        }

        private static string GetRootIndent(string text)
        {
            var newLine = text.Contains("\r\n") ? "\r\n" : "\n";
            var lines = text.Split(new[] { newLine }, StringSplitOptions.None);
            foreach (var line in lines)
            {
                var trimmed = line.TrimStart();
                if (trimmed.StartsWith("\"", StringComparison.Ordinal))
                {
                    return line.Substring(0, line.Length - trimmed.Length);
                }
            }
            return null;
        }

        private static bool HasObjectProperties(string text)
        {
            return text.LastIndexOf('{') < text.TrimEnd().Length - 1;
        }

        private static int FindLastObjectEnd(string text)
        {
            for (var i = text.Length - 1; i >= 0; i--)
            {
                if (text[i] == '}') return i;
            }
            throw new InvalidDataException("Invalid config JSON.");
        }

        private static int FindPropertyStart(string text, string propertyName)
        {
            var depth = 0;
            for (var i = 0; i < text.Length; i++)
            {
                var ch = text[i];
                if (ch == '"')
                {
                    var end = FindStringEnd(text, i);
                    if (depth == 1)
                    {
                        var value = JsonConvert.DeserializeObject<string>(text.Substring(i, end - i + 1));
                        if (string.Equals(value, propertyName, StringComparison.Ordinal))
                        {
                            var next = SkipWhiteSpace(text, end + 1);
                            if (next < text.Length && text[next] == ':') return i;
                        }
                    }
                    i = end;
                    continue;
                }
                if (ch == '{' || ch == '[')
                {
                    depth++;
                }
                else if (ch == '}' || ch == ']')
                {
                    depth--;
                }
            }
            return -1;
        }

        private static int FindStringEnd(string text, int start)
        {
            var escape = false;
            for (var i = start + 1; i < text.Length; i++)
            {
                if (escape)
                {
                    escape = false;
                    continue;
                }
                if (text[i] == '\\') escape = true;
                else if (text[i] == '"') return i;
            }
            throw new InvalidDataException("Invalid string in config JSON.");
        }

        private static int FindNextNonStringChar(string text, char expected, int start)
        {
            var inString = false;
            var escape = false;
            for (var i = start; i < text.Length; i++)
            {
                var ch = text[i];
                if (inString)
                {
                    if (escape) escape = false;
                    else if (ch == '\\') escape = true;
                    else if (ch == '"') inString = false;
                    continue;
                }
                if (ch == '"')
                {
                    inString = true;
                    continue;
                }
                if (ch == expected) return i;
            }
            throw new InvalidDataException("Invalid config JSON.");
        }

        private static int FindValueEnd(string text, int valueStart)
        {
            var ch = text[valueStart];
            if (ch == '"') return FindStringEnd(text, valueStart);
            if (ch == '[' || ch == '{') return FindContainerEnd(text, valueStart);

            var end = valueStart;
            while (end < text.Length && text[end] != ',' && text[end] != '\r' && text[end] != '\n' && text[end] != '}') end++;
            return end - 1;
        }

        private static int FindContainerEnd(string text, int start)
        {
            var depth = 0;
            var inString = false;
            var escape = false;
            for (var i = start; i < text.Length; i++)
            {
                var ch = text[i];
                if (inString)
                {
                    if (escape) escape = false;
                    else if (ch == '\\') escape = true;
                    else if (ch == '"') inString = false;
                    continue;
                }
                if (ch == '"')
                {
                    inString = true;
                    continue;
                }
                if (ch == '[' || ch == '{') depth++;
                else if (ch == ']' || ch == '}')
                {
                    depth--;
                    if (depth == 0) return i;
                }
            }
            throw new InvalidDataException("Invalid config JSON.");
        }

        private static int SkipWhiteSpace(string text, int start)
        {
            while (start < text.Length && char.IsWhiteSpace(text[start])) start++;
            return start;
        }

        private static Encoding GetEncoding(string fileName)
        {
            var bom = File.ReadAllBytes(fileName).Take(4).ToArray();
            if (bom.Length >= 3 && bom[0] == 0xEF && bom[1] == 0xBB && bom[2] == 0xBF) return new UTF8Encoding(true);
            if (bom.Length >= 2 && bom[0] == 0xFF && bom[1] == 0xFE) return Encoding.Unicode;
            if (bom.Length >= 2 && bom[0] == 0xFE && bom[1] == 0xFF) return Encoding.BigEndianUnicode;
            return new UTF8Encoding(false);
        }
    }
}
