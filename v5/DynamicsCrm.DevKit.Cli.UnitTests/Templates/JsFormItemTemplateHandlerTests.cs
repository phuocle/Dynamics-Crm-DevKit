using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.2 acceptance tests for the JsForm item template: the three payload
    /// files of CSharpJsFormItemTemplate.vstemplate generated from the
    /// entity's form metadata (user stub {Entity}.js, generated twins
    /// {Entity}.d.ts and {Entity}.form.js), the VSIX idempotency semantics
    /// (stub never overwritten unless force, twins rewritten when their
    /// full content changed — they carry no timestamp header), the
    /// {Entity}.webapi.js sibling turning the .d.ts WebApi section on and
    /// the "(no forms)" skip. The codegen reads the lazy XrmHelper caches
    /// (metadata, form xml, BPF processes), so the tests pre-seed all three
    /// instead of a service.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class JsFormItemTemplateHandlerTests
    {
        private string _directory;
        private string _entitiesDirectory;
        private List<EntityMetadata> _originalMetadataCache;
        private List<SystemForm> _originalFormXmlCache;
        private List<ProcessForm> _originalProcessFormCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-jsform-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResource");
            _entitiesDirectory = Path.Combine(webResourceDirectory, "entities");
            Directory.CreateDirectory(_entitiesDirectory);
            // SDK-style csproj with no RootNamespace element — the scanner
            // falls back to the file name, so $rootnamespace$ resolves to
            // Contoso.WebResource.entities (the VS-composed value).
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResource.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // The handler and the JsForm codegen read the static XrmHelper
            // caches (the wizard reads the same caches the form fills); the
            // restores keep the pollution away from the other test classes.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            _originalFormXmlCache = XrmHelper.EntitiesFormXml;
            _originalProcessFormCache = XrmHelper.EntitiesProcessForm;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata() };
            XrmHelper.EntitiesFormXml = new List<SystemForm> { AccountMainForm() };
            XrmHelper.EntitiesProcessForm = new List<ProcessForm> { AccountDummyProcess() };

            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup()
        {
            XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new List<EntityMetadata>();
            XrmHelper.EntitiesFormXml = _originalFormXmlCache ?? new List<SystemForm>();
            XrmHelper.EntitiesProcessForm = _originalProcessFormCache ?? new List<ProcessForm>();
            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            Directory.Delete(_directory, true);
        }

        private ItemTemplateInput Input(string entity = "Account", bool force = false)
        {
            return new ItemTemplateInput
            {
                TemplateId = "JsForm",
                Entity = entity,
                OutputDirectory = _entitiesDirectory,
                Force = force,
            };
        }

        /// <summary>
        /// A minimal but real entity: primary id, one string, one datetime
        /// and one picklist — enough for the stub, the form twin and the
        /// declaration. Relationships and keys stay null, the codegen
        /// null-guards them. Several EntityMetadata properties are
        /// read-only in the SDK — the MetadataExtensionsTests reflection
        /// pattern sets them.
        /// </summary>
        /// <summary>
        /// An option whose localized label the codegen can read: the
        /// net10 Label(string, int) constructor fills LocalizedLabels but
        /// leaves UserLocalizedLabel empty, and OptionSetValues() reads
        /// exactly that.
        /// </summary>
        private static OptionMetadata Option(string name, int value)
        {
            var option = new OptionMetadata(new Label(name, 1033), value);
            option.Label.UserLocalizedLabel = new LocalizedLabel(name, 1033);
            return option;
        }

        private static EntityMetadata AccountMetadata()
        {
            var optionSet = new OptionSetMetadata();
            optionSet.Options.Add(Option("Email", 1));
            optionSet.Options.Add(Option("Phone", 2));
            var metadata = new EntityMetadata
            {
                SchemaName = "Account",
                LogicalName = "account",
                EntitySetName = "accounts",
                IsActivity = false,
            };
            Set(metadata, "ObjectTypeCode", 1);
            Set(metadata, "PrimaryIdAttribute", "accountid");
            Set(metadata, "PrimaryNameAttribute", "name");
            Set(metadata, "LogicalCollectionName", "accounts");
            Set(metadata, "CollectionSchemaName", "accounts");
            Set(metadata, "Attributes", new AttributeMetadata[]
            {
                new UniqueIdentifierAttributeMetadata { SchemaName = "AccountId", LogicalName = "accountid" },
                new StringAttributeMetadata { SchemaName = "Name", LogicalName = "name" },
                new DateTimeAttributeMetadata { SchemaName = "CreatedOn", LogicalName = "createdon" },
                new PicklistAttributeMetadata
                {
                    SchemaName = "PreferredContactMethod",
                    LogicalName = "preferredcontactmethod",
                    OptionSet = optionSet,
                },
            });
            Set(metadata.Attributes[3], "AttributeType", AttributeTypeCode.Picklist);
            return metadata;
        }

        /// <summary>
        /// One enabled Main form carrying a tab/section with two fields, a
        /// header field and an empty navigation bar — the shape the form
        /// codegen parses.
        /// </summary>
        private static SystemForm AccountMainForm()
        {
            return new SystemForm
            {
                Name = "Account",
                EntityLogicalName = "account",
                FormType = FormType.Main,
                IsQuickCreate = false,
                FormId = new Guid("99999999-9999-9999-9999-999999999999"),
                FormXml = @"<form>
  <tabs>
    <tab name=""General"" id=""{11111111-1111-1111-1111-111111111111}"" visible=""true"">
      <labels><label description=""General"" languagecode=""1033"" /></labels>
      <columns>
        <column width=""100%"">
          <sections>
            <section name=""general_section"" showlabel=""false"" id=""{22222222-2222-2222-2222-222222222222}"">
              <labels><label description=""General Section"" languagecode=""1033"" /></labels>
              <rows>
                <row>
                  <cell id=""{33333333-3333-3333-3333-333333333333}"" showlabel=""true"">
                    <labels><label description=""Name"" languagecode=""1033"" /></labels>
                    <control id=""name"" classid=""{4273EDBD-AC1D-40d3-9FB2-095C621B552D}"" datafieldname=""name"" uniqueid=""{44444444-4444-4444-4444-444444444444}"" />
                  </cell>
                </row>
                <row>
                  <cell id=""{55555555-5555-5555-5555-555555555555}"" showlabel=""true"">
                    <labels><label description=""Created On"" languagecode=""1033"" /></labels>
                    <control id=""createdon"" classid=""{5B773807-9FB2-42db-B97D-599817B7FE01}"" datafieldname=""createdon"" disabled=""false"" />
                  </cell>
                </row>
              </rows>
            </section>
          </sections>
        </column>
      </columns>
    </tab>
  </tabs>
  <header>
    <rows>
      <row>
        <cell id=""{66666666-6666-6666-6666-666666666666}"">
          <control id=""name"" classid=""{4273EDBD-AC1D-40d3-9FB2-095C621B552D}"" datafieldname=""name"" />
        </cell>
      </row>
    </rows>
  </header>
  <Navigation>
    <NavBar></NavBar>
  </Navigation>
  <controlDescriptions />
</form>",
            };
        }

        /// <summary>
        /// A harmless BPF process for the entity: both the .form.js and the
        /// .d.ts codegen walk the EntitiesProcessForm cache (their
        /// AddIfNotExistAsync needs an entry to stay offline) and parse its
        /// xaml — an ActivityReference without DataFieldName matches adds
        /// nothing.
        /// </summary>
        private static ProcessForm AccountDummyProcess()
        {
            return new ProcessForm
            {
                EntityLogicalName = "account",
                Name = "Dummy",
                xaml = @"<mxswa:Workflow xmlns:mxswa=""urn:x""><mxswa:ActivityReference DisplayName=""1 account update"" /></mxswa:Workflow>",
            };
        }

        private static void Set(object source, string property, object value)
        {
            var setter = source.GetType().GetProperty(property);
            if (setter == null) throw new InvalidOperationException($"property {property} not found on {source.GetType().Name}");
            setter.SetValue(source, value);
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_ThreeFiles()
        {
            var manifest = JsFormItemTemplateHandler.CreateManifest();

            Assert.AreEqual("JsForm", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(3, manifest.Files.Count);
            Assert.AreEqual("$SchemaName$.js", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$SchemaName$.d.ts", manifest.Files[1].TargetFileName);
            Assert.AreEqual("$SchemaName$.form.js", manifest.Files[2].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            Assert.IsTrue(manifest.Files[2].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.jsform.Javascript.js");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.jsform.Javascript.d.ts");
            StringAssert.StartsWith(manifest.Files[2].ResourceName, "Resources.templates.item.jsform.Javascript.form.js");
        }

        [TestMethod]
        public void NewList_ItemJsFormIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "JsForm"));
            Assert.IsNotNull(TemplateCatalog.Find("JsForm", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesThreeFiles_WithFormCode()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.js").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.d.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.form.js").Action);

            // Byte-faithful to Visual Studio: all three stubs carry a BOM.
            foreach (var name in new[] { "Account.js", "Account.d.ts", "Account.form.js" })
            {
                var bytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, name));
                Assert.AreEqual(0xEF, bytes[0], name);
                Assert.AreEqual(0xBB, bytes[1], name);
                Assert.AreEqual(0xBF, bytes[2], name);
            }

            // The user stub references the declaration and the typed form
            // classes ($rootnamespace$ = project default namespace + the
            // target folder → the JS namespace is its second segment).
            var stub = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.js"));
            StringAssert.Contains(stub, "//@ts-check");
            StringAssert.Contains(stub, "///<reference path=\"Account.d.ts\" />");
            StringAssert.Contains(stub, "WebResource.FormAccount");

            // The form twin: namespace, one form function, body fields by
            // SchemaName, the tab/section pair and the OptionSet values.
            var form = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.form.js"));
            StringAssert.Contains(form, "'use strict';");
            StringAssert.Contains(form, "var WebResource;");
            StringAssert.Contains(form, "WebResource.FormAccount = function(executionContext, defaultWebResourceName)");
            StringAssert.Contains(form, "body: [\"CreatedOn\", \"Name\"],");
            StringAssert.Contains(form, "tab: [\"General___general_section\"]");
            StringAssert.Contains(form, "header: [\"Name\"],");
            StringAssert.Contains(form, "OptionSet.Account = {");
            StringAssert.Contains(form, "PreferredContactMethod: { Email: 1, Phone: 2 },");

            // The declaration: devkit reference, typed form namespace, the
            // OptionSet enums and the RollupState fallback.
            var dts = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.d.ts"));
            StringAssert.Contains(dts, "///<reference path=\"devkit.d.ts\" />");
            StringAssert.Contains(dts, "declare namespace WebResource {");
            StringAssert.Contains(dts, "namespace FormAccount {");
            StringAssert.Contains(dts, "export class FormAccount extends DevKit.IForm {");
            StringAssert.Contains(dts, "Body: WebResource.FormAccount.Body;");
            StringAssert.Contains(dts, "enum PreferredContactMethod {");
            StringAssert.Contains(dts, "enum RollupState {");
        }

        [TestMethod]
        public async Task ScaffoldAsync_LogicalNameInput_NamesFilesBySchemaName()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "account"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            // The file system compares case-insensitively on Windows — check
            // the actual names (the wizard names files by SchemaName).
            var names = Directory.GetFiles(_entitiesDirectory).Select(Path.GetFileName).OrderBy(name => name, StringComparer.Ordinal).ToList();
            CollectionAssert.AreEqual(new[] { "Account.d.ts", "Account.form.js", "Account.js" }, names);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserStubSkipped_GeneratedTwinsUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var stubFile = Path.Combine(_entitiesDirectory, "Account.js");
            File.AppendAllText(stubFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.d.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.form.js").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_FormCodeChange_FormTwinUpdated_DeclarationUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var formFile = Path.Combine(_entitiesDirectory, "Account.form.js");
            File.WriteAllText(formFile, File.ReadAllText(formFile).Replace("\"CreatedOn\"", "\"CreatedOn2\""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The twins are compared (and rewritten) independently — the
            // wizard's RunFinished WriteTargetFileIfChangedAsync per file.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.form.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.d.ts").Action);
            StringAssert.Contains(File.ReadAllText(formFile), "body: [\"CreatedOn\", \"Name\"],");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_OverwritesUserStub()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.AppendAllText(Path.Combine(_entitiesDirectory, "Account.js"), "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.js").Action);
            Assert.IsFalse(File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.js")).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WebApiSibling_TurnsOnDtsWebApiSection()
        {
            // The wizard's IsJsWebApiExistAsync: the {Entity}.webapi.js
            // sibling in the target folder (pairs with the JsWebApi item).
            File.WriteAllText(Path.Combine(_entitiesDirectory, "Account.webapi.js"), "// webapi scaffold");

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var dts = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.d.ts"));
            StringAssert.Contains(dts, "export class AccountApi {");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoForms_SkipsGeneratedTwins_WithWarning()
        {
            // A QuickView-only cache entry keeps the offline pre-check
            // satisfied while the Main/QuickCreate filter yields nothing —
            // the stub falls back to the WebApi-style two-liner (the
            // wizard's $Javascript$ token) and the twins are not written.
            XrmHelper.EntitiesFormXml = new List<SystemForm>
            {
                new SystemForm { Name = "Account Lookup View", EntityLogicalName = "account", FormType = FormType.QuickView, FormId = Guid.NewGuid() },
            };

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(1, result.Warnings.Count);
            StringAssert.Contains(result.Warnings[0], "no Main or Quick Create forms");
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.js").Action);
            Assert.AreEqual("Skipped", result.Files.Single(file => file.FileName == "Account.d.ts").Action);
            Assert.AreEqual("Skipped", result.Files.Single(file => file.FileName == "Account.form.js").Action);
            var stub = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.js"));
            StringAssert.Contains(stub, "///<reference path=\"Account.d.ts\" />");
            Assert.IsFalse(stub.Contains("FormAccount"));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Account.form.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Account.d.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ColdFormCacheWithoutService_FailsWithConnectionError()
        {
            XrmHelper.EntitiesFormXml = new List<SystemForm>();
            XrmHelper.EntitiesProcessForm = new List<ProcessForm>();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires a Dataverse connection to read entity forms");
        }

        [TestMethod]
        public async Task ScaffoldAsync_EmptyMetadataCacheWithoutService_FailsWithConnectionError()
        {
            XrmHelper.EntitiesMetadata = new List<EntityMetadata>();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires a Dataverse connection");
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownEntity_FailsWithoutCreatingFiles()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "Nope"));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--entity 'Nope': entity not found in the current instance.");
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.form.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.d.ts")));
        }
    }
}
