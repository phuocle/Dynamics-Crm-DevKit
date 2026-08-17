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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRoleTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageRoleTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_role",
            Title = "Manage security roles",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRoleResult)),
        Description(
            "Security roles — list/detail/user/assign/unassign/create/update/delete/copy.\n" +
            "- list: optional role_name, business_unit_id, max_records\n" +
            "- detail: role_id OR role_name (+optional entity_name) → privileges grouped by entity. Resolves role name first (fuzzy), then GUID fallback.\n" +
            "- user: user_id (+optional entity_name) → user's roles + effective privileges\n" +
            "- assign / unassign: role_id + user_id (direct) or team_id (role for a team; members inherit it). user action also reports roles inherited via team membership.\n" +
            "- create: role_name (+optional business_unit_id)\n" +
            "- update: role_id + optional role_name (rename) and/or privileges (JSON array of {entity, right, depth}) to add/change/remove privileges and depth on an existing role. Depth: User | BusinessUnit | Parent:ChildBU | Organization; 'None' removes. Rights: Create | Read | Write | Delete | Append | AppendTo | Assign | Share, or '*' to apply to all rights of the entity.\n" +
            "- delete: role_id (irreversible; managed roles can't delete — use copy)\n" +
            "- copy: role_id + role_name (clone with all privileges)\n" +
            "Mutating actions require the System Administrator role on the calling user.\n\n" +
            "Depth: User < BU < Parent:ChildBU < Org. Only root roles listed (not BU-inherited copies). Fuzzy on role_name: 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto.\n\n" +
            "WHEN TO USE:\n" +
            "- Debug 'access denied' (action='user' + entity_name)\n" +
            "- Audit role privileges (action='detail')\n" +
            "- Provision access (assign/unassign or create/copy)\n" +
            "RELATED TOOLS: whoami, manage_record, execute_fetchxml.")]
        public CallToolResult manage_role(
            [Description("list, detail, user, assign, unassign, create, update, delete, copy.")] string action,
            [Description("Email or GUID. Required: user/assign/unassign (unless team_id is used).")] string user_id = "",
            [Description("Team GUID or exact name. assign/unassign: assign the role to this team instead of a user (members inherit it).")] string team_id = "",
            [Description("Role GUID. For detail only, this may also be a role name; if empty, role_name is used. Required: detail/assign/unassign/update/delete/copy.")] string role_id = "",
            [Description("list: filter (contains). detail: role display name when role_id is empty. create/update/copy: new name.")] string role_name = "",
            [Description("BU GUID. list: filter. create: target BU (empty = root).")] string business_unit_id = "",
            [Description("detail/user: filter privileges by entity Display Name or logical name.")] string entity_name = "",
            [Description("update only. JSON array: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"},...]. entity = Display Name or logical name; right = Create|Read|Write|Delete|Append|AppendTo|Assign|Share, or '*' for all rights on the entity; depth = User|BusinessUnit|Parent:ChildBU|Organization, or None to remove.")] string privileges = "",
            [Description("list only. Max 250.")] int max_records = 50)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required. Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy'.");

                var normalizedAction = action.Trim().ToLowerInvariant();

                var isMutation = normalizedAction is "assign" or "unassign" or "create" or "update" or "delete" or "copy";
                if (isMutation)
                {
                    var gateError = RequireSystemAdministrator(normalizedAction);
                    if (gateError != null)
                        return gateError;
                }

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
                    _ => Error($"Invalid action '{action}'. Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
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
                    return Error($"'{businessUnitId}' is not a valid GUID for business_unit_id.");
                query.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
            }

            query.AddOrder("name", OrderType.Ascending);

            var result = _serviceClient.RetrieveMultiple(query);
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
            if (!string.IsNullOrEmpty(resolvedRole.Error))
                return Error(resolvedRole.Error);
            if (resolvedRole.AmbiguousRoles != null)
                return Error(resolvedRole.Error, null, new ManageRoleResult
                {
                    Action = "detail",
                    TotalCount = resolvedRole.AmbiguousRoles.Count,
                    Roles = resolvedRole.AmbiguousRoles
                });

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

            var resolvedEntityFilter = ResolveEntityFilter(entityFilter, "detail");
            if (!string.IsNullOrEmpty(resolvedEntityFilter.Error))
                return Error(resolvedEntityFilter.Error);
            entityFilter = resolvedEntityFilter.EntityName;

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
            if (userResult.Error != null)
                return Error(userResult.Error);
            if (userResult.MultipleUsers != null)
                return Error(userResult.Error, null, BuildMultipleUsersDetails("user", userResult.MultipleUsers));

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

            var rolesResult = _serviceClient.RetrieveMultiple(new FetchExpression(rolesFetchXml));

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
                var resolvedEntityFilter = ResolveEntityFilter(entityFilter, "user");
                if (!string.IsNullOrEmpty(resolvedEntityFilter.Error))
                    return Error(resolvedEntityFilter.Error);
                entityFilter = resolvedEntityFilter.EntityName;

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
                return Error($"user_id (or team_id) is required for '{actionWord}' action.");
            if (string.IsNullOrWhiteSpace(roleId))
                return Error($"role_id is required for '{actionWord}' action.");
            if (!Guid.TryParse(roleId, out var roleGuid))
                return Error($"'{roleId}' is not a valid GUID for role_id.");

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
                if (teamResult.Error != null)
                    return Error(teamResult.Error);
                if (teamResult.MultipleTeams != null)
                    return Error(teamResult.Error, null, BuildMultipleTeamsDetails(actionWord, teamResult.MultipleTeams));

                targetLogical = "team";
                targetId = teamResult.Team.GetAttributeValue<Guid>("teamid");
                targetName = teamResult.Team.GetAttributeValue<string>("name") ?? "";
            }
            else
            {
                var userResult = GetUser(userId);
                if (userResult.Error != null)
                    return Error(userResult.Error);
                if (userResult.MultipleUsers != null)
                    return Error(userResult.Error, null, BuildMultipleUsersDetails(actionWord, userResult.MultipleUsers));

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
                DataverseMutationExecutor.Associate(_context, _serviceClient,
                    targetLogical,
                    targetId,
                    new Relationship(relationship),
                    new EntityReferenceCollection { new EntityReference("role", roleGuid) });
            else
                DataverseMutationExecutor.Disassociate(_context, _serviceClient,
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
                return Error("role_name is required for 'create' action.");

            Guid buId;
            string buName;

            if (!string.IsNullOrWhiteSpace(businessUnitId))
            {
                if (!Guid.TryParse(businessUnitId, out buId))
                    return Error($"'{businessUnitId}' is not a valid GUID for business_unit_id.");

                var buQuery = new QueryExpression("businessunit")
                {
                    ColumnSet = new ColumnSet("name")
                };
                buQuery.Criteria.AddCondition("businessunitid", ConditionOperator.Equal, buId);
                var buResult = _serviceClient.RetrieveMultiple(buQuery);
                if (buResult.Entities.Count == 0)
                    return Error($"No business unit found with ID '{businessUnitId}'.");
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
                    return Error("Could not find the root business unit.");
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

            var newId = DataverseMutationExecutor.Create(_context, _serviceClient, roleEntity);

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
                return Error("role_id is required for 'update' action.");
            if (string.IsNullOrWhiteSpace(roleName) && string.IsNullOrWhiteSpace(privilegesJson))
                return Error("Nothing to update. Provide role_name (rename) and/or privileges (JSON array).",
                    "Example privileges: [{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"}]. Use depth 'None' to remove a privilege.");
            if (!Guid.TryParse(roleId, out var id))
                return Error($"'{roleId}' is not a valid GUID.");

            var existingRole = RetrieveRole(id);
            if (existingRole == null)
                return Error($"No security role found with ID '{roleId}'.",
                    "Use action='list' to find valid role IDs.");

            var isCustomizable = existingRole.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;
            if (!isCustomizable)
                return Error($"Role '{existingRole.GetAttributeValue<string>("name")}' is not customizable and cannot be updated.");

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
                        if (rightError != null) return Error(rightError);
                    }
                    var depthError = ValidateDepth(change.Depth);
                    if (depthError != null) return Error(depthError);

                    var resolvedEntity = DisplayNameFirstResolver.ResolveEntity(_serviceClient, change.Entity?.Trim(), "manage_role");
                    if (!resolvedEntity.IsSuccess)
                        return Error($"privileges entity '{change.Entity}': {resolvedEntity.Error}");
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
                            if (applyError != null) return Error(applyError);
                        }
                        continue;
                    }

                    var applyErrorSingle = ApplyPrivilegeChange(current, entityLogical, rightRaw, change.Depth, isRemove, added, updatedList, removed);
                    if (applyErrorSingle != null) return Error(applyErrorSingle);
                }

                if (added.Count == 0 && updatedList.Count == 0 && removed.Count == 0 && !hasRename)
                    return Error("No effective privilege changes. All requested privileges already match the current role.");
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

            if (hasRename)
            {
                var updateEntity = new Entity("role", id)
                {
                    ["name"] = roleName.Trim()
                };
                DataverseMutationExecutor.Update(_context, _serviceClient, updateEntity);
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

                DataverseMutationExecutor.Execute(_context, _serviceClient, new ReplacePrivilegesRoleRequest
                {
                    RoleId = id,
                    Privileges = finalPrivileges
                });
            }

            var displayName = hasRename ? $"{oldName}' → '{roleName.Trim()}" : oldName;
            return Success($"Updated role '{displayName}' ({id}){privPart}.", new ManageRoleResult
            {
                Action = "updated",
                RoleId = id.ToString(),
                RoleName = hasRename ? roleName.Trim() : oldName,
                Status = "updated",
                PrivilegesAdded = added.Count > 0 ? added : null,
                PrivilegesUpdated = updatedList.Count > 0 ? updatedList : null,
                PrivilegesRemoved = removed.Count > 0 ? removed : null
            });
        }

        private static readonly string[] StandardRights =
            { "Create", "Read", "Write", "Delete", "Append", "AppendTo", "Assign", "Share" };

        private string ApplyPrivilegeChange(
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
                return $"No privilege found for right '{right}' on entity '{entityLogical}'. Check the right value and entity name. Use action='detail' with entity_name to see privileges the role already has.";
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

        private static string ValidateRight(string right)
        {
            if (string.IsNullOrWhiteSpace(right) || !StandardRights.Contains(right.Trim(), StringComparer.OrdinalIgnoreCase))
                return $"Invalid privilege right '{right}'. Valid values: {string.Join(", ", StandardRights)}, or '*' for all rights on the entity.";
            return null;
        }

        private static string ValidateDepth(string depth)
        {
            var valid = new[] { "User", "BusinessUnit", "BU", "Parent:ChildBU", "Organization", "Org", "None" };
            if (string.IsNullOrWhiteSpace(depth) || !valid.Contains(depth.Trim(), StringComparer.OrdinalIgnoreCase))
                return $"Invalid privilege depth '{depth}'. Valid values: User, BusinessUnit, Parent:ChildBU, Organization, None (remove).";
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
            var result = _serviceClient.RetrieveMultiple(query);
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
                return Error("role_id is required for 'delete' action.");
            if (!Guid.TryParse(roleId, out var id))
                return Error($"'{roleId}' is not a valid GUID.");

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
                return DryRun($"Would DELETE role '{roleName}' ({id}). This cannot be undone.", new ManageRoleResult
                {
                    Action = "delete",
                    RoleId = id.ToString(),
                    RoleName = roleName,
                    Status = "not_executed"
                });

            DataverseMutationExecutor.Delete(_context, _serviceClient, "role", id);

            return Success($"Deleted role '{roleName}' ({id}).", new ManageRoleResult
            {
                Action = "deleted",
                RoleId = id.ToString(),
                RoleName = roleName,
                Status = "deleted"
            });
        }

        private CallToolResult HandleCopy(string roleId, string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleId))
                return Error("role_id is required for 'copy' action.");
            if (string.IsNullOrWhiteSpace(roleName))
                return Error("role_name is required for 'copy' action (name for the new role).");
            if (!Guid.TryParse(roleId, out var sourceId))
                return Error($"'{roleId}' is not a valid GUID.");

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
            var newRoleId = DataverseMutationExecutor.Create(_context, _serviceClient, newRoleEntity);

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
                DataverseMutationExecutor.Execute(_context, _serviceClient, addPrivRequest);
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

        private CallToolResult RequireSystemAdministrator(string action)
        {
            if (RoleGateHelper.IsSystemAdministrator(_serviceClient))
                return null;

            var haveRoles = RoleGateHelper.GetCurrentRoleNames(_serviceClient);
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

                return (null, $"{nameMatches.Count} roles match '{roleReference}'. Re-call with the exact roleid GUID or a more specific role_name.", nameMatches.Select(MapRoleEntry).ToList());
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

            return _serviceClient.RetrieveMultiple(query).Entities;
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
            var result = _serviceClient.RetrieveMultiple(query);
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

            var userResult = _serviceClient.RetrieveMultiple(userQuery);
            if (userResult.Entities.Count == 0)
                return (null, $"No user found with '{userId}'.", null);

            if (userResult.Entities.Count > 1)
                return (null, $"{userResult.Entities.Count} users match '{userId}'. Re-call with the exact systemuserid GUID.", userResult.Entities.ToList());

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

            var result = _serviceClient.RetrieveMultiple(query);
            if (result.Entities.Count == 0)
                return (null, $"No team found with '{teamId}'.", null);

            if (result.Entities.Count > 1)
                return (null, $"{result.Entities.Count} teams match '{teamId}'. Re-call with the exact teamid GUID.", result.Entities.ToList());

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

            var teams = _serviceClient.RetrieveMultiple(new FetchExpression(teamsFetchXml)).Entities;
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

                var teamRoles = _serviceClient.RetrieveMultiple(new FetchExpression(teamRolesFetchXml)).Entities;
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

        private (string EntityName, string Error) ResolveEntityFilter(string entityFilter, string action)
        {
            if (string.IsNullOrWhiteSpace(entityFilter))
                return (null, null);

            var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityFilter.Trim(), "manage_role");
            if (!resolved.IsSuccess)
                return (null, $"entity_name '{entityFilter.Trim()}' for action='{action}': {resolved.Error}");

            return (resolved.Value.LogicalName, null);
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
