using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliManageRecordTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRecordTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRecord;

[TestClass]
public sealed class ManageRecordToolTests
{
    [TestMethod]
    public void ToolType_RegistersManageRecord()
    {
        var toolType = typeof(CliManageRecordTool);
        Assert.IsNotNull(toolType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = toolType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("manage_record", attribute!.Name);
    }
}
