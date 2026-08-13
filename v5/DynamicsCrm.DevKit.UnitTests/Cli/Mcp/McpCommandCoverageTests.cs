using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class McpCommandCoverageTests
{
    [TestMethod]
    public async Task ExecuteAsync_ListTools_PrintsToolCatalog()
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { ListTools = true });

        Assert.AreEqual(0, exitCode);
        StringAssert.Contains(stdout, "DevKit MCP Tools");
        StringAssert.Contains(stdout, "ReadOnly");
        StringAssert.Contains(stdout, "Mutation");
        StringAssert.Contains(stdout, "manage_record");
        Assert.AreEqual("", stderr);
    }

    [TestMethod]
    public async Task ExecuteAsync_SetupGuide_PrintsGuideWithoutConnecting()
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { SetupGuide = true });

        Assert.AreEqual(0, exitCode);
        StringAssert.Contains(stdout, "DevKit MCP Setup Guide");
        StringAssert.Contains(stdout, "DEVKIT_AUTH_TYPE");
        StringAssert.Contains(stdout, "devkit-claude");
        StringAssert.Contains(stdout, "AVAILABLE TOOLS");
        Assert.AreEqual("", stderr);
    }

    [TestMethod]
    public async Task ExecuteAsync_MissingAuth_ReturnsConnectionError()
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs());

        Assert.AreEqual(2, exitCode);
        Assert.AreEqual("", stdout);
        StringAssert.Contains(stderr, "Auth: (legacy --conn)");
        StringAssert.Contains(stderr, "--auth or --conn is required");
    }

    [TestMethod]
    public async Task ExecuteAsync_ModernAuthWithoutUrl_ReturnsValidationError()
    {
        var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { AuthType = "ClientSecret" });

        Assert.AreEqual(1, exitCode);
        StringAssert.Contains(stderr, "Auth: ClientSecret");
        StringAssert.Contains(stderr, "--url is required");
    }

    [TestMethod]
    public async Task ExecuteAsync_UnsupportedModernAuth_ReturnsSupportedTypes()
    {
        var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs
        {
            AuthType = "Future",
            Url = "https://contoso.crm.dynamics.com"
        });

        Assert.AreEqual(1, exitCode);
        StringAssert.Contains(stderr, "Authentication type 'Future' is not supported");
        StringAssert.Contains(stderr, "Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD");
    }

    private static async Task<(int ExitCode, string Stdout, string Stderr)> ExecuteWithConsoleAsync(McpCommandArgs args)
    {
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        var envNames = new[]
        {
            "DEVKIT_CONNECTION",
            "DEVKIT_AUTH_TYPE",
            "DEVKIT_URL",
            "DEVKIT_CLIENT_ID",
            "DEVKIT_CLIENT_SECRET",
            "DEVKIT_PAC_PROFILE",
            "DEVKIT_USERNAME",
            "DEVKIT_PASSWORD",
            "DEVKIT_DOMAIN"
        };
        var oldEnv = envNames.ToDictionary(name => name, Environment.GetEnvironmentVariable);
        using var stdout = new StringWriter();
        using var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        try
        {
            foreach (var name in envNames)
                Environment.SetEnvironmentVariable(name, null);
            var exitCode = await new McpCommand().ExecuteAsync(null!, args, CancellationToken.None);
            return (exitCode, stdout.ToString(), stderr.ToString());
        }
        finally
        {
            foreach (var pair in oldEnv)
                Environment.SetEnvironmentVariable(pair.Key, pair.Value);
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }
}
