using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Crm.Sdk.Messages;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Helper;

/// <summary>
/// Wave-2 gap coverage for the smaller Mcp/Tools/Helper members: the
/// WebApiResponseFormatter table/code-block/plain-text branches, the
/// lock-contention retry exhaustion, the base-language fallback catch, the
/// Web API mutation-gateway method guard, the async create gateway, the
/// solution resolver connection failure, the JSON null fallback conversion
/// and the display-name-first resolver guards.
///
/// NOTE (dead code — not coverable):
/// - WebApiResponseFormatter.FormatAsJsonCodeBlock ~203-206 (invalid JSON
///   fallback): the same body already parsed in FormatResponse, so the
///   inner re-parse cannot fail.
/// - WebApiResponseFormatter.TryFormatAsValueTable ~85/97/108 are covered
///   indirectly here; the display/logical search-input composite lines
///   (~538/~550) and ParseDisplayAndIdentifier's empty-input guard (~558)
///   of DisplayNameFirstResolver are unreachable — every caller guards
///   emptiness or short-circuits before invoking them.
/// - DisplayNameFirstResolver.GetId ~604 (`entity == null`): the only
///   caller iterates over non-null retrieved entities.
/// - ViewXmlHelper.ValidateXml ~93 (empty schema set) and ~113-116
///   (XmlSeverityType.Warning): the CLI always embeds its schemas, and no
///   embedded schema rule emits warning-severity diagnostics.
/// - WorkspaceFolderHelper ~26-35 (MCP roots request): needs a connected
///   MCP server session with roots capability — the null-server path and
///   the cwd fallback are already covered.
/// </summary>
[TestClass]
public sealed class McpHelperDirGapWave2CoverageTests
{
    // ── WebApiResponseFormatter ──────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_ValueTable_SkipsODataKeysAndFormatsJsonValues()
    {
        var body = """
        {
          "@odata.context": "https://org/$metadata#accounts",
          "value": [
            { "name": "First", "revenue": 100, "active": true, "note": null },
            { "name": "Second", "extra": [1, 2] }
          ]
        }
        """;
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK",
            new Dictionary<string, string>(), body, maxResponseLines: 50);

