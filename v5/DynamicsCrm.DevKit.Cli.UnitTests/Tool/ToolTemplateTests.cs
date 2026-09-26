#nullable enable
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using DynamicsCrm.DevKit.Cli.Tool;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

[TestClass]
public class ToolTemplateTests
{
    /// <summary>
    /// Real input schema of the manage_view MCP tool, dumped from the MCP C# SDK exactly
    /// as tools/list advertises it (all properties optional, all with defaults).
    /// </summary>
    private const string ManageViewSchema = """
        {
          "type": "object",
          "properties": {
            "action": {"description": "Actions.", "type": "string", "default": ""},
            "entity_name": {"description": "Entity name.", "type": "string", "default": ""},
            "view_id": {"description": "GUID.", "type": "string", "default": ""},
            "view_name": {"description": "Name contains.", "type": "string", "default": ""},
            "is_personal_view": {"description": "Personal views.", "type": "boolean", "default": false},
            "fetchxml": {"description": "FetchXML.", "type": "string", "default": ""},
            "layoutxml": {"description": "LayoutXML path.", "type": "string", "default": ""},
            "cell_updates_json": {"description": "Cell updates.", "type": "string", "default": ""}
          }
        }
        """;

    private static JsonElement Schema(string json) =>
        JsonDocument.Parse(json).RootElement.Clone();

    private static void AssertPlaceholder(ToolExampleResult result, string path)
    {
        CollectionAssert.Contains(result.Placeholders.ToList(), path);
    }

    // ------------------------------------------------------------------
    // defaults
    // ------------------------------------------------------------------

