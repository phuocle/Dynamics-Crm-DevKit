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
    public class ManageTableTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageTableTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_table", Title = "Create or update a Dataverse table",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageTableResult)),
        Description(
            "Create or update a Dataverse table. The tool auto-detects create vs update from the inputs:\n" +
            "- UPDATE (entity exists): pass logical_name that matches an existing table. Mutable: display_name, display_collection_name, description, is_audit_enabled, is_quick_create_enabled, is_search_enabled. Others immutable.\n" +
            "- CREATE (new table): need display_name + display_collection_name + solution_name. Auto-creates primary name attribute. Next: manage_column → manage_form(action='update', operations=[...]).\n\n" +

            "IMPORTANT: there is NO entity_name parameter. The table's technical names come ONLY from logical_name / schema_name (see below) or are auto-derived from display_name. Do NOT invent or pass an entity_name.\n\n" +

            "CREATE uses the publisher prefix from solution_name directly. confirmed_prefix is optional and only validates the resolved prefix when supplied.\n\n" +

            "CREATE name control (schema_name & logical_name are optional CREATE-only overrides; both ignored on UPDATE):\n" +
            "- schema_name: if provided, used AS-IS as the table SchemaName (skip auto-derive). Caller is responsible for casing. Must start with the publisher prefix (e.g. 'all_In_One').\n" +
            "- logical_name: if provided, used AS-IS as the lowercase logical name. Must start with the publisher prefix and be the lowercase form of schema_name (e.g. 'all_in_one').\n" +
            "- If both omitted: SchemaName is auto-derived from display_name via DataverseNamer (PascalCase, e.g. 'ALL IN ONE' -> SchemaName '<prefix>_ALLINONE', logical '<prefix>_allinone'). To KEEP word separators (e.g. 'all_in_one'), pass schema_name and/or logical_name explicitly.\n\n" +

            "is_activity=true forces User ownership + notes + Subject primary attr.\n\n" +

            "WHEN TO USE:\n" +
            "- Create a new custom entity (table) with primary name attribute\n" +
            "- Update mutable metadata (display names, description, audit, quick create)\n" +
            "- Enable or disable Dataverse Search indexing for an existing table (is_search_enabled)\n" +
            "- Inspect existing table first via get_tables before update\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- logical_name (UPDATE) resolves Display Name contains first, then logical/schema name contains. solution_name uses the shared Display Name first solution resolver. Ambiguity returns IsError=true.")]
        public CallToolResult manage_table(
            [Description("Singular display name (e.g. 'Project'). Required for CREATE.")] string display_name = "",
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
            [Description("1–850. [create-only]")] int primary_attribute_max_length = 100,
            [Description("SchemaName for the new table (e.g. 'all_InOne' or 'all_In_One'). If provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Logical name for the new table (e.g. 'all_inone' or 'all_in_one'). If provided, used AS-IS as the lowercase logical name. Create only — ignored on update. Must start with the publisher prefix and be the lowercase form of schema_name.")] string logical_name = "")
        {
            logical_name = logical_name?.Trim() ?? "";
            schema_name = schema_name?.Trim() ?? "";
            display_name = display_name?.Trim() ?? "";
            display_collection_name = display_collection_name?.Trim() ?? "";
            solution_name = solution_name?.Trim() ?? "";

            // ===== Resolve publisher prefix from solution (needed by both CREATE and preflight checks) =====
            string resolvedPrefix = null;
            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solution_name))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solution_name);
                if (!solResult.IsSuccess)
                    return ErrorResult(
                        $"[Error] {solResult.Error}\n" +
                        $"Tip: Use get_solution_components to find valid solution names.");
                resolvedPrefix = solResult.Prefix;
                resolvedSolutionUniqueName = solResult.UniqueName;
            }

            // ===== UPDATE MODE is the only path that identifies an existing entity, and it uses logical_name. =====
            // - logical_name provided → attempt to resolve the existing entity and go UPDATE.
            // - logical_name omitted AND no display_name (create fields) → pure update intent but no identifier → error.
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                EntityMetadata existingEntity = null;
                // Try resolving by Display Name first (legacy convenience), then by exact logical name.
                var entityResolve = DisplayNameFirstResolver.ResolveEntity(_serviceClient, logical_name, "manage_table");
                if (entityResolve.IsSuccess)
                {
                    existingEntity = entityResolve.Value;
                }
                else if (entityResolve.Status != ResolveStatus.NotFound)
                {
                    return ErrorResult($"Error: {entityResolve.Error}");
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

                // logical_name provided but entity does NOT exist:
                // - If caller also supplied create fields (display_name + display_collection_name) → treat as CREATE intent
                //   with the explicit logical_name (caller knows the name they want).
                // - Otherwise → error (cannot update something that does not exist, and no create fields given).
                if (string.IsNullOrWhiteSpace(display_name) || string.IsNullOrWhiteSpace(display_collection_name))
                {
                    return ErrorResult(
                        $"[Error] No existing entity found for logical_name '{logical_name}'.\n" +
                        "To CREATE a new table, also provide display_name + display_collection_name + solution_name.\n" +
                        "To UPDATE an existing table, double-check the logical name (use get_tables to list entities).");
                }
                // Fall through to CREATE with explicit logical_name.
            }
            else if (string.IsNullOrWhiteSpace(display_name))
            {
                // No identifier and no create fields → cannot do anything.
                return ErrorResult(
                    "Error: logical_name is required to update an existing table, or display_name + display_collection_name + solution_name to create a new one.\n" +
                    "To UPDATE: pass logical_name (e.g. 'all_in_one'). To CREATE: pass display_name + display_collection_name + solution_name (and optionally schema_name/logical_name overrides).");
            }

            // ===================== CREATE MODE =====================
            // From here: create intent. Validate required create fields.
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult(
                    "Error: display_name is required when creating a new entity.\n" +
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(display_collection_name))
                return ErrorResult(
                    "Error: display_collection_name is required when creating a new entity.\n" +
                    "Required for create: display_name, display_collection_name, solution_name.");
            if (string.IsNullOrWhiteSpace(solution_name) && string.IsNullOrWhiteSpace(resolvedPrefix))
                return ErrorResult(
                    "Error: solution_name is required when creating a new entity (needed to resolve the publisher prefix).\n" +
                    "Required for create: display_name, display_collection_name, solution_name.\n" +
                    "Read docs://schema_tools_guide for prefix resolution and solution requirements.");

            var prefix = resolvedPrefix;
            if (!string.IsNullOrWhiteSpace(confirmed_prefix) &&
                !confirmed_prefix.Trim().Equals(prefix, StringComparison.OrdinalIgnoreCase))
            {
                return ErrorResult(
                    $"[Error] confirmed_prefix '{confirmed_prefix.Trim()}' does not match solution '{resolvedSolutionUniqueName ?? solution_name}' publisher prefix '{prefix}'.\n" +
                    "Use the solution publisher prefix or omit confirmed_prefix.");
            }

            var prefixWithUnderscore = prefix + "_";

            // Determine SchemaName and LogicalName for the new table.
            // Priority: explicit schema_name / logical_name params (CREATE-only override) > DataverseNamer auto-derive from display_name.
            // - DataverseNamer derives PascalCase schema from display_name (e.g. 'ALL IN ONE' -> 'all_ALLINONE' -> logical 'all_allinone').
            // - DataverseNamer strips underscores between words, so to keep word separators (e.g. 'all_in_one'),
            //   the caller MUST pass schema_name and/or logical_name explicitly.
            string schemaName;
            if (!string.IsNullOrWhiteSpace(schema_name))
            {
                schemaName = schema_name;
                if (!schemaName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return ErrorResult(
                        $"[Error] schema_name '{schemaName}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').\n" +
                        "Tip: Prepend the publisher prefix, e.g. 'all_In_One' instead of 'In_One'.");
            }
            else
            {
                try
                {
                    (schemaName, _) = DataverseNamer.Resolve(display_name, prefix);
                }
                catch
                {
                    // Fallback: use display_name without spaces, TitleCased.
                    schemaName = prefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(display_name.Replace(" ", ""));
                }
            }

            // Resolve the entity logical name (used to create + look up the new entity afterwards):
            // - If logical_name provided, use it AS-IS as the lowercase logical name (after prefix validation).
            // - Otherwise derive from schemaName.ToLowerInvariant() to stay in sync with Dataverse.
            string entityName;
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                entityName = logical_name.ToLowerInvariant();
                if (!entityName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return ErrorResult(
                        $"[Error] logical_name '{logical_name}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').\n" +
                        "Tip: Prepend the publisher prefix, e.g. 'all_in_one' instead of 'in_one'.");
            }
            else
            {
                entityName = schemaName.ToLowerInvariant();
            }

            // Anti-collision: if logical_name was NOT explicitly provided and the derived entity already exists,
            // refuse to silently overwrite — the caller must pass an explicit logical_name to target it for update,
            // or pick a different display_name.
            try
            {
                var retrieveRequest = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                };
                var retrieveResponse = (RetrieveEntityResponse)_serviceClient.Execute(retrieveRequest);
                // Entity exists → cannot create with a derived (non-explicit) name.
                return ErrorResult(
                    $"[Error] Cannot create table '{display_name}' because derived logical name '{entityName}' already exists.\n" +
                    "Re-call manage_table with an explicit logical_name to update the existing entity, or choose a different display_name.");
            }
            catch
            {
                // Entity does not exist → proceed with create. This is the expected path.
            }

            // Clamp primary_attribute_max_length
            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

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
                    LogicalName = entityName,
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
                    return DryRun($"Would CREATE entity '{entityName}' (display: '{display_name}').", new ManageTableResult
                    {
                        DisplayName = display_name.Trim(),
                        DisplayCollectionName = display_collection_name.Trim(),
                        SchemaName = schemaName,
                        LogicalName = entityName,
                        OwnershipType = ownership_type,
                        TableType = table_type,
                        PrimaryAttributeName = primary_attribute_name,
                        PrimaryAttributeDisplayName = primary_attribute_display_name,
                        PrimaryAttributeMaxLength = primary_attribute_max_length,
                        SolutionName = resolvedSolutionUniqueName ?? solution_name.Trim(),
                        CreateMode = "metadata",
                        IsAddToSolution = true,
                        AddToSolutionMethod = "SolutionUniqueName",
                        Status = "not_executed",
                        Published = false,
                        IsAuditEnabled = is_audit_enabled,
                        IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                        IsSearchEnabled = is_search_enabled
                    });

                var response = (CreateEntityResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                var entityId = response.EntityId;

                // Retrieve the created entity to get EntitySetName and managed properties.
                var entitySetName = "";
                EntityMetadata createdMetadata = null;
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest
                    {
                        LogicalName = entityName,
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
                    var publishXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>";
                    PublishHelper.PublishEntity(_context, _serviceClient, entityName);
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
                sb.AppendLine($"[EntityCreated] {entityName}");
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

                var structured = new ManageTableResult
                {
                    DisplayName = display_name.Trim(),
                    DisplayCollectionName = display_collection_name.Trim(),
                    SchemaName = schemaName,
                    LogicalName = entityName,
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

                return ErrorResult($"Error: Failed to create entity '{entityName}'\nMessage: {msg}");
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

                        var unchanged = new ManageTableResult
                        {
                            DisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
                            DisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "",
                            SchemaName = existingMetadata.SchemaName,
                            LogicalName = existingMetadata.LogicalName,
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
                    return DryRun($"Would UPDATE entity '{entityName}' with changes: {changesSummary}", new ManageTableResult
                    {
                        DisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
                        DisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "",
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

                DataverseMutationExecutor.Execute(_context, _serviceClient, updateRequest);

                // --- Publish ---
                var published = false;
                try
                {
                    var publishXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>";
                    PublishHelper.PublishEntity(_context, _serviceClient, entityName);
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

                var structured = new ManageTableResult
                {
                    DisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
                    DisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "",
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

        private CallToolResult ErrorResult(string message) => Error(message);

    }
}
