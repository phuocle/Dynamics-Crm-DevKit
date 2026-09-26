#nullable enable
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Validates a CLI argument object against the MCP input schema advertised for a tool.
/// Pure and read-only: never mutates <paramref name="arguments"/>, performs no I/O and
/// no connection. An empty result list means the contract is satisfied.
///
/// Supported schema constructs (the set emitted by the MCP SDK for this catalog, plus
/// the contract keywords the CLI pipeline relies on):
/// <list type="bullet">
/// <item><c>type</c> — a single type string, or an array of type strings (union, e.g. <c>["string","null"]</c>).</item>
/// <item><c>properties</c> — object children, validated recursively.</item>
/// <item><c>required</c> — property names that must be present.</item>
/// <item><c>additionalProperties</c> — <c>false</c> rejects unknown properties; absent or <c>true</c> allows them. The policy always comes from the schema.</item>
/// <item><c>items</c> — array item schema, validated recursively; when absent, item values are unconstrained.</item>
/// <item><c>enum</c> — exact value membership, respecting the declared type.</item>
/// <item><c>minimum</c>/<c>maximum</c>/<c>exclusiveMinimum</c>/<c>exclusiveMaximum</c> — numeric bounds (numeric draft-06+ form for the exclusive keywords).</item>
/// <item>Metadata keywords that carry no validation semantics and are ignored: <c>description</c>, <c>default</c>, <c>title</c>, <c>$schema</c>, <c>$comment</c>, <c>examples</c>.</item>
/// </list>
/// Any other keyword (oneOf, anyOf, allOf, $ref, not, if, dependentRequired, pattern,
/// format, ...) produces an explicit "unsupported schema construct" error — never a
/// silent pass.
///
/// Error paths are dotted property paths; array items are addressed with zero-based
/// index brackets: <c>options.publish</c>, <c>columns[0]</c>, <c>rows[2].name</c>.
/// The root object itself has the empty path <c>""</c>.
/// </summary>
public static class ToolSchemaValidator
{
    /// <summary>Keywords that are recognized but carry no validation semantics.</summary>
    private static readonly HashSet<string> MetadataKeywords = new(StringComparer.Ordinal)
    {
        "description", "default", "title", "$schema", "$comment", "examples"
    };

    /// <summary>Keywords with validation semantics understood by this validator.</summary>
    private static readonly HashSet<string> SupportedKeywords = new(StringComparer.Ordinal)
    {
        "type", "properties", "required", "additionalProperties", "items", "enum",
        "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum"
    };

    public static IReadOnlyList<ToolValidationError> Validate(JsonElement inputSchema, JsonObject arguments)
    {
        if (!TryParseRootSchema(inputSchema, out var rootSchema, out var schemaError))
            return new[] { schemaError };

        var errors = new List<ToolValidationError>();

        CollectUnsupportedConstructs(rootSchema, "", errors);
        if (errors.Count > 0)
            return errors;

        if (!RootDeclaresObject(rootSchema, out var rootTypeError))
        {
            errors.Add(rootTypeError);
            return errors;
        }

        ValidateObject(rootSchema, arguments, path: "", errors);
        return errors;
    }

    /// <summary>
    /// Checks that a tool input schema only uses constructs this validator implements.
    /// Used by the input pipeline before any argument processing, so an unsupported
    /// schema can never degrade into silently weaker validation.
    /// </summary>
    internal static IReadOnlyList<ToolValidationError> CheckSchemaSupport(JsonElement inputSchema)
    {
        if (!TryParseRootSchema(inputSchema, out var rootSchema, out var schemaError))
            return new[] { schemaError };

        var errors = new List<ToolValidationError>();
        CollectUnsupportedConstructs(rootSchema, "", errors);
        if (errors.Count == 0 && !RootDeclaresObject(rootSchema, out var rootTypeError))
            errors.Add(rootTypeError);
        return errors;
    }

    /// <summary>
    /// Validates one value against a property schema. Used by the input pipeline to
    /// check converted --set/--add values (type, enum membership, bounds) as soon as
    /// they are produced.
    /// </summary>
    internal static IReadOnlyList<ToolValidationError> ValidateNodeAgainstSchema(JsonElement propertySchema, JsonNode? value, string path)
    {
        if (propertySchema.ValueKind != JsonValueKind.Object ||
            JsonNode.Parse(propertySchema.GetRawText()) is not JsonObject schemaObject)
        {
            return new[]
            {
                new ToolValidationError { Path = path, Message = "property schema is missing or not a JSON object" }
            };
        }

        var errors = new List<ToolValidationError>();
        ValidateValue(schemaObject, value, path, errors);
        return errors;
    }

