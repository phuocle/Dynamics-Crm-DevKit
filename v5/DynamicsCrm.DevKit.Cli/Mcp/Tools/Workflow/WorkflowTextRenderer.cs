using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow
{
    internal static class WorkflowTextRenderer
    {
        public static string Render(WorkflowEntry workflow)
        {
            if (workflow?.Steps == null || workflow.Steps.Count == 0) return null;
            var lines = new List<string>();
            foreach (var step in workflow.Steps)
                WriteStep(step, 0, lines);
            return string.Join(Environment.NewLine, lines);
        }

        private static void WriteStep(WorkflowStepNode step, int indent, List<string> lines)
        {
            switch (step.StepType)
            {
                case "Stage":
                    Add(lines, indent, $"STAGE {StripPrefix(step.Name, "Stage")}");
                    foreach (var child in step.Steps ?? new List<WorkflowStepNode>())
                        WriteStep(child, indent + 1, lines);
                    return;

                case "Condition":
                    WriteCondition(step, indent, lines);
                    return;

                case "Create":
                case "Update":
                    Add(lines, indent, $"{step.StepType.ToUpperInvariant()} {step.EntityName ?? step.Name}");
                    WriteAssignments(step, indent + 1, lines);
                    WriteChildren(step, indent, lines);
                    return;

                case "SendEmail":
                    Add(lines, indent, "SEND EMAIL");
                    WriteAssignments(step, indent + 1, lines);
                    WriteChildren(step, indent, lines);
                    return;

                case "Assign":
                    Add(lines, indent, $"ASSIGN {step.EntityName ?? "record"} TO {OwnerText(step)}");
                    return;

                case "CustomActivity":
                    Add(lines, indent, $"CALL CUSTOM ACTIVITY {ActivityName(step)}");
                    WriteArguments(step, indent + 1, lines);
                    return;

                case "InvokeAction":
                    Add(lines, indent, $"CALL CUSTOM ACTION {step.ActionName ?? step.Expression ?? step.Name}");
                    WriteArguments(step, indent + 1, lines);
                    return;

                case "StartChildWorkflow":
                    Add(lines, indent, $"START CHILD WORKFLOW {step.ChildWorkflowName ?? step.Name}");
                    return;

                case "StopWorkflow":
                    var stop = $"STOP WORKFLOW {step.Status ?? "(status unknown)"}";
                    if (!string.IsNullOrWhiteSpace(step.Message)) stop += $": {Clean(step.Message)}";
                    Add(lines, indent, stop);
                    return;

                case "SetState":
                    var state = $"SET STATE {step.EntityName ?? step.Name}";
                    if (step.StateCode.HasValue) state += $" statecode={step.StateCode.Value}";
                    if (step.StatusCode.HasValue) state += $" statuscode={step.StatusCode.Value}";
                    Add(lines, indent, state);
                    return;

                default:
                    Add(lines, indent, $"{step.StepType?.ToUpperInvariant() ?? "STEP"} {step.Name ?? step.Expression ?? "(details unavailable)"}");
                    WriteAssignments(step, indent + 1, lines);
                    WriteArguments(step, indent + 1, lines);
                    WriteChildren(step, indent, lines);
                    return;
            }
        }

        private static void WriteCondition(WorkflowStepNode step, int indent, List<string> lines)
        {
            if (step.Branches == null || step.Branches.Count == 0)
            {
                Add(lines, indent, $"CONDITION {step.Name ?? "(condition details unavailable)"}");
                WriteChildren(step, indent, lines);
                return;
            }

            foreach (var branch in step.Branches)
            {
                var keyword = branch.BranchType switch
                {
                    "Else" => "ELSE",
                    "ElseIf" => "ELSE IF",
                    _ => "IF"
                };
                var condition = branch.IsDefault ? "" : " " + FormatExpression(branch.ConditionExpressionAst, branch.ConditionExpression);
                Add(lines, indent, keyword + condition);
                foreach (var child in branch.Steps ?? new List<WorkflowStepNode>())
                    WriteStep(child, indent + 1, lines);
            }
        }

        private static void WriteAssignments(WorkflowStepNode step, int indent, List<string> lines)
        {
            foreach (var assignment in step.Assignments ?? new List<WorkflowFieldAssignment>())
            {
                var field = string.IsNullOrWhiteSpace(assignment.EntityName)
                    ? assignment.Field
                    : $"{assignment.EntityName}.{assignment.Field}";
                Add(lines, indent, $"SET {field} TO {FormatExpression(assignment.ValueExpressionAst, assignment.Value)}");
            }
        }

        private static void WriteArguments(WorkflowStepNode step, int indent, List<string> lines)
        {
            foreach (var argument in step.Arguments ?? new List<WorkflowArgument>())
            {
                var direction = argument.Direction?.Equals("Out", StringComparison.OrdinalIgnoreCase) == true ? "OUTPUT" : "INPUT";
                Add(lines, indent, $"{direction} {argument.Name} = {FormatExpression(argument.ExpressionAst, argument.Expression)}");
            }
        }

        private static void WriteChildren(WorkflowStepNode step, int indent, List<string> lines)
        {
            foreach (var child in step.Steps ?? new List<WorkflowStepNode>())
                WriteStep(child, indent, lines);
        }

        private static string FormatExpression(WorkflowExpressionNode node, string fallback)
        {
            if (node == null) return Clean(fallback) ?? "(value unavailable)";
            var args = node.Arguments ?? new List<WorkflowExpressionNode>();
            switch (node.Kind)
            {
                case "logical":
                    var logicalOperator = node.Operator?.ToUpperInvariant() ?? "AND";
                    return string.Join($" {logicalOperator} ", args.Select(arg =>
                    {
                        var formatted = FormatExpression(arg, null);
                        return arg.Kind == "logical" && !string.Equals(arg.Operator, node.Operator, StringComparison.OrdinalIgnoreCase)
                            ? $"({formatted})"
                            : formatted;
                    }));
                case "comparison":
                    var left = args.Count > 0 ? FormatExpression(args[0], null) : "(value unavailable)";
                    var right = args.Count > 1 ? FormatExpression(args[1], null) : null;
                    var comparison = node.Operator switch
                    {
                        "notNull" => "IS NOT NULL",
                        "isNull" => "IS NULL",
                        "beginsWith" => "BEGINS WITH",
                        "endsWith" => "ENDS WITH",
                        "contains" => "CONTAINS",
                        "equal" => "=",
                        "notEqual" => "!=",
                        "greaterThan" => ">",
                        "greaterThanOrEqual" => ">=",
                        "lessThan" => "<",
                        "lessThanOrEqual" => "<=",
                        _ => node.Operator ?? "?"
                    };
                    return right == null ? $"{left} {comparison}" : $"{left} {comparison} {right}";
                case "attribute": return $"{node.EntityName}.{node.AttributeName}";
                case "literal": return node.DataType == "string" ? $"\"{Escape(Clean(node.Value))}\"" : node.Value;
                case "currentDateTime": return "CURRENT DATE/TIME";
                case "choice": return string.IsNullOrWhiteSpace(node.Label) ? node.Value : $"{node.Label} (value {node.Value})";
                case "entityReference": return $"{node.Label} ({node.EntityName}, {node.Id})";
                case "concatenate": return "CONCATENATE: " + string.Join(" + ", args.Select(a => FormatExpression(a, null)));
                case "function":
                    var functionName = node.Operator == "SelectFirstNonNull" ? "FIRST NON-NULL VALUE OF" : (node.Operator ?? "FUNCTION").ToUpperInvariant();
                    return $"{functionName} {string.Join(", ", args.Select(a => FormatExpression(a, null)))}";
                case "stepOutput": return $"OUTPUT OF {node.Value}";
                case "variable": return node.Value;
                case "raw": return Clean(node.Source);
                default: return Clean(fallback) ?? Clean(node.Source) ?? node.Value ?? "(value unavailable)";
            }
        }

        private static string OwnerText(WorkflowStepNode step) => step.OwnerReference == null
            ? Clean(step.Owner) ?? "(owner unavailable)"
            : $"{step.OwnerReference.EntityName} {step.OwnerReference.Label} ({step.OwnerReference.Id})";

        private static string ActivityName(WorkflowStepNode step)
        {
            var name = StripPrefix(step.Name, "Call");
            if (!string.IsNullOrWhiteSpace(name)) return name;
            var typeName = step.Expression?.Split(',')[0].Split('.').LastOrDefault();
            return typeName ?? "(activity name unavailable)";
        }

        private static string StripPrefix(string text, string prefix) =>
            text?.StartsWith(prefix, StringComparison.OrdinalIgnoreCase) == true
                ? text.Substring(prefix.Length).Trim()
                : text;

        private static string Clean(string text) => string.IsNullOrWhiteSpace(text)
            ? null
            : text.Replace("\r", "\\r").Replace("\n", "\\n").Trim();

        private static string Escape(string text) => text?.Replace("\\", "\\\\").Replace("\"", "\\\"");

        private static void Add(List<string> lines, int indent, string text) =>
            lines.Add(new string(' ', indent * 2) + text);
    }
}
