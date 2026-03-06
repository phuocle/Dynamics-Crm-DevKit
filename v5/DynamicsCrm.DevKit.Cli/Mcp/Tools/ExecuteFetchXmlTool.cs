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
            "Execute FetchXML against Dataverse and return records in JSON. " +
            "Use get_all=true to auto-page. " +
            "max_records is capped at 5000.")]
        public string execute_fetchxml(
            [Description("FetchXML query text to execute.")] string fetchxml,
            [Description("Maximum records returned. Default: 5000. Max: 5000.")] int max_records = 5000,
            [Description("true: keep paging until max_records or no more rows. false: first page only.")] bool get_all = false)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
                return ToolResponseFormatter.Error("fetchxml is required.");

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
                return ToolResponseFormatter.Error("Failed to execute FetchXML", ex);
            }
        }

        private string ExecuteSinglePage(string fetchxml, int maxRecords)
        {
            var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, 1, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
            var records = ConvertEntities(result.Entities.Take(maxRecords).ToList());

            return ToolResponseFormatter.Success(new
            {
                total_returned = records.Count,
                has_more = result.MoreRecords,
                records
            });
        }

        private string ExecuteAllPages(string fetchxml, int maxRecords)
        {
            var allRecords = new List<object>();
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

            return ToolResponseFormatter.Success(new
            {
                total_returned = allRecords.Count,
                has_more = hasMore && allRecords.Count < maxRecords,
                records = allRecords
            });
        }

        private static List<object> ConvertEntities(IEnumerable<Entity> entities)
        {
            return entities
                .Select(entity => new
                {
                    entity_logical_name = entity.LogicalName,
                    id = entity.Id,
                    attributes = entity.Attributes
                        .OrderBy(x => x.Key)
                        .ToDictionary(
                            x => x.Key,
                            x => DataverseValueFormatter.FormatValue(entity, x.Key))
                })
                .Cast<object>()
                .ToList();
        }
    }
}
