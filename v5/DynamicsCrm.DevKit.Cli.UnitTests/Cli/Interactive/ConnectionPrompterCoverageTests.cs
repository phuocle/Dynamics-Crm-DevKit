using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Interactive flows of ConnectionPrompter — 'devkit new-project' asks the
/// connection type and the per-type fields through the static AnsiConsole,
/// so every test swaps in a ScriptedConsole and replays the answer keys.
/// The .env suggestion/confirm flows write a real project .env in a temp
/// directory: ReadEnvironment walks up from it and finds the file first.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ConnectionPrompterCoverageTests
{
    private string _root = null!;
    private ScriptedConsole _console = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_ConnectionPrompter", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        _console = ScriptedConsole.Install();
    }

    [TestCleanup]
    public void Cleanup()
    {
        ScriptedConsole.Restore();
        _console.Dispose();
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private void WriteEnv(params string[] lines)
    {
        File.WriteAllLines(Path.Combine(_root, ProjectEnvironment.FileName), lines);
    }

    [TestMethod]
    public void Prompt_NoEnv_EnterOnSkip_ReturnsNull()
    {
        _console.Input.PushKey(ConsoleKey.Enter);
        var connection = ConnectionPrompter.Prompt(new[] { "ClientSecret" }, _root);
        Assert.IsNull(connection, "the skip choice is the Enter-to-skip default when the .env suggests nothing.");
    }

    [TestMethod]
    public void Prompt_EnvAuthTypeUnknownType_SuggestionIgnored_SkipWins()
    {
        WriteEnv("DEVKIT_AUTH_TYPE=Bogus");
        _console.Input.PushKey(ConsoleKey.Enter);
        var connection = ConnectionPrompter.Prompt(new[] { "ClientSecret" }, _root);
        Assert.IsNull(connection, "an .env AuthType outside the supported list is not a suggestion.");
    }

    [TestMethod]
    public void Prompt_ClientSecret_EnvFull_ConfirmYes_BakesProjectEnvironment()
    {
        WriteEnv(
            "DEVKIT_AUTH_TYPE=ClientSecret",
            "DEVKIT_URL=https://org.crm.dynamics.com",
            "DEVKIT_CLIENT_ID=11111111-1111-1111-1111-111111111111",
            "DEVKIT_CLIENT_SECRET=from-env");
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter).PushTextWithEnter("y");
        var connection = ConnectionPrompter.Prompt(new[] { "ClientSecret" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("ClientSecret", connection.Type);
        Assert.IsTrue(connection.UseProjectEnvironment);
    }

    [TestMethod]
    public void Prompt_ClientSecret_EnvFull_ConfirmNo_FieldsTakeEnvDefaults()
    {
        WriteEnv(
            "DEVKIT_AUTH_TYPE=ClientSecret",
            "DEVKIT_URL=https://org.crm.dynamics.com",
            "DEVKIT_CLIENT_ID=22222222-2222-2222-2222-222222222222",
            "DEVKIT_CLIENT_SECRET=from-env");
        _console.Input
            .PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter)
            .PushTextWithEnter("n")
            .PushTextWithEnter("")          // Url — accept the .env default
            .PushTextWithEnter("")          // ClientId — accept the .env default
            .PushTextWithEnter("typed-secret");
        var connection = ConnectionPrompter.Prompt(new[] { "ClientSecret" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("https://org.crm.dynamics.com", connection.Url);
        Assert.AreEqual("22222222-2222-2222-2222-222222222222", connection.ClientId);
        Assert.AreEqual("typed-secret", connection.ClientSecret);
    }

    [TestMethod]
    public void Prompt_ClientSecret_UrlInvalid_RepromptsThenAcceptsValid()
    {
        WriteEnv("DEVKIT_AUTH_TYPE=ClientSecret", "DEVKIT_CLIENT_ID=33333333-3333-3333-3333-333333333333");
        _console.Input
            .PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter)
            .PushTextWithEnter("notaurl")   // fails the URL validator
            .PushTextWithEnter("https://org.crm.dynamics.com")
            .PushTextWithEnter("")          // ClientId — .env default
            .PushTextWithEnter("s3cret");
        var connection = ConnectionPrompter.Prompt(new[] { "ClientSecret" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("https://org.crm.dynamics.com", connection.Url);
        Assert.AreEqual("33333333-3333-3333-3333-333333333333", connection.ClientId);
        Assert.AreEqual("s3cret", connection.ClientSecret);
    }

    [TestMethod]
    public void Prompt_OAuth_EnvFull_ConfirmNo_FieldsMapped()
    {
        WriteEnv(
            "DEVKIT_AUTH_TYPE=OAuth",
            "DEVKIT_URL=https://org.crm.dynamics.com",
            "DEVKIT_USERNAME=user@contoso.com",
            "DEVKIT_PASSWORD=from-env");
        _console.Input
            .PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter)
            .PushTextWithEnter("n")
            .PushTextWithEnter("")          // Url
            .PushTextWithEnter("")          // UserName
            .PushTextWithEnter("typed-pw");
        var connection = ConnectionPrompter.Prompt(new[] { "OAuth" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("user@contoso.com", connection.UserName);
        Assert.AreEqual("typed-pw", connection.Password);
    }

    [TestMethod]
    public void Prompt_AD_EnvFull_ConfirmYes_BakesProjectEnvironment()
    {
        WriteEnv(
            "DEVKIT_AUTH_TYPE=AD",
            "DEVKIT_URL=https://onprem.contoso.local/contoso",
            "DEVKIT_USERNAME=contoso\\user",
            "DEVKIT_PASSWORD=from-env");
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter).PushTextWithEnter("y");
        var connection = ConnectionPrompter.Prompt(new[] { "AD" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("AD", connection.Type);
        Assert.IsTrue(connection.UseProjectEnvironment);
    }

    [TestMethod]
    public void Prompt_Interactive_EnvUrlOnly_ConfirmYes_BakesProjectEnvironment()
    {
        WriteEnv("DEVKIT_AUTH_TYPE=Interactive", "DEVKIT_URL=https://org.crm.dynamics.com");
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter).PushTextWithEnter("y");
        var connection = ConnectionPrompter.Prompt(new[] { "Interactive" }, _root);
        Assert.IsNotNull(connection);
        Assert.IsTrue(connection.UseProjectEnvironment);
    }

    [TestMethod]
    public void Prompt_DeviceCode_EnvUrlOnly_ConfirmYes_BakesProjectEnvironment()
    {
        WriteEnv("DEVKIT_AUTH_TYPE=DeviceCode", "DEVKIT_URL=https://org.crm.dynamics.com");
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter).PushTextWithEnter("y");
        var connection = ConnectionPrompter.Prompt(new[] { "DeviceCode" }, _root);
        Assert.IsNotNull(connection);
        Assert.IsTrue(connection.UseProjectEnvironment);
    }

    [TestMethod]
    public void Prompt_UnknownType_NoMetadata_ReturnsEmptyConnection()
    {
        // A type outside the registry: no fields are asked (metadata null)
        // and the connection carries just the picked type.
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter);
        var connection = ConnectionPrompter.Prompt(new[] { "BogusType" }, _root);
        Assert.IsNotNull(connection);
        Assert.AreEqual("BogusType", connection.Type);
    }

}
