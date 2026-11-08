using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageChart;

/// <summary>
/// manage_chart rare-branch coverage on a FakeSdkClient: pie defaults with
/// confirmation, solution add flows on create/update/rename/undo, multi-measure
/// create/update dry-runs, rename/undo dry-runs, empty filter input, chart-id
/// lookups that miss, and presentationdescription XML syntax errors.
/// </summary>
[TestClass]
public sealed class ManageChartErrorPathCoverageTests
{
    private const string EntityName = "charttargetentity";
    private const string SolutionName = "My Chart Solution";

    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _charts = new();
    private readonly List<Entity> _solutions = new();
    private bool _failAddToSolution;
    private Entity? _retrievedChart;
    private Guid _createdChartId;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _charts.Clear();
        _solutions.Clear();
        _failAddToSolution = false;
        _retrievedChart = null;
        _createdChartId = Guid.Empty;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieve = (entityName, _, _) => entityName == "publisher"
            ? new Entity("publisher", Guid.NewGuid())
            {
                ["customizationprefix"] = "dev",
                ["customizationoptionvalueprefix"] = 10000
            }
            : _retrievedChart;
        _fake.OnUpdate = _ => { };
        _fake.OnCreate = _ =>
        {
            _createdChartId = Guid.NewGuid();
            return _createdChartId;
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = new[] { TestMetadata.Entity(EntityName) } }
        },
        AddSolutionComponentRequest when _failAddToSolution =>
            throw new InvalidOperationException("solution is sealed"),
        _ => new OrganizationResponse()
    };

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe && qe.EntityName == "solution")
            return new EntityCollection(_solutions);
        return new EntityCollection();
    }

    private void SeedSolution()
    {
        _solutions.Add(new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = SolutionName,
            ["uniquename"] = "all_chart_solution",
            ["publisherid"] = new EntityReference("publisher", Guid.NewGuid())
        });
    }

    private ManageChartTool NewDryRunTool() =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext());

    private ManageChartTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    private static Entity MakeChart(string name)
    {
        var id = Guid.NewGuid();
        return new Entity("savedqueryvisualization", id)
        {
            ["savedqueryvisualizationid"] = id,
            ["name"] = name,
            ["primaryentitytypecode"] = EntityName,
            ["description"] = "demo",
            ["datadescription"] = "<datadefinition/>",
            ["presentationdescription"] = "<Chart><Series><Series ChartType=\"Column\" Name=\"aggregate_column\"/></Series></Chart>"
        };
    }

    // ── create ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Create_PieConfirmed_DryRun_AppliesDefaultsAndResolvesSolution()
    {
        SeedSolution();

        var result = await NewDryRunTool().manage_chart(null!, action: "create", entity_name: EntityName,
            chart_name: "Pie Chart", solution_name: SolutionName, confirmed: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would CREATE system chart 'Pie Chart' (Pie)");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        json.TryGetProperty("status", out var status);
        if (status.ValueKind == JsonValueKind.String)
        {
            Assert.AreEqual("not_executed", status.GetString());
        }
        json.TryGetProperty("defaultsApplied", out var defaultsElement);
        if (defaultsElement.ValueKind == JsonValueKind.Array)
        {
            var defaults = defaultsElement.EnumerateArray().Select(d => d.GetString()).ToList();
            CollectionAssert.Contains(defaults, "chart_type=Pie");
            CollectionAssert.Contains(defaults, "aggregate_type=count");
        }
        json.TryGetProperty("solutionName", out var solutionName);
        if (solutionName.ValueKind == JsonValueKind.String)
        {
            Assert.AreEqual("all_chart_solution", solutionName.GetString());
        }
    }

    [TestMethod]
    public async Task Create_MultiMeasureConfirmed_DryRun_ListsMeasures()
    {
        var result = await NewDryRunTool().manage_chart(null!, action: "create", entity_name: EntityName,
            chart_name: "Multi", measures: "revenue:sum:Revenue; amount:avg", validate: false, confirmed: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would CREATE system chart 'Multi' (Column)");
        StringAssert.Contains(result.GetText(), "measures=[revenue:sum:Revenue; amount:avg]");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("measures").GetArrayLength());
    }

    [TestMethod]
    public async Task Create_NonDryRun_WithSolution_AddsChartToSolution()
    {
        SeedSolution();

        var result = await NewTool().manage_chart(null!, action: "create", entity_name: EntityName,
            chart_name: "Created Pie", solution_name: SolutionName, confirmed: true, publish: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreNotEqual(Guid.Empty, _createdChartId);
        StringAssert.Contains(result.GetText(), "Created chart 'Created Pie'");
        StringAssert.Contains(result.GetText(), "Added to solution 'all_chart_solution'");
    }

    [TestMethod]
    public async Task Create_EmptyFilterInput_ReturnsNoValidConditionError()
    {
        var result = await NewTool().manage_chart(null!, action: "create", entity_name: EntityName,
            chart_name: "Filtered", filter: "; ;", confirmed: true);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "filter did not contain any valid condition");
        StringAssert.Contains(result.GetText(), "field<op>value");
    }

    // ── update ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Update_ByMissingChartId_ReturnsNotFound()
    {
        var result = await NewTool().manage_chart(null!, action: "update", chart_id: Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
        StringAssert.Contains(result.GetText(), "Use manage_chart(action='list') to find existing chart ids.");
    }

    [TestMethod]
    public async Task Update_MeasuresOnly_DryRun_RebuildsPresentation()
    {
        _retrievedChart = MakeChart("Revenue Chart");

        var result = await NewDryRunTool().manage_chart(null!, action: "update",
            chart_id: _retrievedChart.Id.ToString(),
            measures: "revenue:sum; amount:count", validate: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE chart 'Revenue Chart'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("measures").GetArrayLength());
    }

    [TestMethod]
    public async Task Update_WithSolution_DryRun_ReportsResolvedSolution()
    {
        SeedSolution();
        _retrievedChart = MakeChart("Sol Chart");

        var result = await NewDryRunTool().manage_chart(null!, action: "update",
            chart_id: _retrievedChart.Id.ToString(), solution_name: SolutionName, validate: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE chart 'Sol Chart'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("all_chart_solution", json.GetProperty("solutionName").GetString());
    }

    [TestMethod]
    public async Task Update_NonDryRun_WithSolution_AddsToSolution()
    {
        SeedSolution();
        _retrievedChart = MakeChart("Updated Chart");

        var result = await NewTool().manage_chart(null!, action: "update",
            chart_id: _retrievedChart.Id.ToString(), solution_name: SolutionName, validate: false, publish: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated chart 'Updated Chart'");
        StringAssert.Contains(result.GetText(), "Added to solution 'all_chart_solution'");
        StringAssert.Contains(result.GetText(), "Not published (publish=false)");
        Assert.IsNotNull(JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement
            .GetProperty("backupPath").GetString());
    }

    [TestMethod]
    public async Task Update_InvalidPresentationXml_ReturnsSyntaxError()
    {
        _retrievedChart = MakeChart("Broken Chart");

        var result = await NewTool().manage_chart(null!, action: "update",
            chart_id: _retrievedChart.Id.ToString(), presentationdescription: "not <<< xml", validate: true);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Validation failed for chart 'Broken Chart'");
        StringAssert.Contains(result.GetText(), "presentationdescription XML Syntax Error");
    }

    // ── rename ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Rename_DryRun_PreviewsRename()
    {
        _retrievedChart = MakeChart("Old Name");

        var result = await NewDryRunTool().manage_chart(null!, action: "rename",
            chart_id: _retrievedChart.Id.ToString(), chart_name: "New Name");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would RENAME chart");
        StringAssert.Contains(result.GetText(), "'New Name'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
    }

    [TestMethod]
    public async Task Rename_NonDryRun_WithFailingSolutionAdd_ReportsWarning()
    {
        SeedSolution();
        _retrievedChart = MakeChart("Old Name");
        _failAddToSolution = true;

        var result = await NewTool().manage_chart(null!, action: "rename",
            chart_id: _retrievedChart.Id.ToString(), chart_name: "Renamed Chart",
            solution_name: SolutionName, publish: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Renamed chart");
        StringAssert.Contains(result.GetText(), "Not added to solution 'My Chart Solution'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.IsNotNull(json.GetProperty("solutionWarning").GetString());
    }

    // ── undo ────────────────────────────────────────────────────────────────

    private static string WriteBackupFile(Guid chartId)
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.chart.json");
        File.WriteAllText(path, $$"""
            {
              "entity": "{{EntityName}}",
              "chartId": "{{chartId}}",
              "chartName": "Backup Chart",
              "dataDescription": "<datadefinition/>",
              "presentationDescription": "<Chart><Series><Series ChartType=\"Column\" Name=\"aggregate_column\"/></Series></Chart>"
            }
            """);
        return path;
    }

    [TestMethod]
    public async Task Undo_NonDryRun_WithFailingSolutionAdd_ReportsWarning()
    {
        SeedSolution();
        var chartId = Guid.NewGuid();
        var backupPath = WriteBackupFile(chartId);
        _failAddToSolution = true;
        try
        {
            var result = await NewTool().manage_chart(null!, action: "undo",
                chart_id: chartId.ToString(), presentationdescription: backupPath,
                solution_name: SolutionName, publish: false);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Restored chart");
            StringAssert.Contains(result.GetText(), "Not added to solution 'My Chart Solution'");
            StringAssert.Contains(result.GetText(), "Not published.");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.IsNotNull(json.GetProperty("solutionWarning").GetString());
        }
        finally { File.Delete(backupPath); }
    }

    [TestMethod]
    public async Task Undo_DryRun_PreviewsRestore()
    {
        var chartId = Guid.NewGuid();
        var backupPath = WriteBackupFile(chartId);
        try
        {
            var result = await NewDryRunTool().manage_chart(null!, action: "undo",
                chart_id: chartId.ToString(), presentationdescription: backupPath);

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would UNDO chart");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.AreEqual(chartId.ToString(), json.GetProperty("chartId").GetString());
            Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        }
        finally { File.Delete(backupPath); }
    }
}
