using System;
using System.IO;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ViewBackupHelper
    {
        public static (string FetchBackupPath, string LayoutBackupPath) SaveBackup(
            string entityName, Guid viewId, string viewName, string currentFetchXml, string currentLayoutXml)
        {
            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "views");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var fetchFile = $"{entityName}_{viewId:N}_{timestamp}.fetchxml.bak";
            var layoutFile = $"{entityName}_{viewId:N}_{timestamp}.layoutxml.bak";
            var fetchBackupPath = Path.Combine(backupDir, fetchFile);
            var layoutBackupPath = Path.Combine(backupDir, layoutFile);

            // Write FetchXML backup
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

            // Write LayoutXML backup
            var sbLayout = new StringBuilder(currentLayoutXml.Length + 256);
            sbLayout.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbLayout.AppendLine($"<!-- ViewId: {viewId} -->");
            sbLayout.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbLayout.AppendLine($"<!-- To restore: call manage_view with action='undo' and this file's path -->");
            sbLayout.AppendLine();
            if (!string.IsNullOrWhiteSpace(currentLayoutXml))
                sbLayout.Append(ViewXmlHelper.PrettyPrintXml(currentLayoutXml));
            else
                sbLayout.Append("<!-- (empty — no LayoutXML on this view) -->");
            File.WriteAllText(layoutBackupPath, sbLayout.ToString(), Encoding.UTF8);

            return (fetchBackupPath, layoutBackupPath);
        }

        public static StringBuilder BuildSuccessText(
            string entityName, Guid viewId, string viewName,
            string fetchBackupPath, string layoutBackupPath,
            bool validated, bool fetchXmlUpdated, bool published)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ViewUpdate] {entityName} — {viewName}");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Validated: {(validated ? "yes (sync OK)" : "skipped")}");
            sb.AppendLine($"Updated: {(fetchXmlUpdated ? "LayoutXML + FetchXML" : "LayoutXML only")}");
            sb.AppendLine($"Backup:");
            sb.AppendLine($"  {fetchBackupPath ?? "skipped"}");
            sb.AppendLine($"  {layoutBackupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            return sb;
        }

        public static void AppendRollbackInfo(StringBuilder sb, string fetchBackupPath, string layoutBackupPath, Guid viewId)
        {
            sb.AppendLine("To rollback this change:");
            if (fetchBackupPath != null && layoutBackupPath != null)
            {
                sb.AppendLine($"1. Read backup files from .devkit/backups/views/");
                sb.AppendLine($"2. Remove the comment lines at the top (<!-- ... -->)");
                sb.AppendLine($"3. Call manage_view with action='undo', the backup file paths as layoutxml + fetchxml");
            }
            else
            {
                sb.AppendLine($"1. Retrieve the previous XMLs (no backup was created)");
                sb.AppendLine($"2. Call manage_view with action='update', view_id='{viewId}' and the original layoutxml + fetchxml");
            }
        }
    }
}
