using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
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
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageForm;

/// <summary>
/// FakeXrmEasy-driven end-to-end coverage for ManageFormTool (list/detail/update/
/// rename/undo plus entity resolution, role gate, FormXML XSD validation, backup
/// files and dry-run paths). Metadata/publish/WhoAmI/role requests go through the
/// FormOrgService decorator; form row CRUD hits FakeXrmEasy.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageFormFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private FormOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-form-tests-" + Guid.NewGuid().ToString("N"));
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

        _service = new FormOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeEntityMetadata("account", "Account", "accountid", "name", 1));
        _service.Entities.Add(MakeEntityMetadata("contact", "Contact", "contactid", "fullname", 2));
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageFormTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static string Text(CallToolResult r) => r.GetText();

    private static JsonElement Structured(CallToolResult r) => r.StructuredContent!.Value;

    private string BackupDir(string entity) => Path.Combine(_tempDir, ".devkit", "manage_form", entity);

    // ──────────────────────────────────────────────
    // seed / metadata helpers
    // ──────────────────────────────────────────────

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeEntityMetadata(string logical, string display, string idAttr, string nameAttr, int otc)
    {
        var name = new StringAttributeMetadata { LogicalName = nameAttr, SchemaName = nameAttr, DisplayName = MakeLabel("Name") };
        var meta = new EntityMetadata { LogicalName = logical, SchemaName = display, DisplayName = MakeLabel(display) };
        Set(meta, "PrimaryIdAttribute", idAttr);
        Set(meta, "PrimaryNameAttribute", nameAttr);
        Set(meta, "ObjectTypeCode", otc);
        Set(meta, "Attributes", new AttributeMetadata[] { name });
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private Guid SeedForm(string name, string entity = "account", int type = 2,
        string formXml = ValidFormXml, bool isDefault = false, int activationState = 1, int version = 1)
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("systemform", id)
        {
            ["formid"] = id,
            ["name"] = name,
            ["objecttypecode"] = entity,
            ["type"] = new OptionSetValue(type),
            ["formactivationstate"] = new OptionSetValue(activationState),
            ["isdefault"] = isDefault,
            ["ismanaged"] = false,
            ["version"] = version,
            ["description"] = "seeded form",
            ["formxml"] = formXml
        });
        return id;
    }

    // XSD-valid minimal FormXML (FormXml.xsd: form → tabs(1..) → tab → columns(1..3) → column/sections/section).
    private const string ValidFormXml =
        """
        <form><tabs><tab name="tab_general" id="{D2B7AB0D-AD02-4B3E-9C61-C72D8D9F2A11}" showlabel="true" locklevel="0" expanded="true"><labels><label description="General" languagecode="1033" /></labels><columns><column width="100%"><sections><section name="general_section" id="{1D3C5F62-9A44-4B7F-8E1B-6C7B54B0A331}" showlabel="false" locklevel="0" columns="1" labelwidth="115"><labels><label description="General" languagecode="1033" /></labels><rows /></section></sections></column></columns></tab></tabs></form>
        """;

    // Schema-invalid: <bogus /> is not declared under <form>. Still parseable by XDocument
    // and contains tab_general so manage_tab update ops run, then XSD validation blocks.
    private const string InvalidBaseFormXml =
        """
        <form><bogus /><tabs><tab name="tab_general" id="{D2B7AB0D-AD02-4B3E-9C61-C72D8D9F2A11}" showlabel="true" locklevel="0" expanded="true"><columns><column width="100%"><sections /></column></columns></tab></tabs></form>
        """;

    private const string RestoreFormXml =
        """
        <form><tabs><tab name="tab_restored" id="{3F2A9C61-7B44-4D2E-9A8F-5C6D1E0B7A21}" showlabel="true" locklevel="0" expanded="true"><labels><label description="Restored" languagecode="1033" /></labels><columns><column width="100%"><sections><section name="restored_section" id="{A1B2C3D4-E5F6-4A7B-8C9D-0E1F2A3B4C5D}" showlabel="false" locklevel="0" columns="1" labelwidth="115"><labels><label description="Restored" languagecode="1033" /></labels><rows /></section></sections></column></columns></tab></tabs></form>
        """;

    private const string AddTabOps = """[{"action":"manage_tab","manage_action":"add","label":"New Tab"}]""";

    private const string NoopTabUpdateOps = """[{"action":"manage_tab","manage_action":"update","tab":"tab_general"}]""";

    private const string AddFieldOps =
        """[{"action":"manage_fields","manage_action":"add","tab":"tab_general","section":"general_section","fields":["name"]}]""";

    private const string UnknownFieldOps =
        """[{"action":"manage_fields","manage_action":"add","tab":"tab_general","section":"general_section","fields":["zzz_missing_field"]}]""";

    private static string MakeBackupJson(string formXml, string entity = "account",
        string formName = "Seed Form", Guid? formId = null) =>
        JsonSerializer.Serialize(new Dictionary<string, string>
        {
            ["entity"] = entity,
            ["formId"] = (formId ?? Guid.Empty).ToString(),
            ["formName"] = formName,
            ["timestamp"] = "2026-09-06T00:00:00",
            ["formxml"] = formXml
        });

    // ──────────────────────────────────────────────
    // entry: action/entity resolution/role gate
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task MissingAction_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, action: "", entity_name: "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Error] action is required.");
    }

    [TestMethod]
    public async Task MissingEntityName_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, action: "list", entity_name: " ");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Error] entity_name is required.");
        StringAssert.Contains(Text(result), "Use get_tables to find the entity logical name.");
    }

    [TestMethod]
    public async Task InvalidAction_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, action: "frobnicate", entity_name: "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'frobnicate' is not a valid action.");
        StringAssert.Contains(Text(result), "Valid actions: list, detail, update, rename, undo.");
    }

    [TestMethod]
    public async Task UnknownEntity_ReturnsNotFoundWithError()
    {
        var result = await NewTool().manage_form(null!, action: "list", entity_name: "nosuchentity");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'nosuchentity' was not found by Display Name");
        StringAssert.Contains(Text(result), "Hint: Use get_tables to list entities before calling manage_form.");
    }

    [TestMethod]
    public async Task AmbiguousEntity_ReturnsAmbiguousError()
    {
        _service.Entities.Add(MakeEntityMetadata("new_thing1", "My Account", "new_thing1id", "name", 10001));
        _service.Entities.Add(MakeEntityMetadata("new_thing2", "Your Account", "new_thing2id", "name", 10002));

        var result = await NewTool().manage_form(null!, action: "list", entity_name: "acc");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple candidates match 'acc' during display name search.");
        StringAssert.Contains(Text(result), "Re-call with a more specific entity_name value.");
    }

    [TestMethod]
    public async Task CompositeEntitySyntax_ResolvesToList()
    {
        var result = await NewTool().manage_form(null!, action: "list", entity_name: "Account (account)");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No forms found for 'account'.");
    }

    [TestMethod]
    public async Task Rename_WithoutSysAdminRole_ReturnsGateError()
    {
        _service.Roles.Clear();
        var result = await NewTool().manage_form(null!, action: "rename", entity_name: "account",
            form_id: Guid.NewGuid().ToString(), form_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "This action requires the 'System Administrator' role.");
        StringAssert.Contains(Text(result), "Current roles on the calling user: (no roles assigned)");
        Assert.AreEqual(0, _service.Updates);
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_NoForms_ReturnsZero()
    {
        var result = await NewTool().manage_form(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No forms found for 'account'.");
        Assert.AreEqual(0, Structured(result).GetProperty("totalCount").GetInt32());
    }

    [TestMethod]
    public async Task List_WithForms_ReturnsCount()
    {
        SeedForm("Account Main");
        SeedForm("Account Mobile", type: 5);
        var result = await NewTool().manage_form(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 2 form(s) for 'account'.");
        Assert.AreEqual(2, Structured(result).GetProperty("forms").GetArrayLength());
    }

    [TestMethod]
    public async Task List_DisplayName_ResolvesToLogicalName()
    {
        var result = await NewTool().manage_form(null!, "list", "Account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No forms found for 'account'.");
    }

    [TestMethod]
    public async Task List_IncludeFormXml_AddsFormXmlToEntries()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "list", "account", include_formxml: true);
        Assert.IsFalse(result.IsError == true);
        var first = Structured(result).GetProperty("forms")[0];
        StringAssert.Contains(first.GetProperty("formXml").GetString()!, "<form");
    }

    [TestMethod]
    public async Task List_ExcludeFormXml_OmitsFormXmlFromEntries()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        var first = Structured(result).GetProperty("forms")[0];
        Assert.IsFalse(first.TryGetProperty("formXml", out _));
        Assert.AreEqual("Account Main", first.GetProperty("formName").GetString());
    }

    [TestMethod]
    public async Task List_InvalidFormType_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "list", "account", form_type: 3);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_type=3 is not valid.");
        StringAssert.Contains(Text(result), "Use 0 or omit for all types.");
    }

    [TestMethod]
    public async Task List_TypeFilter_ReturnsOnlyMatchingType()
    {
        SeedForm("Account Main");
        SeedForm("Quick Create Form", type: 7);
        var result = await NewTool().manage_form(null!, "list", "account", form_type: 7);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 1 form(s) for 'account'.");
    }

    [TestMethod]
    public async Task List_NoForms_WithTypeHint()
    {
        var result = await NewTool().manage_form(null!, "list", "contact", form_type: 7);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No forms found for 'contact' with type=7.");
    }

    [TestMethod]
    public async Task List_NameFilter_SingleMatch_AutoDetails()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "list", "account", form_name: "Main");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Account Main'");
        StringAssert.Contains(Text(result), "formxml in structuredContent.");
        Assert.AreEqual(id.ToString(), Structured(result).GetProperty("formId").GetString());
    }

    [TestMethod]
    public async Task List_NameFilter_NoMatch_ReturnsError()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "list", "account", form_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No form found matching 'ghost' for entity 'account'.");
        StringAssert.Contains(Text(result), "Use manage_form with action='list' and entity_name='account' to list all available forms.");
    }

    [TestMethod]
    public async Task List_NameFilter_NoMatch_WithTypeHint()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "list", "account", form_name: "ghost", form_type: 7);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No form found matching 'ghost' for entity 'account' (type=QuickCreate).");
    }

    [TestMethod]
    public async Task List_NameFilter_MultipleMatches_ReturnsCandidates()
    {
        SeedForm("Account Main");
        SeedForm("Account Mobile", type: 5);
        var result = await NewTool().manage_form(null!, "list", "account", form_name: "Account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple forms match 'Account' for 'account'");
        StringAssert.Contains(Text(result), "provide form_id to proceed.");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_NoIdNoName_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "detail", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_id or form_name is required when action='detail'.");
    }

    [TestMethod]
    public async Task Detail_InvalidFormType_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "detail", "account", form_name: "x", form_type: 9);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_type=9 is not valid.");
    }

    [TestMethod]
    public async Task Detail_BadGuid_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "detail", "account", form_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'not-a-guid' is not a valid GUID.");
    }

    [TestMethod]
    public async Task Detail_ById_NotFound_ReturnsError()
    {
        var missingId = Guid.NewGuid();
        var result = await NewTool().manage_form(null!, "detail", "account", form_id: missingId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"No form found with ID '{missingId}'.");
    }

    [TestMethod]
    public async Task Detail_ById_WrongEntity_ReturnsError()
    {
        var id = SeedForm("Contact Form", entity: "contact");
        var result = await NewTool().manage_form(null!, "detail", "account", form_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' belongs to 'contact', not 'account'.");
    }

    [TestMethod]
    public async Task Detail_ById_Found_ReturnsSummaryAndPrettyFormXml()
    {
        var id = SeedForm("Account Main", isDefault: true);
        var result = await NewTool().manage_form(null!, "detail", "account", form_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"'Account Main' ({id}) on 'account' — Main form, active, default, version 1.");
        StringAssert.Contains(Text(result), "formxml in structuredContent.");

        var structured = Structured(result);
        Assert.AreEqual("Main", structured.GetProperty("formTypeName").GetString());
        Assert.AreEqual("success", structured.GetProperty("status").GetString());
        StringAssert.Contains(structured.GetProperty("formXml").GetString()!, "<tab name=\"tab_general\"");
    }

    [TestMethod]
    public async Task Detail_ByName_Found()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "detail", "account", form_name: "Account Main");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Account Main'");
        StringAssert.Contains(Text(result), "formxml in structuredContent.");
    }

    [TestMethod]
    public async Task Detail_ByName_NotFound_ReturnsError()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "detail", "account", form_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No form found matching name 'ghost' for entity 'account'.");
    }

    [TestMethod]
    public async Task Detail_ByName_NotFound_WithTypeHint()
    {
        SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "detail", "account", form_name: "ghost", form_type: 7);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No form found matching name 'ghost' with type 'QuickCreate' for entity 'account'.");
    }

    [TestMethod]
    public async Task Detail_ByName_MultipleMatches_ReturnsCandidates()
    {
        SeedForm("Account Main");
        SeedForm("Account Mobile", type: 5);
        var result = await NewTool().manage_form(null!, "detail", "account", form_name: "Account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple forms match 'Account' for 'account'");
        StringAssert.Contains(Text(result), "provide form_id for detail.");
        StringAssert.Contains(Text(result), "Multiple forms match 'Account' for 'account'");
        StringAssert.Contains(Text(result), "provide form_id for detail.");
    }

    // ──────────────────────────────────────────────
    // update — input validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_MissingFormId_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "update", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_id is required when action='update'.");
    }

    [TestMethod]
    public async Task Update_BadGuid_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "update", "account", form_id: "oops");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'oops' is not a valid GUID.");
    }

    [TestMethod]
    public async Task Update_MissingPayload_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Provide 'operations' (recommended) or 'formxml' for action='update'.");
    }

    [TestMethod]
    public async Task Update_BothPayloads_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account",
            form_id: id.ToString(), formxml: "<form />", operations: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Provide either 'operations' or 'formxml', not both.");
    }

    // ──────────────────────────────────────────────
    // update — via operations JSON
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_Operations_EmptyArray_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "operations must be a non-empty JSON array.");
    }

    [TestMethod]
    public async Task Update_Operations_FormNotFound_ReturnsError()
    {
        var id = Guid.NewGuid();
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' not found.");
    }

    [TestMethod]
    public async Task Update_Operations_WrongEntity_ReturnsError()
    {
        var id = SeedForm("Contact Form", entity: "contact");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' belongs to 'contact', not 'account'.");
    }

    [TestMethod]
    public async Task Update_Operations_EmptyFormXml_ReturnsError()
    {
        var id = SeedForm("Empty Form", formXml: "");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' has empty FormXML.");
    }

    [TestMethod]
    public async Task Update_Operations_MissingActionField_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account",
            form_id: id.ToString(), operations: """[{"nope":1}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "must have an 'action' field.");
    }

    [TestMethod]
    public async Task Update_Operations_UnknownAction_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account",
            form_id: id.ToString(), operations: """[{"action":"manage_bogus"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unknown action 'manage_bogus'");
    }

    [TestMethod]
    public async Task Update_Operations_UnknownField_ReturnsBuildError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: UnknownFieldOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[BuildFormXML] ERROR");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Update_Operations_AddTab_Succeeds()
    {
        var id = SeedForm("Seed Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated form 'Seed Form'");
        StringAssert.Contains(Text(result), "1 operation(s)");
        StringAssert.Contains(Text(result), "published. Backup saved.");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
        Assert.IsTrue(Directory.Exists(BackupDir("account")));
        Assert.IsTrue(Directory.GetFiles(BackupDir("account"), "*.formxml.json").Length >= 1);

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        StringAssert.Contains(updated.GetAttributeValue<string>("formxml"), "tab_new_tab");
    }

    [TestMethod]
    public async Task Update_Operations_AddFields_ResolvesField()
    {
        var id = SeedForm("Field Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddFieldOps);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated form 'Field Form'");
        StringAssert.Contains(Text(result), "1 field(s) resolved.");
        Assert.AreEqual(1, _service.Updates);

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        StringAssert.Contains(updated.GetAttributeValue<string>("formxml"), "datafieldname=\"name\"");
    }

    [TestMethod]
    public async Task Update_Operations_DryRun_NoMutationNoBackup()
    {
        var id = SeedForm("Dry Form");
        var result = await NewTool(dryRun: true).manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun] Would UPDATE FormXML (operations) for form 'Dry Form'");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
        Assert.IsFalse(Directory.Exists(Path.Combine(_tempDir, ".devkit")));
    }

    [TestMethod]
    public async Task Update_Operations_InvalidBaseFormXml_ValidationBlocked()
    {
        var id = SeedForm("Bad Base Form", formXml: InvalidBaseFormXml);
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: NoopTabUpdateOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "FormXML validation failed for form 'Bad Base Form'");
        StringAssert.Contains(Text(result), "blocked_validation");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_Operations_PublishFails_ReturnsPartial()
    {
        _service.FailPublish = true;
        var id = SeedForm("Seed Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: AddTabOps);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Partial] Updated form 'Seed Form'");
        StringAssert.Contains(Text(result), "but publish failed");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
        Assert.IsTrue(Directory.Exists(BackupDir("account")));
    }

    // ──────────────────────────────────────────────
    // update — via raw FormXML
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_FormXml_FileNotFound_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var missingPath = Path.Combine(_tempDir, "missing.formxml");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: missingPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"FormXML file not found at '{missingPath}'.");
    }

    [TestMethod]
    public async Task Update_FormXml_InlineWithDeclaration_Succeeds()
    {
        var id = SeedForm("Seed Form");
        var declared = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + ValidFormXml;
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: declared);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated form 'Seed Form'");
        StringAssert.Contains(Text(result), "raw FormXML import");
        StringAssert.Contains(Text(result), "published. Backup saved.");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        Assert.AreEqual(ValidFormXml, updated.GetAttributeValue<string>("formxml"));
    }

    [TestMethod]
    public async Task Update_FormXml_File_ReadThenDeleted()
    {
        var id = SeedForm("Seed Form");
        var filePath = Path.Combine(_tempDir, "exported.formxml");
        await File.WriteAllTextAsync(filePath, RestoreFormXml);
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: filePath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated form 'Seed Form'");
        Assert.IsFalse(File.Exists(filePath), "bare .formxml temp files are deleted after read");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        StringAssert.Contains(updated.GetAttributeValue<string>("formxml"), "tab_restored");
    }

    [TestMethod]
    public async Task Update_FormXml_BackupEnvelope_ResolvesFormXmlField()
    {
        var id = SeedForm("Seed Form");
        var envelopePath = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(envelopePath, MakeBackupJson(RestoreFormXml, formId: id));
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: envelopePath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated form 'Seed Form'");
        Assert.IsTrue(File.Exists(envelopePath), "backup envelope files are intentionally kept");
        Assert.AreEqual(1, _service.Updates);

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        StringAssert.Contains(updated.GetAttributeValue<string>("formxml"), "tab_restored");
    }

    [TestMethod]
    public async Task Update_FormXml_DryRun_NoMutationKeepsFile()
    {
        var id = SeedForm("Seed Form");
        var filePath = Path.Combine(_tempDir, "exported.formxml");
        await File.WriteAllTextAsync(filePath, RestoreFormXml);
        var result = await NewTool(dryRun: true).manage_form(null!, "update", "account", form_id: id.ToString(), formxml: filePath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun] Would UPDATE FormXML for form 'Seed Form'");
        Assert.IsTrue(File.Exists(filePath), "dry-run must not delete the source file");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_FormXml_InvalidXml_ValidationBlocked()
    {
        var id = SeedForm("Seed Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: InvalidBaseFormXml);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "FormXML validation failed for form 'Seed Form'");
        StringAssert.Contains(Text(result), "blocked_validation");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_FormXml_NotXml_ValidationBlockedWithParseError()
    {
        var id = SeedForm("Seed Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: "hello world");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "FormXML validation failed for form 'Seed Form'");
        StringAssert.Contains(Text(result), "XML Parsing Error");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Update_FormXml_PublishFails_ReturnsPartial()
    {
        _service.FailPublish = true;
        var id = SeedForm("Seed Form");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), formxml: RestoreFormXml);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Partial] Updated form 'Seed Form'");
        StringAssert.Contains(Text(result), "but publish failed");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    // ──────────────────────────────────────────────
    // rename
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Rename_MissingFormId_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "rename", "account", form_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_id is required when action='rename'.");
    }

    [TestMethod]
    public async Task Rename_BadGuid_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: "oops", form_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'oops' is not a valid GUID.");
    }

    [TestMethod]
    public async Task Rename_MissingNewName_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_name is required when action='rename'.");
    }

    [TestMethod]
    public async Task Rename_FormNotFound_ReturnsError()
    {
        var id = Guid.NewGuid();
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' not found.");
    }

    [TestMethod]
    public async Task Rename_WrongEntity_ReturnsError()
    {
        var id = SeedForm("Contact Form", entity: "contact");
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' belongs to 'contact', not 'account'.");
    }

    [TestMethod]
    public async Task Rename_DuplicateName_ReturnsError()
    {
        SeedForm("Alpha Form");
        var id = SeedForm("Beta Form");
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "Alpha Form");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "A form named 'Alpha Form' already exists on 'account' (FormId");
        StringAssert.Contains(Text(result), "Choose a different name.");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Rename_Success_UpdatesAndPublishes()
    {
        var id = SeedForm("Beta Form");
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "Gamma Form");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Renamed form 'Beta Form' → 'Gamma Form'");
        StringAssert.Contains(Text(result), "published. Backup saved.");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
        Assert.IsTrue(Directory.Exists(BackupDir("account")));

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        Assert.AreEqual("Gamma Form", updated.GetAttributeValue<string>("name"));
    }

    [TestMethod]
    public async Task Rename_DryRun_NoMutation()
    {
        var id = SeedForm("Beta Form");
        var result = await NewTool(dryRun: true).manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "Gamma Form");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun] Would RENAME form 'Beta Form' to 'Gamma Form'");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
        Assert.IsFalse(Directory.Exists(Path.Combine(_tempDir, ".devkit")));
    }

    [TestMethod]
    public async Task Rename_PublishFails_ReturnsPartial()
    {
        _service.FailPublish = true;
        var id = SeedForm("Beta Form");
        var result = await NewTool().manage_form(null!, "rename", "account", form_id: id.ToString(), form_name: "Gamma Form");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Partial] Renamed form 'Beta Form' → 'Gamma Form'");
        StringAssert.Contains(Text(result), "but publish failed");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    // ──────────────────────────────────────────────
    // undo
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_MissingFormId_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "undo", "account", formxml: "whatever.formxml.json");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "form_id is required when action='undo'.");
    }

    [TestMethod]
    public async Task Undo_MissingBackupPath_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "formxml (backup file path) is required when action='undo'.");
    }

    [TestMethod]
    public async Task Undo_BadGuid_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: "oops", formxml: "whatever.formxml.json");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'oops' is not a valid GUID.");
    }

    [TestMethod]
    public async Task Undo_FileNotFound_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var missingPath = Path.Combine(_tempDir, "missing.formxml.json");
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: missingPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Backup file not found at '{missingPath}'.");
    }

    [TestMethod]
    public async Task Undo_EmptyBackupJson_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var path = Path.Combine(_tempDir, "null.formxml.json");
        await File.WriteAllTextAsync(path, "null");
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Backup file '{path}' is empty or invalid.");
    }

    [TestMethod]
    public async Task Undo_BackupWithoutFormXml_ReturnsError()
    {
        var id = SeedForm("Account Main");
        var path = Path.Combine(_tempDir, "nofield.formxml.json");
        await File.WriteAllTextAsync(path, """{"entity":"account","formName":"Seed Form"}""");
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "is empty or invalid.");
    }

    [TestMethod]
    public async Task Undo_FormNotFound_ReturnsError()
    {
        var id = Guid.NewGuid();
        var path = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(ValidFormXml, formId: id));
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' not found.");
    }

    [TestMethod]
    public async Task Undo_WrongEntity_ReturnsError()
    {
        var id = SeedForm("Contact Form", entity: "contact");
        var path = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(ValidFormXml, formId: id));
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Form '{id}' belongs to 'contact', not 'account'.");
    }

    [TestMethod]
    public async Task Undo_CorruptedBackup_ValidationBlocked()
    {
        var id = SeedForm("Seed Form");
        var path = Path.Combine(_tempDir, "corrupt.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson("<form><oops /><tabs /></form>", formId: id));
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Backup file failed FormXML validation for form 'Seed Form'");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public async Task Undo_Success_RestoresFormXml()
    {
        var id = SeedForm("Seed Form");
        var path = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(RestoreFormXml, formId: id));
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), $"Restored form 'Seed Form' ({id}) on 'account' from '{path}'");
        StringAssert.Contains(Text(result), ", validated, published");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
        Assert.AreEqual(path, Structured(result).GetProperty("restoredFromBackup").GetString());

        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet(true));
        StringAssert.Contains(updated.GetAttributeValue<string>("formxml"), "tab_restored");
    }

    [TestMethod]
    public async Task Undo_DryRun_NoMutation()
    {
        var id = SeedForm("Seed Form");
        var path = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(RestoreFormXml, formId: id));
        var result = await NewTool(dryRun: true).manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun] Would RESTORE form 'Seed Form'");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Undo_PublishFails_ReturnsPartial()
    {
        _service.FailPublish = true;
        var id = SeedForm("Seed Form");
        var path = Path.Combine(_tempDir, "backup.formxml.json");
        await File.WriteAllTextAsync(path, MakeBackupJson(RestoreFormXml, formId: id));
        var result = await NewTool().manage_form(null!, "undo", "account", form_id: id.ToString(), formxml: path);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Partial] Restored form 'Seed Form'");
        StringAssert.Contains(Text(result), "but publish failed");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
        Assert.AreEqual(path, Structured(result).GetProperty("restoredFromBackup").GetString());
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    private sealed class FormOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();

        /// <summary>Roles returned for the RoleGateHelper FetchExpression (entity name='role').</summary>
        public readonly List<string> Roles = new() { "System Administrator" };

        /// <summary>When true, PublishXmlRequest throws so PublishHelper returns false.</summary>
        public bool FailPublish;

        public int Creates;
        public int Updates;
        public int Publishes;

        public FormOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            return _inner.Create(entity);
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is PublishXmlRequest)
            {
                if (FailPublish) throw new InvalidOperationException("Simulated publish failure (FailPublish).");
                Publishes++;
                return new OrganizationResponse();
            }
            if (request is RetrieveAllEntitiesRequest)
            {
                var resp = new RetrieveAllEntitiesResponse();
                resp.Results["EntityMetadata"] = Entities.ToArray();
                return resp;
            }
            if (request is RetrieveEntityRequest retrieveEntity)
            {
                var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                var resp = new RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                return resp;
            }
            if (request is WhoAmIRequest)
            {
                var resp = new WhoAmIResponse();
                resp.Results["UserId"] = Guid.NewGuid();
                return resp;
            }
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fetch && fetch.Query.Contains("name='role'"))
            {
                var rows = new EntityCollection();
                foreach (var role in Roles)
                    rows.Entities.Add(new Entity("role", Guid.NewGuid()) { ["name"] = role });
                return rows;
            }
            return _inner.RetrieveMultiple(query);
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
