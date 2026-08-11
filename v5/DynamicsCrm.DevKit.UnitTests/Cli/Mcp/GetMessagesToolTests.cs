using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetMessagesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetMessagesTool);
    private static readonly Assembly CliAssembly = ToolType.Assembly;

    private static readonly MethodInfo ExtractAttributeMethod = ToolType
        .GetMethod("ExtractAttribute", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SimplifyTypeMethod = ToolType
        .GetMethod("SimplifyType", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    // EscapeTab was extracted to shared helpers during the refactor. GetMessagesTool
    // no longer has its own copy; use the null-guarded version on GetAuditHistoryTool
    // so the EscapeTab_Null_ReturnsEmptyString expectation (null => "") stays valid.
    private static readonly MethodInfo EscapeTabMethod =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetAuditHistoryTool)
            .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo AvailabilityMapField = ToolType
        .GetField("AvailabilityMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo ScopeMapField = ToolType
        .GetField("ScopeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ── Helpers ──────────────────────────────────────────────────────────────

    private static string? ExtractAttribute(string xml, string attrName) =>
        (string?)ExtractAttributeMethod.Invoke(null, [xml, attrName]);

    private static string SimplifyType(string? type) =>
        (string)SimplifyTypeMethod.Invoke(null, [type])!;

    private static string EscapeXml(string value) =>
        (string)EscapeXmlMethod.Invoke(null, [value])!;

    private static string? EscapeTab(string? value) =>
        (string?)EscapeTabMethod.Invoke(null, [value]);

    // ── Finding 1: FormatSdkMessageDetail uses isCustomOperation flag ────────

    [TestMethod]
    public void FormatSdkMessageDetail_IsCustomOperation_SetsIsCustomActionTrue()
    {
        var detailType = CliAssembly
            .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SdkMessageDetail")!;
        var isCustomActionProp = detailType.GetProperty("IsCustomAction")!;

        var detail = Activator.CreateInstance(detailType)!;
        isCustomActionProp.SetValue(detail, true);

        Assert.IsTrue((bool)isCustomActionProp.GetValue(detail)!,
            "SdkMessageDetail.IsCustomAction should be settable to true for Custom Actions");
    }

    [TestMethod]
    public void FormatSdkMessageDetail_NotCustomOperation_SetsIsCustomActionFalse()
    {
        var detailType = CliAssembly
            .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SdkMessageDetail")!;
        var isCustomActionProp = detailType.GetProperty("IsCustomAction")!;

        var detail = Activator.CreateInstance(detailType)!;
        isCustomActionProp.SetValue(detail, false);

        Assert.IsFalse((bool)isCustomActionProp.GetValue(detail)!,
            "SdkMessageDetail.IsCustomAction should be false for standard SDK messages");
    }

    // ── Finding 3: entity_name description includes "Ignored in detail mode" ─

    [TestMethod]
    public void EntityNameParameter_Description_ContainsIgnoredInDetailMode()
    {
        var method = ToolType.GetMethod("get_messages")!;
        var entityNameParam = method.GetParameters()[0];
        var descAttr = entityNameParam.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>();

        Assert.IsNotNull(descAttr, "entity_name should have a Description attribute");
        Assert.IsTrue(descAttr!.Description.Contains("Ignored in detail mode"),
            $"entity_name description should mention 'Ignored in detail mode' but was: {descAttr.Description}");
    }

    // ── ExtractAttribute tests ──────────────────────────────────────────────

    [TestMethod]
    public void ExtractAttribute_ValidName_ReturnsValue()
    {
        var xml = "<x:Property Name=\"MyParam\" Type=\"InArgument(String)\" />";
        Assert.AreEqual("MyParam", ExtractAttribute(xml, "Name"));
    }

    [TestMethod]
    public void ExtractAttribute_ValidType_ReturnsValue()
    {
        var xml = "<x:Property Name=\"MyParam\" Type=\"InArgument(String)\" />";
        Assert.AreEqual("InArgument(String)", ExtractAttribute(xml, "Type"));
    }

    [TestMethod]
    public void ExtractAttribute_MissingAttribute_ReturnsNull()
    {
        var xml = "<x:Property Name=\"MyParam\" />";
        Assert.IsNull(ExtractAttribute(xml, "Type"));
    }

    [TestMethod]
    public void ExtractAttribute_CaseInsensitive_ReturnsValue()
    {
        var xml = "<x:Property name=\"MyParam\" />";
        Assert.AreEqual("MyParam", ExtractAttribute(xml, "Name"));
    }

    // ── SimplifyType tests ──────────────────────────────────────────────────

    [TestMethod]
    public void SimplifyType_WithNamespace_ReturnsSimpleName()
    {
        Assert.AreEqual("String", SimplifyType("System.String"));
    }

    [TestMethod]
    public void SimplifyType_WithoutNamespace_ReturnsSame()
    {
        Assert.AreEqual("String", SimplifyType("String"));
    }

    [TestMethod]
    public void SimplifyType_Null_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown", SimplifyType(null));
    }

    // ── EscapeXml tests ─────────────────────────────────────────────────────

    [TestMethod]
    public void EscapeXml_SpecialChars_EscapesAll()
    {
        Assert.AreEqual("&amp;&lt;&gt;&apos;&quot;", EscapeXml("&<>'\""));
    }

    [TestMethod]
    public void EscapeXml_NoSpecialChars_ReturnsSame()
    {
        Assert.AreEqual("hello", EscapeXml("hello"));
    }

    // ── EscapeTab tests ─────────────────────────────────────────────────────

    [TestMethod]
    public void EscapeTab_TabsAndNewlines_ReplacedWithSpaces()
    {
        Assert.AreEqual("a b c", EscapeTab("a\tb\nc"));
    }

    [TestMethod]
    public void EscapeTab_Null_ReturnsEmptyString()
    {
        Assert.AreEqual("", EscapeTab(null));
    }

    // ── Map coverage tests ──────────────────────────────────────────────────

    [TestMethod]
    public void AvailabilityMap_ContainsExpectedKeys()
    {
        var map = (Dictionary<int, string>)AvailabilityMapField.GetValue(null)!;
        Assert.AreEqual("Both", map[0]);
        Assert.AreEqual("Server", map[1]);
        Assert.AreEqual("Client", map[2]);
        Assert.AreEqual(3, map.Count);
    }

    [TestMethod]
    public void ScopeMap_ContainsExpectedKeys()
    {
        var map = (Dictionary<int, string>)ScopeMapField.GetValue(null)!;
        Assert.AreEqual("User", map[1]);
        Assert.AreEqual("BU", map[2]);
        Assert.AreEqual("Parent:ChildBU", map[3]);
        Assert.AreEqual("Org", map[4]);
        Assert.AreEqual(4, map.Count);
    }
}
