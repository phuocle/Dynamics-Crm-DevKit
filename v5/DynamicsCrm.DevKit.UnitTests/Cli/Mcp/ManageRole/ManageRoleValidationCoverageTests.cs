using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleValidationCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRoleTool);
    private readonly ManageRoleTool _tool = new(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

    [TestMethod]
    public void PrivateHandlers_RejectMissingAndMalformedArgumentsBeforeServiceCalls()
    {
        AssertError(Invoke("HandleList", null, "not-a-guid", 1), "not a valid GUID");
        AssertError(Invoke("HandleDetail", null, null, null), "role_id or role_name is required");
        AssertError(Invoke("HandleUser", null, null), "user_id is required");
        AssertError(Invoke("HandleCreate", "New role", "not-a-guid"), "not a valid GUID");
        AssertError(Invoke("HandleUpdate", "not-a-guid", "Name", null), "not a valid GUID");
        AssertError(Invoke("HandleUpdate", null, null, "not json"), "role_id is required");
    }

    [TestMethod]
    public void PublicActionRouter_RecognizesTrimmedReadActionAndBlocksMutations()
    {
        var invalid = _tool.manage_role(null!, action: " no-such-action ").GetAwaiter().GetResult();
        AssertError(invalid, "Invalid action");

        var blocked = _tool.manage_role(null!, action: " delete ").GetAwaiter().GetResult();
        AssertError(blocked, "System Administrator");
    }

    private object Invoke(string name, params object?[] args) =>
        ToolType.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(_tool, args)!;

    private static void AssertError(object result, string text)
    {
        var call = (CallToolResult)result;
        Assert.IsTrue(call.IsError == true);
        StringAssert.Contains(call.Content!.OfType<TextContentBlock>().Single().Text!, text);
    }
}
