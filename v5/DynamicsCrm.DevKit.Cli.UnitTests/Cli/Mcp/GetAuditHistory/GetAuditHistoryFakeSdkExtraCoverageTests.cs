using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetAuditHistory;

/// <summary>
/// Extra get_audit_history coverage on a FakeSdkClient: the tool-level exception
/// fallback, detail-mode pagination past page one (user filter + MoreRecords),
/// option-set label resolution inside attribute change formatting, and the
/// ambiguous email user filter.
/// </summary>
[TestClass]
public sealed class GetAuditHistoryFakeSdkExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly Queue<EntityCollection> _browsePages = new();
    private readonly Queue<AuditDetailCollection> _detailPages = new();
    private List<EntityMetadata> _entities = new();
    private List<Entity> _systemUsers = new();
    private bool _throwOnBrowse;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _browsePages.Clear();
        _detailPages.Clear();
        _entities = new List<EntityMetadata>();
        _systemUsers = new List<Entity>();
        _throwOnBrowse = false;

        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _entities.ToArray() }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _entities.Count > 0 ? _entities[0] : TestMetadata.Entity("account", "Account") }
            },
            RetrieveRecordChangeHistoryRequest => new RetrieveRecordChangeHistoryResponse
            {
                Results =
                {
                    ["AuditDetailCollection"] = _detailPages.Count > 0 ? _detailPages.Dequeue() : new AuditDetailCollection()
                }
            },
            _ => new OrganizationResponse()
        };

        _fake.OnRetrieveMultiple = query =>
        {
            if (_throwOnBrowse)
                throw new InvalidOperationException("connection dropped mid-query");
            if (query is QueryExpression qe && qe.EntityName == "systemuser")
                return new EntityCollection(_systemUsers);
            if (query is FetchExpression && _browsePages.Count > 0)
                return _browsePages.Dequeue();
            return new EntityCollection();
        };
    }

    public void Dispose() => _fake.Dispose();

    private GetAuditHistoryTool NewTool() => new(_fake.Client);

    private static AttributeAuditDetail MakeAttrDetail(DateTime createdOn, int action,
        Entity? oldValue = null, Entity? newValue = null)
    {
        var audit = new Entity("audit")
        {
            ["createdon"] = createdOn,
            ["action"] = new OptionSetValue(action),
            ["userid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Jane Doe" }
        };
        return new AttributeAuditDetail
        {
            AuditRecord = audit,
            OldValue = oldValue,
            NewValue = newValue
        };
    }

    private static EntityMetadata AccountMetadataWithOption()
    {
        var pick = new PicklistAttributeMetadata
        {
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
            {
                new OptionMetadata { Label = TestMetadata.Lbl("Preferred"), Value = 3 },
                new OptionMetadata { Label = TestMetadata.Lbl("Standard"), Value = 1 }
            }))
        };
        TestMetadata.WithType(pick, AttributeTypeCode.Picklist);
        TestMetadata.Set(pick, nameof(AttributeMetadata.LogicalName), "new_option");
        TestMetadata.Set(pick, nameof(AttributeMetadata.SchemaName), "New_Option");
        TestMetadata.Set(pick, nameof(AttributeMetadata.DisplayName), TestMetadata.Lbl("Option"));
        TestMetadata.Set(pick, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());

        return TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"), pick);
    }

    [TestMethod]
    public void Browse_UnhandledServiceException_IsCaughtByToolFallback()
    {
        _entities.Add(TestMetadata.Entity("account", "Account"));
        _throwOnBrowse = true;

        var result = NewTool().get_audit_history(entity_name: "account");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "connection dropped mid-query");
    }

    [TestMethod]
    public void Detail_UserFilter_PagesPastPageOne()
    {
        _entities.Add(AccountMetadataWithOption());
        var now = DateTime.UtcNow.AddMinutes(-5);

        var page1 = new AuditDetailCollection();
        page1.AuditDetails.Add(MakeAttrDetail(now, 2,
            new Entity("account") { ["name"] = "old" },
            new Entity("account") { ["name"] = "new" }));
        page1.MoreRecords = true;
        page1.PagingCookie = "cookie1";

        var page2 = new AuditDetailCollection();
        page2.AuditDetails.Add(MakeAttrDetail(now.AddMinutes(-1), 2,
            new Entity("account") { ["name"] = "new" },
            new Entity("account") { ["name"] = "newer" }));

        _detailPages.Enqueue(page1);
        _detailPages.Enqueue(page2);

        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString(), user_filter: "Jane");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "2 entries");
        Assert.AreEqual(0, _detailPages.Count);
    }

    [TestMethod]
    public void Detail_OptionSetValue_ResolvesLabelFromMetadata()
    {
        _entities.Add(AccountMetadataWithOption());
        var now = DateTime.UtcNow.AddMinutes(-5);

        var collection = new AuditDetailCollection();
        collection.AuditDetails.Add(MakeAttrDetail(now, 2,
            new Entity("account") { ["new_option"] = new OptionSetValue(1) },
            new Entity("account") { ["new_option"] = new OptionSetValue(3) }));
        _detailPages.Enqueue(collection);

        var result = NewTool().get_audit_history(entity_name: "account",
            record_id: Guid.NewGuid().ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = result.StructuredContent?.GetRawText() ?? result.GetText();
        StringAssert.Contains(json, "Preferred");
        StringAssert.Contains(json, "Standard");
    }

    [TestMethod]
    public void UserFilter_EmailMatchesSeveralUsers_ReturnsAmbiguousError()
    {
        _entities.Add(TestMetadata.Entity("account", "Account"));
        _systemUsers.Add(new Entity("systemuser", Guid.NewGuid())
        {
            ["fullname"] = "Jane One",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });
        _systemUsers.Add(new Entity("systemuser", Guid.NewGuid())
        {
            ["fullname"] = "Jane Two",
            ["internalemailaddress"] = "jane@contoso.com",
            ["isdisabled"] = false
        });

        var result = NewTool().get_audit_history(entity_name: "account", user_filter: "jane@contoso.com");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "2 users match 'jane@contoso.com'");
    }
}
