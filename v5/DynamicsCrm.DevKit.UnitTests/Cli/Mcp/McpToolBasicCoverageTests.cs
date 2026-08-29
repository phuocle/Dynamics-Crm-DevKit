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
        var tool = new CreateRecordsTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("", "[]");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public async Task CreateRecords_MissingRecordsJson_ReturnsError()
    {
        var tool = new CreateRecordsTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("account", "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "records_json is required");
    }

    [TestMethod]
    public async Task GenerateDemoData_MissingEntityName_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "", "2026-01-01", "2026-01-31");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public async Task GenerateDemoData_MissingDates_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "account", "", "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "from_date and to_date are required");
    }

    [TestMethod]
    public async Task GenerateDemoData_InvalidDateRange_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "account", "2026-02-01", "2026-01-01");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "must be >= from_date");
    }

    [TestMethod]
    public async Task GenerateDemoData_MissingWorkspaceFolder_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        // workspace_folder param removed (workspace auto-resolved from MCP roots,
        // cwd fallback when roots unavailable) — a null server no longer fails
        // workspace resolution; the tool proceeds and errors downstream on the
        // null ServiceClient.
        var result = await tool.generate_demo_data(null!, "account", "2026-01-01", "2026-01-31");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Error");
    }

    [TestMethod]
    public async Task GenerateDemoData_CountAboveLimit_ReturnsError()
    {
        var tool = new GenerateDemoDataTool(null!, new McpDryRunOptions());

        var result = await tool.generate_demo_data(null!, "account", "2026-01-01", "2026-01-31", count: 501);

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "exceeds maximum 500");
    }

    [TestMethod]
    public async Task ManageApp_InvalidAction_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_app(null!, action: "not_an_action");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Invalid action");
    }

    [TestMethod]
    public async Task ManageApp_DetailWithoutApp_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_app(null!, action: "detail", app: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "app is required");
    }

    [TestMethod]
    public async Task ManageApp_CreateWithoutSolution_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_app(null!, action: "create", display_name: "Demo App");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "solution_name is required");
    }

    [TestMethod]
    public async Task ManageApp_CreateWithoutDisplayName_ReturnsError()
    {
        var tool = new ManageAppTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_app(null!, action: "create", solution_name: "DemoSolution");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "display_name is required");
    }

    [TestMethod]
    public async Task ManageRibbon_MissingAction_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_ribbon(null!, action: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "action is required");
    }

    [TestMethod]
    public async Task ManageRibbon_InvalidAction_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_ribbon(null!, action: "not_an_action");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Invalid action");
    }

    [TestMethod]
    public async Task ManageRibbon_DetailWithoutEntity_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_ribbon(null!, action: "detail", entity_name: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public async Task ManageRibbon_UpdateWithoutEntity_ReturnsError()
    {
        var tool = new ManageRibbonTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = await tool.manage_ribbon(null!, action: "update", entity_name: "");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void ManageTable_NoLogicalNameNoCreateFields_ReturnsError()
    {
        var tool = new ManageTableTool(null!, DryRunOptions(), DryRunTestHelpers.BlockedContext());

        var result = tool.manage_table();

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "logical_name is required");
    }
}
