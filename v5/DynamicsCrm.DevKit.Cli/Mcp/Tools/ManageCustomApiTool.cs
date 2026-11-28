using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public class ManageCustomApiTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private readonly IMcpConnectionResolver _connections;

        public ManageCustomApiTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
            : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageCustomApiTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
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

        private static readonly Dictionary<string, int> ParameterTypeReverseMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["boolean"] = 0,
            ["bool"] = 0,
            ["datetime"] = 1,
            ["decimal"] = 2,
            ["entity"] = 3,
            ["entitycollection"] = 4,
            ["entityreference"] = 5,
            ["float"] = 6,
            ["integer"] = 7,
            ["int"] = 7,
            ["money"] = 8,
            ["picklist"] = 9,
            ["string"] = 10,
            ["stringarray"] = 11,
            ["guid"] = 12
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

        private sealed class ParameterSpec
        {
            public string Action { get; set; }
            public string Name { get; set; }
            public string DisplayName { get; set; }
            public string Type { get; set; }
            public int TypeCode { get; set; } = -1;
            public bool? IsOptional { get; set; }
            public string LogicalEntityName { get; set; }
            public string Description { get; set; }
        }

        [McpServerTool(Name = "manage_custom_api",
            Title = "Manage custom API definitions",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageCustomApiResult)),
        Description(
            "Manage modern Dataverse Custom API definitions, request parameters, and response properties. Actions: 'list', 'detail' (read-only) | 'create', 'update', 'delete' (mutations — confirm first). 'create' REQUIRES solution_name (unmanaged; validates publisher prefix consistency and blocks reserved prefix 'new') and display_name (api_name is optional and auto-derived if omitted). When supplied, solution_name applies to new records. Related writes are atomic. 'update' and 'delete' are blocked for managed APIs and APIs backing Power Fx functions. 'delete' is irreversible.\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect a Custom API's request/response parameters and plugin binding before registering or invoking it\n" +
            "- Discover Custom APIs bound to a specific entity\n" +
            "- Create, update, or delete unmanaged Custom APIs with their request parameters and response properties in a target solution\n\n" +
            "For Custom API and related server-logic inspection modes, read docs://server_logic_guide.\n\n" +
            "RELATED TOOLS:\n" +
            "- inspect_automation(resource='messages') → legacy workflow Custom Actions (category=3) + SDK messages\n" +
            "- inspect_automation(resource='plugins') → plugin assemblies/types/steps registered on these APIs\n" +
            "- manage_logic(resource='function') → Power Fx functions backed by Custom APIs\n" +
            "- inspect_metadata(resource='solution_components') → verify Custom API solution membership")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("'list', 'detail', 'create', 'update', 'delete'.")] string action = "",
            [Description("Display Name, unique name, or GUID. Required: detail/update/delete. Optional on create (auto-derived from solution prefix + display_name if omitted; must start with publisher prefix if provided).")] string api_name = "",
            [Description("Bound entity Display/logical name. 'list': filter. 'create': required when binding_type is 'Entity' or 'EntityCollection'.")] string entity_name = "",
            [Description("Unmanaged solution unique/display name. Required: create. Optional: update (adds new parameters/properties to this solution).")] string solution_name = "",
            [Description("Human-readable label. Required: create. Optional: update.")] string display_name = "",
            [Description("Optional description for create/update.")] string description = "",
            [Description("Create only (immutable): 'Global' (default), 'Entity', or 'EntityCollection'.")] string binding_type = "",
            [Description("Create only (immutable): false = Action (default), true = Function.")] bool? is_function = null,
            [Description("Optional: create/update. Default false on create.")] bool? is_private = null,
            [Description("Create only. 'None' (default), 'AsyncOnly', or 'SyncAndAsync'.")] string allowed_custom_processing_step_type = "",
            [Description("Create only. Enable workflow SDK step (default false).")] bool? workflow_sdk_step_enabled = null,
            [Description("Optional: create/update. Execute privilege name required to invoke this API.")] string execute_privilege_name = "",
            [Description("Optional JSON array string of request parameters for create/update: [{\"name\":\"ntf_To\",\"type\":\"String\",\"is_optional\":true,\"display_name\":\"To\",\"description\":\"...\",\"logical_entity_name\":\"...\"}]. On update, each item accepts optional \"action\": \"add\"|\"update\"|\"remove\". Existing items allow changes to display_name and description.")] string request_parameters = "",
            [Description("Optional JSON array string of response properties for create/update: [{\"name\":\"ntf_IsSuccess\",\"type\":\"Boolean\",\"display_name\":\"Is Success\",\"description\":\"...\",\"logical_entity_name\":\"...\"}]. On update, each item accepts optional \"action\": \"add\"|\"update\"|\"remove\". Existing items allow changes to display_name and description.")] string response_properties = "",
            [Description("List only: include managed APIs. Default false.")] bool include_microsoft = false,
            [Description("List only: 'active' / 'inactive' / 'all'.")] string status = "active",
            [Description("List only: 1-500. Default 100.")] int max_records = 100,
            [Description(McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default)
        {
            return McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageCustomApiTool(conn.OrgService, conn.Options, conn.Context);
                return System.Threading.Tasks.Task.FromResult(worker.manage_custom_api(
                    action, api_name, entity_name, solution_name, display_name, description,
                    binding_type, is_function, is_private, allowed_custom_processing_step_type,
                    workflow_sdk_step_enabled, execute_privilege_name,
                    request_parameters, response_properties,
                    include_microsoft, status, max_records));
            }, cancellationToken);
        }

        public CallToolResult manage_custom_api(
            string action = "",
            string api_name = "",
            string entity_name = "",
            string solution_name = "",
            string display_name = "",
            string description = "",
            string binding_type = "",
            bool? is_function = null,
            bool? is_private = null,
            string allowed_custom_processing_step_type = "",
            bool? workflow_sdk_step_enabled = null,
            string execute_privilege_name = "",
            string request_parameters = "",
            string response_properties = "",
            bool include_microsoft = false,
            string status = "active",
            int max_records = 100)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update', 'delete'.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                return normalizedAction switch
                {
                    "list" => HandleList(entity_name, include_microsoft, status, max_records),
                    "detail" => HandleDetail(api_name),
                    "create" => HandleCreate(
                        api_name, display_name, description, binding_type, entity_name,
                        is_function, is_private, allowed_custom_processing_step_type,
                        workflow_sdk_step_enabled, execute_privilege_name,
                        request_parameters, response_properties, solution_name),
                    "update" => HandleUpdate(
                        api_name, display_name, description, is_private,
                        allowed_custom_processing_step_type, workflow_sdk_step_enabled,
                        execute_privilege_name, request_parameters, response_properties, solution_name),
                    "delete" => HandleDelete(api_name),
                    _ => Error($"Invalid action '{action.Trim()}'.", "Valid values: 'list', 'detail', 'create', 'update', 'delete'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleList(string entityName, bool includeMicrosoft, string status, int maxRecords)
        {
            var normalizedStatus = (status ?? "active").Trim().ToLowerInvariant();
            if (normalizedStatus != "active" && normalizedStatus != "inactive" && normalizedStatus != "all")
                return Error($"Invalid status '{status.Trim()}'.",
                    "Use 'active', 'inactive', or 'all'. Default 'active'.");

            if (maxRecords <= 0) maxRecords = 100;
            if (maxRecords > 500) maxRecords = 500;

            var resolvedEntity = string.IsNullOrWhiteSpace(entityName)
                ? null
                : entityName.Trim().ToLowerInvariant();
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_logic(resource='custom_api')");
                if (!entityResult.IsSuccess)
                    return Error(
                        entityResult.Error.Split("\r\n")[0],
                        "Use inspect_metadata(resource='tables') to list entities before calling manage_logic(resource='custom_api').");
                resolvedEntity = entityResult.Value.LogicalName;
            }

            var filters = new StringBuilder();
            if (!string.IsNullOrWhiteSpace(resolvedEntity))
                filters.AppendLine($"      <condition attribute='boundentitylogicalname' operator='eq' value='{EscapeXml(resolvedEntity)}'/>");

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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            var apis = result.Entities.Select(MapListEntry).ToList();
            var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
            var entityLabel = string.IsNullOrWhiteSpace(resolvedEntity) ? "" : $" (entity: {resolvedEntity})";

            var structured = new ManageCustomApiResult
            {
                Action = "list",
                TotalCount = apis.Count,
                EntityFilter = string.IsNullOrWhiteSpace(resolvedEntity) ? null : resolvedEntity,
                Apis = apis.Count > 0 ? apis : null
            };

            return Success($"{statusLabel.TrimStart()} custom APIs{entityLabel}: {apis.Count} found.".TrimStart(), structured);
        }

        private CallToolResult HandleDetail(string apiName)
        {
            if (string.IsNullOrWhiteSpace(apiName))
                return Error("api_name is required for action='detail'.",
                    "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs.");

            var apiResult = ResolveCustomApi(apiName.Trim());
            if (!apiResult.IsSuccess)
                return Error(
                    apiResult.Error.Split("\r\n")[0],
                    apiResult.Status == ResolveStatus.NotFound
                        ? "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs."
                        : "Re-call with a more specific api_name value.");

            return BuildDetail(apiResult.CanonicalName);
        }

        private CallToolResult HandleCreate(
            string apiName,
            string displayName,
            string description,
            string bindingType,
            string entityName,
            bool? isFunction,
            bool? isPrivate,
            string allowedProcessingStepType,
            bool? workflowSdkStepEnabled,
            string executePrivilegeName,
            string requestParametersJson,
            string responsePropertiesJson,
            string solutionName)
        {
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for action='create'.",
                    "Provide the target unmanaged solution unique or display name so the publisher prefix can be validated and all created components added to the solution.");

            if (string.IsNullOrWhiteSpace(displayName))
                return Error("display_name is required for action='create'.",
                    "Provide a human-readable display name for the Custom API.");

            var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim(), requireUnmanaged: true);
            if (!solResult.IsSuccess)
                return Error(solResult.Error.Split("\r\n")[0], "Use inspect_metadata(resource='solution_components') to find valid unmanaged solution names.");

            if (solResult.Prefix.Equals("new", StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"The publisher for solution '{solResult.UniqueName}' uses the reserved prefix 'new'.",
                    "Set a proper customization prefix on the publisher in Power Apps, then retry.");

            var prefix = solResult.Prefix.Trim().ToLowerInvariant();
            var expectedPrefix = $"{prefix}_";

            string uniqueName;
            if (string.IsNullOrWhiteSpace(apiName))
            {
                var sanitized = SanitizeIdentifier(displayName);
                if (string.IsNullOrWhiteSpace(sanitized))
                    return Error("Unable to derive a valid unique name from display_name.",
                        $"Provide api_name explicitly starting with '{expectedPrefix}'.");
                uniqueName = $"{expectedPrefix}{sanitized}";
            }
            else
            {
                uniqueName = apiName.Trim();
                if (!uniqueName.StartsWith(expectedPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    var bare = uniqueName.Contains('_') ? uniqueName[(uniqueName.IndexOf('_') + 1)..] : uniqueName;
                    return Error(
                        $"Custom API unique name '{uniqueName}' does not match solution '{solResult.UniqueName}' publisher prefix '{expectedPrefix}'.",
                        $"Use '{expectedPrefix}{bare}' or omit api_name to auto-derive it.");
                }
            }

            if (!TryParseBindingType(bindingType, out var bindingTypeCode, out var bindingError))
                return Error(bindingError, "Valid binding_type values: 'Global', 'Entity', 'EntityCollection'.");

            string boundEntityLogicalName = null;
            if (bindingTypeCode == 0)
            {
                if (!string.IsNullOrWhiteSpace(entityName))
                    return Error("entity_name must be omitted when binding_type is 'Global'.",
                        "Set binding_type='Entity' or 'EntityCollection' to bind to a table, or omit entity_name for a Global API.");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(entityName))
                    return Error($"entity_name is required when binding_type is '{BindingTypeMap[bindingTypeCode]}'.",
                        "Provide the bound table's display or logical name.");
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_logic(resource='custom_api')");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to verify the bound entity logical name.");
                boundEntityLogicalName = entityResult.Value.LogicalName;
            }

            if (!TryParseProcessingType(allowedProcessingStepType, out var processingTypeCode, out var processingError))
                return Error(processingError, "Valid allowed_custom_processing_step_type values: 'None', 'AsyncOnly', 'SyncAndAsync'.");

            if (!TryParseParameterSpecs(requestParametersJson, isRequest: true, forUpdate: false, out var reqSpecs, out var reqErr))
                return Error(reqErr, "Provide request_parameters as a JSON array of {\"name\":\"...\",\"type\":\"String\",...}.");

            if (!TryParseParameterSpecs(responsePropertiesJson, isRequest: false, forUpdate: false, out var respSpecs, out var respErr))
                return Error(respErr, "Provide response_properties as a JSON array of {\"name\":\"...\",\"type\":\"String\",...}.");

            // Check duplicate unique name
            var existing = FindCustomApiByUniqueName(uniqueName);
            if (existing != null)
                return Error($"Custom API '{uniqueName}' already exists.",
                    "Use action='update' to modify it or choose a different api_name.");

            var trimmedDisplayName = displayName.Trim();
            var trimmedDesc = string.IsNullOrWhiteSpace(description) ? trimmedDisplayName : description.Trim();
            var fnFlag = isFunction ?? false;
            var privFlag = isPrivate ?? false;
            var wfFlag = workflowSdkStepEnabled ?? false;

            if (_options.DryRun)
            {
                return DryRun(
                    $"Would CREATE Custom API '{uniqueName}' ({BindingTypeMap[bindingTypeCode]}) in solution '{solResult.UniqueName}' with {reqSpecs.Count} request parameter(s) and {respSpecs.Count} response property(ies).",
                    new ManageCustomApiResult
                    {
                        Action = "create",
                        Status = "not_executed",
                        UniqueName = uniqueName,
                        DisplayName = trimmedDisplayName,
                        SolutionName = solResult.UniqueName,
                        CreateMode = "CreateRequestWithSolutionUniqueName",
                        IsAddToSolution = false,
                        AddToSolutionMethod = "none",
                        RequestParametersAdded = reqSpecs.Count > 0 ? reqSpecs.Select(p => p.Name).ToList() : null,
                        ResponsePropertiesAdded = respSpecs.Count > 0 ? respSpecs.Select(p => p.Name).ToList() : null
                    });
            }

            // The client supplies the parent ID so child requests can reference it in the same transaction.
            var customApiId = Guid.NewGuid();
            var apiEntity = new Entity("customapi", customApiId)
            {
                ["uniquename"] = uniqueName,
                ["name"] = uniqueName,
                ["displayname"] = trimmedDisplayName,
                ["description"] = trimmedDesc,
                ["bindingtype"] = new OptionSetValue(bindingTypeCode),
                ["isfunction"] = fnFlag,
                ["isprivate"] = privFlag,
                ["allowedcustomprocessingsteptype"] = new OptionSetValue(processingTypeCode),
                ["workflowsdkstepenabled"] = wfFlag
            };
            if (!string.IsNullOrWhiteSpace(boundEntityLogicalName))
                apiEntity["boundentitylogicalname"] = boundEntityLogicalName;
            if (!string.IsNullOrWhiteSpace(executePrivilegeName))
                apiEntity["executeprivilegename"] = executePrivilegeName.Trim();

            var requests = new OrganizationRequestCollection { BuildCreateRequest(apiEntity, solResult.UniqueName) };
            foreach (var spec in reqSpecs)
            {
                var paramEntity = BuildRequestParameterEntity(customApiId, spec);
                requests.Add(BuildCreateRequest(paramEntity, solResult.UniqueName));
            }

            foreach (var spec in respSpecs)
            {
                var propEntity = BuildResponsePropertyEntity(customApiId, spec);
                requests.Add(BuildCreateRequest(propEntity, solResult.UniqueName));
            }
            ExecuteWrites(requests);

            var structured = new ManageCustomApiResult
            {
                Action = "created",
                Status = "created",
                CustomApiId = customApiId.ToString(),
                UniqueName = uniqueName,
                DisplayName = trimmedDisplayName,
                SolutionName = solResult.UniqueName,
                CreateMode = "CreateRequestWithSolutionUniqueName",
                IsAddToSolution = true,
                AddToSolutionMethod = "SolutionUniqueName",
                RequestParametersAdded = reqSpecs.Count > 0 ? reqSpecs.Select(spec => spec.Name).ToList() : null,
                ResponsePropertiesAdded = respSpecs.Count > 0 ? respSpecs.Select(spec => spec.Name).ToList() : null
            };

            return Success(
                $"Created Custom API '{uniqueName}' ({customApiId}) in solution '{solResult.UniqueName}' with {reqSpecs.Count} request parameter(s) and {respSpecs.Count} response property(ies).",
                structured);
        }

        private CallToolResult HandleUpdate(
            string apiName,
            string displayName,
            string description,
            bool? isPrivate,
            string allowedProcessingStepType,
            bool? workflowSdkStepEnabled,
            string executePrivilegeName,
            string requestParametersJson,
            string responsePropertiesJson,
            string solutionName)
        {
            if (string.IsNullOrWhiteSpace(apiName))
                return Error("api_name is required for action='update'.",
                    "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs.");

            var resolved = ResolveCustomApi(apiName.Trim());
            if (!resolved.IsSuccess)
                return Error(
                    resolved.Error.Split("\r\n")[0],
                    resolved.Status == ResolveStatus.NotFound
                        ? "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs."
                        : "Re-call with a more specific api_name value.");

            var existing = _orgService.Retrieve("customapi", resolved.Value.Id,
                new ColumnSet("customapiid", "uniquename", "displayname", "description", "ismanaged", "isprivate",
                    "allowedcustomprocessingsteptype", "workflowsdkstepenabled", "executeprivilegename", "fxexpressionid"));

            if (existing.GetAttributeValue<bool>("ismanaged"))
                return Error($"Custom API '{resolved.CanonicalName}' is managed and cannot be updated.",
                    "Only unmanaged Custom APIs can be modified.");
            if (existing.GetAttributeValue<EntityReference>("fxexpressionid") != null)
                return Error($"Custom API '{resolved.CanonicalName}' backs a Power Fx function and cannot be updated here.",
                    "Author Power Fx functions in the maker portal or through solution ALM.");

            string resolvedSolutionName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim(), requireUnmanaged: true);
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use inspect_metadata(resource='solution_components') to find valid unmanaged solution names.");
                resolvedSolutionName = solResult.UniqueName;
            }

            if (!string.IsNullOrWhiteSpace(allowedProcessingStepType))
            {
                if (!TryParseProcessingType(allowedProcessingStepType, out var requestedProcessingType, out var procErr))
                    return Error(procErr, "Valid allowed_custom_processing_step_type values: 'None', 'AsyncOnly', 'SyncAndAsync'.");
                if (requestedProcessingType != (existing.GetAttributeValue<OptionSetValue>("allowedcustomprocessingsteptype")?.Value ?? 0))
                    return Error("allowed_custom_processing_step_type can only be set when creating a Custom API.",
                        "Omit allowed_custom_processing_step_type from the update.");
            }
            if (workflowSdkStepEnabled.HasValue && workflowSdkStepEnabled.Value != existing.GetAttributeValue<bool>("workflowsdkstepenabled"))
                return Error("workflow_sdk_step_enabled can only be set when creating a Custom API.",
                    "Omit workflow_sdk_step_enabled from the update.");

            if (!TryParseParameterSpecs(requestParametersJson, isRequest: true, forUpdate: true, out var reqSpecs, out var reqErr))
                return Error(reqErr, "Provide request_parameters as a JSON array.");

            if (!TryParseParameterSpecs(responsePropertiesJson, isRequest: false, forUpdate: true, out var respSpecs, out var respErr))
                return Error(respErr, "Provide response_properties as a JSON array.");

            var updateEntity = new Entity("customapi", existing.Id);
            if (!string.IsNullOrWhiteSpace(displayName))
                updateEntity["displayname"] = displayName.Trim();
            if (!string.IsNullOrWhiteSpace(description))
                updateEntity["description"] = description.Trim();
            if (isPrivate.HasValue)
                updateEntity["isprivate"] = isPrivate.Value;
            if (!string.IsNullOrWhiteSpace(executePrivilegeName))
                updateEntity["executeprivilegename"] = executePrivilegeName.Trim();

            var hasMetadataChanges = updateEntity.Attributes.Count > 0;
            var hasParamChanges = reqSpecs.Count > 0 || respSpecs.Count > 0;

            if (!hasMetadataChanges && !hasParamChanges)
                return Error($"Nothing to update for Custom API '{resolved.CanonicalName}'.",
                    "Provide at least one metadata field or request_parameters / response_properties changes.");

            var existingReqParams = reqSpecs.Count > 0 ? FetchChildRecords("customapirequestparameter", existing.Id) : new Dictionary<string, Entity>(StringComparer.OrdinalIgnoreCase);
            var existingRespProps = respSpecs.Count > 0 ? FetchChildRecords("customapiresponseproperty", existing.Id) : new Dictionary<string, Entity>(StringComparer.OrdinalIgnoreCase);

            // Validate parameter actions before mutating
            var reqPlan = PlanChildMutations(reqSpecs, existingReqParams, "request parameter");
            if (reqPlan.Error != null) return Error(reqPlan.Error, "Check request_parameters names and actions.");

            var respPlan = PlanChildMutations(respSpecs, existingRespProps, "response property");
            if (respPlan.Error != null) return Error(respPlan.Error, "Check response_properties names and actions.");

            var uniqueName = existing.GetAttributeValue<string>("uniquename") ?? resolved.CanonicalName;
            var finalDisplayName = !string.IsNullOrWhiteSpace(displayName) ? displayName.Trim() : existing.GetAttributeValue<string>("displayname");

            if (_options.DryRun)
            {
                return DryRun(
                    $"Would UPDATE Custom API '{uniqueName}' (metadata={hasMetadataChanges}, reqParams +{reqPlan.ToAdd.Count}/~{reqPlan.ToUpdate.Count}/-{reqPlan.ToRemove.Count}, respProps +{respPlan.ToAdd.Count}/~{respPlan.ToUpdate.Count}/-{respPlan.ToRemove.Count}).",
                    new ManageCustomApiResult
                    {
                        Action = "update",
                        Status = "not_executed",
                        CustomApiId = existing.Id.ToString(),
                        UniqueName = uniqueName,
                        DisplayName = finalDisplayName,
                        SolutionName = resolvedSolutionName,
                        RequestParametersAdded = reqPlan.ToAdd.Count > 0 ? reqPlan.ToAdd.Select(p => p.Name).ToList() : null,
                        RequestParametersUpdated = reqPlan.ToUpdate.Count > 0 ? reqPlan.ToUpdate.Select(p => p.Spec.Name).ToList() : null,
                        RequestParametersRemoved = reqPlan.ToRemove.Count > 0 ? reqPlan.ToRemove.Select(p => p.Name).ToList() : null,
                        ResponsePropertiesAdded = respPlan.ToAdd.Count > 0 ? respPlan.ToAdd.Select(p => p.Name).ToList() : null,
                        ResponsePropertiesUpdated = respPlan.ToUpdate.Count > 0 ? respPlan.ToUpdate.Select(p => p.Spec.Name).ToList() : null,
                        ResponsePropertiesRemoved = respPlan.ToRemove.Count > 0 ? respPlan.ToRemove.Select(p => p.Name).ToList() : null
                    });
            }

            var requests = new OrganizationRequestCollection();
            if (hasMetadataChanges)
                requests.Add(new UpdateRequest { Target = updateEntity });

            var reqAdded = new List<string>();
            var reqUpdated = new List<string>();
            var reqRemoved = new List<string>();
            AppendChildRequests(requests, existing.Id, "customapirequestparameter", isRequest: true, reqPlan, resolvedSolutionName, reqAdded, reqUpdated, reqRemoved);

            var respAdded = new List<string>();
            var respUpdated = new List<string>();
            var respRemoved = new List<string>();
            AppendChildRequests(requests, existing.Id, "customapiresponseproperty", isRequest: false, respPlan, resolvedSolutionName, respAdded, respUpdated, respRemoved);

            ExecuteWrites(requests);

            var structured = new ManageCustomApiResult
            {
                Action = "updated",
                Status = "updated",
                CustomApiId = existing.Id.ToString(),
                UniqueName = uniqueName,
                DisplayName = finalDisplayName,
                SolutionName = resolvedSolutionName,
                IsAddToSolution = !string.IsNullOrWhiteSpace(resolvedSolutionName) && (reqAdded.Count > 0 || respAdded.Count > 0) ? true : null,
                AddToSolutionMethod = !string.IsNullOrWhiteSpace(resolvedSolutionName) && (reqAdded.Count > 0 || respAdded.Count > 0) ? "SolutionUniqueName" : null,
                RequestParametersAdded = reqAdded.Count > 0 ? reqAdded : null,
                RequestParametersUpdated = reqUpdated.Count > 0 ? reqUpdated : null,
                RequestParametersRemoved = reqRemoved.Count > 0 ? reqRemoved : null,
                ResponsePropertiesAdded = respAdded.Count > 0 ? respAdded : null,
                ResponsePropertiesUpdated = respUpdated.Count > 0 ? respUpdated : null,
                ResponsePropertiesRemoved = respRemoved.Count > 0 ? respRemoved : null
            };

            return Success($"Updated Custom API '{uniqueName}'.", structured);
        }

        private CallToolResult HandleDelete(string apiName)
        {
            if (string.IsNullOrWhiteSpace(apiName))
                return Error("api_name is required for action='delete'.",
                    "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs.");

            var resolved = ResolveCustomApi(apiName.Trim());
            if (!resolved.IsSuccess)
                return Error(
                    resolved.Error.Split("\r\n")[0],
                    resolved.Status == ResolveStatus.NotFound
                        ? "Use manage_logic(resource='custom_api', action='list') to list available Custom APIs."
                        : "Re-call with a more specific api_name value.");

            var existing = _orgService.Retrieve("customapi", resolved.Value.Id,
                new ColumnSet("customapiid", "uniquename", "displayname", "ismanaged", "fxexpressionid"));

            var uniqueName = existing.GetAttributeValue<string>("uniquename") ?? resolved.CanonicalName;
            var existingDisplayName = existing.GetAttributeValue<string>("displayname");

            if (existing.GetAttributeValue<bool>("ismanaged"))
                return Error($"Custom API '{uniqueName}' is managed and cannot be deleted.",
                    "Only unmanaged Custom APIs can be deleted.");
            if (existing.GetAttributeValue<EntityReference>("fxexpressionid") != null)
                return Error($"Custom API '{uniqueName}' backs a Power Fx function and cannot be deleted here.",
                    "Delete the Power Fx function in the maker portal or through solution ALM.");

            if (_options.DryRun)
            {
                return DryRun($"Would DELETE unmanaged Custom API '{uniqueName}' ({existing.Id}).",
                    new ManageCustomApiResult
                    {
                        Action = "delete",
                        Status = "not_executed",
                        CustomApiId = existing.Id.ToString(),
                        UniqueName = uniqueName,
                        DisplayName = existingDisplayName
                    });
            }

            DataverseMutationExecutor.Delete(_context, _orgService, "customapi", existing.Id);

            return Success($"Deleted Custom API '{uniqueName}' ({existing.Id}).",
                new ManageCustomApiResult
                {
                    Action = "deleted",
                    Status = "deleted",
                    CustomApiId = existing.Id.ToString(),
                    UniqueName = uniqueName,
                    DisplayName = existingDisplayName
                });
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

            var apiResult = _orgService.RetrieveMultiple(new FetchExpression(fetchApi));
            if (apiResult.Entities.Count == 0)
                return Error(
                    $"Custom API '{apiName}' not found.",
                    "Call manage_logic(resource='custom_api', action='list') to list available Custom APIs.");

            var api = apiResult.Entities[0];
            var customApiId = api.Id;

            var fetchParams = $@"<fetch>
  <entity name='customapirequestparameter'>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='displayname'/>
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
    <attribute name='displayname'/>
    <attribute name='type'/>
    <attribute name='logicalentityname'/>
    <attribute name='description'/>
    <filter>
      <condition attribute='customapiid' operator='eq' value='{customApiId}'/>
    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>";

            var paramsResult = _orgService.RetrieveMultiple(new FetchExpression(fetchParams));
            var responseResult = _orgService.RetrieveMultiple(new FetchExpression(fetchResponse));

            var entry = MapDetailEntry(api);
            if (!string.IsNullOrEmpty(entry.SolutionId) && string.IsNullOrEmpty(entry.SolutionName))
                entry.SolutionName = ResolveSolutionName(entry.SolutionId);
            entry.RequestParameters = paramsResult.Entities.Select(MapRequestParameter).ToList();
            if (entry.RequestParameters.Count == 0) entry.RequestParameters = null;
            entry.ResponseProperties = responseResult.Entities.Select(MapResponseProperty).ToList();
            if (entry.ResponseProperties.Count == 0) entry.ResponseProperties = null;

            var structured = new ManageCustomApiResult
            {
                Action = "detail",
                TotalCount = 1,
                CustomApiId = entry.CustomApiId,
                UniqueName = entry.UniqueName,
                DisplayName = entry.DisplayName,
                Apis = [entry]
            };

            var paramCount = entry.RequestParameters?.Count ?? 0;
            var responseCount = entry.ResponseProperties?.Count ?? 0;

            return Success(
                $"Custom API '{entry.UniqueName}': {paramCount} request params, {responseCount} response properties.",
                structured);
        }

        private void ExecuteWrites(OrganizationRequestCollection requests)
        {
            if (requests.Count == 1)
                DataverseMutationExecutor.Execute(_context, _orgService, requests[0]);
            else if (requests.Count > 1)
                DataverseMutationExecutor.Execute(_context, _orgService, new ExecuteTransactionRequest
                {
                    Requests = requests,
                    ReturnResponses = false
                });
        }

        private static CreateRequest BuildCreateRequest(Entity entity, string solutionUniqueName)
        {
            var req = new CreateRequest { Target = entity };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(req, solutionUniqueName);
            return req;
        }

        private static Entity BuildRequestParameterEntity(Guid customApiId, ParameterSpec spec)
        {
            var displayName = string.IsNullOrWhiteSpace(spec.DisplayName) ? spec.Name : spec.DisplayName;
            var entity = new Entity("customapirequestparameter")
            {
                ["customapiid"] = new EntityReference("customapi", customApiId),
                ["uniquename"] = spec.Name,
                ["name"] = spec.Name,
                ["displayname"] = displayName,
                ["description"] = string.IsNullOrWhiteSpace(spec.Description) ? displayName : spec.Description,
                ["type"] = new OptionSetValue(spec.TypeCode),
                ["isoptional"] = spec.IsOptional ?? false
            };
            if (!string.IsNullOrWhiteSpace(spec.LogicalEntityName))
                entity["logicalentityname"] = spec.LogicalEntityName.Trim().ToLowerInvariant();
            return entity;
        }

        private static Entity BuildResponsePropertyEntity(Guid customApiId, ParameterSpec spec)
        {
            var displayName = string.IsNullOrWhiteSpace(spec.DisplayName) ? spec.Name : spec.DisplayName;
            var entity = new Entity("customapiresponseproperty")
            {
                ["customapiid"] = new EntityReference("customapi", customApiId),
                ["uniquename"] = spec.Name,
                ["name"] = spec.Name,
                ["displayname"] = displayName,
                ["description"] = string.IsNullOrWhiteSpace(spec.Description) ? displayName : spec.Description,
                ["type"] = new OptionSetValue(spec.TypeCode)
            };
            if (!string.IsNullOrWhiteSpace(spec.LogicalEntityName))
                entity["logicalentityname"] = spec.LogicalEntityName.Trim().ToLowerInvariant();
            return entity;
        }

        private Dictionary<string, Entity> FetchChildRecords(string childEntityName, Guid customApiId)
        {
            var query = new QueryExpression(childEntityName)
            {
                ColumnSet = new ColumnSet("uniquename", "name", "displayname", "description", "type", "logicalentityname")
            };
            if (childEntityName == "customapirequestparameter")
                query.ColumnSet.AddColumn("isoptional");
            query.Criteria.AddCondition("customapiid", ConditionOperator.Equal, customApiId);

            var dict = new Dictionary<string, Entity>(StringComparer.OrdinalIgnoreCase);
            foreach (var e in _orgService.RetrieveMultiple(query).Entities)
            {
                var key = e.GetAttributeValue<string>("uniquename") ?? e.GetAttributeValue<string>("name");
                if (!string.IsNullOrWhiteSpace(key))
                    dict[key] = e;
            }
            return dict;
        }

        private sealed class ChildMutationPlan
        {
            public List<ParameterSpec> ToAdd { get; } = [];
            public List<(Entity Existing, ParameterSpec Spec)> ToUpdate { get; } = [];
            public List<(Guid Id, string Name)> ToRemove { get; } = [];
            public string Error { get; set; }
        }

        private static ChildMutationPlan PlanChildMutations(List<ParameterSpec> specs, Dictionary<string, Entity> existingMap, string kindLabel)
        {
            var plan = new ChildMutationPlan();
            foreach (var spec in specs)
            {
                var itemAction = (spec.Action ?? "").Trim().ToLowerInvariant();
                var exists = existingMap.TryGetValue(spec.Name, out var existing);

                if (itemAction is "remove" or "delete")
                {
                    if (!exists)
                    {
                        plan.Error = $"Cannot remove {kindLabel} '{spec.Name}': not found on this Custom API.";
                        return plan;
                    }
                    plan.ToRemove.Add((existing.Id, spec.Name));
                }
                else if (itemAction == "add" || (string.IsNullOrEmpty(itemAction) && !exists))
                {
                    if (exists)
                    {
                        plan.Error = $"Cannot add {kindLabel} '{spec.Name}': already exists. Use action='update' to modify it.";
                        return plan;
                    }
                    if (spec.TypeCode < 0)
                    {
                        plan.Error = $"Parameter type is required when adding {kindLabel} '{spec.Name}'.";
                        return plan;
                    }
                    plan.ToAdd.Add(spec);
                }
                else if (itemAction == "update" || (string.IsNullOrEmpty(itemAction) && exists))
                {
                    if (!exists)
                    {
                        plan.Error = $"Cannot update {kindLabel} '{spec.Name}': not found on this Custom API.";
                        return plan;
                    }
                    if (spec.TypeCode >= 0 && spec.TypeCode != existing.GetAttributeValue<OptionSetValue>("type")?.Value)
                    {
                        plan.Error = $"Cannot change type on existing {kindLabel} '{spec.Name}'.";
                        return plan;
                    }
                    if (spec.IsOptional.HasValue && spec.IsOptional.Value != existing.GetAttributeValue<bool>("isoptional"))
                    {
                        plan.Error = $"Cannot change is_optional on existing {kindLabel} '{spec.Name}'.";
                        return plan;
                    }
                    if (!string.IsNullOrWhiteSpace(spec.LogicalEntityName) && !string.Equals(spec.LogicalEntityName.Trim(),
                        existing.GetAttributeValue<string>("logicalentityname"), StringComparison.OrdinalIgnoreCase))
                    {
                        plan.Error = $"Cannot change logical_entity_name on existing {kindLabel} '{spec.Name}'.";
                        return plan;
                    }
                    plan.ToUpdate.Add((existing, spec));
                }
                else
                {
                    plan.Error = $"Invalid item action '{spec.Action}' for {kindLabel} '{spec.Name}'. Valid values: 'add', 'update', 'remove'.";
                    return plan;
                }
            }
            return plan;
        }

        private static void AppendChildRequests(
            OrganizationRequestCollection requests,
            Guid customApiId,
            string childEntityName,
            bool isRequest,
            ChildMutationPlan plan,
            string solutionUniqueName,
            List<string> added,
            List<string> updated,
            List<string> removed)
        {
            foreach (var spec in plan.ToAdd)
            {
                var entity = isRequest
                    ? BuildRequestParameterEntity(customApiId, spec)
                    : BuildResponsePropertyEntity(customApiId, spec);
                requests.Add(BuildCreateRequest(entity, solutionUniqueName));
                added.Add(spec.Name);
            }

            foreach (var (existing, spec) in plan.ToUpdate)
            {
                var patch = new Entity(childEntityName, existing.Id);
                if (!string.IsNullOrWhiteSpace(spec.DisplayName))
                    patch["displayname"] = spec.DisplayName;
                if (!string.IsNullOrWhiteSpace(spec.Description))
                    patch["description"] = spec.Description;
                if (patch.Attributes.Count > 0)
                {
                    requests.Add(new UpdateRequest { Target = patch });
                    updated.Add(spec.Name);
                }
            }

            foreach (var (id, name) in plan.ToRemove)
            {
                requests.Add(new DeleteRequest { Target = new EntityReference(childEntityName, id) });
                removed.Add(name);
            }
        }

        private static bool TryParseBindingType(string raw, out int code, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(raw))
            {
                code = 0;
                return true;
            }
            var normalized = raw.Trim().Replace(" ", "").ToLowerInvariant();
            switch (normalized)
            {
                case "global":
                case "0":
                    code = 0;
                    return true;
                case "entity":
                case "1":
                    code = 1;
                    return true;
                case "entitycollection":
                case "2":
                    code = 2;
                    return true;
                default:
                    code = -1;
                    error = $"Invalid binding_type '{raw.Trim()}'.";
                    return false;
            }
        }

        private static bool TryParseProcessingType(string raw, out int code, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(raw))
            {
                code = 0;
                return true;
            }
            var normalized = raw.Trim().Replace(" ", "").Replace("_", "").ToLowerInvariant();
            switch (normalized)
            {
                case "none":
                case "0":
                    code = 0;
                    return true;
                case "asynconly":
                case "1":
                    code = 1;
                    return true;
                case "syncandasync":
                case "2":
                    code = 2;
                    return true;
                default:
                    code = -1;
                    error = $"Invalid allowed_custom_processing_step_type '{raw.Trim()}'.";
                    return false;
            }
        }

        private static bool TryParseParameterSpecs(string json, bool isRequest, bool forUpdate, out List<ParameterSpec> specs, out string error)
        {
            specs = [];
            error = null;
            if (string.IsNullOrWhiteSpace(json))
                return true;

            try
            {
                using var doc = JsonDocument.Parse(json);
                if (doc.RootElement.ValueKind != JsonValueKind.Array)
                {
                    error = $"{(isRequest ? "request_parameters" : "response_properties")} must be a JSON array.";
                    return false;
                }

                var seenNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                foreach (var elem in doc.RootElement.EnumerateArray())
                {
                    if (elem.ValueKind != JsonValueKind.Object)
                    {
                        error = "Each parameter entry must be a JSON object.";
                        return false;
                    }

                    var name = GetJsonString(elem, "name") ?? GetJsonString(elem, "unique_name") ?? GetJsonString(elem, "uniqueName");
                    if (string.IsNullOrWhiteSpace(name))
                    {
                        error = "Each parameter entry must include a non-empty 'name'.";
                        return false;
                    }
                    name = name.Trim();
                    if (!seenNames.Add(name))
                    {
                        error = $"Duplicate parameter name '{name}' in array.";
                        return false;
                    }

                    var itemAction = GetJsonString(elem, "action");
                    var typeRaw = GetJsonString(elem, "type");
                    var typeCode = -1;

                    if (elem.TryGetProperty("type", out var typeProp) && typeProp.ValueKind == JsonValueKind.Number && typeProp.TryGetInt32(out var numType))
                    {
                        if (!ParameterTypeMap.ContainsKey(numType))
                        {
                            error = $"Invalid parameter type code '{numType}' for '{name}'. Valid codes: 0..12.";
                            return false;
                        }
                        typeCode = numType;
                        typeRaw = ParameterTypeMap[numType];
                    }
                    else if (!string.IsNullOrWhiteSpace(typeRaw))
                    {
                        if (!ParameterTypeReverseMap.TryGetValue(typeRaw.Trim(), out typeCode))
                        {
                            error = $"Invalid parameter type '{typeRaw}' for '{name}'. Valid types: {string.Join(", ", ParameterTypeMap.Values)}.";
                            return false;
                        }
                    }
                    else if (!forUpdate)
                    {
                        error = $"Parameter '{name}' requires 'type'. Valid types: {string.Join(", ", ParameterTypeMap.Values)}.";
                        return false;
                    }

                    bool? isOptional = null;
                    if (isRequest)
                    {
                        if (TryGetJsonBool(elem, "is_optional", out var opt1)) isOptional = opt1;
                        else if (TryGetJsonBool(elem, "isOptional", out var opt2)) isOptional = opt2;
                    }

                    specs.Add(new ParameterSpec
                    {
                        Action = itemAction,
                        Name = name,
                        DisplayName = GetJsonString(elem, "display_name") ?? GetJsonString(elem, "displayName"),
                        Type = typeRaw,
                        TypeCode = typeCode,
                        IsOptional = isOptional,
                        LogicalEntityName = GetJsonString(elem, "logical_entity_name") ?? GetJsonString(elem, "logicalEntityName"),
                        Description = GetJsonString(elem, "description")
                    });
                }

                return true;
            }
            catch (JsonException jex)
            {
                error = $"Invalid JSON in {(isRequest ? "request_parameters" : "response_properties")}: {jex.Message}";
                return false;
            }
        }

        private static string GetJsonString(JsonElement obj, string propName)
        {
            if (obj.TryGetProperty(propName, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString();
            return null;
        }

        private static bool TryGetJsonBool(JsonElement obj, string propName, out bool value)
        {
            if (obj.TryGetProperty(propName, out var prop) && (prop.ValueKind == JsonValueKind.True || prop.ValueKind == JsonValueKind.False))
            {
                value = prop.GetBoolean();
                return true;
            }
            value = false;
            return false;
        }

        private static string SanitizeIdentifier(string displayName)
        {
            var cleaned = Regex.Replace(displayName ?? "", @"[^A-Za-z0-9_]", "");
            return cleaned.Trim('_');
        }

        private Entity FindCustomApiByUniqueName(string uniqueName)
        {
            var query = new QueryExpression("customapi")
            {
                ColumnSet = new ColumnSet("customapiid", "uniquename"),
                TopCount = 1
            };
            query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, uniqueName);
            var res = _orgService.RetrieveMultiple(query);
            return res.Entities.Count > 0 ? res.Entities[0] : null;
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
            if (e.Contains("workflowsdkstepenabled"))
                entry.WorkflowSdkStepEnabled = e.GetAttributeValue<bool>("workflowsdkstepenabled");
            entry.ExecutePrivilegeName = NullIfEmpty(e.GetAttributeValue<string>("executeprivilegename"));
            entry.Owner = GetLookupName(e, "ownerid");
            entry.SolutionId = GetLookupId(e, "solutionid");
            entry.SolutionName = GetLookupName(e, "solutionid");
            if (string.Equals(entry.SolutionName, entry.SolutionId, StringComparison.OrdinalIgnoreCase))
                entry.SolutionName = null;
            entry.CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd");
            entry.ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd");
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
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].GetAttributeValue<string>("friendlyname") : null;
        }

        private ResolveResult<Entity> ResolveCustomApi(string apiName)
        {
            return DisplayNameFirstResolver.ResolveDataverseRecord(
                _orgService,
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
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
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
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
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
