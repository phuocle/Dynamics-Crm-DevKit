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

            "RULES:\n" +
            "- Use lowercase logical names; call get_tables if unsure\n" +
            "- DO NOT use top/count/page in <fetch> — use max_records instead\n" +
            "- Read schema://fetchxml for structure, operators, joins, and aggregation syntax")]
        public string execute_fetchxml(
            [Description("FetchXML query starting with <fetch>. Must use lowercase logical names."
            )] string fetchxml,
            [Description(
                "Max records to return (1–5000, default 5000). Use a smaller value (e.g. 10–100) for samples."
            )] int max_records = 5000,
            [Description(
                "true: auto-page until max_records or no more rows. false: first page only (default). " +
                "Use true for complete datasets."
            )] bool get_all = false)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
                return "Error: fetchxml is required.\n" +
                       "Read schema://fetchxml for FetchXML query structure and examples.";

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
                return $"Error: Failed to execute FetchXML: {ex.Message}\n" +
                       "Hint: Use get_tables to verify logical names and available columns.\n" +
                       "Read schema://fetchxml for valid FetchXML syntax.";
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
