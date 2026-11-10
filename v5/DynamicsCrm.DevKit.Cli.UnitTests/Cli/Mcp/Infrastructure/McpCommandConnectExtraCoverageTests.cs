using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using DynamicsCrm.DevKit.Cli.Commands;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// The MCP command's ConnectAsync paths reachable without a real Dataverse
/// org: the legacy --conn resolution failure and the modern-auth validation
/// failures (ClientSecret ValidateAsync runs network-free). Everything past
/// a successful builder (CreateServiceClientAsync / MSAL) and the post-connect
/// logging is unreachable here — noted per test.
/// </summary>
[TestClass]
public sealed class McpCommandConnectExtraCoverageTests
{
    private sealed class NoRemaining : Spectre.Console.Cli.IRemainingArguments
    {
        public System.Linq.ILookup<string, string?> Parsed => null!;
        public System.Collections.Generic.IReadOnlyList<string> Raw => Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyList<string> Piped => Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IReadOnlyList<string>> PipedArguments =>
            new System.Collections.Generic.Dictionary<string, System.Collections.Generic.IReadOnlyList<string>>();
    }

    private static async Task<int> ExecuteAsync(McpCommandArgs settings)
    {
        using var project = new IsolatedMcpProject();
        settings.Json = project.JsonPath;
        var command = new McpCommand();
        return await command.ExecuteAsyncForTesting(
            new Spectre.Console.Cli.CommandContext(new[] { "mcp" }, new NoRemaining(), "mcp", null!),
            settings, default);
    }

    [TestMethod]
    public async Task ExecuteAsync_ClientSecret_MissingClientSecret_FailsValidation_ReturnsOne()
    {
        // ConnectModernAsync → GetBuilder → CrmConnection → ValidateAsync
        // rejects (ClientSecret required) → the DevKitConnectionException-style
        // error text flows through the command catch → exit 1.
        var exit = await ExecuteAsync(new McpCommandArgs
        {
            AuthType = "ClientSecret",
            Url = "https://org.example.test",
            ClientId = "app"
        });
        Assert.AreEqual(1, exit, "a failed modern-auth validation surfaces as exit 1.");
    }

    [TestMethod]
    public async Task ExecuteAsync_ClientSecret_InvalidUrlFormat_FailsValidation_ReturnsOne()
    {
        // The ClientSecret decrypt branch runs (the value is not valid base64
        // so DecryptString returns it unchanged) and Uri.TryCreate rejects
        // the URL → "Validation failed: Invalid URL format".
        var exit = await ExecuteAsync(new McpCommandArgs
        {
            AuthType = "ClientSecret",
            Url = "not a url",
            ClientId = "app",
            ClientSecret = "plain secret"
        });
        Assert.AreEqual(1, exit);
    }

    [TestMethod]
    public async Task ExecuteAsync_LegacyConnection_WhitespaceOnly_ReturnsTwo()
    {
        // ParseConnectionString(null-ish) → "Invalid connection string."
        // → ConnectAsync returns null → ExecuteAsync exits 2.
        var exit = await ExecuteAsync(new McpCommandArgs { Connection = "   " });
        Assert.AreEqual(2, exit, "an unparseable legacy --conn exits 2 without connecting.");
    }

    // NOTE (skipped branches — need real infrastructure):
    // - lines 53-69 (post-connect org logs + --as-user impersonation) and
    //   91-94 (McpServerHost.RunAsync) require serviceClient.IsReady — only
    //   reachable with a real org connection.
    // - ConnectModernAsync lines 177-185 (DeviceCodeCallback +
    //   CreateServiceClientAsync) start a real MSAL device-code flow.
    // - ConnectAsync lines 133-144 (legacy builder CreateServiceClientAsync →
    //   IsReady check) reach a real connection attempt; a builder never
    //   returns a ready client without MSAL/network.
    // All left uncovered by design.
}
