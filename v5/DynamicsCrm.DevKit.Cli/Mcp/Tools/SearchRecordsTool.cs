using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
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
            "Search Dataverse records or inspect Dataverse Search provisioning status.\n\n" +
            "WHEN TO USE:\n" +
            "- Find records by keywords across one or more searchable tables\n" +
            "- Diagnose whether Dataverse Search and entity indexes are ready\n" +
            "- detail_level='full' → raw API payload saved to {workspace_folder}/.devkit/search/, read it with file tools\n\n" +
            "RELATED TOOLS:\n" +
            "- execute_fetchxml → deterministic field filters and joins\n" +
            "- get_tables → discover searchable entity logical names")]
        public CallToolResult search_records(
            [Description("'search' (default) or 'status'.")] string action = "search",
            [Description("Required for search. 1-100 chars. Operators: + (AND), | (OR), - (NOT), * (wildcard), \"phrase\", () (group).")] string search_term = "",
            [Description("Comma-separated Display Names or logical names (e.g. 'Account,contact'). Empty = all searchable.")] string entities = "",
            [Description("Max results to return. 1-100 (default 50).")] int top = 50,
            [Description("OData filter applied after search. e.g. 'statecode eq 0'.")] string filter = "",
            [Description("DETAIL: 'compact' (default) or 'full' — full writes the raw API payload to {workspace_folder}/.devkit/search/.")] string detail_level = "compact",
            [Description("Required when detail_level='full'. Full payload saves to {workspace_folder}/.devkit/search/.")] string workspace_folder = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'search', 'status'.");

                var detailLevel = (detail_level ?? "compact").Trim().ToLowerInvariant();
                if (detailLevel is not ("compact" or "full"))
                    return Error($"'{detail_level}' is not a valid detail_level.", "Valid values: compact, full.");
                if (detailLevel == "full" && string.IsNullOrWhiteSpace(workspace_folder))
                    return Error("workspace_folder is required when detail_level='full'.",
                        "Provide the workspace folder — full payload saves to {workspace_folder}/.devkit/search/.");

                var normalized = action.Trim().ToLowerInvariant();
                if (normalized == "search")
                    return ExecuteSearch(search_term, entities, top, filter, detailLevel, workspace_folder);
                if (normalized == "status")
                    return ExecuteStatus(detailLevel, workspace_folder);

                return Error($"Invalid action '{action}'.", "Valid values: 'search', 'status'.");
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        // ── Action: search ──────────────────────────────────────────────────────

        private CallToolResult ExecuteSearch(string searchTerm, string entities, int top, string filter, string detailLevel, string workspaceFolder)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
                return Error("search_term is required when action='search'.",
                    "Provide 1-100 chars. Operators: + (AND), | (OR), - (NOT), * (wildcard), \"phrase\", () (group).");

            var trimmedTerm = searchTerm.Trim();
            if (trimmedTerm.Length > 100)
                return Error("search_term must be 100 characters or less.",
                    "Provide 1-100 chars. Operators: + (AND), | (OR), - (NOT), * (wildcard), \"phrase\", () (group).");

            if (top < 1) top = 1;
            if (top > 100) top = 100;

            var sw = Stopwatch.StartNew();
            var resolvedEntities = ResolveEntityList(entities);
            if (resolvedEntities.Failed != null)
            {
                var failed = resolvedEntities.Failed.Value;
                if (failed.Result.Status == ResolveStatus.Ambiguous)
                {
                    var entityMatches = failed.Result.Candidates.Select(c => new TableMatchEntry
                    {
                        DisplayName = c.DisplayName ?? "",
                        LogicalName = c.LogicalName ?? "",
                        SchemaName = c.SchemaName ?? ""
                    }).ToList();
                    return Error(
                        $"entities '{failed.Input}': {failed.Result.Error.Split("\r\n")[0]}",
                        "Re-call with a more specific entities value.",
                        new SearchRecordsResult { EntityMatches = entityMatches });
                }
                return Error(
                    $"entities '{failed.Input}': {failed.Result.Error.Split("\r\n")[0]}",
                    "Use get_tables to discover valid entity names.");
            }
            var requestBody = BuildSearchRequestBody(trimmedTerm, resolvedEntities.Values, top, filter);

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
            if (!string.IsNullOrEmpty(structured.ErrorMessage))
                return Error(structured.ErrorMessage, null, structured);

            structured.DetailLevel = detailLevel;
            if (detailLevel == "full")
                structured.FilePath = WriteFullPayload(workspaceFolder, "search", structured);

            // Inline payload is always compact: primary name only, raw attributes
            // live in the full-payload file (or are dropped in compact mode).
            SetRecordNames(structured);
            foreach (var record in structured.Records ?? [])
                record.Attributes = null;

            return Success(BuildSearchText(structured, sw.ElapsedMilliseconds), structured);
        }

        // ── Action: status ──────────────────────────────────────────────────────

        private CallToolResult ExecuteStatus(string detailLevel, string workspaceFolder)
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
            if (structured.Status == null)
                return Error(structured.ErrorMessage ?? "Unable to parse status response.", null, structured);

            structured.DetailLevel = detailLevel;
            if (detailLevel == "full")
                structured.FilePath = WriteFullPayload(workspaceFolder, "status", structured);

            // Inline payload is always compact: indexedFields live in the
            // full-payload file (or are dropped in compact mode).
            foreach (var entity in structured.Status.EntityStatusResults ?? [])
                entity.IndexedFields = null;

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

        private (List<string> Values, (string Input, ResolveResult<EntityMetadata> Result)? Failed) ResolveEntityList(string entities)
        {
            if (string.IsNullOrWhiteSpace(entities)) return ([], null);

            var resolved = new List<string>();
            foreach (var input in entities.Split(',').Select(e => e.Trim()).Where(e => !string.IsNullOrEmpty(e)))
            {
                var r = DisplayNameFirstResolver.ResolveEntity(_serviceClient, input, "search_records");
                if (!r.IsSuccess)
                    return (null, (input, r));
                if (!string.IsNullOrWhiteSpace(r.Value?.LogicalName))
                    resolved.Add(r.Value.LogicalName);
            }

            return (resolved.Distinct(StringComparer.OrdinalIgnoreCase).ToList(), null);
        }

        private static string BuildSearchRequestBody(string searchTerm, List<string> entities, int top, string filter)
        {
            var body = new Dictionary<string, object>
            {
                ["search"] = searchTerm,
                ["count"] = true,
                ["top"] = top
            };

            if (entities != null && entities.Count > 0)
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
                    ObjectTypeCode = GetObjectTypeCode(r),
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

        // ── Compact/full helpers ────────────────────────────────────────────────

        private Dictionary<string, string> _primaryNameMap;

        // Primary name attribute per entity, resolved once per process via
        // RetrieveAllEntities (EntityFilters.Entity) and cached.
        private string GetPrimaryNameAttribute(string entityLogicalName)
        {
            if (string.IsNullOrEmpty(entityLogicalName)) return null;
            if (_primaryNameMap == null)
            {
                var response = (RetrieveAllEntitiesResponse)_serviceClient.Execute(new RetrieveAllEntitiesRequest
                {
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                });
                var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
                foreach (var meta in response.EntityMetadata)
                    if (!string.IsNullOrEmpty(meta.PrimaryNameAttribute))
                        map[meta.LogicalName] = meta.PrimaryNameAttribute;
                _primaryNameMap = map;
            }
            return _primaryNameMap.TryGetValue(entityLogicalName, out var attr) ? attr : null;
        }

        private void SetRecordNames(SearchRecordsResult result)
        {
            if (result.Records == null || result.Records.Count == 0) return;
            foreach (var record in result.Records)
            {
                var primaryAttr = GetPrimaryNameAttribute(record.EntityName);
                if (primaryAttr == null || record.Attributes == null) continue;
                if (record.Attributes.TryGetValue(primaryAttr, out var value))
                    record.Name = value is JsonElement element
                        ? (element.ValueKind == JsonValueKind.String ? element.GetString() : element.ToString())
                        : value?.ToString();
            }
        }

        private static string WriteFullPayload(string workspaceFolder, string prefix, SearchRecordsResult payload)
        {
            var dir = Path.Combine(workspaceFolder, ".devkit", "search");
            Directory.CreateDirectory(dir);
            var filePath = Path.Combine(dir, $"{prefix}_{DateTime.Now:yyyyMMdd_HHmmss_fff}.json");
            File.WriteAllText(filePath, JsonSerializer.Serialize(payload, _jsonWriteOptions), Encoding.UTF8);
            return Path.GetFullPath(filePath);
        }

        // ── One-line text builders ──────────────────────────────────────────────

        private static string BuildSearchText(SearchRecordsResult r, long elapsedMs)
        {
            var n = r.ReturnedCount ?? 0;
            var total = r.TotalCount ?? n;
            var word = n == 1 ? "result" : "results";
            var trimmed = r.SearchTerm?.Trim('"') ?? "";
            var text = $"Found {n} {word} ({total} total) for \"{trimmed}\" in {elapsedMs}ms.";
            return r.FilePath == null ? text : text + $" Full output: {r.FilePath}";
        }

        private static string BuildStatusText(SearchRecordsResult r)
        {
            var s = r.Status;
            var indexedCount = s.EntityStatusResults?.Count ?? 0;
            var sb = new System.Text.StringBuilder(128);
            sb.Append("Search ").Append(FormatProvisionStatus(s.Status));
            sb.Append(" | ").Append(indexedCount).Append(" indexed entities");
            if (r.Statistics != null)
                sb.Append(" | ").Append(r.Statistics.StorageSizeInMb).Append(" MB, ").Append(r.Statistics.DocumentCount).Append(" docs");
            sb.Append('.');
            if (r.FilePath != null)
                sb.Append(" Full output: ").Append(r.FilePath);
            return sb.ToString();
        }

        private static int GetObjectTypeCode(QueryResult result)
        {
            if (result.Attributes != null &&
                result.Attributes.TryGetValue("@search.objecttypecode", out var value))
            {
                if (value is JsonElement element && element.TryGetInt32(out var jsonValue))
                    return jsonValue;
                if (value is int intValue)
                    return intValue;
                if (int.TryParse(value?.ToString(), out var parsed))
                    return parsed;
            }
            return result.ObjectTypeCode;
        }

        // Compatibility formatter retained for callers that consume the original
        // human-readable status contract. BuildStatusResult remains the canonical
        // structured representation used by the MCP action.
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

        private static readonly JsonSerializerOptions _jsonWriteOptions = new()
        {
            WriteIndented = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
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
