using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class SearchRecordsTool
    {
        private readonly ServiceClient _serviceClient;

        public SearchRecordsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "search_records", Title = "Search records by keyword",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Perform a Dataverse Relevance Search (full-text search) across one or more entities. " +
            "Returns records ranked by relevance score with highlights.\n\n" +

            "TWO ACTIONS:\n" +
            "- action='search' (default): Full-text search across entities. Requires search_term\n" +
            "- action='status': Show Relevance Search configuration — enabled/disabled, indexed entities, " +
            "searchable fields, sync status, storage size, and document count. No search_term needed\n\n" +

            "SEARCH SYNTAX (for action='search'): + (AND), | (OR), - (NOT), trailing wildcard (*), " +
            "exact phrases (\"quoted\"), parentheses for grouping.\n\n" +

            "WHEN TO USE:\n" +
            "- Find records by name or keyword across multiple entities\n" +
            "- Quick text search when you don't know the exact field to filter on\n" +
            "- Check if Relevance Search is enabled and which entities/fields are indexed (action='status')\n\n" +

            "IMPORTANT:\n" +
            "- Relevance Search must be enabled in the environment\n" +
            "- Max 100 results. For larger datasets or precise filtering, use execute_fetchxml")]
        public string search_records(
            [Description(
                "The action to perform: 'search' (default) or 'status'.\n" +
                "- 'search': Full-text search. Requires search_term\n" +
                "- 'status': Show search configuration, indexed entities/fields, sync status, and storage statistics"
            )] string action = "search",
            [Description(
                "The text to search for (1-100 characters). Required when action='search', ignored for 'status'. " +
                "Supports simple search syntax: + (AND), | (OR), - (NOT), trailing wildcards (*), " +
                "exact phrases (\"quoted text\"), and precedence grouping with parentheses. " +
                "Examples: 'Contoso', 'john smith', '\"Contoso Ltd\"', 'hotel+(wifi|luxury)', 'Alp*'."
            )] string search_term = "",
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
            if (string.IsNullOrWhiteSpace(action))
                return "Error: action is required. Valid values: 'search', 'status'.";

            var normalizedAction = action.Trim().ToLowerInvariant();

            return normalizedAction switch
            {
                "search" => HandleSearch(search_term, entities, top, filter),
                "status" => HandleStatus(),
                _ => $"Error: Invalid action '{action}'. Valid values: 'search', 'status'."
            };
        }

        private string HandleSearch(string searchTerm, string entities, int top, string filter)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
                return "Error: search_term is required when action='search'.";

            if (searchTerm.Trim().Length > 100)
                return "Error: search_term must be 100 characters or less.";

            if (top <= 0)
                return "Error: top must be a positive number (1-100).";
            if (top > 100) top = 100;

            try
            {
                var requestBody = BuildSearchRequestBody(searchTerm.Trim(), entities, top, filter);
                var response = _serviceClient.ExecuteWebRequest(
                    HttpMethod.Post, "searchquery", requestBody, null, "application/json");

                var jsonResponse = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (!response.IsSuccessStatusCode)
                    return $"Error: Search API returned {(int)response.StatusCode} {response.ReasonPhrase}.\n{jsonResponse}";

                // Web API wraps result in { "response": "..." }
                var wrapper = JsonSerializer.Deserialize<SearchResponseWrapper>(jsonResponse, _jsonOptions);
                if (wrapper?.Response == null)
                    return "Error: Unexpected response format from search API.";

                return FormatSearchResults(wrapper.Response, searchTerm.Trim());
            }
            catch (Exception ex)
            {
                return HandleSearchException(ex);
            }
        }

        private string HandleStatus()
        {
            try
            {
                // Call both searchstatus and searchstatistics endpoints
                var statusResponse = _serviceClient.ExecuteWebRequest(
                    HttpMethod.Get, "searchstatus", string.Empty, null, "application/json");
                var statusJson = statusResponse.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (!statusResponse.IsSuccessStatusCode)
                    return $"Error: searchstatus API returned {(int)statusResponse.StatusCode} {statusResponse.ReasonPhrase}.\n{statusJson}";

                var statusWrapper = JsonSerializer.Deserialize<SearchResponseWrapper>(statusJson, _jsonOptions);
                if (statusWrapper?.Response == null)
                    return "Error: Unexpected response format from searchstatus API.";

                string statisticsInner = null;
                try
                {
                    var statsResponse = _serviceClient.ExecuteWebRequest(
                        HttpMethod.Get, "searchstatistics", string.Empty, null, "application/json");
                    var statsJson = statsResponse.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                    if (statsResponse.IsSuccessStatusCode)
                    {
                        var statsWrapper = JsonSerializer.Deserialize<SearchResponseWrapper>(statsJson, _jsonOptions);
                        statisticsInner = statsWrapper?.Response;
                    }
                }
                catch
                {
                    // Statistics is optional — continue without it
                }

                return FormatStatusResults(statusWrapper.Response, statisticsInner);
            }
            catch (Exception ex)
            {
                return HandleSearchException(ex);
            }
        }

        private static string HandleSearchException(Exception ex)
        {
            if (ex.Message.Contains("0x80048d0b", StringComparison.OrdinalIgnoreCase) ||
                ex.Message.Contains("0x80060203", StringComparison.OrdinalIgnoreCase) ||
                ex.Message.Contains("SearchNotEnabled", StringComparison.OrdinalIgnoreCase) ||
                ex.Message.Contains("not provisioned", StringComparison.OrdinalIgnoreCase) ||
                ex.Message.Contains("Search feature is disabled", StringComparison.OrdinalIgnoreCase))
            {
                return "Error: Dataverse Search is not enabled in this environment.\n\n" +
                       "HOW TO ENABLE:\n" +
                       "1. Go to Power Platform admin center: https://admin.powerplatform.microsoft.com\n" +
                       "2. Select your environment → Settings → Product → Features\n" +
                       "3. Under 'Dataverse Search', select 'On'\n" +
                       "4. Select 'Save' and wait for indexing to complete\n\n" +
                       "Docs: https://learn.microsoft.com/en-us/power-platform/admin/configure-relevance-search-organization\n\n" +
                       "WORKAROUND: Use execute_fetchxml with a 'like' filter to search records.";
            }

            return $"Error: Search failed: {ex.Message}";
        }

        private static string BuildSearchRequestBody(string searchTerm, string entities, int top, string filter)
        {
            var body = new Dictionary<string, object>
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
                    body["entities"] = JsonSerializer.Serialize(entityList, _jsonOptions);
            }

            if (!string.IsNullOrWhiteSpace(filter))
                body["filter"] = filter.Trim();

            return JsonSerializer.Serialize(body, _jsonOptions);
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

            var resultWord = records.Count == 1 ? "result" : "results";
            sb.AppendLine($"[Search: \"{searchTerm}\"] {records.Count} {resultWord} (total: {totalCount})");
            sb.AppendLine();

            if (records.Count == 0)
            {
                sb.AppendLine("No matching records found.");
                return sb.ToString();
            }

            sb.AppendLine("| Entity | Id | Score | Attributes | Highlights |");
            sb.AppendLine("|---|---|---|---|---|");

            foreach (var record in records)
            {
                var attrs = FormatAttributes(record.Attributes);
                var highlights = FormatHighlights(record.Highlights);
                sb.AppendLine($"| {EscapePipe(record.EntityName)} | {EscapePipe(record.Id)} | {record.Score:F2} | {EscapePipe(attrs)} | {EscapePipe(highlights)} |");
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

        private static string FormatStatusResults(string statusJson, string statisticsJson)
        {
            var sb = new StringBuilder(4096);

            SearchStatusResult statusResult;
            try
            {
                var statusOuter = JsonSerializer.Deserialize<SearchStatusValueWrapper>(statusJson, _jsonOptions);
                statusResult = statusOuter?.Value;
            }
            catch
            {
                sb.AppendLine("[Search Status]");
                sb.AppendLine(statusJson);
                return sb.ToString();
            }

            if (statusResult == null)
            {
                sb.AppendLine("[Search Status]");
                sb.AppendLine("Error: Unable to parse status response.");
                return sb.ToString();
            }

            // Header
            sb.AppendLine("[Dataverse Relevance Search Status]");
            sb.AppendLine();

            // Overall status
            sb.AppendLine("## Configuration");
            sb.AppendLine();
            sb.AppendLine($"| Setting | Value |");
            sb.AppendLine($"|---|---|");
            sb.AppendLine($"| Search Status | {FormatProvisionStatus(statusResult.Status)} |");
            sb.AppendLine($"| Lockbox Status | {statusResult.LockboxStatus ?? "N/A"} |");
            if (!string.IsNullOrEmpty(statusResult.CmkStatus))
                sb.AppendLine($"| CMK Status | {statusResult.CmkStatus} |");

            // Statistics (if available)
            if (!string.IsNullOrEmpty(statisticsJson))
            {
                try
                {
                    var statsOuter = JsonSerializer.Deserialize<SearchStatisticsValueWrapper>(statisticsJson, _jsonOptions);
                    if (statsOuter?.Value != null)
                    {
                        sb.AppendLine($"| Storage Size | {statsOuter.Value.StorageSizeInMb} MB ({statsOuter.Value.StorageSizeInBytes:N0} bytes) |");
                        sb.AppendLine($"| Document Count | {statsOuter.Value.DocumentCount:N0} |");
                    }
                }
                catch
                {
                    // Skip statistics if parse fails
                }
            }

            sb.AppendLine();

            // Entity status
            var entities = statusResult.EntityStatusResults;
            if (entities == null || entities.Count == 0)
            {
                if (string.Equals(statusResult.Status, "notprovisioned", StringComparison.OrdinalIgnoreCase))
                    sb.AppendLine("Search is not provisioned. No entities are indexed.");
                else
                    sb.AppendLine("No entities are currently indexed.");
                return sb.ToString();
            }

            sb.AppendLine($"## Indexed Entities ({entities.Count})");
            sb.AppendLine();
            sb.AppendLine("| Entity | OTC | Primary Field | Sync Status | Indexed Fields |");
            sb.AppendLine("|---|---|---|---|---|");

            foreach (var entity in entities.OrderBy(e => e.EntityLogicalName))
            {
                var fieldCount = entity.SearchableIndexedFieldInfoMap?.Count ?? 0;
                var fieldNames = entity.SearchableIndexedFieldInfoMap != null
                    ? string.Join(", ", entity.SearchableIndexedFieldInfoMap.Keys.OrderBy(k => k))
                    : "";
                sb.AppendLine($"| {EscapePipe(entity.EntityLogicalName)} | {entity.ObjectTypeCode} | {EscapePipe(entity.PrimaryNameField ?? "")} | {EscapePipe(entity.EntityStatus ?? "")} | {fieldCount} fields: {EscapePipe(fieldNames)} |");
            }

            // Many-to-many relationships
            var m2mRelations = statusResult.ManyToManyRelationshipSyncStatus;
            if (m2mRelations != null && m2mRelations.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"## Many-to-Many Relationships ({m2mRelations.Count})");
                sb.AppendLine();
                sb.AppendLine("| Relationship | Search Entity | Related Entity | Intersect Entity |");
                sb.AppendLine("|---|---|---|---|");

                foreach (var rel in m2mRelations.OrderBy(r => r.RelationshipName))
                {
                    sb.AppendLine($"| {EscapePipe(rel.RelationshipName ?? "")} | {EscapePipe(rel.SearchEntity ?? "")} | {EscapePipe(rel.RelatedEntity ?? "")} | {EscapePipe(rel.IntersectEntity ?? "")} |");
                }
            }

            return sb.ToString();
        }

        private static string FormatProvisionStatus(string status)
        {
            if (string.IsNullOrEmpty(status)) return "Unknown";
            return status.ToLowerInvariant() switch
            {
                "notprovisioned" => "Not Provisioned",
                "provisioninginprogress" => "Provisioning In Progress",
                "provisioned" => "Provisioned",
                _ => status
            };
        }

        private static string EscapePipe(string value) =>
            value.Replace("|", "\\|").Replace("\n", " ").Replace("\r", "");

        private static readonly JsonSerializerOptions _jsonOptions = new()
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        #region Search API Models (per Microsoft docs)

        private sealed class SearchResponseWrapper
        {
            [JsonPropertyName("response")]
            public string Response { get; set; }
        }

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

        #region Status/Statistics API Models

        private sealed class SearchStatusValueWrapper
        {
            public SearchStatusResult Value { get; set; }
        }

        private sealed class SearchStatusResult
        {
            public string Status { get; set; }

            [JsonPropertyName("lockboxstatus")]
            public string LockboxStatus { get; set; }

            [JsonPropertyName("cmkstatus")]
            public string CmkStatus { get; set; }

            [JsonPropertyName("entitystatusresults")]
            public List<EntityStatusInfo> EntityStatusResults { get; set; }

            [JsonPropertyName("manytomanyrelationshipsyncstatus")]
            public List<ManyToManyRelationshipSyncInfo> ManyToManyRelationshipSyncStatus { get; set; }
        }

        private sealed class EntityStatusInfo
        {
            [JsonPropertyName("entitylogicalname")]
            public string EntityLogicalName { get; set; } = "";

            [JsonPropertyName("objecttypecode")]
            public int ObjectTypeCode { get; set; }

            [JsonPropertyName("primarynamefield")]
            public string PrimaryNameField { get; set; }

            [JsonPropertyName("lastdatasynctimestamp")]
            public string LastDataSyncTimestamp { get; set; }

            [JsonPropertyName("lastprincipalobjectaccesssynctimestamp")]
            public string LastPrincipalObjectAccessSyncTimestamp { get; set; }

            [JsonPropertyName("entitystatus")]
            public string EntityStatus { get; set; }

            [JsonPropertyName("searchableindexedfieldinfomap")]
            public Dictionary<string, FieldStatusInfo> SearchableIndexedFieldInfoMap { get; set; }
        }

        private sealed class FieldStatusInfo
        {
            [JsonPropertyName("indexfieldname")]
            public string IndexFieldName { get; set; }
        }

        private sealed class ManyToManyRelationshipSyncInfo
        {
            [JsonPropertyName("relationshipName")]
            public string RelationshipName { get; set; }

            [JsonPropertyName("searchEntity")]
            public string SearchEntity { get; set; }

            [JsonPropertyName("relatedEntity")]
            public string RelatedEntity { get; set; }

            [JsonPropertyName("intersectEntity")]
            public string IntersectEntity { get; set; }
        }

        private sealed class SearchStatisticsValueWrapper
        {
            public SearchStatisticsResult Value { get; set; }
        }

        private sealed class SearchStatisticsResult
        {
            [JsonPropertyName("storagesizeinbytes")]
            public long StorageSizeInBytes { get; set; }

            [JsonPropertyName("storagesizeinmb")]
            public long StorageSizeInMb { get; set; }

            [JsonPropertyName("documentcount")]
            public long DocumentCount { get; set; }
        }

        #endregion
    }
}
