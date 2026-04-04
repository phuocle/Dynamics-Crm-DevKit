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
    public class GetApisTool
    {
        private readonly ServiceClient _serviceClient;

        public GetApisTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly string[] MsftPrefixes = ["msdyn_", "mspp_", "msdynce_", "msdyncrm_", "Microsoft."];

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

        [McpServerTool(Name = "get_apis", Title = "List and inspect Custom APIs in Dataverse",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetApisResult)),
        Description(
            "Retrieve Custom API definitions from Dataverse. Custom APIs are the modern replacement " +
            "for Custom Actions, with richer metadata (bound/unbound, private/public, plugin binding, " +
            "typed request/response parameters).\n\n" +

            "TWO MODES:\n" +
            "- If api_name is EMPTY: list all Custom APIs matching filters with summary metadata\n" +
            "- If api_name is PROVIDED: get full detail for a single Custom API including " +
            "request parameters, response properties, and plugin binding\n\n" +

            "PARAMETERS:\n" +
            "- api_name: Unique name of a specific Custom API for full detail. Leave empty to list.\n" +
            "- entity_name: Filter by bound entity logical name. Empty + no api_name = list all.\n" +
            "- include_microsoft: Include Microsoft-provided APIs (msdyn_, mspp_, etc.). Default false.\n" +
            "- status: 'active' (default), 'inactive', or 'all'.\n" +
            "- max_records: Maximum results in list mode (1-500, default 100).\n\n" +

            "RETURNS:\n" +
            "- List mode: TSV table of APIs with name, boundTo, isFunction, pluginType, processingType, isPrivate\n" +
            "- Detail mode: Key-value metadata + request parameters table + response properties table\n\n" +

            "WHEN TO USE:\n" +
            "- When you need to discover what Custom APIs exist in the environment\n" +
            "- When you need to know the request parameters or response properties of a Custom API\n" +
            "- When checking which Custom APIs are bound to a specific entity\n" +
            "- When investigating Custom API plugin bindings\n" +
            "- When get_messages shows a Custom Action name but you need full parameter details\n\n" +

            "RELATIONSHIP TO OTHER TOOLS:\n" +
            "- get_messages: returns Custom API names only -- use get_apis for full detail\n" +
            "- execute_fetchxml: can query customapi entity directly but requires knowledge of " +
            "3 joined entities and type value mappings\n\n" +

            "TIPS:\n" +
            "- By default, Microsoft-provided APIs are excluded (set include_microsoft=true to see them)\n" +
            "- A Custom API with isFunction=true is called via GET (no side effects); " +
            "isFunction=false is an Action called via POST\n" +
            "- Custom APIs without a pluginType have no server-side logic (useful for client-only flows)")]
        public CallToolResult get_apis(
            [Description(
                "Unique name of a specific Custom API to get full detail " +
                "(parameters + response properties + plugin binding). " +
                "Leave empty to list all Custom APIs matching filters. " +
                "Examples: 'v4_AccountCustomApi', 'new_ProcessOrder'."
            )] string api_name = "",
            [Description(
                "Filter by bound entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead'. " +
                "Leave empty to include all binding types (global + entity-bound). " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name = "",
            [Description(
                "Include Microsoft-provided APIs (prefixed msdyn_, mspp_, etc.). " +
                "Default false to reduce noise -- production environments can have 200+ Microsoft APIs."
            )] bool include_microsoft = false,
            [Description(
                "Filter by status: 'active' (default), 'inactive', or 'all'."
            )] string status = "active",
            [Description(
                "Maximum results in list mode (1-500). Default: 100. Ignored in detail mode."
            )] int max_records = 100)
        {
            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s != "active" && s != "inactive" && s != "all")
                    return ErrorResult($"Error: Invalid status '{status.Trim()}'. Use 'active', 'inactive', or 'all'.");
            }

            if (max_records <= 0) max_records = 100;
            if (max_records > 500) max_records = 500;

            try
            {
                if (!string.IsNullOrWhiteSpace(api_name))
                    return GetDetail(api_name.Trim());
                else
                    return GetList(entity_name, include_microsoft, status, max_records);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve Custom APIs: {ex.Message}");
            }
        }

        private CallToolResult GetList(string entityName, bool includeMicrosoft, string status, int maxRecords)
        {
            var filters = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(entityName))
                filters.AppendLine($"      <condition attribute='boundentitylogicalname' operator='eq' value='{EscapeXml(entityName.Trim().ToLowerInvariant())}'/>");

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

            if (!includeMicrosoft)
                entities = entities.Where(e => !IsMicrosoftApi(e.GetAttributeValue<string>("uniquename"))).ToList();

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
    <filter>
      <condition attribute='uniquename' operator='eq' value='{EscapeXml(apiName)}'/>
    </filter>
  </entity>
</fetch>";

            var apiResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchApi));
            if (apiResult.Entities.Count == 0)
                return ErrorResult($"Error: Custom API '{apiName}' not found.");

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

        private static bool IsMicrosoftApi(string uniqueName)
        {
            if (string.IsNullOrEmpty(uniqueName)) return false;
            return MsftPrefixes.Any(p => uniqueName.StartsWith(p, StringComparison.OrdinalIgnoreCase));
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
