using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.Test;

/// <summary>
/// Tests for SpectreLog utility class
/// Note: These tests verify that SpectreLog methods don't throw exceptions.
/// Actual console output cannot be easily verified in unit tests.
/// </summary>
[TestClass]
public class SpectreLogTests
{
    #region WriteLine Tests

    [TestMethod]
    public void WriteLine_NoArgs_DoesNotThrow()
    {
        // Act & Assert - should not throw
        SpectreLog.WriteLine();
    }

    [TestMethod]
    public void WriteLine_WithText_DoesNotThrow()
    {
        // Act & Assert - should not throw
        SpectreLog.WriteLine("Test message");
    }

    #endregion

    #region WriteHighLight Tests

    [TestMethod]
    public void WriteHighLight_FiveArgs_DoesNotThrow()
    {
        // Act & Assert
        SpectreLog.WriteHighLight("First", "Second", "Third", "Fourth", "Fifth");
    }

    [TestMethod]
    public void WriteHighLight_EscapedCharacters_DoesNotThrow()
    {
        // Act & Assert - should handle markup escape
        SpectreLog.WriteHighLight("URL: ", "https://test.crm.dynamics.com", " with ", "300", " seconds");
    }

    #endregion

    #region Action Methods Tests

    [TestMethod]
    public void ActionDoNothing_DoesNotThrow()
    {
        // Act & Assert
        SpectreLog.ActionDoNothing("account", "Account.js");
    }

    [TestMethod]
    public void ActionCreated_DoesNotThrow()
    {
        // Act & Assert
        SpectreLog.ActionCreated("Account.js");
    }

    [TestMethod]
    public void ActionUpdated_DoesNotThrow()
    {
        // Act & Assert
        SpectreLog.ActionUpdated("Account.js");
    }

    [TestMethod]
    public void ActionError_DoesNotThrow()
    {
        // Act & Assert
        SpectreLog.ActionError("Test error message");
    }

    #endregion

    #region WriteTable Tests

    [TestMethod]
    public void WriteTable_EmptyRows_DoesNotThrow()
    {
        // Arrange
        var rows = new List<string[]>();

        // Act & Assert
        SpectreLog.WriteTable(rows);
    }

    [TestMethod]
    public void WriteTable_WithRows_DoesNotThrow()
    {
        // Arrange
        var rows = new List<string[]>
        {
            new[] { "[green]Label[/]", "[cyan]Value[/]" },
            new[] { "[green]Label2[/]", "[cyan]Value2[/]" }
        };

        // Act & Assert
        SpectreLog.WriteTable(rows);
    }

    #endregion
}
