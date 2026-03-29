using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for GetViewsTool private static methods:
/// MapQueryType, PrettyPrintXml, EscapeTab.
/// Also tests input validation via the public get_views method.
/// </summary>
[TestClass]
public class GetViewsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetViewsTool);

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.GetViewsTool _tool = new(null!);

    [TestMethod]
    public void GetViews_EmptyEntityName_ReturnsError()
    {
        var result = _tool.get_views("");
        Assert.IsTrue(result.Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetViews_WhitespaceEntityName_ReturnsError()
    {
        var result = _tool.get_views("   ");
        Assert.IsTrue(result.Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetViews_InvalidViewId_ReturnsError()
    {
        var result = _tool.get_views("account", view_id: "not-a-guid");
        Assert.IsTrue(result.Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // MapQueryType (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo MapQueryTypeMethod = ToolType
        .GetMethod("MapQueryType", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string MapQueryType(int queryType)
    {
        return (string)MapQueryTypeMethod.Invoke(null, new object[] { queryType })!;
    }

    [TestMethod]
    public void MapQueryType_0_ReturnsPublic()
    {
        Assert.AreEqual("Public", MapQueryType(0));
    }

    [TestMethod]
    public void MapQueryType_1_ReturnsLookup()
    {
        Assert.AreEqual("Lookup", MapQueryType(1));
    }

    [TestMethod]
    public void MapQueryType_2_ReturnsAdvancedSearch()
    {
        Assert.AreEqual("AdvancedSearch", MapQueryType(2));
    }

    [TestMethod]
    public void MapQueryType_4_ReturnsQuickFind()
    {
        Assert.AreEqual("QuickFind", MapQueryType(4));
    }

    [TestMethod]
    public void MapQueryType_64_ReturnsSubGrid()
    {
        Assert.AreEqual("SubGrid", MapQueryType(64));
    }

    [TestMethod]
    public void MapQueryType_131072_ReturnsCustom()
    {
        Assert.AreEqual("Custom", MapQueryType(131072));
    }

    [TestMethod]
    public void MapQueryType_Unknown_ReturnsOtherWithCode()
    {
        Assert.AreEqual("Other(999)", MapQueryType(999));
    }

    // ──────────────────────────────────────────────
    // PrettyPrintXml (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo PrettyPrintXmlMethod = ToolType
        .GetMethod("PrettyPrintXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string PrettyPrintXml(string xml)
    {
        return (string)PrettyPrintXmlMethod.Invoke(null, new object[] { xml })!;
    }

    [TestMethod]
    public void PrettyPrintXml_ValidXml_IndentsCorrectly()
    {
        var xml = "<fetch><entity name='account'><attribute name='name'/></entity></fetch>";
        var result = PrettyPrintXml(xml);

        Assert.IsTrue(result.Contains("  <entity"));  // Indented with 2 spaces
        Assert.IsTrue(result.Contains("    <attribute"));  // Double indented
    }

    [TestMethod]
    public void PrettyPrintXml_InvalidXml_ReturnsOriginal()
    {
        var xml = "not valid xml <>";
        var result = PrettyPrintXml(xml);

        Assert.AreEqual(xml, result);
    }

    [TestMethod]
    public void PrettyPrintXml_OmitsXmlDeclaration()
    {
        var xml = "<root><child/></root>";
        var result = PrettyPrintXml(xml);

        Assert.IsFalse(result.Contains("<?xml"));
    }

    // ──────────────────────────────────────────────
    // EscapeTab (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapeTab(string value)
    {
        return (string)EscapeTabMethod.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void EscapeTab_TabReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\tb"));
    }

    [TestMethod]
    public void EscapeTab_NewlineReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\nb"));
    }

    [TestMethod]
    public void EscapeTab_CarriageReturnRemoved()
    {
        Assert.AreEqual("ab", EscapeTab("a\rb"));
    }
}
