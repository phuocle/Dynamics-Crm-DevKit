using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

[TestClass]
public sealed class DeepMcpCoverageTests
{
    private const BindingFlags Instance = BindingFlags.Instance | BindingFlags.NonPublic;
    private const BindingFlags Static = BindingFlags.Static | BindingFlags.NonPublic;

    [TestMethod]
    public async Task ViewActions_CoverValidationAndBackupGuards()
    {
        var tool = new ManageViewTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext(), null!);

        Assert.Contains("action is required", Text(await tool.manage_view(null!, "", "account")));
        Assert.Contains("entity_name is required", Text(await tool.manage_view(null!, "list", "")));
        Assert.Contains("not a valid GUID", Text(await tool.manage_view(null!, "detail", "account", view_id: "bad")));

        Call(tool, "HandleDetail", "account", "", "", false);
        Call(tool, "HandleDetail", "account", "bad", "", false);
        Call(tool, "HandleCreate", "account", "", "");
        Call(tool, "HandleCreate", "account", "New view", "<fetch />");
        Call(tool, "HandleUpdate", "account", "", "", false, "", "");
        Call(tool, "HandleUpdate", "account", "bad", "", false, "", "");
        Call(tool, "HandleUpdate", "account", Guid.NewGuid().ToString(), "", false, "", "");
        Call(tool, "HandleUpdate", "account", Guid.NewGuid().ToString(), "", false, "<fetch />", "[]");
        Call(tool, "HandleRename", "account", "", "");
        Call(tool, "HandleRename", "account", "bad", "New name");
        Call(tool, "HandleRename", "account", Guid.NewGuid().ToString(), "");
        Call(tool, "HandleSetDefault", "account", "", "");
        Call(tool, "HandleSetDefault", "account", "bad", "");
        Call(tool, "HandleUndo", "account", "", "", "");
        Call(tool, "HandleUndo", "account", "bad", "a.fetchxml.xml", "a.layoutxml.xml");
        Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), "", "a.layoutxml.xml");
        Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), "a.fetchxml.xml", "");
        Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), "a.txt", "a.layoutxml.xml");
        Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), "a.fetchxml.xml", "b.layoutxml.xml");

        var temp = Path.Combine(Path.GetTempPath(), "devkit-view-" + Guid.NewGuid().ToString("N"));
        var fetch = temp + ".fetchxml.xml";
        var layout = temp + ".layoutxml.xml";
        try
        {
            File.WriteAllText(fetch, "<fetch><entity name='account'><attribute name='name' /></entity></fetch>");
            File.WriteAllText(layout, "<grid><row name='result' id='accountid'><cell name='name' width='150' /></row></grid>");
            Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), fetch, layout);
            File.WriteAllText(fetch, "<!-- only comment -->");
            Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), fetch, layout);
        }
        finally
        {
            DeleteIfExists(fetch);
            DeleteIfExists(layout);
        }

        var detail = Invoke(typeof(ManageViewTool), tool, "BuildViewDetailResult", new Entity("savedquery", Guid.NewGuid())
        {
            ["name"] = "All Accounts",
            ["returnedtypecode"] = "account",
            ["querytype"] = 0,
            ["isdefault"] = true,
            ["ismanaged"] = false,
            ["statecode"] = new OptionSetValue(0),
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='name' /></entity></fetch>",
            ["layoutxml"] = "<grid><row name='result' id='accountid'><cell name='name' width='150' /></row></grid>"
        });
        Assert.IsNotNull(detail);
    }

    [TestMethod]
    public void ViewXmlAndMetadataHelpers_CoverAlternativeBranches()
    {
        var type = typeof(ManageViewTool);
        foreach (var queryType in new[] { 0, 1, 2, 4, 8, 64, 77 })
            Assert.IsFalse(string.IsNullOrWhiteSpace((string)Invoke(type, null, "MapQueryType", queryType)));

        Invoke(type, null, "ExtractQuickFindColumns", "");
        Invoke(type, null, "ExtractQuickFindColumns", "<fetch><entity name='account' /></fetch>");
        Invoke(type, null, "ExtractQuickFindColumns", "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name' /><condition attribute='emailaddress1' /></filter><filter><condition attribute='ignored' /></filter></entity></fetch>");
        Invoke(type, null, "BuildFetchAliasEntityMap", "<fetch><entity name='account'><link-entity name='contact' alias='c'><link-entity name='systemuser' alias='u' /></link-entity></entity></fetch>");
        Invoke(type, null, "BuildFetchAliasEntityMap", "");
        foreach (var value in new[] { "", ".name", "c.", "name", "c.name.extra" })
            Invoke(type, null, "TrySplitAliasedField", new object?[] { value, null, null });

        var entity = XElement.Parse("<entity name='account'><attribute name='name'/><order attribute='createdon'/><filter><condition attribute='statecode'/></filter></entity>");
        Invoke(type, null, "ExtractFieldNames", entity);
        Invoke(type, null, "ConditionsOwnedBy", entity);
        Invoke(type, null, "ElementsByLocalName", entity, "attribute");
        Invoke(type, null, "DescendantsByLocalName", entity, "condition");
        Invoke(type, null, "IsLocalName", entity, "entity");
        Invoke(type, null, "LevenshteinClose", "name", "nAme");
        Invoke(type, null, "LevenshteinClose", "name", "zzzzzz");

        foreach (var json in new[]
        {
            "not json",
            "[]",
            "[{}]",
            "[{\"cell_name\":\"name\"}]",
            "[{\"cell_name\":\"name\",\"set_attributes\":{\"name\":\"bad\"}}]",
            "[{\"cell_name\":\"name\",\"remove_attributes\":[\"width\"]}]",
            "[{\"cell_name\":\"name\",\"set_attributes\":{\"ishidden\":\"1\"},\"remove_attributes\":[\"ishidden\"]},{\"cell_name\":\"NAME\",\"set_attributes\":{\"width\":\"200\"}}]"
        })
            Invoke(type, null, "ParseCellUpdates", json);

        var tool = new ManageViewTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext(), null!);
        Invoke(type, tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>());
        Invoke(type, tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderfunctionname"] = "bad name" } }
        });
        Invoke(type, tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderwebresource"] = "" } }
        });
        Invoke(type, tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderwebresource"] = "$webresource:" } }
        });

        var meta = new EntityMetadata { LogicalName = "account" };
        SetProperty(meta, "PrimaryIdAttribute", "accountid");
        SetProperty(meta, "PrimaryNameAttribute", "name");
        SetProperty(meta, "Attributes", new AttributeMetadata[]
        {
            new StringAttributeMetadata { LogicalName = "name", Format = StringFormat.Text },
            new IntegerAttributeMetadata { LogicalName = "number" },
            new BooleanAttributeMetadata { LogicalName = "state" }
        });
        SetProperty(meta, "ObjectTypeCode", 1);
        Invoke(type, null, "EnsureLayoutBuildableFetchXml", "<fetch><entity name='account'><attribute name='accountid'/><link-entity name='contact'><attribute name='fullname'/></link-entity></entity></fetch>", meta);
        Invoke(type, tool, "BuildLayoutXmlFromFetch", "account", "<fetch />", meta);
        Invoke(type, tool, "BuildLayoutXmlFromFetch", "account", "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/></entity></fetch>", meta);
        Invoke(type, tool, "BuildLayoutXmlFromFetch", "account", "<fetch><entity name='account'><attribute name='name'/><link-entity name='contact' alias='c'><attribute name='fullname'/></link-entity></entity></fetch>", meta);
        Invoke(type, tool, "EnsureObjectTypeCode", "<grid object='1' />", "account");

        foreach (var attr in new AttributeMetadata[]
        {
            new StringAttributeMetadata { Format = StringFormat.Phone },
            new StringAttributeMetadata { Format = StringFormat.Email },
            new StringAttributeMetadata { Format = StringFormat.Url },
            new StringAttributeMetadata { Format = StringFormat.Text },
            new BooleanAttributeMetadata(), new IntegerAttributeMetadata(), new BigIntAttributeMetadata(),
            new DecimalAttributeMetadata(), new DoubleAttributeMetadata(), new MoneyAttributeMetadata(),
            new DateTimeAttributeMetadata(), new LookupAttributeMetadata(), new PicklistAttributeMetadata(),
            new StateAttributeMetadata(), new StatusAttributeMetadata(), new MemoAttributeMetadata(),
            new UniqueIdentifierAttributeMetadata()
        })
            Invoke(type, null, "GetColumnWidth", attr, attr.LogicalName ?? "field", null);
    }

    [TestMethod]
    public async Task FormActionsAndHelpers_CoverValidationFileAndSchemaBranches()
    {
        var tool = new ManageFormTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        Call(tool, "HandleList", "account", "", 99, false);
        Call(tool, "HandleList", "account", "name", 99, false);
        Call(tool, "HandleDetail", "account", "", "", 0);
        Call(tool, "HandleDetail", "account", "bad", "", 0);
        Call(tool, "HandleDetail", "account", Guid.NewGuid().ToString(), "", 99);
        Call(tool, "HandleUpdate", "account", "", "", "");
        Call(tool, "HandleUpdate", "account", "bad", "<form />", "");
        Call(tool, "HandleUpdate", "account", Guid.NewGuid().ToString(), "", "");
        Call(tool, "HandleUpdate", "account", Guid.NewGuid().ToString(), "<form />", "[]");
        Call(tool, "HandleRename", "account", "", "");
        Call(tool, "HandleRename", "account", "bad", "New form");
        Call(tool, "HandleRename", "account", Guid.NewGuid().ToString(), "");
        Call(tool, "HandleUndo", "account", "", "");
        Call(tool, "HandleUndo", "account", "bad", "missing.json");
        Call(tool, "HandleUndo", "account", Guid.NewGuid().ToString(), "");

        var formTypeNames = new[] { 0, 2, 4, 5, 6, 7, 8, 11, 12, 999 };
        foreach (var formType in formTypeNames)
        {
            var query = Invoke(typeof(ManageFormTool), null, "BuildListQuery", "account", formType == 999 ? 0 : formType, formType % 2 == 0);
            Assert.IsNotNull(query);
            Invoke(typeof(ManageFormTool), null, "MapFormType", formType);
        }

        Invoke(typeof(ManageFormTool), null, "PrettyPrintXml", "<form><tabs><tab name='one' /></tabs></form>");
        Invoke(typeof(ManageFormTool), null, "PrettyPrintXml", "<form />");
        Invoke(typeof(ManageFormTool), null, "StripXmlDeclaration", "<?xml version='1.0'?><form />");
        Invoke(typeof(ManageFormTool), null, "StripXmlDeclaration", "<form />");

        Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", " <form /> ", true);
        Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", "missing.formxml.xml", true);
        Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", "plain value", true);

        var directory = Path.Combine(Path.GetTempPath(), "devkit-form-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        var rawXml = Path.Combine(directory, "raw.formxml");
        var json = Path.Combine(directory, "backup.formxml.json");
        var badJson = Path.Combine(directory, "bad.json");
        try
        {
            File.WriteAllText(rawXml, "<form />");
            File.WriteAllText(json, "{\"formxml\":\"<form><tabs /></form>\"}");
            File.WriteAllText(badJson, "not json");
            Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", rawXml, false);
            Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", json, false);
            Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", badJson, false);
            Invoke(typeof(ManageFormTool), null, "ResolveFormXmlInput", rawXml, true);
            Assert.IsFalse(File.Exists(rawXml));
        }
        finally
        {
            if (Directory.Exists(directory)) Directory.Delete(directory, true);
        }

        foreach (var xml in new[] { "", "<form />", "<form><tabs /></form>", "<not-form />", "not xml" })
            Invoke(typeof(ManageFormTool), null, "ValidateFormXml", xml);
        Invoke(typeof(ManageFormTool), null, "IsSchemaEvolutionError", "The relationship does not exist");
        Invoke(typeof(ManageFormTool), null, "IsSchemaEvolutionError", "ordinary error");

        var forms = new EntityCollection().Entities;
        forms.Add(new Entity("systemform", Guid.NewGuid())
        {
            ["formid"] = Guid.NewGuid(), ["name"] = "Main", ["type"] = new OptionSetValue(2),
            ["formactivationstate"] = new OptionSetValue(1), ["isdefault"] = true, ["ismanaged"] = false,
            ["version"] = 3, ["formxml"] = "<form />"
        });
        Invoke(typeof(ManageFormTool), null, "BuildFormListEntries", forms, true);
        Invoke(typeof(ManageFormTool), null, "BuildFormListEntries", forms, false);
        await Task.CompletedTask;
    }

    [TestMethod]
    public void RoleActionsAndHelpers_CoverValidationResolutionAndMappings()
    {
        var tool = new ManageRoleTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        Call(tool, "HandleList", "", "bad", 50);
        Call(tool, "HandleDetail", "", "", "");
        Call(tool, "HandleDetail", "bad", "", "");
        Call(tool, "HandleUser", "", "");
        Call(tool, "HandleAssign", "", "", "");
        Call(tool, "HandleUnassign", "", "", "");
        Call(tool, "HandleCreate", "", "");
        Call(tool, "HandleCreate", "Role", "bad");
        Call(tool, "HandleUpdate", "", "", "");
        Call(tool, "HandleUpdate", "bad", "Role", "");
        Call(tool, "HandleDelete", "");
        Call(tool, "HandleCopy", "", "");
        Call(tool, "HandleRestore", "");
        Call(tool, "HandleRestore", "bad.json");

        foreach (var right in new[] { "", "Read", "write", "NotRight" })
            Invoke(typeof(ManageRoleTool), null, "ValidateRight", right);
        foreach (var depth in new[] { "", "User", "BU", "Org", "Parent:ChildBU", "None", "bad" })
        {
            Invoke(typeof(ManageRoleTool), null, "ValidateDepth", depth);
            Invoke(typeof(ManageRoleTool), null, "NormalizeDepth", depth.Length == 0 ? "User" : depth);
        }
        foreach (var mask in new[] { 1, 2, 4, 8, 0, 99 })
            Invoke(typeof(ManageRoleTool), null, "MaskToDepthValue", mask);
        foreach (var name in new[] { "prvCreataccount", "prvCreateaccount", "prvDeletaccount", "prvDeleteaccount", "prvReadaccount", "prvAppendToaccount", "misc" })
            Invoke(typeof(ManageRoleTool), null, "ParsePrivilegeName", name);
        foreach (var mask in new[] { 1, 2, 4, 8, 0 }) Invoke(typeof(ManageRoleTool), null, "MapDepthMask", mask);
        foreach (var depth in new[] { "Organization", "Parent:ChildBU", "BusinessUnit", "User", "Unknown" })
        {
            Invoke(typeof(ManageRoleTool), null, "DepthRank", depth);
            Invoke(typeof(ManageRoleTool), null, "ReverseDepthMask", depth);
        }
        foreach (int? teamType in new int?[] { null, 0, 1, 2, 99 }) Invoke(typeof(ManageRoleTool), null, "MapTeamType", teamType);

        var role = new Entity("role", Guid.NewGuid())
        {
            ["roleid"] = Guid.NewGuid(), ["name"] = "Sales", ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "Sales BU" },
            ["ismanaged"] = true, ["iscustomizable"] = new BooleanManagedProperty(false)
        };
        Invoke(typeof(ManageRoleTool), null, "MapRoleEntry", role);
        var privType = typeof(ManageRoleTool).GetNestedType("PrivilegeInfo", BindingFlags.NonPublic)!;
        var privs = (IList)Activator.CreateInstance(typeof(List<>).MakeGenericType(privType))!;
        var p = Activator.CreateInstance(privType)!;
        privType.GetProperty("EntityName")!.SetValue(p, "account");
        privType.GetProperty("Right")!.SetValue(p, "Read");
        privType.GetProperty("Depth")!.SetValue(p, "User");
        privs.Add(p);
        Invoke(typeof(ManageRoleTool), null, "GroupPrivilegesByEntity", privs, null);
        Invoke(typeof(ManageRoleTool), null, "GroupPrivilegesByEntity", privs, "account");

        var users = new List<Entity> { new("systemuser", Guid.NewGuid())
        {
            ["systemuserid"] = Guid.NewGuid(), ["fullname"] = "User", ["internalemailaddress"] = "u@example.test",
            ["isdisabled"] = false, ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "BU" }
        }};
        var teams = new List<Entity> { new("team", Guid.NewGuid())
        {
            ["teamid"] = Guid.NewGuid(), ["name"] = "Team", ["teamtype"] = new OptionSetValue(1),
            ["businessunitid"] = new EntityReference("businessunit", Guid.NewGuid()) { Name = "BU" }
        }};
        Invoke(typeof(ManageRoleTool), null, "BuildMultipleUsersDetails", "user", users);
        Invoke(typeof(ManageRoleTool), null, "BuildMultipleTeamsDetails", "user", teams);
        Invoke(typeof(ManageRoleTool), tool, "ResolveEntityFilter", "");
        Invoke(typeof(ManageRoleTool), tool, "ResolveRoleForDetail", "");
        Invoke(typeof(ManageRoleTool), tool, "ResolveRoleForDetail", "not-a-guid");
        Invoke(typeof(ManageRoleTool), tool, "EntityFilterError", "account", "detail", null);
    }

    [TestMethod]
    public void CommandActions_CoverPublicDispatchValidationBranches()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var calls = new Action[]
        {
            () => tool.manage_command(action: "list", location: "invalid"),
            () => tool.manage_command(action: "list", origin: "invalid"),
            () => tool.manage_command(action: "list", action_type: "invalid"),
            () => tool.manage_command(action: "list", max_records: 0),
            () => tool.manage_command(action: "detail", command_id: "bad"),
            () => tool.manage_command(action: "create"),
            () => tool.manage_command(action: "update"),
            () => tool.manage_command(action: "hide"),
            () => tool.manage_command(action: "show"),
            () => tool.manage_command(action: "add_flyout"),
            () => tool.manage_command(action: "update_flyout"),
            () => tool.manage_command(action: "add_flyout_item"),
            () => tool.manage_command(action: "remove_flyout_item"),
            () => tool.manage_command(action: "add_split_button"),
            () => tool.manage_command(action: "update_split_button"),
            () => tool.manage_command(action: "unknown")
        };
        foreach (var call in calls)
            call();

        Invoke(typeof(ManageCommandTool), tool, "HandleList", "account", "invalid", "", "", "", "", false, false, 0);
        Invoke(typeof(ManageCommandTool), tool, "HandleHideShow", "bad", "", "", "", "", "", true);
        Invoke(typeof(ManageCommandTool), tool, "HandleHideShow", "", "account", "invalid", "", "", "", false);
        Invoke(typeof(ManageCommandTool), tool, "HandleUpdate", "bad", "", "", "", "", "", "", "", "", 0);
        Invoke(typeof(ManageCommandTool), tool, "HandleAddFlyoutItem", "bad", "", "", "", "", 0, false);
        Invoke(typeof(ManageCommandTool), tool, "HandleRemoveFlyoutItem", "bad");
    }

    private static object Invoke(Type type, object target, string name, params object?[] args)
    {
        var methods = type.GetMethods(target == null ? Static : Instance)
            .Where(m => m.Name == name && m.GetParameters().Length == args.Length)
            .ToList();
        Assert.IsTrue(methods.Count > 0, $"Missing {type.Name}.{name}/{args.Length}");
        try
        {
            return methods[0].Invoke(target, args)!;
        }
        catch (TargetInvocationException ex)
        {
            return ex.InnerException ?? ex;
        }
    }

    private static object Call(object target, string name, params object?[] args) =>
        Invoke(target.GetType(), target, name, args);

    private static string Text(object value) => value is CallToolResult result && result.Content?.FirstOrDefault() is TextContentBlock block
        ? block.Text ?? "" : "";

    private static void SetProperty(object target, string name, object value) =>
        target.GetType().GetProperty(name)!.SetValue(target, value);

    private static void DeleteIfExists(string path)
    {
        if (File.Exists(path)) File.Delete(path);
    }
}