    /// <summary>Returns the declared property schema, or null when the schema does not declare the property.</summary>
    internal static JsonObject? PropertySchema(JsonObject schema, string name) =>
        schema.TryGetPropertyValue("properties", out var propertiesNode) &&
        propertiesNode is JsonObject properties &&
        properties.TryGetPropertyValue(name, out var propertyNode) &&
        propertyNode is JsonObject propertyObject
            ? propertyObject
            : null;

    /// <summary>Returns the declared type set; empty when the schema declares no <c>type</c> (unconstrained).</summary>
    internal static HashSet<string> DeclaredTypes(JsonObject schema)
    {
        var types = new HashSet<string>(StringComparer.Ordinal);
        if (!schema.TryGetPropertyValue("type", out var typeNode))
            return types;

        switch (typeNode)
        {
            case JsonValue typeValue when typeValue.TryGetValue<string>(out var single):
                types.Add(single);
                break;
            case JsonArray typeArray:
                foreach (var entry in typeArray)
                {
                    if (entry is JsonValue entryValue && entryValue.TryGetValue<string>(out var typeName))
                        types.Add(typeName);
                }
                break;
        }

        return types;
    }

    /// <summary>True when a string value is acceptable at this location (unconstrained schemas permit every type).</summary>
    internal static bool PermitsString(JsonObject schema) =>
        PermitsType(schema, "string");

    /// <summary>True when an object value is acceptable at this location.</summary>
    internal static bool PermitsObject(JsonObject schema) =>
        PermitsType(schema, "object");

    private static bool PermitsType(JsonObject schema, string type)
    {
        var declaredTypes = DeclaredTypes(schema);
        return declaredTypes.Count == 0 || declaredTypes.Contains(type);
    }

    /// <summary>Human-readable description of a JSON node, used in error messages.</summary>
    internal static string DescribeValue(JsonNode? value)
    {
        if (value is null)
            return "null";
        return value.GetValueKind() switch
        {
            JsonValueKind.String => $"string {value.ToJsonString()}",
            JsonValueKind.True or JsonValueKind.False => $"boolean {value.ToJsonString()}",
            JsonValueKind.Number => $"number {value.ToJsonString()}",
            JsonValueKind.Object => "an object",
            JsonValueKind.Array => "an array",
            _ => value.GetValueKind().ToString()
        };
    }

    /// <summary>
    /// A number literal is accepted when its invariant double conversion, re-expressed
    /// with the shortest round-trippable form, is numerically identical to the original
    /// literal. This rejects non-finite results (e.g. <c>1e999</c>) and literals that
    /// lose precision when carried as a double (e.g. <c>1.0000000000000000001</c>).
    /// </summary>
    internal static bool IsRoundTripSafe(string raw)
    {
        if (!double.TryParse(raw, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed))
            return false;
        if (!double.IsFinite(parsed))
            return false;

        var roundTripped = parsed.ToString("R", CultureInfo.InvariantCulture);
        var originalIsDecimal = decimal.TryParse(raw, NumberStyles.Float, CultureInfo.InvariantCulture, out var originalDecimal);
        var roundTripIsDecimal = decimal.TryParse(roundTripped, NumberStyles.Float, CultureInfo.InvariantCulture, out var roundTripDecimal);

        if (originalIsDecimal != roundTripIsDecimal)
            return false;
        return !originalIsDecimal || originalDecimal == roundTripDecimal;
    }

    private static bool TryParseRootSchema(JsonElement inputSchema, out JsonObject rootSchema, out ToolValidationError error)
    {
        if (inputSchema.ValueKind == JsonValueKind.Object &&
            JsonNode.Parse(inputSchema.GetRawText()) is JsonObject parsed)
        {
            rootSchema = parsed;
            error = null!;
            return true;
        }

        rootSchema = null!;
        error = new ToolValidationError
        {
            Path = "",
            Message = "tool input schema is missing or not a JSON object"
        };
        return false;
    }

    private static bool RootDeclaresObject(JsonObject rootSchema, out ToolValidationError error)
    {
        var rootTypes = DeclaredTypes(rootSchema);
        if (rootTypes.Count == 0 || rootTypes.Contains("object"))
        {
            error = null!;
            return true;
        }

        error = new ToolValidationError
        {
            Path = "",
            Message = "tool input schema root must declare type \"object\""
        };
        return false;
    }

