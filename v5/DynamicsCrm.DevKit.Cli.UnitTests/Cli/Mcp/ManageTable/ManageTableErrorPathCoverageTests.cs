using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageTable;

/// <summary>
/// Error and rare-branch coverage for <see cref="ManageTableTool"/>: failed
/// solution resolution, ambiguous entity resolution for logical_name, the
/// create-intent guard after an unknown logical_name, the outer exception
/// handler (default publisher prefix rejected by DataverseNamer), derived-name
/// collisions, non-underscored primary attribute names, and the
/// SyncToExternalSearchIndex change guards on update.
/// </summary>
[TestClass]
public sealed class ManageTableErrorPathCoverageTests
{
    private static readonly BindingFlags PrivateInstance = BindingFlags.Instance | BindingFlags.NonPublic;

    [TestInitialize]
    public void Setup() => MetadataOperationWaitHelper.WaitScalePercent = 0;

    [TestMethod]
    public void Create_UnknownSolution_ReportsResolutionFailure()
    {
        using var harness = new TableHarness();
        harness.SolutionRow = null; // nothing resolvable for 'MissingSolution'
        var result = harness.NewTool().manage_table(
            display_name: "Widget", display_collection_name: "Widgets", solution_name: "MissingSolution");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "get_solution_components");
    }

    [TestMethod]
    public void LogicalName_AmbiguousDisplayName_ReportsAmbiguity()
    {
        using var harness = new TableHarness();
        harness.Entities.Add(TestMetadata.Entity("mt_dup_a", "Dup Thing"));
        harness.Entities.Add(TestMetadata.Entity("mt_dup_b", "Dup Thing"));

        var result = harness.NewTool().manage_table(logical_name: "Dup Thing");

        Assert.IsTrue(result.IsError == true, result.GetText());
        // FormatAmbiguous wording — no "Ambiguous" tag appears in the message.
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'Dup Thing' during display name search.");
        StringAssert.Contains(result.GetText(), "Use get_tables to list entities.");
    }

    [TestMethod]
    public void LogicalName_NotFound_WithoutCollectionName_IsRejected()
    {
        using var harness = new TableHarness();
        harness.Entities.Add(TestMetadata.Entity("mt_known", "Known"));

        var result = harness.NewTool().manage_table(logical_name: "mt_ghost", display_name: "Widget");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "No existing entity found for logical_name 'mt_ghost'");
    }

    [TestMethod]
    public void Create_DefaultPublisherPrefix_OuterCatchReportsFriendlyError()
    {
        using var harness = new TableHarness(publisherPrefix: "new");
        var result = harness.NewTool().manage_table(
            display_name: "Widget", display_collection_name: "Widgets", solution_name: "DevKit");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "default publisher prefix");
    }

    [TestMethod]
    public void CreateNewEntity_WithoutDisplayName_IsRejected()
    {
        var tool = new ManageTableTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));

        var result = InvokePrivate<CallToolResult>(tool, "CreateNewEntity",
            "", "", "", null, null, null, "", "", false, false, "", "", 100, "", "", null, null, "");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "display_name is required when creating a new entity");
    }

    [TestMethod]
    public void Create_DerivedLogicalNameAlreadyExists_IsRejected()
    {
        using var harness = new TableHarness();
        harness.Entities.Add(TestMetadata.Entity("dev_collidea", "A Different Name"));

        var result = harness.NewTool().manage_table(
            display_name: "Collidea", display_collection_name: "Collideas", solution_name: "DevKit");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "because derived logical name 'dev_collidea' already exists");
    }

    [TestMethod]
    public void Create_DerivedLogicalNameAmbiguous_IsRejected()
    {
        using var harness = new TableHarness();
        harness.Entities.Add(TestMetadata.Entity("mt_amb_1", "dev_ambig"));
        harness.Entities.Add(TestMetadata.Entity("mt_amb_2", "dev_ambig"));

        var result = harness.NewTool().manage_table(
            display_name: "Ambig", display_collection_name: "Ambigs", solution_name: "DevKit");

        Assert.IsTrue(result.IsError == true, result.GetText());
        // The derived name 'dev_ambig' matches both seeded display names → ambiguous collision.
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'dev_ambig' during display name search.");
        StringAssert.Contains(result.GetText(), "Use get_tables to list entities.");
    }

    [TestMethod]
    public void Create_PrimaryAttributeNameWithoutUnderscore_UsedAsIs()
    {
        using var harness = new TableHarness();
        var result = harness.NewTool(dryRun: true).manage_table(
            display_name: "Plain", display_collection_name: "Plains", solution_name: "DevKit",
            primary_attribute_name: "name");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = harness.Structured(result);
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        Assert.AreEqual("name", json.GetProperty("primaryAttributeName").GetString());
    }

    [TestMethod]
    public void Update_SearchEnabled_CannotChange_WarnsAndSkips()
    {
        using var harness = new TableHarness();
        var entity = TestMetadata.Entity("mt_nosearch", "No Search");
        TestMetadata.Set(entity, nameof(EntityMetadata.CanEnableSyncToExternalSearchIndex), new BooleanManagedProperty(false));
        TestMetadata.Set(entity, nameof(EntityMetadata.SyncToExternalSearchIndex), (bool?)false);
        harness.Entities.Add(entity);

        var result = harness.NewTool().manage_table(logical_name: "mt_nosearch", is_search_enabled: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = harness.Structured(result);
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        var warnings = json.GetProperty("warnings").EnumerateArray().Select(w => w.GetString()!).ToList();
        Assert.IsTrue(warnings.Any(w => w.Contains("CanEnableSyncToExternalSearchIndex is false")),
            "expected the skip warning. Got: " + string.Join(" | ", warnings));
    }

    [TestMethod]
    public void Update_SearchEnabled_CanChange_AppliesAndPublishes()
    {
        using var harness = new TableHarness();
        var entity = TestMetadata.Entity("mt_yessearch", "Yes Search");
        TestMetadata.Set(entity, nameof(EntityMetadata.CanEnableSyncToExternalSearchIndex), new BooleanManagedProperty(true));
        TestMetadata.Set(entity, nameof(EntityMetadata.SyncToExternalSearchIndex), (bool?)false);
        harness.Entities.Add(entity);

        var result = harness.NewTool().manage_table(logical_name: "mt_yessearch", is_search_enabled: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = harness.Structured(result);
        Assert.AreEqual("updated", json.GetProperty("status").GetString());
        Assert.IsTrue(json.GetProperty("syncToExternalSearchIndex").GetBoolean());
        Assert.IsTrue(json.GetProperty("published").GetBoolean());
    }

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // harness
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

    private static T InvokePrivate<T>(object target, string methodName, params object?[] args)
    {
        var method = target.GetType().GetMethod(methodName, PrivateInstance)!;
        try
        {
            return (T)method.Invoke(target, args)!;
        }
        catch (TargetInvocationException ex) when (ex.InnerException != null)
        {
            throw ex.InnerException;
        }
    }

    /// <summary>
    /// FakeSdkClient wired for manage_table flows: entity metadata reads,
    /// CreateEntity/UpdateEntity, publish, solution/publisher resolution and
    /// the organization language row.
    /// </summary>
    private sealed class TableHarness : IDisposable
    {
        public FakeSdkClient Fake { get; } = new();
        public List<EntityMetadata> Entities { get; } = new();
        public Entity? SolutionRow { get; set; }
        public int PublishedCount { get; private set; }
        public CreateEntityRequest? CapturedCreate { get; private set; }

        public TableHarness(string publisherPrefix = "dev")
        {
            var publisherId = Guid.NewGuid();
            SolutionRow = new Entity("solution", Guid.NewGuid())
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
                CreateEntityRequest c => Create(c),
                UpdateEntityRequest => new UpdateEntityResponse(),
                PublishXmlRequest => Publish(),
                _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
            };
            Fake.OnRetrieveMultiple = query => query switch
            {
                QueryExpression qe when qe.EntityName == "solution" => SolutionRow != null
                    ? new EntityCollection(new[] { SolutionRow })
                    : new EntityCollection(),
                FetchExpression => new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = 1033 } }),
                _ => new EntityCollection()
            };
            Fake.OnRetrieve = (entityName, id, _) => entityName == "publisher"
                ? new Entity("publisher", id)
                {
                    ["customizationprefix"] = publisherPrefix,
                    ["customizationoptionvalueprefix"] = 10000
                }
                : throw new InvalidOperationException($"Unexpected retrieve of '{entityName}'");
        }

        public ManageTableTool NewTool(bool dryRun = false) =>
            new(Fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

        public JsonElement Structured(CallToolResult result) =>
            JsonSerializer.Deserialize<JsonElement>(result.StructuredContent!.Value.GetRawText());

        private OrganizationResponse Create(CreateEntityRequest request)
        {
            CapturedCreate = request;
            var response = new CreateEntityResponse();
            response.Results["EntityId"] = Guid.NewGuid();
            return response;
        }

        private OrganizationResponse Publish()
        {
            PublishedCount++;
            return new PublishXmlResponse();
        }

        public void Dispose() => Fake.Dispose();
    }
}
