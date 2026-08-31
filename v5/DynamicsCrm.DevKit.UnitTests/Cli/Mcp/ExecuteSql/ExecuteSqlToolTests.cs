using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliExecuteSqlTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteSql;

[TestClass]
public sealed class ExecuteSqlToolTests
{
    [TestMethod]
    public void ToolType_RegistersExecuteSql()
    {
        var toolType = typeof(CliExecuteSqlTool);
        Assert.IsNotNull(toolType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = toolType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("execute_sql", attribute!.Name);
    }
}
