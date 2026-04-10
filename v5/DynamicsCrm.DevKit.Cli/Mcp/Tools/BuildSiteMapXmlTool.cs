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
using System.Text.RegularExpressions;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildSiteMapXmlTool
    {
        private readonly ServiceClient _serviceClient;

        public BuildSiteMapXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_sitemap_xml", Title = "Build SiteMap XML with areas, groups, and subareas",
            Destructive = false, ReadOnly = true, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(BuildSiteMapXmlResult)),
        Description(
            "Build modified SiteMap XML by adding, removing, updating, or moving areas, groups, and subareas in an existing Model-Driven App navigation.\n" +
            "READ-ONLY builder — returns modified SiteMap XML string. Use manage_sitemap to write it.\n\n" +
            "TWELVE OPERATIONS:\n" +
            "- add_area: Add a new area to the sitemap\n" +
            "- add_group: Add a new group to an existing area\n" +
            "- add_subarea: Add a new subarea (entity, URL, dashboard, web resource) to a group\n" +
            "- remove_area: Remove an entire area\n" +
            "- remove_group: Remove a group from an area\n" +
            "- remove_subarea: Remove a subarea from a group\n" +
            "- update_area: Update area properties (label, icon, show_groups)\n" +
            "- update_group: Update group properties (label, is_profile)\n" +
            "- update_subarea: Update subarea properties (label, entity, url, icon)\n" +
            "- move_area: Reorder an area within the sitemap\n" +
            "- move_group: Reorder a group within an area\n" +
            "- move_subarea: Reorder a subarea within a group\n\n" +
            "Auto-generates IDs (area_, group_, sa_ prefixes), supports fuzzy element finding by ID or label.\n\n" +
            "TIPS:\n" +
            "- app parameter accepts app name OR GUID — auto-resolves internally\n" +
            "- This tool does NOT modify Dataverse — use manage_sitemap(action='update') to apply the returned SiteMap XML\n" +
            "- Read schema://sitemapxml for SiteMap XML structure and rules")]
        public CallToolResult build_sitemap_xml(
            [Description("Model-Driven App name or GUID. Accepts app display name (fuzzy match) or exact GUID. The tool resolves the name to app_module_id internally and retrieves the current SiteMap XML.")] string app,
            [Description("JSON array of operations. Each has 'action' + parameters.\n" +
                "Actions: 'add_area', 'add_group', 'add_subarea', 'remove_area', 'remove_group', 'remove_subarea', 'update_area', 'update_group', 'update_subarea', 'move_area', 'move_group', 'move_subarea'.\n" +
                "Example: [{\"action\":\"add_subarea\",\"area\":\"Sales\",\"group\":\"Customers\",\"entity\":\"account\"}]\n" +
                "Example: [{\"action\":\"add_area\",\"label\":\"Reports\",\"groups\":[{\"label\":\"My Reports\",\"subareas\":[{\"entity\":\"report\"}]}]}]\n" +
                "Example: [{\"action\":\"remove_subarea\",\"area\":\"Sales\",\"group\":\"Customers\",\"subarea\":\"sa_account\"}]")] string operations)
        {
            // Step 1: Validate inputs
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult("Error: app is required. Provide app display name or GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult("Error: operations is required.");

            // Step 2: Resolve app name/GUID to app module
            var (appModuleId, appName, resolveError) = ResolveAppModule(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            // Step 3: Retrieve current SiteMap XML
            var (siteMapXml, retrieveError) = RetrieveCurrentSiteMapXml(appModuleId, appName);
            if (retrieveError != null)
                return ErrorResult(retrieveError);

            // Step 4: Parse operations JSON
            List<JsonElement> ops;
            try
            {
                ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                if (ops == null || ops.Count == 0)
                    return ErrorResult("Error: operations must be a non-empty JSON array.");
            }
            catch (JsonException ex)
            {
                return ErrorResult($"Error: Invalid operations JSON: {ex.Message}");
            }

            // Step 5: Parse SiteMap XML
            XDocument siteMapDoc;
            try
            {
                siteMapDoc = XDocument.Parse(siteMapXml);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse current SiteMap XML: {ex.Message}");
            }

            // Step 6: Execute operations
            var opSummaries = new List<string>();
            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    return ErrorResult("Error: Each operation must have an 'action' field.");

                var action = actionProp.GetString()?.ToLowerInvariant();
                try
                {
                    var summary = DispatchOperation(siteMapDoc, action, op);
                    opSummaries.Add(summary);
                }
                catch (InvalidOperationException ex)
                {
                    return ErrorResult($"Error in operation '{action}': {ex.Message}");
                }
            }

            // Step 7: Serialize and return
            var modifiedXml = siteMapDoc.ToString(SaveOptions.None);
            var resultSb = new StringBuilder(256);
            resultSb.AppendLine($"[BuildSiteMapXml] {appName}");
            resultSb.AppendLine($"AppModuleId: {appModuleId}");
            resultSb.AppendLine($"Operations: {opSummaries.Count}");
            foreach (var s in opSummaries)
                resultSb.AppendLine($"  - {s}");
            resultSb.AppendLine();
            resultSb.AppendLine("Next step: Call manage_sitemap(action='update') with the siteMapXml below to apply changes.");
            resultSb.AppendLine();
            resultSb.AppendLine(modifiedXml);

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = resultSb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new BuildSiteMapXmlResult
                {
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    Status = "success",
                    OperationsCount = opSummaries.Count,
                    OperationSummaries = opSummaries,
                    SiteMapXml = modifiedXml
                })
            };
        }

        // ── Placeholder methods (will be filled incrementally) ────────────

        private string DispatchOperation(XDocument doc, string action, JsonElement op)
        {
            return action switch
            {
                "add_area" => ExecuteAddArea(doc, op),
                "add_group" => ExecuteAddGroup(doc, op),
                "add_subarea" => ExecuteAddSubArea(doc, op),
                "remove_area" => ExecuteRemoveArea(doc, op),
                "remove_group" => ExecuteRemoveGroup(doc, op),
                "remove_subarea" => ExecuteRemoveSubArea(doc, op),
                "update_area" => ExecuteUpdateArea(doc, op),
                "update_group" => ExecuteUpdateGroup(doc, op),
                "update_subarea" => ExecuteUpdateSubArea(doc, op),
                "move_area" => ExecuteMoveArea(doc, op),
                "move_group" => ExecuteMoveGroup(doc, op),
                "move_subarea" => ExecuteMoveSubArea(doc, op),
                _ => throw new InvalidOperationException(
                    $"Unknown action '{action}'. Valid actions: add_area, add_group, add_subarea, " +
                    "remove_area, remove_group, remove_subarea, update_area, update_group, update_subarea, " +
                    "move_area, move_group, move_subarea")
            };
        }

        // ── Operation stubs (to be implemented) ──────────────────────────

        private string ExecuteAddArea(XDocument doc, JsonElement op)
        {
            var label = GetStringProp(op, "label");
            if (string.IsNullOrWhiteSpace(label))
                throw new InvalidOperationException("add_area requires 'label'.");

            var id = GetStringProp(op, "id") ?? $"area_{Sanitize(label)}";
            var position = GetStringProp(op, "position");
            var showGroups = GetStringProp(op, "show_groups");
            var icon = GetStringProp(op, "icon");

            var area = new XElement("Area", new XAttribute("Id", id));
            area.Add(BuildTitlesElement(label));
            if (showGroups != null) area.Add(new XAttribute("ShowGroups", showGroups));
            if (icon != null) area.Add(new XAttribute("Icon", icon));

            // Inline groups support
            if (op.TryGetProperty("groups", out var groupsArr) && groupsArr.ValueKind == JsonValueKind.Array)
            {
                foreach (var g in groupsArr.EnumerateArray())
                {
                    var groupLabel = GetStringProp(g, "label") ?? "Default";
                    var groupId = GetStringProp(g, "id") ?? $"group_{Sanitize(groupLabel)}";
                    var group = new XElement("Group", new XAttribute("Id", groupId));
                    group.Add(BuildTitlesElement(groupLabel));

                    if (g.TryGetProperty("subareas", out var subAreasArr) && subAreasArr.ValueKind == JsonValueKind.Array)
                    {
                        foreach (var sa in subAreasArr.EnumerateArray())
                        {
                            group.Add(BuildSubAreaElement(sa));
                        }
                    }
                    area.Add(group);
                }
            }

            InsertElement(doc.Root, area, position, "Area");
            var groupCount = area.Elements("Group").Count();
            var subAreaCount = area.Elements("Group").SelectMany(g => g.Elements("SubArea")).Count();
            return $"Added Area '{label}' (Id={id})" +
                (groupCount > 0 ? $" with {groupCount} group(s), {subAreaCount} subarea(s)" : "");
        }
        private string ExecuteAddGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("add_group requires 'area'.");
            var label = GetStringProp(op, "label");
            if (string.IsNullOrWhiteSpace(label))
                throw new InvalidOperationException("add_group requires 'label'.");

            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");

            var id = GetStringProp(op, "id") ?? $"group_{Sanitize(label)}";
            var position = GetStringProp(op, "position");
            var isProfile = GetStringProp(op, "is_profile");

            var group = new XElement("Group", new XAttribute("Id", id));
            group.Add(BuildTitlesElement(label));
            if (isProfile != null) group.Add(new XAttribute("IsProfile", isProfile));

            // Inline subareas
            if (op.TryGetProperty("subareas", out var subAreasArr) && subAreasArr.ValueKind == JsonValueKind.Array)
            {
                foreach (var sa in subAreasArr.EnumerateArray())
                    group.Add(BuildSubAreaElement(sa));
            }

            InsertElement(area, group, position, "Group");
            var subCount = group.Elements("SubArea").Count();
            return $"Added Group '{label}' (Id={id}) to Area '{GetAreaLabel(area)}'" +
                (subCount > 0 ? $" with {subCount} subarea(s)" : "");
        }
        private string ExecuteAddSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("add_subarea requires 'area'.");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("add_subarea requires 'group'.");

            var entity = GetStringProp(op, "entity");
            var url = GetStringProp(op, "url");
            if (string.IsNullOrWhiteSpace(entity) && string.IsNullOrWhiteSpace(url))
                throw new InvalidOperationException("add_subarea requires 'entity' or 'url'.");

            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");

            var position = GetStringProp(op, "position");
            var subArea = BuildSubAreaElement(op);
            InsertElement(group, subArea, position, "SubArea");

            var saId = subArea.Attribute("Id")?.Value;
            var desc = entity ?? url;
            return $"Added SubArea '{desc}' (Id={saId}) to Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}'";
        }
        private string ExecuteRemoveArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_area requires 'area'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var label = GetAreaLabel(area);
            area.Remove();
            return $"Removed Area '{label}'";
        }
        private string ExecuteRemoveGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("remove_group requires 'group'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var label = GetGroupLabel(group);
            group.Remove();
            return $"Removed Group '{label}' from Area '{GetAreaLabel(area)}'";
        }
        private string ExecuteRemoveSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("remove_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("remove_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("remove_subarea requires 'subarea'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");
            var label = GetSubAreaLabel(subArea);
            subArea.Remove();
            return $"Removed SubArea '{label}' from Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}'";
        }
        private string ExecuteUpdateArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_area requires 'area'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                area.Element("Titles")?.Remove();
                area.AddFirst(BuildTitlesElement(label));
                changes.Add($"label='{label}'");
            }
            var showGroups = NormalizeBoolProp(op, "show_groups");
            if (showGroups != null) { area.SetAttributeValue("ShowGroups", showGroups); changes.Add($"ShowGroups={showGroups}"); }
            var icon = GetStringProp(op, "icon");
            if (icon != null) { area.SetAttributeValue("Icon", icon); changes.Add($"Icon='{icon}'"); }

            return $"Updated Area '{GetAreaLabel(area)}': {string.Join(", ", changes)}";
        }
        private string ExecuteUpdateGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("update_group requires 'group'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                group.Element("Titles")?.Remove();
                group.AddFirst(BuildTitlesElement(label));
                changes.Add($"label='{label}'");
            }
            var isProfile = NormalizeBoolProp(op, "is_profile");
            if (isProfile != null) { group.SetAttributeValue("IsProfile", isProfile); changes.Add($"IsProfile={isProfile}"); }

            return $"Updated Group '{GetGroupLabel(group)}' in Area '{GetAreaLabel(area)}': {string.Join(", ", changes)}";
        }
        private string ExecuteUpdateSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("update_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("update_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("update_subarea requires 'subarea'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");

            var changes = new List<string>();
            var label = GetStringProp(op, "label");
            if (label != null)
            {
                subArea.Element("Titles")?.Remove();
                subArea.AddFirst(BuildTitlesElement(label));
                changes.Add($"label='{label}'");
            }
            var entity = GetStringProp(op, "entity");
            if (entity != null) { subArea.SetAttributeValue("Entity", entity); changes.Add($"Entity='{entity}'"); }
            var url = GetStringProp(op, "url");
            if (url != null) { subArea.SetAttributeValue("Url", url); changes.Add($"Url='{url}'"); }
            var passParams = NormalizeBoolProp(op, "pass_params");
            if (passParams != null) { subArea.SetAttributeValue("PassParams", passParams); changes.Add($"PassParams='{passParams}'"); }
            var defaultDashboard = GetStringProp(op, "default_dashboard");
            if (defaultDashboard != null) { subArea.SetAttributeValue("DefaultDashboard", defaultDashboard); changes.Add($"DefaultDashboard='{defaultDashboard}'"); }
            var saIcon = GetStringProp(op, "icon");
            if (saIcon != null) { subArea.SetAttributeValue("Icon", saIcon); changes.Add($"Icon='{saIcon}'"); }
            var vectorIcon = GetStringProp(op, "vector_icon");
            if (vectorIcon != null) { subArea.SetAttributeValue("VectorIcon", vectorIcon); changes.Add($"VectorIcon='{vectorIcon}'"); }
            var client = GetStringProp(op, "client");
            if (client != null) { subArea.SetAttributeValue("Client", client); changes.Add($"Client='{client}'"); }

            return $"Updated SubArea '{GetSubAreaLabel(subArea)}': {string.Join(", ", changes)}";
        }
        private string ExecuteMoveArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_area requires 'area'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_area requires 'position' (first, last, or after:<id>).");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var label = GetAreaLabel(area);
            area.Remove();
            InsertElement(doc.Root, area, position, "Area");
            return $"Moved Area '{label}' to position '{position}'";
        }
        private string ExecuteMoveGroup(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_group requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("move_group requires 'group'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_group requires 'position'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var label = GetGroupLabel(group);
            group.Remove();
            InsertElement(area, group, position, "Group");
            return $"Moved Group '{label}' in Area '{GetAreaLabel(area)}' to position '{position}'";
        }
        private string ExecuteMoveSubArea(XDocument doc, JsonElement op)
        {
            var areaRef = GetStringProp(op, "area");
            var groupRef = GetStringProp(op, "group");
            var subAreaRef = GetStringProp(op, "subarea");
            var position = GetStringProp(op, "position");
            if (string.IsNullOrWhiteSpace(areaRef))
                throw new InvalidOperationException("move_subarea requires 'area'.");
            if (string.IsNullOrWhiteSpace(groupRef))
                throw new InvalidOperationException("move_subarea requires 'group'.");
            if (string.IsNullOrWhiteSpace(subAreaRef))
                throw new InvalidOperationException("move_subarea requires 'subarea'.");
            if (string.IsNullOrWhiteSpace(position))
                throw new InvalidOperationException("move_subarea requires 'position'.");
            var area = FindArea(doc, areaRef)
                ?? throw new InvalidOperationException($"Area '{areaRef}' not found in SiteMap.");
            var group = FindGroup(area, groupRef)
                ?? throw new InvalidOperationException($"Group '{groupRef}' not found in Area '{GetAreaLabel(area)}'.");
            var subArea = FindSubArea(group, subAreaRef)
                ?? throw new InvalidOperationException($"SubArea '{subAreaRef}' not found in Group '{GetGroupLabel(group)}'.");
            var label = GetSubAreaLabel(subArea);
            subArea.Remove();
            InsertElement(group, subArea, position, "SubArea");
            return $"Moved SubArea '{label}' in Group '{GetGroupLabel(group)}' to position '{position}'";
        }

        private (Guid AppModuleId, string AppName, string Error) ResolveAppModule(string app)
        {
            // If it's a GUID, resolve directly
            if (Guid.TryParse(app, out var appGuid))
            {
                try
                {
                    var entity = _serviceClient.Retrieve("appmodule", appGuid,
                        new ColumnSet("name", "uniquename"));
                    var name = entity.GetAttributeValue<string>("name")
                        ?? entity.GetAttributeValue<string>("uniquename") ?? "";
                    return (appGuid, name, null);
                }
                catch
                {
                    return (Guid.Empty, null,
                        $"[Error] App module not found for GUID '{app}'\n" +
                        "Tip: Use manage_sitemap(action='list') to find valid apps.");
                }
            }

            // Otherwise, search by name (contains, case-insensitive)
            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "name", "uniquename"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Like, $"%{app}%")
                    }
                }
            };

            var results = _serviceClient.RetrieveMultiple(query).Entities;

            if (results.Count == 0)
                return (Guid.Empty, null,
                    $"[Error] No app found matching '{app}'\n" +
                    "Tip: Use manage_sitemap(action='list') to see all available apps.");

            if (results.Count > 1)
            {
                // Check for exact match first
                var exact = results.FirstOrDefault(e =>
                    string.Equals(e.GetAttributeValue<string>("name"), app, StringComparison.OrdinalIgnoreCase));
                if (exact != null)
                    return (exact.Id, exact.GetAttributeValue<string>("name"), null);

                var sb = new StringBuilder();
                sb.AppendLine($"[Error] Multiple apps match '{app}'. Please specify exact name or GUID:");
                foreach (var e in results)
                    sb.AppendLine($"  - {e.GetAttributeValue<string>("name")} ({e.Id})");
                return (Guid.Empty, null, sb.ToString());
            }

            return (results[0].Id, results[0].GetAttributeValue<string>("name"), null);
        }

        private (string SiteMapXml, string Error) RetrieveCurrentSiteMapXml(Guid appModuleId, string appName)
        {
            // Get appmoduleidunique (needed for component lookup)
            Entity appModule;
            try
            {
                appModule = _serviceClient.Retrieve("appmodule", appModuleId,
                    new ColumnSet("appmoduleidunique"));
            }
            catch
            {
                return (null, $"[Error] Failed to retrieve app module '{appName}' ({appModuleId})");
            }

            var appModuleIdUnique = appModule.GetAttributeValue<Guid>("appmoduleidunique");

            // Get SiteMap via appmodulecomponent (componenttype=62 is Sitemap)
            var componentQuery = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("objectid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique),
                        new ConditionExpression("componenttype", ConditionOperator.Equal, 62)
                    }
                }
            };

            var components = _serviceClient.RetrieveMultiple(componentQuery).Entities;
            if (components.Count == 0)
                return (null,
                    $"[Error] No SiteMap component found for app '{appName}'\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    "Tip: This app may not have a classic SiteMap. Use manage_sitemap(action='create') first.");

            var siteMapId = components[0].GetAttributeValue<Guid>("objectid");

            // Retrieve the actual SiteMap record
            Entity sitemap;
            try
            {
                sitemap = _serviceClient.Retrieve("sitemap", siteMapId,
                    new ColumnSet("sitemapxml"));
            }
            catch
            {
                return (null,
                    $"[Error] SiteMap record not found (ID: {siteMapId})\n" +
                    $"App: '{appName}' ({appModuleId})");
            }

            var xml = sitemap.GetAttributeValue<string>("sitemapxml");
            if (string.IsNullOrWhiteSpace(xml))
                return (null,
                    $"[Error] SiteMap XML is empty for app '{appName}'\n" +
                    "Tip: Use manage_sitemap(action='create') to initialize a SiteMap.");

            return (xml, null);
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        // ── JSON helpers ──────────────────────────────────────────────────

        private static string GetStringProp(JsonElement el, string name)
        {
            if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
            {
                var val = prop.GetString();
                return string.IsNullOrWhiteSpace(val) ? null : val.Trim();
            }
            return null;
        }

        private static string NormalizeBoolProp(JsonElement el, string name)
        {
            var val = GetStringProp(el, name);
            if (val == null) return null;
            if (string.Equals(val, "true", StringComparison.OrdinalIgnoreCase) || val == "1" || string.Equals(val, "yes", StringComparison.OrdinalIgnoreCase))
                return "true";
            if (string.Equals(val, "false", StringComparison.OrdinalIgnoreCase) || val == "0" || string.Equals(val, "no", StringComparison.OrdinalIgnoreCase))
                return "false";
            throw new InvalidOperationException($"Property '{name}' must be a boolean ('true' or 'false'). Got: '{val}'");
        }

        private static string Sanitize(string s)
            => Regex.Replace(s.ToLowerInvariant(), @"[^a-z0-9]+", "_").Trim('_');

        // ── XML finder helpers ────────────────────────────────────────────

        private static XElement FindArea(XDocument doc, string areaRef)
        {
            var areas = doc.Root?.Elements("Area");
            if (areas == null) return null;

            // Match by Id (exact, case-insensitive)
            var match = areas.FirstOrDefault(a =>
                string.Equals(a.Attribute("Id")?.Value, areaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            // Match by Title label text
            match = areas.FirstOrDefault(a =>
            {
                var title = a.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, areaRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            // Match by deprecated Title attribute
            return areas.FirstOrDefault(a =>
                string.Equals(a.Attribute("Title")?.Value, areaRef, StringComparison.OrdinalIgnoreCase));
        }

        private static XElement FindGroup(XElement area, string groupRef)
        {
            var groups = area?.Elements("Group");
            if (groups == null) return null;

            var match = groups.FirstOrDefault(g =>
                string.Equals(g.Attribute("Id")?.Value, groupRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            match = groups.FirstOrDefault(g =>
            {
                var title = g.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, groupRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            return groups.FirstOrDefault(g =>
                string.Equals(g.Attribute("Title")?.Value, groupRef, StringComparison.OrdinalIgnoreCase));
        }

        private static XElement FindSubArea(XElement group, string subAreaRef)
        {
            var subAreas = group?.Elements("SubArea");
            if (subAreas == null) return null;

            var match = subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Id")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            // Match by Entity attribute
            match = subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Entity")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
            if (match != null) return match;

            // Match by Title label text
            match = subAreas.FirstOrDefault(s =>
            {
                var title = s.Element("Titles")?.Elements("Title")
                    .FirstOrDefault()?.Attribute("Title")?.Value;
                return string.Equals(title, subAreaRef, StringComparison.OrdinalIgnoreCase);
            });
            if (match != null) return match;

            return subAreas.FirstOrDefault(s =>
                string.Equals(s.Attribute("Title")?.Value, subAreaRef, StringComparison.OrdinalIgnoreCase));
        }

        private static string GetAreaLabel(XElement area)
        {
            return area.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? area.Attribute("Title")?.Value
                ?? area.Attribute("Id")?.Value ?? "?";
        }

        private static string GetGroupLabel(XElement group)
        {
            return group.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? group.Attribute("Title")?.Value
                ?? group.Attribute("Id")?.Value ?? "?";
        }

        private static string GetSubAreaLabel(XElement subArea)
        {
            return subArea.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value
                ?? subArea.Attribute("Title")?.Value
                ?? subArea.Attribute("Entity")?.Value
                ?? subArea.Attribute("Id")?.Value ?? "?";
        }

        // ── Titles helper ─────────────────────────────────────────────────

        private static XElement BuildTitlesElement(string label)
        {
            return new XElement("Titles",
                new XElement("Title",
                    new XAttribute("LCID", "1033"),
                    new XAttribute("Title", label)));
        }

        // ── Insert with position ──────────────────────────────────────────

        private static XElement BuildSubAreaElement(JsonElement sa)
        {
            var entity = GetStringProp(sa, "entity");
            var url = GetStringProp(sa, "url");
            var defaultDashboard = GetStringProp(sa, "default_dashboard");

            if (entity == null && url == null && defaultDashboard == null)
                throw new InvalidOperationException("SubArea requires 'entity', 'url', or 'default_dashboard'.");

            var saLabel = GetStringProp(sa, "label");
            var saId = GetStringProp(sa, "id")
                ?? (entity != null ? $"sa_{Sanitize(entity)}" : $"sa_{Sanitize(saLabel ?? "item")}");

            var subArea = new XElement("SubArea", new XAttribute("Id", saId));
            if (entity != null) subArea.Add(new XAttribute("Entity", entity));
            if (url != null) subArea.Add(new XAttribute("Url", url));
            if (saLabel != null) subArea.Add(BuildTitlesElement(saLabel));

            var client = GetStringProp(sa, "client");
            if (client != null) subArea.Add(new XAttribute("Client", client));
            var passParams = NormalizeBoolProp(sa, "pass_params");
            if (passParams != null) subArea.Add(new XAttribute("PassParams", passParams));
            if (defaultDashboard != null) subArea.Add(new XAttribute("DefaultDashboard", defaultDashboard));
            var saIcon = GetStringProp(sa, "icon");
            if (saIcon != null) subArea.Add(new XAttribute("Icon", saIcon));
            var vectorIcon = GetStringProp(sa, "vector_icon");
            if (vectorIcon != null) subArea.Add(new XAttribute("VectorIcon", vectorIcon));

            return subArea;
        }

        private static void InsertElement(XElement parent, XElement newElement, string position, string childName)
        {
            if (string.IsNullOrEmpty(position) || string.Equals(position, "last", StringComparison.OrdinalIgnoreCase))
            {
                parent.Add(newElement);
                return;
            }

            if (string.Equals(position, "first", StringComparison.OrdinalIgnoreCase))
            {
                var first = parent.Elements(childName).FirstOrDefault();
                if (first != null)
                    first.AddBeforeSelf(newElement);
                else
                    parent.Add(newElement);
                return;
            }

            if (position.StartsWith("after:", StringComparison.OrdinalIgnoreCase))
            {
                var afterId = position.Substring(6).Trim();
                var target = parent.Elements(childName).FirstOrDefault(e =>
                    string.Equals(e.Attribute("Id")?.Value, afterId, StringComparison.OrdinalIgnoreCase));
                if (target != null)
                    target.AddAfterSelf(newElement);
                else
                    throw new InvalidOperationException($"Position target '{afterId}' not found for insertion.");
                return;
            }

            throw new InvalidOperationException($"Invalid position '{position}'. Must be 'first', 'last', or 'after:<id>'.");
        }
    }
}
