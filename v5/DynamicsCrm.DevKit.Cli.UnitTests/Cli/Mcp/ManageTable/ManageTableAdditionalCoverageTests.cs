using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageTable;

[TestClass]
public sealed class ManageTableAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageTableTool);

    [TestMethod]
    public void CreateNewEntity_DryRun_CoversNormalizationAndCreateOptions()
    {
        var tool = new ManageTableTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        var args = new object?[]
        {
            "Project", "Projects", "Description", true, true, false, null,
            "Organization", "Elastic", "core_name", "Project Name",
            0, "core_Project", "core_project", "core", "core_solution", "core_solution", "", new EntityMetadata()
        };
        var result = ToolType.GetMethod("CreateNewEntity", BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(tool, args);

        Assert.IsNotNull(result);
        Assert.IsNull(((ModelContextProtocol.Protocol.CallToolResult)result!).IsError);
    }

    [TestMethod]
    public void CreateNewEntity_InvalidOwnership_ReturnsError()
    {
        var tool = new ManageTableTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        var args = new object?[]
        {
            "Project", "Projects", "", null, null, null, null, "Tenant", "Standard",
            null, "Name", 100, "core_Project", "core_project",
            "core", "core_solution", "core_solution", "", new EntityMetadata()
        };
        var result = (ModelContextProtocol.Protocol.CallToolResult)ToolType
            .GetMethod("CreateNewEntity", BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(tool, args)!;
        Assert.IsTrue(result.IsError);
    }
}
