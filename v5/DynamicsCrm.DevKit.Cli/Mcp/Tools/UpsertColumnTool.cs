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
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertColumnTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public UpsertColumnTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "upsert_column", Title = "Create or update a table column",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertColumnResult)),
        Description(
            "Dataverse column (attribute) — auto-detect create vs update. Types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file.\n\n" +

            "UPDATE (column exists): pass logical_name that matches an existing attribute. attribute_type ignored (immutable). picklist: use add/update/delete_options. Omit params to keep current.\n\n" +

            "CREATE (no attribute): need attribute_type + display_name.\n" +
            "- schema_name: if provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Must start with the publisher prefix (e.g. 'devkit_InvoiceLineId'). Create only — ignored on update.\n" +
            "- logical_name: if provided, used AS-IS as the lowercase logical name. Must start with the publisher prefix and be the lowercase form of schema_name (e.g. 'devkit_invoicelineid'). Create only — ignored on update.\n" +
            "- If both omitted: SchemaName is auto-derived from display_name via DataverseNamer, logical name derives from schemaName.ToLowerInvariant().\n" +
            "- lookup: needs lookup_target (auto-creates 1:N)\n" +
            "- customer: polymorphic (account+contact), no lookup_target\n" +
            "- picklist/multipicklist: options JSON or global_optionset_name\n" +
            "- formula column (PowerFx/Calculated/Rollup): pass formula_definition (+ formula_source_type). Works on string/memo/integer/decimal/money/float/boolean/datetime. Clone from get_tables `formulaDefinition` verbatim.\n\n" +

            "CREATE uses the publisher prefix from solution_name directly. confirmed_prefix is optional and only validates the resolved prefix when supplied. Either solution_name or an explicit prefixed schema_name/logical_name must be supplied so the publisher prefix is known.\n\n" +

            "WHEN TO USE:\n" +
            "- Create new attribute on an existing table (need attribute_type + display_name)\n" +
            "- Update mutable metadata, format, required_level, picklist options\n" +
            "- Add/rename/remove options on an existing picklist via add_options/update_options/delete_options\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- entity_name resolves Display Name contains first, then logical/schema name contains. Ambiguity returns IsError=true with candidates.\n" +
            "- logical_name (UPDATE) follows the same Display Name first rule. lookup_target, global_optionset_name, solution_name where applicable.")]
        public CallToolResult upsert_column(
            [Description("Logical name (e.g. 'account').")] string entity_name,
            [Description("Logical name of the existing attribute to update (e.g. 'new_priority'). For CREATE: optional lowercase override of logical name; if omitted derives from schema_name/display_name. Must start with publisher prefix.")] string logical_name,
            [Description("string/memo/integer/bigint/decimal/money/float/boolean/datetime/lookup/customer/picklist/multipicklist/image/file. (immutable on update)")] string attribute_type,
            [Description("Required: create.")] string display_name,
            [Description("Required for CREATE when schema_name/logical_name have no prefix. Resolves publisher prefix and adds the attribute to the solution.")] string solution_name = "",
            [Description("Optional prefix validation. If supplied, it must match the solution publisher prefix.")] string confirmed_prefix = "",
            [Description("")] string description = "",
            [Description("None/Recommended/Required. [update: omit=keep]")] string required_level = "",
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
            [Description("picklist update: JSON array — options to add. Optional 'color' field: {\"label\":\"New\",\"value\":100000003,\"color\":\"#FF0000\"}.")] string add_options = "",
            [Description("picklist update: JSON array — options to rename. Optional 'color' field: {\"label\":\"NewLabel\",\"value\":100000000,\"color\":\"#FF0000\"}.")] string update_options = "",
            [Description("picklist update: JSON array of integer values to remove.")] string delete_options = "",
            [Description("[update only] Enable audit on this column.")] bool? is_audit_enabled = null,
            [Description("[update only] Show column in Advanced Find.")] bool? is_valid_for_advanced_find = null,
            [Description("[update only] Enable field-level security.")] bool? is_secured = null,
            [Description("[update only] Make column sortable in views.")] bool? is_sortable = null,
            [Description("picklist/boolean create: default option value. Picklist: single integer value (e.g. 100000002) — must match one of the options. Boolean: 'true'/'false' or '1'/'0'. Not supported on multipicklist.")] string default_value = "",
            [Description("SchemaName for the new column (e.g. 'devkit_InvoiceLineId'). If provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Formula column (PowerFx/Calculated/Rollup). Create only. Pass the value from get_tables `formulaDefinition` verbatim (may be 'gz:'-prefixed gzip+base64; decompressed automatically). For Power Fx use plain Power Fx text. Clones the field's computed/rollup definition.")] string formula_definition = "",
            [Description("Formula kind for formula_definition: 'powerfx' (default), 'calculated', 'rollup'. Required when formula_definition is a Calculated/Rollup XAML payload copied from get_tables. Ignored without formula_definition.")] string formula_source_type = "",
            [Description("Source (owner) entity logical name when cloning a Calculated/Rollup formula column from another entity (e.g. when copying field 40/41 from all_in_one to all_allinoneclone3). Recommended: Dataverse embeds the source entity in the formula XAML relationship key (relatedlinked_<owner>_<Rel>) and SetAttributeValue DisplayName; providing the explicit source entity name avoids ambiguity when the owner name itself contains underscores (e.g. 'all_in_one'). When empty, the source is discovered from the XAML. Only used for calculated/rollup formula clones; ignored otherwise.")] string source_entity_name = "")
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
                var attributeResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, logical_name, "upsert_column");
                if (attributeResolve.IsSuccess)
                {
                    existingMetadata = attributeResolve.Value;
                    logical_name = existingMetadata.LogicalName;
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
                return UpdateExistingAttribute(entity_name, logical_name, existingMetadata,
                    display_name, description, required_level, max_length, min_value, max_value,
                    precision, format, true_label, false_label,
                    add_options, update_options, delete_options,
                    is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, behavior, precision_source);
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
            // formula_definition may be a 'gz:'-prefixed gzip+base64 payload copied verbatim
            // from get_tables `formulaDefinition`; decompress it. Plain text (Power Fx) is
            // used directly. Only supported on a subset of attribute types (see validation).
            FormulaColumnSpec formulaSpec = null;
            if (!string.IsNullOrWhiteSpace(formula_definition))
            {
                var resolvedFormula = FormulaCompressionHelper.Decompress(formula_definition.Trim());
                var kind = string.IsNullOrWhiteSpace(formula_source_type) ? "powerfx" : formula_source_type.Trim().ToLowerInvariant();
                var (sourceTypeVal, kindErr) = ParseFormulaSourceType(kind);
                if (kindErr != null) return ErrorResult(kindErr);

                var formulaCompatErr = ValidateFormulaAttributeType(attribute_type, kind);
                if (formulaCompatErr != null) return ErrorResult(formulaCompatErr);

                // For Calculated (and Rollup) the XAML embeds the source entity name in
                // EntityName="..." attributes. When cloning to a different entity, those
                // references must be rewritten to the target entity or Dataverse stores
                // the formula verbatim and the Power Apps editor can no longer resolve
                // the return branches (UI shows only the if/condition step). Power Fx
                // plain text has no entity reference, so it is used as-is.
                if (kind == "calculated" || kind == "rollup")
                {
                    // When cloning a Calculated/Rollup formula XAML across entities, the
                    // source (owner) entity name embedded in the XAML must be rewritten to
                    // the target entity. Pass an explicit source_entity_name when the caller
                    // knows it — this is unambiguous and the recommended path (the XAML
                    // relationship-key split is ambiguous when the owner name itself contains
                    // underscores). When omitted, the helper discovers the source from the
                    // XAML as a fallback.
                    var sourceEntity = string.IsNullOrWhiteSpace(source_entity_name)
                        ? null
                        : source_entity_name.Trim();
                    var rewritten = FormulaCompressionHelper.RewriteFormulaEntityReferences(
                        resolvedFormula, sourceEntity, entity_name, out var didRewrite);
                    if (didRewrite)
                        resolvedFormula = rewritten;
                }

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, resolvedFormula, kind);
            }
            else if (!string.IsNullOrWhiteSpace(formula_source_type))
            {
                return ErrorResult(
                    "Error: formula_source_type was provided without formula_definition.\n" +
                    "formula_source_type is only meaningful together with formula_definition.");
            }

            CallToolResult CreateTypedColumn(AttributeMetadata _ = null)
            {
                switch (attribute_type)
                {
                    case "string":
                        return CreateStringAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 100 : max_length, format, effectiveSolutionName, formulaSpec);
                    case "memo":
                        return CreateMemoAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 2000 : max_length, format, effectiveSolutionName, formulaSpec);
                    case "integer":
                        return CreateIntegerAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, format, effectiveSolutionName, formulaSpec);
                    case "bigint":
                        return CreateBigIntAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, effectiveSolutionName);
                    case "decimal":
                        return CreateDecimalAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, effectiveSolutionName, formulaSpec);
                    case "money":
                        return CreateMoneyAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, precision_source, effectiveSolutionName, formulaSpec);
                    case "float":
                    case "double":
                        return CreateFloatAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, effectiveSolutionName, formulaSpec);
                    case "boolean":
                        return CreateBooleanAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, true_label, false_label, effectiveSolutionName, formulaSpec, default_value);
                    case "datetime":
                        return CreateDateTimeAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, format, behavior, effectiveSolutionName, formulaSpec);
                    case "lookup":
                        return CreateLookupAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, lookup_target, lookup_relationship_name, prefix, effectiveSolutionName);
                    case "customer":
                        return CreateCustomerAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, prefix, effectiveSolutionName);
                    case "picklist":
                        return CreatePicklistAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, options, global_optionset_name, false, effectiveSolutionName, default_value);
                    case "multipicklist":
                        return CreatePicklistAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, options, global_optionset_name, true, effectiveSolutionName, default_value);
                    case "image":
                        return CreateImageAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, effectiveSolutionName);
                    case "file":
                        return CreateFileAttribute(entity_name, logical_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 32768 : max_length, effectiveSolutionName);
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
                // Calculated/Rollup formula clone fallback: if attaching the formula XAML
                // caused Dataverse to reject the create (e.g. entity reference rewrite was
                // not enough, or the XAML references attributes/relationships that do not
                // exist on the target entity), retry the create with an EMPTY formula — the
                // column is still created as a Calculated/Rollup field, but with an empty
                // body so the end-user can open the Power Apps editor and define the formula
                // themselves. Without this fallback the whole column create would fail.
                if (formulaSpec != null && (formulaSpec.KindName == "calculated" || formulaSpec.KindName == "rollup"))
                {
                    var fallbackSpec = new FormulaColumnSpec(formulaSpec.SourceType, null, formulaSpec.KindName);
                    formulaSpec = fallbackSpec;
                    try
                    {
                        var fallbackResult = CreateTypedColumn();
                    // Surface the original error to the caller as a warning so they know
                    // the formula did not round-trip and must be redefined in the UI.
                    var kindLabel = formulaSpec.SourceType == 1 ? "Calculated" : "Rollup";
                    return AppendFormulaCloneWarning(fallbackResult,
                        $"Calculated/Rollup formula did not round-trip cleanly to entity '{entity_name}' (Dataverse rejected the rewritten XAML). " +
                        $"Column was created as an empty {kindLabel} field. " +
                        "Open the column in the Power Apps editor and define the formula manually. " +
                        $"Original error: {ex.Message}");
                    }
                    catch (Exception innerEx)
                    {
                        // Even the empty-formula fallback failed — defer to the generic handler.
                        return HandleException(innerEx is not null ? innerEx : ex, entity_name, logical_name, effectiveSolutionName);
                    }
                }
                return HandleException(ex, entity_name, logical_name, effectiveSolutionName);
            }
        }

        // --- String ---
        private CallToolResult CreateStringAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName, FormulaColumnSpec formula = null)
        {
            if (maxLength < 1) maxLength = 100;
            if (maxLength > 4000) maxLength = 4000;

            var resolvedFormat = ResolveStringFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);

            var attr = new StringAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxLength = maxLength,
                FormatName = resolvedFormat,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "String", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            sb.AppendLine($"Format: {attr.FormatName?.Value ?? "Text"}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName, FormulaColumnSpec formula = null)
        {
            if (maxLength < 1) maxLength = 2000;
            if (maxLength > 1048576) maxLength = 1048576;

            var memoFormat = ResolveMemoFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);
            var attr = new MemoAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxLength = maxLength,
                FormatName = memoFormat,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "Memo", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, string format, string solutionName, FormulaColumnSpec formula = null)
        {
            var resolvedFormat = ResolveIntegerFormat(format, out var formatError);
            if (formatError != null) return ErrorResult(formatError);

            var attr = new IntegerAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Format = resolvedFormat,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = (int)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (int)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "Integer", displayName, reqLevel);
            if (minValue.HasValue) sb.AppendLine($"MinValue: {(int)minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {(int)maxValue.Value}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName, FormulaColumnSpec formula = null)
        {
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DecimalAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = (decimal)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (decimal)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "Decimal", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, int precisionSource, string solutionName, FormulaColumnSpec formula = null)
        {
            if (precision < 0) precision = 2;
            if (precision > 4) precision = 4;
            if (precisionSource < 0 || precisionSource > 2) precisionSource = 0;

            var attr = new MoneyAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                PrecisionSource = precisionSource,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var precisionSourceLabel = precisionSource switch { 0 => "Attribute", 1 => "Organization", 2 => "Currency", _ => precisionSource.ToString() };
            var sb = FormatHeader(entityName, logicalName, "Money", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            sb.AppendLine($"PrecisionSource: {precisionSource} ({precisionSourceLabel})");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName, FormulaColumnSpec formula = null)
        {
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DoubleAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "Float", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string trueLabel, string falseLabel, string solutionName, FormulaColumnSpec formula = null, string defaultValue = null)
        {
            if (string.IsNullOrWhiteSpace(trueLabel)) trueLabel = "Yes";
            if (string.IsNullOrWhiteSpace(falseLabel)) falseLabel = "No";

            var attr = new BooleanAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                OptionSet = new BooleanOptionSetMetadata(
                    new OptionMetadata(new Label(trueLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)), 1),
                    new OptionMetadata(new Label(falseLabel.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)), 0)),
                IsAuditEnabled = new BooleanManagedProperty(true)
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var sb = FormatHeader(entityName, logicalName, "Boolean", displayName, reqLevel);
            sb.AppendLine($"TrueLabel: {trueLabel.Trim()}");
            sb.AppendLine($"FalseLabel: {falseLabel.Trim()}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string format, string behavior, string solutionName, FormulaColumnSpec formula = null)
        {
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
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Format = dateFormat,
                DateTimeBehavior = dtBehavior,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

            var behaviorName = dtBehavior.Value;
            var sb = FormatHeader(entityName, logicalName, "DateTime", displayName, reqLevel);
            sb.AppendLine($"Format: {dateFormat}");
            sb.AppendLine($"Behavior: {behaviorName}");
            AppendFormulaLine(sb, formula);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string lookupTarget, string relationshipName, string prefix, string solutionName)
        {
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
                return CreatePolymorphicLookupAttribute(entityName, logicalName, schemaName, displayName, description, reqLevel, targets.ToArray(), prefix, solutionName);

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
                    DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                    IsAuditEnabled = new BooleanManagedProperty(true)
                }
            };
            if (!string.IsNullOrWhiteSpace(description))
                request.Lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunResult($"Would CREATE lookup column '{logicalName}' on entity '{entityName}'.");

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateOneToManyResponse)_serviceClient.Execute(request);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string[] targets, string prefix, string solutionName)
        {
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

            // Use OrganizationRequest since CreatePolymorphicLookupAttributeRequest
            // is not available in the Microsoft.PowerPlatform.Dataverse.Client SDK
            var request = new OrganizationRequest("CreatePolymorphicLookupAttribute")
            {
                ["Lookup"] = lookup,
                ["OneToManyRelationships"] = relationships
            };
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunResult($"Would CREATE polymorphic lookup column '{logicalName}' on entity '{entityName}'.");

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = _serviceClient.Execute(request);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string prefix, string solutionName)
        {
            var accountRelName = $"{prefix}_account_{entityName}_{logicalName}";
            var contactRelName = $"{prefix}_contact_{entityName}_{logicalName}";
            if (accountRelName.Length > 100) accountRelName = accountRelName[..100];
            if (contactRelName.Length > 100) contactRelName = contactRelName[..100];

            var lookup = new LookupAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

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

            if (_options.DryRun) return DryRunResult($"Would CREATE customer column '{logicalName}' on entity '{entityName}'.");

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateCustomerRelationshipsResponse)_serviceClient.Execute(request);
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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string optionsJson, string globalOptionSetName, bool isMultiSelect,
            string solutionName, string defaultValue)
        {
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
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
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
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
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
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
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
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                        OptionSet = optionSet
                    };
                }

                // Validate + apply default value (local option set — options known here).
                var defaultErr = ApplyPicklistDefaultValue(attr, defaultValue, isMultiSelect, knownOptionValues: parsedOptions.Select(o => o.Value).ToList());
                if (defaultErr != null) return ErrorResult(defaultErr);
            }

            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string solutionName)
        {
            var attr = new BigIntAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string solutionName)
        {
            var attr = new ImageAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true),
                IsPrimaryImage = false
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

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
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxSizeInKB, string solutionName)
        {
            if (maxSizeInKB < 1) maxSizeInKB = 32768;
            if (maxSizeInKB > 10485760) maxSizeInKB = 10485760; // 10 GB max

            var attr = new FileAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxSizeInKB = maxSizeInKB,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

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
                return DryRunResult($"Would CREATE {attr.GetType().Name.Replace("AttributeMetadata", "")} column '{attr.LogicalName}' on entity '{entityName}'.");

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

            var response = (CreateAttributeResponse)_serviceClient.Execute(request);
            return response.AttributeId;
        }

        private bool PublishIfNeeded(string entityName)
        {
            try
            {
                var publishXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>";
                _serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.PublishXmlRequest { ParameterXml = publishXml });
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
        /// Append a short, non-leaky formula descriptor to the result log. The actual
        /// formula payload (which can be a large XAML) is NOT echoed back.
        /// </summary>
        private static void AppendFormulaLine(StringBuilder sb, FormulaColumnSpec formula)
        {
            if (formula == null) return;
            var preview = formula.FormulaDefinition;
            // Fallback path creates a FormulaColumnSpec with null FormulaDefinition (empty
            // Calculated/Rollup body that the end-user must define in the editor).
            if (string.IsNullOrEmpty(preview))
            {
                sb.AppendLine($"Formula: {formula.KindName} (empty - define in editor)");
                return;
            }
            // For Power Fx the definition is short, readable Power Fx text → show it.
            // For Calculated/Rollup it is XAML → just report the kind + length to avoid
            // dumping a multi-KB XML blob into the tool output.
            if (formula.SourceType == 3)
            {
                var oneLine = preview.Replace("\r", " ").Replace("\n", " ");
                if (oneLine.Length > 120) oneLine = oneLine.Substring(0, 117) + "...";
                sb.AppendLine($"Formula: PowerFx = {oneLine}");
            }
            else
            {
                sb.AppendLine($"Formula: {formula.KindName} (XAML, {preview.Length} chars)");
            }
        }

        /// <summary>
        /// Map a <c>formula_source_type</c> string to the numeric <c>AttributeMetadata.SourceType</c>.
        /// Defaults to Power Fx (3). Returns null value + error message on invalid input.
        /// </summary>
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

        private static CallToolResult HandleException(Exception ex, string entityName, string attributeName, string solutionName)
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
            bool? isAuditEnabled, bool? isValidForAdvancedFind, bool? isSecured, bool? isSortable, string behavior, int precisionSource)
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

                if (!string.IsNullOrWhiteSpace(requiredLevel))
                {
                    var newLevel = ParseRequiredLevel(requiredLevel);
                    if (!newLevel.HasValue)
                        return ErrorResult(
                            $"Error: Invalid required_level '{requiredLevel}'.\n" +
                            $"Valid values: 'None' (default), 'Recommended', 'Required'.");
                    var oldLevel = metadata.RequiredLevel?.Value.ToString() ?? "None";
                    metadata.RequiredLevel = new AttributeRequiredLevelManagedProperty(newLevel.Value);
                    changes.Add($"RequiredLevel: {oldLevel} -> {newLevel.Value}");
                    structuredChanges["requiredLevel"] = new UpdateAttributeChange { OldValue = oldLevel, NewValue = newLevel.Value.ToString() };
                }

                if (isAuditEnabled.HasValue)
                {
                    var oldVal = metadata.IsAuditEnabled?.Value == true ? "true" : "false";
                    metadata.IsAuditEnabled = new BooleanManagedProperty(isAuditEnabled.Value);
                    changes.Add($"IsAuditEnabled: {oldVal} -> {isAuditEnabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isAuditEnabled.Value.ToString().ToLowerInvariant() };
                }

                if (isValidForAdvancedFind.HasValue)
                {
                    var oldVal = metadata.IsValidForAdvancedFind?.Value == true ? "true" : "false";
                    metadata.IsValidForAdvancedFind = new BooleanManagedProperty(isValidForAdvancedFind.Value);
                    changes.Add($"IsValidForAdvancedFind: {oldVal} -> {isValidForAdvancedFind.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isValidForAdvancedFind"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isValidForAdvancedFind.Value.ToString().ToLowerInvariant() };
                }

                if (isSecured.HasValue)
                {
                    var oldVal = metadata.IsSecured == true ? "true" : "false";
                    metadata.IsSecured = isSecured.Value;
                    changes.Add($"IsSecured: {oldVal} -> {isSecured.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isSecured"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isSecured.Value.ToString().ToLowerInvariant() };
                }

                if (isSortable.HasValue)
                {
                    var oldVal = metadata.IsSortableEnabled?.Value == true ? "true" : "false";
                    metadata.IsSortableEnabled = new BooleanManagedProperty(isSortable.Value);
                    changes.Add($"IsSortable: {oldVal} -> {isSortable.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isSortable"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = isSortable.Value.ToString().ToLowerInvariant() };
                }

                // --- Type-specific property updates ---
                var typeError = ApplyTypeSpecificUpdates(metadata, maxLength, minValue, maxValue, precision, format,
                    trueLabel, falseLabel, behavior, precisionSource, changes, structuredChanges);
                if (typeError != null)
                    return ErrorResult(typeError);

                // --- Execute metadata update (if any generic/type-specific changes) ---
                if (changes.Count > 0)
                {
                    if (_options.DryRun)
                    {
                        var changesSummary = string.Join(", ", changes);
                        return DryRunResult($"Would UPDATE column '{entityName}.{attributeName}' with changes: {changesSummary}");
                    }

                    var updateRequest = new UpdateAttributeRequest
                    {
                        EntityName = entityName,
                        Attribute = metadata,
                        MergeLabels = true
                    };
                    _serviceClient.Execute(updateRequest);
                }

                // --- Picklist option management ---
                var optionResults = ManagePicklistOptions(entityName, attributeName, metadata,
                    addOptions, updateOptions, deleteOptions);

                if (changes.Count == 0 && optionResults.Count == 0)
                    return ErrorResult(
                        $"Error: No changes specified for '{entityName}.{attributeName}'.\n" +
                        $"Provide at least one updatable parameter: display_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, true_label, false_label, add_options, update_options, delete_options, is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable.");

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
                if (!string.IsNullOrWhiteSpace(addOptionsJson) || !string.IsNullOrWhiteSpace(updateOptionsJson) || !string.IsNullOrWhiteSpace(deleteOptionsJson))
                    results.Add($"[Warning] Option management ignored — attribute type is {GetAttributeTypeName(metadata)}, not Picklist/MultiSelectPicklist");
                return results;
            }

            if (_options.DryRun)
            {
                var opsSummary = new List<string>();
                if (!string.IsNullOrWhiteSpace(addOptionsJson)) opsSummary.Add("add options");
                if (!string.IsNullOrWhiteSpace(updateOptionsJson)) opsSummary.Add("update options");
                if (!string.IsNullOrWhiteSpace(deleteOptionsJson)) opsSummary.Add("delete options");
                if (opsSummary.Count > 0)
                    results.Add($"[DRY-RUN] Would manage picklist options on '{entityName}.{attributeName}': {string.Join(", ", opsSummary)}.");
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
                        var resp = (InsertOptionValueResponse)_serviceClient.Execute(req);
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
                        _serviceClient.Execute(req);
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
                        _serviceClient.Execute(req);
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        /// <summary>
        /// Append a clone warning preamble to a successful <see cref="CallToolResult"/> (used
        /// when a Calculated/Rollup formula XAML failed to round-trip and the column was
        /// re-created with an empty body). The original result text and structured content
        /// are preserved; the warning is prepended so the caller sees it before the success
        /// summary. The structured result <c>Status</c> is left as returned by the create
        /// (typically "created") and a new <c>warnings</c> field is added when feasible.
        /// </summary>
        private static CallToolResult AppendFormulaCloneWarning(CallToolResult result, string warning)
        {
            if (result == null) return result;
            // Prepend warning to the first text content block.
            if (result.Content != null && result.Content.Count > 0 && result.Content[0] is TextContentBlock tb)
            {
                var newText = $"[FormulaCloneWarning] {warning}\n\n{tb.Text}";
                result.Content[0] = new TextContentBlock { Text = newText };
            }
            return result;
        }
    }
}
