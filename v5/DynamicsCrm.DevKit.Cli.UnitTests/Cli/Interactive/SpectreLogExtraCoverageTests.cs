using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Extra paths of the static Spectre logger: the cancellation-aware wait
/// (plain and markup modes), the action-warning writer in both modes and
/// the single-column table rows.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class SpectreLogExtraCoverageTests
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
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        _console.Dispose();
    }

    [TestMethod]
    public async Task WaitingWithCancellation_PlainMode_CanceledToken_Returns()
    {
        await ScriptedLog.PlainAsync(() =>
        {
            using var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(80));
            SpectreLog.WaitingWithCancellation("waiting", cts.Token);
            return Task.CompletedTask;
        });
        var output = ScriptedLog.Captured!.ToString();
        StringAssert.Contains(output, "waiting...");
    }

    [TestMethod]
    public void WaitingWithCancellation_MarkupMode_PrintsDotsUntilCanceled()
    {
        // The wait loop prints one dot per WaitOne window until the token
        // cancels itself mid-wait.
        using var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(150));
        SpectreLog.WaitingWithCancellation("waiting", cts.Token);
        StringAssert.Contains(_console.Output, ".");
    }

    [TestMethod]
    public void WaitingWithCancellation_MarkupMode_AlreadyCanceled_ReturnsImmediately()
    {
        using var cts = new CancellationTokenSource();
        cts.Cancel();
        SpectreLog.WaitingWithCancellation("instant", cts.Token);
        Assert.IsFalse(_console.Output.Contains("instant..."), "markup mode prints the bare message once.");
    }

    [TestMethod]
    public void ActionWarning_BothModes()
    {
        SpectreLog.ActionWarning("plain warning");
        SpectreLog.IsPlain = false;
        SpectreLog.ActionWarning("markup warning");
        StringAssert.Contains(_console.Output, "WARNING");
    }

    [TestMethod]
    public void WriteTable_SingleColumnRows_BothModes()
    {
        SpectreLog.IsPlain = false;
        SpectreLog.WriteTable(new System.Collections.Generic.List<string[]> { new[] { "Header" }, new[] { "OnlyCell" } });
        StringAssert.Contains(_console.Output, "OnlyCell");

        var original = Console.Out;
        using var captured = new StringWriter();
        Console.SetOut(captured);
        SpectreLog.IsPlain = true;
        try
        {
            SpectreLog.WriteTable(new System.Collections.Generic.List<string[]> { new[] { "PlainRow" } });
        }
        finally
        {
            SpectreLog.IsPlain = false;
            Console.SetOut(original);
        }
        StringAssert.Contains(captured.ToString(), "PlainRow");
    }
}
