using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spectre.Console;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// Program.Main's 'devkit new' removal notice and the project-.env plain
/// detection, plus DevKitCommand's legacy --conn arg-table path (the
/// best-effort connection log built before the profile/json gates stop the
/// run before any network attempt) and the DeviceCode callback banner the
/// compiler generates inside ConnectWithModernAuthAsync.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ProgramAndDevKitCommandExtraCoverageTests
{
    private string _root = null!;
    private string _originalCwd = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_ProgramExtras", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        _originalCwd = Directory.GetCurrentDirectory();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Directory.SetCurrentDirectory(_originalCwd);
        SpectreLog.IsPlain = false;
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    // ── Program.Main ───────────────────────────────────────────────────

    [TestMethod]
    public async Task Main_RemovedNewCommand_WritesNoticeAndReturnsOne()
    {
        var exit = await Program.Main(new[] { "new" });
        Assert.AreEqual(1, exit);
    }

    [TestMethod]
    public async Task Main_BareHelpWord_PrintsHelpAndReturnsZero()
    {
        SpectreLog.IsPlain = true; // keep the rich table out of the real console
        var exit = await Program.Main(new[] { "help" });
        Assert.AreEqual(0, exit);
    }

    [TestMethod]
    public void IsPlainFromProjectEnvironment_ReflectsTheWalkUpEnvFile()
    {
        Directory.SetCurrentDirectory(_root);

        Assert.IsFalse(Program.IsPlainFromProjectEnvironment(), "no .env — plain stays off.");

        File.WriteAllText(Path.Combine(_root, ".env"), "DEVKIT_NO_COLOR=1\n");
        Assert.IsTrue(Program.IsPlainFromProjectEnvironment(), "DEVKIT_NO_COLOR in the project .env turns plain on.");

        File.WriteAllText(Path.Combine(_root, ".env"), "DEVKIT_NO_COLOR=\n");
        Assert.IsFalse(Program.IsPlainFromProjectEnvironment(), "an empty value keeps plain off.");

        File.WriteAllText(Path.Combine(_root, ".env"), "this is not =\nwell-formed <<<\n");
        Assert.IsFalse(Program.IsPlainFromProjectEnvironment(), "a malformed .env is swallowed (catch).");
    }

    // ── DevKitCommand legacy --conn path ───────────────────────────────

    private sealed class TestArgs : DevKitCommandArgs
    {
    }

    private sealed class TestCommand : DevKitCommand<TestArgs>
    {
        public Task<bool> Validate(TestArgs settings) => IsValidAsync(settings);
        protected override Task RunTaskAsync(TestArgs settings) => Task.CompletedTask;
    }

    [TestMethod]
    public async Task DevKitCommand_LegacyConnection_BuildsArgRowsThenStopsAtProfileGate()
    {
        var command = new TestCommand();
        var settings = new TestArgs
        {
            Connection = "AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=44444444-4444-4444-4444-444444444444;ClientSecret=secret"
        };
        Assert.IsFalse(await command.Validate(settings), "the profile gate stops the run before any connection.");
        Assert.IsNull(settings.ServiceClient);
    }

    [TestMethod]
    public async Task DevKitCommand_FromPacArgs_ListPacProfileRowThenStopsAtProfileGate()
    {
        var command = new TestCommand();
        var settings = new TestArgs { AuthType = "FromPac", PacProfile = null, Json = string.Empty };
        Assert.IsFalse(await command.Validate(settings));
    }

    [TestMethod]
    public async Task DevKitCommand_AdArgs_ListUsernameAndDomainRowsThenStopsAtJsonGate()
    {
        Directory.SetCurrentDirectory(_root); // no DynamicsCrm.DevKit.Cli.json anywhere above
        var command = new TestCommand();
        var settings = new TestArgs
        {
            AuthType = "AD",
            Url = "https://org.contoso.test",
            Username = "alice",
            Domain = "CONTOSO",
            Profile = "p"
        };
        Assert.IsFalse(await command.Validate(settings), "the json gate stops the run before any connection.");
    }

    [TestMethod]
    public async Task DevKitCommand_ClientSecretArgs_ListClientRowThenStopsAtJsonGate()
    {
        Directory.SetCurrentDirectory(_root);
        var command = new TestCommand();
        var settings = new TestArgs
        {
            AuthType = "ClientSecret",
            Url = "https://org.crm.dynamics.com",
            ClientId = "44444444-4444-4444-4444-444444444444",
            Profile = "p",
            Json = "nothing-here.json"
        };
        Assert.IsFalse(await command.Validate(settings), "a missing json file stops the run before any connection.");
    }

    [TestMethod]
    public void DevKitCommand_DeviceCodeCallback_Banner_RendersWithoutConsole()
    {
        // The banner is the compiler-generated lambda of the DeviceCode
        // branch in ConnectWithModernAuthAsync. The lambda captures nothing,
        // so the compiler parks it on the cached <>c display class nested in
        // DevKitCommand<T> (a generic method cannot own a static lambda) —
        // reflect that type and invoke the banner directly, no auth flow.
        var definition = typeof(DevKitCommand<TestArgs>).GetGenericTypeDefinition();
        var nested = definition
            .GetNestedTypes(BindingFlags.NonPublic)
            .FirstOrDefault(t => t.Name == "<>c")
            ?? throw new AssertFailedException("the <>c display class of DevKitCommand<T> was not found.");
        // Nested types of a generic type carry the parent's generic
        // parameters — close them over the same type argument.
        var displayClass = nested.ContainsGenericParameters ? nested.MakeGenericType(typeof(TestArgs)) : nested;
        var method = displayClass
            .GetMethods(BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static)
            .FirstOrDefault(m => m.Name.StartsWith("<ConnectWithModernAuthAsync>", StringComparison.Ordinal)
                                 && m.ReturnType == typeof(void)
                                 && m.GetParameters().Length == 1
                                 && m.GetParameters()[0].ParameterType == typeof(string));
        Assert.IsNotNull(method, "the DeviceCode banner lambda was not found on DevKitCommand<T>.<>c.");
        // <>c lambdas are instance methods on the cached singleton — reuse
        // it when found, or mint a fresh stateless instance.
        var target = displayClass
            .GetFields(BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Static)
            .FirstOrDefault(f => f.IsStatic && f.FieldType == displayClass)
            ?.GetValue(null)
            ?? Activator.CreateInstance(displayClass);
        method!.Invoke(target, new object?[] { "Open https://microsoft.com/devicelogin and enter ABC-123" });
    }
}
