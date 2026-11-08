using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Models;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// ReportDatasetService coverage with a FakeSdkClient (Harmony detours:
/// OnExecute serves RetrieveEntityRequest metadata, OnRetrieveMultiple serves
/// the validation probe). RDL fixtures are generated in temp folders, so the
/// tests never touch repo fixtures and stay parallel-safe.
/// </summary>
[TestClass]
public class ReportDatasetServiceFakeSdkCoverageTests
{
    private const string ReportNamespace = "http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition";

    private FakeSdkClient _fake = null!;
    private readonly List<string> _probeQueries = new();

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
        <CommandText>&lt;fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false""&gt;&lt;entity name=""account"" enableprefiltering=""1"" prefilterparametername=""CRM_FilteredAccount""&gt;&lt;attribute name=""name"" /&gt;&lt;attribute name=""accountid"" /&gt;&lt;filter type=""and""&gt;&lt;condition attribute=""accountid"" operator=""not-null"" /&gt;&lt;/filter&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
      </Query>
      <Fields>
        <Field Name=""name"">
          <DataField>name</DataField>
        </Field>
        <Field Name=""accountid"">
          <DataField>accountid</DataField>
        </Field>
      </Fields>
    </DataSet>
    <DataSet Name=""Dataset2"">
      <Query>
        <DataSourceName>CRM</DataSourceName>
        <CommandText>&lt;fetch&gt;&lt;entity name=""contact""&gt;&lt;attribute name=""fullname"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
      </Query>
      <Fields>
        <Field Name=""fullname"">
          <DataField>fullname</DataField>
        </Field>
      </Fields>
    </DataSet>
  </DataSets>
  <Body>
    <ReportItems>
      <Subreport Name=""Sub1"">
        <DataSetName>Dataset2</DataSetName>
      </Subreport>
    </ReportItems>
  </Body>
  <CustomProperties />
</Report>";

