using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormXmlOperationsRunner
    {
        private readonly ServiceClient _serviceClient;

        public FormXmlOperationsRunner(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        /// <summary>
        /// Applies a list of JSON operations to the given FormXML string.
        /// Returns modified FormXML + per-operation summaries + classId map.
        /// Throws <see cref="FormXmlOperationsException"/> for field validation errors.
        /// Throws <see cref="InvalidOperationException"/> for unknown actions.
        /// </summary>
        public (string ModifiedFormXml, List<string> OperationSummaries, Dictionary<string, string> ClassIdMap)
            Run(string currentFormXml, string entityName, List<JsonElement> ops)
        {
            // 1. Collect field names referenced by ops + load metadata + validate
            var referencedFields = FormFieldMetadata.CollectFieldNames(ops);

            var fieldMeta = new FormFieldMetadata(_serviceClient);
            Dictionary<string, AttributeMetadata> attrMap;
            try
            {
                attrMap = fieldMeta.LoadEntityAttributeMap(entityName);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(
                    $"Failed to retrieve metadata for entity '{entityName}': {ex.Message}", ex);
            }

            FormFieldMetadata.ValidateFieldsExist(entityName, referencedFields, attrMap);

            // 2. Parse FormXML
            XDocument formDoc;
            try
            {
                formDoc = XDocument.Parse(currentFormXml);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to parse current FormXML: {ex.Message}", ex);
            }

            // 3. Init operation helpers
            var builder  = new FormXmlBuilder(_serviceClient);
            var tabSec   = new FormTabSectionOperations(_serviceClient, builder);
            var fieldEvt = new FormFieldEventOperations(_serviceClient, builder);
            var classIdMap  = new Dictionary<string, string>();
            var opSummaries = new List<string>();

            // 4. Dispatch loop
            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    throw new InvalidOperationException(
                        "Each operation must have an 'action' field.\n" +
                        "Valid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\n" +
                        "Read docs://instructions_for_formxml for operation format and examples.");

                var action       = actionProp.GetString()?.ToLowerInvariant();
                var manageAction = FormXmlHelpers.GetStringProp(op, "manage_action")?.ToLowerInvariant() ?? "";

                switch (action)
                {
                    case "manage_tab":
                        opSummaries.Add(manageAction switch
                        {
                            "add"    => tabSec.ExecuteAddTab(formDoc, op, attrMap, classIdMap),
                            "update" => tabSec.ExecuteUpdateTab(formDoc, op),
                            "move"   => FormTabSectionOperations.ExecuteMoveTab(formDoc, op),
                            "remove" => FormTabSectionOperations.ExecuteRemoveTab(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update")
                        });
                        break;
                    case "manage_section":
                        opSummaries.Add(manageAction switch
                        {
                            "add"    => tabSec.ExecuteAddSection(formDoc, op, attrMap, classIdMap),
                            "update" => tabSec.ExecuteUpdateSection(formDoc, op),
                            "move"   => FormTabSectionOperations.ExecuteMoveSection(formDoc, op),
                            "remove" => FormTabSectionOperations.ExecuteRemoveSection(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_section. Valid: add, remove, move, update")
                        });
                        break;
                    case "manage_fields":
                        opSummaries.Add(manageAction switch
                        {
                            "add"           => fieldEvt.ExecuteAddFields(formDoc, op, attrMap, classIdMap),
                            "update"        => fieldEvt.ExecuteUpdateFields(formDoc, op, attrMap, classIdMap),
                            "remove"        => FormFieldEventOperations.ExecuteRemoveFields(formDoc, op),
                            "add_header"    => fieldEvt.ExecuteAddHeaderFields(formDoc, op, attrMap, classIdMap),
                            "update_header" => fieldEvt.ExecuteUpdateHeaderFields(formDoc, op, attrMap, classIdMap),
                            "remove_header" => FormFieldEventOperations.ExecuteRemoveHeaderFields(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_fields. Valid: add, remove, update, add_header, remove_header, update_header")
                        });
                        break;
                    case "manage_library":
                        opSummaries.Add(manageAction switch
                        {
                            "add"    => FormFieldEventOperations.ExecuteAddLibrary(formDoc, op),
                            "remove" => FormFieldEventOperations.ExecuteRemoveLibrary(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_library. Valid: add, remove")
                        });
                        break;
                    case "manage_event":
                        opSummaries.Add(manageAction switch
                        {
                            "add"    => FormFieldEventOperations.ExecuteAddEvent(formDoc, op),
                            "remove" => FormFieldEventOperations.ExecuteRemoveEvent(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_event. Valid: add, remove")
                        });
                        break;
                    default:
                        throw new InvalidOperationException(
                            $"Unknown action '{action}'.\n" +
                            $"Valid: manage_tab | manage_section | manage_fields | manage_library | manage_event (each requires 'manage_action').\n" +
                            $"Read docs://instructions_for_formxml for operation format and examples.");
                }
            }

            var modifiedFormXml = formDoc.ToString(SaveOptions.None);
            return (modifiedFormXml, opSummaries, classIdMap);
        }
    }
}
