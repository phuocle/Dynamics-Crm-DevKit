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
        StringAssert.Contains(stdout, "This catalog describes one DevKit MCP instance.");
        StringAssert.Contains(stdout, "Use --env <id> to select DEVKIT_<id>_* fallback connection keys.");
        StringAssert.Contains(stdout, "Explicit connection args still take priority.");
        StringAssert.Contains(stdout, "Different MCP client entries can run separate instances with the same tool names.");
        StringAssert.Contains(stdout, "Example: devkit mcp --env 1 devkit-codex-2 --dry-run");
        StringAssert.Contains(stdout, "Run 'devkit mcp --setup-guide' for multi-instance configuration.");
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
        StringAssert.Contains(stdout, ".agents/mcp_config.json");
        StringAssert.Contains(stdout, ".agents/plugins/<plugin>/mcp_config.json");
        StringAssert.Contains(stdout, ".zcode/config.json");
        StringAssert.Contains(stdout, "~/.zcode/cli/config.json");
        StringAssert.Contains(stdout, "\"timeoutMs\": 600000");
        StringAssert.Contains(stdout, "\"timeoutSeconds\": 600");
        StringAssert.Contains(stdout, "\"timeout\": 600000");
        StringAssert.Contains(stdout, "tool_timeout_sec = 600");
        StringAssert.Contains(stdout, "claude mcp add-json --scope user");
        StringAssert.Contains(stdout, "~/.codex/config.toml");
        StringAssert.Contains(stdout, "/etc/codex/config.toml");
        StringAssert.Contains(stdout, "MCP: Open User Configuration");
        StringAssert.Contains(stdout, "no standard all-users MCP file documented");
        Assert.IsFalse(stdout.Contains("ZCode 3.1.4+"));
        Assert.IsFalse(stdout.Contains("\u001b["), "Captured guide must remain plain text");
        Assert.IsFalse(stdout.Contains("this repo's devkit plugin"));
        StringAssert.Contains(stdout, "~/.gemini/config/mcp_config.json");
        Assert.IsFalse(stdout.Contains(".example"), "Guide must not refer to missing example files");
        Assert.IsFalse(stdout.Contains("antigravity-cli/mcp_config.json"), "Use the current global MCP path");
        Assert.IsFalse(stdout.Contains("\"--clientsecret\""), "MCP config examples must not expose secrets");
        Assert.IsFalse(stdout.Contains("\"SECRET\""), "MCP config examples must not expose secrets");
        StringAssert.Contains(stdout, "--env <id>");
        StringAssert.Contains(stdout, "DEVKIT_1_URL");
        StringAssert.Contains(stdout, "DEVKIT_2_AUTH_TYPE=FromPac");
        StringAssert.Contains(stdout, "DEVKIT_100_URL");
        StringAssert.Contains(stdout, "dynamicscrm-devkit-2");
        StringAssert.Contains(stdout, "devkit-claude-2");
        StringAssert.Contains(stdout, "devkit-codex-2");
        StringAssert.Contains(stdout, "devkit-copilot-2");
        StringAssert.Contains(stdout, "devkit-antigravity-2");
        StringAssert.Contains(stdout, "devkit-zcode-2");
        StringAssert.Contains(stdout, "whoami");
        Assert.AreEqual("", stderr);
    }

    [TestMethod]
    [DataRow("0")]
    [DataRow("-1")]
    [DataRow("01")]
    [DataRow("1.5")]
    [DataRow("abc")]
    [DataRow("help")]
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

            Assert.AreEqual(1, exitCode);
            StringAssert.Contains(stderr, "Fallback group: 1 (DEVKIT_1_*)");
            StringAssert.Contains(stderr, "Environment group '1': DEVKIT_1_CLIENT_SECRET or --clientsecret is required for ClientSecret authentication.");
            Assert.IsFalse(stderr.Contains("default-super-secret"), "Secrets must never be printed in error messages.");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_EnvGroup_PartialArgOverride_UsesArgUrlAndGroupFallback()
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

            Assert.AreEqual(1, exitCode);
            StringAssert.Contains(stderr, "Fallback group: 100 (DEVKIT_100_*)");
            StringAssert.Contains(stderr, "Connection source: command-line arguments + project .env (DEVKIT_100_*)");
            StringAssert.Contains(stderr, "URL: https://override-org.crm.dynamics.com");
            StringAssert.Contains(stderr, "Environment group '100': DEVKIT_100_CLIENT_ID or --clientid is required for ClientSecret authentication.");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
            Directory.Delete(tempDirectory, recursive: true);
        }
    }

    [TestMethod]
    public async Task ExecuteAsync_CompleteExplicitArgsWithMissingEnvGroup_DoesNotRequireEnvOrGroup()
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

            // Did not fail on missing .env or missing group 99; proceeded to validate the explicit args.
            Assert.AreEqual(1, exitCode);
            StringAssert.Contains(stderr, "Fallback group: 99 (DEVKIT_99_*; not used)");
            StringAssert.Contains(stderr, "Validation failed: Invalid URL format: not-a-valid-url");
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
            StringAssert.Contains(err1, "Environment group '1': DEVKIT_1_AUTH_TYPE (or --auth) or DEVKIT_1_CONNECTION (or --conn) is required for MCP server.");

            var (e2, _, err2) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "2" }, useCurrentProject: true);
            Assert.AreEqual(1, e2);
            StringAssert.Contains(err2, "Environment group '2': DEVKIT_2_URL or --url is required for ClientSecret authentication.");

            var (e3, _, err3) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "3" }, useCurrentProject: true);
            Assert.AreEqual(1, e3);
            StringAssert.Contains(err3, "Environment group '3': DEVKIT_3_USERNAME or --username is required for OAuth authentication.");

            var (e4, _, err4) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "4" }, useCurrentProject: true);
            Assert.AreEqual(1, e4);
            StringAssert.Contains(err4, "Environment group '4': DEVKIT_4_PASSWORD or --password is required for OAuth authentication.");

            var (e5, _, err5) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "5" }, useCurrentProject: true);
            Assert.AreEqual(1, e5);
            StringAssert.Contains(err5, "Environment group '5': DEVKIT_5_USERNAME or --username is required for AD authentication.");

            var (e6, _, err6) = await ExecuteWithConsoleAsync(new McpCommandArgs { Env = "6" }, useCurrentProject: true);
            Assert.AreEqual(1, e6);
            StringAssert.Contains(err6, "Environment group '6': DEVKIT_6_PASSWORD or --password is required for AD authentication.");

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
            var (exitCode, _, stderr) = await ExecuteWithConsoleAsync(new McpCommandArgs(), useCurrentProject: true);

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
        using var project = new IsolatedMcpProject();
        args.Json = project.JsonPath;
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

    private static async Task<(int ExitCode, string Stdout, string Stderr)> ExecuteWithConsoleAsync(McpCommandArgs args, bool useCurrentProject = false)
    {
        using var project = new IsolatedMcpProject();
        if (!useCurrentProject) args.Json = project.JsonPath;
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
