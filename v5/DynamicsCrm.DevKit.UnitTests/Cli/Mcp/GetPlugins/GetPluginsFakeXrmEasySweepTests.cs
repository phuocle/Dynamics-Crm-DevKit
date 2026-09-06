using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetPlugins;

/// <summary>
/// FakeXrmEasy-driven sweep coverage for GetPluginsTool: assembly list mode (type counts,
/// packages, managed identities), assembly_name mode (no match / multi-match disambiguation /
/// single-match detail with types, steps, images and stage/mode/message/type_name filters),
/// entity_name mode (wins over assembly_name, post-filter of leaked/unbound steps, summary
/// counters), validation errors (invalid SDK message, unknown entity, missing object type
/// code), max_records clamping, image mapping fallbacks (unknown image type, missing step
/// reference) and the >50 image batching loop. All FetchXML requests are answered by a
/// decorator org service that parses the fetch and filters seeded rows.
/// </summary>
[TestClass]
public sealed class GetPluginsFakeXrmEasySweepTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private SweepOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-getplugins-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new SweepOrgService(_ctx.GetOrganizationService());
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private GetPluginsTool NewTool() => new(_service);

    private static string Text(CallToolResult r) => r.GetText();

    private static GetPluginsResult Payload(CallToolResult r)
    {
        // Success() overwrites payload["summary"] with the one-line text — strip it
        // so the production model (Summary is an object) can deserialize cleanly.
        var node = System.Text.Json.Nodes.JsonNode.Parse(r.StructuredContent!.Value.GetRawText());
        if (node is System.Text.Json.Nodes.JsonObject obj)
            obj.Remove("summary");
        return node.Deserialize<GetPluginsResult>()!;
    }

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private static EntityMetadata MakeEntityMetadata(string logicalName, string displayName, int? objectTypeCode)
    {
        var meta = new EntityMetadata { LogicalName = logicalName, SchemaName = logicalName, DisplayName = MakeLabel(displayName) };
        if (objectTypeCode.HasValue)
            Set(meta, "ObjectTypeCode", objectTypeCode.Value);
        return meta;
    }

    private Guid SeedAssembly(string name, string version,
        (string name, string version)? package = null,
        (Guid id, string name, Guid applicationId, Guid tenantId, int credentialSource)? managedIdentity = null)
    {
        var id = Guid.NewGuid();
        var row = new Entity("pluginassembly", id)
        {
            ["name"] = name,
            ["version"] = version,
            ["isolationmode"] = new OptionSetValue(2),
            ["sourcetype"] = new OptionSetValue(2),
            ["ismanaged"] = false
        };
        if (package.HasValue)
        {
            row["pkg.name"] = new AliasedValue("pluginpackage", "name", package.Value.name);
            row["pkg.version"] = new AliasedValue("pluginpackage", "version", package.Value.version);
        }
        if (managedIdentity.HasValue)
        {
            row["managedidentityid"] = new EntityReference("managedidentity", managedIdentity.Value.id);
            row["mi.name"] = new AliasedValue("managedidentity", "name", managedIdentity.Value.name);
            row["mi.applicationid"] = new AliasedValue("managedidentity", "applicationid", managedIdentity.Value.applicationId);
            row["mi.tenantid"] = new AliasedValue("managedidentity", "tenantid", managedIdentity.Value.tenantId);
            row["mi.credentialsource"] = new AliasedValue("managedidentity", "credentialsource", managedIdentity.Value.credentialSource);
        }
        _service.Assemblies.Add(row);
        return id;
    }

    private Guid SeedType(Guid assemblyId, string typeName, string description = null, string workflowGroup = null)
    {
        var id = Guid.NewGuid();
        _service.Types.Add(new Entity("plugintype", id)
        {
            ["typename"] = typeName,
            ["name"] = typeName,
            ["description"] = description,
            ["workflowactivitygroupname"] = workflowGroup,
            ["pluginassemblyid"] = assemblyId
        });
        return id;
    }

    private Guid SeedStep(Guid assemblyId, string assemblyName, string typeName, string messageName, string entityAlias, int otc,
        int stage = 40, int mode = 0, int state = 0, int rank = 1, string filtering = null, bool asyncAutoDelete = false,
        string description = null, string impersonating = null, int deployment = 0,
        string unsecureConfig = null, Guid? secureConfigId = null, string secureConfig = null)
    {
        var messageId = messageName != null ? GetOrCreateMessageId(messageName) : Guid.Empty;
        var id = Guid.NewGuid();
        var row = new Entity("sdkmessageprocessingstep", id)
        {
            ["name"] = "Step " + id.ToString("N")[..8],
            ["stage"] = new OptionSetValue(stage),
            ["mode"] = new OptionSetValue(mode),
            ["statecode"] = new OptionSetValue(state),
            ["rank"] = rank,
            ["asyncautodelete"] = asyncAutoDelete,
            ["supporteddeployment"] = new OptionSetValue(deployment),
            ["pa.name"] = new AliasedValue("pluginassembly", "name", assemblyName),
            ["pt.typename"] = new AliasedValue("plugintype", "typename", typeName),
            ["m.name"] = new AliasedValue("sdkmessage", "name", messageName ?? "")
        };
        if (filtering != null) row["filteringattributes"] = filtering;
        if (description != null) row["description"] = description;
        if (impersonating != null)
            row["impersonatinguserid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = impersonating };
        if (unsecureConfig != null) row["configuration"] = unsecureConfig;
        if (secureConfigId.HasValue)
        {
            row["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", secureConfigId.Value);
            row["sc.secureconfig"] = new AliasedValue("sdkmessageprocessingstepsecureconfig", "secureconfig", secureConfig);
        }
        if (entityAlias != null)
            row["mf.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", entityAlias);

        _service.Steps.Add(new SweepOrgService.StepData
        {
            Row = row,
            AssemblyId = assemblyId,
            TypeName = typeName,
            MessageId = messageId,
            Otc = otc,
            Stage = stage,
            Mode = mode,
            State = state
        });
        return id;
    }

    private Guid GetOrCreateMessageId(string messageName)
    {
        if (!_service.SdkMessages.TryGetValue(messageName, out var id))
        {
            id = Guid.NewGuid();
            _service.SdkMessages[messageName] = id;
        }
        return id;
    }

    private void SeedImage(Guid stepId, string name = "Pre Image", string alias = "pre", int imageType = 0,
        string attributes = "name", bool includeStepReference = true)
    {
        var row = new Entity("sdkmessageprocessingstepimage", Guid.NewGuid())
        {
            ["name"] = name,
            ["entityalias"] = alias,
            ["imagetype"] = new OptionSetValue(imageType),
            ["attributes"] = attributes
        };
        if (includeStepReference)
            row["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", stepId);
        _service.Images.Add(row);
    }

    private Guid SeedPackage(string name, string version, bool isManaged = false, Guid? managedIdentity = null, DateTime? modifiedOn = null)
    {
        var id = Guid.NewGuid();
        var row = new Entity("pluginpackage", id)
        {
            ["name"] = name,
            ["version"] = version,
            ["ismanaged"] = isManaged
        };
        if (managedIdentity.HasValue)
            row["managedidentityid"] = new EntityReference("managedidentity", managedIdentity.Value);
        if (modifiedOn.HasValue)
            row["modifiedon"] = modifiedOn.Value;
        _service.Packages.Add(row);
        return id;
    }

    private void SeedPackageAssembly(Guid? packageId, string name)
    {
        var row = new Entity("pluginassembly") { ["name"] = name };
        if (packageId.HasValue)
            row["packageid"] = new EntityReference("pluginpackage", packageId.Value);
        _service.PackageAssemblies.Add(row);
    }

    private void SeedTypeCount(Guid assemblyId, int count, object aliasValue = null)
    {
        _service.CountRows.Add(new Entity("plugintype")
        {
            ["asmId"] = new AliasedValue("plugintype", "pluginassemblyid", aliasValue ?? assemblyId),
            ["typeCount"] = new AliasedValue("plugintype", "plugintypeid", count)
        });
    }

    // ──────────────────────────────────────────────
    // default: list all assemblies
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ListAll_AssembliesPackagesTypeCountsAndManagedIdentity()
    {
        var miCertId = Guid.NewGuid();
        var miCertApp = Guid.NewGuid();
        var miCertTenant = Guid.NewGuid();
        var miBasicId = Guid.NewGuid();

        var assembly1 = SeedAssembly("Contoso Assembly A", "1.0.0.0",
            package: ("Pkg A", "1.0.0"),
            managedIdentity: (miCertId, "MI Cert", miCertApp, miCertTenant, 2));
        var assembly2 = SeedAssembly("Contoso Assembly B", "2.0.0.0",
            managedIdentity: (miBasicId, "MI Basic", Guid.NewGuid(), Guid.NewGuid(), 1));

        SeedTypeCount(assembly1, 3);
        SeedTypeCount(assembly2, 1, new EntityReference("pluginassembly", assembly2));
        SeedTypeCount(Guid.NewGuid(), 9, "not-an-id");

        var packageA = SeedPackage("Pkg A", "1.0.0");
        var packageB = SeedPackage("Pkg B", "2.0.0", isManaged: true, managedIdentity: Guid.NewGuid(),
            modifiedOn: new DateTime(2026, 1, 2, 3, 4, 5));
        SeedPackageAssembly(packageA, "Contoso Assembly A");
        SeedPackageAssembly(packageB, null);
        SeedPackageAssembly(null, "Orphan Assembly");

        var result = NewTool().get_plugins();

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] 2 plugin assemblies (2 plugin packages) registered.");

        var payload = Payload(result);
        Assert.AreEqual("assemblies", payload.Mode);
        Assert.AreEqual(2, payload.TotalCount);

        var first = payload.Assemblies.Single(a => a.Name == "Contoso Assembly A");
        Assert.AreEqual("Sandbox", first.IsolationMode);
        Assert.AreEqual("Normal", first.SourceType);
        Assert.AreEqual("Pkg A", first.PackageName);
        Assert.AreEqual(3, first.TypeCount);
        Assert.IsTrue(first.HasManagedIdentity);
        Assert.AreEqual(miCertId.ToString(), first.ManagedIdentity.ManagedIdentityId);
        Assert.AreEqual("MI Cert", first.ManagedIdentity.Name);
        Assert.AreEqual(miCertApp.ToString(), first.ManagedIdentity.ApplicationId);
        Assert.AreEqual(miCertTenant.ToString(), first.ManagedIdentity.TenantId);
        Assert.AreEqual("Certificate", first.ManagedIdentity.CredentialSource);

        var second = payload.Assemblies.Single(a => a.Name == "Contoso Assembly B");
        Assert.AreEqual("1", second.ManagedIdentity.CredentialSource);
        Assert.IsNull(second.PackageName);
        Assert.AreEqual(1, second.TypeCount);

        var pkgA = payload.Packages.Single(p => p.Name == "Pkg A");
        CollectionAssert.AreEquivalent(new[] { "Contoso Assembly A" }, pkgA.Assemblies);
        Assert.IsFalse(pkgA.HasManagedIdentity);

        var pkgB = payload.Packages.Single(p => p.Name == "Pkg B");
        Assert.IsNull(pkgB.Assemblies);
        Assert.IsTrue(pkgB.HasManagedIdentity);
        Assert.AreEqual("2026-01-02 03:04", pkgB.ModifiedOn);
    }

    [TestMethod]
    public void ListAll_NoPackagesRegistered_OmitsPackageLabel()
    {
        SeedAssembly("Solo Assembly", "1.0.0.0");

        var result = NewTool().get_plugins();

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] 1 plugin assemblies registered.");

        var payload = Payload(result);
        Assert.IsNull(payload.Packages);
        Assert.AreEqual(0, payload.Assemblies[0].TypeCount);
    }

    // ──────────────────────────────────────────────
    // assembly_name mode
    // ──────────────────────────────────────────────

    [TestMethod]
    public void AssemblyName_NoMatch_ReturnsError()
    {
        SeedAssembly("Contoso Assembly", "1.0.0.0");

        var result = NewTool().get_plugins(assembly_name: "zzz");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No plugin assembly matching 'zzz' found.");
    }

    [TestMethod]
    public void AssemblyName_MultipleMatches_ReturnsDisambiguationWithTypeCounts()
    {
        var assembly1 = SeedAssembly("Contoso Assembly", "1.0.0.0");
        var assembly2 = SeedAssembly("Contoso Assembly Two", "2.0.0.0");
        SeedTypeCount(assembly1, 3);
        SeedTypeCount(assembly2, 1, new EntityReference("pluginassembly", assembly2));

        var result = NewTool().get_plugins(assembly_name: "Contoso Assembly");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "2 plugin assemblies matching 'Contoso Assembly'.");

        var payload = Payload(result);
        Assert.AreEqual("assemblies", payload.Mode);
        Assert.AreEqual(3, payload.Assemblies.Single(a => a.Name == "Contoso Assembly").TypeCount);
        Assert.AreEqual(1, payload.Assemblies.Single(a => a.Name == "Contoso Assembly Two").TypeCount);
    }

    [TestMethod]
    public void AssemblyName_SingleMatch_ReturnsDetailWithTypesStepsAndImages()
    {
        var assemblyId = SeedAssembly("Contoso Assembly", "1.0.0.0");
        SeedType(assemblyId, "Contoso.Plugins.Step1", description: "  desc  ");
        SeedType(assemblyId, "Contoso.Plugins.Step2", workflowGroup: "Custom Workflow");
        var stepId = SeedStep(assemblyId, "Contoso Assembly", "Contoso.Plugins.Step1", "Create", "account", 1);
        SeedImage(stepId, imageType: 0, attributes: "name");

        var result = NewTool().get_plugins(assembly_name: "Contoso Assembly");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] Contoso Assembly (1.0.0.0): 2 types, 1 steps.");

        var payload = Payload(result);
        Assert.AreEqual("detail", payload.Mode);
        Assert.AreEqual(1, payload.TotalCount);

        var entry = payload.Assemblies[0];
        Assert.AreEqual(2, entry.TypeCount);
        Assert.AreEqual("desc", entry.Types[0].Description);
        Assert.AreEqual("Contoso.Plugins.Step1", entry.Types[0].TypeName);

        Assert.AreEqual(1, entry.Types[0].StepCount);
        Assert.IsFalse(entry.Types[0].IsWorkflow);
        Assert.IsTrue(entry.Types[1].IsWorkflow);
        Assert.AreEqual("Custom Workflow", entry.Types[1].WorkflowActivityGroupName);
        Assert.AreEqual(0, entry.Types[1].StepCount);

        var step = payload.Steps[0];
        Assert.AreEqual(stepId.ToString(), step.StepId);
        Assert.AreEqual("Contoso Assembly", step.AssemblyName);
        Assert.AreEqual("Contoso.Plugins.Step1", step.TypeName);
        Assert.AreEqual("Create", step.Message);
        Assert.AreEqual("account", step.Entity);
        Assert.AreEqual("PostOperation", step.Stage);
        Assert.AreEqual("Sync", step.Mode);
        Assert.AreEqual("Active", step.Status);
        Assert.IsNotNull(step.Images);
        Assert.AreEqual(1, step.Images.Count);
        Assert.AreEqual("PreImage", step.Images[0].ImageType);
        Assert.AreEqual("pre", step.Images[0].EntityAlias);
        Assert.AreEqual("name", step.Images[0].Attributes);
    }

    [TestMethod]
    public void AssemblyDetail_FiltersByStageModeMessageAndTypeName()
    {
        var assemblyId = SeedAssembly("Contoso Assembly", "1.0.0.0");
        SeedType(assemblyId, "Contoso.Plugins.Step1");
        SeedType(assemblyId, "Contoso.Plugins.Step2");
        SeedType(assemblyId, "Contoso.Workflows.Wf");
        SeedStep(assemblyId, "Contoso Assembly", "Contoso.Plugins.Step1", "Create", "account", 1, stage: 40, mode: 1);
        SeedStep(assemblyId, "Contoso Assembly", "Contoso.Plugins.Step2", "Update", "account", 1, stage: 40, mode: 1);
        SeedStep(assemblyId, "Contoso Assembly", "Contoso.Workflows.Wf", "Create", "account", 1, stage: 40, mode: 1);

        var result = NewTool().get_plugins(assembly_name: "Contoso Assembly", message_name: "Create",
            type_name: "Plugins", stage: "postoperation", mode: "async", include_images: false);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] Contoso Assembly (1.0.0.0): 3 types, 1 steps.");

        var payload = Payload(result);
        Assert.AreEqual(1, payload.Steps.Count);
        Assert.AreEqual("Contoso.Plugins.Step1", payload.Steps[0].TypeName);
        Assert.IsNull(payload.Steps[0].Images, "include_images=false must skip image population");
        Assert.AreEqual(1, payload.Assemblies[0].Types[0].StepCount);
        Assert.AreEqual(0, payload.Assemblies[0].Types[2].StepCount);
    }

    [TestMethod]
    public void AssemblyDetail_NoTypesOrSteps_ReturnsEmptyCounts()
    {
        SeedAssembly("Empty Assembly", "2.0.0.0");

        var result = NewTool().get_plugins(assembly_name: "Empty Assembly");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] Empty Assembly (2.0.0.0): 0 types, 0 steps.");

        var payload = Payload(result);
        Assert.IsNull(payload.Assemblies[0].Types);
        Assert.IsNull(payload.Steps);
    }

    // ──────────────────────────────────────────────
    // entity_name mode
    // ──────────────────────────────────────────────

    [TestMethod]
    public void EntityName_StepsOnEntity_WinsOverAssembly_AndPostFiltersLeaks()
    {
        _service.Entities.Add(MakeEntityMetadata("account", "Account", 1));
        _service.Entities.Add(MakeEntityMetadata("contact", "Contact", 2));
        SeedAssembly("Contoso Assembly", "1.0.0.0");

        SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step1", "Create", "account", 1,
            stage: 40, mode: 0, rank: 5, filtering: "name", deployment: 2, description: " step desc ",
            impersonating: "Impersonated User");
        SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step2", "Create", "account", 1,
            stage: 10, mode: 1, state: 1);
        // outer-join leaks: wrong alias, unbound (no alias), and other-entity rows
        SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step3", "Create", "lead", 1);
        SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step4", "Create", null, 1);
        SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step5", "Create", "contact", 2);

        var result = NewTool().get_plugins(entity_name: "Account", assembly_name: "Contoso Assembly", active_only: false);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] 2 plugin steps on account.");

        var payload = Payload(result);
        Assert.AreEqual("steps", payload.Mode);
        Assert.AreEqual("account", payload.EntityName);
        Assert.AreEqual(2, payload.TotalCount);

        var active = payload.Steps.Single(s => s.Status == "Active");
        Assert.AreEqual("PostOperation", active.Stage);
        Assert.AreEqual("Sync", active.Mode);
        Assert.AreEqual("Both", active.SupportedDeployment);
        Assert.AreEqual(5, active.Rank);
        Assert.AreEqual("name", active.FilteringAttributes);
        Assert.AreEqual("step desc", active.Description);
        Assert.AreEqual("Impersonated User", active.ImpersonatingUser);

        var disabled = payload.Steps.Single(s => s.Status == "Disabled");
        Assert.AreEqual("PreValidation", disabled.Stage);
        Assert.AreEqual("Async", disabled.Mode);

        // stage/mode counts live in the one-line summary text (Success() overwrites
        // the structured "summary" object with the text) — verified via text here
        StringAssert.Contains(Text(result), "2 plugin steps on account.");
    }

    [TestMethod]
    public void EntityName_UnknownEntity_ReturnsResolverError()
    {
        _service.Entities.Add(MakeEntityMetadata("account", "Account", 1));

        var result = NewTool().get_plugins(entity_name: "zzz");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name 'zzz': 'zzz' was not found by Display Name or Logical/Unique/Schema Name.");
    }

    [TestMethod]
    public void EntityName_MetadataWithoutObjectTypeCode_ReturnsError()
    {
        _service.Entities.Add(MakeEntityMetadata("orphan", "Orphan", null));

        var result = NewTool().get_plugins(entity_name: "orphan");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Entity 'orphan' not found.");
    }

    // ──────────────────────────────────────────────
    // message_name
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MessageName_Unknown_ReturnsValidationError()
    {
        var result = NewTool().get_plugins(message_name: "Nope");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "SDK message 'Nope' not found.");
        StringAssert.Contains(Text(result), "Use get_messages to discover valid SDK message names.");
    }

    [TestMethod]
    public void EntityName_WithMessageName_FiltersStepsByMessage()
    {
        _service.Entities.Add(MakeEntityMetadata("account", "Account", 1));
        var assemblyId = Guid.NewGuid();
        SeedStep(assemblyId, "Contoso Assembly", "Contoso.Plugins.Step1", "Create", "account", 1);
        SeedStep(assemblyId, "Contoso Assembly", "Contoso.Plugins.Step2", "Update", "account", 1);

        var result = NewTool().get_plugins(entity_name: "account", message_name: "Create");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[Success] 1 plugin step on account.");

        var payload = Payload(result);
        Assert.AreEqual(1, payload.Steps.Count);
        Assert.AreEqual("Create", payload.Steps[0].Message);
    }

    // ──────────────────────────────────────────────
    // max_records clamping
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MaxRecords_ClampsOutOfRangeValues()
    {
        var clamped = NewTool().get_plugins(max_records: 600);
        Assert.IsFalse(clamped.IsError == true, Text(clamped));
        StringAssert.Contains(Text(clamped), "0 plugin assemblies registered.");
        StringAssert.Contains(_service.LastAssembliesFetch, "top='500'");

        var defaulted = NewTool().get_plugins(max_records: 0);
        Assert.IsFalse(defaulted.IsError == true, Text(defaulted));
        StringAssert.Contains(_service.LastAssembliesFetch, "top='100'");
    }

    // ──────────────────────────────────────────────
    // images
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Images_UnknownTypeAndUnreferencedRows_UseFallbackBranches()
    {
        _service.Entities.Add(MakeEntityMetadata("account", "Account", 1));
        var stepWithImage = SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step1", "Create", "account", 1);
        var stepWithoutImage = SeedStep(Guid.NewGuid(), "Contoso Assembly", "Contoso.Plugins.Step2", "Create", "account", 1);

        SeedImage(stepWithImage, name: "Weird Image", imageType: 7, attributes: null);
        SeedImage(stepWithoutImage, includeStepReference: false);

        var result = NewTool().get_plugins(entity_name: "account");

        Assert.IsFalse(result.IsError == true, Text(result));
        var payload = Payload(result);
        Assert.AreEqual(2, payload.Steps.Count);

        var withImage = payload.Steps.Single(s => s.StepId == stepWithImage.ToString());
        Assert.IsNotNull(withImage.Images);
        Assert.AreEqual(1, withImage.Images.Count);
        Assert.AreEqual("Unknown", withImage.Images[0].ImageType);
        Assert.AreEqual("Weird Image", withImage.Images[0].Name);
        Assert.IsNull(withImage.Images[0].Attributes);

        var withoutImage = payload.Steps.Single(s => s.StepId == stepWithoutImage.ToString());
        Assert.IsNull(withoutImage.Images);
    }

    [TestMethod]
    public void Images_MoreThanPackSize_UsesMultipleBatches()
    {
        _service.Entities.Add(MakeEntityMetadata("account", "Account", 1));
        for (var i = 0; i < 51; i++)
        {
            var stepId = SeedStep(Guid.NewGuid(), "Contoso Assembly", $"Contoso.Plugins.Step{i}", "Create", "account", 1);
            SeedImage(stepId, imageType: 1);
        }

        var result = NewTool().get_plugins(entity_name: "account", max_records: 100);

        Assert.IsFalse(result.IsError == true, Text(result));
        var payload = Payload(result);
        Assert.AreEqual(51, payload.TotalCount);
        Assert.IsTrue(payload.Steps.All(s => s.Images is { Count: 1 }));
        Assert.IsTrue(payload.Steps.All(s => s.Images[0].ImageType == "PostImage"));
    }

    // ──────────────────────────────────────────────
    // fake organization service
    // ──────────────────────────────────────────────

    private sealed class SweepOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public SweepOrgService(IOrganizationService inner) => _inner = inner;

        public readonly List<EntityMetadata> Entities = new();
        public readonly List<Entity> Assemblies = new();
        public readonly List<Entity> Types = new();
        public readonly List<StepData> Steps = new();
        public readonly List<Entity> Images = new();
        public readonly List<Entity> Packages = new();
        public readonly List<Entity> PackageAssemblies = new();
        public readonly List<Entity> CountRows = new();
        public readonly Dictionary<string, Guid> SdkMessages = new();
        public string LastAssembliesFetch;

        public sealed class StepData
        {
            public Entity Row;
            public Guid AssemblyId;
            public string TypeName;
            public Guid MessageId;
            public int Otc;
            public int Stage;
            public int Mode;
            public int State;
        }

        public Guid Create(Entity entity) => _inner.Create(entity);

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity) => _inner.Update(entity);

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fetch)
                return RunFetch(fetch.Query);
            return _inner.RetrieveMultiple(query);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case RetrieveAllEntitiesRequest:
                {
                    var all = new RetrieveAllEntitiesResponse();
                    all.Results["EntityMetadata"] = Entities.ToArray();
                    return all;
                }
                case RetrieveEntityRequest retrieveEntity:
                {
                    var meta = Entities.FirstOrDefault(e =>
                        string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase))
                        ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                    var response = new RetrieveEntityResponse();
                    response.Results["EntityMetadata"] = meta;
                    return response;
                }
                default:
                    return _inner.Execute(request);
            }
        }

        private EntityCollection RunFetch(string fetch)
        {
            // order matters: step/image fetches CONTAIN pluginassembly link-entities,
            // so the more specific entity names must be checked first
            if (fetch.Contains("name='sdkmessageprocessingstepimage'"))
                return FilterImages(fetch);
            if (fetch.Contains("name='sdkmessageprocessingstep'"))
                return FilterSteps(fetch);
            if (fetch.Contains("aggregate='true'"))
                return new EntityCollection(CountRows.ToList());
            if (fetch.Contains("name='pluginassembly'") && fetch.Contains("operator='not-null'"))
                return new EntityCollection(PackageAssemblies.ToList());
            if (fetch.Contains("name='pluginassembly'"))
                return FilterAssemblies(fetch);
            if (fetch.Contains("name='sdkmessagefilter'"))
                return new EntityCollection();
            if (fetch.Contains("name='sdkmessage'"))
                return ResolveSdkMessage(fetch);
            if (fetch.Contains("name='plugintype'"))
                return FilterTypes(fetch);
            if (fetch.Contains("name='pluginpackage'"))
                return new EntityCollection(Packages.ToList());
            return new EntityCollection();
        }

        private EntityCollection FilterAssemblies(string fetch)
        {
            LastAssembliesFetch = fetch;
            var likeValue = ExtractValue(fetch, "name", "like");
            var matched = Assemblies.AsEnumerable();
            if (likeValue != null)
            {
                var term = likeValue.Trim('%');
                matched = matched.Where(a => ((string)a["name"]).Contains(term, StringComparison.OrdinalIgnoreCase));
            }
            return new EntityCollection(matched.ToList());
        }

        private EntityCollection FilterTypes(string fetch)
        {
            var assemblyId = ExtractValue(fetch, "pluginassemblyid", "eq");
            var matched = Types.AsEnumerable();
            if (assemblyId != null)
                matched = matched.Where(t => t.GetAttributeValue<Guid>("pluginassemblyid").ToString() == assemblyId);
            return new EntityCollection(matched.ToList());
        }

        private EntityCollection FilterSteps(string fetch)
        {
        
            var activeOnly = fetch.Contains("attribute='statecode'");
            var stage = ExtractValue(fetch, "stage", "eq");
            var mode = ExtractValue(fetch, "mode", "eq");
            var assemblyId = ExtractValue(fetch, "pluginassemblyid", "eq");
            var otc = ExtractValue(fetch, "primaryobjecttypecode", "eq");
            var messageId = ExtractValue(fetch, "sdkmessageid", "eq");
            var typeName = ExtractValue(fetch, "typename", "like")?.Trim('%');

            IEnumerable<StepData> query = Steps;
            if (activeOnly) query = query.Where(s => s.State == 0);
            if (stage != null) query = query.Where(s => s.Stage.ToString() == stage);
            if (mode != null) query = query.Where(s => s.Mode.ToString() == mode);
            if (assemblyId != null) query = query.Where(s => s.AssemblyId.ToString() == assemblyId);
            if (otc != null) query = query.Where(s => s.Otc.ToString() == otc);
            if (messageId != null) query = query.Where(s => s.MessageId.ToString() == messageId);
            if (typeName != null) query = query.Where(s => s.TypeName.Contains(typeName, StringComparison.OrdinalIgnoreCase));
            return new EntityCollection(query.Select(s => s.Row).ToList());
        }

        private EntityCollection FilterImages(string fetch)
        {
            var stepIds = Regex.Matches(fetch, "attribute='sdkmessageprocessingstepid'\\s+operator='eq'\\s+value='([^']+)'")
                .Select(m => Guid.Parse(m.Groups[1].Value))
                .ToHashSet();
            var matched = Images.Where(img =>
            {
                var stepRef = img.GetAttributeValue<EntityReference>("sdkmessageprocessingstepid");
                return stepRef != null && stepIds.Contains(stepRef.Id);
            }).ToList();
            return new EntityCollection(matched);
        }

        private EntityCollection ResolveSdkMessage(string fetch)
        {
            var collection = new EntityCollection();
            var name = ExtractValue(fetch, "name", "eq");
            if (name != null && SdkMessages.TryGetValue(name, out var messageId))
                collection.Entities.Add(new Entity("sdkmessage", messageId) { ["name"] = name });
            return collection;
        }

        private static string ExtractValue(string fetch, string attribute, string operation)
        {
            var match = Regex.Match(
                fetch,
                $"attribute='{Regex.Escape(attribute)}'\\s+operator='{Regex.Escape(operation)}'\\s+value='([^']*)'");
            return match.Success ? match.Groups[1].Value : null;
        }
    }
}
