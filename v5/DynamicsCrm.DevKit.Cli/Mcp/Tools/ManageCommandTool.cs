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

        public ManageCommandTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
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
            "Manage modern model-driven app command bar appactions, including buttons, dropdowns, split buttons, visibility and enable rules. Use only for explicitly modern/Power Fx/command designer requests; for classic or generic ribbon buttons use manage_ribbon.\n\n" +
            "Commands are app-scoped. origin=default excludes auto-migrated commands. If an error identifies a classic ribbon button, stop and report it. Entity, app and web-resource names resolve display name first, then logical/unique/schema; ambiguous matches require disambiguation.\n\n" +
            "Actions and their parameters cover list/detail/create/update/hide/show and flyout/split operations. Use include_rules or include_children to inspect related records.")]
        public CallToolResult manage_command(
            [Description("list/detail/create/update/hide/show/add_flyout/update_flyout/add_flyout_item/remove_flyout_item/add_split_button/update_split_button.")] string action = "",
            [Description("appaction GUID. Required for update, update_flyout, update_split_button, and remove_flyout_item. For detail use command_id or label with entity_name and location; hide/show also support label-based lookup.")] string command_id = "",
            [Description("Entity Display Name or logical name. Required: create.")] string entity_name = "",
            [Description("form/main_grid/sub_grid/associated_grid/quick_form/global_header/dashboard. Required: create.")] string location = "",
            [Description("App module GUID. Required: create (or app_name).")] string app_id = "",
            [Description("Button label. Required: create.")] string label = "",
            [Description("none/javascript/formula. Default 'none'.")] string onclick_type = "",
            [Description("WR name or GUID for onclick.")] string javascript_webresource = "",
            [Description("Handler (e.g. 'Namespace.fn').")] string javascript_function = "",
            [Description("Icon name (e.g. 'SalesPlaybook'). 'none' = clear.")] string font_icon = "",
            [Description("Icon WR name/GUID. 'none' = clear.")] string icon_webresource = "",
            [Description("Tooltip title for create/update and flyout/split button create/update.")] string tooltip_title = "",
            [Description("Tooltip description for create/update and flyout/split button create/update.")] string tooltip_description = "",
            [Description("Order. Default 100 on create.")] int sequence = 0,
            [Description("Initial hidden state for create, add_flyout, or add_split_button. add_flyout_item creates a visible item. For existing commands use action='hide' or 'show'.")] bool hidden = false,
            [Description("MDA name contains.")] string app_name = "",
            [Description("default/migrated/enhanced_migrated/all.")] string origin = "",
            [Description("javascript/formula/none filter.")] string action_type = "",
            [Description("Command name contains.")] string name_filter = "",
            [Description("Add appactionrule records.")] bool include_rules = false,
            [Description("Dropdown/split items.")] bool include_children = false,
            [Description("1–500.")] int max_records = 50,
            [Description("add_flyout/add_split_button: non-empty JSON array serialized as a string. Each item requires label; optional string fields: onclick_type (none/javascript/formula), javascript_webresource, javascript_function, sequence (integer encoded as a JSON string, e.g. \"10000\"). Omitted or invalid sequence defaults to item order in steps of 10000.")] string items = "",
            [Description("GUID of Dropdown or Split Button. Required: add_flyout_item.")] string flyout_command_id = "")
        {
            var actionName = (action ?? "").Trim().ToLowerInvariant();
            if (string.IsNullOrWhiteSpace(actionName))
                return Error(
                    "action is required.",
                    "Valid values: 'list', 'detail', 'create', 'update', 'hide', 'show', " +
                    "'add_flyout', 'update_flyout', 'add_flyout_item', 'remove_flyout_item', " +
                    "'add_split_button', 'update_split_button'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return HandleList(entity_name, location, app_name, origin, action_type, name_filter, include_rules, include_children, max_records);

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
                        return GetDetailByLabel(label.Trim(), entity_name.Trim(), location.Trim(), include_rules, include_children);

                    case "create":
                        return HandleCreate(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden);

                    case "update":
                        return HandleUpdate(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence);

                    case "hide":
                        return HandleHideShow(command_id, entity_name, location, app_id, app_name, label, wantHidden: true);

                    case "show":
                        return HandleHideShow(command_id, entity_name, location, app_id, app_name, label, wantHidden: false);

                    case "add_flyout":
                        return HandleAddFlyout(entity_name, location, app_id, app_name, label, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden);

                    case "update_flyout":
                        return HandleUpdateFlyout(command_id, label, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence);

                    case "add_flyout_item":
                        return HandleAddFlyoutItem(flyout_command_id, label, onclick_type, javascript_webresource, javascript_function, sequence, hidden);

                    case "remove_flyout_item":
                        return HandleRemoveFlyoutItem(command_id);

                    case "add_split_button":
                        return HandleAddSplitButton(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, items, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden);

                    case "update_split_button":
                        return HandleUpdateSplitButton(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence);

                    default:
                        return Error(
                        $"Invalid action '{actionName}'.",
                        "Valid values: 'list', 'detail', 'create', 'update', 'hide', 'show', " +
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
