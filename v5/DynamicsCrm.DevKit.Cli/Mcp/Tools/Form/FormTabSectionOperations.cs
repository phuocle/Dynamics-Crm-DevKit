using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormTabSectionOperations
    {
        private readonly ServiceClient _serviceClient;
        private readonly FormXmlBuilder _builder;

        public FormTabSectionOperations(ServiceClient serviceClient, FormXmlBuilder builder)
        {
            _serviceClient = serviceClient;
            _builder = builder;
        }

        public string ExecuteAddTab(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var label = FormXmlHelpers.GetStringProp(op, "label")
                ?? throw new InvalidOperationException("add_tab requires 'label'.");
            var tabName = FormXmlHelpers.GetStringProp(op, "name") ?? FormXmlHelpers.AutoTabName(label);
            var tabColumns = FormXmlHelpers.GetIntProp(op, "tab_columns", 1);
            var expanded = FormXmlHelpers.GetBoolProp(op, "expanded", true);
            var position = FormXmlHelpers.ResolvePosition(op, "position", "reference_tab");
            var visible = FormXmlHelpers.GetBoolProp(op, "visible", true);
            var showLabel = FormXmlHelpers.GetBoolProp(op, "show_label", true);
            var hideOnPhone = FormXmlHelpers.GetBoolProp(op, "hide_on_phone", false);

            var sections = new List<(string name, string label, int sectionColumns, int tabColumn, bool showLabel, bool visible, bool hideOnPhone, List<JsonElement> fields)>();
            if (op.TryGetProperty("sections", out var secArray) && secArray.ValueKind == JsonValueKind.Array)
            {
                foreach (var sec in secArray.EnumerateArray())
                {
                    var secLabel = FormXmlHelpers.GetStringProp(sec, "label") ?? "Section";
                    var secName = FormXmlHelpers.GetStringProp(sec, "name") ?? FormXmlHelpers.AutoSectionName(tabName, secLabel);
                    var secColumns = FormXmlHelpers.GetIntProp(sec, "section_columns", 1);
                    var secTabColumn = FormXmlHelpers.GetIntProp(sec, "tab_column", 0);
                    var secShowLabel = FormXmlHelpers.GetBoolProp(sec, "show_label", true);
                    var secVisible = FormXmlHelpers.GetBoolProp(sec, "visible", true);
                    var secHideOnPhone = FormXmlHelpers.GetBoolProp(sec, "hide_on_phone", false);
                    var fields = new List<JsonElement>();
                    if (sec.TryGetProperty("fields", out var fieldsArray) && fieldsArray.ValueKind == JsonValueKind.Array)
                    {
                        foreach (var f in fieldsArray.EnumerateArray())
                            fields.Add(f);
                    }
                    sections.Add((secName, secLabel, secColumns, secTabColumn, secShowLabel, secVisible, secHideOnPhone, fields));
                }
            }

            var tabId = FormXmlHelpers.NewGuid();
            var tabElement = new XElement("tab",
                new XAttribute("name", tabName),
                new XAttribute("id", tabId),
                new XAttribute("showlabel", showLabel ? "true" : "false"),
                new XAttribute("locklevel", "0"),
                new XAttribute("expanded", expanded ? "true" : "false"));

            if (!visible) tabElement.Add(new XAttribute("visible", "false"));
            if (hideOnPhone) tabElement.Add(new XAttribute("availableforphone", "false"));

            tabElement.Add(new XElement("labels",
                new XElement("label",
                    new XAttribute("description", label),
                    new XAttribute("languagecode", McpHelper.GetBaseLanguageCode(_serviceClient).ToString()))));

            var columnsElement = new XElement("columns");
            var columnWidths = FormXmlHelpers.GetTabColumnWidths(tabColumns);

            var columnElements = new List<XElement>();
            for (var i = 0; i < tabColumns; i++)
            {
                var col = new XElement("column",
                    new XAttribute("width", columnWidths[i]),
                    new XElement("sections"));
                columnsElement.Add(col);
                columnElements.Add(col);
            }

            var existingControlIds = FormXmlHelpers.CollectExistingControlIds(formDoc);

            for (var secIdx = 0; secIdx < sections.Count; secIdx++)
            {
                var (secName, secLabel, secColumns, tabColumn, secShowLabel, secVisible, secHideOnPhone, fields) = sections[secIdx];
                var targetColIdx = tabColumn > 0
                    ? Math.Min(tabColumn - 1, tabColumns - 1)
                    : secIdx % tabColumns;
                targetColIdx = Math.Max(0, targetColIdx);
                var targetSections = columnElements[targetColIdx].Element("sections");

                var sectionElement = _builder.BuildSectionElement(secName, secLabel, secColumns, fields, attrMap, classIdMap, secShowLabel, secVisible, secHideOnPhone, existingControlIds);
                targetSections.Add(sectionElement);
            }

            tabElement.Add(columnsElement);

            var tabsElement = formDoc.Root.Element("tabs");
            if (tabsElement == null)
            {
                tabsElement = new XElement("tabs");
                formDoc.Root.Add(tabsElement);
            }

            FormXmlHelpers.InsertElement(tabsElement, tabElement, position, "tab", "name");

            var totalFields = sections.Sum(s => s.fields.Count);
            return $"add_tab: \"{label}\" ({tabColumns} column(s), {sections.Count} section(s), {totalFields} field(s))";
        }

        public string ExecuteUpdateTab(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? FormXmlHelpers.GetStringProp(op, "name")
                ?? throw new InvalidOperationException("update_tab requires 'tab' or 'name'.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException($"Tab '{tabName}' not found.");

            if (op.TryGetProperty("new_name", out var newNameProp) && newNameProp.ValueKind == JsonValueKind.String)
            {
                var newName = newNameProp.GetString();
                if (string.IsNullOrWhiteSpace(newName))
                    throw new InvalidOperationException("update_tab 'new_name' cannot be empty.");

                var existingTab = FormXmlHelpers.FindTab(formDoc, newName);
                if (existingTab != null && existingTab != tabElement)
                    throw new InvalidOperationException($"Tab '{newName}' already exists.");

                tabElement.SetAttributeValue("name", newName);
            }

            if (op.TryGetProperty("label", out var labelProp) && labelProp.ValueKind == JsonValueKind.String)
            {
                var labelDesc = labelProp.GetString();
                var labelEl = tabElement.Element("labels")?.Element("label");
                if (labelEl != null)
                    labelEl.SetAttributeValue("description", labelDesc);
            }

            if (op.TryGetProperty("visible", out var visProp))
            {
                if (visProp.ValueKind == JsonValueKind.True)
                    tabElement.Attribute("visible")?.Remove();
                else if (visProp.ValueKind == JsonValueKind.False)
                    tabElement.SetAttributeValue("visible", "false");
            }

            if (op.TryGetProperty("show_label", out var showLabelProp))
            {
                if (showLabelProp.ValueKind == JsonValueKind.True)
                    tabElement.SetAttributeValue("showlabel", "true");
                else if (showLabelProp.ValueKind == JsonValueKind.False)
                    tabElement.SetAttributeValue("showlabel", "false");
            }

            if (op.TryGetProperty("hide_on_phone", out var hideOnPhoneProp))
            {
                if (hideOnPhoneProp.ValueKind == JsonValueKind.False)
                    tabElement.Attribute("availableforphone")?.Remove();
                else if (hideOnPhoneProp.ValueKind == JsonValueKind.True)
                    tabElement.SetAttributeValue("availableforphone", "false");
            }

            if (op.TryGetProperty("expanded", out var expandedProp))
            {
                if (expandedProp.ValueKind == JsonValueKind.True)
                    tabElement.SetAttributeValue("expanded", "true");
                else if (expandedProp.ValueKind == JsonValueKind.False)
                    tabElement.SetAttributeValue("expanded", "false");
            }

            var finalName = tabElement.Attribute("name")?.Value ?? tabName;
            return string.Equals(finalName, tabName, StringComparison.OrdinalIgnoreCase)
                ? $"update_tab: \"{tabName}\" updated"
                : $"update_tab: \"{tabName}\" renamed to \"{finalName}\"";
        }

        public static string ExecuteMoveTab(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("move_tab requires 'tab'.");
            var position = FormXmlHelpers.ResolvePosition(op, "position", "reference_tab");
            if (position == "last" && !op.TryGetProperty("position", out _))
                throw new InvalidOperationException("move_tab requires 'position'. Valid values: 'first', 'last', 'before:<tab_name>', 'after:<tab_name>'.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var tabsElement = tabElement.Parent;
            if (tabsElement == null)
                throw new InvalidOperationException("Tab has no parent <tabs> element.");

            tabElement.Remove();
            FormXmlHelpers.InsertElement(tabsElement, tabElement, position, "tab", "name");

            return $"move_tab: \"{tabName}\" moved to position \"{position}\"";
        }

        public static string ExecuteRemoveTab(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_tab requires 'tab'.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            tabElement.Remove();
            return $"remove_tab: \"{tabName}\" removed";
        }

        public string ExecuteAddSection(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("add_section requires 'tab'.");
            var label = FormXmlHelpers.GetStringProp(op, "label")
                ?? throw new InvalidOperationException("add_section requires 'label'.");
            var secName = FormXmlHelpers.GetStringProp(op, "name") ?? FormXmlHelpers.AutoSectionName(tabName, label);
            var secColumns = FormXmlHelpers.GetIntProp(op, "section_columns", 1);
            var tabColumn = FormXmlHelpers.GetIntProp(op, "tab_column", 1);
            var showLabel = FormXmlHelpers.GetBoolProp(op, "show_label", true);
            var visible = FormXmlHelpers.GetBoolProp(op, "visible", true);
            var hideOnPhone = FormXmlHelpers.GetBoolProp(op, "hide_on_phone", false);
            var position = FormXmlHelpers.ResolvePosition(op, "position", "reference_section");

            var fields = new List<JsonElement>();
            if (op.TryGetProperty("fields", out var fieldsArray) && fieldsArray.ValueKind == JsonValueKind.Array)
            {
                foreach (var f in fieldsArray.EnumerateArray())
                    fields.Add(f);
            }

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var columns = tabElement.Element("columns")?.Elements("column").ToList();
            if (columns == null || columns.Count == 0)
                throw new InvalidOperationException($"Tab '{tabName}' has no columns.");

            var targetColIdx = Math.Min(tabColumn - 1, columns.Count - 1);
            targetColIdx = Math.Max(0, targetColIdx);
            var sectionsElement = columns[targetColIdx].Element("sections");
            if (sectionsElement == null)
            {
                sectionsElement = new XElement("sections");
                columns[targetColIdx].Add(sectionsElement);
            }

            var sectionElement = _builder.BuildSectionElement(secName, label, secColumns, fields, attrMap, classIdMap, showLabel, visible, hideOnPhone, FormXmlHelpers.CollectExistingControlIds(formDoc));
            FormXmlHelpers.InsertElement(sectionsElement, sectionElement, position, "section", "name");

            return $"add_section: \"{label}\" in tab \"{tabName}\" ({secColumns} column(s), {fields.Count} field(s))";
        }

        public string ExecuteUpdateSection(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("update_section requires 'tab'.");
            var secName = FormXmlHelpers.GetStringProp(op, "section")
                ?? FormXmlHelpers.GetStringProp(op, "name")
                ?? throw new InvalidOperationException("update_section requires 'section' or 'name'.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException($"Tab '{tabName}' not found.");

            var sectionElement = FormXmlHelpers.FindSection(tabElement, secName);
            if (sectionElement == null)
                throw new InvalidOperationException($"Section '{secName}' not found in tab '{tabName}'.");

            if (op.TryGetProperty("new_name", out var newNameProp) && newNameProp.ValueKind == JsonValueKind.String)
            {
                var newName = newNameProp.GetString();
                if (string.IsNullOrWhiteSpace(newName))
                    throw new InvalidOperationException("update_section 'new_name' cannot be empty.");

                var existingSection = FormXmlHelpers.FindSection(tabElement, newName);
                if (existingSection != null && existingSection != sectionElement)
                    throw new InvalidOperationException($"Section '{newName}' already exists in tab '{tabName}'.");

                sectionElement.SetAttributeValue("name", newName);
            }

            if (op.TryGetProperty("label", out var labelProp) && labelProp.ValueKind == JsonValueKind.String)
            {
                var labelDesc = labelProp.GetString();
                var labelEl = sectionElement.Element("labels")?.Element("label");
                if (labelEl != null)
                    labelEl.SetAttributeValue("description", labelDesc);
            }

            if (op.TryGetProperty("visible", out var visProp))
            {
                if (visProp.ValueKind == JsonValueKind.True)
                    sectionElement.Attribute("visible")?.Remove();
                else if (visProp.ValueKind == JsonValueKind.False)
                    sectionElement.SetAttributeValue("visible", "false");
            }

            if (op.TryGetProperty("show_label", out var showLabelProp))
            {
                if (showLabelProp.ValueKind == JsonValueKind.True)
                    sectionElement.SetAttributeValue("showlabel", "true");
                else if (showLabelProp.ValueKind == JsonValueKind.False)
                    sectionElement.SetAttributeValue("showlabel", "false");
            }

            if (op.TryGetProperty("hide_on_phone", out var hideOnPhoneProp))
            {
                if (hideOnPhoneProp.ValueKind == JsonValueKind.False)
                    sectionElement.Attribute("availableforphone")?.Remove();
                else if (hideOnPhoneProp.ValueKind == JsonValueKind.True)
                    sectionElement.SetAttributeValue("availableforphone", "false");
            }

            var finalName = sectionElement.Attribute("name")?.Value ?? secName;
            return string.Equals(finalName, secName, StringComparison.OrdinalIgnoreCase)
                ? $"update_section: \"{secName}\" in tab \"{tabName}\" updated"
                : $"update_section: \"{secName}\" in tab \"{tabName}\" renamed to \"{finalName}\"";
        }

        public static string ExecuteMoveSection(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("move_section requires 'tab'.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("move_section requires 'section'.");
            var position = FormXmlHelpers.ResolvePosition(op, "position", "reference_section");
            if (position == "last" && !op.TryGetProperty("position", out _))
                throw new InvalidOperationException("move_section requires 'position'. Valid values: 'first', 'last', 'before:<section_name>', 'after:<section_name>'.");
            var targetTabName = FormXmlHelpers.GetStringProp(op, "target_tab");
            var targetTabColumn = FormXmlHelpers.GetIntProp(op, "tab_column", 0);

            var sourceTab = FormXmlHelpers.FindTab(formDoc, tabName);
            if (sourceTab == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sectionElement = FormXmlHelpers.FindSection(sourceTab, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(sourceTab))}");

            XElement targetTab;
            if (!string.IsNullOrEmpty(targetTabName))
            {
                targetTab = FormXmlHelpers.FindTab(formDoc, targetTabName);
                if (targetTab == null)
                    throw new InvalidOperationException(
                        $"Target tab '{targetTabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");
            }
            else
            {
                targetTab = sourceTab;
            }

            var targetColumns = targetTab.Element("columns")?.Elements("column").ToList();
            if (targetColumns == null || targetColumns.Count == 0)
                throw new InvalidOperationException($"Target tab '{targetTabName ?? tabName}' has no columns.");

            int targetColIdx;
            if (targetTabColumn > 0)
            {
                targetColIdx = Math.Min(targetTabColumn - 1, targetColumns.Count - 1);
            }
            else if (targetTab == sourceTab)
            {
                targetColIdx = 0;
                for (var i = 0; i < targetColumns.Count; i++)
                {
                    if (targetColumns[i].Descendants("section").Any(s =>
                        string.Equals(s.Attribute("name")?.Value, sectionElement.Attribute("name")?.Value, StringComparison.OrdinalIgnoreCase)))
                    {
                        targetColIdx = i;
                        break;
                    }
                }
            }
            else
            {
                targetColIdx = 0;
            }
            targetColIdx = Math.Max(0, targetColIdx);

            var targetSections = targetColumns[targetColIdx].Element("sections");
            if (targetSections == null)
            {
                targetSections = new XElement("sections");
                targetColumns[targetColIdx].Add(targetSections);
            }

            sectionElement.Remove();
            FormXmlHelpers.InsertElement(targetSections, sectionElement, position, "section", "name");

            var targetDesc = !string.IsNullOrEmpty(targetTabName) && !string.Equals(targetTabName, tabName, StringComparison.OrdinalIgnoreCase)
                ? $" (moved to tab \"{targetTabName}\")"
                : "";
            return $"move_section: \"{sectionName}\" moved to position \"{position}\"{targetDesc}";
        }

        public static string ExecuteRemoveSection(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_section requires 'tab'.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("remove_section requires 'section'.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sectionElement = FormXmlHelpers.FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(tabElement))}");

            sectionElement.Remove();
            return $"remove_section: \"{sectionName}\" from tab \"{tabName}\"";
        }
    }
}
