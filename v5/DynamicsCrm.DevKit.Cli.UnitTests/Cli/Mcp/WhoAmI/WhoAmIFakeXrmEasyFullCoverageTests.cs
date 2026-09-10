using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeItEasy;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.WhoAmI;

/// <summary>
/// Coverage for WhoAmITool: identity, org details (language/currency/fiscal/audit),
/// security-role fetch (link-entity intercepted), impersonation text, and the
/// friendly-error path. Connection info is an A.Fake&lt;IMcpConnectionInfo&gt;.
/// </summary>
[TestClass]
public sealed class WhoAmIFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private WhoAmIOrgService _service = null!;
    private IMcpConnectionInfo _connectionInfo = null!;
    private Guid _userId;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        _userId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("systemuser", _userId)
        {
            ["fullname"] = "Jane Doe",
            ["domainname"] = "FAKE\\jane",
            ["internalemailaddress"] = "jane@contoso.com"
        });
        _service = new WhoAmIOrgService(_ctx.GetOrganizationService())
        {
            UserId = _userId,
            BusinessUnitId = Guid.NewGuid(),
            OrganizationId = Guid.NewGuid()
        };
        _connectionInfo = A.Fake<IMcpConnectionInfo>();
        A.CallTo(() => _connectionInfo.ConnectedOrgUri).Returns(new Uri("https://fakeorg.crm.dynamics.com"));
        A.CallTo(() => _connectionInfo.ConnectedOrgVersion).Returns(new Version("9.2.24000.1"));
        A.CallTo(() => _connectionInfo.ConnectedOrgFriendlyName).Returns("Fake Org");
        A.CallTo(() => _connectionInfo.ConnectedOrgUniqueName).Returns("fakeorg");
        A.CallTo(() => _connectionInfo.TenantId).Returns(Guid.NewGuid());
        A.CallTo(() => _connectionInfo.EnvironmentId).Returns(Guid.NewGuid().ToString());
    }

    private WhoAmITool NewTool(McpExecutionContext? context = null) =>
        new(_service, context ?? new McpExecutionContext(false), _connectionInfo);

    private static string Text(CallToolResult r) => r.GetText();

    private static string Json(CallToolResult r) => r.StructuredContent?.GetRawText() ?? "";

    [TestMethod]
    public void FullInfo_ReturnsIdentityOrgRoles()
    {
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["name"] = "Fake Org Ltd",
            ["languagecode"] = 1033,
            ["basecurrencyid"] = new EntityReference("transactioncurrency", Guid.NewGuid()) { Name = "US Dollar" },
            ["fiscalcalendarstart"] = new DateTime(2026, 1, 1),
            ["isauditenabled"] = true
        });
        _service.RoleRows = new List<Entity>
        {
            MakeRole("System Administrator"),
            MakeRole("Sales Manager")
        };

        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Connected to Fake Org (https://fakeorg.crm.dynamics.com) as Jane Doe");
        StringAssert.Contains(Text(result), ". Dataverse 9.2.24000.1");
        StringAssert.Contains(Text(result), "2 security role(s)");

        var json = Json(result);
        StringAssert.Contains(json, "1033 (English)");
        StringAssert.Contains(json, "US Dollar");
        StringAssert.Contains(json, "2026-01-01");
        StringAssert.Contains(json, "\"auditEnabled\":true");
        StringAssert.Contains(json, "jane@contoso.com");
        StringAssert.Contains(json, "System Administrator");
        StringAssert.Contains(json, "fakeorg");
    }

    [TestMethod]
    public void VietnameseLanguage_MapsName()
    {
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1066
        });
        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Json(result), "1066 (Vietnamese)");
    }

    [TestMethod]
    public void UnknownLanguage_FallsBackToLcid()
    {
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 9999
        });
        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Json(result), "9999 (LCID 9999)");
    }

    [TestMethod]
    public void NoRoles_TextOmitsRoleCount()
    {
        _service.RoleRows = new List<Entity>();
        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        Assert.IsFalse(Text(result).Contains("security role(s)"));
        Assert.IsFalse(Json(result).Contains("\"roles\":"));
    }

    [TestMethod]
    public void MissingOrgRow_OrgFieldsOmitted()
    {
        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        Assert.IsFalse(Json(result).Contains("\"language\":"));
        Assert.IsFalse(Json(result).Contains("\"currency\":"));
    }

    [TestMethod]
    public void Impersonation_ShownInText()
    {
        var context = new McpExecutionContext(false);
        typeof(McpExecutionContext).GetField("<ImpersonatedUser>k__BackingField", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)!.SetValue(context, "DOMAIN\\manager");
        var result = NewTool(context).whoami();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Impersonating: DOMAIN\\manager");
    }

    [TestMethod]
    public void WhoAmIRequestFails_ReturnsFriendlyError()
    {
        _service.FailWhoAmI = true;
        var result = NewTool().whoami();
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Error]");
        StringAssert.Contains(Text(result), "[Hint]");
    }

    [TestMethod]
    public void RoleRowWithoutName_Skipped()
    {
        _service.RoleRows = new List<Entity>
        {
            new Entity("role", Guid.NewGuid()) { ["roleid"] = Guid.NewGuid() },
            MakeRole("Named Role")
        };
        var result = NewTool().whoami();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 security role(s)");
    }

    private static Entity MakeRole(string name)
    {
        var id = Guid.NewGuid();
        return new Entity("role", id) { ["roleid"] = id, ["name"] = name };
    }

    private sealed class WhoAmIOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public Guid UserId;
        public Guid BusinessUnitId;
        public Guid OrganizationId;
        public List<Entity>? RoleRows;
        public bool FailWhoAmI;

        public WhoAmIOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is WhoAmIRequest)
            {
                if (FailWhoAmI)
                    throw new InvalidOperationException("connection dead");
                var resp = new WhoAmIResponse();
                resp.Results["UserId"] = UserId;
                resp.Results["BusinessUnitId"] = BusinessUnitId;
                resp.Results["OrganizationId"] = OrganizationId;
                return resp;
            }
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fe && fe.Query.Contains("entity name='role'"))
            {
                var rows = new EntityCollection();
                if (RoleRows != null) rows.Entities.AddRange(RoleRows);
                return rows;
            }
            return _inner.RetrieveMultiple(query);
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
