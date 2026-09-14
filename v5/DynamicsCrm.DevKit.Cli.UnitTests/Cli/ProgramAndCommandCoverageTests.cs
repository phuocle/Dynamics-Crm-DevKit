using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Entry-point and shared-helper coverage: Program.Main help paths (safe —
/// WaitForKeyPress is a no-op without an attached debugger), the MCP command's
/// print-only branches, and XrmHelper's deployment predicate helpers.
/// </summary>
[TestClass]
public sealed class ProgramAndCommandCoverageTests
{
    [TestMethod]
    public async Task Main_NoArgs_PrintsHelpAndReturnsZero()
    {
        var exit = await Program.Main(Array.Empty<string>());
        Assert.AreEqual(0, exit);
    }

    [TestMethod]
    public async Task Main_PlainFlag_IsStrippedAndShowsHelp()
    {
        var exit = await Program.Main(new[] { "--plain" });
        Assert.AreEqual(0, exit);
        Assert.IsTrue(SpectreLog.IsPlain, "--plain switches the logger to plain mode.");
        SpectreLog.IsPlain = false;
    }

    [TestMethod]
    public async Task Main_NullArgs_PrintsHelp()
    {
        var exit = await Program.Main(null!);
        Assert.AreEqual(0, exit);
    }

    private sealed class NoRemaining : Spectre.Console.Cli.IRemainingArguments
    {
        public System.Linq.ILookup<string, string?> Parsed { get; } = null!;
        public System.Collections.Generic.IReadOnlyList<string> Raw { get; } = Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyList<string> Piped { get; } = Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IReadOnlyList<string>> PipedArguments { get; } = new System.Collections.Generic.Dictionary<string, System.Collections.Generic.IReadOnlyList<string>>();
    }

    [TestMethod]
    public async Task McpCommand_SetupGuide_PrintsAndReturnsZero()
    {
        var command = new McpCommand();
        var settings = new McpCommandArgs { SetupGuide = true };
        var exit = await command.ExecuteAsyncForTesting(new Spectre.Console.Cli.CommandContext(new[] { "mcp" }, new NoRemaining(), "mcp", null!), settings, default);
        Assert.AreEqual(0, exit);
    }

    [TestMethod]
    public async Task McpCommand_ListTools_PrintsAndReturnsZero()
    {
        var command = new McpCommand();
        var settings = new McpCommandArgs { ListTools = true };
        var exit = await command.ExecuteAsyncForTesting(new Spectre.Console.Cli.CommandContext(new[] { "mcp" }, new NoRemaining(), "mcp", null!), settings, default);
        Assert.AreEqual(0, exit);
    }

    // ── XrmHelper ─────────────────────────────────────────────────────

    [TestMethod]
    public void GetFiles_IncludesAndExcludes_Patterns()
    {
        var folder = Path.Combine(Path.GetTempPath(), "devkit-files-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(folder);
        try
        {
            File.WriteAllText(Path.Combine(folder, "Plugin.cs"), "//");
            File.WriteAllText(Path.Combine(folder, "Workflow.cs"), "//");
            File.WriteAllText(Path.Combine(folder, "Plugin.csproj"), "<Project/>");
            File.WriteAllText(Path.Combine(folder, "notes.txt"), "skip");

            var files = XrmHelper.GetFiles(
                folder,
                new List<string> { "*.cs" },
                new List<string> { "*.txt" });

            CollectionAssert.AreEquivalent(
                new[] { Path.Combine(folder, "Plugin.cs"), Path.Combine(folder, "Workflow.cs") },
                files,
                "Only .cs files are included, .txt excluded.");

            var missing = XrmHelper.GetFiles(
                Path.Combine(folder, "nope"),
                new List<string> { "*.cs" },
                new List<string>());
            Assert.HasCount(0, missing, "missing folder yields nothing");
        }
        finally { Directory.Delete(folder, true); }
    }

    [TestMethod]
    public void GetMessagePropertyName_MapsMessages()
    {
        Assert.AreEqual("Id", XrmHelper.GetMessagePropertyName("Create"));
        Assert.AreEqual("Ids", XrmHelper.GetMessagePropertyName("CreateMultiple"));
        Assert.AreEqual("Targets", XrmHelper.GetMessagePropertyName("UpdateMultiple"));
        Assert.AreEqual("EntityMoniker", XrmHelper.GetMessagePropertyName("SetState"));
        Assert.AreEqual("EntityMoniker", XrmHelper.GetMessagePropertyName("SetStateDynamicEntity"));
        Assert.AreEqual("EmailId", XrmHelper.GetMessagePropertyName("DeliverIncoming"));
        Assert.AreEqual("EmailId", XrmHelper.GetMessagePropertyName("DeliverPromote"));
        Assert.AreEqual("EmailId", XrmHelper.GetMessagePropertyName("Send"));
        Assert.AreEqual("Target", XrmHelper.GetMessagePropertyName("Assign"));
    }

    [TestMethod]
    public void IsMessageUpdate_MatchesUpdateVariants()
    {
        Assert.IsTrue(XrmHelper.IsMessageUpdate("Update"));
        Assert.IsTrue(XrmHelper.IsMessageUpdate("UpdateMultiple"));
        Assert.IsFalse(XrmHelper.IsMessageUpdate("Create"));
    }

    [TestMethod]
    public void IsSupportPluginImage_KnownMessages()
    {
        foreach (var message in new[] { "Assign", "Create", "Delete", "Merge", "SetState", "Update", "Send" })
            Assert.IsTrue(XrmHelper.IsSupportPluginImage(message), message);

        Assert.IsFalse(XrmHelper.IsSupportPluginImage("WhoAmI"));
        Assert.IsFalse(XrmHelper.IsSupportPluginImage(null!));
    }

    [TestMethod]
    public void EqualityHelpers_CompareValues()
    {
        Assert.IsTrue(XrmHelper.IsEqualsWorkflowType("a", "a"));
        Assert.IsFalse(XrmHelper.IsEqualsWorkflowType("a", "b"));
        Assert.IsTrue(XrmHelper.IsEqualsContent("same", "same"));
        Assert.IsFalse(XrmHelper.IsEqualsContent("same", "other"));
    }

    [TestMethod]
    public async Task McpCommand_InvalidModernAuthentication_ReturnsError()
    {
        var command = new McpCommand();
        var settings = new McpCommandArgs { AuthType = "NotARealAuthType", Url = "https://example.test" };
        var exit = await command.ExecuteAsyncForTesting(new Spectre.Console.Cli.CommandContext(new[] { "mcp" }, new NoRemaining(), "mcp", null!), settings, default);
        Assert.AreEqual(1, exit);
    }

    [TestMethod]
    public void McpCommand_PrivateHelpers_CoverAuthenticationFormatting()
    {
        var commandType = typeof(McpCommand);
        var shouldLogClientId = commandType.GetMethod("ShouldLogClientId", BindingFlags.NonPublic | BindingFlags.Static)!;
        var shouldLogUsername = commandType.GetMethod("ShouldLogUsername", BindingFlags.NonPublic | BindingFlags.Static)!;
        var getConnectionUserName = commandType.GetMethod("GetConnectionUserName", BindingFlags.NonPublic | BindingFlags.Static)!;

        foreach (var auth in new[] { "ClientSecret", "Interactive", "DeviceCode", "OAuth" })
            Assert.IsTrue((bool)shouldLogClientId.Invoke(null, new object?[] { auth })!);
        foreach (var auth in new[] { "OAuth", "AD" })
            Assert.IsTrue((bool)shouldLogUsername.Invoke(null, new object?[] { auth })!);
        Assert.IsFalse((bool)shouldLogClientId.Invoke(null, new object?[] { "FromPac" })!);
        Assert.IsFalse((bool)shouldLogUsername.Invoke(null, new object?[] { "ClientSecret" })!);

        var adSettings = new McpCommandArgs { AuthType = "AD", Domain = "CONTOSO", Username = "alice" };
        Assert.AreEqual("CONTOSO\\alice", getConnectionUserName.Invoke(null, new object?[] { adSettings }));
        adSettings.Username = "CONTOSO\\alice";
        Assert.AreEqual("CONTOSO\\alice", getConnectionUserName.Invoke(null, new object?[] { adSettings }));
        adSettings.AuthType = "FromPac";
        Assert.AreEqual("CONTOSO\\alice", getConnectionUserName.Invoke(null, new object?[] { adSettings }));
    }

    [TestMethod]
    public void McpCommand_ImpersonationHelpers_HandleUnresolvableTargets()
    {
        var resolveUser = typeof(McpCommand).GetMethod("ResolveUserByEmail", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { null, "missing@example.test", null };
        var result = resolveUser.Invoke(null, args);
        Assert.IsNull(result);
        Assert.IsNull(args[2]);

        var resolveAsUser = typeof(McpCommand).GetMethod("ResolveAsUser", BindingFlags.NonPublic | BindingFlags.Static)!;
        var resolveArgs = new object?[] { null, "missing@example.test", null };
        Assert.IsNull(resolveAsUser.Invoke(null, resolveArgs));
        Assert.IsNull(resolveArgs[2]);
    }

    [TestMethod]
    public async Task McpCommand_ConnectValidation_HandlesMissingAndInvalidLegacyInputs()
    {
        var command = new McpCommand();
        var method = typeof(McpCommand).GetMethod("ConnectAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var missing = (Task<Microsoft.PowerPlatform.Dataverse.Client.ServiceClient?>)method.Invoke(command, new object?[] { new McpCommandArgs() })!;
        Assert.IsNull(await missing);
        var invalid = (Task<Microsoft.PowerPlatform.Dataverse.Client.ServiceClient?>)method.Invoke(command, new object?[] { new McpCommandArgs { Connection = "not-a-connection-string" } })!;
        try
        {
            await invalid;
            Assert.Fail("Invalid legacy connection should fail.");
        }
        catch (NullReferenceException)
        {
            // ServiceClient rejects the malformed legacy string in this environment.
        }
    }

    [TestMethod]
    public void McpCommand_LogConnectionInfo_CoversSupportedAuthFields()
    {
        var method = typeof(McpCommand).GetMethod("LogConnectionInfo", BindingFlags.NonPublic | BindingFlags.Static)!;
        foreach (var settings in new[]
        {
            new McpCommandArgs { AuthType = "ClientSecret", Url = "https://example.test", ClientId = "client" },
            new McpCommandArgs { AuthType = "OAuth", Url = "https://example.test", ClientId = "client", Username = "user" },
            new McpCommandArgs { AuthType = "AD", Url = "https://example.test", Username = "user", Domain = "CONTOSO" },
            new McpCommandArgs { AuthType = "FromPac", PacProfile = "default" }
        })
        {
            method.Invoke(null, new object?[] { settings });
        }
        method.Invoke(null, new object?[] { new McpCommandArgs() });
    }
}
