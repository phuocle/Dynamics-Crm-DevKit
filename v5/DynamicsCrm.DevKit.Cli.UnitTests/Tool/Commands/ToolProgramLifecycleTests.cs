#nullable enable
using DynamicsCrm.DevKit.Cli.Tool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool.Commands;

/// <summary>
/// Full executable lifecycle for the <c>devkit tool</c> branch through
/// <see cref="Program.Main"/>: the branch is dispatched to its own app without
/// the update check or <c>SpectreLog.WaitForKeyPress</c>, bare-branch syntax
/// exits 2 with branch help, and parse failures map to exit 2 with stdout kept
/// machine-clean (or carrying a parseable JSON error object when --output json
/// was requested). Console streams are process-global — never parallel.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ToolProgramLifecycleTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-lifecycle-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private static async Task<(int Exit, string Stdout, string Stderr)> MainCapturedAsync(string[] args)
    {
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        var stdout = new StringWriter();
        var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        try
        {
            // The tool app binds its own console to Console.Out at startup, so
            // Spectre's help rendering lands in the capture as well.
            var exit = await Program.Main(args);
            return (exit, stdout.ToString(), stderr.ToString());
        }
        finally
        {
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }

    [TestMethod]
    public async Task Main_ToolList_StdoutIsExactlyTheListing()
    {
        var (exit, stdout, stderr) = await MainCapturedAsync(new[] { "tool", "list" });

        Assert.AreEqual(ToolExitCodes.Success, exit);
        // No banner, no update notification, no diagnostics on stdout.
        Assert.IsFalse(stdout.Contains("║"), "the DevKit header must not reach the tool branch");
        Assert.IsFalse(stdout.Contains("UPDATE"), "no update notification on the tool branch");
        StringAssert.Contains(stdout, "manage_view");
        StringAssert.Contains(stdout, "whoami");
        Assert.AreEqual(string.Empty, stderr);
    }

    [TestMethod]
    public async Task Main_BareTool_ShowsBranchHelpAndReturnsTwo()
    {
        var (exit, stdout, _) = await MainCapturedAsync(new[] { "tool" });

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        StringAssert.Contains(stdout, "USAGE:");
        StringAssert.Contains(stdout, "list");
        StringAssert.Contains(stdout, "call");
    }

    [TestMethod]
    public async Task Main_ToolHelp_ReturnsZero()
    {
        var (exit, _, _) = await MainCapturedAsync(new[] { "tool", "--help" });
        Assert.AreEqual(0, exit);

        (exit, _, _) = await MainCapturedAsync(new[] { "tool", "-h" });
        Assert.AreEqual(0, exit);
    }

    [TestMethod]
    public async Task Main_ParseErrorInTextMode_StdoutCleanStderrDiagnostic_ReturnsTwo()
    {
        var (exit, stdout, stderr) = await MainCapturedAsync(new[] { "tool", "list", "--nope" });

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.AreEqual(string.Empty, stdout, "stdout stays machine-clean in text mode");
        StringAssert.Contains(stderr, "Unknown option");
    }

    [TestMethod]
    public async Task Main_ParseErrorInJsonMode_EmitsParseableEnvelopeOnStdout_ReturnsTwo()
    {
        var (exit, stdout, _) = await MainCapturedAsync(new[]
        {
            "tool", "call", "manage_view", "--output", "json", "--bogus",
        });

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("manage_view", envelope["tool"]!.GetValue<string>());
        Assert.AreEqual(false, envelope["success"]!.GetValue<bool>());
        Assert.IsNull(envelope["result"]);
        Assert.AreEqual("CLI_SYNTAX", envelope["error"]!["code"]!.GetValue<string>());
        Assert.AreEqual("cli-parsing", envelope["error"]!["stage"]!.GetValue<string>());
    }

    [TestMethod]
    public async Task Main_ParseErrorWithOutputEqualsJsonForm_AlsoEmitsEnvelope()
    {
        var (exit, stdout, _) = await MainCapturedAsync(new[]
        {
            "tool", "validate", "manage_view", "--output=json", "--bogus",
        });

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.IsNotNull(JsonNode.Parse(stdout), "the conservative --output=json peek enables the JSON error");
    }

    [TestMethod]
    public async Task Main_UnknownSubcommandUnderToolBranch_ReturnsTwo()
    {
        var (exit, stdout, stderr) = await MainCapturedAsync(new[] { "tool", "nope" });

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "nope");
    }

    [TestMethod]
    public async Task Main_StdinInput_DashForm_ReachesTheBuilder()
    {
        // Spectre's tokenizer rejects a bare "-"; ToolProgram rewrites "--input -"
        // to an internal marker so stdin input works exactly as documented.
        var oldIn = Console.In;
        Console.SetIn(new StringReader("{\"action\":\"list\",\"entity_name\":\"account\"}"));
        try
        {
            var (exit, stdout, _) = await MainCapturedAsync(new[] { "tool", "validate", "manage_view", "--input", "-" });

            Assert.AreEqual(ToolExitCodes.Success, exit);
            StringAssert.Contains(stdout, "Contract validation passed");
        }
        finally
        {
            Console.SetIn(oldIn);
        }
    }

    [TestMethod]
    public async Task Main_StdinInput_EqualsDashForm_AlsoReachesTheBuilder()
    {
        var oldIn = Console.In;
        Console.SetIn(new StringReader("{\"action\":\"list\",\"entity_name\":\"account\"}"));
        try
        {
            var (exit, stdout, _) = await MainCapturedAsync(new[] { "tool", "validate", "manage_view", "--input=-" });

            Assert.AreEqual(ToolExitCodes.Success, exit);
            StringAssert.Contains(stdout, "Contract validation passed");
        }
        finally
        {
            Console.SetIn(oldIn);
        }
    }

    [TestMethod]
    public async Task Main_ExistingCommandBehavior_IsUnchangedByToolBranch()
    {
        // `nosuchcommand` on the main app keeps Spectre's default handling — the
        // error text goes through the main app's own console (process stdout),
        // which a Console.SetOut capture cannot intercept. Only the exit code is
        // asserted here; the stdout text was verified against the built binary.
        var (exit, _, _) = await MainCapturedAsync(new[] { "nosuchcommand" });

        Assert.AreEqual(-1, exit);
    }
}
