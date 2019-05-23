using System;
using System.IO;
using EnvDTE;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class DevKitCrmConfigHelper
    {
        public static void SetDevKitCrmConfig(DTE dte, DevKitCrmConfig devKitCrmConfig)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            var json = SimpleJson.SerializeObject(devKitCrmConfig);
            File.WriteAllText(devKitCrmConfigFile, Utility.FormatJson(json), System.Text.Encoding.UTF8);
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
            var config = SimpleJson.DeserializeObject<DevKitCrmConfig>(json);
            if (config.UseTypeScriptDeclaration == null || config.UseTypeScriptDeclaration == "null")
                config.UseTypeScriptDeclaration = "false";
            return config;
        }
    }
}
