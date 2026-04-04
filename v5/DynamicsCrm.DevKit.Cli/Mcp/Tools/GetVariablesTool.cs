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
    public class GetVariablesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetVariablesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_variables",
            Title = "List or get Dataverse environment variables",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List or get Dataverse environment variables (read-only).\n\n" +

            "TWO MODES:\n" +
            "- variable_name EMPTY: list all variables with name, type, default/current value\n" +
            "- variable_name PROVIDED: detail for a single variable\n\n" +

            "TIPS:\n" +
            "- Current value overrides default value\n" +
            "- Read-only — use upsert_variable to update values")]
        public CallToolResult get_variables(
            [Description(
                "Schema name of the environment variable definition. " +
                "Leave empty to list all environment variables. " +
                "When provided, returns detailed info for that single variable. " +
                "Examples: 'new_ApiEndpoint', 'new_MaxRetries', 'cr123_EnableFeatureX'."
            )] string variable_name = "",
            [Description(
                "Filter variables by solution unique name (list mode only). " +
                "Leave empty to list all environment variables in the environment."
            )] string solution_name = "",
            [Description(
                "Maximum number of variables to return in list mode. Default is 50."
            )] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(variable_name))
                    return GetVariable(variable_name);

                return ListVariables(solution_name, max_records);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve environment variables: {ex.Message}");
            }
        }

        private CallToolResult ListVariables(string solutionName, int maxRecords)
        {
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 5000) maxRecords = 5000;

            var fetchXml = BuildListFetchXml(solutionName, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var definitions = result.Entities;

            if (definitions.Count == 0)
            {
                var msg = string.IsNullOrWhiteSpace(solutionName)
                    ? "No environment variables found."
                    : $"No environment variables found in solution '{solutionName}'.";
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = msg }]
                };
            }

            // Get current values for all definitions
            var definitionIds = definitions
                .Select(d => d.Id)
                .ToList();
            var currentValues = GetCurrentValues(definitionIds);

            var sb = new StringBuilder(definitions.Count * 120 + 128);
            sb.AppendLine($"[EnvironmentVariables] {definitions.Count} total");
            sb.AppendLine();
            sb.AppendLine("name\ttype\tdefaultValue\tcurrentValue");

            var items = new List<EnvironmentVariableItem>();

            foreach (var def in definitions.OrderBy(d => d.GetAttributeValue<string>("schemaname")))
            {
                var schemaName = def.GetAttributeValue<string>("schemaname") ?? "";
                var typeLbl = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
                var defaultVal = def.GetAttributeValue<string>("defaultvalue") ?? "";
                currentValues.TryGetValue(def.Id, out var currentVal);
                var curVal = currentVal ?? "";

                sb.AppendLine($"{schemaName}\t{typeLbl}\t{defaultVal}\t{curVal}");

                items.Add(new EnvironmentVariableItem
                {
                    Name = schemaName,
                    Type = typeLbl,
                    DefaultValue = string.IsNullOrEmpty(defaultVal) ? null : defaultVal,
                    CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal
                });
            }

            var structured = new EnvironmentVariableListResult
            {
                Action = "list",
                Count = definitions.Count,
                SolutionFilter = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName,
                Variables = items
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetVariable(string variableName)
        {
            var def = RetrieveDefinition(variableName.Trim());
            if (def == null)
                return ErrorResult($"Error: Environment variable '{variableName}' not found.");

            var currentValues = GetCurrentValues([def.Id]);
            currentValues.TryGetValue(def.Id, out var currentVal);

            var schemaName = def.GetAttributeValue<string>("schemaname") ?? "";
            var displayName = def.GetAttributeValue<string>("displayname") ?? "";
            var typeLbl = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
            var defaultVal = def.GetAttributeValue<string>("defaultvalue") ?? "";
            var description = def.GetAttributeValue<string>("description") ?? "";
            var curVal = currentVal ?? "";

            var sb = new StringBuilder(256);
            sb.AppendLine($"[EnvironmentVariable] {schemaName}");
            sb.AppendLine($"DisplayName: {displayName}");
            sb.AppendLine($"Type: {typeLbl}");
            sb.AppendLine($"DefaultValue: {defaultVal}");
            sb.AppendLine($"CurrentValue: {curVal}");
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            var structured = new EnvironmentVariableGetResult
            {
                Action = "get",
                Name = schemaName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName,
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultVal) ? null : defaultVal,
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal,
                Description = string.IsNullOrEmpty(description) ? null : description
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private Entity RetrieveDefinition(string schemaName)
        {
            var query = new QueryExpression("environmentvariabledefinition")
            {
                ColumnSet = new ColumnSet("schemaname", "displayname", "type", "defaultvalue", "description"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("schemaname", ConditionOperator.Equal, schemaName)
                    }
                },
                TopCount = 1
            };

            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.FirstOrDefault();
        }

        private Dictionary<Guid, string> GetCurrentValues(List<Guid> definitionIds)
        {
            var dict = new Dictionary<Guid, string>();
            if (definitionIds.Count == 0) return dict;

            var query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("value", "environmentvariabledefinitionid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("environmentvariabledefinitionid", ConditionOperator.In, definitionIds.Cast<object>().ToArray())
                    }
                }
            };

            var result = _serviceClient.RetrieveMultiple(query);
            foreach (var entity in result.Entities)
            {
                var defRef = entity.GetAttributeValue<EntityReference>("environmentvariabledefinitionid");
                if (defRef != null)
                {
                    dict[defRef.Id] = entity.GetAttributeValue<string>("value") ?? "";
                }
            }

            return dict;
        }

        private static string BuildListFetchXml(string solutionName, int maxRecords)
        {
            if (string.IsNullOrWhiteSpace(solutionName))
            {
                return $@"<fetch top='{maxRecords}'>
  <entity name='environmentvariabledefinition'>
    <attribute name='schemaname' />
    <attribute name='displayname' />
    <attribute name='type' />
    <attribute name='defaultvalue' />
    <order attribute='schemaname' />
  </entity>
</fetch>";
            }

            return $@"<fetch top='{maxRecords}'>
  <entity name='environmentvariabledefinition'>
    <attribute name='schemaname' />
    <attribute name='displayname' />
    <attribute name='type' />
    <attribute name='defaultvalue' />
    <order attribute='schemaname' />
    <link-entity name='solutioncomponent' from='objectid' to='environmentvariabledefinitionid'>
      <link-entity name='solution' from='solutionid' to='solutionid'>
        <filter>
          <condition attribute='uniquename' operator='eq' value='{EscapeXml(solutionName)}' />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
        }

        private static string GetVariableTypeLabel(OptionSetValue typeValue)
        {
            if (typeValue == null) return "Unknown";
            return typeValue.Value switch
            {
                100000000 => "String",
                100000001 => "Number",
                100000002 => "Boolean",
                100000003 => "JSON",
                100000004 => "DataSource",
                100000005 => "Secret",
                _ => $"Unknown ({typeValue.Value})"
            };
        }

        private static string EscapeXml(string input)
        {
            if (string.IsNullOrEmpty(input)) return input;
            return input
                .Replace("&", "&amp;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("\"", "&quot;")
                .Replace("'", "&apos;");
        }

        private static CallToolResult ErrorResult(string message) =>
            new()
            {
                IsError = true,
                Content = [new TextContentBlock { Text = message }]
            };
    }
}
