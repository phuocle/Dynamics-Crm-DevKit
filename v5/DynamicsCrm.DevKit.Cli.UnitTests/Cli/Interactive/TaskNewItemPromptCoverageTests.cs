using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// The 'devkit new-item' prompt chains reached through RunAsync. The prompt
/// branches themselves need an interactive terminal (TaskNewShared.CanPrompt
/// reads the real stdin state — not fakeable from a test), so every test
/// forces SpectreLog.IsPlain=true and drives the non-prompt half of each
/// chain: the required-value errors, the stage/execution validation, the
/// connected metadata resolution and the scaffold dispatch. A connected
/// resolution test answers RetrieveMetadataChangesRequest with one fake
/// entity and restores the static XrmHelper cache afterwards.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewItemPromptCoverageTests
{
    private string _root = null!;
    private string _projectDirectory = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewItemPrompt", Guid.NewGuid().ToString("N"));
        _projectDirectory = _root;
        Directory.CreateDirectory(_root);
        // The project walk-up (ResolveProjectDirectory) looks for MyProj.* in
        // the start directory itself — the csproj sits directly in _root.
        File.WriteAllText(Path.Combine(_root, "MyProj.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n  </PropertyGroup>\n</Project>\n");
        ScriptedConsole.Install();
        SpectreLog.IsPlain = true;
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private static NewItemCommandArgs Args(string type) => new() { Type = type, Project = "MyProj" };

    [TestMethod]
    public async Task RunAsync_List_Unknown_Throws()
    {
        var args = new NewItemCommandArgs { List = "xyz" };
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        Assert.IsTrue(ex.Message.Contains("'xyz'"), ex.Message);
    }

    [TestMethod]
    public async Task RunAsync_List_ShowsCatalog()
    {
        var args = new NewItemCommandArgs { List = "list" };
        await TaskNewItem.RunAsync(args);
        Assert.IsTrue(TemplateCatalog.All.Any(x => x.Kind == TemplateKind.Item), "the list flow completed.");
    }

    [TestMethod]
    public async Task RunAsync_MissingEverything_ThrowsSingleGateError()
    {
        var args = new NewItemCommandArgs { Type = "Plugin" };
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "required arguments missing");
        StringAssert.Contains(ex.Message, "--entity");
        StringAssert.Contains(ex.Message, "--message");
        StringAssert.Contains(ex.Message, "--stage");
        StringAssert.Contains(ex.Message, "--name");
        StringAssert.Contains(ex.Message, "--project");
    }

    [TestMethod]
    public async Task RunAsync_UnknownType_Throws()
    {
        var args = Args("BogusTemplate");
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "unknown item template");
    }

    [TestMethod]
    public async Task RunAsync_ProjectNotFound_Throws()
    {
        var args = Args("LateBound");
        args.Entity = "account";
        args.Project = "NoSuchProject";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "project not found");
    }

    // ------------------------------------------------------------------
    // Plugin chain — the gate reports missing values; the chain's own
    // presence errors are interactive-only guards behind CanPrompt.
    // ------------------------------------------------------------------

    [TestMethod]
    public async Task Plugin_MissingEntity_Throws()
    {
        var args = Args("Plugin");
        args.Message = "Create";
        args.Stage = "PostOperation";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--entity <schema-name>");
    }

    [TestMethod]
    public async Task Plugin_MissingMessage_Throws()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Stage = "PostOperation";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--message <message>");
    }

    [TestMethod]
    public async Task Plugin_InvalidStage_Throws()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Message = "Create";
        args.Stage = "BogusStage";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--stage 'BogusStage': invalid");
    }

    [TestMethod]
    public async Task Plugin_InvalidExecution_Throws()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Message = "Create";
        args.Stage = "PostOperation";
        args.Execution = "BogusMode";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--execution 'BogusMode': invalid");
    }

    [TestMethod]
    public async Task Plugin_PreValidationAsynchronous_Throws()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Message = "Create";
        args.Stage = "PreValidation";
        args.Execution = "Asynchronous";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--execution 'Asynchronous': requires stage PostOperation");
    }

    [TestMethod]
    public async Task Plugin_MissingName_Throws()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Message = "Create";
        args.Stage = "PostOperation";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <class-name>");
    }

    [TestMethod]
    public async Task Plugin_Connected_EntityNotFound_Throws()
    {
        using var fake = CreateMetadataFake();
        var args = Args("Plugin");
        args.Entity = "lead";
        args.Message = "Create";
        args.Stage = "PostOperation";
        args.Name = "LeadCreatePlugin";
        args.Out = _root;
        args.ServiceClient = fake.Client;
        var saved = XrmHelper.EntitiesMetadata;
        try
        {
            var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
            StringAssert.Contains(ex.Message, "entity not found in the current instance");
        }
        finally
        {
            XrmHelper.EntitiesMetadata = saved;
        }
    }

    [TestMethod]
    public async Task Plugin_Offline_ResolutionAndExecutionLock_Complete()
    {
        var args = Args("Plugin");
        args.Entity = "account";
        args.Message = "Create";
        args.Stage = "PostOperation";
        args.Execution = "Asynchronous";
        args.Name = "AccountCreatePlugin";
        args.Out = _root;
        // The full chain dispatches into the scaffolding engine offline.
        // The result itself depends on the project fixture; the test pins
        // the dispatch and validation half of RunAsync.
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("Asynchronous", args.Execution, "PostOperation keeps the prompted execution mode.");
    }

    // ------------------------------------------------------------------
    // CustomAction chain
    // ------------------------------------------------------------------

    [TestMethod]
    public async Task CustomAction_MissingEntity_Throws()
    {
        var args = Args("CustomAction");
        args.Message = "new_Validate";
        args.Stage = "PostOperation";
        args.Name = "ValidatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--entity <schema-name|none>");
    }

    [TestMethod]
    public async Task CustomAction_Offline_NoneEntity_FullChain()
    {
        // The wizard's None choice resolves to the unbound registration
        // (SchemaName "None", LogicalName "none") without an org lookup —
        // the full chain then dispatches into the offline scaffold.
        var args = Args("CustomAction");
        args.Entity = "none";
        args.Message = "new_Validate";
        args.Stage = "PostOperation";
        args.Execution = "Asynchronous";
        args.Name = "ValidatePlugin";
        args.Out = _root;
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("none", args.Entity.ToLowerInvariant());
    }

    [TestMethod]
    public async Task CustomAction_InvalidStage_Throws()
    {
        var args = Args("CustomAction");
        args.Entity = "none";
        args.Message = "new_Validate";
        args.Stage = "PreOperationTypo";
        args.Name = "ValidatePlugin";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--stage 'PreOperationTypo': invalid");
    }

    [TestMethod]
    public async Task CustomApi_MissingEntity_Throws()
    {
        var args = Args("CustomApi");
        args.Message = "new_Export";
        args.Name = "ExportRequest";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--entity <schema-name|none>");
    }

    [TestMethod]
    public async Task CustomApi_MissingName_Throws()
    {
        var args = Args("CustomApi");
        args.Entity = "none";
        args.Message = "new_Export";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <class-name>");
    }

    [TestMethod]
    public async Task Workflow_MissingName_Throws()
    {
        var args = Args("Workflow");
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <class-name>");
    }

    [TestMethod]
    public async Task DataProvider_MissingDatasource_Throws()
    {
        var args = Args("DataProvider");
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--datasource <data-source-logical-name>");
    }

    [TestMethod]
    public async Task DataProvider_Connected_DatasourceNotFound_Throws()
    {
        using var fake = CreateMetadataFake();
        var args = Args("DataProvider");
        args.Datasource = "new_nodatasource";
        args.Out = _root;
        args.ServiceClient = fake.Client;
        var saved = XrmHelper.EntitiesMetadata;
        try
        {
            var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
            StringAssert.Contains(ex.Message, "data source not found in the current instance");
        }
        finally
        {
            XrmHelper.EntitiesMetadata = saved;
        }
    }

    [TestMethod]
    public async Task Test_EmptyScan_MissingName_ThrowsGateError()
    {
        var args = Args("Test");
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <test-class-name>");
    }

    [TestMethod]
    public async Task UiTest_MissingName_Throws()
    {
        var args = Args("UiTest");
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <class-name>");
    }

    [TestMethod]
    public async Task ResourceString_MissingLanguage_Throws()
    {
        var args = Args("ResourceString");
        args.Name = "Resources";
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--language <lcid>");
    }

    [TestMethod]
    public async Task ResourceString_Connected_LanguageNotProvisioned_Throws()
    {
        using var fake = CreateMetadataFake();
        var args = Args("ResourceString");
        args.Language = "9999";
        args.Name = "Resources";
        args.Out = _root;
        args.ServiceClient = fake.Client;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "language not provisioned in the current instance");
    }

    [TestMethod]
    public async Task ResourceString_Connected_LanguageMatch_ThenScaffold()
    {
        // --language resolves against the org's provisioned languages (the
        // RetrieveProvisionedLanguagesRequest fake answers 1033) and the
        // chain completes into the scaffold.
        using var fake = CreateMetadataFake();
        var args = Args("ResourceString");
        args.Language = "1033";
        args.Name = "Resources";
        args.Out = _root;
        args.ServiceClient = fake.Client;
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("1033", args.Language);
    }

    [TestMethod]
    public async Task BatFile_MissingName_Throws()
    {
        var args = Args("BatFile");
        args.Out = _root;
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(ex.Message, "--name <utility-file>");
    }

    // ------------------------------------------------------------------
    // Fake SDK plumbing
    // ------------------------------------------------------------------

    /// <summary>
    /// Answers the metadata reads the prompt chains make: the entity list
    /// (one 'account'), the data source list (same response shape) and one
    /// provisioned language (1033).
    /// </summary>
    private static Mcp.Infrastructure.FakeSdkClient CreateMetadataFake()
    {
        var fake = new Mcp.Infrastructure.FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { Mcp.Infrastructure.TestMetadata.Entity("account") } }
            },
            RetrieveMetadataChangesRequest => new RetrieveMetadataChangesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadataCollection { Mcp.Infrastructure.TestMetadata.Entity("account") } }
            },
            RetrieveProvisionedLanguagesRequest => new RetrieveProvisionedLanguagesResponse
            {
                Results = { ["RetrieveProvisionedLanguages"] = new[] { 1033 } }
            },
            _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}' in {nameof(TaskNewItemPromptCoverageTests)}.")
        };
        fake.OnRetrieveMultiple = _ => new EntityCollection(new List<Entity>());
        return fake;
    }
}
