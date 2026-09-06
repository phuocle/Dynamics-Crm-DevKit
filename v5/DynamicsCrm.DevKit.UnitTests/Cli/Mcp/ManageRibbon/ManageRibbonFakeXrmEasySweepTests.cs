using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRibbon;

/// <summary>
/// FakeXrmEasy-driven coverage sweep for ManageRibbonTool and its Ribbon/* helpers
/// (RibbonCore, RibbonReadActions, RibbonMutateActions, RibbonSolutionFetcher,
/// RibbonButtonOperations, RibbonFlyoutOperations). Metadata and RibbonXxx SDK
/// requests (RetrieveEntityRibbonRequest, ExportSolutionRequest, ImportSolutionRequest,
/// PublishAllXmlAsyncRequest, solution component add/remove) go through the
/// RibbonOrgService decorator; FetchXML-heavy virtual tables (role, entity,
/// asyncoperation, solutioncomponent) are intercepted with hand-built collections.
/// </summary>
[TestClass]
public sealed class ManageRibbonFakeXrmEasySweepTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private RibbonOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-ribbon-tests-" + Guid.NewGuid().ToString("N"));
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

        _service = new RibbonOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeEntityMetadata("account", "Account", "Account"));
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageRibbonTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private Task<CallToolResult> CallAsync(string action, string entityName = "", string operations = "", string ribbonxml = "", bool dryRun = false) =>
        NewTool(dryRun).manage_ribbon(null!, action, entityName, operations, ribbonxml);

    private static string Text(CallToolResult r) => r.GetText();

    private static JsonElement Struct(CallToolResult r) =>
        JsonDocument.Parse(r.StructuredContent!.Value.GetRawText()).RootElement.Clone();

    private static EntityMetadata MakeEntityMetadata(string logicalName, string displayName, string schemaName)
    {
        var meta = new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            MetadataId = Guid.NewGuid(),
            DisplayName = new Label(displayName, 1033) { UserLocalizedLabel = new LocalizedLabel(displayName, 1033) }
        };
        return meta;
    }

    private Guid EnsureSolution()
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("solution", id)
        {
            ["solutionid"] = id,
            ["uniquename"] = "devkit_ribbon"
        });
        return id;
    }

    private Guid SeedWebResource(string name, string displayName)
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("webresource", id)
        {
            ["webresourceid"] = id,
            ["name"] = name,
            ["displayname"] = displayName
        });
        return id;
    }

    private void SeedCoreWebResources()
    {
        SeedWebResource("devkit_/account.js", "Account Library");
        SeedWebResource("devkit_/account.enable.js", "Account Enable Library");
        SeedWebResource("devkit_/icons/open.svg", "Open Icon");
    }

    private static byte[] MakeZip(params (string Name, string Content)[] entries)
    {
        using var ms = new MemoryStream();
        using (var zip = new ZipArchive(ms, ZipArchiveMode.Create, true))
        {
            foreach (var (name, content) in entries)
            {
                using var writer = new StreamWriter(zip.CreateEntry(name).Open(), Encoding.UTF8);
                writer.Write(content);
            }
        }
        return ms.ToArray();
    }

    private static string WrapSolutionXml(string ribbonDiffXml) => $"""
<ImportExportXml>
  <Entities>
    <Entity>
      <Name>account</Name>
      <RibbonDiffXml>{ribbonDiffXml}</RibbonDiffXml>
    </Entity>
  </Entities>
</ImportExportXml>
""";

    /// <summary>devkit_ribbon export: LocLabels + a HideCustomAction for an OOB form button.</summary>
    private static byte[] MakeDevKitSolutionZip()
    {
        const string diff = """
<RibbonDiffXml>
  <CustomActions>
    <HideCustomAction HideActionId="devkit.Mscrm.Form.account.Deactivate.Hide" Location="Mscrm.Form.account.Deactivate" />
  </CustomActions>
  <Templates><RibbonTemplates Id="Mscrm.Templates" /></Templates>
  <CommandDefinitions />
  <RuleDefinitions><TabDisplayRules /><DisplayRules /><EnableRules /></RuleDefinitions>
  <LocLabels>
    <LocLabel Id="devkit.account.OpenDialog.Form.Button.LabelText">
      <Titles><Title description="Open Dialog" languagecode="1033" /></Titles>
    </LocLabel>
  </LocLabels>
</RibbonDiffXml>
""";
        return MakeZip(("customizations.xml", WrapSolutionXml(diff)));
    }

    /// <summary>devkit_ribbon export: rich ribbon used by the detail counts test.</summary>
    private static byte[] MakeDetailSolutionZip()
    {
        const string diff = """
<RibbonDiffXml>
  <CustomActions>
    <CustomAction Id="devkit.account.One.Form.CustomAction" Location="Mscrm.Form.account.MainTab.Save.Controls._children" Sequence="20">
      <CommandUIDefinition><Button Id="devkit.account.One.Form.Button" Command="devkit.account.One.Form.Command" /></CommandUIDefinition>
    </CustomAction>
  </CustomActions>
  <Templates><RibbonTemplates Id="Mscrm.Templates" /></Templates>
  <CommandDefinitions>
    <CommandDefinition Id="devkit.account.One.Form.Command">
      <EnableRules />
      <DisplayRules />
      <Actions><JavaScriptFunction FunctionName="One.run" Library="$webresource:devkit_/account.js" /></Actions>
    </CommandDefinition>
  </CommandDefinitions>
  <RuleDefinitions>
    <TabDisplayRules /><DisplayRules />
    <EnableRules>
      <EnableRule Id="devkit.account.One.Form.EnableRule"><CustomRule FunctionName="One.canRun" Library="$webresource:devkit_/account.enable.js" /></EnableRule>
    </EnableRules>
  </RuleDefinitions>
  <LocLabels>
    <LocLabel Id="devkit.account.One.Form.Button.LabelText"><Titles><Title description="One" languagecode="1033" /></Titles></LocLabel>
    <LocLabel Id="devkit.account.One.Form.Button.ToolTipTitle"><Titles><Title description="One Tip" languagecode="1033" /></Titles></LocLabel>
  </LocLabels>
</RibbonDiffXml>
""";
        return MakeZip(("customizations.xml", WrapSolutionXml(diff)));
    }

    /// <summary>devkit_ribbon export: seeded custom buttons without Command / with orphan Command.</summary>
    private static byte[] MakeCustomButtonsSolutionZip(string innerButtons)
    {
        var diff = $"""
<RibbonDiffXml>
  <CustomActions>
    <CustomAction Id="devkit.account.Custom.Form.CustomAction" Location="Mscrm.Form.account.MainTab.Save.Controls._children" Sequence="20">
      <CommandUIDefinition>{innerButtons}</CommandUIDefinition>
    </CustomAction>
  </CustomActions>
  <Templates><RibbonTemplates Id="Mscrm.Templates" /></Templates>
  <CommandDefinitions />
  <RuleDefinitions><TabDisplayRules /><DisplayRules /><EnableRules /></RuleDefinitions>
  <LocLabels />
</RibbonDiffXml>
""";
        return MakeZip(("customizations.xml", WrapSolutionXml(diff)));
    }

    /// <summary>Published (OOB) ribbon returned by RetrieveEntityRibbonRequest for the Form surface.</summary>
    private const string FormRibbonXml = """
<Ribbon>
  <Group Id="Mscrm.Form.account.MainTab.Save">
    <Controls>
      <Button Id="Mscrm.Form.account.Save" Sequence="10" LabelText="$LocLabels:devkit.account.OpenDialog.Form.Button.LabelText" SolutionUniqueName="System" />
      <FlyoutAnchor Id="devkit.account.OpenDialog.Form.Button" Sequence="20" LabelText="Custom Flyout" SolutionUniqueName="devkit_ribbon" />
      <Control Id="Mscrm.Form.account.Ignored" Sequence="30" />
      <Button Id="devkit.account.Ghost.Form.Button" Sequence="40" LabelText="Ghost" SolutionUniqueName="devkit_ribbon" />
      <Button Id="devkit.account.NoCmd.Form.Button" Sequence="50" SolutionUniqueName="devkit_ribbon" />
      <Button Id="devkit.account.Orphan.Form.Button" Sequence="60" Command="devkit.account.Orphan.Form.Command" SolutionUniqueName="devkit_ribbon" />
    </Controls>
  </Group>
</Ribbon>
""";

    private void UseFormRibbonZip()
    {
        _service.RibbonZips[RibbonLocationFilters.Form] = MakeZip(("RibbonXml.xml", FormRibbonXml));
    }

    private const string AddButtonOps = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen"}]
