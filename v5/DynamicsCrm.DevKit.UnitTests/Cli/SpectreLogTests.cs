using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class SpectreLogTests
{
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
}
