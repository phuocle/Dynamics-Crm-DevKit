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
    public sealed class InspectMetadataTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] TableOptionKeys = ["custom_only", "include_intersect", "names"];
        private static readonly string[] SolutionComponentOptionKeys = ["include_active_layers", "active_layers_only"];
        private static readonly string[] CustomControlOptionKeys = ["name_match", "kind", "data_type"];

        [McpServerTool(
            Name = "inspect_metadata",
            Title = "Inspect tables, solution components, or installed PCF controls",
            ReadOnly = true,
            Idempotent = true,
            Destructive = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Inspect Dataverse static metadata catalogs. Always use resource='tables' for entity/attribute metadata (do NOT call execute_webapi with EntityDefinitions).\n\n" +
            "RESOURCES:\n" +
            "- 'tables' (default): list tables (name empty) or inspect entity attributes, relationships, alternate keys, and formula clone metadata (name set; detail_level='full' for formulas/cascades)\n" +
            "- 'solution_components': list components in a named solution with optional ActiveLayer (unmanaged) checks\n" +
            "- 'custom_controls': discover installed field or dataset PCF controls and manifest properties\n\n" +
            "Read docs://schema_tools_guide for schema rules before modifying metadata.")]
        public Task<CallToolResult> InvokeAsync(
            [Description("'tables' (default), 'solution_components', or 'custom_controls'.")] string? resource = "tables",
            [Description("tables: entity logical/display name (empty = list). solution_components: required solution unique/display name. custom_controls: optional PCF name filter.")] string? name = null,
            [Description("tables only: list keyword filter, or detail attribute prefix/word-boundary filter.")] string? filter = null,
            [Description("tables detail only: 'compact' (default), 'standard', or 'full'.")] string? detail_level = null,
            [Description("tables list only: 1-500 (default 100).")] int? max_records = null,
            [Description("Resource-specific options. tables: {custom_only, include_intersect, names}. solution_components: {include_active_layers, active_layers_only}. custom_controls: {name_match ('contains'|'prefix'|'exact'), kind ('field'|'dataset'), data_type}.")] JsonObject? options = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            var normalizedResource = string.IsNullOrWhiteSpace(resource)
                ? "tables"
                : resource.Trim().ToLowerInvariant();

            if (normalizedResource is not ("tables" or "solution_components" or "custom_controls"))
                return Task.FromResult(Error(
                    $"Invalid resource '{resource?.Trim()}'.",
                    "Valid values: 'tables', 'solution_components', 'custom_controls'."));

            var payload = McpPayload.From(options);
            var allowedKeys = normalizedResource switch
            {
                "tables" => TableOptionKeys,
                "solution_components" => SolutionComponentOptionKeys,
                _ => CustomControlOptionKeys
            };
            var docUri = normalizedResource == "tables" ? "docs://schema_tools_guide" : null;
            var keyError = payload.ValidateAllowedKeys(allowedKeys, $"inspect_metadata({normalizedResource})", docUri);
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    return normalizedResource switch
                    {
                        "tables" => await new GetTablesTool(conn.Metadata).get_tables(
                            name ?? "",
                            filter ?? "",
                            payload.GetBool("custom_only", false),
                            payload.GetBool("include_intersect", false),
                            payload.GetString("names", ""),
                            detail_level ?? "compact",
                            max_records ?? 100).ConfigureAwait(false),

                        "solution_components" => new GetSolutionComponentsTool(conn.OrgService).get_solution_components(
                            name ?? "",
                            payload.GetBool("include_active_layers", false),
                            payload.GetBool("active_layers_only", false)),

                        _ => new GetCustomControlsTool(conn.OrgService).get_custom_controls(
                            name ?? "",
                            payload.GetString("name_match", "contains"),
                            payload.GetString("kind", ""),
                            payload.GetString("data_type", ""))
                    };
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check options types and retry.");
                }
            }, cancellationToken);
        }
    }
}
