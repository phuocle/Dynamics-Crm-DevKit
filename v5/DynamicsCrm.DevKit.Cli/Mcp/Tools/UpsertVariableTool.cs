using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertVariableTool
    {
        private readonly ServiceClient _serviceClient;

        public UpsertVariableTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_variable",
            Title = "Create or update an environment variable",
            Destructive = false, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertVariableResult)),
        Description(
            "Create or update a Dataverse environment variable (definition + current value) in a single call.\n\n" +

            "BEHAVIOR:\n" +
            "- If not found: CREATES new definition (requires display_name and type)\n" +
            "- If found: UPDATES definition with provided fields\n" +
            "- If value provided: creates/updates the environmentvariablevalue record\n" +
            "- If clear_value=true: deletes the value record (reverts to default)\n\n" +

            "TIPS:\n" +
            "- Type cannot be changed after creation\n" +
            "- Environment variables typically do not require publishing")]
        public CallToolResult upsert_variable(
            [Description("Schema name with publisher prefix (e.g., 'new_ApiEndpoint').")] string variable_name,
            [Description("Display name. Required on create.")] string display_name = "",
            [Description("Type: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'. Required on create, ignored on update.")] string type = "",
            [Description("Default value for the definition.")] string default_value = "",
            [Description("Current value override. Creates/updates the value record. Mutually exclusive with clear_value.")] string value = "",
            [Description("Delete current value record (reverts to default). Mutually exclusive with value.")] bool clear_value = false,
            [Description("Variable description.")] string description = "",
            [Description("Solution to add definition to (create only).")] string solution_name = "",
            [Description("Publish after changes. Default: false.")] bool auto_publish = false)
        {
            if (string.IsNullOrWhiteSpace(variable_name))
                return ErrorResult("Error: variable_name is required.");

            if (clear_value && !string.IsNullOrWhiteSpace(value))
                return ErrorResult("Error: clear_value and value are mutually exclusive. Use one or the other.");

            variable_name = variable_name.Trim();

            try
            {
                var existingDef = RetrieveDefinition(variable_name);

                if (existingDef == null)
                    return CreateVariable(variable_name, display_name, type, default_value, value, description, solution_name, auto_publish);

                return UpdateVariable(existingDef, variable_name, display_name, default_value, value, clear_value, description, auto_publish);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to upsert environment variable '{variable_name}'\nMessage: {ex.Message}");
            }
        }

        private CallToolResult CreateVariable(
            string variableName, string displayName, string type, string defaultValue,
            string currentValue, string description, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult(
                    $"[Error] Cannot create environment variable '{variableName}':\n" +
                    "  display_name is required when creating a new variable.\n" +
                    "Tip: Use get_variables to check if the variable already exists.");

            if (string.IsNullOrWhiteSpace(type))
                return ErrorResult(
                    $"[Error] Cannot create environment variable '{variableName}':\n" +
                    "  type is required when creating a new variable.\n" +
                    "  Valid types: string, number, boolean, json, datasource, secret\n" +
                    "Tip: Use get_variables to check if the variable already exists.");

            var typeValue = MapType(type.Trim().ToLowerInvariant());
            if (typeValue < 0)
                return ErrorResult(
                    $"[Error] Invalid type '{type}'.\n" +
                    "Valid types: string, number, boolean, json, datasource, secret");

            var newDef = new Entity("environmentvariabledefinition")
            {
                ["schemaname"] = variableName,
                ["displayname"] = displayName.Trim(),
                ["type"] = new OptionSetValue(typeValue)
            };
            if (!string.IsNullOrWhiteSpace(defaultValue))
                newDef["defaultvalue"] = defaultValue;
            if (!string.IsNullOrWhiteSpace(description))
                newDef["description"] = description.Trim();

            var defId = _serviceClient.Create(newDef);

            // Add to solution if specified
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                try
                {
                    _serviceClient.Execute(new AddSolutionComponentRequest
                    {
                        AddRequiredComponents = false,
                        ComponentType = 380, // EnvironmentVariableDefinition
                        ComponentId = defId,
                        SolutionUniqueName = solutionName.Trim()
                    });
                }
                catch (Exception ex)
                {
                    // Non-fatal: variable was created, just failed to add to solution
                    var solWarning = $"Failed to add to solution '{solutionName}': {ex.Message}";
                    var sb = BuildCompactText("created", variableName, displayName.Trim(),
                        GetTypeLabel(typeValue), defaultValue, "", false, solutionName.Trim(), false);
                    sb.AppendLine($"SolutionWarning: {solWarning}");

                    return BuildResult(sb, "created", variableName, displayName.Trim(),
                        GetTypeLabel(typeValue), defaultValue, "", false, solutionName.Trim(), false, solWarning);
                }
            }

            // Create current value if provided
            var curVal = "";
            if (!string.IsNullOrWhiteSpace(currentValue))
            {
                UpsertCurrentValue(defId, currentValue);
                curVal = currentValue;
            }

            var published = autoPublish && Publish();
            var typeLbl = GetTypeLabel(typeValue);
            var sol = string.IsNullOrWhiteSpace(solutionName) ? "" : solutionName.Trim();

            var text = BuildCompactText("created", variableName, displayName.Trim(),
                typeLbl, defaultValue, curVal, false, sol, published);

            return BuildResult(text, "created", variableName, displayName.Trim(),
                typeLbl, defaultValue, curVal, false, sol, published, null);
        }

        private CallToolResult UpdateVariable(
            Entity existingDef, string variableName, string displayName, string defaultValue,
            string currentValue, bool clearValue, string description, bool autoPublish)
        {
            var defId = existingDef.Id;
            var existingDisplayName = existingDef.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(existingDef.GetAttributeValue<OptionSetValue>("type"));
            var existingDefault = existingDef.GetAttributeValue<string>("defaultvalue") ?? "";

            // Update definition if any fields provided
            var update = new Entity("environmentvariabledefinition", defId);
            if (!string.IsNullOrWhiteSpace(displayName))
            {
                update["displayname"] = displayName.Trim();
                existingDisplayName = displayName.Trim();
            }
            if (!string.IsNullOrWhiteSpace(defaultValue))
            {
                update["defaultvalue"] = defaultValue;
                existingDefault = defaultValue;
            }
            if (!string.IsNullOrWhiteSpace(description))
                update["description"] = description.Trim();

            if (update.Attributes.Count > 0)
                _serviceClient.Update(update);

            // Handle current value
            var curVal = "";
            var valueCleared = false;

            if (clearValue)
            {
                DeleteCurrentValue(defId);
                valueCleared = true;
            }
            else if (!string.IsNullOrWhiteSpace(currentValue))
            {
                UpsertCurrentValue(defId, currentValue);
                curVal = currentValue;
            }
            else
            {
                // Get existing current value for display
                var existingValues = GetCurrentValues(defId);
                curVal = existingValues ?? "";
            }

            var published = autoPublish && Publish();

            var text = BuildCompactText("updated", variableName, existingDisplayName,
                existingType, existingDefault, curVal, valueCleared, "", published);

            return BuildResult(text, "updated", variableName, existingDisplayName,
                existingType, existingDefault, curVal, valueCleared, "", published, null);
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

        private void UpsertCurrentValue(Guid definitionId, string value)
        {
            var query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("environmentvariablevalueid"),
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
            if (result.Entities.Count > 0)
            {
                var existing = result.Entities[0];
                existing["value"] = value;
                _serviceClient.Update(existing);
            }
            else
            {
                var newValue = new Entity("environmentvariablevalue")
                {
                    ["value"] = value,
                    ["environmentvariabledefinitionid"] = new EntityReference("environmentvariabledefinition", definitionId)
                };
                _serviceClient.Create(newValue);
            }
        }

        private void DeleteCurrentValue(Guid definitionId)
        {
            var query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("environmentvariablevalueid"),
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
            if (result.Entities.Count > 0)
            {
                _serviceClient.Delete("environmentvariablevalue", result.Entities[0].Id);
            }
        }

        private string GetCurrentValues(Guid definitionId)
        {
            var query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("value"),
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
            return result.Entities.Count > 0
                ? result.Entities[0].GetAttributeValue<string>("value")
                : null;
        }

        private bool Publish()
        {
            try
            {
                _serviceClient.Execute(new PublishAllXmlRequest());
                return true;
            }
            catch
            {
                return false;
            }
        }

        private static StringBuilder BuildCompactText(
            string action, string variableName, string displayName,
            string typeLbl, string defaultValue, string currentValue,
            bool valueCleared, string solutionName, bool published)
        {
            var sb = new StringBuilder(256);
            var label = action == "created" ? "Created" : "Updated";
            sb.AppendLine($"[EnvironmentVariable] {label}: {variableName}");
            sb.AppendLine($"DisplayName: {displayName}");
            sb.AppendLine($"Type: {typeLbl}");
            sb.AppendLine($"DefaultValue: {defaultValue}");

            if (valueCleared)
                sb.AppendLine("CurrentValue: (cleared - reverted to default)");
            else
                sb.AppendLine($"CurrentValue: {currentValue}");

            if (!string.IsNullOrEmpty(solutionName))
                sb.AppendLine($"Solution: {solutionName}");

            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return sb;
        }

        private static CallToolResult BuildResult(
            StringBuilder text, string action, string variableName, string displayName,
            string typeLbl, string defaultValue, string currentValue,
            bool valueCleared, string solutionName, bool published, string solutionWarning)
        {
            var structured = new UpsertVariableResult
            {
                Action = action,
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName,
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultValue) ? null : defaultValue,
                CurrentValue = string.IsNullOrEmpty(currentValue) ? null : currentValue,
                ValueCleared = valueCleared,
                SolutionName = string.IsNullOrEmpty(solutionName) ? null : solutionName,
                SolutionWarning = solutionWarning,
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static int MapType(string type) => type switch
        {
            "string" => 100000000,
            "number" => 100000001,
            "boolean" => 100000002,
            "json" => 100000003,
            "datasource" => 100000004,
            "secret" => 100000005,
            _ => -1
        };

        private static string GetTypeLabel(int typeValue) => typeValue switch
        {
            100000000 => "String",
            100000001 => "Number",
            100000002 => "Boolean",
            100000003 => "JSON",
            100000004 => "DataSource",
            100000005 => "Secret",
            _ => "Unknown"
        };

        private static string GetVariableTypeLabel(OptionSetValue typeValue)
        {
            if (typeValue == null) return "Unknown";
            return GetTypeLabel(typeValue.Value);
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
