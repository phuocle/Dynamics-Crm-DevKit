using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
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
    /// I.1 acceptance tests for the LateBound item template: the two payload
    /// files of CSharpLateBoundItemTemplate.vstemplate generated from entity
    /// metadata (no service needed when the XrmHelper cache carries the
    /// entity), the VSIX idempotency semantics (user file never overwritten
    /// unless force, generated file compared from line 6 on so the volatile
    /// header never triggers a rewrite), the public→internal normalization
    /// of the user file, the .projitems Compile entries when the target is
    /// the shared project and the entity lookup by schema or logical name.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class LateBoundItemTemplateHandlerTests
    {
        private string _directory;
        private string _entitiesDirectory;
        private string _projitemsFile;
        private List<EntityMetadata> _originalMetadataCache;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-latebound-handler-tests", Guid.NewGuid().ToString("N"));
            var sharedDirectory = Path.Combine(_directory, "Contoso.Shared");
            _entitiesDirectory = Path.Combine(sharedDirectory, "Entities");
            Directory.CreateDirectory(_entitiesDirectory);
            File.WriteAllText(Path.Combine(_directory, "Dev.slnx"), "<Solution>\n</Solution>\n");
            File.WriteAllText(Path.Combine(sharedDirectory, "Contoso.Shared.shproj"), "<Project DefaultTargets=\"Build\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\" />");
            _projitemsFile = Path.Combine(sharedDirectory, "Contoso.Shared.projitems");
            File.WriteAllText(_projitemsFile,
                "<Project ToolsVersion=\"4.0\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\r\n  <ItemGroup />\r\n</Project>");

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

        private ItemTemplateInput Input(string entity = "Account", bool force = false)
        {
            return new ItemTemplateInput
            {
                TemplateId = "LateBound",
                Entity = entity,
                OutputDirectory = _entitiesDirectory,
                Force = force,
            };
        }

        /// <summary>
        /// A minimal but real entity: primary id, one string, one datetime —
        /// enough for CSharpLateBound.GetCsCode to generate the full class
        /// (relationships and keys stay null, GetCsCode null-guards them).
        /// Several EntityMetadata properties are read-only in the SDK — the
        /// MetadataExtensionsTests reflection pattern sets them.
        /// </summary>
        private static EntityMetadata AccountMetadata()
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
            Set(metadata, "Attributes", new AttributeMetadata[]
            {
                new UniqueIdentifierAttributeMetadata { SchemaName = "AccountId", LogicalName = "accountid" },
                new StringAttributeMetadata { SchemaName = "Name", LogicalName = "name" },
                new DateTimeAttributeMetadata { SchemaName = "CreatedOn", LogicalName = "createdon" },
            });
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
            var manifest = LateBoundItemTemplateHandler.CreateManifest();

            Assert.AreEqual("LateBound", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Item, manifest.Kind);
            Assert.AreEqual(2, manifest.Files.Count);
            Assert.AreEqual("$SchemaName$.cs", manifest.Files[0].TargetFileName);
            Assert.AreEqual("$SchemaName$.generated.cs", manifest.Files[1].TargetFileName);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
            Assert.IsFalse(manifest.Files[0].IsGenerated);
            Assert.IsTrue(manifest.Files[1].IsGenerated);
            StringAssert.StartsWith(manifest.Files[0].ResourceName, "Resources.templates.item.latebound.Class.cs");
            StringAssert.StartsWith(manifest.Files[1].ResourceName, "Resources.templates.item.latebound.GeneratedClass.cs");
        }

        [TestMethod]
        public void NewList_ItemLateBoundIsReady()
        {
            Assert.IsNotNull(ScaffoldingEngine.FindHandler(TemplateKind.Item, "LateBound"));
            Assert.IsNotNull(TemplateCatalog.Find("LateBound", TemplateKind.Item));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesClassAndGeneratedClass_WithProjitemsCompileEntries()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.cs").Action);
            Assert.AreEqual("Created", result.Files.Single(file => file.FileName == "Account.generated.cs").Action);

            // Byte-faithful to Visual Studio: both stubs carry a BOM.
            var classBytes = File.ReadAllBytes(Path.Combine(_entitiesDirectory, "Account.cs"));
            Assert.AreEqual(0xEF, classBytes[0]);
            Assert.AreEqual(0xBB, classBytes[1]);
            Assert.AreEqual(0xBF, classBytes[2]);

            var classContent = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.cs"));
            StringAssert.Contains(classContent, "internal partial class Account");
            // $rootnamespace$ = project default namespace + the target folder
            // (the TestAllInOne reference carries Dev.AllInOne.Shared.Entities).
            StringAssert.Contains(classContent, "namespace Contoso.Shared.Entities");

            var generatedContent = File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.generated.cs"));
            StringAssert.Contains(generatedContent, "public const string EntityLogicalName = \"account\"");
            StringAssert.Contains(generatedContent, "namespace Contoso.Shared.Entities.AccountOptionSets");

            // The target is the shared project — the .projitems gains the
            // matching Compile entries (VS adds them when the wizard runs).
            Assert.AreEqual("Updated", result.Files.Single(file => file.FileName == "Contoso.Shared.projitems").Action);
            var projitems = File.ReadAllText(_projitemsFile);
            StringAssert.Contains(projitems, "$(MSBuildThisFileDirectory)Entities\\Account.cs");
            StringAssert.Contains(projitems, "$(MSBuildThisFileDirectory)Entities\\Account.generated.cs");
        }

        [TestMethod]
        public async Task ScaffoldAsync_LogicalNameInput_NamesFilesBySchemaName()
        {
            var result = await ScaffoldingEngine.ScaffoldItemAsync(Input(entity: "account"));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.IsTrue(File.Exists(Path.Combine(_entitiesDirectory, "Account.cs")));
            // The file system compares case-insensitively on Windows — check
            // the actual names (the wizard names files by SchemaName).
            var names = Directory.GetFiles(_entitiesDirectory, "*.cs").Select(Path.GetFileName).ToList();
            CollectionAssert.AreEqual(new[] { "Account.cs", "Account.generated.cs" }, names);
        }

        [TestMethod]
        public async Task ScaffoldAsync_Rerun_UserFileSkipped_GeneratedUnchanged_ProjitemsUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var classFile = Path.Combine(_entitiesDirectory, "Account.cs");
            File.AppendAllText(classFile, "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Skipped", second.Files.Single(file => file.FileName == "Account.cs").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.generated.cs").Action);
            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Contoso.Shared.projitems").Action);
            StringAssert.Contains(File.ReadAllText(classFile), "// customized by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_HeaderOnlyChange_GeneratedFileUnchanged()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            // The generated file header is volatile (the wizard stamps the
            // generation date) — the comparison starts at line 6, so a
            // header-only rewrite must NOT trigger an update.
            var generatedFile = Path.Combine(_entitiesDirectory, "Account.generated.cs");
            var lines = File.ReadAllLines(generatedFile);
            lines[0] = "// header rewritten by user";
            File.WriteAllLines(generatedFile, lines);

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Unchanged", second.Files.Single(file => file.FileName == "Account.generated.cs").Action);
            StringAssert.Contains(File.ReadAllText(generatedFile), "// header rewritten by user");
        }

        [TestMethod]
        public async Task ScaffoldAsync_BodyChange_GeneratedFileUpdated()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var generatedFile = Path.Combine(_entitiesDirectory, "Account.generated.cs");
            var content = File.ReadAllText(generatedFile);
            File.WriteAllText(generatedFile, content.Replace("EntitySetName = \"accounts\"", "EntitySetName = \"accounts2\""));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.generated.cs").Action);
            StringAssert.Contains(File.ReadAllText(generatedFile), "EntitySetName = \"accounts\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_PublicPartialClassFile_NormalizedToInternal()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());

            var classFile = Path.Combine(_entitiesDirectory, "Account.cs");
            var content = File.ReadAllText(classFile);
            File.WriteAllText(classFile, content.Replace("internal partial class Account", "public partial class Account"));

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input());

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.cs").Action);
            StringAssert.Contains(File.ReadAllText(classFile), "internal partial class Account");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Force_OverwritesUserFile()
        {
            await ScaffoldingEngine.ScaffoldItemAsync(Input());
            File.AppendAllText(Path.Combine(_entitiesDirectory, "Account.cs"), "\r\n// customized by user");

            var second = await ScaffoldingEngine.ScaffoldItemAsync(Input(force: true));

            Assert.AreEqual("Updated", second.Files.Single(file => file.FileName == "Account.cs").Action);
            Assert.IsFalse(File.ReadAllText(Path.Combine(_entitiesDirectory, "Account.cs")).Contains("// customized by user"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_EmptyCacheWithoutService_FailsWithConnectionError()
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
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.cs")));
            Assert.IsFalse(File.Exists(Path.Combine(_entitiesDirectory, "Nope.generated.cs")));
        }
    }
}
