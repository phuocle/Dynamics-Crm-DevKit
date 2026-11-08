using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Error and rare-branch coverage for <see cref="ManageColumnTool"/>:
/// mutually-exclusive autonumber parameters, missing-create-inputs errors,
/// autonumber+format interplay, the DataverseNamer fallback for the default
/// publisher prefix, formula-clone source-type mismatches, the formula-clone
/// double-failure fallback, per-type retry exhaustion after lock contention,
/// and the post-publish propagation waits on the success paths.
/// </summary>
[TestClass]
public sealed class ManageColumnErrorPathCoverageTests
{
    private static readonly BindingFlags PrivateInstance = BindingFlags.Instance | BindingFlags.NonPublic;

    [TestInitialize]
    public void Setup() => MetadataOperationWaitHelper.WaitScalePercent = 0;

    [TestMethod]
    public void ClearAutoNumber_AndAutoNumberFormat_AreMutuallyExclusive()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        var result = tool.manage_column(entity_name: "account", clear_auto_number: true, auto_number_format: "TKT-{SEQNUM:5}");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "mutually exclusive");
    }

    [TestMethod]
    public void CreateMode_WithoutTypeOrLogicalName_ListsRequiredInputs()
    {
        using var harness = new ColumnHarness();
        harness.Entities.Add(TestMetadata.Entity("mc_bare_entity", "Bare Entity"));
        var tool = harness.NewTool();

        var result = tool.manage_column(entity_name: "mc_bare_entity");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "logical_name is required to update an existing column, or attribute_type + display_name to create a new one.");
    }

    [TestMethod]
    public void CreateString_AutoNumber_WithTextFormat_PassesAndPreviews()
    {
        using var harness = new ColumnHarness();
        harness.Entities.Add(TestMetadata.Entity("mc_auto_entity", "Auto Entity"));
        var tool = harness.NewTool(dryRun: true);

        var result = tool.manage_column(entity_name: "mc_auto_entity", attribute_type: "string",
            display_name: "Ticket Number", solution_name: "DevKit",
            auto_number_format: "TKT-{SEQNUM:5}", format: "Text", auto_number_seed: 5000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var text = result.GetText();
        StringAssert.Contains(text, "Would CREATE String column");
        StringAssert.Contains(text, "AutoNumberFormat: TKT-{SEQNUM:5}");
        StringAssert.Contains(text, "SetAutoNumberSeed=5000");
    }

    [TestMethod]
    public void CreateString_DefaultPublisherPrefix_UsesFallbackSchemaName()
    {
        using var harness = new ColumnHarness(publisherPrefix: "new");
        harness.Entities.Add(TestMetadata.Entity("mc_new_entity", "New Entity"));
        var tool = harness.NewTool(dryRun: true);

        var result = tool.manage_column(entity_name: "mc_new_entity", attribute_type: "string",
            display_name: "Dev Text", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var schemaName = harness.Structured(result).GetProperty("schemaName").GetString();
        Assert.AreEqual("new_DevText", schemaName);
    }

    [TestMethod]
    public void FormulaClone_SourceTypeMismatch_RejectedThenMatchingAccepted()
    {
        using var harness = new ColumnHarness();
        harness.Entities.Add(TestMetadata.Entity("mc_clone_entity", "Clone Entity"));
        harness.RegisterFormulaSource("mc_src", "mc_calc");
        var tool = harness.NewTool(dryRun: true);

        var mismatch = tool.manage_column(entity_name: "mc_clone_entity", attribute_type: "string",
            display_name: "Cloned Field", solution_name: "DevKit",
            formula_definition: "mc_src:mc_calc", formula_source_type: "rollup");

        Assert.IsTrue(mismatch.IsError == true, mismatch.GetText());
        StringAssert.Contains(mismatch.GetText(), "formula_source_type does not match source column 'mc_src:mc_calc'");

        var matching = tool.manage_column(entity_name: "mc_clone_entity", attribute_type: "string",
            display_name: "Cloned Field", solution_name: "DevKit",
            formula_definition: "mc_src:mc_calc", formula_source_type: "calculated");

        Assert.IsFalse(matching.IsError == true, matching.GetText());
        StringAssert.Contains(matching.GetText(), "Would CREATE String column");
    }

    [TestMethod]
    public void FormulaClone_CreateFailsTwice_ReportsFallbackError()
    {
        using var harness = new ColumnHarness();
        harness.Entities.Add(TestMetadata.Entity("mc_clone2_entity", "Clone Two Entity"));
        harness.RegisterFormulaSource("mc_src", "mc_calc");
        harness.CreateAttributeException = new ArgumentException("mc boom during create");
        var tool = harness.NewTool();

        var result = tool.manage_column(entity_name: "mc_clone2_entity", attribute_type: "string",
            display_name: "Cloned Two", solution_name: "DevKit",
            formula_definition: "mc_src:mc_calc");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "mc boom during create");
        Assert.AreEqual(0, harness.Created.Count, "the fallback create also failed, so nothing was recorded");
    }

    // ──────────────────────────────────────────────
    // lock-contention retry exhaustion — one test per create method
    // ──────────────────────────────────────────────

    [TestMethod]
    public void CreateString_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_str_retry", "String Retry");
        var result = tool.manage_column(entity_name: "mc_str_retry", attribute_type: "string",
            display_name: "String Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateMemo_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_memo_retry", "Memo Retry");
        var result = tool.manage_column(entity_name: "mc_memo_retry", attribute_type: "memo",
            display_name: "Memo Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateInteger_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_int_retry", "Integer Retry");
        var result = tool.manage_column(entity_name: "mc_int_retry", attribute_type: "integer",
            display_name: "Integer Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateDecimal_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_dec_retry", "Decimal Retry");
        var result = tool.manage_column(entity_name: "mc_dec_retry", attribute_type: "decimal",
            display_name: "Decimal Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateMoney_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_money_retry", "Money Retry");
        var result = tool.manage_column(entity_name: "mc_money_retry", attribute_type: "money",
            display_name: "Money Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateFloat_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_float_retry", "Float Retry");
        var result = tool.manage_column(entity_name: "mc_float_retry", attribute_type: "float",
            display_name: "Float Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateBoolean_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_bool_retry", "Bool Retry");
        var result = tool.manage_column(entity_name: "mc_bool_retry", attribute_type: "boolean",
            display_name: "Bool Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateDateTime_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_dt_retry", "Date Retry");
        var result = tool.manage_column(entity_name: "mc_dt_retry", attribute_type: "datetime",
            display_name: "Date Retry", solution_name: "DevKit");
        AssertRetryFailure(result, harness);
    }

    [TestMethod]
    public void CreateLookup_LockContentionExhausted_ReportsRetryFailure()
    {
        var (tool, harness) = NewContentionTool("mc_lk_retry", "Lookup Retry");
        harness.Entities.Add(TestMetadata.Entity("mc_lk_target", "Lookup Target"));
        harness.CreateOneToManyException = LockContention();
        var result = tool.manage_column(entity_name: "mc_lk_retry", attribute_type: "lookup",
            display_name: "Lookup Retry", solution_name: "DevKit", lookup_target: "mc_lk_target");
        AssertRetryFailure(result, harness);
    }

    // ──────────────────────────────────────────────
    // success paths: publish succeeds → propagation wait + structured result
    // ──────────────────────────────────────────────

    [TestMethod]
    public void CreateString_Success_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_str_ok", "String Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_str_ok", attribute_type: "string",
            display_name: "String Ok", solution_name: "DevKit");
        AssertCreated(result, harness, "String");
    }

    [TestMethod]
    public void CreateMemo_Success_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_memo_ok", "Memo Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_memo_ok", attribute_type: "memo",
            display_name: "Memo Ok", solution_name: "DevKit");
        AssertCreated(result, harness, "Memo");
    }

    [TestMethod]
    public void CreateInteger_Success_WithDescription_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_int_ok", "Integer Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_int_ok", attribute_type: "integer",
            display_name: "Integer Ok", description: "int description", solution_name: "DevKit");
        AssertCreated(result, harness, "Integer");
        // Label(text, langCode) fills LocalizedLabels only — UserLocalizedLabel stays null.
        Assert.AreEqual("int description",
            harness.Created.OfType<IntegerAttributeMetadata>().Single().Description?.LocalizedLabels.FirstOrDefault()?.Label);
    }

    [TestMethod]
    public void CreateDecimal_Success_WithDescription_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_dec_ok", "Decimal Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_dec_ok", attribute_type: "decimal",
            display_name: "Decimal Ok", description: "dec description", solution_name: "DevKit");
        AssertCreated(result, harness, "Decimal");
    }

    [TestMethod]
    public void CreateMoney_Success_WithDescription_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_money_ok", "Money Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_money_ok", attribute_type: "money",
            display_name: "Money Ok", description: "money description", solution_name: "DevKit");
        AssertCreated(result, harness, "Money");
    }

    [TestMethod]
    public void CreateFloat_Success_WithDescription_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_float_ok", "Float Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_float_ok", attribute_type: "float",
            display_name: "Float Ok", description: "float description", solution_name: "DevKit");
        AssertCreated(result, harness, "Float");
    }

    [TestMethod]
    public void CreateBoolean_Success_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_bool_ok", "Bool Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_bool_ok", attribute_type: "boolean",
            display_name: "Bool Ok", solution_name: "DevKit");
        AssertCreated(result, harness, "Boolean");
    }

    [TestMethod]
    public void CreateDateTime_Success_WithDescription_PublishesAndReports()
    {
        var tool = NewSuccessTool("mc_dt_ok", "Date Ok", out var harness);
        var result = tool.manage_column(entity_name: "mc_dt_ok", attribute_type: "datetime",
            display_name: "Date Ok", description: "date description", solution_name: "DevKit");
        AssertCreated(result, harness, "DateTime");
    }

    [TestMethod]
    public void CreateLookup_Success_LongRelationshipNameTruncated_WithDescription()
    {
        var tool = NewSuccessTool("mc_lk_ok", "Lookup Ok", out var harness);
        harness.Entities.Add(TestMetadata.Entity("mc_lk_ok_target", "Lookup Ok Target"));
        var longRelationshipName = new string('r', 120);

        var result = tool.manage_column(entity_name: "mc_lk_ok", attribute_type: "lookup",
            display_name: "Lookup Ok", description: "lookup description",
            solution_name: "DevKit", lookup_target: "mc_lk_ok_target",
            lookup_relationship_name: longRelationshipName);

        AssertCreated(result, harness, "Lookup");
        var extra = harness.Structured(result).GetProperty("extra");
        Assert.AreEqual(100, extra.GetProperty("relationshipName").GetString()!.Length);
        StringAssert.Contains(result.GetText(), "Created Lookup column");
    }

    [TestMethod]
    public void CreateLookup_EmptyTargetList_IsRejected()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        var result = InvokePrivate<CallToolResult>(tool, "CreateLookupAttribute",
            "mc_any", "devkit_l", "devkit_L", "L", "", " , ", "", "devkit", "sol", null);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "No valid target entities found in lookup_target");
    }

    // ──────────────────────────────────────────────
    // harness
    // ──────────────────────────────────────────────

    private static Exception LockContention() =>
        new("Another metadata operation is already running for this table.");

    private static (ManageColumnTool tool, ColumnHarness harness) NewContentionTool(string entityName, string displayName)
    {
        var harness = new ColumnHarness { CreateAttributeException = LockContention() };
        harness.Entities.Add(TestMetadata.Entity(entityName, displayName));
        return (harness.NewTool(), harness);
    }

    private static ManageColumnTool NewSuccessTool(string entityName, string displayName, out ColumnHarness harness)
    {
        harness = new ColumnHarness();
        harness.Entities.Add(TestMetadata.Entity(entityName, displayName));
        return harness.NewTool();
    }

    private static void AssertRetryFailure(CallToolResult result, ColumnHarness harness)
    {
        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "after multiple retry attempts");
        Assert.AreEqual(0, harness.PublishedCount, "publish must not run after a failed create");
    }

    private static void AssertCreated(CallToolResult result, ColumnHarness harness, string typeName)
    {
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(1, harness.Created.Count);
        Assert.IsTrue(harness.PublishedCount >= 1, "the entity must be published after a successful create");
        var json = harness.Structured(result);
        Assert.AreEqual("created", json.GetProperty("status").GetString());
        Assert.AreEqual(typeName, json.GetProperty("attributeType").GetString());
        Assert.IsTrue(json.GetProperty("published").GetBoolean());
    }

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
    /// FakeSdkClient wired for manage_column flows: entity metadata reads,
    /// attribute create (with optional fault injection), one-to-many create,
    /// publish, solution/publisher resolution and the organization language row.
    /// </summary>
    private sealed class ColumnHarness : IDisposable
    {
        public FakeSdkClient Fake { get; } = new();
        public List<EntityMetadata> Entities { get; } = new();
        public List<AttributeMetadata> Created { get; } = new();
        public int PublishedCount { get; private set; }

        public Exception? CreateAttributeException;
        public Exception? CreateOneToManyException;

        private readonly List<AttributeMetadata> _formulaSources = new();

        public ColumnHarness(string publisherPrefix = "dev")
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
                RetrieveAttributeRequest r => AttributeResponse(r),
                CreateAttributeRequest c => CreateAttributeException != null
                    ? throw CreateAttributeException
                    : RecordCreated(c.Attribute),
                CreateOneToManyRequest r => CreateOneToManyException != null
                    ? throw CreateOneToManyException
                    : RecordLookupCreated(r.Lookup),
                PublishXmlRequest => Publish(),
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
                    ["customizationprefix"] = publisherPrefix,
                    ["customizationoptionvalueprefix"] = 10000
                }
                : throw new InvalidOperationException($"Unexpected retrieve of '{entityName}'");
        }

        public ManageColumnTool NewTool(bool dryRun = false) =>
            new(Fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext(), null!);

        public void RegisterFormulaSource(string entityName, string attributeName)
        {
            var attr = TestMetadata.String(attributeName, "Formula Source");
            TestMetadata.Set(attr, nameof(AttributeMetadata.SourceType), (int?)1);
            attr.FormulaDefinition = "Sum(...)";
            _formulaSources.Add(attr);
        }

        public JsonElement Structured(CallToolResult result) =>
            JsonSerializer.Deserialize<JsonElement>(result.StructuredContent!.Value.GetRawText());

        private OrganizationResponse AttributeResponse(RetrieveAttributeRequest request)
        {
            AttributeMetadata? match = null;
            if (request.MetadataId is Guid id && id != Guid.Empty)
                match = Created.FirstOrDefault(a => a.MetadataId == id);
            match ??= _formulaSources.FirstOrDefault(a =>
                string.Equals(a.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase));
            match ??= Created.FirstOrDefault(a =>
                string.Equals(a.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase));

            var response = new RetrieveAttributeResponse();
            response.Results["AttributeMetadata"] = match ?? new StringAttributeMetadata
            {
                LogicalName = request.LogicalName ?? ""
            };
            return response;
        }

        private OrganizationResponse RecordCreated(AttributeMetadata attribute)
        {
            attribute.MetadataId = Guid.NewGuid();
            Created.Add(attribute);
            var response = new CreateAttributeResponse();
            response.Results["AttributeId"] = attribute.MetadataId;
            return response;
        }

        private OrganizationResponse RecordLookupCreated(AttributeMetadata attribute)
        {
            RecordCreated(attribute);
            var response = new CreateOneToManyResponse();
            response.Results["AttributeId"] = attribute.MetadataId;
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
