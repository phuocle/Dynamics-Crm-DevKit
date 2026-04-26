using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;

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

        public static HashSet<string> CollectFieldNames(List<JsonElement> ops)
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var op in ops)
            {
                var action = FormXmlHelpers.GetStringProp(op, "action")?.ToLowerInvariant() ?? "";
                if (action.StartsWith("remove_")) continue;
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
    }

    internal sealed class FormXmlOperationsException : Exception
    {
        public FormXmlOperationsException(string message) : base(message) { }
    }
}
