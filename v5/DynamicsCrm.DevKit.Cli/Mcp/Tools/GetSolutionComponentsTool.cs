using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetSolutionComponentsTool : McpToolBase
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
            // Modern component types (from solutioncomponentdefinition)
            { 181,   "SDK Message Pair" },
            { 10032, "Managed Identity" },
            { 10036, "Custom API" },
            { 10037, "Custom API Request Parameter" },
            { 10038, "Custom API Response Property" },
            { 10039, "Plugin Package" },
            { 10088, "App Element" },
            { 10091, "App Setting" },
            { 10326, "App Action" },
        };

        public GetSolutionComponentsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_solution_components", Title = "List all components inside a solution",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetSolutionComponentsResult)),
        Description(
            "List components in a Dataverse solution. Returns: solution info + count-per-type summary + detail (componentType, objectId, name). Full Entity components (rootComponentBehavior=0) listed as-is — use get_tables for sub-components. solution_name resolves Display Name contains first, then unique name contains; ambiguity returns IsError=true with candidates.\n\n" +

            "WHEN TO USE:\n" +
            "- Audit solution contents before packaging/deploying\n" +
            "- Find objectIds for plugins, web resources, workflows\n" +
            "- Identify unmanaged customizations before importing managed solutions\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → entity/attribute metadata for sub-components\n" +
            "- get_plugins → plugin assembly/type/step detail\n" +
            "- manage_webresource → web resource detail")]
        public CallToolResult get_solution_components(
            [Description("Solution unique/display name; multiple matches return choices.")] string solution_name = "",
            [Description("Add ActiveLayer (Yes/No) via msdyn_componentlayer. Active = unmanaged customization exists.")] bool include_active_layers = false,
            [Description("Show only active-layer components; implies include_active_layers.")] bool active_layers_only = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(solution_name))
                    return Error("solution_name is required.",
                        "Provide the solution uniqueName (e.g. 'DevKit_Core') or displayName (e.g. 'DevKit Core').");

                // active_layers_only implies include_active_layers
                if (active_layers_only)
                    include_active_layers = true;

            
                var solutionResult = ResolveSolution(solution_name.Trim());
                if (!solutionResult.IsSuccess)
                {
                    // Ambiguous → return structured candidates so AI can re-call with exact name
                    if (solutionResult.Status == ResolveStatus.Ambiguous && solutionResult.Candidates.Count > 0)
                    {
                        var matches = solutionResult.Candidates.Select(c => new SolutionMatchEntry
                        {
                            UniqueName = c.UniqueName ?? "",
                            DisplayName = c.DisplayName ?? "",
                            Version = "",
                            IsManaged = false
                        }).ToList();
                        // Single-line message only — the candidate table travels in [Detail]/structured output
                        var retryHint = "Re-call with a more specific solution_name value.";
                        var message = solutionResult.Error.Split("\r\n")[0].Replace("[AmbiguousSolution] ", "");
                        return Error(message, retryHint, new GetSolutionComponentsResult
                        {
                            TotalComponents = 0,
                            SolutionMatches = matches
                        });
                    }

                    if (solutionResult.Status == ResolveStatus.NotFound)
                        return Error(
                            $"'{solution_name.Trim()}' was not found by Display Name or Logical/Unique/Schema Name.",
                            "Use get_solution_components with a more specific solution_name.");

                    return Error(solutionResult.Error.Split("\r\n")[0],
                        "Use get_solution_components with a more specific solution_name.");
                }

                var solution = solutionResult.Value;
                var (components, fullEntityNames) = LoadComponents(solution.Id);

                // Active layer checking (only when requested)
                Dictionary<Guid, bool> activeLayers = null;
                if (include_active_layers)
                    activeLayers = CheckActiveLayers(components);

                var structured = BuildStructuredResult(solution, components, fullEntityNames, activeLayers, active_layers_only);
                return Success(
                    BuildSummaryText(solution, components, activeLayers, active_layers_only),
                    structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Query helpers ────────────────────────────────────────────────────────

        private ResolveResult<Entity> ResolveSolution(string keyword)
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

            var nameFilter = new FilterExpression(LogicalOperator.Or);
            foreach (var term in DisplayNameFirstResolver.GetSearchInputs(keyword))
            {
                // Escape SQL LIKE wildcards (%, _, [) in user input before wrapping
                var escaped = term.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
                nameFilter.AddCondition("uniquename", ConditionOperator.Like, $"%{escaped}%");
                nameFilter.AddCondition("friendlyname", ConditionOperator.Like, $"%{escaped}%");
            }
            query.Criteria.AddFilter(nameFilter);

            // Bring publisher display name along
            var pubLink = query.AddLink("publisher", "publisherid", "publisherid", JoinOperator.LeftOuter);
            pubLink.Columns = new ColumnSet("friendlyname");
            pubLink.EntityAlias = "pub";

            var results = _serviceClient.RetrieveMultiple(query).Entities;
            var candidates = results.Select(s => new DisplayNameFirstCandidate<Entity>
            {
                Value = s,
                DisplayName = s.GetAttributeValue<string>("friendlyname"),
                UniqueName = s.GetAttributeValue<string>("uniquename"),
                Id = s.Id,
                Kind = "solution",
                CanonicalName = s.GetAttributeValue<string>("uniquename")
            });

            return DisplayNameFirstResolver.Resolve(
                keyword,
                candidates,
                "[AmbiguousSolution]",
                "[NotFoundSolution]",
                "Use get_solution_components with a more specific solution_name.",
                "solution_name");
        }

        /// <summary>
        /// Loads solution components. For entities added with "Include All Components" (rootComponentBehavior = 0),
        /// only resolves their logical names via a lightweight metadata query — does NOT expand into sub-components.
        /// Returns the component list and a dictionary of full-entity MetadataId → LogicalName.
        /// </summary>
        private (List<Entity> Components, Dictionary<Guid, string> FullEntityNames) LoadComponents(Guid solutionId)
        {
            // 1) Fetch all direct solutioncomponent rows for this solution (paged — solutions can have >5000 components)
            var allComponents = new List<Entity>();
            var componentQuery = new QueryExpression("solutioncomponent")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("objectid", "componenttype", "rootcomponentbehavior"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId) }
                },
                PageInfo = new PagingInfo { Count = 5000, PageNumber = 1, PagingCookie = null }
            };

            while (true)
            {
                var page = _serviceClient.RetrieveMultiple(componentQuery);
                allComponents.AddRange(page.Entities);
                if (!page.MoreRecords)
                    break;
                componentQuery.PageInfo.PageNumber++;
                componentQuery.PageInfo.PagingCookie = page.PagingCookie;
            }

            var components = new List<Entity>(allComponents);

            // 2) Find Entity components added with "Include All Components" (rootcomponentbehavior = 0)
            //    Instead of expanding into sub-components (which is very heavy), we only resolve
            //    the entity logical name so we can instruct the AI to use get_tables.
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
            //    Chunked: metadata 'In' queries hit the 300-condition hard limit with large solutions.
            const int chunkSize = 250;
            for (var i = 0; i < fullEntityIds.Length; i += chunkSize)
            {
                var chunk = fullEntityIds.Skip(i).Take(chunkSize).ToArray();
                var entityQuery = new EntityQueryExpression
                    {
                        Criteria = new MetadataFilterExpression(LogicalOperator.And)
                        {
                            Conditions =
                            {
                                new MetadataConditionExpression("MetadataId", MetadataConditionOperator.In, chunk)
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

            return (components, fullEntityNames);
        }

        // ── Output formatters ────────────────────────────────────────────────────

        private static string BuildSummaryText(Entity solution, List<Entity> components,
            Dictionary<Guid, bool> activeLayers, bool activeLayersOnly)
        {
            var displayName = solution.GetAttributeValue<string>("friendlyname") ?? "";
            var uniqueName  = solution.GetAttributeValue<string>("uniquename")   ?? "";
            var displayCount = activeLayersOnly
                ? components.Count(c => activeLayers.TryGetValue(c.GetAttributeValue<Guid>("objectid"), out var a) && a)
                : components.Count;

            if (activeLayers != null)
            {
                var activeCount = activeLayers.Count(kv => kv.Value);
                return activeLayersOnly
                    ? $"{displayName} ({uniqueName}): {displayCount} active-layer components of {components.Count} total."
                    : $"{displayName} ({uniqueName}): {components.Count} components, {activeCount} with active layers.";
            }

            return $"{displayName} ({uniqueName}): {components.Count} components.";
        }

        // ── Name resolution ──────────────────────────────────────────────────────

        private GetSolutionComponentsResult BuildStructuredResult(Entity solution, List<Entity> components,
            Dictionary<Guid, string> fullEntityNames, Dictionary<Guid, bool> activeLayers, bool activeLayersOnly)
        {
            var nameMap = BuildNameMap(components, fullEntityNames);
            var showActiveLayers = activeLayers != null;
            var displayComponents = activeLayersOnly
                ? components.Where(c => activeLayers.TryGetValue(c.GetAttributeValue<Guid>("objectid"), out var a) && a).ToList()
                : components;

            var summary = components
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .OrderBy(g => g.Key)
                .Select(g => new SolutionComponentSummaryEntry
                {
                    Type = GetTypeName(g.First()),
                    TypeId = g.Key,
                    Count = g.Count(),
                    ActiveLayerCount = showActiveLayers
                        ? g.Count(c => activeLayers.TryGetValue(c.GetAttributeValue<Guid>("objectid"), out var a) && a)
                        : null
                })
                .ToList();

            var componentEntries = displayComponents
                .GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0)
                .OrderBy(g => g.Key)
                .SelectMany(g => g.Select(c =>
                {
                    var objectId = c.GetAttributeValue<Guid>("objectid");
                    nameMap.TryGetValue(objectId, out var name);
                    var isFullEntity = g.Key == 1 && fullEntityNames.ContainsKey(objectId);

                    return new SolutionComponentEntry
                    {
                        Type = GetTypeName(c),
                        TypeId = g.Key,
                        ObjectId = objectId.ToString(),
                        Name = name ?? "(unresolved)",
                        HasActiveLayer = showActiveLayers
                            ? activeLayers.TryGetValue(objectId, out var active) && active
                            : null,
                        IsFullEntity = isFullEntity
                    };
                }))
                .ToList();

            return new GetSolutionComponentsResult
            {
                Solution = new SolutionInfoEntry
                {
                    SolutionId = solution.Id.ToString(),
                    UniqueName = solution.GetAttributeValue<string>("uniquename") ?? "",
                    DisplayName = solution.GetAttributeValue<string>("friendlyname") ?? "",
                    Version = solution.GetAttributeValue<string>("version") ?? "",
                    IsManaged = solution.GetAttributeValue<bool>("ismanaged"),
                    PublisherName = solution.GetAttributeValue<AliasedValue>("pub.friendlyname")?.Value as string ?? ""
                },
                TotalComponents = components.Count,
                IncludeActiveLayers = showActiveLayers,
                ActiveLayersOnly = activeLayersOnly,
                ActiveLayerCount = showActiveLayers ? activeLayers.Count(kv => kv.Value) : null,
                FullEntities = fullEntityNames.Count > 0 ? fullEntityNames.Values.OrderBy(v => v).ToList() : null,
                Summary = summary,
                Components = componentEntries
            };
        }

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
                {
                    const int entityChunkSize = 250;
                    for (var i = 0; i < missing.Count; i += entityChunkSize)
                        ResolveEntityMetadataNames(missing.Skip(i).Take(entityChunkSize).ToList(), nameMap);
                }
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
            // Type 381 (environmentvariablevalue): resolve name via linked definition's schemaname.
            // Never query/return the 'value' field — it may contain secrets.
            if (byType.TryGetValue(381, out var envVarValueIds) && envVarValueIds.Count > 0)
                ResolveEnvironmentVariableValueNames(envVarValueIds, nameMap);
            BatchResolve(byType, nameMap, 300, "canvasapp",                     "canvasappid",                     new ColumnSet("name", "displayname"),                e => S(e, "displayname") is { Length: > 0 } n ? n : S(e, "name"));
            BatchResolve(byType, nameMap, 10032, "managedidentity",             "managedidentityid",               new ColumnSet("managedidentityid"),                  e => e.Id.ToString());
            BatchResolve(byType, nameMap, 10036, "customapi",                   "customapiid",                     new ColumnSet("name", "uniquename"),                 e => S(e, "uniquename") is { Length: > 0 } n ? n : S(e, "name"));
            BatchResolve(byType, nameMap, 10037, "customapirequestparameter",   "customapirequestparameterid",     new ColumnSet("name", "uniquename"),                 e => S(e, "uniquename") is { Length: > 0 } n ? n : S(e, "name"));
            BatchResolve(byType, nameMap, 10038, "customapiresponseproperty",   "customapiresponsepropertyid",     new ColumnSet("name", "uniquename"),                 e => S(e, "uniquename") is { Length: > 0 } n ? n : S(e, "name"));
            BatchResolve(byType, nameMap, 10039, "pluginpackage",               "pluginpackageid",                 new ColumnSet("name", "version"),                    e => $"{S(e, "name")} v{S(e, "version")}");
            BatchResolve(byType, nameMap, 10326, "appaction",                   "appactionid",                     new ColumnSet("name"),                                e => S(e, "name"));

            return nameMap;
        }

        private void ResolveEntityMetadataNames(List<Guid> entityIds, Dictionary<Guid, string> nameMap)
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

        private void ResolveAttributeMetadataNames(List<Guid> attrIds, Dictionary<Guid, string> nameMap)
        {
            var attrSet = new HashSet<Guid>(attrIds);
            var query = new EntityQueryExpression
                {
                    // 'Attributes' is required in entity properties when an AttributeQuery is specified
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName", "Attributes"),
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

        private void ResolveRelationshipMetadataNames(List<Guid> relIds, Dictionary<Guid, string> nameMap)
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
                    nameMap.TryAdd(e.Id, nameSelector(e) ?? "");
            }
        }

        // ── Environment Variable Value name resolution ─────────────────────────
        // Resolves the display name via the linked environmentvariabledefinition.schemaname.
        // Never queries or returns the 'value' field — it may contain secrets.
        private void ResolveEnvironmentVariableValueNames(List<Guid> ids, Dictionary<Guid, string> nameMap)
        {
            const int chunkSize = 500;
            for (var i = 0; i < ids.Count; i += chunkSize)
            {
                var chunk = ids.Skip(i).Take(chunkSize).Cast<object>().ToArray();
                var query = new QueryExpression("environmentvariablevalue")
                {
                    NoLock = true,
                    ColumnSet = new ColumnSet("environmentvariablevalueid"),
                    Criteria = new FilterExpression
                    {
                        Conditions = { new ConditionExpression("environmentvariablevalueid", ConditionOperator.In, chunk) }
                    }
                };
                var link = query.AddLink("environmentvariabledefinition", "environmentvariabledefinitionid", "environmentvariabledefinitionid", JoinOperator.LeftOuter);
                link.Columns = new ColumnSet("schemaname", "displayname");
                link.EntityAlias = "def";

                foreach (var e in _serviceClient.RetrieveMultiple(query).Entities)
                {
                    var schemaName = e.GetAttributeValue<AliasedValue>("def.schemaname")?.Value as string;
                    var displayName = e.GetAttributeValue<AliasedValue>("def.displayname")?.Value as string;
                    var name = !string.IsNullOrWhiteSpace(schemaName) ? schemaName
                               : !string.IsNullOrWhiteSpace(displayName) ? displayName
                               : e.Id.ToString();
                    nameMap.TryAdd(e.Id, name);
                }
            }
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
            // Modern component types (from solutioncomponentdefinition)
            { 181,   "SdkMessagePair" },
            { 10032, "ManagedIdentity" },
            { 10036, "CustomApi" },
            { 10037, "CustomApiRequestParameter" },
            { 10038, "CustomApiResponseProperty" },
            { 10039, "PluginPackage" },
            { 10088, "AppElement" },
            { 10091, "AppSetting" },
            { 10326, "AppAction" },
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
                    var bulkResponse = (ExecuteMultipleResponse)_serviceClient.Execute(bulk);
                    foreach (var response in bulkResponse.Responses)
                    {
                        if (response.Fault != null)
                            throw new InvalidOperationException(response.Fault.Message);

                        var layers = ((RetrieveMultipleResponse)response.Response).EntityCollection.Entities;
                        var hasActive = layers.Any(x =>
                            string.Equals(x.GetAttributeValue<string>("msdyn_solutionname"), "Active", StringComparison.OrdinalIgnoreCase));
                        var objId = requestMap[response.RequestIndex];
                        result[objId] = hasActive;
                    }

                    bulk.Requests.Clear();
                    requestMap.Clear();
                }
            }

            return result;
        }

        // Safe string getter for Entity attributes
        private static string S(Entity e, string attr) =>
            e.Contains(attr) ? e[attr]?.ToString() ?? "" : "";

        private static string GetTypeName(Entity component)
        {
            if (component.FormattedValues.TryGetValue("componenttype", out var label) &&
                !string.IsNullOrWhiteSpace(label))
                return label;
            var typeId = component.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0;
            return ComponentTypeNames.TryGetValue(typeId, out var name) ? name : $"Type_{typeId}";
        }
    }
}
