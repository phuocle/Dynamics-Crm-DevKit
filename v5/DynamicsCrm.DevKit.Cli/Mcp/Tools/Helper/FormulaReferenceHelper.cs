using System;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>Rewrites raw SDK formula references while cloning a formula column.</summary>
    internal static class FormulaReferenceHelper
    {
        // Match strings and comments as whole tokens so identifier rewrites leave them intact.
        private static readonly Regex PowerFxTokens = new(
            """//[^\r\n]*|/\*[\s\S]*?\*/|"(?:""|[^"])*"|'(?:''|[^'])*'|[\p{L}_][\p{L}\p{Nd}_]*""");

        public static string RewritePowerFxReferences(string formula, string sourceEntity, string targetEntity,
            string sourceAttribute, string targetAttribute, string sourcePrefix, string targetPrefix)
        {
            var remapPrefix = !string.IsNullOrEmpty(sourcePrefix) && !string.IsNullOrEmpty(targetPrefix) &&
                !sourcePrefix.Equals(targetPrefix, StringComparison.OrdinalIgnoreCase);
            return PowerFxTokens.Replace(formula, match =>
            {
                var token = match.Value;
                if (token[0] is '"' or '/')
                    return token;

                var quoted = token[0] == '\'';
                var identifier = quoted ? token[1..^1] : token;
                string replacement;
                if (identifier.Equals(sourceAttribute, StringComparison.OrdinalIgnoreCase))
                    replacement = targetAttribute;
                else if (identifier.Equals(sourceEntity, StringComparison.OrdinalIgnoreCase))
                    replacement = targetEntity;
                else if (remapPrefix && identifier.StartsWith(sourcePrefix, StringComparison.OrdinalIgnoreCase))
                    replacement = targetPrefix + identifier[sourcePrefix.Length..];
                else
                    return token;

                return quoted ? $"'{replacement}'" : replacement;
            });
        }

        public static string RewriteFormulaReferences(string formulaDefinition, string sourceEntityName,
            string targetEntityName, string sourceAttributeName, string targetAttributeName,
            Models.FormulaRelationshipMapping relationshipMapping = null)
        {
            if (string.IsNullOrWhiteSpace(formulaDefinition)) return formulaDefinition;

            var result = formulaDefinition;
            var detectedSource = sourceEntityName;

            if (string.IsNullOrWhiteSpace(detectedSource))
            {
                const string marker = "EntityName=\"";
                var start = result.IndexOf(marker, StringComparison.OrdinalIgnoreCase);
                if (start >= 0)
                {
                    start += marker.Length;
                    var end = result.IndexOf('"', start);
                    if (end > start) detectedSource = result.Substring(start, end - start);
                }
            }

            if (!string.IsNullOrWhiteSpace(detectedSource) &&
                !string.IsNullOrWhiteSpace(targetEntityName) &&
                !detectedSource.Equals(targetEntityName, StringComparison.OrdinalIgnoreCase))
            {
                result = ReplaceOrdinalIgnoreCase(result, $"relatedlinked_{detectedSource}_", $"relatedlinked_{targetEntityName}_");
                result = ReplaceOrdinalIgnoreCase(result, $".{detectedSource}_", $".{targetEntityName}_");
                result = ReplaceOrdinalIgnoreCase(result, $"EntityName=\"{detectedSource}\"", $"EntityName=\"{targetEntityName}\"");
                result = ReplaceOrdinalIgnoreCase(result, $"New Entity(&quot;{detectedSource}&quot;)", $"New Entity(&quot;{targetEntityName}&quot;)");
                result = ReplaceOrdinalIgnoreCase(result, $"New Entity(\"{detectedSource}\")", $"New Entity(\"{targetEntityName}\")");
            }

            if (!string.IsNullOrWhiteSpace(sourceAttributeName) &&
                !string.IsNullOrWhiteSpace(targetAttributeName) &&
                !sourceAttributeName.Equals(targetAttributeName, StringComparison.OrdinalIgnoreCase))
            {
                result = ReplaceOrdinalIgnoreCase(result, $"Attribute=\"{sourceAttributeName}\"", $"Attribute=\"{targetAttributeName}\"");
            }

            if (relationshipMapping != null)
            {
                result = ReplaceOrdinalIgnoreCase(result, relationshipMapping.SourceRelationshipName, relationshipMapping.TargetRelationshipName);
                result = ReplaceOrdinalIgnoreCase(result, relationshipMapping.SourceLookupAttribute, relationshipMapping.TargetLookupAttribute);
            }

            return result;
        }

        private static string ReplaceOrdinalIgnoreCase(string input, string oldValue, string newValue)
        {
            if (string.IsNullOrEmpty(input) || string.IsNullOrEmpty(oldValue) || newValue == null) return input;

            var startIndex = 0;
            while (true)
            {
                var index = input.IndexOf(oldValue, startIndex, StringComparison.OrdinalIgnoreCase);
                if (index < 0) return input;
                input = input.Substring(0, index) + newValue + input.Substring(index + oldValue.Length);
                startIndex = index + newValue.Length;
            }
        }
    }
}
