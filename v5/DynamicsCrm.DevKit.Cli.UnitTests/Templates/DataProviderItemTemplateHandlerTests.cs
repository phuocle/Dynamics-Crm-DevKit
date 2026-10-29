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
    /// I.8 acceptance tests for the DataProvider item template: the five
    /// T4 renders of DataProvider{Create,Update,Delete,Retrieve,
    /// RetrieveMultiple}.tt (the payload stubs are just
    /// $DataProvider{SubType}$ tokens — the CLI writes the renders
    /// directly), the five fixed {SubType}.cs file names (the classes are
    /// named in the templates themselves — the dialog's class field is
    /// collapsed, so --name/--order change nothing), the collapsed dialog
    /// (FormPlugin.DataProviderItem relabels the entity combo "Data
    /// Source", fills it from Metadata.GetAllDataSourceAsync and hides
    /// the class, message, stage and execution fields — the data source
    /// logical name is the only input), the hidden template panel (no
    /// --template/--t4 — the wizard renders the five built-in templates
    /// only) and the project resolution (no project — no scaffold). The
    /// rendered classes must parse cleanly (Roslyn) and carry the
    /// [CrmPluginRegistration] the wizard's FormPlugin produces with
    /// PluginType.DataProvider and the selected DataSource.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class DataProviderItemTemplateHandlerTests
    {
        private string _directory;
        private string _serverDirectory;
        private System.Collections.Generic.List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-dataprovider-handler-tests", Guid.NewGuid().ToString("N"));
            _serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(_serverDirectory);

            // The workspace: a solution plus the Shared project (the
            // using directive of the five templates) and the Server
            // project the items scaffold into (no RootNamespace element —
            // the scanner falls back to the file name).
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Shared"));
            File.WriteAllText(Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj"), string.Empty);
            File.WriteAllText(Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

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

        private ItemTemplateInput Input(string dataSource = "contoso_datasource")
        {
            return new ItemTemplateInput
            {
                TemplateId = "DataProvider",
                DataSource = dataSource,
                OutputDirectory = _serverDirectory,
                Offline = true,
                Transformer = new MonoTextTransformer(),
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_FiveFixedNameFiles()
        {
            var manifest = DataProviderItemTemplateHandler.CreateManifest();

            Assert.AreEqual("DataProvider", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(5, manifest.Files.Count);
            // CSharpDataProviderItemTemplate.vstemplate: five payload
            // stubs, each just the $DataProvider{SubType}$ token, each
            // named {SubType}.cs (ReplaceParameters on, no $Class$).
            var expected = new[] { "Retrieve", "RetrieveMultiple", "Create", "Update", "Delete" };
            for (var i = 0; i < expected.Length; i++)
            {
                Assert.AreEqual(expected[i] + ".cs", manifest.Files[i].TargetFileName);
                Assert.IsTrue(manifest.Files[i].ReplaceParameters);
                Assert.IsFalse(manifest.Files[i].IsGenerated);
                StringAssert.StartsWith(manifest.Files[i].ResourceName, "Resources.templates.item.dataprovider." + expected[i] + ".cs");
            }
        }

        [TestMethod]
        public void NewList_ItemDataProviderIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "DataProvider"));
            Assert.IsNotNull(TemplateCatalog.Find("DataProvider", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_RendersAllFiveFiles()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(5, result.Files.Count);
            // The vstemplate's five fixed TargetFileNames — no $Class$,
            // no order suffix.
            CollectionAssert.AreEquivalent(
                new[] { "Retrieve.cs", "RetrieveMultiple.cs", "Create.cs", "Update.cs", "Delete.cs" },
                result.Files.Select(x => x.FileName).ToArray());
            Assert.IsTrue(result.Files.All(x => x.Action == "Created"), string.Join("; ", result.Files.Select(x => $"{x.FileName}:{x.Action}")));
            foreach (var file in result.Files)
            {
                Assert.IsTrue(File.Exists(file.FilePath), file.FilePath);
            }

            // Byte-faithful to Visual Studio: the payload stubs carry a
            // BOM and the wizard writes one.
            var bytes = File.ReadAllBytes(result.Files[0].FilePath);
            Assert.AreEqual(0xEF, bytes[0]);
            Assert.AreEqual(0xBB, bytes[1]);
            Assert.AreEqual(0xBF, bytes[2]);

            // The five classes are hard-coded in the templates — the
            // collapsed dialog contributes nothing else to render, so
            // there is no offline warning: the connected and offline
            // renders are identical.
            Assert.IsFalse(result.Warnings.Any(), string.Join("; ", result.Warnings));
        }

        [TestMethod]
        public async Task ScaffoldAsync_DataSourceFlowsIntoAllFiveRegistrations()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            foreach (var subType in new[] { "Retrieve", "RetrieveMultiple", "Create", "Update", "Delete" })
            {
                var code = File.ReadAllText(Path.Combine(_serverDirectory, subType + ".cs"));
                StringAssert.Contains(code, "using Contoso.Shared;");
                StringAssert.Contains(code, "using Microsoft.Xrm.Sdk.Extensions;");
                StringAssert.Contains(code, "namespace Dev.Contoso.Server");
                StringAssert.Contains(code, $"[CrmPluginRegistration(\"Dev.Contoso.Server.{subType}\", \"{subType}\", PluginType.DataProvider, DataSource = \"contoso_datasource\")]");
                StringAssert.Contains(code, $"public class {subType} : IPlugin");
                StringAssert.Contains(code, "GetExecutionContext7");
                AssertParsedWithoutErrors(code);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_NameOrderEntityMessageStageExecutionAreIgnored()
        {
            // FormPlugin.DataProviderItem collapses the class, message,
            // stage and execution fields and the dialog carries no order —
            // the five class names live in the templates themselves.
            // Values typed at the CLI must not leak into the render.
            var input = Input();
            input.Name = "MyProvider";
            input.Class = "MyProvider";
            input.Order = 2;
            input.Entity = "Account";
            input.Message = "Create";
            input.Stage = "PostOperation";
            input.Execution = "Asynchronous";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            CollectionAssert.AreEquivalent(
                new[] { "Retrieve.cs", "RetrieveMultiple.cs", "Create.cs", "Update.cs", "Delete.cs" },
                result.Files.Select(x => x.FileName).ToArray());
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "Create.cs"));
            StringAssert.Contains(code, "[CrmPluginRegistration(\"Dev.Contoso.Server.Create\", \"Create\", PluginType.DataProvider, DataSource = \"contoso_datasource\")]");
            StringAssert.Contains(code, "public class Create : IPlugin");
            Assert.IsFalse(code.Contains("MyProvider"));
            Assert.IsFalse(code.Contains("StageEnum"));
            Assert.IsFalse(code.Contains("ExecutionModeEnum"));
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFilesSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var createPath = Path.Combine(_serverDirectory, "Create.cs");
            File.AppendAllText(createPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.IsTrue(second.Files.All(x => x.Action == "Skipped"), string.Join("; ", second.Files.Select(x => $"{x.FileName}:{x.Action}")));
            StringAssert.Contains(File.ReadAllText(createPath), "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "DataProvider",
                DataSource = "contoso_datasource",
                OutputDirectory = _serverDirectory,
                Offline = true,
                Force = true,
                Transformer = new MonoTextTransformer(),
            });
            Assert.IsTrue(forced.Files.All(x => x.Action == "Updated"), string.Join("; ", forced.Files.Select(x => $"{x.FileName}:{x.Action}")));
            Assert.IsFalse(File.ReadAllText(createPath).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_CompletesMissingFiles()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.Delete(Path.Combine(_serverDirectory, "Retrieve.cs"));
            File.Delete(Path.Combine(_serverDirectory, "RetrieveMultiple.cs"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(second.Success, string.Join("; ", second.Errors));
            var actions = second.Files.ToDictionary(x => x.FileName, x => x.Action);
            Assert.AreEqual("Created", actions["Retrieve.cs"]);
            Assert.AreEqual("Created", actions["RetrieveMultiple.cs"]);
            Assert.AreEqual("Skipped", actions["Create.cs"]);
            Assert.AreEqual("Skipped", actions["Update.cs"]);
            Assert.AreEqual("Skipped", actions["Delete.cs"]);
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingDataSource_Fails()
        {
            // The data source is the dialog's only input — with a name
            // set the engine's own gate passes and the handler's message
            // names the template.
            var input = Input(dataSource: null);
            input.Name = "MyProvider";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--datasource: required for template 'DataProvider'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoInputsAtAll_EngineGateFires()
        {
            // No name, no entity and no data source: the engine's own
            // gate fires first.
            var input = Input(dataSource: null);
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name (or --entity): required");
        }

        [TestMethod]
        public async Task ScaffoldAsync_CustomT4Title_NotSupported()
        {
            // The wizard's template panel is hidden for a data provider
            // and its renderer reads the five built-in resources only.
            var input = Input();
            input.TemplateTitle = "Mine";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--template/--t4: not supported for template 'DataProvider'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_T4Path_NotSupported()
        {
            var input = Input();
            input.T4Path = Path.Combine(_directory, "My.tt");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--template/--t4: not supported for template 'DataProvider'");
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'DataProvider'");
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
        public async Task ScaffoldAsync_NamedProject_ReadsNamespaceFromProjectFile()
        {
            // The subfolder target of a named project: the namespace is
            // the project's plus the folder suffix (VS composes the same)
            // — and the templates register under the namespace as the
            // first attribute argument, so the suffix shows up there.
            var stepsDirectory = Path.Combine(_serverDirectory, "steps");
            Directory.CreateDirectory(stepsDirectory);

            var input = Input();
            input.OutputDirectory = stepsDirectory;
            input.ProjectName = "Dev.Contoso.Server";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(5, result.Files.Count);
            var code = File.ReadAllText(Path.Combine(stepsDirectory, "Retrieve.cs"));
            StringAssert.Contains(code, "namespace Dev.Contoso.Server.steps");
            StringAssert.Contains(code, "[CrmPluginRegistration(\"Dev.Contoso.Server.steps.Retrieve\", \"Retrieve\", PluginType.DataProvider, DataSource = \"contoso_datasource\")]");
            AssertParsedWithoutErrors(code);
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
