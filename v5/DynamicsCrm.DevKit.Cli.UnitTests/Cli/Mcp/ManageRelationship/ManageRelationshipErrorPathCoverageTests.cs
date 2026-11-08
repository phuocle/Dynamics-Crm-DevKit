using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRelationship;

/// <summary>
/// Error and rare-branch coverage for <see cref="ManageRelationshipTool"/>:
/// unresolvable entity inputs on create_1n / create_nn / add_target /
/// remove_target, retry exhaustion under lock contention, and the unknown
/// relationship-type guard on update (exercised with a Reflection.Emit
/// subclass because RelationshipMetadataBase is abstract).
/// </summary>
[TestClass]
public sealed class ManageRelationshipErrorPathCoverageTests
{
    [TestInitialize]
    public void Setup() => MetadataOperationWaitHelper.WaitScalePercent = 0;

    [TestMethod]
    public void Create1N_UnknownReferencingEntity_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(TestMetadata.Entity("mr_account", "Account"));

        var result = harness.NewTool().manage_relationship(
            action: "create_1n", referenced_entity: "mr_account", referencing_entity: "mr_ghost");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "referencing_entity 'mr_ghost'");
    }

    [TestMethod]
    public void Create1N_LockContentionExhausted_ReportsRetryFailure()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(TestMetadata.Entity("mr_account", "Account"));
        harness.Entities.Add(TestMetadata.Entity("mr_contact", "Contact"));
        harness.CreateOneToManyException = new InvalidOperationException(
            "Another metadata operation is already running for this table.");

        var result = harness.NewTool().manage_relationship(
            action: "create_1n", referenced_entity: "mr_account", referencing_entity: "mr_contact",
            solution_name: "DevKit");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Failed to create relationship");
        StringAssert.Contains(result.GetText(), "after multiple retry attempts");
    }

    [TestMethod]
    public void CreateNN_UnknownEntity2_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(TestMetadata.Entity("mr_account", "Account"));

        var result = harness.NewTool().manage_relationship(
            action: "create_nn", entity1: "mr_account", entity2: "mr_ghost");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "entity2 'mr_ghost'");
    }

    [TestMethod]
    public void Update_UnknownRelationshipType_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.UnknownRelationshipMetadata = CreateUnknownRelationshipMetadata();

        var result = harness.NewTool().manage_relationship(
            action: "update", relationship_name: "mr_unknown_rel");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Unknown relationship type for 'mr_unknown_rel'");
    }

    [TestMethod]
    public void AddTarget_UnknownReferencedEntity_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(EntityWithAttributes("mr_account", "Account", "name"));

        var result = harness.NewTool().manage_relationship(
            action: "add_target", entity_name: "mr_account", attribute_name: "name",
            referenced_entity: "mr_ghost");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "referenced_entity 'mr_ghost'");
    }

    [TestMethod]
    public void AddTarget_UnknownAttribute_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(EntityWithAttributes("mr_account", "Account", "name"));

        var result = harness.NewTool().manage_relationship(
            action: "add_target", entity_name: "mr_account", attribute_name: "mr_ghost_attr",
            referenced_entity: "mr_account");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "attribute_name 'mr_ghost_attr' on entity 'mr_account'");
    }

    [TestMethod]
    public void RemoveTarget_UnknownReferencedEntity_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(EntityWithAttributes("mr_account", "Account", "name"));

        var result = harness.NewTool().manage_relationship(
            action: "remove_target", entity_name: "mr_account", attribute_name: "name",
            referenced_entity: "mr_ghost");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "referenced_entity 'mr_ghost'");
    }

    [TestMethod]
    public void RemoveTarget_UnknownAttribute_IsRejected()
    {
        using var harness = new RelationshipHarness();
        harness.Entities.Add(EntityWithAttributes("mr_account", "Account", "name"));

        var result = harness.NewTool().manage_relationship(
            action: "remove_target", entity_name: "mr_account", attribute_name: "mr_ghost_attr",
            referenced_entity: "mr_account");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "attribute_name 'mr_ghost_attr' on entity 'mr_account'");
    }

    // ──────────────────────────────────────────────
    // harness
    // ──────────────────────────────────────────────

    private static EntityMetadata EntityWithAttributes(string logicalName, string displayName, params string[] attributeNames)
    {
        var attributes = attributeNames
            .Select(name => TestMetadata.String(name, name))
            .Cast<AttributeMetadata>()
            .ToArray();
        return TestMetadata.Entity(logicalName, displayName, attributes);
    }

    /// <summary>
    /// RelationshipMetadataBase is abstract with only the two handled concrete
    /// subclasses in the SDK, so the "unknown relationship type" guard is
    /// reached with a dynamic subclass emitted at test runtime.
    /// </summary>
    private static RelationshipMetadataBase CreateUnknownRelationshipMetadata()
    {
        var assembly = AssemblyBuilder.DefineDynamicAssembly(
            new AssemblyName("ManageRelationshipErrorPathTests.Dynamic"), AssemblyBuilderAccess.Run);
        var module = assembly.DefineDynamicModule("Dynamic");
        var typeBuilder = module.DefineType(
            "UnknownRelationshipMetadata",
            TypeAttributes.Public | TypeAttributes.Sealed | TypeAttributes.Class,
            typeof(RelationshipMetadataBase));
        var type = typeBuilder.CreateType()!;
        return (RelationshipMetadataBase)Activator.CreateInstance(type)!;
    }

    /// <summary>
    /// FakeSdkClient wired for manage_relationship flows: entity/attribute
    /// metadata reads, an optional dynamic relationship metadata answer for
    /// RetrieveRelationshipRequest, CreateOneToManyRequest fault injection,
    /// solution/publisher resolution and the organization language row.
    /// </summary>
    private sealed class RelationshipHarness : IDisposable
    {
        public FakeSdkClient Fake { get; } = new();
        public List<EntityMetadata> Entities { get; } = new();
        public RelationshipMetadataBase? UnknownRelationshipMetadata { get; set; }
        public Exception? CreateOneToManyException;

        public RelationshipHarness()
        {
            var publisherId = Guid.NewGuid();
            var solution = new Entity("solution", Guid.NewGuid())
            {
                ["friendlyname"] = "DevKit Solution",
                ["uniquename"] = "DevKit",
                ["publisherid"] = new EntityReference("publisher", publisherId)
            };

            Fake.OnExecute = request => request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = Entities.ToArray() }
                },
                RetrieveEntityRequest r => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = Entities.FirstOrDefault(e =>
                            string.Equals(e.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase))
                        ?? new EntityMetadata { LogicalName = r.LogicalName } }
                },
                RetrieveRelationshipRequest => new RetrieveRelationshipResponse
                {
                    Results = { ["RelationshipMetadata"] = UnknownRelationshipMetadata! }
                },
                CreateOneToManyRequest => CreateOneToManyException != null
                    ? throw CreateOneToManyException
                    : CreatedRelationship(),
                PublishXmlRequest => new PublishXmlResponse(),
                _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
            };
            Fake.OnRetrieveMultiple = query => query switch
            {
                QueryExpression qe when qe.EntityName == "solution" => new EntityCollection(new[] { solution }),
                FetchExpression => new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = 1033 } }),
                _ => new EntityCollection()
            };
            Fake.OnRetrieve = (entityName, id, _) => entityName == "publisher"
                ? new Entity("publisher", id)
                {
                    ["customizationprefix"] = "dev",
                    ["customizationoptionvalueprefix"] = 10000
                }
                : throw new InvalidOperationException($"Unexpected retrieve of '{entityName}'");
        }

        public ManageRelationshipTool NewTool(bool dryRun = false) =>
            new(Fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

        private static OrganizationResponse CreatedRelationship()
        {
            var response = new CreateOneToManyResponse();
            response.Results["RelationshipId"] = Guid.NewGuid();
            return response;
        }

        public void Dispose() => Fake.Dispose();
    }
}
