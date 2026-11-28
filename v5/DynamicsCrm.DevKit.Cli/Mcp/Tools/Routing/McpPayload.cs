#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing
{
    /// <summary>
    /// Shared options/payload reader for consolidated MCP domain router tools.
    /// Supports case-insensitive dual snake_case/camelCase lookup, flexible JSON-string
    /// coercion, and strict unknown-key validation with actionable recovery hints.
    /// </summary>
    internal sealed class McpPayload
    {
        private readonly Dictionary<string, (string RawKey, JsonNode? Value)> _byNormalizedKey;
        private readonly List<string> _rawKeys;

        private McpPayload(JsonObject? source)
        {
            _byNormalizedKey = new Dictionary<string, (string, JsonNode?)>(StringComparer.OrdinalIgnoreCase);
            _rawKeys = new List<string>();
            if (source == null) return;

            foreach (var kvp in source)
            {
                _rawKeys.Add(kvp.Key);
                var norm = NormalizeKey(kvp.Key);
                _byNormalizedKey[norm] = (kvp.Key, kvp.Value);
            }
        }

        internal static McpPayload From(JsonObject? source) => new(source);

        internal static string NormalizeKey(string key) =>
            string.IsNullOrEmpty(key) ? "" : key.Replace("_", "", StringComparison.Ordinal).ToLowerInvariant();

        internal bool HasKey(string snakeKey) => _byNormalizedKey.ContainsKey(NormalizeKey(snakeKey));

        /// <summary>
        /// Rejects any key in payload not present in <paramref name="allowedSnakeKeys"/> (compared via NormalizeKey).
        /// Returns null when valid, or an actionable Error CallToolResult naming unknown and allowed keys.
        /// </summary>
        internal CallToolResult? ValidateAllowedKeys(
            IEnumerable<string> allowedSnakeKeys,
            string contextLabel,
            string? docUri = null)
        {
            if (_rawKeys.Count == 0) return null;

            var allowedList = allowedSnakeKeys.Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            var allowedNorm = allowedList.Select(NormalizeKey).ToHashSet(StringComparer.OrdinalIgnoreCase);
            var unknown = _rawKeys.Where(k => !allowedNorm.Contains(NormalizeKey(k))).ToArray();
            if (unknown.Length == 0) return null;

            var allowedText = allowedList.Length > 0
                ? string.Join(", ", allowedList)
                : "(none — this resource/action takes no extra options)";
            var docHint = string.IsNullOrWhiteSpace(docUri)
                ? ""
                : $" Read {docUri} (or call read_instruction) for full details.";

            return McpToolResults.Error(
                $"Unknown option/payload key(s) for {contextLabel}: {string.Join(", ", unknown)}.",
                $"Allowed keys: {allowedText}.{docHint}");
        }

        internal string GetString(string key, string defaultValue = "")
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s ?? defaultValue;
            return node.ToJsonString();
        }

        internal string? GetNullableString(string key, string? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s;
            return node.ToJsonString();
        }

        internal string GetJsonString(string key, string defaultValue = "")
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s ?? defaultValue;
            return node.ToJsonString();
        }

        internal int GetInt(string key, int defaultValue)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<int>(out var i)) return i;
                if (v.TryGetValue<long>(out var l)) return (int)l;
                if (v.TryGetValue<string>(out var s) && int.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Option '{key}' must be an integer.");
        }

        internal long? GetNullableLong(string key, long? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<long>(out var l)) return l;
                if (v.TryGetValue<int>(out var i)) return i;
                if (v.TryGetValue<string>(out var s) && long.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Option '{key}' must be an integer.");
        }

        internal double? GetNullableDouble(string key, double? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<double>(out var d)) return d;
                if (v.TryGetValue<string>(out var s) && double.TryParse(s, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Option '{key}' must be a number.");
        }

        internal bool GetBool(string key, bool defaultValue)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<bool>(out var b)) return b;
                if (v.TryGetValue<string>(out var s) && bool.TryParse(s, out var parsed)) return parsed;
            }
            throw new ArgumentException($"Option '{key}' must be a boolean.");
        }

        internal bool? GetNullableBool(string key, bool? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            return GetBool(key, false);
        }

        internal string[]? GetStringArray(string key)
        {
            if (!TryGetNode(key, out var node) || node == null) return null;
            if (node is JsonArray arr)
                return arr.Select(item => item is JsonValue v && v.TryGetValue<string>(out var s) ? s : item?.ToJsonString() ?? "").ToArray();
            if (node is JsonValue sv && sv.TryGetValue<string>(out var single) && !string.IsNullOrWhiteSpace(single))
                return [single];
            throw new ArgumentException($"Option '{key}' must be an array of strings.");
        }

        internal JsonElement? GetJsonElement(string key)
        {
            if (!TryGetNode(key, out var node) || node == null) return null;
            return JsonSerializer.SerializeToElement(node);
        }

        private bool TryGetNode(string key, out JsonNode? node)
        {
            if (_byNormalizedKey.TryGetValue(NormalizeKey(key), out var entry))
            {
                node = entry.Value;
                return true;
            }
            node = null;
            return false;
        }
    }
}
