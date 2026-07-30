using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class SearchRecordsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public SearchRecordsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "search_records", Title = "Search records by keyword or check Relevance Search status",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(SearchRecordsResult)),
        Description(
            "Dataverse Relevance Search. Requires Relevance Search enabled.")]
        public CallToolResult search_records(
            [Description("'search' (default) or 'status'.")]
            string action = "search",
            [Description("Required for search. 1-100 chars. Operators: + (AND), | (OR), - (NOT), * (wildcard), \"phrase\", () (group).")]
            string search_term = "",
            [Description("Comma-separated Display Names or logical names (e.g. 'Account,contact'). Empty = all searchable.")]
            string entities = "",
            [Description("Max results to return. 1-100 (default 50).")]
            int top = 50,
            [Description("OData filter applied after search. e.g. 'statecode eq 0'.")]
            string filter = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'search', 'status'.");

                var normalized = action.Trim().ToLowerInvariant();
                if (normalized == "search")
                    return ExecuteSearch(search_term, entities, top, filter);
                if (normalized == "status")
                    return ExecuteStatus();

                return Error($"Invalid action '{action}'.", "Valid values: 'search', 'status'.");
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Action: search ──────────────────────────────────────────────────────

        private CallToolResult ExecuteSearch(string searchTerm, string entities, int top, string filter)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
                return Error("search_term is required when action='search'.");

            var trimmedTerm = searchTerm.Trim();
            if (trimmedTerm.Length > 100)
                return Error("search_term must be 100 characters or less.");

            if (top < 1) top = 1;
            if (top > 100) top = 100;

            var sw = Stopwatch.StartNew();
            var resolvedEntities = ResolveEntityList(entities);
            var requestBody = BuildSearchRequestBody(trimmedTerm, resolvedEntities, top, filter);

            var response = _serviceClient.ExecuteWebRequest(
                HttpMethod.Post, "searchquery", requestBody, null, "application/json");
            var json = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
                return Error($"Search API returned {(int)response.StatusCode} {response.ReasonPhrase}.", null, json);

            var wrapper = JsonSerializer.Deserialize<SearchResponseWrapper>(json, _jsonOptions);
            if (wrapper?.Response == null)
                return Error("Unexpected response format from search API.");

            sw.Stop();
            var structured = BuildSearchResult(wrapper.Response, trimmedTerm);
            return Success(BuildSearchText(structured, sw.ElapsedMilliseconds), structured);
        }

        // ── Action: status ──────────────────────────────────────────────────────

        private CallToolResult ExecuteStatus()
        {
            var statusJson = ExecuteStatusEndpoint("searchstatus");

            var statusWrapper = JsonSerializer.Deserialize<SearchResponseWrapper>(statusJson, _jsonOptions);
            if (statusWrapper?.Response == null)
                return Error("Unexpected response format from searchstatus API.");

            // searchstatistics is optional — any failure (HTTP fault, network,
            // malformed payload) bubbles up to the top-level catch so the AI can see it.
            string statisticsJson = null;
            var statsJson = ExecuteStatusEndpoint("searchstatistics");
            var statsWrapperLocal = JsonSerializer.Deserialize<SearchResponseWrapper>(statsJson, _jsonOptions);
            if (statsWrapperLocal?.Response != null)
                statisticsJson = statsWrapperLocal.Response;

            var structured = BuildStatusResult(statusWrapper.Response, statisticsJson);
            return Success(BuildStatusText(structured), structured);
        }

        private string ExecuteStatusEndpoint(string endpoint)
        {
            var response = _serviceClient.ExecuteWebRequest(
                HttpMethod.Get, endpoint, string.Empty, null, "application/json");
            var json = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
                throw new InvalidOperationException($"{endpoint} returned {(int)response.StatusCode} {response.ReasonPhrase}: {json}");

            return json;
        }

        // ── Helpers ─────────────────────────────────────────────────────────────

        private List<string> ResolveEntityList(string entities)
        {
            if (string.IsNullOrWhiteSpace(entities)) return [];

            var resolved = new List<string>();
            foreach (var input in entities.Split(',').Select(e => e.Trim()).Where(e => !string.IsNullOrEmpty(e)))
            {
                var r = DisplayNameFirstResolver.ResolveEntity(_serviceClient, input, "search_records");
                if (!r.IsSuccess)
                    throw new InvalidOperationException($"entities '{input}': {r.Error}");
                if (!string.IsNullOrWhiteSpace(r.Value?.LogicalName))
                    resolved.Add(r.Value.LogicalName);
            }

            return resolved.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

        private static string BuildSearchRequestBody(string searchTerm, List<string> entities, int top, string filter)
        {
            var body = new Dictionary<string, object>
            {
                ["search"] = searchTerm,
                ["count"] = true,
                ["top"] = top
            };

            if (entities.Count > 0)
                body["entities"] = JsonSerializer.Serialize(
                    entities.Select(e => new SearchEntity { Name = e }).ToList(),
                    _jsonOptions);

            if (!string.IsNullOrWhiteSpace(filter))
                body["filter"] = filter.Trim();

            return JsonSerializer.Serialize(body, _jsonOptions);
        }

        // ── Result builders ─────────────────────────────────────────────────────

        private static SearchRecordsResult BuildSearchResult(string innerJson, string searchTerm)
        {
            // Malformed JSON bubble ups to top-level catch — do NOT swallow.
            var results = JsonSerializer.Deserialize<SearchQueryResults>(innerJson, _jsonOptions);

            if (results?.Error != null)
            {
                return new SearchRecordsResult
                {
                    Action = "search",
                    SearchTerm = searchTerm,
                    ErrorCode = results.Error.Code,
                    ErrorMessage = results.Error.Message,
                    Records = []
                };
            }

            var records = results?.Value ?? [];
            return new SearchRecordsResult
            {
                Action = "search",
                SearchTerm = searchTerm,
                ReturnedCount = records.Count,
                TotalCount = results?.Count ?? records.Count,
                Records = records.Select(r => new SearchRecordEntry
                {
                    Id = r.Id,
                    EntityName = r.EntityName,
                    ObjectTypeCode = r.ObjectTypeCode,
                    Score = r.Score,
                    Attributes = r.Attributes ?? [],
                    Highlights = r.Highlights ?? []
                }).ToList(),
                QueryContext = results?.QueryContext == null ? null : new SearchQueryContextEntry
                {
                    OriginalQuery = results.QueryContext.OriginalQuery,
                    AlteredQuery = results.QueryContext.AlteredQuery,
                    Reason = results.QueryContext.Reason,
                    SpellSuggestions = results.QueryContext.SpellSuggestions
                },
                WarningList = results?.WarningList?.Count > 0 ? results.WarningList : null,
                ErrorList = results?.ErrorList?.Count > 0 ? results.ErrorList : null
            };
        }

        private static SearchRecordsResult BuildStatusResult(string statusJson, string statisticsJson)
        {
            // Malformed JSON bubble ups to top-level catch — do NOT swallow.
            var status = JsonSerializer.Deserialize<SearchStatusValueWrapper>(statusJson, _jsonOptions)?.Value;

            if (status == null)
                return new SearchRecordsResult { Action = "status", ErrorMessage = "Unable to parse status response." };

            SearchStatisticsEntry statistics = null;
            if (!string.IsNullOrEmpty(statisticsJson))
            {
                var stats = JsonSerializer.Deserialize<SearchStatisticsValueWrapper>(statisticsJson, _jsonOptions)?.Value;
                if (stats != null)
                    statistics = new SearchStatisticsEntry
                    {
                        StorageSizeInBytes = stats.StorageSizeInBytes,
                        StorageSizeInMb = stats.StorageSizeInMb,
                        DocumentCount = stats.DocumentCount
                    };
            }

            return new SearchRecordsResult
            {
                Action = "status",
                Status = new SearchStatusEntry
                {
                    Status = status.Status,
                    LockboxStatus = status.LockboxStatus,
                    CmkStatus = status.CmkStatus,
                    EntityStatusResults = status.EntityStatusResults?.Select(e => new SearchEntityStatusEntry
                    {
                        EntityLogicalName = e.EntityLogicalName,
                        ObjectTypeCode = e.ObjectTypeCode,
                        PrimaryNameField = e.PrimaryNameField,
                        EntityStatus = e.EntityStatus,
                        IndexedFields = e.SearchableIndexedFieldInfoMap?.Keys.OrderBy(k => k).ToList()
                    }).ToList(),
                    ManyToManyRelationshipSyncStatus = status.ManyToManyRelationshipSyncStatus?.Select(r => new SearchManyToManyRelationshipEntry
                    {
                        RelationshipName = r.RelationshipName,
                        SearchEntity = r.SearchEntity,
                        RelatedEntity = r.RelatedEntity,
                        IntersectEntity = r.IntersectEntity
                    }).ToList()
                },
                Statistics = statistics
            };
        }

        // ── One-line text builders ──────────────────────────────────────────────

        private static string BuildSearchText(SearchRecordsResult r, long elapsedMs)
        {
            if (!string.IsNullOrEmpty(r.ErrorMessage))
                return $"[Error] {r.ErrorCode}: {r.ErrorMessage}";

            var n = r.ReturnedCount ?? 0;
            var total = r.TotalCount ?? n;
            var word = n == 1 ? "result" : "results";
            var trimmed = r.SearchTerm?.Trim('"') ?? "";
            return $"[Success] Found {n} {word} ({total} total) for \"{trimmed}\" in {elapsedMs}ms.";
        }

        private static string BuildStatusText(SearchRecordsResult r)
        {
            if (r.Status == null)
                return $"[Error] {r.ErrorMessage ?? "Unable to parse status response."}";

            var s = r.Status;
            var indexedCount = s.EntityStatusResults?.Count ?? 0;
            var sb = new System.Text.StringBuilder(128);
            sb.Append("[Success] Search ").Append(FormatProvisionStatus(s.Status));
            sb.Append(" | ").Append(indexedCount).Append(" indexed entities");
            if (r.Statistics != null)
                sb.Append(" | ").Append(r.Statistics.StorageSizeInMb).Append(" MB, ").Append(r.Statistics.DocumentCount).Append(" docs");
            sb.Append('.');
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
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public List<string> SelectColumns { get; set; }

            [JsonPropertyName("searchColumns")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public List<string> SearchColumns { get; set; }

            [JsonPropertyName("filter")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public string Filter { get; set; }
        }

        private sealed class SearchQueryResults
        {
            // Verified PascalCase from Dev.AllInOne.Console probe (30.07.2026):
            //   { "Error": null, "Value": [...], "Facets": {},
            //     "QueryContext": {...}, "Count": 1, "WarningList": [],
            //     "ErrorList": [], "FullSyncIsInProgress": null }
            [JsonPropertyName("Error")]
            public SearchErrorDetail Error { get; set; }

            [JsonPropertyName("Value")]
            public List<QueryResult> Value { get; set; }

            [JsonPropertyName("Count")]
            public long Count { get; set; }

            [JsonPropertyName("Facets")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public Dictionary<string, object> Facets { get; set; }

            [JsonPropertyName("QueryContext")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public SearchQueryContext QueryContext { get; set; }

            [JsonPropertyName("WarningList")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public List<string> WarningList { get; set; }

            [JsonPropertyName("ErrorList")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public List<string> ErrorList { get; set; }

            [JsonPropertyName("FullSyncIsInProgress")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public bool? FullSyncIsInProgress { get; set; }
        }

        private sealed class SearchQueryContext
        {
            [JsonPropertyName("OriginalQuery")]
            public string OriginalQuery { get; set; }

            [JsonPropertyName("AlteredQuery")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public string AlteredQuery { get; set; }

            [JsonPropertyName("Reason")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public string Reason { get; set; }

            [JsonPropertyName("SpellSuggestions")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public List<string> SpellSuggestions { get; set; }
        }

        private sealed class SearchErrorDetail
        {
            [JsonPropertyName("Code")]
            public string Code { get; set; }

            [JsonPropertyName("Message")]
            public string Message { get; set; }
        }

        private sealed class QueryResult
        {
            // Exact PascalCase JSON keys returned by Dataverse /searchquery.
            // Verified via Dev.AllInOne.Console probe on 30.07.2026:
            //   "Id": "...",
            //   "EntityName": "account",
            //   "ObjectTypeCode": 0,         <-- server always returns 0 here;
            //                                   real OTC is inside attributes["@search.objecttypecode"]
            //   "Attributes": { ..., "@search.objecttypecode": 1, ... },
            //   "Highlights": { "name": ["..."] },
            //   "Score": 14.69,
            //   "SemanticSearchResult": null
            [JsonPropertyName("Id")]
            public string Id { get; set; } = "";

            [JsonPropertyName("EntityName")]
            public string EntityName { get; set; } = "";

            [JsonPropertyName("ObjectTypeCode")]
            public int ObjectTypeCode { get; set; }

            [JsonPropertyName("Attributes")]
            public Dictionary<string, object> Attributes { get; set; } = [];

            [JsonPropertyName("Highlights")]
            public Dictionary<string, string[]> Highlights { get; set; } = [];

            [JsonPropertyName("Score")]
            public double Score { get; set; }

            [JsonPropertyName("SemanticSearchResult")]
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
            public object SemanticSearchResult { get; set; }
        }

        #endregion

        #region Status/Statistics API Models

        private sealed class SearchStatusValueWrapper
        {
            [JsonPropertyName("value")]
            public SearchStatusResult Value { get; set; }
        }

        private sealed class SearchStatusResult
        {
            [JsonPropertyName("status")]
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
            [JsonPropertyName("value")]
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
