using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
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
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// FakeXrmEasy-driven coverage for the ManageColumnTool branches NOT exercised by
/// ManageColumnFakeXrmEasyFullCoverageTests: explicit schema_name/logical_name
/// handling, prefix validation, ambiguous entity/attribute resolution, global
/// option sets, option colors, polymorphic lookups, the formula clone pipeline
/// (calculated/rollup rewriting, source errors, rejection fallback), statuscode
/// option management, type-specific UPDATE mutations end-to-end, the five-flag
/// update, the required-level Web API PUT, update exception mapping, and dry-run
/// no-mutation guarantees.
/// PublishXml deliberately throws (counted as an attempt) so the 5-20s metadata
/// propagation waits are skipped; "published" is always false in these tests.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageColumnFakeXrmEasyRemainingCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private ColumnOrgService _service = null!;
    private FakeWebApiExecutor _webApi = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-column-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();

        // Organization record for McpHelper.GetBaseLanguageCode
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });

        // Publisher + solution resolvable by SolutionResolverHelper (prefix "dev")
        var pubId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", pubId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        });
        _ctx.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", pubId)
        });

        _service = new ColumnOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeAccountMetadata());
        _service.Entities.Add(MakeContactMetadata());
        _service.Entities.Add(MakeContact2Metadata());
        _service.Entities.Add(MakeAccount2Metadata());
        _service.GlobalOptionSets.Add(MakeGlobalSeverityOptionSet());

        _webApi = new FakeWebApiExecutor();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private ManageColumnTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false), _webApi);

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static Label Labeled(string text) => new(text, 1033)
    {
        UserLocalizedLabel = new LocalizedLabel(text, 1033)
    };

    private static string Text(CallToolResult r) => r.GetText();

    private static string Json(CallToolResult r) => r.StructuredContent?.GetRawText() ?? "";

    private static void AssertError(CallToolResult result, string expected)
    {
        Assert.IsTrue(result.IsError == true, "expected error, got: " + Text(result));
        StringAssert.Contains(Text(result), expected);
    }

    private static void AssertSuccess(CallToolResult result, string expected)
    {
        Assert.IsFalse(result.IsError == true, "unexpected error: " + Text(result));
        StringAssert.Contains(Text(result), expected);
    }

    private static AttributeMetadata IdAttribute(string logicalName)
    {
        var attr = new AttributeMetadata { LogicalName = logicalName, SchemaName = logicalName, DisplayName = Labeled(logicalName) };
        Set(attr, "AttributeType", AttributeTypeCode.Uniqueidentifier);
        return attr;
    }

    private static StringAttributeMetadata NameAttribute() => new()
    {
        LogicalName = "name",
        SchemaName = "Name",
        DisplayName = Labeled("Account Name"),
        MaxLength = 100,
        FormatName = StringFormatName.Text,
        RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
        IsAuditEnabled = new BooleanManagedProperty(true),
        IsValidForAdvancedFind = new BooleanManagedProperty(true),
        IsSecured = false,
        IsSortableEnabled = new BooleanManagedProperty(true)
    };

    private static EntityMetadata MakeAccountMetadata()
    {
        var name = NameAttribute();
        var description = new MemoAttributeMetadata { LogicalName = "description", SchemaName = "Description", DisplayName = Labeled("Description"), MaxLength = 2000 };
        var count = new IntegerAttributeMetadata { LogicalName = "new_count", SchemaName = "New_Count", DisplayName = Labeled("Count") };
        var amount = new MoneyAttributeMetadata { LogicalName = "new_amount", SchemaName = "New_Amount", DisplayName = Labeled("Amount"), Precision = 2, PrecisionSource = 0 };
        var ratio = new DecimalAttributeMetadata { LogicalName = "new_ratio", SchemaName = "New_Ratio", DisplayName = Labeled("Ratio"), Precision = 2 };
        var score = new DoubleAttributeMetadata { LogicalName = "new_score", SchemaName = "New_Score", DisplayName = Labeled("Score"), Precision = 2 };
        var flag = new BooleanAttributeMetadata
        {
            LogicalName = "new_flag",
            SchemaName = "New_Flag",
            DisplayName = Labeled("Flag"),
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata(Labeled("Yes"), 1),
                new OptionMetadata(Labeled("No"), 0))
        };
        var when = new DateTimeAttributeMetadata
        {
            LogicalName = "new_when",
            SchemaName = "New_When",
            DisplayName = Labeled("When"),
            Format = DateTimeFormat.DateAndTime,
            DateTimeBehavior = DateTimeBehavior.UserLocal
        };
        var choice = new PicklistAttributeMetadata
        {
            LogicalName = "new_choice",
            SchemaName = "New_Choice",
            DisplayName = Labeled("Choice"),
            OptionSet = new OptionSetMetadata
            {
                IsGlobal = false,
                OptionSetType = OptionSetType.Picklist,
                Options = { new OptionMetadata(Labeled("Low"), 1), new OptionMetadata(Labeled("High"), 2) }
            }
        };
        var tags = new MultiSelectPicklistAttributeMetadata
        {
            LogicalName = "new_tags",
            SchemaName = "New_Tags",
            DisplayName = Labeled("Tags"),
            OptionSet = new OptionSetMetadata { IsGlobal = false, OptionSetType = OptionSetType.Picklist }
        };
        var globalChoice = new PicklistAttributeMetadata
        {
            LogicalName = "new_global_choice",
            SchemaName = "New_GlobalChoice",
            DisplayName = Labeled("Global Choice"),
            OptionSet = new OptionSetMetadata { IsGlobal = true, Name = "devkit_globalseverity" }
        };
        var photo = new ImageAttributeMetadata { LogicalName = "new_photo", SchemaName = "New_Photo", DisplayName = Labeled("Photo"), CanStoreFullImage = false };
        var status = new StatusAttributeMetadata { LogicalName = "new_status", SchemaName = "New_Status", DisplayName = Labeled("Status Reason") };
        var big = new BigIntAttributeMetadata { LogicalName = "new_big", SchemaName = "New_Big", DisplayName = Labeled("Big") };
        var formulaSrc = new StringAttributeMetadata
        {
            LogicalName = "new_formula_src",
            SchemaName = "New_FormulaSrc",
            DisplayName = Labeled("Formula Source"),
            MetadataId = Guid.NewGuid(),
            SourceType = 1,
            FormulaDefinition = "EntityName=\"account\" Attribute=\"new_formula_src\" Value=\"Trim(Text(ThisRecord.New_FormulaSrc))\""
        };
        var rollupTotal = new StringAttributeMetadata
        {
            LogicalName = "new_rollup_total",
            SchemaName = "New_RollupTotal",
            DisplayName = Labeled("Rollup Total"),
            MetadataId = Guid.NewGuid(),
            SourceType = 2,
            FormulaDefinition = "EntityName=\"account\" Attribute=\"new_rollup_total\" Sum(relatedlinked_new_account_child#new_childlook#child#, new_amount)"
        };
        var rollupOrphan = new StringAttributeMetadata
        {
            LogicalName = "new_rollup_orphan",
            SchemaName = "New_RollupOrphan",
            DisplayName = Labeled("Rollup Orphan"),
            SourceType = 2,
            FormulaDefinition = "EntityName=\"account\" relatedlinked_missing_rel#lk#child#"
        };
        var badFormula = new StringAttributeMetadata { LogicalName = "new_badformula", SchemaName = "New_BadFormula", DisplayName = Labeled("Bad Formula"), SourceType = 0 };
        var emptyFormula = new StringAttributeMetadata { LogicalName = "new_emptyformula", SchemaName = "New_EmptyFormula", DisplayName = Labeled("Empty Formula"), SourceType = 3 };
        emptyFormula.MetadataId = Guid.NewGuid();
        var powerFx = new StringAttributeMetadata
        {
            LogicalName = "new_powerfx",
            SchemaName = "New_PowerFx",
            DisplayName = Labeled("Power Fx"),
            MetadataId = Guid.NewGuid(),
            SourceType = 3,
            FormulaDefinition = "Text(name)"
        };
        var dup1 = new StringAttributeMetadata { LogicalName = "new_dup1", SchemaName = "New_Dup1", DisplayName = Labeled("Dup Field") };
        var dup2 = new StringAttributeMetadata { LogicalName = "new_dup2", SchemaName = "New_Dup2", DisplayName = Labeled("Dup Field") };

        var meta = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account",
            DisplayName = Labeled("Account")
        };
        Set(meta, "PrimaryIdAttribute", "accountid");
        Set(meta, "ObjectTypeCode", 1);
        Set(meta, "Attributes", new AttributeMetadata[]
        {
            name, description, count, amount, ratio, score, flag, when, choice, tags, globalChoice,
            photo, status, big, formulaSrc, rollupTotal, rollupOrphan, badFormula, emptyFormula, powerFx,
            dup1, dup2, IdAttribute("accountid")
        });
        Set(meta, "OneToManyRelationships", new OneToManyRelationshipMetadata[]
        {
            new()
            {
                SchemaName = "new_account_child",
                ReferencedEntity = "account",
                ReferencingEntity = "child",
                ReferencingAttribute = "new_parentid"
            }
        });
        return meta;
    }

    private static EntityMetadata MakeContactMetadata()
    {
        var fullname = new StringAttributeMetadata { LogicalName = "fullname", SchemaName = "FullName", DisplayName = Labeled("Full Name") };
        var meta = new EntityMetadata
        {
            LogicalName = "contact",
            SchemaName = "Contact",
            DisplayName = Labeled("Contact")
        };
        Set(meta, "PrimaryIdAttribute", "contactid");
        Set(meta, "ObjectTypeCode", 2);
        Set(meta, "Attributes", new AttributeMetadata[] { fullname, IdAttribute("contactid") });
        Set(meta, "OneToManyRelationships", new OneToManyRelationshipMetadata[]
        {
            new()
            {
                SchemaName = "new_contact_child",
                ReferencedEntity = "contact",
                ReferencingEntity = "child",
                ReferencingAttribute = "new_contactid"
            }
        });
        return meta;
    }

    private static EntityMetadata MakeContact2Metadata()
    {
        var meta = new EntityMetadata
        {
            LogicalName = "contact2",
            SchemaName = "ContactTwo",
            DisplayName = Labeled("Contact Two")
        };
        Set(meta, "PrimaryIdAttribute", "contact2id");
        Set(meta, "ObjectTypeCode", 10002);
        Set(meta, "Attributes", new AttributeMetadata[] { IdAttribute("contact2id") });
        return meta;
    }

    private static EntityMetadata MakeAccount2Metadata()
    {
        // Same display name as account — used to trigger ambiguous entity resolution.
        var meta = new EntityMetadata
        {
            LogicalName = "account2",
            SchemaName = "AccountTwo",
            DisplayName = Labeled("Account")
        };
        Set(meta, "PrimaryIdAttribute", "account2id");
        Set(meta, "ObjectTypeCode", 10001);
        Set(meta, "Attributes", new AttributeMetadata[] { IdAttribute("account2id") });
        return meta;
    }

    private static OptionSetMetadata MakeGlobalSeverityOptionSet() => new()
    {
        Name = "devkit_globalseverity",
        IsGlobal = true,
        DisplayName = Labeled("Global Severity")
    };

    // ──────────────────────────────────────────────
    // CREATE — schema_name / logical_name handling
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_ExplicitSchemaName_UsedAsIs()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Invoice Line Id", schema_name: "dev_InvoiceLineId", solution_name: "DevKit");
        AssertSuccess(result, "[Success] Created String column 'dev_invoicelineid' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("dev_InvoiceLineId", attr.SchemaName);
        Assert.AreEqual("dev_invoicelineid", attr.LogicalName);
        Assert.AreEqual(1, _service.PublishAttempts);
    }

    [TestMethod]
    public void Create_ExplicitSchemaAndLogicalName_PairedEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Inv Line 2", schema_name: "dev_InvLine2", logical_name: "dev_invline2", solution_name: "DevKit");
        AssertSuccess(result, "Created Money column 'dev_invline2' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().Single();
        Assert.AreEqual("dev_InvLine2", attr.SchemaName);
        Assert.AreEqual("dev_invline2", attr.LogicalName);
    }

    [TestMethod]
    public void Create_SchemaNameWithoutPrefix_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Thing", schema_name: "Bad_Name", solution_name: "DevKit");
        AssertError(result, "schema_name 'Bad_Name' must start with the publisher prefix 'dev_'");
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    [TestMethod]
    public void Create_LogicalNameWithoutPrefix_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Thing", logical_name: "invoiceid", solution_name: "DevKit");
        AssertError(result, "logical_name 'invoiceid' must start with the publisher prefix 'dev_'");
    }

    [TestMethod]
    public void Create_LogicalNameMismatchedWithSchemaName_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Thing", schema_name: "dev_Aaa", logical_name: "dev_bbb", solution_name: "DevKit");
        AssertError(result, "logical_name 'dev_bbb' must be the lowercase form of schema_name 'dev_Aaa'");
        StringAssert.Contains(Text(result), "Expected 'dev_aaa'");
    }

    [TestMethod]
    public void Create_MissingSolutionName_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "No Solution Col");
        AssertError(result, "solution_name is required when creating a new column");
    }

    [TestMethod]
    public void Create_AmbiguousEntityName_ReturnsCandidatesError()
    {
        var result = NewTool().manage_column(entity_name: "Accou", attribute_type: "string", display_name: "X", solution_name: "DevKit");
        AssertError(result, "Multiple candidates match 'Accou' during display name search.");
        StringAssert.Contains(Text(result), "Use inspect_metadata(resource='tables') to list entities.");
    }

    [TestMethod]
    public void Create_LogicalNameDisplayResolvingOtherAttribute_BypassesUpdate_ThenPrefixError()
    {
        // logical_name matches another attribute's DISPLAY name while formula create
        // parameters are present: the update-intent bypass leaves the CREATE path,
        // and the unprefixed logical_name is then rejected.
        var result = NewTool().manage_column(entity_name: "account", logical_name: "Formula Source",
            attribute_type: "string", display_name: "Cloned Again",
            formula_definition: "account:new_formula_src", solution_name: "DevKit");
        AssertError(result, "logical_name 'Formula Source' must start with the publisher prefix 'dev_'");
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    // ──────────────────────────────────────────────
    // CREATE — picklist / boolean / lookup validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_PicklistWithColor_ColorNormalizedAndInvalidIgnored()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Pick Color", schema_name: "dev_PickColor",
            options: """[{"label":"Low","value":1,"color":"#808080"},{"label":"Odd","value":2,"color":"nope"}]""",
            solution_name: "DevKit");
        AssertSuccess(result, "Created Picklist column 'dev_pickcolor' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<PicklistAttributeMetadata>().Single();
        Assert.AreEqual("#808080", attr.OptionSet.Options[0].Color);
        Assert.IsNull(attr.OptionSet.Options[1].Color, "invalid hex color must be ignored");
    }

    [TestMethod]
    public void Create_PicklistGlobalOptionSet_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Sev Pick", schema_name: "dev_SevPick",
            global_optionset_name: "Global Severity", default_value: "7", solution_name: "DevKit");
        AssertSuccess(result, "Created Picklist column 'dev_sevpick' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<PicklistAttributeMetadata>().Single();
        Assert.IsTrue(attr.OptionSet.IsGlobal == true);
        Assert.AreEqual("devkit_globalseverity", attr.OptionSet.Name);
        Assert.AreEqual<int?>(7, attr.DefaultFormValue);
    }

    [TestMethod]
    public void Create_PicklistGlobalOptionSetNotFound_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Ghost Pick", global_optionset_name: "Ghost", solution_name: "DevKit");
        AssertError(result, "global_optionset_name 'Ghost':");
    }

    [TestMethod]
    public void Create_PicklistInvalidOptionsJson_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Bad Json Pick", options: "not json", solution_name: "DevKit");
        AssertError(result, "Invalid options JSON for Picklist — Invalid JSON:");
    }

    [TestMethod]
    public void Create_PicklistDefaultNotInteger_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Bad Default", options: """[{"label":"Low","value":1}]""",
            default_value: "abc", solution_name: "DevKit");
        AssertError(result, "Invalid default_value 'abc'.");
        StringAssert.Contains(Text(result), "Expected an integer option value");
    }

    [TestMethod]
    public void Create_PicklistDefaultNotInOptions_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Mismatch Default", options: """[{"label":"Low","value":1},{"label":"High","value":2}]""",
            default_value: "3", solution_name: "DevKit");
        AssertError(result, "default_value '3' does not match any option in the local option set");
    }

    [TestMethod]
    public void Create_MultipicklistWithValueDefault_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "multipicklist",
            display_name: "Tagged", options: """[{"label":"A","value":1}]""",
            default_value: "1", solution_name: "DevKit");
        AssertError(result, "default_value is not supported for multipicklist columns.");
    }

    [TestMethod]
    public void Create_BooleanInvalidDefault_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "boolean",
            display_name: "Flagged", default_value: "maybe", solution_name: "DevKit");
        AssertError(result, "Invalid default_value 'maybe' for boolean.");
    }

    // ──────────────────────────────────────────────
    // CREATE — lookup / customer / misc types
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_PolymorphicLookup_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Multi Look", schema_name: "dev_MultiLook",
            lookup_target: "account,contact", solution_name: "DevKit");
        AssertSuccess(result, "Created PolymorphicLookup column 'dev_multilook' on entity 'account'.");
        StringAssert.Contains(Json(result), "\"targets\":\"account, contact\"");
        var lookup = _service.CreatedAttributes.OfType<LookupAttributeMetadata>().Single();
        CollectionAssert.AreEquivalent(new[] { "account", "contact" }, lookup.Targets.ToList());
    }

    [TestMethod]
    public void Create_LookupMissingTarget_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "No Target", solution_name: "DevKit");
        AssertError(result, "lookup_target is required for lookup type.");
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    [TestMethod]
    public void Create_LookupUnknownTarget_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Ghost Ref", lookup_target: "ghostent", solution_name: "DevKit");
        AssertError(result, "lookup_target 'ghostent':");
    }

    [TestMethod]
    public void Create_LookupCustomRelationshipName_UsedAsSchemaName()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Custom Ref", schema_name: "dev_CustomRef",
            lookup_target: "contact", lookup_relationship_name: "devkit_custom_rel", solution_name: "DevKit");
        AssertSuccess(result, "Created Lookup column 'dev_customref' on entity 'account'.");
        var request = _service.LookupRequests.Single();
        Assert.AreEqual("devkit_custom_rel", request.OneToManyRelationship.SchemaName);
        Assert.AreEqual("contact", request.OneToManyRelationship.ReferencedEntity);
    }

    [TestMethod]
    public void Create_DateTimeZoneIndependent_BehaviorApplied()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "datetime",
            display_name: "Utc When", schema_name: "dev_UtcWhen", behavior: "TimeZoneIndependent", solution_name: "DevKit");
        AssertSuccess(result, "Created DateTime column 'dev_utcwhen' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<DateTimeAttributeMetadata>().Single();
        Assert.AreEqual<DateTimeBehavior?>(DateTimeBehavior.TimeZoneIndependent, attr.DateTimeBehavior);
        StringAssert.Contains(Json(result), "\"behavior\":\"TimeZoneIndependent\"");
    }

    [TestMethod]
    public void Create_MoneyPrecisionSource_AppliedAndClamped()
    {
        var first = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Cash One", schema_name: "dev_Cash1", precision_source: 1, solution_name: "DevKit");
        AssertSuccess(first, "Created Money column 'dev_cash1'");
        Assert.AreEqual(1, _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().First().PrecisionSource);

        var second = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Cash Two", schema_name: "dev_Cash2", precision_source: 7, solution_name: "DevKit");
        AssertSuccess(second, "Created Money column 'dev_cash2'");
        Assert.AreEqual(0, _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().Last().PrecisionSource, "out-of-range precision_source must clamp to 0");
    }

    [TestMethod]
    public void Create_ImageCanStoreFullImage_Applied()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Big Photo", schema_name: "dev_BigPhoto", can_store_full_image: true, solution_name: "DevKit");
        AssertSuccess(result, "Created Image column 'dev_bigphoto' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<ImageAttributeMetadata>().Single();
        Assert.IsTrue(attr.CanStoreFullImage == true);
    }

    [TestMethod]
    public void Create_FileOversizedMaxSize_Clamped()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "file",
            display_name: "Huge File", schema_name: "dev_HugeFile", max_length: 99_999_999, solution_name: "DevKit");
        AssertSuccess(result, "Created File column 'dev_hugefile' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<FileAttributeMetadata>().Single();
        Assert.AreEqual(10485760, attr.MaxSizeInKB);
    }

    [TestMethod]
    public void Create_StringOversizedMaxLength_Clamped()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Long Text", schema_name: "dev_LongText", max_length: 99_999, solution_name: "DevKit");
        AssertSuccess(result, "Created String column 'dev_longtext' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(4000, attr.MaxLength);
    }

    [TestMethod]
    public void Create_DoubleAlias_CreatesFloatAttribute()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "double",
            display_name: "Alias Rate", schema_name: "dev_AliasRate", solution_name: "DevKit");
        AssertSuccess(result, "Created Float column 'dev_aliasrate' on entity 'account'.");
        Assert.IsInstanceOfType(_service.CreatedAttributes.Single(), typeof(DoubleAttributeMetadata));
    }

    // ──────────────────────────────────────────────
    // CREATE — formula clone (PowerFx / Calculated / Rollup)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FormulaCloneCalculated_RewritesEntityAndAttribute()
    {
        var result = NewTool().manage_column(entity_name: "contact", attribute_type: "string",
            display_name: "Roll Clone", schema_name: "dev_RollClone",
            formula_definition: "account:new_formula_src", solution_name: "DevKit");
        AssertSuccess(result, "Created String column 'dev_rollclone' on entity 'contact'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(1, attr.SourceType);
        StringAssert.Contains(attr.FormulaDefinition, "EntityName=\"contact\"");
        StringAssert.Contains(attr.FormulaDefinition, "Attribute=\"dev_rollclone\"");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("new_formula_src"), "source attribute reference must be rewritten");
    }

    [TestMethod]
    public void Create_FormulaCloneSourceTypeMismatch_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Mismatch Clone", formula_definition: "account:new_formula_src",
            formula_source_type: "rollup", solution_name: "DevKit");
        AssertError(result, "formula_source_type does not match source column 'account:new_formula_src'.");
        StringAssert.Contains(Text(result), "the server derives 'calculated' from Dataverse");
    }

    [TestMethod]
    public void Create_FormulaSourceErrors_ReturnsSpecificErrors()
    {
        // Source column is not a formula (SourceType 0)
        var notFormula = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Clone A", formula_definition: "account:new_badformula", solution_name: "DevKit");
        AssertError(notFormula, "Source column 'account:new_badformula' is not a Calculated, Rollup, or PowerFx column.");

        // Source column does not exist
        var missing = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Clone B", formula_definition: "account:nosuchcol", solution_name: "DevKit");
        AssertError(missing, "Cannot resolve formula source 'account:nosuchcol'.");

        // Source is PowerFx but has an empty FormulaDefinition
        var empty = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Clone C", formula_definition: "account:new_emptyformula", solution_name: "DevKit");
        AssertError(empty, "Source column 'account:new_emptyformula' has an empty FormulaDefinition and cannot be cloned.");
    }

    [TestMethod]
    public void Create_EmptyFormulaColumn_PowerFxCreated()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Fx Column", schema_name: "dev_FxColumn",
            formula_source_type: "powerfx", solution_name: "DevKit");
        AssertSuccess(result, "Created String column 'dev_fxcolumn' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(3, attr.SourceType);
        Assert.IsTrue(string.IsNullOrEmpty(attr.FormulaDefinition));
    }

    [TestMethod]
    public void Create_FormulaSourceTypeAndTypeCompatErrors_ReturnsError()
    {
        var invalidKind = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Bad Kind", formula_source_type: "bogus", solution_name: "DevKit");
        AssertError(invalidKind, "Invalid formula_source_type 'bogus'.");

        var onImage = NewTool().manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Formula Image", formula_source_type: "powerfx", solution_name: "DevKit");
        AssertError(onImage, "formula_definition (powerfx) is not supported on attribute_type 'image'.");
    }

    [TestMethod]
    public void Create_FormulaCloneRollup_RewritesRelationshipMapping()
    {
        var result = NewTool().manage_column(entity_name: "contact", attribute_type: "money",
            display_name: "Roll Total", schema_name: "dev_RollTotal",
            formula_definition: "account:new_rollup_total", solution_name: "DevKit");
        AssertSuccess(result, "Created Money column 'dev_rolltotal' on entity 'contact'.");
        var attr = _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().Single();
        Assert.AreEqual(2, attr.SourceType);
        StringAssert.Contains(attr.FormulaDefinition, "EntityName=\"contact\"");
        StringAssert.Contains(attr.FormulaDefinition, "Attribute=\"dev_rolltotal\"");
        StringAssert.Contains(attr.FormulaDefinition, "relatedlinked_new_contact_child#new_contactid#child#");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("new_account_child"));
        Assert.IsFalse(attr.FormulaDefinition!.Contains("new_childlook"));
    }

    [TestMethod]
    public void Create_FormulaCloneRollup_SourceRelationshipMissing_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Orphan Roll", formula_definition: "account:new_rollup_orphan", solution_name: "DevKit");
        AssertError(result, "Rollup source relationship 'missing_rel' was not found on table 'account'.");
    }

    [TestMethod]
    public void Create_FormulaCloneRollup_TargetRelationshipMissing_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "contact2", attribute_type: "money",
            display_name: "No Target Roll", formula_definition: "account:new_rollup_total", solution_name: "DevKit");
        AssertError(result, "No matching Rollup relationship from 'child' to target table 'contact2' was found.");
    }

    [TestMethod]
    public void Create_FormulaCloneRejected_FallsBackToEmptyFormulaWithWarning()
    {
        _service.RejectClonedFormula = true;
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Fallback Col", schema_name: "dev_FbCol",
            formula_definition: "account:new_formula_src", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "fallback must succeed: " + Text(result));
        StringAssert.Contains(Text(result), "1 warning(s).");
        StringAssert.Contains(Json(result), "Dataverse rejected the cloned calculated formula.");
        StringAssert.Contains(Json(result), "Original error: Invalid formula definition.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(1, attr.SourceType, "fallback keeps the source SourceType");
        Assert.IsTrue(string.IsNullOrEmpty(attr.FormulaDefinition), "fallback clears the FormulaDefinition");
    }

    [TestMethod]
    public void Create_ServerDuplicateException_MapsToAlreadyExistsError()
    {
        _service.CreateExceptionMessage = "An attribute with the same name already exists.";
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dup Col", schema_name: "dev_DupCol", solution_name: "DevKit");
        AssertError(result, "Attribute 'dev_dupcol' already exists on entity 'account'.");
        StringAssert.Contains(Json(result), "serverMessage");
    }

    [TestMethod]
    public void Create_DryRun_ReportsPreviewWithoutMutation()
    {
        var result = NewTool(dryRun: true).manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dry Col", schema_name: "dev_DryCol", solution_name: "DevKit");
        AssertSuccess(result, "[DryRun] Would CREATE String column 'dev_drycol' on entity 'account'.");
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
        Assert.AreEqual(0, _service.PublishAttempts);
    }

    // ──────────────────────────────────────────────
    // UPDATE — resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_ByDisplayNameOnly_ResolvesAndRenames()
    {
        // No logical_name: display_name resolves case-insensitively to the existing
        // attribute and is then applied as the rename (different casing).
        var result = NewTool().manage_column(entity_name: "account", display_name: "account name");
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<StringAttributeMetadata>().Single();
    }

    [TestMethod]
    public void Update_AmbiguousLogicalName_ReturnsCandidatesError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "Dup Field", display_name: "X");
        AssertError(result, "Multiple candidates match 'Dup Field' during display name search.");
        StringAssert.Contains(Text(result), "Use inspect_metadata(resource='tables') to list entities and attributes.");
    }

    [TestMethod]
    public void Update_AmbiguousDisplayNameOnly_ReturnsCandidatesError()
    {
        var result = NewTool().manage_column(entity_name: "account", display_name: "Dup Field");
        AssertError(result, "Multiple candidates match 'Dup Field' during display name search.");
    }

    [TestMethod]
    public void Update_FormulaParamsOnExistingColumn_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            formula_source_type: "powerfx");
        AssertError(result, "Formula cloning on update requires an existing formula column and formula_definition.");
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
    }

    [TestMethod]
    public void Update_NoExistingColumnWithoutCreateFields_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "devkit_ghost");
        AssertError(result, "No existing column found for logical_name 'devkit_ghost' on entity 'account'.");
    }

    // ──────────────────────────────────────────────
    // UPDATE — generic and type-specific mutations
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_StringMaxLengthAndFormat_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            max_length: 500, format: "Email");
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(500, attr.MaxLength);
        Assert.AreEqual<StringFormatName?>(StringFormatName.Email, attr.FormatName);
        StringAssert.Contains(Json(result), "\"maxLength\"");
        StringAssert.Contains(Json(result), "\"format\"");
    }

    [TestMethod]
    public void Update_MemoMaxLength_Clamped()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "description", max_length: 3_000_000);
        AssertSuccess(result, "Updated column 'description' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<MemoAttributeMetadata>().Single();
        Assert.AreEqual(1_048_576, attr.MaxLength);
    }

    [TestMethod]
    public void Update_NumericTypeSpecificChanges_EndToEnd()
    {
        var tool = NewTool();

        var integer = tool.manage_column(entity_name: "account", logical_name: "new_count", min_value: -5, max_value: 500);
        AssertSuccess(integer, "Updated column 'new_count'");
        var intAttr = _service.UpdatedAttributes.OfType<IntegerAttributeMetadata>().Single();
        Assert.AreEqual(-5, intAttr.MinValue);
        Assert.AreEqual(500, intAttr.MaxValue);

        var dec = tool.manage_column(entity_name: "account", logical_name: "new_ratio", min_value: -1.5, max_value: 2.5, precision: 11);
        AssertSuccess(dec, "Updated column 'new_ratio'");
        var decAttr = _service.UpdatedAttributes.OfType<DecimalAttributeMetadata>().Single();
        Assert.AreEqual(-1.5m, decAttr.MinValue);
        Assert.AreEqual(2.5m, decAttr.MaxValue);
        Assert.AreEqual(10, decAttr.Precision, "precision > 10 must clamp to 10");

        var money = tool.manage_column(entity_name: "account", logical_name: "new_amount",
            min_value: 10.5, max_value: 999.5, precision: 4, precision_source: 1);
        AssertSuccess(money, "Updated column 'new_amount'");
        var moneyAttr = _service.UpdatedAttributes.OfType<MoneyAttributeMetadata>().Single();
        Assert.AreEqual(10.5, moneyAttr.MinValue);
        Assert.AreEqual(999.5, moneyAttr.MaxValue);
        Assert.AreEqual(4, moneyAttr.Precision);
        Assert.AreEqual(1, moneyAttr.PrecisionSource);

        var dbl = tool.manage_column(entity_name: "account", logical_name: "new_score", precision: 5);
        AssertSuccess(dbl, "Updated column 'new_score'");
        var dblAttr = _service.UpdatedAttributes.OfType<DoubleAttributeMetadata>().Single();
        Assert.AreEqual(5, dblAttr.Precision);

        Assert.AreEqual(4, _service.UpdatedAttributes.Count);
        Assert.AreEqual(4, _service.PublishAttempts);
    }

    [TestMethod]
    public void Update_BooleanTrueFalseLabels_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_flag",
            true_label: "Enabled", false_label: "Disabled");
        AssertSuccess(result, "Updated column 'new_flag' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<BooleanAttributeMetadata>().Single();
        StringAssert.Contains(Json(result), "\"trueLabel\"");
        StringAssert.Contains(Json(result), "\"falseLabel\"");
    }

    [TestMethod]
    public void Update_DateTimeBehaviorDateOnly_ForcesFormat()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_when", behavior: "DateOnly");
        AssertSuccess(result, "Updated column 'new_when' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<DateTimeAttributeMetadata>().Single();
        Assert.AreEqual<DateTimeBehavior?>(DateTimeBehavior.DateOnly, attr.DateTimeBehavior);
        Assert.AreEqual<DateTimeFormat?>(DateTimeFormat.DateOnly, attr.Format);
        StringAssert.Contains(Json(result), "\"format\":{\"oldValue\":\"DateAndTime\",\"newValue\":\"DateOnly\"}");
    }

    [TestMethod]
    public void Update_ImageCanStoreFullImage_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_photo", can_store_full_image: true);
        AssertSuccess(result, "Updated column 'new_photo' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<ImageAttributeMetadata>().Single();
        Assert.IsTrue(attr.CanStoreFullImage == true);
        StringAssert.Contains(Json(result), "\"canStoreFullImage\"");
    }

    [TestMethod]
    public void Update_FiveFlags_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            is_audit_enabled: false, is_valid_for_advanced_find: false, is_secured: true, is_sortable: false);
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        var attr = _service.UpdatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.IsTrue(attr.IsAuditEnabled!.Value == false);
        Assert.IsTrue(attr.IsValidForAdvancedFind!.Value == false);
        Assert.IsTrue(attr.IsSecured == true);
        Assert.IsTrue(attr.IsSortableEnabled!.Value == false);
        Assert.AreEqual(AttributeRequiredLevel.None, attr.RequiredLevel!.Value, "omitted required_level must be left untouched");
        StringAssert.Contains(Json(result), "\"isAuditEnabled\"");
        StringAssert.Contains(Json(result), "\"isValidForAdvancedFind\"");
        StringAssert.Contains(Json(result), "\"isSecured\"");
        StringAssert.Contains(Json(result), "\"isSortable\"");
    }

    [TestMethod]
    public void Update_RequiredLevel_IssuesWebApiPutAndAddsColumnToSolution()
    {
        var attribute = _service.Entities.Single(e => e.LogicalName == "account").Attributes.Single(a => a.LogicalName == "name");
        var attributeId = Guid.NewGuid();
        attribute.MetadataId = attributeId;
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            required_level: "Recommended", solution_name: "DevKit Solution");
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        var call = _webApi.Calls.Single();
        Assert.AreEqual(HttpMethod.Put, call.Method);
        StringAssert.Contains(call.Route, "EntityDefinitions(LogicalName='account')/Attributes(LogicalName='name')");
        StringAssert.Contains(call.Body!, "\"RequiredLevel\":{\"Value\":\"Recommended\"");
        StringAssert.Contains(call.Body!, "\"CanBeChanged\":true");
        StringAssert.Contains(Json(result), "\"requiredLevel\"");
        Assert.AreEqual("DevKit", _service.LastUpdateRequest!.Parameters["SolutionUniqueName"]);
        var association = _service.SolutionRequests.Single();
        Assert.AreEqual(attributeId, association.ComponentId);
        Assert.AreEqual(2, association.ComponentType);
        Assert.AreEqual("DevKit", association.SolutionUniqueName);
        Assert.IsTrue(result.StructuredContent!.Value.GetProperty("isAddToSolution").GetBoolean());
    }

    [TestMethod]
    [DataRow("new_choice", false)]
    [DataRow("new_status", false)]
    [DataRow("new_status", true)]
    public void Update_OptionsOnly_WithSolution_AssociatesColumn(string attributeName, bool dryRun)
    {
        var attribute = _service.Entities.Single(e => e.LogicalName == "account").Attributes.Single(a => a.LogicalName == attributeName);
        var attributeId = Guid.NewGuid();
        attribute.MetadataId = attributeId;
        var result = NewTool(dryRun).manage_column(entity_name: "account", logical_name: attributeName,
            add_options: """[{"label":"Under Review","value":100000001}]""",
            update_options: """[{"label":"Renamed","value":1}]""", delete_options: "[2]", solution_name: "DevKit Solution");

        Assert.IsFalse(result.IsError == true, Text(result));
        Assert.HasCount(0, _service.UpdatedAttributes);
        var data = result.StructuredContent!.Value;
        Assert.AreEqual("DevKit", data.GetProperty("solutionName").GetString());
        if (dryRun)
        {
            Assert.AreEqual("not_executed", data.GetProperty("status").GetString());
            Assert.HasCount(0, _service.OptionRequests);
            Assert.HasCount(0, _service.SolutionRequests);
            return;
        }

        Assert.HasCount(3, _service.OptionRequests);
        foreach (var request in _service.OptionRequests)
            Assert.AreEqual("DevKit", request.Parameters["SolutionUniqueName"]);
        var association = _service.SolutionRequests.Single();
        Assert.AreEqual(attributeId, association.ComponentId);
        Assert.AreEqual(2, association.ComponentType);
        Assert.AreEqual("DevKit", association.SolutionUniqueName);
        Assert.IsTrue(data.GetProperty("isAddToSolution").GetBoolean());
    }

    [TestMethod]
    public void Update_RequiredLevel_WebApi500_NonFatal()
    {
        _webApi.Responder = () => new HttpResponseMessage(HttpStatusCode.InternalServerError);
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name", required_level: "Recommended");
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        Assert.AreEqual(1, _webApi.Calls.Count);
        Assert.AreEqual(1, _service.UpdatedAttributes.Count);
    }

    [TestMethod]
    public void Update_NoChanges_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name");
        AssertError(result, "No changes specified for 'account.name'.");
        StringAssert.Contains(Text(result), "Provide at least one updatable parameter");
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.PublishAttempts);
    }

    // ──────────────────────────────────────────────
    // UPDATE — option management
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_PicklistAddUpdateDeleteOptions_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_choice",
            add_options: """[{"label":"Medium","value":3,"color":"#FF0000"}]""",
            update_options: """[{"label":"Lowest","value":1}]""",
            delete_options: "[2]");
        AssertSuccess(result, "Updated column 'new_choice' on entity 'account'.");

        var insert = _service.OptionRequests.OfType<InsertOptionValueRequest>().Single();
        Assert.AreEqual("account", insert.EntityLogicalName);
        Assert.AreEqual("new_choice", insert.AttributeLogicalName);
        Assert.AreEqual(3, insert.Value);
        Assert.AreEqual("#FF0000", insert.Parameters["Color"]);
        var rename = _service.OptionRequests.OfType<UpdateOptionValueRequest>().Single();
        Assert.AreEqual(1, rename.Value);
        var delete = _service.OptionRequests.OfType<DeleteOptionValueRequest>().Single();
        Assert.AreEqual(2, delete.Value);

        StringAssert.Contains(Json(result), "\"optionsAdded\":[\"Medium (3) [#FF0000]\"]");
        StringAssert.Contains(Json(result), "\"optionsRenamed\":[\"1 -\\u003E \\u0022Lowest\\u0022\"]");
        StringAssert.Contains(Json(result), "optionsDeleted");
        Assert.AreEqual(3, _service.OptionRequests.Count);
        Assert.AreEqual(1, _service.PublishAttempts);
    }

    [TestMethod]
    public void Update_PicklistGlobalOptionSet_UsesOptionSetName()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_global_choice",
            add_options: """[{"label":"Sev1","value":7}]""");
        AssertSuccess(result, "Updated column 'new_global_choice' on entity 'account'.");
        var insert = _service.OptionRequests.OfType<InsertOptionValueRequest>().Single();
        Assert.AreEqual("devkit_globalseverity", insert.OptionSetName);
        Assert.IsNull(insert.EntityLogicalName, "global option set updates must not target entity/attribute");
    }

    [TestMethod]
    public void Update_StatuscodeAddOptions_WithState_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_status",
            add_options: """[{"label":"Under Review","value":100000001,"state":1},{"label":"Draft","value":5}]""");
        AssertSuccess(result, "Updated column 'new_status' on entity 'account'.");
        var inserts = _service.OptionRequests.OfType<InsertStatusValueRequest>().ToList();
        Assert.AreEqual(2, inserts.Count);
        Assert.AreEqual(1, inserts[0].StateCode, "explicit 'state' field must map to StateCode");
        Assert.AreEqual(0, inserts[1].StateCode, "missing 'state' field must default to 0");
        Assert.AreEqual("account", inserts[0].EntityLogicalName);
        Assert.AreEqual("new_status", inserts[0].AttributeLogicalName);
        StringAssert.Contains(Json(result), "\"optionsAdded\":[\"Under Review (100000001) [state=1]\",\"Draft (5) [state=0]\"]");
    }

    [TestMethod]
    public void Update_StatuscodeRenameAndDeleteOptions_EndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_status",
            update_options: """[{"label":"Won (New)","value":100000000}]""",
            delete_options: "[2]");
        AssertSuccess(result, "Updated column 'new_status' on entity 'account'.");
        var rename = _service.OptionRequests.OfType<UpdateOptionValueRequest>().Single();
        Assert.AreEqual(100000000, rename.Value);
        var delete = _service.OptionRequests.OfType<DeleteOptionValueRequest>().Single();
        Assert.AreEqual(2, delete.Value);
        StringAssert.Contains(Json(result), "\"optionsRenamed\":[\"100000000 -\\u003E \\u0022Won (New)\\u0022\"]");
        StringAssert.Contains(Json(result), "optionsDeleted");
    }

    [TestMethod]
    public void Update_OptionsOnStringColumn_IgnoredWithWarning_NoMutation()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            add_options: """[{"label":"X","value":1}]""");
        AssertSuccess(result, "Updated column 'name' on entity 'account'.");
        Assert.AreEqual(0, _service.OptionRequests.Count, "option requests must not be issued for non-picklist columns");
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
    }

    [TestMethod]
    public void Update_PicklistInvalidAddOptionsJson_NoMutation()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_choice", add_options: "{bad");
        Assert.IsFalse(result.IsError == true, "option parse errors are collected, not thrown: " + Text(result));
        Assert.AreEqual(0, _service.OptionRequests.Count);
    }

    [TestMethod]
    public void Update_InvalidDefaultValues_ReturnTypeSpecificErrors()
    {
        var tool = NewTool();

        var picklist = tool.manage_column(entity_name: "account", logical_name: "new_choice", default_value: "abc");
        AssertError(picklist, "Invalid default_value 'abc'.");

        var multi = tool.manage_column(entity_name: "account", logical_name: "new_tags", default_value: "1");
        AssertError(multi, "default_value is not supported for multipicklist columns.");

        var str = tool.manage_column(entity_name: "account", logical_name: "name", default_value: "true");
        AssertError(str, "default_value is only supported for Picklist (integer) and Boolean ('true'/'false') columns, but 'name' is String.");
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
    }

    // ──────────────────────────────────────────────
    // UPDATE — dry-run and exception mapping
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_DryRun_PlansWithoutMutation()
    {
        var tool = NewTool(dryRun: true);

        var generic = tool.manage_column(entity_name: "account", logical_name: "name", display_name: "Dry Rename");
        AssertSuccess(generic, "[DryRun] Would UPDATE column 'account.name' with changes:");
        StringAssert.Contains(Text(generic), "DisplayName");

        var options = tool.manage_column(entity_name: "account", logical_name: "new_choice",
            add_options: """[{"label":"Dry","value":9}]""");
        AssertSuccess(options, "[DryRun] Would UPDATE column 'account.new_choice'");
        StringAssert.Contains(Text(options), "add options");

        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.OptionRequests.Count);
        Assert.AreEqual(0, _service.PublishAttempts);
        Assert.AreEqual(0, _webApi.Calls.Count);
    }

    [TestMethod]
    public void Update_UpdateAttributeThrowsNotFound_MapsError()
    {
        _service.UpdateExceptionMessage = "The attribute could not be found.";
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name", display_name: "X");
        AssertError(result, "Entity or attribute not found: 'account.name'.");
        StringAssert.Contains(Json(result), "serverMessage");
    }

    [TestMethod]
    public void Update_UpdateAttributeGenericFailure_MapsError()
    {
        _service.UpdateExceptionMessage = "boom";
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name", description: "desc");
        AssertError(result, "Failed to update attribute 'account.name'.");
        StringAssert.Contains(Json(result), "serverMessage");
    }

    // ──────────────────────────────────────────────
    // CREATE — formula clone: custom replacements pipe (ref|old->new;old=new)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FormulaCloneCustomReplacements_RewritesAllPairForms()
    {
        var result = NewTool().manage_column(entity_name: "contact", attribute_type: "string",
            display_name: "Repl Clone", schema_name: "dev_ReplClone",
            formula_definition: "account:new_formula_src|Trim(->Upper(;New_FormulaSrc=New_Other;=bad;Zed=",
            solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_replclone' on entity 'contact'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(1, attr.SourceType);
        StringAssert.Contains(attr.FormulaDefinition, "Upper(Text(");
        StringAssert.Contains(attr.FormulaDefinition, "New_Other");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("Trim("), "arrow replacement must apply");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("New_FormulaSrc"), "equals replacement must apply");
    }

    // ──────────────────────────────────────────────
    // CREATE — formula clone: related_ lookup target rewrite (same env)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FormulaClone_RelatedLookupTargetRewritten_SystemUserToContact()
    {
        var meta = _service.Entities.Single(e => e.LogicalName == "account");
        var attrs = meta.Attributes.ToList();
        attrs.Add(new LookupAttributeMetadata
        {
            LogicalName = "new_lk",
            SchemaName = "New_Lk",
            DisplayName = Labeled("Lk")
        });
        Set(attrs.Last(), "Targets", new[] { "contact" });
        attrs.Add(new StringAttributeMetadata
        {
            LogicalName = "new_srcl",
            SchemaName = "New_Srcl",
            DisplayName = Labeled("SrcL"),
            SourceType = 1,
            FormulaDefinition = "related_new_lk#systemuser Attribute=\"internalemailaddress\""
        });
        Set(meta, "Attributes", attrs.ToArray());

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Related Clone", schema_name: "dev_RelatedClone",
            formula_definition: "account:new_srcl", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_relatedclone' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        StringAssert.Contains(attr.FormulaDefinition, "related_new_lk#contact");
        StringAssert.Contains(attr.FormulaDefinition, "emailaddress1");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("#systemuser"), "lookup target must be rewritten");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("internalemailaddress"), "systemuser→contact must swap the email attribute");
    }

    // ──────────────────────────────────────────────
    // CREATE — formula clone: cross-environment via resolver groups
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FormulaCloneCrossEnv_PrefixRewritten()
    {
        var sourceService = new ColumnOrgService(_ctx.GetOrganizationService());
        var sourceMeta = new EntityMetadata { LogicalName = "new_crment", SchemaName = "New_Crment" };
        Set(sourceMeta, "PrimaryIdAttribute", "new_crmentid");
        Set(sourceMeta, "Attributes", new AttributeMetadata[]
        {
            IdAttribute("new_crmentid"),
            new StringAttributeMetadata
            {
                LogicalName = "new_ocalc",
                SchemaName = "New_Ocalc",
                DisplayName = Labeled("Ocalc"),
                SourceType = 1,
                FormulaDefinition = "ThisRecord.new_base + 1"
            }
        });
        sourceService.Entities.Add(sourceMeta);

        var resolver = new OneGroupResolver(new ConnectionBundle("2", null, false, null,
            sourceService, null, null, null, null, null));
        var tool = new ManageColumnTool(_service, new McpDryRunOptions { DryRun = false },
            new McpExecutionContext(false), _webApi, resolver);

        var result = tool.manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Cross Clone", schema_name: "dev_CrossClone",
            formula_definition: "new_crment:new_ocalc", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_crossclone' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(1, attr.SourceType);
        StringAssert.Contains(attr.FormulaDefinition, "ThisRecord.dev_base");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("new_base"), "cross-env source prefix must be rewritten");
    }

    [TestMethod]
    public void Create_FormulaCloneCrossEnv_RollupRelationshipMappedByPrefix()
    {
        var sourceService = new ColumnOrgService(_ctx.GetOrganizationService());
        var sourceMeta = new EntityMetadata { LogicalName = "new_srcent", SchemaName = "New_Srcent" };
        Set(sourceMeta, "PrimaryIdAttribute", "new_srcentid");
        Set(sourceMeta, "Attributes", new AttributeMetadata[]
        {
            IdAttribute("new_srcentid"),
            new StringAttributeMetadata
            {
                LogicalName = "new_oroll",
                SchemaName = "New_Oroll",
                DisplayName = Labeled("Oroll"),
                SourceType = 2,
                FormulaDefinition = "EntityName=\"new_srcent\" Sum(relatedlinked_new_srcopp#new_oppid#new_opp#, ThisRecord.new_amt)"
            }
        });
        Set(sourceMeta, "OneToManyRelationships", new OneToManyRelationshipMetadata[]
        {
            new()
            {
                SchemaName = "new_srcopp",
                ReferencedEntity = "new_srcent",
                ReferencingEntity = "new_opp",
                ReferencingAttribute = "new_oppid"
            }
        });
        sourceService.Entities.Add(sourceMeta);

        var targetMeta = new EntityMetadata { LogicalName = "dev_tent", SchemaName = "Dev_Tent" };
        Set(targetMeta, "PrimaryIdAttribute", "dev_tentid");
        Set(targetMeta, "Attributes", new AttributeMetadata[] { IdAttribute("dev_tentid") });
        Set(targetMeta, "OneToManyRelationships", new OneToManyRelationshipMetadata[]
        {
            new()
            {
                SchemaName = "dev_tent_opp",
                ReferencedEntity = "dev_tent",
                ReferencingEntity = "dev_opp",
                ReferencingAttribute = "new_oppid"
            }
        });
        _service.Entities.Add(targetMeta);

        var resolver = new OneGroupResolver(new ConnectionBundle("2", null, false, null,
            sourceService, null, null, null, null, null));
        var tool = new ManageColumnTool(_service, new McpDryRunOptions { DryRun = false },
            new McpExecutionContext(false), _webApi, resolver);

        var result = tool.manage_column(entity_name: "dev_tent", attribute_type: "string",
            display_name: "Cross Roll", schema_name: "dev_CrossRoll",
            formula_definition: "new_srcent:new_oroll", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_crossroll' on entity 'dev_tent'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(2, attr.SourceType);
        Assert.IsFalse(attr.FormulaDefinition!.Contains("new_srcopp"), "source relationship must be mapped to the target environment");
    }

    // ──────────────────────────────────────────────
    // UPDATE — formula parameters
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_FormulaCloneOnPlainColumn_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            formula_definition: "Sum(1)");

        AssertError(result, "Formula cloning on update requires an existing formula column and formula_definition.");
    }

    [TestMethod]
    public void Update_FormulaOnCalculatedColumn_AppliesNewFormula()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_formula_src",
            formula_definition: "Sum(1)", formula_source_type: "powerfx");

        AssertSuccess(result, "Updated column 'new_formula_src'");
        var attr = _service.UpdatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(3, attr.SourceType);
        Assert.AreEqual("Sum(1)", attr.FormulaDefinition);
    }

    [TestMethod]
    public void Update_PowerFxExpression_PreservesColumnAndAddsItToSolution()
    {
        var target = _service.Entities.Single(e => e.LogicalName == "account")
            .Attributes.Single(a => a.LogicalName == "new_powerfx");
        const string expression = """Text(new_union_fee_id.new_date, "yyyy-mm-dd")""";

        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_powerfx",
            formula_expression: $"={expression}", solution_name: "DevKit Solution");

        AssertSuccess(result, "Updated column 'new_powerfx'");
        var updated = (StringAttributeMetadata)_service.UpdatedAttributes.Single();
        Assert.AreEqual(target.MetadataId, updated.MetadataId);
        Assert.AreEqual(3, updated.SourceType);
        Assert.AreEqual(expression, updated.FormulaDefinition);
        var change = result.StructuredContent!.Value.GetProperty("changes").GetProperty("formulaDefinition");
        Assert.AreEqual("Text(name)", change.GetProperty("oldValue").GetString());
        Assert.AreEqual(expression, change.GetProperty("newValue").GetString());
        var backupPath = result.StructuredContent!.Value.GetProperty("backupPath").GetString();
        Assert.IsFalse(string.IsNullOrWhiteSpace(backupPath));
        Assert.IsTrue(System.IO.File.Exists(backupPath), $"Expected formula backup file at '{backupPath}'");
        var backupJson = System.IO.File.ReadAllText(backupPath);
        StringAssert.Contains(backupJson, "\"entityName\": \"account\"");
        StringAssert.Contains(backupJson, "\"logicalName\": \"new_powerfx\"");
        StringAssert.Contains(backupJson, "\"sourceType\": 3");
        StringAssert.Contains(backupJson, "\"formulaDefinition\": \"Text(name)\"");
        StringAssert.Contains(backupJson, "formula_expression");
        try { System.IO.File.Delete(backupPath); } catch { }
        var solutionRequest = _service.SolutionRequests.Single();
        Assert.AreEqual(target.MetadataId, solutionRequest.ComponentId);
        Assert.AreEqual(2, solutionRequest.ComponentType);
        Assert.AreEqual("DevKit", solutionRequest.SolutionUniqueName);
        Assert.AreEqual(1, _service.PublishAttempts);
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
        Assert.AreEqual(0, _service.DeleteAttributeAttempts);
    }

    [TestMethod]
    public void Update_PowerFxClone_RewritesTableAndPrefixOnEmptyTarget()
    {
        var source = new StringAttributeMetadata
        {
            LogicalName = "dev_powerfx",
            SourceType = 3,
            FormulaDefinition = """Text(contact.'dev_lookup'.dev_date, "dev_date")"""
        };
        var contact = _service.Entities.Single(e => e.LogicalName == "contact");
        Set(contact, "Attributes", contact.Attributes.Append(source).ToArray());

        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_emptyformula",
            formula_definition: "contact:dev_powerfx");

        AssertSuccess(result, "Updated column 'new_emptyformula'");
        var expected = """Text(account.'new_lookup'.new_date, "dev_date")""";
        Assert.AreEqual(expected, ((StringAttributeMetadata)_service.UpdatedAttributes.Single()).FormulaDefinition);
        var change = result.StructuredContent!.Value.GetProperty("changes").GetProperty("formulaDefinition");
        Assert.AreEqual("", change.GetProperty("oldValue").GetString());
        Assert.AreEqual(expected, change.GetProperty("newValue").GetString());
    }

    [TestMethod]
    public void Update_PowerFxExpression_DryRunReportsFormulaWithoutWriting()
    {
        var result = NewTool(dryRun: true).manage_column(entity_name: "account", logical_name: "new_emptyformula",
            formula_expression: "=Text(name)", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true);
        var change = result.StructuredContent!.Value.GetProperty("changes").GetProperty("formulaDefinition");
        Assert.AreEqual("", change.GetProperty("oldValue").GetString());
        Assert.AreEqual("Text(name)", change.GetProperty("newValue").GetString());
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.SolutionRequests.Count);
        Assert.AreEqual(0, _service.PublishAttempts);
    }

    [TestMethod]
    public void Update_PowerFxExpression_WhenUpdateFails_ReturnsErrorWithoutRecreatingColumn()
    {
        _service.UpdateExceptionMessage = "update blocked";

        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_powerfx",
            formula_expression: "Upper(name)");

        AssertError(result, "update blocked");
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
        Assert.AreEqual(0, _service.DeleteAttributeAttempts);
        Assert.AreEqual(0, _service.PublishAttempts);
    }

    [TestMethod]
    public void Update_PowerFxExpression_WhenDataverseIgnoresFormula_ReturnsError()
    {
        _service.AttributeReadBack = new StringAttributeMetadata { SourceType = 3, FormulaDefinition = "Text(name)" };

        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_powerfx",
            formula_expression: "Upper(name)", solution_name: "DevKit");

        AssertError(result, "Could not verify the Power Fx formula update");
        Assert.AreEqual(1, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.SolutionRequests.Count);
        Assert.AreEqual(0, _service.PublishAttempts);
    }

    [TestMethod]
    [DataRow("name", "=Text(name)", "", "", "requires an existing Power Fx column")]
    [DataRow("dev_missing", "=Text(name)", "", "", "requires an existing Power Fx column")]
    [DataRow("new_powerfx", "=", "", "", "must contain a Power Fx expression")]
    [DataRow("new_powerfx", "=Text(name)", "account:new_powerfx", "", "cannot be combined")]
    [DataRow("new_powerfx", "=Text(name)", "", "powerfx", "cannot be combined")]
    [DataRow("new_powerfx", null, "account:new_formula_src", "", "requires a Power Fx source formula")]
    public void Update_PowerFxFormula_InvalidParametersAreRejected(string logicalName, string expression,
        string reference, string kind, string expectedError)
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: logicalName,
            formula_definition: reference, formula_source_type: kind, formula_expression: expression);

        AssertError(result, expectedError);
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    [TestMethod]
    public void Update_RawFormulaDefinition_OnRollupAndCalculated_UpdatesMetadataAndPublishes()
    {
        var rollupTarget = _service.Entities.Single(e => e.LogicalName == "account")
            .Attributes.Single(a => a.LogicalName == "new_rollup_total");
        const string rollupXaml = "<Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"><Sequence DisplayName=\"Aggregate\" /></Activity>";

        var rollupResult = NewTool().manage_column(entity_name: "account", logical_name: "new_rollup_total",
            raw_formula_definition: rollupXaml, solution_name: "DevKit Solution");

        AssertSuccess(rollupResult, "Updated column 'new_rollup_total'");
        var updatedRollup = (StringAttributeMetadata)_service.UpdatedAttributes.Single();
        Assert.AreEqual(rollupTarget.MetadataId, updatedRollup.MetadataId);
        Assert.AreEqual(2, updatedRollup.SourceType);
        Assert.AreEqual(rollupXaml, updatedRollup.FormulaDefinition);
        var rollupChange = rollupResult.StructuredContent!.Value.GetProperty("changes").GetProperty("formulaDefinition");
        Assert.AreEqual(rollupXaml, rollupChange.GetProperty("newValue").GetString());
        var rollupBackupPath = rollupResult.StructuredContent!.Value.GetProperty("backupPath").GetString();
        Assert.IsFalse(string.IsNullOrWhiteSpace(rollupBackupPath));
        Assert.IsTrue(System.IO.File.Exists(rollupBackupPath), $"Expected rollup formula backup at '{rollupBackupPath}'");
        var rollupBackupJson = System.IO.File.ReadAllText(rollupBackupPath);
        StringAssert.Contains(rollupBackupJson, "\"entityName\": \"account\"");
        StringAssert.Contains(rollupBackupJson, "\"logicalName\": \"new_rollup_total\"");
        StringAssert.Contains(rollupBackupJson, "\"sourceType\": 2");
        StringAssert.Contains(rollupBackupJson, "raw_formula_definition");
        try { System.IO.File.Delete(rollupBackupPath); } catch { }
        Assert.AreEqual(1, _service.SolutionRequests.Count);
        Assert.AreEqual(1, _service.PublishAttempts);

        _service.UpdatedAttributes.Clear();
        _service.SolutionRequests.Clear();
        _service.PublishAttempts = 0;

        const string calcXaml = "<?xml version=\"1.0\" encoding=\"utf-16\"?><Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"><GetEntityProperty Attribute=\"name\" EntityName=\"account\" Value=\"[v1]\" /><SetEntityProperty Value=\"[v1]\" /></Activity>";
        var calcResult = NewTool().manage_column(entity_name: "account", logical_name: "new_formula_src",
            raw_formula_definition: calcXaml, formula_source_type: "calculated");

        AssertSuccess(calcResult, "Updated column 'new_formula_src'");
        var updatedCalc = (StringAttributeMetadata)_service.UpdatedAttributes.Single();
        Assert.AreEqual(1, updatedCalc.SourceType);
        Assert.AreEqual(calcXaml, updatedCalc.FormulaDefinition);
        var calcBackupPath = calcResult.StructuredContent!.Value.GetProperty("backupPath").GetString();
        Assert.IsFalse(string.IsNullOrWhiteSpace(calcBackupPath));
        Assert.IsTrue(System.IO.File.Exists(calcBackupPath), $"Expected calculated formula backup at '{calcBackupPath}'");
        var calcBackupJson = System.IO.File.ReadAllText(calcBackupPath);
        StringAssert.Contains(calcBackupJson, "\"sourceType\": 1");
        StringAssert.Contains(calcBackupJson, "raw_formula_definition");
        try { System.IO.File.Delete(calcBackupPath); } catch { }
        Assert.AreEqual(1, _service.PublishAttempts);
    }

    [TestMethod]
    public void Create_RawFormulaDefinition_CalculatedAndRollup_ExplicitAndInferred()
    {
        const string rollupXaml = "<Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"><Sequence DisplayName=\"Aggregate\">relatedlinked_new_account_child#new_childlook#child#</Sequence></Activity>";
        var rollupResult = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Raw Rollup", schema_name: "dev_RawRollup",
            raw_formula_definition: rollupXaml, solution_name: "DevKit");

        AssertSuccess(rollupResult, "Created Money column 'dev_rawrollup' on entity 'account'.");
        var createdRollup = _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().Single();
        Assert.AreEqual(2, createdRollup.SourceType);
        Assert.AreEqual(rollupXaml, createdRollup.FormulaDefinition);

        const string calcXaml = "<Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"><SetEntityProperty Value=\"1\" /></Activity>";
        var calcResult = NewTool().manage_column(entity_name: "account", attribute_type: "integer",
            display_name: "Raw Calc", schema_name: "dev_RawCalc",
            raw_formula_definition: calcXaml, formula_source_type: "calculated", solution_name: "DevKit");

        AssertSuccess(calcResult, "Created Integer column 'dev_rawcalc' on entity 'account'.");
        var createdCalc = _service.CreatedAttributes.OfType<IntegerAttributeMetadata>().Single();
        Assert.AreEqual(1, createdCalc.SourceType);
        Assert.AreEqual(calcXaml, createdCalc.FormulaDefinition);

        // Inferred calculated when formula_source_type is omitted
        var inferredCalcResult = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Raw Calc Inferred", schema_name: "dev_RawCalcInferred",
            raw_formula_definition: calcXaml, solution_name: "DevKit");
        AssertSuccess(inferredCalcResult, "Created String column 'dev_rawcalcinferred' on entity 'account'.");
        var createdInferredCalc = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(1, createdInferredCalc.SourceType);
        Assert.AreEqual(calcXaml, createdInferredCalc.FormulaDefinition);
    }

    [TestMethod]
    [DataRow("new_rollup_total", "", "", null, "   ", "must contain a valid Calculated or Rollup XAML definition")]
    [DataRow("new_rollup_total", "", "", null, "Sum(1)", "must contain a valid Calculated or Rollup XAML definition")]
    [DataRow("new_rollup_total", "", "", null, "<Activity><Unclosed></Activity>", "raw_formula_definition contains invalid XML")]
    [DataRow("new_rollup_total", "", "", null, "<NotActivity />", "raw_formula_definition must have an <Activity ...> root element")]
    [DataRow("new_rollup_total", "account:new_rollup_total", "", null, "<Activity />", "cannot be combined with formula_definition or formula_expression")]
    [DataRow("new_powerfx", "", "", "=Text(name)", "<Activity />", "cannot be combined")]
    [DataRow("name", "", "", null, "<Activity />", "requires an existing Calculated or Rollup column")]
    [DataRow("new_powerfx", "", "", null, "<Activity />", "requires an existing Calculated or Rollup column")]
    [DataRow("dev_missing", "", "", null, "<Activity />", "requires an existing Calculated or Rollup column")]
    [DataRow("new_rollup_total", "", "calculated", null, "<Activity />", "formula_source_type does not match target column")]
    [DataRow("new_rollup_total", "", "bogus", null, "<Activity />", "Invalid formula_source_type 'bogus'")]
    public void Update_RawFormulaDefinition_InvalidParametersAreRejected(string logicalName,
        string reference, string kind, string? expression, string rawFormula, string expectedError)
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: logicalName,
            formula_definition: reference, formula_source_type: kind,
            formula_expression: expression, raw_formula_definition: rawFormula);

        AssertError(result, expectedError);
        Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    [TestMethod]
    public void Create_RawFormulaDefinition_InvalidParametersAreRejected()
    {
        // Bare <Activity /> without formula_source_type cannot infer calculated vs rollup
        var missingKind = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Ambiguous Raw", raw_formula_definition: "<Activity />", solution_name: "DevKit");
        AssertError(missingKind, "formula_source_type ('calculated' or 'rollup') is required");

        // PowerFx source type not allowed with raw_formula_definition
        var powerFxKind = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "PowerFx Raw", raw_formula_definition: "<Activity />",
            formula_source_type: "powerfx", solution_name: "DevKit");
        AssertError(powerFxKind, "raw_formula_definition is only supported for Calculated or Rollup columns");

        // Invalid formula_source_type on create with raw_formula_definition
        var bogusKind = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Bogus Raw", raw_formula_definition: "<Activity />",
            formula_source_type: "bogus", solution_name: "DevKit");
        AssertError(bogusKind, "Invalid formula_source_type 'bogus'");

        // Incompatible attribute_type (e.g. image) with raw_formula_definition
        var badType = NewTool().manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Image Raw", raw_formula_definition: "<Activity />",
            formula_source_type: "calculated", solution_name: "DevKit");
        AssertError(badType, "is not supported on attribute_type 'image'");

        // Autonumber combined with raw_formula_definition
        var autoNum = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Auto Raw", auto_number_format: "TKT-{SEQNUM:4}",
            raw_formula_definition: "<Activity />", formula_source_type: "calculated", solution_name: "DevKit");
        AssertError(autoNum, "auto_number_format cannot be combined with formula_definition/formula_source_type");

        Assert.AreEqual(0, _service.CreatedAttributes.Count);
    }

    [TestMethod]
    public void RawFormulaDefinition_FilePath_ReadsUtf8XamlAndRestoresFromBackupFile()
    {
        var tempDir = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "devkit_raw_formula_" + Guid.NewGuid().ToString("N"));
        System.IO.Directory.CreateDirectory(tempDir);
        var xmlFilePath = System.IO.Path.Combine(tempDir, "formula.xml");
        var badXmlFilePath = System.IO.Path.Combine(tempDir, "bad_formula.xml");
        var missingFilePath = System.IO.Path.Combine(tempDir, "nonexistent_formula.xml");
        string? backupPath = null;

        try
        {
            const string oldRollupXaml = "<Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"><Sequence DisplayName=\"OldAggregate\" /></Activity>";
            var rollupTarget = (StringAttributeMetadata)_service.Entities.Single(e => e.LogicalName == "account")
                .Attributes.Single(a => a.LogicalName == "new_rollup_total");
            rollupTarget.FormulaDefinition = oldRollupXaml;

            const string fileXaml = "<Activity xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\">\r\n  <Sequence DisplayName=\"Aggregate\" />\r\n</Activity>";
            System.IO.File.WriteAllText(xmlFilePath, "\r\n  " + fileXaml + "  \r\n", System.Text.Encoding.UTF8);

            // 1. UPDATE via file path
            var updateResult = NewTool().manage_column(entity_name: "account", logical_name: "new_rollup_total",
                raw_formula_definition: xmlFilePath, solution_name: "DevKit Solution");

            AssertSuccess(updateResult, "Updated column 'new_rollup_total'");
            var updatedRollup = (StringAttributeMetadata)_service.UpdatedAttributes.Single();
            Assert.AreEqual(fileXaml, updatedRollup.FormulaDefinition);
            backupPath = updateResult.StructuredContent!.Value.GetProperty("backupPath").GetString();
            Assert.IsFalse(string.IsNullOrWhiteSpace(backupPath));
            Assert.IsTrue(System.IO.File.Exists(backupPath), $"Expected backup file at '{backupPath}'");

            // 2. Restore directly from the .formula.json backup file path
            _service.UpdatedAttributes.Clear();
            var restoreResult = NewTool().manage_column(entity_name: "account", logical_name: "new_rollup_total",
                raw_formula_definition: backupPath);
            AssertSuccess(restoreResult, "Updated column 'new_rollup_total'");
            var restoredRollup = (StringAttributeMetadata)_service.UpdatedAttributes.Single();
            Assert.AreEqual(oldRollupXaml, restoredRollup.FormulaDefinition);
            var secondBackupPath = restoreResult.StructuredContent!.Value.GetProperty("backupPath").GetString();
            if (!string.IsNullOrWhiteSpace(secondBackupPath))
            {
                try { System.IO.File.Delete(secondBackupPath); } catch { }
            }

            // 3. CREATE via file path
            var createResult = NewTool().manage_column(entity_name: "account", attribute_type: "money",
                display_name: "File Rollup", schema_name: "dev_FileRollup",
                raw_formula_definition: xmlFilePath, solution_name: "DevKit");
            AssertSuccess(createResult, "Created Money column 'dev_filerollup' on entity 'account'.");
            var createdRollup = _service.CreatedAttributes.OfType<MoneyAttributeMetadata>().Single();
            Assert.AreEqual(2, createdRollup.SourceType);
            Assert.AreEqual(fileXaml, createdRollup.FormulaDefinition);

            // 4. Non-existent file path (does not start with '<') returns clear file-not-found error
            _service.UpdatedAttributes.Clear();
            var missingResult = NewTool().manage_column(entity_name: "account", logical_name: "new_rollup_total",
                raw_formula_definition: missingFilePath);
            AssertError(missingResult, "raw_formula_definition file not found");
            Assert.AreEqual(0, _service.UpdatedAttributes.Count);

            // 5. Existing file with invalid XML returns XML validation error
            System.IO.File.WriteAllText(badXmlFilePath, "<Activity><Unclosed></Activity>", System.Text.Encoding.UTF8);
            var badXmlResult = NewTool().manage_column(entity_name: "account", logical_name: "new_rollup_total",
                raw_formula_definition: badXmlFilePath);
            AssertError(badXmlResult, "raw_formula_definition contains invalid XML");
            Assert.AreEqual(0, _service.UpdatedAttributes.Count);
        }
        finally
        {
            if (!string.IsNullOrWhiteSpace(backupPath))
            {
                try { System.IO.File.Delete(backupPath); } catch { }
            }
            try { System.IO.Directory.Delete(tempDir, recursive: true); } catch { }
        }
    }

    // ──────────────────────────────────────────────
    // UPDATE — required-level PUT failure is swallowed
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_RequiredLevel_PutFailure_IsSwallowed()
    {
        _webApi.Responder = () => throw new HttpRequestException("put failed");

        var result = NewTool().manage_column(entity_name: "contact", logical_name: "fullname",
            required_level: "ApplicationRequired");

        AssertSuccess(result, "Updated column 'fullname'");
        Assert.IsTrue(_webApi.Calls.Any(c => c.Method == HttpMethod.Put), "required-level PUT must be attempted");
    }

    // ──────────────────────────────────────────────
    // UPDATE — alternate key create/delete
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_AlternateKeyTrue_KeyCreateFails_MapsError()
    {
        _service.KeyCreateExceptionMessage = "key blocked";

        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            is_alternate_key: true);

        AssertError(result, "failed to create Alternate Key for 'account.name'");
    }

    [TestMethod]
    public void Update_AlternateKeyTrue_KeyCreateSucceeds()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            is_alternate_key: true);

        AssertSuccess(result, "Updated column 'name'");
        StringAssert.Contains(Json(result), "isAlternateKey");
    }

    [TestMethod]
    public void Update_AlternateKeyFalse_KeyDeleted()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            is_alternate_key: false);

        AssertSuccess(result, "Updated column 'name'");
        StringAssert.Contains(Json(result), "isAlternateKey");
    }

    [TestMethod]
    public void Create_AlternateKey_CreatesEntityKey()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Key Col", schema_name: "dev_KeyCol", solution_name: "DevKit",
            is_alternate_key: true);

        AssertSuccess(result, "Created String column 'dev_keycol' on entity 'account'.");
        StringAssert.Contains(Json(result), "isAlternateKey");
    }

    // ──────────────────────────────────────────────
    // UPDATE — statuscode options with color + state
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_StatusCode_AddAndRenameOptionsWithColor()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "new_status",
            add_options: "[{\"label\":\"Open X\",\"state\":1,\"color\":\"#FF0000\"}]",
            update_options: "[{\"label\":\"Renamed\",\"value\":1,\"color\":\"#00FF00\"}]");

        AssertSuccess(result, "Updated column 'new_status'");
        StringAssert.Contains(Json(result), "Open X (100000000) [state=1] [#FF0000]");
        StringAssert.Contains(Json(result), "[state=1]");
        StringAssert.Contains(Json(result), "[#FF0000]");
        StringAssert.Contains(Json(result), "Renamed");
        StringAssert.Contains(Json(result), "[#00FF00]");
        Assert.IsTrue(_service.OptionRequests.Any(r => r is InsertStatusValueRequest));
        Assert.IsTrue(_service.OptionRequests.Any(r => r is UpdateOptionValueRequest));
    }

    // ──────────────────────────────────────────────
    // UPDATE — datetime format change
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_DateTime_FormatChanged()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "when",
            format: "DateOnly");

        AssertSuccess(result, "Updated column 'new_when' on entity 'account'.");
        var updated = _service.UpdatedAttributes.OfType<DateTimeAttributeMetadata>().Single();
        Assert.AreEqual(DateTimeFormat.DateOnly, updated.Format);
    }

    // ──────────────────────────────────────────────
    // InvokeAsync — resolver routing
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task InvokeAsync_WithResolver_CreatesColumn()
    {
        var resolver = new OneGroupResolver(new ConnectionBundle("1", null, false, null,
            _service, null, null, null, null, null));
        var tool = new ManageColumnTool(_service, new McpDryRunOptions { DryRun = false },
            new McpExecutionContext(false), _webApi, resolver);

        var result = await tool.InvokeAsync(entity_name: "account", attribute_type: "integer",
            display_name: "Inv Count", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created Integer column");
    }

    // ──────────────────────────────────────────────
    // CREATE — formula clone: relatedlinked_ relationship rename on target
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FormulaClone_RelatedLinkedRelationshipRenamed()
    {
        var meta = _service.Entities.Single(e => e.LogicalName == "account");
        var attrs = meta.Attributes.ToList();
        attrs.Add(new LookupAttributeMetadata
        {
            LogicalName = "new_oppid",
            SchemaName = "New_Oppid",
            DisplayName = Labeled("Oppid")
        });
        attrs.Add(new StringAttributeMetadata
        {
            LogicalName = "new_srcll",
            SchemaName = "New_Srcll",
            DisplayName = Labeled("SrcLl"),
            SourceType = 1,
            FormulaDefinition = "relatedlinked_oldrel#new_oppid#dev_opp# Sum(ThisRecord.new_amt)"
        });
        Set(meta, "Attributes", attrs.ToArray());
        Set(meta, "OneToManyRelationships", new OneToManyRelationshipMetadata[]
        {
            new()
            {
                SchemaName = "account_x_rel",
                ReferencedEntity = "account",
                ReferencingEntity = "dev_opp",
                ReferencingAttribute = "new_oppid"
            }
        });

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Linked Clone", schema_name: "dev_LinkedClone",
            formula_definition: "account:new_srcll", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_linkedclone' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        StringAssert.Contains(attr.FormulaDefinition, "account_x_rel");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("oldrel"), "stale relationship schema must be renamed");
    }

    [TestMethod]
    public void Create_FormulaClone_RelatedLookup_NonSystemUser_NoEmailSwap()
    {
        var meta = _service.Entities.Single(e => e.LogicalName == "account");
        var attrs = meta.Attributes.ToList();
        attrs.Add(new LookupAttributeMetadata
        {
            LogicalName = "new_lk2",
            SchemaName = "New_Lk2",
            DisplayName = Labeled("Lk2")
        });
        Set(attrs.Last(), "Targets", new[] { "lead" });
        attrs.Add(new StringAttributeMetadata
        {
            LogicalName = "new_srcn",
            SchemaName = "New_Srcn",
            DisplayName = Labeled("SrcN"),
            SourceType = 1,
            FormulaDefinition = "related_new_lk2#systemuser"
        });
        Set(meta, "Attributes", attrs.ToArray());

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Lead Clone", schema_name: "dev_LeadClone",
            formula_definition: "account:new_srcn", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_leadclone' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        StringAssert.Contains(attr.FormulaDefinition, "related_new_lk2#lead");
        Assert.IsFalse(attr.FormulaDefinition!.Contains("emailaddress1"), "systemuser→contact swap must not fire for non-systemuser targets");
    }

    [TestMethod]
    public void Create_FormulaClone_FallbackAlsoFails_MapsError()
    {
        _service.RejectClonedFormula = true;
        _service.CreateExceptionMessage = "create blocked";

        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Doomed Clone", schema_name: "dev_DoomedClone",
            formula_definition: "account:new_formula_src", solution_name: "DevKit");

        StringAssert.Contains(Text(result), "after multiple retry attempts");
    }

    [TestMethod]
    public void Create_FormulaCloneCrossEnv_SkipsAndSkipsThenResolves()
    {
        var sourceService = new ColumnOrgService(_ctx.GetOrganizationService());
        var sourceMeta = new EntityMetadata { LogicalName = "new_crment", SchemaName = "New_Crment" };
        Set(sourceMeta, "PrimaryIdAttribute", "new_crmentid");
        Set(sourceMeta, "Attributes", new AttributeMetadata[]
        {
            IdAttribute("new_crmentid"),
            new StringAttributeMetadata
            {
                LogicalName = "new_ocalc",
                SchemaName = "New_Ocalc",
                DisplayName = Labeled("Ocalc"),
                SourceType = 1,
                FormulaDefinition = "ThisRecord.new_base + 1"
            }
        });
        sourceService.Entities.Add(sourceMeta);

        // Group "2" resolves to the same service as the startup connection
        // (skipped by the equality guard), group "3" throws (inner catch),
        // group "4" resolves the source column.
        var failingService = new ColumnOrgService(_ctx.GetOrganizationService());
        var resolver = new MultiGroupResolver(
            new ConnectionBundle("2", null, false, null, _service, null, null, null, null, null),
            new ConnectionBundle("3", null, false, null, failingService, null, null, null, null, null),
            new ConnectionBundle("4", null, false, null, sourceService, null, null, null, null, null));
        var tool = new ManageColumnTool(_service, new McpDryRunOptions { DryRun = false },
            new McpExecutionContext(false), _webApi, resolver);

        var result = tool.manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Multi Clone", schema_name: "dev_MultiClone",
            formula_definition: "new_crment:new_ocalc", solution_name: "DevKit");

        AssertSuccess(result, "Created String column 'dev_multiclone' on entity 'account'.");
        var attr = _service.CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        StringAssert.Contains(attr.FormulaDefinition, "ThisRecord.dev_base");
    }

    private sealed class OneGroupResolver : DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver
    {
        private readonly ConnectionBundle _bundle;

        public OneGroupResolver(ConnectionBundle bundle) => _bundle = bundle;

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken)
            => Task.FromResult(_bundle);

        public IReadOnlyList<ConnectionGroupInfo> ListGroups() => new[]
        {
            new ConnectionGroupInfo { Env = "2" }
        };

        public IDisposable BeginInvocation() => new NoopLease();

        private sealed class NoopLease : IDisposable
        {
            public void Dispose() { }
        }
    }

    private sealed class MultiGroupResolver : DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver
    {
        private readonly ConnectionBundle[] _bundles;

        public MultiGroupResolver(params ConnectionBundle[] bundles) => _bundles = bundles;

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken)
            => Task.FromResult(_bundles.First(b => b.EnvId == env));

        public IReadOnlyList<ConnectionGroupInfo> ListGroups() => _bundles
            .Select(b => new ConnectionGroupInfo { Env = b.EnvId })
            .ToList();

        public IDisposable BeginInvocation() => new NoopLease2();

        private sealed class NoopLease2 : IDisposable
        {
            public void Dispose() { }
        }
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    private sealed class FakeWebApiExecutor : IWebApiExecutor
    {
        public Func<HttpResponseMessage>? Responder { get; set; }
        public List<(HttpMethod Method, string Route, string? Body)> Calls { get; } = new();
        public string CurrentAccessToken => string.Empty;

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string? body, Dictionary<string, List<string>>? customHeaders, string? contentType = null, CancellationToken cancellationToken = default)
        {
            Calls.Add((method, queryString, body));
            return Responder?.Invoke() ?? new HttpResponseMessage(HttpStatusCode.OK);
        }

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string? body, Dictionary<string, List<string>>? customHeaders, string? contentType = null, CancellationToken cancellationToken = default) =>
            Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));
    }

    /// <summary>
    /// Answers the metadata messages ManageColumnTool issues from seeded lists;
    /// everything else (solution/publisher/organization CRUD, FetchExpression)
    /// is delegated to the wrapped FakeXrmEasy service.
    /// </summary>
    private sealed class ColumnOrgService : IOrganizationService
    {
        private const string PolymorphicLookupRequestName = "CreatePolymorphicLookupAttribute";

        private readonly IOrganizationService _inner;

        /// <summary>Entity metadata served by RetrieveAllEntities/RetrieveEntity.</summary>
        public List<EntityMetadata> Entities { get; } = new();

        /// <summary>Global option sets served by RetrieveAllOptionSets.</summary>
        public List<OptionSetMetadataBase> GlobalOptionSets { get; } = new();

        /// <summary>Attributes created via CreateAttributeRequest or relationship requests.</summary>
        public List<AttributeMetadata> CreatedAttributes { get; } = new();

        /// <summary>Attributes received via UpdateAttributeRequest.</summary>
        public List<AttributeMetadata> UpdatedAttributes { get; } = new();
        public UpdateAttributeRequest? LastUpdateRequest { get; private set; }
        public List<AddSolutionComponentRequest> SolutionRequests { get; } = new();

        /// <summary>Option management requests (insert/update/delete/status).</summary>
        public List<OrganizationRequest> OptionRequests { get; } = new();

        /// <summary>1:N lookup creation requests.</summary>
        public List<CreateOneToManyRequest> LookupRequests { get; } = new();

        /// <summary>PublishXmlRequest attempts (each one throws so propagation waits are skipped).</summary>
        public int PublishAttempts;

        /// <summary>When set, CreateAttributeRequest throws with this message.</summary>
        public string? CreateExceptionMessage;

        /// <summary>When true, CreateAttributeRequest with a non-empty FormulaDefinition throws (clone rejection fallback).</summary>
        public bool RejectClonedFormula;

        /// <summary>When set, UpdateAttributeRequest throws with this message.</summary>
        public string? UpdateExceptionMessage;

        public AttributeMetadata? AttributeReadBack;

        public int DeleteAttributeAttempts;

        /// <summary>When set, CreateEntityKeyRequest throws with this message.</summary>
        public string? KeyCreateExceptionMessage;

        public ColumnOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
        public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);

        public OrganizationResponse Execute(OrganizationRequest request) => request switch
        {
            PublishXmlRequest => Publish(),
            RetrieveAllEntitiesRequest => RetrieveAll(),
            RetrieveEntityRequest r => RetrieveOne(r),
            RetrieveAttributeRequest r => RetrieveAttribute(r),
            RetrieveAllOptionSetsRequest => RetrieveOptionSets(),
            CreateAttributeRequest r => CreateAttribute(r),
            UpdateAttributeRequest r => UpdateAttribute(r),
            AddSolutionComponentRequest r => AddToSolution(r),
            CreateEntityKeyRequest when KeyCreateExceptionMessage != null
                => throw new InvalidOperationException(KeyCreateExceptionMessage),
            CreateEntityKeyRequest => new OrganizationResponse(),
            DeleteEntityKeyRequest => new OrganizationResponse(),
            DeleteAttributeRequest => DeleteAttribute(),
            CreateOneToManyRequest r => CreateOneToMany(r),
            CreateCustomerRelationshipsRequest r => CreateLookup(r.Lookup,
                r.OneToManyRelationships.Select(rel => rel.ReferencedEntity).ToArray(),
                r.OneToManyRelationships.First().ReferencingEntity,
                new CreateCustomerRelationshipsResponse()),
            InsertOptionValueRequest => OptionMutation(request),
            UpdateOptionValueRequest => OptionMutation(request),
            DeleteOptionValueRequest => OptionMutation(request),
            InsertStatusValueRequest => OptionMutation(request),
            OrganizationRequest { RequestName: PolymorphicLookupRequestName } r => CreatePolymorphic(r),
            _ => _inner.Execute(request)
        };

        private OrganizationResponse Publish()
        {
            PublishAttempts++;
            throw new InvalidOperationException("PublishXml is disabled in unit tests to skip metadata propagation waits.");
        }

        private OrganizationResponse RetrieveAll()
        {
            var response = new RetrieveAllEntitiesResponse();
            response.Results["EntityMetadata"] = Entities.ToArray();
            return response;
        }

        private OrganizationResponse RetrieveOne(RetrieveEntityRequest request)
        {
            var metadata = Entities.FirstOrDefault(e =>
                string.Equals(e.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(e.SchemaName, request.LogicalName, StringComparison.OrdinalIgnoreCase))
                ?? throw new InvalidOperationException($"Entity metadata not found: {request.LogicalName}");
            var response = new RetrieveEntityResponse();
            response.Results["EntityMetadata"] = metadata;
            return response;
        }

        private OrganizationResponse RetrieveAttribute(RetrieveAttributeRequest request)
        {
            var entity = Entities.FirstOrDefault(e =>
                string.Equals(e.LogicalName, request.EntityLogicalName, StringComparison.OrdinalIgnoreCase))
                ?? throw new InvalidOperationException($"Entity metadata not found: {request.EntityLogicalName}");

            AttributeMetadata attribute = null;
            if (request.MetadataId is Guid id && id != Guid.Empty)
                attribute = entity.Attributes?.FirstOrDefault(a => a.MetadataId == id);
            attribute ??= entity.Attributes?.FirstOrDefault(a =>
                string.Equals(a.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase));

            if (attribute == null)
                throw new InvalidOperationException(
                    $"Attribute metadata not found: {request.EntityLogicalName}:{request.LogicalName ?? request.MetadataId.ToString()}");

            var response = new RetrieveAttributeResponse();
            response.Results["AttributeMetadata"] = LastUpdateRequest?.Attribute.LogicalName == request.LogicalName
                ? AttributeReadBack ?? attribute
                : attribute;
            return response;
        }

        private OrganizationResponse RetrieveOptionSets()
        {
            var response = new RetrieveAllOptionSetsResponse();
            response.Results["OptionSetMetadata"] = GlobalOptionSets.ToArray();
            return response;
        }

        private OrganizationResponse CreateAttribute(CreateAttributeRequest request)
        {
            if (CreateExceptionMessage != null)
                throw new InvalidOperationException(CreateExceptionMessage);
            var attribute = request.Attribute;
            if (RejectClonedFormula)
            {
                var formula = attribute.GetType().GetProperty("FormulaDefinition")?.GetValue(attribute) as string;
                if (!string.IsNullOrEmpty(formula))
                    throw new InvalidOperationException("Invalid formula definition.");
            }
            attribute.MetadataId = Guid.NewGuid();
            AttachToEntity(request.EntityName, attribute);
            CreatedAttributes.Add(attribute);
            var response = new CreateAttributeResponse();
            response.Results["AttributeId"] = attribute.MetadataId;
            return response;
        }

        private OrganizationResponse UpdateAttribute(UpdateAttributeRequest request)
        {
            if (UpdateExceptionMessage != null)
                throw new InvalidOperationException(UpdateExceptionMessage);
            LastUpdateRequest = request;
            UpdatedAttributes.Add(request.Attribute);
            return new OrganizationResponse();
        }

        private OrganizationResponse DeleteAttribute()
        {
            DeleteAttributeAttempts++;
            return new OrganizationResponse();
        }

        private OrganizationResponse AddToSolution(AddSolutionComponentRequest request)
        {
            SolutionRequests.Add(request);
            return new AddSolutionComponentResponse();
        }

        private OrganizationResponse CreateOneToMany(CreateOneToManyRequest request)
        {
            LookupRequests.Add(request);
            return CreateLookup(request.Lookup,
                new[] { request.OneToManyRelationship.ReferencedEntity },
                request.OneToManyRelationship.ReferencingEntity,
                new CreateOneToManyResponse());
        }

        private OrganizationResponse CreatePolymorphic(OrganizationRequest request)
        {
            var lookup = (LookupAttributeMetadata)request["Lookup"];
            var relationships = (OneToManyRelationshipMetadata[])request["OneToManyRelationships"];
            return CreateLookup(lookup,
                relationships.Select(rel => rel.ReferencedEntity).ToArray(),
                relationships.First().ReferencingEntity,
                new OrganizationResponse());
        }

        private OrganizationResponse CreateLookup(AttributeMetadata lookupAttribute, string[] targets, string referencingEntity, OrganizationResponse response)
        {
            var lookup = (LookupAttributeMetadata)lookupAttribute;
            lookup.MetadataId = Guid.NewGuid();
            lookup.Targets = targets;
            AttachToEntity(referencingEntity, lookup);
            CreatedAttributes.Add(lookup);
            response.Results["AttributeId"] = lookup.MetadataId;
            return response;
        }

        private OrganizationResponse OptionMutation(OrganizationRequest request)
        {
            OptionRequests.Add(request);
            switch (request)
            {
                case InsertOptionValueRequest insert:
                    var insertResponse = new InsertOptionValueResponse();
                    insertResponse.Results["NewOptionValue"] = insert.Value ?? 100000000;
                    return insertResponse;
                case InsertStatusValueRequest status:
                    var statusResponse = new InsertStatusValueResponse();
                    statusResponse.Results["NewOptionValue"] = status.Value ?? 100000000;
                    return statusResponse;
                default:
                    return new OrganizationResponse();
            }
        }

        private void AttachToEntity(string entityName, AttributeMetadata attribute)
        {
            var entity = Entities.FirstOrDefault(e =>
                string.Equals(e.LogicalName, entityName, StringComparison.OrdinalIgnoreCase));
            if (entity != null)
                Set(entity, "Attributes", (entity.Attributes ?? Array.Empty<AttributeMetadata>()).Concat(new[] { attribute }).ToArray());
        }
    }
}
