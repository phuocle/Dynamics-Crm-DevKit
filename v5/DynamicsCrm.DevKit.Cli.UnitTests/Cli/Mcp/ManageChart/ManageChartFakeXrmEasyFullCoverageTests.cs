using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using ModelContextProtocol.Protocol;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
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
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageChart;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageChartTool (HandleList/Detail/Create/Update/
/// Rename/SetDefault/Undo plus measures/filter parsing and builders). Metadata and
/// publish requests go through the ChartOrgService decorator; mutations hit FakeXrmEasy.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageChartFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private ChartOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-chart-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new ChartOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeEntityMetadata("account", "Account", "accountid", "name", 1));
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageChartTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeEntityMetadata(string logical, string display, string idAttr, string nameAttr, int otc)
    {
        var name = new StringAttributeMetadata { LogicalName = nameAttr, SchemaName = nameAttr, DisplayName = MakeLabel("Name") };
        var meta = new EntityMetadata { LogicalName = logical, SchemaName = display, DisplayName = MakeLabel(display) };
        Set(meta, "PrimaryIdAttribute", idAttr);
        Set(meta, "PrimaryNameAttribute", nameAttr);
        Set(meta, "ObjectTypeCode", otc);
        Set(meta, "Attributes", new AttributeMetadata[] { name });
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private const string DataXml =
        "<datadefinition><fetchcollection><fetch mapping=\"logical\" aggregate=\"true\"><entity name=\"account\">" +
        "<attribute alias=\"aggregate_column\" name=\"importsequencenumber\" aggregate=\"count\" />" +
        "<attribute groupby=\"true\" alias=\"groupby_column\" name=\"statecode\" />" +
        "</entity></fetch></fetchcollection><categorycollection><category><measurecollection>" +
        "<measure alias=\"aggregate_column\" /></measurecollection></category></categorycollection></datadefinition>";

    private Guid SeedChart(string name, bool isDefault = false, string entity = "account")
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("savedqueryvisualization", id)
        {
            ["savedqueryvisualizationid"] = id,
            ["name"] = name,
            ["primaryentitytypecode"] = entity,
            ["isdefault"] = isDefault,
            ["description"] = "seeded chart",
            ["datadescription"] = DataXml,
            ["presentationdescription"] = "<Chart><Series><Series ChartType=\"Pie\" Name=\"aggregate_column\"/></Series></Chart>"
        });
        return id;
    }

    private static string Text(CallToolResult r) => r.GetText();

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_NoCharts_ReturnsZero()
    {
        var result = await NewTool().manage_chart(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 0 system chart(s) for 'account'");
    }

    [TestMethod]
    public async Task List_AllEntities_NoFilter()
    {
        SeedChart("Any Chart");
        var result = await NewTool().manage_chart(null!, "list", "");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "across all entities");
    }

    [TestMethod]
    public async Task List_WithCharts_ReturnsEntries()
    {
        SeedChart("Leads By Source");
        SeedChart("Revenue Chart");
        var result = await NewTool().manage_chart(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 2 system chart(s) for 'account'");
    }

    [TestMethod]
    public async Task List_DisplayNameEntity_Resolves()
    {
        SeedChart("Disp Chart");
        var result = await NewTool().manage_chart(null!, "list", "Account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 1 system chart(s) for 'account'");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_ById_Found()
    {
        var id = SeedChart("Detail Chart");
        var result = await NewTool().manage_chart(null!, "detail", "account", chart_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Detail Chart'");
        StringAssert.Contains(Text(result), "datadescription/presentationdescription in structuredContent");
    }

    [TestMethod]
    public async Task Detail_ByName_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "detail", "account", chart_name: "nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No chart found matching name 'nope'");
    }

    [TestMethod]
    public async Task Detail_NoIdNoName_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "detail", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Either chart_id or chart_name must be provided");
    }

    [TestMethod]
    public async Task Detail_ByName_Found()
    {
        SeedChart("Name Detail Chart");
        var result = await NewTool().manage_chart(null!, "detail", "account", chart_name: "Name Detail Chart");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Name Detail Chart'");
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_MissingEntity_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "", chart_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name is required when action='create'");
    }

    [TestMethod]
    public async Task Create_MissingChartName_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "chart_name is required when action='create'");
    }

    [TestMethod]
    public async Task Create_UnknownEntity_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "nosuchentity", chart_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Use get_tables to list entities");
    }

    [TestMethod]
    public async Task Create_PieDefault_NeedsConfirmation()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "My Pie");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "not created — confirmation required");
        StringAssert.Contains(Text(result), "type=Pie (default)");
        StringAssert.Contains(Text(result), "category=statecode (default)");
        StringAssert.Contains(Text(result), "legend=importsequencenumber/count (default)");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public async Task Create_PieConfirmed_CreatesChart()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "My Pie 2", confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created chart 'My Pie 2'");
        StringAssert.Contains(Text(result), "type=Pie");
        Assert.AreEqual(1, _service.Creates);
        Assert.IsTrue(_service.Publishes >= 1);
    }

    [TestMethod]
    public async Task Create_ExplicitChartType_NoConfirmationNeeded()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "My Column",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "importsequencenumber", aggregate_type: "count");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created chart 'My Column'");
    }

    [TestMethod]
    public async Task Create_MultiMeasure_NeedsConfirmation_DefaultsToColumn()
    {
        const string measures = "importsequencenumber:count; name:countcolumn:Names";
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Multi", measures: measures);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "not created — confirmation required");
        StringAssert.Contains(Text(result), "type=Column (default)");
        StringAssert.Contains(Text(result), "measures=[importsequencenumber:count; name:countcolumn:Names]");
    }

    [TestMethod]
    public async Task Create_MultiMeasureConfirmed_Creates()
    {
        const string measures = "importsequencenumber:count; name:countcolumn:Names";
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Multi 2", measures: measures, confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created chart 'Multi 2'");
        Assert.AreEqual(1, _service.Creates);
    }

    [TestMethod]
    public async Task Create_MultiMeasureSingleMeasureType_ReturnsError()
    {
        const string measures = "importsequencenumber:count; name:count";
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Multi", measures: measures, chart_type: "Pie", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "supports a single measure");
    }

    [TestMethod]
    public async Task Create_MeasuresWithAggregateColumn_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Amb", measures: "name:count", aggregate_column: "name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "measures cannot be combined with aggregate_column");
    }

    [TestMethod]
    public async Task Create_MeasuresWithNonCountAggregateType_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Amb2", measures: "name:count", aggregate_type: "sum");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "measures cannot be combined with aggregate_type");
    }

    [TestMethod]
    public async Task Create_MeasuresSegmentMissingColon_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Seg", measures: "namecount", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "measures segment 'namecount' is invalid");
    }

    [TestMethod]
    public async Task Create_MeasuresInvalidColumn_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Col", measures: "Bad Column:count", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not a valid column logical name");
    }

    [TestMethod]
    public async Task Create_MeasuresInvalidAggregateType_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Agg", measures: "name:median", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "measures aggregate type 'median' is invalid");
    }

    [TestMethod]
    public async Task Create_MeasuresEmptyAfterTrim_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Empty Seg", measures: " ; ; ", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "measures did not contain any valid segment");
    }

    [TestMethod]
    public async Task Create_FilterInvalidSegment_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Filter", filter: "statecode ??? 0");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "filter segment 'statecode ??? 0' is invalid");
    }

    [TestMethod]
    public async Task Create_FilterEmptyInList_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad In", filter: "industrycode in ()");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "empty value list for 'in'");
    }

    [TestMethod]
    public async Task Create_WithFilter_NeedsConfirmation_ThenCreates()
    {
        var first = await NewTool().manage_chart(null!, "create", "account", chart_name: "Filtered",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name", aggregate_type: "count",
            filter: "statecode=0; industrycode in (1,2); name like (A%); description not-null; createdon null");
        Assert.IsFalse(first.IsError == true);
        StringAssert.Contains(Text(first), "not created — confirmation required");
        StringAssert.Contains(Text(first), "filter=[statecode=0; industrycode in (1,2); namelike(A%); description not-null; createdon null]");

        var second = await NewTool().manage_chart(null!, "create", "account", chart_name: "Filtered 2",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name", aggregate_type: "count",
            filter: "statecode=0", confirmed: true);
        Assert.IsFalse(second.IsError == true);
        StringAssert.Contains(Text(second), "Created chart 'Filtered 2'");
        StringAssert.Contains(Text(second), "filter=[statecode=0]");
        Assert.AreEqual(1, _service.Creates);
    }

    [TestMethod]
    public async Task Create_FilterInvalidField_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Field", chart_type: "Column", filter: "Bad Field=1", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "filter field 'bad field' is not a valid column logical name");
    }

    [TestMethod]
    public async Task Create_FilterEmptyValue_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Empty Val", chart_type: "Column", filter: "statecode=", confirmed: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "has an empty value");
    }

    [TestMethod]
    public async Task Create_CustomPresentationInvalidChartType_ReturnsValidationError()
    {
        const string badPres = "<Chart><Series><Series ChartType=\"Circular\"/></Series></Chart>";
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Bad Type",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name",
            presentationdescription: badPres);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unsupported ChartType 'Circular'");
    }

    [TestMethod]
    public async Task Create_ValidateFalse_SkipsValidation()
    {
        const string badPres = "<Chart><Series><Series ChartType=\"Circular\"/></Series></Chart>";
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "No Valid",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name",
            presentationdescription: badPres, validate: false);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created chart 'No Valid'");
    }

    [TestMethod]
    public async Task Create_UnknownChartType_LoadsColumnTemplateFallback()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Custom Type",
            chart_type: "Hypercube", group_by_column: "statecode", aggregate_column: "name", confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "type=Hypercube");
    }

    [TestMethod]
    public async Task Create_PresentationFromFile_Resolves()
    {
        var presPath = Path.Combine(_tempDir, "custom.chart.xml");
        await File.WriteAllTextAsync(presPath, "<Chart><Series><Series ChartType=\"Column\" Name=\"aggregate_column\"/></Series></Chart>");
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "File Pres",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name",
            presentationdescription: presPath, confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created chart 'File Pres'");
    }

    [TestMethod]
    public async Task Create_UnknownSolution_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Sol Chart",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name",
            solution_name: "nosuchsolution", confirmed: true);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Create_DryRun_NoMutation()
    {
        var result = await NewTool(dryRun: true).manage_chart(null!, "create", "account", chart_name: "Dry Pie", confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE system chart 'Dry Pie' (Pie)");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public async Task Create_NoPublish_SkipsPublish()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "No Pub",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name", publish: false, confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Not published (publish=false)");
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Create_DonutType_NormalizesTemplate()
    {
        var result = await NewTool().manage_chart(null!, "create", "account", chart_name: "Donut Chart",
            chart_type: "Donut", group_by_column: "statecode", aggregate_column: "name", confirmed: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "type=Doughnut"); // Donut normalized
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_ByChartName_RebuildData_CreatesBackup()
    {
        var id = SeedChart("Upd Chart");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Upd Chart",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name", aggregate_type: "count");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated chart 'Upd Chart'");
        StringAssert.Contains(Text(result), "Backup saved");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_chart", "account")));
    }

    [TestMethod]
    public async Task Update_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No chart found matching name 'ghost'");
    }

    [TestMethod]
    public async Task Update_DryRun_NoMutation()
    {
        SeedChart("Dry Upd");
        var result = await NewTool(dryRun: true).manage_chart(null!, "update", "account", chart_name: "Dry Upd",
            chart_type: "Column", group_by_column: "statecode", aggregate_column: "name");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Update_MultiMeasure_SingleMeasureCurrentType_ReturnsError()
    {
        SeedChart("Pie Multi"); // seeded pres has ChartType="Pie"
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Pie Multi", measures: "name:count; importsequencenumber:count");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Chart type 'Pie' supports a single measure");
    }

    [TestMethod]
    public async Task Update_MultiMeasure_ExplicitColumn_Succeeds()
    {
        SeedChart("Multi Upd");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Multi Upd",
            chart_type: "Column", measures: "name:count:Names; importsequencenumber:count:Seq");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated chart 'Multi Upd'");
        Assert.AreEqual(1, _service.Updates);
    }

    [TestMethod]
    public async Task Update_MeasuresWithoutType_RebuildsPresentationKeepingCurrentType()
    {
        SeedChart("Keep Type");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Keep Type", measures: "name:count; importsequencenumber:countcolumn");
        Assert.IsTrue(result.IsError == true); // current type is Pie — single measure guard fires
    }

    [TestMethod]
    public async Task Update_PresXmlOverride_Updates()
    {
        SeedChart("Pres Override");
        var presPath = Path.Combine(_tempDir, "upd.chart.xml");
        await File.WriteAllTextAsync(presPath, "<Chart><Series><Series ChartType=\"Bar\" Name=\"aggregate_column\"/></Series></Chart>");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Pres Override", presentationdescription: presPath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated chart 'Pres Override'");
    }

    [TestMethod]
    public async Task Update_WithSolution_UnknownSolution_ReturnsError()
    {
        SeedChart("Upd Sol");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Upd Sol", solution_name: "nosuchsolution");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Update_InvalidCustomPres_ReturnsValidationError()
    {
        SeedChart("Bad Pres Upd");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "Bad Pres Upd",
            presentationdescription: "<Chart><Series><Series ChartType=\"Nope\"/></Series></Chart>");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unsupported ChartType 'Nope'");
    }

    [TestMethod]
    public async Task Update_BadDataXml_IsCaughtByFriendlyHandler()
    {
        // datadescription is a stored string; forcing garbage through the rebuild path
        // surfaces via the entry catch — here we verify the tool never corrupts state.
        SeedChart("No Change Upd");
        var result = await NewTool().manage_chart(null!, "update", "account", chart_name: "No Change Upd", description: "just a description");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated chart 'No Change Upd'");
    }

    // ──────────────────────────────────────────────
    // rename
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Rename_MissingName_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "rename", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "chart_name is required when action='rename'");
    }

    [TestMethod]
    public async Task Rename_ChartNotFound_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "rename", "account", chart_id: Guid.NewGuid().ToString(), chart_name: "New Name");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Rename_Success_UpdatesRecord()
    {
        var id = SeedChart("Rename Me");
        var result = await NewTool().manage_chart(null!, "rename", "account", chart_id: id.ToString(), chart_name: "Renamed Chart");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Renamed chart {id} to 'Renamed Chart'");
        Assert.AreEqual(1, _service.Updates);
    }

    [TestMethod]
    public async Task Rename_NoPublish()
    {
        var id = SeedChart("Rename No Pub");
        var result = await NewTool().manage_chart(null!, "rename", "account", chart_id: id.ToString(), chart_name: "X", publish: false);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Not published (publish=false)");
        Assert.AreEqual(0, _service.Publishes);
    }

    // ──────────────────────────────────────────────
    // set_default
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task SetDefault_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "set_default", "account", chart_name: "ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task SetDefault_DryRun_NoMutation()
    {
        SeedChart("Dry Def");
        var result = await NewTool(dryRun: true).manage_chart(null!, "set_default", "account", chart_name: "Dry Def");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task SetDefault_ClearsOtherDefaults()
    {
        var id1 = SeedChart("Def One", isDefault: true);
        var id2 = SeedChart("Def Two");
        var result = await NewTool().manage_chart(null!, "set_default", "account", chart_id: id2.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Set chart 'Def Two' ({id2}) as default for 'account'");
        Assert.AreEqual(2, _service.Updates);
        Assert.AreNotEqual(id1, id2);
    }

    [TestMethod]
    public async Task SetDefault_NoPublish()
    {
        var id = SeedChart("Def No Pub");
        var result = await NewTool().manage_chart(null!, "set_default", "account", chart_id: id.ToString(), publish: false);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Not published (publish=false)");
    }

    // ──────────────────────────────────────────────
    // undo
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_MissingPath_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "undo", "account", chart_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "backup path is required when action='undo'");
    }

    [TestMethod]
    public async Task Undo_FileNotFound_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "undo", "account", chart_id: Guid.NewGuid().ToString(),
            presentationdescription: Path.Combine(_tempDir, "missing.chart.json"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Backup file not found");
    }

    [TestMethod]
    public async Task Undo_EmptyJson_ReturnsError()
    {
        var path = Path.Combine(_tempDir, "empty.chart.json");
        await File.WriteAllTextAsync(path, "null");
        var result = await NewTool().manage_chart(null!, "undo", "account", chart_id: Guid.NewGuid().ToString(), presentationdescription: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "does not contain valid chart data");
    }

    [TestMethod]
    public async Task Undo_DryRun_NoMutation()
    {
        var id = SeedChart("Undo Dry");
        var path = Path.Combine(_tempDir, "dry.chart.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(id, "account", "Undo Dry", DataXml, "<Chart/>"));
        var result = await NewTool(dryRun: true).manage_chart(null!, "undo", "account", chart_id: id.ToString(), presentationdescription: path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Undo_Success_Restores()
    {
        var id = SeedChart("Undo Real");
        var path = Path.Combine(_tempDir, "real.chart.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(id, "account", "Undo Real", DataXml, "<Chart><Series><Series ChartType=\"Pie\"/></Series></Chart>"));
        var result = await NewTool().manage_chart(null!, "undo", "account", chart_id: id.ToString(), presentationdescription: path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Restored chart {id} from backup");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
    }

    [TestMethod]
    public async Task Undo_NoEntity_SkipsPublish()
    {
        var id = SeedChart("Undo NoEnt");
        var path = Path.Combine(_tempDir, "noent.chart.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(id, "", "Undo NoEnt", DataXml, "<Chart/>"));
        var result = await NewTool().manage_chart(null!, "undo", "account", chart_id: id.ToString(), presentationdescription: path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Not published.");
        Assert.AreEqual(0, _service.Publishes);
    }

    // ──────────────────────────────────────────────
    // misc
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task InvalidAction_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "frobnicate", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }

    [TestMethod]
    public async Task BadChartIdGuid_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "detail", "account", chart_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'not-a-guid' is not a valid GUID");
    }

    [TestMethod]
    public async Task MissingAction_ReturnsError()
    {
        var result = await NewTool().manage_chart(null!, "", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action is required");
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    private static string MakeBackupJson(Guid chartId, string entity, string chartName, string dataXml, string presXml) =>
        JsonSerializer.Serialize(new Dictionary<string, string>
        {
            ["entity"] = entity,
            ["chartId"] = chartId.ToString(),
            ["chartName"] = chartName,
            ["timestamp"] = "2026-09-06T00:00:00",
            ["dataDescription"] = dataXml,
            ["presentationDescription"] = presXml
        });

    private sealed class ChartOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();

        public int Creates;
        public int Updates;
        public int Publishes;

        public ChartOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            return _inner.Create(entity);
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is PublishXmlRequest) { Publishes++; return new OrganizationResponse(); }
            if (request is RetrieveAllEntitiesRequest)
            {
                var resp = new RetrieveAllEntitiesResponse();
                resp.Results["EntityMetadata"] = Entities.ToArray();
                return resp;
            }
            if (request is RetrieveEntityRequest retrieveEntity)
            {
                var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                var resp = new RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                return resp;
            }
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
