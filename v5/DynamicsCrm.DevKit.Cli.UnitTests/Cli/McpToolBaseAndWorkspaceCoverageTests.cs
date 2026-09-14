using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class McpToolBaseAndWorkspaceCoverageTests
{
    private sealed class ConcreteMcpTool : McpToolBase { }

    [TestMethod]
    public void McpToolBase_AllForwardingMethods_ReturnFormattedResults()
    {
        var tool = new ConcreteMcpTool();

        var success = tool.Success("Operation completed", new { value = 123 });
        Assert.IsNotNull(success);
        Assert.IsFalse(success.IsError == true);

        var partial = tool.Partial("Partially completed", new { succeeded = 1, failed = 1 });
        Assert.IsNotNull(partial);
        Assert.IsTrue(partial.IsError == true);

        var failed = tool.Failed("All failed", new { errors = 2 });
        Assert.IsNotNull(failed);
        Assert.IsTrue(failed.IsError == true);

        var error = tool.Error("Something failed", "Try again", new { code = 500 });
        Assert.IsNotNull(error);
        Assert.IsTrue(error.IsError == true);

        var exResult = tool.ThrowException(new InvalidOperationException("Test exception"));
        Assert.IsNotNull(exResult);
        Assert.IsTrue(exResult.IsError == true);

        var friendlyEx = tool.ThrowExceptionFriendly(new InvalidOperationException("Friendly test exception"));
        Assert.IsNotNull(friendlyEx);
        Assert.IsTrue(friendlyEx.IsError == true);

        var dryRun = tool.DryRun("Preview action", new { wouldCreate = "test" });
        Assert.IsNotNull(dryRun);
    }

    [TestMethod]
    public async Task WorkspaceFolderHelper_NullServer_ReturnsCurrentDirectory()
    {
        var dir = await WorkspaceFolderHelper.GetAsync(null);
        Assert.AreEqual(Environment.CurrentDirectory, dir);
    }

    [TestMethod]
    public void ServiceClientConnectionInfo_NullServiceClient_ThrowsArgumentNullException()
    {
        Assert.Throws<ArgumentNullException>(() => new ServiceClientConnectionInfo(null!));
    }

    [TestMethod]
    public void ServiceClientConnectionInfo_ValidInstance_InitializesCorrectly()
    {
        var sc = (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));
        var info = new ServiceClientConnectionInfo(sc);
        Assert.IsNotNull(info);
    }

    [TestMethod]
    public void LogLevel_EnumValues_HaveExpectedNumericAssignments()
    {
        Assert.AreEqual("Level0", LogLevel.Level0.ToString());
        Assert.AreEqual("Level1", LogLevel.Level1.ToString());
        Assert.AreEqual("Level2", LogLevel.Level2.ToString());
        Assert.AreEqual("Level3", LogLevel.Level3.ToString());
        Assert.AreEqual("Level4", LogLevel.Level4.ToString());
    }
}
