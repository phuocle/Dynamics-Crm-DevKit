using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Reflection;
using System.Text;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    internal static class DevKitJson
    {
        private const int BUILDER_CAPACITY = 2000;
        private static readonly char[] EscapeChars = { '"', '\\', '\b', '\f', '\n', '\r', '\t' };
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
            "ParentContext"
        };

        #region Public API

        [ThreadStatic]
        private static bool _compact;

        /// <summary>
        /// Serialize to full JSON format with readable keys (default for objects).
        /// </summary>
        public static string Serialize(object value)
        {
            var sb = new StringBuilder(BUILDER_CAPACITY);
            WriteValue(value, sb);
            return sb.ToString();
        }

        /// <summary>
        /// Serialize to compact JSON format with short keys.
        /// </summary>
        public static string SerializeCompact(object value)
        {
            _compact = true;
            try
            {
                var sb = new StringBuilder(BUILDER_CAPACITY);
                WriteValue(value, sb);
                return sb.ToString();
            }
            finally { _compact = false; }
        }

        public static object Deserialize(string json)
        {
            if (json == null) return null;
            var chars = json.ToCharArray();
            var index = 0;
            return ParseValue(chars, ref index);
        }

        public static T Deserialize<T>(string json)
        {
            var result = Deserialize(json);
            if (result == null) return default(T);
            if (result is T typed) return typed;
            var t = typeof(T);
            if (t == typeof(int)) return (T)(object)Convert.ToInt32(result, CultureInfo.InvariantCulture);
            if (t == typeof(long)) return (T)(object)Convert.ToInt64(result, CultureInfo.InvariantCulture);
            if (t == typeof(double)) return (T)(object)Convert.ToDouble(result, CultureInfo.InvariantCulture);
            if (t == typeof(decimal)) return (T)(object)Convert.ToDecimal(result, CultureInfo.InvariantCulture);
            if (t == typeof(float)) return (T)(object)Convert.ToSingle(result, CultureInfo.InvariantCulture);
            if (t == typeof(bool)) return (T)(object)Convert.ToBoolean(result, CultureInfo.InvariantCulture);
            if (t == typeof(string)) return (T)(object)result.ToString();
            return (T)result;
        }

        /// <summary>
        /// Serialize any IExecutionContext to compact JSON format.
        /// Uses short keys to maximize data within the 10 KB Plugin Trace Log limit.
        /// </summary>
        public static string SerializeContext(IExecutionContext context)
        {
            if (context == null) return "null";
            _compact = true;
            try
            {
                var sb = new StringBuilder(BUILDER_CAPACITY);
                if (context is RemoteExecutionContext rCtx)
                    WriteRemoteExecutionContext(rCtx, sb);
                else
                    WriteContextObject(context, sb);
                return sb.ToString();
            }
            finally { _compact = false; }
        }

        /// <summary>
        /// Serialize any IExecutionContext to full JSON format with readable keys.
        /// </summary>
        public static string SerializeContextFull(IExecutionContext context)
        {
            if (context == null) return "null";
            var sb = new StringBuilder(BUILDER_CAPACITY);
            if (context is RemoteExecutionContext rCtx)
                WriteRemoteExecutionContext(rCtx, sb);
            else
                WriteContextObject(context, sb);
            return sb.ToString();
        }

        #endregion

        #region Serialization - Core

        private static void WriteValue(object value, StringBuilder sb)
        {
            if (value == null) { sb.Append("null"); return; }
            if (value is string s) { WriteString(s, sb); return; }
            if (value is bool b) { sb.Append(b ? "true" : "false"); return; }

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
            if (value is RemoteExecutionContext ctx) { WriteRemoteExecutionContext(ctx, sb); return; }
            if (value is IExecutionContext execCtx) { WriteContextObject(execCtx, sb); return; }

            if (value is DateTime dt) { WriteTyped("DateTime", dt.ToUniversalTime().ToString(DateTimeFormats[0], CultureInfo.InvariantCulture), sb); return; }
            if (value is Guid guid) { WriteTyped("Guid", guid.ToString("D"), sb); return; }
            if (value is byte[] bytes) { WriteTyped("File", Convert.ToBase64String(bytes), sb); return; }
            if (value is Enum e) { sb.Append(Convert.ToInt32(e, CultureInfo.InvariantCulture).ToString(CultureInfo.InvariantCulture)); return; }

            if (value is IDictionary<string, object> dict) { WriteDictionary(dict, sb); return; }
            if (value is IDictionary<string, string> sdict) { WriteStringDictionary(sdict, sb); return; }
            if (value is IEnumerable enumerable) { WriteArray(enumerable, sb); return; }

            WriteString(value.ToString(), sb);
        }

        private static void WriteString(string s, StringBuilder sb)
        {
            sb.Append('"');
            if (s.IndexOfAny(EscapeChars) == -1)
            {
                sb.Append(s);
            }
            else
            {
                foreach (var c in s)
                {
                    switch (c)
                    {
                        case '"': sb.Append("\\\""); break;
                        case '\\': sb.Append("\\\\"); break;
                        case '\b': sb.Append("\\b"); break;
                        case '\f': sb.Append("\\f"); break;
                        case '\n': sb.Append("\\n"); break;
                        case '\r': sb.Append("\\r"); break;
                        case '\t': sb.Append("\\t"); break;
                        default: sb.Append(c); break;
                    }
                }
            }
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
            sb.Append('{');
            var first = true;
            foreach (var kvp in dict)
            {
                if (!first) sb.Append(',');
                WriteString(kvp.Key, sb);
                sb.Append(':');
                WriteValue(kvp.Value, sb);
                first = false;
            }
            sb.Append('}');
        }

        private static void WriteStringDictionary(IDictionary<string, string> dict, StringBuilder sb)
        {
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
        }

        private static void WriteArray(IEnumerable enumerable, StringBuilder sb)
        {
            sb.Append('[');
            var first = true;
            foreach (var item in enumerable)
            {
                if (!first) sb.Append(',');
                WriteValue(item, sb);
                first = false;
            }
            sb.Append(']');
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
                WriteValue(attr.Value, sb);
                first = false;
            }
            sb.Append('}');
            if (entity.FormattedValues != null && entity.FormattedValues.Count > 0)
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
            sb.Append('}');
        }

        private static void WriteMoney(Money money, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"M\",\"v\":" : "{\"__type\":\"Money\",\"Value\":");
            sb.Append(money.Value.ToString(CultureInfo.InvariantCulture));
            sb.Append('}');
        }

        private static void WriteOptionSetValue(OptionSetValue osv, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"O\",\"v\":" : "{\"__type\":\"OptionSetValue\",\"Value\":");
            sb.Append(osv.Value.ToString(CultureInfo.InvariantCulture));
            sb.Append('}');
        }

        private static void WriteOptionSetValueCollection(OptionSetValueCollection osvc, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"OC\",\"vs\":[" : "{\"__type\":\"OptionSetValueCollection\",\"Values\":[");
            var first = true;
            foreach (var osv in osvc)
            {
                if (!first) sb.Append(',');
                sb.Append(osv.Value.ToString(CultureInfo.InvariantCulture));
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
            WriteValue(av.Value, sb);
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
                WriteEntity(entity, sb);
                first = false;
            }
            sb.Append("]}");
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
                WriteValue(kvp.Value, sb);
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
                WriteEntity(kvp.Value, sb);
                first = false;
            }
            sb.Append("}}");
        }

        private static void WriteRemoteExecutionContext(RemoteExecutionContext ctx, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"RC\"" : "{\"__type\":\"RemoteExecutionContext\"");
            sb.Append(_compact ? ",\"bu\":" : ",\"BusinessUnitId\":"); WriteString(ctx.BusinessUnitId.ToString("D"), sb);
            sb.Append(_compact ? ",\"ci\":" : ",\"CorrelationId\":"); WriteString(ctx.CorrelationId.ToString("D"), sb);
            sb.Append(_compact ? ",\"dp\":" : ",\"Depth\":"); sb.Append(ctx.Depth.ToString(CultureInfo.InvariantCulture));
            sb.Append(_compact ? ",\"iu\":" : ",\"InitiatingUserId\":"); WriteString(ctx.InitiatingUserId.ToString("D"), sb);
            sb.Append(_compact ? ",\"ip\":" : ",\"InputParameters\":"); WriteParameterCollection(ctx.InputParameters ?? new ParameterCollection(), sb);
            sb.Append(_compact ? ",\"xo\":" : ",\"IsExecutingOffline\":"); sb.Append(ctx.IsExecutingOffline ? "true" : "false");
            sb.Append(_compact ? ",\"xt\":" : ",\"IsInTransaction\":"); sb.Append(ctx.IsInTransaction ? "true" : "false");
            sb.Append(_compact ? ",\"xp\":" : ",\"IsOfflinePlayback\":"); sb.Append(ctx.IsOfflinePlayback ? "true" : "false");
            sb.Append(_compact ? ",\"im\":" : ",\"IsolationMode\":"); sb.Append(ctx.IsolationMode.ToString(CultureInfo.InvariantCulture));
            sb.Append(_compact ? ",\"mn\":" : ",\"MessageName\":"); WriteString(ctx.MessageName ?? "", sb);
            sb.Append(_compact ? ",\"md\":" : ",\"Mode\":"); sb.Append(ctx.Mode.ToString(CultureInfo.InvariantCulture));
            sb.Append(_compact ? ",\"oc\":" : ",\"OperationCreatedOn\":"); WriteString(ctx.OperationCreatedOn.ToUniversalTime().ToString(DateTimeFormats[0], CultureInfo.InvariantCulture), sb);
            sb.Append(_compact ? ",\"oi\":" : ",\"OperationId\":"); WriteString(ctx.OperationId.ToString("D"), sb);
            sb.Append(_compact ? ",\"og\":" : ",\"OrganizationId\":"); WriteString(ctx.OrganizationId.ToString("D"), sb);
            sb.Append(_compact ? ",\"on\":" : ",\"OrganizationName\":"); WriteString(ctx.OrganizationName ?? "", sb);
            sb.Append(_compact ? ",\"ou\":" : ",\"OutputParameters\":"); WriteParameterCollection(ctx.OutputParameters ?? new ParameterCollection(), sb);
            sb.Append(_compact ? ",\"oe\":" : ",\"OwningExtension\":");
            if (ctx.OwningExtension != null) WriteEntityReference(ctx.OwningExtension, sb); else sb.Append("null");
            sb.Append(_compact ? ",\"po\":" : ",\"PostEntityImages\":"); WriteEntityImageCollection(ctx.PostEntityImages ?? new EntityImageCollection(), sb);
            sb.Append(_compact ? ",\"pr\":" : ",\"PreEntityImages\":"); WriteEntityImageCollection(ctx.PreEntityImages ?? new EntityImageCollection(), sb);
            sb.Append(_compact ? ",\"pi\":" : ",\"PrimaryEntityId\":"); WriteString(ctx.PrimaryEntityId.ToString("D"), sb);
            sb.Append(_compact ? ",\"pn\":" : ",\"PrimaryEntityName\":"); WriteString(ctx.PrimaryEntityName ?? "", sb);
            sb.Append(_compact ? ",\"ri\":" : ",\"RequestId\":");
            if (ctx.RequestId.HasValue) WriteString(ctx.RequestId.Value.ToString("D"), sb); else sb.Append("null");
            sb.Append(_compact ? ",\"sn\":" : ",\"SecondaryEntityName\":"); WriteString(ctx.SecondaryEntityName ?? "", sb);
            sb.Append(_compact ? ",\"sv\":" : ",\"SharedVariables\":"); WriteParameterCollection(ctx.SharedVariables ?? new ParameterCollection(), sb);
            sb.Append(_compact ? ",\"st\":" : ",\"Stage\":"); sb.Append(ctx.Stage.ToString(CultureInfo.InvariantCulture));
            sb.Append(_compact ? ",\"ui\":" : ",\"UserId\":"); WriteString(ctx.UserId.ToString("D"), sb);
            if (ctx.ParentContext != null)
            {
                sb.Append(_compact ? ",\"pc\":" : ",\"ParentContext\":");
                if (ctx.ParentContext is RemoteExecutionContext parentCtx)
                    WriteRemoteExecutionContext(parentCtx, sb);
                else if (ctx.ParentContext is IExecutionContext parentExec)
                    WriteContextObject(parentExec, sb);
                else
                    sb.Append("null");
            }
            WriteExtraContextProperties(ctx, sb);
            sb.Append('}');
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
            {"ParentContext", "pc"}
        };

        private static string GetCompactContextKey(string propertyName)
        {
            return FullToCompactContextKey.TryGetValue(propertyName, out var compact) ? compact : propertyName;
        }

        /// <summary>
        /// Auto-discover v2-v7+ properties via reflection that aren't in the v1 known set.
        /// When Microsoft updates RemoteExecutionContext with new properties, they'll be captured automatically.
        /// </summary>
        private static void WriteExtraContextProperties(object ctx, StringBuilder sb)
        {
            foreach (var prop in ctx.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                if (KnownContextProperties.Contains(prop.Name)) continue;
                if (prop.GetIndexParameters().Length > 0) continue;
                try
                {
                    var val = prop.GetValue(ctx);
                    sb.Append(",\"");
                    sb.Append(_compact ? GetCompactContextKey(prop.Name) : prop.Name);
                    sb.Append("\":");
                    WriteValue(val, sb);
                }
                catch { }
            }
        }

        /// <summary>
        /// Serialize any IExecutionContext (including IPluginExecutionContext v2-v7+) purely via reflection.
        /// Captures ALL public properties from the runtime type, not just v1 RemoteExecutionContext properties.
        /// </summary>
        private static void WriteContextObject(object context, StringBuilder sb)
        {
            sb.Append(_compact ? "{\"_t\":\"RC\"" : "{\"__type\":\"RemoteExecutionContext\"");
            object parentContextValue = null;
            foreach (var prop in context.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                if (prop.GetIndexParameters().Length > 0) continue;
                if (prop.Name == "ParentContext")
                {
                    try { parentContextValue = prop.GetValue(context); } catch { }
                    continue;
                }
                try
                {
                    var val = prop.GetValue(context);
                    sb.Append(",\"");
                    sb.Append(_compact ? GetCompactContextKey(prop.Name) : prop.Name);
                    sb.Append("\":");
                    WriteValue(val, sb);
                }
                catch { }
            }
            if (parentContextValue != null)
            {
                sb.Append(_compact ? ",\"pc\":" : ",\"ParentContext\":");
                if (parentContextValue is RemoteExecutionContext parentRemote)
                    WriteRemoteExecutionContext(parentRemote, sb);
                else
                    WriteContextObject(parentContextValue, sb);
            }
            sb.Append('}');
        }

        #endregion

        #region Parsing

        private static object ParseValue(char[] json, ref int index)
        {
            EatWhitespace(json, ref index);
            if (index >= json.Length) return null;
            switch (json[index])
            {
                case '"': return ParseString(json, ref index);
                case '{': return ParseObjectAndReconstruct(json, ref index);
                case '[': return ParseArray(json, ref index);
                case 't': index += 4; return true;
                case 'f': index += 5; return false;
                case 'n': index += 4; return null;
                default: return ParseNumber(json, ref index);
            }
        }

        private static string ParseString(char[] json, ref int index)
        {
            index++;
            var sb = new StringBuilder();
            while (index < json.Length)
            {
                var c = json[index++];
                if (c == '"') return sb.ToString();
                if (c != '\\') { sb.Append(c); continue; }
                if (index >= json.Length) break;
                c = json[index++];
                switch (c)
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
                        if (index + 4 <= json.Length)
                        {
                            if (uint.TryParse(new string(json, index, 4), NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var cp))
                            {
                                if (cp >= 0xD800 && cp <= 0xDBFF && index + 10 <= json.Length && json[index + 4] == '\\' && json[index + 5] == 'u')
                                {
                                    if (uint.TryParse(new string(json, index + 6, 4), NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var low) && low >= 0xDC00 && low <= 0xDFFF)
                                    {
                                        sb.Append((char)cp);
                                        sb.Append((char)low);
                                        index += 10;
                                        continue;
                                    }
                                }
                                sb.Append((char)cp);
                                index += 4;
                            }
                        }
                        break;
                }
            }
            return sb.ToString();
        }

        private static object ParseObjectAndReconstruct(char[] json, ref int index)
        {
            var dict = ParseObject(json, ref index);
            if (dict.ContainsKey("_t"))
                dict = ExpandCompactDict(dict);
            if (dict.TryGetValue("__type", out var typeObj) && typeObj is string typeName)
                return ReconstructTypedObject(typeName, dict);
            return dict;
        }

        private static Dictionary<string, object> ParseObject(char[] json, ref int index)
        {
            var dict = new Dictionary<string, object>();
            index++;
            while (index < json.Length)
            {
                EatWhitespace(json, ref index);
                if (index < json.Length && json[index] == '}') { index++; return dict; }
                if (index < json.Length && json[index] == ',') { index++; continue; }
                var key = ParseString(json, ref index);
                EatWhitespace(json, ref index);
                if (index < json.Length && json[index] == ':') index++;
                dict[key] = ParseValue(json, ref index);
            }
            return dict;
        }

        private static List<object> ParseArray(char[] json, ref int index)
        {
            var list = new List<object>();
            index++;
            while (index < json.Length)
            {
                EatWhitespace(json, ref index);
                if (index < json.Length && json[index] == ']') { index++; return list; }
                if (index < json.Length && json[index] == ',') { index++; continue; }
                list.Add(ParseValue(json, ref index));
            }
            return list;
        }

        private static object ParseNumber(char[] json, ref int index)
        {
            var start = index;
            while (index < json.Length && "0123456789.eE+-".IndexOf(json[index]) != -1) index++;
            var s = new string(json, start, index - start);
            if (s.IndexOfAny(new[] { '.', 'e', 'E' }) >= 0)
            {
                if (double.TryParse(s, NumberStyles.Any, CultureInfo.InvariantCulture, out var d)) return d;
            }
            else
            {
                if (long.TryParse(s, NumberStyles.Any, CultureInfo.InvariantCulture, out var l))
                    return (l >= int.MinValue && l <= int.MaxValue) ? (object)(int)l : l;
            }
            return 0;
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

        private static object ReconstructTypedObject(string typeName, Dictionary<string, object> dict)
        {
            switch (typeName)
            {
                case "Entity": return ReconstructEntity(dict);
                case "EntityReference": return ReconstructEntityReference(dict);
                case "Money": return new Money(Convert.ToDecimal(dict["Value"], CultureInfo.InvariantCulture));
                case "OptionSetValue": return new OptionSetValue(Convert.ToInt32(dict["Value"], CultureInfo.InvariantCulture));
                case "OptionSetValueCollection": return ReconstructOptionSetValueCollection(dict);
                case "AliasedValue": return ReconstructAliasedValue(dict);
                case "BooleanManagedProperty": return ReconstructBooleanManagedProperty(dict);
                case "EntityCollection": return ReconstructEntityCollection(dict);
                case "ParameterCollection": return ReconstructParameterCollection(dict);
                case "EntityImageCollection": return ReconstructEntityImageCollection(dict);
                case "RemoteExecutionContext": return ReconstructRemoteExecutionContext(dict);
                case "DateTime":
                    return DateTime.ParseExact((string)dict["Value"], DateTimeFormats, CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal);
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
            return entity;
        }

        private static EntityReference ReconstructEntityReference(Dictionary<string, object> dict)
        {
            var er = new EntityReference
            {
                LogicalName = GetString(dict, "LogicalName", ""),
                Id = dict.TryGetValue("Id", out var id) ? Guid.Parse((string)id) : Guid.Empty
            };
            if (dict.TryGetValue("Name", out var name) && name is string n) er.Name = n;
            return er;
        }

        private static OptionSetValueCollection ReconstructOptionSetValueCollection(Dictionary<string, object> dict)
        {
            var osvc = new OptionSetValueCollection();
            if (dict.TryGetValue("Values", out var values) && values is List<object> list)
                foreach (var v in list) osvc.Add(new OptionSetValue(Convert.ToInt32(v, CultureInfo.InvariantCulture)));
            return osvc;
        }

        private static AliasedValue ReconstructAliasedValue(Dictionary<string, object> dict)
        {
            return new AliasedValue(
                GetString(dict, "EntityLogicalName", ""),
                GetString(dict, "AttributeLogicalName", ""),
                dict.TryGetValue("Value", out var v) ? v : null);
        }

        private static BooleanManagedProperty ReconstructBooleanManagedProperty(Dictionary<string, object> dict)
        {
            var bmp = new BooleanManagedProperty(dict.TryGetValue("Value", out var v) && v is bool bv && bv);
            if (dict.TryGetValue("CanBeChanged", out var cc) && cc is bool canChange) bmp.CanBeChanged = canChange;
            if (dict.TryGetValue("ManagedPropertyLogicalName", out var mpln) && mpln is string s)
            {
                var prop = typeof(BooleanManagedProperty).GetProperty("ManagedPropertyLogicalName");
                if (prop != null)
                {
                    var backingField = typeof(BooleanManagedProperty).BaseType?.GetField("_managedPropertyLogicalName", BindingFlags.NonPublic | BindingFlags.Instance)
                        ?? typeof(BooleanManagedProperty).BaseType?.GetField("ManagedPropertyLogicalName", BindingFlags.NonPublic | BindingFlags.Instance);
                    backingField?.SetValue(bmp, s);
                }
            }
            return bmp;
        }

        private static EntityCollection ReconstructEntityCollection(Dictionary<string, object> dict)
        {
            var ec = new EntityCollection();
            if (dict.TryGetValue("EntityName", out var en) && en is string name) ec.EntityName = name;
            if (dict.TryGetValue("Entities", out var entities) && entities is List<object> list)
                foreach (var item in list)
                    if (item is Entity entity) ec.Entities.Add(entity);
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
                    if (kvp.Value is Entity entity) eic[kvp.Key] = entity;
            return eic;
        }

        private static RemoteExecutionContext ReconstructRemoteExecutionContext(Dictionary<string, object> dict)
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);

            SetField(fields, ctx, "_businessUnitId", ParseGuid(dict, "BusinessUnitId"));
            SetField(fields, ctx, "_correlationId", ParseGuid(dict, "CorrelationId"));
            SetField(fields, ctx, "_depth", GetInt(dict, "Depth"));
            SetField(fields, ctx, "_initiatingUserId", ParseGuid(dict, "InitiatingUserId"));
            if (dict.TryGetValue("InputParameters", out var ip) && ip is ParameterCollection ipColl) SetField(fields, ctx, "_inputParameters", ipColl);
            SetField(fields, ctx, "_isOffline", GetBool(dict, "IsExecutingOffline"));
            SetField(fields, ctx, "_isInTransaction", GetBool(dict, "IsInTransaction"));
            SetField(fields, ctx, "_isOfflinePlayback", GetBool(dict, "IsOfflinePlayback"));
            SetField(fields, ctx, "_isolationMode", GetInt(dict, "IsolationMode"));
            SetField(fields, ctx, "_messageName", GetString(dict, "MessageName", ""));
            SetField(fields, ctx, "_mode", GetInt(dict, "Mode"));
            if (dict.TryGetValue("OperationCreatedOn", out var oco))
            {
                if (oco is string ocoStr)
                    SetField(fields, ctx, "_operationCreatedOnTime", DateTime.ParseExact(ocoStr, DateTimeFormats, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal));
                else if (oco is DateTime ocoDate)
                    SetField(fields, ctx, "_operationCreatedOnTime", ocoDate);
            }
            SetField(fields, ctx, "_asyncOperationId", ParseGuid(dict, "OperationId"));
            SetField(fields, ctx, "_organizationId", ParseGuid(dict, "OrganizationId"));
            SetField(fields, ctx, "_organizationName", GetString(dict, "OrganizationName", ""));
            if (dict.TryGetValue("OutputParameters", out var op) && op is ParameterCollection opColl) SetField(fields, ctx, "_outputParameters", opColl);
            if (dict.TryGetValue("OwningExtension", out var oe) && oe is EntityReference oeRef) SetField(fields, ctx, "_owningExtension", oeRef);
            if (dict.TryGetValue("PostEntityImages", out var pei) && pei is EntityImageCollection peiColl) SetField(fields, ctx, "_postImages", peiColl);
            if (dict.TryGetValue("PreEntityImages", out var prei) && prei is EntityImageCollection preiColl) SetField(fields, ctx, "_preImages", preiColl);
            SetField(fields, ctx, "_primaryEntityId", ParseGuid(dict, "PrimaryEntityId"));
            SetField(fields, ctx, "_primaryEntityName", GetString(dict, "PrimaryEntityName", ""));
            if (dict.TryGetValue("RequestId", out var rid))
            {
                if (rid is string ridStr) SetField(fields, ctx, "_requestId", (Guid?)Guid.Parse(ridStr));
                else if (rid is Guid ridGuid) SetField(fields, ctx, "_requestId", (Guid?)ridGuid);
                else SetField(fields, ctx, "_requestId", (Guid?)null);
            }
            SetField(fields, ctx, "_secondaryEntityName", GetString(dict, "SecondaryEntityName", ""));
            if (dict.TryGetValue("SharedVariables", out var sv) && sv is ParameterCollection svColl) SetField(fields, ctx, "_sharedVariables", svColl);
            SetField(fields, ctx, "_stage", GetInt(dict, "Stage"));
            SetField(fields, ctx, "_userId", ParseGuid(dict, "UserId"));
            if (dict.TryGetValue("ParentContext", out var pc) && pc is RemoteExecutionContext parentCtx)
                SetField(fields, ctx, "_parentContext", parentCtx);

            var knownDictKeys = new HashSet<string>(KnownContextProperties, StringComparer.Ordinal) { "__type" };
            foreach (var kvp in dict)
            {
                if (knownDictKeys.Contains(kvp.Key)) continue;
                SetFieldFuzzy(fields, ctx, kvp.Key, kvp.Value);
            }

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
            {"pc", "ParentContext"}
        };

        private static readonly Dictionary<string, string> CompactToFullType = new Dictionary<string, string>(StringComparer.Ordinal)
        {
            {"E", "Entity"}, {"ER", "EntityReference"}, {"M", "Money"},
            {"O", "OptionSetValue"}, {"OC", "OptionSetValueCollection"},
            {"AV", "AliasedValue"}, {"BM", "BooleanManagedProperty"},
            {"EC", "EntityCollection"}, {"PC", "ParameterCollection"},
            {"IC", "EntityImageCollection"}, {"RC", "RemoteExecutionContext"},
            {"DT", "DateTime"}, {"G", "Guid"}, {"F", "File"}
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

        private static Guid ParseGuid(Dictionary<string, object> dict, string key)
        {
            if (!dict.TryGetValue(key, out var v)) return Guid.Empty;
            if (v is string s) return Guid.Parse(s);
            if (v is Guid g) return g;
            return Guid.Empty;
        }

        private static void SetField(FieldInfo[] fields, object target, string fieldName, object value)
        {
            for (var i = 0; i < fields.Length; i++)
            {
                if (string.Equals(fields[i].Name, fieldName, StringComparison.Ordinal))
                {
                    fields[i].SetValue(target, value);
                    return;
                }
            }
        }

        /// <summary>
        /// Fuzzy field matching for v2-v7+ properties, mirrors ToRemoteExecutionContext() logic in Extension.cs.
        /// </summary>
        private static void SetFieldFuzzy(FieldInfo[] fields, object target, string propertyName, object value)
        {
            var lowerName = propertyName.ToLowerInvariant();
            for (var i = 0; i < fields.Length; i++)
            {
                if (!fields[i].Name.ToLowerInvariant().Contains(lowerName)) continue;
                if (value != null && !fields[i].FieldType.IsAssignableFrom(value.GetType())) continue;
                try { fields[i].SetValue(target, value); }
                catch { }
                break;
            }
        }

        #endregion
    }
}
