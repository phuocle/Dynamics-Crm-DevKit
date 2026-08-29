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
        // ── List ──────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string location, string appName, string origin, string actionType, string nameFilter, bool includeRules, bool includeChildren, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(location))
            {
                if (!LocationFilterMap.ContainsKey(location.Trim()))
                    return Error($"Invalid location '{location.Trim()}'.",
                        "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
            }

            if (!string.IsNullOrWhiteSpace(origin) && !origin.Trim().Equals("all", StringComparison.OrdinalIgnoreCase))
            {
                if (!OriginFilterMap.ContainsKey(origin.Trim()))
                    return Error($"Invalid origin '{origin.Trim()}'.",
                        "Valid values: 'default', 'migrated', 'enhanced_migrated', 'all'.");
            }

            if (!string.IsNullOrWhiteSpace(actionType))
            {
                if (!ActionTypeFilterMap.ContainsKey(actionType.Trim()))
                    return Error($"Invalid action_type '{actionType.Trim()}'.",
                        "Valid values: 'javascript', 'formula', 'none'.");
            }

            if (maxRecords <= 0)
                return Error("max_records must be between 1 and 500.",
                    "Pass a value between 1 and 500.");
            if (maxRecords > 500) maxRecords = 500;

            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var (resolvedEntityName, entityError) = ResolveEntityLogicalName(entityName);
                if (entityError != null)
                    return Error(entityError.Split("\r\n")[0],
                        "Use get_tables to list available tables.");
                entityName = resolvedEntityName;
            }

            // Ribbon-style list when entity is specified and no extra filters narrow it down
            if (!string.IsNullOrWhiteSpace(entityName) && string.IsNullOrWhiteSpace(appName)
                && string.IsNullOrWhiteSpace(origin) && string.IsNullOrWhiteSpace(actionType) && string.IsNullOrWhiteSpace(nameFilter))
            {
                var loc = string.IsNullOrWhiteSpace(location) ? null : location.Trim();
                return GetListRibbonStyle(entityName, loc);
            }

            return GetList(entityName, location, appName, origin, actionType, nameFilter, includeRules, includeChildren, maxRecords);
        }

        // Ribbon-style list: uses RetrieveEntityRibbonRequest to show ALL buttons (OOB + custom),
        // then enriches with InAppAction flag from appaction entity.
        private CallToolResult GetListRibbonStyle(string entityName, string locationFilter)
        {
            // Collect all existing appaction records for this entity (label → id map)
            var appActionLabels = GetAppActionLabelsForEntity(entityName);

            var surfaces = string.IsNullOrWhiteSpace(locationFilter)
                ? CommandSurfaceMap
                : CommandSurfaceMap
                    .Where(kvp => kvp.Key.Equals(locationFilter, StringComparison.OrdinalIgnoreCase))
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value);

            if (surfaces.Count == 0)
            {
                // location not in ribbon-style map (e.g. associated_grid, global_header) — fall back to regular list
                return GetList(entityName, locationFilter, "", "", "", "", false, false, 500);
            }

            // Load LocLabels from devkit_ribbon solution for label resolution
            var locLabels = LoadLocLabels(entityName);

            var allEntries = new List<CommandEntry>();

            foreach (var (surface, (filter, groupSuffix, locationValue)) in surfaces)
            {
                var request = new RetrieveEntityRibbonRequest
                {
                        EntityName = entityName,
                        RibbonLocationFilter = filter
                    };
                    var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(request);
                    var ribbonXml = UnzipRibbonXml(response.CompressedEntityXml);
                    var buttons = ParseButtonsFromRibbon(ribbonXml, entityName, groupSuffix, locLabels);

                    foreach (var btn in buttons)
                    {
                        var normalizedLabel = btn.Label?.Trim() ?? "";
                        appActionLabels.TryGetValue(normalizedLabel, out var info);

                        allEntries.Add(new CommandEntry
                        {
                            Name = btn.Id,
                            ButtonLabel = btn.Label,
                            Location = LocationMap.TryGetValue(locationValue, out var lname) ? lname : surface,
                            Entity = entityName,
                            Sequence = btn.Sequence,
                            CommandId = info?.Id,
                            Hidden = info?.Hidden ?? false,
                            IsDisabled = info?.IsDisabled ?? false,
                            Type = info?.Type,
                            Origin = info?.Origin,
                            OnClickEventType = info?.OnClickEventType,
                            VisibilityType = info?.VisibilityType,
                            FontIcon = info?.FontIcon,
                            JavaScriptFunction = info?.JavaScriptFunction,
                            IconWebResource = info?.IconWebResource,
                        });
                    }
            }

            var ribbonText = $"Found {allEntries.Count} ribbon button(s) for '{entityName}' (OOB + custom, InAppAction = has appaction record)." +
                " Details in structuredContent.";

            var structured = new ManageCommandResult
            {
                Action = "list",
                Status = "success",
                TotalCount = allEntries.Count,
                Commands = allEntries
            };

            return Success(ribbonText, structured);
        }

        private Dictionary<string, AppActionInfo> GetAppActionLabelsForEntity(string entityName)
        {
            var result = new Dictionary<string, AppActionInfo>(StringComparer.OrdinalIgnoreCase);
            var fetchXml = $@"<fetch>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='buttonlabeltext'/>
    <attribute name='hidden'/>
    <attribute name='type'/>
    <attribute name='origin'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='onclickeventjavascriptwebresourceid'/>
    <attribute name='visibilitytype'/>
    <attribute name='fonticon'/>
    <attribute name='iconwebresourceid'/>
    <attribute name='buttontooltiptitle'/>
    <attribute name='buttontooltipdescription'/>
    <attribute name='isdisabled'/>
    <filter>
      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";
                var entities = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var e in entities.Entities)
                {
                    var lbl = e.GetAttributeValue<string>("buttonlabeltext") ?? "";
                    if (string.IsNullOrWhiteSpace(lbl)) continue;

                    var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                    var onClickValue = e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value ?? 0;
                    var visValue = e.GetAttributeValue<OptionSetValue>("visibilitytype")?.Value ?? 0;
                    var originValue = e.GetAttributeValue<OptionSetValue>("origin")?.Value ?? 0;
                    var iconRef = e.GetAttributeValue<EntityReference>("iconwebresourceid");

                    result[lbl] = new AppActionInfo
                    {
                        Id = e.Id.ToString(),
                        Hidden = e.GetAttributeValue<bool?>("hidden") ?? false,
                        IsDisabled = e.GetAttributeValue<bool?>("isdisabled") ?? false,
                        Type = TypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                        Origin = OriginMap.TryGetValue(originValue, out var orig) ? orig : originValue.ToString(),
                        OnClickEventType = OnClickEventTypeMap.TryGetValue(onClickValue, out var oc) ? oc : onClickValue.ToString(),
                        VisibilityType = VisibilityTypeMap.TryGetValue(visValue, out var vis) ? vis : visValue.ToString(),
                        FontIcon = NullIfEmpty(e.GetAttributeValue<string>("fonticon")),
                        JavaScriptFunction = NullIfEmpty(e.GetAttributeValue<string>("onclickeventjavascriptfunctionname")),
                        IconWebResource = iconRef != null ? (iconRef.Name ?? iconRef.Id.ToString()) : null,
                        TooltipTitle = NullIfEmpty(e.GetAttributeValue<string>("buttontooltiptitle")),
                        TooltipDescription = NullIfEmpty(e.GetAttributeValue<string>("buttontooltipdescription")),
                    };
                }
            return result;
        }

        private sealed class AppActionInfo
        {
            public string Id { get; set; }
            public bool Hidden { get; set; }
            public bool IsDisabled { get; set; }
            public string Type { get; set; }
            public string Origin { get; set; }
            public string OnClickEventType { get; set; }
            public string VisibilityType { get; set; }
            public string FontIcon { get; set; }
            public string JavaScriptFunction { get; set; }
            public string IconWebResource { get; set; }
            public string TooltipTitle { get; set; }
            public string TooltipDescription { get; set; }
        }

        private static List<(string Id, int Sequence, string Label, bool IsOob, bool IsCustom)> ParseButtonsFromRibbon(
            string ribbonXml, string entityName, string groupSuffix, Dictionary<string, string> locLabels)
        {
            var doc = XDocument.Parse(ribbonXml);
            var targetSuffix = $".{entityName}.{groupSuffix}";

            var group = doc.Descendants("Group").FirstOrDefault(g =>
            {
                var id = (string)g.Attribute("Id") ?? "";
                return id.EndsWith(targetSuffix, StringComparison.OrdinalIgnoreCase);
            });

            if (group == null) return [];

            var controls = group.Element("Controls");
            if (controls == null) return [];

            var result = new List<(string, int, string, bool, bool)>();
            foreach (var el in controls.Elements())
            {
                var tag = el.Name.LocalName;
                if (tag != "Button" && tag != "FlyoutAnchor" && tag != "SplitButton") continue;

                var id = (string)el.Attribute("Id") ?? "";
                if (!int.TryParse((string)el.Attribute("Sequence") ?? "0", out var seq)) seq = 0;
                var labelRaw = (string)el.Attribute("LabelText") ?? "";
                var label = ResolveLabel(labelRaw, id, locLabels);
                var solutionName = (string)el.Attribute("SolutionUniqueName") ?? "";
                var isOob = solutionName.Equals("System", StringComparison.OrdinalIgnoreCase);

                result.Add((id, seq, label, isOob, !isOob));
            }

            return result.OrderBy(b => b.Item2).ToList();
        }

        private static string ResolveLabel(string labelText, string buttonId, Dictionary<string, string> locLabels)
        {
            if (string.IsNullOrWhiteSpace(labelText))
            {
                var parts2 = buttonId.Split('.');
                return parts2.Last();
            }
            if (labelText.StartsWith("$LocLabels:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$LocLabels:".Length);
                if (locLabels != null && locLabels.TryGetValue(key, out var resolved))
                    return resolved;
                var parts = key.Split('.');
                return parts.Last();
            }
            if (labelText.StartsWith("$Resources:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$Resources:".Length);
                return key.Split('.').Last();
            }
            if (labelText.StartsWith("{!"))
            {
                var inner = labelText.TrimStart('{', '!').TrimEnd('}');
                return inner.Contains(':') ? inner.Substring(inner.IndexOf(':') + 1) : inner;
            }
            return labelText;
        }

        private Dictionary<string, string> LoadLocLabels(string entityName)
        {
            var locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            var exportReq = new ExportSolutionRequest { SolutionName = "devkit_ribbon", Managed = false };
            var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
            var ribbonXml = ExtractRibbonDiffXmlForEntity(exportResp.ExportSolutionFile, entityName);
            if (string.IsNullOrWhiteSpace(ribbonXml)) return locLabels;

            var doc = XDocument.Parse(ribbonXml);
            foreach (var locLabel in doc.Descendants("LocLabel"))
            {
                var id = (string)locLabel.Attribute("Id") ?? "";
                var desc = (string)locLabel.Descendants("Title").FirstOrDefault()?.Attribute("description") ?? "";
                if (!string.IsNullOrWhiteSpace(id) && !string.IsNullOrWhiteSpace(desc))
                    locLabels[id] = desc;
            }
            return locLabels;
        }

        private static string UnzipRibbonXml(byte[] data)
        {
            using var ms = new MemoryStream(data);
            using var zip = new ZipArchive(ms, ZipArchiveMode.Read);
            var entry = zip.GetEntry("RibbonXml.xml");
            using var strm = entry.Open();
            using var reader = new StreamReader(strm, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        private CallToolResult GetList(string entityName, string location, string appName, string origin, string actionType, string nameFilter, bool includeRules, bool includeChildren, int maxRecords)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(entityName))
                filters.AppendLine($"      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(location) && LocationFilterMap.TryGetValue(location.Trim(), out var locValue))
                filters.AppendLine($"      <condition attribute='location' operator='eq' value='{locValue}'/>");

            if (!string.IsNullOrWhiteSpace(origin) && !origin.Trim().Equals("all", StringComparison.OrdinalIgnoreCase) && OriginFilterMap.TryGetValue(origin.Trim(), out var origValue))
                filters.AppendLine($"      <condition attribute='origin' operator='eq' value='{origValue}'/>");

            if (!string.IsNullOrWhiteSpace(actionType) && ActionTypeFilterMap.TryGetValue(actionType.Trim(), out var actValue))
                filters.AppendLine($"      <condition attribute='onclickeventtype' operator='eq' value='{actValue}'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(appName))
            {
                var resolvedAppId = ResolveAppId("", appName, out var appResolveError);
                if (resolvedAppId == null)
                    return Error((appResolveError ?? "Could not resolve app_name.").Split("\r\n")[0],
                        "Use manage_app(action='list') to discover apps.");
                filters.AppendLine($"      <condition attribute='appmoduleid' operator='eq' value='{resolvedAppId.Value}'/>");
            }

            var appFilter = "";
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
                return Success("0 commands found.", emptyResult);
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

            var countWord = commands.Count == 1 ? "command" : "commands";
            var listText = $"Found {commands.Count} {countWord}" +
                (string.IsNullOrWhiteSpace(entityName) ? "" : $" for '{entityName}'") +
                (includeRules ? " (rules included)" : "") +
                (includeChildren ? " (children included)" : "") +
                ". Details in structuredContent.";

            var structured = new ManageCommandResult
            {
                Action = "list",
                Status = "success",
                TotalCount = commands.Count,
                Commands = commands
            };

            return Success(listText, structured);
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
                return Error($"Command '{commandId}' not found.",
                    "Use manage_command(action='list') to find valid command IDs.");

            var entity = result.Entities[0];
            var entry = MapCommandEntry(entity);

            if (includeRules)
                entry.Rules = GetRulesForCommand(commandId);

            if (includeChildren)
                entry.Children = GetChildCommands(commandId);

            ResolveWebResourceNames(entity, entry);
            ResolveComponentLibraryNames(entity, entry);

            var detailText = $"'{entry.Name}' ({entry.CommandId}) on '{entry.Entity}' ({entry.Location}), " +
                $"{entry.Type}, {entry.Origin}, onClick={entry.OnClickEventType}, visibility={entry.VisibilityType}" +
                $"{(entry.Hidden ? ", hidden" : "")}{(entry.IsDisabled ? ", disabled" : "")}. " +
                $"Full fields, rules, and children in structuredContent.";

            var structured = new ManageCommandResult
            {
                Action = "detail",
                Status = "success",
                TotalCount = 1,
                Commands = [entry]
            };

            return Success(detailText, structured);
        }

        private CallToolResult GetDetailByLabel(string label, string entityName, string location, bool includeRules, bool includeChildren)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");
            filters.AppendLine($"      <condition attribute='buttonlabeltext' operator='like' value='%{EscapeXml(label)}%'/>");

            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var (resolvedEntityName, entityError) = ResolveEntityLogicalName(entityName);
                if (entityError != null)
                    return Error(entityError.Split("\r\n")[0],
                        "Use get_tables to list available tables.");
                entityName = resolvedEntityName;
                filters.AppendLine($"      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName)}'/>");
            }

            if (!string.IsNullOrWhiteSpace(location) && LocationFilterMap.TryGetValue(location, out var locVal))
                filters.AppendLine($"      <condition attribute='location' operator='eq' value='{locVal}'/>");

            var fetchXml = $@"<fetch top='10'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='buttonlabeltext'/>
    <attribute name='location'/>
    <attribute name='contextvalue'/>
    <filter type='and'>
{filters}    </filter>
    <link-entity name='appmodule' from='appmoduleid' to='appmoduleid' link-type='outer' alias='app'>
      <attribute name='name'/>
    </link-entity>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
                return Error($"No command found with label containing '{label}'" +
                    (string.IsNullOrWhiteSpace(entityName) ? "" : $" on entity '{entityName}'") + ".",
                    "Check the label spelling, or use manage_command(action='list') to browse commands.");

            if (result.Entities.Count > 1)
            {
                var ids = result.Entities.Select(e => e.Id.ToString()).ToList();
                return Error($"Multiple commands match label '{label}' on '{entityName}' — {ids.Count} found.",
                    "Re-run with command_id: " + string.Join(", ", ids));
            }

            return GetDetail(result.Entities[0].Id.ToString(), includeRules, includeChildren);
        }
    }
}
