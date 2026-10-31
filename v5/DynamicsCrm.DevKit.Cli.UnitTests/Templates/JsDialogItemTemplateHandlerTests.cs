using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.17 acceptance tests for the JsDialog item template: the three
    /// payload files of CSharpJsDialogItemTemplate.vstemplate — the user
    /// file {Dialog}.js (the CodeGenService.GetDefaultJsDialogFileAsync
    /// skeleton, the wizard's $JavaScript$), the generated twin
    /// {Dialog}.dialog.js (Logic.JsDialog.GetJsDialogCodeAsync's code, the
    /// DevKitDialog LoadFormDialog class off the picked dialog's FormXml,
    /// the wizard's $JavaScriptDialog$) and the generated typing twin
    /// {Dialog}.dialog.d.ts (the same call's dts, the typed IDialog
    /// control interface and the dialog class declaration, the wizard's
    /// $TypeScriptDialog$) — all named by the picked SystemForm.UniqueName,
    /// with the VSIX idempotency semantics (user file never overwritten
    /// unless force, twins rewritten only when their real content changed —
    /// the wizard's WriteTargetFileIfChangedAsync ordinal compare). The
    /// dialog resolution has no offline cache, so the tests seed the
    /// dialog list through the handler's GetDialogFormsAsync seam instead
    /// of a ServiceClient (the input model's service is the concrete
    /// class).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class JsDialogItemTemplateHandlerTests
    {
        private string _directory;
        private string _entitiesDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-jsdialog-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResourceJs");
            _entitiesDirectory = Path.Combine(webResourceDirectory, "entities");
            Directory.CreateDirectory(_entitiesDirectory);
            // SDK-style csproj above the target folder — the engine resolves
            // the project (and its RootNamespace) walking up from --out.
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResourceJs.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

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

        /// <summary>
        /// The resolution seam: the fake answers the "org read" with the
        /// seeded dialogs, so the scaffold runs connected-free. The real
        /// handler's refusal without a ServiceClient keeps its own test.
        /// </summary>
        private sealed class FakeDialogHandler : JsDialogItemTemplateHandler
        {
            private readonly List<SystemForm> _dialogs;

            public FakeDialogHandler(params SystemForm[] dialogs)
            {
                _dialogs = new List<SystemForm>(dialogs);
            }

            protected override Task<List<SystemForm>> GetDialogFormsAsync(ItemTemplateInput input, ScaffoldResult result)
            {
                return Task.FromResult(_dialogs);
            }
        }

        private void UseFakeHandler(params SystemForm[] dialogs)
        {
            ScaffoldingEngine.ClearHandlers();
            ScaffoldingEngine.RegisterHandler(TemplateKind.Item, new FakeDialogHandler(dialogs));
        }

        private ItemTemplateInput Input(string dialog = "Confirm Dialog", bool force = false)
        {
            return new ItemTemplateInput
            {
                TemplateId = "JsDialog",
                Name = dialog,
                OutputDirectory = _entitiesDirectory,
                Force = force,
            };
        }

        /// <summary>
        /// The dialog the wizard combo would list: the display Name is the
        /// pick (--name), the UniqueName names all three files and the
        /// generated namespace members, and the FormXml carries
        /// header/body/footer controls plus two dialog querystring
        /// parameters (their types ride the parameter mapping, not the
        /// classid one).
        /// </summary>
        private static SystemForm DialogForm()
        {
            return new SystemForm
            {
                Name = "Confirm Dialog",
                UniqueName = "ConfirmDialog",
                FormType = FormType.Dialog,
                FormXml = FormXml(),
            };
        }

        private static string FormXml()
        {
            return "<form>" +
                       "<header><rows>" +
                           "<row><cell><label description=\"Header\" /><control id=\"HeaderLabel1\" classid=\"{" + ControlDialogClassId.LABEL + "}\" /></cell></row>" +
                       "</rows></header>" +
                       "<tabs><tab><columns><column><sections><section><rows>" +
                           "<row><cell><label description=\"Name\" /><control id=\"Text1\" classid=\"{" + ControlDialogClassId.SLT_TEXT + "}\" /></cell></row>" +
                           "<row><cell><label description=\"When\" /><control id=\"DateTime1\" classid=\"{" + ControlDialogClassId.DATETIME + "}\" /></cell></row>" +
                       "</rows></section></sections></column></columns></tab></tabs>" +
                       "<footer><rows>" +
                           "<row><cell><label description=\"OK\" /><control id=\"Button1\" classid=\"{" + ControlDialogClassId.BUTTON + "}\" /></cell></row>" +
                       "</rows></footer>" +
                       "<formparameters>" +
                           "<querystringparameter name=\"ParamEntity\" type=\"EntityType\" />" +
                           "<querystringparameter name=\"ParamCount\" type=\"PositiveInteger\" />" +
                       "</formparameters>" +
                   "</form>";
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_ThreeFiles()
        {
            var manifest = JsDialogItemTemplateHandler.CreateManifest();

            Assert.AreEqual("JsDialog", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(3, manifest.Files.Count);
            Assert.AreEqual("$DialogName$.js", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$DialogName$.dialog.js", manifest.Files[1].TargetFileName);
            // The payload's JavaScript.d.ts targets $DialogName$.dialog.d.ts
            // — the wizard's own declarationFileName suffix.
            Assert.AreEqual("$DialogName$.dialog.d.ts", manifest.Files[2].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            Assert.IsTrue(manifest.Files[2].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.jsdialog.JavaScript.js");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.jsdialog.JavaScript.dialog.js");
            StringAssert.StartsWith(manifest.Files[2].ResourceName, "Resources.templates.item.jsdialog.JavaScript.d.ts");
        }

        [TestMethod]
        public void NewList_ItemJsDialogIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "JsDialog"));
            Assert.IsNotNull(TemplateCatalog.Find("JsDialog", TemplateKind.Item));
            // The wizard's FormItem is a connect-first dialog (the combo
            // fills on Connection_Connected) — the catalog says so too.
            Assert.IsTrue(TemplateCatalog.Find("JsDialog", TemplateKind.Item).RequiresConnection);
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesAllThreeFiles_WithDialogCode()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.js").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.dialog.js").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.dialog.d.ts").Action);

            // Byte-faithful to Visual Studio: all three payload stubs carry
            // the template files' own encoding (no BOM).
            var stubBytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, "ConfirmDialog.js"));
            Assert.AreNotEqual(0xEF, stubBytes[0], "ConfirmDialog.js");
            var dialogBytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js"));
            Assert.AreNotEqual(0xEF, dialogBytes[0], "ConfirmDialog.dialog.js");
            var declarationBytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.d.ts"));
            Assert.AreNotEqual(0xEF, declarationBytes[0], "ConfirmDialog.dialog.d.ts");

            // The user file: the GetDefaultJsDialogFileAsync skeleton — the
            // reference to the generated typing twin and the three event
            // handlers the wizard's $JavaScript$ fills in.
            var stub = File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.js"));
            StringAssert.Contains(stub, "//@ts-check");
            StringAssert.Contains(stub, "///<reference path=\"ConfirmDialog.dialog.d.ts\" />");
            StringAssert.Contains(stub, "let form;");
            StringAssert.Contains(stub, "async function OnLoad(executionContext)");
            StringAssert.Contains(stub, "form = new DevKitDialog.ConfirmDialog(executionContext);");
            StringAssert.Contains(stub, "OnLoad: OnLoad,");

            // The generated twin: the DevKitDialog namespace IIFE and the
            // LoadFormDialog class handing the control ids to devKit.
            var dialog = File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js"));
            StringAssert.Contains(dialog, "// @ts-nocheck");
            StringAssert.Contains(dialog, "/** @namespace DevKitDialog */");
            StringAssert.Contains(dialog, "DevKitDialog.ConfirmDialog = function (executionContext, defaultWebResourceName) {");
            StringAssert.Contains(dialog, "return new devKit.LoadFormDialog(executionContext, [");
            StringAssert.Contains(dialog, "})(DevKitDialog || (DevKitDialog = {}));");

            // The typing twin: the devkit.d.ts reference, the declared
            // DevKitDialog.{Dialog} namespace pair and the typed class.
            var declaration = File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.d.ts"));
            StringAssert.Contains(declaration, "/// <reference path=\"devkit.d.ts\" />");
            StringAssert.Contains(declaration, "declare namespace DevKitDialog {");
            StringAssert.Contains(declaration, "export namespace ConfirmDialog {");
            StringAssert.Contains(declaration, "interface IDialog {");
            StringAssert.Contains(declaration, "export class ConfirmDialog {");
            StringAssert.Contains(declaration, "constructor(executionContext: any, defaultWebResourceName?: string);");
            StringAssert.Contains(declaration, "Dialog: ConfirmDialog.IDialog;");
            StringAssert.Contains(declaration, "Close(): void;");
        }

        [TestMethod]
        public async Task ScaffoldAsync_IdialogControls_HeaderBodyFooterAndParameters_InOrder()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var dialog = File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js"));
            var index = 0;
            void InOrder(string fragment)
            {
                var found = dialog.IndexOf(fragment, index, StringComparison.Ordinal);
                Assert.IsTrue(found >= 0, $"not found after index {index}: {fragment}");
                index = found;
            }
            // The FormXml walk order: header, then body, then footer, then
            // the dialog's querystring parameters — the same ids the
            // LoadFormDialog array receives.
            InOrder("\"HeaderLabel1\"");
            InOrder("\"Text1\"");
            InOrder("\"DateTime1\"");
            InOrder("\"Button1\"");
            InOrder("\"ParamEntity\"");
            InOrder("\"ParamCount\"");

            // The typing twin types the same walk through the classid map
            // (LABEL → Label, SLT_TEXT → String, DATETIME → DateTime,
            // BUTTON → Button) and the parameter map for the querystring
            // parameters (EntityType → String, PositiveInteger → Integer) —
            // labelled with the control's description, the parameters with
            // their id.
            var declaration = File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.d.ts"));
            index = 0;
            void InOrderDts(string fragment)
            {
                var found = declaration.IndexOf(fragment, index, StringComparison.Ordinal);
                Assert.IsTrue(found >= 0, $"not found after index {index}: {fragment}");
                index = found;
            }
            InOrderDts("/** Header */");
            InOrderDts("HeaderLabel1: DevKit.Controls.Dialog.Label;");
            InOrderDts("/** Name */");
            InOrderDts("Text1: DevKit.Controls.Dialog.String;");
            InOrderDts("/** When */");
            InOrderDts("DateTime1: DevKit.Controls.Dialog.DateTime;");
            InOrderDts("/** OK */");
            InOrderDts("Button1: DevKit.Controls.Dialog.Button;");
            InOrderDts("/** ParamEntity */");
            InOrderDts("ParamEntity: DevKit.Controls.Dialog.String;");
            InOrderDts("/** ParamCount */");
            InOrderDts("ParamCount: DevKit.Controls.Dialog.Integer;");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserStubSkipped_TwinsUnchanged()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var stubFile = Path.Combine(_entitiesDirectory, "ConfirmDialog.js");
            File.AppendAllText(stubFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "ConfirmDialog.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.d.ts").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_DialogCodeChange_TwinUpdated_StubAndSiblingUntouched()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var dialogFile = Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js");
            File.WriteAllText(dialogFile, File.ReadAllText(dialogFile).Replace("\"Text1\"", "\"Text2\""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // Each twin is rewritten only when its own content changed —
            // the wizard's RunFinished WriteTargetFileIfChangedAsync per
            // file compare.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.d.ts").Action);
            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "ConfirmDialog.js").Action);
            StringAssert.Contains(File.ReadAllText(dialogFile), "\"Text1\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_WhitespaceOnlyChange_TwinUpdated()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The generated compare is the wizard's own
            // WriteTargetFileIfChangedAsync ordinal compare — there is no
            // whitespace tolerance for .dialog.js files: a whitespace-only
            // edit is a change and is rewritten.
            var dialogFile = Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js");
            var content = File.ReadAllText(dialogFile);
            File.WriteAllText(dialogFile, content.Replace("\r", "").Replace("\n", ""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.js").Action);
            Assert.AreEqual(content, File.ReadAllText(dialogFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_OverwritesUserStub()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.AppendAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.js"), "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.js").Action);
            Assert.IsFalse(File.ReadAllText(Path.Combine(_entitiesDirectory, "ConfirmDialog.js")).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutService_FailsWithConnectionError()
        {
            // The real handler: the dialog list is an org read with no
            // XrmHelper cache behind it (the wizard runs connected by
            // construction), so a service-less scaffold refuses up front.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "template 'JsDialog': requires a Dataverse connection to read the org's dialogs.");
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "ConfirmDialog.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "ConfirmDialog.dialog.d.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownDialog_FailsWithoutCreatingFiles()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(dialog: "Nope"));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name 'Nope': dialog not found in the current instance.");
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.dialog.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.dialog.d.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_DialogNameMatchedCaseInsensitively()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(dialog: "confirm dialog"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.js").Action);
        }
    }
}
