using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleBranchCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRoleTool);

    [TestMethod]
    public void Constructor_RejectsMissingOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() =>
            new ManageRoleTool(null!, null!, DryRunTestHelpers.BlockedContext()));
        Assert.Throws<ArgumentNullException>(() =>
            new ManageRoleTool(null!, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    public async Task PrivateActionValidation_CoversAssignCreateUpdateDeleteCopyAndRestore()
    {
        var tool = NewTool();

        Assert.Contains("user_id (or team_id) is required", Text(Invoke(tool, "HandleAssign", null, null, null)));
        Assert.Contains("role_id is required", Text(Invoke(tool, "HandleAssign", "user@example.test", null, null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleAssign", "user@example.test", null, "bad")));
        Assert.Contains("user_id (or team_id) is required", Text(Invoke(tool, "HandleUnassign", null, null, null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleUnassign", "user@example.test", null, "bad")));

        Assert.Contains("role_name is required", Text(Invoke(tool, "HandleCreate", null, null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleCreate", "Test role", "bad")));

        Assert.Contains("role_id is required", Text(Invoke(tool, "HandleUpdate", null, "New name", null)));
        Assert.Contains("Nothing to update", Text(Invoke(tool, "HandleUpdate", Guid.NewGuid().ToString(), null, null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleUpdate", "bad", "New name", null)));

        Assert.Contains("role_id is required", Text(Invoke(tool, "HandleDelete", (object?)null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleDelete", "bad")));

        Assert.Contains("role_id is required", Text(Invoke(tool, "HandleCopy", null, "New role")));
        Assert.Contains("role_name is required", Text(Invoke(tool, "HandleCopy", Guid.NewGuid().ToString(), null)));
        Assert.Contains("not a valid GUID", Text(Invoke(tool, "HandleCopy", "bad", "New role")));

        Assert.Contains("backup_path is required", Text(Invoke(tool, "HandleRestore", (object?)null)));
        Assert.Contains("must be a .role.json", Text(Invoke(tool, "HandleRestore", "backup.json")));
        Assert.Contains("Backup file not found", Text(Invoke(tool, "HandleRestore", "missing.role.json")));

        await Task.CompletedTask;
    }

    [TestMethod]
    public void ApplyPrivilegeChange_CoversRemoveAddAndDepthUpdateBranches()
    {
        var tool = NewTool();
        var privilegeType = ToolType.GetNestedType("PrivilegeInfo", BindingFlags.NonPublic)!;
        var dictionaryType = typeof(Dictionary<,>).MakeGenericType(typeof(string), privilegeType);
        var current = (IDictionary)Activator.CreateInstance(dictionaryType)!;
        current["account|Read"] = NewPrivilege(privilegeType, "account", "Read", "User");

        var added = new List<string>();
        var updated = new List<string>();
        var removed = new List<string>();

        Invoke(tool, "ApplyPrivilegeChange", current, "account", "Read", "User", false, added, updated, removed);
        Assert.AreEqual(0, updated.Count);

        Invoke(tool, "ApplyPrivilegeChange", current, "account", "Read", "Organization", false, added, updated, removed);
        CollectionAssert.AreEqual(new[] { "account:Read=Organization" }, updated);

        Invoke(tool, "ApplyPrivilegeChange", current, "account", "Read", "None", true, added, updated, removed);
        CollectionAssert.AreEqual(new[] { "account:Read" }, removed);

        Invoke(tool, "ApplyPrivilegeChange", current, "account", "Write", "None", true, added, updated, removed);
        Assert.AreEqual(0, added.Count);
        Assert.IsFalse(current.Contains("account|Read"));
    }

    private static ManageRoleTool NewTool() =>
        new(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

    private static object NewPrivilege(Type type, string entity, string right, string depth)
    {
        var value = Activator.CreateInstance(type)!;
        type.GetProperty("EntityName")!.SetValue(value, entity);
        type.GetProperty("Right")!.SetValue(value, right);
        type.GetProperty("Depth")!.SetValue(value, depth);
        return value;
    }

    private static object Invoke(object target, string name, params object?[] args)
    {
        var method = ToolType.GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic);
        Assert.IsNotNull(method, $"Missing private method {name}");
        return method!.Invoke(target, args)!;
    }

    private static string Text(object value)
    {
        var result = (CallToolResult)value;
        if (result.Content == null || result.Content.Count == 0) return "";
        return result.Content[0] is TextContentBlock textBlock ? textBlock.Text ?? "" : "";
    }
}
