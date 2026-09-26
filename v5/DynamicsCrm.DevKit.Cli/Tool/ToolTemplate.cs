#nullable enable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Generates a deterministic JSON request template ("example") for a tool input schema.
///
/// Rules:
/// - Schema <c>default</c> values are used where present, including inside nested objects.
///   Optional parent objects are NOT materialized solely because a nested child has a default.
/// - A JSON <c>null</c> default is used when the schema actually permits null at that
///   location; otherwise it is treated as "no value" (the property is omitted, or a
///   placeholder is emitted when the property is required).
/// - Required properties without a usable default receive clearly-incomplete placeholder
///   values: string → <c>"REQUIRED"</c>, integer/number → <c>0</c>, boolean → <c>false</c>,
///   enum → the first declared enum value, array → <c>[]</c>, object → recursion.
/// - Optional properties without a default are omitted.
/// - Property order follows schema property order, so the output is deterministic.
/// - Placeholder paths (dotted paths, array items as <c>name[0]</c>) are returned so callers
///   can emit diagnostics on stderr while the document itself stays valid JSON.
/// - No value is ever invented that the schema does not declare: no tenant identifiers,
///   URLs, GUIDs, or operation names.
/// </summary>
public static class ToolTemplate
{
    /// <summary>Placeholder string constant for required string properties without a default.</summary>
    public const string RequiredStringPlaceholder = "REQUIRED";

    public static ToolExampleResult BuildExample(JsonElement inputSchema)
    {
        if (inputSchema.ValueKind != JsonValueKind.Object ||
            JsonNode.Parse(inputSchema.GetRawText()) is not JsonObject rootSchema)
        {
            throw new ToolInputException("tool input schema is missing or not a JSON object", new[]
            {
                new ToolValidationError { Path = "", Message = "tool input schema is missing or not a JSON object" }
            });
        }

        var template = new JsonObject();
        var placeholders = new List<string>();
        BuildObject(rootSchema, template, path: "", placeholders);
        return new ToolExampleResult
        {
            Template = template,
            Placeholders = placeholders.ToArray()
        };
    }

    private static void BuildObject(JsonObject schema, JsonObject target, string path, List<string> placeholders)
    {
        var properties = schema.TryGetPropertyValue("properties", out var propertiesNode) && propertiesNode is JsonObject props
            ? props
            : null;
        if (properties is null)
            return;

        var requiredNames = RequiredNames(schema);

        foreach (var (name, propertyNode) in properties)
        {
            if (propertyNode is not JsonObject propertySchema)
                continue;

            var propertyPath = path.Length == 0 ? name : $"{path}.{name}";
            var isRequired = requiredNames.Contains(name);

            if (propertySchema.TryGetPropertyValue("default", out var defaultNode))
            {
                if (defaultNode is not null)
                {
                    target[name] = defaultNode.DeepClone();
                    continue;
                }

                // JSON null default: usable only where the schema permits null.
                if (PermitsNull(propertySchema))
                {
                    target[name] = null;
                    continue;
                }

                if (!isRequired)
                    continue;
                // Fall through to the placeholder rules below.
            }
            else if (!isRequired)
            {
                continue;
            }

            target[name] = BuildPlaceholder(propertySchema, propertyPath, placeholders);
        }
    }

    /// <summary>Builds the clearly-incomplete value for a required property without a usable default.</summary>
    private static JsonNode? BuildPlaceholder(JsonObject schema, string path, List<string> placeholders)
    {
        if (schema.TryGetPropertyValue("enum", out var enumNode) && enumNode is JsonArray allowed && allowed.Count > 0)
        {
            placeholders.Add(path);
            return allowed[0]?.DeepClone();
        }

        var type = PickType(schema);
        switch (type)
        {
            case "string":
                placeholders.Add(path);
                return RequiredStringPlaceholder;

            case "integer":
            case "number":
                placeholders.Add(path);
                return 0;

            case "boolean":
                placeholders.Add(path);
                return false;

            case "object":
            {
                var nested = new JsonObject();
                BuildObject(schema, nested, path, placeholders);
                // An object fully specified by defaults is not incomplete; one where
                // nothing could be materialized is.
                if (nested.Count == 0)
                    placeholders.Add(path);
                return nested;
            }

            case "array":
                placeholders.Add(path);
                return new JsonArray();

            default:
                // No declared type (or only "null"): no safe value can be guessed.
                placeholders.Add(path);
                return null;
        }
    }

    /// <summary>Returns the declared type to use for a placeholder: the first non-null declared type, or "null"/empty when unconstrained.</summary>
    private static string? PickType(JsonObject schema)
    {
        if (!schema.TryGetPropertyValue("type", out var typeNode))
            return null;

        switch (typeNode)
        {
            case JsonValue typeValue when typeValue.TryGetValue<string>(out var single):
                return single;
            case JsonArray typeArray:
                return typeArray.FirstOrDefault(entry => entry is JsonValue value &&
                                                        value.TryGetValue<string>(out var name) &&
                                                        name != "null") is JsonValue chosen
                    ? chosen.GetValue<string>()
                    : typeArray.Select(entry => entry is JsonValue value && value.TryGetValue<string>(out var name) ? name : null)
                               .FirstOrDefault(name => name is not null);
            default:
                return null;
        }
    }

    private static bool PermitsNull(JsonObject schema)
    {
        if (!schema.TryGetPropertyValue("type", out var typeNode))
            return true;

        return typeNode switch
        {
            JsonValue typeValue when typeValue.TryGetValue<string>(out var single) => single == "null",
            JsonArray typeArray => typeArray.Any(entry => entry is JsonValue value &&
                                                          value.TryGetValue<string>(out var name) &&
                                                          name == "null"),
            _ => true
        };
    }

    private static HashSet<string> RequiredNames(JsonObject schema)
    {
        var names = new HashSet<string>(StringComparer.Ordinal);
        if (schema.TryGetPropertyValue("required", out var requiredNode) && requiredNode is JsonArray required)
        {
            foreach (var entry in required)
            {
                if (entry is JsonValue value && value.TryGetValue<string>(out var name))
                    names.Add(name);
            }
        }

        return names;
    }
}
