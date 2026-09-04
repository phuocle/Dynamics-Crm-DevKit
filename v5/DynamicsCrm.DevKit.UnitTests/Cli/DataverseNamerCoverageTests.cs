using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class DataverseNamerCoverageTests
{
    [TestMethod]
    public void Resolve_Simple()
    {
        var (schema, logical) = DataverseNamer.Resolve("Account", "v4");
        Assert.AreEqual("v4_Account", schema);
        Assert.AreEqual("v4_account", logical);
    }

    [TestMethod]
    public void Resolve_MultipleWords()
    {
        var (schema, logical) = DataverseNamer.Resolve("Hello Xin Chao", "v4");
        Assert.AreEqual("v4_HelloXinChao", schema);
        Assert.AreEqual("v4_helloxinchao", logical);
    }

    [TestMethod]
    public void Resolve_WithSpecialChars()
    {
        var (schema, logical) = DataverseNamer.Resolve("My-Table #1", "cr123");
        Assert.AreEqual("cr123_MyTable1", schema);
        Assert.AreEqual("cr123_mytable1", logical);
    }

    [TestMethod]
    public void Resolve_SaleOrder()
    {
        var (schema, logical) = DataverseNamer.Resolve("sale order", "v4");
        Assert.AreEqual("v4_saleorder", logical);
    }

    [TestMethod]
    public void Resolve_PreservesCase()
    {
        var (schema, logical) = DataverseNamer.Resolve("PONumber", "v4");
        Assert.AreEqual("v4_PONumber", schema);
    }

    [TestMethod]
    public void Resolve_NullInput_Throws()
    {
        try { DataverseNamer.Resolve(null, "v4"); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_EmptyInput_Throws()
    {
        try { DataverseNamer.Resolve("", "v4"); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_WhitespaceInput_Throws()
    {
        try { DataverseNamer.Resolve("   ", "v4"); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_NullPrefix_Throws()
    {
        try { DataverseNamer.Resolve("X", null); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_EmptyPrefix_Throws()
    {
        try { DataverseNamer.Resolve("X", ""); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_NewPrefix_Throws()
    {
        try { DataverseNamer.Resolve("X", "new"); Assert.Fail("expected"); }
        catch (InvalidOperationException) { }
    }

    [TestMethod]
    public void Resolve_AllSpecialChars_Throws()
    {
        try { DataverseNamer.Resolve("###@@@", "v4"); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Resolve_TrimsWhitespace()
    {
        var (schema, _) = DataverseNamer.Resolve("  Account  ", "v4");
        Assert.AreEqual("v4_Account", schema);
    }

    [TestMethod]
    public void Resolve_MultipleSpaces()
    {
        var (schema, _) = DataverseNamer.Resolve("Hello   World", "v4");
        Assert.AreEqual("v4_HelloWorld", schema);
    }
}
