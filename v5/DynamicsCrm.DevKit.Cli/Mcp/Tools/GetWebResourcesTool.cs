using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetWebResourcesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetWebResourcesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> TypeCodeMap = new()
        {
            [1] = "HTML",
            [2] = "CSS",
            [3] = "JS",
            [4] = "XML",
            [5] = "PNG",
            [6] = "JPG",
            [7] = "GIF",
            [8] = "XAP",
            [9] = "XSL",
            [10] = "ICO",
            [11] = "SVG",
            [12] = "RESX"
        };

        private static readonly Dictionary<string, int> TypeFilterMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["html"] = 1,
            ["css"] = 2,
            ["js"] = 3,
            ["xml"] = 4,
            ["png"] = 5,
            ["jpg"] = 6,
            ["gif"] = 7,
            ["xap"] = 8,
            ["xsl"] = 9,
            ["ico"] = 10,
            ["svg"] = 11,
            ["resx"] = 12
        };

        [McpServerTool(Name = "get_webresources", Title = "List and inspect web resources (JS, CSS, HTML, images, RESX)",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetWebResourcesResult)),
        Description(
            "List and inspect web resources (JavaScript, CSS, HTML, images, RESX) in Dataverse. " +
            "Essential for mapping local files to their Dataverse web resource names/GUIDs.\n\n" +

            "TWO MODES:\n" +
            "- web_resource_id EMPTY: list web resources filtered by name, type, solution\n" +
            "- web_resource_id PROVIDED: full detail for one web resource\n\n" +

            "TIPS:\n" +
            "- Call this tool first to find library_name needed for build_formxml add_event/add_library\n" +
            "- Names follow convention: {prefix}_/path/filename.ext (e.g., v4_/entities/Account.form.js)\n" +
            "- Related: build_formxml (add events/libraries), get_forms (inspect form structure)")]
        public CallToolResult get_webresources(
            [Description("Filter by name (contains match). E.g., 'account', 'v4_/entities'.")] string name_filter = "",
            [Description("Filter by type: 'js', 'html', 'css', 'xml', 'png', 'jpg', 'gif', 'svg', 'ico', 'resx'. Empty = all.")] string type_filter = "",
            [Description("Filter by solution unique name.")] string solution_name = "",
            [Description("GUID for single web resource detail. Empty = list mode.")] string web_resource_id = "",
            [Description("Max results for list mode (1-500). Default: 50.")] int max_records = 50)
        {
            if (!string.IsNullOrWhiteSpace(type_filter) && !TypeFilterMap.ContainsKey(type_filter.Trim()))
                return ErrorResult($"Error: Invalid type_filter '{type_filter.Trim()}'. Use: js, html, css, xml, png, jpg, gif, svg, ico, resx.");

            if (max_records <= 0) max_records = 50;
            if (max_records > 500) max_records = 500;

            try
            {
                if (!string.IsNullOrWhiteSpace(web_resource_id))
                {
                    if (!Guid.TryParse(web_resource_id.Trim(), out _))
                        return ErrorResult($"Error: '{web_resource_id.Trim()}' is not a valid GUID.");

                    return GetDetail(web_resource_id.Trim());
                }

                return GetList(name_filter, type_filter, solution_name, max_records);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve web resources: {ex.Message}");
            }
        }

        private CallToolResult GetDetail(string webResourceId)
        {
            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet(
                    "webresourceid", "name", "displayname", "webresourcetype",
                    "description", "languagecode", "ismanaged", "iscustomizable",
                    "canbedeleted", "ishidden", "isenabledformobileclient",
                    "createdby", "createdon", "modifiedby", "modifiedon",
                    "solutionid", "introducedversion", "dependencyxml")
            };
            query.Criteria.AddCondition("webresourceid", ConditionOperator.Equal, new Guid(webResourceId));

            var result = _serviceClient.RetrieveMultiple(query);
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.");

            var entity = result.Entities[0];
            var entry = MapEntry(entity);

            // Add detail-only fields
            entry.Description = NullIfEmpty(entity.GetAttributeValue<string>("description"));
            entry.LanguageCode = entity.GetAttributeValue<int?>("languagecode");
            entry.IsCustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value;
            entry.IsHidden = entity.GetAttributeValue<BooleanManagedProperty>("ishidden")?.Value;
            entry.IsEnabledForMobile = entity.GetAttributeValue<bool?>("isenabledformobileclient");
            entry.IntroducedVersion = NullIfEmpty(entity.GetAttributeValue<string>("introducedversion"));

            var createdBy = entity.GetAttributeValue<EntityReference>("createdby");
            entry.CreatedBy = createdBy != null ? (createdBy.Name ?? createdBy.Id.ToString()) : null;

            var createdOn = entity.GetAttributeValue<DateTime?>("createdon");
            entry.CreatedOn = createdOn?.ToString("yyyy-MM-dd HH:mm:ss");

            var modifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby");
            entry.ModifiedBy = modifiedBy != null ? (modifiedBy.Name ?? modifiedBy.Id.ToString()) : null;

            var sb = new StringBuilder(512);
            sb.AppendLine($"[WebResource] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"webResourceId: {entry.WebResourceId}");
            sb.AppendLine($"name: {entry.Name}");
            if (!string.IsNullOrEmpty(entry.DisplayName))
                sb.AppendLine($"displayName: {entry.DisplayName}");
            sb.AppendLine($"type: {entry.Type}");
            sb.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.Description))
                sb.AppendLine($"description: {entry.Description}");
            if (entry.LanguageCode.HasValue && entry.LanguageCode.Value > 0)
                sb.AppendLine($"languageCode: {entry.LanguageCode}");
            if (entry.IsCustomizable.HasValue)
                sb.AppendLine($"isCustomizable: {(entry.IsCustomizable.Value ? "Yes" : "No")}");
            if (entry.IsHidden.HasValue)
                sb.AppendLine($"isHidden: {(entry.IsHidden.Value ? "Yes" : "No")}");
            if (entry.IsEnabledForMobile.HasValue)
                sb.AppendLine($"isEnabledForMobile: {(entry.IsEnabledForMobile.Value ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.IntroducedVersion))
                sb.AppendLine($"introducedVersion: {entry.IntroducedVersion}");
            if (!string.IsNullOrEmpty(entry.CreatedBy))
                sb.AppendLine($"createdBy: {entry.CreatedBy}");
            if (!string.IsNullOrEmpty(entry.CreatedOn))
                sb.AppendLine($"createdOn: {entry.CreatedOn}");
            if (!string.IsNullOrEmpty(entry.ModifiedBy))
                sb.AppendLine($"modifiedBy: {entry.ModifiedBy}");
            if (!string.IsNullOrEmpty(entry.ModifiedOn))
                sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");

            var structured = new GetWebResourcesResult
            {
                TotalCount = 1,
                WebResources = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetList(string nameFilter, string typeFilter, string solutionName, int maxRecords)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(typeFilter) && TypeFilterMap.TryGetValue(typeFilter.Trim(), out var typeCode))
                filters.AppendLine($"      <condition attribute='webresourcetype' operator='eq' value='{typeCode}'/>");

            var solutionJoin = "";
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                solutionJoin = $@"
    <link-entity name='solutioncomponent' from='objectid' to='webresourceid' link-type='inner'>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner'>
        <filter>
          <condition attribute='uniquename' operator='eq' value='{EscapeXml(solutionName.Trim())}'/>
        </filter>
      </link-entity>
    </link-entity>";
            }

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='webresource'>
    <attribute name='webresourceid'/>
    <attribute name='name'/>
    <attribute name='displayname'/>
    <attribute name='webresourcetype'/>
    <attribute name='ismanaged'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>{solutionJoin}
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
            {
                var emptyResult = new GetWebResourcesResult { TotalCount = 0, WebResources = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = "0 web resources found." }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var entries = result.Entities.Select(MapEntry).ToList();

            var sb = new StringBuilder(entries.Count * 120 + 256);
            var countWord = entries.Count == 1 ? "web resource" : "web resources";
            sb.AppendLine($"[WebResources] {entries.Count} {countWord}");
            sb.AppendLine();
            sb.AppendLine("webResourceId\tname\ttype\tdisplayName\tmodifiedOn");

            foreach (var e in entries)
            {
                sb.AppendLine($"{e.WebResourceId}\t{EscapeTab(e.Name)}\t{e.Type}\t{EscapeTab(e.DisplayName ?? "")}\t{e.ModifiedOn ?? ""}");
            }

            var structured = new GetWebResourcesResult
            {
                TotalCount = entries.Count,
                WebResources = entries
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static WebResourceEntry MapEntry(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0;
            var modifiedBy = e.GetAttributeValue<EntityReference>("modifiedby");
            var modifiedOn = e.GetAttributeValue<DateTime?>("modifiedon");

            return new WebResourceEntry
            {
                WebResourceId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
                Type = TypeCodeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                TypeCode = typeValue,
                IsManaged = e.GetAttributeValue<bool?>("ismanaged") ?? false,
                ModifiedOn = modifiedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                ModifiedBy = modifiedBy != null ? (modifiedBy.Name ?? modifiedBy.Id.ToString()) : null
            };
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
