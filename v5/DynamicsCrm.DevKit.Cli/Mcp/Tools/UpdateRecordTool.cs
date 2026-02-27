using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class UpdateRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public UpdateRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "update_record", Idempotent = true, Destructive = false, ReadOnly = false),
        Description(
            "Update an existing record in Dataverse. " +
            "Provide the entity logical name, record ID, and attributes to update as a JSON object. " +
            "Only the specified attributes will be updated; other attributes remain unchanged. " +
            "Use get_entity_metadata to understand attribute types before updating. " +
            "To clear a field, set its value to null in the JSON.")]
        public string update_record(
            [Description("Entity logical name (e.g. 'account', 'contact').")] string entity_name,
            [Description("The record ID (GUID) to update.")] string record_id,
            [Description("JSON object with attribute name-value pairs to update. Example: {\"name\": \"Updated Name\", \"telephone1\": \"555-0200\"}")] string attributes_json)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";
            if (string.IsNullOrWhiteSpace(record_id) || !Guid.TryParse(record_id, out var id))
                return "Error: record_id must be a valid GUID.";
            if (string.IsNullOrWhiteSpace(attributes_json))
                return "Error: attributes_json is required.";

            try
            {
                var entity = new Entity(entity_name.Trim().ToLowerInvariant(), id);
                var jsonDoc = JsonDocument.Parse(attributes_json);

                foreach (var prop in jsonDoc.RootElement.EnumerateObject())
                {
                    entity[prop.Name] = CreateRecordTool.ConvertJsonValue(prop.Value);
                }

                _serviceClient.Update(entity);

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    entity = entity_name,
                    id = id.ToString(),
                    message = "Record updated successfully."
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to update record: {ex.Message}"
                });
            }
        }
    }
}
