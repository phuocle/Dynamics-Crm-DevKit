using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GenerateDemoData;

/// <summary>
/// generate_demo_data on a FakeSdkClient: validation branches, metadata
/// driven fake-data generation, lookup pools, and field overrides.
/// </summary>
[TestClass]
public sealed class GenerateDemoDataFakeSdkCoverageTests
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

    private void SeedAccount()
    {
        _entities.Add(TestMetadata.Entity("gdd_acc", "Gdd Acc",
            TestMetadata.String("name", "Name"),
            TestMetadata.Integer("numberofemployees", "Employees"),
            TestMetadata.Money("revenue", "Revenue"),
            TestMetadata.Boolean("creditonhold", "Credit Hold"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact")));
    }

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    [TestMethod]
    public async Task Validation_Errors()
    {
        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());

        var noEntity = await tool.generate_demo_data(null!);
        Assert.IsTrue(noEntity.IsError == true);
        StringAssert.Contains(noEntity.GetText(), "entity_name is required");

        var noDates = await tool.generate_demo_data(null!, entity_name: "gdd_acc");
        Assert.IsTrue(noDates.IsError == true);
        StringAssert.Contains(noDates.GetText(), "from_date and to_date are required");

        var badDates = await tool.generate_demo_data(null!, entity_name: "gdd_acc", from_date: "not-a-date", to_date: "2026-04-30");
        Assert.IsTrue(badDates.IsError == true);

        var inverted = await tool.generate_demo_data(null!, entity_name: "gdd_acc", from_date: "2026-04-30", to_date: "2026-01-01");
        Assert.IsTrue(inverted.IsError == true);
        StringAssert.Contains(inverted.GetText(), "must be >=");

        var tooMany = await tool.generate_demo_data(null!, entity_name: "gdd_acc", from_date: "2026-01-01", to_date: "2026-04-30", count: 501);
        Assert.IsTrue(tooMany.IsError == true);
        StringAssert.Contains(tooMany.GetText(), "exceeds maximum");
    }

    [TestMethod]
    public async Task Generate_WithLookupPool_AndOverrides_ProducesRecords()
    {
        SeedAccount();
        _lookupPool.Add(new Entity("contact", Guid.NewGuid()));
        _lookupPool.Add(new Entity("contact", Guid.NewGuid()));

        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());
        var result = await tool.generate_demo_data(
            null!,
            entity_name: "gdd_acc",
            from_date: "2026-01-01",
            to_date: "2026-04-30",
            count: 3,
            seed: 42,
            field_overrides: """[{"logicalname":"name","operator":"eq","values":["Contoso"]}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual(3, json.GetProperty("count").GetInt32());
        Assert.IsTrue(json.TryGetProperty("filePath", out _) || json.GetRawText().Contains("file"), "result points at the generated file: " + json.GetRawText());
    }

    [TestMethod]
    public async Task Generate_BadOverrideOperator_ReturnsError()
    {
        SeedAccount();

        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());
        var result = await tool.generate_demo_data(
            null!,
            entity_name: "gdd_acc",
            from_date: "2026-01-01",
            to_date: "2026-04-30",
            field_overrides: """[{"logicalname":"name","operator":"frobnicate","values":["X"]}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "unsupported operator");
    }

    [TestMethod]
    public async Task Generate_EmptyLookupPool_WarnsAndSkips()
    {
        SeedAccount();

        var tool = new GenerateDemoDataTool(_fake.Client, new McpDryRunOptions());
        var result = await tool.generate_demo_data(
            null!, entity_name: "gdd_acc", from_date: "2026-01-01", to_date: "2026-04-30", count: 2, seed: 7);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        var warnings = json.GetProperty("warnings").EnumerateArray().Select(w => w.GetString()!).ToList();
        Assert.IsTrue(warnings.Any(w => w.Contains("no active records")), string.Join("|", warnings));
    }
}
