using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetCustomApisTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetCustomApisTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> ParameterTypeMap = new()
        {
            [0] = "Boolean",
            [1] = "DateTime",
            [2] = "Decimal",
            [3] = "Entity",
            [4] = "EntityCollection",
            [5] = "EntityReference",
            [6] = "Float",
            [7] = "Integer",
            [8] = "Money",
            [9] = "Picklist",
            [10] = "String",
            [11] = "StringArray",
            [12] = "Guid"
        };

        private static readonly Dictionary<int, string> BindingTypeMap = new()
        {
            [0] = "Global",
            [1] = "Entity",
            [2] = "EntityCollection"
        };

        private static readonly Dictionary<int, string> ProcessingTypeMap = new()
        {
            [0] = "None",
            [1] = "Async Only",
            [2] = "Sync and Async"
        };

        [McpServerTool(Name = "get_custom_apis", Title = "List custom API definitions",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetApisResult)),
        Description(
            "Custom API definitions (modern replacement for Custom Actions). api_name empty = list; set = detail (params, plugin binding). " +
            "Managed APIs excluded by default (set include_microsoft=true to include them). isFunction=true → GET; false → POST. " +
            "For legacy workflow Custom Actions → get_messages.")]
        public CallToolResult get_custom_apis(
            [Description("Display Name or unique name → detail. Empty = list.")] string api_name = "",
            [Description("Bound entity Display/logical name. Empty = all.")] string entity_name = "",
            [Description("Include managed APIs. Default false.")] bool include_microsoft = false,
            [Description("'active' / 'inactive' / 'all'.")] string status = "active",
            [Description("1-500. Default 100.")] int max_records = 100)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(status))
                {
                    var s = status.Trim().ToLowerInvariant();
                    if (s != "active" && s != "inactive" && s != "all")
                        return Error($"Error: Invalid status '{status.Trim()}'. Use 'active', 'inactive', or 'all'.");
                }

                if (max_records <= 0) max_records = 100;
                if (max_records > 500) max_records = 500;

                if (!string.IsNullOrWhiteSpace(api_name))
                {
                    var apiResult = ResolveCustomApi(api_name.Trim());
                    if (!apiResult.IsSuccess)
                        return Error($"Error: api_name '{api_name.Trim()}': {apiResult.Error}");
                    return GetDetail(apiResult.CanonicalName);
                }

                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_custom_apis");
                    if (!entityResult.IsSuccess)
                        return Error($"Error: entity_name '{entity_name.Trim()}': {entityResult.Error}");
                    entity_name = entityResult.Value.LogicalName;
                }

                return GetList(entity_name, include_microsoft, status, max_records);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult GetList(string entityName, bool includeMicrosoft, string status, int maxRecords)
        {
            var filters = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(entityName))
                filters.AppendLine($"      <condition attribute='boundentitylogicalname' operator='eq' value='{EscapeXml(entityName.Trim().ToLowerInvariant())}'/>");

            if (!includeMicrosoft)
            {
                filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");
            }

            var normalizedStatus = (status ?? "active").Trim().ToLowerInvariant();
            if (normalizedStatus == "active")
                filters.AppendLine("      <condition attribute='statuscode' operator='eq' value='1'/>");
            else if (normalizedStatus == "inactive")
                filters.AppendLine("      <condition attribute='statuscode' operator='eq' value='2'/>");

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='customapi'>
    <attribute name='customapiid'/>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='displayname'/>
    <attribute name='bindingtype'/>
    <attribute name='boundentitylogicalname'/>
    <attribute name='isfunction'/>
    <attribute name='isprivate'/>
    <attribute name='allowedcustomprocessingsteptype'/>
    <attribute name='plugintypeid'/>
    <attribute name='statuscode'/>
    <attribute name='modifiedon'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var entities = result.Entities.ToList();

            if (entities.Count == 0)
            {
                var label = string.IsNullOrWhiteSpace(entityName) ? "" : $" for entity '{entityName.Trim().ToLowerInvariant()}'";
                var text = $"0 Custom APIs found{label}.";
                var emptyResult = new GetApisResult
                {
                    TotalCount = 0,
                    EntityFilter = string.IsNullOrWhiteSpace(entityName) ? null : entityName.Trim().ToLowerInvariant(),
                    Apis = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var apis = entities.Select(MapListEntry).ToList();

            var entityLabel = string.IsNullOrWhiteSpace(entityName) ? "" : $" (entity: {entityName.Trim().ToLowerInvariant()})";
            var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
            var countWord = entities.Count == 1 ? "API" : "APIs";

            var sb = new StringBuilder(entities.Count * 120 + 128);
            sb.AppendLine($"[Custom APIs] {entities.Count}{statusLabel} {countWord}{entityLabel}");
            sb.AppendLine();
            sb.AppendLine("uniqueName\tboundTo\tisFunction\tpluginType\tprocessingType\tisPrivate\tstatus");

            foreach (var api in apis)
            {
                var boundTo = api.BoundEntity ?? (api.BindingType == "Global" ? "(global)" : api.BindingType);
                sb.AppendLine($"{EscapeTab(api.UniqueName)}\t{boundTo}\t{(api.IsFunction ? "Yes" : "No")}\t{EscapeTab(api.PluginType ?? "(none)")}\t{api.ProcessingType}\t{(api.IsPrivate ? "Yes" : "No")}\t{api.Status}");
            }

            var structured = new GetApisResult
            {
                TotalCount = apis.Count,
                EntityFilter = string.IsNullOrWhiteSpace(entityName) ? null : entityName.Trim().ToLowerInvariant(),
                Apis = apis
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetDetail(string apiName)
        {
            var fetchApi = $@"<fetch>
  <entity name='customapi'>
    <all-attributes/>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='outer' alias='pt'>
      <attribute name='typename'/>
      <attribute name='name'/>
      <attribute name='friendlyname'/>
      <attribute name='description'/>
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' link-type='outer' alias='pa'>
        <attribute name='name'/>
        <attribute name='version'/>
        <attribute name='isolationmode'/>
      </link-entity>
    </link-entity>
    <filter>
      <condition attribute='uniquename' operator='eq' value='{EscapeXml(apiName)}'/>
    </filter>
  </entity>
</fetch>";

            var apiResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchApi));
            if (apiResult.Entities.Count == 0)
                return Error(
                    $"Error: Custom API '{apiName}' not found.\n" +
                    "Verify the unique name using get_custom_apis (list mode, api_name empty).");

            var api = apiResult.Entities[0];
            var customApiId = api.Id;

            var fetchParams = $@"<fetch>
  <entity name='customapirequestparameter'>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='type'/>
    <attribute name='isoptional'/>
    <attribute name='logicalentityname'/>
    <attribute name='description'/>
    <filter>
      <condition attribute='customapiid' operator='eq' value='{customApiId}'/>
    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>";

            var fetchResponse = $@"<fetch>
  <entity name='customapiresponseproperty'>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='type'/>
    <attribute name='logicalentityname'/>
    <attribute name='description'/>
    <filter>
      <condition attribute='customapiid' operator='eq' value='{customApiId}'/>
    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>";

            var paramsResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchParams));
            var responseResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchResponse));

            var entry = MapDetailEntry(api);
            if (!string.IsNullOrEmpty(entry.SolutionId))
                entry.SolutionId = ResolveSolutionName(entry.SolutionId) ?? entry.SolutionId;
            entry.RequestParameters = paramsResult.Entities.Select(MapRequestParameter).ToList();
            entry.ResponseProperties = responseResult.Entities.Select(MapResponseProperty).ToList();

            var sb = new StringBuilder(512);
            sb.AppendLine($"[Custom API] {entry.UniqueName}");
            sb.AppendLine();
            sb.AppendLine($"uniqueName: {entry.UniqueName}");
            if (!string.IsNullOrEmpty(entry.DisplayName))
                sb.AppendLine($"displayName: {entry.DisplayName}");
            if (!string.IsNullOrEmpty(entry.Description))
                sb.AppendLine($"description: {entry.Description}");

            var bindingDisplay = entry.BindingType;
            if (!string.IsNullOrEmpty(entry.BoundEntity))
                bindingDisplay += $" ({entry.BoundEntity})";
            sb.AppendLine($"bindingType: {bindingDisplay}");
            sb.AppendLine($"isFunction: {(entry.IsFunction ? "Yes" : "No")}");
            sb.AppendLine($"isPrivate: {(entry.IsPrivate ? "Yes" : "No")}");
            sb.AppendLine($"processingType: {entry.ProcessingType}");
            sb.AppendLine($"pluginType: {entry.PluginType ?? "(none)"}");
            if (!string.IsNullOrEmpty(entry.PluginTypeFullName))
                sb.AppendLine($"pluginTypeFullName: {entry.PluginTypeFullName}");
            if (!string.IsNullOrEmpty(entry.PluginAssemblyName))
                sb.AppendLine($"pluginAssembly: {entry.PluginAssemblyName} ({entry.PluginAssemblyVersion})");
            if (!string.IsNullOrEmpty(entry.PluginIsolationMode))
                sb.AppendLine($"isolationMode: {entry.PluginIsolationMode}");
            sb.AppendLine($"status: {entry.Status}");

            if (!string.IsNullOrEmpty(entry.Owner))
                sb.AppendLine($"owner: {entry.Owner}");
            if (!string.IsNullOrEmpty(entry.SolutionId))
                sb.AppendLine($"solutionId: {entry.SolutionId}");
            if (!string.IsNullOrEmpty(entry.CreatedOn))
                sb.AppendLine($"createdOn: {entry.CreatedOn}");
            if (!string.IsNullOrEmpty(entry.ModifiedOn))
                sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");

            sb.AppendLine();

            if (entry.RequestParameters.Count > 0)
            {
                sb.AppendLine($"[Request Parameters] {entry.RequestParameters.Count} total");
                sb.AppendLine();
                sb.AppendLine("name\ttype\trequired\tentity\tdescription");
                foreach (var p in entry.RequestParameters)
                {
                    sb.AppendLine($"{p.Name}\t{p.Type}\t{(p.IsOptional == true ? "No" : "Yes")}\t{p.LogicalEntityName ?? "-"}\t{EscapeTab(p.Description ?? "")}");
                }
                sb.AppendLine();
            }
            else
            {
                sb.AppendLine("[Request Parameters] 0");
                sb.AppendLine();
            }

            if (entry.ResponseProperties.Count > 0)
            {
                sb.AppendLine($"[Response Properties] {entry.ResponseProperties.Count} total");
                sb.AppendLine();
                sb.AppendLine("name\ttype\tentity\tdescription");
                foreach (var p in entry.ResponseProperties)
                {
                    sb.AppendLine($"{p.Name}\t{p.Type}\t{p.LogicalEntityName ?? "-"}\t{EscapeTab(p.Description ?? "")}");
                }
            }
            else
            {
                sb.AppendLine("[Response Properties] 0");
            }

            var structured = new GetApisResult
            {
                TotalCount = 1,
                Apis = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CustomApiEntry MapListEntry(Entity e)
        {
            var bindingValue = e.GetAttributeValue<OptionSetValue>("bindingtype")?.Value ?? 0;
            var processingValue = e.GetAttributeValue<OptionSetValue>("allowedcustomprocessingsteptype")?.Value ?? 0;
            var statusValue = e.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 1;

            return new CustomApiEntry
            {
                CustomApiId = e.Id.ToString(),
                UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
                BindingType = BindingTypeMap.TryGetValue(bindingValue, out var bt) ? bt : bindingValue.ToString(),
                BoundEntity = NullIfEmpty(e.GetAttributeValue<string>("boundentitylogicalname")),
                IsFunction = e.GetAttributeValue<bool>("isfunction"),
                IsPrivate = e.GetAttributeValue<bool>("isprivate"),
                ProcessingType = ProcessingTypeMap.TryGetValue(processingValue, out var pt) ? pt : processingValue.ToString(),
                PluginType = GetLookupName(e, "plugintypeid"),
                Status = statusValue == 1 ? "Active" : "Inactive"
            };
        }

        private static CustomApiEntry MapDetailEntry(Entity e)
        {
            var entry = MapListEntry(e);
            entry.Description = NullIfEmpty(e.GetAttributeValue<string>("description"));
            entry.Owner = GetLookupName(e, "ownerid");
            entry.SolutionId = GetLookupName(e, "solutionid");
            entry.CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd");
            entry.ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd");
            // Plugin type detail
            entry.PluginTypeName = NullIfEmpty(GetAliasedString(e, "pt.name"));
            entry.PluginTypeFullName = NullIfEmpty(GetAliasedString(e, "pt.typename"));
            entry.PluginAssemblyName = NullIfEmpty(GetAliasedString(e, "pa.name"));
            entry.PluginAssemblyVersion = NullIfEmpty(GetAliasedString(e, "pa.version"));
            var isoValue = GetAliasedValue<int?>(e, "pa.isolationmode");
            if (isoValue.HasValue)
            {
                entry.PluginIsolationMode = isoValue.Value switch
                {
                    1 => "None",
                    2 => "Sandbox",
                    3 => "External",
                    _ => isoValue.Value.ToString()
                };
            }
            return entry;
        }

        private static string GetLookupName(Entity e, string attributeName)
        {
            if (!e.Contains(attributeName)) return null;
            var raw = e[attributeName];
            if (raw is EntityReference er) return er.Name;
            if (raw is Guid g) return g.ToString();
            return raw?.ToString();
        }

        private static string GetAliasedString(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            return aliased?.Value?.ToString() ?? "";
        }

        private static T GetAliasedValue<T>(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            if (aliased?.Value is T val) return val;
            return default;
        }

        private string ResolveSolutionName(string solutionId)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='solution'>
    <attribute name='friendlyname'/>
    <filter>
      <condition attribute='solutionid' operator='eq' value='{EscapeXml(solutionId)}'/>
    </filter>
  </entity>
</fetch>";
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].GetAttributeValue<string>("friendlyname") : null;
        }

        private ResolveResult<Entity> ResolveCustomApi(string apiName)
        {
            return DisplayNameFirstResolver.ResolveDataverseRecord(
                _serviceClient,
                apiName,
                entityName: "customapi",
                idColumn: "customapiid",
                columns: new ColumnSet("customapiid", "uniquename", "displayname", "name"),
                displayColumn: "displayname",
                logicalColumn: null,
                uniqueColumn: "uniquename",
                schemaColumn: null,
                kind: "customapi",
                ambiguousTag: "[AmbiguousCustomApi]",
                notFoundTag: "[NotFoundCustomApi]",
                notFoundTip: "Tip: Use get_custom_apis with api_name empty to list available Custom APIs.",
                retryParameterName: "api_name");
        }

        private static CustomApiParameter MapRequestParameter(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? -1;
            return new CustomApiParameter
            {
                Name = e.GetAttributeValue<string>("uniquename") ?? e.GetAttributeValue<string>("name") ?? "",
                Type = ParameterTypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                IsOptional = e.GetAttributeValue<bool>("isoptional"),
                LogicalEntityName = NullIfEmpty(e.GetAttributeValue<string>("logicalentityname")),
                Description = NullIfEmpty(e.GetAttributeValue<string>("description"))
            };
        }

        private static CustomApiParameter MapResponseProperty(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? -1;
            return new CustomApiParameter
            {
                Name = e.GetAttributeValue<string>("uniquename") ?? e.GetAttributeValue<string>("name") ?? "",
                Type = ParameterTypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                LogicalEntityName = NullIfEmpty(e.GetAttributeValue<string>("logicalentityname")),
                Description = NullIfEmpty(e.GetAttributeValue<string>("description"))
            };
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value?.Replace("\t", " ").Replace("\n", " ").Replace("\r", "") ?? "";

    }
}
