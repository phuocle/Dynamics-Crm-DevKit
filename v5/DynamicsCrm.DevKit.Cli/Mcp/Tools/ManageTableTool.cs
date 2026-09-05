using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageTableTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageTableTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_table", Title = "Create or update a Dataverse table",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageTableResult)),
        Description(
            "Create or update a Dataverse table. Auto-detects create vs update from the inputs (no entity_name param).\n" +
            "- UPDATE (entity exists): logical_name + optional display_name, display_collection_name, description, is_audit_enabled, is_quick_create_enabled, is_search_enabled.\n" +
            "- CREATE (new table): display_name + display_collection_name + solution_name (resolves publisher prefix). Auto-creates primary name attribute.\n" +
            "Technical names come from logical_name / schema_name or are auto-derived from display_name.\n\n" +
            "WHEN TO USE:\n" +
            "- Create a new custom table, or update mutable metadata of an existing one\n" +
            "\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → discover entities\n" +
            "- manage_column → add columns\n" +
            "- manage_relationship → 1:N / N:N\n" +
            "- manage_form → forms\n" +
            "- publish_customizations → batch publish after multiple metadata changes")]
        public CallToolResult manage_table(
            [Description("Singular display name (e.g. 'Project'). Required for CREATE.")] string display_name = "",
            [Description("Plural (e.g. 'Projects'). Required: create.")] string display_collection_name = "",
            [Description("Required: create.")] string solution_name = "",
            [Description("Optional table description.")] string description = "",
            [Description("Auto-derived if omitted. [create-only]")] string primary_attribute_name = "",
            [Description("[create-only]")] string primary_attribute_display_name = "Name",
            [Description("'User' or 'Organization'. [create-only, immutable]")] string ownership_type = "User",
            [Description("'Standard' or 'Elastic' (Cosmos DB, no charts). [create-only, immutable]")] string table_type = "Standard",
            [Description("Activity entity. [create-only, immutable]")] bool is_activity = false,
            [Description("Enable notes. [create-only]")] bool has_notes = false,
            [Description("null = keep current (update).")] bool? is_quick_create_enabled = null,
            [Description("null = keep current (update). Default true on create.")] bool? is_audit_enabled = null,
            [Description("Enable this table for Dataverse Search/Relevance Search (SyncToExternalSearchIndex). null = keep current on update; false by default on create unless specified.")] bool? is_search_enabled = null,
            [Description("1-850. [create-only]")] int primary_attribute_max_length = 100,
            [Description("SchemaName for the new table (e.g. 'all_InOne' or 'all_In_One'). If provided, used AS-IS as SchemaName (skip auto-derive). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Logical name for the new table (e.g. 'all_inone' or 'all_in_one'). If provided, used AS-IS as the lowercase logical name. Create only — ignored on update. Must start with the publisher prefix and be the lowercase form of schema_name.")] string logical_name = "")
        {
            try
            {
                logical_name = logical_name?.Trim() ?? "";
                schema_name = schema_name?.Trim() ?? "";
                display_name = display_name?.Trim() ?? "";
                display_collection_name = display_collection_name?.Trim() ?? "";
                solution_name = solution_name?.Trim() ?? "";
                description = description?.Trim() ?? "";
                primary_attribute_name = primary_attribute_name?.Trim() ?? "";
                primary_attribute_display_name = primary_attribute_display_name?.Trim() ?? "";
                ownership_type = ownership_type?.Trim() ?? "";
                table_type = table_type?.Trim() ?? "";

                string resolvedPrefix = null;
                string resolvedSolutionUniqueName = null;
                if (!string.IsNullOrWhiteSpace(solution_name))
                {
                    var solResult = SolutionResolverHelper.Resolve(_orgService, solution_name);
                    if (!solResult.IsSuccess)
                        return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                    resolvedPrefix = solResult.Prefix;
                    resolvedSolutionUniqueName = solResult.UniqueName;
                }

                if (!string.IsNullOrWhiteSpace(logical_name))
                {
                    EntityMetadata existingEntity = null;
                    var entityResolve = DisplayNameFirstResolver.ResolveEntity(_orgService, logical_name, "manage_table");
                    if (entityResolve.IsSuccess)
                    {
                        existingEntity = entityResolve.Value;
                    }
                    else if (entityResolve.Status != ResolveStatus.NotFound)
                    {
                        return Error(entityResolve.Error.Split("\r\n")[0], "Use get_tables to list entities.");
                    }

                    if (existingEntity != null)
                    {
                        return UpdateExistingEntity(existingEntity.LogicalName, existingEntity,
                            display_name, display_collection_name, description,
                            is_quick_create_enabled, is_audit_enabled, is_search_enabled,
                            ownership_type, table_type, is_activity, has_notes,
                            primary_attribute_name, primary_attribute_display_name,
                            resolvedSolutionUniqueName ?? solution_name);
                    }

                    if (string.IsNullOrWhiteSpace(display_name) || string.IsNullOrWhiteSpace(display_collection_name))
                    {
                        return Error(
                            $"No existing entity found for logical_name '{logical_name}'. To CREATE a new table, also provide display_name + display_collection_name + solution_name. To UPDATE an existing table, double-check the logical name.",
                            "Use get_tables to list entities.");
                    }
                }
                else if (string.IsNullOrWhiteSpace(display_name))
                {
                    return Error(
                        "logical_name is required to update an existing table, or display_name + display_collection_name + solution_name to create a new one.",
                        "To UPDATE: pass logical_name (e.g. 'all_in_one'). To CREATE: pass display_name + display_collection_name + solution_name (and optionally schema_name/logical_name overrides).");
                }

                return CreateNewEntity(
                    display_name, display_collection_name, description,
                    is_quick_create_enabled, is_audit_enabled, is_search_enabled,
                    ownership_type, table_type, is_activity, has_notes,
                    primary_attribute_name, primary_attribute_display_name,
                    primary_attribute_max_length,
                    schema_name, logical_name,
                    resolvedPrefix, resolvedSolutionUniqueName, solution_name);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult CreateNewEntity(
            string display_name, string display_collection_name, string description,
            bool? is_quick_create_enabled, bool? is_audit_enabled, bool? is_search_enabled,
            string ownership_type, string table_type, bool is_activity, bool has_notes,
            string primary_attribute_name, string primary_attribute_display_name,
            int primary_attribute_max_length,
            string schema_name, string logical_name,
            string resolvedPrefix, string resolvedSolutionUniqueName, string solution_name)
        {
            if (string.IsNullOrWhiteSpace(display_name))
                return Error("display_name is required when creating a new entity.",
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(display_collection_name))
                return Error("display_collection_name is required when creating a new entity.",
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(solution_name) && string.IsNullOrWhiteSpace(resolvedPrefix))
                return Error("solution_name is required when creating a new entity (needed to resolve the publisher prefix).",
                    "Required for create: display_name, display_collection_name, solution_name. Read docs://schema_tools_guide for prefix resolution and solution requirements.");

            var prefix = resolvedPrefix;

            var prefixWithUnderscore = prefix + "_";

            string schemaName;
            if (!string.IsNullOrWhiteSpace(schema_name))
            {
                schemaName = schema_name;
                if (!schemaName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return Error(
                        $"schema_name '{schemaName}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').",
                        "Prepend the publisher prefix, e.g. 'all_In_One' instead of 'In_One'.");
            }
            else
            {
                schemaName = DataverseNamer.Resolve(display_name, prefix).SchemaName;
            }

            string entityName;
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                entityName = logical_name.ToLowerInvariant();
                if (!entityName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return Error(
                        $"logical_name '{logical_name}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').",
                        "Prepend the publisher prefix, e.g. 'all_in_one' instead of 'in_one'.");
            }
            else
            {
                entityName = schemaName.ToLowerInvariant();
            }

            if (string.IsNullOrWhiteSpace(logical_name))
            {
                var collisionResolve = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName, "manage_table");
                if (collisionResolve.IsSuccess)
                    return Error(
                        $"Cannot create table '{display_name}' because derived logical name '{entityName}' already exists.",
                        "Re-call manage_table with an explicit logical_name to update the existing entity, or choose a different display_name.");
                if (collisionResolve.Status == ResolveStatus.Ambiguous || collisionResolve.Status == ResolveStatus.Error)
                    return Error(collisionResolve.Error.Split("\r\n")[0], "Use get_tables to list entities.");
            }

            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

            if (string.IsNullOrWhiteSpace(primary_attribute_name))
                primary_attribute_name = prefix + "_name";
            else
                primary_attribute_name = primary_attribute_name.ToLowerInvariant();

            var primaryUnderscoreIndex = primary_attribute_name.IndexOf('_');
            string primarySchemaName;
            if (primaryUnderscoreIndex > 0 && primaryUnderscoreIndex < primary_attribute_name.Length - 1)
            {
                var primaryPrefix = primary_attribute_name.Substring(0, primaryUnderscoreIndex);
                var primaryNamePart = primary_attribute_name.Substring(primaryUnderscoreIndex + 1);
                primarySchemaName = primaryPrefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(primaryNamePart);
            }
            else
            {
                primarySchemaName = primary_attribute_name;
            }

            var ownershipTypeValue = OwnershipTypes.UserOwned;
            if (string.IsNullOrWhiteSpace(ownership_type) || ownership_type.Equals("User", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.UserOwned;
            else if (ownership_type.Equals("Organization", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.OrganizationOwned;
            else
                return Error(
                    $"Invalid ownership_type '{ownership_type}'.",
                    "Valid values: 'User' or 'Organization'.");

            var isElastic = !string.IsNullOrWhiteSpace(table_type) &&
                            table_type.Equals("Elastic", StringComparison.OrdinalIgnoreCase);

            if (is_activity)
            {
                ownershipTypeValue = OwnershipTypes.UserOwned;
                has_notes = true;
                primarySchemaName = "Subject";
                primary_attribute_name = "subject";
                primary_attribute_display_name = "Subject";
            }

            var effectiveIsQuickCreateEnabled = is_quick_create_enabled ?? false;

            if (_options.DryRun)
                return DryRun(
                    $"Would CREATE table '{display_name}' ({entityName}), ownership '{ownershipTypeValue}', type '{(isElastic ? "Elastic" : "Standard")}', primary attribute '{primary_attribute_name}'.",
                    new ManageTableResult
                    {
                        DisplayName = display_name,
                        DisplayCollectionName = display_collection_name,
                        SchemaName = schemaName,
                        LogicalName = entityName,
                        OwnershipType = ownershipTypeValue.ToString(),
                        TableType = isElastic ? "Elastic" : null,
                        PrimaryAttributeName = primary_attribute_name,
                        PrimaryAttributeDisplayName = primary_attribute_display_name,
                        PrimaryAttributeMaxLength = primary_attribute_max_length,
                        SolutionName = resolvedSolutionUniqueName ?? solution_name,
                        CreateMode = "metadata",
                        IsAddToSolution = true,
                        AddToSolutionMethod = "SolutionUniqueName",
                        Status = "not_executed",
                        Published = false,
                        IsAuditEnabled = is_audit_enabled,
                        IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                        IsSearchEnabled = is_search_enabled
                    });

            var entityMetadata = new EntityMetadata
            {
                SchemaName = schemaName,
                LogicalName = entityName,
                DisplayName = new Label(display_name, McpHelper.GetBaseLanguageCode(_orgService)),
                DisplayCollectionName = new Label(display_collection_name, McpHelper.GetBaseLanguageCode(_orgService)),
                OwnershipType = ownershipTypeValue,
                IsActivity = is_activity,
                IsAuditEnabled = new BooleanManagedProperty(is_audit_enabled ?? true),
                IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                SyncToExternalSearchIndex = is_search_enabled ?? false
            };

            if (!string.IsNullOrWhiteSpace(description))
                entityMetadata.Description = new Label(description, McpHelper.GetBaseLanguageCode(_orgService));

            if (isElastic)
            {
                entityMetadata.TableType = "Elastic";
                entityMetadata.CanCreateCharts = new BooleanManagedProperty(false);
            }

            if (is_activity)
                entityMetadata.IsAvailableOffline = true;

            var primaryAttribute = new StringAttributeMetadata
            {
                SchemaName = primarySchemaName,
                LogicalName = primary_attribute_name,
                DisplayName = new Label(primary_attribute_display_name, McpHelper.GetBaseLanguageCode(_orgService)),
                MaxLength = primary_attribute_max_length,
                RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
            };

            var request = new CreateEntityRequest
            {
                Entity = entityMetadata,
                PrimaryAttribute = primaryAttribute
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, resolvedSolutionUniqueName ?? solution_name);

            var response = (CreateEntityResponse)DataverseMutationExecutor.Execute(_context, _orgService, request);
            var entityId = response.EntityId;

            var retrieveRequest = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity
            };
            var createdMetadata = ((RetrieveEntityResponse)_orgService.Execute(retrieveRequest)).EntityMetadata;

            MetadataOperationWaitHelper.WaitAfterTableCreation();

            var published = PublishHelper.PublishEntity(_context, _orgService, entityName);

            var structured = new ManageTableResult
            {
                DisplayName = display_name,
                DisplayCollectionName = display_collection_name,
                SchemaName = schemaName,
                LogicalName = entityName,
                OwnershipType = ownershipTypeValue.ToString(),
                TableType = isElastic ? "Elastic" : null,
                PrimaryAttributeName = primary_attribute_name,
                PrimaryAttributeDisplayName = primary_attribute_display_name,
                PrimaryAttributeMaxLength = primary_attribute_max_length,
                MetadataId = entityId.ToString(),
                EntitySetName = createdMetadata?.EntitySetName,
                SolutionName = resolvedSolutionUniqueName ?? solution_name,
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = true,
                AddToSolutionMethod = "SolutionUniqueName",
                Published = published,
                IsAuditEnabled = is_audit_enabled,
                IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                IsSearchEnabled = is_search_enabled ?? false,
                SyncToExternalSearchIndex = createdMetadata?.SyncToExternalSearchIndex ?? is_search_enabled ?? false,
                CanEnableSyncToExternalSearchIndex = createdMetadata?.CanEnableSyncToExternalSearchIndex?.Value,
                CanEnableSyncToExternalSearchIndexCanBeChanged = createdMetadata?.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                Description = string.IsNullOrWhiteSpace(description) ? null : description,
                Status = "created"
            };

            return Success($"Created table '{display_name}' ({entityName}), metadata id {entityId}, published.", structured);
        }

        private CallToolResult UpdateExistingEntity(
            string entityName, EntityMetadata existingMetadata,
            string displayName, string displayCollectionName, string description,
            bool? isQuickCreateEnabled, bool? isAuditEnabled, bool? isSearchEnabled,
            string ownershipType, string tableType, bool isActivity, bool hasNotes,
            string primaryAttributeName, string primaryAttributeDisplayName,
            string solutionName)
        {
            var changes = new List<string>();
            var structuredChanges = new Dictionary<string, UpdateAttributeChange>();
            var warnings = new List<string>();

            var effectiveDisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
            var effectiveDisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
            var effectiveDescription = existingMetadata.Description?.UserLocalizedLabel?.Label ?? "";

            if (!string.IsNullOrWhiteSpace(displayName))
            {
                var oldVal = effectiveDisplayName;
                if (oldVal != displayName)
                {
                    existingMetadata.DisplayName = new Label(displayName, McpHelper.GetBaseLanguageCode(_orgService));
                    effectiveDisplayName = displayName;
                    changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName}\"");
                    structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName };
                }
            }

            if (!string.IsNullOrWhiteSpace(displayCollectionName))
            {
                var oldVal = effectiveDisplayCollectionName;
                if (oldVal != displayCollectionName)
                {
                    existingMetadata.DisplayCollectionName = new Label(displayCollectionName, McpHelper.GetBaseLanguageCode(_orgService));
                    effectiveDisplayCollectionName = displayCollectionName;
                    changes.Add($"DisplayCollectionName: \"{oldVal}\" -> \"{displayCollectionName}\"");
                    structuredChanges["displayCollectionName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayCollectionName };
                }
            }

            if (!string.IsNullOrWhiteSpace(description))
            {
                var oldVal = effectiveDescription;
                if (oldVal != description)
                {
                    existingMetadata.Description = new Label(description, McpHelper.GetBaseLanguageCode(_orgService));
                    effectiveDescription = description;
                    changes.Add($"Description: \"{oldVal}\" -> \"{description}\"");
                    structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description };
                }
            }

            if (isQuickCreateEnabled.HasValue && existingMetadata.IsQuickCreateEnabled != isQuickCreateEnabled.Value)
            {
                var oldVal = existingMetadata.IsQuickCreateEnabled == true ? "true" : "false";
                existingMetadata.IsQuickCreateEnabled = isQuickCreateEnabled.Value;
                changes.Add($"IsQuickCreateEnabled: {oldVal} -> {isQuickCreateEnabled.Value.ToString().ToLowerInvariant()}");
                structuredChanges["isQuickCreateEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isQuickCreateEnabled.Value.ToString().ToLowerInvariant() };
            }

            if (isAuditEnabled.HasValue && existingMetadata.IsAuditEnabled?.Value != isAuditEnabled.Value)
            {
                var oldVal = existingMetadata.IsAuditEnabled?.Value == true ? "true" : "false";
                existingMetadata.IsAuditEnabled = new BooleanManagedProperty(isAuditEnabled.Value);
                changes.Add($"IsAuditEnabled: {oldVal} -> {isAuditEnabled.Value.ToString().ToLowerInvariant()}");
                structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isAuditEnabled.Value.ToString().ToLowerInvariant() };
            }

            if (isSearchEnabled.HasValue)
            {
                var currentSync = existingMetadata.SyncToExternalSearchIndex ?? false;
                var canChange = existingMetadata.CanEnableSyncToExternalSearchIndex?.Value == true;
                if (currentSync != isSearchEnabled.Value)
                {
                    if (!canChange)
                    {
                        warnings.Add(
                            $"SyncToExternalSearchIndex cannot be changed on entity '{entityName}' " +
                            "(CanEnableSyncToExternalSearchIndex is false). Skipping is_search_enabled.");
                    }
                    else
                    {
                        existingMetadata.SyncToExternalSearchIndex = isSearchEnabled.Value;
                        changes.Add($"SyncToExternalSearchIndex: {currentSync.ToString().ToLowerInvariant()} -> {isSearchEnabled.Value.ToString().ToLowerInvariant()}");
                        structuredChanges["syncToExternalSearchIndex"] = new UpdateAttributeChange { OldValue = currentSync.ToString().ToLowerInvariant(), NewValue = isSearchEnabled.Value.ToString().ToLowerInvariant() };
                    }
                }
            }

            if (!string.IsNullOrWhiteSpace(ownershipType) &&
                !ownershipType.Equals(existingMetadata.OwnershipType?.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add($"ownership_type is immutable after create and was ignored (current: {existingMetadata.OwnershipType}).");
            }
            if (!string.IsNullOrWhiteSpace(tableType) &&
                !tableType.Equals(existingMetadata.TableType, StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add($"table_type is immutable after create and was ignored (current: {existingMetadata.TableType}).");
            }
            if (isActivity && !existingMetadata.IsActivity.GetValueOrDefault())
            {
                warnings.Add("is_activity is immutable after create and was ignored.");
            }
            if (hasNotes)
            {
                warnings.Add("has_notes is immutable after create and was ignored.");
            }
            if (!string.IsNullOrWhiteSpace(primaryAttributeName) &&
                !primaryAttributeName.Equals(existingMetadata.PrimaryNameAttribute, StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add($"primary_attribute_name is immutable after create and was ignored (current: {existingMetadata.PrimaryNameAttribute}).");
            }
            if (!string.IsNullOrWhiteSpace(primaryAttributeDisplayName) &&
                !primaryAttributeDisplayName.Equals(existingMetadata.PrimaryNameAttribute, StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add("primary_attribute_display_name is immutable after create and was ignored.");
            }

            if (changes.Count == 0)
            {
                return Success(
                    $"No changes for table '{entityName}' ({existingMetadata.MetadataId}).",
                    new ManageTableResult
                    {
                        DisplayName = effectiveDisplayName,
                        DisplayCollectionName = effectiveDisplayCollectionName,
                        SchemaName = existingMetadata.SchemaName,
                        LogicalName = existingMetadata.LogicalName,
                        OwnershipType = existingMetadata.OwnershipType?.ToString() ?? "",
                        MetadataId = existingMetadata.MetadataId?.ToString() ?? "",
                        EntitySetName = existingMetadata.EntitySetName,
                        Warnings = warnings.Count > 0 ? warnings : null,
                        Status = "not_executed",
                        Published = false
                    });
            }

            if (_options.DryRun)
                return DryRun(
                    $"Would UPDATE table '{entityName}' ({existingMetadata.MetadataId}) — {changes.Count} change(s): {string.Join(", ", changes)}.",
                    new ManageTableResult
                    {
                        DisplayName = effectiveDisplayName,
                        DisplayCollectionName = effectiveDisplayCollectionName,
                        SchemaName = existingMetadata.SchemaName,
                        LogicalName = existingMetadata.LogicalName,
                        OwnershipType = existingMetadata.OwnershipType?.ToString() ?? "",
                        MetadataId = existingMetadata.MetadataId?.ToString() ?? "",
                        EntitySetName = existingMetadata.EntitySetName,
                        Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                        Warnings = warnings.Count > 0 ? warnings : null,
                        Status = "not_executed",
                        Published = false
                    });

            var updateRequest = new UpdateEntityRequest
            {
                Entity = existingMetadata
            };

            DataverseMutationExecutor.Execute(_context, _orgService, updateRequest);

            var published = PublishHelper.PublishEntity(_context, _orgService, entityName);

            var summary = $"Updated table '{entityName}' ({existingMetadata.MetadataId}) — {changes.Count} change(s), published={(published ? "yes" : "no")}.";
            if (warnings.Count > 0)
                summary += $" {warnings.Count} warning(s).";

            var structured = new ManageTableResult
            {
                DisplayName = effectiveDisplayName,
                DisplayCollectionName = effectiveDisplayCollectionName,
                SchemaName = existingMetadata.SchemaName,
                LogicalName = existingMetadata.LogicalName,
                OwnershipType = existingMetadata.OwnershipType?.ToString() ?? "",
                MetadataId = existingMetadata.MetadataId?.ToString() ?? "",
                EntitySetName = existingMetadata.EntitySetName,
                Published = published,
                IsAuditEnabled = existingMetadata.IsAuditEnabled?.Value,
                IsQuickCreateEnabled = existingMetadata.IsQuickCreateEnabled == true,
                IsSearchEnabled = existingMetadata.SyncToExternalSearchIndex == true,
                SyncToExternalSearchIndex = existingMetadata.SyncToExternalSearchIndex,
                CanEnableSyncToExternalSearchIndex = existingMetadata.CanEnableSyncToExternalSearchIndex?.Value,
                CanEnableSyncToExternalSearchIndexCanBeChanged = existingMetadata.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                Description = string.IsNullOrWhiteSpace(effectiveDescription) ? null : effectiveDescription,
                Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                Warnings = warnings.Count > 0 ? warnings : null,
                Status = "updated"
            };

            return Success(summary, structured);
        }
    }
}