        StringAssert.Contains(output, "Returned **2** records");
        StringAssert.Contains(output, "| name | revenue | active | note | extra |");
        StringAssert.Contains(output, "| First | 100 | true |  |  |");
        // The nested array value is rendered as its raw JSON and the context
        // line is echoed above the table.
        StringAssert.Contains(output, "[1, 2]");
        StringAssert.Contains(output, "> Context: https://org/$metadata#accounts");
    }

    [TestMethod]
    public void FormatResponse_ScalarValueObject_RendersFlatTable()
    {
        // {"value": 5} is a flat single-property object: the value-table
        // builder rejects it (value is not an array) and the flat table wins.
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null,
            """{"value": 5}""", maxResponseLines: 50);
        StringAssert.Contains(output, "| Property | Value |");
        StringAssert.Contains(output, "| value | 5 |");
    }

    [TestMethod]
    public void FormatResponse_ValueTable_NonObjectItem_FallsThroughToJson()
    {
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null,
            """{"value": [1, 2]}""", maxResponseLines: 50);
        StringAssert.Contains(output, "```json");
    }

    [TestMethod]
    public void FormatResponse_ValueTable_OnlyODataKeys_FallsThroughToJson()
    {
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null,
            """{"value": [{"@odata.etag": "x"}]}""", maxResponseLines: 50);
        StringAssert.Contains(output, "```json");
    }

    [TestMethod]
    public void FormatResponse_FlatObject_TruncatesProperties()
    {
        var body = """{"a": 1, "b": 2, "c": 3, "d": 4}""";
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null, body, maxResponseLines: 4);

        StringAssert.Contains(output, "| Property | Value |");
        StringAssert.Contains(output, "_(truncated, showing first 2 of 4 properties)_");
    }

    [TestMethod]
    public void FormatResponse_NestedObject_TruncatesJsonLines()
    {
        var body = """{"outer": {"a": 1, "b": 2, "c": 3}}""";
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null, body, maxResponseLines: 3);

        StringAssert.Contains(output, "```json");
        StringAssert.Contains(output, "_(truncated, showing first 3 of");
    }

    [TestMethod]
    public void FormatResponse_PlainText_TruncatesLines()
    {
        var body = "line1\nline2\nline3\nline4\nline5";
        var output = WebApiResponseFormatter.FormatResponse(HttpStatusCode.OK, "OK", null, body, maxResponseLines: 2);

        StringAssert.Contains(output, "line1");
        StringAssert.Contains(output, "_(truncated, showing first 2 of 5 total lines)_");
    }

    // ── MetadataRetryHelper ──────────────────────────────────────────────

    [TestMethod]
    public void RetryOnLockContention_AllAttemptsFail_ReturnsFalse()
    {
        var original = MetadataOperationWaitHelper.WaitScalePercent;
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        try
        {
            var attempts = 0;
            var ok = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                attempts++;
                throw new InvalidOperationException("The metadata operation failed due to a metadata lock. Another operation is running.");
            }, "test operation");

            Assert.IsFalse(ok);
            Assert.AreEqual(5, attempts);
        }
        finally
        {
            MetadataOperationWaitHelper.WaitScalePercent = original;
        }
    }

    // ── McpHelper ────────────────────────────────────────────────────────

    private sealed class ThrowingOrgService : IOrganizationService
    {
        public Guid Create(Entity entity) => throw new NotSupportedException();
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => throw new NotSupportedException();
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id) => throw new NotSupportedException();
        public OrganizationResponse Execute(OrganizationRequest request) => throw new InvalidOperationException("connection gone");
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public EntityCollection RetrieveMultiple(QueryBase query) => throw new InvalidOperationException("connection gone");
    }

    private sealed class StubOrgService : IOrganizationService
    {
        public EntityCollection RetrieveMultipleResult { get; set; } = new();
        public OrganizationResponse ExecuteResult { get; set; } =
            new RetrieveAllEntitiesResponse { Results = { ["EntityMetadata"] = Array.Empty<EntityMetadata>() } };

        public Guid Create(Entity entity) => throw new NotSupportedException();
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => throw new NotSupportedException();
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id) => throw new NotSupportedException();
        public OrganizationResponse Execute(OrganizationRequest request) => ExecuteResult;
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public EntityCollection RetrieveMultiple(QueryBase query) => RetrieveMultipleResult;
    }

    [TestMethod]
    public void GetBaseLanguageCode_MissingLanguageAttribute_FallsBackToZero()
    {
        var stub = new StubOrgService
        {
            RetrieveMultipleResult = new EntityCollection(new[]
            {
                new Entity("organization", Guid.NewGuid()) // no languagecode attribute
            })
        };
        Assert.AreEqual(0, McpHelper.GetBaseLanguageCode(stub));
    }

    [TestMethod]
    public void GetBaseLanguageCode_ConnectionFailure_FallsBackToZero()
    {
        Assert.AreEqual(0, McpHelper.GetBaseLanguageCode(new ThrowingOrgService()));
    }

    // ── Mutation gateways ────────────────────────────────────────────────

    [TestMethod]
    public void DataverseWebApiMutationExecutor_NonMutationMethod_Throws()
    {
        var error = Assert.ThrowsExactly<ArgumentException>(() =>
            DataverseWebApiMutationExecutor.Execute(DryRunTestHelpers.NormalContext(), null!,
                HttpMethod.Get, "accounts", null, null));
        StringAssert.Contains(error.Message, "is not a mutation");
    }

    [TestMethod]
    public async Task DataverseMutationExecutor_CreateAsync_GoesThroughGateway()
    {
        var fake = new FakeSdkClient();
        try
        {
            var created = Guid.NewGuid();
            fake.OnCreate = entity => created;
            var id = await DataverseMutationExecutor.CreateAsync(
                DryRunTestHelpers.NormalContext(), fake.Client,
                new Entity("account") { ["name"] = "Async" }, CancellationToken.None);
            Assert.AreEqual(created, id);
        }
        finally
        {
            fake.Dispose();
        }
    }

    // ── SolutionResolverHelper ───────────────────────────────────────────

    [TestMethod]
    public void Resolve_ConnectionFailure_ReturnsFailure()
    {
        var result = SolutionResolverHelper.Resolve(new ThrowingOrgService(), "DevKit");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Error, "Failed to resolve solution 'DevKit'");
        StringAssert.Contains(result.Error, "connection gone");
    }

    // ── EntityParserHelper ───────────────────────────────────────────────

    [TestMethod]
    public void ParseFieldsToEntity_UnmappedAttributeTypeWithObject_ReachesFallback()
    {
        var image = new ImageAttributeMetadata();
        TestMetadata.Set(image, nameof(AttributeMetadata.LogicalName), "entityimage");
        TestMetadata.Set(image, nameof(AttributeMetadata.SchemaName), "EntityImage");
        TestMetadata.Set(image, nameof(AttributeMetadata.AttributeType), (AttributeTypeCode?)AttributeTypeCode.Virtual);
        TestMetadata.Set(image, nameof(AttributeMetadata.IsLogical), (bool?)false);
        TestMetadata.Set(image, nameof(AttributeMetadata.IsValidForCreate), (bool?)true);
        var meta = TestMetadata.Entity("account", "Account", image);

        var fake = new FakeSdkClient();
        try
        {
            fake.OnExecute = request => request switch
            {
                RetrieveEntityRequest => new RetrieveEntityResponse { Results = { ["EntityMetadata"] = meta } },
                _ => new OrganizationResponse()
            };

            // Image attributes are not in the conversion map — an object value
            // falls into FallbackConvert, which cannot read an object as a string.
            EntityParserHelper.ClearCache();
            Exception? error = null;
                try { EntityParserHelper.ParseFieldsToEntity(
                    fake.Client, "account", """{"entityimage": {"nested": true}}"""); }
                catch (Exception ex) { error = ex; }

            Assert.IsInstanceOfType(error, typeof(InvalidOperationException));
        }
        finally
        {
            EntityParserHelper.ClearCache();
            fake.Dispose();
        }
    }

    // ── DisplayNameFirstResolver ─────────────────────────────────────────

    [TestMethod]
    public void ResolveDataverseRecord_EmptyInput_ReturnsError()
    {
        var result = DisplayNameFirstResolver.ResolveDataverseRecord(
            new ThrowingOrgService(), "  ", "webresource", "webresourceid", new ColumnSet(true),
            "displayname", "name", "uniquename", "name", "web resource",
            "[Ambiguous]", "[NotFound]", "tip", "icon_webresource");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Error, "Input cannot be empty.");
    }

    [TestMethod]
    public void ResolveDataverseRecord_NoColumns_ReturnsColumnError()
    {
        var result = DisplayNameFirstResolver.ResolveDataverseRecord(
            new ThrowingOrgService(), "devkit", "webresource", "webresourceid", new ColumnSet(true),
            null!, null!, null!, null!, "web resource",
            "[Ambiguous]", "[NotFound]", "tip", "icon_webresource");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Error, "At least one display/logical column is required");
    }

    [TestMethod]
    public void FormatAmbiguous_MoreThan25Candidates_ListsOmission()
    {
        var candidates = Enumerable.Range(1, 30).Select(i => new ResolveCandidate
        {
            DisplayName = "Candidate " + i,
            LogicalName = "cand" + i,
            UniqueName = null,
            SchemaName = null,
            Id = Guid.NewGuid(),
        }).ToList();

        var message = DisplayNameFirstResolver.FormatAmbiguous(
            "[AmbiguousX]", "cand", "display", candidates, "field");

        StringAssert.Contains(message, "... 5 more candidates omitted.");
        StringAssert.Contains(message, "Candidate 25");
        Assert.IsFalse(message.Contains("Candidate 26\t"), "only the first 25 candidates are listed.");
    }

    [TestMethod]
    public void ResolveEntity_EmptyIdentifierComposite_TreatsAsPlainSearch()
    {
        // "Name ()" carries an empty identifier — the composite parse rejects
        // it, so the input degrades to a plain (and here: unsuccessful) name
        // search over an empty catalog.
        var result = DisplayNameFirstResolver.ResolveEntity(new StubOrgService(), "Name ()", "get_tables");
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    // ── AutoNumberFormatValidator ────────────────────────────────────────

    [TestMethod]
    public void Validate_EmptyDatetimePlaceholder_IsRejected()
    {
        // The placeholder regex needs a non-brace argument, so the empty-arg
        // rejection fires on a whitespace-only format string.
        var error = AutoNumberFormatValidator.Validate("ORD-{DATETIMEUTC: }", out _, out _);
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "DATETIMEUTC needs a non-empty");
    }

    // ── CompactFormatter / MarkdownFormatter ─────────────────────────────

    [TestMethod]
    public void FormatEntityDetail_Relationships_RenderInBothFormatters()
    {
        var meta = TestMetadata.Entity("account", "Account");
        var oneToMany = new OneToManyRelationshipMetadata
        {
            ReferencingEntity = "contact",
            ReferencingAttribute = "parentaccountid",
            SchemaName = "account_parent_contact"
        };
        var manyToOne = new OneToManyRelationshipMetadata
        {
            ReferencedEntity = "contact",
            ReferencingAttribute = "primarycontactid",
            SchemaName = "account_primary_contact"
        };
        var manyToMany = new ManyToManyRelationshipMetadata
        {
            Entity1LogicalName = "account",
            Entity2LogicalName = "contact",
            IntersectEntityName = "account_contact",
            SchemaName = "account_contact"
        };
        TestMetadata.Set(meta, nameof(EntityMetadata.OneToManyRelationships), new[] { oneToMany });
        TestMetadata.Set(meta, nameof(EntityMetadata.ManyToOneRelationships), new[] { manyToOne });
        TestMetadata.Set(meta, nameof(EntityMetadata.ManyToManyRelationships), new[] { manyToMany });

        var compact = CompactFormatter.FormatEntityDetail(meta, null);
        StringAssert.Contains(compact, "[1:N Relationships] 1");
        StringAssert.Contains(compact, "[N:1 Relationships] 1");
        StringAssert.Contains(compact, "account_primary_contact");
        StringAssert.Contains(compact, "[N:N Relationships] 1");
        StringAssert.Contains(compact, "account_contact");

        var markdown = MarkdownFormatter.FormatEntityDetail(meta, null);
        StringAssert.Contains(markdown, "## 1:N Relationships");
        StringAssert.Contains(markdown, "## N:1 Relationships");
        StringAssert.Contains(markdown, "primarycontactid");
        StringAssert.Contains(markdown, "## N:N Relationships");
        StringAssert.Contains(markdown, "account_contact");
    }
}
