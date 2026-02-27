using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class ListTablesTool
    {
        private readonly ServiceClient _serviceClient;

        public ListTablesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "list_tables", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List all tables (entities) in the connected Dataverse environment. " +
            "Returns logical name, schema name, display name, and whether it is a custom entity. " +
            "Automatically excludes intersect (many-to-many relationship) tables. " +
            "Use the optional filter to narrow results by prefix (e.g. 'new_', 'msdyn_') or keyword in display name. " +
            "Use this to discover available tables before querying data or inspecting metadata.")]
        public string list_tables(
            [Description("Optional filter: prefix (e.g. 'new_', 'msdyn_') or keyword to search in logical name or display name. Leave empty for all tables.")] string filter = "",
            [Description("If true, only show custom entities. Default is false (show all).")] bool custom_only = false)
        {
            try
            {
                var request = new RetrieveAllEntitiesRequest
                {
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveAllEntitiesResponse)_serviceClient.Execute(request);

                var entities = response.EntityMetadata
                    .Where(e => !e.IsIntersect.GetValueOrDefault())
                    .AsEnumerable();

                if (custom_only)
                    entities = entities.Where(e => e.IsCustomEntity == true);

                if (!string.IsNullOrWhiteSpace(filter))
                {
                    var f = filter.Trim().ToLowerInvariant();
                    entities = entities.Where(e =>
                        (e.LogicalName != null && e.LogicalName.Contains(f)) ||
                        (e.DisplayName?.UserLocalizedLabel?.Label != null && e.DisplayName.UserLocalizedLabel.Label.ToLowerInvariant().Contains(f)));
                }

                var sorted = entities.OrderBy(e => e.LogicalName).ToArray();

                var sb = new StringBuilder();
                sb.AppendLine($"Found {sorted.Length} tables" +
                    (string.IsNullOrWhiteSpace(filter) ? "" : $" matching '{filter}'") +
                    (custom_only ? " (custom only)" : "") + ".");
                sb.AppendLine();
                sb.AppendLine("| Logical Name | Schema Name | Display Name | Custom | Ownership |");
                sb.AppendLine("| --- | --- | --- | --- | --- |");

                foreach (var e in sorted)
                {
                    var displayName = e.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    var custom = e.IsCustomEntity == true ? "Yes" : "";
                    var ownership = e.OwnershipType?.ToString() ?? "";
                    sb.AppendLine($"| {e.LogicalName} | {e.SchemaName} | {displayName} | {custom} | {ownership} |");
                }

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error listing tables: {ex.Message}";
            }
        }
    }
}
