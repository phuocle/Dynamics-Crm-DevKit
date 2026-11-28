using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliExecuteSqlTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool;
using CliQueryDataTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.QueryDataTool;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ExecuteSql;

[TestClass]
public sealed class ExecuteSqlToolTests
{
    [TestMethod]
    public void ToolType_RegistersQueryDataRouterInsteadOfStandaloneExecuteSql()
    {
        Assert.IsNull(typeof(CliExecuteSqlTool).GetCustomAttribute<McpServerToolTypeAttribute>());

        var routerType = typeof(CliQueryDataTool);
        Assert.IsNotNull(routerType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = routerType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("query_data", attribute!.Name);
        Assert.IsTrue(attribute.ReadOnly);
    }
}
