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
            { 20,  "Role" },
            { 22,  "Display String" },
            { 24,  "Form" },
            { 25,  "Organization" },
            { 26,  "Saved Query (View)" },
            { 29,  "Workflow" },
            { 31,  "Report" },
            { 36,  "Email Template" },
            { 44,  "Duplicate Rule" },
            { 46,  "Entity Map" },
            { 48,  "Ribbon Command" },
            { 50,  "Ribbon Customization" },
            { 55,  "Ribbon Diff" },
            { 59,  "Chart (Visualization)" },
            { 60,  "System Form" },
            { 61,  "Web Resource" },
            { 62,  "Site Map" },
            { 63,  "Connection Role" },
            { 66,  "Custom Control" },
            { 70,  "Field Security Profile" },
            { 71,  "Field Permission" },
            { 80,  "Model Driven App" },
            { 90,  "Plugin Type" },
            { 91,  "Plugin Assembly" },
            { 92,  "SDK Message Processing Step" },
            { 93,  "SDK Message Processing Step Image" },
            { 95,  "Service Endpoint" },
            { 150, "Routing Rule" },
            { 152, "SLA" },
            { 154, "Convert Rule" },
            { 161, "Mobile Offline Profile" },
            { 380, "Environment Variable Definition" },
            { 381, "Environment Variable Value" },
            { 400, "AI Configuration" },
            { 401, "AI Project" },
            { 418, "Dataflow" },
        };

        public GetSolutionComponentsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_solution_components", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List all components inside a Dataverse solution. " +
            "Accepts either the solution unique name (logical name) or display name — " +
            "uses fuzzy (contains) matching to find the correct solution.\n\n" +

            "RETURNS:\n" +
            "- Solution info: uniqueName, displayName, version, publisher, isManaged\n" +
            "- Component summary table: count per component type\n" +
            "- Full component detail table: componentType, typeId, objectId, name " +
            "(name = logical/schema/display name; objectId can be passed to get_record or other tools)\n\n" +

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
            "instructs the AI to use the `get_entity_metadata` tool to fetch the complete " +
            "metadata (attributes, relationships, forms, views, etc.) for that entity. " +
            "This keeps the response lightweight and fast.\n\n" +

            "WHEN TO USE:\n" +
            "- Before packaging or deploying a solution, to audit its contents\n" +
            "- To find objectIds of specific components (plugin assemblies, web resources, workflows)\n" +
            "- To count entities, attributes, forms, or other component types in a solution\n" +
            "- As a prerequisite step before operating on specific solution components\n\n" +

            "TIP: The objectId column in the output is the primary key for the component — " +
            "pass it to get_record (with the appropriate entity name) to retrieve full details. " +
            "For example, Plugin Assembly objectId → get_record('pluginassembly', objectId).")]
        public string get_solution_components(
            [Description(
                "The solution unique name (e.g. 'DevKit_Core', 'mySolution') or display name " +
                "(e.g. 'DevKit Core', 'My Solution'). " +
                "Partial names are supported — fuzzy (contains) matching is applied to both uniqueName and displayName. " +
                "If multiple solutions match, the tool returns the list and asks for the exact uniqueName."
            )] string solution_name)
        {
            if (string.IsNullOrWhiteSpace(solution_name))
                return "Error: solution_name is required.";

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
                return FormatResult(solution, components, fullEntityNames);
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

            // Fuzzy match on either uniquename OR friendlyname
            var nameFilter = new FilterExpression(LogicalOperator.Or);
            nameFilter.AddCondition("uniquename", ConditionOperator.Like, $"%{keyword}%");
            nameFilter.AddCondition("friendlyname", ConditionOperator.Like, $"%{keyword}%");
            query.Criteria.AddFilter(nameFilter);

            // Bring publisher display name along
            var pubLink = query.AddLink("publisher", "publisherid", "publisherid", JoinOperator.LeftOuter);
            pubLink.Columns = new ColumnSet("friendlyname");
            pubLink.EntityAlias = "pub";

            return _serviceClient.RetrieveMultiple(query).Entities.ToList();
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
            //    the entity logical name so we can instruct the AI to use get_entity_metadata.
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
            sb.AppendLine($"# Multiple Solutions Found for \"{keyword}\"");
            sb.AppendLine();
            sb.AppendLine($"Found **{solutions.Count}** solutions matching your keyword. " +
                          "Please call `get_solution_components` again using the exact **UniqueName** from the table below:");
            sb.AppendLine();
            sb.AppendLine("| UniqueName | DisplayName | Version | IsManaged |");
            sb.AppendLine("| --- | --- | --- | --- |");
            foreach (var s in solutions.OrderBy(s => s.GetAttributeValue<string>("uniquename")))
            {
                var uniqueName  = s.GetAttributeValue<string>("uniquename")   ?? "";
                var displayName = s.GetAttributeValue<string>("friendlyname") ?? "";
                var version     = s.GetAttributeValue<string>("version")      ?? "";
                var isManaged   = s.GetAttributeValue<bool>("ismanaged") ? "Yes" : "No";
                sb.AppendLine($"| {uniqueName} | {displayName} | {version} | {isManaged} |");
            }
            return sb.ToString();
        }

        private string FormatResult(Entity solution, List<Entity> components, Dictionary<Guid, string> fullEntityNames)
        {
            var uniqueName   = solution.GetAttributeValue<string>("uniquename")   ?? "";
            var displayName  = solution.GetAttributeValue<string>("friendlyname") ?? "";
            var version      = solution.GetAttributeValue<string>("version")      ?? "";
            var isManaged    = solution.GetAttributeValue<bool>("ismanaged") ? "Yes" : "No";
            var publisherName = solution.GetAttributeValue<AliasedValue>("pub.friendlyname")?.Value as string ?? "";

            var sb = new StringBuilder(components.Count * 80 + 1024);

            // ── Solution info ──
            sb.AppendLine($"# Solution: {displayName} (`{uniqueName}`)");
            sb.AppendLine();
            sb.AppendLine("| Property | Value |");
            sb.AppendLine("| --- | --- |");
            sb.AppendLine($"| Unique Name | {uniqueName} |");
            sb.AppendLine($"| Display Name | {displayName} |");
            sb.AppendLine($"| Version | {version} |");
            sb.AppendLine($"| Publisher | {publisherName} |");
            sb.AppendLine($"| Is Managed | {isManaged} |");
            sb.AppendLine($"| Total Components | {components.Count} |");
            sb.AppendLine();

            // ── Full Entities guidance (if any) ──
            if (fullEntityNames.Count > 0)
            {
                sb.AppendLine($"## ⚡ Entities with \"Include All Components\" — {fullEntityNames.Count} entities");
                sb.AppendLine();
                sb.AppendLine("The following entities were added to this solution with **\"Include All Components\"** (rootComponentBehavior = 0). " +
                              "Their sub-components (attributes, relationships, forms, views, charts) are **not listed here** to keep this response lightweight.");
                sb.AppendLine();
                sb.AppendLine("> **To get full metadata for any of these entities, use the `get_entity_metadata` tool with the entity logical name.**");
                sb.AppendLine();
                sb.AppendLine("| Entity LogicalName | MetadataId | Action |");
                sb.AppendLine("| --- | --- | --- |");
                foreach (var kvp in fullEntityNames.OrderBy(k => k.Value))
                {
                    sb.AppendLine($"| `{kvp.Value}` | {kvp.Key} | → Use `get_entity_metadata(\"{kvp.Value}\")` |");
                }
                sb.AppendLine();
            }

            var grouped = components
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .OrderBy(g => g.Key)
                .ToList();

            // ── Summary ──
            sb.AppendLine($"## Component Summary — {components.Count} total");
            sb.AppendLine();
            sb.AppendLine("| ComponentType | TypeId | Count |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var grp in grouped)
            {
                var typeName = GetTypeName(grp.Key);
                sb.AppendLine($"| {typeName} | {grp.Key} | {grp.Count()} |");
            }
            sb.AppendLine();

            var nameMap = BuildNameMap(components, fullEntityNames);

            // ── Full component list (objectIds usable by other tools) ──
            sb.AppendLine($"## Components — {components.Count}");
            sb.AppendLine();
            sb.AppendLine("| ComponentType | TypeId | ObjectId | Name |");
            sb.AppendLine("| --- | --- | --- | --- |");
            foreach (var grp in grouped)
            {
                var typeName = GetTypeName(grp.Key);
                foreach (var c in grp)
                {
                    var objectId = c.GetAttributeValue<Guid>("objectid");
                    nameMap.TryGetValue(objectId, out var name);

                    // Mark full entities with ⚡ indicator
                    if (grp.Key == 1 && fullEntityNames.ContainsKey(objectId))
                        name = $"{name} ⚡ (full — use get_entity_metadata)";

                    sb.AppendLine($"| {typeName} | {grp.Key} | {objectId} | {name ?? ""} |");
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
                if (missing.Count > 0 && missing.Count <= 250)
                    ResolveAttributeMetadataNames(missing, nameMap);
            }

            // Step 4: Resolve relationship names (type 3) not already in cache
            if (byType.TryGetValue(3, out var relIds))
            {
                var missing = relIds.Where(id => !nameMap.ContainsKey(id)).ToList();
                if (missing.Count > 0 && missing.Count <= 250)
                    ResolveRelationshipMetadataNames(missing, nameMap);
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

        // Safe string getter for Entity attributes
        private static string S(Entity e, string attr) =>
            e.Contains(attr) ? e[attr]?.ToString() ?? "" : "";

        private static string GetTypeName(int typeId) =>
            ComponentTypeNames.TryGetValue(typeId, out var name) ? name : $"Type_{typeId}";
    }
}
