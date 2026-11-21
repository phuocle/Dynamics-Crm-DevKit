using System;
using System.Diagnostics;
using System.Reflection;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// GeneratorCommand offline validation — every custom IsValidAsync branch
/// returns before the connect-first gate, so these run exit-1 offline.
/// </summary>
[TestClass]
public class GeneratorCommandValidationTests
{
    private static async Task<(int ExitCode, string Output)> RunCliAsync(params string[] args)
    {
        var start = new ProcessStartInfo("dotnet") { RedirectStandardOutput = true, RedirectStandardError = true };
        start.ArgumentList.Add(typeof(Program).Assembly.Location);
        foreach (var arg in args) start.ArgumentList.Add(arg);
        using var process = Process.Start(start)!;
        var output = process.StandardOutput.ReadToEndAsync();
        var error = process.StandardError.ReadToEndAsync();
        await process.WaitForExitAsync();
        return (process.ExitCode, await output + await error);
    }

    // ──────────────────────────────────────────────
    // --list validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_UnknownValue_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain", "garbage");

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "unknown");
        StringAssert.Contains(output, "devkit generator list");
    }

    // ──────────────────────────────────────────────
    // --type + direct option conflicts
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Type_WithJson_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain", "--type", "CSharp", "--json", "anything.json");

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "Use either --type with direct options or --json with --profile");
    }

    [TestMethod]
    public async Task Type_WithProfile_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain", "--type", "CSharp", "--profile", "P");

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "Use either --type with direct options or --json with --profile");
    }

    [TestMethod]
    public async Task Type_UnknownType_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain", "--type", "Nope");

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "unknown generator type");
    }

    [TestMethod]
    public async Task Type_KnownType_MissingOutDirectory_FailsValidation()
    {
        var missing = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "gen-missing-" + Guid.NewGuid().ToString("N"));

        var (exit, output) = await RunCliAsync("generator", "--plain", "--type", "TsWebApi", "--out", missing);

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "--out: existing output directory required");
    }

    [TestMethod]
    public async Task Type_CSharp_MissingRootNamespace_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain", "--type", "CSharp",
            "--out", System.IO.Path.GetTempPath());

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "--rootnamespace: required for JsForm, JsWebApi and CSharp");
    }

    [TestMethod]
    public async Task DirectOptions_WithoutType_FailsValidation()
    {
        var (exit, output) = await RunCliAsync("generator", "--plain",
            "--out", System.IO.Path.GetTempPath(), "--entities", "account");

        Assert.AreEqual(1, exit);
        StringAssert.Contains(output, "--type: required when using direct generator options");
    }

    // ──────────────────────────────────────────────
    // Protected overrides + WriteTypes via reflection
    // ──────────────────────────────────────────────

    private static object InvokeProtected(string method, params object[] args)
    {
        var m = typeof(GeneratorCommand).GetMethod(method,
            BindingFlags.Instance | BindingFlags.Static | BindingFlags.NonPublic);
        Assert.IsNotNull(m, $"{method} not found");
        return m.Invoke(Activator.CreateInstance(typeof(GeneratorCommand)), args);
    }

    [TestMethod]
    public void IsProfileRequired_TrueWithoutType_FalseWithType()
    {
        var empty = new GeneratorCommandArgs { Type = null };
        var withType = new GeneratorCommandArgs { Type = "CSharp" };

        Assert.IsTrue((bool)InvokeProtected("IsProfileRequired", empty));
        Assert.IsFalse((bool)InvokeProtected("IsProfileRequired", withType));
    }

    [TestMethod]
    public void IsJsonRequired_TrueWithoutType_FalseWithType()
    {
        var empty = new GeneratorCommandArgs { Type = null };
        var withType = new GeneratorCommandArgs { Type = "CSharp" };

        Assert.IsTrue((bool)InvokeProtected("IsJsonRequired", empty));
        Assert.IsFalse((bool)InvokeProtected("IsJsonRequired", withType));
    }

    [TestMethod]
    public void WriteTypes_PrintsTypeCatalog()
    {
        var output = InvokeProtected("WriteTypes");

        Assert.IsNull(output); // void method
    }
}
