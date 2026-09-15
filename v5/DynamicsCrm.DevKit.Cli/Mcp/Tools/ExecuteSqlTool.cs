using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net.Http;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.ServiceModel;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteSqlTool : McpToolBase
    {
        private readonly IWebApiExecutor _webApi;
        private readonly MetadataService _metadataService;

        public ExecuteSqlTool(IWebApiExecutor webApi, MetadataService metadataService)
        {
            _webApi = webApi ?? throw new ArgumentNullException(nameof(webApi));
            _metadataService = metadataService ?? throw new ArgumentNullException(nameof(metadataService));
        }

        [McpServerTool(
            Name = "execute_sql",
            Title = "Run a SQL SELECT query",
            Idempotent = true,
            Destructive = false,
            ReadOnly = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(SqlQueryResult)),
        Description(
            "Run a SQL SELECT query against Dataverse in single-page or auto-paging mode.\n\n" +
            "WHEN TO USE:\n" +
            "- Query Dataverse records with the Dataverse Web API SQL subset (JOINs, aggregates, WHERE, ORDER BY)\n" +
            "- Read-only analytical queries, multi-table joins, or summaries after validating logical names\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → discover entity and attribute logical names before querying\n" +
            "- execute_fetchxml → alternative for FetchXML-specific conditions or deep hierarchies\n" +
            "- execute_webapi → raw REST calls (non-SQL; ?sql= returns guidance to call execute_sql)\n" +
            "- docs://instructions_for_sql → Dataverse SQL syntax rules and conversion cheat sheet")]
        public async Task<CallToolResult> execute_sql(
            [Description("SQL SELECT query. Lowercase logical names. No SELECT *.")] string sql = "",
            [Description("1-50000. Default 5000. Use 10-100 for samples.")] int max_records = 5000,
            [Description("true = auto-page until max_records. false = first page only.")] bool get_all = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(sql))
                    return Error("sql is required.",
                        "Provide a SQL SELECT query. Read docs://instructions_for_sql for syntax examples.");

                sql = sql.Trim();

                if (sql.EndsWith(";", StringComparison.Ordinal))
                    sql = sql.Substring(0, sql.Length - 1).Trim();

                // Reject stacked statements: ';' is only legal as the final terminator (stripped above).
                // Quote-aware so a semicolon inside a string literal (e.g. WHERE name = 'a;b') does not false-positive.
                if (ContainsSemicolonOutsideLiteral(sql))
                    return Error("Multiple statements are not supported.",
                        "execute_sql accepts a single SELECT statement only — remove the extra statements separated by ';'. " +
                        "Dataverse SQL is read-only; use manage_record for create, update, or delete operations.");

                if (max_records < 1 || max_records > 50000)
                    return Error("max_records must be between 1 and 50000.",
                        "Use a value from 1 to 50000. Default is 5000; use 10-100 for samples.");

                // Unwrap TOP n — the ?sql= endpoint rejects TOP; convert it to max_records instead.
                if (SqlQueryResult.TopKeywordRegex.IsMatch(sql) && !SqlQueryResult.TopRegex.IsMatch(sql))
                    return Error("TOP must be a positive integer supported by execute_sql.",
                        "Use TOP n or TOP (n), where n is a positive integer, or pass the limit with max_records.");

                var topMatch = SqlQueryResult.TopRegex.Match(sql);
                if (topMatch.Success)
                {
                    var topText = topMatch.Groups[2].Success ? topMatch.Groups[2].Value : topMatch.Groups[3].Value;
                    if (!int.TryParse(topText, out var top) || top < 1)
                        return Error("TOP must be a positive integer supported by execute_sql.",
                            "Use TOP n or TOP (n), where n is a positive integer, or pass the limit with max_records.");
                    // Reject a numeric prefix of an expression or malformed parentheses before rewriting TOP.
                    // A following '*' is left to the existing SELECT-star guard below.
                    if (Regex.IsMatch(sql.Substring(topMatch.Length), @"^\s*(?:percent\b|with\s+ties\b|[(),.+\-/%&|^~<>=])", RegexOptions.IgnoreCase))
                        return Error("TOP must be a positive integer supported by execute_sql.",
                            "Use TOP n or TOP (n), where n is a positive integer, or pass the limit with max_records.");
                    max_records = Math.Min(max_records, top);
                    sql = SqlQueryResult.TopRegex.Replace(sql, m => "SELECT " + m.Groups[1].Value, 1).Trim();
                }

                var firstWord = sql.Split(new[] { ' ', '\t', '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
                if (firstWord.Length == 0)
                    return Error("sql is required.",
                        "Provide a SQL SELECT query. Read docs://instructions_for_sql for syntax examples.");

                if (!string.Equals(firstWord[0], "SELECT", StringComparison.OrdinalIgnoreCase))
                    return Error("Only SELECT statements are supported.",
                        "Dataverse SQL is read-only. Use manage_record for create, update, or delete operations.");

                var syntaxSql = MaskStringLiterals(sql);

                if (SqlQueryResult.SelectStarRegex.IsMatch(syntaxSql))
                    return Error("SELECT * is not supported.",
                        "Call get_tables(entity_name='<table>', detail_level='standard') to view column names, then name required columns explicitly.");

                if (SqlQueryResult.HavingRegex.IsMatch(syntaxSql))
                    return Error("HAVING clause is not supported.",
                        "Filter with WHERE before aggregation, or aggregate client-side from the returned rows. Filtering aggregate groups client-side is a separate operation and must account for partial results.");

                if (Regex.IsMatch(syntaxSql, @"\bwhere\b[^)]*\(\s*select\b", RegexOptions.IgnoreCase) ||
                    SqlQueryResult.ExistsRegex.IsMatch(syntaxSql))
                    return Error("Subqueries in WHERE clause are not supported.",
                        "Rewrite with INNER JOIN on the related table instead. Read docs://instructions_for_sql for the conversion cheat sheet.");

                if (SqlQueryResult.OffsetFetchRegex.IsMatch(syntaxSql))
                    return Error("OFFSET/FETCH is not supported.",
                        "Use max_records and get_all parameters for paging instead.");

                // Validate base table (FROM clause) and resolve it to the entity set name
                // required as the URL path segment of the ?sql= endpoint.
                var fromMatch = SqlQueryResult.FromRegex.Match(sql);
                var entitySetName = (string)null;
                if (fromMatch.Success)
                {
                    var table = fromMatch.Groups[1].Value.ToLowerInvariant();
                    EntityMetadata entityMetadata;
                    try
                    {
                        entityMetadata = await _metadataService.FetchEntityMetadataAsync(table);
                    }
                    catch (Exception metadataException)
                    {
                        if (IsEntityNotFound(metadataException))
                            return Error($"Table '{table}' was not found.",
                                "Call get_tables(entity_name='<table>', detail_level='standard') to check the correct logical name, or get_tables() to list all tables.");
                        return ThrowExceptionFriendly(metadataException);
                    }
                    if (entityMetadata == null || string.IsNullOrEmpty(entityMetadata.EntitySetName))
                        return Error("Metadata response is missing EntitySetName.",
                            "Retry metadata discovery with get_tables(entity_name='<table>', detail_level='standard').");
                    entitySetName = entityMetadata.EntitySetName;
                }

                var rows = new List<Dictionary<string, object>>();
                var requestUrl = $"{entitySetName ?? "accounts"}?sql={Uri.EscapeDataString(sql)}";
                var truncated = false;
                var pageSize = Math.Min(max_records, 5000);

                while (true)
                {
                    var response = await _webApi.ExecuteWebRequestAsync(
                        HttpMethod.Get,
                        requestUrl,
                        null,
                        new Dictionary<string, List<string>>
                        {
                            ["Prefer"] = new List<string>
                            {
                                $"odata.maxpagesize={pageSize}",
                                "odata.include-annotations=\"*\""
                            }
                        },
                        default);

                    // ExecuteWebRequestAsync throws on non-success status — server faults (400 etc.)
                    // surface via catch → ThrowExceptionFriendly with Web API status detail and [Hint].
                    var body = await response.Content.ReadAsStringAsync();

                    using var doc = JsonDocument.Parse(body);
                    var root = doc.RootElement;

                    var hasNextLink = root.TryGetProperty("@odata.nextLink", out var nextLink) &&
                        nextLink.ValueKind == JsonValueKind.String &&
                        !string.IsNullOrWhiteSpace(nextLink.GetString());

                    if (root.TryGetProperty("value", out var value) && value.ValueKind == JsonValueKind.Array)
                    {
                        foreach (var row in value.EnumerateArray())
                        {
                            if (rows.Count >= max_records) { truncated = true; break; }
                            var dict = new Dictionary<string, object>();
                            foreach (var prop in row.EnumerateObject())
                                dict[prop.Name] = prop.Value.Clone();
                            rows.Add(dict);
                        }
                    }

                    if (truncated)
                        break;

                    if (!get_all)
                    {
                        truncated = hasNextLink;
                        break;
                    }

                    // Stop at the cap without probing another page. The cap alone does not prove truncation.
                    if (rows.Count >= max_records)
                    {
                        truncated = hasNextLink;
                        break;
                    }

                    if (hasNextLink)
                    {
                        var next = nextLink.GetString();
                        var apiIndex = next.IndexOf("/api/data/", StringComparison.OrdinalIgnoreCase);
                        requestUrl = apiIndex >= 0
                            ? next.Substring(apiIndex + "/api/data/".Length)
                            : next;
                        if (requestUrl.StartsWith("v9.2/", StringComparison.OrdinalIgnoreCase))
                            requestUrl = requestUrl.Substring("v9.2/".Length);
                        continue;
                    }
                    break;
                }

                var result = new SqlQueryResult
                {
                    RowCount = rows.Count,
                    MaxRecords = max_records,
                    GetAll = get_all,
                    ResultTruncated = truncated,
                    ExecutedSql = sql,
                    RequestUrl = requestUrl,
                    Rows = rows
                };
                return Success(result.Summary, result);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private static bool ContainsSemicolonOutsideLiteral(string sql)
        {
            var inLiteral = false;
            for (var i = 0; i < sql.Length; i++)
            {
                var c = sql[i];
                if (inLiteral)
                {
                    if (c == '\'')
                    {
                        if (i + 1 < sql.Length && sql[i + 1] == '\'') { i++; continue; } // T-SQL '' escape
                        inLiteral = false;
                    }
                    continue;
                }
                if (c == '\'') inLiteral = true;
                else if (c == ';') return true;
            }
            return false;
        }

        private static string MaskStringLiterals(string sql)
        {
            var chars = sql.ToCharArray();
            var inLiteral = false;
            for (var i = 0; i < chars.Length; i++)
            {
                if (inLiteral)
                {
                    if (chars[i] == '\'')
                    {
                        if (i + 1 < chars.Length && chars[i + 1] == '\'')
                        {
                            chars[i] = ' ';
                            chars[++i] = ' ';
                            continue;
                        }
                        chars[i] = ' ';
                        inLiteral = false;
                    }
                    else
                    {
                        chars[i] = ' ';
                    }
                }
                else if (chars[i] == '\'')
                {
                    chars[i] = ' ';
                    inLiteral = true;
                }
            }
            return new string(chars);
        }

        private static bool IsEntityNotFound(Exception exception)
        {
            for (var current = exception; current != null; current = current.InnerException)
            {
                if (current is FaultException<OrganizationServiceFault> fault && fault.Detail != null &&
                    fault.Detail.ErrorCode == unchecked((int)0x80041102))
                    return true;
            }
            return false;
        }
    }
}
