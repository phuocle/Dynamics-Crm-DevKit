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
        var xaml = @"<Activity>
            <GetEntityProperty Attribute=""telephone1"" Entity=""[InputEntities(&quot;primary_entity&quot;)]"" />
            <ConditionOperator>Equal</ConditionOperator>
            <WorkflowPropertyType.String,""123"",""System.String"">
            <SetVisibility ControlId=""telephone1"" IsVisible=""True"" />
            <SetRequired ControlId=""telephone1"" Required=""True"" />
            <SetAttributeValue Attribute=""telephone1"" EntityName=""account"" />
            <ShowError Message=""Invalid Phone"" />
            <LockField ControlId=""telephone1"" />
            <UnlockField ControlId=""fax"" />
            <SetDefaultValue Attribute=""creditlimit"" />
        </Activity>";

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
