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
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertTableTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public UpsertTableTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "upsert_table", Title = "Create or update a Dataverse table",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertTableResult)),
        Description(
            "Create or update a Dataverse table (auto-detect by entity lookup).\n" +
            "- CREATE (no entity): need display_name + display_collection_name + solution_name. Auto-creates primary name. Next: upsert_column → manage_form(action='update', operations=[...]).\n" +
            "- UPDATE (entity exists): need entity_name only. Mutable: display_name, display_collection_name, description, is_audit_enabled, is_quick_create_enabled, is_search_enabled. Others immutable.\n\n" +

            "CREATE uses the publisher prefix from solution_name directly. confirmed_prefix is optional and only validates the resolved prefix when supplied.\n\n" +

            "is_activity=true forces User ownership + notes + Subject primary attr.\n\n" +

            "WHEN TO USE:\n" +
            "- Create a new custom entity (table) with primary name attribute\n" +
            "- Update mutable metadata (display names, description, audit, quick create)\n" +
            "- Enable or disable Dataverse Search indexing for an existing table (is_search_enabled)\n" +
            "- Inspect existing table first via get_tables before update\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- entity_name resolves Display Name contains first, then logical/schema name contains. solution_name uses the shared Display Name first solution resolver. Ambiguity returns IsError=true.")]
        public CallToolResult upsert_table(
            [Description("Logical name with prefix ('new_project') OR just name with solution_name to auto-resolve.")] string entity_name,
            [Description("Singular (e.g. 'Project'). Required: create.")] string display_name = "",
            [Description("Plural (e.g. 'Projects'). Required: create.")] string display_collection_name = "",
            [Description("Required: create.")] string solution_name = "",
            [Description("Optional prefix validation for create. If supplied, it must match the solution publisher prefix.")] string confirmed_prefix = "",
            [Description("")] string description = "",
            [Description("Auto-derived if omitted. [create-only]")] string primary_attribute_name = "",
            [Description("[create-only]")] string primary_attribute_display_name = "Name",
            [Description("'User' or 'Organization'. [create-only, immutable]")] string ownership_type = "User",
            [Description("'Standard' or 'Elastic' (Cosmos DB, no charts). [create-only, immutable]")] string table_type = "Standard",
            [Description("Activity entity. [create-only, immutable]")] bool is_activity = false,
            [Description("Enable notes. [create-only]")] bool has_notes = false,
            [Description("null = keep current (update).")] bool? is_quick_create_enabled = null,
            [Description("null = keep current (update). Default true on create.")] bool? is_audit_enabled = null,
            [Description("Enable this table for Dataverse Search/Relevance Search (SyncToExternalSearchIndex). null = keep current on update; false by default on create unless specified.")] bool? is_search_enabled = null,
            [Description("1–850. [create-only]")] int primary_attribute_max_length = 100)
        {
            // Validate required fields
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult(
                    "Error: entity_name is required.\n" +
                    "Provide the logical name with publisher prefix (e.g., 'new_project'), " +
                    "or just the name (e.g., 'project') with solution_name to auto-resolve the prefix.");

            var entityIdentityInput = entity_name.Trim();
            var originalEntityName = entityIdentityInput;
            entity_name = originalEntityName;
            var inputHasPublisherPrefix = entityIdentityInput.IndexOf('_') > 0 &&
                entityIdentityInput.IndexOf('_') < entityIdentityInput.Length - 1;
            var hasCreateMetadataInput =
                !string.IsNullOrWhiteSpace(display_name) ||
                !string.IsNullOrWhiteSpace(display_collection_name) ||
                !string.IsNullOrWhiteSpace(primary_attribute_name) ||
                !primary_attribute_display_name.Trim().Equals("Name", StringComparison.OrdinalIgnoreCase) ||
                has_notes ||
                is_activity ||
                !ownership_type.Trim().Equals("User", StringComparison.OrdinalIgnoreCase) ||
                !table_type.Trim().Equals("Standard", StringComparison.OrdinalIgnoreCase);
            var isCreateIntent = !inputHasPublisherPrefix &&
                !string.IsNullOrWhiteSpace(solution_name) &&
                hasCreateMetadataInput;

            // Resolve publisher prefix from solution if provided
            string resolvedPrefix = null;
            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solution_name))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solution_name.Trim());
                if (!solResult.IsSuccess)
                    return ErrorResult(
                        $"[Error] {solResult.Error}\n" +
                        $"Tip: Use get_solution_components to find valid solution names.");
                resolvedPrefix = solResult.Prefix;
                resolvedSolutionUniqueName = solResult.UniqueName;

                // If entity_name does NOT already start with the publisher prefix, prepend it
                // e.g., "sale_order" + prefix "abc" → "abc_sale_order"
                // e.g., "abc_sale_order" + prefix "abc" → keep as-is
                var prefixWithUnderscore = resolvedPrefix + "_";
                if (entity_name.IndexOf('_') < 1 || entity_name.IndexOf('_') >= entity_name.Length - 1)
                {
                    originalEntityName = $"{resolvedPrefix}_{originalEntityName.Replace(" ", "")}";
                    entity_name = $"{resolvedPrefix}_{entity_name}";
                }
            }

            if (!isCreateIntent)
            {
                var entityResolve = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityIdentityInput, "upsert_table");
                if (entityResolve.IsSuccess)
                {
                    entity_name = entityResolve.Value.LogicalName;
                    return UpdateExistingEntity(entity_name, entityResolve.Value,
                        display_name, display_collection_name, description,
                        is_quick_create_enabled, is_audit_enabled, is_search_enabled,
                        ownership_type, table_type, is_activity, has_notes,
                        primary_attribute_name, primary_attribute_display_name,
                        resolvedSolutionUniqueName ?? solution_name);
                }
                if (entityResolve.Status == ResolveStatus.Ambiguous || entityResolve.Status == ResolveStatus.Error)
                    return ErrorResult($"Error: {entityResolve.Error}");
            }

            // Validate publisher prefix exists in entity_name
            var underscoreIndex = entity_name.IndexOf('_');
            if ((underscoreIndex < 1 || underscoreIndex >= entity_name.Length - 1) && string.IsNullOrWhiteSpace(solution_name))
            {
                // No prefix — could be a system entity (e.g., "account", "contact") for update mode
                // Try to retrieve the entity first before rejecting
                try
                {
                    var checkRequest = new RetrieveEntityRequest
                    {
                        LogicalName = entity_name,
                        EntityFilters = EntityFilters.Entity,
                        RetrieveAsIfPublished = true
                    };
                    var checkResponse = (RetrieveEntityResponse)_serviceClient.Execute(checkRequest);
                    // Entity exists — go to update mode directly
                return UpdateExistingEntity(entity_name, checkResponse.EntityMetadata,
                        display_name, display_collection_name, description,
                        is_quick_create_enabled, is_audit_enabled, is_search_enabled,
                        ownership_type, table_type, is_activity, has_notes,
                        primary_attribute_name, primary_attribute_display_name,
                        resolvedSolutionUniqueName ?? solution_name);
                }
                catch
                {
                    // Entity doesn't exist and no prefix — error
                }

                return ErrorResult(
                    $"[Error] Cannot determine publisher prefix for entity '{entity_name}'\n" +
                    $"Message: Entity name has no prefix (e.g., 'new_project') and no solution_name was provided to resolve it.\n" +
                    $"Tip: Either include the prefix in entity_name (e.g., 'new_project') or provide solution_name so the prefix can be auto-resolved from the solution's publisher.");
            }

            // --- Auto-detect create vs update ---
            EntityMetadata existingEntity = null;
            try
            {
                var retrieveRequest = new RetrieveEntityRequest
                {
                    LogicalName = entity_name,
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                };
                var retrieveResponse = (RetrieveEntityResponse)_serviceClient.Execute(retrieveRequest);
                existingEntity = retrieveResponse.EntityMetadata;
            }
            catch
            {
                // Entity does not exist → create mode
            }

            if (existingEntity != null)
            {
                if (isCreateIntent)
                {
                    return ErrorResult(
                        $"[Error] Cannot create table '{display_name.Trim()}' because logical name '{entity_name}' already exists.\n" +
                        "Use update-style parameters for an existing table, or choose a different entity_name for the new table.");
                }

                // --- UPDATE MODE ---
                return UpdateExistingEntity(entity_name, existingEntity,
                    display_name, display_collection_name, description,
                    is_quick_create_enabled, is_audit_enabled, is_search_enabled,
                    ownership_type, table_type, is_activity, has_notes,
                    primary_attribute_name, primary_attribute_display_name,
                    resolvedSolutionUniqueName ?? solution_name);
            }

            // --- CREATE MODE ---
            // Validate required create fields
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult(
                    "Error: display_name is required when creating a new entity.\n" +
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(display_collection_name))
                return ErrorResult(
                    "Error: display_collection_name is required when creating a new entity.\n" +
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(solution_name))
                return ErrorResult(
                    "Error: solution_name is required when creating a new entity.\n" +
                    "Required for create: display_name, display_collection_name, solution_name.\n" +
                    "Read docs://schema_tools_guide for prefix resolution and solution requirements.");

            var prefix = entity_name.Substring(0, underscoreIndex);

            if (!string.IsNullOrWhiteSpace(confirmed_prefix) &&
                !confirmed_prefix.Trim().Equals(prefix, StringComparison.OrdinalIgnoreCase))
            {
                return ErrorResult(
                    $"[Error] confirmed_prefix '{confirmed_prefix.Trim()}' does not match solution '{resolvedSolutionUniqueName ?? solution_name.Trim()}' publisher prefix '{prefix}'.\n" +
                    "Use the solution publisher prefix or omit confirmed_prefix.");
            }

            // Rebuild entity_name with the resolved solution prefix if needed
            var prefixWithUnderscore2 = prefix + "_";
            if (!entity_name.StartsWith(prefixWithUnderscore2, StringComparison.OrdinalIgnoreCase))
                entity_name = $"{prefix}_{entity_name.Substring(underscoreIndex + 1)}";

            var namePart = entity_name.Substring(entity_name.IndexOf('_') + 1);

            // Clamp primary_attribute_max_length
            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

            // Derive SchemaName and LogicalName via DataverseNamer (portal-style, preserving display_name casing)
            string schemaName;
            try
            {
                (schemaName, _) = DataverseNamer.Resolve(namePart, prefix);
            }
            catch
            {
                // Fallback: use namePart with TitleCase
                schemaName = prefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(namePart);
            }
            // Always re-derive entity_name (logical) from schemaName to stay in sync
            entity_name = schemaName.ToLowerInvariant();

            // Auto-derive primary attribute name
            if (string.IsNullOrWhiteSpace(primary_attribute_name))
                primary_attribute_name = prefix + "_name";
            else
                primary_attribute_name = primary_attribute_name.Trim().ToLowerInvariant();

            // Auto-derive primary attribute schema name
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

            // Parse ownership type
            var ownershipTrimmed = ownership_type.Trim();
            OwnershipTypes ownershipTypeValue;
            if (ownershipTrimmed.Equals("Organization", StringComparison.OrdinalIgnoreCase) ||
                ownershipTrimmed.Equals("Org", StringComparison.OrdinalIgnoreCase) ||
                ownershipTrimmed.Equals("OrganizationOwned", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.OrganizationOwned;
            else if (ownershipTrimmed.Equals("User", StringComparison.OrdinalIgnoreCase) ||
                     ownershipTrimmed.Equals("UserOwned", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.UserOwned;
            else
                return ErrorResult(
                    $"[Error] Invalid ownership_type: '{ownership_type}'\n" +
                    $"Valid values: 'User' (default, supports sharing/assigning) or 'Organization' (no row-level security)\n" +
                    $"Tip: Ownership cannot be changed after entity creation.");

            // Parse table type
            var tableTypeTrimmed = table_type.Trim();
            bool isElastic = tableTypeTrimmed.Equals("Elastic", StringComparison.OrdinalIgnoreCase);
            if (!isElastic && !tableTypeTrimmed.Equals("Standard", StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Invalid table_type: '{table_type}'\n" +
                    $"Valid values: 'Standard' (default) or 'Elastic' (Azure Cosmos DB backed)");

            // Activity + Elastic is not supported by Dataverse
            if (is_activity && isElastic)
                return ErrorResult(
                    "[Error] Cannot create an Elastic Activity entity.\n" +
                    "Tip: Activity entities do not support Elastic table type.");

            // Apply null-coalesced defaults for create mode
            var effectiveIsQuickCreateEnabled = is_quick_create_enabled ?? false;

            // Activity overrides
            if (is_activity)
            {
                ownershipTypeValue = OwnershipTypes.UserOwned;
                has_notes = true;
                primarySchemaName = "Subject";
                primary_attribute_name = "subject";
                primary_attribute_display_name = "Subject";
            }

            try
            {
                var entityMetadata = new EntityMetadata
                {
                    SchemaName = schemaName,
                    LogicalName = entity_name,
                    DisplayName = new Label(display_name.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                    DisplayCollectionName = new Label(display_collection_name.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                    OwnershipType = ownershipTypeValue,
                    IsActivity = is_activity,
                    IsAuditEnabled = new BooleanManagedProperty(is_audit_enabled ?? true),
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                    SyncToExternalSearchIndex = is_search_enabled ?? false
                };

                if (!string.IsNullOrWhiteSpace(description))
                    entityMetadata.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

                // Elastic table overrides
                if (isElastic)
                {
                    entityMetadata.TableType = "Elastic";
                    entityMetadata.CanCreateCharts = new BooleanManagedProperty(false);
                }

                // Activity entity overrides
                if (is_activity)
                    entityMetadata.IsAvailableOffline = true;

                var primaryAttribute = new StringAttributeMetadata
                {
                    SchemaName = primarySchemaName,
                    LogicalName = primary_attribute_name,
                    DisplayName = new Label(primary_attribute_display_name.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                    MaxLength = primary_attribute_max_length,
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
                    FormatName = StringFormatName.Text
                };

                var request = new CreateEntityRequest
                {
                    Entity = entityMetadata,
                    PrimaryAttribute = primaryAttribute,
                    HasNotes = has_notes,
                    HasActivities = false
                };
                SolutionComponentCreateHelper.ApplySolutionUniqueName(request, resolvedSolutionUniqueName ?? solution_name.Trim());

                if (_options.DryRun)
                    return DryRunResult($"Would CREATE entity '{entity_name}' (display: '{display_name}').");

                var response = (CreateEntityResponse)_serviceClient.Execute(request);
                var entityId = response.EntityId;

                // Retrieve the created entity to get EntitySetName and managed properties.
                var entitySetName = "";
                EntityMetadata createdMetadata = null;
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest
                    {
                        LogicalName = entity_name,
                        EntityFilters = EntityFilters.Entity
                    };
                    var retrieveResponse = (RetrieveEntityResponse)_serviceClient.Execute(retrieveRequest);
                    createdMetadata = retrieveResponse.EntityMetadata;
                    entitySetName = createdMetadata.EntitySetName ?? "";
                }
                catch
                {
                    // Non-critical — entity was created, just can't get EntitySetName
                }

                // Auto-publish
                var published = false;
                try
                {
                    var publishXml = $"<importexportxml><entities><entity>{entity_name}</entity></entities></importexportxml>";
                    _serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.PublishXmlRequest { ParameterXml = publishXml });
                    published = true;
                }
                catch
                {
                    // Non-critical — entity was created, publish failed
                }

                // Wait for table metadata to propagate before subsequent operations
                if (published)
                {
                    MetadataOperationWaitHelper.WaitAfterTableCreation();
                }

                // Format compact output
                var sb = new StringBuilder(512);
                sb.AppendLine($"[EntityCreated] {entity_name}");
                sb.AppendLine($"DisplayName: {display_name.Trim()}");
                sb.AppendLine($"PluralName: {display_collection_name.Trim()}");
                sb.AppendLine($"SchemaName: {schemaName}");
                sb.AppendLine($"Ownership: {ownershipTypeValue}");
                sb.AppendLine($"TableType: {(isElastic ? "Elastic" : "Standard")}");
                sb.AppendLine($"PrimaryAttribute: {primary_attribute_name} ({primary_attribute_display_name.Trim()})");
                sb.AppendLine($"PrimaryAttrMaxLength: {primary_attribute_max_length}");
                sb.AppendLine($"HasNotes: {(has_notes ? "yes" : "no")}");
                sb.AppendLine($"IsActivity: {(is_activity ? "yes" : "no")}");
                sb.AppendLine($"IsSearchEnabled: {((is_search_enabled ?? false) ? "yes" : "no")}");
                AppendSearchMetadata(sb, createdMetadata, is_search_enabled ?? false);
                sb.AppendLine($"Solution: {resolvedSolutionUniqueName ?? solution_name.Trim()}");
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                sb.AppendLine($"MetadataId: {entityId}");
                if (!string.IsNullOrEmpty(entitySetName))
                    sb.AppendLine($"EntitySetName: {entitySetName}");

                var structured = new UpsertTableResult
                {
                    EntityName = entity_name,
                    DisplayName = display_name.Trim(),
                    DisplayCollectionName = display_collection_name.Trim(),
                    SchemaName = schemaName,
                    OwnershipType = ownershipTypeValue.ToString(),
                    TableType = isElastic ? "Elastic" : null,
                    PrimaryAttributeName = primary_attribute_name,
                    PrimaryAttributeDisplayName = primary_attribute_display_name.Trim(),
                    PrimaryAttributeMaxLength = primary_attribute_max_length,
                    MetadataId = entityId.ToString(),
                    EntitySetName = string.IsNullOrEmpty(entitySetName) ? null : entitySetName,
                    SolutionName = resolvedSolutionUniqueName ?? solution_name.Trim(),
                    CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Published = published,
                    IsAuditEnabled = is_audit_enabled ?? true,
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                    IsSearchEnabled = is_search_enabled ?? false,
                    SyncToExternalSearchIndex = createdMetadata?.SyncToExternalSearchIndex ?? is_search_enabled ?? false,
                    CanEnableSyncToExternalSearchIndex = createdMetadata?.CanEnableSyncToExternalSearchIndex?.Value,
                    CanEnableSyncToExternalSearchIndexCanBeChanged = createdMetadata?.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                    Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
                    Status = "created"
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                var msg = ex.Message;

                // Handle solution not found
                if (msg.Contains("solution", StringComparison.OrdinalIgnoreCase) &&
                    (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                     msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
                {
                    return ErrorResult(
                        $"[Error] Solution '{solution_name}' not found\n" +
                        $"Message: {msg}\n" +
                        $"Tip: Use get_solution_components to find valid solution names");
                }

                return ErrorResult($"Error: Failed to create entity '{entity_name}'\nMessage: {msg}");
            }
        }

        // ========== UPDATE MODE ==========

        private CallToolResult UpdateExistingEntity(
            string entityName, EntityMetadata existingMetadata,
            string displayName, string displayCollectionName, string description,
            bool? isQuickCreateEnabled, bool? isAuditEnabled, bool? isSearchEnabled,
            string ownershipType, string tableType, bool isActivity, bool hasNotes,
            string primaryAttributeName, string primaryAttributeDisplayName,
            string solutionName)
        {
            try
            {
                var changes = new List<string>();
                var structuredChanges = new Dictionary<string, UpdateAttributeChange>();
                var warnings = new List<string>();

                // --- Label properties ---
                if (!string.IsNullOrWhiteSpace(displayName))
                {
                    var oldVal = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != displayName.Trim())
                    {
                        existingMetadata.DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                        changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName.Trim()}\"");
                        structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(displayCollectionName))
                {
                    var oldVal = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != displayCollectionName.Trim())
                    {
                        existingMetadata.DisplayCollectionName = new Label(displayCollectionName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                        changes.Add($"DisplayCollectionName: \"{oldVal}\" -> \"{displayCollectionName.Trim()}\"");
                        structuredChanges["displayCollectionName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayCollectionName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = existingMetadata.Description?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != description.Trim())
                    {
                        existingMetadata.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                        changes.Add($"Description: \"{oldVal}\" -> \"{description.Trim()}\"");
                        structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description.Trim() };
                    }
                }

                // --- Bool properties ---
                if (isQuickCreateEnabled.HasValue && existingMetadata.IsQuickCreateEnabled != isQuickCreateEnabled.Value)
                {
                    var oldVal = existingMetadata.IsQuickCreateEnabled == true ? "true" : "false";
                    existingMetadata.IsQuickCreateEnabled = isQuickCreateEnabled.Value;
                    changes.Add($"IsQuickCreateEnabled: {oldVal} -> {isQuickCreateEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isQuickCreateEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isQuickCreateEnabled.Value.ToString().ToLowerInvariant() };
                }

                // --- BooleanManagedProperty properties ---
                if (isAuditEnabled.HasValue && existingMetadata.IsAuditEnabled?.Value != isAuditEnabled.Value)
                {
                    var oldVal = existingMetadata.IsAuditEnabled?.Value == true ? "true" : "false";
                    existingMetadata.IsAuditEnabled = new BooleanManagedProperty(isAuditEnabled.Value);
                    changes.Add($"IsAuditEnabled: {oldVal} -> {isAuditEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isAuditEnabled.Value.ToString().ToLowerInvariant() };
                }

                if (isSearchEnabled.HasValue)
                {
                    var currentSearchEnabled = existingMetadata.SyncToExternalSearchIndex == true;
                    var oldVal = currentSearchEnabled ? "true" : "false";
                    var newVal = isSearchEnabled.Value.ToString().ToLowerInvariant();
                    if (!currentSearchEnabled &&
                        isSearchEnabled.Value &&
                        existingMetadata.CanEnableSyncToExternalSearchIndex?.Value == false)
                    {
                        return ErrorResult(
                            $"[Error] Cannot enable Dataverse Search for entity '{entityName}'.\n" +
                            "Reason: CanEnableSyncToExternalSearchIndex is false for this table.\n" +
                            "Tip: Use get_tables or EntityDefinitions metadata to inspect table capabilities.");
                    }
                    if (currentSearchEnabled != isSearchEnabled.Value)
                    {
                        existingMetadata.SyncToExternalSearchIndex = isSearchEnabled.Value;
                        changes.Add($"SyncToExternalSearchIndex: {oldVal} -> {newVal}");
                        structuredChanges["isSearchEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newVal };
                    }
                }

                // --- Warn for immutable properties passed with non-default values ---
                if (!string.IsNullOrWhiteSpace(ownershipType) &&
                    !ownershipType.Trim().Equals("User", StringComparison.OrdinalIgnoreCase))
                    warnings.Add("ownership_type cannot be changed after entity creation (ignored)");

                if (isActivity)
                    warnings.Add("is_activity cannot be changed after entity creation (ignored)");

                if (!string.IsNullOrWhiteSpace(tableType) &&
                    !tableType.Trim().Equals("Standard", StringComparison.OrdinalIgnoreCase))
                    warnings.Add("table_type cannot be changed after entity creation (ignored)");

                if (!hasNotes)
                    warnings.Add("has_notes cannot be changed after entity creation (ignored)");

                if (!string.IsNullOrWhiteSpace(primaryAttributeName) && primaryAttributeName != "Name")
                    warnings.Add("primary_attribute_name cannot be changed after entity creation (ignored)");

                if (primaryAttributeDisplayName != "Name")
                    warnings.Add("primary_attribute_display_name cannot be changed after entity creation (ignored)");

                // --- Execute update ---
                if (changes.Count == 0)
                {
                    var hasUpdateInput =
                        !string.IsNullOrWhiteSpace(displayName) ||
                        !string.IsNullOrWhiteSpace(displayCollectionName) ||
                        !string.IsNullOrWhiteSpace(description) ||
                        isQuickCreateEnabled.HasValue ||
                        isAuditEnabled.HasValue ||
                        isSearchEnabled.HasValue;

                    if (hasUpdateInput)
                    {
                        var unchangedText = new StringBuilder(512);
                        unchangedText.AppendLine($"[EntityUnchanged] {entityName}");
                        if (warnings.Count > 0)
                        {
                            unchangedText.AppendLine("Warnings:");
                            foreach (var w in warnings)
                                unchangedText.AppendLine($"  {w}");
                        }
                        unchangedText.AppendLine("Published: no");
                        unchangedText.AppendLine($"MetadataId: {existingMetadata.MetadataId}");
                        AppendSearchMetadata(unchangedText, existingMetadata);

                        var unchanged = new UpsertTableResult
                        {
                            EntityName = entityName,
                            DisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
                            DisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "",
                            SchemaName = existingMetadata.SchemaName,
                            OwnershipType = existingMetadata.OwnershipType?.ToString() ?? "",
                            MetadataId = existingMetadata.MetadataId?.ToString() ?? "",
                            EntitySetName = existingMetadata.EntitySetName,
                            Published = false,
                            IsAuditEnabled = existingMetadata.IsAuditEnabled?.Value,
                            IsQuickCreateEnabled = existingMetadata.IsQuickCreateEnabled == true,
                            IsSearchEnabled = existingMetadata.SyncToExternalSearchIndex == true,
                            SyncToExternalSearchIndex = existingMetadata.SyncToExternalSearchIndex,
                            CanEnableSyncToExternalSearchIndex = existingMetadata.CanEnableSyncToExternalSearchIndex?.Value,
                            CanEnableSyncToExternalSearchIndexCanBeChanged = existingMetadata.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                            Warnings = warnings.Count > 0 ? warnings : null,
                            Status = "unchanged"
                        };

                        return new CallToolResult
                        {
                            Content = [new TextContentBlock { Text = unchangedText.ToString() }],
                            StructuredContent = JsonSerializer.SerializeToElement(unchanged)
                        };
                    }

                    var sb2 = new StringBuilder(256);
                    sb2.AppendLine($"[Error] No changes specified for entity '{entityName}'");
                    if (warnings.Count > 0)
                    {
                        sb2.AppendLine("Warnings:");
                        foreach (var w in warnings)
                            sb2.AppendLine($"  {w}");
                    }
                    sb2.AppendLine("Tip: Provide at least one updatable parameter (display_name, description, entity_color, is_quick_create_enabled, is_audit_enabled, is_search_enabled, etc.)");
                    sb2.AppendLine("Note: Irreversible options (activities, feedback, change tracking, business process flows, connections, queues) must be managed via the Power Apps portal.");
                    return ErrorResult(sb2.ToString());
                }

                var updateRequest = new UpdateEntityRequest
                {
                    Entity = existingMetadata,
                    MergeLabels = true
                };
                SolutionComponentCreateHelper.ApplySolutionUniqueName(updateRequest, solutionName);

                if (_options.DryRun)
                {
                    var changesSummary = string.Join("; ", changes);
                    return DryRunResult($"Would UPDATE entity '{entityName}' with changes: {changesSummary}");
                }

                _serviceClient.Execute(updateRequest);

                // --- Publish ---
                var published = false;
                try
                {
                    var publishXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>";
                    _serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.PublishXmlRequest { ParameterXml = publishXml });
                    published = true;
                }
                catch
                {
                    // Non-critical
                }

                // --- Format output ---
                var sb = new StringBuilder(512);
                sb.AppendLine($"[EntityUpdated] {entityName}");
                sb.AppendLine("Changes:");
                foreach (var c in changes)
                    sb.AppendLine($"  {c}");
                if (warnings.Count > 0)
                {
                    sb.AppendLine("Warnings:");
                    foreach (var w in warnings)
                        sb.AppendLine($"  {w}");
                }
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                sb.AppendLine($"MetadataId: {existingMetadata.MetadataId}");
                AppendSearchMetadata(sb, existingMetadata);

                var structured = new UpsertTableResult
                {
                    EntityName = entityName,
                    DisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
                    DisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "",
                    SchemaName = existingMetadata.SchemaName,
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
                    Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                    Warnings = warnings.Count > 0 ? warnings : null,
                    Status = "updated"
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                if (msg.Contains("could not be found", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase))
                {
                    return ErrorResult(
                        $"[Error] Entity not found: '{entityName}'\n" +
                        $"Message: {msg}\n" +
                        "Tip: Use get_tables to find the correct entity logical name");
                }
                return ErrorResult($"Error: Failed to update entity '{entityName}'\nMessage: {msg}");
            }
        }

        private static void AppendSearchMetadata(StringBuilder sb, EntityMetadata metadata, bool? fallbackSyncToExternalSearchIndex = null)
        {
            var syncToExternalSearchIndex = metadata?.SyncToExternalSearchIndex ?? fallbackSyncToExternalSearchIndex;
            if (syncToExternalSearchIndex.HasValue)
                sb.AppendLine($"SyncToExternalSearchIndex: {syncToExternalSearchIndex.Value.ToString().ToLowerInvariant()}");

            if (metadata?.CanEnableSyncToExternalSearchIndex != null)
            {
                sb.AppendLine($"CanEnableSyncToExternalSearchIndex: {metadata.CanEnableSyncToExternalSearchIndex.Value.ToString().ToLowerInvariant()}");
                sb.AppendLine($"CanEnableSyncToExternalSearchIndexCanBeChanged: {metadata.CanEnableSyncToExternalSearchIndex.CanBeChanged.ToString().ToLowerInvariant()}");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

    }
}
