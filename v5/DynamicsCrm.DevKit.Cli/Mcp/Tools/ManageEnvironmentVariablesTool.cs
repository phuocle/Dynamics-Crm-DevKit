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
    public class ManageEnvironmentVariablesTool
    {
        private readonly ServiceClient _serviceClient;

        public ManageEnvironmentVariablesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "manage_environment_variables",
            Title = "List, get, and set Dataverse environment variables",
            ReadOnly = false, Destructive = false),
        Description(
            "List, get, and set Dataverse environment variables.\n\n" +

            "PARAMETERS:\n" +
            "- action (required): 'list', 'get', or 'set'.\n" +
            "- variable_name: For get/set: variable schema name.\n" +
            "- value: For set: new value.\n" +
            "- solution_name: Filter by solution (list mode).\n" +
            "- max_records: Max variables for list mode (default 50).\n\n" +

            "RETURNS:\n" +
            "- list: TSV table of variables with name, type, default value, current value\n" +
            "- get: Key-value details of a single variable\n" +
            "- set: Confirmation with old and new values\n\n" +

            "WHEN TO USE:\n" +
            "- To check environment-specific configuration\n" +
            "- To update connection strings or API endpoints between environments\n" +
            "- When debugging flows or plugins that use environment variables\n\n" +

            "TIPS:\n" +
            "- Environment variables have a default value and an optional current value\n" +
            "- The current value overrides the default value\n" +
            "- Use get to check both default and current values before setting")]
        public CallToolResult manage_environment_variables(
            [Description(
                "The action to perform. Must be 'list', 'get', or 'set'. " +
                "'list' returns all variables (optionally filtered by solution). " +
                "'get' returns details for a single variable. " +
                "'set' updates the current value of a variable."
            )] string action,
            [Description(
                "Schema name of the environment variable definition. " +
                "Required for 'get' and 'set' actions. " +
                "Examples: 'new_ApiEndpoint', 'new_MaxRetries', 'cr123_EnableFeatureX'."
            )] string variable_name = "",
            [Description(
                "New value to set. Required for 'set' action. " +
                "Must be a string representation matching the variable type. " +
                "Examples: 'https://api.prod.contoso.com', '5', 'true'."
            )] string value = "",
            [Description(
                "Filter variables by solution unique name (list mode only). " +
                "Leave empty to list all environment variables in the environment."
            )] string solution_name = "",
            [Description(
                "Maximum number of variables to return in list mode. Default is 50."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Must be 'list', 'get', or 'set'.");

            var act = action.Trim().ToLowerInvariant();

            return act switch
            {
                "list" => ListVariables(solution_name, max_records),
                "get" => GetVariable(variable_name),
                "set" => SetVariable(variable_name, value),
                _ => ErrorResult($"Error: Unknown action '{action}'. Must be 'list', 'get', or 'set'.")
            };
        }

        private CallToolResult ListVariables(string solutionName, int maxRecords)
        {
            try
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
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to list environment variables.\nMessage: {ex.Message}");
            }
        }

        private CallToolResult GetVariable(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'get' action.");

            try
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
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to get environment variable '{variableName}'.\nMessage: {ex.Message}");
            }
        }

        private CallToolResult SetVariable(string variableName, string newValue)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'set' action.");

            if (newValue == null)
                return ErrorResult("Error: value is required for 'set' action.");

            try
            {
                var def = RetrieveDefinition(variableName.Trim());
                if (def == null)
                    return ErrorResult($"Error: Environment variable '{variableName}' not found.");

                var schemaName = def.GetAttributeValue<string>("schemaname") ?? "";
                var typeLbl = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
                var defaultVal = def.GetAttributeValue<string>("defaultvalue") ?? "";

                // Get existing current value record
                var existingValue = RetrieveCurrentValueEntity(def.Id);
                var oldVal = existingValue?.GetAttributeValue<string>("value") ?? "";

                if (existingValue != null)
                {
                    // Update existing value record
                    var update = new Entity("environmentvariablevalue", existingValue.Id);
                    update["value"] = newValue;
                    _serviceClient.Update(update);
                }
                else
                {
                    // Create new value record
                    var create = new Entity("environmentvariablevalue");
                    create["environmentvariabledefinitionid"] = new EntityReference("environmentvariabledefinition", def.Id);
                    create["value"] = newValue;
                    _serviceClient.Create(create);
                }

                var sb = new StringBuilder(256);
                sb.AppendLine("[EnvironmentVariable] Updated");
                sb.AppendLine($"Name: {schemaName}");
                sb.AppendLine($"Type: {typeLbl}");
                sb.AppendLine($"OldValue: {oldVal}");
                sb.AppendLine($"NewValue: {newValue}");

                var structured = new EnvironmentVariableSetResult
                {
                    Action = "set",
                    Name = schemaName,
                    Type = typeLbl,
                    OldValue = string.IsNullOrEmpty(oldVal) ? null : oldVal,
                    NewValue = newValue,
                    Status = "updated"
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to set environment variable '{variableName}'.\nMessage: {ex.Message}");
            }
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

        private Entity RetrieveCurrentValueEntity(Guid definitionId)
        {
            var query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("value", "environmentvariabledefinitionid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("environmentvariabledefinitionid", ConditionOperator.Equal, definitionId)
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
