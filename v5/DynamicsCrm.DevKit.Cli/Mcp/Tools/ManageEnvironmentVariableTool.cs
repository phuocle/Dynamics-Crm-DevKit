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
    public class ManageEnvironmentVariableTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageEnvironmentVariableTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_environment_variable",
            Title = "Manage environment variables",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageEnvironmentVariableResult)),
        Description(
            "Manage env vars. list/detail non-destructive; create/update/delete/clear destructive — confirm first.\n" +
            "Actions: 'list' (solution_name filter), 'detail' (variable_name), 'create' (solution_name+display_name+type REQUIRED), 'update' (variable_name), 'delete' (variable_name, irreversible — no backup), 'clear' (variable_name, removes current value only; definition+default remain).\n" +
            "Type immutable after create — delete+recreate to change. 'create' blocks reserved prefix 'new' — set proper customization prefix on publisher first. 'create' rejects if Display/schema name exists → use update.\n" +
            "confirmed_prefix = optional safety check; must match solution publisher prefix.")]
        public CallToolResult manage_environment_variable(
            [Description("'list', 'detail', 'create', 'update', 'delete', 'clear'."
            )] string action,
            [Description("Display/schema name with prefix (e.g. 'v4_ApiEndpoint'). Required: detail/update/delete/clear. Omit for create (derived from solution)."
            )] string variable_name = "",
            [Description("Display/unique name or GUID. 'list': filter. 'create': REQUIRED (resolves publisher prefix)."
            )] string solution_name = "",
            [Description("List only. Default 50, max 5000."
            )] int max_records = 50,
            [Description("Human-readable label. Required: create."
            )] string display_name = "",
            [Description("'string'/'number'/'boolean'/'json'/'datasource'/'secret'. Required: create. Immutable after."
            )] string type = "",
            [Description("Default value. Optional: create/update."
            )] string default_value = "",
            [Description("Current value (overrides default). Optional: create/update."
            )] string value = "",
            [Description("Description. Optional: create/update."
            )] string description = "",
            [Description("Optional prefix check for 'create'. Must match solution publisher prefix."
            )] string confirmed_prefix = "")
        {
            if (string.IsNullOrWhiteSpace(action))
                return Error("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(solution_name, max_records),
                    "detail" => HandleDetail(variable_name),
                    "create" => HandleCreateAction(display_name, type, default_value, value, description, solution_name, confirmed_prefix),
                    "update" => HandleUpdateAction(variable_name, display_name, default_value, value, description),
                    "delete" => HandleDelete(variable_name),
                    "clear" => HandleClear(variable_name),
                    _ => Error($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult HandleCreateAction(string displayName, string type,
            string defaultValue, string currentValue, string description, string solutionName,
            string confirmedPrefix)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return Error("Error: display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(type))
                return Error("Error: type is required for 'create'. Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            var existingByDisplayName = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_serviceClient, displayName.Trim(), "manage_environment_variable");
            if (existingByDisplayName.IsSuccess)
            {
                var existingSchemaName = existingByDisplayName.Value.GetAttributeValue<string>("schemaname") ?? existingByDisplayName.CanonicalName ?? existingByDisplayName.Value.Id.ToString();
                return Error($"Error: Display Name '{displayName.Trim()}' resolves to existing environment variable '{existingSchemaName}'. Use action='update' to modify it.");
            }
            if (existingByDisplayName.Status == ResolveStatus.Ambiguous || existingByDisplayName.Status == ResolveStatus.Error)
                return Error(existingByDisplayName.Error);

            // Layer 1 (AI gate): solution_name is mandatory — prefix can only come from the solution's publisher
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error(
                    "Error: solution_name is required for action='create'.\n" +
                    "The schema name prefix is derived from the solution's publisher — do not invent it.\n" +
                    "Ask the user which solution this environment variable belongs to.");

            // Resolve solution → publisher prefix
            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
            if (!solResult.IsSuccess)
                return Error($"Error: {solResult.Error}");

            // Layer 2 (code gate): block 'new' prefix — it means the solution's publisher is misconfigured
            // or the AI bypassed the layer-1 gate by guessing a default prefix
            if (solResult.Prefix.Equals("new", StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Error: The publisher for solution '{solResult.UniqueName}' uses the reserved prefix 'new'.\n" +
                    "This prefix is Dataverse's default for unconfigured publishers and must not be used.\n" +
                    "Set a proper customization prefix on the publisher in Power Apps, then retry.");

            var prefix = solResult.Prefix.Trim().ToLowerInvariant();

            if (!string.IsNullOrWhiteSpace(confirmedPrefix) &&
                !confirmedPrefix.Trim().Equals(prefix, StringComparison.OrdinalIgnoreCase))
            {
                return Error(
                    $"Error: confirmed_prefix '{confirmedPrefix.Trim()}' does not match solution '{solResult.UniqueName}' publisher prefix '{prefix}'.\n" +
                    "Use the solution publisher prefix or omit confirmed_prefix.");
            }

            var variableName = $"{prefix}_{displayName.Trim().Replace(" ", "")}";

            var existingByVariableName = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_serviceClient, variableName, "manage_environment_variable");
            if (existingByVariableName.IsSuccess)
            {
                var existingSchemaName = existingByVariableName.Value.GetAttributeValue<string>("schemaname") ?? existingByVariableName.CanonicalName ?? existingByVariableName.Value.Id.ToString();
                return Error($"Error: Environment variable '{variableName}' resolves to existing environment variable '{existingSchemaName}'. Use action='update' to modify it.");
            }
            if (existingByVariableName.Status == ResolveStatus.Ambiguous || existingByVariableName.Status == ResolveStatus.Error)
                return Error(existingByVariableName.Error);

            return HandleCreate(variableName, displayName, type, defaultValue, currentValue, description, solResult.UniqueName);
        }

        private CallToolResult HandleUpdateAction(string variableName, string displayName,
            string defaultValue, string currentValue, string description)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("Error: variable_name is required for 'update'.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);

            return HandleUpdate(resolved.Definition, resolved.SchemaName, displayName, defaultValue, currentValue, description);
        }

        private CallToolResult HandleList(string solutionName, int maxRecords)
        {
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 5000) maxRecords = 5000;

            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error($"Error: {solResult.Error}");
                solutionName = solResult.UniqueName;
            }

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
                return Error("Error: variable_name is required for 'detail'.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var def = resolved.Definition;

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
            string defaultValue, string currentValue, string description, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return Error(
                    $"Error: Cannot create environment variable '{variableName}'.\n" +
                    "Required for action='create': display_name (human-readable label).");

            if (string.IsNullOrWhiteSpace(type))
                return Error(
                    $"Error: Cannot create environment variable '{variableName}'.\n" +
                    "Required for action='create': type. Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            var typeValue = MapType(type.Trim().ToLowerInvariant());
            if (typeValue < 0)
                return Error(
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
                return DryRun($"Would CREATE environment variable '{variableName}' (type: {GetVariableTypeLabel(new OptionSetValue(typeValue))}).", new ManageEnvironmentVariableResult
                {
                    Action = "create",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = displayName,
                    Type = GetVariableTypeLabel(new OptionSetValue(typeValue)),
                    DefaultValue = defaultValue,
                    CurrentValue = currentValue,
                    Description = description,
                    SolutionName = solutionName,
                    CreateMode = "metadata",
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Published = false
                });

            var defId = _serviceClient.Create(newDef);

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _serviceClient,
                defId,
                380,
                solutionName);
            var solWarning = string.IsNullOrWhiteSpace(addResult.AddToSolutionWarning)
                ? null
                : $"Failed to add to solution '{solutionName}': {addResult.AddToSolutionWarning}";

            var curVal = "";
            if (!string.IsNullOrWhiteSpace(currentValue))
            {
                UpsertCurrentValue(defId, currentValue);
                curVal = currentValue;
            }

            var typeLbl = GetTypeLabel(typeValue);
            var sol = string.IsNullOrWhiteSpace(solutionName) ? "" : solutionName.Trim();

            var text = BuildCompactText("created", variableName, displayName.Trim(),
                typeLbl, defaultValue, curVal, false, sol, solWarning);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "created",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName.Trim(),
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultValue) ? null : defaultValue,
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal,
                SolutionName = string.IsNullOrEmpty(sol) ? null : sol,
                CreateMode = SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString(),
                IsAddToSolution = addResult.IsAddToSolution,
                AddToSolutionMethod = addResult.AddToSolutionMethod,
                AddToSolutionWarning = addResult.AddToSolutionWarning,
                SolutionWarning = solWarning
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleUpdate(Entity existingDef, string variableName, string displayName,
            string defaultValue, string currentValue, string description)
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
                return DryRun($"Would UPDATE environment variable '{variableName}' ({string.Join(" + ", parts)}).", new ManageEnvironmentVariableResult
                {
                    Action = "update",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = displayName,
                    DefaultValue = defaultValue,
                    CurrentValue = currentValue,
                    Description = description,
                    Published = false
                });
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

            var text = BuildCompactText("updated", variableName, existingDisplayName,
                existingType, existingDefault, curVal, false, "", null);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "updated",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : existingDefault,
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : curVal
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleClear(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("Error: variable_name is required for 'clear'.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var def = resolved.Definition;
            variableName = resolved.SchemaName;

            var defId = def.Id;
            var existingDisplayName = def.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
            var existingDefault = def.GetAttributeValue<string>("defaultvalue") ?? "";

            if (_options.DryRun)
                return DryRun($"Would CLEAR current value of environment variable '{variableName}' (reverts to default).", new ManageEnvironmentVariableResult
                {
                    Action = "clear",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = existingDisplayName,
                    Type = existingType,
                    DefaultValue = existingDefault,
                    ValueCleared = true,
                    Published = false
                });

            DeleteCurrentValue(defId);

            var text = BuildCompactText("cleared", variableName, existingDisplayName,
                existingType, existingDefault, "", true, "", null);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "cleared",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : existingDefault,
                ValueCleared = true
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
                return Error("Error: variable_name is required for 'delete'.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var def = resolved.Definition;
            variableName = resolved.SchemaName;

            var defId = def.Id;
            var existingDisplayName = def.GetAttributeValue<string>("displayname") ?? "";
            var existingType = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));

            // Delete current value first (if exists), then delete definition
            if (_options.DryRun)
                return DryRun($"Would DELETE environment variable '{variableName}'.", new ManageEnvironmentVariableResult
                {
                    Action = "delete",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = existingDisplayName,
                    Type = existingType,
                    Published = false
                });
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
            bool valueCleared, string solutionName, string solWarning)
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

        private (Entity Definition, string SchemaName, string Error) ResolveDefinitionInput(string variableName)
        {
            var trimmed = variableName?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return (null, null, "Error: variable_name is required.");

            var resolved = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_serviceClient, trimmed, "manage_environment_variable");
            if (!resolved.IsSuccess)
                return (null, null, $"Error: variable_name '{trimmed}': {resolved.Error}");

            var schemaName = resolved.Value.GetAttributeValue<string>("schemaname") ?? resolved.CanonicalName ?? trimmed;
            return (resolved.Value, schemaName, null);
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

        #endregion
    }
}
