using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliManageRecordFileTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRecordFileTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRecordFile;

[TestClass]
public sealed class ManageRecordFileToolTests
{
    [TestMethod]
    public void ToolType_RegistersManageRecordFile()
    {
        var toolType = typeof(CliManageRecordFileTool);
        Assert.IsNotNull(toolType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = toolType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("manage_record_file", attribute!.Name);
    }
}
