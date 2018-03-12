using EnvDTE;
using System;
using System.IO;
using System.Linq;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class DevKitCrmConfigHelper
    {
        private const string INDENT_STRING = "    ";

        static string FormatJson(string json)
        {
            int indentation = 0;
            int quoteCount = 0;
            var result =
                from ch in json
                let quotes = ch == '"' ? quoteCount++ : quoteCount
                let lineBreak = ch == ',' && quotes % 2 == 0 ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, indentation)) : null
                let openChar = ch == '{' || ch == '[' ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, ++indentation)) : ch.ToString()
                let closeChar = ch == '}' || ch == ']' ? Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, --indentation)) + ch : ch.ToString()
                select lineBreak == null
                            ? openChar.Length > 1
                                ? openChar
                                : closeChar
                            : lineBreak;

            return String.Concat(result);
        }

        public static void SetDevKitCrmConfig(DTE dte, DevKitCrmConfig devKitCrmConfig)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            var json = SimpleJson.SerializeObject(devKitCrmConfig);
            File.WriteAllText(devKitCrmConfigFile, FormatJson(json));
        }

        internal static DevKitCrmConfig GetDevKitCrmConfig(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile)) return new DevKitCrmConfig();
            var json = File.ReadAllText(devKitCrmConfigFile);
            return SimpleJson.DeserializeObject<DevKitCrmConfig>(json);
        }
    }
}
