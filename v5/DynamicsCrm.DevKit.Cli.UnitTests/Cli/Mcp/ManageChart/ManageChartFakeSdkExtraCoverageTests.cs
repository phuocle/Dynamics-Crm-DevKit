using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageChart;

/// <summary>
/// Extra manage_chart coverage on a FakeSdkClient: the pie-default confirmation
/// plan, every filter operator rendering in the plan, the validation-failure
/// return for a broken presentationdescription, the update DryRun plan, and the
/// presentationdescription rebuild with an aggregate alias.
/// </summary>
[TestClass]
public sealed class ManageChartFakeSdkExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity _chart = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[] { TestMetadata.Entity("account", "Account") } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = TestMetadata.Entity("account", "Account") }
            },
            _ => new OrganizationResponse()
        };

        var chartId = Guid.NewGuid();
        _chart = new Entity("savedqueryvisualization", chartId)
        {
            ["savedqueryvisualizationid"] = chartId,
            ["name"] = "Existing Chart",
            ["description"] = "d",
            ["datadescription"] = "<datadefinition><fetchcollection><fetch mapping='logical' aggregate='true'><entity name='account'><attribute alias='aggregate_column' name='revenue' aggregate='sum' /><attribute groupby='true' alias='groupby_column' name='statecode' /></entity></fetch></fetchcollection></datadefinition>",
            ["presentationdescription"] = "<Chart><Series><Series ChartType='Column' Name='aggregate_column' /></Series></Chart>",
            ["isdefault"] = false,
            ["primaryentitytypecode"] = "account"
        };

        _fake.OnRetrieve = (entityName, id, columnSet) =>
            entityName == "savedqueryvisualization" ? _chart : new Entity(entityName, id);
        _fake.OnUpdate = entity => { };
        _fake.OnRetrieveMultiple = query => new EntityCollection();
    }

    public void Dispose() => _fake.Dispose();

    private ManageChartTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    [TestMethod]
    public async System.Threading.Tasks.Task Create_PieDefaults_ReturnsConfirmationPlanWithDefaults()
    {
        var result = await NewTool().manage_chart(null!, action: "create", entity_name: "Account", chart_name: "Pie Plan");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "confirmation required");
        StringAssert.Contains(result.GetText(), "type=Pie (default)");
        StringAssert.Contains(result.GetText(), "category=statecode (default)");
        StringAssert.Contains(result.GetText(), "legend=importsequencenumber/count (default)");
        var defaults = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(defaults, "\"aggregateType\":\"count\"");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Create_PieExplicit_AggregateDefaultsApplied()
    {
        var result = await NewTool().manage_chart(null!, action: "create", entity_name: "Account", chart_name: "Pie Plan",
            chart_type: "Pie", group_by_column: "statecode", aggregate_column: "revenue");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var defaults = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(defaults, "\"aggregateType\":\"count\"");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Create_WithFilter_AllOperators_PlanRendersConditions()
    {
        const string filter = "statecode=0; name!=x; a>1; b>=2; c<3; d<=4; e like 'y'; f in (1,2); g null; h not-null";

        var result = await NewTool().manage_chart(null!, action: "create", entity_name: "Account", chart_name: "Filtered",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "revenue", filter: filter);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "confirmation required");
        StringAssert.Contains(result.GetText(), "statecode=0");
        StringAssert.Contains(result.GetText(), "name!=x");
        StringAssert.Contains(result.GetText(), "a>1");
        StringAssert.Contains(result.GetText(), "b>=2");
        StringAssert.Contains(result.GetText(), "c<3");
        StringAssert.Contains(result.GetText(), "d<=4");
        StringAssert.Contains(result.GetText(), "elike'y'");
        StringAssert.Contains(result.GetText(), "f in (1,2)");
        StringAssert.Contains(result.GetText(), "g null");
        StringAssert.Contains(result.GetText(), "h not-null");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Create_InvalidPresentationXml_ValidateTrue_ReturnsValidationErrors()
    {
        var result = await NewTool().manage_chart(null!, action: "create", entity_name: "Account", chart_name: "Broken",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "revenue",
            presentationdescription: "<Chart><Unclosed>", validate: true);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Validation failed for new chart 'Broken'");
        StringAssert.Contains(result.GetText(), "validationErrors");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Update_DryRun_ReturnsPlanWithoutMutating()
    {
        var result = await NewTool(dryRun: true).manage_chart(null!, action: "update", entity_name: "Account", chart_id: _chart.Id.ToString(),
            description: "new description");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE chart 'Existing Chart'");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Update_WithChartTypeAndAggregate_RebuildsPresentationWithAlias()
    {
        var result = await NewTool().manage_chart(null!, action: "update", entity_name: "Account", chart_id: _chart.Id.ToString(),
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "revenue",
            aggregate_type: "avg", filter: "statecode=0; industrycode in (1,2)", validate: false, publish: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated chart 'Existing Chart'");
        // The update summary does not render the filter — it is carried in the payload.
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "statecode=0; industrycode in (1,2)");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Update_DryRun_WithFilter_PlanIncludesFilter()
    {
        var result = await NewTool(dryRun: true).manage_chart(null!, action: "update", entity_name: "Account", chart_id: _chart.Id.ToString(),
            aggregate_column: "revenue", filter: "statecode=0; industrycode in (1,2)");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE chart");
        // The DryRun message does not render the filter — it is carried in the payload.
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "statecode=0; industrycode in (1,2)");
    }
}
