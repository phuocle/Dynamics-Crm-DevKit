using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;


namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageEnvironmentVariableTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageEnvironmentVariableTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_environment_variable",
            Title = "Manage environment variables",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageEnvironmentVariableResult)),
        Description(
            "Manage Dataverse environment variables (definition + current value). Actions: 'list', 'detail' (read-only) | 'create', 'update', 'delete', 'clear' (mutations — confirm first). CREATE uses the publisher prefix from solution_name directly. 'create' REQUIRES solution_name+display_name+type; schema name = publisher prefix of solution_name + display name (blocks reserved prefix 'new'; rejects if display/schema name exists → use update). Type immutable after create — delete+recreate to change. 'update' with empty value leaves the current value untouched — use 'clear' to remove it. 'clear' removes current value only (definition+default remain). 'delete' is irreversible (no backup). Secret-type values are masked as '(secret)' in all outputs.\n\n" +
            "WHEN TO USE:\n" +
            "- Create or update env vars used by apps, flows, or integrations\n" +
            "- Inspect default/current values; move config between environments via solutions\n\n" +
            "RELATED TOOLS:\n" +
            "- execute_webapi → environmentvariable* endpoints are blocked; use this tool\n" +
            "- get_solution_components → verify a variable's solution membership")]
        public CallToolResult manage_environment_variable(
            [Description("'list', 'detail', 'create', 'update', 'delete', 'clear'.")] string action = "",
            [Description("Display/schema name with prefix (e.g. 'v4_ApiEndpoint'). Required: detail/update/delete/clear. Omit for create (derived from solution).")] string variable_name = "",
            [Description("Display/unique name or GUID. 'list': filter. 'create': REQUIRED (resolves publisher prefix).")] string solution_name = "",
            [Description("List only. Default 50, max 5000.")] int max_records = 50,
            [Description("Human-readable label. Required: create.")] string display_name = "",
            [Description("'string'/'number'/'boolean'/'json'/'datasource'/'secret'. Required: create. Immutable after.")] string type = "",
            [Description("Default value. Optional: create/update.")] string default_value = "",
            [Description("Current value (overrides default). Optional: create/update. On update, omit/empty = keep existing — use action='clear' to remove.")] string value = "",
            [Description("Description. Optional: create/update.")] string description = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.");

                var normalizedAction = action.Trim().ToLowerInvariant();
            
                return normalizedAction switch
                {
                    "list" => HandleList(solution_name, max_records),
                    "detail" => HandleDetail(variable_name),
                    "create" => HandleCreateAction(display_name, type, default_value, value, description, solution_name),
                    "update" => HandleUpdateAction(variable_name, display_name, default_value, value, description),
                    "delete" => HandleDelete(variable_name),
                    "clear" => HandleClear(variable_name),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleCreateAction(string displayName, string type,
            string defaultValue, string currentValue, string description, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return Error("display_name is required for 'create'.",
                    "Provide a human-readable label — the schema name is derived from it.");

            if (string.IsNullOrWhiteSpace(type))
                return Error("type is required for 'create'.",
                    "Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            var existingByDisplayName = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_orgService, displayName.Trim(), "manage_environment_variable");
            if (existingByDisplayName.IsSuccess)
            {
                var existingSchemaName = existingByDisplayName.Value.GetAttributeValue<string>("schemaname") ?? existingByDisplayName.CanonicalName ?? existingByDisplayName.Value.Id.ToString();
                return Error($"Display Name '{displayName.Trim()}' resolves to existing environment variable '{existingSchemaName}'.",
                    "Use action='update' to modify it.");
            }
            if (existingByDisplayName.Status == ResolveStatus.Ambiguous || existingByDisplayName.Status == ResolveStatus.Error)
                return Error(existingByDisplayName.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");

            // Layer 1 (AI gate): solution_name is mandatory — prefix can only come from the solution's publisher
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error(
                    "solution_name is required for action='create'.",
                    "The schema name prefix is derived from the solution's publisher — do not invent it. Ask the user which solution this environment variable belongs to.");

            // Resolve solution → publisher prefix
            var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim());
            if (!solResult.IsSuccess)
                return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");

            // Layer 2 (code gate): block 'new' prefix — it means the solution's publisher is misconfigured
            // or the AI bypassed the layer-1 gate by guessing a default prefix
            if (solResult.Prefix.Equals("new", StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"The publisher for solution '{solResult.UniqueName}' uses the reserved prefix 'new'.",
                    "This prefix is Dataverse's default for unconfigured publishers and must not be used. Set a proper customization prefix on the publisher in Power Apps, then retry.");

            var prefix = solResult.Prefix.Trim().ToLowerInvariant();
            var variableName = $"{prefix}_{displayName.Trim().Replace(" ", "")}";

            var existingByVariableName = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_orgService, variableName, "manage_environment_variable");
            if (existingByVariableName.IsSuccess)
            {
                var existingSchemaName = existingByVariableName.Value.GetAttributeValue<string>("schemaname") ?? existingByVariableName.CanonicalName ?? existingByVariableName.Value.Id.ToString();
                return Error($"Environment variable '{variableName}' resolves to existing environment variable '{existingSchemaName}'.",
                    "Use action='update' to modify it.");
            }
            if (existingByVariableName.Status == ResolveStatus.Ambiguous || existingByVariableName.Status == ResolveStatus.Error)
                return Error(existingByVariableName.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");

            return HandleCreate(variableName, displayName, type, defaultValue, currentValue, description, solResult.UniqueName);
        }

        private CallToolResult HandleUpdateAction(string variableName, string displayName,
            string defaultValue, string currentValue, string description)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("variable_name is required for 'update'.",
                    "Use manage_environment_variable(action='list') to see all environment variables.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");

            return HandleUpdate(resolved.Definition, resolved.SchemaName, displayName, defaultValue, currentValue, description);
        }

        private CallToolResult HandleList(string solutionName, int maxRecords)
        {
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 5000) maxRecords = 5000;

            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                solutionName = solResult.UniqueName;
            }

            var fetchXml = BuildListFetchXml(solutionName, maxRecords);
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            var definitions = result.Entities;

            if (definitions.Count == 0)
            {
                var msg = string.IsNullOrWhiteSpace(solutionName)
                    ? "No environment variables found."
                    : $"No environment variables found in solution '{solutionName}'.";
                return Success(msg, new ManageEnvironmentVariableResult
                {
                    Action = "list",
                    Count = 0,
                    SolutionFilter = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName
                });
            }

            var definitionIds = definitions.Select(d => d.Id).ToList();
            var currentValues = GetCurrentValues(definitionIds);

            var items = new List<EnvironmentVariableItem>();

            foreach (var def in definitions.OrderBy(d => d.GetAttributeValue<string>("schemaname")))
            {
                var schemaName = def.GetAttributeValue<string>("schemaname") ?? "";
                var typeLbl = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
                var defaultVal = def.GetAttributeValue<string>("defaultvalue") ?? "";
                currentValues.TryGetValue(def.Id, out var currentVal);
                var curVal = currentVal ?? "";

                items.Add(new EnvironmentVariableItem
                {
                    Name = schemaName,
                    Type = typeLbl,
                    DefaultValue = string.IsNullOrEmpty(defaultVal) ? null : MaskIfSecret(typeLbl, defaultVal),
                    CurrentValue = string.IsNullOrEmpty(curVal) ? null : MaskIfSecret(typeLbl, curVal)
                });
            }

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "list",
                Count = definitions.Count,
                SolutionFilter = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName,
                Variables = items
            };

            var summary = string.IsNullOrWhiteSpace(solutionName)
                ? $"{definitions.Count} environment variable(s)."
                : $"{definitions.Count} environment variable(s) in solution '{solutionName}'.";
            return Success(summary, structured);
        }

        private CallToolResult HandleDetail(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("variable_name is required for 'detail'.",
                    "Use manage_environment_variable(action='list') to see all environment variables.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");
            var def = resolved.Definition;

            var currentValues = GetCurrentValues([def.Id]);
            currentValues.TryGetValue(def.Id, out var currentVal);

            var schemaName = def.GetAttributeValue<string>("schemaname") ?? "";
            var displayName = def.GetAttributeValue<string>("displayname") ?? "";
            var typeLbl = GetVariableTypeLabel(def.GetAttributeValue<OptionSetValue>("type"));
            var defaultVal = def.GetAttributeValue<string>("defaultvalue") ?? "";
            var description = def.GetAttributeValue<string>("description") ?? "";
            var curVal = currentVal ?? "";

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "detail",
                VariableName = schemaName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName,
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultVal) ? null : MaskIfSecret(typeLbl, defaultVal),
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : MaskIfSecret(typeLbl, curVal),
                Description = string.IsNullOrEmpty(description) ? null : description
            };

            return Success($"Environment variable '{schemaName}' ({typeLbl}).", structured);
        }

        private CallToolResult HandleCreate(string variableName, string displayName, string type,
            string defaultValue, string currentValue, string description, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return Error(
                    $"Cannot create environment variable '{variableName}'.",
                    "Required for action='create': display_name (human-readable label).");

            if (string.IsNullOrWhiteSpace(type))
                return Error(
                    $"Cannot create environment variable '{variableName}'.",
                    "Required for action='create': type. Valid values: 'string', 'number', 'boolean', 'json', 'datasource', 'secret'.");

            var typeValue = MapType(type.Trim().ToLowerInvariant());
            if (typeValue < 0)
                return Error(
                    $"Invalid type '{type}'.",
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
                return DryRun($"Would CREATE environment variable '{variableName}' (type: {GetTypeLabel(typeValue)}).", new ManageEnvironmentVariableResult
                {
                    Action = "create",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = displayName,
                    Type = GetTypeLabel(typeValue),
                    DefaultValue = MaskIfSecret(GetTypeLabel(typeValue), defaultValue),
                    CurrentValue = MaskIfSecret(GetTypeLabel(typeValue), currentValue),
                    Description = description,
                    SolutionName = solutionName,
                    CreateMode = "metadata",
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Published = false
                });

            var defId = DataverseMutationExecutor.Create(_context, _orgService, newDef);

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _orgService,
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

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "created",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(displayName) ? null : displayName.Trim(),
                Type = typeLbl,
                DefaultValue = string.IsNullOrEmpty(defaultValue) ? null : MaskIfSecret(typeLbl, defaultValue),
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : MaskIfSecret(typeLbl, curVal),
                SolutionName = string.IsNullOrEmpty(sol) ? null : sol,
                CreateMode = SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString(),
                IsAddToSolution = addResult.IsAddToSolution,
                AddToSolutionMethod = addResult.AddToSolutionMethod,
                AddToSolutionWarning = addResult.AddToSolutionWarning,
                SolutionWarning = solWarning
            };

            var summary = solWarning == null
                ? $"Created environment variable '{variableName}' ({typeLbl}) in solution '{sol}'."
                : $"Created environment variable '{variableName}' ({typeLbl}) but failed to add to solution '{sol}'.";
            return Success(summary, structured);
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

            if (!hasDefChanges && !hasValueChange)
                return Error(
                    $"Nothing to update for environment variable '{variableName}'.",
                    "Provide at least one of: display_name, default_value, value, description. Empty value never clears the current value — use action='clear' to remove it.");

            var parts = new List<string>();
            if (hasDefChanges) parts.Add("definition");
            if (hasValueChange) parts.Add("current value");
            var changeSummary = string.Join(" + ", parts);

            if (_options.DryRun)
                return DryRun($"Would UPDATE environment variable '{variableName}' ({changeSummary}).", new ManageEnvironmentVariableResult
                {
                    Action = "update",
                    Status = "not_executed",
                    VariableName = variableName,
                    DisplayName = displayName,
                    DefaultValue = MaskIfSecret(existingType, defaultValue),
                    CurrentValue = MaskIfSecret(existingType, currentValue),
                    Description = description,
                    Published = false
                });

            if (hasDefChanges)
                DataverseMutationExecutor.Update(_context, _orgService, update);

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

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "updated",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : MaskIfSecret(existingType, existingDefault),
                CurrentValue = string.IsNullOrEmpty(curVal) ? null : MaskIfSecret(existingType, curVal)
            };

            return Success($"Updated environment variable '{variableName}' ({changeSummary}).", structured);
        }

        private CallToolResult HandleClear(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("variable_name is required for 'clear'.",
                    "Use manage_environment_variable(action='list') to see all environment variables.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");
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
                    DefaultValue = MaskIfSecret(existingType, existingDefault),
                    ValueCleared = true,
                    Published = false
                });

            DeleteCurrentValue(defId);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "cleared",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType,
                DefaultValue = string.IsNullOrEmpty(existingDefault) ? null : MaskIfSecret(existingType, existingDefault),
                ValueCleared = true
            };

            return Success($"Cleared current value of environment variable '{variableName}' (reverts to default).", structured);
        }

        private CallToolResult HandleDelete(string variableName)
        {
            if (string.IsNullOrWhiteSpace(variableName))
                return Error("variable_name is required for 'delete'.",
                    "Use manage_environment_variable(action='list') to see all environment variables.");

            var resolved = ResolveDefinitionInput(variableName);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], "Use manage_environment_variable(action='list') to see all environment variables.");
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
            DataverseMutationExecutor.Delete(_context, _orgService, "environmentvariabledefinition", defId);

            var structured = new ManageEnvironmentVariableResult
            {
                Action = "deleted",
                VariableName = variableName,
                DisplayName = string.IsNullOrEmpty(existingDisplayName) ? null : existingDisplayName,
                Type = existingType
            };

            return Success($"Deleted environment variable '{variableName}'.", structured);
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

            var result = _orgService.RetrieveMultiple(query);
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

            var result = _orgService.RetrieveMultiple(query);
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

            var result = _orgService.RetrieveMultiple(query);
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

            var result = _orgService.RetrieveMultiple(query);
            if (result.Entities.Count > 0)
            {
                var existing = result.Entities[0];
                existing["value"] = value;
                DataverseMutationExecutor.Update(_context, _orgService, existing);
            }
            else
            {
                var newValue = new Entity("environmentvariablevalue")
                {
                    ["value"] = value,
                    ["environmentvariabledefinitionid"] = new EntityReference("environmentvariabledefinition", definitionId)
                };
                DataverseMutationExecutor.Create(_context, _orgService, newValue);
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

            var result = _orgService.RetrieveMultiple(query);
            if (result.Entities.Count > 0)
            {
                DataverseMutationExecutor.Delete(_context, _orgService, "environmentvariablevalue", result.Entities[0].Id);
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

        // Rule: secret-type values never appear in Content/structured output
        private static string MaskIfSecret(string typeLabel, string value) =>
            string.IsNullOrEmpty(value) || typeLabel != "Secret" ? value : "(secret)";

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
                return (null, null, "variable_name is required.");

            var resolved = DisplayNameFirstResolver.ResolveEnvironmentVariableDefinition(_orgService, trimmed, "manage_environment_variable");
            if (!resolved.IsSuccess)
                return (null, null, $"variable_name '{trimmed}': {resolved.Error}");

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
