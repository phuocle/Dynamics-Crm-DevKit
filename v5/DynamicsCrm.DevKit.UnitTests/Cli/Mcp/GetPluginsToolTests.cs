using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetPluginsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginsTool);

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter)
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NullIfEmptyMethod = ToolType
        .GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // EscapeXml
    // ──────────────────────────────────────────────

    private static string EscapeXml(string value) =>
        (string)EscapeXmlMethod.Invoke(null, [value])!;

    [TestMethod]
    public void EscapeXml_Ampersand_Escaped()
    {
        Assert.AreEqual("foo &amp; bar", EscapeXml("foo & bar"));
    }

    [TestMethod]
    public void EscapeXml_Quotes_Escaped()
    {
        Assert.AreEqual("it&apos;s &quot;ok&quot;", EscapeXml("it's \"ok\""));
    }

    [TestMethod]
    public void EscapeXml_AngleBrackets_Escaped()
    {
        Assert.AreEqual("&lt;tag&gt;", EscapeXml("<tag>"));
    }

    // ──────────────────────────────────────────────
    // EscapeTab
    // ──────────────────────────────────────────────

    private static string EscapeTab(string value) =>
        (string)EscapeTabMethod.Invoke(null, [value])!;

    [TestMethod]
    public void EscapeTab_TabsReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\tb"));
    }

    [TestMethod]
    public void EscapeTab_NewlinesHandled()
    {
        // \n is replaced with space, \r is removed
        Assert.AreEqual("a b", EscapeTab("a\r\nb"));
    }

    // ──────────────────────────────────────────────
    // NullIfEmpty
    // ──────────────────────────────────────────────

    private static string NullIfEmpty(string value) =>
        (string)NullIfEmptyMethod.Invoke(null, [value])!;

    [TestMethod]
    public void NullIfEmpty_Null_ReturnsNull()
    {
        Assert.IsNull(NullIfEmptyMethod.Invoke(null, [null!]));
    }

    [TestMethod]
    public void NullIfEmpty_Empty_ReturnsNull()
    {
        Assert.IsNull(NullIfEmptyMethod.Invoke(null, [string.Empty]));
    }

    [TestMethod]
    public void NullIfEmpty_Whitespace_ReturnsNull()
    {
        Assert.IsNull(NullIfEmptyMethod.Invoke(null, ["   "]));
    }

    [TestMethod]
    public void NullIfEmpty_Value_ReturnsTrimmed()
    {
        Assert.AreEqual("hello", NullIfEmpty("  hello  "));
    }

    // ──────────────────────────────────────────────
    // Validation: type_name filter uses <filter> wrapper (Finding 1 fix)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetPlugins_TypeNameFilter_ValidationViaInputValidation()
    {
        // The tool validates stage/mode BEFORE building FetchXML.
        // We verify that passing an invalid stage still returns proper error
        // even when type_name is also provided — confirming input validation runs first.
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginsTool(null!);
        var result = tool.get_plugins(stage: "badstage", type_name: "SomeType", entity_name: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid stage"));
    }

    [TestMethod]
    public void GetPlugins_InvalidMode_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginsTool(null!);
        var result = tool.get_plugins(mode: "badmode", entity_name: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid mode"));
    }

    [TestMethod]
    public void GetPlugins_FiltersWithoutEntityOrAssembly_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetPluginsTool(null!);
        var result = tool.get_plugins(stage: "prevalidation");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("require entity_name or assembly_name"));
    }
}
