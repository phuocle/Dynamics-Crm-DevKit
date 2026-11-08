using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// FakeSdkClient end-to-end coverage for the ManageColumnTool create/update
/// paths the FakeXrmEasy suite does not reach: bigint/image/file/customer/
/// polymorphic-lookup/picklist creates, lock-contention create failures,
/// autonumber seed warnings, logical-name normalization on the created result,
/// and the global option-set add/update/delete option flows.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageColumnFakeSdkCreateCoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<EntityMetadata> _entities = new();
    private Entity? _solution;
    private Entity? _publisher;
    private readonly List<AttributeMetadata> _created = new();
    private readonly List<AttributeMetadata> _updated = new();
    private int _createLockFailures;
    private int _seedLockFailures;
    private bool _failSeedPlain;
    private bool _throwOnRetrieveAttribute;
    private AttributeMetadata? _retrievedAttributeByIdOverride;
    private OptionSetMetadata[] _globalOptionSets = Array.Empty<OptionSetMetadata>();

    [TestInitialize]
    public void Setup()
    {
        // The fake service has no propagation delay — skip every metadata wait,
        // including the lock-retry backoff sleeps.
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        _fake = new FakeSdkClient();
        _entities = new List<EntityMetadata>
        {
            TestMetadata.Entity("account", "Account"),
            TestMetadata.Entity("contact", "Contact"),
            TestMetadata.Entity("lead", "Lead")
        };
        _created.Clear();
        _updated.Clear();
        _createLockFailures = 0;
        _seedLockFailures = 0;
        _failSeedPlain = false;
        _throwOnRetrieveAttribute = false;
        _retrievedAttributeByIdOverride = null;
        _globalOptionSets = Array.Empty<OptionSetMetadata>();

        var pubId = Guid.NewGuid();
        _publisher = new Entity("publisher", pubId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
        _solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", pubId)
        };

        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "publisher" && _publisher != null && id == _publisher.Id) return _publisher;
            return new Entity(entityName, id);
        };
    }

    public void Dispose()
    {
        _fake.Dispose();
        MetadataOperationWaitHelper.WaitScalePercent = 100;
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request)
    {
        switch (request)
        {
            case RetrieveAllEntitiesRequest:
                return new RetrieveAllEntitiesResponse { Results = { ["EntityMetadata"] = _entities.ToArray() } };
            case RetrieveEntityRequest r:
                return new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = _entities.FirstOrDefault(e =>
                        string.Equals(e.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase))
                        ?? TestMetadata.Entity(r.LogicalName, r.LogicalName) }
                };
            case RetrieveAttributeRequest when _throwOnRetrieveAttribute:
                throw new InvalidOperationException("attribute lookup failed on the fake service");
            case RetrieveAttributeRequest r when r.MetadataId is Guid id && id != Guid.Empty && _retrievedAttributeByIdOverride != null:
                return new RetrieveAttributeResponse { Results = { ["AttributeMetadata"] = _retrievedAttributeByIdOverride } };
            case RetrieveAttributeRequest r:
            {
                var entity = _entities.FirstOrDefault(e => string.Equals(e.LogicalName, r.EntityLogicalName, StringComparison.OrdinalIgnoreCase));
                var attribute = entity?.Attributes?.FirstOrDefault(a => a.LogicalName == r.LogicalName)
                    ?? _created.FirstOrDefault(a => a.LogicalName == r.LogicalName)
                    ?? new StringAttributeMetadata { LogicalName = r.LogicalName };
                return new RetrieveAttributeResponse { Results = { ["AttributeMetadata"] = attribute } };
            }
            case CreateAttributeRequest r when _createLockFailures > 0:
                _createLockFailures--;
                throw new InvalidOperationException("The metadata operation failed due to a metadata lock. Another operation is running.");
            case CreateAttributeRequest r:
                r.Attribute.MetadataId = Guid.NewGuid();
                _created.Add(r.Attribute);
                return new CreateAttributeResponse { Results = { ["AttributeId"] = r.Attribute.MetadataId } };
            case UpdateAttributeRequest r:
                _updated.Add(r.Attribute);
                return new UpdateAttributeResponse();
            case PublishXmlRequest:
                return new OrganizationResponse();
            case SetAutoNumberSeedRequest when _seedLockFailures > 0:
                _seedLockFailures--;
                throw new InvalidOperationException("SetAutoNumberSeed failed due to a lock. Another metadata operation is running.");
            case SetAutoNumberSeedRequest when _failSeedPlain:
                throw new InvalidOperationException("Seed executor forced failure.");
            case SetAutoNumberSeedRequest:
                return new OrganizationResponse();
            case CreateCustomerRelationshipsRequest when _createLockFailures > 0:
                _createLockFailures--;
                throw new InvalidOperationException("The metadata operation failed due to a metadata lock. Another operation is running.");
            case CreateCustomerRelationshipsRequest:
                return new CreateCustomerRelationshipsResponse { Results = { ["AttributeId"] = Guid.NewGuid() } };
            case OrganizationRequest { RequestName: "CreatePolymorphicLookupAttribute" } when _createLockFailures > 0:
                _createLockFailures--;
                throw new InvalidOperationException("The metadata operation failed due to a metadata lock. Another operation is running.");
            case OrganizationRequest { RequestName: "CreatePolymorphicLookupAttribute" }:
                return new OrganizationResponse { Results = { ["AttributeId"] = Guid.NewGuid() } };
            case RetrieveAllOptionSetsRequest:
                return new RetrieveAllOptionSetsResponse { Results = { ["OptionSetMetadata"] = _globalOptionSets } };
            case InsertOptionValueRequest:
                return new InsertOptionValueResponse { Results = { ["NewOptionValue"] = 100000003 } };
            case UpdateOptionValueRequest:
            case DeleteOptionValueRequest:
                return new OrganizationResponse();
            default:
                return new OrganizationResponse();
        }
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "solution" when _solution != null => new EntityCollection(new[] { _solution }),
                "publisher" when _publisher != null => new EntityCollection(new[] { _publisher }),
                _ => new EntityCollection()
            };
        }
        if (query is FetchExpression fe && fe.Query.Contains("entity name='organization'"))
        {
            return new EntityCollection(new[] { new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 } });
        }
        return new EntityCollection();
    }

    private ManageColumnTool NewTool(bool dryRun = false)
    {
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        return new ManageColumnTool(_fake.Client, new McpDryRunOptions { DryRun = dryRun },
            DryRunTestHelpers.NormalContext(), null!);
    }

    // ──────────────────────────────────────────────
    // create paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_BigInt_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "bigint",
            display_name: "Dev Big", description: "big int column", solution_name: "DevKit", required_level: "Required");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created BigInt column");
        var attr = _created.OfType<BigIntAttributeMetadata>().Single();
        Assert.AreEqual(AttributeRequiredLevel.ApplicationRequired, attr.RequiredLevel?.Value);
        // Labels built via new Label(text, lcid) populate LocalizedLabels only.
        Assert.AreEqual("big int column", attr.Description?.LocalizedLabels?[0]?.Label);
    }

    [TestMethod]
    public void Create_Image_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Dev Photo", description: "image column", solution_name: "DevKit", can_store_full_image: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created Image column");
        var attr = _created.OfType<ImageAttributeMetadata>().Single();
        Assert.IsTrue(attr.CanStoreFullImage == true);
    }

    [TestMethod]
    public void Create_File_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "file",
            display_name: "Dev Attachment", description: "file column", solution_name: "DevKit", max_length: 5000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created File column");
        var attr = _created.OfType<FileAttributeMetadata>().Single();
        Assert.AreEqual(5000, attr.MaxSizeInKB);
    }

    [TestMethod]
    public void Create_Customer_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "customer",
            display_name: "Dev Party", description: "customer column", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created Customer column");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "account, contact");
    }

    [TestMethod]
    public void Create_PolymorphicLookup_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Dev Party Lookup", description: "polymorphic column", solution_name: "DevKit",
            lookup_target: "contact,lead");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created PolymorphicLookup column");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "contact, lead");
    }

    [TestMethod]
    public void Create_Picklist_LocalOptionsWithColorAndDefault()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Dev Priority", description: "priority column", solution_name: "DevKit",
            options: """[{"label":"Low","value":100000000},{"label":"High","value":100000001,"color":"#808080"}]""",
            default_value: "100000001");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created Picklist column");
        // Option labels live in the structured payload (extra.options), not the one-line text.
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "High (100000001) [#808080]");
        var attr = _created.OfType<PicklistAttributeMetadata>().Single();
        Assert.AreEqual(100000001, attr.DefaultFormValue);
    }

    [TestMethod]
    public void Create_Picklist_GlobalOptionSet_Single()
    {
        _globalOptionSets = [GlobalChoice("Choice", "dev_choice")];

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Dev Global", solution_name: "DevKit", global_optionset_name: "Choice");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _created.OfType<PicklistAttributeMetadata>().Single();
        Assert.IsTrue(attr.OptionSet?.IsGlobal == true);
        Assert.AreEqual("dev_choice", attr.OptionSet?.Name);
    }

    [TestMethod]
    public void Create_MultiPicklist_GlobalOptionSet_Single()
    {
        _globalOptionSets = [GlobalChoice("Choice", "dev_choice")];

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "multipicklist",
            display_name: "Dev Multi Global", solution_name: "DevKit", global_optionset_name: "Choice");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created MultiSelectPicklist column");
        var attr = _created.OfType<MultiSelectPicklistAttributeMetadata>().Single();
        Assert.IsTrue(attr.OptionSet?.IsGlobal == true);
    }

    [TestMethod]
    public void Create_StringWithSeed_SeedLockRetries_ReportWarning()
    {
        _seedLockFailures = int.MaxValue; // every attempt fails with a lock error

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Ticket", solution_name: "DevKit",
            auto_number_format: "TKT-{SEQNUM:5}", auto_number_seed: 5000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "1 warning(s).");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "SetAutoNumberSeed failed after multiple retry attempts");
    }

    [TestMethod]
    public void Create_LockContention_EveryType_ReportsRetryFailure()
    {
        _createLockFailures = int.MaxValue; // every create attempt fails with a lock error

        var tool = NewTool();

        var picklist = tool.manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Dev P", solution_name: "DevKit", options: """[{"label":"Low","value":1}]""");
        StringAssert.Contains(picklist.GetText(), "Failed to create column 'dev_devp' on entity 'account' after multiple retry attempts");

        var bigint = tool.manage_column(entity_name: "account", attribute_type: "bigint",
            display_name: "Dev B", solution_name: "DevKit");
        StringAssert.Contains(bigint.GetText(), "Failed to create column 'dev_devb' on entity 'account' after multiple retry attempts");

        var image = tool.manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Dev I", solution_name: "DevKit");
        StringAssert.Contains(image.GetText(), "Failed to create column 'dev_devi' on entity 'account' after multiple retry attempts");

        var file = tool.manage_column(entity_name: "account", attribute_type: "file",
            display_name: "Dev F", solution_name: "DevKit");
        StringAssert.Contains(file.GetText(), "Failed to create column 'dev_devf' on entity 'account' after multiple retry attempts");

        var poly = tool.manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Dev Poly", solution_name: "DevKit", lookup_target: "contact,lead");
        StringAssert.Contains(poly.GetText(), "Failed to create column 'dev_devpoly' on entity 'account' after multiple retry attempts");

        var customer = tool.manage_column(entity_name: "account", attribute_type: "customer",
            display_name: "Dev Cust", solution_name: "DevKit");
        StringAssert.Contains(customer.GetText(), "Failed to create column 'dev_devcust' on entity 'account' after multiple retry attempts");
    }

    [TestMethod]
    public void Create_String_LogicalNameNormalizedByServer_UpdatesSummary()
    {
        // RetrieveAttributeRequest by MetadataId returns a normalized logical name —
        // BuildResult rewrites the summary text to the actual name.
        var normalized = new StringAttributeMetadata { LogicalName = "dev_renamed" };
        TestMetadata.Set(normalized, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());
        _retrievedAttributeByIdOverride = normalized;

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Text", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "dev_renamed");
    }

    [TestMethod]
    public void Create_String_AttributeLookupFails_FallsBackToRequestedName()
    {
        _throwOnRetrieveAttribute = true;

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Text", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "dev_devtext");
    }

    // ──────────────────────────────────────────────
    // update paths
    // ──────────────────────────────────────────────

    private static EntityMetadata EntityWith(AttributeMetadata attr)
    {
        TestMetadata.Set(attr, nameof(AttributeMetadata.LogicalName), attr.LogicalName);
        return TestMetadata.Entity("account", "Account", attr);
    }

    private StringAttributeMetadata SeedStringAttribute(string logicalName, bool autonumber = false)
    {
        var attr = new StringAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = logicalName,
            MaxLength = 100,
            FormatName = StringFormatName.Text
        };
        if (autonumber) attr.AutoNumberFormat = "OLD-{SEQNUM:3}";
        _entities = [EntityWith(attr)];
        return attr;
    }

    [TestMethod]
    public void Update_AutoNumberWithNonTextFormat_ReturnsError()
    {
        SeedStringAttribute("dev_autonum");

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_format: "NEW-{SEQNUM:3}", format: "Email");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Autonumber columns require format 'Text'");
    }

    [TestMethod]
    public void Update_InvalidStringFormat_ReturnsTypeError()
    {
        SeedStringAttribute("dev_name");

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_name", format: "NoSuchFormat");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid format");
        StringAssert.Contains(result.GetText(), "Check format/behavior values");
    }

    [TestMethod]
    public void Update_AutoNumberPatternLongerThanMaxLength_ReturnsError()
    {
        var attr = SeedStringAttribute("dev_autonum");
        attr.MaxLength = 20;

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_format: "ABCDEFGHIJKLMNOP-{SEQNUM:10}");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "max_length 20 is smaller than the pattern's minimum output length");
    }

    [TestMethod]
    public void Update_AutoNumberPatternCloseToMinimum_AddsWarning()
    {
        var attr = SeedStringAttribute("dev_autonum", autonumber: true);
        attr.MaxLength = 11;

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_format: "AB-{SEQNUM:5}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "1 warning(s).");
        var json = result.StructuredContent?.GetRawText() ?? "";
        // The JSON payload escapes the apostrophe (\u0027), so assert around it.
        StringAssert.Contains(json, "is close to the pattern");
        StringAssert.Contains(json, "minimum length 8");
        var updatedAttr = _updated.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("AB-{SEQNUM:5}", updatedAttr.AutoNumberFormat);
    }

    [TestMethod]
    public void Update_BooleanDefaultValueFalse_RecordsChange()
    {
        var attr = new BooleanAttributeMetadata { LogicalName = "dev_flag", SchemaName = "Dev_Flag" };
        _entities = [EntityWith(attr)];

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_flag", default_value: "false");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated column 'dev_flag'");
        Assert.AreEqual(false, attr.DefaultValue);
    }

    [TestMethod]
    public void Update_MultiSelectGlobalOptionSet_AddUpdateDeleteOptions()
    {
        var attr = new MultiSelectPicklistAttributeMetadata
        {
            LogicalName = "dev_multi",
            SchemaName = "Dev_Multi",
            OptionSet = new OptionSetMetadata { IsGlobal = true, Name = "dev_choice" }
        };
        _entities = [EntityWith(attr)];

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_multi",
            add_options: """[{"label":"New","value":100000003}]""",
            update_options: """[{"label":"Renamed","value":100000000,"color":"#FF0000"}]""",
            delete_options: "[100000002]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = result.StructuredContent?.GetRawText() ?? result.GetText();
        StringAssert.Contains(json, "optionsAdded");
        StringAssert.Contains(json, "optionsRenamed");
        StringAssert.Contains(json, "optionsDeleted");
        StringAssert.Contains(json, "New (100000003)");
        StringAssert.Contains(json, "#FF0000");
        StringAssert.Contains(json, "100000002");
    }

    private static OptionSetMetadata GlobalChoice(string displayName, string name)
    {
        var optionSet = new OptionSetMetadata
        {
            Name = name,
            OptionSetType = OptionSetType.Picklist
        };
        TestMetadata.Set(optionSet, nameof(OptionSetMetadata.DisplayName), TestMetadata.Lbl(displayName));
        return optionSet;
    }
}
