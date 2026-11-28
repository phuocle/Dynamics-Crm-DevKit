using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormWebResourceOperations(IOrganizationService orgService)
    {
        private const string ClassId = "{" + ControlClassId.WEB_RESOURCE + "}";
        private static readonly string[] NameKeys = ["webresource_name", "url", "webresource"];
        private static readonly (string Key, string Element)[] TextParameters =
        [
            ("data", "Data"), ("alt_text", "AltText"), ("size_type", "SizeType"),
            ("horizontal_alignment", "HorizontalAlignment"), ("vertical_alignment", "VerticalAlignment")
        ];
        private static readonly (string Key, string Element)[] BoolParameters =
        [
            ("pass_parameters", "PassParameters"), ("security", "Security"), ("border", "Border"),
            ("show_on_mobile_client", "ShowOnMobileClient"), ("preload", "Preload")
        ];
        private static readonly string[] PatchKeys =
        [
            "label", "show_label", "showlabel", "rowspan", "colspan", "visible", "hide_on_phone",
            "scrolling", "height", "width", .. TextParameters.Select(p => p.Key), .. BoolParameters.Select(p => p.Key)
        ];

        public string Apply(XDocument formDoc, JsonElement op, string verb)
        {
            var validKeys = verb switch
            {
                "add" => new[] { "tab", "section", "position" }.Concat(PatchKeys),
                "update" => PatchKeys,
                "remove" => [],
                "move" => ["target_tab", "target_section", "position"],
                _ => throw new InvalidOperationException(
                    $"Unknown manage_action '{verb}' for manage_webresource. Valid: add, update, remove, delete, move.")
            };
            var allowed = new[] { "action", "manage_action", "control_id" }.Concat(NameKeys).Concat(validKeys).ToHashSet();
            foreach (var property in op.EnumerateObject())
                if (!allowed.Contains(property.Name))
                    throw new InvalidOperationException(
                        $"Unsupported key '{property.Name}' for manage_webresource {verb}. Valid keys: {string.Join(", ", allowed.Order())}.");

            var controlId = ReadIdentifier(op, "control_id");
            var resourceName = ReadIdentifier(op, NameKeys);
            if (verb == "add")
                return Add(formDoc, op, controlId, resourceName);

            var control = FindControl(formDoc, controlId, resourceName);
            var cell = control.Parent;
            switch (verb)
            {
                case "update":
                    // With an explicit ID, the name is the new resource. Otherwise it is the selector.
                    if (controlId != null && resourceName != null &&
                        !Same(resourceName, (string)control.Element("parameters")?.Element("Url")))
                    {
                        var resource = ResolveResource(resourceName);
                        SetResource(control, resource);
                    }
                    PatchCell(cell, op);
                    break;
                case "remove":
                    DetachCell(cell);
                    break;
                case "move":
                    var sourceSection = cell.Ancestors("section").First();
                    var sourceTab = sourceSection.Ancestors("tab").First();
                    var targetTabName = ReadIdentifier(op, "target_tab");
                    var targetSectionName = ReadIdentifier(op, "target_section");
                    var targetTab = targetTabName == null ? sourceTab : FindTab(formDoc, targetTabName);
                    var section = targetSectionName == null && targetTab == sourceTab
                        ? sourceSection
                        : FindSection(targetTab, targetSectionName ?? (string)sourceSection.Attribute("name")
                            ?? throw new InvalidOperationException("Provide 'target_section' when moving from an unnamed section to another tab."));
                    PlaceCell(section, cell, ReadIdentifier(op, "position") ?? "last");
                    break;
            }
            return $"manage_webresource: {verb} '{(string)control.Attribute("id")}'";
        }

        private string Add(XDocument formDoc, JsonElement op, string controlId, string resourceName)
        {
            var section = FindSection(FindTab(formDoc, RequireIdentifier(op, "tab")), RequireIdentifier(op, "section"));
            if (resourceName == null)
                throw new InvalidOperationException("manage_webresource add requires 'webresource_name' (or 'url' / 'webresource').");

            var ids = FormXmlHelpers.CollectExistingControlIds(formDoc);
            if (controlId != null && ids.Contains(controlId))
                throw new InvalidOperationException($"WebResource control_id '{controlId}' already exists on the form.");

            var resource = ResolveResource(resourceName);
            var fileName = Path.GetFileName(resource.GetAttributeValue<string>("name"));
            controlId ??= FormXmlHelpers.DeduplicateControlId(
                "WebResource_" + Regex.Replace(Path.GetFileNameWithoutExtension(fileName), "[^a-zA-Z0-9_]", "_"), ids);
            var displayName = resource.GetAttributeValue<string>("displayname");
            var control = new XElement("control", new XAttribute("id", controlId), new XAttribute("classid", ClassId),
                new XElement("parameters",
                    new XElement("PassParameters", false), new XElement("Security", false),
                    new XElement("Scrolling", "auto"), new XElement("Border", false),
                    new XElement("ShowOnMobileClient", false)));
            SetResource(control, resource);

            var cell = new XElement("cell", new XAttribute("id", FormXmlHelpers.NewGuid()),
                new XAttribute("showlabel", false), new XAttribute("rowspan", 10), new XAttribute("colspan", 1),
                new XAttribute("visible", true), new XAttribute("availableforphone", true), control);
            SetLabel(cell, string.IsNullOrWhiteSpace(displayName) ? fileName : displayName);
            PatchCell(cell, op);
            PlaceCell(section, cell, ReadIdentifier(op, "position") ?? "last");
            return $"manage_webresource: add '{controlId}' in section '{(string)section.Attribute("name")}'";
        }

        private Entity ResolveResource(string name)
        {
            if (orgService == null)
                throw new InvalidOperationException("A Dataverse connection is required to resolve a web resource.");

            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet("webresourceid", "name", "displayname", "webresourcetype"),
                TopCount = 1
            };
            query.Criteria.AddCondition("name", ConditionOperator.Equal, name);
            var resource = orgService.RetrieveMultiple(query).Entities.FirstOrDefault();
            if (resource == null)
                throw new InvalidOperationException($"Web resource '{name}' was not found in Dataverse. Use its unique name.");
            if (resource.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value is not (1 or 5 or 6 or 7 or 10 or 11))
                throw new InvalidOperationException($"Web resource '{name}' must be HTML or an image (PNG, JPG, GIF, ICO, or SVG).");
            return resource;
        }

        private static void SetResource(XElement control, Entity resource)
        {
            SetParameter(control, "Url", resource.GetAttributeValue<string>("name"));
            SetParameter(control, "WebResourceId", resource.Id.ToString("B").ToUpperInvariant());
        }

        private static XElement FindControl(XDocument formDoc, string id, string resourceName)
        {
            if (id == null && resourceName == null)
                throw new InvalidOperationException("manage_webresource requires 'control_id' or 'webresource_name'.");

            var tabs = formDoc.Root?.Element("tabs")?.Elements("tab") ?? [];
            var controls = tabs.Elements("columns").Elements("column").Elements("sections").Elements("section")
                .Elements("rows").Elements("row").Elements("cell").Elements("control");
            var matches = controls.Where(control => Same((string)control.Attribute("classid"), ClassId) &&
                (id != null
                    ? Same((string)control.Attribute("id"), id)
                    : Same((string)control.Element("parameters")?.Element("Url"), resourceName))).Take(2).ToArray();
            return matches.Length switch
            {
                1 => matches[0],
                0 => throw new InvalidOperationException($"WebResource control '{id ?? resourceName}' was not found in the form body."),
                _ => throw new InvalidOperationException($"Multiple WebResource controls match '{id ?? resourceName}'. Provide a unique control_id.")
            };
        }

        private static void PatchCell(XElement cell, JsonElement op)
        {
            if (ReadString(op, "label") is { } label)
                SetLabel(cell, label);
            if (ReadBool(op, "show_label", "showlabel") is { } showLabel)
                cell.SetAttributeValue("showlabel", showLabel);
            if (ReadUInt(op, "rowspan", minimum: 1) is { } rowspan)
                cell.SetAttributeValue("rowspan", rowspan);
            if (ReadUInt(op, "colspan", minimum: 1) is { } colspan)
                cell.SetAttributeValue("colspan", colspan);
            if (ReadBool(op, "visible") is { } visible)
                cell.SetAttributeValue("visible", visible);
            if (ReadBool(op, "hide_on_phone") is { } hideOnPhone)
                cell.SetAttributeValue("availableforphone", !hideOnPhone);

            var control = cell.Element("control");
            foreach (var (key, name) in TextParameters)
                if (ReadString(op, key) is { } value)
                    SetParameter(control, name, value);
            foreach (var (key, name) in BoolParameters)
                if (ReadBool(op, key) is { } value)
                    SetParameter(control, name, value);
            if (ReadUInt(op, "height") is { } height)
                SetParameter(control, "Height", height);
            if (ReadUInt(op, "width") is { } width)
                SetParameter(control, "Width", width);
            if (ReadString(op, "scrolling") is { } scrolling)
            {
                scrolling = scrolling.Trim().ToLowerInvariant();
                if (scrolling is not ("auto" or "yes" or "no"))
                    throw new InvalidOperationException("'scrolling' must be 'auto', 'yes', or 'no'.");
                SetParameter(control, "Scrolling", scrolling);
            }
        }

        private static void SetLabel(XElement cell, string description)
        {
            var labels = cell.Element("labels");
            if (labels == null)
            {
                labels = new XElement("labels");
                cell.AddFirst(labels);
            }
            var label = labels.Elements("label").FirstOrDefault(l => (string)l.Attribute("languagecode") == "1033")
                ?? labels.Element("label");
            if (label == null)
            {
                label = new XElement("label", new XAttribute("languagecode", 1033));
                labels.Add(label);
            }
            label.SetAttributeValue("description", description);
        }

        private static void SetParameter(XElement control, string name, object value)
        {
            var parameters = control.Element("parameters");
            if (parameters == null)
            {
                parameters = new XElement("parameters");
                control.Add(parameters);
            }
            parameters.SetElementValue(name, value);
        }

        private static XElement FindTab(XDocument formDoc, string tabName) =>
            FormXmlHelpers.FindTab(formDoc, tabName)
                ?? throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

        private static XElement FindSection(XElement tab, string sectionName) =>
            FormXmlHelpers.FindSection(tab, sectionName)
                ?? throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{(string)tab.Attribute("name")}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(tab))}");

        private static void PlaceCell(XElement section, XElement cell, string position)
        {
            var rows = section.Element("rows");
            var parts = position.Split(':', 2, StringSplitOptions.TrimEntries);
            var placement = parts[0].ToLowerInvariant();
            XElement anchor = null;
            if (parts.Length == 2 && placement is ("before" or "after") && parts[1].Length != 0)
            {
                var anchorControl = rows?.Elements("row").Elements("cell").Elements("control")
                    .FirstOrDefault(c => Same((string)c.Attribute("id"), parts[1]));
                if (anchorControl == null)
                    throw new InvalidOperationException($"Position control_id '{parts[1]}' was not found in the target section.");
                if (anchorControl.Parent == cell)
                    throw new InvalidOperationException("A WebResource control cannot be moved relative to itself.");
                anchor = anchorControl.Parent.Parent;
            }
            else if (parts.Length != 1 || placement is not ("first" or "last"))
            {
                throw new InvalidOperationException("'position' must be 'first', 'last', 'before:<control_id>', or 'after:<control_id>'.");
            }

            if (cell.Parent != null)
                DetachCell(cell);
            if (rows == null)
            {
                rows = new XElement("rows");
                section.Add(rows);
            }
            var row = new XElement("row", cell);
            if (placement == "before")
                anchor.AddBeforeSelf(row);
            else if (placement == "after")
                anchor.AddAfterSelf(row);
            else if (placement == "first")
                rows.AddFirst(row);
            else
                rows.Add(row);
        }

        private static void DetachCell(XElement cell)
        {
            var row = cell.Parent;
            cell.Remove();
            if (!row.Elements("cell").Any())
                row.Remove();
        }

        private static bool Same(string left, string right) => string.Equals(left, right, StringComparison.OrdinalIgnoreCase);

        private static string RequireIdentifier(JsonElement op, string key) =>
            ReadIdentifier(op, key) ?? throw new InvalidOperationException($"manage_webresource requires '{key}'.");

        private static string ReadIdentifier(JsonElement op, params string[] keys)
        {
            var value = ReadString(op, keys)?.Trim();
            return value == "" ? throw new InvalidOperationException($"'{keys[0]}' cannot be blank.") : value;
        }

        private static string ReadString(JsonElement op, params string[] keys) =>
            ReadProperty(op, keys) is { } value
                ? value.ValueKind == JsonValueKind.String ? value.GetString()
                    : throw new InvalidOperationException($"'{keys[0]}' must be a string.")
                : null;

        private static bool? ReadBool(JsonElement op, params string[] keys) =>
            ReadProperty(op, keys)?.ValueKind switch
            {
                JsonValueKind.True => true,
                JsonValueKind.False => false,
                null => null,
                _ => throw new InvalidOperationException($"'{keys[0]}' must be a boolean.")
            };

        private static uint? ReadUInt(JsonElement op, string key, uint minimum = 0)
        {
            if (!op.TryGetProperty(key, out var value))
                return null;
            if (value.ValueKind != JsonValueKind.Number || !value.TryGetUInt32(out var number) || number < minimum)
                throw new InvalidOperationException($"'{key}' must be an integer between {minimum} and {uint.MaxValue}.");
            return number;
        }

        private static JsonElement? ReadProperty(JsonElement op, string[] keys)
        {
            JsonElement? result = null;
            foreach (var key in keys)
            {
                if (!op.TryGetProperty(key, out var value))
                    continue;
                if (result.HasValue)
                    throw new InvalidOperationException($"Provide only one of: {string.Join(", ", keys)}.");
                result = value;
            }
            return result;
        }
    }
}
