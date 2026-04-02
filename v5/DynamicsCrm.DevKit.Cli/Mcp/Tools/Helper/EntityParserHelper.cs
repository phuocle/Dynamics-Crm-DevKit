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
        private static readonly ConcurrentDictionary<string, Dictionary<string, AttributeMetadata>> MetadataCache = new();

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

            var attrMap = GetAttributeMap(serviceClient, entityLogicalName);

            foreach (var (key, jsonVal) in fields)
            {
                if (jsonVal.ValueKind == JsonValueKind.Null || jsonVal.ValueKind == JsonValueKind.Undefined)
                {
                    var fieldName = ParseFieldName(key);
                    entity[fieldName] = null;
                    continue;
                }

                var (resolvedField, targetEntity) = ParseFieldKey(key);

                if (!attrMap.TryGetValue(resolvedField, out var attrMeta))
                    throw new ArgumentException(
                        $"Field '{resolvedField}' does not exist on entity '{entityLogicalName}'. " +
                        "Use get_metadata_entities to discover valid field names.");

                entity[resolvedField] = ConvertValue(attrMeta, jsonVal, resolvedField, targetEntity);
            }

            return entity;
        }

        public static void ClearCache()
        {
            MetadataCache.Clear();
        }

        private static Dictionary<string, AttributeMetadata> GetAttributeMap(ServiceClient serviceClient, string entityLogicalName)
        {
            return MetadataCache.GetOrAdd(entityLogicalName, _ =>
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityLogicalName,
                    EntityFilters = EntityFilters.Attributes
                };
                var response = (RetrieveEntityResponse)serviceClient.Execute(request);
                return response.EntityMetadata.Attributes.ToDictionary(a => a.LogicalName, a => a);
            });
        }

        /// <summary>
        /// Supports "fieldname@targetentity" syntax for polymorphic lookups (Customer, Owner, PartyList).
        /// Returns (fieldLogicalName, targetEntityOverride).
        /// </summary>
        private static (string fieldName, string targetEntity) ParseFieldKey(string key)
        {
            var atIndex = key.IndexOf('@');
            if (atIndex > 0 && atIndex < key.Length - 1)
                return (key.Substring(0, atIndex), key.Substring(atIndex + 1));
            return (key, null);
        }

        private static string ParseFieldName(string key)
        {
            var atIndex = key.IndexOf('@');
            return atIndex > 0 ? key.Substring(0, atIndex) : key;
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
    }
}
