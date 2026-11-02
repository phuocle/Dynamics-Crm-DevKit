using DynamicsCrm.DevKit.Shared;
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
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.18 acceptance tests for the Report item template: the one
    /// generated .rdl of the 18.ReportItemTemplate .vsz wizard — the
    /// ReportTemplateBuilder port's eleven-step rewrite of the legacy
    /// Shared resource ReportTemplate.rdl (ConnectString/DataSourceID →
    /// Language → CRM_UILanguageId → CRM_URL → DataSet Name →
    /// QueryParameters → CommandText FetchXml → Fields → the
    /// CRM_Filtered* parameter → the ParameterName layout cells → the
    /// MSCRM CustomProperty filter), serialized as the declaration line
    /// plus one long line and written with BOM (the wizard's
    /// ForceWriteAllTextAsync), named by the wizard's NormalizeFileName
    /// (the Report.rdl default, the .rdl appended, directory parts
    /// stripped). The entity resolves through the seeded XrmHelper cache
    /// (schema or logical name, case-insensitively) and the language and
    /// environment ride the ResolveOrgInfoAsync seam (the input model's
    /// service is the concrete class), so the tests run connected-free.
    /// The wizard fails on an existing file; the CLI regenerates —
    /// Unchanged when the content matches modulo the per-generation
    /// rd:DataSourceID GUID, Updated otherwise, --force overwrites.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ReportItemTemplateHandlerTests
    {
        private string _directory;
        private string _reportsDirectory;
        private List<EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-report-handler-tests", Guid.NewGuid().ToString("N"));
            _reportsDirectory = Path.Combine(_directory, "Contoso.Data");
            Directory.CreateDirectory(_reportsDirectory);
            // SDK-style csproj above the target folder — the engine resolves
            // the project (and its RootNamespace) walking up from --out.
            File.WriteAllText(Path.Combine(_reportsDirectory, "Contoso.Data.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n  </PropertyGroup>\r\n</Project>");

            // The handler reads entity metadata from the static XrmHelper
            // cache (the wizard reads the same cache the form fills); the
            // restore keeps the pollution away from the other test classes.
            _originalMetadataCache = XrmHelper.EntitiesMetadata;
            XrmHelper.EntitiesMetadata = new List<EntityMetadata> { AccountMetadata() };

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

        /// <summary>
        /// The resolution seam: the fake answers the wizard's language and
        /// environment reads (ReportTemplateBuilder.BuildAsync's
        /// GetLanguageCodeAsync plus ConnectedUrl/ConnectedOrgUniqueName),
        /// so the scaffold runs connected-free. The entity resolution runs
        /// the handler's real code against the seeded cache.
        /// </summary>
        private sealed class FakeReportHandler : ReportItemTemplateHandler
        {
            private readonly ReportOrgInfo _orgInfo;

            public FakeReportHandler(ReportOrgInfo orgInfo)
            {
                _orgInfo = orgInfo;
            }

            protected override Task<ReportOrgInfo> ResolveOrgInfoAsync(ItemTemplateInput input, ScaffoldResult result)
            {
                return Task.FromResult(_orgInfo);
            }
        }

        private void UseFakeHandler()
        {
            ScaffoldingEngine.ClearHandlers();
            ScaffoldingEngine.RegisterHandler(TemplateKind.Item, new FakeReportHandler(OrgInfo()));
        }

        private ItemTemplateInput Input(string entity = "Account", string name = "Account", bool force = false)
        {
            return new ItemTemplateInput
            {
                TemplateId = "Report",
                Entity = entity,
                Name = name,
                OutputDirectory = _reportsDirectory,
                Force = force,
            };
        }

        /// <summary>
        /// The org the fake wizard ran against: English (1033), the
        /// environment URL and unique name the ConnectString carries.
        /// </summary>
        private static ReportOrgInfo OrgInfo()
        {
            return new ReportOrgInfo
            {
                LanguageCode = 1033,
                EnvironmentBaseUrl = "https://orgdemo.crm.dynamics.com",
                OrganizationUniqueName = "orgdemo",
            };
        }

        /// <summary>
        /// A minimal but real entity: primary id and primary name enough
        /// for the builder's FetchXml and Fields rewrite. Several
        /// EntityMetadata properties are read-only in the SDK — the
        /// MetadataExtensionsTests reflection pattern sets them.
        /// </summary>
        private static EntityMetadata AccountMetadata()
        {
            var metadata = new EntityMetadata
            {
                SchemaName = "Account",
                LogicalName = "account",
            };
            Set(metadata, "PrimaryIdAttribute", "accountid");
            Set(metadata, "PrimaryNameAttribute", "name");
            Set(metadata, "DisplayCollectionName", new Label("Accounts", 1033));
            return metadata;
        }

        private static void Set(object source, string property, object value)
        {
            var setter = source.GetType().GetProperty(property);
            if (setter == null) throw new InvalidOperationException($"property {property} not found on {source.GetType().Name}");
            setter.SetValue(source, value);
        }

        [TestMethod]
        public void CreateManifest_DeclaresTheGeneratedReportFile()
        {
            var manifest = ReportItemTemplateHandler.CreateManifest();

            Assert.AreEqual("Report", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(1, manifest.Files.Count);
            Assert.AreEqual("$ReportName$.rdl", manifest.Files[0].TargetFileName);
            Assert.AreEqual("ReportTemplate.rdl", manifest.Files[0].ResourceName);
            // The mutation is XML rewriting, not token replacement.
            Assert.IsFalse(manifest.Files[0].ReplaceParameters);
            Assert.IsTrue(manifest.Files[0].IsGenerated);
        }

        [TestMethod]
        public void NewList_ItemReportIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "Report"));
            var itemDescriptor = TemplateCatalog.Find("Report", TemplateKind.Item);
            Assert.IsNotNull(itemDescriptor);
            Assert.AreEqual(18, itemDescriptor.Order);
            // The wizard's FormItem is a connect-first dialog (the combo
            // fills on Connection_Connected) — the catalog says so too.
            Assert.IsTrue(itemDescriptor.RequiresConnection);
            // The id is kind-scoped: the Report project row (P.12) shares
            // the id without shadowing the item twin.
            var projectDescriptor = TemplateCatalog.Find("Report", TemplateKind.Project);
            Assert.IsNotNull(projectDescriptor);
            Assert.AreEqual(12, projectDescriptor.Order);
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesReportRdl_WithBomSingleLineAndUploadHint()
        {
            UseFakeHandler();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.rdl").Action);
            StringAssert.Contains(result.Warnings[0], "devkit uploadreport");

            // Byte-faithful to Visual Studio: the wizard writes with
            // ForceWriteAllTextAsync — UTF-8 with BOM — and the builder
            // serializes as the declaration line plus one long line with
            // no trailing newline.
            var bytes = File.ReadAllBytes(Path.Combine(_reportsDirectory, "Account.rdl"));
            Assert.AreEqual(0xEF, bytes[0]);
            Assert.AreEqual(0xBB, bytes[1]);
            Assert.AreEqual(0xBF, bytes[2]);
            var content = File.ReadAllText(Path.Combine(_reportsDirectory, "Account.rdl"));
            StringAssert.StartsWith(content, "<?xml version=\"1.0\" encoding=\"utf-8\"?>");
            // The PreserveWhitespace-parsed tree keeps the template's own
            // layout (the body is NOT one compacted line).
            Assert.IsTrue(content.TrimEnd().EndsWith("</Report>"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rdl_MatchesTheWizardShape()
        {
            UseFakeHandler();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var document = XDocument.Parse(File.ReadAllText(Path.Combine(_reportsDirectory, "Account.rdl")));
            var ns = document.Root.Name.Namespace;
            var rd = XNamespace.Get("http://schemas.microsoft.com/SQLServer/reporting/reportdesigner");

            // The per-generation DataSourceID GUID the wizard randomizes.
            var dataSourceId = document.Descendants().First(x => x.Name.LocalName == "DataSourceID").Value;
            Assert.IsTrue(Guid.TryParse(dataSourceId, out _), "rd:DataSourceID carries a fresh GUID");

            var dataSet = document.Descendants(ns + "DataSet").Single();
            Assert.AreEqual("Account", (string)dataSet.Attribute("Name"));

            // The CommandText FetchXml: the picked entity, prefiltered,
            // attributes primary name (aliased) then primary id — the
            // builder's BuildPrimaryFetchXml order.
            var fetch = XDocument.Parse(dataSet.Element(ns + "Query").Element(ns + "CommandText").Value);
            var entity = fetch.Descendants().First(x => x.Name.LocalName == "entity");
            Assert.AreEqual("account", (string)entity.Attribute("name"));
            Assert.AreEqual("1", (string)entity.Attribute("enableprefiltering"));
            Assert.AreEqual("CRM_FilteredAccount", (string)entity.Attribute("prefilterparametername"));
            var attributes = entity.Elements().Where(x => x.Name.LocalName == "attribute").ToList();
            Assert.AreEqual(2, attributes.Count);
            Assert.AreEqual("name", (string)attributes[0].Attribute("name"));
            Assert.AreEqual("name", (string)attributes[0].Attribute("alias"));
            Assert.AreEqual("accountid", (string)attributes[1].Attribute("name"));

            // The Fields: the same pair, each with its DataField and the
            // rd:TypeName System.String.
            var fields = dataSet.Element(ns + "Fields").Elements(ns + "Field").ToList();
            Assert.AreEqual(2, fields.Count);
            Assert.AreEqual("name", (string)fields[0].Attribute("Name"));
            Assert.AreEqual("name", (string)fields[0].Element(ns + "DataField"));
            Assert.AreEqual("System.String", (string)fields[0].Element(rd + "TypeName"));
            Assert.AreEqual("accountid", (string)fields[1].Attribute("Name"));
            Assert.AreEqual("System.String", (string)fields[1].Element(rd + "TypeName"));

            // The connection values: ConnectedUrl/;ConnectedOrgUniqueName.
            Assert.AreEqual("https://orgdemo.crm.dynamics.com/;orgdemo", document.Descendants(ns + "ConnectString").Single().Value);
            Assert.AreEqual("en-US", document.Root.Element(ns + "Language").Value);

            // The CRM_UILanguageId and CRM_URL parameter defaults.
            var uiLanguage = document.Descendants(ns + "ReportParameter").First(x => (string)x.Attribute("Name") == "CRM_UILanguageId");
            Assert.AreEqual("1033", uiLanguage.Descendants(ns + "Value").First().Value);
            var urlParameter = document.Descendants(ns + "ReportParameter").First(x => (string)x.Attribute("Name") == "CRM_URL");
            Assert.AreEqual("https://orgdemo.crm.dynamics.com", urlParameter.Descendants(ns + "Value").First().Value);

            // The CRM_Filtered* parameter: renamed, prompted with the
            // display collection name, defaulted to the not-null filter
            // fetch the builder builds.
            var filteredParameter = document.Descendants(ns + "ReportParameter")
                .First(x => ((string)x.Attribute("Name")).StartsWith("CRM_Filtered", StringComparison.OrdinalIgnoreCase));
            Assert.AreEqual("CRM_FilteredAccount", (string)filteredParameter.Attribute("Name"));
            Assert.AreEqual("Accounts", filteredParameter.Element(ns + "Prompt").Value);
            var defaultFilter = XDocument.Parse(filteredParameter.Descendants(ns + "Value").First().Value);
            var filterEntity = defaultFilter.Descendants().First(x => x.Name.LocalName == "entity");
            Assert.AreEqual("account", (string)filterEntity.Attribute("name"));
            Assert.IsNotNull(filterEntity.Descendants().First(x => x.Name.LocalName == "all-attributes"));
            var condition = defaultFilter.Descendants().First(x => x.Name.LocalName == "condition");
            Assert.AreEqual("accountid", (string)condition.Attribute("attribute"));
            Assert.AreEqual("not-null", (string)condition.Attribute("operator"));

            // The ParameterName layout cells follow the rename.
            Assert.IsTrue(document.Descendants(ns + "ParameterName")
                .Where(x => ((string)x).StartsWith("CRM_Filtered", StringComparison.OrdinalIgnoreCase))
                .All(x => (string)x == "CRM_FilteredAccount"));

            // The MSCRM CustomProperty filter: the value is double-encoded
            // (the MSCRM wrapper carries the encoded ReportFilter), so the
            // report entity surfaces on the second parse — paramname,
            // displayname, entity name and condition attribute all follow
            // the pick.
            var customValue = document.Descendants(ns + "CustomProperty")
                .First(x => (string)x.Element(ns + "Name") == "Custom")
                .Element(ns + "Value").Value;
            var mscrm = XDocument.Parse(customValue);
            var reportEntity = XDocument.Parse(mscrm.Root.Value).Descendants().First(x => x.Name.LocalName == "ReportEntity");
            Assert.AreEqual("CRM_FilteredAccount", (string)reportEntity.Attribute("paramname"));
            Assert.AreEqual("Accounts", (string)reportEntity.Attribute("displayname"));
            var customEntity = reportEntity.Descendants().First(x => x.Name.LocalName == "entity");
            Assert.AreEqual("account", (string)customEntity.Attribute("name"));
            Assert.AreEqual("accountid", (string)customEntity.Descendants().First(x => x.Name.LocalName == "condition").Attribute("attribute"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Name_DefaultsToReportRdl()
        {
            UseFakeHandler();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(name: null));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            // The .vsdir's default item name, kept when --name is omitted.
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Report.rdl").Action);
            Assert.IsTrue(File.Exists(Path.Combine(_reportsDirectory, "Report.rdl")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Name_NormalizesLikeTheWizard()
        {
            UseFakeHandler();

            // The wizard's NormalizeFileName: a missing .rdl extension is
            // appended, directory parts are stripped, an .RDL suffix
            // already present is kept.
            await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "Account Report"));
            await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "..\\sub\\Contoso"));
            await ScaffoldingEngine.ScaffoldItemAsync(Input(name: "Sales.RDL"));

            Assert.IsTrue(File.Exists(Path.Combine(_reportsDirectory, "Account Report.rdl")));
            Assert.IsTrue(File.Exists(Path.Combine(_reportsDirectory, "Contoso.rdl")));
            Assert.IsTrue(File.Exists(Path.Combine(_reportsDirectory, "Sales.RDL")));
            Assert.IsFalse(File.Exists(Path.Combine(_reportsDirectory, "Sales.RDL.rdl")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_DataSourceIdOnly_IsUnchanged()
        {
            UseFakeHandler();
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var reportFile = Path.Combine(_reportsDirectory, "Account.rdl");
            var firstContent = File.ReadAllText(reportFile);

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The regenerated GUID never reaches the disk: the compare
            // normalizes rd:DataSourceID, so an otherwise identical rerun
            // is Unchanged and the file keeps its first GUID.
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.rdl").Action);
            Assert.AreEqual(firstContent, File.ReadAllText(reportFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_EditedFile_IsUpdated()
        {
            UseFakeHandler();
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var reportFile = Path.Combine(_reportsDirectory, "Account.rdl");
            File.AppendAllText(reportFile, "\r\n<!-- edited by user -->");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.rdl").Action);
            var restored = File.ReadAllText(reportFile);
            Assert.IsFalse(restored.Contains("edited by user"));
            Assert.IsTrue(restored.TrimEnd().EndsWith("</Report>"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_Overwrites()
        {
            UseFakeHandler();
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.rdl").Action);
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutService_FailsWithConnectionError()
        {
            // The real handler: no cache, no service — the wizard always
            // runs connected, so the entity metadata read is unknowable.
            XrmHelper.EntitiesMetadata = new List<EntityMetadata>();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "template 'Report': requires a Dataverse connection to read entity metadata.");
            Assert.IsFalse(File.Exists(Path.Combine(_reportsDirectory, "Account.rdl")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CachedEntityWithoutService_FailsOnLanguageRead()
        {
            // The real handler: the cache carries the entity but there is
            // no service for the wizard's language and environment reads.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "template 'Report': requires a Dataverse connection to read the org's language and environment.");
            Assert.IsFalse(File.Exists(Path.Combine(_reportsDirectory, "Account.rdl")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownEntity_FailsWithoutCreatingFiles()
        {
            // The real handler: the cache is the only voice, and it does
            // not carry the typed entity.
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "Nope"));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "--entity 'Nope': entity not found in the current instance.");
            Assert.IsFalse(File.Exists(Path.Combine(_reportsDirectory, "Nope.rdl")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_EntityMatchedCaseInsensitively()
        {
            UseFakeHandler();

            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "ACCOUNT"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.rdl").Action);
        }
    }
}
