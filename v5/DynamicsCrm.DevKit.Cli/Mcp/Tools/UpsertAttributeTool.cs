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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertAttributeTool
    {
        private readonly ServiceClient _serviceClient;

        public UpsertAttributeTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_attribute", Title = "Create or update a column (attribute) on a Dataverse entity",
            Destructive = false, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertAttributeResult)),
        Description(
            "Create a new column or update an existing column (attribute) on a Dataverse entity. " +
            "Automatically detects whether the attribute exists: creates if new, updates if existing. " +
            "Supports all common types: string, memo, integer, bigint, decimal, money, float, boolean, " +
            "datetime, lookup, customer, picklist, multipicklist, image, file.\n\n" +

            "CREATE MODE (attribute does not exist):\n" +
            "- attribute_type and display_name are REQUIRED\n" +
            "- Creates the column with all specified properties\n" +
            "- For lookup: creates 1:N relationship automatically\n" +
            "- For customer: creates polymorphic lookup (account+contact)\n\n" +

            "UPDATE MODE (attribute already exists):\n" +
            "- attribute_type is IGNORED (cannot change type after creation)\n" +
            "- Only provided parameters are updated, omitted ones keep current values\n" +
            "- Supports: display_name, description, required_level, max_length, min/max_value, precision, format\n" +
            "- For boolean: true_label, false_label\n" +
            "- For picklist: add_options, update_options, delete_options\n" +
            "- For audit/advanced find: is_audit_enabled, is_valid_for_advanced_find\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account').\n" +
            "- attribute_name (required): Logical name with publisher prefix (e.g., 'new_priority').\n" +
            "- attribute_type: Column type (required for create, ignored for update).\n" +
            "- display_name: Display name shown in forms (required for create).\n" +
            "- description: Column description.\n" +
            "- required_level: 'None' (default), 'Recommended', or 'Required'.\n" +
            "- max_length: For string/memo/file: max length.\n" +
            "- min_value/max_value: For numeric types.\n" +
            "- precision: For decimal/money/float: decimal places (0-10).\n" +
            "- format: For string/datetime/integer.\n" +
            "- options: For picklist (create): JSON array [{\"label\":\"Low\",\"value\":100000000}].\n" +
            "- global_optionset_name: For picklist (create): reuse existing global option set.\n" +
            "- lookup_target: For lookup (create): target entity.\n" +
            "- true_label/false_label: For boolean.\n" +
            "- add_options: For picklist (update): JSON array of options to add.\n" +
            "- update_options: For picklist (update): JSON array of options to rename.\n" +
            "- delete_options: For picklist (update): JSON array of integer values to remove.\n" +
            "- is_audit_enabled: Enable/disable auditing (update only).\n" +
            "- is_valid_for_advanced_find: Show/hide in Advanced Find (update only).\n" +
            "- solution_name: Solution unique name.\n" +
            "- auto_publish: Publish after operation (default: true).\n\n" +

            "RETURNS:\n" +
            "- Attribute details: name, type, MetadataId (create) or before/after changes (update)\n" +
            "- Publish status\n\n" +

            "TIPS:\n" +
            "- Attribute name MUST include publisher prefix (e.g., 'new_', 'cr_')\n" +
            "- Use get_metadata_entities to check if attribute already exists\n" +
            "- Cannot change attribute type after creation — Dataverse limitation\n" +
            "- For picklist with existing choices: use global_optionset_name instead of options\n" +
            "- After creation, use build_formxml to add the new field to a form")]
        public CallToolResult upsert_attribute(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name,
            [Description(
                "Logical name for the new column with publisher prefix (always lowercase). " +
                "Must contain an underscore separating prefix from name. " +
                "Examples: 'new_priority', 'cr_projectcode', 'msdyn_budget'."
            )] string attribute_name,
            [Description(
                "Column type. One of: 'string', 'memo', 'integer', 'bigint', 'decimal', 'money', " +
                "'float', 'boolean', 'datetime', 'lookup', 'customer', 'picklist', 'multipicklist', 'image', 'file'."
            )] string attribute_type,
            [Description(
                "Display name shown in forms and views. " +
                "Examples: 'Priority Level', 'Project Code', 'Budget Amount'."
            )] string display_name,
            [Description(
                "Column description. Optional."
            )] string description = "",
            [Description(
                "Requirement level: 'None' (default), 'Recommended', or 'Required'."
            )] string required_level = "None",
            [Description(
                "For string: max characters (1-4000, default 100). " +
                "For memo: max characters (1-1048576, default 2000). " +
                "For file: max size in KB (default 32768 = 32MB). " +
                "Ignored for other types."
            )] int max_length = 0,
            [Description(
                "For integer/decimal/float/money: minimum value. " +
                "Ignored for other types."
            )] double? min_value = null,
            [Description(
                "For integer/decimal/float/money: maximum value. " +
                "Ignored for other types."
            )] double? max_value = null,
            [Description(
                "For decimal/money/float: decimal places (0-10, default 2). " +
                "Ignored for other types."
            )] int precision = 2,
            [Description(
                "For string: 'Text' (default), 'Email', 'Url', 'Phone', 'TextArea', 'TickerSymbol', 'RichText'. " +
                "For datetime: 'DateOnly', 'DateAndTime' (default). " +
                "For integer: 'None', 'Duration', 'TimeZone', 'Language', 'Locale'. " +
                "Ignored for other types."
            )] string format = "",
            [Description(
                "For picklist/multipicklist: JSON array of local options. " +
                "Each element: {\"label\":\"Low\",\"value\":100000000}. " +
                "Value is optional (auto-assigned if omitted). " +
                "Ignored if global_optionset_name is provided."
            )] string options = "",
            [Description(
                "For picklist/multipicklist: use an existing global option set name instead of local options. " +
                "Example: 'new_prioritylevel'. Use get_global_optionsets to find available names."
            )] string global_optionset_name = "",
            [Description(
                "For lookup: target entity logical name (required for lookup type). " +
                "Example: 'contact', 'account'. Creates a 1:N relationship automatically. " +
                "For polymorphic lookup: comma-separated targets (e.g., 'account,contact,lead'). " +
                "For customer: ignored (auto-targets account+contact)."
            )] string lookup_target = "",
            [Description(
                "For lookup: relationship schema name. " +
                "Auto-generated as '{entity}_{target}_{attribute}' if omitted."
            )] string lookup_relationship_name = "",
            [Description(
                "For boolean: label for the true/yes value. Default: 'Yes'. (Create: initial value. Update: leave empty to keep current.)"
            )] string true_label = "Yes",
            [Description(
                "For boolean: label for the false/no value. Default: 'No'. (Create: initial value. Update: leave empty to keep current.)"
            )] string false_label = "No",
            [Description(
                "For picklist/multipicklist (update only): JSON array of options to add. " +
                "Each element: {\"label\":\"Critical\",\"value\":100000003}. " +
                "Value is optional (auto-assigned if omitted)."
            )] string add_options = "",
            [Description(
                "For picklist/multipicklist (update only): JSON array of options to rename. " +
                "Each element: {\"label\":\"New Label\",\"value\":100000000}."
            )] string update_options = "",
            [Description(
                "For picklist/multipicklist (update only): JSON array of integer values to remove. " +
                "Example: [100000002, 100000003]."
            )] string delete_options = "",
            [Description(
                "Enable or disable auditing on this column (update only). Leave null to keep current."
            )] bool? is_audit_enabled = null,
            [Description(
                "Show or hide this column in Advanced Find (update only). Leave null to keep current."
            )] bool? is_valid_for_advanced_find = null,
            [Description(
                "Solution unique name to add the column to. Leave empty for default solution. " +
                "Use get_components to find valid solution names."
            )] string solution_name = "",
            [Description(
                "Publish the entity after operation. Default: true."
            )] bool auto_publish = true)
        {
            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(attribute_name))
                return ErrorResult("Error: attribute_name is required.");

            entity_name = entity_name.Trim().ToLowerInvariant();
            attribute_name = attribute_name.Trim().ToLowerInvariant();

            // --- Try to retrieve existing attribute to decide create vs update ---
            AttributeMetadata existingMetadata = null;
            try
            {
                var retrieveRequest = new RetrieveAttributeRequest
                {
                    EntityLogicalName = entity_name,
                    LogicalName = attribute_name,
                    RetrieveAsIfPublished = true
                };
                var retrieveResponse = (RetrieveAttributeResponse)_serviceClient.Execute(retrieveRequest);
                existingMetadata = retrieveResponse.AttributeMetadata;
            }
            catch
            {
                // Attribute does not exist → create mode
            }

            if (existingMetadata != null)
            {
                // --- UPDATE MODE ---
                return UpdateExistingAttribute(entity_name, attribute_name, existingMetadata,
                    display_name, description, required_level, max_length, min_value, max_value,
                    precision, format, true_label, false_label,
                    add_options, update_options, delete_options,
                    is_audit_enabled, is_valid_for_advanced_find, auto_publish);
            }

            // --- CREATE MODE ---
            if (string.IsNullOrWhiteSpace(attribute_type))
                return ErrorResult("Error: attribute_type is required when creating a new attribute.");
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required when creating a new attribute.");

            attribute_type = attribute_type.Trim().ToLowerInvariant();

            // Validate publisher prefix on attribute name
            var underscoreIndex = attribute_name.IndexOf('_');
            if (underscoreIndex < 1 || underscoreIndex >= attribute_name.Length - 1)
                return ErrorResult(
                    $"[Error] Cannot create attribute\n" +
                    $"Entity: {entity_name}\n" +
                    $"AttributeName: {attribute_name}\n" +
                    $"Message: Attribute name must include a publisher prefix (e.g., 'new_priority', 'cr_priority')\n" +
                    $"Tip: Check solution publisher prefix and use it as attribute name prefix");

            // Derive schema name: new_priority → new_Priority
            var prefix = attribute_name.Substring(0, underscoreIndex);
            var namePart = attribute_name.Substring(underscoreIndex + 1);
            var schemaName = prefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(namePart);

            // Parse required level
            var reqLevel = ParseRequiredLevel(required_level);

            try
            {
                switch (attribute_type)
                {
                    case "string":
                        return CreateStringAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, max_length == 0 ? 100 : max_length, format, solution_name, auto_publish);
                    case "memo":
                        return CreateMemoAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, max_length == 0 ? 2000 : max_length, format, solution_name, auto_publish);
                    case "integer":
                        return CreateIntegerAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, min_value, max_value, format, solution_name, auto_publish);
                    case "bigint":
                        return CreateBigIntAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, solution_name, auto_publish);
                    case "decimal":
                        return CreateDecimalAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, min_value, max_value, precision, solution_name, auto_publish);
                    case "money":
                        return CreateMoneyAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, min_value, max_value, precision, solution_name, auto_publish);
                    case "float":
                    case "double":
                        return CreateFloatAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, min_value, max_value, precision, solution_name, auto_publish);
                    case "boolean":
                        return CreateBooleanAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, true_label, false_label, solution_name, auto_publish);
                    case "datetime":
                        return CreateDateTimeAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, format, solution_name, auto_publish);
                    case "lookup":
                        return CreateLookupAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, lookup_target, lookup_relationship_name, prefix, solution_name, auto_publish);
                    case "customer":
                        return CreateCustomerAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, prefix, solution_name, auto_publish);
                    case "picklist":
                        return CreatePicklistAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, options, global_optionset_name, false, solution_name, auto_publish);
                    case "multipicklist":
                        return CreatePicklistAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, options, global_optionset_name, true, solution_name, auto_publish);
                    case "image":
                        return CreateImageAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, solution_name, auto_publish);
                    case "file":
                        return CreateFileAttribute(entity_name, attribute_name, schemaName, display_name, description, reqLevel, max_length == 0 ? 32768 : max_length, solution_name, auto_publish);
                    default:
                        return ErrorResult(
                            $"[Error] Unknown attribute_type: '{attribute_type}'\n" +
                            $"Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, lookup, customer, picklist, multipicklist, image, file");
                }
            }
            catch (Exception ex)
            {
                return HandleException(ex, entity_name, attribute_name, solution_name);
            }
        }

        // --- String ---
        private CallToolResult CreateStringAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName, bool autoPublish)
        {
            if (maxLength < 1) maxLength = 100;
            if (maxLength > 4000) maxLength = 4000;

            var attr = new StringAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxLength = maxLength,
                FormatName = ResolveStringFormat(format),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "String", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            sb.AppendLine($"Format: {attr.FormatName?.Value ?? "Text"}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "String", displayName, reqLevel, metadataId, solutionName, autoPublish,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() }, { "format", attr.FormatName?.Value ?? "Text" } });
        }

        // --- Memo ---
        private CallToolResult CreateMemoAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxLength, string format, string solutionName, bool autoPublish)
        {
            if (maxLength < 1) maxLength = 2000;
            if (maxLength > 1048576) maxLength = 1048576;

            var memoFormat = ResolveMemoFormat(format);
            var attr = new MemoAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxLength = maxLength,
                FormatName = memoFormat,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Memo", displayName, reqLevel);
            sb.AppendLine($"MaxLength: {maxLength}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "Memo", displayName, reqLevel, metadataId, solutionName, autoPublish,
                extra: new Dictionary<string, string> { { "maxLength", maxLength.ToString() } });
        }

        // --- Integer ---
        private CallToolResult CreateIntegerAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, string format, string solutionName, bool autoPublish)
        {
            var attr = new IntegerAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Format = ResolveIntegerFormat(format),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = (int)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (int)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Integer", displayName, reqLevel);
            if (minValue.HasValue) sb.AppendLine($"MinValue: {(int)minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {(int)maxValue.Value}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            var extra = new Dictionary<string, string>();
            if (minValue.HasValue) extra["minValue"] = ((int)minValue.Value).ToString();
            if (maxValue.HasValue) extra["maxValue"] = ((int)maxValue.Value).ToString();
            return BuildResult(sb, entityName, logicalName, "Integer", displayName, reqLevel, metadataId, solutionName, autoPublish, extra);
        }

        // --- Decimal ---
        private CallToolResult CreateDecimalAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName, bool autoPublish)
        {
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DecimalAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = (decimal)minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = (decimal)maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Decimal", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, "Decimal", displayName, reqLevel, metadataId, solutionName, autoPublish, extra);
        }

        // --- Money ---
        private CallToolResult CreateMoneyAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName, bool autoPublish)
        {
            if (precision < 0) precision = 2;
            if (precision > 4) precision = 4;

            var attr = new MoneyAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                PrecisionSource = 2, // 2 = attribute's own precision
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Money", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, "Money", displayName, reqLevel, metadataId, solutionName, autoPublish, extra);
        }

        // --- Float/Double ---
        private CallToolResult CreateFloatAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            double? minValue, double? maxValue, int precision, string solutionName, bool autoPublish)
        {
            if (precision < 0) precision = 2;
            if (precision > 10) precision = 10;

            var attr = new DoubleAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Precision = precision,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (minValue.HasValue) attr.MinValue = minValue.Value;
            if (maxValue.HasValue) attr.MaxValue = maxValue.Value;
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Float", displayName, reqLevel);
            sb.AppendLine($"Precision: {precision}");
            if (minValue.HasValue) sb.AppendLine($"MinValue: {minValue.Value}");
            if (maxValue.HasValue) sb.AppendLine($"MaxValue: {maxValue.Value}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            var extra = new Dictionary<string, string> { { "precision", precision.ToString() } };
            if (minValue.HasValue) extra["minValue"] = minValue.Value.ToString(CultureInfo.InvariantCulture);
            if (maxValue.HasValue) extra["maxValue"] = maxValue.Value.ToString(CultureInfo.InvariantCulture);
            return BuildResult(sb, entityName, logicalName, "Float", displayName, reqLevel, metadataId, solutionName, autoPublish, extra);
        }

        // --- Boolean ---
        private CallToolResult CreateBooleanAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string trueLabel, string falseLabel, string solutionName, bool autoPublish)
        {
            var attr = new BooleanAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                OptionSet = new BooleanOptionSetMetadata(
                    new OptionMetadata(new Label(trueLabel.Trim(), 1033), 1),
                    new OptionMetadata(new Label(falseLabel.Trim(), 1033), 0)),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Boolean", displayName, reqLevel);
            sb.AppendLine($"TrueLabel: {trueLabel.Trim()}");
            sb.AppendLine($"FalseLabel: {falseLabel.Trim()}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "Boolean", displayName, reqLevel, metadataId, solutionName, autoPublish,
                extra: new Dictionary<string, string> { { "trueLabel", trueLabel.Trim() }, { "falseLabel", falseLabel.Trim() } });
        }

        // --- DateTime ---
        private CallToolResult CreateDateTimeAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string format, string solutionName, bool autoPublish)
        {
            var dateFormat = DateTimeFormat.DateAndTime;
            if (!string.IsNullOrWhiteSpace(format) && format.Trim().Equals("DateOnly", StringComparison.OrdinalIgnoreCase))
                dateFormat = DateTimeFormat.DateOnly;

            var attr = new DateTimeAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                Format = dateFormat,
                DateTimeBehavior = DateTimeBehavior.UserLocal,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "DateTime", displayName, reqLevel);
            sb.AppendLine($"Format: {dateFormat}");
            sb.AppendLine($"Behavior: UserLocal");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "DateTime", displayName, reqLevel, metadataId, solutionName, autoPublish,
                extra: new Dictionary<string, string> { { "format", dateFormat.ToString() }, { "behavior", "UserLocal" } });
        }

        // --- Lookup (single target) or Polymorphic Lookup (multiple targets) ---
        private CallToolResult CreateLookupAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string lookupTarget, string relationshipName, string prefix, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(lookupTarget))
                return ErrorResult(
                    $"[Error] lookup_target is required for lookup type\n" +
                    $"Entity: {entityName}\n" +
                    $"AttributeName: {logicalName}\n" +
                    $"Tip: Specify the target entity logical name (e.g., 'contact', 'account'). " +
                    $"For polymorphic lookup, use comma-separated: 'account,contact,lead'");

            var targets = lookupTarget.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(t => t.Trim().ToLowerInvariant())
                .Where(t => !string.IsNullOrEmpty(t))
                .ToArray();

            if (targets.Length == 0)
                return ErrorResult($"[Error] No valid target entities found in lookup_target: '{lookupTarget}'");

            // Multiple targets → Polymorphic Lookup
            if (targets.Length > 1)
                return CreatePolymorphicLookupAttribute(entityName, logicalName, schemaName, displayName, description, reqLevel, targets, prefix, solutionName, autoPublish);

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
                    DisplayName = new Label(displayName.Trim(), 1033),
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                    IsAuditEnabled = new BooleanManagedProperty(true)
                }
            };
            if (!string.IsNullOrWhiteSpace(description))
                request.Lookup.Description = new Label(description.Trim(), 1033);
            if (!string.IsNullOrWhiteSpace(solutionName))
                request.SolutionUniqueName = solutionName.Trim();

            var response = (CreateOneToManyResponse)_serviceClient.Execute(request);
            var metadataId = response.AttributeId;

            var published = PublishIfNeeded(autoPublish, entityName);

            var sb = FormatHeader(entityName, logicalName, "Lookup", displayName, reqLevel);
            sb.AppendLine($"Target: {singleTarget}");
            sb.AppendLine($"Relationship: {relationshipName}");
            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, "Lookup", displayName, reqLevel, metadataId, solutionName, published,
                extra: new Dictionary<string, string> { { "lookupTarget", singleTarget }, { "relationshipName", relationshipName } });
        }

        // --- Polymorphic Lookup (multiple targets) ---
        private CallToolResult CreatePolymorphicLookupAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string[] targets, string prefix, string solutionName, bool autoPublish)
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
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), 1033);

            // Use OrganizationRequest since CreatePolymorphicLookupAttributeRequest
            // is not available in the Microsoft.PowerPlatform.Dataverse.Client SDK
            var request = new OrganizationRequest("CreatePolymorphicLookupAttribute")
            {
                ["Lookup"] = lookup,
                ["OneToManyRelationships"] = relationships
            };
            if (!string.IsNullOrWhiteSpace(solutionName))
                request["SolutionUniqueName"] = solutionName.Trim();

            var response = _serviceClient.Execute(request);
            var metadataId = (Guid)response.Results["AttributeId"];

            var published = PublishIfNeeded(autoPublish, entityName);

            var sb = FormatHeader(entityName, logicalName, "PolymorphicLookup", displayName, reqLevel);
            sb.AppendLine($"Targets: {string.Join(", ", targets)}");
            for (int i = 0; i < targets.Length; i++)
                sb.AppendLine($"Relationship[{targets[i]}]: {relNames[i]}");
            AppendFooter(sb, solutionName, published, metadataId);

            var extra = new Dictionary<string, string> { { "targets", string.Join(", ", targets) } };
            for (int i = 0; i < targets.Length; i++)
                extra[$"relationship_{targets[i]}"] = relNames[i];

            return BuildResult(sb, entityName, logicalName, "PolymorphicLookup", displayName, reqLevel, metadataId, solutionName, published, extra);
        }

        // --- Customer (polymorphic lookup: account + contact) ---
        private CallToolResult CreateCustomerAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string prefix, string solutionName, bool autoPublish)
        {
            var accountRelName = $"{prefix}_account_{entityName}_{logicalName}";
            var contactRelName = $"{prefix}_contact_{entityName}_{logicalName}";
            if (accountRelName.Length > 100) accountRelName = accountRelName[..100];
            if (contactRelName.Length > 100) contactRelName = contactRelName[..100];

            var lookup = new LookupAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                lookup.Description = new Label(description.Trim(), 1033);

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
            if (!string.IsNullOrWhiteSpace(solutionName))
                request.SolutionUniqueName = solutionName.Trim();

            var response = (CreateCustomerRelationshipsResponse)_serviceClient.Execute(request);
            var metadataId = response.AttributeId;

            var published = PublishIfNeeded(autoPublish, entityName);

            var sb = FormatHeader(entityName, logicalName, "Customer", displayName, reqLevel);
            sb.AppendLine($"Targets: account, contact");
            sb.AppendLine($"AccountRelationship: {accountRelName}");
            sb.AppendLine($"ContactRelationship: {contactRelName}");
            AppendFooter(sb, solutionName, published, metadataId);

            return BuildResult(sb, entityName, logicalName, "Customer", displayName, reqLevel, metadataId, solutionName, published,
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
            string solutionName, bool autoPublish)
        {
            var typeName = isMultiSelect ? "MultiSelectPicklist" : "Picklist";

            // Build the attribute metadata
            AttributeMetadata attr;
            var optionLabels = new List<string>();

            if (!string.IsNullOrWhiteSpace(globalOptionSetName))
            {
                // Use existing global option set
                if (isMultiSelect)
                {
                    attr = new MultiSelectPicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), 1033),
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
                        DisplayName = new Label(displayName.Trim(), 1033),
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                        OptionSet = new OptionSetMetadata { IsGlobal = true, Name = globalOptionSetName.Trim() }
                    };
                }
                optionLabels.Add($"GlobalOptionSet: {globalOptionSetName.Trim()}");
            }
            else
            {
                // Parse local options
                var parsedOptions = ParseOptions(optionsJson);
                if (parsedOptions == null || parsedOptions.Count == 0)
                    return ErrorResult(
                        $"[Error] Either 'options' or 'global_optionset_name' is required for {typeName}\n" +
                        $"Entity: {entityName}\n" +
                        $"AttributeName: {logicalName}\n" +
                        $"Tip: options format: [{{\"label\":\"Low\",\"value\":100000000}},{{\"label\":\"High\",\"value\":100000001}}]");

                var optionSet = new OptionSetMetadata { IsGlobal = false, OptionSetType = OptionSetType.Picklist };
                foreach (var opt in parsedOptions)
                {
                    optionSet.Options.Add(new OptionMetadata(new Label(opt.Label, 1033), opt.Value));
                    optionLabels.Add($"{opt.Label} ({opt.Value})");
                }

                if (isMultiSelect)
                {
                    attr = new MultiSelectPicklistAttributeMetadata
                    {
                        SchemaName = schemaName,
                        LogicalName = logicalName,
                        DisplayName = new Label(displayName.Trim(), 1033),
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
                        DisplayName = new Label(displayName.Trim(), 1033),
                        RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                        OptionSet = optionSet
                    };
                }
            }

            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, typeName, displayName, reqLevel);
            sb.AppendLine($"Options: {string.Join(", ", optionLabels)}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, typeName, displayName, reqLevel, metadataId, solutionName, autoPublish,
                extra: new Dictionary<string, string> { { "options", string.Join(", ", optionLabels) } });
        }

        // --- BigInt ---
        private CallToolResult CreateBigIntAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string solutionName, bool autoPublish)
        {
            var attr = new BigIntAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "BigInt", displayName, reqLevel);
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "BigInt", displayName, reqLevel, metadataId, solutionName, autoPublish);
        }

        // --- Image ---
        private CallToolResult CreateImageAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            string solutionName, bool autoPublish)
        {
            var attr = new ImageAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                IsAuditEnabled = new BooleanManagedProperty(true),
                IsPrimaryImage = false
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "Image", displayName, reqLevel);
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "Image", displayName, reqLevel, metadataId, solutionName, autoPublish);
        }

        // --- File ---
        private CallToolResult CreateFileAttribute(string entityName, string logicalName, string schemaName,
            string displayName, string description, AttributeRequiredLevel reqLevel,
            int maxSizeInKB, string solutionName, bool autoPublish)
        {
            if (maxSizeInKB < 1) maxSizeInKB = 32768;
            if (maxSizeInKB > 10485760) maxSizeInKB = 10485760; // 10 GB max

            var attr = new FileAttributeMetadata
            {
                SchemaName = schemaName,
                LogicalName = logicalName,
                DisplayName = new Label(displayName.Trim(), 1033),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(reqLevel),
                MaxSizeInKB = maxSizeInKB,
                IsAuditEnabled = new BooleanManagedProperty(true)
            };
            if (!string.IsNullOrWhiteSpace(description))
                attr.Description = new Label(description.Trim(), 1033);

            var metadataId = ExecuteCreateAttribute(entityName, attr, solutionName);

            var sb = FormatHeader(entityName, logicalName, "File", displayName, reqLevel);
            sb.AppendLine($"MaxSizeInKB: {maxSizeInKB}");
            AppendFooter(sb, solutionName, autoPublish, entityName, metadataId);

            return BuildResult(sb, entityName, logicalName, "File", displayName, reqLevel, metadataId, solutionName, autoPublish,
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
            if (!string.IsNullOrWhiteSpace(solutionName))
                request.SolutionUniqueName = solutionName.Trim();

            var response = (CreateAttributeResponse)_serviceClient.Execute(request);
            return response.AttributeId;
        }

        private bool PublishIfNeeded(bool autoPublish, string entityName)
        {
            if (!autoPublish) return false;
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

        private void AppendFooter(StringBuilder sb, string solutionName, bool autoPublish, string entityName, Guid metadataId)
        {
            var published = PublishIfNeeded(autoPublish, entityName);
            AppendFooter(sb, solutionName, published, metadataId);
        }

        private static void AppendFooter(StringBuilder sb, string solutionName, bool published, Guid metadataId)
        {
            if (!string.IsNullOrWhiteSpace(solutionName))
                sb.AppendLine($"Solution: {solutionName.Trim()}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            sb.AppendLine($"MetadataId: {metadataId}");
        }

        private CallToolResult BuildResult(StringBuilder sb, string entityName, string logicalName, string typeName,
            string displayName, AttributeRequiredLevel reqLevel, Guid metadataId, string solutionName, bool published,
            Dictionary<string, string> extra = null)
        {
            var structured = new UpsertAttributeResult
            {
                EntityName = entityName,
                AttributeName = logicalName,
                AttributeType = typeName,
                DisplayName = displayName.Trim(),
                RequiredLevel = reqLevel.ToString(),
                MetadataId = metadataId.ToString(),
                SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
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

        private static AttributeRequiredLevel ParseRequiredLevel(string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return AttributeRequiredLevel.None;
            return value.Trim().ToLowerInvariant() switch
            {
                "required" or "applicationrequired" => AttributeRequiredLevel.ApplicationRequired,
                "recommended" => AttributeRequiredLevel.Recommended,
                _ => AttributeRequiredLevel.None
            };
        }

        private static StringFormatName ResolveStringFormat(string format)
        {
            if (string.IsNullOrWhiteSpace(format))
                return StringFormatName.Text;
            return format.Trim().ToLowerInvariant() switch
            {
                "email" => StringFormatName.Email,
                "url" => StringFormatName.Url,
                "phone" => StringFormatName.Phone,
                "textarea" => StringFormatName.TextArea,
                "tickersymbol" => StringFormatName.TickerSymbol,
                "richtext" => StringFormatName.RichText,
                _ => StringFormatName.Text
            };
        }

        private static IntegerFormat ResolveIntegerFormat(string format)
        {
            if (string.IsNullOrWhiteSpace(format))
                return IntegerFormat.None;
            return format.Trim().ToLowerInvariant() switch
            {
                "duration" => IntegerFormat.Duration,
                "timezone" => IntegerFormat.TimeZone,
                "language" => IntegerFormat.Language,
                "locale" => IntegerFormat.Locale,
                _ => IntegerFormat.None
            };
        }

        private static MemoFormatName ResolveMemoFormat(string format)
        {
            if (string.IsNullOrWhiteSpace(format))
                return MemoFormatName.Text;
            return format.Trim().ToLowerInvariant() switch
            {
                "richtext" => MemoFormatName.RichText,
                _ => MemoFormatName.Text
            };
        }

        private sealed class OptionItem
        {
            public string Label { get; set; }
            public int? Value { get; set; }
        }

        private static List<OptionItem> ParseOptions(string optionsJson)
        {
            if (string.IsNullOrWhiteSpace(optionsJson))
                return null;
            try
            {
                var items = JsonSerializer.Deserialize<List<OptionItem>>(optionsJson, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
                return items;
            }
            catch
            {
                return null;
            }
        }

        private static CallToolResult HandleException(Exception ex, string entityName, string attributeName, string solutionName)
        {
            var msg = ex.Message;

            if (msg.Contains("already exists", StringComparison.OrdinalIgnoreCase) ||
                msg.Contains("duplicate", StringComparison.OrdinalIgnoreCase))
            {
                return ErrorResult(
                    $"[Error] Attribute '{attributeName}' already exists on entity '{entityName}'\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_metadata_entities to inspect existing attributes, or choose a different name");
            }

            if (msg.Contains("entity", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return ErrorResult(
                    $"[Error] Entity '{entityName}' not found\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_metadata_entities to find the correct entity logical name");
            }

            if (msg.Contains("solution", StringComparison.OrdinalIgnoreCase) &&
                (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                 msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
            {
                return ErrorResult(
                    $"[Error] Solution '{solutionName}' not found\n" +
                    $"Message: {msg}\n" +
                    $"Tip: Use get_components to find valid solution names");
            }

            return ErrorResult($"Error: Failed to create attribute '{entityName}.{attributeName}'\nMessage: {msg}");
        }

        // ========== UPDATE MODE ==========

        private CallToolResult UpdateExistingAttribute(string entityName, string attributeName,
            AttributeMetadata metadata, string displayName, string description, string requiredLevel,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel,
            string addOptions, string updateOptions, string deleteOptions,
            bool? isAuditEnabled, bool? isValidForAdvancedFind, bool autoPublish)
        {
            try
            {
                var changes = new List<string>();
                var structuredChanges = new Dictionary<string, UpdateAttributeChange>();

                // --- Generic property updates (all types) ---
                if (!string.IsNullOrWhiteSpace(displayName))
                {
                    var oldVal = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    metadata.DisplayName = new Label(displayName.Trim(), 1033);
                    changes.Add($"DisplayName: \"{oldVal}\" -> \"{displayName.Trim()}\"");
                    structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = displayName.Trim() };
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = metadata.Description?.UserLocalizedLabel?.Label ?? "";
                    metadata.Description = new Label(description.Trim(), 1033);
                    changes.Add($"Description: \"{oldVal}\" -> \"{description.Trim()}\"");
                    structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description.Trim() };
                }

                if (!string.IsNullOrWhiteSpace(requiredLevel))
                {
                    var oldLevel = metadata.RequiredLevel?.Value.ToString() ?? "None";
                    var newLevel = ParseRequiredLevel(requiredLevel);
                    metadata.RequiredLevel = new AttributeRequiredLevelManagedProperty(newLevel);
                    changes.Add($"RequiredLevel: {oldLevel} -> {newLevel}");
                    structuredChanges["requiredLevel"] = new UpdateAttributeChange { OldValue = oldLevel, NewValue = newLevel.ToString() };
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
                ApplyTypeSpecificUpdates(metadata, maxLength, minValue, maxValue, precision, format,
                    trueLabel, falseLabel, changes, structuredChanges);

                // --- Execute metadata update (if any generic/type-specific changes) ---
                if (changes.Count > 0)
                {
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
                        $"[Error] No changes specified for '{entityName}.{attributeName}'\n" +
                        "Tip: Provide at least one parameter to update (display_name, required_level, max_length, etc.)");

                // --- Publish ---
                var published = PublishIfNeeded(autoPublish, entityName);

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

                var structured = new UpsertAttributeResult
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
                        $"[Error] Entity or attribute not found: '{entityName}.{attributeName}'\n" +
                        $"Message: {msg}\n" +
                        "Tip: Use get_metadata_entities to find the correct names");
                }
                return ErrorResult($"Error: Failed to update attribute '{entityName}.{attributeName}'\nMessage: {msg}");
            }
        }

        // ========== Type-Specific Updates ==========

        private static void ApplyTypeSpecificUpdates(AttributeMetadata metadata,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel,
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
                    stringMeta.FormatName = ResolveStringFormat(format);
                    changes.Add($"Format: {oldVal} -> {stringMeta.FormatName.Value}");
                    structuredChanges["format"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = stringMeta.FormatName.Value };
                }
                return;
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
                return;
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
                return;
            }

            if (metadata is DecimalAttributeMetadata decMeta)
            {
                if (minValue.HasValue) { var o = decMeta.MinValue?.ToString() ?? ""; decMeta.MinValue = (decimal)minValue.Value; changes.Add($"MinValue: {o} -> {(decimal)minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = ((decimal)minValue.Value).ToString() }; }
                if (maxValue.HasValue) { var o = decMeta.MaxValue?.ToString() ?? ""; decMeta.MaxValue = (decimal)maxValue.Value; changes.Add($"MaxValue: {o} -> {(decimal)maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = ((decimal)maxValue.Value).ToString() }; }
                if (precision >= 0) { var o = decMeta.Precision?.ToString() ?? ""; if (precision > 10) precision = 10; decMeta.Precision = precision; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                return;
            }

            if (metadata is MoneyAttributeMetadata moneyMeta)
            {
                if (minValue.HasValue) { var o = moneyMeta.MinValue?.ToString() ?? ""; moneyMeta.MinValue = minValue.Value; changes.Add($"MinValue: {o} -> {minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = minValue.Value.ToString() }; }
                if (maxValue.HasValue) { var o = moneyMeta.MaxValue?.ToString() ?? ""; moneyMeta.MaxValue = maxValue.Value; changes.Add($"MaxValue: {o} -> {maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = maxValue.Value.ToString() }; }
                if (precision >= 0) { var o = moneyMeta.Precision?.ToString() ?? ""; if (precision > 4) precision = 4; moneyMeta.Precision = precision; moneyMeta.PrecisionSource = 2; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                return;
            }

            if (metadata is DoubleAttributeMetadata dblMeta)
            {
                if (minValue.HasValue) { var o = dblMeta.MinValue?.ToString() ?? ""; dblMeta.MinValue = minValue.Value; changes.Add($"MinValue: {o} -> {minValue.Value}"); structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = o, NewValue = minValue.Value.ToString() }; }
                if (maxValue.HasValue) { var o = dblMeta.MaxValue?.ToString() ?? ""; dblMeta.MaxValue = maxValue.Value; changes.Add($"MaxValue: {o} -> {maxValue.Value}"); structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = o, NewValue = maxValue.Value.ToString() }; }
                if (precision >= 0) { var o = dblMeta.Precision?.ToString() ?? ""; if (precision > 10) precision = 10; dblMeta.Precision = precision; changes.Add($"Precision: {o} -> {precision}"); structuredChanges["precision"] = new UpdateAttributeChange { OldValue = o, NewValue = precision.ToString() }; }
                return;
            }

            if (metadata is BooleanAttributeMetadata boolMeta)
            {
                if (!string.IsNullOrWhiteSpace(trueLabel))
                {
                    var oldVal = boolMeta.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label ?? "Yes";
                    boolMeta.OptionSet.TrueOption.Label = new Label(trueLabel.Trim(), 1033);
                    changes.Add($"TrueLabel: \"{oldVal}\" -> \"{trueLabel.Trim()}\"");
                    structuredChanges["trueLabel"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = trueLabel.Trim() };
                }
                if (!string.IsNullOrWhiteSpace(falseLabel))
                {
                    var oldVal = boolMeta.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label ?? "No";
                    boolMeta.OptionSet.FalseOption.Label = new Label(falseLabel.Trim(), 1033);
                    changes.Add($"FalseLabel: \"{oldVal}\" -> \"{falseLabel.Trim()}\"");
                    structuredChanges["falseLabel"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = falseLabel.Trim() };
                }
                return;
            }

            if (metadata is DateTimeAttributeMetadata dtMeta)
            {
                if (!string.IsNullOrWhiteSpace(format))
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

            if (!string.IsNullOrWhiteSpace(addOptionsJson))
            {
                var opts = ParseOptions(addOptionsJson);
                if (opts != null)
                    foreach (var opt in opts)
                    {
                        var req = new InsertOptionValueRequest { EntityLogicalName = entityName, AttributeLogicalName = attributeName, Label = new Label(opt.Label, 1033) };
                        if (opt.Value.HasValue) req.Value = opt.Value.Value;
                        var resp = (InsertOptionValueResponse)_serviceClient.Execute(req);
                        results.Add($"OptionsAdded: {opt.Label} ({resp.NewOptionValue})");
                    }
            }

            if (!string.IsNullOrWhiteSpace(updateOptionsJson))
            {
                var opts = ParseOptions(updateOptionsJson);
                if (opts != null)
                    foreach (var opt in opts)
                    {
                        if (!opt.Value.HasValue) continue;
                        _serviceClient.Execute(new UpdateOptionValueRequest { EntityLogicalName = entityName, AttributeLogicalName = attributeName, Value = opt.Value.Value, Label = new Label(opt.Label, 1033), MergeLabels = true });
                        results.Add($"OptionsRenamed: {opt.Value.Value} -> \"{opt.Label}\"");
                    }
            }

            if (!string.IsNullOrWhiteSpace(deleteOptionsJson))
            {
                var values = ParseDeleteValues(deleteOptionsJson);
                if (values != null)
                    foreach (var val in values)
                    {
                        _serviceClient.Execute(new DeleteOptionValueRequest { EntityLogicalName = entityName, AttributeLogicalName = attributeName, Value = val });
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

        private static List<int> ParseDeleteValues(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            try { return JsonSerializer.Deserialize<List<int>>(json); }
            catch { return null; }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
