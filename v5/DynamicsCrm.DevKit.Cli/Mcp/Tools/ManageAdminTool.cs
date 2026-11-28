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
    public sealed class ManageAdminTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] RoleKeys =
        [
            "user_id", "team_id", "role_id", "role_name", "business_unit_id",
            "privileges", "backup_path", "max_records"
        ];

        private static readonly string[] EnvVarKeys =
        [
            "variable_name", "display_name", "type", "default_value", "value", "description", "max_records"
        ];

        private static readonly string[] PublishKeys =
        [
            "entities", "optionset_names", "include_ribbons", "dashboards", "webresources",
            "include_global_optionset", "include_sitemap", "appmodules"
        ];

        [McpServerTool(
            Name = "manage_admin",
            Title = "Manage Dataverse security roles, environment variables, and publish customizations",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage Dataverse administration, security, and deployment operations: security roles & privileges, environment variables, and PublishXml / PublishAll.\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'role': list | detail | user | assign | unassign | create | update | delete | copy | restore\n" +
            "- 'env_var': list | detail | create | update | delete | clear\n" +
            "- 'publish': publish (default) — targeted PublishXml or full PublishAll (when no targets are supplied)\n\n" +
            "Use get_context(action='whoami') to inspect the current user and direct roles, and inspect_diagnostics(resource='system_jobs') to monitor async publish jobs.")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'role', 'env_var', or 'publish'.")] string? resource = null,
            [Description("Action: role='list'|'detail'|'user'|'assign'|'unassign'|'create'|'update'|'delete'|'copy'|'restore'; env_var='list'|'detail'|'create'|'update'|'delete'|'clear'; publish='publish' (default).")] string? action = null,
            [Description("Primary target: role_id (GUID/name) for role, variable_name for env_var, or comma-separated entities for publish (empty with no payload targets = PublishAll).")] string? target = null,
            [Description("role: filter privileges by entity (detail/user); publish: fallback entity list when target is empty.")] string? entity_name = null,
            [Description("Unmanaged solution Display or unique name (role create/update/copy, env_var list/create).")] string? solution_name = null,
            [Description("Resource-specific JSON object. role: {user_id, team_id, role_id, role_name, business_unit_id, privileges, backup_path, max_records}. env_var: {variable_name, display_name, type, default_value, value, description, max_records}. publish: {entities, optionset_names, include_ribbons, dashboards, webresources, include_global_optionset, include_sitemap, appmodules}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'role', 'env_var', 'publish'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("role" or "env_var" or "publish"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'role', 'env_var', 'publish'."));

            var p = McpPayload.From(payload);
            var allowedKeys = normalizedResource switch
            {
                "role" => RoleKeys,
                "env_var" => EnvVarKeys,
                _ => PublishKeys
            };
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_admin({normalizedResource})");
            if (keyError != null)
                return Task.FromResult(keyError);

            var normalizedAction = action?.Trim().ToLowerInvariant() ?? "";
            if (normalizedResource == "publish" && !string.IsNullOrEmpty(normalizedAction) && normalizedAction != "publish")
                return Task.FromResult(Error($"Invalid action '{action?.Trim()}' for resource 'publish'.", "Valid action: 'publish' (or omit action)."));

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    switch (normalizedResource)
                    {
                        case "role":
                        {
                            var roleId = !string.IsNullOrWhiteSpace(target) ? target : p.GetString("role_id");
                            return await new ManageRoleTool(conn.OrgService, conn.Options, conn.Context).manage_role(
                                server,
                                action ?? "",
                                p.GetString("user_id"),
                                p.GetString("team_id"),
                                roleId,
                                p.GetString("role_name"),
                                p.GetString("business_unit_id"),
                                entity_name ?? "",
                                p.GetJsonString("privileges"),
                                p.GetString("backup_path"),
                                p.GetInt("max_records", 50),
                                solution_name).ConfigureAwait(false);
                        }

                        case "env_var":
                        {
                            var varName = !string.IsNullOrWhiteSpace(target) ? target : p.GetString("variable_name");
                            return new ManageEnvironmentVariableTool(conn.OrgService, conn.Options, conn.Context).manage_environment_variable(
                                action ?? "",
                                varName,
                                solution_name ?? "",
                                p.GetInt("max_records", 50),
                                p.GetString("display_name"),
                                p.GetString("type"),
                                p.GetString("default_value"),
                                p.GetString("value"),
                                p.GetString("description"));
                        }

                        default:
                        {
                            var entities = !string.IsNullOrWhiteSpace(target)
                                ? target
                                : (!string.IsNullOrWhiteSpace(entity_name) ? entity_name : p.GetString("entities"));
                            return new PublishCustomizationsTool(conn.OrgService, conn.Options, conn.Context).publish_customizations(
                                entities,
                                p.GetString("optionset_names"),
                                p.GetBool("include_ribbons", false),
                                p.GetString("dashboards"),
                                p.GetString("webresources"),
                                p.GetBool("include_global_optionset", false),
                                p.GetBool("include_sitemap", false),
                                p.GetString("appmodules"));
                        }
                    }
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check payload types and retry.");
                }
            }, cancellationToken);
        }
    }
}
