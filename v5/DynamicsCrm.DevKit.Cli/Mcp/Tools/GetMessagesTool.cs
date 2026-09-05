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
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetMessagesTool : McpToolBase
    {
        private readonly MetadataService _metadataService;
        private readonly IOrganizationService _orgService;

        public GetMessagesTool(MetadataService metadataService, IOrganizationService orgService)
        {
            _metadataService = metadataService;
            _orgService = orgService;
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

        [McpServerTool(Name = "get_messages", Title = "List SDK messages and custom actions",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetMessagesResult)),
        Description(
            "List SDK messages and legacy workflow Custom Actions, or inspect one message/action in detail.\n\n" +
            "WHEN TO USE:\n" +
            "- Discover available SDK messages for an entity before writing plugin registration\n" +
            "- Inspect a legacy Custom Action's input/output parameters from XAML\n" +
            "- Check plugin step count registered on a specific message\n\n" +
            "RELATED TOOLS:\n" +
            "- get_custom_apis → modern Custom API definitions (replaces Custom Actions)\n" +
            "- get_plugins → plugin assemblies/types/steps registered on these messages\n" +
            "- get_workflows → classic workflow definitions (background + realtime)")]
        public async Task<CallToolResult> get_messages(
            [Description("Entity Display/logical name. 'none'/empty = global. Ignored in detail mode.")] string entity_name = "none",
            [Description("Message/Action name → detail mode. Empty = list mode.")] string message_name = "",
            [Description("List: include Custom Actions. false = SDK only. Ignored in detail mode.")] bool include_custom_actions = true,
            [Description("List: maximum 1-500 names per category. Default 100.")] int max_records = 100)
        {
            try
            {
                // Detail mode
                if (!string.IsNullOrWhiteSpace(message_name))
                    return GetMessageDetail(message_name.Trim(), entity_name);

                // List mode
                var scopeResult = ResolveEntityScope(entity_name);
                if (!string.IsNullOrEmpty(scopeResult.Error))
                    return Error(
                        scopeResult.Error.Split("\r\n")[0],
                        "Use get_tables to list entities before calling get_messages.");
                entity_name = scopeResult.Scope;
                if (max_records <= 0) max_records = 100;
                if (max_records > 500) max_records = 500;
                return await GetMessageListAsync(entity_name, include_custom_actions, max_records);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private async Task<CallToolResult> GetMessageListAsync(string entityName, bool includeCustomActions, int maxRecords)
        {
            var normalizedScope = NormalizeScope(entityName);

            var sdkMessages = (await GetSdkMessageNamesAsync(normalizedScope)).Take(maxRecords).ToList();
            var customActions = includeCustomActions
                ? (await GetCustomActionNamesAsync(normalizedScope)).Take(maxRecords).ToList()
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

            var scopeLabel = normalizedScope == "none" ? "global" : normalizedScope;
            return Success(
                $"{scopeLabel}: {structured.TotalCount} messages ({sdkMessages.Count} SDK, {customActions.Count} custom actions).",
                structured);
        }

        private (string Scope, string Error) ResolveEntityScope(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName) ||
                entityName.Trim().Equals("none", StringComparison.OrdinalIgnoreCase))
                return ("none", null);

            var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "get_messages");
            if (!entityResult.IsSuccess)
                return (null, $"entity_name '{entityName.Trim()}': {entityResult.Error}");

            return (entityResult.Value.LogicalName, null);
        }

        private CallToolResult GetMessageDetail(string messageName, string entityName)
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
                $"Message or Custom Action '{messageName}' not found.",
                "Call get_messages without message_name to list all available messages for the entity.");
        }

        private CallToolResult FormatSdkMessageDetail(Entity sdkMsg, bool isCustomOperation)
        {
            var msgId = sdkMsg.Id;
            var name = sdkMsg.GetAttributeValue<string>("name") ?? "";
            var isActive = sdkMsg.GetAttributeValue<bool?>("isactive") ?? true;
            var availability = sdkMsg.GetAttributeValue<int?>("availability") ?? 0;

            var supportedEntities = GetSupportedEntities(msgId);
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

            var structured = new GetMessagesResult
            {
                TotalCount = 1,
                Mode = "detail",
                MessageDetail = detail
            };

            var label = isCustomOperation ? "custom action" : "SDK message";
            return Success(
                $"{label} '{name}': {pluginStepCount} plugin steps, {supportedEntities.Count} supported entities.",
                structured);
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

            var (inputParams, outputParams) = GetActionParameters(workflowId);
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

            var structured = new GetMessagesResult
            {
                TotalCount = 1,
                Mode = "detail",
                ActionDetail = detail
            };

            return Success(
                $"custom action '{name}': {inputParams.Count} input params, {outputParams.Count} output params, {pluginStepCount} plugin steps.",
                structured);
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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
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

            var fetchXml = $@"<fetch top='1'>
  <entity name='workflow'>
    <attribute name='xaml'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{workflowId}'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0) return (inputs, outputs);

            var xaml = result.Entities[0].GetAttributeValue<string>("xaml") ?? "";
            if (string.IsNullOrEmpty(xaml)) return (inputs, outputs);

            // XAML is typically a single line — split by <x:Property> tags instead of newlines.
            // Each property has Name, Type (InArgument/OutArgument/InOutArgument),
            // and optional ArgumentRequiredAttribute, ArgumentDescriptionAttribute,
            // ArgumentEntityAttribute, ArgumentTargetAttribute inside <x:Property.Attributes>.
            var segments = SplitXamlProperties(xaml);
            foreach (var seg in segments)
            {
                var nameMatch = ExtractAttribute(seg, "Name");
                var typeMatch = ExtractAttribute(seg, "Type");
                if (nameMatch == null || typeMatch == null) continue;

                // Skip internal framework arguments
                if (nameMatch == "InputEntities" || nameMatch == "CreatedEntities") continue;

                // Determine direction: InArgument, OutArgument, or InOutArgument
                bool isInput = typeMatch.StartsWith("InArgument(") || typeMatch.StartsWith("InOutArgument(");
                bool isOutput = typeMatch.StartsWith("OutArgument(") || typeMatch.StartsWith("InOutArgument(");
                if (!isInput && !isOutput) continue;

                // Extract the inner type: InArgument(x:String) -> x:String
                var openParen = typeMatch.IndexOf('(');
                var closeParen = typeMatch.LastIndexOf(')');
                var innerType = openParen >= 0 && closeParen > openParen
                    ? typeMatch.Substring(openParen + 1, closeParen - openParen - 1)
                    : typeMatch;

                var requiredAttr = ExtractAttribute(seg, "ArgumentRequiredAttribute Value=");
                var isRequired = requiredAttr != null && requiredAttr.Equals("True", StringComparison.OrdinalIgnoreCase);

                var description = ExtractAttribute(seg, "ArgumentDescriptionAttribute Value=");
                var entityAttr = ExtractAttribute(seg, "ArgumentEntityAttribute Value=");

                var entry = new ActionParameterEntry
                {
                    Name = nameMatch,
                    Type = SimplifyType(innerType),
                    IsRequired = isRequired,
                    Description = string.IsNullOrWhiteSpace(description) ? null : description,
                    EntityName = string.IsNullOrWhiteSpace(entityAttr) ? null : entityAttr
                };

                if (isInput) inputs.Add(entry);
                if (isOutput) outputs.Add(entry);
            }

            return (inputs, outputs);
        }

        /// <summary>
        /// Splits XAML into segments starting at each &lt;x:Property&gt; tag,
        /// including the nested &lt;x:Property.Attributes&gt; block so attribute
        /// extraction can find ArgumentRequired/Description/Entity values.
        /// </summary>
        private static List<string> SplitXamlProperties(string xaml)
        {
            var segments = new List<string>();
            var marker = "<x:Property ";
            var idx = 0;
            while (true)
            {
                var start = xaml.IndexOf(marker, idx, StringComparison.Ordinal);
                if (start < 0) break;
                // A property with an <x:Property.Attributes> block ends with "</x:Property>".
                // A self-closing property (no attributes block) ends with "/>".
                // Distinguish by checking whether <x:Property.Attributes> appears before
                // the first "/>" after the property start. If it does, the property has
                // an attributes block and we must use "</x:Property>" as the end.
                var attrsBlock = xaml.IndexOf("<x:Property.Attributes>", start, StringComparison.Ordinal);
                var selfClose = xaml.IndexOf("/>", start, StringComparison.Ordinal);
                int end;
                if (attrsBlock >= 0 && attrsBlock < selfClose)
                {
                    var endTag = xaml.IndexOf("</x:Property>", attrsBlock, StringComparison.Ordinal);
                    if (endTag < 0) break;
                    end = endTag + "</x:Property>".Length;
                }
                else if (selfClose >= 0)
                    end = selfClose + 2;
                else
                    break;

                segments.Add(xaml.Substring(start, end - start));
                idx = end;
            }
            return segments;
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
                var apiNames = new HashSet<string>(customApis.Select(x => x.Name), StringComparer.OrdinalIgnoreCase);
                names = names.Where(x => !apiNames.Contains(x));
            }

            return names
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(x => x)
                .ToList();
        }

        // ── Helpers ──────────────────────────────────────────────────────────────

        private static string NormalizeScope(string scope)
        {
            if (string.IsNullOrWhiteSpace(scope))
                return "none";

            var normalized = scope.Trim().ToLowerInvariant();
            return normalized == "global" ? "none" : normalized;
        }

        private static string ExtractAttribute(string xml, string attrName)
        {
            // attrName is either a simple XAML attribute ("Name", "Type") or a compound
            // pattern ("ArgumentRequiredAttribute Value=") where the first part is an
            // element name (possibly XML-namespaced: mxsw:ArgumentRequiredAttribute)
            // followed by a Value="..." attribute.
            if (attrName.Contains(' '))
            {
                // Compound: "ElementName Value=" — find the element (ignoring ns prefix),
                // then extract the Value attribute inside it.
                var spaceIdx = attrName.IndexOf(' ');
                var elementLocal = attrName.Substring(0, spaceIdx);   // e.g. "ArgumentRequiredAttribute"
                var valueAttr = attrName.Substring(spaceIdx + 1);     // e.g. "Value="

                // Find the element tag, ignoring any XML namespace prefix (mxsw:).
                var elementIdx = FindElementStart(xml, elementLocal);
                if (elementIdx < 0) return null;

                // Find the Value="..." attribute after the element tag.
                var search = $"{valueAttr}\"";
                var valIdx = xml.IndexOf(search, elementIdx, StringComparison.OrdinalIgnoreCase);
                if (valIdx < 0) return null;
                valIdx += search.Length;
                var end = xml.IndexOf('"', valIdx);
                return end > valIdx ? xml.Substring(valIdx, end - valIdx) : null;
            }

            // Simple: "Name" → find Name="..."
            var simple = $"{attrName}=\"";
            var idx = xml.IndexOf(simple, StringComparison.OrdinalIgnoreCase);
            if (idx < 0) return null;
            idx += simple.Length;
            var endSimple = xml.IndexOf('"', idx);
            return endSimple > idx ? xml.Substring(idx, endSimple - idx) : null;
        }

        /// <summary>
        /// Finds the start index of an element with the given local name,
        /// ignoring XML namespace prefixes (e.g. mxsw:ArgumentRequiredAttribute).
        /// </summary>
        private static int FindElementStart(string xml, string localName)
        {
            // Search for "<prefix:localName" or "<localName"
            var idx = 0;
            while (true)
            {
                var lt = xml.IndexOf('<', idx);
                if (lt < 0) return -1;
                // Skip past any namespace prefix
                var tagStart = lt + 1;
                var colon = xml.IndexOf(':', tagStart);
                int nameStart;
                if (colon >= 0 && colon < xml.Length && colon - tagStart <= 60)
                    nameStart = colon + 1;
                else
                    nameStart = tagStart;

                if (xml.Length - nameStart >= localName.Length &&
                    xml.Substring(nameStart, localName.Length).Equals(localName, StringComparison.OrdinalIgnoreCase))
                    return lt;

                idx = lt + 1;
            }
        }

        private static string SimplifyType(string type)
        {
            if (type == null) return "Unknown";
            // Remove XML namespace prefixes: x:String -> String, mxs:EntityReference -> EntityReference
            var colon = type.LastIndexOf(':');
            if (colon >= 0) type = type.Substring(colon + 1);
            // Remove .NET namespace: System.String -> String
            var lastDot = type.LastIndexOf('.');
            return lastDot >= 0 ? type.Substring(lastDot + 1) : type;
        }

        private static string EscapeXml(string value) =>
            System.Security.SecurityElement.Escape(value ?? "") ?? "";
    }
}
