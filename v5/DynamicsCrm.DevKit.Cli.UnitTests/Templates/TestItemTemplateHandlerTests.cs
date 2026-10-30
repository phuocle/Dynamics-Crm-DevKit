using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.9 acceptance tests for the Test item template: the T4 render of
    /// Test.tt (the payload stub is just $test$ — the CLI writes the
    /// render directly), the $Class$$PluginOrder$Test.cs file-name
    /// contract (empty order suffix at 1, the Test suffix is the
    /// vstemplate's own), the collapsed dialog (FormPlugin.TestItem hides
    /// the entity, message, stage and execution combos — their values
    /// ride in with the picked candidate, the class name is the only
    /// always-required input and nothing is read from the org), the
    /// guard context (a candidate matching the default plugin template
    /// shape renders the using TargetPlugin alias and the
    /// AssertInvalidPluginContext test — Test.tt's
    /// HasPluginTestGuardContext branch) versus the plain skeleton, the
    /// custom T4 sources (DynamicsCrm.DevKit.Cli.json title and the
    /// direct --t4 path) and the project resolution (no project — no
    /// scaffold). The rendered class must parse cleanly (Roslyn).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class TestItemTemplateHandlerTests
    {
        private string _directory;
        private string _testDirectory;
        private System.Collections.Generic.List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-test-handler-tests", Guid.NewGuid().ToString("N"));
            _testDirectory = Path.Combine(_directory, "Dev.Contoso.Test");
            Directory.CreateDirectory(_testDirectory);

            // The workspace: a solution plus the Shared project (the
            // using directives of Test.tt) and the Test project the item
            // scaffolds into (no RootNamespace element — the scanner
            // falls back to the file name). No ProjectReference by
            // default: the wizard's combo scans the referenced folders
            // only, and a reference-less test project has an empty combo.
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Shared"));
            File.WriteAllText(Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj"), string.Empty);
            File.WriteAllText(Path.Combine(_testDirectory, "Dev.Contoso.Test.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net462</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // Offline tests never touch the org, but the handler reads the
            // cache when a service is present — keep it empty and restore.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            XrmHelper.EntitiesMetadata = new System.Collections.Generic.List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata>();

            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup()
        {
            XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new System.Collections.Generic.List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata>();
            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            Directory.Delete(_directory, true);
        }

        /// <summary>
        /// A test project referencing a server project that carries a
        /// default-template-shaped plugin — the wizard's guard-capable
        /// combo. Returns the server directory.
        /// </summary>
        private string WithServerReference()
        {
            var serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(serverDirectory);
            File.WriteAllText(Path.Combine(serverDirectory, "Dev.Contoso.Server.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net462</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");
            File.WriteAllText(Path.Combine(serverDirectory, "PreAccountUpdate.cs"), GuardPluginSource);
            File.WriteAllText(Path.Combine(_testDirectory, "Dev.Contoso.Test.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net462</TargetFramework>\r\n  </PropertyGroup>\r\n  <ItemGroup>\r\n    <ProjectReference Include=\"..\\Dev.Contoso.Server\\Dev.Contoso.Server.csproj\" />\r\n  </ItemGroup>\r\n</Project>");
            return serverDirectory;
        }

        private ItemTemplateInput Input(
            string name = "MyPlugin",
            string testTarget = null,
            string entity = null,
            string message = null,
            string stage = null,
            string execution = null,
            int order = 1)
        {
            return new ItemTemplateInput
            {
                TemplateId = "Test",
                Name = name,
                TestTarget = testTarget,
                Entity = entity,
                Message = message,
                Stage = stage,
                Execution = execution,
                Order = order,
                OutputDirectory = _testDirectory,
                Offline = true,
                Transformer = new MonoTextTransformer(),
            };
        }

        /// <summary>
        /// A DevKit-generated plugin step: the exact shape
        /// PluginTestDiscovery calls guard-capable (the four guard throws
        /// of the default plugin template, the Execute(IServiceProvider)
        /// signature, a public parameterless constructor).
        /// </summary>
        private const string GuardPluginSource = @"using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;

namespace Dev.Contoso.Server
{
    [CrmPluginRegistration(""Update"", ""account"", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, """", ""Dev.Contoso.Server.PreAccountUpdate"", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreAccountUpdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetExecutionContext7();
            if (!int.Equals(context.Stage, (int)StageEnum.PreOperation)) throw new InvalidPluginExecutionException(""Stage does not equals PreOperation"");
            if (!string.Equals(context.MessageName, ""Update"", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException(""MessageName does not equals Update"");
            if (!string.Equals(context.PrimaryEntityName, ""account"", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException(""PrimaryEntityName does not equals account"");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException(""Execution does not equals Synchronous"");
        }
    }
}";

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_SingleTestSuffixPayload()
        {
            var manifest = TestItemTemplateHandler.CreateManifest();

            Assert.AreEqual("Test", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            // CSharpTestItemTemplate.vstemplate: one $test$ payload, named
            // $Class$$PluginOrder$Test.cs (ReplaceParameters on) — the
            // Test suffix is the vstemplate's own.
            Assert.AreEqual("$Class$$PluginOrder$Test.cs", manifest.Files[0].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.test.Class.cs");
        }

        [TestMethod]
        public void NewList_ItemTestIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "Test"));
            Assert.IsNotNull(TemplateCatalog.Find("Test", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_TypedClassName_RendersPlainTest()
        {
            // The standard DevKit test project references only the
            // ProxyTypes project — no candidates, the empty-combo path:
            // the typed class name renders the plain skeleton and
            // nothing is read from the org (no offline warning).
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("MyPluginTest.cs", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_testDirectory, "MyPluginTest.cs");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // Byte-faithful to the WIZARD OUTPUT, not the payload marker:
            // the Test item file the wizard produces starts directly with
            // the first using — no BOM (unlike Plugin/Workflow, whose
            // outputs carry the payload's BOM through).
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual((byte)'u', bytes[0]);
            Assert.AreEqual((byte)'s', bytes[1]);

            var code = File.ReadAllText(fullPath);
            StringAssert.Contains(code, "using Contoso.Shared;");
            StringAssert.Contains(code, "using Contoso.Shared.Test;");
            StringAssert.Contains(code, "using FakeXrmEasy.Plugins;");
            StringAssert.Contains(code, "using Microsoft.VisualStudio.TestTools.UnitTesting;");
            StringAssert.Contains(code, "namespace Dev.Contoso.Test");
            StringAssert.Contains(code, "public class MyPluginTest : FakeXrmEasyTestBase");
            StringAssert.Contains(code, "public void MyPluginTest_00()");
            StringAssert.Contains(code, "Assert.IsTrue(true);");
            StringAssert.Contains(code, "//_context.ExecutePluginWith<YourPlugin>(pluginContext);");
            Assert.IsFalse(code.Contains("using TargetPlugin"), code);
            Assert.IsFalse(code.Contains("StageEnum"), code);
            Assert.IsFalse(code.Contains("PLUGIN_STAGE"), code);
            Assert.IsFalse(result.Warnings.Any(), string.Join("; ", result.Warnings));
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_TrailingTestInName_StrippedOnce()
        {
            // FormPlugin.GetClassBaseName: the typed name loses its
            // trailing Test so the template's own Test suffix never
            // doubles.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "MyPluginTest"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("MyPluginTest.cs", result.Files.Single().FileName);
            var code = File.ReadAllText(Path.Combine(_testDirectory, "MyPluginTest.cs"));
            StringAssert.Contains(code, "public class MyPluginTest : FakeXrmEasyTestBase");
            Assert.IsFalse(code.Contains("MyPluginTestTest"), code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderTwo_SuffixGoesBeforeTest()
        {
            // $Class$$PluginOrder$Test.cs — the order suffix sits between
            // the class name and the vstemplate's own Test suffix.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 2));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("MyPlugin2Test.cs", result.Files.Single().FileName);
        }

        [TestMethod]
        public async Task ScaffoldAsync_GuardTarget_RendersGuardContext()
        {
            WithServerReference();

            var input = Input(name: "PreAccountUpdate", testTarget: "Dev.Contoso.Server.PreAccountUpdate");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("PreAccountUpdateTest.cs", result.Files.Single().FileName);
            var fullPath = Path.Combine(_testDirectory, "PreAccountUpdateTest.cs");
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual((byte)'u', bytes[0], "the wizard writes the Test item without a BOM");
            var code = File.ReadAllText(fullPath);
            StringAssert.Contains(code, "using TargetPlugin = Dev.Contoso.Server.PreAccountUpdate;");
            // The wizard's <#}#> line keeps its newline when the if-block
            // emitted the using — an empty line separates it from the
            // namespace.
            StringAssert.Contains(code, "using TargetPlugin = Dev.Contoso.Server.PreAccountUpdate;\r\n\r\nnamespace");
            StringAssert.Contains(code, "private const StageEnum PLUGIN_STAGE = StageEnum.PreOperation;");
            StringAssert.Contains(code, "private const string PLUGIN_MESSAGE = \"Update\";");
            StringAssert.Contains(code, "private const string PLUGIN_ENTITY_LOGICAL_NAME = \"account\";");
            StringAssert.Contains(code, "private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Synchronous;");
            StringAssert.Contains(code, "AssertInvalidPluginContext<TargetPlugin>(");
            Assert.IsFalse(code.Contains("YourPlugin"), code);
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_TestTargetOnly_DefaultsClassNameFromCandidate()
        {
            // The wizard auto-fills the class textbox with the picked
            // class name (ApplySelectedTestPluginToForm) — the CLI takes
            // it as the --name default: no name required.
            WithServerReference();

            var input = Input(name: null, testTarget: "Dev.Contoso.Server.PreAccountUpdate");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("PreAccountUpdateTest.cs", result.Files.Single().FileName);
            var code = File.ReadAllText(Path.Combine(_testDirectory, "PreAccountUpdateTest.cs"));
            StringAssert.Contains(code, "public class PreAccountUpdateTest : FakeXrmEasyTestBase");
            StringAssert.Contains(code, "using TargetPlugin = Dev.Contoso.Server.PreAccountUpdate;");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_GuardTarget_FillsRegistrationFieldsFromCandidate()
        {
            // The dialog's entity, message, stage and execution combos are
            // collapsed — the candidate is their only voice. No typed
            // field, the guard context still renders.
            WithServerReference();

            var input = Input(name: "PreAccountUpdate", testTarget: "Dev.Contoso.Server.PreAccountUpdate");
            Assert.IsTrue(string.IsNullOrWhiteSpace(input.Message) && string.IsNullOrWhiteSpace(input.Stage));
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_testDirectory, "PreAccountUpdateTest.cs"));
            StringAssert.Contains(code, "using TargetPlugin = Dev.Contoso.Server.PreAccountUpdate;");
            StringAssert.Contains(code, "StageEnum.PreOperation");
            StringAssert.Contains(code, "PLUGIN_MESSAGE = \"Update\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_GuardTarget_FlagsWinOverCandidate()
        {
            WithServerReference();

            var input = Input(name: "PreAccountUpdate", testTarget: "Dev.Contoso.Server.PreAccountUpdate", stage: "PostOperation");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_testDirectory, "PreAccountUpdateTest.cs"));
            StringAssert.Contains(code, "private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;");
        }

        [TestMethod]
        public async Task ScaffoldAsync_GuardTarget_NonGuardCandidate_RendersPlainTest()
        {
            // A candidate that does not match the default plugin template
            // shape is picked like any other (the wizard allows it), but
            // TestTargetFullClassName stays empty — the plain skeleton
            // renders.
            var serverDirectory = WithServerReference();
            File.WriteAllText(Path.Combine(serverDirectory, "CustomLeadPlugin.cs"), @"using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;

namespace Dev.Contoso.Server
{
    [CrmPluginRegistration(""Create"", ""lead"", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, """", ""Dev.Contoso.Server.CustomLeadPlugin"", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class CustomLeadPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var service = serviceProvider.GetService<IOrganizationService>();
        }
    }
}");

            var input = Input(name: "CustomLead", testTarget: "Dev.Contoso.Server.CustomLeadPlugin");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("CustomLeadTest.cs", result.Files.Single().FileName);
            var code = File.ReadAllText(Path.Combine(_testDirectory, "CustomLeadTest.cs"));
            Assert.IsFalse(code.Contains("using TargetPlugin"), code);
            Assert.IsFalse(code.Contains("StageEnum"), code);
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_GuardTarget_NotAmongCandidates_Fails()
        {
            // The wizard's combo only offers the scanned candidates — a
            // target outside the list is impossible there.
            WithServerReference();

            var input = Input(name: "MyPlugin", testTarget: "Dev.Contoso.Server.GhostPlugin");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--test-target 'Dev.Contoso.Server.GhostPlugin': not found among the plugin/workflow classes of the project references.");
        }

        [TestMethod]
        public async Task ScaffoldAsync_TestTarget_ExistingTest_StillResolves()
        {
            // The {ClassName}Test convention only leaves the wizard's
            // COMBO — an explicit --test-target rerun resolves the class
            // and regenerates the file (--force).
            WithServerReference();

            var first = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "PreAccountUpdate", testTarget: "Dev.Contoso.Server.PreAccountUpdate"));
            Assert.IsTrue(first.Success, string.Join("; ", first.Errors));
            var fullPath = Path.Combine(_testDirectory, "PreAccountUpdateTest.cs");
            File.AppendAllText(fullPath, "\r\n// customized by user");

            var rerun = Input(name: "PreAccountUpdate", testTarget: "Dev.Contoso.Server.PreAccountUpdate");
            rerun.Force = true;
            var second = await ScaffoldingEngine.ScaffoldItemAsync(rerun);

            Assert.IsTrue(second.Success, string.Join("; ", second.Errors));
            Assert.AreEqual("Updated", second.Files.Single().Action);
            var code = File.ReadAllText(fullPath);
            StringAssert.Contains(code, "using TargetPlugin = Dev.Contoso.Server.PreAccountUpdate;");
            Assert.IsFalse(code.Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_TypedGuardFieldsWithoutTarget_RenderPlainTest()
        {
            // HasPluginTestGuardContext needs the target: typed
            // registration fields alone render the plain skeleton.
            var input = Input(entity: "account", message: "Update", stage: "PreOperation", execution: "Synchronous");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_testDirectory, "MyPluginTest.cs"));
            Assert.IsFalse(code.Contains("using TargetPlugin"), code);
            Assert.IsFalse(code.Contains("StageEnum"), code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_CustomT4_FromCliJson_RendersWithContext()
        {
            var t4 = "// MINE\r\nnamespace <#= Context.PluginNameSpace #>\r\n{\r\n    // <#= Context.PluginComment #>-<#= Context.ClassWithOrder #>\r\n}\r\n";
            var configJson = new ConfigJson
            {
                CustomTemplates = new System.Collections.Generic.List<CustomTemplate>
                {
                    new CustomTemplate { Type = "Test", Title = "Mine", Body = Helper.Compress(t4), IsDefault = false },
                },
            };
            File.WriteAllText(Path.Combine(_directory, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(configJson));

            var input = Input();
            input.TemplateTitle = "Mine";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_testDirectory, "MyPluginTest.cs"));
            StringAssert.Contains(code, "// MINE");
            // The custom title renders through the FULL context — the
            // comment is the org's message doc (empty offline), never the
            // Name-when-Class-is-set fallback of the other hosts.
            StringAssert.Contains(code, "// -MyPlugin");
        }

        [TestMethod]
        public async Task ScaffoldAsync_CustomT4_FromT4Path()
        {
            var t4Path = Path.Combine(_directory, "My.tt");
            File.WriteAllText(t4Path, "// FROMPATH <#= Context.ClassWithOrder #>\r\n");

            var input = Input();
            input.T4Path = t4Path;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_testDirectory, "MyPluginTest.cs"));
            StringAssert.Contains(code, "// FROMPATH MyPlugin");
        }

        [TestMethod]
        public async Task ScaffoldAsync_BothCustomT4Sources_Fails()
        {
            var input = Input();
            input.TemplateTitle = "Mine";
            input.T4Path = Path.Combine(_directory, "My.tt");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--t4 and --template: use one custom T4 source.");
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingName_Fails()
        {
            // An entity present passes the engine's own gate so the
            // handler's message names the template.
            var input = Input(name: null);
            input.Entity = "account";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name: required for template 'Test'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoInputsAtAll_EngineGateFires()
        {
            // No name, no entity and no data source: the engine's own
            // gate fires first.
            var input = Input(name: null);
            input.Entity = null;
            input.DataSource = null;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name (or --entity): required");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoProject_Fails()
        {
            var bare = Path.Combine(_directory, "bare");
            Directory.CreateDirectory(bare);

            var input = Input();
            input.OutputDirectory = bare;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            // The engine gate is required for EVERY item template (aP
            // ruling 2026-10-28) — the message names the template id.
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'Test'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NamedProjectNotFound_Fails()
        {
            var input = Input();
            input.ProjectName = "Ghost.Project";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--project 'Ghost.Project': project not found");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NamespaceSuffix_FollowsSubfolder()
        {
            var stepsDirectory = Path.Combine(_testDirectory, "steps");
            Directory.CreateDirectory(stepsDirectory);

            var input = Input();
            input.OutputDirectory = stepsDirectory;
            input.ProjectName = "Dev.Contoso.Test";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(stepsDirectory, "MyPluginTest.cs"));
            StringAssert.Contains(code, "namespace Dev.Contoso.Test.steps");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var fullPath = Path.Combine(_testDirectory, "MyPluginTest.cs");
            File.AppendAllText(fullPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.AreEqual("Skipped", second.Files.Single().Action);
            StringAssert.Contains(File.ReadAllText(fullPath), "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "Test",
                Order = 1,
                Name = "MyPlugin",
                OutputDirectory = _testDirectory,
                Offline = true,
                Force = true,
                Transformer = new MonoTextTransformer(),
            });
            Assert.AreEqual("Updated", forced.Files.Single().Action);
            Assert.IsFalse(File.ReadAllText(fullPath).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingTransformer_Fails()
        {
            var input = Input();
            input.Transformer = null;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "T4 transformer: required");
        }

        /// <summary>
        /// The work unit's golden test: every render must be valid C# —
        /// parsed with zero errors (a broken namespace or a stray token
        /// shows up here).
        /// </summary>
        private static void AssertParsedWithoutErrors(string code)
        {
            var tree = CSharpSyntaxTree.ParseText(code);
            var errors = tree.GetDiagnostics().Where(d => d.Severity == DiagnosticSeverity.Error).ToList();
            Assert.IsTrue(errors.Count == 0, string.Join(Environment.NewLine, errors.Select(d => d.ToString())));
        }
    }
}
