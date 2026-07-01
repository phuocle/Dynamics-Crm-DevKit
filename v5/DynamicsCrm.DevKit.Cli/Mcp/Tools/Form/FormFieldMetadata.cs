using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormFieldMetadata
    {
        private readonly ServiceClient _serviceClient;

        public FormFieldMetadata(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public Dictionary<string, AttributeMetadata> LoadEntityAttributeMap(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Attributes
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            var attrMap = response.EntityMetadata.Attributes
                .ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);

            // Auto-correct image backing fields (e.g. v4_37imageid -> v4_37image)
            // Image columns have AttributeOf pointing to their backing UniqueIdentifier field.
            // AI agents may pass the backing field name instead of the actual image field.
            // Overwrite the backing field entry in attrMap so it resolves as ImageAttributeMetadata.
            foreach (var attr in attrMap.Values.ToList())
            {
                if (attr is ImageAttributeMetadata imgAttr && !string.IsNullOrEmpty(imgAttr.AttributeOf)
                    && attrMap.ContainsKey(imgAttr.AttributeOf))
                {
                    attrMap[imgAttr.AttributeOf] = imgAttr;
                }
            }

            return attrMap;
        }

        public static Dictionary<string, string> ResolveFieldReferences(string entityName,
            HashSet<string> referencedFields, Dictionary<string, AttributeMetadata> attrMap)
        {
            var fieldNameMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (referencedFields.Count == 0) return fieldNameMap;

            var candidates = BuildFieldCandidates(attrMap);

            foreach (var fieldName in referencedFields
                         .Where(f => !string.IsNullOrWhiteSpace(f))
                         .Distinct(StringComparer.OrdinalIgnoreCase))
            {
                var result = DisplayNameFirstResolver.Resolve(
                    fieldName,
                    candidates,
                    "[AmbiguousField]",
                    "[NotFoundField]",
                    $"Tip: Use get_tables(entity_name='{entityName}') to list fields before calling manage_form.",
                    "operations field");

                if (!result.IsSuccess)
                    throw new FormXmlOperationsException($"[BuildFormXML] ERROR -- {result.Error}");

                var canonicalName = FormXmlHelpers.CorrectFieldName(fieldName, result.Value);
                fieldNameMap[fieldName] = canonicalName;
                attrMap[canonicalName] = result.Value;
                if (!string.Equals(fieldName, canonicalName, StringComparison.OrdinalIgnoreCase))
                    attrMap[fieldName] = result.Value;
            }

            return fieldNameMap;
        }

        public static List<JsonElement> NormalizeFieldReferences(List<JsonElement> ops,
            IReadOnlyDictionary<string, string> fieldNameMap)
        {
            if (fieldNameMap == null || fieldNameMap.Count == 0) return ops;

            var normalized = new List<JsonElement>(ops.Count);
            foreach (var op in ops)
            {
                var node = JsonNode.Parse(op.GetRawText());
                if (node is not JsonObject obj)
                {
                    normalized.Add(op.Clone());
                    continue;
                }

                NormalizeFieldProperties(obj, null, fieldNameMap);
                NormalizeEventTarget(obj, fieldNameMap);
                NormalizeManageFieldsPosition(obj, fieldNameMap);
                normalized.Add(ToJsonElement(obj));
            }

            return normalized;
        }

        public static HashSet<string> CollectFieldNames(List<JsonElement> ops)
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var op in ops)
            {
                var action = FormXmlHelpers.GetStringProp(op, "action")?.ToLowerInvariant() ?? "";
                if (action.StartsWith("remove_")) continue;
                if (string.Equals(action, "manage_event", StringComparison.OrdinalIgnoreCase))
                    CollectFieldTarget(op, names);
                if (string.Equals(action, "manage_fields", StringComparison.OrdinalIgnoreCase))
                    CollectPositionFieldReference(op, names);
                if (action == "add_header_fields")
                {
                    CollectFieldsFromArray(op, "fields", names);
                    continue;
                }

                CollectFieldsFromArray(op, "fields", names);
                if (op.TryGetProperty("sections", out var sections) && sections.ValueKind == JsonValueKind.Array)
                {
                    foreach (var sec in sections.EnumerateArray())
                        CollectFieldsFromArray(sec, "fields", names);
                }
            }
            return names;
        }

        public static (string fieldName, string label, bool disabled, bool visible,
            int colspan, int rowspan, bool showlabel, bool hideOnPhone) ParseFieldSpec(JsonElement fieldEl)
        {
            if (fieldEl.ValueKind == JsonValueKind.String)
            {
                return (fieldEl.GetString(), null, false, true, 1, 1, true, false);
            }

            var fieldName = FormXmlHelpers.GetStringProp(fieldEl, "field")
                ?? throw new InvalidOperationException("Field object must have 'field' property.");
            var label = FormXmlHelpers.GetStringProp(fieldEl, "label");
            var disabled = FormXmlHelpers.GetBoolProp(fieldEl, "disabled", false);
            var visible = FormXmlHelpers.GetBoolProp(fieldEl, "visible", true);
            var colspan = FormXmlHelpers.GetIntProp(fieldEl, "colspan", 1);
            var rowspan = FormXmlHelpers.GetIntProp(fieldEl, "rowspan", 1);
            var showlabel = FormXmlHelpers.GetBoolProp(fieldEl, "showlabel", true);
            var hideOnPhone = FormXmlHelpers.GetBoolProp(fieldEl, "hide_on_phone", false);

            return (fieldName, label, disabled, visible, colspan, rowspan, showlabel, hideOnPhone);
        }

        public static void ValidateFieldsExist(string entityName,
            HashSet<string> referencedFields, Dictionary<string, AttributeMetadata> attrMap)
        {
            var missingFields = referencedFields.Where(f => !attrMap.ContainsKey(f)).ToList();
            if (missingFields.Count == 0) return;

            var sb = new StringBuilder();
            sb.AppendLine($"[BuildFormXML] ERROR -- Field(s) not found in entity '{entityName}' metadata.");
            foreach (var f in missingFields)
            {
                sb.AppendLine($"- '{f}' not found");
                var similar = attrMap.Keys
                    .Where(k => k.Contains(f) || f.Contains(k) || FormXmlHelpers.LevenshteinClose(k, f))
                    .Take(5)
                    .ToList();
                if (similar.Count > 0)
                    sb.AppendLine($"  Similar: {string.Join(", ", similar)}");
            }
            sb.AppendLine($"\nTip: Use get_tables('{entityName}') to list all available fields.");
            throw new FormXmlOperationsException(sb.ToString());
        }

        private static void CollectFieldsFromArray(JsonElement parent, string propName, HashSet<string> names)
        {
            if (!parent.TryGetProperty(propName, out var arr) || arr.ValueKind != JsonValueKind.Array) return;
            foreach (var f in arr.EnumerateArray())
            {
                if (f.ValueKind == JsonValueKind.String)
                    names.Add(f.GetString());
                else if (f.TryGetProperty("field", out var fn) && fn.ValueKind == JsonValueKind.String)
                    names.Add(fn.GetString());
            }
        }

        private static List<DisplayNameFirstCandidate<AttributeMetadata>> BuildFieldCandidates(
            Dictionary<string, AttributeMetadata> attrMap)
        {
            var candidates = new List<DisplayNameFirstCandidate<AttributeMetadata>>();
            var seenPrimary = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var attr in attrMap.Values.Where(a => a != null))
            {
                if (!seenPrimary.Add(attr.LogicalName)) continue;
                candidates.Add(new DisplayNameFirstCandidate<AttributeMetadata>
                {
                    Value = attr,
                    DisplayName = attr.DisplayName?.UserLocalizedLabel?.Label,
                    LogicalName = attr.LogicalName,
                    SchemaName = attr.SchemaName,
                    Id = attr.MetadataId,
                    Kind = "attribute",
                    CanonicalName = attr.LogicalName
                });
            }

            foreach (var entry in attrMap)
            {
                var alias = entry.Key;
                var attr = entry.Value;
                if (attr == null || string.Equals(alias, attr.LogicalName, StringComparison.OrdinalIgnoreCase))
                    continue;

                candidates.Add(new DisplayNameFirstCandidate<AttributeMetadata>
                {
                    Value = attr,
                    LogicalName = alias,
                    SchemaName = alias,
                    Id = attr.MetadataId,
                    Kind = "attribute",
                    CanonicalName = attr.LogicalName
                });
            }

            return candidates;
        }

        private static void CollectFieldTarget(JsonElement op, HashSet<string> names)
        {
            var target = FormXmlHelpers.GetStringProp(op, "target");
            if (target?.StartsWith("field:", StringComparison.OrdinalIgnoreCase) == true)
            {
                var fieldName = target.Substring(6).Trim();
                if (!string.IsNullOrWhiteSpace(fieldName))
                    names.Add(fieldName);
            }
        }

        private static void CollectPositionFieldReference(JsonElement op, HashSet<string> names)
        {
            var position = FormXmlHelpers.GetStringProp(op, "position");
            var fieldName = GetPrefixedFieldName(position, "before:", "after:");
            if (!string.IsNullOrWhiteSpace(fieldName))
                names.Add(fieldName);
        }

        private static void NormalizeFieldProperties(JsonNode node, string propertyName,
            IReadOnlyDictionary<string, string> fieldNameMap)
        {
            if (node == null) return;

            if (node is JsonValue value &&
                IsFieldReferenceProperty(propertyName) &&
                value.TryGetValue<string>(out var text) &&
                TryMapFieldName(text, fieldNameMap, out var canonicalName))
            {
                node.ReplaceWith(JsonValue.Create(canonicalName));
                return;
            }

            if (node is JsonArray array)
            {
                for (var i = 0; i < array.Count; i++)
                    NormalizeFieldProperties(array[i], propertyName, fieldNameMap);
                return;
            }

            if (node is JsonObject obj)
            {
                foreach (var key in obj.Select(kv => kv.Key).ToList())
                    NormalizeFieldProperties(obj[key], key, fieldNameMap);
            }
        }

        private static void NormalizeEventTarget(JsonObject obj, IReadOnlyDictionary<string, string> fieldNameMap)
        {
            var target = GetStringValue(obj, "target");
            if (target?.StartsWith("field:", StringComparison.OrdinalIgnoreCase) != true)
                return;

            var fieldName = target.Substring(6).Trim();
            if (TryMapFieldName(fieldName, fieldNameMap, out var canonicalName))
                obj["target"] = $"field:{canonicalName}";
        }

        private static void NormalizeManageFieldsPosition(JsonObject obj,
            IReadOnlyDictionary<string, string> fieldNameMap)
        {
            var action = GetStringValue(obj, "action");
            if (!string.Equals(action, "manage_fields", StringComparison.OrdinalIgnoreCase))
                return;

            var position = GetStringValue(obj, "position");
            var normalized = NormalizePrefixedFieldName(position, fieldNameMap, "before:", "after:");
            if (normalized != null)
                obj["position"] = normalized;
        }

        private static string NormalizePrefixedFieldName(string value,
            IReadOnlyDictionary<string, string> fieldNameMap,
            params string[] prefixes)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;

            foreach (var prefix in prefixes)
            {
                if (!value.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                    continue;

                var fieldName = value.Substring(prefix.Length).Trim();
                if (TryMapFieldName(fieldName, fieldNameMap, out var canonicalName))
                    return $"{value.Substring(0, prefix.Length)}{canonicalName}";
            }

            return null;
        }

        private static string GetPrefixedFieldName(string value, params string[] prefixes)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;
            foreach (var prefix in prefixes)
            {
                if (value.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                    return value.Substring(prefix.Length).Trim();
            }
            return null;
        }

        private static bool TryMapFieldName(string input,
            IReadOnlyDictionary<string, string> fieldNameMap,
            out string canonicalName)
        {
            canonicalName = null;
            var key = input?.Trim();
            return !string.IsNullOrWhiteSpace(key) && fieldNameMap.TryGetValue(key, out canonicalName);
        }

        private static bool IsFieldReferenceProperty(string propertyName) =>
            string.Equals(propertyName, "field", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(propertyName, "fields", StringComparison.OrdinalIgnoreCase);

        private static string GetStringValue(JsonObject obj, string propertyName)
        {
            if (obj.TryGetPropertyValue(propertyName, out var node) &&
                node is JsonValue value &&
                value.TryGetValue<string>(out var text))
            {
                return text;
            }
            return null;
        }

        private static JsonElement ToJsonElement(JsonNode node)
        {
            using var doc = JsonDocument.Parse(node.ToJsonString());
            return doc.RootElement.Clone();
        }
    }

    internal sealed class FormXmlOperationsException : Exception
    {
        public FormXmlOperationsException(string message) : base(message) { }
    }
}
