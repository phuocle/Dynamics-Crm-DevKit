using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteFetchXmlTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private const int DataversePageLimit = 5000;

        public ExecuteFetchXmlTool(IOrganizationService orgService)
        {
            _orgService = orgService;
        }

        [McpServerTool(Name = "execute_fetchxml", Title = "Run a FetchXML query",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(FetchXmlResult)),
        Description(
            "Run a FetchXML query in single-page or bounded auto-paging mode.\n\n" +
            "WHEN TO USE:\n" +
            "- Query Dataverse records with deterministic columns, filters, joins, or aggregates\n" +
            "- Page through a bounded result after validating logical names\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → discover entity and attribute logical names\n" +
            "- search_records → keyword relevance search\n" +
            "- schema://fetchxml → FetchXML syntax and examples")]
        public CallToolResult execute_fetchxml(
            [Description("FetchXML starting with <fetch>. Lowercase logical names.")] string fetchxml = "",
            [Description("1-5000. Default 5000. Use 10-100 for samples.")] int max_records = 5000,
            [Description("true = auto-page until max_records. false = first page only.")] bool get_all = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(fetchxml))
                    return Error("fetchxml is required.",
                        "Read schema://fetchxml for FetchXML query structure and examples.");

                var trimmedFetchXml = fetchxml.Trim();
                if (!trimmedFetchXml.StartsWith("<fetch", StringComparison.OrdinalIgnoreCase) ||
                    !trimmedFetchXml.EndsWith("</fetch>", StringComparison.OrdinalIgnoreCase))
                    return Error("fetchxml must contain one complete <fetch>...</fetch> document.",
                        "Read schema://fetchxml for FetchXML query structure and examples.");

                var fetchStartTag = Regex.Match(trimmedFetchXml, @"^<fetch\b[^>]*>", RegexOptions.IgnoreCase).Value;
                if (Regex.IsMatch(fetchStartTag, @"\s(top|count|page|paging-cookie)\s*=", RegexOptions.IgnoreCase))
                    return Error("Do not set top, count, page, or paging-cookie in <fetch>.",
                        "Use max_records and get_all; the tool owns paging attributes.");

                // Well-formedness gate: the start/end tag check above only inspects the
                // outer shell. Parse once here so malformed inner XML becomes a
                // validation Error instead of an unexpected XmlException downstream.
                try
                {
                    System.Xml.Linq.XDocument.Parse(trimmedFetchXml);
                }
                catch (System.Xml.XmlException xmlEx)
                {
                    return Error($"fetchxml is not well-formed XML: {xmlEx.Message}",
                        "Read schema://fetchxml for FetchXML query structure and examples.");
                }

                if (max_records <= 0)
                    return Error("max_records must be a positive integer (1-5000).",
                        "Pass max_records in the range 1-5000 (default 5000).");
                if (max_records > DataversePageLimit)
                    max_records = DataversePageLimit;

                var structured = get_all
                    ? ExecuteAllPages(fetchxml, max_records)
                    : ExecuteSinglePage(fetchxml, max_records);

                var summary = structured.HasMore
                    ? $"{structured.TotalReturned} records returned (more available)."
                    : $"{structured.TotalReturned} records returned.";
                return Success(summary, structured);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private FetchXmlResult ExecuteSinglePage(string fetchxml, int maxRecords)
        {
            var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, 1, maxRecords);
            var result = _orgService.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
            var records = ConvertEntities(result.Entities.Take(maxRecords));

            return new FetchXmlResult
            {
                Records = records,
                TotalReturned = records.Count,
                HasMore = result.MoreRecords,
                Entity = GetSingleEntity(records)
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

                var result = _orgService.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
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
                Entity = GetSingleEntity(allRecords)
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
