using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRelationship;

[TestClass]
public class ManageRelationshipInternalsCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRelationshipTool);

    [TestMethod]
    public void CascadeHelpers_CoverAllCascadeTypesAndOverrides()
    {
        foreach (var value in new[] { "Cascade", "Active", "UserOwned", "NoCascade", "RemoveLink", "Restrict" })
            Assert.IsNotNull(Invoke("ParseCascadeType", value));
        Assert.IsNull(Invoke("ParseCascadeType", " "));

        var config = (CascadeConfiguration)Invoke("BuildCascadeConfiguration", "Parental", "Active", "UserOwned", "NoCascade", "RemoveLink", "Restrict", "Cascade")!;
        Assert.AreEqual(CascadeType.Active, config.Assign);
        Assert.AreEqual(CascadeType.UserOwned, config.Delete);
        Assert.AreEqual(CascadeType.NoCascade, config.Merge);
        Assert.AreEqual(CascadeType.RemoveLink, config.Reparent);
        Assert.AreEqual(CascadeType.Restrict, config.Share);
        Assert.AreEqual(CascadeType.Cascade, config.Unshare);

        Assert.AreEqual(AssociatedMenuBehavior.UseCollectionName, Invoke("ParseMenuBehavior", "UseCollectionName"));
        Assert.AreEqual(AssociatedMenuBehavior.UseLabel, Invoke("ParseMenuBehavior", "UseLabel"));
        Assert.AreEqual(AssociatedMenuBehavior.DoNotDisplay, Invoke("ParseMenuBehavior", "DoNotDisplay"));
        Assert.AreEqual(AssociatedMenuGroup.Details, Invoke("ParseMenuGroup", "Details"));
        Assert.AreEqual(AssociatedMenuGroup.Sales, Invoke("ParseMenuGroup", "Sales"));
        Assert.AreEqual(AssociatedMenuGroup.Service, Invoke("ParseMenuGroup", "Service"));
        Assert.AreEqual(AssociatedMenuGroup.Marketing, Invoke("ParseMenuGroup", "Marketing"));
    }

    [TestMethod]
    public void RelationshipNamingHelpers_CoverPrefixAndNormalizationBranches()
    {
        Assert.AreEqual("invoice", Invoke("StripPublisherPrefix", "v4_invoice", "v4"));
        Assert.AreEqual("invoice", Invoke("StripPublisherPrefix", "invoice", "v4"));
        Assert.AreEqual("invoice", Invoke("StripPublisherPrefix", "V4_Invoice", "V4"));
        Assert.IsNull(Invoke("StripPublisherPrefix", null!, "v4"));
        Assert.AreEqual(" invoice ", Invoke("StripPublisherPrefix", " invoice ", " "));

        var names = ((string SchemaName, string LogicalName))Invoke("BuildLookupAttributeNames", "Invoice Number", "v4")!;
        Assert.AreEqual("v4_InvoiceNumber", names.SchemaName);
        Assert.AreEqual("v4_invoicenumber", names.LogicalName);
        Assert.AreEqual("v4_invoice_invoiceline", Invoke("BuildRelationshipName", "v4", "v4_invoice", "v4_invoiceline"));
        Assert.AreEqual("v4_account_contact", Invoke("BuildRelationshipName", "v4", "account", "contact"));
    }

    [TestMethod]
    public void RelationshipEntryValidation_CoversActionsWithoutNetwork()
    {
        var tool = new ManageRelationshipTool(
            (Microsoft.PowerPlatform.Dataverse.Client.ServiceClient)System.Runtime.CompilerServices.RuntimeHelpers.GetUninitializedObject(typeof(Microsoft.PowerPlatform.Dataverse.Client.ServiceClient)),
            new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

        var empty = tool.manage_relationship(action: "");
        StringAssert.Contains(empty.GetText(), "action is required");
        var invalid = tool.manage_relationship(action: "other");
        StringAssert.Contains(invalid.GetText(), "Invalid action");
        StringAssert.Contains(tool.manage_relationship(action: "create_1n").GetText(), "referenced_entity is required");
        StringAssert.Contains(tool.manage_relationship(action: "create_nn").GetText(), "entity1 is required");
        StringAssert.Contains(tool.manage_relationship(action: "update").GetText(), "relationship_name is required");
        StringAssert.Contains(tool.manage_relationship(action: "delete").GetText(), "relationship_name is required");
        StringAssert.Contains(tool.manage_relationship(action: "add_target").GetText(), "entity_name is required");
        StringAssert.Contains(tool.manage_relationship(action: "remove_target").GetText(), "entity_name is required");
    }

    [TestMethod]
    public void RelationshipConstructor_RejectsMissingRequiredDependencies()
    {
        var service = (Microsoft.PowerPlatform.Dataverse.Client.ServiceClient)System.Runtime.CompilerServices.RuntimeHelpers.GetUninitializedObject(typeof(Microsoft.PowerPlatform.Dataverse.Client.ServiceClient));
        AssertArgumentNull(() => new ManageRelationshipTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext()));
        AssertArgumentNull(() => new ManageRelationshipTool(service, null!, DryRunTestHelpers.BlockedContext()));
        AssertArgumentNull(() => new ManageRelationshipTool(service, new McpDryRunOptions(), null!));
    }

    private static void AssertArgumentNull(Action action)
    {
        try
        {
            action();
            Assert.Fail("Expected ArgumentNullException.");
        }
        catch (ArgumentNullException)
        {
        }
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
