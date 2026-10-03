using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Function
{
    /// <summary>
    /// Structural validator for the DevKit function definition JSON:
    /// <code>
    /// {
    ///   "displayName": "...", "description": "...",
    ///   "formula": "{ Output: Input }",
    ///   "inputs":  [ { "name": "In",  "type": "integer" } ],
    ///   "outputs": [ { "name": "Out", "type": "decimal" } ],
    ///   "tableReferences": [ "account" ]
    /// }
    /// </code>
    /// This is a local, structural check only — it never proves the formula
    /// compiles on the Dataverse host. Unknown keys, duplicate names, empty
    /// formulas, types outside the six scalars, and non-identifier names are
    /// rejected.
    /// </summary>
    internal static class FunctionDefinitionValidator
    {
        internal static readonly HashSet<string> AllowedKeys = new(StringComparer.Ordinal)
        {
            "displayName", "description", "formula", "inputs", "outputs", "tableReferences"
        };

        internal static readonly HashSet<string> AllowedTypes = new(StringComparer.Ordinal)
        {
            "boolean", "datetime", "decimal", "float", "integer", "string"
        };

        /// <summary>
        /// Validate the JSON string. Returns false with issues when invalid;
        /// issues are always English diagnostics, never server compile results.
        /// </summary>
        internal static bool TryValidate(string definitionJson, out List<string> issues, out JsonElement definition)
        {
            issues = [];
            definition = default;

            if (string.IsNullOrWhiteSpace(definitionJson))
            {
                issues.Add("definition_json is empty.");
                return false;
            }

            JsonDocument document;
            try
            {
                document = JsonDocument.Parse(definitionJson);
            }
            catch (JsonException ex)
            {
                issues.Add($"definition_json is not valid JSON: {ex.Message}");
                return false;
            }

            using (document)
            {
                if (document.RootElement.ValueKind != JsonValueKind.Object)
                {
                    issues.Add("definition_json must be a JSON object.");
                    return false;
                }

                definition = document.RootElement.Clone();

                foreach (var property in document.RootElement.EnumerateObject())
                {
                    if (!AllowedKeys.Contains(property.Name))
                        issues.Add($"Unknown key '{property.Name}' in definition_json. Allowed keys: {string.Join(", ", AllowedKeys.OrderBy(k => k, StringComparer.Ordinal))}.");
                }

                var displayName = GetString(document.RootElement, "displayName");
                if (string.IsNullOrWhiteSpace(displayName))
                    issues.Add("displayName is required and must be non-empty.");
                else if (displayName.Length > 100)
                    issues.Add($"displayName exceeds 100 characters ({displayName.Length}).");

                var formula = GetString(document.RootElement, "formula");
                if (string.IsNullOrWhiteSpace(formula))
                    issues.Add("formula is required and must be non-empty.");
                else if (!formula.TrimStart().StartsWith("{", StringComparison.Ordinal))
                    issues.Add("formula must be a Power Fx record expression starting with '{' (e.g. \"{ Total: Quantity * UnitPrice }\").");

                ValidateParameterList(document.RootElement, "inputs", issues);
                ValidateParameterList(document.RootElement, "outputs", issues);

                if (document.RootElement.TryGetProperty("tableReferences", out var tables))
                {
                    if (tables.ValueKind != JsonValueKind.Array)
                        issues.Add("tableReferences must be an array of entity logical names.");
                    else if (tables.GetArrayLength() > 5)
                        issues.Add($"tableReferences exceeds the platform limit of 5 table references ({tables.GetArrayLength()}).");
                }

                return issues.Count == 0;
            }
        }

        private static void ValidateParameterList(JsonElement root, string listKey, List<string> issues)
        {
            if (!root.TryGetProperty(listKey, out var list)) return;
            if (list.ValueKind != JsonValueKind.Array)
            {
                issues.Add($"{listKey} must be an array of {{\"name\": ..., \"type\": ...}} objects.");
                return;
            }

            var seen = new HashSet<string>(StringComparer.Ordinal);
            var index = 0;
            foreach (var item in list.EnumerateArray())
            {
                var label = $"{listKey}[{index++}]";
                if (item.ValueKind != JsonValueKind.Object)
                {
                    issues.Add($"{label} must be an object with name/type.");
                    continue;
                }

                foreach (var property in item.EnumerateObject())
                {
                    if (property.Name is not ("name" or "type" or "description"))
                        issues.Add($"{label}: unknown key '{property.Name}' (allowed: name, type, description).");
                }

                var name = GetString(item, "name");
                if (string.IsNullOrWhiteSpace(name))
                {
                    issues.Add($"{label}: name is required.");
                }
                else
                {
                    if (!char.IsLetter(name[0]) || name.Any(c => !char.IsLetterOrDigit(c)))
                        issues.Add($"{label}: name '{name}' must start with a letter and contain only letters/digits.");
                    if (!seen.Add(name))
                        issues.Add($"{label}: duplicate name '{name}'.");
                }

                var type = GetString(item, "type");
                if (string.IsNullOrWhiteSpace(type))
                    issues.Add($"{label}: type is required.");
                else if (!AllowedTypes.Contains(type))
                    issues.Add($"{label}: type '{type}' is outside the supported scalars ({string.Join(", ", AllowedTypes.OrderBy(t => t, StringComparer.Ordinal))}).");
            }
        }

        private static string GetString(JsonElement element, string key)
        {
            if (!element.TryGetProperty(key, out var value) || value.ValueKind != JsonValueKind.String)
                return null;
            return value.GetString();
        }
    }
}
