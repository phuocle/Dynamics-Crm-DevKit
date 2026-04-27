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
            "Run FetchXML query → markdown table. Max 5000 records, auto-paging supported. Lowercase logical names (use get_tables to verify). Don't use top/count/page in <fetch>; use max_records. See schema://fetchxml for syntax.\n\n" +

            "WHEN TO USE:\n" +
            "- Precise filtering / joins / aggregation across entities\n" +
            "- When search_records (Relevance Search) is too coarse or not enabled\n" +
            "- get_all=true to fetch full datasets up to max_records")]
        public string execute_fetchxml(
            [Description("FetchXML starting with <fetch>. Lowercase logical names."
            )] string fetchxml,
            [Description(
                "1–5000. Smaller (10–100) for samples."
            )] int max_records = 5000,
            [Description(
                "true = auto-page till max_records. false = first page only."
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
