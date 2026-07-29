using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
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
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetMessagesTool : McpToolBase
    {
        private readonly MetadataService _metadataService;
        private readonly ServiceClient _serviceClient;

        public GetMessagesTool(MetadataService metadataService, ServiceClient serviceClient)
        {
            _metadataService = metadataService;
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> AvailabilityMap = new()
        {
            [0] = "Both",
            [1] = "Server",
            [2] = "Client"
        };

        private static readonly Dictionary<int, string> ScopeMap = new()
        {
            [1] = "User",
            [2] = "BU",
            [3] = "Parent:ChildBU",
            [4] = "Org"
        };

        private static readonly Dictionary<int, string> ArgumentTypeMap = new()
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

        [McpServerTool(Name = "get_messages", Title = "List SDK messages and custom actions",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetMessagesResult)),
        Description(
            "SDK messages + legacy Custom Actions (workflow-based, category=3). message_name empty = list; set = detail (params, plugin steps). " +
            "Modern Custom APIs excluded → get_custom_apis. " +
            "entity_name='none' = global messages.")]
        public async Task<CallToolResult> get_messages(
            [Description(
                "Entity Display/logical name. 'none'/empty = global. Ignored in detail mode."
            )] string entity_name = "none",
            [Description(
                "Message/Action name → detail mode. Empty = list mode."
            )] string message_name = "",
            [Description(
                "List: include Custom Actions. false = SDK only. Ignored in detail mode."
            )] bool include_custom_actions = true)
        {
            try
            {
                // Detail mode
                if (!string.IsNullOrWhiteSpace(message_name))
                    return await GetMessageDetailAsync(message_name.Trim(), entity_name);

                // List mode
                var scopeResult = ResolveEntityScope(entity_name);
                if (!string.IsNullOrEmpty(scopeResult.Error))
                    return Error(scopeResult.Error);
                entity_name = scopeResult.Scope;
                return await GetMessageListAsync(entity_name, include_custom_actions);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private async Task<CallToolResult> GetMessageListAsync(string entityName, bool includeCustomActions)
        {
            var normalizedScope = MessageDiscoveryHelper.NormalizeScope(entityName);
            var text = await MessageDiscoveryHelper.GetMessageMarkdownAsync(
                _metadataService, entityName, includeCustomActions);

            // Parse counts from the formatted text for structured output
            var sdkMessages = await GetSdkMessageNamesAsync(normalizedScope);
            var customActions = includeCustomActions
                ? await GetCustomActionNamesAsync(normalizedScope)
                : [];

            var structured = new GetMessagesResult
            {
                TotalCount = sdkMessages.Count + customActions.Count,
                Mode = "list",
                Scope = normalizedScope,
                SdkMessageCount = sdkMessages.Count,
                CustomActionCount = customActions.Count,
                SdkMessages = sdkMessages.Count > 0 ? sdkMessages : null,
                CustomActions = customActions.Count > 0 ? customActions : null
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private (string Scope, string Error) ResolveEntityScope(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName) ||
                entityName.Trim().Equals("none", StringComparison.OrdinalIgnoreCase))
                return ("none", null);

            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName.Trim(), "get_messages");
            if (!entityResult.IsSuccess)
                return (null, $"Error: entity_name '{entityName.Trim()}': {entityResult.Error}");

            return (entityResult.Value.LogicalName, null);
        }

        private async Task<CallToolResult> GetMessageDetailAsync(string messageName, string entityName)
        {
            // Step 1: Try to find as SDK message
            var sdkMsg = FindSdkMessage(messageName);
            if (sdkMsg != null)
            {
                var categoryName = sdkMsg.GetAttributeValue<string>("categoryname") ?? "";
                var isCustomOperation = categoryName.Equals("CustomOperation", StringComparison.OrdinalIgnoreCase);

                // Check if this is a Custom Action (workflow category=3)
                var customAction = FindCustomAction(messageName);
                if (customAction != null)
                    return FormatCustomActionDetail(customAction, sdkMsg);

                // Standard SDK message (or Custom Action/API without workflow record)
                return FormatSdkMessageDetail(sdkMsg, isCustomOperation);
            }

            // Step 2: Try as Custom Action name directly (workflow.name or workflow.uniquename)
            var action = FindCustomAction(messageName);
            if (action != null)
            {
                var sdkMsgForAction = FindSdkMessage(
                    action.GetAttributeValue<string>("uniquename") ?? messageName);
                return FormatCustomActionDetail(action, sdkMsgForAction);
            }

            return Error(
                $"Error: Message or Custom Action '{messageName}' not found.\n" +
                $"Call get_messages without message_name to list all available messages for the entity.");
        }

        private CallToolResult FormatSdkMessageDetail(Entity sdkMsg, bool isCustomOperation)
        {
            var msgId = sdkMsg.Id;
            var name = sdkMsg.GetAttributeValue<string>("name") ?? "";
            var isActive = sdkMsg.GetAttributeValue<bool?>("isactive") ?? true;
            var availability = sdkMsg.GetAttributeValue<int?>("availability") ?? 0;

            // Get supported entities from sdkmessagefilter
            var supportedEntities = GetSupportedEntities(msgId);

            // Count registered plugin steps
            var pluginStepCount = CountPluginSteps(msgId);

            var detail = new SdkMessageDetail
            {
                MessageId = msgId.ToString(),
                Name = name,
                IsActive = isActive,
                IsCustomAction = isCustomOperation,
                Availability = AvailabilityMap.TryGetValue(availability, out var avail) ? avail : availability.ToString(),
                SupportedEntities = supportedEntities.Count > 0 ? supportedEntities : null,
                PluginStepCount = pluginStepCount
            };

            var label = isCustomOperation ? "Custom Action" : "SDK Message";
            var sb = new StringBuilder(512);
            sb.AppendLine($"[{label}] {name}");
            sb.AppendLine();
            sb.AppendLine($"messageId: {msgId}");
            sb.AppendLine($"isActive: {(isActive ? "Yes" : "No")}");
            sb.AppendLine($"availability: {detail.Availability}");
            sb.AppendLine($"pluginSteps: {pluginStepCount}");

            if (supportedEntities.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"[Supported Entities] {supportedEntities.Count}");
                foreach (var e in supportedEntities)
                    sb.AppendLine($"- {e}");
            }

            var structured = new GetMessagesResult
            {
                TotalCount = 1,
                Mode = "detail",
                MessageDetail = detail
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult FormatCustomActionDetail(Entity workflow, Entity sdkMsg)
        {
            var workflowId = workflow.Id;
            var name = workflow.GetAttributeValue<string>("name") ?? "";
            var uniqueName = workflow.GetAttributeValue<string>("uniquename") ?? "";
            var primaryEntity = workflow.GetAttributeValue<string>("primaryentity") ?? "none";
            var scopeValue = workflow.GetAttributeValue<OptionSetValue>("scope")?.Value ?? 4;
            var stateValue = workflow.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
            var isManaged = workflow.GetAttributeValue<bool>("ismanaged");
            var isCustomizable = workflow.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value;
            var owner = workflow.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "";
            var modifiedOn = workflow.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? "";

            // Get input/output parameters from process entity (argumentdescription XML)
            var (inputParams, outputParams) = GetActionParameters(workflowId);

            // Count plugin steps
            var pluginStepCount = sdkMsg != null ? CountPluginSteps(sdkMsg.Id) : 0;

            var detail = new CustomActionDetail
            {
                WorkflowId = workflowId.ToString(),
                Name = name,
                UniqueName = uniqueName,
                PrimaryEntity = primaryEntity,
                Scope = ScopeMap.TryGetValue(scopeValue, out var scope) ? scope : scopeValue.ToString(),
                Status = stateValue == 1 ? "Active" : "Draft",
                IsManaged = isManaged,
                IsCustomizable = isCustomizable,
                Owner = owner,
                ModifiedOn = modifiedOn,
                InputParameters = inputParams.Count > 0 ? inputParams : null,
                OutputParameters = outputParams.Count > 0 ? outputParams : null,
                PluginStepCount = pluginStepCount
            };

            var sb = new StringBuilder(1024);
            sb.AppendLine($"[Custom Action] {name}");
            sb.AppendLine();
            sb.AppendLine($"workflowId: {workflowId}");
            sb.AppendLine($"uniqueName: {uniqueName}");
            sb.AppendLine($"primaryEntity: {primaryEntity}");
            sb.AppendLine($"scope: {detail.Scope}");
            sb.AppendLine($"status: {detail.Status}");
            sb.AppendLine($"isManaged: {(isManaged ? "Yes" : "No")}");
            if (isCustomizable.HasValue)
                sb.AppendLine($"isCustomizable: {(isCustomizable.Value ? "Yes" : "No")}");
            sb.AppendLine($"owner: {owner}");
            sb.AppendLine($"modifiedOn: {modifiedOn}");
            sb.AppendLine($"pluginSteps: {pluginStepCount}");

            if (inputParams.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"[Input Parameters] {inputParams.Count}");
                sb.AppendLine();
                sb.AppendLine("Name\tType\tRequired\tEntityName\tDescription");
                foreach (var p in inputParams)
                    sb.AppendLine($"{EscapeTab(p.Name)}\t{p.Type}\t{(p.IsRequired ? "Yes" : "No")}\t{EscapeTab(p.EntityName ?? "-")}\t{EscapeTab(p.Description ?? "")}");
            }

            if (outputParams.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"[Output Parameters] {outputParams.Count}");
                sb.AppendLine();
                sb.AppendLine("Name\tType\tEntityName\tDescription");
                foreach (var p in outputParams)
                    sb.AppendLine($"{EscapeTab(p.Name)}\t{p.Type}\t{EscapeTab(p.EntityName ?? "-")}\t{EscapeTab(p.Description ?? "")}");
            }

            var structured = new GetMessagesResult
            {
                TotalCount = 1,
                Mode = "detail",
                ActionDetail = detail
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Query helpers ────────────────────────────────────────────────────────

        private Entity FindSdkMessage(string messageName)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid'/>
    <attribute name='name'/>
    <attribute name='isactive'/>
    <attribute name='availability'/>
    <attribute name='isreadonly'/>
    <attribute name='isprivate'/>
    <attribute name='categoryname'/>
    <filter>
      <condition attribute='name' operator='eq' value='{EscapeXml(messageName)}'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private Entity FindCustomAction(string actionName)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='workflow'>
    <attribute name='workflowid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='primaryentity'/>
    <attribute name='scope'/>
    <attribute name='statecode'/>
    <attribute name='ismanaged'/>
    <attribute name='iscustomizable'/>
    <attribute name='ownerid'/>
    <attribute name='modifiedon'/>
    <attribute name='description'/>
    <filter type='and'>
      <condition attribute='category' operator='eq' value='3'/>
      <condition attribute='type' operator='eq' value='1'/>
      <filter type='or'>
        <condition attribute='name' operator='eq' value='{EscapeXml(actionName)}'/>
        <condition attribute='uniquename' operator='eq' value='{EscapeXml(actionName)}'/>
      </filter>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private List<string> GetSupportedEntities(Guid sdkMessageId)
        {
            var fetchXml = $@"<fetch>
  <entity name='sdkmessagefilter'>
    <attribute name='primaryobjecttypecode'/>
    <filter>
      <condition attribute='sdkmessageid' operator='eq' value='{sdkMessageId}'/>
      <condition attribute='isvisible' operator='eq' value='true'/>
    </filter>
    <order attribute='primaryobjecttypecode'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities
                .Select(e => e.GetAttributeValue<string>("primaryobjecttypecode") ?? "")
                .Where(s => !string.IsNullOrWhiteSpace(s) && s != "none")
                .Distinct()
                .OrderBy(s => s)
                .ToList();
        }

        private int CountPluginSteps(Guid sdkMessageId)
        {
            var fetchXml = $@"<fetch aggregate='true'>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid' alias='cnt' aggregate='count'/>
    <filter>
      <condition attribute='sdkmessageid' operator='eq' value='{sdkMessageId}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid'>
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid'>
        <filter>
          <condition attribute='ishidden' operator='eq' value='false'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count > 0)
            {
                var alias = result.Entities[0].GetAttributeValue<AliasedValue>("cnt");
                if (alias?.Value is int count) return count;
            }
            return 0;
        }

        private (List<ActionParameterEntry> inputs, List<ActionParameterEntry> outputs) GetActionParameters(Guid workflowId)
        {
            var inputs = new List<ActionParameterEntry>();
            var outputs = new List<ActionParameterEntry>();

            // Custom Action parameters are stored in process XML (argumentdescription or clientdata)
            // Query the workflow entity for XAML content and parse, OR query sdkmessagerequestfield/sdkmessageresponsefield
            // More reliable: query via sdkmessage → sdkmessagepair → sdkmessagerequest/response fields

            // First find the SDK message for this action
            var fetchMsg = $@"<fetch top='1'>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid'/>
    <filter>
      <condition attribute='name' operator='eq' value='{EscapeXml(GetWorkflowUniqueName(workflowId))}'/>
    </filter>
  </entity>
</fetch>";

            var msgResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchMsg));
            if (msgResult.Entities.Count == 0) return (inputs, outputs);

            // Fallback: use workflow's input/output arguments from process entity
            inputs = GetActionParametersFromProcess(workflowId, true);
            outputs = GetActionParametersFromProcess(workflowId, false);

            return (inputs, outputs);
        }

        private List<ActionParameterEntry> GetActionParametersFromProcess(Guid workflowId, bool isInput)
        {
            var parameters = new List<ActionParameterEntry>();

            // Query workflow's XAML for argument definitions
            // Custom Actions store their arguments in the workflow.xaml field as XAML Activity definitions
            var fetchXml = $@"<fetch top='1'>
  <entity name='workflow'>
    <attribute name='xaml'/>
    <attribute name='clientdata'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{workflowId}'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0) return parameters;

            var xaml = result.Entities[0].GetAttributeValue<string>("xaml") ?? "";
            if (string.IsNullOrEmpty(xaml)) return parameters;

            // Parse XAML arguments: <x:Property Name="ArgumentName" Type="InArgument(xxx)" />
            // or <x:Property Name="ArgumentName" Type="OutArgument(xxx)" />
            var directionPrefix = isInput ? "InArgument" : "OutArgument";
            var inOutPrefix = isInput ? "InOutArgument" : null;

            var lines = xaml.Split('\n');
            foreach (var line in lines)
            {
                var trimmed = line.Trim();
                if (!trimmed.StartsWith("<x:Property ")) continue;

                // Extract Name and Type
                var nameMatch = ExtractAttribute(trimmed, "Name");
                var typeMatch = ExtractAttribute(trimmed, "Type");
                if (nameMatch == null || typeMatch == null) continue;

                var isMatch = typeMatch.StartsWith(directionPrefix + "(") ||
                              (inOutPrefix != null && typeMatch.StartsWith(inOutPrefix + "("));

                // InOutArgument counts as both input and output
                if (!isMatch && typeMatch.StartsWith("InOutArgument("))
                    isMatch = true;

                if (!isMatch) continue;

                // Extract the inner type: InArgument(String) -> String
                var openParen = typeMatch.IndexOf('(');
                var closeParen = typeMatch.LastIndexOf(')');
                var innerType = openParen >= 0 && closeParen > openParen
                    ? typeMatch.Substring(openParen + 1, closeParen - openParen - 1)
                    : typeMatch;

                // Check Required attribute
                var requiredAttr = ExtractAttribute(trimmed, "IsRequired");
                var isRequired = requiredAttr != null && requiredAttr.Equals("True", StringComparison.OrdinalIgnoreCase);

                parameters.Add(new ActionParameterEntry
                {
                    Name = nameMatch,
                    Type = SimplifyType(innerType),
                    IsRequired = isRequired,
                    EntityName = innerType.Contains("Entity") && !innerType.Equals("EntityReference") && !innerType.Equals("EntityCollection")
                        ? ExtractEntityType(innerType)
                        : null
                });
            }

            return parameters;
        }

        private string GetWorkflowUniqueName(Guid workflowId)
        {
            var entity = _serviceClient.Retrieve("workflow", workflowId, new ColumnSet("uniquename"));
            return entity.GetAttributeValue<string>("uniquename") ?? "";
        }

        private async Task<List<string>> GetSdkMessageNamesAsync(string scope)
        {
            var isNone = scope == "none";
            var messages = isNone
                ? await _metadataService.GetSdkMessagesNoneAsync()
                : await _metadataService.GetSdkMessagesAsync(scope);

            return messages
                .Select(x => x.Name)
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(x => x)
                .ToList();
        }

        private async Task<List<string>> GetCustomActionNamesAsync(string scope)
        {
            var isNone = scope == "none";
            var actions = isNone
                ? await _metadataService.GetCustomActionsAsync()
                : await _metadataService.GetCustomActionsAsync(scope);

            var names = actions.Select(x => x.Name);

            var customApis = await _metadataService.GetCustomApisAsync(scope);
            if (customApis.Count > 0)
            {
                var apiNames = new HashSet<string>(customApis.Select(x => x.Name));
                names = names.Where(x => !apiNames.Contains(x));
            }

            return names
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(x => x)
                .ToList();
        }

        // ── Helpers ──────────────────────────────────────────────────────────────

        private static string ExtractAttribute(string xml, string attrName)
        {
            var search = $"{attrName}=\"";
            var idx = xml.IndexOf(search, StringComparison.OrdinalIgnoreCase);
            if (idx < 0) return null;
            idx += search.Length;
            var end = xml.IndexOf('"', idx);
            return end > idx ? xml.Substring(idx, end - idx) : null;
        }

        private static string SimplifyType(string type)
        {
            if (type == null) return "Unknown";
            // Remove namespace: System.String -> String
            var lastDot = type.LastIndexOf('.');
            return lastDot >= 0 ? type.Substring(lastDot + 1) : type;
        }

        private static string ExtractEntityType(string type)
        {
            // EntityReference(account) -> account
            var open = type.IndexOf('(');
            var close = type.LastIndexOf(')');
            if (open >= 0 && close > open)
                return type.Substring(open + 1, close - open - 1);
            return null;
        }

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value?.Replace("\t", " ").Replace("\n", " ").Replace("\r", "") ?? "";

    }
}
