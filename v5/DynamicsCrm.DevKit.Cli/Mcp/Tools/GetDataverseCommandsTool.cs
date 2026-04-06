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
    public class GetDataverseCommandsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetDataverseCommandsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
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
            ["quick_form"] = 4
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

        [McpServerTool(Name = "get_dataverse_commands", Title = "List command bar buttons in model-driven apps",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetCommandsResult)),
        Description(
            "List and inspect modern command bar buttons (appaction entity) that replace classic Ribbon XML in Model-Driven Apps. " +
            "Covers command definitions, visibility/enable rules (appactionrule), and migration status.\n\n" +

            "TWO MODES:\n" +
            "- command_id EMPTY: list commands filtered by entity, location, app, origin, action type\n" +
            "- command_id PROVIDED: full detail including rules, children, and component library info\n\n" +

            "TIPS:\n" +
            "- Use origin='default' to filter out hundreds of auto-migrated system commands\n" +
            "- Commands are app-scoped — same entity can have different commands in different apps\n" +
            "- Related: manage_form (form layout), get_views (grid columns), build_form_xml (form events)")]
        public CallToolResult get_dataverse_commands(
            [Description("GUID of a specific appaction record. Returns full detail. All other filters ignored.")] string command_id = "",
            [Description("Filter by entity logical name (e.g., 'account').")] string entity_name = "",
            [Description("Filter by location: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form'. Empty = all.")] string location = "",
            [Description("Filter by Model-Driven App name (contains match).")] string app_name = "",
            [Description("'default' (custom), 'migrated' (from ribbon), 'enhanced_migrated', or 'all'. Empty = all.")] string origin = "",
            [Description("Filter by onclick event type: 'javascript', 'formula' (Power Fx), 'none'. Empty = all.")] string action_type = "",
            [Description("Filter by command name (contains match).")] string name_filter = "",
            [Description("Include associated appactionrule records with JSON definitions. Default: false.")] bool include_rules = false,
            [Description("Include child commands (dropdown/split button items). Default: false.")] bool include_children = false,
            [Description("Max commands (1-500). Default: 50.")] int max_records = 50)
        {
            if (!string.IsNullOrWhiteSpace(location))
            {
                if (!LocationFilterMap.ContainsKey(location.Trim()))
                    return ErrorResult($"Error: Invalid location '{location.Trim()}'. Use 'form', 'main_grid', 'sub_grid', 'associated_grid', or 'quick_form'.");
            }

            if (!string.IsNullOrWhiteSpace(origin) && !origin.Trim().Equals("all", StringComparison.OrdinalIgnoreCase))
            {
                if (!OriginFilterMap.ContainsKey(origin.Trim()))
                    return ErrorResult($"Error: Invalid origin '{origin.Trim()}'. Use 'default', 'migrated', 'enhanced_migrated', or 'all'.");
            }

            if (!string.IsNullOrWhiteSpace(action_type))
            {
                if (!ActionTypeFilterMap.ContainsKey(action_type.Trim()))
                    return ErrorResult($"Error: Invalid action_type '{action_type.Trim()}'. Use 'javascript', 'formula', or 'none'.");
            }

            if (max_records <= 0)
                return ErrorResult("Error: max_records must be between 1 and 500.");
            if (max_records > 500) max_records = 500;

            try
            {
                if (!string.IsNullOrWhiteSpace(command_id))
                {
                    if (!Guid.TryParse(command_id.Trim(), out _))
                        return ErrorResult($"Error: '{command_id.Trim()}' is not a valid GUID.");

                    return GetDetail(command_id.Trim(), include_rules, include_children);
                }

                return GetList(entity_name, location, app_name, origin, action_type, name_filter, include_rules, include_children, max_records);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve commands: {ex.Message}");
            }
        }

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

            // Get rules if requested
            if (includeRules)
                entry.Rules = GetRulesForCommand(commandId);

            // Get children if requested
            if (includeChildren)
                entry.Children = GetChildCommands(commandId);

            // Resolve web resource names
            ResolveWebResourceNames(entity, entry);

            // Resolve component library names
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

            var structured = new GetCommandsResult
            {
                TotalCount = 1,
                Commands = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
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
                var emptyResult = new GetCommandsResult { TotalCount = 0, Commands = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = "0 commands found." }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var commands = result.Entities.Select(MapCommandEntry).ToList();

            // Optionally include rules
            if (includeRules)
            {
                foreach (var cmd in commands)
                    cmd.Rules = GetRulesForCommand(cmd.CommandId);
            }

            // Optionally include children
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

            var structured = new GetCommandsResult
            {
                TotalCount = commands.Count,
                Commands = commands
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private List<CommandRuleEntry> GetRulesForCommand(string commandId)
        {
            try
            {
                // Query N:N relationship via intersect entity
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
