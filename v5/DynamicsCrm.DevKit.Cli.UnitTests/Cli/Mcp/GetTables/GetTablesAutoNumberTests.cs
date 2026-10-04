using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetTables;

/// <summary>
/// get_tables exposes the autonumber pattern of string columns as
/// <c>autoNumberFormat</c> (null/omitted for plain text strings) so callers can
/// clone or change the pattern via manage_column.
/// </summary>
[TestClass]
public sealed class GetTablesAutoNumberTests
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

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    private static JsonElement AttributeEntry(JsonElement structured, string logicalName) =>
        structured.GetProperty("table").GetProperty("attributes").EnumerateArray()
            .First(a => a.GetProperty("logicalName").GetString() == logicalName);

    [TestMethod]
    public async Task Standard_AutonumberString_ExposesPattern_PlainStringOmitsKey()
    {
        var autonumber = TestMetadata.String("devkit_ticket", "Ticket");
        autonumber.AutoNumberFormat = "TKT-{SEQNUM:5}-{RANDSTRING:3}";
        var plain = TestMetadata.String("name", "Name");
        _entities.Add(TestMetadata.Entity("all_tick", "Ticks", autonumber, plain));

        var result = await NewTool().get_tables(entity_name: "all_tick", detail_level: "standard");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        var autoEntry = AttributeEntry(structured, "devkit_ticket");
        Assert.AreEqual("TKT-{SEQNUM:5}-{RANDSTRING:3}", autoEntry.GetProperty("autoNumberFormat").GetString());
        var plainEntry = AttributeEntry(structured, "name");
        Assert.IsFalse(plainEntry.TryGetProperty("autoNumberFormat", out _));
    }

    [TestMethod]
    public async Task Full_AutonumberString_ExposesPattern()
    {
        var autonumber = TestMetadata.String("devkit_code", "Code");
        autonumber.AutoNumberFormat = "CODE-{SEQNUM:6}";
        _entities.Add(TestMetadata.Entity("all_tick", "Ticks", autonumber));

        var result = await NewTool().get_tables(entity_name: "all_tick", detail_level: "full");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("CODE-{SEQNUM:6}",
            AttributeEntry(Structured(result), "devkit_code").GetProperty("autoNumberFormat").GetString());
    }

    [TestMethod]
    public async Task EmptyPattern_TreatedAsPlainString_KeyOmitted()
    {
        var empty = TestMetadata.String("devkit_blank", "Blank");
        empty.AutoNumberFormat = "";
        _entities.Add(TestMetadata.Entity("all_tick", "Ticks", empty));

        var result = await NewTool().get_tables(entity_name: "all_tick", detail_level: "standard");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsFalse(AttributeEntry(Structured(result), "devkit_blank").TryGetProperty("autoNumberFormat", out _));
    }
}
