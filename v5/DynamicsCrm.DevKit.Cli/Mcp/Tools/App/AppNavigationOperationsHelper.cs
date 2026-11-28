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
        internal HashSet<XElement> ComponentItems { get; } = [];
        internal Dictionary<XElement, string> ItemIconNames { get; } = [];
        public int ChangedOperations { get; set; }
        public int NoOpOperations { get; set; }
        public bool HasChanges => ChangedOperations > 0;
    }

    internal sealed class AppNavigationOperationException : Exception
    {
        public string Action { get; }
        public string Hint { get; }

        public AppNavigationOperationException(string action, string message, string hint = null) : base(message)
        {
            Action = action;
            Hint = hint;
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
                    throw new AppNavigationOperationException("", "Each operation must have an 'action' field.",
                        "Add an \"action\" field to every operation, e.g. \"action\":\"add_group\".");

                try
                {
                    var summary = Dispatch(doc, op, action.Trim().ToLowerInvariant(), lcid, result);
                    result.OperationSummaries.Add(summary);
                    if (IsNoOpSummary(summary))
                        result.NoOpOperations++;
                    else
                        result.ChangedOperations++;
                }
                catch (AppNavigationOperationException)
                {
                    throw;
                }
                catch (InvalidOperationException ex)
                {
                    throw new AppNavigationOperationException(action, ex.Message,
                        "Fix the operation fields per the message and re-call; use manage_ui(resource='app', action='detail') to inspect current area/group/item ids.");
                }
            }

            result.ModifiedSiteMapXml = doc.ToString(SaveOptions.None);
            return result;
        }

        private static bool IsNoOpSummary(string summary) =>
            !string.IsNullOrWhiteSpace(summary) &&
            summary.IndexOf("no changes made", StringComparison.OrdinalIgnoreCase) >= 0;

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
                "update_item" => UpdateItem(doc, op, lcid, result),
                "move_item" => MoveItem(doc, op),
                "remove_item" => RemoveItem(doc, op),
                _ => throw new InvalidOperationException(
                    $"Unknown action '{action}'. Valid actions: add_area, order_area, remove_area, add_group, order_group, remove_group, add_item, update_item, move_item, remove_item.")
            };

        private static string AddArea(XDocument doc, JsonElement op, int lcid)
        {
            var label = RequiredLabel(op, "add_area");
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
            var label = RequiredLabel(op, "add_group");
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
            var target = ReadItemTarget(op, "add_item")
                ?? throw new InvalidOperationException("add_item requires 'entity', 'url', 'dashboard_id' (alias: 'default_dashboard'), or 'webresource'.");
            var icon = ReadItemIcon(op, "add_item", target.Kind is "Dashboard" or "WebResource");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetTitle(area)}'.");

            if (target.Attribute == "Entity" && group.Elements("SubArea").Any(target.Matches))
                return $"Entity item '{target.Value}' already exists in Group '{GetTitle(group)}'; no changes made";

            var label = GetLabel(op);
            var id = GetStringProp(op, "id") ?? $"sa_{Sanitize(target.Attribute == "Entity" ? target.Value : label ?? target.Value)}";
            var existing = group.Elements("SubArea")
                .FirstOrDefault(sa => string.Equals(sa.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase));
            if (existing != null && target.Matches(existing))
            {
                var existingIcon = GetItemIcon(existing);
                if (icon != null &&
                    !string.Equals(existingIcon, WebResourcePathPrefix + icon, StringComparison.OrdinalIgnoreCase) &&
                    !string.Equals(existingIcon, WebResourcePrefix + icon, StringComparison.OrdinalIgnoreCase))
                {
                    throw new InvalidOperationException($"Item '{id}' already exists with a different icon. Use update_item to set its icon.");
                }
                if (target.IsAppComponent)
                    result.ComponentItems.Add(existing);
                if (SetItemIcon(existing, icon, result))
                    return $"Updated icon for item '{id}' in Group '{GetTitle(group)}'";
                return $"Item '{id}' already exists in Group '{GetTitle(group)}'; no changes made";
            }
            if (FindSubArea(doc, id, null, null).Count > 0)
                throw new AppNavigationOperationException("add_item", $"SubArea id/item '{id}' already exists elsewhere.", "Provide a unique id or set the 'id' field on the add_item operation.");

            var subArea = new XElement("SubArea", new XAttribute("Id", id));
            target.WriteTo(subArea);
            SetItemIcon(subArea, icon, result);
            if (!string.IsNullOrWhiteSpace(label))
                subArea.Add(BuildTitles(label, lcid));

            InsertElement(group, subArea, GetStringProp(op, "position"), "SubArea", r => FindSubAreaInGroup(group, r));
            if (target.Attribute == "Entity" &&
                !result.AddedEntities.Contains(target.Value, StringComparer.OrdinalIgnoreCase))
                result.AddedEntities.Add(target.Value);
            if (target.IsAppComponent)
                result.ComponentItems.Add(subArea);
            return $"Added {target.Kind} item '{target.Value}' (Id={id}) to Group '{GetTitle(group)}' in Area '{GetTitle(area)}'";
        }

        private static string UpdateItem(XDocument doc, JsonElement op, int lcid, AppNavigationOperationsResult result)
        {
            var areaRef = Required(op, "area", "update_item");
            var groupRef = Required(op, "group", "update_item");
            var itemRef = Required(op, "item", "update_item");
            var matches = FindSubArea(doc, itemRef, areaRef, groupRef);
            if (matches.Count != 1)
                throw new InvalidOperationException($"Expected one item matching '{itemRef}' in Group '{groupRef}' / Area '{areaRef}'. Found {matches.Count}.");

            var target = ReadItemTarget(op, "update_item");
            var label = GetLabel(op);
            var subArea = matches[0];
            var supportsIcon = target != null
                ? target.Kind is "Dashboard" or "WebResource"
                : subArea.Attribute("DefaultDashboard") != null ||
                  (subArea.Attribute("Entity") == null &&
                   ((string)subArea.Attribute("Url"))?.StartsWith(WebResourcePrefix, StringComparison.OrdinalIgnoreCase) == true);
            var icon = ReadItemIcon(op, "update_item", supportsIcon);
            if (target == null && string.IsNullOrWhiteSpace(label) && icon == null)
                throw new InvalidOperationException("update_item requires a target or a 'label'. Dashboard and WebResource items also accept 'icon'.");

            var changed = SetItemIcon(subArea, icon, result);
            if (target != null)
            {
                if (target.RequiresWrite(subArea))
                {
                    if (target.Attribute == "Entity" && subArea.ElementsBeforeSelf("SubArea")
                        .Concat(subArea.ElementsAfterSelf("SubArea")).Any(target.Matches))
                        throw new InvalidOperationException($"Entity item '{target.Value}' already exists in Group '{groupRef}'.");
                    target.WriteTo(subArea);
                    if (target.Attribute == "Entity" &&
                        !result.AddedEntities.Contains(target.Value, StringComparer.OrdinalIgnoreCase))
                        result.AddedEntities.Add(target.Value);
                    changed = true;
                }
                if (target.IsAppComponent)
                    result.ComponentItems.Add(subArea);
                else
                    result.ComponentItems.Remove(subArea);
            }

            if (!string.IsNullOrWhiteSpace(label))
            {
                var titles = subArea.Element("Titles");
                var title = titles?.Elements("Title").FirstOrDefault(t => (int?)t.Attribute("LCID") == lcid);
                if (title == null)
                {
                    if (titles == null)
                        subArea.AddFirst(BuildTitles(label, lcid));
                    else
                        titles.Add(new XElement("Title", new XAttribute("LCID", lcid), new XAttribute("Title", label)));
                    changed = true;
                }
                else if ((string)title.Attribute("Title") != label)
                {
                    title.SetAttributeValue("Title", label);
                    changed = true;
                }
            }

            return changed ? $"Updated item '{itemRef}'" : $"Item '{itemRef}' already matches; no changes made";
        }

        internal const string WebResourcePrefix = "$webresource:";
        private const string WebResourcePathPrefix = "/WebResources/";

        internal static string GetItemIcon(XElement item)
        {
            var vectorIcon = (string)item.Attribute("VectorIcon");
            return string.IsNullOrWhiteSpace(vectorIcon) ? (string)item.Attribute("Icon") : vectorIcon;
        }

        private static string ReadItemIcon(JsonElement op, string action, bool supportsIcon)
        {
            var icon = ReadOptionalString(op, action, "icon");
            if (icon == null)
                return null;
            if (!supportsIcon)
                throw new InvalidOperationException($"{action} supports 'icon' on Dashboard and WebResource items only.");
            var prefix = icon.StartsWith(WebResourcePathPrefix, StringComparison.OrdinalIgnoreCase)
                ? WebResourcePathPrefix : WebResourcePrefix;
            return ReadWebResourceName(icon, action, prefix);
        }

        private static bool SetItemIcon(XElement item, string icon, AppNavigationOperationsResult result)
        {
            if (icon == null)
                return false;
            result.ItemIconNames[item] = icon;
            var path = WebResourcePathPrefix + icon;
            if ((string)item.Attribute("VectorIcon") == path && (string)item.Attribute("Icon") == path)
                return false;
            item.SetAttributeValue("VectorIcon", path);
            item.SetAttributeValue("Icon", path);
            return true;
        }

        private static string ReadOptionalString(JsonElement op, string action, string name)
        {
            if (!op.TryGetProperty(name, out var value))
                return null;
            if (value.ValueKind != JsonValueKind.String || string.IsNullOrWhiteSpace(value.GetString()))
                throw new InvalidOperationException($"{action} requires '{name}' to be a non-empty string.");
            return value.GetString().Trim();
        }

        private static string ReadWebResourceName(string reference, string action, string prefix)
        {
            var name = reference.StartsWith(prefix, StringComparison.OrdinalIgnoreCase)
                ? reference[prefix.Length..].Trim() : reference;
            if (name.Length == 0)
                throw new InvalidOperationException($"{action} requires a web resource name after '{prefix}'.");
            return name;
        }

        private static ItemTarget ReadItemTarget(JsonElement op, string action)
        {
            // Keep the original entity input coercion for existing operation callers.
            var entity = GetStringProp(op, "entity");
            if (op.TryGetProperty("entity", out _) && string.IsNullOrWhiteSpace(entity))
                throw new InvalidOperationException($"{action} requires 'entity'.");
            var url = ReadOptionalString(op, action, "url");
            var dashboard = ReadOptionalString(op, action, "dashboard_id");
            var defaultDashboard = ReadOptionalString(op, action, "default_dashboard");
            var webResource = ReadOptionalString(op, action, "webresource");
            if (dashboard != null && defaultDashboard != null)
                throw new InvalidOperationException($"{action} accepts only one of 'dashboard_id' or 'default_dashboard'.");
            dashboard ??= defaultDashboard;
            if (new[] { entity, url, dashboard, webResource }.Count(value => value != null) > 1)
                throw new InvalidOperationException($"{action} accepts only one target: 'entity', 'url', 'dashboard_id' (alias: 'default_dashboard'), or 'webresource'.");
            if (entity != null)
                return new ItemTarget("Entity", "Entity", entity);
            if (dashboard != null)
            {
                if (!Guid.TryParse(dashboard, out var id) || id == Guid.Empty)
                    throw new InvalidOperationException($"{action} requires a non-empty dashboard GUID.");
                return new ItemTarget("Dashboard", "DefaultDashboard", id.ToString("D"));
            }
            if (webResource != null)
                return new ItemTarget("WebResource", "Url", WebResourcePrefix + ReadWebResourceName(webResource, action, WebResourcePrefix));
            return url == null ? null : new ItemTarget("URL", "Url", url);
        }

        private sealed record ItemTarget(string Kind, string Attribute, string Value)
        {
            public bool IsAppComponent => Kind is "Dashboard" or "WebResource";

            private const string DashboardUrl = "/workplace/home_dashboards.aspx";

            public bool RequiresWrite(XElement item) =>
                !Matches(item) ||
                (Attribute == "DefaultDashboard" &&
                    ((string)item.Attribute(Attribute) != Value || (string)item.Attribute("Url") != DashboardUrl));

            public bool Matches(XElement item)
            {
                var current = (string)item.Attribute(Attribute);
                return Attribute switch
                {
                    "DefaultDashboard" => Guid.TryParse(current, out var id) && id == Guid.Parse(Value),
                    "Url" => item.Attribute("DefaultDashboard") == null && item.Attribute("Entity") == null &&
                        string.Equals(current, Value, Kind == "WebResource" ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal),
                    _ => string.Equals(current, Value, StringComparison.OrdinalIgnoreCase)
                };
            }

            public void WriteTo(XElement item)
            {
                item.SetAttributeValue("Entity", null);
                item.SetAttributeValue("DefaultDashboard", null);
                item.SetAttributeValue("Url", null);
                item.SetAttributeValue(Attribute, Value);
                if (Kind == "Dashboard")
                    item.SetAttributeValue("Url", DashboardUrl);
            }
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

        private static string RequiredLabel(JsonElement op, string action)
        {
            var label = GetLabel(op);
            if (string.IsNullOrWhiteSpace(label))
                throw new InvalidOperationException($"{action} requires 'label' (alias: 'title' or 'name').");
            return label;
        }

        private static string GetLabel(JsonElement op)
            => GetStringProp(op, "label")
                ?? GetStringProp(op, "title")
                ?? GetStringProp(op, "name");

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
