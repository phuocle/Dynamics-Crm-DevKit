#nullable enable
using DynamicsCrm.DevKit.Shared.Services;
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
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;
#nullable restore

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public class ManageColumnTool : McpToolBase
    {
        private const int AttributeComponentType = 2;
        private readonly IOrganizationService _orgService;
        private readonly IWebApiExecutor _webApi;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;
        private IOrganizationService _formulaSourceOrgService;
        private string _formulaCustomReplacements;
        private bool? _requestedAlternateKey;
        private string _effectiveSolutionName;
        private FormulaColumnSpec _requestedFormulaUpdate;
        internal string _workspaceFolder;

        public ManageColumnTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, IWebApiExecutor webApi) : this(orgService, options, context, webApi, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageColumnTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, IWebApiExecutor webApi, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _webApi = webApi;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_column", Title = "Create or update a table column",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageColumnResult)),
        Description(
            "Dataverse columns: create or update is detected automatically. Create requires entity_name, attribute_type, display_name, solution_name; update identifies an existing column by logical_name. Attribute type is immutable.\n\n" +
            "For lookup/customer/choice types, autonumbers and formulas, see docs://schema_tools_guide. Use formula_definition to clone a formula from inspect_metadata(resource='tables'), formula_expression to edit an existing Power Fx column in place, or raw_formula_definition to set raw XAML on a Calculated or Rollup column. Updating any formula saves a pre-change backup under .devkit/manage_column/{entity_name}/ and returns backupPath. For statuscode use add_options/update_options/delete_options; statecode is read-only.\n\n" +
            "Create requests match the exact target logical name first. An exact display name can identify an existing column when both logical_name and schema_name are omitted. Omit attribute_type to look up an update target by display name. Ambiguous matches return candidates.\n\n" +
            "WHEN TO USE:\n" +
            "- Create a new attribute on an existing table (need attribute_type + display_name)\n" +
            "- Clone a Power Fx, Calculated, or Rollup formula using a source reference\n" +
            "- Update the expression of an existing Power Fx column\n" +
            "- Create or update a Calculated or Rollup column with raw XAML via raw_formula_definition\n" +
            "- Create/convert a string column to Autonumber or change its pattern/seed\n" +
            "- Update mutable metadata, format, required_level, and picklist options\n" +
            "- Add/rename/remove options on an existing picklist via add_options/update_options/delete_options\n\n" +
            "RELATED TOOLS:\n" +
            "- inspect_metadata(resource='tables') → discover entities and attribute logical names\n" +
            "- manage_schema(resource='table') → create the table before its columns\n" +
            "- manage_schema(resource='relationship') → 1:N / N:N relationships (lookup_target auto-creates 1:N)\n" +
            "- manage_schema(resource='choice') → global option sets\n" +
            "- manage_data(resource='file') → file/image column data upload and download\n" +
            "- execute_webapi → raw Web API for endpoints not covered here")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("Logical name (e.g. 'account').")] string entity_name = "",
            [Description("Logical name of the existing attribute to update (e.g. 'new_priority'). For CREATE: optional lowercase override of logical name; if omitted derives from schema_name/display_name. Must start with publisher prefix.")] string logical_name = "",
            [Description("string/memo/integer/bigint/decimal/money/float/boolean/datetime/lookup/customer/picklist/multipicklist/image/file. Required for CREATE. Ignored on UPDATE (immutable).")] string attribute_type = "",
            [Description("Required for CREATE. Optional on UPDATE — pass only to rename the display label.")] string display_name = "",
            [Description("Unmanaged solution unique or display name. Required for CREATE to resolve the publisher prefix. Optional on UPDATE to add the changed column to the solution.")] string solution_name = "",
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
            [Description("picklist/boolean create or update: default option value. Picklist: one integer matching an option. Boolean: 'true'/'false' or '1'/'0'. Omit on update to keep current; unsupported for multipicklist.")] string default_value = "",
            [Description("SchemaName for the new column (e.g. 'devkit_InvoiceLineId'). If provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Formula clone reference from inspect_metadata(resource='tables'): source_table_logical_name:source_column_logical_name (e.g. account:new_total). CREATE clones the column formula. UPDATE replaces the formula of an existing formula column. For a Power Fx target, reference a Power Fx source. Mutually exclusive with formula_expression and raw_formula_definition.")] string formula_definition = "",
            [Description("Use powerfx, calculated, or rollup to create an empty formula column (or specify calculated/rollup when creating with raw_formula_definition). Omit this when cloning from a source reference or passing formula_expression.")] string formula_source_type = "",
            [Description("image only. CREATE: true = store the full-sized image (default false). UPDATE: omit = keep current.")] bool? can_store_full_image = null,
            [Description("Autonumber pattern for string columns, e.g. 'TKT-{SEQNUM:5}-{RANDSTRING:3}'. Placeholders: {SEQNUM:n} (n>=1, minimum zero-padded length), {RANDSTRING:n} (1-6), {DATETIMEUTC:format}. CREATE: sets the pattern; UPDATE: changes it (omit = keep current). format must be Text. Validated client-side — Dataverse only rejects bad patterns at record-save time.")] string auto_number_format = "",
            [Description("string UPDATE only: true removes the autonumber pattern, turning the column back into plain text. Mutually exclusive with auto_number_format.")] bool? clear_auto_number = null,
            [Description("Autonumber seed (>=1; Dataverse default sequence starts at 1000). String autonumber columns only. Executed via SetAutoNumberSeed after the metadata create/update succeeds. Environment-only: NOT carried in solutions. Omit to keep the current seed.")] long? auto_number_seed = null,
            [Description("Create or remove a single-column Alternate Key (EntityKeyMetadata) for this column. CREATE: true creates an alternate key using the column's schema_name, logical_name, and display_name. UPDATE: true creates the alternate key if missing; false deletes it; omit = keep current.")] bool? is_alternate_key = null,
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default,
            [Description("UPDATE only on an existing Power Fx column. A Power Fx expression with an optional leading '='. Mutually exclusive with formula_definition, formula_source_type, and raw_formula_definition.")] string formula_expression = null,
#nullable enable
            [Description("File path to a XAML/XML file (or .formula.json backup) or inline raw XAML formula definition (<Activity ...>) from inspect_metadata(resource='tables', name=detail_level='full') rawFormulaDefinition for CREATE or UPDATE on a Calculated or Rollup column. Mutually exclusive with formula_definition and formula_expression.")] string? raw_formula_definition = null,
            McpServer? server = null)
#nullable restore
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, async conn =>
            {
                var worker = new ManageColumnTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi, _connections);
                worker._workspaceFolder = await WorkspaceFolderHelper.GetAsync(server, cancellationToken);
                return worker.manage_column(entity_name, logical_name, attribute_type, display_name, solution_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, precision_source, options, global_optionset_name, lookup_target, lookup_relationship_name, true_label, false_label, add_options, update_options, delete_options, is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, default_value, schema_name, formula_definition, formula_source_type, can_store_full_image, auto_number_format, clear_auto_number, auto_number_seed, is_alternate_key, formula_expression, raw_formula_definition);
            }, cancellationToken);
        }

        public CallToolResult manage_column(
            [Description("Logical name (e.g. 'account').")] string entity_name = "",
            [Description("Logical name of the existing attribute to update (e.g. 'new_priority'). For CREATE: optional lowercase override of logical name; if omitted derives from schema_name/display_name. Must start with publisher prefix.")] string logical_name = "",
            [Description("string/memo/integer/bigint/decimal/money/float/boolean/datetime/lookup/customer/picklist/multipicklist/image/file. Required for CREATE. Ignored on UPDATE (immutable).")] string attribute_type = "",
            [Description("Required for CREATE. Optional on UPDATE — pass only to rename the display label.")] string display_name = "",
            [Description("Unmanaged solution unique or display name. Required for CREATE to resolve the publisher prefix. Optional on UPDATE to add the changed column to the solution.")] string solution_name = "",
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
            [Description("picklist/boolean create or update: default option value. Picklist: one integer matching an option. Boolean: 'true'/'false' or '1'/'0'. Omit on update to keep current; unsupported for multipicklist.")] string default_value = "",
            [Description("SchemaName for the new column (e.g. 'devkit_InvoiceLineId'). If provided, used AS-IS as SchemaName (skip auto-derive from display_name). Caller responsible for casing. Create only — ignored on update. Must start with the publisher prefix.")] string schema_name = "",
            [Description("Formula clone reference from inspect_metadata(resource='tables'): source_table_logical_name:source_column_logical_name (e.g. account:new_total). CREATE clones the column formula. UPDATE replaces the formula of an existing formula column. For a Power Fx target, reference a Power Fx source. Mutually exclusive with formula_expression and raw_formula_definition.")] string formula_definition = "",
            [Description("Use powerfx, calculated, or rollup to create an empty formula column (or specify calculated/rollup when creating with raw_formula_definition). Omit this when cloning from a source reference or passing formula_expression.")] string formula_source_type = "",
            [Description("image only. CREATE: true = store the full-sized image (default false). UPDATE: omit = keep current.")] bool? can_store_full_image = null,
            [Description("Autonumber pattern for string columns, e.g. 'TKT-{SEQNUM:5}-{RANDSTRING:3}'. Placeholders: {SEQNUM:n} (n>=1, minimum zero-padded length), {RANDSTRING:n} (1-6), {DATETIMEUTC:format}. CREATE: sets the pattern; UPDATE: changes it (omit = keep current). format must be Text. Validated client-side — Dataverse only rejects bad patterns at record-save time.")] string auto_number_format = "",
            [Description("string UPDATE only: true removes the autonumber pattern, turning the column back into plain text. Mutually exclusive with auto_number_format.")] bool? clear_auto_number = null,
            [Description("Autonumber seed (>=1; Dataverse default sequence starts at 1000). String autonumber columns only. Executed via SetAutoNumberSeed after the metadata create/update succeeds. Environment-only: NOT carried in solutions. Omit to keep the current seed.")] long? auto_number_seed = null,
            [Description("Create or remove a single-column Alternate Key (EntityKeyMetadata) for this column. CREATE: true creates an alternate key using the column's schema_name, logical_name, and display_name. UPDATE: true creates the alternate key if missing; false deletes it; omit = keep current.")] bool? is_alternate_key = null,
            [Description("UPDATE only on an existing Power Fx column. A Power Fx expression with an optional leading '='. Mutually exclusive with formula_definition, formula_source_type, and raw_formula_definition.")] string formula_expression = null,
#nullable enable
            [Description("File path to a XAML/XML file (or .formula.json backup) or inline raw XAML formula definition (<Activity ...>) from inspect_metadata(resource='tables', name=detail_level='full') rawFormulaDefinition for CREATE or UPDATE on a Calculated or Rollup column. Mutually exclusive with formula_definition and formula_expression.")] string? raw_formula_definition = null)
