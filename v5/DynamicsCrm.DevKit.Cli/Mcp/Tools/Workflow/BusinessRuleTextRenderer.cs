using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow
{
    /// <summary>
    /// Renders decompiled business rule steps as readable DSL text, mirroring the
    /// WorkflowTextRenderer style: one line per step, two-space indent per level.
    /// </summary>
    internal static class BusinessRuleTextRenderer
    {
        public static string Render(List<WorkflowStepNode> steps)
        {
            if (steps == null || steps.Count == 0) return null;
            var lines = new List<string>();
            foreach (var step in steps)
                WriteStep(step, 0, lines);
            return string.Join(Environment.NewLine, lines);
        }

        private static void WriteStep(WorkflowStepNode step, int indent, List<string> lines)
        {
            switch (step.StepType)
            {
                case "Condition":
                    WriteCondition(step, indent, lines);
                    return;

                case "SetVisibility":
                    var visible = BoolArgument(step, "IsVisible");
                    Add(lines, indent, visible == null
                        ? $"SET VISIBILITY {Control(step)} (visibility value unavailable)"
                        : visible == "true" ? $"SHOW {Control(step)}" : $"HIDE {Control(step)}");
                    return;

                case "SetRequired":
                    var required = BoolArgument(step, "Required");
                    Add(lines, indent, required == null
                        ? $"SET REQUIRED {Control(step)} (requirement value unavailable)"
                        : required == "true" ? $"SET REQUIRED {Control(step)}" : $"SET OPTIONAL {Control(step)}");
                    return;

                case "LockField":
                    Add(lines, indent, $"LOCK {Control(step)}");
                    return;

                case "UnlockField":
                    Add(lines, indent, $"UNLOCK {Control(step)}");
                    return;

                case "SetDisplayMode":
                    var readOnly = BoolArgument(step, "IsReadOnly");
                    Add(lines, indent, readOnly == null
                        ? $"SET DISPLAY MODE {Control(step)} (read-only value unavailable)"
                        : readOnly == "true" ? $"LOCK {Control(step)}" : $"UNLOCK {Control(step)}");
                    return;

                case "ShowError":
                    var error = Clean(step.Arguments?.FirstOrDefault(a => a.Name == "Message")?.Expression);
                    Add(lines, indent, error == null ? "SHOW ERROR (message unavailable)" : $"SHOW ERROR \"{error}\"");
                    return;

                case "ShowRecommendation":
                    var hint = Clean(step.Arguments?.FirstOrDefault(a => a.Name == "Message")?.Expression);
                    Add(lines, indent, hint == null ? "SHOW RECOMMENDATION (message unavailable)" : $"SHOW RECOMMENDATION \"{hint}\"");
                    return;

                case "SetAttributeValue":
                case "SetDefaultValue":
                    var prefix = step.StepType == "SetDefaultValue" ? "SET DEFAULT " : "SET ";
                    if (step.Assignments == null || step.Assignments.Count == 0)
                    {
                        Add(lines, indent, $"{prefix.TrimEnd()} {step.Name ?? "(field unavailable)"} (value unavailable)");
                        return;
                    }
                    foreach (var assignment in step.Assignments)
                    {
                        var field = string.IsNullOrWhiteSpace(assignment.EntityName)
                            ? assignment.Field
                            : $"{assignment.EntityName}.{assignment.Field}";
                        Add(lines, indent, $"{prefix}{field} TO {WorkflowTextRenderer.FormatExpression(assignment.ValueExpressionAst, assignment.Value)}");
                    }
                    return;

                default:
                    Add(lines, indent, $"{step.StepType?.ToUpperInvariant() ?? "STEP"} {step.Name ?? "(details unavailable)"}");
                    return;
            }
        }

        private static void WriteCondition(WorkflowStepNode step, int indent, List<string> lines)
        {
            if (step.Branches == null || step.Branches.Count == 0)
            {
                Add(lines, indent, $"CONDITION {step.Name ?? "(condition details unavailable)"}");
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
                var condition = branch.IsDefault ? "" : " " + WorkflowTextRenderer.FormatExpression(branch.ConditionExpressionAst, branch.ConditionExpression);
                Add(lines, indent, keyword + condition);
                foreach (var child in branch.Steps ?? new List<WorkflowStepNode>())
                    WriteStep(child, indent + 1, lines);
            }
        }

        private static string Control(WorkflowStepNode step) =>
            Clean(step.Arguments?.FirstOrDefault(a => a.Name == "ControlId")?.Expression) ?? "(control unavailable)";

        private static string BoolArgument(WorkflowStepNode step, string name)
        {
            var value = Clean(step.Arguments?.FirstOrDefault(a => a.Name == name)?.Expression);
            return value == null ? null : value.ToLowerInvariant();
        }

        private static string Clean(string text) => string.IsNullOrWhiteSpace(text)
            ? null
            : text.Replace("\r", "\\r").Replace("\n", "\\n").Trim();

        private static void Add(List<string> lines, int indent, string text) =>
            lines.Add(new string(' ', indent * 2) + text);
    }
}
