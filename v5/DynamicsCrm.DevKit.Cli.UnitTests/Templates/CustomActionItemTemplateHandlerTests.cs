using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.5 acceptance tests for the CustomAction item template: the T4
    /// render of CustomAction.tt (the payload stub is just $customaction$
    /// — the CLI writes the render directly), the $Class$$PluginOrder$.cs
    /// file-name contract (empty order suffix at 1), the wizard's "None"
    /// entity (the unbound custom action registration — logical name
    /// "none"), the offline mode of work unit §5 (typed values trusted,
    /// warning in the result), the custom T4 sources
    /// (DynamicsCrm.DevKit.Cli.json title and the direct --t4 path) and
    /// the project resolution (no project — no scaffold). The rendered
    /// class must parse cleanly (Roslyn) and carry the
    /// [CrmPluginRegistration] the wizard's FormPlugin produces with
    /// PluginType.CustomAction.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class CustomActionItemTemplateHandlerTests
    {
        private string _directory;
        private string _serverDirectory;
        private List<EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-customaction-handler-tests", Guid.NewGuid().ToString("N"));
            _serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(_serverDirectory);

            // The workspace: a solution plus the Shared project (the
            // using directive of CustomAction.tt) and the Server project
            // the item scaffolds into (no RootNamespace element — the
            // scanner falls back to the file name).
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Shared"));
            File.WriteAllText(Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj"), string.Empty);
            File.WriteAllText(Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // Offline tests never touch the org, but the handler reads the
            // cache when a service is present — keep it empty and restore.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata>();

            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup()
        {
            XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new List<EntityMetadata>();
            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            Directory.Delete(_directory, true);
        }

        private ItemTemplateInput Input(
            int order = 1,
            string entity = "Account",
            string message = "new_MyAction",
            string stage = "PreOperation",
            string execution = "Synchronous",
            string name = "PreAccountnew_MyActionSynchronous")
        {
            return new ItemTemplateInput
            {
                TemplateId = "CustomAction",
                Entity = entity,
                Message = message,
                Stage = stage,
                Execution = execution,
                Order = order,
                Name = name,
                Class = name,
                OutputDirectory = _serverDirectory,
                Offline = true,
                Transformer = new MonoTextTransformer(),
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_SingleTokenPayload()
        {
            var manifest = CustomActionItemTemplateHandler.CreateManifest();

            Assert.AreEqual("CustomAction", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            // CSharpCustomActionItemTemplate.vstemplate: one $customaction$
            // payload, named $Class$$PluginOrder$.cs (ReplaceParameters on).
            Assert.AreEqual("$Class$$PluginOrder$.cs", manifest.Files[0].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.customaction.Class.cs");
        }

        [TestMethod]
        public void NewList_ItemCustomActionIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "CustomAction"));
            Assert.IsNotNull(TemplateCatalog.Find("CustomAction", TemplateKind.Item));
        }

        [TestMethod]
        public void SuggestClassName_MirrorsFormPlugin()
        {
            // FormPlugin.UpdateClassName: the Operation suffix of the stage
            // is stripped; PreValidation keeps its name. The "None" entity
            // keeps its schema name — the unbound suggestion reads odd but
            // types exactly what the wizard types.
            Assert.AreEqual("PreAccountnew_MyActionSynchronous", CustomActionItemTemplateHandler.SuggestClassName("PreOperation", "Account", "new_MyAction", "Synchronous"));
            Assert.AreEqual("PreValidationAccountnew_MyActionSynchronous", CustomActionItemTemplateHandler.SuggestClassName("PreValidation", "Account", "new_MyAction", "Synchronous"));
            Assert.AreEqual("PostAccountnew_MyActionAsynchronous", CustomActionItemTemplateHandler.SuggestClassName("PostOperation", "Account", "new_MyAction", "Asynchronous"));
            Assert.AreEqual("PreNonenew_MyActionSynchronous", CustomActionItemTemplateHandler.SuggestClassName("PreOperation", "None", "new_MyAction", "Synchronous"));
        }

        [TestMethod]
        public void IsNoneEntity_AcceptsAnyCasingOfNone()
        {
            Assert.IsTrue(CustomActionItemTemplateHandler.IsNoneEntity("none"));
            Assert.IsTrue(CustomActionItemTemplateHandler.IsNoneEntity("None"));
            Assert.IsTrue(CustomActionItemTemplateHandler.IsNoneEntity(" NONE "));
            Assert.IsFalse(CustomActionItemTemplateHandler.IsNoneEntity("account"));
            Assert.IsFalse(CustomActionItemTemplateHandler.IsNoneEntity(null));
        }

        [TestMethod]
        public async Task PluginOrderToken_IsEmptyWhenOrderOne()
        {
            // The vstemplate names the file $Class$$PluginOrder$.cs with
            // $PluginOrder$ empty at order 1 — the first step of a class
            // has no file-name suffix.
            var tokens = new Dictionary<string, string>(StringComparer.Ordinal) { ["$Class$"] = "PreAccountnew_MyAction", ["$PluginOrder$"] = string.Empty };
            Assert.AreEqual("PreAccountnew_MyAction.cs", TokenEngine.ApplyReplacements("$Class$$PluginOrder$.cs", tokens));

            tokens["$PluginOrder$"] = "2";
            Assert.AreEqual("PreAccountnew_MyAction2.cs", TokenEngine.ApplyReplacements("$Class$$PluginOrder$.cs", tokens));
            await Task.CompletedTask;
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_RendersDefaultCustomAction_NoFileSuffixAtOrderOne()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("PreAccountnew_MyActionSynchronous.cs", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous.cs");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // Byte-faithful to Visual Studio: the payload stub carries a
            // BOM and the wizard writes one.
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual(0xEF, bytes[0]);
            Assert.AreEqual(0xBB, bytes[1]);
            Assert.AreEqual(0xBF, bytes[2]);

            // The offline warning of work unit §5: values typed, not
            // validated against the org.
            StringAssert.Contains(result.Warnings.Single(), "offline mode");

            var code = File.ReadAllText(fullPath);
            AssertCustomActionShape(code,
                registration: "[CrmPluginRegistration(\"new_MyAction\", \"account\", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, \"\", \"Dev.Contoso.Server.PreAccountnew_MyActionSynchronous\", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]",
                className: "PreAccountnew_MyActionSynchronous");
            AssertParsedWithoutErrors(code);

            // Offline: no org to read the request parameter doc from —
            // the comment block renders empty.
            Assert.IsFalse(code.Contains("InputParameters:"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_NoneEntity_UnboundRegistration()
        {
            // The wizard's "None" entity: the registration carries the
            // logical name "none" and the class suggestion embeds the
            // schema name "None".
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(
                entity: "none",
                name: "PreNonenew_MyActionSynchronous"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PreNonenew_MyActionSynchronous.cs"));
            StringAssert.Contains(code, "[CrmPluginRegistration(\"new_MyAction\", \"none\", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, \"\", \"Dev.Contoso.Server.PreNonenew_MyActionSynchronous\", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_OrderTwo_SuffixesFileAndClass()
        {
            // The wizard's multi-step classes keep the base class name and
            // let the order suffix the file and the declaration.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 2));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("PreAccountnew_MyActionSynchronous2.cs", result.Files.Single().FileName);

            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous2.cs"));
            AssertCustomActionShape(code,
                registration: "[CrmPluginRegistration(\"new_MyAction\", \"account\", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, \"\", \"Dev.Contoso.Server.PreAccountnew_MyActionSynchronous2\", 2, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]",
                className: "PreAccountnew_MyActionSynchronous2");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_PostOperationAsynchronous_CarriesDeleteAsyncOperation()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(
                entity: "Account",
                message: "new_MyAction",
                stage: "PostOperation",
                execution: "Asynchronous",
                name: "PostAccountnew_MyActionAsynchronous"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PostAccountnew_MyActionAsynchronous.cs"));
            StringAssert.Contains(code, "[CrmPluginRegistration(\"new_MyAction\", \"account\", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, \"\", \"Dev.Contoso.Server.PostAccountnew_MyActionAsynchronous\", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction, DeleteAsyncOperation = true)]");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var fullPath = Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous.cs");
            File.AppendAllText(fullPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.AreEqual("Skipped", second.Files.Single().Action);
            StringAssert.Contains(File.ReadAllText(fullPath), "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "CustomAction",
                Entity = "Account",
                Message = "new_MyAction",
                Stage = "PreOperation",
                Execution = "Synchronous",
                Order = 1,
                Name = "PreAccountnew_MyActionSynchronous",
                Class = "PreAccountnew_MyActionSynchronous",
                OutputDirectory = _serverDirectory,
                Offline = true,
                Force = true,
                Transformer = new MonoTextTransformer(),
            });
            Assert.AreEqual("Updated", forced.Files.Single().Action);
            Assert.IsFalse(File.ReadAllText(fullPath).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CustomT4_FromCliJson_RendersWithContext()
        {
            var t4 = "// MINE\r\nnamespace <#= Context.PluginNameSpace #>\r\n{\r\n    // <#= Context.PluginMessage #>-<#= Context.EntityLogicalName #>\r\n}\r\n";
            var configJson = new ConfigJson
            {
                CustomTemplates = new List<CustomTemplate>
                {
                    new CustomTemplate { Type = "CustomAction", Title = "Mine", Body = Helper.Compress(t4), IsDefault = false },
                },
            };
            File.WriteAllText(Path.Combine(_directory, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(configJson));

            var input = Input();
            input.TemplateTitle = "Mine";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous.cs"));
            StringAssert.Contains(code, "// MINE");
            // The custom title renders through the FULL context
            // (T4Helper.BuildConfigAsync twin) — message and entity present.
            StringAssert.Contains(code, "// new_MyAction-account");
            Assert.IsFalse(code.Contains("[CrmPluginRegistration("));
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
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous.cs"));
            StringAssert.Contains(code, "// FROMPATH PreAccountnew_MyActionSynchronous");
        }

        [TestMethod]
        public async Task ScaffoldAsync_T4PathMissing_Fails()
        {
            var input = Input();
            input.T4Path = Path.Combine(_directory, "Ghost.tt");
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--t4");
            StringAssert.Contains(result.Errors[0], "file not found");
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
        public async Task ScaffoldAsync_UnknownTemplateTitle_FallsBackToDefaultBody()
        {
            // The wizard falls back to the built-in body when the Cli.json
            // title is not found — while still rendering through the full
            // context (the title differs from "Default").
            var input = Input();
            input.TemplateTitle = "Ghost";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "PreAccountnew_MyActionSynchronous.cs"));
            StringAssert.Contains(code, "[CrmPluginRegistration(");
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'CustomAction'");
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
            // The subfolder target of a named project: the namespace is the
            // project's plus the folder suffix (VS composes the same).
            var stepsDirectory = Path.Combine(_serverDirectory, "steps");
            Directory.CreateDirectory(stepsDirectory);

            var input = Input();
            input.OutputDirectory = stepsDirectory;
            input.ProjectName = "Dev.Contoso.Server";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(stepsDirectory, "PreAccountnew_MyActionSynchronous.cs"));
            StringAssert.Contains(code, "namespace Dev.Contoso.Server.steps");
            StringAssert.Contains(code, "\"Dev.Contoso.Server.steps.PreAccountnew_MyActionSynchronous\"");
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

        [TestMethod]
        public async Task ScaffoldAsync_ValidationFailures()
        {
            var missingMessage = Input(message: null);
            var result = await ScaffoldingEngine.ScaffoldItemAsync(missingMessage);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--message: required for template 'CustomAction'.");

            var badStage = Input(stage: "Pre");
            result = await ScaffoldingEngine.ScaffoldItemAsync(badStage);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--stage 'Pre': invalid. Use PreValidation, PreOperation or PostOperation.");

            var badExecution = Input(execution: "Sometimes");
            result = await ScaffoldingEngine.ScaffoldItemAsync(badExecution);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--execution 'Sometimes': invalid. Use Synchronous or Asynchronous.");

            var asyncPreOp = Input(execution: "Asynchronous");
            result = await ScaffoldingEngine.ScaffoldItemAsync(asyncPreOp);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--execution 'Asynchronous': requires stage PostOperation");

            var zeroOrder = Input(order: 0);
            result = await ScaffoldingEngine.ScaffoldItemAsync(zeroOrder);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--order '0': invalid. Use a positive integer.");

            var missingEntity = Input(entity: null, name: "PreAccountnew_MyActionSynchronous");
            result = await ScaffoldingEngine.ScaffoldItemAsync(missingEntity);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--entity: required for template 'CustomAction'");
        }

        private static void AssertCustomActionShape(string code, string registration, string className)
        {
            StringAssert.Contains(code, "using Contoso.Shared;");
            StringAssert.Contains(code, "namespace Dev.Contoso.Server");
            StringAssert.Contains(code, registration);
            StringAssert.Contains(code, $"public class {className} : IPlugin");
            StringAssert.Contains(code, "tracing?.DebugContext(context);");
            StringAssert.Contains(code, "//YOUR CUSTOM ACTION BEGIN HERE");
        }

        /// <summary>
        /// The work unit's golden test: the render must be valid C# —
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
