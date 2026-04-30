using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRoleTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageRoleTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_role",
            Title = "Manage security roles",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRoleResult)),
        Description(
            "Security roles — list/detail/user/assign/unassign/create/update/delete/copy.\n" +
            "- list: optional role_name, business_unit_id, max_records\n" +
            "- detail: role_id (+optional entity_name) → privileges grouped by entity\n" +
            "- user: user_id (+optional entity_name) → user's roles + effective privileges\n" +
            "- assign / unassign: role_id + user_id\n" +
            "- create: role_name (+optional business_unit_id)\n" +
            "- update: role_id + role_name (rename)\n" +
            "- delete: role_id (irreversible; managed roles can't delete — use copy)\n" +
            "- copy: role_id + role_name (clone with all privileges)\n\n" +

            "Depth: User < BU < Parent:ChildBU < Org. Only root roles listed (not BU-inherited copies). Fuzzy on role_name: 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto.\n\n" +

            "WHEN TO USE:\n" +
            "- Debug 'access denied' (action='user' + entity_name)\n" +
            "- Audit role privileges (action='detail')\n" +
            "- Provision access (assign/unassign or create/copy)")]
        public CallToolResult manage_role(
            [Description("list, detail, user, assign, unassign, create, update, delete, copy."
            )] string action,
            [Description("Email or GUID. Required: user/assign/unassign."
            )] string user_id = "",
            [Description("GUID. Required: detail/assign/unassign/update/delete/copy."
            )] string role_id = "",
            [Description("list: filter (contains). create/update/copy: new name."
            )] string role_name = "",
            [Description("BU GUID. list: filter. create: target BU (empty = root)."
            )] string business_unit_id = "",
            [Description("detail/user: filter privileges by entity."
            )] string entity_name = "",
            [Description("list only. Max 250."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(role_name?.Trim(), business_unit_id?.Trim(), max_records),
                    "detail" => HandleDetail(role_id?.Trim(), entity_name?.Trim().ToLowerInvariant()),
                    "user" => HandleUser(user_id?.Trim(), entity_name?.Trim().ToLowerInvariant()),
                    "assign" => HandleAssign(user_id?.Trim(), role_id?.Trim()),
                    "unassign" => HandleUnassign(user_id?.Trim(), role_id?.Trim()),
                    "create" => HandleCreate(role_name?.Trim(), business_unit_id?.Trim()),
                    "update" => HandleUpdate(role_id?.Trim(), role_name?.Trim()),
                    "delete" => HandleDelete(role_id?.Trim()),
                    "copy" => HandleCopy(role_id?.Trim(), role_name?.Trim()),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: {ex.Message}");
            }
        }

        #region Action Handlers

        private CallToolResult HandleList(string roleName, string businessUnitId, int maxRecords)
        {
            if (maxRecords < 1) maxRecords = 50;
            if (maxRecords > 250) maxRecords = 250;

            var query = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon"),
                TopCount = maxRecords
            };

            query.Criteria.AddCondition("parentroleid", ConditionOperator.Null);

            if (!string.IsNullOrWhiteSpace(roleName))
            {
                var escapedName = roleName.Replace("[", "[[]").Replace("%", "[%]");
                query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");
            }

            if (!string.IsNullOrWhiteSpace(businessUnitId))
            {
                if (!Guid.TryParse(businessUnitId, out var buId))
                    return ErrorResult($"Error: '{businessUnitId}' is not a valid GUID for business_unit_id.");
                query.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
            }

            query.AddOrder("name", OrderType.Ascending);

            var result = _serviceClient.RetrieveMultiple(query);
            var roles = result.Entities;

            if (roles.Count == 0)
            {
                var hint = !string.IsNullOrWhiteSpace(roleName) ? $" matching '{roleName}'" : "";
                return TextResult($"[SecurityRoles] 0 roles found{hint}");
            }

            var sb = new StringBuilder(roles.Count * 100 + 128);
            sb.AppendLine($"[SecurityRoles] {roles.Count} {(roles.Count == 1 ? "role" : "roles")}");
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

            return TextResult(sb.ToString());
        }

        private CallToolResult HandleDetail(string roleId, string entityFilter)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'detail' action.");

            if (!Guid.TryParse(roleId, out var id))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID.");

            var roleQuery = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon")
            };
            roleQuery.Criteria.AddCondition("roleid", ConditionOperator.Equal, id);

            var roleResult = _serviceClient.RetrieveMultiple(roleQuery);
            if (roleResult.Entities.Count == 0)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");

            var role = roleResult.Entities[0];
            var roleName = role.GetAttributeValue<string>("name") ?? "";
            var buRef = role.GetAttributeValue<EntityReference>("businessunitid");
            var isManaged = role.GetAttributeValue<bool>("ismanaged");
            var isCustomizable = role.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;

            var sb = new StringBuilder(4096);
            sb.AppendLine($"[SecurityRole] {roleName}");
            sb.AppendLine($"RoleId: {id}");
            sb.AppendLine($"BusinessUnit: {buRef?.Name ?? buRef?.Id.ToString() ?? ""}");
            sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            sb.AppendLine($"Customizable: {(isCustomizable ? "yes" : "no")}");

            var privileges = GetRolePrivileges(id);

            if (privileges.Count == 0)
            {
                sb.AppendLine();
                sb.AppendLine("[Privileges] 0 total");
                return TextResult(sb.ToString());
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

            return TextResult(sb.ToString());
        }

        private CallToolResult HandleUser(string userId, string entityFilter)
        {
            if (string.IsNullOrWhiteSpace(userId))
                return ErrorResult("Error: user_id is required for 'user' action.");

            var user = GetUserEntity(userId);
            if (user == null)
                return ErrorResult($"Error: No user found with '{userId}'.");
            if (user is string errorMsg)
                return TextResult(errorMsg);

            var userEntity = (Entity)user;
            var userIdGuid = userEntity.GetAttributeValue<Guid>("systemuserid");
            var fullName = userEntity.GetAttributeValue<string>("fullname") ?? "";
            var email = userEntity.GetAttributeValue<string>("internalemailaddress") ?? "";
            var isDisabled = userEntity.GetAttributeValue<bool>("isdisabled");
            var buRef = userEntity.GetAttributeValue<EntityReference>("businessunitid");

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
                return TextResult(sb.ToString());
            }

            sb.AppendLine($"[Roles] {rolesResult.Entities.Count} {(rolesResult.Entities.Count == 1 ? "role" : "roles")} assigned");
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

            return TextResult(sb.ToString());
        }

        private CallToolResult HandleAssign(string userId, string roleId)
        {
            if (string.IsNullOrWhiteSpace(userId))
                return ErrorResult("Error: user_id is required for 'assign' action.");
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'assign' action.");
            if (!Guid.TryParse(roleId, out var roleGuid))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID for role_id.");

            var user = GetUserEntity(userId);
            if (user == null)
                return ErrorResult($"Error: No user found with '{userId}'.");
            if (user is string errorMsg)
                return TextResult(errorMsg);

            var userEntity = (Entity)user;
            var userGuid = userEntity.GetAttributeValue<Guid>("systemuserid");
            var userName = userEntity.GetAttributeValue<string>("fullname") ?? "";

            var role = RetrieveRole(roleGuid);
            if (role == null)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");
            var roleName = role.GetAttributeValue<string>("name") ?? "";

            if (_options.DryRun)
                return DryRunResult($"Would ASSIGN role '{roleName}' ({roleGuid}) to user '{userName}' ({userGuid}).");

            _serviceClient.Associate(
                "systemuser",
                userGuid,
                new Relationship("systemuserroles_association"),
                new EntityReferenceCollection { new EntityReference("role", roleGuid) });

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Assigned] '{roleName}' → '{userName}'");
            sb.AppendLine($"RoleId: {roleGuid}");
            sb.AppendLine($"UserId: {userGuid}");

            var structured = new ManageRoleResult
            {
                Action = "assigned",
                RoleId = roleGuid.ToString(),
                RoleName = roleName,
                UserId = userGuid.ToString(),
                UserName = userName,
                Status = "assigned"
            };

            return StructuredResult(sb.ToString(), structured);
        }

        private CallToolResult HandleUnassign(string userId, string roleId)
        {
            if (string.IsNullOrWhiteSpace(userId))
                return ErrorResult("Error: user_id is required for 'unassign' action.");
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'unassign' action.");
            if (!Guid.TryParse(roleId, out var roleGuid))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID for role_id.");

            var user = GetUserEntity(userId);
            if (user == null)
                return ErrorResult($"Error: No user found with '{userId}'.");
            if (user is string errorMsg)
                return TextResult(errorMsg);

            var userEntity = (Entity)user;
            var userGuid = userEntity.GetAttributeValue<Guid>("systemuserid");
            var userName = userEntity.GetAttributeValue<string>("fullname") ?? "";

            var role = RetrieveRole(roleGuid);
            if (role == null)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");
            var roleName = role.GetAttributeValue<string>("name") ?? "";

            if (_options.DryRun)
                return DryRunResult($"Would UNASSIGN role '{roleName}' ({roleGuid}) from user '{userName}' ({userGuid}).");

            _serviceClient.Disassociate(
                "systemuser",
                userGuid,
                new Relationship("systemuserroles_association"),
                new EntityReferenceCollection { new EntityReference("role", roleGuid) });

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Unassigned] '{roleName}' ✕ '{userName}'");
            sb.AppendLine($"RoleId: {roleGuid}");
            sb.AppendLine($"UserId: {userGuid}");

            var structured = new ManageRoleResult
            {
                Action = "unassigned",
                RoleId = roleGuid.ToString(),
                RoleName = roleName,
                UserId = userGuid.ToString(),
                UserName = userName,
                Status = "unassigned"
            };

            return StructuredResult(sb.ToString(), structured);
        }

        private CallToolResult HandleCreate(string roleName, string businessUnitId)
        {
            if (string.IsNullOrWhiteSpace(roleName))
                return ErrorResult("Error: role_name is required for 'create' action.");

            Guid buId;
            string buName;

            if (!string.IsNullOrWhiteSpace(businessUnitId))
            {
                if (!Guid.TryParse(businessUnitId, out buId))
                    return ErrorResult($"Error: '{businessUnitId}' is not a valid GUID for business_unit_id.");

                var buQuery = new QueryExpression("businessunit")
                {
                    ColumnSet = new ColumnSet("name")
                };
                buQuery.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
                var buResult = _serviceClient.RetrieveMultiple(buQuery);
                if (buResult.Entities.Count == 0)
                    return ErrorResult($"Error: No business unit found with ID '{businessUnitId}'.");
                buName = buResult.Entities[0].GetAttributeValue<string>("name") ?? "";
            }
            else
            {
                var rootBuQuery = new QueryExpression("businessunit")
                {
                    ColumnSet = new ColumnSet("businessunitid", "name")
                };
                rootBuQuery.Criteria.AddCondition("parentbusinessunitid", ConditionOperator.Null);
                var rootResult = _serviceClient.RetrieveMultiple(rootBuQuery);
                if (rootResult.Entities.Count == 0)
                    return ErrorResult("Error: Could not find the root business unit.");
                buId = rootResult.Entities[0].GetAttributeValue<Guid>("businessunitid");
                buName = rootResult.Entities[0].GetAttributeValue<string>("name") ?? "";
            }

            if (_options.DryRun)
                return DryRunResult($"Would CREATE role '{roleName}' in business unit '{buName}' ({buId}).");

            var roleEntity = new Entity("role")
            {
                ["name"] = roleName,
                ["businessunitid"] = new EntityReference("businessunit", buId)
            };

            var newId = _serviceClient.Create(roleEntity);

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Created] {roleName}");
            sb.AppendLine($"RoleId: {newId}");
            sb.AppendLine($"BusinessUnit: {buName}");

            var structured = new ManageRoleResult
            {
                Action = "created",
                RoleId = newId.ToString(),
                RoleName = roleName,
                BusinessUnitId = buId.ToString(),
                Status = "created",
                CreateMode = SolutionComponentCreateMode.None.ToString()
            };

            return StructuredResult(sb.ToString(), structured);
        }

        private CallToolResult HandleUpdate(string roleId, string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'update' action.");
            if (string.IsNullOrWhiteSpace(roleName))
                return ErrorResult("Error: role_name is required for 'update' action (new name for the role).");
            if (!Guid.TryParse(roleId, out var id))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID.");

            var existingRole = RetrieveRole(id);
            if (existingRole == null)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");

            var isCustomizable = existingRole.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;
            if (!isCustomizable)
                return ErrorResult($"Error: Role '{existingRole.GetAttributeValue<string>("name")}' is not customizable and cannot be updated.");

            var oldName = existingRole.GetAttributeValue<string>("name") ?? "";

            if (_options.DryRun)
                return DryRunResult($"Would UPDATE role '{oldName}' ({id}) → rename to '{roleName}'.");

            var updateEntity = new Entity("role", id)
            {
                ["name"] = roleName
            };
            _serviceClient.Update(updateEntity);

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Updated] '{oldName}' → '{roleName}'");
            sb.AppendLine($"RoleId: {id}");

            var structured = new ManageRoleResult
            {
                Action = "updated",
                RoleId = id.ToString(),
                RoleName = roleName,
                Status = "updated"
            };

            return StructuredResult(sb.ToString(), structured);
        }

        private CallToolResult HandleDelete(string roleId)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'delete' action.");
            if (!Guid.TryParse(roleId, out var id))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID.");

            var existingRole = RetrieveRole(id);
            if (existingRole == null)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");

            var isManaged = existingRole.GetAttributeValue<bool>("ismanaged");
            if (isManaged)
                return ErrorResult($"Error: Role '{existingRole.GetAttributeValue<string>("name")}' is managed and cannot be deleted.");

            var roleName = existingRole.GetAttributeValue<string>("name") ?? "";

            if (_options.DryRun)
                return DryRunResult($"Would DELETE role '{roleName}' ({id}). WARNING: this cannot be undone.");

            _serviceClient.Delete("role", id);

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Deleted] {roleName}");
            sb.AppendLine($"RoleId: {id}");

            var structured = new ManageRoleResult
            {
                Action = "deleted",
                RoleId = id.ToString(),
                RoleName = roleName,
                Status = "deleted"
            };

            return StructuredResult(sb.ToString(), structured);
        }

        private CallToolResult HandleCopy(string roleId, string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return ErrorResult("Error: role_id is required for 'copy' action.");
            if (string.IsNullOrWhiteSpace(roleName))
                return ErrorResult("Error: role_name is required for 'copy' action (name for the new role).");
            if (!Guid.TryParse(roleId, out var sourceId))
                return ErrorResult($"Error: '{roleId}' is not a valid GUID.");

            var sourceRole = RetrieveRole(sourceId);
            if (sourceRole == null)
                return ErrorResult($"Error: No security role found with ID '{roleId}'.");

            var sourceRoleName = sourceRole.GetAttributeValue<string>("name") ?? "";
            var buRef = sourceRole.GetAttributeValue<EntityReference>("businessunitid");
            var buId = buRef?.Id ?? Guid.Empty;

            var privileges = GetRolePrivileges(sourceId);

            if (_options.DryRun)
                return DryRunResult($"Would COPY role '{sourceRoleName}' ({sourceId}) → new role '{roleName}' with {privileges.Count} privileges.");

            var newRoleEntity = new Entity("role")
            {
                ["name"] = roleName,
                ["businessunitid"] = new EntityReference("businessunit", buId)
            };
            var newRoleId = _serviceClient.Create(newRoleEntity);

            if (privileges.Count > 0)
            {
                var privilegeInfos = new RolePrivilege[privileges.Count];
                for (var i = 0; i < privileges.Count; i++)
                {
                    var depthMask = ReverseDepthMask(privileges[i].Depth);
                    privilegeInfos[i] = new RolePrivilege
                    {
                        PrivilegeId = privileges[i].PrivilegeId,
                        Depth = (PrivilegeDepth)depthMask
                    };
                }

                var addPrivRequest = new AddPrivilegesRoleRequest
                {
                    RoleId = newRoleId,
                    Privileges = privilegeInfos
                };
                _serviceClient.Execute(addPrivRequest);
            }

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Role Copied] '{sourceRoleName}' → '{roleName}'");
            sb.AppendLine($"SourceRoleId: {sourceId}");
            sb.AppendLine($"NewRoleId: {newRoleId}");
            sb.AppendLine($"PrivilegesCopied: {privileges.Count}");

            var structured = new ManageRoleResult
            {
                Action = "copied",
                RoleId = newRoleId.ToString(),
                RoleName = roleName,
                SourceRoleId = sourceId.ToString(),
                PrivilegesCopied = privileges.Count,
                Status = "copied"
            };

            return StructuredResult(sb.ToString(), structured);
        }

        #endregion

        #region Dataverse Operations

        private Entity RetrieveRole(Guid roleId)
        {
            var query = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon")
            };
            query.Criteria.AddCondition("roleid", ConditionOperator.Equal, roleId);
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private object GetUserEntity(string userId)
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
                return null;

            if (userResult.Entities.Count > 1)
                return FormatMultipleUsers(userId, userResult.Entities);

            return userResult.Entities[0];
        }

        private List<PrivilegeInfo> GetRolePrivileges(Guid roleId)
        {
            var privileges = new List<PrivilegeInfo>();
            var page = 1;
            string pagingCookie = null;

            while (true)
            {
                var fetchXml = pagingCookie == null
                    ? $@"
<fetch count='5000' page='{page}'>
  <entity name='roleprivileges'>
    <attribute name='privilegedepthmask' />
    <link-entity name='privilege' from='privilegeid' to='privilegeid' alias='priv'>
      <attribute name='name' />
      <attribute name='accessright' />
      <attribute name='privilegeid' />
    </link-entity>
    <filter>
      <condition attribute='roleid' operator='eq' value='{roleId}' />
    </filter>
  </entity>
</fetch>"
                    : $@"
<fetch count='5000' page='{page}' paging-cookie='{System.Security.SecurityElement.Escape(pagingCookie)}'>
  <entity name='roleprivileges'>
    <attribute name='privilegedepthmask' />
    <link-entity name='privilege' from='privilegeid' to='privilegeid' alias='priv'>
      <attribute name='name' />
      <attribute name='accessright' />
      <attribute name='privilegeid' />
    </link-entity>
    <filter>
      <condition attribute='roleid' operator='eq' value='{roleId}' />
    </filter>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                foreach (var entity in result.Entities)
                {
                    var privName = GetAliasedValue<string>(entity, "priv.name") ?? "";
                    var depthMask = entity.GetAttributeValue<int>("privilegedepthmask");
                    var privId = GetAliasedValue<Guid>(entity, "priv.privilegeid");

                    if (string.IsNullOrEmpty(privName)) continue;

                    var parsed = ParsePrivilegeName(privName);
                    privileges.Add(new PrivilegeInfo
                    {
                        FullName = privName,
                        Right = parsed.right,
                        EntityName = parsed.entity,
                        Depth = MapDepthMask(depthMask),
                        PrivilegeId = privId
                    });
                }

                if (!result.MoreRecords)
                    break;

                pagingCookie = result.PagingCookie;
                page++;
            }

            return privileges;
        }

        #endregion

        #region Helpers

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

        private static int DepthRank(string depth) => depth switch
        {
            "Organization" => 4,
            "Parent:ChildBU" => 3,
            "BusinessUnit" => 2,
            "User" => 1,
            _ => 0
        };

        private static int ReverseDepthMask(string depth) => depth switch
        {
            "User" => 0,             // PrivilegeDepth.Basic
            "BusinessUnit" => 1,     // PrivilegeDepth.Local
            "Parent:ChildBU" => 2,   // PrivilegeDepth.Deep
            "Organization" => 3,     // PrivilegeDepth.Global
            _ => 0
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult TextResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }]
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        private static CallToolResult StructuredResult(string text, ManageRoleResult structured) => new()
        {
            Content = [new TextContentBlock { Text = text }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        #endregion

        private sealed class PrivilegeInfo
        {
            public string FullName { get; set; }
            public string Right { get; set; }
            public string EntityName { get; set; }
            public string Depth { get; set; }
            public Guid PrivilegeId { get; set; }
        }
    }
}
