using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using ModelContextProtocol.Protocol;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetTables;

/// <summary>
/// get_tables list + detail modes through a real MetadataService backed by a
/// FakeSdkClient: detail tiers (compact/standard/full), auxiliary-field
/// dropping, attribute filters, relationship/key tables, and the
/// not-found/ambiguous resolution branches.
/// </summary>
[TestClass]
public sealed class GetTablesFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<EntityMetadata> _entities = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities = new List<EntityMetadata>();
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _entities.ToArray() }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _entities.FirstOrDefault(e => e.LogicalName == r.LogicalName)
                    ?? throw new InvalidOperationException($"Unknown entity '{r.LogicalName}'") }
            },
            _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
        };
    }

    public void Dispose() => _fake.Dispose();

    private GetTablesTool NewTool() => new(new MetadataService(_fake.Client));

    private static void Set<T>(T attr, string property, object? value) where T : AttributeMetadata
    {
        typeof(AttributeMetadata).GetProperty(property)!.SetValue(attr, value);
    }

    private EntityMetadata BuildAccount()
    {
        var attributes = new List<AttributeMetadata>
        {
            TestMetadata.String("name", "Name"),
            TestMetadata.Money("revenue", "Revenue"),
            TestMetadata.Money("revenue_base", null),          // auxiliary of revenue → dropped
            TestMetadata.Decimal("new_rollup", "Rollup"),
            TestMetadata.DateTime("new_rollup_date", null),    // auxiliary of new_rollup → dropped
            TestMetadata.Integer("new_state_state", null),     // auxiliary of new_state → dropped
            TestMetadata.Integer("new_state", "State Field"),
            TestMetadata.String("new_virtual", "Virtual"),
            TestMetadata.String("new_this_is_base", "Custom Base Suffix"), // NOT auxiliary (no parent)
            TestMetadata.Picklist("industrycode", "Industry", (1, "Accounting")),
            TestMetadata.Lookup("parentaccountid", "Parent"),
            TestMetadata.Memo("description", "Description")
        };
        Set(attributes[7], "AttributeOf", "parentaccountid"); // virtual → skipped
        Set(attributes[1], "SourceType", (int?)1);            // calculated
        Set(attributes[3], "SourceType", (int?)2);            // rollup
        Set(attributes[6], "SourceType", (int?)3);            // power fx

        var meta = TestMetadata.Entity("all_acc", "All Acc", attributes.ToArray());

        var oneToMany = new OneToManyRelationshipMetadata();
        typeof(OneToManyRelationshipMetadata).GetProperty("ReferencingEntity")!.SetValue(oneToMany, "all_child");
        typeof(OneToManyRelationshipMetadata).GetProperty("ReferencedEntity")!.SetValue(oneToMany, "all_acc");
        typeof(OneToManyRelationshipMetadata).GetProperty("SchemaName")!.SetValue(oneToMany, "all_acc_all_child");
        typeof(EntityMetadata).GetProperty("OneToManyRelationships")!.SetValue(meta, new[] { oneToMany });

        var manyToOne = new OneToManyRelationshipMetadata();
        typeof(OneToManyRelationshipMetadata).GetProperty("ReferencingEntity")!.SetValue(manyToOne, "all_acc");
        typeof(OneToManyRelationshipMetadata).GetProperty("ReferencedEntity")!.SetValue(manyToOne, "all_owner");
        typeof(OneToManyRelationshipMetadata).GetProperty("SchemaName")!.SetValue(manyToOne, "all_owner_all_acc");
        typeof(EntityMetadata).GetProperty("ManyToOneRelationships")!.SetValue(meta, new[] { manyToOne });

        var manyToMany = new ManyToManyRelationshipMetadata();
        typeof(ManyToManyRelationshipMetadata).GetProperty("SchemaName")!.SetValue(manyToMany, "all_a_b");
        typeof(ManyToManyRelationshipMetadata).GetProperty("Entity1LogicalName")!.SetValue(manyToMany, "all_acc");
        typeof(ManyToManyRelationshipMetadata).GetProperty("Entity2LogicalName")!.SetValue(manyToMany, "all_b");
        typeof(ManyToManyRelationshipMetadata).GetProperty("IntersectEntityName")!.SetValue(manyToMany, "all_acc_b");
        typeof(EntityMetadata).GetProperty("ManyToManyRelationships")!.SetValue(meta, new[] { manyToMany });

        var key = new EntityKeyMetadata();
        typeof(EntityKeyMetadata).GetProperty("SchemaName")!.SetValue(key, "all_acc_key");
        typeof(EntityMetadata).GetProperty("Keys")!.SetValue(meta, new[] { key });

        return meta;
    }

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    [TestMethod]
    public async Task Detail_Full_IncludesRelationshipsKeysAndSourceTypes()
    {
        _entities.Add(BuildAccount());

        var result = await NewTool().get_tables(entity_name: "all_acc", detail_level: "full");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        var table = json.GetProperty("table");
        Assert.AreEqual("all_acc", table.GetProperty("logicalName").GetString());

        var attrNames = table.GetProperty("attributes").EnumerateArray()
            .Select(a => a.GetProperty("logicalName").GetString()!).ToList();
        Assert.IsTrue(attrNames.Contains("revenue"), "parent money field kept");
        Assert.IsFalse(attrNames.Contains("revenue_base"), "auxiliary _base dropped");
        Assert.IsFalse(attrNames.Contains("new_rollup_date"), "auxiliary _date dropped");
        Assert.IsFalse(attrNames.Contains("new_state_state"), "auxiliary _state dropped");
        Assert.IsTrue(attrNames.Contains("new_this_is_base"), "user field ending in _base kept");
        Assert.IsFalse(attrNames.Contains("new_virtual"), "virtual AttributeOf field skipped");

        var sourceTypes = table.GetProperty("attributes").EnumerateArray()
            .Where(a => a.TryGetProperty("sourceType", out _))
            .ToDictionary(a => a.GetProperty("logicalName").GetString()!, a => a.GetProperty("sourceType").GetString()!);
        Assert.AreEqual("Calculated", sourceTypes["revenue"]);
        Assert.AreEqual("Rollup", sourceTypes["new_rollup"]);
        Assert.AreEqual("PowerFx", sourceTypes["new_state"]);

        Assert.IsNotNull(table.GetProperty("oneToManyRelationships"));
        Assert.IsNotNull(table.GetProperty("manyToOneRelationships"));
        Assert.IsNotNull(table.GetProperty("manyToManyRelationships"));
        Assert.IsNotNull(table.GetProperty("alternateKeys"));
    }

    [TestMethod]
    public async Task Detail_Compact_StripsRelationshipsAndKeys()
    {
        _entities.Add(BuildAccount());

        var compact = await NewTool().get_tables(entity_name: "all_acc", detail_level: "compact");
        var compactTable = Structured(compact).GetProperty("table");
        Assert.IsFalse(compactTable.TryGetProperty("oneToManyRelationships", out _));
        Assert.IsFalse(compactTable.TryGetProperty("alternateKeys", out _));

        var standard = await NewTool().get_tables(entity_name: "all_acc", detail_level: "standard");
        var standardTable = Structured(standard).GetProperty("table");
        Assert.IsNotNull(standardTable.GetProperty("oneToManyRelationships"));
        Assert.IsFalse(standardTable.TryGetProperty("alternateKeys", out _));
    }

    [TestMethod]
    public async Task Detail_Filters_PrefixAndMultiValue()
    {
        _entities.Add(BuildAccount());

        var prefix = await NewTool().get_tables(entity_name: "all_acc", filter: "new_");
        var prefixNames = Structured(prefix).GetProperty("table").GetProperty("attributes").EnumerateArray()
            .Select(a => a.GetProperty("logicalName").GetString()!).ToList();
        Assert.IsTrue(prefixNames.All(n => n.StartsWith("new_")));
        Assert.IsTrue(prefixNames.Contains("new_state"));

        var multi = await NewTool().get_tables(entity_name: "all_acc", filter: "revenue,Description");
        var multiNames = Structured(multi).GetProperty("table").GetProperty("attributes").EnumerateArray()
            .Select(a => a.GetProperty("logicalName").GetString()!).ToList();
        Assert.IsTrue(multiNames.Contains("revenue"), "word-boundary logical match");
        Assert.IsTrue(multiNames.Contains("description"), "display-name exact match (case-insensitive)");
    }

    [TestMethod]
    public async Task Detail_NoMatches_ShowsSuggestionHint()
    {
        _entities.Add(BuildAccount());

        var result = await NewTool().get_tables(entity_name: "all_acc", filter: "zzz");

        var json = Structured(result);
        Assert.IsTrue(json.TryGetProperty("hint", out _), "hint present when nothing matches");
    }

    [TestMethod]
    public async Task Detail_NotFound_And_Ambiguous()
    {
        var result = await NewTool().get_tables(entity_name: "missing_entity");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "was not found");

        var shared1 = TestMetadata.Entity("all_a1", "Shared Thing", TestMetadata.String("name", "Name"));
        var shared2 = TestMetadata.Entity("all_a2", "Shared Thing", TestMetadata.String("name", "Name"));
        _entities.Add(shared1);
        _entities.Add(shared2);

        var ambiguous = await NewTool().get_tables(entity_name: "Shared Thing");
        Assert.IsTrue(ambiguous.IsError == true);
        var json = Structured(ambiguous);
        Assert.IsTrue(json.GetRawText().Contains("all_a1"), "candidate list present");
        Assert.IsTrue(json.GetRawText().Contains("tableMatches"), "tableMatches key present");
    }

    [TestMethod]
    public async Task List_Modes_NamesCustomOnlyIntersectAndClamps()
    {
        _entities.Add(TestMetadata.Entity("all_acc", "Acc", TestMetadata.String("name", "Name")));
        var intersect = TestMetadata.Entity("all_a1_a2", "Intersect", TestMetadata.String("name", "Name"));
        typeof(EntityMetadata).GetProperty("IsIntersect")!.SetValue(intersect, (bool?)true);
        _entities.Add(intersect);
        var nonCustom = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        typeof(EntityMetadata).GetProperty("IsCustomEntity")!.SetValue(nonCustom, (bool?)false);
        _entities.Add(nonCustom);

        var tool = NewTool();

        var all = await tool.get_tables();
        Assert.IsFalse(all.IsError == true, all.GetText());
        Assert.AreEqual(2, Structured(all).GetProperty("count").GetInt32(), "intersect excluded by default");

        var withIntersect = await tool.get_tables(include_intersect: true);
        Assert.AreEqual(3, Structured(withIntersect).GetProperty("count").GetInt32());

        var custom = await tool.get_tables(custom_only: true);
        Assert.AreEqual(1, Structured(custom).GetProperty("count").GetInt32());

        var byNames = await tool.get_tables(names: "account, all_acc");
        Assert.AreEqual(2, Structured(byNames).GetProperty("count").GetInt32());

        var badDetail = await tool.get_tables(detail_level: "bogus");
        Assert.IsTrue(badDetail.IsError == true);
        StringAssert.Contains(badDetail.GetText(), "is not a valid detail_level");
    }
}
