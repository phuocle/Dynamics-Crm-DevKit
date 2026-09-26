#nullable enable
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using DynamicsCrm.DevKit.Cli.Tool;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

[TestClass]
public class ToolSchemaValidatorTests
{
    /// <summary>
    /// Real input schema of the manage_view MCP tool (manage_view), dumped from the
    /// MCP C# SDK exactly as tools/list advertises it. Flat properties, defaults,
    /// no required, no additionalProperties, no enum — the shape the whole catalog uses.
    /// </summary>
    private const string ManageViewSchema = """
        {
          "type": "object",
          "properties": {
            "action": {
              "description": "'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.",
              "type": "string",
              "default": ""
            },
            "entity_name": {
              "description": "Entity Display/logical name (Display Name resolved first).",
              "type": "string",
              "default": ""
            },
            "view_id": {
              "description": "GUID. Required: detail/update/rename/undo.",
              "type": "string",
              "default": ""
            },
            "view_name": {
              "description": "Name contains. 1 match → auto-select; multiple → returns candidates, use view_id.",
              "type": "string",
              "default": ""
            },
            "is_personal_view": {
              "description": "false = system views (savedquery), true = personal views (userquery) — scopes list and view_name resolution.",
              "type": "boolean",
              "default": false
            },
            "fetchxml": {
              "description": "create/update: FetchXML — grid columns are auto-generated from it.",
              "type": "string",
              "default": ""
            },
            "layoutxml": {
              "description": "undo only: .layoutxml.xml backup file path.",
              "type": "string",
              "default": ""
            },
            "cell_updates_json": {
              "description": "JSON array of {cell_name, set_attributes, remove_attributes}.",
              "type": "string",
              "default": ""
            }
          }
        }
        """;

    private static JsonElement Schema(string json) =>
        JsonDocument.Parse(json).RootElement.Clone();

    private static JsonObject Args(string json) =>
        (JsonNode.Parse(json) as JsonObject)!;

    private static IReadOnlyList<ToolValidationError> Validate(string schemaJson, string argumentsJson) =>
        ToolSchemaValidator.Validate(Schema(schemaJson), Args(argumentsJson));

    private static void AssertSingleError(IReadOnlyList<ToolValidationError> errors, string path, string messagePart)
    {
        Assert.AreEqual(1, errors.Count, $"expected exactly one error, got: {string.Join(" | ", errors)}");
        Assert.AreEqual(path, errors[0].Path);
        StringAssert.Contains(errors[0].Message, messagePart);
    }

    // ------------------------------------------------------------------
    // string
    // ------------------------------------------------------------------

