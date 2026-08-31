using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public class ManageRoleToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool);

    private static readonly MethodInfo ParsePrivilegeNameMethod = ToolType
        .GetMethod("ParsePrivilegeName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo MapDepthMaskMethod = ToolType
        .GetMethod("MapDepthMask", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo DepthRankMethod = ToolType
        .GetMethod("DepthRank", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static (string right, string entity) ParsePrivilegeName(string privilegeName)
    {
        var result = ParsePrivilegeNameMethod.Invoke(null, new object[] { privilegeName });
        var tuple = ((string, string))result!;
        return tuple;
    }

    private static string MapDepthMask(int depthMask)
    {
        return (string)MapDepthMaskMethod.Invoke(null, new object[] { depthMask })!;
    }

    private static int DepthRank(string depth)
    {
        return (int)DepthRankMethod.Invoke(null, new object[] { depth })!;
    }

    // ──────────────────────────────────────────────
    // ParsePrivilegeName
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParsePrivilegeName_CreateAccount_ReturnsCreateAccount()
    {
        var (right, entity) = ParsePrivilegeName("prvCreateAccount");
        Assert.AreEqual("Create", right);
        Assert.AreEqual("account", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_ReadAccount_ReturnsReadAccount()
    {
        var (right, entity) = ParsePrivilegeName("prvReadAccount");
        Assert.AreEqual("Read", right);
        Assert.AreEqual("account", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_DeleteContact_ReturnsDeleteContact()
    {
        var (right, entity) = ParsePrivilegeName("prvDeleteContact");
        Assert.AreEqual("Delete", right);
        Assert.AreEqual("contact", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_AppendToAccount_ReturnsAppendToAccount()
    {
        var (right, entity) = ParsePrivilegeName("prvAppendToAccount");
        Assert.AreEqual("AppendTo", right);
        Assert.AreEqual("account", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_AppendAccount_ReturnsAppendAccount()
    {
        var (right, entity) = ParsePrivilegeName("prvAppendAccount");
        Assert.AreEqual("Append", right);
        Assert.AreEqual("account", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_UnknownPrivilege_ReturnsMisc()
    {
        var (right, entity) = ParsePrivilegeName("prvBulkDelete");
        Assert.AreEqual("prvBulkDelete", right);
        Assert.AreEqual("(misc)", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_CreateEmail_ReturnsEmail()
    {
        var (right, entity) = ParsePrivilegeName("prvCreateEmail");
        Assert.AreEqual("Create", right);
        Assert.AreEqual("email", entity);
    }

    [TestMethod]
    public void ParsePrivilegeName_DeleteEmail_ReturnsEmail()
    {
        var (right, entity) = ParsePrivilegeName("prvDeleteEmail");
        Assert.AreEqual("Delete", right);
        Assert.AreEqual("email", entity);
    }

    // ──────────────────────────────────────────────
    // MapDepthMask
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MapDepthMask_1_ReturnsUser()
    {
        Assert.AreEqual("User", MapDepthMask(1));
    }

    [TestMethod]
    public void MapDepthMask_2_ReturnsBusinessUnit()
    {
        Assert.AreEqual("BusinessUnit", MapDepthMask(2));
    }

    [TestMethod]
    public void MapDepthMask_4_ReturnsParentChildBU()
    {
        Assert.AreEqual("Parent:ChildBU", MapDepthMask(4));
    }

    [TestMethod]
    public void MapDepthMask_8_ReturnsOrganization()
    {
        Assert.AreEqual("Organization", MapDepthMask(8));
    }

    [TestMethod]
    public void MapDepthMask_0_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown(0)", MapDepthMask(0));
    }

    // ──────────────────────────────────────────────
    // DepthRank
    // ──────────────────────────────────────────────

    [TestMethod]
    public void DepthRank_Organization_Returns4()
    {
        Assert.AreEqual(4, DepthRank("Organization"));
    }

    [TestMethod]
    public void DepthRank_User_Returns1()
    {
        Assert.AreEqual(1, DepthRank("User"));
    }

    [TestMethod]
    public void DepthRank_Unknown_Returns0()
    {
        Assert.AreEqual(0, DepthRank("SomethingElse"));
    }

    // ──────────────────────────────────────────────
    // ──────────────────────────────────────────────
    // Action parameter validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ManageRole_EmptyAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("action is required"));
    }

    [TestMethod]
    public async Task ManageRole_InvalidAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "invalid_action");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid action"));
    }

    [TestMethod]
    public async Task ManageRole_DetailWithoutRoleReference_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "detail");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id or role_name is required"));
    }

    [TestMethod]
    public async Task ManageRole_DetailWithInvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "detail", role_id: "not-a-guid");
        Assert.IsTrue(result.IsError);
    }

    [TestMethod]
    public async Task ManageRole_DetailWithRoleName_DoesNotRequireRoleId()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "detail", role_name: "System Administrator");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsFalse(text.Contains("role_id or role_name is required"));
    }

    [TestMethod]
    public async Task ManageRole_DetailRoleIdMayCarryName_DoesNotRequireGuidBeforeResolution()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "detail", role_id: "System Administrator");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsFalse(text.Contains("role_id or role_name is required"));
    }

    [TestMethod]
    public async Task ManageRole_UserWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "user");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("user_id is required"));
    }

    [TestMethod]
    public async Task ManageRole_AssignWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "assign", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_AssignWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "assign", user_id: "user@test.com");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_UnassignWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "unassign", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_CreateWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "create");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_UpdateWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "update", role_name: "New Name");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_UpdateWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "update", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_DeleteWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "delete");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_DeleteWithInvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "delete", role_id: "bad-guid");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_CopyWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "copy", role_name: "New Role");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    [TestMethod]
    public async Task ManageRole_CopyWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = await tool.manage_role(null!,action: "copy", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("System Administrator"));
    }

    // ──────────────────────────────────────────────
    // Method existence verification
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ManageRole_HasAllExpectedParameters()
    {
        var method = ToolType.GetMethod("manage_role")!;
        var parameters = method.GetParameters();
        var paramNames = parameters.Select(p => p.Name).ToArray();
        CollectionAssert.Contains(paramNames, "action");
        CollectionAssert.Contains(paramNames, "user_id");
        CollectionAssert.Contains(paramNames, "role_id");
        CollectionAssert.Contains(paramNames, "role_name");
        CollectionAssert.Contains(paramNames, "business_unit_id");
        CollectionAssert.Contains(paramNames, "entity_name");
        CollectionAssert.Contains(paramNames, "max_records");
    }
}
