using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Text;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetBusinessRules;

[TestClass]
public class GetBusinessRulesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool);

    private static readonly MethodInfo ParseXamlMethod = ToolType
        .GetMethod("ParseXaml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    // EscapeTab was extracted to the shared CompactFormatter helper during the
    // phase 1-3 refactor; look it up there so the behaviour stays covered.
    private static readonly MethodInfo EscapeTabMethod =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter)
            .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // ParseXaml — fallback messages reference correct tool
    // ──────────────────────────────────────────────

    private static string ParseXaml(string xaml)
    {
        var result = ParseXamlMethod.Invoke(null, [xaml])!;
        var resultType = result.GetType();
        var conditions = resultType.GetProperty("Conditions")?.GetValue(result) as System.Collections.IList;
        var actions = resultType.GetProperty("Actions")?.GetValue(result) as System.Collections.IList;
        bool isEmpty = (conditions == null || conditions.Count == 0) && (actions == null || actions.Count == 0);
        // Fallback message matches production FormatRuleDetail text
        return isEmpty ? "[XAML] (no conditions or actions extracted - use manage_record(action='read') with columns 'xaml' to inspect raw)" : (string)(resultType.GetProperty("ParseStatus")?.GetValue(result) ?? "");
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

    private static string? SanitizeDescription(string description) =>
        (string?)SanitizeDescriptionMethod.Invoke(null, [description]);

    [TestMethod]
    public void SanitizeDescription_Null_ReturnsEmpty()
    {
        Assert.IsNull(SanitizeDescription(null!));
    }

    [TestMethod]
    public void SanitizeDescription_Placeholder_ReturnsEmpty()
    {
        Assert.IsNull(SanitizeDescription("Click to add description"));
    }

    [TestMethod]
    public void SanitizeDescription_PlaceholderWithDot_ReturnsEmpty()
    {
        Assert.IsNull(SanitizeDescription("Click to add description."));
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
    // Input validation (via public method)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetBusinessRules_EmptyEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool(null!);
        var result = tool.get_business_rules("");
        Assert.IsTrue(result.IsError, $"Expected error for empty entity_name, got: {result.GetText()}");
        Assert.IsTrue(result.Contains("entity_name is required"), $"Expected 'entity_name is required' error, got: {result.GetText()}");
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
