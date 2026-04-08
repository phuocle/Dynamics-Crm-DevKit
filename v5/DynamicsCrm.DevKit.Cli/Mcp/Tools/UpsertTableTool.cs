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
            "Create a new custom Dataverse entity (table) or update an existing one. " +
            "Auto-detects create vs update. Auto-creates primary name attribute on create.\n\n" +

            "CREATE MODE (entity does not exist):\n" +
            "- display_name, display_collection_name, and solution_name are REQUIRED\n" +
            "- Entity name MUST include publisher prefix (e.g., 'new_project')\n" +
            "- After creation: upsert_column to add columns, build_form_xml + manage_form to customize the form\n\n" +

            "UPDATE MODE (entity already exists):\n" +
            "- Only entity_name is required to identify the entity\n" +
            "- Only provided parameters are updated, omitted ones keep current values\n" +
            "- Immutable properties (ownership_type, is_activity, has_notes, primary attribute) are ignored with warnings\n\n" +

            "TIPS:\n" +
            "- Entity name MUST include publisher prefix (e.g., 'new_project')\n" +
            "- Use get_tables to inspect existing entity metadata before updating")]
        public CallToolResult upsert_table(
            [Description("Logical name with publisher prefix (e.g., 'new_project').")] string entity_name,
            [Description("Singular display name (e.g., 'Project'). Required for create.")] string display_name = "",
            [Description("Plural display name (e.g., 'Projects'). Required for create.")] string display_collection_name = "",
            [Description("Solution unique name. Required for create. Optional for update.")] string solution_name = "",
            [Description("Entity description.")] string description = "",
            [Description("Primary name attribute logical name. Auto-derived if omitted. Create only.")] string primary_attribute_name = "",
            [Description("Display name for primary attribute. Default: 'Name'. Create only.")] string primary_attribute_display_name = "Name",
            [Description("Max length of primary attribute (1-850). Default: 100. Create only.")] int primary_attribute_max_length = 100,
            [Description("'User' (default, supports sharing/assigning) or 'Organization' (no row-level security). Create only — cannot be changed after creation.")] string ownership_type = "User",
            [Description("Create as activity entity. Default: false. Create only — cannot be changed after creation.")] bool is_activity = false,
            [Description("Enable notes. Default: true. Create only — cannot be changed after creation.")] bool has_notes = true,
            [Description("Enable activities. Default: true (create). Omit to keep current value (update).")] bool? has_activities = null,
            [Description("Enable feedback/ratings. Default: false (create). Omit to keep current value (update).")] bool? has_feedback = null,
            [Description("Enable quick create form. Default: false (create). Omit to keep current value (update).")] bool? is_quick_create_enabled = null,
            [Description("Enable duplicate detection. Default: true (create). Omit to keep current value (update).")] bool? is_duplicate_detection_enabled = null,
            [Description("Enable change tracking. Default: true (create). Omit to keep current value (update).")] bool? change_tracking_enabled = null,
            [Description("Hex color code (e.g., '#4A90D9').")] string entity_color = "",
            [Description("Enable/disable auditing (update only).")] bool? is_audit_enabled = null,
            [Description("Enable/disable business process flows (update only).")] bool? is_business_process_enabled = null,
            [Description("Publish after operation. Default: true.")] bool auto_publish = true)
        {
            // Validate required fields
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            entity_name = entity_name.Trim().ToLowerInvariant();

            // Validate publisher prefix
            var underscoreIndex = entity_name.IndexOf('_');
            if (underscoreIndex < 1 || underscoreIndex >= entity_name.Length - 1)
                return ErrorResult(
                    $"[Error] Cannot create/update entity\n" +
                    $"EntityName: {entity_name}\n" +
                    $"Message: Entity name must include a publisher prefix (e.g., 'new_project', 'cr_project')\n" +
                    $"Tip: Check solution publisher prefix. Use get_solution_components to find solution details.");

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
                    has_activities, has_feedback, is_quick_create_enabled,
                    is_duplicate_detection_enabled, change_tracking_enabled, entity_color,
                    is_audit_enabled, is_business_process_enabled,
                    ownership_type, is_activity, has_notes,
                    primary_attribute_name, primary_attribute_display_name, primary_attribute_max_length,
                    solution_name, auto_publish);
            }

            // --- CREATE MODE ---
            // Validate required create fields
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required when creating a new entity.");
            if (string.IsNullOrWhiteSpace(display_collection_name))
                return ErrorResult("Error: display_collection_name is required when creating a new entity.");
            if (string.IsNullOrWhiteSpace(solution_name))
                return ErrorResult("Error: solution_name is required when creating a new entity.");

            var prefix = entity_name.Substring(0, underscoreIndex);
            var namePart = entity_name.Substring(underscoreIndex + 1);

            // Validate max length
            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

            // Auto-derive schema name: new_project → new_Project
            var schemaName = prefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(namePart);

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
                ownershipTrimmed.Equals("Org", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.OrganizationOwned;
            else if (ownershipTrimmed.Equals("User", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.UserOwned;
            else
                return ErrorResult(
                    $"[Error] Invalid ownership_type: '{ownership_type}'\n" +
                    $"Valid values: 'User' (default, supports sharing/assigning) or 'Organization' (no row-level security)\n" +
                    $"Tip: Ownership cannot be changed after entity creation.");

            // Apply null-coalesced defaults for create mode
            var effectiveHasActivities = has_activities ?? true;
            var effectiveHasFeedback = has_feedback ?? false;
            var effectiveIsQuickCreateEnabled = is_quick_create_enabled ?? false;
            var effectiveIsDuplicateDetectionEnabled = is_duplicate_detection_enabled ?? true;
            var effectiveChangeTrackingEnabled = change_tracking_enabled ?? true;

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
                    HasActivities = effectiveHasActivities,
                    HasFeedback = effectiveHasFeedback,
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                    IsDuplicateDetectionEnabled = new BooleanManagedProperty(effectiveIsDuplicateDetectionEnabled),
                    ChangeTrackingEnabled = effectiveChangeTrackingEnabled
                };

                if (!string.IsNullOrWhiteSpace(description))
                    entityMetadata.Description = new Label(description.Trim(), 1033);

                if (!string.IsNullOrWhiteSpace(entity_color))
                    entityMetadata.EntityColor = entity_color.Trim();

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
                    SolutionUniqueName = solution_name.Trim(),
                    HasNotes = has_notes,
                    HasActivities = effectiveHasActivities
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
                sb.AppendLine($"PrimaryAttribute: {primary_attribute_name} ({primary_attribute_display_name.Trim()})");
                sb.AppendLine($"PrimaryAttrMaxLength: {primary_attribute_max_length}");
                sb.AppendLine($"HasNotes: {(has_notes ? "yes" : "no")}");
                sb.AppendLine($"HasActivities: {(effectiveHasActivities ? "yes" : "no")}");
                sb.AppendLine($"IsActivity: {(is_activity ? "yes" : "no")}");
                sb.AppendLine($"DuplicateDetection: {(effectiveIsDuplicateDetectionEnabled ? "yes" : "no")}");
                sb.AppendLine($"ChangeTracking: {(effectiveChangeTrackingEnabled ? "yes" : "no")}");
                sb.AppendLine($"Solution: {solution_name.Trim()}");
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
                    PrimaryAttributeName = primary_attribute_name,
                    PrimaryAttributeDisplayName = primary_attribute_display_name.Trim(),
                    PrimaryAttributeMaxLength = primary_attribute_max_length,
                    MetadataId = entityId.ToString(),
                    EntitySetName = string.IsNullOrEmpty(entitySetName) ? null : entitySetName,
                    SolutionName = solution_name.Trim(),
                    Published = published,
                    HasNotes = has_notes,
                    HasActivities = effectiveHasActivities,
                    IsActivity = is_activity,
                    HasFeedback = effectiveHasFeedback,
                    IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                    DuplicateDetection = effectiveIsDuplicateDetectionEnabled,
                    ChangeTracking = effectiveChangeTrackingEnabled,
                    Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
                    EntityColor = string.IsNullOrWhiteSpace(entity_color) ? null : entity_color.Trim(),
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
            bool? hasActivities, bool? hasFeedback, bool? isQuickCreateEnabled,
            bool? isDuplicateDetectionEnabled, bool? changeTrackingEnabled, string entityColor,
            bool? isAuditEnabled, bool? isBusinessProcessEnabled,
            string ownershipType, bool isActivity, bool hasNotes,
            string primaryAttributeName, string primaryAttributeDisplayName, int primaryAttributeMaxLength,
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
                if (hasActivities.HasValue && existingMetadata.HasActivities != hasActivities.Value)
                {
                    var oldVal = existingMetadata.HasActivities == true ? "true" : "false";
                    existingMetadata.HasActivities = hasActivities.Value;
                    changes.Add($"HasActivities: {oldVal} -> {hasActivities.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["hasActivities"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = hasActivities.Value.ToString().ToLowerInvariant() };
                }

                if (hasFeedback.HasValue && existingMetadata.HasFeedback != hasFeedback.Value)
                {
                    var oldVal = existingMetadata.HasFeedback == true ? "true" : "false";
                    existingMetadata.HasFeedback = hasFeedback.Value;
                    changes.Add($"HasFeedback: {oldVal} -> {hasFeedback.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["hasFeedback"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = hasFeedback.Value.ToString().ToLowerInvariant() };
                }

                if (isQuickCreateEnabled.HasValue && existingMetadata.IsQuickCreateEnabled != isQuickCreateEnabled.Value)
                {
                    var oldVal = existingMetadata.IsQuickCreateEnabled == true ? "true" : "false";
                    existingMetadata.IsQuickCreateEnabled = isQuickCreateEnabled.Value;
                    changes.Add($"IsQuickCreateEnabled: {oldVal} -> {isQuickCreateEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isQuickCreateEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isQuickCreateEnabled.Value.ToString().ToLowerInvariant() };
                }

                if (changeTrackingEnabled.HasValue && existingMetadata.ChangeTrackingEnabled != changeTrackingEnabled.Value)
                {
                    var oldVal = existingMetadata.ChangeTrackingEnabled == true ? "true" : "false";
                    existingMetadata.ChangeTrackingEnabled = changeTrackingEnabled.Value;
                    changes.Add($"ChangeTrackingEnabled: {oldVal} -> {changeTrackingEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["changeTrackingEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = changeTrackingEnabled.Value.ToString().ToLowerInvariant() };
                }

                if (isBusinessProcessEnabled.HasValue && existingMetadata.IsBusinessProcessEnabled != isBusinessProcessEnabled.Value)
                {
                    var oldVal = existingMetadata.IsBusinessProcessEnabled == true ? "true" : "false";
                    existingMetadata.IsBusinessProcessEnabled = isBusinessProcessEnabled.Value;
                    changes.Add($"IsBusinessProcessEnabled: {oldVal} -> {isBusinessProcessEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isBusinessProcessEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isBusinessProcessEnabled.Value.ToString().ToLowerInvariant() };
                }

                // --- BooleanManagedProperty properties ---
                if (isDuplicateDetectionEnabled.HasValue && existingMetadata.IsDuplicateDetectionEnabled?.Value != isDuplicateDetectionEnabled.Value)
                {
                    var oldVal = existingMetadata.IsDuplicateDetectionEnabled?.Value == true ? "true" : "false";
                    existingMetadata.IsDuplicateDetectionEnabled = new BooleanManagedProperty(isDuplicateDetectionEnabled.Value);
                    changes.Add($"IsDuplicateDetectionEnabled: {oldVal} -> {isDuplicateDetectionEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["duplicateDetection"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isDuplicateDetectionEnabled.Value.ToString().ToLowerInvariant() };
                }

                if (isAuditEnabled.HasValue && existingMetadata.IsAuditEnabled?.Value != isAuditEnabled.Value)
                {
                    var oldVal = existingMetadata.IsAuditEnabled?.Value == true ? "true" : "false";
                    existingMetadata.IsAuditEnabled = new BooleanManagedProperty(isAuditEnabled.Value);
                    changes.Add($"IsAuditEnabled: {oldVal} -> {isAuditEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isAuditEnabled.Value.ToString().ToLowerInvariant() };
                }

                // Note: EntityMetadata.IsValidForAdvancedFind is read-only at entity level — skipped

                // --- String property ---
                if (!string.IsNullOrWhiteSpace(entityColor))
                {
                    var oldVal = existingMetadata.EntityColor ?? "";
                    if (oldVal != entityColor.Trim())
                    {
                        existingMetadata.EntityColor = entityColor.Trim();
                        changes.Add($"EntityColor: \"{oldVal}\" -> \"{entityColor.Trim()}\"");
                        structuredChanges["entityColor"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = entityColor.Trim() };
                    }
                }

                // --- Warn for immutable properties passed with non-default values ---
                if (!string.IsNullOrWhiteSpace(ownershipType) &&
                    !ownershipType.Trim().Equals("User", StringComparison.OrdinalIgnoreCase))
                    warnings.Add("ownership_type cannot be changed after entity creation (ignored)");

                if (isActivity)
                    warnings.Add("is_activity cannot be changed after entity creation (ignored)");

                if (!hasNotes)
                    warnings.Add("has_notes cannot be changed after entity creation (ignored)");

                if (!string.IsNullOrWhiteSpace(primaryAttributeName) && primaryAttributeName != "Name")
                    warnings.Add("primary_attribute_name cannot be changed after entity creation (ignored)");

                if (primaryAttributeDisplayName != "Name")
                    warnings.Add("primary_attribute_display_name cannot be changed after entity creation (ignored)");

                if (primaryAttributeMaxLength != 100)
                    warnings.Add("primary_attribute_max_length cannot be changed after entity creation (ignored)");

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
                    sb2.AppendLine("Tip: Provide at least one updatable parameter (display_name, description, has_activities, entity_color, etc.)");
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
                    HasNotes = existingMetadata.HasNotes == true,
                    HasActivities = existingMetadata.HasActivities == true,
                    IsActivity = existingMetadata.IsActivity == true,
                    HasFeedback = existingMetadata.HasFeedback == true,
                    IsQuickCreateEnabled = existingMetadata.IsQuickCreateEnabled == true,
                    DuplicateDetection = existingMetadata.IsDuplicateDetectionEnabled?.Value == true,
                    ChangeTracking = existingMetadata.ChangeTrackingEnabled == true,
                    Description = existingMetadata.Description?.UserLocalizedLabel?.Label,
                    EntityColor = existingMetadata.EntityColor,
                    IsAuditEnabled = existingMetadata.IsAuditEnabled?.Value,
                    IsValidForAdvancedFind = existingMetadata.IsValidForAdvancedFind,
                    IsBusinessProcessEnabled = existingMetadata.IsBusinessProcessEnabled,
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
