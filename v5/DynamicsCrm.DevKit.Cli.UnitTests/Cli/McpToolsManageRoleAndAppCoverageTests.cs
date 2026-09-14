using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class McpToolsManageRoleAndAppCoverageTests
{
    [TestMethod]
    public void ManageRoleTool_EntityFilterError_FormatsCorrectly()
    {
        var tool = new ManageRoleTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var errMethod = typeof(ManageRoleTool).GetMethod("EntityFilterError", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var failedResolve = new ResolveResult<EntityMetadata> { Status = ResolveStatus.NotFound, Error = "No match found." };
        var result = (CallToolResult)errMethod.Invoke(tool, new object[] { "account", "Ambiguous entity", failedResolve })!;
        Assert.IsNotNull(result);
        Assert.IsTrue(result.IsError);
        var text = ((TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity_name 'account'"));
    }
}
