using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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
    /// <summary>
    /// I.13 acceptance tests for the BatFile item template: the pick's
    /// subset of the five one-token payload placeholders written through
    /// the wizard's replacement (the batfile.bat payload renamed to the
    /// pick itself, the payload's trailing newline kept — devkit.js /
    /// devkit.d.ts / the readme md end with the payload's \r\n while the
    /// bat and the config json do not), the bat content carrying the CLI
    /// connection arguments (TokenEngine.ApplyCliConnectionArgs, the
    /// wizard's Replacement.ApplyCliConnectionArgs twin — the token
    /// stripped when there is no connection), the relabeled dialog
    /// (FormPlugin.BatFileItem relabels the entity combo "File" — the six
    /// static utility files, no org call — and hides the class, message,
    /// stage and execution fields and the template panel: no T4, no
    /// class, no order) and the project resolution (no project — no
    /// scaffold). The managed-identity resources carry a BOM; the config
    /// json output does not, while the readme md output DOES (Visual
    /// Studio saves the .md item output with a UTF-8 signature — wizard
    /// ground truth 2026-10-31, the only one of the five targets with
    /// one). An explicit connection embeds the CLI connection arguments
    /// in the bats; a UseProjectEnvironment connection (the wizard's
    /// DynamicsCrm.DevKit.json .env connections, the CLI's .env-only
    /// runs) strips the token — the bat picks the .env up at runtime.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class BatFileItemTemplateHandlerTests
    {
        private string _directory;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-batfile-handler-tests", Guid.NewGuid().ToString("N"));
            _projectDirectory = Path.Combine(_directory, "Dev.Contoso.WebResource");
            Directory.CreateDirectory(_projectDirectory);

            // The workspace: a solution plus the project the item
            // scaffolds into (the engine resolves the project for EVERY
            // item template).
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            File.WriteAllText(Path.Combine(_projectDirectory, "Dev.Contoso.WebResource.csproj"),
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

        private ItemTemplateInput Input(string name = "download.reports.bat")
        {
            return new ItemTemplateInput
            {
                TemplateId = "BatFile",
                Name = name,
                OutputDirectory = _projectDirectory,
                Offline = true,
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_FivePayloadEntries()
        {
            var manifest = BatFileItemTemplateHandler.CreateManifest();

            Assert.AreEqual("BatFile", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(5, manifest.Files.Count);
            // BatFileItemTemplate.vstemplate: batfile.bat carries the
            // variable $batfilename$ target, the other four are fixed
            // names (ReplaceParameters on — each payload is one token).
            Assert.AreEqual("$batfilename$", manifest.Files[0].TargetFileName);
            StringAssert.EndsWith(manifest.Files[0].ResourceName, "batfile.bat");
            Assert.AreEqual("devkit.js", manifest.Files[1].TargetFileName);
            Assert.AreEqual("devkit.d.ts", manifest.Files[2].TargetFileName);
            Assert.AreEqual("Plugin-Managed-Identity-Config.json", manifest.Files[3].TargetFileName);
            Assert.AreEqual("Plugin-Managed-Identity.md", manifest.Files[4].TargetFileName);
            Assert.IsTrue(manifest.Files.All(x => x.ReplaceParameters));
            Assert.IsTrue(manifest.Files.All(x => !x.IsGenerated));
        }

        [TestMethod]
        public void UtilityFiles_MatchTheWizardCombo()
        {
            // FormPlugin.Connection_Connected fills the "File" combo with
            // these six static choices, in order (the XrmEntity
            // LogicalName is the file name and the $batfilename$ value).
            CollectionAssert.AreEqual(new[]
            {
                "devkit.js",
                "download.reports.bat",
                "upload.reports.bat",
                "download.webresources.bat",
                "deploy.datasource.bat",
                "Plugin-Managed-Identity.ps1",
            }, BatFileItemTemplateHandler.UtilityFiles);
        }

        [TestMethod]
        public void NewList_ItemBatFileIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "BatFile"));
            Assert.IsNotNull(TemplateCatalog.Find("BatFile", TemplateKind.Item));
            // The wizard's combo is static (filled on connect without an
            // org call) — the catalog row says no connection requirement.
            // The template panel is hidden (no custom T4) and the item is
            // order 13 (there is no I.12).
            var descriptor = TemplateCatalog.Find("BatFile", TemplateKind.Item);
            Assert.IsFalse(descriptor.RequiresConnection);
            Assert.IsFalse(descriptor.SupportsCustomT4);
            Assert.AreEqual(13, descriptor.Order);
        }

        [TestMethod]
        public async Task ScaffoldAsync_BatPick_WritesTheRenamedPayloadWithConnectionArgs()
        {
            var input = Input();
            input.CrmConnection = new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://org.example.com",
                ClientId = "the-client-id",
                ClientSecret = "the-client-secret",
            };
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("download.reports.bat", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_projectDirectory, "download.reports.bat");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // The pick IS the target file name ($batfilename$) and the
            // CLI connection arguments ride in (the wizard dialog's
            // connection — CliArgsBuilder with the secrets encrypted).
            var content = File.ReadAllText(fullPath);
            Assert.IsTrue(content.Contains("devkit downloadreport --auth ClientSecret"), content);
            Assert.IsTrue(content.Contains("--url \"https://org.example.com\""), content);
            Assert.IsTrue(content.Contains("--clientid \"the-client-id\""), content);
            Assert.IsFalse(content.Contains("$CliConnectionArgs$"), content);

            // The payload placeholder is UTF-8 without BOM — the output
            // carries the payload's encoding, not the resource's.
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual((byte)'@', bytes[0]);
        }

        [TestMethod]
        public async Task ScaffoldAsync_BatPickWithoutConnection_StripsTheToken()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var fullPath = Path.Combine(_projectDirectory, "download.reports.bat");
            var content = File.ReadAllText(fullPath);

            // No connection: Replacement.ApplyCliConnectionArgs removes
            // the token (with its leading space) — the bare command line
            // stays runnable.
            var resource = await TemplatePayload.ReadSharedResourceAsync("bat.download.reports.bat");
            Assert.AreEqual(
                resource.Replace(" $CliConnectionArgs$", string.Empty).Replace("$CliConnectionArgs$", string.Empty),
                content);
        }

        [TestMethod]
        public async Task ScaffoldAsync_DevkitJsPick_WritesTheLibraryPair()
        {
            // The devkit.js pick excludes the batfile.bat payload
            // (BatFile.ShouldAdd — IsDevkitJs) and writes the two
            // library files with their fixed vstemplate names.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "devkit.js"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(2, result.Files.Count);
            Assert.AreEqual("devkit.js", result.Files[0].FileName);
            Assert.AreEqual("devkit.d.ts", result.Files[1].FileName);

            // The payload replacement keeps the placeholders' trailing
            // \r\n — the library files end with one newline more than
            // the resources carry.
            var js = File.ReadAllText(Path.Combine(_projectDirectory, "devkit.js"));
            var jsResource = await TemplatePayload.ReadSharedResourceAsync("js.devkit.js");
            Assert.AreEqual(jsResource + "\r\n", js);
            var dts = File.ReadAllText(Path.Combine(_projectDirectory, "devkit.d.ts"));
            var dtsResource = await TemplatePayload.ReadSharedResourceAsync("js.devkit.d.ts");
            Assert.AreEqual(dtsResource + "\r\n", dts);
        }

        [TestMethod]
        public async Task ScaffoldAsync_ManagedIdentityPick_WritesTheThreeFiles()
        {
            // The batfile.bat payload becomes Plugin-Managed-Identity.ps1
            // (the wizard's $batfilename$) plus the config json and the
            // readme md — the ps1 read raw (no connection args).
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "Plugin-Managed-Identity.ps1"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(3, result.Files.Count);
            Assert.AreEqual("Plugin-Managed-Identity.ps1", result.Files[0].FileName);
            Assert.AreEqual("Plugin-Managed-Identity-Config.json", result.Files[1].FileName);
            Assert.AreEqual("Plugin-Managed-Identity.md", result.Files[2].FileName);

            var ps1 = File.ReadAllText(Path.Combine(_projectDirectory, "Plugin-Managed-Identity.ps1"));
            Assert.AreEqual(await TemplatePayload.ReadSharedResourceAsync("ManagedIdentity.Plugin-Managed-Identity.ps1"), ps1);

            // The config json and the readme md resources carry a BOM —
            // neither output carries the resource's BOM. But the md IS
            // written with one: Visual Studio saves the .md item output
            // with a UTF-8 signature (wizard ground truth 2026-10-31) —
            // the only one of the five targets that gets one.
            var jsonBytes = File.ReadAllBytes(Path.Combine(_projectDirectory, "Plugin-Managed-Identity-Config.json"));
            Assert.AreNotEqual(0xEF, jsonBytes[0]);
            var json = File.ReadAllText(Path.Combine(_projectDirectory, "Plugin-Managed-Identity-Config.json"));
            var jsonResource = await TemplatePayload.ReadSharedResourceAsync("ManagedIdentity.Plugin-Managed-Identity-Config.json");
            Assert.AreEqual(jsonResource, json);
            var mdBytes = File.ReadAllBytes(Path.Combine(_projectDirectory, "Plugin-Managed-Identity.md"));
            Assert.AreEqual(0xEF, mdBytes[0]);
            Assert.AreEqual(0xBB, mdBytes[1]);
            Assert.AreEqual(0xBF, mdBytes[2]);
            var md = File.ReadAllText(Path.Combine(_projectDirectory, "Plugin-Managed-Identity.md"));
            var mdResource = await TemplatePayload.ReadSharedResourceAsync("ManagedIdentity.Plugin-Managed-Identity.md");
            Assert.AreEqual(mdResource + "\r\n", md);
        }

        [TestMethod]
        public async Task ScaffoldAsync_BatPickWithProjectEnvironmentConnection_StripsTheToken()
        {
            // The wizard's DynamicsCrm.DevKit.json connections carry
            // UseProjectEnvironment — CliArgsBuilder emits no arguments and
            // the bat picks the project .env up at runtime (the wizard's
            // byte output: the bare command line).
            var input = Input();
            input.CrmConnection = new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://org.example.com",
                UseProjectEnvironment = true,
            };
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var content = File.ReadAllText(Path.Combine(_projectDirectory, "download.reports.bat"));
            Assert.IsFalse(content.Contains("--auth"), content);
            Assert.IsFalse(content.Contains("--url"), content);
            Assert.IsFalse(content.Contains("$CliConnectionArgs$"), content);
        }

        [TestMethod]
        public async Task ScaffoldAsync_NameCaseInsensitive_Canonicalized()
        {
            // The wizard's combo only ever offers the six canonical names
            // — a typed flag resolves against the same list.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "DOWNLOAD.REPORTS.BAT"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("download.reports.bat", result.Files.Single().FileName);
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownName_Fails()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "deploy.reports.bat"));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name 'deploy.reports.bat': unknown — the wizard offers one of:");
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingName_EngineGateFires()
        {
            // BatFile has no entity, data source or test target — a
            // missing name always reaches the engine's own gate.
            var input = Input(name: null);
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'BatFile'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFilesSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "devkit.js"));
            var jsPath = Path.Combine(_projectDirectory, "devkit.js");
            File.AppendAllText(jsPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "devkit.js"));
            Assert.AreEqual(2, second.Files.Count);
            Assert.AreEqual("Skipped", second.Files[0].Action);
            Assert.AreEqual("Skipped", second.Files[1].Action);
            StringAssert.Contains(File.ReadAllText(jsPath), "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "BatFile",
                Name = "devkit.js",
                OutputDirectory = _projectDirectory,
                Offline = true,
                Force = true,
            });
            Assert.AreEqual(2, forced.Files.Count);
            Assert.AreEqual("Updated", forced.Files[0].Action);
            Assert.AreEqual("Updated", forced.Files[1].Action);
            Assert.IsFalse(File.ReadAllText(jsPath).Contains("customized by user"));
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
            Assert.AreEqual("download.reports.bat", result.Files.Single().FileName);
        }
    }
}
