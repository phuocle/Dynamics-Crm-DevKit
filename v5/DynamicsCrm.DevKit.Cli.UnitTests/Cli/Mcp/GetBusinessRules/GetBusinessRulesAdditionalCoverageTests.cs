using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetBusinessRules;

[TestClass]
public sealed class GetBusinessRulesAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool);

    // Real XAML of business rule 'Analysis Result Message Display' (DEVKITV4,
    // workflowid 11a502ff-3fed-4121-9908-c647af4b12ae): one ConditionSequence,
    // IF msdyn_message IS NULL → 2 SetVisibility actions.
    private const string SetVisibilityRuleXaml = """
        <?xml version="1.0" encoding="utf-16"?><Activity x:Class="XrmWorkflow11a502ff3fed41219908c647af4b12ae" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxs="clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxsq="clr-namespace:Microsoft.Xrm.Sdk.Query;assembly=Microsoft.Xrm.Sdk.Query, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:s="clr-namespace:System;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:this="clr-namespace:" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><x:Members><x:Property Name="InputEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" /><x:Property Name="CreatedEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" /></x:Members><this:XrmWorkflow11a502ff3fed41219908c647af4b12ae.InputEntities><InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" /></this:XrmWorkflow11a502ff3fed41219908c647af4b12ae.InputEntities><this:XrmWorkflow11a502ff3fed41219908c647af4b12ae.CreatedEntities><InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" /></this:XrmWorkflow11a502ff3fed41219908c647af4b12ae.CreatedEntities><mva:VisualBasic.Settings>Assembly references and imported namespaces for internal implementation</mva:VisualBasic.Settings><mxswa:Workflow><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionStep1"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Wait">False</InArgument></mxswa:ActivityReference.Arguments><mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Variable" x:Key="Variables"><Variable x:TypeArguments="x:Boolean" Default="False" Name="ConditionBranchStep2_condition" /><Variable x:TypeArguments="x:Object" Name="ConditionBranchStep2_1" /></sco:Collection><sco:Collection x:TypeArguments="Activity" x:Key="Activities"><mxswa:GetEntityProperty Attribute="msdyn_message" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="msdyn_analysisresult" Value="[ConditionBranchStep2_1]"><mxswa:GetEntityProperty.TargetType><InArgument x:TypeArguments="s:Type"><mxswa:ReferenceLiteral x:TypeArguments="s:Type"><x:Null /></mxswa:ReferenceLiteral></InArgument></mxswa:GetEntityProperty.TargetType></mxswa:GetEntityProperty><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateCondition"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="mxsq:ConditionOperator" x:Key="ConditionOperator">Null</InArgument><x:Null x:Key="Parameters" /><InArgument x:TypeArguments="x:Object" x:Key="Operand">[ConditionBranchStep2_1]</InArgument><OutArgument x:TypeArguments="x:Boolean" x:Key="Result">[ConditionBranchStep2_condition]</OutArgument></mxswa:ActivityReference.Arguments></mxswa:ActivityReference><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionBranchStep2"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Condition">[ConditionBranchStep2_condition]</InArgument></mxswa:ActivityReference.Arguments><mxswa:ActivityReference.Properties><mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionBranchStep2"><mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Variable" x:Key="Variables" /><sco:Collection x:TypeArguments="Activity" x:Key="Activities"><Sequence DisplayName="SetVisibilityStep1: New Action"><mcwc:SetVisibility ControlId="msdyn_solutionhealthmessage" ControlType="standard" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="msdyn_analysisresult" IsVisible="True" /></Sequence><Sequence DisplayName="SetVisibilityStep2: New Action"><mcwc:SetVisibility ControlId="msdyn_message" ControlType="standard" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="msdyn_analysisresult" IsVisible="False" /></Sequence></sco:Collection></mxswa:ActivityReference.Properties></mxswa:ActivityReference><x:Null x:Key="Else" /><x:String x:Key="Description">New Condition</x:String></mxswa:ActivityReference.Properties></mxswa:ActivityReference></sco:Collection><x:Boolean x:Key="ContainsElseBranch">False</x:Boolean></mxswa:ActivityReference.Properties></mxswa:ActivityReference></mxswa:Workflow></Activity>
        """;

    // Real XAML of business rule 'Set default Timeout' (DEVKITV4, workflowid
    // 7f5b0d0e-c2af-e711-8124-000d3af99683): IF msdyn_timeout IS NULL →
    // SET DEFAULT msdyn_timeout TO 30 (CreateCrmType plumbing resolved via symbols).
    private const string SetDefaultValueRuleXaml = """
        <?xml version="1.0" encoding="utf-16"?><Activity x:Class="XrmWorkflow7f5b0d0ec2afe7118124000d3af99683" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxs="clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxsq="clr-namespace:Microsoft.Xrm.Sdk.Query;assembly=Microsoft.Xrm.Sdk.Query, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:s="clr-namespace:System;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:this="clr-namespace:" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><x:Members><x:Property Name="InputEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" /><x:Property Name="CreatedEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" /></x:Members><this:XrmWorkflow7f5b0d0ec2afe7118124000d3af99683.InputEntities><InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" /></this:XrmWorkflow7f5b0d0ec2afe7118124000d3af99683.InputEntities><this:XrmWorkflow7f5b0d0ec2afe7118124000d3af99683.CreatedEntities><InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" /></this:XrmWorkflow7f5b0d0ec2afe7118124000d3af99683.CreatedEntities><mva:VisualBasic.Settings>Assembly references and imported namespaces for internal implementation</mva:VisualBasic.Settings><mxswa:Workflow><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionStep1"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Wait">False</InArgument></mxswa:ActivityReference.Arguments><mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Variable" x:Key="Variables"><Variable x:TypeArguments="x:Boolean" Default="False" Name="ConditionBranchStep2_condition" /><Variable x:TypeArguments="x:Object" Name="ConditionBranchStep2_1" /></sco:Collection><sco:Collection x:TypeArguments="Activity" x:Key="Activities"><mxswa:GetEntityProperty Attribute="msdyn_timeout" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="msdyn_odatav4ds" Value="[ConditionBranchStep2_1]"><mxswa:GetEntityProperty.TargetType><InArgument x:TypeArguments="s:Type"><mxswa:ReferenceLiteral x:TypeArguments="s:Type"><x:Null /></mxswa:ReferenceLiteral></InArgument></mxswa:GetEntityProperty.TargetType></mxswa:GetEntityProperty><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateCondition"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="mxsq:ConditionOperator" x:Key="ConditionOperator">Null</InArgument><x:Null x:Key="Parameters" /><InArgument x:TypeArguments="x:Object" x:Key="Operand">[ConditionBranchStep2_1]</InArgument><OutArgument x:TypeArguments="x:Boolean" x:Key="Result">[ConditionBranchStep2_condition]</OutArgument></mxswa:ActivityReference.Arguments></mxswa:ActivityReference><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionBranchStep2"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Condition">[ConditionBranchStep2_condition]</InArgument></mxswa:ActivityReference.Arguments><mxswa:ActivityReference.Properties><mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="ConditionBranchStep2"><mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Variable" x:Key="Variables" /><sco:Collection x:TypeArguments="Activity" x:Key="Activities"><Sequence DisplayName="SetDefaultValueStep1: New Action"><Sequence.Variables><Variable x:TypeArguments="x:Object" Name="SetDefaultValueStep1_1" /></Sequence.Variables><Assign x:TypeArguments="mxs:Entity" To="[CreatedEntities(&quot;primaryEntity#Temp&quot;)]" Value="[New Entity(&quot;msdyn_odatav4ds&quot;)]" /><Assign x:TypeArguments="s:Guid" To="[CreatedEntities(&quot;primaryEntity#Temp&quot;).Id]" Value="[InputEntities(&quot;primaryEntity&quot;).Id]" /><mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression"><mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument><InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.Integer, "30" }]</InArgument><InArgument x:TypeArguments="s:Type" x:Key="TargetType"><mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:Int32" /></InArgument><OutArgument x:TypeArguments="x:Object" x:Key="Result">[SetDefaultValueStep1_1]</OutArgument></mxswa:ActivityReference.Arguments></mxswa:ActivityReference><mxswa:SetEntityProperty Attribute="msdyn_timeout" Entity="[CreatedEntities(&quot;primaryEntity#Temp&quot;)]" EntityName="msdyn_odatav4ds" Value="[SetDefaultValueStep1_1]"><mxswa:SetEntityProperty.TargetType><InArgument x:TypeArguments="s:Type"><mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:Int32" /></InArgument></mxswa:SetEntityProperty.TargetType></mxswa:SetEntityProperty><mcwc:SetDefaultValue DisplayName="SetDefaultValueStep1" Entity="[CreatedEntities(&quot;primaryEntity#Temp&quot;)]" EntityName="msdyn_odatav4ds" /><Assign x:TypeArguments="mxs:Entity" To="[InputEntities(&quot;primaryEntity&quot;)]" Value="[CreatedEntities(&quot;primaryEntity#Temp&quot;)]" /></Sequence></sco:Collection></mxswa:ActivityReference.Properties></mxswa:ActivityReference><x:Null x:Key="Else" /><x:String x:Key="Description">New Condition</x:String></mxswa:ActivityReference.Properties></mxswa:ActivityReference></sco:Collection><x:Boolean x:Key="ContainsElseBranch">False</x:Boolean></mxswa:ActivityReference.Properties></mxswa:ActivityReference></mxswa:Workflow></Activity>
        """;

    [TestMethod]
    public void Decompile_SetVisibilityRule_BuildsConditionAndActions()
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(SetVisibilityRuleXaml, entry, null);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.IsNull(entry.ParseIssues);
        var condition = entry.Steps.Single();
        Assert.AreEqual("Condition", condition.StepType);
        Assert.AreEqual(false, condition.WaitEnabled);
        var branch = condition.Branches.Single();
        Assert.AreEqual("If", branch.BranchType);
        Assert.AreEqual("msdyn_analysisresult.msdyn_message is null", branch.ConditionExpression);
        Assert.AreEqual("isNull", branch.ConditionExpressionAst!.Operator);

        var actions = branch.Steps;
        Assert.AreEqual(2, actions.Count);
        Assert.AreEqual("SetVisibility", actions[0].StepType);
        Assert.AreEqual("msdyn_solutionhealthmessage", ArgumentValue(actions[0], "ControlId"));
        Assert.AreEqual("True", ArgumentValue(actions[0], "IsVisible"));
        Assert.AreEqual("msdyn_message", ArgumentValue(actions[1], "ControlId"));
        Assert.AreEqual("False", ArgumentValue(actions[1], "IsVisible"));
    }

    [TestMethod]
    public void Render_SetVisibilityRule_ProducesDslText()
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(SetVisibilityRuleXaml, entry, null);

        var text = BusinessRuleTextRenderer.Render(entry.Steps);
        var expected = """
            IF msdyn_analysisresult.msdyn_message IS NULL
              SHOW msdyn_solutionhealthmessage
              HIDE msdyn_message
            """;
        Assert.AreEqual(expected.ReplaceLineEndings(), text?.ReplaceLineEndings());
    }

    [TestMethod]
    public void Decompile_SetDefaultValueRule_ResolvesCreateCrmTypeValue()
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(SetDefaultValueRuleXaml, entry, null);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.IsNull(entry.ParseIssues);
        var action = entry.Steps.Single().Branches.Single().Steps.Single();
        Assert.AreEqual("SetDefaultValue", action.StepType);
        var assignment = action.Assignments.Single();
        Assert.AreEqual("msdyn_timeout", assignment.Field);
        Assert.AreEqual("msdyn_odatav4ds", assignment.EntityName);
        Assert.AreEqual("30", assignment.Value);
        Assert.AreEqual("literal", assignment.ValueExpressionAst!.Kind);
    }

    [TestMethod]
    public void Render_SetDefaultValueRule_ProducesDslText()
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(SetDefaultValueRuleXaml, entry, null);

        var text = BusinessRuleTextRenderer.Render(entry.Steps);
        var expected = """
            IF msdyn_odatav4ds.msdyn_timeout IS NULL
              SET DEFAULT msdyn_odatav4ds.msdyn_timeout TO 30
            """;
        Assert.AreEqual(expected.ReplaceLineEndings(), text?.ReplaceLineEndings());
    }

    [TestMethod]
    public void Decompile_ElseBranch_IsMarkedAsDefault()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1">
                  <mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Wait">False</InArgument></mxswa:ActivityReference.Arguments>
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[account.name = "D"]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="LockFieldStep3: New Action"><mcwc:LockField ControlId="name" /></Sequence>
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep4">
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="UnlockFieldStep5: New Action"><mcwc:UnlockField ControlId="name" /></Sequence>
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

        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(xaml, entry, null);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        var branches = entry.Steps.Single().Branches!;
        Assert.AreEqual(2, branches.Count);
        Assert.AreEqual("If", branches[0].BranchType);
        Assert.IsFalse(branches[0].IsDefault);
        Assert.AreEqual("Else", branches[1].BranchType);
        Assert.IsTrue(branches[1].IsDefault);
        Assert.IsNull(branches[1].ConditionExpression);

        var text = BusinessRuleTextRenderer.Render(entry.Steps);
        Assert.IsTrue(text!.Contains("LOCK name"));
        Assert.IsTrue(text.Contains("ELSE"));
        Assert.IsTrue(text.Contains("UNLOCK name"));
    }

    [TestMethod]
    public void Decompile_UnknownStepKind_ReportsUnrecognizedIssue()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1">
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[True]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="SetFocusStep3: New Action"><mcwc:SetFocus ControlId="name" /></Sequence>
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

        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(xaml, entry, null);

        Assert.AreEqual("partial", entry.XamlParseStatus);
        var issue = entry.ParseIssues!.Single(i => i.Code == "UNRECOGNIZED_STEP");
        Assert.AreEqual("SetFocusStep3: New Action", issue.SourceDisplayName);
        Assert.IsNotNull(issue.RawXaml);
    }

    [TestMethod]
    public void Decompile_SetDisplayModeRule_LocksInBothBranches()
    {
        // Real pattern from DEVKITV4 rule 'Lock Linked By' (52285436-b1af-ec11-9846-000d3afba027):
        // the designer's lock action is SetDisplayMode with IsReadOnly, not LockField.
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1">
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[account.numberofemployees is not null]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="SetDisplayModeStep1: Lock Linked By"><mcwc:SetDisplayMode ControlId="linkedby" ControlType="standard" EntityName="account" IsReadOnly="True" /></Sequence>
                            </sco:Collection></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep3">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[True]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                              <Sequence DisplayName="SetDisplayModeStep2: Lock Linked By"><mcwc:SetDisplayMode ControlId="linkedby" ControlType="standard" EntityName="account" IsReadOnly="True" /></Sequence>
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

        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(xaml, entry, null);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.IsNull(entry.ParseIssues);
        var branches = entry.Steps.Single().Branches!;
        Assert.AreEqual(2, branches.Count);
        Assert.AreEqual("SetDisplayMode", branches[0].Steps.Single().StepType);
        Assert.AreEqual("linkedby", ArgumentValue(branches[0].Steps.Single(), "ControlId"));
        Assert.AreEqual("True", ArgumentValue(branches[0].Steps.Single(), "IsReadOnly"));
        Assert.AreEqual("SetDisplayMode", branches[1].Steps.Single().StepType);

        var text = BusinessRuleTextRenderer.Render(entry.Steps);
        var expected = """
            IF account.numberofemployees IS NOT NULL
              LOCK linkedby
            ELSE
              LOCK linkedby
            """;
        Assert.AreEqual(expected.ReplaceLineEndings(), text?.ReplaceLineEndings());
    }

    [TestMethod]
    public void Decompile_NoXaml_SetsStatusWithoutSteps()
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(" ", entry, null);
        Assert.AreEqual("no xaml", entry.XamlParseStatus);
        Assert.IsNull(entry.Steps);
        Assert.IsNull(entry.ParseIssues);
    }

    [TestMethod]
    public void Render_NullSteps_ReturnsNull()
    {
        Assert.IsNull(BusinessRuleTextRenderer.Render(null));
    }

    [TestMethod]
    public void SanitizeDescription_TrimsRealTextAndRemovesPlaceholders()
    {
        Assert.IsNull(InvokeStatic("SanitizeDescription", (object?)null));
        Assert.IsNull(InvokeStatic("SanitizeDescription", "Click to add description"));
        Assert.AreEqual("real rule", InvokeStatic<string>("SanitizeDescription", " real rule "));
    }

    private static string ArgumentValue(WorkflowStepNode step, string name) =>
        step.Arguments!.Single(a => a.Name == name).Expression!;

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
