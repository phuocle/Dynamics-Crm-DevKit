using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

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
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(FetchXmlResult)),
        Description(
            "Run FetchXML query → markdown table. Max 5000 records, auto-paging supported. Lowercase logical names (use get_tables to verify). Don't use top/count/page in <fetch>; use max_records. See schema://fetchxml for syntax.\n\n" +

            "WHEN TO USE:\n" +
            "- Precise filtering / joins / aggregation across entities\n" +
            "- When search_records (Relevance Search) is too coarse or not enabled\n" +
            "- get_all=true to fetch full datasets up to max_records")]
        public CallToolResult execute_fetchxml(
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
                return ErrorResult("Error: fetchxml is required.\n" +
                       "Read schema://fetchxml for FetchXML query structure and examples.");

            if (max_records <= 0)
                return ErrorResult("Error: max_records must be a positive integer (1-5000).");
            if (max_records > DataversePageLimit)
                max_records = DataversePageLimit;

            try
            {
                var structured = get_all
                    ? ExecuteAllPages(fetchxml, max_records)
                    : ExecuteSinglePage(fetchxml, max_records);
                structured.GetAll = get_all;
                structured.MaxRecords = max_records;
                return StructuredResult(structured);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to execute FetchXML: {ex.Message}\n" +
                       "Hint: Use get_tables to verify logical names and available columns.\n" +
                       "Read schema://fetchxml for valid FetchXML syntax.");
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

        private static CallToolResult StructuredResult(FetchXmlResult structured) => new()
        {
            Content = [new TextContentBlock
            {
                Text = CompactFormatter.FormatFetchXmlResults(structured.Records, structured.TotalReturned, structured.HasMore)
            }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
