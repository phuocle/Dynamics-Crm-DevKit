using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Helper;

/// <summary>
/// Second-pass coverage for the small MCP helper seams: the base language
/// read (McpHelper), the scaled wait/retry plumbing (MetadataOperationWait
/// / MetadataRetryHelper), the solution resolver's publisher chain, the
/// add-to-solution component helper guards, the workspace-folder fallback,
/// the XSD validation paths of ViewXmlHelper and the JSON → Entity field
/// conversion matrix of EntityParserHelper (lookups, party lists, typed
/// scalars, ambiguous/unknown field resolution). Organization calls ride a
/// hand-written IOrganizationService stub — no Harmony needed here.
/// </summary>
[TestClass]
[DoNotParallelize]
public class McpHelperGapCoverageTests
{
    // ── Stub ─────────────────────────────────────────────────────────────────

    private sealed class StubOrgService : IOrganizationService
    {
        public Func<OrganizationRequest, OrganizationResponse> OnExecute { get; set; }
        public Func<QueryBase, EntityCollection> OnRetrieveMultiple { get; set; }
        public Func<string, Guid, ColumnSet, Entity> OnRetrieve { get; set; }

        public Guid Create(Entity entity) => throw new NotImplementedException();
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            OnRetrieve?.Invoke(entityName, id, columnSet) ?? throw new NotImplementedException();
        public void Update(Entity entity) => throw new NotImplementedException();
        public void Delete(string entityName, Guid id) => throw new NotImplementedException();
        public OrganizationResponse Execute(OrganizationRequest request) =>
            OnExecute?.Invoke(request) ?? throw new NotImplementedException($"Unexpected request {request.RequestName}");
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotImplementedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotImplementedException();
        public EntityCollection RetrieveMultiple(QueryBase query) =>
            OnRetrieveMultiple?.Invoke(query) ?? throw new NotImplementedException();
    }

    private static Entity SolutionRow(Guid publisherId, string uniqueName = "Contoso", string friendlyName = "Contoso Ltd") =>
        new("solution")
        {
            ["solutionid"] = Guid.NewGuid(),
            ["uniquename"] = uniqueName,
            ["friendlyname"] = friendlyName,
            ["publisherid"] = publisherId == Guid.Empty ? (EntityReference)null! : new EntityReference("publisher", publisherId),
        };

    // ── McpHelper.GetBaseLanguageCode ────────────────────────────────────────

    [TestMethod]
    public void GetBaseLanguageCode_ReadsOrganizationLanguage()
    {
        var stub = new StubOrgService
        {
            OnRetrieveMultiple = query => new EntityCollection(new List<Entity>
            {
                new("organization") { ["languagecode"] = 1043 }
            })
        };
        Assert.AreEqual(1043, McpHelper.GetBaseLanguageCode(stub));
    }

    [TestMethod]
    public void GetBaseLanguageCode_NoRowOrFailure_ReturnsZero()
    {
        var empty = new StubOrgService { OnRetrieveMultiple = query => new EntityCollection() };
        Assert.AreEqual(0, McpHelper.GetBaseLanguageCode(empty));

        var broken = new StubOrgService { OnRetrieveMultiple = query => throw new InvalidOperationException("boom") };
        Assert.AreEqual(0, McpHelper.GetBaseLanguageCode(broken));
    }

    // ── MetadataOperationWaitHelper ──────────────────────────────────────────

    [TestMethod]
    public void WaitAfterMutation_ScalesWaitsAndSkipsNonPositive()
    {
        var original = MetadataOperationWaitHelper.WaitScalePercent;
        try
        {
            MetadataOperationWaitHelper.WaitScalePercent = 100;
            MetadataOperationWaitHelper.WaitAfterMutation(1); // covers the real Thread.Sleep path

            MetadataOperationWaitHelper.WaitScalePercent = 0;
            MetadataOperationWaitHelper.WaitAfterMutation(20); // scaled to zero — no sleep
            MetadataOperationWaitHelper.WaitAfterMutation(-1); // non-positive — no sleep
        }
        finally
        {
            MetadataOperationWaitHelper.WaitScalePercent = original;
        }
    }

