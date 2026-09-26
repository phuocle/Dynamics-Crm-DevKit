#nullable enable
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using DynamicsCrm.DevKit.Cli.Tool;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

[TestClass]
public class ToolInputBuilderTests
{
    /// <summary>Real input schema of the manage_view MCP tool (flat strings + one boolean).</summary>
    private const string ManageViewSchema = """
        {
          "type": "object",
          "properties": {
            "action": {"type": "string", "default": ""},
            "entity_name": {"type": "string", "default": ""},
            "view_id": {"type": "string", "default": ""},
            "view_name": {"type": "string", "default": ""},
            "is_personal_view": {"type": "boolean", "default": false},
            "fetchxml": {"type": "string", "default": ""},
            "layoutxml": {"type": "string", "default": ""},
            "cell_updates_json": {"type": "string", "default": ""}
          }
        }
        """;

    private static JsonElement Schema(string json) => JsonDocument.Parse(json).RootElement.Clone();

    private static ToolInputRequest Request(
        string? inputPath = null,
        IEnumerable<string>? set = null,
        IEnumerable<string>? add = null,
        IEnumerable<string>? file = null) =>
        new ToolInputRequest
        {
            InputPath = inputPath,
            Set = set?.ToArray() ?? Array.Empty<string>(),
            Add = add?.ToArray() ?? Array.Empty<string>(),
            File = file?.ToArray() ?? Array.Empty<string>()
        };

    private static ToolInputResult Build(string schemaJson, ToolInputRequest? request = null) =>
        ToolInputBuilder.Build(Schema(schemaJson), request ?? new ToolInputRequest());

    private static ToolInputException BuildFails(string schemaJson, ToolInputRequest? request = null)
    {
        return Assert.ThrowsExactly<ToolInputException>(() => Build(schemaJson, request));
    }

