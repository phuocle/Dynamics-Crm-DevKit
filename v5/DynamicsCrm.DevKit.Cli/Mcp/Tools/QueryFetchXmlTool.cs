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
    [McpServerToolType]
    public class QueryFetchXmlTool
    {
        private readonly ServiceClient _serviceClient;

        public QueryFetchXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "query_fetchxml", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Execute a FetchXML query against the connected Dataverse environment and return results as a markdown table. " +
            "Use this for any custom data query - retrieving records, aggregations, linked entities, etc. " +
            "The FetchXML must be valid XML. Results are formatted as a readable markdown table with all returned attributes.")]
        public string query_fetchxml(
            [Description("The FetchXML query to execute. Must be valid FetchXML.")] string fetchxml,
            [Description("Maximum number of records to return. Default is 50, max is 500.")] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
            {
                return "Error: fetchxml is required.";
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 500) max_records = 500;

            try
            {
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchxml));
                if (result.Entities.Count == 0)
                {
                    return "Query executed successfully. No records found.";
                }

                var table = FormatAsMarkdownTable(result, max_records);
                var summary = result.Entities.Count <= max_records
                    ? $"Query returned {result.Entities.Count} record(s)."
                    : $"Query returned {result.Entities.Count} record(s), showing first {max_records}.";

                return $"{summary}\n\n{table}";
            }
            catch (Exception ex)
            {
                return $"Error executing FetchXML: {ex.Message}";
            }
        }

        private static string FormatAsMarkdownTable(EntityCollection entities, int maxRecords)
        {
            var records = entities.Entities.Take(maxRecords).ToList();
            var columns = records
                .SelectMany(e => e.Attributes.Keys)
                .Distinct()
                .OrderBy(k => k)
                .ToList();

            var sb = new StringBuilder();
            sb.AppendLine("| " + string.Join(" | ", columns) + " |");
            sb.AppendLine("| " + string.Join(" | ", columns.Select(_ => "---")) + " |");

            foreach (var entity in records)
            {
                var values = columns.Select(c => FormatValue(entity, c).Replace("|", "\\|"));
                sb.AppendLine("| " + string.Join(" | ", values) + " |");
            }

            if (entities.Entities.Count > maxRecords)
                sb.AppendLine($"\n*Showing {maxRecords} of {entities.Entities.Count} records*");

            return sb.ToString();
        }

        private static string FormatValue(Entity entity, string attr)
        {
            if (!entity.Contains(attr)) return "";
            var raw = entity[attr];
            return raw switch
            {
                EntityReference er => string.IsNullOrEmpty(er.Name) ? er.Id.ToString() : $"{er.Name} ({er.Id})",
                OptionSetValue osv => entity.FormattedValues.ContainsKey(attr) ? entity.FormattedValues[attr] : osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss"),
                bool b => entity.FormattedValues.ContainsKey(attr) ? entity.FormattedValues[attr] : (b ? "Yes" : "No"),
                AliasedValue av => FormatAliasedValue(av),
                null => "",
                _ => raw.ToString() ?? ""
            };
        }

        private static string FormatAliasedValue(AliasedValue av)
        {
            return av.Value switch
            {
                EntityReference er => string.IsNullOrEmpty(er.Name) ? er.Id.ToString() : $"{er.Name} ({er.Id})",
                OptionSetValue osv => osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss"),
                null => "",
                _ => av.Value?.ToString() ?? ""
            };
        }
    }
}
