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
        StringAssert.Contains(stdout, "DevKit MCP Tools (14)");
        StringAssert.Contains(stdout, "get_context");
        StringAssert.Contains(stdout, "manage_data");
        var lines = stdout.Split(Environment.NewLine, StringSplitOptions.RemoveEmptyEntries);
        Assert.AreEqual("=========================================================================", lines[^2]);
        Assert.AreEqual("Run 'devkit mcp --setup-guide' for setup instructions.", lines[^1]);
        Assert.AreEqual("", stderr);
    }

    [TestMethod]
    public async Task ExecuteAsync_SetupGuide_PrintsGuideWithoutConnecting()
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { SetupGuide = true });

        Assert.AreEqual(0, exitCode);
        StringAssert.Contains(stdout, "DevKit MCP Setup Guide");
        Assert.IsFalse(stdout.Contains("dotnet tool install"));
        StringAssert.Contains(stdout, "MCP reads the nearest .env found by searching upward from the launch directory.");
        StringAssert.Contains(stdout, "otherwise DEVKIT_DRY_RUN, otherwise false.");
        StringAssert.Contains(stdout, "AS_USER applies to its own group and is checked when");
        StringAssert.Contains(stdout, "Use devkit mcp --tools for the tool list.");
        StringAssert.Contains(stdout, "Use --auth with its required options or use --conn.");
        Assert.IsFalse(stdout.Contains("\u001b["), "Captured guide must remain plain text");

        var groupConfig = stdout.IndexOf("1. Define your groups in the project .env", StringComparison.Ordinal);
        var clientConfig = stdout.IndexOf("2. Add one entry to your MCP client", StringComparison.Ordinal);
        var verifyGroups = stdout.IndexOf("3. Reload the client and verify the groups", StringComparison.Ordinal);
        var startupGroup = stdout.IndexOf("Change the startup group", StringComparison.Ordinal);
        var optionalServer = stdout.IndexOf("Optional second MCP server", StringComparison.Ordinal);
        Assert.IsTrue(groupConfig >= 0 && clientConfig > groupConfig && verifyGroups > clientConfig &&
            startupGroup > verifyGroups && optionalServer > startupGroup);
        var envExample = stdout[groupConfig..clientConfig];
        StringAssert.Contains(envExample, "DEVKIT_AUTH_TYPE=FromPac");
        StringAssert.Contains(envExample, "DEVKIT_PAC_PROFILE=PAC_PROFILE_NAME");
        StringAssert.Contains(envExample, "DEVKIT_ALIAS=org-a");
        StringAssert.Contains(envExample, "DEVKIT_1_AUTH_TYPE=ClientSecret");
        StringAssert.Contains(envExample, "DEVKIT_1_URL=https://org-b.crm.dynamics.com");
        StringAssert.Contains(envExample, "DEVKIT_1_CLIENT_ID=APP_ID");
        StringAssert.Contains(envExample, "DEVKIT_1_CLIENT_SECRET=APP_SECRET");
        StringAssert.Contains(envExample, "DEVKIT_1_ALIAS=org-b");
        StringAssert.Contains(envExample, "DEVKIT_1_DRY_RUN=true");
        StringAssert.Contains(stdout[clientConfig..verifyGroups], "args = [\"mcp\", \"devkit-codex\"]");
        StringAssert.Contains(stdout[verifyGroups..startupGroup], "env=default, dryRun=false");
        StringAssert.Contains(stdout[verifyGroups..startupGroup], "{\"action\":\"whoami\",\"env\":\"org-b\"}            env=1, dryRun=true");
        StringAssert.Contains(stdout[startupGroup..optionalServer], "args = [\"mcp\", \"devkit-codex\", \"--env\", \"org-b\"]");
        StringAssert.Contains(stdout, "OAuth (legacy) and AD (on-premises) use URL, USERNAME and PASSWORD.");
        StringAssert.Contains(stdout[clientConfig..optionalServer], ".mcp.json");
        StringAssert.Contains(stdout[clientConfig..optionalServer], ".vscode/mcp.json");
        StringAssert.Contains(stdout[clientConfig..optionalServer], ".agents/mcp_config.json");
        StringAssert.Contains(stdout[clientConfig..optionalServer], ".zcode/config.json");
        Assert.IsFalse(stdout[..optionalServer].Contains("dynamicscrm-devkit-2"));
        StringAssert.Contains(stdout[optionalServer..], "[mcp_servers.dynamicscrm-devkit-2]");
        StringAssert.Contains(stdout[optionalServer..], "args = [\"mcp\", \"devkit-codex-2\", \"--env\", \"1\"]");
        Assert.AreEqual("", stderr);
    }

    [TestMethod]
    [DataRow("0")]
    [DataRow("-1")]
    [DataRow("01")]
    [DataRow("1.5")]
    [DataRow("")]
    [DataRow("   ")]
    public async Task ExecuteAsync_InvalidEnvSelector_ReturnsErrorBeforeRunningModes(string invalidEnv)
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs
        {
            Env = invalidEnv,
            ListTools = true
        });

        Assert.AreEqual(2, exitCode);
        Assert.AreEqual("", stdout);
        StringAssert.Contains(stderr, $"Invalid --env value '{invalidEnv}'");
    }

    [TestMethod]
    public async Task ExecuteAsync_InfoModesWithValidNonExistentEnvGroup_SucceedWithoutEnvFile()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-noenv-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (toolsExit, toolsOut, toolsErr) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "999", ListTools = true }, useCurrentProject: true);
            Assert.AreEqual(0, toolsExit);
            StringAssert.Contains(toolsOut, "DevKit MCP Tools");
            Assert.AreEqual("", toolsErr);

            var (guideExit, guideOut, guideErr) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "999", SetupGuide = true }, useCurrentProject: true);
            Assert.AreEqual(0, guideExit);
            StringAssert.Contains(guideOut, "DevKit MCP Setup Guide");
            Assert.AreEqual("", guideErr);
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_NoEnvFileFound_ReturnsMissingFileError()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-missingfile-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "1" }, useCurrentProject: true);

            Assert.AreEqual(2, exitCode);
            Assert.AreEqual("", stdout);
            StringAssert.Contains(stderr, "Cannot resolve environment group '1': no project .env file was found.");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_GroupMissingInNearestEnv_DoesNotFallBackToDefaultOrParentFile()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var rootDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-nearest-" + Guid.NewGuid().ToString("N"));
        var childDirectory = Path.Combine(rootDirectory, "child");
        Directory.CreateDirectory(childDirectory);
        // Parent has group 1, but nearest .env in child only has default group and an unrecognized DEVKIT_1_NOTE key.
        File.WriteAllText(Path.Combine(rootDirectory, ".env"),
            "DEVKIT_1_AUTH_TYPE=ClientSecret\nDEVKIT_1_URL=https://parent.crm.dynamics.com\n");
        File.WriteAllText(Path.Combine(childDirectory, ".env"),
            "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=https://default.crm.dynamics.com\nDEVKIT_1_NOTE=ignored\n");
        try
        {
            Environment.CurrentDirectory = childDirectory;
            var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "1" }, useCurrentProject: true);

            Assert.AreEqual(2, exitCode);
            Assert.AreEqual("", stdout);
            StringAssert.Contains(stderr, "Environment group '1' was not found in the selected .env file (expected DEVKIT_1_* connection keys).");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(rootDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_DoesNotBorrowSecretFromDefaultGroup()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-no-mix-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        File.WriteAllText(Path.Combine(tempDirectory, ".env"),
            "DEVKIT_AUTH_TYPE=ClientSecret\n" +
            "DEVKIT_URL=https://default.crm.dynamics.com\n" +
            "DEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000001\n" +
            "DEVKIT_CLIENT_SECRET=default-super-secret\n" +
            "DEVKIT_1_AUTH_TYPE=ClientSecret\n" +
            "DEVKIT_1_URL=https://one.crm.dynamics.com\n" +
            "DEVKIT_1_CLIENT_ID=00000000-0000-0000-0000-000000000011\n");
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "1" }, useCurrentProject: true);

            Assert.AreEqual(2, exitCode);
            StringAssert.Contains(stderr, "Incomplete connection configuration for environment group '1'");
            Assert.IsFalse(stderr.Contains("default-super-secret"), "Secrets must never be printed in error messages.");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_PartialArgOverride_IsRejectedWithoutReadingEnv()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-override-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        File.WriteAllText(Path.Combine(tempDirectory, ".env"),
            "DEVKIT_100_AUTH_TYPE=ClientSecret\n" +
            "DEVKIT_100_URL=https://hundred.crm.dynamics.com\n");
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs
            {
                Env = "100",
                Url = "https://override-org.crm.dynamics.com"
            }, useCurrentProject: true);

            Assert.AreEqual(2, exitCode);
            StringAssert.Contains(stderr, "--env cannot be combined");
            Assert.IsFalse(stderr.Contains("override-org"));
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_CompleteExplicitArgsWithEnv_AreRejectedBeforeConnection()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-complete-args-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        try
        {
            Environment.CurrentDirectory = tempDirectory;
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs
            {
                Env = "99",
                AuthType = "ClientSecret",
                Url = "not-a-valid-url",
                ClientId = "00000000-0000-0000-0000-000000000099",
                ClientSecret = "explicit-secret"
            }, useCurrentProject: true);

            // Even complete arguments cannot be combined with --env.
            Assert.AreEqual(2, exitCode);
            StringAssert.Contains(stderr, "--env cannot be combined");
            Assert.IsFalse(stderr.Contains("Cannot resolve environment group '99'"));
            Assert.IsFalse(stderr.Contains("was not found in the selected .env file"));
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_ValidationErrorsCoverAllAuthTypes()
    {
        var originalDirectory = Environment.CurrentDirectory;
        var tempDirectory = Path.Combine(Path.GetTempPath(), "devkit-mcp-group-errors-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDirectory);
        File.WriteAllText(Path.Combine(tempDirectory, ".env"),
            "DEVKIT_1_URL=https://one.crm.dynamics.com\n" +
            "DEVKIT_2_AUTH_TYPE=ClientSecret\n" +
            "DEVKIT_3_AUTH_TYPE=OAuth\n" +
            "DEVKIT_3_URL=https://three.crm.dynamics.com\n" +
            "DEVKIT_4_AUTH_TYPE=OAuth\n" +
            "DEVKIT_4_URL=https://four.crm.dynamics.com\n" +
            "DEVKIT_4_USERNAME=user@contoso.com\n" +
            "DEVKIT_5_AUTH_TYPE=AD\n" +
            "DEVKIT_5_URL=https://five.crm.dynamics.com\n" +
            "DEVKIT_6_AUTH_TYPE=AD\n" +
            "DEVKIT_6_URL=https://six.crm.dynamics.com\n" +
            "DEVKIT_6_USERNAME=CONTOSO\\user\n" +
            "DEVKIT_7_AUTH_TYPE=UnsupportedAuth\n" +
            "DEVKIT_7_URL=https://seven.crm.dynamics.com\n" +
            "DEVKIT_8_CONNECTION=\"   \"\n");
        try
        {
            Environment.CurrentDirectory = tempDirectory;

            var (e1, _, err1) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "1" }, useCurrentProject: true);
            Assert.AreEqual(2, e1);
            StringAssert.Contains(err1, "Incomplete connection configuration for environment group '1'");

            var (e2, _, err2) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "2" }, useCurrentProject: true);
            Assert.AreEqual(2, e2);
            StringAssert.Contains(err2, "Incomplete connection configuration for environment group '2'");

            var (e3, _, err3) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "3" }, useCurrentProject: true);
            Assert.AreEqual(2, e3);
            StringAssert.Contains(err3, "Incomplete connection configuration for environment group '3'");

            var (e4, _, err4) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "4" }, useCurrentProject: true);
            Assert.AreEqual(2, e4);
            StringAssert.Contains(err4, "Incomplete connection configuration for environment group '4'");

            var (e5, _, err5) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "5" }, useCurrentProject: true);
            Assert.AreEqual(2, e5);
            StringAssert.Contains(err5, "Incomplete connection configuration for environment group '5'");

            var (e6, _, err6) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "6" }, useCurrentProject: true);
            Assert.AreEqual(2, e6);
            StringAssert.Contains(err6, "Incomplete connection configuration for environment group '6'");

            var (e7, _, err7) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "7" }, useCurrentProject: true);
            Assert.AreEqual(1, e7);
            StringAssert.Contains(err7, "Environment group '7': Authentication type 'UnsupportedAuth' is not supported.");

            var (e8, _, err8) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "8" }, useCurrentProject: true);
            Assert.AreEqual(2, e8);
            StringAssert.Contains(err8, "Environment group '8' (DEVKIT_8_CONNECTION): Invalid connection string.");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_MissingAuth_ReturnsConnectionError()
    {
        var (exitCode, stdout, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs());

        Assert.AreEqual(2, exitCode);
        Assert.AreEqual("", stdout);
        StringAssert.Contains(stderr, "Environment group 'default' was not found");
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
        StringAssert.Contains(stderr, "Environment group 'default' was not found");
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
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs(), useCurrentProject: true);

            Assert.AreEqual(2, exitCode);
            StringAssert.Contains(stderr, "Incomplete connection configuration");
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
        using var project = new IsolatedMcpProject();
        var originalDirectory = Environment.CurrentDirectory;
        Environment.CurrentDirectory = Path.GetDirectoryName(project.JsonPath)!;
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
            Environment.CurrentDirectory = originalDirectory;
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_ModernAuthWithoutUrl_ReturnsValidationError()
    {
        var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs { AuthType = "ClientSecret" });

        Assert.AreEqual(2, exitCode);
        StringAssert.Contains(stderr, "Incomplete MCP connection arguments");
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

    private static async Task<(int ExitCode, string Stdout, string Stderr)> ExecuteWithConsoleAsync(McpCommandArgs args, bool useCurrentProject = false)
    {
        using var project = new IsolatedMcpProject();
        var originalDirectory = Environment.CurrentDirectory;
        if (!useCurrentProject) Environment.CurrentDirectory = Path.GetDirectoryName(project.JsonPath)!;
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
            Environment.CurrentDirectory = originalDirectory;
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }
}
