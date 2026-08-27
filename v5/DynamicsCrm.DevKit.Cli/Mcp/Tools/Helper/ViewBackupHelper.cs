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
            var backupDir = Path.Combine(workspaceFolder, ".devkit", "manage_view", entityName);
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var fetchFile = $"{viewId:N}_{timestamp}.fetchxml.xml";
            var layoutFile = $"{viewId:N}_{timestamp}.layoutxml.xml";
            var fetchBackupPath = Path.Combine(backupDir, fetchFile);
            var layoutBackupPath = Path.Combine(backupDir, layoutFile);

            WriteBackupFile(fetchBackupPath, viewName, entityName, viewId, currentFetchXml,
                "<!-- (empty — no FetchXML on this view) -->");
            WriteBackupFile(layoutBackupPath, viewName, entityName, viewId, currentLayoutXml,
                "<!-- (empty — no LayoutXML on this view) -->");

            return (fetchBackupPath, layoutBackupPath);
        }

        private static void WriteBackupFile(string path, string viewName, string entityName, Guid viewId,
            string xml, string emptyPlaceholder)
        {
            var sb = new StringBuilder((xml?.Length ?? 0) + 320);
            sb.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sb.AppendLine($"<!-- ViewId: {viewId} -->");
            sb.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sb.AppendLine($"<!-- To restore: call manage_view with action='undo' and pass BOTH files of this backup pair — fetchxml=<.fetchxml.xml path> and layoutxml=<.layoutxml.xml path> -->");
            sb.AppendLine();
            if (!string.IsNullOrWhiteSpace(xml))
                sb.Append(ViewXmlHelper.PrettyPrintXml(xml));
            else
                sb.Append(emptyPlaceholder);
            File.WriteAllText(path, sb.ToString(), Encoding.UTF8);
        }
    }
}
