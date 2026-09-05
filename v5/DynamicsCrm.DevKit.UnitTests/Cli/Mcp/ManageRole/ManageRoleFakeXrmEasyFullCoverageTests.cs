using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

/// <summary>
/// FakeXrmEasy-driven coverage for <see cref="ManageRoleTool"/> data paths:
/// detail / user / assign / unassign / create / update / delete / copy / restore
/// against the in-memory org, with dry-run and error branches.
/// </summary>
[TestClass]
public sealed class ManageRoleFakeXrmEasyFullCoverageTests
{
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;
    private static readonly Type ToolType = typeof(ManageRoleTool);

    private IXrmFakedContext _context = null!;
    private string _workspace = null!;
    private Guid _rootBuId;
    private FakeRetrieveEntityExecutor _entityExecutor = null!;

    [TestInitialize]
    public void Setup()
    {
        _entityExecutor = new FakeRetrieveEntityExecutor();
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(_entityExecutor)
            .AddFakeMessageExecutor(new FakeRetrieveAllEntitiesExecutor(_entityExecutor))
            .AddFakeMessageExecutor(new FakeReplacePrivilegesRoleExecutor())
            .AddFakeMessageExecutor(new FakeAddPrivilegesRoleExecutor())
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        // Entity metadata for ResolveEntity / entity_filter paths (account, contact)
        _entityExecutor.Metadata.Add(EntityMeta("account", "Account"));
        _entityExecutor.Metadata.Add(EntityMeta("contact", "Contact"));
        _context.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });
        _rootBuId = Guid.NewGuid();
        _context.GetOrganizationService().Create(new Entity("businessunit", _rootBuId)
        {
            ["name"] = "Root BU",
            ["parentbusinessunitid"] = null
        });
        // N:N association metadata for assign/unassign (systemuserroles_association, teamroles_association)
        _context.InitializeMetadata(CreateManyToMany("systemuser", "role", "systemuserroles_association", "systemuserroles",
            "systemuserid", "fullname", "internalemailaddress", "isdisabled", "businessunitid"));
        _context.InitializeMetadata(CreateManyToMany("team", "role", "teamroles_association", "teamroles",
            "teamid", "name", "teamtype", "businessunitid"));

        _workspace = Path.Combine(Path.GetTempPath(), "managerole_full_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_workspace);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { if (Directory.Exists(_workspace)) Directory.Delete(_workspace, recursive: true); }
        catch { /* best effort */ }
    }

    private ManageRoleTool NewTool(bool dryRun = false) =>
        NewTool(new InterceptingOrgService(_context.GetOrganizationService()), dryRun);

    private static ManageRoleTool NewTool(IOrganizationService service, bool dryRun = false)
    {
        var tool = new ManageRoleTool(service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));
        typeof(ManageRoleTool).GetField("_workspaceFolder", PrivateInstance)!.SetValue(tool, ".");
        return tool;
    }

    private static CallToolResult Invoke(ManageRoleTool tool, string handler, params object?[] args) =>
        (CallToolResult)ToolType.GetMethod(handler, PrivateInstance)!.Invoke(tool, args)!;

    private static void SetWorkspace(ManageRoleTool tool, string folder) =>
        typeof(ManageRoleTool).GetField("_workspaceFolder", PrivateInstance)!.SetValue(tool, folder);

    private (Guid RoleId, Guid BuId) SeedRole(string name, bool customizable = true, Guid? buId = null)
    {
        var service = _context.GetOrganizationService();
        var bu = buId ?? Guid.NewGuid();
        var roleId = Guid.NewGuid();
        service.Create(new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = name,
            ["businessunitid"] = new EntityReference("businessunit", bu),
            ["ismanaged"] = false,
            ["iscustomizable"] = new Microsoft.Xrm.Sdk.BooleanManagedProperty(customizable)
        });
        return (roleId, bu);
    }

    private Guid SeedPrivilege(string name, int accessRight)
    {
        var service = _context.GetOrganizationService();
        var id = Guid.NewGuid();
        service.Create(new Entity("privilege", id)
        {
            ["privilegeid"] = id,
            ["name"] = name,
            ["accessright"] = accessRight
        });
        return id;
    }

    private void SeedRolePrivilege(Guid roleId, Guid privilegeId, int depthMask)
    {
        _context.GetOrganizationService().Create(new Entity("roleprivileges", Guid.NewGuid())
        {
            ["roleid"] = roleId,
            ["privilegeid"] = privilegeId,
            ["privilegedepthmask"] = depthMask
        });
    }

    private Guid SeedUser(string fullname, string email)
    {
        var service = _context.GetOrganizationService();
        var id = Guid.NewGuid();
        service.Create(new Entity("systemuser", id)
        {
            ["systemuserid"] = id,
            ["fullname"] = fullname,
            ["internalemailaddress"] = email,
            ["isdisabled"] = false,
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid())
        });
        return id;
    }

    private Guid SeedTeam(string name)
    {
        var service = _context.GetOrganizationService();
        var id = Guid.NewGuid();
        service.Create(new Entity("team", id)
        {
            ["name"] = name,
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid())
        });
        return id;
    }

    private void SeedUserRole(Guid userId, Guid roleId)
    {
        _context.GetOrganizationService().Create(new Entity("systemuserroles", Guid.NewGuid())
        {
            ["systemuserid"] = userId,
            ["roleid"] = roleId
        });
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleDetail_ByRoleId_ReturnsPrivileges()
    {
        var (roleId, _) = SeedRole("Manager");
        var privId = SeedPrivilege("prvReadAccount", 1);
        SeedRolePrivilege(roleId, privId, 4);

        var result = Invoke(NewTool(), "HandleDetail", roleId.ToString(), "", "");

        Assert.IsFalse(result.IsError == true);
        var text = result.GetText();
        StringAssert.Contains(text, "Manager");
        StringAssert.Contains(text, "privileges");
    }

    [TestMethod]
    public void HandleDetail_ByRoleName_ResolvesRole()
    {
        SeedRole("Salesperson");
        var result = Invoke(NewTool(), "HandleDetail", "", "Salesperson", "");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Salesperson");
    }

    [TestMethod]
    public void HandleDetail_NoInput_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleDetail", "", "", "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "role_id or role_name is required");
    }

    [TestMethod]
    public void HandleDetail_InvalidGuid_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleDetail", "not-a-guid", "", "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a valid GUID");
    }

    [TestMethod]
    public void HandleDetail_UnknownId_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleDetail", Guid.NewGuid().ToString(), "", "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No security role found");
    }

    [TestMethod]
    public void HandleDetail_AmbiguousName_ReturnsCandidates()
    {
        SeedRole("Admin Role A");
        SeedRole("Admin Role B");
        var result = Invoke(NewTool(), "HandleDetail", "", "Admin Role", "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "roles match");
    }

    [TestMethod]
    public void HandleDetail_WithEntityFilter_GroupsPrivileges()
    {
        var (roleId, _) = SeedRole("Manager");
        var privId = SeedPrivilege("prvReadAccount", 1);
        SeedRolePrivilege(roleId, privId, 4);

        var result = Invoke(NewTool(), "HandleDetail", roleId.ToString(), "", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "account");
    }

    [TestMethod]
    public void HandleDetail_InvalidEntityFilter_ReturnsError()
    {
        var (roleId, _) = SeedRole("Manager");
        var result = Invoke(NewTool(), "HandleDetail", roleId.ToString(), "", "no_such_entity");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // user
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleUser_ByEmail_ReturnsDirectRoles()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var userId = SeedUser("Ada Lovelace", "ada@devkit.test");
        SeedUserRole(userId, roleId);

        var result = Invoke(NewTool(), "HandleUser", "ada@devkit.test", "");

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Ada Lovelace");
        StringAssert.Contains(result.GetText(), "1 role assigned");
    }

    [TestMethod]
    public void HandleUser_MissingUserId_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUser", "", "");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "user_id is required");
    }

    [TestMethod]
    public void HandleUser_UnknownUser_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUser", "nobody@devkit.test", "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleUser_ByGuid_ReturnsRoles()
    {
        var (roleId, _) = SeedRole("Reader");
        var userId = SeedUser("Grace Hopper", "grace@devkit.test");
        SeedUserRole(userId, roleId);

        var result = Invoke(NewTool(), "HandleUser", userId.ToString(), "");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Grace Hopper");
    }

    [TestMethod]
    public void HandleUser_AmbiguousEmail_ReturnsMultipleUsers()
    {
        SeedUser("A One", "shared@devkit.test");
        SeedUser("B Two", "shared@devkit.test");

        var result = Invoke(NewTool(), "HandleUser", "shared@devkit.test", "");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // assign / unassign
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleAssign_User_DryRun_ReturnsNotExecuted()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var userId = SeedUser("Ada Lovelace", "ada@devkit.test");

        var result = Invoke(NewTool(dryRun: true), "HandleAssign", userId.ToString(), "", roleId.ToString());

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void HandleAssign_User_Live_AssociatesRole()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var userId = SeedUser("Ada Lovelace", "ada@devkit.test");

        var result = Invoke(NewTool(), "HandleAssign", userId.ToString(), "", roleId.ToString());

        Assert.IsFalse(result.IsError == true);
        var associated = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.FetchExpression(
                $"<fetch><entity name='systemuserroles'><filter><condition attribute='systemuserid' operator='eq' value='{userId}'/></filter></entity></fetch>"));
        Assert.AreEqual(1, associated.Entities.Count);
    }

    [TestMethod]
    public void HandleAssign_Team_Live_AssociatesRole()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var teamId = SeedTeam("Field Team");

        var result = Invoke(NewTool(), "HandleAssign", "", teamId.ToString(), roleId.ToString());

        Assert.IsFalse(result.IsError == true);
    }

    [TestMethod]
    public void HandleAssign_MissingRole_ReturnsError()
    {
        var userId = SeedUser("Ada Lovelace", "ada@devkit.test");
        var result = Invoke(NewTool(), "HandleAssign", userId.ToString(), "", Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleAssign_UnknownUser_ReturnsError()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var result = Invoke(NewTool(), "HandleAssign", "ghost@devkit.test", "", roleId.ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleUnassign_User_Live_RemovesRole()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var userId = SeedUser("Ada Lovelace", "ada@devkit.test");
        SeedUserRole(userId, roleId);

        var result = Invoke(NewTool(), "HandleUnassign", userId.ToString(), "", roleId.ToString());

        Assert.IsFalse(result.IsError == true);
    }

    [TestMethod]
    public void HandleUnassign_Team_DryRun_ReturnsNotExecuted()
    {
        var (roleId, _) = SeedRole("Salesperson");
        var teamId = SeedTeam("Field Team");

        var result = Invoke(NewTool(dryRun: true), "HandleUnassign", "", teamId.ToString(), roleId.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleCreate_Live_CreatesRole()
    {
        var result = Invoke(NewTool(), "HandleCreate", "DevKit New Role", "");

        Assert.IsFalse(result.IsError == true);
        var roles = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("role") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("name") });
        Assert.AreEqual(1, roles.Entities.Count, string.Join(";", roles.Entities.Select(e => e.GetAttributeValue<string>("name"))));
    }

    [TestMethod]
    public void HandleCreate_DryRun_DoesNotCreate()
    {
        var result = Invoke(NewTool(dryRun: true), "HandleCreate", "DevKit Dry Role", "");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void HandleCreate_MissingName_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleCreate", "", "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleCreate_WithBusinessUnit_CreatesRole()
    {
        var result = Invoke(NewTool(), "HandleCreate", "BU Role", _rootBuId.ToString());
        Assert.IsFalse(result.IsError == true);
    }

    [TestMethod]
    public void HandleCreate_InvalidBusinessUnit_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleCreate", "BU Role", "not-a-guid");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // update (rename + privileges)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleUpdate_Rename_Live_UpdatesName()
    {
        var (roleId, _) = SeedRole("Old Name");
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdate", roleId.ToString(), "New Name", null);

        Assert.IsFalse(result.IsError == true);
        var updated = _context.GetOrganizationService().Retrieve("role", roleId, new Microsoft.Xrm.Sdk.Query.ColumnSet("name"));
        Assert.AreEqual("New Name", updated.GetAttributeValue<string>("name"));
    }

    [TestMethod]
    public void HandleUpdate_Rename_DryRun_DoesNotUpdate()
    {
        var (roleId, _) = SeedRole("Old Name");
        var tool = NewTool(dryRun: true);
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdate", roleId.ToString(), "New Name", null);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void HandleUpdate_MissingId_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUpdate", "", "New Name", null);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleUpdate_NothingToUpdate_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUpdate", Guid.NewGuid().ToString(), "", null);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Nothing to update");
    }

    [TestMethod]
    public void HandleUpdate_InvalidGuid_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUpdate", "not-a-guid", "New Name", null);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleUpdate_UnknownRole_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleUpdate", Guid.NewGuid().ToString(), "New Name", null);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No security role found");
    }

    [TestMethod]
    public void HandleUpdate_NotCustomizable_ReturnsError()
    {
        var (roleId, _) = SeedRole("Locked Role", customizable: false);
        var result = Invoke(NewTool(), "HandleUpdate", roleId.ToString(), "New Name", null);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not customizable");
    }

    [TestMethod]
    public void HandleUpdate_InvalidRight_ReturnsError()
    {
        var (roleId, _) = SeedRole("Manager");
        var result = Invoke(NewTool(), "HandleUpdate", roleId.ToString(), "",
            "[{\"entity\":\"account\",\"right\":\"Fly\",\"depth\":\"User\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid privilege right");
    }

    [TestMethod]
    public void HandleUpdate_InvalidDepth_ReturnsError()
    {
        var (roleId, _) = SeedRole("Manager");
        var result = Invoke(NewTool(), "HandleUpdate", roleId.ToString(), "",
            "[{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Galaxy\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid privilege depth");
    }

    [TestMethod]
    public void HandleUpdate_InvalidPrivilegesJson_ReturnsError()
    {
        var (roleId, _) = SeedRole("Manager");
        var result = Invoke(NewTool(), "HandleUpdate", roleId.ToString(), "", "not-json");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleUpdate_AddReadPrivilege_Live_WritesRolePrivilege()
    {
        var (roleId, _) = SeedRole("Manager");
        var privId = SeedPrivilege("prvReadAccount", 1);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdate", roleId.ToString(), "",
            "[{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"Organization\"}]");

        Assert.IsFalse(result.IsError == true);
        var rows = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("roleprivileges") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet(true) });
        Assert.AreEqual(1, rows.Entities.Count);
        Assert.AreEqual(privId, rows.Entities[0].GetAttributeValue<Guid>("privilegeid"));
    }

    [TestMethod]
    public void HandleUpdate_RemovePrivilege_DepthNone_DeletesRow()
    {
        var (roleId, _) = SeedRole("Manager");
        var privId = SeedPrivilege("prvReadAccount", 1);
        SeedRolePrivilege(roleId, privId, 4);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdate", roleId.ToString(), "",
            "[{\"entity\":\"account\",\"right\":\"Read\",\"depth\":\"None\"}]");

        Assert.IsFalse(result.IsError == true);
        var rows = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("roleprivileges") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet(true) });
        Assert.AreEqual(0, rows.Entities.Count);
    }

    // ──────────────────────────────────────────────
    // delete
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleDelete_Live_DeletesRoleAndWritesBackup()
    {
        var (roleId, _) = SeedRole("Doomed");
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleDelete", roleId.ToString());

        Assert.IsFalse(result.IsError == true);
        var remaining = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("role") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("name") });
        Assert.AreEqual(0, remaining.Entities.Count);
        StringAssert.Contains(result.GetText(), "Backup saved");
    }

    [TestMethod]
    public void HandleDelete_DryRun_DoesNotDelete()
    {
        var (roleId, _) = SeedRole("Survivor");
        var tool = NewTool(dryRun: true);
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleDelete", roleId.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        var remaining = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("role") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("name") });
        Assert.AreEqual(1, remaining.Entities.Count);
    }

    [TestMethod]
    public void HandleDelete_MissingId_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleDelete", "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleDelete_UnknownRole_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleDelete", Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleDelete_ManagedRole_ReturnsError()
    {
        var service = _context.GetOrganizationService();
        var roleId = Guid.NewGuid();
        service.Create(new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = "Managed Role",
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()),
            ["ismanaged"] = true,
            ["iscustomizable"] = new Microsoft.Xrm.Sdk.BooleanManagedProperty(true)
        });

        var result = Invoke(NewTool(), "HandleDelete", roleId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "managed");
    }

    // ──────────────────────────────────────────────
    // copy
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleCopy_Live_CreatesCloneWithPrivileges()
    {
        var (roleId, _) = SeedRole("Source Role");
        var privId = SeedPrivilege("prvReadAccount", 1);
        SeedRolePrivilege(roleId, privId, 4);

        var result = Invoke(NewTool(), "HandleCopy", roleId.ToString(), "Cloned Role");

        Assert.IsFalse(result.IsError == true);
        var roles = _context.GetOrganizationService().RetrieveMultiple(
            new Microsoft.Xrm.Sdk.Query.QueryExpression("role") { ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("name") });
        Assert.AreEqual(2, roles.Entities.Count);
    }

    [TestMethod]
    public void HandleCopy_DryRun_DoesNotCreate()
    {
        var (roleId, _) = SeedRole("Source Role");
        var result = Invoke(NewTool(dryRun: true), "HandleCopy", roleId.ToString(), "Cloned Role");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void HandleCopy_MissingName_ReturnsError()
    {
        var (roleId, _) = SeedRole("Source Role");
        var result = Invoke(NewTool(), "HandleCopy", roleId.ToString(), "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleCopy_UnknownRole_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleCopy", Guid.NewGuid().ToString(), "Clone");
        Assert.IsTrue(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // restore
    // ──────────────────────────────────────────────

    [TestMethod]
    public void HandleRestore_MissingPath_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleRestore", "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void HandleRestore_WrongExtension_ReturnsError()
    {
        var result = Invoke(NewTool(), "HandleRestore", "backup.txt");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), ".role.json");
    }

    [TestMethod]
    public void HandleRestore_FileMissing_ReturnsError()
    {
        var path = Path.Combine(_workspace, "missing.role.json");
        var result = Invoke(NewTool(), "HandleRestore", path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void HandleRestore_InvalidJson_ReturnsError()
    {
        var path = Path.Combine(_workspace, "bad.role.json");
        File.WriteAllText(path, "{ not json");
        var result = Invoke(NewTool(), "HandleRestore", path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not valid JSON");
    }

    [TestMethod]
    public void HandleRestore_DryRun_WouldRestore()
    {
        var (roleId, _) = SeedRole("Restore Target");
        var path = WriteBackup(roleId, "Restore Target");

        var result = Invoke(NewTool(dryRun: true), "HandleRestore", path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void HandleRestore_Live_AppliesPrivileges()
    {
        var (roleId, _) = SeedRole("Restore Target");
        var path = WriteBackup(roleId, "Restore Target");

        var result = Invoke(NewTool(), "HandleRestore", path);
        Assert.IsFalse(result.IsError == true);
    }

    private string WriteBackup(Guid roleId, string roleName, Guid? privilegeId = null)
    {
        var path = Path.Combine(_workspace, $"{roleId:N}_20260905000000.role.json");
        File.WriteAllText(path, $$"""
            {
              "roleId": "{{roleId}}",
              "roleName": "{{roleName}}",
              "businessUnitId": "{{Guid.NewGuid()}}",
              "privileges": [
                { "privilegeId": "{{privilegeId ?? Guid.NewGuid()}}", "name": "prvReadAccount", "depth": "Organization" }
              ]
            }
            """);
        return path;
    }

    /// <summary>Answers ReplacePrivilegesRoleRequest by rewriting roleprivileges rows in-memory.</summary>
    private sealed class FakeReplacePrivilegesRoleExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request) => request is Microsoft.Crm.Sdk.Messages.ReplacePrivilegesRoleRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var replace = (Microsoft.Crm.Sdk.Messages.ReplacePrivilegesRoleRequest)request;
            var service = context.GetOrganizationService();
            var existing = service.RetrieveMultiple(new Microsoft.Xrm.Sdk.Query.QueryExpression("roleprivileges")
            {
                ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet(true)
            });
            foreach (var row in existing.Entities)
                if (row.GetAttributeValue<Guid>("roleid") == replace.RoleId)
                    service.Delete("roleprivileges", row.Id);
            foreach (var p in replace.Privileges)
                service.Create(new Entity("roleprivileges", Guid.NewGuid())
                {
                    ["roleid"] = replace.RoleId,
                    ["privilegeid"] = p.PrivilegeId,
                    ["privilegedepthmask"] = (int)p.Depth
                });
            return new OrganizationResponse();
        }

        public Type GetResponsibleRequestType() => typeof(Microsoft.Crm.Sdk.Messages.ReplacePrivilegesRoleRequest);
    }

    /// <summary>Answers AddPrivilegesRoleRequest with an empty response.</summary>
    private sealed class FakeAddPrivilegesRoleExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request) => request is Microsoft.Crm.Sdk.Messages.AddPrivilegesRoleRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context) => new();

        public Type GetResponsibleRequestType() => typeof(Microsoft.Crm.Sdk.Messages.AddPrivilegesRoleRequest);
    }

    /// <summary>
    /// Wraps the FakeXrmEasy service: built-in CRUD pipeline handles Associate/
    /// Disassociate before fake message executors dispatch, and its M:N metadata
    /// cache does not load from InitializeMetadata in this version — so the
    /// role associations are intercepted and written to the intersect entities.
    /// </summary>
    private sealed class InterceptingOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public InterceptingOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, Microsoft.Xrm.Sdk.Query.ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);
        public OrganizationResponse Execute(OrganizationRequest request) => _inner.Execute(request);
        public EntityCollection RetrieveMultiple(Microsoft.Xrm.Sdk.Query.QueryBase query) => _inner.RetrieveMultiple(query);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
        {
            var service = _contextAccessor();
            foreach (var related in relatedEntities)
                service.Create(new Entity(IntersectFor(relationship.SchemaName), Guid.NewGuid())
                {
                    [PrimaryFor(entityName)] = entityId,
                    ["roleid"] = related.Id
                });
        }
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
        {
            var service = _contextAccessor();
            var primary = PrimaryFor(entityName);
            foreach (var related in relatedEntities)
            {
                var rows = service.RetrieveMultiple(new Microsoft.Xrm.Sdk.Query.QueryExpression(IntersectFor(relationship.SchemaName))
                {
                    ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet(false)
                });
                foreach (var row in rows.Entities)
                    if (row.GetAttributeValue<Guid>(primary) == entityId &&
                        row.GetAttributeValue<Guid>("roleid") == related.Id)
                        service.Delete(row.LogicalName, row.Id);
            }
        }

        private IOrganizationService _contextAccessor() => _inner;
    }

    private static string IntersectFor(string schemaName) => schemaName switch
    {
        "systemuserroles_association" => "systemuserroles",
        "teamroles_association" => "teamroles",
        _ => throw new InvalidOperationException($"Unexpected relationship: {schemaName}")
    };

    private static string PrimaryFor(string logicalName) => logicalName switch
    {
        "systemuser" => "systemuserid",
        "team" => "teamid",
        _ => throw new InvalidOperationException($"Unexpected target: {logicalName}")
    };

    private static EntityMetadata CreateManyToMany(string entity1, string entity2, string schemaName, string intersectEntity,
        params string[] attributeNames)
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty("LogicalName")!.SetValue(meta, entity1);
        typeof(EntityMetadata).GetProperty("PrimaryIdAttribute")!.SetValue(meta, $"{entity1}id");
        var rel = new ManyToManyRelationshipMetadata
        {
            Entity1LogicalName = entity1,
            Entity2LogicalName = entity2,
            Entity1IntersectAttribute = $"{entity1}id",
            Entity2IntersectAttribute = $"{entity2}id",
            IntersectEntityName = intersectEntity
        };
        typeof(RelationshipMetadataBase).GetProperty("SchemaName")!.SetValue(rel, schemaName);
        typeof(EntityMetadata).GetProperty("ManyToManyRelationships")!.SetValue(meta, new[] { rel });
        var attrs = attributeNames.Select(name =>
        {
            var attr = new StringAttributeMetadata(name);
            typeof(AttributeMetadata).GetProperty("LogicalName")!.SetValue(attr, name);
            typeof(AttributeMetadata).GetProperty("AttributeType")!.SetValue(attr, (AttributeTypeCode?)AttributeTypeCode.String);
            return (AttributeMetadata)attr;
        }).ToArray();
        typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(meta, attrs);
        return meta;
    }

    private static EntityMetadata EntityMeta(string logicalName, string displayName)
    {
        var metadata = new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = logicalName,
            DisplayName = new Label(displayName, 1033)
        };
        metadata.DisplayName.UserLocalizedLabel = new LocalizedLabel(displayName, 1033);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.MetadataId))!.SetValue(metadata, Guid.NewGuid());
        return metadata;
    }

    /// <summary>RetrieveEntityRequest answered from a local metadata list.</summary>
    private sealed class FakeRetrieveEntityExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<EntityMetadata> Metadata { get; } = [];

        public bool CanExecute(OrganizationRequest request) => request is RetrieveEntityRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var retrieveEntity = (RetrieveEntityRequest)request;
            var metadata = Metadata.FirstOrDefault(m => m.LogicalName == retrieveEntity.LogicalName)
                ?? throw new InvalidOperationException($"Metadata not found: {retrieveEntity.LogicalName}");
            var response = new RetrieveEntityResponse();
            response.Results["EntityMetadata"] = metadata;
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveEntityRequest);
    }

    /// <summary>RetrieveAllEntitiesRequest answered from a local metadata list.</summary>
    private sealed class FakeRetrieveAllEntitiesExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        private readonly FakeRetrieveEntityExecutor _inner;

        public FakeRetrieveAllEntitiesExecutor(FakeRetrieveEntityExecutor inner) => _inner = inner;

        public bool CanExecute(OrganizationRequest request) => request is RetrieveAllEntitiesRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var response = new RetrieveAllEntitiesResponse();
            response.Results["EntityMetadata"] = _inner.Metadata.ToArray();
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveAllEntitiesRequest);
    }
}
