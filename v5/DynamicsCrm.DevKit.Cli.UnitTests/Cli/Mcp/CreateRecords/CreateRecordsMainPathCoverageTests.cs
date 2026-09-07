using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliCreateRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.CreateRecordsTool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CreateRecords;

/// <summary>
/// Coverage for the create_records public entry validation branches that are
/// reachable with a null ServiceClient (every early return before the SDK is
/// touched, plus the null-tolerant bypass role gate), and for the pure
/// input-resolution helpers (ResolveRecordsInput, ConvertCsvToJson header
/// paths, ParseCsvLine, EscapeXml) plus the ISN auto-fill and lookup-name
/// helpers, invoked via reflection.
/// </summary>
[TestClass]
public class CreateRecordsMainPathCoverageTests
{
    private static CliCreateRecordsTool NewTool(bool dryRun = false) =>
        new(null!, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    // ──────────────────────────────────────────────
    // public entry — validation + null-tolerant branches
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_BypassTrue_NullClient_RoleGateRejects()
    {
        // RoleGateHelper.IsSystemAdministrator(null) is false and
        // GetCurrentRoleNames(null) returns an empty list, so the gate error
        // branch runs fully without touching the SDK.
        var tool = NewTool();

        var result = await tool.create_records("account", "[{\"name\":\"Contoso\"}]", 1, true);

        Assert.IsTrue(result.IsError, "bypass_custom_logic=true with a null service must be rejected by the role gate.");
        var text = result.GetText();
        Assert.IsTrue(text.Contains("System Administrator"), $"Gate error should name the required role. Got: {text}");
        Assert.IsTrue(text.Contains("(no roles assigned)"), $"Gate hint should report the empty role list. Got: {text}");
    }

    [TestMethod]
    public async Task Create_ResolveEntityFails_NullClient_ReturnsGetTablesHint()
    {
        var tool = NewTool();

        var result = await tool.create_records("account", "[{\"name\":\"Contoso\"}]", 1, false);

        Assert.IsTrue(result.IsError, "Entity resolution failure must return an error.");
        var text = result.GetText();
        Assert.IsTrue(text.Contains("Failed to resolve entity 'account'"), $"Should surface the resolver failure. Got: {text}");
        Assert.IsTrue(text.Contains("Use get_tables"), $"Hint should point at get_tables. Got: {text}");
    }

    [TestMethod]
    public async Task Create_WhitespaceEntityName_ReturnsError()
    {
        var tool = NewTool();
        var result = await tool.create_records("   ", "[{}]", 1);
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(result.GetText().Contains("entity_name is required"));
    }

    [TestMethod]
    public async Task Create_WhitespaceRecordsJson_ReturnsError()
    {
        var tool = NewTool();
        var result = await tool.create_records("account", "   ", 1);
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(result.GetText().Contains("records_json is required"));
    }

    // ──────────────────────────────────────────────
    // reflection helpers
    // ──────────────────────────────────────────────

    private static object? InvokePrivate(CliCreateRecordsTool tool, string name, params object?[] args)
    {
        var method = typeof(CliCreateRecordsTool).GetMethod(name,
            BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
        Assert.IsNotNull(method, $"Private method '{name}' not found.");
        return method.Invoke(tool, args);
    }

    private static (string? json, string? format) InvokeResolveRecordsInput(
        CliCreateRecordsTool tool, string recordsJson, List<string> warnings)
    {
        var r = InvokePrivate(tool, "ResolveRecordsInput", recordsJson, "account", warnings)!;
        var type = r.GetType();
        var json = type.GetField("Item1")!.GetValue(r) as string;
        var format = type.GetField("Item2")!.GetValue(r) as string;
        return (json, format);
    }

    [TestMethod]
    public void ResolveRecordsInput_InlineJson_ReturnsInlineFormat()
    {
        var tool = NewTool();
        var warnings = new List<string>();
        var (json, format) = InvokeResolveRecordsInput(tool, "[{\"name\":\"A\"}]", warnings);
        Assert.AreEqual("inline-json", format);
        Assert.AreEqual("[{\"name\":\"A\"}]", json);
        Assert.AreEqual(0, warnings.Count);
    }

    [TestMethod]
    public void ResolveRecordsInput_InlineArrayEndingInJson_IsStillInline()
    {
        // An inline array that happens to end with ".json" must stay inline:
        // the file branch requires the input NOT to start with '['.
        var tool = NewTool();
        var (json, format) = InvokeResolveRecordsInput(tool, "[\"file.json\"]", new List<string>());
        Assert.AreEqual("inline-json", format);
        Assert.AreEqual("[\"file.json\"]", json);
    }

    [TestMethod]
    public void ResolveRecordsInput_MissingCsvFile_ReturnsNull()
    {
        var tool = NewTool();
        var (json, format) = InvokeResolveRecordsInput(tool, Path.Combine(Path.GetTempPath(), "no-such-" + Guid.NewGuid().ToString("N") + ".csv"), new List<string>());
        Assert.IsNull(json);
        Assert.AreEqual("csv", format);
    }

    [TestMethod]
    public void ResolveRecordsInput_ExistingJsonFile_ReturnsContent()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-records-" + Guid.NewGuid().ToString("N") + ".json");
        File.WriteAllText(path, "[{\"name\":\"FromFile\"}]");
        try
        {
            var tool = NewTool();
            var (json, format) = InvokeResolveRecordsInput(tool, path, new List<string>());
            Assert.AreEqual("json-file", format);
            Assert.IsTrue(json!.Contains("FromFile"));
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public void ResolveRecordsInput_MissingJsonFile_ReturnsNull()
    {
        var tool = NewTool();
        var (json, format) = InvokeResolveRecordsInput(tool, "C:\\definitely\\missing-" + Guid.NewGuid().ToString("N") + ".json", new List<string>());
        Assert.IsNull(json);
        Assert.AreEqual("json-file", format);
    }

    [TestMethod]
    public void ResolveRecordsInput_ExistingCsvWithNullClient_WarnsMetadataAndReturnsEmptyArray()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-records-" + Guid.NewGuid().ToString("N") + ".csv");
        File.WriteAllLines(path, new[] { "Name,Age", "Contoso,10" });
        try
        {
            var tool = NewTool();
            var warnings = new List<string>();
            var (json, format) = InvokeResolveRecordsInput(tool, path, warnings);
            Assert.AreEqual("csv", format);
            Assert.AreEqual("[]", json, "Null client cannot load metadata, so the CSV converts to an empty array.");
            Assert.IsTrue(warnings.Any(w => w.Contains("Failed to load metadata for entity 'account'")),
                "Expected the metadata warning. Got: " + string.Join(" | ", warnings));
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public void ConvertCsvToJson_HeaderOnly_AddsNoDataRowsWarning()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-records-" + Guid.NewGuid().ToString("N") + ".csv");
        File.WriteAllLines(path, new[] { "Name,Age", "   " });
        try
        {
            var tool = NewTool();
            var warnings = new List<string>();
            var json = InvokePrivate(tool, "ConvertCsvToJson", path, "account", warnings) as string;
            Assert.AreEqual("[]", json);
            Assert.IsTrue(warnings.Any(w => w.Contains("no data rows")),
                "Expected the no-data-rows warning. Got: " + string.Join(" | ", warnings));
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public void ConvertCsvToJson_NullClient_WarnsMetadataLoadFailure()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-records-" + Guid.NewGuid().ToString("N") + ".csv");
        File.WriteAllLines(path, new[] { "Name,Age", "Contoso,10" });
        try
        {
            var tool = NewTool();
            var warnings = new List<string>();
            var json = InvokePrivate(tool, "ConvertCsvToJson", path, "account", warnings) as string;
            Assert.AreEqual("[]", json);
            Assert.IsTrue(warnings.Any(w => w.Contains("Failed to load metadata")));
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public void ParseCsvLine_SimpleAndQuotedFields()
    {
        var parse = (string line) =>
        {
            var r = InvokePrivate(NewTool(), "ParseCsvLine", line)!;
            return (string[])r;
        };

        CollectionAssert.AreEqual(new[] { "a", "b", "c" }, parse("a,b,c"));
        CollectionAssert.AreEqual(new[] { "x,y", "z" }, parse("\"x,y\",z"));
        CollectionAssert.AreEqual(new[] { "he said \"hi\"", "b" }, parse("\"he said \"\"hi\"\"\",b"));
        CollectionAssert.AreEqual(new[] { "a", "", "c" }, parse("a,,c"));
        CollectionAssert.AreEqual(new[] { "a", "b" }, parse("\"a\",b"));
        CollectionAssert.AreEqual(new[] { "" }, parse(""));
    }

    [TestMethod]
    public void EscapeXml_EscapesAllReservedCharacters()
    {
        var r = InvokePrivate(NewTool(), "EscapeXml", "<&'>\"") as string;
        Assert.AreEqual("&lt;&amp;&apos;&gt;&quot;", r);
    }

    [TestMethod]
    public void ComputeBatchImportSequenceNumber_NullClient_ReturnsWarning()
    {
        var tool = NewTool();
        var r = InvokePrivate(tool, "ComputeBatchImportSequenceNumber", "account")!;
        var type = r.GetType();
        var value = type.GetField("Item1")!.GetValue(r);
        var warning = type.GetField("Item2")!.GetValue(r) as string;
        Assert.IsNull(value, "No metadata → no batch ISN.");
        Assert.IsTrue(warning!.Contains("Could not load metadata for 'account'"),
            "Expected the metadata warning. Got: " + warning);
    }

    [TestMethod]
    public void ApplyBatchImportSequenceNumber_FillsMissingAndKeepsExplicit()
    {
        var filled = new Entity("account");
        var explicitIsn = new Entity("account");
        explicitIsn["importsequencenumber"] = 42;
        var parsed = new (Entity entity, string error)[] { (null, "parse error"), (filled, null!), (explicitIsn, null!) };

        InvokePrivate(NewTool(), "ApplyBatchImportSequenceNumber", parsed, 999990);

        Assert.AreEqual(999990, filled["importsequencenumber"], "Missing ISN must be auto-filled.");
        Assert.AreEqual(42, explicitIsn["importsequencenumber"], "Explicit ISN must win.");
    }

    [TestMethod]
    public void ResolveLookupByName_EmptyTargets_WarnsAndSkips()
    {
        var tool = NewTool();
        var warnings = new List<string>();
        var lookup = new LookupAttributeMetadata { LogicalName = "customerid", Targets = Array.Empty<string>() };

        var r = InvokePrivate(tool, "ResolveLookupByName", lookup, "Contoso", "customerid", 3,
            new Dictionary<string, Guid?>(), warnings);

        Assert.IsNull(r, "No targets → the attribute is skipped.");
        Assert.IsTrue(warnings.Any(w => w.Contains("has no target entity")),
            "Expected the no-target warning. Got: " + string.Join(" | ", warnings));
    }

    [TestMethod]
    public void ResolveLookupByName_TargetWithoutMetadata_WarnsNotFound()
    {
        var tool = NewTool();
        var warnings = new List<string>();
        var lookup = new LookupAttributeMetadata { LogicalName = "primarycontactid", Targets = new[] { "contact" } };

        var r = InvokePrivate(tool, "ResolveLookupByName", lookup, "Nobody", "primarycontactid", 2,
            new Dictionary<string, Guid?>(), warnings);

        Assert.IsNull(r, "Null client cannot resolve names → skipped.");
        Assert.IsTrue(warnings.Any(w => w.Contains("not found or ambiguous")),
            "Expected the not-found warning. Got: " + string.Join(" | ", warnings));
    }

    [TestMethod]
    public void ResolveLookupGuid_NullClientMetadata_ReturnsNull()
    {
        var tool = NewTool();
        var r = InvokePrivate(tool, "ResolveLookupGuid", "contact", "Mary");
        Assert.IsNull(r, "LoadEntityMetadata returns null with a null client → null GUID.");
    }
}
