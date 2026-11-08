using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// TaskGenerator's task-level RunAsync for the C# (LateBound) generator,
/// driven against a FakeSdkClient: the entities-list filter ('*') through
/// ReadEntitiesMetadataAsync, the named-entities ExecuteMultiple lookup,
/// the CREATED → DO_NOTHING → UPDATED file lifecycle, the public→internal
/// migration of the custom file, and the stale-cache reuse on the second
/// run. The >500-entity re-read and the JSON-null gate are unreachable
/// (501 entities would generate 501 files; the ctor NREs on a null json).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskGeneratorTaskFlowTests
{
    private FakeSdkClient _fake = null!;
    private string _work = null!;
    private string _originalCwd = null!;
    private List<EntityMetadata> _savedMetadata = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _work = Path.Combine(Path.GetTempPath(), "DevKitCli_GeneratorFlow", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_work);
        Directory.SetCurrentDirectory(_work);
        _savedMetadata = XrmHelper.EntitiesMetadata;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.COUNT_ExecuteAsync = 0;
        XrmHelper.COUNT_RetrieveMultipleAsync = 0;

        var account = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name", "Name"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"));
        var contact = TestMetadata.Entity("contact", "Contact",
            TestMetadata.String("fullname", "Full Name"));
        _metadataByLogicalName = new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
        {
            ["account"] = account,
            ["contact"] = contact
        };
        _fake.OnExecute = request => request switch
        {
            ExecuteMultipleRequest multiple => MultipleResponse(multiple),
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { account } }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = _ => new EntityCollection(new List<Entity>());
    }

    private Dictionary<string, EntityMetadata> _metadataByLogicalName = null!;

    [TestCleanup]
    public void Cleanup()
    {
        Directory.SetCurrentDirectory(_originalCwd);
        XrmHelper.EntitiesMetadata = _savedMetadata;
        _fake.Dispose();
        if (Directory.Exists(_work)) Directory.Delete(_work, true);
    }

    private ExecuteMultipleResponse MultipleResponse(ExecuteMultipleRequest request)
    {
        var items = new ExecuteMultipleResponseItemCollection();
        foreach (var item in request.Requests.OfType<RetrieveEntityRequest>())
        {
            var metadata = _metadataByLogicalName.GetValueOrDefault(item.LogicalName) ?? _metadataByLogicalName.Values.First();
            items.Add(new ExecuteMultipleResponseItem
            {
                RequestIndex = items.Count,
                Response = new RetrieveEntityResponse { Results = { ["EntityMetadata"] = metadata } }
            });
        }
        return new ExecuteMultipleResponse { Results = { ["Responses"] = items } };
    }

    private TaskGenerator NewTask(string entities) => new(
        new CommandLineArgs
        {
            Type = "generators",
            Profile = "test",
            ServiceClient = _fake.Client
        },
        new JsonGenerator
        {
            profile = "test",
            type = "csharp",
            rootfolder = ".",
            entities = entities,
            rootnamespace = "Dev.Entities"
        }) { CurrentDirectory = _work };

    [TestMethod]
    public async Task RunAsync_NamedEntity_CreatesGeneratedAndCustomFiles()
    {
        await NewTask("account").RunAsync();
        Assert.IsTrue(File.Exists(Path.Combine(_work, "Account.generated.cs")), "the generated class was created.");
        Assert.IsTrue(File.Exists(Path.Combine(_work, "Account.cs")), "the default custom file was created.");
        StringAssert.Contains(await File.ReadAllTextAsync(Path.Combine(_work, "Account.generated.cs")), "internal partial class Account",
            "the generated class renders through the org metadata.");
        // The default custom file ships 'internal partial class Account' —
        // the migration pass leaves it untouched (no public declaration).
        StringAssert.Contains(await File.ReadAllTextAsync(Path.Combine(_work, "Account.cs")), "internal partial class Account",
            "the default custom file was created.");
    }

    [TestMethod]
    public async Task RunAsync_SecondRun_DoesNothingWhenContentMatches()
    {
        await NewTask("account").RunAsync();
        var generated = Path.Combine(_work, "Account.generated.cs");
        var afterFirst = await File.ReadAllTextAsync(generated);

        await NewTask("account").RunAsync(); // cache warm — no ExecuteMultiple
        Assert.AreEqual(afterFirst, await File.ReadAllTextAsync(generated), "identical content is left untouched.");
    }

    [TestMethod]
    public async Task RunAsync_ChangedCustomFile_Updates()
    {
        await NewTask("account").RunAsync();
        var generated = Path.Combine(_work, "Account.generated.cs");
        await File.WriteAllTextAsync(generated, "// manually changed");

        await NewTask("account").RunAsync();
        StringAssert.Contains(await File.ReadAllTextAsync(generated), "internal partial class Account",
            "a drifted generated file is regenerated (UPDATED).");
    }

    [TestMethod]
    public async Task RunAsync_AllEntities_GoesThroughReadEntitiesMetadata()
    {
        // '*' re-reads the whole org metadata (RetrieveAllEntitiesRequest)
        // and generates one pair of files per entity.
        await NewTask("*").RunAsync();
        Assert.IsTrue(File.Exists(Path.Combine(_work, "Account.generated.cs")),
            "the account metadata arrived through the org-wide read.");
        Assert.IsTrue(File.Exists(Path.Combine(_work, "Account.cs")));
    }

    [TestMethod]
    public async Task RunAsync_FolderMode_MapsFilesBackToSchemaNames()
    {
        var generated = Path.Combine(_work, "Contact.generated.cs");
        await File.WriteAllTextAsync(generated, "// stale generated code");
        var custom = Path.Combine(_work, "Contact.cs");
        await File.WriteAllTextAsync(custom, "public partial class Contact { }");

        await NewTask("folder").RunAsync();
        // The folder filter has no org round-trip: the schema name comes
        // from the file name, the metadata from the ExecuteMultiple lookup.
        StringAssert.Contains(await File.ReadAllTextAsync(generated), "internal partial class Contact",
            "the folder-discovered entity was regenerated.");
        StringAssert.Contains(await File.ReadAllTextAsync(custom), "internal partial class Contact",
            "the migration rewrites the public declaration.");
    }

    [TestMethod]
    public async Task RunAsync_InvalidType_StopsAtValidation()
    {
        var task = new TaskGenerator(
            new CommandLineArgs { Type = "generators", Profile = "test", ServiceClient = _fake.Client },
            new JsonGenerator { profile = "test", type = "bogus", rootfolder = ".", rootnamespace = "Ns" });
        await task.RunAsync();
        Assert.IsEmpty(Directory.GetFiles(_work, "*.cs"), "validation stopped before any generation.");
    }

    [TestMethod]
    public async Task RunAsync_EmptyRootNamespace_StopsAtValidation()
    {
        var task = new TaskGenerator(
            new CommandLineArgs { Type = "generators", Profile = "test", ServiceClient = _fake.Client },
            new JsonGenerator { profile = "test", type = "csharp", rootfolder = "???", rootnamespace = "???" });
        await task.RunAsync();
        Assert.IsEmpty(Directory.GetFiles(_work, "*.cs"));
    }

    [TestMethod]
    public void IsAll_StaticFlag_IsReadableThroughReflection()
    {
        var property = typeof(TaskGenerator).GetProperty("IsAll", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.IsInstanceOfType(property.GetValue(null), typeof(bool));
    }

    [TestMethod]
    public void IsValidAsync_NullJson_IsUnreachableWithoutProductChange()
    {
        // TaskGenerator's ctor reads json.type.ToUpper() (TaskType init),
        // so a null JsonGenerator cannot reach the Json == null gate at
        // IsValidAsync — noted as unreachable without a product change.
        Assert.ThrowsExactly<NullReferenceException>(() =>
            new TaskGenerator(new CommandLineArgs { Type = "generators" }, null!));
    }
}
