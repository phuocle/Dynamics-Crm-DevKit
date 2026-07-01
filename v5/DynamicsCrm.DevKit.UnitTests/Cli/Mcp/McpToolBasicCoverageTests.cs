using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class McpToolBasicCoverageTests
{
    private static McpDryRunOptions DryRunOptions() => new() { DryRun = true };

    [TestMethod]
    public async Task CreateRecords_MissingEntityName_ReturnsError()
    {
        var tool = new CreateRecordsTool(null!, DryRunOptions());

        var result = await tool.create_records("", "[]");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public async Task CreateRecords_MissingRecordsJson_ReturnsError()
    {
        var tool = new CreateRecordsTool(null!, DryRunOptions());

        var result = await tool.create_records("account", "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "records_json is required");
    }

    [TestMethod]
    public void GenerateDemoData_MissingEntityName_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!);

        var result = tool.generate_demo_data("", "2026-01-01", "2026-01-31");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void GenerateDemoData_MissingDates_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!);

        var result = tool.generate_demo_data("account", "", "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "from_date and to_date are required");
    }

    [TestMethod]
    public void GenerateDemoData_InvalidDateRange_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!);

        var result = tool.generate_demo_data("account", "2026-02-01", "2026-01-01");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "must be >= from_date");
    }

    [TestMethod]
    public void GenerateDemoData_CountAboveLimit_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!);

        var result = tool.generate_demo_data("account", "2026-01-01", "2026-01-31", count: 501);

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "exceeds maximum 500");
    }

    [TestMethod]
    public void ManageApp_InvalidAction_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions());

        var result = tool.manage_app(action: "not_an_action");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Invalid action");
    }

    [TestMethod]
    public void ManageApp_DetailWithoutApp_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions());

        var result = tool.manage_app(action: "detail", app: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "app is required");
    }

    [TestMethod]
    public void ManageApp_CreateWithoutSolution_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions());

        var result = tool.manage_app(action: "create", display_name: "Demo App");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "solution_name is required");
    }

    [TestMethod]
    public void ManageApp_CreateWithoutDisplayName_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions());

        var result = tool.manage_app(action: "create", solution_name: "DemoSolution");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "display_name is required");
    }

    [TestMethod]
    public void ManageRibbon_MissingAction_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions());

        var result = tool.manage_ribbon(action: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "action is required");
    }

    [TestMethod]
    public void ManageRibbon_InvalidAction_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions());

        var result = tool.manage_ribbon(action: "not_an_action");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Invalid action");
    }

    [TestMethod]
    public void ManageRibbon_DetailWithoutEntity_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions());

        var result = tool.manage_ribbon(action: "detail", entity_name: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void ManageRibbon_UpdateWithoutEntity_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions());

        var result = tool.manage_ribbon(action: "update", entity_name: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void UpsertTable_MissingEntityName_ReturnsError()
    {
        var tool = new UpsertTableTool(null!, DryRunOptions());

        var result = tool.upsert_table(entity_name: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }
}
