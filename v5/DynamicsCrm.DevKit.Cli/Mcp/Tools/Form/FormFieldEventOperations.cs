using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormFieldEventOperations
    {
        private readonly ServiceClient _serviceClient;
        private readonly FormXmlBuilder _builder;

        public FormFieldEventOperations(ServiceClient serviceClient, FormXmlBuilder builder)
        {
            _serviceClient = serviceClient;
            _builder = builder;
        }

        private static readonly HashSet<string> ValidEventNames = new(StringComparer.OrdinalIgnoreCase)
        {
            "onload", "onsave", "onchange", "ontabstatechange", "onrecordselect"
        };

        // ── Fields (body) ────────────────────────────────────────────────────────

        public string ExecuteAddFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab");
            var target = FormXmlHelpers.GetStringProp(op, "target");
            if (IsHeaderTarget(tabName) || IsHeaderTarget(target))
                return ExecuteAddHeaderFields(formDoc, op, attrMap, classIdMap);
            if (string.IsNullOrWhiteSpace(tabName))
                throw new InvalidOperationException("add_fields requires 'tab'. To add fields to the form header, use manage_action: \"add_header\" instead.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("add_fields requires 'section'.");
            var position = FormXmlHelpers.GetStringProp(op, "position") ?? "last";

            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("add_fields requires 'fields' array.");

            var fields = fieldsArray.EnumerateArray().ToList();
            if (fields.Count == 0)
                throw new InvalidOperationException("add_fields requires at least one field.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sectionElement = FormXmlHelpers.FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(tabElement))}");

            var secColumnsAttr = sectionElement.Attribute("columns");
            var secColumns = 1;
            if (secColumnsAttr != null && int.TryParse(secColumnsAttr.Value, out var sc))
                secColumns = sc;

            var rowsElement = sectionElement.Element("rows");
            if (rowsElement == null)
            {
                rowsElement = new XElement("rows");
                sectionElement.Add(rowsElement);
            }

            var existingControlIds = FormXmlHelpers.CollectExistingControlIds(formDoc);
            var cells = new List<XElement>();
            foreach (var fieldEl in fields)
            {
                var (fieldName, fieldLabel, disabled, visible, colspan, rowspan, showlabel, hideOnPhone) = FormFieldMetadata.ParseFieldSpec(fieldEl);
                var attr = attrMap[fieldName];
                fieldName = FormXmlHelpers.CorrectFieldName(fieldName, attr);
                var classid = FormXmlHelpers.ResolveClassId(attr);
                classIdMap[fieldName] = classid;

                var resolvedLabel = fieldLabel
                    ?? attr.DisplayName?.UserLocalizedLabel?.Label
                    ?? fieldName;

                var controlId = FormXmlHelpers.DeduplicateControlId(fieldName, existingControlIds);
                var cell = _builder.BuildCellElement(controlId, fieldName, resolvedLabel, classid, disabled, visible, colspan, rowspan, showlabel, hideOnPhone);
                cells.Add(cell);
            }

            var newRows = FormXmlHelpers.BuildRows(cells, secColumns);
            FormXmlHelpers.InsertFieldRows(rowsElement, newRows, position);

            return $"add_fields: {fields.Count} field(s) to section \"{sectionName}\" in tab \"{tabName}\" (position: {position})";
        }

        public string ExecuteUpdateFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("update_fields requires 'fields' array.");

            var fields = fieldsArray.EnumerateArray().ToList();
            if (fields.Count == 0)
                throw new InvalidOperationException("update_fields requires at least one field.");

            var updatedFields = new List<string>();

            var allCells = formDoc.Descendants("cell")
                .Where(c => c.Element("control") != null)
                .ToList();

            foreach (var fieldEl in fields)
            {
                var fieldName = FormXmlHelpers.GetStringProp(fieldEl, "field");
                if (fieldName == null) continue;

                if (attrMap.TryGetValue(fieldName, out var attr))
                    fieldName = FormXmlHelpers.CorrectFieldName(fieldName, attr);

                var matchingCells = allCells.Where(c =>
                {
                    var control = c.Element("control");
                    return control != null && string.Equals(control.Attribute("datafieldname")?.Value, fieldName, StringComparison.OrdinalIgnoreCase);
                }).ToList();

                foreach (var cellElement in matchingCells)
                {
                    if (fieldEl.TryGetProperty("label", out var labelProp) && labelProp.ValueKind == JsonValueKind.String)
                    {
                        var labelDesc = labelProp.GetString();
                        var labelEl = cellElement.Element("labels")?.Element("label");
                        if (labelEl != null)
                            labelEl.SetAttributeValue("description", labelDesc);
                    }

                    if (fieldEl.TryGetProperty("visible", out var visProp))
                    {
                        if (visProp.ValueKind == JsonValueKind.True)
                            cellElement.Attribute("visible")?.Remove();
                        else if (visProp.ValueKind == JsonValueKind.False)
                            cellElement.SetAttributeValue("visible", "false");
                    }

                    if (fieldEl.TryGetProperty("showlabel", out var showLabelProp))
                    {
                        if (showLabelProp.ValueKind == JsonValueKind.True)
                            cellElement.SetAttributeValue("showlabel", "true");
                        else if (showLabelProp.ValueKind == JsonValueKind.False)
                            cellElement.SetAttributeValue("showlabel", "false");
                    }

                    if (fieldEl.TryGetProperty("hide_on_phone", out var hideOnPhoneProp))
                    {
                        if (hideOnPhoneProp.ValueKind == JsonValueKind.False)
                            cellElement.Attribute("availableforphone")?.Remove();
                        else if (hideOnPhoneProp.ValueKind == JsonValueKind.True)
                            cellElement.SetAttributeValue("availableforphone", "false");
                    }

                    if (fieldEl.TryGetProperty("disabled", out var disabledProp))
                    {
                        var controlEl = cellElement.Element("control");
                        if (controlEl != null)
                        {
                            if (disabledProp.ValueKind == JsonValueKind.False)
                                controlEl.Attribute("disabled")?.Remove();
                            else if (disabledProp.ValueKind == JsonValueKind.True)
                                controlEl.SetAttributeValue("disabled", "true");
                        }
                    }

                    if (fieldEl.TryGetProperty("colspan", out var colSpanProp) && colSpanProp.ValueKind == JsonValueKind.Number)
                    {
                        var colspan = colSpanProp.GetInt32();
                        if (colspan <= 1) cellElement.Attribute("colspan")?.Remove();
                        else cellElement.SetAttributeValue("colspan", colspan.ToString());
                    }

                    if (fieldEl.TryGetProperty("rowspan", out var rowSpanProp) && rowSpanProp.ValueKind == JsonValueKind.Number)
                    {
                        var rowspan = rowSpanProp.GetInt32();
                        if (rowspan <= 1) cellElement.Attribute("rowspan")?.Remove();
                        else cellElement.SetAttributeValue("rowspan", rowspan.ToString());
                    }
                }

                if (matchingCells.Count > 0)
                    updatedFields.Add(fieldName);
            }

            return $"update_fields: {updatedFields.Count} field(s) updated ({string.Join(", ", updatedFields)})";
        }

        public static string ExecuteRemoveFields(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_fields requires 'tab'.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("remove_fields requires 'section'.");

            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("remove_fields requires 'fields' array.");

            var fieldNames = fieldsArray.EnumerateArray()
                .Where(f => f.ValueKind == JsonValueKind.String)
                .Select(f => f.GetString())
                .ToList();

            if (fieldNames.Count == 0)
                throw new InvalidOperationException("remove_fields requires at least one field name string.");

            var tabElement = FormXmlHelpers.FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sectionElement = FormXmlHelpers.FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(tabElement))}");

            var rowsElement = sectionElement.Element("rows");
            if (rowsElement == null)
                return $"remove_fields: section \"{sectionName}\" has no rows — nothing to remove";

            var toRemove = new HashSet<string>(fieldNames, StringComparer.OrdinalIgnoreCase);
            var removed = new List<string>();
            var notFound = new List<string>(fieldNames);

            var rowsToDelete = new List<XElement>();
            foreach (var row in rowsElement.Elements("row").ToList())
            {
                var cells = row.Elements("cell").ToList();
                var cellsToReplace = new List<XElement>();

                foreach (var cell in cells)
                {
                    var control = cell.Element("control");
                    if (control == null) continue;

                    var dataFieldName = control.Attribute("datafieldname")?.Value;
                    if (dataFieldName != null && toRemove.Contains(dataFieldName))
                    {
                        cellsToReplace.Add(cell);
                        if (!removed.Any(r => string.Equals(r, dataFieldName, StringComparison.OrdinalIgnoreCase)))
                            removed.Add(dataFieldName);
                        notFound.RemoveAll(f => string.Equals(f, dataFieldName, StringComparison.OrdinalIgnoreCase));
                    }
                }

                if (cellsToReplace.Count == 0) continue;

                var nonSpacerCells = cells.Where(c => c.Element("control") != null).ToList();
                if (cellsToReplace.Count >= nonSpacerCells.Count)
                {
                    rowsToDelete.Add(row);
                }
                else
                {
                    foreach (var cell in cellsToReplace)
                    {
                        cell.AddAfterSelf(FormXmlHelpers.CreateSpacerCell());
                        cell.Remove();
                    }
                }
            }

            foreach (var row in rowsToDelete)
                row.Remove();

            var summary = new StringBuilder();
            summary.Append($"remove_fields: {removed.Count} field(s) removed from \"{sectionName}\" in \"{tabName}\"");
            if (removed.Count > 0)
                summary.Append($" [{string.Join(", ", removed)}]");
            if (notFound.Count > 0)
                summary.Append($" | not found: [{string.Join(", ", notFound)}]");

            return summary.ToString();
        }

        public static string ExecuteMoveFields(XDocument formDoc, JsonElement op)
        {
            var tabName = FormXmlHelpers.GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("move_fields requires 'tab'.");
            var sectionName = FormXmlHelpers.GetStringProp(op, "section")
                ?? throw new InvalidOperationException("move_fields requires 'section'.");
            var targetTabName = FormXmlHelpers.GetStringProp(op, "target_tab") ?? tabName;
            var targetSectionName = FormXmlHelpers.GetStringProp(op, "target_section") ?? sectionName;
            var position = FormXmlHelpers.GetStringProp(op, "position") ?? "last";

            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("move_fields requires 'fields' array.");

            var fieldNames = fieldsArray.EnumerateArray()
                .Select(GetFieldNameFromSpec)
                .Where(f => !string.IsNullOrWhiteSpace(f))
                .ToList();

            if (fieldNames.Count == 0)
                throw new InvalidOperationException("move_fields requires at least one field name.");

            var sourceTab = FormXmlHelpers.FindTab(formDoc, tabName);
            if (sourceTab == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var sourceSection = FormXmlHelpers.FindSection(sourceTab, sectionName);
            if (sourceSection == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(sourceTab))}");

            var targetTab = FormXmlHelpers.FindTab(formDoc, targetTabName);
            if (targetTab == null)
                throw new InvalidOperationException(
                    $"Target tab '{targetTabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");

            var targetSection = FormXmlHelpers.FindSection(targetTab, targetSectionName);
            if (targetSection == null)
                throw new InvalidOperationException(
                    $"Target section '{targetSectionName}' not found in tab '{targetTabName}'. Available sections: {string.Join(", ", FormXmlHelpers.GetSectionNames(targetTab))}");

            var sourceRows = sourceSection.Element("rows");
            if (sourceRows == null)
                return $"move_fields: section \"{sectionName}\" has no rows -- nothing to move";

            var toMove = new HashSet<string>(fieldNames, StringComparer.OrdinalIgnoreCase);
            var movedCells = new List<XElement>();
            var movedFields = new List<string>();
            var rowsToDelete = new List<XElement>();

            foreach (var row in sourceRows.Elements("row").ToList())
            {
                var cells = row.Elements("cell").ToList();
                var cellsToMove = new List<XElement>();

                foreach (var cell in cells)
                {
                    var control = cell.Element("control");
                    var dataFieldName = control?.Attribute("datafieldname")?.Value;
                    if (dataFieldName != null && toMove.Contains(dataFieldName))
                    {
                        cellsToMove.Add(cell);
                        movedCells.Add(cell);
                        if (!movedFields.Any(f => string.Equals(f, dataFieldName, StringComparison.OrdinalIgnoreCase)))
                            movedFields.Add(dataFieldName);
                    }
                }

                if (cellsToMove.Count == 0) continue;

                var nonSpacerCells = cells.Where(c => c.Element("control") != null).ToList();
                if (cellsToMove.Count >= nonSpacerCells.Count)
                {
                    foreach (var cell in cellsToMove)
                        cell.Remove();
                    rowsToDelete.Add(row);
                }
                else
                {
                    foreach (var cell in cellsToMove)
                    {
                        cell.AddAfterSelf(FormXmlHelpers.CreateSpacerCell());
                        cell.Remove();
                    }
                }
            }

            foreach (var row in rowsToDelete)
                row.Remove();

            if (movedCells.Count == 0)
                return $"move_fields: 0 field(s) moved from \"{sectionName}\" in \"{tabName}\" | not found: [{string.Join(", ", fieldNames)}]";

            var targetRows = targetSection.Element("rows");
            if (targetRows == null)
            {
                targetRows = new XElement("rows");
                targetSection.Add(targetRows);
            }

            var secColumns = 1;
            var secColumnsAttr = targetSection.Attribute("columns");
            if (secColumnsAttr != null && int.TryParse(secColumnsAttr.Value, out var parsedColumns))
                secColumns = Math.Max(1, parsedColumns);

            var newRows = FormXmlHelpers.BuildRows(movedCells, secColumns);
            FormXmlHelpers.InsertFieldRows(targetRows, newRows, position);

            var notFound = fieldNames
                .Where(f => !movedFields.Any(m => string.Equals(m, f, StringComparison.OrdinalIgnoreCase)))
                .ToList();

            var summary = new StringBuilder();
            summary.Append($"move_fields: {movedFields.Count} field(s) moved from \"{sectionName}\" in \"{tabName}\" to \"{targetSectionName}\" in \"{targetTabName}\" (position: {position})");
            summary.Append($" [{string.Join(", ", movedFields)}]");
            if (notFound.Count > 0)
                summary.Append($" | not found: [{string.Join(", ", notFound)}]");

            return summary.ToString();
        }

        private static string GetFieldNameFromSpec(JsonElement fieldEl)
        {
            if (fieldEl.ValueKind == JsonValueKind.String)
                return fieldEl.GetString();
            return FormXmlHelpers.GetStringProp(fieldEl, "field");
        }

        private static bool IsHeaderTarget(string value)
            => string.Equals(value?.Trim(), "header", StringComparison.OrdinalIgnoreCase);

        // ── Header ───────────────────────────────────────────────────────────────

        public string ExecuteAddHeaderFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("add_header_fields requires 'fields' array.");

            var fields = fieldsArray.EnumerateArray().ToList();
            if (fields.Count == 0)
                throw new InvalidOperationException("add_header_fields requires at least one field.");

            var header = formDoc.Root.Element("header");
            if (header == null)
            {
                header = new XElement("header",
                    new XAttribute("id", FormXmlHelpers.NewGuid()),
                    new XAttribute("celllabelposition", "Top"),
                    new XAttribute("columns", "111"),
                    new XAttribute("labelwidth", "115"),
                    new XAttribute("celllabelalignment", "Left"),
                    new XElement("rows",
                        new XElement("row")));

                var tabs = formDoc.Root.Element("tabs");
                if (tabs != null)
                    tabs.AddAfterSelf(header);
                else
                    formDoc.Root.Add(header);
            }

            var rowsElement = header.Element("rows");
            if (rowsElement == null)
            {
                rowsElement = new XElement("rows", new XElement("row"));
                header.Add(rowsElement);
            }

            var firstRow = rowsElement.Elements("row").FirstOrDefault();
            if (firstRow == null)
            {
                firstRow = new XElement("row");
                rowsElement.Add(firstRow);
            }

            var existingControlIds = FormXmlHelpers.CollectExistingControlIds(formDoc);
            var addedFields = new List<string>();

            foreach (var fieldEl in fields)
            {
                var (fieldName, fieldLabel, disabled, visible, colspan, rowspan, showlabel, hideOnPhone) = FormFieldMetadata.ParseFieldSpec(fieldEl);

                if (!attrMap.TryGetValue(fieldName, out var attr))
                    throw new InvalidOperationException(
                        $"add_header_fields: field '{fieldName}' not found in entity metadata.");

                fieldName = FormXmlHelpers.CorrectFieldName(fieldName, attr);
                var classid = FormXmlHelpers.ResolveClassId(attr);
                classIdMap[fieldName] = classid;

                var resolvedLabel = fieldLabel
                    ?? attr.DisplayName?.UserLocalizedLabel?.Label
                    ?? fieldName;

                var headerControlId = $"header_{fieldName}";
                var controlId = FormXmlHelpers.DeduplicateControlId(headerControlId, existingControlIds);

                var newCell = _builder.BuildCellElement(controlId, fieldName, resolvedLabel, classid,
                    disabled, visible, colspan, rowspan, showlabel, hideOnPhone);

                var spacerCell = firstRow.Elements("cell")
                    .FirstOrDefault(c => c.Element("control") == null);

                if (spacerCell != null)
                {
                    spacerCell.AddAfterSelf(newCell);
                    spacerCell.Remove();
                }
                else
                {
                    firstRow.Add(newCell);
                }

                addedFields.Add(fieldName);
            }

            return $"add_header_fields: {addedFields.Count} field(s) added to header ({string.Join(", ", addedFields)})";
        }

        public string ExecuteUpdateHeaderFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("update_header requires 'fields' array.");

            var fields = fieldsArray.EnumerateArray().ToList();
            if (fields.Count == 0)
                throw new InvalidOperationException("update_header requires at least one field.");

            var updatedFields = new List<string>();

            var header = formDoc.Root.Element("header");
            if (header == null) return "update_header: form has no header elements to update.";

            var allCells = header.Descendants("cell")
                .Where(c => c.Element("control") != null)
                .ToList();

            foreach (var fieldEl in fields)
            {
                var fieldName = FormXmlHelpers.GetStringProp(fieldEl, "field");
                if (fieldName == null) continue;

                if (attrMap.TryGetValue(fieldName, out var attr))
                    fieldName = FormXmlHelpers.CorrectFieldName(fieldName, attr);

                var matchingCells = allCells.Where(c =>
                {
                    var control = c.Element("control");
                    return control != null && string.Equals(control.Attribute("datafieldname")?.Value, fieldName, StringComparison.OrdinalIgnoreCase);
                }).ToList();

                foreach (var cellElement in matchingCells)
                {
                    if (fieldEl.TryGetProperty("label", out var labelProp) && labelProp.ValueKind == JsonValueKind.String)
                    {
                        var labelDesc = labelProp.GetString();
                        var labelEl = cellElement.Element("labels")?.Element("label");
                        if (labelEl != null)
                            labelEl.SetAttributeValue("description", labelDesc);
                    }

                    if (fieldEl.TryGetProperty("visible", out var visProp))
                    {
                        if (visProp.ValueKind == JsonValueKind.True)
                            cellElement.Attribute("visible")?.Remove();
                        else if (visProp.ValueKind == JsonValueKind.False)
                            cellElement.SetAttributeValue("visible", "false");
                    }

                    if (fieldEl.TryGetProperty("showlabel", out var showLabelProp))
                    {
                        if (showLabelProp.ValueKind == JsonValueKind.True)
                            cellElement.SetAttributeValue("showlabel", "true");
                        else if (showLabelProp.ValueKind == JsonValueKind.False)
                            cellElement.SetAttributeValue("showlabel", "false");
                    }

                    if (fieldEl.TryGetProperty("hide_on_phone", out var hideOnPhoneProp))
                    {
                        if (hideOnPhoneProp.ValueKind == JsonValueKind.False)
                            cellElement.Attribute("availableforphone")?.Remove();
                        else if (hideOnPhoneProp.ValueKind == JsonValueKind.True)
                            cellElement.SetAttributeValue("availableforphone", "false");
                    }

                    if (fieldEl.TryGetProperty("disabled", out var disabledProp))
                    {
                        var controlEl = cellElement.Element("control");
                        if (controlEl != null)
                        {
                            if (disabledProp.ValueKind == JsonValueKind.False)
                                controlEl.Attribute("disabled")?.Remove();
                            else if (disabledProp.ValueKind == JsonValueKind.True)
                                controlEl.SetAttributeValue("disabled", "true");
                        }
                    }

                    if (fieldEl.TryGetProperty("colspan", out var colSpanProp) && colSpanProp.ValueKind == JsonValueKind.Number)
                    {
                        var colspan = colSpanProp.GetInt32();
                        if (colspan <= 1) cellElement.Attribute("colspan")?.Remove();
                        else cellElement.SetAttributeValue("colspan", colspan.ToString());
                    }

                    if (fieldEl.TryGetProperty("rowspan", out var rowSpanProp) && rowSpanProp.ValueKind == JsonValueKind.Number)
                    {
                        var rowspan = rowSpanProp.GetInt32();
                        if (rowspan <= 1) cellElement.Attribute("rowspan")?.Remove();
                        else cellElement.SetAttributeValue("rowspan", rowspan.ToString());
                    }
                }

                if (matchingCells.Count > 0)
                    updatedFields.Add(fieldName);
            }

            return $"update_header: {updatedFields.Count} field(s) updated ({string.Join(", ", updatedFields)})";
        }

        public static string ExecuteRemoveHeaderFields(XDocument formDoc, JsonElement op)
        {
            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("remove_header_fields requires 'fields' array.");

            var fieldNames = fieldsArray.EnumerateArray()
                .Where(f => f.ValueKind == JsonValueKind.String)
                .Select(f => f.GetString())
                .ToList();

            if (fieldNames.Count == 0)
                throw new InvalidOperationException("remove_header_fields requires at least one field name string.");

            var header = formDoc.Root.Element("header");
            if (header == null)
                return "remove_header_fields: no <header> element found — nothing to remove";

            var rowsElement = header.Element("rows");
            if (rowsElement == null)
                return "remove_header_fields: header has no rows — nothing to remove";

            var toRemove = new HashSet<string>(fieldNames, StringComparer.OrdinalIgnoreCase);
            var removed = new List<string>();

            foreach (var row in rowsElement.Elements("row").ToList())
            {
                foreach (var cell in row.Elements("cell").ToList())
                {
                    var control = cell.Element("control");
                    if (control == null) continue;

                    var dataFieldName = control.Attribute("datafieldname")?.Value;
                    if (dataFieldName != null && toRemove.Contains(dataFieldName))
                    {
                        cell.AddAfterSelf(FormXmlHelpers.CreateSpacerCell());
                        cell.Remove();
                        if (!removed.Any(r => string.Equals(r, dataFieldName, StringComparison.OrdinalIgnoreCase)))
                            removed.Add(dataFieldName);
                    }
                }
            }

            var notFound = fieldNames
                .Where(f => !removed.Any(r => string.Equals(r, f, StringComparison.OrdinalIgnoreCase)))
                .ToList();

            var summary = new StringBuilder();
            summary.Append($"remove_header_fields: {removed.Count} field(s) removed from header");
            if (removed.Count > 0)
                summary.Append($" ({string.Join(", ", removed)})");
            if (notFound.Count > 0)
                summary.Append($". Not found: {string.Join(", ", notFound)}");
            return summary.ToString();
        }

        // ── Library ──────────────────────────────────────────────────────────────

        public static string ExecuteAddLibrary(XDocument formDoc, JsonElement op)
        {
            var libraryName = FormXmlHelpers.GetStringProp(op, "library_name")
                ?? throw new InvalidOperationException("add_library requires 'library_name'.");

            var (added, _) = EnsureLibrary(formDoc, libraryName);
            return added
                ? $"add_library: \"{libraryName}\" added to formLibraries"
                : $"add_library: \"{libraryName}\" already exists in formLibraries (skipped)";
        }

        public static string ExecuteRemoveLibrary(XDocument formDoc, JsonElement op)
        {
            var libraryName = FormXmlHelpers.GetStringProp(op, "library_name")
                ?? throw new InvalidOperationException("remove_library requires 'library_name'.");

            var formLibraries = formDoc.Root.Element("formLibraries");
            if (formLibraries == null)
                return $"remove_library: no formLibraries element found — nothing to remove";

            var existingLib = formLibraries.Elements("Library")
                .FirstOrDefault(lib =>
                    string.Equals(lib.Attribute("name")?.Value, libraryName, StringComparison.OrdinalIgnoreCase));

            if (existingLib == null)
            {
                var available = formLibraries.Elements("Library")
                    .Select(lib => lib.Attribute("name")?.Value)
                    .Where(n => n != null)
                    .ToList();
                var availableStr = available.Count > 0 ? string.Join(", ", available) : "(none)";
                return $"remove_library: \"{libraryName}\" not found. Available: {availableStr}";
            }

            var libraryUniqueId = existingLib.Attribute("libraryUniqueId")?.Value;

            if (!string.IsNullOrEmpty(libraryUniqueId))
            {
                foreach (var dep in formDoc.Descendants("dependency").ToList())
                {
                    if (string.Equals(dep.Attribute("id")?.Value, libraryUniqueId, StringComparison.OrdinalIgnoreCase))
                        dep.Remove();
                }
            }

            var removedHandlers = 0;
            foreach (var handler in formDoc.Descendants("Handler").ToList())
            {
                if (string.Equals(handler.Attribute("libraryName")?.Value, libraryName, StringComparison.OrdinalIgnoreCase))
                {
                    handler.Remove();
                    removedHandlers++;
                }
            }

            existingLib.Remove();

            if (!formLibraries.HasElements)
                formLibraries.Remove();

            var summary = $"remove_library: \"{libraryName}\" removed";
            if (removedHandlers > 0)
                summary += $" (also removed {removedHandlers} handler(s) referencing it)";
            return summary;
        }

        // ── Event ────────────────────────────────────────────────────────────────

        public static string ExecuteAddEvent(XDocument formDoc, JsonElement op)
        {
            var eventName = FormXmlHelpers.GetStringProp(op, "event_name")
                ?? throw new InvalidOperationException("add_event requires 'event_name'.");
            if (!ValidEventNames.Contains(eventName.Trim()))
                throw new InvalidOperationException(
                    $"Invalid event_name '{eventName}'. Valid values: {string.Join(", ", ValidEventNames.Order())}");
            var functionName = FormXmlHelpers.GetStringProp(op, "function_name")
                ?? throw new InvalidOperationException("add_event requires 'function_name'.");
            var libraryName = FormXmlHelpers.GetStringProp(op, "library_name")
                ?? throw new InvalidOperationException("add_event requires 'library_name'.");
            var passExecutionContext = FormXmlHelpers.GetBoolProp(op, "pass_execution_context", false);
            var parameters = FormXmlHelpers.GetStringProp(op, "parameters") ?? "";
            var enabled = FormXmlHelpers.GetBoolProp(op, "enabled", true);
            var target = FormXmlHelpers.GetStringProp(op, "target") ?? "form";

            var (_, libraryUniqueId) = EnsureLibrary(formDoc, libraryName);

            XElement targetElement;
            string eventType;
            string attributeName = null;

            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
            {
                var fieldName = target.Substring(6).Trim();
                eventType = "DataEvent";
                attributeName = fieldName;
                targetElement = formDoc.Root;
            }
            else if (target.StartsWith("tab:", StringComparison.OrdinalIgnoreCase))
            {
                var tabName = target.Substring(4).Trim();
                targetElement = FormXmlHelpers.FindTab(formDoc, tabName)
                    ?? throw new InvalidOperationException(
                        $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");
                eventType = "ControlEvent";
            }
            else
            {
                targetElement = formDoc.Root;
                eventType = "ControlEvent";
            }

            var eventsElement = targetElement.Element("events");
            if (eventsElement == null)
            {
                eventsElement = new XElement("events");
                var insertBefore = targetElement.Element("externaldependencies")
                    ?? targetElement.Element("formparameters");
                if (insertBefore != null)
                    insertBefore.AddBeforeSelf(eventsElement);
                else
                    targetElement.Add(eventsElement);
            }

            var eventElement = FormXmlHelpers.FindEvent(eventsElement, eventName, attributeName);
            if (eventElement == null)
            {
                eventElement = new XElement("event",
                    new XAttribute("name", eventName),
                    new XAttribute("application", "false"),
                    new XAttribute("active", "true"),
                    new XAttribute("eventType", eventType));

                if (attributeName != null)
                    eventElement.Add(new XAttribute("attribute", attributeName));

                eventsElement.Add(eventElement);
            }

            var handlersElement = eventElement.Element("Handlers");
            if (handlersElement == null)
            {
                handlersElement = new XElement("Handlers");
                eventElement.Add(handlersElement);
            }

            var existingHandler = handlersElement.Elements("Handler")
                .FirstOrDefault(h =>
                    string.Equals(h.Attribute("functionName")?.Value, functionName, StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(h.Attribute("libraryName")?.Value, libraryName, StringComparison.OrdinalIgnoreCase));

            if (existingHandler != null)
            {
                var targetDesc = target == "form" ? "form" : target;
                return $"add_event: handler \"{functionName}\" on \"{eventName}\" ({targetDesc}) already exists (skipped)";
            }

            var handlerUniqueId = FormXmlHelpers.NewGuid();
            var handler = new XElement("Handler",
                new XAttribute("functionName", functionName),
                new XAttribute("libraryName", libraryName),
                new XAttribute("handlerUniqueId", handlerUniqueId),
                new XAttribute("enabled", enabled ? "true" : "false"),
                new XAttribute("passExecutionContext", passExecutionContext ? "true" : "false"));

            if (!string.IsNullOrEmpty(parameters))
                handler.Add(new XAttribute("parameters", parameters));

            handler.Add(new XElement("dependencies",
                new XElement("dependency",
                    new XAttribute("id", libraryUniqueId))));

            handlersElement.Add(handler);

            var targetDescription = target == "form" ? "form" : target;
            return $"add_event: \"{eventName}\" -> \"{functionName}\" from \"{libraryName}\" ({targetDescription})";
        }

        public static string ExecuteRemoveEvent(XDocument formDoc, JsonElement op)
        {
            var eventName = FormXmlHelpers.GetStringProp(op, "event_name")
                ?? throw new InvalidOperationException("remove_event requires 'event_name'.");
            var functionName = FormXmlHelpers.GetStringProp(op, "function_name");
            var libraryName = FormXmlHelpers.GetStringProp(op, "library_name");
            var target = FormXmlHelpers.GetStringProp(op, "target") ?? "form";

            XElement targetElement;
            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
            {
                targetElement = formDoc.Root;
            }
            else if (target.StartsWith("tab:", StringComparison.OrdinalIgnoreCase))
            {
                var tabName = target.Substring(4).Trim();
                targetElement = FormXmlHelpers.FindTab(formDoc, tabName)
                    ?? throw new InvalidOperationException(
                        $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", FormXmlHelpers.GetTabNames(formDoc))}");
            }
            else
            {
                targetElement = formDoc.Root;
            }

            var eventsElement = targetElement.Element("events");
            if (eventsElement == null)
                return $"remove_event: no events element found on {target} — nothing to remove";

            string attributeName = null;
            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
                attributeName = target.Substring(6).Trim();

            var eventElement = FormXmlHelpers.FindEvent(eventsElement, eventName, attributeName);
            if (eventElement == null)
            {
                var targetDesc = target == "form" ? "form" : target;
                return $"remove_event: event \"{eventName}\" not found on {targetDesc}";
            }

            if (!string.IsNullOrEmpty(functionName))
            {
                var handlersElement = eventElement.Element("Handlers");
                if (handlersElement == null)
                    return $"remove_event: event \"{eventName}\" has no handlers";

                var matchingHandler = handlersElement.Elements("Handler")
                    .FirstOrDefault(h =>
                    {
                        var fnMatch = string.Equals(h.Attribute("functionName")?.Value, functionName, StringComparison.OrdinalIgnoreCase);
                        if (!fnMatch) return false;
                        if (!string.IsNullOrEmpty(libraryName))
                            return string.Equals(h.Attribute("libraryName")?.Value, libraryName, StringComparison.OrdinalIgnoreCase);
                        return true;
                    });

                if (matchingHandler == null)
                {
                    var available = handlersElement.Elements("Handler")
                        .Select(h => $"{h.Attribute("functionName")?.Value} ({h.Attribute("libraryName")?.Value})")
                        .ToList();
                    var availableStr = available.Count > 0 ? string.Join(", ", available) : "(none)";
                    return $"remove_event: handler \"{functionName}\" not found on \"{eventName}\". Available: {availableStr}";
                }

                matchingHandler.Remove();

                if (!handlersElement.HasElements)
                {
                    handlersElement.Remove();
                    if (!eventElement.HasElements && eventElement.Attributes().All(a => a.Name == "name" || a.Name == "application" || a.Name == "active" || a.Name == "eventType" || a.Name == "attribute"))
                        eventElement.Remove();
                }

                var targetDescription = target == "form" ? "form" : target;
                return $"remove_event: handler \"{functionName}\" removed from \"{eventName}\" ({targetDescription})";
            }

            eventElement.Remove();

            if (!eventsElement.HasElements)
                eventsElement.Remove();

            var desc = target == "form" ? "form" : target;
            return $"remove_event: entire \"{eventName}\" event removed from {desc}";
        }

        // ── Internal Helpers ─────────────────────────────────────────────────────

        private static (bool added, string libraryUniqueId) EnsureLibrary(XDocument formDoc, string libraryName)
        {
            var formLibraries = formDoc.Root.Element("formLibraries");
            if (formLibraries == null)
            {
                formLibraries = new XElement("formLibraries");
                var insertBefore = formDoc.Root.Element("externaldependencies")
                    ?? formDoc.Root.Element("formparameters");
                var insertAfter = formDoc.Root.Element("events")
                    ?? formDoc.Root.Element("footer")
                    ?? formDoc.Root.Element("header")
                    ?? formDoc.Root.Element("tabs");
                if (insertBefore != null)
                    insertBefore.AddBeforeSelf(formLibraries);
                else if (insertAfter != null)
                    insertAfter.AddAfterSelf(formLibraries);
                else
                    formDoc.Root.Add(formLibraries);
            }

            var existingLib = formLibraries.Elements("Library")
                .FirstOrDefault(lib =>
                    string.Equals(lib.Attribute("name")?.Value, libraryName, StringComparison.OrdinalIgnoreCase));

            if (existingLib != null)
            {
                return (false, existingLib.Attribute("libraryUniqueId")?.Value ?? FormXmlHelpers.NewGuid());
            }

            var libraryUniqueId = FormXmlHelpers.NewGuid();
            formLibraries.Add(new XElement("Library",
                new XAttribute("name", libraryName),
                new XAttribute("libraryUniqueId", libraryUniqueId)));

            return (true, libraryUniqueId);
        }
    }
}
