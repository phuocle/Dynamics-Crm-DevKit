using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetCustomApisToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetCustomApisTool);

    // ──────────────────────────────────────────────
    // Return type
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCustomApis_ReturnType_IsCallToolResult()
    {
        var method = ToolType.GetMethod("get_custom_apis")!;
        Assert.AreEqual("CallToolResult", method.ReturnType.Name,
            "get_custom_apis must return CallToolResult, not string");
    }

    // ──────────────────────────────────────────────
    // Status validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCustomApis_InvalidStatus_ReturnsIsErrorTrue()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetCustomApisTool(null!);
        var result = tool.get_custom_apis(status: "xyz_invalid");
        Assert.IsTrue(result.IsError == true, "Invalid status should return IsError=true");
    }

    [TestMethod]
    public void GetCustomApis_InvalidStatus_ErrorMessageContainsValue()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetCustomApisTool(null!);
        var result = tool.get_custom_apis(status: "bogus");
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("bogus"), "Error should echo back the invalid status value");
    }

    [TestMethod]
    public void GetCustomApis_ValidStatuses_DoNotReturnValidationError()
    {
        foreach (var validStatus in new[] { "active", "ACTIVE", "Active", "inactive", "INACTIVE", "all", "ALL", " active " })
        {
            var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetCustomApisTool(null!);
            var result = tool.get_custom_apis(status: validStatus);
            // Should NOT be a validation error (it may throw due to null ServiceClient, but that's not a validation error)
            if (result.IsError == true)
            {
                var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
                Assert.IsFalse(text.Contains("Invalid status"),
                    $"Status '{validStatus}' should not trigger status validation error, got: {text}");
            }
        }
    }

    // ──────────────────────────────────────────────
    // Finding 1: entity_name should NOT block detail mode
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCustomApis_ApiNameWithEntityName_EntityNameNotValidatedFirst()
    {
        // When api_name is provided, entity_name is irrelevant and should not be validated.
        // With null ServiceClient, the detail query will throw, but it should NOT throw
        // an entity validation error for a fake entity_name.
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetCustomApisTool(null!);
        var result = tool.get_custom_apis(api_name: "v4_CustomApi", entity_name: "totally_fake_entity_xyz");

        // The result should NOT say "Entity 'totally_fake_entity_xyz' not found"
        if (result.IsError == true)
        {
            var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
            Assert.IsFalse(text.Contains("totally_fake_entity_xyz"),
                $"entity_name should not be validated when api_name is provided. Got: {text}");
        }
    }

    // ──────────────────────────────────────────────
    // Finding 2: Description accuracy
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCustomApis_IncludeMicrosoftDescription_SaysManagedNotPrefixes()
    {
        var method = ToolType.GetMethod("get_custom_apis")!;
        var param = method.GetParameters()[2]; // include_microsoft
        Assert.AreEqual("include_microsoft", param.Name);
        var descAttr = param.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>();
        Assert.IsNotNull(descAttr, "include_microsoft must have a Description attribute");
        // Should NOT mention msdyn_ or mspp_ prefixes since the code filters by ismanaged
        Assert.IsFalse(descAttr!.Description.Contains("msdyn_"),
            $"Description should not mention msdyn_ prefix. Got: {descAttr.Description}");
        Assert.IsTrue(descAttr.Description.Contains("managed", StringComparison.OrdinalIgnoreCase),
            $"Description should mention 'managed'. Got: {descAttr.Description}");
    }

    // ──────────────────────────────────────────────
    // Finding 3: Tool description references correct parameter name
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCustomApis_ToolDescription_ReferencesIncludeMicrosoftNotIncludeManaged()
    {
        var method = ToolType.GetMethod("get_custom_apis")!;
        var descAttr = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>();
        Assert.IsNotNull(descAttr, "get_custom_apis must have a Description attribute");
        // The description should reference the actual parameter name include_microsoft
        Assert.IsTrue(descAttr!.Description.Contains("include_microsoft"),
            $"Description should reference parameter name 'include_microsoft'. Got: {descAttr.Description}");
        // It should NOT reference a non-existent parameter name
        Assert.IsFalse(descAttr.Description.Contains("include_managed"),
            $"Description should not reference non-existent parameter 'include_managed'. Got: {descAttr.Description}");
    }

    // ──────────────────────────────────────────────
    // Static maps coverage
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParameterTypeMap_ContainsAllExpectedTypes()
    {
        var field = ToolType.GetField("ParameterTypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;
        var map = (System.Collections.Generic.Dictionary<int, string>)field.GetValue(null)!;
        Assert.AreEqual(13, map.Count, "ParameterTypeMap should have 13 entries (0-12)");
        Assert.AreEqual("Boolean", map[0]);
        Assert.AreEqual("String", map[10]);
        Assert.AreEqual("Guid", map[12]);
    }

    [TestMethod]
    public void BindingTypeMap_ContainsAllExpectedTypes()
    {
        var field = ToolType.GetField("BindingTypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;
        var map = (System.Collections.Generic.Dictionary<int, string>)field.GetValue(null)!;
        Assert.AreEqual(3, map.Count, "BindingTypeMap should have 3 entries (0-2)");
        Assert.AreEqual("Global", map[0]);
        Assert.AreEqual("Entity", map[1]);
        Assert.AreEqual("EntityCollection", map[2]);
    }

    [TestMethod]
    public void ProcessingTypeMap_ContainsAllExpectedTypes()
    {
        var field = ToolType.GetField("ProcessingTypeMap", BindingFlags.NonPublic | BindingFlags.Static)!;
        var map = (System.Collections.Generic.Dictionary<int, string>)field.GetValue(null)!;
        Assert.AreEqual(3, map.Count, "ProcessingTypeMap should have 3 entries (0-2)");
        Assert.AreEqual("None", map[0]);
        Assert.AreEqual("Async Only", map[1]);
        Assert.AreEqual("Sync and Async", map[2]);
    }
}
