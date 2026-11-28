using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageCommandTool
    {
        // ── Hide / Show ──────────────────────────────────────────

        private CallToolResult HandleHideShow(string commandId, string entityName, string location, string appId, string appName, string label, bool wantHidden) =>
            HandleHideShowScoped(commandId, entityName, location, appId, appName, label, wantHidden, "", "");

        private CallToolResult HandleHideShowScoped(string commandId, string entityName, string location, string appId, string appName, string label, bool wantHidden, string scope) =>
            HandleHideShowScoped(commandId, entityName, location, appId, appName, label, wantHidden, scope, "");

        private CallToolResult HandleHideShowScoped(string commandId, string entityName, string location, string appId, string appName, string label, bool wantHidden, string scope, string solutionName)
        {
            var (resolvedSolutionUniqueName, solErr) = ResolveSolutionUniqueName(solutionName);
            if (solErr != null)
                return solErr;

            if (_options.DryRun)
            {
                var action = wantHidden ? "hide" : "show";
                var dryMsg = $"Would {action} appaction command '{commandId}'." +
                    (resolvedSolutionUniqueName != null ? $" (solution={resolvedSolutionUniqueName})" : "");
                return DryRun(dryMsg, new ManageCommandResult
                {
                    Action = action,
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = $"The appaction command was not {(wantHidden ? "hidden" : "shown")}.",
                    SolutionName = resolvedSolutionUniqueName,
                    CreateMode = resolvedSolutionUniqueName != null
                        ? SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString()
                        : SolutionComponentCreateMode.None.ToString(),
                    IsAddToSolution = resolvedSolutionUniqueName != null,
                    AddToSolutionMethod = resolvedSolutionUniqueName != null ? "AddSolutionComponentRequest" : "none"
                });
            }

            var verb = wantHidden ? "hide" : "show";

            if (!string.IsNullOrWhiteSpace(scope) && !ValidScopes.Contains(scope.Trim()))
                return Error($"Invalid scope '{scope.Trim()}'.",
                    "Valid values: 'app' (default), 'table', 'global'.");

            // Path 1: command_id provided
            if (!string.IsNullOrWhiteSpace(commandId))
            {
                if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                    return Error($"'{commandId.Trim()}' is not a valid GUID.",
                        "Pass an appaction GUID. Use manage_commanding(resource='command', action='list') to find command IDs.");

                var existing = RetrieveAppActionOrNull(cmdGuid,
                    "name", "buttonlabeltext", "hidden", "context", "contextvalue",
                    "location", "origin", "appmoduleid", "sequence", "fonticon",
                    "onclickeventtype", "onclickeventjavascriptfunctionname",
                    "onclickeventjavascriptwebresourceid", "visibilitytype");
                if (existing == null)
                    return Error($"Command '{commandId.Trim()}' not found.",
                        "Use manage_commanding(resource='command', action='list') to find valid command IDs.");

                var existingContext = existing.GetAttributeValue<OptionSetValue>("context")?.Value;
                var existingContextVal = existing.GetAttributeValue<string>("contextvalue");
                var existingAppId = existing.GetAttributeValue<EntityReference>("appmoduleid")?.Id;
                var existingName = existing.GetAttributeValue<string>("name") ?? "";
                var isGlobalCommand = existingContext == 0
                    || string.IsNullOrWhiteSpace(existingContextVal)
                    || string.Equals(existingContextVal, "{!EntityLogicalName}", StringComparison.OrdinalIgnoreCase);

                if (isGlobalCommand)
                {
                    var normalizedCmdScope = string.IsNullOrWhiteSpace(scope) ? "" : scope.Trim().ToLowerInvariant();
                    var hasEntityOrAppArgs = !string.IsNullOrWhiteSpace(entityName)
                        || !string.IsNullOrWhiteSpace(appId)
                        || !string.IsNullOrWhiteSpace(appName);

                    if (normalizedCmdScope == "global")
                    {
                        if (hasEntityOrAppArgs)
                            return Error($"entity_name, app_id, and app_name must not be specified when scope='global' for action='{verb}'.",
                                "Global commands apply to all tables and all apps.");
                    }
                    else if (hasEntityOrAppArgs || normalizedCmdScope == "table" || normalizedCmdScope == "app")
                    {
                        var effectiveScope = string.IsNullOrEmpty(normalizedCmdScope) ? "app" : normalizedCmdScope;
                        if (effectiveScope == "table" && (!string.IsNullOrWhiteSpace(appId) || !string.IsNullOrWhiteSpace(appName)))
                            return Error($"app_id and app_name must not be specified when scope='table' for action='{verb}'.",
                                "Table-scoped commands apply across all apps.");
                        if (string.IsNullOrWhiteSpace(entityName))
                            return Error($"entity_name is required when hiding or showing a global command at scope='{effectiveScope}'.",
                                "Pass the entity Display Name or logical name. Use inspect_metadata(resource='tables') to list available tables.");
                        if (effectiveScope == "app" && wantHidden && string.IsNullOrWhiteSpace(appId) && string.IsNullOrWhiteSpace(appName))
                            return Error("app_id or app_name is required for action='hide'.",
                                "Multiple apps may exist — specify which app to apply the hide override to, or pass scope='table' to hide across all apps.");

                        int cmdLocValue;
                        if (!string.IsNullOrWhiteSpace(location))
                        {
                            if (!LocationFilterMap.TryGetValue(location.Trim(), out cmdLocValue))
                                return Error($"Invalid location '{location.Trim()}'.",
                                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
                        }
                        else
                        {
                            cmdLocValue = existing.GetAttributeValue<OptionSetValue>("location")?.Value ?? 0;
                        }

                        var (targetEntityLogical, targetEntityErr) = ResolveEntityLogicalName(entityName);
                        if (targetEntityErr != null)
                            return Error(targetEntityErr.Split("\r\n")[0],
                                "Use inspect_metadata(resource='tables') to list available tables.");

                        var existingLabel = existing.GetAttributeValue<string>("buttonlabeltext");
                        var effectiveLabel = !string.IsNullOrWhiteSpace(label)
                            ? label.Trim()
                            : (!string.IsNullOrWhiteSpace(existingLabel) ? existingLabel.Trim() : ExtractLabelFromCommandName(existingName));

                        return ExecuteEntityScopedHideShow(
                            effectiveLabel,
                            targetEntityLogical,
                            cmdLocValue,
                            effectiveScope,
                            appId,
                            appName,
                            wantHidden,
                            oobTemplateOverride: existing,
                            overrideCommandName: NullIfEmpty(existingName),
                            solutionName: solutionName);
                    }
                    else if (existingName.Contains("{!EntityLogicalName}", StringComparison.OrdinalIgnoreCase))
                    {
                        return Error(
                            $"Command '{existingName}' is a global OOB command (context=All). Hiding or showing it directly would affect all tables in the organization.",
                            "Pass entity_name with scope='table' (or scope='app' with app_id/app_name) to create a table/app override, or pass scope='global' to explicitly modify the global command.");
                    }
                }

                if (!wantHidden && IsOobOverrideCommand(existing))
                {
                    var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
                    DataverseMutationExecutor.Delete(_context, _orgService, "appaction", cmdGuid);
                    var pubNote = PublishCommandTarget(existingContextVal, existingAppId);

                    var deletedMsg = $"OOB command override '{commandName}' deleted. {pubNote}";
                    var deletedResult = new ManageCommandResult { Action = verb, Status = "success", CommandId = commandId.Trim(), Message = deletedMsg };
                    return Success(deletedMsg, deletedResult);
                }

                var alreadyHidden = existing.GetAttributeValue<bool?>("hidden") ?? false;
                if (alreadyHidden == wantHidden)
                {
                    var noopSolResult = wantHidden ? AddCommandToSolution(cmdGuid, resolvedSolutionUniqueName) : null;
                    var state = wantHidden ? "already hidden" : "already visible";
                    var msg = $"Command '{existing.GetAttributeValue<string>("name") ?? commandId.Trim()}' is {state}. No change needed." +
                        (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, noopSolResult) : "");
                    var noopResult = new ManageCommandResult
                    {
                        Action = verb,
                        Status = "success",
                        CommandId = commandId.Trim(),
                        Message = msg,
                        SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                        IsAddToSolution = noopSolResult?.IsAddToSolution ?? false,
                        AddToSolutionMethod = noopSolResult?.AddToSolutionMethod ?? "none",
                        AddToSolutionWarning = noopSolResult?.AddToSolutionWarning
                    };
                    return Success(msg, noopResult);
                }

                var update = new Entity("appaction", cmdGuid);
                update["hidden"] = wantHidden;
                DataverseMutationExecutor.Update(_context, _orgService, update);
                var cmdSolResult = wantHidden ? AddCommandToSolution(cmdGuid, resolvedSolutionUniqueName) : null;
                var publishNote = PublishCommandTarget(isGlobalCommand ? null : existingContextVal, existingAppId);

                var doneMsg = $"Command '{existing.GetAttributeValue<string>("name") ?? commandId.Trim()}' is now {(wantHidden ? "hidden" : "visible")}. {publishNote}" +
                    (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, cmdSolResult) : "");
                var doneResult = new ManageCommandResult
                {
                    Action = verb,
                    Status = "success",
                    CommandId = commandId.Trim(),
                    Message = doneMsg,
                    SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                    IsAddToSolution = cmdSolResult?.IsAddToSolution ?? false,
                    AddToSolutionMethod = cmdSolResult?.AddToSolutionMethod ?? "none",
                    AddToSolutionWarning = cmdSolResult?.AddToSolutionWarning
                };
                return Success(doneMsg, doneResult);
            }

            var normalizedScope = string.IsNullOrWhiteSpace(scope) ? "app" : scope.Trim().ToLowerInvariant();

            if (normalizedScope == "global")
            {
                if (string.IsNullOrWhiteSpace(label))
                    return Error($"Provide command_id OR (label + location) for action='{verb}' with scope='global'.",
                        "Pass command_id (appaction GUID), or label together with location.");
                if (!string.IsNullOrWhiteSpace(entityName) || !string.IsNullOrWhiteSpace(appId) || !string.IsNullOrWhiteSpace(appName))
                    return Error($"entity_name, app_id, and app_name must not be specified when scope='global' for action='{verb}'.",
                        "Global commands apply to all tables and all apps.");
                if (string.IsNullOrWhiteSpace(location))
                    return Error($"location is required when using label lookup for action='{verb}'.",
                        "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
                if (!LocationFilterMap.TryGetValue(location.Trim(), out var globalLocValue))
                    return Error($"Invalid location '{location.Trim()}'.",
                        "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

                var globalFound = FindCommandByLabelScoped(label.Trim(), null, globalLocValue, "global");
                if (globalFound == null)
                    return Error($"Global command '{label.Trim()}' not found at location '{LocationMap[globalLocValue]}'.",
                        "Use manage_commanding(resource='command', action='list', scope='global') to find existing global commands.");

                var globalAlreadyHidden = globalFound.GetAttributeValue<bool?>("hidden") ?? false;
                if (globalAlreadyHidden == wantHidden)
                {
                    var globalNoopSol = wantHidden ? AddCommandToSolution(globalFound.Id, resolvedSolutionUniqueName) : null;
                    var state = wantHidden ? "already hidden" : "already visible";
                    var msg = $"Command '{label.Trim()}' is {state}. No change needed." +
                        (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, globalNoopSol) : "");
                    return Success(msg, new ManageCommandResult
                    {
                        Action = verb,
                        Status = "success",
                        CommandId = globalFound.Id.ToString(),
                        Message = msg,
                        SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                        IsAddToSolution = globalNoopSol?.IsAddToSolution ?? false,
                        AddToSolutionMethod = globalNoopSol?.AddToSolutionMethod ?? "none",
                        AddToSolutionWarning = globalNoopSol?.AddToSolutionWarning
                    });
                }

                var globalUpdate = new Entity("appaction", globalFound.Id) { ["hidden"] = wantHidden };
                DataverseMutationExecutor.Update(_context, _orgService, globalUpdate);
                var globalSolResult = wantHidden ? AddCommandToSolution(globalFound.Id, resolvedSolutionUniqueName) : null;
                var globalPubNote = PublishCommandTarget(null);
                var globalDoneMsg = $"Command '{label.Trim()}' is now {(wantHidden ? "hidden" : "visible")}. {globalPubNote}" +
                    (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, globalSolResult) : "");
                return Success(globalDoneMsg, new ManageCommandResult
                {
                    Action = verb,
                    Status = "success",
                    CommandId = globalFound.Id.ToString(),
                    Message = globalDoneMsg,
                    SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                    IsAddToSolution = globalSolResult?.IsAddToSolution ?? false,
                    AddToSolutionMethod = globalSolResult?.AddToSolutionMethod ?? "none",
                    AddToSolutionWarning = globalSolResult?.AddToSolutionWarning
                });
            }

            if (normalizedScope == "table")
            {
                if (string.IsNullOrWhiteSpace(label))
                    return Error($"Provide command_id OR (label + entity_name + location) for action='{verb}' with scope='table'.",
                        "Pass command_id (appaction GUID), or label together with entity_name and location.");
                if (!string.IsNullOrWhiteSpace(appId) || !string.IsNullOrWhiteSpace(appName))
                    return Error($"app_id and app_name must not be specified when scope='table' for action='{verb}'.",
                        "Table-scoped commands apply across all apps.");
                if (string.IsNullOrWhiteSpace(entityName))
                    return Error($"entity_name is required when using label lookup for action='{verb}'.",
                        "Pass the entity Display Name or logical name. Use inspect_metadata(resource='tables') to list available tables.");
                if (string.IsNullOrWhiteSpace(location))
                    return Error($"location is required when using label lookup for action='{verb}'.",
                        "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
                if (!LocationFilterMap.TryGetValue(location.Trim(), out var tableLocValue))
                    return Error($"Invalid location '{location.Trim()}'.",
                        "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

                var (tableEntityLogical, tableEntityErr) = ResolveEntityLogicalName(entityName);
                if (tableEntityErr != null)
                    return Error(tableEntityErr.Split("\r\n")[0],
                        "Use inspect_metadata(resource='tables') to list available tables.");

                return ExecuteEntityScopedHideShow(label.Trim(), tableEntityLogical, tableLocValue, "table", appId, appName, wantHidden, solutionName: solutionName);
            }

            // Path 2: lookup by label + entity + location (scope = 'app' default)
            if (string.IsNullOrWhiteSpace(label))
                return Error($"Provide command_id OR (label + entity_name + location) for action='{verb}'.",
                    "Pass command_id (appaction GUID), or label together with entity_name and location for fuzzy lookup.");
            if (string.IsNullOrWhiteSpace(entityName))
                return Error($"entity_name is required when using label lookup for action='{verb}'.",
                    "Pass the entity Display Name or logical name. Use inspect_metadata(resource='tables') to list available tables.");
            if (string.IsNullOrWhiteSpace(location))
                return Error($"location is required when using label lookup for action='{verb}'.",
                    "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
            if (wantHidden && string.IsNullOrWhiteSpace(appId) && string.IsNullOrWhiteSpace(appName))
                return Error("app_id or app_name is required for action='hide'.",
                    "Multiple apps may exist — specify which app to apply the hide override to. Use manage_ui(resource='app', action='list') to discover apps.");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return Error($"Invalid location '{location.Trim()}'.",
                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

            var (resolvedEntityName, entityError) = ResolveEntityLogicalName(entityName);
            if (entityError != null)
                return Error(entityError.Split("\r\n")[0],
                    "Use inspect_metadata(resource='tables') to list available tables.");

            return ExecuteEntityScopedHideShow(label.Trim(), resolvedEntityName, locationValue, "app", appId, appName, wantHidden, solutionName: solutionName);
        }

        private CallToolResult ExecuteEntityScopedHideShow(
            string trimmedLabel,
            string entityLogical,
            int locationValue,
            string normalizedScope,
            string appId,
            string appName,
            bool wantHidden,
            Entity oobTemplateOverride = null,
            string overrideCommandName = null,
            string solutionName = null)
        {
            var (resolvedSolutionUniqueName, solErr) = ResolveSolutionUniqueName(solutionName);
            if (solErr != null)
                return solErr;

            var verb = wantHidden ? "hide" : "show";
            var found = normalizedScope == "table"
                ? FindCommandByLabelScoped(trimmedLabel, entityLogical, locationValue, "table")
                : FindCommandByLabel(trimmedLabel, entityLogical, locationValue);

            if (found != null)
            {
                if (!wantHidden && IsOobOverrideCommand(found))
                {
                    var commandName = found.GetAttributeValue<string>("name") ?? trimmedLabel;
                    var rawContext = found.GetAttributeValue<string>("contextvalue");
                    var contextValue = !string.IsNullOrWhiteSpace(rawContext) ? rawContext : entityLogical;
                    DataverseMutationExecutor.Delete(_context, _orgService, "appaction", found.Id);
                    PublishHelper.PublishEntity(_context, _orgService, contextValue.Trim().ToLowerInvariant());

                    var deletedMsg2 = $"OOB command override '{commandName}' deleted. Entity published.";
                    var deletedResult2 = new ManageCommandResult { Action = verb, Status = "success", CommandId = found.Id.ToString(), Message = deletedMsg2 };
                    return Success(deletedMsg2, deletedResult2);
                }

                var alreadyHidden = found.GetAttributeValue<bool?>("hidden") ?? false;
                if (alreadyHidden == wantHidden)
                {
                    var noopSol = wantHidden ? AddCommandToSolution(found.Id, resolvedSolutionUniqueName) : null;
                    var state = wantHidden ? "already hidden" : "already visible";
                    var msg2 = $"Command '{trimmedLabel}' is {state}. No change needed." +
                        (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, noopSol) : "");
                    var noopResult2 = new ManageCommandResult
                    {
                        Action = verb,
                        Status = "success",
                        CommandId = found.Id.ToString(),
                        Message = msg2,
                        SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                        IsAddToSolution = noopSol?.IsAddToSolution ?? false,
                        AddToSolutionMethod = noopSol?.AddToSolutionMethod ?? "none",
                        AddToSolutionWarning = noopSol?.AddToSolutionWarning
                    };
                    return Success(msg2, noopResult2);
                }

                var update2 = new Entity("appaction", found.Id);
                update2["hidden"] = wantHidden;
                DataverseMutationExecutor.Update(_context, _orgService, update2);
                var existingSol = wantHidden ? AddCommandToSolution(found.Id, resolvedSolutionUniqueName) : null;
                var rawPublish = found.GetAttributeValue<string>("contextvalue");
                var publishEntity = !string.IsNullOrWhiteSpace(rawPublish) ? rawPublish : entityLogical;
                PublishHelper.PublishEntity(_context, _orgService, publishEntity.Trim().ToLowerInvariant());

                var doneMsg2 = $"Command '{trimmedLabel}' is now {(wantHidden ? "hidden" : "visible")}. Entity published." +
                    (wantHidden ? FormatSolutionSuffix(resolvedSolutionUniqueName, existingSol) : "");
                var doneResult2 = new ManageCommandResult
                {
                    Action = verb,
                    Status = "success",
                    CommandId = found.Id.ToString(),
                    Message = doneMsg2,
                    SolutionName = wantHidden ? resolvedSolutionUniqueName : null,
                    IsAddToSolution = existingSol?.IsAddToSolution ?? false,
                    AddToSolutionMethod = existingSol?.AddToSolutionMethod ?? "none",
                    AddToSolutionWarning = existingSol?.AddToSolutionWarning
                };
                return Success(doneMsg2, doneResult2);
            }

            // No appaction record exists yet
            if (!wantHidden)
            {
                // show: OOB button with no override record is visible by default — nothing to do
                var noRecordMsg = $"Command '{trimmedLabel}' has no appaction override record. OOB buttons are visible by default — no action needed.";
                var noRecordResult = new ManageCommandResult { Action = verb, Status = "success", Message = noRecordMsg };
                return Success(noRecordMsg, noRecordResult);
            }

            // Block if this label belongs to a custom classic ribbon button
            if (IsClassicRibbonButton(trimmedLabel, entityLogical))
                return Error($"'{trimmedLabel}' is a classic ribbon button defined via manage_commanding(resource='ribbon') and cannot be hidden using manage_commanding(resource='command').",
                    "Use manage_commanding(resource='ribbon') to hide it instead.");

            Guid? resolvedAppId = null;
            if (normalizedScope == "app")
            {
                resolvedAppId = ResolveAppId(appId, appName, out var appResolveError2);
                if (resolvedAppId == null)
                    return Error((appResolveError2 ?? "Could not resolve app.").Split("\r\n")[0],
                        "Pass app_id (app module GUID) or app_name. Use manage_ui(resource='app', action='list') to discover apps.");
            }

            var oobNamePrefix = LocationOobNamePrefix(locationValue);
            var safeLabel = trimmedLabel.Replace(" ", "");
            var overrideName = !string.IsNullOrWhiteSpace(overrideCommandName)
                ? overrideCommandName
                : $"Mscrm.{oobNamePrefix}.{{!EntityLogicalName}}.{safeLabel}";
            var appUniqueName = resolvedAppId.HasValue ? ResolveAppUniqueName(resolvedAppId.Value) : "global";
            var publisherPrefix = ResolvePublisherPrefix(entityLogical);
            _ = ResolveEntitySchemaName(entityLogical);
            var uniqueName = $"{publisherPrefix}__{overrideName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var contextEntityId = ResolveEntityId(entityLogical);

            // Look up OOB template to copy fonticon, sequence, onclickeventtype, etc.
            var oobTemplate = oobTemplateOverride ?? FindOobTemplate(overrideName, locationValue);

            var newEntity = new Entity("appaction");
            newEntity["name"] = overrideName;
            newEntity["uniquename"] = uniqueName;
            newEntity["context"] = new OptionSetValue(1); // Entity
            newEntity["contextvalue"] = entityLogical;
            if (contextEntityId.HasValue)
                newEntity["contextentity"] = new EntityReference("entity", contextEntityId.Value);
            newEntity["location"] = new OptionSetValue(locationValue);
            newEntity["buttonlabeltext"] = trimmedLabel;
            newEntity["type"] = new OptionSetValue(0); // Standard Button
            newEntity["hidden"] = true;
            newEntity["origin"] = new OptionSetValue(2); // Enhanced Migrated — required for designer to show Hide option
            if (resolvedAppId.HasValue)
                newEntity["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);

            if (oobTemplate != null)
            {
                // Copy sequence from OOB template
                newEntity["sequence"] = oobTemplate.GetAttributeValue<decimal?>("sequence") ?? (decimal)100;

                // Copy fonticon (may be null — that is correct)
                var fontIconVal = oobTemplate.GetAttributeValue<string>("fonticon");
                if (!string.IsNullOrEmpty(fontIconVal))
                    newEntity["fonticon"] = fontIconVal;

                // Copy onclickeventtype
                var onClickType = oobTemplate.GetAttributeValue<OptionSetValue>("onclickeventtype");
                if (onClickType != null)
                    newEntity["onclickeventtype"] = new OptionSetValue(onClickType.Value);

                // Copy JS function name if present
                var jsFuncName = oobTemplate.GetAttributeValue<string>("onclickeventjavascriptfunctionname");
                if (!string.IsNullOrEmpty(jsFuncName))
                    newEntity["onclickeventjavascriptfunctionname"] = jsFuncName;

                // Copy JS webresource if present
                var jsWrRef = oobTemplate.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid");
                if (jsWrRef != null)
                    newEntity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", jsWrRef.Id);

                // Copy visibilitytype
                var visType = oobTemplate.GetAttributeValue<OptionSetValue>("visibilitytype");
                if (visType != null)
                    newEntity["visibilitytype"] = new OptionSetValue(visType.Value);
            }
            else
            {
                newEntity["sequence"] = (decimal)100;
            }

            var newId = DataverseMutationExecutor.Create(_context, _orgService, newEntity);

            var addResult = AddCommandToSolution(newId, resolvedSolutionUniqueName);

            PublishHelper.PublishEntity(_context, _orgService, entityLogical.Trim().ToLowerInvariant());

            var createdMsg = $"Created appaction override: command '{trimmedLabel}' on {entityLogical} ({LocationMap[locationValue]}) is now hidden. Entity published.";
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
            {
                createdMsg += (addResult?.IsAddToSolution == true)
                    ? $" Added to solution '{resolvedSolutionUniqueName}'."
                    : $" Not added to solution '{resolvedSolutionUniqueName}' (see addToSolutionWarning).";
            }

            var createdResult = new ManageCommandResult
            {
                Action = verb,
                Status = "success",
                CommandId = newId.ToString(),
                Message = createdMsg,
                SolutionName = resolvedSolutionUniqueName,
                CreateMode = resolvedSolutionUniqueName != null
                    ? SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString()
                    : SolutionComponentCreateMode.None.ToString(),
                IsAddToSolution = addResult?.IsAddToSolution ?? false,
                AddToSolutionMethod = addResult?.AddToSolutionMethod ?? "none",
                AddToSolutionWarning = addResult?.AddToSolutionWarning
            };
            return Success(createdMsg, createdResult);
        }

        private static string ExtractLabelFromCommandName(string commandName)
        {
            if (string.IsNullOrWhiteSpace(commandName))
                return "Command";
            var lastDot = commandName.LastIndexOf('.');
            return lastDot >= 0 && lastDot < commandName.Length - 1
                ? commandName.Substring(lastDot + 1)
                : commandName;
        }

        private Entity FindCommandByLabel(string label, string entityName, int locationValue)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='hidden'/>
    <attribute name='contextvalue'/>
    <attribute name='origin'/>
    <filter type='and'>
      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName)}'/>
      <condition attribute='location' operator='eq' value='{locationValue}'/>
      <condition attribute='buttonlabeltext' operator='eq' value='{EscapeXml(label)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private Entity FindCommandByLabelScoped(string label, string entityName, int locationValue, string normalizedScope)
        {
            var scopeConditions = normalizedScope == "global"
                ? "      <condition attribute='context' operator='eq' value='0'/>\n      <condition attribute='appmoduleid' operator='null'/>"
                : $"      <condition attribute='context' operator='eq' value='1'/>\n      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName)}'/>\n      <condition attribute='appmoduleid' operator='null'/>";

            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='hidden'/>
    <attribute name='contextvalue'/>
    <attribute name='origin'/>
    <filter type='and'>
{scopeConditions}
      <condition attribute='location' operator='eq' value='{locationValue}'/>
      <condition attribute='buttonlabeltext' operator='eq' value='{EscapeXml(label)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private static bool IsOobOverrideCommand(Entity command)
        {
            var origin = command.GetAttributeValue<OptionSetValue>("origin")?.Value;
            var name = command.GetAttributeValue<string>("name") ?? "";

            return origin == 2
                && name.StartsWith("Mscrm.", StringComparison.OrdinalIgnoreCase)
                && name.Contains("{!EntityLogicalName}", StringComparison.OrdinalIgnoreCase);
        }

        private Entity FindOobTemplate(string buttonName, int locationValue)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='sequence'/>
    <attribute name='fonticon'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='onclickeventjavascriptwebresourceid'/>
    <attribute name='visibilitytype'/>
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{EscapeXml(buttonName)}'/>
      <condition attribute='location' operator='eq' value='{locationValue}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private bool IsClassicRibbonButton(string label, string entityName)
        {
            // Custom ribbon buttons are always in the devkit_ribbon solution.
            // If devkit_ribbon does not exist on the org, there are no devkit_ribbon classic buttons.
            var solutionZip = TryExportDevKitRibbonSolution();
            if (solutionZip == null || solutionZip.Length == 0) return false;

            var ribbonXml = ExtractRibbonDiffXmlForEntity(solutionZip, entityName);
            if (string.IsNullOrWhiteSpace(ribbonXml)) return false;

            var doc = XDocument.Parse(ribbonXml);
            // LocLabels: <LocLabel Id="..."><Titles><Title description="label text" languagecode="1033"/></Titles></LocLabel>
            return doc.Descendants("Title").Any(t =>
                string.Equals(t.Attribute("description")?.Value, label, StringComparison.OrdinalIgnoreCase));
        }

        private static string ExtractRibbonDiffXmlForEntity(byte[] zipBytes, string entityName)
        {
            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);
            var entry = archive.Entries.FirstOrDefault(e =>
                e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));
            if (entry == null) return null;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);
            var entityNode = doc.Descendants("Entity").FirstOrDefault(e =>
            {
                var nameEl = e.Element("Name");
                return nameEl != null && string.Equals(nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
            });
            return entityNode?.Element("RibbonDiffXml")?.ToString();
        }

        private static string LocationOobNamePrefix(int locationValue) => locationValue switch
        {
            0 => "Form",
            1 => "HomepageGrid",
            2 => "SubGrid",
            3 => "SubGrid",  // Associated Grid uses same SubGrid prefix in OOB naming
            4 => "QuickForm",
            5 => "GlobalHeader",
            6 => "Dashboard",
            _ => "Form"
        };

        private string ResolveAppUniqueName(Guid appModuleId)
        {
            var result = _orgService.Retrieve("appmodule", appModuleId, new ColumnSet("uniquename"));
            return result?.GetAttributeValue<string>("uniquename") ?? appModuleId.ToString("N");
        }

        private string ResolvePublisherPrefix(string entityLogicalName)
        {
            if (string.IsNullOrWhiteSpace(entityLogicalName))
                return "devkit";
            // Entity logical name starts with publisher prefix, e.g. "v4_mcp" → "v4"
            var idx = entityLogicalName.IndexOf('_');
            return idx > 0 ? entityLogicalName.Substring(0, idx) : entityLogicalName;
        }

        private (string LogicalName, string Error) ResolveEntityLogicalName(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return (null, "entity_name is required.");

            var result = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_commanding(resource='command')");
            return result.IsSuccess
                ? (result.Value.LogicalName, null)
                : (null, $"entity_name '{entityName.Trim()}': {result.Error}");
        }

        private Guid? ResolveEntityId(string entityLogicalName)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='entity'>
    <attribute name='entityid'/>
    <filter>
      <condition attribute='logicalname' operator='eq' value='{EscapeXml(entityLogicalName)}'/>
    </filter>
  </entity>
</fetch>";
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].Id : (Guid?)null;
        }

        private string ResolveEntitySchemaName(string entityLogicalName)
        {
            var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity
            };
            var response = (Microsoft.Xrm.Sdk.Messages.RetrieveEntityResponse)_orgService.Execute(request);
            return response?.EntityMetadata?.SchemaName ?? entityLogicalName;
        }
    }
}
