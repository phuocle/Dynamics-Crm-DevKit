using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRibbonTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;
        private const string SOLUTION_NAME = "devkit_ribbon";
        private const string SOLUTION_DISPLAY_NAME = "DEVKIT_RIBBON";
        private static readonly List<int> PublishPollScheduleSeconds = new() { 30, 60, 120 };
        private const int PublishMaxPollAttempts = 3;
        private const int PublishMaxWaitSeconds = 210;
        private const string PublishWaitTimeoutAction = "stop_without_readback";
        private const string PublishWaitTimeoutInstruction =
            "After the third get_system_jobs poll, if the PublishAll system job is not Succeeded or no result is returned, stop waiting, do not call manage_ribbon(buttons/detail), and report the ribbon result to the user with a note that Dataverse publish is still running or did not complete successfully and the user must wait/check the job.";

        public ManageRibbonTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            // Keep null service construction usable for argument-validation tests;
            // any Dataverse action still fails safely when it reaches the service.
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_ribbon", Title = "Manage classic Dataverse ribbon buttons and customizations",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRibbonResult)),
        Description(
            "Classic/legacy RibbonDiffXml for Dataverse entities (via solution import).\n\n" +

            "TOOL SELECTION: Use for Dataverse ribbon/button customization: 'ribbon', 'legacy', 'classic', 'button', 'nút', 'custom button', 'action button', 'UI button', 'JavaScript button', 'sub_grid button', 'homepage grid button', or generic button requests. This MCP server exposes classic RibbonDiffXml operations only. For modern Power Fx command bar customization, use Power Apps command designer outside this MCP server.\n\n" +

            "Actions:\n" +
            "- list: entities with ribbon customizations in solution 'devkit-ribbon'\n" +
            "- buttons: all OOB+custom buttons across form/main_grid/sub_grid (entity_name)\n" +
            "- detail: current RibbonDiffXml (entity_name)\n" +
            "- update: apply operations. Required: entity_name + operations. Auto: validate → fetch existing → apply → validate XSD → backup → import → start PublishAll async\n" +
            "- undo: restore (entity_name + ribbonxml backup path)\n\n" +

            "SUPPORTED OPERATIONS (10): add_button, update_button, hide_button, show_button, " +
            "add_split_button, update_split_button, add_flyout_static, update_flyout_static, " +
            "hide_flyout_item, show_flyout_item\n\n" +

            "add_button REQUIRED: surface, label, library, function, enable_library, enable_function. OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85), selection_min, selection_max. Selection count is off by default; for main_grid/sub_grid only, use selection_min=1 for one-or-more selected rows or selection_min=1+selection_max=1 for exactly one row.\n" +
            "update_button REQUIRED: button_id OR label. OPTIONAL: label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence. NOTE: only works on custom buttons\n" +
            "hide_button / show_button REQUIRED: button_id. Supports OOB and custom\n" +
            "add_split_button REQUIRED: surface, label, library, function, enable_library, enable_function, items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
            "update_split_button REQUIRED: split_button_id OR label. items[]: item_label REQUIRED\n" +
            "add_flyout_static REQUIRED: surface, label, items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
            "update_flyout_static REQUIRED: flyout_id OR label. items[]: item_label REQUIRED\n" +
            "hide_flyout_item / show_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n\n" +

            "WORKFLOW: manage_ribbon(action='update', entity_name=..., operations=[...]). Auto-backup; failure blocks update. Ribbon needs PublishAll (entity-scoped publish doesn't work). Starts PublishAll async after update and returns needsWait=true with asyncOperationId. Wait with get_system_jobs before readback or the next prompt. Poll exactly 3 times using pollScheduleSeconds: 30 seconds, then 60 seconds, then 120 seconds. If the third poll does not report Succeeded or no system-job result is returned, stop waiting, do not call manage_ribbon(buttons/detail), and report the ribbon result to the user with a note that Dataverse publish is still running or did not complete successfully and the user must wait/check the job.\n\n" +

            "WHEN TO USE:\n" +
            "- Inspect existing ribbon (list/buttons/detail) before editing\n" +
            "- Add/update/hide/show ribbon buttons via operations array (action=update)\n" +
            "- Restore from backup (action=undo)\n" +
            "NAME RESOLUTION: entity_name and operation web resource fields (library, enable_library, modern_image) resolve Display Name contains first, then logical/unique/schema contains.\n" +
            "The AI should pass its current workspace directory to workspace_folder to ensure backups are saved to the user's project.\n" +
            "- Modern Power Fx command bar customization is not exposed by this MCP server")]
        public CallToolResult manage_ribbon(
            [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name. Required: detail/update/undo/buttons.")] string entity_name = "",
            [Description("JSON array of ribbon operations for action='update'. Operations: add_button, update_button, hide_button, show_button, add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item. add_button optional fields include selection_min and selection_max for main_grid/sub_grid SelectionCountRule; omit both to disable selection count, selection_min=1 means one or more rows, selection_min=1 + selection_max=1 means exactly one row.")] string operations = "",
            [Description("For 'undo': backup file path.")] string ribbonxml = "",
            [Description("Backup before overwrite.")] bool backup = true,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;
            var actionName = (action ?? "").Trim().ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(actionName))
                return ErrorResult("Error: action is required. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return ListEntitiesWithRibbon();

                    case "buttons":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='buttons'.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return ErrorResult(entityError);
                            var busy = TryBlockRibbonReadbackWhenBusy("buttons", entityName);
                            return busy ?? ListRibbonButtons(entityName);
                        }

                    case "detail":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='detail'.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return ErrorResult(entityError);
                            var busy = TryBlockRibbonReadbackWhenBusy("detail", entityName);
                            return busy ?? DetailRibbon(entityName);
                        }

                    case "update":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='update'.");
                        var (updateEntityName, updateEntityError) = ResolveEntityLogicalName(entity_name);
                        if (updateEntityError != null)
                            return ErrorResult(updateEntityError);
                        var updateBusy = TryBlockRibbonActionWhenBusy("update", updateEntityName, isReadback: false);
                        if (updateBusy != null) return updateBusy;

                        if (_options.DryRun)
                            return DryRun($"Would UPDATE ribbon for entity '{updateEntityName}'.",
                                new ManageRibbonResult { Action = "update", EntityName = updateEntityName, Status = "not_executed", Published = false });

                        if (!string.IsNullOrWhiteSpace(operations))
                            return UpdateRibbonFromOperations(
                                updateEntityName,
                                operations.Trim(),
                                backup);

                        if (!string.IsNullOrWhiteSpace(ribbonxml))
                            return UpdateRibbon(updateEntityName, ribbonxml.Trim(), backup);

                        return ErrorResult(
                            "Error: 'operations' is required for action='update'.\n" +
                            "Provide a JSON array of ribbon operations, e.g. " +
                            "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");

                    case "undo":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='undo'.");
                        if (string.IsNullOrWhiteSpace(ribbonxml))
                            return ErrorResult(
                                "Error: ribbonxml is required for action='undo'.\n" +
                                "Provide backup file path from .devkit/backups/ribbons/.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return ErrorResult(entityError);
                            var undoBusy = TryBlockRibbonActionWhenBusy("undo", entityName, isReadback: false);
                            if (_options.DryRun)
                                return DryRun($"Would RESTORE ribbon for entity '{entityName}' from backup.",
                                    new ManageRibbonResult { Action = "undo", EntityName = entityName, Status = "not_executed", Published = false });
                            return undoBusy ?? UndoRibbon(entityName, ribbonxml.Trim());
                        }

                    default:
                        return ErrorResult($"Error: Invalid action '{action}'. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");
                }
            }
            catch (System.ServiceModel.FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault> fex)
            {
                var fault = fex.Detail;
                var errorDetail = fault != null
                    ? $"{fault.Message} (ErrorCode: 0x{fault.ErrorCode:X8})"
                    : fex.Message;
                if (fault?.InnerFault != null)
                    errorDetail += $" → InnerFault: {fault.InnerFault.Message}";
                return ErrorResult($"[Error] Ribbon {actionName} failed\nEntity: {entity_name}\nMessage: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;
                return ErrorResult($"[Error] Ribbon {actionName} failed\nEntity: {entity_name}\nMessage: {errorDetail}");
            }
        }

        // ── Action: list ─────────────────────────────────────────────────

        private (string LogicalName, string Error) ResolveEntityLogicalName(string entityName)
        {
            var result = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName.Trim(), "manage_ribbon");
            return result.IsSuccess
                ? (result.Value.LogicalName, null)
                : (null, $"Error: entity_name '{entityName.Trim()}': {result.Error}");
        }

        private CallToolResult TryBlockRibbonReadbackWhenBusy(string action, string entityName)
            => TryBlockRibbonActionWhenBusy(action, entityName, isReadback: true);

        private CallToolResult TryBlockRibbonActionWhenBusy(string action, string entityName, bool isReadback)
        {
            try
            {
                var activeJob = FindActiveSolutionJob();
                if (activeJob == null)
                    return null;

                var jobId = activeJob.Id.ToString();
                var operationType = GetRibbonJobOperationType(activeJob);
                var status = MapAsyncStatus(activeJob.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 0);
                var name = activeJob.GetAttributeValue<string>("name") ?? operationType;
                var startedOn = activeJob.GetAttributeValue<DateTime?>("startedon")?.ToString("yyyy-MM-dd HH:mm:ss") ?? "";

                var sb = new StringBuilder();
                sb.AppendLine($"[ManageRibbon] {action} — {entityName}");
                sb.AppendLine("Status: environment_busy");
                sb.AppendLine($"ActiveJob: {name}");
                sb.AppendLine($"OperationType: {operationType}");
                sb.AppendLine($"JobStatus: {status}");
                if (!string.IsNullOrWhiteSpace(startedOn))
                    sb.AppendLine($"StartedOn: {startedOn}");
                sb.AppendLine($"AsyncOperationId: {jobId}");
                sb.AppendLine(isReadback
                    ? "Ribbon readback is blocked because a solution import/export or PublishAll job is still active."
                    : "Ribbon update/undo is blocked because a solution import/export or PublishAll job is still active.");
                sb.AppendLine($"Wait first: get_system_jobs(record_id=\"{jobId}\")");
                AppendPublishWaitGuidance(sb);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                    {
                        Action = action,
                        EntityName = entityName,
                        Status = "environment_busy",
                        Published = false,
                        AsyncOperationId = jobId,
                        NeedsWait = true,
                        WaitTool = "get_system_jobs",
                        PollAfterSeconds = 30,
                        PollScheduleSeconds = NewPublishPollScheduleSeconds(),
                        MaxPollAttempts = PublishMaxPollAttempts,
                        MaxWaitSeconds = PublishMaxWaitSeconds,
                        ReadbackAllowed = false,
                        NextAllowedActions = new List<string> { "get_system_jobs" },
                        WaitReason = isReadback
                            ? $"Active {operationType} system job is {status}; wait before ribbon readback."
                            : $"Active {operationType} system job is {status}; wait before another ribbon update or undo.",
                        WaitTimeoutAction = PublishWaitTimeoutAction,
                        WaitTimeoutInstruction = PublishWaitTimeoutInstruction
                    })
                };
            }
            catch
            {
                return null;
            }
        }

        private Entity FindActiveSolutionJob()
        {
            var query = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("asyncoperationid", "name", "operationtype", "statuscode", "startedon", "messagename"),
                TopCount = 1,
                Criteria = new FilterExpression(LogicalOperator.And)
            };

            var solutionJobFilter = new FilterExpression(LogicalOperator.Or);
            solutionJobFilter.AddCondition("operationtype", ConditionOperator.In, 202, 203, 204);

            var publishAllAsyncFilter = new FilterExpression(LogicalOperator.And);
            publishAllAsyncFilter.AddCondition("operationtype", ConditionOperator.Equal, 54);
            var publishAllNameFilter = new FilterExpression(LogicalOperator.Or);
            publishAllNameFilter.AddCondition("messagename", ConditionOperator.Equal, "PublishAllAsync");
            publishAllNameFilter.AddCondition("name", ConditionOperator.Like, "%PublishAll%");
            publishAllAsyncFilter.Filters.Add(publishAllNameFilter);
            solutionJobFilter.Filters.Add(publishAllAsyncFilter);

            query.Criteria.Filters.Add(solutionJobFilter);
            query.Criteria.AddCondition("statuscode", ConditionOperator.In, 0, 10, 20, 21, 22);
            query.Criteria.AddCondition("startedon", ConditionOperator.OnOrAfter, DateTime.UtcNow.AddMinutes(-60));
            query.AddOrder("startedon", OrderType.Descending);

            return _serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault();
        }

        private static string GetRibbonJobOperationType(Entity job)
        {
            var operationType = job.GetAttributeValue<OptionSetValue>("operationtype")?.Value ?? 0;
            var messageName = job.GetAttributeValue<string>("messagename") ?? "";
            var name = job.GetAttributeValue<string>("name") ?? "";
            if (operationType == 54 &&
                (messageName.Equals("PublishAllAsync", StringComparison.OrdinalIgnoreCase) ||
                 name.IndexOf("PublishAll", StringComparison.OrdinalIgnoreCase) >= 0))
            {
                return "PublishAll";
            }

            return MapAsyncOperationType(operationType);
        }

        private static string MapAsyncOperationType(int value) => value switch
        {
            202 => "ExportSolution",
            203 => "ImportSolution",
            204 => "PublishAll",
            54 => "CustomAction",
            _ => $"System({value})"
        };

        private static string MapAsyncStatus(int value) => value switch
        {
            0 => "WaitingForResources",
            10 => "Waiting",
            20 => "InProgress",
            21 => "Pausing",
            22 => "Canceling",
            30 => "Succeeded",
            31 => "Failed",
            32 => "Canceled",
            _ => value.ToString()
        };

        private (List<JsonElement> Operations, List<string> Errors) NormalizeOperationWebResources(List<JsonElement> ops)
        {
            var errors = new List<string>();
            var normalized = new List<JsonElement>(ops.Count);

            for (var i = 0; i < ops.Count; i++)
            {
                var node = JsonNode.Parse(ops[i].GetRawText());
                if (node == null)
                {
                    normalized.Add(ops[i].Clone());
                    continue;
                }

                NormalizeWebResourceProperties(node, null, errors, $"operations[{i}]");
                normalized.Add(ToJsonElement(node));
            }

            return (normalized, errors);
        }

        private void NormalizeWebResourceProperties(JsonNode node, string propertyName, List<string> errors, string path)
        {
            if (node == null) return;

            if (node is JsonValue value &&
                IsWebResourceOperationProperty(propertyName) &&
                value.TryGetValue<string>(out var text) &&
                !string.IsNullOrWhiteSpace(text))
            {
                var resolved = ResolveWebResourceName(text, errors, path);
                node.ReplaceWith(JsonValue.Create(resolved));
                return;
            }

            if (node is JsonArray array)
            {
                for (var i = 0; i < array.Count; i++)
                    NormalizeWebResourceProperties(array[i], propertyName, errors, $"{path}[{i}]");
                return;
            }

            if (node is JsonObject obj)
            {
                foreach (var key in obj.Select(kv => kv.Key).ToList())
                    NormalizeWebResourceProperties(obj[key], key, errors, $"{path}.{key}");
            }
        }

        private string ResolveWebResourceName(string input, List<string> errors, string path)
        {
            var name = input.Trim();
            if (name.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
                name = name.Substring("$webresource:".Length);

            var result = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, name, "manage_ribbon");
            if (result.IsSuccess)
                return result.Value.GetAttributeValue<string>("name") ?? result.CanonicalName;

            errors.Add($"{path} '{input}': {result.Error}");
            return input;
        }

        private static bool IsWebResourceOperationProperty(string propertyName) =>
            string.Equals(propertyName, "library", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(propertyName, "enable_library", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(propertyName, "modern_image", StringComparison.OrdinalIgnoreCase);

        private static string FormatOperationNameResolutionErrors(List<string> errors)
        {
            var sb = new StringBuilder();
            sb.AppendLine("[ManageRibbon] BLOCKED - operation name resolution failed");
            sb.AppendLine($"Errors: {errors.Count}");
            foreach (var error in errors)
                sb.AppendLine($"- {error}");
            sb.AppendLine("Tip: Display Name contains is resolved first, then logical/unique/schema contains. Use a more specific web resource name when matches are ambiguous.");
            return sb.ToString();
        }

        private static JsonElement ToJsonElement(JsonNode node)
        {
            using var doc = JsonDocument.Parse(node.ToJsonString());
            return doc.RootElement.Clone();
        }

        private CallToolResult ListEntitiesWithRibbon()
        {
            byte[] zipBytes;
            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                zipBytes = exportResp.ExportSolutionFile;
            }
            catch
            {
                return new CallToolResult
                {
                    Content = [new TextContentBlock
                    {
                        Text = $"[ManageRibbon] list\n" +
                            $"Solution '{SOLUTION_NAME}' does not exist yet.\n" +
                            $"No ribbon customizations found.\n" +
                            $"Tip: Use manage_ribbon(action='update', entity_name=..., operations=[...]) to add your first ribbon button."
                    }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                    {
                        Action = "list",
                        Status = "empty",
                        Entities = []
                    })
                };
            }

            var entities = ExtractEntitiesFromSolution(zipBytes);

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] list — Solution: {SOLUTION_NAME}");
            sb.AppendLine($"Entities with ribbon customizations: {entities.Count}");
            sb.AppendLine();

            if (entities.Count == 0)
            {
                sb.AppendLine("No entities with ribbon customizations found.");
            }
            else
            {
                sb.AppendLine("| Entity | Buttons |");
                sb.AppendLine("|--------|---------|");
                foreach (var e in entities)
                    sb.AppendLine($"| {e.Name} | {e.ButtonCount} |");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "list",
                    Status = "ok",
                    Entities = entities.Select(e => e.Name).ToList()
                })
            };
        }

        // ── Action: buttons ──────────────────────────────────────────────

        // Surface → (RibbonLocationFilter, GroupId suffix containing devkit buttons)
        // form      → Form    → Mscrm.Form.{entity}.MainTab.Save.Controls
        // main_grid → HomepageGrid → Mscrm.HomepageGrid.{entity}.MainTab.Actions.Controls
        // sub_grid  → SubGrid → Mscrm.SubGrid.{entity}.MainTab.Actions.Controls
        private static readonly Dictionary<string, (RibbonLocationFilters Filter, string GroupSuffix)> SurfaceRibbonMap = new()
        {
            ["form"]      = (RibbonLocationFilters.Form,     "MainTab.Save"),
            ["main_grid"] = (RibbonLocationFilters.HomepageGrid, "MainTab.Actions"),
            ["sub_grid"]  = (RibbonLocationFilters.SubGrid,  "MainTab.Actions"),
        };

        private CallToolResult ListRibbonButtons(string entityName)
        {
            var allSurfaces = new List<RibbonSurfaceButtons>();
            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] buttons — {entityName}");
            sb.AppendLine($"Showing buttons in devkit-managed locations (form, main_grid, sub_grid)");
            sb.AppendLine();

            // Load hidden buttons and LocLabels from devkit solution RibbonDiffXml (single export)
            LoadDevKitRibbonData(entityName, out var hiddenBySurface, out var locLabels);

            foreach (var (surface, (filter, groupSuffix)) in SurfaceRibbonMap)
            {
                var surfaceResult = new RibbonSurfaceButtons { Surface = surface };
                hiddenBySurface.TryGetValue(surface, out var hiddenForSurface);
                hiddenForSurface ??= [];

                try
                {
                    var request = new RetrieveEntityRibbonRequest
                    {
                        EntityName = entityName,
                        RibbonLocationFilter = filter
                    };
                    var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(request);
                    var xml = UnzipRibbonXml(response.CompressedEntityXml);

                    surfaceResult.Items = ParseButtonsFromRibbon(xml, entityName, groupSuffix, locLabels);
                }
                catch (Exception ex)
                {
                    sb.AppendLine($"### {surface.ToUpperInvariant()}");
                    sb.AppendLine($"Error retrieving ribbon: {ex.Message}");
                    sb.AppendLine();
                    allSurfaces.Add(surfaceResult);
                    continue;
                }

                // Append hidden buttons that no longer appear in the merged ribbon XML
                foreach (var hiddenBtn in hiddenForSurface)
                {
                    if (!surfaceResult.Items.Any(b => string.Equals(b.Id, hiddenBtn.Id, StringComparison.OrdinalIgnoreCase)))
                        surfaceResult.Items.Add(hiddenBtn);
                }

                // Re-sort after appending hidden buttons
                surfaceResult.Items = surfaceResult.Items.OrderBy(b => b.Sequence).ThenBy(b => b.IsHide ? 1 : 0).ToList();

                sb.AppendLine($"### {surface.ToUpperInvariant()} (Mscrm.{{entity}}.{groupSuffix}.Controls)");
                sb.AppendLine($"| # | Sequence | Button Label | Button Id | OOB | Custom | Hide |");
                sb.AppendLine($"|---|----------|-------------|-----------|-----|--------|------|");
                var idx = 1;
                foreach (var btn in surfaceResult.Items)
                {
                    var oob = btn.IsOob ? "✓" : "";
                    var custom = btn.IsCustom ? "✓" : "";
                    var hide = btn.IsHide ? "✓" : "";
                    var label = string.IsNullOrWhiteSpace(btn.Label) ? $"[{btn.Id}]" : btn.Label;
                    var seqDisplay = btn.Sequence == 0 && btn.IsHide ? "(hidden)" : btn.Sequence.ToString();
                    sb.AppendLine($"| {idx++} | {seqDisplay} | {label} | {btn.Id} | {oob} | {custom} | {hide} |");
                }

                sb.AppendLine();
                allSurfaces.Add(surfaceResult);
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "buttons",
                    EntityName = entityName,
                    Status = "ok",
                    Buttons = allSurfaces
                })
            };
        }

        // Single export: returns hidden buttons by surface + LocLabels dictionary
        private void LoadDevKitRibbonData(string entityName,
            out Dictionary<string, List<RibbonButtonInfo>> hiddenBySurface,
            out Dictionary<string, string> locLabels)
        {
            hiddenBySurface = new Dictionary<string, List<RibbonButtonInfo>>(StringComparer.OrdinalIgnoreCase);
            locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            try
            {
                if (_options.DryRun)
                    return;
                var fetcher = new RibbonSolutionFetcher(_serviceClient, _context);
                var ribbonDiffXml = fetcher.FetchExistingRibbonDiffXml(entityName);
                if (string.IsNullOrWhiteSpace(ribbonDiffXml)) return;

                var doc = XDocument.Parse(ribbonDiffXml);

                // LocLabels: Id → first Title/@description
                foreach (var locLabelEl in doc.Descendants("LocLabel"))
                {
                    var id = (string)locLabelEl.Attribute("Id") ?? "";
                    var desc = (string)locLabelEl.Descendants("Title").FirstOrDefault()?.Attribute("description") ?? "";
                    if (!string.IsNullOrWhiteSpace(id) && !string.IsNullOrWhiteSpace(desc))
                        locLabels[id] = desc;
                }

                // HideCustomAction: Location = hidden button ID
                foreach (var hideEl in doc.Descendants("HideCustomAction"))
                {
                    var buttonId = (string)hideEl.Attribute("Location") ?? "";
                    if (string.IsNullOrWhiteSpace(buttonId)) continue;

                    var surface = DetectSurfaceFromButtonId(buttonId, entityName);
                    if (surface == null) continue;

                    if (!hiddenBySurface.ContainsKey(surface))
                        hiddenBySurface[surface] = [];

                    hiddenBySurface[surface].Add(new RibbonButtonInfo
                    {
                        Id = buttonId,
                        Sequence = 0,
                        Label = ExtractReadableNameFromId(buttonId),
                        IsOob = true,
                        IsCustom = false,
                        IsHide = true
                    });
                }
            }
            catch { /* solution may not exist */ }
        }

        private static string DetectSurfaceFromButtonId(string buttonId, string entityName)
        {
            // e.g. "Mscrm.Form.v4_mcp.Activate" → form
            // "Mscrm.HomepageGrid.v4_mcp.xxx" → main_grid
            // "Mscrm.SubGrid.v4_mcp.xxx" → sub_grid
            if (buttonId.StartsWith($"Mscrm.Form.{entityName}.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.StartsWith($"Mscrm.Form.", StringComparison.OrdinalIgnoreCase))
                return "form";
            if (buttonId.StartsWith($"Mscrm.HomepageGrid.", StringComparison.OrdinalIgnoreCase))
                return "main_grid";
            if (buttonId.StartsWith($"Mscrm.SubGrid.", StringComparison.OrdinalIgnoreCase))
                return "sub_grid";
            return null;
        }

        private static List<RibbonButtonInfo> ParseButtonsFromRibbon(string ribbonXml, string entityName, string groupSuffix, Dictionary<string, string> locLabels = null)
        {
            var doc = XDocument.Parse(ribbonXml);

            // Find the group whose Id ends with the expected suffix
            // e.g. "Mscrm.Form.v4_mcp.MainTab.Save" or "Mscrm.HomepageGrid.v4_mcp.MainTab.Actions"
            var targetGroupIdSuffix = $".{entityName}.{groupSuffix}";

            var group = doc.Descendants("Group")
                .FirstOrDefault(g =>
                {
                    var id = (string)g.Attribute("Id") ?? "";
                    return id.EndsWith(targetGroupIdSuffix, StringComparison.OrdinalIgnoreCase);
                });

            if (group == null)
                return [];

            var controls = group.Element("Controls");
            if (controls == null)
                return [];

            var result = new List<RibbonButtonInfo>();
            foreach (var el in controls.Elements())
            {
                var tagName = el.Name.LocalName;
                if (tagName != "Button" && tagName != "FlyoutAnchor" && tagName != "SplitButton")
                    continue;

                var id = (string)el.Attribute("Id") ?? "";
                var seqStr = (string)el.Attribute("Sequence") ?? "0";
                if (!int.TryParse(seqStr, out var seq)) seq = 0;

                var labelText = (string)el.Attribute("LabelText") ?? "";
                var label = ResolveLabel(labelText, id, locLabels);

                var solutionName = (string)el.Attribute("SolutionUniqueName") ?? "";
                var isOob = solutionName.Equals("System", StringComparison.OrdinalIgnoreCase);
                var isCustom = !isOob;

                result.Add(new RibbonButtonInfo
                {
                    Id = id,
                    Sequence = seq,
                    Label = label,
                    IsOob = isOob,
                    IsCustom = isCustom,
                    IsHide = false
                });
            }

            return result.OrderBy(b => b.Sequence).ToList();
        }

        private static string ResolveLabel(string labelText, string buttonId, Dictionary<string, string> locLabels = null)
        {
            if (string.IsNullOrWhiteSpace(labelText))
                return ExtractReadableNameFromId(buttonId);

            // $LocLabels:devkit.v4_mcp.MCPForm.Button.LabelText → look up in locLabels dict first
            if (labelText.StartsWith("$LocLabels:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$LocLabels:".Length);
                if (locLabels != null && locLabels.TryGetValue(key, out var resolved))
                    return resolved;
                // Fallback: last segment
                var parts = key.Split('.');
                return parts.Last();
            }

            // $Resources:Ribbon.Form.MainTab.Save.Save → take last segment
            if (labelText.StartsWith("$Resources:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$Resources:".Length);
                var parts = key.Split('.');
                return parts.Last();
            }

            // {!EntityDisplayName:email} → "email"
            if (labelText.StartsWith("{!"))
            {
                var inner = labelText.TrimStart('{', '!').TrimEnd('}');
                return inner.Contains(':') ? inner.Substring(inner.IndexOf(':') + 1) : inner;
            }

            return labelText;
        }

        private static string ExtractReadableNameFromId(string buttonId)
        {
            if (string.IsNullOrWhiteSpace(buttonId)) return "";
            var parts = buttonId.Split('.');
            return parts.Last();
        }

        private static string UnzipRibbonXml(byte[] data)
        {
            using var memStream = new MemoryStream(data);
            using var zip = new ZipArchive(memStream, ZipArchiveMode.Read);
            var entry = zip.GetEntry("RibbonXml.xml");
            using var strm = entry.Open();
            using var reader = new StreamReader(strm, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        // ── Action: detail ───────────────────────────────────────────────

        private CallToolResult DetailRibbon(string entityName)
        {
            string ribbonXml;
            try
            {
                var fetcher = new RibbonSolutionFetcher(_serviceClient, _context);
                ribbonXml = _options.DryRun
                    ? fetcher.ReadRibbonWithoutMutation(entityName)
                    : fetcher.FetchExistingRibbonDiffXml(entityName);
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Failed to read RibbonDiffXml\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {ex.Message}");
            }

            if (ribbonXml == null)
            {
                return new CallToolResult
                {
                    Content = [new TextContentBlock
                    {
                        Text = $"[ManageRibbon] detail — {entityName}\n" +
                            $"No ribbon customizations found for '{entityName}' in solution '{SOLUTION_NAME}'.\n" +
                            $"Tip: Use manage_ribbon(action='update', entity_name='{entityName}', operations=[...]) to create ribbon buttons."
                    }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                    {
                        Action = "detail",
                        EntityName = entityName,
                        Status = "empty"
                    })
                };
            }

            // Pretty-print the XML
            string prettyXml;
            try
            {
                prettyXml = XDocument.Parse(ribbonXml).ToString(SaveOptions.None);
            }
            catch
            {
                prettyXml = ribbonXml;
            }

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] detail — {entityName}");
            sb.AppendLine($"Solution: {SOLUTION_NAME}");
            sb.AppendLine();
            sb.AppendLine("```xml");
            sb.AppendLine(prettyXml);
            sb.AppendLine("```");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "detail",
                    EntityName = entityName,
                    Status = "ok",
                    RibbonDiffXml = prettyXml
                })
            };
        }

        // ── Action: update ───────────────────────────────────────────────

        private CallToolResult UpdateRibbon(string entityName, string ribbonxml, bool doBackup)
        {
            // Step 1: Resolve ribbonxml input (file path or inline)
            var resolvedXml = ResolveRibbonXmlInput(ribbonxml);
            if (resolvedXml == null)
                return ErrorResult(
                    $"[Error] RibbonXml file not found\nPath: {ribbonxml}\n" +
                    "Tip: Re-run build_ribbon_xml to regenerate the file.");

            // Step 2: Preserve existing RibbonDiffXml nodes that are not present in the supplied XML.
            // Raw ribbonxml updates are treated as patches so adding one button cannot delete siblings.
            try
            {
                var fetcher = new RibbonSolutionFetcher(_serviceClient, _context);
                var existingXml = fetcher.FetchExistingRibbonDiffXml(entityName);
                var targetDoc = XDocument.Parse(resolvedXml);
                var existingDoc = XDocument.Parse(existingXml);

                RibbonXmlHelpers.PreserveMissingRibbonDiffElements(targetDoc, existingDoc);
                resolvedXml = targetDoc.ToString(SaveOptions.None);
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Existing RibbonDiffXml preservation failed - update BLOCKED (fail-safe)\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {ex.Message}");
            }

            // Step 3: Backup current ribbon
            string backupPath = null;
            if (doBackup)
            {
                try
                {
                    backupPath = BackupCurrentRibbon(entityName);
                }
                catch (Exception ex)
                {
                    // Only block if solution exists (meaning there's something to lose)
                    if (SolutionExists())
                        return ErrorResult(
                            $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                            $"Entity: {entityName}\n" +
                            $"Message: {ex.Message}\n" +
                            "Tip: Fix the issue or set backup=false (not recommended).");
                    // If solution doesn't exist, nothing to back up — proceed
                }
            }

            // Step 4: Build solution ZIP from template
            if (_options.DryRun)
                return DryRun($"Would UPDATE ribbon for entity '{entityName}'.", new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = "not_executed",
                    BackupPath = backupPath,
                    Published = false
                });

            // Step 5: Import solution. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, resolvedXml);
            ImportRibbonSolution(solutionZip);

            // Step 6: Publish immediately after import completes.
            var (published, asyncJobId) = TryPublish(entityName);
            var functionSignatures = BuildFunctionSignatures(resolvedXml);

            // Step 7: Return result
            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] update — {entityName}");
            sb.AppendLine($"Solution: {SOLUTION_NAME}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            AppendFunctionSignatures(sb, functionSignatures);
            if (published && asyncJobId.HasValue)
            {
                sb.AppendLine($"Published: started asynchronously");
                sb.AppendLine($"AsyncOperationId: {asyncJobId.Value}");
                sb.AppendLine($"Note: Use get_system_jobs(record_id=\"{asyncJobId.Value}\") to check publish status.");
                sb.AppendLine("Wait: Do not call manage_ribbon(buttons/detail) or run the next prompt until this system job reaches a terminal status.");
                AppendPublishWaitGuidance(sb);
            }
            else
            {
                sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");
            }
            sb.AppendLine();
            if (backupPath != null)
                sb.AppendLine($"To rollback: manage_ribbon(action='undo', entity_name='{entityName}', ribbonxml='{backupPath}')");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = published && asyncJobId.HasValue ? "publish_in_progress" : published ? "updated" : "updated_publish_failed",
                    BackupPath = backupPath,
                    Published = published,
                    FunctionSignatures = functionSignatures.Count > 0 ? functionSignatures : null,
                    AsyncOperationId = asyncJobId?.ToString(),
                    NeedsWait = asyncJobId.HasValue ? true : null,
                    WaitTool = asyncJobId.HasValue ? "get_system_jobs" : null,
                    PollAfterSeconds = asyncJobId.HasValue ? 30 : null,
                    PollScheduleSeconds = asyncJobId.HasValue ? NewPublishPollScheduleSeconds() : null,
                    MaxPollAttempts = asyncJobId.HasValue ? PublishMaxPollAttempts : null,
                    MaxWaitSeconds = asyncJobId.HasValue ? PublishMaxWaitSeconds : null,
                    ReadbackAllowed = asyncJobId.HasValue ? false : null,
                    NextAllowedActions = asyncJobId.HasValue ? new List<string> { "get_system_jobs" } : null,
                    WaitReason = asyncJobId.HasValue ? "PublishAll started asynchronously; wait for the system job before ribbon readback or the next prompt." : null,
                    WaitTimeoutAction = asyncJobId.HasValue ? PublishWaitTimeoutAction : null,
                    WaitTimeoutInstruction = asyncJobId.HasValue ? PublishWaitTimeoutInstruction : null
                })
            };
        }

        // ── Action: update (from operations) ────────────────────────────

        private CallToolResult UpdateRibbonFromOperations(string entityName, string operationsJson, bool doBackup)
        {
            // Step 1: Validate entity
            var validation = new RibbonValidation(_serviceClient);
            var entityError = validation.ValidateEntityExists(entityName);
            if (entityError != null)
                return ErrorResult(entityError);

            // Step 2: Parse operations JSON
            List<JsonElement> ops;
            try
            {
                ops = JsonSerializer.Deserialize<List<JsonElement>>(operationsJson);
                if (ops == null || ops.Count == 0)
                    return ErrorResult("Error: operations must be a non-empty JSON array.");
            }
            catch (JsonException ex)
            {
                return ErrorResult($"Error: Invalid operations JSON: {ex.Message}");
            }

            var (normalizedOps, nameResolutionErrors) = NormalizeOperationWebResources(ops);
            if (nameResolutionErrors.Count > 0)
                return ErrorResult(FormatOperationNameResolutionErrors(nameResolutionErrors));
            ops = normalizedOps;

            // Step 3: Fetch existing RibbonDiffXml from devkit-ribbon solution
            var fetcher = new RibbonSolutionFetcher(_serviceClient, _context);
            var existingXml = fetcher.FetchExistingRibbonDiffXml(entityName);

            // Step 4: Parse existing XML
            XDocument ribbonDoc;
            try
            {
                ribbonDoc = XDocument.Parse(existingXml);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse existing RibbonDiffXml: {ex.Message}");
            }

            // Step 5: Execute operations via helper classes
            var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);
            var btnOps = new RibbonButtonOperations(validation, lcid);
            var flyoutOps = new RibbonFlyoutOperations(validation, lcid);

            var summaries = new List<string>();
            var existingButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);

            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    return ErrorResult("Error: Each operation must have an 'action' field.");

                var opAction = actionProp.GetString()?.Trim().ToLowerInvariant();
                (string error, string summary) result = opAction switch
                {
                    "add_button"           => btnOps.ExecuteAddButton(ribbonDoc, entityName, op),
                    "update_button"        => btnOps.ExecuteUpdateButton(ribbonDoc, entityName, op),
                    "hide_button"          => btnOps.ExecuteHideButton(ribbonDoc, entityName, op),
                    "show_button"          => btnOps.ExecuteShowButton(ribbonDoc, entityName, op),
                    "add_split_button"     => flyoutOps.ExecuteAddSplitButton(ribbonDoc, entityName, op),
                    "update_split_button"  => flyoutOps.ExecuteUpdateSplitButton(ribbonDoc, entityName, op),
                    "add_flyout_static"    => flyoutOps.ExecuteAddFlyoutStatic(ribbonDoc, entityName, op),
                    "update_flyout_static" => flyoutOps.ExecuteUpdateFlyoutStatic(ribbonDoc, entityName, op),
                    "hide_flyout_item"     => flyoutOps.ExecuteHideFlyoutItem(ribbonDoc, entityName, op),
                    "show_flyout_item"     => flyoutOps.ExecuteShowFlyoutItem(ribbonDoc, entityName, op),
                    _ => ($"Error: Unknown action '{opAction}'.\n" +
                          "Valid: add_button, update_button, hide_button, show_button, " +
                          "add_split_button, update_split_button, add_flyout_static, " +
                          "update_flyout_static, hide_flyout_item, show_flyout_item", null)
                };

                if (result.error != null) return ErrorResult(result.error);
                summaries.Add(result.summary);
            }

            // Step 6: Sort CommandDefinitions, DisplayRules, EnableRules by Id
            RibbonXmlHelpers.SortChildrenById(ribbonDoc.Root?.Element("CommandDefinitions"), "CommandDefinition");
            var ruleDefsSortEl = ribbonDoc.Root?.Element("RuleDefinitions");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("DisplayRules"), "DisplayRule");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("EnableRules"), "EnableRule");

            // Step 7: Validate output XML against Ribbon XSD
            var xmlString = ribbonDoc.ToString(SaveOptions.None);
            var (xsdErrors, xsdWarnings) = RibbonValidation.ValidateRibbonXml(xmlString);
            if (xsdErrors.Count > 0)
                return ErrorResult($"Error: Generated XML failed Ribbon XSD validation:\n{string.Join("\n", xsdErrors)}");
            var functionSignatures = BuildFunctionSignatures(ribbonDoc);

            // Step 8: Backup current ribbon (before applying changes)
            string backupPath = null;
            if (doBackup)
            {
                try
                {
                    backupPath = BackupCurrentRibbon(entityName);
                }
                catch (Exception ex)
                {
                    if (SolutionExists())
                        return ErrorResult(
                            $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                            $"Entity: {entityName}\n" +
                            $"Message: {ex.Message}\n" +
                            "Tip: Fix the issue or set backup=false (not recommended).");
                }
            }

            if (_options.DryRun)
                return DryRun($"Would UPDATE ribbon for entity '{entityName}' with {ops.Count} operations.", new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = "not_executed",
                    BackupPath = backupPath,
                    Published = false
                });

            // Step 9: Build solution ZIP + import. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, xmlString);
            ImportRibbonSolution(solutionZip);

            // Step 10: Publish immediately after import completes.
            var (published, asyncJobId) = TryPublish(entityName);

            // Step 11: Build result
            var newButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);
            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] update — {entityName}");
            sb.AppendLine($"Solution: {SOLUTION_NAME}");
            sb.AppendLine($"Operations: {ops.Count}");
            foreach (var s in summaries)
                sb.AppendLine($"  ✓ {s}");
            AppendFunctionSignatures(sb, functionSignatures);
            if (xsdWarnings.Count > 0)
            {
                sb.AppendLine($"XSD Warnings ({xsdWarnings.Count}):");
                foreach (var w in xsdWarnings)
                    sb.AppendLine($"  ⚠ {w}");
            }
            sb.AppendLine($"Existing buttons preserved: {existingButtonCount}");
            sb.AppendLine($"Total buttons after: {newButtonCount}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            if (published && asyncJobId.HasValue)
            {
                sb.AppendLine($"Published: started asynchronously");
                sb.AppendLine($"AsyncOperationId: {asyncJobId.Value}");
                sb.AppendLine($"Note: Use get_system_jobs(record_id=\"{asyncJobId.Value}\") to check publish status.");
                sb.AppendLine("Wait: Do not call manage_ribbon(buttons/detail) or run the next prompt until this system job reaches a terminal status.");
                AppendPublishWaitGuidance(sb);
            }
            else
            {
                sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");
            }
            sb.AppendLine();
            if (backupPath != null)
                sb.AppendLine($"To rollback: manage_ribbon(action='undo', entity_name='{entityName}', ribbonxml='{backupPath}')");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = published && asyncJobId.HasValue ? "publish_in_progress" : published ? "updated" : "updated_publish_failed",
                    BackupPath = backupPath,
                    Published = published,
                    FunctionSignatures = functionSignatures.Count > 0 ? functionSignatures : null,
                    AsyncOperationId = asyncJobId?.ToString(),
                    NeedsWait = asyncJobId.HasValue ? true : null,
                    WaitTool = asyncJobId.HasValue ? "get_system_jobs" : null,
                    PollAfterSeconds = asyncJobId.HasValue ? 30 : null,
                    PollScheduleSeconds = asyncJobId.HasValue ? NewPublishPollScheduleSeconds() : null,
                    MaxPollAttempts = asyncJobId.HasValue ? PublishMaxPollAttempts : null,
                    MaxWaitSeconds = asyncJobId.HasValue ? PublishMaxWaitSeconds : null,
                    ReadbackAllowed = asyncJobId.HasValue ? false : null,
                    NextAllowedActions = asyncJobId.HasValue ? new List<string> { "get_system_jobs" } : null,
                    WaitReason = asyncJobId.HasValue ? "PublishAll started asynchronously; wait for the system job before ribbon readback or the next prompt." : null,
                    WaitTimeoutAction = asyncJobId.HasValue ? PublishWaitTimeoutAction : null,
                    WaitTimeoutInstruction = asyncJobId.HasValue ? PublishWaitTimeoutInstruction : null
                })
            };
        }

        // ── Action: undo ─────────────────────────────────────────────────

        private CallToolResult UndoRibbon(string entityName, string backupFilePath)
        {
            if (!File.Exists(backupFilePath))
                return ErrorResult(
                    $"[Error] Backup file not found\nPath: {backupFilePath}\n" +
                    "Tip: Check the path. Backups are at: .devkit/backups/ribbons/");

            string restoredXml;
            try
            {
                var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
                var backupData = JsonSerializer.Deserialize<RibbonBackup>(json);
                if (backupData == null || string.IsNullOrWhiteSpace(backupData.RibbonDiffXml))
                    return ErrorResult(
                        $"[Error] Backup file is empty or invalid\nPath: {backupFilePath}\n" +
                        "Tip: The backup must be a JSON file with a 'ribbonDiffXml' field.");
                restoredXml = backupData.RibbonDiffXml;
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse backup file\nPath: {backupFilePath}\nMessage: {ex.Message}");
            }

            if (_options.DryRun)
                return DryRun($"Would RESTORE ribbon for entity '{entityName}' from backup.", new ManageRibbonResult
                {
                    Action = "undo",
                    EntityName = entityName,
                    Status = "not_executed",
                    RestoredFromBackup = backupFilePath,
                    Published = false
                });

            // Build and import. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, restoredXml);
            ImportRibbonSolution(solutionZip);

            var (published, asyncJobId) = TryPublish(entityName);

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] undo — {entityName}");
            sb.AppendLine($"Restored from: {backupFilePath}");
            sb.AppendLine($"Status: Restored successfully");
            if (published && asyncJobId.HasValue)
            {
                sb.AppendLine($"Published: started asynchronously");
                sb.AppendLine($"AsyncOperationId: {asyncJobId.Value}");
                sb.AppendLine($"Note: Use get_system_jobs(record_id=\"{asyncJobId.Value}\") to check publish status.");
                sb.AppendLine("Wait: Do not call manage_ribbon(buttons/detail) or run the next prompt until this system job reaches a terminal status.");
                AppendPublishWaitGuidance(sb);
            }
            else
            {
                sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "undo",
                    EntityName = entityName,
                    Status = published && asyncJobId.HasValue ? "publish_in_progress" : published ? "restored" : "restored_publish_failed",
                    RestoredFromBackup = backupFilePath,
                    Published = published,
                    AsyncOperationId = asyncJobId?.ToString(),
                    NeedsWait = asyncJobId.HasValue ? true : null,
                    WaitTool = asyncJobId.HasValue ? "get_system_jobs" : null,
                    PollAfterSeconds = asyncJobId.HasValue ? 30 : null,
                    PollScheduleSeconds = asyncJobId.HasValue ? NewPublishPollScheduleSeconds() : null,
                    MaxPollAttempts = asyncJobId.HasValue ? PublishMaxPollAttempts : null,
                    MaxWaitSeconds = asyncJobId.HasValue ? PublishMaxWaitSeconds : null,
                    ReadbackAllowed = asyncJobId.HasValue ? false : null,
                    NextAllowedActions = asyncJobId.HasValue ? new List<string> { "get_system_jobs" } : null,
                    WaitReason = asyncJobId.HasValue ? "PublishAll started asynchronously; wait for the system job before ribbon readback or the next prompt." : null,
                    WaitTimeoutAction = asyncJobId.HasValue ? PublishWaitTimeoutAction : null,
                    WaitTimeoutInstruction = asyncJobId.HasValue ? PublishWaitTimeoutInstruction : null
                })
            };
        }

        // ── Solution ZIP builder (from template) ─────────────────────────

        private byte[] BuildSolutionZip(string entityName, string ribbonDiffXml)
        {
            // Load template from embedded resource
            var templateBytes = LoadTemplateZip();

            using var inputMs = new MemoryStream(templateBytes);
            using var outputMs = new MemoryStream();

            // Copy template to output and modify
            inputMs.CopyTo(outputMs);
            outputMs.Position = 0;

            using (var archive = new ZipArchive(outputMs, ZipArchiveMode.Update, leaveOpen: true))
            {
                // Modify solution.xml
                var solutionEntry = archive.GetEntry("solution.xml");
                if (solutionEntry != null)
                {
                    var solutionXml = ReadEntryText(solutionEntry);
                    // Replace entity placeholder
                    solutionXml = solutionXml
                        .Replace("v4_mcp", entityName)
                        .Replace("v4_MCP", entityName);
                    WriteEntryText(solutionEntry, solutionXml);
                }

                // Modify customizations.xml
                var customizationsEntry = archive.GetEntry("customizations.xml");
                if (customizationsEntry != null)
                {
                    var customDoc = XDocument.Parse(ReadEntryText(customizationsEntry));

                    var entityNode = customDoc.Descendants("Entity").FirstOrDefault();
                    if (entityNode != null)
                    {
                        // Update entity name
                        var nameEl = entityNode.Element("Name");
                        if (nameEl != null)
                        {
                            nameEl.Value = entityName;
                            nameEl.SetAttributeValue("LocalizedName", entityName);
                            nameEl.SetAttributeValue("OriginalName", entityName);
                        }

                        var entityInfoEl = entityNode.Element("EntityInfo")?.Element("entity");
                        if (entityInfoEl != null)
                            entityInfoEl.SetAttributeValue("Name", entityName);

                        // Replace RibbonDiffXml
                        var ribbonEl = entityNode.Element("RibbonDiffXml");
                        if (ribbonEl != null)
                        {
                            var newRibbonEl = XElement.Parse(ribbonDiffXml);
                            ribbonEl.ReplaceWith(newRibbonEl);
                        }
                    }

                    WriteEntryText(customizationsEntry, customDoc.Declaration != null
                        ? customDoc.Declaration.ToString() + "\n" + customDoc.Root.ToString()
                        : customDoc.Root.ToString());
                }
            }

            return outputMs.ToArray();
        }

        private static byte[] LoadTemplateZip()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceNames = assembly.GetManifestResourceNames();
            var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith("ribbon.zip"));

            if (resourceName == null)
                throw new InvalidOperationException(
                    "Embedded resource 'ribbon.zip' not found. Ensure it's included as EmbeddedResource in the project.");

            using var stream = assembly.GetManifestResourceStream(resourceName);
            using var ms = new MemoryStream();
            stream.CopyTo(ms);
            return ms.ToArray();
        }

        private static string ReadEntryText(ZipArchiveEntry entry)
        {
            using var stream = entry.Open();
            using var reader = new StreamReader(stream, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        private static void WriteEntryText(ZipArchiveEntry entry, string content)
        {
            using var stream = entry.Open();
            stream.SetLength(0);
            using var writer = new StreamWriter(stream, Encoding.UTF8);
            writer.Write(content);
        }

        // ── Extract from solution ZIP ────────────────────────────────────

        private static string ExtractRibbonDiffXml(byte[] zipBytes, string entityName)
        {
            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

            var entry = archive.Entries
                .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

            if (entry == null) return null;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);

            var entityNode = doc.Descendants("Entity")
                .FirstOrDefault(e =>
                {
                    var nameEl = e.Element("Name");
                    return nameEl != null && string.Equals(nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
                });

            var ribbonEl = entityNode?.Element("RibbonDiffXml");
            return ribbonEl?.ToString();
        }

        private static List<(string Name, int ButtonCount)> ExtractEntitiesFromSolution(byte[] zipBytes)
        {
            var result = new List<(string, int)>();

            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

            var entry = archive.Entries
                .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

            if (entry == null) return result;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);

            foreach (var entityNode in doc.Descendants("Entity"))
            {
                var nameEl = entityNode.Element("Name");
                if (nameEl == null) continue;

                var ribbonEl = entityNode.Element("RibbonDiffXml");
                var buttonCount = ribbonEl?.Element("CustomActions")?.Elements("CustomAction").Count() ?? 0;

                result.Add((nameEl.Value, buttonCount));
            }

            return result;
        }

        // ── Backup ───────────────────────────────────────────────────────

        private string BackupCurrentRibbon(string entityName)
        {
            string currentXml = null;

            try
            {
                var fetcher = new RibbonSolutionFetcher(_serviceClient, _context);
                currentXml = fetcher.FetchExistingRibbonDiffXml(entityName);
            }
            catch
            {
                // Solution doesn't exist — nothing to backup
            }

            if (string.IsNullOrWhiteSpace(currentXml))
                return null; // Nothing to backup

            var workingDir = string.IsNullOrWhiteSpace(_workspaceFolder) ? Directory.GetCurrentDirectory() : _workspaceFolder;
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "ribbons");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{timestamp}.ribbon.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var backupData = new RibbonBackup
            {
                Entity = entityName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                RibbonDiffXml = currentXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);
            return backupPath;
        }

        private Guid? GetSolutionId()
        {
            var fetch = $@"<fetch top='1'>
                <entity name='solution'>
                    <attribute name='solutionid'/>
                    <filter>
                        <condition attribute='uniquename' operator='eq' value='{SOLUTION_NAME}'/>
                    </filter>
                </entity>
            </fetch>";
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            return result.Entities.Count > 0 ? result.Entities[0].Id : null;
        }

        // ── Helpers ──────────────────────────────────────────────────────

        private bool SolutionExists()
        {
            try
            {
                var solutionId = GetSolutionId();
                return solutionId.HasValue;
            }
            catch { return false; }
        }

        private static string ResolveRibbonXmlInput(string ribbonxml)
        {
            // Check if it's a file path
            if (ribbonxml.EndsWith(".ribbondiffxml", StringComparison.OrdinalIgnoreCase) ||
                ribbonxml.EndsWith(".xml", StringComparison.OrdinalIgnoreCase))
            {
                if (File.Exists(ribbonxml))
                    return File.ReadAllText(ribbonxml, Encoding.UTF8);
                return null;
            }

            // Check if it looks like XML (inline)
            if (ribbonxml.TrimStart().StartsWith("<"))
                return ribbonxml;

            // Try as file path anyway
            if (File.Exists(ribbonxml))
                return File.ReadAllText(ribbonxml, Encoding.UTF8);

            return null;
        }

        private static List<int> NewPublishPollScheduleSeconds() => new(PublishPollScheduleSeconds);

        private static void AppendPublishWaitGuidance(StringBuilder sb)
        {
            sb.AppendLine("Wait schedule: call get_system_jobs after 30 seconds, then after 60 seconds, then after 120 seconds (total wait: 3 minutes 30 seconds).");
            sb.AppendLine("After the third poll, if the job is not Succeeded or no result is returned, stop waiting, do not read back with manage_ribbon(buttons/detail), and report the result to the user with a note that Dataverse publish is still running or did not complete successfully and the user must wait/check the job.");
        }

        private static List<RibbonFunctionSignature> BuildFunctionSignatures(string ribbonXml)
        {
            try
            {
                return BuildFunctionSignatures(XDocument.Parse(ribbonXml));
            }
            catch
            {
                return [];
            }
        }

        private static List<RibbonFunctionSignature> BuildFunctionSignatures(XDocument ribbonDoc)
        {
            var signatures = new List<RibbonFunctionSignature>();
            if (ribbonDoc?.Root == null)
                return signatures;

            foreach (var commandDef in ribbonDoc.Root.Element("CommandDefinitions")?.Elements("CommandDefinition") ?? Enumerable.Empty<XElement>())
            {
                var commandId = commandDef.Attribute("Id")?.Value ?? "";
                foreach (var jsFunction in commandDef.Element("Actions")?.Elements("JavaScriptFunction") ?? Enumerable.Empty<XElement>())
                {
                    var functionName = jsFunction.Attribute("FunctionName")?.Value;
                    if (string.IsNullOrWhiteSpace(functionName))
                        continue;

                    var parameters = GetCrmParameterValues(jsFunction);
                    signatures.Add(new RibbonFunctionSignature
                    {
                        Role = "click",
                        Surface = InferSignatureSurface(commandId, parameters),
                        FunctionName = functionName,
                        Library = jsFunction.Attribute("Library")?.Value,
                        SourceId = commandId,
                        ParameterCount = parameters.Count,
                        Parameters = parameters
                    });
                }
            }

            foreach (var enableRule in ribbonDoc.Root.Element("RuleDefinitions")?.Element("EnableRules")?.Elements("EnableRule") ?? Enumerable.Empty<XElement>())
            {
                var customRule = enableRule.Element("CustomRule");
                if (customRule == null)
                    continue;

                var functionName = customRule.Attribute("FunctionName")?.Value;
                if (string.IsNullOrWhiteSpace(functionName))
                    continue;

                var enableRuleId = enableRule.Attribute("Id")?.Value ?? "";
                var parameters = GetCrmParameterValues(customRule);
                signatures.Add(new RibbonFunctionSignature
                {
                    Role = "enable",
                    Surface = InferSignatureSurface(enableRuleId, parameters),
                    FunctionName = functionName,
                    Library = customRule.Attribute("Library")?.Value,
                    SourceId = enableRuleId,
                    ParameterCount = parameters.Count,
                    Parameters = parameters,
                    ExpectedReturn = "boolean"
                });
            }

            return signatures
                .OrderBy(s => s.SourceId, StringComparer.OrdinalIgnoreCase)
                .ThenBy(s => s.Role, StringComparer.OrdinalIgnoreCase)
                .ThenBy(s => s.FunctionName, StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private static List<string> GetCrmParameterValues(XElement functionElement)
            => functionElement.Elements("CrmParameter")
                .Select(e => e.Attribute("Value")?.Value)
                .Where(v => !string.IsNullOrWhiteSpace(v))
                .ToList();

        private static string InferSignatureSurface(string sourceId, List<string> parameters)
        {
            if (sourceId.IndexOf(".Form.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "form";
            if (sourceId.IndexOf(".HomepageGrid.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "main_grid";
            if (sourceId.IndexOf(".SubGrid.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "sub_grid";

            if (parameters.Any(p => string.Equals(p, "PrimaryControl", StringComparison.OrdinalIgnoreCase)))
                return "form";
            if (parameters.Any(p => string.Equals(p, "SelectedControl", StringComparison.OrdinalIgnoreCase)))
                return "grid";

            return "unknown";
        }

        private static void AppendFunctionSignatures(StringBuilder sb, List<RibbonFunctionSignature> signatures)
        {
            if (signatures == null || signatures.Count == 0)
                return;

            sb.AppendLine();
            sb.AppendLine("JavaScript signatures:");
            foreach (var signature in signatures)
            {
                var returnText = string.Equals(signature.Role, "enable", StringComparison.OrdinalIgnoreCase)
                    ? ", returns boolean"
                    : "";
                sb.AppendLine($"  - {signature.Role} {signature.FunctionName} [{signature.Surface}] ({signature.ParameterCount} params{returnText})");
                for (var i = 0; i < signature.Parameters.Count; i++)
                    sb.AppendLine($"      {i + 1}. {signature.Parameters[i]}");
            }
        }

        private (bool Success, Guid? AsyncOperationId) TryPublish(string entityName)
        {
            try
            {
                // Use async version to avoid timeout
                return (true, PublishHelper.PublishAllAsync(_context, _serviceClient));
            }
            catch (InvalidOperationException) when (_context.MutationsBlocked)
            {
                throw;
            }
            catch
            {
                return (false, null);
            }
        }

        private void ImportRibbonSolution(byte[] solutionZip)
        {
            SolutionImportHelper.Import(_context, _serviceClient, solutionZip);
        }

        private CallToolResult ErrorResult(string message) => Error(message);

        // ── Backup model ─────────────────────────────────────────────────

        private sealed class RibbonBackup
        {
            [JsonPropertyName("entity")]
            public string Entity { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("ribbonDiffXml")]
            public string RibbonDiffXml { get; set; }
        }
    }
}
