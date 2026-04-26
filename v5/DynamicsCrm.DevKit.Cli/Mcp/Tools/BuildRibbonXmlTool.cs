// BuildRibbonXmlTool.cs
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildRibbonXmlTool
    {
        private readonly ServiceClient _serviceClient;

        public BuildRibbonXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_ribbon_xml", Title = "Build RibbonDiffXml with custom buttons",
            Destructive = false, ReadOnly = true, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(BuildRibbonXmlResult)),
        Description(
            "Build modified RibbonDiffXml for a Dataverse entity. READ-ONLY — saves to temp file; use manage_ribbon(action='update') to apply.\n\n" +
            "10 OPERATIONS: add_button, update_button, hide_button, show_button, add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item\n\n" +
            "Auto-fetches existing RibbonDiffXml from solution 'devkit-ribbon' to preserve existing buttons.\n" +
            "Surface types: form, main_grid, sub_grid. Validates webresources before referencing.")]
        public CallToolResult build_ribbon_xml(
            [Description("Entity logical name (e.g., 'account').")] string entity_name,
            [Description(
                "JSON array of operations. Each requires 'action' field.\n" +
                "add_button REQUIRED: surface, label, library, function, enable_library, enable_function. OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
                "update_button REQUIRED: button_id OR label. OPTIONAL: label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence. NOTE: only works on custom buttons (in RibbonDiffXml); OOB buttons cannot be updated — use hide_button/show_button instead\n" +
                "hide_button REQUIRED: button_id. Supports both OOB and custom buttons\n" +
                "show_button REQUIRED: button_id. Supports both OOB and custom buttons\n" +
                "add_split_button REQUIRED: surface, label, library, function, enable_library, enable_function (main button action), items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85). Per item OPTIONAL: modern_image, tooltip_title, sequence (auto: 10,20,30...). NOTE: click main button runs function directly; dropdown arrow opens item list\n" +
                "update_split_button REQUIRED: split_button_id OR label. OPTIONAL: label, tooltip_title, tooltip_description, modern_image, sequence, library, function, enable_library, enable_function. items[]: item_label (REQUIRED), then any of: label, tooltip_title, modern_image, sequence, library, function, enable_library, enable_function.\n" +
                "add_flyout_static REQUIRED: surface, label, items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85). Per item OPTIONAL: modern_image, tooltip_title, sequence (auto: 10,20,30...)\n" +
                "update_flyout_static REQUIRED: flyout_id OR label. OPTIONAL: label, tooltip_title, tooltip_description, modern_image, sequence. items[]: item_label (REQUIRED), then any of: label, tooltip_title, modern_image, sequence, library, function, enable_library, enable_function\n" +
                "hide_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n" +
                "show_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n" +
                "Example add: [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"Run\",\"library\":\"new_/s.js\",\"function\":\"F.run\",\"enable_library\":\"new_/s.js\",\"enable_function\":\"F.isEnabled\"}]\n" +
                "Example flyout: [{\"action\":\"add_flyout_static\",\"surface\":\"form\",\"label\":\"Export\",\"items\":[{\"label\":\"Excel\",\"library\":\"v4_/s.js\",\"function\":\"F.excel\",\"enable_library\":\"v4_/s.js\",\"enable_function\":\"F.enabled\"}]}]\n" +
                "Example split: [{\"action\":\"add_split_button\",\"surface\":\"form\",\"label\":\"Save\",\"library\":\"v4_/s.js\",\"function\":\"F.save\",\"enable_library\":\"v4_/s.js\",\"enable_function\":\"F.enabled\",\"items\":[{\"label\":\"Save & Send\",\"library\":\"v4_/s.js\",\"function\":\"F.saveAndSend\",\"enable_library\":\"v4_/s.js\",\"enable_function\":\"F.enabled\"}]}]")] string operations)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required. Provide entity logical name (e.g. 'account').");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult(
                    "Error: operations is required.\n" +
                    "Provide a non-empty JSON array, e.g. [{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",\"library\":\"...\",\"function\":\"...\",\"enable_library\":\"...\",\"enable_function\":\"...\"}].");

            entity_name = entity_name.Trim().ToLowerInvariant();

            var validation = new RibbonValidation(_serviceClient);
            var entityError = validation.ValidateEntityExists(entity_name);
            if (entityError != null)
                return ErrorResult(entityError);

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

            var fetcher = new RibbonSolutionFetcher(_serviceClient);
            var existingXml = fetcher.FetchExistingRibbonDiffXml(entity_name);

            XDocument ribbonDoc;
            try
            {
                ribbonDoc = XDocument.Parse(existingXml);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse existing RibbonDiffXml: {ex.Message}");
            }

            var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);
            var btnOps = new RibbonButtonOperations(validation, lcid);
            var flyoutOps = new RibbonFlyoutOperations(validation, lcid);

            var summaries = new List<string>();
            var existingButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);

            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    return ErrorResult("Error: Each operation must have an 'action' field.");

                var action = actionProp.GetString()?.Trim().ToLowerInvariant();
                (string error, string summary) result = action switch
                {
                    "add_button"          => btnOps.ExecuteAddButton(ribbonDoc, entity_name, op),
                    "update_button"       => btnOps.ExecuteUpdateButton(ribbonDoc, entity_name, op),
                    "hide_button"         => btnOps.ExecuteHideButton(ribbonDoc, entity_name, op),
                    "show_button"         => btnOps.ExecuteShowButton(ribbonDoc, entity_name, op),
                    "add_split_button"    => flyoutOps.ExecuteAddSplitButton(ribbonDoc, entity_name, op),
                    "update_split_button" => flyoutOps.ExecuteUpdateSplitButton(ribbonDoc, entity_name, op),
                    "add_flyout_static"   => flyoutOps.ExecuteAddFlyoutStatic(ribbonDoc, entity_name, op),
                    "update_flyout_static"=> flyoutOps.ExecuteUpdateFlyoutStatic(ribbonDoc, entity_name, op),
                    "hide_flyout_item"    => flyoutOps.ExecuteHideFlyoutItem(ribbonDoc, entity_name, op),
                    "show_flyout_item"    => flyoutOps.ExecuteShowFlyoutItem(ribbonDoc, entity_name, op),
                    _ => (
                        $"Error: Unknown action '{action}'.\n" +
                        "Valid actions: add_button, update_button, hide_button, show_button, add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item\n" +
                        "Future: add_flyout_dynamic",
                        null)
                };

                if (result.error != null) return ErrorResult(result.error);
                summaries.Add(result.summary);
            }

            RibbonXmlHelpers.SortChildrenById(ribbonDoc.Root?.Element("CommandDefinitions"), "CommandDefinition");
            var ruleDefsSortEl = ribbonDoc.Root?.Element("RuleDefinitions");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("DisplayRules"), "DisplayRule");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("EnableRules"), "EnableRule");

            var xmlString = ribbonDoc.ToString(SaveOptions.None);
            var (xsdErrors, xsdWarnings) = RibbonValidation.ValidateRibbonXml(xmlString);
            if (xsdErrors.Count > 0)
                return ErrorResult($"Error: Generated XML failed Ribbon XSD validation:\n{string.Join("\n", xsdErrors)}");

            var workingDir = Directory.GetCurrentDirectory();
            var outputDir = Path.Combine(workingDir, ".devkit", "modified_ribbons");
            Directory.CreateDirectory(outputDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var outputFile = Path.Combine(outputDir, $"{entity_name}_{timestamp}.ribbondiffxml");
            File.WriteAllText(outputFile, xmlString, Encoding.UTF8);

            var newButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
