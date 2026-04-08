using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetBusinessRulesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool);

    private static readonly MethodInfo ParseXamlMethod = ToolType
        .GetMethod("ParseXaml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo BuildListFetchXmlMethod = ToolType
        .GetMethod("BuildListFetchXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // ParseXaml — fallback messages reference correct tool
    // ──────────────────────────────────────────────

    private static string ParseXaml(string xaml)
    {
        var sb = new StringBuilder();
        ParseXamlMethod.Invoke(null, [sb, xaml]);
        return sb.ToString();
    }

    [TestMethod]
    public void ParseXaml_EmptyXaml_ReferencesManageRecord()
    {
        var result = ParseXaml("<root></root>");
        Assert.IsTrue(result.Contains("manage_record"), $"Fallback message should reference 'manage_record', got: {result}");
        Assert.IsFalse(result.Contains("get_record"), $"Fallback message should NOT reference 'get_record', got: {result}");
    }

    [TestMethod]
    public void ParseXaml_InvalidXaml_ReferencesManageRecord()
    {
        // Pass something that won't match any regex patterns
        var result = ParseXaml("not valid xaml at all");
        Assert.IsTrue(result.Contains("manage_record"), $"Fallback message should reference 'manage_record', got: {result}");
        Assert.IsFalse(result.Contains("get_record"), $"Fallback message should NOT reference 'get_record', got: {result}");
    }

    // ──────────────────────────────────────────────
    // SanitizeDescription
    // ──────────────────────────────────────────────

    private static string SanitizeDescription(string description) =>
        (string)SanitizeDescriptionMethod.Invoke(null, [description])!;

    [TestMethod]
    public void SanitizeDescription_Null_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, SanitizeDescription(null!));
    }

    [TestMethod]
    public void SanitizeDescription_Placeholder_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, SanitizeDescription("Click to add description"));
    }

    [TestMethod]
    public void SanitizeDescription_PlaceholderWithDot_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, SanitizeDescription("Click to add description."));
    }

    [TestMethod]
    public void SanitizeDescription_RealDescription_ReturnsTrimmed()
    {
        Assert.AreEqual("My rule description", SanitizeDescription("  My rule description  "));
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
    public void EscapeTab_NewlinesRemoved()
    {
        Assert.AreEqual("a b", EscapeTab("a\nb"));
    }

    // ──────────────────────────────────────────────
    // BuildListFetchXml
    // ──────────────────────────────────────────────

    private static string BuildListFetchXml(int objectTypeCode, string status, int maxRecords) =>
        (string)BuildListFetchXmlMethod.Invoke(null, [objectTypeCode, status, maxRecords])!;

    [TestMethod]
    public void BuildListFetchXml_ActiveStatus_IncludesStatecodeFilter()
    {
        var xml = BuildListFetchXml(1, "active", 50);
        Assert.IsTrue(xml.Contains("statecode"), "Active filter should include statecode condition");
        Assert.IsTrue(xml.Contains("value='1'"), "Active maps to statecode=1");
    }

    [TestMethod]
    public void BuildListFetchXml_DraftStatus_IncludesStatecodeFilter()
    {
        var xml = BuildListFetchXml(1, "draft", 50);
        Assert.IsTrue(xml.Contains("statecode"), "Draft filter should include statecode condition");
        Assert.IsTrue(xml.Contains("value='0'"), "Draft maps to statecode=0");
    }

    [TestMethod]
    public void BuildListFetchXml_EmptyStatus_NoStatecodeFilter()
    {
        var xml = BuildListFetchXml(1, "", 50);
        Assert.IsFalse(xml.Contains("attribute='statecode' operator="), "Empty status should not include statecode filter condition");
    }

    // ──────────────────────────────────────────────
    // Input validation (via public method)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetBusinessRules_EmptyEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool(null!);
        var result = tool.get_business_rules("");
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error for empty entity_name, got: {result}");
    }

    [TestMethod]
    public void GetBusinessRules_InvalidStatus_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool(null!);
        var result = tool.get_business_rules("account", status: "xyz");
        Assert.IsTrue(result.Contains("Invalid status"), $"Expected invalid status error, got: {result}");
    }

    [TestMethod]
    public void GetBusinessRules_InvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool(null!);
        var result = tool.get_business_rules("account", rule_id: "not-a-guid");
        Assert.IsTrue(result.Contains("not a valid GUID"), $"Expected GUID error, got: {result}");
    }
}
