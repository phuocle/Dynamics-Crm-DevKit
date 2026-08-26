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
            "List modern Custom API definitions or inspect one API's parameters and plugin binding.\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect a Custom API's request/response parameters and plugin binding before registering or invoking it\n" +
            "- Discover Custom APIs bound to a specific entity\n" +
            "- Distinguish modern Custom APIs from legacy workflow Custom Actions\n\n" +
            "RELATED TOOLS:\n" +
            "- get_messages → legacy workflow Custom Actions (category=3) + SDK messages\n" +
            "- get_plugins → plugin assemblies/types/steps registered on these APIs\n" +
            "- get_workflows → classic workflow definitions")]
        public CallToolResult get_custom_apis(
            [Description("Display Name or unique name → detail. Empty = list.")] string api_name = "",
            [Description("Bound entity Display/logical name. Empty = all.")] string entity_name = "",
            [Description("Include managed APIs. Default false.")] bool include_microsoft = false,
            [Description("'active' / 'inactive' / 'all'.")] string status = "active",
            [Description("1-500. Default 100.")] int max_records = 100)
        {
            try
            {
                // ── Validate status ──────────────────────────────────────────────
                var normalizedStatus = (status ?? "active").Trim().ToLowerInvariant();
                if (normalizedStatus != "active" && normalizedStatus != "inactive" && normalizedStatus != "all")
                    return Error($"Invalid status '{status.Trim()}'.",
                        "Use 'active', 'inactive', or 'all'. Default 'active'.");

                if (max_records <= 0) max_records = 100;
                if (max_records > 500) max_records = 500;

                // ── Detail mode ──────────────────────────────────────────────────
                if (!string.IsNullOrWhiteSpace(api_name))
                {
                    var apiResult = ResolveCustomApi(api_name.Trim());
                    if (!apiResult.IsSuccess)
                        return Error(
                            apiResult.Error.Split("\r\n")[0],
                            apiResult.Status == ResolveStatus.NotFound
                                ? "Use get_custom_apis with api_name empty to list available Custom APIs."
                                : "Re-call with a more specific api_name value.");
                    return BuildDetail(apiResult.CanonicalName);
                }

                // ── List mode ────────────────────────────────────────────────────
                var resolvedEntity = string.IsNullOrWhiteSpace(entity_name)
                    ? null
                    : entity_name.Trim().ToLowerInvariant();
                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_custom_apis");
                    if (!entityResult.IsSuccess)
                        return Error(
                            entityResult.Error.Split("\r\n")[0],
                            "Use get_tables to list entities before calling get_custom_apis.");
                    resolvedEntity = entityResult.Value.LogicalName;
                }

                return BuildList(resolvedEntity, include_microsoft, normalizedStatus, max_records);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult BuildList(string entityName, bool includeMicrosoft, string normalizedStatus, int maxRecords)
        {
            var filters = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(entityName))
                filters.AppendLine($"      <condition attribute='boundentitylogicalname' operator='eq' value='{EscapeXml(entityName)}'/>");

            if (!includeMicrosoft)
                filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");

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

            var apis = entities.Select(MapListEntry).ToList();
            var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
            var entityLabel = string.IsNullOrWhiteSpace(entityName) ? "" : $" (entity: {entityName})";

            var structured = new GetApisResult
            {
                TotalCount = apis.Count,
                EntityFilter = string.IsNullOrWhiteSpace(entityName) ? null : entityName,
                Apis = apis.Count > 0 ? apis : null
            };

            return Success(
                $"{statusLabel} custom APIs{entityLabel}: {apis.Count} found.",
                structured);
        }

        private CallToolResult BuildDetail(string apiName)
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
                    $"Custom API '{apiName}' not found.",
                    "Call get_custom_apis with api_name empty to list available Custom APIs.");

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
            if (!string.IsNullOrEmpty(entry.SolutionId) && string.IsNullOrEmpty(entry.SolutionName))
                entry.SolutionName = ResolveSolutionName(entry.SolutionId);
            entry.RequestParameters = paramsResult.Entities.Select(MapRequestParameter).ToList();
            if (entry.RequestParameters.Count == 0) entry.RequestParameters = null;
            entry.ResponseProperties = responseResult.Entities.Select(MapResponseProperty).ToList();
            if (entry.ResponseProperties.Count == 0) entry.ResponseProperties = null;

            var structured = new GetApisResult
            {
                TotalCount = 1,
                Apis = [entry]
            };

            var paramCount = entry.RequestParameters?.Count ?? 0;
            var responseCount = entry.ResponseProperties?.Count ?? 0;

            return Success(
                $"Custom API '{entry.UniqueName}': {paramCount} request params, {responseCount} response properties.",
                structured);
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

        private CustomApiEntry MapDetailEntry(Entity e)
        {
            var entry = MapListEntry(e);
            entry.Description = NullIfEmpty(e.GetAttributeValue<string>("description"));
            entry.Owner = GetLookupName(e, "ownerid");
            entry.SolutionId = GetLookupId(e, "solutionid");
            entry.SolutionName = GetLookupName(e, "solutionid");
            if (string.Equals(entry.SolutionName, entry.SolutionId, StringComparison.OrdinalIgnoreCase))
                entry.SolutionName = null;
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

        private static string GetLookupId(Entity e, string attributeName)
        {
            if (!e.Contains(attributeName)) return null;
            return e[attributeName] switch
            {
                EntityReference er => er.Id.ToString(),
                Guid guid => guid.ToString(),
                _ => null
            };
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
                ambiguousTag: null,
                notFoundTag: null,
                notFoundTip: null,
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

    }
}
