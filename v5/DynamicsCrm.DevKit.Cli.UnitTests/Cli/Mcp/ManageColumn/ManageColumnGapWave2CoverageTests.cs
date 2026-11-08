using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Wave-2 gap coverage for ManageColumnTool on a FakeSdkClient: the
/// integer "none" format resolution, autonumber updates that keep the Text
/// format, invalid boolean default values, the dry-run summary warning
/// suffix, and both SetAutoNumberSeed failure shapes on the update path
/// (plain failure → warning; mutation-blocked → rethrow).
///
/// NOTE (dead code — not covered by design):
/// - manage_column lines ~393-401 (anti-collision check): `logical_name` is
///   assigned `attributeName` a few lines above, so the
///   `IsNullOrWhiteSpace(logical_name)` guard can never be true.
/// - manage_column lines ~406-408 and UpdateExistingAttribute ~2262-2264
///   (invalid required_level errors): required_level is already validated
///   early in manage_column (~121-127) before any Dataverse call.
/// - CreateTypedColumn default case ~519-521 (unknown attribute_type):
///   attribute_type is validated against the full type list early (~110-119).
/// - CreateStringAttribute ~629-630 and UpdateExistingAttribute ~2453-2455
///   (`catch (InvalidOperationException) when (_context.MutationsBlocked)`):
///   with a blocked context the first DataverseMutationExecutor call
///   (create/update metadata request) throws before these catch blocks are
///   reachable, so the seed/Web-Api catches never see the flag.
/// - AppendFooter(sb, solutionName, entityName, metadataId) instance
///   overload ~1816-1820: unused — every call site uses the static overload.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageColumnGapWave2CoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<EntityMetadata> _entities = new();
    private Entity? _solution;
    private Entity? _publisher;
    private readonly List<AttributeMetadata> _updated = new();
    private bool _failSeedPlain;
    private int _seedLockFailures;

    [TestInitialize]
    public void Setup()
    {
        // The fake service has no propagation delay — skip every metadata wait,
        // including the lock-retry backoff sleeps.
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        _fake = new FakeSdkClient();
        _entities = new List<EntityMetadata>
        {
            TestMetadata.Entity("account", "Account")
        };
        _updated.Clear();
        _failSeedPlain = false;
        _seedLockFailures = 0;

        var pubId = Guid.NewGuid();
        _publisher = new Entity("publisher", pubId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
        _solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", pubId)
        };

        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "publisher" && _publisher != null && id == _publisher.Id) return _publisher;
            return new Entity(entityName, id);
        };
    }

    public void Dispose()
    {
        _fake.Dispose();
        MetadataOperationWaitHelper.WaitScalePercent = 100;
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request)
    {
        switch (request)
        {
            case RetrieveAllEntitiesRequest:
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                };
            case RetrieveEntityRequest r:
            {
                var entity = _entities.FirstOrDefault(e =>
                    string.Equals(e.LogicalName, r.LogicalName, StringComparison.OrdinalIgnoreCase));
                return new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = entity ?? TestMetadata.Entity(r.LogicalName, r.LogicalName) }
                };
            }
            case RetrieveAttributeRequest r:
            {
                var entity = _entities.FirstOrDefault(e =>
                    string.Equals(e.LogicalName, r.EntityLogicalName, StringComparison.OrdinalIgnoreCase));
                var attribute = entity?.Attributes?.FirstOrDefault(a => a.LogicalName == r.LogicalName)
                    ?? new StringAttributeMetadata { LogicalName = r.LogicalName };
                return new RetrieveAttributeResponse { Results = { ["AttributeMetadata"] = attribute } };
            }
            case UpdateAttributeRequest r:
                _updated.Add(r.Attribute);
                return new UpdateAttributeResponse();
            case CreateAttributeRequest r:
                r.Attribute.MetadataId = Guid.NewGuid();
                return new CreateAttributeResponse { Results = { ["AttributeId"] = r.Attribute.MetadataId } };
            case PublishXmlRequest:
                return new OrganizationResponse();
            case SetAutoNumberSeedRequest when _failSeedPlain:
                throw new InvalidOperationException("Seed executor forced failure.");
            case SetAutoNumberSeedRequest when _seedLockFailures > 0:
                _seedLockFailures--;
                throw new InvalidOperationException("SetAutoNumberSeed failed due to a lock. Another metadata operation is running.");
            case SetAutoNumberSeedRequest:
                return new OrganizationResponse();
            default:
                return new OrganizationResponse();
        }
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "solution" when _solution != null => new EntityCollection(new[] { _solution }),
                "publisher" when _publisher != null => new EntityCollection(new[] { _publisher }),
                _ => new EntityCollection()
            };
        }
        if (query is FetchExpression fe && fe.Query.Contains("entity name='organization'"))
        {
            return new EntityCollection(new[] { new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 } });
        }
        return new EntityCollection();
    }

    private ManageColumnTool NewTool(bool dryRun = false, bool blocked = false)
    {
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        return new ManageColumnTool(_fake.Client, new McpDryRunOptions { DryRun = dryRun },
            blocked ? DryRunTestHelpers.BlockedContext() : DryRunTestHelpers.NormalContext(), null!);
    }

    private static EntityMetadata EntityWith(AttributeMetadata attr)
    {
        TestMetadata.Set(attr, nameof(AttributeMetadata.LogicalName), attr.LogicalName);
        return TestMetadata.Entity("account", "Account", attr);
    }

    private StringAttributeMetadata SeedAutonumberAttribute(string logicalName = "dev_autonum")
    {
        var attr = new StringAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = "Dev_Autonum",
            MaxLength = 100,
            FormatName = StringFormatName.Text,
            AutoNumberFormat = "OLD-{SEQNUM:3}"
        };
        _entities = [EntityWith(attr)];
        return attr;
    }

    // ── create paths ─────────────────────────────────────────────────────

    [TestMethod]
    public void Create_Integer_FormatNone_KeepsNoneFormat()
    {
        var result = NewTool().manage_column(entity_name: "account", attribute_type: "integer",
            display_name: "Dev Count", format: "none", solution_name: "DevKit");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created Integer column");
    }

    [TestMethod]
    public void Update_AutoNumberWithExplicitTextFormat_Succeeds()
    {
        SeedAutonumberAttribute();

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_format: "NEW-{SEQNUM:4}", format: "Text");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Updated column 'dev_autonum'");
        var updated = _updated.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("NEW-{SEQNUM:4}", updated.AutoNumberFormat);
    }

    [TestMethod]
    public void Update_BooleanInvalidDefaultValue_ReturnsError()
    {
        var attr = new BooleanAttributeMetadata { LogicalName = "dev_flag", SchemaName = "Dev_Flag" };
        _entities = [EntityWith(attr)];

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_flag",
            default_value: "maybe");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid default_value 'maybe' for boolean.");
        StringAssert.Contains(result.GetText(), "Expected 'true', 'false', '1', or '0'.");
    }

    [TestMethod]
    public void Update_DryRunWithAutoNumberWarnings_ListsWarnings()
    {
        var attr = SeedAutonumberAttribute();
        attr.MaxLength = 11; // pattern minimum 8 + 5 → 11 triggers the "close to minimum" warning

        // The dry-run summary appends the warning count after the change list.
        var result = NewTool(dryRun: true).manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_format: "AB-{SEQNUM:5}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "[DryRun]");
        StringAssert.Contains(result.GetText(), "1 warning(s).");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "is close to the pattern");
    }

    // ── update seed paths ────────────────────────────────────────────────

    [TestMethod]
    public void Update_SeedFailsPlainException_BecomesWarning()
    {
        SeedAutonumberAttribute();
        _failSeedPlain = true;

        var result = NewTool().manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_seed: 9000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "Column updated but SetAutoNumberSeed failed: Seed executor forced failure.");
    }

    [TestMethod]
    public void Update_SeedOnly_MutationBlocked_Rethrows()
    {
        SeedAutonumberAttribute();

        // A seed-only update skips the publish, then hits the fail-closed
        // mutation gateway. The seed's mutation-blocked rethrow is caught by
        // UpdateExistingAttribute's own catch-all and surfaces as an error
        // result carrying the refusal — never as a lock-contention warning.
        var result = NewTool(blocked: true).manage_column(entity_name: "account", logical_name: "dev_autonum",
            auto_number_seed: 9000);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Failed to update attribute 'account.dev_autonum'");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "Mutation blocked: Execute SetAutoNumberSeed");
        Assert.IsFalse(json.Contains("SetAutoNumberSeed failed"),
            "the block refusal must not be rewritten as a retry warning.");
    }
}