    private static string TempFolder()
    {
        var folder = Path.Combine(Path.GetTempPath(), "devkit-toolinput-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(folder);
        return folder;
    }

    private static string WriteFile(string folder, string fileName, string content)
    {
        var path = Path.Combine(folder, fileName);
        File.WriteAllText(path, content, new UTF8Encoding(false));
        return path;
    }

    private static ToolValidationError SingleError(ToolInputException exception, string path)
    {
        var matches = exception.Errors.Where(e => e.Path == path).ToList();
        Assert.IsTrue(matches.Count > 0, $"expected an error at \"{path}\", got: {string.Join(" | ", exception.Errors)}");
        return matches[0];
    }

    /// <summary>All accumulated error text — the exception summary only carries a count.</summary>
    private static string ErrorText(ToolInputException exception) =>
        string.Join(" | ", exception.Errors.Select(e => e.ToString()));

    // ------------------------------------------------------------------
    // modifier splitting
    // ------------------------------------------------------------------

    [TestMethod]
    public void Set_SplitsAtFirstEquals_ValueMayContainEquals()
    {
        var result = Build("""{"type":"object","properties":{"url":{"type":"string"}}}""",
            Request(set: new[] { "url=https://org.example/api?x=1&y=2" }));
        Assert.AreEqual("https://org.example/api?x=1&y=2", (string?)result.Arguments["url"]);
    }

    [TestMethod]
    public void Set_ValueWithSpaces_IsPreservedVerbatim()
    {
        var result = Build(ManageViewSchema, Request(set: new[] { "view_name=Contacts for Account Subgrid" }));
        Assert.AreEqual("Contacts for Account Subgrid", (string?)result.Arguments["view_name"]);
    }

    [TestMethod]
    public void Set_EmptyValue_ProducesEmptyString()
    {
        var result = Build(ManageViewSchema, Request(set: new[] { "fetchxml=" }));
        Assert.AreEqual("", (string?)result.Arguments["fetchxml"]);
    }

    [TestMethod]
    public void Set_UnicodeValue_IsPreserved()
    {
        var result = Build("""{"type":"object","properties":{"name":{"type":"string"}}}""",
            Request(set: new[] { "name=héllo wörld → 世界 ✓" }));
        Assert.AreEqual("héllo wörld → 世界 ✓", (string?)result.Arguments["name"]);
    }

    [TestMethod]
    public void Set_MissingEquals_IsRejected()
    {
        var exception = BuildFails(ManageViewSchema, Request(set: new[] { "action" }));
        StringAssert.Contains(ErrorText(exception), "expected path=value");
    }

    [TestMethod]
    public void Set_EmptyPath_IsRejected()
    {
        var exception = BuildFails(ManageViewSchema, Request(set: new[] { "=value" }));
        StringAssert.Contains(ErrorText(exception), "empty");
    }

    [TestMethod]
    public void Set_UnknownProperty_IsRejectedDirectingToInput()
    {
        var exception = BuildFails(ManageViewSchema, Request(set: new[] { "not_a_parameter=1" }));
        StringAssert.Contains(ErrorText(exception), "not declared by the tool schema");
        StringAssert.Contains(ErrorText(exception), "--input");
    }

    // ------------------------------------------------------------------
    // schema-aware scalar conversion
    // ------------------------------------------------------------------

    [TestMethod]
    public void Set_StringTarget_NullLiteralStaysString()
    {
        var result = Build("""{"type":"object","properties":{"name":{"type":"string"}}}""",
            Request(set: new[] { "name=null" }));
        var value = (JsonNode?)result.Arguments["name"];
        Assert.AreEqual(JsonValueKind.String, value!.GetValueKind());
        Assert.AreEqual("null", (string?)value);
    }

    [TestMethod]
    public void Set_StringTarget_JsonLookingValueStaysString()
    {
        var result = Build(ManageViewSchema, Request(set: new[] { "cell_updates_json=[{\"cell_name\":\"name\"}]" }));
        var value = (JsonNode?)result.Arguments["cell_updates_json"];
        Assert.AreEqual(JsonValueKind.String, value!.GetValueKind());
        Assert.AreEqual("""[{"cell_name":"name"}]""", (string?)value);
    }

    [TestMethod]
    public void Set_BooleanTarget_AcceptsOnlyExactTrueFalse()
    {
        var schema = """{"type":"object","properties":{"flag":{"type":"boolean"}}}""";
        Assert.AreEqual(true, (bool?)Build(schema, Request(set: new[] { "flag=true" })).Arguments["flag"]);
        Assert.AreEqual(false, (bool?)Build(schema, Request(set: new[] { "flag=false" })).Arguments["flag"]);

        foreach (var spelling in new[] { "True", "TRUE", "yes", "1", "on", "" })
        {
            var exception = BuildFails(schema, Request(set: new[] { $"flag={spelling}" }));
            StringAssert.Contains(ErrorText(exception), "only true or false");
        }
    }

    [TestMethod]
    public void Set_BooleanUnionWithNull_AcceptsBooleans()
    {
        var schema = """{"type":"object","properties":{"flag":{"type":["boolean","null"]}}}""";
        Assert.AreEqual(true, (bool?)Build(schema, Request(set: new[] { "flag=true" })).Arguments["flag"]);
    }

    [TestMethod]
    public void Set_IntegerTarget_ParsesInvariantAndEnforcesBounds()
    {
        var unbounded = """{"type":"object","properties":{"count":{"type":"integer"}}}""";
        var bounded = """{"type":"object","properties":{"count":{"type":"integer","minimum":1,"maximum":100}}}""";

        Assert.AreEqual(42L, (long?)Build(bounded, Request(set: new[] { "count=42" })).Arguments["count"]);
        Assert.AreEqual(-7L, (long?)Build(unbounded, Request(set: new[] { "count=-7" })).Arguments["count"]);

        StringAssert.Contains(ErrorText(BuildFails(bounded, Request(set: new[] { "count=0" }))), "less than minimum 1");
        StringAssert.Contains(ErrorText(BuildFails(bounded, Request(set: new[] { "count=101" }))), "greater than maximum 100");
    }

    [TestMethod]
    public void Set_IntegerTarget_RejectsFractionalOverflowAndWhitespace()
    {
        var schema = """{"type":"object","properties":{"count":{"type":"integer"}}}""";

        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "count=3.0" }))), "integral");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "count=1e2" }))), "integral");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "count=99999999999999999999" }))), "integral");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "count= 5" }))), "integral");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "count=5 " }))), "integral");
    }

    [TestMethod]
    public void Set_NumberTarget_AcceptsDecimalAndRejectsPrecisionLossAndNonFinite()
    {
        var schema = """{"type":"object","properties":{"ratio":{"type":"number"}}}""";

        var decimalResult = Build(schema, Request(set: new[] { "ratio=0.1" }));
        Assert.AreEqual(JsonValueKind.Number, ((JsonNode?)decimalResult.Arguments["ratio"])!.GetValueKind());
        Assert.AreEqual("0.1", decimalResult.Arguments["ratio"]!.ToJsonString());

        // 3.0 lands as the JSON number 3 — correct ValueKind, same numeric value.
        var wholeResult = Build(schema, Request(set: new[] { "ratio=3.0" }));
        Assert.AreEqual("3", wholeResult.Arguments["ratio"]!.ToJsonString());

        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "ratio=1e999" }))), "finite");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "ratio=1.0000000000000000001" }))), "precision");
        StringAssert.Contains(ErrorText(BuildFails(schema, Request(set: new[] { "ratio=abc" }))), "JSON number");
    }

    [TestMethod]
    public void Set_AmbiguousMultiTypeTarget_RequiresInput()
    {
        var schema = """{"type":"object","properties":{"value":{"type":["string","number"]}}}""";
        var exception = BuildFails(schema, Request(set: new[] { "value=5" }));
        StringAssert.Contains(ErrorText(exception), "multiple types");
        StringAssert.Contains(ErrorText(exception), "--input");
    }

    [TestMethod]
    public void Set_ObjectTarget_RedirectsToInput()
    {
        var schema = """{"type":"object","properties":{"options":{"type":"object","properties":{}}}}""";
        var exception = BuildFails(schema, Request(set: new[] { "options=x" }));
        StringAssert.Contains(ErrorText(exception), "declares it as object");
        StringAssert.Contains(ErrorText(exception), "--input");
    }

    [TestMethod]
    public void Set_ArrayTarget_RedirectsToInputOrAdd()
    {
        var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";
        var exception = BuildFails(schema, Request(set: new[] { "columns=a" }));
        StringAssert.Contains(ErrorText(exception), "declares it as array");
        StringAssert.Contains(ErrorText(exception), "--add");
    }

    [TestMethod]
    public void Set_EnumTarget_ConvertsThenValidatesMembership()
    {
        var schema = """{"type":"object","properties":{"mode":{"type":"string","enum":["read","write"]}}}""";
        Assert.AreEqual("read", (string?)Build(schema, Request(set: new[] { "mode=read" })).Arguments["mode"]);

        var stringException = BuildFails(schema, Request(set: new[] { "mode=execute" }));
        StringAssert.Contains(ErrorText(stringException), "not one of the allowed values");

        var intSchema = """{"type":"object","properties":{"level":{"type":"integer","enum":[1,2]}}}""";
        Assert.AreEqual(2L, (long?)Build(intSchema, Request(set: new[] { "level=2" })).Arguments["level"]);
        StringAssert.Contains(ErrorText(BuildFails(intSchema, Request(set: new[] { "level=3" }))), "not one of the allowed values");
    }

    [TestMethod]
    public void Set_CreatesMissingObjectParents_OnlyWhereSchemaPermits()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "target": {"type": "object", "properties": {"table": {"type": "string"}}}
              }
            }
            """;
        var result = Build(schema, Request(set: new[] { "target.table=contact" }));
        Assert.AreEqual("contact", (string?)((JsonObject?)result.Arguments["target"])!["table"]);
    }

    [TestMethod]
    public void Set_RejectsTraversalThroughScalarAndNull()
    {
        var schema = """{"type":"object","properties":{"target":{"type":"object","properties":{"table":{"type":"string"}}}}}""";

        var folder = TempFolder();
        try
        {
            // Traversal through a scalar in the input document.
            var documentPath = WriteFile(folder, "scalar.json", """{"target":"text"}""");
            var scalarException = BuildFails(schema, Request(inputPath: documentPath, set: new[] { "target.table=contact" }));
            StringAssert.Contains(SingleError(scalarException, "target").Message, "cannot descend");

            // Traversal through a JSON null.
            var nullPath = WriteFile(folder, "null.json", """{"target":null}""");
            var nullException = BuildFails(schema, Request(inputPath: nullPath, set: new[] { "target.table=contact" }));
            StringAssert.Contains(SingleError(nullException, "target").Message, "cannot descend");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Set_RejectsArrayIndexesWildcardsAndEscapedDots()
    {
        var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";

        foreach (var path in new[] { "columns[0]", "columns*", "col\\umns", "columns[0].name" })
        {
            var exception = BuildFails(schema, Request(set: new[] { $"{path}=x" }));
            StringAssert.Contains(ErrorText(exception), "use --input");
        }
    }

    [TestMethod]
    public void Set_OverExistingObjectOrArray_IsRejectedInsteadOfDiscarding()
    {
        var schema = """{"type":"object","properties":{"target":{"type":"object","properties":{"table":{"type":"string"}}},"columns":{"type":"array","items":{"type":"string"}}}}""";
        // A scalar --set can never pass schema checks for object/array targets, but the
        // discard guard protects against mismatches between document values and schema.
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"columns":"a,b"}""");
            var exception = BuildFails(schema, Request(inputPath: documentPath, set: Array.Empty<string>()));
            StringAssert.Contains(SingleError(exception, "columns").Message, "expected");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    // ------------------------------------------------------------------
    // --add
    // ------------------------------------------------------------------

    private const string ArraySchema = """
        {
          "type": "object",
          "properties": {
            "columns": {"type": "array", "items": {"type": "string"}},
            "counts": {"type": "array", "items": {"type": "integer"}}
          }
        }
        """;

    [TestMethod]
    public void Add_InitializesAbsentArrayAndAppendsInOrder()
    {
        var result = Build(ArraySchema, Request(add: new[] { "columns=fullname", "columns=emailaddress1" }));
        var columns = (JsonArray?)result.Arguments["columns"];
        Assert.IsNotNull(columns);
        Assert.AreEqual(2, columns.Count);
        Assert.AreEqual("fullname", (string?)columns[0]);
        Assert.AreEqual("emailaddress1", (string?)columns[1]);
    }

    [TestMethod]
    public void Add_AppendsToExistingArrayFromInputDocument()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"columns":["firstname"]}""");
            var result = Build(ArraySchema, Request(inputPath: documentPath, add: new[] { "columns=lastname" }));
            var columns = (JsonArray?)result.Arguments["columns"];
            Assert.AreEqual(2, columns!.Count);
            Assert.AreEqual("firstname", (string?)columns[0]);
            Assert.AreEqual("lastname", (string?)columns[1]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Add_IntegerItems_ConvertAndValidate()
    {
        var result = Build(ArraySchema, Request(add: new[] { "counts=1", "counts=2" }));
        var counts = (JsonArray?)result.Arguments["counts"];
        Assert.AreEqual(2, counts!.Count);
        Assert.AreEqual(1L, (long?)counts[0]);
        Assert.AreEqual(2L, (long?)counts[1]);
    }

    [TestMethod]
    public void Add_AgainstStringProperty_IsRejectedNamingFileAndSet()
    {
        // manage_view.cell_updates_json is a string parameter holding JSON TEXT.
        var exception = BuildFails(ManageViewSchema, Request(add: new[] { "cell_updates_json=[{\"cell_name\":\"name\"}]" }));
        StringAssert.Contains(SingleError(exception, "cell_updates_json").Message, "string");
        StringAssert.Contains(SingleError(exception, "cell_updates_json").Message, "--file");
    }

    [TestMethod]
    public void Add_ItemConversionFailure_IsReported()
    {
        var exception = BuildFails(ArraySchema, Request(add: new[] { "counts=3.5" }));
        StringAssert.Contains(ErrorText(exception), "integral");
    }

    [TestMethod]
    public void Add_OverExistingNonArray_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"columns":"a,b"}""");
            var exception = BuildFails(ArraySchema, Request(inputPath: documentPath, add: new[] { "columns=x" }));
            StringAssert.Contains(SingleError(exception, "columns").Message, "not an array");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    // ------------------------------------------------------------------
    // --file
    // ------------------------------------------------------------------

    [TestMethod]
    public void File_AssignsFileContentsAsText_NeverParsedAsJson()
    {
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "cells.json", """[{"cell_name":"name"}]""");
            var result = Build(ManageViewSchema, Request(file: new[] { $"cell_updates_json={contentPath}" }));
            var value = (JsonNode?)result.Arguments["cell_updates_json"];
            Assert.AreEqual(JsonValueKind.String, value!.GetValueKind());
            Assert.AreEqual("""[{"cell_name":"name"}]""", (string?)value);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_PathWithSpaces_Works()
    {
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "contact subgrid.fetchxml", "<fetch />");
            var result = Build(ManageViewSchema, Request(file: new[] { $"fetchxml={contentPath}" }));
            Assert.AreEqual("<fetch />", (string?)result.Arguments["fetchxml"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_RelativePath_ResolvesAgainstCurrentDirectory()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var folder = TempFolder();
        try
        {
            Environment.CurrentDirectory = folder;
            WriteFile(folder, "rel.fetchxml", "<fetch />");
            var result = Build(ManageViewSchema, Request(file: new[] { "fetchxml=rel.fetchxml" }));
            Assert.AreEqual("<fetch />", (string?)result.Arguments["fetchxml"]);
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_MissingFile_Directory_AndInvalidUtf8_AreRejected()
    {
        var folder = TempFolder();
        try
        {
            var missing = BuildFails(ManageViewSchema, Request(file: new[] { $"fetchxml={Path.Combine(folder, "nope.txt")}" }));
            StringAssert.Contains(SingleError(missing, "fetchxml").Message, "file not found");

            var directory = BuildFails(ManageViewSchema, Request(file: new[] { $"fetchxml={folder}" }));
            StringAssert.Contains(SingleError(directory, "fetchxml").Message, "directory");

            var invalidUtf8Path = Path.Combine(folder, "broken.txt");
            File.WriteAllBytes(invalidUtf8Path, new byte[] { 0x41, 0xC3, 0x28, 0x42 });
            var invalidUtf8 = BuildFails(ManageViewSchema, Request(file: new[] { $"fetchxml={invalidUtf8Path}" }));
            StringAssert.Contains(SingleError(invalidUtf8, "fetchxml").Message, "UTF-8");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_UnreadableFile_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "locked.txt", "content");
            // Holding the file open without share-read makes concurrent reads fail with IOException.
            using var stream = new FileStream(contentPath, FileMode.Open, FileAccess.Read, FileShare.None);
            var exception = BuildFails(ManageViewSchema, Request(file: new[] { $"fetchxml={contentPath}" }));
            StringAssert.Contains(SingleError(exception, "fetchxml").Message, "could not be read");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_TargetMustBeStringProperty_NamingSetForPathValues()
    {
        var schema = """{"type":"object","properties":{"count":{"type":"integer"}}}""";
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "count.txt", "5");
            var exception = BuildFails(schema, Request(file: new[] { $"count={contentPath}" }));
            StringAssert.Contains(SingleError(exception, "count").Message, "not string");
            StringAssert.Contains(SingleError(exception, "count").Message, "--set");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void File_DuplicateExactPath_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var firstPath = WriteFile(folder, "a.txt", "a");
            var secondPath = WriteFile(folder, "b.txt", "b");
            var exception = BuildFails(ManageViewSchema, Request(file: new[] { $"fetchxml={firstPath}", $"fetchxml={secondPath}" }));
            StringAssert.Contains(SingleError(exception, "fetchxml").Message, "duplicate --file");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    // ------------------------------------------------------------------
    // merge precedence
    // ------------------------------------------------------------------

    [TestMethod]
    public void Precedence_InputThenSetThenFile_RegardlessOfCliOrder()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"name":"from-input"}""");
            var contentPath = WriteFile(folder, "content.txt", "from-file");
            var schema = """{"type":"object","properties":{"name":{"type":"string"}}}""";

            // --set overrides the input document.
            var setResult = Build(schema, Request(inputPath: documentPath, set: new[] { "name=from-set" }));
            Assert.AreEqual("from-set", (string?)setResult.Arguments["name"]);

            // --file overrides both, even when listed before --set on the command line.
            var fileResult = Build(schema, Request(inputPath: documentPath, file: new[] { $"name={contentPath}" }, set: new[] { "name=from-set" }));
            Assert.AreEqual("from-file", (string?)fileResult.Arguments["name"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Precedence_AddAppendsOnTopOfInputArray_SetThenAdd()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"columns":["a"]}""");
            var result = Build(ArraySchema, Request(inputPath: documentPath, set: Array.Empty<string>(), add: new[] { "columns=b" }));
            var columns = (JsonArray?)result.Arguments["columns"];
            Assert.AreEqual(2, columns!.Count);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void DuplicateSetPath_IsRejected()
    {
        var exception = BuildFails("""{"type":"object","properties":{"name":{"type":"string"}}}""",
            Request(set: new[] { "name=one", "name=two" }));
        StringAssert.Contains(SingleError(exception, "name").Message, "duplicate --set");
    }

    [TestMethod]
    public void FileOverridesSet_AtSamePath_IsAllowedByExplicitPrecedence()
    {
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "content.txt", "from-file");
            var result = Build("""{"type":"object","properties":{"name":{"type":"string"}}}""",
                Request(set: new[] { "name=from-set" }, file: new[] { $"name={contentPath}" }));
            Assert.AreEqual("from-file", (string?)result.Arguments["name"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void AncestorDescendantAssignments_AreRejected()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "options": {"type": "object", "properties": {"publish": {"type": "boolean"}}}
              }
            }
            """;

        // --set options=x would replace the subtree assigned by --set options.publish=true.
        var conflict = BuildFails(schema, Request(set: new[] { "options.publish=true", "options=x" }));
        StringAssert.Contains(ErrorText(conflict), "conflicting assignments");

        // The reverse order fails as well — never silently discarding the subtree.
        Assert.ThrowsExactly<ToolInputException>(() =>
            Build(schema, Request(set: new[] { "options=x", "options.publish=true" })));
    }

    // ------------------------------------------------------------------
    // --input document
    // ------------------------------------------------------------------

    [TestMethod]
    public void Input_ValidDocument_IsUsed()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"action":"create","entity_name":"contact"}""");
            var result = Build(ManageViewSchema, Request(inputPath: documentPath));
            Assert.AreEqual("create", (string?)result.Arguments["action"]);
            Assert.AreEqual("contact", (string?)result.Arguments["entity_name"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Input_MalformedJson_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"action": """);
            var exception = BuildFails(ManageViewSchema, Request(inputPath: documentPath));
            StringAssert.Contains(ErrorText(exception), "not valid JSON");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Input_NonObjectRoot_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var arrayPath = WriteFile(folder, "array.json", "[1,2]");
            var arrayException = BuildFails(ManageViewSchema, Request(inputPath: arrayPath));
            StringAssert.Contains(ErrorText(arrayException), "JSON object");

            var stringPath = WriteFile(folder, "string.json", "\"text\"");
            var stringException = BuildFails(ManageViewSchema, Request(inputPath: stringPath));
            StringAssert.Contains(ErrorText(stringException), "JSON object");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Input_DuplicateJsonPropertyNames_AreRejected()
    {
        var folder = TempFolder();
        try
        {
            var topLevel = WriteFile(folder, "dup.json", """{"name":"a","name":"b"}""");
            var topLevelException = BuildFails("""{"type":"object","properties":{"name":{"type":"string"}}}""",
                Request(inputPath: topLevel));
            StringAssert.Contains(ErrorText(topLevelException), "duplicate JSON property name");

            var nested = WriteFile(folder, "dup-nested.json", """{"target":{"table":"a","table":"b"}}""");
            var nestedSchema = """{"type":"object","properties":{"target":{"type":"object","properties":{"table":{"type":"string"}}}}}""";
            var nestedException = BuildFails(nestedSchema, Request(inputPath: nested));
            StringAssert.Contains(ErrorText(nestedException), "duplicate JSON property name");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Input_MissingFile_IsRejected()
    {
        var exception = BuildFails(ManageViewSchema, Request(inputPath: Path.Combine(TempFolder(), "missing.json")));
        StringAssert.Contains(ErrorText(exception), "--input failed");
    }

    [TestMethod]
    public void Input_FinalValidationErrors_AreIncluded()
    {
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"is_personal_view":"yes"}""");
            var exception = BuildFails(ManageViewSchema, Request(inputPath: documentPath));
            StringAssert.Contains(SingleError(exception, "is_personal_view").Message, "expected \"boolean\"");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void Input_MissingRequiredProperty_IsReportedByFinalValidation()
    {
        var schema = """{"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}""";
        var exception = BuildFails(schema, Request());
        StringAssert.Contains(SingleError(exception, "name").Message, "required property \"name\" is missing");
    }

    // ------------------------------------------------------------------
    // $file references
    // ------------------------------------------------------------------

    [TestMethod]
    public void FileReference_InFileBackedDocument_ResolvesAgainstDocumentDirectory()
    {
        // The referenced file exists ONLY next to the document — the current directory
        // is never consulted for $file references inside a file-backed document.
        var originalDirectory = Environment.CurrentDirectory;
        var folder = TempFolder();
        try
        {
            var documentPath = WriteFile(folder, "doc.json", """{"fetchxml":{"$file":"contact subgrid.fetchxml"}}""");
            WriteFile(folder, "contact subgrid.fetchxml", "<fetch><entity name='contact' /></fetch>");

            var result = Build(ManageViewSchema, Request(inputPath: documentPath));
            Assert.AreEqual("<fetch><entity name='contact' /></fetch>", (string?)result.Arguments["fetchxml"]);
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_AbsolutePath_StaysAbsolute()
    {
        var folder = TempFolder();
        try
        {
            var contentPath = WriteFile(folder, "content.txt", "absolute content");
            var document = "{\"name\":{\"$file\":\"" + contentPath.Replace("\\", "\\\\") + "\"}}";
            var documentPath = WriteFile(Path.GetTempPath(), $"doc-{Guid.NewGuid():N}.json", document);
            try
            {
                var result = Build("""{"type":"object","properties":{"name":{"type":"string"}}}""",
                    Request(inputPath: documentPath));
                Assert.AreEqual("absolute content", (string?)result.Arguments["name"]);
            }
            finally
            {
                File.Delete(documentPath);
            }
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_MalformedForms_AreRejected()
    {
        var folder = TempFolder();
        try
        {
            var schema = """{"type":"object","properties":{"fetchxml":{"type":"string"}}}""";

            var nonStringValue = WriteFile(folder, "nonstring.json", """{"fetchxml":{"$file":42}}""");
            var nonStringException = BuildFails(schema, Request(inputPath: nonStringValue));
            StringAssert.Contains(SingleError(nonStringException, "fetchxml").Message, "malformed $file reference");

            var extraProperties = WriteFile(folder, "extra.json", """{"fetchxml":{"$file":"a.txt","other":1}}""");
            var extraException = BuildFails(schema, Request(inputPath: extraProperties));
            StringAssert.Contains(SingleError(extraException, "fetchxml").Message, "malformed $file reference");

            var missingTarget = WriteFile(folder, "missing.json", """{"fetchxml":{"$file":"not-there.txt"}}""");
            var missingException = BuildFails(schema, Request(inputPath: missingTarget));
            StringAssert.Contains(SingleError(missingException, "fetchxml").Message, "could not be resolved");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_InvalidUtf8ReferencedFile_IsRejected()
    {
        var folder = TempFolder();
        try
        {
            var brokenPath = Path.Combine(folder, "broken.txt");
            File.WriteAllBytes(brokenPath, new byte[] { 0xC3, 0x28 });
            var document = "{\"fetchxml\":{\"$file\":\"" + brokenPath.Replace("\\", "\\\\") + "\"}}";
            var documentPath = WriteFile(folder, "doc.json", document);

            var exception = BuildFails("""{"type":"object","properties":{"fetchxml":{"type":"string"}}}""",
                Request(inputPath: documentPath));
            StringAssert.Contains(SingleError(exception, "fetchxml").Message, "UTF-8");
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_AtObjectDestination_StaysUntouched()
    {
        var folder = TempFolder();
        try
        {
            // A {"$file": ...}-looking object inside an object-typed property is ordinary data.
            var schema = """
                {
                  "type": "object",
                  "properties": {
                    "config": {"type": "object", "properties": {"$file": {"type": "string"}}}
                  }
                }
                """;
            var documentPath = WriteFile(folder, "doc.json", """{"config":{"$file":"whatever.txt"}}""");
            var result = Build(schema, Request(inputPath: documentPath));
            var config = (JsonObject?)result.Arguments["config"];
            Assert.IsNotNull(config);
            Assert.AreEqual("whatever.txt", (string?)config["$file"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_ContentsAreNeverReparsedForFurtherReferences()
    {
        var folder = TempFolder();
        try
        {
            // The referenced file's TEXT contains another $file-looking JSON — it must land verbatim.
            WriteFile(folder, "outer.txt", """{"$file":"inner.txt"}""");
            var documentPath = WriteFile(folder, "doc.json", """{"fetchxml":{"$file":"outer.txt"}}""");

            var result = Build("""{"type":"object","properties":{"fetchxml":{"type":"string"}}}""",
                Request(inputPath: documentPath));
            Assert.AreEqual("""{"$file":"inner.txt"}""", (string?)result.Arguments["fetchxml"]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    [TestMethod]
    public void FileReference_InArrayItems_ResolvesAgainstDocumentDirectory()
    {
        var folder = TempFolder();
        try
        {
            WriteFile(folder, "item.txt", "item-content");
            var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";
            var documentPath = WriteFile(folder, "doc.json", """{"columns":[{"$file":"item.txt"}]}""");

            var result = Build(schema, Request(inputPath: documentPath));
            var columns = (JsonArray?)result.Arguments["columns"];
            Assert.AreEqual("item-content", (string?)columns![0]);
        }
        finally
        {
            Directory.Delete(folder, recursive: true);
        }
    }

    // ------------------------------------------------------------------
    // error accumulation and warnings
    // ------------------------------------------------------------------

    [TestMethod]
    public void IndependentModifierErrors_AreAllAccumulated()
    {
        var exception = BuildFails(
            """{"type":"object","properties":{"flag":{"type":"boolean"},"count":{"type":"integer"}}}""",
            Request(set: new[] { "flag=maybe", "count=3.0" }));
        Assert.AreEqual(2, exception.Errors.Count);
        Assert.AreEqual("flag", exception.Errors[0].Path);
        Assert.AreEqual("count", exception.Errors[1].Path);
    }

    [TestMethod]
    public void EmptyRequest_EmptySchema_YieldsEmptyArgumentsAndNoWarnings()
    {
        var result = Build("""{"type":"object","properties":{}}""");
        Assert.AreEqual(0, result.Arguments.Count);
        Assert.AreEqual(0, result.Warnings.Count);
    }

    [TestMethod]
    public void EmptyRequest_ManageView_Passes()
    {
        // Every manage_view parameter has a schema default; nothing is required.
        var result = Build(ManageViewSchema);
        Assert.AreEqual(0, result.Arguments.Count);
        Assert.AreEqual(0, result.Warnings.Count);
    }

    [TestMethod]
    public void UnsupportedSchemaConstruct_IsRejectedBeforeAnyProcessing()
    {
        var exception = BuildFails("""{"type":"object","properties":{"x":{"oneOf":[{"type":"string"}]}}}""",
            Request(set: new[] { "x=1" }));
        StringAssert.Contains(ErrorText(exception), "unsupported schema construct");
    }
}

/// <summary>
/// Stdin and current-directory scenarios. Console.In and Environment.CurrentDirectory are
/// process-global, so this class must not run in parallel with anything else.
/// </summary>
[TestClass]
[DoNotParallelize]
public class ToolInputBuilderStdinTests
{
    private static JsonElement Schema(string json) => JsonDocument.Parse(json).RootElement.Clone();

    private static string ErrorText(ToolInputException exception) =>
        string.Join(" | ", exception.Errors.Select(e => e.ToString()));

    private static string TempFolder()
    {
        var folder = Path.Combine(Path.GetTempPath(), "devkit-toolinput-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(folder);
        return folder;
    }

    [TestMethod]
    public void Stdin_InputObject_IsRead()
    {
        var originalInput = Console.In;
        try
        {
            Console.SetIn(new StringReader("""{"name":"from-stdin"}"""));
            var result = ToolInputBuilder.Build(
                Schema("""{"type":"object","properties":{"name":{"type":"string"}}}"""),
                new ToolInputRequest { InputPath = "-" });
            Assert.AreEqual("from-stdin", (string?)result.Arguments["name"]);
        }
        finally
        {
            Console.SetIn(originalInput);
        }
    }

    [TestMethod]
    public void Stdin_MalformedJson_IsRejected()
    {
        var originalInput = Console.In;
        try
        {
            Console.SetIn(new StringReader("{ not json"));
            var exception = Assert.ThrowsExactly<ToolInputException>(() => ToolInputBuilder.Build(
                Schema("""{"type":"object","properties":{"name":{"type":"string"}}}"""),
                new ToolInputRequest { InputPath = "-" }));
            StringAssert.Contains(ErrorText(exception), "not valid JSON");
        }
        finally
        {
            Console.SetIn(originalInput);
        }
    }

    [TestMethod]
    public void Stdin_NonObjectRoot_IsRejected()
    {
        var originalInput = Console.In;
        try
        {
            Console.SetIn(new StringReader("[1]"));
            var exception = Assert.ThrowsExactly<ToolInputException>(() => ToolInputBuilder.Build(
                Schema("""{"type":"object","properties":{"name":{"type":"string"}}}"""),
                new ToolInputRequest { InputPath = "-" }));
            StringAssert.Contains(ErrorText(exception), "JSON object");
        }
        finally
        {
            Console.SetIn(originalInput);
        }
    }

    [TestMethod]
    public void Stdin_FileReference_ResolvesAgainstCurrentDirectory()
    {
        var originalInput = Console.In;
        var originalDirectory = Environment.CurrentDirectory;
        var folder = TempFolder();
        try
        {
            Environment.CurrentDirectory = folder;
            File.WriteAllText(Path.Combine(folder, "rel.fetchxml"), "<fetch />", new UTF8Encoding(false));
            Console.SetIn(new StringReader("""{"fetchxml":{"$file":"rel.fetchxml"}}"""));

            var result = ToolInputBuilder.Build(
                Schema("""{"type":"object","properties":{"fetchxml":{"type":"string"}}}"""),
                new ToolInputRequest { InputPath = "-" });
            Assert.AreEqual("<fetch />", (string?)result.Arguments["fetchxml"]);
        }
        finally
        {
            Console.SetIn(originalInput);
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(folder, recursive: true);
        }
    }
}
