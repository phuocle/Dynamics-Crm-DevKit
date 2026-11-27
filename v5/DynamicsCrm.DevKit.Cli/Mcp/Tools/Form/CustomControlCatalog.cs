using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Xml;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class CustomControlCatalog(IOrganizationService orgService)
    {
        public IReadOnlyList<CustomControlDefinition> Find(string name, string nameMatch)
        {
            var query = new QueryExpression("customcontrol")
            {
                ColumnSet = new ColumnSet("customcontrolid", "name", "version", "compatibledatatypes", "manifest"),
                PageInfo = new PagingInfo { PageNumber = 1, Count = 500 }
            };
            if (!string.IsNullOrWhiteSpace(name))
            {
                name = name.Trim();
                var escaped = name.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
                var condition = nameMatch switch
                {
                    "exact" => (ConditionOperator.Equal, name),
                    "prefix" => (ConditionOperator.Like, escaped + "%"),
                    _ => (ConditionOperator.Like, "%" + escaped + "%")
                };
                query.Criteria.AddCondition("name", condition.Item1, condition.Item2);
            }
            query.AddOrder("name", OrderType.Ascending);
            query.AddOrder("customcontrolid", OrderType.Ascending);

            var results = new List<CustomControlDefinition>();
            while (true)
            {
                var page = orgService.RetrieveMultiple(query);
                results.AddRange(page.Entities.Select(Parse));
                if (!page.MoreRecords)
                    return results;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }
        }

        private static CustomControlDefinition Parse(Entity row)
        {
            var name = row.GetAttributeValue<string>("name");
            var version = row.GetAttributeValue<string>("version");
            var declaredTypes = Regex.Matches(row.GetAttributeValue<string>("compatibledatatypes") ?? "",
                    @"[A-Za-z][A-Za-z0-9]*(?:\.[A-Za-z0-9]+)*")
                .Select(match => match.Value).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            try
            {
                var xml = row.GetAttributeValue<string>("manifest");
                if (string.IsNullOrWhiteSpace(xml))
                    throw new InvalidOperationException("The control has no manifest.");
                using var reader = XmlReader.Create(new StringReader(xml),
                    new XmlReaderSettings { DtdProcessing = DtdProcessing.Prohibit });
                var root = XElement.Load(reader);
                var control = root.Name.LocalName == "control" ? root : Children(root, "control").Single();
                version = (string)control.Attribute("version") ?? version;
                var groups = Children(control, "type-group").ToDictionary(
                    group => RequiredName(group), group => Children(group, "type").Select(type => type.Value.Trim()).ToArray(),
                    StringComparer.Ordinal);
                CustomControlProperty ReadProperty(XElement property)
                {
                    var ofType = (string)property.Attribute("of-type");
                    var group = (string)property.Attribute("of-type-group");
                    var types = group != null
                        ? groups.TryGetValue(group, out var values) ? values : throw new InvalidOperationException($"Unknown type-group '{group}'.")
                        : ofType != null ? [ofType] : Array.Empty<string>();
                    var options = Children(property, "value").Select(value => value.Value.Trim()).ToArray();
                    return new CustomControlProperty(RequiredName(property), ofType, group, types,
                        (string)property.Attribute("usage"), IsRequired(property), (string)property.Attribute("default-value"), options);
                }

                var properties = ReadProperties(Children(control, "property"), ReadProperty);
                var datasets = Children(control, "data-set")
                    .Select(dataset => new CustomControlDataset(RequiredName(dataset), IsRequired(dataset),
                        ReadProperties(Children(dataset, "property-set"), ReadProperty))).ToArray();
                if (datasets.Select(dataset => dataset.Name).Distinct(StringComparer.Ordinal).Count() != datasets.Length)
                    throw new InvalidOperationException("The manifest contains duplicate dataset names.");
                var compatibleTypes = declaredTypes.Concat(properties.Where(property => property.Usage == "bound")
                        .SelectMany(property => property.Types)).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
                return new CustomControlDefinition(row.Id, name, version, datasets.Length == 0 ? "field" : "dataset",
                    compatibleTypes, properties, datasets, null);
            }
            catch (Exception ex) when (ex is XmlException or InvalidOperationException or ArgumentException or FormatException)
            {
                return new CustomControlDefinition(row.Id, name, version, null, declaredTypes, [], [], ex.Message);
            }
        }

        private static CustomControlProperty[] ReadProperties(IEnumerable<XElement> elements, Func<XElement, CustomControlProperty> read)
        {
            var properties = elements.Select(read).ToArray();
            if (properties.Select(property => property.Name).Distinct(StringComparer.Ordinal).Count() != properties.Length)
                throw new InvalidOperationException("The manifest contains duplicate property names.");
            return properties;
        }

        private static IEnumerable<XElement> Children(XElement parent, string name) =>
            parent.Elements().Where(child => child.Name.LocalName == name);

        private static string RequiredName(XElement element)
        {
            var name = (string)element.Attribute("name");
            if (string.IsNullOrWhiteSpace(name))
                throw new InvalidOperationException($"A manifest '{element.Name.LocalName}' element has no name.");
            return XmlConvert.VerifyNCName(name);
        }

        private static bool IsRequired(XElement element) => (bool?)element.Attribute("required") ?? false;
    }

    internal sealed record CustomControlDefinition(
        [property: JsonPropertyName("customControlId")] Guid CustomControlId,
        [property: JsonPropertyName("name")] string Name,
        [property: JsonPropertyName("version")] string Version,
        [property: JsonPropertyName("kind")] string Kind,
        [property: JsonPropertyName("compatibleDataTypes")] string[] CompatibleDataTypes,
        [property: JsonPropertyName("properties")] CustomControlProperty[] Properties,
        [property: JsonPropertyName("datasets")] CustomControlDataset[] Datasets,
        [property: JsonPropertyName("manifestError")] string ManifestError);

    internal sealed record CustomControlProperty(
        [property: JsonPropertyName("name")] string Name,
        [property: JsonPropertyName("ofType")] string OfType,
        [property: JsonPropertyName("ofTypeGroup")] string OfTypeGroup,
        [property: JsonPropertyName("types")] string[] Types,
        [property: JsonPropertyName("usage")] string Usage,
        [property: JsonPropertyName("required")] bool Required,
        [property: JsonPropertyName("defaultValue")] string DefaultValue,
        [property: JsonPropertyName("options")] string[] Options)
    {
        public bool Accepts(string type) => type != null && Types.Contains(type, StringComparer.OrdinalIgnoreCase);
    }

    internal sealed record CustomControlDataset(
        [property: JsonPropertyName("name")] string Name,
        [property: JsonPropertyName("required")] bool Required,
        [property: JsonPropertyName("propertySets")] CustomControlProperty[] PropertySets);
}
