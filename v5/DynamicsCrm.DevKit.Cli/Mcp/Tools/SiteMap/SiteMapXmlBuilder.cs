using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap
{
    /// <summary>
    /// Utility class for building SiteMap XML elements.
    /// Provides helper methods for constructing and inserting SiteMap SubArea elements.
    /// </summary>
    public static class SiteMapXmlBuilder
    {
        /// <summary>
        /// Gets a trimmed string property from a JsonElement.
        /// Returns null if the property is missing, empty, or whitespace-only.
        /// </summary>
        private static string GetStringProp(JsonElement op, string name)
        {
            if (!op.TryGetProperty(name, out var prop))
                return null;

            if (prop.ValueKind == JsonValueKind.String)
            {
                var val = prop.GetString();
                if (string.IsNullOrWhiteSpace(val)) return null;
                return val.Trim();
            }

            if (prop.ValueKind == JsonValueKind.Number)
                return prop.GetRawText().Trim();

            if (prop.ValueKind == JsonValueKind.True) return "true";
            if (prop.ValueKind == JsonValueKind.False) return "false";

            return null;
        }

        /// <summary>
        /// Normalizes a boolean property value to "true" or "false".
        /// Accepts: true/false (bool), "true"/"false"/"yes"/"no"/"1"/"0" (string, case-insensitive).
        /// Throws InvalidOperationException for unrecognized values.
        /// Returns null if the property is missing.
        /// </summary>
        private static string NormalizeBoolProp(JsonElement op, string name)
        {
            if (!op.TryGetProperty(name, out var prop))
                return null;

            if (prop.ValueKind == JsonValueKind.True) return "true";
            if (prop.ValueKind == JsonValueKind.False) return "false";

            if (prop.ValueKind == JsonValueKind.String)
            {
                var raw = prop.GetString()?.Trim();
                if (raw == null) return null;

                if (string.Equals(raw, "true", StringComparison.OrdinalIgnoreCase) ||
                    raw == "1" ||
                    string.Equals(raw, "yes", StringComparison.OrdinalIgnoreCase))
                    return "true";

                if (string.Equals(raw, "false", StringComparison.OrdinalIgnoreCase) ||
                    raw == "0" ||
                    string.Equals(raw, "no", StringComparison.OrdinalIgnoreCase))
                    return "false";

                throw new InvalidOperationException(
                    $"Property '{name}' must be a boolean value. Got: '{raw}'. " +
                    "Accepted values: true, false, yes, no, 1, 0.");
            }

            throw new InvalidOperationException(
                $"Property '{name}' must be a boolean value.");
        }

        /// <summary>
        /// Builds a SubArea XElement from a JSON operation descriptor.
        /// Requires at least one of: entity, url, or default_dashboard.
        /// </summary>
        private static XElement BuildSubAreaElement(JsonElement op)
        {
            var entity = GetStringProp(op, "entity");
            var url = GetStringProp(op, "url");
            var defaultDashboard = GetStringProp(op, "default_dashboard");

            if (entity == null && url == null && defaultDashboard == null)
                throw new InvalidOperationException(
                    "BuildSubAreaElement requires 'entity', 'url', or 'default_dashboard'.");

            var id = GetStringProp(op, "id");

            if (entity != null)
            {
                id ??= $"sa_{entity.ToLowerInvariant().Replace(" ", "_")}";
                var elem = new XElement("SubArea",
                    new XAttribute("Id", id),
                    new XAttribute("Entity", entity));

                var passParams = NormalizeBoolProp(op, "pass_params");
                if (passParams != null)
                    elem.Add(new XAttribute("PassParams", passParams));

                var icon = GetStringProp(op, "icon");
                if (icon != null)
                    elem.Add(new XAttribute("Icon", icon));

                return elem;
            }

            if (url != null)
            {
                id ??= "sa_url";
                return new XElement("SubArea",
                    new XAttribute("Id", id),
                    new XAttribute("Url", url));
            }

            // default_dashboard
            id ??= "sa_dashboard";
            return new XElement("SubArea",
                new XAttribute("Id", id),
                new XAttribute("DefaultDashboard", defaultDashboard!));
        }

        /// <summary>
        /// Inserts an element into a parent at the specified position.
        /// Positions: "first", "last" (default), "before:ID", "after:ID", "index:N" (1-based).
        /// </summary>
        private static void InsertElement(XElement parent, XElement newElement, string position, string childName)
        {
            var pos = (position ?? "last").Trim().ToLowerInvariant();

            if (string.IsNullOrEmpty(pos) || pos == "last")
            {
                parent.Add(newElement);
                return;
            }

            if (pos == "first")
            {
                var firstChild = parent.Elements(childName).FirstOrDefault();
                if (firstChild != null)
                    firstChild.AddBeforeSelf(newElement);
                else
                    parent.Add(newElement);
                return;
            }

            if (pos.StartsWith("before:", StringComparison.OrdinalIgnoreCase))
            {
                var refId = pos.Substring("before:".Length).Trim();
                var refElem = parent.Elements(childName)
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, refId, StringComparison.OrdinalIgnoreCase));
                if (refElem == null)
                    throw new InvalidOperationException($"Element '{refId}' not found for insertion.");
                refElem.AddBeforeSelf(newElement);
                return;
            }

            if (pos.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var refId = pos.Substring("after:".Length).Trim();
                var refElem = parent.Elements(childName)
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, refId, StringComparison.OrdinalIgnoreCase));
                if (refElem == null)
                    throw new InvalidOperationException($"Element '{refId}' not found for insertion.");
                refElem.AddAfterSelf(newElement);
                return;
            }

            if (pos.StartsWith("index:", StringComparison.OrdinalIgnoreCase))
            {
                var indexStr = pos.Substring("index:".Length).Trim();
                if (int.TryParse(indexStr, out var index))
                {
                    var children = parent.Elements(childName).ToList();
                    if (index <= 0)
                    {
                        if (children.Count > 0)
                            children[0].AddBeforeSelf(newElement);
                        else
                            parent.Add(newElement);
                    }
                    else if (index >= children.Count)
                    {
                        parent.Add(newElement);
                    }
                    else
                    {
                        children[index].AddBeforeSelf(newElement);
                    }
                    return;
                }
            }

            throw new InvalidOperationException(
                $"Invalid position '{position}'. Valid values: 'first', 'last', 'before:ID', 'after:ID', 'index:N'.");
        }
    }
}
