using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class WorkflowXamlDecompilerExtraCoverageTests
{
    private const string Header = """
        <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                  xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                  xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                  xmlns:mcwa="clr-namespace:Microsoft.Crm.Workflow.Activities;assembly=Microsoft.Crm.Workflow">
          <mxswa:Workflow>
        """;

    private const string Footer = """
          </mxswa:Workflow>
        </Activity>
        """;

    [TestMethod]
    public void Decompile_BuildSymbols_ResolvesEvaluateConvertConditionAndLogicalReferences()
    {
        const string xaml = Header + """
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConvertCrmXrmTypes, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[CreateStep1]</OutArgument>
                    <InArgument x:Key="Value">[DirectCast(&quot;0f8fad5b-d9cb-469f-a165-70867728950e&quot;, System.Guid)]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[count]</OutArgument>
                    <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.Integer, &quot;42&quot; }]</InArgument>
                    <InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[ref1]</OutArgument>
                    <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.EntityReference, &quot;account&quot; }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[sum]</OutArgument>
                    <InArgument x:Key="Parameters">[first + second]</InArgument>
                    <InArgument x:Key="ExpressionOperator">Add</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond1]</OutArgument>
                    <InArgument x:Key="Operand">[account.name]</InArgument>
                    <InArgument x:Key="ConditionOperator">Equal</InArgument>
                    <InArgument x:Key="Parameters">[New Object() {  }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond2]</OutArgument>
                    <InArgument x:Key="Operand">[account.revenue]</InArgument>
                    <InArgument x:Key="ConditionOperator">MyOperator</InArgument>
                    <InArgument x:Key="Parameters">[New Object() { 1.5, true, null, [LookupStep9] }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond3]</OutArgument>
                    <InArgument x:Key="Operand">[task.subject]</InArgument>
                    <InArgument x:Key="ConditionOperator">Equal</InArgument>
                    <InArgument x:Key="Parameters">[New Object() { &quot;only&quot; }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond4]</OutArgument>
                    <InArgument x:Key="Operand">[primarycontactid]</InArgument>
                    <InArgument x:Key="ConditionOperator">Equal</InArgument>
                    <InArgument x:Key="Parameters">[New Object() { &quot;account&quot;, &quot;Primary Account&quot;, WorkflowPropertyType.EntityReference, CreateStep1 }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateLogicalCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond5]</OutArgument>
                    <InArgument x:Key="LeftOperand">[cond1]</InArgument>
                    <InArgument x:Key="RightOperand">[cond2]</InArgument>
                    <InArgument x:Key="LogicalOperator">Or</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateLogicalCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond6]</OutArgument>
                    <InArgument x:Key="LeftOperand">[cond1]</InArgument>
                    <InArgument x:Key="RightOperand">[cond3]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1: Use Symbols">
                  <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond5]</InArgument></mxswa:ActivityReference.Arguments>
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond5]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="StopWorkflowStep3: Stop Succeeded" />
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep4">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond6]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities" /></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep5">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond4]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities" /></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
        """ + Footer;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Symbols Workflow", PrimaryEntity = "account" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION" && i.SourceDisplayName == "ConditionStep1: Use Symbols"),
            "An unrecognized condition operator must be flagged as semantics-unverified.");
        var condition = entry.Steps.Single();
        Assert.AreEqual(3, condition.Branches.Count);
        Assert.AreEqual("([account.name] = ? OR [account.revenue] MyOperator [1.5, true, null, LookupStep9])", condition.Branches[0].ConditionExpression);
        Assert.AreEqual("([account.name] = ? AND [task.subject] = \"only\")", condition.Branches[1].ConditionExpression);
        Assert.AreEqual("[primarycontactid] = account:[Primary Account:0f8fad5b-d9cb-469f-a165-70867728950e]", condition.Branches[2].ConditionExpression);
    }

    [TestMethod]
    public void Decompile_UnresolvedSemantics_EmitsParseIssuesAndNumbersNestedSteps()
    {
        const string xaml = Header + """
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1: Outer">
                  <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[New Object() { &quot;x&quot; }]</InArgument></mxswa:ActivityReference.Arguments>
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[New Object() { &quot;x&quot; }]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                                  DisplayName="ConditionStep3: Inner">
                                <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">True</InArgument></mxswa:ActivityReference.Arguments>
                                <mxswa:ActivityReference.Properties>
                                  <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                                    <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                                        DisplayName="ConditionBranchStep4">
                                      <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[account.name contains D]</InArgument></mxswa:ActivityReference.Arguments>
                                      <mxswa:ActivityReference.Properties>
                                        <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                                          <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                                            <Sequence DisplayName="UpdateStep5: Update Created">
                                              <mxswa:UpdateEntity DisplayName="UpdateStep5" EntityName="task" Entity="[CreatedEntities(&quot;task#Temp&quot;)]" />
                                            </Sequence>
                                          </sco:Collection></mxswa:ActivityReference.Properties>
                                        </mxswa:ActivityReference>
                                      </mxswa:ActivityReference.Properties>
                                    </mxswa:ActivityReference>
                                  </sco:Collection>
                                </mxswa:ActivityReference.Properties>
                              </mxswa:ActivityReference>
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
                <Sequence DisplayName="SetStateStep6: Set Status">
                  <mxswa:SetState EntityName="account" />
                </Sequence>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="WaitStep7: Wait forever">
                  <mxswa:ActivityReference.Arguments><InArgument x:Key="Wait">True</InArgument></mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <Sequence DisplayName="UpdateStep8: Object Array">
                  <mxswa:SetEntityProperty Attribute="description" EntityName="task" Value="[New Object() { &quot;a&quot; }]" />
                  <mxswa:UpdateEntity DisplayName="UpdateStep8" EntityName="task" />
                </Sequence>
                <Sequence DisplayName="AssignStep9: Assign Owner">
                  <mxswa:AssignEntity EntityName="task" Owner="previousOwner" />
                </Sequence>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow"
                    DisplayName="InvokeSdkMessageStep10: Weird Action">
                  <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                    <mcwa:InvokeSdkMessageActivity SdkMessageName="v4_NewObject New Object()" SdkMessageId="6522dc63-3a94-f011-b4cc-000d3aa25840">
                      <mcwa:InvokeSdkMessageActivity.Arguments>
                        <InArgument x:Key="p">[DirectCast(&quot;v&quot;, System.String)]</InArgument>
                      </mcwa:InvokeSdkMessageActivity.Arguments>
                    </mcwa:InvokeSdkMessageActivity>
                  </sco:Collection></mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
        """ + Footer;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Issues Workflow", PrimaryEntity = "account" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        var codes = entry.ParseIssues.Select(i => i.Code).ToList();

        CollectionAssert.Contains(codes, "UNRESOLVED_TARGET");
        CollectionAssert.Contains(codes, "UNRESOLVED_STATE");
        CollectionAssert.Contains(codes, "UNRESOLVED_WAIT");
        CollectionAssert.Contains(codes, "UNRESOLVED_EXPRESSION");
        CollectionAssert.Contains(codes, "UNSUPPORTED_EXPRESSION");

        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNRESOLVED_TARGET" && i.SourceDisplayName == "UpdateStep5: Update Created"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNRESOLVED_STATE" && i.SourceDisplayName == "SetStateStep6: Set Status"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNRESOLVED_WAIT" && i.SourceDisplayName == "WaitStep7: Wait forever"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNRESOLVED_EXPRESSION" && i.SourceDisplayName == "UpdateStep8: Object Array"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNRESOLVED_EXPRESSION" && i.SourceDisplayName == "InvokeSdkMessageStep10: Weird Action"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION" && i.SourceDisplayName == "AssignStep9: Assign Owner"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION" && i.SourceDisplayName == "UpdateStep8: Object Array"));
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION" && i.SourceDisplayName == "ConditionStep1: Outer"));

        var outer = entry.Steps.Single(s => s.SourceDisplayName == "ConditionStep1: Outer");
        var inner = outer.Branches.Single().Steps.Single(s => s.SourceDisplayName == "ConditionStep3: Inner");
        var update = inner.Branches.Single().Steps.Single(s => s.SourceDisplayName == "UpdateStep5: Update Created");
        Assert.AreEqual("1", outer.StepNumber);
        Assert.AreEqual("1.1", inner.StepNumber);
        Assert.AreEqual("1.1.1", update.StepNumber);
        Assert.IsNull(update.TargetStepNumber);
    }
}