    [TestMethod]
    public void StringSchema_ValidString_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"name":{"type":"string"}}}""",
            """{"name":"create"}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void StringSchema_JsonLookingString_StaysString()
    {
        var errors = Validate(
            """{"type":"object","properties":{"json":{"type":"string"}}}""",
            """{"json":"[1,2,{\"a\":true}]"}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void StringSchema_NumberValue_FailsWithPath()
    {
        var errors = Validate(
            """{"type":"object","properties":{"name":{"type":"string"}}}""",
            """{"name":3}""");
        AssertSingleError(errors, "name", "expected \"string\"");
    }

    [TestMethod]
    public void StringSchema_NullValue_Fails()
    {
        // A plain {"type":"string"} does NOT permit null.
        var errors = Validate(
            """{"type":"object","properties":{"name":{"type":"string"}}}""",
            """{"name":null}""");
        AssertSingleError(errors, "name", "got null");
    }

    [TestMethod]
    public void StringSchema_BooleanValue_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"name":{"type":"string"}}}""",
            """{"name":true}""");
        AssertSingleError(errors, "name", "expected \"string\"");
    }

    // ------------------------------------------------------------------
    // boolean
    // ------------------------------------------------------------------

    [TestMethod]
    public void BooleanSchema_TrueAndFalse_Pass()
    {
        var errors = Validate(
            """{"type":"object","properties":{"a":{"type":"boolean"},"b":{"type":"boolean"}}}""",
            """{"a":true,"b":false}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void BooleanSchema_StringValue_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"a":{"type":"boolean"}}}""",
            """{"a":"true"}""");
        AssertSingleError(errors, "a", "expected \"boolean\"");
    }

    // ------------------------------------------------------------------
    // integer
    // ------------------------------------------------------------------

    [TestMethod]
    public void IntegerSchema_IntegralNumber_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"count":{"type":"integer"}}}""",
            """{"count":-42}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void IntegerSchema_FractionalNumber_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"count":{"type":"integer"}}}""",
            """{"count":3.0}""");
        AssertSingleError(errors, "count", "expected \"integer\"");
    }

    [TestMethod]
    public void IntegerSchema_ExponentNumber_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"count":{"type":"integer"}}}""",
            """{"count":1e2}""");
        AssertSingleError(errors, "count", "expected \"integer\"");
    }

    [TestMethod]
    public void IntegerSchema_OutOfInt64Range_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"count":{"type":"integer"}}}""",
            """{"count":9223372036854775808}""");
        AssertSingleError(errors, "count", "expected \"integer\"");
    }

    [TestMethod]
    public void IntegerSchema_StringValue_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"count":{"type":"integer"}}}""",
            """{"count":"3"}""");
        AssertSingleError(errors, "count", "expected \"integer\"");
    }

    // ------------------------------------------------------------------
    // number
    // ------------------------------------------------------------------

    [TestMethod]
    public void NumberSchema_DecimalNumber_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"ratio":{"type":"number"}}}""",
            """{"ratio":0.1}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void NumberSchema_WholeNumberWithFractionNotation_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"ratio":{"type":"number"}}}""",
            """{"ratio":3.0}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void NumberSchema_NonFiniteValue_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"ratio":{"type":"number"}}}""",
            """{"ratio":1e999}""");
        AssertSingleError(errors, "ratio", "expected \"number\"");
    }

    [TestMethod]
    public void NumberSchema_PrecisionLosingValue_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"ratio":{"type":"number"}}}""",
            """{"ratio":1.0000000000000000001}""");
        AssertSingleError(errors, "ratio", "expected \"number\"");
    }

    // ------------------------------------------------------------------
    // unions (type arrays)
    // ------------------------------------------------------------------

    [TestMethod]
    public void UnionWithNull_StringOrNull_Pass()
    {
        var errors = Validate(
            """{"type":"object","properties":{"min_value":{"type":["number","null"]}}}""",
            """{"min_value":null}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void UnionWithNull_Number_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"min_value":{"type":["number","null"]}}}""",
            """{"min_value":1.5}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void UnionWithNull_Boolean_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"min_value":{"type":["number","null"]}}}""",
            """{"min_value":true}""");
        AssertSingleError(errors, "min_value", "expected one of");
    }

    // ------------------------------------------------------------------
    // null handling
    // ------------------------------------------------------------------

    [TestMethod]
    public void NullProperty_SchemaPermitsNull_Passes()
    {
        var errors = Validate(
            """{"type":"object","properties":{"a":{"type":["string","null"]}}}""",
            """{"a":null}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void NullProperty_SchemaPlainString_Fails()
    {
        var errors = Validate(
            """{"type":"object","properties":{"a":{"type":"string"}}}""",
            """{"a":null}""");
        AssertSingleError(errors, "a", "got null");
    }

    // ------------------------------------------------------------------
    // nested objects
    // ------------------------------------------------------------------

    private const string NestedSchema = """
        {
          "type": "object",
          "properties": {
            "target": {
              "type": "object",
              "properties": {
                "table": {"type": "string"},
                "publish": {"type": "boolean"}
              },
              "required": ["table"]
            }
          }
        }
        """;

    [TestMethod]
    public void NestedObject_ValidValues_Pass()
    {
        var errors = Validate(NestedSchema, """{"target":{"table":"contact","publish":true}}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void NestedObject_InvalidChild_UsesDottedPath()
    {
        var errors = Validate(NestedSchema, """{"target":{"table":"contact","publish":"yes"}}""");
        AssertSingleError(errors, "target.publish", "expected \"boolean\"");
    }

    [TestMethod]
    public void NestedObject_MissingNestedRequired_NamesFullPath()
    {
        var errors = Validate(NestedSchema, """{"target":{"publish":true}}""");
        AssertSingleError(errors, "target.table", "required property \"table\" is missing");
    }

    [TestMethod]
    public void NestedObject_NestedAdditionalPropertiesFalse_RejectsUnknownChild()
    {
        var schema = """{"type":"object","properties":{"target":{"type":"object","properties":{"a":{"type":"string"}},"additionalProperties":false}}}""";
        var errors = Validate(schema, """{"target":{"a":"x","b":1}}""");
        AssertSingleError(errors, "target.b", "unknown property");
    }

    // ------------------------------------------------------------------
    // arrays
    // ------------------------------------------------------------------

    [TestMethod]
    public void ArraySchema_ItemsValidatedWithBracketPath()
    {
        var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";
        var errors = Validate(schema, """{"columns":["fullname",42,"emailaddress1"]}""");
        AssertSingleError(errors, "columns[1]", "expected \"string\"");
    }

    [TestMethod]
    public void ArraySchema_EmptyArray_Passes()
    {
        var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";
        var errors = Validate(schema, """{"columns":[]}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void ArraySchema_NonArrayValue_Fails()
    {
        var schema = """{"type":"object","properties":{"columns":{"type":"array","items":{"type":"string"}}}}""";
        var errors = Validate(schema, """{"columns":"a,b"}""");
        AssertSingleError(errors, "columns", "expected \"array\"");
    }

    [TestMethod]
    public void ArraySchema_ItemsWithoutSchema_ItemValuesUnconstrained()
    {
        // The catalog always emits items; without an items schema, item values are unconstrained.
        var schema = """{"type":"object","properties":{"anything":{"type":"array"}}}""";
        var errors = Validate(schema, """{"anything":[1,"two",{"three":3},[4]]}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void ArraySchema_ObjectItems_RecurseWithIndexedDottedPath()
    {
        var schema = """{"type":"object","properties":{"rows":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}}}}""";
        var errors = Validate(schema, """{"rows":[{"name":"a"},{"name":2}]}""");
        AssertSingleError(errors, "rows[1].name", "expected \"string\"");
    }

    // ------------------------------------------------------------------
    // enum
    // ------------------------------------------------------------------

    [TestMethod]
    public void EnumSchema_MemberValue_Passes()
    {
        var schema = """{"type":"object","properties":{"mode":{"type":"string","enum":["read","write"]}}}""";
        var errors = Validate(schema, """{"mode":"write"}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void EnumSchema_CaseDifference_FailsAndListsAllowedValues()
    {
        var schema = """{"type":"object","properties":{"mode":{"type":"string","enum":["read","write"]}}}""";
        var errors = Validate(schema, """{"mode":"READ"}""");
        AssertSingleError(errors, "mode", "not one of the allowed values: \"read\", \"write\"");
    }

    [TestMethod]
    public void EnumSchema_WrongJsonKind_FailsWithTypeError()
    {
        // The declared type is checked first; a boolean can never satisfy a string enum.
        var schema = """{"type":"object","properties":{"mode":{"type":"string","enum":["read","write"]}}}""";
        var errors = Validate(schema, """{"mode":true}""");
        AssertSingleError(errors, "mode", "expected \"string\" but got boolean true");
    }

    [TestMethod]
    public void EnumSchema_IntegerEnum_RespectsDeclaredType()
    {
        var schema = """{"type":"object","properties":{"level":{"type":"integer","enum":[1,2,3]}}}""";
        var valid = Validate(schema, """{"level":2}""");
        Assert.AreEqual(0, valid.Count);
        var invalid = Validate(schema, """{"level":4}""");
        AssertSingleError(invalid, "level", "not one of the allowed values: 1, 2, 3");
    }

    // ------------------------------------------------------------------
    // required and unknown properties
    // ------------------------------------------------------------------

    [TestMethod]
    public void RequiredProperty_Missing_FailsNamingProperty()
    {
        var schema = """{"type":"object","properties":{"a":{"type":"string"},"b":{"type":"integer"}},"required":["a"]}""";
        var errors = Validate(schema, """{"b":1}""");
        AssertSingleError(errors, "a", "required property \"a\" is missing");
    }

    [TestMethod]
    public void RequiredProperty_Present_Passes()
    {
        var schema = """{"type":"object","properties":{"a":{"type":"string"}},"required":["a"]}""";
        var errors = Validate(schema, """{"a":null}""");
        // Present-but-null still fails the string type; presence alone is checked here.
        AssertSingleError(errors, "a", "got null");
        var passing = Validate(schema, """{"a":"x"}""");
        Assert.AreEqual(0, passing.Count);
    }

    [TestMethod]
    public void AdditionalPropertiesFalse_UnknownProperty_FailsWithPath()
    {
        var schema = """{"type":"object","properties":{"a":{"type":"string"}},"additionalProperties":false}""";
        var errors = Validate(schema, """{"a":"x","oops":{"nested":1}}""");
        AssertSingleError(errors, "oops", "unknown property");
    }

    [TestMethod]
    public void AdditionalPropertiesAbsent_UnknownProperty_AllowedBySchemaPolicy()
    {
        var schema = """{"type":"object","properties":{"a":{"type":"string"}}}""";
        var errors = Validate(schema, """{"a":"x","oops":1}""");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void AdditionalPropertiesTrue_UnknownProperty_AllowedBySchemaPolicy()
    {
        var schema = """{"type":"object","properties":{"a":{"type":"string"}},"additionalProperties":true}""";
        var errors = Validate(schema, """{"a":"x","oops":1}""");
        Assert.AreEqual(0, errors.Count);
    }

    // ------------------------------------------------------------------
    // empty objects and bounds
    // ------------------------------------------------------------------

    [TestMethod]
    public void EmptyArguments_EmptyPropertiesSchema_Passes()
    {
        var errors = Validate("""{"type":"object","properties":{}}""", "{}");
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void Bounds_MinimumAndMaximum_Enforced()
    {
        var schema = """{"type":"object","properties":{"count":{"type":"integer","minimum":1,"maximum":10}}}""";
        Assert.AreEqual(0, Validate(schema, """{"count":1}""").Count);
        Assert.AreEqual(0, Validate(schema, """{"count":10}""").Count);
        var low = Validate(schema, """{"count":0}""");
        AssertSingleError(low, "count", "less than minimum 1");
        var high = Validate(schema, """{"count":11}""");
        AssertSingleError(high, "count", "greater than maximum 10");
    }

    [TestMethod]
    public void Bounds_ExclusiveForms_Enforced()
    {
        var schema = """{"type":"object","properties":{"count":{"type":"number","exclusiveMinimum":0,"exclusiveMaximum":5}}}""";
        Assert.AreEqual(0, Validate(schema, """{"count":0.5}""").Count);
        var atMin = Validate(schema, """{"count":0}""");
        AssertSingleError(atMin, "count", "greater than exclusiveMinimum 0");
        var atMax = Validate(schema, """{"count":5}""");
        AssertSingleError(atMax, "count", "less than exclusiveMaximum 5");
    }

    // ------------------------------------------------------------------
    // unsupported constructs
    // ------------------------------------------------------------------

    [TestMethod]
    public void UnsupportedConstruct_OneOf_ProducesExplicitErrorNotCrash()
    {
        var schema = """{"type":"object","properties":{"x":{"oneOf":[{"type":"string"},{"type":"number"}]}}}""";
        var errors = Validate(schema, """{"x":"ok"}""");
        AssertSingleError(errors, "x", "unsupported schema construct \"oneOf\"");
    }

    [TestMethod]
    public void UnsupportedConstruct_AnyOfAllOfRefNotIfDependentRequired_AreRejected()
    {
        foreach (var keyword in new[] { "anyOf", "allOf", "$ref", "not", "if", "dependentRequired" })
        {
            // The keyword sits inside a property schema, where a real schema would carry it.
            var schema = "{\"type\":\"object\",\"properties\":{\"x\":{\"type\":\"string\",\"" + keyword + "\":{}}}}";
            var errors = Validate(schema, """{"x":"ok"}""");
            AssertSingleError(errors, "x", $"unsupported schema construct \"{keyword}\"");
        }
    }

    [TestMethod]
    public void UnsupportedConstruct_AtRoot_IsReportedEvenWithoutArguments()
    {
        var schema = """{"type":"object","properties":{},"not":{}}""";
        var errors = Validate(schema, "{}");
        AssertSingleError(errors, "", "unsupported schema construct \"not\"");
    }

    [TestMethod]
    public void UnsupportedConstruct_InArrayItems_IsReportedWithBracketPath()
    {
        var schema = """{"type":"object","properties":{"cols":{"type":"array","items":{"type":"string","pattern":"^a"}}}}""";
        var errors = Validate(schema, """{"cols":["a"]}""");
        AssertSingleError(errors, "cols[]", "unsupported schema construct \"pattern\"");
    }

    [TestMethod]
    public void UnsupportedConstruct_AdditionalPropertiesObjectSchema_IsRejected()
    {
        var schema = """{"type":"object","properties":{},"additionalProperties":{"type":"string"}}""";
        var errors = Validate(schema, "{}");
        AssertSingleError(errors, "", "unsupported schema construct \"additionalProperties\"");
    }

    [TestMethod]
    public void UnsupportedConstruct_ValidationStopsBeforeValueChecking()
    {
        // With an unsupported construct the validator refuses the schema outright —
        // it must never silently weaken validation.
        var schema = """{"type":"object","properties":{"x":{"type":"string"}},"format":"date"}""";
        var errors = Validate(schema, """{"x":123}""");
        AssertSingleError(errors, "", "unsupported schema construct \"format\"");
    }

    // ------------------------------------------------------------------
    // schema shape guards
    // ------------------------------------------------------------------

    [TestMethod]
    public void SchemaRoot_NonObjectType_IsRejected()
    {
        var errors = Validate("""{"type":"string"}""", "\"x\"");
        AssertSingleError(errors, "", "root must declare type \"object\"");
    }

    [TestMethod]
    public void Schema_MissingOrNotObject_IsReported()
    {
        var validator = ToolSchemaValidator.Validate(Schema("[]"), new JsonObject());
        AssertSingleError(validator, "", "schema is missing or not a JSON object");
    }

    [TestMethod]
    public void Validator_DoesNotMutateArguments()
    {
        var arguments = Args("""{"name":"x"}""");
        var before = arguments.ToJsonString();
        ToolSchemaValidator.Validate(Schema("""{"type":"object","properties":{"name":{"type":"string"}}}"""), arguments);
        Assert.AreEqual(before, arguments.ToJsonString());
    }

    // ------------------------------------------------------------------
    // real catalog snapshot: manage_view
    // ------------------------------------------------------------------

    [TestMethod]
    public void ManageViewSchema_ValidCreateInput_Passes()
    {
        var arguments = Args("""
            {
              "action": "create",
              "entity_name": "contact",
              "view_name": "Contacts for Account Subgrid",
              "fetchxml": "<fetch><entity name='contact' /></fetch>"
            }
            """);
        var errors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), arguments);
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void ManageViewSchema_EmptyArguments_Pass()
    {
        // All manage_view parameters carry defaults and none is required.
        var errors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), new JsonObject());
        Assert.AreEqual(0, errors.Count);
    }

    [TestMethod]
    public void ManageViewSchema_WrongType_ReportsPath()
    {
        var arguments = Args("""{"action":"list","is_personal_view":"yes"}""");
        var errors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), arguments);
        AssertSingleError(errors, "is_personal_view", "expected \"boolean\"");
    }

    [TestMethod]
    public void ManageViewSchema_CellUpdatesJson_IsAStringNotAnArray()
    {
        var arguments = Args("""{"action":"update","view_id":"00000000-0000-0000-0000-000000000000","cell_updates_json":"[{\"cell_name\":\"name\"}]"}""");
        var errors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), arguments);
        Assert.AreEqual(0, errors.Count);

        var asArray = Args("""{"cell_updates_json":[{"cell_name":"name"}]}""");
        var arrayErrors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), asArray);
        AssertSingleError(arrayErrors, "cell_updates_json", "expected \"string\"");
    }

    [TestMethod]
    public void ManageViewSchema_MultipleErrors_AreAllReportedInSchemaOrder()
    {
        var arguments = Args("""{"is_personal_view":"yes","view_id":5}""");
        var errors = ToolSchemaValidator.Validate(Schema(ManageViewSchema), arguments);
        Assert.AreEqual(2, errors.Count);
        // Document order = schema property order: view_id precedes is_personal_view.
        Assert.AreEqual("view_id", errors[0].Path);
        Assert.AreEqual("is_personal_view", errors[1].Path);
    }

    [TestMethod]
    public void CatalogShapedNullableDefaults_AreValidated()
    {
        // Real shapes from manage_column (["number","null"]) and manage_deleted_records (array of strings).
        var schema = """
            {
              "type": "object",
              "properties": {
                "min_value": {"description":"Numeric types: minimum value.","type":["number","null"],"default":null},
                "record_ids": {"description":"Array of GUIDs.","type":"array","items":{"type":"string"},"default":null}
              }
            }
            """;
        Assert.AreEqual(0, Validate(schema, """{"min_value":null,"record_ids":["00000000-0000-0000-0000-000000000000"]}""").Count);
        var badItem = Validate(schema, """{"record_ids":[5]}""");
        AssertSingleError(badItem, "record_ids[0]", "expected \"string\"");
    }
}
