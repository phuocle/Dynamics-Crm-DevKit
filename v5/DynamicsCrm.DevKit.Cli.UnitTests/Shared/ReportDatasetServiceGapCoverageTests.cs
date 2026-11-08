using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// Second-pass coverage for ReportDatasetService: the text-format
/// detection of Reload (UTF-32 / UTF-16 BOMs), the Validate branches the
/// first suite missed (malformed XML, page/count paging fields, probe
/// rejection, connection-less rerun over a warm metadata cache), the
/// link-entity recursion and all-attributes expansion of WalkEntity,
/// the referenced-attribute / valueof / entityname resolvers, the RDL
/// artifact repairs (empty ReportParametersLayout, hidden prefilter
/// parameter, existing MSCRM ReportFilter), the contract rejections of
/// the constructor and the parameter-mapping guards of Add/Update.
/// </summary>
[TestClass]
public class ReportDatasetServiceGapCoverageTests
{
    private const string ReportNamespace = "http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition";

    private FakeSdkClient _fake = null!;
    private readonly List<string> _probeQueries = new();

    /// <summary>A minimal valid FetchXML report (no BOM surprises).</summary>
    private const string BaseRdl = $@"<?xml version=""1.0"" encoding=""utf-8""?>
<Report xmlns=""{ReportNamespace}"">
  <DataSources>
    <DataSource Name=""CRM"">
      <ConnectionProperties>
        <DataProvider>MSCRM</DataProvider>
        <ConnectString>Password=*</ConnectString>
      </ConnectionProperties>
    </DataSource>
  </DataSources>
  <DataSets>
    <DataSet Name=""Account"">
      <Query>
        <DataSourceName>CRM</DataSourceName>
        <CommandText>&lt;fetch&gt;&lt;entity name=""account""&gt;&lt;attribute name=""name"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
      </Query>
      <Fields>
        <Field Name=""name"">
          <DataField>name</DataField>
        </Field>
      </Fields>
    </DataSet>
  </DataSets>
  <CustomProperties />
</Report>";

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _probeQueries.Clear();
        var contactMeta = TestMetadata.Entity("contact", "Contact",
            TestMetadata.String("fullname"),
            new UniqueIdentifierAttributeMetadata { LogicalName = "contactid" });
        var accountMeta = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name"),
            new UniqueIdentifierAttributeMetadata { LogicalName = "accountid" },
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"),
            TestMetadata.Boolean("new_flag"),
            TestMetadata.DateTime("new_when"),
            TestMetadata.Money("new_amount"),
            TestMetadata.Double("new_score"),
            TestMetadata.Integer("new_number"),
            TestMetadata.BigInt("new_big"),
            TestMetadata.Picklist("new_choice", "Choice", (1, "one")));
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest retrieve => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = retrieve.LogicalName == "contact" ? contactMeta : accountMeta }
            },
            _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
        };
        _fake.OnRetrieveMultiple = query =>
        {
            _probeQueries.Add(((FetchExpression)query).Query);
            return new EntityCollection();
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake?.Dispose();

    private static string WriteRdl(string content, Encoding? encoding = null)
    {
        var directory = Path.Combine(Path.GetTempPath(), "devkit-reportdataset-gap-tests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        var file = Path.Combine(directory, "Account.rdl");
        File.WriteAllText(file, content, encoding ?? new UTF8Encoding(false));
        return file;
    }

    private const string NameAndIdFetch =
        "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <attribute name=\"accountid\" />\n  </entity>\n</fetch>";

    // ── Reload / DetectTextFormat ────────────────────────────────────────────

    [TestMethod]
    public void Constructor_FileWithoutReportRoot_ThrowsInvalidData()
    {
        var file = WriteRdl("<Root><Data /></Root>");
        var error = Assert.ThrowsExactly<InvalidDataException>(() => _ = new ReportDatasetService(file));
        StringAssert.Contains(error.Message, "no RDL Report root");
    }

    [TestMethod]
    public void Constructor_DetectsUtf32Utf16LeAndBeBoms()
    {
        // DetectTextFormat branches for the four BOM shapes; UTF-8 BOM is
        // covered by the first suite, so ride the remaining three.
        var utf32 = new ReportDatasetService(WriteRdl(BaseRdl, Encoding.UTF32));
        Assert.AreEqual("Report", utf32.Document.Root!.Name.LocalName);
        Assert.HasCount(1, utf32.List());

        var utf16Le = new ReportDatasetService(WriteRdl(BaseRdl, Encoding.Unicode));
        Assert.HasCount(1, utf16Le.List());

        var utf16Be = new ReportDatasetService(WriteRdl(BaseRdl, Encoding.BigEndianUnicode));
        Assert.HasCount(1, utf16Be.List());
    }

    [TestMethod]
    public void ValidateFileForDatasetManagement_ValidRdlPasses_InvalidRdlThrows()
    {
        var file = WriteRdl(BaseRdl);
        ReportDatasetService.ValidateFileForDatasetManagement(file);

        var bad = WriteRdl("<NotAReport />");
        Assert.ThrowsExactly<InvalidDataException>(() => ReportDatasetService.ValidateFileForDatasetManagement(bad));
    }

    [TestMethod]
    public void DocumentProperties_ExposeRootPathAndCleanState()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        Assert.AreEqual("Report", service.Document.Root!.Name.LocalName);
        Assert.AreEqual(file, service.FilePath);
        Assert.IsFalse(service.IsDirty);
        Assert.HasCount(0, service.Warnings);
    }

    // ── Constructor contract rejections (TryValidateFetchXmlContract) ────────

    private static void AssertCtorRejects(string rdl, string expectedFragment)
    {
        var file = WriteRdl(rdl);
        var error = Assert.ThrowsExactly<InvalidDataException>(() => _ = new ReportDatasetService(file));
        StringAssert.Contains(error.Message, expectedFragment);
    }

    [TestMethod]
    public void Constructor_EmptyCommandText_ReportsEmpty()
    {
        AssertCtorRejects(
            $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}""><DataSets><DataSet Name=""A""><Query><DataSourceName>CRM</DataSourceName><CommandText>  </CommandText></Query></DataSet></DataSets></Report>",
            "CommandText is empty");
    }

    [TestMethod]
    public void Constructor_NonFetchCommandText_ReportsRoot()
    {
        AssertCtorRejects(
            $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}""><DataSets><DataSet Name=""A""><Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;sql&gt;select 1&lt;/sql&gt;</CommandText></Query></DataSet></DataSets></Report>",
            "root must be <fetch>");
    }

    [TestMethod]
    public void Constructor_TwoRootEntities_ReportsEntityCount()
    {
        AssertCtorRejects(
            $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}""><DataSets><DataSet Name=""A""><Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;fetch&gt;&lt;entity name=""account"" /&gt;&lt;entity name=""contact"" /&gt;&lt;/fetch&gt;</CommandText></Query></DataSet></DataSets></Report>",
            "exactly one root <entity>");
    }

    [TestMethod]
    public void Constructor_LinkEntityWithoutAlias_ReportsAlias()
    {
        AssertCtorRejects(
            $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}""><DataSets><DataSet Name=""A""><Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;fetch&gt;&lt;entity name=""account""&gt;&lt;link-entity name=""contact"" from=""contactid"" to=""primarycontactid"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText></Query></DataSet></DataSets></Report>",
            "missing alias");
    }

    // ── Validate branches ────────────────────────────────────────────────────

    [TestMethod]
    public async Task Validate_MalformedFetchXml_FailsWithParseError()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = await service.ValidateAsync(_fake.Client, "<fetch><entity name=\"account\">");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "not well-formed XML");
    }

    [TestMethod]
    public async Task Validate_PageAndCountAttributes_GeneratePagingFields()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch page=\"2\" count=\"50\">\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        var names = result.Fields.Select(x => x.Name).ToList();
        CollectionAssert.Contains(names, "PagingCookie");
        CollectionAssert.Contains(names, "MoreRecords");
        Assert.AreEqual("System.String", result.Fields.First(x => x.Name == "PagingCookie").TypeName);
        Assert.AreEqual("System.Boolean", result.Fields.First(x => x.Name == "MoreRecords").TypeName);
    }

    [TestMethod]
    public async Task Validate_PageAttributeToken_DiscoveredAsParameter()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch page=\"@p\">\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        var parameter = result.Parameters.Single(x => x.FetchToken == "@p");
        Assert.AreEqual("String", parameter.DataType);
        Assert.AreEqual("p", parameter.ReportParameterName);
    }

    [TestMethod]
    public async Task Validate_ServerRejectsProbe_ReportsDataverseError()
    {
        _fake.OnRetrieveMultiple = query => throw new InvalidOperationException("nope");
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = await service.ValidateAsync(_fake.Client, NameAndIdFetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "Dataverse rejected the validation probe");
        StringAssert.Contains(result.Errors[0], "nope");
    }

    [TestMethod]
    public async Task Validate_ParameterizedFetch_WarnsFiltersExcludedFromProbe()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition attribute=\"name\" operator=\"eq\" value=\"@acctname\" />\n    </filter>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        StringAssert.Contains(result.Warnings.Single(w => w.Contains("parameterized filters")), "Projection validated");
        Assert.IsFalse(_probeQueries[0].Contains("@acctname"));
    }

    [TestMethod]
    public async Task Validate_NullClientOverWarmCache_SkipsServerValidation()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        // First pass populates the per-service metadata cache; the second
        // pass runs without a client and must reach the skip warning.
        var first = await service.ValidateAsync(_fake.Client, NameAndIdFetch);
        Assert.IsTrue(first.IsSuccess, string.Join(" | ", first.Errors));

        var second = await service.ValidateAsync(null!, NameAndIdFetch);
        Assert.IsTrue(second.IsSuccess, string.Join(" | ", second.Errors));
        StringAssert.Contains(second.Warnings.Single(), "Dataverse connection was not available");
    }

    [TestMethod]
    public async Task Validate_NullClientColdCache_ReportsMetadataError()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = await service.ValidateAsync(null!, NameAndIdFetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "A Dataverse connection is required");
    }

    // ── WalkEntity: link recursion + all-attributes ──────────────────────────

    [TestMethod]
    public async Task Validate_LinkEntity_WalksRecursionAndComposesFieldNames()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <attribute name=\"fullname\" />\n    </link-entity>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.HasCount(2, result.FetchEntities);
        var link = result.FetchEntities[1];
        Assert.AreEqual("account/contact[c]", link.Path);
        Assert.AreEqual("c", link.Alias);
        Assert.IsFalse(link.IsRoot);

        var names = result.Fields.Select(x => x.Name).ToList();
        CollectionAssert.Contains(names, "name");
        CollectionAssert.Contains(names, "c_fullname");
    }

    [TestMethod]
    public async Task Validate_NestedLinkEntity_WalksDeeperPath()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <link-entity name=\"account\" from=\"accountid\" to=\"contactid\" alias=\"ac2\">\n        <attribute name=\"name\" />\n      </link-entity>\n    </link-entity>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.HasCount(3, result.FetchEntities);
        Assert.AreEqual("account/contact[c]/account[ac2]", result.FetchEntities[2].Path);
        CollectionAssert.Contains(result.Fields.Select(x => x.Name).ToList(), "ac2_name");
    }

    [TestMethod]
    public async Task Validate_AllAttributes_ExpandsReadableMetadata()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <all-attributes />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        var account = (RetrieveEntityResponse)_fake.OnExecute(new RetrieveEntityRequest { LogicalName = "account" });
        var expected = account.EntityMetadata.Attributes
            .Where(x => x.IsValidForRead != false && x.AttributeOf == null)
            .Select(x => x.LogicalName).ToList();
        foreach (var logicalName in expected)
            CollectionAssert.Contains(result.Fields.Select(x => x.Name).ToList(), logicalName);
    }

    // NOTE: the WalkEntity missing-alias / duplicate-alias guards (link
    // validation) are unreachable through Validate — ValidateEntityGraph
    // runs first over the same graph and throws the same conditions.

    [TestMethod]
    public async Task Validate_DuplicateGeneratedFieldName_ReportsConflict()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" alias=\"my field\" />\n    <attribute name=\"accountid\" alias=\"my_field\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "Duplicate generated RDL field 'my_field'");
    }

    [TestMethod]
    public async Task Validate_AggregateWithoutAlias_Fails()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" aggregate=\"count\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "requires an explicit alias");
    }

    [TestMethod]
    public async Task Validate_UnsupportedVirtualAttribute_FailsWithClassName()
    {
        var virtualAccount = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name"),
            TestMetadata.WithType(TestMetadata.Integer("new_virtual"), AttributeTypeCode.Virtual));
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = virtualAccount }
            },
            _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
        };
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"new_virtual\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "new_virtual");
        StringAssert.Contains(result.Errors[0], "unsupported report type");
    }

    [TestMethod]
    public void ValidateSyntax_EntityWithoutName_ReportsRequirement()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = service.ValidateSyntax("<fetch>\n  <entity />\n</fetch>");
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "Every entity/link-entity requires a name");
    }

    // ── Referenced attributes / valueof / entityname ─────────────────────────

    [TestMethod]
    public async Task Validate_LinkFromToAndOrder_AcceptKnownAttributes()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <order attribute=\"name\" />\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);
        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
    }

    [TestMethod]
    public async Task Validate_UnknownOrderOrConditionAttribute_FailsWithUsage()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var orderFetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <order attribute=\"ghost\" />\n  </entity>\n</fetch>";
        var orderResult = await service.ValidateAsync(_fake.Client, orderFetch);
        Assert.IsFalse(orderResult.IsSuccess);
        StringAssert.Contains(orderResult.Errors[0], "used by order");

        var conditionFetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition attribute=\"ghost\" operator=\"eq\" value=\"x\" />\n    </filter>\n  </entity>\n</fetch>";
        var conditionResult = await service.ValidateAsync(_fake.Client, conditionFetch);
        Assert.IsFalse(conditionResult.IsSuccess);
        StringAssert.Contains(conditionResult.Errors[0], "used by condition");
    }

    [TestMethod]
    public async Task Validate_ValueOfForms_ResolveAliasAndOwner()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <filter>\n        <condition attribute=\"fullname\" operator=\"eq\" valueof=\"c.contactid\" />\n        <condition attribute=\"contactid\" operator=\"eq\" valueof=\"fullname\" />\n      </filter>\n    </link-entity>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);
        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
    }

    [TestMethod]
    public async Task Validate_ValueOfUnknownAliasOrAttribute_Fails()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var unknownAlias = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition attribute=\"name\" operator=\"eq\" valueof=\"zz.name\" />\n    </filter>\n  </entity>\n</fetch>";
        var aliasResult = await service.ValidateAsync(_fake.Client, unknownAlias);
        Assert.IsFalse(aliasResult.IsSuccess);
        StringAssert.Contains(aliasResult.Errors[0], "unknown entity alias 'zz'");

        var unknownAttribute = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <filter>\n        <condition attribute=\"fullname\" operator=\"eq\" valueof=\"c.ghost\" />\n      </filter>\n    </link-entity>\n  </entity>\n</fetch>";
        var attributeResult = await service.ValidateAsync(_fake.Client, unknownAttribute);
        Assert.IsFalse(attributeResult.IsSuccess);
        StringAssert.Contains(attributeResult.Errors[0], "valueof");
    }

    [TestMethod]
    public async Task Validate_EntityNameCondition_ResolvesAliasRootAndUnknown()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var alias = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <filter>\n        <condition entityname=\"c\" attribute=\"fullname\" operator=\"eq\" value=\"x\" />\n      </filter>\n    </link-entity>\n  </entity>\n</fetch>";
        var aliasResult = await service.ValidateAsync(_fake.Client, alias);
        Assert.IsTrue(aliasResult.IsSuccess, string.Join(" | ", aliasResult.Errors));

        var root = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition entityname=\"account\" attribute=\"name\" operator=\"eq\" value=\"x\" />\n    </filter>\n  </entity>\n</fetch>";
        var rootResult = await service.ValidateAsync(_fake.Client, root);
        Assert.IsTrue(rootResult.IsSuccess, string.Join(" | ", rootResult.Errors));

        var unknown = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition entityname=\"ghost\" attribute=\"name\" operator=\"eq\" value=\"x\" />\n    </filter>\n  </entity>\n</fetch>";
        var unknownResult = await service.ValidateAsync(_fake.Client, unknown);
        Assert.IsFalse(unknownResult.IsSuccess);
        StringAssert.Contains(unknownResult.Errors[0], "unknown entity alias 'ghost'");
    }

    [TestMethod]
    public async Task Validate_ConditionTypes_MapToReportParameterTypes()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter type=\"or\">\n      <condition attribute=\"new_flag\" operator=\"eq\" value=\"@b\" />\n      <condition attribute=\"new_when\" operator=\"on\" value=\"@d\" />\n      <condition attribute=\"new_amount\" operator=\"ge\" value=\"@f\" />\n      <condition attribute=\"new_number\" operator=\"ge\" value=\"@i\" />\n      <condition attribute=\"new_choice\" operator=\"eq\" value=\"@p\" />\n    </filter>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.AreEqual("Boolean", result.Parameters.First(x => x.FetchToken == "@b").DataType);
        Assert.AreEqual("DateTime", result.Parameters.First(x => x.FetchToken == "@d").DataType);
        Assert.AreEqual("Float", result.Parameters.First(x => x.FetchToken == "@f").DataType);
        Assert.AreEqual("Integer", result.Parameters.First(x => x.FetchToken == "@i").DataType);
        Assert.AreEqual("Integer", result.Parameters.First(x => x.FetchToken == "@p").DataType);
    }

    [TestMethod]
    public async Task Validate_TypedAttributes_GenerateTypedCompanionFields()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"new_flag\" />\n    <attribute name=\"new_when\" />\n    <attribute name=\"new_amount\" />\n    <attribute name=\"new_score\" />\n    <attribute name=\"new_number\" />\n    <attribute name=\"new_big\" />\n    <attribute name=\"new_choice\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.AreEqual("System.Boolean", result.Fields.First(x => x.Name == "new_flagValue").TypeName);
        Assert.AreEqual("System.DateTime", result.Fields.First(x => x.Name == "new_whenValue").TypeName);
        Assert.AreEqual("System.Decimal", result.Fields.First(x => x.Name == "new_amountValue").TypeName);
        Assert.AreEqual("System.Double", result.Fields.First(x => x.Name == "new_scoreValue").TypeName);
        Assert.AreEqual("System.Int32", result.Fields.First(x => x.Name == "new_numberValue").TypeName);
        Assert.AreEqual("System.Int64", result.Fields.First(x => x.Name == "new_bigValue").TypeName);
        Assert.AreEqual("System.Int32", result.Fields.First(x => x.Name == "new_choiceValue").TypeName);
    }

    [TestMethod]
    public async Task Validate_MultiValueConditions_MarkParametersMultiValue()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition attribute=\"name\" operator=\"in\">\n        <value>@a</value>\n        <value>@b</value>\n      </condition>\n    </filter>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.IsTrue(result.Parameters.Single(x => x.FetchToken == "@a").IsMultiValue);
        Assert.IsTrue(result.Parameters.Single(x => x.FetchToken == "@b").IsMultiValue);
    }

    [TestMethod]
    public async Task Validate_ExistingDatasetMapping_IsReused()
    {
        // The Account dataset maps @acctname → the report parameter AcctName;
        // revalidating against it must reuse the mapping.
        var rdl = BaseRdl.Replace(
            "<CommandText>",
            "<QueryParameters><QueryParameter Name=\"@acctname\"><Value>=Parameters!AcctName.Value</Value></QueryParameter></QueryParameters><CommandText>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter>\n      <condition attribute=\"name\" operator=\"eq\" value=\"@acctname\" />\n    </filter>\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch, null, "Account");

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        var parameter = result.Parameters.Single();
        Assert.AreEqual("AcctName", parameter.ReportParameterName);
        Assert.AreEqual("=Parameters!AcctName.Value", parameter.ValueExpression);
        Assert.IsFalse(parameter.ExistsInReport);
    }

    // ── Add / Update guards and artifact repairs ─────────────────────────────

    [TestMethod]
    public async Task Add_FailedValidation_Throws()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = await service.ValidateAsync(_fake.Client, "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"ghost\" />\n  </entity>\n</fetch>");
        Assert.IsFalse(result.IsSuccess);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("NewDataset", result));
        StringAssert.Contains(error.Message, "must pass validation");
    }

    [TestMethod]
    public async Task Add_HandCraftedParameterMappings_GuardNameTypeAndPrefilter()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));

        var badName = new ReportDatasetValidationResult
        {
            IsSuccess = true,
            FetchXml = NameAndIdFetch,
            Fields = { new ReportDatasetFieldInfo { Name = "name", DataField = "name", TypeName = "System.String" } },
            Parameters = { new ReportDatasetParameterInfo { FetchToken = "@x", QueryParameterName = "@x", ReportParameterName = "bad name", DataType = "String" } }
        };
        var nameError = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("D1", badName));
        StringAssert.Contains(nameError.Message, "Report parameter name 'bad name' is invalid");

        var badType = new ReportDatasetValidationResult
        {
            IsSuccess = true,
            FetchXml = NameAndIdFetch,
            Fields = { new ReportDatasetFieldInfo { Name = "name", DataField = "name", TypeName = "System.String" } },
            Parameters = { new ReportDatasetParameterInfo { FetchToken = "@x", QueryParameterName = "@x", ReportParameterName = "x", DataType = "Bogus" } }
        };
        var typeError = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("D2", badType));
        StringAssert.Contains(typeError.Message, "Report parameter type 'Bogus' is invalid");

        var badPrefilter = new ReportDatasetValidationResult
        {
            IsSuccess = true,
            FetchXml = NameAndIdFetch,
            Fields = { new ReportDatasetFieldInfo { Name = "name", DataField = "name", TypeName = "System.String" } },
            FetchEntities = { new ReportFetchEntityInfo { Path = "account", LogicalName = "account", IsRoot = true, IsPreFiltered = true, PrefilterParameterName = "Filter_Account" } }
        };
        var prefilterError = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("D3", badPrefilter));
        StringAssert.Contains(prefilterError.Message, "beginning with CRM_");
    }

    [TestMethod]
    public async Task Add_EmptyValueExpression_DefaultsToParameterBinding()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var validation = new ReportDatasetValidationResult
        {
            IsSuccess = true,
            FetchXml = NameAndIdFetch,
            Fields = { new ReportDatasetFieldInfo { Name = "name", DataField = "name", TypeName = "System.String" } },
            Parameters = { new ReportDatasetParameterInfo { FetchToken = "@acctname", QueryParameterName = "@acctname", ReportParameterName = "acctname", DataType = "String", ValueExpression = "" } }
        };
        service.Add("Defaulted", validation);
        Assert.IsTrue(service.IsDirty);
        Assert.AreEqual("=Parameters!acctname.Value", validation.Parameters[0].ValueExpression);
        var added = service.Get("Defaulted")!;
        Assert.HasCount(1, added.Parameters);
        Assert.AreEqual("=Parameters!acctname.Value", added.Parameters[0].ValueExpression);
        await Task.CompletedTask;
    }

    [TestMethod]
    public async Task Add_RepairsHiddenPrefilterParameterInReport()
    {
        // An existing hidden CRM_FilteredAccount report parameter without a
        // DefaultValue: Add must refresh DataType/Hidden/DefaultValue in place.
        var rdl = $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}"">
  <DataSources>
    <DataSource Name=""CRM""><ConnectionProperties><DataProvider>MSCRM</DataProvider><ConnectString>Password=*</ConnectString></ConnectionProperties></DataSource>
  </DataSources>
  <DataSets>
    <DataSet Name=""Account"">
      <Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;fetch&gt;&lt;entity name=""account"" /&gt;&lt;/fetch&gt;</CommandText></Query>
      <Fields />
    </DataSet>
  </DataSets>
  <ReportParameters>
    <ReportParameter Name=""CRM_FilteredAccount""><DataType>String</DataType></ReportParameter>
  </ReportParameters>
  <CustomProperties />
