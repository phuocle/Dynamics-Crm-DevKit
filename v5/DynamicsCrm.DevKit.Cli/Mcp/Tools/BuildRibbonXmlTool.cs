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
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildRibbonXmlTool
    {
        private readonly ServiceClient _serviceClient;
        private const string SOLUTION_NAME = "devkit-ribbon";

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
            "OPERATIONS: add_button\n" +
            "[Future: remove_button, hide_button, add_flyout, add_group, remove_group, add_rule, remove_rule]\n\n" +
            "Auto-fetches existing RibbonDiffXml from solution 'devkit-ribbon' to preserve existing buttons.\n" +
            "Surface types: form (main form), main_grid (home page grid), sub_grid (associated/sub grid).\n" +
            "Validates webresource existence before referencing.\n\n" +
            "REQUIRED for add_button — all 5 must be provided:\n" +
            "1. entity_name (top-level param)\n" +
            "2. surface — form | main_grid | sub_grid\n" +
            "3. label — button display name shown in ribbon\n" +
            "4. library — web resource JS file name (must exist in Dataverse)\n" +
            "5. function — JavaScript function name to call\n" +
            "Missing any one of these will cause the operation to fail.")]
        public CallToolResult build_ribbon_xml(
            [Description("Entity logical name (e.g., 'account'). Used to resolve ribbon customization.")] string entity_name,
            [Description("JSON array of operations. Each requires 'action' field.\n" +
                "Actions: add_button\n" +
                "add_button REQUIRED fields (all 4 must be provided — missing any one will fail):\n" +
                "  - surface: ribbon surface type. Must be one of: 'form' (main form), 'main_grid' (home page grid), 'sub_grid' (associated/sub grid).\n" +
                "  - label: button display text shown in the ribbon.\n" +
                "  - library: web resource name (JS file). Must exist in Dataverse. E.g. 'new_/scripts/account.js'.\n" +
                "  - function: JavaScript function name to call. E.g. 'Account.runReport'.\n" +
                "add_button OPTIONAL fields: icon16, icon32, tooltip_title, tooltip_description, pass_primary_control, sequence.\n" +
                "IMPORTANT: Always ask the user for all 4 required fields before calling this tool.\n" +
                "Example: [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"Run Report\",\"library\":\"new_/scripts/account.js\",\"function\":\"Account.runReport\"}]")] string operations)
        {
            // Step 1: Validate inputs
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required. Provide entity logical name (e.g. 'account').");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult(
                    "Error: operations is required.\n" +
                    "Provide a non-empty JSON array, e.g. [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",\"library\":\"...\",\"function\":\"...\"}].");

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
                        var result = ExecuteAddButton(ribbonDoc, entity_name, op);
                        if (result.error != null)
                            return ErrorResult(result.error);
                        summaries.Add(result.summary);
                        break;

                    default:
                        return ErrorResult(
                            $"Error: Unknown action '{action}'.\n" +
                            "Valid actions: add_button\n" +
                            "Future: remove_button, hide_button, add_flyout, add_group, remove_group, add_rule, remove_rule");
                }
            }

            // Step 7: Save to temp file
            var workingDir = Directory.GetCurrentDirectory();
            var outputDir = Path.Combine(workingDir, ".devkit", "modified_ribbons");
            Directory.CreateDirectory(outputDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var outputFile = Path.Combine(outputDir, $"{entity_name}_{timestamp}.ribbondiffxml");
            var xmlString = ribbonDoc.ToString(SaveOptions.None);
            File.WriteAllText(outputFile, xmlString, Encoding.UTF8);

            // Step 8: Return result
            var newButtonCount = CountExistingButtons(ribbonDoc);
            var sb = new StringBuilder();
            sb.AppendLine($"[BuildRibbonXml] {entity_name}");
            sb.AppendLine($"Operations: {ops.Count}");
            foreach (var s in summaries)
                sb.AppendLine($"  ✓ {s}");
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
            ["form"] = "Mscrm.Form.{entity}.MainTab.Actions.Controls._children",
            ["main_grid"] = "Mscrm.HomepageGrid.{entity}.MainTab.Management.Controls._children",
            ["sub_grid"] = "Mscrm.SubGrid.{entity}.MainTab.Management.Controls._children",
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

            // Strip $webresource: prefix if present
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

                    // Find entity in customizations.xml
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

            if (string.IsNullOrWhiteSpace(surface))
                return ("Error: add_button requires 'surface' (form, main_grid, or sub_grid).", null);
            if (string.IsNullOrWhiteSpace(label))
                return ("Error: add_button requires 'label' (button display text).", null);
            if (string.IsNullOrWhiteSpace(library))
                return ("Error: add_button requires 'library' (web resource name for JavaScript).", null);
            if (string.IsNullOrWhiteSpace(function))
                return ("Error: add_button requires 'function' (JavaScript function name).", null);

            surface = surface.Trim().ToLowerInvariant();
            if (!SurfaceLocationMap.ContainsKey(surface))
                return ($"Error: Invalid surface '{surface}'. Valid: form, main_grid, sub_grid.", null);

            // Validate web resources exist
            var libError = ValidateWebResourceExists(library);
            if (libError != null) return (libError, null);

            // Optional fields
            var icon16 = GetJsonString(op, "icon16");
            var icon32 = GetJsonString(op, "icon32");
            var tooltipTitle = GetJsonString(op, "tooltip_title") ?? label;
            var tooltipDesc = GetJsonString(op, "tooltip_description");
            var passPrimaryControl = GetJsonBool(op, "pass_primary_control", false);
            var sequence = GetJsonInt(op, "sequence", 50);

            if (!string.IsNullOrWhiteSpace(icon16))
            {
                var iconError = ValidateWebResourceExists(icon16);
                if (iconError != null) return (iconError, null);
            }
            if (!string.IsNullOrWhiteSpace(icon32))
            {
                var iconError = ValidateWebResourceExists(icon32);
                if (iconError != null) return (iconError, null);
            }

            // Generate IDs
            var slug = GenerateSlug(label);
            var customActionId = $"devkit.{entityName}.{slug}.CustomAction";
            var buttonId = $"devkit.{entityName}.{slug}.Button";
            var commandId = $"devkit.{entityName}.{slug}.Command";

            // Resolve location
            var location = SurfaceLocationMap[surface].Replace("{entity}", entityName);

            // Remove existing nodes with same IDs (idempotent)
            RemoveExistingById(ribbonDoc, "CustomActions", "CustomAction", "Id", customActionId);
            RemoveExistingById(ribbonDoc, "CommandDefinitions", "CommandDefinition", "Id", commandId);

            // Create CustomAction + Button
            var customActionsEl = GetOrCreateElement(ribbonDoc.Root, "CustomActions");
            var buttonEl = new XElement("Button",
                new XAttribute("Id", buttonId),
                new XAttribute("Command", commandId),
                new XAttribute("LabelText", label),
                new XAttribute("ToolTipTitle", tooltipTitle),
                new XAttribute("TemplateAlias", "o1"));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                buttonEl.Add(new XAttribute("ToolTipDescription", tooltipDesc));
            if (!string.IsNullOrWhiteSpace(icon16))
                buttonEl.Add(new XAttribute("Image16by16", $"$webresource:{icon16}"));
            if (!string.IsNullOrWhiteSpace(icon32))
                buttonEl.Add(new XAttribute("Image32by32", $"$webresource:{icon32}"));

            var customActionEl = new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", buttonEl));

            customActionsEl.Add(customActionEl);

            // Create CommandDefinition
            var commandDefsEl = GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");
            var jsFunctionEl = new XElement("JavaScriptFunction",
                new XAttribute("Library", $"$webresource:{library}"),
                new XAttribute("FunctionName", function));

            if (passPrimaryControl)
                jsFunctionEl.Add(new XElement("CrmParameter", new XAttribute("Value", "PrimaryControl")));

            var commandDefEl = new XElement("CommandDefinition",
                new XAttribute("Id", commandId),
                new XElement("EnableRules"),
                new XElement("DisplayRules"),
                new XElement("Actions", jsFunctionEl));

            commandDefsEl.Add(commandDefEl);

            return (null, $"add_button: '{label}' on {surface} → {function} (library: {library})");
        }

        // ── XML helpers ──────────────────────────────────────────────────

        private static XElement GetOrCreateElement(XElement parent, string name)
        {
            var el = parent.Element(name);
            if (el == null)
            {
                el = new XElement(name);
                parent.AddFirst(el);
            }
            return el;
        }

        private static void RemoveExistingById(XDocument doc, string parentName, string childName, string attrName, string attrValue)
        {
            var parent = doc.Root?.Element(parentName);
            if (parent == null) return;

            var existing = parent.Elements(childName)
                .Where(e => string.Equals(e.Attribute(attrName)?.Value, attrValue, StringComparison.OrdinalIgnoreCase))
                .ToList();
            foreach (var e in existing)
                e.Remove();
        }

        private static string GenerateSlug(string label)
        {
            if (string.IsNullOrWhiteSpace(label)) return "Button";
            // Remove non-alphanumeric, PascalCase
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