""";

    private void SeedMenuWebResources()
    {
        SeedWebResource("devkit_/actions.js", "Actions Library");
        SeedWebResource("devkit_/actions.enable.js", "Actions Enable Library");
        SeedWebResource("devkit_/print.js", "Print Library");
        SeedWebResource("devkit_/print.enable.js", "Print Enable Library");
        SeedWebResource("devkit_/email.js", "Email Library");
        SeedWebResource("devkit_/email.enable.js", "Email Enable Library");
        SeedWebResource("devkit_/icons/actions.svg", "Actions Icon");
        SeedWebResource("devkit_/icons/print.svg", "Print Icon");
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_WithoutSolution_ReportsEmptyWithCreateHint()
    {
        var result = await CallAsync("list");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Solution 'devkit_ribbon' does not exist yet.");
        StringAssert.Contains(Text(result), "No ribbon customizations found.");
        Assert.AreEqual("empty", Struct(result).GetProperty("status").GetString());
        Assert.AreEqual(0, _service.ExportSolutionRequests);
    }

    [TestMethod]
    public async Task List_WithEntitiesInSolution_ReturnsEntityButtonCounts()
    {
        EnsureSolution();
        _service.ExportZipBytes = MakeZip(("customizations.xml", """
<ImportExportXml>
  <Entities>
    <Entity>
      <Name>account</Name>
      <RibbonDiffXml><CustomActions><CustomAction Id="a" /><CustomAction Id="b" /></CustomActions></RibbonDiffXml>
    </Entity>
    <Entity><Name>contact</Name></Entity>
    <Entity><RibbonDiffXml /></Entity>
  </Entities>
