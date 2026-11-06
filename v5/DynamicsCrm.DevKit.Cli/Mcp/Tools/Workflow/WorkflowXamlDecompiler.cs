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
    /// Extracts the user-authored workflow steps from Dataverse's WF XAML. Internal
    /// Evaluate*/GetEntityProperty activities are folded into expressions where possible.
    /// </summary>
    internal static class WorkflowXamlDecompiler
    {
        private static readonly XNamespace Xaml = "http://schemas.microsoft.com/winfx/2006/xaml";
        private static readonly Regex StepName = new(@"^(Stage|Condition|Create|Update|Assign|SetState|SendEmail|StopWorkflow|ChildWorkflow|CustomActivity|InvokeSdkMessage|Wait|Delete|Associate|Disassociate)Step\d+", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        private static readonly Regex AnyStepName = new(@"^(?<kind>[A-Za-z][A-Za-z0-9]*)Step(?<number>\d+)", RegexOptions.Compiled | RegexOptions.IgnoreCase);

        public static void Decompile(string xaml, WorkflowEntry entry)
            => Decompile(xaml, entry, null);

        public static void Decompile(string xaml, WorkflowEntry entry, IOrganizationService orgService)
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
                var symbols = BuildSymbols(root, resolver);
                entry.Steps = BuildSteps(root, symbols, resolver);
                entry.Dependencies = BuildDependencies(root, entry.Steps);
                entry.ParseIssues = BuildParseIssues(root, entry.Steps);
                entry.XamlParseStatus = entry.ParseIssues.Count == 0 ? "complete" : "partial";
            }
            catch (Exception ex) when (ex is System.Xml.XmlException || ex is InvalidOperationException)
            {
                entry.XamlParseStatus = "parse error: " + ex.Message;
            }
        }

        private static Dictionary<string, string> BuildSymbols(XElement root, WorkflowMetadataResolver resolver)
        {
            var symbols = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var property in root.Descendants().Where(e => Local(e) == "GetEntityProperty"))
            {
                var variable = property.Attribute("Value")?.Value;
                var entity = property.Attribute("EntityName")?.Value;
                var field = property.Attribute("Attribute")?.Value;
                if (!string.IsNullOrWhiteSpace(variable) && !string.IsNullOrWhiteSpace(field))
                    symbols[NormalizeVariable(variable)] = string.IsNullOrWhiteSpace(entity) ? field : entity + "." + field;
            }

            foreach (var activity in root.Descendants().Where(e => Local(e) == "ActivityReference"))
            {
                var assembly = activity.Attribute("AssemblyQualifiedName")?.Value ?? "";
                if (!assembly.Contains("EvaluateExpression", StringComparison.Ordinal)) continue;
                var result = Argument(activity, "Result");
                if (string.IsNullOrWhiteSpace(result)) continue;
                var parameters = Argument(activity, "Parameters");
                var op = Argument(activity, "ExpressionOperator");
                var expression = ParseExpression(parameters, op, symbols, resolver);
                symbols[NormalizeVariable(result)] = expression;
            }

            foreach (var activity in root.Descendants().Where(e => Local(e) == "ActivityReference"))
            {
                var assembly = activity.Attribute("AssemblyQualifiedName")?.Value ?? "";
                if (!assembly.Contains("ConvertCrmXrmTypes", StringComparison.Ordinal)) continue;
                var result = Argument(activity, "Result");
                if (string.IsNullOrWhiteSpace(result)) continue;
                symbols[NormalizeVariable(result)] = ResolveDeep(Argument(activity, "Value"), symbols);
            }

            foreach (var activity in root.Descendants().Where(e => Local(e) == "ActivityReference"))
            {
                var assembly = activity.Attribute("AssemblyQualifiedName")?.Value ?? "";
                if (!assembly.Contains("EvaluateCondition", StringComparison.Ordinal)) continue;
                var result = Argument(activity, "Result");
                if (string.IsNullOrWhiteSpace(result)) continue;
                var operand = Resolve(Argument(activity, "Operand"), symbols);
                var op = Argument(activity, "ConditionOperator") ?? "is";
                var parameters = ParseConditionParameters(Argument(activity, "Parameters"), symbols, resolver);
                var condition = FormatCondition(operand, op, parameters);
                symbols[NormalizeVariable(result)] = condition;
            }

            foreach (var activity in root.Descendants().Where(e => Local(e) == "ActivityReference"))
            {
                var assembly = activity.Attribute("AssemblyQualifiedName")?.Value ?? "";
                if (!assembly.Contains("EvaluateLogicalCondition", StringComparison.Ordinal)) continue;
                var result = Argument(activity, "Result");
                if (string.IsNullOrWhiteSpace(result)) continue;
                var left = Resolve(Argument(activity, "LeftOperand"), symbols);
                var right = Resolve(Argument(activity, "RightOperand"), symbols);
                var op = Argument(activity, "LogicalOperator") ?? "And";
                symbols[NormalizeVariable(result)] = "(" + left + " " + op.ToUpperInvariant() + " " + right + ")";
            }
            return symbols;
        }

        private static List<WorkflowStepNode> BuildSteps(XElement root, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            var candidates = root.Descendants()
                .Select(e => new { Element = e, Name = (string)e.Attribute("DisplayName") })
                .Where(x => !string.IsNullOrWhiteSpace(x.Name) && StepName.IsMatch(x.Name))
                .Where(x => IsUserStepElement(x.Element, x.Name))
                .GroupBy(x => x.Name, StringComparer.Ordinal)
                .Select(g => g.OrderBy(x => StepPriority(x.Element)).First())
                .OrderBy(x => DocumentOrder(root, x.Element))
                .ToList();

            var roots = new List<WorkflowStepNode>();
            var nodeByElement = new Dictionary<XElement, WorkflowStepNode>();
            var stepElements = new HashSet<XElement>(candidates.Select(x => x.Element));
            var branchByElement = new Dictionary<XElement, WorkflowConditionBranch>();
            foreach (var candidate in candidates)
            {
                var element = candidate.Element;
                var name = candidate.Name;
                var kind = StepName.Match(name).Groups[1].Value;
                var node = new WorkflowStepNode
                {
                    StepType = NormalizeKind(kind, element),
                    Name = StripStepPrefix(name),
                    SourceDisplayName = name,
                    SourceActivityType = Local(element),
                    EntityName = FindEntityName(element, kind),
                    Target = FindTarget(element, kind)
                };

                if (kind.Equals("Condition", StringComparison.OrdinalIgnoreCase))
                {
                    var ownedBranches = element.Descendants()
                        .Where(IsConditionBranch)
                        .Where(b => b.Ancestors().FirstOrDefault(a => stepElements.Contains(a) &&
                            StepName.Match((string)a.Attribute("DisplayName") ?? "").Groups[1].Value.Equals("Condition", StringComparison.OrdinalIgnoreCase)) == element)
                        .OrderBy(b => DocumentOrder(root, b))
                        .ToList();
                    if (ownedBranches.Count > 0)
                    {
                        node.Branches = new List<WorkflowConditionBranch>(ownedBranches.Count);
                        var hasConditionalBranch = false;
                        foreach (var branchElement in ownedBranches)
                        {
                            var rawCondition = Argument(branchElement, "Condition");
                            var expression = Resolve(rawCondition, symbols);
                            var isElse = string.IsNullOrWhiteSpace(rawCondition) ||
                                string.Equals(expression?.Trim().Trim('[', ']'), "True", StringComparison.OrdinalIgnoreCase);
                            var branchType = isElse ? "Else" : hasConditionalBranch ? "ElseIf" : "If";
                            if (!isElse) hasConditionalBranch = true;
                            var branch = new WorkflowConditionBranch
                            {
                                BranchType = branchType,
                                ConditionExpression = isElse ? null : expression,
                                ConditionExpressionAst = isElse ? null : WorkflowExpressionParser.Parse(expression),
                                RawConditionExpression = rawCondition,
                                IsDefault = isElse
                            };
                            node.Branches.Add(branch);
                            branchByElement[branchElement] = branch;
                        }
                    }
                }

                var assignments = element.DescendantsAndSelf().Where(e => Local(e) == "SetEntityProperty")
                    .Where(e => e.AncestorsAndSelf().FirstOrDefault(stepElements.Contains) == element)
                    .Select(e => new WorkflowFieldAssignment
                    {
                        Field = (string)e.Attribute("Attribute"),
                        EntityName = (string)e.Attribute("EntityName") ?? node.EntityName,
                        TargetExpression = node.Target,
                        RawValueExpression = (string)e.Attribute("Value"),
                        Value = resolver.FormatValue((string)e.Attribute("EntityName") ?? node.EntityName,
                            (string)e.Attribute("Attribute"), ResolveDeep((string)e.Attribute("Value"), symbols))
                    })
                    .Where(a => !string.IsNullOrWhiteSpace(a.Field)).ToList();
                if (assignments.Count > 0)
                {
                    foreach (var assignment in assignments)
                        assignment.ValueExpressionAst = WorkflowExpressionParser.Parse(assignment.Value);
                    node.Assignments = assignments;
                }

                if (node.StepType == "InvokeAction")
                {
                    var invoke = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "InvokeSdkMessageActivity");
                    if (invoke != null)
                    {
                        node.ActionName = (string)invoke.Attribute("SdkMessageName");
                        node.ActionId = (string)invoke.Attribute("SdkMessageId");
                        node.Expression = node.ActionName;
                        node.Arguments = ReadArguments(invoke, symbols);
                    }
                }
                else if (node.StepType == "StartChildWorkflow")
                {
                    var child = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "StartChildWorkflow");
                    if (child != null)
                    {
                        node.ChildWorkflowName = resolver.GetChildWorkflowName((string)child.Attribute("WorkflowId"));
                        if (string.IsNullOrWhiteSpace(node.ChildWorkflowName))
                            node.ChildWorkflowName = ChildWorkflowNameFromDisplayName(node.Name);
                        node.Name = node.ChildWorkflowName ?? node.Name;
                        node.Expression = node.ChildWorkflowName;
                    }
                }
                else if (node.StepType == "StopWorkflow")
                {
                    var terminate = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "TerminateWorkflow");
                    if (terminate != null)
                    {
                        node.ExceptionExpression = (string)terminate.Attribute("Exception");
                        node.RawMessageExpression = (string)terminate.Attribute("Reason");
                        node.Message = ResolveDeep(node.RawMessageExpression, symbols);
                        if (node.Message == "\"\"") node.Message = "";
                        node.MessageExpressionAst = WorkflowExpressionParser.Parse(node.Message);
                        var statusMatch = Regex.Match(node.ExceptionExpression ?? "", @"OperationStatus\.(?<status>[A-Za-z]+)");
                        if (statusMatch.Success) node.Status = statusMatch.Groups["status"].Value;
                    }
                }
                else if (node.StepType == "Assign")
                {
                    var assign = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "AssignEntity");
                    if (assign != null)
                    {
                        node.OwnerExpression = (string)assign.Attribute("Owner");
                        node.Owner = ResolveDeep(node.OwnerExpression, symbols);
                        node.OwnerReference = WorkflowExpressionParser.Parse(node.Owner);
                    }
                }
                else if (node.StepType == "SetState")
                {
                    var setState = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "SetState");
                    if (setState != null)
                    {
                        node.StateCode = ReadOptionSetValue(setState, "State");
                        node.StatusCode = ReadOptionSetValue(setState, "Status");
                    }
                }
                else if (node.StepType == "CustomActivity")
                {
                    var activity = element.DescendantsAndSelf().FirstOrDefault(e => Local(e) == "ActivityReference" &&
                        (((string)e.Attribute("AssemblyQualifiedName") ?? "").Contains(", Version=")) &&
                        !(((string)e.Attribute("AssemblyQualifiedName") ?? "").Contains("Microsoft.Crm.Workflow.Activities", StringComparison.Ordinal)));
                    node.Expression = activity?.Attribute("AssemblyQualifiedName")?.Value;
                    if (activity != null) node.Arguments = ReadArguments(activity, symbols);
                }

                nodeByElement[element] = node;
                var parent = element.Ancestors().FirstOrDefault(nodeByElement.ContainsKey);
                var parentBranch = parent != null && nodeByElement[parent].StepType == "Condition"
                    ? element.Ancestors().FirstOrDefault(branchByElement.ContainsKey)
                    : null;
                if (parentBranch != null) branchByElement[parentBranch].Steps.Add(node);
                else if (parent == null) roots.Add(node);
                else
                {
                    nodeByElement[parent].Steps ??= new List<WorkflowStepNode>();
                    nodeByElement[parent].Steps.Add(node);
                }
            }
            NumberNodes(roots, "");
            return roots;
        }

        private static WorkflowDependencies BuildDependencies(XElement root, List<WorkflowStepNode> steps)
        {
            var result = new WorkflowDependencies();
            foreach (var property in root.Descendants().Where(e => Local(e) == "GetEntityProperty"))
            {
                var field = (string)property.Attribute("Attribute");
                var entity = (string)property.Attribute("EntityName");
                if (!string.IsNullOrWhiteSpace(field) && !string.IsNullOrWhiteSpace(entity))
                    AddUnique(result.ReadFields, entity + "." + field);
            }

            foreach (var node in Flatten(steps).Where(n => new[] { "Create", "Update", "Assign", "SetState", "SendEmail", "Delete" }.Contains(n.StepType)))
            {
                var operationName = node.StepType;
                var entityName = node.EntityName ?? (operationName == "SendEmail" ? "email" : null);
                if (string.IsNullOrWhiteSpace(entityName)) continue;
                var operationLabel = operationName;
                var write = result.WrittenEntities.FirstOrDefault(w => w.EntityName == entityName && w.Operation == operationLabel);
                if (write == null)
                {
                    write = new WorkflowWrittenEntity { EntityName = entityName, Operation = operationLabel, TargetExpression = node.Target };
                    result.WrittenEntities.Add(write);
                }
                if (node.Assignments != null)
                    foreach (var assignment in node.Assignments) AddUnique(write.Fields, assignment.Field);
                if (operationName == "SetState") { AddUnique(write.Fields, "statecode"); AddUnique(write.Fields, "statuscode"); }
                if (operationName == "Assign") AddUnique(write.Fields, "ownerid");
            }

            foreach (var activity in root.Descendants().Where(e => Local(e) == "ActivityReference"))
            {
                var assembly = (string)activity.Attribute("AssemblyQualifiedName") ?? "";
                var display = (string)activity.Attribute("DisplayName") ?? "";
                if (display.StartsWith("CustomActivityStep", StringComparison.Ordinal) && !assembly.Contains("Microsoft.Crm.Workflow.Activities", StringComparison.Ordinal))
                    AddUnique(result.CustomActivities, assembly);
            }
            foreach (var child in Flatten(steps).Where(n => n.StepType == "StartChildWorkflow"))
                AddUnique(result.ChildWorkflows, child.Expression);
            foreach (var action in root.Descendants().Where(e => Local(e) == "InvokeSdkMessageActivity"))
                AddUnique(result.InvokedActions, (string)action.Attribute("SdkMessageName"));
            return result;
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
                    AddParseIssue(issues, "UNRECOGNIZED_STEP", displayName, Local(element), "A displayed workflow step was not recognized and may be missing from steps.", element.ToString(SaveOptions.DisableFormatting));
                else if (!parsedStepKeys.Contains(StepIdentity(displayName)))
                    AddParseIssue(issues, "UNPARSED_STEP_ELEMENT", displayName, Local(element), "A displayed workflow step was not included in the parsed step tree.", element.ToString(SaveOptions.DisableFormatting));
            }

            foreach (var node in Flatten(steps))
            {
                if (node.StepType == "CustomActivity")
                    AddParseIssue(issues, "OPAQUE_CUSTOM_ACTIVITY", node.SourceDisplayName, node.SourceActivityType,
                        "The XAML identifies this custom workflow activity, but its implementation is outside the workflow definition and must be inspected separately.");
                else if (new[] { "Wait", "Delete", "Associate", "Disassociate" }.Contains(node.StepType))
                    AddParseIssue(issues, "UNSUPPORTED_STEP_SEMANTICS", node.SourceDisplayName, node.SourceActivityType,
                        "This step is recognized, but its full execution semantics are not yet represented in the structured step object.",
                        root.Descendants().FirstOrDefault(e => Local(e) == node.SourceActivityType && (string)e.Attribute("DisplayName") == node.SourceDisplayName)?.ToString(SaveOptions.DisableFormatting));
                if (node.StepType == "SetState" && (!node.StateCode.HasValue || !node.StatusCode.HasValue))
                    AddParseIssue(issues, "UNRESOLVED_STATE", node.SourceDisplayName, node.SourceActivityType,
                        "The state or status value could not be resolved from the workflow XAML.");
                if (node.OwnerExpression != null && HasUnsupportedExpression(node.OwnerReference))
                    AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                        "The assigned owner expression is preserved as raw text because its structure is not recognized.");

                if (node.Expression?.Contains("New Object()", StringComparison.Ordinal) == true)
                    AddParseIssue(issues, "UNRESOLVED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                        "An expression still contains an unparsed Dataverse object-array value.");
                foreach (var assignment in node.Assignments?.AsEnumerable() ?? Enumerable.Empty<WorkflowFieldAssignment>())
                {
                    if (assignment.Value?.Contains("New Object()", StringComparison.Ordinal) == true)
                        AddParseIssue(issues, "UNRESOLVED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "An assignment value still contains an unparsed Dataverse object-array value.");
                    if (HasUnsupportedExpression(assignment.ValueExpressionAst))
                        AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "An assignment expression is preserved as raw text because its structure is not recognized.");
                }
                foreach (var branch in node.Branches?.AsEnumerable() ?? Enumerable.Empty<WorkflowConditionBranch>())
                {
                    if (branch.ConditionExpression?.Contains("New Object()", StringComparison.Ordinal) == true)
                        AddParseIssue(issues, "UNRESOLVED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "A condition still contains an unparsed Dataverse object-array value.");
                    if (HasUnsupportedExpression(branch.ConditionExpressionAst))
                        AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "A condition is preserved as raw text because its structure is not recognized.");
                }
                foreach (var argument in node.Arguments?.AsEnumerable() ?? Enumerable.Empty<WorkflowArgument>())
                    if (HasUnsupportedExpression(argument.ExpressionAst))
                        AddParseIssue(issues, "UNSUPPORTED_EXPRESSION", node.SourceDisplayName, node.SourceActivityType,
                            "An invocation argument is preserved as raw text because its structure is not recognized.");
            }

            return issues;
        }

        private static bool HasUnsupportedExpression(WorkflowExpressionNode expression)
        {
            if (expression == null) return false;
            if (expression.Kind == "raw") return true;
            if (expression.Kind == "function" && !new[] { "SelectFirstNonNull", "CreateCrmType" }.Contains(expression.Operator, StringComparer.OrdinalIgnoreCase)) return true;
            return (expression.Arguments?.AsEnumerable() ?? Enumerable.Empty<WorkflowExpressionNode>()).Any(HasUnsupportedExpression);
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

        private static int? ReadOptionSetValue(XElement setState, string statePart)
        {
            var value = setState.Elements().FirstOrDefault(e => Local(e).EndsWith("." + statePart, StringComparison.Ordinal))?
                .DescendantsAndSelf().Where(e => Local(e) == "OptionSetValue").Select(e => (string)e.Attribute("Value")).FirstOrDefault();
            return int.TryParse(value, out var result) ? result : null;
        }

        private static void NumberNodes(List<WorkflowStepNode> nodes, string prefix)
        {
            for (var i = 0; i < nodes.Count; i++)
            {
                nodes[i].StepNumber = string.IsNullOrEmpty(prefix) ? (i + 1).ToString() : prefix + "." + (i + 1);
                var childIndex = 0;
                if (nodes[i].Branches != null)
                {
                    foreach (var branch in nodes[i].Branches)
                        NumberNodes(branch.Steps, nodes[i].StepNumber, ref childIndex);
                }
                if (nodes[i].Steps != null) NumberNodes(nodes[i].Steps, nodes[i].StepNumber, ref childIndex);
            }
        }

        private static void NumberNodes(List<WorkflowStepNode> nodes, string prefix, ref int siblingIndex)
        {
            foreach (var node in nodes)
            {
                node.StepNumber = prefix + "." + (++siblingIndex);
                var childIndex = 0;
                if (node.Branches != null)
                {
                    foreach (var branch in node.Branches)
                        NumberNodes(branch.Steps, node.StepNumber, ref childIndex);
                }
                if (node.Steps != null) NumberNodes(node.Steps, node.StepNumber, ref childIndex);
            }
        }

        private static bool IsUserStepElement(XElement e, string name)
        {
            var kind = StepName.Match(name).Groups[1].Value;
            var local = Local(e);
            if (kind.Equals("Stage", StringComparison.OrdinalIgnoreCase))
                return local == "ActivityReference" || local == "Sequence";
            if (kind.Equals("Condition", StringComparison.OrdinalIgnoreCase) ||
                kind.Equals("CustomActivity", StringComparison.OrdinalIgnoreCase) || kind.Equals("InvokeSdkMessage", StringComparison.OrdinalIgnoreCase))
                return local == "ActivityReference";
            return local == "Sequence" || local == "ActivityReference" || local == "StartChildWorkflow" || local == "AssignEntity" || local == "SetState" || local == "TerminateWorkflow";
        }

        private static bool IsConditionBranch(XElement e) => Local(e) == "ActivityReference" &&
            ((string)e.Attribute("AssemblyQualifiedName") ?? "").Contains(".ConditionBranch,", StringComparison.Ordinal);

        private static int StepPriority(XElement e) => Local(e) switch { "Sequence" => 0, "StartChildWorkflow" => 1, "AssignEntity" => 1, "SetState" => 1, "ActivityReference" => 2, _ => 3 };
        private static string NormalizeKind(string kind, XElement element)
        {
            if (kind.Equals("Condition", StringComparison.OrdinalIgnoreCase)) return "Condition";
            if (kind.Equals("InvokeSdkMessage", StringComparison.OrdinalIgnoreCase)) return "InvokeAction";
            if (kind.Equals("ChildWorkflow", StringComparison.OrdinalIgnoreCase)) return "StartChildWorkflow";
            return kind;
        }
        private static string FindEntityName(XElement e, string kind)
        {
            var preferred = kind switch
            {
                "Create" => "CreateEntity", "Update" => "UpdateEntity", "Assign" => "AssignEntity",
                "SetState" => "SetState", "SendEmail" => "SendEmail", "StartChildWorkflow" => "StartChildWorkflow", _ => null
            };
            var entity = preferred == null ? null : e.DescendantsAndSelf().Where(x => Local(x) == preferred).Select(x => (string)x.Attribute("EntityName")).FirstOrDefault(x => !string.IsNullOrWhiteSpace(x));
            return entity ?? e.DescendantsAndSelf().Select(x => (string)x.Attribute("EntityName")).FirstOrDefault(x => !string.IsNullOrWhiteSpace(x));
        }
        private static string FindTarget(XElement e, string kind)
        {
            var preferred = kind switch
            {
                "Create" => "CreateEntity", "Update" => "UpdateEntity", "Assign" => "AssignEntity",
                "SetState" => "SetState", "SendEmail" => "SendEmail", "StartChildWorkflow" => "StartChildWorkflow", _ => null
            };
            var target = preferred == null ? null : e.DescendantsAndSelf().Where(x => Local(x) == preferred).Select(x => (string)x.Attribute("Entity") ?? (string)x.Attribute("EntityId")).FirstOrDefault(x => !string.IsNullOrWhiteSpace(x));
            return target ?? (kind.Equals("Stage", StringComparison.OrdinalIgnoreCase) || kind.Equals("Condition", StringComparison.OrdinalIgnoreCase)
                ? "[InputEntities(\"primaryEntity\")]" : null);
        }
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
        private static string StripStepPrefix(string name) => Regex.Replace(name, @"^(?:Stage|Condition|Create|Update|Assign|SetState|SendEmail|StopWorkflow|ChildWorkflow|CustomActivity|InvokeSdkMessage|Wait|Delete|Associate|Disassociate)Step\d+\s*:?\s*", "", RegexOptions.IgnoreCase).Trim();
        private static string Argument(XElement activity, string key) => activity.Elements().Where(e => Local(e).EndsWith("Arguments", StringComparison.Ordinal)).Descendants()
            .Where(e => e.Attribute(Xaml + "Key")?.Value == key).Select(e => e.Value.Trim()).FirstOrDefault();

        private static string Resolve(string value, Dictionary<string, string> symbols)
        {
            if (string.IsNullOrWhiteSpace(value)) return value;
            var token = NormalizeVariable(value);
            return symbols.TryGetValue(token, out var resolved) ? resolved : value.Trim();
        }
        private static string ResolveDeep(string value, Dictionary<string, string> symbols)
        {
            if (string.IsNullOrWhiteSpace(value)) return value;
            var resolved = value.Trim();
            if (resolved.StartsWith("[") && resolved.EndsWith("]")) resolved = resolved.Substring(1, resolved.Length - 2);
            var directCast = Regex.Match(resolved, @"^DirectCast\((?<value>.*),\s*[^,]+\)$");
            if (directCast.Success) resolved = directCast.Groups["value"].Value.Trim();
            resolved = Regex.Replace(resolved, @"\[([^\[\]]+)\]", match => Resolve(match.Value, symbols));
            return Regex.Replace(resolved, @"(?<![A-Za-z0-9_])([A-Za-z_][A-Za-z0-9_]*Step\d+(?:_[A-Za-z0-9]+)*)(?![A-Za-z0-9_])", match =>
                symbols.TryGetValue(NormalizeVariable(match.Value), out var expression) ? expression : match.Value);
        }

        private static string ChildWorkflowNameFromDisplayName(string displayName)
        {
            if (string.IsNullOrWhiteSpace(displayName)) return null;
            var separator = displayName.IndexOf(':');
            var name = separator >= 0 ? displayName.Substring(separator + 1).Trim() : displayName.Trim();
            return name.StartsWith("Start child:", StringComparison.OrdinalIgnoreCase)
                ? name.Substring("Start child:".Length).Trim()
                : name;
        }

        private static List<WorkflowArgument> ReadArguments(XElement activity, Dictionary<string, string> symbols)
        {
            var arguments = activity.Elements().Where(e => Local(e).EndsWith("Arguments", StringComparison.Ordinal))
                .SelectMany(e => e.Elements())
                .Where(e => e.Attribute(Xaml + "Key") != null)
                .Select(e => new WorkflowArgument
                {
                    Name = e.Attribute(Xaml + "Key")?.Value,
                    Direction = Local(e).StartsWith("OutArgument", StringComparison.Ordinal) ? "Out" : "In",
                    Type = (string)e.Attribute("{http://schemas.microsoft.com/winfx/2006/xaml}TypeArguments"),
                    RawExpression = e.Value.Trim(),
                    Expression = ResolveDeep(e.Value.Trim(), symbols)
                }).ToList();
            if (arguments.Count == 0) return null;
            foreach (var argument in arguments)
                argument.ExpressionAst = WorkflowExpressionParser.Parse(argument.Expression);

            var required = activity.Elements().Where(e => Local(e).EndsWith("Properties", StringComparison.Ordinal))
                .SelectMany(e => e.Descendants())
                .Where(e => (string)e.Attribute(Xaml + "Key") is string key && key.EndsWith("#InArgumentRequired", StringComparison.Ordinal))
                .Select(e => e.Value.Trim()).ToHashSet(StringComparer.OrdinalIgnoreCase);
            foreach (var argument in arguments)
                argument.IsRequired = required.Contains(argument.Name);
            return arguments;
        }
        private static string NormalizeVariable(string value) => (value ?? "").Trim().Trim('[', ']');
        private static string ParseExpression(string parameters, string op, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            if (string.IsNullOrWhiteSpace(parameters)) return op ?? "";
            if (string.Equals(op, "RetrieveCurrentTime", StringComparison.OrdinalIgnoreCase)) return "CurrentDateTime";
            var value = parameters.Trim();
            var quoted = Regex.Matches(value, "\\\"((?:[^\\\"]|\\\\.)*)\\\"").Cast<Match>().Select(m => m.Groups[1].Value).ToList();
            var isEntityReference = value.Contains("WorkflowPropertyType.EntityReference", StringComparison.Ordinal);
            if (isEntityReference && quoted.Count >= 2)
            {
                var referenceTokens = Regex.Matches(value, @"[A-Za-z_][A-Za-z0-9_]*Step\d+(?:_\d+)*").Cast<Match>().ToList();
                var id = referenceTokens.Count > 0 ? Resolve("[" + referenceTokens[0].Value + "]", symbols).Trim('"') : "";
                return resolver.FormatLookup(quoted[0], quoted[1], id);
            }
            if (isEntityReference)
            {
                var referenceToken = Regex.Match(value, @"[A-Za-z_][A-Za-z0-9_]*Step\d+(?:_\d+)*");
                if (referenceToken.Success)
                    return Resolve("[" + referenceToken.Value + "]", symbols);
            }
            if (quoted.Count > 0 && (op == "CreateCrmType" || op == null)) return "\"" + System.Net.WebUtility.HtmlDecode(quoted[0]) + "\"";
            var refs = Regex.Matches(value, @"[A-Za-z_][A-Za-z0-9_]*Step\d+(?:_\d+)*").Cast<Match>().Select(m => Resolve("[" + m.Value + "]", symbols)).Distinct().ToList();
            if (refs.Count > 0) return op + "(" + string.Join(", ", refs) + ")";
            return value;
        }

        private static string ParseConditionParameters(string parameters, Dictionary<string, string> symbols, WorkflowMetadataResolver resolver)
        {
            if (string.IsNullOrWhiteSpace(parameters)) return null;
            if (parameters.Contains("WorkflowPropertyType.EntityReference", StringComparison.Ordinal))
                return ParseExpression(parameters, null, symbols, resolver);

            var value = parameters.Trim();
            var arrayStart = value.IndexOf("New Object()", StringComparison.Ordinal);
            if (arrayStart >= 0)
            {
                var open = value.IndexOf('{', arrayStart);
                var close = value.LastIndexOf('}');
                if (open >= 0 && close > open) value = value.Substring(open + 1, close - open - 1);
            }

            var values = SplitTopLevel(value, ',')
                .Select(item => ParseConditionValue(item.Trim(), symbols))
                .Where(item => item != null)
                .ToList();
            if (values.Count == 0) return null;
            return values.Count == 1 ? values[0] : "[" + string.Join(", ", values) + "]";
        }

        private static string ParseConditionValue(string value, Dictionary<string, string> symbols)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;
            var trimmed = value.Trim().Trim('[', ']');
            if (Regex.IsMatch(trimmed, @"^[A-Za-z_][A-Za-z0-9_]*Step\d+(?:_[A-Za-z0-9]+)*$"))
                return ResolveDeep("[" + trimmed + "]", symbols);
            if (trimmed.StartsWith("\"") && trimmed.EndsWith("\""))
                return "\"" + System.Net.WebUtility.HtmlDecode(trimmed.Substring(1, trimmed.Length - 2)) + "\"";
            if (bool.TryParse(trimmed, out var boolean)) return boolean.ToString().ToLowerInvariant();
            if (string.Equals(trimmed, "null", StringComparison.OrdinalIgnoreCase)) return "null";
            if (decimal.TryParse(trimmed, System.Globalization.NumberStyles.Number, System.Globalization.CultureInfo.InvariantCulture, out var number))
                return number.ToString(System.Globalization.CultureInfo.InvariantCulture);
            return ResolveDeep(value, symbols);
        }

        private static IEnumerable<string> SplitTopLevel(string value, char separator)
        {
            var start = 0;
            var depth = 0;
            var inString = false;
            for (var i = 0; i < value.Length; i++)
            {
                var current = value[i];
                if (current == '"' && (i == 0 || value[i - 1] != '\\'))
                {
                    if (inString && i + 1 < value.Length && value[i + 1] == '"') { i++; continue; }
                    inString = !inString;
                    continue;
                }
                if (inString) continue;
                if (current == '{' || current == '(' || current == '[') depth++;
                else if (current == '}' || current == ')' || current == ']') depth--;
                else if (current == separator && depth == 0)
                {
                    yield return value.Substring(start, i - start);
                    start = i + 1;
                }
            }
            yield return value.Substring(start);
        }
        private static string FormatCondition(string operand, string op, string parameters)
        {
            var normalized = op switch
            {
                "NotNull" => "is not null", "Null" => "is null", "Equal" => "=", "NotEqual" => "!=",
                "GreaterThan" => ">", "GreaterEqual" => ">=", "LessThan" => "<", "LessEqual" => "<=",
                "BeginsWith" => "begins with", "EndsWith" => "ends with", "Contains" => "contains", _ => op
            };
            if (op == "NotNull" || op == "Null") return operand + " " + normalized;
            var value = string.IsNullOrWhiteSpace(parameters) ? "?" : parameters;
            return operand + " " + normalized + " " + value;
        }
        private static void AddUnique(List<string> list, string value)
        {
            if (!string.IsNullOrWhiteSpace(value) && !list.Contains(value, StringComparer.OrdinalIgnoreCase)) list.Add(value);
        }
    }
}
