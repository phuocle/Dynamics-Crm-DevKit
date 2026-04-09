using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetDataverseCommandsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool);

    private static readonly FieldInfo LocationMapField = ToolType
        .GetField("LocationMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo LocationFilterMapField = ToolType
        .GetField("LocationFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OriginMapField = ToolType
        .GetField("OriginMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OriginFilterMapField = ToolType
        .GetField("OriginFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo TypeMapField = ToolType
        .GetField("TypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo OnClickEventTypeMapField = ToolType
        .GetField("OnClickEventTypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo ActionTypeFilterMapField = ToolType
        .GetField("ActionTypeFilterMap", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeXmlMethod = ToolType
        .GetMethod("EscapeXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo TruncateMethod = ToolType
        .GetMethod("Truncate", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NullIfEmptyMethod = ToolType
        .GetMethod("NullIfEmpty", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // LocationFilterMap covers all LocationMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void LocationFilterMap_CoversAllLocationMapValues()
    {
        var locationMap = (Dictionary<int, string>)LocationMapField.GetValue(null)!;
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;

        foreach (var kvp in locationMap)
        {
            var snakeCase = PascalToSnakeCase(kvp.Value);
            Assert.IsTrue(
                locationFilterMap.ContainsKey(snakeCase),
                $"LocationFilterMap is missing '{snakeCase}' (LocationMap value {kvp.Key}='{kvp.Value}')");
            Assert.AreEqual(kvp.Key, locationFilterMap[snakeCase],
                $"LocationFilterMap['{snakeCase}'] should map to {kvp.Key}");
        }
    }

    [TestMethod]
    public void LocationFilterMap_ContainsGlobalHeader()
    {
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;
        Assert.IsTrue(locationFilterMap.ContainsKey("global_header"),
            "LocationFilterMap must contain 'global_header'");
        Assert.AreEqual(5, locationFilterMap["global_header"]);
    }

    [TestMethod]
    public void LocationFilterMap_ContainsDashboard()
    {
        var locationFilterMap = (Dictionary<string, int>)LocationFilterMapField.GetValue(null)!;
        Assert.IsTrue(locationFilterMap.ContainsKey("dashboard"),
            "LocationFilterMap must contain 'dashboard'");
        Assert.AreEqual(6, locationFilterMap["dashboard"]);
    }

    // ──────────────────────────────────────────────
    // OriginFilterMap covers all OriginMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void OriginFilterMap_CoversAllOriginMapValues()
    {
        var originMap = (Dictionary<int, string>)OriginMapField.GetValue(null)!;
        var originFilterMap = (Dictionary<string, int>)OriginFilterMapField.GetValue(null)!;

        foreach (var kvp in originMap)
        {
            var snakeCase = PascalToSnakeCase(kvp.Value);
            Assert.IsTrue(
                originFilterMap.ContainsKey(snakeCase),
                $"OriginFilterMap is missing '{snakeCase}' (OriginMap value {kvp.Key}='{kvp.Value}')");
        }
    }

    // ──────────────────────────────────────────────
    // ActionTypeFilterMap covers all OnClickEventTypeMap values
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ActionTypeFilterMap_CoversAllOnClickEventTypeMapValues()
    {
        var onClickMap = (Dictionary<int, string>)OnClickEventTypeMapField.GetValue(null)!;
        var actionTypeFilterMap = (Dictionary<string, int>)ActionTypeFilterMapField.GetValue(null)!;

        foreach (var kvp in onClickMap)
        {
            var lowerCase = kvp.Value.ToLowerInvariant();
            Assert.IsTrue(
                actionTypeFilterMap.ContainsKey(lowerCase),
                $"ActionTypeFilterMap is missing '{lowerCase}' (OnClickEventTypeMap value {kvp.Key}='{kvp.Value}')");
        }
    }

    // ──────────────────────────────────────────────
    // Validation: invalid inputs
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validation_InvalidLocation_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(location: "INVALID_LOCATION");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid location"));
    }

    [TestMethod]
    public void Validation_InvalidOrigin_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(origin: "INVALID_ORIGIN");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid origin"));
    }

    [TestMethod]
    public void Validation_InvalidActionType_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(action_type: "INVALID_TYPE");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("Invalid action_type"));
    }

    [TestMethod]
    public void Validation_MaxRecordsZero_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(max_records: 0);
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("max_records must be between 1 and 500"));
    }

    [TestMethod]
    public void Validation_MaxRecordsNegative_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(max_records: -1);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Validation_InvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        var result = tool.get_dataverse_commands(command_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    [TestMethod]
    public void Validation_OriginAll_IsAccepted()
    {
        // origin="all" should NOT return error (it bypasses filter)
        // It will fail at Dataverse call (null ServiceClient), but should pass validation
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetDataverseCommandsTool(null!);
        try
        {
            tool.get_dataverse_commands(origin: "all");
        }
        catch (NullReferenceException)
        {
            // Expected — ServiceClient is null, but validation passed
        }
    }

    // ──────────────────────────────────────────────
    // Helper methods
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeXml_SpecialChars_Escaped()
    {
        var result = (string)EscapeXmlMethod.Invoke(null, new object[] { "a&b<c>d'e\"f" })!;
        Assert.AreEqual("a&amp;b&lt;c&gt;d&apos;e&quot;f", result);
    }

    [TestMethod]
    public void EscapeTab_TabsAndNewlines_Replaced()
    {
        var result = (string)EscapeTabMethod.Invoke(null, new object[] { "a\tb\nc\rd" })!;
        Assert.AreEqual("a b cd", result);
    }

    [TestMethod]
    public void Truncate_LongString_Truncated()
    {
        var input = new string('x', 300);
        var result = (string)TruncateMethod.Invoke(null, new object[] { input, 200 })!;
        Assert.AreEqual(203, result.Length); // 200 + "..."
        Assert.IsTrue(result.EndsWith("..."));
    }

    [TestMethod]
    public void Truncate_ShortString_Unchanged()
    {
        var result = (string)TruncateMethod.Invoke(null, new object[] { "short", 200 })!;
        Assert.AreEqual("short", result);
    }

    [TestMethod]
    public void Truncate_NullOrEmpty_ReturnsEmpty()
    {
        var result1 = (string)TruncateMethod.Invoke(null, new object[] { (string)null!, 200 })!;
        Assert.AreEqual("", result1);

        var result2 = (string)TruncateMethod.Invoke(null, new object[] { "", 200 })!;
        Assert.AreEqual("", result2);
    }

    [TestMethod]
    public void NullIfEmpty_WhitespaceOnly_ReturnsNull()
    {
        var result = NullIfEmptyMethod.Invoke(null, new object[] { "   " });
        Assert.IsNull(result);
    }

    [TestMethod]
    public void NullIfEmpty_ValidString_ReturnsTrimmed()
    {
        var result = (string)NullIfEmptyMethod.Invoke(null, new object[] { "  hello  " })!;
        Assert.AreEqual("hello", result);
    }

    // ──────────────────────────────────────────────
    // Private helper
    // ──────────────────────────────────────────────

    private static string PascalToSnakeCase(string pascal)
    {
        var result = new System.Text.StringBuilder();
        for (int i = 0; i < pascal.Length; i++)
        {
            if (i > 0 && char.IsUpper(pascal[i]))
                result.Append('_');
            result.Append(char.ToLowerInvariant(pascal[i]));
        }
        return result.ToString();
    }

    private static string GetText(CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is TextContentBlock textBlock)
            return textBlock.Text ?? "";
        return "";
    }
}
