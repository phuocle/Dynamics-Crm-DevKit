using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
[DoNotParallelize]
public sealed class McpExclusiveConfigurationParserTests
{
    private string _directory = null!;
    [TestInitialize]
    public void Setup()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-parser-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);
        File.WriteAllText(Path.Combine(_directory, ".env"),
            "DEVKIT_ALIAS=default\nDEVKIT_NO_COLOR=true\nDEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=not-a-url\nDEVKIT_CLIENT_ID=env-id\nDEVKIT_CLIENT_SECRET=env-secret\n");
    }
    [TestCleanup]
    public void Cleanup() => Directory.Delete(_directory, true);

    private async Task<(int ExitCode, string Output)> Run(params string[] args)
    {
        var start = new ProcessStartInfo("dotnet")
        { WorkingDirectory = _directory, RedirectStandardOutput = true, RedirectStandardError = true };
        start.ArgumentList.Add(typeof(Program).Assembly.Location);
        start.ArgumentList.Add("mcp"); start.ArgumentList.Add("devkit-codex");
        foreach (var arg in args) start.ArgumentList.Add(arg);
        using var process = Process.Start(start)!;
        var output = process.StandardOutput.ReadToEndAsync(); var error = process.StandardError.ReadToEndAsync();
        try { await process.WaitForExitAsync().WaitAsync(TimeSpan.FromSeconds(30)); }
        catch { process.Kill(entireProcessTree: true); throw; }
        return (process.ExitCode, await output + await error);
    }

    [TestMethod]
    [DataRow("--transport", "stdio")]
    [DataRow("--auth", "ClientSecret")]
    [DataRow("--url", "")]
    [DataRow("--clientsecret", "")]
    public async Task ExplicitOption_EvenDefaultOrEmpty_StopsWithoutReadingEnv(string option, string value)
    {
        using var lockedEnv = new FileStream(Path.Combine(_directory, ".env"), FileMode.Open, FileAccess.ReadWrite, FileShare.None);
        var result = await Run(option, value);
        Assert.AreEqual(2, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "Incomplete MCP connection arguments");
        Assert.IsFalse(result.Output.Contains("reserved name"));
    }

    [TestMethod]
    [DataRow("--dry-run")]
    [DataRow("--dry-run=false")]
    [DataRow("--plain")]
    public async Task Flag_StopsWithoutEnvFallback(string option)
    {
        var result = await Run(option);
        Assert.AreEqual(2, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "Incomplete MCP connection arguments");
    }

    [TestMethod]
    [DataRow("--transport", "stdio")]
    [DataRow("--clientsecret", "")]
    public async Task EnvPlusConfigurationOption_IsRejectedByRealParser(string option, string value)
    {
        var result = await Run("--env", "99", option, value);
        Assert.AreEqual(2, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "--env cannot be combined");
    }

    [TestMethod]
    [DataRow("--plain")]
    [DataRow("--dry-run")]
    [DataRow("--dry-run=false")]
    public async Task EnvPlusFlag_IsRejected(string option)
    {
        var result = await Run("--env", "99", option);
        Assert.AreEqual(2, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "--env cannot be combined");
    }

    [TestMethod]
    public async Task CompleteArgs_ValidateTheirOwnValues_WithoutOpeningEnv()
    {
        using var lockedEnv = new FileStream(Path.Combine(_directory, ".env"), FileMode.Open, FileAccess.ReadWrite, FileShare.None);
        var result = await Run("--auth", "ClientSecret", "--url", "not-an-args-url", "--clientid", "args-id", "--clientsecret", "args-secret");
        Assert.AreEqual(1, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "Invalid URL format: not-an-args-url");
        StringAssert.Contains(result.Output, "args-only; .env is not read");
    }

    [TestMethod]
    [DataRow(false, "https://default.example.invalid")]
    [DataRow(true, "https://selected.example.invalid")]
    public async Task EnvOnly_UsesExactGroup_WithoutOpeningLiveConnection(bool numbered, string expectedUrl)
    {
        File.WriteAllText(Path.Combine(_directory, ".env"),
            "DEVKIT_AUTH_TYPE=UnsupportedAuth\nDEVKIT_URL=https://default.example.invalid\n" +
            "DEVKIT_99_AUTH_TYPE=UnsupportedAuth\nDEVKIT_99_URL=https://selected.example.invalid\n");
        var result = await Run(numbered ? new[] { "--env", "99" } : Array.Empty<string>());
        Assert.AreEqual(1, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "URL: " + expectedUrl);
        StringAssert.Contains(result.Output, "Connection source: project .env");
        StringAssert.Contains(result.Output, "not supported");
    }

    [TestMethod]
    public async Task ParserHelp_DoesNotReadLockedEnv()
    {
        using var lockedEnv = new FileStream(Path.Combine(_directory, ".env"), FileMode.Open, FileAccess.ReadWrite, FileShare.None);
        var result = await Run("--env", "99", "--help");
        Assert.AreEqual(0, result.ExitCode, result.Output);
        StringAssert.Contains(result.Output, "args-only");
    }
}
