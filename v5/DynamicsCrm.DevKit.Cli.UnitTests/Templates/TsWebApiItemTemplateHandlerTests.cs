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
    /// I.15 acceptance tests for the TsWebApi item template: the two payload
    /// files of CSharpTsWebApiItemTemplate.vstemplate — the static "//" user
    /// stub {Entity}.ts and the generated webapi twin {Entity}.webapi.ts
    /// (typed early-bound style CRUD off the entity's attribute metadata) —
    /// plus the wizard's always-run OptionSet.ts refresh (merged with any
    /// existing entity blocks), and the VSIX idempotency semantics (stub
    /// never overwritten unless force, twin and OptionSet rewritten when
    /// their real content changed). The codegen reads the lazy XrmHelper
    /// caches (metadata and every lookup target), so the tests pre-seed the
    /// metadata cache instead of a service.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class TsWebApiItemTemplateHandlerTests
    {
        private string _directory;
        private string _srcDirectory;
        private List<EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-tswebapi-handler-tests", Guid.NewGuid().ToString("N"));
            var webResourceDirectory = Path.Combine(_directory, "Contoso.WebResourceTs");
            _srcDirectory = Path.Combine(webResourceDirectory, "src");
            Directory.CreateDirectory(_srcDirectory);
            // SDK-style csproj above the target folder — the engine resolves
            // the project (and its RootNamespace) walking up from --out.
            File.WriteAllText(Path.Combine(webResourceDirectory, "Contoso.WebResourceTs.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // The handler and the TsWebApi codegen read the static XrmHelper
            // metadata cache (the wizard reads the same cache the entity
            // combo fills); the restore keeps the pollution away from the
            // other test classes. Contact is the lookup target of the
            // account fixture's PrimaryContactId.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata(), ContactMetadata() };

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

        private ItemTemplateInput Input(string entity = "Account", bool force = false)
        {
            return new ItemTemplateInput
            {
                TemplateId = "TsWebApi",
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
                new LookupAttributeMetadata
                {
                    SchemaName = "PrimaryContactId",
                    LogicalName = "primarycontactid",
                    Targets = new[] { "contact" },
                },
            });
            Set(metadata.Attributes[3], "AttributeType", AttributeTypeCode.Picklist);
            Set(metadata.Attributes[4], "AttributeType", AttributeTypeCode.Lookup);
            return metadata;
        }

        /// <summary>
        /// The lookup target of the account fixture: one string field and
        /// one picklist of its own — also the second entity for the
        /// OptionSet.ts merge test.
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

        private static void Set(object source, string property, object value)
        {
            var setter = source.GetType().GetProperty(property);
            if (setter == null) throw new InvalidOperationException($"property {property} not found on {source.GetType().Name}");
            setter.SetValue(source, value);
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplate_TwoFiles()
        {
            var manifest = TsWebApiItemTemplateHandler.CreateManifest();

            Assert.AreEqual("TsWebApi", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(2, manifest.Files.Count);
            Assert.AreEqual("$SchemaName$.ts", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$SchemaName$.webapi.ts", manifest.Files[1].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.tswebapi.TypeScript.ts");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.tswebapi.TypeScript.webapi.ts");
        }

        [TestMethod]
        public void NewList_ItemTsWebApiIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "TsWebApi"));
            Assert.IsNotNull(TemplateCatalog.Find("TsWebApi", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesTwoFilesAndOptionSet_WithWebApiCode()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.webapi.ts").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "OptionSet.ts").Action);

            // Byte-faithful to Visual Studio: the two payload stubs carry
            // the template files' own encoding (no BOM), while the
            // wizard-written OptionSet.ts carries a UTF-8 signature.
            var stubBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "Account.ts"));
            Assert.AreEqual(2, stubBytes.Length, "Account.ts");
            Assert.AreEqual((byte)'/', stubBytes[0], "Account.ts");
            Assert.AreEqual((byte)'/', stubBytes[1], "Account.ts");
            var webApiBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "Account.webapi.ts"));
            Assert.AreEqual((byte)'/', webApiBytes[0], "Account.webapi.ts");
            var optionSetBytes = File.ReadAllBytes(Path.Combine(_srcDirectory, "OptionSet.ts"));
            Assert.AreEqual(0xEF, optionSetBytes[0], "OptionSet.ts");
            Assert.AreEqual(0xBB, optionSetBytes[1], "OptionSet.ts");
            Assert.AreEqual(0xBF, optionSetBytes[2], "OptionSet.ts");

            // The user stub: the template's static "//" placeholder — the
            // one stub in the family with no codegen behind it.
            Assert.AreEqual("//", File.ReadAllText(Path.Combine(_srcDirectory, "Account.ts")));

            // The webapi twin: header comment, devkit import, the typed
            // interface with the FormattedValue map, the field config (raw
            // logical names, the picklist typed Integer, the lookup
            // rewritten to its _value frame with the cached target's
            // collection) and the API class pair.
            var webApi = File.ReadAllText(Path.Combine(_srcDirectory, "Account.webapi.ts"));
            StringAssert.Contains(webApi, " * Account.webapi.ts - Account WebApi for early-bound style coding");
            StringAssert.Contains(webApi, "import { createWebApiEntity } from '../lib/devkit';");
            StringAssert.Contains(webApi, "export interface IAccountApi extends DevKit.IWebApiEntity");
            StringAssert.Contains(webApi, "readonly FormattedValue:");
            StringAssert.Contains(webApi, ": string | null;");
            StringAssert.Contains(webApi, ": DevKit.Guid | null;");
            StringAssert.Contains(webApi, "const AccountFieldConfig: DevKit.IWebApiFieldConfigMap = {");
            StringAssert.Contains(webApi, "logicalName: 'accountid'");
            StringAssert.Contains(webApi, "logicalName: 'createdon', type: 'DateTime'");
            StringAssert.Contains(webApi, "logicalName: 'preferredcontactmethod', type: 'Integer'");
            StringAssert.Contains(webApi, "schemaName: 'PrimaryContactId', logicalName: '_primarycontactid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact'");
            StringAssert.Contains(webApi, "export class AccountApi");
            StringAssert.Contains(webApi, "createWebApiEntity<IAccountApi>(entity, 'account', 'accounts'");
            StringAssert.Contains(webApi, "export interface AccountApi extends IAccountApi { }");

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
            CollectionAssert.AreEqual(new[] { "Account.ts", "Account.webapi.ts", "OptionSet.ts" }, names);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserStubSkipped_WebApiAndOptionSetUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var stubFile = Path.Combine(_srcDirectory, "Account.ts");
            File.AppendAllText(stubFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.webapi.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            StringAssert.Contains(File.ReadAllText(stubFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_WebApiCodeChange_WebApiUpdated_OtherFilesUntouched()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var webApiFile = Path.Combine(_srcDirectory, "Account.webapi.ts");
            File.WriteAllText(webApiFile, File.ReadAllText(webApiFile).Replace("'createdon'", "'createdon2'"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The twin is rewritten only when its own content changed —
            // the wizard's RunFinished WriteTargetFileIfChangedAsync.
            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.webapi.ts").Action);
            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.ts").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "OptionSet.ts").Action);
            StringAssert.Contains(File.ReadAllText(webApiFile), "logicalName: 'createdon'");
        }

        [TestMethod]
        public async Task ScaffoldAsync_WhitespaceOnlyChange_TwinUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The generated compare is Helper.IsTheSame — the
            // whitespace-tolerant compare the CLI generator
            // (TaskGenerator.GeneratorTsWebApiAsync) uses for the same
            // .webapi.ts files: a whitespace-only edit is not a change.
            var webApiFile = Path.Combine(_srcDirectory, "Account.webapi.ts");
            var content = File.ReadAllText(webApiFile);
            File.WriteAllText(webApiFile, content.Replace("\r", "").Replace("\n", "").Replace(" ", "").Replace("\t", ""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.webapi.ts").Action);
            // Not rewritten — the stripped content is still on disk.
            Assert.AreEqual(content.Replace("\r", "").Replace("\n", "").Replace(" ", "").Replace("\t", ""), File.ReadAllText(webApiFile));
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
        public async Task ScaffoldAsync_LookupTargetNotCachedWithoutService_FailsWithConnectionError()
        {
            // The webapi codegen resolves every lookup target through the
            // lazy XrmHelper cache (AddIfNotExistAsync) — without a service
            // a missing target is unknowable, so the handler refuses up
            // front. Dropping Contact from the cache strands the account
            // fixture's PrimaryContactId.
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata() };

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires a Dataverse connection to read entity metadata");
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
            Assert.IsFalse(File.Exists(Path.Combine(_srcDirectory, "Nope.webapi.ts")));
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
