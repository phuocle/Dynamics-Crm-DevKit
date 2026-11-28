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
    public sealed class ManageLogicTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] CustomApiKeys =
        [
            "display_name", "description", "binding_type", "is_function", "is_private",
            "allowed_custom_processing_step_type", "workflow_sdk_step_enabled",
            "execute_privilege_name", "request_parameters", "response_properties",
            "include_microsoft", "status", "max_records"
        ];

        private static readonly string[] FunctionKeys =
        [
            "definition_json", "arguments_json", "record_id", "max_records", "include_managed"
        ];

        [McpServerTool(
            Name = "manage_logic",
            Title = "Manage Dataverse Custom APIs and Power Fx functions",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage server-side programmable endpoints: Custom API definitions (request parameters & response properties) and Dataverse Power Fx functions.\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'custom_api': list | detail | create | update | delete\n" +
            "- 'function': list | detail | validate | invoke (create/update/delete gated)\n\n" +
            "Read docs://server_logic_guide for payload contracts. For read-only inspection of plugins, workflows, flows, BPFs, business rules, or SDK messages, use inspect_automation.")]
        public Task<CallToolResult> InvokeAsync(
            [Description("Required: 'custom_api' or 'function'.")] string? resource = null,
            [Description("Action: custom_api='list'|'detail'|'create'|'update'|'delete'; function='list'|'detail'|'validate'|'invoke'.")] string? action = null,
            [Description("Target name: api_name or function_name (Display Name, unique name, or GUID).")] string? name = null,
            [Description("custom_api only: bound entity Display or logical name.")] string? entity_name = null,
            [Description("Unmanaged solution Display or unique name.")] string? solution_name = null,
            [Description("Resource-specific JSON object. custom_api: {display_name, description, binding_type, is_function, is_private, allowed_custom_processing_step_type, workflow_sdk_step_enabled, execute_privilege_name, request_parameters, response_properties, include_microsoft, status, max_records}. function: {definition_json, arguments_json, record_id, max_records, include_managed}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'custom_api', 'function'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("custom_api" or "function"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'custom_api', 'function'."));

            var p = McpPayload.From(payload);
            var allowedKeys = normalizedResource == "custom_api" ? CustomApiKeys : FunctionKeys;
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_logic({normalizedResource})", "docs://server_logic_guide");
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, conn =>
            {
                try
                {
                    if (normalizedResource == "custom_api")
                    {
                        return Task.FromResult(new ManageCustomApiTool(conn.OrgService, conn.Options, conn.Context).manage_custom_api(
                            action ?? "",
                            name ?? "",
                            entity_name ?? "",
                            solution_name ?? "",
                            p.GetString("display_name"),
                            p.GetString("description"),
                            p.GetString("binding_type"),
                            p.GetNullableBool("is_function"),
                            p.GetNullableBool("is_private"),
                            p.GetString("allowed_custom_processing_step_type"),
                            p.GetNullableBool("workflow_sdk_step_enabled"),
                            p.GetString("execute_privilege_name"),
                            p.GetJsonString("request_parameters"),
                            p.GetJsonString("response_properties"),
                            p.GetBool("include_microsoft", false),
                            p.GetString("status", "active"),
                            p.GetInt("max_records", 100)));
                    }

                    return Task.FromResult(new ManageFunctionTool(conn.OrgService, conn.Options, conn.Context).manage_function(
                        action ?? "",
                        name ?? "",
                        solution_name ?? "",
                        p.GetJsonString("definition_json"),
                        p.GetJsonString("arguments_json"),
                        p.GetString("record_id"),
                        p.GetInt("max_records", 50),
                        p.GetBool("include_managed", false)));
                }
                catch (ArgumentException ex)
                {
                    return Task.FromResult(Error(ex.Message, "Check payload types and retry. Read docs://server_logic_guide for details."));
                }
            }, cancellationToken);
        }
    }
}
