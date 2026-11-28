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
    public class ManageTableTool : McpToolBase
    {
        private const int TableComponentType = 1;
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageTableTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageTableTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_table", Title = "Create or update a Dataverse table",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageTableResult)),
        Description(
            "Create or update a Dataverse table. Auto-detects create vs update from the inputs (no entity_name param).\n" +
            "- UPDATE (entity exists): logical_name + optional display_name, display_collection_name, description, is_audit_enabled, is_quick_create_enabled, is_search_enabled, icon_vector_name, solution_name.\n" +
            "- CREATE (new table): display_name + display_collection_name + solution_name (resolves publisher prefix). Auto-creates primary name attribute.\n" +
            "An exact logical_name match takes precedence. With all required CREATE fields, a new logical name never falls back to a partial match.\n" +
            "- Set table_type=Activity to create a custom activity with the required Subject column.\n" +
            "- is_duplicate_detection_enabled is optional on CREATE and UPDATE. Defaults to false on create. Null keeps the current setting on update.\n" +
            "Technical names come from logical_name / schema_name or are auto-derived from display_name.\n\n" +
            "For publisher prefixes, create/update requirements and immutable properties, read docs://schema_tools_guide before changing metadata.\n\n" +
            "WHEN TO USE:\n" +
            "- Create a new custom table, or update mutable metadata of an existing one\n" +
            "\n" +
            "RELATED TOOLS:\n" +
            "- inspect_metadata(resource='tables') → discover entities\n" +
            "- manage_schema(resource='column') → add columns\n" +
            "- manage_schema(resource='relationship') → 1:N / N:N\n" +
            "- manage_ui(resource='form') → forms\n" +
            "- manage_admin(resource='publish') → batch publish after multiple metadata changes")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("Singular display name (e.g. 'Project'). Required for CREATE.")] string display_name = "",
            [Description("Plural (e.g. 'Projects'). Required: create.")] string display_collection_name = "",
            [Description("Unmanaged solution unique or display name. Required on create. Optional on update to add the changed table to the solution.")] string solution_name = "",
            [Description("Optional table description.")] string description = "",
            [Description("Auto-derived if omitted. [create-only]")] string primary_attribute_name = "",
            [Description("Display label of the primary name column on create. Defaults to 'Name' on create.")] string primary_attribute_display_name = "",
            [Description("'User' or 'Organization'. Defaults to 'User' on create. [create-only, immutable]")] string ownership_type = "",
            [Description("'Standard', 'Elastic' (Cosmos DB, no charts), or 'Activity' (custom activity table). Defaults to 'Standard'. Create only.")] string table_type = "",
            [Description("Enable quick create for this table. null = keep current on update.")] bool? is_quick_create_enabled = null,
            [Description("null = keep current (update). Default true on create.")] bool? is_audit_enabled = null,
            [Description("Dataverse Search (SyncToExternalSearchIndex). Enable only on existing tables with Change Tracking already enabled. False disables Search. Null keeps the current value on update. New tables start with Search disabled.")] bool? is_search_enabled = null,
            [Description("1-850. [create-only]")] int primary_attribute_max_length = 100,
            [Description("SchemaName for the new table (e.g. 'all_InOne' or 'all_In_One'). If provided, used AS-IS as SchemaName (skip auto-derive). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Update: identifies the existing table by display or logical name. Create: optional logical name override (e.g. 'all_in_one'), normalized to lowercase; must start with the solution publisher prefix and match the lowercase schema name.")] string logical_name = "",
            [Description("SchemaName for the primary name column (e.g. 'ab_name'). If provided, used AS-IS as SchemaName (skip auto-TitleCase). Create only — ignored on update. Must start with the publisher prefix.")] string primary_attribute_schema_name = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default,
            [Description("Existing SVG web resource name (e.g. 'ab_/images/svg/ab_bank.svg'). Update only. Omit or leave empty to keep the current icon.")] string icon_vector_name = "",
            [Description("Enable or disable Duplicate Detection for this table. False by default on create. Null or omitted keeps the current value on update.")] bool? is_duplicate_detection_enabled = null,
            [Description("Enable Access Teams (AutoCreateAccessTeams). Omit or pass null to keep existing settings.")] bool? is_access_teams_enabled = null,
            [Description("Enable SharePoint document management. Omit or pass null to keep existing settings.")] bool? is_document_management_enabled = null,
            [Description("Enable OneNote integration. Requires SharePoint document management on the table. Omit or pass null to keep existing settings.")] bool? is_onenote_integration_enabled = null,
            [Description("Enable mail merge for the table. Omit or pass null to keep existing settings.")] bool? is_mail_merge_enabled = null,
            [Description("Enable a custom Help URL for the table. Omit or pass null to keep existing settings.")] bool? is_custom_help_enabled = null,
            [Description("Custom Help URL for the table. Null keeps the current value on update.")] string custom_help_url = null,
            [Description("Enable offline access in the mobile client. Enabling requires published Change Tracking. Omit or pass null to keep existing settings.")] bool? is_mobile_offline_enabled = null,
            [Description("Enable legacy offline availability. Custom activity tables require this setting. Omit or pass null to keep existing settings.")] bool? is_available_offline = null,
            [Description("Show this table in Dynamics 365 for phones. Omit or pass null to keep existing settings.")] bool? is_visible_in_mobile = null,
            [Description("Show this table in the Dynamics 365 mobile client. Omit or pass null to keep existing settings.")] bool? is_visible_in_mobile_client = null,
            [Description("Make this table read-only in the Dynamics 365 mobile client. Omit or pass null to keep existing settings.")] bool? is_read_only_in_mobile_client = null,
            [Description("Enable table eligibility for long-term retention. This setting does not run a retention policy. Omit or pass null to keep existing settings.")] bool? is_retention_enabled = null)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageTableTool(conn.OrgService, conn.Options, conn.Context);
                return System.Threading.Tasks.Task.FromResult(worker.manage_table(
                    display_name, display_collection_name, solution_name, description, primary_attribute_name,
                    primary_attribute_display_name, ownership_type, table_type, is_quick_create_enabled, is_audit_enabled,
                    is_search_enabled, primary_attribute_max_length, schema_name, logical_name, primary_attribute_schema_name, icon_vector_name,
                    is_duplicate_detection_enabled, is_access_teams_enabled, is_document_management_enabled, is_onenote_integration_enabled, is_mail_merge_enabled,
                    is_custom_help_enabled, custom_help_url, is_mobile_offline_enabled, is_available_offline,
                    is_visible_in_mobile, is_visible_in_mobile_client, is_read_only_in_mobile_client, is_retention_enabled));
            }, cancellationToken);
        }

        public CallToolResult manage_table(
            [Description("Singular display name (e.g. 'Project'). Required for CREATE.")] string display_name = "",
            [Description("Plural (e.g. 'Projects'). Required: create.")] string display_collection_name = "",
            [Description("Unmanaged solution unique or display name. Required on create. Optional on update to add the changed table to the solution.")] string solution_name = "",
            [Description("Optional table description.")] string description = "",
            [Description("Auto-derived if omitted. [create-only]")] string primary_attribute_name = "",
            [Description("Display label of the primary name column on create. Defaults to 'Name' on create.")] string primary_attribute_display_name = "",
            [Description("'User' or 'Organization'. Defaults to 'User' on create. [create-only, immutable]")] string ownership_type = "",
            [Description("'Standard', 'Elastic' (Cosmos DB, no charts), or 'Activity' (custom activity table). Defaults to 'Standard'. Create only.")] string table_type = "",
            [Description("Enable quick create for this table. null = keep current on update.")] bool? is_quick_create_enabled = null,
            [Description("null = keep current (update). Default true on create.")] bool? is_audit_enabled = null,
            [Description("Dataverse Search (SyncToExternalSearchIndex). Enable only on existing tables with Change Tracking already enabled. False disables Search. Null keeps the current value on update. New tables start with Search disabled.")] bool? is_search_enabled = null,
            [Description("1-850. [create-only]")] int primary_attribute_max_length = 100,
            [Description("SchemaName for the new table (e.g. 'all_InOne' or 'all_In_One'). If provided, used AS-IS as SchemaName (skip auto-derive). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Update: identifies the existing table by display or logical name. Create: optional logical name override (e.g. 'all_in_one'), normalized to lowercase; must start with the solution publisher prefix and match the lowercase schema name.")] string logical_name = "",
            [Description("SchemaName for the primary name column (e.g. 'ab_name'). If provided, used AS-IS as SchemaName (skip auto-TitleCase). Create only — ignored on update. Must start with the publisher prefix.")] string primary_attribute_schema_name = "",
            [Description("Existing SVG web resource name (e.g. 'ab_/images/svg/ab_bank.svg'). Update only. Omit or leave empty to keep the current icon.")] string icon_vector_name = "",
            [Description("Enable or disable Duplicate Detection for this table. False by default on create. Null or omitted keeps the current value on update.")] bool? is_duplicate_detection_enabled = null,
            [Description("Enable Access Teams (AutoCreateAccessTeams). Omit or pass null to keep existing settings.")] bool? is_access_teams_enabled = null,
            [Description("Enable SharePoint document management. Omit or pass null to keep existing settings.")] bool? is_document_management_enabled = null,
            [Description("Enable OneNote integration. Requires SharePoint document management on the table. Omit or pass null to keep existing settings.")] bool? is_onenote_integration_enabled = null,
            [Description("Enable mail merge for the table. Omit or pass null to keep existing settings.")] bool? is_mail_merge_enabled = null,
            [Description("Enable a custom Help URL for the table. Omit or pass null to keep existing settings.")] bool? is_custom_help_enabled = null,
            [Description("Custom Help URL for the table. Null keeps the current value on update.")] string custom_help_url = null,
            [Description("Enable offline access in the mobile client. Enabling requires published Change Tracking. Omit or pass null to keep existing settings.")] bool? is_mobile_offline_enabled = null,
            [Description("Enable legacy offline availability. Custom activity tables require this setting. Omit or pass null to keep existing settings.")] bool? is_available_offline = null,
            [Description("Show this table in Dynamics 365 for phones. Omit or pass null to keep existing settings.")] bool? is_visible_in_mobile = null,
            [Description("Show this table in the Dynamics 365 mobile client. Omit or pass null to keep existing settings.")] bool? is_visible_in_mobile_client = null,
            [Description("Make this table read-only in the Dynamics 365 mobile client. Omit or pass null to keep existing settings.")] bool? is_read_only_in_mobile_client = null,
            [Description("Enable table eligibility for long-term retention. This setting does not run a retention policy. Omit or pass null to keep existing settings.")] bool? is_retention_enabled = null)
        {
            try
            {
                logical_name = logical_name?.Trim() ?? "";
                schema_name = schema_name?.Trim() ?? "";
                display_name = display_name?.Trim() ?? "";
                display_collection_name = display_collection_name?.Trim() ?? "";
                solution_name = solution_name?.Trim() ?? "";
                icon_vector_name = icon_vector_name?.Trim() ?? "";
                description = description?.Trim() ?? "";
                primary_attribute_name = primary_attribute_name?.Trim() ?? "";
                primary_attribute_schema_name = primary_attribute_schema_name?.Trim() ?? "";
                primary_attribute_display_name = primary_attribute_display_name?.Trim() ?? "";
                ownership_type = ownership_type?.Trim() ?? "";
                table_type = table_type?.Trim() ?? "";

                var tableOptions = new EntityMetadata
                {
                    AutoCreateAccessTeams = is_access_teams_enabled,
                    IsDocumentManagementEnabled = is_document_management_enabled,
                    IsOneNoteIntegrationEnabled = is_onenote_integration_enabled,
                    IsMailMergeEnabled = ToManagedProperty(is_mail_merge_enabled),
                    EntityHelpUrlEnabled = is_custom_help_enabled,
                    EntityHelpUrl = custom_help_url?.Trim(),
                    IsOfflineInMobileClient = ToManagedProperty(is_mobile_offline_enabled),
                    IsAvailableOffline = is_available_offline,
                    IsVisibleInMobile = ToManagedProperty(is_visible_in_mobile),
                    IsVisibleInMobileClient = ToManagedProperty(is_visible_in_mobile_client),
                    IsReadOnlyInMobileClient = ToManagedProperty(is_read_only_in_mobile_client),
                    IsRetentionEnabled = is_retention_enabled
                };

                string resolvedPrefix = null;
                string resolvedSolutionUniqueName = null;
                if (!string.IsNullOrWhiteSpace(solution_name))
                {
                    var solResult = SolutionResolverHelper.Resolve(_orgService, solution_name, requireUnmanaged: true);
                    if (!solResult.IsSuccess)
                        return Error(solResult.Error.Split("\r\n")[0], "Use inspect_metadata(resource='solution_components') to find valid solution names.");
                    resolvedPrefix = solResult.Prefix;
                    resolvedSolutionUniqueName = solResult.UniqueName;
                }

                if (!string.IsNullOrWhiteSpace(logical_name))
                {
                    var hasCreateParameters = display_name.Length > 0 && display_collection_name.Length > 0 && solution_name.Length > 0;
                    EntityMetadata existingEntity = null;
                    var entityResolve = DisplayNameFirstResolver.ResolveEntity(_orgService, logical_name, "manage_schema(resource='table')",
                        matchMode: hasCreateParameters ? EntityNameMatchMode.ExactLogicalNameOnly : EntityNameMatchMode.ExactLogicalNameFirst);
                    if (entityResolve.IsSuccess)
                    {
                        existingEntity = entityResolve.Value;
                    }
                    else if (entityResolve.Status != ResolveStatus.NotFound)
                    {
                        return Error(entityResolve.Error.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to list entities.");
                    }

                    if (existingEntity != null)
                    {
                        return UpdateExistingEntity(existingEntity.LogicalName, existingEntity,
                            display_name, display_collection_name, description,
                            is_quick_create_enabled, is_audit_enabled, is_search_enabled, is_duplicate_detection_enabled,
                            ownership_type, table_type,
                            primary_attribute_name, primary_attribute_display_name,
                            resolvedSolutionUniqueName, icon_vector_name, tableOptions);
                    }

                    if (string.IsNullOrWhiteSpace(display_name) || string.IsNullOrWhiteSpace(display_collection_name))
                    {
                        return Error(
                            $"No existing entity found for logical_name '{logical_name}'. To CREATE a new table, also provide display_name + display_collection_name + solution_name. To UPDATE an existing table, double-check the logical name.",
                            "Use inspect_metadata(resource='tables') to list entities.");
                    }
                }
                else if (string.IsNullOrWhiteSpace(display_name))
                {
                    return Error(
                        "logical_name is required to update an existing table, or display_name + display_collection_name + solution_name to create a new one.",
                        "To UPDATE: pass logical_name (e.g. 'all_in_one'). To CREATE: pass display_name + display_collection_name + solution_name (and optionally schema_name/logical_name overrides).");
                }

                if (icon_vector_name.Length > 0)
                    return Error("icon_vector_name can only be set on an existing table.",
                        "Use inspect_metadata(resource='tables') to find the table's logical_name, then call manage_schema(resource='table') to update it.");

                return CreateNewEntity(
                    display_name, display_collection_name, description,
                    is_quick_create_enabled, is_audit_enabled, is_search_enabled, is_duplicate_detection_enabled,
                    ownership_type, table_type,
                    primary_attribute_name, primary_attribute_display_name,
                    primary_attribute_max_length,
                    schema_name, logical_name,
                    resolvedPrefix, resolvedSolutionUniqueName, solution_name,
                    primary_attribute_schema_name, tableOptions);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult CreateNewEntity(
            string display_name, string display_collection_name, string description,
            bool? is_quick_create_enabled, bool? is_audit_enabled, bool? is_search_enabled, bool? is_duplicate_detection_enabled,
            string ownership_type, string table_type,
            string primary_attribute_name, string primary_attribute_display_name,
            int primary_attribute_max_length,
            string schema_name, string logical_name,
            string resolvedPrefix, string resolvedSolutionUniqueName, string solution_name,
            string primary_attribute_schema_name, EntityMetadata tableOptions)
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
            if (is_search_enabled == true)
                return Error("Enabling Dataverse Search requires an existing table with Change Tracking already enabled.",
                    "Omit is_search_enabled or pass false to create the table with Search disabled.");

            var isActivity = table_type.Equals("Activity", StringComparison.OrdinalIgnoreCase);
            var isElastic = table_type.Equals("Elastic", StringComparison.OrdinalIgnoreCase);
            if (!isActivity && !isElastic && table_type.Length > 0 && !table_type.Equals("Standard", StringComparison.OrdinalIgnoreCase))
                return Error($"Invalid table_type '{table_type}'.", "Valid values: 'Standard', 'Elastic', or 'Activity'.");
            var tableKind = isActivity ? "Activity" : isElastic ? "Elastic" : "Standard";

            var settingsError = ValidateTableOptions(tableOptions, isActivity);
            if (settingsError != null)
                return settingsError;
            if (tableOptions.IsOfflineInMobileClient?.Value == true || (!isActivity && tableOptions.IsAvailableOffline == true))
                return Error("Enabling offline access requires an existing table with Change Tracking already enabled.",
                    "Omit the offline settings or pass false on create.");

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
                var collisionResolve = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName, "manage_schema(resource='table')",
                    matchMode: EntityNameMatchMode.ExactLogicalNameOnly);
                if (collisionResolve.IsSuccess)
                    return Error(
                        $"Cannot create table '{display_name}' because derived logical name '{entityName}' already exists.",
                        "Re-call manage_schema(resource='table') with an explicit logical_name to update the existing entity, or choose a different display_name.");
                if (collisionResolve.Status == ResolveStatus.Ambiguous || collisionResolve.Status == ResolveStatus.Error)
                    return Error(collisionResolve.Error.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to list entities.");
            }

            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 850) primary_attribute_max_length = 850;

            string primarySchemaName;
            if (isActivity)
            {
                if ((primary_attribute_name.Length > 0 && !primary_attribute_name.Equals("subject", StringComparison.OrdinalIgnoreCase)) ||
                    (primary_attribute_schema_name.Length > 0 && !primary_attribute_schema_name.Equals("Subject", StringComparison.OrdinalIgnoreCase)))
                    return Error("Custom activity tables require the Subject primary column.",
                        "Omit primary_attribute_name and primary_attribute_schema_name to use Subject.");
                primary_attribute_name = "subject";
                primarySchemaName = "Subject";
            }
            else
            {
                if (string.IsNullOrWhiteSpace(primary_attribute_name))
                    primary_attribute_name = !string.IsNullOrWhiteSpace(primary_attribute_schema_name)
                        ? primary_attribute_schema_name.ToLowerInvariant()
                        : prefix + "_name";
                else
                    primary_attribute_name = primary_attribute_name.ToLowerInvariant();

                if (!string.IsNullOrWhiteSpace(primary_attribute_schema_name))
                {
                    if (!primary_attribute_schema_name.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                        return Error(
                            $"primary_attribute_schema_name '{primary_attribute_schema_name}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').",
                            "Prepend the publisher prefix, e.g. 'ab_name'.");
                    primarySchemaName = primary_attribute_schema_name;
                }
                else
                {
                    var primaryUnderscoreIndex = primary_attribute_name.IndexOf('_');
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
                }
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

            if (isActivity && ownershipTypeValue != OwnershipTypes.UserOwned)
                return Error("Custom activity tables require User ownership.", "Omit ownership_type or pass 'User'.");

            if (string.IsNullOrWhiteSpace(primary_attribute_display_name))
                primary_attribute_display_name = isActivity ? "Subject" : "Name";

            var effectiveIsQuickCreateEnabled = is_quick_create_enabled ?? false;
            var entityMetadata = new EntityMetadata();
            var optionChanges = new Dictionary<string, UpdateAttributeChange>();
            ApplyTableOptions(tableOptions, null, entityMetadata, optionChanges);

            if (_options.DryRun)
                return DryRun(
                    $"Would CREATE table '{display_name}' ({entityName}), ownership '{ownershipTypeValue}', type '{tableKind}', primary attribute '{primary_attribute_name}'.",
                    new ManageTableResult
                    {
                        DisplayName = display_name,
                        DisplayCollectionName = display_collection_name,
                        SchemaName = schemaName,
                        LogicalName = entityName,
                        OwnershipType = ownershipTypeValue.ToString(),
                        TableType = tableKind == "Standard" ? null : tableKind,
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
                        IsSearchEnabled = is_search_enabled,
                        Changes = optionChanges.Count > 0 ? optionChanges : null
                    });

            entityMetadata.SchemaName = schemaName;
            entityMetadata.LogicalName = entityName;
            entityMetadata.DisplayName = new Label(display_name, McpHelper.GetBaseLanguageCode(_orgService));
            entityMetadata.DisplayCollectionName = new Label(display_collection_name, McpHelper.GetBaseLanguageCode(_orgService));
            entityMetadata.OwnershipType = ownershipTypeValue;
            entityMetadata.IsActivity = isActivity;
            entityMetadata.ChangeTrackingEnabled = false;
            entityMetadata.IsAuditEnabled = new BooleanManagedProperty(is_audit_enabled ?? true);
            entityMetadata.IsDuplicateDetectionEnabled = new BooleanManagedProperty(is_duplicate_detection_enabled ?? false);
            entityMetadata.IsQuickCreateEnabled = effectiveIsQuickCreateEnabled;
            entityMetadata.SyncToExternalSearchIndex = false;
            if (isActivity)
            {
                entityMetadata.IsAvailableOffline = true;
                entityMetadata.IsMailMergeEnabled = new BooleanManagedProperty(false);
            }

            if (!string.IsNullOrWhiteSpace(description))
                entityMetadata.Description = new Label(description, McpHelper.GetBaseLanguageCode(_orgService));

            if (isElastic)
            {
                entityMetadata.TableType = "Elastic";
                entityMetadata.CanCreateCharts = new BooleanManagedProperty(false);
            }

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
                PrimaryAttribute = primaryAttribute,
                HasActivities = false,
                HasNotes = isActivity
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, resolvedSolutionUniqueName ?? solution_name);

            var response = (CreateEntityResponse)DataverseMutationExecutor.Execute(_context, _orgService, request);
            var entityId = response.EntityId;

            var retrieveRequest = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var createdMetadata = ((RetrieveEntityResponse)_orgService.Execute(retrieveRequest)).EntityMetadata;

            MetadataOperationWaitHelper.WaitAfterTableCreation();

            var retrievePrimaryAttrReq = new RetrieveAttributeRequest
            {
                EntityLogicalName = entityName,
                LogicalName = primary_attribute_name,
                RetrieveAsIfPublished = true
            };
            var createdPrimaryAttr = ((RetrieveAttributeResponse)_orgService.Execute(retrievePrimaryAttrReq)).AttributeMetadata as StringAttributeMetadata;
            if (!isActivity && createdPrimaryAttr != null && createdPrimaryAttr.MaxLength != primary_attribute_max_length)
            {
                var fixPrimaryAttr = new StringAttributeMetadata
                {
                    MetadataId = createdPrimaryAttr.MetadataId,
                    LogicalName = createdPrimaryAttr.LogicalName,
                    SchemaName = createdPrimaryAttr.SchemaName,
                    MaxLength = primary_attribute_max_length
                };
                var updatePrimaryReq = new UpdateAttributeRequest
                {
                    EntityName = entityName,
                    Attribute = fixPrimaryAttr,
                    MergeLabels = true
                };
                DataverseMutationExecutor.Execute(_context, _orgService, updatePrimaryReq);
            }

            var published = PublishHelper.PublishEntity(_context, _orgService, entityName);

            var structured = new ManageTableResult
            {
                DisplayName = display_name,
                DisplayCollectionName = display_collection_name,
                SchemaName = schemaName,
                LogicalName = entityName,
                OwnershipType = ownershipTypeValue.ToString(),
                TableType = tableKind == "Standard" ? null : tableKind,
                PrimaryAttributeName = primary_attribute_name,
                PrimaryAttributeDisplayName = primary_attribute_display_name,
                PrimaryAttributeMaxLength = isActivity ? createdPrimaryAttr?.MaxLength ?? primary_attribute_max_length : primary_attribute_max_length,
                MetadataId = entityId.ToString(),
                EntitySetName = createdMetadata?.EntitySetName,
                SolutionName = resolvedSolutionUniqueName ?? solution_name,
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = true,
                AddToSolutionMethod = "SolutionUniqueName",
                Published = published,
                IsAuditEnabled = is_audit_enabled,
                IsQuickCreateEnabled = effectiveIsQuickCreateEnabled,
                IsSearchEnabled = false,
                SyncToExternalSearchIndex = createdMetadata?.SyncToExternalSearchIndex ?? false,
                CanEnableSyncToExternalSearchIndex = createdMetadata?.CanEnableSyncToExternalSearchIndex?.Value,
                CanEnableSyncToExternalSearchIndexCanBeChanged = createdMetadata?.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                Description = string.IsNullOrWhiteSpace(description) ? null : description,
                Changes = optionChanges.Count > 0 ? optionChanges : null,
                Status = "created"
            };

            return Success($"Created table '{display_name}' ({entityName}), metadata id {entityId}, published.", structured);
        }

        private CallToolResult UpdateExistingEntity(
            string entityName, EntityMetadata existingMetadata,
            string displayName, string displayCollectionName, string description,
            bool? isQuickCreateEnabled, bool? isAuditEnabled, bool? isSearchEnabled, bool? isDuplicateDetectionEnabled,
            string ownershipType, string tableType,
            string primaryAttributeName, string primaryAttributeDisplayName,
            string solutionUniqueName, string iconVectorName, EntityMetadata tableOptions)
        {
            var isActivity = existingMetadata.IsActivity == true;
            var settingsError = ValidateTableOptions(tableOptions, isActivity, existingMetadata);
            if (settingsError != null)
                return settingsError;

            var enablingOffline = tableOptions.IsOfflineInMobileClient?.Value == true ||
                (tableOptions.IsAvailableOffline == true && existingMetadata.IsAvailableOffline != true);
            if (isSearchEnabled == true || enablingOffline)
            {
                var publishedMetadata = ((RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = false
                })).EntityMetadata;
                if (publishedMetadata?.ChangeTrackingEnabled != true)
                {
                    if (isSearchEnabled == true)
                        return Error($"Enabling Dataverse Search on table '{entityName}' requires Change Tracking to be already enabled in published metadata.",
                            "Omit is_search_enabled to update other properties, or pass false to disable Search.");
                    return Error($"Enabling offline access on table '{entityName}' requires Change Tracking to be already enabled in published metadata.",
                        "Omit the offline settings or pass false to disable offline access where supported.");
                }
            }

            var changes = new List<string>();
            var structuredChanges = new Dictionary<string, UpdateAttributeChange>();
            var warnings = new List<string>();
            var updatedMetadata = new EntityMetadata { LogicalName = entityName, MetadataId = existingMetadata.MetadataId };
            ApplyTableOptions(tableOptions, existingMetadata, updatedMetadata, structuredChanges, changes);

            var effectiveDisplayName = existingMetadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
            var effectiveDisplayCollectionName = existingMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
            var effectiveDescription = existingMetadata.Description?.UserLocalizedLabel?.Label ?? "";

            if (!string.IsNullOrWhiteSpace(displayName))
            {
                var oldVal = effectiveDisplayName;
                if (oldVal != displayName)
                {
                    updatedMetadata.DisplayName = new Label(displayName, McpHelper.GetBaseLanguageCode(_orgService));
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
                    updatedMetadata.DisplayCollectionName = new Label(displayCollectionName, McpHelper.GetBaseLanguageCode(_orgService));
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
                    updatedMetadata.Description = new Label(description, McpHelper.GetBaseLanguageCode(_orgService));
                    effectiveDescription = description;
                    changes.Add($"Description: \"{oldVal}\" -> \"{description}\"");
                    structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description };
                }
            }

            var currentIconVectorName = existingMetadata.IconVectorName ?? "";
            var iconChanged = iconVectorName.Length > 0 && currentIconVectorName != iconVectorName;
            if (iconChanged)
            {
                changes.Add($"IconVectorName: \"{currentIconVectorName}\" -> \"{iconVectorName}\"");
                structuredChanges["iconVectorName"] = new UpdateAttributeChange { OldValue = currentIconVectorName, NewValue = iconVectorName };
            }

            if (isQuickCreateEnabled.HasValue && existingMetadata.IsQuickCreateEnabled != isQuickCreateEnabled.Value)
            {
                var oldVal = existingMetadata.IsQuickCreateEnabled == true ? "true" : "false";
                updatedMetadata.IsQuickCreateEnabled = isQuickCreateEnabled.Value;
                changes.Add($"IsQuickCreateEnabled: {oldVal} -> {isQuickCreateEnabled.Value.ToString().ToLowerInvariant()}");
                structuredChanges["isQuickCreateEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isQuickCreateEnabled.Value.ToString().ToLowerInvariant() };
            }

            if (isAuditEnabled.HasValue && existingMetadata.IsAuditEnabled?.Value != isAuditEnabled.Value)
            {
                var oldVal = existingMetadata.IsAuditEnabled?.Value == true ? "true" : "false";
                updatedMetadata.IsAuditEnabled = new BooleanManagedProperty(isAuditEnabled.Value);
                changes.Add($"IsAuditEnabled: {oldVal} -> {isAuditEnabled.Value.ToString().ToLowerInvariant()}");
                structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isAuditEnabled.Value.ToString().ToLowerInvariant() };
            }

            var currentDuplicateDetection = existingMetadata.IsDuplicateDetectionEnabled?.Value;
            if (isDuplicateDetectionEnabled.HasValue && currentDuplicateDetection != isDuplicateDetectionEnabled.Value)
            {
                var oldValue = currentDuplicateDetection?.ToString().ToLowerInvariant();
                var newValue = isDuplicateDetectionEnabled.Value.ToString().ToLowerInvariant();
                updatedMetadata.IsDuplicateDetectionEnabled = new BooleanManagedProperty(isDuplicateDetectionEnabled.Value);
                changes.Add($"IsDuplicateDetectionEnabled: {oldValue ?? "unknown"} -> {newValue}");
                structuredChanges["isDuplicateDetectionEnabled"] = new UpdateAttributeChange { OldValue = oldValue, NewValue = newValue };
            }

            var currentSync = existingMetadata.SyncToExternalSearchIndex ?? false;
            if (isSearchEnabled is bool requestedSearch && currentSync != requestedSearch)
            {
                if (requestedSearch && existingMetadata.CanEnableSyncToExternalSearchIndex?.Value != true)
                {
                    warnings.Add(
                        $"SyncToExternalSearchIndex cannot be changed on entity '{entityName}' " +
                        "(CanEnableSyncToExternalSearchIndex is false). Skipping is_search_enabled.");
                }
                else
                {
                    var oldValue = currentSync.ToString().ToLowerInvariant();
                    var newValue = requestedSearch.ToString().ToLowerInvariant();
                    updatedMetadata.SyncToExternalSearchIndex = requestedSearch;
                    changes.Add($"SyncToExternalSearchIndex: {oldValue} -> {newValue}");
                    structuredChanges["syncToExternalSearchIndex"] = new UpdateAttributeChange { OldValue = oldValue, NewValue = newValue };
                }
            }

            if (!string.IsNullOrWhiteSpace(ownershipType) &&
                !ownershipType.Equals(existingMetadata.OwnershipType?.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add($"ownership_type is immutable after create and was ignored (current: {existingMetadata.OwnershipType}).");
            }
            var existingTableType = isActivity ? "Activity" : existingMetadata.TableType ?? "Standard";
            if (!string.IsNullOrWhiteSpace(tableType) &&
                !tableType.Equals(existingTableType, StringComparison.OrdinalIgnoreCase))
            {
                warnings.Add($"table_type is immutable after create and was ignored (current: {existingTableType}).");
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
                        SolutionName = solutionUniqueName,
                        Status = "not_executed",
                        Published = false
                    });

            if (iconChanged)
                updatedMetadata.IconVectorName = iconVectorName;

            var updateRequest = new UpdateEntityRequest
            {
                Entity = updatedMetadata
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(updateRequest, solutionUniqueName);
            DataverseMutationExecutor.Execute(_context, _orgService, updateRequest);

            var association = string.IsNullOrWhiteSpace(solutionUniqueName) ? null
                : SolutionComponentCreateHelper.AddExistingComponent(_context, _orgService,
                    existingMetadata.MetadataId.GetValueOrDefault(), TableComponentType, solutionUniqueName, doNotIncludeSubcomponents: true);
            if (association?.AddToSolutionWarning != null)
                warnings.Add($"Could not add the table to solution '{association.SolutionUniqueName}'. {association.AddToSolutionWarning}");

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
                SolutionName = association?.SolutionUniqueName,
                IsAddToSolution = association?.IsAddToSolution,
                AddToSolutionMethod = association?.AddToSolutionMethod,
                AddToSolutionWarning = association?.AddToSolutionWarning,
                Published = published,
                IsAuditEnabled = (updatedMetadata.IsAuditEnabled ?? existingMetadata.IsAuditEnabled)?.Value,
                IsQuickCreateEnabled = (updatedMetadata.IsQuickCreateEnabled ?? existingMetadata.IsQuickCreateEnabled) == true,
                IsSearchEnabled = (updatedMetadata.SyncToExternalSearchIndex ?? existingMetadata.SyncToExternalSearchIndex) == true,
                SyncToExternalSearchIndex = updatedMetadata.SyncToExternalSearchIndex ?? existingMetadata.SyncToExternalSearchIndex,
                CanEnableSyncToExternalSearchIndex = existingMetadata.CanEnableSyncToExternalSearchIndex?.Value,
                CanEnableSyncToExternalSearchIndexCanBeChanged = existingMetadata.CanEnableSyncToExternalSearchIndex?.CanBeChanged,
                Description = string.IsNullOrWhiteSpace(effectiveDescription) ? null : effectiveDescription,
                Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                Warnings = warnings.Count > 0 ? warnings : null,
                Status = "updated"
            };

            return Success(summary, structured);
        }

        private static BooleanManagedProperty ToManagedProperty(bool? value) =>
            value.HasValue ? new BooleanManagedProperty(value.Value) : null;

        private CallToolResult ValidateTableOptions(EntityMetadata options, bool isActivity, EntityMetadata existing = null)
        {
            if (isActivity && options.IsMailMergeEnabled?.Value == true)
                return Error("Custom activity tables cannot enable mail merge.");
            if (isActivity && options.IsAvailableOffline == false)
                return Error("Custom activity tables require offline availability.");

            var oneNoteEnabled = options.IsOneNoteIntegrationEnabled ?? existing?.IsOneNoteIntegrationEnabled;
            var documentManagementEnabled = options.IsDocumentManagementEnabled ?? existing?.IsDocumentManagementEnabled;
            if ((options.IsOneNoteIntegrationEnabled == true || options.IsDocumentManagementEnabled == false) &&
                oneNoteEnabled == true && documentManagementEnabled != true)
                return Error("OneNote integration requires SharePoint document management on the table.",
                    "Enable document management with OneNote, or turn off OneNote before disabling document management.");

            return null;
        }

        private static void ApplyTableOptions(EntityMetadata options, EntityMetadata existing, EntityMetadata target,
            Dictionary<string, UpdateAttributeChange> structuredChanges, List<string> changes = null)
        {
            void RecordChange(string name, string oldValue, string newValue)
            {
                structuredChanges[name] = new UpdateAttributeChange { OldValue = oldValue, NewValue = newValue };
                changes?.Add($"{name}: {oldValue ?? "unknown"} -> {newValue}");
            }

            void ApplyBoolean(string name, bool? previous, bool? requested, Action<bool> write)
            {
                if (requested is not bool value || previous == value)
                    return;

                write(value);
                RecordChange(name, previous?.ToString().ToLowerInvariant(), value.ToString().ToLowerInvariant());
            }

            ApplyBoolean("isAccessTeamsEnabled", existing?.AutoCreateAccessTeams, options.AutoCreateAccessTeams, value => target.AutoCreateAccessTeams = value);
            ApplyBoolean("isDocumentManagementEnabled", existing?.IsDocumentManagementEnabled, options.IsDocumentManagementEnabled, value => target.IsDocumentManagementEnabled = value);
            ApplyBoolean("isOneNoteIntegrationEnabled", existing?.IsOneNoteIntegrationEnabled, options.IsOneNoteIntegrationEnabled, value => target.IsOneNoteIntegrationEnabled = value);
            ApplyBoolean("isMailMergeEnabled", existing?.IsMailMergeEnabled?.Value, options.IsMailMergeEnabled?.Value, value => target.IsMailMergeEnabled = new BooleanManagedProperty(value));
            ApplyBoolean("isCustomHelpEnabled", existing?.EntityHelpUrlEnabled, options.EntityHelpUrlEnabled, value => target.EntityHelpUrlEnabled = value);
            ApplyBoolean("isMobileOfflineEnabled", existing?.IsOfflineInMobileClient?.Value, options.IsOfflineInMobileClient?.Value, value => target.IsOfflineInMobileClient = new BooleanManagedProperty(value));
            ApplyBoolean("isAvailableOffline", existing?.IsAvailableOffline, options.IsAvailableOffline, value => target.IsAvailableOffline = value);
            ApplyBoolean("isVisibleInMobile", existing?.IsVisibleInMobile?.Value, options.IsVisibleInMobile?.Value, value => target.IsVisibleInMobile = new BooleanManagedProperty(value));
            ApplyBoolean("isVisibleInMobileClient", existing?.IsVisibleInMobileClient?.Value, options.IsVisibleInMobileClient?.Value, value => target.IsVisibleInMobileClient = new BooleanManagedProperty(value));
            ApplyBoolean("isReadOnlyInMobileClient", existing?.IsReadOnlyInMobileClient?.Value, options.IsReadOnlyInMobileClient?.Value, value => target.IsReadOnlyInMobileClient = new BooleanManagedProperty(value));
            ApplyBoolean("isRetentionEnabled", existing?.IsRetentionEnabled, options.IsRetentionEnabled, value => target.IsRetentionEnabled = value);

            if (options.EntityHelpUrl != null && options.EntityHelpUrl != existing?.EntityHelpUrl)
            {
                target.EntityHelpUrl = options.EntityHelpUrl;
                RecordChange("customHelpUrl", existing?.EntityHelpUrl, options.EntityHelpUrl);
            }
        }
    }
}
