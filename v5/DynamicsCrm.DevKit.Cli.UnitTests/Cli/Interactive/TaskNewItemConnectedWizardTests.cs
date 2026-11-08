using Microsoft.Crm.Sdk.Messages;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// The wave-2 half of the 'devkit new-item' interactive wizard: the CONNECTED
/// prompt chains that wave 1 did not drive — CustomAction and CustomApi
/// entity combos resolved through the org metadata, the DataProvider data
/// source combo and flag resolution, the ResourceString language combo, the
/// Workflow/UiTest custom-template combos (DynamicsCrm.DevKit.Cli.json
/// CustomTemplates), the Test item with scanned candidates, and the missing
/// --type wizard. The gate's non-interactive throws inside the prompt
/// methods are unreachable (the RunAsync gate already reports every missing
/// required value) — noted per test.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewItemConnectedWizardTests
{
    private string _root = null!;
    private ScriptedConsole _console = null!;
    private List<EntityMetadata> _savedMetadata = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewItemConnected", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        File.WriteAllText(Path.Combine(_root, "MyProj.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n" +
            "    <RootNamespace>MyProj</RootNamespace>\n    <AssemblyName>MyProj</AssemblyName>\n" +
            "  </PropertyGroup>\n  <ItemGroup>\n" +
            "    <ProjectReference Include=\"Plugins\\Plugins.csproj\" />\n" +
            "  </ItemGroup>\n</Project>\n");
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

    /// <summary>
    /// The connected metadata fake: one 'account' entity for the entity list
    /// and the lookups, one provisioned language (1033), one custom action
    /// ('new_Action') for the bound CustomOperation fetch, and one custom api
    /// ('new_Api') for the customapi fetch.
    /// </summary>
    private static FakeSdkClient CreateMetadataFake()
    {
        var fake = new FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { TestMetadata.Entity("account", "Account", TestMetadata.String("name")) } }
            },
            RetrieveMetadataChangesRequest => new RetrieveMetadataChangesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadataCollection { TestMetadata.Entity("new_datasource") } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = TestMetadata.Entity("account", "Account", TestMetadata.String("name")) }
            },
            RetrieveProvisionedLanguagesRequest => new RetrieveProvisionedLanguagesResponse
            {
                Results = { ["RetrieveProvisionedLanguages"] = new[] { 1033 } }
            },
            _ => new OrganizationResponse()
        };
        fake.OnRetrieveMultiple = query =>
        {
            if (query is FetchExpression fetch)
            {
                if (fetch.Query.Contains("CustomOperation"))
                {
                    return new EntityCollection(new List<Entity>
                    {
                        new Entity("sdkmessage", Guid.NewGuid()) { ["name"] = "new_Action" }
                    });
                }
                if (fetch.Query.Contains("'customapi'") || fetch.Query.Contains("\"customapi\""))
                {
                    return new EntityCollection(new List<Entity>
                    {
                        new Entity("customapi", Guid.NewGuid())
                        {
                            ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "new_Api" }
                        }
                    });
                }
            }
            return new EntityCollection(new List<Entity>());
        };
        return fake;
    }

    // ────────────────────────────────────────────────────────────────────
    // Missing --type: the gate records it and the wizard asks for it.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Type_Missing_Wizard_PicksPluginFromTheCatalog()
    {
        var args = new NewItemCommandArgs { Project = "MyProj", Out = _root };
        _console.Input
            .PushKey(ConsoleKey.DownArrow)  // LateBound → JsForm
            .PushKey(ConsoleKey.DownArrow)  // JsForm → JsWebApi
            .PushKey(ConsoleKey.DownArrow)  // JsWebApi → Plugin
            .PushKey(ConsoleKey.Enter)      // type: Plugin
            .PushTextWithEnter("account")   // entity
            .PushTextWithEnter("Create")    // message
            .PushKey(ConsoleKey.Enter)      // stage: PreValidation
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("Plugin", args.Type, "the template wizard picked the Plugin item.");
        Assert.AreEqual("account", args.Entity);
        Assert.AreEqual("Create", args.Message);
    }

    // ────────────────────────────────────────────────────────────────────
    // CustomAction — the connected entity combo (None first) resolves
    // through the org metadata, then the bound custom-action combo.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task CustomAction_Connected_EntityComboThenActionCombo()
    {
        using var fake = CreateMetadataFake();
        var args = Args("CustomAction");
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.DownArrow)  // entity: None → account
            .PushKey(ConsoleKey.Enter)
            .PushKey(ConsoleKey.Enter)      // custom action: new_Action
            .PushKey(ConsoleKey.Enter)      // stage: PreValidation
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("account", args.Entity, "the connected entity combo returned the picked logical name.");
        Assert.AreEqual("new_Action", args.Message);
        Assert.HasCount(1, XrmHelper.EntitiesMetadata, "the org metadata read filled the shared cache.");
    }

    // ────────────────────────────────────────────────────────────────────
    // CustomApi — the connected entity combo then the custom api combo.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task CustomApi_Connected_EntityComboThenApiCombo()
    {
        using var fake = CreateMetadataFake();
        var args = Args("CustomApi");
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.DownArrow)  // entity: None → account
            .PushKey(ConsoleKey.Enter)
            .PushKey(ConsoleKey.Enter)      // custom api: new_Api
            .PushKey(ConsoleKey.Enter);     // class name: {message}Request default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("account", args.Entity);
        Assert.AreEqual("new_Api", args.Message);
        Assert.AreEqual(string.Empty, args.Stage, "CustomApi never prompts a stage.");
    }

    // ────────────────────────────────────────────────────────────────────
    // DataProvider — the data source combo from the org and the flag
    // resolution through the same list.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task DataProvider_Connected_EmptyDatasource_PicksFromTheOrg()
    {
        using var fake = CreateMetadataFake();
        var args = Args("DataProvider");
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.Enter)      // data source: new_datasource
            .PushKey(ConsoleKey.Enter);     // class name: default (collapsed dialog auto-name)
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("new_datasource", args.Datasource);
    }

    [TestMethod]
    public async Task DataProvider_Connected_FlagValue_ResolvesThroughTheOrgList()
    {
        using var fake = CreateMetadataFake();
        var args = Args("DataProvider");
        args.Datasource = "new_datasource";
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.Enter);     // class name: default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("new_datasource", args.Datasource, "the flag value survived the org-list resolution.");
    }

    // ────────────────────────────────────────────────────────────────────
    // Test — a project reference scan with a candidate drives the combo,
    // the auto-filled class name and the gate's --test-target requirement.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Test_WithScannedCandidate_WizardPicksIt()
    {
        var pluginsDir = Path.Combine(_root, "Plugins");
        Directory.CreateDirectory(pluginsDir);
        File.WriteAllText(Path.Combine(pluginsDir, "Plugins.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n  </PropertyGroup>\n</Project>\n");
        File.WriteAllText(Path.Combine(pluginsDir, "MyTestPlugin.cs"), """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace My.Plugins
            {
                [CrmPluginRegistration(
                    Message = "Create",
                    EntityLogicalName = "account",
                    Name = "MyTestPlugin.Create",
                    FriendlyName = "Test Step",
                    PluginType = PluginType.Plugin,
                    Stage = StageEnum.PostOperation,
                    ExecutionMode = ExecutionModeEnum.Synchronous)]
                public class MyTestPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """);

        var args = Args("Test");
        _console.Input
            .PushKey(ConsoleKey.Enter)      // test-plugin combo: MyTestPlugin
            .PushKey(ConsoleKey.Enter);     // class name: the suggestion default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("My.Plugins.MyTestPlugin", args.TestTarget, "the combo's pick named the full class.");
        Assert.IsFalse(string.IsNullOrWhiteSpace(args.Name), "the class name auto-filled from the candidate.");
    }

    [TestMethod]
    public async Task Test_FlagTarget_ResolvesThroughTheScan()
    {
        var pluginsDir = Path.Combine(_root, "Plugins");
        Directory.CreateDirectory(pluginsDir);
        File.WriteAllText(Path.Combine(pluginsDir, "Plugins.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n  </PropertyGroup>\n</Project>\n");
        File.WriteAllText(Path.Combine(pluginsDir, "MyTestPlugin.cs"), """
            using DynamicsCrm.DevKit.Shared.Models;
            using Microsoft.Xrm.Sdk;
            using System;

            namespace My.Plugins
            {
                [CrmPluginRegistration(
                    Message = "Create",
                    EntityLogicalName = "account",
                    Name = "MyTestPlugin.Create",
                    FriendlyName = "Test Step",
                    PluginType = PluginType.Plugin,
                    Stage = StageEnum.PostOperation,
                    ExecutionMode = ExecutionModeEnum.Synchronous)]
                public class MyTestPlugin : IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider) { }
                }
            }
            """);

        var args = Args("Test");
        args.TestTarget = "My.Plugins.MyTestPlugin";
        _console.Input
            .PushKey(ConsoleKey.Enter);     // class name: the suggestion default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("My.Plugins.MyTestPlugin", args.TestTarget);
        Assert.AreEqual("MyTestPlugin", args.Name, "the non-interactive run takes the suggested base name directly.");
    }

    // ────────────────────────────────────────────────────────────────────
    // ResourceString — the connected language combo and the flag resolution.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task ResourceString_Connected_LanguageComboThenResourceName()
    {
        using var fake = CreateMetadataFake();
        var args = Args("ResourceString");
        args.ServiceClient = fake.Client;
        _console.Input
            .PushKey(ConsoleKey.Enter)          // language: English
            .PushTextWithEnter("Resources");    // resource class name
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("1033", args.Language, "the language combo carries the LCID.");
        Assert.AreEqual("Resources", args.Name);
    }

    [TestMethod]
    public async Task ResourceString_Connected_FlagValue_ResolvesThroughTheOrgList()
    {
        using var fake = CreateMetadataFake();
        var args = Args("ResourceString");
        args.Language = "1033";
        args.Name = "Resources";
        args.ServiceClient = fake.Client;
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("1033", args.Language);
    }

    // ────────────────────────────────────────────────────────────────────
    // Workflow / UiTest — the custom-template combo opens when
    // DynamicsCrm.DevKit.Cli.json carries CustomTemplates for the type.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Workflow_CustomTemplateCombo_OpensWithCustomTitles()
    {
        File.WriteAllText(Path.Combine(_root, "DynamicsCrm.DevKit.Cli.json"), """
            {
              "CustomTemplates": [
                { "Type": "Workflow", "Title": "Contoso Workflow" }
              ]
            }
            """);
        var args = Args("Workflow");
        _console.Input
            .PushTextWithEnter("AccountWorkflow")   // class name
            .PushKey(ConsoleKey.Enter);             // template: Default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("Default", args.Template, "the combo's first choice is the built-in Default.");
    }

    [TestMethod]
    public async Task UiTest_CustomTemplateCombo_OpensWithCustomTitles()
    {
        File.WriteAllText(Path.Combine(_root, "DynamicsCrm.DevKit.Cli.json"), """
            {
              "CustomTemplates": [
                { "Type": "UiTest", "Title": "Contoso UiTest" }
              ]
            }
            """);
        var args = Args("UiTest");
        _console.Input
            .PushTextWithEnter("AccountUiTests")    // class name
            .PushKey(ConsoleKey.Enter);             // template: Default
        await TaskNewItem.RunAsync(args);
        Assert.AreEqual("Default", args.Template);
    }

    // NOTE (skipped branches — dead code through RunAsync):
    // - Every `if (!canPrompt) throw` inside the prompt methods (Plugin
    //   entity/message, CustomAction, CustomApi, Workflow, DataProvider,
    //   Test, UiTest, BatFile) is unreachable: the RunAsync gate reports all
    //   missing required values in one error BEFORE any prompt method runs,
    //   so the prompt methods are only reached with CanPrompt true or with
    //   every required flag already set.
    // - The Plugin connected entity/message prompt bodies are covered by the
    //   wave-1 wizard suite (Plugin_Connected_EntityCombo...).
    // All left uncovered by design.
}
