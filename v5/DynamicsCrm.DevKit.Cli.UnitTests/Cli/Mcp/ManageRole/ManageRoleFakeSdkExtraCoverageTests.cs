using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRole;

/// <summary>
/// Extra manage_role coverage on a FakeSdkClient: role detail with privileges
/// (privilege grouping output), roleprivileges pagination (paging-cookie loop),
/// and the ambiguous entity-filter error path of detail/user.
/// </summary>
[TestClass]
public sealed class ManageRoleFakeSdkExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity _role = null!;
    private List<Entity> _rolePrivilegeRows = new();
    private readonly Queue<EntityCollection> _rolePrivilegePages = new();
    private List<EntityMetadata> _allEntities = new();
    private Entity? _user;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _rolePrivilegeRows = new List<Entity>();
        _rolePrivilegePages.Clear();
        _allEntities = new List<EntityMetadata>();
        _user = null;

        var roleId = Guid.NewGuid();
        _role = new Entity("role", roleId)
        {
            ["roleid"] = roleId,
            ["name"] = "Sales Manager",
            ["ismanaged"] = false,
            ["iscustomizable"] = new BooleanManagedProperty(true),
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Root BU" }
        };

        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
    }

    public void Dispose() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = _allEntities.ToArray() }
        },
        RetrieveEntityRequest => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = TestMetadata.Entity("account", "Account") }
        },
        _ => new OrganizationResponse()
    };

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "role" => new EntityCollection(new[] { _role }),
                "systemuser" => _user != null ? new EntityCollection(new[] { _user }) : new EntityCollection(),
                _ => new EntityCollection()
            };
        }

        if (query is FetchExpression fe)
        {
            var fetch = fe.Query;
            if (fetch.Contains("<entity name='roleprivileges'"))
            {
                if (_rolePrivilegePages.Count > 0)
                    return _rolePrivilegePages.Dequeue();
                return new EntityCollection(_rolePrivilegeRows);
            }
        }

        return new EntityCollection();
    }

    private static Entity PrivilegeRow(string privilegeName, int depthMask) => new("roleprivileges", Guid.NewGuid())
    {
        ["privilegedepthmask"] = depthMask,
        ["priv.name"] = new AliasedValue("privilege", "name", privilegeName),
        ["priv.privilegeid"] = new AliasedValue("privilege", "privilegeid", Guid.NewGuid())
    };

    private ManageRoleTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    [TestMethod]
    public async Task Detail_WithPrivileges_GroupsPrivilegesByEntity()
    {
        _rolePrivilegeRows =
        [
            PrivilegeRow("prvReadaccount", 8),
            PrivilegeRow("prvCreateaccount", 2),
            PrivilegeRow("prvReadcontact", 1)
        ];

        var result = await NewTool().manage_role(null!, action: "detail", role_name: "Sales Manager");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Sales Manager");
        StringAssert.Contains(result.GetText(), "3 privileges across 2 entities");
        // Grouped privileges live in the structured payload, not the one-line text.
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "account");
        StringAssert.Contains(json, "contact");
    }

    [TestMethod]
    public async Task Detail_RolePrivileges_PagesThroughPagingCookie()
    {
        // Page 1: one privilege with MoreRecords=true; page 2: one more privilege.
        _rolePrivilegePages.Enqueue(new EntityCollection(new[] { PrivilegeRow("prvReadaccount", 8) })
        {
            MoreRecords = true,
            PagingCookie = "cookie-page1"
        });
        _rolePrivilegePages.Enqueue(new EntityCollection(new[] { PrivilegeRow("prvWriteaccount", 2) }));

        var result = await NewTool().manage_role(null!, action: "detail", role_id: _role.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(0, _rolePrivilegePages.Count);
        StringAssert.Contains(result.GetText(), "2 privileges across 1 entities");
    }

    [TestMethod]
    public async Task Detail_AmbiguousEntityName_ReturnsEntityMatches()
    {
        _rolePrivilegeRows = [PrivilegeRow("prvReadaccount", 8)];
        // Same display name, different logical names — a display-only input is ambiguous.
        _allEntities =
        [
            TestMetadata.Entity("new_thing", "Thing"),
            TestMetadata.Entity("new_thing2", "Thing")
        ];

        var result = await NewTool().manage_role(null!, action: "detail", role_id: _role.Id.ToString(), entity_name: "Thing");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name 'Thing'");
        StringAssert.Contains(result.GetText(), "more specific entity_name");
    }

    [TestMethod]
    public async Task User_AmbiguousEntityName_ReturnsEntityMatches()
    {
        var userId = Guid.NewGuid();
        // Same display name, different logical names — a display-only input is ambiguous.
        _allEntities =
        [
            TestMetadata.Entity("new_thing", "Thing"),
            TestMetadata.Entity("new_thing2", "Thing")
        ];

        _user = new Entity("systemuser", userId)
        {
            ["systemuserid"] = userId,
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        };

        var result = await NewTool().manage_role(null!, action: "user", user_id: "jane@contoso.com", entity_name: "Thing");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name 'Thing'");
        StringAssert.Contains(result.GetText(), "more specific entity_name");
    }
}
