using System;
using System.IO;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ViewBackupHelper
    {
        public static (string FetchBackupPath, string LayoutBackupPath) SaveBackup(
            string entityName, Guid viewId, string viewName, string currentFetchXml, string currentLayoutXml, string workspaceFolder = "")
        {
            var backupDir = Path.Combine(workspaceFolder, ".devkit", "manage_view", entityName, "backups");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var fetchFile = $"{entityName}_{viewId:N}_{timestamp}.fetchxml.bak";
            var layoutFile = $"{entityName}_{viewId:N}_{timestamp}.layoutxml.bak";
            var fetchBackupPath = Path.Combine(backupDir, fetchFile);
            var layoutBackupPath = Path.Combine(backupDir, layoutFile);

            var sbFetch = new StringBuilder(currentFetchXml.Length + 256);
            sbFetch.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbFetch.AppendLine($"<!-- ViewId: {viewId} -->");
            sbFetch.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbFetch.AppendLine($"<!-- To restore: call manage_view with action='undo' and this file's path -->");
            sbFetch.AppendLine();
            if (!string.IsNullOrWhiteSpace(currentFetchXml))
                sbFetch.Append(ViewXmlHelper.PrettyPrintXml(currentFetchXml));
            else
                sbFetch.Append("<!-- (empty — no FetchXML on this view) -->");
            File.WriteAllText(fetchBackupPath, sbFetch.ToString(), Encoding.UTF8);

            var sbLayout = new StringBuilder(currentLayoutXml.Length + 256);
            sbLayout.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbLayout.AppendLine($"<!-- ViewId: {viewId} -->");
            sbLayout.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbLayout.AppendLine($"<!-- To restore: call manage_view with action='undo' and the matching .fetchxml.bak file path (LayoutXML is regenerated from FetchXML) -->");
            sbLayout.AppendLine();
            if (!string.IsNullOrWhiteSpace(currentLayoutXml))
                sbLayout.Append(ViewXmlHelper.PrettyPrintXml(currentLayoutXml));
            else
                sbLayout.Append("<!-- (empty — no LayoutXML on this view) -->");
            File.WriteAllText(layoutBackupPath, sbLayout.ToString(), Encoding.UTF8);

            return (fetchBackupPath, layoutBackupPath);
        }
    }
}
