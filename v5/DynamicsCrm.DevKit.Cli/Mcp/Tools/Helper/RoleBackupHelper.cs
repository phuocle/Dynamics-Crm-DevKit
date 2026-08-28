using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class RoleBackupHelper
    {
        private static readonly JsonSerializerOptions JsonOptions = new JsonSerializerOptions
        {
            WriteIndented = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        public static string SaveBackup(Guid roleId, string roleName, Guid businessUnitId,
            List<RoleBackupPrivilege> privileges, string workspaceFolder)
        {
            var backupDir = Path.Combine(workspaceFolder, ".devkit", "manage_role");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupPath = Path.Combine(backupDir, $"{roleId:N}_{timestamp}.role.json");

            var snapshot = new RoleBackupSnapshot
            {
                Note = "Backup of security role privileges. To restore: call manage_role with action='restore' and backup_path=<this file>. If the role was deleted it is re-created with a NEW role ID — re-assign users/teams yourself (assignments are not backed up).",
                RoleId = roleId.ToString(),
                RoleName = roleName,
                BusinessUnitId = businessUnitId.ToString(),
                BackedUpOn = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                Privileges = privileges
            };

            File.WriteAllText(backupPath, JsonSerializer.Serialize(snapshot, JsonOptions), Encoding.UTF8);
            return backupPath;
        }

        public static RoleBackupSnapshot LoadBackup(string backupPath)
        {
            var json = File.ReadAllText(backupPath, Encoding.UTF8);
            return JsonSerializer.Deserialize<RoleBackupSnapshot>(json,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }
    }

    internal sealed class RoleBackupSnapshot
    {
        [JsonPropertyName("note")]
        public string Note { get; set; }

        [JsonPropertyName("roleId")]
        public string RoleId { get; set; }

        [JsonPropertyName("roleName")]
        public string RoleName { get; set; }

        [JsonPropertyName("businessUnitId")]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("backedUpOn")]
        public string BackedUpOn { get; set; }

        [JsonPropertyName("privileges")]
        public List<RoleBackupPrivilege> Privileges { get; set; } = new List<RoleBackupPrivilege>();
    }

    internal sealed class RoleBackupPrivilege
    {
        [JsonPropertyName("privilegeId")]
        public string PrivilegeId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("depth")]
        public string Depth { get; set; }
    }
}
