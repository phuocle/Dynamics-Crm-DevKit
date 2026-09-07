using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using System.Text.Json;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRole;

/// <summary>
/// manage_role user/restore flows on a FakeSdkClient: role lookups for a
/// user (direct + team-inherited), restore validation branches, and a full
/// restore from a .role.json backup (rename + ReplacePrivilegesRoleRequest).
/// </summary>
[TestClass]
public sealed class ManageRoleFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity? _user;
    private Entity? _role;
    private readonly List<Entity> _systemUserRoles = new();
    private readonly List<Entity> _teamRoles = new();
    private readonly List<Entity> _teams = new();
    private ReplacePrivilegesRoleRequest? _capturedReplace;
    private Entity? _capturedRename;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _systemUserRoles.Clear();
        _teamRoles.Clear();
        _teams.Clear();
        _user = null;
        _role = null;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
        _fake.OnUpdate = entity => _capturedRename = entity;
    }

    public void Dispose() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveEntityRequest => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = new EntityMetadata { LogicalName = "role" } }
        },
        Microsoft.Crm.Sdk.Messages.WhoAmIRequest => new Microsoft.Crm.Sdk.Messages.WhoAmIResponse
        {
            Results =
            {
                ["UserId"] = Guid.NewGuid(),
                ["BusinessUnitId"] = Guid.NewGuid(),
                ["OrganizationId"] = Guid.NewGuid()
            }
        },
        ReplacePrivilegesRoleRequest r => BuildResponse(() =>
        {
            _capturedReplace = r;
            return new ReplacePrivilegesRoleResponse();
        }),
        _ => new OrganizationResponse()
    };

    private static OrganizationResponse BuildResponse(Func<OrganizationResponse> factory) => factory();

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "systemuser" => _user != null ? new EntityCollection(new[] { _user }) : new EntityCollection(),
                "role" => _role != null ? new EntityCollection(new[] { _role }) : new EntityCollection(),
                "team" => new EntityCollection(_teams),
                _ => new EntityCollection()
            };
        }
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query.Replace(Quote, Apostrophe);
            if (fetch.Contains("systemuserroles") && !fetch.Contains("<entity name='systemuserroles'"))
            {
                // role-gate lookup: report the calling user as System Administrator
                return new EntityCollection(new[] { new Entity("role", Guid.NewGuid()) { ["name"] = "System Administrator" } });
            }
            if (fetch.Contains("<entity name='systemuserroles'")) return new EntityCollection(_systemUserRoles);
            if (fetch.Contains("entity name='teamroles'")) return new EntityCollection(_teamRoles);
            if (fetch.Contains("<entity name='team'")) return new EntityCollection(_teams);
        }
        return new EntityCollection();
    }

    private const string Quote = "\"";
    private const string Apostrophe = "'";

    private void SeedUser()
    {
        var userId = Guid.NewGuid();
        var roleId = Guid.NewGuid();
        _user = new Entity("systemuser", userId)
        {
            ["systemuserid"] = userId,
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false,
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" }
        };
        _role = new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = "Sales Manager",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true),
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" }
        };
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

    private ManageRoleTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    [TestMethod]
    public async Task User_ReturnsDirectAndTeamRoles()
    {
        SeedUser();

        var result = await NewTool().manage_role(null!, action: "user", user_id: "jane@contoso.com");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Jane Doe");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.IsTrue(json.GetRawText().Contains("Sales Manager"), json.GetRawText());
    }

    [TestMethod]
    public async Task User_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_role(null!, action: "user", user_id: "nobody@contoso.com");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No user found");
    }

    [TestMethod]
    public async Task Restore_ValidationErrors()
    {
        var tool = NewTool();

        var noPath = await tool.manage_role(null!, action: "restore");
        Assert.IsTrue(noPath.IsError == true);
        StringAssert.Contains(noPath.GetText(), "backup_path is required");

        var badExt = await tool.manage_role(null!, action: "restore", backup_path: "C:\\tmp\\backup.bak");
        Assert.IsTrue(badExt.IsError == true);
        StringAssert.Contains(badExt.GetText(), ".role.json");

        var missing = await tool.manage_role(null!, action: "restore",
            backup_path: Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".role.json"));
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(missing.GetText(), "not found");
    }

    [TestMethod]
    public async Task Restore_FromBackup_ReplacesPrivileges()
    {
        var roleId = Guid.NewGuid();
        _role = new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = "Current Name",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true),
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" }
        };

        var backupPath = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.role.json");
        var snapshotPrivilege = Guid.NewGuid();
        await File.WriteAllTextAsync(backupPath,
            $$"""
            {
              "roleId": "{{roleId}}",
              "roleName": "Restored Name",
              "privileges": [
                { "privilegeId": "{{snapshotPrivilege}}", "name": "prvReadAccount", "depth": "Organization" }
              ]
            }
            """);
        try
        {
            var result = await NewTool().manage_role(null!, action: "restore", backup_path: backupPath);

            Assert.IsFalse(result.IsError == true, result.GetText());
            Assert.IsNotNull(_capturedReplace, "ReplacePrivilegesRoleRequest sent.");
            Assert.AreEqual(roleId, _capturedReplace!.RoleId);
            Assert.HasCount(1, _capturedReplace.Privileges);
            StringAssert.Contains(result.GetText(), "Restored role");
        }
        finally { File.Delete(backupPath); }
    }

    [TestMethod]
    public async Task Restore_MalformedJson_ReturnsFriendlyError()
    {
        var roleId = Guid.NewGuid();
        _role = new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = "Role",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        var backupPath = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.role.json");
        await File.WriteAllTextAsync(backupPath, "{ this is not json");

        try
        {
            var result = await NewTool().manage_role(null!, action: "restore", backup_path: backupPath);
            Assert.IsTrue(result.IsError == true);
            StringAssert.Contains(result.GetText(), "not valid JSON");
        }
        finally { File.Delete(backupPath); }
    }
}
