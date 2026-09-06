using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRelationship;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageRelationshipTool (create_1n/create_nn/update/
/// delete/add_target/remove_target plus cascade/menu parsers and name builders).
/// Relationship and metadata SDK requests are answered by the decorator; mutations and
/// publishing go through counters; solution/publisher rows come from FakeXrmEasy CRUD.
/// </summary>
[TestClass]
public sealed class ManageRelationshipFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private RelationshipOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        var orgId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("organization", orgId) { ["languagecode"] = 1033 });

        var publisherId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", publisherId)
        {
            ["uniquename"] = "devkitpub",
            ["customizationprefix"] = "devkit"
        });
        _ctx.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "TestSolution",
            ["friendlyname"] = "Test Solution",
            ["publisherid"] = new EntityReference("publisher", publisherId)
        });

        _service = new RelationshipOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeAccountMetadata());
        _service.Entities.Add(MakeContactMetadata());

        _service.OneToMany["devkit_account_contact"] = MakeOneToMany(
            "devkit_account_contact", "account", "contact",
            cascadeAssign: CascadeType.NoCascade, cascadeDelete: CascadeType.RemoveLink);
        _service.ManyToMany["devkit_account_newwidget"] = MakeManyToMany(
            "devkit_account_newwidget", "account", "newwidget");
    }

    private ManageRelationshipTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private static EntityMetadata MakeAccountMetadata()
    {
        var name = new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", DisplayName = MakeLabel("Account Name") };
        var poly = new LookupAttributeMetadata { LogicalName = "new_polymorphicid", SchemaName = "New_PolymorphicId", DisplayName = MakeLabel("Polymorphic") };
        var meta = new EntityMetadata { LogicalName = "account", SchemaName = "Account", DisplayName = MakeLabel("Account") };
        Set(meta, "PrimaryIdAttribute", "accountid");
        Set(meta, "PrimaryNameAttribute", "name");
        Set(meta, "Attributes", new AttributeMetadata[] { name, poly });
        return meta;
    }

    private static EntityMetadata MakeContactMetadata()
    {
        var fullname = new StringAttributeMetadata { LogicalName = "fullname", SchemaName = "FullName", DisplayName = MakeLabel("Full Name") };
        var meta = new EntityMetadata { LogicalName = "contact", SchemaName = "Contact", DisplayName = MakeLabel("Contact") };
        Set(meta, "PrimaryIdAttribute", "contactid");
        Set(meta, "PrimaryNameAttribute", "fullname");
        Set(meta, "Attributes", new AttributeMetadata[] { fullname });
        return meta;
    }

    private static OneToManyRelationshipMetadata MakeOneToMany(
        string schemaName, string referenced, string referencing,
        CascadeType? cascadeAssign = null, CascadeType? cascadeDelete = null,
        bool isHierarchical = false)
    {
        var meta = new OneToManyRelationshipMetadata
        {
            SchemaName = schemaName,
            ReferencedEntity = referenced,
            ReferencingEntity = referencing,
            AssociatedMenuConfiguration = new AssociatedMenuConfiguration
            {
                Behavior = AssociatedMenuBehavior.UseCollectionName,
                Group = AssociatedMenuGroup.Details,
                Order = 10000
            },
            CascadeConfiguration = new CascadeConfiguration
            {
                Assign = cascadeAssign ?? CascadeType.NoCascade,
                Delete = cascadeDelete ?? CascadeType.RemoveLink,
                Merge = CascadeType.NoCascade,
                Reparent = CascadeType.NoCascade,
                Share = CascadeType.NoCascade,
                Unshare = CascadeType.NoCascade
            }
        };
        Set(meta, "IsHierarchical", isHierarchical);
        Set(meta, "MetadataId", Guid.NewGuid());
        return meta;
    }

    private static ManyToManyRelationshipMetadata MakeManyToMany(string schemaName, string e1, string e2)
    {
        var meta = new ManyToManyRelationshipMetadata
        {
            SchemaName = schemaName,
            Entity1LogicalName = e1,
            Entity2LogicalName = e2
        };
        Set(meta, "MetadataId", Guid.NewGuid());
        return meta;
    }

    private static string Text(CallToolResult r) => r.GetText();

    // ──────────────────────────────────────────────
    // entry point
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MissingAction_ReturnsError()
    {
        var result = NewTool().manage_relationship();
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "action is required");
    }

    [TestMethod]
    public void InvalidAction_ReturnsError()
    {
        var result = NewTool().manage_relationship("frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }

    // ──────────────────────────────────────────────
    // create_1n
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create1N_MissingReferenced_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referencing_entity: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "referenced_entity is required for create_1n");
    }

    [TestMethod]
    public void Create1N_MissingReferencing_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "referencing_entity is required for create_1n");
    }

    [TestMethod]
    public void Create1N_UnknownReferencedEntity_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "ghost", referencing_entity: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "referenced_entity 'ghost'");
    }

    [TestMethod]
    public void Create1N_HierarchicalNonSelfReferential_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact",
            solution_name: "TestSolution", is_hierarchical: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "only valid for self-referential");
    }

    [TestMethod]
    public void Create1N_MissingSolution_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "solution_name is required for create_1n");
    }

    [TestMethod]
    public void Create1N_UnknownSolution_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact", solution_name: "Ghost");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Create1N_InvalidCascadePreset_ReturnsFriendlyError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact",
            solution_name: "TestSolution", cascade_preset: "bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid cascade_preset 'bogus'");
    }

    [TestMethod]
    public void Create1N_InvalidCascadeType_ReturnsFriendlyError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact",
            solution_name: "TestSolution", cascade_assign: "sometimes");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid cascade type 'sometimes'");
    }

    [TestMethod]
    public void Create1N_InvalidMenuBehavior_ReturnsFriendlyError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact",
            solution_name: "TestSolution", menu_behavior: "fly");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid menu_behavior 'fly'");
    }

    [TestMethod]
    public void Create1N_InvalidMenuGroup_ReturnsFriendlyError()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account", referencing_entity: "contact",
            solution_name: "TestSolution", menu_group: "gossip");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid menu_group 'gossip'");
    }

    [TestMethod]
    public void Create1N_DryRun_NoMutation()
    {
        var result = NewTool(dryRun: true).manage_relationship("create_1n", referenced_entity: "account",
            referencing_entity: "contact", solution_name: "TestSolution", cascade_preset: "Parental");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE 1:N relationship 'devkit_account_contact'");
        Assert.AreEqual(0, _service.CreateRelationships);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public void Create1N_Success_AutoNameAndLookup()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "Account",
            referencing_entity: "Contact", solution_name: "TestSolution", cascade_preset: "Parental");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created 1:N relationship 'devkit_account_contact'");
        StringAssert.Contains(Text(result), "lookup 'devkit_account'");
        Assert.AreEqual(1, _service.CreateRelationships);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void Create1N_LongRelationshipName_Truncated()
    {
        var longName = new string('x', 150);
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account",
            referencing_entity: "contact", relationship_name: longName, solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), new string('x', 100));
    }

    [TestMethod]
    public void Create1N_ReferentialRestrictDelete_Preset()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account",
            referencing_entity: "contact", solution_name: "TestSolution", cascade_preset: "ReferentialRestrictDelete");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created 1:N relationship 'devkit_account_contact'");
        Assert.AreEqual(1, _service.CreateRelationships);
    }

    [TestMethod]
    public void Create1N_CascadeOverridesApplied()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account",
            referencing_entity: "contact", solution_name: "TestSolution",
            cascade_assign: "Cascade", cascade_delete: "Restrict");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created 1:N relationship 'devkit_account_contact'");
        var structured = result.StructuredContent?.ToString() ?? "";
        StringAssert.Contains(structured.Replace("\u0027", "'"), "Cascade");
    }

    [TestMethod]
    public void Create1N_MenuOverrides()
    {
        var result = NewTool().manage_relationship("create_1n", referenced_entity: "account",
            referencing_entity: "contact", solution_name: "TestSolution",
            menu_behavior: "UseLabel", menu_group: "Sales", menu_order: 42);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created 1:N relationship");
    }

    // ──────────────────────────────────────────────
    // create_nn
    // ──────────────────────────────────────────────

    [TestMethod]
    public void CreateNN_MissingEntity1_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_nn", entity2: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity1 is required for create_nn");
    }

    [TestMethod]
    public void CreateNN_MissingEntity2_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_nn", entity1: "account", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity2 is required for create_nn");
    }

    [TestMethod]
    public void CreateNN_MissingSolution_ReturnsError()
    {
        var result = NewTool().manage_relationship("create_nn", entity1: "account", entity2: "contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "solution_name is required for create_nn");
    }

    [TestMethod]
    public void CreateNN_DryRun_NoMutation()
    {
        var result = NewTool(dryRun: true).manage_relationship("create_nn", entity1: "account", entity2: "contact", solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE N:N relationship 'devkit_account_contact'");
        StringAssert.Contains(Text(result), "intersect: 'devkit_account_contact'");
        Assert.AreEqual(0, _service.CreateRelationships);
    }

    [TestMethod]
    public void CreateNN_Success_CustomIntersect()
    {
        var result = NewTool().manage_relationship("create_nn", entity1: "account", entity2: "contact",
            relationship_name: "custom_rel", intersect_entity_name: "custom_intersect", solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created N:N relationship 'custom_rel'");
        StringAssert.Contains(Text(result), "intersect: 'custom_intersect'");
        Assert.AreEqual(1, _service.CreateRelationships);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void CreateNN_LongNames_Truncated()
    {
        var longName = new string('y', 150);
        var result = NewTool().manage_relationship("create_nn", entity1: "account", entity2: "contact",
            relationship_name: longName, intersect_entity_name: longName, solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), new string('y', 100));
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_MissingName_ReturnsError()
    {
        var result = NewTool().manage_relationship("update");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "relationship_name is required for update");
    }

    [TestMethod]
    public void Update_UnknownRelationship_ThrowsFriendly()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "ghost_rel");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void Update_NoChanges_ReturnsError()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No changes detected for relationship 'devkit_account_contact'");
    }

    [TestMethod]
    public void Update_CascadeChanges_Updates()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_contact",
            cascade_assign: "Cascade", cascade_delete: "Restrict");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated relationship 'devkit_account_contact' with 2 change(s)");
        Assert.AreEqual(1, _service.UpdateRelationships);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void Update_MenuChanges_Updates()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_contact",
            menu_behavior: "DoNotDisplay", menu_group: "Marketing", menu_order: 7);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "with 3 change(s)");
    }

    [TestMethod]
    public void Update_SameMenuValues_NoChanges()
    {
        // UseCollectionName/Details/10000 already match the seeded metadata.
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_contact",
            menu_behavior: "UseCollectionName", menu_group: "Details");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No changes detected");
    }

    [TestMethod]
    public void Update_Hierarchical_NonSelfReferential_ReturnsError()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_contact", is_hierarchical: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "only valid for self-referential relationships");
        StringAssert.Contains(Text(result), "'account' -> 'contact'");
    }

    [TestMethod]
    public void Update_SelfReferential_Hierarchical_Updates()
    {
        _service.OneToMany["devkit_account_account"] = MakeOneToMany("devkit_account_account", "account", "account");
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_account", is_hierarchical: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "with 1 change(s)");
    }

    [TestMethod]
    public void Update_DryRun_NoMutation()
    {
        var result = NewTool(dryRun: true).manage_relationship("update", relationship_name: "devkit_account_contact",
            cascade_assign: "Cascade");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would UPDATE relationship 'devkit_account_contact' with 1 change(s)");
        Assert.AreEqual(0, _service.UpdateRelationships);
    }

    [TestMethod]
    public void Update_ManyToMany_WarnsNoCascade()
    {
        var result = NewTool().manage_relationship("update", relationship_name: "devkit_account_newwidget",
            cascade_assign: "Cascade");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated relationship 'devkit_account_newwidget' with 0 change(s), published=no");
        Assert.AreEqual(0, _service.UpdateRelationships);
    }

    // ──────────────────────────────────────────────
    // delete
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Delete_MissingName_ReturnsError()
    {
        var result = NewTool().manage_relationship("delete");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "relationship_name is required for delete");
    }

    [TestMethod]
    public void Delete_OneToMany_DryRun()
    {
        var result = NewTool(dryRun: true).manage_relationship("delete", relationship_name: "devkit_account_contact");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would DELETE relationship 'devkit_account_contact'");
        Assert.AreEqual(0, _service.DeleteRelationships);
    }

    [TestMethod]
    public void Delete_OneToMany_Success()
    {
        var result = NewTool().manage_relationship("delete", relationship_name: "devkit_account_contact");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Deleted relationship 'devkit_account_contact' (1:N (account -> contact))");
        Assert.AreEqual(1, _service.DeleteRelationships);
    }

    [TestMethod]
    public void Delete_ManyToMany_Success()
    {
        var result = NewTool().manage_relationship("delete", relationship_name: "devkit_account_newwidget");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "N:N (account <-> newwidget)");
        Assert.AreEqual(1, _service.DeleteRelationships);
    }

    // ──────────────────────────────────────────────
    // add_target / remove_target
    // ──────────────────────────────────────────────

    [TestMethod]
    public void AddTarget_MissingEntity_ReturnsError()
    {
        var result = NewTool().manage_relationship("add_target", attribute_name: "new_polymorphicid", referenced_entity: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name is required for add_target");
    }

    [TestMethod]
    public void AddTarget_MissingAttribute_ReturnsError()
    {
        var result = NewTool().manage_relationship("add_target", entity_name: "account", referenced_entity: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "attribute_name is required for add_target");
    }

    [TestMethod]
    public void AddTarget_MissingReferenced_ReturnsError()
    {
        var result = NewTool().manage_relationship("add_target", entity_name: "account", attribute_name: "new_polymorphicid", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "referenced_entity is required for add_target");
    }

    [TestMethod]
    public void AddTarget_NonLookupAttribute_ReturnsError()
    {
        var result = NewTool().manage_relationship("add_target", entity_name: "account",
            attribute_name: "name", referenced_entity: "contact", solution_name: "TestSolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Lookup attribute 'name' not found");
    }

    [TestMethod]
    public void AddTarget_MissingSolution_ReturnsError()
    {
        var result = NewTool().manage_relationship("add_target", entity_name: "account",
            attribute_name: "new_polymorphicid", referenced_entity: "contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "solution_name is required for add_target");
    }

    [TestMethod]
    public void AddTarget_DryRun()
    {
        var result = NewTool(dryRun: true).manage_relationship("add_target", entity_name: "account",
            attribute_name: "new_polymorphicid", referenced_entity: "contact", solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would ADD target 'contact' to polymorphic lookup 'account.new_polymorphicid'");
        Assert.AreEqual(0, _service.CreateRelationships);
    }

    [TestMethod]
    public void AddTarget_Success()
    {
        var result = NewTool().manage_relationship("add_target", entity_name: "Account",
            attribute_name: "Polymorphic", referenced_entity: "Contact", solution_name: "TestSolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Added target 'contact' to polymorphic lookup 'account.new_polymorphicid'");
        StringAssert.Contains(Text(result), "relationship: 'devkit_contact_account_new_polymorphicid'");
        Assert.AreEqual(1, _service.CreateRelationships);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void RemoveTarget_MissingEntity_ReturnsError()
    {
        var result = NewTool().manage_relationship("remove_target", attribute_name: "new_polymorphicid", referenced_entity: "contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name is required for remove_target");
    }

    [TestMethod]
    public void RemoveTarget_MissingAttribute_ReturnsError()
    {
        var result = NewTool().manage_relationship("remove_target", entity_name: "account", referenced_entity: "contact");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "attribute_name is required for remove_target");
    }

    [TestMethod]
    public void RemoveTarget_MissingReferenced_ReturnsError()
    {
        var result = NewTool().manage_relationship("remove_target", entity_name: "account", attribute_name: "new_polymorphicid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "referenced_entity is required for remove_target");
    }

    [TestMethod]
    public void RemoveTarget_DryRun()
    {
        _service.OneToMany["new_contact_account_new_polymorphicid"] = MakeOneToMany(
            "new_contact_account_new_polymorphicid", "contact", "account");
        var result = NewTool(dryRun: true).manage_relationship("remove_target", entity_name: "account",
            attribute_name: "new_polymorphicid", referenced_entity: "contact");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would REMOVE target 'contact' from polymorphic lookup 'account.new_polymorphicid'");
        StringAssert.Contains(Text(result), "Data in this lookup target will be lost");
        Assert.AreEqual(0, _service.DeleteRelationships);
    }

    [TestMethod]
    public void RemoveTarget_Success()
    {
        _service.OneToMany["new_contact_account_new_polymorphicid"] = MakeOneToMany(
            "new_contact_account_new_polymorphicid", "contact", "account");
        var result = NewTool().manage_relationship("remove_target", entity_name: "account",
            attribute_name: "new_polymorphicid", referenced_entity: "contact");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Removed target 'contact' from polymorphic lookup 'account.new_polymorphicid'");
        StringAssert.Contains(Text(result), "data stored in this lookup target has been lost");
        Assert.AreEqual(1, _service.DeleteRelationships);
    }

    // ──────────────────────────────────────────────
    // decorator
    // ──────────────────────────────────────────────

    private sealed class RelationshipOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();
        public readonly Dictionary<string, OneToManyRelationshipMetadata> OneToMany = new();
        public readonly Dictionary<string, ManyToManyRelationshipMetadata> ManyToMany = new();

        public int Creates;
        public int Publishes;
        public int CreateRelationships;
        public int UpdateRelationships;
        public int DeleteRelationships;

        public RelationshipOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) { Creates++; return _inner.Create(entity); }
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case PublishXmlRequest:
                    Publishes++;
                    return new OrganizationResponse();
                case RetrieveAllEntitiesRequest:
                {
                    var resp = new RetrieveAllEntitiesResponse();
                    resp.Results["EntityMetadata"] = Entities.ToArray();
                    return resp;
                }
                case RetrieveEntityRequest retrieveEntity:
                {
                    var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                    var resp = new RetrieveEntityResponse();
                    resp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                    return resp;
                }
                case RetrieveRelationshipRequest retrieveRelationship:
                {
                    if (OneToMany.TryGetValue(retrieveRelationship.Name, out var otm))
                    {
                        var resp = new RetrieveRelationshipResponse();
                        resp.Results["RelationshipMetadata"] = otm;
                        return resp;
                    }
                    if (ManyToMany.TryGetValue(retrieveRelationship.Name, out var mtm))
                    {
                        var resp = new RetrieveRelationshipResponse();
                        resp.Results["RelationshipMetadata"] = mtm;
                        return resp;
                    }
                    throw new System.ServiceModel.FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault>(
                        new Microsoft.Xrm.Sdk.OrganizationServiceFault
                        {
                            ErrorCode = -2147220969, // 0x80040217 — doesnotexist
                            Message = $"Relationship {retrieveRelationship.Name} does not exist"
                        });
                }
                case CreateOneToManyRequest:
                {
                    CreateRelationships++;
                    var resp = new CreateOneToManyResponse();
                    resp.Results["relationshipid"] = Guid.NewGuid();
                    return resp;
                }
                case CreateManyToManyRequest:
                {
                    CreateRelationships++;
                    var resp = new CreateManyToManyResponse();
                    resp.Results["mmrelationshipid"] = Guid.NewGuid();
                    return resp;
                }
                case UpdateRelationshipRequest:
                    UpdateRelationships++;
                    return new OrganizationResponse();
                case DeleteRelationshipRequest:
                    DeleteRelationships++;
                    return new OrganizationResponse();
                default:
                    return _inner.Execute(request);
            }
        }

        public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
