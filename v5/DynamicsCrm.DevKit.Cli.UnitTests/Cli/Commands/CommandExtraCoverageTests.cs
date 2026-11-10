using DynamicsCrm.DevKit.Cli.Commands;
using Microsoft.PowerPlatform.Dataverse.Client;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// Command-layer gaps that run entirely offline: NewItemCommand's AD
/// user-name composition and its no-connection error, NewProjectCommand's
/// list short-circuit, WebResourceCommand's type/option validation and the
/// profile-less fast-deploy resolution errors, ReportCommand's strict
/// option-set rules and offline dispatch prefixes, and McpCommand's
/// impersonation helpers against a FakeSdkClient.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class CommandExtraCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_CommandExtras", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    // ── NewItemCommand ─────────────────────────────────────────────────

    private sealed class NewItemProbe : NewItemCommand
    {
        public bool ProfileRequired(NewItemCommandArgs s) => IsProfileRequired(s);
        public bool JsonRequired(NewItemCommandArgs s) => IsJsonRequired(s);
        public Task<bool> Validate(NewItemCommandArgs s) => IsValidAsync(s);
    }

    [TestMethod]
    public void NewItem_GetConnectionUserName_ComposesDomainForAd()
    {
        var method = typeof(NewItemCommand).GetMethod("GetConnectionUserName", BindingFlags.NonPublic | BindingFlags.Static)!;
        var ad = new NewItemCommandArgs { AuthType = "AD", Domain = "CONTOSO", Username = "alice" };
        Assert.AreEqual("CONTOSO\\alice", method.Invoke(null, new object?[] { ad }));
        ad.Username = "CONTOSO\\alice";
        Assert.AreEqual("CONTOSO\\alice", method.Invoke(null, new object?[] { ad }),
            "an already-qualified user name passes through.");
        var modern = new NewItemCommandArgs { AuthType = "ClientSecret", Domain = "CONTOSO", Username = "alice" };
        Assert.AreEqual("alice", method.Invoke(null, new object?[] { modern }), "non-AD keeps the bare user name.");
    }

    [TestMethod]
    public void NewItem_ProfileNameAndJsonAreNeverRequired()
    {
        var probe = new NewItemProbe();
        Assert.IsFalse(probe.ProfileRequired(new NewItemCommandArgs()));
        Assert.IsFalse(probe.JsonRequired(new NewItemCommandArgs()));
    }

    [TestMethod]
    public async Task NewItem_IsValid_ListMode_ReturnsTrueWithoutConnecting()
    {
        var probe = new NewItemProbe();
        var settings = new NewItemCommandArgs { List = "list" };
        Assert.IsTrue(await probe.Validate(settings));
        Assert.IsNull(settings.ServiceClient, "the catalog print never connects.");
    }

    [TestMethod]
    public async Task NewItem_ConnectAsync_WithoutAnyConnectionArgument_Throws()
    {
        var command = new NewItemCommand();
        var method = typeof(NewItemCommand).GetMethod("ConnectAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var task = (Task<ServiceClient>)method.Invoke(command, new object?[] { new NewItemCommandArgs() })!;
        var ex = await Assert.ThrowsExactlyAsync<DevKitConnectionException>(() => task);
        StringAssert.Contains(ex.Message, "--conn or --auth: required");
    }

    // ── NewProjectCommand ──────────────────────────────────────────────

    private sealed class NewProjectProbe : NewProjectCommand
    {
        public bool ProfileRequired(NewProjectCommandArgs s) => IsProfileRequired(s);
        public bool JsonRequired(NewProjectCommandArgs s) => IsJsonRequired(s);
        public Task<bool> Validate(NewProjectCommandArgs s) => IsValidAsync(s);
    }

    [TestMethod]
    public async Task NewProject_IsValid_ListShortCircuitAndArgsTable()
    {
        var probe = new NewProjectProbe();
        Assert.IsTrue(await probe.Validate(new NewProjectCommandArgs { List = "list" }));
        Assert.IsTrue(await probe.Validate(new NewProjectCommandArgs { Type = "Shared", Name = "N", Solution = "S" }));
        Assert.IsFalse(probe.ProfileRequired(new NewProjectCommandArgs()));
        Assert.IsFalse(probe.JsonRequired(new NewProjectCommandArgs()));
    }

    // ── WebResourceCommand ─────────────────────────────────────────────

    private sealed class WebResourceProbe : WebResourceCommand
    {
        public bool ProfileRequired(WebResourceCommandArgs s) => IsProfileRequired(s);
        public bool JsonRequired(WebResourceCommandArgs s) => IsJsonRequired(s);
        public new List<string[]> BuildArgRows(WebResourceCommandArgs s) => base.BuildArgRows(s);
    }

    [TestMethod]
    public void WebResource_ValidateTypeAndOptions_DownloadRejectsDeployOptions()
    {
        var command = new WebResourceCommand();
        var download = new WebResourceCommandArgs { Type = "download" };

        var file = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs { Type = "download", File = "a.js" }));
        StringAssert.Contains(file.Message, "--file: not valid for --type download");

        var webResource = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs { Type = "download", WebResource = "pub_/a.js" }));
        StringAssert.Contains(webResource.Message, "--webresource: not valid for --type download");

        var id = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs { Type = "download", WebResourceId = Guid.NewGuid().ToString() }));
        StringAssert.Contains(id.Message, "--webresourceid: not valid for --type download");

        command.ValidateTypeAndOptions(download); // clean download passes
    }

    [TestMethod]
    public void WebResource_ValidateTypeAndOptions_UploadRulesForWebResourceId()
    {
        var command = new WebResourceCommand();

        var badGuid = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs { WebResourceId = "not-a-guid" }));
        StringAssert.Contains(badGuid.Message, "not a valid GUID");

        var missingFile = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs
            {
                WebResourceId = "44444444-4444-4444-4444-444444444444"
            }));
        StringAssert.Contains(missingFile.Message, "--webresourceid: requires --file");

        var both = Assert.ThrowsExactly<DevKitValidationException>(
            () => command.ValidateTypeAndOptions(new WebResourceCommandArgs
            {
                WebResourceId = "44444444-4444-4444-4444-444444444444",
                File = "a.js",
                WebResource = "pub_/a.js"
            }));
        StringAssert.Contains(both.Message, "use only one");

        command.ValidateTypeAndOptions(new WebResourceCommandArgs
        {
            WebResourceId = "44444444-4444-4444-4444-444444444444",
            File = "a.js"
        });
    }

    [TestMethod]
    public void WebResource_ProfileAndJsonOptionalOnlyForUploadWithFile()
    {
        var probe = new WebResourceProbe();
        Assert.IsFalse(probe.ProfileRequired(new WebResourceCommandArgs { File = "a.js" }));
        Assert.IsFalse(probe.JsonRequired(new WebResourceCommandArgs { File = "a.js" }));
        Assert.IsTrue(probe.ProfileRequired(new WebResourceCommandArgs()));
        Assert.IsTrue(probe.JsonRequired(new WebResourceCommandArgs()));
        Assert.IsTrue(probe.ProfileRequired(new WebResourceCommandArgs { Type = "download" }));
    }

    [TestMethod]
    public async Task WebResource_RunWebResourceAsync_UploadWithoutMapping_ReportsMissingWebResource()
    {
        // The walk-up from the test bin directory finds no
        // DynamicsCrm.DevKit.Config.json, so the profile-less upload fails
        // its --webresource resolution without touching the process cwd
        // (a cwd change would lock the temp dir against TestCleanup).
        var command = new WebResourceCommand();
        var settings = new WebResourceCommandArgs
        {
            Type = "upload",
            File = Path.Combine(_root, "a.js"),
            Profile = "DEBUG"
        };
        await command.RunWebResourceAsync(settings); // errors and returns — no deploy
    }

    [TestMethod]
    public async Task WebResource_RunWebResourceAsync_DownloadWithoutSection_ReportsMissingSection()
    {
        var jsonFile = Path.Combine(_root, "cli.json");
        await File.WriteAllTextAsync(jsonFile, "{}");
        var command = new WebResourceCommand();
        var settings = new WebResourceCommandArgs { Type = "download", Json = jsonFile, Profile = "DOWNLOAD" };
        await command.RunWebResourceAsync(settings);
    }

    [TestMethod]
    public void WebResource_BuildArgRows_ListsProvidedOptions()
    {
        var probe = new WebResourceProbe();
        var rows = probe.BuildArgRows(new WebResourceCommandArgs
        {
            Type = "UPLOAD",
            File = "a.js",
            WebResource = "pub_/a.js",
            WebResourceId = "44444444-4444-4444-4444-444444444444"
        });
        Assert.HasCount(4, rows);
        Assert.AreEqual("upload", rows[0][1], "--type is normalized to lower case.");
    }

    // ── ReportCommand ──────────────────────────────────────────────────

    private sealed class ReportProbe : ReportCommand
    {
        public new List<string[]> BuildArgRows(ReportCommandArgs s) => base.BuildArgRows(s);
    }

    [TestMethod]
    public void Report_NormalizeType_ValidatesStrictly()
    {
        Assert.IsNull(ReportCommand.NormalizeType("", validate: false));
        Assert.IsNull(ReportCommand.NormalizeType("bogus", validate: false));
        var missing = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.NormalizeType("", validate: true));
        StringAssert.Contains(missing.Message, "--type: required");
        var unknown = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.NormalizeType("bogus", validate: true));
        StringAssert.Contains(unknown.Message, "unknown — valid: dataset, upload, download");
        Assert.AreEqual("dataset", ReportCommand.NormalizeType(" Dataset ", validate: true));
    }

    [TestMethod]
    public void Report_ValidateOptionsForType_EnforcesTheOptionSets()
    {
        ReportCommand.ValidateOptionsForType(new ReportCommandArgs
        {
            Type = "dataset", File = "a.rdl", Action = "list", PreFilter = "account=on", Force = true
        }, "dataset");

        var upload = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateOptionsForType(
            new ReportCommandArgs { Type = "upload", Action = "list" }, "upload"));
        StringAssert.Contains(upload.Message, "--action: not valid for --type upload");

        var language = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateOptionsForType(
            new ReportCommandArgs { Type = "download", Language = "1033" }, "download"));
        StringAssert.Contains(language.Message, "--language: not valid for --type download");

        ReportCommand.ValidateOptionsForType(new ReportCommandArgs { ReportId = "x" }, "unknown-type");
    }

    [TestMethod]
    public void Report_ValidateReportIdRules_CoversEveryBranch()
    {
        ReportCommand.ValidateReportIdRules(new ReportCommandArgs(), "upload");

        var download = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateReportIdRules(
            new ReportCommandArgs { ReportId = Guid.NewGuid().ToString() }, "download"));
        StringAssert.Contains(download.Message, "--reportid: not valid for --type download");

        var badGuid = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateReportIdRules(
            new ReportCommandArgs { ReportId = "nope" }, "upload"));
        StringAssert.Contains(badGuid.Message, "not a valid GUID");

        var missingFile = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateReportIdRules(
            new ReportCommandArgs { ReportId = Guid.NewGuid().ToString() }, "upload"));
        StringAssert.Contains(missingFile.Message, "--reportid: requires --file");

        var both = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.ValidateReportIdRules(
            new ReportCommandArgs
            {
                ReportId = Guid.NewGuid().ToString(),
                File = "a.rdl",
                Report = "Revenue"
            }, "upload"));
        StringAssert.Contains(both.Message, "use only one");

        ReportCommand.ValidateReportIdRules(
            new ReportCommandArgs { ReportId = Guid.NewGuid().ToString(), File = "a.rdl" }, "upload");
    }

    [TestMethod]
    public void Report_BuildArgRows_ListsEveryProvidedOption()
    {
        var probe = new ReportProbe();
        var rows = probe.BuildArgRows(new ReportCommandArgs
        {
            Type = "Dataset",
            File = "a.rdl",
            Action = "add",
            Name = "Ds",
            NewName = "Ds2",
            FetchXml = "<fetch>",
            FetchXmlFile = "f.xml",
            PreFilter = "account=on",
            Force = true,
            Report = "Revenue",
            ReportId = Guid.NewGuid().ToString(),
            Language = "1033"
        });
        Assert.HasCount(12, rows);
        Assert.AreEqual("dataset", rows[0][1]);
        StringAssert.Contains(rows[5][1], "(inline, 7 chars)");
    }

    [TestMethod]
    public async Task Report_RunReportAsync_DatasetList_RunsOffline()
    {
        // The ReportDatasetService ctor rejects a dataset-less RDL, so the
        // fixture carries one valid FetchXML dataset for the list action.
        var file = Path.Combine(_root, "Report1.rdl");
        await File.WriteAllTextAsync(file,
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n" +
            "<Report xmlns=\"http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition\">" +
            "<DataSources><DataSource Name=\"CRM\"><ConnectionProperties><DataProvider>MSCRM</DataProvider>" +
            "<ConnectString>Password=*</ConnectString></ConnectionProperties></DataSource></DataSources>" +
            "<DataSets><DataSet Name=\"Account\"><Query><DataSourceName>CRM</DataSourceName>" +
            "<CommandText>&lt;fetch&gt;&lt;entity name=\"account\"&gt;&lt;attribute name=\"name\" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>" +
            "</Query><Fields><Field Name=\"name\"><DataField>name</DataField></Field></Fields></DataSet></DataSets>" +
            "<Body><ReportItems /></Body><CustomProperties /></Report>");
        var command = new ReportCommand();
        await command.RunReportAsync(new ReportCommandArgs { Type = "dataset", File = file, Action = "list" });
    }

    [TestMethod]
    public async Task Report_RunReportAsync_UploadWithoutProfileOrFile_ReportsMissingProfile()
    {
        var command = new ReportCommand();
        await command.RunReportAsync(new ReportCommandArgs { Type = "upload", Profile = "DEBUG" });
    }

    [TestMethod]
    public async Task Report_RunReportAsync_DownloadWithoutProfile_ReportsMissingProfile()
    {
        var jsonFile = Path.Combine(_root, "cli.json");
        await File.WriteAllTextAsync(jsonFile, "{\"downloadreports\": []}");
        var command = new ReportCommand();
        await command.RunReportAsync(new ReportCommandArgs { Type = "download", Json = jsonFile, Profile = "DEBUG" });
    }

    // ── McpCommand impersonation helpers (FakeSdkClient) ───────────────

    [TestMethod]
    public void McpCommand_ResolveAsUser_ResolvesGuidAndEmailTargets()
    {
        using var fake = CreateSystemUserFake();
        var userId = _aliceUserId; // the guid the fake knows

        var resolved = McpCommand.ResolveAsUser(fake.Client, userId.ToString(), out var display);
        Assert.AreEqual(userId, resolved);
        Assert.AreEqual("Alice Wonder (alice@contoso.test)", display);

        var byEmail = McpCommand.ResolveAsUser(fake.Client, "alice@contoso.test", out var emailDisplay);
        Assert.AreEqual(userId, byEmail);
        Assert.AreEqual("Alice Wonder (alice@contoso.test)", emailDisplay);
    }

    [TestMethod]
    public void McpCommand_ResolveAsUser_HandlesMissingDisabledAndAmbiguousTargets()
    {
        using var fake = CreateSystemUserFake();

        Assert.IsNull(McpCommand.ResolveAsUser(fake.Client, Guid.NewGuid().ToString(), out _),
            "an unknown guid target fails validation.");
        Assert.IsNull(McpCommand.ResolveAsUser(fake.Client, "nobody@contoso.test", out _),
            "an unknown email fails email resolution.");
        Assert.IsNull(McpCommand.ResolveAsUser(fake.Client, "ambiguous@contoso.test", out _),
            "two users with one email cannot resolve.");
        Assert.IsNull(McpCommand.ResolveAsUser(fake.Client, _disabledUserId.ToString(), out _),
            "a disabled user is refused.");

        var resolved = McpCommand.ResolveAsUser(fake.Client, _disabledUserId.ToString(), out var disabledDisplay);
        Assert.IsNull(resolved);
        Assert.AreEqual("Bob Locked (bob@contoso.test)", disabledDisplay,
            "the display is composed before the disabled check.");
    }

    [TestMethod]
    public void McpCommand_ValidateTargetUser_ReadsTheUserRow()
    {
        using var fake = CreateSystemUserFake();
        var validate = typeof(McpCommand).GetMethod("ValidateTargetUser", BindingFlags.NonPublic | BindingFlags.Static)!;

        var args = new object?[] { fake.Client, _aliceUserId, null, null, null };
        Assert.IsTrue((bool)validate.Invoke(null, args)!);
        Assert.AreEqual("Alice Wonder", args[2]);
        Assert.AreEqual("alice@contoso.test", args[3]);
        Assert.AreEqual(false, args[4]);

        var missing = new object?[] { fake.Client, Guid.NewGuid(), null, null, null };
        Assert.IsFalse((bool)validate.Invoke(null, missing)!);
        Assert.IsNull(missing[2]);
    }

    [TestMethod]
    public void McpCommand_ResolveUserByEmail_ReturnsNullOnEmptyAndMultiple()
    {
        using var fake = CreateSystemUserFake();
        var resolve = typeof(McpCommand).GetMethod("ResolveUserByEmail", BindingFlags.NonPublic | BindingFlags.Static)!;

        var none = new object?[] { fake.Client, "ghost@contoso.test", null };
        Assert.IsNull(resolve.Invoke(null, none));
        Assert.IsNull(none[2]);

        var many = new object?[] { fake.Client, "ambiguous@contoso.test", null };
        Assert.IsNull(resolve.Invoke(null, many));

        var one = new object?[] { fake.Client, "alice@contoso.test", null };
        Assert.AreEqual(_aliceUserId, resolve.Invoke(null, one));
        Assert.AreEqual("Alice Wonder", one[2]);
    }

    private static Guid _aliceUserId = Guid.NewGuid();
    private static Guid _disabledUserId = Guid.NewGuid();

    /// <summary>
    /// A FakeSdkClient answering the systemuser lookups of the impersonation
    /// helpers: one active user keyed by email/guid, one disabled user, and
    /// an email shared by two rows.
    /// </summary>
    private FakeSdkClient CreateSystemUserFake()
    {
        var alice = new Entity("systemuser", _aliceUserId)
        {
            ["fullname"] = "Alice Wonder",
            ["internalemailaddress"] = "alice@contoso.test",
            ["isdisabled"] = false
        };
        var bob = new Entity("systemuser", _disabledUserId)
        {
            ["fullname"] = "Bob Locked",
            ["internalemailaddress"] = "bob@contoso.test",
            ["isdisabled"] = true
        };
        var clone1 = new Entity("systemuser", Guid.NewGuid()) { ["fullname"] = "Clone A", ["internalemailaddress"] = "ambiguous@contoso.test" };
        var clone2 = new Entity("systemuser", Guid.NewGuid()) { ["fullname"] = "Clone B", ["internalemailaddress"] = "ambiguous@contoso.test" };

        var fake = new FakeSdkClient();
        fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression q && q.EntityName == "systemuser")
            {
                var attribute = q.Criteria.Conditions.Count > 0 ? q.Criteria.Conditions[0].AttributeName : string.Empty;
                if (attribute == "internalemailaddress")
                {
                    var email = (string)q.Criteria.Conditions[0].Values[0]!;
                    var matches = new List<Entity> { alice, bob, clone1, clone2 }
                        .Where(u => string.Equals((string)u["internalemailaddress"], email, StringComparison.OrdinalIgnoreCase))
                        .Select(u => new Entity("systemuser", u.Id) { ["fullname"] = u["fullname"] })
                        .ToList();
                    return new EntityCollection(matches);
                }
                if (attribute == "systemuserid")
                {
                    var id = (Guid)q.Criteria.Conditions[0].Values[0]!;
                    if (id == _aliceUserId) return new EntityCollection(new[] { alice });
                    if (id == _disabledUserId) return new EntityCollection(new[] { bob });
                    return new EntityCollection();
                }
            }
            return new EntityCollection();
        };
        return fake;
    }
}
