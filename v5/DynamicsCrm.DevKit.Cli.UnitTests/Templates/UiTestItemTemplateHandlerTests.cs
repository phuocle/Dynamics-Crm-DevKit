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
    /// I.10 acceptance tests for the UiTest item template: the T4 render
    /// of UiTest.tt (the payload stub is just $uitest$ — the CLI writes
    /// the render directly), the $Class$$PluginOrder$Test.cs file-name
    /// contract (empty order suffix at 1, the Test suffix is the
    /// vstemplate's own), the collapsed dialog (FormPlugin.UiTestItem
    /// hides the entity, message, stage and execution combos — the class
    /// name is the only input and nothing is read from the org), the
    /// wizard's byte fidelity (the output drops the payload's BOM, like
    /// the Test item — unlike Plugin/Workflow), the custom T4 sources
    /// (DynamicsCrm.DevKit.Cli.json title and the direct --t4 path) and
    /// the project resolution (no project — no scaffold). The rendered
    /// class must parse cleanly (Roslyn).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class UiTestItemTemplateHandlerTests
    {
        private string _directory;
        private string _uiTestDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-uitest-handler-tests", Guid.NewGuid().ToString("N"));
            _uiTestDirectory = Path.Combine(_directory, "Dev.Contoso.UiTest");
            Directory.CreateDirectory(_uiTestDirectory);

            // The workspace: a solution plus the UiTest project the item
            // scaffolds into (no RootNamespace element — the scanner falls
            // back to the file name).
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            File.WriteAllText(Path.Combine(_uiTestDirectory, "Dev.Contoso.UiTest.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net462</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup()
        {
            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            Directory.Delete(_directory, true);
        }

        private ItemTemplateInput Input(
            string name = "MyLogin",
            int order = 1)
        {
            return new ItemTemplateInput
            {
                TemplateId = "UiTest",
                Name = name,
                Order = order,
                OutputDirectory = _uiTestDirectory,
                Offline = true,
                Transformer = new MonoTextTransformer(),
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_SingleTestSuffixPayload()
        {
            var manifest = UiTestItemTemplateHandler.CreateManifest();

            Assert.AreEqual("UiTest", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            // CSharpUiTestItemTemplate.vstemplate: one $uitest$ payload,
            // named $Class$$PluginOrder$Test.cs (ReplaceParameters on) —
            // the Test suffix is the vstemplate's own.
            Assert.AreEqual("$Class$$PluginOrder$Test.cs", manifest.Files[0].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.uitest.Class.cs");
        }

        [TestMethod]
        public void NewList_ItemUiTestIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "UiTest"));
            Assert.IsNotNull(TemplateCatalog.Find("UiTest", TemplateKind.Item));
            // FormPlugin.UiTestItem collapses the org combos — the
            // catalog row says the same (no connection required) and
            // keeps the template panel (custom T4 titles).
            var descriptor = TemplateCatalog.Find("UiTest", TemplateKind.Item);
            Assert.IsFalse(descriptor.RequiresConnection);
            Assert.IsTrue(descriptor.SupportsCustomT4);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_TypedClassName_RendersUiTestClass()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("MyLoginTest.cs", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_uiTestDirectory, "MyLoginTest.cs");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // Byte-faithful to the WIZARD OUTPUT, not the payload marker:
            // the LoginTest.cs the current wizard produced
            // (TestAllInOne2/Dev.AllInOne.UiTest) starts directly with the
            // first using — no BOM, like the Test item (the
            // original-workspace file carries a stale BOM from an older
            // VSIX). Unlike Plugin/Workflow, whose outputs carry the
            // payload's BOM through.
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual((byte)'u', bytes[0]);
            Assert.AreEqual((byte)'s', bytes[1]);

            var code = File.ReadAllText(fullPath);
            // The wizard output's usings are sorted (the VS T4 host orders
            // them namespace prefix-first — the Mono transformer mirrors).
            StringAssert.Contains(code, "using Microsoft.Dynamics365.UIAutomation.Api.UCI;");
            StringAssert.Contains(code, "using Microsoft.Dynamics365.UIAutomation.Browser;");
            StringAssert.Contains(code, "using Microsoft.VisualStudio.TestTools.UnitTesting;");
            StringAssert.Contains(code, "using System;");
            StringAssert.Contains(code, "using System.Security;");
            Assert.AreEqual(code.IndexOf("using Microsoft.Dynamics365.UIAutomation.Api.UCI;"), code.IndexOf("using "));
            StringAssert.Contains(code, "namespace Dev.Contoso.UiTest");
            StringAssert.Contains(code, "[TestClass]");
            StringAssert.Contains(code, "public class MyLoginTest");
            StringAssert.Contains(code, "private readonly SecureString _username = App.GetAppSettingOrEnvironment(\"UiTestUserName\", \"UserName\", \"DEVKIT_USERNAME\").ToSecureString();");
            StringAssert.Contains(code, "private readonly Uri _xrmUri = new Uri(App.GetAppSettingOrEnvironment(\"Url\", \"DEVKIT_URL\"));");
            StringAssert.Contains(code, "var client = new WebClient(TestSettings.Options);");
            StringAssert.Contains(code, "xrmApp.OnlineLogin.Login(_xrmUri, _username, _password);");
            StringAssert.Contains(code, "Assert.IsTrue(true);");
            Assert.IsFalse(result.Warnings.Any(), string.Join("; ", result.Warnings));
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_TrailingTestInName_StrippedOnce()
        {
            // FormPlugin.GetClassBaseName counts the UiTest dialog among
            // the test-class items: the typed name loses its trailing Test
            // so the template's own Test suffix never doubles.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "MyLoginTest"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("MyLoginTest.cs", result.Files.Single().FileName);
            var code = File.ReadAllText(Path.Combine(_uiTestDirectory, "MyLoginTest.cs"));
            StringAssert.Contains(code, "public class MyLoginTest");
            Assert.IsFalse(code.Contains("MyLoginTestTest"), code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderTwo_SuffixGoesBeforeTest()
        {
            // $Class$$PluginOrder$Test.cs — the order suffix sits between
            // the class name and the vstemplate's own Test suffix.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 2));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("MyLogin2Test.cs", result.Files.Single().FileName);
            var code = File.ReadAllText(Path.Combine(_uiTestDirectory, "MyLogin2Test.cs"));
            StringAssert.Contains(code, "public class MyLogin2Test");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderZero_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 0));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--order '0': invalid. Use a positive integer.");
        }

        [TestMethod]
        public async Task ScaffoldAsync_CustomT4_FromCliJson_RendersWithContext()
        {
            var t4 = "// MINE\r\nnamespace <#= Context.PluginNameSpace #>\r\n{\r\n    // <#= Context.PluginComment #>-<#= Context.ClassWithOrder #>\r\n}\r\n";
            var configJson = new ConfigJson
            {
                CustomTemplates = new System.Collections.Generic.List<CustomTemplate>
                {
                    new CustomTemplate { Type = "UiTest", Title = "Mine", Body = Helper.Compress(t4), IsDefault = false },
                },
            };
            File.WriteAllText(Path.Combine(_directory, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(configJson));

            var input = Input();
            input.TemplateTitle = "Mine";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_uiTestDirectory, "MyLoginTest.cs"));
            StringAssert.Contains(code, "// MINE");
            // The custom title renders through the FULL context — the
            // comment is the wizard's GetPluginCommentAsync("", "") (the
            // entity combo is collapsed), never the Name-when-Class-is-set
            // fallback of the other hosts.
            StringAssert.Contains(code, "// -MyLogin");
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
            var code = File.ReadAllText(Path.Combine(_uiTestDirectory, "MyLoginTest.cs"));
            StringAssert.Contains(code, "// FROMPATH MyLogin");
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
            StringAssert.Contains(result.Errors[0], "--name: required for template 'UiTest'");
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'UiTest'");
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
            var loginsDirectory = Path.Combine(_uiTestDirectory, "logins");
            Directory.CreateDirectory(loginsDirectory);

            var input = Input();
            input.OutputDirectory = loginsDirectory;
            input.ProjectName = "Dev.Contoso.UiTest";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(loginsDirectory, "MyLoginTest.cs"));
            StringAssert.Contains(code, "namespace Dev.Contoso.UiTest.logins");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var fullPath = Path.Combine(_uiTestDirectory, "MyLoginTest.cs");
            File.AppendAllText(fullPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.AreEqual("Skipped", second.Files.Single().Action);
            StringAssert.Contains(File.ReadAllText(fullPath), "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "UiTest",
                Order = 1,
                Name = "MyLogin",
                OutputDirectory = _uiTestDirectory,
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
