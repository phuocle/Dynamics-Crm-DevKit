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
    /// I.7 acceptance tests for the Workflow item template: the T4
    /// render of Workflow.tt (the payload stub is just $workflow$ — the
    /// CLI writes the render directly), the $Class$$PluginOrder$.cs
    /// file-name contract (empty order suffix at 1), the collapsed
    /// dialog (FormPlugin.WorkflowItem hides the entity, message, stage
    /// and execution combos — the class name is the only input and
    /// nothing is read from the org, so connected and offline renders
    /// are identical and no offline warning fires), the class-only
    /// context of the Default title (T4Helper.BuildClassContextAsync —
    /// the comment never leaks in) versus the full context of a custom
    /// title (where the wizard's comment is GetPluginCommentAsync("",
    /// "") — the empty string), the custom T4 sources
    /// (DynamicsCrm.DevKit.Cli.json title and the direct --t4 path) and
    /// the project resolution (no project — no scaffold). The rendered
    /// class must parse cleanly (Roslyn) and carry the
    /// [CrmPluginRegistration] the wizard's FormPlugin produces with
    /// PluginType.Workflow.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class WorkflowItemTemplateHandlerTests
    {
        private string _directory;
        private string _serverDirectory;
        private System.Collections.Generic.List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-workflow-handler-tests", Guid.NewGuid().ToString("N"));
            _serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(_serverDirectory);

            // The workspace: a solution plus the Shared project (the
            // using directive of Workflow.tt) and the Server project
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

        private ItemTemplateInput Input(
            int order = 1,
            string entity = null,
            string message = null,
            string stage = null,
            string execution = null,
            string name = "MyWorkflow")
        {
            return new ItemTemplateInput
            {
                TemplateId = "Workflow",
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
            var manifest = WorkflowItemTemplateHandler.CreateManifest();

            Assert.AreEqual("Workflow", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            // CSharpWorkflowItemTemplate.vstemplate: one $workflow$
            // payload, named $Class$$PluginOrder$.cs (ReplaceParameters on).
            Assert.AreEqual("$Class$$PluginOrder$.cs", manifest.Files[0].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.workflow.Class.cs");
        }

        [TestMethod]
        public void NewList_ItemWorkflowIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "Workflow"));
            Assert.IsNotNull(TemplateCatalog.Find("Workflow", TemplateKind.Item));
        }

        [TestMethod]
        public async Task PluginOrderToken_IsEmptyWhenOrderOne()
        {
            // The vstemplate names the file $Class$$PluginOrder$.cs with
            // $PluginOrder$ empty at order 1 — the first class of a name
            // has no file-name suffix.
            var tokens = new System.Collections.Generic.Dictionary<string, string>(StringComparer.Ordinal) { ["$Class$"] = "MyWorkflow", ["$PluginOrder$"] = string.Empty };
            Assert.AreEqual("MyWorkflow.cs", TokenEngine.ApplyReplacements("$Class$$PluginOrder$.cs", tokens));

            tokens["$PluginOrder$"] = "2";
            Assert.AreEqual("MyWorkflow2.cs", TokenEngine.ApplyReplacements("$Class$$PluginOrder$.cs", tokens));
            await Task.CompletedTask;
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_RendersDefaultWorkflow_NoFileSuffixAtOrderOne()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var file = result.Files.Single();
            Assert.AreEqual("MyWorkflow.cs", file.FileName);
            Assert.AreEqual("Created", file.Action);
            var fullPath = Path.Combine(_serverDirectory, "MyWorkflow.cs");
            Assert.AreEqual(fullPath, file.FilePath);
            Assert.IsTrue(File.Exists(fullPath));

            // Byte-faithful to Visual Studio: the payload stub carries a
            // BOM and the wizard writes one.
            var bytes = File.ReadAllBytes(fullPath);
            Assert.AreEqual(0xEF, bytes[0]);
            Assert.AreEqual(0xBB, bytes[1]);
            Assert.AreEqual(0xBF, bytes[2]);

            // The wizard reads nothing from the org for a workflow
            // activity (FormPlugin.Connection_Connected has no Workflow
            // branch) — so there is no offline warning: the connected and
            // offline renders are identical.
            Assert.IsFalse(result.Warnings.Any(), string.Join("; ", result.Warnings));

            var code = File.ReadAllText(fullPath);
            AssertWorkflowShape(code,
                registration: "[CrmPluginRegistration(\"MyWorkflow\", \"MyWorkflow\", \"\", \"Dev.Contoso.Server\", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]",
                className: "MyWorkflow");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Offline_OrderTwo_SuffixesFileAndClass()
        {
            // The wizard's multi-class names keep the base class name and
            // let the order suffix the file and the declaration.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(order: 2));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("MyWorkflow2.cs", result.Files.Single().FileName);

            var code = File.ReadAllText(Path.Combine(_serverDirectory, "MyWorkflow2.cs"));
            AssertWorkflowShape(code,
                registration: "[CrmPluginRegistration(\"MyWorkflow2\", \"MyWorkflow2\", \"\", \"Dev.Contoso.Server\", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]",
                className: "MyWorkflow2");
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_EntityMessageStageExecutionAreIgnored()
        {
            // FormPlugin.WorkflowItem collapses all four org combos — a
            // workflow activity registration has no entity, message,
            // stage or execution. Values typed at the CLI must not leak
            // into the render.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(
                entity: "Account",
                message: "Create",
                stage: "PostOperation",
                execution: "Asynchronous",
                name: "MyWorkflow"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "MyWorkflow.cs"));
            StringAssert.Contains(code, "[CrmPluginRegistration(\"MyWorkflow\", \"MyWorkflow\", \"\", \"Dev.Contoso.Server\", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]");
            Assert.IsFalse(code.Contains("StageEnum"));
            Assert.IsFalse(code.Contains("ExecutionModeEnum"));
            AssertParsedWithoutErrors(code);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_UnlessForced()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            var fullPath = Path.Combine(_serverDirectory, "MyWorkflow.cs");
            File.AppendAllText(fullPath, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());
            Assert.AreEqual("Skipped", second.Files.Single().Action);
            StringAssert.Contains(File.ReadAllText(fullPath), "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
            {
                TemplateId = "Workflow",
                Order = 1,
                Name = "MyWorkflow",
                Class = "MyWorkflow",
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
            var t4 = "// MINE\r\nnamespace <#= Context.PluginNameSpace #>\r\n{\r\n    // <#= Context.PluginComment #>-<#= Context.ClassWithOrder #>\r\n}\r\n";
            var configJson = new ConfigJson
            {
                CustomTemplates = new System.Collections.Generic.List<CustomTemplate>
                {
                    new CustomTemplate { Type = "Workflow", Title = "Mine", Body = Helper.Compress(t4), IsDefault = false },
                },
            };
            File.WriteAllText(Path.Combine(_directory, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(configJson));

            var input = Input();
            input.TemplateTitle = "Mine";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "MyWorkflow.cs"));
            StringAssert.Contains(code, "// MINE");
            // The custom title renders through the FULL context
            // (T4Helper.BuildContextAsync twin) — and the wizard's
            // comment for a workflow activity is the empty string
            // (GetPluginCommentAsync("", "")), never the Name fallback.
            StringAssert.Contains(code, "// -MyWorkflow");
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
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "MyWorkflow.cs"));
            StringAssert.Contains(code, "// FROMPATH MyWorkflow");
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
            var code = File.ReadAllText(Path.Combine(_serverDirectory, "MyWorkflow.cs"));
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
            StringAssert.Contains(result.Errors[0], "--project: required for item template 'Workflow'");
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
            // project's plus the folder suffix (VS composes the same) —
            // and Workflow.tt registers under the namespace as its fourth
            // argument, so the folder suffix shows up in the attribute.
            var stepsDirectory = Path.Combine(_serverDirectory, "steps");
            Directory.CreateDirectory(stepsDirectory);

            var input = Input();
            input.OutputDirectory = stepsDirectory;
            input.ProjectName = "Dev.Contoso.Server";
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var code = File.ReadAllText(Path.Combine(stepsDirectory, "MyWorkflow.cs"));
            StringAssert.Contains(code, "namespace Dev.Contoso.Server.steps");
            StringAssert.Contains(code, "[CrmPluginRegistration(\"MyWorkflow\", \"MyWorkflow\", \"\", \"Dev.Contoso.Server.steps\", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]");
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
            // No name and no entity: the engine's own gate fires first.
            var missingName = Input(name: null);
            var result = await ScaffoldingEngine.ScaffoldItemAsync(missingName);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name (or --entity): required");

            // A name remains the only handler-level requirement — with an
            // entity set the engine gate passes and the handler's message
            // names the template.
            var nameWithEntity = Input(name: null, entity: "Account");
            result = await ScaffoldingEngine.ScaffoldItemAsync(nameWithEntity);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name: required for template 'Workflow'");

            var zeroOrder = Input(order: 0);
            result = await ScaffoldingEngine.ScaffoldItemAsync(zeroOrder);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--order '0': invalid. Use a positive integer.");
        }

        private static void AssertWorkflowShape(string code, string registration, string className)
        {
            StringAssert.Contains(code, "using Contoso.Shared;");
            StringAssert.Contains(code, "using System.Activities;");
            StringAssert.Contains(code, "using Microsoft.Xrm.Sdk.Workflow;");
            StringAssert.Contains(code, "namespace Dev.Contoso.Server");
            StringAssert.Contains(code, registration);
            StringAssert.Contains(code, $"public class {className} : CodeActivity");
            StringAssert.Contains(code, "tracing?.DebugContext(workflowContext);");
            StringAssert.Contains(code, "ExecuteWorkflow");
            StringAssert.Contains(code, "//YOUR WORKFLOW-CODE GO HERE");
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
