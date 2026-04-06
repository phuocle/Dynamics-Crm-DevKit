using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

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

        [McpServerTool(Name = "get_business_rules", Title = "List business rules for a Dataverse entity",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List business rules (client-side logic) for a Dataverse entity.\n\n" +

            "TWO MODES:\n" +
            "- rule_id EMPTY: list rules with name, scope, status\n" +
            "- rule_id PROVIDED: full detail with conditions and actions parsed from XAML\n\n" +

            "WHEN TO USE:\n" +
            "- Debug form behavior (fields hiding/showing unexpectedly)\n" +
            "- Audit client-side logic before adding JavaScript\n\n" +

            "TIPS:\n" +
            "- Business rules run client-side BEFORE JavaScript form events\n" +
            "- Scope 'Entity' means the rule runs on ALL forms\n" +
            "- Stored as workflow records with category=2")]
        public string get_business_rules(
            [Description(
                "Entity logical name (lowercase). Use get_tables to discover names."
            )] string entity_name,
            [Description(
                "GUID of a specific business rule for full detail. Leave empty to list all."
            )] string rule_id = "",
            [Description(
                "Filter by status: 'active' (activated rules), 'draft' (deactivated/not yet activated). " +
                "Leave empty to return all statuses."
            )] string status = "",
            [Description(
                "Maximum number of rules to return. Default: 50. Max: 200."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            entity_name = entity_name.Trim().ToLowerInvariant();

            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s != "active" && s != "draft")
                    return $"Error: Invalid status value '{status.Trim()}'. Use 'active' or 'draft'.";
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 200) max_records = 200;

            // Detail mode
            if (!string.IsNullOrWhiteSpace(rule_id))
            {
                if (!Guid.TryParse(rule_id.Trim(), out var id))
                    return $"Error: '{rule_id}' is not a valid GUID.";

                return GetRuleDetail(entity_name, id);
            }

            // List mode
            return GetRuleList(entity_name, status, max_records);
        }

        private string GetRuleList(string entityName, string status, int maxRecords)
        {
            try
            {
                var objectTypeCode = GetObjectTypeCode(entityName);
                if (objectTypeCode == null)
                    return $"Error: Entity '{entityName}' not found.";

                var fetchXml = BuildListFetchXml(objectTypeCode.Value, status, maxRecords);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                if (result.Entities.Count == 0)
                    return $"0 business rules found for '{entityName}'.";

                var sb = new StringBuilder(result.Entities.Count * 120 + 128);
                var countLabel = result.Entities.Count == 1 ? "rule" : "rules";
                sb.AppendLine($"[BusinessRules] {entityName} ({result.Entities.Count} {countLabel})");
                sb.AppendLine();
                sb.AppendLine("ruleId\tname\tscope\tstatus\tmodifiedOn");

                foreach (var e in result.Entities)
                {
                    var ruleId = e.Id.ToString();
                    var name = e.GetAttributeValue<string>("name") ?? "";
                    var scope = e.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : "";
                    var state = e.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : "";
                    var modified = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? "";

                    sb.AppendLine($"{ruleId}\t{EscapeTab(name)}\t{scope}\t{state}\t{modified}");
                }

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve business rules: {ex.Message}";
            }
        }

        private string GetRuleDetail(string entityName, Guid ruleId)
        {
            try
            {
                var entity = _serviceClient.Retrieve("workflow", ruleId,
                    new ColumnSet("name", "primaryentity", "scope", "statecode", "statuscode",
                        "xaml", "modifiedon", "modifiedby", "createdon", "createdby",
                        "description", "category"));

                var category = entity.GetAttributeValue<OptionSetValue>("category")?.Value;
                if (category != 2)
                    return $"Error: Record {ruleId} is not a business rule (category={category}, expected 2).";

                var primary = entity.GetAttributeValue<string>("primaryentity") ?? "";
                if (!string.IsNullOrEmpty(entityName) && !primary.Equals(entityName, StringComparison.OrdinalIgnoreCase))
                    return $"Error: Business rule {ruleId} belongs to entity '{primary}', not '{entityName}'.";

                var sb = new StringBuilder(1024);

                var name = entity.GetAttributeValue<string>("name") ?? "";
                sb.AppendLine($"[BusinessRule] {name}");
                sb.AppendLine($"RuleId: {ruleId}");
                sb.AppendLine($"Entity: {primary}");

                var scope = entity.FormattedValues.TryGetValue("scope", out var scopeText) ? scopeText : "";
                sb.AppendLine($"Scope: {scope}");

                var status = entity.FormattedValues.TryGetValue("statuscode", out var statusText) ? statusText : "";
                sb.AppendLine($"Status: {status}");

                var description = SanitizeDescription(entity.GetAttributeValue<string>("description"));
                if (!string.IsNullOrEmpty(description))
                    sb.AppendLine($"Description: {description}");

                var createdOn = entity.GetAttributeValue<DateTime?>("createdon");
                if (createdOn.HasValue)
                    sb.AppendLine($"CreatedOn: {createdOn.Value:yyyy-MM-dd HH:mm:ss}");

                var createdBy = entity.GetAttributeValue<EntityReference>("createdby");
                if (createdBy != null)
                    sb.AppendLine($"CreatedBy: {createdBy.Name ?? createdBy.Id.ToString()}");

                var modifiedOn = entity.GetAttributeValue<DateTime?>("modifiedon");
                if (modifiedOn.HasValue)
                    sb.AppendLine($"ModifiedOn: {modifiedOn.Value:yyyy-MM-dd HH:mm:ss}");

                var modifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby");
                if (modifiedBy != null)
                    sb.AppendLine($"ModifiedBy: {modifiedBy.Name ?? modifiedBy.Id.ToString()}");

                // Parse XAML for conditions and actions
                var xaml = entity.GetAttributeValue<string>("xaml");
                if (!string.IsNullOrEmpty(xaml))
                {
                    sb.AppendLine();
                    ParseXaml(sb, xaml);
                }

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve business rule detail: {ex.Message}";
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

        private static void ParseXaml(StringBuilder sb, string xaml)
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

                if (conditions.Count > 0)
                {
                    sb.AppendLine($"[Conditions] {conditions.Count} total");
                    foreach (var c in conditions)
                        sb.AppendLine(c);
                    sb.AppendLine();
                }

                if (actions.Count > 0)
                {
                    sb.AppendLine($"[Actions] {actions.Count} total");
                    foreach (var a in actions)
                        sb.AppendLine(a);
                    sb.AppendLine();
                }

                if (conditions.Count == 0 && actions.Count == 0)
                    sb.AppendLine("[XAML] (no conditions or actions extracted - use get_record with columns 'xaml' to inspect raw)");
            }
            catch
            {
                sb.AppendLine("[XAML] (unable to parse - use get_record with columns 'xaml' to inspect raw)");
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
    }
}
