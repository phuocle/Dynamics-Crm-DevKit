using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliParseRecordUrlTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ParseRecordUrlTool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Text.Json;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ParseRecordUrl;

/// <summary>
/// Tests for ParseRecordUrlTool.parse_record_url() — URL/GUID parsing with many static regex patterns.
/// The tool is public but requires ServiceClient for Dataverse resolution (etc/entitySetName).
/// We pass null ServiceClient and test only paths that don't hit Dataverse.
/// Output contract (phase 1-3 refactor):
///   Success text = "[Success] {entityName} {recordId} ({source})." (1 compact line)
///   Error text   = "[Error] {message}." (+ optional "\nHint: ...")
///   Details (entitySetName, environmentId, flowId, tip) live in StructuredContent JSON only.
/// </summary>
[TestClass]
public class ParseRecordUrlToolTests
{
    private readonly CliParseRecordUrlTool _tool = new(null!);

    // ──────────────────────────────────────────────
    // Empty / null input
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_EmptyInput_ReturnsError()
    {
        var result = _tool.parse_record_url("");
        Assert.IsTrue(result.Contains("input is required"));
    }

    [TestMethod]
    public void ParseRecordUrl_NullInput_ReturnsError()
    {
        var result = _tool.parse_record_url(null!);
        Assert.IsTrue(result.Contains("input is required"));
    }

    [TestMethod]
    public void ParseRecordUrl_WhitespaceInput_ReturnsError()
    {
        var result = _tool.parse_record_url("   ");
        Assert.IsTrue(result.Contains("input is required"));
    }

    // ──────────────────────────────────────────────
    // Raw GUID
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_RawGuid_ReturnsUnknownEntity()
    {
        var result = _tool.parse_record_url("11111111-2222-3333-4444-555555555555");

        Assert.IsTrue(result.Contains("(unknown)"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("raw GUID"));
    }

    [TestMethod]
    public void ParseRecordUrl_GuidWithBraces_ExtractsCorrectly()
    {
        var result = _tool.parse_record_url("{11111111-2222-3333-4444-555555555555}");

        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("raw GUID"));
    }

    [TestMethod]
    public void ParseRecordUrl_GuidUpperCase_NormalizedToLower()
    {
        var result = _tool.parse_record_url("AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE");

        Assert.IsTrue(result.Contains("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"));
    }

    // ──────────────────────────────────────────────
    // main.aspx with etn + id
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_MainAspxWithEtn_ReturnsEntity()
    {
        var url = "https://org.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("main.aspx (etn+id)"));
    }

    [TestMethod]
    public void ParseRecordUrl_MainAspxWithBracedId_DecodesCorrectly()
    {
        var url = "https://org.crm.dynamics.com/main.aspx?etn=contact&pagetype=entityrecord&id=%7B11111111-2222-3333-4444-555555555555%7D";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("contact"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
    }

    [TestMethod]
    public void ParseRecordUrl_MainAspxEntityList_ReturnsViewId()
    {
        var url = "https://org.crm.dynamics.com/main.aspx?etn=account&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&viewtype=1039";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("main.aspx (entitylist+viewid)"));
    }

    [TestMethod]
    public void ParseRecordUrl_MainAspxIdOnly_ReturnsUnknown()
    {
        var url = "https://org.crm.dynamics.com/main.aspx?pagetype=entityrecord&id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("(unknown)"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("main.aspx (id only)"));
    }

    // ──────────────────────────────────────────────
    // Web API URL (resolution will fail with null ServiceClient, unresolved)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_WebApiUrl_ReturnsEntitySetName()
    {
        var url = "https://org.crm.dynamics.com/api/data/v9.2/accounts(11111111-2222-3333-4444-555555555555)";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        // With null ServiceClient, resolution returns null → entityName is null/empty → "(unknown)" in text
        // entitySetName "accounts" lives in structuredContent only
        Assert.IsTrue(result.Contains("Web API (unresolved)"));
        Assert.IsTrue(GetJson(result).Contains("\"entitySetName\":\"accounts\""));
    }

