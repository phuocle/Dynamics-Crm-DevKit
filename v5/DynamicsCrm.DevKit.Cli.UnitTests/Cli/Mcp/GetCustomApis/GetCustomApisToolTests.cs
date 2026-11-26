using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetCustomApis;

[TestClass]
public class GetCustomApisToolTests
{
    private static readonly Type ToolType = typeof(ManageCustomApiTool);

    private static ManageCustomApiTool CreateNullTool() =>
        new(null!, new McpDryRunOptions { DryRun = false }, new McpExecutionContext(false));

    [TestMethod]
    public void ManageCustomApi_ReturnType_IsCallToolResult()
    {
        var method = ToolType.GetMethod("InvokeAsync")!;
        Assert.AreEqual(typeof(System.Threading.Tasks.Task<ModelContextProtocol.Protocol.CallToolResult>), method.ReturnType,
            "The routed manage_custom_api entry returns an asynchronous structured tool result.");
    }

    [TestMethod]
    public void ManageCustomApi_MissingAction_ReturnsIsErrorTrue()
    {
        var tool = CreateNullTool();
        var result = tool.manage_custom_api();
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void ManageCustomApi_InvalidAction_ReturnsIsErrorTrue()
    {
        var tool = CreateNullTool();
        var result = tool.manage_custom_api(action: "bogus_action");
        Assert.IsTrue(result.IsError == true);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "bogus_action");
    }

    [TestMethod]
    public void ManageCustomApi_InvalidStatus_ReturnsIsErrorTrue()
    {
        var tool = CreateNullTool();
        var result = tool.manage_custom_api(action: "list", status: "xyz_invalid");
        Assert.IsTrue(result.IsError == true, "Invalid status should return IsError=true");
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        StringAssert.Contains(text, "xyz_invalid");
    }

    [TestMethod]
    public void ManageCustomApi_ValidStatuses_DoNotReturnValidationError()
    {
        foreach (var validStatus in new[] { "active", "ACTIVE", "Active", "inactive", "INACTIVE", "all", "ALL", " active " })
        {
            var tool = CreateNullTool();
            var result = tool.manage_custom_api(action: "list", status: validStatus);
            if (result.IsError == true)
            {
                var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
                Assert.IsFalse(text.Contains("Invalid status"),
                    $"Status '{validStatus}' should not trigger status validation error, got: {text}");
            }
        }
    }

    [TestMethod]
    public void ManageCustomApi_DetailMode_DoesNotValidateEntityName()
    {
        var tool = CreateNullTool();
        var result = tool.manage_custom_api(action: "detail", api_name: "v4_CustomApi", entity_name: "totally_fake_entity_xyz");
        if (result.IsError == true)
        {
            var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
            Assert.IsFalse(text.Contains("totally_fake_entity_xyz"),
                $"entity_name should not be validated in detail mode. Got: {text}");
        }
    }

    [TestMethod]
    public void ManageCustomApi_IncludeMicrosoftDescription_SaysManagedNotPrefixes()
    {
        var method = ToolType.GetMethod("InvokeAsync")!;
        var param = method.GetParameters().First(p => p.Name == "include_microsoft");
        var descAttr = param.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>();
        Assert.IsNotNull(descAttr, "include_microsoft must have a Description attribute");
        Assert.IsFalse(descAttr!.Description.Contains("msdyn_"));
        Assert.IsTrue(descAttr.Description.Contains("managed", StringComparison.OrdinalIgnoreCase));
    }

    [TestMethod]
    public void ManageCustomApi_ToolDescription_MentionsCustomApiAndNoDryRunTokens()
    {
        var method = ToolType.GetMethod("InvokeAsync")!;
        var descAttr = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>();
        Assert.IsNotNull(descAttr);
        Assert.IsTrue(descAttr!.Description.Contains("Custom API"));
        Assert.IsFalse(descAttr.Description.Contains("include_managed"));
    }
}
