using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    internal sealed class McpConnectionConfigurationException : Exception
    {
        internal McpConnectionConfigurationException(string message) : base(message) { }
    }

    /// <summary>One process-lifetime copy. Connection fields never cascade between groups.</summary>
    internal sealed class McpConnectionSnapshot
    {
        private readonly Dictionary<string, string> _values;
        private readonly Dictionary<string, string> _aliases = new(StringComparer.OrdinalIgnoreCase);
        internal string FilePath { get; }
        internal string StartupEnvId { get; }
        internal IReadOnlyList<string> GroupIds { get; }
        internal IDictionary<string, string> CopyValues() => new Dictionary<string, string>(_values, StringComparer.OrdinalIgnoreCase);
        internal static bool IsAlias(string value) => value != null && Regex.IsMatch(value, "\\A[A-Za-z][A-Za-z0-9_-]*\\z");
        internal static bool IsSelector(string value) => ProjectEnvironment.IsValidGroupId(value) || IsAlias(value);
        internal static string Escape(string value) => (value ?? "").Replace("\r", "\\r").Replace("\n", "\\n").Replace("\t", "\\t");

        internal static McpConnectionSnapshot Load(McpCommandArgs args)
        {
            var path = ProjectEnvironment.ResolveFileFromJsonOrDirectory(args.JsonFile, args.CurrentDirectory);
            try { return new McpConnectionSnapshot(ProjectEnvironment.Read(path), args.Env, path); }
            catch (IOException) { throw new McpConnectionConfigurationException("Cannot read the project .env snapshot for connection discovery and policy."); }
            catch (UnauthorizedAccessException) { throw new McpConnectionConfigurationException("Cannot read the project .env snapshot for connection discovery and policy: access denied."); }
        }

        internal McpConnectionSnapshot(IDictionary<string, string> values, string selector = null, string filePath = null)
        {
            FilePath = filePath;
            _values = new Dictionary<string, string>(values, StringComparer.OrdinalIgnoreCase);
            var suffixes = ProjectEnvironment.ConnectionKeys.Select(k => k.Substring(7)).Concat(new[] { "ALIAS", "DRY_RUN", "AS_USER" }).ToHashSet(StringComparer.OrdinalIgnoreCase);
            var ids = new HashSet<string>(StringComparer.Ordinal);
            foreach (var key in _values.Keys)
            {
                if (!key.StartsWith("DEVKIT_", StringComparison.OrdinalIgnoreCase)) continue;
                var tail = key.Substring(7);
                if (suffixes.Contains(tail)) { ids.Add("default"); continue; }
                var split = tail.IndexOf('_');
                if (split > 0 && ProjectEnvironment.IsValidGroupId(tail.Substring(0, split)) && suffixes.Contains(tail.Substring(split + 1)))
                    ids.Add(tail.Substring(0, split));
            }
            var aliasKeys = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var id in ids.OrderBy(id => id == "default" ? 0 : id.Length).ThenBy(id => id, StringComparer.Ordinal))
            {
                var alias = Value(id, "ALIAS")?.Trim();
                var aliasKey = Key(id, "ALIAS");
                if (!string.IsNullOrEmpty(alias))
                {
                    if (alias.Equals("default", StringComparison.OrdinalIgnoreCase))
                        throw new McpConnectionConfigurationException($"{aliasKey} uses the reserved name 'default'. Choose another alias.");
                    if (!IsAlias(alias)) throw new McpConnectionConfigurationException($"Invalid {aliasKey} value '{Escape(alias)}' in the project .env. Aliases must start with a letter and use only letters, digits, '_' or '-'.");
                    if (aliasKeys.TryGetValue(alias, out var existing))
                        throw new McpConnectionConfigurationException($"Duplicate alias '{alias}' in the project .env ({existing}, {aliasKey}). Aliases must be unique.");
                    aliasKeys.Add(alias, aliasKey);
                    _aliases.Add(alias, id);
                }
                ParseDryRun(id);
            }
            StartupEnvId = selector == null || selector.Equals("default", StringComparison.OrdinalIgnoreCase) ? "default"
                : ProjectEnvironment.IsValidGroupId(selector) ? selector
                : _aliases.TryGetValue(selector, out var selected) ? selected
                : throw new McpConnectionConfigurationException($"Unknown connection group '{Escape(selector)}'. Configure its alias in the project .env or use a numeric group ID.");
            ids.Add(StartupEnvId);
            GroupIds = ids.OrderBy(id => id == "default" ? 0 : id.Length).ThenBy(id => id, StringComparer.Ordinal).ToArray();
        }

        internal static string Key(string id, string suffix) => id == "default" ? $"DEVKIT_{suffix}" : $"DEVKIT_{id}_{suffix}";
        internal string Value(string id, string suffix) => _values.TryGetValue(Key(id, suffix), out var value) ? value : null;
        internal string Alias(string id) => string.IsNullOrWhiteSpace(Value(id, "ALIAS")) ? null : Value(id, "ALIAS").Trim();
        internal string ResolveId(string selector)
        {
            if (string.IsNullOrWhiteSpace(selector)) return StartupEnvId;
            selector = selector.Trim();
            if (selector.Equals("default", StringComparison.OrdinalIgnoreCase)) selector = "default";
            if (GroupIds.Contains(selector)) return selector;
            return _aliases.TryGetValue(selector, out var id) ? id : null;
        }
        private bool? ParseDryRun(string id)
        {
            var value = Value(id, "DRY_RUN");
            if (value == null) return null;
            if (bool.TryParse(value.Trim(), out var parsed)) return parsed;
            throw new McpConnectionConfigurationException($"Invalid {Key(id, "DRY_RUN")} value '{Escape(value)}' in the project .env. Expected 'true' or 'false'.");
        }
        internal bool DryRun(string id, bool flag) => flag || (ParseDryRun(id) ?? ParseDryRun("default") ?? false);
        internal McpCommandArgs CreateGroupArgs(string id, bool dryRunFlag)
        {
            var args = new McpCommandArgs { Env = id == "default" ? null : id, DryRun = DryRun(id, dryRunFlag), AsUser = Value(id, "AS_USER")?.Trim(),
                EnvironmentSnapshotPath = FilePath,
                UsedEnvironmentFallback = true, UsedEnvironmentGroupFallback = id != "default", ResolvedConnectionSource = $"project .env ({(id == "default" ? "DEVKIT_*" : $"DEVKIT_{id}_*")})" };
            args.ResolveProjectEnvironmentDefaults(CopyValues(), args.Env);
            return args;
        }
    }
}
