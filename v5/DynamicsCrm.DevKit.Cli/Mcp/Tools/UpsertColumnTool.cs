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

            "CREATE (no attribute): need attribute_type + display_name.\n" +
            "- schema_name: if provided, used as-is as SchemaName (skip auto-derive from display_name)\n" +
            "- lookup: needs lookup_target (auto-creates 1:N)\n" +
            "- customer: polymorphic (account+contact), no lookup_target\n" +
            "- picklist/multipicklist: options JSON or global_optionset_name\n\n" +

            "UPDATE (exists): attribute_type ignored (immutable). picklist: use add/update/delete_options. Omit params to keep current.\n\n" +

            "attribute_name needs publisher prefix or solution_name to auto-resolve.\n\n" +

            "WHEN TO USE:\n" +
            "- Create new attribute on an existing table (need attribute_type + display_name)\n" +
            "- Update mutable metadata, format, required_level, picklist options\n" +
            "- Add/rename/remove options on an existing picklist via add_options/update_options/delete_options\n\n" +

            "FUZZY/AMBIGUITY:\n" +
            "- entity_name resolves Display Name contains first, then logical/schema name contains. Ambiguity returns IsError=true with candidates.\n" +
            "- attribute_name, lookup_target, global_optionset_name, and solution_name follow the same Display Name first rule where applicable.")]
        public CallToolResult upsert_column(
            [Description("Logical name (e.g. 'account').")] string entity_name,
            [Description("With prefix ('new_priority') or just name + solution_name to auto-resolve.")] string attribute_name,
            [Description("string/memo/integer/bigint/decimal/money/float/boolean/datetime/lookup/customer/picklist/multipicklist/image/file. (immutable on update)")] string attribute_type,
            [Description("Required: create.")] string display_name,
            [Description("Auto-resolve prefix when attribute_name has no prefix.")] string solution_name = "",
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
            [Description("[update only]")] bool? is_audit_enabled = null,
            [Description("[update only]")] bool? is_valid_for_advanced_find = null,
            [Description("SchemaName for the new column (e.g. 'devkit_InvoiceLineId'). If provided, used as-is. Create only — ignored on update.")] string schema_name = "")
        {
            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(attribute_name))
                return ErrorResult("Error: attribute_name is required.");

            entity_name = entity_name.Trim();
            attribute_name = attribute_name.Trim();

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

            // Early check: if no underscore and no solution_name, flag error for create mode (update would have a prefix already)
            {
                var earlyUscIdx = attribute_name.IndexOf('_');
                var earlyHasPrefix = earlyUscIdx >= 1 && earlyUscIdx < attribute_name.Length - 1;
                if (!earlyHasPrefix && string.IsNullOrWhiteSpace(solution_name) && !string.IsNullOrWhiteSpace(attribute_type))
                    return ErrorResult(
                        $"Error: attribute_name must include a publisher prefix (e.g., 'new_priority').\n" +
                        $"Received: '{attribute_name}' on entity '{entity_name}'.\n" +
                        $"Tip: Either include the prefix in attribute_name (e.g., 'new_priority') or provide solution_name to auto-resolve the prefix.");
            }

            // --- Resolve entity_name: Display Name first, then logical/schema contains ---
            var (resolvedEntity, entityError) = ResolveEntityName(_serviceClient, entity_name);
            if (entityError != null)
                return ErrorResult(entityError);
            entity_name = resolvedEntity;

            // --- Try to retrieve existing attribute to decide create vs update ---
            AttributeMetadata existingMetadata = null;
            var attributeResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, attribute_name, "upsert_column");
            if (attributeResolve.IsSuccess)
            {
                existingMetadata = attributeResolve.Value;
                attribute_name = existingMetadata.LogicalName;
            }
            else if (attributeResolve.Status == ResolveStatus.Ambiguous || attributeResolve.Status == ResolveStatus.Error)
            {
                return ErrorResult($"Error: {attributeResolve.Error}");
            }
            else if (!string.IsNullOrWhiteSpace(display_name) &&
                     !display_name.Trim().Equals(attribute_name, StringComparison.OrdinalIgnoreCase))
            {
                var displayNameResolve = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entity_name, display_name, "upsert_column");
                if (displayNameResolve.IsSuccess)
                {
                    var label = displayNameResolve.Value.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    return ErrorResult(
                        $"[ConflictField] attribute_name '{attribute_name}' did not resolve, but display_name '{display_name.Trim()}' resolves existing field '{displayNameResolve.Value.LogicalName}' ({label}).\n" +
                        $"Re-call upsert_column with attribute_name='{displayNameResolve.Value.LogicalName}' to update it, or choose a different display_name to create a new field.");
                }
                if (displayNameResolve.Status == ResolveStatus.Ambiguous || displayNameResolve.Status == ResolveStatus.Error)
                    return ErrorResult($"Error: {displayNameResolve.Error}");
            }
            if (existingMetadata != null)
            {
                // --- UPDATE MODE ---
                return UpdateExistingAttribute(entity_name, attribute_name, existingMetadata,
                    display_name, description, required_level, max_length, min_value, max_value,
                    precision, format, true_label, false_label,
                    add_options, update_options, delete_options,
                    is_audit_enabled, is_valid_for_advanced_find, behavior, precision_source);
            }

            // --- CREATE MODE ---
            if (string.IsNullOrWhiteSpace(attribute_type))
                return ErrorResult("Error: attribute_type is required when creating a new attribute.");
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required when creating a new attribute.");

            attribute_type = attribute_type.Trim().ToLowerInvariant();

            // Resolve publisher prefix:
            // Priority: confirmed_prefix > extract from attribute_name > resolve from solution_name
            string resolvedPrefix = null;
            string resolvedSolutionUniqueName = null;

            var underscoreIndex = attribute_name.IndexOf('_');
            var hasPrefix = underscoreIndex >= 1 && underscoreIndex < attribute_name.Length - 1;

            if (!string.IsNullOrWhiteSpace(solution_name))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solution_name.Trim());
                if (!solResult.IsSuccess)
                    return ErrorResult(
                        $"[Error] {solResult.Error}\n" +
                        $"Tip: Use get_solution_components to find valid solution names.");
                resolvedPrefix = solResult.Prefix;
                resolvedSolutionUniqueName = solResult.UniqueName;

                // Add the solution prefix only when the user did not provide an explicit prefix.
                // If the user typed a different prefix, keep it and let Dataverse validation decide.
                if (!hasPrefix)
                {
                    attribute_name = $"{resolvedPrefix}_{attribute_name}";
                    underscoreIndex = attribute_name.IndexOf('_');
                    hasPrefix = true;
                }
            }
            else if (!hasPrefix)
            {
                return ErrorResult(
                    $"Error: attribute_name must include a publisher prefix (e.g., 'new_priority').\n" +
                    $"Received: '{attribute_name}' on entity '{entity_name}'.\n" +
                    $"Tip: Either include the prefix in attribute_name (e.g., 'new_priority') or provide solution_name to auto-resolve the prefix.");
            }

            var prefix = attribute_name.Substring(0, underscoreIndex);

            // Determine SchemaName:
            // - schema_name provided → use as-is (user takes responsibility for correctness)
            // - otherwise derive via DataverseNamer (portal-style, preserving display_name casing)
            string schemaName;
            if (!string.IsNullOrWhiteSpace(schema_name))
            {
                schemaName = schema_name.Trim();
            }
            else
            {
                try
                {
                    (schemaName, _) = DataverseNamer.Resolve(display_name, prefix);
                }
                catch
                {
                    schemaName = $"{prefix}_{display_name.Trim().Replace(" ", "")}";
                }
            }
            attribute_name = schemaName.ToLowerInvariant();

            // Parse required level
            var reqLevel = ParseRequiredLevel(required_level);
            if (!reqLevel.HasValue)
                return ErrorResult(
                    $"Error: Invalid required_level '{required_level}'.\n" +
                    $"Valid values: 'None' (default), 'Recommended', 'Required'.");

            var effectiveSolutionName = resolvedSolutionUniqueName ?? solution_name;

            try
            {
                switch (attribute_type)
                {
                    case "string":
                        return CreateStringAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 100 : max_length, format, effectiveSolutionName);
                    case "memo":
                        return CreateMemoAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 2000 : max_length, format, effectiveSolutionName);
                    case "integer":
                        return CreateIntegerAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, format, effectiveSolutionName);
                    case "bigint":
                        return CreateBigIntAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, effectiveSolutionName);
                    case "decimal":
                        return CreateDecimalAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, effectiveSolutionName);
                    case "money":
                        return CreateMoneyAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, precision_source, effectiveSolutionName);
                    case "float":
                    case "double":
                        return CreateFloatAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, min_value, max_value, precision, effectiveSolutionName);
                    case "boolean":
                        return CreateBooleanAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, true_label, false_label, effectiveSolutionName);
                    case "datetime":
                        return CreateDateTimeAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, format, behavior, effectiveSolutionName);
                    case "lookup":
                        return CreateLookupAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, lookup_target, lookup_relationship_name, prefix, effectiveSolutionName);
                    case "customer":
                        return CreateCustomerAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, prefix, effectiveSolutionName);
                    case "picklist":
                        return CreatePicklistAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, options, global_optionset_name, false, effectiveSolutionName);
                    case "multipicklist":
                        return CreatePicklistAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, options, global_optionset_name, true, effectiveSolutionName);
                    case "image":
                        return CreateImageAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, effectiveSolutionName);
                    case "file":
                        return CreateFileAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel.Value, max_length == 0 ? 32768 : max_length, effectiveSolutionName);
                    default:
                        return ErrorResult(
                            $"Error: Unknown attribute_type '{attribute_type}'.\n" +
                            $"Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file.\n" +
                            $"Read docs://schema_tools_guide for column type matrix and usage per type.");
                }
            }
            catch (Exception ex)
            {
                return HandleException(ex, entity_name, attribute_name, effectiveSolutionName);
            }
        }

        // --- String ---
        private CallToolResult CreateStringAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName)
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
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "String", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() }, { "format", attr.FormatName?.Value ?? "Text" } });
        }

        // --- Memo ---
        private CallToolResult CreateMemoAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName)
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
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Memo", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() } });
        }

        // --- Integer ---
        private CallToolResult CreateIntegerAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, string format, string solutionName)
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
            return BuildResult(sb, entityName, logicalName, schemaName, "Integer", displayName, reqLevel, metadataId, solutionName, published, extra);
        }

        // --- Decimal ---
        private CallToolResult CreateDecimalAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName)
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
            return BuildResult(sb, entityName, logicalName, schemaName, "Decimal", displayName, reqLevel, metadataId, solutionName, published, extra);
        }

        // --- Money ---
        private CallToolResult CreateMoneyAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, int precisionSource, string solutionName)
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
            return BuildResult(sb, entityName, logicalName, schemaName, "Money", displayName, reqLevel, metadataId, solutionName, published, extra);
        }

        // --- Float/Double ---
        private CallToolResult CreateFloatAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName)
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
            return BuildResult(sb, entityName, logicalName, schemaName, "Float", displayName, reqLevel, metadataId, solutionName, published, extra);
        }

        // --- Boolean ---
        private CallToolResult CreateBooleanAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string trueLabel, string falseLabel, string solutionName)
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
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "Boolean", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "trueLabel", trueLabel.Trim() }, { "falseLabel", falseLabel.Trim() } });
        }

        // --- DateTime ---
        private CallToolResult CreateDateTimeAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string format, string behavior, string solutionName)
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
            var published = PublishIfNeeded(entityName);

            // Wait for column metadata to propagate
            if (published)
            {
                MetadataOperationWaitHelper.WaitAfterColumnCreation();
            }

            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, schemaName, "DateTime", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "format", dateFormat.ToString() }, { "behavior", behaviorName } });
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
                extra: new Dictionary<string, string> { { "lookupTarget", singleTarget }, { "relationshipName", relationshipName } });
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

            return BuildResult(sb, entityName, logicalName, schemaName, "PolymorphicLookup", displayName, reqLevel, metadataId, solutionName, published, extra);
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
                });
        }

        // --- Picklist / MultiSelectPicklist ---
        private CallToolResult CreatePicklistAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string optionsJson, string globalOptionSetName, bool isMultiSelect,
            string solutionName)
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
                extra: new Dictionary<string, string> { { "options", string.Join(", ", optionLabels) } });
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

            return BuildResult(sb, entityName, logicalName, schemaName, "BigInt", displayName, reqLevel, metadataId, solutionName, published);
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

            return BuildResult(sb, entityName, logicalName, schemaName, "Image", displayName, reqLevel, metadataId, solutionName, published);
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
                extra: new Dictionary<string, string> { { "maxSizeInKB", maxSizeInKB.ToString() } });
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
            Dictionary<string, string> extra = null)
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
            bool? isAuditEnabled, bool? isValidForAdvancedFind, string behavior, int precisionSource)
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
                        $"Provide at least one updatable parameter: display_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, true_label, false_label, add_options, update_options, delete_options, is_audit_enabled, is_valid_for_advanced_find.");

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
    }
}
