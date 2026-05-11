using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class EntityParserHelper
    {
        private static readonly ConcurrentDictionary<string, AttributeMetadataIndex> MetadataCache = new();

        public static Entity ParseFieldsToEntity(
            ServiceClient serviceClient,
            string entityLogicalName,
            string fieldsJson,
            Guid? recordId = null)
        {
            var entity = recordId.HasValue
                ? new Entity(entityLogicalName, recordId.Value)
                : new Entity(entityLogicalName);

            var fields = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(fieldsJson);
            if (fields == null || fields.Count == 0)
                throw new ArgumentException("fields_json must be a non-empty JSON object.");

            var attrIndex = GetAttributeIndex(serviceClient, entityLogicalName);

            foreach (var (key, jsonVal) in fields)
            {
                var (fieldInput, targetEntityInput) = ParseFieldKey(key);
                var attrMeta = ResolveAttribute(attrIndex, entityLogicalName, fieldInput);
                var resolvedField = attrMeta.LogicalName;
                var targetEntity = ResolveTargetEntity(serviceClient, targetEntityInput);

                if (jsonVal.ValueKind == JsonValueKind.Null || jsonVal.ValueKind == JsonValueKind.Undefined)
                {
                    entity[resolvedField] = null;
                    continue;
                }

                entity[resolvedField] = ConvertValue(attrMeta, jsonVal, resolvedField, targetEntity);
            }

            return entity;
        }

        public static void ClearCache()
        {
            MetadataCache.Clear();
        }

        private static AttributeMetadataIndex GetAttributeIndex(ServiceClient serviceClient, string entityLogicalName)
        {
            return MetadataCache.GetOrAdd(entityLogicalName, _ =>
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityLogicalName,
                    EntityFilters = EntityFilters.Attributes,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveEntityResponse)serviceClient.Execute(request);
                return AttributeMetadataIndex.From(response.EntityMetadata.Attributes);
            });
        }

        private static AttributeMetadata ResolveAttribute(AttributeMetadataIndex attrIndex, string entityLogicalName, string fieldInput)
        {
            var resolved = DisplayNameFirstResolver.Resolve(
                fieldInput,
                attrIndex.Candidates,
                "[AmbiguousField]",
                "[NotFoundField]",
                $"Tip: Use get_tables(entity_name='{entityLogicalName}') to discover valid field names.",
                "fields_json key");

            if (resolved.IsSuccess)
                return resolved.Value;

            throw new ArgumentException(resolved.Error);
        }

        private static string ResolveTargetEntity(ServiceClient serviceClient, string targetEntityInput)
        {
            if (string.IsNullOrWhiteSpace(targetEntityInput))
                return null;

            var resolved = DisplayNameFirstResolver.ResolveEntity(serviceClient, targetEntityInput, "manage_record/create_records");
            if (resolved.IsSuccess)
                return resolved.Value.LogicalName;

            throw new ArgumentException($"Target entity '{targetEntityInput}': {resolved.Error}");
        }

        /// <summary>
        /// Supports "fieldname@targetentity" syntax for polymorphic lookups (Customer, Owner, PartyList).
        /// Returns (fieldLogicalName, targetEntityOverride).
        /// </summary>
        private static (string fieldName, string targetEntity) ParseFieldKey(string key)
        {
            var atIndex = key.IndexOf('@');
            if (atIndex > 0 && atIndex < key.Length - 1)
                return (key.Substring(0, atIndex).Trim(), key.Substring(atIndex + 1).Trim());
            return (key.Trim(), null);
        }

        private static string ParseFieldName(string key)
        {
            var (fieldName, _) = ParseFieldKey(key);
            return fieldName;
        }

        private static object ConvertValue(AttributeMetadata attrMeta, JsonElement jsonVal, string fieldName, string targetEntityOverride)
        {
            return attrMeta switch
            {
                LookupAttributeMetadata lookup => BuildEntityReference(lookup, jsonVal, fieldName, targetEntityOverride),

                PicklistAttributeMetadata => new OptionSetValue(jsonVal.GetInt32()),
                StateAttributeMetadata => new OptionSetValue(jsonVal.GetInt32()),
                StatusAttributeMetadata => new OptionSetValue(jsonVal.GetInt32()),

                MultiSelectPicklistAttributeMetadata => new OptionSetValueCollection(
                    jsonVal.EnumerateArray().Select(v => new OptionSetValue(v.GetInt32())).ToList()),

                MoneyAttributeMetadata => new Money(jsonVal.GetDecimal()),
                BooleanAttributeMetadata => jsonVal.GetBoolean(),
                DateTimeAttributeMetadata => DateTime.Parse(jsonVal.GetString(), CultureInfo.InvariantCulture),
                IntegerAttributeMetadata => jsonVal.GetInt32(),
                DecimalAttributeMetadata => jsonVal.GetDecimal(),
                DoubleAttributeMetadata => jsonVal.GetDouble(),
                BigIntAttributeMetadata => jsonVal.GetInt64(),
                StringAttributeMetadata => jsonVal.GetString() ?? "",
                MemoAttributeMetadata => jsonVal.GetString() ?? "",

                _ => FallbackConvert(jsonVal)
            };
        }

        private static EntityReference BuildEntityReference(LookupAttributeMetadata lookup, JsonElement jsonVal, string fieldName, string targetEntityOverride)
        {
            var guidStr = jsonVal.GetString()
                ?? throw new ArgumentException($"Lookup field '{fieldName}' requires a GUID string value.");

            if (!Guid.TryParse(guidStr, out var guid))
                throw new ArgumentException($"Lookup field '{fieldName}': '{guidStr}' is not a valid GUID.");

            var target = targetEntityOverride ?? lookup.Targets?.FirstOrDefault();
            if (string.IsNullOrEmpty(target))
                throw new ArgumentException(
                    $"Lookup field '{fieldName}' has no target entity. " +
                    "Use 'fieldname@targetentity' syntax (e.g. 'customerid@account') for polymorphic lookups.");

            return new EntityReference(target, guid);
        }

        private static object FallbackConvert(JsonElement jsonVal)
        {
            return jsonVal.ValueKind switch
            {
                JsonValueKind.String => jsonVal.GetString() ?? "",
                JsonValueKind.Number => jsonVal.GetDecimal(),
                JsonValueKind.True => true,
                JsonValueKind.False => false,
                _ => jsonVal.GetString() ?? ""
            };
        }

        private sealed class AttributeMetadataIndex
        {
            public List<DisplayNameFirstCandidate<AttributeMetadata>> Candidates { get; init; } = [];

            public static AttributeMetadataIndex From(IEnumerable<AttributeMetadata> attributes)
            {
                return new AttributeMetadataIndex
                {
                    Candidates = attributes
                        .Where(a => a?.LogicalName != null)
                        .Select(a => new DisplayNameFirstCandidate<AttributeMetadata>
                        {
                            Value = a,
                            DisplayName = a.DisplayName?.UserLocalizedLabel?.Label,
                            LogicalName = a.LogicalName,
                            SchemaName = a.SchemaName,
                            Id = a.MetadataId,
                            Kind = "attribute",
                            CanonicalName = a.LogicalName
                        })
                        .ToList()
                };
            }
        }
    }
}
