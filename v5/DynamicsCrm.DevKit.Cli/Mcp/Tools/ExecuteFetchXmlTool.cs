using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteFetchXmlTool
    {
        private readonly ServiceClient _serviceClient;
        private const int DataversePageLimit = 5000;

        public ExecuteFetchXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "execute_fetchxml", Title = "Run a FetchXML query",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Execute a FetchXML query against Dataverse. Returns markdown table. Max 5000 records. Supports auto-paging.\n\n" +

            "FETCHXML STRUCTURE:\n" +
            "- <fetch [distinct] [aggregate]> → <entity name='logical_name'> → <attribute>, <filter>, <order>, <link-entity>\n" +
            "- DO NOT use top/count/page in <fetch> — use max_records parameter instead\n" +
            "- Operators: eq, ne, gt, ge, lt, le, like (%), null, not-null, in, between, today, last-x-days, etc.\n" +
            "- Joins: <link-entity name='entity' from='col' to='col' link-type='inner|outer' [alias='a']>\n" +
            "- Aggregation: aggregate='true' on <fetch>, then count/sum/avg/min/max with alias + groupby\n\n" +

            "RULES:\n" +
            "- Use lowercase logical names. Use get_tables if unsure\n" +
            "- For advanced syntax, read schema://fetchxml")]
        public string execute_fetchxml(
            [Description("FetchXML query starting with <fetch>. Use lowercase logical names."
            )] string fetchxml,
            [Description(
                "Maximum records to return. Default: 5000. Capped at 5000. " +
                "Use a smaller value (e.g. 10, 50, 100) when you only need a sample or top-N results."
            )] int max_records = 5000,
            [Description(
                "true: automatically page through all results until max_records is reached or no more rows exist. " +
                "false: return first page only (default). " +
                "Use true when you need complete datasets (e.g. reporting, counting all records)."
            )] bool get_all = false)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
                return "Error: fetchxml is required.";

            if (max_records <= 0)
                return "Error: max_records must be a positive integer (1-5000).";
            if (max_records > DataversePageLimit)
                max_records = DataversePageLimit;

            try
            {
                return get_all
                    ? ExecuteAllPages(fetchxml, max_records)
                    : ExecuteSinglePage(fetchxml, max_records);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to execute FetchXML: {ex.Message}";
            }
        }

        private string ExecuteSinglePage(string fetchxml, int maxRecords)
        {
            var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, 1, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
            var records = ConvertEntities(result.Entities.Take(maxRecords));

            return CompactFormatter.FormatFetchXmlResults(records, records.Count, result.MoreRecords);
        }

        private string ExecuteAllPages(string fetchxml, int maxRecords)
        {
            var allRecords = new List<Dictionary<string, string>>();
            var page = 1;
            string pagingCookie = null;
            var hasMore = false;

            while (allRecords.Count < maxRecords)
            {
                var remaining = maxRecords - allRecords.Count;
                var count = Math.Min(DataversePageLimit, remaining);
                var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, page, count, pagingCookie);

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
                allRecords.AddRange(ConvertEntities(result.Entities));

                hasMore = result.MoreRecords;
                if (!result.MoreRecords || result.Entities.Count == 0)
                    break;

                pagingCookie = result.PagingCookie;
                page++;
            }

            return CompactFormatter.FormatFetchXmlResults(allRecords, allRecords.Count, hasMore);
        }

        private static List<Dictionary<string, string>> ConvertEntities(IEnumerable<Entity> entities)
        {
            return entities
                .Select(entity =>
                {
                    var dict = new Dictionary<string, string>
                    {
                        ["_entity"] = entity.LogicalName,
                        ["_id"] = entity.Id.ToString()
                    };
                    foreach (var attr in entity.Attributes.OrderBy(x => x.Key))
                    {
                        dict[attr.Key] = DataverseValueFormatter.FormatValue(entity, attr.Key);
                    }
                    return dict;
                })
                .ToList();
        }
    }
}
