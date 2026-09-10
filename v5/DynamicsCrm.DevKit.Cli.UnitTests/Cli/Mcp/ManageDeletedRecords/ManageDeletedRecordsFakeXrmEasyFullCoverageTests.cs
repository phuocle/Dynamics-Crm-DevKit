using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
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
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageDeletedRecords;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageDeletedRecordsTool (list/detail/restore/
/// status/turn plus recyclebinconfig helpers). Bin datasource FetchExpression queries
/// (which FakeXrmEasy cannot evaluate), role-gate role fetches, WhoAmI, and the
/// custom "Restore" OrganizationRequest are answered by the org service decorator;
/// recyclebinconfig/entity QueryExpressions and metadata requests hit FakeXrmEasy or
/// the decorator's seeded metadata; turn-on-without-row goes through a fake
/// IWebApiExecutor POST /recyclebinconfigs.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageDeletedRecordsFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private DeletedRecordsOrgService _service = null!;
    private FakeWebApiExecutor _webApi = null!;
    private Guid _organizationEntityRowId;

    [TestInitialize]
    public void Setup()
    {
        // GetOrganizationEntityId caches into a static field — reset per test so
        // seeding decisions (entity row present or not) stay deterministic.
        typeof(ManageDeletedRecordsTool)
            .GetField("_cachedOrganizationEntityId", BindingFlags.Static | BindingFlags.NonPublic)!
            .SetValue(null, null);

        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-deleted-records-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new DeletedRecordsOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeEntityMetadata("account", "Account", "accountid", "name", 1));
        _service.Entities.Add(MakeEntityMetadata("another", "Account Two", "anotherid", "name", 2));

        _webApi = new FakeWebApiExecutor();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageDeletedRecordsTool NewTool(bool dryRun = false, bool mutationsBlocked = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked), _webApi);

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeEntityMetadata(string logical, string display, string idAttr, string nameAttr, int otc)
    {
        var name = new StringAttributeMetadata { LogicalName = nameAttr, SchemaName = nameAttr, DisplayName = MakeLabel("Name") };
        var meta = new EntityMetadata { LogicalName = logical, SchemaName = display, DisplayName = MakeLabel(display) };
        Set(meta, "PrimaryIdAttribute", idAttr);
        Set(meta, "PrimaryNameAttribute", nameAttr);
        Set(meta, "ObjectTypeCode", otc);
        Set(meta, "Attributes", new AttributeMetadata[] { name });
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private Guid SeedOrgBinRow(bool ready = false, int statecode = 1, int? days = null)
    {
        var id = Guid.NewGuid();
        var row = new Entity("recyclebinconfig", id)
        {
            ["name"] = "organization",
            ["isreadyforrecyclebin"] = ready,
            ["statecode"] = new OptionSetValue(statecode)
        };
        if (days.HasValue) row["cleanupintervalindays"] = days.Value;
        _ctx.GetOrganizationService().Create(row);
        return id;
    }

    private void SeedEnabledTableRows(params string[] names)
    {
        foreach (var name in names)
        {
            _ctx.GetOrganizationService().Create(new Entity("recyclebinconfig", Guid.NewGuid())
            {
                ["name"] = name,
                ["isreadyforrecyclebin"] = true,
                ["statecode"] = new OptionSetValue(0)
            });
        }
    }

    private void SeedOrganizationEntityRow()
    {
        _organizationEntityRowId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("entity", _organizationEntityRowId)
        {
            ["entityid"] = _organizationEntityRowId,
            ["logicalname"] = "organization"
        });
    }

    private static Entity MakeDeletedAccountRow(Guid id, string name = "Deleted One")
    {
        var row = new Entity("account", id)
        {
            ["accountid"] = id,
            ["name"] = name,
            ["createdon"] = new DateTime(2026, 2, 1, 12, 0, 0, DateTimeKind.Utc),
            ["modifiedon"] = new DateTime(2026, 3, 5, 9, 15, 0, DateTimeKind.Utc),
            ["modifiedby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Jane Reviewer" }
        };
        return row;
    }

    private void GrantAdmin() => _service.RoleNames.Add("System Administrator");

    private static HttpResponseMessage ODataResponse(HttpStatusCode code, string? body = null, string? entityIdHeader = null)
    {
        var resp = new HttpResponseMessage(code);
        if (entityIdHeader != null)
            resp.Headers.Add("OData-EntityId", entityIdHeader);
        if (body != null)
            resp.Content = new StringContent(body, Encoding.UTF8, "application/json");
        return resp;
    }

    private static string Text(CallToolResult r) => r.GetText();

    private static JsonElement Structured(CallToolResult r) => r.StructuredContent!.Value;

    // ──────────────────────────────────────────────
    // dispatcher
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Action_TrimmedAndCaseInsensitive_RunsList()
    {
        var result = NewTool().manage_deleted_records("  LIST  ", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 0 deleted records.");
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public void List_UnknownEntity_ReturnsResolveErrorFirstLine()
    {
        var result = NewTool().manage_deleted_records("list", "nosuchentity");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'nosuchentity' was not found by Display Name or Logical/Unique/Schema Name.");
        StringAssert.Contains(Text(result), "[Hint] Use get_tables to list entities.");
    }

    [TestMethod]
    public void List_AmbiguousDisplayName_ReturnsAmbiguousError()
    {
        var result = NewTool().manage_deleted_records("list", "Acc");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple candidates match 'Acc' during display name search.");
    }

    [TestMethod]
    public void List_NoDeletedRecords_ReturnsZero()
    {
        var result = NewTool().manage_deleted_records("list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 0 deleted records.");
        Assert.AreEqual(0, Structured(result).GetProperty("totalCount").GetInt32());
    }

    [TestMethod]
    public void List_TwoDeletedRecords_ReturnsCountAndStructuredRows()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 15);
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();
        _service.BinResponder = _ =>
        {
            var ec = new EntityCollection();
            ec.Entities.Add(MakeDeletedAccountRow(idA, "Deleted One"));
            ec.Entities.Add(MakeDeletedAccountRow(idB, "Deleted Two"));
            return ec;
        };

        var result = NewTool().manage_deleted_records("list", "account");

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 2 deleted record(s).");
        var structured = Structured(result);
        Assert.AreEqual("list", structured.GetProperty("action").GetString());
        Assert.AreEqual("account", structured.GetProperty("entityName").GetString());
        Assert.AreEqual(2, structured.GetProperty("totalCount").GetInt32());
        Assert.AreEqual(2, structured.GetProperty("records").GetArrayLength());
        var first = structured.GetProperty("records")[0];
        Assert.AreEqual(idA.ToString(), first.GetProperty("recordId").GetString());
        Assert.AreEqual("Deleted One", first.GetProperty("recordName").GetString());
        Assert.AreEqual("2026-03-05 09:15:00", first.GetProperty("modifiedOn").GetString());
        Assert.AreEqual("2026-02-01 12:00:00", first.GetProperty("createdOn").GetString());
        Assert.AreEqual("Jane Reviewer", first.GetProperty("modifiedBy").GetString());
        Assert.AreEqual("2026-03-20 09:15:00", first.GetProperty("expiresOn").GetString());
        Assert.IsTrue(first.GetProperty("canRestore").GetBoolean());
    }

    [TestMethod]
    public void List_DisplayNameInput_ResolvesToLogicalName()
    {
        var result = NewTool().manage_deleted_records("list", "Account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 0 deleted records.");
    }

    [TestMethod]
    public void List_CompositeDisplayAndIdentifier_Resolves()
    {
        var result = NewTool().manage_deleted_records("list", "Account(account)");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 0 deleted records.");
    }

    [TestMethod]
    public void List_NameFilter_BuildsLikeCondition()
    {
        var idA = Guid.NewGuid();
        _service.BinResponder = _ =>
        {
            var ec = new EntityCollection();
            ec.Entities.Add(MakeDeletedAccountRow(idA, "Acme Holdings"));
            return ec;
        };

        var result = NewTool().manage_deleted_records("list", "account", name_filter: "Acme");

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "account: 1 deleted record(s).");
        var fetch = _service.BinFetches.Single();
        StringAssert.Contains(fetch, "operator='like'");
        StringAssert.Contains(fetch, "value='%Acme%'");
    }

    [TestMethod]
    public void List_NameFilter_XmlEscapesFilterValue()
    {
        var result = NewTool().manage_deleted_records("list", "account", name_filter: "A&B");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(_service.BinFetches.Single(), "value='%A&amp;B%'");
    }

    [TestMethod]
    public void List_ZeroMaxRecords_ClampsTo100()
    {
        var result = NewTool().manage_deleted_records("list", "account", max_records: 0);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(_service.BinFetches.Single(), "top='100'");
    }

    [TestMethod]
    public void List_HugeMaxRecords_ClampsTo5000()
    {
        var result = NewTool().manage_deleted_records("list", "account", max_records: 9999);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(_service.BinFetches.Single(), "top='5000'");
    }

    [TestMethod]
    public void List_BinQueryThrows_SurfacesFriendlyError()
    {
        _service.BinResponder = _ => throw new InvalidOperationException("recycle bin exploded");
        var result = NewTool().manage_deleted_records("list", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "recycle bin exploded");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_UnknownEntity_ReturnsResolveError()
    {
        var result = NewTool().manage_deleted_records("detail", "nosuchentity", Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'nosuchentity' was not found by Display Name or Logical/Unique/Schema Name.");
    }

    [TestMethod]
    public void Detail_RecordNotInBin_ReturnsNotFoundWithHint()
    {
        var id = Guid.NewGuid();
        var result = NewTool().manage_deleted_records("detail", "account", id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"account {id}: not found in bin.");
        var structured = Structured(result);
        Assert.IsTrue(structured.GetProperty("notFound").GetBoolean());
        StringAssert.Contains(structured.GetProperty("notFoundHint").GetString()!, "manage_record(action='read'");
    }

    [TestMethod]
    public void Detail_FoundRecord_FormatsAllAttributeTypes()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 15);
        var id = Guid.NewGuid();
        var someGuid = Guid.NewGuid();
        var lookupId = Guid.NewGuid();
        _service.BinResponder = _ =>
        {
            var row = MakeDeletedAccountRow(id, "Deleted Account");
            row["modifiedon"] = new DateTime(2026, 1, 10, 8, 30, 0, DateTimeKind.Utc);
            row["createdon"] = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc);
            row["new_bool"] = true;
            row["new_money"] = new Money(12.5m);
            row["new_option"] = new OptionSetValue(3);
            row.FormattedValues["new_option"] = "Preferred";
            row["new_ref"] = new EntityReference("account", lookupId) { Name = "Ref Co" };
            row["new_refnoname"] = new EntityReference("contact", Guid.NewGuid());
            row["new_guid"] = someGuid;
            row["new_null"] = null;
            var ec = new EntityCollection();
            ec.Entities.Add(row);
            return ec;
        };

        var result = NewTool().manage_deleted_records("detail", "account", id.ToString());

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"account {id}: 11 attributes from bin.");
        StringAssert.Contains(Text(result), "11 attributes from bin");
        var json = Structured(result).GetRawText();
        StringAssert.Contains(json, "Preferred");
        StringAssert.Contains(json, "Yes");
        StringAssert.Contains(json, "12.50");
        StringAssert.Contains(json, "Ref Co");
        StringAssert.Contains(json, "Jane Reviewer");
        StringAssert.Contains(json, "2026-01-10 08:30:00");

        var structured = Structured(result);
        Assert.AreEqual("detail", structured.GetProperty("action").GetString());
        Assert.AreEqual(id.ToString(), structured.GetProperty("recordId").GetString());
        Assert.AreEqual("Deleted Account", structured.GetProperty("recordName").GetString());
        Assert.AreEqual("2026-01-25 08:30:00", structured.GetProperty("expiresOn").GetString());
        Assert.AreEqual(1, structured.GetProperty("totalCount").GetInt32());
    }

    // ──────────────────────────────────────────────
    // restore
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Restore_UnknownEntity_ReturnsResolveError()
    {
        var result = NewTool().manage_deleted_records("restore", "nosuchentity",
            record_ids: new[] { Guid.NewGuid().ToString() });
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'nosuchentity' was not found by Display Name or Logical/Unique/Schema Name.");
    }

    [TestMethod]
    public void Restore_DryRun_PreviewsWithoutMutating()
    {
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();

        var result = NewTool(dryRun: true).manage_deleted_records("restore", "account",
            record_ids: new[] { idA.ToString(), idB.ToString() });

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would restore 2 record(s) of account.");
        Assert.AreEqual(0, _service.Restores);
        Assert.AreEqual(0, _service.BinFetches.Count);
        var structured = Structured(result);
        Assert.AreEqual(0, structured.GetProperty("restored").GetInt32());
        Assert.AreEqual(2, structured.GetProperty("results").GetArrayLength());
        Assert.AreEqual("not_executed", structured.GetProperty("results")[0].GetProperty("status").GetString());
    }

    [TestMethod]
    public void Restore_WithPrefix_FetchesNamesAndRestoresPrefixed()
    {
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();
        _service.BinResponder = _ =>
        {
            var ec = new EntityCollection();
            ec.Entities.Add(new Entity("account", idA) { ["name"] = "Old A" });
            ec.Entities.Add(new Entity("account", idB) { ["name"] = "Old B" });
            return ec;
        };

        var result = NewTool().manage_deleted_records("restore", "account",
            record_ids: new[] { idA.ToString(), idB.ToString() });

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[Success] account: Restored 2/2 record(s).");
        StringAssert.Contains(Text(result), "Primary names prefixed with '[RESTORE] '");
        StringAssert.Contains(Text(result), "pass name_prefix='' (empty)");

        var fetch = _service.BinFetches.Single();
        StringAssert.Contains(fetch, "operator='in'");
        StringAssert.Contains(fetch, idA.ToString());
        StringAssert.Contains(fetch, idB.ToString());

        Assert.AreEqual(2, _service.RestoreRequests.Count);
        var targetA = (Entity)_service.RestoreRequests[0].Parameters["Target"];
        Assert.AreEqual("account", targetA.LogicalName);
        Assert.AreEqual(idA, targetA.Id);
        Assert.AreEqual("[RESTORE] Old A", targetA.GetAttributeValue<string>("name"));

        var structured = Structured(result);
        Assert.AreEqual(2, structured.GetProperty("restored").GetInt32());
        Assert.AreEqual(0, structured.GetProperty("failed").GetInt32());
        Assert.AreEqual("restored", structured.GetProperty("results")[1].GetProperty("status").GetString());
    }

    [TestMethod]
    public void Restore_EmptyPrefix_RestoresNamesUnchanged()
    {
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();

        var result = NewTool().manage_deleted_records("restore", "account",
            record_ids: new[] { idA.ToString(), idB.ToString() }, name_prefix: "");

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[Success] account: Restored 2/2 record(s).");
        Assert.IsFalse(Text(result).Contains("Primary names prefixed", StringComparison.Ordinal));
        Assert.AreEqual(0, _service.BinFetches.Count);
        Assert.AreEqual(2, _service.RestoreRequests.Count);
        var targetA = (Entity)_service.RestoreRequests[0].Parameters["Target"];
        Assert.IsFalse(targetA.Contains("name"));
    }

    [TestMethod]
    public void Restore_SingleRecordId_RestoresOne()
    {
        var idA = Guid.NewGuid();
        var result = NewTool().manage_deleted_records("restore", "account", record_id: idA.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Restored 1/1 record(s)");
        Assert.AreEqual(1, _service.RestoreRequests.Count);
    }

    [TestMethod]
    public void Restore_BlankRecordIds_FallBackToRecordId()
    {
        var idA = Guid.NewGuid();
        var result = NewTool().manage_deleted_records("restore", "account",
            record_id: idA.ToString(), record_ids: new[] { " ", "" });
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Restored 1/1 record(s)");
        Assert.AreEqual(idA, ((Entity)_service.RestoreRequests.Single().Parameters["Target"]).Id);
    }

    [TestMethod]
    public void Restore_PartialFailure_ReturnsPartialResult()
    {
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();
        _service.RestoreFault = target => target.Id == idB
            ? new InvalidOperationException("restore denied by test")
            : null;

        var result = NewTool().manage_deleted_records("restore", "account",
            record_ids: new[] { idA.ToString(), idB.ToString() }, name_prefix: "");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Partial] account: Restored 1/2 record(s), 1 failed.");
        var structured = Structured(result);
        Assert.AreEqual(1, structured.GetProperty("restored").GetInt32());
        Assert.AreEqual(1, structured.GetProperty("failed").GetInt32());
        var failedEntry = structured.GetProperty("results").EnumerateArray()
            .Single(r => r.GetProperty("status").GetString() == "failed");
        Assert.AreEqual("restore denied by test", failedEntry.GetProperty("message").GetString());
    }

    [TestMethod]
    public void Restore_AllFailed_ReturnsFailedResult()
    {
        var idA = Guid.NewGuid();
        var idB = Guid.NewGuid();
        _service.RestoreFault = _ => new InvalidOperationException("restore denied by test");

        var result = NewTool().manage_deleted_records("restore", "account",
            record_ids: new[] { idA.ToString(), idB.ToString() }, name_prefix: "");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Failed] account: Restored 0/2 record(s), 2 failed.");
        Assert.AreEqual(0, Structured(result).GetProperty("restored").GetInt32());
        Assert.AreEqual(2, Structured(result).GetProperty("failed").GetInt32());
    }

    [TestMethod]
    public void Restore_MutationBlocked_SurfacesGatewayError()
    {
        var idA = Guid.NewGuid();
        var result = NewTool(dryRun: false, mutationsBlocked: true)
            .manage_deleted_records("restore", "account", record_id: idA.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Mutation blocked");
        Assert.AreEqual(0, _service.Restores);
    }

    // ──────────────────────────────────────────────
    // status
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Status_OrgRowMissing_ReturnsUnknownWithWarning()
    {
        SeedEnabledTableRows("account", "contact");
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete state UNKNOWN (org row missing).");
        var structured = Structured(result);
        Assert.IsFalse(structured.TryGetProperty("softDeleteSupported", out _));
        Assert.AreEqual(2, structured.GetProperty("enabledTableCount").GetInt32());
        Assert.AreEqual(30, structured.GetProperty("maxRetentionDays").GetInt32());
        StringAssert.Contains(
            structured.GetProperty("warnings")[0].GetString()!,
            "Org-level RecycleBinConfig row not found -- deleted record keeping may be disabled.");
    }

    [TestMethod]
    public void Status_On_ReportsTableCountAndRetention()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 15);
        SeedEnabledTableRows("account", "contact");
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete is ON (2 table(s), retention=15 days).");
        var structured = Structured(result);
        Assert.IsTrue(structured.GetProperty("softDeleteSupported").GetBoolean());
        Assert.AreEqual(15, structured.GetProperty("currentRetentionDays").GetInt32());
        Assert.AreEqual(15, structured.GetProperty("maxRetentionDays").GetInt32());
    }

    [TestMethod]
    public void Status_Off_ReportsDisabled()
    {
        SeedOrgBinRow(ready: false, statecode: 1);
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete is OFF (0 tables, retention would be 30 days when enabled).");
        Assert.IsFalse(Structured(result).GetProperty("softDeleteSupported").GetBoolean());
    }

    [TestMethod]
    public void Status_RetentionAtMax_AddsWarning()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 30);
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete is ON (0 table(s), retention=30 days).");
        StringAssert.Contains(
            Structured(result).GetProperty("warnings")[0].GetString()!,
            "CleanupIntervalInDays at or near max (30). Records older than 30 days are auto-purged and cannot be restored.");
    }

    [TestMethod]
    public void Status_RetentionAboveMax_ClampsStructuredMaxDays()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 99);
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "retention=99 days");
        var structured = Structured(result);
        Assert.AreEqual(30, structured.GetProperty("maxRetentionDays").GetInt32());
        Assert.AreEqual(99, structured.GetProperty("currentRetentionDays").GetInt32());
    }

    [TestMethod]
    public void Status_RetentionBelowOne_FallsBackToMax()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 0);
        var result = NewTool().manage_deleted_records("status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "retention=0 days");
        var structured = Structured(result);
        Assert.AreEqual(30, structured.GetProperty("maxRetentionDays").GetInt32());
        Assert.AreEqual(0, structured.GetProperty("currentRetentionDays").GetInt32());
        Assert.IsFalse(structured.TryGetProperty("warnings", out _));
    }

    // ──────────────────────────────────────────────
    // turn
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Turn_OnWhenAlreadyOn_ReturnsNoOpError()
    {
        SeedOrgBinRow(ready: true, statecode: 0, days: 15);
        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 20);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete is already ON at the org level. No state change was made.");
        StringAssert.Contains(Text(result), "recyclebinconfig[organization].statecode=0, isreadyforrecyclebin=True");
        StringAssert.Contains(Text(result), "Call action='turn' turn='off' first to disable");
        Assert.AreEqual(0, _service.SetStates);
    }

    [TestMethod]
    public void Turn_OffWhenRowMissing_ReturnsNoOpError()
    {
        var result = NewTool().manage_deleted_records("turn", turn: "off");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Soft-delete is already OFF at the org level. No state change was made.");
        StringAssert.Contains(Text(result), "(row missing)");
        StringAssert.Contains(Text(result), "Call action='turn' turn='on' first to enable");
        Assert.AreEqual(0, _service.SetStates);
    }

    [TestMethod]
    public void Turn_WithoutAdminRole_ReturnsRoleGateError()
    {
        SeedOrgBinRow(ready: false, statecode: 1);
        _service.RoleNames.Add("Sales Manager");
        _service.RoleNames.Add("Support Engineer");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 20);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Action 'turn' requires the 'System Administrator' role. The calling user does not have it.");
        StringAssert.Contains(Text(result), "Current roles on the calling user: Sales Manager, Support Engineer");
        // IsSystemAdministrator + GetCurrentRoleNames each resolve the calling user via WhoAmI.
        Assert.AreEqual(2, _service.WhoAmiCalls);
        Assert.AreEqual(0, _service.SetStates);
        Assert.AreEqual(0, _webApi.Calls);
    }

    [TestMethod]
    public void Turn_OnWithRetentionOutOfRange_ReturnsError()
    {
        SeedOrgBinRow(ready: false, statecode: 1);
        GrantAdmin();

        var high = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 45);
        var low = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 0);

        Assert.IsTrue(high.IsError == true);
        StringAssert.Contains(Text(high), "retention_days=45 out of range.");
        StringAssert.Contains(Text(high), "Valid range: 1..30. Default = 30.");
        Assert.IsTrue(low.IsError == true);
        StringAssert.Contains(Text(low), "retention_days=0 out of range.");
        Assert.AreEqual(0, _service.SetStates);
    }

    [TestMethod]
    public void Turn_OnExistingRow_UpdatesStateAndRetention()
    {
        var rowId = SeedOrgBinRow(ready: false, statecode: 1, days: 15);
        GrantAdmin();

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 20);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Soft-delete turned ON (new id={rowId}, retention=20 days).");
        StringAssert.Contains(Text(result), "operationtype=104 'Process Table For RecycleBin'");
        Assert.AreEqual(1, _service.SetStates);
        Assert.AreEqual(1, _service.Updates);
        var structured = Structured(result);
        Assert.IsTrue(structured.GetProperty("newValue").GetBoolean());
        Assert.IsFalse(structured.GetProperty("previousValue").GetBoolean());
        Assert.AreEqual(20, structured.GetProperty("maxRetentionDays").GetInt32());
    }

    [TestMethod]
    public void Turn_OnExistingRow_SameRetention_SkipsUpdate()
    {
        SeedOrgBinRow(ready: false, statecode: 1, days: 15);
        GrantAdmin();

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 15);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "retention=15 days");
        Assert.AreEqual(1, _service.SetStates);
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void Turn_OffExistingRow_DisablesRow()
    {
        var rowId = SeedOrgBinRow(ready: true, statecode: 0, days: 30);
        GrantAdmin();

        var result = NewTool().manage_deleted_records("turn", turn: "off");

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Soft-delete turned OFF (deleted recyclebinconfig id={rowId}).");
        StringAssert.Contains(Text(result), "Dataverse will cascade-delete per-table rows in the background.");
        Assert.AreEqual(1, _service.SetStates);
        Assert.AreEqual(0, _service.Updates);
        var structured = Structured(result);
        Assert.IsFalse(structured.GetProperty("newValue").GetBoolean());
        Assert.IsTrue(structured.GetProperty("previousValue").GetBoolean());
    }

    [TestMethod]
    public void Turn_OnWithoutRow_PostsWebApi_ParsesEntityIdHeader()
    {
        SeedOrganizationEntityRow();
        GrantAdmin();
        var newId = Guid.NewGuid();
        _webApi.Responder = () => ODataResponse(HttpStatusCode.Created,
            body: "{}",
            entityIdHeader: $"https://fakeorg.crm.dynamics.com/api/data/v9.2/recyclebinconfigs({newId})");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Soft-delete turned ON (new id={newId}, retention=30 days).");
        Assert.AreEqual(1, _webApi.Calls);
        Assert.AreEqual("recyclebinconfigs", _webApi.LastUrl);
        StringAssert.Contains(_webApi.LastBody!, "\"cleanupintervalindays\":30");
        StringAssert.Contains(_webApi.LastBody!, $"entities({_organizationEntityRowId})");
        Assert.AreEqual(0, _service.SetStates);
    }

    [TestMethod]
    public void Turn_OnWithoutRow_ParsesIdFromODataIdBody()
    {
        SeedOrganizationEntityRow();
        GrantAdmin();
        var bodyId = Guid.NewGuid();
        _webApi.Responder = () => ODataResponse(HttpStatusCode.Created,
            body: $"{{\"@odata.id\":\"https://fakeorg.crm.dynamics.com/api/data/v9.2/recyclebinconfigs({bodyId})\"}}");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"new id={bodyId}");
    }

    [TestMethod]
    public void Turn_OnWithoutRow_ParsesIdFromBodyJsonProperty()
    {
        SeedOrganizationEntityRow();
        GrantAdmin();
        var jsonId = Guid.NewGuid();
        _webApi.Responder = () => ODataResponse(HttpStatusCode.Created,
            body: $"{{\"recyclebinconfigid\":\"{jsonId}\"}}");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"new id={jsonId}");
    }

    [TestMethod]
    public void Turn_OnWithoutRow_NoIdInResponse_ReportsSeeResponseBody()
    {
        SeedOrganizationEntityRow();
        GrantAdmin();
        _webApi.Responder = () => ODataResponse(HttpStatusCode.Created, body: "{}");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "new id=(see response body)");
    }

    [TestMethod]
    public void Turn_OnWithoutRow_HttpError_SurfacesFriendlyError()
    {
        SeedOrganizationEntityRow();
        GrantAdmin();
        _webApi.Responder = () => ODataResponse(HttpStatusCode.InternalServerError, body: "boom");

        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "POST /recyclebinconfigs returned HTTP 500: boom");
    }

    [TestMethod]
    public void Turn_OnWithoutRow_MissingEntityRow_SurfacesFriendlyError()
    {
        GrantAdmin();
        var result = NewTool().manage_deleted_records("turn", turn: "on", retention_days: 30);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity row not found for logicalname='organization'");
        Assert.AreEqual(0, _webApi.Calls);
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    private sealed class FakeWebApiExecutor : IWebApiExecutor
    {
        public Func<HttpResponseMessage>? Responder { get; set; }
        public int Calls;
        public string? LastUrl;
        public string? LastBody;
        public string CurrentAccessToken => string.Empty;

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string? body,
            Dictionary<string, List<string>>? customHeaders, string? contentType = null,
            CancellationToken cancellationToken = default)
        {
            Calls++;
            LastUrl = queryString;
            LastBody = body;
            return Responder?.Invoke() ?? new HttpResponseMessage(HttpStatusCode.OK);
        }

        public System.Threading.Tasks.Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string? body,
            Dictionary<string, List<string>>? customHeaders, string? contentType = null,
            CancellationToken cancellationToken = default) =>
            System.Threading.Tasks.Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));
    }

    private sealed class DeletedRecordsOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        private readonly Guid _userId = Guid.NewGuid();
        private readonly Guid _organizationId = Guid.NewGuid();
        private readonly Guid _businessUnitId = Guid.NewGuid();

        public readonly List<EntityMetadata> Entities = new();
        public readonly List<string> RoleNames = new();
        public readonly List<string> BinFetches = new();
        public readonly List<OrganizationRequest> RestoreRequests = new();

        public int Restores;
        public int SetStates;
        public int Updates;
        public int WhoAmiCalls;

        public Func<FetchExpression, EntityCollection>? BinResponder;
        public Func<Entity, Exception>? RestoreFault;

        public DeletedRecordsOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fetch)
            {
                // FakeXrmEasy cannot evaluate the bin datasource FetchExpression the tool builds.
                if (fetch.Query.Contains("datasource='bin'"))
                {
                    BinFetches.Add(fetch.Query);
                    return BinResponder?.Invoke(fetch) ?? new EntityCollection();
                }
                // Role-gate role fetch: answered locally so the WhoAmI user id never has to match seeded rows.
                if (fetch.Query.Contains("<entity name='role'>"))
                {
                    var roles = new EntityCollection();
                    foreach (var roleName in RoleNames)
                        roles.Entities.Add(new Entity("role", Guid.NewGuid()) { ["name"] = roleName });
                    return roles;
                }
            }
            return _inner.RetrieveMultiple(query);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case WhoAmIRequest:
                    WhoAmiCalls++;
                    var who = new WhoAmIResponse();
                    who.Results["UserId"] = _userId;
                    who.Results["OrganizationId"] = _organizationId;
                    who.Results["BusinessUnitId"] = _businessUnitId;
                    return who;
                case RetrieveAllEntitiesRequest:
                    var all = new RetrieveAllEntitiesResponse();
                    all.Results["EntityMetadata"] = Entities.ToArray();
                    return all;
                case RetrieveEntityRequest byName:
                {
                    var meta = Entities.FirstOrDefault(e =>
                        string.Equals(e.LogicalName, byName.LogicalName, StringComparison.OrdinalIgnoreCase))
                        ?? new EntityMetadata { LogicalName = byName.LogicalName, SchemaName = byName.LogicalName };
                    var one = new RetrieveEntityResponse();
                    one.Results["EntityMetadata"] = meta;
                    return one;
                }
                case SetStateRequest:
                    SetStates++;
                    return new OrganizationResponse();
                default:
                    if (request.RequestName == "Restore")
                    {
                        Restores++;
                        RestoreRequests.Add(request);
                        if (RestoreFault != null)
                        {
                            var fault = RestoreFault((Entity)request.Parameters["Target"]);
                            if (fault != null) throw fault;
                        }
                        return new OrganizationResponse();
                    }
                    return _inner.Execute(request);
            }
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
