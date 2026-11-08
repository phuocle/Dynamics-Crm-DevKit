using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Models;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// 'devkit report --type dataset' flows that run without Dataverse: the
/// list/add/update/delete actions over a temp .rdl (ValidateAsync skips the
/// server probe when no ServiceClient is set), the FetchXML source
/// resolution rules, the --prefilter selector parsing (path/alias/logical
/// resolution plus every rejection), FailValidation, and the task getters.
/// </summary>
[TestClass]
public sealed class TaskReportDatasetOfflineFlowTests
{
    private const string ReportNamespace = "http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition";

    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_ReportDataset", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private string WriteRdl(string content, string name = "Report1.rdl")
    {
        var file = Path.Combine(_root, name);
        File.WriteAllText(file, content, new System.Text.UTF8Encoding(true));
        return file;
    }

    private const string MinimalRdl = $@"<?xml version=""1.0"" encoding=""utf-8""?>
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
        <Field Name=""name""><DataField>name</DataField></Field>
      </Fields>
    </DataSet>
  </DataSets>
  <Body>
    <ReportItems />
  </Body>
  <CustomProperties />
</Report>";

    private const string ListRdl = $@"<?xml version=""1.0"" encoding=""utf-8""?>
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
        <Field Name=""name""><DataField>name</DataField></Field>
      </Fields>
    </DataSet>
    <DataSet Name=""Contact"">
      <Query>
        <DataSourceName>CRM</DataSourceName>
        <CommandText>&lt;fetch&gt;&lt;entity name=""contact""&gt;&lt;attribute name=""fullname"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
      </Query>
      <Fields>
        <Field Name=""fullname""><DataField>fullname</DataField></Field>
      </Fields>
    </DataSet>
  </DataSets>
  <Body>
    <ReportItems />
  </Body>
  <CustomProperties />
</Report>";

    private static TaskReportDataset NewTask(string file, ReportDatasetRequest request) => new(
        new CommandLineArgs { File = file },
        request) { CurrentDirectory = Path.GetDirectoryName(file) };

    private static TaskReportDataset NewTask(string file, ReportDatasetRequest request, Mcp.Infrastructure.FakeSdkClient client) => new(
        new CommandLineArgs { File = file, ServiceClient = client.Client },
        request) { CurrentDirectory = Path.GetDirectoryName(file) };

