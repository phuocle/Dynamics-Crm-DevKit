using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class DevKitCommandDeepCoverageTests
{
    private static object InvokeStatic(string name, params object[] args)
    {
        var method = typeof(DevKitCommand<CommandLineArgs>).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static);
        return method!.Invoke(null, args)!;
    }

    [TestMethod]
    public void DevKitCommand_HelperMethods_ReturnExpectedValues()
    {
        // ShouldLogClientId
        Assert.IsTrue((bool)InvokeStatic("ShouldLogClientId", "ClientSecret"));
        Assert.IsTrue((bool)InvokeStatic("ShouldLogClientId", "Interactive"));
        Assert.IsTrue((bool)InvokeStatic("ShouldLogClientId", "DeviceCode"));
        Assert.IsTrue((bool)InvokeStatic("ShouldLogClientId", "OAuth"));
        Assert.IsFalse((bool)InvokeStatic("ShouldLogClientId", "AD"));
        Assert.IsFalse((bool)InvokeStatic("ShouldLogClientId", "FromPac"));

        // ShouldLogUsername
        Assert.IsTrue((bool)InvokeStatic("ShouldLogUsername", "OAuth"));
        Assert.IsTrue((bool)InvokeStatic("ShouldLogUsername", "AD"));
        Assert.IsFalse((bool)InvokeStatic("ShouldLogUsername", "ClientSecret"));
        Assert.IsFalse((bool)InvokeStatic("ShouldLogUsername", "Interactive"));

        // GetConnectionUserName
        var adSettings = new CommandLineArgs { AuthType = "AD", Domain = "CORP", Username = "john" };
        Assert.AreEqual(@"CORP\john", (string)InvokeStatic("GetConnectionUserName", adSettings));

        var adNoDomain = new CommandLineArgs { AuthType = "AD", Domain = "", Username = "john" };
        Assert.AreEqual("john", (string)InvokeStatic("GetConnectionUserName", adNoDomain));

        var oauthSettings = new CommandLineArgs { AuthType = "OAuth", Domain = "CORP", Username = "john" };
        Assert.AreEqual("john", (string)InvokeStatic("GetConnectionUserName", oauthSettings));
    }

    [TestMethod]
    public async Task McpCommand_PrintGuidesAndTools_ExecuteSuccessfully()
    {
        var mcpCmd = new McpCommand();

        // 1. SetupGuide returns 0
        var guideArgs = new McpCommandArgs { SetupGuide = true };
        var guideCode = await mcpCmd.ExecuteAsyncForTesting(null!, guideArgs, CancellationToken.None);
        Assert.AreEqual(0, guideCode);

        // 2. ListTools returns 0
        var toolsArgs = new McpCommandArgs { ListTools = true };
        var toolsCode = await mcpCmd.ExecuteAsyncForTesting(null!, toolsArgs, CancellationToken.None);
        Assert.AreEqual(0, toolsCode);

        // 3. Private logging helpers via reflection
        var type = typeof(McpCommand);
        var logInfo = type.GetMethod("LogInfo", BindingFlags.NonPublic | BindingFlags.Static);
        logInfo?.Invoke(null, new object[] { "Test log message" });

        var logError = type.GetMethod("LogError", BindingFlags.NonPublic | BindingFlags.Static);
        logError?.Invoke(null, new object[] { "Test error message" });

        var logConn = type.GetMethod("LogConnectionInfo", BindingFlags.NonPublic | BindingFlags.Static);
        logConn?.Invoke(null, new object[] { new McpCommandArgs { AuthType = "ClientSecret", Url = "https://org.crm.dynamics.com" } });
    }
}
