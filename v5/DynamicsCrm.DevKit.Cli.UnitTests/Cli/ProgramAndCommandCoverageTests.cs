using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
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
}