</ImportExportXml>
"""));
        var result = await CallAsync("list");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "2 entities with ribbon customizations: account (2 buttons), contact (0 buttons).");
        var structured = Struct(result);
        Assert.AreEqual("ok", structured.GetProperty("status").GetString());
        Assert.AreEqual(2, structured.GetProperty("entities").GetArrayLength());
    }

    [TestMethod]
    public async Task List_SolutionWithoutEntities_ReturnsZeroCount()
    {
        EnsureSolution();
        var result = await CallAsync("list");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "0 entities with ribbon customizations in 'devkit_ribbon'.");
    }

    // ──────────────────────────────────────────────
    // entity resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Buttons_UnknownEntity_ReturnsNotFound()
    {
        var result = await CallAsync("buttons", "zzznope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "entity_name 'zzznope'");
        StringAssert.Contains(Text(result), "was not found by Display Name");
    }

    [TestMethod]
    public async Task Buttons_AmbiguousEntity_ReturnsCandidatesWithHint()
    {
        _service.Entities.Add(MakeEntityMetadata("acct2", "Account", "AcctTwo"));
        var result = await CallAsync("buttons", "Accou");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Re-call with a more specific entity_name");
        Assert.IsTrue(Struct(result).TryGetProperty("details", out _));
    }

    // ──────────────────────────────────────────────
    // busy-environment gate
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Buttons_ActiveImportJob_ReturnsEnvironmentBusy()
    {
        var jobId = Guid.NewGuid();
        _service.ActiveJob = new Entity("asyncoperation", jobId)
        {
            ["operationtype"] = new OptionSetValue(203),
            ["statuscode"] = new OptionSetValue(20),
            ["messagename"] = "ImportSolution",
            ["name"] = "ImportSolution devkit_ribbon"
        };

        var result = await CallAsync("buttons", "account");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "environment_busy");
        StringAssert.Contains(Text(result), "ImportSolution InProgress");
        StringAssert.Contains(Text(result), "get_system_jobs");

        var structured = Struct(result);
        Assert.AreEqual("environment_busy", structured.GetProperty("status").GetString());
        Assert.IsTrue(structured.GetProperty("needsWait").GetBoolean());
        Assert.AreEqual(jobId.ToString(), structured.GetProperty("asyncOperationId").GetString());
        Assert.AreEqual("get_system_jobs", structured.GetProperty("waitTool").GetString());
        Assert.IsFalse(structured.GetProperty("readbackAllowed").GetBoolean());
        Assert.AreEqual(3, structured.GetProperty("pollScheduleSeconds").GetArrayLength());
        Assert.AreEqual(3, structured.GetProperty("maxPollAttempts").GetInt32());
        Assert.AreEqual(210, structured.GetProperty("maxWaitSeconds").GetInt32());
        Assert.AreEqual("stop_without_readback", structured.GetProperty("waitTimeoutAction").GetString());
        Assert.AreEqual(0, _service.ImportSolutionRequests);
    }

    [TestMethod]
    public async Task Detail_ActivePublishAllJob_ReportsPublishAllOperation()
    {
        var jobId = Guid.NewGuid();
        _service.ActiveJob = new Entity("asyncoperation", jobId)
        {
            ["operationtype"] = new OptionSetValue(54),
            ["statuscode"] = new OptionSetValue(10),
            ["messagename"] = "PublishAllAsync",
            ["name"] = ""
        };

        var result = await CallAsync("detail", "account");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "environment_busy");
        StringAssert.Contains(Text(result), "PublishAll Waiting");
        Assert.AreEqual(jobId.ToString(), Struct(result).GetProperty("asyncOperationId").GetString());
    }

    // ──────────────────────────────────────────────
    // role gate
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_NonAdmin_ReturnsRoleGateError()
    {
        _service.IsAdmin = false;
        _service.NonAdminRoleName = "Sales Manager";

        var result = await CallAsync("update", "account", operations: AddButtonOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "This action requires the 'System Administrator' role");
        StringAssert.Contains(Text(result), "Sales Manager");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public async Task Update_NonAdminWithoutRoles_HintsNoRolesAssigned()
    {
        _service.IsAdmin = false;
        _service.NonAdminRoleName = null;

        var result = await CallAsync("update", "account", operations: AddButtonOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "This action requires the 'System Administrator' role");
        StringAssert.Contains(Text(result), "(no roles assigned)");
    }

    // ──────────────────────────────────────────────
    // update entry validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_WithoutOperationsOrRibbonXml_ReturnsError()
    {
        var result = await CallAsync("update", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'operations' is required for action='update'.");
    }

    [TestMethod]
    public async Task Update_DryRun_ReturnsPreviewWithoutMutation()
    {
        SeedCoreWebResources();
        var result = await CallAsync("update", "account", operations: AddButtonOps, dryRun: true);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would UPDATE ribbon for entity 'account'.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.PublishAllAsyncRequests);
        Assert.AreEqual(0, _service.AddSolutionComponentRequests);
        Assert.AreEqual(0, _service.ExportSolutionRequests);
    }

    // ──────────────────────────────────────────────
    // update from operations — input validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_InvalidOperationsJson_ReturnsFriendlyError()
    {
        var result = await CallAsync("update", "account", operations: "{not json");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid 'operations' JSON");
    }

    [TestMethod]
    public async Task Update_EmptyOperationsArray_ReturnsError()
    {
        var result = await CallAsync("update", "account", operations: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "operations must be a non-empty JSON array.");
    }

    [TestMethod]
    public async Task Update_OperationWithoutActionField_ReturnsError()
    {
        var result = await CallAsync("update", "account", operations: """[{"label":"x"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Each operation must have an 'action' field.");
    }

    [TestMethod]
    public async Task Update_NullOperationElement_ReturnsError()
    {
        // JsonNode.Parse("null") returns null — exercises the null-node normalization branch.
        var result = await CallAsync("update", "account", operations: "[null]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Update_UnknownOperationAction_ReturnsError()
    {
        var result = await CallAsync("update", "account", operations: """[{"action":"frobnicate"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unknown action 'frobnicate'.");
        StringAssert.Contains(Text(result), "add_button, update_button, hide_button, show_button");
    }

    [TestMethod]
    public async Task Update_EntityValidationFailure_ReturnsError()
    {
        _service.EntityExistsInDataverse = false;
        var result = await CallAsync("update", "account", operations: AddButtonOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Entity 'account' not found in Dataverse.");
    }

    [TestMethod]
    public async Task Update_UnknownWebResource_ReturnsResolutionError()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"ghost.js","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Operation name resolution failed");
        StringAssert.Contains(Text(result), "operations[0].library 'ghost.js'");
    }

    [TestMethod]
    public async Task Update_AmbiguousWebResource_ReturnsResolutionError()
    {
        SeedWebResource("a_/one.js", "Shared Library");
        SeedWebResource("a_/two.js", "Shared Library");
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"Shared Library","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Operation name resolution failed");
        StringAssert.Contains(Text(result), "operations[0].library 'Shared Library'");
    }

    // ──────────────────────────────────────────────
    // add_button
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task AddButton_MissingRequiredFields_ReturnsFieldSpecificErrors()
    {
        var cases = new (string Ops, string Expected)[]
        {
            ("""{"action":"add_button","label":"X","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"}""", "add_button requires 'surface'"),
            ("""{"action":"add_button","surface":"form","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"}""", "add_button requires 'label'"),
            ("""{"action":"add_button","surface":"form","label":"X","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"}""", "add_button requires 'library'"),
            ("""{"action":"add_button","surface":"form","label":"X","library":"devkit_/account.js","enable_library":"devkit_/account.enable.js","enable_function":"E"}""", "add_button requires 'function'"),
            ("""{"action":"add_button","surface":"form","label":"X","library":"devkit_/account.js","function":"F","enable_function":"E"}""", "add_button requires 'enable_library'"),
            ("""{"action":"add_button","surface":"form","label":"X","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js"}""", "add_button requires 'enable_function'"),
        };

        SeedCoreWebResources();
        foreach (var (ops, expected) in cases)
        {
            var result = await CallAsync("update", "account", operations: $"[{ops}]");
            Assert.IsTrue(result.IsError == true, expected + " ||| " + Text(result));
            StringAssert.Contains(Text(result), expected);
        }
    }

    [TestMethod]
    public async Task AddButton_InvalidSurface_ReturnsError()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"sidebar","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid surface 'sidebar'.");
    }

    [TestMethod]
    public async Task AddButton_SelectionCountOnFormSurface_ReturnsError()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E","selection_min":1}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "selection_min/selection_max are only supported for main_grid or sub_grid");
    }

    [TestMethod]
    public async Task AddButton_InvalidSelectionCountValues_ReturnsError()
    {
        SeedCoreWebResources();
        var cases = new (string Ops, string Expected)[]
        {
            ("""{"action":"add_button","surface":"sub_grid","label":"L","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E","selection_min":"1"}""", "add_button 'selection_min' must be an integer."),
            ("""{"action":"add_button","surface":"sub_grid","label":"L","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E","selection_min":-1}""", "add_button 'selection_min' must be greater than or equal to 0."),
            ("""{"action":"add_button","surface":"sub_grid","label":"L","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E","selection_max":-2}""", "add_button 'selection_max' must be greater than or equal to 0."),
            ("""{"action":"add_button","surface":"sub_grid","label":"L","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E","selection_min":5,"selection_max":2}""", "add_button 'selection_min' cannot be greater than 'selection_max'."),
        };

        foreach (var (ops, expected) in cases)
        {
            var result = await CallAsync("update", "account", operations: $"[{ops}]");
            Assert.IsTrue(result.IsError == true, expected + " ||| " + Text(result));
            StringAssert.Contains(Text(result), expected);
        }
    }

    [TestMethod]
    public async Task AddButton_Form_Success_ImportsPublishesAndBacksUp()
    {
        EnsureSolution();
        SeedCoreWebResources();
        _service.ComponentRows.Add((Guid.NewGuid(), 1));
        _service.ComponentRows.Add((Guid.NewGuid(), 61));
        _service.ComponentRows.Add((Guid.NewGuid(), null));   // skipped: no componenttype
        _service.ComponentRows.Add((Guid.Empty, 1));          // skipped: empty objectid

        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen","modern_image":"devkit_/icons/open.svg","tooltip_title":"Open","tooltip_description":"Open dialog","sequence":42}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "1 operation (add_button: 'Open Dialog' [form] click=Account.openDialog enable=Account.canOpen)");
        StringAssert.Contains(Text(result), "PublishAll started asynchronously");

        var structured = Struct(result);
        Assert.AreEqual("publish_in_progress", structured.GetProperty("status").GetString());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());
        Assert.AreEqual(_service.PublishJobId.ToString(), structured.GetProperty("asyncOperationId").GetString());
        Assert.IsTrue(structured.GetProperty("needsWait").GetBoolean());

        var backupPath = structured.GetProperty("backupPath").GetString();
        Assert.IsFalse(string.IsNullOrWhiteSpace(backupPath));
        Assert.IsTrue(File.Exists(backupPath!), "backup file must exist under the workspace folder");

        var signatures = structured.GetProperty("functionSignatures");
        Assert.AreEqual(2, signatures.GetArrayLength());
        Assert.IsTrue(signatures.EnumerateArray().Any(s => s.GetProperty("role").GetString() == "click" && s.GetProperty("functionName").GetString() == "Account.openDialog"));
        Assert.IsTrue(signatures.EnumerateArray().Any(s => s.GetProperty("role").GetString() == "enable" && s.GetProperty("expectedReturn").GetString() == "boolean"));

        // FetchExistingRibbonDiffXml runs twice (existing fetch + backup), each resetting solution components.
        Assert.AreEqual(2, _service.ExportSolutionRequests);
        Assert.AreEqual(2, _service.AddSolutionComponentRequests);
        Assert.AreEqual(4, _service.RemoveSolutionComponentRequests);
        Assert.AreEqual(2, _service.RetrieveEntityRequests);
        Assert.AreEqual(1, _service.ImportSolutionRequests);
        Assert.AreEqual(1, _service.PublishAllAsyncRequests);
        Assert.IsNotNull(_service.LastImportedSolutionZip);
        Assert.IsTrue(_service.LastImportedSolutionZip!.Length > 0);
    }

    [TestMethod]
    public async Task AddButton_SubGridWithSelectionRules_Success()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"sub_grid","label":"Bulk Approve","library":"devkit_/account.js","function":"Bulk.approve","enable_library":"devkit_/account.enable.js","enable_function":"Bulk.canApprove","selection_min":1,"selection_max":5}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "add_button: 'Bulk Approve' [sub_grid] click=Bulk.approve enable=Bulk.canApprove");
        Assert.AreEqual(1, _service.ImportSolutionRequests);
        Assert.AreEqual(1, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public async Task AddButton_WebResourcePrefix_Succeeds()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"$webresource:devkit_/account.js","function":"Account.openDialog","enable_library":"$webresource:devkit_/account.enable.js","enable_function":"Account.canOpen"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "add_button: 'Open Dialog' [form]");
    }

    [TestMethod]
    public async Task AddButton_ReAdd_ReplacesPreviousDefinition()
    {
        SeedCoreWebResources();
        var result = await CallAsync("update", "account", operations: $"[{AddButtonOps.TrimStart('[').TrimEnd(']')},{AddButtonOps.TrimStart('[').TrimEnd(']')}]");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "PublishAll started asynchronously");
        Assert.AreEqual(1, _service.ImportSolutionRequests);
    }

    // ──────────────────────────────────────────────
    // update_button
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task UpdateButton_ById_UpdatesAllUpdatableFields()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen"},
 {"action":"update_button","button_id":"devkit.account.OpenDialog.Form.Button","label":"Renamed","tooltip_title":"New Tip","tooltip_description":"New Desc","modern_image":"devkit_/icons/open.svg","sequence":7,"library":"devkit_/account.js","function":"Account.renamed","enable_library":"devkit_/account.enable.js","enable_function":"Account.canRename"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_button: 'devkit.account.OpenDialog.Form.Button' updated [label, tooltip_title, tooltip_description, sequence=7, modern_image, library, function, enable_library, enable_function]");
    }

    [TestMethod]
    public async Task UpdateButton_ByLabelLookup_UsesNewLabel()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"Account.openDialog","enable_library":"devkit_/account.enable.js","enable_function":"Account.canOpen"},
 {"action":"update_button","label":"Open Dialog","new_label":"Renamed Again"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_button: 'devkit.account.OpenDialog.Form.Button' updated [label]");
    }

    [TestMethod]
    public async Task UpdateButton_ByLabel_MultipleMatches_ReturnsError()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"},
 {"action":"add_button","surface":"main_grid","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"},
 {"action":"update_button","label":"Open Dialog","new_label":"Pick One"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple custom buttons with label 'Open Dialog' found");
        StringAssert.Contains(Text(result), "Use 'button_id' to identify the button.");
    }

    [TestMethod]
    public async Task UpdateButton_MissingIdentification_ReturnsError()
    {
        SeedCoreWebResources();
        const string ops = """[{"action":"update_button","new_label":"Renamed"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "update_button requires 'button_id' or 'label' to identify the button.");
    }

    [TestMethod]
    public async Task UpdateButton_OobButton_ReturnsNotSupported()
    {
        SeedCoreWebResources();
        const string ops = """[{"action":"update_button","button_id":"Mscrm.Form.account.Save","label":"X"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "update_button only supports custom buttons");
    }

    [TestMethod]
    public async Task UpdateButton_UnknownLabel_FallsBackToSlugAndFails()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"},
 {"action":"update_button","label":"Ghost Dialog","new_label":"Nope"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Button 'devkit.account.GhostDialog.Button' not found in existing RibbonDiffXml.");
    }

    [TestMethod]
    public async Task UpdateButton_WithoutUpdatableFields_ReturnsError()
    {
        SeedCoreWebResources();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"},
 {"action":"update_button","button_id":"devkit.account.OpenDialog.Form.Button"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "update_button requires at least one updatable field.");
    }

    // ──────────────────────────────────────────────
    // hide_button / show_button
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task HideButton_MissingButtonId_ReturnsError()
    {
        var result = await CallAsync("update", "account", operations: """[{"action":"hide_button"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "hide_button requires 'button_id'");
    }

    [TestMethod]
    public async Task HideButton_OobButton_AddsHideCustomAction()
    {
        UseFormRibbonZip();
        const string ops = """[{"action":"hide_button","button_id":"Mscrm.Form.account.Save"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "hide_button (OOB): 'Mscrm.Form.account.Save'");
        StringAssert.Contains(Text(result), "HideCustomAction added");
    }

    [TestMethod]
    public async Task HideThenShowButton_OobButton_RemovesHideCustomAction()
    {
        UseFormRibbonZip();
        const string ops = """
[{"action":"hide_button","button_id":"Mscrm.Form.account.Save"},
 {"action":"show_button","button_id":"Mscrm.Form.account.Save"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "HideCustomAction added");
        StringAssert.Contains(Text(result), "HideCustomAction removed");
    }

    [TestMethod]
    public async Task ShowButton_OobWithoutHideAction_ReportsAlreadyVisible()
    {
        UseFormRibbonZip();
        const string ops = """[{"action":"show_button","button_id":"Mscrm.Form.account.Save"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "no HideCustomAction found (button already visible)");
    }

    [TestMethod]
    public async Task HideButton_WhenRibbonLookupFails_TreatsAsOob()
    {
        _service.RibbonRequestThrows = true;
        const string ops = """[{"action":"hide_button","button_id":"Mscrm.Form.account.Save"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "hide_button (OOB): 'Mscrm.Form.account.Save'");
        StringAssert.Contains(Text(result), "HideCustomAction added");
    }

    [TestMethod]
    public async Task HideThenShowButton_CustomButton_TogglesAlwaysDisabledRule()
    {
        SeedCoreWebResources();
        UseFormRibbonZip();
        const string ops = """
[{"action":"add_button","surface":"form","label":"Open Dialog","library":"devkit_/account.js","function":"F","enable_library":"devkit_/account.enable.js","enable_function":"E"},
 {"action":"hide_button","button_id":"devkit.account.OpenDialog.Form.Button"},
 {"action":"show_button","button_id":"devkit.account.OpenDialog.Form.Button"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "hide_button (custom): 'devkit.account.OpenDialog.Form.Button'");
        StringAssert.Contains(Text(result), "AlwaysDisabled EnableRule injected into 'devkit.account.OpenDialog.Form.Command'");
        StringAssert.Contains(Text(result), "show_button (custom): 'devkit.account.OpenDialog.Form.Button'");
        StringAssert.Contains(Text(result), "AlwaysDisabled EnableRule removed from 'devkit.account.OpenDialog.Form.Command'");
    }

    [TestMethod]
    public async Task HideButton_CustomNotFound_ReturnsError()
    {
        UseFormRibbonZip();
        const string ops = """[{"action":"hide_button","button_id":"devkit.account.Ghost.Form.Button"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Button 'devkit.account.Ghost.Form.Button' not found in RibbonDiffXml.");
    }

    [TestMethod]
    public async Task HideButton_CustomWithoutCommand_ReturnsError()
    {
        EnsureSolution();
        UseFormRibbonZip();
        _service.ExportZipBytes = MakeCustomButtonsSolutionZip("""<Button Id="devkit.account.NoCmd.Form.Button" />""");
        const string ops = """[{"action":"hide_button","button_id":"devkit.account.NoCmd.Form.Button"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Button 'devkit.account.NoCmd.Form.Button' has no Command attribute.");
    }

    [TestMethod]
    public async Task HideButton_CustomWithMissingCommandDefinition_ReturnsError()
    {
        EnsureSolution();
        UseFormRibbonZip();
        _service.ExportZipBytes = MakeCustomButtonsSolutionZip("""<Button Id="devkit.account.Orphan.Form.Button" Command="devkit.account.Orphan.Form.Command" />""");
        const string ops = """[{"action":"hide_button","button_id":"devkit.account.Orphan.Form.Button"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "CommandDefinition 'devkit.account.Orphan.Form.Command' not found for button 'devkit.account.Orphan.Form.Button'.");
    }

    // ──────────────────────────────────────────────
    // add_split_button
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task AddSplitButton_MissingRequiredFields_ReturnsFieldSpecificErrors()
    {
        var cases = new (string Ops, string Expected)[]
        {
            ("""{"action":"add_split_button","label":"X","library":"devkit_/actions.js","function":"F","enable_library":"devkit_/actions.enable.js","enable_function":"E"}""", "add_split_button requires 'surface'"),
            ("""{"action":"add_split_button","surface":"form","library":"devkit_/actions.js","function":"F","enable_library":"devkit_/actions.enable.js","enable_function":"E"}""", "add_split_button requires 'label'"),
            ("""{"action":"add_split_button","surface":"form","label":"X","function":"F","enable_library":"devkit_/actions.enable.js","enable_function":"E"}""", "add_split_button requires 'library'"),
            ("""{"action":"add_split_button","surface":"form","label":"X","library":"devkit_/actions.js","enable_library":"devkit_/actions.enable.js","enable_function":"E"}""", "add_split_button requires 'function'"),
            ("""{"action":"add_split_button","surface":"form","label":"X","library":"devkit_/actions.js","function":"F","enable_function":"E"}""", "add_split_button requires 'enable_library'"),
            ("""{"action":"add_split_button","surface":"form","label":"X","library":"devkit_/actions.js","function":"F","enable_library":"devkit_/actions.enable.js"}""", "add_split_button requires 'enable_function'"),
        };

        SeedMenuWebResources();
        foreach (var (ops, expected) in cases)
        {
            var result = await CallAsync("update", "account", operations: $"[{ops}]");
            Assert.IsTrue(result.IsError == true, expected + " ||| " + Text(result));
            StringAssert.Contains(Text(result), expected);
        }
    }

    [TestMethod]
    public async Task AddSplitButton_ItemsValidation_ReturnsItemSpecificErrors()
    {
        SeedMenuWebResources();
        const string main = "\"action\":\"add_split_button\",\"surface\":\"form\",\"label\":\"Actions\",\"library\":\"devkit_/actions.js\",\"function\":\"Actions.run\",\"enable_library\":\"devkit_/actions.enable.js\",\"enable_function\":\"Actions.canRun\"";
        var cases = new (string Ops, string Expected)[]
        {
            ($"{{{main}}}", "requires 'items' array with at least 1 item."),
            ($"{{{main},\"items\":[]}}", "requires 'items' array with at least 1 item."),
            ($"{{{main},\"items\":\"nope\"}}", "requires 'items' array with at least 1 item."),
            ($"{{{main},\"items\":[{{\"library\":\"devkit_/print.js\",\"function\":\"P\",\"enable_library\":\"devkit_/print.enable.js\",\"enable_function\":\"E\"}}]}}", "Each item requires 'label'."),
            ($"{{{main},\"items\":[{{\"label\":\"Print\",\"function\":\"P\",\"enable_library\":\"devkit_/print.enable.js\",\"enable_function\":\"E\"}}]}}", "Item 'Print' requires 'library'."),
            ($"{{{main},\"items\":[{{\"label\":\"Print\",\"library\":\"devkit_/print.js\",\"enable_library\":\"devkit_/print.enable.js\",\"enable_function\":\"E\"}}]}}", "Item 'Print' requires 'function'."),
            ($"{{{main},\"items\":[{{\"label\":\"Print\",\"library\":\"devkit_/print.js\",\"function\":\"P\",\"enable_function\":\"E\"}}]}}", "Item 'Print' requires 'enable_library'."),
            ($"{{{main},\"items\":[{{\"label\":\"Print\",\"library\":\"devkit_/print.js\",\"function\":\"P\",\"enable_library\":\"devkit_/print.enable.js\"}}]}}", "Item 'Print' requires 'enable_function'."),
        };

        foreach (var (ops, expected) in cases)
        {
            var result = await CallAsync("update", "account", operations: $"[{ops}]");
            Assert.IsTrue(result.IsError == true, expected + " ||| " + Text(result));
            StringAssert.Contains(Text(result), expected);
        }
    }

    [TestMethod]
    public async Task AddSplitButton_DuplicateItemSlug_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"},{"label":"print","library":"devkit_/print.js","function":"P2","enable_library":"devkit_/print.enable.js","enable_function":"E2"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Duplicate item slug 'Print'");
    }

    [TestMethod]
    public async Task AddSplitButton_Success_BuildsMenuAndSignatures()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","tooltip_title":"Actions Menu","tooltip_description":"All actions","modern_image":"devkit_/icons/actions.svg","sequence":60,"items":[{"label":"Print","library":"devkit_/print.js","function":"Print.run","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRun","modern_image":"devkit_/icons/print.svg","tooltip_title":"Print It","sequence":10},{"label":"Email","library":"devkit_/email.js","function":"Email.run","enable_library":"devkit_/email.enable.js","enable_function":"Email.canRun"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "add_split_button: 'Actions' [form] main_fn=Actions.run items=[Print, Email]");
        StringAssert.Contains(Text(result), "PublishAll started asynchronously");

        var signatures = Struct(result).GetProperty("functionSignatures");
        Assert.IsTrue(signatures.GetArrayLength() >= 5, "main click/enable + item click/enable signatures expected");
    }

    // ──────────────────────────────────────────────
    // update_split_button
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task UpdateSplitButton_MissingIdentification_ReturnsError()
    {
        SeedMenuWebResources();
        var result = await CallAsync("update", "account", operations: """[{"action":"update_split_button","new_label":"X"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "update_split_button requires 'split_button_id' or 'label' to identify the split button.");
    }

    [TestMethod]
    public async Task UpdateSplitButton_UnknownId_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """[{"action":"update_split_button","split_button_id":"devkit.account.Nope.SplitButton","label":"X"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "SplitButton 'devkit.account.Nope.SplitButton' not found in existing RibbonDiffXml.");
        StringAssert.Contains(Text(result), "Use add_split_button to create it first.");
    }

    [TestMethod]
    public async Task UpdateSplitButton_WithoutFields_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_split_button","split_button_id":"devkit.account.Actions.Form.SplitButton"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No fields to update.");
    }

    [TestMethod]
    public async Task UpdateSplitButton_ById_UpdatesMainAndItemFields()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"Print.run","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRun"},{"label":"Email","library":"devkit_/email.js","function":"Email.run","enable_library":"devkit_/email.enable.js","enable_function":"Email.canRun"}]},
 {"action":"update_split_button","split_button_id":"devkit.account.Actions.Form.SplitButton","label":"Actions Updated","tooltip_title":"Updated Tip","tooltip_description":"Updated Desc","modern_image":"devkit_/icons/actions.svg","sequence":55,"library":"devkit_/actions.js","function":"Actions.runV2","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRunV2","items":[{"item_label":"Print","label":"Print Now","tooltip_title":"PT","modern_image":"devkit_/icons/print.svg","sequence":5,"library":"devkit_/print.js","function":"Print.runV2","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRunV2"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_split_button: 'devkit.account.Actions.Form.SplitButton' updated [label, tooltip_title, tooltip_description, modern_image, sequence=55, library, function, enable_library, enable_function");
        StringAssert.Contains(Text(result), "item[Print]: label, tooltip_title, modern_image, sequence, library, function, enable_library, enable_function]");
        Assert.AreEqual(1, _service.ImportSolutionRequests);
    }

    [TestMethod]
    public async Task UpdateSplitButton_ByLabel_UsesNewLabel()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_split_button","label":"Actions","new_label":"Actions Renamed"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_split_button: 'devkit.account.Actions.Form.SplitButton' updated [label]");
    }

    [TestMethod]
    public async Task UpdateSplitButton_ItemLabelMissing_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_split_button","split_button_id":"devkit.account.Actions.Form.SplitButton","items":[{"label":"Print Now"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Each item in update_split_button requires 'item_label'");
    }

    [TestMethod]
    public async Task UpdateSplitButton_UnknownItem_ReturnsExistingItems()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_split_button","surface":"form","label":"Actions","library":"devkit_/actions.js","function":"Actions.run","enable_library":"devkit_/actions.enable.js","enable_function":"Actions.canRun","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_split_button","split_button_id":"devkit.account.Actions.Form.SplitButton","items":[{"item_label":"Ghost","label":"X"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Item button 'devkit.account.Actions.Form.Ghost.Button' not found in split button.");
        StringAssert.Contains(Text(result), "Existing items: devkit.account.Actions.Form.Print.Button");
    }

    // ──────────────────────────────────────────────
    // add_flyout_static / update_flyout_static
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task AddFlyoutStatic_MissingRequiredFields_ReturnsFieldSpecificErrors()
    {
        SeedMenuWebResources();
        var missingSurface = await CallAsync("update", "account", operations: """[{"action":"add_flyout_static","label":"X"}]""");
        Assert.IsTrue(missingSurface.IsError == true);
        StringAssert.Contains(Text(missingSurface), "add_flyout_static requires 'surface'");

        var missingLabel = await CallAsync("update", "account", operations: """[{"action":"add_flyout_static","surface":"form"}]""");
        Assert.IsTrue(missingLabel.IsError == true);
        StringAssert.Contains(Text(missingLabel), "add_flyout_static requires 'label'");
    }

    [TestMethod]
    public async Task AddFlyoutStatic_ItemsValidation_ReturnsItemSpecificErrors()
    {
        SeedMenuWebResources();
        var cases = new (string Ops, string Expected)[]
        {
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions"}""", "requires 'items' array with at least 1 item."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[]}""", "requires 'items' array with at least 1 item."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":"nope"}""", "requires 'items' array with at least 1 item."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]}""", "Each item requires 'label'."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]}""", "Item 'Print' requires 'library'."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","enable_library":"devkit_/print.enable.js","enable_function":"E"}]}""", "Item 'Print' requires 'function'."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_function":"E"}]}""", "Item 'Print' requires 'enable_library'."),
            ("""{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js"}]}""", "Item 'Print' requires 'enable_function'."),
        };

        foreach (var (ops, expected) in cases)
        {
            var result = await CallAsync("update", "account", operations: $"[{ops}]");
            Assert.IsTrue(result.IsError == true, expected + " ||| " + Text(result));
            StringAssert.Contains(Text(result), expected);
        }
    }

    [TestMethod]
    public async Task AddFlyoutStatic_Success_BuildsFlyoutAnchor()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","tooltip_title":"Flyout Tip","tooltip_description":"Flyout Desc","modern_image":"devkit_/icons/actions.svg","sequence":70,"items":[{"label":"Print","library":"devkit_/print.js","function":"Print.run","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRun","modern_image":"devkit_/icons/print.svg","tooltip_title":"Print Tip","sequence":10},{"label":"Email","library":"devkit_/email.js","function":"Email.run","enable_library":"devkit_/email.enable.js","enable_function":"Email.canRun"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "add_flyout_static: 'More Actions' [form] items=[Print, Email]");
        Assert.AreEqual(1, _service.ImportSolutionRequests);
        Assert.AreEqual(1, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_MissingIdentification_ReturnsError()
    {
        SeedMenuWebResources();
        var result = await CallAsync("update", "account", operations: """[{"action":"update_flyout_static","new_label":"X"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "update_flyout_static requires 'flyout_id' or 'label' to identify the flyout.");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_UnknownFlyout_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """[{"action":"update_flyout_static","flyout_id":"devkit.account.Nope.FlyoutAnchor","label":"X"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "FlyoutAnchor 'devkit.account.Nope.FlyoutAnchor' not found in existing RibbonDiffXml.");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_WithoutFields_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_flyout_static","flyout_id":"devkit.account.MoreActions.Form.FlyoutAnchor"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No fields to update.");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_ById_UpdatesFlyoutAndItemFields()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"Print.run","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRun"}]},
 {"action":"update_flyout_static","flyout_id":"devkit.account.MoreActions.Form.FlyoutAnchor","label":"More Updated","tooltip_title":"Updated Tip","tooltip_description":"Updated Desc","modern_image":"devkit_/icons/actions.svg","sequence":33,"items":[{"item_label":"Print","label":"Print Now","tooltip_title":"PT","modern_image":"devkit_/icons/print.svg","sequence":11,"library":"devkit_/print.js","function":"Print.runV2","enable_library":"devkit_/print.enable.js","enable_function":"Print.canRunV2"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_flyout_static: 'devkit.account.MoreActions.Form.FlyoutAnchor' updated [label, tooltip_title, tooltip_description, modern_image, sequence=33");
        StringAssert.Contains(Text(result), "item[Print]: label, tooltip_title, modern_image, sequence=11, library, function, enable_library, enable_function]");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_ByLabel_UsesNewLabel()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_flyout_static","label":"More Actions","new_label":"Renamed Menu"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "update_flyout_static: 'devkit.account.MoreActions.Form.FlyoutAnchor' updated [label]");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_ItemLabelMissing_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_flyout_static","flyout_id":"devkit.account.MoreActions.Form.FlyoutAnchor","items":[{"label":"Print Now"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Each item in update_flyout_static requires 'item_label'");
    }

    [TestMethod]
    public async Task UpdateFlyoutStatic_UnknownItem_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"update_flyout_static","flyout_id":"devkit.account.MoreActions.Form.FlyoutAnchor","items":[{"item_label":"Ghost","label":"X"}]}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Item button 'devkit.account.MoreActions.Form.Ghost.Button' not found in flyout.");
        StringAssert.Contains(Text(result), "Existing items:");
    }

    // ──────────────────────────────────────────────
    // hide_flyout_item / show_flyout_item
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task HideFlyoutItem_MissingItemLabel_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """[{"action":"hide_flyout_item","flyout_label":"More Actions"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'item_label' is required to identify the flyout item.");
    }

    [TestMethod]
    public async Task HideFlyoutItem_MissingFlyoutIdentification_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """[{"action":"hide_flyout_item","item_label":"Print"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'flyout_id' or 'flyout_label' is required to identify the flyout.");
    }

    [TestMethod]
    public async Task HideFlyoutItem_UnknownFlyout_ReturnsError()
    {
        SeedMenuWebResources();
        const string ops = """[{"action":"hide_flyout_item","flyout_id":"devkit.account.Nope.FlyoutAnchor","item_label":"Print"}]""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "FlyoutAnchor 'devkit.account.Nope.FlyoutAnchor' not found.");
        StringAssert.Contains(Text(result), "Use manage_ribbon(action='buttons') to list flyout Ids.");
    }

    [TestMethod]
    public async Task HideFlyoutItem_UnknownItem_ReturnsErrorWithExistingItems()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"hide_flyout_item","flyout_id":"devkit.account.MoreActions.Form.FlyoutAnchor","item_label":"Ghost"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Item button 'devkit.account.MoreActions.Form.Ghost.Button' not found in flyout.");
        StringAssert.Contains(Text(result), "devkit.account.MoreActions.Form.Print.Button");
    }

    [TestMethod]
    public async Task HideThenShowFlyoutItem_TogglesAlwaysDisabledRule()
    {
        SeedMenuWebResources();
        const string ops = """
[{"action":"add_flyout_static","surface":"form","label":"More Actions","items":[{"label":"Print","library":"devkit_/print.js","function":"P","enable_library":"devkit_/print.enable.js","enable_function":"E"}]},
 {"action":"hide_flyout_item","flyout_label":"More Actions","item_label":"Print"},
 {"action":"show_flyout_item","flyout_label":"More Actions","item_label":"Print"}]
""";
        var result = await CallAsync("update", "account", operations: ops);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "hide_flyout_item: 'devkit.account.MoreActions.Form.Print.Button'");
        StringAssert.Contains(Text(result), "AlwaysDisabled EnableRule injected into 'devkit.account.MoreActions.Form.Print.Command'");
        StringAssert.Contains(Text(result), "show_flyout_item: 'devkit.account.MoreActions.Form.Print.Button'");
        StringAssert.Contains(Text(result), "AlwaysDisabled EnableRule removed from 'devkit.account.MoreActions.Form.Print.Command'");
    }

    // ──────────────────────────────────────────────
    // update from raw ribbonxml
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task UpdateRibbonXml_MissingOrUnresolvableInput_ReturnsError()
    {
        var missingFile = await CallAsync("update", "account", ribbonxml: Path.Combine(_tempDir, "definitely-missing.xml"));
        Assert.IsTrue(missingFile.IsError == true);
        StringAssert.Contains(Text(missingFile), "RibbonXml file not found.");

        var unresolvable = await CallAsync("update", "account", ribbonxml: "not-a-path-or-xml");
        Assert.IsTrue(unresolvable.IsError == true);
        StringAssert.Contains(Text(unresolvable), "RibbonXml file not found.");
    }

    [TestMethod]
    public async Task UpdateRibbonXml_InlineXml_Success_AppliesPatch()
    {
        var result = await CallAsync("update", "account", ribbonxml: RibbonXmlHelpers.GetEmptyRibbonDiffXml());
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "ribbonxml patch applied");
        StringAssert.Contains(Text(result), "PublishAll started asynchronously");

        var structured = Struct(result);
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());
        Assert.AreEqual(_service.PublishJobId.ToString(), structured.GetProperty("asyncOperationId").GetString());
        Assert.IsFalse(structured.TryGetProperty("functionSignatures", out _));
        Assert.AreEqual(1, _service.ImportSolutionRequests);
        Assert.AreEqual(1, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public async Task UpdateRibbonXml_FromFile_Success()
    {
        var filePath = Path.Combine(_tempDir, "backup.ribbondiffxml");
        await File.WriteAllTextAsync(filePath, RibbonXmlHelpers.GetEmptyRibbonDiffXml());

        var result = await CallAsync("update", "account", ribbonxml: filePath);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "ribbonxml patch applied");
        Assert.AreEqual(1, _service.ImportSolutionRequests);
    }

    [TestMethod]
    public void UpdateRibbon_InternalDryRun_PreviewsWithoutImport()
    {
        var tool = NewTool(dryRun: true);
        var method = typeof(ManageRibbonTool).GetMethod("UpdateRibbon", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var result = (CallToolResult)method.Invoke(tool, new object[] { "account", RibbonXmlHelpers.GetEmptyRibbonDiffXml() })!;

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would UPDATE ribbon for entity 'account'.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public void UpdateRibbonFromOperations_InternalDryRun_PreviewsWithoutImport()
    {
        SeedCoreWebResources();
        var tool = NewTool(dryRun: true);
        var method = typeof(ManageRibbonTool).GetMethod("UpdateRibbonFromOperations", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var result = (CallToolResult)method.Invoke(tool, new object[] { "account", AddButtonOps })!;

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would UPDATE ribbon for entity 'account' with 1 operations.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.PublishAllAsyncRequests);
        Assert.AreEqual(0, _service.AddSolutionComponentRequests);
    }

    // ──────────────────────────────────────────────
    // undo
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_MissingRibbonXml_ReturnsError()
    {
        var result = await CallAsync("undo", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "ribbonxml is required for action='undo'.");
    }

    [TestMethod]
    public async Task Undo_MissingBackupFile_ReturnsError()
    {
        var result = await CallAsync("undo", "account", ribbonxml: Path.Combine(_tempDir, "nope.ribbon.json"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Backup file not found.");
    }

    [TestMethod]
    public async Task Undo_EmptyBackup_ReturnsError()
    {
        var backupPath = Path.Combine(_tempDir, "empty.ribbon.json");
        await File.WriteAllTextAsync(backupPath, "{}");

        var result = await CallAsync("undo", "account", ribbonxml: backupPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Backup file is empty or invalid.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
    }

    [TestMethod]
    public async Task Undo_DryRun_ReturnsPreviewWithoutMutating()
    {
        var backupPath = await WriteBackupFileAsync();
        var result = await CallAsync("undo", "account", ribbonxml: backupPath, dryRun: true);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would RESTORE ribbon for entity 'account' from backup.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.PublishAllAsyncRequests);
    }

    [TestMethod]
    public async Task Undo_Success_ImportsAndPublishes()
    {
        var backupPath = await WriteBackupFileAsync();

        var result = await CallAsync("undo", "account", ribbonxml: backupPath);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "manage_ribbon undo");
        StringAssert.Contains(Text(result), "restored from");
        StringAssert.Contains(Text(result), "PublishAll started asynchronously");

        var structured = Struct(result);
        Assert.AreEqual("publish_in_progress", structured.GetProperty("status").GetString());
        Assert.AreEqual(backupPath, structured.GetProperty("restoredFromBackup").GetString());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());
        Assert.AreEqual(_service.PublishJobId.ToString(), structured.GetProperty("asyncOperationId").GetString());
        Assert.AreEqual(1, _service.ImportSolutionRequests);
        Assert.AreEqual(1, _service.PublishAllAsyncRequests);
        Assert.IsNotNull(_service.LastImportedSolutionZip);
    }

    [TestMethod]
    public void UndoRibbon_InternalDryRun_PreviewsWithoutImport()
    {
        var backupPath = WriteBackupFileAsync().GetAwaiter().GetResult();
        var tool = NewTool(dryRun: true);
        var method = typeof(ManageRibbonTool).GetMethod("UndoRibbon", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var result = (CallToolResult)method.Invoke(tool, new object[] { "account", backupPath })!;

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would RESTORE ribbon for entity 'account' from backup.");
        Assert.AreEqual(0, _service.ImportSolutionRequests);
    }

    private async Task<string> WriteBackupFileAsync()
    {
        var backupPath = Path.Combine(_tempDir, "20240101000000.ribbon.json");
        var payload = new
        {
            entity = "account",
            timestamp = "2024-01-01T00:00:00",
            ribbonDiffXml = RibbonXmlHelpers.GetEmptyRibbonDiffXml()
        };
        await File.WriteAllTextAsync(backupPath, JsonSerializer.Serialize(payload));
        return backupPath;
    }

    // ──────────────────────────────────────────────
    // RibbonSolutionFetcher error/fallback branches (via update)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_WhenSolutionExportFails_ReturnsWrappedError()
    {
        EnsureSolution();
        SeedCoreWebResources();
        _service.ExportThrows = true;

        var result = await CallAsync("update", "account", operations: AddButtonOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Failed to export existing 'devkit_ribbon' RibbonDiffXml for 'account'.");
    }

    [TestMethod]
    public async Task Update_WhenExportMissingCustomizations_ReturnsWrappedError()
    {
        EnsureSolution();
        SeedCoreWebResources();
        _service.ExportZipBytes = MakeZip(("other.xml", "x"));

        var result = await CallAsync("update", "account", operations: AddButtonOps);
        Assert.IsTrue(result.IsError == true);
        // The friendly rewriter (ThrowExceptionFriendly) matches "entityname" in the
        // embedded stack trace and rewrites [Error] to the FetchXML hint; the wrapped
        // message survives verbatim in the Detail suffix, same as the export-fails test.
        StringAssert.Contains(Text(result), "Failed to export existing 'devkit_ribbon' RibbonDiffXml for 'account'.");
    }

    [TestMethod]
    public void Fetcher_Direct_WithBlockedContext_ThrowsBeforeServiceCall()
    {
        var fetcher = new RibbonSolutionFetcher(_service, new McpExecutionContext(true));

        InvalidOperationException? exception = null;
        try { fetcher.FetchExistingRibbonDiffXml("account"); }
        catch (InvalidOperationException ex) { exception = ex; }
        Assert.IsNotNull(exception);
        StringAssert.Contains(exception.Message, "Mutation blocked: prepare the ribbon solution for export");
    }

    // ──────────────────────────────────────────────
    // buttons
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Buttons_Success_ParsesButtonsLocLabelsAndHiddenButtons()
    {
        EnsureSolution();
        _service.ExportZipBytes = MakeDevKitSolutionZip();
        UseFormRibbonZip();

        var result = await CallAsync("buttons", "account");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "manage_ribbon buttons");
        StringAssert.Contains(Text(result), "form=6, main_grid=0, sub_grid=0.");

        var form = Struct(result).GetProperty("buttons")
            .EnumerateArray()
            .First(b => b.GetProperty("surface").GetString() == "form");

        var items = form.GetProperty("items");
        Assert.AreEqual(6, items.GetArrayLength());

        var hidden = items[0];
        Assert.AreEqual("Mscrm.Form.account.Deactivate", hidden.GetProperty("id").GetString());
        Assert.IsTrue(hidden.GetProperty("isHide").GetBoolean());

        var oob = items[1];
        Assert.AreEqual("Mscrm.Form.account.Save", oob.GetProperty("id").GetString());
        Assert.AreEqual("Open Dialog", oob.GetProperty("label").GetString());
        Assert.IsTrue(oob.GetProperty("isOob").GetBoolean());

        var custom = items[2];
        Assert.AreEqual("Custom Flyout", custom.GetProperty("label").GetString());
        Assert.IsTrue(custom.GetProperty("isCustom").GetBoolean());

        // One RetrieveEntityRibbonRequest per surface (form, main_grid, sub_grid).
        Assert.AreEqual(3, _service.RetrieveEntityRibbonRequests);
    }

    [TestMethod]
    public async Task Buttons_DryRun_SkipsDevKitRibbonData()
    {
        var result = await CallAsync("buttons", "account", dryRun: true);
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "form=0, main_grid=0, sub_grid=0.");
        Assert.AreEqual(0, _service.ExportSolutionRequests);
    }

    [TestMethod]
    public async Task Buttons_WhenRibbonReadFails_ReturnsStageError()
    {
        _service.RibbonRequestThrows = true;

        var result = await CallAsync("buttons", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "ListRibbonButtons stage=surface(form, filter=Form, groupSuffix=MainTab.Save)");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_WithoutSolution_ReturnsZeroCounts()
    {
        var result = await CallAsync("detail", "account");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "manage_ribbon detail");
        StringAssert.Contains(Text(result), "0 CustomAction, 0 CommandDefinition, 0 EnableRule, 0 LocLabel.");
        Assert.AreEqual(0, _service.ExportSolutionRequests);
    }

    [TestMethod]
    public async Task Detail_WithSolution_ReturnsCountsAndRibbonDiffXml()
    {
        EnsureSolution();
        _service.ExportZipBytes = MakeDetailSolutionZip();

        var result = await CallAsync("detail", "account");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "1 CustomAction, 1 CommandDefinition, 1 EnableRule, 2 LocLabel.");

        var ribbonDiffXml = Struct(result).GetProperty("ribbonDiffXml").GetString();
        StringAssert.Contains(ribbonDiffXml!, "devkit.account.One.Form.Button");
        Assert.AreEqual(1, _service.AddSolutionComponentRequests);
    }

    [TestMethod]
    public async Task Detail_DryRun_ReadsPublishedRibbonWithoutMutation()
    {
        // Phase 1: published ribbon XML returned via RetrieveEntityRibbonRequest.
        UseFormRibbonZip();
        var published = await CallAsync("detail", "account", dryRun: true);
        Assert.IsFalse(published.IsError == true, Text(published));
        StringAssert.Contains(Text(published), "0 CustomAction, 0 CommandDefinition, 0 EnableRule, 0 LocLabel.");
        Assert.AreEqual(1, _service.RetrieveEntityRibbonRequests);

        // Phase 2: null CompressedEntityXml falls back to the empty RibbonDiffXml.
        _service.RibbonZipNull = true;
        var nullZip = await CallAsync("detail", "account", dryRun: true);
        StringAssert.Contains(Text(nullZip), "0 CustomAction");

        // Phase 3: empty CompressedEntityXml falls back to the empty RibbonDiffXml.
        _service.RibbonZipNull = false;
        _service.RibbonZipEmpty = true;
        var emptyZip = await CallAsync("detail", "account", dryRun: true);
        StringAssert.Contains(Text(emptyZip), "0 CustomAction");

        // Phase 4: zip without a RibbonXml.xml entry falls back to the empty RibbonDiffXml.
        _service.RibbonZipEmpty = false;
        _service.RibbonZips.Clear();
        var missingEntry = await CallAsync("detail", "account", dryRun: true);
        StringAssert.Contains(Text(missingEntry), "0 CustomAction");

        Assert.AreEqual(0, _service.ImportSolutionRequests);
        Assert.AreEqual(0, _service.AddSolutionComponentRequests);
    }

    // ──────────────────────────────────────────────
    // IOrganizationService decorator
    // ──────────────────────────────────────────────

    private sealed class RibbonOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public readonly List<EntityMetadata> Entities = new();
        public readonly List<(Guid ObjectId, int? ComponentType)> ComponentRows = new();
        public Entity? ActiveJob;

        public bool EntityExistsInDataverse = true;
        public bool IsAdmin = true;
        public string? NonAdminRoleName = "Sales Manager";
        public bool RibbonRequestThrows;
        public bool ExportThrows;
        public byte[]? ExportZipBytes;
        public readonly Dictionary<RibbonLocationFilters, byte[]> RibbonZips = new();
        public bool RibbonZipNull;
        public bool RibbonZipEmpty;

        public readonly Guid PublishJobId = Guid.NewGuid();

        public int PublishXmlRequests;
        public int PublishAllAsyncRequests;
        public int ImportSolutionRequests;
        public int WhoAmIRequests;
        public int RetrieveAllEntitiesRequests;
        public int RetrieveEntityRequests;
        public int RetrieveEntityRibbonRequests;
        public int ExportSolutionRequests;
        public int AddSolutionComponentRequests;
        public int RemoveSolutionComponentRequests;

        public byte[]? LastImportedSolutionZip;
        public RibbonLocationFilters LastRibbonLocationFilter;

        public RibbonOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            CreateCalls++;
            return _inner.Create(entity);
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity) => _inner.Update(entity);

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            switch (request)
            {
                case PublishXmlRequest:
                    PublishXmlRequests++;
                    return new OrganizationResponse();
                case PublishAllXmlAsyncRequest:
                    PublishAllAsyncRequests++;
                    var publishResp = new PublishAllXmlAsyncResponse();
                    publishResp.Results["AsyncOperationId"] = PublishJobId;
                    return publishResp;
                case ImportSolutionRequest import:
                    ImportSolutionRequests++;
                    LastImportedSolutionZip = import.CustomizationFile;
                    return new ImportSolutionResponse();
                case WhoAmIRequest:
                    WhoAmIRequests++;
                    var who = new WhoAmIResponse();
                    who.Results["UserId"] = Guid.NewGuid();
                    who.Results["OrganizationId"] = Guid.NewGuid();
                    who.Results["BusinessUnitId"] = Guid.NewGuid();
                    return who;
                case RetrieveAllEntitiesRequest:
                    RetrieveAllEntitiesRequests++;
                    var allResp = new RetrieveAllEntitiesResponse();
                    allResp.Results["EntityMetadata"] = Entities.ToArray();
                    return allResp;
                case RetrieveEntityRequest retrieveEntity:
                    RetrieveEntityRequests++;
                    var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                    var entityResp = new RetrieveEntityResponse();
                    entityResp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                    return entityResp;
                case RetrieveEntityRibbonRequest ribbonRequest:
                    RetrieveEntityRibbonRequests++;
                    LastRibbonLocationFilter = ribbonRequest.RibbonLocationFilter;
                    if (RibbonRequestThrows)
                        throw new InvalidOperationException("ribbon service down");
                    var ribbonResp = new RetrieveEntityRibbonResponse();
                    if (RibbonZipNull)
                        ribbonResp.Results["CompressedEntityXml"] = null!;
                    else if (RibbonZipEmpty)
                        ribbonResp.Results["CompressedEntityXml"] = Array.Empty<byte>();
                    else
                        ribbonResp.Results["CompressedEntityXml"] = RibbonZips.TryGetValue(ribbonRequest.RibbonLocationFilter, out var zip)
                            ? zip
                            : MakeZip(("not-ribbon.txt", "no ribbon data"));
                    return ribbonResp;
                case ExportSolutionRequest:
                    ExportSolutionRequests++;
                    if (ExportThrows)
                        throw new InvalidOperationException("export blew up");
                    var exportResp = new ExportSolutionResponse();
                    exportResp.Results["ExportSolutionFile"] = ExportZipBytes ?? MakeZip(("customizations.xml", "<ImportExportXml/>"));
                    return exportResp;
                case AddSolutionComponentRequest:
                    AddSolutionComponentRequests++;
                    return new AddSolutionComponentResponse();
                case RemoveSolutionComponentRequest:
                    RemoveSolutionComponentRequests++;
                    return new RemoveSolutionComponentResponse();
                default:
                    return _inner.Execute(request);
            }
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            switch (query)
            {
                case FetchExpression fe when fe.Query.Contains("name='role'"):
                    {
                        var rows = new EntityCollection();
                        if (IsAdmin)
                        {
                            var adminRoleId = Guid.NewGuid();
                            rows.Entities.Add(new Entity("role", adminRoleId)
                            {
                                ["roleid"] = adminRoleId,
                                ["name"] = "System Administrator"
                            });
                        }
                        else if (NonAdminRoleName != null)
                        {
                            var roleId = Guid.NewGuid();
                            rows.Entities.Add(new Entity("role", roleId)
                            {
                                ["roleid"] = roleId,
                                ["name"] = NonAdminRoleName
                            });
                        }
                        return rows;
                    }
                case FetchExpression fe when fe.Query.Contains("name='entity'"):
                    {
                        var rows = new EntityCollection();
                        if (EntityExistsInDataverse)
                            rows.Entities.Add(new Entity("entity", Guid.NewGuid()) { ["logicalname"] = "account" });
                        return rows;
                    }
                case QueryExpression qe when string.Equals(qe.EntityName, "asyncoperation", StringComparison.OrdinalIgnoreCase):
                    {
                        var rows = new EntityCollection();
                        if (ActiveJob != null)
                            rows.Entities.Add(ActiveJob);
                        return rows;
                    }
                case QueryExpression qe when string.Equals(qe.EntityName, "solutioncomponent", StringComparison.OrdinalIgnoreCase):
                    {
                        var rows = new EntityCollection();
                        foreach (var (objectId, componentType) in ComponentRows)
                        {
                            var row = new Entity("solutioncomponent", Guid.NewGuid()) { ["objectid"] = objectId };
                            if (componentType.HasValue)
                                row["componenttype"] = new OptionSetValue(componentType.Value);
                            rows.Entities.Add(row);
                        }
                        return rows;
                    }
                default:
                    return _inner.RetrieveMultiple(query);
            }
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        public int CreateCalls { get; private set; }
    }
}
