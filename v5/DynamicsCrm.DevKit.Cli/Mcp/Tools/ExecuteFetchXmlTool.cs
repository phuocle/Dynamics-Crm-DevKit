using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteFetchXmlTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private const int DataversePageLimit = 5000;

        public ExecuteFetchXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "execute_fetchxml", Title = "Run a FetchXML query",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(FetchXmlResult)),
        Description(
            "Run FetchXML query against Dataverse and return structured JSON records. Auto-paging supported. See schema://fetchxml for syntax and docs://data_operations_guide for joins and field formats.\n\n" +

            "OUTPUT:\n" +
            "- Structured JSON: records[] with _entity (logical name) and _id (primary key) plus all requested attributes.\n" +
            "- totalReturned, hasMore, singleEntity.\n\n" +

            "WHEN TO USE:\n" +
            "- Precise filtering, joins, aggregation across entities.\n" +
            "- Full dataset retrieval with get_all=true (up to max_records).\n" +
            "- When search_records (Relevance Search) is unavailable or too coarse.\n\n" +

            "WHEN NOT TO USE:\n" +
            "- For simple keyword search across multiple entities → use search_records.\n" +
            "- To explore entity structure/fields → use get_tables.\n\n" +

            "COMMON MISTAKES:\n" +
            "- Do NOT put top/count/page attributes in <fetch>; use max_records parameter instead.\n" +
            "- Use lowercase logical names only (not Display Names). Use get_tables to verify.\n" +
            "- For samples/exploration, use max_records=10-50, not the default 5000.\n" +
            "- Aggregate queries (<fetch aggregate='true'>) return a different record shape — check output.\n\n" +

            "RELATED TOOLS: search_records (keyword search), get_tables (entity metadata), whoami (get userId for owner filters).")]
        public CallToolResult execute_fetchxml(
            [Description("FetchXML starting with <fetch>. Lowercase logical names."
            )] string fetchxml,
            [Description(
                "1-5000. Defaults to 5000 if not provided. Use smaller values (10-100) for samples."
            )] int max_records = 5000,
            [Description(
                "true = auto-page until max_records. false = first page only (default)."
            )] bool get_all = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(fetchxml))
                    return Error("Error: fetchxml is required.\n" +
                           "Read schema://fetchxml for FetchXML query structure and examples.");

                if (max_records <= 0)
                    return Error("Error: max_records must be a positive integer (1-5000).");
                if (max_records > DataversePageLimit)
                    max_records = DataversePageLimit;

                var structured = get_all
                    ? ExecuteAllPages(fetchxml, max_records)
                    : ExecuteSinglePage(fetchxml, max_records);
                structured.GetAll = get_all;
                structured.MaxRecords = max_records;

                var summary = $"{structured.TotalReturned} record(s) returned" +
                    (structured.HasMore ? " (more records available)" : "");
                return Success(summary, structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private FetchXmlResult ExecuteSinglePage(string fetchxml, int maxRecords)
        {
            var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, 1, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
            var records = ConvertEntities(result.Entities.Take(maxRecords));

            return new FetchXmlResult
            {
                Records = records,
                TotalReturned = records.Count,
                HasMore = result.MoreRecords,
                SingleEntity = GetSingleEntity(records)
            };
        }

        private FetchXmlResult ExecuteAllPages(string fetchxml, int maxRecords)
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

            return new FetchXmlResult
            {
                Records = allRecords,
                TotalReturned = allRecords.Count,
                HasMore = hasMore,
                SingleEntity = GetSingleEntity(allRecords)
            };
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

        private static string GetSingleEntity(List<Dictionary<string, string>> records)
        {
            var entities = records
                .Select(r => r.TryGetValue("_entity", out var entity) ? entity : null)
                .Where(entity => entity != null)
                .Distinct()
                .ToList();
            return entities.Count == 1 ? entities[0] : null;
        }

    }
}
