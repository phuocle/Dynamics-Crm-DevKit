#nullable enable
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System.ComponentModel;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public sealed class QueryDataTool(IMcpConnectionResolver connections) : McpToolBase
    {
        [McpServerTool(
            Name = "query_data",
            Title = "Query Dataverse records (FetchXML, SQL, or Relevance Search)",
            ReadOnly = true,
            Idempotent = true,
            Destructive = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Read-only Dataverse data queries via FetchXML, SQL SELECT, or Dataverse Relevance Search.\n\n" +
            "MODES:\n" +
            "- 'fetchxml': deterministic FetchXML query (single-page or bounded auto-paging)\n" +
            "- 'sql': Dataverse Web API SQL SELECT subset (JOINs, aggregates, WHERE, ORDER BY; no SELECT *)\n" +
            "- 'search': keyword relevance search across searchable tables (detail_level='full' saves raw payload under .devkit/search_records/)\n" +
            "- 'search_status': diagnose Dataverse Search provisioning and entity index readiness\n\n" +
            "Read docs://data_operations_guide, docs://instructions_for_sql, or schema://fetchxml before complex queries.")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'fetchxml', 'sql', 'search', or 'search_status'.")] string? mode = null,
            [Description("Required for fetchxml (<fetch>...), sql (SELECT ...), or search (1-100 chars keyword query). Omit for search_status.")] string? query = null,
            [Description("Max rows. Defaults: fetchxml 5000 (1-5000), sql 5000 (1-50000), search 50 (1-100).")] int? max_records = null,
            [Description("fetchxml/sql only: true = auto-page until max_records; false (default) = first page only.")] bool? get_all = null,
            [Description("search only: comma-separated Display Names or logical names (e.g. 'Account,contact'). Empty = all searchable.")] string? entities = null,
            [Description("search only: OData filter applied after search, e.g. 'statecode eq 0'.")] string? filter = null,
            [Description("search/search_status only: 'compact' (default) or 'full' (saves raw API payload under .devkit/search_records/).")] string? detail_level = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(mode))
                return Task.FromResult(Error("mode is required.", "Valid values: 'fetchxml', 'sql', 'search', 'search_status'."));

            var normalizedMode = mode.Trim().ToLowerInvariant();
            if (normalizedMode is not ("fetchxml" or "sql" or "search" or "search_status"))
                return Task.FromResult(Error($"Invalid mode '{mode.Trim()}'.", "Valid values: 'fetchxml', 'sql', 'search', 'search_status'."));

            return McpToolInvocation.InvokeAsync(connections, env, conn => normalizedMode switch
            {
                "fetchxml" => Task.FromResult(
                    new ExecuteFetchXmlTool(conn.OrgService)
                        .execute_fetchxml(query ?? "", max_records ?? 5000, get_all ?? false)),
                "sql" => new ExecuteSqlTool(conn.WebApi, conn.Metadata)
                    .execute_sql(query ?? "", max_records ?? 5000, get_all ?? false),
                "search" => new SearchRecordsTool(conn.OrgService, conn.Options, conn.WebApi)
                    .search_records(server, "search", query ?? "", entities ?? "", max_records ?? 50, filter ?? "", detail_level ?? "compact"),
                _ => new SearchRecordsTool(conn.OrgService, conn.Options, conn.WebApi)
                    .search_records(server, "status", "", "", 50, "", detail_level ?? "compact")
            }, cancellationToken);
        }
    }
}
