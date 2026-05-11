using System;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Shared
{
    /// <summary>
    /// Utility for deriving Dataverse SchemaName and LogicalName from a human-readable input and publisher prefix.
    /// Used by MCP tools (upsert_table, upsert_column), VSIX Wizards, CLI TaskGenerator, and any component
    /// that needs to normalize Dataverse names consistently.
    /// </summary>
    public static class DataverseNamer
    {
        /// <summary>
        /// Derives SchemaName and LogicalName from a human-readable input string and publisher prefix.
        /// </summary>
        /// <param name="input">
        /// Human-readable name, e.g. "Hello Xin Chao", "sale order", "My-Table #1".
        /// Special characters and whitespace are removed while preserving the user-entered casing.
        /// </param>
        /// <param name="prefix">Publisher prefix without underscore, e.g. "v4", "cr123", "myorg". Must NOT be "new" (Dataverse default publisher).</param>
        /// <returns>
        /// A tuple of (SchemaName, LogicalName):
        ///   SchemaName = prefix + "_" + JoinedWordsPreservingCase (e.g. "v4_PONumber")
        ///   LogicalName = SchemaName.ToLowerInvariant()          (e.g. "v4_ponumber")
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when input or prefix is null or empty.</exception>
        /// <exception cref="InvalidOperationException">Thrown when prefix is "new" (Dataverse default publisher — layer-2 guard).</exception>
        public static (string SchemaName, string LogicalName) Resolve(string input, string prefix)
        {
            if (string.IsNullOrWhiteSpace(input))
                throw new ArgumentException("Input cannot be null or empty.", nameof(input));
            if (string.IsNullOrWhiteSpace(prefix))
                throw new ArgumentException("Prefix cannot be null or empty.", nameof(prefix));

            // Layer-2 safety guard: prefix "new" is the Dataverse default publisher prefix.
            // If this value reaches here it means the caller's prefix resolver failed silently.
            // Hard-stop so the AI / caller is forced to fix the upstream resolution instead of
            // accidentally creating entities/columns under the default publisher.
            if (prefix.Trim().ToLowerInvariant() == "new")
                throw new InvalidOperationException(
                    "[DataverseNamer] Prefix 'new' is the Dataverse default publisher prefix and MUST NOT be used " +
                    "for custom entities or columns. This indicates the solution resolver returned a fallback value. " +
                    "Provide a valid publisher prefix (e.g. 'cr123', 'v4', 'myorg') before proceeding.");

            // Step 1: Trim
            var trimmed = input.Trim();

            // Step 2: Remove special characters — keep letters, digits, and whitespace
            var cleaned = Regex.Replace(trimmed, @"[^a-zA-Z0-9\s]", "");

            // Step 3-5: Remove whitespace while preserving the user's casing.
            var joined = Regex.Replace(cleaned, @"\s+", "");

            if (joined.Length == 0)
                throw new ArgumentException($"Input '{input}' contains no valid characters after cleaning.", nameof(input));

            // Step 6: SchemaName = prefix_JoinedWordsPreservingCase
            var schemaName = $"{prefix.Trim()}_{joined}";

            // Step 7: LogicalName = lowercase of SchemaName
            var logicalName = schemaName.ToLowerInvariant();

            return (schemaName, logicalName);
        }
    }
}
