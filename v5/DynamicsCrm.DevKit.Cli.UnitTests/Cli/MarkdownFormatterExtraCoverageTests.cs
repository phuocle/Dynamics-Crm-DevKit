using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class MarkdownFormatterExtraCoverageTests
{
    private static void Set(EntityMetadata meta, string property, object value) =>
        typeof(EntityMetadata).GetProperty(property)?.SetValue(meta, value);

    /// <summary>Label whose UserLocalizedLabel is set — the 2-arg Label ctor only fills LocalizedLabels.</summary>
    private static Label Lbl(string text) => new() { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private static EntityMetadata BuildRichMetadata()
    {
        var meta = new EntityMetadata();
        Set(meta, nameof(EntityMetadata.LogicalName), "new_rich");
        Set(meta, nameof(EntityMetadata.SchemaName), "new_Rich");
        Set(meta, nameof(EntityMetadata.DisplayName), Lbl("Rich Entity"));
        Set(meta, nameof(EntityMetadata.Description), Lbl("Rich entity description"));
        Set(meta, nameof(EntityMetadata.PrimaryIdAttribute), "new_richid");
        Set(meta, nameof(EntityMetadata.EntitySetName), "new_riches");
        Set(meta, nameof(EntityMetadata.LogicalCollectionName), "new_riches");
        Set(meta, nameof(EntityMetadata.DisplayCollectionName), Lbl("Rich Entities"));
        Set(meta, nameof(EntityMetadata.ExternalName), "external_rich");
        Set(meta, nameof(EntityMetadata.OwnershipType), OwnershipTypes.OrganizationOwned);
        Set(meta, nameof(EntityMetadata.IsActivity), false);
        Set(meta, nameof(EntityMetadata.IsCustomEntity), true);
        Set(meta, nameof(EntityMetadata.IsAuditEnabled), new BooleanManagedProperty(true));
        Set(meta, nameof(EntityMetadata.ChangeTrackingEnabled), true);
        Set(meta, nameof(EntityMetadata.ObjectTypeCode), 10500);

        var picklist = new PicklistAttributeMetadata
        {
            LogicalName = "new_pick",
            DisplayName = Lbl("Pick"),
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
            IsValidForCreate = true,
            IsValidForUpdate = true,
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(
                new List<OptionMetadata>
                {
                    new() { Value = 1, Label = Lbl("First") },
                    new() { Value = 2, Label = Lbl("Second") }
                }))
        };

        var status = new StatusAttributeMetadata
        {
            LogicalName = "new_status",
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(
                new List<OptionMetadata> { new() { Value = 1, Label = Lbl("Open") } }))
        };

        var state = new StateAttributeMetadata
        {
            LogicalName = "statecode",
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(
                new List<OptionMetadata> { new() { Value = 0, Label = Lbl("Active") } }))
        };

        var multiSelect = new MultiSelectPicklistAttributeMetadata
        {
            LogicalName = "new_multi",
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(
                new List<OptionMetadata> { new() { Value = 1, Label = Lbl("Tag A") } }))
        };

        var customer = new LookupAttributeMetadata
        {
            LogicalName = "new_customer",
            Targets = new[] { "account" }
        };
        // AttributeTypeName / Value are read-only in this SDK build — reflection pattern
        // from ManageColumnAutoNumberTests.
        var customerTypeNameProperty = typeof(LookupAttributeMetadata).GetProperty(nameof(LookupAttributeMetadata.AttributeTypeName))!;
        var customerTypeName = Activator.CreateInstance(customerTypeNameProperty.PropertyType)!;
        customerTypeNameProperty.PropertyType.GetProperty("Value")!
            .SetValue(customerTypeName, "CustomerType");
        customerTypeNameProperty.SetValue(customer, customerTypeName);

        var singleLookup = new LookupAttributeMetadata
        {
            LogicalName = "new_owner",
            Targets = new[] { "systemuser" }
        };

        var emailString = new StringAttributeMetadata
        {
            LogicalName = "new_email",
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
            IsValidForCreate = true,
            MaxLength = 100,
            FormatName = StringFormatName.Email
        };

        var autoNumber = new StringAttributeMetadata
        {
            LogicalName = "new_autonumber",
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.Recommended),
            MaxLength = 20,
            AutoNumberFormat = "SEQ-{SEQNUM:5}"
        };

        var richTextFormat = new MemoFormatName();
        typeof(MemoFormatName).GetProperty(nameof(MemoFormatName.Value))!.SetValue(richTextFormat, "RichText");
        var richMemo = new MemoAttributeMetadata
        {
            LogicalName = "new_richtext",
            MaxLength = 5000,
            FormatName = richTextFormat
        };

        var plainMemo = new MemoAttributeMetadata { LogicalName = "new_memo", MaxLength = 1000 };

        var duration = new IntegerAttributeMetadata
        {
            LogicalName = "new_duration",
            MinValue = 0,
            MaxValue = 1440,
            Format = IntegerFormat.Duration
        };

        var score = new DoubleAttributeMetadata { LogicalName = "new_score", MinValue = 0, MaxValue = 1, Precision = 3 };

        var when = new DateTimeAttributeMetadata
        {
            LogicalName = "new_when",
            DateTimeBehavior = DateTimeBehavior.UserLocal,
            Format = DateTimeFormat.DateOnly
        };

        var flag = new BooleanAttributeMetadata
        {
            LogicalName = "new_flag",
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata { Value = 1, Label = Lbl("Yes") },
                new OptionMetadata { Value = 0, Label = Lbl("No") })
        };

        var image = new ImageAttributeMetadata { LogicalName = "entityimage", MaxSizeInKB = 10240 };
        typeof(ImageAttributeMetadata).GetProperty(nameof(ImageAttributeMetadata.MaxHeight))!.SetValue(image, (short)144);
        typeof(ImageAttributeMetadata).GetProperty(nameof(ImageAttributeMetadata.MaxWidth))!.SetValue(image, (short)144);

        var file = new FileAttributeMetadata { LogicalName = "new_attachment", MaxSizeInKB = 32768 };

        Set(meta, nameof(EntityMetadata.Attributes), new AttributeMetadata[]
        {
            picklist, status, state, multiSelect, customer, singleLookup, emailString, autoNumber,
            richMemo, plainMemo, duration, score, when, flag, image, file
        });

        var o2m = new OneToManyRelationshipMetadata
        {
            SchemaName = "new_rich_children",
            ReferencedEntity = "new_rich",
            ReferencedAttribute = "new_richid",
            ReferencingEntity = "new_child",
            ReferencingAttribute = "new_parentid"
        };
        Set(meta, nameof(EntityMetadata.OneToManyRelationships), new[] { o2m });

        var m2o = new OneToManyRelationshipMetadata
        {
            SchemaName = "new_account_riches",
            ReferencedEntity = "account",
            ReferencedAttribute = "accountid",
            ReferencingEntity = "new_rich",
            ReferencingAttribute = "new_accountid"
        };
        Set(meta, nameof(EntityMetadata.ManyToOneRelationships), new[] { m2o });

        var m2m = new ManyToManyRelationshipMetadata
        {
            SchemaName = "new_rich_tags",
            Entity1LogicalName = "new_rich",
            Entity2LogicalName = "new_tag",
            IntersectEntityName = "new_rich_tag_intersect"
        };
        Set(meta, nameof(EntityMetadata.ManyToManyRelationships), new[] { m2m });

        return meta;
    }

    [TestMethod]
    public void FormatEntityDetail_RendersDescriptionExternalNameAllTypesAndConstraints()
    {
        var md = MarkdownFormatter.FormatEntityDetail(BuildRichMetadata(), null!);

        StringAssert.Contains(md, "> Rich entity description");
        StringAssert.Contains(md, "| ExternalName | external_rich |");
        StringAssert.Contains(md, "| **Required** | Yes | Yes |");
        StringAssert.Contains(md, "Recommended");
        StringAssert.Contains(md, "Picklist (1=First; 2=Second)");
        StringAssert.Contains(md, "Status (1=Open)");
        StringAssert.Contains(md, "State (0=Active)");
        StringAssert.Contains(md, "MultiSelect (1=Tag A)");
        StringAssert.Contains(md, "| new_customer |  | Customer |");
        StringAssert.Contains(md, "| new_owner |  | Lookup |");
        StringAssert.Contains(md, "MaxLen=100 Email");
        StringAssert.Contains(md, "MaxLen=20 AutoNumber=SEQ-{SEQNUM:5}");
        StringAssert.Contains(md, "MaxLen=5000 RichText");
        StringAssert.Contains(md, "MaxLen=1000");
        StringAssert.Contains(md, "[0..1440] Duration");
        StringAssert.Contains(md, "[0..1] P=3");
        StringAssert.Contains(md, "UserLocal DateOnly");
        StringAssert.Contains(md, "True=Yes; False=No");
        StringAssert.Contains(md, "MaxH=144 MaxW=144 MaxKB=10240");
        StringAssert.Contains(md, "MaxKB=32768");
        StringAssert.Contains(md, "## 1:N Relationships (this entity is parent) — 1");
        StringAssert.Contains(md, "## N:1 Relationships (this entity is child) — 1");
        StringAssert.Contains(md, "## N:N Relationships — 1");
    }

    [TestMethod]
    public void FormatEntityDetail_PrefixFiltersAttributesAndRelationships()
    {
        var md = MarkdownFormatter.FormatEntityDetail(BuildRichMetadata(), "new_");

        StringAssert.Contains(md, "(filtered: new_*)");
        Assert.IsFalse(md.Contains("| statecode |"));
        StringAssert.Contains(md, "## 1:N Relationships (this entity is parent) — 1");
        Assert.IsFalse(md.Contains("## N:1 Relationships"));
        StringAssert.Contains(md, "## N:N Relationships — 1");
    }

    [TestMethod]
    public void FormatEntityDetail_PrefixWithoutMatches_RemovesRelationshipSections()
    {
        var md = MarkdownFormatter.FormatEntityDetail(BuildRichMetadata(), "zzz_");

        Assert.IsFalse(md.Contains("## 1:N Relationships"));
        Assert.IsFalse(md.Contains("## N:1 Relationships"));
        Assert.IsFalse(md.Contains("## N:N Relationships"));
        StringAssert.Contains(md, "## Attributes — 0 (filtered: zzz_*)");
    }

    [TestMethod]
    public void FormatOptionSetDetail_WithDescription_RendersDescriptionLine()
    {
        var optionSet = new OptionSetMetadata
        {
            Name = "new_colors",
            DisplayName = Lbl("Colors"),
            Description = Lbl("Color choices"),
            OptionSetType = OptionSetType.Picklist,
            IsGlobal = true,
            Options = { new OptionMetadata { Value = 1, Label = Lbl("Red") } }
        };

        var md = MarkdownFormatter.FormatOptionSetDetail(optionSet);

        StringAssert.Contains(md, "> Color choices");
        StringAssert.Contains(md, "| Red |");
    }

    [TestMethod]
    public void FormatOptionSetList_RendersRows()
    {
        var optionSet = new OptionSetMetadata
        {
            Name = "new_colors",
            DisplayName = Lbl("Colors"),
            OptionSetType = OptionSetType.Picklist,
            IsGlobal = true
        };

        var md = MarkdownFormatter.FormatOptionSetList(new[] { optionSet });

        StringAssert.Contains(md, "# Global Option Sets — 1");
        StringAssert.Contains(md, "| new_colors | Colors | Picklist | Yes |");
    }

    [TestMethod]
    public void FormatMessages_WithActionsAndApis_RendersAllGroups()
    {
        var md = MarkdownFormatter.FormatMessages("Rich Entity", new[] { "Create" }, new[] { "new_RichAction1" }, new[] { "new_RichApi1" });

        StringAssert.Contains(md, "Create");
        StringAssert.Contains(md, "new_RichAction1");
        StringAssert.Contains(md, "new_RichApi1");
    }

    [TestMethod]
    public void CompactFormatter_FormatEntityDetail_RendersDescriptionExternalNameAllTypesAndConstraints()
    {
        var compact = CompactFormatter.FormatEntityDetail(BuildRichMetadata(), null!);

        StringAssert.Contains(compact, "ExternalName: external_rich");
        StringAssert.Contains(compact, "DisplayCollectionName: Rich Entities");
        StringAssert.Contains(compact, "Required");
        StringAssert.Contains(compact, "Recommended");
        StringAssert.Contains(compact, "Picklist (1=First; 2=Second)");
        StringAssert.Contains(compact, "Status (1=Open)");
        StringAssert.Contains(compact, "State (0=Active)");
        StringAssert.Contains(compact, "MultiSelect (1=Tag A)");
        StringAssert.Contains(compact, "Image");
        StringAssert.Contains(compact, "File");
        StringAssert.Contains(compact, "Customer");
        StringAssert.Contains(compact, "Lookup");
        StringAssert.Contains(compact, "MaxLen=100 Email");
        StringAssert.Contains(compact, "MaxLen=20 AutoNumber=SEQ-{SEQNUM:5}");
        StringAssert.Contains(compact, "MaxLen=5000 RichText");
        StringAssert.Contains(compact, "[0..1440] Duration");
        StringAssert.Contains(compact, "[0..1] P=3");
        StringAssert.Contains(compact, "UserLocal DateOnly");
        StringAssert.Contains(compact, "True=Yes; False=No");
        StringAssert.Contains(compact, "MaxH=144 MaxW=144 MaxKB=10240");
        StringAssert.Contains(compact, "MaxKB=32768");
        StringAssert.Contains(compact, "[N:1 Relationships] 1 total");
        StringAssert.Contains(compact, "account\tnew_accountid\tnew_account_riches");
        StringAssert.Contains(compact, "new_tag");
    }

    [TestMethod]
    public void CompactFormatter_FormatEntityDetail_PrefixFilterExcludesNonMatching()
    {
        var compact = CompactFormatter.FormatEntityDetail(BuildRichMetadata(), "new_");

        Assert.IsFalse(compact.Contains("statecode"));
        Assert.IsFalse(compact.Contains("[N:1 Relationships]"));
        StringAssert.Contains(compact, "[1:N Relationships]");
    }

    [TestMethod]
    public void CompactFormatter_OptionsLimit_ShowsOverflowCount()
    {
        var meta = new EntityMetadata();
        Set(meta, nameof(EntityMetadata.LogicalName), "new_limited");
        var options = Enumerable.Range(1, 12)
            .Select(i => new OptionMetadata { Value = i, Label = Lbl("Opt" + i) })
            .ToList();
        var picklist = new PicklistAttributeMetadata
        {
            LogicalName = "new_many",
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(options))
        };
        Set(meta, nameof(EntityMetadata.Attributes), new AttributeMetadata[] { picklist });

        var compact = CompactFormatter.FormatEntityDetail(meta, null!);

        StringAssert.Contains(compact, "1=Opt1; 2=Opt2; 3=Opt3; 4=Opt4; 5=Opt5; 6=Opt6; 7=Opt7; 8=Opt8; 9=Opt9; 10=Opt10; +2 more");
    }
}
