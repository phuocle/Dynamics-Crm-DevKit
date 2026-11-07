using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ReadInstruction;

[TestClass]
public sealed class ReadInstructionToolTests
{
    private static Task<CallToolResult> CallAsync(string name = "") =>
        new ReadInstructionTool().read_instruction(name);

    private static JsonObject Structured(CallToolResult result) =>
        JsonSerializer.SerializeToNode(result.StructuredContent) as JsonObject
        ?? throw new AssertFailedException("StructuredContent is not a JSON object.");

    private static JsonArray EntryArray(JsonObject payload, string property) =>
        payload[property] as JsonArray
        ?? throw new AssertFailedException($"Structured content has no '{property}' array.");

    private static JsonObject Entry(JsonArray array, string uri)
    {
        var match = array.OfType<JsonObject>().FirstOrDefault(e => e["uri"]?.GetValue<string>() == uri);
        Assert.IsNotNull(match, $"Catalog has no entry for '{uri}'.");
        return match;
    }

    [TestMethod]
    public async Task Catalog_EmptyName_ReturnsNineInstructionsAndFourSchemas()
    {
        var result = await CallAsync();

        Assert.IsFalse(result.IsError ?? false);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.StartsWith(text, "[Success]");
        StringAssert.Contains(text, "9 instruction(s)");
        StringAssert.Contains(text, "4 schema(s)");

        var payload = Structured(result);
        Assert.AreEqual("catalog", payload["kind"]?.GetValue<string>());
        Assert.AreEqual(9, EntryArray(payload, "instructions").Count);
        Assert.AreEqual(4, EntryArray(payload, "schemas").Count);
    }

    [TestMethod]
    public async Task Catalog_EveryEntryCarriesNameTitleUri()
    {
        var payload = Structured(await CallAsync());
        foreach (var property in new[] { "instructions", "schemas" })
        {
            foreach (var entry in EntryArray(payload, property).OfType<JsonObject>())
            {
                Assert.IsFalse(string.IsNullOrEmpty(entry["name"]?.GetValue<string>()));
                Assert.IsFalse(string.IsNullOrEmpty(entry["title"]?.GetValue<string>()));
                Assert.IsFalse(string.IsNullOrEmpty(entry["uri"]?.GetValue<string>()));
            }
        }
    }

    [TestMethod]
    public async Task Catalog_ReferencedBy_DiscoveredFromToolDescriptions()
    {
        var payload = Structured(await CallAsync());

        var instructions = EntryArray(payload, "instructions");
        var ribbon = Entry(instructions, "docs://instructions_for_manage_ribbon");
        var ribbonRefs = ribbon["referencedBy"] as JsonArray;
        Assert.IsNotNull(ribbonRefs);
        Assert.IsTrue(ribbonRefs.Any(n => n?.GetValue<string>() == "manage_ribbon"));

        var views = Entry(instructions, "docs://instructions_for_views");
        var viewsRefs = views["referencedBy"] as JsonArray;
        Assert.IsNotNull(viewsRefs);
        Assert.IsTrue(viewsRefs.Any(n => n?.GetValue<string>() == "manage_view"));

        var schemas = EntryArray(payload, "schemas");
        var fetchxml = Entry(schemas, "schema://fetchxml");
        var fetchRefs = fetchxml["referencedBy"] as JsonArray;
        Assert.IsNotNull(fetchRefs);
        Assert.IsTrue(fetchRefs.Any(n => n?.GetValue<string>() == "execute_fetchxml"));
    }

    [TestMethod]
    public async Task Detail_ByBareName_ReturnsFullContent()
    {
        var result = await CallAsync("instructions_for_views");

        Assert.IsFalse(result.IsError ?? false);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.StartsWith(text, "[Success]");
        StringAssert.Contains(text, "instructions_for_views");
        StringAssert.Contains(text, "docs://instructions_for_views");

        var payload = Structured(result);
        Assert.AreEqual("instruction", payload["kind"]?.GetValue<string>());
        Assert.AreEqual("instructions_for_views", payload["name"]?.GetValue<string>());
        Assert.AreEqual("docs://instructions_for_views", payload["uri"]?.GetValue<string>());
        var lines = payload["lines"]?.GetValue<int>() ?? 0;
        Assert.IsTrue(lines > 0);
        StringAssert.Contains(payload["content"]?.GetValue<string>(), "remove_attributes");
    }

    [TestMethod]
    public async Task Detail_ByDocsUriForm_ResolvesSameResource()
    {
        var result = await CallAsync("docs://instructions_for_views");
        var payload = Structured(result);
        Assert.AreEqual("instructions_for_views", payload["name"]?.GetValue<string>());
        StringAssert.Contains(payload["content"]?.GetValue<string>(), "remove_attributes");
    }

    [TestMethod]
    public async Task Detail_CaseInsensitiveAndTrailingSlash_Resolves()
    {
        var result = await CallAsync("DOCS://INSTRUCTIONS_FOR_VIEWS/");
        var payload = Structured(result);
        Assert.AreEqual("instructions_for_views", payload["name"]?.GetValue<string>());
    }

    [TestMethod]
    public async Task Detail_ByResourceNameForSchema_Resolves()
    {
        var result = await CallAsync("fetchxml_schema");
        var payload = Structured(result);
        Assert.AreEqual("schema", payload["kind"]?.GetValue<string>());
        Assert.AreEqual("schema://fetchxml", payload["uri"]?.GetValue<string>());
        StringAssert.Contains(payload["content"]?.GetValue<string>(), "fetch");
    }

    [TestMethod]
    public async Task Detail_BySchemaUriForm_Resolves()
    {
        var result = await CallAsync("schema://formxml");
        var payload = Structured(result);
        Assert.AreEqual("formxml_schema", payload["name"]?.GetValue<string>());
        Assert.IsTrue((payload["lines"]?.GetValue<int>() ?? 0) > 0);
    }

    [TestMethod]
    public async Task UnknownName_ReturnsErrorWithHintListingValidNames()
    {
        var result = await CallAsync("instructions_for_nonexistent");

        Assert.IsTrue(result.IsError ?? false);
        var text = ((TextContentBlock)result.Content[0]).Text;
        StringAssert.StartsWith(text, "[Error]");
        StringAssert.Contains(text, "[Hint]");
        StringAssert.Contains(text, "instructions_for_views");
        StringAssert.Contains(text, "schema://fetchxml");
    }

    [TestMethod]
    public async Task WhitespaceName_ReturnsCatalog()
    {
        var result = await CallAsync("   ");
        var payload = Structured(result);
        Assert.AreEqual("catalog", payload["kind"]?.GetValue<string>());
    }
}
