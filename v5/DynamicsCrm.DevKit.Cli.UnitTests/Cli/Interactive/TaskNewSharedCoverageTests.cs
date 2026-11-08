using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Catalog list, template prompt and result table of the 'devkit new'
/// family. The prompt runs on the static AnsiConsole — a ScriptedConsole
/// swap replays the answer keys — and the plain list writes through
/// Console.WriteLine, captured via Console.SetOut.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewSharedCoverageTests
{
    private ScriptedConsole _console = null!;

    [TestInitialize]
    public void Setup()
    {
        _console = ScriptedConsole.Install();
    }

    [TestCleanup]
    public void Cleanup()
    {
        ScriptedLog.Cleanup();
        ScriptedConsole.Restore();
        _console.Dispose();
    }

    [TestMethod]
    public void PromptTemplate_Project_Enter_SelectsFirst()
    {
        var first = TemplateCatalog.OfKind(TemplateKind.Project).ToList()[0].Id;
        _console.Input.PushKey(ConsoleKey.Enter);
        Assert.AreEqual(first, TaskNewShared.PromptTemplate(TemplateKind.Project));
    }

    [TestMethod]
    public void PromptTemplate_Item_DownThenEnter_SelectsSecond()
    {
        var items = TemplateCatalog.OfKind(TemplateKind.Item).ToList();
        Assert.IsTrue(items.Count >= 2, "catalog must list at least two item templates for the navigation test.");
        _console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter);
        Assert.AreEqual(items[1].Id, TaskNewShared.PromptTemplate(TemplateKind.Item));
    }

    [TestMethod]
    public async Task ListAsync_Project_Plain_WritesPipeRows()
    {
        await ScriptedLog.PlainAsync(() => TaskNewShared.ListAsync(TemplateKind.Project));
        var output = ScriptedLog.Captured!.ToString();
        Assert.IsTrue(output.Contains("devkit new-project"), output);
    }

    [TestMethod]
    public async Task ListAsync_Item_Plain_WritesPipeRows()
    {
        await ScriptedLog.PlainAsync(() => TaskNewShared.ListAsync(TemplateKind.Item));
        var output = ScriptedLog.Captured!.ToString();
        Assert.IsTrue(output.Contains("devkit new-item"), output);
    }

    [TestMethod]
    public async Task ListAsync_Project_Spectre_RendersTable()
    {
        await TaskNewShared.ListAsync(TemplateKind.Project);
        var output = _console.Output;
        Assert.IsTrue(output.Contains("Type (--type)"), output);
    }

    [TestMethod]
    public async Task ListAsync_Item_Spectre_RendersTable()
    {
        await TaskNewShared.ListAsync(TemplateKind.Item);
        Assert.IsTrue(_console.Output.Contains("Ready"), _console.Output);
    }

    [TestMethod]
    public void WriteResult_Success_WithFilesAndWarnings_RowsCounted()
    {
        var result = new ScaffoldResult { TemplateId = "LateBound" };
        result.Files.Add(new ScaffoldFileResult { Action = "Created", FilePath = "A.cs" });
        result.Files.Add(new ScaffoldFileResult { Action = "Updated", FilePath = "B.cs" });
        result.Files.Add(new ScaffoldFileResult { Action = "Skipped", FilePath = "C.cs" });
        result.Files.Add(new ScaffoldFileResult { Action = "Unchanged", FilePath = "D.cs" });
        result.AddWarning("watch out");
        TaskNewShared.WriteResult(result);
        var output = _console.Output;
        Assert.IsTrue(output.Contains("A.cs"), output);
        Assert.IsTrue(output.Contains("watch out"), output);
        Assert.IsTrue(output.Contains("1 created"), output);
    }

    [TestMethod]
    public void WriteResult_Success_NoFiles_SkipsTable()
    {
        var result = new ScaffoldResult { TemplateId = "Workflow" };
        TaskNewShared.WriteResult(result);
        Assert.IsTrue(_console.Output.Contains("0 created"), _console.Output);
    }

    [TestMethod]
    public void WriteResult_Failure_NoSummaryRow()
    {
        var result = new ScaffoldResult { TemplateId = "Report" };
        result.AddError("boom");
        TaskNewShared.WriteResult(result);
        Assert.IsFalse(_console.Output.Contains("created,"), _console.Output);
    }

    /// <summary>
    /// The gate mirrors the redirected-input and plain-mode conditions it
    /// reads — the test host cannot control the real stdin state, so the
    /// assertion pins the product behavior against the same inputs.
    /// </summary>
    [TestMethod]
    public void CanPrompt_MirrorsStdinAndPlainMode()
    {
        SpectreLog.IsPlain = false;
        try
        {
            Assert.AreEqual(!Console.IsInputRedirected, TaskNewShared.CanPrompt());
            SpectreLog.IsPlain = true;
            Assert.IsFalse(TaskNewShared.CanPrompt(), "plain mode never prompts.");
        }
        finally
        {
            SpectreLog.IsPlain = false;
        }
    }
}

/// <summary>
/// Plain-mode capture helper: SpectreLog.IsPlain=true makes the task write
/// through Console.WriteLine; the static flips and the redirected stdout
/// are restored on every exit path.
/// </summary>
internal static class ScriptedLog
{
    public static StringWriter? Captured { get; private set; }

    public static async Task PlainAsync(Func<Task> action)
    {
        var previous = SpectreLog.IsPlain;
        var original = Console.Out;
        Captured = new StringWriter();
        Console.SetOut(Captured);
        SpectreLog.IsPlain = true;
        try
        {
            await action();
        }
        finally
        {
            SpectreLog.IsPlain = previous;
            Console.SetOut(original);
        }
    }

    public static void Cleanup()
    {
        Captured?.Dispose();
        Captured = null;
    }
}
