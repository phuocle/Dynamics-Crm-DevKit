using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ReportBackupHelper
    {
        public static string SaveBackup(string resolvedRdlPath, string datasetName, string workspaceFolder)
        {
            var backupDir = Path.Combine(workspaceFolder, ".devkit", "manage_report", "backups");
            Directory.CreateDirectory(backupDir);

            var baseName = Path.GetFileNameWithoutExtension(resolvedRdlPath);
            var safeDatasetName = FileColumnTransferHelper.SanitizeFolderName(datasetName);
            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");
            var backupPath = Path.Combine(backupDir, $"{baseName}_{safeDatasetName}_{timestamp}.rdl");
            File.Copy(resolvedRdlPath, backupPath, overwrite: false);
            return backupPath;
        }
    }
}