    /// <summary>
    /// The metadata resolution of ValidateAsync requires a ServiceClient
    /// (ReportDatasetService.GetMetadata throws on null), so the add/update
    /// actions run against a FakeSdkClient answering the sync
    /// RetrieveEntityRequest reads; the validation probe returns no rows.
    /// </summary>
    private static Mcp.Infrastructure.FakeSdkClient CreateMetadataFake()
    {
        var fake = new Mcp.Infrastructure.FakeSdkClient();
        var account = Mcp.Infrastructure.TestMetadata.Entity("account", "Account",
            Mcp.Infrastructure.TestMetadata.String("name", "Name"),
            Mcp.Infrastructure.TestMetadata.String("telephone1", "Phone"));
        fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse { Results = { ["EntityMetadata"] = account } },
            _ => new OrganizationResponse()
        };
        fake.OnRetrieveMultiple = _ => new EntityCollection(new List<Entity>());
        return fake;
    }

    // ── getters and validation ─────────────────────────────────────────

    [TestMethod]
    public async Task Getters_And_IsValidAsync_AreTriviallyOffline()
    {
        var task = NewTask(Path.Combine(_root, "Report1.rdl"), new ReportDatasetRequest());
        Assert.AreEqual("[REPORTDATASETS]", task.TaskType);
        Assert.IsFalse(task.IsOk);
        Assert.AreEqual(Guid.Empty, task.SolutionId);
        Assert.IsNull(task.SolutionPrefix);
        Assert.IsTrue(await task.IsValidAsync());
    }

    // ── file gates ─────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_MissingFile_Throws()
    {
        var task = NewTask(string.Empty, new ReportDatasetRequest { Action = "list" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "--file: required");
    }

    [TestMethod]
    public async Task RunAsync_FileDoesNotExist_Throws()
    {
        var task = NewTask(Path.Combine(_root, "no-such-report.rdl"), new ReportDatasetRequest { Action = "list" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "File does not exist");
    }

    [TestMethod]
    public async Task RunAsync_NonRdlFile_Throws()
    {
        var file = Path.Combine(_root, "Report1.txt");
        await File.WriteAllTextAsync(file, "<xml/>");
        var task = NewTask(file, new ReportDatasetRequest { Action = "list" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "not a .rdl");
    }

    [TestMethod]
    public async Task RunAsync_UnknownAction_Throws()
    {
        var file = WriteRdl(MinimalRdl);
        var task = NewTask(file, new ReportDatasetRequest { Action = "bogus" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "unknown — valid: list, validate, add, update, delete");
    }

    // ── the offline actions ────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_List_PrintsDatasetsAndWarnings()
    {
        var file = WriteRdl(ListRdl);
        await NewTask(file, new ReportDatasetRequest { Action = "list" }).RunAsync();
        Assert.IsTrue(File.Exists(file), "list never mutates the report.");
    }

    [TestMethod]
    public async Task RunAsync_Add_CreatesDatasetAndBackup()
    {
        using var fake = CreateMetadataFake();
        var file = WriteRdl(MinimalRdl);
        var fetch = "<fetch><entity name=\"account\"><attribute name=\"name\" /><filter type=\"and\"><condition attribute=\"name\" operator=\"eq\" value=\"@acct\" /></filter></entity></fetch>";
        await NewTask(file, new ReportDatasetRequest { Action = "add", Name = "NewDataset", FetchXml = fetch }, fake).RunAsync();
        StringAssert.Contains(await File.ReadAllTextAsync(file), "NewDataset", "the dataset was written into the report.");
    }

    [TestMethod]
    public async Task RunAsync_Add_RequiresName()
    {
        var file = WriteRdl(MinimalRdl);
        var task = NewTask(file, new ReportDatasetRequest { Action = "add", FetchXml = "<fetch><entity name=\"account\" /></fetch>" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "--name: required for action 'add'");
    }

    [TestMethod]
    public async Task RunAsync_Update_BlocksFieldRemovalWithoutForce()
    {
        using var fake = CreateMetadataFake();
        var file = WriteRdl(ListRdl); // Account dataset carries the 'name' field
        var fetch = "<fetch><entity name=\"account\"><attribute name=\"telephone1\" /></entity></fetch>";
        var task = NewTask(file, new ReportDatasetRequest { Action = "update", Name = "Account", FetchXml = fetch }, fake);
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "update blocked");
    }

    [TestMethod]
    public async Task RunAsync_Delete_BlocksReferencesWithoutForce()
    {
        var file = WriteRdl($@"<?xml version=""1.0"" encoding=""utf-8""?>
<Report xmlns=""{ReportNamespace}"">
  <DataSources>
    <DataSource Name=""CRM""><ConnectionProperties><DataProvider>MSCRM</DataProvider><ConnectString>Password=*</ConnectString></ConnectionProperties></DataSource>
  </DataSources>
  <DataSets>
    <DataSet Name=""Account"">
      <Query><DataSourceName>CRM</DataSourceName><CommandText>&lt;fetch&gt;&lt;entity name=""account""&gt;&lt;attribute name=""name"" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText></Query>
    </DataSet>
  </DataSets>
  <Body><ReportItems><Subreport Name=""Sub1""><DataSetName>Account</DataSetName></Subreport></ReportItems></Body>
  <CustomProperties />
</Report>");
        var task = NewTask(file, new ReportDatasetRequest { Action = "delete", Name = "Account" });
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => task.RunAsync());
        StringAssert.Contains(ex.Message, "delete blocked");
    }

    [TestMethod]
    public async Task RunAsync_DeleteWithForce_RemovesReferencedDataset()
    {
        var file = WriteRdl(ListRdl);
        await NewTask(file, new ReportDatasetRequest { Action = "delete", Name = "Contact", Force = true }).RunAsync();
        Assert.IsFalse((await File.ReadAllTextAsync(file)).Contains("Name=\"Contact\""),
            "the deleted dataset left the report.");
    }

    // ── FetchXML source resolution ─────────────────────────────────────

    [TestMethod]
    public void ResolveFetchXmlSourceAsync_EnforcesSingleSource()
    {
        var file = WriteRdl(MinimalRdl);
        var task = NewTask(file, new ReportDatasetRequest { FetchXml = "<fetch/>", FetchXmlFile = "f.xml" });
        var method = typeof(TaskReportDataset).GetMethod("ResolveFetchXmlSourceAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
                () => ((Task<string>)method.Invoke(task, new object?[] { "add" })!).GetAwaiter().GetResult());
        StringAssert.Contains(ex.Message, "use only one");
    }

    [TestMethod]
    public async Task ResolveFetchXmlSourceAsync_FileBranches()
    {
        var file = WriteRdl(MinimalRdl);
        var method = typeof(TaskReportDataset).GetMethod("ResolveFetchXmlSourceAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var missing = Assert.ThrowsExactly<DevKitValidationException>(
                () => ((Task<string>)method.Invoke(NewTask(file, new ReportDatasetRequest { FetchXmlFile = "ghost.xml" }), new object?[] { "update" })!).GetAwaiter().GetResult());
        StringAssert.Contains(missing.Message, "File does not exist");

        var fetchFile = Path.Combine(_root, "fetch.xml");
        await File.WriteAllTextAsync(fetchFile, "  <fetch><entity name=\"account\" /></fetch>  ");
        var content = await (Task<string>)method.Invoke(
            NewTask(file, new ReportDatasetRequest { FetchXmlFile = fetchFile }), new object?[] { "update" })!;
        Assert.AreEqual("<fetch><entity name=\"account\" /></fetch>", content, "the file content is trimmed.");

        var none = await (Task<string>)method.Invoke(
            NewTask(file, new ReportDatasetRequest()), new object?[] { "validate" })!;
        Assert.IsNull(none, "validate without sources falls back to the caller.");

        var addRequired = Assert.ThrowsExactly<DevKitValidationException>(
                () => ((Task<string>)method.Invoke(NewTask(file, new ReportDatasetRequest()), new object?[] { "add" })!).GetAwaiter().GetResult());
        StringAssert.Contains(addRequired.Message, "--fetchxml or --fetchxml-file: required for action 'add'");
    }

    // ── --prefilter parsing ────────────────────────────────────────────

    private static List<ReportFetchEntityInfo> Entities() => new()
    {
        new ReportFetchEntityInfo { Path = "account", LogicalName = "account", IsRoot = true },
        new ReportFetchEntityInfo { Path = "account.contact.c", LogicalName = "contact", Alias = "c", IsRoot = false }
    };

    [TestMethod]
    public void ParsePrefilterSelections_ResolvesPathAliasAndLogicalName()
    {
        var file = WriteRdl(MinimalRdl);
        var task = NewTask(file, new ReportDatasetRequest { PreFilter = "account=on, c = off" });
        var method = typeof(TaskReportDataset).GetMethod("ParsePrefilterSelections", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var selections = (IDictionary<string, bool>)method.Invoke(task, new object?[] { Entities() })!;
        Assert.AreEqual(2, selections.Count);
        Assert.IsTrue(selections["account"]);
        Assert.IsFalse(selections["account.contact.c"], "the alias resolved to the linked-entity path.");
    }

    [TestMethod]
    public void ParsePrefilterSelections_ReturnsNullWithoutPreFilter()
    {
        var file = WriteRdl(MinimalRdl);
        var task = NewTask(file, new ReportDatasetRequest());
        var method = typeof(TaskReportDataset).GetMethod("ParsePrefilterSelections", BindingFlags.NonPublic | BindingFlags.Instance)!;
        Assert.IsNull(method.Invoke(task, new object?[] { Entities() }));
    }

    [TestMethod]
    public void ParsePrefilterSelections_RejectsBadPairsAndValues()
    {
        var file = WriteRdl(MinimalRdl);
        var method = typeof(TaskReportDataset).GetMethod("ParsePrefilterSelections", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var noSeparator = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(NewTask(file, new ReportDatasetRequest { PreFilter = "account" }), new object?[] { Entities() }));
        StringAssert.Contains(noSeparator.InnerException!.Message, "invalid — use key=on|off pairs");

        var emptyValue = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(NewTask(file, new ReportDatasetRequest { PreFilter = "account=" }), new object?[] { Entities() }));
        StringAssert.Contains(emptyValue.InnerException!.Message, "invalid — use key=on|off pairs");

        var badValue = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(NewTask(file, new ReportDatasetRequest { PreFilter = "account=maybe" }), new object?[] { Entities() }));
        StringAssert.Contains(badValue.InnerException!.Message, "value must be 'on' or 'off'");
    }

    [TestMethod]
    public void ResolvePrefilterPath_AmbiguousAndUnknownKeysThrow()
    {
        var file = WriteRdl(MinimalRdl);
        var method = typeof(TaskReportDataset).GetMethod("ResolvePrefilterPath", BindingFlags.NonPublic | BindingFlags.Static)!;
        var twoAccounts = new List<ReportFetchEntityInfo>
        {
            new() { Path = "root", LogicalName = "account", IsRoot = true },
            new() { Path = "root.contact", LogicalName = "account", Alias = "c", IsRoot = false }
        };

        var ambiguous = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(null, new object?[] { "account", twoAccounts }));
        StringAssert.Contains(ambiguous.InnerException!.Message, "ambiguous — matches 2 entities");

        var unknown = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(null, new object?[] { "ghost", Entities() }));
        StringAssert.Contains(unknown.InnerException!.Message, "unknown entity. Valid paths: account, account.contact.c");

        Assert.AreEqual("account.contact.c", method.Invoke(null, new object?[] { "c", Entities() }),
            "the alias key resolves to the linked-entity path.");
    }

    [TestMethod]
    public void FailValidation_ListsErrorsThenThrows()
    {
        var method = typeof(TaskReportDataset).GetMethod("FailValidation", BindingFlags.NonPublic | BindingFlags.Static)!;
        var validation = new ReportDatasetValidationResult();
        validation.Errors.Add("first error");
        validation.Errors.Add("second error");
        var ex = Assert.ThrowsExactly<TargetInvocationException>(
            () => method.Invoke(null, new object?[] { validation }));
        StringAssert.Contains(ex.InnerException!.Message, "validation failed with 2 error(s)");
    }
}
