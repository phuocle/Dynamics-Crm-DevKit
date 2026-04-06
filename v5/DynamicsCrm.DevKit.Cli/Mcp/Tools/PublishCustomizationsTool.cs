using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class PublishCustomizationsTool
    {
        private readonly ServiceClient _serviceClient;

        public PublishCustomizationsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "publish_customizations", Title = "Publish customizations to make changes visible",
            Destructive = false, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(PublishResult)),
        Description(
            "Publish Dataverse customizations to make metadata changes visible to users. " +
            "Required after creating/updating entities, attributes, forms, views, option sets, or relationships.\n\n" +

            "WHEN TO USE:\n" +
            "- After ANY metadata change via execute_webapi or upsert_* tools (if auto_publish was false)\n" +
            "- When user reports 'I made changes but they are not showing up'\n\n" +

            "TIPS:\n" +
            "- Publish specific entities when possible (faster than publish all)\n" +
            "- PublishAll can take 30+ seconds on large environments\n" +
            "- Idempotent — publishing already-published changes is harmless")]
        public CallToolResult publish_customizations(
            [Description(
                "Comma-separated entity logical names to publish (e.g., 'account,contact,lead'). " +
                "Leave empty to publish ALL customizations. " +
                "Use specific entities when possible for faster execution."
            )] string entities = "",
            [Description(
                "Also publish global option sets. Only applies when entities is specified. " +
                "Default: false."
            )] bool include_global_optionset = false,
            [Description(
                "Also publish the sitemap. Only applies when entities is specified. " +
                "Default: false."
            )] bool include_sitemap = false)
        {
            var sw = Stopwatch.StartNew();

            try
            {
                var entitiesProvided = !string.IsNullOrWhiteSpace(entities);
                var entityList = entitiesProvided
                    ? entities.Split(',')
                        .Select(e => e.Trim().ToLowerInvariant())
                        .Where(e => !string.IsNullOrEmpty(e))
                        .Distinct()
                        .ToList()
                    : [];

                if (entitiesProvided && entityList.Count == 0)
                {
                    return ErrorResult("[Error] Publish failed\nMessage: No valid entity names found in the 'entities' parameter. Provide comma-separated logical names (e.g., 'account,contact') or leave empty for PublishAll.");
                }

                if (entityList.Count == 0)
                {
                    _serviceClient.Execute(new PublishAllXmlRequest());
                    sw.Stop();

                    var text = $"[Publish] All customizations\nStatus: Published successfully\nDuration: {sw.Elapsed.TotalSeconds:F1}s";
                    var structured = new PublishResult
                    {
                        Mode = "all",
                        Status = "published",
                        DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = text }],
                        StructuredContent = JsonSerializer.SerializeToElement(structured)
                    };
                }
                else
                {
                    var parameterXml = BuildParameterXml(entityList, include_global_optionset, include_sitemap);
                    var request = new PublishXmlRequest { ParameterXml = parameterXml };
                    _serviceClient.Execute(request);
                    sw.Stop();

                    var sb = new StringBuilder();
                    sb.AppendLine($"[Publish] {entityList.Count} {(entityList.Count == 1 ? "entity" : "entities")}");
                    sb.AppendLine($"Entities: {string.Join(", ", entityList)}");
                    sb.AppendLine($"GlobalOptionSets: {(include_global_optionset ? "yes" : "no")}");
                    sb.AppendLine($"SiteMap: {(include_sitemap ? "yes" : "no")}");
                    sb.AppendLine($"Status: Published successfully");
                    sb.Append($"Duration: {sw.Elapsed.TotalSeconds:F1}s");

                    var structured = new PublishResult
                    {
                        Mode = "specific",
                        Entities = entityList,
                        EntityCount = entityList.Count,
                        IncludeGlobalOptionSets = include_global_optionset,
                        IncludeSiteMap = include_sitemap,
                        Status = "published",
                        DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(structured)
                    };
                }
            }
            catch (Exception ex)
            {
                sw.Stop();
                var entitiesProvided = !string.IsNullOrWhiteSpace(entities);
                var errorMsg = entitiesProvided
                    ? $"[Error] Publish failed\nEntities requested: {entities.Trim()}\nNONE of the entities were published (Dataverse rejects the entire batch if any entity is invalid).\nMessage: {ex.Message}"
                    : $"[Error] Publish failed\nMessage: {ex.Message}";
                return ErrorResult(errorMsg);
            }
        }

        private static string BuildParameterXml(
            System.Collections.Generic.List<string> entityList,
            bool includeGlobalOptionSets,
            bool includeSiteMap)
        {
            var sb = new StringBuilder();
            sb.Append("<importexportxml>");
            sb.Append("<entities>");
            foreach (var entity in entityList)
            {
                sb.Append($"<entity>{entity}</entity>");
            }
            sb.Append("</entities>");
            sb.Append(includeGlobalOptionSets ? "<optionsets><optionset>all</optionset></optionsets>" : "<optionsets />");
            sb.Append(includeSiteMap ? "<sitemaps><sitemap></sitemap></sitemaps>" : "<sitemaps />");
            sb.Append("</importexportxml>");
            return sb.ToString();
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
