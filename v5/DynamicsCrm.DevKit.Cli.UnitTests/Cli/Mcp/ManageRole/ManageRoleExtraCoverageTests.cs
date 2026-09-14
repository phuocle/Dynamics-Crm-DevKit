using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _requests = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _requests.Clear();

        _entities.Add(TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name")));

        var rootBuId = Guid.NewGuid();
        var roleId = Guid.NewGuid();
        var userId = Guid.NewGuid();

        _fake.OnExecute = request =>
        {
            _requests.Add(request);
            return request switch
            {
                WhoAmIRequest => new WhoAmIResponse { Results = { ["UserId"] = userId } },
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                DeleteRequest => new DeleteResponse(),
                AssociateRequest => new AssociateResponse(),
                DisassociateRequest => new DisassociateResponse(),
                _ => new OrganizationResponse()
            };
        };

        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "role")
            {
                return new Entity("role", id)
                {
                    ["name"] = "Salesperson",
                    ["ismanaged"] = false,
                    ["iscustomizable"] = new BooleanManagedProperty(true),
                    ["businessunitid"] = new EntityReference("businessunit", rootBuId) { Name = "Root BU" }
                };
            }
            return new Entity(entityName, id);
        };

        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            if (query is QueryExpression qe)
            {
                if (qe.EntityName == "role")
                {
                    var role = new Entity("role", roleId)
                    {
                        ["name"] = "Salesperson",
                        ["ismanaged"] = false,
                        ["iscustomizable"] = new BooleanManagedProperty(true),
                        ["businessunitid"] = new EntityReference("businessunit", rootBuId) { Name = "Root BU" }
                    };
                    ec.Entities.Add(role);
                }
                else if (qe.EntityName == "businessunit")
                {
                    var bu = new Entity("businessunit", rootBuId)
                    {
                        ["name"] = "Root BU",
                        ["businessunitid"] = rootBuId
                    };
                    ec.Entities.Add(bu);
                }
                else if (qe.EntityName == "systemuser")
                {
                    var user = new Entity("systemuser", userId)
                    {
                        ["systemuserid"] = userId,
                        ["fullname"] = "John Doe",
                        ["internalemailaddress"] = "john@contoso.com",
                        ["isdisabled"] = false,
                        ["businessunitid"] = new EntityReference("businessunit", rootBuId) { Name = "Root BU" }
                    };
                    ec.Entities.Add(user);
                }
            }
            else if (query is FetchExpression fe)
            {
                var fetch = fe.Query.Replace('"', '\'');
                if (fetch.Contains("<entity name='role'") && fetch.Contains("systemuserroles"))
                {
                    var sysAdminRole = new Entity("role", Guid.NewGuid())
                    {
                        ["name"] = "System Administrator"
                    };
                    ec.Entities.Add(sysAdminRole);
                }
                else if (fetch.Contains("<entity name='roleprivileges'"))
                {
                    var rp = new Entity("roleprivileges", Guid.NewGuid())
                    {
                        ["privilegeid"] = Guid.NewGuid(),
                        ["privilegedepthmask"] = 8, // Organization
                        ["p.name"] = new AliasedValue("privilege", "name", "prvReadaccount")
                    };
                    ec.Entities.Add(rp);
                }
                else if (fetch.Contains("<entity name='systemuserroles'"))
                {
                    var sur = new Entity("systemuserroles", Guid.NewGuid())
                    {
                        ["roleid"] = roleId,
                        ["r.name"] = new AliasedValue("role", "name", "Salesperson"),
                        ["r.ismanaged"] = new AliasedValue("role", "ismanaged", false),
                        ["r.iscustomizable"] = new AliasedValue("role", "iscustomizable", new BooleanManagedProperty(true)),
                        ["r.businessunitid"] = new AliasedValue("role", "businessunitid", new EntityReference("businessunit", rootBuId) { Name = "Root BU" })
                    };
                    ec.Entities.Add(sur);
                }
            }
            return ec;
        };

        _fake.OnCreate = entity => Guid.NewGuid();
        _fake.OnUpdate = entity => { };
        _fake.OnDelete = (entityName, id) => { };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private ManageRoleTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: false));

    [TestMethod]
    public async Task ManageRole_List_ReturnsRoles()
    {
        var tool = CreateTool();
        var result = await tool.manage_role(null!, action: "list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "role");
    }

    [TestMethod]
    public async Task ManageRole_Detail_ReturnsRolePrivileges()
    {
        var tool = CreateTool();
        var result = await tool.manage_role(null!, action: "detail", role_name: "Salesperson");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Salesperson");
    }

    [TestMethod]
    public async Task ManageRole_User_ReturnsUserRolesAndPrivileges()
    {
        var tool = CreateTool();
        var result = await tool.manage_role(null!, action: "user", user_id: "john@contoso.com", entity_name: "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "John Doe");
    }

    [TestMethod]
    public async Task ManageRole_Create_DryRunAndLive()
    {
        var toolDry = CreateTool(dryRun: true);
        var dryRes = await toolDry.manage_role(null!, action: "create", role_name: "New Role");
        Assert.IsFalse(dryRes.IsError == true, dryRes.GetText());
        StringAssert.Contains(dryRes.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var liveRes = await toolLive.manage_role(null!, action: "create", role_name: "New Role");
        Assert.IsFalse(liveRes.IsError == true, liveRes.GetText());
        StringAssert.Contains(liveRes.GetText(), "Created role 'New Role'");
    }

    [TestMethod]
    public async Task ManageRole_AssignUnassign_DryRunAndLive()
    {
        var roleId = Guid.NewGuid().ToString("D");
        var toolDry = CreateTool(dryRun: true);

        var dryAssign = await toolDry.manage_role(null!, action: "assign", user_id: "john@contoso.com", role_id: roleId);
        Assert.IsFalse(dryAssign.IsError == true, dryAssign.GetText());
        StringAssert.Contains(dryAssign.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var liveAssign = await toolLive.manage_role(null!, action: "assign", user_id: "john@contoso.com", role_id: roleId);
        Assert.IsFalse(liveAssign.IsError == true, liveAssign.GetText());

        var liveUnassign = await toolLive.manage_role(null!, action: "unassign", user_id: "john@contoso.com", role_id: roleId);
        Assert.IsFalse(liveUnassign.IsError == true, liveUnassign.GetText());
    }

    [TestMethod]
    public async Task ManageRole_CopyDelete_DryRunAndLive()
    {
        var roleId = Guid.NewGuid().ToString("D");
        var toolDry = CreateTool(dryRun: true);

        var copyDry = await toolDry.manage_role(null!, action: "copy", role_id: roleId, role_name: "Salesperson Copy");
        Assert.IsFalse(copyDry.IsError == true, copyDry.GetText());
        StringAssert.Contains(copyDry.GetText(), "[DryRun]");

        var deleteDry = await toolDry.manage_role(null!, action: "delete", role_id: roleId);
        Assert.IsFalse(deleteDry.IsError == true, deleteDry.GetText());
        StringAssert.Contains(deleteDry.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var copyLive = await toolLive.manage_role(null!, action: "copy", role_id: roleId, role_name: "Salesperson Copy");
        Assert.IsFalse(copyLive.IsError == true, copyLive.GetText());

        var deleteLive = await toolLive.manage_role(null!, action: "delete", role_id: roleId);
        Assert.IsFalse(deleteLive.IsError == true, deleteLive.GetText());
    }

    [TestMethod]
    public async Task ManageRole_Update_DryRunAndLive()
    {
        var roleId = Guid.NewGuid().ToString("D");

        var toolDry = CreateTool(dryRun: true);
        var updateDry = await toolDry.manage_role(null!, action: "update", role_id: roleId, role_name: "Salesperson Renamed");
        Assert.IsFalse(updateDry.IsError == true, updateDry.GetText());
        StringAssert.Contains(updateDry.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var updateLive = await toolLive.manage_role(null!, action: "update", role_id: roleId, role_name: "Salesperson Renamed");
        Assert.IsFalse(updateLive.IsError == true, updateLive.GetText());
    }

    [TestMethod]
    public async Task ManageRole_InvalidAction_ReturnsError()
    {
        var tool = CreateTool();
        var res = await tool.manage_role(null!, action: "unknown_action");
        Assert.IsTrue(res.IsError == true);
    }
}

