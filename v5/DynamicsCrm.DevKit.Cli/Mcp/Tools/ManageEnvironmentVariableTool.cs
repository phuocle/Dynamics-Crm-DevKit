using Microsoft.Crm.Sdk.Messages;
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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;


namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageEnvironmentVariableTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageEnvironmentVariableTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_environment_variable",
            Title = "Manage environment variables",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageEnvironmentVariableResult)),
        Description(
            "Dataverse environment variables — list/detail/create/update/delete/clear.\n" +
            "- list: optional solution_name, max_records\n" +
            "- detail: variable_name\n" +
            "- create: solution_name (REQUIRED) + display_name + type. Optional: default_value, value, description\n" +
            "- update: variable_name. Optional: display_name, default_value, value, description\n" +
            "- delete: variable_name (definition + value, irreversible)\n" +
            "- clear: variable_name (current value only → reverts to default)\n\n" +

            "PREFIX CONFIRMATION on CREATE: first call (confirmed_prefix empty) returns [PrefixConfirmationRequired] preview — confirm, re-call with confirmed_prefix.\n" +
            "solution_name is REQUIRED for create — if not provided by the user, ask; never search or guess.\n\n" +

            "Current value overrides default. Type immutable after creation. Usually no publish needed.\n\n" +

            "WHEN TO USE:\n" +
            "- Inspect / list env vars in a solution (config secrets, feature flags, etc.)\n" +
            "- Create or update a definition + current value\n" +
            "- Clear current value to revert to default; delete to remove definition entirely\n\n" +

            "SAFETY:\n" +
            "- delete removes definition + current value (irreversible); clear removes current value only")]
        public CallToolResult manage_environment_variable(
            [Description("list, detail, create, update, delete, clear."
            )] string action,
            [Description("Schema name with prefix (e.g. 'v4_ApiEndpoint'). Required: detail/update/delete/clear. For create: omit — derived from solution_name publisher prefix."
            )] string variable_name = "",
            [Description("list: filter. create: REQUIRED — used to resolve publisher prefix."
            )] string solution_name = "",
            [Description("list only."
            )] int max_records = 50,
            [Description("Required: create."
            )] string display_name = "",
            [Description("string/number/boolean/json/datasource/secret. Required: create. Ignored: update."
            )] string type = "",
            [Description("")
            ] string default_value = "",
            [Description("Current value (creates/updates value record)."
            )] string value = "",
            [Description("")
            ] string description = "",
            [Description("")
            ] bool auto_publish = false,
            [Description("Confirmed prefix after [PrefixConfirmationRequired] preview."
            )] string confirmed_prefix = "")
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(solution_name, max_records),
                    "detail" => HandleDetail(variable_name),
                    "create" => HandleCreateAction(display_name, type, default_value, value, description, solution_name, confirmed_prefix, auto_publish),
                    "update" => HandleUpdateAction(variable_name, display_name, default_value, value, description, auto_publish),
                    "delete" => HandleDelete(variable_name),
                    "clear" => HandleClear(variable_name, auto_publish),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to manage environment variable: {ex.Message}");
            }
        }

        private CallToolResult HandleCreateAction(string displayName, string type,
            string defaultValue, string currentValue, string description, string solutionName,
            string confirmedPrefix, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult("Error: display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(type))
                return ErrorResult("Error: type is required for 'create'. Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            // Layer 1 (AI gate): solution_name is mandatory — prefix can only come from the solution's publisher
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for action='create'.\n" +
                    "The schema name prefix is derived from the solution's publisher — do not invent it.\n" +
                    "Ask the user which solution this environment variable belongs to.");

            // Resolve solution → publisher prefix
            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
            if (!solResult.IsSuccess)
                return ErrorResult($"Error: {solResult.Error}");

            // Layer 2 (code gate): block 'new' prefix — it means the solution's publisher is misconfigured
            // or the AI bypassed the layer-1 gate by guessing a default prefix
            if (solResult.Prefix.Equals("new", StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"Error: The publisher for solution '{solResult.UniqueName}' uses the reserved prefix 'new'.\n" +
                    "This prefix is Dataverse's default for unconfigured publishers and must not be used.\n" +
                    "Set a proper customization prefix on the publisher in Power Apps, then retry.");

            // First call without confirmed_prefix → show preview and ask AI/user to confirm
            if (string.IsNullOrWhiteSpace(confirmedPrefix))
            {
                var previewName = $"{solResult.Prefix}_{displayName.Trim().Replace(" ", "")}";
                var sb = new StringBuilder(256);
                sb.AppendLine("[PrefixConfirmationRequired]");
                sb.AppendLine($"ResolvedPrefix: {solResult.Prefix}");
                sb.AppendLine($"Solution: {solResult.UniqueName}");
                sb.AppendLine($"VariableName (preview): {previewName}");
                sb.AppendLine();
                sb.AppendLine($"→ Prefix is correct: re-call manage_environment_variable with confirmed_prefix=\"{solResult.Prefix}\"");;
                sb.AppendLine($"→ Wrong prefix: re-call manage_environment_variable with confirmed_prefix=\"<correct_prefix>\"");
                return new CallToolResult { Content = [new TextContentBlock { Text = sb.ToString() }] };
            }

            var prefix = confirmedPrefix.Trim().ToLowerInvariant();

            // Layer 2 also applies to the confirmed prefix supplied by AI/user
            if (prefix.Equals("new", StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    "Error: confirmed_prefix 'new' is the reserved Dataverse default prefix and cannot be used.\n" +
                    "Provide the actual publisher prefix for this solution.");

            var variableName = $"{prefix}_{displayName.Trim().Replace(" ", "")}";

            var existing = RetrieveDefinition(variableName);
            if (existing != null)
                return ErrorResult($"Error: Environment variable '{variableName}' already exists. Use action='update' to modify it.");

            return HandleCreate(variableName, displayName, type, defaultValue, currentValue, description, solResult.UniqueName, autoPublish);
        }

        private CallToolResult HandleUpdateAction(string variableName, string displayName,
            string defaultValue, string currentValue, string description, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'update'.");

            variableName = variableName.Trim();

            var existing = RetrieveDefinition(variableName);
            if (existing == null)
                return ErrorResult($"Error: Environment variable '{variableName}' not found. Use action='create' to create it.");

            return HandleUpdate(existing, variableName, displayName, defaultValue, currentValue, description, autoPublish);
        }

        private CallToolResult HandleList(string solutionName, int maxRecords)
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

            var definitionIds = definitions.Select(d => d.Id).ToList();
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

            var structured = new ManageEnvironmentVariableResult
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

        private CallToolResult HandleDetail(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'detail'.");

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

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "detail",
                VariableName = schemaName,
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

        private CallToolResult HandleCreate(string variableName, string displayName, string type,
            string defaultValue, string currentValue, string description, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult(
                    $"Error: Cannot create environment variable '{variableName}'.\n" +
                    "Required for action='create': display_name (human-readable label).");

            if (string.IsNullOrWhiteSpace(type))
                return ErrorResult(
                    $"Error: Cannot create environment variable '{variableName}'.\n" +
                    "Required for action='create': type. Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            var typeValue = MapType(type.Trim().ToLowerInvariant());
            if (typeValue < 0)
                return ErrorResult(
                    $"Error: Invalid type '{type}'.\n" +
                    "Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

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

            if (_options.DryRun)
                return DryRunResult($"Would CREATE environment variable '{variableName}' (type: {GetVariableTypeLabel(new OptionSetValue(typeValue))}).");

            var defId = _serviceClient.Create(newDef);

            string solWarning = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                try
                {
                    _serviceClient.Execute(new AddSolutionComponentRequest
                    {
                        AddRequiredComponents = false,
                        ComponentType = 380,
                        ComponentId = defId,
                        SolutionUniqueName = solutionName.Trim()
                    });
                }
                catch (Exception ex)
                {
                    solWarning = $"Failed to add to solution '{solutionName}': {ex.Message}";
                }
            }

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
                typeLbl, defaultValue, curVal, false, sol, published, solWarning);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "created",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName.Trim(),
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultValue) ? null : defaultValue,
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal,
                SolutionName = string.IsNullOrEmpty(sol) ? null : sol,
                SolutionWarning = solWarning,
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleUpdate(Entity existingDef, string variableName, string displayName,
            string defaultValue, string currentValue, string description, bool autoPublish)
        {
            var defId = existingDef.Id;
            var existingDisplayName = existingDef.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(existingDef.GetAttributeValue<OptionSetValue>("type"));
            var existingDefault = existingDef.GetAttributeValue<string>("defaultvalue") ?? "";

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

            var hasDefChanges = update.Attributes.Count > 0;
            var hasValueChange = !string.IsNullOrWhiteSpace(currentValue);

            if (_options.DryRun && (hasDefChanges || hasValueChange))
            {
                var parts = new List<string>();
                if (hasDefChanges) parts.Add("definition");
                if (hasValueChange) parts.Add("current value");
                return DryRunResult($"Would UPDATE environment variable '{variableName}' ({string.Join(" + ", parts)}).");
            }

            if (hasDefChanges)
                _serviceClient.Update(update);

            var curVal = "";
            if (hasValueChange)
            {
                UpsertCurrentValue(defId, currentValue);
                curVal = currentValue;
            }
            else
            {
                curVal = GetSingleCurrentValue(defId) ?? "";
            }

            var published = autoPublish && Publish();

            var text = BuildCompactText("updated", variableName, existingDisplayName,
                existingType, existingDefault, curVal, false, "", published, null);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "updated",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : existingDefault,
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal,
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleClear(string variableName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'clear'.");

            variableName = variableName.Trim();

            var def = RetrieveDefinition(variableName);
            if (def == null)
                return ErrorResult($"Error: Environment variable '{variableName}' not found.");

            var defId = def.Id;
            var existingDisplayName = def.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
            var existingDefault = def.GetAttributeValue<string>("defaultvalue") ?? "";

            if (_options.DryRun)
                return DryRunResult($"Would CLEAR current value of environment variable '{variableName}' (reverts to default).");

            DeleteCurrentValue(defId);

            var published = autoPublish && Publish();

            var text = BuildCompactText("cleared", variableName, existingDisplayName,
                existingType, existingDefault, "", true, "", published, null);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "cleared",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : existingDefault,
                ValueCleared = true,
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleDelete(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return ErrorResult("Error: variable_name is required for 'delete'.");

            variableName = variableName.Trim();

            var def = RetrieveDefinition(variableName);
            if (def == null)
                return ErrorResult($"Error: Environment variable '{variableName}' not found.");

            var defId = def.Id;
            var existingDisplayName = def.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));

            // Delete current value first (if exists), then delete definition
            if (_options.DryRun)
                return DryRunResult($"Would DELETE environment variable '{variableName}'.");
            DeleteCurrentValue(defId);
            _serviceClient.Delete("environmentvariabledefinition", defId);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "deleted",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = $"Deleted environment variable '{variableName}'" }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        #region Dataverse Operations

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

        private string GetSingleCurrentValue(Guid definitionId)
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

        private bool Publish()
        {
            McpHelper.FireAndForgetPublishAll(_serviceClient);
            return true; // publishing is running in background
        }

        #endregion

        #region Helpers

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

        private static StringBuilder BuildCompactText(
            string action, string variableName, string displayName,
            string typeLbl, string defaultValue, string currentValue,
            bool valueCleared, string solutionName, bool published, string solWarning)
        {
            var sb = new StringBuilder(256);
            var label = action switch
            {
                "created" => "Created",
                "updated" => "Updated",
                "cleared" => "Cleared value for",
                _ => action
            };
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

            if (!string.IsNullOrEmpty(solWarning))
                sb.AppendLine($"SolutionWarning: {solWarning}");

            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return sb;
        }

        private static string GetVariableTypeLabel(OptionSetValue typeValue)
        {
            if (typeValue == null) return "Unknown";
            return GetTypeLabel(typeValue.Value);
        }

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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        #endregion
    }
}