    // ──────────────────────────────────────────────
    // Maker Portal URLs
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_MakerFlowUrl_ReturnsWorkflow()
    {
        var url = "https://make.powerautomate.com/environments/11111111-1111-1111-1111-111111111111/flows/22222222-2222-2222-2222-222222222222";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("workflow"));
        Assert.IsTrue(result.Contains("22222222-2222-2222-2222-222222222222"));
        Assert.IsTrue(result.Contains("make.powerautomate.com (flow)"));
        // environmentId lives in structuredContent only
        Assert.IsTrue(GetJson(result).Contains("\"environmentId\":\"11111111-1111-1111-1111-111111111111\""));
    }

    [TestMethod]
    public void ParseRecordUrl_MakerFlowRunUrl_ReturnsFlowSession()
    {
        var url = "https://make.powerautomate.com/environments/11111111-1111-1111-1111-111111111111/flows/22222222-2222-2222-2222-222222222222/runs/33333333-3333-3333-3333-333333333333";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("flowsession"));
        Assert.IsTrue(result.Contains("33333333-3333-3333-3333-333333333333"));
        Assert.IsTrue(result.Contains("make.powerautomate.com (flow run)"));
        var json = GetJson(result);
        Assert.IsTrue(json.Contains("\"environmentId\":\"11111111-1111-1111-1111-111111111111\""));
        Assert.IsTrue(json.Contains("\"flowId\":\"22222222-2222-2222-2222-222222222222\""));
    }

    [TestMethod]
    public void ParseRecordUrl_MakerSolutionUrl_ReturnsSolution()
    {
        var url = "https://make.powerapps.com/environments/11111111-1111-1111-1111-111111111111/solutions/22222222-2222-2222-2222-222222222222";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("solution"));
        Assert.IsTrue(result.Contains("22222222-2222-2222-2222-222222222222"));
        Assert.IsTrue(result.Contains("make.powerapps.com (solution)"));
    }

    // ──────────────────────────────────────────────
    // Legacy URLs
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_WorkflowEditor_ReturnsWorkflow()
    {
        var url = "https://org.crm.dynamics.com/sfa/workflow/edit.aspx?id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("workflow"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("sfa/workflow/edit.aspx"));
    }

    [TestMethod]
    public void ParseRecordUrl_ReportViewer_ReturnsReport()
    {
        var url = "https://org.crm.dynamics.com/crmreports/viewer/viewer.aspx?id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("report"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("crmreports/viewer/viewer.aspx"));
    }

    [TestMethod]
    public void ParseRecordUrl_SolutionEditor_ReturnsSolution()
    {
        var url = "https://org.crm.dynamics.com/tools/solution/edit.aspx?id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("solution"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("tools/solution/edit.aspx"));
    }

    [TestMethod]
    public void ParseRecordUrl_RunDialogUrl_ReturnsEntity()
    {
        var url = "https://org.crm.dynamics.com/cs/dialog/rundialog.aspx?DialogId={AAAA1111-1111-1111-1111-111111111111}&EntityName=account&ObjectId={11111111-2222-3333-4444-555555555555}";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("rundialog.aspx (EntityName+ObjectId)"));
    }

    // ──────────────────────────────────────────────
    // No GUID found
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_NoGuidFound_ReturnsError()
    {
        var result = _tool.parse_record_url("https://google.com/not-a-dynamics-url");

        Assert.IsTrue(result.Contains("No GUID found in input"));
    }

    [TestMethod]
    public void ParseRecordUrl_RandomText_ReturnsNoGuid()
    {
        var result = _tool.parse_record_url("some random text without a guid");

        Assert.IsTrue(result.Contains("No GUID found in input"));
    }

    // ──────────────────────────────────────────────
    // ETN case normalization
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_MainAspxUpperCaseEtn_ReturnsLowerCase()
    {
        var url = "https://org.crm.dynamics.com/main.aspx?etn=Account&pagetype=entityrecord&id=11111111-2222-3333-4444-555555555555";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("account"));
    }

    // ──────────────────────────────────────────────
    // Adversarial: Maker solution with non-GUID unique name
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_MakerSolutionUniqueName_IndicatesNotGuid()
    {
        var url = "https://make.powerapps.com/environments/11111111-1111-1111-1111-111111111111/solutions/MyCustomSolution";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("solution"));
        Assert.IsTrue(result.Contains("mycustomsolution"));
        Assert.IsTrue(result.Contains("unique name - not a record GUID"));
    }

    [TestMethod]
    public void ParseRecordUrl_MakerSolutionGuid_NoUniqueNameNote()
    {
        var url = "https://make.powerapps.com/environments/11111111-1111-1111-1111-111111111111/solutions/22222222-2222-2222-2222-222222222222";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("solution"));
        Assert.IsTrue(result.Contains("22222222-2222-2222-2222-222222222222"));
        Assert.IsTrue(result.Contains("make.powerapps.com (solution)"));
        Assert.IsFalse(result.Contains("unique name"));
    }

    // ──────────────────────────────────────────────
    // Adversarial: rundialog without ObjectId
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRecordUrl_RunDialogNoObjectId_ReturnsDialogInfo()
    {
        var url = "https://org.crm.dynamics.com/cs/dialog/rundialog.aspx?DialogId={AAAA1111-1111-1111-1111-111111111111}&EntityName=account";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("workflow"));
        Assert.IsTrue(result.Contains("aaaa1111-1111-1111-1111-111111111111"));
        Assert.IsTrue(result.Contains("targets account"));
    }

    [TestMethod]
    public void ParseRecordUrl_RunDialogNoObjectIdNoEntityName_ReturnsDialogIdOnly()
    {
        var url = "https://org.crm.dynamics.com/cs/dialog/rundialog.aspx?DialogId={AAAA1111-1111-1111-1111-111111111111}";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("workflow"));
        Assert.IsTrue(result.Contains("aaaa1111-1111-1111-1111-111111111111"));
        Assert.IsTrue(result.Contains("DialogId only"));
    }

    [TestMethod]
    public void ParseRecordUrl_RunDialogWithObjectId_StillReturnsObjectId()
    {
        var url = "https://org.crm.dynamics.com/cs/dialog/rundialog.aspx?DialogId={AAAA1111-1111-1111-1111-111111111111}&EntityName=account&ObjectId={11111111-2222-3333-4444-555555555555}";

        var result = _tool.parse_record_url(url);

        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("11111111-2222-3333-4444-555555555555"));
        Assert.IsTrue(result.Contains("rundialog.aspx (EntityName+ObjectId)"));
    }

    // ──────────────────────────────────────────────
    // Helper: serialize StructuredContent for assertion
    // ──────────────────────────────────────────────

    private static string GetJson(ModelContextProtocol.Protocol.CallToolResult result)
    {
        if (result.StructuredContent == null) return "";
        return JsonSerializer.Serialize(result.StructuredContent.Value);
    }
}
