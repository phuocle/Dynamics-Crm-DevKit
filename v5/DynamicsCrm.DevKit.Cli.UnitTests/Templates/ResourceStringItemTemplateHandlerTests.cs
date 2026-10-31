using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.11 acceptance tests for the ResourceString item template: the
    /// token-free ResourceString.resx payload copied verbatim (the
    /// wizard output drops the payload's BOM — the generated file starts
    /// directly with "<?xml", like the Test/UiTest items),
    /// the $Class$$PluginOrder$.$LanguageCode$.resx file-name contract
    /// (empty order suffix at 1), the relabeled dialog (FormPlugin
    /// .ResourceStringItem relabels the class textbox "Resouce" and the
    /// entity combo "Language" — the provisioned-language LCID), the
    /// missing-template-panel contract (no T4 — the handler needs no
    /// ITextTransformer and the catalog row says no custom T4) and the
    /// project resolution (no project — no scaffold). The output must be
    /// well-formed XML with the payload's four resheaders.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ResourceStringItemTemplateHandlerTests
    {
        private string _directory;
        private string _resourceDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-resourcestring-handler-tests", Guid.NewGuid().ToString("N"));
            _resourceDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(_resourceDirectory);

            // The workspace: a solution plus the project the item
            // scaffolds into (the resx needs no namespace, but the engine
            // resolves the project for EVERY item template).
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            File.WriteAllText(Path.Combine(_resourceDirectory, "Dev.Contoso.Server.csproj"),
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
            string name = "Account",
            string language = "1033",
            int order = 1)
        {
            return new ItemTemplateInput
            {
                TemplateId = "ResourceString",
                Name = name,
                Language = language,
                Order = order,
                OutputDirectory = _resourceDirectory,
                Offline = true,
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_SingleResourcePayload()
        {
            var manifest = ResourceStringItemTemplateHandler.CreateManifest();

            Assert.AreEqual("ResourceString", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            // CSharpResourceStringItemTemplate.vstemplate: one payload,
            // named $Class$$PluginOrder$.$LanguageCode$.resx
            // (ReplaceParameters on — the payload carries no token).
            Assert.AreEqual("$Class$$PluginOrder$.$LanguageCode$.resx", manifest.Files[0].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.resourcestring.ResourceString.resx");
        }

        [TestMethod]
        public void NewList_ItemResourceStringIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "ResourceString"));
            Assert.IsNotNull(TemplateCatalog.Find("ResourceString", TemplateKind.Item));
            // FormPlugin.Connection_Connected fills the language combo from
            // the org (RetrieveProvisionedLanguagesRequest) and OK stays
            // disabled until it loads — the catalog row says the same
            // (connection required). The template panel is hidden (no
            // custom T4).
            var descriptor = TemplateCatalog.Find("ResourceString", TemplateKind.Item);
            Assert.IsTrue(descriptor.RequiresConnection);
            Assert.IsFalse(descriptor.SupportsCustomT4);
        }

        [TestMethod]
        public async Task ScaffoldAsync_TypedNameAndLanguage_CopiesResxVerbatim()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("Account.1033.resx", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_resourceDirectory, "Account.1033.resx");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // Byte-faithful to the WIZARD OUTPUT, not the payload marker:
            // the Resource.1033.resx the current wizard produced starts
            // directly with "<?xml" — no BOM (like the Test/UiTest items;
            // unlike the payload-carrying LateBound stubs).
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual((byte)'<', bytes[0]);
            Assert.AreEqual((byte)'?', bytes[1]);
            var payload = await TemplatePayload.ReadContentAsync("Resources.templates.item.resourcestring.ResourceString.resx");
            Assert.AreEqual(payload.Content, File.ReadAllText(fullPath));

            // The work unit's golden test: the output must be well-formed
            // XML carrying the payload's resheaders and no data rows.
            var document = XDocument.Load(fullPath);
            var root = document.Root;
            Assert.IsNotNull(root);
            Assert.AreEqual("root", root.Name.LocalName);
            Assert.AreEqual(4, root.Elements("resheader").Count());
            Assert.IsFalse(root.Elements("data").Any());
            Assert.IsFalse(result.Warnings.Any(), string.Join("; ", result.Warnings));
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderTwo_SuffixGoesBeforeLanguage()
        {
            // $Class$$PluginOrder$.$LanguageCode$.resx — the order suffix
            // sits between the class name and the language code.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 2));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Account2.1033.resx", result.Files.Single().FileName);
        }

        [TestMethod]
        public async Task ScaffoldAsync_LanguagePicksTheLcid()
        {
            // $LanguageCode$ is the combo's LCID string — the file's only
            // other variable part.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(language: "1066"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Account.1066.resx", result.Files.Single().FileName);
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingLanguage_Fails()
        {
            var input = Input(language: null);
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--language: required for template 'ResourceString'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NonNumericLanguage_Fails()
        {
            // The wizard's combo only offers provisioned LCIDs — a typed
            // non-numeric language can never come from it.
            var input = Input(language: "abc");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--language 'abc': invalid.");
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
            StringAssert.Contains(result.Errors[0], "--name: required for template 'ResourceString'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoInputsAtAll_EngineGateFires()
        {
            // No name, no entity and no data source: the engine's own
            // gate fires first.
            var input = Input(name: null, language: null);
            input.Entity = null;
            input.DataSource = null;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name (or --entity): required");
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderZero_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 0));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--order '0': invalid. Use a positive integer.");
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'ResourceString'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var fullPath = Path.Combine(_resourceDirectory, "Account.1033.resx");
            File.AppendAllText(fullPath, "\r\n<!-- customized by user -->");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.AreEqual("Skipped", second.Files.Single().Action);
            StringAssert.Contains(File.ReadAllText(fullPath), "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "ResourceString",
                Order = 1,
                Name = "Account",
                Language = "1033",
                OutputDirectory = _resourceDirectory,
                Offline = true,
                Force = true,
            });
            Assert.AreEqual("Updated", forced.Files.Single().Action);
            Assert.IsFalse(File.ReadAllText(fullPath).Contains("customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoTransformerNeeded_Succeeds()
        {
            // The template panel is hidden (no custom T4) — the handler
            // never asks for an ITextTransformer, unlike the T4 items.
            var input = Input();
            input.Transformer = null;
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Account.1033.resx", result.Files.Single().FileName);
        }
    }
}
