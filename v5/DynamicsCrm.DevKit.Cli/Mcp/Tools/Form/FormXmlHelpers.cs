using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal static class FormXmlHelpers
    {
        internal static string ResolveClassId(AttributeMetadata attr)
        {
            return attr switch
            {
                StringAttributeMetadata s => s.FormatName?.Value switch
                {
                    "Email" => ControlClassId.SINGLE_LINE_OF_TEXT_EMAIL,
                    "Url" => ControlClassId.SINGLE_LINE_OF_TEXT_URL,
                    "TickerSymbol" => ControlClassId.SINGLE_LINE_OF_TEXT_TICKER_SYMBOL,
                    "TextArea" => ControlClassId.MULTI_LINES_OF_TEXT,
                    _ => ControlClassId.SINGLE_LINE_OF_TEXT
                },
                IntegerAttributeMetadata i => i.Format switch
                {
                    IntegerFormat.Duration => ControlClassId.WHOLE_NUMBER_DURATION,
                    IntegerFormat.Language => ControlClassId.WHOLE_NUMBER_LANGUAGE,
                    IntegerFormat.TimeZone => ControlClassId.WHOLE_NUMBER_TIMEZONE,
                    _ => ControlClassId.WHOLE_NUMBER
                },
                MemoAttributeMetadata => ControlClassId.MULTI_LINES_OF_TEXT,
                DateTimeAttributeMetadata => ControlClassId.DATE_TIME,
                BooleanAttributeMetadata => ControlClassId.TWO_OPTIONS,
                PicklistAttributeMetadata => ControlClassId.STATE_CODE,
                StateAttributeMetadata => ControlClassId.STATE_CODE,
                StatusAttributeMetadata => ControlClassId.STATE_CODE,
                DoubleAttributeMetadata => ControlClassId.FLOATING_POINT_NUMBER,
                DecimalAttributeMetadata => ControlClassId.DECIMAL_NUMBER,
                MoneyAttributeMetadata => ControlClassId.CURRENCY,
                LookupAttributeMetadata => ControlClassId.LOOKUP,
                MultiSelectPicklistAttributeMetadata => ControlClassId.MULTI_OPTIONSET,
                ImageAttributeMetadata => ControlClassId.IMAGE,
                FileAttributeMetadata => ControlClassId.FILE,
                EntityNameAttributeMetadata => ControlClassId.ENTITY_NAME,
                UniqueIdentifierAttributeMetadata => ControlClassId.SINGLE_LINE_OF_TEXT,
                BigIntAttributeMetadata => ControlClassId.WHOLE_NUMBER,
                _ => ControlClassId.SINGLE_LINE_OF_TEXT
            };
        }

        internal static HashSet<string> CollectExistingControlIds(XDocument formDoc)
        {
            var ids = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var control in formDoc.Descendants("control"))
            {
                var id = control.Attribute("id")?.Value;
                if (!string.IsNullOrEmpty(id))
                    ids.Add(id);
            }
            return ids;
        }

        internal static string DeduplicateControlId(string fieldName, HashSet<string> existingIds)
        {
            if (!existingIds.Contains(fieldName))
            {
                existingIds.Add(fieldName);
                return fieldName;
            }

            var suffix = 1;
            while (existingIds.Contains($"{fieldName}{suffix}"))
                suffix++;

            var uniqueId = $"{fieldName}{suffix}";
            existingIds.Add(uniqueId);
            return uniqueId;
        }

        internal static XElement CreateSpacerCell()
        {
            return new XElement("cell",
                new XAttribute("id", NewGuid()));
        }

        internal static List<XElement> BuildRows(List<XElement> cells, int sectionColumns)
        {
            var rows = new List<XElement>();
            for (var i = 0; i < cells.Count; i += sectionColumns)
            {
                var row = new XElement("row");
                for (var j = i; j < i + sectionColumns && j < cells.Count; j++)
                    row.Add(cells[j]);
                while (row.Elements("cell").Count() < sectionColumns)
                    row.Add(CreateSpacerCell());
                rows.Add(row);
            }
            return rows;
        }

        internal static XElement FindEvent(XElement eventsElement, string eventName, string attributeName)
        {
            return eventsElement.Elements("event")
                .FirstOrDefault(e =>
                {
                    var nameMatch = string.Equals(e.Attribute("name")?.Value, eventName, StringComparison.OrdinalIgnoreCase);
                    if (!nameMatch) return false;

                    if (attributeName != null)
                        return string.Equals(e.Attribute("attribute")?.Value, attributeName, StringComparison.OrdinalIgnoreCase);

                    return e.Attribute("attribute") == null || string.IsNullOrEmpty(e.Attribute("attribute")?.Value);
                });
        }

        internal static XElement FindTab(XDocument formDoc, string tabName)
        {
            var tabs = formDoc.Root?.Element("tabs")?.Elements("tab");
            if (tabs == null) return null;

            var tab = tabs.FirstOrDefault(t =>
                string.Equals(t.Attribute("name")?.Value, tabName, StringComparison.OrdinalIgnoreCase));
            if (tab != null) return tab;

            return tabs.FirstOrDefault(t =>
            {
                var labelDesc = t.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                return string.Equals(labelDesc, tabName, StringComparison.OrdinalIgnoreCase);
            });
        }

        internal static XElement FindSection(XElement tabElement, string sectionName)
        {
            var sections = tabElement.Descendants("section");

            var section = sections.FirstOrDefault(s =>
                string.Equals(s.Attribute("name")?.Value, sectionName, StringComparison.OrdinalIgnoreCase));
            if (section != null) return section;

            return sections.FirstOrDefault(s =>
            {
                var labelDesc = s.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                return string.Equals(labelDesc, sectionName, StringComparison.OrdinalIgnoreCase);
            });
        }

        internal static XElement FindRowByFieldName(XElement rowsElement, string fieldName)
        {
            return rowsElement.Elements("row").FirstOrDefault(row =>
                row.Descendants("control").Any(c =>
                    string.Equals(c.Attribute("datafieldname")?.Value, fieldName, StringComparison.OrdinalIgnoreCase)));
        }

        internal static List<string> GetTabNames(XDocument formDoc)
        {
            return formDoc.Root?.Element("tabs")?.Elements("tab")
                .Select(t => t.Attribute("name")?.Value ?? "(unnamed)")
                .ToList() ?? new List<string>();
        }

        internal static List<string> GetSectionNames(XElement tabElement)
        {
            return tabElement.Descendants("section")
                .Select(s => s.Attribute("name")?.Value ?? "(unnamed)")
                .ToList();
        }

        internal static void InsertElement(XElement parent, XElement newElement, string position,
            string childElementName, string nameAttribute)
        {
            if (position == "first")
            {
                var first = parent.Elements(childElementName).FirstOrDefault();
                if (first != null)
                    first.AddBeforeSelf(newElement);
                else
                    parent.Add(newElement);
            }
            else if (position.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var afterName = position.Substring(6).Trim();
                var target = parent.Elements(childElementName).FirstOrDefault(e =>
                    string.Equals(e.Attribute(nameAttribute)?.Value, afterName, StringComparison.OrdinalIgnoreCase));
                target ??= parent.Elements(childElementName).FirstOrDefault(e =>
                {
                    var labelDesc = e.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                    return string.Equals(labelDesc, afterName, StringComparison.OrdinalIgnoreCase);
                });
                if (target != null)
                    target.AddAfterSelf(newElement);
                else
                    parent.Add(newElement);
            }
            else if (position.StartsWith("before:", StringComparison.OrdinalIgnoreCase))
            {
                var beforeName = position.Substring(7).Trim();
                var target = parent.Elements(childElementName).FirstOrDefault(e =>
                    string.Equals(e.Attribute(nameAttribute)?.Value, beforeName, StringComparison.OrdinalIgnoreCase));
                target ??= parent.Elements(childElementName).FirstOrDefault(e =>
                {
                    var labelDesc = e.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                    return string.Equals(labelDesc, beforeName, StringComparison.OrdinalIgnoreCase);
                });
                if (target != null)
                    target.AddBeforeSelf(newElement);
                else
                    parent.Add(newElement);
            }
            else
            {
                parent.Add(newElement);
            }
        }

        internal static void InsertFieldRows(XElement rowsElement, List<XElement> newRows, string position)
        {
            if (newRows.Count == 0) return;

            if (position.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var afterField = position.Substring(6).Trim();
                var targetRow = FindRowByFieldName(rowsElement, afterField);
                if (targetRow != null)
                {
                    var insertAfter = targetRow;
                    foreach (var row in newRows)
                    {
                        insertAfter.AddAfterSelf(row);
                        insertAfter = row;
                    }
                }
                else
                {
                    foreach (var row in newRows)
                        rowsElement.Add(row);
                }
            }
            else if (position.StartsWith("before:", StringComparison.OrdinalIgnoreCase))
            {
                var beforeField = position.Substring(7).Trim();
                var targetRow = FindRowByFieldName(rowsElement, beforeField);
                if (targetRow != null)
                {
                    foreach (var row in newRows.AsEnumerable().Reverse())
                        targetRow.AddBeforeSelf(row);
                }
                else
                {
                    foreach (var row in newRows)
                        rowsElement.Add(row);
                }
            }
            else if (position == "first")
            {
                var firstRow = rowsElement.Elements("row").FirstOrDefault();
                if (firstRow != null)
                {
                    foreach (var row in newRows.AsEnumerable().Reverse())
                        firstRow.AddBeforeSelf(row);
                }
                else
                {
                    foreach (var row in newRows)
                        rowsElement.Add(row);
                }
            }
            else
            {
                foreach (var row in newRows)
                    rowsElement.Add(row);
            }
        }

        internal static string CorrectFieldName(string fieldName, AttributeMetadata attr)
            => attr is ImageAttributeMetadata && !string.Equals(fieldName, attr.LogicalName, StringComparison.OrdinalIgnoreCase)
                ? attr.LogicalName
                : fieldName;

        internal static string AutoTabName(string label)
            => $"tab_{Sanitize(label)}";

        internal static string AutoSectionName(string tabName, string label)
        {
            var tabPart = tabName.StartsWith("tab_", StringComparison.OrdinalIgnoreCase)
                ? tabName.Substring(4) : tabName;
            return $"{tabPart}_sec_{Sanitize(label)}";
        }

        internal static string Sanitize(string s)
            => Regex.Replace(s.ToLowerInvariant(), @"[^a-z0-9]+", "_").Trim('_');

        internal static string NewGuid()
            => $"{{{Guid.NewGuid().ToString().ToUpperInvariant()}}}";

        internal static string[] GetTabColumnWidths(int tabColumns) => tabColumns switch
        {
            2 => ["50%", "50%"],
            3 => ["33%", "34%", "33%"],
            _ => ["100%"]
        };

        internal static string GetStringProp(JsonElement el, string name)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString();
            return null;
        }

        internal static int GetIntProp(JsonElement el, string name, int defaultValue)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.Number)
                return prop.GetInt32();
            return defaultValue;
        }

        internal static bool GetBoolProp(JsonElement el, string name, bool defaultValue)
        {
            if (el.TryGetProperty(name, out var prop) &&
                (prop.ValueKind == JsonValueKind.True || prop.ValueKind == JsonValueKind.False))
                return prop.GetBoolean();
            return defaultValue;
        }

        internal static bool LevenshteinClose(string a, string b)
        {
            if (Math.Abs(a.Length - b.Length) > 3) return false;
            var dist = 0;
            var len = Math.Min(a.Length, b.Length);
            for (var i = 0; i < len; i++)
                if (char.ToLowerInvariant(a[i]) != char.ToLowerInvariant(b[i]))
                    dist++;
            dist += Math.Abs(a.Length - b.Length);
            return dist <= 2;
        }
    }
}
