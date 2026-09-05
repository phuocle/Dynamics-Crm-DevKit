using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRoleTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        public ManageRoleTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_role",
            Title = "Manage security roles",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRoleResult)),
        Description(
            "Security roles — list/detail/user/assign/unassign/create/update/delete/copy/restore.\n" +
            "- list: optional role_name, business_unit_id, max_records\n" +
            "- detail: role_id OR role_name (+optional entity_name) → privileges grouped by entity. Resolves role name first (fuzzy), then GUID fallback.\n" +
            "- user: user_id (+optional entity_name) → user's roles + effective privileges\n" +
            "- assign / unassign: role_id + user_id (direct) or team_id (role for a team; members inherit it). user action also reports roles inherited via team membership.\n" +
            "- create: role_name (+optional business_unit_id)\n" +
            "- update: role_id + optional role_name (rename) and/or privileges (JSON array of {entity, right, depth}) to add/change/remove privileges and depth on an existing role. Depth: User | BusinessUnit | Parent:ChildBU | Organization; 'None' removes. Rights: Create | Read | Write | Delete | Append | AppendTo | Assign | Share, or '*' to apply to all rights of the entity.\n" +
            "- delete: role_id (managed roles can't delete — use copy)\n" +
            "- copy: role_id + role_name (clone with all privileges)\n" +
            "- restore: backup_path → restore a role from a .role.json backup written by update/delete (result's backupPath; backups at .devkit/manage_role/). If the role was deleted it is re-created with a NEW role ID — re-assign users/teams yourself (assignments are not backed up).\n" +
            "Mutating actions require the System Administrator role on the calling user.\n\n" +
            "Depth: User < BU < Parent:ChildBU < Org. Only root roles listed (not BU-inherited copies). Fuzzy on role_name: 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto. update/delete save a pre-change privilege backup (backupPath) before mutating.\n\n" +
            "WHEN TO USE:\n" +
            "- Debug 'access denied' (action='user' + entity_name)\n" +
            "- Audit role privileges (action='detail')\n" +
            "- Provision access (assign/unassign or create/copy)\n" +
            "- Roll back a bad privilege update or a mistaken delete (action='restore')\n\n" +
            "RELATED TOOLS:\n" +
            "- whoami → verify the connected user and their direct roles\n" +
            "- manage_record → read/create/update role and team records directly\n" +
            "- execute_fetchxml → query roles and privileges with deterministic filters")]
        public async Task<CallToolResult> manage_role(
            McpServer server,
            [Description("list, detail, user, assign, unassign, create, update, delete, copy, restore.")] string action = "",
            [Description("Email or GUID. Required: user/assign/unassign (unless team_id is used).")] string user_id = "",
            [Description("Team GUID or exact name. assign/unassign: assign the role to this team instead of a user (members inherit it).")] string team_id = "",
            [Description("Role GUID. For detail only, this may also be a role name; if empty, role_name is used. Required: detail/assign/unassign/update/delete/copy.")] string role_id = "",
            [Description("list: filter (contains). detail: role display name when role_id is empty. create/update/copy: new name.")] string role_name = "",
            [Description("BU GUID. list: filter. create: target BU (empty = root).")] string business_unit_id = "",
            [Description("detail/user: filter privileges by entity Display Name or logical name.")] string entity_name = "",
            [Description("update only. JSON array: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"},...]. entity = Display Name or logical name; right = Create|Read|Write|Delete|Append|AppendTo|Assign|Share, or '*' for all rights on the entity; depth = User|BusinessUnit|Parent:ChildBU|Organization, or None to remove.")] string privileges = "",
            [Description("restore only: .role.json backup file path written by update/delete (result's backupPath). Backups are at .devkit/manage_role/.")] string backup_path = "",
            [Description("list only. Max 250.")] int max_records = 50)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.",
                        "Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy', 'restore'.");

                var normalizedAction = action.Trim().ToLowerInvariant();

                var isMutation = normalizedAction is "assign" or "unassign" or "create" or "update" or "delete" or "copy" or "restore";
                if (isMutation)
                {
                    var gateError = RequireSystemAdministrator(normalizedAction);
                    if (gateError != null)
                        return gateError;
                }

                if (normalizedAction is "update" or "delete" or "restore")
                    _workspaceFolder = await WorkspaceFolderHelper.GetAsync(server);

                return normalizedAction switch
                {
                    "list" => HandleList(role_name?.Trim(), business_unit_id?.Trim(), max_records),
                    "detail" => HandleDetail(role_id?.Trim(), role_name?.Trim(), entity_name?.Trim()),
                    "user" => HandleUser(user_id?.Trim(), entity_name?.Trim()),
                    "assign" => HandleAssign(user_id?.Trim(), team_id?.Trim(), role_id?.Trim()),
                    "unassign" => HandleUnassign(user_id?.Trim(), team_id?.Trim(), role_id?.Trim()),
                    "create" => HandleCreate(role_name?.Trim(), business_unit_id?.Trim()),
                    "update" => HandleUpdate(role_id?.Trim(), role_name?.Trim(), privileges),
                    "delete" => HandleDelete(role_id?.Trim()),
                    "copy" => HandleCopy(role_id?.Trim(), role_name?.Trim()),
                    "restore" => HandleRestore(backup_path?.Trim()),
                    _ => Error($"Invalid action '{action}'.",
                        "Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy', 'restore'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

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
                    return Error($"'{businessUnitId}' is not a valid GUID for business_unit_id.",
                        "Pass the businessunitid GUID of an existing business unit, or omit business_unit_id.");
                query.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
            }

            query.AddOrder("name", OrderType.Ascending);

            var result = _orgService.RetrieveMultiple(query);
            var roles = result.Entities;

            if (roles.Count == 0)
            {
                var hint = !string.IsNullOrWhiteSpace(roleName) ? $" matching '{roleName}'" : "";
                return Success($"0 roles found{hint}.", new ManageRoleResult
                {
                    Action = "list",
                    TotalCount = 0
                });
            }

            var entries = roles.Select(MapRoleEntry).ToList();

            var countWord = entries.Count == 1 ? "role" : "roles";
            return Success($"{entries.Count} {countWord} found.", new ManageRoleResult
            {
                Action = "list",
                TotalCount = entries.Count,
                Roles = entries
            });
        }

        private CallToolResult HandleDetail(string roleId, string roleNameInput, string entityFilter)
        {
            var roleReference = !string.IsNullOrWhiteSpace(roleId) ? roleId : roleNameInput;
            var resolvedRole = ResolveRoleForDetail(roleReference);
            if (resolvedRole.AmbiguousRoles != null)
                return Error(resolvedRole.Error,
                    "Re-call with the exact roleid GUID or a more specific role_name.",
                    new ManageRoleResult
                    {
                        Action = "detail",
                        TotalCount = resolvedRole.AmbiguousRoles.Count,
                        Roles = resolvedRole.AmbiguousRoles
                    });
            if (!string.IsNullOrEmpty(resolvedRole.Error))
            {
                if (resolvedRole.Error.StartsWith("role_id or role_name is required", StringComparison.Ordinal))
                    return Error(resolvedRole.Error,
                        "Pass role_id (GUID) or role_name (Display Name). Use action='list' to discover roles.");
                if (resolvedRole.Error.EndsWith("is not a valid GUID.", StringComparison.Ordinal) ||
                    resolvedRole.Error.StartsWith("No security role found with ID", StringComparison.Ordinal))
                    return Error(resolvedRole.Error,
                        "Use action='list' to find valid role IDs.");
                return Error(resolvedRole.Error,
                    "Use action='list' to find valid roles.");
            }

            var role = resolvedRole.Role;
            var id = role.GetAttributeValue<Guid>("roleid");
            var roleName = role.GetAttributeValue<string>("name") ?? "";
            var entry = MapRoleEntry(role);

            var privileges = GetRolePrivileges(id);
            var totalPrivileges = privileges.Count;

            if (totalPrivileges == 0 && string.IsNullOrWhiteSpace(entityFilter))
                return Success($"Security role '{roleName}' ({id}): 0 privileges.", new ManageRoleResult
                {
                    Action = "detail",
                    TotalCount = 0,
                    RoleId = id.ToString(),
                    RoleName = roleName,
                    Roles = [entry]
                });

            var resolvedEntityFilter = ResolveEntityFilter(entityFilter);
            if (resolvedEntityFilter != null && !resolvedEntityFilter.IsSuccess)
                return EntityFilterError(entityFilter, "detail", resolvedEntityFilter);
            entityFilter = resolvedEntityFilter?.Value.LogicalName;

            var groups = GroupPrivilegesByEntity(privileges, entityFilter)
                .Select(g => new RolePrivilegeGroup
                {
                    Entity = g.Key,
                    Count = g.Value.Count,
                    Privileges = g.Value
                        .OrderBy(p => p.Right)
                        .Select(p => new RolePrivilegeEntry { Right = p.Right, Depth = p.Depth })
                        .ToList()
                })
                .OrderBy(g => g.Entity)
                .ToList();
            var shownCount = groups.Sum(g => g.Count ?? 0);

            var filterSuffix = string.IsNullOrWhiteSpace(entityFilter) ? "" : $" on entity '{entityFilter}'";

            if (groups.Count == 0)
                return Success($"Security role '{roleName}' ({id}): 0 privileges{filterSuffix} (role has {totalPrivileges} total).", new ManageRoleResult
                {
                    Action = "detail",
                    TotalCount = 0,
                    RoleId = id.ToString(),
                    RoleName = roleName,
                    EntityName = entityFilter,
                    Roles = [entry]
                });

            return Success($"Security role '{roleName}' ({id}): {shownCount} privileges across {groups.Count} entities{filterSuffix} (role has {totalPrivileges} total).", new ManageRoleResult
            {
                Action = "detail",
                TotalCount = shownCount,
                RoleId = id.ToString(),
                RoleName = roleName,
                EntityName = entityFilter,
                Roles = [entry],
                PrivilegeGroups = groups
            });
        }

        private CallToolResult HandleUser(string userId, string entityFilter)
        {
            if (string.IsNullOrWhiteSpace(userId))
                return Error("user_id is required for 'user' action.",
                    "Provide the user's email or systemuserid GUID.");

            var userResult = GetUser(userId);
            if (userResult.MultipleUsers != null)
                return Error(userResult.Error,
                    "Re-call with the exact systemuserid GUID from the Detail list.",
                    BuildMultipleUsersDetails("user", userResult.MultipleUsers));
            if (userResult.Error != null)
                return Error(userResult.Error,
                    "Pass the user's email (internalemailaddress) or systemuserid GUID.");

            var userEntity = userResult.User;
            var userIdGuid = userEntity.GetAttributeValue<Guid>("systemuserid");
            var fullName = userEntity.GetAttributeValue<string>("fullname") ?? "";
            var email = userEntity.GetAttributeValue<string>("internalemailaddress") ?? "";
            var isDisabled = userEntity.GetAttributeValue<bool>("isdisabled");
            var buRef = userEntity.GetAttributeValue<EntityReference>("businessunitid");

            var userEntry = new RoleUserEntry
            {
                UserId = userIdGuid.ToString(),
                FullName = fullName,
                Email = email,
                Status = isDisabled ? "Disabled" : "Active",
                BusinessUnit = buRef?.Name ?? buRef?.Id.ToString()
            };

            var rolesFetchXml = $@"
<fetch>
  <entity name='systemuserroles'>
    <attribute name='roleid' />
    <link-entity name='role' from='roleid' to='roleid' alias='r'>
      <attribute name='name' />
      <attribute name='ismanaged' />
      <attribute name='iscustomizable' />
      <attribute name='businessunitid' />
    </link-entity>
    <filter>
      <condition attribute='systemuserid' operator='eq' value='{userIdGuid}' />
    </filter>
  </entity>
</fetch>";

            var rolesResult = _orgService.RetrieveMultiple(new FetchExpression(rolesFetchXml));

            var roleEntries = new List<RoleEntry>();
            var roleIds = new List<Guid>();
            foreach (var roleEntity in rolesResult.Entities)
            {
                var roleId = roleEntity.GetAttributeValue<Guid>("roleid");
                var roleName = GetAliasedValue<string>(roleEntity, "r.name") ?? "";
                var isManaged = GetAliasedValue<bool>(roleEntity, "r.ismanaged");
                var isCustomizable = GetAliasedValue<bool>(roleEntity, "r.iscustomizable");
                var roleBuRef = GetAliasedValue<EntityReference>(roleEntity, "r.businessunitid");

                roleIds.Add(roleId);
                roleEntries.Add(new RoleEntry
                {
                    RoleId = roleId.ToString(),
                    Name = roleName,
                    BusinessUnit = roleBuRef?.Name ?? roleBuRef?.Id.ToString(),
                    IsManaged = isManaged,
                    IsCustomizable = isCustomizable
                });
            }

            var teamRoleEntries = GetTeamRolesForUser(userIdGuid);
            var structured = new ManageRoleResult
            {
                Action = "user",
                TotalCount = roleEntries.Count,
                UserId = userIdGuid.ToString(),
                UserName = fullName,
                User = userEntry,
                Roles = roleEntries.Count > 0 ? roleEntries : null,
                RolesViaTeams = teamRoleEntries.Count > 0 ? teamRoleEntries : null
            };
            var allRoleIds = roleIds.Concat(teamRoleEntries.Select(t => Guid.Parse(t.RoleId))).ToList();

            var teamSuffix = teamRoleEntries.Count > 0
                ? $", {teamRoleEntries.Count} role(s) via team(s)"
                : "";

            if (!string.IsNullOrWhiteSpace(entityFilter))
            {
                var resolvedEntityFilter = ResolveEntityFilter(entityFilter);
                if (resolvedEntityFilter != null && !resolvedEntityFilter.IsSuccess)
                    return EntityFilterError(entityFilter, "user", resolvedEntityFilter);
                entityFilter = resolvedEntityFilter?.Value.LogicalName;

                structured.EntityName = entityFilter;

                var allPrivileges = new List<PrivilegeInfo>();
                foreach (var roleId in allRoleIds)
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
                    structured.EffectivePrivileges = null;
                    structured.MissingRights = null;
                    return Success($"User '{fullName}' ({userIdGuid}): {roleEntries.Count} role(s) assigned{teamSuffix}, NO privileges on entity '{entityFilter}'.", structured);
                }

                structured.EffectivePrivileges = entityPrivs
                    .OrderBy(p => p.Key)
                    .Select(p => new RolePrivilegeEntry { Right = p.Key, Depth = p.Value.Depth })
                    .ToList();

                var missingRights = StandardRights
                    .Where(r => !entityPrivs.ContainsKey(r))
                    .ToList();
                structured.MissingRights = missingRights.Count > 0 ? missingRights : null;

                var missingSuffix = missingRights.Count > 0 ? $", missing: {string.Join(", ", missingRights)}" : "";
                return Success($"User '{fullName}' ({userIdGuid}): {roleEntries.Count} role(s) assigned{teamSuffix}, {entityPrivs.Count} rights on entity '{entityFilter}'{missingSuffix}.", structured);
            }

            var countWord = roleEntries.Count == 1 ? "role" : "roles";
            return Success($"User '{fullName}' ({userIdGuid}): {roleEntries.Count} {countWord} assigned{teamSuffix}.", structured);
        }

        private CallToolResult HandleAssign(string userId, string teamId, string roleId)
        {
            return ApplyAssignment(userId, teamId, roleId, isAssign: true);
        }

        private CallToolResult HandleUnassign(string userId, string teamId, string roleId)
        {
            return ApplyAssignment(userId, teamId, roleId, isAssign: false);
        }

        private CallToolResult ApplyAssignment(string userId, string teamId, string roleId, bool isAssign)
        {
            var actionWord = isAssign ? "assign" : "unassign";
            var resultWord = isAssign ? "assigned" : "unassigned";

            if (string.IsNullOrWhiteSpace(userId) && string.IsNullOrWhiteSpace(teamId))
                return Error($"user_id (or team_id) is required for '{actionWord}' action.",
                    $"Pass user_id (email or systemuserid GUID) to {actionWord} the role for a user, or team_id (team GUID or exact name) for a team.");
            if (string.IsNullOrWhiteSpace(roleId))
                return Error($"role_id is required for '{actionWord}' action.",
                    "Pass the roleid GUID. Use action='list' to find valid role IDs.");
            if (!Guid.TryParse(roleId, out var roleGuid))
                return Error($"'{roleId}' is not a valid GUID for role_id.",
                    "Use action='list' to find valid role IDs.");

            var role = RetrieveRole(roleGuid);
            if (role == null)
                return Error($"No security role found with ID '{roleId}'.",
                    "Use action='list' to find valid role IDs.");
            var roleName = role.GetAttributeValue<string>("name") ?? "";

            string targetLogical;
            Guid targetId;
            string targetName;

            if (!string.IsNullOrWhiteSpace(teamId))
            {
                var teamResult = ResolveTeam(teamId);
                if (teamResult.MultipleTeams != null)
                    return Error(teamResult.Error,
                        "Re-call with the exact teamid GUID from the Detail list.",
                        BuildMultipleTeamsDetails(actionWord, teamResult.MultipleTeams));
                if (teamResult.Error != null)
                    return Error(teamResult.Error,
                        "Pass the teamid GUID or the exact team name.");

                targetLogical = "team";
                targetId = teamResult.Team.GetAttributeValue<Guid>("teamid");
                targetName = teamResult.Team.GetAttributeValue<string>("name") ?? "";
            }
            else
            {
                var userResult = GetUser(userId);
                if (userResult.MultipleUsers != null)
                    return Error(userResult.Error,
                        "Re-call with the exact systemuserid GUID from the Detail list.",
                        BuildMultipleUsersDetails(actionWord, userResult.MultipleUsers));
                if (userResult.Error != null)
                    return Error(userResult.Error,
                        "Pass the user's email (internalemailaddress) or systemuserid GUID.");

                targetLogical = "systemuser";
                targetId = userResult.User.GetAttributeValue<Guid>("systemuserid");
                targetName = userResult.User.GetAttributeValue<string>("fullname") ?? "";
            }

            var relationship = targetLogical == "team"
                ? "teamroles_association"
                : "systemuserroles_association";
            var targetLabel = targetLogical == "team" ? "team" : "user";

            var structured = new ManageRoleResult
            {
                Action = resultWord,
                RoleId = roleGuid.ToString(),
                RoleName = roleName,
                Status = resultWord
            };
            if (targetLogical == "team")
            {
                structured.TeamId = targetId.ToString();
                structured.TeamName = targetName;
            }
            else
            {
                structured.UserId = targetId.ToString();
                structured.UserName = targetName;
            }

            if (_options.DryRun)
            {
                structured.Action = actionWord;
                structured.Status = "not_executed";
                var direction = isAssign ? "to" : "from";
                return DryRun($"Would {actionWord.ToUpperInvariant()} role '{roleName}' ({roleGuid}) {direction} {targetLabel} '{targetName}' ({targetId}).", structured);
            }

            if (isAssign)
                DataverseMutationExecutor.Associate(_context, _orgService,
                    targetLogical,
                    targetId,
                    new Relationship(relationship),
                    new EntityReferenceCollection { new EntityReference("role", roleGuid) });
            else
                DataverseMutationExecutor.Disassociate(_context, _orgService,
                    targetLogical,
                    targetId,
                    new Relationship(relationship),
                    new EntityReferenceCollection { new EntityReference("role", roleGuid) });

            var verb = isAssign ? "Assigned" : "Unassigned";
            var preposition = isAssign ? "to" : "from";
            return Success($"{verb} role '{roleName}' {preposition} {targetLabel} '{targetName}'.", structured);
        }

        private CallToolResult HandleCreate(string roleName, string businessUnitId)
        {
            if (string.IsNullOrWhiteSpace(roleName))
                return Error("role_name is required for 'create' action.",
                    "Pass role_name — the display name for the new role.");

            Guid buId;
            string buName;

            if (!string.IsNullOrWhiteSpace(businessUnitId))
            {
                if (!Guid.TryParse(businessUnitId, out buId))
                    return Error($"'{businessUnitId}' is not a valid GUID for business_unit_id.",
                        "Pass the businessunitid GUID of an existing business unit, or omit business_unit_id to use the root business unit.");

                var buQuery = new QueryExpression("businessunit")
                {
                    ColumnSet = new ColumnSet("name")
                };
                buQuery.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
                var buResult = _orgService.RetrieveMultiple(buQuery);
                if (buResult.Entities.Count == 0)
                    return Error($"No business unit found with ID '{businessUnitId}'.",
                        "Pass the businessunitid GUID of an existing business unit, or omit business_unit_id to use the root business unit.");
                buName = buResult.Entities[0].GetAttributeValue<string>("name") ?? "";
            }
            else
            {
                var rootBuQuery = new QueryExpression("businessunit")
                {
                    ColumnSet = new ColumnSet("businessunitid", "name")
                };
                rootBuQuery.Criteria.AddCondition("parentbusinessunitid", ConditionOperator.Null);
                var rootResult = _orgService.RetrieveMultiple(rootBuQuery);
                if (rootResult.Entities.Count == 0)
                    return Error("Could not find the root business unit.",
                        "Pass business_unit_id of an existing business unit explicitly.");
                buId = rootResult.Entities[0].GetAttributeValue<Guid>("businessunitid");
                buName = rootResult.Entities[0].GetAttributeValue<string>("name") ?? "";
            }

            if (_options.DryRun)
                return DryRun($"Would CREATE role '{roleName}' in business unit '{buName}' ({buId}).", new ManageRoleResult
                {
                    Action = "create",
                    RoleName = roleName,
                    BusinessUnitId = buId.ToString(),
                    Status = "not_executed",
                    CreateMode = "metadata"
                });

            var roleEntity = new Entity("role")
            {
                ["name"] = roleName,
                ["businessunitid"] = new EntityReference("businessunit", buId)
            };

            var newId = DataverseMutationExecutor.Create(_context, _orgService, roleEntity);

            return Success($"Created role '{roleName}' ({newId}) in business unit '{buName}'.", new ManageRoleResult
            {
                Action = "created",
                RoleId = newId.ToString(),
                RoleName = roleName,
                BusinessUnitId = buId.ToString(),
                Status = "created",
                CreateMode = SolutionComponentCreateMode.None.ToString()
            });
        }

        private CallToolResult HandleUpdate(string roleId, string roleName, string privilegesJson)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return Error("role_id is required for 'update' action.",
                    "Pass the roleid GUID of the role to update. Use action='list' to find valid role IDs.");
            if (string.IsNullOrWhiteSpace(roleName) && string.IsNullOrWhiteSpace(privilegesJson))
                return Error("Nothing to update. Provide role_name (rename) and/or privileges (JSON array).",
                    "Example privileges: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"}]. Use depth 'None' to remove a privilege.");
            if (!Guid.TryParse(roleId, out var id))
                return Error($"'{roleId}' is not a valid GUID.",
                    "Use action='list' to find valid role IDs.");

            var existingRole = RetrieveRole(id);
            if (existingRole == null)
                return Error($"No security role found with ID '{roleId}'.",
                    "Use action='list' to find valid role IDs.");

            var isCustomizable = existingRole.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;
            if (!isCustomizable)
                return Error($"Role '{existingRole.GetAttributeValue<string>("name")}' is not customizable and cannot be updated.",
                    "Use action='copy' to clone its privileges into a new custom role, then update the copy.");

            var oldName = existingRole.GetAttributeValue<string>("name") ?? "";
            var hasRename = !string.IsNullOrWhiteSpace(roleName) && !string.Equals(roleName, oldName, StringComparison.Ordinal);

            List<PrivilegeChangeInput> changes = null;
            if (!string.IsNullOrWhiteSpace(privilegesJson))
            {
                try
                {
                    changes = System.Text.Json.JsonSerializer.Deserialize<List<PrivilegeChangeInput>>(privilegesJson,
                        new System.Text.Json.JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                }
                catch (System.Text.Json.JsonException ex)
                {
                    return Error($"privileges JSON is invalid: {ex.Message}",
                        "Format: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"}].");
                }
                if (changes == null || changes.Count == 0)
                    return Error("privileges JSON must be a non-empty array.",
                        "Format: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"}].");
            }

            var added = new List<string>();
            var updatedList = new List<string>();
            var removed = new List<string>();
            Dictionary<string, PrivilegeInfo> current = null;

            if (changes != null)
            {
                current = new Dictionary<string, PrivilegeInfo>(StringComparer.OrdinalIgnoreCase);
                foreach (var p in GetRolePrivileges(id))
                    current[$"{p.EntityName}|{p.Right}"] = p;

                foreach (var change in changes)
                {
                    var rightRaw = change.Right?.Trim();
                    var isWildcard = rightRaw == "*" || string.Equals(rightRaw, "all", StringComparison.OrdinalIgnoreCase);
                    if (!isWildcard)
                    {
                        var rightError = ValidateRight(rightRaw);
                        if (rightError != null) return Error(rightError.Value.Message, rightError.Value.Hint);
                    }
                    var depthError = ValidateDepth(change.Depth);
                    if (depthError != null) return Error(depthError.Value.Message, depthError.Value.Hint);

                    var resolvedEntity = DisplayNameFirstResolver.ResolveEntity(_orgService, change.Entity?.Trim(), "manage_role");
                    if (!resolvedEntity.IsSuccess)
                    {
                        if (resolvedEntity.Status == ResolveStatus.Ambiguous)
                        {
                            var entityMatches = resolvedEntity.Candidates.Select(c => new TableMatchEntry
                            {
                                DisplayName = c.DisplayName ?? "",
                                LogicalName = c.LogicalName ?? "",
                                SchemaName = c.SchemaName ?? ""
                            }).ToList();
                            return Error(
                                $"privileges entity '{change.Entity}': {resolvedEntity.Error.Split("\r\n")[0]}",
                                "Re-call with a more specific entity value in privileges[].entity.",
                                new ManageRoleResult { Action = "update", EntityMatches = entityMatches });
                        }
                        return Error(
                            $"privileges entity '{change.Entity}': {resolvedEntity.Error.Split("\r\n")[0]}",
                            "Fix privileges[].entity: pass a valid entity Display Name or logical name (use get_tables to discover).");
                    }
                    var entityLogical = resolvedEntity.Value.LogicalName;

                    var isRemove = string.Equals(change.Depth?.Trim(), "None", StringComparison.OrdinalIgnoreCase);

                    if (isWildcard)
                    {
                        var rights = isRemove
                            ? current.Keys
                                .Where(k => k.StartsWith(entityLogical + "|", StringComparison.OrdinalIgnoreCase))
                                .Select(k => k.Substring(entityLogical.Length + 1))
                                .ToList()
                            : StandardRights.ToList();

                        foreach (var right in rights)
                        {
                            var applyError = ApplyPrivilegeChange(current, entityLogical, right, change.Depth, isRemove, added, updatedList, removed);
                            if (applyError != null) return Error(applyError.Value.Message, applyError.Value.Hint);
                        }
                        continue;
                    }

                    var applyErrorSingle = ApplyPrivilegeChange(current, entityLogical, rightRaw, change.Depth, isRemove, added, updatedList, removed);
                    if (applyErrorSingle != null) return Error(applyErrorSingle.Value.Message, applyErrorSingle.Value.Hint);
                }

                if (added.Count == 0 && updatedList.Count == 0 && removed.Count == 0 && !hasRename)
                    return Error("No effective privilege changes. All requested privileges already match the current role.",
                        "Use action='detail' to see current privileges, then change a depth, add a new right, or set depth 'None' to remove.");
            }

            var renamePart = hasRename ? $" → rename to '{roleName.Trim()}'" : "";
            var privPart = changes == null ? "" : $", privileges: {added.Count} added, {updatedList.Count} depth-changed, {removed.Count} removed";

            if (_options.DryRun)
                return DryRun($"Would UPDATE role '{oldName}' ({id}){renamePart}{privPart}.", new ManageRoleResult
                {
                    Action = "update",
                    RoleId = id.ToString(),
                    RoleName = hasRename ? roleName.Trim() : null,
                    Status = "not_executed",
                    PrivilegesAdded = added.Count > 0 ? added : null,
                    PrivilegesUpdated = updatedList.Count > 0 ? updatedList : null,
                    PrivilegesRemoved = removed.Count > 0 ? removed : null
                });

            // Backup runs only when actually mutating (after DryRun check above)
            var backupBuRef = existingRole.GetAttributeValue<EntityReference>("businessunitid");
            var backupPath = RoleBackupHelper.SaveBackup(id, oldName, backupBuRef?.Id ?? Guid.Empty,
                GetRolePrivileges(id).Select(ToBackupPrivilege).ToList(), _workspaceFolder);

            if (hasRename)
            {
                var updateEntity = new Entity("role", id)
                {
                    ["name"] = roleName.Trim()
                };
                DataverseMutationExecutor.Update(_context, _orgService, updateEntity);
            }

            if (changes != null)
            {
                var finalPrivileges = new RolePrivilege[current.Count];
                var i = 0;
                foreach (var p in current.Values)
                {
                    finalPrivileges[i] = new RolePrivilege
                    {
                        PrivilegeId = p.PrivilegeId,
                        Depth = p.DepthMask >= 0 ? (PrivilegeDepth)MaskToDepthValue(p.DepthMask) : (PrivilegeDepth)ReverseDepthMask(p.Depth)
                    };
                    i++;
                }

                DataverseMutationExecutor.Execute(_context, _orgService, new ReplacePrivilegesRoleRequest
                {
                    RoleId = id,
                    Privileges = finalPrivileges
                });
            }

            var displayName = hasRename ? $"{oldName}' → '{roleName.Trim()}" : oldName;
            return Success($"Updated role '{displayName}' ({id}){privPart}. Backup saved.", new ManageRoleResult
            {
                Action = "updated",
                RoleId = id.ToString(),
                RoleName = hasRename ? roleName.Trim() : oldName,
                Status = "updated",
                PrivilegesAdded = added.Count > 0 ? added : null,
                PrivilegesUpdated = updatedList.Count > 0 ? updatedList : null,
                PrivilegesRemoved = removed.Count > 0 ? removed : null,
                BackupPath = backupPath
            });
        }

        private static readonly string[] StandardRights =
            { "Create", "Read", "Write", "Delete", "Append", "AppendTo", "Assign", "Share" };

        private (string Message, string Hint)? ApplyPrivilegeChange(
            Dictionary<string, PrivilegeInfo> current,
            string entityLogical,
            string right,
            string depthInput,
            bool isRemove,
            List<string> added,
            List<string> updatedList,
            List<string> removed)
        {
            var key = $"{entityLogical}|{right}";

            if (isRemove)
            {
                if (current.TryGetValue(key, out var existing) && current.Remove(key))
                    removed.Add($"{entityLogical}:{right}");
                return null;
            }

            var depth = NormalizeDepth(depthInput);
            if (current.TryGetValue(key, out var existingPriv))
            {
                if (!string.Equals(existingPriv.Depth, depth, StringComparison.Ordinal))
                {
                    existingPriv.Depth = depth;
                    existingPriv.DepthMask = -1;
                    updatedList.Add($"{entityLogical}:{right}={depth}");
                }
                return null;
            }

            var privId = FindPrivilegeId(right, entityLogical);
            if (privId == null)
                return ($"No privilege found for right '{right}' on entity '{entityLogical}'.",
                    "Check the right value and entity name. Use action='detail' with entity_name to see privileges the role already has.");
            current[key] = new PrivilegeInfo
            {
                FullName = $"prv{right}{entityLogical}",
                Right = right,
                EntityName = entityLogical,
                Depth = depth,
                DepthMask = -1,
                PrivilegeId = privId.Value
            };
            added.Add($"{entityLogical}:{right}={depth}");
            return null;
        }

        private static (string Message, string Hint)? ValidateRight(string right)
        {
            if (string.IsNullOrWhiteSpace(right) || !StandardRights.Contains(right.Trim(), StringComparer.OrdinalIgnoreCase))
                return ($"Invalid privilege right '{right}'.",
                    $"Valid values: {string.Join(", ", StandardRights)}, or '*' for all rights on the entity.");
            return null;
        }

        private static (string Message, string Hint)? ValidateDepth(string depth)
        {
            var valid = new[] { "User", "BusinessUnit", "BU", "Parent:ChildBU", "Organization", "Org", "None" };
            if (string.IsNullOrWhiteSpace(depth) || !valid.Contains(depth.Trim(), StringComparer.OrdinalIgnoreCase))
                return ($"Invalid privilege depth '{depth}'.",
                    "Valid values: User, BusinessUnit, Parent:ChildBU, Organization, None (remove).");
            return null;
        }

        private static string NormalizeDepth(string depth) => depth.Trim().ToLowerInvariant() switch
        {
            "bu" => "BusinessUnit",
            "org" => "Organization",
            var d => char.ToUpperInvariant(d[0]) + d.Substring(1)
        };

        private static int MaskToDepthValue(int depthMask) => depthMask switch
        {
            1 => 0,
            2 => 1,
            4 => 2,
            8 => 3,
            _ => 0
        };

        private Guid? FindPrivilegeId(string right, string entityLogical)
        {
            var name = $"prv{right}{entityLogical}".Replace("[", "[[]").Replace("%", "[%]");
            var query = new QueryExpression("privilege")
            {
                ColumnSet = new ColumnSet("privilegeid"),
                TopCount = 2
            };
            query.Criteria.AddCondition("name", ConditionOperator.Like, name);
            var result = _orgService.RetrieveMultiple(query);
            return result.Entities.Count == 1 ? result.Entities[0].GetAttributeValue<Guid>("privilegeid") : null;
        }

        private sealed class PrivilegeChangeInput
        {
            public string Entity { get; set; }
            public string Right { get; set; }
            public string Depth { get; set; }
        }

        private CallToolResult HandleDelete(string roleId)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return Error("role_id is required for 'delete' action.",
                    "Pass the roleid GUID of the role to delete. Use action='list' to find valid role IDs.");
            if (!Guid.TryParse(roleId, out var id))
                return Error($"'{roleId}' is not a valid GUID.",
                    "Use action='list' to find valid role IDs.");

            var existingRole = RetrieveRole(id);
            if (existingRole == null)
                return Error($"No security role found with ID '{roleId}'.",
                    "Use action='list' to find valid role IDs.");

            var isManaged = existingRole.GetAttributeValue<bool>("ismanaged");
            if (isManaged)
                return Error($"Role '{existingRole.GetAttributeValue<string>("name")}' is managed and cannot be deleted.",
                    "Use action='copy' to clone its privileges into a new custom role, then adjust user assignments.");

            var roleName = existingRole.GetAttributeValue<string>("name") ?? "";

            if (_options.DryRun)
                return DryRun($"Would DELETE role '{roleName}' ({id}). A backup would be saved first; restore re-creates the role with a new ID.", new ManageRoleResult
                {
                    Action = "delete",
                    RoleId = id.ToString(),
                    RoleName = roleName,
                    Status = "not_executed"
                });

            // Backup runs only when actually mutating (after DryRun check above)
            var deleteBuRef = existingRole.GetAttributeValue<EntityReference>("businessunitid");
            var backupPath = RoleBackupHelper.SaveBackup(id, roleName, deleteBuRef?.Id ?? Guid.Empty,
                GetRolePrivileges(id).Select(ToBackupPrivilege).ToList(), _workspaceFolder);

            DataverseMutationExecutor.Delete(_context, _orgService, "role", id);

            return Success($"Deleted role '{roleName}' ({id}). Backup saved.", new ManageRoleResult
            {
                Action = "deleted",
                RoleId = id.ToString(),
                RoleName = roleName,
                Status = "deleted",
                BackupPath = backupPath
            });
        }

        private CallToolResult HandleCopy(string roleId, string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return Error("role_id is required for 'copy' action.",
                    "Pass the roleid GUID of the role to copy. Use action='list' to find valid role IDs.");
            if (string.IsNullOrWhiteSpace(roleName))
                return Error("role_name is required for 'copy' action (name for the new role).",
                    "Pass role_name — the display name for the cloned role.");
            if (!Guid.TryParse(roleId, out var sourceId))
                return Error($"'{roleId}' is not a valid GUID.",
                    "Use action='list' to find valid role IDs.");

            var sourceRole = RetrieveRole(sourceId);
            if (sourceRole == null)
                return Error($"No security role found with ID '{roleId}'.",
                    "Use action='list' to find valid role IDs.");

            var sourceRoleName = sourceRole.GetAttributeValue<string>("name") ?? "";
            var buRef = sourceRole.GetAttributeValue<EntityReference>("businessunitid");
            var buId = buRef?.Id ?? Guid.Empty;

            var privileges = GetRolePrivileges(sourceId);

            if (_options.DryRun)
                return DryRun($"Would COPY role '{sourceRoleName}' ({sourceId}) → new role '{roleName}' with {privileges.Count} privileges.", new ManageRoleResult
                {
                    Action = "copy",
                    SourceRoleId = sourceId.ToString(),
                    RoleName = roleName,
                    BusinessUnitId = buId.ToString(),
                    PrivilegesCopied = privileges.Count,
                    Status = "not_executed",
                    CreateMode = "metadata"
                });

            var newRoleEntity = new Entity("role")
            {
                ["name"] = roleName,
                ["businessunitid"] = new EntityReference("businessunit", buId)
            };
            var newRoleId = DataverseMutationExecutor.Create(_context, _orgService, newRoleEntity);

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
                DataverseMutationExecutor.Execute(_context, _orgService, addPrivRequest);
            }

            return Success($"Copied role '{sourceRoleName}' ({sourceId}) → '{roleName}' ({newRoleId}) with {privileges.Count} privileges.", new ManageRoleResult
            {
                Action = "copied",
                RoleId = newRoleId.ToString(),
                RoleName = roleName,
                SourceRoleId = sourceId.ToString(),
                PrivilegesCopied = privileges.Count,
                Status = "copied"
            });
        }

        private CallToolResult HandleRestore(string backupPath)
        {
            if (string.IsNullOrWhiteSpace(backupPath))
                return Error("backup_path is required for 'restore' action.",
                    "Pass the backupPath from a previous update/delete result. Backup files are at: .devkit/manage_role/");
            var path = backupPath.Trim();
            if (!path.EndsWith(".role.json", StringComparison.OrdinalIgnoreCase))
                return Error($"backup_path must be a .role.json backup file: '{path}'.",
                    "A backup file is {roleId}_{timestamp}.role.json at: .devkit/manage_role/ — written by update/delete (result's backupPath).");
            if (!File.Exists(path))
                return Error($"Backup file not found: '{path}'.",
                    "Check the file path. Backup files are at: .devkit/manage_role/");

            RoleBackupSnapshot snapshot;
            try
            {
                snapshot = RoleBackupHelper.LoadBackup(path);
            }
            catch (System.Text.Json.JsonException ex)
            {
                return Error($"Backup file is not valid JSON: '{path}'. {ex.Message}",
                    "The backup file may be corrupted — fix the JSON or use an earlier backup.");
            }
            if (snapshot == null || !Guid.TryParse(snapshot.RoleId, out var backupRoleId))
                return Error($"Backup file has no valid roleId: '{path}'.",
                    "The backup file may be corrupted — fix the JSON or use an earlier backup.");

            var snapshotPrivileges = snapshot.Privileges ?? new List<RoleBackupPrivilege>();
            var existingRole = RetrieveRole(backupRoleId);

            if (existingRole != null)
            {
                var isCustomizable = existingRole.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;
                if (!isCustomizable)
                    return Error($"Role '{existingRole.GetAttributeValue<string>("name")}' is not customizable and cannot be restored.",
                        "Use action='copy' to clone its privileges into a new custom role, then update the copy.");

                var currentName = existingRole.GetAttributeValue<string>("name") ?? "";
                var restoreName = string.IsNullOrWhiteSpace(snapshot.RoleName) ? currentName : snapshot.RoleName;
                var renamePart = string.Equals(currentName, restoreName, StringComparison.Ordinal) ? "" : $", rename '{currentName}' → '{restoreName}'";

                if (_options.DryRun)
                    return DryRun($"Would RESTORE role '{restoreName}' ({backupRoleId}) from backup — {snapshotPrivileges.Count} privileges{renamePart}.", new ManageRoleResult
                    {
                        Action = "restore",
                        RoleId = backupRoleId.ToString(),
                        RoleName = restoreName,
                        Status = "not_executed"
                    });

                // Backup pre-restore state only when actually mutating
                var currentBuRef = existingRole.GetAttributeValue<EntityReference>("businessunitid");
                var preRestoreBackupPath = RoleBackupHelper.SaveBackup(backupRoleId, currentName, currentBuRef?.Id ?? Guid.Empty,
                    GetRolePrivileges(backupRoleId).Select(ToBackupPrivilege).ToList(), _workspaceFolder);

                if (!string.Equals(currentName, restoreName, StringComparison.Ordinal))
                {
                    var renameEntity = new Entity("role", backupRoleId)
                    {
                        ["name"] = restoreName
                    };
                    DataverseMutationExecutor.Update(_context, _orgService, renameEntity);
                }

                var finalPrivileges = new RolePrivilege[snapshotPrivileges.Count];
                for (var i = 0; i < snapshotPrivileges.Count; i++)
                {
                    finalPrivileges[i] = new RolePrivilege
                    {
                        PrivilegeId = Guid.Parse(snapshotPrivileges[i].PrivilegeId),
                        Depth = (PrivilegeDepth)ReverseDepthMask(snapshotPrivileges[i].Depth)
                    };
                }
                DataverseMutationExecutor.Execute(_context, _orgService, new ReplacePrivilegesRoleRequest
                {
                    RoleId = backupRoleId,
                    Privileges = finalPrivileges
                });

                return Success($"Restored role '{restoreName}' ({backupRoleId}) from backup — {snapshotPrivileges.Count} privileges{renamePart}. Backup saved.", new ManageRoleResult
                {
                    Action = "restored",
                    RoleId = backupRoleId.ToString(),
                    RoleName = restoreName,
                    Status = "restored",
                    PrivilegesCopied = snapshotPrivileges.Count,
                    BackupPath = preRestoreBackupPath
                });
            }

            if (_options.DryRun)
                return DryRun($"Would RESTORE (re-create) role '{snapshot.RoleName}' from backup — original role ({backupRoleId}) no longer exists; a new role ID will be assigned. {snapshotPrivileges.Count} privileges.", new ManageRoleResult
                {
                    Action = "restore",
                    RoleName = snapshot.RoleName,
                    Status = "not_executed"
                });

            var buId = Guid.TryParse(snapshot.BusinessUnitId, out var parsedBuId) ? parsedBuId : Guid.Empty;
            var newRoleEntity = new Entity("role")
            {
                ["name"] = snapshot.RoleName
            };
            if (buId != Guid.Empty)
                newRoleEntity["businessunitid"] = new EntityReference("businessunit", buId);
            var newRoleId = DataverseMutationExecutor.Create(_context, _orgService, newRoleEntity);

            if (snapshotPrivileges.Count > 0)
            {
                var addPrivileges = new RolePrivilege[snapshotPrivileges.Count];
                for (var i = 0; i < snapshotPrivileges.Count; i++)
                {
                    addPrivileges[i] = new RolePrivilege
                    {
                        PrivilegeId = Guid.Parse(snapshotPrivileges[i].PrivilegeId),
                        Depth = (PrivilegeDepth)ReverseDepthMask(snapshotPrivileges[i].Depth)
                    };
                }
                DataverseMutationExecutor.Execute(_context, _orgService, new AddPrivilegesRoleRequest
                {
                    RoleId = newRoleId,
                    Privileges = addPrivileges
                });
            }

            return Success($"Restored role '{snapshot.RoleName}' as NEW role ({newRoleId}) from backup — original ({backupRoleId}) was deleted. {snapshotPrivileges.Count} privileges restored. Re-assign users/teams yourself — assignments are not backed up.", new ManageRoleResult
            {
                Action = "restored",
                RoleId = newRoleId.ToString(),
                RoleName = snapshot.RoleName,
                SourceRoleId = backupRoleId.ToString(),
                Status = "restored",
                PrivilegesCopied = snapshotPrivileges.Count
            });
        }

        private static RoleBackupPrivilege ToBackupPrivilege(PrivilegeInfo p) => new RoleBackupPrivilege
        {
            PrivilegeId = p.PrivilegeId.ToString(),
            Name = p.FullName,
            Depth = p.Depth
        };

        private CallToolResult RequireSystemAdministrator(string action)
        {
            if (RoleGateHelper.IsSystemAdministrator(_orgService))
                return null;

            var haveRoles = RoleGateHelper.GetCurrentRoleNames(_orgService);
            var haveList = haveRoles.Count > 0
                ? string.Join(", ", haveRoles)
                : "(no roles assigned)";
            const string requiredRoleName = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName;
            return Error(
                $"Action '{action}' requires the '{requiredRoleName}' role. The calling user does not have it.",
                $"Security role mutations change org-wide access. Ask a System Administrator to assign the '{requiredRoleName}' role to your user, then retry. Current roles on the calling user: {haveList}.");
        }

        private (Entity Role, string Error, List<RoleEntry> AmbiguousRoles) ResolveRoleForDetail(string roleReference)
        {
            if (string.IsNullOrWhiteSpace(roleReference))
                return (null, "role_id or role_name is required for 'detail' action.", null);

            roleReference = roleReference.Trim();

            var nameMatches = FindRootRolesByNameContains(roleReference);
            if (nameMatches.Count == 1)
                return (nameMatches[0], null, null);

            if (nameMatches.Count > 1)
            {
                var exactMatches = nameMatches
                    .Where(r => string.Equals(r.GetAttributeValue<string>("name"), roleReference, StringComparison.OrdinalIgnoreCase))
                    .ToList();
                if (exactMatches.Count == 1)
                    return (exactMatches[0], null, null);

                return (null, $"{nameMatches.Count} roles match '{roleReference}'.", nameMatches.Select(MapRoleEntry).ToList());
            }

            if (!Guid.TryParse(roleReference, out var id))
                return (null, $"'{roleReference}' is not a valid GUID.", null);

            var role = RetrieveRole(id);
            if (role == null)
                return (null, $"No security role found with ID '{roleReference}'.", null);

            return (role, null, null);
        }

        private DataCollection<Entity> FindRootRolesByNameContains(string roleName)
        {
            var escapedName = roleName.Replace("[", "[[]").Replace("%", "[%]");
            var query = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon"),
                TopCount = 50
            };
            query.Criteria.AddCondition("parentroleid", ConditionOperator.Null);
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");
            query.AddOrder("name", OrderType.Ascending);

            return _orgService.RetrieveMultiple(query).Entities;
        }

        private Entity RetrieveRole(Guid roleId)
        {
            var query = new QueryExpression("role")
            {
                ColumnSet = new ColumnSet(
                    "roleid", "name", "businessunitid", "ismanaged",
                    "iscustomizable", "createdon")
            };
            query.Criteria.AddCondition("roleid", ConditionOperator.Equal, roleId);
            var result = _orgService.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private (Entity User, string Error, List<Entity> MultipleUsers) GetUser(string userId)
        {
            var userQuery = new QueryExpression("systemuser")
            {
                ColumnSet = new ColumnSet("systemuserid", "fullname", "internalemailaddress", "isdisabled", "businessunitid")
            };

            if (Guid.TryParse(userId, out var userGuid))
                userQuery.Criteria.AddCondition("systemuserid", ConditionOperator.Equal, userGuid);
            else
                userQuery.Criteria.AddCondition("internalemailaddress", ConditionOperator.Equal, userId);

            var userResult = _orgService.RetrieveMultiple(userQuery);
            if (userResult.Entities.Count == 0)
                return (null, $"No user found with '{userId}'.", null);

            if (userResult.Entities.Count > 1)
                return (null, $"{userResult.Entities.Count} users match '{userId}'.", userResult.Entities.ToList());

            return (userResult.Entities[0], null, null);
        }

        private static object BuildMultipleUsersDetails(string action, List<Entity> users) => new
        {
            action,
            totalCount = users.Count,
            users = users.Select(u => new
            {
                systemUserId = u.GetAttributeValue<Guid>("systemuserid"),
                fullName = u.GetAttributeValue<string>("fullname") ?? "",
                email = u.GetAttributeValue<string>("internalemailaddress") ?? "",
                status = u.GetAttributeValue<bool>("isdisabled") ? "Disabled" : "Active",
                businessUnit = u.GetAttributeValue<EntityReference>("businessunitid")?.Name ?? ""
            }).ToList()
        };

        private (Entity Team, string Error, List<Entity> MultipleTeams) ResolveTeam(string teamId)
        {
            var query = new QueryExpression("team")
            {
                ColumnSet = new ColumnSet("teamid", "name", "teamtype", "businessunitid")
            };

            if (Guid.TryParse(teamId, out var teamGuid))
                query.Criteria.AddCondition("teamid", ConditionOperator.Equal, teamGuid);
            else
                query.Criteria.AddCondition("name", ConditionOperator.Equal, teamId);

            var result = _orgService.RetrieveMultiple(query);
            if (result.Entities.Count == 0)
                return (null, $"No team found with '{teamId}'.", null);

            if (result.Entities.Count > 1)
                return (null, $"{result.Entities.Count} teams match '{teamId}'.", result.Entities.ToList());

            return (result.Entities[0], null, null);
        }

        private static object BuildMultipleTeamsDetails(string action, List<Entity> teams) => new
        {
            action,
            totalCount = teams.Count,
            teams = teams.Select(t => new
            {
                teamId = t.GetAttributeValue<Guid>("teamid"),
                name = t.GetAttributeValue<string>("name") ?? "",
                teamType = MapTeamType(t.GetAttributeValue<OptionSetValue>("teamtype")?.Value),
                businessUnit = t.GetAttributeValue<EntityReference>("businessunitid")?.Name ?? ""
            }).ToList()
        };

        private static string MapTeamType(int? teamType) => teamType switch
        {
            0 => "Owner",
            1 => "Access",
            2 => "Group",
            _ => null
        };

        private List<TeamRoleEntry> GetTeamRolesForUser(Guid userId)
        {
            var teamsFetchXml = $@"
<fetch>
  <entity name='team'>
    <attribute name='teamid' />
    <attribute name='name' />
    <attribute name='teamtype' />
    <link-entity name='teammembership' from='teamid' to='teamid' alias='m'>
      <filter>
        <condition attribute='systemuserid' operator='eq' value='{userId}' />
      </filter>
    </link-entity>
    <order attribute='name' />
  </entity>
</fetch>";

            var teams = _orgService.RetrieveMultiple(new FetchExpression(teamsFetchXml)).Entities;
            if (teams.Count == 0)
                return [];

            var entries = new List<TeamRoleEntry>();

            foreach (var team in teams)
            {
                var teamId = team.GetAttributeValue<Guid>("teamid");
                var teamRolesFetchXml = $@"
<fetch>
  <entity name='teamroles'>
    <attribute name='roleid' />
    <link-entity name='role' from='roleid' to='roleid' alias='r'>
      <attribute name='name' />
    </link-entity>
    <filter>
      <condition attribute='teamid' operator='eq' value='{teamId}' />
    </filter>
  </entity>
</fetch>";

                var teamRoles = _orgService.RetrieveMultiple(new FetchExpression(teamRolesFetchXml)).Entities;
                foreach (var teamRole in teamRoles)
                {
                    entries.Add(new TeamRoleEntry
                    {
                        TeamId = teamId.ToString(),
                        TeamName = team.GetAttributeValue<string>("name") ?? "",
                        TeamType = MapTeamType(team.GetAttributeValue<OptionSetValue>("teamtype")?.Value),
                        RoleId = teamRole.GetAttributeValue<Guid>("roleid").ToString(),
                        RoleName = GetAliasedValue<string>(teamRole, "r.name") ?? ""
                    });
                }
            }

            return entries;
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

                var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));

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
                        DepthMask = depthMask,
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



        private static RoleEntry MapRoleEntry(Entity role) => new()
        {
            RoleId = role.GetAttributeValue<Guid>("roleid").ToString(),
            Name = role.GetAttributeValue<string>("name") ?? "",
            BusinessUnit = role.GetAttributeValue<EntityReference>("businessunitid")?.Name,
            IsManaged = role.GetAttributeValue<bool>("ismanaged"),
            IsCustomizable = role.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true
        };

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

        private ResolveResult<EntityMetadata> ResolveEntityFilter(string entityFilter)
        {
            if (string.IsNullOrWhiteSpace(entityFilter))
                return null;

            return DisplayNameFirstResolver.ResolveEntity(_orgService, entityFilter.Trim(), "manage_role");
        }

        private CallToolResult EntityFilterError(string entityFilter, string action, ResolveResult<EntityMetadata> resolved)
        {
            if (resolved.Status == ResolveStatus.Ambiguous)
            {
                var entityMatches = resolved.Candidates.Select(c => new TableMatchEntry
                {
                    DisplayName = c.DisplayName ?? "",
                    LogicalName = c.LogicalName ?? "",
                    SchemaName = c.SchemaName ?? ""
                }).ToList();
                return Error(
                    $"entity_name '{entityFilter.Trim()}': {resolved.Error.Split("\r\n")[0]}",
                    "Re-call with a more specific entity_name value.",
                    new ManageRoleResult { Action = action, EntityMatches = entityMatches });
            }
            return Error(
                $"entity_name '{entityFilter.Trim()}': {resolved.Error.Split("\r\n")[0]}",
                "Use get_tables to discover valid entity names.");
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
            "User" => 0,
            "BusinessUnit" => 1,
            "Parent:ChildBU" => 2,
            "Organization" => 3,
            _ => 0
        };

        private static T GetAliasedValue<T>(Entity entity, string alias)
        {
            if (entity.Attributes.TryGetValue(alias, out var obj) && obj is AliasedValue av)
                return av.Value is T val ? val : default;
            return default;
        }

        private sealed class PrivilegeInfo
        {
            public string FullName { get; set; }
            public string Right { get; set; }
            public string EntityName { get; set; }
            public string Depth { get; set; }
            public int DepthMask { get; set; }
            public Guid PrivilegeId { get; set; }
        }

    }
}
