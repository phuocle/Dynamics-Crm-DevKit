using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap
{
    internal static class SiteMapXmlOperationsHelper
    {
        internal static (string ModifiedSiteMapXml, List<string> OperationSummaries)
            ApplyOperations(XDocument doc, List<JsonElement> operations, int lcid)
        {
            var summaries = new List<string>();
            foreach (var op in operations)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    throw new InvalidOperationException(
                        "Each operation must have an 'action' field.\n" +
                        "Valid actions: add_area, add_group, add_subarea, remove_area, remove_group, remove_subarea, update_area, update_group, update_subarea, move_area, move_group, move_subarea.\n" +
                        "Read schema://sitemapxml for SiteMap XML structure and operation format.");

                var action = actionProp.GetString()?.ToLowerInvariant();
                try
                {
                    summaries.Add(DispatchOperation(doc, action, op, lcid));
                }
                catch (InvalidOperationException ex)
                {
                    throw new SiteMapOperationException(action, ex.Message);
                }
            }
            return (doc.ToString(SaveOptions.None), summaries);
        }

        private static string DispatchOperation(XDocument doc, string action, JsonElement op, int lcid)
        {
            return action switch
            {
                "add_area"       => ExecuteAddArea(doc, op, lcid),
                "add_group"      => ExecuteAddGroup(doc, op, lcid),
                "add_subarea"    => ExecuteAddSubArea(doc, op, lcid),
                "remove_area"    => ExecuteRemoveArea(doc, op),
                "remove_group"   => ExecuteRemoveGroup(doc, op),
                "remove_subarea" => ExecuteRemoveSubArea(doc, op),
                "update_area"    => ExecuteUpdateArea(doc, op, lcid),
                "update_group"   => ExecuteUpdateGroup(doc, op, lcid),
                "update_subarea" => ExecuteUpdateSubArea(doc, op, lcid),
                "move_area"      => ExecuteMoveArea(doc, op),
                "move_group"     => ExecuteMoveGroup(doc, op),
                "move_subarea"   => ExecuteMoveSubArea(doc, op),
                _ => throw new InvalidOperationException(
                    $"Unknown action '{action}'. Valid actions: add_area, add_group, add_subarea, " +
                    "remove_area, remove_group, remove_subarea, update_area, update_group, update_subarea, " +
                    "move_area, move_group, move_subarea")
            };
        }

        private static string ExecuteAddArea(XDocument doc, JsonElement op, int lcid)
        {
            var label = GetStringProp(op, "label");
            if (string.IsNullOrWhiteSpace(label))
                throw new InvalidOperationException("add_area requires 'label'.");

            var id = GetStringProp(op, "id") ?? $"area_{Sanitize(label)}";
            var position = GetStringProp(op, "position");
            var showGroups = GetStringProp(op, "show_groups");
            var icon = GetStringProp(op, "icon");

            var area = new XElement("Area", new XAttribute("Id", id));
            area.Add(BuildTitlesElement(label, lcid));
            if (showGroups != null) area.Add(new XAttribute("ShowGroups", showGroups));
            if (icon != null) area.Add(new XAttribute("Icon", icon));

            if (op.TryGetProperty("groups", out var groupsArr) && groupsArr.ValueKind == JsonValueKind.Array)
            {
                foreach (var g in groupsArr.EnumerateArray())
                {
                    var groupLabel = GetStringProp(g, "label") ?? "Default";
                    var groupId = GetStringProp(g, "id") ?? $"group_{Sanitize(groupLabel)}";
                    var group = new XElement("Group", new XAttribute("Id", groupId));
                    group.Add(BuildTitlesElement(groupLabel, lcid));

                    if (g.TryGetProperty("subareas", out var subAreasArr) && subAreasArr.ValueKind == JsonValueKind.Array)
                    {
                        foreach (var sa in subAreasArr.EnumerateArray())
                            group.Add(BuildSubAreaElement(sa, lcid));
                    }
                    area.Add(group);
                }
            }

            InsertElement(doc.Root, area, position, "Area");
            var groupCount = area.Elements("Group").Count();
            var subAreaCount = area.Elements("Group").SelectMany(g => g.Elements("SubArea")).Count();
            return $"Added Area '{label}' (Id={id})" +
                (groupCount > 0 ? $" with {groupCount} group(s), {subAreaCount} subarea(s)" : "");
        }

        private static string ExecuteAddGroup(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("add_group requires 'area'.");
            var label = GetStringProp(op, "label");
            if (string.IsNullOrWhiteSpace(label))
                throw new InvalidOperationException("add_group requires 'label'.");

            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");

            var id = GetStringProp(op, "id") ?? $"group_{Sanitize(label)}";
            var position = GetStringProp(op, "position");
            var isProfile = GetStringProp(op, "is_profile");

            var group = new XElement("Group", new XAttribute("Id", id));
            group.Add(BuildTitlesElement(label, lcid));
            if (isProfile != null) group.Add(new XAttribute("IsProfile", isProfile));

            if (op.TryGetProperty("subareas", out var subAreasArr) && subAreasArr.ValueKind == JsonValueKind.Array)
            {
                foreach (var sa in subAreasArr.EnumerateArray())
                    group.Add(BuildSubAreaElement(sa, lcid));
            }

            InsertElement(area, group, position, "Group");
            var subCount = group.Elements("SubArea").Count();
            return $"Added Group '{label}' (Id={id}) to Area '{GetAreaLabel(area)}'" +
                (subCount > 0 ? $" with {subCount} subarea(s)" : "");
        }

        private static string ExecuteAddSubArea(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("add_subarea requires 'area'.");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("add_subarea requires 'group'.");

            var entity = GetStringProp(op, "entity");
            var url = GetStringProp(op, "url");
            if (string.IsNullOrWhiteSpace(entity) && string.IsNullOrWhiteSpace(url))
                throw new InvalidOperationException("add_subarea requires 'entity' or 'url'.");

            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");

            var position = GetStringProp(op, "position");
            var subArea = BuildSubAreaElement(op, lcid);
            InsertElement(group, subArea, position, "SubArea");

            var saId = subArea.Attribute("Id")?.Value;
            var desc = entity ?? url;
            return $"Added SubArea '{desc}' (Id={saId}) to Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}'";
        }

        private static string ExecuteRemoveArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_area requires 'area'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var label = GetAreaLabel(area);
            area.Remove();
            return $"Removed Area '{label}'";
        }

        private static string ExecuteRemoveGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("remove_group requires 'group'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var label = GetGroupLabel(group);
            group.Remove();
            return $"Removed Group '{label}' from Area '{GetAreaLabel(area)}'";
        }

        private static string ExecuteRemoveSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("remove_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("remove_subarea requires 'subarea'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");
            var label = GetSubAreaLabel(subArea);
            subArea.Remove();
            return $"Removed SubArea '{label}' from Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}'";
        }

        private static string ExecuteUpdateArea(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_area requires 'area'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                area.Element("Titles")?.Remove();
                area.AddFirst(BuildTitlesElement(label, lcid));
                changes.Add($"label='{label}'");
            }
            var showGroups = NormalizeBoolProp(op, "show_groups");
            if (showGroups != null) { area.SetAttributeValue("ShowGroups", showGroups); changes.Add($"ShowGroups={showGroups}"); }
            var icon = GetStringProp(op, "icon");
            if (icon != null) { area.SetAttributeValue("Icon", icon); changes.Add($"Icon='{icon}'"); }

            return $"Updated Area '{GetAreaLabel(area)}': {string.Join(", ", changes)}";
        }

        private static string ExecuteUpdateGroup(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("update_group requires 'group'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                group.Element("Titles")?.Remove();
                group.AddFirst(BuildTitlesElement(label, lcid));
                changes.Add($"label='{label}'");
            }
            var isProfile = NormalizeBoolProp(op, "is_profile");
            if (isProfile != null) { group.SetAttributeValue("IsProfile", isProfile); changes.Add($"IsProfile={isProfile}"); }

            return $"Updated Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}': {string.Join(", ", changes)}";
        }

        private static string ExecuteUpdateSubArea(XDocument doc, JsonElement op, int lcid)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("update_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("update_subarea requires 'subarea'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                subArea.Element("Titles")?.Remove();
                subArea.AddFirst(BuildTitlesElement(label, lcid));
                changes.Add($"label='{label}'");
            }
            var entity = GetStringProp(op, "entity");
            if (entity != null) { subArea.SetAttributeValue("Entity", entity); changes.Add($"Entity='{entity}'"); }
            var url = GetStringProp(op, "url");
            if (url != null) { subArea.SetAttributeValue("Url", url); changes.Add($"Url='{url}'"); }
            var passParams = NormalizeBoolProp(op, "pass_params");
            if (passParams != null) { subArea.SetAttributeValue("PassParams", passParams); changes.Add($"PassParams='{passParams}'"); }
            var defaultDashboard = GetStringProp(op, "default_dashboard");
            if (defaultDashboard != null) { subArea.SetAttributeValue("DefaultDashboard", defaultDashboard); changes.Add($"DefaultDashboard='{defaultDashboard}'"); }
            var saIcon = GetStringProp(op, "icon");
            if (saIcon != null) { subArea.SetAttributeValue("Icon", saIcon); changes.Add($"Icon='{saIcon}'"); }
            var vectorIcon = GetStringProp(op, "vector_icon");
            if (vectorIcon != null) { subArea.SetAttributeValue("VectorIcon", vectorIcon); changes.Add($"VectorIcon='{vectorIcon}'"); }
            var client = GetStringProp(op, "client");
            if (client != null) { subArea.SetAttributeValue("Client", client); changes.Add($"Client='{client}'"); }

            return $"Updated SubArea '{GetSubAreaLabel(subArea)}': {string.Join(", ", changes)}";
        }

        private static string ExecuteMoveArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_area requires 'area'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_area requires 'position' (first, last, or after:<id>).");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var label = GetAreaLabel(area);
            area.Remove();
            InsertElement(doc.Root, area, position, "Area");
            return $"Moved Area '{label}' to position '{position}'";
        }

        private static string ExecuteMoveGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("move_group requires 'group'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_group requires 'position'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var label = GetGroupLabel(group);
            group.Remove();
            InsertElement(area, group, position, "Group");
            return $"Moved Group '{label}' in Area '{GetAreaLabel(area)}' to position '{position}'";
        }

        private static string ExecuteMoveSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("move_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("move_subarea requires 'subarea'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_subarea requires 'position'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");
            var label = GetSubAreaLabel(subArea);
            subArea.Remove();
            InsertElement(group, subArea, position, "SubArea");
            return $"Moved SubArea '{label}' in Group '{GetGroupLabel(group)}' to position '{position}'";
        }

        private static string GetStringProp(JsonElement el, string name)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
            {
                var val = prop.GetString();
                return string.IsNullOrWhiteSpace(val) ? null : val.Trim();
            }
            return null;
        }

        private static string NormalizeBoolProp(JsonElement el, string name)
        {
            var val = GetStringProp(el, name);
            if (val == null) return null;
            if (string.Equals(val, "true", StringComparison.OrdinalIgnoreCase) || val == "1" || string.Equals(val, "yes", StringComparison.OrdinalIgnoreCase))
                return "true";
            if (string.Equals(val, "false", StringComparison.OrdinalIgnoreCase) || val == "0" || string.Equals(val, "no", StringComparison.OrdinalIgnoreCase))
                return "false";
            throw new InvalidOperationException($"Property '{name}' must be a boolean ('true' or 'false'). Got: '{val}'");
        }

        private static string Sanitize(string s)
            => Regex.Replace(s.ToLowerInvariant(), @"[^a-z0-9]+", "_").Trim('_');

        private static XElement FindArea(XDocument doc, string areaRef)
        {
            var areas = doc.Root?.Elements("Area");
            if (areas == null) return null;

            var match = areas.FirstOrDefault(a =>
                string.Equals(a.Attribute("Id")?.Value, areaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            match = areas.FirstOrDefault(a =>
            {
                var title = a.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, areaRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            return areas.FirstOrDefault(a =>
                string.Equals(a.Attribute("Title")?.Value, areaRef, StringComparison.OrdinalIgnoreCase));
        }

        private static XElement FindGroup(XElement area, string groupRef)
        {
            var groups = area?.Elements("Group");
            if (groups == null) return null;

            var match = groups.FirstOrDefault(g =>
                string.Equals(g.Attribute("Id")?.Value, groupRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            match = groups.FirstOrDefault(g =>
            {
                var title = g.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, groupRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            return groups.FirstOrDefault(g =>
                string.Equals(g.Attribute("Title")?.Value, groupRef, StringComparison.OrdinalIgnoreCase));
        }

        private static XElement FindSubArea(XElement group, string subAreaRef)
        {
            var subAreas = group?.Elements("SubArea");
            if (subAreas == null) return null;

            var match = subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Id")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            match = subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Entity")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            match = subAreas.FirstOrDefault(s =>
            {
                var title = s.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, subAreaRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            return subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Title")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
        }

        private static string GetAreaLabel(XElement area)
        {
            return area.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? area.Attribute("Title")?.Value
                ?? area.Attribute("Id")?.Value ?? "?";
        }

        private static string GetGroupLabel(XElement group)
        {
            return group.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? group.Attribute("Title")?.Value
                ?? group.Attribute("Id")?.Value ?? "?";
        }

        private static string GetSubAreaLabel(XElement subArea)
        {
            return subArea.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? subArea.Attribute("Title")?.Value
                ?? subArea.Attribute("Entity")?.Value
                ?? subArea.Attribute("Id")?.Value ?? "?";
        }

        private static XElement BuildTitlesElement(string label, int lcid)
        {
            return new XElement("Titles",
                new XElement("Title",
                    new XAttribute("LCID", lcid.ToString()),
                    new XAttribute("Title", label)));
        }

        private static XElement BuildSubAreaElement(JsonElement sa, int lcid)
        {
            var entity = GetStringProp(sa, "entity");
            var url = GetStringProp(sa, "url");
            var defaultDashboard = GetStringProp(sa, "default_dashboard");

            if (entity == null && url == null && defaultDashboard == null)
                throw new InvalidOperationException("SubArea requires 'entity', 'url', or 'default_dashboard'.");

            var saLabel = GetStringProp(sa, "label");
            var saId = GetStringProp(sa, "id")
                ?? (entity != null ? $"sa_{Sanitize(entity)}" : $"sa_{Sanitize(saLabel ?? "item")}");

            var subArea = new XElement("SubArea", new XAttribute("Id", saId));
            if (entity != null) subArea.Add(new XAttribute("Entity", entity));
            if (url != null) subArea.Add(new XAttribute("Url", url));
            if (saLabel != null) subArea.Add(BuildTitlesElement(saLabel, lcid));

            var client = GetStringProp(sa, "client");
            if (client != null) subArea.Add(new XAttribute("Client", client));
            var passParams = NormalizeBoolProp(sa, "pass_params");
            if (passParams != null) subArea.Add(new XAttribute("PassParams", passParams));
            if (defaultDashboard != null) subArea.Add(new XAttribute("DefaultDashboard", defaultDashboard));
            var saIcon = GetStringProp(sa, "icon");
            if (saIcon != null) subArea.Add(new XAttribute("Icon", saIcon));
            var vectorIcon = GetStringProp(sa, "vector_icon");
            if (vectorIcon != null) subArea.Add(new XAttribute("VectorIcon", vectorIcon));

            return subArea;
        }

        private static void InsertElement(XElement parent, XElement newElement, string position, string childName)
        {
            if (string.IsNullOrEmpty(position) || string.Equals(position, "last", StringComparison.OrdinalIgnoreCase))
            {
                parent.Add(newElement);
                return;
            }

            if (string.Equals(position, "first", StringComparison.OrdinalIgnoreCase))
            {
                var first = parent.Elements(childName).FirstOrDefault();
                if (first != null)
                    first.AddBeforeSelf(newElement);
                else
                    parent.Add(newElement);
                return;
            }

            if (position.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var afterId = position.Substring(6).Trim();
                var target = parent.Elements(childName).FirstOrDefault(e =>
                    string.Equals(e.Attribute("Id")?.Value, afterId, StringComparison.OrdinalIgnoreCase));
                if (target != null)
                    target.AddAfterSelf(newElement);
                else
                    throw new InvalidOperationException($"Position target '{afterId}' not found for insertion.");
                return;
            }

            throw new InvalidOperationException($"Invalid position '{position}'. Must be 'first', 'last', or 'after:<id>'.");
        }
    }

    internal sealed class SiteMapOperationException : Exception
    {
        public string Action { get; }
        public string InnerMessage { get; }

        public SiteMapOperationException(string action, string message)
            : base($"Error in operation '{action}': {message}")
        {
            Action = action;
            InnerMessage = message;
        }
    }
}
