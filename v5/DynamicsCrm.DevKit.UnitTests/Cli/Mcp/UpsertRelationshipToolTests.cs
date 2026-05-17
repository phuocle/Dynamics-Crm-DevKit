using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class UpsertRelationshipToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool);

    // ──────────────────────────────────────────────
    // ParseCascadeType
    // ──────────────────────────────────────────────

    private static CascadeType? ParseCascadeType(string value)
    {
        var method = ToolType.GetMethod("ParseCascadeType", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        return (CascadeType?)method.Invoke(null, new object[] { value });
    }

    [TestMethod]
    public void ParseCascadeType_Cascade_ReturnsCascade()
    {
        Assert.AreEqual(CascadeType.Cascade, ParseCascadeType("Cascade"));
    }

    [TestMethod]
    public void ParseCascadeType_Active_ReturnsActive()
    {
        Assert.AreEqual(CascadeType.Active, ParseCascadeType("Active"));
    }

    [TestMethod]
    public void ParseCascadeType_UserOwned_ReturnsUserOwned()
    {
        Assert.AreEqual(CascadeType.UserOwned, ParseCascadeType("UserOwned"));
    }

    [TestMethod]
    public void ParseCascadeType_NoCascade_ReturnsNoCascade()
    {
        Assert.AreEqual(CascadeType.NoCascade, ParseCascadeType("NoCascade"));
    }

    [TestMethod]
    public void ParseCascadeType_RemoveLink_ReturnsRemoveLink()
    {
        Assert.AreEqual(CascadeType.RemoveLink, ParseCascadeType("RemoveLink"));
    }

    [TestMethod]
    public void ParseCascadeType_Restrict_ReturnsRestrict()
    {
        Assert.AreEqual(CascadeType.Restrict, ParseCascadeType("Restrict"));
    }

    [TestMethod]
    public void ParseCascadeType_CaseInsensitive_Works()
    {
        Assert.AreEqual(CascadeType.Cascade, ParseCascadeType("CASCADE"));
        Assert.AreEqual(CascadeType.NoCascade, ParseCascadeType("nocascade"));
    }

    [TestMethod]
    public void ParseCascadeType_Invalid_ThrowsArgumentException()
    {
        try { ParseCascadeType("invalid"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex) { Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException)); }
    }

    [TestMethod]
    public void ParseCascadeType_Empty_ReturnsNull()
    {
        Assert.IsNull(ParseCascadeType(""));
        Assert.IsNull(ParseCascadeType("  "));
    }

    // ──────────────────────────────────────────────
    // BuildCascadeConfiguration
    // ──────────────────────────────────────────────

    private static CascadeConfiguration BuildCascadeConfiguration(string preset,
        string assign = "", string delete = "", string merge = "", string reparent = "", string share = "", string unshare = "")
    {
        var method = ToolType.GetMethod("BuildCascadeConfiguration", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        return (CascadeConfiguration)method.Invoke(null, new object[] { preset, assign, delete, merge, reparent, share, unshare })!;
    }

    [TestMethod]
    public void BuildCascadeConfiguration_Parental_AllCascade()
    {
        var config = BuildCascadeConfiguration("Parental");
        Assert.AreEqual(CascadeType.Cascade, config.Assign);
        Assert.AreEqual(CascadeType.Cascade, config.Delete);
        Assert.AreEqual(CascadeType.Cascade, config.Merge);
        Assert.AreEqual(CascadeType.Cascade, config.Reparent);
        Assert.AreEqual(CascadeType.Cascade, config.Share);
        Assert.AreEqual(CascadeType.Cascade, config.Unshare);
    }

    [TestMethod]
    public void BuildCascadeConfiguration_Referential_DefaultBehavior()
    {
        var config = BuildCascadeConfiguration("Referential");
        Assert.AreEqual(CascadeType.NoCascade, config.Assign);
        Assert.AreEqual(CascadeType.RemoveLink, config.Delete);
        Assert.AreEqual(CascadeType.NoCascade, config.Merge);
        Assert.AreEqual(CascadeType.NoCascade, config.Reparent);
        Assert.AreEqual(CascadeType.NoCascade, config.Share);
        Assert.AreEqual(CascadeType.NoCascade, config.Unshare);
    }

    [TestMethod]
    public void BuildCascadeConfiguration_ReferentialRestrictDelete_RestrictOnDelete()
    {
        var config = BuildCascadeConfiguration("ReferentialRestrictDelete");
        Assert.AreEqual(CascadeType.NoCascade, config.Assign);
        Assert.AreEqual(CascadeType.Restrict, config.Delete);
        Assert.AreEqual(CascadeType.NoCascade, config.Merge);
    }

    [TestMethod]
    public void BuildCascadeConfiguration_EmptyPreset_DefaultsToReferential()
    {
        var config = BuildCascadeConfiguration("");
        Assert.AreEqual(CascadeType.NoCascade, config.Assign);
        Assert.AreEqual(CascadeType.RemoveLink, config.Delete);
    }

    [TestMethod]
    public void BuildCascadeConfiguration_IndividualOverrides_ApplyOnTop()
    {
        var config = BuildCascadeConfiguration("Referential", delete: "Restrict", assign: "Cascade");
        Assert.AreEqual(CascadeType.Cascade, config.Assign);
        Assert.AreEqual(CascadeType.Restrict, config.Delete);
        Assert.AreEqual(CascadeType.NoCascade, config.Merge); // unchanged from preset
    }

    // ──────────────────────────────────────────────
    // ParseMenuBehavior
    // ──────────────────────────────────────────────

    private static AssociatedMenuBehavior ParseMenuBehavior(string value)
    {
        var method = ToolType.GetMethod("ParseMenuBehavior", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        return (AssociatedMenuBehavior)method.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void ParseMenuBehavior_UseLabel_ReturnsUseLabel()
    {
        Assert.AreEqual(AssociatedMenuBehavior.UseLabel, ParseMenuBehavior("UseLabel"));
    }

    [TestMethod]
    public void ParseMenuBehavior_DoNotDisplay_ReturnsDoNotDisplay()
    {
        Assert.AreEqual(AssociatedMenuBehavior.DoNotDisplay, ParseMenuBehavior("DoNotDisplay"));
    }

    [TestMethod]
    public void ParseMenuBehavior_Empty_DefaultsToUseCollectionName()
    {
        Assert.AreEqual(AssociatedMenuBehavior.UseCollectionName, ParseMenuBehavior(""));
    }

    [TestMethod]
    public void ParseMenuBehavior_Invalid_ThrowsArgumentException()
    {
        try { ParseMenuBehavior("something"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex) { Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException)); }
    }

    // ──────────────────────────────────────────────
    // ParseMenuGroup
    // ──────────────────────────────────────────────

    private static AssociatedMenuGroup ParseMenuGroup(string value)
    {
        var method = ToolType.GetMethod("ParseMenuGroup", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        return (AssociatedMenuGroup)method.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void ParseMenuGroup_Sales_ReturnsSales()
    {
        Assert.AreEqual(AssociatedMenuGroup.Sales, ParseMenuGroup("Sales"));
    }

    [TestMethod]
    public void ParseMenuGroup_Service_ReturnsService()
    {
        Assert.AreEqual(AssociatedMenuGroup.Service, ParseMenuGroup("Service"));
    }

    [TestMethod]
    public void ParseMenuGroup_Marketing_ReturnsMarketing()
    {
        Assert.AreEqual(AssociatedMenuGroup.Marketing, ParseMenuGroup("Marketing"));
    }

    [TestMethod]
    public void ParseMenuGroup_Empty_DefaultsToDetails()
    {
        Assert.AreEqual(AssociatedMenuGroup.Details, ParseMenuGroup(""));
    }

    // ──────────────────────────────────────────────
    // Action parameter validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void StripPublisherPrefix_WhenLogicalNameAlreadyHasPrefix_RemovesIt()
    {
        var method = ToolType.GetMethod("StripPublisherPrefix", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        var result = (string)method.Invoke(null, new object[] { "v4_invoice", "v4" })!;

        Assert.AreEqual("invoice", result);
    }

    [TestMethod]
    public void BuildLookupAttributeNames_FromDisplayName_ReturnsSchemaAndLogicalNames()
    {
        var method = ToolType.GetMethod("BuildLookupAttributeNames", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        var result = ((string SchemaName, string LogicalName))method.Invoke(null, new object[] { "Invoice", "v4" })!;

        Assert.AreEqual("v4_Invoice", result.SchemaName);
        Assert.AreEqual("v4_invoice", result.LogicalName);
    }

    [TestMethod]
    public void BuildRelationshipName_WhenEntitiesAlreadyHavePrefix_DoesNotDuplicatePrefix()
    {
        var method = ToolType.GetMethod("BuildRelationshipName", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;
        var result = (string)method.Invoke(null, new object[] { "v4", "v4_invoice", "v4_invoiceline" })!;

        Assert.AreEqual("v4_invoice_invoiceline", result);
    }

    [TestMethod]
    public void UpsertRelationship_EmptyAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("action is required"));
    }

    [TestMethod]
    public void UpsertRelationship_InvalidAction_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "invalid_action");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid action"));
    }

    [TestMethod]
    public void UpsertRelationship_Create1N_MissingReferencedEntity_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "create_1n", referencing_entity: "contact");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("referenced_entity is required"));
    }

    [TestMethod]
    public void UpsertRelationship_Create1N_MissingReferencingEntity_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "create_1n", referenced_entity: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("referencing_entity is required"));
    }

    [TestMethod]
    public void UpsertRelationship_CreateNN_MissingEntity1_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "create_nn", entity2: "contact");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity1 is required"));
    }

    [TestMethod]
    public void UpsertRelationship_CreateNN_MissingEntity2_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "create_nn", entity1: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity2 is required"));
    }

    [TestMethod]
    public void UpsertRelationship_Update_MissingRelationshipName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "update");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("relationship_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_Delete_MissingRelationshipName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "delete");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("relationship_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_AddTarget_MissingEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "add_target", attribute_name: "customerid", referenced_entity: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_AddTarget_MissingAttributeName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "add_target", entity_name: "contact", referenced_entity: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("attribute_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_AddTarget_MissingReferencedEntity_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "add_target", entity_name: "contact", attribute_name: "customerid");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("referenced_entity is required"));
    }

    [TestMethod]
    public void UpsertRelationship_RemoveTarget_MissingEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "remove_target", attribute_name: "customerid", referenced_entity: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_RemoveTarget_MissingAttributeName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "remove_target", entity_name: "contact", referenced_entity: "account");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("attribute_name is required"));
    }

    [TestMethod]
    public void UpsertRelationship_RemoveTarget_MissingReferencedEntity_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRelationshipTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions());
        var result = tool.upsert_relationship(action: "remove_target", entity_name: "contact", attribute_name: "customerid");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("referenced_entity is required"));
    }

    // ──────────────────────────────────────────────
    // Method & parameter existence
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpsertRelationship_HasAllExpectedParameters()
    {
        var method = ToolType.GetMethod("upsert_relationship")!;
        var parameters = method.GetParameters();
        var paramNames = parameters.Select(p => p.Name).ToArray();
        CollectionAssert.Contains(paramNames, "action");
        CollectionAssert.Contains(paramNames, "relationship_name");
        CollectionAssert.Contains(paramNames, "referenced_entity");
        CollectionAssert.Contains(paramNames, "referencing_entity");
        CollectionAssert.Contains(paramNames, "entity1");
        CollectionAssert.Contains(paramNames, "entity2");
        CollectionAssert.Contains(paramNames, "intersect_entity_name");
        CollectionAssert.Contains(paramNames, "entity_name");
        CollectionAssert.Contains(paramNames, "attribute_name");
        CollectionAssert.Contains(paramNames, "cascade_preset");
        CollectionAssert.Contains(paramNames, "cascade_assign");
        CollectionAssert.Contains(paramNames, "cascade_delete");
        CollectionAssert.Contains(paramNames, "cascade_merge");
        CollectionAssert.Contains(paramNames, "cascade_reparent");
        CollectionAssert.Contains(paramNames, "cascade_share");
        CollectionAssert.Contains(paramNames, "cascade_unshare");
        CollectionAssert.Contains(paramNames, "menu_behavior");
        CollectionAssert.Contains(paramNames, "menu_group");
        CollectionAssert.Contains(paramNames, "menu_order");
        CollectionAssert.Contains(paramNames, "lookup_display_name");
        CollectionAssert.Contains(paramNames, "solution_name");
        CollectionAssert.Contains(paramNames, "is_hierarchical");
    }

    [TestMethod]
    public void UpsertRelationship_DescriptionMentionsAllActions()
    {
        var method = ToolType.GetMethod("upsert_relationship")!;
        var desc = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        Assert.IsTrue(desc.Contains("create_1n"), "Description should mention create_1n");
        Assert.IsTrue(desc.Contains("create_nn"), "Description should mention create_nn");
        Assert.IsTrue(desc.Contains("update"), "Description should mention update");
        Assert.IsTrue(desc.Contains("delete"), "Description should mention delete");
        Assert.IsTrue(desc.Contains("add_target"), "Description should mention add_target");
        Assert.IsTrue(desc.Contains("remove_target"), "Description should mention remove_target");
    }

    [TestMethod]
    public void UpsertRelationship_DescriptionMentionsCascadeTypes()
    {
        var method = ToolType.GetMethod("upsert_relationship")!;
        var desc = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        Assert.IsTrue(desc.Contains("Cascade"), "Description should mention Cascade type");
        Assert.IsTrue(desc.Contains("NoCascade"), "Description should mention NoCascade type");
        Assert.IsTrue(desc.Contains("RemoveLink"), "Description should mention RemoveLink type");
        Assert.IsTrue(desc.Contains("Restrict"), "Description should mention Restrict type");
    }

    [TestMethod]
    public void UpsertRelationship_DescriptionMentionsPresets()
    {
        var method = ToolType.GetMethod("upsert_relationship")!;
        var desc = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        Assert.IsTrue(desc.Contains("Parental"), "Description should mention Parental preset");
        Assert.IsTrue(desc.Contains("Referential"), "Description should mention Referential preset");
        Assert.IsTrue(desc.Contains("ReferentialRestrictDelete"), "Description should mention ReferentialRestrictDelete preset");
    }

    // ──────────────────────────────────────────────
    // Adversarial: Invalid cascade_preset throws
    // ──────────────────────────────────────────────

    [TestMethod]
    public void BuildCascadeConfiguration_InvalidPreset_ThrowsArgumentException()
    {
        try { BuildCascadeConfiguration("TOTALLY_BOGUS"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex)
        {
            Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException));
            Assert.IsTrue(ex.InnerException.Message.Contains("Invalid cascade_preset"));
            Assert.IsTrue(ex.InnerException.Message.Contains("Parental"));
        }
    }

    [TestMethod]
    public void BuildCascadeConfiguration_ExplicitReferential_Works()
    {
        var config = BuildCascadeConfiguration("Referential");
        Assert.AreEqual(CascadeType.NoCascade, config.Assign);
        Assert.AreEqual(CascadeType.RemoveLink, config.Delete);
    }

    // ──────────────────────────────────────────────
    // Adversarial: Invalid cascade type override throws
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseCascadeType_InvalidNonEmpty_ThrowsArgumentException()
    {
        try { ParseCascadeType("BOGUS_VALUE"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex)
        {
            Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException));
            Assert.IsTrue(ex.InnerException.Message.Contains("Invalid cascade type"));
            Assert.IsTrue(ex.InnerException.Message.Contains("Cascade"));
        }
    }

    // ──────────────────────────────────────────────
    // Adversarial: Invalid menu_behavior throws
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseMenuBehavior_InvalidNonEmpty_ThrowsArgumentException()
    {
        try { ParseMenuBehavior("BOGUS"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex)
        {
            Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException));
            Assert.IsTrue(ex.InnerException.Message.Contains("Invalid menu_behavior"));
            Assert.IsTrue(ex.InnerException.Message.Contains("UseCollectionName"));
        }
    }

    [TestMethod]
    public void ParseMenuBehavior_UseCollectionName_Explicit_Works()
    {
        Assert.AreEqual(AssociatedMenuBehavior.UseCollectionName, ParseMenuBehavior("UseCollectionName"));
    }

    // ──────────────────────────────────────────────
    // Adversarial: Invalid menu_group throws
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseMenuGroup_InvalidNonEmpty_ThrowsArgumentException()
    {
        try { ParseMenuGroup("BOGUS_GROUP"); Assert.Fail("Expected exception"); }
        catch (TargetInvocationException ex)
        {
            Assert.IsInstanceOfType(ex.InnerException, typeof(ArgumentException));
            Assert.IsTrue(ex.InnerException.Message.Contains("Invalid menu_group"));
            Assert.IsTrue(ex.InnerException.Message.Contains("Details"));
        }
    }

    [TestMethod]
    public void ParseMenuGroup_Details_Explicit_Works()
    {
        Assert.AreEqual(AssociatedMenuGroup.Details, ParseMenuGroup("Details"));
    }
}
