using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow
{
    internal static class WorkflowExpressionParser
    {
        public static WorkflowExpressionNode Parse(string expression)
        {
            if (string.IsNullOrWhiteSpace(expression)) return null;
            var source = expression.Trim();
            var text = StripOuterParentheses(source);

            foreach (var logicalOperator in new[] { "OR", "AND" })
            {
                var parts = SplitTopLevelKeyword(text, logicalOperator);
                if (parts.Count > 1)
                    return new WorkflowExpressionNode
                    {
                        Kind = "logical",
                        Operator = logicalOperator,
                        Arguments = parts.Select(Parse).ToList()
                    };
            }

            foreach (var (operatorText, normalized) in new[]
            {
                (" is not null", "notNull"), (" is null", "isNull"), (" begins with ", "beginsWith"),
                (" ends with ", "endsWith"), (" contains ", "contains"), (" >= ", "greaterThanOrEqual"),
                (" <= ", "lessThanOrEqual"), (" != ", "notEqual"), (" = ", "equal"),
                (" > ", "greaterThan"), (" < ", "lessThan")
            })
            {
                var index = FindTopLevel(text, operatorText);
                if (index < 0) continue;
                var right = text.Substring(index + operatorText.Length).Trim();
                return new WorkflowExpressionNode
                {
                    Kind = "comparison",
                    Operator = normalized,
                    Arguments = new List<WorkflowExpressionNode> { Parse(text.Substring(0, index)), Parse(right) }.Where(x => x != null).ToList()
                };
            }

            var optionPattern = @"^\[?(?<label>.*):(?<value>-?\d+)\]?$";
            var option = Regex.Match(text, optionPattern);
            if (option.Success)
                return new WorkflowExpressionNode { Kind = "choice", Label = option.Groups["label"].Value, Value = option.Groups["value"].Value };
            var booleanOption = Regex.Match(text, @"^\[?(?<label>.*):(?<value>true|false)\]?$", RegexOptions.IgnoreCase);
            if (booleanOption.Success)
                return new WorkflowExpressionNode { Kind = "choice", Label = booleanOption.Groups["label"].Value, Value = booleanOption.Groups["value"].Value.ToLowerInvariant(), DataType = "boolean" };

            var reference = Regex.Match(text, @"^(?<entity>[A-Za-z_][A-Za-z0-9_]*):\[(?<name>.*):(?<id>[0-9a-fA-F-]{36})\]$");
            if (reference.Success)
                return new WorkflowExpressionNode
                {
                    Kind = "entityReference",
                    EntityName = reference.Groups["entity"].Value,
                    Label = reference.Groups["name"].Value,
                    Id = reference.Groups["id"].Value
                };

            if (text.StartsWith("\"") && text.EndsWith("\""))
                return new WorkflowExpressionNode { Kind = "literal", DataType = "string", Value = text.Substring(1, text.Length - 2).Replace("\"\"", "\"") };
            if (string.Equals(text, "CurrentDateTime", StringComparison.OrdinalIgnoreCase))
                return new WorkflowExpressionNode { Kind = "currentDateTime", DataType = "dateTime" };
            if (bool.TryParse(text, out var boolean))
                return new WorkflowExpressionNode { Kind = "literal", DataType = "boolean", Value = boolean.ToString().ToLowerInvariant() };
            if (string.Equals(text, "null", StringComparison.OrdinalIgnoreCase))
                return new WorkflowExpressionNode { Kind = "literal", DataType = "null", Value = "null" };
            if (decimal.TryParse(text, NumberStyles.Number, CultureInfo.InvariantCulture, out _))
                return new WorkflowExpressionNode { Kind = "literal", DataType = "number", Value = text };

            var attribute = Regex.Match(text, @"^(?<entity>[A-Za-z_][A-Za-z0-9_]*)\.(?<attribute>[A-Za-z_][A-Za-z0-9_]*)$");
            if (attribute.Success)
                return new WorkflowExpressionNode
                {
                    Kind = "attribute",
                    EntityName = attribute.Groups["entity"].Value,
                    AttributeName = attribute.Groups["attribute"].Value
                };

            var call = Regex.Match(text, @"^(?<name>[A-Za-z_][A-Za-z0-9_]*)\((?<arguments>.*)\)$", RegexOptions.Singleline);
            if (call.Success)
            {
                var name = call.Groups["name"].Value;
                var args = SplitTopLevel(call.Groups["arguments"].Value, ',').Select(Parse).Where(x => x != null).ToList();
                return new WorkflowExpressionNode
                {
                    Kind = name.Equals("Add", StringComparison.OrdinalIgnoreCase) ? "concatenate" : "function",
                    Operator = name,
                    Arguments = args
                };
            }

            var stepOutputPattern = @"^\[?(?<name>[A-Za-z_][A-Za-z0-9_]*Step\d+(?:_[A-Za-z0-9]+)*)\]?$";
            var stepOutput = Regex.Match(text, stepOutputPattern);
            if (stepOutput.Success)
                return new WorkflowExpressionNode { Kind = "stepOutput", Value = stepOutput.Groups["name"].Value };
            if (Regex.IsMatch(text, @"^[A-Za-z_][A-Za-z0-9_]*$"))
                return new WorkflowExpressionNode { Kind = "variable", Value = text };

            return new WorkflowExpressionNode { Kind = "raw", Source = source };
        }

        private static string StripOuterParentheses(string text)
        {
            while (text.Length >= 2 && text[0] == '(' && text[^1] == ')' && FindMatchingClose(text, 0) == text.Length - 1)
                text = text.Substring(1, text.Length - 2).Trim();
            return text;
        }

        private static int FindMatchingClose(string text, int start)
        {
            var depth = 0;
            var inString = false;
            for (var i = start; i < text.Length; i++)
            {
                if (text[i] == '"')
                {
                    if (inString && i + 1 < text.Length && text[i + 1] == '"') { i++; continue; }
                    inString = !inString;
                    continue;
                }
                if (inString) continue;
                if (text[i] == '(') depth++;
                else if (text[i] == ')' && --depth == 0) return i;
            }
            return -1;
        }

        private static List<string> SplitTopLevelKeyword(string text, string keyword)
        {
            var parts = new List<string>();
            var start = 0;
            var index = 0;
            while ((index = FindTopLevel(text.Substring(start), " " + keyword + " ")) >= 0)
            {
                var absolute = start + index;
                parts.Add(text.Substring(start, absolute - start).Trim());
                start = absolute + keyword.Length + 2;
            }
            if (parts.Count == 0) return parts;
            parts.Add(text.Substring(start).Trim());
            return parts;
        }

        private static int FindTopLevel(string text, string token)
        {
            var depth = 0;
            var inString = false;
            for (var i = 0; i <= text.Length - token.Length; i++)
            {
                if (text[i] == '"')
                {
                    if (inString && i + 1 < text.Length && text[i + 1] == '"') { i++; continue; }
                    inString = !inString;
                }
                if (inString) continue;
                if (depth == 0 && text.AsSpan(i).StartsWith(token.AsSpan(), StringComparison.OrdinalIgnoreCase)) return i;
                if (text[i] == '(' || text[i] == '[') depth++;
                else if (text[i] == ')' || text[i] == ']') depth--;
            }
            return -1;
        }

        private static IEnumerable<string> SplitTopLevel(string text, char separator)
        {
            var start = 0;
            var depth = 0;
            var inString = false;
            for (var i = 0; i < text.Length; i++)
            {
                if (text[i] == '"')
                {
                    if (inString && i + 1 < text.Length && text[i + 1] == '"') { i++; continue; }
                    inString = !inString;
                    continue;
                }
                if (inString) continue;
                if (text[i] == '(' || text[i] == '[' || text[i] == '{') depth++;
                else if (text[i] == ')' || text[i] == ']' || text[i] == '}') depth--;
                else if (text[i] == separator && depth == 0)
                {
                    yield return text.Substring(start, i - start).Trim();
                    start = i + 1;
                }
            }
            yield return text.Substring(start).Trim();
        }
    }
}
