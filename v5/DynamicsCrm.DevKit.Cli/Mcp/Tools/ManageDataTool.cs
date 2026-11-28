#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public sealed class ManageDataTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] RecordKeys =
        [
            "fields_json", "columns", "related_entity_name", "related_record_id", "relationship_name", "component_type"
        ];

        private static readonly string[] BulkKeys =
        [
            "records_json", "max_parallelism", "bypass_custom_logic", "key_fields"
        ];

        private static readonly string[] FileKeys =
        [
            "column_name", "file_path", "content_base64", "file_name", "full_size"
        ];

        private static readonly string[] DeletedKeys =
        [
            "record_ids", "name_filter", "max_records", "turn", "retention_days", "name_prefix"
        ];

        private static readonly string[] DemoKeys =
        [
            "from_date", "to_date", "count", "fields", "seed", "field_overrides"
        ];

        [McpServerTool(
            Name = "manage_data",
            Title = "Manage Dataverse records, bulk upserts, record files, deleted records, and demo data",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage Dataverse runtime data: single-record CRUD/associations/solutions, parallel bulk upsert, file/image columns, soft-deleted records (Recycle Bin), and realistic demo data.\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'record': create | read | update | delete | associate | disassociate | add_to_solution | remove_from_solution | list_solutions | add_solution_component\n" +
            "- 'bulk': upsert (default) — parallel create/update/upsert by GUID or alternate key (up to 1000 rows)\n" +
            "- 'file': info | upload | download | delete — Dataverse file and image columns\n" +
            "- 'deleted': list (default) | detail | restore | status | turn — Recycle Bin / soft-deleted records\n" +
            "- 'demo': generate (default) — generate realistic demo records with date distribution\n\n" +
            "Read docs://data_operations_guide for full payload keys and JSON syntax. For read-only queries, use query_data.")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'record', 'bulk', 'file', 'deleted', or 'demo'.")] string? resource = null,
            [Description("Action for the selected resource (e.g. 'create', 'update', 'delete', 'upsert', 'upload', 'list', 'restore', 'generate').")] string? action = null,
            [Description("Entity Display Name or logical name (e.g. 'Account' or 'account').")] string? entity_name = null,
            [Description("Record GUID (required for record read/update/delete/associate/disassociate, file actions, deleted detail/restore).")] string? record_id = null,
            [Description("Unmanaged solution Display or unique name (for record solution actions).")] string? solution_name = null,
            [Description("Resource-specific JSON object. record: {fields_json, columns, related_entity_name, related_record_id, relationship_name, component_type}. bulk: {records_json, max_parallelism, bypass_custom_logic, key_fields}. file: {column_name, file_path, content_base64, file_name, full_size}. deleted: {record_ids, name_filter, max_records, turn, retention_days, name_prefix}. demo: {from_date, to_date, count, fields, seed, field_overrides}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'record', 'bulk', 'file', 'deleted', 'demo'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("record" or "bulk" or "file" or "deleted" or "demo"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'record', 'bulk', 'file', 'deleted', 'demo'."));

            var p = McpPayload.From(payload);
            var allowedKeys = normalizedResource switch
            {
                "record" => RecordKeys,
                "bulk" => BulkKeys,
                "file" => FileKeys,
                "deleted" => DeletedKeys,
                _ => DemoKeys
            };
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_data({normalizedResource})", "docs://data_operations_guide");
            if (keyError != null)
                return Task.FromResult(keyError);

            var normalizedAction = action?.Trim().ToLowerInvariant() ?? "";
            if (normalizedResource == "bulk" && !string.IsNullOrEmpty(normalizedAction) && normalizedAction != "upsert")
                return Task.FromResult(Error($"Invalid action '{action?.Trim()}' for resource 'bulk'.", "Valid action: 'upsert' (or omit action)."));
            if (normalizedResource == "demo" && !string.IsNullOrEmpty(normalizedAction) && normalizedAction != "generate")
                return Task.FromResult(Error($"Invalid action '{action?.Trim()}' for resource 'demo'.", "Valid action: 'generate' (or omit action)."));

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    return normalizedResource switch
                    {
                        "record" => new ManageRecordTool(conn.OrgService, conn.Options, conn.Context).manage_record(
                            action ?? "",
                            entity_name ?? "",
                            record_id ?? "",
                            p.GetJsonString("fields_json"),
                            p.GetString("columns"),
                            p.GetString("related_entity_name"),
                            p.GetString("related_record_id"),
                            p.GetString("relationship_name"),
                            solution_name,
                            p.GetJsonElement("component_type")),

                        "bulk" => await new UpsertRecordsTool(conn.Client, conn.Options, conn.Context).upsert_records(
                            entity_name ?? "",
                            p.GetJsonString("records_json"),
                            p.GetInt("max_parallelism", 0),
                            p.GetBool("bypass_custom_logic", false),
                            p.GetJsonString("key_fields")).ConfigureAwait(false),

                        "file" => await new ManageRecordFileTool(conn.OrgService, conn.Options, conn.Context).manage_record_file(
                            server,
                            action ?? "",
                            entity_name ?? "",
                            p.GetString("column_name"),
                            record_id ?? "",
                            p.GetString("file_path"),
                            p.GetString("content_base64"),
                            p.GetString("file_name"),
                            p.GetBool("full_size", false)).ConfigureAwait(false),

                        "deleted" => new ManageDeletedRecordsTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi).manage_deleted_records(
                            string.IsNullOrWhiteSpace(action) ? "list" : action,
                            entity_name ?? "",
                            record_id ?? "",
                            p.GetStringArray("record_ids"),
                            p.GetString("name_filter"),
                            p.GetInt("max_records", 100),
                            p.GetString("turn"),
                            p.GetInt("retention_days", 30),
                            p.GetString("name_prefix", "[RESTORE] ")),

                        _ => await new GenerateDemoDataTool(conn.OrgService, conn.Options).generate_demo_data(
                            server,
                            entity_name ?? "",
                            p.GetString("from_date"),
                            p.GetString("to_date"),
                            p.GetInt("count", 10),
                            p.GetString("fields"),
                            p.GetInt("seed", 0),
                            p.GetJsonString("field_overrides")).ConfigureAwait(false)
                    };
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check payload types and retry. Read docs://data_operations_guide for details.");
                }
            }, cancellationToken);
        }
    }
}
