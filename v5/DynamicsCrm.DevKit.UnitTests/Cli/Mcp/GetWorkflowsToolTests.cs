using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetWorkflowsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetWorkflowsTool);

    private static readonly MethodInfo BuildFetchXmlMethod = ToolType
        .GetMethod("BuildFetchXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapScopeMethod = ToolType
        .GetMethod("MapScope", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapStageMethod = ToolType
        .GetMethod("MapStage", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // BuildFetchXml — Entity column presence
    // ──────────────────────────────────────────────

    private static string BuildFetchXml(int? objectTypeCode, string mode, bool activeOnly, string triggerField, string nameFilter, int maxRecords)
    {
        return (string)BuildFetchXmlMethod.Invoke(null, [objectTypeCode, mode, activeOnly, triggerField, nameFilter, maxRecords])!;
    }

    [TestMethod]
    public void BuildFetchXml_ActiveOnly_IncludesStateCodeFilter()
    {
        var xml = BuildFetchXml(null, "", true, "", "", 50);
        Assert.IsTrue(xml.Contains("attribute='statecode' operator='eq' value='1'"), "Active-only filter should include statecode=1");
    }

    [TestMethod]
    public void BuildFetchXml_ActiveOnlyFalse_ExcludesStateCodeFilter()
    {
        var xml = BuildFetchXml(null, "", false, "", "", 50);
        Assert.IsFalse(xml.Contains("attribute='statecode'"), "active_only=false should not filter by statecode");
    }

    [TestMethod]
    public void BuildFetchXml_BackgroundMode_IncludesModeZero()
    {
        var xml = BuildFetchXml(null, "background", true, "", "", 50);
        Assert.IsTrue(xml.Contains("attribute='mode' operator='eq' value='0'"), "Background mode should filter by mode=0");
    }

    [TestMethod]
    public void BuildFetchXml_RealtimeMode_IncludesModeOne()
    {
        var xml = BuildFetchXml(null, "realtime", true, "", "", 50);
        Assert.IsTrue(xml.Contains("attribute='mode' operator='eq' value='1'"), "Realtime mode should filter by mode=1");
    }

    [TestMethod]
    public void BuildFetchXml_TriggerField_LowercasedAndLikeWrapped()
    {
        var xml = BuildFetchXml(null, "", true, "StateCode", "", 50);
        Assert.IsTrue(xml.Contains("value='%statecode%'"), "Trigger field should be lowercased and wrapped in %");
    }

    [TestMethod]
    public void BuildFetchXml_NameFilter_PreservesCase()
    {
        var xml = BuildFetchXml(null, "", true, "", "My Workflow", 50);
        Assert.IsTrue(xml.Contains("value='%My Workflow%'"), "Name filter should preserve case");
    }

    [TestMethod]
    public void BuildFetchXml_MaxRecords_AppliedAsTop()
    {
        var xml = BuildFetchXml(null, "", true, "", "", 100);
        Assert.IsTrue(xml.Contains("top='100'"), "max_records should be applied as fetch top");
    }

    // ──────────────────────────────────────────────
    // MapScope
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MapScope_ValidValues_ReturnsCorrectLabels()
    {
        Assert.AreEqual("User", MapScopeMethod.Invoke(null, [1])!.ToString());
        Assert.AreEqual("BU", MapScopeMethod.Invoke(null, [2])!.ToString());
        Assert.AreEqual("Parent:ChildBU", MapScopeMethod.Invoke(null, [3])!.ToString());
        Assert.AreEqual("Org", MapScopeMethod.Invoke(null, [4])!.ToString());
    }

    [TestMethod]
    public void MapScope_UnknownValue_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown", MapScopeMethod.Invoke(null, [99])!.ToString());
    }

    [TestMethod]
    public void MapScope_Null_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown", MapScopeMethod.Invoke(null, [new int?()])!.ToString());
    }

    // ──────────────────────────────────────────────
    // MapStage
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MapStage_Pre_ReturnsPre()
    {
        Assert.AreEqual("Pre", MapStageMethod.Invoke(null, [20])!.ToString());
    }

    [TestMethod]
    public void MapStage_Post_ReturnsPost()
    {
        Assert.AreEqual("Post", MapStageMethod.Invoke(null, [40])!.ToString());
    }

    [TestMethod]
    public void MapStage_Null_ReturnsNull()
    {
        Assert.IsNull(MapStageMethod.Invoke(null, [new int?()]));
    }

    [TestMethod]
    public void MapStage_UnknownValue_ReturnsNull()
    {
        Assert.IsNull(MapStageMethod.Invoke(null, [99]));
    }

    // ──────────────────────────────────────────────
    // SanitizeDescription
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SanitizeDescription_ClickToAddDescription_ReturnsNull()
    {
        Assert.IsNull(SanitizeDescriptionMethod.Invoke(null, ["Click to add description"]));
        Assert.IsNull(SanitizeDescriptionMethod.Invoke(null, ["Click to add description."]));
        Assert.IsNull(SanitizeDescriptionMethod.Invoke(null, ["  CLICK TO ADD DESCRIPTION  "]));
    }

    [TestMethod]
    public void SanitizeDescription_RealDescription_ReturnsTrimmed()
    {
        Assert.AreEqual("My workflow", SanitizeDescriptionMethod.Invoke(null, ["  My workflow  "]));
    }

    [TestMethod]
    public void SanitizeDescription_Null_ReturnsNull()
    {
        Assert.IsNull(SanitizeDescriptionMethod.Invoke(null, [null!]));
    }

    // ──────────────────────────────────────────────
    // EscapeXml — prevents FetchXML injection
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeXml_SpecialCharacters_AreEscaped()
    {
        var result = (string)EscapeXmlMethod.Invoke(null, ["<test>&'\"value"])!;
        Assert.IsTrue(result.Contains("&lt;"), "< should be escaped");
        Assert.IsTrue(result.Contains("&amp;"), "& should be escaped");
        Assert.IsTrue(result.Contains("&apos;"), "' should be escaped");
        Assert.IsTrue(result.Contains("&quot;"), "\" should be escaped");
    }

    // ──────────────────────────────────────────────
    // EscapeTab
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeTab_TabsAndNewlines_AreReplaced()
    {
        var result = (string)EscapeTabMethod.Invoke(null, ["line1\tline2\nline3\rline4"])!;
        Assert.IsFalse(result.Contains("\t"), "Tabs should be replaced");
        Assert.IsFalse(result.Contains("\n"), "Newlines should be replaced");
        Assert.IsFalse(result.Contains("\r"), "Carriage returns should be replaced");
    }

    // ──────────────────────────────────────────────
    // Mode validation (via public method)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetWorkflows_InvalidMode_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetWorkflowsTool(null!);
        var result = tool.get_workflows(mode: "xyz");
        Assert.IsTrue(result.IsError, "Invalid mode should return error");
    }

    [TestMethod]
    public void GetWorkflows_InvalidWorkflowId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetWorkflowsTool(null!);
        var result = tool.get_workflows(workflow_id: "not-a-guid");
        Assert.IsTrue(result.IsError, "Invalid GUID should return error");
    }
}
