using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliManageTableTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageTableTool;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;
using ModelContextProtocol.Protocol;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageTable;

/// <summary>
/// manage_table create/update flows on a FakeSdkClient: solution + publisher
/// resolution, collision detection, CreateEntityRequest/UpdateEntityRequest,
/// publish and the structured result fields.
/// </summary>
[TestClass]
public sealed class ManageTableFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<EntityMetadata> _entities = null!;
    private Entity? _solutionRow;
    private CreateEntityRequest? _capturedCreate;
    private UpdateEntityRequest? _capturedUpdate;
    private PublishXmlRequest? _capturedPublish;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities = new List<EntityMetadata>();
        _solutionRow = new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = "DevKit Solution",
            ["uniquename"] = "DevKitSolution",
            ["publisherid"] = new EntityReference("publisher", Guid.NewGuid())
        };
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnRetrieve = (entityName, id, _) =>
            entityName == "publisher"
                ? new Entity("publisher", id)
                {
                    ["customizationprefix"] = "all",
                    ["customizationoptionvalueprefix"] = 10000
                }
                : throw new InvalidOperationException($"Unexpected retrieve of '{entityName}'");
    }

    public void Dispose() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = _entities.ToArray() }
        },
        RetrieveEntityRequest r => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _entities.FirstOrDefault(e => e.LogicalName == r.LogicalName)
                ?? (object)new EntityMetadata { LogicalName = r.LogicalName } }
        },
        CreateEntityRequest c => BuildResponse(c, () =>
        {
            _capturedCreate = c;
            var resp = new CreateEntityResponse();
            resp.Results["EntityId"] = Guid.NewGuid();
            return resp;
        }),
        RetrieveAttributeRequest r when _capturedCreate != null &&
            r.EntityLogicalName == _capturedCreate.Entity.LogicalName &&
            r.LogicalName == _capturedCreate.PrimaryAttribute.LogicalName => new RetrieveAttributeResponse
        {
            Results = { ["AttributeMetadata"] = _capturedCreate.PrimaryAttribute }
        },
        UpdateEntityRequest u => BuildResponse(u, () =>
        {
            _capturedUpdate = u;
            return new UpdateEntityResponse();
        }),
        PublishXmlRequest p => BuildResponse(p, () =>
        {
            _capturedPublish = p;
            return new PublishXmlResponse();
        }),
        _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
    };

    private static OrganizationResponse BuildResponse(OrganizationRequest request, Func<OrganizationResponse> factory)
    {
        Assert.IsInstanceOfType<OrganizationRequest>(request);
        return factory();
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        var entityName = query switch
        {
            FetchExpression fetch => FetchEntityName(fetch.Query),
            QueryExpression qe => qe.EntityName,
            _ => null
        };
        if (entityName == "solution" && _solutionRow != null)
            return new EntityCollection(new[] { _solutionRow });
        if (entityName == "organization")
            return new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = 1033 } });
        return new EntityCollection();
    }

    private static string? FetchEntityName(string fetchXml)
    {
        if (string.IsNullOrEmpty(fetchXml)) return null;
        var marker = "entity name='";
        var idx = fetchXml.IndexOf(marker, StringComparison.Ordinal);
        if (idx < 0) return null;
        var start = idx + marker.Length;
        var end = fetchXml.IndexOf('\'', start);
        return end < 0 ? null : fetchXml[start..end];
    }

    private CliManageTableTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_FullFlow_PublishesAndReturnsMetadata()
    {
        var result = NewTool().manage_table(
            display_name: "Widget", display_collection_name: "Widgets",
            solution_name: "DevKitSolution", description: "Widget table",
            is_audit_enabled: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("created", json.GetProperty("status").GetString());
        Assert.AreEqual("all_Widget", json.GetProperty("schemaName").GetString());
        Assert.AreEqual("all_widget", json.GetProperty("logicalName").GetString());
        Assert.AreEqual("all_name", json.GetProperty("primaryAttributeName").GetString());
        Assert.AreEqual("Name", json.GetProperty("primaryAttributeDisplayName").GetString());
        Assert.AreEqual("UserOwned", json.GetProperty("ownershipType").GetString());
        Assert.IsTrue(json.GetProperty("published").GetBoolean());
        Assert.AreEqual("DevKitSolution", json.GetProperty("solutionName").GetString());
        Assert.AreEqual("all_Widget", (string)_capturedCreate!.Entity.SchemaName);
        Assert.IsTrue(_capturedCreate.PrimaryAttribute.SchemaName!.StartsWith("all_"));
        Assert.IsFalse(_capturedCreate.Entity.IsActivity);
        Assert.IsFalse(_capturedCreate.Entity.ChangeTrackingEnabled);
        Assert.IsFalse(_capturedCreate.Entity.IsDuplicateDetectionEnabled.Value);
        Assert.IsFalse(_capturedCreate.HasActivities);
        Assert.IsFalse(_capturedCreate.HasNotes);
    }

    [TestMethod]
    public void Create_DuplicateDetectionEnabled_SendsManagedProperty()
    {
        var result = NewTool().manage_table(
            display_name: "Widget", display_collection_name: "Widgets", solution_name: "DevKitSolution",
            is_duplicate_detection_enabled: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNotNull(_capturedCreate);
        Assert.IsTrue(_capturedCreate.Entity.IsDuplicateDetectionEnabled.Value);
    }

    [TestMethod]
    public void Create_DryRun_ReportsNotExecuted()
    {
        var result = NewTool(dryRun: true).manage_table(
            display_name: "Widget", display_collection_name: "Widgets", solution_name: "DevKitSolution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "type 'Standard'");
        Assert.AreEqual("not_executed", Structured(result).GetProperty("status").GetString());
        Assert.IsNull(_capturedCreate, "Dry run must not create metadata.");
    }

    [TestMethod]
    [DataRow(null, true, false, false, "is_activity")]
    [DataRow(null, false, true, false, "has_notes")]
    [DataRow("all_widget", true, false, false, "is_activity")]
    [DataRow("all_widget", false, true, false, "has_notes")]
    [DataRow("all_widget", false, true, true, "has_notes")]
    public void CreateOrUpdate_RejectsProtectedFlags(string? logicalName, bool activity, bool notes, bool dryRun, string flag)
    {
        _entities.Add(TestMetadata.Entity("all_widget", "Widget"));
        var result = NewTool(dryRun).manage_table(
            logical_name: logicalName, display_name: "Visits", display_collection_name: "Visits",
            solution_name: "DevKitSolution", is_activity: activity, has_notes: notes);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), flag);
        Assert.IsNull(_capturedCreate);
        Assert.IsNull(_capturedUpdate);
    }

    [TestMethod]
    public void Create_ElasticTable_SetsTableType()
    {
        var result = NewTool().manage_table(
            display_name: "Elastic", display_collection_name: "Elastics",
            solution_name: "DevKitSolution", table_type: "Elastic");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("Elastic", Structured(result).GetProperty("tableType").GetString());
    }

    [TestMethod]
    public void Create_ValidationErrors()
    {
        var tool = NewTool();

        var missingCollection = tool.manage_table(display_name: "Widget", solution_name: "DevKitSolution");
        Assert.IsTrue(missingCollection.IsError == true);
        StringAssert.Contains(missingCollection.GetText(), "display_collection_name is required");

        var missingSolution = tool.manage_table(display_name: "Widget", display_collection_name: "Widgets");
        Assert.IsTrue(missingSolution.IsError == true);
        StringAssert.Contains(missingSolution.GetText(), "solution_name is required");

        var badOwnership = tool.manage_table(
            display_name: "Widget", display_collection_name: "Widgets",
            solution_name: "DevKitSolution", ownership_type: "Team");
        Assert.IsTrue(badOwnership.IsError == true);
        StringAssert.Contains(badOwnership.GetText(), "Invalid ownership_type");

        var badSchema = tool.manage_table(
            display_name: "Widget", display_collection_name: "Widgets",
            solution_name: "DevKitSolution", schema_name: "wrong_Widget");
        Assert.IsTrue(badSchema.IsError == true);
        StringAssert.Contains(badSchema.GetText(), "must start with the publisher prefix");

        var badLogical = tool.manage_table(
            display_name: "Widget", display_collection_name: "Widgets",
            solution_name: "DevKitSolution", logical_name: "wrong_widget");
        Assert.IsTrue(badLogical.IsError == true);
        StringAssert.Contains(badLogical.GetText(), "must start with the publisher prefix");

        var noInput = tool.manage_table();
        Assert.IsTrue(noInput.IsError == true);
        StringAssert.Contains(noInput.GetText(), "logical_name is required");
    }

    [TestMethod]
    public void Create_SchemaPrefixMismatch_ReportsSolutionName()
    {
        var result = NewTool().manage_table(
            display_name: "Widget", display_collection_name: "Widgets",
            solution_name: "DevKitSolution", schema_name: "other_Widget");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "DevKitSolution");
    }

    [TestMethod]
    public void Update_ExistingEntity_AppliesChangesAndWarnsOnImmutable()
    {
        var existing = TestMetadata.Entity("all_widget", "Widget", TestMetadata.String("name", "Name"));
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.OwnershipType))!.SetValue(existing, OwnershipTypes.UserOwned);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.TableType))!.SetValue(existing, "Standard");
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryNameAttribute))!.SetValue(existing, "all_name");
        existing.IsDuplicateDetectionEnabled = new BooleanManagedProperty(true);
        existing.ChangeTrackingEnabled = true;
        existing.IsActivity = true;
        existing.IsActivityParty = true;
        existing.IsBusinessProcessEnabled = true;
        existing.IsConnectionsEnabled = new BooleanManagedProperty(true);
        existing.IsValidForQueue = new BooleanManagedProperty(true);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.HasFeedback))!.SetValue(existing, true);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.HasNotes))!.SetValue(existing, true);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.HasActivities))!.SetValue(existing, true);
        _entities.Add(existing);

        var result = NewTool().manage_table(
            logical_name: "all_widget", display_name: "Gadget",
            display_collection_name: "Gadgets", description: "Updated description",
            is_quick_create_enabled: true, is_audit_enabled: false, is_search_enabled: false,
            ownership_type: "Organization", table_type: "Elastic",
            primary_attribute_name: "all_other", primary_attribute_display_name: "Other Name");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("updated", json.GetProperty("status").GetString());
        Assert.AreEqual("Gadget", json.GetProperty("displayName").GetString());
        var warnings = json.GetProperty("warnings").EnumerateArray().Select(w => w.GetString()!).ToList();
        foreach (var parameterName in new[] { "ownership_type", "table_type", "primary_attribute_name", "primary_attribute_display_name" })
            Assert.IsTrue(warnings.Any(warning => warning.StartsWith(parameterName + " is immutable", StringComparison.Ordinal)),
                $"Expected an immutable warning for '{parameterName}'. Got: {string.Join(" | ", warnings)}");
        Assert.IsNotNull(_capturedUpdate);
        var written = _capturedUpdate.Entity;
        Assert.AreEqual("Gadget", written.DisplayName.LocalizedLabels[0].Label);
        Assert.IsNull(written.IsDuplicateDetectionEnabled);
        Assert.IsNull(written.ChangeTrackingEnabled);
        Assert.IsNull(written.IsActivity);
        Assert.IsNull(written.IsActivityParty);
        Assert.IsNull(written.IsBusinessProcessEnabled);
        Assert.IsNull(written.IsConnectionsEnabled);
        Assert.IsNull(written.IsValidForQueue);
        Assert.IsNull(written.HasFeedback);
        Assert.IsNull(written.HasNotes);
        Assert.IsNull(written.HasActivities);
        Assert.IsFalse(_capturedUpdate.Parameters.Contains("HasNotes"));
        Assert.IsFalse(_capturedUpdate.Parameters.Contains("HasActivities"));
    }

    [TestMethod]
    [DataRow(false, true)]
    [DataRow(true, false)]
    public void Update_DuplicateDetectionChanged_UpdatesMetadataAndPublishes(bool current, bool requested)
    {
        var existing = TestMetadata.Entity("all_widget", "Widget");
        existing.IsDuplicateDetectionEnabled = new BooleanManagedProperty(current);
        _entities.Add(existing);

        var result = NewTool().manage_table(logical_name: "all_widget", is_duplicate_detection_enabled: requested);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNotNull(_capturedUpdate);
        Assert.AreEqual(requested, _capturedUpdate.Entity.IsDuplicateDetectionEnabled.Value);
        Assert.IsNotNull(_capturedPublish);
        StringAssert.Contains(_capturedPublish.ParameterXml, "<entity>all_widget</entity>");
        var json = Structured(result);
        Assert.IsTrue(json.GetProperty("published").GetBoolean());
        var change = json.GetProperty("changes").GetProperty("isDuplicateDetectionEnabled");
        Assert.AreEqual(current.ToString().ToLowerInvariant(), change.GetProperty("oldValue").GetString());
        Assert.AreEqual(requested.ToString().ToLowerInvariant(), change.GetProperty("newValue").GetString());
    }

    [TestMethod]
    [DataRow(true)]
    [DataRow(null)]
    public void Update_DuplicateDetectionUnchanged_DoesNotWriteOrPublish(bool? requested)
    {
        var existing = TestMetadata.Entity("all_widget", "Widget");
        existing.IsDuplicateDetectionEnabled = new BooleanManagedProperty(true);
        _entities.Add(existing);

        var result = NewTool().manage_table(logical_name: "all_widget", is_duplicate_detection_enabled: requested);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "No changes for table");
        Assert.IsNull(_capturedUpdate);
        Assert.IsNull(_capturedPublish);
    }

    [TestMethod]
    public void Update_DuplicateDetectionDryRun_PreviewsWithoutWritingOrPublishing()
    {
        var existing = TestMetadata.Entity("all_widget", "Widget");
        existing.IsDuplicateDetectionEnabled = new BooleanManagedProperty(true);
        _entities.Add(existing);

        var result = NewTool(dryRun: true).manage_table(logical_name: "all_widget", is_duplicate_detection_enabled: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "IsDuplicateDetectionEnabled: true -> false");
        Assert.AreEqual("not_executed", Structured(result).GetProperty("status").GetString());
        Assert.IsNull(_capturedUpdate);
        Assert.IsNull(_capturedPublish);
    }

    [TestMethod]
    public void Update_NoChanges_ReportsNoChanges()
    {
        var existing = TestMetadata.Entity("all_widget", "Widget");
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.OwnershipType))!.SetValue(existing, OwnershipTypes.UserOwned);
        _entities.Add(existing);

        var result = NewTool().manage_table(logical_name: "all_widget");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "No changes for table");
    }

    [TestMethod]
    public void Update_LogicalNameNotFound_CreatesInstead()
    {
        var result = NewTool().manage_table(
            logical_name: "all_missing", display_name: "Widget",
            display_collection_name: "Widgets", solution_name: "DevKitSolution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNotNull(_capturedCreate, "Unknown logical name + display names → create path.");
    }
}
