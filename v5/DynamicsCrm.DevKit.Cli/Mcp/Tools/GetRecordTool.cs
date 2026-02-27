using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class GetRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public GetRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_record", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve a single record from Dataverse by entity logical name and record ID (GUID). " +
            "Returns all attributes of the record formatted as a readable list. " +
            "Optionally specify which columns to retrieve. " +
            "Use this when you know the exact record ID and want to see its details.")]
        public string get_record(
            [Description("Entity logical name (e.g. 'account', 'contact').")] string entity_name,
            [Description("The record ID (GUID).")] string record_id,
            [Description("Optional: comma-separated list of column logical names to retrieve (e.g. 'name,emailaddress1,telephone1'). Leave empty for all columns.")] string columns = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";
            if (string.IsNullOrWhiteSpace(record_id) || !Guid.TryParse(record_id, out var id))
                return "Error: record_id must be a valid GUID.";

            try
            {
                var columnSet = string.IsNullOrWhiteSpace(columns)
                    ? new ColumnSet(true)
                    : new ColumnSet(columns.Split(',').Select(c => c.Trim()).Where(c => c.Length > 0).ToArray());

                var entity = _serviceClient.Retrieve(entity_name.Trim().ToLowerInvariant(), id, columnSet);

                var sb = new StringBuilder();
                sb.AppendLine($"## {entity_name} — {id}");
                sb.AppendLine();

                var attrs = entity.Attributes
                    .OrderBy(a => a.Key)
                    .ToList();

                sb.AppendLine($"| Attribute | Value |");
                sb.AppendLine($"| --- | --- |");

                foreach (var attr in attrs)
                {
                    var value = FormatValue(entity, attr.Key);
                    sb.AppendLine($"| {attr.Key} | {value.Replace("|", "\\|")} |");
                }

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error retrieving record: {ex.Message}";
            }
        }

        private static string FormatValue(Entity entity, string attr)
        {
            if (!entity.Contains(attr)) return "";
            var raw = entity[attr];
            return raw switch
            {
                EntityReference er => string.IsNullOrEmpty(er.Name) ? $"{er.LogicalName}: {er.Id}" : $"{er.Name} ({er.LogicalName}: {er.Id})",
                OptionSetValue osv => entity.FormattedValues.ContainsKey(attr) ? $"{entity.FormattedValues[attr]} ({osv.Value})" : osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss"),
                bool b => entity.FormattedValues.ContainsKey(attr) ? entity.FormattedValues[attr] : (b ? "Yes" : "No"),
                AliasedValue av => av.Value?.ToString() ?? "",
                byte[] bytes => $"[Binary: {bytes.Length} bytes]",
                null => "",
                _ => raw.ToString() ?? ""
            };
        }
    }
}
