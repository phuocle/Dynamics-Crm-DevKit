using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for DataverseNamer.Resolve() — derives Dataverse SchemaName and LogicalName
/// from a human-readable input string and publisher prefix.
/// </summary>
[TestClass]
public class DataverseNamerTests
{
    // ── Happy path ────────────────────────────────────────────────────────────

    [TestMethod]
    public void Resolve_MultiWord_ReturnsPascalCaseSchema()
    {
        var (schema, logical) = DataverseNamer.Resolve("Hello Xin Chao", "new");
        Assert.AreEqual("new_HelloXinChao", schema);
        Assert.AreEqual("new_helloxinchao", logical);
    }

    [TestMethod]
    public void Resolve_TwoWords_ReturnsPascalCaseSchema()
    {
        var (schema, logical) = DataverseNamer.Resolve("sale order", "abc");
        Assert.AreEqual("abc_SaleOrder", schema);
        Assert.AreEqual("abc_saleorder", logical);
    }

    [TestMethod]
    public void Resolve_SingleWord_ReturnsTitleCasedSchema()
    {
        var (schema, logical) = DataverseNamer.Resolve("project", "new");
        Assert.AreEqual("new_Project", schema);
        Assert.AreEqual("new_project", logical);
    }

    [TestMethod]
    public void Resolve_AllUppercase_NormalizesToPascalCase()
    {
        var (schema, logical) = DataverseNamer.Resolve("PROJECT", "cr123");
        Assert.AreEqual("cr123_Project", schema);
        Assert.AreEqual("cr123_project", logical);
    }

    // ── Special characters ────────────────────────────────────────────────────

    [TestMethod]
    public void Resolve_SpecialCharsAndNumbers_RemovesSpecialCharsKeepsNumbers()
    {
        var (schema, logical) = DataverseNamer.Resolve("My-Table #1", "v4");
        Assert.AreEqual("v4_MyTable1", schema);
        Assert.AreEqual("v4_mytable1", logical);
    }

    [TestMethod]
    public void Resolve_DashSeparated_TreatedAsSingleWord()
    {
        // Dashes are removed → "MyTable" treated as one word after cleaning
        var (schema, logical) = DataverseNamer.Resolve("My-Table", "v4");
        Assert.AreEqual("v4_Mytable", schema);
        Assert.AreEqual("v4_mytable", logical);
    }

    [TestMethod]
    public void Resolve_TrailingLeadingSpaces_Trimmed()
    {
        var (schema, logical) = DataverseNamer.Resolve("  sale order  ", "abc");
        Assert.AreEqual("abc_SaleOrder", schema);
        Assert.AreEqual("abc_saleorder", logical);
    }

    // ── Numbers in name ───────────────────────────────────────────────────────

    [TestMethod]
    public void Resolve_NumbersInWords_PreservedInOutput()
    {
        var (schema, logical) = DataverseNamer.Resolve("Order Line 2", "new");
        Assert.AreEqual("new_OrderLine2", schema);
        Assert.AreEqual("new_orderline2", logical);
    }

    // ── Prefix variants ───────────────────────────────────────────────────────

    [TestMethod]
    public void Resolve_NumericPrefix_WorksCorrectly()
    {
        var (schema, logical) = DataverseNamer.Resolve("Invoice", "cr123");
        Assert.AreEqual("cr123_Invoice", schema);
        Assert.AreEqual("cr123_invoice", logical);
    }

    [TestMethod]
    public void Resolve_PrefixWithSpaces_Trimmed()
    {
        var (schema, logical) = DataverseNamer.Resolve("Project", "  new  ");
        Assert.AreEqual("new_Project", schema);
        Assert.AreEqual("new_project", logical);
    }

    // ── LogicalName is always lowercase ──────────────────────────────────────

    [TestMethod]
    public void Resolve_LogicalNameIsAlwaysLowercase()
    {
        var (schema, logical) = DataverseNamer.Resolve("MCP DevKit V5", "v4");
        Assert.AreEqual(logical, logical.ToLowerInvariant());
        // Schema should be PascalCased parts
        Assert.AreEqual("v4_McpDevkitV5", schema);
        Assert.AreEqual("v4_mcpdevkitv5", logical);
    }

    // ── Edge / Error cases ────────────────────────────────────────────────────

    [TestMethod]
    public void Resolve_EmptyInput_ThrowsArgumentException()
    {
        try { DataverseNamer.Resolve("", "new"); Assert.Fail("Expected ArgumentException"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_WhitespaceInput_ThrowsArgumentException()
    {
        try { DataverseNamer.Resolve("   ", "new"); Assert.Fail("Expected ArgumentException"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_EmptyPrefix_ThrowsArgumentException()
    {
        try { DataverseNamer.Resolve("Project", ""); Assert.Fail("Expected ArgumentException"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_NullInput_ThrowsArgumentException()
    {
        try { DataverseNamer.Resolve(null!, "new"); Assert.Fail("Expected ArgumentException"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_OnlySpecialChars_ThrowsArgumentException()
    {
        try { DataverseNamer.Resolve("!@#$%", "new"); Assert.Fail("Expected ArgumentException"); }
        catch (ArgumentException) { }
    }
}
