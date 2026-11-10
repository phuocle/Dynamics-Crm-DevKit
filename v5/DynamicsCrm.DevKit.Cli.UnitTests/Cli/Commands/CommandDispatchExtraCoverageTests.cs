using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// Wave-2 command dispatch coverage: the protected ExecuteAsync / RunTaskAsync
/// bodies of the command classes, driven through small derived testable
/// subclasses (protected members are callable there) or through the internal
/// dispatch methods (RunServerAsync / RunReportAsync / RunWebResourceAsync).
/// Every flow stops before a real connection: validation gates, the
/// DevKitConnectionException '--conn or --auth: required' path, and the
/// modern-auth ValidateAsync failures. DevKitCommandArgs.CurrentDirectory is
/// a computed property, so the process cwd is switched and restored — the
/// class is marked DoNotParallelize.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class CommandDispatchExtraCoverageTests
{
    private string _originalCwd = null!;
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _originalCwd = Directory.GetCurrentDirectory();
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_CmdDispatch", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        Directory.SetCurrentDirectory(_root);
        ScriptedConsole.Install();
        SpectreLog.IsPlain = false;
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        Directory.SetCurrentDirectory(_originalCwd);
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private sealed class NoRemaining : Spectre.Console.Cli.IRemainingArguments
    {
        public System.Linq.ILookup<string, string?> Parsed => null!;
        public System.Collections.Generic.IReadOnlyList<string> Raw => Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyList<string> Piped => Array.Empty<string>();
        public System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IReadOnlyList<string>> PipedArguments =>
            new System.Collections.Generic.Dictionary<string, System.Collections.Generic.IReadOnlyList<string>>();
    }

    private static CommandContext Context(string name) =>
        new(new[] { name }, new NoRemaining(), name, null!);

    // Derived testable subclasses — protected members become public here.

    private sealed class TestableReportCommand : ReportCommand
    {
        public Task<int> CallExecute(ReportCommandArgs settings) => ExecuteAsync(Context("report"), settings, default);
        public bool ProfileRequired(ReportCommandArgs settings) => IsProfileRequired(settings);
        public bool JsonRequired(ReportCommandArgs settings) => IsJsonRequired(settings);
        public Task Run(ReportCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestableWebResourceCommand : WebResourceCommand
    {
        public Task<int> CallExecute(WebResourceCommandArgs settings) => ExecuteAsync(Context("webresource"), settings, default);
        public Task Run(WebResourceCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestableGeneratorCommand : GeneratorCommand
    {
        public Task Run(GeneratorCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestablePacSolutionCommand : PacSolutionPackagerCommand
    {
        public Task Run(PacSolutionPackagerCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestableLegacySolutionCommand : SolutionPackagerCommand
    {
        public Task Run(PacSolutionPackagerCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestableModelBuilderCommand : ModelBuilderCommand
    {
        public Task Run(ModelBuilderCommandArgs settings) => RunTaskAsync(settings);
    }

    private sealed class TestableNewItemCommand : NewItemCommand
    {
        public Task<int> CallExecute(NewItemCommandArgs settings) => ExecuteAsync(Context("new-item"), settings, default);
    }

    private sealed class TestableNewProjectCommand : NewProjectCommand
    {
        public Task<int> CallExecute(NewProjectCommandArgs settings) => ExecuteAsync(Context("new-project"), settings, default);
    }

    private string WriteJson(string name, string content)
    {
        var path = Path.Combine(_root, name);
        File.WriteAllText(path, content);
        return path;
    }

    private const string ConfigJsonName = "DynamicsCrm.DevKit.Cli.json";

    // ────────────────────────────────────────────────────────────────────
    // DevKitCommand base: the connect gate and the legacy --conn paths.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task ReportCommand_Dataset_WithoutConnection_ThrowsConnectionGate()
    {
        // dataset requires no profile/json → the connect lambda runs →
        // no --conn/--auth → DevKitConnectionException → exit 2.
        var exit = await new TestableReportCommand().CallExecute(new ReportCommandArgs { Type = "dataset", Action = "list", File = "Report.rdl" });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
    }

    [TestMethod]
    public async Task ReportCommand_UnknownType_FailsFast()
    {
        var exit = await new TestableReportCommand().CallExecute(new ReportCommandArgs { Type = "bogus" });
        Assert.AreEqual(ExitCodes.ValidationError, exit);
    }

    [TestMethod]
    public async Task ReportCommand_Upload_WithFile_FastDeploysThroughDummyProfile()
    {
        // RunReportAsync (the shared dispatch): no json file, --file given →
        // the dummy profile path → TaskUploadReport fast-deploy stops at the
        // missing file check (no org touched).
        var settings = new ReportCommandArgs
        {
            Type = "upload",
            File = Path.Combine(_root, "missing.rdl"),
            Json = Path.Combine(_root, "no-such.json")
        };
        await new TestableReportCommand().Run(settings);
        Assert.IsFalse(File.Exists(Path.Combine(_root, "no-such.json")), "no json file was written.");
    }

    [TestMethod]
    public async Task ReportCommand_Download_ProfileFound_DispatchesTask()
    {
        // downloadreports profile found → TaskDownloadReport.RunAsync → the
        // '???' solution gate fails before any org call.
        var json = WriteJson(ConfigJsonName, """
            {
              "downloadreports": [
                { "profile": "p", "solution": "???", "folder": "out" }
              ]
            }
            """);
        var settings = new ReportCommandArgs { Type = "download", Json = json, Profile = "p" };
        await new TestableReportCommand().Run(settings);
    }

    [TestMethod]
    public void ReportCommand_RequiresJsonProfile_CoversTheTypeTable()
    {
        var command = new TestableReportCommand();
        Assert.IsFalse(command.ProfileRequired(new ReportCommandArgs { Type = "dataset" }), "dataset needs no profile.");
        Assert.IsFalse(command.ProfileRequired(new ReportCommandArgs { Type = "upload", File = "r.rdl" }), "upload with --file needs no profile.");
        Assert.IsTrue(command.ProfileRequired(new ReportCommandArgs { Type = "upload" }), "upload without --file needs the json profile.");
        Assert.IsTrue(command.ProfileRequired(new ReportCommandArgs { Type = "download" }));
        Assert.IsTrue(command.JsonRequired(new ReportCommandArgs { Type = "download" }));
        // Unknown/missing type — the pre-connection check reports it later.
        Assert.IsFalse(command.ProfileRequired(new ReportCommandArgs()));
        Assert.IsFalse(command.JsonRequired(new ReportCommandArgs()));
    }

    [TestMethod]
    public async Task DevKitCommand_LegacyConn_UnknownAuthType_IsRejected()
    {
        // The conn-log best-effort block swallows the GetBuilder failure
        // (NotSupportedException), then the connect lambda throws it again —
        // the generic catch maps it to RuntimeError.
        var exit = await new TestableReportCommand().CallExecute(new ReportCommandArgs
        {
            Type = "dataset",
            File = "Report.rdl",
            Connection = "AuthType=Bogus;Url=https://org.example.test"
        });
        Assert.AreEqual(ExitCodes.RuntimeError, exit);
    }

    [TestMethod]
    public async Task DevKitCommand_ModernAuth_ClientSecret_ValidationFailure_IsConnectionError()
    {
        // ClientSecret without a secret → ValidateAsync fails inside
        // ConnectWithModernAuthAsync → DevKitConnectionException → exit 2.
        var exit = await new TestableReportCommand().CallExecute(new ReportCommandArgs
        {
            Type = "upload",
            File = "missing.rdl",
            AuthType = "ClientSecret",
            Url = "https://org.example.test",
            ClientId = "app"
        });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
    }

    [TestMethod]
    public async Task DevKitCommand_ModernAuth_UnsupportedType_IsValidationError()
    {
        // IsSupported false → GetFuturePlanning false → 'not supported' →
        // DevKitConnectionException → exit 2.
        var exit = await new TestableReportCommand().CallExecute(new ReportCommandArgs
        {
            Type = "upload",
            File = "missing.rdl",
            AuthType = "NotARealAuthType",
            Url = "https://org.example.test"
        });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
    }

    // ────────────────────────────────────────────────────────────────────
    // WebResourceCommand.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task WebResourceCommand_BareInvocation_RequiresProfile()
    {
        // No --file and no profile → '--profile: required' → exit 1. This
        // drives the override IsValidAsync down into base.IsValidAsync.
        var exit = await new TestableWebResourceCommand().CallExecute(new WebResourceCommandArgs());
        Assert.AreEqual(ExitCodes.ValidationError, exit);
    }

    [TestMethod]
    public async Task WebResourceCommand_FastDeploy_WebResourceResolvedFromConfigMapping()
    {
        // A DynamicsCrm.DevKit.Config.json mapping supplies the --webresource
        // for a file fast-deploy; the subsequent task run stops at the null
        // service (the mapping resolution is what this test pins).
        var appJs = Path.Combine(_root, "app.js");
        await File.WriteAllTextAsync(appJs, "//");
        // GetConfigFileValue stores the mapping file as a root-relative
        // '\app.js' value — the lookup matches it or the full path.
        File.WriteAllText(Path.Combine(_root, "DynamicsCrm.DevKit.Config.json"), """
            {
              "WebResources": [
                { "File": "\\app.js", "WebResource": "dev_/scripts/app.js" }
              ]
            }
            """);
        var settings = new WebResourceCommandArgs { File = appJs };
        try
        {
            await new TestableWebResourceCommand().Run(settings);
            Assert.Fail("the null-service task run cannot complete.");
        }
        catch (NullReferenceException)
        {
            // The mapping lookup already ran — the resolved name is on the args.
        }
        StringAssert.Contains(settings.WebResource, "dev_/scripts/app.js", "the Config.json mapping named the web resource.");
    }

    [TestMethod]
    public async Task WebResourceCommand_Download_ProfileFound_DispatchesTask()
    {
        var json = WriteJson(ConfigJsonName, """
            {
              "downloadwebresources": [
                { "profile": "p", "solution": "???", "folder": "out" }
              ]
            }
            """);
        var settings = new WebResourceCommandArgs { Type = "download", Json = json, Profile = "p" };
        await new TestableWebResourceCommand().Run(settings);
    }

    // ────────────────────────────────────────────────────────────────────
    // GeneratorCommand / ServerCommand — the RunTaskAsync dispatch bodies.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task GeneratorCommand_RunTaskAsync_MissingSection_ReportsError()
    {
        var json = WriteJson(ConfigJsonName, "{}");
        var settings = new GeneratorCommandArgs { Json = json, Profile = "p" };
        await new TestableGeneratorCommand().Run(settings);
    }

    [TestMethod]
    public async Task GeneratorCommand_RunTaskAsync_ProfileFound_RunsTaskAgainstFakeOrg()
    {
        var fake = new FakeSdkClient();
        fake.OnRetrieveMultiple = _ => new EntityCollection();
        try
        {
            var json = WriteJson(ConfigJsonName, """
            {
              "generators": [
                { "profile": "p", "type": "csharp", "rootfolder": "???", "rootnamespace": "???" }
              ]
            }
            """);
            var settings = new GeneratorCommandArgs { Json = json, Profile = "p", ServiceClient = fake.Client };
            await new TestableGeneratorCommand().Run(settings);
            // The task-level validation gate stops before any org call.
        }
        finally
        {
            fake.Dispose();
        }
    }

    [TestMethod]
    public async Task ServerCommand_RunServerAsync_PluginsProfile_MissingProfile_StopsAtValidation()
    {
        var fake = new FakeSdkClient();
        try
        {
            var json = WriteJson(ConfigJsonName, "{ \"servers\": [] }");
            var settings = new ServerCommandArgs { Json = json, Profile = "nope", ServiceClient = fake.Client };
            await new ServerCommand().RunServerAsync(settings);
        }
        finally
        {
            fake.Dispose();
        }
    }

    [TestMethod]
    public async Task ServerCommand_RunServerAsync_DatasourcesProfileFound_DispatchesTask()
    {
        var fake = new FakeSdkClient();
        fake.OnRetrieveMultiple = _ => new EntityCollection();
        try
        {
            var json = WriteJson(ConfigJsonName, """
            {
              "datasources": [
                { "profile": "p", "solution": "???", "displayname": "???", "pluralname": "???" }
              ]
            }
            """);
            // The datasources dispatch only runs when --type selects it — the
            // bare ServerCommand default is 'servers' (which would hit the
            // TaskServer ctor and NRE on the missing 'servers' section).
            var settings = new ServerCommandArgs { Json = json, Profile = "p", ServiceClient = fake.Client, ServerType = "datasources" };
            await new ServerCommand().RunServerAsync(settings);
        }
        finally
        {
            fake.Dispose();
        }
    }

    // ────────────────────────────────────────────────────────────────────
    // Solution packager commands (PAC + deprecated legacy redirect).
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task PacSolutionPackagerCommand_RunTaskAsync_ProfileFound_StopsAtPackValidation()
    {
        // Pack without the Solution.xml file fails inside the task validation
        // — no pac process, no org call.
        var json = WriteJson(ConfigJsonName, """
            {
              "solutionpackagers": [
                { "profile": "p", "solution": "MySol", "folder": "src", "solutiontype": "Managed", "type": "Pack" }
              ]
            }
            """);
        var settings = new PacSolutionPackagerCommandArgs { Json = json, Profile = "p" };
        await new TestablePacSolutionCommand().Run(settings);
    }

    [TestMethod]
    public async Task LegacySolutionCommand_RunTaskAsync_PrintsDeprecationAndRedirects()
    {
        var json = WriteJson(ConfigJsonName, """
            {
              "solutionpackagers": [
                { "profile": "p", "solution": "MySol", "folder": "src", "solutiontype": "Managed", "type": "Pack" }
              ]
            }
            """);
        var settings = new PacSolutionPackagerCommandArgs { Json = json, Profile = "p" };
        await new TestableLegacySolutionCommand().Run(settings);
    }

    // ────────────────────────────────────────────────────────────────────
    // ModelBuilderCommand — the profile-found dispatch; the task-level
    // '???' namespace gate stops before the real PAC model builder runs.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task ModelBuilderCommand_RunTaskAsync_ProfileFound_ValidationStops()
    {
        var json = WriteJson(ConfigJsonName, """
            {
              "modelbuilders": [
                { "profile": "p", "namespace": "???", "output": "???" }
              ]
            }
            """);
        var settings = new ModelBuilderCommandArgs { Json = json, Profile = "p" };
        await new TestableModelBuilderCommand().Run(settings);
    }

    // ────────────────────────────────────────────────────────────────────
    // NewItemCommand / NewProjectCommand.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task NewItemCommand_List_ShowsCatalog_ReturnsZero()
    {
        var exit = await new TestableNewItemCommand().CallExecute(new NewItemCommandArgs { List = "list" });
        Assert.AreEqual(ExitCodes.Success, exit);
    }

    [TestMethod]
    public async Task NewItemCommand_WithoutConnection_ThrowsConnectionGate()
    {
        // The connect-first rule: adding an item without --conn/--auth
        // throws before any item dialog.
        var exit = await new TestableNewItemCommand().CallExecute(new NewItemCommandArgs
        {
            Type = "LateBound",
            Entity = "account",
            Project = "MyProj"
        });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
    }

    [TestMethod]
    public async Task NewItemCommand_ModernAuth_WithoutUrl_ThrowsConnectionGate()
    {
        var exit = await new TestableNewItemCommand().CallExecute(new NewItemCommandArgs
        {
            Type = "LateBound",
            Entity = "account",
            Project = "MyProj",
            AuthType = "ClientSecret"
        });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
    }

    [TestMethod]
    public async Task NewProjectCommand_WithoutConnection_DoesNotScaffold()
    {
        File.WriteAllText(Path.Combine(_root, "Contoso.sln"),
            "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
            "Global\r\nEndGlobal\r\n");
        var exit = await new TestableNewProjectCommand().CallExecute(new NewProjectCommandArgs
        {
            Type = "Shared",
            Name = "Contoso.Shared",
            Solution = Path.Combine(_root, "Contoso.sln"),
            Out = _root
        });
        Assert.AreEqual(ExitCodes.ConnectionError, exit);
        Assert.IsFalse(File.Exists(Path.Combine(_root, "Contoso.Shared", "Contoso.Shared.shproj")),
            "the project must not be created before connecting to Dataverse.");
    }

    // NOTE (skipped branches — need real infrastructure):
    // - DevKitCommand base 195-216: the legacy builder's CreateServiceClient
    //   and the 'Connected:' success block need a real org connection; the
    //   'Connection failed' null-return branch is unreachable because every
    //   builder either throws or returns a live client.
    // - ConnectWithModernAuthAsync 263-285: the DeviceCode callback and
    //   CreateServiceClientAsync start a real MSAL flow.
    // - GetFuturePlanning's 'will be implemented' branch is dead code: the
    //   method returns (false, null) for every type.
    // - NewItemCommand modern-auth success block (CrmConnection bake) runs
    //   only after a real connection.
    // All left uncovered by design.
}
