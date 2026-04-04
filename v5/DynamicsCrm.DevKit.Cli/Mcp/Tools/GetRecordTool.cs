using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public GetRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_record", Title = "Retrieve a single record by ID",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve a single Dataverse record by entity name and record ID. " +
            "Returns fields as key-value pairs with formatted values for lookups, option sets, money, dates.\n\n" +

            "WHEN TO USE:\n" +
            "- Inspect a specific record without writing FetchXML\n" +
            "- Get full field values after execute_fetchxml returns IDs\n" +
            "- Verify a record exists before performing operations on it")]
        public string get_record(
            [Description(
                "Entity logical name (lowercase). Use get_metadata_entities to discover names."
            )] string entity_name,
            [Description(
                "GUID of the record to retrieve."
            )] string record_id,
            [Description(
                "Comma-separated column logical names. Leave empty for all columns. " +
                "Use get_metadata_entities to discover column names."
            )] string columns = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            if (string.IsNullOrWhiteSpace(record_id))
                return "Error: record_id is required.";

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return $"Error: '{record_id}' is not a valid GUID.";

            try
            {
                var columnSet = BuildColumnSet(columns);
                var entity = _serviceClient.Retrieve(entity_name.Trim().ToLowerInvariant(), id, columnSet);

                return FormatRecord(entity);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve record: {ex.Message}";
            }
        }

        private static ColumnSet BuildColumnSet(string columns)
        {
            if (string.IsNullOrWhiteSpace(columns))
                return new ColumnSet(true);

            var cols = columns
                .Split(',')
                .Select(c => c.Trim().ToLowerInvariant())
                .Where(c => !string.IsNullOrEmpty(c))
                .ToArray();

            return cols.Length > 0 ? new ColumnSet(cols) : new ColumnSet(true);
        }

        private static string FormatRecord(Entity entity)
        {
            var sb = new StringBuilder(entity.Attributes.Count * 60 + 128);

            sb.AppendLine($"[{entity.LogicalName}] {entity.Id}");
            sb.AppendLine();

            foreach (var attr in entity.Attributes.OrderBy(a => a.Key))
            {
                var value = DataverseValueFormatter.FormatValue(entity, attr.Key);
                sb.AppendLine($"{attr.Key}: {value}");
            }

            return sb.ToString();
        }
    }
}
