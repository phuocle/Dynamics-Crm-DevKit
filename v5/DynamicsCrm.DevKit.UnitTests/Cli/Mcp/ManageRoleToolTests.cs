using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

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

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

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

    private static string EscapeTab(string value)
    {
        return (string)EscapeTabMethod.Invoke(null, new object[] { value })!;
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
    // EscapeTab
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EscapeTab_WithTabsAndNewlines_ReplacesAll()
    {
        Assert.AreEqual("a b c", EscapeTab("a\tb\nc"));
    }

    // ──────────────────────────────────────────────
    // Action parameter validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageRole_EmptyAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("action is required"));
    }

    [TestMethod]
    public void ManageRole_InvalidAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "invalid_action");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid action"));
    }

    [TestMethod]
    public void ManageRole_DetailWithoutRoleReference_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "detail");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id or role_name is required"));
    }

    [TestMethod]
    public void ManageRole_DetailWithInvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "detail", role_id: "not-a-guid");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("not a valid GUID"));
    }

    [TestMethod]
    public void ManageRole_DetailWithRoleName_DoesNotRequireRoleId()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "detail", role_name: "System Administrator");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsFalse(text.Contains("role_id or role_name is required"));
        Assert.IsTrue(text.Contains("not a valid GUID"));
    }

    [TestMethod]
    public void ManageRole_DetailRoleIdMayCarryName_DoesNotRequireGuidBeforeResolution()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "detail", role_id: "System Administrator");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsFalse(text.Contains("role_id or role_name is required"));
        Assert.IsTrue(text.Contains("not a valid GUID"));
    }

    [TestMethod]
    public void ManageRole_UserWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "user");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("user_id is required"));
    }

    [TestMethod]
    public void ManageRole_AssignWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "assign", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("user_id is required"));
    }

    [TestMethod]
    public void ManageRole_AssignWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "assign", user_id: "user@test.com");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id is required"));
    }

    [TestMethod]
    public void ManageRole_UnassignWithoutUserId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "unassign", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("user_id is required"));
    }

    [TestMethod]
    public void ManageRole_CreateWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "create");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_name is required"));
    }

    [TestMethod]
    public void ManageRole_UpdateWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "update", role_name: "New Name");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id is required"));
    }

    [TestMethod]
    public void ManageRole_UpdateWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "update", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_name is required"));
    }

    [TestMethod]
    public void ManageRole_DeleteWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "delete");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id is required"));
    }

    [TestMethod]
    public void ManageRole_DeleteWithInvalidGuid_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "delete", role_id: "bad-guid");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("not a valid GUID"));
    }

    [TestMethod]
    public void ManageRole_CopyWithoutRoleId_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "copy", role_name: "New Role");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_id is required"));
    }

    [TestMethod]
    public void ManageRole_CopyWithoutRoleName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRoleTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_role(action: "copy", role_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("role_name is required"));
    }

    // ──────────────────────────────────────────────
    // Method existence verification
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageRole_HasAllExpectedParameters()
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
