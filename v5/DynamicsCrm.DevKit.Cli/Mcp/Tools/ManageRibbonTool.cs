using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public partial class ManageRibbonTool : McpToolBase
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
            "Classic RibbonDiffXml for Dataverse entities via 'devkit-ribbon' solution import.\n\n" +

            "WHEN TO USE: classic/legacy ribbon & button customization — 'ribbon', 'classic', 'legacy', 'button', 'nút', 'custom button', 'action button', 'JavaScript button', 'sub_grid/homepage grid button', or generic button. NOT for modern Power Fx command bar (appaction) → use manage_command.\n\n" +

            "Actions (modes): list | buttons | detail | update | undo.\n" +
            "- list: entities with ribbon customizations in 'devkit-ribbon'\n" +
            "- buttons: OOB+custom buttons across form/main_grid/sub_grid (entity_name)\n" +
            "- detail: current RibbonDiffXml (entity_name)\n" +
            "- update: entity_name + operations (or ribbonxml patch) → validate → backup → import → PublishAll async\n" +
            "- undo: restore from backup (entity_name + ribbonxml path)\n\n" +

            "Operations (update): add_button, update_button, hide_button, show_button, add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item. update_button identifies by 'button_id' (then 'label'=new value) or by 'label' (then 'new_label'=new value). entity_name and web-resource fields resolve Display Name contains first, then logical/unique/schema.\n\n" +

            "RELATED TOOLS: manage_command (modern Power Fx command bar / appaction), get_system_jobs (poll PublishAll async job), publish_customizations (manual publish if async publish did not finish). Pass workspace_folder so backups land in the user's project.")]
        public CallToolResult manage_ribbon(
            [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name. Required: detail/update/undo/buttons.")] string entity_name = "",
            [Description("JSON array of ribbon operations for action='update'. See tool description for the 10 supported actions and their fields.")] string operations = "",
            [Description("For 'undo': backup file path.")] string ribbonxml = "",
            [Description("Backup before overwrite.")] bool backup = true,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;
            var actionName = (action ?? "").Trim().ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(actionName))
                return Error("action is required. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return ListEntitiesWithRibbon();

                    case "buttons":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='buttons'.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return Error(entityError);
                            var busy = TryBlockRibbonReadbackWhenBusy("buttons", entityName);
                            return busy ?? ListRibbonButtons(entityName);
                        }

                    case "detail":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='detail'.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return Error(entityError);
                            var busy = TryBlockRibbonReadbackWhenBusy("detail", entityName);
                            return busy ?? DetailRibbon(entityName);
                        }

                    case "update":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='update'.");
                        {
                            var (updateEntityName, updateEntityError) = ResolveEntityLogicalName(entity_name);
                            if (updateEntityError != null)
                                return Error(updateEntityError);
                            var updateBusy = TryBlockRibbonActionWhenBusy("update", updateEntityName, isReadback: false);
                            if (updateBusy != null) return updateBusy;

                            // Gate destructive ribbon mutation behind System Administrator role.
                            if (RoleGateHelper.EnsureSystemAdministrator(_serviceClient) is { } updateGate)
                                return updateGate;

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

                            return Error(
                                "'operations' is required for action='update'.\n" +
                                "Provide a JSON array of ribbon operations, e.g. " +
                                "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");
                        }

                    case "undo":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='undo'.");
                        if (string.IsNullOrWhiteSpace(ribbonxml))
                            return Error(
                                "ribbonxml is required for action='undo'.\n" +
                                "Provide backup file path from .devkit/backups/ribbons/.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return Error(entityError);
                            var undoBusy = TryBlockRibbonActionWhenBusy("undo", entityName, isReadback: false);

                            // Gate destructive ribbon restore behind System Administrator role.
                            if (RoleGateHelper.EnsureSystemAdministrator(_serviceClient) is { } undoGate)
                                return undoGate;

                            if (_options.DryRun)
                                return DryRun($"Would RESTORE ribbon for entity '{entityName}' from backup.",
                                    new ManageRibbonResult { Action = "undo", EntityName = entityName, Status = "not_executed", Published = false });
                            return undoBusy ?? UndoRibbon(entityName, ribbonxml.Trim());
                        }

                    default:
                        return Error($"Invalid action '{action}'. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");
                }
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }
    }
}
