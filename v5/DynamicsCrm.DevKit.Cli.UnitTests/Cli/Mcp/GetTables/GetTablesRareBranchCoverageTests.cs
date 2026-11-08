using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetTables;

/// <summary>
/// Rare-branch coverage for <see cref="GetTablesTool"/> attribute building:
/// SourceType 0 and unmapped values, the formula-reference guard for
/// attributes without a logical name, Status/State option-set attributes,
/// and Customer lookups identified via AttributeTypeName.
/// </summary>
[TestClass]
public sealed class GetTablesRareBranchCoverageTests
{
    [TestMethod]
    public async Task Detail_Full_MapsSourceTypeZeroAndUnknownValues()
    {
        using var harness = new MetadataHarness();
        var simple = TestMetadata.String("gt_simple", "Simple");
        TestMetadata.Set(simple, nameof(AttributeMetadata.SourceType), (int?)0);
        var unknown = TestMetadata.String("gt_unknown", "Unknown");
        TestMetadata.Set(unknown, nameof(AttributeMetadata.SourceType), (int?)99);
        var noNameFormula = NoNameFormulaAttribute();
        harness.Entities.Add(TestMetadata.Entity("gt_probe", "Probe", simple, unknown, noNameFormula));

        var attrs = await GetAttributesAsync(harness, "gt_probe", "full");

        Assert.AreEqual("Simple", Attr(attrs, "gt_simple").GetProperty("sourceType").GetString());
        Assert.AreEqual("SourceType99", Attr(attrs, "gt_unknown").GetProperty("sourceType").GetString());
        Assert.IsFalse(Attr(attrs, "").TryGetProperty("formulaDefinition", out _),
            "an attribute without a logical name cannot get a formula reference");
    }

    [TestMethod]
    public async Task Detail_Full_FormatsStatusAndStateOptionSets()
    {
        using var harness = new MetadataHarness();
        var status = TypedOptionSetAttribute<StatusAttributeMetadata>("gt_statuscode", "Status Reason", "Status",
            (1, "Active"), (2, "Done"));
        var state = TypedOptionSetAttribute<StateAttributeMetadata>("gt_statecode", "Status", "State",
            (0, "Open"), (1, "Closed"));
        harness.Entities.Add(TestMetadata.Entity("gt_probe2", "Probe Two", status, state));

        var attrs = await GetAttributesAsync(harness, "gt_probe2", "full");

        var statusEntry = Attr(attrs, "gt_statuscode");
        Assert.AreEqual("Status", statusEntry.GetProperty("type").GetString());
        Assert.AreEqual(2, statusEntry.GetProperty("options").GetArrayLength());

        var stateEntry = Attr(attrs, "gt_statecode");
        Assert.AreEqual("State", stateEntry.GetProperty("type").GetString());
        Assert.AreEqual(2, stateEntry.GetProperty("options").GetArrayLength());
    }

    [TestMethod]
    public async Task Detail_Full_IdentifiesCustomerLookupByAttributeTypeName()
    {
        using var harness = new MetadataHarness();
        var customer = TestMetadata.Lookup("gt_customerid", "Customer", "account", "contact");
        var typeName = new AttributeTypeDisplayName();
        TestMetadata.Set(typeName, "Value", "CustomerType");
        TestMetadata.Set(customer, nameof(AttributeMetadata.AttributeTypeName), typeName);
        harness.Entities.Add(TestMetadata.Entity("gt_probe3", "Probe Three", customer));

        var attrs = await GetAttributesAsync(harness, "gt_probe3", "full");

        Assert.AreEqual("Customer", Attr(attrs, "gt_customerid").GetProperty("type").GetString());
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private static StringAttributeMetadata NoNameFormulaAttribute()
    {
        var attr = new StringAttributeMetadata { LogicalName = "", SchemaName = "" };
        TestMetadata.Set(attr, nameof(AttributeMetadata.AttributeType), (AttributeTypeCode?)AttributeTypeCode.String);
        TestMetadata.Set(attr, nameof(AttributeMetadata.SourceType), (int?)1);
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsLogical), (bool?)false);
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsValidForCreate), (bool?)true);
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsValidForUpdate), (bool?)true);
        TestMetadata.Set(attr, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());
        return attr;
    }

    private static T TypedOptionSetAttribute<T>(string logicalName, string displayName, string typeCodeName,
        params (int value, string label)[] options)
        where T : EnumAttributeMetadata, new()
    {
        var attr = new T { OptionSet = BuildOptionSet(options) };
        TestMetadata.Set(attr, nameof(AttributeMetadata.LogicalName), logicalName);
        TestMetadata.Set(attr, nameof(AttributeMetadata.SchemaName),
            char.ToUpperInvariant(logicalName[0]) + logicalName[1..]);
        TestMetadata.Set(attr, nameof(AttributeMetadata.AttributeType),
            (AttributeTypeCode?)Enum.Parse(typeof(AttributeTypeCode), typeCodeName));
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsLogical), (bool?)false);
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsValidForCreate), (bool?)true);
        TestMetadata.Set(attr, nameof(AttributeMetadata.IsValidForUpdate), (bool?)true);
        TestMetadata.Set(attr, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());
        TestMetadata.Set(attr, nameof(AttributeMetadata.DisplayName), TestMetadata.Lbl(displayName));
        return attr;
    }

    private static OptionSetMetadata BuildOptionSet((int value, string label)[] options)
    {
        var optionSet = new OptionSetMetadata { IsGlobal = false, OptionSetType = OptionSetType.Status };
        foreach (var (value, label) in options)
            optionSet.Options.Add(new OptionMetadata(TestMetadata.Lbl(label), value));
        return optionSet;
    }

    private static async Task<List<JsonElement>> GetAttributesAsync(MetadataHarness harness, string entityName, string detailLevel)
    {
        var result = await harness.NewTool().get_tables(entity_name: entityName, detail_level: detailLevel);
        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = harness.Structured(result);
        return json.GetProperty("table").GetProperty("attributes").EnumerateArray().ToList();
    }

    private static JsonElement Attr(List<JsonElement> attrs, string logicalName) =>
        attrs.Single(a => a.GetProperty("logicalName").GetString() == logicalName);

    /// <summary>FakeSdkClient serving entity metadata to a real MetadataService.</summary>
    private sealed class MetadataHarness : IDisposable
    {
        public FakeSdkClient Fake { get; } = new();
        public List<EntityMetadata> Entities { get; } = new();

        public MetadataHarness()
        {
            Fake.OnExecute = request => request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = Entities.ToArray() }
                },
                RetrieveEntityRequest r => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = Entities.FirstOrDefault(e =>
                            string.Equals(e.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase))
                        ?? throw new InvalidOperationException($"Unknown entity '{r.LogicalName}'") }
                },
                _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
            };
        }

        public GetTablesTool NewTool() => new(new MetadataService(Fake.Client));

        public JsonElement Structured(CallToolResult result) =>
            JsonSerializer.Deserialize<JsonElement>(result.StructuredContent!.Value.GetRawText());

        public void Dispose() => Fake.Dispose();
    }
}