    private static void ValidateObject(JsonObject schema, JsonObject value, string path, List<ToolValidationError> errors)
    {
        var properties = schema.TryGetPropertyValue("properties", out var propertiesNode) && propertiesNode is JsonObject props
            ? props
            : null;

        // Present properties, in schema property order (deterministic document order).
        if (properties is not null)
        {
            foreach (var (name, propertySchema) in properties)
            {
                if (propertySchema is not JsonObject propertyObjectSchema)
                {
                    errors.Add(new ToolValidationError
                    {
                        Path = Join(path, name),
                        Message = "property schema is not a JSON object"
                    });
                    continue;
                }

                if (value.TryGetPropertyValue(name, out var propertyValue))
                    ValidateValue(propertyObjectSchema, propertyValue, Join(path, name), errors);
            }
        }

        // Required properties, in schema order.
        if (schema.TryGetPropertyValue("required", out var requiredNode) && requiredNode is JsonArray required)
        {
            foreach (var requiredNameNode in required)
            {
                if (requiredNameNode is not JsonValue requiredNameValue ||
                    !requiredNameValue.TryGetValue<string>(out var requiredName))
                    continue;
                if (!value.ContainsKey(requiredName))
                {
                    errors.Add(new ToolValidationError
                    {
                        Path = Join(path, requiredName),
                        Message = $"required property \"{requiredName}\" is missing"
                    });
                }
            }
        }

        // Unknown-property policy comes from the schema, never from the CLI.
        if (schema.TryGetPropertyValue("additionalProperties", out var additionalNode))
        {
            if (additionalNode is JsonValue additionalValue && additionalValue.TryGetValue<bool>(out var allow) && !allow)
            {
                foreach (var (name, _) in value)
                {
                    if (properties is not null && properties.ContainsKey(name))
                        continue;
                    errors.Add(new ToolValidationError
                    {
                        Path = Join(path, name),
                        Message = "unknown property; the schema does not allow additional properties"
                    });
                }
            }
        }
    }

