using System;
using System.IO;
using EnvDTE;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Shared.Helper
{
    public static class DevKitCrmConfigHelper
    {
        public static void SetDevKitCrmConfig(DTE dte, DevKitCrmConfig devKitCrmConfig)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\DynamicsCrm.DevKit.json";
            var json = SimpleJson.SerializeObject(devKitCrmConfig);
            Utility.ForceWriteAllText(devKitCrmConfigFile, Utility.FormatJson(json));
        }

        public static void SetDevKitCrmConfig(DTE dte, CrmConnection crmConnection)
        {
            var config = GetDevKitCrmConfig(dte);
            foreach (var item in config.CrmConnections)
            {
                if (item.Name == crmConnection.Name)
                {
                    item.Password = crmConnection.Password;
                    break;
                }
            }
            SetDevKitCrmConfig(dte, config);
        }

        public static DevKitCrmConfig GetDevKitCrmConfig(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile)) return new DevKitCrmConfig();
            var json = File.ReadAllText(devKitCrmConfigFile);
            var config = SimpleJson.DeserializeObject<DevKitCrmConfig>(json);
            return config;
        }
    }
}
