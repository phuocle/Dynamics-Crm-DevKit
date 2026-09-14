using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class MarkdownAndCompactFormatterCoverageTests
{
    private EntityMetadata CreateTestMetadata()
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))?.SetValue(meta, "new_order");
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.DisplayName))?.SetValue(meta, new Label("Order", 1033));
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.OwnershipType))?.SetValue(meta, OwnershipTypes.UserOwned);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.IsCustomEntity))?.SetValue(meta, true);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.IsActivity))?.SetValue(meta, false);

        var lookup = new LookupAttributeMetadata
        {
            LogicalName = "new_customerid",
            DisplayName = new Label("Customer", 1033),
            Targets = new[] { "account", "contact" }
        };

        var str = new StringAttributeMetadata
        {
            LogicalName = "new_name",
            DisplayName = new Label("Name", 1033),
            MaxLength = 200
        };

        var num = new IntegerAttributeMetadata
        {
            LogicalName = "new_quantity",
            DisplayName = new Label("Quantity", 1033),
            MinValue = 1,
            MaxValue = 1000
        };

        var dec = new DecimalAttributeMetadata
        {
            LogicalName = "new_discount",
            DisplayName = new Label("Discount", 1033),
            Precision = 2,
            MinValue = 0,
            MaxValue = 100
        };

        var money = new MoneyAttributeMetadata
        {
            LogicalName = "new_totalamount",
            DisplayName = new Label("Total Amount", 1033),
            Precision = 2
        };

        var standardAttr = new StringAttributeMetadata
        {
            LogicalName = "description",
            DisplayName = new Label("Description", 1033)
        };

        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))?.SetValue(
            meta, new AttributeMetadata[] { lookup, str, num, dec, money, standardAttr });

        var o2m = new OneToManyRelationshipMetadata
        {
            SchemaName = "new_order_orderlines",
            ReferencedEntity = "new_order",
            ReferencedAttribute = "new_orderid",
            ReferencingEntity = "new_orderline",
            ReferencingAttribute = "new_orderid"
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.OneToManyRelationships))?.SetValue(
            meta, new[] { o2m });

        var m2o = new OneToManyRelationshipMetadata
        {
            SchemaName = "new_account_orders",
            ReferencedEntity = "account",
            ReferencedAttribute = "accountid",
            ReferencingEntity = "new_order",
            ReferencingAttribute = "new_customerid"
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ManyToOneRelationships))?.SetValue(
            meta, new[] { m2o });

        var m2m = new ManyToManyRelationshipMetadata
        {
            SchemaName = "new_order_tags",
            Entity1LogicalName = "new_order",
            Entity2LogicalName = "new_tag",
            IntersectEntityName = "new_order_tag_intersect"
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ManyToManyRelationships))?.SetValue(
            meta, new[] { m2m });

        var key = new EntityKeyMetadata
        {
            SchemaName = "new_order_key",
            DisplayName = new Label("Order Key", 1033),
            KeyAttributes = new[] { "new_name" }
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Keys))?.SetValue(
            meta, new[] { key });

        return meta;
    }

    [TestMethod]
    public void CompactFormatter_FormatEntityDetail_FormatsAllSections()
    {
        var meta = CreateTestMetadata();

        var detailAll = CompactFormatter.FormatEntityDetail(meta, null!);
        Assert.IsTrue(detailAll.Contains("new_order"));
        Assert.IsTrue(detailAll.Contains("new_customerid"));
        Assert.IsTrue(detailAll.Contains("Polymorphic"));
        Assert.IsTrue(detailAll.Contains("new_order_orderlines"));
        Assert.IsTrue(detailAll.Contains("new_account_orders"));
        Assert.IsTrue(detailAll.Contains("new_order_tags"));
        Assert.IsTrue(detailAll.Contains("new_order_key"));

        // Prefix filter: only "new_"
        var detailPrefix = CompactFormatter.FormatEntityDetail(meta, "new_");
        Assert.IsTrue(detailPrefix.Contains("new_name"));
    }

    [TestMethod]
    public void MarkdownFormatter_FormatEntityDetail_FormatsAllSections()
    {
        var meta = CreateTestMetadata();

        var mdAll = MarkdownFormatter.FormatEntityDetail(meta, null!);
        Assert.IsTrue(mdAll.Contains("new_order"));
        Assert.IsTrue(mdAll.Contains("new_customerid"));
        Assert.IsTrue(mdAll.Contains("Polymorphic"));
        Assert.IsTrue(mdAll.Contains("new_order_orderlines"));
        Assert.IsTrue(mdAll.Contains("new_account_orders"));
        Assert.IsTrue(mdAll.Contains("new_order_tags"));
        Assert.IsTrue(mdAll.Contains("new_order_key"));

        // Prefix filter
        var mdPrefix = MarkdownFormatter.FormatEntityDetail(meta, "new_");
        Assert.IsTrue(mdPrefix.Contains("new_name"));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_BothFormatters()
    {
        var meta = CreateTestMetadata();
        var list = new List<EntityMetadata> { meta };

        var compact = CompactFormatter.FormatEntitySummaryTable(list);
        Assert.IsTrue(compact.Contains("new_order"));
        Assert.IsTrue(compact.Contains("[Entities] 1 total"));

        var md = MarkdownFormatter.FormatEntitySummaryTable(list);
        Assert.IsTrue(md.Contains("new_order"));
        Assert.IsTrue(md.Contains("# Entities — 1"));
    }

    [TestMethod]
    public void FormatMessages_BothFormatters()
    {
        var sdk = new[] { "Create", "Update", "Delete" };
        var actions = new[] { "new_CustomAction1" };
        var apis = new[] { "new_CustomApi1" };

        var compact = CompactFormatter.FormatMessages("Order", sdk, actions);
        Assert.IsTrue(compact.Contains("Messages for Order"));
        Assert.IsTrue(compact.Contains("Create"));
        Assert.IsTrue(compact.Contains("new_CustomAction1"));

        var md = MarkdownFormatter.FormatMessages("Order", sdk, actions, apis);
        Assert.IsTrue(md.Contains("Order"));
        Assert.IsTrue(md.Contains("Create"));
        Assert.IsTrue(md.Contains("new_CustomAction1"));
        Assert.IsTrue(md.Contains("new_CustomApi1"));
    }
}
