using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetWorkflowsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetWorkflowsTool);

    private static readonly MethodInfo BuildFetchXmlMethod = ToolType
        .GetMethod("BuildListFetchXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapScopeMethod = ToolType
        .GetMethod("MapScope", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapStageMethod = ToolType
        .GetMethod("MapStage", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    // EscapeTab was extracted to the shared CompactFormatter helper during the
    // phase 1-3 refactor. Look it up there so the behaviour stays covered.
    private static readonly MethodInfo EscapeTabMethod =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter)
            .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // BuildFetchXml — Entity column presence
    // ──────────────────────────────────────────────

    private static string BuildFetchXml(int? objectTypeCode, string mode, bool activeOnly, string triggerField, string nameFilter, int maxRecords)
    {
        // Production BuildListFetchXml now takes a status string ("active"/"draft"/"all")
        // instead of the former bool activeOnly flag. Translate the legacy test parameter
        // so the existing assertions stay meaningful.
        var status = activeOnly ? "active" : "";
        return (string)BuildFetchXmlMethod.Invoke(null, [objectTypeCode, mode, status, triggerField, nameFilter, maxRecords])!;
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
        Assert.IsFalse(xml.Contains("attribute='statecode' operator='eq'"), "active_only=false should not filter by statecode");
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
        // Production preserves the trigger field case (no lowercasing after refactor);
        // it only trims and wraps in '%' for the FetchXML like filter.
        Assert.IsTrue(xml.Contains("value='%StateCode%'"), "Trigger field should be trimmed and wrapped in %");
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
        Assert.AreEqual("Business Unit", MapScopeMethod.Invoke(null, [2])!.ToString());
        Assert.AreEqual("Parent:Child Business Units", MapScopeMethod.Invoke(null, [3])!.ToString());
        Assert.AreEqual("Organization", MapScopeMethod.Invoke(null, [4])!.ToString());
    }

    [TestMethod]
    public void MapScope_UnknownValue_ReturnsUnknown()
    {
        Assert.IsNull(MapScopeMethod.Invoke(null, [99]));
    }

    [TestMethod]
    public void MapScope_Null_ReturnsUnknown()
    {
        Assert.IsNull(MapScopeMethod.Invoke(null, [new int?()]));
    }

    // ──────────────────────────────────────────────
    // MapStage — production signature is MapStage(Entity e, string attributeName):
    // it reads FormattedValues first, falls back to OptionSetValue (20=>Pre, 40=>Post).
    // ──────────────────────────────────────────────

    private static string? MapStage(int? stageValue, string attributeName = "createstage")
    {
        var entity = new Entity("workflow");
        if (stageValue.HasValue)
            entity[attributeName] = new OptionSetValue(stageValue.Value);
        return (string?)MapStageMethod.Invoke(null, [entity, attributeName]);
    }

    [TestMethod]
    public void MapStage_Pre_ReturnsPre()
    {
        Assert.AreEqual("Pre", MapStage(20));
    }

    [TestMethod]
    public void MapStage_Post_ReturnsPost()
    {
        Assert.AreEqual("Post", MapStage(40));
    }

    [TestMethod]
    public void MapStage_Null_ReturnsNull()
    {
        Assert.IsNull(MapStage(null));
    }

    [TestMethod]
    public void MapStage_UnknownValue_ReturnsNull()
    {
        Assert.IsNull(MapStage(99));
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
