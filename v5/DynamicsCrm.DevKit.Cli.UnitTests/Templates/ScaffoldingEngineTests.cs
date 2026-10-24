using DynamicsCrm.DevKit.Shared.Templates;
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
        private string _directory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-engine-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_directory);
            TemplateManifests.Clear();
        }

        [TestCleanup]
        public void Cleanup()
        {
            TemplateManifests.Clear();
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
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput { TemplateId = "WebResourceTs", ProjectName = "X" });
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
        public async Task ScaffoldProjectAsync_RerunSkipsUserFiles()
        {
            var manifest = new TemplateManifest { TemplateId = "Shared", Kind = TemplateKind.Project };
            manifest.Files.Add(new TemplatePayloadFile
            {
                ResourceName = TemplatePayload.Prefix(TemplateKind.Project, "shared") + "generator.bat",
                TargetFileName = "$ProjectName$\\generator.bat",
                ReplaceParameters = true,
            });
            TemplateManifests.Register(manifest);

            var input = new ProjectTemplateInput { TemplateId = "Shared", ProjectName = "Contoso.Shared", OutputDirectory = _directory };
            var first = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            Assert.AreEqual(1, first.Files.Count(file => file.Action == "Created"));

            // A user edit must never be overwritten by a re-run.
            var generated = Path.Combine(_directory, "Contoso.Shared", "generator.bat");
            File.WriteAllText(generated, "rem customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            Assert.AreEqual("Skipped", second.Files[0].Action);
            Assert.AreEqual("rem customized by user", File.ReadAllText(generated));
        }

        [TestMethod]
        public async Task ScaffoldItemAsync_UnknownType_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput { TemplateId = "Nope", Name = "X" });
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "unknown item template");
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
