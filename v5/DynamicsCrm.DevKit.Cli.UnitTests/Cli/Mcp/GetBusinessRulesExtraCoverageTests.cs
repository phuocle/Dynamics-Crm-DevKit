using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class GetBusinessRulesExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();

        var accMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        TestMetadata.Set(accMeta, nameof(EntityMetadata.ObjectTypeCode), (int?)1);
        _entities.Add(accMeta);

        _fake.OnExecute = request =>
        {
            if (request is RetrieveAllEntitiesRequest)
            {
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                };
            }
            if (request is RetrieveEntityRequest rer)
            {
                var meta = _entities.Find(e => e.LogicalName == rer.LogicalName) ?? accMeta;
                return new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = meta }
                };
            }
            return new OrganizationResponse();
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private GetBusinessRulesTool CreateTool() => new(_fake.Client);

    [TestMethod]
    public void GetBusinessRules_ValidationErrors()
    {
        var tool = CreateTool();

        var err1 = tool.get_business_rules(entity_name: "");
        Assert.IsTrue(err1.IsError == true);

        var err2 = tool.get_business_rules(entity_name: "account", status: "invalid_status");
        Assert.IsTrue(err2.IsError == true);

        var err3 = tool.get_business_rules(entity_name: "account", rule_id: "not-a-guid");
        Assert.IsTrue(err3.IsError == true);
    }

    [TestMethod]
    public void GetBusinessRules_List_Success()
    {
        var ruleId = Guid.NewGuid();
        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            var br = new Entity("workflow", ruleId)
            {
                ["workflowid"] = ruleId,
                ["name"] = "Account Rule 1",
                ["primaryentity"] = "1",
                ["scope"] = new OptionSetValue(1),
                ["statecode"] = new OptionSetValue(1),
                ["statuscode"] = new OptionSetValue(2),
                ["modifiedon"] = DateTime.UtcNow
            };
            br.FormattedValues["scope"] = "Entity";
            br.FormattedValues["statuscode"] = "Activated";
            ec.Entities.Add(br);
            return ec;
        };

        var tool = CreateTool();
        var resActive = tool.get_business_rules(entity_name: "account", status: "active", max_records: -10);
        Assert.IsFalse(resActive.IsError == true);
        StringAssert.Contains(resActive.GetText(), "found");

        var resDraft = tool.get_business_rules(entity_name: "account", status: "draft");
        Assert.IsFalse(resDraft.IsError == true);

        var resInactive = tool.get_business_rules(entity_name: "account", status: "inactivedraft");
        Assert.IsFalse(resInactive.IsError == true);

        var resCanceled = tool.get_business_rules(entity_name: "account", status: "canceled");
        Assert.IsFalse(resCanceled.IsError == true);
    }

    [TestMethod]
    public void GetBusinessRules_Detail_ValidationAndParsing()
    {
        var ruleId = Guid.NewGuid();
        // Valid business-rule XAML: the DSL decompiler parses real XML, so the
        // fixture must be well-formed (the old regex parser accepted pseudo-XAML).
        var xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                      xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                      xmlns:mcwc="clr-namespace:Microsoft.Crm.Workflow.ClientActivities;assembly=Microsoft.Crm.Workflow">
              <mxswa:Workflow>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow" DisplayName="ConditionStep1">
                  <mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Wait">False</InArgument></mxswa:ActivityReference.Arguments>
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Variable" x:Key="Variables">
                      <Variable x:TypeArguments="x:Boolean" Default="False" Name="ConditionBranchStep2_condition" />
                      <Variable x:TypeArguments="x:Object" Name="ConditionBranchStep2_1" />
                    </sco:Collection>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:GetEntityProperty Attribute="telephone1" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="account" Value="[ConditionBranchStep2_1]" />
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow" DisplayName="EvaluateCondition">
                        <mxswa:ActivityReference.Arguments>
                          <InArgument x:TypeArguments="mxsq:ConditionOperator" x:Key="ConditionOperator">Null</InArgument>
                          <x:Null x:Key="Parameters" />
                          <InArgument x:TypeArguments="x:Object" x:Key="Operand">[ConditionBranchStep2_1]</InArgument>
                          <OutArgument x:TypeArguments="x:Boolean" x:Key="Result">[ConditionBranchStep2_condition]</OutArgument>
                        </mxswa:ActivityReference.Arguments>
                      </mxswa:ActivityReference>
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow" DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:TypeArguments="x:Boolean" x:Key="Condition">[ConditionBranchStep2_condition]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow" DisplayName="ConditionBranchStep2">
                            <mxswa:ActivityReference.Properties>
                              <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                                <Sequence DisplayName="SetVisibilityStep1: New Action"><mcwc:SetVisibility ControlId="telephone1" IsVisible="False" /></Sequence>
                                <Sequence DisplayName="SetRequiredStep2: New Action"><mcwc:SetRequired ControlId="telephone1" Required="True" /></Sequence>
                                <Sequence DisplayName="ShowErrorStep3: New Action"><mcwc:ShowError Message="Invalid Phone" /></Sequence>
                                <Sequence DisplayName="LockFieldStep4: New Action"><mcwc:LockField ControlId="telephone1" /></Sequence>
                                <Sequence DisplayName="UnlockFieldStep5: New Action"><mcwc:UnlockField ControlId="fax" /></Sequence>
                              </sco:Collection>
                            </mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>
            """;

        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            if (query is QueryExpression qe && qe.EntityName == "workflow")
            {
                var br = new Entity("workflow", ruleId)
                {
                    ["workflowid"] = ruleId,
                    ["name"] = "Complex Business Rule",
                    ["primaryentity"] = "account",
                    ["category"] = new OptionSetValue(2),
                    ["statecode"] = new OptionSetValue(1),
                    ["statuscode"] = new OptionSetValue(2),
                    ["xaml"] = xaml,
                    ["description"] = "Some custom rule description"
                };
                ec.Entities.Add(br);
            }
            return ec;
        };

        var tool = CreateTool();
        var res = tool.get_business_rules(entity_name: "account", rule_id: ruleId.ToString("D"));
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Complex Business Rule");
        StringAssert.Contains(res.GetText(), "complete");
        StringAssert.Contains(res.GetText(), "6 steps");
    }

    [TestMethod]
    public void GetBusinessRules_Detail_Errors()
    {
        var ruleId = Guid.NewGuid();
        _fake.OnRetrieveMultiple = query => new EntityCollection();

        var tool = CreateTool();
        var resNotFound = tool.get_business_rules(entity_name: "account", rule_id: ruleId.ToString("D"));
        Assert.IsTrue(resNotFound.IsError == true);

        // Wrong category
        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            ec.Entities.Add(new Entity("workflow", ruleId)
            {
                ["category"] = new OptionSetValue(0), // Classic workflow
                ["primaryentity"] = "account"
            });
            return ec;
        };
        var resWrongCategory = tool.get_business_rules(entity_name: "account", rule_id: ruleId.ToString("D"));
        Assert.IsTrue(resWrongCategory.IsError == true);

        // Mismatched entity
        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            ec.Entities.Add(new Entity("workflow", ruleId)
            {
                ["category"] = new OptionSetValue(2),
                ["primaryentity"] = "contact"
            });
            return ec;
        };
        var resWrongEntity = tool.get_business_rules(entity_name: "account", rule_id: ruleId.ToString("D"));
        Assert.IsTrue(resWrongEntity.IsError == true);
    }
}