#nullable restore
        {
            _requestedAlternateKey = is_alternate_key;
            _requestedFormulaUpdate = null;
            _effectiveSolutionName = null;

            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return Error("entity_name is required.", "Use inspect_metadata(resource='tables') to list entities.");

            entity_name = entity_name.Trim();
            logical_name = logical_name?.Trim() ?? "";
            schema_name = schema_name?.Trim() ?? "";
            display_name = display_name?.Trim() ?? "";
            solution_name = solution_name?.Trim() ?? "";
            default_value = default_value?.Trim() ?? "";

            if (formula_expression != null)
            {
                if (!string.IsNullOrWhiteSpace(formula_definition) || !string.IsNullOrWhiteSpace(formula_source_type) || raw_formula_definition != null)
                    return Error("formula_expression cannot be combined with formula_definition, formula_source_type, or raw_formula_definition.",
                        "For a direct Power Fx update, pass formula_expression by itself.");

                formula_expression = NormalizePowerFxExpression(formula_expression);
                if (formula_expression.Length == 0)
                    return Error("formula_expression must contain a Power Fx expression.",
                        "Omit formula_expression to keep the existing formula.");
            }

            if (raw_formula_definition != null)
            {
                if (!string.IsNullOrWhiteSpace(formula_definition) || formula_expression != null)
                    return Error("raw_formula_definition cannot be combined with formula_definition or formula_expression.",
                        "Pass raw_formula_definition by itself on UPDATE, or with formula_source_type ('calculated' or 'rollup') on CREATE.");

                raw_formula_definition = raw_formula_definition.Trim();
                if (raw_formula_definition.Length > 0)
                {
                    var resolvedFormulaPath = ResolveRawFormulaFilePath(raw_formula_definition);
                    if (resolvedFormulaPath != null)
                    {
                        raw_formula_definition = ReadRawFormulaFromFile(resolvedFormulaPath);
                    }
                    else if (!raw_formula_definition.StartsWith('<'))
                    {
                        return Error(
                            $"raw_formula_definition file not found: '{raw_formula_definition}'. If passing inline XAML, it must contain a valid Calculated or Rollup XAML definition (<Activity ...>).",
                            "Pass an existing file path containing the XAML definition, or pass the inline <Activity ...> XML string from inspect_metadata(resource='tables', name=detail_level='full') rawFormulaDefinition.");
                    }
                }

                var xamlError = ValidateRawFormulaXaml(raw_formula_definition);
                if (xamlError != null)
                    return Error(xamlError,
                        "Copy rawFormulaDefinition from inspect_metadata(resource='tables', name=detail_level='full') for a Calculated or Rollup column (or pass a file path containing it) and ensure it is well-formed XML with an <Activity ...> root element.");
            }

            // --- Early validation: attribute_type, required_level, format, behavior ---
            // Validate these before touching Dataverse so errors return fast even in DryRun mode.
            if (!string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                var validTypes = new[] { "string", "memo", "integer", "bigint", "decimal", "money", "float", "double",
                    "boolean", "datetime", "lookup", "customer", "picklist", "multipicklist", "image", "file" };
                if (!Array.Exists(validTypes, t => t == normalizedType))
                    return Error(
                        $"Unknown attribute_type '{attribute_type}'.",
                        "Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file. Read docs://schema_tools_guide for the column type matrix.");
            }

            if (!string.IsNullOrWhiteSpace(required_level))
            {
                if (!ParseRequiredLevel(required_level).HasValue)
                    return Error(
                        $"Invalid required_level '{required_level}'.",
                        "Valid values: 'None' (default), 'Recommended', 'Required'.");
            }

            if (!string.IsNullOrWhiteSpace(format) && !string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                if (normalizedType == "string")
                {
                    ResolveStringFormat(format, out var fmtErr);
                    if (fmtErr != null) return Error(fmtErr, "Valid values: 'Text' (default), 'Email', 'Url', 'Phone', 'TextArea', 'TickerSymbol', 'RichText'.");
                }
                else if (normalizedType == "integer")
                {
                    ResolveIntegerFormat(format, out var fmtErr);
                    if (fmtErr != null) return Error(fmtErr, "Valid values: 'None' (default), 'Duration', 'TimeZone', 'Language', 'Locale'.");
                }
                else if (normalizedType == "memo")
                {
                    ResolveMemoFormat(format, out var fmtErr);
                    if (fmtErr != null) return Error(fmtErr, "Valid values: 'Text' (default), 'RichText'.");
                }
            }

            if (!string.IsNullOrWhiteSpace(behavior) && !string.IsNullOrWhiteSpace(attribute_type))
            {
                var normalizedType = attribute_type.Trim().ToLowerInvariant();
                if (normalizedType == "datetime")
                {
                    ResolveDateTimeBehavior(behavior, out var behaviorErr);
                    if (behaviorErr != null) return Error(behaviorErr, "Valid values: 'UserLocal' (default), 'DateOnly', 'TimeZoneIndependent'.");
                }
            }

            // --- Autonumber early validation (mode-independent; also covers DryRun) ---
            // Dataverse does NOT validate autonumber patterns on create/update — a bad
            // pattern only fails when the first record is saved — so the pattern is
            // validated here, client-side, before any Dataverse call.
            var autoNumberFormat = auto_number_format?.Trim() ?? "";
            var clearAutoNumber = clear_auto_number == true;
            var autoNumberSeed = auto_number_seed;
            var autoNumberMinLength = 0;
            List<string> autoNumberWarnings = null;

            if (clearAutoNumber && !string.IsNullOrWhiteSpace(auto_number_format))
                return Error(
                    "clear_auto_number and auto_number_format are mutually exclusive.",
                    "Pass auto_number_format to set or change the pattern, or clear_auto_number=true to remove it (back to plain text).");

            if (autoNumberSeed.HasValue && autoNumberSeed.Value < 1)
                return Error(
                    $"Invalid auto_number_seed {autoNumberSeed.Value} — must be >= 1.",
                    "The Dataverse default sequence starts at 1000; pass e.g. 10000 to start higher.");

            if (!string.IsNullOrWhiteSpace(autoNumberFormat) || clearAutoNumber || autoNumberSeed.HasValue)
            {
                // attribute_type is ignored on UPDATE, so a non-string attribute_type
                // always means CREATE intent here.
                if (!string.IsNullOrWhiteSpace(attribute_type) && attribute_type.Trim().ToLowerInvariant() != "string")
                    return Error(
                        "auto_number_format is only supported for attribute_type 'string'.",
                        "An autonumber column is a StringAttributeMetadata with AutoNumberFormat set. Use attribute_type 'string' (or drop the autonumber parameters).");

                if (!string.IsNullOrWhiteSpace(autoNumberFormat))
                {
                    var patternError = AutoNumberFormatValidator.Validate(autoNumberFormat, out autoNumberMinLength, out autoNumberWarnings);
                    if (patternError != null)
                        return Error(patternError, "Fix the pattern; see docs://schema_tools_guide → Autonumber (string).");
                }
            }

            // --- Resolve entity_name: Display Name first, then logical/schema contains ---
            var (resolvedEntity, entityError) = ResolveEntityName(_orgService, entity_name);
            if (entityError != null)
                return Error(entityError.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to list entities.");
            entity_name = resolvedEntity;

            // ===== Resolve publisher prefix from solution (needed when schema_name/logical_name lack one) =====
            string resolvedPrefix = null;
            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solution_name))
            {
                var solResult = SolutionResolverHelper.Resolve(_orgService, solution_name, requireUnmanaged: true);
                if (!solResult.IsSuccess)
                    return Error(
                        solResult.Error.Split("\r\n")[0],
                        "Use inspect_metadata(resource='solution_components') to find valid solution names.");
                resolvedPrefix = solResult.Prefix;
                resolvedSolutionUniqueName = solResult.UniqueName;
            }
            _effectiveSolutionName = resolvedSolutionUniqueName ?? solution_name;

            var prefix = resolvedPrefix;
            var prefixWithUnderscore = prefix + "_";
            var hasAttributeType = !string.IsNullOrWhiteSpace(attribute_type);
            var hasCreateIntent = hasAttributeType && display_name.Length > 0 && solution_name.Length > 0;
            var schemaName = schema_name;
            var lookupName = logical_name;
            string exactDisplayNameFallback = null;
            if (hasCreateIntent && logical_name.Length == 0)
            {
                if (schemaName.Length == 0)
                {
                    schemaName = DeriveColumnSchemaName(display_name, prefix);
                    exactDisplayNameFallback = display_name;
                }
                if (schema_name.Length == 0 || schemaName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    lookupName = schemaName.ToLowerInvariant();
            }
            else if (!hasAttributeType && logical_name.Length == 0)
            {
                lookupName = display_name;
            }

            AttributeMetadata existingMetadata = null;
            if (lookupName.Length > 0)
            {
                var attributeResolve = DisplayNameFirstResolver.ResolveAttribute(_orgService, entity_name, lookupName,
                    "manage_schema(resource='column')", exactLogicalName: hasAttributeType, exactDisplayNameFallback: exactDisplayNameFallback);
                if (attributeResolve.IsSuccess)
                {
                    existingMetadata = attributeResolve.Value;
                    logical_name = existingMetadata.LogicalName;
                }
                else if (attributeResolve.Status == ResolveStatus.Ambiguous || attributeResolve.Status == ResolveStatus.Error)
                {
                    return Error(attributeResolve.Error.Split("\r\n")[0], "Use inspect_metadata(resource='tables') to list entities and attributes.");
                }
            }

            if (existingMetadata != null)
            {
                // --- UPDATE MODE ---
                if (formula_expression != null)
                {
                    if (existingMetadata.SourceType != 3)
                        return Error("formula_expression requires an existing Power Fx column.",
                            "Use inspect_metadata(resource='tables') to find the logical name of a Power Fx column.");
                    _requestedFormulaUpdate = new FormulaColumnSpec(3, formula_expression, "powerfx");
                }
                else if (raw_formula_definition != null)
                {
                    if (existingMetadata.SourceType is not (1 or 2))
                        return Error("raw_formula_definition requires an existing Calculated or Rollup column.",
                            "Use inspect_metadata(resource='tables') to find the logical name of a Calculated or Rollup column. For Power Fx columns, use formula_expression.");

                    var existingKind = existingMetadata.SourceType == 1 ? "calculated" : "rollup";
                    if (!string.IsNullOrWhiteSpace(formula_source_type))
                    {
                        var (requestedSourceType, requestedKindError) = ParseFormulaSourceType(formula_source_type.Trim().ToLowerInvariant());
                        if (requestedKindError != null) return Error(requestedKindError, "Valid values: 'calculated', 'rollup'.");
                        if (requestedSourceType != existingMetadata.SourceType)
                            return Error($"formula_source_type does not match target column '{entity_name}:{existingMetadata.LogicalName}' ({existingKind}).",
                                $"Omit formula_source_type on update or set it to '{existingKind}'.");
                    }

                    _requestedFormulaUpdate = new FormulaColumnSpec(existingMetadata.SourceType.Value, raw_formula_definition, existingKind);
                }
                else if (!string.IsNullOrWhiteSpace(formula_definition) ||
                    !string.IsNullOrWhiteSpace(formula_source_type))
                {
                    if ((existingMetadata.SourceType is 1 or 2 or 3) && !string.IsNullOrWhiteSpace(formula_definition))
                    {
                        var existingTypeKey = GetAttributeTypeName(existingMetadata).ToLowerInvariant();
                        if (existingTypeKey == "multiselectpicklist") existingTypeKey = "multipicklist";
                        var formulaErr = TryBuildFormulaSpec(entity_name, existingMetadata.LogicalName, existingTypeKey,
                            formula_definition, formula_source_type, null, out var updateFormulaSpec);
                        if (formulaErr != null)
                            return formulaErr;
                        if (existingMetadata.SourceType == 3 && updateFormulaSpec.SourceType != 3)
                            return Error("Updating a Power Fx column requires a Power Fx source formula.",
                                "Use a Power Fx formula_definition reference or pass formula_expression.");
                        _requestedFormulaUpdate = updateFormulaSpec;
                    }
                    else
                    {
                        return Error(
                            "Formula cloning on update requires an existing formula column and formula_definition.",
                            "Use the formulaDefinition reference from inspect_metadata(resource='tables'). Use formula_source_type by itself only to create an empty formula column.");
                    }
                }
                return UpdateExistingAttribute(entity_name, logical_name, existingMetadata,
                    display_name, description, required_level, max_length, min_value, max_value,
                    precision, format, true_label, false_label,
                    add_options, update_options, delete_options,
                    is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, behavior, precision_source,
                    default_value, can_store_full_image,
                    autoNumberFormat, clearAutoNumber, autoNumberSeed, autoNumberWarnings, autoNumberMinLength);
            }

            // --- CREATE MODE ---
            if (formula_expression != null)
                return Error("formula_expression requires an existing Power Fx column.",
                    "Use inspect_metadata(resource='tables') to verify entity_name and logical_name before updating the formula.");

            if (string.IsNullOrWhiteSpace(attribute_type))
            {
                if (string.IsNullOrWhiteSpace(logical_name))
                    return Error(
                        "logical_name is required to update an existing column, or attribute_type + display_name to create a new one.",
                        "To UPDATE: pass logical_name (e.g. 'new_priority'). To CREATE: pass attribute_type + display_name + solution_name.");
                if (raw_formula_definition != null)
                    return Error("raw_formula_definition on update requires an existing Calculated or Rollup column.",
                        "Use inspect_metadata(resource='tables') to verify entity_name and logical_name before updating the formula, or provide attribute_type + display_name + solution_name to create a new column.");
                return Error(
                    $"No existing column found for logical_name '{logical_name}' on entity '{entity_name}'.",
                    "To CREATE a new column, also provide attribute_type + display_name + solution_name. To UPDATE, double-check the logical name (use inspect_metadata(resource='tables') to list attributes).");
            }
            if (string.IsNullOrWhiteSpace(display_name))
                return Error(
                    "display_name is required when creating a new attribute.",
                    "Required for create: attribute_type + display_name + solution_name.");

            attribute_type = attribute_type.Trim().ToLowerInvariant();

            // --- Autonumber CREATE cross-parameter validation (mode-aware; runs before
            //     any Dataverse mutation so DryRun previews report the same errors) ---
            if (clearAutoNumber)
                return Error(
                    "clear_auto_number is UPDATE-only — it removes the autonumber pattern from an existing string column.",
                    "To create an autonumber column pass auto_number_format. To convert an existing column back to plain text, call manage_schema(resource='column') with logical_name + clear_auto_number=true.");

            if (autoNumberSeed.HasValue && string.IsNullOrWhiteSpace(autoNumberFormat))
                return Error(
                    "auto_number_seed requires auto_number_format on CREATE.",
                    "Pass auto_number_format (the pattern) together with auto_number_seed.");

            if (!string.IsNullOrWhiteSpace(autoNumberFormat))
            {
                if (!string.IsNullOrWhiteSpace(format))
                {
                    var resolvedCreateFormat = ResolveStringFormat(format, out _);
                    if (resolvedCreateFormat != StringFormatName.Text)
                        return Error(
                            $"Autonumber columns require format 'Text', but format '{format.Trim()}' was requested.",
                            "Remove format (Text is the default) or set format='Text' together with auto_number_format.");
                }

                if (!string.IsNullOrWhiteSpace(formula_definition) || !string.IsNullOrWhiteSpace(formula_source_type) || raw_formula_definition != null)
                    return Error(
                        "auto_number_format cannot be combined with formula_definition/formula_source_type.",
                        "An autonumber value and a formula-computed value conflict — create the column as one or the other.");

                var effectiveCreateMaxLength = max_length == 0 ? 100 : Math.Min(max_length, 4000);
                if (effectiveCreateMaxLength < autoNumberMinLength)
                    return Error(
                        $"max_length {effectiveCreateMaxLength} is smaller than the pattern's minimum output length {autoNumberMinLength}.",
                        "Increase max_length: it must exceed the pattern's minimum (literal text + SEQNUM digits + RANDSTRING characters + formatted DATETIMEUTC length) and leave room for the sequence to grow.");
                if (effectiveCreateMaxLength < autoNumberMinLength + 5)
                    (autoNumberWarnings ??= new List<string>()).Add(
                        $"max_length {effectiveCreateMaxLength} is close to the pattern's minimum length {autoNumberMinLength} — leave room for the sequence to grow.");
            }

            // The publisher prefix comes only from solution_name — required for CREATE.
            if (string.IsNullOrWhiteSpace(solution_name) && string.IsNullOrWhiteSpace(resolvedPrefix))
                return Error(
                    "solution_name is required when creating a new column (needed to resolve the publisher prefix).",
                    "Required for create: attribute_type, display_name, solution_name. Read docs://schema_tools_guide for prefix resolution and solution requirements.");

            // Determine SchemaName (CREATE-only override):
            // - schema_name provided → use AS-IS (must start with publisher prefix).
            // - otherwise derive via DataverseNamer from display_name (portal-style, preserving casing).
            if (schema_name.Length > 0 && !schemaName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"schema_name '{schemaName}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').",
                    "Prepend the publisher prefix, e.g. 'devkit_InvoiceLineId' instead of 'InvoiceLineId'.");
            if (schemaName.Length == 0)
                schemaName = DeriveColumnSchemaName(display_name, prefix);

            // Determine the attribute logical name (CREATE-only override):
            // - logical_name provided → use AS-IS (lowercased; must start with publisher prefix).
            // - otherwise derive from schemaName.ToLowerInvariant() to stay in sync with Dataverse.
            string attributeName;
            if (!string.IsNullOrWhiteSpace(logical_name))
            {
                attributeName = logical_name.ToLowerInvariant();
                if (!attributeName.StartsWith(prefixWithUnderscore, StringComparison.OrdinalIgnoreCase))
                    return Error(
                        $"logical_name '{logical_name}' must start with the publisher prefix '{prefixWithUnderscore}' (resolved from solution '{resolvedSolutionUniqueName ?? solution_name}').",
                        "Prepend the publisher prefix, e.g. 'devkit_invoicelineid' instead of 'invoicelineid'.");
                if (!attributeName.Equals(schemaName.ToLowerInvariant(), StringComparison.OrdinalIgnoreCase))
                    return Error(
                        $"logical_name '{logical_name}' must be the lowercase form of schema_name '{schemaName}'.",
                        $"Expected '{schemaName.ToLowerInvariant()}'.");
            }
            else
            {
                attributeName = schemaName.ToLowerInvariant();
            }
            logical_name = attributeName;

            // Parse required level
            var reqLevel = ParseRequiredLevel(required_level);
            if (!reqLevel.HasValue)
                return Error(
                    $"Invalid required_level '{required_level}'.",
                    "Valid values: 'None' (default), 'Recommended', 'Required'.");

            var effectiveSolutionName = resolvedSolutionUniqueName ?? solution_name;

            // --- Resolve formula column (Power Fx / Calculated / Rollup) ---
            // formula_definition is the table:column reference returned by get_tables
            // (or raw Power Fx expression when formula_source_type='powerfx').
            var formulaBuildError = TryBuildFormulaSpec(entity_name, attributeName, attribute_type,
                formula_definition, formula_source_type, raw_formula_definition, out var formulaSpec);
            if (formulaBuildError != null)
                return formulaBuildError;

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
                        return CreateStringAttribute(entity_name, logical_name, schemaName, display_name, description, max_length == 0 ? 100 : max_length, format, effectiveSolutionName, formulaSpec, createFlags, autoNumberFormat, autoNumberSeed, autoNumberWarnings);
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
                        return CreateImageAttribute(entity_name, logical_name, schemaName, display_name, description, effectiveSolutionName, createFlags, can_store_full_image);
                    case "file":
                        return CreateFileAttribute(entity_name, logical_name, schemaName, display_name, description, max_length == 0 ? 32768 : max_length, effectiveSolutionName, createFlags);
                    default:
                        return Error(
                            $"Unknown attribute_type '{attribute_type}'.",
                            "Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file. Read docs://schema_tools_guide for the column type matrix.");
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

        private static string DeriveColumnSchemaName(string displayName, string prefix)
        {
            try
            {
                return DataverseNamer.Resolve(displayName, prefix).SchemaName;
            }
            catch
            {
                return $"{prefix}_{displayName.Trim().Replace(" ", "")}";
            }
        }

        // --- String ---
        private CallToolResult CreateStringAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description,
            int maxLength, string format, string solutionName, FormulaColumnSpec formula = null,
            ColumnFlags createFlags = null, string autoNumberFormat = null, long? autoNumberSeed = null,
            List<string> autoNumberWarnings = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            if (maxLength < 1) maxLength = 100;
            if (maxLength > 4000) maxLength = 4000;

            var resolvedFormat = ResolveStringFormat(format, out var formatError);
            if (formatError != null) return Error(formatError, "Valid values: 'Text' (default), 'Email', 'Url', 'Phone', 'TextArea', 'TickerSymbol', 'RichText'.");

            var attr = new StringAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                MaxLength = maxLength,
                FormatName = resolvedFormat
            };
            if (!string.IsNullOrWhiteSpace(autoNumberFormat))
                attr.AutoNumberFormat = autoNumberFormat;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName, autoNumberFormat, autoNumberSeed, autoNumberWarnings);

            var sb = FormatHeader(entityName, logicalName, "String", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            sb.AppendLine($"Format: {attr.FormatName?.Value ?? "Text"}");
            if (!string.IsNullOrWhiteSpace(autoNumberFormat))
                sb.AppendLine($"AutoNumberFormat: {autoNumberFormat}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            // Seed is NOT a metadata change and NOT carried in solutions — execute it
            // after publish so the attribute is visible. The actual logical name is used
            // (Dataverse may normalize it). A seed failure after a successful create
            // must not fail the whole call — it becomes a warning instead.
            var actualName = ResolveCreatedAttributeLogicalName(entityName, metadataId, logicalName);
            string seedWarning = null;
            if (autoNumberSeed.HasValue)
            {
                try
                {
                    seedWarning = ExecuteAutoNumberSeed(entityName, actualName, autoNumberSeed.Value, "created");
                }
                catch (InvalidOperationException) when (_context.MutationsBlocked)
                {
                    throw;
                }
                catch (Exception ex)
                {
                    seedWarning = $"Column created but SetAutoNumberSeed failed: {ex.Message}";
                }
            }

            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "maxLength", maxLength.ToString() }, { "format", attr.FormatName?.Value ?? "Text" } };
            if (!string.IsNullOrWhiteSpace(autoNumberFormat))
                extra["autoNumberFormat"] = autoNumberFormat;
            if (autoNumberSeed.HasValue)
                extra["autoNumberSeed"] = autoNumberSeed.Value.ToString();

            List<string> warnings = null;
            if (autoNumberWarnings is { Count: > 0 }) warnings = new List<string>(autoNumberWarnings);
            if (seedWarning != null) (warnings ??= new List<string>()).Add(seedWarning);

            return BuildResult(sb, entityName, logicalName, schemaName, "String", displayName, reqLevel, metadataId, solutionName, published,
                extra: extra, description: description, warnings: warnings);
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
            if (formatError != null) return Error(formatError, "Valid values: 'Text' (default), 'RichText'.");
            var attr = new MemoAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                MaxLength = maxLength,
                FormatName = memoFormat
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
            if (formatError != null) return Error(formatError, "Valid values: 'None' (default), 'Duration', 'TimeZone', 'Language', 'Locale'.");

            var attr = new IntegerAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                Format = resolvedFormat
            };
            if (minValue.HasValue) attr.MinValue = (int)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (int)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                Precision = precision
            };
            if (minValue.HasValue) attr.MinValue = (decimal)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (decimal)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                Precision = precision,
                PrecisionSource = precisionSource
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                Precision = precision
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                OptionSet = new BooleanOptionSetMetadata(
                    new OptionMetadata(new Label(trueLabel.Trim(), McpHelper.GetBaseLanguageCode(_orgService)), 1),
                    new OptionMetadata(new Label(falseLabel.Trim(), McpHelper.GetBaseLanguageCode(_orgService)), 0))
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));

            // Apply default value: accepts 'true'/'false' or '1'/'0'. false is the Dataverse convention for unchecked.
            if (!string.IsNullOrWhiteSpace(defaultValue))
            {
                var dv = defaultValue.Trim().ToLowerInvariant();
                if (dv == "true" || dv == "1")
                    attr.DefaultValue = true;
                else if (dv == "false" || dv == "0")
                    attr.DefaultValue = false;
                else
                    return Error(
                        $"Invalid default_value '{defaultValue.Trim()}' for boolean.",
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
            if (behaviorError != null) return Error(behaviorError, "Valid values: 'UserLocal' (default), 'DateOnly', 'TimeZoneIndependent'.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                Format = dateFormat,
                DateTimeBehavior = dtBehavior
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                error = $"Invalid behavior '{behavior}'.";
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
                return Error(
                    "lookup_target is required for lookup type.",
                    "Provide a target entity logical name (e.g. 'contact'). For polymorphic, comma-separate: 'account,contact,lead'. Use inspect_metadata(resource='tables') to find valid entity logical names.");

            var targetInputs = lookupTarget.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(t => t.Trim())
                .Where(t => !string.IsNullOrEmpty(t))
                .ToArray();
            var targets = new List<string>();
            foreach (var targetInput in targetInputs)
            {
                var targetResolve = DisplayNameFirstResolver.ResolveEntity(_orgService, targetInput, "manage_schema(resource='column')");
                if (!targetResolve.IsSuccess)
                    return Error($"lookup_target '{targetInput}': {targetResolve.Error.Split("\r\n")[0]}", "Use inspect_metadata(resource='tables') to find valid entity logical names.");
                targets.Add(targetResolve.Value.LogicalName);
            }
            targets = targets.Distinct(StringComparer.OrdinalIgnoreCase).ToList();

            if (targets.Count == 0)
                return Error($"No valid target entities found in lookup_target: '{lookupTarget}'.", "Use inspect_metadata(resource='tables') to find valid entity logical names.");

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
                    DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService))
                }
            };
            if (!string.IsNullOrWhiteSpace(description))
                request.Lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
            // Apply flag overrides (audit / advanced find / field security / sort).
            createFlags?.Apply(request.Lookup);
            SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);

            if (_options.DryRun) return DryRunCreatePreview(entityName, logicalName, schemaName, "Lookup", displayName, reqLevel, solutionName);

            // Wrap create in retry to handle lock contention
            Guid metadataId = Guid.Empty;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                var response = (CreateOneToManyResponse)DataverseMutationExecutor.Execute(_context, _orgService, request);
                metadataId = response.AttributeId;
            }, $"create Lookup column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService))
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                var response = DataverseMutationExecutor.Execute(_context, _orgService, request);
                metadataId = (Guid)response.Results["AttributeId"];
            }, $"create PolymorphicLookup column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService))
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                var response = (CreateCustomerRelationshipsResponse)DataverseMutationExecutor.Execute(_context, _orgService, request);
                metadataId = response.AttributeId;
            }, $"create Customer column '{logicalName}' on entity '{entityName}'");

            if (!createSuccess)
            {
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                var choiceResolve = DisplayNameFirstResolver.ResolveGlobalOptionSet(_orgService, globalOptionSetName, "manage_schema(resource='column')");
                if (!choiceResolve.IsSuccess)
                    return Error($"global_optionset_name '{globalOptionSetName.Trim()}': {choiceResolve.Error.Split("\r\n")[0]}", "Use manage_schema(resource='choice', action='list') to find valid option set names.");
                globalOptionSetName = choiceResolve.Value.Name;

                // Use existing global option set
                if (isMultiSelect)
                {
                    attr = new MultiSelectPicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                        OptionSet = new OptionSetMetadata { IsGlobal = true, Name = globalOptionSetName.Trim() }
                    };
                }
                else
                {
                    attr = new PicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                        OptionSet = new OptionSetMetadata { IsGlobal = true, Name = globalOptionSetName.Trim() }
                    };
                }
                optionLabels.Add($"GlobalOptionSet: {globalOptionSetName.Trim()}");
                var defaultErr = ApplyPicklistDefaultValue(attr, defaultValue, isMultiSelect, knownOptionValues: null);
                if (defaultErr != null) return Error(defaultErr, "Picklist: an integer option value matching one of 'options'. Boolean: 'true'/'false'. Multipicklist: not supported.");
            }
            else
            {
                // Parse local options
                var (parsedOptions, parseError) = ParseOptions(optionsJson);
                if (parseError != null)
                    return Error(
                        $"Invalid options JSON for {typeName} — {parseError}.",
                        "Expected format: [{\"label\":\"Low\",\"value\":100000000},{\"label\":\"High\",\"value\":100000001}]. Optional 'color' field per option.");
                if (parsedOptions == null || parsedOptions.Count == 0)
                    return Error(
                        $"options or global_optionset_name is required for {typeName}.",
                        "Provide options as a JSON array or set global_optionset_name to an existing option set name.");

                var optionSet = new OptionSetMetadata { IsGlobal = false, OptionSetType = OptionSetType.Picklist };
                foreach (var opt in parsedOptions)
                {
                    var optMeta = new OptionMetadata(new Label(opt.Label, McpHelper.GetBaseLanguageCode(_orgService)), opt.Value);
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
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                        OptionSet = optionSet
                    };
                }
                else
                {
                    attr = new PicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                        OptionSet = optionSet
                    };
                }

                // Validate + apply default value (local option set — options known here).
                var defaultErr = ApplyPicklistDefaultValue(attr, defaultValue, isMultiSelect, knownOptionValues: parsedOptions.Select(o => o.Value).ToList());
                if (defaultErr != null) return Error(defaultErr, "Picklist: an integer option value matching one of 'options'. Boolean: 'true'/'false'. Multipicklist: not supported.");
            }

            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService))
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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
            string solutionName, ColumnFlags createFlags = null, bool? canStoreFullImage = null)
        {
            var reqLevel = createFlags?.RequiredLevel ?? AttributeRequiredLevel.None;
            var attr = new ImageAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                IsPrimaryImage = false,
                CanStoreFullImage = canStoreFullImage == true
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
            }

            if (_options.DryRun)
                return DryRunCreatePreview(entityName, logicalName, schemaName, attr, displayName, reqLevel, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Image", displayName, reqLevel);
            sb.AppendLine($"CanStoreFullImage: {(attr.CanStoreFullImage == true ? "True" : "False")}");
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Image", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "canStoreFullImage", (attr.CanStoreFullImage == true ? "true" : "false") } },
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
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService)),
                MaxSizeInKB = maxSizeInKB
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                return Error(
                    $"Failed to create column '{logicalName}' on entity '{entityName}' after multiple retry attempts.",
                    "Lock contention or unpropagated table metadata. Wait 30 seconds and retry. When creating many columns: create all tables first, wait 15-20 seconds, then create the columns.");
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

            var response = (CreateAttributeResponse)DataverseMutationExecutor.Execute(_context, _orgService, request);
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
                return "Could not find the Rollup relationship reference in formula_definition.";

            var sourceRelationshipName = match.Groups["relationship"].Value;
            var sourceLookupAttribute = match.Groups["lookup"].Value;

            var sourceService = _formulaSourceOrgService ?? _orgService;
            var sourceMetadata = ((RetrieveEntityResponse)sourceService.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = sourceEntityName,
                RetrieveAsIfPublished = true
            })).EntityMetadata;
            var targetMetadata = ((RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = targetEntityName,
                RetrieveAsIfPublished = true
            })).EntityMetadata;

            var sourceRelationship = sourceMetadata.OneToManyRelationships?.FirstOrDefault(
                relationship => string.Equals(relationship.SchemaName, sourceRelationshipName, StringComparison.Ordinal));
            if (sourceRelationship == null)
                return $"Rollup source relationship '{sourceRelationshipName}' was not found on table '{sourceEntityName}'.";

            var targetRelationship = targetMetadata.OneToManyRelationships?.FirstOrDefault(
                relationship =>
                    string.Equals(relationship.ReferencingEntity, sourceRelationship.ReferencingEntity, StringComparison.OrdinalIgnoreCase) &&
                    string.Equals(relationship.ReferencedEntity, targetEntityName, StringComparison.OrdinalIgnoreCase));
            if (targetRelationship == null && !ReferenceEquals(sourceService, _orgService))
            {
                var srcPrefix = ExtractPrefixWithUnderscore(sourceEntityName);
                var tgtPrefix = ExtractPrefixWithUnderscore(targetEntityName);
                if (!string.IsNullOrEmpty(srcPrefix) && !string.IsNullOrEmpty(tgtPrefix) &&
                    sourceRelationship.ReferencingEntity != null &&
                    sourceRelationship.ReferencingEntity.StartsWith(srcPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    var mappedRefEntity = tgtPrefix + sourceRelationship.ReferencingEntity.Substring(srcPrefix.Length);
                    targetRelationship = targetMetadata.OneToManyRelationships?.FirstOrDefault(
                        relationship =>
                            string.Equals(relationship.ReferencingEntity, mappedRefEntity, StringComparison.OrdinalIgnoreCase) &&
                            string.Equals(relationship.ReferencedEntity, targetEntityName, StringComparison.OrdinalIgnoreCase));
                }
            }
            if (targetRelationship == null)
                return $"No matching Rollup relationship from '{sourceRelationship.ReferencingEntity}' to target table '{targetEntityName}' was found.";

            mapping = new FormulaRelationshipMapping(
                sourceRelationshipName,
                targetRelationship.SchemaName,
                sourceLookupAttribute,
                targetRelationship.ReferencingAttribute);
            return null;
        }

        private bool PublishIfNeeded(string entityName)
        {
            return PublishHelper.PublishEntity(_context, _orgService, entityName);
        }

        private static StringBuilder FormatHeader(string entityName, string logicalName, string typeName, string displayName, AttributeRequiredLevel reqLevel)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[Success] Created {typeName} column '{logicalName}' on entity '{entityName}'.");
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
            Dictionary<string, string> extra = null, string description = null, List<string> warnings = null)
        {
            var actualLogicalName = ResolveCreatedAttributeLogicalName(entityName, metadataId, logicalName);
            if (!string.Equals(actualLogicalName, logicalName, StringComparison.OrdinalIgnoreCase))
                sb.Replace($"'{logicalName}'", $"'{actualLogicalName}'");

            if (_requestedAlternateKey == true && !_options.DryRun)
            {
                var keyWarning = TryCreateAlternateKey(entityName, actualLogicalName, schemaName, displayName, solutionName);
                if (keyWarning == null)
                {
                    extra ??= new Dictionary<string, string>();
                    extra["isAlternateKey"] = "true";
                }
                else
                {
                    warnings ??= new List<string>();
                    warnings.Add(keyWarning);
                }
            }

            var structured = new ManageColumnResult
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
                Extra = extra?.Count > 0 ? extra : null,
                Warnings = warnings is { Count: > 0 } ? warnings : null
            };

            // Text = one-line summary (factory duplicates it into the payload as "summary");
            // the former multi-line detail lines all live in the structured payload.
            var firstLine = sb.ToString().Split('\n')[0].TrimEnd('\r');
            if (warnings is { Count: > 0 })
                firstLine += $" {warnings.Count} warning(s).";
            return Success(firstLine, structured);
        }

        /// <summary>
        /// Execute <see cref="SetAutoNumberSeedRequest"/> with lock-contention retry.
        /// The seed is environment-only (not metadata, not in solutions — no publish).
        /// Returns null on success, or a warning message when all retries failed.
        /// Non-contention failures propagate to the caller.
        /// </summary>
        private string ExecuteAutoNumberSeed(string entityName, string attributeName, long seed, string succeededAction)
        {
            var request = new Microsoft.Crm.Sdk.Messages.SetAutoNumberSeedRequest
            {
                EntityName = entityName,
                AttributeName = attributeName,
                Value = seed
            };
            // Fail fast in readonly mode BEFORE the retry loop: the block refusal
            // ("Mutation blocked: …") contains the substring "lock", which
            // MetadataRetryHelper's contention check would otherwise classify as a
            // retryable lock error and turn the refusal into a warning.
            _context.AssertMutationAllowed($"Execute {request.RequestName}");
            var ok = MetadataRetryHelper.RetryOnLockContention(
                () => { DataverseMutationExecutor.Execute(_context, _orgService, request); },
                $"set autonumber seed {seed} on '{entityName}.{attributeName}'");
            if (ok) return null;
            return
                $"Column {succeededAction} but SetAutoNumberSeed failed after multiple retry attempts " +
                $"(lock contention). The column itself is fine — retry the seed: manage_schema(resource='column') with logical_name='{attributeName}' and auto_number_seed={seed}.";
        }

        private string ResolveCreatedAttributeLogicalName(string entityName, Guid metadataId, string fallbackLogicalName)
        {
            if (metadataId == Guid.Empty || _options.DryRun)
                return fallbackLogicalName;

            try
            {
                var response = (RetrieveAttributeResponse)_orgService.Execute(new RetrieveAttributeRequest
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
            _formulaSourceOrgService = _orgService;
            _formulaCustomReplacements = null;

            var rawRef = (reference ?? "").Trim();
            var pipeIdx = rawRef.IndexOf('|');
            if (pipeIdx >= 0)
            {
                _formulaCustomReplacements = rawRef.Substring(pipeIdx + 1);
                rawRef = rawRef.Substring(0, pipeIdx).Trim();
            }

            var parts = rawRef.Split(':');
            if (parts.Length != 2 || string.IsNullOrWhiteSpace(parts[0]) || string.IsNullOrWhiteSpace(parts[1]))
            {
                error = "Invalid formula_definition. Pass the exact `table_logical_name:column_logical_name` reference returned by inspect_metadata(resource='tables').";
                return false;
            }

            sourceEntity = parts[0].Trim();
            sourceAttribute = parts[1].Trim();
            if (!IsLogicalName(sourceEntity) || !IsLogicalName(sourceAttribute))
            {
                error = "Invalid formula_definition. Table and column must be lowercase Dataverse logical names separated by one colon.";
                return false;
            }

            AttributeMetadata metadata = null;
            Exception lastEx = null;
            try
            {
                var response = (RetrieveAttributeResponse)_orgService.Execute(new RetrieveAttributeRequest
                {
                    EntityLogicalName = sourceEntity,
                    LogicalName = sourceAttribute,
                    RetrieveAsIfPublished = true
                });
                metadata = response.AttributeMetadata;
            }
            catch (Exception ex)
            {
                lastEx = ex;
                if (_connections != null)
                {
                    foreach (var group in _connections.ListGroups())
                    {
                        try
                        {
                            var bundle = _connections.ResolveAsync(group.Env, System.Threading.CancellationToken.None).GetAwaiter().GetResult();
                            if (bundle?.OrgService == null || ReferenceEquals(bundle.OrgService, _orgService))
                                continue;
                            var response = (RetrieveAttributeResponse)bundle.OrgService.Execute(new RetrieveAttributeRequest
                            {
                                EntityLogicalName = sourceEntity,
                                LogicalName = sourceAttribute,
                                RetrieveAsIfPublished = true
                            });
                            metadata = response.AttributeMetadata;
                            _formulaSourceOrgService = bundle.OrgService;
                            lastEx = null;
                            break;
                        }
                        catch
                        {
                            // Try next configured environment group
                        }
                    }
                }
            }

            if (metadata == null)
            {
                error = $"Cannot resolve formula source '{sourceEntity}:{sourceAttribute}'. {lastEx?.Message}";
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
                error = $"Source column '{sourceEntity}:{sourceAttribute}' is not a Calculated, Rollup, or PowerFx column.";
                return false;
            }

            formulaDefinition = FormulaColumnSpec.ReadDefinition(metadata);
            if (string.IsNullOrWhiteSpace(formulaDefinition))
            {
                error = $"Source column '{sourceEntity}:{sourceAttribute}' has an empty FormulaDefinition and cannot be cloned.";
                return false;
            }

            return true;
        }

        private CallToolResult TryBuildFormulaSpec(string entityName, string attributeName, string attributeType,
            string formulaDefinition, string formulaSourceType, string rawFormulaDefinition, out FormulaColumnSpec formulaSpec)
        {
            formulaSpec = null;
            if (rawFormulaDefinition != null)
            {
                int sourceTypeVal;
                string kind;
                if (!string.IsNullOrWhiteSpace(formulaSourceType))
                {
                    var normalizedKind = formulaSourceType.Trim().ToLowerInvariant();
                    var (parsedSourceType, kindErr) = ParseFormulaSourceType(normalizedKind);
                    if (kindErr != null)
                        return Error(kindErr, "Valid values for raw_formula_definition: 'calculated', 'rollup'.");
                    if (parsedSourceType is not (1 or 2))
                        return Error("raw_formula_definition is only supported for Calculated or Rollup columns.",
                            "Set formula_source_type to 'calculated' or 'rollup'.");
                    sourceTypeVal = parsedSourceType;
                    kind = parsedSourceType == 1 ? "calculated" : "rollup";
                }
                else if (TryInferRawFormulaSourceType(rawFormulaDefinition, out sourceTypeVal, out kind))
                {
                    // Inferred from the XAML structure (Rollup vs Calculated).
                }
                else
                {
                    return Error("formula_source_type ('calculated' or 'rollup') is required when creating a column with raw_formula_definition.",
                        "Pass formula_source_type='calculated' or formula_source_type='rollup'.");
                }

                var formulaCompatErr = ValidateFormulaAttributeType(attributeType, kind);
                if (formulaCompatErr != null)
                    return Error(formulaCompatErr, "Formula columns (Power Fx/Calculated/Rollup) only work on: string, memo, integer, decimal, money, float, double, boolean, datetime. Remove raw_formula_definition/formula_source_type for this attribute_type.");

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, rawFormulaDefinition, kind);
                return null;
            }

            if (!string.IsNullOrWhiteSpace(formulaDefinition) &&
                !string.IsNullOrWhiteSpace(formulaSourceType) &&
                formulaSourceType.Trim().Equals("powerfx", StringComparison.OrdinalIgnoreCase) &&
                !IsFormulaCloneReference(formulaDefinition))
            {
                var formulaCompatErr = ValidateFormulaAttributeType(attributeType, "powerfx");
                if (formulaCompatErr != null) return Error(formulaCompatErr, "Formula columns (Power Fx/Calculated/Rollup) only work on: string, memo, integer, decimal, money, float, double, boolean, datetime. Remove formula_definition/formula_source_type for this attribute_type.");

                formulaSpec = new FormulaColumnSpec(3, formulaDefinition.Trim(), "powerfx");
                return null;
            }

            if (!string.IsNullOrWhiteSpace(formulaDefinition))
            {
                if (!TryResolveFormulaCloneSource(formulaDefinition, out var resolvedFormula, out var sourceTypeVal,
                    out var kind, out var sourceEntity, out var sourceAttribute, out var sourceError))
                    return Error(sourceError, "Use inspect_metadata(resource='tables') to read the source column and pass its formulaDefinition reference unchanged.");

                if (!string.IsNullOrWhiteSpace(formulaSourceType))
                {
                    var (requestedSourceType, requestedKindError) = ParseFormulaSourceType(formulaSourceType.Trim().ToLowerInvariant());
                    if (requestedKindError != null) return Error(requestedKindError, "Valid values: 'powerfx' (default), 'calculated', 'rollup'.");
                    if (requestedSourceType != sourceTypeVal)
                        return Error($"formula_source_type does not match source column '{sourceEntity}:{sourceAttribute}'.", $"Omit it in clone mode; the server derives '{kind}' from Dataverse.");
                }

                var formulaCompatErr = ValidateFormulaAttributeType(attributeType, kind);
                if (formulaCompatErr != null) return Error(formulaCompatErr, "Formula columns (Power Fx/Calculated/Rollup) only work on: string, memo, integer, decimal, money, float, double, boolean, datetime. Remove formula_definition/formula_source_type for this attribute_type.");

                FormulaRelationshipMapping relationshipMapping = null;
                if (kind == "rollup")
                {
                    var mappingError = TryResolveRollupRelationshipMapping(
                        resolvedFormula, sourceEntity, entityName, out relationshipMapping);
                    if (mappingError != null) return Error(mappingError, "Use manage_schema(resource='relationship') to check the 1:N relationships between the source and target tables.");
                }

                if (sourceTypeVal == 3)
                {
                    var remapPrefix = !string.Equals(sourceEntity, entityName, StringComparison.OrdinalIgnoreCase) ||
                        !ReferenceEquals(_formulaSourceOrgService, _orgService);
                    resolvedFormula = FormulaReferenceHelper.RewritePowerFxReferences(
                        resolvedFormula, sourceEntity, entityName, sourceAttribute, attributeName,
                        remapPrefix ? ExtractPrefixWithUnderscore(sourceAttribute) : null,
                        remapPrefix ? ExtractPrefixWithUnderscore(attributeName) : null);
                    resolvedFormula = NormalizePowerFxExpression(resolvedFormula);
                }
                else
                {
                    resolvedFormula = FormulaReferenceHelper.RewriteFormulaReferences(
                        resolvedFormula, sourceEntity, entityName, sourceAttribute, attributeName, relationshipMapping);
                    resolvedFormula = ApplyCrossEnvFormulaRewrites(resolvedFormula, entityName, sourceAttribute, attributeName);
                }
                resolvedFormula = ApplyCustomFormulaRewrites(resolvedFormula);

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, resolvedFormula, kind);
                return null;
            }

            if (!string.IsNullOrWhiteSpace(formulaSourceType))
            {
                var kind = formulaSourceType.Trim().ToLowerInvariant();
                var (sourceTypeVal, kindErr) = ParseFormulaSourceType(kind);
                if (kindErr != null) return Error(kindErr, "Valid values: 'powerfx' (default), 'calculated', 'rollup'.");

                var formulaCompatErr = ValidateFormulaAttributeType(attributeType, kind);
                if (formulaCompatErr != null) return Error(formulaCompatErr, "Formula columns (Power Fx/Calculated/Rollup) only work on: string, memo, integer, decimal, money, float, double, boolean, datetime. Remove formula_definition/formula_source_type for this attribute_type.");

                formulaSpec = new FormulaColumnSpec(sourceTypeVal, null, kind);
            }

            return null;
        }

        private string TryCreateAlternateKey(string entityName, string logicalName, string schemaName, string displayName, string solutionName)
        {
            try
            {
                var keyLabel = string.IsNullOrWhiteSpace(displayName) ? logicalName : displayName.Trim();
                var keySchema = string.IsNullOrWhiteSpace(schemaName) ? logicalName : schemaName.Trim();
                var request = new CreateEntityKeyRequest
                {
                    EntityName = entityName,
                    EntityKey = new EntityKeyMetadata
                    {
                        SchemaName = keySchema,
                        LogicalName = keySchema.ToLowerInvariant(),
                        DisplayName = new Label(keyLabel, McpHelper.GetBaseLanguageCode(_orgService)),
                        KeyAttributes = new[] { logicalName }
                    }
                };
                SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionName);
                DataverseMutationExecutor.Execute(_context, _orgService, request);
                return null;
            }
            catch (InvalidOperationException) when (_context.MutationsBlocked)
            {
                throw;
            }
            catch (Exception ex)
            {
                return $"Column created, but failed to create Alternate Key for '{entityName}.{logicalName}': {ex.Message}";
            }
        }

        private static bool IsFormulaCloneReference(string reference)
        {
            if (string.IsNullOrWhiteSpace(reference)) return false;
            var rawRef = reference.Trim();
            var pipeIdx = rawRef.IndexOf('|');
            if (pipeIdx >= 0) rawRef = rawRef.Substring(0, pipeIdx).Trim();
            var parts = rawRef.Split(':');
            return parts.Length == 2 && IsLogicalName(parts[0].Trim()) && IsLogicalName(parts[1].Trim());
        }

        private static string ExtractPrefixWithUnderscore(string logicalName)
        {
            if (string.IsNullOrWhiteSpace(logicalName)) return null;
            var idx = logicalName.IndexOf('_');
            return idx > 0 ? logicalName.Substring(0, idx + 1) : null;
        }

        private static string NormalizePowerFxExpression(string expression)
        {
            var value = expression?.Trim() ?? "";
            return value.StartsWith('=') ? value.Substring(1).TrimStart() : value;
        }

        private string ResolveRawFormulaFilePath(string pathOrXaml)
        {
            if (string.IsNullOrWhiteSpace(pathOrXaml) || pathOrXaml.StartsWith('<'))
                return null;

            if (File.Exists(pathOrXaml))
                return pathOrXaml;

            if (!Path.IsPathRooted(pathOrXaml) && !string.IsNullOrWhiteSpace(_workspaceFolder))
            {
                var workspaceCandidate = Path.Combine(_workspaceFolder, pathOrXaml);
                if (File.Exists(workspaceCandidate))
                    return workspaceCandidate;
            }

            return null;
        }

        private static string ReadRawFormulaFromFile(string filePath)
        {
            var content = File.ReadAllText(filePath, Encoding.UTF8).Trim();
            if (content.StartsWith('{'))
            {
                try
                {
                    var backup = JsonSerializer.Deserialize<ColumnFormulaBackup>(content);
                    if (!string.IsNullOrWhiteSpace(backup?.FormulaDefinition))
                        return backup.FormulaDefinition.Trim();
                }
                catch
                {
                    // Fall through to standard XAML validation if not a valid backup JSON
                }
            }
            return content;
        }

        private static string ValidateRawFormulaXaml(string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return "raw_formula_definition must contain a valid Calculated or Rollup XAML definition (<Activity ...>).";

            var trimmed = value.Trim();
            if (!trimmed.StartsWith('<'))
                return "raw_formula_definition must contain a valid Calculated or Rollup XAML definition (<Activity ...>).";

            try
            {
                var doc = XDocument.Parse(trimmed, LoadOptions.PreserveWhitespace);
                if (doc.Root == null || !string.Equals(doc.Root.Name.LocalName, "Activity", StringComparison.Ordinal))
                    return "raw_formula_definition must have an <Activity ...> root element.";
                return null;
            }
            catch (XmlException ex)
            {
                return $"raw_formula_definition contains invalid XML: {ex.Message}";
            }
        }

        private static bool IsRawFormulaXaml(string value) => ValidateRawFormulaXaml(value) == null;

        private static bool TryInferRawFormulaSourceType(string xaml, out int sourceType, out string kind)
        {
            sourceType = 0;
            kind = null;
            if (!IsRawFormulaXaml(xaml))
                return false;

            if (xaml.IndexOf("RollupRuleStep", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("relatedlinked_", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("DisplayName=\"Aggregate\"", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("DisplayName='Aggregate'", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                sourceType = 2;
                kind = "rollup";
                return true;
            }

            if (xaml.IndexOf("ConditionBranch", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("SetEntityProperty", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("GetEntityProperty", StringComparison.OrdinalIgnoreCase) >= 0 ||
                xaml.IndexOf("EvaluateExpression", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                sourceType = 1;
                kind = "calculated";
                return true;
            }

            return false;
        }

        private string ApplyCrossEnvFormulaRewrites(string formula, string targetEntityName, string sourceAttribute, string targetAttribute)
        {
            if (string.IsNullOrEmpty(formula)) return formula;
            var result = formula;

            if (_formulaSourceOrgService != null && !ReferenceEquals(_formulaSourceOrgService, _orgService))
            {
                var srcPrefix = ExtractPrefixWithUnderscore(sourceAttribute);
                var tgtPrefix = ExtractPrefixWithUnderscore(targetAttribute);
                if (!string.IsNullOrEmpty(srcPrefix) && !string.IsNullOrEmpty(tgtPrefix) &&
                    !srcPrefix.Equals(tgtPrefix, StringComparison.OrdinalIgnoreCase))
                {
                    result = System.Text.RegularExpressions.Regex.Replace(
                        result,
                        $@"(?:\b|(?<=related_)|(?<=relatedlinked_)){System.Text.RegularExpressions.Regex.Escape(srcPrefix)}(?=[A-Za-z0-9_])",
                        tgtPrefix);
                    result = System.Text.RegularExpressions.Regex.Replace(
                        result,
                        $@"relatedlinked_[^#""\]]+",
                        m => m.Value.Replace($"_{srcPrefix}", $"_{tgtPrefix}"));
                }
            }

            if (_orgService != null && !string.IsNullOrWhiteSpace(targetEntityName) &&
                result.IndexOf("relatedlinked_", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var relMatches = System.Text.RegularExpressions.Regex.Matches(
                    result,
                    @"relatedlinked_(?<relationship>[^#]+)#(?<lookup>[^#]+)#(?<relatedEntity>[^#]+)#");
                if (relMatches.Count > 0)
                {
                    try
                    {
                        var entityResp = (RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
                        {
                            LogicalName = targetEntityName,
                            EntityFilters = EntityFilters.Relationships,
                            RetrieveAsIfPublished = true
                        });
                        var oneToMany = entityResp?.EntityMetadata?.OneToManyRelationships;
                        if (oneToMany != null)
                        {
                            foreach (System.Text.RegularExpressions.Match m in relMatches)
                            {
                                var oldRelName = m.Groups["relationship"].Value;
                                var lookupName = m.Groups["lookup"].Value;
                                var relatedEntity = m.Groups["relatedEntity"].Value;
                                var actualRel = oneToMany.FirstOrDefault(r =>
                                    string.Equals(r.ReferencingEntity, relatedEntity, StringComparison.OrdinalIgnoreCase) &&
                                    string.Equals(r.ReferencingAttribute, lookupName, StringComparison.OrdinalIgnoreCase));
                                if (actualRel != null && !string.IsNullOrEmpty(actualRel.SchemaName) &&
                                    !actualRel.SchemaName.Equals(oldRelName, StringComparison.OrdinalIgnoreCase))
                                {
                                    result = result.Replace(oldRelName, actualRel.SchemaName);
                                }
                            }
                        }
                    }
                    catch
                    {
                        // Ignore relationship metadata resolution errors in offline/mocked tests
                    }
                }
            }

            if (_orgService != null && !string.IsNullOrWhiteSpace(targetEntityName) &&
                result.IndexOf("related_", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var matches = System.Text.RegularExpressions.Regex.Matches(
                    result,
                    @"related_(?<lookup>[a-z0-9_]+)#(?<relEntity>[a-z0-9_]+)");
                foreach (System.Text.RegularExpressions.Match m in matches)
                {
                    var lookupName = m.Groups["lookup"].Value;
                    var oldTargetEntity = m.Groups["relEntity"].Value;
                    try
                    {
                        var lookupResp = (RetrieveAttributeResponse)_orgService.Execute(new RetrieveAttributeRequest
                        {
                            EntityLogicalName = targetEntityName,
                            LogicalName = lookupName,
                            RetrieveAsIfPublished = true
                        });
                        if (lookupResp?.AttributeMetadata is LookupAttributeMetadata lookupMeta &&
                            lookupMeta.Targets is { Length: 1 })
                        {
                            var actualTargetEntity = lookupMeta.Targets[0];
                            if (!string.IsNullOrEmpty(actualTargetEntity) &&
                                !actualTargetEntity.Equals(oldTargetEntity, StringComparison.OrdinalIgnoreCase))
                            {
                                result = result.Replace($"related_{lookupName}#{oldTargetEntity}", $"related_{lookupName}#{actualTargetEntity}");
                                result = result.Replace($"EntityName=\"{oldTargetEntity}\"", $"EntityName=\"{actualTargetEntity}\"");
                                if (oldTargetEntity.Equals("systemuser", StringComparison.OrdinalIgnoreCase) &&
                                    actualTargetEntity.Equals("contact", StringComparison.OrdinalIgnoreCase))
                                {
                                    result = result.Replace("Attribute=\"internalemailaddress\"", "Attribute=\"emailaddress1\"");
                                }
                            }
                        }
                    }
                    catch
                    {
                        // Ignore lookup metadata resolution errors in offline/mocked tests
                    }
                }
            }

            return result;
        }

        private string ApplyCustomFormulaRewrites(string formula)
        {
            if (!string.IsNullOrWhiteSpace(_formulaCustomReplacements))
            {
                foreach (var pair in _formulaCustomReplacements.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    if (TrySplitFormulaReplacementPair(pair, out var oldToken, out var newToken))
                        formula = formula.Replace(oldToken, newToken);
                }
            }

            return formula;
        }

        private static bool TrySplitFormulaReplacementPair(string pair, out string oldToken, out string newToken)
        {
            oldToken = null;
            newToken = null;
            if (string.IsNullOrWhiteSpace(pair)) return false;

            var arrowIdx = pair.IndexOf("->", StringComparison.Ordinal);
            if (arrowIdx > 0)
            {
                oldToken = pair.Substring(0, arrowIdx).Trim();
                newToken = pair.Substring(arrowIdx + 2).Trim();
                return !string.IsNullOrEmpty(oldToken);
            }

            var quotedEqIdx = pair.IndexOf("\"=", StringComparison.Ordinal);
            var eqIdx = quotedEqIdx >= 0 ? quotedEqIdx + 1 : pair.IndexOf('=');
            if (eqIdx <= 0) return false;

            oldToken = pair.Substring(0, eqIdx).Trim();
            newToken = pair.Substring(eqIdx + 1).Trim();
            return !string.IsNullOrEmpty(oldToken);
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
                _ => (0, $"Invalid formula_source_type '{kind}'.")
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
                    $"formula_definition ({kind}) is not supported on attribute_type '{attributeType}'. " +
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
                error = $"Invalid format '{format}'.";
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
                error = $"Invalid format for integer '{format}'.";
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
                error = $"Invalid format for memo '{format}'.";
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
                    "default_value is not supported for multipicklist columns. " +
                    "Multi-select option sets do not support a default value in the Power Apps UI. " +
                    "Omit default_value for multipicklist.";
            }

            // Parse the requested default value (single integer for single-select Picklist).
            if (!int.TryParse(defaultValue.Trim(), out var dv))
                return $"Invalid default_value '{defaultValue.Trim()}'. Expected an integer option value (e.g. 100000002).";

            // Validate membership when the caller supplied the local option values.
            if (knownOptionValues != null && knownOptionValues.Count > 0)
            {
                var match = knownOptionValues.Any(v => v.HasValue && v.Value == dv);
                if (!match)
                    return
                        $"default_value '{dv}' does not match any option in the local option set. " +
                        "default_value must equal one of the option values provided in 'options'.";
            }

            if (attr is PicklistAttributeMetadata plm)
                plm.DefaultFormValue = dv;
            else
                return "default_value can only be applied to a Picklist (single-select) attribute.";

            return null;
        }

        private CallToolResult HandleException(Exception ex, string entityName, string attributeName, string solutionName)
        {
            var msg = ex.Message;

            if (msg.Contains("already exists", StringComparison.OrdinalIgnoreCase) ||
                msg.Contains("duplicate", StringComparison.OrdinalIgnoreCase))
            {
                return Error(
                    $"Attribute '{attributeName}' already exists on entity '{entityName}'.",
                    "Use inspect_metadata(resource='tables') to inspect existing attributes, or choose a different name.",
                    details: new { serverMessage = msg });
            }

            if (msg.Contains("entity", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return Error(
                    $"Entity '{entityName}' not found.",
                    "Use inspect_metadata(resource='tables') to find the correct entity logical name.",
                    details: new { serverMessage = msg });
            }

            if (msg.Contains("solution", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return Error(
                    $"Solution '{solutionName}' not found.",
                    "Use inspect_metadata(resource='solution_components') to find valid solution names.",
                    details: new { serverMessage = msg });
            }

            return Error(
                $"Failed to create attribute '{entityName}.{attributeName}'.",
                "Check the parameters and the server message in [Detail]; use inspect_metadata(resource='tables') to verify entity/attribute names.",
                details: new { serverMessage = msg });
        }

        // ========== UPDATE MODE ==========

        private CallToolResult UpdateExistingAttribute(string entityName, string attributeName,
            AttributeMetadata metadata, string displayName, string description, string requiredLevel,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel,
            string addOptions, string updateOptions, string deleteOptions,
            bool? isAuditEnabled, bool? isValidForAdvancedFind, bool? isSecured, bool? isSortable, string behavior, int precisionSource,
            string defaultValue = "", bool? canStoreFullImage = null,
            string autoNumberFormat = "", bool clearAutoNumber = false, long? autoNumberSeed = null,
            List<string> autoNumberWarnings = null, int autoNumberMinLength = 0)
        {
            try
            {
                var changes = new List<string>();
                var structuredChanges = new Dictionary<string, UpdateAttributeChange>();
                var hasAutoNumberRequest = !string.IsNullOrWhiteSpace(autoNumberFormat) || clearAutoNumber || autoNumberSeed.HasValue;

                // --- Generic property updates (all types) ---
                if (!string.IsNullOrWhiteSpace(displayName))
                {
                    var oldVal = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != displayName.Trim())
                    {
                        metadata.DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
                        changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName.Trim()}\"");
                        structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName.Trim() };
                    }
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = metadata.Description?.UserLocalizedLabel?.Label ?? "";
                    if (oldVal != description.Trim())
                    {
                        metadata.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
                        return Error(
                            $"Invalid required_level '{requiredLevel}'.",
                            "Valid values: 'None' (default), 'Recommended', 'Required'.");
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

                // --- Autonumber update validation (needs the existing metadata) ---
                // Seed is NOT a metadata change — it is tracked separately (seedRequested)
                // and executed after the metadata update + publish.
                var seedRequested = autoNumberSeed.HasValue;
                if (hasAutoNumberRequest)
                {
                    if (metadata is not StringAttributeMetadata)
                        return Error(
                            $"auto_number_format/auto_number_seed/clear_auto_number are only supported for string columns, but '{attributeName}' is {GetAttributeTypeName(metadata)}.",
                            "An autonumber column is a StringAttributeMetadata with AutoNumberFormat set. inspect_metadata(resource='tables') shows the column type.");

                    var autoNumberStringMeta = (StringAttributeMetadata)metadata;

                    // Effective format (new `format` if passed, else current) must be Text.
                    if (!string.IsNullOrWhiteSpace(format))
                    {
                        var resolvedUpdateFormat = ResolveStringFormat(format, out var formatErr);
                        if (formatErr == null && resolvedUpdateFormat != StringFormatName.Text)
                            return Error(
                                $"Autonumber columns require format 'Text', but format '{format.Trim()}' was requested.",
                                "Remove format or set format='Text' together with auto_number_format.");
                    }
                    else if (autoNumberStringMeta.FormatName?.Value is not (null or "Text"))
                    {
                        return Error(
                            $"Autonumber columns require format 'Text', but '{attributeName}' currently uses format '{autoNumberStringMeta.FormatName.Value}'.",
                            "Change format to 'Text' first (format='Text'), then pass auto_number_format in the same or a follow-up call.");
                    }

                    // Seed needs an autonumber pattern AFTER this call completes.
                    if (seedRequested)
                    {
                        var effectivePattern =
                            !string.IsNullOrWhiteSpace(autoNumberFormat) ? autoNumberFormat :
                            clearAutoNumber ? "" :
                            (autoNumberStringMeta.AutoNumberFormat ?? "");
                        if (string.IsNullOrEmpty(effectivePattern))
                            return Error(
                                $"auto_number_seed requires an autonumber pattern, but '{attributeName}' would have none after this call.",
                                "Pass auto_number_format together with auto_number_seed, or seed an existing autonumber column (inspect_metadata(resource='tables') shows autoNumberFormat).");
                    }
                }

                // --- Type-specific property updates ---
                var typeError = ApplyTypeSpecificUpdates(metadata, maxLength, minValue, maxValue, precision, format,
                    trueLabel, falseLabel, behavior, precisionSource, changes, structuredChanges, canStoreFullImage,
                    autoNumberFormat, clearAutoNumber, autoNumberMinLength, autoNumberWarnings);
                if (typeError != null)
                    return Error(typeError, "Check format/behavior values against the attribute type; see docs://schema_tools_guide.");

                // Seed is tracked in the structured changes (OldValue "" — reading the
                // current seed would cost an extra request per update) but NOT in the
                // metadata `changes`, so a seed-only call sends no UpdateAttributeRequest.
                if (seedRequested)
                    structuredChanges["autoNumberSeed"] = new UpdateAttributeChange { OldValue = "", NewValue = autoNumberSeed.Value.ToString() };

                // --- Picklist / Boolean default value update ---
                if (!string.IsNullOrWhiteSpace(defaultValue))
                {
                    if (metadata is PicklistAttributeMetadata plmUpdate)
                    {
                        if (!int.TryParse(defaultValue.Trim(), out var dvInt))
                            return Error($"Invalid default_value '{defaultValue.Trim()}'.", "Expected an integer option value (e.g. 100000001).");
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
                        return Error(
                            $"Invalid default_value '{defaultValue.Trim()}' for boolean.",
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
                        return Error(
                            "default_value is not supported for multipicklist columns.",
                            "Multi-select option sets do not support a default value. Omit default_value for multipicklist.");
                    }
                    else
                    {
                        return Error(
                            $"default_value is only supported for Picklist (integer) and Boolean ('true'/'false') columns, but '{attributeName}' is {GetAttributeTypeName(metadata)}.",
                            "Remove default_value or target a Picklist/Boolean column.");
                    }
                }

                if (_requestedFormulaUpdate != null)
                {
                    var oldFormula = FormulaColumnSpec.ReadDefinition(metadata) ?? "";
                    var newFormula = _requestedFormulaUpdate.FormulaDefinition;
                    var sameFormula = metadata.SourceType == 3 && _requestedFormulaUpdate.SourceType == 3
                        ? NormalizePowerFxExpression(oldFormula) == NormalizePowerFxExpression(newFormula)
                        : oldFormula == newFormula;
                    if (!sameFormula)
                    {
                        _requestedFormulaUpdate.Apply(metadata);
                        changes.Add("FormulaDefinition: updated");
                        structuredChanges["formulaDefinition"] = new UpdateAttributeChange
                        {
                            OldValue = oldFormula,
                            NewValue = newFormula
                        };
                    }
                }

                var alternateKeyRequested = _requestedAlternateKey.HasValue;
                if (alternateKeyRequested)
                {
                    structuredChanges["isAlternateKey"] = new UpdateAttributeChange
                    {
                        OldValue = "",
                        NewValue = _requestedAlternateKey.Value.ToString().ToLowerInvariant()
                    };
                }

                var hasOptionRequests = !string.IsNullOrWhiteSpace(addOptions) ||
                    !string.IsNullOrWhiteSpace(updateOptions) ||
                    !string.IsNullOrWhiteSpace(deleteOptions);

                // Plan the complete mutation before any metadata, Web API, option,
                // or publish request. This also covers option-only updates: they
                // must not fall through to PublishIfNeeded below.
                if (_options.DryRun && (changes.Count > 0 || hasOptionRequests || seedRequested || alternateKeyRequested))
                {
                    var plannedParts = new List<string>(changes);
                    if (!string.IsNullOrWhiteSpace(addOptions)) plannedParts.Add("add options");
                    if (!string.IsNullOrWhiteSpace(updateOptions)) plannedParts.Add("update options");
                    if (!string.IsNullOrWhiteSpace(deleteOptions)) plannedParts.Add("delete options");
                    if (seedRequested) plannedParts.Add($"set autonumber seed {autoNumberSeed.Value}");
                    if (alternateKeyRequested) plannedParts.Add($"is_alternate_key={_requestedAlternateKey.Value.ToString().ToLowerInvariant()}");

                    var dryRunSummary =
                        $"Would UPDATE column '{entityName}.{attributeName}' with changes: {string.Join(", ", plannedParts)}";
                    if (autoNumberWarnings is { Count: > 0 })
                        dryRunSummary += $" {autoNumberWarnings.Count} warning(s).";
                    return DryRun(
                        dryRunSummary,
                        new ManageColumnResult
                        {
                            EntityName = entityName,
                            AttributeName = attributeName,
                            LogicalName = attributeName,
                            AttributeType = GetAttributeTypeName(metadata),
                            Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                            SolutionName = string.IsNullOrWhiteSpace(_effectiveSolutionName) ? null : _effectiveSolutionName,
                            Status = "not_executed",
                            Published = false,
                            Warnings = autoNumberWarnings is { Count: > 0 } ? autoNumberWarnings : null
                        });
                }

                // --- Execute metadata update (if any generic/type-specific changes) ---
                string backupPath = null;
                if (changes.Count > 0)
                {
                    if (structuredChanges.TryGetValue("formulaDefinition", out var pendingFormulaChange))
                    {
                        backupPath = SaveFormulaBackup(
                            entityName,
                            attributeName,
                            metadata.SourceType ?? _requestedFormulaUpdate?.SourceType ?? 0,
                            pendingFormulaChange.OldValue ?? "");
                    }

                    var updateRequest = new UpdateAttributeRequest
                    {
                        EntityName = entityName,
                        Attribute = metadata,
                        MergeLabels = true
                    };
                    SolutionComponentCreateHelper.ApplySolutionUniqueName(updateRequest, _effectiveSolutionName);
                    DataverseMutationExecutor.Execute(_context, _orgService, updateRequest);

                    // Verify the pending metadata before publishing a Power Fx change.
                    if (metadata.SourceType == 3 && structuredChanges.TryGetValue("formulaDefinition", out var formulaChange))
                    {
                        var readBack = (RetrieveAttributeResponse)_orgService.Execute(new RetrieveAttributeRequest
                        {
                            EntityLogicalName = entityName,
                            LogicalName = attributeName,
                            RetrieveAsIfPublished = true
                        });
                        var savedMetadata = readBack.AttributeMetadata;
                        var savedFormula = FormulaColumnSpec.ReadDefinition(savedMetadata);
                        if (savedMetadata?.SourceType != 3 ||
                            NormalizePowerFxExpression(savedFormula) != NormalizePowerFxExpression(formulaChange.NewValue))
                            return Error($"Could not verify the Power Fx formula update for '{entityName}.{attributeName}'.",
                                "Dataverse did not return the requested formula in the column metadata. Edit the formula in the Power Apps editor.");
                        formulaChange.NewValue = savedFormula;
                    }

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
                                    _webApi,
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

                if (alternateKeyRequested)
                {
                    if (_requestedAlternateKey.Value)
                    {
                        var keyDisplay = !string.IsNullOrWhiteSpace(displayName)
                            ? displayName.Trim()
                            : (metadata.DisplayName?.UserLocalizedLabel?.Label ?? attributeName);
                        var keySchema = metadata.SchemaName ?? attributeName;
                        var keyError = TryCreateAlternateKey(entityName, attributeName, keySchema, keyDisplay, _effectiveSolutionName);
                        if (keyError != null)
                            return Error(keyError, "Ensure the column type supports alternate keys (string, integer, decimal, lookup, picklist, datetime) and contains unique values.");
                    }
                    else
                    {
                        var delReq = new DeleteEntityKeyRequest
                        {
                            EntityLogicalName = entityName,
                            Name = attributeName
                        };
                        DataverseMutationExecutor.Execute(_context, _orgService, delReq);
                    }
                }

                if (changes.Count == 0 && optionResults.Count == 0 && !seedRequested && !alternateKeyRequested)
                    return Error(
                        $"No changes specified for '{entityName}.{attributeName}'.",
                        "Provide at least one updatable parameter: display_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, true_label, false_label, add_options, update_options, delete_options, default_value (picklist/boolean), is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, can_store_full_image (image), auto_number_format, clear_auto_number, auto_number_seed (string), is_alternate_key, formula_definition, formula_expression (Power Fx), raw_formula_definition (Calculated/Rollup XAML), or statuscode add/update/delete_options (for statuscode attribute).");

                var optionsAdded = optionResults.Where(r => r.StartsWith("OptionsAdded: ")).Select(r => r.Substring("OptionsAdded: ".Length)).ToList();
                var optionsRenamed = optionResults.Where(r => r.StartsWith("OptionsRenamed: ")).Select(r => r.Substring("OptionsRenamed: ".Length)).ToList();
                var optionsDeleted = optionResults.Where(r => r.StartsWith("OptionsDeleted: ")).Select(r => r.Substring("OptionsDeleted: ".Length)).ToList();
                var optionsChanged = optionsAdded.Count > 0 || optionsRenamed.Count > 0 || optionsDeleted.Count > 0;
                var association = !string.IsNullOrWhiteSpace(_effectiveSolutionName) && (changes.Count > 0 || optionsChanged)
                    ? SolutionComponentCreateHelper.AddExistingComponent(_context, _orgService, metadata.MetadataId.GetValueOrDefault(), AttributeComponentType, _effectiveSolutionName)
                    : null;

                // --- Publish (skipped for a seed-only update — the seed is not a
                //     metadata change and needs no publish) ---
                var published = changes.Count > 0 || optionResults.Count > 0 || alternateKeyRequested
                    ? PublishIfNeeded(entityName)
                    : false;

                // --- Execute the seed (after UpdateAttributeRequest + publish — the
                //     pattern must exist first). A failure after successful metadata
                //     changes must not fail the whole call — it becomes a warning. ---
                string seedWarning = null;
                if (seedRequested)
                {
                    try
                    {
                        seedWarning = ExecuteAutoNumberSeed(entityName, attributeName, autoNumberSeed.Value, "updated");
                    }
                    catch (InvalidOperationException) when (_context.MutationsBlocked)
                    {
                        throw;
                    }
                    catch (Exception ex)
                    {
                        seedWarning = $"Column updated but SetAutoNumberSeed failed: {ex.Message}";
                    }
                }

                // --- Format output ---
                var typeName = GetAttributeTypeName(metadata);

                var structured = new ManageColumnResult
                {
                    EntityName = entityName,
                    AttributeName = attributeName,
                    AttributeType = typeName,
                    SolutionName = association?.SolutionUniqueName,
                    IsAddToSolution = association?.IsAddToSolution,
                    AddToSolutionMethod = association?.AddToSolutionMethod,
                    AddToSolutionWarning = association?.AddToSolutionWarning,
                    BackupPath = backupPath,
                    Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                    OptionsAdded = optionsAdded.Count > 0 ? optionsAdded : null,
                    OptionsRenamed = optionsRenamed.Count > 0 ? optionsRenamed : null,
                    OptionsDeleted = optionsDeleted.Count > 0 ? optionsDeleted : null,
                    Published = published,
                    Status = "updated"
                };
                var updateWarnings = new List<string>();
                if (autoNumberWarnings is { Count: > 0 }) updateWarnings.AddRange(autoNumberWarnings);
                if (seedWarning != null) updateWarnings.Add(seedWarning);
                if (association?.AddToSolutionWarning != null)
                    updateWarnings.Add($"Could not add the column to solution '{association.SolutionUniqueName}'. {association.AddToSolutionWarning}");
                if (updateWarnings.Count > 0) structured.Warnings = updateWarnings;

                var updateSummary = $"Updated column '{attributeName}' on entity '{entityName}'.";
                if (!string.IsNullOrWhiteSpace(backupPath))
                    updateSummary += " Formula backup saved.";
                if (updateWarnings.Count > 0) updateSummary += $" {updateWarnings.Count} warning(s).";
                return Success(updateSummary, structured);
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                if (msg.Contains("could not be found", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase))
                {
                    return Error(
                        $"Entity or attribute not found: '{entityName}.{attributeName}'.",
                        "Use inspect_metadata(resource='tables') to find the correct names.",
                        details: new { serverMessage = msg });
                }
                return Error(
                    $"Failed to update attribute '{entityName}.{attributeName}'.",
                    "Check the parameters and the server message in [Detail]; use inspect_metadata(resource='tables') to verify entity/attribute names.",
                    details: new { serverMessage = msg });
            }
        }

        // ========== Type-Specific Updates ==========

        private string ApplyTypeSpecificUpdates(AttributeMetadata metadata,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel, string behavior, int precisionSource,
            List<string> changes, Dictionary<string, UpdateAttributeChange> structuredChanges,
            bool? canStoreFullImage = null,
            string autoNumberFormat = "", bool clearAutoNumber = false,
            int autoNumberMinLength = 0, List<string> autoNumberWarnings = null)
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
                // Autonumber pattern: set/change via auto_number_format, remove via
                // clear_auto_number=true. Same pattern / already-plain → no change entry.
                if (!string.IsNullOrWhiteSpace(autoNumberFormat))
                {
                    var effectiveMaxLength = maxLength > 0 ? maxLength : stringMeta.MaxLength ?? 100;
                    if (effectiveMaxLength < autoNumberMinLength)
                        return $"max_length {effectiveMaxLength} is smaller than the pattern's minimum output length {autoNumberMinLength}.";
                    if (effectiveMaxLength < autoNumberMinLength + 5)
                        (autoNumberWarnings ??= new List<string>()).Add(
                            $"max_length {effectiveMaxLength} is close to the pattern's minimum length {autoNumberMinLength} — leave room for the sequence to grow.");
                    var oldPattern = stringMeta.AutoNumberFormat ?? "";
                    if (oldPattern != autoNumberFormat)
                    {
                        stringMeta.AutoNumberFormat = autoNumberFormat;
                        changes.Add($"AutoNumberFormat: \"{oldPattern}\" -> \"{autoNumberFormat}\"");
                        structuredChanges["autoNumberFormat"] = new UpdateAttributeChange { OldValue = oldPattern, NewValue = autoNumberFormat };
                    }
                }
                else if (clearAutoNumber && !string.IsNullOrEmpty(stringMeta.AutoNumberFormat))
                {
                    var oldPattern = stringMeta.AutoNumberFormat;
                    stringMeta.AutoNumberFormat = "";
                    changes.Add($"AutoNumberFormat: \"{oldPattern}\" -> \"\"");
                    structuredChanges["autoNumberFormat"] = new UpdateAttributeChange { OldValue = oldPattern, NewValue = "" };
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
                    boolMeta.OptionSet.TrueOption.Label = new Label(trueLabel.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
                    changes.Add($"TrueLabel: \"{oldVal}\" -> \"{trueLabel.Trim()}\"");
                    structuredChanges["trueLabel"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = trueLabel.Trim() };
                }
                if (!string.IsNullOrWhiteSpace(falseLabel))
                {
                    var oldVal = boolMeta.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label ?? "No";
                    boolMeta.OptionSet.FalseOption.Label = new Label(falseLabel.Trim(), McpHelper.GetBaseLanguageCode(_orgService));
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
            if (metadata is ImageAttributeMetadata imageMeta)
            {
                if (canStoreFullImage.HasValue && (imageMeta.CanStoreFullImage ?? false) != canStoreFullImage.Value)
                {
                    var oldVal = (imageMeta.CanStoreFullImage ?? false).ToString();
                    imageMeta.CanStoreFullImage = canStoreFullImage.Value;
                    changes.Add($"CanStoreFullImage: {oldVal} -> {canStoreFullImage.Value}");
                    structuredChanges["canStoreFullImage"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = canStoreFullImage.Value.ToString() };
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
                        var req = new InsertOptionValueRequest { Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_orgService)) };
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
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        var resp = (InsertOptionValueResponse)DataverseMutationExecutor.Execute(_context, _orgService, req);
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
                        var req = new UpdateOptionValueRequest { Value = opt.Value.Value, Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_orgService)), MergeLabels = true };
                        if (isGlobal && !string.IsNullOrWhiteSpace(optionSetName))
                            req.OptionSetName = optionSetName;
                        else
                        {
                            req.EntityLogicalName = entityName;
                            req.AttributeLogicalName = attributeName;
                        }
                        if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hexUpd))
                            req.Parameters["Color"] = hexUpd;
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        DataverseMutationExecutor.Execute(_context, _orgService, req);
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
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        DataverseMutationExecutor.Execute(_context, _orgService, req);
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
                            Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_orgService)),
                            StateCode = stateValue
                        };
                        if (opt.Value.HasValue) req.Value = opt.Value.Value;
                        if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hexAdd))
                            req.Parameters["Color"] = hexAdd;
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        var resp = (InsertStatusValueResponse)DataverseMutationExecutor.Execute(_context, _orgService, req);
                        results.Add(string.IsNullOrWhiteSpace(opt.Color)
                            ? $"OptionsAdded: {opt.Label} ({resp.NewOptionValue}) [state={stateValue}]"
                            : $"OptionsAdded: {opt.Label} ({resp.NewOptionValue}) [state={stateValue}] [{opt.Color}]");
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
                            Label = new Label(opt.Label, McpHelper.GetBaseLanguageCode(_orgService)),
                            MergeLabels = true
                        };
                        if (!string.IsNullOrWhiteSpace(opt.Color) && ManageChoiceTool.TryNormalizeHexColor(opt.Color, out var hexUpd))
                            req.Parameters["Color"] = hexUpd;
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        DataverseMutationExecutor.Execute(_context, _orgService, req);
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
                        var req = new DeleteOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Value = val
                        };
                        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, _effectiveSolutionName);
                        DataverseMutationExecutor.Execute(_context, _orgService, req);
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

        private static (string ResolvedName, string Error) ResolveEntityName(IOrganizationService orgService, string entityName)
        {
            var resolved = DisplayNameFirstResolver.ResolveEntity(orgService, entityName, "manage_schema(resource='column')");
            if (resolved.IsSuccess)
                return (resolved.Value.LogicalName, null);

            return (null, resolved.Error);

        }

        private CallToolResult DryRunCreatePreview(string entityName, string logicalName, string schemaName,
            AttributeMetadata attribute, string displayName, AttributeRequiredLevel reqLevel, string solutionName,
            string autoNumberFormat = null, long? autoNumberSeed = null, List<string> autoNumberWarnings = null)
            => DryRunCreatePreview(entityName, logicalName, schemaName, GetAttributeTypeName(attribute), displayName, reqLevel, solutionName, autoNumberFormat, autoNumberSeed, autoNumberWarnings);

        private CallToolResult DryRunCreatePreview(string entityName, string logicalName, string schemaName,
            string typeName, string displayName, AttributeRequiredLevel reqLevel, string solutionName,
            string autoNumberFormat = null, long? autoNumberSeed = null, List<string> autoNumberWarnings = null)
        {
            var summary = $"Would CREATE {typeName} column '{logicalName}' on entity '{entityName}'.";
            var extra = new Dictionary<string, string>();
            if (!string.IsNullOrWhiteSpace(autoNumberFormat))
            {
                summary += $" AutoNumberFormat: {autoNumberFormat}.";
                extra["autoNumberFormat"] = autoNumberFormat;
            }
            if (autoNumberSeed.HasValue)
            {
                summary += $" Would SetAutoNumberSeed={autoNumberSeed.Value}.";
                extra["autoNumberSeed"] = autoNumberSeed.Value.ToString();
            }
            if (autoNumberWarnings is { Count: > 0 })
                summary += $" {autoNumberWarnings.Count} warning(s).";
            return DryRun(summary, new ManageColumnResult
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
                Published = false,
                Extra = extra.Count > 0 ? extra : null,
                Warnings = autoNumberWarnings is { Count: > 0 } ? autoNumberWarnings : null
            });
        }

        // Warnings ride in the structured payload (manage_table convention); the custom
        // [FormulaCloneWarning] tag is gone — the summary line just gains "1 warning(s).".
        private static CallToolResult AppendFormulaCloneWarning(CallToolResult result, string warning)
        {
            var payload = JsonNode.Parse(result.StructuredContent?.GetRawText() ?? "{}") as JsonObject ?? new JsonObject();
            payload["warnings"] = new JsonArray(warning);
            var summary = payload["summary"]?.GetValue<string>() ?? "";
            if (!string.IsNullOrEmpty(summary))
                summary += " 1 warning(s).";
            return McpToolResults.Success(summary, payload);
        }

        private string SaveFormulaBackup(string entityName, string logicalName, int sourceType, string oldFormula)
        {
            var rootFolder = string.IsNullOrWhiteSpace(_workspaceFolder) ? Environment.CurrentDirectory : _workspaceFolder;
            var backupDir = Path.Combine(rootFolder, ".devkit", "manage_column", entityName);
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{logicalName}_{timestamp}.formula.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var sourceTypeName = sourceType switch
            {
                1 => "Calculated",
                2 => "Rollup",
                3 => "PowerFx",
                _ => sourceType.ToString(CultureInfo.InvariantCulture)
            };
            var restoreParam = sourceType == 3 ? "formula_expression" : "raw_formula_definition";
            var snapshot = new ColumnFormulaBackup
            {
                Note = $"Backup of {sourceTypeName} column formula before update. To restore: call manage_schema(resource='column', entity_name='{entityName}', logical_name='{logicalName}', {restoreParam}=<formulaDefinition from this file>).",
                EntityName = entityName,
                LogicalName = logicalName,
                SourceType = sourceType,
                SourceTypeName = sourceTypeName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                FormulaDefinition = oldFormula ?? ""
            };

            var json = JsonSerializer.Serialize(snapshot, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });
            File.WriteAllText(backupPath, json, Encoding.UTF8);
            return backupPath;
        }

        internal sealed class ColumnFormulaBackup
        {
            [JsonPropertyName("note")]
            public string Note { get; set; }

            [JsonPropertyName("entityName")]
            public string EntityName { get; set; }

            [JsonPropertyName("logicalName")]
            public string LogicalName { get; set; }

            [JsonPropertyName("sourceType")]
            public int SourceType { get; set; }

            [JsonPropertyName("sourceTypeName")]
            public string SourceTypeName { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("formulaDefinition")]
            public string FormulaDefinition { get; set; }
        }

    }
}
