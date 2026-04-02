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
    public class CreateAttributeTool
    {
        private readonly ServiceClient _serviceClient;

        public CreateAttributeTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "create_attribute", Title = "Add a new column (attribute) to a Dataverse entity",
            Destructive = false, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CreateAttributeResult)),
        Description(
            "Add a new column (attribute) to an existing Dataverse entity. " +
            "Supports all common types: string, memo, integer, bigint, decimal, money, float, boolean, " +
            "datetime, lookup, customer, picklist, multipicklist, image, file.\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account').\n" +
            "- attribute_name (required): Logical name with publisher prefix (e.g., 'new_priority').\n" +
            "- attribute_type (required): Column type: 'string', 'memo', 'integer', 'bigint', 'decimal', " +
            "'money', 'float', 'boolean', 'datetime', 'lookup', 'customer', 'picklist', 'multipicklist', 'image', 'file'.\n" +
            "- display_name (required): Display name shown in forms.\n" +
            "- description: Column description.\n" +
            "- required_level: 'None' (default), 'Recommended', or 'Required'.\n" +
            "- max_length: For string: max characters (1-4000, default 100). For memo: (1-1048576, default 2000). For file: max KB (default 32768).\n" +
            "- min_value: For integer/decimal/float/money: minimum value.\n" +
            "- max_value: For integer/decimal/float/money: maximum value.\n" +
            "- precision: For decimal/money/float: decimal places (0-10). Default: 2.\n" +
            "- format: For string: 'Text','Email','Url','Phone','TextArea','TickerSymbol','RichText'. " +
            "For datetime: 'DateOnly','DateAndTime'. For integer: 'None','Duration','TimeZone','Language','Locale'.\n" +
            "- options: For picklist/multipicklist: JSON array [{\"label\":\"Low\",\"value\":100000000}].\n" +
            "- global_optionset_name: For picklist/multipicklist: reuse existing global option set.\n" +
            "- lookup_target: For lookup: target entity logical name (e.g., 'contact'). " +
            "For customer: ignored (auto-targets account+contact).\n" +
            "- lookup_relationship_name: For lookup: relationship schema name. Auto-generated if omitted.\n" +
            "- true_label: For boolean: label for true (default 'Yes').\n" +
            "- false_label: For boolean: label for false (default 'No').\n" +
            "- solution_name: Add column to this solution.\n" +
            "- auto_publish: Publish after creation (default: true).\n\n" +

            "RETURNS:\n" +
            "- Created attribute details: name, type, MetadataId\n" +
            "- Options (for picklist), target (for lookup)\n" +
            "- Solution and publish status\n\n" +

            "WHEN TO USE:\n" +
            "- To add a new field to an entity\n" +
            "- After creating a new entity with upsert_entity\n" +
            "- When extending an existing entity's data model\n\n" +

            "TIPS:\n" +
            "- Attribute name MUST include publisher prefix (e.g., 'new_', 'cr_')\n" +
            "- Use get_metadata_entities to verify the attribute doesn't already exist\n" +
            "- For lookups: also creates the 1:N relationship automatically\n" +
            "- For customer: creates a polymorphic lookup targeting account+contact (like the OOB customerid field)\n" +
            "- For picklist with existing choices: use global_optionset_name instead of options\n" +
            "- After creation, use build_form_xml to add the new field to a form")]
        public CallToolResult create_attribute(
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
                "For boolean: label for the true/yes value. Default: 'Yes'."
            )] string true_label = "Yes",
            [Description(
                "For boolean: label for the false/no value. Default: 'No'."
            )] string false_label = "No",
            [Description(
                "Solution unique name to add the column to. Leave empty for default solution. " +
                "Use get_components to find valid solution names."
            )] string solution_name = "",
            [Description(
                "Publish the entity after creation. Default: true."
            )] bool auto_publish = true)
        {
            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(attribute_name))
                return ErrorResult("Error: attribute_name is required.");
            if (string.IsNullOrWhiteSpace(attribute_type))
                return ErrorResult("Error: attribute_type is required.");
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required.");

            entity_name = entity_name.Trim().ToLowerInvariant();
            attribute_name = attribute_name.Trim().ToLowerInvariant();
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
            var structured = new CreateAttributeResult
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
