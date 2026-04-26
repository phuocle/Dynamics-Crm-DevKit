using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
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
            "Build modified FormXML for an existing Dataverse form. READ-ONLY — saves to temp file; use manage_form(action='update') to apply.\n\n" +

            "5 ACTION GROUPS (use action + manage_action): manage_tab, manage_section, manage_fields, manage_library, manage_event\n\n" +
            "Valid combinations:\n" +
            "- manage_tab: add | update | move | remove\n" +
            "- manage_section: add | update | move | remove\n" +
            "- manage_fields: add | update | remove | add_header | update_header | remove_header\n" +
            "- manage_library: add | remove\n" +
            "- manage_event: add | remove\n\n" +
            "Each operation object requires both 'action' and 'manage_action'.\n\n" +

            "Auto-resolves classid GUIDs, validates field names against metadata.\n" +
            "Section columns: 1 (default), 2, 3. Tab columns: 1 (100%), 2 (50%/50%), 3 (33%/34%/33%).\n\n" +

            "TIPS:\n" +
            "- Fields: \"createdon\" or {\"field\":\"createdon\",\"label\":\"Date\",\"disabled\":true}\n" +
            "- Position: \"first\", \"last\" (default), \"before:<name>\", \"after:<name>\"\n" +
            "- Tabs/Sections: visible, show_label, hide_on_phone. Fields also: disabled\n" +
            "- Use manage_action='update' to modify existing tabs/sections/fields")]
        public CallToolResult build_form_xml(
            [Description("Entity logical name (e.g., 'account'). Used to resolve field metadata.")] string entity_name,
            [Description("GUID of the form to modify. Use manage_form with action='list' to find valid form IDs.")] string form_id,
            [Description(
                "JSON array of operations. Each requires 'action' + 'manage_action'.\n" +
                "Actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\n" +
                "manage_action values depend on action (see tool description).\n" +
                "Common fields: tab, section, fields[], label, name, position, visible, show_label, hide_on_phone, disabled, tab_column, section_columns, library_name, event_name, function_name, target.\n" +
                "Read docs://instructions_for_formxml for full format and examples."
            )] string operations)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult(
                    "Error: entity_name is required.\n" +
                    "Expected: entity logical name string (e.g., 'account', 'contact').");
            if (string.IsNullOrWhiteSpace(form_id))
                return ErrorResult(
                    "Error: form_id is required.\n" +
                    $"Use manage_form(action='list', entity_name='{entity_name.Trim().ToLowerInvariant()}') to find valid form IDs.");
            if (!Guid.TryParse(form_id.Trim(), out var formId))
                return ErrorResult($"Error: '{form_id}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult(
                    "Error: operations is required.\n" +
                    "Expected: non-empty JSON array of operation objects.\n" +
                    "Read docs://instructions_for_formxml for format and examples.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                // 1. Parse operations JSON
                List<JsonElement> ops;
                try
                {
                    ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                    if (ops == null || ops.Count == 0)
                        return ErrorResult(
                            "Error: operations must be a non-empty JSON array.\n" +
                            "Read docs://instructions_for_formxml for format and examples.");
                }
                catch (JsonException ex)
                {
                    return ErrorResult(
                        $"Error: Invalid operations JSON: {ex.Message}\n" +
                        $"Read docs://instructions_for_formxml for format and examples.");
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
                        $"Error: Form '{formId}' not found for entity '{entityName}'.\n" +
                        $"Message: {ex.Message}\n" +
                        $"Use manage_form(action='list', entity_name='{entityName}') to find valid form IDs.");
                }

                var currentFormXml = formEntity.GetAttributeValue<string>("formxml") ?? "";
                var formName = formEntity.GetAttributeValue<string>("name") ?? "";

                if (string.IsNullOrWhiteSpace(currentFormXml))
                    return ErrorResult($"Error: Form '{formId}' has empty FormXML.");

                // 3. Init helpers + load metadata + validate fields
                var fieldMeta = new FormFieldMetadata(_serviceClient);
                var builder = new FormXmlBuilder(_serviceClient);
                var tabSec = new FormTabSectionOperations(_serviceClient, builder);
                var fieldEvt = new FormFieldEventOperations(_serviceClient, builder);

                var referencedFields = FormFieldMetadata.CollectFieldNames(ops);

                Dictionary<string, AttributeMetadata> attrMap;
                try
                {
                    attrMap = fieldMeta.LoadEntityAttributeMap(entityName);
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to retrieve metadata for entity '{entityName}': {ex.Message}");
                }

                try
                {
                    FormFieldMetadata.ValidateFieldsExist(entityName, referencedFields, attrMap);
                }
                catch (FormXmlOperationsException fex)
                {
                    return ErrorResult(fex.Message);
                }

                // 4. Parse current FormXML into XDocument
                XDocument formDoc;
                try
                {
                    formDoc = XDocument.Parse(currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to parse current FormXML: {ex.Message}");
                }

                // 5. Execute operations in order
                var opSummaries = new List<string>();
                var classIdMap = new Dictionary<string, string>();

                foreach (var op in ops)
                {
                    if (!op.TryGetProperty("action", out var actionProp))
                        return ErrorResult(
                            "Error: Each operation must have an 'action' field.\n" +
                            "Valid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\n" +
                            "Read docs://instructions_for_formxml for operation format and examples.");

                    var action = actionProp.GetString()?.ToLowerInvariant();
                    var manageAction = FormXmlHelpers.GetStringProp(op, "manage_action")?.ToLowerInvariant() ?? "";

                    switch (action)
                    {
                        case "manage_tab":
                            opSummaries.Add(manageAction switch
                            {
                                "add" => tabSec.ExecuteAddTab(formDoc, op, attrMap, classIdMap),
                                "remove" => FormTabSectionOperations.ExecuteRemoveTab(formDoc, op),
                                "move" => FormTabSectionOperations.ExecuteMoveTab(formDoc, op),
                                "update" => tabSec.ExecuteUpdateTab(formDoc, op),
                                _ => throw new InvalidOperationException(
                                    $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update")
                            });
                            break;
                        case "manage_section":
                            opSummaries.Add(manageAction switch
                            {
                                "add" => tabSec.ExecuteAddSection(formDoc, op, attrMap, classIdMap),
                                "remove" => FormTabSectionOperations.ExecuteRemoveSection(formDoc, op),
                                "move" => FormTabSectionOperations.ExecuteMoveSection(formDoc, op),
                                "update" => tabSec.ExecuteUpdateSection(formDoc, op),
                                _ => throw new InvalidOperationException(
                                    $"Unknown manage_action '{manageAction}' for manage_section. Valid: add, remove, move, update")
                            });
                            break;
                        case "manage_fields":
                            opSummaries.Add(manageAction switch
                            {
                                "add" => fieldEvt.ExecuteAddFields(formDoc, op, attrMap, classIdMap),
                                "remove" => FormFieldEventOperations.ExecuteRemoveFields(formDoc, op),
                                "update" => fieldEvt.ExecuteUpdateFields(formDoc, op, attrMap, classIdMap),
                                "add_header" => fieldEvt.ExecuteAddHeaderFields(formDoc, op, attrMap, classIdMap),
                                "remove_header" => FormFieldEventOperations.ExecuteRemoveHeaderFields(formDoc, op),
                                "update_header" => fieldEvt.ExecuteUpdateHeaderFields(formDoc, op, attrMap, classIdMap),
                                _ => throw new InvalidOperationException(
                                    $"Unknown manage_action '{manageAction}' for manage_fields. Valid: add, remove, update, add_header, remove_header, update_header")
                            });
                            break;
                        case "manage_library":
                            opSummaries.Add(manageAction switch
                            {
                                "add" => FormFieldEventOperations.ExecuteAddLibrary(formDoc, op),
                                "remove" => FormFieldEventOperations.ExecuteRemoveLibrary(formDoc, op),
                                _ => throw new InvalidOperationException(
                                    $"Unknown manage_action '{manageAction}' for manage_library. Valid: add, remove")
                            });
                            break;
                        case "manage_event":
                            opSummaries.Add(manageAction switch
                            {
                                "add" => FormFieldEventOperations.ExecuteAddEvent(formDoc, op),
                                "remove" => FormFieldEventOperations.ExecuteRemoveEvent(formDoc, op),
                                _ => throw new InvalidOperationException(
                                    $"Unknown manage_action '{manageAction}' for manage_event. Valid: add, remove")
                            });
                            break;
                        default:
                            return ErrorResult(
                                $"Error: Unknown action '{action}'.\n" +
                                $"Valid: manage_tab | manage_section | manage_fields | manage_library | manage_event (each requires 'manage_action').\n" +
                                $"Read docs://instructions_for_formxml for operation format and examples.");
                    }
                }

                // 6. Serialize modified XDocument back to string
                var modifiedFormXml = formDoc.ToString(SaveOptions.None);

                // 7. Save modified FormXML to temp file (avoids AI truncation for large XML)
                var tempDir = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "modified_forms");
                Directory.CreateDirectory(tempDir);
                var tempFileName = $"{entityName}_{formId:N}.formxml";
                var tempFilePath = Path.Combine(tempDir, tempFileName);
                File.WriteAllText(tempFilePath, modifiedFormXml, Encoding.UTF8);

                // 8. Build response
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

                resultSb.AppendLine($"FormXML saved to: {tempFilePath}");
                resultSb.AppendLine();
                resultSb.AppendLine($"Next step: manage_form(action='update', entity_name='{entityName}', form_id='{formId}', formxml='{tempFilePath}')");

                var structured = new BuildFormXMLResult
                {
                    Entity = entityName,
                    FormId = formId.ToString(),
                    FormName = formName,
                    Status = "success",
                    OperationsCount = ops.Count,
                    FieldsResolved = classIdMap.Count,
                    FormXmlPath = tempFilePath
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
                    $"Error: build_form_xml failed for entity '{entityName}', form '{formId}'.\n" +
                    $"Message: {ex.Message}");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
