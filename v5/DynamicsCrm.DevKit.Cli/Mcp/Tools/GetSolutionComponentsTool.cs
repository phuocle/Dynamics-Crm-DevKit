using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetSolutionComponentsTool
    {
        private readonly ServiceClient _serviceClient;

        // Static dict: componenttype value → display name (avoids querying solutioncomponentdefinition + option set at runtime)
        private static readonly Dictionary<int, string> ComponentTypeNames = new()
        {
            { 1,   "Entity" },
            { 2,   "Attribute" },
            { 3,   "Relationship" },
            { 4,   "Attribute Picklist Value" },
            { 5,   "Attribute Lookup Value" },
            { 6,   "View Attribute" },
            { 7,   "Localized Label" },
            { 9,   "Option Set" },
            { 10,  "Entity Relationship" },
            { 13,  "Managed Property" },
            { 14,  "Entity Key" },
            { 16,  "Privilege" },
            { 18,  "Index" },
            { 20,  "Role" },
            { 21,  "Role Privilege" },
            { 22,  "Display String" },
            { 23,  "Display String Map" },
            { 24,  "Form" },
            { 25,  "Organization" },
            { 26,  "Saved Query (View)" },
            { 29,  "Workflow" },
            { 31,  "Report" },
            { 32,  "Report Entity" },
            { 33,  "Report Category" },
            { 34,  "Report Visibility" },
            { 35,  "Attachment" },
            { 36,  "Email Template" },
            { 37,  "Contract Template" },
            { 38,  "KB Article Template" },
            { 39,  "Mail Merge Template" },
            { 44,  "Duplicate Rule" },
            { 45,  "Duplicate Rule Condition" },
            { 46,  "Entity Map" },
            { 47,  "Attribute Map" },
            { 48,  "Ribbon Command" },
            { 49,  "Ribbon Context Group" },
            { 50,  "Ribbon Customization" },
            { 52,  "Ribbon Rule" },
            { 53,  "Ribbon Tab To Command Map" },
            { 55,  "Ribbon Diff" },
            { 59,  "Chart (Visualization)" },
            { 60,  "System Form" },
            { 61,  "Web Resource" },
            { 62,  "Site Map" },
            { 63,  "Connection Role" },
            { 64,  "Complex Control" },
            { 65,  "Hierarchy Rule" },
            { 66,  "Custom Control" },
            { 68,  "Custom Control Default Config" },
            { 70,  "Field Security Profile" },
            { 71,  "Field Permission" },
            { 80,  "Model Driven App" },
            { 90,  "Plugin Type" },
            { 91,  "Plugin Assembly" },
            { 92,  "SDK Message Processing Step" },
            { 93,  "SDK Message Processing Step Image" },
            { 95,  "Service Endpoint" },
            { 150, "Routing Rule" },
            { 151, "Routing Rule Item" },
            { 152, "SLA" },
            { 153, "SLA Item" },
            { 154, "Convert Rule" },
            { 155, "Convert Rule Item" },
            { 161, "Mobile Offline Profile" },
            { 162, "Mobile Offline Profile Item" },
            { 165, "Similarity Rule" },
            { 166, "Data Source Mapping" },
            { 201, "SDK Message" },
            { 202, "SDK Message Filter" },
            { 208, "Import Map" },
            { 300, "Canvas App" },
            { 371, "Connector" },
            { 380, "Environment Variable Definition" },
            { 381, "Environment Variable Value" },
            { 400, "AI Configuration" },
            { 401, "AI Project" },
            { 402, "AI Project Type" },
            { 418, "Dataflow" },
            { 430, "Entity Analytics Config" },
            { 431, "Attribute Image Config" },
            { 432, "Entity Image Config" },
        };

        public GetSolutionComponentsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_solution_components", Title = "List all components inside a solution",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List all components inside a Dataverse solution. " +
            "Accepts either the solution unique name (logical name) or display name — " +
            "uses fuzzy (contains) matching to find the correct solution.\n\n" +

            "RETURNS:\n" +
            "- Solution info: uniqueName, displayName, version, publisher, isManaged\n" +
            "- Component summary table: count per component type\n" +
            "- Full component detail table: componentType, typeId, objectId, name " +
            "(name = logical/schema/display name; objectId can be passed to get_record or other tools)\n" +
            "- When include_active_layers=true: adds ActiveLayer column (Yes/No) showing " +
            "which components have unmanaged (active) customization layers\n\n" +

            "FUZZY MATCH BEHAVIOR:\n" +
            "- Matches against both uniqueName and displayName using a 'contains' search\n" +
            "- If exactly 1 solution matches → proceeds and returns components\n" +
            "- If multiple solutions match → returns a list of all matching solutions and asks " +
            "the user to re-call with the exact uniqueName to disambiguate\n" +
            "- If no solution matches → returns an error message\n\n" +

            "FULL ENTITY (Include All Components) BEHAVIOR:\n" +
            "When a solution contains an entity added with 'Include All Components' " +
            "(rootComponentBehavior = 0), this tool does NOT expand it into sub-components. " +
            "Instead, it lists the entity with a note indicating it was added as full, and " +
            "instructs the AI to use the `get_metadata_entities` tool to fetch the complete " +
            "metadata (attributes, relationships, forms, views, etc.) for that entity. " +
            "This keeps the response lightweight and fast.\n\n" +

            "ACTIVE LAYER CHECKING:\n" +
            "Use include_active_layers=true to check which components have unmanaged customizations " +
            "(active layers in the solution layering system). A component with an active layer means " +
            "it has been customized outside of managed solutions. " +
            "Use active_layers_only=true to filter and show ONLY components with active layers — " +
            "useful for cleanup audits before deploying managed solutions.\n" +
            "Note: Active layer checking requires additional API calls (batched in groups of 200) " +
            "and may take longer for solutions with many components.\n\n" +

            "WHEN TO USE:\n" +
            "- Before packaging or deploying a solution, to audit its contents\n" +
            "- To find objectIds of specific components (plugin assemblies, web resources, workflows)\n" +
            "- To count entities, attributes, forms, or other component types in a solution\n" +
            "- As a prerequisite step before operating on specific solution components\n" +
            "- To identify components with unmanaged customizations (active layers) before deploying managed solutions\n" +
            "- To audit which components need cleanup (active_layers_only=true)\n\n" +

            "TIP: The objectId column in the output is the primary key for the component — " +
            "pass it to get_record (with the appropriate entity name) to retrieve full details. " +
            "For example, Plugin Assembly objectId → get_record('pluginassembly', objectId).")]
        public string get_solution_components(
            [Description(
                "The solution unique name (e.g. 'DevKit_Core', 'mySolution') or display name " +
                "(e.g. 'DevKit Core', 'My Solution'). " +
                "Partial names are supported — fuzzy (contains) matching is applied to both uniqueName and displayName. " +
                "If multiple solutions match, the tool returns the list and asks for the exact uniqueName."
            )] string solution_name,
            [Description(
                "When true, queries msdyn_componentlayer for each component and adds an ActiveLayer column " +
                "(Yes/No) to the output. An active layer means the component has unmanaged customizations. " +
                "Default: false (skipped for performance). Note: adds API calls batched in groups of 200."
            )] bool include_active_layers = false,
            [Description(
                "When true, implies include_active_layers=true and filters the output to show ONLY " +
                "components that have an active (unmanaged) layer. Useful for cleanup audits. " +
                "Default: false."
            )] bool active_layers_only = false)
        {
            if (string.IsNullOrWhiteSpace(solution_name))
                return "Error: solution_name is required.";

            // active_layers_only implies include_active_layers
            if (active_layers_only)
                include_active_layers = true;

            try
            {
                var solutions = FindSolutions(solution_name.Trim());

                if (solutions.Count == 0)
                    return $"Error: No solution found matching '{solution_name}'. " +
                           "Verify the solution unique name or display name in your Dataverse environment.";

                if (solutions.Count > 1)
                    return FormatMultipleSolutions(solution_name, solutions);

                var solution = solutions[0];
                var (components, fullEntityNames) = LoadComponents(solution.Id);

                // Active layer checking (only when requested)
                Dictionary<Guid, bool> activeLayers = null;
                if (include_active_layers)
                    activeLayers = CheckActiveLayers(components);

                return FormatResult(solution, components, fullEntityNames, activeLayers, active_layers_only);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to get solution components: {ex.Message}";
            }
        }

        // ── Query helpers ────────────────────────────────────────────────────────

        private List<Entity> FindSolutions(string keyword)
        {
            var query = new QueryExpression("solution")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("solutionid", "uniquename", "friendlyname", "version", "ismanaged", "publisherid"),
                // Root: AND
                Criteria = new FilterExpression(LogicalOperator.And)
            };

            // Exclude hidden/system solutions
            query.Criteria.AddCondition("isvisible", ConditionOperator.Equal, true);

            // Escape SQL LIKE wildcards (%, _, [) in user input before wrapping
            var escaped = keyword.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");

            // Fuzzy match on either uniquename OR friendlyname
            var nameFilter = new FilterExpression(LogicalOperator.Or);
            nameFilter.AddCondition("uniquename", ConditionOperator.Like, $"%{escaped}%");
            nameFilter.AddCondition("friendlyname", ConditionOperator.Like, $"%{escaped}%");
            query.Criteria.AddFilter(nameFilter);

            // Bring publisher display name along
            var pubLink = query.AddLink("publisher", "publisherid", "publisherid", JoinOperator.LeftOuter);
            pubLink.Columns = new ColumnSet("friendlyname");
            pubLink.EntityAlias = "pub";

            var results = _serviceClient.RetrieveMultiple(query).Entities.ToList();

            // Exact-match priority: if multiple fuzzy matches but one has exact uniquename, prefer it
            if (results.Count > 1)
            {
                var exact = results.FirstOrDefault(s =>
                    string.Equals(s.GetAttributeValue<string>("uniquename"), keyword, StringComparison.OrdinalIgnoreCase));
                if (exact != null)
                    return new List<Entity> { exact };
            }

            return results;
        }

        /// <summary>
        /// Loads solution components. For entities added with "Include All Components" (rootComponentBehavior = 0),
        /// only resolves their logical names via a lightweight metadata query — does NOT expand into sub-components.
        /// Returns the component list and a dictionary of full-entity MetadataId → LogicalName.
        /// </summary>
        private (List<Entity> Components, Dictionary<Guid, string> FullEntityNames) LoadComponents(Guid solutionId)
        {
            // 1) Fetch all direct solutioncomponent rows for this solution
            var allComponents = _serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponent")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("objectid", "componenttype", "rootcomponentbehavior"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId) }
                }
            }).Entities.ToList();

            var components = new List<Entity>(allComponents);

            // 2) Find Entity components added with "Include All Components" (rootcomponentbehavior = 0)
            //    Instead of expanding into sub-components (which is very heavy), we only resolve
            //    the entity logical name so we can instruct the AI to use get_metadata_entities.
            var fullEntityIds = allComponents
                .Where(c =>
                    c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 1 &&
                    c.GetAttributeValue<OptionSetValue>("rootcomponentbehavior")?.Value == 0)
                .Select(c => c.GetAttributeValue<Guid>("objectid"))
                .ToArray();

            var fullEntityNames = new Dictionary<Guid, string>();

            if (fullEntityIds.Length == 0)
                return (components, fullEntityNames);

            // 3) Lightweight metadata query — only fetch MetadataId + LogicalName (no attributes, no relationships)
            try
            {
                var entityQuery = new EntityQueryExpression
                {
                    Criteria = new MetadataFilterExpression(LogicalOperator.And)
                    {
                        Conditions =
                        {
                            new MetadataConditionExpression("MetadataId", MetadataConditionOperator.In, fullEntityIds)
                        }
                    },
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName")
                };

                var response = (RetrieveMetadataChangesResponse)_serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = entityQuery });

                foreach (var em in response.EntityMetadata)
                {
                    if (em.MetadataId.HasValue && em.LogicalName != null)
                        fullEntityNames[em.MetadataId.Value] = em.LogicalName;
                }
            }
            catch { /* skip on metadata query failure */ }

            return (components, fullEntityNames);
        }

        // ── Output formatters ────────────────────────────────────────────────────

        private static string FormatMultipleSolutions(string keyword, List<Entity> solutions)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[Multiple Solutions] {solutions.Count} matches for \"{keyword}\"");
            sb.AppendLine("Re-call with exact UniqueName:");
            sb.AppendLine();
            sb.AppendLine("UniqueName\tDisplayName\tVersion\tIsManaged");
            foreach (var s in solutions.OrderBy(s => s.GetAttributeValue<string>("uniquename")))
            {
                var uniqueName  = s.GetAttributeValue<string>("uniquename")   ?? "";
                var displayName = s.GetAttributeValue<string>("friendlyname") ?? "";
                var version     = s.GetAttributeValue<string>("version")      ?? "";
                var isManaged   = s.GetAttributeValue<bool>("ismanaged") ? "Yes" : "No";
                sb.AppendLine($"{uniqueName}\t{displayName}\t{version}\t{isManaged}");
            }
            return sb.ToString();
        }

        private string FormatResult(Entity solution, List<Entity> components, Dictionary<Guid, string> fullEntityNames,
            Dictionary<Guid, bool> activeLayers, bool activeLayersOnly)
        {
            var uniqueName   = solution.GetAttributeValue<string>("uniquename")   ?? "";
            var displayName  = solution.GetAttributeValue<string>("friendlyname") ?? "";
            var version      = solution.GetAttributeValue<string>("version")      ?? "";
            var isManaged    = solution.GetAttributeValue<bool>("ismanaged") ? "Yes" : "No";
            var publisherName = solution.GetAttributeValue<AliasedValue>("pub.friendlyname")?.Value as string ?? "";

            var sb = new StringBuilder(components.Count * 60 + 1024);
            var showActiveLayers = activeLayers != null;

            // ── Solution info ──
            sb.AppendLine($"[Solution] {displayName} ({uniqueName})");
            sb.AppendLine($"Version: {version}");
            sb.AppendLine($"Publisher: {publisherName}");
            sb.AppendLine($"IsManaged: {isManaged}");
            sb.AppendLine($"Components: {components.Count}");
            if (showActiveLayers)
            {
                var activeCount = activeLayers.Count(kv => kv.Value);
                sb.AppendLine($"ActiveLayers: {activeCount} of {components.Count} components");
            }
            sb.AppendLine();

            // ── Full Entities guidance (if any) ──
            if (fullEntityNames.Count > 0)
            {
                sb.AppendLine($"[Full Entities] {fullEntityNames.Count} entities");
                sb.AppendLine("Use get_metadata_entities for details:");
                foreach (var kvp in fullEntityNames.OrderBy(k => k.Value))
                    sb.AppendLine($"- {kvp.Value}");
                sb.AppendLine();
            }

            var grouped = components
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .OrderBy(g => g.Key)
                .ToList();

            // ── Summary ──
            sb.AppendLine("[Component Summary]");
            if (showActiveLayers)
                sb.AppendLine("Type\tTypeId\tCount\tActiveLayers");
            else
                sb.AppendLine("Type\tTypeId\tCount");
            foreach (var grp in grouped)
            {
                var typeName = GetTypeName(grp.Key);
                if (showActiveLayers)
                {
                    var activeInGroup = grp.Count(c => activeLayers.TryGetValue(c.GetAttributeValue<Guid>("objectid"), out var a) && a);
                    sb.AppendLine($"{typeName}\t{grp.Key}\t{grp.Count()}\t{activeInGroup}");
                }
                else
                {
                    sb.AppendLine($"{typeName}\t{grp.Key}\t{grp.Count()}");
                }
            }
            sb.AppendLine();

            var nameMap = BuildNameMap(components, fullEntityNames);

            // ── Full component list ──
            // When activeLayersOnly, filter to only components with active layers
            var displayComponents = activeLayersOnly
                ? components.Where(c => activeLayers.TryGetValue(c.GetAttributeValue<Guid>("objectid"), out var a) && a).ToList()
                : components;

            var displayGrouped = displayComponents
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .OrderBy(g => g.Key)
                .ToList();

            if (activeLayersOnly)
                sb.AppendLine($"[Components] {displayComponents.Count} with active layers (of {components.Count} total)");
            else
                sb.AppendLine($"[Components] {components.Count} total");
            sb.AppendLine();

            if (showActiveLayers)
                sb.AppendLine("Type\tTypeId\tObjectId\tActiveLayer\tName");
            else
                sb.AppendLine("Type\tTypeId\tObjectId\tName");
            foreach (var grp in displayGrouped)
            {
                var typeName = GetTypeName(grp.Key);
                foreach (var c in grp)
                {
                    var objectId = c.GetAttributeValue<Guid>("objectid");
                    nameMap.TryGetValue(objectId, out var name);

                    // Mark full entities
                    if (grp.Key == 1 && fullEntityNames.ContainsKey(objectId))
                        name = $"{name} (full — use get_metadata_entities)";

                    if (showActiveLayers)
                    {
                        var isActive = activeLayers.TryGetValue(objectId, out var a) && a ? "Yes" : "No";
                        sb.AppendLine($"{typeName}\t{grp.Key}\t{objectId}\t{isActive}\t{name ?? "(unresolved)"}");
                    }
                    else
                    {
                        sb.AppendLine($"{typeName}\t{grp.Key}\t{objectId}\t{name ?? "(unresolved)"}");
                    }
                }
            }

            return sb.ToString();
        }

        // ── Name resolution ──────────────────────────────────────────────────────

        private Dictionary<Guid, string> BuildNameMap(List<Entity> components, Dictionary<Guid, string> fullEntityNames)
        {
            var nameMap = new Dictionary<Guid, string>();
            var byType = components
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .ToDictionary(g => g.Key, g => g.Select(c => c.GetAttributeValue<Guid>("objectid")).Distinct().ToList());

            // Step 1: Populate entity names from full-entity resolution (already resolved in LoadComponents)
            foreach (var kvp in fullEntityNames)
                nameMap.TryAdd(kvp.Key, kvp.Value);

            // Step 2: Resolve entity names (type 1) not already in cache
            if (byType.TryGetValue(1, out var entityIds))
            {
                var missing = entityIds.Where(id => !nameMap.ContainsKey(id)).ToList();
                if (missing.Count > 0)
                    ResolveEntityMetadataNames(missing, nameMap);
            }

            // Step 3: Resolve attribute names (type 2) not already in cache
            if (byType.TryGetValue(2, out var attrIds))
            {
                var missing = attrIds.Where(id => !nameMap.ContainsKey(id)).ToList();
                if (missing.Count > 0)
                {
                    const int attrChunkSize = 250;
                    for (var i = 0; i < missing.Count; i += attrChunkSize)
                        ResolveAttributeMetadataNames(missing.Skip(i).Take(attrChunkSize).ToList(), nameMap);
                }
            }

            // Step 4: Resolve relationship names (type 3) not already in cache
            if (byType.TryGetValue(3, out var relIds))
            {
                var missing = relIds.Where(id => !nameMap.ContainsKey(id)).ToList();
                if (missing.Count > 0)
                {
                    const int relChunkSize = 250;
                    for (var i = 0; i < missing.Count; i += relChunkSize)
                        ResolveRelationshipMetadataNames(missing.Skip(i).Take(relChunkSize).ToList(), nameMap);
                }
            }

            // Step 5: Batch-resolve entity-backed component types
            BatchResolve(byType, nameMap, 20,  "role",                          "roleid",                          new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 24,  "systemform",                    "formid",                          new ColumnSet("name", "objecttypecode"),              e => $"{S(e, "objecttypecode")} / {S(e, "name")}");
            BatchResolve(byType, nameMap, 26,  "savedquery",                    "savedqueryid",                    new ColumnSet("name", "returnedtypecode"),            e => $"{S(e, "returnedtypecode")} / {S(e, "name")}");
            BatchResolve(byType, nameMap, 29,  "workflow",                      "workflowid",                      new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 31,  "report",                        "reportid",                        new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 36,  "template",                      "templateid",                      new ColumnSet("title"),                               e => S(e, "title"));
            BatchResolve(byType, nameMap, 44,  "duplicaterule",                 "duplicateruleid",                 new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 59,  "savedqueryvisualization",       "savedqueryvisualizationid",       new ColumnSet("name", "primaryentitytypecode"),       e => $"{S(e, "primaryentitytypecode")} / {S(e, "name")}");
            BatchResolve(byType, nameMap, 60,  "systemform",                    "formid",                          new ColumnSet("name", "objecttypecode"),              e => $"{S(e, "objecttypecode")} / {S(e, "name")}");
            BatchResolve(byType, nameMap, 61,  "webresource",                   "webresourceid",                   new ColumnSet("name", "displayname"),                e => S(e, "name") is { Length: > 0 } n ? n : S(e, "displayname"));
            BatchResolve(byType, nameMap, 62,  "sitemap",                       "sitemapid",                       new ColumnSet("sitemapname"),                         e => S(e, "sitemapname"));
            BatchResolve(byType, nameMap, 63,  "connectionrole",                "connectionroleid",                new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 66,  "customcontrol",                 "customcontrolid",                 new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 70,  "fieldsecurityprofile",          "fieldsecurityprofileid",          new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 71,  "fieldpermission",               "fieldpermissionid",               new ColumnSet("entityname", "attributelogicalname"), e => $"{S(e, "entityname")}.{S(e, "attributelogicalname")}");
            BatchResolve(byType, nameMap, 80,  "appmodule",                     "appmoduleid",                     new ColumnSet("name", "uniquename"),                 e => $"{S(e, "name")} ({S(e, "uniquename")})");
            BatchResolve(byType, nameMap, 90,  "plugintype",                    "plugintypeid",                    new ColumnSet("typename"),                            e => S(e, "typename"));
            BatchResolve(byType, nameMap, 91,  "pluginassembly",                "pluginassemblyid",                new ColumnSet("name", "version"),                    e => $"{S(e, "name")} v{S(e, "version")}");
            BatchResolve(byType, nameMap, 92,  "sdkmessageprocessingstep",      "sdkmessageprocessingstepid",      new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 93,  "sdkmessageprocessingstepimage", "sdkmessageprocessingstepimageid", new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 95,  "serviceendpoint",               "serviceendpointid",               new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 150, "routingrule",                   "routingruleid",                   new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 152, "sla",                           "slaid",                           new ColumnSet("name"),                                e => S(e, "name"));
            BatchResolve(byType, nameMap, 380, "environmentvariabledefinition", "environmentvariabledefinitionid", new ColumnSet("schemaname", "displayname"),          e => $"{S(e, "schemaname")} ({S(e, "displayname")})");

            return nameMap;
        }

        private void ResolveEntityMetadataNames(List<Guid> entityIds, Dictionary<Guid, string> nameMap)
        {
            try
            {
                var query = new EntityQueryExpression
                {
                    Criteria = new MetadataFilterExpression(LogicalOperator.Or),
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName")
                };
                foreach (var id in entityIds)
                    query.Criteria.Conditions.Add(
                        new MetadataConditionExpression("MetadataId", MetadataConditionOperator.Equals, id));

                var response = (RetrieveMetadataChangesResponse)_serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = query });

                foreach (var em in response.EntityMetadata)
                    if (em.MetadataId.HasValue)
                        nameMap.TryAdd(em.MetadataId.Value, em.LogicalName);
            }
            catch { /* skip on metadata query failure */ }
        }

        private void ResolveAttributeMetadataNames(List<Guid> attrIds, Dictionary<Guid, string> nameMap)
        {
            try
            {
                var attrSet = new HashSet<Guid>(attrIds);
                var query = new EntityQueryExpression
                {
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName"),
                    AttributeQuery = new AttributeQueryExpression
                    {
                        Criteria = new MetadataFilterExpression(LogicalOperator.Or),
                        Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName")
                    }
                };
                foreach (var id in attrIds)
                    query.AttributeQuery.Criteria.Conditions.Add(
                        new MetadataConditionExpression("MetadataId", MetadataConditionOperator.Equals, id));

                var response = (RetrieveMetadataChangesResponse)_serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = query });

                foreach (var em in response.EntityMetadata)
                    foreach (var attr in em.Attributes ?? Array.Empty<AttributeMetadata>())
                        if (attr.MetadataId.HasValue && attr.LogicalName != null && attrSet.Contains(attr.MetadataId.Value))
                            nameMap.TryAdd(attr.MetadataId.Value, $"{em.LogicalName}.{attr.LogicalName}");
            }
            catch { /* skip on metadata query failure */ }
        }

        private void ResolveRelationshipMetadataNames(List<Guid> relIds, Dictionary<Guid, string> nameMap)
        {
            try
            {
                var relSet = new HashSet<Guid>(relIds);
                var query = new EntityQueryExpression
                {
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName",
                        "OneToManyRelationships", "ManyToManyRelationships"),
                    RelationshipQuery = new RelationshipQueryExpression
                    {
                        Criteria = new MetadataFilterExpression(LogicalOperator.Or),
                        Properties = new MetadataPropertiesExpression("MetadataId", "SchemaName")
                    }
                };
                foreach (var id in relIds)
                    query.RelationshipQuery.Criteria.Conditions.Add(
                        new MetadataConditionExpression("MetadataId", MetadataConditionOperator.Equals, id));

                var response = (RetrieveMetadataChangesResponse)_serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = query });

                foreach (var em in response.EntityMetadata)
                {
                    foreach (var rel in em.OneToManyRelationships ?? Array.Empty<OneToManyRelationshipMetadata>())
                        if (rel.MetadataId.HasValue && rel.SchemaName != null && relSet.Contains(rel.MetadataId.Value))
                            nameMap.TryAdd(rel.MetadataId.Value, rel.SchemaName);

                    foreach (var rel in em.ManyToManyRelationships ?? Array.Empty<ManyToManyRelationshipMetadata>())
                        if (rel.MetadataId.HasValue && rel.SchemaName != null && relSet.Contains(rel.MetadataId.Value))
                            nameMap.TryAdd(rel.MetadataId.Value, rel.SchemaName);
                }
            }
            catch { /* skip on metadata query failure */ }
        }

        private void BatchResolve(
            Dictionary<int, List<Guid>> byType,
            Dictionary<Guid, string> nameMap,
            int typeId,
            string entityName,
            string pkAttribute,
            ColumnSet columnSet,
            Func<Entity, string> nameSelector)
        {
            if (!byType.TryGetValue(typeId, out var ids) || ids.Count == 0)
                return;

            try
            {
                const int chunkSize = 500;
                for (var i = 0; i < ids.Count; i += chunkSize)
                {
                    var chunk = ids.Skip(i).Take(chunkSize).Cast<object>().ToArray();
                    var query = new QueryExpression(entityName)
                    {
                        NoLock = true,
                        ColumnSet = columnSet,
                        Criteria = new FilterExpression
                        {
                            Conditions = { new ConditionExpression(pkAttribute, ConditionOperator.In, chunk) }
                        }
                    };
                    foreach (var e in _serviceClient.RetrieveMultiple(query).Entities)
                    {
                        try { nameMap.TryAdd(e.Id, nameSelector(e) ?? ""); }
                        catch { /* ignore individual name resolution failures */ }
                    }
                }
            }
            catch { /* skip unsupported or unavailable entity types */ }
        }

        // ── Active Layer checking ────────────────────────────────────────────

        // Maps componenttype int → PascalCase API name used in msdyn_componentlayer.msdyn_solutioncomponentname
        // Derived from TaskSolutionLayer.cs enum + GetSolutionComponentName() transformations
        private static readonly Dictionary<int, string> ComponentApiNames = new()
        {
            { 1,   "Entity" },
            { 2,   "Attribute" },
            { 3,   "Relationship" },
            { 4,   "AttributePicklistValue" },
            { 5,   "AttributeLookupValue" },
            { 6,   "ViewAttribute" },
            { 7,   "LocalizedLabel" },
            { 9,   "OptionSet" },
            { 10,  "EntityRelationship" },
            { 13,  "ManagedProperty" },
            { 14,  "EntityKey" },
            { 16,  "Privilege" },
            { 18,  "Index" },
            { 20,  "Role" },
            { 21,  "RolePrivilege" },
            { 22,  "DisplayString" },
            { 23,  "DisplayStringMap" },
            { 24,  "Form" },
            { 25,  "Organization" },
            { 26,  "SavedQuery" },
            { 29,  "Workflow" },
            { 31,  "Report" },
            { 32,  "ReportEntity" },
            { 33,  "ReportCategory" },
            { 34,  "ReportVisibility" },
            { 35,  "Attachment" },
            { 36,  "EmailTemplate" },
            { 37,  "ContractTemplate" },
            { 38,  "KbArticleTemplate" },
            { 39,  "MailMergeTemplate" },
            { 44,  "DuplicateRule" },
            { 45,  "DuplicateRuleCondition" },
            { 46,  "EntityMap" },
            { 47,  "AttributeMap" },
            { 48,  "RibbonCommand" },
            { 49,  "RibbonContextGroup" },
            { 50,  "RibbonCustomization" },
            { 52,  "RibbonRule" },
            { 53,  "RibbonTabToCommandMap" },
            { 55,  "RibbonDiff" },
            { 59,  "SavedQueryVisualization" },
            { 60,  "SystemForm" },
            { 61,  "WebResource" },
            { 62,  "SiteMap" },
            { 63,  "ConnectionRole" },
            { 64,  "ComplexControl" },
            { 65,  "HierarchyRule" },
            { 66,  "CustomControl" },
            { 68,  "CustomControlDefaultConfig" },
            { 70,  "FieldSecurityProfile" },
            { 71,  "FieldPermission" },
            { 80,  "ModelDrivenApp" },
            { 90,  "PluginType" },
            { 91,  "PluginAssembly" },
            { 92,  "SdkMessageProcessingStep" },
            { 93,  "SdkMessageProcessingStepImage" },
            { 95,  "ServiceEndpoint" },
            { 150, "RoutingRule" },
            { 151, "RoutingRuleItem" },
            { 152, "Sla" },
            { 153, "SlaItem" },
            { 154, "ConvertRule" },
            { 155, "ConvertRuleItem" },
            { 161, "MobileOfflineProfile" },
            { 162, "MobileOfflineProfileItem" },
            { 165, "SimilarityRule" },
            { 166, "DataSourceMapping" },
            { 201, "SdkMessage" },
            { 202, "SdkMessageFilter" },
            { 208, "ImportMap" },
            { 300, "CanvasApp" },
            { 371, "Connector" },
            { 380, "EnvironmentVariableDefinition" },
            { 381, "EnvironmentVariableValue" },
            { 400, "AiConfiguration" },
            { 401, "AiProject" },
            { 402, "AiProjectType" },
            { 418, "msdyn_dataflow" },
            { 430, "EntityAnalyticsConfig" },
            { 431, "AttributeImageConfig" },
            { 432, "EntityImageConfig" },
        };

        private static string GetComponentApiName(int typeId)
        {
            if (ComponentApiNames.TryGetValue(typeId, out var name))
                return name;
            // Fallback: use the display name with spaces/parens removed
            if (ComponentTypeNames.TryGetValue(typeId, out var displayName))
                return displayName.Replace(" ", "").Replace("(", "").Replace(")", "");
            return typeId.ToString();
        }

        /// <summary>
        /// Batch-queries msdyn_componentlayer via ExecuteMultiple to determine which components have an active (unmanaged) layer.
        /// Pattern from TaskSolutionLayer.CheckActiveLayers.
        /// </summary>
        private Dictionary<Guid, bool> CheckActiveLayers(List<Entity> components)
        {
            var result = new Dictionary<Guid, bool>();
            if (components.Count == 0)
                return result;

            var bulk = new ExecuteMultipleRequest
            {
                Settings = new ExecuteMultipleSettings
                {
                    ContinueOnError = true,
                    ReturnResponses = true
                },
                Requests = new OrganizationRequestCollection()
            };

            // Track which request index maps to which objectId
            var requestMap = new List<Guid>();

            for (var i = 0; i < components.Count; i++)
            {
                var entity = components[i];
                var typeId = entity.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0;
                var objectId = entity.GetAttributeValue<Guid>("objectid");
                var apiName = GetComponentApiName(typeId);

                var req = new RetrieveMultipleRequest
                {
                    Query = new QueryExpression("msdyn_componentlayer")
                    {
                        NoLock = true,
                        ColumnSet = new ColumnSet("msdyn_solutionname"),
                        Criteria = new FilterExpression
                        {
                            Conditions =
                            {
                                new ConditionExpression("msdyn_solutioncomponentname", ConditionOperator.Equal, apiName),
                                new ConditionExpression("msdyn_componentid", ConditionOperator.Equal, objectId)
                            }
                        }
                    }
                };
                bulk.Requests.Add(req);
                requestMap.Add(objectId);

                if (bulk.Requests.Count == 200 || i == components.Count - 1)
                {
                    try
                    {
                        var bulkResponse = (ExecuteMultipleResponse)_serviceClient.Execute(bulk);
                        foreach (var response in bulkResponse.Responses)
                        {
                            if (response.Fault != null)
                                continue;

                            var layers = ((RetrieveMultipleResponse)response.Response).EntityCollection.Entities;
                            var hasActive = layers.Any(x =>
                                string.Equals(x.GetAttributeValue<string>("msdyn_solutionname"), "Active", StringComparison.OrdinalIgnoreCase));
                            var objId = requestMap[response.RequestIndex];
                            result[objId] = hasActive;
                        }
                    }
                    catch { /* skip batch on failure */ }

                    bulk.Requests.Clear();
                    requestMap.Clear();
                }
            }

            return result;
        }

        // Safe string getter for Entity attributes
        private static string S(Entity e, string attr) =>
            e.Contains(attr) ? e[attr]?.ToString() ?? "" : "";

        private static string GetTypeName(int typeId) =>
            ComponentTypeNames.TryGetValue(typeId, out var name) ? name : $"Type_{typeId}";
    }
}
