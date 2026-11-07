using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow
{
    /// <summary>
    /// Extracts the user-authored business rule logic from Dataverse's XAML. A business
    /// rule is one or more ConditionSequence blocks; each block evaluates its conditions
    /// (GetEntityProperty + Evaluate* activities, resolved through the shared symbol
    /// model) and carries ConditionBranch Then/Else composites holding the designer
    /// action steps (SetVisibility, SetRequired, SetAttributeValue, ...).
    /// </summary>
    internal static class BusinessRuleXamlDecompiler
    {
        private static readonly Regex StepName = new(
            @"^(Condition|SetVisibility|SetRequired|SetAttributeValue|SetDefaultValue|SetDisplayMode|ShowError|ShowRecommendation|LockField|UnlockField)Step\d+",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);
        private static readonly Regex AnyStepName = new(@"^(?<kind>[A-Za-z][A-Za-z0-9]*)Step(?<number>\d+)", RegexOptions.Compiled | RegexOptions.IgnoreCase);

        public static void Decompile(string xaml, BusinessRuleDetailEntry entry, IOrganizationService orgService)
        {
            if (string.IsNullOrWhiteSpace(xaml))
            {
                entry.XamlParseStatus = "no xaml";
                return;
            }

            try
            {
                var document = XDocument.Parse(xaml, LoadOptions.None);
                var root = document.Root;
                if (root == null)
                {
                    entry.XamlParseStatus = "invalid xaml";
                    return;
                }

                var resolver = new WorkflowMetadataResolver(orgService);
                var symbols = WorkflowXamlDecompiler.BuildSymbols(root, resolver);
                entry.Steps = BuildSteps(root, symbols, resolver);
                var issues = BuildParseIssues(root, entry.Steps);
                entry.ParseIssues = issues.Count > 0 ? issues : null;
                entry.XamlParseStatus = issues.Count == 0 ? "complete" : "partial";
            }
            catch (Exception ex) when (ex is System.Xml.XmlException || ex is InvalidOperationException)
            {
                entry.XamlParseStatus = "parse error: " + ex.Message;
            }
        }

        private static List<WorkflowStepNode> BuildSteps(XElement root, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            var sequences = root.Descendants()
                .Where(e => Local(e) == "ActivityReference")
                .Where(e => ((string)e.Attribute("AssemblyQualifiedName") ?? "").Contains(".ConditionSequence,", StringComparison.Ordinal))
                .Where(e => StepName.IsMatch((string)e.Attribute("DisplayName") ?? ""))
                .OrderBy(e => DocumentOrder(root, e))
                .ToList();

            var roots = new List<WorkflowStepNode>();
            foreach (var sequence in sequences)
            {
                var displayName = (string)sequence.Attribute("DisplayName");
                var node = new WorkflowStepNode
                {
                    StepType = "Condition",
                    Name = StripStepPrefix(displayName),
                    SourceDisplayName = displayName,
                    SourceActivityType = Local(sequence)
                };
                if (bool.TryParse(Argument(sequence, "Wait"), out var waitEnabled))
                    node.WaitEnabled = waitEnabled;

                var branchElements = sequence.Descendants()
                    .Where(IsConditionBranch)
                    .OrderBy(e => DocumentOrder(root, e))
                    .ToList();
                if (branchElements.Count > 0)
                {
                    node.Branches = new List<WorkflowConditionBranch>(branchElements.Count);
                    var hasConditionalBranch = false;
                    foreach (var branchElement in branchElements)
                    {
                        var rawCondition = Argument(branchElement, "Condition");
                        var expression = WorkflowXamlDecompiler.ResolveDeep(rawCondition, symbols);
                        var isElse = string.IsNullOrWhiteSpace(rawCondition) ||
                            string.Equals(expression?.Trim().Trim('[', ']'), "True", StringComparison.OrdinalIgnoreCase);
                        var branchType = isElse ? "Else" : hasConditionalBranch ? "ElseIf" : "If";
                        if (!isElse) hasConditionalBranch = true;
                        var branch = new WorkflowConditionBranch
                        {
                            BranchType = branchType,
                            SourceDisplayName = (string)branchElement.Attribute("DisplayName"),
                            ConditionExpression = isElse ? null : expression,
                            ConditionExpressionAst = isElse ? null : WorkflowExpressionParser.Parse(expression),
                            RawConditionExpression = rawCondition,
                            IsDefault = isElse
                        };
                        branch.Steps = ReadActions(branchElement, symbols, resolver);
                        node.Branches.Add(branch);
                    }
                }
                roots.Add(node);
            }
            WorkflowXamlDecompiler.NumberNodes(roots, "");
            return roots;
        }

        /// <summary>
        /// Reads the designer action steps of a ConditionBranch: each action is a
        /// Sequence (or composite activity) named "&lt;Kind&gt;StepN: label" wrapping the
        /// client activity that carries the action attributes plus value plumbing.
        /// </summary>
        private static List<WorkflowStepNode> ReadActions(XElement branchElement, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            var actions = branchElement.Descendants()
                .Where(e => !IsConditionBranch(e) && StepName.IsMatch((string)e.Attribute("DisplayName") ?? ""))
                .Where(e => Local(e) == "Sequence" || Local(e) == "ActivityReference")
                .OrderBy(e => DocumentOrder(branchElement, e))
                .ToList();
            if (actions.Count == 0) return new List<WorkflowStepNode>();

            var nodes = new List<WorkflowStepNode>(actions.Count);
            foreach (var action in actions)
            {
                var displayName = (string)action.Attribute("DisplayName");
                var kind = StepName.Match(displayName).Groups[1].Value;
                var clientActivity = action.DescendantsAndSelf()
                    .FirstOrDefault(d => d != action && string.Equals(Local(d), kind, StringComparison.OrdinalIgnoreCase))
                    ?? action.DescendantsAndSelf().FirstOrDefault(d => d != action && Local(d) == "SetEntityProperty");

                var node = new WorkflowStepNode
                {
                    StepType = kind,
                    Name = StripStepPrefix(displayName),
                    SourceDisplayName = displayName,
                    SourceActivityType = clientActivity != null ? Local(clientActivity) : Local(action)
                };

                if (kind.Equals("SetAttributeValue", StringComparison.OrdinalIgnoreCase) ||
                    kind.Equals("SetDefaultValue", StringComparison.OrdinalIgnoreCase))
                    node.Assignments = ReadAssignments(action, clientActivity, symbols, resolver);
                else
                    node.Arguments = ReadControlArguments(kind, clientActivity, symbols);

                nodes.Add(node);
            }
            return nodes;
        }

        private static List<WorkflowFieldAssignment> ReadAssignments(XElement action, XElement clientActivity, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            var setProperty = action.Descendants().Where(e => Local(e) == "SetEntityProperty").FirstOrDefault();
            var field = (string)setProperty?.Attribute("Attribute");
            if (string.IsNullOrWhiteSpace(field)) return new List<WorkflowFieldAssignment>();
            var entityName = (string)setProperty.Attribute("EntityName");
            if (string.IsNullOrWhiteSpace(entityName))
                entityName = (string)clientActivity?.Attribute("EntityName");
            var rawValue = (string)setProperty.Attribute("Value");
            var value = resolver.FormatValue(entityName, field, WorkflowXamlDecompiler.ResolveDeep(rawValue, symbols));
            return new List<WorkflowFieldAssignment>
            {
                new WorkflowFieldAssignment
                {
                    Field = field,
                    EntityName = entityName,
                    RawValueExpression = rawValue,
                    Value = value,
                    ValueExpressionAst = WorkflowExpressionParser.Parse(value)
                }
            };
        }

        private static List<WorkflowArgument> ReadControlArguments(string kind, XElement clientActivity, Dictionary<string, string> symbols)
        {
            var names = kind.ToUpperInvariant() switch
            {
                "SETVISIBILITY" => new[] { "ControlId", "IsVisible" },
                "SETREQUIRED" => new[] { "ControlId", "Required" },
                "SETDISPLAYMODE" => new[] { "ControlId", "IsReadOnly" },
                "LOCKFIELD" or "UNLOCKFIELD" => new[] { "ControlId" },
                "SHOWERROR" or "SHOWRECOMMENDATION" => new[] { "Message" },
                _ => Array.Empty<string>()
            };
            if (names.Length == 0) return null;
            var arguments = names
                .Select(name => new WorkflowArgument
                {
                    Name = name,
                    Direction = "In",
                    RawExpression = (string)clientActivity?.Attribute(name),
                    Expression = WorkflowXamlDecompiler.ResolveDeep((string)clientActivity?.Attribute(name), symbols)
                })
                .Where(a => a.RawExpression != null)
                .ToList();
            return arguments.Count > 0 ? arguments : null;
        }

        private static List<WorkflowParseIssue> BuildParseIssues(XElement root, List<WorkflowStepNode> steps)
        {
            var issues = new List<WorkflowParseIssue>();
            var parsedStepKeys = Flatten(steps).Select(n => StepIdentity(n.SourceDisplayName)).Where(n => n != null)
                .ToHashSet(StringComparer.OrdinalIgnoreCase);
            foreach (var element in root.Descendants().Where(e => !string.IsNullOrWhiteSpace((string)e.Attribute("DisplayName"))))
            {
                var displayName = (string)element.Attribute("DisplayName");
                var match = AnyStepName.Match(displayName);
                if (!match.Success || match.Groups["kind"].Value.Equals("ConditionBranch", StringComparison.OrdinalIgnoreCase)) continue;
                if (!StepName.IsMatch(displayName))
                    AddParseIssue(issues, "UNRECOGNIZED_STEP", displayName, Local(element), "A displayed business rule step was not recognized and may be missing from steps.", element.ToString(SaveOptions.DisableFormatting));
                else if (!parsedStepKeys.Contains(StepIdentity(displayName)))
                    AddParseIssue(issues, "UNPARSED_STEP_ELEMENT", displayName, Local(element), "A displayed business rule step was not included in the parsed step tree.", element.ToString(SaveOptions.DisableFormatting));
            }

            foreach (var node in Flatten(steps))
            {
                foreach (var assignment in node.Assignments?.AsEnumerable() ?? Enumerable.Empty<WorkflowFieldAssignment>())
                {
                    if (assignment.Value?.Contains("New Object()", StringComparison.Ordinal) == true)
                        AddParseIssue(issues, "UNRESOLVED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "An assignment value still contains an unparsed Dataverse object-array value.");
                    if (WorkflowXamlDecompiler.HasUnsupportedExpression(assignment.ValueExpressionAst))
                        AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "An assignment expression is preserved as raw text because its structure is not recognized.");
                }
                foreach (var branch in node.Branches?.AsEnumerable() ?? Enumerable.Empty<WorkflowConditionBranch>())
                {
                    if (branch.ConditionExpression?.Contains("New Object()", StringComparison.Ordinal) == true)
                        AddParseIssue(issues, "UNRESOLVED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "A condition still contains an unparsed Dataverse object-array value.");
                    if (WorkflowXamlDecompiler.HasUnsupportedExpression(branch.ConditionExpressionAst))
                        AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "A condition contains an unresolved expression or an operator whose semantics are not verified; inspect the structured expression and source XAML.");
                }
            }

            return issues;
        }

        private static void AddParseIssue(List<WorkflowParseIssue> issues, string code, string displayName, string activityType, string message, string rawXaml = null)
        {
            if (issues.Any(i => i.Code == code && i.SourceDisplayName == displayName)) return;
            issues.Add(new WorkflowParseIssue { Code = code, SourceDisplayName = displayName, SourceActivityType = activityType, RawXaml = rawXaml, Message = message });
        }

        private static string StepIdentity(string displayName)
        {
            var match = AnyStepName.Match(displayName ?? "");
            return match.Success ? match.Groups["kind"].Value + "Step" + match.Groups["number"].Value : null;
        }

        private static bool IsConditionBranch(XElement e) => Local(e) == "ActivityReference" &&
            ((string)e.Attribute("AssemblyQualifiedName") ?? "").Contains(".ConditionBranch,", StringComparison.Ordinal);

        private static string Argument(XElement activity, string key) => activity.Elements()
            .Where(e => Local(e).EndsWith("Arguments", StringComparison.Ordinal)).Descendants()
            .Where(e => e.Attribute(XamlNamespace + "Key")?.Value == key).Select(e => e.Value.Trim()).FirstOrDefault();

        private static string StripStepPrefix(string name) => Regex.Replace(
            name ?? "",
            @"^(?:Condition|SetVisibility|SetRequired|SetAttributeValue|SetDefaultValue|SetDisplayMode|ShowError|ShowRecommendation|LockField|UnlockField)Step\d+\s*:?\s*",
            "",
            RegexOptions.IgnoreCase).Trim();

        private static IEnumerable<WorkflowStepNode> Flatten(IEnumerable<WorkflowStepNode> nodes)
        {
            foreach (var node in nodes)
            {
                yield return node;
                if (node.Steps != null)
                    foreach (var child in Flatten(node.Steps)) yield return child;
                if (node.Branches != null)
                    foreach (var branch in node.Branches)
                        foreach (var child in Flatten(branch.Steps)) yield return child;
            }
        }

        private static string Local(XElement e) => e.Name.LocalName;
        private static int DocumentOrder(XElement root, XElement element) => root.DescendantsAndSelf().TakeWhile(x => x != element).Count();
        private static XNamespace XamlNamespace = "http://schemas.microsoft.com/winfx/2006/xaml";
    }
}
