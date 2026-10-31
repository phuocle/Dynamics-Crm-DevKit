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
    /// I.16 acceptance tests for the TsDialog item template: the two payload
    /// files of CSharpTsDialogItemTemplate.vstemplate — the user file
    /// {Dialog}.ts (the CodeGenService.GetDefaultTsDialogFileAsync skeleton,
    /// the wizard's $TypeScript$) and the generated twin {Dialog}.dialog.ts
    /// (Logic.TsDialog.GetTsDialogCodeAsync, the typed DevKitDialog namespace
    /// off the picked dialog's FormXml, the wizard's $TypeScriptDialog$) —
    /// both named by the picked SystemForm.UniqueName, with the VSIX
    /// idempotency semantics (user file never overwritten unless force,
    /// twin rewritten only when its real content changed — the wizard's
    /// WriteTargetFileIfChangedAsync ordinal compare). The dialog
    /// resolution has no offline cache, so the tests seed the dialog list
    /// through the handler's GetDialogFormsAsync seam instead of a
    /// ServiceClient (the input model's service is the concrete class).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class TsDialogItemTemplateHandlerTests
    {
        private string _directory;
        private string _srcDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-tsdialog-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResourceTs");
            _srcDirectory = Path.Combine(webResourceDirectory, "src");
            Directory.CreateDirectory(_srcDirectory);
            // SDK-style csproj above the target folder — the engine resolves
            // the project (and its RootNamespace) walking up from --out.
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResourceTs.csproj"),
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
        private sealed class FakeDialogHandler : TsDialogItemTemplateHandler
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
                TemplateId = "TsDialog",
                Name = dialog,
                OutputDirectory = _srcDirectory,
                Force = force,
            };
        }

        /// <summary>
        /// The dialog the wizard combo would list: the display Name is the
        /// pick (--name), the UniqueName names the files and the generated
        /// namespace members, and the FormXml carries header/body/footer
        /// controls plus two dialog querystring parameters (their types
        /// ride the parameter mapping, not the classid one).
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
        public void CreateManifest_MirrorsVstemplate_TwoFiles()
        {
            var manifest = TsDialogItemTemplateHandler.CreateManifest();

            Assert.AreEqual("TsDialog", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(2, manifest.Files.Count);
            Assert.AreEqual("$DialogName$.ts", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$DialogName$.dialog.ts", manifest.Files[1].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.tsdialog.TypeScript.ts");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.tsdialog.TypeScript.dialog.ts");
        }

        [TestMethod]
        public void NewList_ItemTsDialogIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "TsDialog"));
            Assert.IsNotNull(TemplateCatalog.Find("TsDialog", TemplateKind.Item));
            // The wizard's FormItem is a connect-first dialog (the combo
            // fills on Connection_Connected) — the catalog says so too.
            Assert.IsTrue(TemplateCatalog.Find("TsDialog", TemplateKind.Item).RequiresConnection);
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesBothFiles_WithDialogCode()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.dialog.ts").Action);

            // Byte-faithful to Visual Studio: both payload stubs carry the
            // template files' own encoding (no BOM).
            var stubBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "ConfirmDialog.ts"));
            Assert.AreNotEqual(0xEF, stubBytes[0], "ConfirmDialog.ts");
            var dialogBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts"));
            Assert.AreNotEqual(0xEF, dialogBytes[0], "ConfirmDialog.dialog.ts");

            // The user file: the GetDefaultTsDialogFileAsync skeleton — the
            // import of the generated dialog namespace and the three event
            // handlers the wizard's $TypeScript$ fills in.
            var stub = File.ReadAllText(Path.Combine(_srcDirectory, "ConfirmDialog.ts"));
            StringAssert.Contains(stub, "import { DevKitDialog as Dialog } from './ConfirmDialog.dialog';");
            StringAssert.Contains(stub, "let form: Dialog.ConfirmDialog;");
            StringAssert.Contains(stub, "async function OnLoad(executionContext: any): Promise<void>");
            StringAssert.Contains(stub, "async function OkClick(executionContext: any): Promise<void>");
            StringAssert.Contains(stub, "async function CancelClick(executionContext: any): Promise<void>");
            StringAssert.Contains(stub, "export { ConfirmDialog };");

            // The generated twin: the header comment (the display Name in
            // it), the DevKitDialog namespace pair, the typed class.
            var dialog = File.ReadAllText(Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts"));
            StringAssert.Contains(dialog, " * ConfirmDialog.dialog.ts - Confirm Dialog Dialog for early-bound style dialog coding");
            StringAssert.Contains(dialog, "import { DialogFormBase } from '../lib/devkit';");
            StringAssert.Contains(dialog, "export namespace DevKitDialog {");
            StringAssert.Contains(dialog, "export namespace ConfirmDialog {");
            StringAssert.Contains(dialog, "export class ConfirmDialog extends DialogFormBase<ConfirmDialog.IDialog> {");
        }

        [TestMethod]
        public async Task ScaffoldAsync_IdialogControls_HeaderBodyFooterAndParameters_InOrder()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var dialog = File.ReadAllText(Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts"));
            var index = 0;
            void InOrder(string fragment)
            {
                var found = dialog.IndexOf(fragment, index, StringComparison.Ordinal);
                Assert.IsTrue(found >= 0, $"not found after index {index}: {fragment}");
                index = found;
            }
            // The FormXml walk order: header, then body, then footer, then
            // the dialog's querystring parameters — typed through the
            // parameter map (EntityType → String, PositiveInteger →
            // Integer), not the control classid map.
            InOrder("/** Header */");
            InOrder("HeaderLabel1: DevKit.Controls.Dialog.Label;");
            InOrder("/** Name */");
            InOrder("Text1: DevKit.Controls.Dialog.String;");
            InOrder("/** When */");
            InOrder("DateTime1: DevKit.Controls.Dialog.DateTime;");
            InOrder("/** OK */");
            InOrder("Button1: DevKit.Controls.Dialog.Button;");
            InOrder("/** ParamEntity */");
            InOrder("ParamEntity: DevKit.Controls.Dialog.String;");
            InOrder("/** ParamCount */");
            InOrder("ParamCount: DevKit.Controls.Dialog.Integer;");
            // The constructor hands the same ids to DialogFormBase in the
            // same order.
            StringAssert.Contains(dialog, "super(executionContext, ['HeaderLabel1', 'Text1', 'DateTime1', 'Button1', 'ParamEntity', 'ParamCount'], defaultWebResourceName);");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserStubSkipped_DialogUnchanged()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var stubFile = Path.Combine(_srcDirectory, "ConfirmDialog.ts");
            File.AppendAllText(stubFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "ConfirmDialog.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.ts").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_DialogCodeChange_DialogUpdated_StubUntouched()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var dialogFile = Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts");
            File.WriteAllText(dialogFile, File.ReadAllText(dialogFile).Replace("'Text1'", "'Text2'"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The twin is rewritten only when its own content changed —
            // the wizard's RunFinished WriteTargetFileIfChangedAsync.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.ts").Action);
            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "ConfirmDialog.ts").Action);
            StringAssert.Contains(File.ReadAllText(dialogFile), "'Text1'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_WhitespaceOnlyChange_DialogUpdated()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The generated compare is the wizard's own
            // WriteTargetFileIfChangedAsync ordinal compare — unlike the
            // .webapi.ts twin (Helper.IsTheSame via the CLI generator
            // precedent) there is no whitespace tolerance for .dialog.ts
            // files: a whitespace-only edit is a change and is rewritten.
            var dialogFile = Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts");
            var content = File.ReadAllText(dialogFile);
            File.WriteAllText(dialogFile, content.Replace("\r", "").Replace("\n", ""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.dialog.ts").Action);
            Assert.AreEqual(content, File.ReadAllText(dialogFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_OverwritesUserStub()
        {
            UseFakeHandler(DialogForm());
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.AppendAllText(Path.Combine(_srcDirectory, "ConfirmDialog.ts"), "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "ConfirmDialog.ts").Action);
            Assert.IsFalse(File.ReadAllText(Path.Combine(_srcDirectory, "ConfirmDialog.ts")).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutService_FailsWithConnectionError()
        {
            // The real handler: the dialog list is an org read with no
            // XrmHelper cache behind it (the wizard runs connected by
            // construction), so a service-less scaffold refuses up front.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "template 'TsDialog': requires a Dataverse connection to read the org's dialogs.");
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "ConfirmDialog.ts")));
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "ConfirmDialog.dialog.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownDialog_FailsWithoutCreatingFiles()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(dialog: "Nope"));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--name 'Nope': dialog not found in the current instance.");
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Nope.ts")));
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Nope.dialog.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_DialogNameMatchedCaseInsensitively()
        {
            UseFakeHandler(DialogForm());

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(dialog: "confirm dialog"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "ConfirmDialog.ts").Action);
        }
    }
}
