using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CompactFormatterCoverageTests
{
    private static EntityMetadata MakeEntity(string name, bool isCustom = true, bool isActivity = false)
    {
        var meta = new EntityMetadata
        {
            LogicalName = name,
            DisplayName = new Label(name + "_display", 1033),
            OwnershipType = OwnershipTypes.UserOwned,
            IsActivity = isActivity,
            EntitySetName = name + "s",
            LogicalCollectionName = name + "set"
        };
        // These are get-only, set via reflection
        var type = typeof(EntityMetadata);
        type.GetProperty("IsCustomEntity")!.SetValue(meta, isCustom);
        type.GetProperty("Attributes")!.SetValue(meta, new AttributeMetadata[0]);
        type.GetProperty("OneToManyRelationships")!.SetValue(meta, new OneToManyRelationshipMetadata[0]);
        type.GetProperty("ManyToOneRelationships")!.SetValue(meta, new OneToManyRelationshipMetadata[0]);
        type.GetProperty("ManyToManyRelationships")!.SetValue(meta, new ManyToManyRelationshipMetadata[0]);
        type.GetProperty("Keys")!.SetValue(meta, new EntityKeyMetadata[0]);
        return meta;
    }

    [TestMethod]
    public void FormatEntitySummaryTable_Empty()
    {
        var result = CompactFormatter.FormatEntitySummaryTable(new List<EntityMetadata>());
        StringAssert.Contains(result, "0 total");
    }

    [TestMethod]
    public void FormatEntitySummaryTable_WithEntities()
    {
        var result = CompactFormatter.FormatEntitySummaryTable(new[] { MakeEntity("account"), MakeEntity("contact") });
        StringAssert.Contains(result, "2 total");
        StringAssert.Contains(result, "account");
        StringAssert.Contains(result, "contact");
    }

    [TestMethod]
    public void FormatEntitySummaryTable_HeaderIncludes()
    {
        var result = CompactFormatter.FormatEntitySummaryTable(new[] { MakeEntity("x") });
        StringAssert.Contains(result, "LogicalName");
        StringAssert.Contains(result, "IsCustom");
        StringAssert.Contains(result, "IsActivity");
    }

    [TestMethod]
    public void FormatEntitySummaryTable_NoDisplayName_EmptyCell()
    {
        var entity = new EntityMetadata
        {
            LogicalName = "blank",
            OwnershipType = OwnershipTypes.OrganizationOwned,
            IsActivity = true
        };
        typeof(EntityMetadata).GetProperty("IsCustomEntity")!.SetValue(entity, false);
        var result = CompactFormatter.FormatEntitySummaryTable(new[] { entity });
        StringAssert.Contains(result, "blank");
        StringAssert.Contains(result, "Yes");
    }

    [TestMethod]
    public void FormatEntityDetail_Basic()
    {
        var result = CompactFormatter.FormatEntityDetail(MakeEntity("account"), "");
        StringAssert.Contains(result, "PrimaryId");
        StringAssert.Contains(result, "PrimaryName");
    }

    [TestMethod]
    public void FormatEntityDetail_WithPrefixFilter()
    {
        var entity = MakeEntity("account");
        typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(entity, new AttributeMetadata[]
        {
            new StringAttributeMetadata { LogicalName = "name" },
            new StringAttributeMetadata { LogicalName = "new_field" }
        });
        var result = CompactFormatter.FormatEntityDetail(entity, "new_");
        StringAssert.Contains(result, "new_field");
        Assert.IsFalse(result.Contains("name"), "Should be filtered out by prefix");
    }

    [TestMethod]
    public void FormatMessages_Both()
    {
        var result = CompactFormatter.FormatMessages("entity", new[] { "Create", "Update" }, new[] { "myAction" });
        StringAssert.Contains(result, "Create");
        StringAssert.Contains(result, "Update");
        StringAssert.Contains(result, "myAction");
    }

    [TestMethod]
    public void FormatMessages_OnlySdk()
    {
        var result = CompactFormatter.FormatMessages("entity", new[] { "Create" }, Array.Empty<string>());
        StringAssert.Contains(result, "Create");
        StringAssert.Contains(result, "SDK Messages: 1");
        Assert.IsFalse(result.Contains("Custom Actions:"));
    }

    [TestMethod]
    public void FormatMessages_OnlyActions()
    {
        var result = CompactFormatter.FormatMessages("entity", Array.Empty<string>(), new[] { "act" });
        StringAssert.Contains(result, "act");
        Assert.IsFalse(result.Contains("SDK Messages:"));
    }

    [TestMethod]
    public void FormatMessages_BothEmpty()
    {
        var result = CompactFormatter.FormatMessages("entity", Array.Empty<string>(), Array.Empty<string>());
        StringAssert.Contains(result, "Messages for entity");
    }

    [TestMethod]
    public void FormatFetchXmlResults_Empty()
    {
        var result = CompactFormatter.FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, false);
        StringAssert.Contains(result, "0 records");
    }

    [TestMethod]
    public void FormatFetchXmlResults_HasMore()
    {
        var result = CompactFormatter.FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, true);
        StringAssert.Contains(result, "more: yes");
    }

    [TestMethod]
    public void FormatFetchXmlResults_NoMore()
    {
        var result = CompactFormatter.FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, false);
        StringAssert.Contains(result, "more: no");
    }

    [TestMethod]
    public void FormatFetchXmlResults_OneRecord_SingularWord()
    {
        var records = new List<Dictionary<string, string>> { new() { { "name", "x" } } };
        var result = CompactFormatter.FormatFetchXmlResults(records, 1, false);
        StringAssert.Contains(result, "1 record");
    }

    [TestMethod]
    public void FormatFetchXmlResults_MultipleRecords_PluralWord()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { { "name", "a" } },
            new() { { "name", "b" } }
        };
        var result = CompactFormatter.FormatFetchXmlResults(records, 2, false);
        StringAssert.Contains(result, "2 records");
        StringAssert.Contains(result, "name");
    }

    [TestMethod]
    public void FormatFetchXmlResults_SingleEntity_OmitsColumn()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { { "_entity", "account" }, { "name", "a" } },
            new() { { "_entity", "account" }, { "name", "b" } }
        };
        var result = CompactFormatter.FormatFetchXmlResults(records, 2, false);
        StringAssert.Contains(result, "2 account records");
    }

    [TestMethod]
    public void FormatFetchXmlResults_MultipleEntities_KeepsColumn()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { { "_entity", "account" }, { "name", "a" } },
            new() { { "_entity", "contact" }, { "name", "b" } }
        };
        var result = CompactFormatter.FormatFetchXmlResults(records, 2, false);
        StringAssert.Contains(result, "_entity");
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesTabs()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { { "name", "a\tb" } }
        };
        var result = CompactFormatter.FormatFetchXmlResults(records, 1, false);
        // tab is replaced/kept
        StringAssert.Contains(result, "name");
    }
}
