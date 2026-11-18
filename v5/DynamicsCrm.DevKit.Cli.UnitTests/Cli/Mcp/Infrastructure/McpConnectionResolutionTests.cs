using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
[DoNotParallelize]
public class McpConnectionResolutionTests
{
    private string _directory = null!, _originalDirectory = null!;
    [TestInitialize]
    public void Initialize()
    {
        _originalDirectory = Environment.CurrentDirectory;
        _directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-resolution-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);
        Environment.CurrentDirectory = _directory;
    }
    [TestCleanup]
    public void Cleanup() { Environment.CurrentDirectory = _originalDirectory; Directory.Delete(_directory, true); }
    private void WriteEnv(string extra = "") => File.WriteAllText(Path.Combine(_directory, ".env"),
        "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=https://dev.example.invalid\nDEVKIT_CLIENT_ID=dev-id\nDEVKIT_CLIENT_SECRET=dev-secret\n" +
        "DEVKIT_99_AUTH_TYPE=ClientSecret\nDEVKIT_99_URL=https://uat.example.invalid\nDEVKIT_99_CLIENT_ID=uat-id\nDEVKIT_99_CLIENT_SECRET=uat-secret\nDEVKIT_99_ALIAS=uat\nDEVKIT_99_DRY_RUN=true\n" + extra);
    private static McpCommandArgs CompleteArgs() => new()
    { AuthType = "ClientSecret", Url = "https://args.example.invalid", ClientId = "args-id", ClientSecret = "args-secret" };
    private static McpConnectionConfigurationException Error(Action action)
    {
        try { action(); } catch (McpConnectionConfigurationException ex) { return ex; }
        throw new AssertFailedException("Expected startup configuration error");
    }

    [TestMethod]
    [DataRow(null, "default", "https://dev.example.invalid", false)]
    [DataRow("default", "default", "https://dev.example.invalid", false)]
    [DataRow("99", "99", "https://uat.example.invalid", true)]
    [DataRow("UAT", "99", "https://uat.example.invalid", true)]
    public void EnvOnly_UsesExactStartupGroup_AndDiscoversAllGroups(string? selector, string id, string url, bool dryRun)
    {
        WriteEnv("DEVKIT_2_AUTH_TYPE=Interactive\nDEVKIT_2_URL=https://third.example.invalid\n");
        var settings = new McpCommandArgs { Name = "devkit-codex", Env = selector };
        var snapshot = McpStartupConfiguration.Resolve(settings);
        Assert.AreEqual(id, snapshot.StartupEnvId); Assert.AreEqual(url, settings.Url); Assert.AreEqual(dryRun, settings.DryRun);
        CollectionAssert.AreEquivalent(new[] { "default", "2", "99" }, snapshot.GroupIds.ToArray());
        Assert.IsTrue(settings.UsedEnvironmentFallback);
    }

    [TestMethod]
    public void ArgsOnly_DoesNotOpenEnv_OrInheritPoliciesOptionalFieldsAndGroups()
    {
        WriteEnv("DEVKIT_ALIAS=default\nDEVKIT_DRY_RUN=true\nDEVKIT_AS_USER=env-user\nDEVKIT_USERNAME=env-user\nDEVKIT_PAC_PROFILE=env-profile\n");
        using var lockedEnv = new FileStream(Path.Combine(_directory, ".env"), FileMode.Open, FileAccess.ReadWrite, FileShare.None);
        var settings = CompleteArgs(); var snapshot = McpStartupConfiguration.Resolve(settings);
        CollectionAssert.AreEqual(new[] { "default" }, snapshot.GroupIds.ToArray());
        Assert.AreEqual("https://args.example.invalid", settings.Url); Assert.AreEqual("args-secret", settings.ClientSecret);
        Assert.AreEqual("", settings.Username); Assert.AreEqual("", settings.PacProfile);
        Assert.IsFalse(settings.DryRun); Assert.IsNull(settings.AsUser); Assert.IsNull(settings.EnvironmentSnapshot);
        Assert.IsNull(snapshot.FilePath); Assert.IsFalse(settings.UsedEnvironmentFallback);
        Assert.IsNull(snapshot.ResolveId("99")); Assert.IsNull(snapshot.ResolveId("uat"));
    }

    [TestMethod]
    [DataRow("--auth", "ClientSecret")] [DataRow("--url", "")] [DataRow("--conn", "")]
    [DataRow("--clientsecret", "")] [DataRow("--dry-run", "")] [DataRow("--dry-run=false", "")]
    [DataRow("--category", "all")] [DataRow("--transport", "stdio")] [DataRow("--as-user", "")]
    [DataRow("--json", "")] [DataRow("--profile", "")] [DataRow("--sdk-login", "")]
    public void AnyConfigurationOption_EvenEmptyOrDefault_DoesNotFallBackToValidEnv(string option, string value)
    {
        WriteEnv();
        var error = Error(() => McpStartupConfiguration.Resolve(new McpCommandArgs(), new[] { "mcp", "devkit-codex", option, value }));
        StringAssert.Contains(error.Message, "Incomplete MCP connection arguments"); StringAssert.Contains(error.Message, "never reads .env");
    }

    [TestMethod]
    [DataRow("--auth", "ClientSecret")] [DataRow("--dry-run", "")] [DataRow("--dry-run=false", "")]
    [DataRow("--category", "all")] [DataRow("--transport", "stdio")] [DataRow("--as-user", "")]
    public void EnvAndAnyConfigurationOption_AreRejectedBeforeReadingEnv(string option, string value)
    {
        WriteEnv("DEVKIT_ALIAS=default\n");
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(new McpCommandArgs { Env = "99" },
            new[] { "mcp", "--env", "99", option, value })).Message, "--env cannot be combined");
    }

    [TestMethod]
    public void ConsumedPlainOption_StillSelectsArgsOnly_AndRejectsEnvMix()
    {
        WriteEnv();
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(new McpCommandArgs(), plainOption: true)).Message, "Incomplete MCP connection arguments");
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(new McpCommandArgs { Env = "99" }, plainOption: true)).Message, "--env cannot be combined");
    }

    [TestMethod]
    public void PartialConnection_DoesNotFillMissingCredentialsFromEnv()
    {
        WriteEnv();
        var settings = CompleteArgs(); settings.ClientSecret = "";
        Error(() => McpStartupConfiguration.Resolve(settings)); Assert.AreEqual("", settings.ClientSecret);
    }

    [TestMethod]
    public void ConnectionStringAndAuth_AreRejectedWithoutLeakingValues()
    {
        var settings = CompleteArgs(); settings.Connection = "AuthType=ClientSecret;secret=not-printed";
        var error = Error(() => McpStartupConfiguration.Resolve(settings));
        StringAssert.Contains(error.Message, "--conn cannot be combined with --auth"); Assert.IsFalse(error.Message.Contains("not-printed"));
    }

    [TestMethod]
    [DataRow("ClientSecret")] [DataRow("Interactive")] [DataRow("DeviceCode")]
    [DataRow("FromPac")] [DataRow("OAuth")] [DataRow("AD")]
    public void CompleteArgs_DoNotRequireEnv_AndKeepAuthenticationDefaults(string auth)
    {
        var settings = CompleteArgs(); settings.AuthType = auth; settings.Username = "user"; settings.Password = "password";
        Assert.AreEqual("default", McpStartupConfiguration.Resolve(settings).StartupEnvId);
        Assert.AreEqual("", settings.Domain); Assert.AreEqual("", settings.PacProfile); Assert.IsFalse(settings.UsedEnvironmentFallback);
    }

    [TestMethod]
    public void LegacyConnectionString_IsArgsOnly()
    {
        WriteEnv("DEVKIT_ALIAS=default\n");
        var settings = new McpCommandArgs { Connection = "AuthType=ClientSecret;Url=https://args.example.invalid" };
        Assert.AreEqual(1, McpStartupConfiguration.Resolve(settings).GroupIds.Count); Assert.AreEqual("", settings.AuthType);
    }

    [TestMethod]
    public void EmptyAuthOption_CannotBeCombinedWithConnectionString()
    {
        var settings = new McpCommandArgs { Connection = "not-printed" };
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(settings,
            new[] { "mcp", "--conn", "not-printed", "--auth", "" })).Message, "--conn cannot be combined with --auth");
    }

    [TestMethod]
    [DataRow("Interactive")]
    [DataRow("DeviceCode")]
    [DataRow("FromPac")]
    public void BuiltInAuthDefaults_DoNotRequireExtraArguments(string auth)
    {
        var settings = new McpCommandArgs { AuthType = auth, Url = auth == "FromPac" ? "" : "https://args.example.invalid" };
        Assert.AreEqual(1, McpStartupConfiguration.Resolve(settings).GroupIds.Count);
        Assert.AreEqual("", settings.ClientId);
        Assert.AreEqual("", settings.PacProfile);
    }

    [TestMethod]
    public void MissingDefault_DoesNotAutoSelectNumberedGroup()
    {
        File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_99_AUTH_TYPE=FromPac\n");
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(new McpCommandArgs())).Message, "group 'default' was not found");
        Assert.AreEqual("99", McpStartupConfiguration.Resolve(new McpCommandArgs { Env = "99" }).StartupEnvId);
    }

    [TestMethod]
    public void EnvOnly_MissingFieldsDoNotBorrowFromOtherGroups()
    {
        WriteEnv("DEVKIT_99_CLIENT_SECRET=\n");
        var settings = new McpCommandArgs { Env = "99" };
        StringAssert.Contains(Error(() => McpStartupConfiguration.Resolve(settings)).Message, "Incomplete connection configuration");
        Assert.AreEqual("", settings.ClientSecret);
    }

    [TestMethod]
    public void ArgsOnly_ControlOptionsAreAllowedWithCompleteConnection()
    {
        WriteEnv("DEVKIT_ALIAS=default\n");
        var settings = CompleteArgs(); settings.Category = "readonly"; settings.DryRun = true; settings.AsUser = "args-user";
        Assert.AreEqual(1, McpStartupConfiguration.Resolve(settings).GroupIds.Count);
        Assert.IsTrue(settings.DryRun); Assert.AreEqual("args-user", settings.AsUser);
    }
}
