using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class MarkdownFormatterCoverageTests
{
    private static EntityMetadata MakeEntity(string name, bool isCustom = true, bool isActivity = false)
    {
        var meta = new EntityMetadata
        {
            LogicalName = name,
            DisplayName = new Label(name + "_display", 1033),
            OwnershipType = OwnershipTypes.UserOwned,
            IsActivity = isActivity,
            SchemaName = "schema_" + name,
            EntitySetName = name + "s",
            LogicalCollectionName = name + "set"
        };
        SetLabel(meta.DisplayName, name + "_display");
        var t = typeof(EntityMetadata);
        t.GetProperty("IsCustomEntity")!.SetValue(meta, isCustom);
        t.GetProperty("Attributes")!.SetValue(meta, new AttributeMetadata[0]);
        t.GetProperty("OneToManyRelationships")!.SetValue(meta, new OneToManyRelationshipMetadata[0]);
        t.GetProperty("ManyToOneRelationships")!.SetValue(meta, new OneToManyRelationshipMetadata[0]);
        t.GetProperty("ManyToManyRelationships")!.SetValue(meta, new ManyToManyRelationshipMetadata[0]);
        t.GetProperty("Keys")!.SetValue(meta, new EntityKeyMetadata[0]);
        return meta;
    }

    [TestMethod]
    public void FormatEntitySummaryTable_Empty()
    {
        var result = MarkdownFormatter.FormatEntitySummaryTable(new List<EntityMetadata>());
        StringAssert.Contains(result, "# Entities");
    }

    [TestMethod]
    public void FormatEntitySummaryTable_WithEntities()
    {
        var result = MarkdownFormatter.FormatEntitySummaryTable(new[] { MakeEntity("account"), MakeEntity("contact") });
        StringAssert.Contains(result, "account");
        StringAssert.Contains(result, "contact");
    }

    [TestMethod]
    public void FormatEntityDetail_Basic()
    {
        var result = MarkdownFormatter.FormatEntityDetail(MakeEntity("account"), "");
        StringAssert.Contains(result, "# account_display");
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
        var result = MarkdownFormatter.FormatEntityDetail(entity, "new_");
        StringAssert.Contains(result, "new_field");
        Assert.IsFalse(result.Contains("name "), "Should be filtered out by prefix");
    }

    [TestMethod]
    public void FormatOptionSetList_Empty()
    {
        var result = MarkdownFormatter.FormatOptionSetList(new List<OptionSetMetadataBase>());
        StringAssert.Contains(result, "0");
    }

    [TestMethod]
    public void FormatOptionSetList_WithItems()
    {
        var osm = new OptionSetMetadata
        {
            Name = "mychoice",
            DisplayName = new Label("My Choice", 1033),
            OptionSetType = OptionSetType.Picklist
        };
        SetLabel(osm.DisplayName, "My Choice");
        var result = MarkdownFormatter.FormatOptionSetList(new OptionSetMetadataBase[] { osm });
        StringAssert.Contains(result, "mychoice");
        StringAssert.Contains(result, "My Choice");
    }

    [TestMethod]
    public void FormatOptionSetDetail_OptionSet()
    {
        var osm = new OptionSetMetadata
        {
            Name = "mychoice",
            DisplayName = new Label("My Choice", 1033),
            OptionSetType = OptionSetType.Picklist,
            Description = new Label("desc", 1033)
        };
        SetLabel(osm.DisplayName, "My Choice");
        SetLabel(osm.Description, "desc");
        osm.Options.Add(new OptionMetadata(new Label("A", 1033), null) { Value = 1 });
        osm.Options.Add(new OptionMetadata(new Label("B", 1033), null) { Value = 2 });
        SetLabel(osm.Options[0].Label, "A");
        SetLabel(osm.Options[1].Label, "B");
        var result = MarkdownFormatter.FormatOptionSetDetail(osm);
        StringAssert.Contains(result, "My Choice");
        StringAssert.Contains(result, "A");
        StringAssert.Contains(result, "B");
    }

    [TestMethod]
    public void FormatOptionSetDetail_Boolean()
    {
        var yes = new OptionMetadata(new Label("Yes", 1033), null) { Value = 1 };
        var no = new OptionMetadata(new Label("No", 1033), null) { Value = 0 };
        SetLabel(yes.Label, "Yes");
        SetLabel(no.Label, "No");
        var b = new BooleanOptionSetMetadata(yes, no)
        {
            Name = "boolset",
            DisplayName = new Label("Bool", 1033)
        };
        SetLabel(b.DisplayName, "Bool");
        var result = MarkdownFormatter.FormatOptionSetDetail(b);
        StringAssert.Contains(result, "Yes");
        StringAssert.Contains(result, "No");
    }

    private static void SetLabel(Label l, string text)
    {
        typeof(Label).GetProperty("UserLocalizedLabel")!.SetValue(l, new LocalizedLabel(text, 1033));
    }

    [TestMethod]
    public void FormatMessages_AllThree()
    {
        var result = MarkdownFormatter.FormatMessages("entity", new[] { "Create" }, new[] { "act" }, new[] { "api" });
        StringAssert.Contains(result, "Create");
        StringAssert.Contains(result, "act");
        StringAssert.Contains(result, "api");
    }

    [TestMethod]
    public void FormatMessages_OnlySdk()
    {
        var result = MarkdownFormatter.FormatMessages("entity", new[] { "Create" }, Array.Empty<string>(), Array.Empty<string>());
        StringAssert.Contains(result, "Create");
        Assert.IsFalse(result.Contains("## Custom Actions"));
        Assert.IsFalse(result.Contains("## Custom APIs"));
    }

    [TestMethod]
    public void FormatMessages_AllEmpty()
    {
        var result = MarkdownFormatter.FormatMessages("entity", Array.Empty<string>(), Array.Empty<string>(), Array.Empty<string>());
        StringAssert.Contains(result, "Messages");
    }

    [TestMethod]
    public void FormatFetchXmlResults_Empty()
    {
        var result = MarkdownFormatter.FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, false);
        StringAssert.Contains(result, "0");
    }

    [TestMethod]
    public void FormatFetchXmlResults_WithRecords()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { { "name", "a" }, { "id", "1" } },
            new() { { "name", "b" }, { "id", "2" } }
        };
        var result = MarkdownFormatter.FormatFetchXmlResults(records, 2, true);
        StringAssert.Contains(result, "name");
        StringAssert.Contains(result, "id");
        StringAssert.Contains(result, "has_more: true");
    }

    [TestMethod]
    public void FormatFetchXmlResults_HasMoreFalse()
    {
        var records = new List<Dictionary<string, string>> { new() { { "x", "y" } } };
        var result = MarkdownFormatter.FormatFetchXmlResults(records, 1, false);
        StringAssert.Contains(result, "has_more: false");
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesPipes()
    {
        var records = new List<Dictionary<string, string>> { new() { { "name", "a|b" } } };
        var result = MarkdownFormatter.FormatFetchXmlResults(records, 1, false);
        // Pipe should be escaped as \| to not break table
        StringAssert.Contains(result, "a\\|b");
    }
}
