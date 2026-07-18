using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>Rewrites raw SDK formula references while cloning a formula column.</summary>
    internal static class FormulaReferenceHelper
    {
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