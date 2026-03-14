using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class SearchTool
    {
        private readonly ServiceClient _serviceClient;

        public SearchTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "search", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Perform a Dataverse Relevance Search (full-text search) across one or more entities. " +
            "Returns matching records ranked by relevance.\n\n" +

            "RETURNS:\n" +
            "- Total count of matching records\n" +
            "- Markdown table with entity type, record ID, primary name, and relevance score\n" +
            "- Results are ranked by relevance (best matches first)\n\n" +

            "WHEN TO USE:\n" +
            "- When the user asks to 'find' or 'search for' something by name or keyword\n" +
            "- When you need to search across multiple entities at once (e.g. find 'Contoso' in accounts, contacts, and leads)\n" +
            "- When you don't know the exact field to filter on — Relevance Search searches across all indexed fields\n" +
            "- As a quick alternative to FetchXML when you just need to find records by text\n\n" +

            "IMPORTANT:\n" +
            "- Relevance Search must be enabled in the Dataverse environment (most environments have it enabled by default)\n" +
            "- Only entities and columns that are configured for Relevance Search will be searched\n" +
            "- For precise filtering (e.g. by date range, status, or numeric values), use execute_fetchxml instead\n\n" +

            "EXAMPLES:\n" +
            "- Search 'Contoso' across all entities\n" +
            "- Search 'john@email.com' in contacts only\n" +
            "- Search 'Widget' in products")]
        public string search(
            [Description(
                "The text to search for. Supports keywords, phrases, and partial matches. " +
                "Examples: 'Contoso', 'john smith', 'john@email.com', 'Widget Pro'."
            )] string search_term,
            [Description(
                "Comma-separated entity logical names to limit the search scope. " +
                "Examples: 'account,contact', 'lead', 'opportunity,incident'. " +
                "Leave empty to search across all searchable entities."
            )] string entities = "",
            [Description(
                "Maximum number of results to return. Default: 20. Max: 100. " +
                "Use a smaller value for quick lookups."
            )] int max_results = 20)
        {
            if (string.IsNullOrWhiteSpace(search_term))
                return "Error: search_term is required.";

            if (max_results <= 0) max_results = 20;
            if (max_results > 100) max_results = 100;

            try
            {
                var entityFilter = ParseEntityFilter(entities);
                var request = BuildSearchRequest(search_term.Trim(), entityFilter, max_results);
                var response = (OrganizationResponse)_serviceClient.Execute(request);

                return FormatSearchResponse(response, search_term.Trim());
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("SearchNotEnabled", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("search is not enabled", StringComparison.OrdinalIgnoreCase) ||
                    ex.Message.Contains("0x80060203", StringComparison.OrdinalIgnoreCase))
                {
                    return "Error: Relevance Search is not enabled in this Dataverse environment. " +
                           "Use execute_fetchxml with a filter condition instead.";
                }

                return $"Error: Search failed: {ex.Message}";
            }
        }

        private static List<string> ParseEntityFilter(string entities)
        {
            if (string.IsNullOrWhiteSpace(entities))
                return [];

            return entities
                .Split(',')
                .Select(e => e.Trim().ToLowerInvariant())
                .Where(e => !string.IsNullOrEmpty(e))
                .ToList();
        }

        private static OrganizationRequest BuildSearchRequest(string searchTerm, List<string> entityFilter, int maxResults)
        {
            var request = new OrganizationRequest("searchquery")
            {
                ["search"] = searchTerm,
                ["count"] = true,
                ["top"] = maxResults
            };

            if (entityFilter.Count > 0)
            {
                request["entities"] = string.Join(",", entityFilter);
            }

            return request;
        }

        private static string FormatSearchResponse(OrganizationResponse response, string searchTerm)
        {
            var sb = new StringBuilder(2048);

            if (response.Results.TryGetValue("response", out var responseBody) && responseBody is string jsonResponse)
            {
                return FormatJsonSearchResponse(jsonResponse, searchTerm);
            }

            if (response.Results.TryGetValue("value", out var value) && value is EntityCollection collection)
            {
                return FormatEntityCollectionResponse(collection, searchTerm);
            }

            sb.AppendLine($"# Search Results for \"{searchTerm}\"");
            sb.AppendLine();
            sb.AppendLine("No results found or unexpected response format.");
            sb.AppendLine();
            sb.AppendLine("TIP: Try execute_fetchxml with a like filter instead:");
            sb.AppendLine($"```xml");
            sb.AppendLine($"<fetch top='10'>");
            sb.AppendLine($"  <entity name='account'>");
            sb.AppendLine($"    <attribute name='name'/>");
            sb.AppendLine($"    <filter>");
            sb.AppendLine($"      <condition attribute='name' operator='like' value='%{searchTerm}%'/>");
            sb.AppendLine($"    </filter>");
            sb.AppendLine($"  </entity>");
            sb.AppendLine($"</fetch>");
            sb.AppendLine($"```");

            return sb.ToString();
        }

        private static string FormatJsonSearchResponse(string jsonResponse, string searchTerm)
        {
            var sb = new StringBuilder(2048);
            sb.AppendLine($"# Search Results for \"{searchTerm}\"");
            sb.AppendLine();
            sb.AppendLine(jsonResponse);
            return sb.ToString();
        }

        private static string FormatEntityCollectionResponse(EntityCollection collection, string searchTerm)
        {
            var sb = new StringBuilder(collection.Entities.Count * 120 + 512);

            sb.AppendLine($"# Search Results for \"{searchTerm}\"");
            sb.AppendLine();
            sb.AppendLine($"Returned **{collection.Entities.Count}** records");
            sb.AppendLine();

            if (collection.Entities.Count == 0)
            {
                sb.AppendLine("No matching records found.");
                return sb.ToString();
            }

            var allKeys = collection.Entities
                .SelectMany(e => e.Attributes.Keys)
                .Distinct()
                .OrderBy(k => k)
                .ToList();

            sb.Append("| _entity | _id");
            foreach (var key in allKeys)
                sb.Append($" | {key}");
            sb.AppendLine(" |");

            sb.Append("| --- | ---");
            foreach (var _ in allKeys)
                sb.Append(" | ---");
            sb.AppendLine(" |");

            foreach (var entity in collection.Entities)
            {
                sb.Append($"| {entity.LogicalName} | {entity.Id}");
                foreach (var key in allKeys)
                {
                    var value = DataverseValueFormatter.FormatValue(entity, key);
                    sb.Append($" | {EscapePipe(value)}");
                }
                sb.AppendLine(" |");
            }

            return sb.ToString();
        }

        private static string EscapePipe(string value) =>
            value.Replace("|", "\\|").Replace("\n", " ").Replace("\r", "");
    }
}
