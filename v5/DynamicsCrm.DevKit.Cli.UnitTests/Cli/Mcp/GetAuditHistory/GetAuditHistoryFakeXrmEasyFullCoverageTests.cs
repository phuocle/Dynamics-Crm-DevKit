using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetAuditHistory;

/// <summary>
/// Coverage for GetAuditHistoryTool (browse + detail modes). The decorator answers
/// RetrieveRecordChangeHistoryRequest with crafted AuditDetailCollections, the audit
/// browse FetchExpressions with hand-built rows, and RetrieveEntityRequest with
/// seeded metadata; systemuser queries hit FakeXrmEasy CRUD.
/// </summary>
[TestClass]
public sealed class GetAuditHistoryFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private AuditOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        _service = new AuditOrgService(_ctx.GetOrganizationService());
    }

    private GetAuditHistoryTool NewTool() => new(_service);

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private static EntityMetadata MakeAccountMetadata()
    {
        var name = new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", DisplayName = MakeLabel("Account Name") };
        var pick = new PicklistAttributeMetadata
        {
            LogicalName = "new_option",
            SchemaName = "New_Option",
            DisplayName = MakeLabel("Option"),
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
                {
                    new OptionMetadata { Label = MakeLabel("Preferred"), Value = 3 },
                    new OptionMetadata { Label = MakeLabel("Standard"), Value = 1 }
                }))
        };
        var state = new StateAttributeMetadata
        {
            LogicalName = "statecode",
            SchemaName = "StateCode",
            DisplayName = MakeLabel("Status"),
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
                {
                    new OptionMetadata { Label = MakeLabel("Active"), Value = 0 },
                    new OptionMetadata { Label = MakeLabel("Inactive"), Value = 1 }
                }))
        };
        var status = new StatusAttributeMetadata
        {
            LogicalName = "statuscode",
            SchemaName = "StatusCode",
            DisplayName = MakeLabel("Status Reason"),
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
                {
                    new OptionMetadata { Label = MakeLabel("Open"), Value = 1 }
                }))
        };
        var flag = new BooleanAttributeMetadata
        {
            LogicalName = "new_flag",
            SchemaName = "New_Flag",
            DisplayName = MakeLabel("Flag"),
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata { Label = MakeLabel("Yes"), Value = 1 },
                new OptionMetadata { Label = MakeLabel("No"), Value = 0 })
        };
        var meta = new EntityMetadata { LogicalName = "account", SchemaName = "Account", DisplayName = MakeLabel("Account") };
        Set(meta, "PrimaryIdAttribute", "accountid");
        Set(meta, "PrimaryNameAttribute", "name");
        Set(meta, "ObjectTypeCode", 1);
        Set(meta, "Attributes", new AttributeMetadata[] { name, pick, state, status, flag });
        return meta;
    }

    private static EntityMetadata MakeNoOtcMetadata()
    {
        var meta = new EntityMetadata { LogicalName = "nootcentity", SchemaName = "NoOtcEntity", DisplayName = MakeLabel("No Otc") };
        Set(meta, "PrimaryIdAttribute", "nootcentityid");
        Set(meta, "Attributes", Array.Empty<AttributeMetadata>());
        return meta;
    }

    private static Entity AuditRow(DateTime createdOn, int action, int operation, string userName, string recordName, string otc = "1")
    {
        var row = new Entity("audit");
        row["createdon"] = createdOn;
        row["action"] = new OptionSetValue(action);
        row["operation"] = new OptionSetValue(operation);
        row["userid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = userName };
        row["objectid"] = new EntityReference("account", Guid.NewGuid()) { Name = recordName };
        row["objecttypecode"] = otc;
        return row;
    }

    private static AttributeAuditDetail MakeAttrDetail(DateTime createdOn, int action, string userName,
        Entity? oldValue = null, Entity? newValue = null, Guid? userId = null)
    {
        var audit = new Entity("audit");
        audit["createdon"] = createdOn;
        audit["action"] = new OptionSetValue(action);
        audit["userid"] = new EntityReference("systemuser", userId ?? Guid.NewGuid()) { Name = userName };
        return new AttributeAuditDetail
        {
            AuditRecord = audit,
            OldValue = oldValue,
            NewValue = newValue
        };
    }

    private static AuditDetail MakeNonAttrDetail(DateTime createdOn, string typeName, int action)
    {
        var audit = new Entity("audit");
        audit["createdon"] = createdOn;
        audit["action"] = new OptionSetValue(action);
        audit["userid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "System" };
        AuditDetail detail = typeName switch
        {
            "RelationshipAuditDetail" => new RelationshipAuditDetail(),
            "ShareAuditDetail" => new ShareAuditDetail(),
            _ => new RolePrivilegeAuditDetail()
        };
        detail.AuditRecord = audit;
        return detail;
    }

    private static AuditDetailCollection MakeCollection(params AuditDetail[] details)
    {
        var c = new AuditDetailCollection();
        foreach (var d in details) c.AuditDetails.Add(d);
        return c;
    }

    private static string Text(CallToolResult r) => r.GetText();

    private static string Json(CallToolResult r) => r.StructuredContent?.GetRawText() ?? "";

    // ──────────────────────────────────────────────
    // validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void RecordIdWithoutEntityName_ReturnsError()
    {
        var result = NewTool().get_audit_history(record_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name is required when record_id is provided");
    }

    [TestMethod]
    public void AttributeNameWithoutRecordId_ReturnsError()
    {
        var result = NewTool().get_audit_history(entity_name: "account", attribute_name: "name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "attribute_name requires record_id (detail mode)");
    }

    [TestMethod]
    public void BadRecordIdGuid_ReturnsError()
    {
        var result = NewTool().get_audit_history(entity_name: "account", record_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'not-a-guid' is not a valid GUID");
    }

    [TestMethod]
    public void InvalidOperation_ReturnsError()
    {
        var result = NewTool().get_audit_history(operation: "frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'frobnicate' is not a valid operation");
    }

    [TestMethod]
    public void UnknownEntityName_ReturnsError()
    {
        var result = NewTool().get_audit_history(entity_name: "ghostentity", record_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "ghostentity");
    }

    [TestMethod]
    public void UnknownAttributeName_ReturnsError()
    {
        _service.Entities.Add(MakeAccountMetadata());
        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString(), attribute_name: "nosuch");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "attribute_name 'nosuch'");
    }

    [TestMethod]
    public void BadFromDate_ReturnsError()
    {
        var result = NewTool().get_audit_history(from_date: "not-a-date");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not a valid ISO 8601 date for from_date");
    }

    [TestMethod]
    public void BadToDate_ReturnsError()
    {
        var result = NewTool().get_audit_history(to_date: "not-a-date");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not a valid ISO 8601 date for to_date");
    }

    [TestMethod]
    public void FromAfterTo_ReturnsError()
    {
        var result = NewTool().get_audit_history(from_date: "2026-05-01", to_date: "2026-01-01");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "is after to_date");
    }

    // ──────────────────────────────────────────────
    // browse mode
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Browse_AllEntities_ReturnsEntries()
    {
        _service.BrowseRows = new List<Entity>
        {
            AuditRow(DateTime.UtcNow.AddMinutes(-5), 1, 1, "Jane Doe", "Contoso"),
            AuditRow(DateTime.UtcNow.AddMinutes(-3), 2, 2, "John Smith", "Fabrikam")
        };
        var result = NewTool().get_audit_history();
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "all entities");
        StringAssert.Contains(Text(result), "2 entries");
        var json = Json(result);
        StringAssert.Contains(json, "Jane Doe");
        StringAssert.Contains(json, "Create");
        StringAssert.Contains(json, "Update");
    }

    [TestMethod]
    public void Browse_ByEntity_UsesObjectTypeCode()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.BrowseRows = new List<Entity> { AuditRow(DateTime.UtcNow.AddMinutes(-5), 1, 1, "Jane", "Contoso") };
        var result = NewTool().get_audit_history(entity_name: "Account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account (last 24h): 1 entry");
        StringAssert.Contains(_service.LastBrowseFetch!, "objecttypecode");
    }

    [TestMethod]
    public void Browse_EntityWithoutOtc_ReturnsError()
    {
        _service.Entities.Add(MakeNoOtcMetadata());
        var result = NewTool().get_audit_history(entity_name: "nootcentity");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "has no ObjectTypeCode");
    }

    [TestMethod]
    public void Browse_WithOperationFilter_BuildsActionCondition()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.BrowseRows = new List<Entity>();
        var result = NewTool().get_audit_history(entity_name: "account", operation: "Delete");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(_service.LastBrowseFetch!, "attribute='action' operator='eq' value='3'");
        StringAssert.Contains(Text(result), "op=Delete");
        StringAssert.Contains(Text(result), "0 entries");
    }

    [TestMethod]
    public void Browse_UserEmailResolves_ServerSideFilter()
    {
        _ctx.GetOrganizationService().Create(new Entity("systemuser", Guid.NewGuid())
        {
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });
        _service.Entities.Add(MakeAccountMetadata());
        _service.BrowseRows = new List<Entity> { AuditRow(DateTime.UtcNow.AddMinutes(-5), 2, 2, "Jane Doe", "Contoso") };
        var result = NewTool().get_audit_history(entity_name: "account", user_filter: "jane@contoso.com");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "user contains \"Jane Doe\"");
        StringAssert.Contains(_service.LastBrowseFetch!, "operator='eq' value='");
    }

    [TestMethod]
    public void Browse_AmbiguousUserEmail_ReturnsError()
    {
        _ctx.GetOrganizationService().Create(new Entity("systemuser", Guid.NewGuid())
        {
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });
        _ctx.GetOrganizationService().Create(new Entity("systemuser", Guid.NewGuid())
        {
            ["fullname"] = "Jane Doe Two",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });
        var result = NewTool().get_audit_history(user_filter: "jane@contoso.com");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "2 users match 'jane@contoso.com'");
        StringAssert.Contains(Text(result), "systemuserid");
    }

    [TestMethod]
    public void Browse_NameFragment_PagesAllAndFilters()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.BrowsePages = new List<List<Entity>>
        {
            new()
            {
                AuditRow(DateTime.UtcNow.AddMinutes(-5), 1, 1, "Jane Doe", "Contoso"),
                AuditRow(DateTime.UtcNow.AddMinutes(-4), 2, 2, "Bob Ray", "Fabrikam")
            },
            new()
            {
                AuditRow(DateTime.UtcNow.AddMinutes(-3), 2, 2, "Jane Kane", "Globex")
            }
        };
        var result = NewTool().get_audit_history(entity_name: "account", user_filter: "Jane", max_records: 50);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 entries");
        var json = Json(result);
        StringAssert.Contains(json, "Jane Doe");
        StringAssert.Contains(json, "Jane Kane");
        Assert.IsFalse(json.Contains("Bob Ray"));
    }

    [TestMethod]
    public void Browse_EmptyResult_ReturnsZero()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.BrowseRows = new List<Entity>();
        var result = NewTool().get_audit_history(entity_name: "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 entries");
    }

    // ──────────────────────────────────────────────
    // detail mode
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_AttributeChanges_WithLabels()
    {
        _service.Entities.Add(MakeAccountMetadata());
        var id = Guid.NewGuid();
        var oldValue = new Entity("account");
        oldValue["name"] = "Old Name";
        oldValue["new_option"] = new OptionSetValue(1);
        var newValue = new Entity("account");
        newValue["name"] = "New Name";
        newValue["new_option"] = new OptionSetValue(3);
        newValue["new_flag"] = true;
        newValue["new_ref"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Ref Co" };
        newValue["new_money"] = new Money(12.5m);
        var detail = MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane Doe", oldValue, newValue);
        detail.NewValue!.FormattedValues["new_flag"] = "Formatted Yes";
        _service.DetailCollection = MakeCollection(detail);

        var result = NewTool().get_audit_history(entity_name: "account", record_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 entry");
        var json = Json(result);
        StringAssert.Contains(json, "Account Name");
        StringAssert.Contains(json, "Old Name");
        StringAssert.Contains(json, "New Name");
        StringAssert.Contains(json, "Preferred");
        StringAssert.Contains(json, "Formatted Yes");
        StringAssert.Contains(json, "Ref Co");
        StringAssert.Contains(json, "12.50");
    }

    [TestMethod]
    public void Detail_StateAndStatusLabels()
    {
        _service.Entities.Add(MakeAccountMetadata());
        var newValue = new Entity("account");
        newValue["statecode"] = new OptionSetValue(0);
        newValue["statuscode"] = new OptionSetValue(1);
        var detail = MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 41, "Jane", null, newValue);
        _service.DetailCollection = MakeCollection(detail);

        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "Active");
        StringAssert.Contains(json, "Open");
        StringAssert.Contains(json, "SetState");
    }

    [TestMethod]
    public void Detail_NonAttributeEvents()
    {
        var now = DateTime.UtcNow.AddMinutes(-5);
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = MakeCollection(MakeNonAttrDetail(now, "RelationshipAuditDetail", 11), MakeNonAttrDetail(now, "ShareAuditDetail", 13), MakeNonAttrDetail(now, "RolePrivilegeAuditDetail", 41));
        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "3 entries");
        var json = Json(result);
        StringAssert.Contains(json, "Relationship");
        StringAssert.Contains(json, "Share");
        StringAssert.Contains(json, "RolePrivilege");
    }

    [TestMethod]
    public void Detail_TimeWindowFilter_SkipsOldEvents()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = MakeCollection(MakeAttrDetail(DateTime.UtcNow.AddDays(-30), 1, "Jane", null, new Entity("account") { ["name"] = "X" }));
        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 audit entries");
    }

    [TestMethod]
    public void Detail_OperationFilter_DropsMismatches()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = MakeCollection(MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane", new Entity("account") { ["name"] = "A" }, new Entity("account") { ["name"] = "B" }));
        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString(), operation: "Create");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 audit entries");
    }

    [TestMethod]
    public void Detail_AttributeFilter_KeepsOnlyMatching()
    {
        _service.Entities.Add(MakeAccountMetadata());
        var oldV = new Entity("account");
        oldV["name"] = "A";
        oldV["new_option"] = new OptionSetValue(1);
        var newV = new Entity("account");
        newV["name"] = "B";
        newV["new_option"] = new OptionSetValue(3);
        _service.DetailCollection = MakeCollection(MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane", oldV, newV));
        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), attribute_name: "Option");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 entry");
        var json = Json(result);
        StringAssert.Contains(json, "new_option");
        Assert.IsFalse(json.Contains("\"name\""));
    }

    [TestMethod]
    public void Detail_AttributeFilter_AllDropped_ReturnsZero()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = MakeCollection(MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane", new Entity("account") { ["name"] = "A" }, new Entity("account") { ["name"] = "B" }));
        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), attribute_name: "new_option");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 audit entries");
    }

    [TestMethod]
    public void Detail_UserFilter_NameContains_Matches()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = MakeCollection(MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane Doe", new Entity("account") { ["name"] = "A" }, new Entity("account") { ["name"] = "B" }), MakeAttrDetail(DateTime.UtcNow.AddMinutes(-4), 2, "Bob Ray", new Entity("account") { ["name"] = "C" }, new Entity("account") { ["name"] = "D" }));
        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), user_filter: "Jane");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 entry");
        StringAssert.Contains(Json(result), "Jane Doe");
    }

    [TestMethod]
    public void Detail_UserEmailResolved_MatchesById()
    {
        var userId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("systemuser", userId)
        {
            ["fullname"] = "Jane Doe",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });
        _service.Entities.Add(MakeAccountMetadata());
        var detail = MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5), 2, "Jane Doe",
            new Entity("account") { ["name"] = "A" }, new Entity("account") { ["name"] = "B" }, userId);
        _service.DetailCollection = MakeCollection(detail);

        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), user_filter: "jane@contoso.com");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 entry");
    }

    [TestMethod]
    public void Detail_EmptyCollection_ReturnsZero()
    {
        _service.Entities.Add(MakeAccountMetadata());
        _service.DetailCollection = new AuditDetailCollection();
        var result = NewTool().get_audit_history(entity_name: "account", record_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 audit entries");
    }

    [TestMethod]
    public void Detail_MaxRecordsClamp_LimitsEntries()
    {
        _service.Entities.Add(MakeAccountMetadata());
        var collection = new AuditDetailCollection();
        for (var i = 0; i < 5; i++)
            collection.AuditDetails.Add(MakeAttrDetail(DateTime.UtcNow.AddMinutes(-5 - i), 2, "Jane",
                new Entity("account") { ["name"] = "A" + i }, new Entity("account") { ["name"] = "B" + i }));
        _service.DetailCollection = collection;
        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), max_records: 2, user_filter: "Jane");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 entries");
    }

    // ──────────────────────────────────────────────
    // decorator
    // ──────────────────────────────────────────────

    private sealed class AuditOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();
        public List<Entity> BrowseRows = new();
        public List<List<Entity>>? BrowsePages;
        public AuditDetailCollection? DetailCollection;
        public string? LastBrowseFetch;

        public AuditOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case RetrieveAllEntitiesRequest:
                {
                    var resp = new RetrieveAllEntitiesResponse();
                    resp.Results["EntityMetadata"] = Entities.ToArray();
                    return resp;
                }
                case RetrieveEntityRequest retrieveEntity:
                {
                    var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                    var resp = new RetrieveEntityResponse();
                    resp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                    return resp;
                }
                case RetrieveRecordChangeHistoryRequest:
                {
                    var resp = new RetrieveRecordChangeHistoryResponse();
                    resp.Results["AuditDetailCollection"] = DetailCollection ?? new AuditDetailCollection();
                    return resp;
                }
                default:
                    return _inner.Execute(request);
            }
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fe)
            {
                LastBrowseFetch = fe.Query;
                var rows = new EntityCollection();
                if (BrowsePages != null)
                {
                    var page = Math.Min(BrowsePages.Count - 1, _browsePage);
                    rows.Entities.AddRange(BrowsePages[page]);
                    rows.MoreRecords = _browsePage < BrowsePages.Count - 1;
                    rows.PagingCookie = "cookie" + _browsePage;
                    _browsePage++;
                    return rows;
                }
                rows.Entities.AddRange(BrowseRows);
                return rows;
            }
            return _inner.RetrieveMultiple(query);
        }

        private int _browsePage;

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
