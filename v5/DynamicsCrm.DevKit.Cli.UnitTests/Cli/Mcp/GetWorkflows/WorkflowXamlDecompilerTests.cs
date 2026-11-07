using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class WorkflowXamlDecompilerTests
{
    [TestMethod]
    public void Decompile_CreateStep_UsesTargetEntityAndKeepsAssignmentsOnOwningStep()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <Sequence DisplayName="CreateStep5: Create Task">
                  <mxswa:SetEntityProperty Attribute="subject" EntityName="task" Value="Add(&quot;Created Task by &quot;, SelectFirstNonNull(account.ownerid))" />
                  <mxswa:CreateEntity DisplayName="CreateStep5" EntityName="task" Entity="[CreatedEntities(&amp;quot;task&amp;quot;)]" />
                </Sequence>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry
        {
            WorkflowId = "workflow-id",
            Name = "Create Task Workflow",
            PrimaryEntity = "account",
            Mode = "Background",
            Scope = "Organization"
        };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.AreEqual(1, entry.Steps.Count);
        var create = entry.Steps[0];
        Assert.AreEqual("Create", create.StepType);
        Assert.AreEqual("task", create.EntityName);
        Assert.AreEqual("Create Task", create.Name);
        CollectionAssert.AreEqual(new[] { "subject" }, create.Assignments.Select(x => x.Field).ToArray());
        Assert.AreEqual("concatenate", create.Assignments.Single().ValueExpressionAst.Kind);
        Assert.AreEqual("SelectFirstNonNull", create.Assignments.Single().ValueExpressionAst.Arguments[1].Operator);
        Assert.AreEqual("attribute", create.Assignments.Single().ValueExpressionAst.Arguments[1].Arguments.Single().Kind);
        Assert.AreEqual("task", entry.Dependencies.WrittenEntities.Single().EntityName);
        CollectionAssert.AreEqual(new[] { "subject" }, entry.Dependencies.WrittenEntities.Single().Fields.ToArray());
        Assert.IsFalse(entry.ParseIssues?.Any(issue => issue.Code == "UNPARSED_STEP_ELEMENT") == true);
    }

    [TestMethod]
    public void Decompile_ConditionBranches_KeepsCustomActionInsideIfAndStopInsideElse()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mcwa="clr-namespace:Microsoft.Crm.Workflow.Activities;assembly=Microsoft.Crm.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1: Workflow title">
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[account.name begins with D]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow"
                                  DisplayName="InvokeSdkMessageStep3: Call Custom Action">
                                <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                                  <mcwa:InvokeSdkMessageActivity SdkMessageName="v4_CustomAction" SdkMessageId="6522dc63-3a94-f011-b4cc-000d3aa25840">
                                    <mcwa:InvokeSdkMessageActivity.Arguments>
                                      <InArgument x:Key="f">[DirectCast("ABC", System.String)]</InArgument>
                                      <OutArgument x:Key="output">[InvokeSdkMessageStep3_output]</OutArgument>
                                    </mcwa:InvokeSdkMessageActivity.Arguments>
                                    <mcwa:InvokeSdkMessageActivity.Properties><x:String x:Key="f#InArgumentRequired">f</x:String></mcwa:InvokeSdkMessageActivity.Properties>
                                  </mcwa:InvokeSdkMessageActivity>
                                </sco:Collection></mxswa:ActivityReference.Properties>
                              </mxswa:ActivityReference>
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep4">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">True</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="StopWorkflowStep5: Stop workflow Succeeded" />
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Branch Workflow", PrimaryEntity = "account" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        var condition = entry.Steps.Single();
        Assert.AreEqual("Condition", condition.StepType);
        Assert.AreEqual(2, condition.Branches.Count);
        Assert.AreEqual("If", condition.Branches[0].BranchType);
        Assert.AreEqual("[account.name begins with D]", condition.Branches[0].ConditionExpression);
        Assert.AreEqual("InvokeAction", condition.Branches[0].Steps.Single().StepType);
        Assert.AreEqual("v4_CustomAction", condition.Branches[0].Steps.Single().Expression);
        Assert.AreEqual("6522dc63-3a94-f011-b4cc-000d3aa25840", condition.Branches[0].Steps.Single().ActionId);
        Assert.AreEqual("f", condition.Branches[0].Steps.Single().Arguments[0].Name);
        Assert.AreEqual("In", condition.Branches[0].Steps.Single().Arguments[0].Direction);
        Assert.AreEqual(true, condition.Branches[0].Steps.Single().Arguments[0].IsRequired);
        Assert.AreEqual("Out", condition.Branches[0].Steps.Single().Arguments[1].Direction);
        Assert.AreEqual("stepOutput", condition.Branches[0].Steps.Single().Arguments[1].ExpressionAst.Kind);
        Assert.AreEqual("Else", condition.Branches[1].BranchType);
        Assert.AreEqual("StopWorkflow", condition.Branches[1].Steps.Single().StepType);
        Assert.IsTrue(condition.Branches[1].IsDefault);
        Assert.AreEqual("True", condition.Branches[1].RawConditionExpression);
    }

    [TestMethod]
    public void Decompile_StageKeepsChildWorkflowCallAndFollowingSuccessfulStop()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <Sequence DisplayName="StageStep2: Stage 2">
                  <mxswa:StartChildWorkflow DisplayName="ChildWorkflowStep4: Start child: Child WF Account" WorkflowId="e19a31e3-cdd8-f111-84e8-6045bd04a047" EntityName="account" />
                  <mxswa:TerminateWorkflow DisplayName="StopWorkflowStep5: Stage 2 Succeeded" Exception="[New Microsoft.Xrm.Sdk.InvalidPluginExecutionException(Microsoft.Xrm.Sdk.OperationStatus.Succeeded)]" Reason="" />
                </Sequence>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Parent Workflow" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual(1, entry.Steps.Count, string.Join(" | ", entry.Steps.Select(step => step.StepType + ":" + step.SourceDisplayName)));
        var stage = entry.Steps[0];
        Assert.AreEqual("Stage", stage.StepType);
        Assert.AreEqual(2, stage.Steps.Count);
        var child = stage.Steps[0];
        Assert.AreEqual("StartChildWorkflow", child.StepType);
        Assert.AreEqual("Child WF Account", child.ChildWorkflowName);
        Assert.AreEqual("Child WF Account", child.Expression);
        var stop = stage.Steps[1];
        Assert.AreEqual("StopWorkflow", stop.StepType);
        Assert.AreEqual("Succeeded", stop.Status);
        Assert.AreEqual("", stop.RawMessageExpression);
    }

    [TestMethod]
    public void Decompile_ResolvesAssignOwnerAndEmptySuccessfulStopMessage()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <Sequence DisplayName="AssignStep10: Assign Account">
                  <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow" DisplayName="EvaluateExpression">
                    <mxswa:ActivityReference.Arguments>
                      <InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument>
                      <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.Guid, "5b2c610b-2c6d-f111-ab0e-0022480a530f", "UniqueIdentifier" }]</InArgument>
                      <OutArgument x:Key="Result">[AssignStep10_2]</OutArgument>
                    </mxswa:ActivityReference.Arguments>
                  </mxswa:ActivityReference>
                  <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow" DisplayName="EvaluateExpression">
                    <mxswa:ActivityReference.Arguments>
                      <InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument>
                      <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.EntityReference, "systemuser", "DEVKIT #", AssignStep10_2, "Lookup" }]</InArgument>
                      <OutArgument x:Key="Result">[AssignStep10_1]</OutArgument>
                    </mxswa:ActivityReference.Arguments>
                  </mxswa:ActivityReference>
                  <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow" DisplayName="EvaluateExpression">
                    <mxswa:ActivityReference.Arguments>
                      <InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument>
                      <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.EntityReference, AssignStep10_1, "Owner" }]</InArgument>
                      <OutArgument x:Key="Result">[AssignStep10_3]</OutArgument>
                    </mxswa:ActivityReference.Arguments>
                  </mxswa:ActivityReference>
                  <mxswa:AssignEntity DisplayName="AssignStep10: Assign Account" EntityName="account" Owner="[DirectCast(AssignStep10_3, Microsoft.Xrm.Sdk.EntityReference)]" />
                </Sequence>
                <Sequence DisplayName="StopWorkflowStep20: Stage 2 Succeeded">
                  <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow" DisplayName="EvaluateExpression">
                    <mxswa:ActivityReference.Arguments>
                      <InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument>
                      <InArgument x:Key="Parameters">[New Object() { WorkflowPropertyType.String, "", "String" }]</InArgument>
                      <OutArgument x:Key="Result">[StopWorkflowStep20_1]</OutArgument>
                    </mxswa:ActivityReference.Arguments>
                  </mxswa:ActivityReference>
                  <mxswa:TerminateWorkflow DisplayName="StopWorkflowStep20: Stage 2 Succeeded" Exception="[New Microsoft.Xrm.Sdk.InvalidPluginExecutionException(Microsoft.Xrm.Sdk.OperationStatus.Succeeded)]" Reason="[DirectCast(StopWorkflowStep20_1, System.String)]" />
                </Sequence>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Owner And Stop" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        var assign = entry.Steps.Single(step => step.StepType == "Assign");
        Assert.AreEqual("systemuser:[DEVKIT #:5b2c610b-2c6d-f111-ab0e-0022480a530f]", assign.Owner);
        Assert.AreEqual("entityReference", assign.OwnerReference.Kind);
        Assert.AreEqual("systemuser", assign.OwnerReference.EntityName);
        Assert.AreEqual("5b2c610b-2c6d-f111-ab0e-0022480a530f", assign.OwnerReference.Id);
        var stop = entry.Steps.Single(step => step.StepType == "StopWorkflow");
        Assert.AreEqual("Succeeded", stop.Status);
        Assert.AreEqual("", stop.Message);
    }

    [TestMethod]
    public void Decompile_ConditionParameters_ResolvesRetrieveCurrentTime()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <mxswa:GetEntityProperty Attribute="adx_expirydate" EntityName="adx_invitation" Value="[ConditionBranchStep4_2]" />
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow" DisplayName="EvaluateExpression">
                  <mxswa:ActivityReference.Arguments>
                    <InArgument x:Key="ExpressionOperator">RetrieveCurrentTime</InArgument>
                    <InArgument x:Key="Parameters">[New Object() {  }]</InArgument>
                    <OutArgument x:Key="Result">[ConditionBranchStep4_5]</OutArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow" DisplayName="EvaluateCondition">
                  <mxswa:ActivityReference.Arguments>
                    <InArgument x:Key="ConditionOperator">LessThan</InArgument>
                    <InArgument x:Key="Parameters">[New Object() { ConditionBranchStep4_5 }]</InArgument>
                    <InArgument x:Key="Operand">[ConditionBranchStep4_2]</InArgument>
                    <OutArgument x:Key="Result">[ConditionBranchStep4_3]</OutArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1: Invitation has expired">
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep4">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[ConditionBranchStep4_3]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="StopWorkflowStep5: Expired" />
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Expiration" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        var condition = entry.Steps.Single(step => step.StepType == "Condition");
        Assert.AreEqual("adx_invitation.adx_expirydate < CurrentDateTime", condition.Branches.Single().ConditionExpression);
        Assert.AreEqual("comparison", condition.Branches.Single().ConditionExpressionAst.Kind);
        Assert.AreEqual("lessThan", condition.Branches.Single().ConditionExpressionAst.Operator);
    }

    [TestMethod]
    public void Decompile_SetStateStep_PreservesStateAndStatusValues()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mxs="clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk">
              <mxswa:Workflow>
                <mxswa:SetState DisplayName="SetStateStep2: Complete invitation" EntityName="adx_inviteredemption" Entity="[InputEntities(&amp;quot;primaryEntity&amp;quot;)]">
                  <mxswa:SetState.State><InArgument><mxswa:ReferenceLiteral><mxs:OptionSetValue Value="1" /></mxswa:ReferenceLiteral></InArgument></mxswa:SetState.State>
                  <mxswa:SetState.Status><InArgument><mxswa:ReferenceLiteral><mxs:OptionSetValue Value="2" /></mxswa:ReferenceLiteral></InArgument></mxswa:SetState.Status>
                </mxswa:SetState>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Set State" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        var step = entry.Steps.Single();
        Assert.AreEqual("SetState", step.StepType);
        Assert.AreEqual(1, step.StateCode);
        Assert.AreEqual(2, step.StatusCode);
    }

    [TestMethod]
    public void Decompile_SendEmailStep_PreservesEmailAssignments()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <Sequence DisplayName="SendEmailStep8: Send invite email">
                  <mxswa:SetEntityProperty Attribute="subject" EntityName="email" Value="&quot;Registration Confirmation&quot;" />
                  <mxswa:SetEntityProperty Attribute="description" EntityName="email" Value="&quot;Message body&quot;" />
                  <mxswa:SetEntityProperty Attribute="directioncode" EntityName="email" Value="[Outgoing:true]" />
                  <mxswa:SetEntityProperty Attribute="followemailuserpreference" EntityName="email" Value="[False:false]" />
                  <mxswa:SendEmail EntityName="email" Entity="[CreatedEntities(&amp;quot;SendEmailStep8_localParameter#Temp&amp;quot;)]" />
                </Sequence>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Send Email" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        var step = entry.Steps.Single();
        Assert.AreEqual("SendEmail", step.StepType);
        Assert.AreEqual("email", step.EntityName);
        CollectionAssert.AreEqual(new[] { "subject", "description", "directioncode", "followemailuserpreference" }, step.Assignments.Select(item => item.Field).ToArray());
        Assert.AreEqual("\"Registration Confirmation\"", step.Assignments[0].Value);
        Assert.AreEqual("literal", step.Assignments[0].ValueExpressionAst.Kind);
        Assert.AreEqual("Registration Confirmation", step.Assignments[0].ValueExpressionAst.Value);
        Assert.AreEqual("choice", step.Assignments[2].ValueExpressionAst.Kind);
        Assert.AreEqual("boolean", step.Assignments[2].ValueExpressionAst.DataType);
        Assert.AreEqual("true", step.Assignments[2].ValueExpressionAst.Value);
    }

    [TestMethod]
    public void Decompile_CustomActivity_ReportsExternalImplementationGap()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow"
                    DisplayName="CustomActivityStep1: Invoke external activity">
                  <mxswa:ActivityReference.Properties>
                    <mxswa:ActivityReference AssemblyQualifiedName="Contoso.Workflows.ExternalActivity, Contoso.Workflows, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
                        DisplayName="CustomActivityStep1: Invoke external activity" />
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "External Activity" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        Assert.AreEqual("OPAQUE_CUSTOM_ACTIVITY", entry.ParseIssues.Single().Code);
    }

    [TestMethod]
    public void Decompile_UnknownDisplayedStep_ReportsItInsteadOfDroppingSilently()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities">
              <Sequence DisplayName="FutureStep1: New Dataverse activity" />
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Unknown Step" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        Assert.AreEqual("UNRECOGNIZED_STEP", entry.ParseIssues.Single().Code);
        Assert.AreEqual("FutureStep1: New Dataverse activity", entry.ParseIssues.Single().SourceDisplayName);
        StringAssert.Contains(entry.ParseIssues.Single().RawXaml, "FutureStep1: New Dataverse activity");
    }

    [TestMethod]
    public void Decompile_IntegerAndActivityCount_PreserveTypesAndUnknownSemantics()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:m="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <m:ActivityReference DisplayName="WaitStep1: Count" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow">
                <m:ActivityReference.Arguments><InArgument x:Key="Wait">True</InArgument></m:ActivityReference.Arguments>
                <Variable x:TypeArguments="x:Boolean" Default="False" Name="WaitBranchStep2_2" />
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ExpressionOperator">RetrieveActivityCount</InArgument><InArgument x:Key="Parameters">[New Object() { WaitBranchStep2_2 }]</InArgument><OutArgument x:Key="Result">[WaitBranchStep2_1]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument><InArgument x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.Integer, "1" }]</InArgument><OutArgument x:Key="Result">[WaitBranchStep2_3]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ConditionOperator">Equal</InArgument><InArgument x:Key="Operand">[WaitBranchStep2_1]</InArgument><InArgument x:Key="Parameters">[New Object() { WaitBranchStep2_3 }]</InArgument><OutArgument x:Key="Result">[condition]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference DisplayName="WaitBranchStep2" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="Condition">[condition]</InArgument></m:ActivityReference.Arguments></m:ActivityReference>
              </m:ActivityReference>
              <m:ActivityReference DisplayName="CustomActivityStep3: Invoke" AssemblyQualifiedName="Example.Activity, Example, Version=1.0.0.0"><m:ActivityReference.Arguments><InArgument x:Key="InputValue">[WaitBranchStep2_2]</InArgument><OutArgument x:Key="OutputValue">[output]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
            </Activity>
            """;
        var entry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml, entry);
        var condition = entry.Steps[0].Branches.Single().ConditionExpressionAst;
        Assert.AreEqual("RetrieveActivityCount", condition.Arguments[0].Operator);
        Assert.AreEqual(false, condition.Arguments[0].SemanticsVerified);
        Assert.AreEqual("false", condition.Arguments[0].Arguments[0].Value);
        Assert.AreEqual("number", condition.Arguments[1].DataType);
        Assert.AreEqual("1", condition.Arguments[1].Value);
        Assert.IsTrue(entry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION"));
        Assert.IsNull(entry.Steps[1].Arguments[0].IsRequired);
        StringAssert.Contains(WorkflowTextRenderer.Render(entry), "RETRIEVE ACTIVITY COUNT (false; semantics unverified) = 1");
    }

    [TestMethod]
    public void Decompile_DateSpanAndCreatedRecordReference_ArePreserved()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:m="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <Sequence DisplayName="CreateStep1: Create task">
                <Sequence.Variables><Variable Name="CreateStep1_2"><Variable.Default><Literal><XrmTimeSpan Years="0" Months="0" Days="1" Hours="0" Minutes="0" /></Literal></Variable.Default></Variable></Sequence.Variables>
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ExpressionOperator">RetrieveCurrentTime</InArgument><InArgument x:Key="Parameters">[New Object() { }]</InArgument><OutArgument x:Key="Result">[CreateStep1_1]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ExpressionOperator">Add</InArgument><InArgument x:Key="Parameters">[New Object() { CreateStep1_1, CreateStep1_2 }]</InArgument><OutArgument x:Key="Result">[CreateStep1_3]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:CreateEntity EntityName="task" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" />
                <m:SetEntityProperty EntityName="task" Attribute="scheduledend" Value="[CreateStep1_3]" />
              </Sequence>
              <Sequence DisplayName="UpdateStep2: Update task"><m:UpdateEntity EntityName="task" Entity="[CreatedEntities(&quot;CreateStep1_localParameter&quot;)]" /></Sequence>
            </Activity>
            """;
        var entry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml, entry);
        var value = entry.Steps[0].Assignments.Single().ValueExpressionAst;
        Assert.AreEqual("function", value.Kind);
        Assert.AreEqual("Add", value.Operator);
        Assert.AreEqual("XrmTimeSpan", value.Arguments[1].Operator);
        Assert.AreEqual("1", value.Arguments[1].Arguments[2].Value);
        Assert.AreEqual(entry.Steps[0].StepNumber, entry.Steps[1].TargetStepNumber);
        StringAssert.Contains(WorkflowTextRenderer.Render(entry), "created by step 1");
        var subtractEntry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml.Replace(">Add<", ">Subtract<"), subtractEntry);
        Assert.AreEqual("Subtract", subtractEntry.Steps[0].Assignments.Single().ValueExpressionAst.Operator);
        Assert.IsFalse(subtractEntry.ParseIssues.Any(i => i.Code == "UNSUPPORTED_EXPRESSION"));
    }

    [TestMethod]
    public void Decompile_WaitBranches_PreservesConditionsAndNestedSteps()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:m="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <m:ActivityReference DisplayName="WaitStep1: Wait" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow">
                <m:ActivityReference.Arguments><InArgument x:Key="Wait">True</InArgument></m:ActivityReference.Arguments>
                <m:GetEntityProperty Attribute="name" EntityName="account" Value="[WaitBranchStep2_1]" />
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ExpressionOperator">CreateCrmType</InArgument><InArgument x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.String, "ABC", "String" }]</InArgument><OutArgument x:Key="Result">[WaitBranchStep2_2]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="ConditionOperator">Equal</InArgument><InArgument x:Key="Operand">[WaitBranchStep2_1]</InArgument><InArgument x:Key="Parameters">[New Object() { WaitBranchStep2_2 }]</InArgument><OutArgument x:Key="Result">[condition]</OutArgument></m:ActivityReference.Arguments></m:ActivityReference>
                <m:ActivityReference DisplayName="WaitBranchStep2" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"><m:ActivityReference.Arguments><InArgument x:Key="Condition">[condition]</InArgument></m:ActivityReference.Arguments><m:ActivityReference.Properties><m:ActivityReference DisplayName="WaitBranchStep2" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow"><Sequence DisplayName="StopWorkflowStep3: Done"><TerminateWorkflow Exception="[Microsoft.Xrm.Sdk.OperationStatus.Succeeded]" /></Sequence></m:ActivityReference></m:ActivityReference.Properties></m:ActivityReference>
              </m:ActivityReference>
            </Activity>
            """;
        var entry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml, entry);
        var branch = entry.Steps.Single().Branches.Single();
        Assert.AreEqual("account.name = \"ABC\"", branch.ConditionExpression);
        Assert.AreEqual("StopWorkflow", branch.Steps.Single().StepType);
        Assert.IsFalse(entry.ParseIssues.Any(i => i.SourceDisplayName == "WaitBranchStep2"));
        StringAssert.Contains(WorkflowTextRenderer.Render(entry), "WAIT UNTIL account.name = \"ABC\"");
        StringAssert.Contains(WorkflowTextRenderer.Render(entry), "  STOP WORKFLOW Succeeded");
        Assert.AreEqual(true, entry.Steps.Single().WaitEnabled);
        Assert.AreEqual("single", entry.Steps.Single().WaitBranchSelection);
        var secondBranch = "<m:ActivityReference DisplayName=\"WaitBranchStep4\" AssemblyQualifiedName=\"Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow\"><m:ActivityReference.Arguments><InArgument x:Key=\"Condition\">True</InArgument></m:ActivityReference.Arguments></m:ActivityReference>";
        var alternatives = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml.Replace("<m:ActivityReference DisplayName=\"WaitBranchStep2\" AssemblyQualifiedName=\"Microsoft.Crm.Workflow.Activities.ConditionBranch", secondBranch + "<m:ActivityReference DisplayName=\"WaitBranchStep2\" AssemblyQualifiedName=\"Microsoft.Crm.Workflow.Activities.ConditionBranch"), alternatives);
        var wait = alternatives.Steps.Single();
        Assert.AreEqual("alternative", wait.WaitBranchSelection);
        Assert.AreEqual(2, wait.Branches.Count);
        Assert.IsFalse(wait.Branches[0].IsDefault);
        Assert.AreEqual("True", wait.Branches[0].ConditionExpression);
        StringAssert.Contains(WorkflowTextRenderer.Render(alternatives), "WAIT FOR ONE OF:");
        StringAssert.Contains(WorkflowTextRenderer.Render(alternatives), "WHEN account.name = \"ABC\"");
        var unresolved = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml.Replace("<InArgument x:Key=\"Wait\">True</InArgument>", "<InArgument x:Key=\"Wait\">False</InArgument>"), unresolved);
        Assert.AreEqual(false, unresolved.Steps.Single().WaitEnabled);
        Assert.IsTrue(unresolved.ParseIssues.Any(i => i.Code == "UNRESOLVED_WAIT"));
        StringAssert.Contains(WorkflowTextRenderer.Render(unresolved), "wait semantics unresolved");
    }

    [TestMethod]
    public void Decompile_KnownStepOnUnsupportedElement_ReportsItInsteadOfDroppingSilently()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow>
                <mxswa:WaitCondition DisplayName="WaitStep1: Wait until condition" />
              </mxswa:Workflow>
            </Activity>
            """;
        var entry = new WorkflowEntry { WorkflowId = "workflow-id", Name = "Wait" };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        Assert.AreEqual("UNPARSED_STEP_ELEMENT", entry.ParseIssues.Single().Code);
        Assert.AreEqual(0, entry.Steps.Count);
    }
}