    [TestMethod]
    public void ManageView_DefaultsUsed_PropertyOrderFollowsSchema()
    {
        var result = ToolTemplate.BuildExample(Schema(ManageViewSchema));

        var expected = """
            {"action":"","entity_name":"","view_id":"","view_name":"","is_personal_view":false,"fetchxml":"","layoutxml":"","cell_updates_json":""}
            """;
        Assert.AreEqual(expected, result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    [TestMethod]
    public void Template_IsAlwaysValidJson_AndReparses()
    {
        var result = ToolTemplate.BuildExample(Schema(ManageViewSchema));
        var reparsed = JsonNode.Parse(result.Template.ToJsonString());
        Assert.IsNotNull(reparsed);
    }

    [TestMethod]
    public void Template_PassesSchemaValidation_ForItsOwnSchema()
    {
        var schema = Schema(ManageViewSchema);
        var result = ToolTemplate.BuildExample(schema);
        var errors = ToolSchemaValidator.Validate(schema, result.Template);
        Assert.AreEqual(0, errors.Count, string.Join(" | ", errors));
    }

    [TestMethod]
    public void Template_IsDeterministic_IdenticalOutputForRepeatedCalls()
    {
        var schema = Schema(ManageViewSchema);
        var first = ToolTemplate.BuildExample(schema).Template.ToJsonString();
        var second = ToolTemplate.BuildExample(Schema(ManageViewSchema)).Template.ToJsonString();
        Assert.AreEqual(first, second);
    }

    [TestMethod]
    public void Defaults_InsideNestedObjects_AreUsedOnlyWhenParentIsRequired()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "required_parent": {
                  "type": "object",
                  "properties": {"inner": {"type": "string", "default": "from-default"}},
                  "required": ["inner"]
                }
              },
              "required": ["required_parent"]
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"required_parent":{"inner":"from-default"}}""", result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    [TestMethod]
    public void OptionalParent_IsNotMaterialized_SolelyForNestedDefault()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "optional_parent": {
                  "type": "object",
                  "properties": {"inner": {"type": "string", "default": "from-default"}}
                }
              }
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("{}", result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    [TestMethod]
    public void NullDefault_UsedWhenSchemaPermitsNull_OmittedOtherwise()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "min_value": {"type": ["number", "null"], "default": null},
                "record_ids": {"type": "array", "items": {"type": "string"}, "default": null}
              }
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        // min_value permits null → null default is used; record_ids does not → omitted.
        Assert.AreEqual("""{"min_value":null}""", result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    // ------------------------------------------------------------------
    // placeholders
    // ------------------------------------------------------------------

    [TestMethod]
    public void RequiredWithoutDefault_GetTypeSpecificPlaceholders()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "text": {"type": "string"},
                "count": {"type": "integer"},
                "ratio": {"type": "number"},
                "flag": {"type": "boolean"},
                "items": {"type": "array", "items": {"type": "string"}}
              },
              "required": ["text", "count", "ratio", "flag", "items"]
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));

        Assert.AreEqual(
            """{"text":"REQUIRED","count":0,"ratio":0,"flag":false,"items":[]}""",
            result.Template.ToJsonString());
        CollectionAssert.AreEquivalent(
            new[] { "text", "count", "ratio", "flag", "items" },
            result.Placeholders.ToList());
    }

    [TestMethod]
    public void RequiredEnum_UsesFirstDeclaredValue()
    {
        var schema = """{"type":"object","properties":{"mode":{"type":"string","enum":["write","read"]}},"required":["mode"]}""";
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"mode":"write"}""", result.Template.ToJsonString());
        AssertPlaceholder(result, "mode");
    }

    [TestMethod]
    public void RequiredObject_RecursesAndReportsLeafPlaceholderPaths()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "target": {
                  "type": "object",
                  "properties": {
                    "table": {"type": "string"},
                    "name": {"type": "string", "default": "named"}
                  },
                  "required": ["table", "name"]
                }
              },
              "required": ["target"]
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"target":{"table":"REQUIRED","name":"named"}}""", result.Template.ToJsonString());
        CollectionAssert.AreEquivalent(new[] { "target.table" }, result.Placeholders.ToList());
    }

    [TestMethod]
    public void RequiredObject_WithoutPlaceholdersInside_IsItselfListedAsIncomplete()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "target": {"type": "object", "properties": {}}
              },
              "required": ["target"]
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"target":{}}""", result.Template.ToJsonString());
        CollectionAssert.AreEquivalent(new[] { "target" }, result.Placeholders.ToList());
    }

    [TestMethod]
    public void OptionalProperties_WithoutDefault_AreOmitted()
    {
        var schema = """
            {
              "type": "object",
              "properties": {
                "kept": {"type": "string", "default": "d"},
                "omitted": {"type": "string"}
              }
            }
            """;
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"kept":"d"}""", result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    [TestMethod]
    public void RequiredUnionWithNull_UsesNonNullTypePlaceholder()
    {
        var schema = """{"type":"object","properties":{"value":{"type":["string","null"]}},"required":["value"]}""";
        var result = ToolTemplate.BuildExample(Schema(schema));
        Assert.AreEqual("""{"value":"REQUIRED"}""", result.Template.ToJsonString());
        AssertPlaceholder(result, "value");
    }

    // ------------------------------------------------------------------
    // never-invented values
    // ------------------------------------------------------------------

    [TestMethod]
    public void Template_NeverInventsTenantSpecificOrFabricatedValues()
    {
        var result = ToolTemplate.BuildExample(Schema(ManageViewSchema));
        var text = result.Template.ToJsonString();

        foreach (var forbidden in new[] { "http", "org", "crm", "dynamics", "00000000", "list", "create" })
            StringAssert.DoesNotMatch(text, new System.Text.RegularExpressions.Regex(forbidden));
    }

    // ------------------------------------------------------------------
    // schema guards
    // ------------------------------------------------------------------

    [TestMethod]
    public void EmptyPropertiesSchema_YieldsEmptyObject()
    {
        var result = ToolTemplate.BuildExample(Schema("""{"type":"object","properties":{}}"""));
        Assert.AreEqual("{}", result.Template.ToJsonString());
        Assert.AreEqual(0, result.Placeholders.Count);
    }

    [TestMethod]
    public void NonObjectSchema_ThrowsToolInputException()
    {
        Assert.ThrowsExactly<ToolInputException>(() => ToolTemplate.BuildExample(Schema("[]")));
    }
}
