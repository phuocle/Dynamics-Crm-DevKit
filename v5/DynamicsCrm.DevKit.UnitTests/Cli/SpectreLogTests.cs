using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class SpectreLogTests
{
    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
    }

    #region WriteLine Tests

    [TestMethod]
    public void WriteLine_NoArgs_DoesNotThrow()
    {
        SpectreLog.WriteLine();
    }

    #endregion

    #region WriteHighLight Tests

    [TestMethod]
    public void WriteHighLight_FiveArgs_DoesNotThrow()
    {
        SpectreLog.WriteHighLight("First", "Second", "Third", "Fourth", "Fifth");
    }

    [TestMethod]
    public void WriteHighLight_ThreeArgs_DoesNotThrow()
    {
        SpectreLog.WriteHighLight("URL: ", "https://test.crm.dynamics.com", " done");
    }

    #endregion

    #region ActionWithLevel Tests

    [TestMethod]
    public void ActionWithLevel0_OneArg_DoesNotThrow()
    {
        SpectreLog.ActionWithLevel0("test text");
    }

    [TestMethod]
    public void ActionWithLevel0_TwoArgs_DoesNotThrow()
    {
        SpectreLog.ActionWithLevel0("CREATED", "Account.js");
    }

    [TestMethod]
    public void ActionWithLevel1_TwoArgs_DoesNotThrow()
    {
        SpectreLog.ActionWithLevel1("UPDATED", "Account.js");
    }

    [TestMethod]
    public void ActionError_DoesNotThrow()
    {
        SpectreLog.ActionError("Test error message");
    }

    #endregion

    #region WriteTable Tests

    [TestMethod]
    public void WriteTable_EmptyRows_DoesNotThrow()
    {
        var rows = new List<string[]>();
        SpectreLog.WriteTable(rows);
    }

    [TestMethod]
    public void WriteTable_WithRows_DoesNotThrow()
    {
        var rows = new List<string[]>
        {
            new[] { "[green]Label[/]", "[cyan]Value[/]" },
            new[] { "[green]Label2[/]", "[cyan]Value2[/]" }
        };
        SpectreLog.WriteTable(rows);
    }

    #endregion

    [TestMethod]
    public async Task PlainOutput_Methods_WriteDeterministicText()
    {
        var output = await CaptureConsoleAsync(async () =>
        {
            SpectreLog.IsPlain = true;
            SpectreLog.WriteHeader();
            SpectreLog.WriteHelp();
            SpectreLog.WriteException(new InvalidOperationException("boom"));
            await SpectreLog.WithStatusAsync("working", _ => Task.CompletedTask);
            SpectreLog.WaitingWithCancellation("wait", new CancellationToken(canceled: true));
            SpectreLog.WriteLine();
            SpectreLog.WriteProgress(1, 3);
            SpectreLog.WriteProcessOutput("process output");
            SpectreLog.ActionError("bad");
            SpectreLog.WriteHighLight("a", "b", "c");
            SpectreLog.WriteHighLight("a", "b", "c", "d", "e");
            SpectreLog.WriteTable([
                ["[green]--json[/]", "[cyan]file.json[/]"],
                ["[green]Heading[/]"]
            ]);
        });

        StringAssert.Contains(output, "DynamicsCrm.DevKit.Cli");
        StringAssert.Contains(output, "working");
        StringAssert.Contains(output, "process output");
        StringAssert.Contains(output, "[ERROR] bad");
        StringAssert.Contains(output, "--json");
    }

    [TestMethod]
    public void ActionWithLevelOverloads_PlainAndRich_DoNotThrow()
    {
        foreach (var isPlain in new[] { true, false })
        {
            SpectreLog.IsPlain = isPlain;
            InvokeActionOverloads();
        }
    }

    private static void InvokeActionOverloads()
    {
        var methods = typeof(SpectreLog).GetMethods(BindingFlags.Public | BindingFlags.Static)
            .Where(m => m.Name.StartsWith("ActionWithLevel", StringComparison.Ordinal))
            .OrderBy(m => m.Name)
            .ThenBy(m => m.GetParameters().Length)
            .ToArray();

        Assert.IsTrue(methods.Length > 20);

        foreach (var method in methods)
        {
            var args = method.GetParameters()
                .Select((parameter, index) => BuildArgument(parameter.ParameterType, index))
                .ToArray();
            method.Invoke(null, args);
        }
    }

    private static object BuildArgument(Type type, int index)
    {
        if (type == typeof(string))
            return index == 0 ? "CREATED" : $"text-{index}";
        if (type == typeof(List<string>))
            return new List<string> { "one", "two" };
        throw new NotSupportedException(type.FullName);
    }

    private static async Task<string> CaptureConsoleAsync(Func<Task> action)
    {
        var oldOut = Console.Out;
        using var output = new StringWriter();
        Console.SetOut(output);
        try
        {
            await action();
            return output.ToString();
        }
        finally
        {
            Console.SetOut(oldOut);
        }
    }
}
