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
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetBusinessRulesTool
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
            "Business rules (client-side logic) for a Dataverse entity. rule_id empty = list (name, scope, status). Set = detail (conditions + actions parsed from XAML). Rules run BEFORE JavaScript form events. Scope 'Entity' = runs on ALL forms.\n\n" +

            "WHEN TO USE:\n" +
            "- Debug form behavior (fields hide/show unexpectedly)\n" +
            "- Audit client-side logic before adding JavaScript")]
        public CallToolResult get_business_rules(
            [Description(
                "Entity Display Name or logical name."
            )] string entity_name,
            [Description(
                "GUID → detail. Empty = list."
            )] string rule_id = "",
            [Description(
                "'active' or 'draft'. Empty = all."
            )] string status = "",
            [Description(
                "Max 200."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.\n" +
                       "Provide the entity logical name (e.g., 'account', 'contact'). Use get_tables to discover names.");

            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_business_rules");
            if (!entityResult.IsSuccess)
                return ErrorResult($"Error: entity_name '{entity_name.Trim()}': {entityResult.Error}");
            entity_name = entityResult.Value.LogicalName;

            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s != "active" && s != "draft")
                    return ErrorResult($"Error: Invalid status value '{status.Trim()}'. Use 'active' or 'draft'.");
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 200) max_records = 200;

            // Detail mode
            if (!string.IsNullOrWhiteSpace(rule_id))
            {
                if (!Guid.TryParse(rule_id.Trim(), out var id))
                    return ErrorResult($"Error: '{rule_id}' is not a valid GUID.");

                return GetRuleDetail(entity_name, id);
            }

            // List mode
            return GetRuleList(entity_name, status, max_records);
        }

        private CallToolResult GetRuleList(string entityName, string status, int maxRecords)
        {
            try
            {
                var objectTypeCode = GetObjectTypeCode(entityName);
                if (objectTypeCode == null)
                    return ErrorResult($"Error: Entity '{entityName}' not found.\n" +
                           $"Use get_tables to find valid entity logical names.");

                var fetchXml = BuildListFetchXml(objectTypeCode.Value, status, maxRecords);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                var rules = result.Entities.Select(e => new BusinessRuleSummaryEntry
                {
                    RuleId = e.Id.ToString(),
                    Name = e.GetAttributeValue<string>("name") ?? "",
                    Scope = e.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : "",
                    Status = e.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : "",
                    ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? ""
                }).ToList();

                return StructuredResult(FormatRuleList(entityName, rules), new GetBusinessRulesResult
                {
                    Mode = "list",
                    EntityName = entityName,
                    Count = rules.Count,
                    Rules = rules
                });
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve business rules: {ex.Message}");
            }
        }

        private CallToolResult GetRuleDetail(string entityName, Guid ruleId)
        {
            try
            {
                var entity = _serviceClient.Retrieve("workflow", ruleId,
                    new ColumnSet("name", "primaryentity", "scope", "statecode", "statuscode",
                        "xaml", "modifiedon", "modifiedby", "createdon", "createdby",
                        "description", "category"));

                var category = entity.GetAttributeValue<OptionSetValue>("category")?.Value;
                if (category != 2)
                    return ErrorResult($"Error: Record {ruleId} is not a business rule (category={category}, expected 2).");

                var primary = entity.GetAttributeValue<string>("primaryentity") ?? "";
                if (!string.IsNullOrEmpty(entityName) && !primary.Equals(entityName, StringComparison.OrdinalIgnoreCase))
                    return ErrorResult($"Error: Business rule {ruleId} belongs to entity '{primary}', not '{entityName}'.");

                var name = entity.GetAttributeValue<string>("name") ?? "";
                var scope = entity.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : "";
                var status = entity.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : "";
                var description = SanitizeDescription(entity.GetAttributeValue<string>("description"));
                var createdOn = entity.GetAttributeValue<DateTime?>("createdon");
                var createdBy = entity.GetAttributeValue<EntityReference>("createdby");
                var modifiedOn = entity.GetAttributeValue<DateTime?>("modifiedon");
                var modifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby");

                var xaml = entity.GetAttributeValue<string>("xaml");
                var parsedXaml = !string.IsNullOrEmpty(xaml)
                    ? ParseXaml(xaml)
                    : new XamlParseResult { ParseStatus = "no xaml" };

                var detail = new BusinessRuleDetailEntry
                {
                    RuleId = ruleId.ToString(),
                    Name = name,
                    EntityName = primary,
                    Scope = scope,
                    Status = status,
                    Description = string.IsNullOrEmpty(description) ? null : description,
                    CreatedOn = createdOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                    CreatedBy = createdBy?.Name ?? createdBy?.Id.ToString(),
                    ModifiedOn = modifiedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                    ModifiedBy = modifiedBy?.Name ?? modifiedBy?.Id.ToString(),
                    Conditions = parsedXaml.Conditions,
                    Actions = parsedXaml.Actions,
                    XamlParseStatus = parsedXaml.ParseStatus
                };

                return StructuredResult(FormatRuleDetail(detail), new GetBusinessRulesResult
                {
                    Mode = "detail",
                    EntityName = primary,
                    Count = 1,
                    Rule = detail
                });
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve business rule detail: {ex.Message}");
            }
        }

        private static string BuildListFetchXml(int objectTypeCode, string status, int maxRecords)
        {
            var filterStatus = "";
            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s == "active")
                    filterStatus = "<condition attribute='statecode' operator='eq' value='1' />";
                else if (s == "draft")
                    filterStatus = "<condition attribute='statecode' operator='eq' value='0' />";
            }

            return $@"<fetch top='{maxRecords}'>
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
        }

        private int? GetObjectTypeCode(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata.ObjectTypeCode;
            }
            catch
            {
                return null;
            }
        }

        private static XamlParseResult ParseXaml(string xaml)
        {
            try
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

                // Extract condition branch descriptions
                var descMatches = Regex.Matches(xaml,
                    @"x:Key=""Description""\>(?<desc>[^<]+)\<",
                    RegexOptions.Singleline);

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
                    Conditions = conditions,
                    Actions = actions,
                    ParseStatus = conditions.Count == 0 && actions.Count == 0
                        ? "no conditions or actions extracted"
                        : "parsed"
                };
            }
            catch
            {
                return new XamlParseResult { ParseStatus = "unable to parse" };
            }
        }

        private static string SanitizeDescription(string description)
        {
            if (string.IsNullOrWhiteSpace(description)) return string.Empty;
            var trimmed = description.Trim();
            if (trimmed.Equals("Click to add description", StringComparison.OrdinalIgnoreCase) ||
                trimmed.Equals("Click to add description.", StringComparison.OrdinalIgnoreCase))
                return string.Empty;
            return trimmed;
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static string FormatRuleList(string entityName, List<BusinessRuleSummaryEntry> rules)
        {
            if (rules.Count == 0)
                return $"0 business rules found for '{entityName}'.";

            var sb = new StringBuilder(rules.Count * 120 + 128);
            var countLabel = rules.Count == 1 ? "rule" : "rules";
            sb.AppendLine($"[BusinessRules] {entityName} ({rules.Count} {countLabel})");
            sb.AppendLine();
            sb.AppendLine("ruleId\tname\tscope\tstatus\tmodifiedOn");

            foreach (var rule in rules)
                sb.AppendLine($"{rule.RuleId}\t{EscapeTab(rule.Name)}\t{rule.Scope}\t{rule.Status}\t{rule.ModifiedOn}");

            return sb.ToString();
        }

        private static string FormatRuleDetail(BusinessRuleDetailEntry rule)
        {
            var sb = new StringBuilder(1024);
            sb.AppendLine($"[BusinessRule] {rule.Name}");
            sb.AppendLine($"RuleId: {rule.RuleId}");
            sb.AppendLine($"Entity: {rule.EntityName}");
            sb.AppendLine($"Scope: {rule.Scope}");
            sb.AppendLine($"Status: {rule.Status}");

            if (!string.IsNullOrEmpty(rule.Description))
                sb.AppendLine($"Description: {rule.Description}");
            if (!string.IsNullOrEmpty(rule.CreatedOn))
                sb.AppendLine($"CreatedOn: {rule.CreatedOn}");
            if (!string.IsNullOrEmpty(rule.CreatedBy))
                sb.AppendLine($"CreatedBy: {rule.CreatedBy}");
            if (!string.IsNullOrEmpty(rule.ModifiedOn))
                sb.AppendLine($"ModifiedOn: {rule.ModifiedOn}");
            if (!string.IsNullOrEmpty(rule.ModifiedBy))
                sb.AppendLine($"ModifiedBy: {rule.ModifiedBy}");

            sb.AppendLine();
            if (rule.Conditions.Count > 0)
            {
                sb.AppendLine($"[Conditions] {rule.Conditions.Count} total");
                foreach (var c in rule.Conditions)
                    sb.AppendLine(c);
                sb.AppendLine();
            }

            if (rule.Actions.Count > 0)
            {
                sb.AppendLine($"[Actions] {rule.Actions.Count} total");
                foreach (var a in rule.Actions)
                    sb.AppendLine(a);
                sb.AppendLine();
            }

            if (rule.Conditions.Count == 0 && rule.Actions.Count == 0)
            {
                var message = rule.XamlParseStatus == "unable to parse"
                    ? "unable to parse"
                    : "no conditions or actions extracted";
                sb.AppendLine($"[XAML] ({message} - use manage_record(action='read') with columns 'xaml' to inspect raw)");
            }

            return sb.ToString();
        }

        private static CallToolResult StructuredResult(string text, GetBusinessRulesResult structured) => new()
        {
            Content = [new TextContentBlock { Text = text }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private sealed class XamlParseResult
        {
            public List<string> Conditions { get; set; } = [];
            public List<string> Actions { get; set; } = [];
            public string ParseStatus { get; set; }
        }
    }
}
