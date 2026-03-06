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

        [McpServerTool(Name = "execute_fetchxml", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Execute FetchXML against Dataverse and return records in a markdown table. " +
            "Use get_all=true to auto-page. " +
            "max_records is capped at 5000.")]
        public string execute_fetchxml(
            [Description("FetchXML query text to execute.")] string fetchxml,
            [Description("Maximum records returned. Default: 5000. Max: 5000.")] int max_records = 5000,
            [Description("true: keep paging until max_records or no more rows. false: first page only.")] bool get_all = false)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
                return "Error: fetchxml is required.";

            if (max_records <= 0)
                max_records = DataversePageLimit;
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

            return MarkdownFormatter.FormatFetchXmlResults(records, records.Count, result.MoreRecords);
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

            var finalHasMore = hasMore && allRecords.Count < maxRecords;
            return MarkdownFormatter.FormatFetchXmlResults(allRecords, allRecords.Count, finalHasMore);
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
