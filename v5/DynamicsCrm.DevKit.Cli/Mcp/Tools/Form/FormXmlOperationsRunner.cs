using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
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
        private readonly IOrganizationService _orgService;

        public FormXmlOperationsRunner(IOrganizationService orgService)
        {
            _orgService = orgService;
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

            var attrMap = new Dictionary<string, AttributeMetadata>(StringComparer.OrdinalIgnoreCase);
            if (referencedFields.Count > 0)
            {
                var fieldMeta = new FormFieldMetadata(_orgService);
                try
                {
                    attrMap = fieldMeta.LoadEntityAttributeMap(entityName);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(
                        $"Failed to retrieve metadata for entity '{entityName}': {ex.Message}", ex);
                }

                var fieldNameMap = FormFieldMetadata.ResolveFieldReferences(entityName, referencedFields, attrMap);
                ops = FormFieldMetadata.NormalizeFieldReferences(ops, fieldNameMap);
                referencedFields = FormFieldMetadata.CollectFieldNames(ops);
                FormFieldMetadata.ValidateFieldsExist(entityName, referencedFields, attrMap);
            }

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
            var builder  = new FormXmlBuilder(_orgService);
            var tabSec   = new FormTabSectionOperations(_orgService, builder);
            var fieldEvt = new FormFieldEventOperations(_orgService, builder);
            var subgridOps = new FormSubgridOperations(_orgService);
            var classIdMap  = new Dictionary<string, string>();
            var opSummaries = new List<string>();

            // 4. Dispatch loop
            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    throw new InvalidOperationException(
                        "Each operation must have an 'action' field.\n" +
                        "Important: operation.action is the operation family, not the verb. Use 'manage_action' for add/update/remove/move.\n" +
                        "Example: {\"action\":\"manage_subgrid\",\"manage_action\":\"add\",...}\n" +
                        "Valid actions: manage_tab, manage_section, manage_fields, manage_subgrid, manage_library, manage_event.\n" +
                        "Read docs://instructions_for_formxml for operation format and examples.");

                var action       = actionProp.GetString()?.ToLowerInvariant();
                var manageAction = NormalizeManageAction(FormXmlHelpers.GetStringProp(op, "manage_action"));

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
                                $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, rename, update, move, remove, delete")
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
                                $"Unknown manage_action '{manageAction}' for manage_section. Valid: add, rename, update, move, remove, delete")
                        });
                        break;
                    case "manage_fields":
                        opSummaries.Add(manageAction switch
                        {
                            "add"           => fieldEvt.ExecuteAddFields(formDoc, op, attrMap, classIdMap),
                            "update"        => fieldEvt.ExecuteUpdateFields(formDoc, op, attrMap, classIdMap),
                            "move"          => FormFieldEventOperations.ExecuteMoveFields(formDoc, op),
                            "remove"        => FormFieldEventOperations.ExecuteRemoveFields(formDoc, op),
                            "add_header"    => fieldEvt.ExecuteAddHeaderFields(formDoc, op, attrMap, classIdMap),
                            "update_header" => fieldEvt.ExecuteUpdateHeaderFields(formDoc, op, attrMap, classIdMap),
                            "remove_header" => FormFieldEventOperations.ExecuteRemoveHeaderFields(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_fields. Valid: add, update, move, remove, delete, add_header, update_header, remove_header, delete_header")
                        });
                        break;
                    case "manage_subgrid":
                        opSummaries.Add(manageAction switch
                        {
                            "add"    => subgridOps.ExecuteAddSubgrid(formDoc, op),
                            "update" => FormSubgridOperations.ExecuteUpdateSubgrid(formDoc, op),
                            "remove" => FormSubgridOperations.ExecuteRemoveSubgrid(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_subgrid. Valid: add, update, remove")
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
                            $"operation.action must be the operation family, not the verb. Use manage_action='{action}' only if the operation action is one of the valid families.\n" +
                            $"Example: {{\"action\":\"manage_subgrid\",\"manage_action\":\"{action}\",...}}\n" +
                            $"Valid action families: manage_tab | manage_section | manage_fields | manage_subgrid | manage_library | manage_event.\n" +
                            $"Read docs://instructions_for_formxml for operation format and examples.");
                }
            }

            var modifiedFormXml = formDoc.ToString(SaveOptions.None);
            return (modifiedFormXml, opSummaries, classIdMap);
        }

        private static string NormalizeManageAction(string manageAction)
        {
            var normalized = manageAction?.Trim().ToLowerInvariant() ?? "";
            return normalized switch
            {
                "rename" => "update",
                "delete" => "remove",
                "delete_header" => "remove_header",
                _ => normalized
            };
        }
    }
}
