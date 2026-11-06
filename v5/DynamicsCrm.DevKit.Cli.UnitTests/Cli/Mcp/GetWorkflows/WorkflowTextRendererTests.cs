using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class WorkflowTextRendererTests
{
    [TestMethod]
    public void Render_UsesIndentedUppercaseKeywordsAndStructuredExpressions()
    {
        var workflow = new WorkflowEntry
        {
            Steps = new List<WorkflowStepNode>
            {
                new()
                {
                    StepType = "Stage",
                    Name = "Stage 1",
                    Steps = new List<WorkflowStepNode>
                    {
                        new()
                        {
                            StepType = "Condition",
                            Branches = new List<WorkflowConditionBranch>
                            {
                                new()
                                {
                                    BranchType = "If",
                                    ConditionExpressionAst = new WorkflowExpressionNode
                                    {
                                        Kind = "comparison",
                                        Operator = "notNull",
                                        Arguments = new List<WorkflowExpressionNode>
                                        {
                                            new() { Kind = "attribute", EntityName = "account", AttributeName = "name" }
                                        }
                                    },
                                    Steps = new List<WorkflowStepNode>
                                    {
                                        new()
                                        {
                                            StepType = "Create",
                                            EntityName = "task",
                                            Assignments = new List<WorkflowFieldAssignment>
                                            {
                                                new()
                                                {
                                                    EntityName = "task",
                                                    Field = "subject",
                                                    ValueExpressionAst = new WorkflowExpressionNode { Kind = "literal", DataType = "string", Value = "Created" }
                                                }
                                            }
                                        },
                                        new() { StepType = "StopWorkflow", Status = "Succeeded" }
                                    }
                                },
                                new()
                                {
                                    BranchType = "ElseIf",
                                    ConditionExpressionAst = new WorkflowExpressionNode
                                    {
                                        Kind = "comparison",
                                        Operator = "beginsWith",
                                        Arguments = new List<WorkflowExpressionNode>
                                        {
                                            new() { Kind = "attribute", EntityName = "account", AttributeName = "name" },
                                            new() { Kind = "literal", DataType = "string", Value = "D" }
                                        }
                                    },
                                    Steps = new List<WorkflowStepNode>
                                    {
                                        new()
                                        {
                                            StepType = "InvokeAction",
                                            ActionName = "v4_CustomAction",
                                            Arguments = new List<WorkflowArgument>
                                            {
                                                new()
                                                {
                                                    Name = "f",
                                                    Direction = "In",
                                                    ExpressionAst = new WorkflowExpressionNode { Kind = "literal", DataType = "string", Value = "ABC" }
                                                }
                                            }
                                        }
                                    }
                                },
                                new()
                                {
                                    BranchType = "Else",
                                    IsDefault = true,
                                    Steps = new List<WorkflowStepNode>
                                    {
                                        new() { StepType = "CustomActivity", Name = "Call GetDataFromUrl" }
                                    }
                                }
                            }
                        }
                    }
                },
                new()
                {
                    StepType = "Stage",
                    Name = "Stage 2",
                    Steps = new List<WorkflowStepNode>
                    {
                        new() { StepType = "StartChildWorkflow", ChildWorkflowName = "Child WF Acccount" }
                    }
                }
            }
        };

        var text = WorkflowTextRenderer.Render(workflow);

        Assert.AreEqual(
            "STAGE 1\r\n  IF account.name IS NOT NULL\r\n    CREATE task\r\n      SET task.subject TO \"Created\"\r\n    STOP WORKFLOW Succeeded\r\n  ELSE IF account.name BEGINS WITH \"D\"\r\n    CALL CUSTOM ACTION v4_CustomAction\r\n      INPUT f = \"ABC\"\r\n  ELSE\r\n    CALL CUSTOM ACTIVITY GetDataFromUrl\r\nSTAGE 2\r\n  START CHILD WORKFLOW Child WF Acccount",
            text);
    }
}
