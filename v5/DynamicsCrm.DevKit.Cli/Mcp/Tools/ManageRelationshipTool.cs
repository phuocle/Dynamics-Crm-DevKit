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
using System.Text;
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
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_relationship", Title = "Create, update, or delete Dataverse relationships",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRelationshipResult)),
        Description(
            "Dataverse relationships (1:N, N:N) + polymorphic lookup targets. Required:\n" +
            "- create_1n: referenced_entity + referencing_entity + solution_name (auto-creates lookup column)\n" +
            "- create_nn: entity1 + entity2 + solution_name (auto-creates intersect entity)\n" +
            "- update: relationship_name (cascade/menu/hierarchy)\n" +
            "- delete: relationship_name\n" +
            "- add_target: entity_name + attribute_name + referenced_entity + solution_name\n" +
            "- remove_target: entity_name + attribute_name + referenced_entity (deletes data permanently)\n\n" +

            "is_hierarchical: only for self-referential 1:N (referenced=referencing), max 1/entity.\n" +
            "Cascade presets: Parental (all Cascade) | Referential (NoCascade + RemoveLink on delete) | ReferentialRestrictDelete (NoCascade + Restrict on delete).\n" +
            "Cascade types: Cascade | NoCascade | RemoveLink | Restrict | Active | UserOwned.\n" +
            "See docs://schema_tools_guide.\n\n" +

            "WHEN TO USE:\n" +
            "- Create 1:N (with auto lookup column) or N:N (with intersect entity)\n" +
            "- Update cascade behavior, associated menu, or hierarchy flag\n" +
            "- Add / remove a target on a polymorphic lookup (e.g. customer → account, contact, custom)\n" +
            "- Inspect relationship_name first via get_tables before update/delete\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- entity and field inputs resolve Display Name contains first, then logical/schema name contains. solution_name uses the shared Display Name first solution resolver. Ambiguity returns IsError=true.")]
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
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid actions: create_1n, create_nn, update, delete, add_target, remove_target");

            action = action.Trim().ToLowerInvariant();

            try
            {
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
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid actions: create_1n, create_nn, update, delete, add_target, remove_target")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: {ex.Message}");
            }
        }

        // ══════════════════════════════════════════════
        // HandleCreate1N
        // ══════════════════════════════════════════════

        private CallToolResult HandleCreate1N(string referencedEntity, string referencingEntity, string relationshipName,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, string lookupDisplayName, string solutionName, bool isHierarchical)
        {
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return ErrorResult("Error: referenced_entity is required for create_1n (the parent/referenced entity).\nRead docs://schema_tools_guide for relationship creation examples.");
            if (string.IsNullOrWhiteSpace(referencingEntity))
                return ErrorResult("Error: referencing_entity is required for create_1n (the child/referencing entity).\nRead docs://schema_tools_guide for relationship creation examples.");

            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencingEntity, "referencing_entity", out referencingEntity, out resolveError))
                return resolveError;

            if (isHierarchical && referencedEntity != referencingEntity)
                return ErrorResult($"Error: is_hierarchical=true is only valid for self-referential relationships (referenced_entity must equal referencing_entity). Got: referenced='{referencedEntity}', referencing='{referencingEntity}'.");

            // Resolve prefix from solution — solution_name is required to get the correct publisher prefix
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for create_1n so the publisher prefix can be resolved.\n" +
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix.\n" +
                    "Tip: Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return ErrorResult($"Error: {solResult.Error}");

            // Auto-generate relationship name if not provided
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
                return DryRun($"Would CREATE 1:N relationship '{relationshipName}' ({referencedEntity} -> {referencingEntity}) with lookup '{lookupLogicalName}'{(isHierarchical ? " [IsHierarchical=true]" : "") }.", new ManageRelationshipResult
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

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                metadataId = response.RelationshipId;
            }, $"create 1:N relationship '{relationshipName}' ({referencedEntity} -> {referencingEntity})");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create relationship '{relationshipName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple relationships, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns\n" +
                    $"  4. Wait 15-20 seconds\n" +
                    $"  5. Create all relationships");
            }

            var published = PublishIfNeeded(referencingEntity);

            // Wait for relationship metadata to propagate (extended wait)
            if (published)
            {
                MetadataOperationWaitHelper.WaitForPropagation();
            }

            var sb = new StringBuilder(512);
            sb.AppendLine($"[RelationshipCreated] 1:N {relationshipName}");
            sb.AppendLine($"ReferencedEntity: {referencedEntity}");
            sb.AppendLine($"ReferencingEntity: {referencingEntity}");
            sb.AppendLine($"LookupAttribute: {lookupLogicalName}");
            sb.AppendLine($"IsHierarchical: {isHierarchical}");
            sb.AppendLine($"CascadeDelete: {cascade.Delete}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            sb.AppendLine($"MetadataId: {metadataId}");

            return BuildResult(sb.ToString(), new ManageRelationshipResult
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

        // ══════════════════════════════════════════════
        // HandleCreateNN
        // ══════════════════════════════════════════════

        private CallToolResult HandleCreateNN(string entity1, string entity2, string relationshipName, string intersectEntityName,
            string solutionName)
        {
            if (string.IsNullOrWhiteSpace(entity1))
                return ErrorResult("Error: entity1 is required for create_nn.\nRead docs://schema_tools_guide for relationship creation examples.");
            if (string.IsNullOrWhiteSpace(entity2))
                return ErrorResult("Error: entity2 is required for create_nn.\nRead docs://schema_tools_guide for relationship creation examples.");

            if (!TryResolveEntityInput(entity1, "entity1", out entity1, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(entity2, "entity2", out entity2, out resolveError))
                return resolveError;

            // Resolve prefix from solution — solution_name is required for N:N to get the correct publisher prefix
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for create_nn so the publisher prefix can be resolved.\n" +
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix.\n" +
                    "Tip: Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return ErrorResult($"Error: {solResult.Error}");

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
            var published = PublishIfNeeded(entity1);

            var sb = new StringBuilder(512);
            sb.AppendLine($"[RelationshipCreated] N:N {relationshipName}");
            sb.AppendLine($"Entity1: {entity1}");
            sb.AppendLine($"Entity2: {entity2}");
            sb.AppendLine($"IntersectEntity: {intersectEntityName}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            sb.AppendLine($"MetadataId: {metadataId}");

            return BuildResult(sb.ToString(), new ManageRelationshipResult
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

        // ══════════════════════════════════════════════
        // HandleUpdate
        // ══════════════════════════════════════════════

        private CallToolResult HandleUpdate(string relationshipName,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, bool isHierarchical)
        {
            if (string.IsNullOrWhiteSpace(relationshipName))
                return ErrorResult("Error: relationship_name is required for update.\nTip: Use get_tables with entity_name to find relationship_name.\nRead docs://schema_tools_guide for cascade preset and type values.");

            relationshipName = relationshipName.Trim();

            // Retrieve existing relationship
            var retrieveRequest = new RetrieveRelationshipRequest { Name = relationshipName };
            RelationshipMetadataBase metadata;
            try
            {
                var retrieveResponse = (RetrieveRelationshipResponse)_serviceClient.Execute(retrieveRequest);
                metadata = retrieveResponse.RelationshipMetadata;
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Relationship '{relationshipName}' not found.\nMessage: {ex.Message}");
            }

            var changes = new Dictionary<string, UpdateAttributeChange>();
            var warnings = new List<string>();
            string entityToPublish = null;

            if (metadata is OneToManyRelationshipMetadata oneToMany)
            {
                entityToPublish = oneToMany.ReferencingEntity;
                var cascade = oneToMany.CascadeConfiguration;
                var newCascade = BuildCascadeConfiguration(cascadePreset, cascadeAssign, cascadeDelete, cascadeMerge, cascadeReparent, cascadeShare, cascadeUnshare);

                // Only update if changes requested
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

                // Update menu config
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

                // Update hierarchy
                if (isHierarchical)
                {
                    if (oneToMany.ReferencedEntity != oneToMany.ReferencingEntity)
                        return ErrorResult($"Error: is_hierarchical=true is only valid for self-referential relationships. '{relationshipName}' links '{oneToMany.ReferencedEntity}' -> '{oneToMany.ReferencingEntity}' which are different entities.");
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
                return ErrorResult($"Error: Unknown relationship type for '{relationshipName}'.");
            }

            if (changes.Count == 0 && warnings.Count == 0)
                return ErrorResult($"Error: No changes detected for relationship '{relationshipName}'. Provide cascade_preset, cascade_* overrides, or menu_* values to update.");

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

            var published = (changes.Count > 0 && entityToPublish != null) ? PublishIfNeeded(entityToPublish) : false;

            var sb = new StringBuilder(512);
            sb.AppendLine($"[RelationshipUpdated] {relationshipName}");
            foreach (var c in changes)
                sb.AppendLine($"  {c.Key}: {c.Value.OldValue} -> {c.Value.NewValue}");
            if (warnings.Count > 0)
                foreach (var w in warnings)
                    sb.AppendLine($"  Warning: {w}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return BuildResult(sb.ToString(), new ManageRelationshipResult
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

        // ══════════════════════════════════════════════
        // HandleDelete
        // ══════════════════════════════════════════════

        private CallToolResult HandleDelete(string relationshipName)
        {
            if (string.IsNullOrWhiteSpace(relationshipName))
                return ErrorResult("Error: relationship_name is required for delete.\nTip: Use get_tables with entity_name to find relationship_name.");

            relationshipName = relationshipName.Trim();

            // Retrieve first to get details for the response
            RelationshipMetadataBase metadata;
            try
            {
                var retrieveResponse = (RetrieveRelationshipResponse)_serviceClient.Execute(new RetrieveRelationshipRequest { Name = relationshipName });
                metadata = retrieveResponse.RelationshipMetadata;
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Relationship '{relationshipName}' not found.\nMessage: {ex.Message}");
            }

            if (_options.DryRun)
                return DryRun($"Would DELETE relationship '{relationshipName}'.", new ManageRelationshipResult
                {
                    Action = "delete",
                    RelationshipName = relationshipName,
                    Status = "not_executed",
                    Published = false
                });

            DataverseMutationExecutor.Execute(_context, _serviceClient, new DeleteRelationshipRequest { Name = relationshipName });

            var sb = new StringBuilder(256);
            sb.AppendLine($"[RelationshipDeleted] {relationshipName}");
            if (metadata is OneToManyRelationshipMetadata otm)
            {
                sb.AppendLine($"Type: 1:N ({otm.ReferencedEntity} -> {otm.ReferencingEntity})");
            }
            else if (metadata is ManyToManyRelationshipMetadata mtm)
            {
                sb.AppendLine($"Type: N:N ({mtm.Entity1LogicalName} <-> {mtm.Entity2LogicalName})");
                sb.AppendLine($"IntersectEntity: {mtm.IntersectEntityName}");
            }

            return BuildResult(sb.ToString(), new ManageRelationshipResult
            {
                Action = "delete",
                RelationshipName = relationshipName,
                RelationshipType = metadata is OneToManyRelationshipMetadata ? "OneToMany" : "ManyToMany",
                MetadataId = metadata.MetadataId?.ToString(),
                Status = "Deleted"
            });
        }

        // ══════════════════════════════════════════════
        // HandleAddTarget (polymorphic lookup)
        // ══════════════════════════════════════════════

        private CallToolResult HandleAddTarget(string entityName, string attributeName, string referencedEntity,
            string cascadePreset, string cascadeAssign, string cascadeDelete, string cascadeMerge, string cascadeReparent, string cascadeShare, string cascadeUnshare,
            string menuBehavior, string menuGroup, int menuOrder, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return ErrorResult("Error: entity_name is required for add_target (entity with the polymorphic lookup).");
            if (string.IsNullOrWhiteSpace(attributeName))
                return ErrorResult("Error: attribute_name is required for add_target (the polymorphic lookup logical name).");
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return ErrorResult("Error: referenced_entity is required for add_target (the new target entity to add).");

            if (!TryResolveEntityInput(entityName, "entity_name", out entityName, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out resolveError))
                return resolveError;
            if (!TryResolveAttributeInput(entityName, attributeName, "attribute_name", out var attributeMetadata, out resolveError))
                return resolveError;

            var lookupAttr = attributeMetadata as LookupAttributeMetadata;

            if (lookupAttr == null)
                return ErrorResult($"Error: Lookup attribute '{attributeName}' not found on entity '{entityName}'.\nTip: Use get_tables with entity_name='{entityName}' to inspect lookup columns.");
            attributeName = lookupAttr.LogicalName;

            // Resolve prefix for relationship name — solution_name is required
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for add_target so the publisher prefix can be resolved.\n" +
                    "Provide solution_name (e.g., 'MyCustomSolution') to auto-resolve the prefix.\n" +
                    "Tip: Use get_solution_components to find valid solution names.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess) return ErrorResult($"Error: {solResult.Error}");

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
                Lookup = lookupAttr  // Pass existing lookup — SDK adds new target
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

            try
            {
                    var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                var metadataId = response.RelationshipId;
                var published = PublishIfNeeded(entityName);

                var sb = new StringBuilder(512);
                sb.AppendLine($"[TargetAdded] {referencedEntity} -> {entityName}.{attributeName}");
                sb.AppendLine($"RelationshipName: {relName}");
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                sb.AppendLine($"MetadataId: {metadataId}");
                sb.AppendLine();
                sb.AppendLine("[IMPORTANT] The new target entity was added to the polymorphic lookup metadata, but any existing form controls for this field still display the OLD list of entity types. To make the new target appear in the lookup dialog on the form, you MUST remove the field from the form and re-add it. Use manage_form(action='update', operations=[{\"action\":\"manage_fields\",\"manage_action\":\"remove\",...}, {\"action\":\"manage_fields\",\"manage_action\":\"add\",...}]) to refresh the form control.");

                return BuildResult(sb.ToString(), new ManageRelationshipResult
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
            catch (Exception ex)
            {
                if (ex.Message.Contains("-2147192813") || ex.Message.Contains("polymorphic", StringComparison.OrdinalIgnoreCase))
                    return ErrorResult($"Error: '{entityName}.{attributeName}' is not a polymorphic lookup. Only polymorphic lookups support multiple targets.\nMessage: {ex.Message}");
                throw;
            }
        }

        // ══════════════════════════════════════════════
        // HandleRemoveTarget (polymorphic lookup)
        // ══════════════════════════════════════════════

        private CallToolResult HandleRemoveTarget(string entityName, string attributeName, string referencedEntity)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return ErrorResult("Error: entity_name is required for remove_target.");
            if (string.IsNullOrWhiteSpace(attributeName))
                return ErrorResult("Error: attribute_name is required for remove_target.");
            if (string.IsNullOrWhiteSpace(referencedEntity))
                return ErrorResult("Error: referenced_entity is required for remove_target (the target entity to remove).");

            if (!TryResolveEntityInput(entityName, "entity_name", out entityName, out var resolveError))
                return resolveError;
            if (!TryResolveEntityInput(referencedEntity, "referenced_entity", out referencedEntity, out resolveError))
                return resolveError;
            if (!TryResolveAttributeInput(entityName, attributeName, "attribute_name", out var attributeMetadata, out resolveError))
                return resolveError;
            attributeName = attributeMetadata.LogicalName;

            // Retrieve entity metadata with relationships to find the specific relationship
            var entityMetadataRequest = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Relationships
            };
            var entityMetadata = ((RetrieveEntityResponse)_serviceClient.Execute(entityMetadataRequest)).EntityMetadata;

            // Find the N:1 relationship where ReferencedEntity == target and ReferencingAttribute == attributeName
            var rel = entityMetadata.ManyToOneRelationships
                .FirstOrDefault(r => r.ReferencedEntity == referencedEntity && r.ReferencingAttribute == attributeName);

            if (rel == null)
                return ErrorResult($"Error: No relationship found for target '{referencedEntity}' on lookup '{entityName}.{attributeName}'.\nTip: Use get_tables with entity_name='{entityName}' to inspect relationships.");

            var relName = rel.SchemaName;

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
                    Warnings = ["Data in this lookup target will be lost."]
                });

            DataverseMutationExecutor.Execute(_context, _serviceClient, new DeleteRelationshipRequest { Name = relName });

            var sb = new StringBuilder(256);
            sb.AppendLine($"[TargetRemoved] {referencedEntity} from {entityName}.{attributeName}");
            sb.AppendLine($"DeletedRelationship: {relName}");
            sb.AppendLine($"WARNING: Data stored in this lookup target has been lost.");

            return BuildResult(sb.ToString(), new ManageRelationshipResult
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

        // ══════════════════════════════════════════════
        // Helper methods
        // ══════════════════════════════════════════════

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

            errorResult = ErrorResult($"Error: {parameterName} '{input?.Trim()}': {resolved.Error}");
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

            errorResult = ErrorResult($"Error: {parameterName} '{input?.Trim()}' on entity '{entityLogicalName}': {resolved.Error}");
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
                _ => throw new ArgumentException($"Error: Invalid cascade type '{value}'.\nValid values: Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict.\nRead docs://schema_tools_guide for cascade behavior details.")
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
                    throw new ArgumentException($"Error: Invalid cascade_preset '{preset}'.\nValid values: Parental, Referential, ReferentialRestrictDelete.\nRead docs://schema_tools_guide for cascade preset behavior details.");
            }

            // Apply individual overrides
            var v = ParseCascadeType(assign); if (v.HasValue) config.Assign = v.Value;
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
                _ => throw new ArgumentException($"Error: Invalid menu_behavior '{value}'.\nValid values: UseCollectionName, UseLabel, DoNotDisplay.")
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
                _ => throw new ArgumentException($"Error: Invalid menu_group '{value}'.\nValid values: Details, Sales, Service, Marketing.")
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



        private bool PublishIfNeeded(string entityName)
        {
            try
            {
                var publishXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>";
                PublishHelper.PublishEntity(_context, _serviceClient, entityName);
                return true;
            }
            catch
            {
                return false;
            }
        }

        private CallToolResult ErrorResult(string message) => Error(message);

        private CallToolResult BuildResult(string text, ManageRelationshipResult structured) => Success(text, structured);
    }
}
