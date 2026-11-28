using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageRibbonTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
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
            "After the third inspect_diagnostics(resource='system_jobs') poll, if the PublishAll system job is not Succeeded or no result is returned, stop waiting, do not call manage_commanding(resource='ribbon', buttons/detail), and report the ribbon result to the user with a note that Dataverse publish is still running or did not complete successfully and the user must wait/check the job.";
        private const string OperationsDescription =
            "update: non-empty JSON array serialized as a string. Each object has an action and action-specific fields. " +
            "The optional dependency_libraries field (string[]) preloads JS web resources in order on add_button, update_button, and the main action of add_split_button and update_split_button. " +
            "It is also accepted on each item in add_split_button, update_split_button, add_flyout_static, and update_flyout_static. " +
            "On update, omit it to keep the existing dependencies or pass [] to clear them. Read docs://instructions_for_manage_ribbon for the complete contract and examples.";

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageRibbonTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageRibbonTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            // Keep null service construction usable for argument-validation tests;
            // any Dataverse action still fails safely when it reaches the service.
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_ribbon", Title = "Manage classic Dataverse ribbon buttons and customizations",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRibbonResult)),
        Description(
            "Classic RibbonDiffXml customization for Dataverse entities via 'devkit-ribbon' solution import. " +
            "Actions: list | buttons | detail | update | undo. update runs validate → backup → import → PublishAll async; undo restores from a backup file. The update result's backupPath points to the pre-import backup — pass it as ribbonxml to action='undo' to restore.\n\n" +

            "WHEN TO USE:\n" +
            "- classic/legacy ribbon & button customization — 'ribbon', 'classic', 'legacy', 'button', 'custom button', 'action button', 'JavaScript button', 'sub_grid/homepage grid button', or generic button\n" +
            "- the 10 operations: add_button, update_button, hide_button, show_button, add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item\n" +
            "- update_button identifies by 'button_id' (then 'label' = new value) or by 'label' (then 'new_label' = new value)\n" +
            "- add_button requires surface (form/main_grid/sub_grid), label, library, function, enable_library, enable_function. Optional: modern_image, tooltip_title, tooltip_description, sequence; grid buttons also support selection_min/selection_max.\n" +
            "- add_split_button requires those same fields plus non-empty items; add_flyout_static requires surface, label, items. Each item requires label, library, function, enable_library, enable_function. hide/show_button require button_id. hide/show_flyout_item require item_label and flyout_id or flyout_label.\n" +
            "- Read docs://instructions_for_manage_ribbon BEFORE update: it specifies the JSON string format, required and optional fields for every operation, and examples. Do not guess fields.\n" +
            "- entity_name and web-resource fields resolve Display Name contains first, then logical/unique/schema\n" +
            "- NOT for the modern Power Fx command bar (appaction)\n\n" +

            "RELATED TOOLS:\n" +
            "- manage_commanding(resource='command') → modern Power Fx command bar (appaction)\n" +
            "- inspect_diagnostics(resource='system_jobs') → poll the PublishAll async job\n" +
            "- manage_admin(resource='publish') → manual publish if the async publish did not finish\n" +
            "- manage_assets(resource='webresource') → list/verify web resources used as button libraries and icons")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            McpServer server,
            [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name. Required: detail/update/undo/buttons.")] string entity_name = "",
            [Description(OperationsDescription)] string operations = "",
            [Description("undo: backup file path from result.backupPath. update: alternatively, inline RibbonDiffXml or a file path; applied as a patch preserving missing existing elements. If operations is provided it takes precedence.")] string ribbonxml = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageRibbonTool(conn.OrgService, conn.Options, conn.Context);
                return worker.manage_ribbon(server, action, entity_name, operations, ribbonxml);
            }, cancellationToken);
        }

        public async Task<CallToolResult> manage_ribbon(
            McpServer server,
            [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name. Required: detail/update/undo/buttons.")] string entity_name = "",
            [Description(OperationsDescription)] string operations = "",
            [Description("undo: backup file path from result.backupPath. update: alternatively, inline RibbonDiffXml or a file path; applied as a patch preserving missing existing elements. If operations is provided it takes precedence.")] string ribbonxml = "")
        {
            var actionName = (action ?? "").Trim().ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(actionName))
                return Error("action is required.",
                    "Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return ListEntitiesWithRibbon();

                    case "buttons":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='buttons'.",
                                "Provide entity_name, e.g. entity_name='account'. Use inspect_metadata(resource='tables') to find valid entity names.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return entityError;
                            var busy = TryBlockRibbonReadbackWhenBusy("buttons", entityName);
                            return busy ?? ListRibbonButtons(entityName);
                        }

                    case "detail":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='detail'.",
                                "Provide entity_name, e.g. entity_name='account'. Use inspect_metadata(resource='tables') to find valid entity names.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return entityError;
                            var busy = TryBlockRibbonReadbackWhenBusy("detail", entityName);
                            return busy ?? DetailRibbon(entityName);
                        }

                    case "update":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='update'.",
                                "Provide entity_name, e.g. entity_name='account'. Use inspect_metadata(resource='tables') to find valid entity names.");
                        _workspaceFolder = await WorkspaceFolderHelper.GetAsync(server);
                        {
                            var (updateEntityName, updateEntityError) = ResolveEntityLogicalName(entity_name);
                            if (updateEntityError != null)
                                return updateEntityError;
                            var updateBusy = TryBlockRibbonActionWhenBusy("update", updateEntityName, isReadback: false);
                            if (updateBusy != null) return updateBusy;

                            // Gate destructive ribbon mutation behind System Administrator role.
                            if (RoleGateHelper.EnsureSystemAdministrator(_orgService) is { } updateGate)
                                return updateGate;

                            if (_options.DryRun)
                                return DryRun($"Would UPDATE ribbon for entity '{updateEntityName}'.",
                                    new ManageRibbonResult { Action = "update", EntityName = updateEntityName, Status = "not_executed", Published = false });

                            if (!string.IsNullOrWhiteSpace(operations))
                                return UpdateRibbonFromOperations(
                                    updateEntityName,
                                    operations.Trim());

                            if (!string.IsNullOrWhiteSpace(ribbonxml))
                                return UpdateRibbon(updateEntityName, ribbonxml.Trim());

                            return Error(
                                "'operations' is required for action='update'.",
                                "Provide a JSON array of ribbon operations, e.g. " +
                                "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");
                        }

                    case "undo":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return Error("entity_name is required for action='undo'.",
                                "Provide entity_name, e.g. entity_name='account'. Use inspect_metadata(resource='tables') to find valid entity names.");
                        if (string.IsNullOrWhiteSpace(ribbonxml))
                            return Error(
                                "ribbonxml is required for action='undo'.",
                                "Provide backup file path from {workspace}/.devkit/manage_ribbon/{entity}/.");
                        {
                            var (entityName, entityError) = ResolveEntityLogicalName(entity_name);
                            if (entityError != null) return entityError;
                            var undoBusy = TryBlockRibbonActionWhenBusy("undo", entityName, isReadback: false);

                            // Gate destructive ribbon restore behind System Administrator role.
                            if (RoleGateHelper.EnsureSystemAdministrator(_orgService) is { } undoGate)
                                return undoGate;

                            if (_options.DryRun)
                                return DryRun($"Would RESTORE ribbon for entity '{entityName}' from backup.",
                                    new ManageRibbonResult { Action = "undo", EntityName = entityName, Status = "not_executed", Published = false });
                            return undoBusy ?? UndoRibbon(entityName, ribbonxml.Trim());
                        }

                    default:
                        return Error($"Invalid action '{action}'.",
                            "Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");
                }
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }
    }
}
