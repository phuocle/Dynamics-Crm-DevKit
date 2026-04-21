// BuildRibbonXmlTool.cs
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildRibbonXmlTool
    {
        private readonly ServiceClient _serviceClient;
        private const string SOLUTION_NAME = "devkit_ribbon";

        // Cached XSD schema set for ribbon validation
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public BuildRibbonXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_ribbon_xml", Title = "Build RibbonDiffXml with custom buttons",
            Destructive = false, ReadOnly = true, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(BuildRibbonXmlResult)),
        Description(
            "Build modified RibbonDiffXml for a Dataverse entity. " +
            "READ-ONLY — saves to temp file; use manage_ribbon(action='update') to apply.\n\n" +
            "OPERATIONS: add_button, update_button, hide_button, show_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item\n" +
            "[Future: add_flyout_dynamic]\n\n" +
            "Auto-fetches existing RibbonDiffXml from solution 'devkit-ribbon' to preserve existing buttons.\n" +
            "Surface types: form (main form), main_grid (home page grid), sub_grid (associated/sub grid).\n" +
            "Validates webresource existence before referencing.\n" +
            "Validates output XML against Ribbon XSD schema.\n\n" +
            "REQUIRED for add_button — all 6 must be provided:\n" +
            "1. entity_name (top-level param)\n" +
            "2. surface — form | main_grid | sub_grid\n" +
            "3. label — button display name shown in ribbon\n" +
            "4. library — web resource JS file for button click\n" +
            "5. function — JavaScript function name for button click\n" +
            "6. enable_library — web resource JS file for enable rule\n" +
            "7. enable_function — JavaScript function name for enable rule\n" +
            "Missing any one of these will cause the operation to fail.\n\n" +
            "REQUIRED for update_button — button_id or label must identify the button:\n" +
            "  Updatable fields: label, library, function, enable_library, enable_function,\n" +
            "  modern_image, tooltip_title, tooltip_description, sequence.\n" +
            "  Omit a field to keep its current value.\n\n" +
            "REQUIRED for add_flyout_static — static flyout menu with fixed child buttons:\n" +
            "  surface, label, items[] (each item needs: label, library, function, enable_library, enable_function)\n" +
            "  OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
            "  OPTIONAL per item: modern_image, tooltip_title, sequence (auto: 10, 20, 30...)\n" +
            "  Supports all 3 surfaces: form, main_grid, sub_grid.\n\n" +
            "REQUIRED for update_flyout_static — modify existing static flyout:\n" +
            "  flyout_id OR label (to identify the flyout)\n" +
            "  Updatable flyout-level: label, tooltip_title, tooltip_description, modern_image, sequence.\n" +
            "  Updatable per item (via items[]): item_label (REQUIRED), then: label, tooltip_title, modern_image, sequence, library, function, enable_library, enable_function.\n" +
            "  Omit a field to keep its current value.\n\n" +
            "REQUIRED for hide_flyout_item — disable a child button inside a static flyout:\n" +
            "  flyout_label OR flyout_id (to identify the flyout)\n" +
            "  item_label (to identify which child button to hide)\n\n" +
            "REQUIRED for show_flyout_item — re-enable a previously hidden child button:\n" +
            "  flyout_label OR flyout_id (to identify the flyout)\n" +
            "  item_label (to identify which child button to show)")]
        public CallToolResult build_ribbon_xml(
            [Description("Entity logical name (e.g., 'account'). Used to resolve ribbon customization.")] string entity_name,
            [Description("JSON array of operations. Each requires 'action' field.\n" +
                "Actions: add_button, update_button\n" +
                "add_button REQUIRED fields:\n" +
                "  - surface: 'form' | 'main_grid' | 'sub_grid'\n" +
                "  - label: button display text\n" +
                "  - library: web resource JS for button click (must exist in Dataverse)\n" +
                "  - function: JS function name for button click\n" +
                "  - enable_library: web resource JS for enable rule (must exist in Dataverse)\n" +
                "  - enable_function: JS function name for enable rule\n" +
                "add_button OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
                "update_button REQUIRED: button_id OR label (to identify the button)\n" +
                "update_button OPTIONAL (all updatable): label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence\n" +
                "hide_button REQUIRED: button_id (the OOB or custom button's Id, e.g. 'Mscrm.Form.v4_mcp.Deactivate')\n" +
                "show_button REQUIRED: button_id (removes the HideCustomAction to restore the button)\n" +
                "Example add: [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"Run Report\",\"library\":\"new_/scripts/account.js\",\"function\":\"Account.runReport\",\"enable_library\":\"new_/scripts/account.js\",\"enable_function\":\"Account.isEnabled\"}]\n" +
                "Example update: [{\"action\":\"update_button\",\"button_id\":\"devkit.account.RunReport.Button\",\"label\":\"New Label\",\"sequence\":90}]\n" +
                "Example hide: [{\"action\":\"hide_button\",\"button_id\":\"Mscrm.Form.v4_mcp.Deactivate\"}]\n" +
                "Example show: [{\"action\":\"show_button\",\"button_id\":\"Mscrm.Form.v4_mcp.Deactivate\"}]\n" +
                "add_flyout_static REQUIRED fields:\n" +
                "  - surface: 'form' | 'main_grid' | 'sub_grid'\n" +
                "  - label: flyout display text\n" +
                "  - items: array of child buttons, each with: label, library, function, enable_library, enable_function\n" +
                "add_flyout_static OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
                "add_flyout_static OPTIONAL per item: modern_image, tooltip_title, sequence (auto: 10, 20, 30...)\n" +
                "Example add_flyout_static: [{\"action\":\"add_flyout_static\",\"surface\":\"form\",\"label\":\"Export Data\",\"modern_image\":\"v4_/images/export.svg\",\"items\":[{\"label\":\"Export Excel\",\"library\":\"v4_/scripts/mcp.js\",\"function\":\"MCP.exportExcel\",\"enable_library\":\"v4_/scripts/mcp.js\",\"enable_function\":\"MCP.isEnabled\"},{\"label\":\"Export PDF\",\"library\":\"v4_/scripts/mcp.js\",\"function\":\"MCP.exportPdf\",\"enable_library\":\"v4_/scripts/mcp.js\",\"enable_function\":\"MCP.isEnabled\"}]}]\n" +
                "update_flyout_static REQUIRED: flyout_id OR label (to identify the flyout)\n" +
                "update_flyout_static OPTIONAL (flyout-level): label, tooltip_title, tooltip_description, modern_image, sequence\n" +
                "update_flyout_static OPTIONAL items[]: item_label (REQUIRED to identify button), then any of: label, tooltip_title, modern_image, sequence, library, function, enable_library, enable_function\n" +
                "Example update_flyout_static: [{\"action\":\"update_flyout_static\",\"label\":\"Export Data\",\"items\":[{\"item_label\":\"Export to Excel\",\"modern_image\":\"v4_/images/excel.svg\"}]}]\n" +
                "hide_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n" +
                "show_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n" +
                "Example hide_flyout_item: [{\"action\":\"hide_flyout_item\",\"flyout_label\":\"Export Data\",\"item_label\":\"Export to Excel\"}]\n" +
                "Example show_flyout_item: [{\"action\":\"show_flyout_item\",\"flyout_label\":\"Export Data\",\"item_label\":\"Export to Excel\"}]")] string operations)
        {
            // Step 1: Validate inputs
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required. Provide entity logical name (e.g. 'account').");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult(
                    "Error: operations is required.\n" +
                    "Provide a non-empty JSON array, e.g. [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",\"library\":\"...\",\"function\":\"...\",\"enable_library\":\"...\",\"enable_function\":\"...\"}].");

            entity_name = entity_name.Trim().ToLowerInvariant();

            // Step 2: Validate entity exists
            var entityError = ValidateEntityExists(entity_name);
            if (entityError != null)
                return ErrorResult(entityError);

            // Step 3: Parse operations JSON
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

            // Step 4: Auto-fetch existing RibbonDiffXml from devkit-ribbon solution
            var existingXml = FetchExistingRibbonDiffXml(entity_name);

            // Step 5: Parse existing XML
            XDocument ribbonDoc;
            try
            {
                ribbonDoc = XDocument.Parse(existingXml);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse existing RibbonDiffXml: {ex.Message}");
            }

            // Step 6: Execute operations
            var summaries = new List<string>();
            var existingButtonCount = CountExistingButtons(ribbonDoc);

            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    return ErrorResult("Error: Each operation must have an 'action' field.");

                var action = actionProp.GetString()?.Trim().ToLowerInvariant();
                switch (action)
                {
                    case "add_button":
                        var addResult = ExecuteAddButton(ribbonDoc, entity_name, op);
                        if (addResult.error != null)
                            return ErrorResult(addResult.error);
                        summaries.Add(addResult.summary);
                        break;

                    case "update_button":
                        var updResult = ExecuteUpdateButton(ribbonDoc, entity_name, op);
                        if (updResult.error != null)
                            return ErrorResult(updResult.error);
                        summaries.Add(updResult.summary);
                        break;

                    case "hide_button":
                        var hideResult = ExecuteHideButton(ribbonDoc, entity_name, op);
                        if (hideResult.error != null)
                            return ErrorResult(hideResult.error);
                        summaries.Add(hideResult.summary);
                        break;

                    case "show_button":
                        var showResult = ExecuteShowButton(ribbonDoc, entity_name, op);
                        if (showResult.error != null)
                            return ErrorResult(showResult.error);
                        summaries.Add(showResult.summary);
                        break;

                    case "add_flyout_static":
                        var flyoutResult = ExecuteAddFlyoutStatic(ribbonDoc, entity_name, op);
                        if (flyoutResult.error != null)
                            return ErrorResult(flyoutResult.error);
                        summaries.Add(flyoutResult.summary);
                        break;

                    case "update_flyout_static":
                        var updFlyoutResult = ExecuteUpdateFlyoutStatic(ribbonDoc, entity_name, op);
                        if (updFlyoutResult.error != null)
                            return ErrorResult(updFlyoutResult.error);
                        summaries.Add(updFlyoutResult.summary);
                        break;

                    case "hide_flyout_item":
                        var hideFiResult = ExecuteHideFlyoutItem(ribbonDoc, entity_name, op);
                        if (hideFiResult.error != null)
                            return ErrorResult(hideFiResult.error);
                        summaries.Add(hideFiResult.summary);
                        break;

                    case "show_flyout_item":
                        var showFiResult = ExecuteShowFlyoutItem(ribbonDoc, entity_name, op);
                        if (showFiResult.error != null)
                            return ErrorResult(showFiResult.error);
                        summaries.Add(showFiResult.summary);
                        break;

                    default:
                        return ErrorResult(
                            $"Error: Unknown action '{action}'.\n" +
                            "Valid actions: add_button, update_button, hide_button, show_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item\n" +
                            "Future: add_flyout_dynamic");
                }
            }

            // Step 7: Validate output XML against Ribbon XSD
            var xmlString = ribbonDoc.ToString(SaveOptions.None);
            var (xsdErrors, xsdWarnings) = ValidateRibbonXml(xmlString);
            if (xsdErrors.Count > 0)
                return ErrorResult($"Error: Generated XML failed Ribbon XSD validation:\n{string.Join("\n", xsdErrors)}");

            // Step 8: Save to temp file
            var workingDir = Directory.GetCurrentDirectory();
            var outputDir = Path.Combine(workingDir, ".devkit", "modified_ribbons");
            Directory.CreateDirectory(outputDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var outputFile = Path.Combine(outputDir, $"{entity_name}_{timestamp}.ribbondiffxml");
            File.WriteAllText(outputFile, xmlString, Encoding.UTF8);

            // Step 9: Return result
            var newButtonCount = CountExistingButtons(ribbonDoc);
            var sb = new StringBuilder();
            sb.AppendLine($"[BuildRibbonXml] {entity_name}");
            sb.AppendLine($"Operations: {ops.Count}");
            foreach (var s in summaries)
                sb.AppendLine($"  ✓ {s}");
            if (xsdWarnings.Count > 0)
            {
                sb.AppendLine($"XSD Warnings ({xsdWarnings.Count}):");
                foreach (var w in xsdWarnings)
                    sb.AppendLine($"  ⚠ {w}");
            }
            sb.AppendLine($"Existing buttons preserved: {existingButtonCount}");
            sb.AppendLine($"Total buttons after: {newButtonCount}");
            sb.AppendLine($"Output: {outputFile}");
            sb.AppendLine();
            sb.AppendLine("Preview:");
            sb.AppendLine("```xml");
            sb.AppendLine(xmlString);
            sb.AppendLine("```");
            sb.AppendLine();
            sb.AppendLine($"To apply: manage_ribbon(action='update', entity_name='{entity_name}', ribbonxml='{outputFile}')");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new BuildRibbonXmlResult
                {
                    EntityName = entity_name,
                    Status = "built",
                    OperationsCount = ops.Count,
                    OperationSummaries = summaries,
                    ExistingButtonsPreserved = existingButtonCount,
                    TotalButtons = newButtonCount,
                    RibbonXmlPath = outputFile
                })
            };
        }

        // ── Surface → Location mapping ───────────────────────────────────

        private static readonly Dictionary<string, string> SurfaceLocationMap = new()
        {
            ["form"]      = "Mscrm.Form.{entity}.MainTab.Save.Controls._children",
            ["main_grid"] = "Mscrm.HomepageGrid.{entity}.MainTab.Actions.Controls._children",
            ["sub_grid"]  = "Mscrm.SubGrid.{entity}.MainTab.Actions.Controls._children",
        };

        // ── Validation ───────────────────────────────────────────────────

        private string ValidateEntityExists(string entityName)
        {
            try
            {
                var fetch = $@"<fetch top='1'>
                    <entity name='entity'>
                        <attribute name='logicalname'/>
                        <filter>
                            <condition attribute='logicalname' operator='eq' value='{EscapeXml(entityName)}'/>
                        </filter>
                    </entity>
                </fetch>";
                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                if (results.Entities.Count == 0)
                    return $"Error: Entity '{entityName}' not found in Dataverse.\nTip: Use get_tables to find valid entity names.";
                return null;
            }
            catch (Exception ex)
            {
                return $"Error: Failed to validate entity '{entityName}': {ex.Message}";
            }
        }

        private string ValidateWebResourceExists(string webResourceName)
        {
            if (string.IsNullOrWhiteSpace(webResourceName)) return null;

            var name = webResourceName.TrimStart();
            if (name.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
                name = name.Substring("$webresource:".Length);

            try
            {
                var fetch = $@"<fetch top='1'>
                    <entity name='webresource'>
                        <attribute name='name'/>
                        <filter>
                            <condition attribute='name' operator='eq' value='{EscapeXml(name)}'/>
                        </filter>
                    </entity>
                </fetch>";
                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                if (results.Entities.Count == 0)
                    return $"Error: Web resource '{name}' not found in Dataverse.\nTip: Use manage_webresource(action='list') to find valid web resources.";
                return null;
            }
            catch (Exception ex)
            {
                return $"Error: Failed to validate web resource '{name}': {ex.Message}";
            }
        }

        private static (List<string> Errors, List<string> Warnings) ValidateRibbonXml(string ribbonXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetRibbonSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings); // No schema — skip validation

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (sender, e) =>
                {
                    var location = e.Exception?.LineNumber > 0
                        ? $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: "
                        : "";
                    var msg = $"{location}{e.Message}";

                    // Treat "not declared" as warning — schema evolution tolerance
                    if (e.Message.Contains("not declared") || e.Severity == XmlSeverityType.Warning)
                        warnings.Add($"Warning: {msg}");
                    else
                        errors.Add($"Error: {msg}");
                };

                using var stringReader = new StringReader(ribbonXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"Error: XML parse error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static XmlSchemaSet GetRibbonSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                string[] schemaFiles = ["RibbonCore.xsd", "RibbonTypes.xsd", "RibbonWSS.xsd"];

                var schemas = new XmlSchemaSet();
                foreach (var schemaFile in schemaFiles)
                {
                    var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFile));
                    if (resourceName == null) continue;

                    using var stream = assembly.GetManifestResourceStream(resourceName);
                    if (stream == null) continue;

                    var schema = XmlSchema.Read(stream, null);
                    if (schema != null)
                        schemas.Add(schema);
                }

                if (schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedSchemaSet = schemas;
                }

                return _cachedSchemaSet;
            }
        }

        // ── Fetch existing RibbonDiffXml ─────────────────────────────────

        private string FetchExistingRibbonDiffXml(string entityName)
        {
            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                var zipBytes = exportResp.ExportSolutionFile;

                using var ms = new MemoryStream(zipBytes);
                using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

                var customizationsEntry = archive.Entries
                    .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

                if (customizationsEntry != null)
                {
                    using var entryStream = customizationsEntry.Open();
                    var doc = XDocument.Load(entryStream);

                    var entityNode = doc.Descendants("Entity")
                        .FirstOrDefault(e =>
                        {
                            var nameEl = e.Element("Name");
                            return nameEl != null && string.Equals(
                                nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
                        });

                    if (entityNode != null)
                    {
                        var ribbonDiffEl = entityNode.Element("RibbonDiffXml");
                        if (ribbonDiffEl != null)
                            return ribbonDiffEl.ToString();
                    }
                }
            }
            catch
            {
                // Solution doesn't exist yet or export failed — use empty skeleton
            }

            return GetEmptyRibbonDiffXml();
        }

        private static string GetEmptyRibbonDiffXml()
        {
            return @"<RibbonDiffXml>
  <CustomActions />
  <Templates>
    <RibbonTemplates Id=""Mscrm.Templates""></RibbonTemplates>
  </Templates>
  <CommandDefinitions />
  <RuleDefinitions>
    <TabDisplayRules />
    <DisplayRules />
    <EnableRules />
  </RuleDefinitions>
  <LocLabels />
</RibbonDiffXml>";
        }

        // ── Count existing buttons ───────────────────────────────────────

        private static int CountExistingButtons(XDocument ribbonDoc)
        {
            var customActions = ribbonDoc.Root?.Element("CustomActions");
            if (customActions == null) return 0;
            return customActions.Elements("CustomAction").Count();
        }

        // ── add_button ───────────────────────────────────────────────────

        private (string error, string summary) ExecuteAddButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            // Required fields
            var surface = GetJsonString(op, "surface");
            var label = GetJsonString(op, "label");
            var library = GetJsonString(op, "library");
            var function = GetJsonString(op, "function");
            var enableLibrary = GetJsonString(op, "enable_library");
            var enableFunction = GetJsonString(op, "enable_function");

            if (string.IsNullOrWhiteSpace(surface))
                return ("Error: add_button requires 'surface' (form, main_grid, or sub_grid).", null);
            if (string.IsNullOrWhiteSpace(label))
                return ("Error: add_button requires 'label' (button display text).", null);
            if (string.IsNullOrWhiteSpace(library))
                return ("Error: add_button requires 'library' (web resource JS file for button click).", null);
            if (string.IsNullOrWhiteSpace(function))
                return ("Error: add_button requires 'function' (JavaScript function name for button click).", null);
            if (string.IsNullOrWhiteSpace(enableLibrary))
                return ("Error: add_button requires 'enable_library' (web resource JS file for enable rule).", null);
            if (string.IsNullOrWhiteSpace(enableFunction))
                return ("Error: add_button requires 'enable_function' (JavaScript function name for enable rule).", null);

            surface = surface.Trim().ToLowerInvariant();
            if (!SurfaceLocationMap.ContainsKey(surface))
                return ($"Error: Invalid surface '{surface}'. Valid: form, main_grid, sub_grid.", null);

            // Validate web resources
            var libError = ValidateWebResourceExists(library);
            if (libError != null) return (libError, null);
            var enableLibError = ValidateWebResourceExists(enableLibrary);
            if (enableLibError != null) return (enableLibError, null);

            // Optional fields
            var modernImage = GetJsonString(op, "modern_image");
            var tooltipTitle = GetJsonString(op, "tooltip_title") ?? label;
            var tooltipDesc = GetJsonString(op, "tooltip_description");
            var sequence = GetJsonInt(op, "sequence", 85);

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                var imgError = ValidateWebResourceExists(modernImage);
                if (imgError != null) return (imgError, null);
            }

            // Generate IDs from label slug — include surface suffix to avoid cross-surface ID collisions
            var slug = GenerateSlug(label);
            var btnSurfaceSuffix = surface == "form" ? "Form" : surface == "main_grid" ? "HomepageGrid" : "SubGrid";
            var customActionId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.CustomAction";
            var buttonId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.Button";
            var commandId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.Command";
            var enableRuleId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.EnableRule";

            var location = SurfaceLocationMap[surface].Replace("{entity}", entityName);

            // Remove existing nodes with same IDs (idempotent)
            // Match by inner element Id (Button) because Ribbon Workbench may change CustomAction Id
            RemoveCustomActionByInnerElementId(ribbonDoc.Root, buttonId);
            RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", commandId);

            // ── CustomAction + Button ──
            var customActionsEl = GetOrCreateElement(ribbonDoc.Root, "CustomActions");
            var buttonEl = BuildButtonElement(buttonId, commandId, tooltipTitle, sequence, modernImage, tooltipDesc);

            customActionsEl.Add(new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", buttonEl)));

            // ── CrmParameters per surface ──
            // form:      PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds
            // main_grid: SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds
            // sub_grid:  SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds
            XElement[] crmParams = surface == "form"
                ? [
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryItemIds"))
                  ]
                : [
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "FirstSelectedItemId")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControlSelectedItemIds"))
                  ];

            // ── CommandDefinition ──
            var commandDefsEl = GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");
            var jsFunctionEl = new XElement("JavaScriptFunction",
                new XAttribute("Library", $"$webresource:{library}"),
                new XAttribute("FunctionName", function));
            foreach (var p in crmParams) jsFunctionEl.Add(p);

            // DisplayRule reference inside CommandDefinition (form only)
            var displayRuleId = surface == "form" ? $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.DisplayRule" : null;

            // sub_grid: extra EnableRule for SelectionCountRule(Min=1) — button disabled when no row selected
            // SelectionCountRule is only valid inside EnableRule (not DisplayRule per XSD)
            var selectionEnableRuleId = surface == "sub_grid" ? $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.SelectionEnableRule" : null;

            XElement displayRulesInCommand = displayRuleId != null
                ? new XElement("DisplayRules", new XElement("DisplayRule", new XAttribute("Id", displayRuleId)))
                : new XElement("DisplayRules");

            var enableRulesInCommand = new XElement("EnableRules",
                new XElement("EnableRule", new XAttribute("Id", enableRuleId)));
            if (selectionEnableRuleId != null)
                enableRulesInCommand.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

            commandDefsEl.Add(new XElement("CommandDefinition",
                new XAttribute("Id", commandId),
                enableRulesInCommand,
                displayRulesInCommand,
                new XElement("Actions", jsFunctionEl)));

            // ── RuleDefinitions ──
            var ruleDefsEl = GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");

            // EnableRule (custom JS) — same CrmParameters as click function
            RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", enableRuleId);
            var enableRulesEl = GetOrCreateElement(ruleDefsEl, "EnableRules");
            var enableCustomRuleEl = new XElement("CustomRule",
                new XAttribute("FunctionName", enableFunction),
                new XAttribute("Library", $"$webresource:{enableLibrary}"));
            foreach (var p in crmParams) enableCustomRuleEl.Add(new XElement(p)); // clone
            enableRulesEl.Add(new XElement("EnableRule",
                new XAttribute("Id", enableRuleId),
                enableCustomRuleEl));

            // sub_grid: SelectionCountRule Minimum="1" as a separate EnableRule
            if (selectionEnableRuleId != null)
            {
                RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", selectionEnableRuleId);
                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", selectionEnableRuleId),
                    new XElement("SelectionCountRule", new XAttribute("Minimum", "1"))));
            }

            // DisplayRule (form only): FormStateRule State="Existing"
            if (displayRuleId != null)
            {
                RemoveByIdInChild(ruleDefsEl, "DisplayRules", "DisplayRule", displayRuleId);
                var displayRulesEl = GetOrCreateElement(ruleDefsEl, "DisplayRules");
                displayRulesEl.Add(new XElement("DisplayRule",
                    new XAttribute("Id", displayRuleId),
                    new XElement("FormStateRule", new XAttribute("State", "Existing"))));
            }

            // ── LocLabels ──
            UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.LabelText", label);
            UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.ToolTipTitle", tooltipTitle);
            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.ToolTipDescription", tooltipDesc);

            return (null, $"add_button: '{label}' [{surface}] click={function} enable={enableFunction}");
        }

        // ── add_flyout_static ────────────────────────────────────────────

        private (string error, string summary) ExecuteAddFlyoutStatic(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            // ── Required fields ──
            var surface = GetJsonString(op, "surface");
            var label = GetJsonString(op, "label");

            if (string.IsNullOrWhiteSpace(surface))
                return ("Error: add_flyout_static requires 'surface' (form, main_grid, or sub_grid).", null);
            if (string.IsNullOrWhiteSpace(label))
                return ("Error: add_flyout_static requires 'label' (flyout display text).", null);

            surface = surface.Trim().ToLowerInvariant();
            if (!SurfaceLocationMap.ContainsKey(surface))
                return ($"Error: Invalid surface '{surface}'. Valid: form, main_grid, sub_grid.", null);

            // ── Items array ──
            if (!op.TryGetProperty("items", out var itemsProp) || itemsProp.ValueKind != JsonValueKind.Array)
                return ("Error: add_flyout_static requires 'items' array with at least 1 item.", null);

            var items = itemsProp.EnumerateArray().ToList();
            if (items.Count == 0)
                return ("Error: add_flyout_static requires 'items' array with at least 1 item.", null);

            // ── Validate each item + check duplicate slugs ──
            var slugSet = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var item in items)
            {
                var itemLabel = GetJsonString(item, "label");
                var itemLib = GetJsonString(item, "library");
                var itemFunc = GetJsonString(item, "function");
                var itemEnLib = GetJsonString(item, "enable_library");
                var itemEnFunc = GetJsonString(item, "enable_function");

                if (string.IsNullOrWhiteSpace(itemLabel))
                    return ("Error: Each item requires 'label'.", null);
                if (string.IsNullOrWhiteSpace(itemLib))
                    return ($"Error: Item '{itemLabel}' requires 'library'.", null);
                if (string.IsNullOrWhiteSpace(itemFunc))
                    return ($"Error: Item '{itemLabel}' requires 'function'.", null);
                if (string.IsNullOrWhiteSpace(itemEnLib))
                    return ($"Error: Item '{itemLabel}' requires 'enable_library'.", null);
                if (string.IsNullOrWhiteSpace(itemEnFunc))
                    return ($"Error: Item '{itemLabel}' requires 'enable_function'.", null);

                var libErr = ValidateWebResourceExists(itemLib);
                if (libErr != null) return (libErr, null);
                var enLibErr = ValidateWebResourceExists(itemEnLib);
                if (enLibErr != null) return (enLibErr, null);

                var itemImage = GetJsonString(item, "modern_image");
                if (!string.IsNullOrWhiteSpace(itemImage))
                {
                    var imgErr = ValidateWebResourceExists(itemImage);
                    if (imgErr != null) return (imgErr, null);
                }

                var itemSlug = GenerateSlug(itemLabel);
                if (!slugSet.Add(itemSlug))
                    return ($"Error: Duplicate item slug '{itemSlug}' — two items resolve to the same ID. Use different labels.", null);
            }

            // ── Optional fields ──
            var modernImage = GetJsonString(op, "modern_image");
            var tooltipTitle = GetJsonString(op, "tooltip_title") ?? label;
            var tooltipDesc = GetJsonString(op, "tooltip_description");
            var sequence = GetJsonInt(op, "sequence", 85);

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                var imgErr = ValidateWebResourceExists(modernImage);
                if (imgErr != null) return (imgErr, null);
            }

            // ── Generate IDs — include surface suffix to avoid cross-surface ID collisions ──
            var flyoutSlug = GenerateSlug(label);
            var surfaceSuffix = surface == "form" ? "Form" : surface == "main_grid" ? "HomepageGrid" : "SubGrid";
            var customActionId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.CustomAction";
            var flyoutAnchorId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.FlyoutAnchor";
            var flyoutCommandId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.Command";
            var menuId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.Menu";
            var menuSectionId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.MenuSection";
            var controlsId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.Controls";
            var displayRuleId = surface == "form" ? $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.DisplayRule" : null;
            var selectionEnableRuleId = surface == "sub_grid" ? $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.SelectionEnableRule" : null;

            var location = SurfaceLocationMap[surface].Replace("{entity}", entityName);

            // ── Idempotent cleanup ──
            RemoveCustomActionByInnerElementId(ribbonDoc.Root, flyoutAnchorId);
            RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", flyoutCommandId);
            var ruleDefsClean = ribbonDoc.Root.Element("RuleDefinitions");
            if (ruleDefsClean != null && displayRuleId != null)
                RemoveByIdInChild(ruleDefsClean, "DisplayRules", "DisplayRule", displayRuleId);
            if (ruleDefsClean != null && selectionEnableRuleId != null)
                RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", selectionEnableRuleId);

            foreach (var item in items)
            {
                var itemSlug = GenerateSlug(GetJsonString(item, "label"));
                var itemCommandId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";

                RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", itemCommandId);
                if (ruleDefsClean != null)
                    RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", itemEnRuleId);
            }

            // ── CrmParameters per surface ──
            XElement[] MakeCrmParams() => surface == "form"
                ? [
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryItemIds"))
                  ]
                : [
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "FirstSelectedItemId")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControlSelectedItemIds"))
                  ];

            // ── Build CustomAction + FlyoutAnchor + Menu ──
            var customActionsEl = GetOrCreateElement(ribbonDoc.Root, "CustomActions");

            var controlsEl = new XElement("Controls", new XAttribute("Id", controlsId));
            var autoSeq = 10;

            foreach (var item in items)
            {
                var itemLabel = GetJsonString(item, "label");
                var itemSlug = GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemSeq = GetJsonInt(item, "sequence", autoSeq);
                var itemImage = GetJsonString(item, "modern_image");
                var itemTT = GetJsonString(item, "tooltip_title") ?? itemLabel;

                var btnEl = new XElement("Button",
                    new XAttribute("Id", itemBtnId),
                    new XAttribute("Command", itemCmdId),
                    new XAttribute("LabelText", $"$LocLabels:{itemBtnId}.LabelText"),
                    new XAttribute("Alt", $"$LocLabels:{itemBtnId}.Alt"),
                    new XAttribute("ToolTipTitle", $"$LocLabels:{itemBtnId}.ToolTipTitle"),
                    new XAttribute("Sequence", itemSeq));

                if (!string.IsNullOrWhiteSpace(itemImage))
                    btnEl.Add(new XAttribute("ModernImage", $"$webresource:{itemImage}"));

                controlsEl.Add(btnEl);
                autoSeq += 10;
            }

            var menuSectionEl = new XElement("MenuSection",
                new XAttribute("Id", menuSectionId),
                new XAttribute("Sequence", "10"),
                new XAttribute("DisplayMode", "Menu16"),
                controlsEl);

            var menuEl = new XElement("Menu",
                new XAttribute("Id", menuId),
                menuSectionEl);

            var flyoutEl = new XElement("FlyoutAnchor",
                new XAttribute("Id", flyoutAnchorId),
                new XAttribute("Command", flyoutCommandId),
                new XAttribute("LabelText", $"$LocLabels:{flyoutAnchorId}.LabelText"),
                new XAttribute("Alt", $"$LocLabels:{flyoutAnchorId}.Alt"),
                new XAttribute("ToolTipTitle", $"$LocLabels:{flyoutAnchorId}.ToolTipTitle"),
                new XAttribute("TemplateAlias", "isv"),
                new XAttribute("Sequence", sequence),
                new XAttribute("PopulateOnlyOnce", "true"));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                flyoutEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{flyoutAnchorId}.ToolTipDescription"));

            if (!string.IsNullOrWhiteSpace(modernImage))
                flyoutEl.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));

            flyoutEl.Add(menuEl);

            customActionsEl.Add(new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", flyoutEl)));

            // ── Flyout anchor CommandDefinition ──
            var commandDefsEl = GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");

            var flyoutEnableRulesEl = new XElement("EnableRules");
            if (selectionEnableRuleId != null)
                flyoutEnableRulesEl.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

            var flyoutDisplayRulesEl = displayRuleId != null
                ? new XElement("DisplayRules", new XElement("DisplayRule", new XAttribute("Id", displayRuleId)))
                : new XElement("DisplayRules");

            commandDefsEl.Add(new XElement("CommandDefinition",
                new XAttribute("Id", flyoutCommandId),
                flyoutEnableRulesEl,
                flyoutDisplayRulesEl,
                new XElement("Actions")));

            // ── Per-item CommandDefinitions (click action + enable rule ref) ──
            foreach (var item in items)
            {
                var itemLabel = GetJsonString(item, "label");
                var itemSlug = GenerateSlug(itemLabel);
                var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemLib = GetJsonString(item, "library");
                var itemFunc = GetJsonString(item, "function");

                var jsFuncEl = new XElement("JavaScriptFunction",
                    new XAttribute("Library", $"$webresource:{itemLib}"),
                    new XAttribute("FunctionName", itemFunc));
                foreach (var p in MakeCrmParams()) jsFuncEl.Add(p);

                commandDefsEl.Add(new XElement("CommandDefinition",
                    new XAttribute("Id", itemCmdId),
                    new XElement("EnableRules",
                        new XElement("EnableRule", new XAttribute("Id", itemEnRuleId))),
                    new XElement("DisplayRules"),
                    new XElement("Actions", jsFuncEl)));
            }

            // ── RuleDefinitions ──
            var ruleDefsEl = GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");

            // Per-item EnableRules (custom JS)
            var enableRulesEl = GetOrCreateElement(ruleDefsEl, "EnableRules");
            foreach (var item in items)
            {
                var itemLabel = GetJsonString(item, "label");
                var itemSlug = GenerateSlug(itemLabel);
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemEnLib = GetJsonString(item, "enable_library");
                var itemEnFunc = GetJsonString(item, "enable_function");

                RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", itemEnRuleId);

                var customRuleEl = new XElement("CustomRule",
                    new XAttribute("FunctionName", itemEnFunc),
                    new XAttribute("Library", $"$webresource:{itemEnLib}"));
                foreach (var p in MakeCrmParams()) customRuleEl.Add(new XElement(p));

                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", itemEnRuleId),
                    customRuleEl));
            }

            // DisplayRule (form only)
            if (displayRuleId != null)
            {
                RemoveByIdInChild(ruleDefsEl, "DisplayRules", "DisplayRule", displayRuleId);
                var displayRulesEl = GetOrCreateElement(ruleDefsEl, "DisplayRules");
                displayRulesEl.Add(new XElement("DisplayRule",
                    new XAttribute("Id", displayRuleId),
                    new XElement("FormStateRule", new XAttribute("State", "Existing"))));
            }

            // sub_grid: SelectionCountRule on flyout anchor command
            if (selectionEnableRuleId != null)
            {
                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", selectionEnableRuleId),
                    new XElement("SelectionCountRule", new XAttribute("Minimum", "1"))));
            }

            // ── LocLabels ──
            UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.LabelText", label);
            UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.Alt", label);
            UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.ToolTipTitle", tooltipTitle);
            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.ToolTipDescription", tooltipDesc);

            foreach (var item in items)
            {
                var itemLabel = GetJsonString(item, "label");
                var itemSlug = GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemTT = GetJsonString(item, "tooltip_title") ?? itemLabel;

                UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.LabelText", itemLabel);
                UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.Alt", itemLabel);
                UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.ToolTipTitle", itemTT);
            }

            var itemLabels = string.Join(", ", items.Select(i => GetJsonString(i, "label")));
            return (null, $"add_flyout_static: '{label}' [{surface}] items=[{itemLabels}]");
        }

        // ── update_flyout_static ─────────────────────────────────────────

        private (string error, string summary) ExecuteUpdateFlyoutStatic(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            // ── Identify flyout: by flyout_id or by label ──
            var flyoutId = GetJsonString(op, "flyout_id");
            var labelHint = GetJsonString(op, "label");

            if (string.IsNullOrWhiteSpace(flyoutId))
            {
                if (string.IsNullOrWhiteSpace(labelHint))
                    return ("Error: update_flyout_static requires 'flyout_id' or 'label' to identify the flyout.", null);
                var slug = GenerateSlug(labelHint);
                flyoutId = $"devkit.{entityName}.{slug}.FlyoutAnchor";
            }

            // Find the FlyoutAnchor element
            var flyoutEl = ribbonDoc.Root
                ?.Element("CustomActions")
                ?.Descendants("FlyoutAnchor")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, flyoutId, StringComparison.OrdinalIgnoreCase));

            if (flyoutEl == null)
                return ($"Error: FlyoutAnchor '{flyoutId}' not found in existing RibbonDiffXml.\n" +
                        "Tip: Use add_flyout_static to create it first.", null);

            // Derive base slug from flyoutId: devkit.{entity}.{slug}.FlyoutAnchor → {slug}
            var idParts = flyoutId.Split('.');
            var flyoutSlug = idParts.Length >= 3 ? idParts[idParts.Length - 2] : "";

            var updatedFields = new List<string>();

            // ── Flyout-level updates ──

            // label → update LocLabels for LabelText + Alt
            if (!string.IsNullOrWhiteSpace(labelHint) && !string.IsNullOrWhiteSpace(GetJsonString(op, "flyout_id")))
            {
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.LabelText", labelHint);
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.Alt", labelHint);
                updatedFields.Add("label");
            }
            else if (!string.IsNullOrWhiteSpace(GetJsonString(op, "new_label")))
            {
                var newLabel = GetJsonString(op, "new_label");
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.LabelText", newLabel);
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.Alt", newLabel);
                updatedFields.Add("label");
            }

            // tooltip_title
            var newTT = GetJsonString(op, "tooltip_title");
            if (!string.IsNullOrWhiteSpace(newTT))
            {
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.ToolTipTitle", newTT);
                updatedFields.Add("tooltip_title");
            }

            // tooltip_description
            var newTD = GetJsonString(op, "tooltip_description");
            if (!string.IsNullOrWhiteSpace(newTD))
            {
                UpsertLocLabel(ribbonDoc.Root, $"{flyoutId}.ToolTipDescription", newTD);
                updatedFields.Add("tooltip_description");
            }

            // modern_image
            var newImage = GetJsonString(op, "modern_image");
            if (!string.IsNullOrWhiteSpace(newImage))
            {
                var imgErr = ValidateWebResourceExists(newImage);
                if (imgErr != null) return (imgErr, null);
                flyoutEl.SetAttributeValue("ModernImage", $"$webresource:{newImage}");
                updatedFields.Add("modern_image");
            }

            // sequence
            if (op.TryGetProperty("sequence", out _))
            {
                var newSeq = GetJsonInt(op, "sequence", 85);
                flyoutEl.SetAttributeValue("Sequence", newSeq);
                // Also update parent CustomAction sequence
                flyoutEl.Parent?.Parent?.SetAttributeValue("Sequence", newSeq);
                updatedFields.Add($"sequence={newSeq}");
            }

            // ── Item-level updates ──
            if (op.TryGetProperty("items", out var itemsProp) && itemsProp.ValueKind == JsonValueKind.Array)
            {
                var items = itemsProp.EnumerateArray().ToList();
                foreach (var item in items)
                {
                    var itemLabel = GetJsonString(item, "item_label");
                    if (string.IsNullOrWhiteSpace(itemLabel))
                        return ("Error: Each item in update_flyout_static requires 'item_label' to identify which button to update.", null);

                    var itemSlug = GenerateSlug(itemLabel);
                    var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
                    var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
                    var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";

                    // Find child button
                    var btnEl = flyoutEl.Descendants("Button")
                        .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemBtnId, StringComparison.OrdinalIgnoreCase));

                    if (btnEl == null)
                        return ($"Error: Item button '{itemBtnId}' not found in flyout.\n" +
                                $"Tip: Check item_label matches an existing item. Current items: {string.Join(", ", flyoutEl.Descendants("Button").Select(b => b.Attribute("LabelText")?.Value ?? b.Attribute("Id")?.Value))}", null);

                    var itemUpdated = new List<string>();

                    // label (rename) → update LocLabels
                    var newItemLabel = GetJsonString(item, "label");
                    if (!string.IsNullOrWhiteSpace(newItemLabel))
                    {
                        UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.LabelText", newItemLabel);
                        UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.Alt", newItemLabel);
                        itemUpdated.Add("label");
                    }

                    // tooltip_title → update LocLabel
                    var newItemTT = GetJsonString(item, "tooltip_title");
                    if (!string.IsNullOrWhiteSpace(newItemTT))
                    {
                        UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.ToolTipTitle", newItemTT);
                        itemUpdated.Add("tooltip_title");
                    }

                    // modern_image
                    var newItemImage = GetJsonString(item, "modern_image");
                    if (!string.IsNullOrWhiteSpace(newItemImage))
                    {
                        var imgErr = ValidateWebResourceExists(newItemImage);
                        if (imgErr != null) return (imgErr, null);
                        btnEl.SetAttributeValue("ModernImage", $"$webresource:{newItemImage}");
                        itemUpdated.Add("modern_image");
                    }

                    // sequence
                    if (item.TryGetProperty("sequence", out _))
                    {
                        var newItemSeq = GetJsonInt(item, "sequence", 10);
                        btnEl.SetAttributeValue("Sequence", newItemSeq);
                        itemUpdated.Add($"sequence={newItemSeq}");
                    }

                    // library (click function JS file)
                    var newItemLib = GetJsonString(item, "library");
                    if (!string.IsNullOrWhiteSpace(newItemLib))
                    {
                        var libErr = ValidateWebResourceExists(newItemLib);
                        if (libErr != null) return (libErr, null);

                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        var jsFnEl = cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction");
                        jsFnEl?.SetAttributeValue("Library", $"$webresource:{newItemLib}");
                        itemUpdated.Add("library");
                    }

                    // function (click function name)
                    var newItemFunc = GetJsonString(item, "function");
                    if (!string.IsNullOrWhiteSpace(newItemFunc))
                    {
                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        var jsFnEl = cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction");
                        jsFnEl?.SetAttributeValue("FunctionName", newItemFunc);
                        itemUpdated.Add("function");
                    }

                    // enable_library
                    var newItemEnLib = GetJsonString(item, "enable_library");
                    if (!string.IsNullOrWhiteSpace(newItemEnLib))
                    {
                        var libErr = ValidateWebResourceExists(newItemEnLib);
                        if (libErr != null) return (libErr, null);

                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")
                            ?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        var customRuleEl = enRuleEl?.Element("CustomRule");
                        customRuleEl?.SetAttributeValue("Library", $"$webresource:{newItemEnLib}");
                        itemUpdated.Add("enable_library");
                    }

                    // enable_function
                    var newItemEnFunc = GetJsonString(item, "enable_function");
                    if (!string.IsNullOrWhiteSpace(newItemEnFunc))
                    {
                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")
                            ?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        var customRuleEl = enRuleEl?.Element("CustomRule");
                        customRuleEl?.SetAttributeValue("FunctionName", newItemEnFunc);
                        itemUpdated.Add("enable_function");
                    }

                    if (itemUpdated.Count > 0)
                        updatedFields.Add($"item[{itemLabel}]: {string.Join(", ", itemUpdated)}");
                }
            }

            if (updatedFields.Count == 0)
                return ("Error: No fields to update. Provide at least one field to change.", null);

            return (null, $"update_flyout_static: '{flyoutId}' updated [{string.Join(", ", updatedFields)}]");
        }

        // ── hide_flyout_item ────────────────────────────────────────────

        private (string error, string summary) ExecuteHideFlyoutItem(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var (flyoutId, itemBtnId, itemCmdId, err) = ResolveFlyoutItemIds(ribbonDoc, entityName, op);
            if (err != null) return (err, null);

            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));

            if (commandDefEl == null)
                return ($"Error: CommandDefinition '{itemCmdId}' not found for item '{itemBtnId}'.", null);

            var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

            var enableRulesInCmd = GetOrCreateElement(commandDefEl, "EnableRules");
            if (!enableRulesInCmd.Elements("EnableRule").Any(e =>
                string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
            {
                enableRulesInCmd.Add(new XElement("EnableRule", new XAttribute("Id", alwaysDisabledRuleId)));
            }

            var ruleDefsEl = GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
            var enableRulesDefEl = GetOrCreateElement(ruleDefsEl, "EnableRules");
            if (!enableRulesDefEl.Elements("EnableRule").Any(e =>
                string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
            {
                enableRulesDefEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", alwaysDisabledRuleId),
                    new XElement("SelectionCountRule",
                        new XAttribute("Minimum", "9999"),
                        new XAttribute("Maximum", "9999"))));
            }

            return (null, $"hide_flyout_item: '{itemBtnId}' → AlwaysDisabled EnableRule injected into '{itemCmdId}'");
        }

        // ── show_flyout_item ────────────────────────────────────────────

        private (string error, string summary) ExecuteShowFlyoutItem(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var (flyoutId, itemBtnId, itemCmdId, err) = ResolveFlyoutItemIds(ribbonDoc, entityName, op);
            if (err != null) return (err, null);

            var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));

            commandDefEl?.Element("EnableRules")
                ?.Elements("EnableRule")
                .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                .ToList()
                .ForEach(e => e.Remove());

            var stillReferenced = ribbonDoc.Root
                ?.Descendants("CommandDefinition")
                .Any(cd => cd.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .Any(er => string.Equals(er.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)) == true) == true;

            if (!stillReferenced)
            {
                ribbonDoc.Root
                    ?.Element("RuleDefinitions")
                    ?.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                    .ToList()
                    .ForEach(e => e.Remove());
            }

            return (null, $"show_flyout_item: '{itemBtnId}' → AlwaysDisabled EnableRule removed from '{itemCmdId}'");
        }

        // ── Resolve flyout item IDs (shared by hide/show) ───────────────

        private (string flyoutId, string itemBtnId, string itemCmdId, string error) ResolveFlyoutItemIds(
            XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var flyoutIdParam = GetJsonString(op, "flyout_id");
            var flyoutLabel = GetJsonString(op, "flyout_label");
            var itemLabel = GetJsonString(op, "item_label");

            if (string.IsNullOrWhiteSpace(itemLabel))
                return (null, null, null, "Error: 'item_label' is required to identify the flyout item.");

            string flyoutId;
            if (!string.IsNullOrWhiteSpace(flyoutIdParam))
                flyoutId = flyoutIdParam.Trim();
            else if (!string.IsNullOrWhiteSpace(flyoutLabel))
            {
                var slug = GenerateSlug(flyoutLabel);
                flyoutId = $"devkit.{entityName}.{slug}.FlyoutAnchor";
            }
            else
                return (null, null, null, "Error: 'flyout_id' or 'flyout_label' is required to identify the flyout.");

            var flyoutEl = ribbonDoc.Root
                ?.Element("CustomActions")
                ?.Descendants("FlyoutAnchor")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, flyoutId, StringComparison.OrdinalIgnoreCase));

            if (flyoutEl == null)
                return (null, null, null, $"Error: FlyoutAnchor '{flyoutId}' not found.");

            var idParts = flyoutId.Split('.');
            var flyoutSlug = idParts.Length >= 3 ? idParts[idParts.Length - 2] : "";
            var itemSlug = GenerateSlug(itemLabel);
            var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
            var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";

            var btnEl = flyoutEl.Descendants("Button")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemBtnId, StringComparison.OrdinalIgnoreCase));

            if (btnEl == null)
            {
                var existing = string.Join(", ", flyoutEl.Descendants("Button").Select(b => b.Attribute("Id")?.Value ?? "?"));
                return (null, null, null, $"Error: Item button '{itemBtnId}' not found in flyout.\nExisting items: {existing}");
            }

            return (flyoutId, itemBtnId, itemCmdId, null);
        }

        // ── update_button ────────────────────────────────────────────────

        private (string error, string summary) ExecuteUpdateButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            // Identify button: by button_id or by label (derives button_id via slug)
            var buttonId = GetJsonString(op, "button_id");
            var labelHint = GetJsonString(op, "label");

            if (string.IsNullOrWhiteSpace(buttonId))
            {
                if (string.IsNullOrWhiteSpace(labelHint))
                    return ("Error: update_button requires 'button_id' or 'label' to identify the button.", null);
                var slug = GenerateSlug(labelHint);
                buttonId = $"devkit.{entityName}.{slug}.Button";
            }

            // Find the Button element in CustomActions
            var buttonEl = ribbonDoc.Root
                ?.Element("CustomActions")
                ?.Descendants("Button")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

            if (buttonEl == null)
                return ($"Error: Button '{buttonId}' not found in existing RibbonDiffXml.\n" +
                        "Tip: Use add_button to create it first.", null);

            // Derive sibling IDs from buttonId
            // buttonId pattern: devkit.{entity}.{slug}.Button
            var commandId = buttonId.Replace(".Button", ".Command");
            var enableRuleId = buttonId.Replace(".Button", ".EnableRule");

            // Find CommandDefinition
            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

            // Find EnableRule
            var ruleDefsEl = ribbonDoc.Root?.Element("RuleDefinitions");
            var enableRuleEl = ruleDefsEl
                ?.Element("EnableRules")
                ?.Elements("EnableRule")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, enableRuleId, StringComparison.OrdinalIgnoreCase));

            var updatedFields = new List<string>();

            // ── label ──
            var newLabel = GetJsonString(op, "label");
            if (!string.IsNullOrWhiteSpace(newLabel))
            {
                // LabelText uses $LocLabels reference — update LocLabel
                UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.LabelText", newLabel);
                updatedFields.Add("label");
            }

            // ── tooltip_title ──
            var newTooltipTitle = GetJsonString(op, "tooltip_title");
            if (!string.IsNullOrWhiteSpace(newTooltipTitle))
            {
                UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.ToolTipTitle", newTooltipTitle);
                updatedFields.Add("tooltip_title");
            }

            // ── tooltip_description ──
            var newTooltipDesc = GetJsonString(op, "tooltip_description");
            if (!string.IsNullOrWhiteSpace(newTooltipDesc))
            {
                UpsertLocLabel(ribbonDoc.Root, $"{buttonId}.ToolTipDescription", newTooltipDesc);
                // Also set attribute on button if not yet present
                if (buttonEl.Attribute("ToolTipDescription") == null)
                    buttonEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{buttonId}.ToolTipDescription"));
                updatedFields.Add("tooltip_description");
            }

            // ── sequence ──
            if (op.TryGetProperty("sequence", out _))
            {
                var newSeq = GetJsonInt(op, "sequence", 85);
                buttonEl.SetAttributeValue("Sequence", newSeq);
                // Also update parent CustomAction sequence
                buttonEl.Parent?.Parent?.SetAttributeValue("Sequence", newSeq);
                updatedFields.Add($"sequence={newSeq}");
            }

            // ── modern_image ──
            var newModernImage = GetJsonString(op, "modern_image");
            if (!string.IsNullOrWhiteSpace(newModernImage))
            {
                var imgError = ValidateWebResourceExists(newModernImage);
                if (imgError != null) return (imgError, null);
                buttonEl.SetAttributeValue("ModernImage", $"$webresource:{newModernImage}");
                updatedFields.Add("modern_image");
            }

            // ── library (button click) ──
            var newLibrary = GetJsonString(op, "library");
            if (!string.IsNullOrWhiteSpace(newLibrary))
            {
                var libError = ValidateWebResourceExists(newLibrary);
                if (libError != null) return (libError, null);

                if (commandDefEl != null)
                {
                    var jsFnEl = commandDefEl
                        .Element("Actions")
                        ?.Element("JavaScriptFunction");
                    jsFnEl?.SetAttributeValue("Library", $"$webresource:{newLibrary}");
                }
                updatedFields.Add("library");
            }

            // ── function (button click) ──
            var newFunction = GetJsonString(op, "function");
            if (!string.IsNullOrWhiteSpace(newFunction))
            {
                if (commandDefEl != null)
                {
                    var jsFnEl = commandDefEl
                        .Element("Actions")
                        ?.Element("JavaScriptFunction");
                    jsFnEl?.SetAttributeValue("FunctionName", newFunction);
                }
                updatedFields.Add("function");
            }

            // ── enable_library ──
            var newEnableLibrary = GetJsonString(op, "enable_library");
            if (!string.IsNullOrWhiteSpace(newEnableLibrary))
            {
                var libError = ValidateWebResourceExists(newEnableLibrary);
                if (libError != null) return (libError, null);

                var customRuleEl = enableRuleEl?.Element("CustomRule");
                customRuleEl?.SetAttributeValue("Library", $"$webresource:{newEnableLibrary}");
                updatedFields.Add("enable_library");
            }

            // ── enable_function ──
            var newEnableFunction = GetJsonString(op, "enable_function");
            if (!string.IsNullOrWhiteSpace(newEnableFunction))
            {
                var customRuleEl = enableRuleEl?.Element("CustomRule");
                customRuleEl?.SetAttributeValue("FunctionName", newEnableFunction);
                updatedFields.Add("enable_function");
            }

            if (updatedFields.Count == 0)
                return ("Error: update_button requires at least one updatable field: " +
                        "label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence.", null);

            return (null, $"update_button: '{buttonId}' updated [{string.Join(", ", updatedFields)}]");
        }

        // ── hide_button ──────────────────────────────────────────────────

        private (string error, string summary) ExecuteHideButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var buttonId = GetJsonString(op, "button_id");
            if (string.IsNullOrWhiteSpace(buttonId))
                return ("Error: hide_button requires 'button_id' (e.g. 'Mscrm.Form.v4_mcp.Deactivate').\n" +
                        "Tip: Use manage_ribbon(action='buttons') to see Button Id column.", null);

            buttonId = buttonId.Trim();

            // Determine if OOB or custom by checking SolutionUniqueName from merged ribbon
            var isOob = IsOobButton(entityName, buttonId);

            if (isOob)
            {
                // OOB: HideCustomAction approach
                var safeId = buttonId.Replace(".", "_").Replace(" ", "_");
                var hideActionId = $"devkit.{safeId}.Hide";

                ribbonDoc.Root
                    ?.Descendants("HideCustomAction")
                    .Where(e => string.Equals(e.Attribute("Location")?.Value, buttonId, StringComparison.OrdinalIgnoreCase))
                    .ToList()
                    .ForEach(e => e.Remove());

                var customActionsEl = GetOrCreateElement(ribbonDoc.Root, "CustomActions");
                customActionsEl.Add(new XElement("HideCustomAction",
                    new XAttribute("HideActionId", hideActionId),
                    new XAttribute("Location", buttonId)));

                return (null, $"hide_button (OOB): '{buttonId}' → HideCustomAction added");
            }
            else
            {
                // Custom button: inject always-hidden DisplayRule (empty OrRule = always false)
                // Find Command from Button element in CustomActions
                var buttonEl = ribbonDoc.Root
                    ?.Descendants("Button")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null)
                    return ($"Error: Button '{buttonId}' not found in RibbonDiffXml.\n" +
                            "Tip: Use manage_ribbon(action='buttons') to verify the Button Id.", null);

                var commandId = buttonEl.Attribute("Command")?.Value;
                if (string.IsNullOrWhiteSpace(commandId))
                    return ($"Error: Button '{buttonId}' has no Command attribute.", null);

                var commandDefEl = ribbonDoc.Root
                    ?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

                if (commandDefEl == null)
                    return ($"Error: CommandDefinition '{commandId}' not found for button '{buttonId}'.", null);

                // Always-disabled EnableRule: SelectionCountRule(Min=9999, Max=9999) = never true
                var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

                // Add reference in CommandDefinition/EnableRules (idempotent)
                var enableRulesInCmd = GetOrCreateElement(commandDefEl, "EnableRules");
                if (!enableRulesInCmd.Elements("EnableRule").Any(e =>
                    string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
                {
                    enableRulesInCmd.Add(new XElement("EnableRule", new XAttribute("Id", alwaysDisabledRuleId)));
                }

                // Add EnableRule definition in RuleDefinitions (idempotent)
                var ruleDefsEl = GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
                var enableRulesDefEl = GetOrCreateElement(ruleDefsEl, "EnableRules");
                if (!enableRulesDefEl.Elements("EnableRule").Any(e =>
                    string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
                {
                    enableRulesDefEl.Add(new XElement("EnableRule",
                        new XAttribute("Id", alwaysDisabledRuleId),
                        new XElement("SelectionCountRule",
                            new XAttribute("Minimum", "9999"),
                            new XAttribute("Maximum", "9999"))));
                }

                return (null, $"hide_button (custom): '{buttonId}' → AlwaysDisabled EnableRule injected into '{commandId}'");
            }
        }

        // ── show_button ──────────────────────────────────────────────────

        private (string error, string summary) ExecuteShowButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var buttonId = GetJsonString(op, "button_id");
            if (string.IsNullOrWhiteSpace(buttonId))
                return ("Error: show_button requires 'button_id' (e.g. 'Mscrm.Form.v4_mcp.Deactivate').\n" +
                        "Tip: Use manage_ribbon(action='buttons') to see Button Id column.", null);

            buttonId = buttonId.Trim();

            var isOob = IsOobButton(entityName, buttonId);

            if (isOob)
            {
                // OOB: remove HideCustomAction
                var removed = ribbonDoc.Root
                    ?.Descendants("HideCustomAction")
                    .Where(e => string.Equals(e.Attribute("Location")?.Value, buttonId, StringComparison.OrdinalIgnoreCase))
                    .ToList();

                if (removed == null || removed.Count == 0)
                    return (null, $"show_button (OOB): '{buttonId}' — no HideCustomAction found (button already visible)");

                removed.ForEach(e => e.Remove());
                return (null, $"show_button (OOB): '{buttonId}' → HideCustomAction removed");
            }
            else
            {
                // Custom button: remove AlwaysDisabled EnableRule reference from CommandDefinition
                var buttonEl = ribbonDoc.Root
                    ?.Descendants("Button")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null)
                    return ($"Error: Button '{buttonId}' not found in RibbonDiffXml.", null);

                var commandId = buttonEl.Attribute("Command")?.Value;
                var commandDefEl = ribbonDoc.Root
                    ?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

                var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

                // Remove reference from CommandDefinition/EnableRules
                commandDefEl?.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                    .ToList()
                    .ForEach(e => e.Remove());

                // Remove rule definition only if no other CommandDefinition still references it
                var stillReferenced = ribbonDoc.Root
                    ?.Descendants("CommandDefinition")
                    .Any(cd => cd.Element("EnableRules")
                        ?.Elements("EnableRule")
                        .Any(er => string.Equals(er.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)) == true) == true;

                if (!stillReferenced)
                {
                    ribbonDoc.Root
                        ?.Element("RuleDefinitions")
                        ?.Element("EnableRules")
                        ?.Elements("EnableRule")
                        .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                        .ToList()
                        .ForEach(e => e.Remove());
                }

                return (null, $"show_button (custom): '{buttonId}' → AlwaysDisabled EnableRule removed from '{commandId}'");
            }
        }

        // ── Detect OOB vs custom via RetrieveEntityRibbon ────────────────

        private bool IsOobButton(string entityName, string buttonId)
        {
            try
            {
                var filter = DetectRibbonFilter(buttonId);
                var request = new RetrieveEntityRibbonRequest
                {
                    EntityName = entityName,
                    RibbonLocationFilter = filter
                };
                var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(request);

                using var ms = new MemoryStream(response.CompressedEntityXml);
                using var zip = new ZipArchive(ms, ZipArchiveMode.Read);
                var entry = zip.GetEntry("RibbonXml.xml");
                using var strm = entry.Open();
                var doc = XDocument.Load(strm);

                var buttonEl = doc.Descendants("Button")
                    .Concat(doc.Descendants("FlyoutAnchor"))
                    .Concat(doc.Descendants("SplitButton"))
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null) return true; // not found → assume OOB safe

                var solutionName = (string)buttonEl.Attribute("SolutionUniqueName") ?? "";
                return solutionName.Equals("System", StringComparison.OrdinalIgnoreCase);
            }
            catch
            {
                return true; // on error, default to OOB path (safer)
            }
        }

        private static RibbonLocationFilters DetectRibbonFilter(string buttonId)
        {
            if (buttonId.StartsWith("Mscrm.HomepageGrid.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.StartsWith("Mscrm.Form.", StringComparison.OrdinalIgnoreCase) == false &&
                buttonId.Contains(".HomepageGrid.", StringComparison.OrdinalIgnoreCase))
                return RibbonLocationFilters.HomepageGrid;

            if (buttonId.StartsWith("Mscrm.SubGrid.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.Contains(".SubGrid.", StringComparison.OrdinalIgnoreCase))
                return RibbonLocationFilters.SubGrid;

            // Default to Form (also handles devkit.entity.Slug.Button pattern)
            return RibbonLocationFilters.Form;
        }

        // ── Button element builder ───────────────────────────────────────

        private XElement BuildButtonElement(string buttonId, string commandId, string tooltipTitle, int sequence, string modernImage, string tooltipDesc)
        {
            var el = new XElement("Button",
                new XAttribute("Id", buttonId),
                new XAttribute("Command", commandId),
                new XAttribute("LabelText", $"$LocLabels:{buttonId}.LabelText"),
                new XAttribute("ToolTipTitle", $"$LocLabels:{buttonId}.ToolTipTitle"),
                new XAttribute("TemplateAlias", "isv"),
                new XAttribute("Sequence", sequence));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                el.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{buttonId}.ToolTipDescription"));

            if (!string.IsNullOrWhiteSpace(modernImage))
                el.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));

            return el;
        }

        // ── LocLabel helpers ─────────────────────────────────────────────

        private void UpsertLocLabel(XElement root, string locLabelId, string description)
        {
            var locLabelsEl = GetOrCreateElement(root, "LocLabels");

            var existing = locLabelsEl.Elements("LocLabel")
                .Where(e => string.Equals(e.Attribute("Id")?.Value, locLabelId, StringComparison.OrdinalIgnoreCase))
                .ToList();
            foreach (var e in existing) e.Remove();

            locLabelsEl.Add(new XElement("LocLabel",
                new XAttribute("Id", locLabelId),
                new XElement("Titles",
                    new XElement("Title",
                        new XAttribute("description", description),
                        new XAttribute("languagecode", McpHelper.GetBaseLanguageCode(_serviceClient))))));
        }

        // ── XML helpers ──────────────────────────────────────────────────

        private static XElement GetOrCreateElement(XElement parent, string name)
        {
            var el = parent.Element(name);
            if (el == null)
            {
                el = new XElement(name);
                parent.Add(el);
            }
            return el;
        }

        private static void RemoveById(XElement root, string parentName, string childName, string id)
        {
            var parent = root?.Element(parentName);
            if (parent == null) return;
            parent.Elements(childName)
                .Where(e => string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase))
                .ToList()
                .ForEach(e => e.Remove());
        }

        private static void RemoveCustomActionByInnerElementId(XElement root, string innerElementId)
        {
            var customActions = root?.Element("CustomActions");
            if (customActions == null) return;
            customActions.Elements("CustomAction")
                .Where(ca => ca.Descendants()
                    .Any(d => string.Equals(d.Attribute("Id")?.Value, innerElementId, StringComparison.OrdinalIgnoreCase)))
                .ToList()
                .ForEach(e => e.Remove());
        }

        private static void RemoveByIdInChild(XElement parent, string childContainerName, string childName, string id)
        {
            var container = parent?.Element(childContainerName);
            if (container == null) return;
            container.Elements(childName)
                .Where(e => string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase))
                .ToList()
                .ForEach(e => e.Remove());
        }

        private static string GenerateSlug(string label)
        {
            if (string.IsNullOrWhiteSpace(label)) return "Button";
            var words = Regex.Split(label.Trim(), @"[\s_\-]+");
            var sb = new StringBuilder();
            foreach (var word in words)
            {
                if (string.IsNullOrWhiteSpace(word)) continue;
                sb.Append(char.ToUpperInvariant(word[0]));
                if (word.Length > 1) sb.Append(word.Substring(1));
            }
            return sb.Length > 0 ? sb.ToString() : "Button";
        }

        // ── JSON helpers ─────────────────────────────────────────────────

        private static string GetJsonString(JsonElement el, string propertyName)
        {
            if (el.TryGetProperty(propertyName, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString();
            return null;
        }

        private static bool GetJsonBool(JsonElement el, string propertyName, bool defaultValue)
        {
            if (el.TryGetProperty(propertyName, out var prop))
            {
                if (prop.ValueKind == JsonValueKind.True) return true;
                if (prop.ValueKind == JsonValueKind.False) return false;
            }
            return defaultValue;
        }

        private static int GetJsonInt(JsonElement el, string propertyName, int defaultValue)
        {
            if (el.TryGetProperty(propertyName, out var prop) && prop.TryGetInt32(out var value))
                return value;
            return defaultValue;
        }

        private static string EscapeXml(string value) =>
            value?.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                .Replace("\"", "&quot;").Replace("'", "&apos;");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
