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
            "Create or update a Dataverse table (auto-detects create vs update by entity lookup).\n\n" +
            "CREATE (entity absent): display_name + display_collection_name + solution_name required. " +
            "Auto-creates primary name attribute. Next: upsert_column → build_form_xml + manage_form.\n" +
            "UPDATE (entity exists): only entity_name required. Updatable: display_name, display_collection_name, description, is_audit_enabled, is_quick_create_enabled. All other props are immutable after creation.\n\n" +
            "CREATE PREFIX CONFIRMATION FLOW:\n" +
            "1. First call (confirmed_prefix empty): tool resolves prefix and returns [PrefixConfirmationRequired] with preview of SchemaName/LogicalName — NOT an error.\n" +
            "2. Ask user to confirm the prefix shown.\n" +
            "3. Re-call with confirmed_prefix set to the agreed prefix to proceed with creation.\n\n" +
            "TIPS:\n" +
            "- entity_name must include publisher prefix (e.g., 'new_project'); " +
            "or provide solution_name to auto-resolve prefix.\n" +
            "- is_activity=true: forces User ownership, enables notes, sets Subject as primary attr.\n" +
            "- Use get_tables to inspect existing table metadata before updating.")]
        public CallToolResult upsert_table(
            [Description("Logical name with publisher prefix (e.g., 'new_project'). Or just the name (e.g., 'project') — prefix is auto-resolved from solution_name's publisher.")] string entity_name,
            [Description("Singular display name (e.g., 'Project'). Required for create.")] string display_name = "",
            [Description("Plural display name (e.g., 'Projects'). Required for create.")] string display_collection_name = "",
            [Description("Solution unique name. Required for create. Optional for update.")] string solution_name = "",
            [Description("Confirmed publisher prefix for create. Leave empty on first call — tool returns [PrefixConfirmationRequired] with preview. Re-call with this set to the agreed prefix to proceed.")] string confirmed_prefix = "",
            [Description("Entity description.")] string description = "",
            [Description("Primary name attribute logical name. Auto-derived if omitted. Create only.")] string primary_attribute_name = "",
            [Description("Display name for primary attribute. Default: 'Name'. Create only.")] string primary_attribute_display_name = "Name",
            [Description("'User' (default) or 'Organization'. Create only — immutable.")] string ownership_type = "User",
            [Description("'Standard' (default) or 'Elastic' (Azure Cosmos DB; no chart support). Create only — immutable.")] string table_type = "Standard",
            [Description("Activity entity flag. When true: forces User ownership, enables notes, sets Subject primary attr. Create only — immutable.")] bool is_activity = false,
            [Description("Enable notes. Default: false. Create only — cannot be changed after creation.")] bool has_notes = false,
            [Description("Enable quick create form. Default: false (create, update). Omit to keep current value (update).")] bool? is_quick_create_enabled = null,
            [Description("Enable/disable auditing. Default: true (create). Omit to keep current value (update).")] bool? is_audit_enabled = null,
            [Description("Max length for the primary name attribute (1-850, default 100). Create only.")] int primary_attribute_max_length = 100,
            [Description("Publish after operation. Default: true.")] bool auto_publish = true)
        {
            // Validate required fields
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult(
                    "Error: entity_name is required.\n" +
                    "Provide the logical name with publisher prefix (e.g., 'new_project'), " +
                    "or just the name (e.g., 'project') with solution_name to auto-resolve the prefix.");

            // Sanitize entity_name: remove spaces (keep original casing for schema name derivation)
            var originalEntityName = entity_name.Trim().Replace(" ", "");
            entity_name = originalEntityName.ToLowerInvariant();

            // Resolve publisher prefix from solution if provided
            string resolvedPrefix = null;
            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solution_name))
            {
                var (solPrefix, uniqueName, error) = DataverseSolutionResolver.ResolveSolution(_serviceClient, solution_name.Trim());
                if (error != null)
                    return ErrorResult(
                        $"[Error] {error}\n" +
                        $"Tip: Use get_solution_components to find valid solution names.");
                resolvedPrefix = solPrefix;
                resolvedSolutionUniqueName = uniqueName;

                // If entity_name does NOT already start with the publisher prefix, prepend it
                // e.g., "sale_order" + prefix "abc" → "abc_sale_order"
                // e.g., "abc_sale_order" + prefix "abc" → keep as-is
                var prefixWithUnderscore = resolvedPrefix + "_";
                if (!entity_name.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                {
                    originalEntityName = $"{resolvedPrefix}_{originalEntityName}";
                    entity_name = $"{resolvedPrefix}_{entity_name}";
                }
            }

            // Validate publisher prefix exists in entity_name
            var underscoreIndex = entity_name.IndexOf('_');
            if (underscoreIndex < 1 || underscoreIndex >= entity_name.Length - 1)
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
                        is_quick_create_enabled, is_audit_enabled,
                        ownership_type, table_type, is_activity, has_notes,
                        primary_attribute_name, primary_attribute_display_name,
                        resolvedSolutionUniqueName ?? solution_name, auto_publish);
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
                // --- UPDATE MODE ---
                return UpdateExistingEntity(entity_name, existingEntity,
                    display_name, display_collection_name, description,
                    is_quick_create_enabled, is_audit_enabled,
                    ownership_type, table_type, is_activity, has_notes,
                    primary_attribute_name, primary_attribute_display_name,
                    resolvedSolutionUniqueName ?? solution_name, auto_publish);
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

            var prefix = resolvedPrefix ?? entity_name.Substring(0, underscoreIndex);

            // --- PREFIX CONFIRMATION FLOW ---
            // If confirmed_prefix is not set, show preview and ask user to confirm before creating.
            if (string.IsNullOrWhiteSpace(confirmed_prefix))
            {
                string previewSchema, previewLogical;
                try
                {
                    (previewSchema, previewLogical) = DataverseNamer.Resolve(display_name, prefix);
                }
                catch
                {
                    previewSchema = $"{prefix}_{display_name.Trim().Replace(" ", "")}";
                    previewLogical = previewSchema.ToLowerInvariant();
                }
                var confirmSb = new StringBuilder(256);
                confirmSb.AppendLine("[PrefixConfirmationRequired]");
                confirmSb.AppendLine($"ResolvedPrefix: {prefix}");
                confirmSb.AppendLine($"EntityName (preview): {previewLogical}");
                confirmSb.AppendLine($"SchemaName (preview): {previewSchema}");
                confirmSb.AppendLine($"LogicalName (preview): {previewLogical}");
                confirmSb.AppendLine();
                confirmSb.AppendLine($"→ Prefix is correct: re-call upsert_table with confirmed_prefix=\"{prefix}\"");
                confirmSb.AppendLine($"→ Wrong prefix: re-call upsert_table with confirmed_prefix=\"<correct_prefix>\"");
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = confirmSb.ToString() }],
                    IsError = false
                };
            }

            // Use confirmed_prefix (user may have corrected it)
            prefix = confirmed_prefix.Trim().ToLowerInvariant();

            // Rebuild entity_name with confirmed prefix if needed
            var prefixWithUnderscore2 = prefix + "_";
            if (!entity_name.StartsWith(prefixWithUnderscore2, StringComparison.OrdinalIgnoreCase))
                entity_name = $"{prefix}_{entity_name.Substring(underscoreIndex + 1)}";

            var namePart = entity_name.Substring(entity_name.IndexOf('_') + 1);

            // Clamp primary_attribute_max_length
            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

            // Derive SchemaName and LogicalName via DataverseNamer (uses display_name for proper PascalCase)
            string schemaName;
            try
            {
                (schemaName, _) = DataverseNamer.Resolve(display_name, prefix);
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
                    DisplayName = new Label(display_name.Trim(), 1033),
                    DisplayCollectionName = new Label(display_collection_name.Trim(), 1033),
                    OwnershipType = ownershipTypeValue,
                    IsActivity = is_activity,
                    IsAuditEnabled = new BooleanManagedProperty(is_audit_enabled ?? true),
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled
                };

                if (!string.IsNullOrWhiteSpace(description))
                    entityMetadata.Description = new Label(description.Trim(), 1033);

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
                    DisplayName = new Label(primary_attribute_display_name.Trim(), 1033),
                    MaxLength = primary_attribute_max_length,
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
                    FormatName = StringFormatName.Text
                };

                var request = new CreateEntityRequest
                {
                    Entity = entityMetadata,
                    PrimaryAttribute = primaryAttribute,
                    SolutionUniqueName = resolvedSolutionUniqueName ?? solution_name.Trim(),
                    HasNotes = has_notes,
                    HasActivities = false
                };

                if (_options.DryRun)
                    return DryRunResult($"Would CREATE entity '{entity_name}' (display: '{display_name}').");

                var response = (CreateEntityResponse)_serviceClient.Execute(request);
                var entityId = response.EntityId;

                // Retrieve the created entity to get EntitySetName
                var entitySetName = "";
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest
                    {
                        LogicalName = entity_name,
                        EntityFilters = EntityFilters.Entity
                    };
                    var retrieveResponse = (RetrieveEntityResponse)_serviceClient.Execute(retrieveRequest);
                    entitySetName = retrieveResponse.EntityMetadata.EntitySetName ?? "";
                }
                catch
                {
                    // Non-critical — entity was created, just can't get EntitySetName
                }

                // Auto-publish
                var published = false;
                if (auto_publish)
                {
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
                    Published = published,
                    IsAuditEnabled = is_audit_enabled ?? true,
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
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
            bool? isQuickCreateEnabled, bool? isAuditEnabled,
            string ownershipType, string tableType, bool isActivity, bool hasNotes,
            string primaryAttributeName, string primaryAttributeDisplayName,
            string solutionName, bool autoPublish)
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
                        existingMetadata.DisplayName = new Label(displayName.Trim(), 1033);
                        changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName.Trim()}\"");
                        structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(displayCollectionName))
                {
                    var oldVal = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != displayCollectionName.Trim())
                    {
                        existingMetadata.DisplayCollectionName = new Label(displayCollectionName.Trim(), 1033);
                        changes.Add($"DisplayCollectionName: \"{oldVal}\" -> \"{displayCollectionName.Trim()}\"");
                        structuredChanges["displayCollectionName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayCollectionName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = existingMetadata.Description?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != description.Trim())
                    {
                        existingMetadata.Description = new Label(description.Trim(), 1033);
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
                    var sb2 = new StringBuilder(256);
                    sb2.AppendLine($"[Error] No changes specified for entity '{entityName}'");
                    if (warnings.Count > 0)
                    {
                        sb2.AppendLine("Warnings:");
                        foreach (var w in warnings)
                            sb2.AppendLine($"  {w}");
                    }
                    sb2.AppendLine("Tip: Provide at least one updatable parameter (display_name, description, entity_color, is_quick_create_enabled, is_audit_enabled, etc.)");
                    sb2.AppendLine("Note: Irreversible options (activities, feedback, change tracking, business process flows, connections, queues) must be managed via the Power Apps portal.");
                    return ErrorResult(sb2.ToString());
                }

                var updateRequest = new UpdateEntityRequest
                {
                    Entity = existingMetadata,
                    MergeLabels = true
                };
                if (!string.IsNullOrWhiteSpace(solutionName))
                    updateRequest.SolutionUniqueName = solutionName.Trim();

                if (_options.DryRun)
                {
                    var changesSummary = string.Join("; ", changes);
                    return DryRunResult($"Would UPDATE entity '{entityName}' with changes: {changesSummary}");
                }

                _serviceClient.Execute(updateRequest);

                // --- Publish ---
                var published = false;
                if (autoPublish)
                {
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
