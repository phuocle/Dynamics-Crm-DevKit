using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetRolesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetRolesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_roles", Title = "List security roles and their privileges",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List security roles and their privileges for Dataverse entities. " +
            "Shows what CRUD and other access rights each role has at which depth.\n\n" +

            "THREE MODES:\n" +
            "- If user_id is PROVIDED: show which roles a specific user has, and optionally their effective privileges for an entity\n" +
            "- If role_id is PROVIDED: show all privileges for that role, grouped by entity\n" +
            "- If both are EMPTY: list all root security roles with basic info\n\n" +

            "PARAMETERS:\n" +
            "- user_id: Email or GUID of a user to check their assigned roles. " +
            "When combined with entity_name, shows effective privileges across all roles.\n" +
            "- role_id: GUID of a specific role for privilege details. Leave empty to list all roles.\n" +
            "- role_name: Filter roles by name (contains match, e.g., 'Sales'). Only used in list mode.\n" +
            "- business_unit_id: Filter by business unit GUID. Leave empty for root BU roles.\n" +
            "- entity_name: In detail/user mode, show only privileges for this entity (e.g., 'account').\n" +
            "- max_records: Max roles in list mode (default: 50, max: 250).\n\n" +

            "RETURNS:\n" +
            "- User mode: User info + assigned roles table + effective entity privileges (if entity_name provided)\n" +
            "- Detail mode: All privileges grouped by entity with access depth (User/BU/Parent:Child/Org)\n" +
            "- List mode: Table of roles with ID, name, managed status, customizable flag\n\n" +

            "WHEN TO USE:\n" +
            "- When a user reports 'access denied' -- pass their email + entity_name to see if they have the right\n" +
            "- To check what roles a specific user has (pass email as user_id)\n" +
            "- To understand what a role grants (pass role_id)\n" +
            "- Before creating a new entity (need to set up role permissions)\n" +
            "- To compare security roles (run twice with different role_ids)\n" +
            "- When auditing security configuration\n\n" +

            "TIPS:\n" +
            "- Depth levels: User < BusinessUnit < Parent:ChildBU < Organization\n" +
            "- Only root roles are listed (parentroleid=null), not inherited BU copies\n" +
            "- Use entity_name filter in detail mode to focus on one entity's privileges\n" +
            "- System Administrator has all privileges at Organization depth\n" +
            "- Use whoami to find the current user's security roles first")]
        public string get_roles(
            [Description(
                "Email address or GUID of a user to check their assigned security roles. " +
                "Examples: 'john@contoso.com', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'. " +
                "When combined with entity_name, also shows effective privileges for that entity across all user's roles."
            )] string user_id = "",
            [Description(
                "GUID of a specific security role to get privilege details. " +
                "Leave empty to list all roles. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use list mode first to discover role IDs."
            )] string role_id = "",
            [Description(
                "Filter roles by name (contains match). " +
                "Examples: 'Sales', 'Admin', 'Custom'. " +
                "Only used in list mode (when role_id is empty)."
            )] string role_name = "",
            [Description(
                "Filter by business unit GUID. " +
                "Leave empty to show only root business unit roles. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'."
            )] string business_unit_id = "",
            [Description(
                "In detail/user mode, filter privileges to only show those for a specific entity. " +
                "Examples: 'account', 'contact', 'lead'. " +
                "Leave empty to show all entity privileges."
            )] string entity_name = "",
            [Description(
                "Maximum number of roles to return in list mode. " +
                "Default: 50. Max: 250."
            )] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(user_id))
                    return GetUserRoles(user_id.Trim(), entity_name?.Trim().ToLowerInvariant());

                if (!string.IsNullOrWhiteSpace(role_id))
                {
                    if (!Guid.TryParse(role_id.Trim(), out var id))
                        return $"Error: '{role_id}' is not a valid GUID.";

                    return GetRoleDetail(id, entity_name?.Trim().ToLowerInvariant());
                }

                if (max_records < 1) max_records = 50;
                if (max_records > 250) max_records = 250;

                return ListRoles(role_name?.Trim(), business_unit_id?.Trim(), max_records);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve security roles: {ex.Message}";
            }
        }

        private string GetUserRoles(string userId, string entityFilter)
        {
            var userQuery = new QueryExpression("systemuser")
            {
                ColumnSet = new ColumnSet("systemuserid", "fullname", "internalemailaddress", "isdisabled", "businessunitid")
            };

            if (Guid.TryParse(userId, out var userGuid))
                userQuery.Criteria.AddCondition("systemuserid", ConditionOperator.Equal, userGuid);
            else
                userQuery.Criteria.AddCondition("internalemailaddress", ConditionOperator.Equal, userId);

            var userResult = _serviceClient.RetrieveMultiple(userQuery);
            if (userResult.Entities.Count == 0)
                return $"Error: No user found with '{userId}'.";

            if (userResult.Entities.Count > 1)
                return FormatMultipleUsers(userId, userResult.Entities);

            var user = userResult.Entities[0];
            var userIdGuid = user.GetAttributeValue<Guid>("systemuserid");
            var fullName = user.GetAttributeValue<string>("fullname") ?? "";
            var email = user.GetAttributeValue<string>("internalemailaddress") ?? "";
            var isDisabled = user.GetAttributeValue<bool>("isdisabled");
            var buRef = user.GetAttributeValue<EntityReference>("businessunitid");

            var rolesFetchXml = $@"
<fetch>
  <entity name='systemuserroles'>
    <attribute name='roleid' />
    <link-entity name='role' from='roleid' to='roleid' alias='r'>
      <attribute name='name' />
      <attribute name='ismanaged' />
      <attribute name='iscustomizable' />
    </link-entity>
    <filter>
      <condition attribute='systemuserid' operator='eq' value='{userIdGuid}' />
    </filter>
  </entity>
</fetch>";

            var rolesResult = _serviceClient.RetrieveMultiple(new FetchExpression(rolesFetchXml));

            var sb = new StringBuilder(2048);
            sb.AppendLine($"[User] {fullName}");
            sb.AppendLine($"UserId: {userIdGuid}");
            sb.AppendLine($"Email: {email}");
            sb.AppendLine($"Status: {(isDisabled ? "Disabled" : "Active")}");
            sb.AppendLine($"BusinessUnit: {buRef?.Name ?? buRef?.Id.ToString() ?? ""}");
            sb.AppendLine();

            if (rolesResult.Entities.Count == 0)
            {
                sb.AppendLine("[Roles] 0 assigned");
                return sb.ToString();
            }

            sb.AppendLine($"[Roles] {rolesResult.Entities.Count} assigned");
            sb.AppendLine();
            sb.AppendLine("roleid\tname\tmanaged");

            var roleIds = new List<Guid>();
            foreach (var roleEntity in rolesResult.Entities)
            {
                var roleId = roleEntity.GetAttributeValue<Guid>("roleid");
                var roleName = GetAliasedValue<string>(roleEntity, "r.name") ?? "";
                var isManaged = GetAliasedValue<bool>(roleEntity, "r.ismanaged");

                roleIds.Add(roleId);
                sb.AppendLine($"{roleId}\t{EscapeTab(roleName)}\t{(isManaged ? "yes" : "no")}");
            }

            if (!string.IsNullOrWhiteSpace(entityFilter))
            {
                sb.AppendLine();
                var allPrivileges = new List<PrivilegeInfo>();
                foreach (var roleId in roleIds)
                {
                    var privs = GetRolePrivileges(roleId);
                    allPrivileges.AddRange(privs);
                }

                var entityPrivs = allPrivileges
                    .Where(p => string.Equals(p.EntityName, entityFilter, StringComparison.OrdinalIgnoreCase))
                    .GroupBy(p => p.Right)
                    .ToDictionary(g => g.Key, g => g.OrderByDescending(p => DepthRank(p.Depth)).First());

                if (entityPrivs.Count == 0)
                {
                    sb.AppendLine($"[Effective Privileges] {entityFilter} -- NO privileges found");
                    sb.AppendLine("This user has NO access to this entity.");
                }
                else
                {
                    sb.AppendLine($"[Effective Privileges] {entityFilter} ({entityPrivs.Count} rights)");
                    sb.AppendLine("right\tdepth");

                    foreach (var priv in entityPrivs.OrderBy(p => p.Key))
                    {
                        sb.AppendLine($"{priv.Key}\t{priv.Value.Depth}");
                    }

                    var missingRights = new[] { "Create", "Read", "Write", "Delete", "Append", "AppendTo", "Assign", "Share" }
                        .Where(r => !entityPrivs.ContainsKey(r))
                        .ToList();

                    if (missingRights.Count > 0)
                    {
                        sb.AppendLine();
                        sb.AppendLine($"[Missing Rights] {string.Join(", ", missingRights)}");
                    }
                }
            }

            return sb.ToString();
        }

        private static int DepthRank(string depth) => depth switch
        {
            "Organization" => 4,
            "Parent:ChildBU" => 3,
            "BusinessUnit" => 2,
            "User" => 1,
            _ => 0
        };

        private string ListRoles(string roleName, string businessUnitId, int maxRecords)
        {
            var query = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon"),
                TopCount = maxRecords
            };

            query.Criteria.AddCondition("parentroleid", ConditionOperator.Null);

            if (!string.IsNullOrWhiteSpace(roleName))
                query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{roleName}%");

            if (!string.IsNullOrWhiteSpace(businessUnitId) && Guid.TryParse(businessUnitId, out var buId))
                query.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);

            query.AddOrder("name", OrderType.Ascending);

            var result = _serviceClient.RetrieveMultiple(query);
            var roles = result.Entities;

            if (roles.Count == 0)
            {
                var hint = !string.IsNullOrWhiteSpace(roleName) ? $" matching '{roleName}'" : "";
                return $"[SecurityRoles] 0 roles found{hint}";
            }

            var sb = new StringBuilder(roles.Count * 100 + 128);
            sb.AppendLine($"[SecurityRoles] {roles.Count} roles");
            sb.AppendLine();
            sb.AppendLine("roleid\tname\tbusinessunit\tmanaged\tcustomizable");

            foreach (var role in roles)
            {
                var roleId = role.GetAttributeValue<Guid>("roleid");
                var name = role.GetAttributeValue<string>("name") ?? "";
                var buRef = role.GetAttributeValue<EntityReference>("businessunitid");
                var buName = buRef?.Name ?? "";
                var isManaged = role.GetAttributeValue<bool>("ismanaged");
                var isCustomizable = role.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;

                sb.AppendLine($"{roleId}\t{EscapeTab(name)}\t{EscapeTab(buName)}\t{(isManaged ? "yes" : "no")}\t{(isCustomizable ? "yes" : "no")}");
            }

            return sb.ToString();
        }

        private string GetRoleDetail(Guid roleId, string entityFilter)
        {
            var roleQuery = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon")
            };
            roleQuery.Criteria.AddCondition("roleid", ConditionOperator.Equal, roleId);

            var roleResult = _serviceClient.RetrieveMultiple(roleQuery);
            if (roleResult.Entities.Count == 0)
                return $"Error: No security role found with ID '{roleId}'.";

            var role = roleResult.Entities[0];
            var roleName = role.GetAttributeValue<string>("name") ?? "";
            var buRef = role.GetAttributeValue<EntityReference>("businessunitid");
            var isManaged = role.GetAttributeValue<bool>("ismanaged");
            var isCustomizable = role.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;

            var sb = new StringBuilder(4096);
            sb.AppendLine($"[SecurityRole] {roleName}");
            sb.AppendLine($"RoleId: {roleId}");
            sb.AppendLine($"BusinessUnit: {buRef?.Name ?? buRef?.Id.ToString() ?? ""}");
            sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            sb.AppendLine($"Customizable: {(isCustomizable ? "yes" : "no")}");

            var privileges = GetRolePrivileges(roleId);

            if (privileges.Count == 0)
            {
                sb.AppendLine();
                sb.AppendLine("[Privileges] 0 total");
                return sb.ToString();
            }

            var grouped = GroupPrivilegesByEntity(privileges, entityFilter);

            sb.AppendLine();
            var totalCount = grouped.Sum(g => g.Value.Count);
            sb.AppendLine($"[Privileges] {totalCount} total across {grouped.Count} entities");

            foreach (var group in grouped.OrderBy(g => g.Key))
            {
                sb.AppendLine();
                sb.AppendLine($"[{group.Key}] {group.Value.Count} privileges");
                sb.AppendLine("privilege\tdepth");

                foreach (var priv in group.Value.OrderBy(p => p.Right))
                {
                    sb.AppendLine($"{priv.Right}\t{priv.Depth}");
                }
            }

            return sb.ToString();
        }

        private List<PrivilegeInfo> GetRolePrivileges(Guid roleId)
        {
            var fetchXml = $@"
<fetch>
  <entity name='roleprivileges'>
    <attribute name='privilegedepthmask' />
    <link-entity name='privilege' from='privilegeid' to='privilegeid' alias='priv'>
      <attribute name='name' />
      <attribute name='accessright' />
    </link-entity>
    <filter>
      <condition attribute='roleid' operator='eq' value='{roleId}' />
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var privileges = new List<PrivilegeInfo>(result.Entities.Count);

            foreach (var entity in result.Entities)
            {
                var privName = GetAliasedValue<string>(entity, "priv.name") ?? "";
                var depthMask = entity.GetAttributeValue<int>("privilegedepthmask");

                if (string.IsNullOrEmpty(privName)) continue;

                var parsed = ParsePrivilegeName(privName);
                privileges.Add(new PrivilegeInfo
                {
                    FullName = privName,
                    Right = parsed.right,
                    EntityName = parsed.entity,
                    Depth = MapDepthMask(depthMask)
                });
            }

            return privileges;
        }

        private static Dictionary<string, List<PrivilegeInfo>> GroupPrivilegesByEntity(
            List<PrivilegeInfo> privileges, string entityFilter)
        {
            var query = privileges.AsEnumerable();

            if (!string.IsNullOrWhiteSpace(entityFilter))
                query = query.Where(p => string.Equals(p.EntityName, entityFilter, StringComparison.OrdinalIgnoreCase));

            return query
                .GroupBy(p => p.EntityName)
                .ToDictionary(g => g.Key, g => g.ToList());
        }

        private static (string right, string entity) ParsePrivilegeName(string privilegeName)
        {
            var prefixes = new[]
            {
                "prvCreat", "prvRead", "prvWrite", "prvDelet",
                "prvAppendTo", "prvAppend", "prvAssign", "prvShare"
            };

            var displayNames = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                ["prvCreat"] = "Create",
                ["prvRead"] = "Read",
                ["prvWrite"] = "Write",
                ["prvDelet"] = "Delete",
                ["prvAppendTo"] = "AppendTo",
                ["prvAppend"] = "Append",
                ["prvAssign"] = "Assign",
                ["prvShare"] = "Share"
            };

            foreach (var prefix in prefixes)
            {
                if (privilegeName.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                {
                    var entity = privilegeName.Substring(prefix.Length);
                    if (prefix == "prvCreat" && entity.StartsWith("e", StringComparison.OrdinalIgnoreCase))
                        entity = entity.Substring(1);
                    if (prefix == "prvDelet" && entity.StartsWith("e", StringComparison.OrdinalIgnoreCase))
                        entity = entity.Substring(1);

                    return (displayNames[prefix], entity.ToLowerInvariant());
                }
            }

            return (privilegeName, "(misc)");
        }

        private static string MapDepthMask(int depthMask) => depthMask switch
        {
            1 => "User",
            2 => "BusinessUnit",
            4 => "Parent:ChildBU",
            8 => "Organization",
            _ => $"Unknown({depthMask})"
        };

        private static T GetAliasedValue<T>(Entity entity, string alias)
        {
            if (entity.Attributes.TryGetValue(alias, out var obj) && obj is AliasedValue av)
                return av.Value is T val ? val : default;
            return default;
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static string FormatMultipleUsers(string input, DataCollection<Entity> users)
        {
            var sb = new StringBuilder(users.Count * 120 + 256);
            sb.AppendLine($"[Multiple Users] {users.Count} users match '{input}'. Re-call with the exact systemuserid GUID:");
            sb.AppendLine();
            sb.AppendLine("systemuserid\tfullname\temail\tstatus\tbusinessunit");
            foreach (var u in users)
            {
                var id = u.GetAttributeValue<Guid>("systemuserid");
                var name = u.GetAttributeValue<string>("fullname") ?? "";
                var email = u.GetAttributeValue<string>("internalemailaddress") ?? "";
                var disabled = u.GetAttributeValue<bool>("isdisabled");
                var buRef = u.GetAttributeValue<EntityReference>("businessunitid");
                var buName = buRef?.Name ?? "";
                sb.AppendLine($"{id}\t{EscapeTab(name)}\t{EscapeTab(email)}\t{(disabled ? "Disabled" : "Active")}\t{EscapeTab(buName)}");
            }
            return sb.ToString();
        }

        private sealed class PrivilegeInfo
        {
            public string FullName { get; set; }
            public string Right { get; set; }
            public string EntityName { get; set; }
            public string Depth { get; set; }
        }
    }
}
