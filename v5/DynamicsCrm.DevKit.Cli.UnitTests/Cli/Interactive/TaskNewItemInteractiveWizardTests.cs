using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using Microsoft.Xrm.Sdk.Query;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// The interactive half of 'devkit new-item' — the prompt chains that
/// TaskNewShared.CanPrompt gates behind Console.IsInputRedirected. The
/// Harmony unlock (InteractiveConsoleUnlock) makes the redirected-stdin
/// check report false, ScriptedConsole answers every Spectre prompt with a
/// pushed key sequence, so RunAsync drives each template's wizard to the
/// end: Plugin/CustomAction/CustomApi/Workflow/DataProvider/UiTest/
/// ResourceString/BatFile/Test offline chains, the connected Plugin combo
/// chain, and the walk-up helpers (FindNearestProjectName /
/// ResolveProjectDirectory) through both the real flow and reflection.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewItemInteractiveWizardTests
{
    private string _root = null!;
    private ScriptedConsole _console = null!;
    private List<EntityMetadata> _savedMetadata = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewItemWizard", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        // The project walk-up resolves --project through this fixture; the
        // RootNamespace keeps the handlers that demand one happy.
        File.WriteAllText(Path.Combine(_root, "MyProj.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n" +
            "    <RootNamespace>MyProj</RootNamespace>\n    <AssemblyName>MyProj</AssemblyName>\n  </PropertyGroup>\n</Project>\n");
        InteractiveConsoleUnlock.Install();
        _console = ScriptedConsole.Install();
        SpectreLog.IsPlain = false;
        _savedMetadata = XrmHelper.EntitiesMetadata;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        InteractiveConsoleUnlock.Uninstall();
        XrmHelper.EntitiesMetadata = _savedMetadata;
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private NewItemCommandArgs Args(string type) => new() { Type = type, Project = "MyProj", Out = _root };

    // ────────────────────────────────────────────────────────────────────
    // Plugin — the offline TextPrompt chain: entity → message → stage
    // (PreValidation locks Synchronous) → class name (default accepted).
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Plugin_Offline_Wizard_AnswersEveryPrompt()
    {
        var args = Args("Plugin");
        _console.Input
            .PushTextWithEnter("account")   // Entity schema name
            .PushTextWithEnter("Create")    // Dataverse message
            .PushKey(ConsoleKey.Enter)      // stage: PreValidation (first choice)
            .PushKey(ConsoleKey.Enter);     // class name: accept the suggestion
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("account", args.Entity);
        Assert.AreEqual("Create", args.Message);
        Assert.AreEqual("PreValidation", args.Stage);
        Assert.AreEqual("Synchronous", args.Execution, "PreValidation locks Synchronous without prompting.");
        Assert.IsFalse(string.IsNullOrWhiteSpace(args.Name), "the class name default was accepted.");
        Assert.AreEqual("Default", args.Template, "no custom titles — the template combo never opened.");
    }

    [TestMethod]
    public async Task Plugin_Offline_PostOperation_PromptsExecutionMode()
    {
        var args = Args("Plugin");
        _console.Input
            .PushTextWithEnter("account")
            .PushTextWithEnter("Create")
            .PushKey(ConsoleKey.DownArrow)  // PreValidation → PreOperation
            .PushKey(ConsoleKey.DownArrow)  // PreOperation → PostOperation
            .PushKey(ConsoleKey.Enter)      // stage: PostOperation
            .PushKey(ConsoleKey.Enter)      // execution: Synchronous (first choice)
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("PostOperation", args.Stage);
        Assert.AreEqual("Synchronous", args.Execution, "the execution mode combo answered.");
    }

    [TestMethod]
    public async Task Plugin_Connected_EntityCombo_StageAndExecutionCombos()
    {
        using var fake = CreateMetadataFake();
        var args = Args("Plugin");
        args.Message = "Create";
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.Enter)      // entity combo: first schema (Account)
            .PushKey(ConsoleKey.DownArrow)
            .PushKey(ConsoleKey.DownArrow)
            .PushKey(ConsoleKey.Enter)      // stage: PostOperation
            .PushKey(ConsoleKey.Enter)      // execution: Synchronous
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("Account", args.Entity, "the connected entity combo returned the picked schema.");
        Assert.AreEqual("PostOperation", args.Stage);
        Assert.AreEqual("Synchronous", args.Execution);
        Assert.IsFalse(string.IsNullOrWhiteSpace(args.Name));
        Assert.HasCount(1, XrmHelper.EntitiesMetadata, "the org metadata read filled the shared cache once.");
    }

    // ────────────────────────────────────────────────────────────────────
    // CustomAction — 'none' unbound entity → custom action → stage → name.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task CustomAction_Offline_NoneEntity_Wizard()
    {
        var args = Args("CustomAction");
        _console.Input
            .PushTextWithEnter("none")      // entity: unbound
            .PushTextWithEnter("new_Test")  // custom action
            .PushKey(ConsoleKey.Enter)      // stage: PreValidation
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("none", args.Entity.ToLowerInvariant());
        Assert.AreEqual("new_Test", args.Message);
        Assert.AreEqual("PreValidation", args.Stage);
        Assert.AreEqual("Synchronous", args.Execution);
    }

    [TestMethod]
    public async Task CustomAction_Offline_PostOperation_ExecutesAsynchronous()
    {
        var args = Args("CustomAction");
        _console.Input
            .PushTextWithEnter("none")
            .PushTextWithEnter("new_Test")
            .PushKey(ConsoleKey.DownArrow)
            .PushKey(ConsoleKey.DownArrow)
            .PushKey(ConsoleKey.Enter)      // stage: PostOperation
            .PushKey(ConsoleKey.DownArrow)  // execution: Asynchronous
            .PushKey(ConsoleKey.Enter)
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("PostOperation", args.Stage);
        Assert.AreEqual("Asynchronous", args.Execution);
    }

    // ────────────────────────────────────────────────────────────────────
    // CustomApi — entity → custom api → class name. No stage/execution.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task CustomApi_Offline_Wizard()
    {
        var args = Args("CustomApi");
        _console.Input
            .PushTextWithEnter("none")      // entity: unbound
            .PushTextWithEnter("new_Api")   // custom api
            .PushKey(ConsoleKey.Enter);     // class name: {message}Request suggestion
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("none", args.Entity.ToLowerInvariant());
        Assert.AreEqual("new_Api", args.Message);
        Assert.IsFalse(string.IsNullOrWhiteSpace(args.Name));
        Assert.AreEqual(string.Empty, args.Stage, "CustomApi never prompts a stage.");
    }

    // ────────────────────────────────────────────────────────────────────
    // Workflow / DataProvider / UiTest — single-input chains.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Workflow_Offline_ClassNamePrompt()
    {
        var args = Args("Workflow");
        _console.Input.PushTextWithEnter("AccountWorkflow");
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("AccountWorkflow", args.Name);
        Assert.AreEqual(string.Empty, args.Entity, "Workflow reads nothing from the org.");
    }

    [TestMethod]
    public async Task DataProvider_Offline_DataSourcePrompt()
    {
        var args = Args("DataProvider");
        _console.Input.PushTextWithEnter("new_datasource");
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("new_datasource", args.Datasource);
        Assert.AreEqual(string.Empty, args.Message, "DataProvider collapses class/message/stage/execution.");
    }

    [TestMethod]
    public async Task UiTest_Offline_ClassPrompt()
    {
        // UiTest owns its class-name prompt (the generic [Name] prompt skips
        // it), so the class text is the only input.
        var args = Args("UiTest");
        _console.Input.PushTextWithEnter("AccountUiTests");
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("AccountUiTests", args.Name);
    }

    // ────────────────────────────────────────────────────────────────────
    // ResourceString — language LCID → resource class name.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task ResourceString_Offline_LanguageAndResourcePrompts()
    {
        var args = Args("ResourceString");
        _console.Input
            .PushTextWithEnter("1033")
            .PushTextWithEnter("Resources");
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("1033", args.Language);
        Assert.AreEqual("Resources", args.Name);
    }

    // ────────────────────────────────────────────────────────────────────
    // BatFile — generic name prompt (empty) then the static file combo.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task BatFile_Offline_FileCombo()
    {
        // BatFile owns its file prompt (the generic [Name] prompt skips it) —
        // the static combo's first choice is picked with Enter.
        var args = Args("BatFile");
        _console.Input.PushKey(ConsoleKey.Enter);
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual(BatFileItemTemplateHandler.UtilityFiles[0], args.Name,
            "the file combo's first choice named the utility file.");
    }

    // ────────────────────────────────────────────────────────────────────
    // Test — an empty candidate scan leaves the class name as typed input.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Test_Offline_EmptyScan_TypedClassName()
    {
        var args = Args("Test");
        _console.Input.PushTextWithEnter("AccountPluginTests");
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("AccountPluginTests", args.Name);
        Assert.AreEqual(string.Empty, args.TestTarget, "no candidates — nothing was auto-selected.");
    }

    // ────────────────────────────────────────────────────────────────────
    // The interactive --project prompt suggests the nearest project.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Project_Missing_PromptSuggestsNearestProjectName()
    {
        var args = Args("Workflow");
        args.Project = string.Empty;
        args.Name = "AccountWorkflow";
        _console.Input.PushKey(ConsoleKey.Enter); // accept the "MyProj" default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("MyProj", args.Project, "FindNearestProjectName seeded the prompt default.");
    }

    // ────────────────────────────────────────────────────────────────────
    // Reflection coverage of the private walk-up helpers.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public void FindNearestProjectName_WalksUpAndCountsEveryProjectKind()
    {
        var method = typeof(TaskNewItem).GetMethod("FindNearestProjectName", BindingFlags.NonPublic | BindingFlags.Static)!;

        Assert.AreEqual("MyProj", method.Invoke(null, new object?[] { _root }),
            "the csproj directly in the start directory wins.");

        var deep = Directory.CreateDirectory(Path.Combine(_root, "src", "deep"));
        Assert.AreEqual("MyProj", method.Invoke(null, new object?[] { deep.FullName }),
            "the walk-up finds the project above the start directory.");

        var rptRoot = Path.Combine(_root, "reports");
        Directory.CreateDirectory(rptRoot);
        File.WriteAllText(Path.Combine(rptRoot, "Rs.rptproj"), "<Project/>");
        Assert.AreEqual("Rs", method.Invoke(null, new object?[] { rptRoot }), "the .rptproj counts.");

        // An isolated tree OUTSIDE _root — inside it the walk-up would find
        // MyProj.csproj one level up.
        var empty = Path.Combine(Path.GetTempPath(), "DevKitCli_NoProject", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(empty);
        try
        {
            Assert.IsNull(method.Invoke(null, new object?[] { empty }),
                "a directory tree without any project file yields null.");
        }
        finally
        {
            Directory.Delete(empty, true);
        }
    }

    [TestMethod]
    public void ResolveProjectDirectory_WalkUpSolutionTreeAndBinExclusions()
    {
        var method = typeof(TaskNewItem).GetMethod("ResolveProjectDirectory", BindingFlags.NonPublic | BindingFlags.Static)!;

        Assert.AreEqual(_root, method.Invoke(null, new object?[] { "MyProj", _root }));

        var deep = Path.Combine(_root, "src", "deep");
        Directory.CreateDirectory(deep);
        Assert.AreEqual(_root, method.Invoke(null, new object?[] { "MyProj", deep }), "walk-up match.");

        // The solution-tree search: the sln sits at the root, the target
        // project in a sibling folder below the start directory.
        File.WriteAllText(Path.Combine(_root, "Contoso.sln"),
            "Microsoft Visual Studio Solution File, Format Version 12.00\nGlobal\nEndGlobal\n");
        var other = Path.Combine(_root, "sub", "Other");
        Directory.CreateDirectory(other);
        File.WriteAllText(Path.Combine(other, "Other.csproj"), "<Project/>");
        Assert.AreEqual(other, method.Invoke(null, new object?[] { "Other", deep }),
            "the AllDirectories search under the nearest solution finds the sibling project.");

        // bin/obj outputs never resolve, even when they are the only match.
        var binned = Path.Combine(_root, "sub", "bin", "Debug");
        Directory.CreateDirectory(binned);
        File.WriteAllText(Path.Combine(binned, "Binned.csproj"), "<Project/>");
        Assert.IsNull(method.Invoke(null, new object?[] { "Binned", deep }),
            "the workspace scanner's bin/obj exclusions apply to the solution-tree search.");

        // A tree without a solution and without a match: null.
        var isolated = Path.Combine(_root, "nowhere");
        Directory.CreateDirectory(isolated);
        Assert.IsNull(method.Invoke(null, new object?[] { "Ghost", isolated }));
    }

    // ────────────────────────────────────────────────────────────────────
    // Fake SDK plumbing — the connected chain's metadata read.
    // ────────────────────────────────────────────────────────────────────

    /// <summary>
    /// Answers the metadata reads the connected Plugin chain makes: the
    /// entity combo read, the per-entity metadata lookup of the message
    /// validation, the sdkmessage list (one 'Create' row) and the empty
    /// input/output parameter read behind the generated comment block.
    /// </summary>
    private static Mcp.Infrastructure.FakeSdkClient CreateMetadataFake()
    {
        var fake = new Mcp.Infrastructure.FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { Mcp.Infrastructure.TestMetadata.Entity("account", "Account", Mcp.Infrastructure.TestMetadata.String("name")) } }
            },
            RetrieveMetadataChangesRequest => new RetrieveMetadataChangesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadataCollection { Mcp.Infrastructure.TestMetadata.Entity("account", "Account", Mcp.Infrastructure.TestMetadata.String("name")) } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = Mcp.Infrastructure.TestMetadata.Entity("account", "Account", Mcp.Infrastructure.TestMetadata.String("name")) }
            },
            _ => new OrganizationResponse()
        };
        fake.OnRetrieveMultiple = query =>
        {
            // GetSdkMessagesAsync fetches <entity name="sdkmessage"> with
            // double quotes; the parameter read fetches name='sdkmessagerequest'
            // with single quotes — distinguish on the quoting so the comment
            // read stays empty.
            if (query is FetchExpression fetch && fetch.Query.Contains("\"sdkmessage\""))
            {
                return new EntityCollection(new List<Entity>
                {
                    new Entity("sdkmessage", Guid.NewGuid()) { ["name"] = "Create" }
                });
            }
            return new EntityCollection(new List<Entity>());
        };
        return fake;
    }
}
