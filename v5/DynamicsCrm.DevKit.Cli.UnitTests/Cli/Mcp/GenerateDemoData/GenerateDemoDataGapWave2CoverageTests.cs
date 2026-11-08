using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GenerateDemoData;

/// <summary>
/// Wave-2 gap coverage for GenerateDemoDataTool end to end: the ambiguous
/// entity resolution branch, the no-valid-fields guard, the field_override
/// validation errors (missing logicalname, unsupported operator, empty
/// values, bad polymorphic syntax, unresolvable field, polymorphic syntax
/// on a non-lookup), the numeric override value conversions (int/long/
/// decimal/double), the street-address string generator branch and the
/// lookup pool metadata probe.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class GenerateDemoDataGapWave2CoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<EntityMetadata> _entities = null!;
    private List<Entity> _lookupPool = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities = new List<EntityMetadata>();
        _lookupPool = new List<Entity>();
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _entities.ToArray() }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _entities.FirstOrDefault(e => e.LogicalName == r.LogicalName)
                    ?? (object)new EntityMetadata { LogicalName = r.LogicalName } }
            },
            _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
        };
        _fake.OnRetrieveMultiple = query =>
        {
            var fetch = ((query as FetchExpression)?.Query ?? string.Empty).Replace('"', '\'');
            if (fetch.Contains("<entity name='contact'")) return new EntityCollection(_lookupPool);
            return new EntityCollection();
        };
    }

    public void Dispose() => _fake.Dispose();

    private void SeedAccounts()
    {
        _entities.Add(TestMetadata.Entity("gdd_acc1", "Gdd Acc One",
            TestMetadata.String("name", "Name")));
        _entities.Add(TestMetadata.Entity("gdd_acc2", "Gdd Acc Two",
            TestMetadata.String("name", "Name")));
    }

    private void SeedStreetEntity()
    {
        _entities.Add(TestMetadata.Entity("gdd_street", "Gdd Street",
            TestMetadata.String("address1_line1", "Street Line 1"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact")));
    }

    private static Entity Contact(Guid id) => new("contact", id) { ["fullname"] = "Contact " + id.ToString("N") };

    [TestMethod]
    public async Task Generate_AmbiguousEntityName_ReturnsMatches()
    {
        SeedAccounts();
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, entity_name: "Gdd Acc",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1);

        Assert.IsTrue(result.IsError == true);
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "gdd_acc1");
        StringAssert.Contains(json, "gdd_acc2");
    }

    [TestMethod]
    public async Task Generate_EntityWithoutFields_ReturnsNoValidFieldsError()
    {
        _entities.Add(TestMetadata.Entity("gdd_empty", "Gdd Empty"));
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, entity_name: "gdd_empty",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No valid fields found for entity 'gdd_empty'");
    }

    [TestMethod]
    public async Task Generate_OverrideValidationErrors_AreReported()
    {
        _entities.Add(TestMetadata.Entity("gdd_ovr", "Gdd Ovr",
            TestMetadata.String("name", "Name"),
            TestMetadata.Decimal("revenue", "Revenue")));
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var noLogicalName = await tool.generate_demo_data(null!, entity_name: "gdd_ovr",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1,
            field_overrides: """[{"logicalname":"","operator":"eq","values":["x"]}]""");
        Assert.IsTrue(noLogicalName.IsError == true);
        StringAssert.Contains(noLogicalName.GetText(), "each field_override must have a non-empty 'logicalname'");

        var badOperator = await tool.generate_demo_data(null!, entity_name: "gdd_ovr",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1,
            field_overrides: """[{"logicalname":"name","operator":"between","values":["x"]}]""");
        Assert.IsTrue(badOperator.IsError == true);
        StringAssert.Contains(badOperator.GetText(), "unsupported operator 'between'");

        var emptyValues = await tool.generate_demo_data(null!, entity_name: "gdd_ovr",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1,
            field_overrides: """[{"logicalname":"name","operator":"eq","values":[]}]""");
        Assert.IsTrue(emptyValues.IsError == true);
        StringAssert.Contains(emptyValues.GetText(), "must have at least one value");

        var danglingAt = await tool.generate_demo_data(null!, entity_name: "gdd_ovr",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1,
            field_overrides: """[{"logicalname":"@","operator":"eq","values":["x"]}]""");
        Assert.IsTrue(danglingAt.IsError == true);
        StringAssert.Contains(danglingAt.GetText(), "invalid polymorphic lookup syntax");

        var unresolved = await tool.generate_demo_data(null!, entity_name: "gdd_ovr",
            from_date: "2026-01-01", to_date: "2026-04-30", seed: 1,
            field_overrides: """[{"logicalname":"no_such_field","operator":"eq","values":["x"]}]""");
        Assert.IsTrue(unresolved.IsError == true);
        StringAssert.Contains(unresolved.GetText(), "could not be resolved");
    }

    [TestMethod]
    public async Task Generate_NumericOverrideValues_ConvertByJsonKind()
    {
        _entities.Add(TestMetadata.Entity("gdd_num", "Gdd Num",
            TestMetadata.String("name", "Name"),
            TestMetadata.Integer("numberofemployees", "Employees"),
            TestMetadata.Decimal("revenue", "Revenue")));
        _entities.Add(TestMetadata.Entity("gdd_big", "Gdd Big",
            TestMetadata.String("name", "Name"),
            TestMetadata.Decimal("revenue", "Revenue")));

        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());
        var result = await tool.generate_demo_data(null!, entity_name: "gdd_num",
            from_date: "2026-01-01", to_date: "2026-04-30", count: 1, seed: 7,
            field_overrides: """
            [
              {"logicalname":"numberofemployees","operator":"eq","values":[42]},
              {"logicalname":"revenue","operator":"eq","values":[123.5]}
            ]
            """);

        Assert.IsFalse(result.IsError == true, result.GetText());

        // A long value (> int.MaxValue) exercises the Int64 fallback.
        var bigResult = await tool.generate_demo_data(null!, entity_name: "gdd_big",
            from_date: "2026-01-01", to_date: "2026-04-30", count: 1, seed: 7,
            field_overrides: """[{"logicalname":"revenue","operator":"eq","values":[12345678901]}]""");
        Assert.IsFalse(bigResult.IsError == true, bigResult.GetText());

        // A double beyond the decimal range reaches the GetDouble fallback,
        // but the resulting Infinity cannot be serialized into the payload —
        // the run surfaces the serializer's InvalidArgument error.
        var doubleResult = await tool.generate_demo_data(null!, entity_name: "gdd_big",
            from_date: "2026-01-01", to_date: "2026-04-30", count: 1, seed: 7,
            field_overrides: """[{"logicalname":"revenue","operator":"eq","values":[1e400]}]""");
        Assert.IsTrue(doubleResult.IsError == true);
        StringAssert.Contains(doubleResult.GetText(), "cannot be written as valid JSON");
    }

    [TestMethod]
    public async Task Generate_StreetField_UsesStreetAddressGenerator()
    {
        SeedStreetEntity();
        _lookupPool.Add(Contact(Guid.NewGuid()));
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, entity_name: "gdd_street",
            from_date: "2026-01-01", to_date: "2026-04-30", count: 1, seed: 3,
            fields: "address1_line1");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "address1_line1");
    }

    [TestMethod]
    public async Task Generate_LookupPool_TargetMetadataLoads_WithoutStatecodeFilter()
    {
        SeedStreetEntity();
        // The contact entity metadata resolves (no statecode attribute on the
        // test double) and the pool query returns one active row — the probe
        // path completes normally instead of falling into the catch.
        _entities.Add(TestMetadata.Entity("contact", "Contact", TestMetadata.String("fullname", "Full Name")));
        _lookupPool.Add(Contact(Guid.NewGuid()));
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, entity_name: "gdd_street",
            from_date: "2026-01-01", to_date: "2026-04-30", count: 2, seed: 5);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "primarycontactid");
    }
}
