using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    [DoNotParallelize]
    public class ScaffoldingEngineTests
    {
        /// <summary>
        /// Minimal handler used to prove the registries are kind-scoped:
        /// the real handlers all live behind RegisterAll (no test registers
        /// one directly), so a stub keeps this test independent of them.
        /// </summary>
        private sealed class StubHandler : ITemplateHandler
        {
            public string TemplateId { get; set; }

            public Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
            {
                return Task.FromResult(new ScaffoldResult { TemplateId = TemplateId });
            }
        }

        private string _directory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-engine-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_directory);
            TemplateManifests.Clear();
            // This class exercises the manifest-fallback path, so any real
            // handler registered for a template id (Shared since P.1) must go.
            ScaffoldingEngine.ClearHandlers();
        }

        [TestCleanup]
        public void Cleanup()
        {
            TemplateManifests.Clear();
            ScaffoldingEngine.ClearHandlers();
            Directory.Delete(_directory, true);
        }

        [TestMethod]
        public async Task ScaffoldProjectAsync_UnknownType_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput { TemplateId = "Bogus", ProjectName = "X" });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "unknown project template");
        }

        [TestMethod]
        public async Task ScaffoldProjectAsync_MissingName_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput { TemplateId = "Shared" });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name");
        }

        [TestMethod]
        public async Task ScaffoldProjectAsync_NotImplemented_FailsGracefully()
        {
            // All 13 project templates have handlers since P.12 (Report was
            // the last) — the fixture keeps a real template id so the
            // not-implemented fallback stays exercised: this class clears
            // the handlers in TestInitialize, so "Report" reaches the
            // manifest-less error branch it asserts.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput { TemplateId = "Report", ProjectName = "X", Offline = true });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "not implemented yet");
        }

        [TestMethod]
        public async Task ScaffoldProjectAsync_RendersRegisteredManifest()
        {
            // Real embedded payload of the Shared project template (01).
            var manifest = new TemplateManifest { TemplateId = "Shared", Kind = TemplateKind.Project };
            manifest.Files.Add(new TemplatePayloadFile
            {
                ResourceName = TemplatePayload.Prefix(TemplateKind.Project, "shared") + "generator.bat",
                TargetFileName = "$ProjectName$\\generator.bat",
                ReplaceParameters = true,
            });
            TemplateManifests.Register(manifest);

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
            {
                TemplateId = "Shared",
                ProjectName = "Contoso.Shared",
                OutputDirectory = _directory,
                Offline = true,
            });

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var generated = Path.Combine(_directory, "Contoso.Shared", "generator.bat");
            Assert.IsTrue(File.Exists(generated));
            var content = File.ReadAllText(generated);
            // The payload token resolves to the real late-bound generator bat
            // with the connection placeholder removed (no connection given).
            Assert.IsFalse(content.Contains("$generator.latebound.bat$"));
            Assert.IsFalse(content.Contains("$CliConnectionArgs$"));
            StringAssert.Contains(content, "devkit");
        }

        [TestMethod]
        public async Task ScaffoldProjectAsync_RerunFailsWithAlreadyExists()
        {
            // Run-once (aP): the second scaffold over an existing project
            // fails - the CLI has no --force and nothing is touched.
            var manifest = new TemplateManifest { TemplateId = "Shared", Kind = TemplateKind.Project };
            manifest.Files.Add(new TemplatePayloadFile
            {
                ResourceName = TemplatePayload.Prefix(TemplateKind.Project, "shared") + "generator.bat",
                TargetFileName = "$ProjectName$\\generator.bat",
                ReplaceParameters = true,
            });
            TemplateManifests.Register(manifest);

            var input = new ProjectTemplateInput { TemplateId = "Shared", ProjectName = "Contoso.Shared", OutputDirectory = _directory, Offline = true };
            var first = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            Assert.AreEqual(1, first.Files.Count(file => file.Action == "Created"));

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_UnknownType_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Nope", Name = "X" });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "unknown item template");
        }

        [TestMethod]
        public void Registry_RegistrationsAreKindScoped()
        {
            // Test/UiTest/Report exist in BOTH catalogs — a project
            // registration must never answer for the item id of the same
            // name (the registries key on (Kind, TemplateId)).
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new StubHandler { TemplateId = "Test" });
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Project, "Test"));
            Assert.IsNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "Test"));

            var manifest = new TemplateManifest { TemplateId = "Test", Kind = TemplateKind.Project };
            TemplateManifests.Register(manifest);
            Assert.IsTrue(TemplateManifests.TryGet(TemplateKind.Project, "Test", out _));
            Assert.IsFalse(TemplateManifests.TryGet(TemplateKind.Item, "Test", out _));
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_ProjectIdCollision_DoesNotDispatchProjectHandler()
        {
            // Locks the live bug found by the P.1..P.13 review: before the
            // registries became kind-scoped, 'devkit new --kind item --type
            // Test' dispatched into the PROJECT Test handler (ProjectInput
            // null → "input: required") and 'devkit new list' lit item
            // Test/UiTest/Report as Ready even though I.* is not ported.
            // Items scaffold into a project (required, engine gate) — the
            // fixture carries one.
            File.WriteAllText(Path.Combine(_directory, "Contoso.Server.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");
            TemplateHandlers.RegisterAll();
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Test", Name = "Account", Offline = true, OutputDirectory = _directory });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "not implemented yet");
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_NoProject_FailsForEveryItem()
        {
            // aP ruling (2026-10-28): every I* item template REQUIRES a
            // project — the wizard always knows it (Solution Explorer
            // selection). Nothing resolves at/above the target → error
            // and stop, before any handler runs.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Test", Name = "Account", Offline = true, OutputDirectory = _directory });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'Test'");
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_NamedProjectNotFound_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Test", Name = "Account", Offline = true, OutputDirectory = _directory, ProjectName = "Ghost.Project" });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--project 'Ghost.Project': project not found");
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_ResolvesProjectFileAndNamespace()
        {
            // The engine reads the data from the project file: the
            // resolved file reaches the request and the RootNamespace
            // derives from its RootNamespace element.
            File.WriteAllText(Path.Combine(_directory, "Contoso.Server.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n    <RootNamespace>Dev.Contoso.Server</RootNamespace>\r\n  </PropertyGroup>\r\n</Project>");
            string seenProjectFile = null;
            string seenNamespace = null;
            ScaffoldingEngine.RegisterHandler(TemplateKind.Item, new CapturingHandler(request =>
            {
                seenProjectFile = request.ProjectFile;
                seenNamespace = request.ItemInput.RootNamespace;
            }));
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Test", Name = "Account", Offline = true, OutputDirectory = _directory });

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(Path.Combine(_directory, "Contoso.Server.csproj"), seenProjectFile);
            Assert.AreEqual("Dev.Contoso.Server", seenNamespace);
        }

        private sealed class CapturingHandler : ITemplateHandler
        {
            private readonly Action<ScaffoldRequest> _capture;

            public CapturingHandler(Action<ScaffoldRequest> capture)
            {
                _capture = capture;
            }

            public string TemplateId { get { return "Test"; } }

            public Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
            {
                _capture(request);
                return Task.FromResult(new ScaffoldResult { TemplateId = TemplateId });
            }
        }

        [TestMethod]
        public void TemplateCatalog_HasAllThirtyTemplates()
        {
            Assert.AreEqual(30, TemplateCatalog.All.Count);
            Assert.AreEqual(13, TemplateCatalog.OfKind(TemplateKind.Project).Count());
            Assert.AreEqual(17, TemplateCatalog.OfKind(TemplateKind.Item).Count());

            // Original VSIX numbering is preserved: item order 12 does not exist.
            var itemOrders = TemplateCatalog.OfKind(TemplateKind.Item).Select(x => x.Order).ToList();
            CollectionAssert.AllItemsAreUnique(itemOrders);
            Assert.IsFalse(itemOrders.Contains(12));
            Assert.IsTrue(itemOrders.Contains(13));
            Assert.IsTrue(itemOrders.Contains(18));
        }

        [TestMethod]
        public void TemplateCatalog_FindIsCaseInsensitiveAndKindAware()
        {
            Assert.IsNotNull(TemplateCatalog.Find("shared", TemplateKind.Project));
            Assert.IsNull(TemplateCatalog.Find("shared", TemplateKind.Item));
            Assert.IsNotNull(TemplateCatalog.Find("tsform", TemplateKind.Item));
        }

        [TestMethod]
        public void TemplatePayload_ListsEmbeddedPayloads()
        {
            var sharedFiles = TemplatePayload.List(TemplateKind.Project, "shared");
            Assert.IsTrue(sharedFiles.Contains("PluginCore.cs"));
            Assert.IsTrue(sharedFiles.Contains("generator.bat"));

            var pluginFiles = TemplatePayload.List(TemplateKind.Item, "plugin");
            Assert.IsTrue(pluginFiles.Contains("Class.cs"));

            var reportFiles = TemplatePayload.List(TemplateKind.Item, "report");
            Assert.AreEqual(0, reportFiles.Count);
        }

        [TestMethod]
        public async Task TemplatePayload_ReadsDefaultT4Templates()
        {
            var pluginTt = await TemplatePayload.ReadSharedResourceAsync("tt.Plugin.tt");
            Assert.IsFalse(string.IsNullOrEmpty(pluginTt));
            StringAssert.Contains(pluginTt, "CrmPluginRegistration");

            var dataProviderTt = await TemplatePayload.ReadSharedResourceAsync("tt.DataProviderCreate.tt");
            Assert.IsFalse(string.IsNullOrEmpty(dataProviderTt));
        }
    }
}
