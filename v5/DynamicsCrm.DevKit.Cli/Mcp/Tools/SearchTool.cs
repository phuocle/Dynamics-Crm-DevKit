using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class SearchTool
    {
        private readonly ServiceClient _serviceClient;

        public SearchTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "search", Title = "Dataverse Relevance Search",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Perform a Dataverse Relevance Search (full-text search) across one or more entities. " +
            "Returns matching records ranked by relevance score.\n\n" +

            "RETURNS:\n" +
            "- Total count of matching records\n" +
            "- Markdown table with entity type, record ID, score, and attribute values\n" +
            "- Highlights showing which parts of the text matched the search term\n" +
            "- Results are ranked by relevance (best matches first)\n\n" +

            "WHEN TO USE:\n" +
            "- When the user asks to 'find' or 'search for' something by name or keyword\n" +
            "- When you need to search across multiple entities at once (e.g. find 'Contoso' in accounts, contacts, and leads)\n" +
            "- When you don't know the exact field to filter on — Relevance Search searches across all indexed fields\n" +
            "- As a quick alternative to FetchXML when you just need to find records by text\n\n" +

            "SEARCH SYNTAX:\n" +
            "- Boolean operators: + (AND), | (OR), - (NOT)\n" +
            "- Wildcards: trailing wildcard supported (e.g. 'Alp*' matches 'alpine')\n" +
            "- Exact matches: enclose in quotes (e.g. '\"Contoso Ltd\"')\n" +
            "- Precedence: use parentheses (e.g. 'hotel+(wifi|luxury)')\n\n" +

            "IMPORTANT:\n" +
            "- Relevance Search must be enabled in the Dataverse environment\n" +
            "- Only entities and columns configured for Relevance Search will be searched\n" +
            "- Max 100 results per call. For larger datasets, use execute_fetchxml instead\n" +
            "- For precise filtering (by date range, status, numeric values), use execute_fetchxml instead")]
        public string search(
            [Description(
                "The text to search for (1-100 characters). " +
                "Supports simple search syntax: + (AND), | (OR), - (NOT), trailing wildcards (*), " +
                "exact phrases (\"quoted text\"), and precedence grouping with parentheses. " +
                "Examples: 'Contoso', 'john smith', '\"Contoso Ltd\"', 'hotel+(wifi|luxury)', 'Alp*'."
            )] string search_term,
            [Description(
                "Comma-separated entity logical names to limit the search scope. " +
                "Examples: 'account,contact', 'lead', 'opportunity,incident'. " +
                "Leave empty to search across all searchable entities."
            )] string entities = "",
            [Description(
                "Maximum number of results to return. Default: 50. Max: 100. " +
                "Use a smaller value (e.g. 10) for quick lookups."
            )] int top = 50,
            [Description(
                "OData-style filter to narrow results. Applied across all searched entities. " +
                "Operators: eq, ne, gt, ge, lt, le, and, or, not. " +
                "Example: 'statecode eq 0' (active records only), 'createdon gt 2024-01-01'. " +
                "Leave empty for no filter."
            )] string filter = "")
        {
            if (string.IsNullOrWhiteSpace(search_term))
                return "Error: search_term is required.";

            if (search_term.Trim().Length > 100)
                return "Error: search_term must be 100 characters or less.";

            if (top <= 0) top = 50;
            if (top > 100) top = 100;

            try
            {
                var request = BuildSearchRequest(search_term.Trim(), entities, top, filter);
                var response = (OrganizationResponse)_serviceClient.Execute(request);

                if (!response.Results.TryGetValue("response", out var responseBody) || responseBody is not string jsonResponse)
                    return "Error: Unexpected response format from search API.";

                return FormatSearchResults(jsonResponse, search_term.Trim());
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("0x80060203", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("SearchNotEnabled", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("not provisioned", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("not enabled", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("Expected non-empty Guid", StringComparison.OrdinalIgnoreCase))
                {
                    return "Error: Relevance Search is not enabled in this Dataverse environment. " +
                           "Ask your admin to enable it in Power Platform admin center, " +
                           "or use execute_fetchxml with a 'like' filter instead.";
                }

                return $"Error: Search failed: {ex.Message}";
            }
        }

        private static OrganizationRequest BuildSearchRequest(string searchTerm, string entities, int top, string filter)
        {
            var request = new OrganizationRequest("searchquery")
            {
                ["search"] = searchTerm,
                ["count"] = true,
                ["top"] = top
            };

            if (!string.IsNullOrWhiteSpace(entities))
            {
                var entityList = entities
                    .Split(',')
                    .Select(e => e.Trim().ToLowerInvariant())
                    .Where(e => !string.IsNullOrEmpty(e))
                    .Select(e => new SearchEntity { Name = e })
                    .ToList();

                if (entityList.Count > 0)
                    request["entities"] = JsonSerializer.Serialize(entityList, _jsonOptions);
            }

            if (!string.IsNullOrWhiteSpace(filter))
                request["filter"] = filter.Trim();

            return request;
        }

        private static string FormatSearchResults(string jsonResponse, string searchTerm)
        {
            var sb = new StringBuilder(4096);

            SearchQueryResults results;
            try
            {
                results = JsonSerializer.Deserialize<SearchQueryResults>(jsonResponse, _jsonOptions);
            }
            catch
            {
                sb.AppendLine($"[Search: \"{searchTerm}\"]");
                sb.AppendLine(jsonResponse);
                return sb.ToString();
            }

            if (results?.Error != null)
            {
                sb.AppendLine($"Error: {results.Error.Code}");
                sb.AppendLine($"Message: {results.Error.Message}");
                return sb.ToString();
            }

            var records = results?.Value ?? [];
            var totalCount = results?.Count ?? records.Count;

            sb.AppendLine($"[Search: \"{searchTerm}\"] {records.Count} results (total: {totalCount})");
            sb.AppendLine();

            if (records.Count == 0)
            {
                sb.AppendLine("No matching records found.");
                return sb.ToString();
            }

            sb.AppendLine("Entity\tId\tScore\tAttributes\tHighlights");

            foreach (var record in records)
            {
                var attrs = FormatAttributes(record.Attributes);
                var highlights = FormatHighlights(record.Highlights);
                sb.AppendLine($"{record.EntityName}\t{record.Id}\t{record.Score:F2}\t{EscapeTab(attrs)}\t{EscapeTab(highlights)}");
            }

            return sb.ToString();
        }

        private static string FormatAttributes(Dictionary<string, object> attributes)
        {
            if (attributes == null || attributes.Count == 0)
                return "";

            var relevant = attributes
                .Where(kv => !kv.Key.StartsWith("@search.", StringComparison.OrdinalIgnoreCase))
                .Where(kv => !kv.Key.Contains("@OData", StringComparison.OrdinalIgnoreCase))
                .Where(kv => kv.Value != null)
                .OrderBy(kv => kv.Key);

            return string.Join("; ", relevant.Select(kv =>
            {
                var value = kv.Value is JsonElement je ? je.ToString() : kv.Value?.ToString() ?? "";
                return $"{kv.Key}={value}";
            }));
        }

        private static string FormatHighlights(Dictionary<string, string[]> highlights)
        {
            if (highlights == null || highlights.Count == 0)
                return "";

            return string.Join("; ", highlights.Select(kv =>
            {
                var values = string.Join(", ", kv.Value.Select(v =>
                    v.Replace("{crmhit}", "**").Replace("{/crmhit}", "**")));
                return $"{kv.Key}: {values}";
            }));
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static readonly JsonSerializerOptions _jsonOptions = new()
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        #region Search API Models (per Microsoft docs)

        private sealed class SearchEntity
        {
            [JsonPropertyName("name")]
            public string Name { get; set; } = "";

            [JsonPropertyName("selectColumns")]
            public List<string> SelectColumns { get; set; }

            [JsonPropertyName("searchColumns")]
            public List<string> SearchColumns { get; set; }

            [JsonPropertyName("filter")]
            public string Filter { get; set; }
        }

        private sealed class SearchQueryResults
        {
            public SearchErrorDetail Error { get; set; }
            public List<QueryResult> Value { get; set; }
            public long Count { get; set; }
        }

        private sealed class SearchErrorDetail
        {
            public string Code { get; set; }
            public string Message { get; set; }
        }

        private sealed class QueryResult
        {
            public string Id { get; set; } = "";
            public string EntityName { get; set; } = "";
            public int ObjectTypeCode { get; set; }
            public Dictionary<string, object> Attributes { get; set; } = [];
            public Dictionary<string, string[]> Highlights { get; set; } = [];
            public double Score { get; set; }
        }

        #endregion
    }
}