    private static void ValidateValue(JsonObject schema, JsonNode? value, string path, List<ToolValidationError> errors)
    {
        var declaredTypes = DeclaredTypes(schema);

        if (declaredTypes.Count > 0)
        {
            var actualKind = value is null ? JsonValueKind.Null : value.GetValueKind();
            if (!MatchesAnyDeclaredType(declaredTypes, value, actualKind))
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"expected {DescribeTypes(declaredTypes)} but got {DescribeValue(value)}"
                });
                return;
            }
        }

        ValidateEnum(schema, value, path, errors);
        ValidateBounds(schema, value, path, errors);

        switch (value)
        {
            case JsonObject nestedObject:
                ValidateObject(schema, nestedObject, path, errors);
                break;
            case JsonArray array:
            {
                if (schema.TryGetPropertyValue("items", out var itemsNode))
                {
                    if (itemsNode is not JsonObject itemsSchema)
                    {
                        errors.Add(new ToolValidationError
                        {
                            Path = path,
                            Message = "array \"items\" schema is not a JSON object"
                        });
                        break;
                    }

                    for (var index = 0; index < array.Count; index++)
                        ValidateValue(itemsSchema, array[index], $"{path}[{index}]", errors);
                }
                // No "items" schema: item values are unconstrained.
                break;
            }
        }
    }

    private static void ValidateEnum(JsonObject schema, JsonNode? value, string path, List<ToolValidationError> errors)
    {
        if (!schema.TryGetPropertyValue("enum", out var enumNode) || enumNode is not JsonArray allowed)
            return;

        var valueElement = value is null ? default : value.Deserialize<JsonElement>();
        foreach (var candidate in allowed)
        {
            if (candidate is null)
            {
                if (value is null)
                    return;
                continue;
            }

            var candidateElement = candidate.Deserialize<JsonElement>();
            if (JsonElement.DeepEquals(valueElement, candidateElement))
                return;
        }

        var allowedText = string.Join(", ", allowed.Select(a => a is null ? "null" : a.ToJsonString()));
        errors.Add(new ToolValidationError
        {
            Path = path,
            Message = $"value {(value is null ? "null" : value.ToJsonString())} is not one of the allowed values: {allowedText}"
        });
    }

    private static void ValidateBounds(JsonObject schema, JsonNode? value, string path, List<ToolValidationError> errors)
    {
        if (value is not JsonValue || value.GetValueKind() != JsonValueKind.Number)
            return;

        if (!TryGetDouble(value, out var number))
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"number value {value.ToJsonString()} cannot be compared against schema bounds"
            });
            return;
        }

        if (schema.TryGetPropertyValue("minimum", out var minimumNode) && TryGetDouble(minimumNode, out var minimum) && number < minimum)
            errors.Add(NewBoundError(path, $"value {FormatNumber(number)} is less than minimum {FormatNumber(minimum)}"));

        if (schema.TryGetPropertyValue("maximum", out var maximumNode) && TryGetDouble(maximumNode, out var maximum) && number > maximum)
            errors.Add(NewBoundError(path, $"value {FormatNumber(number)} is greater than maximum {FormatNumber(maximum)}"));

        if (schema.TryGetPropertyValue("exclusiveMinimum", out var exclusiveMinimumNode) &&
            TryGetDouble(exclusiveMinimumNode, out var exclusiveMinimum) &&
            number <= exclusiveMinimum)
            errors.Add(NewBoundError(path, $"value {FormatNumber(number)} must be greater than exclusiveMinimum {FormatNumber(exclusiveMinimum)}"));

        if (schema.TryGetPropertyValue("exclusiveMaximum", out var exclusiveMaximumNode) &&
            TryGetDouble(exclusiveMaximumNode, out var exclusiveMaximum) &&
            number >= exclusiveMaximum)
            errors.Add(NewBoundError(path, $"value {FormatNumber(number)} must be less than exclusiveMaximum {FormatNumber(exclusiveMaximum)}"));
    }

    private static ToolValidationError NewBoundError(string path, string message) => new() { Path = path, Message = message };

    /// <summary>
    /// Fails fast when the schema uses constructs this validator does not implement, so
    /// an unsupported schema can never degrade into silently weaker validation.
    /// </summary>
    private static void CollectUnsupportedConstructs(JsonObject schema, string path, List<ToolValidationError> errors)
    {
        foreach (var (keyword, keywordValue) in schema)
        {
            if (MetadataKeywords.Contains(keyword))
                continue;

            if (!SupportedKeywords.Contains(keyword))
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"unsupported schema construct \"{keyword}\""
                });
                continue;
            }

            if (keyword == "additionalProperties" &&
                keywordValue is not (JsonValue or null))
            {
                // Only the boolean policy is supported; a full subschema is not.
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = "unsupported schema construct \"additionalProperties\" as an object schema"
                });
                continue;
            }

            if (keyword == "properties" && keywordValue is JsonObject properties)
            {
                foreach (var (name, propertySchema) in properties)
                {
                    if (propertySchema is JsonObject propertyObjectSchema)
                        CollectUnsupportedConstructs(propertyObjectSchema, Join(path, name), errors);
                }
            }
            else if (keyword == "items" && keywordValue is JsonObject itemsSchema)
            {
                CollectUnsupportedConstructs(itemsSchema, $"{path}[]", errors);
            }
        }
    }

    private static bool MatchesAnyDeclaredType(HashSet<string> declaredTypes, JsonNode? value, JsonValueKind actualKind)
    {
        foreach (var type in declaredTypes)
        {
            if (MatchesType(type, value, actualKind))
                return true;
        }

        return false;
    }

    private static bool MatchesType(string type, JsonNode? value, JsonValueKind actualKind)
    {
        switch (type)
        {
            case "string":
                return actualKind == JsonValueKind.String;
            case "boolean":
                return actualKind is JsonValueKind.True or JsonValueKind.False;
            case "integer":
                if (actualKind != JsonValueKind.Number)
                    return false;
                // "3.0" and "1e2" are not integers here: the raw token must parse as Int64,
                // which also rejects values outside the Int64 range.
                return value is JsonValue integerValue && integerValue.TryGetValue<long>(out _);
            case "number":
                if (actualKind != JsonValueKind.Number)
                    return false;
                return value is JsonValue numberValue && IsRoundTripSafe(numberValue.ToJsonString());
            case "object":
                return actualKind == JsonValueKind.Object;
            case "array":
                return actualKind == JsonValueKind.Array;
            case "null":
                return actualKind == JsonValueKind.Null;
            default:
                return false;
        }
    }

    private static bool TryGetDouble(JsonNode? node, out double value)
    {
        value = 0;
        return node is JsonValue numberValue &&
               numberValue.GetValueKind() == JsonValueKind.Number &&
               double.TryParse(numberValue.ToJsonString(), NumberStyles.Float, CultureInfo.InvariantCulture, out value) &&
               double.IsFinite(value);
    }

    private static string FormatNumber(double value) =>
        value.ToString("R", CultureInfo.InvariantCulture);

    private static string DescribeTypes(HashSet<string> declaredTypes)
    {
        var ordered = declaredTypes.OrderBy(t => t, StringComparer.Ordinal).Select(t => $"\"{t}\"");
        return declaredTypes.Count == 1 ? ordered.Single() : $"one of {string.Join(", ", ordered)}";
    }

    /// <summary>Joins a parent path and a property name with a dot (<c>""</c> + <c>action</c> → <c>action</c>).</summary>
    internal static string Join(string parent, string name) =>
        parent.Length == 0 ? name : $"{parent}.{name}";
}
