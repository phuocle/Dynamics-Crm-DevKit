using System;
using System.Linq;
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
        /// Special characters are removed; words are PascalCased and joined.
        /// </param>
        /// <param name="prefix">Publisher prefix without underscore, e.g. "new", "v4", "cr123".</param>
        /// <returns>
        /// A tuple of (SchemaName, LogicalName):
        ///   SchemaName = prefix + "_" + PascalCasedJoinedWords  (e.g. "new_HelloXinChao")
        ///   LogicalName = SchemaName.ToLowerInvariant()          (e.g. "new_helloxinchao")
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when input or prefix is null or empty.</exception>
        public static (string SchemaName, string LogicalName) Resolve(string input, string prefix)
        {
            if (string.IsNullOrWhiteSpace(input))
                throw new ArgumentException("Input cannot be null or empty.", nameof(input));
            if (string.IsNullOrWhiteSpace(prefix))
                throw new ArgumentException("Prefix cannot be null or empty.", nameof(prefix));

            // Step 1: Trim
            var trimmed = input.Trim();

            // Step 2: Remove special characters — keep letters, digits, and spaces
            var cleaned = Regex.Replace(trimmed, @"[^a-zA-Z0-9\s]", "");

            // Step 3: Split by whitespace
            var words = cleaned.Split(new[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries);

            if (words.Length == 0)
                throw new ArgumentException($"Input '{input}' contains no valid characters after cleaning.", nameof(input));

            // Step 4 & 5: PascalCase each word and join
            var joined = string.Join("_", words.Select(PascalCaseWord));

            // Step 6: SchemaName = prefix_JoinedPascalCase
            var schemaName = $"{prefix.Trim()}_{joined}";

            // Step 7: LogicalName = lowercase of SchemaName
            var logicalName = schemaName.ToLowerInvariant();

            return (schemaName, logicalName);
        }

        /// <summary>
        /// Converts a single word to PascalCase: upper-cases the first character, lower-cases the rest.
        /// </summary>
        private static string PascalCaseWord(string word)
        {
            if (word.Length == 0) return word;
            if (word.Length == 1) return word.ToUpperInvariant();
            return char.ToUpperInvariant(word[0]) + word.Substring(1);
        }
    }
}
