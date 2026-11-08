using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRole;

/// <summary>
/// manage_role rare-branch coverage on a FakeSdkClient: empty list hints,
/// detail/user privilege grouping and entity-filter failures, assign team/user
/// resolution errors, create business-unit errors, update privilege-change
/// branches (wildcard, no-op, unknown privilege), restore re-create from a
/// .role.json backup, and exact-name disambiguation.
/// </summary>
[TestClass]
public sealed class ManageRoleErrorPathCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity? _role;
    private readonly List<Entity> _nameMatchRoles = new();
    private readonly List<Entity> _users = new();
    private readonly List<Entity> _teams = new();
    private readonly List<Entity> _businessUnits = new();
    private bool _privilegeFound = true;
    private readonly List<Entity> _rolePrivileges = new();
    private readonly List<Entity> _gateRoles = new();
    private readonly List<Entity> _systemUserRoles = new();
    private readonly List<Entity> _teamRoles = new();
    private List<EntityMetadata> _entityMetadata = new();
    private Guid? _createdRoleId;
    private AddPrivilegesRoleRequest? _capturedAddPrivileges;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _role = null;
        _createdRoleId = null;
        _capturedAddPrivileges = null;
        _nameMatchRoles.Clear();
        _users.Clear();
        _teams.Clear();
        _businessUnits.Clear();
        _privilegeFound = true;
        _rolePrivileges.Clear();
        _gateRoles.Clear();
        _systemUserRoles.Clear();
        _teamRoles.Clear();
        _entityMetadata.Clear();
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
        _fake.OnCreate = _ =>
        {
            _createdRoleId ??= Guid.NewGuid();
            return _createdRoleId.Value;
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        WhoAmIRequest => new WhoAmIResponse
        {
            Results = { ["UserId"] = Guid.NewGuid(), ["BusinessUnitId"] = Guid.NewGuid(), ["OrganizationId"] = Guid.NewGuid() }
        },
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = _entityMetadata.ToArray() }
        },
        AddPrivilegesRoleRequest r => BuildResponse(() =>
        {
            _capturedAddPrivileges = r;
            return new AddPrivilegesRoleResponse();
        }),
        _ => new OrganizationResponse()
    };

    private static OrganizationResponse BuildResponse(Func<OrganizationResponse> factory) => factory();

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            switch (qe.EntityName)
            {
                case "role":
                    return HasCondition(qe, "roleid")
                        ? Single(_role)
                        : new EntityCollection(_nameMatchRoles);
                case "systemuser":
                    return new EntityCollection(_users);
                case "team":
                    return new EntityCollection(_teams);
                case "businessunit":
                    return new EntityCollection(_businessUnits);
                case "privilege":
                    // FindPrivilegeId only accepts a result set of exactly one row.
                    return _privilegeFound
                        ? new EntityCollection(new[] { new Entity("privilege", Guid.NewGuid()) { ["privilegeid"] = Guid.NewGuid() } })
                        : new EntityCollection();
                default:
                    return new EntityCollection();
            }
        }
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query.Replace("\"", "'");
            if (fetch.Contains("<entity name='roleprivileges'")) return new EntityCollection(_rolePrivileges);
            if (fetch.Contains("<entity name='systemuserroles'")) return new EntityCollection(_systemUserRoles);
            if (fetch.Contains("name='teamroles'")) return new EntityCollection(_teamRoles);
            if (fetch.Contains("<entity name='team'")) return new EntityCollection(_teams);
            if (fetch.Contains("<entity name='role'>"))
            {
                // role-gate lookup: calling user is a System Administrator
                return _gateRoles.Count > 0 ? new EntityCollection(_gateRoles) : AdminGateRoles();
            }
        }
        return new EntityCollection();
    }

    private static EntityCollection AdminGateRoles() => new(new[]
    {
        new Entity("role", Guid.NewGuid()) { ["name"] = "System Administrator" }
    });

    private static bool HasCondition(QueryExpression qe, string attributeName) =>
        qe.Criteria.Conditions.Any(c => string.Equals(c.AttributeName, attributeName, StringComparison.Ordinal)) ||
        qe.Criteria.Filters.Any(f => f.Conditions.Any(c => string.Equals(c.AttributeName, attributeName, StringComparison.Ordinal)));

    private static EntityCollection Single(Entity? entity) =>
        entity == null ? new EntityCollection() : new EntityCollection(new[] { entity });

    private void SeedGate() => _gateRoles.Add(new Entity("role", Guid.NewGuid()) { ["name"] = "System Administrator" });

    private static Entity MakeRole(Guid roleId, string name, bool? customizable = true) => new("role", roleId)
    {
        ["roleid"] = roleId,
        ["name"] = name,
        ["ismanaged"] = false,
        ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" },
        ["iscustomizable"] = customizable.HasValue ? new BooleanManagedProperty(customizable.Value) : null
    };

    private static Entity PrivilegeRow(string privName, string right, string entity, int depthMask) =>
        new("roleprivileges", Guid.NewGuid())
        {
            ["privilegedepthmask"] = depthMask,
            ["priv.name"] = new AliasedValue("privilege", "name", privName),
            ["priv.accessright"] = new AliasedValue("privilege", "accessright", right),
            ["priv.privilegeid"] = new AliasedValue("privilege", "privilegeid", Guid.NewGuid())
        };

    private ManageRoleTool NewDryRunTool() =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext());

    private ManageRoleTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    // ── list ────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_ZeroRoles_IncludesOptionalNameHint()
    {
        var tool = NewTool();

        var plain = await tool.manage_role(null!, action: "list");
        StringAssert.Contains(plain.GetText(), "0 roles found.");

        var withName = await tool.manage_role(null!, action: "list", role_name: "Sales");
        StringAssert.Contains(withName.GetText(), "0 roles found matching 'Sales'.");

        var structured = JsonDocument.Parse(withName.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(0, structured.GetProperty("totalCount").GetInt32());
    }

    // ── detail ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_WithPrivileges_GroupsByEntity()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        _nameMatchRoles.Add(_role);
        _rolePrivileges.Add(PrivilegeRow("prvReadaccount", "Read", "account", 8));
        _rolePrivileges.Add(PrivilegeRow("prvWriteaccount", "Write", "account", 1));

        var result = await NewTool().manage_role(null!, action: "detail", role_name: "Sales Manager");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "2 privileges across 1 entities");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        var groups = json.GetProperty("privilegeGroups");
        Assert.AreEqual(1, groups.GetArrayLength());
        Assert.AreEqual("account", groups[0].GetProperty("entity").GetString());
    }

    [TestMethod]
    public async Task Detail_EntityFilterWithoutMatchingPrivileges_ReportsZeroForFilter()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        _nameMatchRoles.Add(_role);
        _rolePrivileges.Add(PrivilegeRow("prvReadaccount", "Read", "account", 8));
        _entityMetadata.Add(TestMetadata.Entity("contact"));

        var result = await NewTool().manage_role(null!, action: "detail", role_name: "Sales Manager", entity_name: "contact");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 privileges on entity 'contact' (role has 1 total)");
    }

    [TestMethod]
    public async Task Detail_MultipleNameMatches_ExactNameWins()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        _nameMatchRoles.Add(MakeRole(Guid.NewGuid(), "Sales Manager EU"));
        _nameMatchRoles.Add(_role);

        var result = await NewTool().manage_role(null!, action: "detail", role_name: "Sales Manager");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 privileges");
    }

    // ── user ────────────────────────────────────────────────────────────────

    private void SeedUser(Guid userId, Guid roleId)
    {
        _users.Add(new Entity("systemuser", userId)
        {
            ["systemuserid"] = userId,
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.test",
            ["isdisabled"] = false,
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" }
        });
        _systemUserRoles.Add(new Entity("systemuserroles", Guid.NewGuid())
        {
            ["roleid"] = roleId,
            ["r.name"] = new AliasedValue("role", "name", "Sales Manager"),
            ["r.ismanaged"] = new AliasedValue("role", "ismanaged", false),
            ["r.iscustomizable"] = new AliasedValue("role", "iscustomizable", true),
            ["r.businessunitid"] = new AliasedValue("role", "businessunitid",
                new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" })
        });
    }

    [TestMethod]
    public async Task User_EntityFilterResolutionFailure_ReturnsEntityFilterError()
    {
        var userId = Guid.NewGuid();
        SeedUser(userId, Guid.NewGuid());
        _entityMetadata.Add(TestMetadata.Entity("account"));

        var result = await NewTool().manage_role(null!, action: "user", user_id: userId.ToString(), entity_name: "zzz_no_such_entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name 'zzz_no_such_entity'");
        StringAssert.Contains(result.GetText(), "was not found");
    }

    [TestMethod]
    public async Task User_EntityFilter_ComputesEffectiveAndMissingRights()
    {
        var userId = Guid.NewGuid();
        var roleId = Guid.NewGuid();
        SeedUser(userId, roleId);
        _rolePrivileges.Add(PrivilegeRow("prvReadaccount", "Read", "account", 8));
        _entityMetadata.Add(TestMetadata.Entity("account"));

        var result = await NewTool().manage_role(null!, action: "user", user_id: userId.ToString(), entity_name: "Account");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "1 rights on entity 'account'");
        StringAssert.Contains(result.GetText(), "missing: Create, Write, Delete, Append, AppendTo, Assign, Share");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        var effective = json.GetProperty("effectivePrivileges");
        Assert.AreEqual(1, effective.GetArrayLength());
        Assert.AreEqual("Read", effective[0].GetProperty("right").GetString());
        Assert.AreEqual(7, json.GetProperty("missingRights").GetArrayLength());
    }

    [TestMethod]
    public async Task User_TeamMembership_RolesInheritedViaTeams()
    {
        var userId = Guid.NewGuid();
        var roleId = Guid.NewGuid();
        SeedUser(userId, roleId);

        var teamId = Guid.NewGuid();
        _teams.Add(new Entity("team", teamId)
        {
            ["teamid"] = teamId,
            ["name"] = "Sales Team",
            ["teamtype"] = new OptionSetValue(0)
        });
        _teamRoles.Add(new Entity("teamroles", Guid.NewGuid())
        {
            ["roleid"] = roleId,
            ["r.name"] = new AliasedValue("role", "name", "Team Role")
        });

        var result = await NewTool().manage_role(null!, action: "user", user_id: userId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "1 role(s) via team(s)");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("Sales Team", json.GetProperty("rolesViaTeams")[0].GetProperty("teamName").GetString());
        Assert.AreEqual("Team Role", json.GetProperty("rolesViaTeams")[0].GetProperty("roleName").GetString());
    }

    // ── assign ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Assign_TeamNotFound_ReturnsError()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        SeedGate();

        var result = await NewDryRunTool().manage_role(null!, action: "assign", team_id: "Missing Team", role_id: roleId.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No team found with 'Missing Team'");
        StringAssert.Contains(result.GetText(), "Pass the teamid GUID or the exact team name.");
    }

    [TestMethod]
    public async Task Assign_MultipleTeams_ReturnsCandidateList()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        SeedGate();
        _teams.Add(new Entity("team", Guid.NewGuid()) { ["teamid"] = Guid.NewGuid(), ["name"] = "Sales Team", ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "BU" } });
        _teams.Add(new Entity("team", Guid.NewGuid()) { ["teamid"] = Guid.NewGuid(), ["name"] = "Sales Team", ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "BU" } });

        var result = await NewDryRunTool().manage_role(null!, action: "assign", team_id: "Sales Team", role_id: roleId.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "2 teams match 'Sales Team'");
        StringAssert.Contains(result.GetText(), "Re-call with the exact teamid GUID");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("details").GetProperty("teams").GetArrayLength());
    }

    [TestMethod]
    public async Task Assign_MultipleUsers_ReturnsCandidateList()
    {
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        SeedGate();
        _users.Add(new Entity("systemuser", Guid.NewGuid()) { ["systemuserid"] = Guid.NewGuid(), ["fullname"] = "Jane Doe", ["internalemailaddress"] = "jane@contoso.test" });
        _users.Add(new Entity("systemuser", Guid.NewGuid()) { ["systemuserid"] = Guid.NewGuid(), ["fullname"] = "Jane Doe 2", ["internalemailaddress"] = "jane@contoso.test" });

        var result = await NewDryRunTool().manage_role(null!, action: "assign", user_id: "jane@contoso.test", role_id: roleId.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "2 users match 'jane@contoso.test'");
        StringAssert.Contains(result.GetText(), "Re-call with the exact systemuserid GUID");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("details").GetProperty("users").GetArrayLength());
    }

    // ── create ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Create_BusinessUnitIdNotFound_ReturnsError()
    {
        SeedGate();

        var result = await NewTool().manage_role(null!, action: "create", role_name: "New Role", business_unit_id: Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No business unit found with ID");
    }

    [TestMethod]
    public async Task Create_RootBusinessUnitMissing_ReturnsError()
    {
        SeedGate();

        var result = await NewTool().manage_role(null!, action: "create", role_name: "New Role");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Could not find the root business unit.");
        StringAssert.Contains(result.GetText(), "Pass business_unit_id of an existing business unit explicitly.");
    }

    // ── update ──────────────────────────────────────────────────────────────

    private void SeedCustomizableRole(out Guid roleId)
    {
        roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Sales Manager");
        _entityMetadata.Add(TestMetadata.Entity("account"));
    }

    [TestMethod]
    public async Task Update_EmptyPrivilegesArray_ReturnsNonEmptyArrayError()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();

        var result = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(), privileges: "[]");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "privileges JSON must be a non-empty array");
    }

    [TestMethod]
    public async Task Update_PrivilegeEntityResolution_AmbiguousAndNotFound()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();
        _entityMetadata.Add(TestMetadata.Entity("account", "Accounts One"));
        _entityMetadata.Add(TestMetadata.Entity("account2", "Accounts Two"));

        var ambiguous = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"accoun","right":"Read","depth":"User"}]""");
        Assert.IsTrue(ambiguous.IsError == true);
        StringAssert.Contains(ambiguous.GetText(), "privileges entity 'accoun': Multiple candidates match");
        StringAssert.Contains(ambiguous.GetText(), "more specific entity value in privileges[].entity");
        var ambiguousJson = JsonDocument.Parse(ambiguous.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.IsTrue(ambiguousJson.GetProperty("details").TryGetProperty("entityMatches", out _),
            ambiguous.StructuredContent!.Value.GetRawText());

        var notFound = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"zzz_no_such_entity","right":"Read","depth":"User"}]""");
        Assert.IsTrue(notFound.IsError == true);
        StringAssert.Contains(notFound.GetText(), "privileges entity 'zzz_no_such_entity'");
        StringAssert.Contains(notFound.GetText(), "Fix privileges[].entity");
    }

    [TestMethod]
    public async Task Update_WildcardAdd_AddsAllStandardRights()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();

        var result = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"account","right":"*","depth":"User"}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "privileges: 8 added");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(8, json.GetProperty("privilegesAdded").GetArrayLength());
    }

    [TestMethod]
    public async Task Update_WildcardRemove_RemovesExistingEntityPrivileges()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();
        _rolePrivileges.Add(PrivilegeRow("prvReadaccount", "Read", "account", 1));
        _rolePrivileges.Add(PrivilegeRow("prvWriteaccount", "Write", "account", 2));

        var result = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"account","right":"*","depth":"None"}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "privileges: 0 added, 0 depth-changed, 2 removed");
    }

    [TestMethod]
    public async Task Update_NewPrivilegeNotFoundInMetadata_ReturnsFriendlyError()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();
        _privilegeFound = false;

        var result = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"account","right":"Read","depth":"User"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No privilege found for right 'Read' on entity 'account'");
    }

    [TestMethod]
    public async Task Update_NoEffectiveChanges_ReturnsNoOpError()
    {
        SeedCustomizableRole(out var roleId);
        SeedGate();
        _rolePrivileges.Add(PrivilegeRow("prvReadaccount", "Read", "account", 1));

        var result = await NewDryRunTool().manage_role(null!, action: "update", role_id: roleId.ToString(),
            privileges: """[{"entity":"account","right":"Read","depth":"User"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No effective privilege changes");
        StringAssert.Contains(result.GetText(), "already match the current role");
    }

    // ── restore ─────────────────────────────────────────────────────────────

    private static string WriteBackupFile(string json)
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.role.json");
        File.WriteAllText(path, json);
        return path;
    }

    [TestMethod]
    public async Task Restore_BackupWithoutValidRoleId_ReturnsCorruptBackupError()
    {
        SeedGate();
        var path = WriteBackupFile("""{ "roleId": "not-a-guid", "roleName": "X" }""");
        try
        {
            var result = await NewTool().manage_role(null!, action: "restore", backup_path: path);

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "Backup file has no valid roleId");
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Restore_ExistingRoleNotCustomizable_ReturnsError()
    {
        SeedGate();
        var roleId = Guid.NewGuid();
        _role = MakeRole(roleId, "Managed Role", customizable: false);
        var path = WriteBackupFile($$"""{ "roleId": "{{roleId}}", "roleName": "Managed Role", "privileges": [] }""");
        try
        {
            var result = await NewTool().manage_role(null!, action: "restore", backup_path: path);

            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "is not customizable and cannot be restored");
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Restore_DeletedRole_DryRunPreviewsRecreate()
    {
        SeedGate();
        var roleId = Guid.NewGuid();
        var path = WriteBackupFile($$"""
            { "roleId": "{{roleId}}", "roleName": "Gone Role", "businessUnitId": "{{Guid.NewGuid()}}", "privileges": [] }
            """);
        try
        {
            var result = await NewDryRunTool().manage_role(null!, action: "restore", backup_path: path);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would RESTORE (re-create) role 'Gone Role'");
            StringAssert.Contains(result.GetText(), "no longer exists");
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Restore_DeletedRole_RecreatesRoleAndPrivileges()
    {
        SeedGate();
        var roleId = Guid.NewGuid();
        var privilegeId = Guid.NewGuid();
        var buId = Guid.NewGuid();
        var path = WriteBackupFile($$"""
            {
              "roleId": "{{roleId}}",
              "roleName": "Recreated Role",
              "businessUnitId": "{{buId}}",
              "privileges": [ { "privilegeId": "{{privilegeId}}", "name": "prvReadaccount", "depth": "Organization" } ]
            }
            """);
        try
        {
            var result = await NewTool().manage_role(null!, action: "restore", backup_path: path);

            Assert.IsFalse(result.IsError == true, result.GetText());
            Assert.IsNotNull(_createdRoleId, "role re-created.");
            Assert.IsNotNull(_capturedAddPrivileges, "AddPrivilegesRoleRequest sent.");
            Assert.AreEqual(_createdRoleId.Value, _capturedAddPrivileges!.RoleId);
            Assert.HasCount(1, _capturedAddPrivileges.Privileges);
            StringAssert.Contains(result.GetText(), "as NEW role");
            StringAssert.Contains(result.GetText(), "was deleted");
            StringAssert.Contains(result.GetText(), "Re-assign users/teams yourself");
        }
        finally { File.Delete(path); }
    }
}
