using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class CreateRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public CreateRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "create_record", Idempotent = false, Destructive = false, ReadOnly = false),
        Description(
            "Create a new record in Dataverse. " +
            "Provide the entity logical name and attributes as a JSON object. " +
            "Returns the GUID of the newly created record. " +
            "Use get_entity_metadata first to understand the entity schema (attribute types, required fields, valid values). " +
            "JSON attribute values: strings for text, numbers for int/decimal/money, booleans for two-option, " +
            "GUIDs as strings for lookups (use format {\"entity_name\": \"account\", \"id\": \"guid-here\"} for EntityReference), " +
            "integers for optionset values.")]
        public string create_record(
            [Description("Entity logical name (e.g. 'account', 'contact').")] string entity_name,
            [Description("JSON object with attribute name-value pairs. Example: {\"name\": \"Test Account\", \"telephone1\": \"555-0100\", \"revenue\": 50000}")] string attributes_json)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";
            if (string.IsNullOrWhiteSpace(attributes_json))
                return "Error: attributes_json is required.";

            try
            {
                var entity = new Entity(entity_name.Trim().ToLowerInvariant());
                var jsonDoc = JsonDocument.Parse(attributes_json);

                foreach (var prop in jsonDoc.RootElement.EnumerateObject())
                {
                    entity[prop.Name] = ConvertJsonValue(prop.Value);
                }

                var newId = _serviceClient.Create(entity);

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    entity = entity_name,
                    id = newId.ToString(),
                    message = $"Record created successfully."
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to create record: {ex.Message}"
                });
            }
        }

        internal static object ConvertJsonValue(JsonElement value)
        {
            switch (value.ValueKind)
            {
                case JsonValueKind.String:
                    var str = value.GetString();
                    if (Guid.TryParse(str, out var guid))
                        return guid;
                    if (DateTime.TryParse(str, out var dt))
                        return dt;
                    return str;

                case JsonValueKind.Number:
                    if (value.TryGetInt32(out var intVal))
                        return intVal;
                    if (value.TryGetInt64(out var longVal))
                        return longVal;
                    return value.GetDecimal();

                case JsonValueKind.True:
                    return true;

                case JsonValueKind.False:
                    return false;

                case JsonValueKind.Null:
                    return null;

                case JsonValueKind.Object:
                    if (value.TryGetProperty("entity_name", out var entityNameProp) &&
                        value.TryGetProperty("id", out var idProp))
                    {
                        return new EntityReference(entityNameProp.GetString(), Guid.Parse(idProp.GetString()));
                    }
                    if (value.TryGetProperty("value", out var optionProp) && optionProp.ValueKind == JsonValueKind.Number)
                    {
                        return new OptionSetValue(optionProp.GetInt32());
                    }
                    if (value.TryGetProperty("amount", out var moneyProp) && moneyProp.ValueKind == JsonValueKind.Number)
                    {
                        return new Money(moneyProp.GetDecimal());
                    }
                    return value.GetRawText();

                default:
                    return value.GetRawText();
            }
        }
    }
}
