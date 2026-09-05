using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// FakeXrmEasy-driven coverage for <see cref="ManageColumnTool"/> create/update paths:
/// built-in CRUD pipeline answers solution/publisher/organization record queries,
/// fake message executors answer metadata requests (RetrieveEntity/RetrieveAllEntities/
/// RetrieveAttribute/CreateAttribute/UpdateAttribute/PublishXml).
/// </summary>
[TestClass]
public sealed class ManageColumnFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _context = null!;
    private FakeMetadataExecutors _metadata = null!;

    [TestInitialize]
    public void Setup()
    {
        _metadata = new FakeMetadataExecutors();
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(_metadata)
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        // Organization record for McpHelper.GetBaseLanguageCode
        _context.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });

        // Publisher + solution resolvable by SolutionResolverHelper (QueryExpression over records)
        var pubId = Guid.NewGuid();
        _context.GetOrganizationService().Create(new Entity("publisher", pubId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        });
        _context.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", pubId)
        });

        // Entity metadata for ResolveEntityName / ResolveAttribute
        _metadata.Entities.Add(EntityMeta("account", "Account", Attr("name", "Account Name", StringAttr())));
        _metadata.Entities.Add(EntityMeta("contact", "Contact", Attr("fullname", "Full Name", StringAttr())));
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private ManageColumnTool NewTool(bool dryRun = false) =>
        new(new MetadataOrgService(_context.GetOrganizationService(), _metadata),
            new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false), null!);

    private static EntityMetadata EntityMeta(string logical, string display, params AttributeMetadata[] attrs)
    {
        var meta = new EntityMetadata
        {
            LogicalName = logical,
            SchemaName = logical,
            DisplayName = Labeled(display),
            MetadataId = Guid.NewGuid()
        };
        typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(meta, attrs);
        return meta;
    }

    private static AttributeMetadata Attr(string logical, string display, AttributeMetadata typed)
    {
        typed.LogicalName = logical;
        typed.SchemaName = logical;
        typed.DisplayName = Labeled(display);
        typed.MetadataId = Guid.NewGuid();
        return typed;
    }

    /// <summary>Label with UserLocalizedLabel populated (server round-trip normally does this).</summary>
    private static Label Labeled(string text) => new(text, 1033)
    {
        UserLocalizedLabel = new LocalizedLabel(text, 1033)
    };

    /// <summary>Reads the label the way the tool formats it (UserLocalizedLabel or first localized).</summary>
    private static string LabelText(Label label) =>
        label?.UserLocalizedLabel?.Label ?? label?.LocalizedLabels?.FirstOrDefault()?.Label ?? "";

    private static StringAttributeMetadata StringAttr() => new();

    /// <summary>Created attributes recorded by the fake CreateAttribute executor.</summary>
    private IReadOnlyList<AttributeMetadata> CreatedAttributes => _metadata.Created;

    // ──────────────────────────────────────────────
    // create — every attribute type
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_String_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Text", description: "d", max_length: 250, format: "Email",
            solution_name: "DevKit", required_level: "Recommended");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("dev_devtext", attr.LogicalName);
        Assert.AreEqual(250, attr.MaxLength);
        Assert.AreEqual<StringFormatName?>(StringFormatName.Email, attr.FormatName);
        Assert.AreEqual(AttributeRequiredLevel.Recommended, attr.RequiredLevel?.Value);
        StringAssert.Contains(result.GetText(), "Created String column");
    }

    [TestMethod]
    public void Create_StringDefaults_Applied()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Plain", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual(100, attr.MaxLength); // default
        Assert.AreEqual<StringFormatName?>(StringFormatName.Text, attr.FormatName); // default
    }

    [TestMethod]
    public void Create_StringInvalidFormat_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Bad", format: "Bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Valid values:");
    }

    [TestMethod]
    public void Create_Memo_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "memo",
            display_name: "Dev Notes", max_length: 5000, format: "RichText", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<MemoAttributeMetadata>().Single();
        Assert.AreEqual(5000, attr.MaxLength);
        Assert.AreEqual(MemoFormatName.RichText, attr.FormatName?.Value);
    }

    [TestMethod]
    public void Create_MemoInvalidFormat_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "memo",
            display_name: "Dev Bad", format: "Email");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Valid values:");
    }

    [TestMethod]
    public void Create_Integer_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "integer",
            display_name: "Dev Count", min_value: -5, max_value: 500, format: "Duration", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<IntegerAttributeMetadata>().Single();
        Assert.AreEqual(-5, attr.MinValue);
        Assert.AreEqual(500, attr.MaxValue);
        Assert.AreEqual<IntegerFormat?>(IntegerFormat.Duration, attr.Format);
    }

    [TestMethod]
    public void Create_IntegerInvalidFormat_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "integer",
            display_name: "Dev Bad", format: "Nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Valid values:");
    }

    [TestMethod]
    public void Create_BigInt_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "bigint",
            display_name: "Dev Big", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        Assert.IsInstanceOfType(CreatedAttributes.Single(), typeof(BigIntAttributeMetadata));
    }

    [TestMethod]
    public void Create_Decimal_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "decimal",
            display_name: "Dev Dec", min_value: 0, max_value: 100, precision: 4, solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<DecimalAttributeMetadata>().Single();
        Assert.AreEqual(4, attr.Precision);
    }

    [TestMethod]
    public void Create_DecimalInvalidPrecision_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "decimal",
            display_name: "Dev Bad", precision: 11);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create_Money_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Dev Cash", precision: 2, min_value: 0, solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        Assert.IsInstanceOfType(CreatedAttributes.Single(), typeof(MoneyAttributeMetadata));
    }

    [TestMethod]
    public void Create_MoneyInvalidPrecision_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "money",
            display_name: "Dev Bad", precision: 5);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create_Float_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "float",
            display_name: "Dev Rate", min_value: 0, max_value: 1, precision: 3, solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<DoubleAttributeMetadata>().Single();
        Assert.AreEqual(3, attr.Precision);
    }

    [TestMethod]
    public void Create_Boolean_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "boolean",
            display_name: "Dev Flag", default_value: "true", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<BooleanAttributeMetadata>().Single();
        Assert.IsTrue(attr.DefaultValue ?? false);
        Assert.AreEqual("Yes", LabelText(attr.OptionSet.TrueOption.Label));
    }

    [TestMethod]
    public void Create_BooleanCustomLabels_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "boolean",
            display_name: "Dev Switch", true_label: "On", false_label: "Off", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<BooleanAttributeMetadata>().Single();
        Assert.AreEqual("On", LabelText(attr.OptionSet.TrueOption.Label));
        Assert.AreEqual("Off", LabelText(attr.OptionSet.FalseOption.Label));
    }

    [TestMethod]
    public void Create_DateTime_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "datetime",
            display_name: "Dev When", format: "DateOnly", behavior: "DateOnly", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<DateTimeAttributeMetadata>().Single();
        Assert.AreEqual<DateTimeFormat?>(DateTimeFormat.DateOnly, attr.Format);
        Assert.AreEqual<DateTimeBehavior?>(DateTimeBehavior.DateOnly, attr.DateTimeBehavior);
    }

    [TestMethod]
    public void Create_DateTimeInvalidBehavior_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "datetime",
            display_name: "Dev Bad", behavior: "Bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Valid values:");
    }

    [TestMethod]
    public void Create_Lookup_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "lookup",
            display_name: "Dev Ref", lookup_target: "contact", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<LookupAttributeMetadata>().Single();
        Assert.AreEqual("contact", attr.Targets.Single());
    }

    [TestMethod]
    public void Create_Customer_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "customer",
            display_name: "Dev Cust", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<LookupAttributeMetadata>().Single();
        CollectionAssert.AreEquivalent(new[] { "account", "contact" }, attr.Targets.ToList());
    }

    [TestMethod]
    public void Create_Picklist_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Dev Pick", options: "[{\"label\":\"Low\",\"value\":100000000},{\"label\":\"Medium\",\"value\":100000001},{\"label\":\"High\",\"value\":100000002}]",
            solution_name: "DevKit", default_value: "100000001");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<PicklistAttributeMetadata>().Single();
        Assert.AreEqual(3, attr.OptionSet.Options.Count);
        Assert.AreEqual<int?>(100000001, attr.DefaultFormValue);
        Assert.AreEqual("Medium", LabelText(attr.OptionSet.Options.First(o => o.Value == 100000001).Label));
    }

    [TestMethod]
    public void Create_MultiPicklist_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "multipicklist",
            display_name: "Dev Multi", options: "[{\"label\":\"A\",\"value\":0},{\"label\":\"B\",\"value\":1},{\"label\":\"C\",\"value\":2}]", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        var attr = CreatedAttributes.OfType<MultiSelectPicklistAttributeMetadata>().Single();
        Assert.AreEqual(3, attr.OptionSet.Options.Count);
    }

    [TestMethod]
    public void Create_PicklistMissingOptions_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "picklist",
            display_name: "Dev Bad");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create_Image_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "image",
            display_name: "Dev Img", max_length: 5120, solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        Assert.IsInstanceOfType(CreatedAttributes.Single(), typeof(ImageAttributeMetadata));
    }

    [TestMethod]
    public void Create_File_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "file",
            display_name: "Dev File", max_length: 4096, solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        Assert.IsInstanceOfType(CreatedAttributes.Single(), typeof(FileAttributeMetadata));
    }

    [TestMethod]
    public void Create_UnknownType_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "hologram",
            display_name: "Dev Holo");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Unknown attribute_type");
    }

    [TestMethod]
    public void Create_EntityNotFound_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "nothere", attribute_type: "string",
            display_name: "Dev X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void Create_SolutionNotFound_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev X", solution_name: "Ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Use get_solution_components");
    }

    [TestMethod]
    public void Create_MissingDisplayName_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create_InvalidRequiredLevel_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev X", required_level: "Sometimes");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid required_level");
    }

    [TestMethod]
    public void Create_DryRun_PreviewsWithoutMutation()
    {
        var result = NewTool(dryRun: true).manage_column(entity_name: "account", attribute_type: "string",
            display_name: "Dev Dry", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Would CREATE");
        Assert.AreEqual(0, CreatedAttributes.Count); // no CreateAttribute executed
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_DisplayName_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            display_name: "Renamed Name");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Updated");
    }

    [TestMethod]
    public void Update_RequiredLevel_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            required_level: "Required");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
    }

    [TestMethod]
    public void Update_Description_RunsEndToEnd()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "name",
            description: "New description");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
    }

    [TestMethod]
    public void Update_ByDisplayName_ResolvesAttribute()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "Account Name",
            display_name: "Renamed");
        Assert.IsFalse(result.IsError == true, "unexpected: " + result.GetText());
    }

    [TestMethod]
    public void Update_NotFound_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "ghost_col",
            display_name: "X");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Update_AttributeNotFoundNoCreateFields_ReturnsError()
    {
        var result = NewTool().manage_column(entity_name: "account", logical_name: "ghost_col");
        Assert.IsTrue(result.IsError == true);
    }
}
