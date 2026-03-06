using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class MetadataFormatter
    {
        public static object ToEntitySummary(EntityMetadata entity)
        {
            return new
            {
                logical_name = entity.LogicalName,
                schema_name = entity.SchemaName,
                display_name = entity.DisplayName?.UserLocalizedLabel?.Label,
                collection_name = entity.LogicalCollectionName,
                object_type_code = entity.ObjectTypeCode,
                ownership_type = entity.OwnershipType?.ToString(),
                is_custom = entity.IsCustomEntity == true,
                is_activity = entity.IsActivity == true,
                is_intersect = entity.IsIntersect == true
            };
        }

        public static object ToEntityDetail(EntityMetadata metadata, string attributePrefix = null)
        {
            var attributes = (metadata.Attributes ?? [])
                .Where(a => a.AttributeOf == null)
                .Where(a => string.IsNullOrWhiteSpace(attributePrefix) ||
                            a.LogicalName.StartsWith(attributePrefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(a => a.LogicalName)
                .Select(ToAttributeDetail)
                .ToList();

            return new
            {
                logical_name = metadata.LogicalName,
                schema_name = metadata.SchemaName,
                display_name = metadata.DisplayName?.UserLocalizedLabel?.Label,
                logical_collection_name = metadata.LogicalCollectionName,
                entity_set_name = metadata.EntitySetName,
                object_type_code = metadata.ObjectTypeCode,
                primary_id_attribute = metadata.PrimaryIdAttribute,
                primary_name_attribute = metadata.PrimaryNameAttribute,
                primary_image_attribute = metadata.PrimaryImageAttribute,
                ownership_type = metadata.OwnershipType?.ToString(),
                is_custom_entity = metadata.IsCustomEntity == true,
                is_activity = metadata.IsActivity == true,
                is_activity_party = metadata.IsActivityParty == true,
                change_tracking_enabled = metadata.ChangeTrackingEnabled == true,
                description = metadata.Description?.UserLocalizedLabel?.Label,
                attributes,
                one_to_many_relationships = (metadata.OneToManyRelationships ?? [])
                    .OrderBy(r => r.SchemaName)
                    .Select(r => new
                    {
                        schema_name = r.SchemaName,
                        referenced_entity = r.ReferencedEntity,
                        referencing_entity = r.ReferencingEntity,
                        referencing_attribute = r.ReferencingAttribute
                    })
                    .ToList(),
                many_to_one_relationships = (metadata.ManyToOneRelationships ?? [])
                    .OrderBy(r => r.SchemaName)
                    .Select(r => new
                    {
                        schema_name = r.SchemaName,
                        referenced_entity = r.ReferencedEntity,
                        referencing_entity = r.ReferencingEntity,
                        referencing_attribute = r.ReferencingAttribute
                    })
                    .ToList(),
                many_to_many_relationships = (metadata.ManyToManyRelationships ?? [])
                    .OrderBy(r => r.SchemaName)
                    .Select(r => new
                    {
                        schema_name = r.SchemaName,
                        intersect_entity_name = r.IntersectEntityName,
                        entity1_logical_name = r.Entity1LogicalName,
                        entity2_logical_name = r.Entity2LogicalName
                    })
                    .ToList(),
                keys = (metadata.Keys ?? [])
                    .OrderBy(k => k.SchemaName)
                    .Select(k => new
                    {
                        schema_name = k.SchemaName,
                        display_name = k.DisplayName?.UserLocalizedLabel?.Label,
                        key_attributes = k.KeyAttributes
                    })
                    .ToList()
            };
        }

        public static object ToOptionSetDetail(OptionSetMetadataBase optionSet)
        {
            var baseInfo = new
            {
                name = optionSet.Name,
                display_name = optionSet.DisplayName?.UserLocalizedLabel?.Label,
                description = optionSet.Description?.UserLocalizedLabel?.Label,
                is_global = optionSet.IsGlobal == true,
                option_set_type = optionSet.OptionSetType?.ToString()
            };

            if (optionSet is BooleanOptionSetMetadata booleanOptionSet)
            {
                return new
                {
                    baseInfo.name,
                    baseInfo.display_name,
                    baseInfo.description,
                    baseInfo.is_global,
                    baseInfo.option_set_type,
                    options = new[]
                    {
                        new
                        {
                            value = booleanOptionSet.TrueOption?.Value,
                            label = booleanOptionSet.TrueOption?.Label?.UserLocalizedLabel?.Label
                        },
                        new
                        {
                            value = booleanOptionSet.FalseOption?.Value,
                            label = booleanOptionSet.FalseOption?.Label?.UserLocalizedLabel?.Label
                        }
                    }
                };
            }

            var options = (optionSet as OptionSetMetadata)?.Options?
                .OrderBy(x => x.Value)
                .Select(x => new
                {
                    value = x.Value,
                    label = x.Label?.UserLocalizedLabel?.Label,
                    description = x.Description?.UserLocalizedLabel?.Label
                })
                .ToList() ?? [];

            return new
            {
                baseInfo.name,
                baseInfo.display_name,
                baseInfo.description,
                baseInfo.is_global,
                baseInfo.option_set_type,
                options
            };
        }

        public static object ToMessagesPayload(
            string scope,
            IEnumerable<string> sdkMessages,
            IEnumerable<string> customActions,
            IEnumerable<string> customApis)
        {
            var sdk = DistinctSorted(sdkMessages);
            var actions = DistinctSorted(customActions);
            var apis = DistinctSorted(customApis);

            return new
            {
                scope,
                sdk_messages = sdk,
                custom_actions = actions,
                custom_apis = apis,
                all_messages = DistinctSorted(sdk.Concat(actions).Concat(apis)),
                counts = new
                {
                    sdk = sdk.Count,
                    custom_actions = actions.Count,
                    custom_apis = apis.Count
                }
            };
        }

        private static List<string> DistinctSorted(IEnumerable<string> values)
        {
            return (values ?? [])
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(x => x)
                .ToList();
        }

        private static object ToAttributeDetail(AttributeMetadata a)
        {
            return new
            {
                logical_name = a.LogicalName,
                schema_name = a.SchemaName,
                display_name = a.DisplayName?.UserLocalizedLabel?.Label,
                description = a.Description?.UserLocalizedLabel?.Label,
                type = a.AttributeType?.ToString(),
                required_level = a.RequiredLevel?.Value.ToString(),
                is_custom = a.IsCustomAttribute == true,
                is_valid_for_create = a.IsValidForCreate == true,
                is_valid_for_update = a.IsValidForUpdate == true,
                is_valid_for_read = a.IsValidForRead == true,
                details = ToAttributeTypeDetail(a)
            };
        }

        private static object ToAttributeTypeDetail(AttributeMetadata a)
        {
            return a switch
            {
                LookupAttributeMetadata lookup => new { targets = lookup.Targets ?? [] },
                PicklistAttributeMetadata picklist => new
                {
                    options = (picklist.OptionSet?.Options ?? [])
                        .OrderBy(o => o.Value)
                        .Select(o => new { value = o.Value, label = o.Label?.UserLocalizedLabel?.Label })
                },
                MultiSelectPicklistAttributeMetadata picklist => new
                {
                    options = (picklist.OptionSet?.Options ?? [])
                        .OrderBy(o => o.Value)
                        .Select(o => new { value = o.Value, label = o.Label?.UserLocalizedLabel?.Label })
                },
                StatusAttributeMetadata status => new
                {
                    options = (status.OptionSet?.Options ?? [])
                        .OrderBy(o => o.Value)
                        .Select(o => new { value = o.Value, label = o.Label?.UserLocalizedLabel?.Label })
                },
                StateAttributeMetadata state => new
                {
                    options = (state.OptionSet?.Options ?? [])
                        .OrderBy(o => o.Value)
                        .Select(o => new { value = o.Value, label = o.Label?.UserLocalizedLabel?.Label })
                },
                BooleanAttributeMetadata boolean => new
                {
                    true_option = new
                    {
                        value = boolean.OptionSet?.TrueOption?.Value,
                        label = boolean.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label
                    },
                    false_option = new
                    {
                        value = boolean.OptionSet?.FalseOption?.Value,
                        label = boolean.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label
                    }
                },
                StringAttributeMetadata str => new { max_length = str.MaxLength, format = str.FormatName?.Value ?? str.Format?.ToString() },
                MemoAttributeMetadata memo => new { max_length = memo.MaxLength, format = memo.FormatName?.Value ?? memo.Format?.ToString() },
                MoneyAttributeMetadata money => new { precision = money.Precision, min = money.MinValue, max = money.MaxValue },
                DecimalAttributeMetadata dec => new { precision = dec.Precision, min = dec.MinValue, max = dec.MaxValue },
                IntegerAttributeMetadata integer => new { min = integer.MinValue, max = integer.MaxValue, format = integer.Format?.ToString() },
                DoubleAttributeMetadata dbl => new { precision = dbl.Precision, min = dbl.MinValue, max = dbl.MaxValue },
                BigIntAttributeMetadata bigInt => new { min = bigInt.MinValue, max = bigInt.MaxValue },
                DateTimeAttributeMetadata dt => new { format = dt.Format?.ToString(), behavior = dt.DateTimeBehavior?.Value },
                ImageAttributeMetadata img => new { max_height = img.MaxHeight, max_width = img.MaxWidth, max_size_kb = img.MaxSizeInKB },
                FileAttributeMetadata file => new { max_size_kb = file.MaxSizeInKB },
                _ => null
            };
        }
    }
}
