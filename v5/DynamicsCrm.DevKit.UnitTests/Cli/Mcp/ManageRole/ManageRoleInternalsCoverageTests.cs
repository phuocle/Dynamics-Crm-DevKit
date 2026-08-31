using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public class ManageRoleInternalsCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRoleTool);

    [TestMethod]
    public void PrivilegeValidationAndDepthHelpers_CoverAllMappings()
    {
        Assert.IsNull(Invoke("ValidateRight", "Read"));
        Assert.IsNull(Invoke("ValidateRight", "share"));
        Assert.IsNotNull(Invoke("ValidateRight", "*"));
        Assert.IsNotNull(Invoke("ValidateRight", ""));
        Assert.IsNull(Invoke("ValidateDepth", "User"));
        Assert.IsNull(Invoke("ValidateDepth", "bu"));
        Assert.IsNull(Invoke("ValidateDepth", "Org"));
        Assert.IsNull(Invoke("ValidateDepth", "None"));
        Assert.IsNotNull(Invoke("ValidateDepth", "bad"));

        Assert.AreEqual("BusinessUnit", Invoke("NormalizeDepth", "bu"));
        Assert.AreEqual("Organization", Invoke("NormalizeDepth", "ORG"));
        Assert.AreEqual("Parent:childbu", Invoke("NormalizeDepth", "parent:childbu"));
        Assert.AreEqual(0, Invoke("MaskToDepthValue", 1));
        Assert.AreEqual(1, Invoke("MaskToDepthValue", 2));
        Assert.AreEqual(2, Invoke("MaskToDepthValue", 4));
        Assert.AreEqual(3, Invoke("MaskToDepthValue", 8));
        Assert.AreEqual(0, Invoke("MaskToDepthValue", 99));
        Assert.AreEqual(0, Invoke("ReverseDepthMask", "User"));
        Assert.AreEqual(1, Invoke("ReverseDepthMask", "BusinessUnit"));
        Assert.AreEqual(2, Invoke("ReverseDepthMask", "Parent:ChildBU"));
        Assert.AreEqual(3, Invoke("ReverseDepthMask", "Organization"));
        Assert.AreEqual(0, Invoke("ReverseDepthMask", "Unknown"));
    }

    [TestMethod]
    public void PrivilegeAndRoleMappingHelpers_CoverModelBranches()
    {
        foreach (var pair in new[]
        {
            ("prvWriteAccount", "Write", "account"),
            ("prvAppendToContact", "AppendTo", "contact"),
            ("prvAssignTeam", "Assign", "team"),
            ("prvShareCase", "Share", "case"),
            ("prvDeleteEmail", "Delete", "email")
        })
        {
            var result = ((string right, string entity))Invoke("ParsePrivilegeName", pair.Item1)!;
            Assert.AreEqual(pair.Item2, result.right);
            Assert.AreEqual(pair.Item3, result.entity);
        }

        Assert.AreEqual("Owner", Invoke("MapTeamType", 0));
        Assert.AreEqual("Access", Invoke("MapTeamType", 1));
        Assert.AreEqual("Group", Invoke("MapTeamType", 2));
        Assert.IsNull(Invoke("MapTeamType", 99));
        Assert.IsNull(Invoke("MapTeamType", (object?)null));
        Assert.AreEqual(4, Invoke("DepthRank", "Organization"));
        Assert.AreEqual(3, Invoke("DepthRank", "Parent:ChildBU"));
        Assert.AreEqual(2, Invoke("DepthRank", "BusinessUnit"));
        Assert.AreEqual(1, Invoke("DepthRank", "User"));
        Assert.AreEqual(0, Invoke("DepthRank", "other"));
        Assert.AreEqual("Unknown(99)", Invoke("MapDepthMask", 99));
    }

    [TestMethod]
    public void RoleAndPrivilegeProjectionHelpers_CoverOptionalAttributes()
    {
        var id = Guid.NewGuid();
        var role = new Entity("role", id)
        {
            ["roleid"] = id,
            ["name"] = "Sales",
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Sales BU" },
            ["ismanaged"] = true,
            ["iscustomizable"] = new BooleanManagedProperty(false)
        };
        var mapped = (RoleEntry)Invoke("MapRoleEntry", role)!;
        Assert.AreEqual(id.ToString(), mapped.RoleId);
        Assert.AreEqual("Sales", mapped.Name);
        Assert.AreEqual("Sales BU", mapped.BusinessUnit);
        Assert.IsTrue(mapped.IsManaged);
        Assert.IsFalse(mapped.IsCustomizable);

        var privType = ToolType.GetNestedType("PrivilegeInfo", BindingFlags.NonPublic)!;
        var listType = typeof(List<>).MakeGenericType(privType);
        var list = (IList)Activator.CreateInstance(listType)!;
        list.Add(NewPrivilege(privType, "account", "Read", "User"));
        list.Add(NewPrivilege(privType, "account", "Write", "Organization"));
        list.Add(NewPrivilege(privType, "contact", "Read", "BusinessUnit"));
        var grouped = (IDictionary)Invoke("GroupPrivilegesByEntity", list, "account")!;
        Assert.AreEqual(1, grouped.Count);
        Assert.IsTrue(grouped.Contains("account"));
        var all = (IDictionary)Invoke("GroupPrivilegesByEntity", list, "")!;
        Assert.AreEqual(2, all.Count);
    }

    [TestMethod]
    public void AliasedValueAndMultipleEntityDetails_CoverNullAndValueBranches()
    {
        var entity = new Entity("x")
        {
            ["alias"] = new AliasedValue("x", "alias", "value"),
            ["wrong"] = new AliasedValue("x", "wrong", 42)
        };
        var getAliased = ToolType.GetMethod("GetAliasedValue", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.AreEqual("value", getAliased.MakeGenericMethod(typeof(string)).Invoke(null, new object[] { entity, "alias" }));
        Assert.IsNull(getAliased.MakeGenericMethod(typeof(string)).Invoke(null, new object[] { entity, "wrong" }));
        Assert.IsNull(getAliased.MakeGenericMethod(typeof(string)).Invoke(null, new object[] { entity, "missing" }));

        var users = new List<Entity>
        {
            new("systemuser", Guid.NewGuid()) { ["systemuserid"] = Guid.NewGuid(), ["fullname"] = "Active", ["internalemailaddress"] = "a@x", ["isdisabled"] = false, ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "BU" } },
            new("systemuser", Guid.NewGuid()) { ["systemuserid"] = Guid.NewGuid(), ["isdisabled"] = true }
        };
        var userDetails = Invoke("BuildMultipleUsersDetails", "user", users)!;
        StringAssert.Contains(JsonSerializer.Serialize(userDetails), "Disabled");
        StringAssert.Contains(JsonSerializer.Serialize(userDetails), "Active");

        var teams = new List<Entity>
        {
            new("team", Guid.NewGuid()) { ["teamid"] = Guid.NewGuid(), ["name"] = "Owner", ["teamtype"] = new OptionSetValue(0) },
            new("team", Guid.NewGuid()) { ["teamid"] = Guid.NewGuid(), ["name"] = "Unknown", ["teamtype"] = new OptionSetValue(99) }
        };
        var teamDetails = Invoke("BuildMultipleTeamsDetails", "assign", teams)!;
        StringAssert.Contains(JsonSerializer.Serialize(teamDetails), "Owner");
        StringAssert.Contains(JsonSerializer.Serialize(teamDetails), "Unknown");
    }

    [TestMethod]
    public void ManageRole_EntryValidation_CoversReadAndMutationGates()
    {
        var tool = new ManageRoleTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var empty = tool.manage_role(null!, action: "").GetAwaiter().GetResult();
        Assert.IsTrue(empty.IsError);
        StringAssert.Contains(empty.GetText(), "action is required");

        var list = tool.manage_role(null!, action: "list").GetAwaiter().GetResult();
        Assert.IsTrue(list.IsError);
        var invalid = tool.manage_role(null!, action: "not-real").GetAwaiter().GetResult();
        StringAssert.Contains(invalid.GetText(), "Invalid action");

        foreach (var action in new[] { "assign", "unassign", "create", "update", "delete", "copy", "restore" })
        {
            var result = tool.manage_role(null!, action: action).GetAwaiter().GetResult();
            Assert.IsTrue(result.IsError);
            StringAssert.Contains(result.GetText(), "System Administrator");
        }
    }

    private static object NewPrivilege(Type type, string entity, string right, string depth)
    {
        var value = Activator.CreateInstance(type)!;
        type.GetProperty("EntityName")!.SetValue(value, entity);
        type.GetProperty("Right")!.SetValue(value, right);
        type.GetProperty("Depth")!.SetValue(value, depth);
        return value;
    }

    private static object? Invoke(string name, params object?[] args)
    {
        var methods = ToolType.GetMethods(BindingFlags.NonPublic | BindingFlags.Static)
            .Where(m => m.Name == name && m.GetParameters().Length == args.Length)
            .ToList();
        var method = methods.Count == 1
            ? methods[0]
            : methods.Single(m => m.GetParameters().Select(p => p.ParameterType).Zip(args, (t, a) => a == null || t.IsInstanceOfType(a)).All(x => x));
        return method.Invoke(null, args);
    }
}
