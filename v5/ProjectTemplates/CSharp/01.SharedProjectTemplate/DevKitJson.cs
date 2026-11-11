using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace Microsoft.Xrm.Sdk
{
    /// <summary>
    /// Dependency-free JSON and Dataverse context snapshots (framework assemblies and Microsoft.Xrm.Sdk only).
    /// </summary>
    /// <remarks>
    /// Save with SerializeContext/SerializeContextFull and restore with DeserializeContext7.
    /// The snapshot implements IPluginExecutionContext through IPluginExecutionContext7. Boxed SDK values
    /// retain their types; ordinary JSON scalar roots retain the legacy JSON-number behavior.
    /// Existing full/compact JSON remains readable. Use the updated reader for new typed envelopes.
    /// Custom POCOs are structural data and can be restored with MapTo; services and the Dataverse database
    /// are not part of an execution-context snapshot. Serialization reports unreadable/cyclic values instead
    /// of silently emitting an incomplete snapshot. Compact JSON is not guaranteed to fit a trace log.
    /// </remarks>
    [DebuggerNonUserCode()]
    public static class DevKitJson
    {
        private const int BUILDER_CAPACITY = 2000;
        private const int MaxDepth = 128;
        private const string CompressedExtensionDataPrefix = "~DKJ1:";
        private static readonly ConcurrentDictionary<Type, PropertyInfo[]> PropertyCache = new ConcurrentDictionary<Type, PropertyInfo[]>();
        private static readonly ConcurrentDictionary<Type, PropertyInfo[]> ContextPropertyCache = new ConcurrentDictionary<Type, PropertyInfo[]>();
        // RemoteExecutionContext is sealed and cannot expose all v2-v7 properties. Keep the
        // original fields alive with it so deserialize -> serialize does not discard them.
        private static readonly ConditionalWeakTable<RemoteExecutionContext, Dictionary<string, object>> RemoteProperties =
            new ConditionalWeakTable<RemoteExecutionContext, Dictionary<string, object>>();
        private static readonly string[] DateTimeFormats = {
            "yyyy-MM-dd'T'HH:mm:ss.fff'Z'",
            "yyyy-MM-dd'T'HH:mm:ss'Z'",
            "yyyy-MM-dd'T'HH:mm:ss.fffffffK"
        };
        private static readonly HashSet<string> KnownContextProperties = new HashSet<string>(StringComparer.Ordinal)
        {
            "BusinessUnitId", "CorrelationId", "Depth", "InitiatingUserId",
            "InputParameters", "IsExecutingOffline", "IsInTransaction", "IsOfflinePlayback",
            "IsolationMode", "MessageName", "Mode", "OperationCreatedOn", "OperationId",
            "OrganizationId", "OrganizationName", "OutputParameters", "OwningExtension",
            "PostEntityImages", "PreEntityImages", "PrimaryEntityId", "PrimaryEntityName",
            "RequestId", "SecondaryEntityName", "SharedVariables", "Stage", "UserId",
            "ParentContext",
            // IPluginExecutionContext2–7 properties
            "UserAzureActiveDirectoryObjectId", "InitiatingUserAzureActiveDirectoryObjectId",
            "InitiatingUserApplicationId", "PortalsContactId", "IsPortalsClientCall",
            "AuthenticatedUserId", "InitiatingUserAgent",
            "EnvironmentId", "TenantId", "IsApplicationUser",
            "PreEntityImagesCollection", "PostEntityImagesCollection"
        };

        #region Public API

        [ThreadStatic]
        private static WriterState _writer;

        private static bool _compact => _writer.Compact;

        /// <summary>
        /// Serialize to full JSON format with readable keys (default for objects).
        /// </summary>
        public static string Serialize(object value)
        {
            return SerializeCore(value, false);
        }

        /// <summary>
        /// Serialize to compact JSON format with short keys.
        /// </summary>
        public static string SerializeCompact(object value)
        {
            return SerializeCore(value, true);
        }

        private static string SerializeCore(object value, bool compact, bool omitParentContext = false)
        {
            var previous = _writer;
            _writer = new WriterState { Compact = compact, OmitParentContext = omitParentContext };
            try
            {
                var sb = new StringBuilder(BUILDER_CAPACITY);
                WriteValue(value, sb);
                return sb.ToString();
            }
            finally { _writer = previous; }
        }

        public static object Deserialize(string json)
        {
            return DeserializeCore(json, null);
        }

        private static object DeserializeCore(string json, Type targetType)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            var chars = json.ToCharArray();
            var index = 0;
            var result = ParseValue(chars, ref index, 0);
            EatWhitespace(chars, ref index);
            if (index != chars.Length)
                throw new FormatException("Unexpected content at JSON index " + index.ToString(CultureInfo.InvariantCulture) + ".");
            var context7 = targetType == typeof(ExecutionContextSnapshot) ||
                (targetType != null && typeof(IPluginExecutionContext2).IsAssignableFrom(targetType));
            // Microsoft webhook/Service Bus JSON is a different wire format from DevKit JSON.
            if (result is Dictionary<string, object> native && !native.ContainsKey("_t") &&
                (!native.TryGetValue("__type", out var nativeType) || nativeType is string nativeName && nativeName.StartsWith("RemoteExecutionContext:", StringComparison.Ordinal)) &&
                native.ContainsKey("MessageName") && native.ContainsKey("BusinessUnitId") &&
                (targetType == typeof(RemoteExecutionContext) || context7))
            {
                var remote = (RemoteExecutionContext)ReadNativeJson(json, typeof(RemoteExecutionContext));
                var snapshot = ReadNativeContextProperties(remote, native);
                return context7 ? snapshot : (object)remote;
            }
            return DecodeValue(result, targetType, context7);
        }

        public static T Deserialize<T>(string json)
        {
            // Preserve the existing DevKit "no payload" convention.
            if (string.IsNullOrWhiteSpace(json)) return default(T);

            object result;
            try
            {
                result = DeserializeCore(json, typeof(T));
            }
            catch (Exception ex)
            {
                throw CreateDeserializationException(typeof(T), json, null, ex);
            }
            if (result == null) return default(T);
            if (result is T typed) return typed;
            var t = typeof(T);
            try
            {
                return (T)CoerceValue(result, t);
            }
            catch (Exception ex)
            {
                throw CreateDeserializationException(t, json, result, ex);
            }
        }

        /// <summary>
        /// Attempts to deserialize JSON without throwing. Use Deserialize&lt;T&gt; when failure details are required.
        /// </summary>
        public static bool TryDeserialize<T>(string json, out T value)
        {
            if (string.IsNullOrWhiteSpace(json))
            {
                value = default(T);
                return false;
            }

            try
            {
                value = Deserialize<T>(json);
                return true;
            }
            catch
            {
                value = default(T);
                return false;
            }
        }

        /// <summary>
        /// Map a deserialized object (typically Dictionary&lt;string, object&gt;) to a strongly-typed POCO.
        /// Use this when retrieving custom types from InputParameters/OutputParameters after deserialization.
        /// Example: var input = DevKitJson.MapTo&lt;Input_CloneQuote&gt;(context.InputParameters["Input"]);
        /// </summary>
        public static T MapTo<T>(object value) where T : new()
        {
            if (value == null) return default(T);
            if (value is T typed) return typed;
            if (value is Dictionary<string, object> dict) return (T)MapDictionaryToObject(dict, typeof(T));
            return default(T);
        }

        /// <summary>
        /// Serialize any IExecutionContext to compact JSON format.
        /// Uses short keys to maximize data within the 10 KB Plugin Trace Log limit.
        /// </summary>
        public static string SerializeContext(IExecutionContext context)
        {
            return SerializeCore(context, true);
        }

        /// <summary>
        /// Serialize a compact context snapshot without ParentContext, for trace-log fallback only.
        /// All other available execution-context fields are retained.
        /// </summary>
        public static string SerializeContextWithoutParentContext(IExecutionContext context)
        {
            return SerializeCore(context, true, true);
        }

        /// <summary>
        /// Serialize any IExecutionContext to full JSON format with readable keys.
        /// </summary>
        public static string SerializeContextFull(IExecutionContext context)
        {
            return SerializeCore(context, false);
        }

        /// <summary>
        /// Restore all v1-v7 properties, including bulk-operation images and parent contexts.
        /// Accepts full/compact DevKit JSON and native Microsoft RemoteExecutionContext JSON.
        /// Use HasProperty to distinguish unavailable properties from their default values.
        /// The snapshot contains context data; organization services must be supplied separately.
        /// </summary>
        public static ExecutionContextSnapshot DeserializeContext7(string json)
        {
            return Deserialize<ExecutionContextSnapshot>(json);
        }

        #endregion

        /// <summary>
        /// A standalone v1-v7 context for inspection and local debugging. Properties contains
        /// the captured fields, including unknown extensions. Missing fields are not invented.
        /// </summary>
        public sealed class ExecutionContextSnapshot : IPluginExecutionContext7
        {
            private readonly Dictionary<string, object> _properties;
            public IReadOnlyDictionary<string, object> Properties { get; }

            internal ExecutionContextSnapshot(Dictionary<string, object> properties)
            {
                _properties = new Dictionary<string, object>(properties, StringComparer.Ordinal);
                _properties.Remove("__type");
                _properties.Remove("SnapshotVersion");
                foreach (var prop in GetProperties(typeof(ExecutionContextSnapshot)))
                {
                    if (prop.Name == "Properties" || !_properties.TryGetValue(prop.Name, out var value)) continue;
                    _properties[prop.Name] = CoerceValue(value, prop.PropertyType);
                }
                Properties = new System.Collections.ObjectModel.ReadOnlyDictionary<string, object>(_properties);
            }

            public bool HasProperty(string name) { return _properties.ContainsKey(name); }
            private T Get<T>(string name)
            {
                return _properties.TryGetValue(name, out var value) && value != null ? (T)value : default(T);
            }

            public int Mode => Get<int>("Mode");
            public int IsolationMode => Get<int>("IsolationMode");
            public int Depth => Get<int>("Depth");
            public string MessageName => Get<string>("MessageName");
            public string PrimaryEntityName => Get<string>("PrimaryEntityName");
            public Guid? RequestId => Get<Guid?>("RequestId");
            public string SecondaryEntityName => Get<string>("SecondaryEntityName");
            public ParameterCollection InputParameters => Get<ParameterCollection>("InputParameters");
            public ParameterCollection OutputParameters => Get<ParameterCollection>("OutputParameters");
            public ParameterCollection SharedVariables => Get<ParameterCollection>("SharedVariables");
            public Guid UserId => Get<Guid>("UserId");
            public Guid InitiatingUserId => Get<Guid>("InitiatingUserId");
            public Guid BusinessUnitId => Get<Guid>("BusinessUnitId");
            public Guid OrganizationId => Get<Guid>("OrganizationId");
            public string OrganizationName => Get<string>("OrganizationName");
            public Guid PrimaryEntityId => Get<Guid>("PrimaryEntityId");
            public EntityImageCollection PreEntityImages => Get<EntityImageCollection>("PreEntityImages");
            public EntityImageCollection PostEntityImages => Get<EntityImageCollection>("PostEntityImages");
            public EntityReference OwningExtension => Get<EntityReference>("OwningExtension");
            public Guid CorrelationId => Get<Guid>("CorrelationId");
            public bool IsExecutingOffline => Get<bool>("IsExecutingOffline");
            public bool IsOfflinePlayback => Get<bool>("IsOfflinePlayback");
            public bool IsInTransaction => Get<bool>("IsInTransaction");
            public Guid OperationId => Get<Guid>("OperationId");
            public DateTime OperationCreatedOn => Get<DateTime>("OperationCreatedOn");
            public IPluginExecutionContext ParentContext => Get<IPluginExecutionContext>("ParentContext");
            public int Stage => Get<int>("Stage");
            public Guid UserAzureActiveDirectoryObjectId => Get<Guid>("UserAzureActiveDirectoryObjectId");
            public Guid InitiatingUserAzureActiveDirectoryObjectId => Get<Guid>("InitiatingUserAzureActiveDirectoryObjectId");
            public Guid InitiatingUserApplicationId => Get<Guid>("InitiatingUserApplicationId");
            public Guid PortalsContactId => Get<Guid>("PortalsContactId");
            public bool IsPortalsClientCall => Get<bool>("IsPortalsClientCall");
            public Guid AuthenticatedUserId => Get<Guid>("AuthenticatedUserId");
            public EntityImageCollection[] PreEntityImagesCollection => Get<EntityImageCollection[]>("PreEntityImagesCollection");
            public EntityImageCollection[] PostEntityImagesCollection => Get<EntityImageCollection[]>("PostEntityImagesCollection");
            public string InitiatingUserAgent => Get<string>("InitiatingUserAgent");
            public string EnvironmentId => Get<string>("EnvironmentId");
            public Guid TenantId => Get<Guid>("TenantId");
            public bool IsApplicationUser => Get<bool>("IsApplicationUser");
        }

        #region Serialization - Core

        private static void WriteValue(object value, StringBuilder sb)
        {
            if (++_writer.Depth > MaxDepth)
            {
                _writer.Depth--;
                throw new InvalidOperationException("JSON exceeds the maximum depth of " + MaxDepth + " at " + _writer.Path + ".");
            }
            var tracked = value != null && !(value is string) && !value.GetType().IsValueType;
            var added = false;
            var preserve = _writer.PreserveTypes;
            try
            {
                if (tracked && !(added = _writer.Active.Add(value)))
                    throw new InvalidOperationException("Circular reference at " + _writer.Path + ".");
                if (!_writer.PreserveTypes && (value is IExecutionContext || (tracked && IsSdkType(value.GetType())))) _writer.PreserveTypes = true;
                WriteValueCore(value, sb);
            }
            finally
            {
                if (added) _writer.Active.Remove(value);
                _writer.PreserveTypes = preserve;
                _writer.Depth--;
            }
        }

        private static void WriteValueCore(object value, StringBuilder sb)
        {
            if (value == null) { sb.Append("null"); return; }
            if (value is string s) { WriteString(s, sb); return; }
            if (value is bool b) { sb.Append(b ? "true" : "false"); return; }

            // JSON numbers do not carry CLR types. Preserve them where SDK values are
            // boxed (attributes, parameters, query values), keeping plain JSON at the public scalar root.
            if (_writer.PreserveTypes && IsNumberType(value.GetType()) && !(value is int))
            {
                var text = value is double number64 ? number64.ToString("R", CultureInfo.InvariantCulture) :
                    value is float number32 ? number32.ToString("R", CultureInfo.InvariantCulture) : Convert.ToString(value, CultureInfo.InvariantCulture);
                WriteTyped(value.GetType().Name, text, sb);
                return;
            }
            if (value is double specialDouble && (double.IsNaN(specialDouble) || double.IsInfinity(specialDouble)))
            { WriteTyped("Double", specialDouble.ToString("R", CultureInfo.InvariantCulture), sb); return; }
            if (value is float specialSingle && (float.IsNaN(specialSingle) || float.IsInfinity(specialSingle)))
            { WriteTyped("Single", specialSingle.ToString("R", CultureInfo.InvariantCulture), sb); return; }

            if (value is int i32) { sb.Append(i32.ToString(CultureInfo.InvariantCulture)); return; }
            if (value is long i64) { sb.Append(i64.ToString(CultureInfo.InvariantCulture)); return; }
            if (value is double dbl) { sb.Append(dbl.ToString("R", CultureInfo.InvariantCulture)); return; }
            if (value is decimal dec) { sb.Append(dec.ToString(CultureInfo.InvariantCulture)); return; }
            if (value is float flt) { sb.Append(flt.ToString("R", CultureInfo.InvariantCulture)); return; }
            if (value is byte bt) { sb.Append(bt.ToString(CultureInfo.InvariantCulture)); return; }
            if (value is short sh) { sb.Append(sh.ToString(CultureInfo.InvariantCulture)); return; }

            if (value is Entity entity) { WriteEntity(entity, sb); return; }
            if (value is EntityReference er) { WriteEntityReference(er, sb); return; }
            if (value is Money money) { WriteMoney(money, sb); return; }
            if (value is OptionSetValueCollection osvc) { WriteOptionSetValueCollection(osvc, sb); return; }
            if (value is OptionSetValue osv) { WriteOptionSetValue(osv, sb); return; }
            if (value is AliasedValue av) { WriteAliasedValue(av, sb); return; }
            if (value is BooleanManagedProperty bmp) { WriteBooleanManagedProperty(bmp, sb); return; }
            if (value is EntityCollection ec) { WriteEntityCollection(ec, sb); return; }
            if (value is EntityImageCollection eic) { WriteEntityImageCollection(eic, sb); return; }
            if (value is ParameterCollection pc) { WriteParameterCollection(pc, sb); return; }
            if (value is IExecutionContext execCtx) { WriteContextObject(execCtx, sb); return; }

            if (value is DateTime dt) { WriteDateTime(dt, sb); return; }
            if (value is DateTimeOffset dto) { WriteTyped("DateTimeOffset", dto.ToString("O", CultureInfo.InvariantCulture), sb); return; }
            if (value is TimeSpan span) { WriteTyped("TimeSpan", span.ToString("c", CultureInfo.InvariantCulture), sb); return; }
            if (value is Guid guid) { WriteTyped("Guid", guid.ToString("D"), sb); return; }
            if (value is char character && _writer.PreserveTypes) { WriteTyped("Char", character.ToString(), sb); return; }
            if (value is byte[] bytes) { WriteTyped("File", Convert.ToBase64String(bytes), sb); return; }
            if (value is Enum e)
            {
                if (_writer.PreserveTypes && IsSdkType(e.GetType())) WriteSdkObject(e, sb);
                else sb.Append(Convert.ChangeType(e, Enum.GetUnderlyingType(e.GetType()), CultureInfo.InvariantCulture));
                return;
            }

            if (value is Array array && _writer.PreserveTypes && IsSafeValueType(array.GetType().GetElementType()))
            {
                if (array.Rank != 1) throw new NotSupportedException("Only one-dimensional arrays are supported at " + _writer.Path + ".");
                WriteTypedCollection("Array", array.GetType().GetElementType(), array, sb);
                return;
            }
            if (IsSdkType(value.GetType())) { WriteSdkObject(value, sb); return; }

            if (_writer.PreserveTypes && value.GetType().IsGenericType)
            {
                var definition = value.GetType().GetGenericTypeDefinition();
                if ((definition == typeof(List<>) || definition == typeof(Dictionary<,>) || definition == typeof(KeyValuePair<,>)) && IsSafeValueType(value.GetType()))
                {
                    sb.Append("{\"__type\":\"ClrCollection\",\"Type\":");
                    WriteString(ValueTypeName(value.GetType()), sb);
                    if (definition == typeof(KeyValuePair<,>))
                    {
                        WriteMember("Key", value.GetType().GetProperty("Key").GetValue(value), sb);
                        WriteMember("Value", value.GetType().GetProperty("Value").GetValue(value), sb);
                    }
                    else { sb.Append(",\"Items\":"); WriteArray((IEnumerable)value, sb); }
                    sb.Append('}');
                    return;
                }
            }

            if (value is IDictionary<string, object> dict) { WriteDictionary(dict, sb); return; }
            if (value is IDictionary<string, string> sdict) { WriteStringDictionary(sdict, sb); return; }
            if (value is IEnumerable enumerable) { WriteArray(enumerable, sb); return; }

            var valueType = value.GetType();
            if (valueType.IsClass && GetProperties(valueType).Length > 0)
            {
                WriteReflectedObject(value, sb);
                return;
            }
            WriteString(value.ToString(), sb);
        }

        private static void WriteString(string s, StringBuilder sb)
        {
            if (s == null) { sb.Append("null"); return; }
            sb.Append('"');
            var start = 0;
            for (var index = 0; index < s.Length; index++)
            {
                var c = s[index];
                if (c >= ' ' && c != '"' && c != '\\' && !char.IsSurrogate(c)) continue;
                sb.Append(s, start, index - start);
                switch (c)
                {
                    case '"': sb.Append("\\\""); break;
                    case '\\': sb.Append("\\\\"); break;
                    case '\b': sb.Append("\\b"); break;
                    case '\f': sb.Append("\\f"); break;
                    case '\n': sb.Append("\\n"); break;
                    case '\r': sb.Append("\\r"); break;
                    case '\t': sb.Append("\\t"); break;
                    default: sb.Append("\\u").Append(((int)c).ToString("x4", CultureInfo.InvariantCulture)); break;
                }
                start = index + 1;
            }
            sb.Append(s, start, s.Length - start);
            sb.Append('"');
        }

        private static void WriteTyped(string typeName, string value, StringBuilder sb)
        {
            if (_compact)
            {
                string ct;
                switch (typeName)
                {
                    case "DateTime": ct = "DT"; break;
                    case "Guid": ct = "G"; break;
                    case "File": ct = "F"; break;
                    default: ct = typeName; break;
                }
                sb.Append("{\"_t\":\""); sb.Append(ct);
            }
            else
            {
                sb.Append("{\"__type\":\""); sb.Append(typeName);
            }
            sb.Append(_compact ? "\",\"v\":" : "\",\"Value\":");
            WriteString(value, sb);
            sb.Append('}');
        }

        private static void WriteDictionary(IDictionary<string, object> dict, StringBuilder sb)
        {
            var escaped = dict.ContainsKey("_t") || dict.ContainsKey("__type");
            if (escaped) sb.Append("{\"__type\":\"Dictionary\",\"Values\":");
            sb.Append('{');
            var first = true;
            foreach (var kvp in dict)
            {
                if (!first) sb.Append(',');
                WriteString(kvp.Key, sb);
                sb.Append(':');
                WriteChild(kvp.Value, sb, kvp.Key);
                first = false;
            }
            sb.Append('}');
            if (escaped) sb.Append('}');
        }

        private static void WriteStringDictionary(IDictionary<string, string> dict, StringBuilder sb)
        {
            var escaped = dict.ContainsKey("_t") || dict.ContainsKey("__type");
            if (escaped) sb.Append("{\"__type\":\"Dictionary\",\"Values\":");
            sb.Append('{');
            var first = true;
            foreach (var kvp in dict)
            {
                if (!first) sb.Append(',');
                WriteString(kvp.Key, sb);
                sb.Append(':');
                WriteString(kvp.Value, sb);
                first = false;
            }
            sb.Append('}');
            if (escaped) sb.Append('}');
        }

        private static void WriteArray(IEnumerable enumerable, StringBuilder sb)
        {
            sb.Append('[');
            var first = true;
            var index = 0;
            foreach (var item in enumerable)
            {
                if (!first) sb.Append(',');
                WriteChild(item, sb, "[" + (index++).ToString(CultureInfo.InvariantCulture) + "]");
                first = false;
            }
            sb.Append(']');
        }

        private static void WriteReflectedObject(object value, StringBuilder sb)
        {
            var properties = new Dictionary<string, object>(StringComparer.Ordinal);
            foreach (var prop in GetProperties(value.GetType()))
            {
                properties.Add(prop.Name, ReadProperty(prop, value));
            }
            WriteDictionary(properties, sb);
        }

        #endregion

        #region Serialization - Dataverse Types

        private static void WriteEntity(Entity entity, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"E\",\"ln\":" : "{\"__type\":\"Entity\",\"LogicalName\":");
            WriteString(entity.LogicalName ?? "", sb);
            sb.Append(_compact ? ",\"id\":" : ",\"Id\":");
            WriteString(entity.Id.ToString("D"), sb);
            sb.Append(_compact ? ",\"a\":{" : ",\"Attributes\":{");
            var first = true;
            foreach (var attr in entity.Attributes)
            {
                if (!first) sb.Append(',');
                WriteString(attr.Key, sb);
                sb.Append(':');
                WriteChild(attr.Value, sb, attr.Key);
                first = false;
            }
            sb.Append('}');
            // The SDK getter always initializes an empty collection; only the count can be absent.
            if (entity.FormattedValues.Count > 0)
            {
                sb.Append(_compact ? ",\"fv\":{" : ",\"FormattedValues\":{");
                first = true;
                foreach (var fv in entity.FormattedValues)
                {
                    if (!first) sb.Append(',');
                    WriteString(fv.Key, sb);
                    sb.Append(':');
                    WriteString(fv.Value, sb);
                    first = false;
                }
                sb.Append('}');
            }
            if (entity.KeyAttributes.Count > 0) WriteMember("KeyAttributes", entity.KeyAttributes, sb);
            if (entity.RowVersion != null) WriteMember("RowVersion", entity.RowVersion, sb);
            if (entity.EntityState.HasValue) WriteMember("EntityState", (int)entity.EntityState.Value, sb);
            if (entity.RelatedEntities.Count > 0) WriteMember("RelatedEntities", entity.RelatedEntities, sb);
            WriteExtensionData(entity, sb);
            sb.Append('}');
        }

        private static void WriteEntityReference(EntityReference er, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"ER\",\"ln\":" : "{\"__type\":\"EntityReference\",\"LogicalName\":");
            WriteString(er.LogicalName ?? "", sb);
            sb.Append(_compact ? ",\"id\":" : ",\"Id\":");
            WriteString(er.Id.ToString("D"), sb);
            if (er.Name != null)
            {
                sb.Append(_compact ? ",\"n\":" : ",\"Name\":");
                WriteString(er.Name, sb);
            }
            if (er.KeyAttributes.Count > 0) WriteMember("KeyAttributes", er.KeyAttributes, sb);
            if (er.RowVersion != null) WriteMember("RowVersion", er.RowVersion, sb);
            WriteExtensionData(er, sb);
            sb.Append('}');
        }

        private static void WriteMoney(Money money, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"M\",\"v\":" : "{\"__type\":\"Money\",\"Value\":");
            sb.Append(money.Value.ToString(CultureInfo.InvariantCulture));
            WriteExtensionData(money, sb);
            sb.Append('}');
        }

        private static void WriteOptionSetValue(OptionSetValue osv, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"O\",\"v\":" : "{\"__type\":\"OptionSetValue\",\"Value\":");
            sb.Append(osv.Value.ToString(CultureInfo.InvariantCulture));
            WriteExtensionData(osv, sb);
            sb.Append('}');
        }

        private static void WriteOptionSetValueCollection(OptionSetValueCollection osvc, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"OC\",\"vs\":[" : "{\"__type\":\"OptionSetValueCollection\",\"Values\":[");
            var first = true;
            foreach (var osv in osvc)
            {
                if (!first) sb.Append(',');
                if (osv == null || osv.ExtensionData != null) WriteChild(osv, sb, "Values");
                else sb.Append(osv.Value.ToString(CultureInfo.InvariantCulture));
                first = false;
            }
            sb.Append("]}");
        }

        private static void WriteAliasedValue(AliasedValue av, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"AV\",\"eln\":" : "{\"__type\":\"AliasedValue\",\"EntityLogicalName\":");
            WriteString(av.EntityLogicalName ?? "", sb);
            sb.Append(_compact ? ",\"aln\":" : ",\"AttributeLogicalName\":");
            WriteString(av.AttributeLogicalName ?? "", sb);
            sb.Append(_compact ? ",\"v\":" : ",\"Value\":");
            WriteChild(av.Value, sb, "Value");
            WriteExtensionData(av, sb);
            sb.Append('}');
        }

        private static void WriteBooleanManagedProperty(BooleanManagedProperty bmp, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"BM\",\"v\":" : "{\"__type\":\"BooleanManagedProperty\",\"Value\":");
            sb.Append(bmp.Value ? "true" : "false");
            sb.Append(_compact ? ",\"cc\":" : ",\"CanBeChanged\":");
            sb.Append(bmp.CanBeChanged ? "true" : "false");
            if (bmp.ManagedPropertyLogicalName != null)
            {
                sb.Append(_compact ? ",\"ml\":" : ",\"ManagedPropertyLogicalName\":");
                WriteString(bmp.ManagedPropertyLogicalName, sb);
            }
            WriteExtensionData(bmp, sb);
            sb.Append('}');
        }

        private static void WriteEntityCollection(EntityCollection ec, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"EC\"" : "{\"__type\":\"EntityCollection\"");
            if (ec.EntityName != null)
            {
                sb.Append(_compact ? ",\"en\":" : ",\"EntityName\":");
                WriteString(ec.EntityName, sb);
            }
            sb.Append(_compact ? ",\"es\":[" : ",\"Entities\":[");
            var first = true;
            foreach (var entity in ec.Entities)
            {
                if (!first) sb.Append(',');
                WriteChild(entity, sb, "Entities");
                first = false;
            }
            sb.Append(']');
            WriteMember("MoreRecords", ec.MoreRecords, sb);
            WriteMember("TotalRecordCount", ec.TotalRecordCount, sb);
            WriteMember("TotalRecordCountLimitExceeded", ec.TotalRecordCountLimitExceeded, sb);
            if (ec.PagingCookie != null) WriteMember("PagingCookie", ec.PagingCookie, sb);
            if (ec.MinActiveRowVersion != null) WriteMember("MinActiveRowVersion", ec.MinActiveRowVersion, sb);
            WriteExtensionData(ec, sb);
            sb.Append('}');
        }

        private static void WriteParameterCollection(ParameterCollection pc, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"PC\",\"vs\":{" : "{\"__type\":\"ParameterCollection\",\"Values\":{");
            var first = true;
            foreach (var kvp in pc)
            {
                if (!first) sb.Append(',');
                WriteString(kvp.Key, sb);
                sb.Append(':');
                WriteChild(kvp.Value, sb, kvp.Key);
                first = false;
            }
            sb.Append("}}");
        }

        private static void WriteEntityImageCollection(EntityImageCollection eic, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"IC\",\"vs\":{" : "{\"__type\":\"EntityImageCollection\",\"Values\":{");
            var first = true;
            foreach (var kvp in eic)
            {
                if (!first) sb.Append(',');
                WriteString(kvp.Key, sb);
                sb.Append(':');
                WriteChild(kvp.Value, sb, kvp.Key);
                first = false;
            }
            sb.Append("}}");
        }

        private static readonly Dictionary<string, string> FullToCompactContextKey = new Dictionary<string, string>(StringComparer.Ordinal)
        {
            {"BusinessUnitId", "bu"}, {"CorrelationId", "ci"}, {"Depth", "dp"},
            {"InitiatingUserId", "iu"}, {"InputParameters", "ip"},
            {"IsExecutingOffline", "xo"}, {"IsInTransaction", "xt"},
            {"IsOfflinePlayback", "xp"}, {"IsolationMode", "im"},
            {"MessageName", "mn"}, {"Mode", "md"}, {"OperationCreatedOn", "oc"},
            {"OperationId", "oi"}, {"OrganizationId", "og"}, {"OrganizationName", "on"},
            {"OutputParameters", "ou"}, {"OwningExtension", "oe"},
            {"PostEntityImages", "po"}, {"PreEntityImages", "pr"},
            {"PrimaryEntityId", "pi"}, {"PrimaryEntityName", "pn"},
            {"RequestId", "ri"}, {"SecondaryEntityName", "sn"},
            {"SharedVariables", "sv"}, {"Stage", "st"}, {"UserId", "ui"},
            {"ParentContext", "pc"},
            // IPluginExecutionContext2–7 properties
            {"UserAzureActiveDirectoryObjectId", "ua"}, {"InitiatingUserAzureActiveDirectoryObjectId", "ia"},
            {"InitiatingUserApplicationId", "iap"}, {"PortalsContactId", "pci"},
            {"IsPortalsClientCall", "xpc"}, {"AuthenticatedUserId", "au"},
            {"InitiatingUserAgent", "iag"},
            {"EnvironmentId", "ei"}, {"TenantId", "ti"}, {"IsApplicationUser", "xau"},
            {"PreEntityImagesCollection", "prc"}, {"PostEntityImagesCollection", "poc"}
        };

        private static string GetCompactContextKey(string propertyName)
        {
            return FullToCompactContextKey.TryGetValue(propertyName, out var compact) ? compact : propertyName;
        }

        private static void WriteContextObject(object context, StringBuilder sb)
        {
            var values = new Dictionary<string, object>(StringComparer.Ordinal);
            if (context is ExecutionContextSnapshot snapshot)
            {
                foreach (var item in snapshot.Properties) values.Add(item.Key, item.Value);
            }
            else
            {
                if (context is RemoteExecutionContext remote && RemoteProperties.TryGetValue(remote, out var saved))
                    foreach (var item in saved) values[item.Key] = item.Value;
                foreach (var prop in GetContextProperties(context.GetType()))
                {
                    if (prop.Name == "ExtensionData") continue;
                    values[prop.Name] = ReadProperty(prop, context);
                }
                if (context is IExtensibleDataObject extensible && extensible.ExtensionData != null)
                    values["ExtensionData"] = WriteUnknownContextExtensionData(context);
            }

            sb.Append(_compact ? "{\"_t\":\"RC\"" : "{\"__type\":\"RemoteExecutionContext\"");
            sb.Append(",\"SnapshotVersion\":1");
            var extras = new Dictionary<string, object>(StringComparer.Ordinal);
            foreach (var item in values)
            {
                if (item.Key == "__type" || item.Key == "_t" || item.Key == "SnapshotVersion") continue;
                if (_writer.OmitParentContext && item.Key == "ParentContext") continue;
                if (!KnownContextProperties.Contains(item.Key) && item.Key != "ExtensionData")
                {
                    extras.Add(item.Key, item.Value);
                    continue;
                }
                sb.Append(',');
                WriteString(_compact ? GetCompactContextKey(item.Key) : item.Key, sb);
                sb.Append(':');
                // The context contract supplies scalar types, unlike boxed parameter values.
                if (KnownContextProperties.Contains(item.Key) && item.Value is Guid guid)
                    WriteString(guid.ToString("D"), sb);
                else if (item.Key == "OperationCreatedOn" && item.Value is DateTime date && date.Kind == DateTimeKind.Utc)
                    WriteString(date.ToString("O", CultureInfo.InvariantCulture), sb);
                else if (item.Key == "ExtensionData" && item.Value is string extensionJson)
                    WriteChild(EncodeExtensionData(extensionJson), sb, item.Key);
                else WriteChild(item.Value, sb, item.Key);
            }
            if (extras.Count > 0)
            {
                sb.Append(",\"AdditionalProperties\":");
                WriteDictionary(extras, sb);
            }
            sb.Append('}');
        }

        #endregion

        #region Parsing

        private static object ParseValue(char[] json, ref int index, int depth)
        {
            EatWhitespace(json, ref index);
            if (depth > MaxDepth) throw JsonError(index, "Maximum depth exceeded");
            if (index >= json.Length) throw JsonError(index, "Expected a value");
            switch (json[index])
            {
                case '"': return ParseString(json, ref index);
                case '{': return ParseObject(json, ref index, depth + 1);
                case '[': return ParseArray(json, ref index, depth + 1);
                case 't': if (MatchLiteral(json, index, "true")) { index += 4; return true; } break;
                case 'f': if (MatchLiteral(json, index, "false")) { index += 5; return false; } break;
                case 'n': if (MatchLiteral(json, index, "null")) { index += 4; return null; } break;
                default:
                    if (json[index] == '-' || IsDigit(json[index])) return ParseNumber(json, ref index);
                    break;
            }
            throw JsonError(index, "Unexpected token");
        }

        private static FormatException JsonError(int index, string message)
        {
            return new FormatException(message + " at JSON index " + index.ToString(CultureInfo.InvariantCulture) + ".");
        }

        private static bool MatchLiteral(char[] json, int index, string literal)
        {
            if (index + literal.Length > json.Length) return false;
            for (var i = 0; i < literal.Length; i++) if (json[index + i] != literal[i]) return false;
            return true;
        }

        private static string ParseString(char[] json, ref int index)
        {
            if (index >= json.Length || json[index] != '"') throw JsonError(index, "Expected a quoted string");
            index++;
            var sb = new StringBuilder();
            while (index < json.Length)
            {
                var c = json[index++];
                if (c == '"') return sb.ToString();
                if (c < ' ') throw JsonError(index - 1, "Unescaped control character");
                if (c != '\\') { sb.Append(c); continue; }
                if (index >= json.Length) throw JsonError(index, "Incomplete escape sequence");
                switch (json[index++])
                {
                    case '"': sb.Append('"'); break;
                    case '\\': sb.Append('\\'); break;
                    case '/': sb.Append('/'); break;
                    case 'b': sb.Append('\b'); break;
                    case 'f': sb.Append('\f'); break;
                    case 'n': sb.Append('\n'); break;
                    case 'r': sb.Append('\r'); break;
                    case 't': sb.Append('\t'); break;
                    case 'u':
                        var code = 0;
                        for (var i = 0; i < 4; i++)
                        {
                            if (index >= json.Length) throw JsonError(index, "Incomplete Unicode escape");
                            var digit = json[index++];
                            var hex = digit >= '0' && digit <= '9' ? digit - '0' :
                                digit >= 'a' && digit <= 'f' ? digit - 'a' + 10 :
                                digit >= 'A' && digit <= 'F' ? digit - 'A' + 10 : -1;
                            if (hex < 0) throw JsonError(index - 1, "Invalid Unicode escape");
                            code = code * 16 + hex;
                        }
                        // Preserve UTF-16 code units, including escaped lone surrogates.
                        sb.Append((char)code);
                        break;
                    default: throw JsonError(index - 1, "Invalid escape sequence");
                }
            }
            throw JsonError(index, "Unterminated string");
        }

        private static Dictionary<string, object> ParseObject(char[] json, ref int index, int depth)
        {
            var dict = new Dictionary<string, object>(StringComparer.Ordinal);
            index++;
            EatWhitespace(json, ref index);
            if (index < json.Length && json[index] == '}') { index++; return dict; }
            while (true)
            {
                var key = ParseString(json, ref index);
                EatWhitespace(json, ref index);
                if (index >= json.Length || json[index++] != ':') throw JsonError(index, "Expected ':'");
                dict[key] = ParseValue(json, ref index, depth);
                EatWhitespace(json, ref index);
                if (index >= json.Length) throw JsonError(index, "Unterminated object");
                if (json[index] == '}') { index++; return dict; }
                if (json[index++] != ',') throw JsonError(index - 1, "Expected ',' or '}'");
                EatWhitespace(json, ref index);
            }
        }

        private static List<object> ParseArray(char[] json, ref int index, int depth)
        {
            var list = new List<object>();
            index++;
            EatWhitespace(json, ref index);
            if (index < json.Length && json[index] == ']') { index++; return list; }
            while (true)
            {
                list.Add(ParseValue(json, ref index, depth));
                EatWhitespace(json, ref index);
                if (index >= json.Length) throw JsonError(index, "Unterminated array");
                if (json[index] == ']') { index++; return list; }
                if (json[index++] != ',') throw JsonError(index - 1, "Expected ',' or ']'");
            }
        }

        private static bool IsDigit(char c) { return c >= '0' && c <= '9'; }

        private static object ParseNumber(char[] json, ref int index)
        {
            var start = index;
            if (json[index] == '-') index++;
            if (index >= json.Length || !IsDigit(json[index])) throw JsonError(index, "Expected a digit");
            if (json[index] == '0') index++;
            else while (index < json.Length && IsDigit(json[index])) index++;
            if (index < json.Length && json[index] == '.')
            {
                index++;
                if (index >= json.Length || !IsDigit(json[index])) throw JsonError(index, "Expected fractional digits");
                while (index < json.Length && IsDigit(json[index])) index++;
            }
            if (index < json.Length && (json[index] == 'e' || json[index] == 'E'))
            {
                index++;
                if (index < json.Length && (json[index] == '+' || json[index] == '-')) index++;
                if (index >= json.Length || !IsDigit(json[index])) throw JsonError(index, "Expected exponent digits");
                while (index < json.Length && IsDigit(json[index])) index++;
            }
            // Retain the original token until the destination type is known (Money/decimal).
            return new JsonNumber(new string(json, start, index - start));
        }

        private static void EatWhitespace(char[] json, ref int index)
        {
            while (index < json.Length)
            {
                var c = json[index];
                if (c != ' ' && c != '\t' && c != '\n' && c != '\r') break;
                index++;
            }
        }

        #endregion

        #region Type Reconstruction

        private static object DecodeValue(object raw, Type targetType, bool context7)
        {
            if (raw is JsonNumber number) return number.ToValue(targetType);
            if (raw is List<object> rawList)
            {
                var list = new List<object>(rawList.Count);
                var elementType = GetElementType(targetType);
                foreach (var item in rawList) list.Add(DecodeValue(item, elementType, context7));
                return targetType == null || targetType == typeof(object) ? list : CoerceValue(list, targetType);
            }
            if (!(raw is Dictionary<string, object> source)) return raw;
            if (source.TryGetValue("_t", out var shortType) && shortType is string shortName && CompactToFullType.ContainsKey(shortName))
                source = ExpandCompactDict(source);
            var typeName = source.TryGetValue("__type", out var typeValue) ? typeValue as string : null;
            if (typeName == "RemoteExecutionContext" && source.TryGetValue("SnapshotVersion", out var version) &&
                (!(version is JsonNumber versionNumber) || versionNumber.Text != "1"))
                throw new NotSupportedException("Unsupported DevKit context snapshot version.");
            if (typeName == "Dictionary")
                return DecodeDictionary((Dictionary<string, object>)source["Values"], targetType, context7);

            Type contract = null;
            if (typeName == "RemoteExecutionContext") contract = typeof(ExecutionContextSnapshot);
            if (typeName == "SdkObject") contract = ResolveSdkObjectType(source);
            var dict = new Dictionary<string, object>(StringComparer.Ordinal);
            foreach (var item in source)
            {
                if (typeName == "SdkObject" && item.Key == "Properties")
                    dict[item.Key] = DecodeDictionary((Dictionary<string, object>)item.Value, contract, context7);
                else if ((typeName == "Entity" && (item.Key == "Attributes" || item.Key == "FormattedValues")) ||
                    ((typeName == "ParameterCollection" || typeName == "EntityImageCollection") && item.Key == "Values"))
                    dict[item.Key] = item.Value == null ? null : DecodeDictionary((Dictionary<string, object>)item.Value, null, context7);
                else
                {
                    var hint = GetMemberType(contract ?? (typeName == null ? targetType : null), item.Key);
                    if (typeName == "Money" && item.Key == "Value") hint = typeof(decimal);
                    if (typeName == "RemoteExecutionContext" && item.Key == "ParentContext") hint = null;
                    dict[item.Key] = DecodeValue(item.Value, hint, context7);
                }
            }
            if (typeName == "RemoteExecutionContext" && dict.TryGetValue("AdditionalProperties", out var extra))
            {
                if (!(extra is Dictionary<string, object> extras)) throw new FormatException("Expected AdditionalProperties to be a dictionary.");
                dict.Remove("AdditionalProperties");
                foreach (var item in extras)
                {
                    if (dict.ContainsKey(item.Key)) throw new FormatException("Duplicate context property '" + item.Key + "'.");
                    dict.Add(item.Key, item.Value);
                }
            }
            if (typeName == "RemoteExecutionContext" && context7) return new ExecutionContextSnapshot(dict);
            if (typeName != null) return ReconstructTypedObject(typeName, dict);
            return dict;
        }

        private static Dictionary<string, object> DecodeDictionary(Dictionary<string, object> raw, Type targetType, bool context7)
        {
            var result = new Dictionary<string, object>(StringComparer.Ordinal);
            foreach (var item in raw)
                result.Add(item.Key, DecodeValue(item.Value, GetMemberType(targetType, item.Key), context7));
            return result;
        }

        private static Type GetMemberType(Type type, string name)
        {
            if (type == null || type == typeof(object)) return null;
            if (type.IsGenericType)
            {
                var definition = type.GetGenericTypeDefinition();
                if (definition == typeof(Dictionary<,>) || definition == typeof(IDictionary<,>) || definition == typeof(IReadOnlyDictionary<,>))
                    return type.GetGenericArguments()[1];
            }
            foreach (var prop in GetProperties(type))
                if (string.Equals(prop.Name, name, StringComparison.OrdinalIgnoreCase)) return prop.PropertyType;
            return null;
        }

        private static object ReconstructTypedObject(string typeName, Dictionary<string, object> dict)
        {
            switch (typeName)
            {
                case "Byte": case "SByte": case "Int16": case "UInt16": case "Int32": case "UInt32":
                case "Int64": case "UInt64": case "Single": case "Double": case "Decimal":
                    return Convert.ChangeType(dict["Value"], ResolveValueType(typeName), CultureInfo.InvariantCulture);
                case "Array":
                    return CoerceValue(dict["Values"], ResolveValueType((string)dict["ElementType"]).MakeArrayType());
                case "SdkObject": return ReadSdkObject(dict);
                case "ClrCollection":
                    var collectionType = ResolveValueType((string)dict["Type"]);
                    if (!collectionType.IsGenericType) throw new FormatException("Expected a generic collection type.");
                    if (collectionType.GetGenericTypeDefinition() == typeof(KeyValuePair<,>))
                    {
                        var arguments = collectionType.GetGenericArguments();
                        return Activator.CreateInstance(collectionType, CoerceValue(dict["Key"], arguments[0]), CoerceValue(dict["Value"], arguments[1]));
                    }
                    var collection = Activator.CreateInstance(collectionType);
                    PopulateCollection(collection, (IEnumerable)dict["Items"]);
                    return collection;
                case "Entity": return ReconstructEntity(dict);
                case "EntityReference": return ReconstructEntityReference(dict);
                case "Money":
                    var money = new Money(Convert.ToDecimal(dict["Value"], CultureInfo.InvariantCulture));
                    RestoreExtensionData(money, dict); return money;
                case "OptionSetValue":
                    var option = new OptionSetValue(Convert.ToInt32(dict["Value"], CultureInfo.InvariantCulture));
                    RestoreExtensionData(option, dict); return option;
                case "OptionSetValueCollection": return ReconstructOptionSetValueCollection(dict);
                case "AliasedValue": return ReconstructAliasedValue(dict);
                case "BooleanManagedProperty": return ReconstructBooleanManagedProperty(dict);
                case "EntityCollection": return ReconstructEntityCollection(dict);
                case "ParameterCollection": return ReconstructParameterCollection(dict);
                case "EntityImageCollection": return ReconstructEntityImageCollection(dict);
                case "RemoteExecutionContext": return ReconstructRemoteExecutionContext(dict);
                case "DateTime":
                    if (dict.TryGetValue("Ticks", out var ticks))
                        return new DateTime(Convert.ToInt64(ticks, CultureInfo.InvariantCulture), (DateTimeKind)GetInt(dict, "Kind"));
                    return DateTime.ParseExact((string)dict["Value"], DateTimeFormats, CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal);
                case "DateTimeOffset": return DateTimeOffset.ParseExact((string)dict["Value"], "O", CultureInfo.InvariantCulture);
                case "TimeSpan": return TimeSpan.ParseExact((string)dict["Value"], "c", CultureInfo.InvariantCulture);
                case "Char": return Convert.ToChar(dict["Value"], CultureInfo.InvariantCulture);
                case "Guid": return Guid.Parse((string)dict["Value"]);
                case "File": return Convert.FromBase64String((string)dict["Value"]);
                default: return dict;
            }
        }

        private static Entity ReconstructEntity(Dictionary<string, object> dict)
        {
            var entity = new Entity(GetString(dict, "LogicalName", ""));
            if (dict.TryGetValue("Id", out var id)) entity.Id = Guid.Parse((string)id);
            if (dict.TryGetValue("Attributes", out var attrs) && attrs is Dictionary<string, object> attrDict)
                foreach (var kvp in attrDict) entity[kvp.Key] = kvp.Value;
            if (dict.TryGetValue("FormattedValues", out var fv) && fv is Dictionary<string, object> fvDict)
                foreach (var kvp in fvDict) entity.FormattedValues[kvp.Key] = (string)kvp.Value;
            if (dict.TryGetValue("KeyAttributes", out var keys)) CopyKeyAttributes(entity.KeyAttributes, keys);
            if (dict.TryGetValue("RowVersion", out var version)) entity.RowVersion = (string)version;
            if (dict.TryGetValue("EntityState", out var state) && state != null) entity.EntityState = (EntityState)Convert.ToInt32(state, CultureInfo.InvariantCulture);
            if (dict.TryGetValue("RelatedEntities", out var related) && related is RelatedEntityCollection relatedEntities)
                foreach (var pair in relatedEntities) entity.RelatedEntities.Add(pair.Key, pair.Value);
            RestoreExtensionData(entity, dict);
            return entity;
        }

        private static EntityReference ReconstructEntityReference(Dictionary<string, object> dict)
        {
            var er = new EntityReference
            {
                LogicalName = GetString(dict, "LogicalName", ""),
                Id = dict.TryGetValue("Id", out var id) ? Guid.Parse((string)id) : Guid.Empty
            };
            if (dict.TryGetValue("Name", out var name) && name is string n) 
                er.Name = n;
            if (dict.TryGetValue("KeyAttributes", out var keys)) CopyKeyAttributes(er.KeyAttributes, keys);
            if (dict.TryGetValue("RowVersion", out var version)) er.RowVersion = (string)version;
            RestoreExtensionData(er, dict);
            if (string.IsNullOrWhiteSpace(er.Name)) er.Name = "(No Name)";
            return er;
        }

        private static OptionSetValueCollection ReconstructOptionSetValueCollection(Dictionary<string, object> dict)
        {
            var osvc = new OptionSetValueCollection();
            if (dict.TryGetValue("Values", out var values) && values is List<object> list)
                foreach (var v in list) osvc.Add(v == null ? null : v is OptionSetValue option ? option : new OptionSetValue(Convert.ToInt32(v, CultureInfo.InvariantCulture)));
            return osvc;
        }

        private static AliasedValue ReconstructAliasedValue(Dictionary<string, object> dict)
        {
            var value = new AliasedValue(
                GetString(dict, "EntityLogicalName", ""),
                GetString(dict, "AttributeLogicalName", ""),
                dict.TryGetValue("Value", out var v) ? v : null);
            RestoreExtensionData(value, dict);
            return value;
        }

        private static BooleanManagedProperty ReconstructBooleanManagedProperty(Dictionary<string, object> dict)
        {
            var bmp = new BooleanManagedProperty(dict.TryGetValue("Value", out var v) && v is bool bv && bv);
            if (dict.TryGetValue("CanBeChanged", out var cc) && cc is bool canChange) bmp.CanBeChanged = canChange;
            if (dict.TryGetValue("ManagedPropertyLogicalName", out var mpln) && mpln is string s)
            {
                // This data member has no public setter; use the SDK's public serialization
                // contract instead of guessing its private backing-field name.
                bmp = (BooleanManagedProperty)ReadNativeJson(Serialize(new Dictionary<string, object>
                {
                    { "Value", bmp.Value }, { "CanBeChanged", bmp.CanBeChanged }, { "ManagedPropertyLogicalName", s }
                }), typeof(BooleanManagedProperty));
            }
            RestoreExtensionData(bmp, dict);
            return bmp;
        }

        private static EntityCollection ReconstructEntityCollection(Dictionary<string, object> dict)
        {
            var ec = new EntityCollection();
            if (dict.TryGetValue("EntityName", out var en) && en is string name) ec.EntityName = name;
            if (dict.TryGetValue("Entities", out var entities) && entities is List<object> list)
                foreach (var item in list)
                {
                    if (item != null && !(item is Entity)) throw new FormatException("Expected an Entity in EntityCollection.");
                    ec.Entities.Add((Entity)item);
                }
            ec.MoreRecords = GetBool(dict, "MoreRecords");
            if (dict.ContainsKey("TotalRecordCount")) ec.TotalRecordCount = GetInt(dict, "TotalRecordCount");
            ec.TotalRecordCountLimitExceeded = GetBool(dict, "TotalRecordCountLimitExceeded");
            ec.PagingCookie = GetString(dict, "PagingCookie", null);
            ec.MinActiveRowVersion = GetString(dict, "MinActiveRowVersion", null);
            RestoreExtensionData(ec, dict);
            return ec;
        }

        private static ParameterCollection ReconstructParameterCollection(Dictionary<string, object> dict)
        {
            var pc = new ParameterCollection();
            if (dict.TryGetValue("Values", out var values) && values is Dictionary<string, object> valDict)
                foreach (var kvp in valDict) pc[kvp.Key] = kvp.Value;
            return pc;
        }

        private static EntityImageCollection ReconstructEntityImageCollection(Dictionary<string, object> dict)
        {
            var eic = new EntityImageCollection();
            if (dict.TryGetValue("Values", out var values) && values is Dictionary<string, object> valDict)
                foreach (var kvp in valDict)
                {
                    if (kvp.Value != null && !(kvp.Value is Entity)) throw new FormatException("Expected an Entity image.");
                    eic[kvp.Key] = (Entity)kvp.Value;
                }
            return eic;
        }

        private static RemoteExecutionContext ReconstructRemoteExecutionContext(Dictionary<string, object> dict)
        {
            var ctx = new RemoteExecutionContext();
            foreach (var prop in GetProperties(typeof(RemoteExecutionContext)))
            {
                if (prop.Name == "ExtensionData" || !dict.TryGetValue(prop.Name, out var value)) continue;
                if (prop.CanWrite) prop.SetValue(ctx, CoerceValue(value, prop.PropertyType));
                else if (value is IEnumerable items && !(value is string)) PopulateCollection(prop.GetValue(ctx), items);
            }
            RestoreExtensionData(ctx, dict);
            var saved = new Dictionary<string, object>(dict, StringComparer.Ordinal);
            saved.Remove("__type");
            RemoteProperties.Add(ctx, saved);
            return ctx;
        }

        #endregion

        #region Compact Format Expansion

        private static readonly Dictionary<string, string> CompactToFullKey = new Dictionary<string, string>(StringComparer.Ordinal)
        {
            {"_t", "__type"}, {"id", "Id"},
            {"ln", "LogicalName"}, {"a", "Attributes"}, {"fv", "FormattedValues"}, {"n", "Name"},
            {"v", "Value"}, {"vs", "Values"},
            {"cc", "CanBeChanged"}, {"ml", "ManagedPropertyLogicalName"},
            {"eln", "EntityLogicalName"}, {"aln", "AttributeLogicalName"},
            {"en", "EntityName"}, {"es", "Entities"},
            {"bu", "BusinessUnitId"}, {"ci", "CorrelationId"}, {"dp", "Depth"},
            {"iu", "InitiatingUserId"}, {"ip", "InputParameters"},
            {"xo", "IsExecutingOffline"}, {"xt", "IsInTransaction"},
            {"xp", "IsOfflinePlayback"}, {"im", "IsolationMode"},
            {"mn", "MessageName"}, {"md", "Mode"}, {"oc", "OperationCreatedOn"},
            {"oi", "OperationId"}, {"og", "OrganizationId"}, {"on", "OrganizationName"},
            {"ou", "OutputParameters"}, {"oe", "OwningExtension"},
            {"po", "PostEntityImages"}, {"pr", "PreEntityImages"},
            {"pi", "PrimaryEntityId"}, {"pn", "PrimaryEntityName"},
            {"ri", "RequestId"}, {"sn", "SecondaryEntityName"},
            {"sv", "SharedVariables"}, {"st", "Stage"}, {"ui", "UserId"},
            {"pc", "ParentContext"},
            // IPluginExecutionContext2–7 properties
            {"ua", "UserAzureActiveDirectoryObjectId"}, {"ia", "InitiatingUserAzureActiveDirectoryObjectId"},
            {"iap", "InitiatingUserApplicationId"}, {"pci", "PortalsContactId"},
            {"xpc", "IsPortalsClientCall"}, {"au", "AuthenticatedUserId"},
            {"iag", "InitiatingUserAgent"},
            {"ei", "EnvironmentId"}, {"ti", "TenantId"}, {"xau", "IsApplicationUser"},
            {"prc", "PreEntityImagesCollection"}, {"poc", "PostEntityImagesCollection"}
        };

        private static readonly Dictionary<string, string> CompactToFullType = new Dictionary<string, string>(StringComparer.Ordinal)
        {
            {"E", "Entity"}, {"ER", "EntityReference"}, {"M", "Money"},
            {"O", "OptionSetValue"}, {"OC", "OptionSetValueCollection"},
            {"AV", "AliasedValue"}, {"BM", "BooleanManagedProperty"},
            {"EC", "EntityCollection"}, {"PC", "ParameterCollection"},
            {"IC", "EntityImageCollection"}, {"RC", "RemoteExecutionContext"},
            {"DT", "DateTime"}, {"G", "Guid"}, {"F", "File"},
            {"Byte", "Byte"}, {"SByte", "SByte"}, {"Int16", "Int16"}, {"UInt16", "UInt16"},
            {"Int32", "Int32"}, {"UInt32", "UInt32"}, {"Int64", "Int64"}, {"UInt64", "UInt64"},
            {"Single", "Single"}, {"Double", "Double"}, {"Decimal", "Decimal"},
            {"DateTimeOffset", "DateTimeOffset"}, {"TimeSpan", "TimeSpan"}, {"Char", "Char"}
        };

        private static Dictionary<string, object> ExpandCompactDict(Dictionary<string, object> dict)
        {
            var expanded = new Dictionary<string, object>(dict.Count);
            foreach (var kvp in dict)
            {
                var key = CompactToFullKey.TryGetValue(kvp.Key, out var fullKey) ? fullKey : kvp.Key;
                var value = kvp.Value;
                if (key == "__type" && value is string tn && CompactToFullType.TryGetValue(tn, out var fullType))
                    value = fullType;
                expanded[key] = value;
            }
            return expanded;
        }

        #endregion

        #region Helpers

        private sealed class WriterState
        {
            internal bool Compact;
            internal bool OmitParentContext;
            internal bool PreserveTypes;
            internal int Depth;
            internal string Path = "$";
            internal readonly HashSet<object> Active = new HashSet<object>(ReferenceComparer.Instance);
        }

        private sealed class ReferenceComparer : IEqualityComparer<object>
        {
            internal static readonly ReferenceComparer Instance = new ReferenceComparer();
            public new bool Equals(object x, object y) { return ReferenceEquals(x, y); }
            public int GetHashCode(object obj) { return RuntimeHelpers.GetHashCode(obj); }
        }

        private sealed class JsonNumber
        {
            internal readonly string Text;
            internal JsonNumber(string text) { Text = text; }
            internal object ToValue(Type targetType)
            {
                targetType = Nullable.GetUnderlyingType(targetType ?? typeof(object)) ?? targetType;
                if (targetType == typeof(decimal)) return decimal.Parse(Text, NumberStyles.Float, CultureInfo.InvariantCulture);
                if (targetType != null && IsNumberType(targetType))
                {
                    if (targetType != typeof(double) && targetType != typeof(float) && Text.IndexOfAny(new[] { '.', 'e', 'E' }) >= 0)
                        return Convert.ChangeType(decimal.Parse(Text, NumberStyles.Float, CultureInfo.InvariantCulture), targetType, CultureInfo.InvariantCulture);
                    return Convert.ChangeType(Text, targetType, CultureInfo.InvariantCulture);
                }
                if (targetType == typeof(string)) return Text;
                if (Text.IndexOfAny(new[] { '.', 'e', 'E' }) >= 0)
                {
                    var number = double.Parse(Text, NumberStyles.Float, CultureInfo.InvariantCulture);
                    if (double.IsInfinity(number)) throw new FormatException("JSON number is outside the Double range.");
                    return number;
                }
                if (long.TryParse(Text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var integer))
                    return integer >= int.MinValue && integer <= int.MaxValue ? (object)(int)integer : integer;
                return decimal.Parse(Text, NumberStyles.Integer, CultureInfo.InvariantCulture);
            }
        }

        private static PropertyInfo[] GetProperties(Type type)
        {
            return PropertyCache.GetOrAdd(type, t =>
            {
                var result = new List<PropertyInfo>();
                foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance))
                    if (prop.GetGetMethod() != null && prop.GetIndexParameters().Length == 0) result.Add(prop);
                return result.ToArray();
            });
        }

        private static PropertyInfo[] GetContextProperties(Type type)
        {
            return ContextPropertyCache.GetOrAdd(type, t =>
            {
                var properties = new Dictionary<string, PropertyInfo>(StringComparer.Ordinal);
                foreach (var contract in t.GetInterfaces())
                    if (typeof(IExecutionContext).IsAssignableFrom(contract))
                        foreach (var prop in GetProperties(contract)) properties[prop.Name] = prop;
                // Contract access works for explicit implementations and runtime proxies.
                foreach (var prop in GetProperties(t))
                    if (!properties.ContainsKey(prop.Name)) properties.Add(prop.Name, prop);
                return new List<PropertyInfo>(properties.Values).ToArray();
            });
        }

        private static object ReadProperty(PropertyInfo property, object value)
        {
            try { return property.GetValue(value); }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Cannot read " + _writer.Path + "." + property.Name + ".",
                    ex is TargetInvocationException invocation ? invocation.InnerException : ex);
            }
        }

        private static void WriteChild(object value, StringBuilder sb, string name)
        {
            var previous = _writer.Path;
            _writer.Path = previous + (name.StartsWith("[", StringComparison.Ordinal) ? name : "." + name);
            try { WriteValue(value, sb); }
            finally { _writer.Path = previous; }
        }

        private static void WriteMember(string name, object value, StringBuilder sb)
        {
            sb.Append(',');
            WriteString(name, sb);
            sb.Append(':');
            WriteChild(value, sb, name);
        }

        private static void WriteDateTime(DateTime value, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"DT\",\"v\":" : "{\"__type\":\"DateTime\",\"Value\":");
            // Never use ToUniversalTime on Unspecified values. Ticks also preserve local
            // wall time across machines in different time zones.
            WriteString(value.ToString(value.Kind == DateTimeKind.Utc && value.Ticks % TimeSpan.TicksPerMillisecond == 0 ? DateTimeFormats[0] : "O", CultureInfo.InvariantCulture), sb);
            sb.Append(",\"Ticks\":");
            WriteString(value.Ticks.ToString(CultureInfo.InvariantCulture), sb);
            sb.Append(",\"Kind\":").Append(((int)value.Kind).ToString(CultureInfo.InvariantCulture)).Append('}');
        }

        private static bool IsNumberType(Type type)
        {
            if (type == null || type.IsEnum) return false;
            switch (Type.GetTypeCode(type))
            {
                case TypeCode.Byte: case TypeCode.SByte: case TypeCode.Int16: case TypeCode.UInt16:
                case TypeCode.Int32: case TypeCode.UInt32: case TypeCode.Int64: case TypeCode.UInt64:
                case TypeCode.Single: case TypeCode.Double: case TypeCode.Decimal: return true;
                default: return false;
            }
        }

        private static bool IsSdkType(Type type)
        {
            if (type == null || !(type.IsPublic || type.IsNestedPublic)) return false;
            var assembly = type.Assembly;
            if (assembly != typeof(Entity).Assembly)
            {
                if (assembly.GetName().Name != "Microsoft.Crm.Sdk.Proxy" ||
                    BitConverter.ToString(assembly.GetName().GetPublicKeyToken()) != "31-BF-38-56-AD-36-4E-35") return false;
            }
            return type.IsEnum || typeof(IEnumerable).IsAssignableFrom(type) ||
                Attribute.IsDefined(type, typeof(DataContractAttribute), true);
        }

        private static bool IsSafeValueType(Type type)
        {
            if (type.IsGenericType)
            {
                var definition = type.GetGenericTypeDefinition();
                if (definition != typeof(List<>) && definition != typeof(Dictionary<,>) && definition != typeof(KeyValuePair<,>) &&
                    definition != typeof(Nullable<>) && !IsSdkType(type)) return false;
                foreach (var argument in type.GetGenericArguments()) if (!IsSafeValueType(argument)) return false;
                return true;
            }
            return type == typeof(object) || type == typeof(string) || type == typeof(bool) || type == typeof(char) ||
                type == typeof(Guid) || type == typeof(DateTime) || type == typeof(DateTimeOffset) ||
                type == typeof(TimeSpan) || IsNumberType(type) || IsSdkType(type) ||
                (type.IsArray && IsSafeValueType(type.GetElementType()));
        }

        private static Type ResolveValueType(string name)
        {
            if (string.IsNullOrEmpty(name) || name.Length > 1024 || name.IndexOf(',') >= 0 || name.IndexOf("[[", StringComparison.Ordinal) >= 0)
                throw new NotSupportedException("Invalid JSON type name.");
            if (name.EndsWith("[]", StringComparison.Ordinal))
                return ResolveValueType(name.Substring(0, name.Length - 2)).MakeArrayType();
            var opening = name.IndexOf('<');
            if (opening >= 0)
            {
                if (!name.EndsWith(">", StringComparison.Ordinal)) throw new NotSupportedException("Invalid generic type name.");
                var definition = name.Substring(0, opening);
                Type generic;
                switch (definition)
                {
                    case "List": generic = typeof(List<>); break;
                    case "Dictionary": generic = typeof(Dictionary<,>); break;
                    case "KeyValuePair": generic = typeof(KeyValuePair<,>); break;
                    case "Nullable": generic = typeof(Nullable<>); break;
                    default: throw new NotSupportedException("Unsupported generic type " + definition + ".");
                }
                var arguments = new List<Type>();
                var start = opening + 1;
                var depth = 0;
                for (var i = start; i < name.Length - 1; i++)
                {
                    if (name[i] == '<') depth++;
                    else if (name[i] == '>') depth--;
                    else if (name[i] == ';' && depth == 0)
                    { arguments.Add(ResolveValueType(name.Substring(start, i - start))); start = i + 1; }
                }
                arguments.Add(ResolveValueType(name.Substring(start, name.Length - 1 - start)));
                return generic.MakeGenericType(arguments.ToArray());
            }
            foreach (var type in new[] { typeof(object), typeof(string), typeof(bool), typeof(char), typeof(Guid),
                typeof(DateTime), typeof(DateTimeOffset), typeof(TimeSpan), typeof(byte), typeof(sbyte), typeof(short),
                typeof(ushort), typeof(int), typeof(uint), typeof(long), typeof(ulong), typeof(float), typeof(double), typeof(decimal) })
                if (type.FullName == name || type.Name == name) return type;
            // Never load an assembly or invoke arbitrary CLR types named by JSON.
            foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                if (assembly != typeof(Entity).Assembly && assembly.GetName().Name != "Microsoft.Crm.Sdk.Proxy") continue;
                var type = assembly.GetType(name ?? "", false);
                if (IsSdkType(type)) return type;
            }
            throw new NotSupportedException("Unsupported JSON type '" + name + "'.");
        }

        private static string ValueTypeName(Type type)
        {
            if (type.IsArray) return ValueTypeName(type.GetElementType()) + "[]";
            if (!type.IsGenericType) return type.FullName;
            var definition = type.GetGenericTypeDefinition();
            var name = definition == typeof(List<>) ? "List" : definition == typeof(Dictionary<,>) ? "Dictionary" :
                definition == typeof(KeyValuePair<,>) ? "KeyValuePair" : definition == typeof(Nullable<>) ? "Nullable" : null;
            if (name == null) throw new NotSupportedException("Unsupported nested generic type " + type.FullName + ".");
            var arguments = new List<string>();
            foreach (var argument in type.GetGenericArguments()) arguments.Add(ValueTypeName(argument));
            return name + "<" + string.Join(";", arguments) + ">";
        }

        private static void WriteTypedCollection(string typeName, Type elementType, IEnumerable value, StringBuilder sb)
        {
            sb.Append("{\"__type\":"); WriteString(typeName, sb);
            sb.Append(",\"ElementType\":"); WriteString(ValueTypeName(elementType), sb);
            sb.Append(",\"Values\":"); WriteArray(value, sb); sb.Append('}');
        }

        private static void WriteSdkObject(object value, StringBuilder sb)
        {
            sb.Append("{\"__type\":\"SdkObject\",\"Type\":");
            var valueType = value.GetType();
            WriteString(valueType.IsGenericType ? valueType.GetGenericTypeDefinition().FullName : valueType.FullName, sb);
            if (valueType.IsGenericType)
            {
                sb.Append(",\"TypeArguments\":[");
                var firstType = true;
                foreach (var argument in valueType.GetGenericArguments())
                {
                    if (!IsSafeValueType(argument)) throw new NotSupportedException("Unsupported SDK collection element type " + argument.FullName + ".");
                    if (!firstType) sb.Append(',');
                    WriteString(ValueTypeName(argument), sb);
                    firstType = false;
                }
                sb.Append(']');
            }
            if (value is Enum)
            {
                sb.Append(",\"Value\":"); WriteString(value.ToString(), sb);
            }
            else if (value is IEnumerable items)
            {
                sb.Append(",\"Items\":[");
                var first = true;
                var index = 0;
                foreach (var item in items)
                {
                    if (!first) sb.Append(',');
                    var type = item?.GetType();
                    if (type != null && type.IsGenericType && type.GetGenericTypeDefinition() == typeof(KeyValuePair<,>))
                    {
                        sb.Append("{\"Key\":"); WriteChild(type.GetProperty("Key").GetValue(item), sb, "Key");
                        sb.Append(",\"Value\":"); WriteChild(type.GetProperty("Value").GetValue(item), sb, "Value"); sb.Append('}');
                    }
                    else WriteChild(item, sb, "[" + (index++).ToString(CultureInfo.InvariantCulture) + "]");
                    first = false;
                }
                sb.Append(']');
            }
            else
            {
                var properties = new Dictionary<string, object>(StringComparer.Ordinal);
                foreach (var prop in GetProperties(value.GetType()))
                {
                    if (prop.Name == "ExtensionData") continue;
                    // Read-only calculated scalar properties are not state to restore.
                    if (!prop.CanWrite && !typeof(IEnumerable).IsAssignableFrom(prop.PropertyType)) continue;
                    properties.Add(prop.Name, ReadProperty(prop, value));
                }
                sb.Append(",\"Properties\":"); WriteDictionary(properties, sb);
            }
            WriteExtensionData(value, sb);
            sb.Append('}');
        }

        private static object ReadSdkObject(Dictionary<string, object> dict)
        {
            var type = ResolveSdkObjectType(dict);
            if (!IsSdkType(type)) throw new NotSupportedException("Expected an SDK data contract.");
            if (type.IsEnum) return Enum.Parse(type, (string)dict["Value"]);
            var instance = CreateSdkInstance(type);
            if (dict.TryGetValue("Items", out var items)) PopulateCollection(instance, (IEnumerable)items);
            if (dict.TryGetValue("Properties", out var properties))
                PopulateObject(instance, (Dictionary<string, object>)properties);
            RestoreExtensionData(instance, dict);
            return instance;
        }

        private static Type ResolveSdkObjectType(Dictionary<string, object> dict)
        {
            var type = ResolveValueType((string)dict["Type"]);
            if (dict.TryGetValue("TypeArguments", out var arguments))
            {
                var types = new List<Type>();
                foreach (var name in (IEnumerable)arguments) types.Add(ResolveValueType((string)name));
                type = type.MakeGenericType(types.ToArray());
            }
            return type;
        }

        private static object CreateSdkInstance(Type type)
        {
            if (type.IsAbstract || type.IsInterface || type.ContainsGenericParameters)
                throw new NotSupportedException("Cannot instantiate SDK type " + type.FullName + ".");
            try
            {
                if (type.GetConstructor(Type.EmptyTypes) != null) return Activator.CreateInstance(type);
                // Some SDK collection constructors are internal. Their data contracts are public.
                return ReadNativeJson(typeof(IEnumerable).IsAssignableFrom(type) ? "[]" : "{}", type);
            }
            catch (Exception ex) { throw new InvalidOperationException("Cannot restore SDK type " + type.FullName + ".", ex); }
        }

        private static void PopulateCollection(object target, IEnumerable values)
        {
            if (target == null) throw new InvalidOperationException("Cannot populate a null collection.");
            if (target is IList list)
            {
                var elementType = GetElementType(target.GetType());
                list.Clear();
                foreach (var value in values) list.Add(CoerceValue(value, elementType));
                return;
            }
            var type = target.GetType();
            type.GetMethod("Clear", Type.EmptyTypes)?.Invoke(target, null);
            MethodInfo addOne = null, addTwo = null;
            foreach (var method in type.GetMethods(BindingFlags.Instance | BindingFlags.Public))
            {
                if (method.Name != "Add") continue;
                if (method.GetParameters().Length == 1) addOne = method;
                if (method.GetParameters().Length == 2) addTwo = method;
            }
            foreach (var value in values)
            {
                if (addTwo != null && value is Dictionary<string, object> pair)
                {
                    var parameters = addTwo.GetParameters();
                    addTwo.Invoke(target, new[] { CoerceValue(pair["Key"], parameters[0].ParameterType), CoerceValue(pair["Value"], parameters[1].ParameterType) });
                }
                else if (addTwo != null && value != null && value.GetType().IsGenericType && value.GetType().GetGenericTypeDefinition() == typeof(KeyValuePair<,>))
                {
                    var parameters = addTwo.GetParameters();
                    addTwo.Invoke(target, new[] { CoerceValue(value.GetType().GetProperty("Key").GetValue(value), parameters[0].ParameterType),
                        CoerceValue(value.GetType().GetProperty("Value").GetValue(value), parameters[1].ParameterType) });
                }
                else if (addOne != null) addOne.Invoke(target, new[] { CoerceValue(value, addOne.GetParameters()[0].ParameterType) });
                else throw new NotSupportedException("Cannot populate collection " + type.FullName + ".");
            }
        }

        private static Type GetElementType(Type type)
        {
            if (type == null) return typeof(object);
            if (type.IsArray) return type.GetElementType();
            if (type.IsGenericType && type.GetGenericArguments().Length == 1) return type.GetGenericArguments()[0];
            foreach (var contract in type.GetInterfaces())
                if (contract.IsGenericType && contract.GetGenericTypeDefinition() == typeof(IEnumerable<>)) return contract.GetGenericArguments()[0];
            return typeof(object);
        }

        private static string WriteNativeJson(object value)
        {
            using (var stream = new MemoryStream())
            {
                new DataContractJsonSerializer(value.GetType(), new DataContractJsonSerializerSettings
                {
                    MaxItemsInObjectGraph = 100000,
                    DateTimeFormat = new DateTimeFormat("yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK") { DateTimeStyles = DateTimeStyles.RoundtripKind }
                }).WriteObject(stream, value);
                return Encoding.UTF8.GetString(stream.ToArray());
            }
        }

        private static object ReadNativeJson(string json, Type type)
        {
            var bytes = Encoding.UTF8.GetBytes(json);
            try
            {
                using (var stream = new MemoryStream(bytes))
                    return new DataContractJsonSerializer(type, new DataContractJsonSerializerSettings { MaxItemsInObjectGraph = 100000 }).ReadObject(stream);
            }
            catch (SerializationException)
            {
                using (var stream = new MemoryStream(bytes))
                    return new DataContractJsonSerializer(type, new DataContractJsonSerializerSettings
                    {
                        MaxItemsInObjectGraph = 100000,
                        DateTimeFormat = new DateTimeFormat("yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK") { DateTimeStyles = DateTimeStyles.RoundtripKind }
                    }).ReadObject(stream);
            }
        }

        private static ExecutionContextSnapshot ReadNativeContextProperties(RemoteExecutionContext remote, Dictionary<string, object> raw)
        {
            var values = new Dictionary<string, object>(StringComparer.Ordinal);
            var extra = new Dictionary<string, object>(StringComparer.Ordinal);
            foreach (var item in raw)
            {
                if (item.Key == "__type") continue;
                if (item.Value == null)
                {
                    values[item.Key] = null;
                    if (typeof(RemoteExecutionContext).GetProperty(item.Key, BindingFlags.Public | BindingFlags.Instance) == null)
                        extra[item.Key] = null;
                    continue;
                }
                if (item.Key == "ParentContext" && item.Value is Dictionary<string, object> parent && remote.ParentContext != null)
                {
                    values[item.Key] = ReadNativeContextProperties(remote.ParentContext, parent);
                    continue;
                }
                var property = typeof(RemoteExecutionContext).GetProperty(item.Key, BindingFlags.Public | BindingFlags.Instance);
                if (property != null) values[item.Key] = property.GetValue(remote);
                else
                {
                    var type = GetMemberType(typeof(ExecutionContextSnapshot), item.Key);
                    if (type != null)
                    {
                        var json = new StringBuilder();
                        WriteRawJson(item.Value, json);
                        values[item.Key] = ReadNativeJson(json.ToString(), type);
                    }
                    else values[item.Key] = DecodeValue(item.Value, null, true);
                    extra[item.Key] = values[item.Key];
                }
            }
            if (remote.ExtensionData != null) values["ExtensionData"] = WriteUnknownContextExtensionData(remote);
            RemoteProperties.Add(remote, extra);
            return new ExecutionContextSnapshot(values);
        }

        private static void WriteRawJson(object value, StringBuilder sb)
        {
            if (value == null) sb.Append("null");
            else if (value is JsonNumber number) sb.Append(number.Text);
            else if (value is string text) WriteString(text, sb);
            else if (value is bool flag) sb.Append(flag ? "true" : "false");
            else if (value is Dictionary<string, object> dict)
            {
                sb.Append('{');
                var first = true;
                foreach (var pair in dict)
                {
                    if (!first) sb.Append(',');
                    WriteString(pair.Key, sb); sb.Append(':'); WriteRawJson(pair.Value, sb);
                    first = false;
                }
                sb.Append('}');
            }
            else if (value is List<object> list)
            {
                sb.Append('[');
                for (var i = 0; i < list.Count; i++) { if (i > 0) sb.Append(','); WriteRawJson(list[i], sb); }
                sb.Append(']');
            }
            else throw new FormatException("Invalid native JSON value.");
        }

        private static void WriteExtensionData(object value, StringBuilder sb)
        {
            if (value is IExtensibleDataObject data && data.ExtensionData != null)
                WriteMember("ExtensionData", EncodeExtensionData(WriteNativeJson(value)), sb);
        }

        private static void RestoreExtensionData(object value, Dictionary<string, object> dict)
        {
            if (value is IExtensibleDataObject data && dict.TryGetValue("ExtensionData", out var extension) && extension is string json)
            {
                var extensionJson = DecodeExtensionData(json);
                if (value is RemoteExecutionContext)
                {
                    var native = ParseNativeJsonObject(WriteNativeJson(value));
                    foreach (var item in ParseNativeJsonObject(extensionJson))
                        if (!native.ContainsKey(item.Key)) native.Add(item.Key, item.Value);
                    extensionJson = SerializeRawJson(native);
                }
                data.ExtensionData = ((IExtensibleDataObject)ReadNativeJson(extensionJson, value.GetType())).ExtensionData;
            }
        }

        private static string WriteUnknownContextExtensionData(object context)
        {
            var native = ParseNativeJsonObject(WriteNativeJson(context));
            foreach (var name in KnownContextProperties) native.Remove(name);
            native.Remove("__type");
            native.Remove("_t");
            native.Remove("SnapshotVersion");
            return SerializeRawJson(native);
        }

        private static string SerializeRawJson(object value)
        {
            var sb = new StringBuilder();
            WriteRawJson(value, sb);
            return sb.ToString();
        }

        private static Dictionary<string, object> ParseNativeJsonObject(string json)
        {
            var chars = json.ToCharArray();
            var index = 0;
            var value = ParseValue(chars, ref index, 0);
            EatWhitespace(chars, ref index);
            if (index != chars.Length || !(value is Dictionary<string, object> result))
                throw new FormatException("Expected a native JSON object.");
            return result;
        }

        private static string EncodeExtensionData(string json)
        {
            // Keep extension data in the same text stream as the rest of the snapshot.
            // DebugContext compresses the complete JSON; compressing this nested JSON first
            // turns it into high-entropy base64 and prevents the outer compressor from
            // removing duplicated context fields and property names effectively.
            return json;
        }

        private static string DecodeExtensionData(string value)
        {
            if (value == null || !value.StartsWith(CompressedExtensionDataPrefix, StringComparison.Ordinal))
                return value;

            var bytes = Convert.FromBase64String(value.Substring(CompressedExtensionDataPrefix.Length));
            using (var input = new MemoryStream(bytes))
            using (var decompressor = new DeflateStream(input, CompressionMode.Decompress))
            using (var output = new MemoryStream())
            {
                decompressor.CopyTo(output);
                return Encoding.UTF8.GetString(output.ToArray());
            }
        }

        private static void CopyKeyAttributes(KeyAttributeCollection target, object value)
        {
            if (!(value is IEnumerable<KeyValuePair<string, object>> keys)) throw new FormatException("Expected key attributes.");
            foreach (var pair in keys) target.Add(pair.Key, pair.Value);
        }

        private static string GetString(Dictionary<string, object> dict, string key, string defaultValue)
        {
            return dict.TryGetValue(key, out var v) && v is string s ? s : defaultValue;
        }

        private static int GetInt(Dictionary<string, object> dict, string key)
        {
            return dict.TryGetValue(key, out var v) ? Convert.ToInt32(v, CultureInfo.InvariantCulture) : 0;
        }

        private static bool GetBool(Dictionary<string, object> dict, string key)
        {
            return dict.TryGetValue(key, out var v) && v is bool b && b;
        }

        private static object MapDictionaryToObject(Dictionary<string, object> dict, Type targetType)
        {
            var instance = Activator.CreateInstance(targetType);
            PopulateObject(instance, dict);
            return instance;
        }

        private static void PopulateObject(object instance, Dictionary<string, object> dict)
        {
            foreach (var prop in GetProperties(instance.GetType()))
            {
                object value;
                if (!TryGetDictValue(dict, prop.Name, out value)) continue;
                if (!prop.CanWrite)
                {
                    if (value is IEnumerable items && !(value is string)) PopulateCollection(prop.GetValue(instance), items);
                    continue;
                }
                if (value == null)
                {
                    if (!prop.PropertyType.IsValueType || Nullable.GetUnderlyingType(prop.PropertyType) != null)
                        prop.SetValue(instance, null);
                    continue;
                }
                prop.SetValue(instance, CoerceValue(value, prop.PropertyType));
            }
        }

        private static bool TryGetDictValue(Dictionary<string, object> dict, string name, out object value)
        {
            if (dict.TryGetValue(name, out value)) return true;
            foreach (var kvp in dict)
            {
                if (string.Equals(kvp.Key, name, StringComparison.OrdinalIgnoreCase))
                {
                    value = kvp.Value;
                    return true;
                }
            }
            value = null;
            return false;
        }

        private static object CoerceValue(object value, Type targetType)
        {
            if (value == null) return null;
            var underlying = Nullable.GetUnderlyingType(targetType);
            if (underlying != null) targetType = underlying;
            if (targetType.IsAssignableFrom(value.GetType())) return value;
            if (targetType.IsEnum) return value is string text ? Enum.Parse(targetType, text, true) : Enum.ToObject(targetType, value);
            if (targetType == typeof(DateTime) && value is string date)
                return DateTime.Parse(date, CultureInfo.InvariantCulture, DateTimeStyles.RoundtripKind);
            if (typeof(IPluginExecutionContext).IsAssignableFrom(targetType) && value is RemoteExecutionContext remote && targetType != typeof(RemoteExecutionContext))
                return DeserializeContext7(SerializeContextFull(remote));
            if (targetType == typeof(string)) return value.ToString();
            if (targetType == typeof(Guid) && value is string gs) return Guid.Parse(gs);
            if (targetType == typeof(int)) return Convert.ToInt32(value, CultureInfo.InvariantCulture);
            if (targetType == typeof(long)) return Convert.ToInt64(value, CultureInfo.InvariantCulture);
            if (targetType == typeof(double)) return Convert.ToDouble(value, CultureInfo.InvariantCulture);
            if (targetType == typeof(decimal)) return Convert.ToDecimal(value, CultureInfo.InvariantCulture);
            if (targetType == typeof(float)) return Convert.ToSingle(value, CultureInfo.InvariantCulture);
            if (targetType == typeof(bool)) return Convert.ToBoolean(value, CultureInfo.InvariantCulture);
            if (value is List<object> sourceList && targetType.IsGenericType)
            {
                var genDef = targetType.GetGenericTypeDefinition();
                if (genDef == typeof(List<>) || genDef == typeof(IList<>) || genDef == typeof(IEnumerable<>) || genDef == typeof(ICollection<>) || genDef == typeof(IReadOnlyList<>) || genDef == typeof(IReadOnlyCollection<>))
                {
                    var elementType = targetType.GetGenericArguments()[0];
                    var listType = typeof(List<>).MakeGenericType(elementType);
                    var typedList = (IList)Activator.CreateInstance(listType);
                    foreach (var item in sourceList)
                        typedList.Add(CoerceValue(item, elementType));
                    return typedList;
                }
            }
            if (value is Dictionary<string, object> nestedDict)
            {
                if (IsSdkType(targetType) && nestedDict.TryGetValue("__type", out var typeObj) && typeObj is string typeName)
                    return ReconstructTypedObject(typeName, nestedDict);
                if (targetType.IsGenericType)
                {
                    var genDef = targetType.GetGenericTypeDefinition();
                    if (genDef == typeof(Dictionary<,>) || genDef == typeof(IDictionary<,>) || genDef == typeof(IReadOnlyDictionary<,>))
                    {
                        var keyType = targetType.GetGenericArguments()[0];
                        var valType = targetType.GetGenericArguments()[1];
                        if (keyType == typeof(string))
                        {
                            var dictType = typeof(Dictionary<,>).MakeGenericType(keyType, valType);
                            var typedDict = (IDictionary)Activator.CreateInstance(dictType);
                            foreach (var kvp in nestedDict)
                                typedDict.Add(kvp.Key, CoerceValue(kvp.Value, valType));
                            return typedDict;
                        }
                    }
                }
                if (targetType.IsClass && targetType != typeof(string) && !typeof(IEnumerable).IsAssignableFrom(targetType))
                    return MapDictionaryToObject(nestedDict, targetType);
            }
            if (value is List<object> arrayForArray && targetType.IsArray)
            {
                var elementType = targetType.GetElementType();
                var array = Array.CreateInstance(elementType, arrayForArray.Count);
                for (var i = 0; i < arrayForArray.Count; i++)
                    array.SetValue(CoerceValue(arrayForArray[i], elementType), i);
                return array;
            }
            if (value is IEnumerable collection && !(value is string) && typeof(IEnumerable).IsAssignableFrom(targetType) && !targetType.IsInterface)
            {
                var instance = IsSdkType(targetType) ? CreateSdkInstance(targetType) : Activator.CreateInstance(targetType);
                PopulateCollection(instance, collection);
                return instance;
            }
            return Convert.ChangeType(value, targetType, CultureInfo.InvariantCulture);
        }

        private static InvalidOperationException CreateDeserializationException(Type targetType, string json, object result, Exception innerException)
        {
            const int maxPreviewLength = 500;
            var preview = json == null ? "<null>" : json
                .Replace("\r", "\\r")
                .Replace("\n", "\\n")
                .Replace("\t", "\\t");
            if (preview.Length > maxPreviewLength)
                preview = preview.Substring(0, maxPreviewLength) + "...";

            var parsedType = result == null ? "<null>" : result.GetType().FullName;
            var message = string.Format(
                CultureInfo.InvariantCulture,
                "Unable to deserialize JSON to '{0}'. Parsed root type: '{1}'. JSON: {2}",
                targetType.FullName,
                parsedType,
                preview);
            return new InvalidOperationException(message, innerException);
        }

        #endregion
    }
}
