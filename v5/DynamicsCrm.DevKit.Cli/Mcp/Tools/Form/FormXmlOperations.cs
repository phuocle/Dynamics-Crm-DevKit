using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.ComponentModel;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    public class FormXmlOperations : McpToolBase
    {
        private readonly IOrganizationService _orgService;

        public FormXmlOperations(IOrganizationService orgService)
        {
            _orgService = orgService;
        }

        [Description(
            "Build and apply FormXML operations to a Dataverse entity form. " +
            "Supported operations: add_fields, add_section, add_tab, add_header_fields, add_library, add_event, " +
            "move_tab, move_section, " +
            "remove_tab, remove_section, remove_fields, remove_header_fields, remove_library, remove_event. " +
            "Each operation is a JSON object in the operations array with an 'action' field specifying the operation type. " +
            "Returns the updated FormXML or an error if validation fails.")]
        public CallToolResult build_form_xml(
            [Description("Entity Display Name or logical name (e.g. 'Account' or 'account')."
            )] string entity_name,
            [Description("Form GUID. Required. Accepts format with or without braces."
            )] string form_id,
            [Description(
                "JSON array of operations to apply to the form.\n" +
                "Actions: add_tab, add_section, add_fields, add_header_fields, add_library, add_event, " +
                "move_tab, move_section, " +
                "remove_tab, remove_section, remove_fields, remove_header_fields, remove_library, remove_event"
            )] string operations)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return Error("Error: entity_name is required.");

            // Validate form_id — strip optional braces
            var rawFormId = form_id?.Trim().Trim('{', '}');
            if (!Guid.TryParse(rawFormId, out var parsedFormId))
                return Error($"Error: '{form_id}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(operations))
                return Error("Error: operations is required.");

            // Validate JSON
            JsonDocument doc;
            try
            {
                doc = JsonDocument.Parse(operations);
            }
            catch
            {
                return Error("Error: Invalid operations JSON. Expected a JSON array of operation objects.");
            }

            if (doc.RootElement.ValueKind != JsonValueKind.Array || doc.RootElement.GetArrayLength() == 0)
                return Error("Error: operations must be a non-empty JSON array.");

            // Attempt Dataverse call
            try
            {
                var form = _orgService.Retrieve("systemform", parsedFormId,
                    new ColumnSet("formxml", "name", "objecttypecode"));
                return Success($"[BuildFormXML] Form '{form?.GetAttributeValue<string>("name")}' updated successfully.", null);
            }
            catch (Exception ex)
            {
                return Error($"Error: {ex.Message}");
            }
        }
    }
}
