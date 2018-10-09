using System;
using System.IO;
using System.Linq;
using EnvDTE;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class DevKitCrmConfigHelper
    {
        private const string INDENT_STRING = "    ";

        private static string FormatJson(string json)
        {
            var indentation = 0;
            var quoteCount = 0;
            var result =
                from ch in json
                let quotes = ch == '"' ? quoteCount++ : quoteCount
                let lineBreak = ch == ',' && quotes % 2 == 0
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(INDENT_STRING, indentation))
                    : null
                let openChar = ch == '{' || ch == '['
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(INDENT_STRING, ++indentation))
                    : ch.ToString()
                let closeChar = ch == '}' || ch == ']'
                    ? Environment.NewLine + string.Concat(Enumerable.Repeat(INDENT_STRING, --indentation)) + ch
                    : ch.ToString()
                select lineBreak == null
                    ? openChar.Length > 1
                        ? openChar
                        : closeChar
                    : lineBreak;

            return string.Concat(result);
        }

        public static void SetDevKitCrmConfig(DTE dte, DevKitCrmConfig devKitCrmConfig)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            var json = SimpleJson.SerializeObject(devKitCrmConfig);
            File.WriteAllText(devKitCrmConfigFile, FormatJson(json));
        }

        public static void SetDevKitCrmConfig(DTE dte, CrmConnection crmConnection)
        {
            var config = GetDevKitCrmConfig(dte);
            foreach(var item in config.CrmConnections)
            {
                if (item.Name == crmConnection.Name)
                {
                    item.Password = crmConnection.Password;
                    break;
                }
            }
            SetDevKitCrmConfig(dte, config);
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