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
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertColumnTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public UpsertColumnTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "upsert_column", Title = "Create or update a table column",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertColumnResult)),
        Description(
            "Dataverse column (attribute) — auto-detect create vs update. Types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file.\n\n" +

            "UPDATE (column exists): pass logical_name that matches an existing attribute. attribute_type ignored (immutable). picklist: use add/update/delete_options; use default_value to change the DefaultFormValue (single integer, e.g. 100000001) — omit to keep current; not supported on multipicklist. boolean: use default_value ('true'/'false' or '1'/'0') to flip the DefaultValue — omit to keep current. Omit params to keep current. Formula clone parameters are CREATE-only; if any are passed for an existing column, the tool returns an error and does not update the formula.\n\n" +

            "CREATE (no attribute): need attribute_type + display_name.\n" +
            "- schema_name: if provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Must start with the publisher prefix (e.g. 'devkit_InvoiceLineId'). Create only — ignored on update.\n" +
            "- logical_name: if provided, used AS-IS as the lowercase logical name. Must start with the publisher prefix and be the lowercase form of schema_name (e.g. 'devkit_invoicelineid'). Create only — ignored on update.\n" +
            "- If both omitted: SchemaName is auto-derived from display_name via DataverseNamer, logical name derives from schemaName.ToLowerInvariant().\n" +
            "- lookup: needs lookup_target (auto-creates 1:N)\n" +
            "- customer: polymorphic (account+contact), no lookup_target\n" +
            "- picklist/multipicklist: options JSON or global_optionset_name\n" +
            "- formula clone (PowerFx/Calculated/Rollup): pass only get_tables' `formulaDefinition` reference into formula_definition. Format: `source_table_logical_name:source_column_logical_name`. Pass it unchanged; never provide formula content directly.\n" +
            "- The server retrieves the raw source formula and kind directly from Dataverse, then rewrites entity/column/relationship references for the target. Supported underlying types: string/memo/integer/decimal/money/float/boolean/datetime.\n" +
            "- To intentionally create an empty formula column, omit formula_definition and pass formula_source_type as powerfx, calculated, or rollup.\n" +
            "- 5 create flags (so a column can be cloned in a SINGLE create call, no follow-up update): required_level (None/Recommended/Required — default None), is_audit_enabled (default true), is_valid_for_advanced_find (default true), is_secured (default false), is_sortable (default true when supported). On UPDATE, omit=null to keep current.\n\n" +

            "CREATE uses the publisher prefix from solution_name directly. confirmed_prefix is optional and only validates the resolved prefix. Either solution_name or an explicit prefixed schema_name/logical_name must be supplied so the publisher prefix is known.\n\n" +

            "WHEN TO USE:\n" +
            "- Create a new attribute on an existing table (need attribute_type + display_name)\n" +
            "- Clone a PowerFx, Calculated, or Rollup column read by get_tables (CREATE only)\n" +
            "- Update mutable metadata, format, required_level, and picklist options\n" +
            "- Add/rename/remove options on an existing picklist via add_options/update_options/delete_options\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- entity_name resolves Display Name contains first, then logical/schema name contains. Ambiguity returns IsError=true with candidates.\n" +
            "- logical_name (UPDATE) follows the same Display Name first rule. lookup_target, global_optionset_name, and solution_name use their shared resolvers.\n\n" +
            "STATUSCODE (statuscode / StatusType): pass logical_name='statuscode' and use add_options/update_options/delete_options.\n" +
            "add_options: JSON array with optional 'state' field (linked statecode value, default 0): [{\"label\":\"Under Review\",\"value\":100000001,\"state\":0}].\n" +
            "update_options: rename by value (no 'state' needed). delete_options: JSON array of integer values. statecode column is read-only.")]
        public CallToolResult upsert_column(
            [Description("Logical name (e.g. 'account').")] string entity_name,
            [Description("Logical name of the existing attribute to update (e.g. 'new_priority'). For CREATE: optional lowercase override of logical name; if omitted derives from schema_name/display_name. Must start with publisher prefix.")] string logical_name,
            [Description("string/memo/integer/bigint/decimal/money/float/boolean/datetime/lookup/customer/picklist/multipicklist/image/file. Required for CREATE. Ignored on UPDATE (immutable).")] string attribute_type = "",
            [Description("Required for CREATE. Optional on UPDATE — pass only to rename the display label.")] string display_name = "",
            [Description("Required for CREATE when schema_name/logical_name have no prefix. Resolves publisher prefix and adds the attribute to the solution.")] string solution_name = "",
            [Description("Optional prefix validation. If supplied, it must match the solution publisher prefix.")] string confirmed_prefix = "",
            [Description("Optional column description.")] string description = "",
            [Description("Required level for the column. CREATE: always applied (None when omitted — NOT a Dataverse default). UPDATE: omit=keep current.")] string required_level = "",
            [Description("string 1-4000 (def 100); memo 1-1048576 (def 2000); file KB (def 32768).")] int max_length = 0,
            [Description("Numeric types: minimum value.")] double? min_value = null,
            [Description("Numeric types: maximum value.")] double? max_value = null,
            [Description("decimal/money/float 0-10 (def 2; money max is 4). [update: omit=keep]")] int precision = -1,
            [Description("string: Text/Email/Url/Phone/TextArea/TickerSymbol/RichText. datetime: DateOnly/DateAndTime. integer: None/Duration/TimeZone/Language/Locale.")] string format = "",
            [Description("datetime: UserLocal (def)/DateOnly/TimeZoneIndependent. DateOnly forces DateOnly format.")] string behavior = "",
            [Description("money: 0=Attribute (def), 1=Organization, 2=Currency.")] int precision_source = -1,
            [Description("picklist create: JSON array [{\"label\":\"Low\",\"value\":100000000}]. Optional 'color' field: {\"label\":\"Low\",\"value\":100000000,\"color\":\"#808080\"}.")] string options = "",
            [Description("picklist create: existing global option set.")] string global_optionset_name = "",
            [Description("lookup create: target entity. Comma-separated = polymorphic.")] string lookup_target = "",
            [Description("lookup: schema name. Auto if empty.")] string lookup_relationship_name = "",
            [Description("boolean true label (def 'Yes'). [update: omit=keep]")] string true_label = "",
            [Description("boolean false label (def 'No'). [update: omit=keep]")] string false_label = "",
            [Description("picklist update: JSON array — options to add. Optional 'color' field: {\"label\":\"New\",\"value\":100000003,\"color\":\"#FF0000\"}. StatusType (statuscode): include 'state' field (statecode value, default 0): {\"label\":\"Under Review\",\"value\":100000001,\"state\":0}.")] string add_options = "",
            [Description("picklist update: JSON array — options to rename. Optional 'color' field: {\"label\":\"NewLabel\",\"value\":100000000,\"color\":\"#FF0000\"}.")] string update_options = "",
            [Description("picklist update: JSON array of integer values to remove.")] string delete_options = "",
            [Description("Enable audit on this column. CREATE: pass to override Dataverse default (true). UPDATE: omit=null keeps current.")] bool? is_audit_enabled = null,
            [Description("Show column in Advanced Find. CREATE: pass to override Dataverse default (true). UPDATE: omit=null keeps current.)")] bool? is_valid_for_advanced_find = null,
            [Description("Enable field-level security. CREATE: pass to override Dataverse default (false). UPDATE: omit=null keeps current.")] bool? is_secured = null,
            [Description("Make column sortable in views. CREATE: pass to override Dataverse default (true, when supported by the attribute type). UPDATE: omit=null keeps current.")] bool? is_sortable = null,
            [Description("picklist/boolean create: default option value. Picklist: single integer value (e.g. 100000002) — must match one of the options. Boolean: 'true'/'false' or '1'/'0'. Not supported on multipicklist.")] string default_value = "",
            [Description("SchemaName for the new column (e.g. 'devkit_InvoiceLineId'). If provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Create-only formula clone reference returned by get_tables, exactly `source_table_logical_name:source_column_logical_name` (for example `account:new_total`). Pass it unchanged; the server retrieves and rewrites the source formula directly. Omit it and pass formula_source_type only to create an empty formula column.")] string formula_definition = "",
            [Description("Create only. Use powerfx, calculated, or rollup only when creating an empty formula column without formula_definition. Clone mode derives the kind from the referenced source column.")] string formula_source_type = "")
        {
            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            entity_name = entity_name.Trim();
            logical_name = logical_name?.Trim() ?? "";
            schema_name = schema_name?.Trim() ?? "";
            display_name = display_name?.Trim() ?? "";
            solution_name = solution_name?.Trim() ?? "";
            confirmed_prefix = confirmed_prefix?.Trim() ?? "";
            default_value = default_value?.Trim() ?? "";

            // --- Early validation: attribute_type, required_level, format, behavior ---
            // Validate these before touching Dataverse so errors return fast even in DryRun mode.
            if (!string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                var validTypes = new[] { "string", "memo", "integer", "bigint", "decimal", "money", "float", "double",
                    "boolean", "datetime", "lookup", "customer", "picklist", "multipicklist", "image", "file" };
                if (!Array.Exists(validTypes, t => t == normalizedType))
                    return ErrorResult(
                        $"Error: Unknown attribute_type '{attribute_type}'.\n" +
                        $"Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file.\n" +
                        $"Read docs://schema_tools_guide for column type matrix and usage per type.");
            }

            if (!string.IsNullOrWhiteSpace(required_level))
            {
                if (!ParseRequiredLevel(required_level).HasValue)
                    return ErrorResult(
                        $"Error: Invalid required_level '{required_level}'.\n" +
                        $"Valid values: 'None' (default), 'Recommended', 'Required'.");
            }

            if (!string.IsNullOrWhiteSpace(format) && !string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                if (normalizedType == "string")
                {
                    ResolveStringFormat(format, out var fmtErr);
                    if (fmtErr != null) return ErrorResult($"[Error] Invalid format for string: {fmtErr}");
                }
                else if (normalizedType == "integer")
                {
                    ResolveIntegerFormat(format, out var fmtErr);
                    if (fmtErr != null) return ErrorResult($"[Error] Invalid format for integer: {fmtErr}");
                }
                else if (normalizedType == "memo")
                {
                    ResolveMemoFormat(format, out var fmtErr);
                    if (fmtErr != null) return ErrorResult($"[Error] Invalid format for memo: {fmtErr}");
                }
            }

            if (!string.IsNullOrWhiteSpace(behavior) && !string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                if (normalizedType == "datetime")
                {
                    ResolveDateTimeBehavior(behavior, out var behaviorErr);
                    if (behaviorErr != null) return ErrorResult($"[Error] Invalid behavior for datetime: {behaviorErr}");
                }
            }

            // --- Resolve entity_name: Display Name first, then logical/schema contains ---
            var (resolvedEntity, entityError) = ResolveEntityName(_serviceClient, entity_name);
            if (entityError != null)
                return ErrorResult(entityError);
            entity_name = resolvedEntity;

            // ===== Resolve publisher prefix from solution (needed when schema_name/logical_name lack one) =====
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

            // Inherit prefix from an explicitly-provided schema_name/logical_name when solution_name is absent.
            // This lets CREATE work with schema_name='devkit_InvoiceLineId' even without solution_name.
            if (string.IsNullOrWhiteSpace(resolvedPrefix) &&
                (!string.IsNullOrWhiteSpace(schema_name) || !string.IsNullOrWhiteSpace(logical_name)))
            {
                var source = !string.IsNullOrWhiteSpace(schema_name) ? schema_name : logical_name;
                var idx = source.IndexOf('_');
                if (idx >= 1 && idx < source.Length - 1)
                    resolvedPrefix = source.Substring(0, idx);
            }

            // ===== UPDATE MODE: logical_name identifies an existing attribute =====
            // - logical_name provided → resolve existing attribute → UPDATE.
            // - logical_name omitted → CREATE intent (caller must supply attribute_type + display_name).
            AttributeMetadata existingMetadata = null;
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                var requestedLogicalName = logical_name;
                var attributeResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, logical_name, "upsert_column");
                if (attributeResolve.IsSuccess)
                {
                    var hasFormulaCreateIntent = !string.IsNullOrWhiteSpace(formula_definition) &&
                        !string.IsNullOrWhiteSpace(attribute_type) &&
                        !string.IsNullOrWhiteSpace(display_name);
                    if (!hasFormulaCreateIntent || string.Equals(
                        attributeResolve.Value.LogicalName, requestedLogicalName, StringComparison.OrdinalIgnoreCase))
                    {
                        existingMetadata = attributeResolve.Value;
                        logical_name = existingMetadata.LogicalName;
                    }
                }
                else if (attributeResolve.Status == ResolveStatus.Ambiguous || attributeResolve.Status == ResolveStatus.Error)
                {
                    return ErrorResult($"Error: {attributeResolve.Error}");
                }
                // NotFound → fall through to CREATE if create fields are present, else error below.
            }
            else if (!string.IsNullOrWhiteSpace(display_name))
            {
                // No explicit logical_name but display_name given → try resolving by display_name (convenience).
                var displayNameResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, display_name, "upsert_column");
                if (displayNameResolve.IsSuccess)
                {
                    existingMetadata = displayNameResolve.Value;
                    logical_name = existingMetadata.LogicalName;
                }
                else if (displayNameResolve.Status == ResolveStatus.Ambiguous || displayNameResolve.Status == ResolveStatus.Error)
                {
                    return ErrorResult($"Error: {displayNameResolve.Error}");
                }
            }

            if (existingMetadata != null)
            {
                // --- UPDATE MODE ---
                if (!string.IsNullOrWhiteSpace(formula_definition) ||
                    !string.IsNullOrWhiteSpace(formula_source_type))
                {
                    return ErrorResult(
                        "Error: Formula clone parameters are create-only and cannot update an existing column.\n" +
                        "Read the source column with get_tables, then create a new column with its formulaDefinition reference.");
                }
                return UpdateExistingAttribute(entity_name, logical_name, existingMetadata,
                    display_name, description, required_level, max_length, min_value, max_value,
                    precision, format, true_label, false_label,
                    add_options, update_options, delete_options,
                    is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, behavior, precision_source,
                    default_value);
            }

            // --- CREATE MODE ---
            if (string.IsNullOrWhiteSpace(attribute_type))
            {
                if (string.IsNullOrWhiteSpace(logical_name))
                    return ErrorResult(
                        "Error: logical_name is required to update an existing column, or attribute_type + display_name to create a new one.\n" +
                        "To UPDATE: pass logical_name (e.g. 'new_priority'). To CREATE: pass attribute_type + display_name (+ solution_name or a prefixed schema_name/logical_name).");
                return ErrorResult(
                    $"[Error] No existing column found for logical_name '{logical_name}' on entity '{entity_name}'.\n" +
                    "To CREATE a new column, also provide attribute_type + display_name (+ solution_name or a prefixed schema_name/logical_name). To UPDATE, double-check the logical name (use get_tables to list attributes).");
            }
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required when creating a new attribute.");

            attribute_type = attribute_type.Trim().ToLowerInvariant();

            // A publisher prefix must be known by now (from solution_name or inherited from a prefixed schema_name/logical_name).
            if (string.IsNullOrWhiteSpace(resolvedPrefix))
                return ErrorResult(
                    "Error: A publisher prefix is required to create a column. Either:\n" +
                    "- provide solution_name (resolves the publisher prefix and adds the column to the solution), or\n" +
                    "- provide schema_name or logical_name with a publisher prefix (e.g. 'devkit_InvoiceLineId' / 'devkit_invoicelineid').");

            var prefix = resolvedPrefix;
            if (!string.IsNullOrWhiteSpace(confirmed_prefix) &&
                !confirmed_prefix.Equals(prefix, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] confirmed_prefix '{confirmed_prefix}' does not match solution '{resolvedSolutionUniqueName ?? solution_name}' publisher prefix '{prefix}'.\n" +
                    "Use the solution publisher prefix or omit confirmed_prefix.");

            var prefixWithUnderscore = prefix + "_";

            // Determine SchemaName (CREATE-only override):
            // - schema_name provided → use AS-IS (must start with publisher prefix).
            // - otherwise derive via DataverseNamer from display_name (portal-style, preserving casing).
            string schemaName;
            if (!string.IsNullOrWhiteSpace(schema_name))
            {
                schemaName = schema_name;
                if (!schemaName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return ErrorResult(
                        $"[Error] schema_name '{schemaName}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').\n" +
                        "Tip: Prepend the publisher prefix, e.g. 'devkit_InvoiceLineId' instead of 'InvoiceLineId'.");
            }
            else
            {
                try
                {
                    (schemaName, _) = DataverseNamer.Resolve(display_name, prefix);
                }
                catch
                {
                    schemaName = $"{prefixWithUnderscore}{display_name.Trim().Replace(" ", "")}";
                }
            }

            // Determine the attribute logical name (CREATE-only override):
            // - logical_name provided → use AS-IS (lowercased; must start with publisher prefix).
            // - otherwise derive from schemaName.ToLowerInvariant() to stay in sync with Dataverse.
            string attributeName;
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                attributeName = logical_name.ToLowerInvariant();
                if (!attributeName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return ErrorResult(
                        $"[Error] logical_name '{logical_name}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').\n" +
                        "Tip: Prepend the publisher prefix, e.g. 'devkit_invoicelineid' instead of 'invoicelineid'.");
                if (!attributeName.Equals(schemaName.ToLowerInvariant(), StringComparison.OrdinalIgnoreCase))
                    return ErrorResult(
                        $"[Error] logical_name '{logical_name}' must be the lowercase form of schema_name '{schemaName}'.\n" +
                        $"Expected '{schemaName.ToLowerInvariant()}'.");
            }
            else
            {
                attributeName = schemaName.ToLowerInvariant();
            }
            logical_name = attributeName;

            // Anti-collision: if logical_name was NOT explicitly provided and the derived attribute already exists,
            // refuse to silently overwrite — the caller must pass an explicit logical_name to target it for update,
            // or pick a different display_name.
            if (string.IsNullOrWhiteSpace(logical_name))
            {
                var collisionResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, attributeName, "upsert_column");
                if (collisionResolve.IsSuccess)
                    return ErrorResult(
                        $"[Error] Cannot create column '{display_name}' because derived logical name '{attributeName}' already exists on entity '{entity_name}'.\n" +
                        "Re-call upsert_column with an explicit logical_name to update the existing column, or choose a different display_name.");
                if (collisionResolve.Status == ResolveStatus.Ambiguous || collisionResolve.Status == ResolveStatus.Error)
                    return ErrorResult($"Error: {collisionResolve.Error}");
            }

            // Parse required level
            var reqLevel = ParseRequiredLevel(required_level);
            if (!reqLevel.HasValue)
                return ErrorResult(
                    $"Error: Invalid required_level '{required_level}'.\n" +
                    $"Valid values: 'None' (default), 'Recommended', 'Required'.");

            var effectiveSolutionName = resolvedSolutionUniqueName ?? solution_name;

            // --- Resolve formula column (Power Fx / Calculated / Rollup) ---
            // formula_definition is the table:column reference returned by get_tables.
            // Raw SDK FormulaDefinition stays inside the server process.
            FormulaColumnSpec formulaSpec = null;
            if (!string.IsNullOrWhiteSpace(formula_definition))
            {
                if (!TryResolveFormulaCloneSource(formula_definition, out var resolvedFormula, out var sourceTypeVal,
                    out var kind, out var sourceEntity, out var sourceAttribute, out var sourceError))
                    return ErrorResult(sourceError);

                if (!string.IsNullOrWhiteSpace(formula_source_type))
                {
                    var (requestedSourceType, requestedKindError) = ParseFormulaSourceType(formula_source_type.Trim().ToLowerInvariant());
                    if (requestedKindError != null) return ErrorResult(requestedKindError);
                    if (requestedSourceType != sourceTypeVal)
                        return ErrorResult($"Error: formula_source_type does not match source column '{sourceEntity}:{sourceAttribute}'. Omit it in clone mode; the server derives '{kind}' from Dataverse.");
                }

                var formulaCompatErr = ValidateFormulaAttributeType(attribute_type, kind);
                if (formulaCompatErr != null) return ErrorResult(formulaCompatErr);

                FormulaRelationshipMapping relationshipMapping = null;
                if (kind == "rollup")
                {
                    var mappingError = TryResolveRollupRelationshipMapping(
                        resolvedFormula, sourceEntity, entity_name, out relationshipMapping);
                    if (mappingError != null) return ErrorResult(mappingError);
                }

                resolvedFormula = FormulaReferenceHelper.RewriteFormulaReferences(
                    resolvedFormula, sourceEntity, entity_name, sourceAttribute, attributeName, relationshipMapping);

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, resolvedFormula, kind);
            }
            else if (!string.IsNullOrWhiteSpace(formula_source_type))
            {
                var kind = formula_source_type.Trim().ToLowerInvariant();
                var (sourceTypeVal, kindErr) = ParseFormulaSourceType(kind);
                if (kindErr != null) return ErrorResult(kindErr);

                var formulaCompatErr = ValidateFormulaAttributeType(attribute_type, kind);
                if (formulaCompatErr != null) return ErrorResult(formulaCompatErr);

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, null, kind);
            }

            CallToolResult CreateTypedColumn(AttributeMetadata _ = null)
            {
                // CREATE path: build a ColumnFlags carrying the caller's overrides
                // (or Dataverse-default booleans when omitted). The dispatcher has
                // already parsed required_level into reqLevel (None when the caller
                // omitted it), so RequiredLevel here is a concrete value that Apply
                // always writes — a created column always gets an explicit required
                // level rather than inheriting whatever Dataverse would have
                // defaulted to.
                //
                // For the four boolean flags (is_audit_enabled / is_valid_for_advanced_find
                // / is_secured / is_sortable): when null (caller omitted), Apply skips
                // the property and Dataverse keeps its per-attribute-type create default
                // (audit=true, advanced find=true, sortable=true [when supported],
                // field security=false). When provided, only that flag overrides the
                // default. This lets a clone of a column match the source's flags in a
                // SINGLE create call (no follow-up update), and a normal create still
                // gets sensible Dataverse defaults.
                //
                // UPDATE path uses the SAME ColumnFlags type — a separate
                // ColumnUpdateFlags twin does NOT exist. UpdateExistingAttribute builds
                // its own ColumnFlags (RequiredLevelExplicit=false when the caller
                // omitted required_level) and calls TryApplyForUpdate, which writes
                // only the supplied flags whose new value differs from the current one
                // and tracks each real change into the result's changes list.
                var createFlags = new ColumnFlags(reqLevel.Value, is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable);

                switch (attribute_type)
                {
                    case "string":
                        return CreateStringAttribute(entity_name, logical_name, schemaName, display_name, description, max_length == 0 ? 100 : max_length, format, effectiveSolutionName, formulaSpec, createFlags);
                    case "memo":
                        return CreateMemoAttribute(entity_name, logical_name, schemaName, display_name, description, max_length == 0 ? 2000 : max_length, format, effectiveSolutionName, formulaSpec, createFlags);
                    case "integer":
                        return CreateIntegerAttribute(entity_name, logical_name, schemaName, display_name, description, min_value, max_value, format, effectiveSolutionName, formulaSpec, createFlags);
                    case "bigint":
                        return CreateBigIntAttribute(entity_name, logical_name, schemaName, display_name, description, effectiveSolutionName, createFlags);
                    case "decimal":
                        return CreateDecimalAttribute(entity_name, logical_name, schemaName, display_name, description, min_value, max_value, precision, effectiveSolutionName, formulaSpec, createFlags);
                    case "money":
                        return CreateMoneyAttribute(entity_name, logical_name, schemaName, display_name, description, min_value, max_value, precision, precision_source, effectiveSolutionName, formulaSpec, createFlags);
                    case "float":
                    case "double":
                        return CreateFloatAttribute(entity_name, logical_name, schemaName, display_name, description, min_value, max_value, precision, effectiveSolutionName, formulaSpec, createFlags);
                    case "boolean":
                        return CreateBooleanAttribute(entity_name, logical_name, schemaName, display_name, description, true_label, false_label, effectiveSolutionName, formulaSpec, default_value, createFlags);
                    case "datetime":
                        return CreateDateTimeAttribute(entity_name, logical_name, schemaName, display_name, description, format, behavior, effectiveSolutionName, formulaSpec, createFlags);
                    case "lookup":
                        return CreateLookupAttribute(entity_name, logical_name, schemaName, display_name, description, lookup_target, lookup_relationship_name, prefix, effectiveSolutionName, createFlags);
                    case "customer":
                        return CreateCustomerAttribute(entity_name, logical_name, schemaName, display_name, description, prefix, effectiveSolutionName, createFlags);
                    case "picklist":
                        return CreatePicklistAttribute(entity_name, logical_name, schemaName, display_name, description, options, global_optionset_name, false, effectiveSolutionName, default_value, createFlags);
                    case "multipicklist":
                        return CreatePicklistAttribute(entity_name, logical_name, schemaName, display_name, description, options, global_optionset_name, true, effectiveSolutionName, default_value, createFlags);
                    case "image":
                        return CreateImageAttribute(entity_name, logical_name, schemaName, display_name, description, effectiveSolutionName, createFlags);
                    case "file":
                        return CreateFileAttribute(entity_name, logical_name, schemaName, display_name, description, max_length == 0 ? 32768 : max_length, effectiveSolutionName, createFlags);
                    default:
                        return ErrorResult(
                            $"Error: Unknown attribute_type '{attribute_type}'.\n" +
                            $"Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file.\n" +
                            $"Read docs://schema_tools_guide for column type matrix and usage per type.");
                }
            }

            try
            {
                return CreateTypedColumn();
            }
            catch (Exception ex)
            {
                if (formulaSpec != null)
                {
                    var originalFormulaSpec = formulaSpec;
                    formulaSpec = new FormulaColumnSpec(
                        originalFormulaSpec.SourceType, null, originalFormulaSpec.KindName);
                    try
                    {
                        var fallbackResult = CreateTypedColumn();
                        return AppendFormulaCloneWarning(fallbackResult,
                            $"Dataverse rejected the cloned {originalFormulaSpec.KindName} formula. " +
                            "The column was created with the same SourceType and an empty FormulaDefinition. " +
                            $"Define the formula manually. Original error: {ex.Message}");
                    }
                    catch (Exception fallbackException)
                    {
                        return HandleException(fallbackException, entity_name, logical_name, effectiveSolutionName);
                    }
                }
                return HandleException(ex, entity_name, logical_name, effectiveSolutionName);
            }
        }

        // --- String ---
        private CallToolResult CreateStringAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            int maxLength, string format, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (maxLength < 1) maxLength = 100;
            if (maxLength > 4000) maxLength = 4000;

            var resolvedFormat = ResolveStringFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);

            var attr = new StringAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                MaxLength = maxLength,
                FormatName = resolvedFormat
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            // When createFlags is null or a flag is null, the property is left unset and
            // Dataverse falls back to its per-attribute-type create default
            // (audit=true, advfind=true, sortable=true, security=false).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create String column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "String", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            sb.AppendLine($"Format: {attr.FormatName?.Value ?? "Text"}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "String", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() }, { "format", attr.FormatName?.Value ?? "Text" } },
                description: description);
        }

        // --- Memo ---
        private CallToolResult CreateMemoAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            int maxLength, string format, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (maxLength < 1) maxLength = 2000;
            if (maxLength > 1048576) maxLength = 1048576;

            var memoFormat = ResolveMemoFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);
            var attr = new MemoAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                MaxLength = maxLength,
                FormatName = memoFormat
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Memo column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Memo", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Memo", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() } },
                description: description);
        }

        // --- Integer ---
        private CallToolResult CreateIntegerAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            double? minValue, double? maxValue, string format, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var resolvedFormat = ResolveIntegerFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);

            var attr = new IntegerAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                Format = resolvedFormat
            };
            if (minValue.HasValue) attr.MinValue = (int)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (int)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Integer column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Integer", displayName, reqLevel);
            if (minValue.HasValue) sb.AppendLine($"MinValue: {(int)minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {(int)maxValue.Value}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string>();
            if (minValue.HasValue) extra["minValue"] = ((int)minValue.Value).ToString();
            if (maxValue.HasValue) extra["maxValue"] = ((int)maxValue.Value).ToString();
            return BuildResult(sb, entityName, logicalName, schemaName, "Integer", displayName, reqLevel, metadataId, solutionName, published, extra,
                description: description);
        }

        // --- Decimal ---
        private CallToolResult CreateDecimalAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            double? minValue, double? maxValue, int precision, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DecimalAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                Precision = precision
            };
            if (minValue.HasValue) attr.MinValue = (decimal)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (decimal)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Decimal column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Decimal", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, schemaName, "Decimal", displayName, reqLevel, metadataId, solutionName, published, extra,
                description: description);
        }

        // --- Money ---
        private CallToolResult CreateMoneyAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            double? minValue, double? maxValue, int precision, int precisionSource, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (precision < 0) precision = 2;
            if (precision > 4) precision = 4;
            if (precisionSource < 0 || precisionSource > 2) precisionSource = 0;

            var attr = new MoneyAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                Precision = precision,
                PrecisionSource = precisionSource
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Money column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var precisionSourceLabel = precisionSource switch { 0 => "Attribute", 1 => "Organization", 2 => "Currency", _ => precisionSource.ToString() };
            var sb = FormatHeader(entityName, logicalName, "Money", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            sb.AppendLine($"PrecisionSource: {precisionSource} ({precisionSourceLabel})");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() }, { "precisionSource", precisionSource.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, schemaName, "Money", displayName, reqLevel, metadataId, solutionName, published, extra,
                description: description);
        }

        // --- Float/Double ---
        private CallToolResult CreateFloatAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            double? minValue, double? maxValue, int precision, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DoubleAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                Precision = precision
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Float column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Float", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, schemaName, "Float", displayName, reqLevel, metadataId, solutionName, published, extra,
                description: description);
        }

        // --- Boolean ---
        private CallToolResult CreateBooleanAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string trueLabel, string falseLabel, string solutionName, FormulaColumnSpec formula = null, string defaultValue = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (string.IsNullOrWhiteSpace(trueLabel)) trueLabel = "Yes";
            if (string.IsNullOrWhiteSpace(falseLabel)) falseLabel = "No";

            var attr = new BooleanAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                OptionSet = new BooleanOptionSetMetadata(
                    new OptionMetadata(new Label(trueLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)), 1),
                    new OptionMetadata(new Label(falseLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)), 0))
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

            // Apply default value: accepts 'true'/'false' or '1'/'0'. false is the Dataverse convention for unchecked.
            if (!string.IsNullOrWhiteSpace(defaultValue))
            {
                var dv = defaultValue.Trim().ToLowerInvariant();
                if (dv == "true" || dv == "1")
                    attr.DefaultValue = true;
                else if (dv == "false" || dv == "0")
                    attr.DefaultValue = false;
                else
                    return ErrorResult(
                        $"Error: Invalid default_value '{defaultValue.Trim()}' for boolean. " +
                        "Expected 'true', 'false', '1', or '0'.");
            }
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Boolean column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Boolean", displayName, reqLevel);
            sb.AppendLine($"TrueLabel: {trueLabel.Trim()}");
            sb.AppendLine($"FalseLabel: {falseLabel.Trim()}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Boolean", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "trueLabel", trueLabel.Trim() }, { "falseLabel", falseLabel.Trim() } },
                description: description);
        }

        // --- DateTime ---
        private CallToolResult CreateDateTimeAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string format, string behavior, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var dtBehavior = ResolveDateTimeBehavior(behavior, out var behaviorError);
            if (behaviorError != null) return ErrorResult(behaviorError);
            var dateFormat = DateTimeFormat.DateAndTime;
            if (!string.IsNullOrWhiteSpace(format) && format.Trim().Equals("DateOnly", StringComparison.OrdinalIgnoreCase))
                dateFormat = DateTimeFormat.DateOnly;
            // DateOnly behavior forces DateOnly format
            if (dtBehavior.Value == DateTimeBehavior.DateOnly.Value)
                dateFormat = DateTimeFormat.DateOnly;

            var attr = new DateTimeAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                Format = dateFormat,
                DateTimeBehavior = dtBehavior
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);
            formula?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create DateTime column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var behaviorName = dtBehavior.Value;
            var sb = FormatHeader(entityName, logicalName, "DateTime", displayName, reqLevel);
            sb.AppendLine($"Format: {dateFormat}");
            sb.AppendLine($"Behavior: {behaviorName}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "DateTime", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "format", dateFormat.ToString() }, { "behavior", behaviorName } },
                description: description);
        }

        private static DateTimeBehavior ResolveDateTimeBehavior(string behavior, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(behavior))
                return DateTimeBehavior.UserLocal;
            var result = behavior.Trim().ToLowerInvariant() switch
            {
                "dateonly" => DateTimeBehavior.DateOnly,
                "timezoneindependent" => DateTimeBehavior.TimeZoneIndependent,
                "userlocal" => DateTimeBehavior.UserLocal,
                _ => (DateTimeBehavior)null
            };
            if (result == null)
                error = $"[Error] Invalid behavior '{behavior}'.\nValid values: 'UserLocal' (default), 'DateOnly', 'TimeZoneIndependent'.";
            return result ?? DateTimeBehavior.UserLocal;
        }

        // --- Lookup (single target) or Polymorphic Lookup (multiple targets) ---
        private CallToolResult CreateLookupAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string lookupTarget, string relationshipName, string prefix, string solutionName,
            ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (string.IsNullOrWhiteSpace(lookupTarget))
                return ErrorResult(
                    $"Error: lookup_target is required for lookup type.\n" +
                    $"Provide a target entity logical name (e.g., 'contact'). For polymorphic, comma-separate: 'account,contact,lead'.\n" +
                    $"Use get_tables to find valid entity logical names.");

            var targetInputs = lookupTarget.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(t => t.Trim())
                .Where(t => !string.IsNullOrEmpty(t))
                .ToArray();
            var targets = new List<string>();
            foreach (var targetInput in targetInputs)
            {
                var targetResolve = DisplayNameFirstResolver.ResolveEntity(_serviceClient, targetInput, "upsert_column");
                if (!targetResolve.IsSuccess)
                    return ErrorResult($"Error: lookup_target '{targetInput}': {targetResolve.Error}");
                targets.Add(targetResolve.Value.LogicalName);
            }
            targets = targets.Distinct(StringComparer.OrdinalIgnoreCase).ToList();

            if (targets.Count == 0)
                return ErrorResult($"[Error] No valid target entities found in lookup_target: '{lookupTarget}'");

            // Multiple targets → Polymorphic Lookup
            if (targets.Count > 1)
                return CreatePolymorphicLookupAttribute(entityName, logicalName, schemaName, displayName, description, targets.ToArray(), prefix, solutionName, createFlags);

            // Single target → Regular Lookup
            var singleTarget = targets[0];

            if (string.IsNullOrWhiteSpace(relationshipName))
                relationshipName = $"{prefix}_{singleTarget}_{entityName}_{logicalName}";
            if (relationshipName.Length > 100)
                relationshipName = relationshipName[..100];

            var request = new CreateOneToManyRequest
            {
                OneToManyRelationship = new OneToManyRelationshipMetadata
                {
                    SchemaName = relationshipName,
                    ReferencedEntity = singleTarget,
                    ReferencingEntity = entityName,
                    AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = AssociatedMenuBehavior.UseCollectionName,
                        Group = AssociatedMenuGroup.Details,
                        Order = 10000
                    },
                    CascadeConfiguration = new CascadeConfiguration
                    {
                        Assign = CascadeType.NoCascade,
                        Delete = CascadeType.RemoveLink,
                        Merge = CascadeType.NoCascade,
                        Reparent = CascadeType.NoCascade,
                        Share = CascadeType.NoCascade,
                        Unshare = CascadeType.NoCascade
                    }
                },
                Lookup = new LookupAttributeMetadata
                {
                    SchemaName = schemaName,
                    LogicalName = logicalName,
                    DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient))
                }
            };
            if (!string.IsNullOrWhiteSpace(description))
                request.Lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(request.Lookup);
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunCreatePreview(entityName, logicalName, schemaName, "Lookup", displayName, reqLevel, solutionName);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                metadataId = response.AttributeId;
            }, $"create Lookup column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            var published = PublishIfNeeded(entityName);

            // Wait for lookup column metadata to propagate (extended wait for relationships)
            if (published)
            {
                MetadataOperationWaitHelper.WaitForPropagation();
            }

            var sb = FormatHeader(entityName, logicalName, "Lookup", displayName, reqLevel);
            sb.AppendLine($"Target: {singleTarget}");
            sb.AppendLine($"Relationship: {relationshipName}");
            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Lookup", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "lookupTarget", singleTarget }, { "relationshipName", relationshipName } },
                description: description);
        }

        // --- Polymorphic Lookup (multiple targets) ---
        private CallToolResult CreatePolymorphicLookupAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string[] targets, string prefix, string solutionName, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var relationships = new OneToManyRelationshipMetadata[targets.Length];
            var relNames = new string[targets.Length];
            for (int i = 0; i < targets.Length; i++)
            {
                var relName = $"{prefix}_{targets[i]}_{entityName}_{logicalName}";
                if (relName.Length > 100) relName = relName[..100];
                relNames[i] = relName;

                relationships[i] = new OneToManyRelationshipMetadata
                {
                    ReferencedEntity = targets[i],
                    ReferencingEntity = entityName,
                    SchemaName = relName,
                    AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                    {
                        Behavior = AssociatedMenuBehavior.UseCollectionName,
                        Group = AssociatedMenuGroup.Details,
                        Order = 10000 + i
                    },
                    CascadeConfiguration = new CascadeConfiguration
                    {
                        Assign = CascadeType.NoCascade,
                        Delete = CascadeType.RemoveLink,
                        Merge = CascadeType.NoCascade,
                        Reparent = CascadeType.NoCascade,
                        Share = CascadeType.NoCascade,
                        Unshare = CascadeType.NoCascade
                    }
                };
            }

            var lookup = new LookupAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient))
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(lookup);

            // Use OrganizationRequest since CreatePolymorphicLookupAttributeRequest
            // is not available in the Microsoft.PowerPlatform.Dataverse.Client SDK
            var request = new OrganizationRequest("CreatePolymorphicLookupAttribute")
            {
                ["Lookup"] = lookup,
                ["OneToManyRelationships"] = relationships
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunCreatePreview(entityName, logicalName, schemaName, "PolymorphicLookup", displayName, reqLevel, solutionName);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                metadataId = (Guid)response.Results["AttributeId"];
            }, $"create PolymorphicLookup column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            var published = PublishIfNeeded(entityName);

            // Wait for polymorphic lookup column metadata to propagate (extended wait for relationships)
            if (published)
            {
                MetadataOperationWaitHelper.WaitForPropagation();
            }

            var sb = FormatHeader(entityName, logicalName, "PolymorphicLookup", displayName, reqLevel);
            sb.AppendLine($"Targets: {string.Join(", ", targets)}");
            for (int i = 0; i < targets.Length; i++)
                sb.AppendLine($"Relationship[{targets[i]}]: {relNames[i]}");
            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "targets", string.Join(", ", targets) } };
            for (int i = 0; i < targets.Length; i++)
                extra[$"relationship_{targets[i]}"] = relNames[i];

            return BuildResult(sb, entityName, logicalName, schemaName, "PolymorphicLookup", displayName, reqLevel, metadataId, solutionName, published, extra,
                description: description);
        }

        // --- Customer (polymorphic lookup: account + contact) ---
        private CallToolResult CreateCustomerAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string prefix, string solutionName, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var accountRelName = $"{prefix}_account_{entityName}_{logicalName}";
            var contactRelName = $"{prefix}_contact_{entityName}_{logicalName}";
            if (accountRelName.Length > 100) accountRelName = accountRelName[..100];
            if (contactRelName.Length > 100) contactRelName = contactRelName[..100];

            var lookup = new LookupAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient))
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(lookup);

            var request = new CreateCustomerRelationshipsRequest
            {
                Lookup = lookup,
                OneToManyRelationships = new[]
                {
                    new OneToManyRelationshipMetadata
                    {
                        ReferencedEntity = "account",
                        ReferencingEntity = entityName,
                        SchemaName = accountRelName,
                        AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                        {
                            Behavior = AssociatedMenuBehavior.UseCollectionName,
                            Group = AssociatedMenuGroup.Details,
                            Order = 10000
                        },
                        CascadeConfiguration = new CascadeConfiguration
                        {
                            Assign = CascadeType.NoCascade,
                            Delete = CascadeType.RemoveLink,
                            Merge = CascadeType.Cascade,
                            Reparent = CascadeType.NoCascade,
                            Share = CascadeType.NoCascade,
                            Unshare = CascadeType.NoCascade
                        }
                    },
                    new OneToManyRelationshipMetadata
                    {
                        ReferencedEntity = "contact",
                        ReferencingEntity = entityName,
                        SchemaName = contactRelName,
                        AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                        {
                            Behavior = AssociatedMenuBehavior.UseCollectionName,
                            Group = AssociatedMenuGroup.Details,
                            Order = 10001
                        },
                        CascadeConfiguration = new CascadeConfiguration
                        {
                            Assign = CascadeType.NoCascade,
                            Delete = CascadeType.RemoveLink,
                            Merge = CascadeType.Cascade,
                            Reparent = CascadeType.NoCascade,
                            Share = CascadeType.NoCascade,
                            Unshare = CascadeType.NoCascade
                        }
                    }
                }
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunCreatePreview(entityName, logicalName, schemaName, "Customer", displayName, reqLevel, solutionName);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateCustomerRelationshipsResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
                metadataId = response.AttributeId;
            }, $"create Customer column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            var published = PublishIfNeeded(entityName);

            // Wait for customer column metadata to propagate (extended wait for relationships)
            if (published)
            {
                MetadataOperationWaitHelper.WaitForPropagation();
            }

            var sb = FormatHeader(entityName, logicalName, "Customer", displayName, reqLevel);
            sb.AppendLine($"Targets: account, contact");
            sb.AppendLine($"AccountRelationship: {accountRelName}");
            sb.AppendLine($"ContactRelationship: {contactRelName}");
            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Customer", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string>
                {
                    { "targets", "account, contact" },
                    { "accountRelationship", accountRelName },
                    { "contactRelationship", contactRelName }
                },
                description: description);
        }

        // --- Picklist / MultiSelectPicklist ---
        private CallToolResult CreatePicklistAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string optionsJson, string globalOptionSetName, bool isMultiSelect,
            string solutionName, string defaultValue, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var typeName = isMultiSelect ? "MultiSelectPicklist" : "Picklist";

            // Build the attribute metadata
            AttributeMetadata attr;
            var optionLabels = new List<string>();

            if (!string.IsNullOrWhiteSpace(globalOptionSetName))
            {
                var choiceResolve = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, globalOptionSetName, "upsert_column");
                if (!choiceResolve.IsSuccess)
                    return ErrorResult($"Error: global_optionset_name '{globalOptionSetName.Trim()}': {choiceResolve.Error}");
                globalOptionSetName = choiceResolve.Value.Name;

                // Use existing global option set
                if (isMultiSelect)
                {
                    attr = new MultiSelectPicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                        OptionSet = new OptionSetMetadata { IsGlobal = true, Name = globalOptionSetName.Trim() }
                    };
                }
                else
                {
                    attr = new PicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                        OptionSet = new OptionSetMetadata { IsGlobal = true, Name = globalOptionSetName.Trim() }
                    };
                }
                optionLabels.Add($"GlobalOptionSet: {globalOptionSetName.Trim()}");
                var defaultErr = ApplyPicklistDefaultValue(attr, defaultValue, isMultiSelect, knownOptionValues: null);
                if (defaultErr != null) return ErrorResult(defaultErr);
            }
            else
            {
                // Parse local options
                var (parsedOptions, parseError) = ParseOptions(optionsJson);
                if (parseError != null)
                    return ErrorResult(
                        $"Error: Invalid options JSON for {typeName} — {parseError}.\n" +
                        $"Expected format: [{{\"label\":\"Low\",\"value\":100000000}},{{\"label\":\"High\",\"value\":100000001}}].\n" +
                        $"Read docs://schema_tools_guide for picklist option formats and global option set usage.");
                if (parsedOptions == null || parsedOptions.Count == 0)
                    return ErrorResult(
                        $"Error: options or global_optionset_name is required for {typeName}.\n" +
                        $"Provide options as JSON array or set global_optionset_name to an existing option set name.\n" +
                        $"Read docs://schema_tools_guide for picklist option formats and global option set usage.");

                var optionSet = new OptionSetMetadata { IsGlobal = false, OptionSetType = OptionSetType.Picklist };
                foreach (var opt in parsedOptions)
                {
                    var optMeta = new OptionMetadata(new Label(opt.Label, McpHelper.GetBaseLanguageCode(_serviceClient)), opt.Value);
                    if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hex))
                        optMeta.Color = hex;
                    optionSet.Options.Add(optMeta);
                    optionLabels.Add(string.IsNullOrWhiteSpace(opt.Color) ? $"{opt.Label} ({opt.Value})" : $"{opt.Label} ({opt.Value}) [{opt.Color}]");
                }

                if (isMultiSelect)
                {
                    attr = new MultiSelectPicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                        OptionSet = optionSet
                    };
                }
                else
                {
                    attr = new PicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                        OptionSet = optionSet
                    };
                }

                // Validate + apply default value (local option set — options known here).
                var defaultErr = ApplyPicklistDefaultValue(attr, defaultValue, isMultiSelect, knownOptionValues: parsedOptions.Select(o => o.Value).ToList());
                if (defaultErr != null) return ErrorResult(defaultErr);
            }

            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create {typeName} column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, typeName, displayName, reqLevel);
            sb.AppendLine($"Options: {string.Join(", ", optionLabels)}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, typeName, displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "options", string.Join(", ", optionLabels) } },
                description: description);
        }

        // --- BigInt ---
        private CallToolResult CreateBigIntAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string solutionName, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var attr = new BigIntAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient))
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (required / audit / advanced find / field security / sort).
            createFlags?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create BigInt column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "BigInt", displayName, reqLevel);
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "BigInt", displayName, reqLevel, metadataId, solutionName, published,
                description: description);
        }

        // --- Image ---
        private CallToolResult CreateImageAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            string solutionName, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var attr = new ImageAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                IsPrimaryImage = false
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (required / audit / advanced find / field security / sort).
            createFlags?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create Image column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Image", displayName, reqLevel);
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Image", displayName, reqLevel, metadataId, solutionName, published,
                description: description);
        }

        // --- File ---
        private CallToolResult CreateFileAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            int maxSizeInKB, string solutionName, ColumnFlags createFlags = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (maxSizeInKB < 1) maxSizeInKB = 32768;
            if (maxSizeInKB > 10485760) maxSizeInKB = 10485760; // 10 GB max

            var attr = new FileAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                MaxSizeInKB = maxSizeInKB
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            // Apply flag overrides (required / audit / advanced find / field security / sort).
            createFlags?.Apply(attr);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);
            }, $"create File column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return ErrorResult(
                    $"Error: Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or table metadata has not propagated.\n" +
                    $"Action: Wait 30 seconds and retry manually. If creating multiple columns, use phased approach:\n" +
                    $"  1. Create all tables first\n" +
                    $"  2. Wait 15-20 seconds\n" +
                    $"  3. Create all columns");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "File", displayName, reqLevel);
            sb.AppendLine($"MaxSizeInKB: {maxSizeInKB}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "File", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "maxSizeInKB", maxSizeInKB.ToString() } },
                description: description);
        }

        // ========== Helpers ==========

        private Guid ExecuteCreateAttribute(string entityName, AttributeMetadata attribute, string solutionName)
        {
            var request = new CreateAttributeRequest
            {
                EntityName = entityName,
                Attribute = attribute
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return Guid.Empty;

            var response = (CreateAttributeResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, request);
            return response.AttributeId;
        }

        private string TryResolveRollupRelationshipMapping(string formulaDefinition, string sourceEntityName,
            string targetEntityName, out FormulaRelationshipMapping mapping)
        {
            mapping = null;
            var match = System.Text.RegularExpressions.Regex.Match(
                formulaDefinition ?? "",
                @"relatedlinked_(?<relationship>[^#]+)#(?<lookup>[^#]+)#(?<relatedEntity>[^#]+)#");
            if (!match.Success)
                return "Error: Could not find the Rollup relationship reference in formula_definition.";

            var sourceRelationshipName = match.Groups["relationship"].Value;
            var sourceLookupAttribute = match.Groups["lookup"].Value;

            var sourceMetadata = ((RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = sourceEntityName,
                RetrieveAsIfPublished = true
            })).EntityMetadata;
            var targetMetadata = ((RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = targetEntityName,
                RetrieveAsIfPublished = true
            })).EntityMetadata;

            var sourceRelationship = sourceMetadata.OneToManyRelationships?.FirstOrDefault(
                relationship => string.Equals(relationship.SchemaName, sourceRelationshipName, StringComparison.Ordinal));
            if (sourceRelationship == null)
                return $"Error: Rollup source relationship '{sourceRelationshipName}' was not found on table '{sourceEntityName}'.";

            var targetRelationship = targetMetadata.OneToManyRelationships?.FirstOrDefault(
                relationship =>
                    string.Equals(relationship.ReferencingEntity, sourceRelationship.ReferencingEntity, StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(relationship.ReferencedEntity, targetEntityName, StringComparison.OrdinalIgnoreCase));
            if (targetRelationship == null)
                return $"Error: No matching Rollup relationship from '{sourceRelationship.ReferencingEntity}' to target table '{targetEntityName}' was found.";

            mapping = new FormulaRelationshipMapping(
                sourceRelationshipName,
                targetRelationship.SchemaName,
                sourceLookupAttribute,
                targetRelationship.ReferencingAttribute);
            return null;
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

        private static StringBuilder FormatHeader(string entityName, string logicalName, string typeName, string displayName, AttributeRequiredLevel reqLevel)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[AttributeCreated] {entityName}.{logicalName}");
            sb.AppendLine($"Type: {typeName}");
            sb.AppendLine($"DisplayName: {displayName.Trim()}");
            sb.AppendLine($"RequiredLevel: {reqLevel}");
            return sb;
        }

        private void AppendFooter(StringBuilder sb, string solutionName, string entityName, Guid metadataId)
        {
            var published = PublishIfNeeded(entityName);
            AppendFooter(sb, solutionName, published, metadataId);
        }

        private static void AppendFooter(StringBuilder sb, string solutionName, bool published, Guid metadataId)
        {
            if (!string.IsNullOrWhiteSpace(solutionName))
                sb.AppendLine($"Solution: {solutionName.Trim()}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            sb.AppendLine($"MetadataId: {metadataId}");
        }

        private CallToolResult BuildResult(StringBuilder sb, string entityName, string logicalName, string schemaName, string typeName,
            string displayName, AttributeRequiredLevel reqLevel, Guid metadataId, string solutionName, bool published,
            Dictionary<string, string> extra = null, string description = null)
        {
            var actualLogicalName = ResolveCreatedAttributeLogicalName(entityName, metadataId, logicalName);
            if (!string.Equals(actualLogicalName, logicalName, StringComparison.OrdinalIgnoreCase))
                sb.Replace($"{entityName}.{logicalName}", $"{entityName}.{actualLogicalName}");

            var structured = new UpsertColumnResult
            {
                EntityName = entityName,
                AttributeName = actualLogicalName,
                LogicalName = actualLogicalName,
                SchemaName = schemaName,
                AttributeType = typeName,
                DisplayName = displayName.Trim(),
                Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
                RequiredLevel = reqLevel.ToString(),
                MetadataId = metadataId.ToString(),
                SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
                CreateMode = SolutionComponentCreateMode.MetadataCreateRequest.ToString(),
                IsAddToSolution = !string.IsNullOrWhiteSpace(solutionName),
                AddToSolutionMethod = string.IsNullOrWhiteSpace(solutionName) ? "none" : "SolutionUniqueName",
                Published = published,
                Status = "created",
                Extra = extra?.Count > 0 ? extra : null
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private string ResolveCreatedAttributeLogicalName(string entityName, Guid metadataId, string fallbackLogicalName)
        {
            if (metadataId == Guid.Empty || _options.DryRun)
                return fallbackLogicalName;

            try
            {
                var response = (RetrieveAttributeResponse)_serviceClient.Execute(new RetrieveAttributeRequest
                {
                    EntityLogicalName = entityName,
                    MetadataId = metadataId,
                    RetrieveAsIfPublished = true
                });

                return response.AttributeMetadata?.LogicalName ?? fallbackLogicalName;
            }
            catch
            {
                return fallbackLogicalName;
            }
        }

        private static AttributeRequiredLevel? ParseRequiredLevel(string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return AttributeRequiredLevel.None;
            return value.Trim().ToLowerInvariant() switch
            {
                "none" => AttributeRequiredLevel.None,
                "required" or "applicationrequired" => AttributeRequiredLevel.ApplicationRequired,
                "recommended" => AttributeRequiredLevel.Recommended,
                _ => null
            };
        }

        // ── Formula column helpers (Power Fx / Calculated / Rollup) ──

        /// <summary>
        /// Map a <c>formula_source_type</c> string to the numeric <c>AttributeMetadata.SourceType</c>.
        /// Defaults to Power Fx (3). Returns null value + error message on invalid input.
        /// </summary>
        private bool TryResolveFormulaCloneSource(string reference, out string formulaDefinition,
            out int sourceType, out string kind, out string sourceEntity, out string sourceAttribute,
            out string error)
        {
            formulaDefinition = null;
            sourceType = 0;
            kind = null;
            sourceEntity = null;
            sourceAttribute = null;
            error = null;

            var parts = (reference ?? "").Trim().Split(':');
            if (parts.Length != 2 || string.IsNullOrWhiteSpace(parts[0]) || string.IsNullOrWhiteSpace(parts[1]))
            {
                error = "Error: Invalid formula_definition. Pass the exact `table_logical_name:column_logical_name` reference returned by get_tables.";
                return false;
            }

            sourceEntity = parts[0].Trim();
            sourceAttribute = parts[1].Trim();
            if (!IsLogicalName(sourceEntity) || !IsLogicalName(sourceAttribute))
            {
                error = "Error: Invalid formula_definition. Table and column must be lowercase Dataverse logical names separated by one colon.";
                return false;
            }

            AttributeMetadata metadata;
            try
            {
                var response = (RetrieveAttributeResponse)_serviceClient.Execute(new RetrieveAttributeRequest
                {
                    EntityLogicalName = sourceEntity,
                    LogicalName = sourceAttribute,
                    RetrieveAsIfPublished = true
                });
                metadata = response.AttributeMetadata;
            }
            catch (Exception ex)
            {
                error = $"Error: Cannot resolve formula source '{sourceEntity}:{sourceAttribute}'. {ex.Message}";
                return false;
            }

            sourceType = metadata.SourceType ?? 0;
            kind = sourceType switch
            {
                1 => "calculated",
                2 => "rollup",
                3 => "powerfx",
                _ => null
            };
            if (kind == null)
            {
                error = $"Error: Source column '{sourceEntity}:{sourceAttribute}' is not a Calculated, Rollup, or PowerFx column.";
                return false;
            }

            var formulaProperty = metadata.GetType().GetProperty("FormulaDefinition");
            formulaDefinition = formulaProperty?.GetValue(metadata, null)?.ToString();
            if (string.IsNullOrWhiteSpace(formulaDefinition))
            {
                error = $"Error: Source column '{sourceEntity}:{sourceAttribute}' has an empty FormulaDefinition and cannot be cloned.";
                return false;
            }

            return true;
        }

        private static bool IsLogicalName(string value)
        {
            if (string.IsNullOrWhiteSpace(value) || value != value.ToLowerInvariant()) return false;
            if (!(char.IsLetter(value[0]) || value[0] == '_')) return false;
            return value.All(ch => char.IsLetterOrDigit(ch) || ch == '_');
        }

        private static (int sourceType, string error) ParseFormulaSourceType(string kind)
        {
            return kind switch
            {
                "" or "powerfx" or "power fx" => (3, null),
                "calculated" or "calc" => (1, null),
                "rollup" => (2, null),
                _ => (0, $"Error: Invalid formula_source_type '{kind}'.\nValid values: 'powerfx' (default), 'calculated', 'rollup'.")
            };
        }

        /// <summary>
        /// Validate that the requested formula kind is supported on the given attribute_type.
        /// Formula columns (Power Fx / Calculated / Rollup) are supported on: string, memo,
        /// integer, decimal, money, float, double, boolean, datetime. Not on bigint, lookup,
        /// customer, picklist, multipicklist, image, file.
        /// </summary>
        private static string ValidateFormulaAttributeType(string attributeType, string kind)
        {
            var formulaSupported = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
            {
                "string", "memo", "integer", "decimal", "money",
                "float", "double", "boolean", "datetime"
            };
            if (!formulaSupported.Contains(attributeType))
            {
                return
                    $"Error: formula_definition ({kind}) is not supported on attribute_type '{attributeType}'.\n" +
                    $"Formula columns (Power Fx/Calculated/Rollup) only work on: string, memo, integer, decimal, money, float, double, boolean, datetime.\n" +
                    $"Remove formula_definition/formula_source_type for '{attributeType}' columns.";
            }
            return null;
        }

        private static StringFormatName ResolveStringFormat(string format, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(format))
                return StringFormatName.Text;
            var result = format.Trim().ToLowerInvariant() switch
            {
                "email" => StringFormatName.Email,
                "url" => StringFormatName.Url,
                "phone" => StringFormatName.Phone,
                "textarea" => StringFormatName.TextArea,
                "tickersymbol" => StringFormatName.TickerSymbol,
                "richtext" => StringFormatName.RichText,
                "text" => StringFormatName.Text,
                _ => (StringFormatName)null
            };
            if (result == null)
                error = $"[Error] Invalid format '{format}'.\nValid values: 'Text' (default), 'Email', 'Url', 'Phone', 'TextArea', 'TickerSymbol', 'RichText'.";
            return result ?? StringFormatName.Text;
        }

        private static IntegerFormat ResolveIntegerFormat(string format, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(format))
                return IntegerFormat.None;
            var result = format.Trim().ToLowerInvariant() switch
            {
                "none" => (IntegerFormat?)IntegerFormat.None,
                "duration" => IntegerFormat.Duration,
                "timezone" => IntegerFormat.TimeZone,
                "language" => IntegerFormat.Language,
                "locale" => IntegerFormat.Locale,
                _ => null
            };
            if (result == null)
                error = $"[Error] Invalid format for integer '{format}'.\nValid values: 'None' (default), 'Duration', 'TimeZone', 'Language', 'Locale'.";
            return result ?? IntegerFormat.None;
        }

        private static MemoFormatName ResolveMemoFormat(string format, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(format))
                return MemoFormatName.Text;
            var result = format.Trim().ToLowerInvariant() switch
            {
                "text" => MemoFormatName.Text,
                "richtext" => MemoFormatName.RichText,
                _ => (MemoFormatName)null
            };
            if (result == null)
                error = $"[Error] Invalid format for memo '{format}'.\nValid values: 'Text' (default), 'RichText'.";
            return result ?? MemoFormatName.Text;
        }

        private sealed class OptionItem
        {
            public string Label { get; set; }
            public int? Value { get; set; }
            public string Color { get; set; }
            public int? State { get; set; }
        }

        private static (List<OptionItem> Items, string Error) ParseOptions(string optionsJson)
        {
            if (string.IsNullOrWhiteSpace(optionsJson))
                return (null, null);
            try
            {
                var items = JsonSerializer.Deserialize<List<OptionItem>>(optionsJson, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
                return (items, null);
            }
            catch (JsonException ex)
            {
                return (null, $"Invalid JSON: {ex.Message}");
            }
        }

        /// <summary>
        /// Applies a default option value to a single-select Picklist column.
        /// MultiSelectPicklist (multipicklist) does NOT support a default value in the Power Apps UI,
        /// so this method returns an error if default_value is supplied for a multi-select attribute.
        /// For local option sets the caller passes the known option values so we can validate membership.
        /// For global option sets the membership check is deferred to Dataverse (knownOptionValues = null).
        /// </summary>
        /// <returns>null on success (or when no default was supplied); an error message string otherwise.</returns>
        private static string ApplyPicklistDefaultValue(AttributeMetadata attr, string defaultValue, bool isMultiSelect, List<int?> knownOptionValues)
        {
            if (string.IsNullOrWhiteSpace(defaultValue))
                return null; // nothing to do

            if (isMultiSelect)
            {
                return
                    "Error: default_value is not supported for multipicklist columns. " +
                    "Multi-select option sets do not support a default value in the Power Apps UI. " +
                    "Omit default_value for multipicklist.";
            }

            // Parse the requested default value (single integer for single-select Picklist).
            if (!int.TryParse(defaultValue.Trim(), out var dv))
                return $"Error: Invalid default_value '{defaultValue.Trim()}'. Expected an integer option value (e.g. 100000002).";

            // Validate membership when the caller supplied the local option values.
            if (knownOptionValues != null && knownOptionValues.Count > 0)
            {
                var match = knownOptionValues.Any(v => v.HasValue && v.Value == dv);
                if (!match)
                    return
                        $"Error: default_value '{dv}' does not match any option in the local option set. " +
                        "default_value must equal one of the option values provided in 'options'.";
            }

            if (attr is PicklistAttributeMetadata plm)
                plm.DefaultFormValue = dv;
            else
                return "Error: default_value can only be applied to a Picklist (single-select) attribute.";

            return null;
        }

        private CallToolResult HandleException(Exception ex, string entityName, string attributeName, string solutionName)
        {
            var msg = ex.Message;

            if (msg.Contains("already exists", StringComparison.OrdinalIgnoreCase) ||
                msg.Contains("duplicate", StringComparison.OrdinalIgnoreCase))
            {
                return ErrorResult(
                    $"Error: Attribute '{attributeName}' already exists on entity '{entityName}'.\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_tables to inspect existing attributes, or choose a different name");
            }

            if (msg.Contains("entity", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return ErrorResult(
                    $"Error: Entity '{entityName}' not found.\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_tables to find the correct entity logical name");
            }

            if (msg.Contains("solution", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return ErrorResult(
                    $"Error: Solution '{solutionName}' not found.\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_solution_components to find valid solution names");
            }

            return ErrorResult($"Error: Failed to create attribute '{entityName}.{attributeName}'\nMessage: {msg}");
        }

        // ========== UPDATE MODE ==========

        private CallToolResult UpdateExistingAttribute(string entityName, string attributeName,
            AttributeMetadata metadata, string displayName, string description, string requiredLevel,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel,
            string addOptions, string updateOptions, string deleteOptions,
            bool? isAuditEnabled, bool? isValidForAdvancedFind, bool? isSecured, bool? isSortable, string behavior, int precisionSource,
            string defaultValue = "")
        {
            try
            {
                var changes = new List<string>();
                var structuredChanges = new Dictionary<string, UpdateAttributeChange>();

                // --- Generic property updates (all types) ---
                if (!string.IsNullOrWhiteSpace(displayName))
                {
                    var oldVal = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != displayName.Trim())
                    {
                        metadata.DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                        changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName.Trim()}\"");
                        structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = metadata.Description?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != description.Trim())
                    {
                        metadata.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                        changes.Add($"Description: \"{oldVal}\" -> \"{description.Trim()}\"");
                        structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description.Trim() };
                    }
                }

                // --- Five-flag update (RequiredLevel + 4 boolean flags) ---
                // Routed through the shared ColumnFlags type so the CREATE and UPDATE
                // paths use the SAME model (no separate ColumnUpdateFlags twin).
                // Validation of required_level stays here (early-error before the
                // ColumnFlags is built) so an invalid level is reported exactly as
                // before. TryApplyForUpdate only writes a flag when the caller
                // supplied it AND the new value differs from the current one; every
                // actual change is tracked into `changes` / `structuredChanges`.
                AttributeRequiredLevel? parsedRequiredLevel = null;
                if (!string.IsNullOrWhiteSpace(requiredLevel))
                {
                    parsedRequiredLevel = ParseRequiredLevel(requiredLevel);
                    if (!parsedRequiredLevel.HasValue)
                        return ErrorResult(
                            $"Error: Invalid required_level '{requiredLevel}'.\n" +
                            $"Valid values: 'None' (default), 'Recommended', 'Required'.");
                }

                // Use None as the placeholder when the caller omitted required_level;
                // RequiredLevelExplicit=false ensures TryApplyForUpdate skips writing it.
                var updateFlags = new ColumnFlags(
                    parsedRequiredLevel ?? AttributeRequiredLevel.None,
                    isAuditEnabled,
                    isValidForAdvancedFind,
                    isSecured,
                    isSortable,
                    requiredLevelExplicit: parsedRequiredLevel.HasValue);
                updateFlags.TryApplyForUpdate(metadata, changes, structuredChanges);

                // --- Type-specific property updates ---
                var typeError = ApplyTypeSpecificUpdates(metadata, maxLength, minValue, maxValue, precision, format,
                    trueLabel, falseLabel, behavior, precisionSource, changes, structuredChanges);
                if (typeError != null)
                    return ErrorResult(typeError);

                // --- Picklist / Boolean default value update ---
                if (!string.IsNullOrWhiteSpace(defaultValue))
                {
                    if (metadata is PicklistAttributeMetadata plmUpdate)
                    {
                        if (!int.TryParse(defaultValue.Trim(), out var dvInt))
                            return ErrorResult($"Error: Invalid default_value '{defaultValue.Trim()}'. Expected an integer option value (e.g. 100000001).");
                        var oldDv = plmUpdate.DefaultFormValue?.ToString() ?? "(none)";
                        if (plmUpdate.DefaultFormValue != dvInt)
                        {
                            plmUpdate.DefaultFormValue = dvInt;
                            changes.Add($"DefaultFormValue: {oldDv} -> {dvInt}");
                            structuredChanges["defaultFormValue"] = new UpdateAttributeChange { OldValue = oldDv, NewValue = dvInt.ToString() };
                        }
                    }
                    else if (metadata is BooleanAttributeMetadata boolDefaultMeta)
                    {
                        var dv = defaultValue.Trim().ToLowerInvariant();
                        bool newBoolDefault;
                        if (dv == "true" || dv == "1")       newBoolDefault = true;
                        else if (dv == "false" || dv == "0") newBoolDefault = false;
                        else
                            return ErrorResult(
                                $"Error: Invalid default_value '{defaultValue.Trim()}' for boolean. " +
                                "Expected 'true', 'false', '1', or '0'.");
                        var oldBoolDv = boolDefaultMeta.DefaultValue?.ToString()?.ToLowerInvariant() ?? "(none)";
                        if (boolDefaultMeta.DefaultValue != newBoolDefault)
                        {
                            boolDefaultMeta.DefaultValue = newBoolDefault;
                            changes.Add($"DefaultValue: {oldBoolDv} -> {newBoolDefault.ToString().ToLowerInvariant()}");
                            structuredChanges["defaultValue"] = new UpdateAttributeChange { OldValue = oldBoolDv, NewValue = newBoolDefault.ToString().ToLowerInvariant() };
                        }
                    }
                    else if (metadata is MultiSelectPicklistAttributeMetadata)
                    {
                        return ErrorResult(
                            "Error: default_value is not supported for multipicklist columns. " +
                            "Multi-select option sets do not support a default value in the Power Apps UI. " +
                            "Omit default_value for multipicklist.");
                    }
                    else
                    {
                        return ErrorResult(
                            $"Error: default_value is only supported for Picklist (integer) and Boolean ('true'/'false') columns, but '{attributeName}' is {GetAttributeTypeName(metadata)}.");
                    }
                }

                var hasOptionRequests = !string.IsNullOrWhiteSpace(addOptions) ||
                    !string.IsNullOrWhiteSpace(updateOptions) ||
                    !string.IsNullOrWhiteSpace(deleteOptions);

                // Plan the complete mutation before any metadata, Web API, option,
                // or publish request. This also covers option-only updates: they
                // must not fall through to PublishIfNeeded below.
                if (_options.DryRun && (changes.Count > 0 || hasOptionRequests))
                {
                    var plannedParts = new List<string>(changes);
                    if (!string.IsNullOrWhiteSpace(addOptions)) plannedParts.Add("add options");
                    if (!string.IsNullOrWhiteSpace(updateOptions)) plannedParts.Add("update options");
                    if (!string.IsNullOrWhiteSpace(deleteOptions)) plannedParts.Add("delete options");

                    return DryRun(
                        $"Would UPDATE column '{entityName}.{attributeName}' with changes: {string.Join(", ", plannedParts)}",
                        new UpsertColumnResult
                        {
                            EntityName = entityName,
                            AttributeName = attributeName,
                            LogicalName = attributeName,
                            AttributeType = GetAttributeTypeName(metadata),
                            Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                            Status = "not_executed",
                            Published = false
                        });
                }

                // --- Execute metadata update (if any generic/type-specific changes) ---
                if (changes.Count > 0)
                {
                    var updateRequest = new UpdateAttributeRequest
                    {
                        EntityName = entityName,
                        Attribute = metadata,
                        MergeLabels = true
                    };
                    DataverseMutationExecutor.Execute(_context, _serviceClient, updateRequest);

                    // WORKAROUND: UpdateAttributeRequest silently fails to persist
                    // RequiredLevel on an existing attribute (the request succeeds
                    // but Dataverse does not write the new value). This is a
                    // long-standing Dataverse behavior. The Web API PUT path
                    // (EntityDefinitions/Attributes) DOES persist RequiredLevel
                    // correctly, so when the caller explicitly requested a
                    // RequiredLevel change we follow up with a Web API PUT to
                    // force the change to stick.
                    if (structuredChanges.TryGetValue("requiredLevel", out var rlChange))
                    {
                        var newLevelEnum = ParseRequiredLevel(rlChange.NewValue);
                        if (newLevelEnum.HasValue)
                        {
                            var levelName = newLevelEnum.Value.ToString();
                            var route = $"EntityDefinitions(LogicalName='{entityName}')/Attributes(LogicalName='{attributeName}')";
                            var putBody = $"{{\"LogicalName\":\"{attributeName}\",\"RequiredLevel\":{{\"Value\":\"{levelName}\",\"CanBeChanged\":true}}}}";
                            try
                            {
                                DataverseWebApiMutationExecutor.Execute(
                                    _context,
                                    _serviceClient,
                                    HttpMethod.Put,
                                    route,
                                    putBody,
                                    null,
                                    "application/json");
                            }
                            catch (InvalidOperationException) when (_context.MutationsBlocked)
                            {
                                throw;
                            }
                            catch
                            {
                                // Non-fatal — the UpdateAttributeRequest already ran.
                                // The RequiredLevel may not have persisted, but we
                                // don't want to mask other successful changes.
                            }
                        }
                    }
                }

                // --- Picklist option management ---
                var optionResults = ManagePicklistOptions(entityName, attributeName, metadata,
                    addOptions, updateOptions, deleteOptions);

                // --- StatusCode (statuscode / StatusType) option management ---
                if (metadata is StatusAttributeMetadata)
                {
                    var statusResults = ManageStatusCodeOptions(entityName, attributeName, metadata,
                        addOptions, updateOptions, deleteOptions);
                    optionResults.AddRange(statusResults);
                }

                if (changes.Count == 0 && optionResults.Count == 0)
                    return ErrorResult(
                        $"Error: No changes specified for '{entityName}.{attributeName}'.\n" +
                        $"Provide at least one updatable parameter: display_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, true_label, false_label, add_options, update_options, delete_options, default_value (picklist/boolean), is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, or statuscode add/update/delete_options (for statuscode attribute).");

                // --- Publish ---
                var published = PublishIfNeeded(entityName);

                // --- Format output ---
                var typeName = GetAttributeTypeName(metadata);
                var sb = new StringBuilder(512);
                sb.AppendLine($"[AttributeUpdated] {entityName}.{attributeName}");
                sb.AppendLine($"Type: {typeName}");

                if (changes.Count > 0)
                {
                    sb.AppendLine("Changes:");
                    foreach (var c in changes)
                        sb.AppendLine($"  {c}");
                }

                foreach (var or in optionResults)
                    sb.AppendLine(or);

                sb.AppendLine($"Published: {(published ? "yes" : "no")}");

                var structured = new UpsertColumnResult
                {
                    EntityName = entityName,
                    AttributeName = attributeName,
                    AttributeType = typeName,
                    Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                    OptionsAdded = optionResults.Where(r => r.StartsWith("OptionsAdded:")).Select(r => r.Substring("OptionsAdded: ".Length)).ToList(),
                    OptionsRenamed = optionResults.Where(r => r.StartsWith("OptionsRenamed:")).Select(r => r.Substring("OptionsRenamed: ".Length)).ToList(),
                    OptionsDeleted = optionResults.Where(r => r.StartsWith("OptionsDeleted:")).Select(r => r.Substring("OptionsDeleted: ".Length)).ToList(),
                    Published = published,
                    Status = "updated"
                };
                if (structured.OptionsAdded?.Count == 0) structured.OptionsAdded = null;
                if (structured.OptionsRenamed?.Count == 0) structured.OptionsRenamed = null;
                if (structured.OptionsDeleted?.Count == 0) structured.OptionsDeleted = null;

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
                        $"Error: Entity or attribute not found: '{entityName}.{attributeName}'.\n" +
                        $"Message: {msg}\n" +
                        "Tip: Use get_tables to find the correct names");
                }
                return ErrorResult($"Error: Failed to update attribute '{entityName}.{attributeName}'\nMessage: {msg}");
            }
        }

        // ========== Type-Specific Updates ==========

        private string ApplyTypeSpecificUpdates(AttributeMetadata metadata,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel, string behavior, int precisionSource,
            List<string> changes, Dictionary<string, UpdateAttributeChange> structuredChanges)
        {
            if (metadata is StringAttributeMetadata stringMeta)
            {
                if (maxLength > 0)
                {
                    var oldVal = stringMeta.MaxLength?.ToString() ?? "";
                    if (maxLength > 4000) maxLength = 4000;
                    stringMeta.MaxLength = maxLength;
                    changes.Add($"MaxLength: {oldVal} -> {maxLength}");
                    structuredChanges["maxLength"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = maxLength.ToString() };
                }
                if (!string.IsNullOrWhiteSpace(format))
                {
                    var oldVal = stringMeta.FormatName?.Value ?? "Text";
                    var resolved = ResolveStringFormat(format, out var formatError);
                    if (formatError != null) return formatError;
                    stringMeta.FormatName = resolved;
                    changes.Add($"Format: {oldVal} -> {stringMeta.FormatName.Value}");
                    structuredChanges["format"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = stringMeta.FormatName.Value };
                }
                return null;
            }

            if (metadata is MemoAttributeMetadata memoMeta)
            {
                if (maxLength > 0)
                {
                    var oldVal = memoMeta.MaxLength?.ToString() ?? "";
                    if (maxLength > 1048576) maxLength = 1048576;
                    memoMeta.MaxLength = maxLength;
                    changes.Add($"MaxLength: {oldVal} -> {maxLength}");
                    structuredChanges["maxLength"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = maxLength.ToString() };
                }
                return null;
            }

            if (metadata is IntegerAttributeMetadata intMeta)
            {
                if (minValue.HasValue)
                {
                    var oldVal = intMeta.MinValue?.ToString() ?? "";
                    intMeta.MinValue = (int)minValue.Value;
                    changes.Add($"MinValue: {oldVal} -> {(int)minValue.Value}");
                    structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = ((int)minValue.Value).ToString() };
                }
                if (maxValue.HasValue)
                {
                    var oldVal = intMeta.MaxValue?.ToString() ?? "";
                    intMeta.MaxValue = (int)maxValue.Value;
                    changes.Add($"MaxValue: {oldVal} -> {(int)maxValue.Value}");
                    structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = ((int)maxValue.Value).ToString() };
                }
                return null;
            }

            if (metadata is DecimalAttributeMetadata decMeta)
            {
                if (minValue.HasValue) { var o = decMeta.MinValue?.ToString() ?? ""; decMeta.MinValue = (decimal)minValue.Value; changes.Add($"MinValue: {o} -> {(decimal)minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = ((decimal)minValue.Value).ToString() }; }
                if (maxValue.HasValue) { var o = decMeta.MaxValue?.ToString() ?? ""; decMeta.MaxValue = (decimal)maxValue.Value; changes.Add($"MaxValue: {o} -> {(decimal)maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = ((decimal)maxValue.Value).ToString() }; }
                if (precision >= 0) { var o = decMeta.Precision?.ToString() ?? ""; if (precision > 10) precision = 10; decMeta.Precision = precision; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                return null;
            }

            if (metadata is MoneyAttributeMetadata moneyMeta)
            {
                if (minValue.HasValue) { var o = moneyMeta.MinValue?.ToString() ?? ""; moneyMeta.MinValue = minValue.Value; changes.Add($"MinValue: {o} -> {minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = minValue.Value.ToString() }; }
                if (maxValue.HasValue) { var o = moneyMeta.MaxValue?.ToString() ?? ""; moneyMeta.MaxValue = maxValue.Value; changes.Add($"MaxValue: {o} -> {maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = maxValue.Value.ToString() }; }
                if (precision >= 0) { var o = moneyMeta.Precision?.ToString() ?? ""; if (precision > 4) precision = 4; moneyMeta.Precision = precision; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                if (precisionSource >= 0 && precisionSource <= 2) { var o = moneyMeta.PrecisionSource?.ToString() ?? ""; moneyMeta.PrecisionSource = precisionSource; changes.Add($"PrecisionSource: {o} -> {precisionSource}"); structuredChanges["precisionSource"] = new UpdateAttributeChange { OldValue = o, NewValue = precisionSource.ToString() }; }
                return null;
            }

            if (metadata is DoubleAttributeMetadata dblMeta)
            {
                if (minValue.HasValue) { var o = dblMeta.MinValue?.ToString() ?? ""; dblMeta.MinValue = minValue.Value; changes.Add($"MinValue: {o} -> {minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = minValue.Value.ToString() }; }
                if (maxValue.HasValue) { var o = dblMeta.MaxValue?.ToString() ?? ""; dblMeta.MaxValue = maxValue.Value; changes.Add($"MaxValue: {o} -> {maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = maxValue.Value.ToString() }; }
                if (precision >= 0) { var o = dblMeta.Precision?.ToString() ?? ""; if (precision > 10) precision = 10; dblMeta.Precision = precision; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                return null;
            }

            if (metadata is BooleanAttributeMetadata boolMeta)
            {
                if (!string.IsNullOrWhiteSpace(trueLabel))
                {
                    var oldVal = boolMeta.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label ?? "Yes";
                    boolMeta.OptionSet.TrueOption.Label = new Label(trueLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                    changes.Add($"TrueLabel: \"{oldVal}\" -> \"{trueLabel.Trim()}\"");
                    structuredChanges["trueLabel"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = trueLabel.Trim() };
                }
                if (!string.IsNullOrWhiteSpace(falseLabel))
                {
                    var oldVal = boolMeta.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label ?? "No";
                    boolMeta.OptionSet.FalseOption.Label = new Label(falseLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                    changes.Add($"FalseLabel: \"{oldVal}\" -> \"{falseLabel.Trim()}\"");
                    structuredChanges["falseLabel"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = falseLabel.Trim() };
                }
                return null;
            }

            if (metadata is DateTimeAttributeMetadata dtMeta)
            {
                if (!string.IsNullOrWhiteSpace(behavior))
                {
                    var newBehavior = ResolveDateTimeBehavior(behavior, out var behaviorErr);
                    if (behaviorErr != null) return behaviorErr;
                    var oldVal = dtMeta.DateTimeBehavior?.Value ?? "UserLocal";
                    dtMeta.DateTimeBehavior = newBehavior;
                    changes.Add($"Behavior: {oldVal} -> {newBehavior.Value}");
                    structuredChanges["behavior"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newBehavior.Value };
                    // DateOnly behavior forces DateOnly format
                    if (newBehavior.Value == DateTimeBehavior.DateOnly.Value && dtMeta.Format != DateTimeFormat.DateOnly)
                    {
                        var oldFormat = dtMeta.Format?.ToString() ?? "DateAndTime";
                        dtMeta.Format = DateTimeFormat.DateOnly;
                        changes.Add($"Format: {oldFormat} -> DateOnly (forced by DateOnly behavior)");
                        structuredChanges["format"] = new UpdateAttributeChange { OldValue = oldFormat, NewValue = "DateOnly" };
                    }
                }
                if (!string.IsNullOrWhiteSpace(format))
                {
                    // Skip if already set by behavior enforcement above
                    if (!structuredChanges.ContainsKey("format"))
                    {
                        var oldVal = dtMeta.Format?.ToString() ?? "DateAndTime";
                        var newFormat = format.Trim().Equals("DateOnly", StringComparison.OrdinalIgnoreCase)
                            ? DateTimeFormat.DateOnly : DateTimeFormat.DateAndTime;
                        dtMeta.Format = newFormat;
                        changes.Add($"Format: {oldVal} -> {newFormat}");
                        structuredChanges["format"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = newFormat.ToString() };
                    }
                }
            }
            return null;
        }

        // ========== Picklist Option Management ==========

        private List<string> ManagePicklistOptions(string entityName, string attributeName,
            AttributeMetadata metadata, string addOptionsJson, string updateOptionsJson, string deleteOptionsJson)
        {
            var results = new List<string>();
            var isPicklist = metadata is PicklistAttributeMetadata || metadata is MultiSelectPicklistAttributeMetadata;
            if (!isPicklist)
            {
                // StatusAttributeMetadata (statuscode) is handled by ManageStatusCodeOptions — skip silently here.
                if (metadata is not StatusAttributeMetadata &&
                    (!string.IsNullOrWhiteSpace(addOptionsJson) || !string.IsNullOrWhiteSpace(updateOptionsJson) || !string.IsNullOrWhiteSpace(deleteOptionsJson)))
                    results.Add($"[Warning] Option management ignored — attribute type is {GetAttributeTypeName(metadata)}, not Picklist/MultiSelectPicklist/Status");
                return results;
            }

            // Detect global vs local option set
            OptionSetMetadata optionSetMeta = null;
            if (metadata is PicklistAttributeMetadata plm)
                optionSetMeta = plm.OptionSet;
            else if (metadata is MultiSelectPicklistAttributeMetadata msp)
                optionSetMeta = msp.OptionSet;

            var isGlobal = optionSetMeta?.IsGlobal == true;
            var optionSetName = optionSetMeta?.Name;

            if (!string.IsNullOrWhiteSpace(addOptionsJson))
            {
                var (opts, parseError) = ParseOptions(addOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] add_options: {parseError}");
                else if (opts != null)
                    foreach (var opt in opts)
                    {
                        var req = new InsertOptionValueRequest { Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_serviceClient)) };
                        if (isGlobal && !string.IsNullOrWhiteSpace(optionSetName))
                            req.OptionSetName = optionSetName;
                        else
                        {
                            req.EntityLogicalName = entityName;
                            req.AttributeLogicalName = attributeName;
                        }
                        if (opt.Value.HasValue) req.Value = opt.Value.Value;
                        if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hexAdd))
                            req.Parameters["Color"] = hexAdd;
                        var resp = (InsertOptionValueResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add(string.IsNullOrWhiteSpace(opt.Color)
                            ? $"OptionsAdded: {opt.Label} ({resp.NewOptionValue})"
                            : $"OptionsAdded: {opt.Label} ({resp.NewOptionValue}) [{opt.Color}]");
                    }
            }

            if (!string.IsNullOrWhiteSpace(updateOptionsJson))
            {
                var (opts, parseError) = ParseOptions(updateOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] update_options: {parseError}");
                else if (opts != null)
                    foreach (var opt in opts)
                    {
                        if (!opt.Value.HasValue) continue;
                        var req = new UpdateOptionValueRequest { Value = opt.Value.Value, Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_serviceClient)), MergeLabels = true };
                        if (isGlobal && !string.IsNullOrWhiteSpace(optionSetName))
                            req.OptionSetName = optionSetName;
                        else
                        {
                            req.EntityLogicalName = entityName;
                            req.AttributeLogicalName = attributeName;
                        }
                        if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hexUpd))
                            req.Parameters["Color"] = hexUpd;
                        DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add(string.IsNullOrWhiteSpace(opt.Color)
                            ? $"OptionsRenamed: {opt.Value.Value} -> \"{opt.Label}\""
                            : $"OptionsRenamed: {opt.Value.Value} -> \"{opt.Label}\" [{opt.Color}]");
                    }
            }

            if (!string.IsNullOrWhiteSpace(deleteOptionsJson))
            {
                var (values, parseError) = ParseDeleteValues(deleteOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] delete_options: {parseError}");
                else if (values != null)
                    foreach (var val in values)
                    {
                        var req = new DeleteOptionValueRequest { Value = val };
                        if (isGlobal && !string.IsNullOrWhiteSpace(optionSetName))
                            req.OptionSetName = optionSetName;
                        else
                        {
                            req.EntityLogicalName = entityName;
                            req.AttributeLogicalName = attributeName;
                        }
                        DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add($"OptionsDeleted: {val}");
                    }
            }

            return results;
        }

        // ========== StatusCode Option Management ==========

        private List<string> ManageStatusCodeOptions(string entityName, string attributeName,
            AttributeMetadata metadata, string addOptionsJson, string updateOptionsJson, string deleteOptionsJson)
        {
            var results = new List<string>();
            if (metadata is not StatusAttributeMetadata)
                return results;

            if (!string.IsNullOrWhiteSpace(addOptionsJson))
            {
                var (opts, parseError) = ParseOptions(addOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] add_options: {parseError}");
                else if (opts != null)
                    foreach (var opt in opts)
                    {
                        var stateValue = opt.State ?? 0;
                        var req = new InsertStatusValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_serviceClient)),
                            StateCode = stateValue
                        };
                        if (opt.Value.HasValue) req.Value = opt.Value.Value;
                        var resp = (InsertStatusValueResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add($"OptionsAdded: {opt.Label} ({resp.NewOptionValue}) [state={stateValue}]");
                    }
            }

            if (!string.IsNullOrWhiteSpace(updateOptionsJson))
            {
                var (opts, parseError) = ParseOptions(updateOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] update_options: {parseError}");
                else if (opts != null)
                    foreach (var opt in opts)
                    {
                        if (!opt.Value.HasValue) continue;
                        var req = new UpdateOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Value = opt.Value.Value,
                            Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_serviceClient)),
                            MergeLabels = true
                        };
                        DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add($"OptionsRenamed: {opt.Value.Value} -> \"{opt.Label}\"");
                    }
            }

            if (!string.IsNullOrWhiteSpace(deleteOptionsJson))
            {
                var (values, parseError) = ParseDeleteValues(deleteOptionsJson);
                if (parseError != null)
                    results.Add($"[Error] delete_options: {parseError}");
                else if (values != null)
                    foreach (var val in values)
                    {
                        var req = new DeleteOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Value = val
                        };
                        DataverseMutationExecutor.Execute(_context, _serviceClient, req);
                        results.Add($"OptionsDeleted: {val}");
                    }
            }

            return results;
        }

        private static string GetAttributeTypeName(AttributeMetadata metadata) => metadata switch
        {
            StringAttributeMetadata => "String",
            MemoAttributeMetadata => "Memo",
            IntegerAttributeMetadata => "Integer",
            BigIntAttributeMetadata => "BigInt",
            DecimalAttributeMetadata => "Decimal",
            MoneyAttributeMetadata => "Money",
            DoubleAttributeMetadata => "Float",
            BooleanAttributeMetadata => "Boolean",
            DateTimeAttributeMetadata => "DateTime",
            LookupAttributeMetadata => "Lookup",
            PicklistAttributeMetadata => "Picklist",
            MultiSelectPicklistAttributeMetadata => "MultiSelectPicklist",
            ImageAttributeMetadata => "Image",
            FileAttributeMetadata => "File",
            StatusAttributeMetadata => "Status",
            _ => metadata.AttributeTypeName?.Value ?? metadata.AttributeType?.ToString() ?? "Unknown"
        };

        private static (List<int> Values, string Error) ParseDeleteValues(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return (null, null);
            try { return (JsonSerializer.Deserialize<List<int>>(json), null); }
            catch (JsonException ex) { return (null, $"Invalid JSON: {ex.Message}"); }
        }

        private static (string ResolvedName, string Error) ResolveEntityName(ServiceClient serviceClient, string entityName)
        {
            var resolved = DisplayNameFirstResolver.ResolveEntity(serviceClient, entityName, "upsert_column");
            if (resolved.IsSuccess)
                return (resolved.Value.LogicalName, null);

            return (null, $"Error: {resolved.Error}");

        }

        private CallToolResult ErrorResult(string message) => Error(message);

        private CallToolResult DryRunCreatePreview(string entityName, string logicalName, string schemaName,
            AttributeMetadata attribute, string displayName, AttributeRequiredLevel reqLevel, string solutionName)
            => DryRunCreatePreview(entityName, logicalName, schemaName, GetAttributeTypeName(attribute), displayName, reqLevel, solutionName);

        private CallToolResult DryRunCreatePreview(string entityName, string logicalName, string schemaName,
            string typeName, string displayName, AttributeRequiredLevel reqLevel, string solutionName)
            => DryRun(
                $"Would CREATE {typeName} column '{logicalName}' on entity '{entityName}'.",
                new UpsertColumnResult
                {
                    EntityName = entityName,
                    AttributeName = logicalName,
                    LogicalName = logicalName,
                    SchemaName = schemaName,
                    AttributeType = typeName,
                    DisplayName = displayName,
                    RequiredLevel = reqLevel.ToString(),
                    SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName,
                    CreateMode = "MetadataCreateRequest",
                    IsAddToSolution = !string.IsNullOrWhiteSpace(solutionName),
                    AddToSolutionMethod = string.IsNullOrWhiteSpace(solutionName) ? "none" : "SolutionUniqueName",
                    Status = "not_executed",
                    Published = false
                });

        private static CallToolResult AppendFormulaCloneWarning(CallToolResult result, string warning)
        {
            if (result?.Content != null && result.Content.Count > 0 && result.Content[0] is TextContentBlock text)
            {
                result.Content[0] = new TextContentBlock
                {
                    Text = $"[FormulaCloneWarning] {warning}\n\n{text.Text}"
                };
            }
            return result;
        }

    }
}
