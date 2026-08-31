using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliManageDeletedRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageDeletedRecordsTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageDeletedRecords;

[TestClass]
public sealed class ManageDeletedRecordsToolTests
{
    [TestMethod]
    public void ToolType_RegistersManageDeletedRecords()
    {
        var toolType = typeof(CliManageDeletedRecordsTool);
        Assert.IsNotNull(toolType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = toolType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("manage_deleted_records", attribute!.Name);
    }
}
