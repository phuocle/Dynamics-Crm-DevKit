using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildFormXMLTool
    {
        private readonly ServiceClient _serviceClient;

        public BuildFormXMLTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_form_xml",
            Title = "Build FormXML with fields, sections, tabs, and events",
            ReadOnly = true, Destructive = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(BuildFormXMLResult)),
        Description(
            "Build modified FormXML by adding fields, sections, tabs, libraries, or event handlers to an existing Dataverse form.\n" +
            "READ-ONLY builder — returns modified FormXML string. Use manage_form to write it.\n\n" +

            "TEN OPERATIONS:\n" +
            "- add_fields: Add fields to an existing section (resolves classid automatically)\n" +
            "- add_section: Add a new section (with fields) to an existing tab\n" +
            "- add_tab: Add a new tab (with sections and fields) to the form\n" +
            "- add_library: Add a web resource library reference to <formLibraries>\n" +
            "- add_event: Add an event handler (onload, onsave, onchange) with auto library registration\n" +
            "- remove_tab: Remove an entire tab from the form\n" +
            "- remove_section: Remove a section from a tab\n" +
            "- remove_fields: Remove specific fields from a section (replaces with spacers to preserve layout)\n" +
            "- remove_library: Remove a library from <formLibraries> and clean up its event handlers\n" +
            "- remove_event: Remove an event handler or entire event from the form\n\n" +

            "Auto-resolves classid GUIDs, generates proper section/tab column layout, creates unique GUIDs, validates field names against metadata.\n\n" +

            "SECTION COLUMNS: 1 (default, one field/row), 2 (two fields/row), 3 (three fields/row, spacers to fill).\n" +
            "TAB COLUMNS: 1 (100%, default), 2 (50%/50%), 3 (33%/34%/33%). Sections specify which tab_column (1-based).\n\n" +

            "TIPS:\n" +
            "- Fields: strings (\"createdon\") or objects ({\"field\":\"createdon\",\"label\":\"Date Created\",\"disabled\":true})\n" +
            "- This tool does NOT modify Dataverse — use manage_form(action='update') to apply the returned FormXML")]
        public CallToolResult build_form_xml(
            [Description("Entity logical name (e.g., 'account'). Used to resolve field metadata.")] string entity_name,
            [Description("GUID of the form to modify. Use manage_form with action='list' to find valid form IDs.")] string form_id,
            [Description(
                "JSON array of operations. Each has 'action' + parameters.\n" +
                "Actions: 'add_tab', 'add_section', 'add_fields', 'add_library', 'add_event', 'remove_tab', 'remove_section', 'remove_fields', 'remove_library', 'remove_event'.\n" +
                "Example: [{\"action\":\"add_fields\",\"tab\":\"tab_general\",\"section\":\"general_sec_info\",\"fields\":[\"createdon\"]}]\n" +
                "Example: [{\"action\":\"add_tab\",\"label\":\"Audit\",\"sections\":[{\"label\":\"Dates\",\"fields\":[\"createdon\",\"modifiedon\"]}]}]\n" +
                "Example: [{\"action\":\"add_library\",\"library_name\":\"new_/js/account.js\"}]\n" +
                "Example: [{\"action\":\"add_event\",\"event_name\":\"onload\",\"function_name\":\"accOnload\",\"library_name\":\"new_/js/account.js\"}]\n" +
                "Example: [{\"action\":\"add_event\",\"event_name\":\"onchange\",\"function_name\":\"onNameChange\",\"library_name\":\"new_/js/account.js\",\"target\":\"field:name\"}]\n" +
                "Example: [{\"action\":\"remove_tab\",\"tab\":\"tab_audit\"}]\n" +
                "Example: [{\"action\":\"remove_section\",\"tab\":\"tab_general\",\"section\":\"sec_dates\"}]\n" +
                "Example: [{\"action\":\"remove_fields\",\"tab\":\"tab_general\",\"section\":\"sec_info\",\"fields\":[\"createdon\",\"modifiedon\"]}]\n" +
                "Example: [{\"action\":\"remove_library\",\"library_name\":\"new_/js/account.js\"}]\n" +
                "Example: [{\"action\":\"remove_event\",\"event_name\":\"onload\",\"function_name\":\"accOnload\",\"library_name\":\"new_/js/account.js\"}]\n" +
                "Example: [{\"action\":\"remove_event\",\"event_name\":\"onchange\",\"function_name\":\"onNameChange\",\"target\":\"field:name\"}]\n" +
                "Fields can be strings or objects: \"createdon\" or {\"field\":\"createdon\",\"label\":\"Date Created\",\"disabled\":true}"
            )] string operations)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(form_id))
                return ErrorResult("Error: form_id is required.");
            if (!Guid.TryParse(form_id.Trim(), out var formId))
                return ErrorResult($"Error: '{form_id}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult("Error: operations is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                // 1. Parse operations JSON
                List<JsonElement> ops;
                try
                {
                    ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                    if (ops == null || ops.Count == 0)
                        return ErrorResult("Error: operations must be a non-empty JSON array.");
                }
                catch (JsonException ex)
                {
                    return ErrorResult($"Error: Invalid operations JSON: {ex.Message}");
                }

                // 2. Retrieve current FormXML from Dataverse
                Entity formEntity;
                try
                {
                    formEntity = _serviceClient.Retrieve("systemform", formId,
                        new ColumnSet("formxml", "name", "objecttypecode", "type"));
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Form not found\nFormId: {formId}\nMessage: {ex.Message}\n" +
                        $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");
                }

                var currentFormXml = formEntity.GetAttributeValue<string>("formxml") ?? "";
                var formName = formEntity.GetAttributeValue<string>("name") ?? "";

                if (string.IsNullOrWhiteSpace(currentFormXml))
                    return ErrorResult($"Error: Form '{formId}' has empty FormXML.");

                // 3. Collect all referenced field names from operations
                var fieldNames = CollectFieldNames(ops);

                // 4. Retrieve entity metadata for all referenced fields
                Dictionary<string, AttributeMetadata> attrMap;
                try
                {
                    var request = new RetrieveEntityRequest
                    {
                        LogicalName = entityName,
                        EntityFilters = EntityFilters.Attributes
                    };
                    var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                    attrMap = response.EntityMetadata.Attributes
                        .ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to retrieve metadata for entity '{entityName}': {ex.Message}");
                }

                // 5. Validate all field names exist in metadata
                var missingFields = fieldNames.Where(f => !attrMap.ContainsKey(f)).ToList();
                if (missingFields.Count > 0)
                {
                    var sb = new StringBuilder();
                    sb.AppendLine($"[BuildFormXML] ERROR -- Field(s) not found in entity '{entityName}' metadata.");
                    foreach (var f in missingFields)
                    {
                        sb.AppendLine($"- '{f}' not found");
                        var similar = attrMap.Keys
                            .Where(k => k.Contains(f) || f.Contains(k) || LevenshteinClose(k, f))
                            .Take(5)
                            .ToList();
                        if (similar.Count > 0)
                            sb.AppendLine($"  Similar: {string.Join(", ", similar)}");
                    }
                    sb.AppendLine($"\nTip: Use get_tables('{entityName}') to list all available fields.");
                    return ErrorResult(sb.ToString());
                }

                // 6. Parse current FormXML into XDocument
                XDocument formDoc;
                try
                {
                    formDoc = XDocument.Parse(currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to parse current FormXML: {ex.Message}");
                }

                // 7. Execute operations in order
                var opSummaries = new List<string>();
                var classIdMap = new Dictionary<string, string>();

                foreach (var op in ops)
                {
                    if (!op.TryGetProperty("action", out var actionProp))
                        return ErrorResult("Error: Each operation must have an 'action' field.");

                    var action = actionProp.GetString()?.ToLowerInvariant();
                    switch (action)
                    {
                        case "add_tab":
                            var tabSummary = ExecuteAddTab(formDoc, op, attrMap, classIdMap);
                            opSummaries.Add(tabSummary);
                            break;
                        case "add_section":
                            var secSummary = ExecuteAddSection(formDoc, op, attrMap, classIdMap);
                            opSummaries.Add(secSummary);
                            break;
                        case "add_fields":
                            var fieldSummary = ExecuteAddFields(formDoc, op, attrMap, classIdMap);
                            opSummaries.Add(fieldSummary);
                            break;
                        case "add_library":
                            var libSummary = ExecuteAddLibrary(formDoc, op);
                            opSummaries.Add(libSummary);
                            break;
                        case "add_event":
                            var eventSummary = ExecuteAddEvent(formDoc, op);
                            opSummaries.Add(eventSummary);
                            break;
                        case "remove_tab":
                            opSummaries.Add(ExecuteRemoveTab(formDoc, op));
                            break;
                        case "remove_section":
                            opSummaries.Add(ExecuteRemoveSection(formDoc, op));
                            break;
                        case "remove_fields":
                            opSummaries.Add(ExecuteRemoveFields(formDoc, op));
                            break;
                        case "remove_library":
                            opSummaries.Add(ExecuteRemoveLibrary(formDoc, op));
                            break;
                        case "remove_event":
                            opSummaries.Add(ExecuteRemoveEvent(formDoc, op));
                            break;
                        default:
                            return ErrorResult($"Error: Unknown action '{action}'. Valid actions: add_tab, add_section, add_fields, add_library, add_event, remove_tab, remove_section, remove_fields, remove_library, remove_event");
                    }
                }

                // 8. Serialize modified XDocument back to string
                var modifiedFormXml = formDoc.ToString(SaveOptions.None);

                // 9. Build response
                var resultSb = new StringBuilder(2048);
                resultSb.AppendLine($"[BuildFormXML] {entityName} -- {formName}");
                resultSb.AppendLine();
                resultSb.AppendLine("Operations performed:");
                for (var i = 0; i < opSummaries.Count; i++)
                    resultSb.AppendLine($"  {i + 1}. {opSummaries[i]}");
                resultSb.AppendLine();

                if (classIdMap.Count > 0)
                {
                    resultSb.AppendLine("ClassIds resolved:");
                    var maxNameLen = classIdMap.Keys.Max(k => k.Length);
                    foreach (var kv in classIdMap.OrderBy(k => k.Key))
                    {
                        var attrType = attrMap.TryGetValue(kv.Key, out var meta) ? meta.AttributeType?.ToString() ?? "?" : "?";
                        resultSb.AppendLine($"  {kv.Key.PadRight(maxNameLen)} -> {attrType.PadRight(12)} -> {{{kv.Value}}}");
                    }
                    resultSb.AppendLine();
                }

                resultSb.AppendLine("Modified FormXML:");
                resultSb.AppendLine(modifiedFormXml);
                resultSb.AppendLine();
                resultSb.AppendLine($"Next step: Pass this FormXML to manage_form(action='update', entity_name='{entityName}', form_id='{formId}', formxml=<above>)");

                var structured = new BuildFormXMLResult
                {
                    Entity = entityName,
                    FormId = formId.ToString(),
                    FormName = formName,
                    Status = "success",
                    OperationsCount = ops.Count,
                    FieldsResolved = classIdMap.Count,
                    FormXml = modifiedFormXml
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = resultSb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] build_form_xml failed\n" +
                    $"Entity: {entityName}\nFormId: {formId}\n" +
                    $"Message: {ex.Message}");
            }
        }

        // ── Operation Executors ──────────────────────────────────────────────────

        private string ExecuteAddTab(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var label = GetStringProp(op, "label")
                ?? throw new InvalidOperationException("add_tab requires 'label'.");
            var tabName = GetStringProp(op, "name") ?? AutoTabName(label);
            var tabColumns = GetIntProp(op, "tab_columns", 1);
            var expanded = GetBoolProp(op, "expanded", true);
            var position = GetStringProp(op, "position") ?? "last";

            // Parse sections
            var sections = new List<(string name, string label, int sectionColumns, int tabColumn, bool showLabel, List<JsonElement> fields)>();
            if (op.TryGetProperty("sections", out var secArray) && secArray.ValueKind == JsonValueKind.Array)
            {
                foreach (var sec in secArray.EnumerateArray())
                {
                    var secLabel = GetStringProp(sec, "label") ?? "Section";
                    var secName = GetStringProp(sec, "name") ?? AutoSectionName(tabName, secLabel);
                    var secColumns = GetIntProp(sec, "section_columns", 1);
                    var secTabColumn = GetIntProp(sec, "tab_column", 0); // 0 = auto-distribute
                    var secShowLabel = GetBoolProp(sec, "show_label", true);
                    var fields = new List<JsonElement>();
                    if (sec.TryGetProperty("fields", out var fieldsArray) && fieldsArray.ValueKind == JsonValueKind.Array)
                    {
                        foreach (var f in fieldsArray.EnumerateArray())
                            fields.Add(f);
                    }
                    sections.Add((secName, secLabel, secColumns, secTabColumn, secShowLabel, fields));
                }
            }

            // Build tab XML
            var tabId = NewGuid();
            var tabElement = new XElement("tab",
                new XAttribute("name", tabName),
                new XAttribute("id", tabId),
                new XAttribute("showlabel", "true"),
                new XAttribute("locklevel", "0"),
                new XAttribute("expanded", expanded ? "true" : "false"),
                new XElement("labels",
                    new XElement("label",
                        new XAttribute("description", label),
                        new XAttribute("languagecode", "1033"))));

            var columnsElement = new XElement("columns");
            var columnWidths = GetTabColumnWidths(tabColumns);

            // Create column elements
            var columnElements = new List<XElement>();
            for (var i = 0; i < tabColumns; i++)
            {
                var col = new XElement("column",
                    new XAttribute("width", columnWidths[i]),
                    new XElement("sections"));
                columnsElement.Add(col);
                columnElements.Add(col);
            }

            // Collect existing control IDs from the form to avoid duplicates
            var existingControlIds = CollectExistingControlIds(formDoc);

            // Distribute sections to columns
            for (var secIdx = 0; secIdx < sections.Count; secIdx++)
            {
                var (secName, secLabel, secColumns, tabColumn, showLabel, fields) = sections[secIdx];
                // If tab_column was explicitly set, use it; otherwise auto-distribute round-robin
                var targetColIdx = tabColumn > 0
                    ? Math.Min(tabColumn - 1, tabColumns - 1)
                    : secIdx % tabColumns;
                targetColIdx = Math.Max(0, targetColIdx);
                var targetSections = columnElements[targetColIdx].Element("sections");

                var sectionElement = BuildSectionElement(secName, secLabel, secColumns, fields, attrMap, classIdMap, showLabel, existingControlIds);
                targetSections.Add(sectionElement);
            }

            // If no sections specified, add empty default section
            if (sections.Count == 0)
            {
                var defaultSection = BuildSectionElement(
                    AutoSectionName(tabName, "default"), label, 1,
                    new List<JsonElement>(), attrMap, classIdMap, true, existingControlIds);
                columnElements[0].Element("sections").Add(defaultSection);
            }

            tabElement.Add(columnsElement);

            // Insert tab into form
            var tabsElement = formDoc.Root.Element("tabs");
            if (tabsElement == null)
            {
                tabsElement = new XElement("tabs");
                formDoc.Root.Add(tabsElement);
            }

            InsertElement(tabsElement, tabElement, position, "tab", "name");

            var totalFields = sections.Sum(s => s.fields.Count);
            return $"add_tab: \"{label}\" ({tabColumns} column(s), {sections.Count} section(s), {totalFields} field(s))";
        }

        private string ExecuteAddSection(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var tabName = GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("add_section requires 'tab'.");
            var label = GetStringProp(op, "label")
                ?? throw new InvalidOperationException("add_section requires 'label'.");
            var secName = GetStringProp(op, "name") ?? AutoSectionName(tabName, label);
            var secColumns = GetIntProp(op, "section_columns", 1);
            var tabColumn = GetIntProp(op, "tab_column", 1);
            var showLabel = GetBoolProp(op, "show_label", true);
            var position = GetStringProp(op, "position") ?? "last";

            var fields = new List<JsonElement>();
            if (op.TryGetProperty("fields", out var fieldsArray) && fieldsArray.ValueKind == JsonValueKind.Array)
            {
                foreach (var f in fieldsArray.EnumerateArray())
                    fields.Add(f);
            }

            // Find the target tab
            var tabElement = FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");

            // Find the target column in the tab
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

            var sectionElement = BuildSectionElement(secName, label, secColumns, fields, attrMap, classIdMap, showLabel, CollectExistingControlIds(formDoc));
            InsertElement(sectionsElement, sectionElement, position, "section", "name");

            return $"add_section: \"{label}\" in tab \"{tabName}\" ({secColumns} column(s), {fields.Count} field(s))";
        }

        private string ExecuteAddFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap)
        {
            var tabName = GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("add_fields requires 'tab'.");
            var sectionName = GetStringProp(op, "section")
                ?? throw new InvalidOperationException("add_fields requires 'section'.");
            var position = GetStringProp(op, "position") ?? "last";

            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("add_fields requires 'fields' array.");

            var fields = fieldsArray.EnumerateArray().ToList();
            if (fields.Count == 0)
                throw new InvalidOperationException("add_fields requires at least one field.");

            // Find the target tab and section
            var tabElement = FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");

            var sectionElement = FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", GetSectionNames(tabElement))}");

            // Determine section column count
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

            // Build cells for each field
            var existingControlIds = CollectExistingControlIds(formDoc);
            var cells = new List<XElement>();
            foreach (var fieldEl in fields)
            {
                var (fieldName, fieldLabel, disabled, visible, colspan, rowspan, showlabel) = ParseFieldSpec(fieldEl);
                var attr = attrMap[fieldName];
                var classid = ResolveClassId(attr);
                classIdMap[fieldName] = classid;

                var resolvedLabel = fieldLabel
                    ?? attr.DisplayName?.UserLocalizedLabel?.Label
                    ?? fieldName;

                var controlId = DeduplicateControlId(fieldName, existingControlIds);
                var cell = BuildCellElement(controlId, fieldName, resolvedLabel, classid, disabled, visible, colspan, rowspan, showlabel);
                cells.Add(cell);
            }

            // Fill rows respecting section columns
            var newRows = BuildRows(cells, secColumns);

            if (position == "first")
            {
                var firstRow = rowsElement.Elements("row").FirstOrDefault();
                if (firstRow != null)
                {
                    foreach (var row in newRows.Reverse<XElement>())
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

            return $"add_fields: {fields.Count} field(s) to section \"{sectionName}\" in tab \"{tabName}\"";
        }

        // ── XML Building Helpers ─────────────────────────────────────────────────

        // ── Event / Library Operation Executors ─────────────────────────────────

        private static string ExecuteAddLibrary(XDocument formDoc, JsonElement op)
        {
            var libraryName = GetStringProp(op, "library_name")
                ?? throw new InvalidOperationException("add_library requires 'library_name'.");

            var (added, _) = EnsureLibrary(formDoc, libraryName);
            return added
                ? $"add_library: \"{libraryName}\" added to formLibraries"
                : $"add_library: \"{libraryName}\" already exists in formLibraries (skipped)";
        }

        private static readonly HashSet<string> ValidEventNames = new(StringComparer.OrdinalIgnoreCase)
        {
            "onload", "onsave", "onchange", "ontabstatechange", "onrecordselect"
        };

        private static string ExecuteAddEvent(XDocument formDoc, JsonElement op)
        {
            var eventName = GetStringProp(op, "event_name")
                ?? throw new InvalidOperationException("add_event requires 'event_name'.");
            if (!ValidEventNames.Contains(eventName.Trim()))
                throw new InvalidOperationException(
                    $"Invalid event_name '{eventName}'. Valid values: {string.Join(", ", ValidEventNames.Order())}");
            var functionName = GetStringProp(op, "function_name")
                ?? throw new InvalidOperationException("add_event requires 'function_name'.");
            var libraryName = GetStringProp(op, "library_name")
                ?? throw new InvalidOperationException("add_event requires 'library_name'.");
            var passExecutionContext = GetBoolProp(op, "pass_execution_context", false);
            var parameters = GetStringProp(op, "parameters") ?? "";
            var enabled = GetBoolProp(op, "enabled", true);
            var target = GetStringProp(op, "target") ?? "form";

            // 1. Auto-add library if not present
            var (_, libraryUniqueId) = EnsureLibrary(formDoc, libraryName);

            // 2. Determine target scope and event type
            XElement targetElement;
            string eventType;
            string attributeName = null;

            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
            {
                // field-level event (onchange)
                var fieldName = target.Substring(6).Trim();
                eventType = "DataEvent";
                attributeName = fieldName;
                targetElement = formDoc.Root; // form-level events element with attribute= for field events
            }
            else if (target.StartsWith("tab:", StringComparison.OrdinalIgnoreCase))
            {
                // tab-level event
                var tabName = target.Substring(4).Trim();
                targetElement = FindTab(formDoc, tabName)
                    ?? throw new InvalidOperationException(
                        $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");
                eventType = "ControlEvent";
            }
            else
            {
                // form-level event
                targetElement = formDoc.Root;
                eventType = "ControlEvent";
            }

            // 3. Find or create <events> element
            var eventsElement = targetElement.Element("events");
            if (eventsElement == null)
            {
                eventsElement = new XElement("events");
                // Insert events before externaldependencies/formparameters if they exist (for form root)
                var insertBefore = targetElement.Element("externaldependencies")
                    ?? targetElement.Element("formparameters");
                if (insertBefore != null)
                    insertBefore.AddBeforeSelf(eventsElement);
                else
                    targetElement.Add(eventsElement);
            }

            // 4. Find or create the specific <event> element
            var eventElement = FindEvent(eventsElement, eventName, attributeName);
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

            // 5. Find or create <Handlers> element
            var handlersElement = eventElement.Element("Handlers");
            if (handlersElement == null)
            {
                handlersElement = new XElement("Handlers");
                eventElement.Add(handlersElement);
            }

            // 6. Check for duplicate handler (same functionName + libraryName)
            var existingHandler = handlersElement.Elements("Handler")
                .FirstOrDefault(h =>
                    string.Equals(h.Attribute("functionName")?.Value, functionName, StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(h.Attribute("libraryName")?.Value, libraryName, StringComparison.OrdinalIgnoreCase));

            if (existingHandler != null)
            {
                var targetDesc = target == "form" ? "form" : target;
                return $"add_event: handler \"{functionName}\" on \"{eventName}\" ({targetDesc}) already exists (skipped)";
            }

            // 7. Generate handler
            var handlerUniqueId = NewGuid();
            var handler = new XElement("Handler",
                new XAttribute("functionName", functionName),
                new XAttribute("libraryName", libraryName),
                new XAttribute("handlerUniqueId", handlerUniqueId),
                new XAttribute("enabled", enabled ? "true" : "false"),
                new XAttribute("passExecutionContext", passExecutionContext ? "true" : "false"));

            if (!string.IsNullOrEmpty(parameters))
                handler.Add(new XAttribute("parameters", parameters));

            // 8. Add library dependency
            handler.Add(new XElement("dependencies",
                new XElement("dependency",
                    new XAttribute("id", libraryUniqueId))));

            handlersElement.Add(handler);

            var targetDescription = target == "form" ? "form" : target;
            return $"add_event: \"{eventName}\" -> \"{functionName}\" from \"{libraryName}\" ({targetDescription})";
        }

        // ── Remove Operation Executors ──────────────────────────────────────────

        private static string ExecuteRemoveTab(XDocument formDoc, JsonElement op)
        {
            var tabName = GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_tab requires 'tab'.");

            var tabElement = FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");

            tabElement.Remove();
            return $"remove_tab: \"{tabName}\" removed";
        }

        private static string ExecuteRemoveSection(XDocument formDoc, JsonElement op)
        {
            var tabName = GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_section requires 'tab'.");
            var sectionName = GetStringProp(op, "section")
                ?? throw new InvalidOperationException("remove_section requires 'section'.");

            var tabElement = FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");

            var sectionElement = FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", GetSectionNames(tabElement))}");

            sectionElement.Remove();
            return $"remove_section: \"{sectionName}\" from tab \"{tabName}\"";
        }

        private static string ExecuteRemoveFields(XDocument formDoc, JsonElement op)
        {
            var tabName = GetStringProp(op, "tab")
                ?? throw new InvalidOperationException("remove_fields requires 'tab'.");
            var sectionName = GetStringProp(op, "section")
                ?? throw new InvalidOperationException("remove_fields requires 'section'.");

            if (!op.TryGetProperty("fields", out var fieldsArray) || fieldsArray.ValueKind != JsonValueKind.Array)
                throw new InvalidOperationException("remove_fields requires 'fields' array.");

            var fieldNames = fieldsArray.EnumerateArray()
                .Where(f => f.ValueKind == JsonValueKind.String)
                .Select(f => f.GetString())
                .ToList();

            if (fieldNames.Count == 0)
                throw new InvalidOperationException("remove_fields requires at least one field name string.");

            var tabElement = FindTab(formDoc, tabName);
            if (tabElement == null)
                throw new InvalidOperationException(
                    $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");

            var sectionElement = FindSection(tabElement, sectionName);
            if (sectionElement == null)
                throw new InvalidOperationException(
                    $"Section '{sectionName}' not found in tab '{tabName}'. Available sections: {string.Join(", ", GetSectionNames(tabElement))}");

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
                        cell.AddAfterSelf(CreateSpacerCell());
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

        private static string ExecuteRemoveLibrary(XDocument formDoc, JsonElement op)
        {
            var libraryName = GetStringProp(op, "library_name")
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

            // Remove all event handler dependencies that reference this library
            if (!string.IsNullOrEmpty(libraryUniqueId))
            {
                foreach (var dep in formDoc.Descendants("dependency").ToList())
                {
                    if (string.Equals(dep.Attribute("id")?.Value, libraryUniqueId, StringComparison.OrdinalIgnoreCase))
                        dep.Remove();
                }
            }

            // Remove handlers that reference this library
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

            // Clean up empty formLibraries element
            if (!formLibraries.HasElements)
                formLibraries.Remove();

            var summary = $"remove_library: \"{libraryName}\" removed";
            if (removedHandlers > 0)
                summary += $" (also removed {removedHandlers} handler(s) referencing it)";
            return summary;
        }

        private static string ExecuteRemoveEvent(XDocument formDoc, JsonElement op)
        {
            var eventName = GetStringProp(op, "event_name")
                ?? throw new InvalidOperationException("remove_event requires 'event_name'.");
            var functionName = GetStringProp(op, "function_name");
            var libraryName = GetStringProp(op, "library_name");
            var target = GetStringProp(op, "target") ?? "form";

            // Determine target element
            XElement targetElement;
            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
            {
                targetElement = formDoc.Root;
            }
            else if (target.StartsWith("tab:", StringComparison.OrdinalIgnoreCase))
            {
                var tabName = target.Substring(4).Trim();
                targetElement = FindTab(formDoc, tabName)
                    ?? throw new InvalidOperationException(
                        $"Tab '{tabName}' not found. Available tabs: {string.Join(", ", GetTabNames(formDoc))}");
            }
            else
            {
                targetElement = formDoc.Root;
            }

            var eventsElement = targetElement.Element("events");
            if (eventsElement == null)
                return $"remove_event: no events element found on {target} — nothing to remove";

            // Resolve attribute name for field-level events
            string attributeName = null;
            if (target.StartsWith("field:", StringComparison.OrdinalIgnoreCase))
                attributeName = target.Substring(6).Trim();

            var eventElement = FindEvent(eventsElement, eventName, attributeName);
            if (eventElement == null)
            {
                var targetDesc = target == "form" ? "form" : target;
                return $"remove_event: event \"{eventName}\" not found on {targetDesc}";
            }

            // If functionName is specified, remove only that specific handler
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

                // Clean up empty Handlers/event elements
                if (!handlersElement.HasElements)
                {
                    handlersElement.Remove();
                    if (!eventElement.HasElements && eventElement.Attributes().All(a => a.Name == "name" || a.Name == "application" || a.Name == "active" || a.Name == "eventType" || a.Name == "attribute"))
                        eventElement.Remove();
                }

                var targetDescription = target == "form" ? "form" : target;
                return $"remove_event: handler \"{functionName}\" removed from \"{eventName}\" ({targetDescription})";
            }

            // No functionName specified — remove the entire event element
            eventElement.Remove();

            // Clean up empty events element
            if (!eventsElement.HasElements)
                eventsElement.Remove();

            var desc = target == "form" ? "form" : target;
            return $"remove_event: entire \"{eventName}\" event removed from {desc}";
        }

        /// <summary>
        /// Ensures a library reference exists in formLibraries. Returns (wasAdded, libraryUniqueId).
        /// </summary>
        private static (bool added, string libraryUniqueId) EnsureLibrary(XDocument formDoc, string libraryName)
        {
            var formLibraries = formDoc.Root.Element("formLibraries");
            if (formLibraries == null)
            {
                formLibraries = new XElement("formLibraries");
                // Insert after events or tabs, before externaldependencies
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

            // Check if library already exists
            var existingLib = formLibraries.Elements("Library")
                .FirstOrDefault(lib =>
                    string.Equals(lib.Attribute("name")?.Value, libraryName, StringComparison.OrdinalIgnoreCase));

            if (existingLib != null)
            {
                return (false, existingLib.Attribute("libraryUniqueId")?.Value ?? NewGuid());
            }

            // Add new library
            var libraryUniqueId = NewGuid();
            formLibraries.Add(new XElement("Library",
                new XAttribute("name", libraryName),
                new XAttribute("libraryUniqueId", libraryUniqueId)));

            return (true, libraryUniqueId);
        }

        /// <summary>
        /// Finds an event element matching the event name and optional attribute name.
        /// </summary>
        private static XElement FindEvent(XElement eventsElement, string eventName, string attributeName)
        {
            return eventsElement.Elements("event")
                .FirstOrDefault(e =>
                {
                    var nameMatch = string.Equals(e.Attribute("name")?.Value, eventName, StringComparison.OrdinalIgnoreCase);
                    if (!nameMatch) return false;

                    if (attributeName != null)
                        return string.Equals(e.Attribute("attribute")?.Value, attributeName, StringComparison.OrdinalIgnoreCase);

                    // For non-field events, match events without attribute
                    return e.Attribute("attribute") == null || string.IsNullOrEmpty(e.Attribute("attribute")?.Value);
                });
        }

        // ── XML Building Helpers (Fields/Sections) ──────────────────────────────

        private XElement BuildSectionElement(string name, string label, int sectionColumns,
            List<JsonElement> fields, Dictionary<string, AttributeMetadata> attrMap,
            Dictionary<string, string> classIdMap, bool showLabel, HashSet<string> existingControlIds)
        {
            var section = new XElement("section",
                new XAttribute("name", name),
                new XAttribute("showlabel", showLabel ? "true" : "false"),
                new XAttribute("id", NewGuid()),
                new XAttribute("columns", sectionColumns.ToString()),
                new XAttribute("celllabelposition", "Left"),
                new XAttribute("labelwidth", "115"),
                new XElement("labels",
                    new XElement("label",
                        new XAttribute("description", label),
                        new XAttribute("languagecode", "1033"))));

            var rowsElement = new XElement("rows");

            if (fields.Count > 0)
            {
                var cells = new List<XElement>();
                foreach (var fieldEl in fields)
                {
                    var (fieldName, fieldLabel, disabled, visible, colspan, rowspan, showlabel) = ParseFieldSpec(fieldEl);
                    var attr = attrMap[fieldName];
                    var classid = ResolveClassId(attr);
                    classIdMap[fieldName] = classid;

                    var resolvedLabel = fieldLabel
                        ?? attr.DisplayName?.UserLocalizedLabel?.Label
                        ?? fieldName;

                    var controlId = DeduplicateControlId(fieldName, existingControlIds);
                    cells.Add(BuildCellElement(controlId, fieldName, resolvedLabel, classid, disabled, visible, colspan, rowspan, showlabel));
                }

                var rows = BuildRows(cells, sectionColumns);
                foreach (var row in rows)
                    rowsElement.Add(row);
            }

            section.Add(rowsElement);
            return section;
        }

        private static XElement BuildCellElement(string controlId, string fieldName, string label, string classid,
            bool disabled, bool visible, int colspan, int rowspan, bool showlabel)
        {
            var cell = new XElement("cell",
                new XAttribute("id", NewGuid()),
                new XAttribute("showlabel", showlabel ? "true" : "false"),
                new XAttribute("locklevel", "0"));

            if (!visible)
                cell.Add(new XAttribute("visible", "false"));
            if (colspan > 1)
                cell.Add(new XAttribute("colspan", colspan.ToString()));
            if (rowspan > 1)
                cell.Add(new XAttribute("rowspan", rowspan.ToString()));

            cell.Add(new XElement("labels",
                new XElement("label",
                    new XAttribute("description", label),
                    new XAttribute("languagecode", "1033"))));

            var control = new XElement("control",
                new XAttribute("id", controlId),
                new XAttribute("classid", $"{{{classid}}}"),
                new XAttribute("datafieldname", fieldName));

            if (disabled)
                control.Add(new XAttribute("disabled", "true"));

            cell.Add(control);
            return cell;
        }

        private static XElement CreateSpacerCell()
        {
            return new XElement("cell",
                new XAttribute("id", NewGuid()));
        }

        /// <summary>
        /// Collects all existing control IDs from the form to detect duplicates.
        /// </summary>
        private static HashSet<string> CollectExistingControlIds(XDocument formDoc)
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

        /// <summary>
        /// Returns a unique control ID. If the fieldName already exists, appends 1, 2, 3... until unique.
        /// Also adds the returned ID to the set so subsequent calls in the same batch detect it.
        /// </summary>
        private static string DeduplicateControlId(string fieldName, HashSet<string> existingIds)
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

        private static List<XElement> BuildRows(List<XElement> cells, int sectionColumns)
        {
            var rows = new List<XElement>();
            for (var i = 0; i < cells.Count; i += sectionColumns)
            {
                var row = new XElement("row");
                for (var j = i; j < i + sectionColumns && j < cells.Count; j++)
                    row.Add(cells[j]);
                // Pad with spacer cells if needed
                while (row.Elements("cell").Count() < sectionColumns)
                    row.Add(CreateSpacerCell());
                rows.Add(row);
            }
            return rows;
        }

        // ── ClassId Resolution ───────────────────────────────────────────────────

        private static string ResolveClassId(AttributeMetadata attr)
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
                _ => ControlClassId.SINGLE_LINE_OF_TEXT // Fallback for uncommon types
            };
        }

        // ── Form Navigation Helpers ──────────────────────────────────────────────

        private static XElement FindTab(XDocument formDoc, string tabName)
        {
            var tabs = formDoc.Root?.Element("tabs")?.Elements("tab");
            if (tabs == null) return null;

            // Match by name attribute (exact)
            var tab = tabs.FirstOrDefault(t =>
                string.Equals(t.Attribute("name")?.Value, tabName, StringComparison.OrdinalIgnoreCase));
            if (tab != null) return tab;

            // Match by label text (fuzzy)
            return tabs.FirstOrDefault(t =>
            {
                var labelDesc = t.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                return string.Equals(labelDesc, tabName, StringComparison.OrdinalIgnoreCase);
            });
        }

        private static XElement FindSection(XElement tabElement, string sectionName)
        {
            var sections = tabElement.Descendants("section");

            // Match by name attribute (exact)
            var section = sections.FirstOrDefault(s =>
                string.Equals(s.Attribute("name")?.Value, sectionName, StringComparison.OrdinalIgnoreCase));
            if (section != null) return section;

            // Match by label text (fuzzy)
            return sections.FirstOrDefault(s =>
            {
                var labelDesc = s.Element("labels")?.Element("label")?.Attribute("description")?.Value;
                return string.Equals(labelDesc, sectionName, StringComparison.OrdinalIgnoreCase);
            });
        }

        private static List<string> GetTabNames(XDocument formDoc)
        {
            return formDoc.Root?.Element("tabs")?.Elements("tab")
                .Select(t => t.Attribute("name")?.Value ?? "(unnamed)")
                .ToList() ?? new List<string>();
        }

        private static List<string> GetSectionNames(XElement tabElement)
        {
            return tabElement.Descendants("section")
                .Select(s => s.Attribute("name")?.Value ?? "(unnamed)")
                .ToList();
        }

        private static void InsertElement(XElement parent, XElement newElement, string position,
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
                if (target != null)
                    target.AddAfterSelf(newElement);
                else
                    parent.Add(newElement); // Fallback to last
            }
            else // "last" or default
            {
                parent.Add(newElement);
            }
        }

        // ── Field Parsing ────────────────────────────────────────────────────────

        private static (string fieldName, string label, bool disabled, bool visible,
            int colspan, int rowspan, bool showlabel) ParseFieldSpec(JsonElement fieldEl)
        {
            if (fieldEl.ValueKind == JsonValueKind.String)
            {
                return (fieldEl.GetString(), null, false, true, 1, 1, true);
            }

            var fieldName = GetStringProp(fieldEl, "field")
                ?? throw new InvalidOperationException("Field object must have 'field' property.");
            var label = GetStringProp(fieldEl, "label");
            var disabled = GetBoolProp(fieldEl, "disabled", false);
            var visible = GetBoolProp(fieldEl, "visible", true);
            var colspan = GetIntProp(fieldEl, "colspan", 1);
            var rowspan = GetIntProp(fieldEl, "rowspan", 1);
            var showlabel = GetBoolProp(fieldEl, "showlabel", true);

            return (fieldName, label, disabled, visible, colspan, rowspan, showlabel);
        }

        private static HashSet<string> CollectFieldNames(List<JsonElement> ops)
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var op in ops)
            {
                var action = GetStringProp(op, "action")?.ToLowerInvariant() ?? "";
                if (action.StartsWith("remove_")) continue;

                CollectFieldsFromArray(op, "fields", names);
                if (op.TryGetProperty("sections", out var sections) && sections.ValueKind == JsonValueKind.Array)
                {
                    foreach (var sec in sections.EnumerateArray())
                        CollectFieldsFromArray(sec, "fields", names);
                }
            }
            return names;
        }

        private static void CollectFieldsFromArray(JsonElement parent, string propName, HashSet<string> names)
        {
            if (!parent.TryGetProperty(propName, out var arr) || arr.ValueKind != JsonValueKind.Array) return;
            foreach (var f in arr.EnumerateArray())
            {
                if (f.ValueKind == JsonValueKind.String)
                    names.Add(f.GetString());
                else if (f.TryGetProperty("field", out var fn) && fn.ValueKind == JsonValueKind.String)
                    names.Add(fn.GetString());
            }
        }

        // ── Naming Helpers ───────────────────────────────────────────────────────

        private static string AutoTabName(string label)
            => $"tab_{Sanitize(label)}";

        private static string AutoSectionName(string tabName, string label)
        {
            var tabPart = tabName.StartsWith("tab_", StringComparison.OrdinalIgnoreCase)
                ? tabName.Substring(4) : tabName;
            return $"{tabPart}_sec_{Sanitize(label)}";
        }

        private static string Sanitize(string s)
            => Regex.Replace(s.ToLowerInvariant(), @"[^a-z0-9]+", "_").Trim('_');

        private static string NewGuid()
            => $"{{{Guid.NewGuid().ToString().ToUpperInvariant()}}}";

        private static string[] GetTabColumnWidths(int tabColumns) => tabColumns switch
        {
            2 => ["50%", "50%"],
            3 => ["33%", "34%", "33%"],
            _ => ["100%"]
        };

        // ── JSON Helpers ─────────────────────────────────────────────────────────

        private static string GetStringProp(JsonElement el, string name)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString();
            return null;
        }

        private static int GetIntProp(JsonElement el, string name, int defaultValue)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.Number)
                return prop.GetInt32();
            return defaultValue;
        }

        private static bool GetBoolProp(JsonElement el, string name, bool defaultValue)
        {
            if (el.TryGetProperty(name, out var prop) &&
                (prop.ValueKind == JsonValueKind.True || prop.ValueKind == JsonValueKind.False))
                return prop.GetBoolean();
            return defaultValue;
        }

        private static bool LevenshteinClose(string a, string b)
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
