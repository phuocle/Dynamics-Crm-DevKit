using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System.Linq;
using System.Reflection;
using CliManageReportTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageAssetsTool;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageReport;

[TestClass]
public sealed class ManageReportToolTests
{
    [TestMethod]
    public void ToolType_RegistersManageReport()
    {
        var toolType = typeof(CliManageReportTool);
        Assert.IsNotNull(toolType.GetCustomAttribute<McpServerToolTypeAttribute>());

        var method = toolType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Single(candidate => candidate.GetCustomAttribute<McpServerToolAttribute>() != null);
        var attribute = method.GetCustomAttribute<McpServerToolAttribute>();

        Assert.AreEqual("manage_assets", attribute!.Name);

        var workerMethod = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageReportTool)
            .GetMethod(nameof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageReportTool.manage_report))!;
        var prefilter = workerMethod.GetParameters().Single(parameter => parameter.Name == "prefilter");
        Assert.AreEqual(typeof(bool), prefilter.ParameterType);
        Assert.IsTrue((bool)prefilter.DefaultValue!);
    }
}
