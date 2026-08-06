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
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetBusinessRulesTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetBusinessRulesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_business_rules", Title = "List business rules for an entity",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetBusinessRulesResult)),
        Description(
            "Business rules (client-side logic) for an entity. rule_id empty = list; set = detail (conditions+actions from XAML). " +
            "Rules run BEFORE form JS. Scope 'Entity' = all forms.\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect a business rule's conditions and actions before refactoring or disabling it\n" +
            "- Find business rules bound to an entity (entity_name filter)\n" +
            "- Check if a field is referenced in any client-side rule logic\n\n" +
            "RELATED TOOLS:\n" +
            "- get_workflows → classic workflow definitions (background async + realtime sync)\n" +
            "- get_messages → legacy workflow Custom Actions (category=3) + SDK messages\n" +
            "- get_custom_apis → modern Custom API definitions\n" +
            "- get_business_process_flows → BPF definitions + stages\n" +
            "- manage_record(action='read', columns='xaml') → raw XAML when parse is incomplete")]
        public CallToolResult get_business_rules(
            [Description("Entity Display Name or logical name. Ignored in detail mode.")] string entity_name,
            [Description("GUID → detail mode. Empty = list mode.")] string rule_id = "",
            [Description("'active' or 'draft'. Empty = all. Ignored in detail mode.")] string status = "",
            [Description("1-200. Default 50. Ignored in detail mode.")] int max_records = 50)
        {
            try
            {
                // ── Validate ──────────────────────────────────────────────────────
                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.",
                        "Provide the entity logical name (e.g. 'account', 'contact'). Use get_tables to discover names.");

                var normalizedStatus = (status ?? "").Trim().ToLowerInvariant();
                if (normalizedStatus != "" && normalizedStatus != "active" && normalizedStatus != "draft")
                    return Error($"Invalid status '{status.Trim()}'. Use 'active' or 'draft'.");

                if (!string.IsNullOrWhiteSpace(rule_id) && !Guid.TryParse(rule_id.Trim(), out _))
                    return Error($"'{rule_id}' is not a valid GUID.");

                if (max_records <= 0) max_records = 50;
                if (max_records > 200) max_records = 200;

                // ── Resolve entity → logical name ─────────────────────────────────
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_business_rules");
                if (!entityResult.IsSuccess)
                    return Error($"entity_name '{entity_name.Trim()}': {entityResult.Error}");
                var logicalEntityName = entityResult.Value.LogicalName;

                // ── Detail mode ───────────────────────────────────────────────────
                if (!string.IsNullOrWhiteSpace(rule_id))
                {
                    Guid.TryParse(rule_id.Trim(), out var id);
                    return BuildDetail(logicalEntityName, id);
                }

                // ── List mode ─────────────────────────────────────────────────────
                return BuildList(logicalEntityName, normalizedStatus, max_records);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── List mode ─────────────────────────────────────────────────────────────

        private CallToolResult BuildList(string entityName, string status, int maxRecords)
        {
            var objectTypeCode = GetObjectTypeCode(entityName);

            var filterStatus = "";
            if (status == "active")
                filterStatus = "<condition attribute='statecode' operator='eq' value='1' />";
            else if (status == "draft")
                filterStatus = "<condition attribute='statecode' operator='eq' value='0' />";

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='workflow'>
    <attribute name='workflowid' />
    <attribute name='name' />
    <attribute name='primaryentity' />
    <attribute name='scope' />
    <attribute name='statecode' />
    <attribute name='statuscode' />
    <attribute name='modifiedon' />
    <filter type='and'>
      <condition attribute='category' operator='eq' value='2' />
      <condition attribute='primaryentity' operator='eq' value='{objectTypeCode}' />
      {filterStatus}
    </filter>
    <order attribute='name' />
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var rules = result.Entities.Select(e => new BusinessRuleSummaryEntry
            {
                RuleId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                Scope = e.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : null,
                Status = e.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : null,
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd")
            }).ToList();

            var statusLabel = status == "" ? "" : $" {status}";
            return Success(
                $"[Success]{statusLabel} business rules for '{entityName}': {rules.Count} found.",
                new GetBusinessRulesResult
                {
                    Mode = "list",
                    EntityName = entityName,
                    Count = rules.Count,
                    Rules = rules.Count > 0 ? rules : null
                });
        }

        // ── Detail mode ──────────────────────────────────────────────────────────

        private CallToolResult BuildDetail(string entityName, Guid ruleId)
        {
            var entity = _serviceClient.Retrieve("workflow", ruleId,
                new ColumnSet("name", "primaryentity", "scope", "statecode", "statuscode",
                    "xaml", "modifiedon", "modifiedby", "createdon", "createdby",
                    "description", "category"));

            var category = entity.GetAttributeValue<OptionSetValue>("category")?.Value;
            if (category != 2)
                return Error($"Record {ruleId} is not a business rule (category={category}, expected 2).",
                    "Use get_workflows to inspect classic workflows (category=0).");

            var primary = entity.GetAttributeValue<string>("primaryentity") ?? "";
            if (!string.IsNullOrEmpty(entityName) && !primary.Equals(entityName, StringComparison.OrdinalIgnoreCase))
                return Error($"Business rule {ruleId} belongs to entity '{primary}', not '{entityName}'.");

            var xaml = entity.GetAttributeValue<string>("xaml");
            var parsedXaml = !string.IsNullOrEmpty(xaml)
                ? ParseXaml(xaml)
                : new XamlParseResult { ParseStatus = "no xaml" };

            var detail = new BusinessRuleDetailEntry
            {
                RuleId = ruleId.ToString(),
                Name = entity.GetAttributeValue<string>("name") ?? "",
                EntityName = primary,
                Scope = entity.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : null,
                Status = entity.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : null,
                Description = SanitizeDescription(entity.GetAttributeValue<string>("description")),
                CreatedOn = entity.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd HH:mm:ss"),
                CreatedBy = entity.GetAttributeValue<EntityReference>("createdby")?.Name,
                ModifiedOn = entity.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd HH:mm:ss"),
                ModifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby")?.Name,
                Conditions = parsedXaml.Conditions,
                Actions = parsedXaml.Actions,
                XamlParseStatus = parsedXaml.ParseStatus
            };

            var condCount = detail.Conditions?.Count ?? 0;
            var actionCount = detail.Actions?.Count ?? 0;

            return Success(
                $"[Success] Business rule '{detail.Name}': {condCount} conditions, {actionCount} actions.",
                new GetBusinessRulesResult
                {
                    Mode = "detail",
                    EntityName = primary,
                    Count = 1,
                    Rule = detail
                });
        }

        // ── Helpers ───────────────────────────────────────────────────────────────

        private int? GetObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode;
        }

        private static XamlParseResult ParseXaml(string xaml)
        {
            var conditions = new List<string>();
            var actions = new List<string>();

            // Extract conditions: GetEntityProperty shows which fields are evaluated
            var fieldMatches = Regex.Matches(xaml,
                @"GetEntityProperty\s+Attribute=""(?<attr>[^""]+)""\s+Entity=""\[InputEntities\(\&quot;(?<ref>[^\&]+)\&",
                RegexOptions.Singleline);
            var evaluatedFields = new List<string>();
            foreach (Match m in fieldMatches)
                evaluatedFields.Add(m.Groups["attr"].Value);

            // Extract condition operators
            var opMatches = Regex.Matches(xaml,
                @"ConditionOperator""\>(?<op>[^<]+)\<",
                RegexOptions.Singleline);
            var operators = new List<string>();
            foreach (Match m in opMatches)
                operators.Add(m.Groups["op"].Value);

            // Extract constant values used in comparisons
            var constMatches = Regex.Matches(xaml,
                @"WorkflowPropertyType\.(?<type>\w+),\s*""(?<val>[^""]*)""\s*,\s*""(?<typename>[^""]*)""",
                RegexOptions.Singleline);
            var constants = new List<string>();
            foreach (Match m in constMatches)
                constants.Add($"{m.Groups["val"].Value} ({m.Groups["typename"].Value})");

            // Build natural language conditions
            for (var i = 0; i < evaluatedFields.Count; i++)
            {
                var field = evaluatedFields[i];
                var op = i < operators.Count ? operators[i] : "?";
                var val = i < constants.Count ? constants[i] : "";
                if (!string.IsNullOrEmpty(val))
                    conditions.Add($"IF {field} {op} \"{val}\"");
                else
                    conditions.Add($"IF {field} {op}");
            }

            // Extract SetVisibility actions
            var visMatches = Regex.Matches(xaml,
                @"SetVisibility\s+ControlId=""(?<ctrl>[^""]+)""[^/]*IsVisible=""(?<vis>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in visMatches)
                actions.Add($"SetVisibility: {m.Groups["ctrl"].Value} = {m.Groups["vis"].Value}");

            // Extract SetRequired actions
            var reqMatches = Regex.Matches(xaml,
                @"SetRequired\s+ControlId=""(?<ctrl>[^""]+)""[^/]*Required=""(?<req>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in reqMatches)
                actions.Add($"SetRequired: {m.Groups["ctrl"].Value} = {m.Groups["req"].Value}");

            // Extract SetAttributeValue actions
            var setValMatches = Regex.Matches(xaml,
                @"SetAttributeValue\s+Attribute=""(?<attr>[^""]+)""[^>]*EntityName=""(?<ent>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in setValMatches)
                actions.Add($"SetValue: {m.Groups["ent"].Value}.{m.Groups["attr"].Value}");

            // Extract ShowError actions
            var errorMatches = Regex.Matches(xaml,
                @"ShowError\s+[^>]*Message=""(?<msg>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in errorMatches)
                actions.Add($"ShowError: {m.Groups["msg"].Value}");

            // Extract LockField actions
            var lockMatches = Regex.Matches(xaml,
                @"LockField\s+ControlId=""(?<ctrl>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in lockMatches)
                actions.Add($"LockField: {m.Groups["ctrl"].Value}");

            // Extract UnlockField actions
            var unlockMatches = Regex.Matches(xaml,
                @"UnlockField\s+ControlId=""(?<ctrl>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in unlockMatches)
                actions.Add($"UnlockField: {m.Groups["ctrl"].Value}");

            // Extract SetDefaultValue actions
            var defValMatches = Regex.Matches(xaml,
                @"SetDefaultValue\s+Attribute=""(?<attr>[^""]+)""",
                RegexOptions.Singleline);
            foreach (Match m in defValMatches)
                actions.Add($"SetDefaultValue: {m.Groups["attr"].Value}");

            return new XamlParseResult
            {
                Conditions = conditions.Count > 0 ? conditions : null,
                Actions = actions.Count > 0 ? actions : null,
                ParseStatus = conditions.Count == 0 && actions.Count == 0
                    ? "no conditions or actions extracted"
                    : "parsed"
            };
        }

        private static string SanitizeDescription(string description)
        {
            if (string.IsNullOrWhiteSpace(description)) return null;
            var trimmed = description.Trim();
            if (trimmed.Equals("Click to add description", StringComparison.OrdinalIgnoreCase) ||
                trimmed.Equals("Click to add description.", StringComparison.OrdinalIgnoreCase))
                return null;
            return trimmed;
        }

        private sealed class XamlParseResult
        {
            public List<string> Conditions { get; set; }
            public List<string> Actions { get; set; }
            public string ParseStatus { get; set; }
        }
    }
}
