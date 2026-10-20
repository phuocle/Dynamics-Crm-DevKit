using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
[DoNotParallelize]
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
        // The guide explains project .env support so the MCP config can be committed safely.
        StringAssert.Contains(stdout, "CONNECTION (PROJECT .env OR COMMAND-LINE ARGUMENTS)");
        StringAssert.Contains(stdout, "project .env");
        StringAssert.Contains(stdout, "working directory");
        StringAssert.Contains(stdout, "connection secrets belong in the ignored project .env");
        StringAssert.Contains(stdout, "--auth");
        StringAssert.Contains(stdout, "devkit-claude");
        StringAssert.Contains(stdout, "AVAILABLE TOOLS");
        Assert.IsFalse(stdout.Contains("\"--clientsecret\""), "MCP config examples must not expose secrets");
        Assert.IsFalse(stdout.Contains("\"SECRET\""), "MCP config examples must not expose secrets");
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
    public async Task ExecuteAsync_EnvironmentVariablesPresent_DoesNotUseThemForConnection()
    {
        // MCP reads project .env, not DEVKIT_* variables from the process environment.
        var (exitCode, _, stderr) = await ExecuteWithEnvironmentAsync(new Dictionary<string, string>
        {
            ["DEVKIT_AUTH_TYPE"] = "ClientSecret",
            ["DEVKIT_URL"] = "https://machine.example.test",
            ["DEVKIT_CLIENT_ID"] = "machine-client",
            ["DEVKIT_CLIENT_SECRET"] = "machine-secret",
        }, new McpCommandArgs());

        Assert.AreEqual(2, exitCode);
        StringAssert.Contains(stderr, "--auth or --conn is required");
    }

    [TestMethod]
    public async Task ExecuteAsync_UsesProjectEnvForConnectionDefaults()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-env-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        File.WriteAllText(Path.Combine(tempDirectory, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\n");
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs());

            Assert.AreEqual(1, exitCode);
            StringAssert.Contains(stderr, "Auth: ClientSecret");
            StringAssert.Contains(stderr, "--url is required");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    private static async Task<(int ExitCode, string Stdout, string Stderr)> ExecuteWithEnvironmentAsync(
        Dictionary<string, string> variables, McpCommandArgs args)
    {
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
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        using var stdout = new StringWriter();
        using var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        try
        {
            foreach (var (name, value) in variables)
                Environment.SetEnvironmentVariable(name, value);
            var exitCode = await new McpCommand().ExecuteAsyncForTesting(null!, args, CancellationToken.None);
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
            var exitCode = await new McpCommand().ExecuteAsyncForTesting(null!, args, CancellationToken.None);
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
