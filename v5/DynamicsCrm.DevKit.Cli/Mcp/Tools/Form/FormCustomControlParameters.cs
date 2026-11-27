using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Xml;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormCustomControlParameters(IOrganizationService orgService, string entityName)
    {
        private static readonly string[] GridSourceParameters =
            ["ViewId", "columnsDefaultView", "IsUserView", "RelationshipName", "TargetEntityType", "EnableViewPicker", "FilteredViewIds"];
        private readonly Dictionary<string, Dictionary<string, AttributeMetadata>> _entityFields = new(StringComparer.OrdinalIgnoreCase);

        public XElement Build(CustomControlDefinition component, Dictionary<string, JsonElement> input,
            XElement existing, string fieldName, XElement nativeGrid)
        {
            var parameters = existing == null ? new XElement("parameters") : new XElement(existing);
            var inferredField = InferField(component, input, existing, fieldName);
            if (inferredField != null)
                parameters.Add(new XElement(inferredField.Name, fieldName));

            foreach (var pair in input)
            {
                var property = component.Properties.FirstOrDefault(property => property.Name == pair.Key);
                if (property != null)
                    SetParameter(parameters, BuildScalar(property, pair.Value, entityName));
                else if (component.Datasets.FirstOrDefault()?.Name != pair.Key)
                    throw new InvalidOperationException($"PCF '{component.Name}' has no configurable parameter '{pair.Key}'.");
            }

            foreach (var property in component.Properties.Where(property => property.Usage is "bound" or "input"))
            {
                if (property.Required && parameters.Element(property.Name) == null &&
                    (property.Usage != "input" || property.DefaultValue == null))
                    throw new InvalidOperationException($"Required PCF parameter '{property.Name}' is missing.");
            }

            if (fieldName != null)
            {
                var targetType = GetFieldType(entityName, fieldName);
                if (!component.Properties.Any(property => property.Usage == "bound" && property.Accepts(targetType) &&
                        parameters.Element(property.Name) is { } bound && (bool?)bound.Attribute("static") != true &&
                        string.Equals(bound.Value, fieldName, StringComparison.OrdinalIgnoreCase)))
                    throw new InvalidOperationException($"PCF '{component.Name}' needs a compatible bound property mapped to '{fieldName}' ({targetType}).");
            }
            else
            {
                BuildDataset(component, input, parameters, nativeGrid);
            }

            return parameters;
        }

        private CustomControlProperty InferField(CustomControlDefinition component, Dictionary<string, JsonElement> input,
            XElement existing, string fieldName)
        {
            if (fieldName == null || existing?.HasElements == true || input.Count != 0)
                return null;

            var type = GetFieldType(entityName, fieldName);
            var candidates = component.Properties
                .Where(property => property.Usage == "bound" && property.Accepts(type)).ToArray();
            if (candidates.Length != 1)
                throw new InvalidOperationException(candidates.Length == 0
                    ? $"No compatible bound property was found for '{fieldName}' ({type})."
                    : $"Multiple compatible bound properties were found for '{fieldName}'. Specify parameters for: {string.Join(", ", candidates.Select(property => property.Name))}.");
            return candidates[0];
        }

        private void BuildDataset(CustomControlDefinition component, Dictionary<string, JsonElement> input,
            XElement parameters, XElement nativeGrid)
        {
            var primary = component.Datasets[0];
            var unsupported = component.Datasets.Skip(1).FirstOrDefault(dataset =>
                (dataset.Required || dataset.PropertySets.Any(property => property.Required)) &&
                FindDataset(parameters, dataset.Name) == null);
            if (unsupported != null)
                throw new InvalidOperationException($"Required secondary dataset '{unsupported.Name}' cannot be bound to a subgrid.");

            // Some exported forms use Items for the primary dataset even when the manifest declares another name.
            var dataset = FindDataset(parameters, primary.Name) ?? FindDataset(parameters, "Items");
            if (dataset == null)
            {
                dataset = new XElement("data-set", new XAttribute("name", primary.Name));
                foreach (var name in GridSourceParameters)
                {
                    var source = nativeGrid?.Element(name);
                    if (name == "FilteredViewIds" && source == null)
                        source = nativeGrid?.Element("ViewIds");
                    if (source != null)
                        dataset.Add(new XElement(name, source.Value));
                    else if (name == "columnsDefaultView")
                        dataset.Add(new XElement(name));
                    else if (name is "IsUserView" or "EnableViewPicker")
                        dataset.Add(new XElement(name, "false"));
                }
                parameters.AddFirst(dataset);
            }

            var table = (string)dataset.Element("TargetEntityType") ?? (string)nativeGrid?.Element("TargetEntityType");
            var view = (string)dataset.Element("ViewId") ?? (string)nativeGrid?.Element("ViewId");
            if (string.IsNullOrWhiteSpace(table) || !Guid.TryParse(view, out _))
                throw new InvalidOperationException("The subgrid must have a target table and a valid view ID before binding a dataset PCF.");

            if (input.TryGetValue(primary.Name, out var options))
            {
                if (options.ValueKind != JsonValueKind.Object)
                    throw new InvalidOperationException($"Dataset parameter '{primary.Name}' must be an object.");
                var source = FormCustomControlOperations.ReadString(options, "source");
                if (source != null && source != "subgrid")
                    throw new InvalidOperationException($"Dataset '{primary.Name}' only supports source 'subgrid'.");
                foreach (var pair in ReadObject(options, "property_sets"))
                {
                    var property = primary.PropertySets.FirstOrDefault(property => property.Name == pair.Key);
                    if (property == null)
                        throw new InvalidOperationException($"Dataset '{primary.Name}' has no property-set '{pair.Key}'.");
                    if (pair.Value.ValueKind != JsonValueKind.Object)
                        throw new InvalidOperationException($"Property-set '{pair.Key}' must be an object with a field.");
                    var field = FormCustomControlOperations.ReadString(pair.Value, "field");
                    if (field == null || pair.Value.TryGetProperty("value", out _))
                        throw new InvalidOperationException($"Property-set '{pair.Key}' must bind to a field in '{table}'.");
                    ValidateColumn(property, table, field, FormCustomControlOperations.ReadString(pair.Value, "type"));
                    // Dataverse exports each mapping as a named scalar child of the dataset.
                    dataset.SetElementValue(property.Name, field.ToLowerInvariant());
                }
            }

            foreach (var property in primary.PropertySets.Where(property => property.Required))
            {
                if (dataset.Element(property.Name) is not { HasElements: false } mapping ||
                    string.IsNullOrWhiteSpace(mapping.Value))
                    throw new InvalidOperationException($"Required property-set '{property.Name}' is missing from dataset '{primary.Name}'.");
            }
        }

        private static XElement FindDataset(XElement parameters, string name) =>
            parameters.Elements("data-set").FirstOrDefault(element => (string)element.Attribute("name") == name);

        private XElement BuildScalar(CustomControlProperty property, JsonElement parameter, string table)
        {
            if (property.Usage is not ("bound" or "input"))
                throw new InvalidOperationException($"Property '{property.Name}' uses '{property.Usage}' and cannot be configured.");
            if (parameter.ValueKind != JsonValueKind.Object)
                throw new InvalidOperationException($"Parameter '{property.Name}' must be an object with exactly one of field or value.");

            var field = FormCustomControlOperations.ReadString(parameter, "field");
            var explicitType = FormCustomControlOperations.ReadString(parameter, "type");
            var hasValue = parameter.TryGetProperty("value", out var literal);
            if ((field != null) == hasValue)
                throw new InvalidOperationException($"Parameter '{property.Name}' requires exactly one of field or value.");
            if (field != null)
            {
                var type = ValidateColumn(property, table, field, explicitType);
                return new XElement(property.Name, new XAttribute("type", type), field.ToLowerInvariant());
            }

            if (property.Usage != "input")
                throw new InvalidOperationException($"Bound property '{property.Name}' requires a field.");
            var types = property.Types.Where(type => (explicitType == null ||
                    string.Equals(type, explicitType, StringComparison.OrdinalIgnoreCase)) && AcceptsLiteral(property, type, literal))
                .Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            if (types.Length != 1)
                throw new InvalidOperationException(types.Length == 0
                    ? $"Static value for '{property.Name}' does not match the manifest types: {string.Join(", ", property.Types)}."
                    : $"Static value for '{property.Name}' matches multiple manifest types. Specify type: {string.Join(", ", types)}.");

            return new XElement(property.Name, new XAttribute("static", "true"), new XAttribute("type", types[0]),
                literal.ValueKind == JsonValueKind.String ? literal.GetString() : literal.GetRawText());
        }

        private string ValidateColumn(CustomControlProperty property, string table, string field, string explicitType)
        {
            var actualType = GetFieldType(table, field);
            if (!property.Accepts(actualType) || (explicitType != null && !string.Equals(actualType, explicitType, StringComparison.OrdinalIgnoreCase)))
                throw new InvalidOperationException($"Property '{property.Name}' does not accept '{table}.{field}' ({actualType}). Manifest types: {string.Join(", ", property.Types)}.");
            return property.Types.First(type => string.Equals(type, actualType, StringComparison.OrdinalIgnoreCase));
        }

        private string GetFieldType(string table, string field)
        {
            if (!_entityFields.TryGetValue(table, out var fields))
            {
                fields = new FormFieldMetadata(orgService).LoadEntityAttributeMap(table);
                _entityFields.Add(table, fields);
            }
            if (!fields.TryGetValue(field, out var metadata) ||
                !string.Equals(metadata.LogicalName, field, StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException($"Field '{field}' was not found in table '{table}'.");
            return ResolveType(metadata) ?? throw new InvalidOperationException($"Field '{table}.{field}' has an unsupported PCF data type.");
        }

        private static string ResolveType(AttributeMetadata attribute) => attribute switch
        {
            StringAttributeMetadata text => text.Format?.ToString() switch
            {
                "Email" => "SingleLine.Email",
                "Phone" => "SingleLine.Phone",
                "TextArea" => "SingleLine.TextArea",
                "TickerSymbol" => "SingleLine.Ticker",
                "Url" => "SingleLine.URL",
                _ => "SingleLine.Text"
            },
            IntegerAttributeMetadata number => "Whole." + (number.Format?.ToString() ?? "None"),
            DateTimeAttributeMetadata date => "DateAndTime." + (date.Format?.ToString() ?? "DateAndTime"),
            MemoAttributeMetadata => "Multiple",
            DecimalAttributeMetadata => "Decimal",
            DoubleAttributeMetadata => "FP",
            MoneyAttributeMetadata => "Currency",
            BooleanAttributeMetadata => "TwoOptions",
            MultiSelectPicklistAttributeMetadata => "MultiSelectOptionSet",
            PicklistAttributeMetadata => "OptionSet",
            LookupAttributeMetadata lookup when lookup.AttributeType == AttributeTypeCode.Lookup => "Lookup.Simple",
            _ => null
        };

        private static bool AcceptsLiteral(CustomControlProperty property, string type, JsonElement value) => type switch
        {
            "TwoOptions" => value.ValueKind is JsonValueKind.True or JsonValueKind.False,
            "Whole.None" or "Whole.Duration" or "Whole.TimeZone" or "Whole.Language" or "OptionSet" =>
                value.ValueKind == JsonValueKind.Number && value.TryGetInt32(out _),
            "Decimal" or "Currency" => value.ValueKind == JsonValueKind.Number && value.TryGetDecimal(out _),
            "FP" => value.ValueKind == JsonValueKind.Number && value.TryGetDouble(out var number) && double.IsFinite(number),
            "Enum" => value.ValueKind == JsonValueKind.String && property.Options.Contains(value.GetString(), StringComparer.Ordinal),
            "DateAndTime.DateOnly" => value.ValueKind == JsonValueKind.String &&
                DateOnly.TryParseExact(value.GetString(), "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out _),
            "DateAndTime.DateAndTime" => value.ValueKind == JsonValueKind.String && value.TryGetDateTimeOffset(out _),
            "Multiple" or "SingleLine.Text" or "SingleLine.TextArea" or "SingleLine.Email" or
                "SingleLine.Phone" or "SingleLine.Ticker" or "SingleLine.URL" => value.ValueKind == JsonValueKind.String,
            _ => false
        };

        private static void SetParameter(XElement parameters, XElement parameter)
        {
            XmlConvert.VerifyXmlChars(parameter.Value);
            var current = parameters.Element(parameter.Name);
            if (current == null)
                parameters.Add(parameter);
            else if (!XNode.DeepEquals(current, parameter))
                current.ReplaceWith(parameter);
        }

        internal static Dictionary<string, JsonElement> ReadObject(JsonElement parent, string name)
        {
            if (!parent.TryGetProperty(name, out var value))
                return new Dictionary<string, JsonElement>(StringComparer.Ordinal);
            if (value.ValueKind != JsonValueKind.Object)
                throw new InvalidOperationException($"'{name}' must be a JSON object.");
            var properties = new Dictionary<string, JsonElement>(StringComparer.Ordinal);
            foreach (var property in value.EnumerateObject())
                if (!properties.TryAdd(property.Name, property.Value))
                    throw new InvalidOperationException($"Duplicate property '{property.Name}' in '{name}'.");
            return properties;
        }
    }
}
