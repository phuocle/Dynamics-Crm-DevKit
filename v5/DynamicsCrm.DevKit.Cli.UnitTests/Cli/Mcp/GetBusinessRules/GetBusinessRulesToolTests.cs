using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetBusinessRules;

[TestClass]
public class GetBusinessRulesToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessRulesTool);

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    // EscapeTab was extracted to the shared CompactFormatter helper during the
    // phase 1-3 refactor; look it up there so the behaviour stays covered.
    private static readonly MethodInfo EscapeTabMethod =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter)
            .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // XAML decompile — graceful degradation statuses
    // ──────────────────────────────────────────────

    private static string DecompileStatus(string xaml)
    {
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(xaml, entry, null);
        return entry.XamlParseStatus;
    }

    [TestMethod]
    public void Decompile_EmptyXaml_ReturnsNoXamlStatus()
    {
        Assert.AreEqual("no xaml", DecompileStatus(" "));
    }

    [TestMethod]
    public void Decompile_InvalidXaml_ReturnsParseErrorStatus()
    {
        Assert.IsTrue(DecompileStatus("not valid xaml at all").StartsWith("parse error"),
            "Invalid XAML should surface a 'parse error' status.");
    }

    [TestMethod]
    public void Decompile_XamlWithoutRuleSteps_ReturnsCompleteWithNoSteps()
    {
        const string xaml = """
            <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                      xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow">
              <mxswa:Workflow />
            </Activity>
            """;
        var entry = new BusinessRuleDetailEntry();
        BusinessRuleXamlDecompiler.Decompile(xaml, entry, null);
        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.IsNull(BusinessRuleTextRenderer.Render(entry.Steps));
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
