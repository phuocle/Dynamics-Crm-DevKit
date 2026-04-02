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
            "Returns the record's fields as a markdown table.\n\n" +

            "RETURNS:\n" +
            "- Entity type and record ID header\n" +
            "- All requested columns (or all columns if none specified) as a two-column markdown table " +
            "(Field | Value), with formatted values for lookups, option sets, money, dates, etc.\n\n" +

            "WHEN TO USE:\n" +
            "- When you have a record ID from a previous query and need to see its full details\n" +
            "- When you need to inspect a specific record without writing FetchXML\n" +
            "- When you need to verify a record exists before performing operations on it\n" +
            "- After execute_fetchxml returns IDs, use this to get complete field values for a specific record\n\n" +

            "TIP: Use get_metadata_entities first to discover available columns for the entity.")]
        public string get_record(
            [Description(
                "The logical name of the entity (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name,
            [Description(
                "The GUID of the record to retrieve. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Typically obtained from a previous execute_fetchxml result or from the '_id' column."
            )] string record_id,
            [Description(
                "Comma-separated list of column logical names to retrieve. " +
                "Examples: 'name,accountnumber,primarycontactid' or 'fullname,emailaddress1,telephone1'. " +
                "Leave empty to retrieve all columns. " +
                "Use get_metadata_entities to discover available column names."
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
