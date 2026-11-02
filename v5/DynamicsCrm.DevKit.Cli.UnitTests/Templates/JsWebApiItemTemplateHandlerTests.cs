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
    /// I.3 acceptance tests for the JsWebApi item template: the three payload
    /// files of CSharpJsWebApiItemTemplate.vstemplate generated from the
    /// entity's attribute metadata (user stub {Entity}.js, generated twins
    /// {Entity}.d.ts and {Entity}.webapi.js), the VSIX idempotency semantics
    /// (stub never overwritten unless force, twins rewritten when their
    /// full content changed — they carry no timestamp header) and the
    /// {Entity}.form.js sibling turning the .d.ts Form section on. The
    /// codegen reads the lazy XrmHelper caches (metadata — including every
    /// lookup target — and, with a .form.js sibling, form xml and BPF
    /// processes), so the tests pre-seed those instead of a service.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class JsWebApiItemTemplateHandlerTests
    {
        private string _directory;
        private string _entitiesDirectory;
        private List<EntityMetadata> _originalMetadataCache;
        private List<SystemForm> _originalFormXmlCache;
        private List<ProcessForm> _originalProcessFormCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-jswebapi-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResource");
            _entitiesDirectory = Path.Combine(webResourceDirectory, "entities");
            Directory.CreateDirectory(_entitiesDirectory);
            // SDK-style csproj with no RootNamespace element — the scanner
            // falls back to the file name, so $rootnamespace$ resolves to
            // Contoso.WebResource.entities (the VS-composed value).
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResource.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // The handler and the JsWebApi codegen read the static XrmHelper
            // caches (the wizard reads the same caches the entity prompt
            // fills); the restores keep the pollution away from the other
            // test classes.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            _originalFormXmlCache = XrmHelper.EntitiesFormXml;
            _originalProcessFormCache = XrmHelper.EntitiesProcessForm;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata(), ContactMetadata() };
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
                TemplateId = "JsWebApi",
                Entity = entity,
                OutputDirectory = _entitiesDirectory,
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

        /// <summary>
        /// A minimal but real entity: primary id, one string, one datetime,
        /// one picklist and one single-target lookup (into Contact) —
        /// enough for the stub, the webapi twin (attribute branches) and
        /// the declaration. Relationships and keys stay null, the codegen
        /// null-guards them. Several EntityMetadata properties are
        /// read-only in the SDK — the MetadataExtensionsTests reflection
        /// pattern sets them.
        /// </summary>
        private static EntityMetadata AccountMetadata(bool includeAttributes = true)
        {
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
            if (includeAttributes)
            {
                var optionSet = new OptionSetMetadata();
                optionSet.Options.Add(Option("Email", 1));
                optionSet.Options.Add(Option("Phone", 2));
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
                    new LookupAttributeMetadata { SchemaName = "PrimaryContactId", LogicalName = "primarycontactid", Targets = new[] { "contact" } },
                });
                Set(metadata.Attributes[2], "AttributeType", AttributeTypeCode.DateTime);
                Set(metadata.Attributes[3], "AttributeType", AttributeTypeCode.Picklist);
                Set(metadata.Attributes[4], "AttributeType", AttributeTypeCode.Lookup);
            }
            return metadata;
        }

        /// <summary>
        /// The lookup target of Account.PrimaryContactId: the webapi codegen
        /// reads its LogicalCollectionName for the OData navigation set and
        /// the offline pre-check needs the entity in the cache at all.
        /// </summary>
        private static EntityMetadata ContactMetadata()
        {
            var metadata = new EntityMetadata
            {
                SchemaName = "Contact",
                LogicalName = "contact",
                EntitySetName = "contacts",
                IsActivity = false,
            };
            Set(metadata, "ObjectTypeCode", 2);
            Set(metadata, "PrimaryIdAttribute", "contactid");
            Set(metadata, "LogicalCollectionName", "contacts");
            Set(metadata, "CollectionSchemaName", "contacts");
            Set(metadata, "Attributes", new AttributeMetadata[]
            {
                new UniqueIdentifierAttributeMetadata { SchemaName = "ContactId", LogicalName = "contactid" },
                new StringAttributeMetadata { SchemaName = "FullName", LogicalName = "fullname" },
            });
            return metadata;
        }

        /// <summary>
        /// One enabled Main form carrying a tab/section with two fields, a
        /// header field and an empty navigation bar — the shape the
        /// declaration's Form section parses when a {Entity}.form.js
        /// sibling exists.
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
        /// A harmless BPF process for the entity: with a .form.js sibling
        /// the declaration's Form section walks the EntitiesProcessForm
        /// cache too (its AddIfNotExistAsync needs an entry to stay
        /// offline) and parses its xaml — an ActivityReference without
        /// DataFieldName matches adds nothing.
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
            var manifest = JsWebApiItemTemplateHandler.CreateManifest();

            Assert.AreEqual("JsWebApi", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(3, manifest.Files.Count);
            Assert.AreEqual("$SchemaName$.js", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$SchemaName$.d.ts", manifest.Files[1].TargetFileName);
            Assert.AreEqual("$SchemaName$.webapi.js", manifest.Files[2].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            Assert.IsTrue(manifest.Files[2].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.jswebapi.Javascript.js");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.jswebapi.Javascript.d.ts");
            StringAssert.StartsWith(manifest.Files[2].ResourceName, "Resources.templates.item.jswebapi.Javascript.webapi.js");
        }

        [TestMethod]
        public void NewList_ItemJsWebApiIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "JsWebApi"));
            Assert.IsNotNull(TemplateCatalog.Find("JsWebApi", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesThreeFiles_WithWebApiCode()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.js").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.d.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.webapi.js").Action);

            // Byte-faithful to Visual Studio: all three stubs carry a BOM.
            foreach (var name in new[] { "Account.js", "Account.d.ts", "Account.webapi.js" })
            {
                var bytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, name));
                Assert.AreEqual(0xEF, bytes[0], name);
                Assert.AreEqual(0xBB, bytes[1], name);
                Assert.AreEqual(0xBF, bytes[2], name);
            }

            // The user stub is the wizard's two-liner $Javascript$ token.
            var stub = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.js"));
            StringAssert.Contains(stub, "//@ts-check");
            StringAssert.Contains(stub, "///<reference path=\"Account.d.ts\" />");

            // The webapi twin: namespace boilerplate, one Api factory, the
            // attribute fields per codegen branch (plain, DateTime suffix,
            // picklist Integer and the OData lookup navigation) and the
            // OptionSet values.
            var webApi = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.webapi.js"));
            StringAssert.Contains(webApi, "'use strict';");
            StringAssert.Contains(webApi, "/** @namespace WebResource */");
            StringAssert.Contains(webApi, "WebResource.AccountApi = function (e) {");
            StringAssert.Contains(webApi, "webApiField(account, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);");
            StringAssert.Contains(webApi, "AccountId: { a: 'accountid', r: true },");
            StringAssert.Contains(webApi, "CreatedOn_TimezoneDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },");
            StringAssert.Contains(webApi, "Name: { a: 'name', r: true },");
            StringAssert.Contains(webApi, "PreferredContactMethod: { a: 'preferredcontactmethod', r: true, g: 'Integer' },");
            StringAssert.Contains(webApi, "PrimaryContactId: { b: 'primarycontactid', a: '_primarycontactid_value', c: 'contacts', d: 'contact', r: true }");
            StringAssert.Contains(webApi, "account.EntityName = 'account';");
            StringAssert.Contains(webApi, "account.EntityCollectionName = 'accounts';");
            StringAssert.Contains(webApi, "OptionSet.Account = {");
            StringAssert.Contains(webApi, "PreferredContactMethod: { Email: 1, Phone: 2 },");

            // The declaration: devkit reference, the WebApi class (always
            // on), the OptionSet enums, the RollupState fallback — and no
            // Form section while no {Entity}.form.js sibling exists.
            var dts = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.d.ts"));
            StringAssert.Contains(dts, "///<reference path=\"devkit.d.ts\" />");
            StringAssert.Contains(dts, "declare namespace WebResource {");
            StringAssert.Contains(dts, "export class AccountApi {");
            StringAssert.Contains(dts, "constructor(entity?: Record<string, any>)");
            StringAssert.Contains(dts, "getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;");
            StringAssert.Contains(dts, "enum PreferredContactMethod {");
            StringAssert.Contains(dts, "enum RollupState {");
            Assert.IsFalse(dts.Contains("FormAccount"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_LogicalNameInput_NamesFilesBySchemaName()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "account"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            // The file system compares case-insensitively on Windows — check
            // the actual names (the wizard names files by SchemaName).
            var names = Directory.GetFiles(_entitiesDirectory).Select(Path.GetFileName).OrderBy(name => name, StringComparer.Ordinal).ToList();
            CollectionAssert.AreEqual(new[] { "Account.d.ts", "Account.js", "Account.webapi.js" }, names);
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
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.webapi.js").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_WebApiCodeChange_WebApiTwinUpdated_DeclarationUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var webApiFile = Path.Combine(_entitiesDirectory, "Account.webapi.js");
            File.WriteAllText(webApiFile, File.ReadAllText(webApiFile).Replace("'createdon'", "'createdon2'"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The twins are compared (and rewritten) independently — the
            // wizard's RunFinished WriteTargetFileIfChangedAsync per file.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.webapi.js").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.d.ts").Action);
            StringAssert.Contains(File.ReadAllText(webApiFile), "CreatedOn_TimezoneDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },");
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
        public async Task ScaffoldAsync_FormSibling_TurnsOnDtsFormSection()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The wizard's IsJsFormExistAsync: the {Entity}.form.js sibling
            // in the target folder (pairs with the JsForm item).
            File.WriteAllText(Path.Combine(_entitiesDirectory, "Account.form.js"), "// form scaffold");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(second.Success, string.Join("; ", second.Errors));
            // Only the declaration changes — the webapi twin does not read
            // the entity's forms.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.d.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.webapi.js").Action);
            var dts = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.d.ts"));
            StringAssert.Contains(dts, "namespace FormAccount {");
            StringAssert.Contains(dts, "export class FormAccount extends DevKit.IForm {");
            StringAssert.Contains(dts, "export class AccountApi {");
        }

        [TestMethod]
        public async Task ScaffoldAsync_MetadataWithoutAttributes_ColdCacheWithoutService_FailsWithConnectionError()
        {
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata(includeAttributes: false), ContactMetadata() };

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires a Dataverse connection to read entity metadata");
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Account.webapi.js")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_LookupTargetMissingWithoutService_FailsWithConnectionError()
        {
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata() };

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires a Dataverse connection to read entity metadata");
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Account.webapi.js")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_FormSiblingColdFormCacheWithoutService_FailsWithConnectionError()
        {
            File.WriteAllText(Path.Combine(_entitiesDirectory, "Account.form.js"), "// form scaffold");
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
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.webapi.js")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.d.ts")));
        }
    }
}
