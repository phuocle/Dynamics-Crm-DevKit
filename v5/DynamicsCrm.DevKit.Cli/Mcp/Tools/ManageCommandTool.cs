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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageCommandTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageCommandTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
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

        [McpServerTool(Name = "manage_command", Title = "Manage modern command bar buttons in model-driven apps",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageCommandResult)),
        Description(
            "Manage modern command bar buttons (appaction) in Model-Driven Apps. " +
            "Includes visibility/enable rules (appactionrule) and migration status.\n\n" +

            "ACTIONS: list, detail, create, update\n" +
            "- list: Filter commands by entity, location, app, origin, action type\n" +
            "- detail: Full details including rules, children, component library info. Required: command_id\n" +
            "- create: Create a new command button. Required: entity_name + location + label + app_id\n" +
            "- update: Update an existing command. Required: command_id + at least one field to change\n\n" +

            "WORKFLOW: list/detail to inspect → create/update to modify\n" +
            "Auto-resolves app by name for create. Validates entity + location before write.\n\n" +

            "TIPS:\n" +
            "- Use origin='default' to exclude hundreds of auto-migrated system commands\n" +
            "- Commands are app-scoped — same entity can differ across apps\n" +
            "- Related: manage_ribbon (old-style ribbon XML), manage_form (form layout)")]
        public CallToolResult manage_command(
            [Description("Action: 'list', 'detail', 'create', or 'update'.")] string action,
            [Description("GUID of a specific appaction record. Required for detail/update.")] string command_id = "",
            [Description("Filter by entity logical name (e.g., 'account'). Required for create.")] string entity_name = "",
            [Description("Filter by location: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'. Required for create.")] string location = "",
            [Description("App module GUID. Required for create (or use app_name).")] string app_id = "",
            [Description("Button label text. Required for create; optional for update.")] string label = "",
            [Description("OnClick event type: 'none', 'javascript', 'formula'. Default: 'none'.")] string onclick_type = "",
            [Description("JavaScript web resource name or GUID for onclick handler.")] string javascript_webresource = "",
            [Description("JavaScript function name for onclick handler (e.g., 'Namespace.functionName').")] string javascript_function = "",
            [Description("Font icon name (e.g., 'SalesPlaybook').")] string font_icon = "",
            [Description("Button sequence/order. Default: 100 for create.")] int sequence = 0,
            [Description("Hide the button. Default: false.")] bool hidden = false,
            [Description("Filter by Model-Driven App name (contains match). Also used to resolve app for create.")] string app_name = "",
            [Description("'default' (custom), 'migrated' (from ribbon), 'enhanced_migrated', or 'all'. Empty = all.")] string origin = "",
            [Description("Filter by onclick event type: 'javascript', 'formula' (Power Fx), 'none'. Empty = all.")] string action_type = "",
            [Description("Filter by command name (contains match).")] string name_filter = "",
            [Description("Include associated appactionrule records with JSON definitions. Default: false.")] bool include_rules = false,
            [Description("Include child commands (dropdown/split button items). Default: false.")] bool include_children = false,
            [Description("Max commands (1-500). Default: 50.")] int max_records = 50)
        {
            var actionName = (action ?? "").Trim().ToLowerInvariant();
            if (string.IsNullOrWhiteSpace(actionName))
                return ErrorResult("Error: action is required. Valid actions: 'list', 'detail', 'create', 'update'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return HandleList(entity_name, location, app_name, origin, action_type, name_filter, include_rules, include_children, max_records);

                    case "detail":
                        if (string.IsNullOrWhiteSpace(command_id))
                            return ErrorResult("Error: command_id is required for action='detail'.");
                        if (!Guid.TryParse(command_id.Trim(), out _))
                            return ErrorResult($"Error: '{command_id.Trim()}' is not a valid GUID.");
                        return GetDetail(command_id.Trim(), include_rules, include_children);

                    case "create":
                        return HandleCreate(entity_name, location, app_id, app_name, label, onclick_type, javascript_webresource, javascript_function, font_icon, sequence, hidden);

                    case "update":
                        return HandleUpdate(command_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, sequence, hidden);

                    default:
                        return ErrorResult($"Error: Invalid action '{actionName}'. Valid actions: 'list', 'detail', 'create', 'update'.");
                }
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: {ex.Message}");
            }
        }

        // ── List ──────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string location, string appName, string origin, string actionType, string nameFilter, bool includeRules, bool includeChildren, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(location))
            {
                if (!LocationFilterMap.ContainsKey(location.Trim()))
                    return ErrorResult($"Error: Invalid location '{location.Trim()}'. Use 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', or 'dashboard'.");
            }

            if (!string.IsNullOrWhiteSpace(origin) && !origin.Trim().Equals("all", StringComparison.OrdinalIgnoreCase))
            {
                if (!OriginFilterMap.ContainsKey(origin.Trim()))
                    return ErrorResult($"Error: Invalid origin '{origin.Trim()}'. Use 'default', 'migrated', 'enhanced_migrated', or 'all'.");
            }

            if (!string.IsNullOrWhiteSpace(actionType))
            {
                if (!ActionTypeFilterMap.ContainsKey(actionType.Trim()))
                    return ErrorResult($"Error: Invalid action_type '{actionType.Trim()}'. Use 'javascript', 'formula', or 'none'.");
            }

            if (maxRecords <= 0)
                return ErrorResult("Error: max_records must be between 1 and 500.");
            if (maxRecords > 500) maxRecords = 500;

            return GetList(entityName, location, appName, origin, actionType, nameFilter, includeRules, includeChildren, maxRecords);
        }

        private CallToolResult GetList(string entityName, string location, string appName, string origin, string actionType, string nameFilter, bool includeRules, bool includeChildren, int maxRecords)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(entityName))
                filters.AppendLine($"      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName.Trim().ToLowerInvariant())}'/>");

            if (!string.IsNullOrWhiteSpace(location) && LocationFilterMap.TryGetValue(location.Trim(), out var locValue))
                filters.AppendLine($"      <condition attribute='location' operator='eq' value='{locValue}'/>");

            if (!string.IsNullOrWhiteSpace(origin) && !origin.Trim().Equals("all", StringComparison.OrdinalIgnoreCase) && OriginFilterMap.TryGetValue(origin.Trim(), out var origValue))
                filters.AppendLine($"      <condition attribute='origin' operator='eq' value='{origValue}'/>");

            if (!string.IsNullOrWhiteSpace(actionType) && ActionTypeFilterMap.TryGetValue(actionType.Trim(), out var actValue))
                filters.AppendLine($"      <condition attribute='onclickeventtype' operator='eq' value='{actValue}'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            var appFilter = "";
            if (!string.IsNullOrWhiteSpace(appName))
                appFilter = $"\n    <link-entity name='appmodule' from='appmoduleid' to='appmoduleid' alias='app'>\n      <attribute name='name'/>\n      <filter>\n        <condition attribute='name' operator='like' value='%{EscapeXml(appName.Trim())}%'/>\n      </filter>\n    </link-entity>";
            else
                appFilter = "\n    <link-entity name='appmodule' from='appmoduleid' to='appmoduleid' link-type='outer' alias='app'>\n      <attribute name='name'/>\n    </link-entity>";

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='buttonlabeltext'/>
    <attribute name='type'/>
    <attribute name='location'/>
    <attribute name='contextvalue'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='fonticon'/>
    <attribute name='origin'/>
    <attribute name='sequence'/>
    <attribute name='hidden'/>
    <attribute name='isdisabled'/>
    <attribute name='visibilitytype'/>
    <attribute name='parentappactionid'/>
    <attribute name='clienttype'/>
    <attribute name='appmoduleid'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='location'/>
    <order attribute='sequence'/>{appFilter}
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
            {
                var emptyResult = new ManageCommandResult { Action = "list", Status = "success", TotalCount = 0, Commands = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = "0 commands found." }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var commands = result.Entities.Select(MapCommandEntry).ToList();

            if (includeRules)
            {
                foreach (var cmd in commands)
                    cmd.Rules = GetRulesForCommand(cmd.CommandId);
            }

            if (includeChildren)
            {
                foreach (var cmd in commands)
                    cmd.Children = GetChildCommands(cmd.CommandId);
            }

            var sb = new StringBuilder(commands.Count * 150 + 256);
            var countWord = commands.Count == 1 ? "command" : "commands";
            sb.AppendLine($"[Commands] {commands.Count} {countWord}");
            sb.AppendLine();
            sb.AppendLine("#\tname\tentity\tlocation\ttype\tonClick\tvisibility\torigin\tappName\tbuttonLabel\tsequence");

            for (var i = 0; i < commands.Count; i++)
            {
                var c = commands[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(c.Name)}\t{c.Entity}\t{c.Location}\t{c.Type}\t{c.OnClickEventType}\t{c.VisibilityType}\t{c.Origin}\t{EscapeTab(c.AppName ?? "")}\t{EscapeTab(c.ButtonLabel ?? "")}\t{c.Sequence}");
            }

            if (includeRules)
            {
                var commandsWithRules = commands.Where(c => c.Rules != null && c.Rules.Count > 0).ToList();
                if (commandsWithRules.Count > 0)
                {
                    sb.AppendLine();
                    foreach (var cmd in commandsWithRules)
                    {
                        sb.AppendLine($"[Rules for {EscapeTab(cmd.Name)}] {cmd.Rules.Count} total");
                        sb.AppendLine("#\truleName\truleType\tdefinition");
                        for (var j = 0; j < cmd.Rules.Count; j++)
                        {
                            var r = cmd.Rules[j];
                            sb.AppendLine($"{j + 1}\t{EscapeTab(r.Name)}\t{r.RuleType}\t{EscapeTab(Truncate(r.Definition, 200))}");
                        }
                        sb.AppendLine();
                    }
                }
            }

            if (includeChildren)
            {
                var commandsWithChildren = commands.Where(c => c.Children != null && c.Children.Count > 0).ToList();
                if (commandsWithChildren.Count > 0)
                {
                    sb.AppendLine();
                    foreach (var cmd in commandsWithChildren)
                    {
                        sb.AppendLine($"[Children of {EscapeTab(cmd.Name)}] {cmd.Children.Count} total");
                        sb.AppendLine("#\tname\tbuttonLabel\ttype\tonClickEventType\tsequence");
                        for (var j = 0; j < cmd.Children.Count; j++)
                        {
                            var c2 = cmd.Children[j];
                            sb.AppendLine($"{j + 1}\t{EscapeTab(c2.Name)}\t{EscapeTab(c2.ButtonLabel ?? "")}\t{c2.Type}\t{c2.OnClickEventType}\t{c2.Sequence}");
                        }
                        sb.AppendLine();
                    }
                }
            }

            var structured = new ManageCommandResult
            {
                Action = "list",
                Status = "success",
                TotalCount = commands.Count,
                Commands = commands
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Detail ──────────────────────────────────────────────

        private CallToolResult GetDetail(string commandId, bool includeRules, bool includeChildren)
        {
            var fetchXml = $@"<fetch>
  <entity name='appaction'>
    <all-attributes/>
    <filter>
      <condition attribute='appactionid' operator='eq' value='{EscapeXml(commandId)}'/>
    </filter>
    <link-entity name='appmodule' from='appmoduleid' to='appmoduleid' link-type='outer' alias='app'>
      <attribute name='name'/>
    </link-entity>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: Command '{commandId}' not found.");

            var entity = result.Entities[0];
            var entry = MapCommandEntry(entity);

            if (includeRules)
                entry.Rules = GetRulesForCommand(commandId);

            if (includeChildren)
                entry.Children = GetChildCommands(commandId);

            ResolveWebResourceNames(entity, entry);
            ResolveComponentLibraryNames(entity, entry);

            var sb = new StringBuilder(1024);
            sb.AppendLine($"[Command] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"commandId: {entry.CommandId}");
            sb.AppendLine($"name: {entry.Name}");
            sb.AppendLine($"uniqueName: {entry.UniqueName}");
            if (!string.IsNullOrEmpty(entry.ButtonLabel))
                sb.AppendLine($"buttonLabel: {entry.ButtonLabel}");
            sb.AppendLine($"entity: {entry.Entity}");
            sb.AppendLine($"location: {entry.Location}");
            sb.AppendLine($"type: {entry.Type}");
            sb.AppendLine($"origin: {entry.Origin}");
            sb.AppendLine($"onClickEventType: {entry.OnClickEventType}");
            if (!string.IsNullOrEmpty(entry.JavaScriptFunction))
                sb.AppendLine($"javaScriptFunction: {entry.JavaScriptFunction}");
            if (!string.IsNullOrEmpty(entry.JavaScriptWebResource))
                sb.AppendLine($"javaScriptWebResource: {entry.JavaScriptWebResource}");
            sb.AppendLine($"visibilityType: {entry.VisibilityType}");
            if (!string.IsNullOrEmpty(entry.FontIcon))
                sb.AppendLine($"fontIcon: {entry.FontIcon}");
            sb.AppendLine($"sequence: {entry.Sequence}");
            sb.AppendLine($"hidden: {(entry.Hidden ? "Yes" : "No")}");
            sb.AppendLine($"isDisabled: {(entry.IsDisabled ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.AppName))
                sb.AppendLine($"appName: {entry.AppName}");
            if (!string.IsNullOrEmpty(entry.ParentCommandId))
                sb.AppendLine($"parentCommandId: {entry.ParentCommandId}");
            if (!string.IsNullOrEmpty(entry.ClientType))
                sb.AppendLine($"clientType: {entry.ClientType}");
            if (!string.IsNullOrEmpty(entry.OnClickComponentLibrary))
                sb.AppendLine($"onClickComponentLibrary: {entry.OnClickComponentLibrary}");
            if (!string.IsNullOrEmpty(entry.VisibilityComponentLibrary))
                sb.AppendLine($"visibilityComponentLibrary: {entry.VisibilityComponentLibrary}");
            if (!string.IsNullOrEmpty(entry.VisibilityFormula))
                sb.AppendLine($"visibilityFormula: {entry.VisibilityFormula}");
            if (!string.IsNullOrEmpty(entry.OnClickFormula))
                sb.AppendLine($"onClickFormula: {entry.OnClickFormula}");

            if (entry.Rules != null && entry.Rules.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"[Rules] {entry.Rules.Count} total");
                sb.AppendLine();
                sb.AppendLine("#\truleName\truleType\tdefinition");
                for (var i = 0; i < entry.Rules.Count; i++)
                {
                    var r = entry.Rules[i];
                    sb.AppendLine($"{i + 1}\t{EscapeTab(r.Name)}\t{r.RuleType}\t{EscapeTab(Truncate(r.Definition, 200))}");
                }
            }

            if (entry.Children != null && entry.Children.Count > 0)
            {
                sb.AppendLine();
                sb.AppendLine($"[Children] {entry.Children.Count} total");
                sb.AppendLine();
                sb.AppendLine("#\tname\tbuttonLabel\ttype\tonClickEventType\tsequence");
                for (var i = 0; i < entry.Children.Count; i++)
                {
                    var c = entry.Children[i];
                    sb.AppendLine($"{i + 1}\t{EscapeTab(c.Name)}\t{EscapeTab(c.ButtonLabel ?? "")}\t{c.Type}\t{c.OnClickEventType}\t{c.Sequence}");
                }
            }

            var structured = new ManageCommandResult
            {
                Action = "detail",
                Status = "success",
                TotalCount = 1,
                Commands = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Create ──────────────────────────────────────────────

        private CallToolResult HandleCreate(string entityName, string location, string appId, string appName, string label, string onclickType, string jsWebResource, string jsFunction, string fontIcon, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return ErrorResult("DRY-RUN: create blocked. Would create appaction command.");

            if (string.IsNullOrWhiteSpace(entityName))
                return ErrorResult("Error: entity_name is required for action='create'.");
            if (string.IsNullOrWhiteSpace(location))
                return ErrorResult("Error: location is required for action='create'.");
            if (string.IsNullOrWhiteSpace(label))
                return ErrorResult("Error: label is required for action='create'.");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return ErrorResult($"Error: Invalid location '{location.Trim()}'. Use 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', or 'dashboard'.");

            var resolvedAppId = ResolveAppId(appId, appName);
            if (resolvedAppId == null)
                return ErrorResult("Error: app_id or app_name is required for action='create'. Provide a valid app module GUID or name.");

            var onclickTypeValue = 0;
            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out onclickTypeValue))
                    return ErrorResult($"Error: Invalid onclick_type '{onclickType.Trim()}'. Use 'none', 'javascript', or 'formula'.");
            }

            var entity = new Entity("appaction");
            entity["contextvalue"] = entityName.Trim().ToLowerInvariant();
            entity["location"] = new OptionSetValue(locationValue);
            entity["buttonlabeltext"] = label.Trim();
            entity["onclickeventtype"] = new OptionSetValue(onclickTypeValue);
            entity["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            entity["type"] = new OptionSetValue(0); // Standard
            entity["sequence"] = sequence > 0 ? sequence : 100;
            entity["hidden"] = hidden;
            entity["isdisabled"] = false;
            entity["origin"] = new OptionSetValue(0); // Default (custom)

            if (!string.IsNullOrWhiteSpace(fontIcon))
                entity["fonticon"] = fontIcon.Trim();

            if (onclickTypeValue == 2) // JavaScript
            {
                if (!string.IsNullOrWhiteSpace(jsWebResource))
                {
                    var wrId = ResolveWebResourceId(jsWebResource.Trim());
                    if (wrId == null)
                        return ErrorResult($"Error: Web resource '{jsWebResource.Trim()}' not found.");
                    entity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                }
                if (!string.IsNullOrWhiteSpace(jsFunction))
                    entity["onclickeventjavascriptfunctionname"] = jsFunction.Trim();
            }

            var newId = _serviceClient.Create(entity);

            var structured = new ManageCommandResult
            {
                Action = "create",
                Status = "success",
                CommandId = newId.ToString(),
                Message = $"Command '{label.Trim()}' created successfully on {entityName.Trim()} ({LocationMap[locationValue]})."
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = structured.Message }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Update ──────────────────────────────────────────────

        private CallToolResult HandleUpdate(string commandId, string label, string onclickType, string jsWebResource, string jsFunction, string fontIcon, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return ErrorResult("DRY-RUN: update blocked. Would update appaction command.");

            if (string.IsNullOrWhiteSpace(commandId))
                return ErrorResult("Error: command_id is required for action='update'.");
            if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                return ErrorResult($"Error: '{commandId.Trim()}' is not a valid GUID.");

            var existing = _serviceClient.Retrieve("appaction", cmdGuid, new ColumnSet("name", "buttonlabeltext"));
            if (existing == null)
                return ErrorResult($"Error: Command '{commandId.Trim()}' not found.");

            var entity = new Entity("appaction", cmdGuid);
            var changes = new List<string>();

            if (!string.IsNullOrWhiteSpace(label))
            {
                entity["buttonlabeltext"] = label.Trim();
                changes.Add($"label='{label.Trim()}'");
            }

            if (sequence > 0)
            {
                entity["sequence"] = sequence;
                changes.Add($"sequence={sequence}");
            }

            entity["hidden"] = hidden;
            changes.Add($"hidden={hidden}");

            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out var onclickValue))
                    return ErrorResult($"Error: Invalid onclick_type '{onclickType.Trim()}'. Use 'none', 'javascript', or 'formula'.");
                entity["onclickeventtype"] = new OptionSetValue(onclickValue);
                changes.Add($"onclickType='{onclickType.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(jsWebResource))
            {
                var wrId = ResolveWebResourceId(jsWebResource.Trim());
                if (wrId == null)
                    return ErrorResult($"Error: Web resource '{jsWebResource.Trim()}' not found.");
                entity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                changes.Add($"jsWebResource='{jsWebResource.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(jsFunction))
            {
                entity["onclickeventjavascriptfunctionname"] = jsFunction.Trim();
                changes.Add($"jsFunction='{jsFunction.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(fontIcon))
            {
                entity["fonticon"] = fontIcon.Trim();
                changes.Add($"fontIcon='{fontIcon.Trim()}'");
            }

            if (changes.Count == 1 && changes[0].StartsWith("hidden="))
            {
                if (!hidden)
                    return ErrorResult("Error: No fields to update. Provide at least one field to change (label, sequence, onclick_type, javascript_webresource, javascript_function, font_icon, or hidden=true).");
            }

            _serviceClient.Update(entity);

            var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
            var message = $"Command '{commandName}' updated: {string.Join(", ", changes)}.";

            var structured = new ManageCommandResult
            {
                Action = "update",
                Status = "success",
                CommandId = commandId.Trim(),
                Message = message
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = message }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Resolution helpers ──────────────────────────────────

        private Guid? ResolveAppId(string appId, string appName)
        {
            if (!string.IsNullOrWhiteSpace(appId))
            {
                if (Guid.TryParse(appId.Trim(), out var parsed))
                    return parsed;
                return null;
            }

            if (string.IsNullOrWhiteSpace(appName))
                return null;

            var fetchXml = $@"<fetch top='2'>
  <entity name='appmodule'>
    <attribute name='appmoduleid'/>
    <attribute name='name'/>
    <filter>
      <condition attribute='name' operator='like' value='%{EscapeXml(appName.Trim())}%'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return null;
            if (result.Entities.Count > 1)
                return null; // ambiguous
            return result.Entities[0].Id;
        }

        private Guid? ResolveWebResourceId(string nameOrGuid)
        {
            if (Guid.TryParse(nameOrGuid, out var parsed))
                return parsed;

            var fetchXml = $@"<fetch top='1'>
  <entity name='webresource'>
    <attribute name='webresourceid'/>
    <filter>
      <condition attribute='name' operator='eq' value='{EscapeXml(nameOrGuid)}'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].Id : null;
        }

        // ── Shared helpers ──────────────────────────────────────────────

        private List<CommandRuleEntry> GetRulesForCommand(string commandId)
        {
            try
            {
                var fetchXml = $@"<fetch>
  <entity name='appactionrule'>
    <attribute name='appactionruleid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='type'/>
    <attribute name='definition'/>
    <attribute name='contextvalue'/>
    <link-entity name='appaction_appactionrule_classicrules' from='appactionruleid' to='appactionruleid' intersect='true'>
      <filter>
        <condition attribute='appactionid' operator='eq' value='{EscapeXml(commandId)}'/>
      </filter>
    </link-entity>
    <order attribute='name'/>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Select(e =>
                {
                    var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value;
                    return new CommandRuleEntry
                    {
                        Name = e.GetAttributeValue<string>("name") ?? "",
                        UniqueName = NullIfEmpty(e.GetAttributeValue<string>("uniquename")),
                        RuleType = typeValue == 0 ? "EnableRule" : typeValue == 1 ? "DisplayRule" : "Unknown",
                        Definition = NullIfEmpty(e.GetAttributeValue<string>("definition")),
                        ContextValue = NullIfEmpty(e.GetAttributeValue<string>("contextvalue"))
                    };
                }).ToList();
            }
            catch (Exception ex)
            {
                return [new CommandRuleEntry { Name = $"[Error] {ex.Message}", RuleType = "Error" }];
            }
        }

        private List<CommandChildEntry> GetChildCommands(string parentCommandId)
        {
            try
            {
                var fetchXml = $@"<fetch>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='buttonlabeltext'/>
    <attribute name='type'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='sequence'/>
    <attribute name='hidden'/>
    <attribute name='isdisabled'/>
    <filter>
      <condition attribute='parentappactionid' operator='eq' value='{EscapeXml(parentCommandId)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
    <order attribute='sequence'/>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Select(e =>
                {
                    var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                    var onClickValue = e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value ?? 0;

                    return new CommandChildEntry
                    {
                        CommandId = e.Id.ToString(),
                        Name = e.GetAttributeValue<string>("name") ?? "",
                        UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                        ButtonLabel = NullIfEmpty(e.GetAttributeValue<string>("buttonlabeltext")),
                        Type = TypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                        OnClickEventType = OnClickEventTypeMap.TryGetValue(onClickValue, out var oc) ? oc : onClickValue.ToString(),
                        JavaScriptFunction = NullIfEmpty(e.GetAttributeValue<string>("onclickeventjavascriptfunctionname")),
                        Sequence = Convert.ToInt32(e["sequence"] ?? 0),
                        Hidden = e.GetAttributeValue<bool?>("hidden") ?? false,
                        IsDisabled = e.GetAttributeValue<bool?>("isdisabled") ?? false
                    };
                }).ToList();
            }
            catch (Exception ex)
            {
                return [new CommandChildEntry { Name = $"[Error] {ex.Message}" }];
            }
        }

        private void ResolveWebResourceNames(Entity entity, CommandEntry entry)
        {
            var wrRef = entity.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid");
            if (wrRef != null)
                entry.JavaScriptWebResource = wrRef.Name ?? wrRef.Id.ToString();

            var iconRef = entity.GetAttributeValue<EntityReference>("iconwebresourceid");
            if (iconRef != null)
                entry.IconWebResource = iconRef.Name ?? iconRef.Id.ToString();
        }

        private void ResolveComponentLibraryNames(Entity entity, CommandEntry entry)
        {
            var onClickLibRef = entity.GetAttributeValue<EntityReference>("onclickeventformulacomponentlibraryid");
            if (onClickLibRef != null)
                entry.OnClickComponentLibrary = onClickLibRef.Name ?? onClickLibRef.Id.ToString();

            var visLibRef = entity.GetAttributeValue<EntityReference>("visibilityformulacomponentlibraryid");
            if (visLibRef != null)
                entry.VisibilityComponentLibrary = visLibRef.Name ?? visLibRef.Id.ToString();

            entry.VisibilityFormula = NullIfEmpty(entity.GetAttributeValue<string>("visibilityformulacomponentlibrary"));
            entry.OnClickFormula = NullIfEmpty(entity.GetAttributeValue<string>("onclickeventformulacomponentlibrary"));
        }

        private static CommandEntry MapCommandEntry(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var locationValue = e.GetAttributeValue<OptionSetValue>("location")?.Value ?? 0;
            var onClickValue = e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value ?? 0;
            var visibilityValue = e.GetAttributeValue<OptionSetValue>("visibilitytype")?.Value ?? 0;
            var originValue = e.GetAttributeValue<OptionSetValue>("origin")?.Value ?? 0;

            var appName = GetAliasedString(e, "app.name");

            return new CommandEntry
            {
                CommandId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                ButtonLabel = NullIfEmpty(e.GetAttributeValue<string>("buttonlabeltext")),
                Entity = e.GetAttributeValue<string>("contextvalue") ?? "",
                Location = LocationMap.TryGetValue(locationValue, out var loc) ? loc : locationValue.ToString(),
                Type = TypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                OnClickEventType = OnClickEventTypeMap.TryGetValue(onClickValue, out var oc) ? oc : onClickValue.ToString(),
                JavaScriptFunction = NullIfEmpty(e.GetAttributeValue<string>("onclickeventjavascriptfunctionname")),
                VisibilityType = VisibilityTypeMap.TryGetValue(visibilityValue, out var vis) ? vis : visibilityValue.ToString(),
                FontIcon = NullIfEmpty(e.GetAttributeValue<string>("fonticon")),
                Origin = OriginMap.TryGetValue(originValue, out var orig) ? orig : originValue.ToString(),
                Sequence = Convert.ToInt32(e["sequence"] ?? 0),
                Hidden = e.GetAttributeValue<bool?>("hidden") ?? false,
                IsDisabled = e.GetAttributeValue<bool?>("isdisabled") ?? false,
                ParentCommandId = e.GetAttributeValue<EntityReference>("parentappactionid")?.Id.ToString(),
                AppName = string.IsNullOrEmpty(appName) ? null : appName,
                ClientType = NullIfEmpty(e.GetAttributeValue<string>("clienttype"))
            };
        }

        private static string GetAliasedString(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            return aliased?.Value?.ToString() ?? "";
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string Truncate(string value, int maxLength)
        {
            if (string.IsNullOrEmpty(value)) return "";
            return value.Length <= maxLength ? value : value.Substring(0, maxLength) + "...";
        }

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
