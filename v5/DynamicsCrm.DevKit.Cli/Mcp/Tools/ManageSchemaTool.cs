#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
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
    public sealed class ManageSchemaTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] TableKeys =
        [
            "display_name", "display_collection_name", "description", "primary_attribute_name",
            "primary_attribute_display_name", "ownership_type", "table_type", "is_quick_create_enabled",
            "is_audit_enabled", "is_search_enabled", "primary_attribute_max_length", "schema_name",
            "logical_name", "primary_attribute_schema_name", "icon_vector_name",
            "is_duplicate_detection_enabled", "is_access_teams_enabled", "is_document_management_enabled",
            "is_onenote_integration_enabled", "is_mail_merge_enabled", "is_custom_help_enabled",
            "custom_help_url", "is_mobile_offline_enabled", "is_available_offline",
            "is_visible_in_mobile", "is_visible_in_mobile_client", "is_read_only_in_mobile_client",
            "is_retention_enabled"
        ];

        private static readonly string[] ColumnKeys =
        [
            "logical_name", "attribute_type", "display_name", "description", "required_level",
            "max_length", "min_value", "max_value", "precision", "format", "behavior",
            "precision_source", "options", "global_optionset_name", "lookup_target",
            "lookup_relationship_name", "true_label", "false_label", "add_options",
            "update_options", "delete_options", "is_audit_enabled", "is_valid_for_advanced_find",
            "is_secured", "is_sortable", "default_value", "schema_name", "formula_definition",
            "formula_source_type", "can_store_full_image", "auto_number_format",
            "clear_auto_number", "auto_number_seed", "is_alternate_key", "formula_expression",
            "raw_formula_definition"
        ];

        private static readonly string[] RelationshipKeys =
        [
            "relationship_name", "referenced_entity", "referencing_entity", "entity1", "entity2",
            "intersect_entity_name", "attribute_name", "cascade_preset", "cascade_assign",
            "cascade_delete", "cascade_merge", "cascade_reparent", "cascade_share",
            "cascade_unshare", "menu_behavior", "menu_group", "menu_order",
            "lookup_display_name", "is_hierarchical"
        ];

        private static readonly string[] ChoiceKeys =
        [
            "optionset_name", "display_name", "filter", "description", "options",
            "add_options", "update_options", "remove_options", "option_colors"
        ];

        [McpServerTool(
            Name = "manage_schema",
            Title = "Manage Dataverse tables, columns, relationships, and global choices",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Create or update Dataverse schema metadata: tables, columns (including lookups, choices, autonumbers, alternate keys, Power Fx/Calculated/Rollup formulas), 1:N/N:N/polymorphic relationships, and global choices.\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'table': upsert (default — auto-detects create vs update by logical_name), create, or update\n" +
            "- 'column': upsert (default — auto-detects create vs update), create, or update\n" +
            "- 'relationship': create_1n | create_nn | update | delete | add_target | remove_target\n" +
            "- 'choice': list | detail | create | update\n\n" +
            "Read docs://schema_tools_guide for full payload properties. Use inspect_metadata(resource='tables') to inspect existing schema and manage_admin(resource='publish') to publish changes.")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'table', 'column', 'relationship', or 'choice'.")] string? resource = null,
            [Description("Action: table/column='upsert' (default)|'create'|'update'; relationship='create_1n'|'create_nn'|'update'|'delete'|'add_target'|'remove_target'; choice='list'|'detail'|'create'|'update'.")] string? action = null,
            [Description("Table Display or logical name (required for column; optional for table/relationship polymorphic).")] string? entity_name = null,
            [Description("Target name: table logical_name, column logical_name, relationship_name, or global choice optionset_name.")] string? name = null,
            [Description("Unmanaged solution Display or unique name (required for creates and label-only choice adds).")] string? solution_name = null,
            [Description("Resource-specific metadata properties JSON object. Read docs://schema_tools_guide for all keys.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'table', 'column', 'relationship', 'choice'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("table" or "column" or "relationship" or "choice"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'table', 'column', 'relationship', 'choice'."));

            var p = McpPayload.From(payload);
            var allowedKeys = normalizedResource switch
            {
                "table" => TableKeys,
                "column" => ColumnKeys,
                "relationship" => RelationshipKeys,
                _ => ChoiceKeys
            };
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_schema({normalizedResource})", "docs://schema_tools_guide");
            if (keyError != null)
                return Task.FromResult(keyError);

            var normalizedAction = action?.Trim().ToLowerInvariant() ?? "";
            if (normalizedResource is "table" or "column" &&
                !string.IsNullOrEmpty(normalizedAction) &&
                normalizedAction is not ("upsert" or "create" or "update"))
            {
                return Task.FromResult(Error(
                    $"Invalid action '{action?.Trim()}' for resource '{normalizedResource}'.",
                    "Valid values: 'upsert' (default), 'create', or 'update'."));
            }

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    switch (normalizedResource)
                    {
                        case "table":
                        {
                            var logicalName = !string.IsNullOrWhiteSpace(name)
                                ? name
                                : (!string.IsNullOrWhiteSpace(entity_name) ? entity_name : p.GetString("logical_name"));
                            return new ManageTableTool(conn.OrgService, conn.Options, conn.Context).manage_table(
                                p.GetString("display_name"),
                                p.GetString("display_collection_name"),
                                solution_name ?? "",
                                p.GetString("description"),
                                p.GetString("primary_attribute_name"),
                                p.GetString("primary_attribute_display_name"),
                                p.GetString("ownership_type"),
                                p.GetString("table_type"),
                                p.GetNullableBool("is_quick_create_enabled"),
                                p.GetNullableBool("is_audit_enabled"),
                                p.GetNullableBool("is_search_enabled"),
                                p.GetInt("primary_attribute_max_length", 100),
                                p.GetString("schema_name"),
                                logicalName,
                                p.GetString("primary_attribute_schema_name"),
                                p.GetString("icon_vector_name"),
                                p.GetNullableBool("is_duplicate_detection_enabled"),
                                p.GetNullableBool("is_access_teams_enabled"),
                                p.GetNullableBool("is_document_management_enabled"),
                                p.GetNullableBool("is_onenote_integration_enabled"),
                                p.GetNullableBool("is_mail_merge_enabled"),
                                p.GetNullableBool("is_custom_help_enabled"),
                                p.GetNullableString("custom_help_url"),
                                p.GetNullableBool("is_mobile_offline_enabled"),
                                p.GetNullableBool("is_available_offline"),
                                p.GetNullableBool("is_visible_in_mobile"),
                                p.GetNullableBool("is_visible_in_mobile_client"),
                                p.GetNullableBool("is_read_only_in_mobile_client"),
                                p.GetNullableBool("is_retention_enabled"));
                        }

                        case "column":
                        {
                            var logicalName = !string.IsNullOrWhiteSpace(name) ? name : p.GetString("logical_name");
                            var worker = new ManageColumnTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi, connections);
                            worker._workspaceFolder = await WorkspaceFolderHelper.GetAsync(server, cancellationToken).ConfigureAwait(false);
                            return worker.manage_column(
                                entity_name ?? "",
                                logicalName,
                                p.GetString("attribute_type"),
                                p.GetString("display_name"),
                                solution_name ?? "",
                                p.GetString("description"),
                                p.GetString("required_level"),
                                p.GetInt("max_length", 0),
                                p.GetNullableDouble("min_value"),
                                p.GetNullableDouble("max_value"),
                                p.GetInt("precision", -1),
                                p.GetString("format"),
                                p.GetString("behavior"),
                                p.GetInt("precision_source", -1),
                                p.GetJsonString("options"),
                                p.GetString("global_optionset_name"),
                                p.GetString("lookup_target"),
                                p.GetString("lookup_relationship_name"),
                                p.GetString("true_label"),
                                p.GetString("false_label"),
                                p.GetJsonString("add_options"),
                                p.GetJsonString("update_options"),
                                p.GetJsonString("delete_options"),
                                p.GetNullableBool("is_audit_enabled"),
                                p.GetNullableBool("is_valid_for_advanced_find"),
                                p.GetNullableBool("is_secured"),
                                p.GetNullableBool("is_sortable"),
                                p.GetString("default_value"),
                                p.GetString("schema_name"),
                                p.GetString("formula_definition"),
                                p.GetString("formula_source_type"),
                                p.GetNullableBool("can_store_full_image"),
                                p.GetString("auto_number_format"),
                                p.GetNullableBool("clear_auto_number"),
                                p.GetNullableLong("auto_number_seed"),
                                p.GetNullableBool("is_alternate_key"),
                                p.GetNullableString("formula_expression"),
                                p.GetNullableString("raw_formula_definition"));
                        }

                        case "relationship":
                        {
                            var relationshipName = !string.IsNullOrWhiteSpace(name) ? name : p.GetString("relationship_name");
                            return new ManageRelationshipTool(conn.OrgService, conn.Options, conn.Context).manage_relationship(
                                action ?? "",
                                relationshipName,
                                p.GetString("referenced_entity"),
                                p.GetString("referencing_entity"),
                                p.GetString("entity1"),
                                p.GetString("entity2"),
                                p.GetString("intersect_entity_name"),
                                entity_name ?? "",
                                p.GetString("attribute_name"),
                                p.GetString("cascade_preset"),
                                p.GetString("cascade_assign"),
                                p.GetString("cascade_delete"),
                                p.GetString("cascade_merge"),
                                p.GetString("cascade_reparent"),
                                p.GetString("cascade_share"),
                                p.GetString("cascade_unshare"),
                                p.GetString("menu_behavior"),
                                p.GetString("menu_group"),
                                p.GetInt("menu_order", 10000),
                                p.GetString("lookup_display_name"),
                                solution_name ?? "",
                                p.GetBool("is_hierarchical", false));
                        }

                        default:
                        {
                            var optionsetName = !string.IsNullOrWhiteSpace(name) ? name : p.GetString("optionset_name");
                            return new ManageChoiceTool(conn.OrgService, conn.Options, conn.Context).manage_choice(
                                action ?? "",
                                optionsetName,
                                p.GetString("display_name"),
                                p.GetString("filter"),
                                p.GetString("description"),
                                p.GetJsonString("options"),
                                p.GetJsonString("add_options"),
                                p.GetJsonString("update_options"),
                                p.GetJsonString("remove_options"),
                                solution_name ?? "",
                                p.GetJsonString("option_colors"));
                        }
                    }
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check payload types and retry. Read docs://schema_tools_guide for details.");
                }
            }, cancellationToken);
        }
    }
}
