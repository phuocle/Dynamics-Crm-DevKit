using System;
using System.IO;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ViewBackupHelper
    {
        public static string SaveBackup(
            string entityName, Guid viewId, string viewName, string currentFetchXml, string workspaceFolder = "")
        {
            var backupDir = Path.Combine(workspaceFolder, ".devkit", "manage_view", entityName);
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var fetchFile = $"{viewId:N}_{timestamp}.fetchxml.xml";
            var fetchBackupPath = Path.Combine(backupDir, fetchFile);

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

            return fetchBackupPath;
        }
    }
}
