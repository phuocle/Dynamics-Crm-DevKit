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
    /// I.14 acceptance tests for the TsForm item template: the two payload
    /// files of CSharpJsFormTsItemTemplate.vstemplate generated from the
    /// entity's form metadata (user stub {Entity}.ts, generated twin
    /// {Entity}.form.ts) plus the wizard's always-run OptionSet.ts refresh
    /// (merged with any existing entity blocks), the VSIX idempotency
    /// semantics (stub never overwritten unless force, twin and OptionSet
    /// rewritten when their full content changed) and the "(no forms)"
    /// skip. The codegen reads the lazy XrmHelper caches (metadata, form
    /// xml, BPF processes), so the tests pre-seed all three instead of a
    /// service.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class TsFormItemTemplateHandlerTests
    {
        private string _directory;
        private string _srcDirectory;
        private List<EntityMetadata> _originalMetadataCache;
        private List<SystemForm> _originalFormXmlCache;
        private List<ProcessForm> _originalProcessFormCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-tsform-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResourceTs");
            _srcDirectory = Path.Combine(webResourceDirectory, "src");
            Directory.CreateDirectory(_srcDirectory);
            // SDK-style csproj above the target folder — the engine resolves
            // the project (and its RootNamespace) walking up from --out.
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResourceTs.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // The handler and the TsForm codegen read the static XrmHelper
            // caches (the wizard reads the same caches the form fills); the
            // restores keep the pollution away from the other test classes.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            _originalFormXmlCache = XrmHelper.EntitiesFormXml;
            _originalProcessFormCache = XrmHelper.EntitiesProcessForm;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata(), ContactMetadata() };
            XrmHelper.EntitiesFormXml = new List<SystemForm> { AccountMainForm(), ContactMainForm() };
            XrmHelper.EntitiesProcessForm = new List<ProcessForm> { AccountDummyProcess(), ContactDummyProcess() };

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
                TemplateId = "TsForm",
                Entity = entity,
                OutputDirectory = _srcDirectory,
                Force = force,
            };
        }

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
        /// The second entity for the OptionSet.ts merge: one string field
        /// and one picklist of its own.
        /// </summary>
        private static EntityMetadata ContactMetadata()
        {
            var optionSet = new OptionSetMetadata();
            optionSet.Options.Add(Option("Warm", 1));
            optionSet.Options.Add(Option("Cold", 2));
            var metadata = new EntityMetadata
            {
                SchemaName = "Contact",
                LogicalName = "contact",
                EntitySetName = "contacts",
                IsActivity = false,
            };
            Set(metadata, "ObjectTypeCode", 2);
            Set(metadata, "PrimaryIdAttribute", "contactid");
            Set(metadata, "PrimaryNameAttribute", "fullname");
            Set(metadata, "LogicalCollectionName", "contacts");
            Set(metadata, "CollectionSchemaName", "contacts");
            Set(metadata, "Attributes", new AttributeMetadata[]
            {
                new UniqueIdentifierAttributeMetadata { SchemaName = "ContactId", LogicalName = "contactid" },
                new StringAttributeMetadata { SchemaName = "LastName", LogicalName = "lastname" },
                new PicklistAttributeMetadata
                {
                    SchemaName = "PreferredTemperature",
                    LogicalName = "preferredtemperature",
                    OptionSet = optionSet,
                },
            });
            Set(metadata.Attributes[2], "AttributeType", AttributeTypeCode.Picklist);
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
                    <control id=""createdon"" classid=""{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}"" datafieldname=""createdon"" disabled=""false"" />
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
        /// A Main form for the merge test's second entity: one body field.
        /// </summary>
        private static SystemForm ContactMainForm()
        {
            return new SystemForm
            {
                Name = "Contact",
                EntityLogicalName = "contact",
                FormType = FormType.Main,
                IsQuickCreate = false,
                FormId = new Guid("88888888-8888-8888-8888-888888888888"),
                FormXml = @"<form>
  <tabs>
    <tab name=""General"" id=""{11111111-1111-1111-1111-111111111112}"" visible=""true"">
      <labels><label description=""General"" languagecode=""1033"" /></labels>
      <columns>
        <column width=""100%"">
          <sections>
            <section name=""general_section"" showlabel=""false"" id=""{22222222-2222-2222-2222-222222222223}"">
              <labels><label description=""General Section"" languagecode=""1033"" /></labels>
              <rows>
                <row>
                  <cell id=""{33333333-3333-3333-3333-333333333334}"" showlabel=""true"">
                    <labels><label description=""Last Name"" languagecode=""1033"" /></labels>
                    <control id=""lastname"" classid=""{4273EDBD-AC1D-40d3-9FB2-095C621B552D}"" datafieldname=""lastname"" uniqueid=""{44444444-4444-4444-4444-444444444445}"" />
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
        <cell id=""{66666666-6666-6666-6666-666666666667}"">
          <control id=""lastname"" classid=""{4273EDBD-AC1D-40d3-9FB2-095C621B552D}"" datafieldname=""lastname"" />
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
        /// A harmless BPF process for the entity: the form codegen walks
        /// the EntitiesProcessForm cache (its AddIfNotExistAsync needs an
        /// entry to stay offline) and parses its xaml — an
        /// ActivityReference without DataFieldName matches adds nothing.
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

        /// <summary>
        /// The offline pre-check requires a process entry per scaffolded
        /// entity — the second entity's dummy for the merge test.
        /// </summary>
        private static ProcessForm ContactDummyProcess()
        {
            return new ProcessForm
            {
                EntityLogicalName = "contact",
                Name = "Dummy",
                xaml = @"<mxswa:Workflow xmlns:mxswa=""urn:x""><mxswa:ActivityReference DisplayName=""1 contact update"" /></mxswa:Workflow>",
            };
        }

        private static void Set(object source, string property, object value)
        {
            var setter = source.GetType().GetProperty(property);
            if (setter == null) throw new InvalidOperationException($"property {property} not found on {source.GetType().Name}");
            setter.SetValue(source, value);
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_TwoFiles()
        {
            var manifest = TsFormItemTemplateHandler.CreateManifest();

            Assert.AreEqual("TsForm", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(2, manifest.Files.Count);
            Assert.AreEqual("$SchemaName$.ts", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$SchemaName$.form.ts", manifest.Files[1].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.tsform.TypeScript.ts");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.tsform.TypeScript.form.ts");
        }

        [TestMethod]
        public void NewList_ItemTsFormIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "TsForm"));
            Assert.IsNotNull(TemplateCatalog.Find("TsForm", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesTwoFilesAndOptionSet_WithFormCode()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.form.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "OptionSet.ts").Action);

            // Byte-faithful to Visual Studio: the two payload stubs carry
            // the template files' own encoding (no BOM), while the
            // wizard-written OptionSet.ts carries a UTF-8 signature.
            var stubBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "Account.ts"));
            Assert.AreEqual((byte)'i', stubBytes[0], "Account.ts");
            var formBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "Account.form.ts"));
            Assert.AreEqual((byte)'/', formBytes[0], "Account.form.ts");
            var optionSetBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "OptionSet.ts"));
            Assert.AreEqual(0xEF, optionSetBytes[0], "OptionSet.ts");
            Assert.AreEqual(0xBB, optionSetBytes[1], "OptionSet.ts");
            Assert.AreEqual(0xBF, optionSetBytes[2], "OptionSet.ts");

            // The user stub: the entity import from the form twin and the
            // commented-out form scaffold per form.
            var stub = File.ReadAllText(Path.Combine(_srcDirectory, "Account.ts"));
            StringAssert.Contains(stub, "import { Account } from './Account.form';");
            StringAssert.Contains(stub, "form = new Account.Account(executionContext);");
            StringAssert.Contains(stub, "// BEGIN ON LOAD");

            // The form twin: header comment, devkit reference, entity
            // namespace, one form class, body fields by SchemaName, the
            // tab/section pair and the aggregate AllInOne form class.
            var form = File.ReadAllText(Path.Combine(_srcDirectory, "Account.form.ts"));
            StringAssert.Contains(form, " * Account.form.ts - Account Form for early-bound style form coding");
            StringAssert.Contains(form, "/// <reference path=\"../lib/devkit.d.ts\" />");
            StringAssert.Contains(form, "import { FormBase } from '../lib/devkit';");
            StringAssert.Contains(form, "import './OptionSet';");
            StringAssert.Contains(form, "export namespace Account {");
            StringAssert.Contains(form, "export class Account extends FormBase<Account.IBody");
            StringAssert.Contains(form, "body: ['CreatedOn', 'Name'],");
            StringAssert.Contains(form, "header: ['Name'],");
            StringAssert.Contains(form, "tab: ['General___general_section']");
            StringAssert.Contains(form, "export namespace AllInOne {");
            StringAssert.Contains(form, "export class AllInOne extends FormBase<AllInOne.IBody");

            // The shared OptionSet file: the header, the entity block and
            // the picklist values from the metadata.
            var optionSet = File.ReadAllText(Path.Combine(_srcDirectory, "OptionSet.ts"));
            StringAssert.Contains(optionSet, "OptionSet.ts - Centralized OptionSet definitions");
            StringAssert.Contains(optionSet, "/** Account entity OptionSets */");
            StringAssert.Contains(optionSet, "const Account = {");
            StringAssert.Contains(optionSet, "PreferredContactMethod: { Email: 1, Phone: 2 }");
            StringAssert.Contains(optionSet, "} as const;");
        }

        [TestMethod]
        public async Task ScaffoldAsync_LogicalNameInput_NamesFilesBySchemaName()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "account"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            // The file system compares case-insensitively on Windows — check
            // the actual names (the wizard names files by SchemaName).
            var names = Directory.GetFiles(_srcDirectory).Select(Path.GetFileName).OrderBy(name => name, StringComparer.Ordinal).ToList();
            CollectionAssert.AreEqual(new[] { "Account.form.ts", "Account.ts", "OptionSet.ts" }, names);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserStubSkipped_FormAndOptionSetUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var stubFile = Path.Combine(_srcDirectory, "Account.ts");
            File.AppendAllText(stubFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.form.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_FormCodeChange_FormUpdated_OtherFilesUntouched()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var formFile = Path.Combine(_srcDirectory, "Account.form.ts");
            File.WriteAllText(formFile, File.ReadAllText(formFile).Replace("'CreatedOn'", "'CreatedOn2'"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The twin is rewritten only when its own content changed —
            // the wizard's RunFinished WriteTargetFileIfChangedAsync.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.form.ts").Action);
            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            StringAssert.Contains(File.ReadAllText(formFile), "body: ['CreatedOn', 'Name'],");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_OverwritesUserStub()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.AppendAllText(Path.Combine(_srcDirectory, "Account.ts"), "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.IsFalse(File.ReadAllText(Path.Combine(_srcDirectory, "Account.ts")).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoForms_SkipsFormFile_WithWarning()
        {
            // A QuickView-only cache entry keeps the offline pre-check
            // satisfied while the Main/QuickCreate filter yields nothing —
            // the stub falls back to the empty file (the codegen's
            // string.Empty), the form twin is not written and the
            // OptionSet.ts refresh still runs (the wizard's RunFinished
            // always ends with it).
            XrmHelper.EntitiesFormXml = new List<SystemForm>
            {
                new SystemForm { Name = "Account Lookup View", EntityLogicalName = "account", FormType = FormType.QuickView, FormId = Guid.NewGuid() },
            };

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(1, result.Warnings.Count);
            StringAssert.Contains(result.Warnings[0], "no Main or Quick Create forms");
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Skipped", result.Files.Single(file => file.FileName == "Account.form.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            Assert.AreEqual(string.Empty, File.ReadAllText(Path.Combine(_srcDirectory, "Account.ts")));
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Account.form.ts")));
            StringAssert.Contains(File.ReadAllText(Path.Combine(_srcDirectory, "OptionSet.ts")), "const Account = {");
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
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Nope.ts")));
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Nope.form.ts")));
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "OptionSet.ts")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_OptionSetMerge_KeepsExistingEntityBlocks()
        {
            // The wizard's RefreshOptionSetAsync passes the existing file
            // content into the codegen — a second entity's scaffold keeps
            // the first entity's block and adds its own.
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "Contact"));

            Assert.IsTrue(second.Success, string.Join("; ", second.Errors));
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            var optionSet = File.ReadAllText(Path.Combine(_srcDirectory, "OptionSet.ts"));
            StringAssert.Contains(optionSet, "/** Account entity OptionSets */");
            StringAssert.Contains(optionSet, "const Account = {");
            StringAssert.Contains(optionSet, "PreferredContactMethod: { Email: 1, Phone: 2 }");
            StringAssert.Contains(optionSet, "/** Contact entity OptionSets */");
            StringAssert.Contains(optionSet, "const Contact = {");
            StringAssert.Contains(optionSet, "PreferredTemperature: { Cold: 2, Warm: 1 }");
        }
    }
}
