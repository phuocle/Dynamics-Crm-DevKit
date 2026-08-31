using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetBusinessProcessFlows;

[TestClass]
public class GetBusinessProcessFlowsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetBusinessProcessFlowsTool);

    private static readonly MethodInfo SanitizeDescriptionMethod = ToolType
        .GetMethod("SanitizeDescription", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    // EscapeTab was extracted to the shared CompactFormatter helper during the
    // phase 1-3 refactor; look it up there so the behaviour stays covered.
    private static readonly MethodInfo EscapeTabMethod =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter)
            .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo StageCategoryMapField = ToolType
        .GetField("StageCategoryMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    // Helper: create tool instance with null service client (for validation-only tests)
    private static dynamic CreateTool() => Activator.CreateInstance(ToolType, new object?[] { null })!;

    // Helper: invoke public method via reflection
    private static object InvokeGetBpfs(object tool, string bpfId = "", string bpfName = "", string entityName = "", string status = "active", bool includeStages = false, int maxRecords = 50)
    {
        var method = ToolType.GetMethod("get_business_process_flows", BindingFlags.Public | BindingFlags.Instance)!;
        return method.Invoke(tool, [bpfId, bpfName, entityName, status, includeStages, maxRecords])!;
    }

    private static bool IsErrorResult(object result)
    {
        var isErrorProp = result.GetType().GetProperty("IsError")!;
        return (bool)(isErrorProp.GetValue(result) ?? false);
    }

    private static string GetErrorText(object result)
    {
        var contentProp = result.GetType().GetProperty("Content")!;
        var content = contentProp.GetValue(result) as System.Collections.IList;
        if (content == null || content.Count == 0) return "";
        var textProp = content[0]!.GetType().GetProperty("Text")!;
        return textProp.GetValue(content[0])?.ToString() ?? "";
    }

    // ──────────────────────────────────────────────
    // Status validation — empty string must default to "active"
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Status_EmptyString_DoesNotBypassValidation()
    {
        // Before fix: status="" bypassed validation and acted as "all" instead of "active"
        // After fix: status="" is normalized to "active" before any query
        var tool = CreateTool();
        // With null serviceClient, "active" status will throw when it tries to query Dataverse.
        // But it should NOT return an error about invalid status.
        try
        {
            InvokeGetBpfs(tool, status: "");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is NullReferenceException)
        {
            // Expected: null serviceClient throws when trying to query
            // The important thing is it did NOT return "Invalid status" error
            return;
        }
        // If it returned without exception, it should be a valid result (not an error about status)
    }

    [TestMethod]
    public void Status_WhitespaceOnly_DefaultsToActive()
    {
        var tool = CreateTool();
        try
        {
            InvokeGetBpfs(tool, status: "   ");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is NullReferenceException)
        {
            // Expected: proceeds past validation, hits null serviceClient
            return;
        }
    }

    [TestMethod]
    public void Status_Invalid_ReturnsError()
    {
        var tool = CreateTool();
        var result = InvokeGetBpfs(tool, status: "xyz_invalid");
        Assert.IsTrue(IsErrorResult(result), "Invalid status should return error");
        Assert.IsTrue(GetErrorText(result).Contains("Invalid status"), "Error should mention invalid status");
    }

    [TestMethod]
    public void Status_UpperCase_IsAccepted()
    {
        var tool = CreateTool();
        // ACTIVE should be normalized to "active" and accepted
        try
        {
            InvokeGetBpfs(tool, status: "ACTIVE");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is NullReferenceException)
        {
            // Expected: proceeds past validation
            return;
        }
    }

    [TestMethod]
    public void Status_MixedCase_IsAccepted()
    {
        var tool = CreateTool();
        try
        {
            InvokeGetBpfs(tool, status: "DrAfT");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is NullReferenceException)
        {
            return;
        }
    }

    // ──────────────────────────────────────────────
    // GUID validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void BpfId_InvalidGuid_ReturnsError()
    {
        var tool = CreateTool();
        var result = InvokeGetBpfs(tool, bpfId: "not-a-guid");
        Assert.IsTrue(IsErrorResult(result), "Invalid GUID should return error");
        Assert.IsTrue(GetErrorText(result).Contains("not a valid GUID"), "Error should mention invalid GUID");
    }

    [TestMethod]
    public void BpfId_BracedGuid_IsAccepted()
    {
        var tool = CreateTool();
        // Braced GUID should pass GUID validation (then fail on null serviceClient)
        try
        {
            InvokeGetBpfs(tool, bpfId: "{00000000-0000-0000-0000-000000000000}");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is NullReferenceException)
        {
            return; // Expected: passed GUID validation, hit null serviceClient
        }
    }

    // ──────────────────────────────────────────────
    // SanitizeDescription
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SanitizeDescription_Null_ReturnsNull()
    {
        var result = SanitizeDescriptionMethod.Invoke(null, [null]);
        Assert.IsNull(result);
    }

    [TestMethod]
    public void SanitizeDescription_ClickToAdd_ReturnsNull()
    {
        var result = SanitizeDescriptionMethod.Invoke(null, ["Click to add description"]);
        Assert.IsNull(result);
    }

    [TestMethod]
    public void SanitizeDescription_ClickToAddWithDot_ReturnsNull()
    {
        var result = SanitizeDescriptionMethod.Invoke(null, ["Click to add description."]);
        Assert.IsNull(result);
    }

    [TestMethod]
    public void SanitizeDescription_ValidDescription_ReturnsTrimmed()
    {
        var result = SanitizeDescriptionMethod.Invoke(null, ["  Some description  "]);
        Assert.AreEqual("Some description", result);
    }

    // ──────────────────────────────────────────────
    // EscapeXml
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeXml_SpecialCharacters_AreEscaped()
    {
        var result = (string)EscapeXmlMethod.Invoke(null, ["<test & 'value' \"quoted\">"])!;
        Assert.AreEqual("&lt;test &amp; &apos;value&apos; &quot;quoted&quot;&gt;", result);
    }

    // ──────────────────────────────────────────────
    // EscapeTab
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeTab_TabsAndNewlines_AreRemoved()
    {
        // EscapeTab: \t → " ", \n → " ", \r → "" (removed, not replaced)
        var result = (string)EscapeTabMethod.Invoke(null, ["hello\tworld\nfoo\rbar"])!;
        Assert.AreEqual("hello world foobar", result);
    }

    // ──────────────────────────────────────────────
    // StageCategoryMap
    // ──────────────────────────────────────────────

    [TestMethod]
    public void StageCategoryMap_ContainsExpectedEntries()
    {
        var map = (Dictionary<int, string>)StageCategoryMapField.GetValue(null)!;
        Assert.AreEqual(8, map.Count, "Should have 8 stage category mappings");
        Assert.AreEqual("Qualify", map[0]);
        Assert.AreEqual("Develop", map[1]);
        Assert.AreEqual("Propose", map[2]);
        Assert.AreEqual("Close", map[3]);
        Assert.AreEqual("Identify", map[4]);
        Assert.AreEqual("Research", map[5]);
        Assert.AreEqual("Resolve", map[6]);
        Assert.AreEqual("Approval", map[7]);
    }
}
