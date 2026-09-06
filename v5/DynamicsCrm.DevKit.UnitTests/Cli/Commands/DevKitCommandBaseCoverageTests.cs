using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Commands;

using DynamicsCrm.DevKit.Shared;

using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spectre.Console;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Commands;

/// <summary>
/// Coverage for DevKitCommand&lt;T&gt; (ExecuteAsync flow, exception handlers,
/// real IsValidAsync validation ladder) via a concrete test subclass, plus
/// McpCommand impersonation helpers driven with a null client through their
/// documented never-throw catch paths.
/// </summary>
[TestClass]
public sealed class DevKitCommandBaseCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-cmd-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private sealed class TestArgs : DevKitCommandArgs
    {
        public string? Marker { get; set; }
    }

    private sealed class TestCommand : DevKitCommand<TestArgs>
    {
        public Func<TestArgs, Task<bool>>? IsValidOverride;
        public Func<TestArgs, Task>? RunBehavior;
        public bool RequireProfile = true;
        public bool RequireJson = true;
        public int Ran;

        public Task<int> Invoke(TestArgs args) => ExecuteAsync(null!, args, CancellationToken.None);

        protected override Task RunTaskAsync(TestArgs settings)
        {
            Ran++;
            return RunBehavior?.Invoke(settings) ?? Task.CompletedTask;
        }

        protected override Task<bool> IsValidAsync(TestArgs settings) =>
            IsValidOverride?.Invoke(settings) ?? base.IsValidAsync(settings);

        protected override bool IsProfileRequired(TestArgs settings) => RequireProfile;

        protected override bool IsJsonRequired(TestArgs settings) => RequireJson;
    }

    private static (string Stdout, string Stderr) Capture(Action action)
    {
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        using var stdout = new StringWriter();
        using var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        try
        {
            action();
            return (stdout.ToString(), stderr.ToString());
        }
        finally
        {
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }

    private static async Task<(int ExitCode, string Stdout, string Stderr)> InvokeCapturedAsync(TestCommand command, TestArgs args)
    {
        var oldOut = Console.Out;
        var oldErr = Console.Error;
        var oldAnsi = AnsiConsole.Console;
        var stdout = new StringWriter();
        var stderr = new StringWriter();
        Console.SetOut(stdout);
        Console.SetError(stderr);
        AnsiConsole.Console = AnsiConsole.Create(new AnsiConsoleSettings
        {
            Out = new AnsiConsoleOutput(stdout),
            Interactive = InteractionSupport.No
        });
        try
        {
            var exitCode = await command.Invoke(args);
            return (exitCode, stdout.ToString(), stderr.ToString());
        }
        finally
        {
            AnsiConsole.Console = oldAnsi;
            Console.SetOut(oldOut);
            Console.SetError(oldErr);
        }
    }

    // ──────────────────────────────────────────────
    // ExecuteAsync flow
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Execute_SuccessfulValidation_RunsTask_ReturnsSuccess()
    {
        var command = new TestCommand { IsValidOverride = _ => Task.FromResult(true) };
        var (exitCode, _, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.Success, exitCode);
        Assert.AreEqual(1, command.Ran);
    }

    [TestMethod]
    public async Task Execute_ValidationFails_SkipsTask_ReturnsValidationError()
    {
        var command = new TestCommand { IsValidOverride = _ => Task.FromResult(false) };
        var (exitCode, _, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.ValidationError, exitCode);
        Assert.AreEqual(0, command.Ran);
    }

    [TestMethod]
    public async Task Execute_RunTaskThrowsValidationException_ReturnsValidationError()
    {
        var command = new TestCommand
        {
            IsValidOverride = _ => Task.FromResult(true),
            RunBehavior = _ => throw new DevKitValidationException("bad args")
        };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.ValidationError, exitCode);
        StringAssert.Contains(stdout, "bad args");
    }

    [TestMethod]
    public async Task Execute_RunTaskThrowsConnectionException_ReturnsConnectionError()
    {
        var command = new TestCommand
        {
            IsValidOverride = _ => Task.FromResult(true),
            RunBehavior = _ => throw new DevKitConnectionException("cannot connect")
        };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.ConnectionError, exitCode);
        StringAssert.Contains(stdout, "cannot connect");
    }

    [TestMethod]
    public async Task Execute_RunTaskThrowsConfigurationException_ReturnsConfigurationError()
    {
        var command = new TestCommand
        {
            IsValidOverride = _ => Task.FromResult(true),
            RunBehavior = _ => throw new DevKitConfigurationException("bad config")
        };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.ConfigurationError, exitCode);
        StringAssert.Contains(stdout, "bad config");
    }

    [TestMethod]
    public async Task Execute_RunTaskThrowsDeploymentException_ReturnsRuntimeError()
    {
        var command = new TestCommand
        {
            IsValidOverride = _ => Task.FromResult(true),
            RunBehavior = _ => throw new DevKitDeploymentException("deploy failed")
        };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.RuntimeError, exitCode);
        StringAssert.Contains(stdout, "deploy failed");
    }

    [TestMethod]
    public async Task Execute_RunTaskThrowsUnexpectedWithInner_LogsBoth_ReturnsRuntimeError()
    {
        var command = new TestCommand
        {
            IsValidOverride = _ => Task.FromResult(true),
            RunBehavior = _ => throw new InvalidOperationException("outer", new ArgumentException("inner"))
        };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.RuntimeError, exitCode);
        StringAssert.Contains(stdout, "outer");
        StringAssert.Contains(stdout, "inner");
    }

    // ──────────────────────────────────────────────
    // real IsValidAsync ladder
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task RealIsValid_MissingProfile_ReturnsValidationError()
    {
        var command = new TestCommand(); // RequireProfile = true
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs());
        Assert.AreEqual(ExitCodes.ValidationError, exitCode);
        StringAssert.Contains(stdout, "--profile: required");
    }

    [TestMethod]
    public async Task RealIsValid_ProfileSetJsonMissing_ReturnsValidationError()
    {
        var command = new TestCommand();
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, new TestArgs { Profile = "p" });
        Assert.AreEqual(ExitCodes.ValidationError, exitCode);
        StringAssert.Contains(stdout, "--json: required or file not found");
    }

    [TestMethod]
    public async Task RealIsValid_JsonOptional_ProfileStillChecked()
    {
        var command = new TestCommand { RequireJson = false };
        var args = new TestArgs();
        var (exitCode, _, _) = await InvokeCapturedAsync(command, args);
        Assert.AreEqual(ExitCodes.ValidationError, exitCode);
    }

    [TestMethod]
    public async Task RealIsValid_NoAuthNoConnection_ThrowsConnectionError()
    {
        File.WriteAllText(Path.Combine(_tempDir, "devkit.json"), "{}");
        var command = new TestCommand();
        var args = new TestArgs { Profile = "p", Json = "devkit.json" };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, args);
        Assert.AreEqual(ExitCodes.ConnectionError, exitCode);
        StringAssert.Contains(stdout, "--conn or --auth: required");
    }

    [TestMethod]
    public async Task RealIsValid_ModernAuthWithoutUrl_ThrowsConnectionError()
    {
        File.WriteAllText(Path.Combine(_tempDir, "devkit.json"), "{}");
        var command = new TestCommand();
        var args = new TestArgs { Profile = "p", Json = "devkit.json", AuthType = "ClientSecret" };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, args);
        Assert.AreEqual(ExitCodes.ConnectionError, exitCode);
        StringAssert.Contains(stdout, "--url: required for modern authentication");
    }

    [TestMethod]
    public async Task RealIsValid_UnsupportedAuth_ThrowsConnectionError()
    {
        File.WriteAllText(Path.Combine(_tempDir, "devkit.json"), "{}");
        var command = new TestCommand();
        var args = new TestArgs { Profile = "p", Json = "devkit.json", AuthType = "Telepathy", Url = "https://org.crm.dynamics.com" };
        var (exitCode, stdout, _) = await InvokeCapturedAsync(command, args);
        Assert.AreEqual(ExitCodes.ConnectionError, exitCode);
        StringAssert.Contains(stdout, "Authentication type 'Telepathy' is not supported");
    }

    [TestMethod]
    public void JsonFileResolution_DirectFileAndSearch()
    {
        // direct: file exists right in the current directory
        var nested = Path.Combine(_tempDir, "nested");
        Directory.CreateDirectory(nested);
        File.WriteAllText(Path.Combine(nested, "direct.json"), "{}");
        Environment.CurrentDirectory = nested;
        var direct = new TestArgs { Json = "direct.json" };
        Assert.IsTrue(direct.JsonFile!.EndsWith("direct.json"));
        Assert.IsFalse(direct.IsJsonResolvedBySearch);

        // upward search: file sits in the PARENT of the current directory
        File.WriteAllText(Path.Combine(_tempDir, "found.json"), "{}");
        var sub = Path.Combine(_tempDir, "sub");
        Directory.CreateDirectory(sub);
        Environment.CurrentDirectory = sub;
        var searched = new TestArgs { Json = "found.json" };
        Assert.IsTrue(searched.IsJsonResolvedBySearch);
        Assert.IsNull(new TestArgs { Json = "ghost.json" }.JsonFile);
        Assert.IsNull(new TestArgs().JsonFile);
    }

    [TestMethod]
    public void ResolveProjectEnvironmentDefaults_FillsFromTempEnvFile()
    {
        File.WriteAllText(Path.Combine(_tempDir, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=https://env.crm.dynamics.com");
        File.WriteAllText(Path.Combine(_tempDir, "settings.json"), "{}");
        var args = new TestArgs { Json = "settings.json" };
        args.ResolveProjectEnvironmentDefaults();
        Assert.AreEqual("ClientSecret", args.AuthType);
        Assert.AreEqual("https://env.crm.dynamics.com", args.Url);
    }

    [TestMethod]
    public void ResolveMachineEnvironmentDefaults_FillsFromOsEnv()
    {
        var args = new TestArgs();
        Environment.SetEnvironmentVariable("DEVKIT_AUTH_TYPE", "DeviceCode");
        try
        {
            args.ResolveMachineEnvironmentDefaults();
            Assert.AreEqual("DeviceCode", args.AuthType);
        }
        finally
        {
            Environment.SetEnvironmentVariable("DEVKIT_AUTH_TYPE", null);
        }
    }

    // ──────────────────────────────────────────────
    // static helpers via reflection
    // ──────────────────────────────────────────────

    private static object? InvokeStatic(string type, string method, params object?[] args)
    {
        var t = type == "devkit"
            ? typeof(DevKitCommand<TestArgs>).Assembly.GetType("DynamicsCrm.DevKit.Cli.Commands.DevKitCommand`1")
            : typeof(McpCommand).Assembly.GetType("DynamicsCrm.DevKit.Cli.Commands.McpCommand");
        Assert.IsNotNull(t, type);
        if (type == "devkit") t = t.MakeGenericType(typeof(TestArgs));
        var m = t!.GetMethod(method, System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
        Assert.IsNotNull(m, method);
        return m.Invoke(null, args);
    }

    [TestMethod]
    public void ShouldLogClientId_MatchesModernTypes()
    {
        var invoke = (string a) => (bool)InvokeStatic("devkit", "ShouldLogClientId", a)!;
        Assert.IsTrue(invoke("ClientSecret"));
        Assert.IsTrue(invoke("Interactive"));
        Assert.IsTrue(invoke("DeviceCode"));
        Assert.IsTrue(invoke("OAuth"));
        Assert.IsFalse(invoke("FromPac"));
        Assert.IsFalse(invoke("AD"));
    }

    [TestMethod]
    public void ShouldLogUsername_OnlyOAuthAndAD()
    {
        var invoke = (string a) => (bool)InvokeStatic("devkit", "ShouldLogUsername", a)!;
        Assert.IsTrue(invoke("OAuth"));
        Assert.IsTrue(invoke("AD"));
        Assert.IsFalse(invoke("ClientSecret"));
        Assert.IsFalse(invoke("Interactive"));
    }

    [TestMethod]
    public void GetConnectionUserName_ComposesDomainForAD()
    {
        var invoke = (TestArgs a) => (string)InvokeStatic("devkit", "GetConnectionUserName", a)!;
        Assert.AreEqual("DOM\\jane", invoke(new TestArgs { AuthType = "AD", Domain = "DOM", Username = "jane" }));
        Assert.AreEqual("OTHER\\jane", invoke(new TestArgs { AuthType = "AD", Domain = "DOM", Username = "OTHER\\jane" }));
        Assert.AreEqual("jane", invoke(new TestArgs { AuthType = "ClientSecret", Domain = "DOM", Username = "jane" }));
        Assert.AreEqual("jane", invoke(new TestArgs { AuthType = "AD", Domain = "", Username = "jane" }));
    }

    [TestMethod]
    public void CommandName_StripsSuffixAndLowercases()
    {
        var command = new TestCommand();
        var prop = typeof(DevKitCommand<TestArgs>).GetProperty("CommandName",
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
        Assert.AreEqual("test", prop!.GetValue(command));
    }

    // ──────────────────────────────────────────────
    // McpCommand impersonation helpers (null client → never-throw paths)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void McpCommand_ResolveAsUser_NullClientEmailTarget_ReturnsNull()
    {
        var result = InvokeStatic("mcp", "ResolveAsUser", null!, "jane@contoso.com", null);
        Assert.IsNull(result);
    }
}
