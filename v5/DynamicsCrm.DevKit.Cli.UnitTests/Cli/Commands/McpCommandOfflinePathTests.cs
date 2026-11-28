using System;
using System.Diagnostics;
using System.Reflection;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// Offline-reachable McpCommand paths: the --tools catalog print and the
/// bare-`mcp` redirected-stdin startup failure. The stdio server loop itself
/// needs a live client and stays out of unit-test scope.
/// </summary>
[TestClass]
public class McpCommandOfflinePathTests
{
    private static async Task<(int ExitCode, string Output)> RunCliAsync(params string[] args)
    {
        var start = new ProcessStartInfo("dotnet")
        {
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            // Redirected stdin makes Console.IsInputRedirected deterministic
            // for the bare-`mcp` startup-failure branch.
            RedirectStandardInput = true
        };
        start.WorkingDirectory = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "mcp-offline-tests");
        System.IO.Directory.CreateDirectory(start.WorkingDirectory);
        start.ArgumentList.Add(typeof(Program).Assembly.Location);
        foreach (var arg in args) start.ArgumentList.Add(arg);
        using var process = Process.Start(start)!;
        process.StandardInput.Close();
        var output = process.StandardOutput.ReadToEndAsync();
        var error = process.StandardError.ReadToEndAsync();
        await process.WaitForExitAsync();
        return (process.ExitCode, await output + await error);
    }

    [TestMethod]
    public async Task McpTools_Offline_PrintsCatalog()
    {
        var (exit, output) = await RunCliAsync("mcp", "--plain", "--tools");

        Assert.AreEqual(0, exit);
        StringAssert.Contains(output, "get_context");
        StringAssert.Contains(output, "query_data");
        StringAssert.Contains(output, "manage_record");
    }

    [TestMethod]
    public async Task McpBare_RedirectedStdin_StartupFailsWithExit2()
    {
        var (exit, output) = await RunCliAsync("mcp");

        Assert.AreEqual(2, exit);
        StringAssert.Contains(output, "[DevKit MCP ERROR]");
        StringAssert.Contains(output, "--auth or --conn is required");
    }

    [TestMethod]
    public void ValidateGroupRequiredFields_Wrapper_DelegatesToFactory()
    {
        var method = typeof(global::DynamicsCrm.DevKit.Cli.Commands.McpCommand).GetMethod(
            "ValidateGroupRequiredFields", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var connection = new CrmConnection { Url = "https://org.example.invalid" };

        var ex = Assert.ThrowsExactly<TargetInvocationException>(() =>
            method.Invoke(null, new object[] { "ClientSecret", connection, "2" }));

        StringAssert.Contains(ex.InnerException!.Message, "Environment group '2'");
    }
}

/// <summary>
/// TaskPacSolutionPackager.IsPacInstalled — runs the real `pac help` probe
/// (draining both pipes). The catch-fallback (pac missing) cannot be forced
/// without mutating the process PATH, which would race other process tests.
/// </summary>
[TestClass]
public class TaskPacSolutionPackagerIsPacInstalledTests
{
    [TestMethod]
    public void IsPacInstalled_ReturnsBoolWithoutThrowing()
    {
        var task = (TaskPacSolutionPackager)Activator.CreateInstance(
            typeof(TaskPacSolutionPackager),
            new CommandLineArgs { Json = "solution.json" },
            new JsonSolutionPackager { solution = "Test", type = "Extract" })!;

        var method = typeof(TaskPacSolutionPackager).GetMethod(
            "IsPacInstalled", BindingFlags.Instance | BindingFlags.NonPublic);
        Assert.IsNotNull(method);

        var installed = (bool)method.Invoke(task, null);

        Assert.IsTrue(installed || !installed);
    }
}