    // ── MetadataRetryHelper ──────────────────────────────────────────────────

    [TestMethod]
    public void RetryOnLockContention_NonLockError_RethrowsImmediately()
    {
        var calls = 0;
        var error = Assert.ThrowsExactly<ArgumentException>(() =>
            MetadataRetryHelper.RetryOnLockContention(() =>
            {
                calls++;
                throw new ArgumentException("boom");
            }, "test operation"));
        Assert.AreEqual("boom", error.Message);
        Assert.AreEqual(1, calls);
    }

    [TestMethod]
    public void RetryOnLockContention_LockErrorsExhaustRetries_ReturnsFalse()
    {
        var original = MetadataOperationWaitHelper.WaitScalePercent;
        try
        {
            MetadataOperationWaitHelper.WaitScalePercent = 0; // skip the backoff sleeps
            var calls = 0;
            var succeeded = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                calls++;
                throw new InvalidOperationException("Another operation is currently running.");
            }, "test operation");
            Assert.IsFalse(succeeded);
            Assert.AreEqual(5, calls);
        }
        finally
        {
            MetadataOperationWaitHelper.WaitScalePercent = original;
        }
    }

    [TestMethod]
    public void RetryOnLockContention_Generic_ExhaustionThrowsDescribedError()
    {
        var original = MetadataOperationWaitHelper.WaitScalePercent;
        try
        {
            MetadataOperationWaitHelper.WaitScalePercent = 0;
            var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
                MetadataRetryHelper.RetryOnLockContention<object>(() =>
                {
                    throw new InvalidOperationException("metadata cache lock");
                }, "publish form"));
            StringAssert.Contains(error.Message, "publish form");
            StringAssert.Contains(error.Message, "5 attempts");
        }
        finally
        {
            MetadataOperationWaitHelper.WaitScalePercent = original;
        }
    }

    // ── SolutionResolverHelper ───────────────────────────────────────────────

    [TestMethod]
    public void Resolve_NullOrEmptyInput_FailsFast()
    {
        var nullService = SolutionResolverHelper.Resolve(null!, "Contoso");
        Assert.IsFalse(nullService.IsSuccess);
        StringAssert.Contains(nullService.Error, "IOrganizationService is null");

        var stub = new StubOrgService();
        var empty = SolutionResolverHelper.Resolve(stub, "   ");
        Assert.IsFalse(empty.IsSuccess);
        StringAssert.Contains(empty.Error, "Solution name cannot be empty");
    }

    [TestMethod]
    public void Resolve_UnknownSolution_FailsWithNotFoundStatus()
    {
        var stub = new StubOrgService { OnRetrieveMultiple = query => new EntityCollection() };
        var result = SolutionResolverHelper.Resolve(stub, "Ghost");
        Assert.IsFalse(result.IsSuccess);
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    [TestMethod]
    public void Resolve_OrgFailure_IsReported()
    {
        var stub = new StubOrgService { OnRetrieveMultiple = query => throw new InvalidOperationException("no org") };
        var result = SolutionResolverHelper.Resolve(stub, "Contoso");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Error, "Failed to resolve solution 'Contoso'");
        StringAssert.Contains(result.Error, "no org");
    }

    [TestMethod]
    public void Resolve_FoundSolution_BuildsPublisherResult()
    {
        var publisherId = Guid.NewGuid();
        var stub = new StubOrgService
        {
            OnRetrieveMultiple = query => new EntityCollection(new List<Entity> { SolutionRow(publisherId) }),
            OnRetrieve = (entityName, id, columnSet) => new Entity("publisher")
            {
                ["publisherid"] = id,
                ["customizationprefix"] = "v4",
                ["customizationoptionvalueprefix"] = 10000,
            }
        };

        var result = SolutionResolverHelper.Resolve(stub, "Contoso");

        Assert.IsTrue(result.IsSuccess, result.Error);
        Assert.AreEqual("v4", result.Prefix);
        Assert.AreEqual(10000, result.OptionValuePrefix);
        Assert.AreEqual(publisherId, result.PublisherId);
        Assert.AreEqual("Contoso", result.UniqueName);
        Assert.AreEqual("Contoso Ltd", result.FriendlyName);
    }

    [TestMethod]
    public void Resolve_PublisherProblems_AreReportedPerShape()
    {
        var noPublisher = new StubOrgService
        {
            OnRetrieveMultiple = query => new EntityCollection(new List<Entity> { SolutionRow(Guid.Empty) })
        };
        var missing = SolutionResolverHelper.Resolve(noPublisher, "Contoso");
        Assert.IsFalse(missing.IsSuccess);
        StringAssert.Contains(missing.Error, "has no publisher");

        var publisherId = Guid.NewGuid();
        var prefixless = new StubOrgService
        {
            OnRetrieveMultiple = query => new EntityCollection(new List<Entity> { SolutionRow(publisherId) }),
            OnRetrieve = (entityName, id, columnSet) => new Entity("publisher") { ["publisherid"] = id }
        };
        var noPrefix = SolutionResolverHelper.Resolve(prefixless, "Contoso");
        Assert.IsFalse(noPrefix.IsSuccess);
        StringAssert.Contains(noPrefix.Error, "no customization prefix");

        var broken = new StubOrgService
        {
            OnRetrieveMultiple = query => new EntityCollection(new List<Entity> { SolutionRow(publisherId) }),
            OnRetrieve = (entityName, id, columnSet) => throw new InvalidOperationException("publisher gone")
        };
        var failed = SolutionResolverHelper.Resolve(broken, "Contoso");
        Assert.IsFalse(failed.IsSuccess);
        StringAssert.Contains(failed.Error, "failed to retrieve publisher");
    }

    // ── SolutionComponentCreateHelper ────────────────────────────────────────

    [TestMethod]
    public void AddExistingComponent_NullContext_Throws()
    {
        Assert.ThrowsExactly<ArgumentNullException>(() =>
            SolutionComponentCreateHelper.AddExistingComponent(null!, new StubOrgService(), Guid.NewGuid(), 1, "Contoso"));
    }

    [TestMethod]
    public void AddExistingComponent_EmptySolutionName_SkipsAdd()
    {
        var componentId = Guid.NewGuid();
        var result = SolutionComponentCreateHelper.AddExistingComponent(
            new McpExecutionContext(mutationsBlocked: false), new StubOrgService(), componentId, 1, "  ");
        Assert.IsFalse(result.IsAddToSolution);
        Assert.AreEqual("none", result.AddToSolutionMethod);
        Assert.AreEqual(componentId, result.ComponentId);
    }

    [TestMethod]
    public void AddExistingComponent_ExecuteAndFailurePaths()
    {
        var okService = new StubOrgService
        {
            OnExecute = request => new AddSolutionComponentResponse()
        };
        var ok = SolutionComponentCreateHelper.AddExistingComponent(
            new McpExecutionContext(mutationsBlocked: false), okService, Guid.NewGuid(), 1, " Contoso ");
        Assert.IsTrue(ok.IsAddToSolution);
        Assert.AreEqual("Contoso", ok.SolutionUniqueName);
        Assert.AreEqual("AddSolutionComponentRequest", ok.AddToSolutionMethod);

        var failing = new StubOrgService
        {
            OnExecute = request => throw new InvalidOperationException("component is already in solution")
        };
        var warned = SolutionComponentCreateHelper.AddExistingComponent(
            new McpExecutionContext(mutationsBlocked: false), failing, Guid.NewGuid(), 1, "Contoso");
        Assert.IsFalse(warned.IsAddToSolution);
        StringAssert.Contains(warned.AddToSolutionWarning, "already in solution");

        var blocked = new McpExecutionContext(mutationsBlocked: true);
        Assert.ThrowsExactly<InvalidOperationException>(() =>
            SolutionComponentCreateHelper.AddExistingComponent(blocked, new StubOrgService(), Guid.NewGuid(), 1, "Contoso"));
    }

    // ── WorkspaceFolderHelper ────────────────────────────────────────────────

    [TestMethod]
    public async Task GetAsync_WithoutServer_FallsBackToCurrentDirectory()
    {
        var folder = await WorkspaceFolderHelper.GetAsync(null);
        Assert.AreEqual(Environment.CurrentDirectory, folder);
    }

    // ── ViewXmlHelper.ValidateXml ────────────────────────────────────────────

    [TestMethod]
    public void ValidateLayoutXml_MalformedXml_ReportsParseError()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateLayoutXml("<grid><cell>");
        // The schema findings stack up too — but the parse failure itself
        // must be reported with the line/col prefix.
        Assert.IsTrue(errors.Any(e => e.Contains("LayoutXML Error: XML Parsing Error")), string.Join(" | ", errors));
        Assert.HasCount(0, warnings);
    }

    [TestMethod]
    public void ValidateLayoutXml_InvalidChildElement_IsReportedAsError()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateLayoutXml("<grid><bogus-element /></grid>");
        Assert.IsTrue(errors.Count > 0, string.Join(" | ", errors.Concat(warnings)));
        Assert.IsTrue(errors.All(f => f.StartsWith("LayoutXML ", StringComparison.Ordinal)));
    }

    [TestMethod]
    public void ValidateLayoutXml_UndeclaredAttribute_IsReportedAsEvolutionWarning()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateLayoutXml(
            "<grid><row><cell name=\"a\" zzz-unknown-attr=\"1\" /></row></grid>");
        Assert.IsTrue(warnings.Any(w => w.Contains("not declared")), string.Join(" | ", warnings));
        StringAssert.Contains(warnings[0], "LayoutXML Warning:");
    }

    [TestMethod]
    public void ValidateFetchXml_InvalidBooleanValue_IsReportedAsError()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateFetchXml(
            "<fetch distinct=\"maybe\"><entity name=\"account\" /></fetch>");
        Assert.IsTrue(errors.Count > 0, string.Join(" | ", errors.Concat(warnings)));
        Assert.IsTrue(errors.All(f => f.StartsWith("FetchXML Error:", StringComparison.Ordinal)));
    }

    [TestMethod]
    public void ValidateFetchXml_ValidFetch_HasNoFindings()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateFetchXml("<fetch><entity name='account'><attribute name='name' /></entity></fetch>");
        Assert.HasCount(0, errors);
        Assert.HasCount(0, warnings);
    }

    [TestMethod]
    public void ValidateFetchXml_NullXml_ReportsValidationFailure()
    {
        var (errors, _) = ViewXmlHelper.ValidateFetchXml(null!);
        Assert.HasCount(1, errors);
        StringAssert.Contains(errors[0], "Validation failed");
    }

    // ── EntityParserHelper ───────────────────────────────────────────────────

    private static EntityMetadata AccountParserMetadata() => TestMetadata.Entity("account", "Account",
        TestMetadata.String("name"),
        TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"),
        TestMetadata.WithType(TestMetadata.Lookup("customerid", "Customer"), AttributeTypeCode.PartyList),
        TestMetadata.WithType(TestMetadata.Lookup("originatingleadid", "Originating Lead"), AttributeTypeCode.PartyList),
        TestMetadata.Lookup("parentaccountid", "Parent", Array.Empty<string>()),
        TestMetadata.Money("revenue"),
        TestMetadata.Boolean("donotemail"),
        TestMetadata.DateTime("birthday"),
        TestMetadata.Integer("numberofemployees"),
        TestMetadata.Decimal("new_decimal"),
        TestMetadata.Double("new_score"),
        TestMetadata.BigInt("new_big"),
        TestMetadata.Picklist("industrycode", "Industry", (1, "one")),
        TestMetadata.MultiSelect("new_tags", "Tags", (1, "one")),
        TestMetadata.WithDescription(TestMetadata.String("emailaddress1", "Email"), "first"),
        TestMetadata.WithDescription(TestMetadata.String("emailaddress2", "Email"), "second"),
        new EntityNameAttributeMetadata { LogicalName = "new_fallback" });

    private StubOrgService ParserOrgService()
    {
        var metadata = AccountParserMetadata();
        return new StubOrgService
        {
            OnExecute = request => request switch
            {
                RetrieveEntityRequest => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = metadata }
                },
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = new EntityMetadata[] { metadata, TestMetadata.Entity("contact", "Contact") } }
                },
                _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
            }
        };
    }

    [TestInitialize]
    public void ClearParserCache() => EntityParserHelper.ClearCache();

    [TestCleanup]
    public void ClearParserCacheAgain() => EntityParserHelper.ClearCache();

    [TestMethod]
    public void ParseFieldsToEntity_ConvertsEverySupportedType()
    {
        var entity = EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account", """
        {
            "name": "Contoso",
            "primarycontactid": "6B3E7A5C-0000-0000-0000-000000000001",
            "revenue": 100.5,
            "donotemail": true,
            "birthday": "2026-01-02T03:04:05Z",
            "numberofemployees": 42,
            "new_decimal": 1.25,
            "new_score": 2.5,
            "new_big": 9000000000,
            "industrycode": 1,
            "new_tags": [1, 2],
            "new_fallback": "text"
        }
        """);

        Assert.AreEqual("account", entity.LogicalName);
        Assert.AreEqual("Contoso", entity.GetAttributeValue<string>("name"));
        Assert.AreEqual(new Guid("6B3E7A5C-0000-0000-0000-000000000001"), entity.GetAttributeValue<EntityReference>("primarycontactid").Id);
        Assert.AreEqual(100.5m, entity.GetAttributeValue<Money>("revenue").Value);
        Assert.IsTrue(entity.GetAttributeValue<bool>("donotemail"));
        // The helper parses with invariant culture (a "Z" stamp converts to
        // the machine's local offset) — compare against the same parse.
        Assert.AreEqual(
            DateTime.Parse("2026-01-02T03:04:05Z", System.Globalization.CultureInfo.InvariantCulture),
            entity.GetAttributeValue<DateTime>("birthday"));
        Assert.AreEqual(42, entity.GetAttributeValue<int>("numberofemployees"));
        Assert.AreEqual(1.25m, entity.GetAttributeValue<decimal>("new_decimal"));
        Assert.AreEqual(2.5, entity.GetAttributeValue<double>("new_score"));
        Assert.AreEqual(9000000000L, entity.GetAttributeValue<long>("new_big"));
        Assert.AreEqual(1, entity.GetAttributeValue<OptionSetValue>("industrycode").Value);
        Assert.HasCount(2, entity.GetAttributeValue<OptionSetValueCollection>("new_tags"));
        Assert.AreEqual("text", entity.GetAttributeValue<string>("new_fallback"));
    }

    [TestMethod]
    public void ParseFieldsToEntity_NullValueAndRecordId()
    {
        var id = Guid.NewGuid();
        var entity = EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account", """{ "name": null }""", id);
        Assert.AreEqual(id, entity.Id);
        Assert.IsNull(entity.GetAttributeValue<object>("name"));
    }

    [TestMethod]
    public void ParseFieldsToEntity_PartyList_ArraysSingleObjectsAndAddressUsed()
    {
        var entity = EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account", """
        {
            "customerid": [
                { "id": "6B3E7A5C-0000-0000-0000-000000000001", "type": "contact" },
                { "id": "6B3E7A5C-0000-0000-0000-000000000002", "type": "account", "addressused": "a@contoso.com" }
            ]
        }
        """);
        var parties = entity.GetAttributeValue<EntityCollection>("customerid");
        Assert.HasCount(2, parties.Entities);
        Assert.AreEqual("contact", parties.Entities[0].GetAttributeValue<EntityReference>("partyid").LogicalName);
        Assert.AreEqual("a@contoso.com", parties.Entities[1].GetAttributeValue<string>("addressused"));

        var single = EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account", """
        { "originatingleadid": { "id": "6B3E7A5C-0000-0000-0000-000000000003", "type": "lead" } }
        """);
        var wrapped = single.GetAttributeValue<EntityCollection>("originatingleadid");
        Assert.HasCount(1, wrapped.Entities);
    }

    [TestMethod]
    public void ParseFieldsToEntity_PartyList_ErrorShapes()
    {
        var service = ParserOrgService();

        var scalar = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": "not-an-object" }"""));
        StringAssert.Contains(scalar.Message, "requires a JSON array of party objects");

        var nonObjectElement = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": ["x"] }"""));
        StringAssert.Contains(nonObjectElement.Message, "each element must be an object");

        var missingId = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": [ { "type": "contact" } ] }"""));
        StringAssert.Contains(missingId.Message, "missing required \"id\"");

        var badGuid = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": [ { "id": "nope", "type": "contact" } ] }"""));
        StringAssert.Contains(badGuid.Message, "is not a valid GUID");

        var missingType = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": [ { "id": "6B3E7A5C-0000-0000-0000-000000000001" } ] }"""));
        StringAssert.Contains(missingType.Message, "missing required \"type\"");

        var emptyType = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "customerid": [ { "id": "6B3E7A5C-0000-0000-0000-000000000001", "type": "  " } ] }"""));
        StringAssert.Contains(emptyType.Message, "\"type\" cannot be empty");
    }

    [TestMethod]
    public void ParseFieldsToEntity_LookupErrorShapes()
    {
        var service = ParserOrgService();

        var badGuid = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "primarycontactid": "not-a-guid" }"""));
        StringAssert.Contains(badGuid.Message, "is not a valid GUID");

        var noTarget = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "parentaccountid": "6B3E7A5C-0000-0000-0000-000000000001" }"""));
        StringAssert.Contains(noTarget.Message, "has no target entity");
        StringAssert.Contains(noTarget.Message, "@targetentity");
    }

    [TestMethod]
    public void ParseFieldsToEntity_FieldWithTargetEntityOverride_ResolvesEntity()
    {
        var entity = EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account",
            """{ "parentaccountid@account": "6B3E7A5C-0000-0000-0000-000000000001" }""");
        var reference = entity.GetAttributeValue<EntityReference>("parentaccountid");
        Assert.AreEqual("account", reference.LogicalName);
    }

    [TestMethod]
    public void ParseFieldsToEntity_UnresolvableTargetEntity_ReportsError()
    {
        var error = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(ParserOrgService(), "account",
                """{ "parentaccountid@ghost": "6B3E7A5C-0000-0000-0000-000000000001" }"""));
        StringAssert.Contains(error.Message, "Target entity 'ghost'");
    }

    [TestMethod]
    public void ParseFieldsToEntity_FieldResolutionErrors()
    {
        var service = ParserOrgService();

        var empty = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", "{}"));
        StringAssert.Contains(empty.Message, "must be a non-empty JSON object");

        var unknown = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "nosuchfield": "x" }"""));
        StringAssert.Contains(unknown.Message, "nosuchfield");

        var duplicate = Assert.ThrowsExactly<ArgumentException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "name": "a", "NAME": "b" }"""));
        StringAssert.Contains(duplicate.Message, "Duplicate field mapping");

        var ambiguous = Assert.ThrowsExactly<AmbiguousFieldException>(() =>
            EntityParserHelper.ParseFieldsToEntity(service, "account", """{ "Email": "x" }"""));
        Assert.AreEqual("Email", ambiguous.FieldInput);
        Assert.HasCount(2, ambiguous.Candidates);
    }

    // NOTE: FallbackConvert's final arm (JsonElement kinds outside
    // String/Number/True/False — e.g. an array or object value for an
    // untyped attribute) makes JsonElement.GetString() throw inside the
    // helper, which is not a branch the helper can survive, and the MCP
    // server-side McpServer.RunAsync lambdas only run inside a live stdio
    // host — both stay uncovered without product change.
}
