using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
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
    [McpServerToolType]
    public partial class ManageCommandTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageCommandTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageCommandTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        private static readonly Dictionary<int, string> LocationMap = new()
        {
            [0] = "Form",
            [1] = "MainGrid",
            [2] = "SubGrid",
            [3] = "AssociatedGrid",
            [4] = "QuickForm",
            [5] = "GlobalHeader",
            [6] = "Dashboard"
        };

        private static readonly Dictionary<int, string> TypeMap = new()
        {
            [0] = "Standard",
            [1] = "Dropdown",
            [2] = "Split",
            [3] = "Group"
        };

        private static readonly Dictionary<int, string> OnClickEventTypeMap = new()
        {
            [0] = "None",
            [1] = "Formula",
            [2] = "JavaScript"
        };

        private static readonly Dictionary<int, string> VisibilityTypeMap = new()
        {
            [0] = "None",
            [1] = "Formula",
            [2] = "ClassicRules"
        };

        private static readonly Dictionary<int, string> OriginMap = new()
        {
            [0] = "Default",
            [1] = "Migrated",
            [2] = "EnhancedMigrated"
        };

        private static readonly Dictionary<int, string> ContextMap = new()
        {
            [0] = "All",
            [1] = "Entity"
        };

        private static readonly HashSet<string> ValidScopes = new(StringComparer.OrdinalIgnoreCase)
        {
            "app",
            "table",
            "global"
        };

        private static readonly Dictionary<string, int> LocationFilterMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["form"] = 0,
            ["main_grid"] = 1,
            ["sub_grid"] = 2,
            ["associated_grid"] = 3,
            ["quick_form"] = 4,
            ["global_header"] = 5,
            ["dashboard"] = 6
        };

        private static readonly Dictionary<string, int> OriginFilterMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["default"] = 0,
            ["migrated"] = 1,
            ["enhanced_migrated"] = 2
        };

        private static readonly Dictionary<string, int> ActionTypeFilterMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["none"] = 0,
            ["formula"] = 1,
            ["javascript"] = 2
        };

        // Ribbon-style list: surface → (RibbonLocationFilter, GroupSuffix, appaction location value)
        private static readonly Dictionary<string, (RibbonLocationFilters Filter, string GroupSuffix, int LocationValue)> CommandSurfaceMap = new()
        {
            ["form"]      = (RibbonLocationFilters.Form,         "MainTab.Save",    0),
            ["main_grid"] = (RibbonLocationFilters.HomepageGrid, "MainTab.Actions", 1),
            ["sub_grid"]  = (RibbonLocationFilters.SubGrid,      "MainTab.Actions", 2),
        };

        [McpServerTool(Name = "manage_command", Title = "Manage modern command bar buttons (appaction) — ONLY for explicitly modern/Power Fx requests",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageCommandResult)),
        Description(
            "Manage modern model-driven app command bar appactions, including buttons, dropdowns, split buttons, visibility and enable rules. Use only for explicitly modern/Power Fx/command designer requests; for classic or generic ribbon buttons use manage_ribbon. When in doubt → manage_ribbon.\n\n" +
            "Commands can be app-, table-, or global-scoped. origin=default excludes auto-migrated commands from list results. hide/show on an OOB command creates an app-scoped override row; showing an OOB command again deletes the override. create, update and hide/show auto-publish the affected entity so changes are visible immediately; flyout/split operations do not publish — call publish_customizations afterward if changes are not visible. If an error identifies a classic ribbon button, stop and report it. Entity, app and web-resource names resolve display name first, then logical/unique/schema; ambiguous matches require disambiguation.\n\n" +
            "Actions cover list/detail/create/update/delete/hide/show and flyout/split operations. Use include_rules or include_children to inspect related records.\n" +
            "delete removes an unmanaged appaction and its child commands and exclusive rules, then publishes its context table if present. Select by GUID or by exact label/uniquename, location and scope (app/table/global). Read docs://instructions_for_manage_command for delete inputs and examples.\n\n" +
            "WHEN TO USE:\n" +
            "- Add/update modern command bar buttons in MDA (Power Fx / appaction only)\n" +
            "- Hide/show OOB or custom commands in a specific app\n" +
            "- Inspect appactionrule visibility/enable rules (include_rules=true)\n\n" +
            "RELATED TOOLS:\n" +
            "- manage_ribbon → classic/legacy RibbonDiffXml buttons (NOT modern appaction)\n" +
            "- manage_app → app module metadata for app-scoped commands\n" +
            "- inspect_metadata(resource='tables') → entity logical/display names for entity_name\n" +
            "- publish_customizations → publish after flyout/split item changes (create/update/hide/show already auto-publish)")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("list/detail/create/update/delete/hide/show/add_flyout/update_flyout/add_flyout_item/remove_flyout_item/add_split_button/update_split_button.")] string action = "",
            [Description("appaction GUID. Required for update, update_flyout, update_split_button, and remove_flyout_item. For detail use command_id or label with entity_name and location; hide/show also support label-based lookup. For delete, a GUID is sufficient and takes precedence over name-based selectors.")] string command_id = "",
            [Description("Entity Display Name or logical name. Required for create in app/table scope. For delete by name, supply for a table-specific command.")] string entity_name = "",
            [Description("form/main_grid/sub_grid/associated_grid/quick_form/global_header/dashboard. Required for create and delete by name.")] string location = "",
            [Description("App module GUID. Supply app_id or app_name for app-scope creation or deletion by name.")] string app_id = "",
            [Description("Button label. Required for create. For delete by name use an exact label or uniquename.")] string label = "",
            [Description("none/javascript/formula. Default 'none'.")] string onclick_type = "",
            [Description("WR name or GUID for onclick.")] string javascript_webresource = "",
            [Description("Handler (e.g. 'Namespace.fn').")] string javascript_function = "",
            [Description("Icon name (e.g. 'SalesPlaybook'). 'none' = clear.")] string font_icon = "",
            [Description("Icon WR name/GUID. 'none' = clear.")] string icon_webresource = "",
            [Description("Tooltip title for create/update and flyout/split button create/update.")] string tooltip_title = "",
            [Description("Tooltip description for create/update and flyout/split button create/update.")] string tooltip_description = "",
            [Description("Order. Default 100 on create.")] int sequence = 0,
            [Description("Initial hidden state for create, add_flyout, or add_split_button. add_flyout_item creates a visible item. For existing commands use action='hide' or 'show'.")] bool hidden = false,
            [Description("MDA name contains for list. For delete, supply the app display or unique name when app_id is omitted.")] string app_name = "",
            [Description("default/migrated/enhanced_migrated/all.")] string origin = "",
            [Description("javascript/formula/none filter.")] string action_type = "",
            [Description("Command name contains.")] string name_filter = "",
            [Description("Add appactionrule records.")] bool include_rules = false,
            [Description("Dropdown/split items.")] bool include_children = false,
            [Description("1–500.")] int max_records = 50,
            [Description("add_flyout/add_split_button: non-empty JSON array serialized as a string. Each item requires label; optional string fields: onclick_type (none/javascript/formula), javascript_webresource, javascript_function, sequence (integer encoded as a JSON string, e.g. \"10000\"). Omitted or invalid sequence defaults to item order in steps of 10000.")] string items = "",
            [Description("GUID of Dropdown or Split Button. Required: add_flyout_item.")] string flyout_command_id = "",
            [Description("Command scope for standard buttons: app (default for create), table (across apps), or global (across tables and apps). Delete by name infers app if app_id/app_name is present, table if entity_name is present, or global otherwise.")] string scope = "",
            [Description("Solution unique name or display name to add created appaction component to.")] string solution_name = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default,
            [Description("Exact appaction unique name. For delete by name, supply either uniquename or label.")] string uniquename = "")
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageCommandTool(conn.OrgService, conn.Options, conn.Context);
                return System.Threading.Tasks.Task.FromResult(worker.manage_command(action, command_id, entity_name, location, app_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, app_name, origin, action_type, name_filter, include_rules, include_children, max_records, items, flyout_command_id, scope, solution_name, uniquename));
            }, cancellationToken);
        }

        public CallToolResult manage_command(
            [Description("list/detail/create/update/delete/hide/show/add_flyout/update_flyout/add_flyout_item/remove_flyout_item/add_split_button/update_split_button.")] string action = "",
            [Description("appaction GUID. Required for update, update_flyout, update_split_button, and remove_flyout_item. For detail use command_id or label with entity_name and location; hide/show also support label-based lookup. For delete, a GUID is sufficient and takes precedence over name-based selectors.")] string command_id = "",
            [Description("Entity Display Name or logical name. Required for create in app/table scope. For delete by name, supply for a table-specific command.")] string entity_name = "",
            [Description("form/main_grid/sub_grid/associated_grid/quick_form/global_header/dashboard. Required for create and delete by name.")] string location = "",
            [Description("App module GUID. Supply app_id or app_name for app-scope creation or deletion by name.")] string app_id = "",
            [Description("Button label. Required for create. For delete by name use an exact label or uniquename.")] string label = "",
            [Description("none/javascript/formula. Default 'none'.")] string onclick_type = "",
            [Description("WR name or GUID for onclick.")] string javascript_webresource = "",
            [Description("Handler (e.g. 'Namespace.fn').")] string javascript_function = "",
            [Description("Icon name (e.g. 'SalesPlaybook'). 'none' = clear.")] string font_icon = "",
            [Description("Icon WR name/GUID. 'none' = clear.")] string icon_webresource = "",
            [Description("Tooltip title for create/update and flyout/split button create/update.")] string tooltip_title = "",
            [Description("Tooltip description for create/update and flyout/split button create/update.")] string tooltip_description = "",
            [Description("Order. Default 100 on create.")] int sequence = 0,
            [Description("Initial hidden state for create, add_flyout, or add_split_button. add_flyout_item creates a visible item. For existing commands use action='hide' or 'show'.")] bool hidden = false,
            [Description("MDA name contains for list. For delete, supply the app display or unique name when app_id is omitted.")] string app_name = "",
            [Description("default/migrated/enhanced_migrated/all.")] string origin = "",
            [Description("javascript/formula/none filter.")] string action_type = "",
            [Description("Command name contains.")] string name_filter = "",
            [Description("Add appactionrule records.")] bool include_rules = false,
            [Description("Dropdown/split items.")] bool include_children = false,
            [Description("1–500.")] int max_records = 50,
            [Description("add_flyout/add_split_button: non-empty JSON array serialized as a string. Each item requires label; optional string fields: onclick_type (none/javascript/formula), javascript_webresource, javascript_function, sequence (integer encoded as a JSON string, e.g. \"10000\"). Omitted or invalid sequence defaults to item order in steps of 10000.")] string items = "",
            [Description("GUID of Dropdown or Split Button. Required: add_flyout_item.")] string flyout_command_id = "",
            [Description("Command scope for standard buttons: app (default for create), table (across apps), or global (across tables and apps). Delete by name infers app if app_id/app_name is present, table if entity_name is present, or global otherwise.")] string scope = "",
            [Description("Solution unique name or display name to add created appaction component to.")] string solution_name = "",
            [Description("Exact appaction unique name. For delete by name, supply either uniquename or label.")] string uniquename = "")
        {
            var actionName = (action ?? "").Trim().ToLowerInvariant();
            if (string.IsNullOrWhiteSpace(actionName))
                return Error(
                    "action is required.",
                    "Valid values: 'list', 'detail', 'create', 'update', 'delete', 'hide', 'show', " +
                    "'add_flyout', 'update_flyout', 'add_flyout_item', 'remove_flyout_item', " +
                    "'add_split_button', 'update_split_button'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return string.IsNullOrWhiteSpace(scope)
                            ? HandleList(entity_name, location, app_name, origin, action_type, name_filter, include_rules, include_children, max_records)
                            : HandleListScoped(entity_name, location, app_name, origin, action_type, name_filter, include_rules, include_children, max_records, scope);

                    case "detail":
                        if (string.IsNullOrWhiteSpace(command_id) && string.IsNullOrWhiteSpace(label))
                            return Error("command_id or label is required for action='detail'.",
                                "Pass command_id (appaction GUID), or label together with entity_name and location for fuzzy lookup. Use manage_command(action='list') to find command IDs.");
                        if (!string.IsNullOrWhiteSpace(command_id))
                        {
                            if (!Guid.TryParse(command_id.Trim(), out _))
                                return Error($"'{command_id.Trim()}' is not a valid GUID.",
                                    "Pass an appaction GUID. Use manage_command(action='list') to find command IDs.");
                            return GetDetail(command_id.Trim(), include_rules, include_children);
                        }
                        return string.IsNullOrWhiteSpace(scope)
                            ? GetDetailByLabel((label ?? "").Trim(), (entity_name ?? "").Trim(), (location ?? "").Trim(), include_rules, include_children)
                            : GetDetailByLabelScoped((label ?? "").Trim(), (entity_name ?? "").Trim(), (location ?? "").Trim(), include_rules, include_children, scope);

                    case "create":
                        return string.IsNullOrWhiteSpace(scope) && string.IsNullOrWhiteSpace(solution_name)
                            ? HandleCreate(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden)
                            : HandleCreateScoped(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, scope, solution_name);

                    case "update":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleUpdate(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence)
                            : HandleUpdateWithSolution(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, solution_name);

                    case "delete":
                        return HandleDelete(command_id, entity_name, location, app_id, app_name, label, uniquename, scope);

                    case "hide":
                        return string.IsNullOrWhiteSpace(scope) && string.IsNullOrWhiteSpace(solution_name)
                            ? HandleHideShow(command_id, entity_name, location, app_id, app_name, label, wantHidden: true)
                            : HandleHideShowScoped(command_id, entity_name, location, app_id, app_name, label, wantHidden: true, scope, solution_name);

                    case "show":
                        return string.IsNullOrWhiteSpace(scope) && string.IsNullOrWhiteSpace(solution_name)
                            ? HandleHideShow(command_id, entity_name, location, app_id, app_name, label, wantHidden: false)
                            : HandleHideShowScoped(command_id, entity_name, location, app_id, app_name, label, wantHidden: false, scope, solution_name);

                    case "add_flyout":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleAddFlyout(entity_name, location, app_id, app_name, label, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden)
                            : HandleAddFlyout(entity_name, location, app_id, app_name, label, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, solution_name);

                    case "update_flyout":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleUpdateFlyout(command_id, label, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence)
                            : HandleUpdateFlyoutWithSolution(command_id, label, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, solution_name);

                    case "add_flyout_item":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleAddFlyoutItem(flyout_command_id, label, onclick_type, javascript_webresource, javascript_function, sequence, hidden)
                            : HandleAddFlyoutItem(flyout_command_id, label, onclick_type, javascript_webresource, javascript_function, sequence, hidden, solution_name);

                    case "remove_flyout_item":
                        return HandleRemoveFlyoutItem(command_id);

                    case "add_split_button":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleAddSplitButton(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden)
                            : HandleAddSplitButton(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, solution_name);

                    case "update_split_button":
                        return string.IsNullOrWhiteSpace(solution_name)
                            ? HandleUpdateSplitButton(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence)
                            : HandleUpdateSplitButtonWithSolution(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, solution_name);

                    default:
                        return Error(
                        $"Invalid action '{actionName}'.",
                        "Valid values: 'list', 'detail', 'create', 'update', 'delete', 'hide', 'show', " +
                        "'add_flyout', 'update_flyout', 'add_flyout_item', 'remove_flyout_item', " +
                        "'add_split_button', 'update_split_button'.");
                }
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }
    }
}
