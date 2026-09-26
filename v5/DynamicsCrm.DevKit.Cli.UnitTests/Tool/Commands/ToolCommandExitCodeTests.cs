#nullable enable
using DynamicsCrm.DevKit.Cli.Tool;
using DynamicsCrm.DevKit.Cli.Tool.Commands;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Linq;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool.Commands;

/// <summary>
/// Command-pipeline coverage for the <c>devkit tool</c> branch: exit codes,
/// stdout purity (machine output only), stderr diagnostics, input/validation
/// errors, output-file rules, connection-failure mapping with the
/// machine-environment fallback, and the call envelope on success, handler
/// error and dry-run. Console streams, the current directory and DEVKIT_*
/// environment variables are process-global — never parallel.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ToolCommandExitCodeTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    // ──────────────────────────────────────────────
    // Capture + env helpers
    // ──────────────────────────────────────────────

    private static async Task<(int Exit, string Stdout, string Stderr)> RunAsync(Func<Task<int>> action)
    {
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        var stdout = new StringWriter();
        var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        try
        {
            var exit = await action();
            return (exit, stdout.ToString(), stderr.ToString());
        }
        finally
        {
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }

    private static async Task<(int Exit, string Stdout, string Stderr)> WithoutDevKitEnvironmentAsync(Func<Task<int>> action)
    {
        var keys = new[]
        {
            ProjectEnvironment.Connection, ProjectEnvironment.AuthType, ProjectEnvironment.Url,
            ProjectEnvironment.ClientId, ProjectEnvironment.ClientSecret, ProjectEnvironment.PacProfile,
            ProjectEnvironment.Username, ProjectEnvironment.Password, ProjectEnvironment.Domain,
        };
        var saved = keys.ToDictionary(key => key, Environment.GetEnvironmentVariable);
        try
        {
            foreach (var key in keys)
                Environment.SetEnvironmentVariable(key, null);
            return await RunAsync(action);
        }
        finally
        {
            foreach (var (key, value) in saved)
                Environment.SetEnvironmentVariable(key, value);
        }
    }

    /// <summary>Sets DEVKIT_* variables for the action; used to prove they are ignored.</summary>
    private static async Task<(int Exit, string Stdout, string Stderr)> WithDevKitEnvironmentAsync(
        Dictionary<string, string> variables, Func<Task<int>> action)
    {
        var keys = new[]
        {
            ProjectEnvironment.Connection, ProjectEnvironment.AuthType, ProjectEnvironment.Url,
            ProjectEnvironment.ClientId, ProjectEnvironment.ClientSecret, ProjectEnvironment.PacProfile,
            ProjectEnvironment.Username, ProjectEnvironment.Password, ProjectEnvironment.Domain,
        };
        var saved = keys.ToDictionary(key => key, Environment.GetEnvironmentVariable);
        try
        {
            foreach (var (key, value) in variables)
                Environment.SetEnvironmentVariable(key, value);
            return await RunAsync(action);
        }
        finally
        {
            foreach (var (key, value) in saved)
                Environment.SetEnvironmentVariable(key, value);
        }
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_Text_StdoutOnlyListing_ReturnsZero()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings(), CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "manage_view");
        StringAssert.Contains(stdout, "execute_sql");
        Assert.HasCount(0, stdout.Split('\n').Where(line => line.Contains("Error:")).ToList());
        Assert.AreEqual(string.Empty, stderr);
    }

    [TestMethod]
    public async Task List_Json_EmitsCompactArray()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings { Output = "json" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var parsed = JsonNode.Parse(stdout)!.AsArray();
        Assert.IsGreaterThan(0, parsed.Count);
        var manageView = parsed.First(entry => entry!["name"]!.GetValue<string>() == "manage_view");
        Assert.AreEqual("all", manageView!["category"]!.GetValue<string>());
        Assert.IsTrue(manageView["description"]!.GetValue<string>().Length > 0);
    }

    [TestMethod]
    public async Task List_Filter_MatchesNameOrDescription()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings { Filter = "view" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "manage_view");
        Assert.IsFalse(stdout.Contains("create_records"));
    }

    [TestMethod]
    public async Task List_UnknownOutputMode_ReturnsTwoWithCleanStdout()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings { Output = "yaml" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Unknown output mode");
    }

    [TestMethod]
    public async Task List_UnknownCategory_ReturnsTwo()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings { Category = "basic" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Unknown tool category");
    }

    [TestMethod]
    public async Task List_UnknownOptionInJsonMode_EmitsEnvelopeOnStdout()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(
                new Spectre.Console.Cli.CommandContext(
                    new[] { "tool", "list", "--nope" },
                    new NoRemaining(),
                    "list",
                    null!),
                new ToolListSettings { Output = "json" },
                CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("CLI_SYNTAX", envelope["error"]!["code"]!.GetValue<string>());
        StringAssert.Contains(stderr, "Unknown option");
    }

    [TestMethod]
    public async Task List_UnknownCategoryInJsonMode_EmitsEnvelopeOnStdout()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolListCommand().ExecuteAsyncForTesting(null!, new ToolListSettings { Output = "json", Category = "basic" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.IsNotNull(JsonNode.Parse(stdout), "json mode must keep stdout parseable on failure");
        StringAssert.Contains(stderr, "Unknown tool category");
    }

    // ──────────────────────────────────────────────
    // describe
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Describe_Text_RendersContractOneLinePerProperty()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "manage_view" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "name: manage_view");
        StringAssert.Contains(stdout, "category: all");
        StringAssert.Contains(stdout, "annotations:");
        StringAssert.Contains(stdout, "action: type=string");
        StringAssert.Contains(stdout, "cell_updates_json: type=string");
    }

    [TestMethod]
    public async Task Describe_Json_SerializesCanonicalProtocolTool()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "manage_view", Output = "json" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var parsed = JsonNode.Parse(stdout)!;
        Assert.AreEqual("manage_view", parsed["name"]!.GetValue<string>());
        Assert.IsNotNull(parsed["inputSchema"]);
        Assert.IsNotNull(parsed["description"]);
    }

    [TestMethod]
    public async Task Describe_Schema_EmitsRawInputSchemaOnly()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "manage_view", Output = "schema" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var parsed = JsonNode.Parse(stdout)!;
        Assert.AreEqual("object", parsed["type"]!.GetValue<string>());
        Assert.IsNotNull(parsed["properties"]!["action"]);
        Assert.IsNull(parsed["name"], "schema mode must not include the tool definition wrapper");
    }

    [TestMethod]
    public async Task Describe_ParameterlessTool_NotesNoParameters()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "whoami" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "inputs: (none — this tool takes no parameters)");
    }

    [TestMethod]
    public async Task Describe_UnknownTool_ReturnsTwo()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "nope" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Unknown tool 'nope'");
    }

    [TestMethod]
    public async Task Describe_UnknownToolInJsonMode_EmitsEnvelopeOnStdout()
    {
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "nope", Output = "json" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("nope", envelope["tool"]!.GetValue<string>());
        Assert.AreEqual(false, envelope["success"]!.GetValue<bool>());
        StringAssert.Contains(stderr, "Unknown tool 'nope'");
    }

    [TestMethod]
    public async Task Describe_UnknownToolInSchemaMode_EmitsEnvelopeOnStdout()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "nope", Output = "schema" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        Assert.IsNotNull(JsonNode.Parse(stdout), "schema mode must keep stdout parseable on failure");
    }

    [TestMethod]
    public async Task Describe_MutationToolUnderReadonly_ReturnsTwoWithCategoryHint()
    {
        var (exit, _, stderr) = await RunAsync(() =>
            new ToolDescribeCommand().ExecuteAsyncForTesting(null!, new ToolDescribeSettings { ToolName = "manage_view", Category = "readonly" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        StringAssert.Contains(stderr, "not available in category 'readonly'");
    }

    // ──────────────────────────────────────────────
    // example
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Example_PrettyTemplateOnStdout_ReturnsZero()
    {
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolExampleCommand().ExecuteAsyncForTesting(null!, new ToolExampleSettings { ToolName = "manage_view" }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var parsed = JsonNode.Parse(stdout)!;
        Assert.IsNotNull(parsed["action"], "schema defaults are materialized into the template");
    }

    [TestMethod]
    public async Task Example_OutputFile_WritesFileAndKeepsStdoutEmpty()
    {
        var outputFile = Path.Combine(_tempDir, "nested", "template.json");
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolExampleCommand().ExecuteAsyncForTesting(null!, new ToolExampleSettings { ToolName = "manage_view", OutputFile = outputFile }, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        Assert.AreEqual(string.Empty, stdout);
        Assert.IsTrue(File.Exists(outputFile), "parent directories are created and the template written");
        Assert.IsNotNull(JsonNode.Parse(File.ReadAllText(outputFile)));
    }

    // ──────────────────────────────────────────────
    // validate
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Validate_ValidInput_LabelsAsContractValidation_ReturnsZero()
    {
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "Contract validation passed for manage_view");
    }

    [TestMethod]
    public async Task Validate_ValidInput_JsonReportShape()
    {
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var parsed = JsonNode.Parse(stdout)!;
        Assert.AreEqual("manage_view", parsed["tool"]!.GetValue<string>());
        Assert.AreEqual(true, parsed["valid"]!.GetValue<bool>());
        Assert.HasCount(0, parsed["errors"]!.AsArray());
    }

    [TestMethod]
    public async Task Validate_BadSetType_ReturnsThree()
    {
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=list", "is_personal_view=maybe" },
        };
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Contract validation failed");
        StringAssert.Contains(stderr, "is_personal_view");
    }

    [TestMethod]
    public async Task Validate_MalformedInputDocument_ReturnsThree()
    {
        var inputFile = Path.Combine(_tempDir, "bad.json");
        await File.WriteAllTextAsync(inputFile, "{ not json");
        var settings = new ToolValidateSettings { ToolName = "manage_view", Input = inputFile };
        var (exit, _, stderr) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        StringAssert.Contains(stderr, "not valid JSON");
    }

    [TestMethod]
    public async Task Validate_UnresolvableFileReference_ReturnsThree()
    {
        var inputFile = Path.Combine(_tempDir, "ref.json");
        await File.WriteAllTextAsync(inputFile, "{\"action\":\"list\",\"entity_name\":{\"$file\":\"./missing.txt\"}}");
        var settings = new ToolValidateSettings { ToolName = "manage_view", Input = inputFile };
        var (exit, _, stderr) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        StringAssert.Contains(stderr, "$file reference could not be resolved");
    }

    [TestMethod]
    public async Task Validate_JsonInvalidInput_ReportsPathErrorsWithoutEchoingPayload()
    {
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "is_personal_view=maybe" },
        };
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        var parsed = JsonNode.Parse(stdout)!;
        Assert.AreEqual(false, parsed["valid"]!.GetValue<bool>());
        Assert.HasCount(1, parsed["errors"]!.AsArray());
        Assert.AreEqual("is_personal_view", parsed["errors"]![0]!["path"]!.GetValue<string>());
        StringAssert.Contains(stdout, "maybe", "the error message may quote the offending value");
    }

    // ──────────────────────────────────────────────
    // output-file rules
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Validate_OutputFile_WritesRepresentationAndKeepsStdoutEmpty()
    {
        var outputFile = Path.Combine(_tempDir, "report.json");
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Output = "json",
            OutputFile = outputFile,
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        Assert.AreEqual(string.Empty, stdout);
        var parsed = JsonNode.Parse(File.ReadAllText(outputFile))!;
        Assert.AreEqual(true, parsed["valid"]!.GetValue<bool>());
    }

    [TestMethod]
    public async Task Validate_OutputFileCollidingWithInputDocument_ReturnsThreeBeforeValidation()
    {
        var inputFile = Path.Combine(_tempDir, "request.json");
        await File.WriteAllTextAsync(inputFile, "{\"action\":\"list\",\"entity_name\":\"contact\"}");
        var settings = new ToolValidateSettings
        {
            ToolName = "manage_view",
            Input = inputFile,
            OutputFile = inputFile,
        };
        var (exit, stdout, stderr) = await RunAsync(() =>
            new ToolValidateCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "would overwrite referenced file");
        Assert.AreEqual(
            "{\"action\":\"list\",\"entity_name\":\"contact\"}",
            File.ReadAllText(inputFile),
            "the input document is never clobbered");
    }

    [TestMethod]
    public async Task Call_OutputFileCollidingWithReferencedContentFile_ReturnsThreeBeforeConnection()
    {
        var fetchxml = Path.Combine(_tempDir, "contact.fetchxml");
        await File.WriteAllTextAsync(fetchxml, "<fetch/>");
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=create", "entity_name=contact" },
            File = new[] { $"fetchxml={fetchxml}" },
            OutputFile = fetchxml,
        };
        var (exit, _, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvalidInput, exit);
        StringAssert.Contains(stderr, "would overwrite referenced file");
    }

    // ──────────────────────────────────────────────
    // call: connection failures (offline)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Call_NoConnectionConfiguration_EnvVarsIgnored_ReturnsFour()
    {
        // An empty .env in the working directory blocks the ancestor walk-up, and
        // DEVKIT_* environment variables are set but must be ignored entirely:
        // only .env files and explicit args feed the connection.
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"), "# no connection keys\n");
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, stderr) = await WithDevKitEnvironmentAsync(new Dictionary<string, string>
        {
            [ProjectEnvironment.AuthType] = "ClientSecret",
            [ProjectEnvironment.Url] = "https://machine.example.test",
            [ProjectEnvironment.ClientId] = "machine-client",
            [ProjectEnvironment.ClientSecret] = "machine-secret",
        }, () =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "--auth or --conn is required");
    }

    [TestMethod]
    public async Task Call_ExplicitUrlWithoutAuth_IgnoresEnvConnection_ReturnsFour()
    {
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.Connection}=Url=https://fallback.example.test;UserName=u;Password=p");
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Url = "https://org.example.test",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
        Assert.AreEqual(string.Empty, stdout);
        // The explicit --url forces the modern path; the .env DEVKIT_CONNECTION
        // must not silently become a legacy connection.
        StringAssert.Contains(stderr, "--auth or --conn is required");
    }

    [TestMethod]
    public async Task Call_EnvFileConnection_IsRead_InvalidValue_ReturnsFour()
    {
        // No explicit args; the .env DEVKIT_CONNECTION is picked up (proved by the
        // legacy parse failure it produces).
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.Connection}=this is not a connection string");
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Error:");
    }

    [TestMethod]
    public async Task Call_EnvFileInAncestorDirectory_IsFound()
    {
        // The .env sits in the PARENT of the working directory: the walk-up
        // search climbs toward the drive root and must find it there.
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.Connection}=this is not a connection string");
        var child = Path.Combine(_tempDir, "child", "grandchild");
        Directory.CreateDirectory(child);
        var originalDirectory = Environment.CurrentDirectory;
        Environment.CurrentDirectory = child;
        try
        {
            var settings = new ToolCallSettings
            {
                ToolName = "manage_view",
                Set = new[] { "action=list", "entity_name=contact" },
            };
            var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
                new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

            Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
            Assert.AreEqual(string.Empty, stdout);
            StringAssert.Contains(stderr, "Error:");
        }
        finally
        {
            Environment.CurrentDirectory = originalDirectory;
        }
    }

    [TestMethod]
    public async Task Call_EnvFileFallback_LosesToExplicitArgs()
    {
        // .env carries an invalid legacy connection, but explicit modern args win:
        // the modern validation error (not the legacy parse error) is reported.
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.Connection}=this is not a connection string");
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            AuthType = "ClientSecret",
            Url = "https://org.example.test",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
        Assert.AreEqual(string.Empty, stdout);
        StringAssert.Contains(stderr, "Validation failed");
    }

    [TestMethod]
    public async Task Call_InvalidLegacyConnectionString_ReturnsFour()
    {
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Connection = "this is not a connection string",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, _, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, exit);
        // The same ServiceClient NRE class `devkit mcp` produces for malformed
        // legacy strings, mapped to the new-branch connection exit code.
        StringAssert.Contains(stderr, "Error:");
    }

    // ──────────────────────────────────────────────
    // call: invocation through the seam (offline)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Call_HandlerErrorResult_PreservesResult_ReturnsFive()
    {
        using var fake = new FakeSdkClient();
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "action=list", "entity_name=" },
        };
        var (exit, stdout, _) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand { InvocationServicesResolver = (_, _) => CreateServicesAsync(fake, settings) }
                .ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.HandlerError, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("manage_view", envelope["tool"]!.GetValue<string>());
        Assert.AreEqual(false, envelope["success"]!.GetValue<bool>());
        Assert.IsNull(envelope["error"], "a returned tool error is not an adapter failure");
        Assert.AreEqual(true, envelope["result"]!["isError"]!.GetValue<bool>(),
            "the full CallToolResult is preserved");
    }

    [TestMethod]
    public async Task Call_SuccessfulHandler_ReturnsZeroAndPreservesStructuredContent()
    {
        using var fake = new FakeSdkClient();
        fake.OnExecute = request => request is RetrieveAllEntitiesRequest
            ? RetrieveAllEntities(ContactMetadata())
            : new OrganizationResponse();
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" }
            ? SavedQueryCollection()
            : new EntityCollection();

        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand { InvocationServicesResolver = (_, _) => CreateServicesAsync(fake, settings) }
                .ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual(true, envelope["success"]!.GetValue<bool>());
        Assert.IsNull(envelope["error"]);
        var structured = envelope["result"]!["structuredContent"]!;
        Assert.AreEqual("success", structured["status"]!.GetValue<string>());
    }

    [TestMethod]
    public async Task Call_DryRun_MutationBlocked_KeepsNonExecutionStatus_ReturnsZero()
    {
        using var fake = new FakeSdkClient();
        var updateReachedDataverse = false;
        fake.OnUpdate = _ => updateReachedDataverse = true;
        fake.OnExecute = request => request is RetrieveAllEntitiesRequest
            ? RetrieveAllEntities(ContactMetadata())
            : new OrganizationResponse();
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" } expression &&
                expression.Criteria.Conditions.Any(c => c.AttributeName == "savedqueryid" && c.Operator == ConditionOperator.Equal)
            ? Collection(new Entity("savedquery", Guid.NewGuid())
            {
                ["name"] = "Old Name",
                ["returnedtypecode"] = "contact",
                ["querytype"] = 0,
            })
            : new EntityCollection();

        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Output = "json",
            DryRun = true,
            Set = new[] { "action=rename", "entity_name=contact", $"view_id={Guid.NewGuid()}", "view_name=Renamed" },
        };
        var (exit, stdout, _) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand { InvocationServicesResolver = (_, _) => CreateServicesAsync(fake, settings) }
                .ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit, "a successful dry-run preview is a success");
        Assert.IsFalse(updateReachedDataverse, "mutations are blocked under the dry-run policy");
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("not_executed", envelope["result"]!["structuredContent"]!["status"]!.GetValue<string>());
    }

    [TestMethod]
    public async Task Call_TextMode_RendersResultText()
    {
        using var fake = new FakeSdkClient();
        fake.OnExecute = request => request is RetrieveAllEntitiesRequest
            ? RetrieveAllEntities(ContactMetadata())
            : new OrganizationResponse();
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" }
            ? SavedQueryCollection()
            : new EntityCollection();

        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand { InvocationServicesResolver = (_, _) => CreateServicesAsync(fake, settings) }
                .ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        StringAssert.Contains(stdout, "Active Contacts");
    }

    [TestMethod]
    public async Task Call_UnknownOptionInJsonMode_EmitsEnvelopeOnStdout()
    {
        // Simulates the Program-level json error remap through the command itself:
        // unknown options are rejected by the branch (exit 2) with a parseable
        // envelope when --output json was requested.
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "action=list" },
        };
        var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand().ExecuteAsyncForTesting(
                new Spectre.Console.Cli.CommandContext(
                    new[] { "tool", "call", "manage_view", "--bogus" },
                    new NoRemaining(),
                    "call",
                    null!),
                settings,
                CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.SyntaxError, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("CLI_SYNTAX", envelope["error"]!["code"]!.GetValue<string>());
        StringAssert.Contains(stderr, "Unknown option");
    }

    [TestMethod]
    public async Task Call_ServicesCannotResolveDependencies_ReturnsSix()
    {
        // An execution scope that cannot construct the tool class: the invocation
        // fails without a tool result and the envelope reports INVOCATION_FAILED.
        var settings = new ToolCallSettings { ToolName = "whoami", Output = "json" };
        var (exit, stdout, stderr) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand
            {
                InvocationServicesResolver = (_, _) => Task.FromResult<IServiceProvider>(
                    new ServiceCollection().BuildServiceProvider()),
            }.ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.InvocationFailed, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual("INVOCATION_FAILED", envelope["error"]!["code"]!.GetValue<string>());
        StringAssert.Contains(stderr, "without a returned tool result");
    }

    [TestMethod]
    public async Task Call_ServicesDisposeThrows_StillReturnsSuccess()
    {
        // A throwing disposal must never change the command's outcome: the tool
        // result is already rendered when the scope is torn down.
        using var fake = new FakeSdkClient();
        fake.OnExecute = request => request is RetrieveAllEntitiesRequest
            ? RetrieveAllEntities(ContactMetadata())
            : new OrganizationResponse();
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" }
            ? SavedQueryCollection()
            : new EntityCollection();

        var inner = ToolServices.CreateInvocationServices(fake.Client, dryRun: false, impersonatedUserDisplay: null);
        var settings = new ToolCallSettings
        {
            ToolName = "manage_view",
            Output = "json",
            Set = new[] { "action=list", "entity_name=contact" },
        };
        var (exit, stdout, _) = await WithoutDevKitEnvironmentAsync(() =>
            new ToolCallCommand
            {
                InvocationServicesResolver = (_, _) => Task.FromResult<IServiceProvider>(new ThrowingDisposeServiceProvider(inner)),
            }.ExecuteAsyncForTesting(null!, settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.Success, exit);
        var envelope = JsonNode.Parse(stdout)!;
        Assert.AreEqual(true, envelope["success"]!.GetValue<bool>());
    }

    private sealed class ThrowingDisposeServiceProvider : IServiceProvider, IAsyncDisposable
    {
        private readonly IServiceProvider _inner;

        public ThrowingDisposeServiceProvider(IServiceProvider inner) => _inner = inner;

        public object? GetService(Type serviceType) => _inner.GetService(serviceType);

        public ValueTask DisposeAsync() => throw new InvalidOperationException("boom on dispose");
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private static Task<IServiceProvider> CreateServicesAsync(FakeSdkClient fake, ToolCallSettings settings) =>
        Task.FromResult<IServiceProvider>(ToolServices.CreateInvocationServices(fake.Client, settings.DryRun, null));

    private static EntityCollection SavedQueryCollection()
    {
        var collection = new EntityCollection();
        collection.Entities.Add(new Entity("savedquery", Guid.NewGuid())
        {
            ["name"] = "Active Contacts",
            ["querytype"] = 0,
            ["isdefault"] = true,
            ["statecode"] = new OptionSetValue(0),
            ["ismanaged"] = false,
        });
        return collection;
    }

    private static EntityCollection Collection(params Entity[] entities)
    {
        var collection = new EntityCollection();
        foreach (var entity in entities) collection.Entities.Add(entity);
        return collection;
    }

    private static OrganizationResponse RetrieveAllEntities(params EntityMetadata[] metadata)
    {
        var response = new RetrieveAllEntitiesResponse();
        response.Results["EntityMetadata"] = metadata;
        return response;
    }

    private static EntityMetadata ContactMetadata() => new()
    {
        LogicalName = "contact",
        SchemaName = "Contact",
        DisplayName = new Label("Contact", 1033),
    };

    private sealed class NoRemaining : Spectre.Console.Cli.IRemainingArguments
    {
        public System.Linq.ILookup<string, string?> Parsed { get; } = null!;
        public System.Collections.Generic.IReadOnlyList<string> Raw { get; } = Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyList<string> Piped { get; } = Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IReadOnlyList<string>> PipedArguments { get; } =
            new System.Collections.Generic.Dictionary<string, System.Collections.Generic.IReadOnlyList<string>>();
    }
}