</Report>";
        var service = new ReportDatasetService(WriteRdl(rdl));
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        service.Add("Filtered", validation);
        var added = service.Get("Filtered")!;
        Assert.AreEqual("CRM_FilteredAccount", added.FetchEntities.Single(x => x.IsPreFiltered).PrefilterParameterName);

        var rdlNs = (XNamespace)ReportNamespace;
        var reportParameter = service.Document.Root!
            .Element(rdlNs + "ReportParameters")!
            .Elements(rdlNs + "ReportParameter")
            .Single(x => (string)x.Attribute("Name") == "CRM_FilteredAccount");
        Assert.AreEqual("String", reportParameter.Element(rdlNs + "DataType")!.Value);
        Assert.AreEqual("true", reportParameter.Element(rdlNs + "Hidden")!.Value);
        StringAssert.Contains(reportParameter.Element(rdlNs + "DefaultValue")!.Value, "<entity name=\"account\"");
    }

    [TestMethod]
    public async Task Add_BuildsLayoutGridInsideEmptyReportParametersLayout()
    {
        var rdl = BaseRdl.Replace("<CustomProperties />", "<ReportParametersLayout />");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        service.Add("WithLayout", validation);
        var layout = service.Document.Root!.Elements().First(x => x.Name.LocalName == "ReportParametersLayout");
        var grid = layout.Elements().First(x => x.Name.LocalName == "GridLayoutDefinition");
        Assert.AreEqual("1", grid.Elements().First(x => x.Name.LocalName == "NumberOfColumns").Value);
        Assert.AreEqual("1", grid.Elements().First(x => x.Name.LocalName == "NumberOfRows").Value);
        var cell = grid.Descendants().First(x => x.Name.LocalName == "CellDefinition");
        StringAssert.Contains(cell.Descendants().First(x => x.Name.LocalName == "ParameterName").Value, "CRM_FilteredAccount");
    }

    [TestMethod]
    public async Task Add_RepairsExistingMscrmReportFilter()
    {
        // The MSCRM payload carries the ReportFilter as escaped TEXT (the
        // CRM format) — double-escaped in the RDL source.
        const string filter = "&amp;lt;ReportFilter&amp;gt;&amp;lt;ReportEntity paramname=\"CRM_Existing\" displayname=\"Existing\" donotconvert=\"1\"&amp;gt;&amp;lt;fetch&amp;gt;&amp;lt;entity name=\"lead\" /&amp;gt;&amp;lt;/fetch&amp;gt;&amp;lt;/ReportEntity&amp;gt;&amp;lt;/ReportFilter&amp;gt;";
        var rdl = BaseRdl.Replace(
            "<CustomProperties />",
            $"<CustomProperties><CustomProperty><Name>Custom</Name><Value>&lt;mscrm&gt;&lt;MSCRM&gt;{filter}&lt;/MSCRM&gt;&lt;/mscrm&gt;</Value></CustomProperty></CustomProperties>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        service.Add("Filtered2", validation);
        var customValue = service.Document.Root!.Descendants()
            .First(x => x.Name.LocalName == "CustomProperty" && x.Elements().Any(e => e.Value == "Custom"))
            .Elements().First(x => x.Name.LocalName == "Value").Value;
        StringAssert.Contains(customValue, "CRM_FilteredAccount");
        StringAssert.Contains(customValue, "CRM_Existing"); // the existing entity is retained
    }

    [TestMethod]
    public async Task Add_MalformedMscrmValue_ThrowsAndKeepsUnchanged()
    {
        var rdl = BaseRdl.Replace(
            "<CustomProperties />",
            "<CustomProperties><CustomProperty><Name>Custom</Name><Value>&lt;mscrm&gt;&lt;MSCRM&gt;&lt;not-xml&lt;/MSCRM&gt;&lt;/mscrm&gt;</Value></CustomProperty></CustomProperties>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        var error = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("Filtered3", validation));
        StringAssert.Contains(error.Message, "malformed");
    }

    [TestMethod]
    public async Task Add_MscrmValueWithoutReportFilter_Throws()
    {
        // The MSCRM payload text parses, but its root is not a ReportFilter.
        var rdl = BaseRdl.Replace(
            "<CustomProperties />",
            "<CustomProperties><CustomProperty><Name>Custom</Name><Value>&lt;mscrm&gt;&lt;MSCRM&gt;&amp;lt;NotAFilter /&amp;gt;&lt;/MSCRM&gt;&lt;/mscrm&gt;</Value></CustomProperty></CustomProperties>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        var error = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("Filtered4", validation));
        StringAssert.Contains(error.Message, "does not contain a ReportFilter");
        await Task.CompletedTask;
    }

    [TestMethod]
    public async Task Update_OntoExistingDatasetName_Throws()
    {
        var rdl = BaseRdl.Replace("</DataSets>", "    <DataSet Name=\"Second\">\n      <Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;fetch&gt;&lt;entity name=\"contact\" /&gt;&lt;/fetch&gt;</CommandText></Query>\n      <Fields />\n    </DataSet>\n  </DataSets>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, null);
        Assert.IsTrue(validation.IsSuccess);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() => service.Update("Second", "Account", validation));
        StringAssert.Contains(error.Message, "already exists");
    }

    [TestMethod]
    public async Task Update_RemovingUserParameter_WarnsConservativeRetention()
    {
        // The Account dataset carries an @acctname QueryParameter bound to a
        // report parameter; updating with a parameterless fetch must keep
        // the report-level parameter and warn about the removed mapping.
        var rdl = $@"<?xml version=""1.0""?>
<Report xmlns=""{ReportNamespace}"">
  <DataSources>
    <DataSource Name=""CRM""><ConnectionProperties><DataProvider>MSCRM</DataProvider><ConnectString>Password=*</ConnectString></ConnectionProperties></DataSource>
  </DataSources>
  <DataSets>
    <DataSet Name=""Account"">
      <Query>
        <DataSourceName>CRM</DataSourceName>
        <QueryParameters>
          <QueryParameter Name=""@acctname""><Value>=Parameters!AcctName.Value</Value></QueryParameter>
        </QueryParameters>
        <CommandText>&lt;fetch&gt;&lt;entity name=""account""&gt;&lt;attribute name=""name"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
      </Query>
      <Fields />
    </DataSet>
  </DataSets>
  <ReportParameters>
    <ReportParameter Name=""AcctName""><DataType>String</DataType><Prompt>AcctName</Prompt></ReportParameter>
  </ReportParameters>
  <CustomProperties />
</Report>";
        var service = new ReportDatasetService(WriteRdl(rdl));
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, "Account");
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));
        Assert.HasCount(0, validation.Parameters);

        service.Update("Account", "Account", validation);
        StringAssert.Contains(validation.Warnings.Single(w => w.Contains("retained report-level parameters")), "AcctName");

        // The stale QueryParameter is gone from the dataset.
        var dataset = service.Document.Root!.Descendants().First(x => x.Name.LocalName == "DataSet");
        Assert.IsNull(dataset.Descendants().FirstOrDefault(x => x.Name.LocalName == "QueryParameter"));
    }

    // ── Rename references carried as attributes ─────────────────────────────

    [TestMethod]
    public async Task Update_Rename_RewritesDatasetAttributeReferences()
    {
        var rdl = BaseRdl.Replace(
            "<CustomProperties />",
            "<CustomProperties><Chart Dataset=\"Account\" /><Tablix><DataSetName>Account</DataSetName></Tablix></CustomProperties>");
        var service = new ReportDatasetService(WriteRdl(rdl));
        var references = service.FindReferences("Account").ToList();
        Assert.HasCount(2, references); // the Chart attribute + the Tablix DataSetName element

        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, null);
        service.Update("Account", "Renamed", validation);

        var attribute = service.Document.Root!.Descendants().First(x => x.Name.LocalName == "Chart");
        Assert.AreEqual("Renamed", (string)attribute.Attribute("Dataset")!);
        Assert.AreEqual("Renamed", service.Document.Root!.Descendants().First(x => x.Name.LocalName == "DataSetName").Value);
    }

    // ── FindFetchEntityForEditor (internal static editor seam) ──────────────

    [TestMethod]
    public void FindFetchEntityForEditor_WalksAliasesAndRejectsBadPaths()
    {
        const string fetch = "<fetch>\n  <entity name=\"account\">\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <link-entity name=\"account\" from=\"accountid\" to=\"accountid\" alias=\"ac2\" />\n    </link-entity>\n  </entity>\n</fetch>";
        var document = XDocument.Parse(fetch);

        var root = ReportDatasetService.FindFetchEntityForEditor(document, "account");
        Assert.AreEqual("account", (string)root!.Attribute("name")!);

        var contact = ReportDatasetService.FindFetchEntityForEditor(document, "account/contact[c]");
        Assert.AreEqual("contact", (string)contact!.Attribute("name")!);

        var nested = ReportDatasetService.FindFetchEntityForEditor(document, "account/contact[c]/account[ac2]");
        Assert.AreEqual("account", (string)nested!.Attribute("name")!);

        // Segments resolve by alias, not by name — "ghost" with a known
        // alias still lands on the aliased link.
        var byAlias = ReportDatasetService.FindFetchEntityForEditor(document, "account/ghost[c]");
        Assert.AreEqual("contact", (string)byAlias!.Attribute("name")!);

        Assert.IsNull(ReportDatasetService.FindFetchEntityForEditor(document, "other"));
        Assert.IsNull(ReportDatasetService.FindFetchEntityForEditor(document, "account/contact"));
        Assert.IsNull(ReportDatasetService.FindFetchEntityForEditor(document, "account/ghost[zz]"));
        Assert.IsNull(ReportDatasetService.FindFetchEntityForEditor(document, null));
    }

    // NOTE: Add's DataSets-missing branch (create after DataSources or
    // AddFirst) is unreachable through the public API — the constructor's
    // ValidateFetchReportContract refuses an RDL without datasets, and no
    // mutation removes the DataSets container.
    // NOTE: List's "CommandText could not be parsed" warning is likewise
    // unreachable — every surviving CommandText passed the fetch contract.
    // NOTE: ParseFetch's malformed catch is unreachable — ApplyPrefilter…
    // only sees CommandText that already passed the constructor contract.
}
