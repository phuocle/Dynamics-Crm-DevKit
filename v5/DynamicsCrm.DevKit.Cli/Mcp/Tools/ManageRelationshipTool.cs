using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRelationshipTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageRelationshipTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient ?? throw new ArgumentNullException(nameof(serviceClient));
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_relationship", Title = "Manage Dataverse relationships",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRelationshipResult)),
        Description(
            "Manage Dataverse 1:N, N:N relationships and polymorphic lookup targets.\n" +
            "Actions: create_1n (referenced_entity + referencing_entity + solution_name, auto-creates lookup), " +
            "create_nn (entity1 + entity2 + solution_name, auto-creates intersect), " +
            "update (relationship_name — cascade / menu / hierarchy), " +
            "delete (relationship_name), " +
            "add_target (entity_name + attribute_name + referenced_entity + solution_name — polymorphic lookup), " +
            "remove_target (entity_name + attribute_name + referenced_entity — deletes data).\n\n" +
            "is_hierarchical: self-referential 1:N only (referenced=referencing), max 1/entity. " +
            "Cascade presets: Parental (all Cascade) | Referential (NoCascade + RemoveLink) | ReferentialRestrictDelete (NoCascade + Restrict). " +
            "Cascade types: Cascade | NoCascade | RemoveLink | Restrict | Active | UserOwned.\n\n" +
            "WHEN TO USE: create 1:N (with auto lookup) / N:N (with intersect), adjust cascade/menu/hierarchy, add/remove polymorphic lookup target. " +
            "RELATED TOOLS: get_tables (discover relationships), manage_column (lookup columns), publish_customizations (batch publish).")]
        public CallToolResult manage_relationship(
            [Description("create_1n / create_nn / update / delete / add_target / remove_target.")] string action = "",
            [Description("Schema name. Required: update/delete. Auto-generated on create.")] string relationship_name = "",
            [Description("Parent (1:N create, add/remove target).")] string referenced_entity = "",
            [Description("Child (1:N create).")] string referencing_entity = "",
            [Description("First entity for N:N.")] string entity1 = "",
            [Description("Second entity for N:N.")] string entity2 = "",
            [Description("N:N intersect entity. Auto if empty.")] string intersect_entity_name = "",
            [Description("Entity with polymorphic lookup (add/remove target).")] string entity_name = "",
            [Description("Polymorphic lookup logical name.")] string attribute_name = "",
            [Description("Parental / Referential / ReferentialRestrictDelete.")] string cascade_preset = "",
            [Description("Override cascade Assign behavior.")] string cascade_assign = "",
            [Description("Override cascade Delete behavior.")] string cascade_delete = "",
            [Description("Override cascade Merge behavior.")] string cascade_merge = "",
            [Description("Override cascade Reparent behavior.")] string cascade_reparent = "",
            [Description("Override cascade Share behavior.")] string cascade_share = "",
            [Description("Override cascade Unshare behavior.")] string cascade_unshare = "",
            [Description("UseCollectionName / UseLabel / DoNotDisplay.")] string menu_behavior = "",
            [Description("Details / Sales / Service / Marketing.")] string menu_group = "",
            [Description("")] int menu_order = 10000,
            [Description("1:N create only.")] string lookup_display_name = "",
            [Description("Required: create_1n, create_nn, add_target.")] string solution_name = "",
            [Description("Self-referential 1:N (create_1n/update). 1 per entity, referenced=referencing.")] bool is_hierarchical = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required. Valid actions: create_1n, create_nn, update, delete, add_target, remove_target");

                action = action.Trim().ToLowerInvariant();

                return action switch
                {
                    "create_1n" => HandleCreate1N(referenced_entity, referencing_entity, relationship_name,
                        cascade_preset, cascade_assign, cascade_delete, cascade_merge, cascade_reparent, cascade_share, cascade_unshare,
                        menu_behavior, menu_group, menu_order, lookup_display_name, solution_name, is_hierarchical),
                    "create_nn" => HandleCreateNN(entity1, entity2, relationship_name, intersect_entity_name, solution_name),
                    "update" => HandleUpdate(relationship_name,
                        cascade_preset, cascade_assign, cascade_delete, cascade_merge, cascade_reparent, cascade_share, cascade_unshare,
                        menu_behavior, menu_group, menu_order, is_hierarchical),
                    "delete" => HandleDelete(relationship_name),
                    "add_target" => HandleAddTarget(entity_name, attribute_name, referenced_entity,
                        cascade_preset, cascade_assign, cascade_delete, cascade_merge, cascade_reparent, cascade_share, cascade_unshare,
                        menu_behavior, menu_group, menu_order, solution_name),
                    "remove_target" => HandleRemoveTarget(entity_name, attribute_name, referenced_entity),
                    _ => Error($"Invalid action '{action}'. Valid actions: create_1n, create_nn, update, delete, add_target, remove_target")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleCreate1N(string referencedEntity, string referencingEntity, string relationshipName,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, string lookupDisplayName, string solutionName, bool isHierarchical)
        {
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return Error("referenced_entity is required for create_1n (the parent/referenced entity).",
                    "Read docs://schema_tools_guide for relationship creation examples.");
            if (string.IsNullOrWhiteSpace(referencingEntity))
                return Error("referencing_entity is required for create_1n (the child/referencing entity).",
                    "Read docs://schema_tools_guide for relationship creation examples.");

            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencingEntity, "referencing_entity", out referencingEntity, out resolveError))
                return resolveError;

            if (isHierarchical && referencedEntity != referencingEntity)
                return Error($"is_hierarchical=true is only valid for self-referential relationships (referenced_entity must equal referencing_entity). Got: referenced='{referencedEntity}', referencing='{referencingEntity}'.");

            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for create_1n so the publisher prefix can be resolved.",
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix. Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return Error(solResult.Error);

            if (string.IsNullOrWhiteSpace(relationshipName))
                relationshipName = BuildRelationshipName(solResult.Prefix, referencedEntity, referencingEntity);
            if (relationshipName.Length > 100)
                relationshipName = relationshipName[..100];

            if (string.IsNullOrWhiteSpace(lookupDisplayName))
                lookupDisplayName = StripPublisherPrefix(referencedEntity, solResult.Prefix);

            var (lookupSchemaName, lookupLogicalName) = BuildLookupAttributeNames(lookupDisplayName, solResult.Prefix);

            var cascade = BuildCascadeConfiguration(cascadePreset, cascadeAssign, cascadeDelete, cascadeMerge, cascadeReparent, cascadeShare, cascadeUnshare);

            var request = new CreateOneToManyRequest
            {
                OneToManyRelationship = new OneToManyRelationshipMetadata
                {
                    SchemaName = relationshipName,
                    ReferencedEntity = referencedEntity,
                    ReferencingEntity = referencingEntity,
                    IsHierarchical = isHierarchical,
                    AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = ParseMenuBehavior(menuBehavior),
                        Group = ParseMenuGroup(menuGroup),
                        Order = menuOrder
                    },
                    CascadeConfiguration = cascade
                },
                Lookup = new LookupAttributeMetadata
                {
                    SchemaName = lookupSchemaName,
                    LogicalName = lookupLogicalName,
                    DisplayName = new Label(lookupDisplayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
                }
            };

            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solResult.UniqueName);

            if (_options.DryRun)
                return DryRun($"Would CREATE 1:N relationship '{relationshipName}' ({referencedEntity} -> {referencingEntity}) with lookup '{lookupLogicalName}'{(isHierarchical ? " [IsHierarchical=true]" : "") }.",
                    new ManageRelationshipResult
                    {
                        Action = "create_1n",
                        RelationshipName = relationshipName,
                        RelationshipType = "1:N",
                        ReferencedEntity = referencedEntity,
                        ReferencingEntity = referencingEntity,
                        LookupAttributeName = lookupLogicalName,
                        IsHierarchical = isHierarchical,
                        SolutionName = solResult.UniqueName,
                        CreateMode = "metadata",
                        IsAddToSolution = true,
                        AddToSolutionMethod = "SolutionUniqueName",
                        Status = "not_executed",
                        Published = false
                    });

            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                metadataId = response.RelationshipId;
            }, $"create 1:N relationship '{relationshipName}' ({referencedEntity} -> {referencingEntity})");

            if (!createSuccess)
            {
                return Error(
                    $"Failed to create relationship '{relationshipName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Hint: Wait 30 seconds and retry manually. If creating multiple relationships, use a phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns\n" +
                    $"  4. Wait 15-20 seconds\n" +
                    $"  5. Create all relationships");
            }

            var published = PublishHelper.PublishEntity(_context, _serviceClient, referencingEntity, waitSeconds: 20);

            return Success($"Created 1:N relationship '{relationshipName}' ({referencedEntity} -> {referencingEntity}) with lookup '{lookupLogicalName}', published={(published ? "yes" : "no")}.", new ManageRelationshipResult
            {
                Action = "create_1n",
                RelationshipName = relationshipName,
                RelationshipType = "OneToMany",
                ReferencedEntity = referencedEntity,
                ReferencingEntity = referencingEntity,
                LookupAttributeName = lookupLogicalName,
                IsHierarchical = isHierarchical,
                CascadeAssign = cascade.Assign?.ToString(),
                CascadeDelete = cascade.Delete?.ToString(),
                CascadeMerge = cascade.Merge?.ToString(),
                CascadeReparent = cascade.Reparent?.ToString(),
                CascadeShare = cascade.Share?.ToString(),
                CascadeUnshare = cascade.Unshare?.ToString(),
                MetadataId = metadataId.ToString(),
                SolutionName = string.IsNullOrWhiteSpace(solResult.UniqueName) ? null : solResult.UniqueName,
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = !string.IsNullOrWhiteSpace(solResult.UniqueName),
                AddToSolutionMethod = string.IsNullOrWhiteSpace(solResult.UniqueName) ? "none" : "SolutionUniqueName",
                Published = published,
                Status = "Created"
            });
        }

        private CallToolResult HandleCreateNN(string entity1, string entity2, string relationshipName, string intersectEntityName,
            string solutionName)
        {
            if (string.IsNullOrWhiteSpace(entity1))
                return Error("entity1 is required for create_nn.",
                    "Read docs://schema_tools_guide for relationship creation examples.");
            if (string.IsNullOrWhiteSpace(entity2))
                return Error("entity2 is required for create_nn.",
                    "Read docs://schema_tools_guide for relationship creation examples.");

            if (!TryResolveEntityInput(entity1, "entity1", out entity1, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(entity2, "entity2", out entity2, out resolveError))
                return resolveError;

            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for create_nn so the publisher prefix can be resolved.",
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix. Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return Error(solResult.Error);

            if (string.IsNullOrWhiteSpace(relationshipName))
                relationshipName = $"{solResult.Prefix}_{entity1}_{entity2}";
            if (relationshipName.Length > 100)
                relationshipName = relationshipName[..100];

            if (string.IsNullOrWhiteSpace(intersectEntityName))
                intersectEntityName = $"{solResult.Prefix}_{entity1}_{entity2}";
            if (intersectEntityName.Length > 100)
                intersectEntityName = intersectEntityName[..100];

            var request = new CreateManyToManyRequest
            {
                IntersectEntitySchemaName = intersectEntityName,
                ManyToManyRelationship = new ManyToManyRelationshipMetadata
                {
                    SchemaName = relationshipName,
                    Entity1LogicalName = entity1,
                    Entity2LogicalName = entity2,
                    Entity1AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = AssociatedMenuBehavior.UseCollectionName,
                        Group = AssociatedMenuGroup.Details,
                        Order = 10000
                    },
                    Entity2AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = AssociatedMenuBehavior.UseCollectionName,
                        Group = AssociatedMenuGroup.Details,
                        Order = 10000
                    }
                }
            };

            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solResult.UniqueName);

            if (_options.DryRun)
                return DryRun($"Would CREATE N:N relationship '{relationshipName}' between '{entity1}' and '{entity2}' (intersect: '{intersectEntityName}').", new ManageRelationshipResult
                {
                    Action = "create_nn",
                    RelationshipName = relationshipName,
                    RelationshipType = "N:N",
                    Entity1 = entity1,
                    Entity2 = entity2,
                    IntersectEntityName = intersectEntityName,
                    SolutionName = solResult.UniqueName,
                    CreateMode = "metadata",
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Status = "not_executed",
                    Published = false
                });

            var response = (CreateManyToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
            var metadataId = response.ManyToManyRelationshipId;
            var published = PublishHelper.PublishEntity(_context, _serviceClient, entity1);

            return Success($"Created N:N relationship '{relationshipName}' between '{entity1}' and '{entity2}' (intersect: '{intersectEntityName}'), published={(published ? "yes" : "no")}.", new ManageRelationshipResult
            {
                Action = "create_nn",
                RelationshipName = relationshipName,
                RelationshipType = "ManyToMany",
                Entity1 = entity1,
                Entity2 = entity2,
                IntersectEntityName = intersectEntityName,
                MetadataId = metadataId.ToString(),
                SolutionName = string.IsNullOrWhiteSpace(solResult.UniqueName) ? null : solResult.UniqueName,
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = !string.IsNullOrWhiteSpace(solResult.UniqueName),
                AddToSolutionMethod = string.IsNullOrWhiteSpace(solResult.UniqueName) ? "none" : "SolutionUniqueName",
                Published = published,
                Status = "Created"
            });
        }

        private CallToolResult HandleUpdate(string relationshipName,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, bool isHierarchical)
        {
            if (string.IsNullOrWhiteSpace(relationshipName))
                return Error("relationship_name is required for update.",
                    "Use get_tables with entity_name to find relationship_name. Read docs://schema_tools_guide for cascade preset and type values.");

            relationshipName = relationshipName.Trim();

            var retrieveResponse = (RetrieveRelationshipResponse)_serviceClient.Execute(new RetrieveRelationshipRequest { Name = relationshipName });
            var metadata = retrieveResponse.RelationshipMetadata;

            var changes = new Dictionary<string, UpdateAttributeChange>();
            var warnings = new List<string>();
            string entityToPublish = null;

            if (metadata is OneToManyRelationshipMetadata oneToMany)
            {
                entityToPublish = oneToMany.ReferencingEntity;
                var cascade = oneToMany.CascadeConfiguration;
                var newCascade = BuildCascadeConfiguration(cascadePreset, cascadeAssign, cascadeDelete, cascadeMerge, cascadeReparent, cascadeShare, cascadeUnshare);

                bool hasCascadeInput = !string.IsNullOrWhiteSpace(cascadePreset) || !string.IsNullOrWhiteSpace(cascadeAssign) ||
                    !string.IsNullOrWhiteSpace(cascadeDelete) || !string.IsNullOrWhiteSpace(cascadeMerge) ||
                    !string.IsNullOrWhiteSpace(cascadeReparent) || !string.IsNullOrWhiteSpace(cascadeShare) || !string.IsNullOrWhiteSpace(cascadeUnshare);

                if (hasCascadeInput)
                {
                    if (cascade.Assign != newCascade.Assign) { changes["cascadeAssign"] = new UpdateAttributeChange { OldValue = cascade.Assign?.ToString(), NewValue = newCascade.Assign?.ToString() }; cascade.Assign = newCascade.Assign; }
                    if (cascade.Delete != newCascade.Delete) { changes["cascadeDelete"] = new UpdateAttributeChange { OldValue = cascade.Delete?.ToString(), NewValue = newCascade.Delete?.ToString() }; cascade.Delete = newCascade.Delete; }
                    if (cascade.Merge != newCascade.Merge) { changes["cascadeMerge"] = new UpdateAttributeChange { OldValue = cascade.Merge?.ToString(), NewValue = newCascade.Merge?.ToString() }; cascade.Merge = newCascade.Merge; }
                    if (cascade.Reparent != newCascade.Reparent) { changes["cascadeReparent"] = new UpdateAttributeChange { OldValue = cascade.Reparent?.ToString(), NewValue = newCascade.Reparent?.ToString() }; cascade.Reparent = newCascade.Reparent; }
                    if (cascade.Share != newCascade.Share) { changes["cascadeShare"] = new UpdateAttributeChange { OldValue = cascade.Share?.ToString(), NewValue = newCascade.Share?.ToString() }; cascade.Share = newCascade.Share; }
                    if (cascade.Unshare != newCascade.Unshare) { changes["cascadeUnshare"] = new UpdateAttributeChange { OldValue = cascade.Unshare?.ToString(), NewValue = newCascade.Unshare?.ToString() }; cascade.Unshare = newCascade.Unshare; }
                }

                if (!string.IsNullOrWhiteSpace(menuBehavior))
                {
                    var newBehavior = ParseMenuBehavior(menuBehavior);
                    if (oneToMany.AssociatedMenuConfiguration.Behavior != newBehavior)
                    {
                        changes["menuBehavior"] = new UpdateAttributeChange { OldValue = oneToMany.AssociatedMenuConfiguration.Behavior?.ToString(), NewValue = newBehavior.ToString() };
                        oneToMany.AssociatedMenuConfiguration.Behavior = newBehavior;
                    }
                }
                if (!string.IsNullOrWhiteSpace(menuGroup))
                {
                    var newGroup = ParseMenuGroup(menuGroup);
                    if (oneToMany.AssociatedMenuConfiguration.Group != newGroup)
                    {
                        changes["menuGroup"] = new UpdateAttributeChange { OldValue = oneToMany.AssociatedMenuConfiguration.Group?.ToString(), NewValue = newGroup.ToString() };
                        oneToMany.AssociatedMenuConfiguration.Group = newGroup;
                    }
                }
                if (menuOrder != 10000 && oneToMany.AssociatedMenuConfiguration.Order != menuOrder)
                {
                    changes["menuOrder"] = new UpdateAttributeChange { OldValue = oneToMany.AssociatedMenuConfiguration.Order?.ToString(), NewValue = menuOrder.ToString() };
                    oneToMany.AssociatedMenuConfiguration.Order = menuOrder;
                }

                if (isHierarchical)
                {
                    if (oneToMany.ReferencedEntity != oneToMany.ReferencingEntity)
                        return Error($"is_hierarchical=true is only valid for self-referential relationships. '{relationshipName}' links '{oneToMany.ReferencedEntity}' -> '{oneToMany.ReferencingEntity}' which are different entities.");
                    if (oneToMany.IsHierarchical != true)
                    {
                        changes["isHierarchical"] = new UpdateAttributeChange { OldValue = oneToMany.IsHierarchical?.ToString() ?? "false", NewValue = "true" };
                        oneToMany.IsHierarchical = true;
                    }
                }
            }
            else if (metadata is ManyToManyRelationshipMetadata manyToMany)
            {
                entityToPublish = manyToMany.Entity1LogicalName;
                warnings.Add("N:N relationships do not support cascade configuration changes.");
            }
            else
            {
                return Error($"Unknown relationship type for '{relationshipName}'.");
            }

            if (changes.Count == 0 && warnings.Count == 0)
                return Error($"No changes detected for relationship '{relationshipName}'. Provide cascade_preset, cascade_* overrides, or menu_* values to update.");

            if (changes.Count > 0)
            {
                if (_options.DryRun)
                    return DryRun($"Would UPDATE relationship '{relationshipName}' with {changes.Count} change(s).", new ManageRelationshipResult
                    {
                        Action = "update",
                        RelationshipName = relationshipName,
                        Changes = changes,
                        Status = "not_executed",
                        Published = false
                    });

                var updateRequest = new UpdateRelationshipRequest
                {
                    Relationship = metadata,
                    MergeLabels = true
                };
                DataverseMutationExecutor.Execute(_context, _serviceClient, updateRequest);
            }

            var published = changes.Count > 0 && entityToPublish != null
                && PublishHelper.PublishEntity(_context, _serviceClient, entityToPublish);

            var summary = $"Updated relationship '{relationshipName}' with {changes.Count} change(s), published={(published ? "yes" : "no")}.";

            return Success(summary, new ManageRelationshipResult
            {
                Action = "update",
                RelationshipName = relationshipName,
                RelationshipType = metadata is OneToManyRelationshipMetadata ? "OneToMany" : "ManyToMany",
                IsHierarchical = metadata is OneToManyRelationshipMetadata otm2 ? otm2.IsHierarchical : null,
                MetadataId = metadata.MetadataId?.ToString(),
                Published = published,
                Changes = changes.Count > 0 ? changes : null,
                Warnings = warnings.Count > 0 ? warnings : null,
                Status = changes.Count > 0 ? "Updated" : "NoChanges"
            });
        }

        private CallToolResult HandleDelete(string relationshipName)
        {
            if (string.IsNullOrWhiteSpace(relationshipName))
                return Error("relationship_name is required for delete.",
                    "Use get_tables with entity_name to find relationship_name.");

            relationshipName = relationshipName.Trim();

            var retrieveResponse = (RetrieveRelationshipResponse)_serviceClient.Execute(new RetrieveRelationshipRequest { Name = relationshipName });
            var metadata = retrieveResponse.RelationshipMetadata;

            if (_options.DryRun)
                return DryRun($"Would DELETE relationship '{relationshipName}'.", new ManageRelationshipResult
                {
                    Action = "delete",
                    RelationshipName = relationshipName,
                    Status = "not_executed",
                    Published = false
                });

            DataverseMutationExecutor.Execute(_context, _serviceClient, new DeleteRelationshipRequest { Name = relationshipName });

            var typeLabel = metadata is OneToManyRelationshipMetadata otm
                ? $"1:N ({otm.ReferencedEntity} -> {otm.ReferencingEntity})"
                : metadata is ManyToManyRelationshipMetadata mtm
                    ? $"N:N ({mtm.Entity1LogicalName} <-> {mtm.Entity2LogicalName})"
                    : "unknown";

            return Success($"Deleted relationship '{relationshipName}' ({typeLabel}).", new ManageRelationshipResult
            {
                Action = "delete",
                RelationshipName = relationshipName,
                RelationshipType = metadata is OneToManyRelationshipMetadata ? "OneToMany" : "ManyToMany",
                MetadataId = metadata.MetadataId?.ToString(),
                Status = "Deleted"
            });
        }

        private CallToolResult HandleAddTarget(string entityName, string attributeName, string referencedEntity,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required for add_target (entity with the polymorphic lookup).");
            if (string.IsNullOrWhiteSpace(attributeName))
                return Error("attribute_name is required for add_target (the polymorphic lookup logical name).");
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return Error("referenced_entity is required for add_target (the new target entity to add).");

            if (!TryResolveEntityInput(entityName, "entity_name", out entityName, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out resolveError))
                return resolveError;
            if (!TryResolveAttributeInput(entityName, attributeName, "attribute_name", out var attributeMetadata, out resolveError))
                return resolveError;

            var lookupAttr = attributeMetadata as LookupAttributeMetadata;

            if (lookupAttr == null)
                return Error($"Lookup attribute '{attributeName}' not found on entity '{entityName}'.",
                    $"Use get_tables with entity_name='{entityName}' to inspect lookup columns.");

            attributeName = lookupAttr.LogicalName;

            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for add_target so the publisher prefix can be resolved.",
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix. Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return Error(solResult.Error);

            var relName = $"{solResult.Prefix}_{referencedEntity}_{entityName}_{attributeName}";
            if (relName.Length > 100) relName = relName[..100];

            var cascade = BuildCascadeConfiguration(cascadePreset, cascadeAssign, cascadeDelete, cascadeMerge, cascadeReparent, cascadeShare, cascadeUnshare);

            var request = new CreateOneToManyRequest
            {
                OneToManyRelationship = new OneToManyRelationshipMetadata
                {
                    SchemaName = relName,
                    ReferencedEntity = referencedEntity,
                    ReferencingEntity = entityName,
                    AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = ParseMenuBehavior(menuBehavior),
                        Group = ParseMenuGroup(menuGroup),
                        Order = menuOrder
                    },
                    CascadeConfiguration = cascade
                },
                Lookup = lookupAttr
            };

            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solResult.UniqueName);

            if (_options.DryRun)
                return DryRun($"Would ADD target '{referencedEntity}' to polymorphic lookup '{entityName}.{attributeName}'.", new ManageRelationshipResult
                {
                    Action = "add_target",
                    RelationshipName = relName,
                    ReferencedEntity = referencedEntity,
                    ReferencingEntity = entityName,
                    LookupAttributeName = attributeName,
                    Status = "not_executed",
                    Published = false
                });

            var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
            var metadataId = response.RelationshipId;
            var published = PublishHelper.PublishEntity(_context, _serviceClient, entityName);

            var summary = $"Added target '{referencedEntity}' to polymorphic lookup '{entityName}.{attributeName}' (relationship: '{relName}'), published={(published ? "yes" : "no")}. IMPORTANT: existing form controls still display the OLD entity list — remove and re-add the field via manage_form to refresh.";

            return Success(summary, new ManageRelationshipResult
            {
                Action = "add_target",
                RelationshipName = relName,
                RelationshipType = "OneToMany",
                ReferencedEntity = referencedEntity,
                ReferencingEntity = entityName,
                LookupAttributeName = attributeName,
                MetadataId = metadataId.ToString(),
                SolutionName = string.IsNullOrWhiteSpace(solResult.UniqueName) ? null : solResult.UniqueName,
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = !string.IsNullOrWhiteSpace(solResult.UniqueName),
                AddToSolutionMethod = string.IsNullOrWhiteSpace(solResult.UniqueName) ? "none" : "SolutionUniqueName",
                Published = published,
                Status = "TargetAdded"
            });
        }

        private CallToolResult HandleRemoveTarget(string entityName, string attributeName, string referencedEntity)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required for remove_target.");
            if (string.IsNullOrWhiteSpace(attributeName))
                return Error("attribute_name is required for remove_target.");
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return Error("referenced_entity is required for remove_target (the target entity to remove).");

            if (!TryResolveEntityInput(entityName, "entity_name", out entityName, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out resolveError))
                return resolveError;
            if (!TryResolveAttributeInput(entityName, attributeName, "attribute_name", out var attributeMetadata, out resolveError))
                return resolveError;
            attributeName = attributeMetadata.LogicalName;

            var prefix = attributeName.Split('_')[0];
            var relName = $"{prefix}_{referencedEntity}_{entityName}_{attributeName}";

            var retrieveResponse = (RetrieveRelationshipResponse)_serviceClient.Execute(
                new RetrieveRelationshipRequest { Name = relName });
            var rel = retrieveResponse.RelationshipMetadata as OneToManyRelationshipMetadata;

            if (_options.DryRun)
                return DryRun($"Would REMOVE target '{referencedEntity}' from polymorphic lookup '{entityName}.{attributeName}' (relationship: '{relName}'). WARNING: Data in this lookup target will be lost.", new ManageRelationshipResult
                {
                    Action = "remove_target",
                    RelationshipName = relName,
                    ReferencedEntity = referencedEntity,
                    ReferencingEntity = entityName,
                    LookupAttributeName = attributeName,
                    Status = "not_executed",
                    Published = false,
                    Warnings = new List<string> { "Data in this lookup target will be lost." }
                });

            DataverseMutationExecutor.Execute(_context, _serviceClient, new DeleteRelationshipRequest { Name = relName });

            return Success($"Removed target '{referencedEntity}' from polymorphic lookup '{entityName}.{attributeName}' (deleted relationship '{relName}'). WARNING: data stored in this lookup target has been lost.", new ManageRelationshipResult
            {
                Action = "remove_target",
                RelationshipName = relName,
                RelationshipType = "OneToMany",
                ReferencedEntity = referencedEntity,
                ReferencingEntity = entityName,
                LookupAttributeName = attributeName,
                Warnings = new List<string> { "Data stored in this lookup target has been lost." },
                Status = "TargetRemoved"
            });
        }

        private bool TryResolveEntityInput(string input, string parameterName, out string logicalName, out CallToolResult errorResult)
        {
            logicalName = null;
            errorResult = null;

            var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, input, "manage_relationship");
            if (resolved.IsSuccess)
            {
                logicalName = resolved.Value.LogicalName;
                return true;
            }

            errorResult = Error($"{parameterName} '{input?.Trim()}': {resolved.Error}");
            return false;
        }

        private bool TryResolveAttributeInput(string entityLogicalName, string input, string parameterName, out AttributeMetadata attribute, out CallToolResult errorResult)
        {
            attribute = null;
            errorResult = null;

            var resolved = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entityLogicalName, input, "manage_relationship");
            if (resolved.IsSuccess)
            {
                attribute = resolved.Value;
                return true;
            }

            errorResult = Error($"{parameterName} '{input?.Trim()}' on entity '{entityLogicalName}': {resolved.Error}");
            return false;
        }

        internal static CascadeType? ParseCascadeType(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;
            return value.Trim().ToLowerInvariant() switch
            {
                "cascade" => CascadeType.Cascade,
                "active" => CascadeType.Active,
                "userowned" => CascadeType.UserOwned,
                "nocascade" => CascadeType.NoCascade,
                "removelink" => CascadeType.RemoveLink,
                "restrict" => CascadeType.Restrict,
                _ => throw new ArgumentException($"Invalid cascade type '{value}'.\nValid values: Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict.\nRead docs://schema_tools_guide for cascade behavior details.")
            };
        }

        internal static CascadeConfiguration BuildCascadeConfiguration(string preset,
            string assign, string delete, string merge, string reparent, string share, string unshare)
        {
            CascadeConfiguration config;
            var normalizedPreset = (preset ?? "").Trim().ToLowerInvariant();
            switch (normalizedPreset)
            {
                case "parental":
                    config = new CascadeConfiguration
                    {
                        Assign = CascadeType.Cascade,
                        Delete = CascadeType.Cascade,
                        Merge = CascadeType.Cascade,
                        Reparent = CascadeType.Cascade,
                        Share = CascadeType.Cascade,
                        Unshare = CascadeType.Cascade
                    };
                    break;
                case "referentialrestrictdelete":
                    config = new CascadeConfiguration
                    {
                        Assign = CascadeType.NoCascade,
                        Delete = CascadeType.Restrict,
                        Merge = CascadeType.NoCascade,
                        Reparent = CascadeType.NoCascade,
                        Share = CascadeType.NoCascade,
                        Unshare = CascadeType.NoCascade
                    };
                    break;
                case "referential":
                case "":
                    config = new CascadeConfiguration
                    {
                        Assign = CascadeType.NoCascade,
                        Delete = CascadeType.RemoveLink,
                        Merge = CascadeType.NoCascade,
                        Reparent = CascadeType.NoCascade,
                        Share = CascadeType.NoCascade,
                        Unshare = CascadeType.NoCascade
                    };
                    break;
                default:
                    throw new ArgumentException($"Invalid cascade_preset '{preset}'.\nValid values: Parental, Referential, ReferentialRestrictDelete.\nRead docs://schema_tools_guide for cascade preset behavior details.");
            }

            CascadeType? v;
            v = ParseCascadeType(assign); if (v.HasValue) config.Assign = v.Value;
            v = ParseCascadeType(delete); if (v.HasValue) config.Delete = v.Value;
            v = ParseCascadeType(merge); if (v.HasValue) config.Merge = v.Value;
            v = ParseCascadeType(reparent); if (v.HasValue) config.Reparent = v.Value;
            v = ParseCascadeType(share); if (v.HasValue) config.Share = v.Value;
            v = ParseCascadeType(unshare); if (v.HasValue) config.Unshare = v.Value;

            return config;
        }

        internal static AssociatedMenuBehavior ParseMenuBehavior(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return AssociatedMenuBehavior.UseCollectionName;
            return value.Trim().ToLowerInvariant() switch
            {
                "usecollectionname" => AssociatedMenuBehavior.UseCollectionName,
                "uselabel" => AssociatedMenuBehavior.UseLabel,
                "donotdisplay" => AssociatedMenuBehavior.DoNotDisplay,
                _ => throw new ArgumentException($"Invalid menu_behavior '{value}'.\nValid values: UseCollectionName, UseLabel, DoNotDisplay.")
            };
        }

        internal static AssociatedMenuGroup ParseMenuGroup(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return AssociatedMenuGroup.Details;
            return value.Trim().ToLowerInvariant() switch
            {
                "details" => AssociatedMenuGroup.Details,
                "sales" => AssociatedMenuGroup.Sales,
                "service" => AssociatedMenuGroup.Service,
                "marketing" => AssociatedMenuGroup.Marketing,
                _ => throw new ArgumentException($"Invalid menu_group '{value}'.\nValid values: Details, Sales, Service, Marketing.")
            };
        }

        internal static (string SchemaName, string LogicalName) BuildLookupAttributeNames(string lookupDisplayName, string prefix)
        {
            return DataverseNamer.Resolve(lookupDisplayName, prefix);
        }

        internal static string BuildRelationshipName(string prefix, string referencedEntity, string referencingEntity)
        {
            var referencedBaseName = StripPublisherPrefix(referencedEntity, prefix);
            var referencingBaseName = StripPublisherPrefix(referencingEntity, prefix);
            return $"{prefix}_{referencedBaseName}_{referencingBaseName}";
        }

        internal static string StripPublisherPrefix(string logicalName, string prefix)
        {
            if (string.IsNullOrWhiteSpace(logicalName) || string.IsNullOrWhiteSpace(prefix))
                return logicalName;

            var prefixWithSeparator = $"{prefix.Trim().ToLowerInvariant()}_";
            var trimmed = logicalName.Trim().ToLowerInvariant();
            return trimmed.StartsWith(prefixWithSeparator, StringComparison.Ordinal)
                ? trimmed[prefixWithSeparator.Length..]
                : trimmed;
        }
    }
}