    private const string AccountMetadata = "account";

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _probeQueries.Clear();
        var accountId = new UniqueIdentifierAttributeMetadata { LogicalName = "accountid" };
        var accountMeta = TestMetadata.Entity(
            "account", "Account",
            TestMetadata.String("name"),
            accountId,
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"));
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest retrieve => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = accountMeta }
            },
            _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
        };
        _fake.OnRetrieveMultiple = query =>
        {
            _probeQueries.Add(((FetchExpression)query).Query);
            return new EntityCollection();
        };
    }

    private static string WriteRdl(string content)
    {
        var directory = Path.Combine(Path.GetTempPath(), "devkit-reportdataset-tests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        var file = Path.Combine(directory, "Account.rdl");
        File.WriteAllText(file, content, new UTF8Encoding(true)); // wizard output carries a BOM
        return file;
    }

    private static string DirectoryOf(string file) => Path.GetDirectoryName(file)!;

    private const string NameOnlyFetch =
        "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <filter type=\"and\">\n      <condition attribute=\"name\" operator=\"eq\" value=\"@acctname\" />\n    </filter>\n  </entity>\n</fetch>";

    private const string NameAndIdFetch =
        "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"name\" />\n    <attribute name=\"accountid\" />\n    <filter type=\"and\">\n      <condition attribute=\"accountid\" operator=\"not-null\" />\n    </filter>\n  </entity>\n</fetch>";

    // ── List / Get / FindReferences ──────────────────────────────────────────

    [TestMethod]
    public void List_ParsesDatasetsFieldsPrefilterAndReferences()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        var datasets = service.List();

        Assert.HasCount(2, datasets);
        var account = datasets[0];
        Assert.AreEqual("Account", account.Name);
        Assert.AreEqual("CRM", account.DataSourceName);
        Assert.AreEqual("account", account.RootEntityName);
        Assert.HasCount(2, account.Fields);
        Assert.AreEqual("name", account.Fields[0].Name);
        Assert.AreEqual("Yes", account.PreFilterSummary);
        Assert.AreEqual("CRM_FilteredAccount", account.FetchEntities[0].PrefilterParameterName);
        Assert.AreEqual(0, account.ReferenceCount);

        var dataset2 = datasets[1];
        Assert.AreEqual("Dataset2", dataset2.Name);
        Assert.AreEqual(1, dataset2.ReferenceCount);
        CollectionAssert.Contains(dataset2.ReferencePaths.ToList(), "Report/Body/ReportItems/Subreport/DataSetName");

        Assert.AreEqual("Dataset2", service.Get("dataset2")!.Name);
        Assert.IsNull(service.Get("missing"));
    }

    // ── ValidateSyntax (offline) ─────────────────────────────────────────────

    [TestMethod]
    public void ValidateSyntax_ValidFetch_Passes()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = service.ValidateSyntax(NameAndIdFetch);
        Assert.IsTrue(result.IsSuccess);
        Assert.HasCount(0, result.Errors);
    }

    [TestMethod]
    public void ValidateSyntax_MissingAlias_ReportsLineNumber()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\">\n    </link-entity>\n  </entity>\n</fetch>";
        var result = service.ValidateSyntax(fetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "missing alias");
        StringAssert.Contains(result.Errors[0], " at line 3");
    }

    [TestMethod]
    public void ValidateSyntax_DuplicateAlias_ReportsLineNumber()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <link-entity name=\"contact\" from=\"contactid\" to=\"primarycontactid\" alias=\"c\">\n      <link-entity name=\"account\" from=\"accountid\" to=\"accountid\" alias=\"c\" />\n    </link-entity>\n  </entity>\n</fetch>";
        var result = service.ValidateSyntax(fetch);
        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "Duplicate entity alias 'c'");
        StringAssert.Contains(result.Errors[0], " at line 4");
    }

    // ── ValidateAsync (metadata + probe) ─────────────────────────────────────

    [TestMethod]
    public async Task ValidateAsync_GeneratesFieldsCompanionsParametersAndProbe()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var result = await service.ValidateAsync(_fake.Client, NameOnlyFetch, null, null);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.AreEqual("account", result.RootEntityName);
        Assert.HasCount(1, result.FetchEntities);

        // name → plain field; nothing else (no lookup selected, no companions).
        Assert.HasCount(1, result.Fields);
        Assert.AreEqual("name", result.Fields[0].Name);
        Assert.AreEqual("System.String", result.Fields[0].TypeName);

        // @acctname → discovered parameter.
        Assert.HasCount(1, result.Parameters);
        Assert.AreEqual("@acctname", result.Parameters[0].FetchToken);
        Assert.AreEqual("acctname", result.Parameters[0].ReportParameterName);
        Assert.AreEqual("String", result.Parameters[0].DataType);
        Assert.IsFalse(result.Parameters[0].IsMultiValue);

        // Probe: filters stripped, top=1, no prefilter artifacts.
        Assert.HasCount(1, _probeQueries);
        StringAssert.Contains(_probeQueries[0], "top=\"1\"");
        Assert.IsFalse(_probeQueries[0].Contains("<filter"));
        Assert.IsFalse(_probeQueries[0].Contains("@acctname"));
        Assert.IsNotNull(result.ProbeFetchXml);
    }

    [TestMethod]
    public async Task ValidateAsync_LookupGeneratesValueAndEntityNameCompanions()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"primarycontactid\" />\n  </entity>\n</fetch>";
        var result = await service.ValidateAsync(_fake.Client, fetch, null, null);

        Assert.IsTrue(result.IsSuccess, string.Join(" | ", result.Errors));
        Assert.HasCount(3, result.Fields);
        Assert.AreEqual("primarycontactid", result.Fields[0].Name);
        Assert.AreEqual("primarycontactidValue", result.Fields[1].Name);
        Assert.AreEqual("System.Guid", result.Fields[1].TypeName);
        Assert.IsTrue(result.Fields[1].IsGeneratedCompanion);
        Assert.AreEqual("primarycontactidEntityName", result.Fields[2].Name);
        Assert.AreEqual("System.String", result.Fields[2].TypeName);
    }

    [TestMethod]
    public void ValidateAsync_UnsupportedAttribute_FailsWithTypeName()
    {
        var tags = TestMetadata.MultiSelect("new_tags", "Tags", (1, "one"));
        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name"), tags);
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = accountMeta }
            },
            _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
        };
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var fetch = "<fetch>\n  <entity name=\"account\">\n    <attribute name=\"new_tags\" />\n  </entity>\n</fetch>";
        var result = service.ValidateAsync(_fake.Client, fetch, null, null).GetAwaiter().GetResult();

        Assert.IsFalse(result.IsSuccess);
        StringAssert.Contains(result.Errors[0], "unsupported report type");
    }

    // ── Add + SaveAsync ──────────────────────────────────────────────────────

    [TestMethod]
    public async Task Add_WritesPrefilterArtifactsAndSavesWithBackupAndBom()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) { ["account"] = true };
        var validation = await service.ValidateAsync(_fake.Client, NameOnlyFetch, selections, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));
        Assert.AreEqual("CRM_FilteredAccount", validation.FetchEntities[0].PrefilterParameterName);

        service.Add("NewDataset", validation);
        var backup = await service.SaveAsync(null);

        Assert.IsNotNull(backup);
        Assert.IsTrue(File.Exists(backup));
        StringAssert.Contains(backup, Path.Combine(".devkit", "manage_report", "backups"));
        Assert.AreEqual(DirectoryOf(file), Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName(backup)))));

        var datasets = service.List();
        Assert.HasCount(3, datasets);
        var added = datasets.First(x => x.Name == "NewDataset");
        Assert.AreEqual("Yes", added.PreFilterSummary);
        // Pre-filter parameter + the discovered @acctname user parameter.
        Assert.HasCount(2, added.Parameters);
        var parameterNames = added.Parameters.Select(p => p.QueryParameterName).ToList();
        CollectionAssert.Contains(parameterNames, "CRM_FilteredAccount");
        CollectionAssert.Contains(parameterNames, "@acctname");

        var text = File.ReadAllText(file);
        StringAssert.Contains(text, "enableprefiltering=\"1\"");
        StringAssert.Contains(text, "CRM_FilteredAccount");
        StringAssert.Contains(text, "<QueryParameter Name=\"@acctname\"");
        StringAssert.Contains(text, "=Parameters!acctname.Value");
        StringAssert.Contains(text, "ReportParametersLayout");
        StringAssert.Contains(text, "ReportEntity");
        StringAssert.Contains(text, "<CommandText>&lt;fetch version=\"1.0\"");

        var bytes = File.ReadAllBytes(file);
        Assert.AreEqual(0xEF, bytes[0]); // BOM preserved
    }

    [TestMethod]
    public async Task Add_DuplicateName_Throws()
    {
        var service = new ReportDatasetService(WriteRdl(BaseRdl));
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, null);
        Assert.IsTrue(validation.IsSuccess);

        var error = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("Account", validation));
        StringAssert.Contains(error.Message, "already exists");

        var invalid = Assert.ThrowsExactly<InvalidOperationException>(() => service.Add("2bad name", validation));
        StringAssert.Contains(invalid.Message, "invalid");
    }

    // ── Update (rename + prefilter retention) ────────────────────────────────

    [TestMethod]
    public async Task Update_RenamesDatasetAndReferences()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, null);
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));

        service.Update("Dataset2", "Contacts", validation);
        await service.SaveAsync(null);

        var text = File.ReadAllText(file);
        StringAssert.Contains(text, "<DataSet Name=\"Contacts\"");
        StringAssert.Contains(text, "<DataSetName>Contacts</DataSetName>");
        Assert.IsFalse(text.Contains("Dataset2"));

        Assert.AreEqual("Contacts", service.Get("Contacts")!.Name);
        Assert.IsNull(service.Get("Dataset2"));
    }

    [TestMethod]
    public async Task Update_DisabledPrefilterWarnsButKeepsReportArtifacts()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        // Fetch without any prefilter → the Account prefilter is removed.
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, "Account");
        Assert.IsTrue(validation.IsSuccess, string.Join(" | ", validation.Errors));
        Assert.IsFalse(validation.FetchEntities[0].IsPreFiltered);

        service.Update("Account", "Account", validation);
        var warnings = string.Join(" | ", validation.Warnings);
        StringAssert.Contains(warnings, "retained");
        StringAssert.Contains(warnings, "CRM_FilteredAccount");

        await service.SaveAsync(null);
        var text = File.ReadAllText(file);
        Assert.IsFalse(text.Contains("enableprefiltering"));
    }

    // ── SaveAsync conflict ───────────────────────────────────────────────────

    [TestMethod]
    public async Task SaveAsync_FileChangedOutside_DetectsConflictAndThrows()
    {
        var file = WriteRdl(BaseRdl);
        var service = new ReportDatasetService(file);
        var validation = await service.ValidateAsync(_fake.Client, NameAndIdFetch, null, null);
        service.Add("Dataset3", validation);
        Assert.IsTrue(service.IsDirty);

        File.WriteAllText(file, BaseRdl.Replace("CRM", "OTHER"), new UTF8Encoding(true));
        var error = await Assert.ThrowsExactlyAsync<IOException>(() => service.SaveAsync(null));
        StringAssert.Contains(error.Message, "The RDL changed outside this dialog");
    }

    // ── TaskReportDataset (CLI confirm gates + use-only-one) ─────────────────

    [TestMethod]
    public async Task Task_List_RunsWithoutOrgCall()
    {
        var file = WriteRdl(BaseRdl);
        var task = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "list" });
        await task.RunAsync();
        Assert.HasCount(0, _probeQueries);
    }

    [TestMethod]
    public async Task Task_Validate_BothFetchXmlSources_ThrowsUseOnlyOne()
    {
        var file = WriteRdl(BaseRdl);
        var task = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "validate", Name = "Account", FetchXml = NameAndIdFetch, FetchXmlFile = "x.xml" });
        var error = await Assert.ThrowsExactlyAsync<DevKitValidationException>(task.RunAsync);
        StringAssert.Contains(error.Message, "use only one");
    }

    [TestMethod]
    public async Task Task_Validate_WithOnlyName_RevalidatesCurrentCommandText()
    {
        var file = WriteRdl(BaseRdl);
        var task = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "validate", Name = "Account" });
        await task.RunAsync();
        Assert.HasCount(1, _probeQueries); // live probe ran against the current CommandText

        var withoutName = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "validate" });
        var error = await Assert.ThrowsExactlyAsync<DevKitValidationException>(withoutName.RunAsync);
        StringAssert.Contains(error.Message, "--fetchxml or --fetchxml-file: required for action 'validate'");
    }

    [TestMethod]
    public async Task Task_Delete_ReferencedWithoutForce_IsBlocked()
    {
        var file = WriteRdl(BaseRdl);
        var task = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "delete", Name = "Dataset2" });
        var error = await Assert.ThrowsExactlyAsync<DevKitValidationException>(task.RunAsync);
        StringAssert.Contains(error.Message, "delete blocked");

        // With --force the delete goes through; the dangling reference stays (service parity).
        var forced = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "delete", Name = "Dataset2", Force = true });
        await forced.RunAsync();
        var text = File.ReadAllText(file);
        Assert.IsFalse(text.Contains("<DataSet Name=\"Dataset2\""));
        StringAssert.Contains(text, "<DataSetName>Dataset2</DataSetName>");
    }

    [TestMethod]
    public async Task Task_Update_RemovingFieldsWithoutForce_IsBlocked()
    {
        var file = WriteRdl(BaseRdl);
        var task = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "update", Name = "Account", FetchXml = NameOnlyFetch });
        var error = await Assert.ThrowsExactlyAsync<DevKitValidationException>(task.RunAsync);
        StringAssert.Contains(error.Message, "update blocked");

        var forced = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "update", Name = "Account", FetchXml = NameOnlyFetch, Force = true });
        await forced.RunAsync();
        var text = File.ReadAllText(file);
        Assert.IsFalse(text.Contains("accountid"));
    }

    [TestMethod]
    public async Task Task_UnknownFileOrAction_ThrowsClearValidationErrors()
    {
        var file = WriteRdl(BaseRdl);
        var missing = new TaskReportDataset(new CommandLineArgs { File = Path.Combine(DirectoryOf(file), "missing.rdl"), ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "list" });
        var missingError = await Assert.ThrowsExactlyAsync<DevKitValidationException>(missing.RunAsync);
        StringAssert.Contains(missingError.Message, "File does not exist");

        var notRdl = Path.Combine(DirectoryOf(file), "Account.txt");
        File.WriteAllText(notRdl, BaseRdl, new UTF8Encoding(true));
        var wrongExtension = new TaskReportDataset(new CommandLineArgs { File = notRdl, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "list" });
        var extensionError = await Assert.ThrowsExactlyAsync<DevKitValidationException>(wrongExtension.RunAsync);
        StringAssert.Contains(extensionError.Message, "not a .rdl");

        var unknownAction = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "graph" });
        var actionError = await Assert.ThrowsExactlyAsync<DevKitValidationException>(unknownAction.RunAsync);
        StringAssert.Contains(actionError.Message, "--action 'graph': unknown");

        var badPrefilter = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "validate", Name = "Account", FetchXml = NameAndIdFetch, PreFilter = "account=maybe" });
        var prefilterError = await Assert.ThrowsExactlyAsync<DevKitValidationException>(badPrefilter.RunAsync);
        StringAssert.Contains(prefilterError.Message, "'on' or 'off'");

        var unknownKey = new TaskReportDataset(new CommandLineArgs { File = file, ServiceClient = _fake.Client },
            new ReportDatasetRequest { Action = "validate", Name = "Account", FetchXml = NameAndIdFetch, PreFilter = "lead=on" });
        var keyError = await Assert.ThrowsExactlyAsync<DevKitValidationException>(unknownKey.RunAsync);
        StringAssert.Contains(keyError.Message, "unknown entity");
        StringAssert.Contains(keyError.Message, "account");
    }
}
