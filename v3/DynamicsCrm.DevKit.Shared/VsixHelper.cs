using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {
        public static DTE DTE { get; set; }

        public static string GetSelectedItemExtension()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (DTE?.SelectedItems?.Count != 1) return null;
            var selectedItem = DTE.SelectedItems.Item(1);
            if (selectedItem.ProjectItem == null) return null;
            var fileName = selectedItem.ProjectItem.FileNames[0];
            return Path.GetExtension(fileName);
        }
        public static string GetDynamicsCrmDevKitJsonFileName()
        {
            var solutionFullName = DTE?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new Exception($"{nameof(solutionFullName)} not found"));
            return $"{fInfo.DirectoryName}\\{Const.DynamicsCrmDevKitJson}";
        }

        public static DevKitConnections GetDevKitConnections()
        {
            var fileName = GetDynamicsCrmDevKitJsonFileName();
            if (!File.Exists(fileName)) return new DevKitConnections();
            var json = File.ReadAllText(fileName);
            return SimpleJson.DeserializeObject<DevKitConnections>(json);
        }

        public static void SaveDevKitConnections(DevKitConnections connections)
        {
            var json = SimpleJson.SerializeObject(connections);
            var fileName = GetDynamicsCrmDevKitJsonFileName();
            Utility.ForceWriteAllText(fileName, json);
        }

    }
}
