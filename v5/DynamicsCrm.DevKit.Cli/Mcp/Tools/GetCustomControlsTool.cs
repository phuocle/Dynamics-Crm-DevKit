using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public class GetCustomControlsTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly IMcpConnectionResolver _connections;

        public GetCustomControlsTool(IOrganizationService orgService) : this(orgService, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public GetCustomControlsTool(IOrganizationService orgService, IMcpConnectionResolver connections)
        {
            _orgService = orgService;
            _connections = connections;
        }

        [McpServerTool(Name = "get_custom_controls", Title = "Discover installed PCF controls",
            ReadOnly = true, Idempotent = true, Destructive = false, UseStructuredContent = true,
            OutputSchemaType = typeof(CustomControlsResult))]
        [Description(
            "Find installed field or dataset PCF controls and read their manifest properties, datasets, and property sets.\n\n" +
            "WHEN TO USE:\n" +
            "- Find a field PCF by compatible bound column type, or a dataset PCF for a subgrid\n" +
            "- Look up the exact registered name and required manifest mappings before binding\n\n" +
            "RELATED TOOLS:\n" +
            "- manage_ui(resource='form') → bind, update, or unbind the PCF with manage_custom_control operations\n" +
            "- inspect_metadata(resource='tables') → inspect the Dataverse columns available for property mappings")]
        public Task<CallToolResult> InvokeAsync(
            [Description("Filter by the registered PCF name.")] string name = "",
            [Description("Name match: contains (default), prefix, or exact.")] string name_match = "contains",
            [Description("Control kind: field or dataset.")] string kind = "",
            [Description("Compatible bound field type, such as SingleLine.Text or Lookup.Simple.")] string data_type = "",
            [Description(McpToolInvocation.EnvDescription)] string env = null,
            CancellationToken cancellationToken = default) =>
            McpToolInvocation.InvokeAsync(_connections, env, conn =>
                Task.FromResult(new GetCustomControlsTool(conn.OrgService).get_custom_controls(name, name_match, kind, data_type)),
                cancellationToken);

        public CallToolResult get_custom_controls(string name = "", string name_match = "contains", string kind = "", string data_type = "")
        {
            try
            {
                var match = string.IsNullOrWhiteSpace(name_match) ? "contains" : name_match.Trim().ToLowerInvariant();
                if (match is not ("contains" or "prefix" or "exact"))
                    return Error("name_match must be contains, prefix, or exact.",
                        "Pass name_match='contains', 'prefix', or 'exact'. Omit it to use contains.");
                var targetKind = kind?.Trim().ToLowerInvariant();
                if (!string.IsNullOrEmpty(targetKind) && targetKind is not ("field" or "dataset"))
                    return Error("kind must be field or dataset.",
                        "Pass kind='field' for column controls or kind='dataset' for subgrid controls. Omit it to search both.");

                var controls = new CustomControlCatalog(_orgService).Find(name, match)
                    .Where(control => control.ManifestError != null ||
                        ((string.IsNullOrEmpty(targetKind) || targetKind == control.Kind) &&
                        (string.IsNullOrWhiteSpace(data_type) || (control.Kind == "field" &&
                            control.Properties.Any(property => property.Usage == "bound" && property.Accepts(data_type.Trim()))))))
                    .ToArray();
                return Success($"Found {controls.Length} PCF control(s).", new CustomControlsResult(controls.Length, controls));
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

    internal sealed record CustomControlsResult(
        [property: JsonPropertyName("totalCount")] int TotalCount,
        [property: JsonPropertyName("customControls")] CustomControlDefinition[] CustomControls);
    }
}
