using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.App
{
    internal sealed class AppNavigationOperationsResult
    {
        public string ModifiedSiteMapXml { get; set; }
        public List<string> OperationSummaries { get; set; } = [];
        public List<string> AddedEntities { get; set; } = [];
    }

    internal sealed class AppNavigationOperationException : Exception
    {
        public string Action { get; }

        public AppNavigationOperationException(string action, string message) : base(message)
        {
            Action = action;
        }
    }

    internal static class AppNavigationOperationsHelper
    {
        internal static AppNavigationOperationsResult ApplyOperations(
            XDocument doc, List<JsonElement> operations, int lcid)
        {
            if (doc.Root == null)
                doc.Add(new XElement("SiteMap"));

            var result = new AppNavigationOperationsResult();
            foreach (var op in operations)
            {
                var action = GetStringProp(op, "action");
                if (string.IsNullOrWhiteSpace(action))
                    throw new AppNavigationOperationException("", "Each operation must have an 'action' field.");

                try
                {
                    result.OperationSummaries.Add(Dispatch(doc, op, action.Trim().ToLowerInvariant(), lcid, result));
                }
                catch (InvalidOperationException ex)
                {
                    throw new AppNavigationOperationException(action, ex.Message);
                }
            }

            result.ModifiedSiteMapXml = doc.ToString(SaveOptions.None);
            return result;
        }

        private static string Dispatch(XDocument doc, JsonElement op, string action, int lcid, AppNavigationOperationsResult result) =>
            action switch
            {
                "add_area" => AddArea(doc, op, lcid),
                "order_area" => OrderArea(doc, op),
                "remove_area" => RemoveArea(doc, op),
                "add_group" => AddGroup(doc, op, lcid),
                "order_group" => OrderGroup(doc, op),
                "remove_group" => RemoveGroup(doc, op),
                "add_item" => AddItem(doc, op, lcid, result),
                "move_item" => MoveItem(doc, op),
                "remove_item" => RemoveItem(doc, op),
                _ => throw new InvalidOperationException(
                    $"Unknown action '{action}'. Valid actions: add_area, order_area, remove_area, add_group, order_group, remove_group, add_item, move_item, remove_item.")
            };

        private static string AddArea(XDocument doc, JsonElement op, int lcid)
        {
            var label = Required(op, "label", "add_area");
            var id = GetStringProp(op, "id") ?? $"area_{Sanitize(label)}";
            if (FindArea(doc, id) != null)
                return $"Area '{label}' already exists (Id={id}); no changes made";

            var area = new XElement("Area",
                new XAttribute("Id", id),
                new XAttribute("ResourceId", "SitemapDesigner.NewArea"),
                new XAttribute("ShowGroups", GetBoolString(op, "show_groups", "true")));
            var icon = GetStringProp(op, "icon");
            if (!string.IsNullOrWhiteSpace(icon))
                area.Add(new XAttribute("Icon", icon));
            area.Add(BuildTitles(label, lcid));

            InsertElement(doc.Root, area, GetStringProp(op, "position"), "Area", r => FindArea(doc, r));
            return $"Added Area '{label}' (Id={id})";
        }

        private static string OrderArea(XDocument doc, JsonElement op)
        {
            var areaRef = Required(op, "area", "order_area");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            InsertElement(doc.Root, area, Required(op, "position", "order_area"), "Area", r => FindArea(doc, r));
            return $"Moved Area '{GetTitle(area) ?? area.Attribute("Id")?.Value}' to position '{GetStringProp(op, "position")}'";
        }

        private static string RemoveArea(XDocument doc, JsonElement op)
        {
            var areaRef = Required(op, "area", "remove_area");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var label = GetTitle(area) ?? area.Attribute("Id")?.Value;
            area.Remove();
            return $"Removed Area '{label}' from navigation";
        }

        private static string AddGroup(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = Required(op, "area", "add_group");
            var label = Required(op, "label", "add_group");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var id = GetStringProp(op, "id") ?? $"group_{Sanitize(label)}";
            if (FindGroup(area, id) != null)
                return $"Group '{label}' already exists in Area '{GetTitle(area)}'; no changes made";

            var group = new XElement("Group",
                new XAttribute("Id", id),
                new XAttribute("ResourceId", "SitemapDesigner.NewGroup"),
                new XAttribute("IsProfile", "false"),
                new XAttribute("ToolTipResourseId", "SitemapDesigner.Unknown"));
            group.Add(BuildTitles(label, lcid));

            InsertElement(area, group, GetStringProp(op, "position"), "Group", r => FindGroup(area, r));
            return $"Added Group '{label}' (Id={id}) to Area '{GetTitle(area)}'";
        }

        private static string OrderGroup(XDocument doc, JsonElement op)
        {
            var areaRef = Required(op, "area", "order_group");
            var groupRef = Required(op, "group", "order_group");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetTitle(area)}'.");
            InsertElement(area, group, Required(op, "position", "order_group"), "Group", r => FindGroup(area, r));
            return $"Moved Group '{GetTitle(group)}' in Area '{GetTitle(area)}' to position '{GetStringProp(op, "position")}'";
        }

        private static string RemoveGroup(XDocument doc, JsonElement op)
        {
            var areaRef = Required(op, "area", "remove_group");
            var groupRef = Required(op, "group", "remove_group");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetTitle(area)}'.");
            var label = GetTitle(group) ?? group.Attribute("Id")?.Value;
            group.Remove();
            return $"Removed Group '{label}' from Area '{GetTitle(area)}'";
        }

        private static string AddItem(XDocument doc, JsonElement op, int lcid, AppNavigationOperationsResult result)
        {
            var areaRef = Required(op, "area", "add_item");
            var groupRef = Required(op, "group", "add_item");
            var entity = Required(op, "entity", "add_item");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetTitle(area)}'.");

            var existingInGroup = group.Elements("SubArea")
                .FirstOrDefault(sa => string.Equals(sa.Attribute("Entity")?.Value, entity, StringComparison.OrdinalIgnoreCase));
            if (existingInGroup != null)
                return $"Entity item '{entity}' already exists in Group '{GetTitle(group)}'; no changes made";

            var id = GetStringProp(op, "id") ?? $"sa_{Sanitize(entity)}";
            if (FindSubArea(doc, id, null, null).Count > 0)
                throw new InvalidOperationException($"SubArea id/item '{id}' already exists elsewhere. Provide a unique id.");

            var subArea = new XElement("SubArea",
                new XAttribute("Id", id),
                new XAttribute("Entity", entity));
            var label = GetStringProp(op, "label");
            if (!string.IsNullOrWhiteSpace(label))
                subArea.Add(BuildTitles(label, lcid));

            InsertElement(group, subArea, GetStringProp(op, "position"), "SubArea", r => FindSubAreaInGroup(group, r));
            if (!result.AddedEntities.Any(e => string.Equals(e, entity, StringComparison.OrdinalIgnoreCase)))
                result.AddedEntities.Add(entity);
            return $"Added Entity item '{entity}' (Id={id}) to Group '{GetTitle(group)}' in Area '{GetTitle(area)}'";
        }

        private static string MoveItem(XDocument doc, JsonElement op)
        {
            var itemRef = Required(op, "item", "move_item");
            var toAreaRef = Required(op, "to_area", "move_item");
            var toGroupRef = Required(op, "to_group", "move_item");
            var fromAreaRef = GetStringProp(op, "from_area");
            var fromGroupRef = GetStringProp(op, "from_group");

            var matches = FindSubArea(doc, itemRef, fromAreaRef, fromGroupRef);
            if (matches.Count == 0)
                throw new InvalidOperationException($"Item '{itemRef}' not found.");
            if (matches.Count > 1)
                throw new InvalidOperationException($"Multiple items match '{itemRef}'. Provide from_area and from_group to disambiguate.");

            var toArea = FindArea(doc, toAreaRef)
                ?? throw new InvalidOperationException($"Target Area '{toAreaRef}' not found.");
            var toGroup = FindGroup(toArea, toGroupRef)
                ?? throw new InvalidOperationException($"Target Group '{toGroupRef}' not found in Area '{GetTitle(toArea)}'.");

            var subArea = matches[0];
            var desc = subArea.Attribute("Entity")?.Value ?? GetTitle(subArea) ?? subArea.Attribute("Id")?.Value;
            InsertElement(toGroup, subArea, GetStringProp(op, "position"), "SubArea", r => FindSubAreaInGroup(toGroup, r));
            return $"Moved item '{desc}' to Group '{GetTitle(toGroup)}' in Area '{GetTitle(toArea)}'";
        }

        private static string RemoveItem(XDocument doc, JsonElement op)
        {
            var areaRef = Required(op, "area", "remove_item");
            var groupRef = Required(op, "group", "remove_item");
            var itemRef = Required(op, "item", "remove_item");
            var matches = FindSubArea(doc, itemRef, areaRef, groupRef);
            if (matches.Count == 0)
                throw new InvalidOperationException($"Item '{itemRef}' not found in Group '{groupRef}' / Area '{areaRef}'.");
            if (matches.Count > 1)
                throw new InvalidOperationException($"Multiple items match '{itemRef}'. Provide a more specific item id or entity logical name.");
            var subArea = matches[0];
            var desc = subArea.Attribute("Entity")?.Value ?? GetTitle(subArea) ?? subArea.Attribute("Id")?.Value;
            subArea.Remove();
            return $"Removed item '{desc}' from navigation";
        }

        private static void InsertElement(
            XElement parent,
            XElement element,
            string position,
            string siblingName,
            Func<string, XElement> findSibling)
        {
            if (parent == null)
                throw new InvalidOperationException("SiteMap root is missing.");

            if (element.Parent != null)
                element.Remove();
            position = string.IsNullOrWhiteSpace(position) ? "last" : position.Trim();
            var siblings = parent.Elements(siblingName).ToList();
            if (siblings.Count == 0 || position.Equals("last", StringComparison.OrdinalIgnoreCase))
            {
                parent.Add(element);
                return;
            }
            if (position.Equals("first", StringComparison.OrdinalIgnoreCase))
            {
                siblings[0].AddBeforeSelf(element);
                return;
            }

            if (TryParseOneBasedIndex(position, out var index))
            {
                InsertAt(parent, element, siblingName, index);
                return;
            }

            var (mode, reference) = SplitRelativePosition(position);
            if (mode == null)
                throw new InvalidOperationException($"Unsupported position '{position}'. Use first, last, before:<target>, after:<target>, index:<n>, or a 1-based number.");

            var refEl = findSibling(reference)
                ?? throw new InvalidOperationException($"Reference '{reference}' not found for position '{position}'.");
            if (refEl.Parent != parent)
                throw new InvalidOperationException($"Reference '{reference}' is not in the same parent.");

            if (mode == "before") refEl.AddBeforeSelf(element);
            else refEl.AddAfterSelf(element);
        }

        private static void InsertAt(XElement parent, XElement element, string siblingName, int oneBasedIndex)
        {
            var siblings = parent.Elements(siblingName).ToList();
            if (oneBasedIndex <= 1)
            {
                if (siblings.Count == 0) parent.Add(element);
                else siblings[0].AddBeforeSelf(element);
                return;
            }

            if (oneBasedIndex > siblings.Count)
            {
                parent.Add(element);
                return;
            }

            siblings[oneBasedIndex - 1].AddBeforeSelf(element);
        }

        private static XElement FindArea(XDocument doc, string reference) =>
            doc.Root?.Elements("Area").FirstOrDefault(a => Matches(a, reference));

        private static XElement FindGroup(XElement area, string reference) =>
            area?.Elements("Group").FirstOrDefault(g => Matches(g, reference));

        private static XElement FindSubAreaInGroup(XElement group, string reference) =>
            group?.Elements("SubArea").FirstOrDefault(sa => MatchesSubArea(sa, reference));

        private static List<XElement> FindSubArea(XDocument doc, string reference, string areaRef, string groupRef)
        {
            var areas = doc.Root?.Elements("Area") ?? [];
            if (!string.IsNullOrWhiteSpace(areaRef))
                areas = areas.Where(a => Matches(a, areaRef));

            var matches = new List<XElement>();
            foreach (var area in areas)
            {
                var groups = area.Elements("Group");
                if (!string.IsNullOrWhiteSpace(groupRef))
                    groups = groups.Where(g => Matches(g, groupRef));
                foreach (var group in groups)
                    matches.AddRange(group.Elements("SubArea").Where(sa => MatchesSubArea(sa, reference)));
            }
            return matches;
        }

        private static bool Matches(XElement element, string reference)
        {
            if (element == null || string.IsNullOrWhiteSpace(reference)) return false;
            return string.Equals(element.Attribute("Id")?.Value, reference, StringComparison.OrdinalIgnoreCase)
                || string.Equals(GetTitle(element), reference, StringComparison.OrdinalIgnoreCase);
        }

        private static bool MatchesSubArea(XElement element, string reference) =>
            Matches(element, reference)
            || string.Equals(element?.Attribute("Entity")?.Value, reference, StringComparison.OrdinalIgnoreCase);

        private static XElement BuildTitles(string label, int lcid) =>
            new("Titles", new XElement("Title",
                new XAttribute("LCID", lcid),
                new XAttribute("Title", label)));

        private static string GetTitle(XElement element) =>
            element?.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value;

        private static string Required(JsonElement op, string name, string action)
        {
            var value = GetStringProp(op, name);
            if (string.IsNullOrWhiteSpace(value))
                throw new InvalidOperationException($"{action} requires '{name}'.");
            return value;
        }

        private static string GetStringProp(JsonElement op, string name)
        {
            if (!op.TryGetProperty(name, out var prop))
                return null;
            return prop.ValueKind switch
            {
                JsonValueKind.String => prop.GetString(),
                JsonValueKind.Number => prop.GetRawText(),
                JsonValueKind.True => "true",
                JsonValueKind.False => "false",
                _ => null
            };
        }

        private static string GetBoolString(JsonElement op, string name, string defaultValue)
        {
            if (!op.TryGetProperty(name, out var prop))
                return defaultValue;
            return prop.ValueKind switch
            {
                JsonValueKind.True => "true",
                JsonValueKind.False => "false",
                JsonValueKind.String => prop.GetString()?.Equals("true", StringComparison.OrdinalIgnoreCase) == true ? "true" : "false",
                _ => defaultValue
            };
        }

        private static bool TryParseOneBasedIndex(string position, out int index)
        {
            index = 0;
            if (string.IsNullOrWhiteSpace(position)) return false;
            var p = position.Trim();
            if (p.StartsWith("index:", StringComparison.OrdinalIgnoreCase))
                p = p.Substring("index:".Length);
            return int.TryParse(p, out index) && index > 0;
        }

        private static (string Mode, string Reference) SplitRelativePosition(string position)
        {
            var parts = position.Split(':', 2);
            if (parts.Length != 2) return (null, null);
            var mode = parts[0].Trim().ToLowerInvariant();
            if (mode != "before" && mode != "after") return (null, null);
            return (mode, parts[1].Trim());
        }

        private static string Sanitize(string input)
        {
            var sanitized = Regex.Replace(input ?? "", @"[^A-Za-z0-9_]+", "_").Trim('_').ToLowerInvariant();
            return string.IsNullOrWhiteSpace(sanitized) ? Guid.NewGuid().ToString("N") : sanitized;
        }
    }
}
