using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class WorkflowTextRendererExtraCoverageTests
{
    private static WorkflowExpressionNode Attr(string entity, string attribute) =>
        new() { Kind = "attribute", EntityName = entity, AttributeName = attribute };

    private static WorkflowExpressionNode Lit(string value, string dataType = "string") =>
        new() { Kind = "literal", DataType = dataType, Value = value };

    private static WorkflowExpressionNode Compare(string op, params WorkflowExpressionNode[] args) =>
        new() { Kind = "comparison", Operator = op, Arguments = new List<WorkflowExpressionNode>(args) };

    private static WorkflowFieldAssignment Set(string field, WorkflowExpressionNode ast, string fallback = null) =>
        new() { Field = field, ValueExpressionAst = ast, Value = fallback };

    [TestMethod]
    public void Render_WaitNotEnabled_RendersWaitSemanticsUnresolvedWithBranchesAndChildren()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Wait",
                    Name = null,
                    Branches = new List<WorkflowConditionBranch>
                    {
                        new()
                        {
                            BranchType = "If",
                            ConditionExpressionAst = Compare("equal", Attr("account", "name"), Lit("D")),
                            Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Succeeded" } }
                        }
                    },
                    Steps = new List<WorkflowStepNode> { new() { StepType = "StartChildWorkflow", ChildWorkflowName = "Child" } }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "WAIT (unnamed) (wait semantics unresolved)");
        StringAssert.Contains(text, "CONDITION account.name = \"D\"");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
        StringAssert.Contains(text, "START CHILD WORKFLOW Child");
    }

    [TestMethod]
    public void Render_WaitEnabledWithoutBranches_RendersConditionDetailsUnavailable()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Wait",
                    WaitEnabled = true,
                    Steps = new List<WorkflowStepNode> { new() { StepType = "StartChildWorkflow", Name = "Child WF" } }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "WAIT (condition details unavailable)");
        StringAssert.Contains(text, "START CHILD WORKFLOW Child WF");
    }

    [TestMethod]
    public void Render_WaitAlternativeSelection_RendersWaitForOneOf()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Wait",
                    WaitEnabled = true,
                    WaitBranchSelection = "alternative",
                    Branches = new List<WorkflowConditionBranch>
                    {
                        new() { ConditionExpressionAst = Attr("task", "subject"), Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Succeeded" } } },
                        new() { ConditionExpression = "raw wait condition" }
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "WAIT FOR ONE OF:");
        StringAssert.Contains(text, "WHEN task.subject");
        StringAssert.Contains(text, "WHEN raw wait condition");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
    }

    [TestMethod]
    public void Render_WaitUntilBranches_DefaultRendersConditionUnavailable()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Wait",
                    WaitEnabled = true,
                    Branches = new List<WorkflowConditionBranch>
                    {
                        new() { IsDefault = true, Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Canceled" } } },
                        new() { ConditionExpressionAst = Compare("isNull", Attr("account", "emailaddress1")) }
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "WAIT UNTIL (condition unavailable)");
        StringAssert.Contains(text, "WAIT UNTIL account.emailaddress1 IS NULL");
        StringAssert.Contains(text, "STOP WORKFLOW Canceled");
    }

    [TestMethod]
    public void Render_SendEmail_RendersKeywordAssignmentsAndChildren()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "SendEmail",
                    Assignments = new List<WorkflowFieldAssignment> { Set("subject", Lit("Hello")) },
                    Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Succeeded" } }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "SEND EMAIL");
        StringAssert.Contains(text, "SET subject TO \"Hello\"");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
    }

    [TestMethod]
    public void Render_Assign_RendersOwnerVariantsAndTargetStepNumber()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Assign",
                    EntityName = "task",
                    TargetStepNumber = "3",
                    OwnerReference = new WorkflowExpressionNode { Kind = "entityReference", Label = "Owner Team", EntityName = "team", Id = "guid-1" }
                },
                new() { StepType = "Assign", Owner = "  previous owner \r\n " },
                new() { StepType = "Assign" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "ASSIGN task (created by step 3) TO team Owner Team (guid-1)");
        StringAssert.Contains(text, "ASSIGN record TO previous owner \\r\\n");
        StringAssert.Contains(text, "ASSIGN record TO (owner unavailable)");
    }

    [TestMethod]
    public void Render_CustomActivity_WithArgumentsAndNameFallbacks()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "CustomActivity",
                    Expression = "Dev.Namespace.Activity, Dev.Assembly",
                    Arguments = new List<WorkflowArgument>
                    {
                        new() { Name = "input", Direction = "In", ExpressionAst = Lit("v") },
                        new() { Name = "result", Direction = "Out", ExpressionAst = Lit("r") }
                    }
                },
                new() { StepType = "CustomActivity", Name = "Call My Activity" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "CALL CUSTOM ACTIVITY Dev.Namespace.Activity");
        StringAssert.Contains(text, "INPUT input = \"v\"");
        StringAssert.Contains(text, "OUTPUT result = \"r\"");
        StringAssert.Contains(text, "CALL CUSTOM ACTIVITY My Activity");
    }

    [TestMethod]
    public void Render_InvokeAction_FallsBackToExpressionThenName()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new() { StepType = "InvokeAction", Expression = "v4_RunReport" },
                new() { StepType = "InvokeAction", Name = "InvokeActionStep2" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "CALL CUSTOM ACTION v4_RunReport");
        StringAssert.Contains(text, "CALL CUSTOM ACTION InvokeActionStep2");
    }

    [TestMethod]
    public void Render_StartChildWorkflow_FallsBackToName()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode> { new() { StepType = "StartChildWorkflow", Name = "StartChildWorkflowStep1" } }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "START CHILD WORKFLOW StartChildWorkflowStep1");
    }

    [TestMethod]
    public void Render_StopWorkflow_UnknownStatusAppendsCleanedMessage()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new() { StepType = "StopWorkflow", Message = "reason:\r\nsecond line" },
                new() { StepType = "StopWorkflow", Status = "Succeeded" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "STOP WORKFLOW (status unknown): reason:\\r\\nsecond line");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
    }

    [TestMethod]
    public void Render_SetState_RendersNameFallbackAndStateCodes()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new() { StepType = "SetState", EntityName = "account", StateCode = 1, StatusCode = 2 },
                new() { StepType = "SetState", Name = "SetStateStep2", TargetStepNumber = "5" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "SET STATE account statecode=1 statuscode=2");
        StringAssert.Contains(text, "SET STATE SetStateStep2 (created by step 5)");
    }

    [TestMethod]
    public void Render_UnknownStepType_UsesDefaultCaseWithFallbacks()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Mystery",
                    Assignments = new List<WorkflowFieldAssignment> { Set("field", Lit("v")) },
                    Arguments = new List<WorkflowArgument> { new() { Name = "arg", Direction = "In", ExpressionAst = Lit("x") } },
                    Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Succeeded" } }
                },
                new() { StepType = null, Expression = "raw expression" },
                new() { StepType = null }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "MYSTERY (details unavailable)");
        StringAssert.Contains(text, "SET field TO \"v\"");
        StringAssert.Contains(text, "INPUT arg = \"x\"");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
        StringAssert.Contains(text, "STEP raw expression");
        StringAssert.Contains(text, "STEP (details unavailable)");
    }

    [TestMethod]
    public void Render_ConditionWithoutBranches_UsesStepName()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new() { StepType = "Condition", Name = null, Steps = new List<WorkflowStepNode> { new() { StepType = "StopWorkflow", Status = "Succeeded" } } }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "CONDITION (condition details unavailable)");
        StringAssert.Contains(text, "STOP WORKFLOW Succeeded");
    }

    [TestMethod]
    public void Render_LogicalExpressions_DefaultsToAndAndParsesDifferingNestedOperators()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Condition",
                    Branches = new List<WorkflowConditionBranch>
                    {
                        new()
                        {
                            ConditionExpressionAst = new WorkflowExpressionNode
                            {
                                Kind = "logical",
                                Operator = "or",
                                Arguments = new List<WorkflowExpressionNode>
                                {
                                    Compare("equal", Attr("account", "name"), Lit("A")),
                                    new WorkflowExpressionNode
                                    {
                                        Kind = "logical",
                                        Operator = "and",
                                        Arguments = new List<WorkflowExpressionNode> { Compare("notNull", Attr("account", "revenue")), Compare("notNull", Attr("account", "employees")) }
                                    }
                                }
                            }
                        },
                        new()
                        {
                            BranchType = "ElseIf",
                            ConditionExpressionAst = new WorkflowExpressionNode
                            {
                                Kind = "logical",
                                Arguments = new List<WorkflowExpressionNode> { Attr("account", "name") }
                            }
                        }
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "IF account.name = \"A\" OR (account.revenue IS NOT NULL AND account.employees IS NOT NULL)");
        StringAssert.Contains(text, "ELSE IF account.name");
    }

    [TestMethod]
    public void Render_ComparisonOperators_RendersAllKeywordsAndUnaryForms()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Condition",
                    Branches = new List<WorkflowConditionBranch>
                    {
                        new() { ConditionExpressionAst = Compare("endsWith", Attr("account", "name"), Lit("x")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("contains", Attr("account", "name"), Lit("x")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("equal", Attr("account", "name"), Lit("x")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("notEqual", Attr("account", "name"), Lit("x")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("greaterThan", Attr("account", "revenue"), Lit("5", "decimal")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("greaterThanOrEqual", Attr("account", "revenue"), Lit("5", "decimal")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("lessThan", Attr("account", "revenue"), Lit("5", "decimal")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("lessThanOrEqual", Attr("account", "revenue"), Lit("5", "decimal")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = Compare("customOperator", Attr("account", "name")) },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = new WorkflowExpressionNode { Kind = "comparison", Arguments = new List<WorkflowExpressionNode>() } },
                        new() { BranchType = "ElseIf", ConditionExpressionAst = new WorkflowExpressionNode { Kind = "comparison", Operator = "isNull" } }
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "IF account.name ENDS WITH \"x\"");
        StringAssert.Contains(text, "ELSE IF account.name CONTAINS \"x\"");
        StringAssert.Contains(text, "ELSE IF account.name = \"x\"");
        StringAssert.Contains(text, "ELSE IF account.name != \"x\"");
        StringAssert.Contains(text, "ELSE IF account.revenue > 5");
        StringAssert.Contains(text, "ELSE IF account.revenue >= 5");
        StringAssert.Contains(text, "ELSE IF account.revenue < 5");
        StringAssert.Contains(text, "ELSE IF account.revenue <= 5");
        StringAssert.Contains(text, "ELSE IF account.name customOperator");
        StringAssert.Contains(text, "ELSE IF (value unavailable) ?");
        StringAssert.Contains(text, "ELSE IF (value unavailable) IS NULL");
    }

    [TestMethod]
    public void Render_FunctionExpressions_RendersTimeSpanActivityCountAndFallbacks()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Create",
                    EntityName = "task",
                    Assignments = new List<WorkflowFieldAssignment>
                    {
                        Set("duration", new WorkflowExpressionNode
                        {
                            Kind = "function",
                            Operator = "XrmTimeSpan",
                            Arguments = new List<WorkflowExpressionNode> { Lit("1", "int"), Lit("2", "int"), Lit("3", "int"), Lit("4", "int"), Lit("5", "int") }
                        }),
                        Set("count", new WorkflowExpressionNode
                        {
                            Kind = "function",
                            Operator = "RetrieveActivityCount",
                            Arguments = new List<WorkflowExpressionNode> { Attr("account", "name") }
                        }),
                        Set("first", new WorkflowExpressionNode
                        {
                            Kind = "function",
                            Operator = "SelectFirstNonNull",
                            Arguments = new List<WorkflowExpressionNode> { Attr("account", "name"), Attr("account", "emailaddress1") }
                        }),
                        Set("fn", new WorkflowExpressionNode
                        {
                            Kind = "function",
                            Arguments = new List<WorkflowExpressionNode> { Lit("a") }
                        })
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "XRM TIME SPAN (years=1, months=2, days=3, hours=4, minutes=5)");
        StringAssert.Contains(text, "RETRIEVE ACTIVITY COUNT (account.name; semantics unverified)");
        StringAssert.Contains(text, "FIRST NON-NULL VALUE OF account.name, account.emailaddress1");
        StringAssert.Contains(text, "FUNCTION \"a\"");
    }

    [TestMethod]
    public void Render_ExpressionKinds_RendersChoiceReferenceConcatenateStepOutputVariableRawAndUnknown()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Update",
                    EntityName = "account",
                    Assignments = new List<WorkflowFieldAssignment>
                    {
                        Set("option", new WorkflowExpressionNode { Kind = "choice", Value = "1" }),
                        Set("optionLabeled", new WorkflowExpressionNode { Kind = "choice", Label = "Active", Value = "1" }),
                        Set("reference", new WorkflowExpressionNode { Kind = "entityReference", Label = "Owner", EntityName = "systemuser", Id = "guid-2" }),
                        Set("concat", new WorkflowExpressionNode
                        {
                            Kind = "concatenate",
                            Arguments = new List<WorkflowExpressionNode> { Lit("a "), Lit("b") }
                        }),
                        Set("output", new WorkflowExpressionNode { Kind = "stepOutput", Value = "CreateStep1" }),
                        Set("variable", new WorkflowExpressionNode { Kind = "variable", Value = "myVariable" }),
                        Set("raw", new WorkflowExpressionNode { Kind = "raw", Source = "  raw source \n " }),
                        Set("number", Lit("42", "int")),
                        Set("currentDate", new WorkflowExpressionNode { Kind = "currentDateTime" }),
                        Set("unknown", new WorkflowExpressionNode { Kind = "mysteryKind" }),
                        Set("unknownValue", new WorkflowExpressionNode { Kind = "mysteryKind", Value = "kept" }),
                        Set("fallback", null, "fallback value")
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "UPDATE account");
        StringAssert.Contains(text, "SET option TO 1");
        StringAssert.Contains(text, "SET optionLabeled TO Active (value 1)");
        StringAssert.Contains(text, "SET reference TO Owner (systemuser, guid-2)");
        StringAssert.Contains(text, "SET concat TO CONCATENATE: \"a \" + \"b\"");
        StringAssert.Contains(text, "SET output TO OUTPUT OF CreateStep1");
        StringAssert.Contains(text, "SET variable TO myVariable");
        StringAssert.Contains(text, "SET raw TO raw source");
        StringAssert.Contains(text, "SET number TO 42");
        StringAssert.Contains(text, "SET currentDate TO CURRENT DATE/TIME");
        StringAssert.Contains(text, "SET unknown TO (value unavailable)");
        StringAssert.Contains(text, "SET unknownValue TO kept");
        StringAssert.Contains(text, "SET fallback TO fallback value");
    }

    [TestMethod]
    public void Render_CreateWithStepNumber_RendersStepNumberInsteadOfTarget()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new() { StepType = "Create", EntityName = null, Name = "CreateStep5", StepNumber = "5" },
                new() { StepType = "Create", EntityName = "task", StepNumber = null, TargetStepNumber = "2" }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        StringAssert.Contains(text, "CREATE CreateStep5 (step 5)");
        StringAssert.Contains(text, "CREATE task (created by step 2)");
    }

    [TestMethod]
    public void Render_NullWorkflow_ReturnsNull()
    {
        Assert.IsNull(WorkflowTextRenderer.Render(null));
        Assert.IsNull(WorkflowTextRenderer.Render(new WorkflowEntry()));
    }
}
