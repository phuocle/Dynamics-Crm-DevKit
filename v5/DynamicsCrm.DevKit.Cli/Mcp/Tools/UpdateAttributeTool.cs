using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpdateAttributeTool
    {
        private readonly ServiceClient _serviceClient;

        public UpdateAttributeTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "update_attribute",
            Title = "Update an existing column (attribute) on a Dataverse entity",
            ReadOnly = false, Destructive = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpdateAttributeResult)),
        Description(
            "Update an existing column (attribute) on a Dataverse entity. " +
            "Supports modifying display properties and type-specific properties.\n\n" +

            "TWO SCOPES OF CHANGES:\n" +
            "- Generic (all types): display_name, description, required_level, audit, advanced_find\n" +
            "- Type-specific: max_length (string/memo), min/max_value (numeric), precision (decimal/money/float), " +
            "format (string/datetime), true/false_label (boolean), options (picklist)\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account').\n" +
            "- attribute_name (required): Logical name of the column to update (e.g., 'new_priority').\n" +
            "- display_name: New display name. Leave empty to keep current.\n" +
            "- description: New description. Leave empty to keep current.\n" +
            "- required_level: 'None', 'Recommended', or 'Required'. Leave empty to keep current.\n" +
            "- max_length: For string/memo: new max length.\n" +
            "- min_value/max_value: For numeric types: new value range.\n" +
            "- precision: For decimal/money/float: new decimal places (0-10).\n" +
            "- format: For string: 'Text','Email','Url','Phone'. For datetime: 'DateOnly','DateAndTime'.\n" +
            "- true_label/false_label: For boolean: new labels.\n" +
            "- add_options: For picklist: JSON [{\"label\":\"...\",\"value\":N}] to add new options.\n" +
            "- update_options: For picklist: JSON [{\"label\":\"...\",\"value\":N}] to rename existing options.\n" +
            "- delete_options: For picklist: JSON [N1, N2] integer values to remove.\n" +
            "- is_audit_enabled: Enable/disable auditing on this column.\n" +
            "- is_valid_for_advanced_find: Show/hide in Advanced Find.\n" +
            "- auto_publish: Publish after update (default: true).\n\n" +

            "RETURNS:\n" +
            "- Updated attribute details with before/after values for changed properties\n" +
            "- Picklist option changes (added/renamed/deleted)\n" +
            "- Publish status\n\n" +

            "WHEN TO USE:\n" +
            "- To rename a column's display name\n" +
            "- To change required level (None -> Required)\n" +
            "- To expand a string field's max length\n" +
            "- To add/rename/remove picklist options\n" +
            "- To change boolean Yes/No labels\n" +
            "- To adjust numeric range or precision\n\n" +

            "TIPS:\n" +
            "- Only provide parameters you want to change -- omitted params keep current values\n" +
            "- Use get_metadata_entities first to see current attribute properties\n" +
            "- For picklist options: add_options, update_options, delete_options can be combined in one call\n" +
            "- MergeLabels is always true to preserve existing translations\n" +
            "- Cannot change attribute type (e.g., string to integer) -- Dataverse limitation\n" +
            "- Cannot change logical name or schema name -- immutable after creation")]
        public CallToolResult update_attribute(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name,
            [Description(
                "Logical name of the column to update (always lowercase). " +
                "Examples: 'new_priority', 'cr_projectcode', 'emailaddress1'. " +
                "Use get_metadata_entities to find correct attribute logical names."
            )] string attribute_name,
            [Description(
                "New display name. Leave empty to keep current."
            )] string display_name = "",
            [Description(
                "New description. Leave empty to keep current."
            )] string description = "",
            [Description(
                "Requirement level: 'None', 'Recommended', or 'Required'. " +
                "Leave empty to keep current."
            )] string required_level = "",
            [Description(
                "For string: new max characters (1-4000). " +
                "For memo: new max characters (1-1048576). " +
                "0 means keep current. Ignored for other types."
            )] int max_length = 0,
            [Description(
                "For integer/decimal/float/money: new minimum value. " +
                "Ignored for other types."
            )] double? min_value = null,
            [Description(
                "For integer/decimal/float/money: new maximum value. " +
                "Ignored for other types."
            )] double? max_value = null,
            [Description(
                "For decimal/money/float: new decimal places (0-10). " +
                "-1 means keep current. Ignored for other types."
            )] int precision = -1,
            [Description(
                "For string: 'Text', 'Email', 'Url', 'Phone', 'TextArea', 'TickerSymbol', 'RichText'. " +
                "For datetime: 'DateOnly', 'DateAndTime'. " +
                "Leave empty to keep current. Ignored for other types."
            )] string format = "",
            [Description(
                "For boolean: new label for the true/yes value. " +
                "Leave empty to keep current."
            )] string true_label = "",
            [Description(
                "For boolean: new label for the false/no value. " +
                "Leave empty to keep current."
            )] string false_label = "",
            [Description(
                "For picklist/multipicklist: JSON array of options to add. " +
                "Each element: {\"label\":\"Critical\",\"value\":100000003}. " +
                "Value is optional (auto-assigned if omitted)."
            )] string add_options = "",
            [Description(
                "For picklist/multipicklist: JSON array of options to rename. " +
                "Each element: {\"label\":\"New Label\",\"value\":100000000}. " +
                "Value identifies which option to rename."
            )] string update_options = "",
            [Description(
                "For picklist/multipicklist: JSON array of integer values to remove. " +
                "Example: [100000002, 100000003]."
            )] string delete_options = "",
            [Description(
                "Enable or disable auditing on this column. " +
                "Leave null to keep current."
            )] bool? is_audit_enabled = null,
            [Description(
                "Show or hide this column in Advanced Find. " +
                "Leave null to keep current."
            )] bool? is_valid_for_advanced_find = null,
            [Description(
                "Publish the entity after update. Default: true."
            )] bool auto_publish = true)
        {
            // --- Validate required parameters ---
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(attribute_name))
                return ErrorResult("Error: attribute_name is required.");

            entity_name = entity_name.Trim().ToLowerInvariant();
            attribute_name = attribute_name.Trim().ToLowerInvariant();

            try
            {
                // --- Retrieve current metadata ---
                var retrieveRequest = new RetrieveAttributeRequest
                {
                    EntityLogicalName = entity_name,
                    LogicalName = attribute_name,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveAttributeResponse)_serviceClient.Execute(retrieveRequest);
                var metadata = response.AttributeMetadata;

                var changes = new List<string>();
                var structuredChanges = new Dictionary<string, UpdateAttributeChange>();

                // --- Generic property updates (all types) ---
                if (!string.IsNullOrWhiteSpace(display_name))
                {
                    var oldVal = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "";
                    metadata.DisplayName = new Label(display_name.Trim(), 1033);
                    changes.Add($"DisplayName: \"{oldVal}\" -> \"{display_name.Trim()}\"");
                    structuredChanges["displayName"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = display_name.Trim() };
                }

                if (!string.IsNullOrWhiteSpace(description))
                {
                    var oldVal = metadata.Description?.UserLocalizedLabel?.Label ?? "";
                    metadata.Description = new Label(description.Trim(), 1033);
                    changes.Add($"Description: \"{oldVal}\" -> \"{description.Trim()}\"");
                    structuredChanges["description"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = description.Trim() };
                }

                if (!string.IsNullOrWhiteSpace(required_level))
                {
                    var oldLevel = metadata.RequiredLevel?.Value.ToString() ?? "None";
                    var newLevel = ParseRequiredLevel(required_level);
                    metadata.RequiredLevel = new AttributeRequiredLevelManagedProperty(newLevel);
                    changes.Add($"RequiredLevel: {oldLevel} -> {newLevel}");
                    structuredChanges["requiredLevel"] = new UpdateAttributeChange { OldValue = oldLevel, NewValue = newLevel.ToString() };
                }

                if (is_audit_enabled.HasValue)
                {
                    var oldVal = metadata.IsAuditEnabled?.Value == true ? "true" : "false";
                    metadata.IsAuditEnabled = new BooleanManagedProperty(is_audit_enabled.Value);
                    changes.Add($"IsAuditEnabled: {oldVal} -> {is_audit_enabled.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isAuditEnabled"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = is_audit_enabled.Value.ToString().ToLowerInvariant() };
                }

                if (is_valid_for_advanced_find.HasValue)
                {
                    var oldVal = metadata.IsValidForAdvancedFind?.Value == true ? "true" : "false";
                    metadata.IsValidForAdvancedFind = new BooleanManagedProperty(is_valid_for_advanced_find.Value);
                    changes.Add($"IsValidForAdvancedFind: {oldVal} -> {is_valid_for_advanced_find.Value.ToString().ToLowerInvariant()}");
                    structuredChanges["isValidForAdvancedFind"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = is_valid_for_advanced_find.Value.ToString().ToLowerInvariant() };
                }

                // --- Type-specific property updates ---
                ApplyTypeSpecificUpdates(metadata, max_length, min_value, max_value, precision, format,
                    true_label, false_label, changes, structuredChanges);

                // --- Execute metadata update (if any generic/type-specific changes) ---
                if (changes.Count > 0)
                {
                    var updateRequest = new UpdateAttributeRequest
                    {
                        EntityName = entity_name,
                        Attribute = metadata,
                        MergeLabels = true
                    };
                    _serviceClient.Execute(updateRequest);
                }

                // --- Picklist option management ---
                var optionResults = ManagePicklistOptions(entity_name, attribute_name, metadata,
                    add_options, update_options, delete_options);

                if (changes.Count == 0 && optionResults.Count == 0)
                    return ErrorResult(
                        $"[Error] No changes specified for '{entity_name}.{attribute_name}'\n" +
                        "Tip: Provide at least one parameter to update (display_name, required_level, max_length, etc.)");

                // --- Publish ---
                var published = PublishIfNeeded(auto_publish, entity_name);

                // --- Format output ---
                var typeName = GetAttributeTypeName(metadata);
                var sb = new StringBuilder(512);
                sb.AppendLine($"[AttributeUpdated] {entity_name}.{attribute_name}");
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

                var structured = new UpdateAttributeResult
                {
                    EntityName = entity_name,
                    AttributeName = attribute_name,
                    AttributeType = typeName,
                    Changes = structuredChanges.Count > 0 ? structuredChanges : null,
                    OptionsAdded = optionResults.Where(r => r.StartsWith("OptionsAdded:")).Select(r => r.Substring("OptionsAdded: ".Length)).ToList(),
                    OptionsRenamed = optionResults.Where(r => r.StartsWith("OptionsRenamed:")).Select(r => r.Substring("OptionsRenamed: ".Length)).ToList(),
                    OptionsDeleted = optionResults.Where(r => r.StartsWith("OptionsDeleted:")).Select(r => r.Substring("OptionsDeleted: ".Length)).ToList(),
                    Published = published,
                    Status = "updated"
                };
                // Clean up empty lists
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
                return HandleException(ex, entity_name, attribute_name);
            }
        }

        // ========== Type-Specific Updates ==========

        private static void ApplyTypeSpecificUpdates(AttributeMetadata metadata,
            int maxLength, double? minValue, double? maxValue, int precision, string format,
            string trueLabel, string falseLabel,
            List<string> changes, Dictionary<string, UpdateAttributeChange> structuredChanges)
        {
            // String: max_length, format
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

            // Memo: max_length
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

            // Integer: min/max
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

            // Decimal: min/max/precision
            if (metadata is DecimalAttributeMetadata decMeta)
            {
                if (minValue.HasValue)
                {
                    var oldVal = decMeta.MinValue?.ToString() ?? "";
                    decMeta.MinValue = (decimal)minValue.Value;
                    changes.Add($"MinValue: {oldVal} -> {(decimal)minValue.Value}");
                    structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = ((decimal)minValue.Value).ToString() };
                }
                if (maxValue.HasValue)
                {
                    var oldVal = decMeta.MaxValue?.ToString() ?? "";
                    decMeta.MaxValue = (decimal)maxValue.Value;
                    changes.Add($"MaxValue: {oldVal} -> {(decimal)maxValue.Value}");
                    structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = ((decimal)maxValue.Value).ToString() };
                }
                if (precision >= 0)
                {
                    var oldVal = decMeta.Precision?.ToString() ?? "";
                    if (precision > 10) precision = 10;
                    decMeta.Precision = precision;
                    changes.Add($"Precision: {oldVal} -> {precision}");
                    structuredChanges["precision"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = precision.ToString() };
                }
                return;
            }

            // Money: min/max/precision
            if (metadata is MoneyAttributeMetadata moneyMeta)
            {
                if (minValue.HasValue)
                {
                    var oldVal = moneyMeta.MinValue?.ToString() ?? "";
                    moneyMeta.MinValue = minValue.Value;
                    changes.Add($"MinValue: {oldVal} -> {minValue.Value}");
                    structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = minValue.Value.ToString() };
                }
                if (maxValue.HasValue)
                {
                    var oldVal = moneyMeta.MaxValue?.ToString() ?? "";
                    moneyMeta.MaxValue = maxValue.Value;
                    changes.Add($"MaxValue: {oldVal} -> {maxValue.Value}");
                    structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = maxValue.Value.ToString() };
                }
                if (precision >= 0)
                {
                    var oldVal = moneyMeta.Precision?.ToString() ?? "";
                    if (precision > 4) precision = 4;
                    moneyMeta.Precision = precision;
                    moneyMeta.PrecisionSource = 2; // attribute's own precision
                    changes.Add($"Precision: {oldVal} -> {precision}");
                    structuredChanges["precision"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = precision.ToString() };
                }
                return;
            }

            // Float/Double: min/max/precision
            if (metadata is DoubleAttributeMetadata dblMeta)
            {
                if (minValue.HasValue)
                {
                    var oldVal = dblMeta.MinValue?.ToString() ?? "";
                    dblMeta.MinValue = minValue.Value;
                    changes.Add($"MinValue: {oldVal} -> {minValue.Value}");
                    structuredChanges["minValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = minValue.Value.ToString() };
                }
                if (maxValue.HasValue)
                {
                    var oldVal = dblMeta.MaxValue?.ToString() ?? "";
                    dblMeta.MaxValue = maxValue.Value;
                    changes.Add($"MaxValue: {oldVal} -> {maxValue.Value}");
                    structuredChanges["maxValue"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = maxValue.Value.ToString() };
                }
                if (precision >= 0)
                {
                    var oldVal = dblMeta.Precision?.ToString() ?? "";
                    if (precision > 10) precision = 10;
                    dblMeta.Precision = precision;
                    changes.Add($"Precision: {oldVal} -> {precision}");
                    structuredChanges["precision"] = new UpdateAttributeChange { OldValue = oldVal, NewValue = precision.ToString() };
                }
                return;
            }

            // Boolean: true/false labels
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

            // DateTime: format
            if (metadata is DateTimeAttributeMetadata dtMeta)
            {
                if (!string.IsNullOrWhiteSpace(format))
                {
                    var oldVal = dtMeta.Format?.ToString() ?? "DateAndTime";
                    var newFormat = format.Trim().Equals("DateOnly", StringComparison.OrdinalIgnoreCase)
                        ? DateTimeFormat.DateOnly
                        : DateTimeFormat.DateAndTime;
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
                if (!string.IsNullOrWhiteSpace(addOptionsJson) ||
                    !string.IsNullOrWhiteSpace(updateOptionsJson) ||
                    !string.IsNullOrWhiteSpace(deleteOptionsJson))
                {
                    results.Add($"[Warning] Option management ignored — attribute type is {GetAttributeTypeName(metadata)}, not Picklist/MultiSelectPicklist");
                }
                return results;
            }

            // Add options
            if (!string.IsNullOrWhiteSpace(addOptionsJson))
            {
                var options = ParseOptionItems(addOptionsJson);
                if (options != null)
                {
                    foreach (var opt in options)
                    {
                        var insertRequest = new InsertOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Label = new Label(opt.Label, 1033)
                        };
                        if (opt.Value.HasValue)
                            insertRequest.Value = opt.Value.Value;

                        var insertResponse = (InsertOptionValueResponse)_serviceClient.Execute(insertRequest);
                        var assignedValue = insertResponse.NewOptionValue;
                        results.Add($"OptionsAdded: {opt.Label} ({assignedValue})");
                    }
                }
            }

            // Update (rename) options
            if (!string.IsNullOrWhiteSpace(updateOptionsJson))
            {
                var options = ParseOptionItems(updateOptionsJson);
                if (options != null)
                {
                    foreach (var opt in options)
                    {
                        if (!opt.Value.HasValue)
                            continue; // value is required to identify which option to rename

                        var updateOptionRequest = new UpdateOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Value = opt.Value.Value,
                            Label = new Label(opt.Label, 1033),
                            MergeLabels = true
                        };
                        _serviceClient.Execute(updateOptionRequest);
                        results.Add($"OptionsRenamed: {opt.Value.Value} -> \"{opt.Label}\"");
                    }
                }
            }

            // Delete options
            if (!string.IsNullOrWhiteSpace(deleteOptionsJson))
            {
                var values = ParseDeleteValues(deleteOptionsJson);
                if (values != null)
                {
                    foreach (var val in values)
                    {
                        var deleteOptionRequest = new DeleteOptionValueRequest
                        {
                            EntityLogicalName = entityName,
                            AttributeLogicalName = attributeName,
                            Value = val
                        };
                        _serviceClient.Execute(deleteOptionRequest);
                        results.Add($"OptionsDeleted: {val}");
                    }
                }
            }

            return results;
        }

        // ========== Helpers ==========

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

        private static string GetAttributeTypeName(AttributeMetadata metadata)
        {
            return metadata switch
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

        private sealed class OptionItem
        {
            public string Label { get; set; }
            public int? Value { get; set; }
        }

        private static List<OptionItem> ParseOptionItems(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            try
            {
                return JsonSerializer.Deserialize<List<OptionItem>>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }
            catch
            {
                return null;
            }
        }

        private static List<int> ParseDeleteValues(string json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            try
            {
                return JsonSerializer.Deserialize<List<int>>(json);
            }
            catch
            {
                return null;
            }
        }

        private static CallToolResult HandleException(Exception ex, string entityName, string attributeName)
        {
            var msg = ex.Message;

            if (msg.Contains("could not be found", StringComparison.OrdinalIgnoreCase) ||
                msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase))
            {
                if (msg.Contains("attribute", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains(attributeName, StringComparison.OrdinalIgnoreCase))
                {
                    return ErrorResult(
                        $"[Error] Attribute '{attributeName}' not found on entity '{entityName}'\n" +
                        $"Message: {msg}\n" +
                        "Tip: Use get_metadata_entities to find the correct attribute logical name");
                }

                return ErrorResult(
                    $"[Error] Entity '{entityName}' not found\n" +
                    $"Message: {msg}\n" +
                    "Tip: Use get_metadata_entities to find the correct entity logical name");
            }

            return ErrorResult($"Error: Failed to update attribute '{entityName}.{attributeName}'\nMessage: {msg}");
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
