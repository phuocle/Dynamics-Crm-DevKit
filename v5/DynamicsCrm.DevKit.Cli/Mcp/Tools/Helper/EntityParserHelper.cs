using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class EntityParserHelper
    {
        // Weak service identity prevents metadata reuse across organizations/principals
        // without retaining registry-owned clients after shutdown.
        private static ConditionalWeakTable<IOrganizationService, ConcurrentDictionary<string, AttributeMetadataIndex>> MetadataCache = new();

        public static Entity ParseFieldsToEntity(
            IOrganizationService orgService,
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

            var attrIndex = GetAttributeIndex(orgService, entityLogicalName);
            var seenLogicalNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var (key, jsonVal) in fields)
            {
                var (fieldInput, targetEntityInput) = ParseFieldKey(key);
                var attrMeta = ResolveAttribute(attrIndex, entityLogicalName, fieldInput);
                var resolvedField = attrMeta.LogicalName;

                // Fast-fail: two JSON keys that resolve to the same logical name
                // would silently overwrite each other. Reject early.
                if (!seenLogicalNames.Add(resolvedField))
                    throw new ArgumentException(
                        $"fields_json key '{key}' resolves to field '{resolvedField}', but a previous key already resolved to the same field. Duplicate field mapping is not allowed. Tip: Use inspect_metadata(resource='tables', name='{entityLogicalName}') to find unique field names.");

                var targetEntity = ResolveTargetEntity(orgService, targetEntityInput);

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
            System.Threading.Interlocked.Exchange(ref MetadataCache, new());
        }

        internal static AttributeMetadata FindAttribute(IOrganizationService orgService, string entityName, string logicalName)
        {
            return GetAttributeIndex(orgService, entityName).Candidates
                .FirstOrDefault(candidate => candidate.LogicalName == logicalName)?.Value;
        }

        internal static AttributeMetadata ResolveAttribute(IOrganizationService orgService, string entityLogicalName, string fieldInput)
        {
            var attrIndex = GetAttributeIndex(orgService, entityLogicalName);
            return ResolveAttribute(attrIndex, entityLogicalName, fieldInput);
        }

        private static AttributeMetadataIndex GetAttributeIndex(IOrganizationService orgService, string entityLogicalName)
        {
            return MetadataCache.GetValue(orgService, _ => new(StringComparer.OrdinalIgnoreCase)).GetOrAdd(entityLogicalName, _ =>
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityLogicalName,
                    EntityFilters = EntityFilters.Attributes,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveEntityResponse)orgService.Execute(request);
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
                $"Tip: Use inspect_metadata(resource='tables', name='{entityLogicalName}') to discover valid field names.",
                "fields_json key");

            if (resolved.IsSuccess)
                return resolved.Value;

            if (resolved.Status == ResolveStatus.Ambiguous)
                throw new AmbiguousFieldException(resolved.Error.Split("\r\n")[0], fieldInput, resolved.Candidates);

            throw new ArgumentException(resolved.Error);
        }

        private static string ResolveTargetEntity(IOrganizationService orgService, string targetEntityInput)
        {
            if (string.IsNullOrWhiteSpace(targetEntityInput))
                return null;

            var resolved = DisplayNameFirstResolver.ResolveEntity(orgService, targetEntityInput, "manage_data(resource='record')/manage_data(resource='bulk')");
            if (resolved.IsSuccess)
                return resolved.Value.LogicalName;

            throw new ArgumentException($"Target entity '{targetEntityInput}': {resolved.Error}");
        }

        /// <summary>
        /// Supports "fieldname@targetentity" syntax for polymorphic lookups (Customer, Owner, PartyList).
        /// Returns (fieldLogicalName, targetEntityOverride).
        /// </summary>
        internal static (string fieldName, string targetEntity) ParseFieldKey(string key)
        {
            var atIndex = key.IndexOf('@');
            if (atIndex > 0 && atIndex < key.Length - 1)
            {
                var fieldName = key.Substring(0, atIndex).Trim();
                var targetEntity = key.Substring(atIndex + 1).Trim();
                if (string.Equals(targetEntity, "odata.bind", StringComparison.OrdinalIgnoreCase))
                    throw new InvalidFieldKeyException(
                        $"Invalid field key '{key}': Web API '@odata.bind' syntax is unsupported in manage_data(resource='record') and manage_data(resource='bulk').",
                        $"Use '\"{fieldName}\": \"<guid>\"' for a single-target lookup or '\"{fieldName}@<target_entity>\": \"<guid>\"' for a polymorphic lookup. Use the target table's logical name for <target_entity>.");
                return (fieldName, targetEntity);
            }
            return (key.Trim(), null);
        }

        private static string ParseFieldName(string key)
        {
            var (fieldName, _) = ParseFieldKey(key);
            return fieldName;
        }

        private static object ConvertValue(AttributeMetadata attrMeta, JsonElement jsonVal, string fieldName, string targetEntityOverride)
        {
            // PartyList attributes are returned as LookupAttributeMetadata with AttributeType=PartyList.
            // Must handle PartyList before the LookupAttributeMetadata arm, otherwise array JSON
            // is treated as a GUID string and throws "requires String, target is Array".
            if (attrMeta.AttributeType == AttributeTypeCode.PartyList)
                return BuildActivityPartyCollection(jsonVal, fieldName);

            if (attrMeta.AttributeType == AttributeTypeCode.Uniqueidentifier || attrMeta is UniqueIdentifierAttributeMetadata)
            {
                if (jsonVal.ValueKind == JsonValueKind.String && Guid.TryParse(jsonVal.GetString(), out var guid))
                    return guid;
                throw new ArgumentException($"Field '{fieldName}' requires a valid GUID string.");
            }

            return attrMeta switch
            {
                LookupAttributeMetadata lookup => BuildEntityReference(lookup, jsonVal, fieldName, targetEntityOverride),

                PicklistAttributeMetadata => new OptionSetValue(jsonVal.GetInt32()),
                StateAttributeMetadata state => ParseStateOrStatus(jsonVal, state.OptionSet, fieldName),
                StatusAttributeMetadata status => ParseStateOrStatus(jsonVal, status.OptionSet, fieldName),

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

        private static OptionSetValue ParseStateOrStatus(JsonElement value, OptionSetMetadata optionSet, string fieldName)
        {
            var label = value.ValueKind == JsonValueKind.String ? value.GetString().Trim() : null;
            if ((value.ValueKind == JsonValueKind.Number && value.TryGetInt32(out var number))
                || int.TryParse(label, NumberStyles.Integer, CultureInfo.InvariantCulture, out number))
                return new OptionSetValue(number);

            var matches = optionSet?.Options?
                .Where(option => option.Value.HasValue && label != null &&
                    (string.Equals(option.Label?.UserLocalizedLabel?.Label, label, StringComparison.OrdinalIgnoreCase) ||
                    option.Label?.LocalizedLabels?.Any(localized =>
                        string.Equals(localized.Label, label, StringComparison.OrdinalIgnoreCase)) == true ||
                    option is StateOptionMetadata state &&
                        string.Equals(state.InvariantName, label, StringComparison.OrdinalIgnoreCase)))
                .Select(option => option.Value.Value)
                .Distinct()
                .ToArray();
            if (matches?.Length == 1)
                return new OptionSetValue(matches[0]);
            if (matches?.Length > 1)
                throw new ArgumentException($"Field '{fieldName}' has multiple options labeled '{label}'. Use the integer option value.");
            throw new ArgumentException($"Field '{fieldName}' requires an integer option value or a valid label. Received {value.GetRawText()}.");
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

        /// <summary>
        /// Converts a JSON array (or single object) of party entries into an EntityCollection
        /// of activityparty entities that Dataverse expects for PartyList fields.
        ///
        /// Accepted JSON formats:
        ///   Array:  [{"id":"guid","type":"entity"}, {"id":"guid","type":"entity","addressused":"email"}]
        ///   Single: {"id":"guid","type":"entity"}  (auto-wrapped into array)
        ///
        /// participationtypemask is NOT required — Dataverse sets it automatically from the field name.
        /// </summary>
        private static EntityCollection BuildActivityPartyCollection(JsonElement jsonVal, string fieldName)
        {
            var parties = new List<Entity>();

            // Auto-wrap single object into array
            IEnumerable<JsonElement> elements;
            if (jsonVal.ValueKind == JsonValueKind.Array)
                elements = jsonVal.EnumerateArray();
            else if (jsonVal.ValueKind == JsonValueKind.Object)
                elements = new[] { jsonVal };
            else
                throw new ArgumentException(
                    $"PartyList field '{fieldName}' requires a JSON array of party objects " +
                    "(or a single party object). Each object: {\"id\":\"<guid>\",\"type\":\"<entity>\"}. " +
                    "Optional: \"addressused\":\"email@example.com\".");

            foreach (var elem in elements)
            {
                if (elem.ValueKind != JsonValueKind.Object)
                    throw new ArgumentException(
                        $"PartyList field '{fieldName}': each element must be an object " +
                        "with {\"id\":\"<guid>\",\"type\":\"<entity>\"}.");

                if (!elem.TryGetProperty("id", out var idProp) || idProp.ValueKind != JsonValueKind.String)
                    throw new ArgumentException(
                        $"PartyList field '{fieldName}': missing required \"id\" (GUID string) in party object.");

                if (!Guid.TryParse(idProp.GetString(), out var partyGuid))
                    throw new ArgumentException(
                        $"PartyList field '{fieldName}': \"{idProp.GetString()}\" is not a valid GUID.");

                if (!elem.TryGetProperty("type", out var typeProp) || typeProp.ValueKind != JsonValueKind.String)
                    throw new ArgumentException(
                        $"PartyList field '{fieldName}': missing required \"type\" (entity logical name) in party object. " +
                        "Example: \"type\":\"contact\" or \"type\":\"systemuser\".");

                var targetEntity = typeProp.GetString();
                if (string.IsNullOrWhiteSpace(targetEntity))
                    throw new ArgumentException(
                        $"PartyList field '{fieldName}': \"type\" cannot be empty.");

                var party = new Entity("activityparty");
                party["partyid"] = new EntityReference(targetEntity, partyGuid);

                // Optional: addressused (email/phone/fax override)
                if (elem.TryGetProperty("addressused", out var addrProp)
                    && addrProp.ValueKind == JsonValueKind.String
                    && !string.IsNullOrWhiteSpace(addrProp.GetString()))
                {
                    party["addressused"] = addrProp.GetString();
                }

                parties.Add(party);
            }

            if (parties.Count == 0)
                throw new ArgumentException(
                    $"PartyList field '{fieldName}': at least one party object is required.");

            return new EntityCollection(parties);
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

    internal sealed class InvalidFieldKeyException : ArgumentException
    {
        public string Hint { get; }

        public InvalidFieldKeyException(string message, string hint) : base(message)
        {
            Hint = hint;
        }
    }

    /// <summary>
    /// Thrown when a fields_json key ambiguously matches multiple attributes.
    /// Carries the resolver candidates so tools can emit them in [Detail] instead of a text table.
    /// </summary>
    internal sealed class AmbiguousFieldException : ArgumentException
    {
        public string FieldInput { get; }
        public List<ResolveCandidate> Candidates { get; }

        public AmbiguousFieldException(string message, string fieldInput, List<ResolveCandidate> candidates)
            : base(message)
        {
            FieldInput = fieldInput;
            Candidates = candidates ?? new List<ResolveCandidate>();
        }
    }
}
