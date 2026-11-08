using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Wave-2 TaskGenerator coverage: the >500-entity bulk metadata read (RunAsync
/// line 88 plus ReadEntitiesMetadataAsync's full body including the FormXml
/// half that only runs for non-CSharp types), the '(no forms)' skip of the
/// JsForm generator, the TsForm '(no forms)' path with the OptionSet.ts
/// generation, and the complete JsWebApi / TsWebApi file lifecycles (CREATED →
/// DO_NOTHING → UPDATED, both the dts-only update and the full update).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskGeneratorWebApiAndBulkReadTests
{
    private FakeSdkClient _fake = null!;
    private string _work = null!;
    private string _originalCwd = null!;
    private List<EntityMetadata> _savedMetadata = null!;
    private List<SystemForm> _savedFormXml = null!;
    private List<ProcessForm> _savedProcessForm = null!;
    private Dictionary<string, EntityMetadata> _metadataByLogicalName = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _originalCwd = Directory.GetCurrentDirectory();
        _work = Path.Combine(Path.GetTempPath(), "DevKitCli_GeneratorExtra", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_work);
        Directory.SetCurrentDirectory(_work);
        _savedMetadata = XrmHelper.EntitiesMetadata;
        _savedFormXml = XrmHelper.EntitiesFormXml;
        _savedProcessForm = XrmHelper.EntitiesProcessForm;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
        XrmHelper.COUNT_ExecuteAsync = 0;
        XrmHelper.COUNT_RetrieveMultipleAsync = 0;

        var account = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _metadataByLogicalName = new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
        {
            ["account"] = account
        };

        _fake.OnExecute = request => request switch
        {
            ExecuteMultipleRequest multiple => MultipleResponse(multiple),
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = BulkEntities() }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = _ => new EntityCollection(new List<Entity>());
    }

    [TestCleanup]
    public void Cleanup()
    {
        Directory.SetCurrentDirectory(_originalCwd);
        XrmHelper.EntitiesMetadata = _savedMetadata;
        XrmHelper.EntitiesFormXml = _savedFormXml;
        XrmHelper.EntitiesProcessForm = _savedProcessForm;
        _fake.Dispose();
        if (Directory.Exists(_work)) Directory.Delete(_work, true);
    }

    private static EntityMetadata[] BulkEntities()
    {
        var entities = new List<EntityMetadata>();
        for (var i = 0; i < 501; i++)
        {
            entities.Add(TestMetadata.Entity($"bulkentity{i}", $"BulkEntity{i}", TestMetadata.String("name")));
        }
        return [.. entities];
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

    private TaskGenerator NewTask(string type, string entities) => new(
        new CommandLineArgs
        {
            Type = "generators",
            Profile = "test",
            ServiceClient = _fake.Client
        },
        new JsonGenerator
        {
            profile = "test",
            type = type,
            rootfolder = ".",
            entities = entities,
            rootnamespace = "Dev.Entities"
        })
    { CurrentDirectory = _work };

    // ────────────────────────────────────────────────────────────────────
    // The >500 branch — the bulk read runs for a JsForm (non-CSharp) run,
    // which also drives the FormXml half of ReadEntitiesMetadataAsync.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_Over500Entities_UsesTheBulkMetadataRead()
    {
        await NewTask("jsform", "*").RunAsync();

        Assert.HasCount(501, XrmHelper.EntitiesMetadata, "the bulk read filled the shared cache.");
        Assert.IsNotNull(XrmHelper.EntitiesFormXml, "the FormXml read completed for the non-CSharp type.");
        Assert.IsEmpty(Directory.GetFiles(_work, "*.form.js"),
            "the bulk entities have no forms — nothing was generated.");
    }

    [TestMethod]
    public async Task RunAsync_JsForm_NoForms_SkipsGeneration()
    {
        await NewTask("jsform", "account").RunAsync();
        Assert.IsEmpty(Directory.GetFiles(_work, "*.form.js"), "no forms — the generated file is skipped.");
    }

    // ────────────────────────────────────────────────────────────────────
    // JsWebApi lifecycle: CREATED → DO_NOTHING → dts-only UPDATED → UPDATED.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_JsWebApi_FullFileLifecycle()
    {
        var webapi = Path.Combine(_work, "Account.webapi.js");
        var dts = Path.Combine(_work, "Account.d.ts");

        await NewTask("jswebapi", "account").RunAsync();
        Assert.IsTrue(File.Exists(webapi), "run 1 created the webapi file.");
        Assert.IsTrue(File.Exists(dts), "run 1 created the dts file.");
        var createdCode = await File.ReadAllTextAsync(webapi);

        await NewTask("jswebapi", "account").RunAsync();
        Assert.AreEqual(createdCode, await File.ReadAllTextAsync(webapi), "run 2 changed nothing (DO_NOTHING).");

        await File.WriteAllTextAsync(dts, "// stale dts\n");
        await NewTask("jswebapi", "account").RunAsync();
        Assert.AreNotEqual("// stale dts\n", await File.ReadAllTextAsync(dts),
            "run 3 rewrote the stale dts while the code stayed the same.");
        Assert.AreEqual(createdCode, await File.ReadAllTextAsync(webapi), "the code file was not touched.");

        await File.WriteAllTextAsync(webapi, createdCode + "\n// local tweak\n");
        await NewTask("jswebapi", "account").RunAsync();
        Assert.AreNotEqual(createdCode + "\n// local tweak\n", await File.ReadAllTextAsync(webapi),
            "run 4 regenerated the changed code.");
    }

    // ────────────────────────────────────────────────────────────────────
    // TsWebApi lifecycle: CREATED → DO_NOTHING → UPDATED.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_TsWebApi_FullFileLifecycle()
    {
        var webapi = Path.Combine(_work, "Account.webapi.ts");

        await NewTask("tswebapi", "account").RunAsync();
        Assert.IsTrue(File.Exists(webapi), "run 1 created the ts webapi file.");
        var createdCode = await File.ReadAllTextAsync(webapi);

        await NewTask("tswebapi", "account").RunAsync();
        Assert.AreEqual(createdCode, await File.ReadAllTextAsync(webapi), "run 2 changed nothing (DO_NOTHING).");

        await File.WriteAllTextAsync(webapi, createdCode + "\n// local tweak\n");
        await NewTask("tswebapi", "account").RunAsync();
        Assert.AreNotEqual(createdCode + "\n// local tweak\n", await File.ReadAllTextAsync(webapi),
            "run 3 regenerated the changed code.");
    }

    // ────────────────────────────────────────────────────────────────────
    // TsForm — no forms skips the form file, but the OptionSet.ts is still
    // generated once and then left alone on the second run.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task RunAsync_TsForm_NoForms_StillWritesOptionSet()
    {
        await NewTask("tsform", "account").RunAsync();
        Assert.IsEmpty(Directory.GetFiles(_work, "*.form.ts"), "no forms — the form file is skipped.");
        Assert.IsTrue(File.Exists(Path.Combine(_work, "OptionSet.ts")), "the OptionSet.ts was generated.");
        var optionSet = await File.ReadAllTextAsync(Path.Combine(_work, "OptionSet.ts"));

        await NewTask("tsform", "account").RunAsync();
        Assert.AreEqual(optionSet, await File.ReadAllTextAsync(Path.Combine(_work, "OptionSet.ts")),
            "the second run left the OptionSet alone (DO_NOTHING).");
    }

    // NOTE (skipped branches — dead code through RunAsync):
    // - TaskGenerator.IsValidAsync's Json == null gate: the primary ctor
    //   dereferences json.type, so a null profile never reaches it (already
    //   documented by the wave-1 suite).
    // - The 'entity schema name not found' error of every generator
    //   (~198/240/305/365/433): RunAsync rebuilds the schema list FROM the
    //   metadata cache (line 91), so every listed name always resolves.
    // - JsForm/TsForm code generation with real forms needs a realistic
    //   FormXml payload — the wave-1 suites cover the generated-file
    //   lifecycle through the CSharp generator; the dts-only update
    //   (277-285) mirrors the JsWebApi one covered here.
    // - OptionSet.ts's CREATED branch (~386) is unreachable: the file is
    //   written before the File.Exists check, so the check always sees it.
    // All left uncovered by design.
}
