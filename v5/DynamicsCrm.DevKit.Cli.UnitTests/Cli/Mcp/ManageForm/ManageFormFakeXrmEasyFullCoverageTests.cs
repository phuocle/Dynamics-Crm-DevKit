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
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.Schema;

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
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
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

    private void SeedNavigationMetadata()
    {
        var account = _service.Entities.Single(entity => entity.LogicalName == "account");
        _service.Entities.Add(new EntityMetadata
        {
            LogicalName = "employee", DisplayName = MakeLabel("Employee"), DisplayCollectionName = MakeLabel("Employees")
        });
        account.IsAuditEnabled = new BooleanManagedProperty(true);
        account.IsDocumentManagementEnabled = true;
        Set(account, nameof(EntityMetadata.OneToManyRelationships), new[]
        {
            Relationship("account_employees", "employee", "employerid", AssociatedMenuBehavior.UseCollectionName, 120),
            Relationship("account_connection1", "connection", "record1id", AssociatedMenuBehavior.UseCollectionName, 8500),
            Relationship("account_hidden", "contact", "hiddenid", AssociatedMenuBehavior.DoNotDisplay, 50),
            Relationship("Account_AsyncOperations", "asyncoperation", "regardingobjectid", AssociatedMenuBehavior.DoNotDisplay, null),
            Relationship("Account_ProcessSessions", "processsession", "regardingobjectid", AssociatedMenuBehavior.DoNotDisplay, null)
        });
        Set(account, nameof(EntityMetadata.ManyToManyRelationships), new[]
        {
            new ManyToManyRelationshipMetadata
            {
                SchemaName = "account_skills", Entity1LogicalName = "skill", Entity2LogicalName = "account",
                Entity1AssociatedMenuConfiguration = new AssociatedMenuConfiguration { Behavior = AssociatedMenuBehavior.DoNotDisplay },
                Entity2AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                {
                    Behavior = AssociatedMenuBehavior.UseLabel, Group = AssociatedMenuGroup.Marketing, Order = 210,
                    Label = MakeLabel("Skills")
                }
            }
        });

        static OneToManyRelationshipMetadata Relationship(string name, string table, string column, AssociatedMenuBehavior behavior, int? order) =>
            new()
            {
                SchemaName = name, ReferencedEntity = "account", ReferencingEntity = table, ReferencingAttribute = column,
                AssociatedMenuConfiguration = new AssociatedMenuConfiguration
                {
                    Behavior = behavior, Group = AssociatedMenuGroup.Details, Order = order
                }
            };
    }

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
        var result = await NewTool().manage_form(null!, action: "list", entity_name: " ", form_type: 2);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "[Error] entity_name is required.");
        StringAssert.Contains(Text(result), "Use inspect_metadata(resource='tables') to find the entity logical name.");
    }

    [TestMethod]
    public async Task InvalidAction_ReturnsError()
    {
        var result = await NewTool().manage_form(null!, action: "frobnicate", entity_name: "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'frobnicate' is not a valid action.");
        StringAssert.Contains(Text(result), "Valid actions: list, detail, create, update, rename, undo, navigation_list.");
    }

    [TestMethod]
    public async Task UnknownEntity_ReturnsNotFoundWithError()
    {
        var result = await NewTool().manage_form(null!, action: "list", entity_name: "nosuchentity");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'nosuchentity' was not found by Display Name");
        StringAssert.Contains(Text(result), "Hint: Use inspect_metadata(resource='tables') to list entities before calling manage_form.");
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
    [DataRow(7, "QuickCreate")]
    [DataRow(11, "Card")]
    [DataRow(12, "MainInteractive")]
    public async Task ListAndDetail_ReturnMatchingFormType(int formType, string formTypeName)
    {
        SeedForm("Account Main");
        var id = SeedForm($"Account {formTypeName}", type: formType);
        var tool = NewTool();

        var result = await tool.manage_form(null!, "list", "account", form_type: formType);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Found 1 form(s) for 'account'.");
        Assert.AreEqual(formTypeName, Structured(result).GetProperty("forms")[0].GetProperty("formTypeName").GetString());

        var detail = await tool.manage_form(null!, "detail", "account", form_id: id.ToString());
        Assert.IsFalse(detail.IsError == true);
        Assert.AreEqual(formTypeName, Structured(detail).GetProperty("formTypeName").GetString());
    }

    [TestMethod]
    public async Task List_NoForms_WithTypeHint()
    {
        var result = await NewTool().manage_form(null!, "list", "contact", form_type: 7);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No forms found for 'contact' with type=7.");
    }

    [TestMethod]
    public async Task List_Dashboards_FiltersByNameAndOptionallyIncludesFormXml()
    {
        var sales = SeedForm("Sales Overview", entity: "none", type: 0);
        var service = SeedForm("Service Overview", entity: null!, type: 0, activationState: 0);
        SeedForm("Sales Activity", entity: "none", type: 10);
        SeedForm("Sales Account Form");
        SeedForm("Sales Entity Dashboard", type: 0);
        var tool = NewTool();

        var all = await tool.manage_form(null!, "list", form_type: 0);
        Assert.IsFalse(all.IsError == true, Text(all));
        var allForms = Structured(all).GetProperty("forms");
        Assert.AreEqual(2, allForms.GetArrayLength());
        Assert.AreEqual(sales.ToString(), allForms[0].GetProperty("formId").GetString());
        Assert.AreEqual(service.ToString(), allForms[1].GetProperty("formId").GetString());
        Assert.IsFalse(allForms[0].TryGetProperty("formXml", out _));

        var filtered = await tool.manage_form(null!, "list", entity_name: " ", form_type: 0,
            form_name: "Sales", include_formxml: true);
        Assert.IsFalse(filtered.IsError == true, Text(filtered));
        var data = Structured(filtered);
        Assert.AreEqual("list", data.GetProperty("action").GetString());
        Assert.AreEqual(1, data.GetProperty("totalCount").GetInt32());
        var row = data.GetProperty("forms")[0];
        Assert.AreEqual(sales.ToString(), row.GetProperty("formId").GetString());
        Assert.AreEqual(0, row.GetProperty("formType").GetInt32());
        Assert.AreEqual(ValidFormXml, row.GetProperty("formXml").GetString());

        var empty = await tool.manage_form(null!, "list", form_type: 0, form_name: "No Match");
        Assert.IsFalse(empty.IsError == true, Text(empty));
        Assert.AreEqual(0, Structured(empty).GetProperty("totalCount").GetInt32());
    }

    [TestMethod]
    public async Task Detail_DashboardName_ResolvesUniqueMatchOrReturnsCandidates()
    {
        var sales = SeedForm("Sales Overview", entity: "none", type: 0);
        var service = SeedForm("Service Overview", entity: "none", type: 0);
        SeedForm("Sales Account Overview");
        var tool = NewTool();

        var unique = await tool.manage_form(null!, "detail", form_type: 0, form_name: "Sales");
        Assert.IsFalse(unique.IsError == true, Text(unique));
        var detail = Structured(unique);
        Assert.AreEqual("detail", detail.GetProperty("action").GetString());
        Assert.AreEqual(sales.ToString(), detail.GetProperty("formId").GetString());
        StringAssert.Contains(detail.GetProperty("formXml").GetString()!, "<form>");

        var ambiguous = await tool.manage_form(null!, "detail", form_type: 0, form_name: "Overview");
        Assert.IsTrue(ambiguous.IsError == true);
        StringAssert.Contains(Text(ambiguous), "Multiple system dashboards match 'Overview'");
        var candidates = Structured(ambiguous).GetProperty("details").GetProperty("forms");
        CollectionAssert.AreEquivalent(new[] { sales.ToString(), service.ToString() },
            candidates.EnumerateArray().Select(row => row.GetProperty("formId").GetString()).ToArray());

        var missing = await tool.manage_form(null!, "detail", form_type: 0, form_name: "No Match");
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(Text(missing), "No system dashboard found matching name 'No Match'.");
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
    // create — Quick Create forms
    // ──────────────────────────────────────────────

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task Create_QuickCreate_ValidatesAndPreservesSourceFile(bool dryRun)
    {
        var sourcePath = Path.Combine(_tempDir, "source.formxml");
        await File.WriteAllTextAsync(sourcePath, ValidFormXml);
        SeedForm("New Form", type: 2);

        var result = await NewTool(dryRun).manage_form(null!, "create", "Account", form_name: " New Form ",
            form_type: 7, formxml: sourcePath);

        Assert.IsFalse(result.IsError == true);
        var data = Structured(result);
        Assert.AreEqual(dryRun ? "not_executed" : "created", data.GetProperty("status").GetString());
        Assert.IsTrue(data.GetProperty("validated").GetBoolean());
        Assert.AreEqual(dryRun ? 0 : 1, _service.Creates);
        Assert.AreEqual(dryRun ? 0 : 1, _service.Publishes);
        Assert.AreEqual(ValidFormXml, await File.ReadAllTextAsync(sourcePath));

        if (!dryRun)
        {
            var id = Guid.Parse(data.GetProperty("formId").GetString()!);
            var form = _service.Retrieve("systemform", id, new ColumnSet(true));
            Assert.AreEqual("account", form.GetAttributeValue<string>("objecttypecode"));
            Assert.AreEqual("New Form", form.GetAttributeValue<string>("name"));
            Assert.AreEqual(7, form.GetAttributeValue<OptionSetValue>("type").Value);
            Assert.AreEqual(1, form.GetAttributeValue<OptionSetValue>("formactivationstate").Value);
            Assert.AreEqual(ValidFormXml, form.GetAttributeValue<string>("formxml"));
        }
    }

    [TestMethod]
    [DataRow(2, "<form />", "requires form_type=7")]
    [DataRow(7, "<not-form />", "must have a <form> root element")]
    [DataRow(7, "<form>", "XML Parsing Error")]
    public async Task Create_InvalidTypeOrXml_DoesNotWrite(int formType, string xml, string expectedError)
    {
        var result = await NewTool().manage_form(null!, "create", "account", form_name: "New Form",
            form_type: formType, formxml: xml);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), expectedError);
        Assert.AreEqual(0, _service.Creates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task CreateDashboard_ValidatesAddsToSolutionAndPublishesById(bool dryRun)
    {
        SeedDashboardSolution();
        SeedForm("Sales Overview", type: 7);
        var result = await NewTool(dryRun).manage_form(null!, "create", form_name: " Sales Overview ",
            form_type: 0, formxml: ValidFormXml, solution_name: "Dashboard Solution");

        Assert.IsFalse(result.IsError == true, Text(result));
        var data = Structured(result);
        Assert.AreEqual(dryRun ? "not_executed" : "created", data.GetProperty("status").GetString());
        Assert.AreEqual(0, data.GetProperty("formType").GetInt32());
        Assert.AreEqual("Dashboard", data.GetProperty("formTypeName").GetString());
        Assert.AreEqual("dashboards_solution", data.GetProperty("solutionName").GetString());
        Assert.IsTrue(data.GetProperty("validated").GetBoolean());
        Assert.AreEqual(!dryRun, data.GetProperty("published").GetBoolean());
        Assert.AreEqual(dryRun ? 0 : 1, _service.Creates);
        if (dryRun)
        {
            Assert.IsEmpty(_service.SolutionRequests);
            Assert.IsEmpty(_service.PublishRequests);
            return;
        }

        var id = Guid.Parse(data.GetProperty("formId").GetString()!);
        var dashboard = _service.Retrieve("systemform", id, new ColumnSet(true));
        Assert.IsNull(dashboard.GetAttributeValue<string>("objecttypecode"));
        Assert.AreEqual(0, dashboard.GetAttributeValue<OptionSetValue>("type").Value);
        Assert.AreEqual("Sales Overview", dashboard.GetAttributeValue<string>("name"));
        Assert.AreEqual(ValidFormXml, dashboard.GetAttributeValue<string>("formxml"));
        Assert.IsTrue(data.GetProperty("isAddToSolution").GetBoolean());
        var added = _service.SolutionRequests.Single();
        Assert.AreEqual(id, added.ComponentId);
        Assert.AreEqual(60, added.ComponentType);
        Assert.AreEqual("dashboards_solution", added.SolutionUniqueName);
        StringAssert.Contains(_service.PublishRequests.Single(), $"<dashboards><dashboard>{id:D}</dashboard></dashboards>");
    }

    [TestMethod]
    [DataRow("<not-form />", "must have a <form> root element")]
    [DataRow("<form>", "XML Parsing Error")]
    [DataRow("<form><tabs /></form>", "incomplete content")]
    public async Task CreateDashboard_InvalidXmlBlocksAllWrites(string xml, string expectedError)
    {
        var result = await NewTool().manage_form(null!, "create", form_name: "Sales Overview", formxml: xml);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), expectedError);
        Assert.AreEqual("blocked_validation", Structured(result).GetProperty("details").GetProperty("status").GetString());
        Assert.AreEqual(0, _service.Creates);
        Assert.IsEmpty(_service.PublishRequests);
        Assert.IsEmpty(_service.SolutionRequests);
    }

    [TestMethod]
    [DataRow(true, false, "created_publish_failed")]
    [DataRow(false, true, "created_solution_failed")]
    public async Task CreateDashboard_PartialFailureReturnsIdAndRetryDetectsDuplicate(
        bool failPublish, bool failSolution, string status)
    {
        SeedDashboardSolution();
        _service.FailPublish = failPublish;
        _service.FailSolution = failSolution;
        var tool = NewTool();
        var first = await tool.manage_form(null!, "create", form_name: "Sales Overview",
            formxml: ValidFormXml, solution_name: "dashboards_solution");
        var data = Structured(first);
        Assert.AreEqual(status, data.GetProperty("status").GetString());
        Assert.AreEqual(!failPublish, data.GetProperty("published").GetBoolean());
        Assert.AreEqual(!failSolution, data.GetProperty("isAddToSolution").GetBoolean());
        if (failSolution)
            StringAssert.Contains(data.GetProperty("solutionWarning").GetString(), "Simulated solution failure");

        var retry = await tool.manage_form(null!, "create", form_name: "Sales Overview", formxml: ValidFormXml);
        var duplicate = Structured(retry).GetProperty("details");
        Assert.AreEqual("already_exists", duplicate.GetProperty("status").GetString());
        Assert.AreEqual(data.GetProperty("formId").GetString(), duplicate.GetProperty("formId").GetString());
        Assert.AreEqual(1, _service.Creates);
    }

    [TestMethod]
    public async Task UpdateDashboard_BackupDetailAndUndoUseDashboardScope()
    {
        SeedDashboardSolution();
        var id = SeedForm("Sales Overview", entity: null!, type: 0);
        var tool = NewTool();
        var preview = await NewTool(dryRun: true).manage_form(null!, "update", form_id: id.ToString(),
            formxml: RestoreFormXml);
        Assert.AreEqual("not_executed", Structured(preview).GetProperty("status").GetString());
        Assert.AreEqual(0, _service.Updates);
        Assert.IsFalse(Directory.Exists(BackupDir("dashboard")));

        var update = await tool.manage_form(null!, "update", form_id: id.ToString(),
            formxml: RestoreFormXml, solution_name: "dashboards_solution");
        Assert.IsFalse(update.IsError == true, Text(update));
        var data = Structured(update);
        Assert.AreEqual("updated", data.GetProperty("status").GetString());
        Assert.IsTrue(data.GetProperty("published").GetBoolean());
        Assert.AreEqual(id, _service.SolutionRequests.Single().ComponentId);
        var backupPath = data.GetProperty("backupPath").GetString()!;
        Assert.AreEqual(BackupDir("dashboard"), Path.GetDirectoryName(backupPath));
        Assert.IsTrue(File.Exists(backupPath));

        var detail = await tool.manage_form(null!, "detail", form_id: id.ToString());
        Assert.AreEqual("Dashboard", Structured(detail).GetProperty("formTypeName").GetString());
        StringAssert.Contains(Structured(detail).GetProperty("formXml").GetString(), "tab_restored");

        var undo = await tool.manage_form(null!, "undo", form_id: id.ToString(), formxml: backupPath);
        Assert.IsTrue(Structured(undo).GetProperty("published").GetBoolean(), Text(undo));
        Assert.AreEqual(ValidFormXml, _service.Retrieve("systemform", id, new ColumnSet("formxml")).GetAttributeValue<string>("formxml"));
        Assert.AreEqual(2, _service.Updates);
        Assert.HasCount(2, _service.PublishRequests);
        Assert.IsTrue(_service.PublishRequests.All(xml => xml.Contains($"<dashboards><dashboard>{id:D}</dashboard></dashboards>")));
    }

    [TestMethod]
    public async Task UpdateDashboard_RejectsEntityFormsOperationsAndBadXml()
    {
        var formId = SeedForm("Account Main");
        var dashboardId = SeedForm("Sales Overview", entity: null!, type: 0);
        var tool = NewTool();
        var wrongType = await tool.manage_form(null!, "update", form_id: formId.ToString(), formxml: ValidFormXml);
        StringAssert.Contains(Text(wrongType), "is not a system dashboard");
        var operations = await tool.manage_form(null!, "update", form_id: dashboardId.ToString(), operations: AddTabOps);
        StringAssert.Contains(Text(operations), "dashboard update requires formxml");
        var invalid = await tool.manage_form(null!, "update", form_id: dashboardId.ToString(), formxml: "<not-form />");
        Assert.AreEqual("blocked_validation", Structured(invalid).GetProperty("details").GetProperty("status").GetString());
        Assert.AreEqual(0, _service.Updates);
        Assert.IsEmpty(_service.PublishRequests);
        Assert.IsFalse(Directory.Exists(BackupDir("dashboard")));
    }

    [TestMethod]
    [DataRow("create", false)]
    [DataRow("update", false)]
    [DataRow("operations", false)]
    [DataRow("rename", false)]
    [DataRow("undo", false)]
    [DataRow("operations", true)]
    public async Task EntityFormMutation_WithSolution_AssociatesSystemForm(string scenario, bool dryRun)
    {
        SeedDashboardSolution();
        var id = scenario == "create" ? Guid.Empty : SeedForm("Account Form");
        string formxml = scenario is "create" or "update" ? RestoreFormXml : "";
        if (scenario == "undo")
        {
            formxml = Path.Combine(_tempDir, "solution-form-backup.json");
            await File.WriteAllTextAsync(formxml, MakeBackupJson(RestoreFormXml, formId: id));
        }

        var result = await NewTool(dryRun).manage_form(null!, scenario == "operations" ? "update" : scenario,
            "account", form_id: id == Guid.Empty ? "" : id.ToString(), form_name: "Account Form Updated",
            form_type: 7, formxml: formxml, operations: scenario == "operations" ? AddTabOps : "",
            solution_name: "Dashboard Solution");

        Assert.IsFalse(result.IsError == true, Text(result));
        var data = Structured(result);
        Assert.AreEqual("dashboards_solution", data.GetProperty("solutionName").GetString());
        if (dryRun)
        {
            Assert.AreEqual("not_executed", data.GetProperty("status").GetString());
            Assert.HasCount(0, _service.SolutionRequests);
            Assert.AreEqual(0, _service.Updates);
            return;
        }

        var request = _service.SolutionRequests.Single();
        var formId = Guid.Parse(data.GetProperty("formId").GetString()!);
        Assert.AreEqual(60, request.ComponentType);
        Assert.AreEqual(formId, request.ComponentId);
        if (id != Guid.Empty)
            Assert.AreEqual(id, request.ComponentId);
        Assert.AreEqual("dashboards_solution", request.SolutionUniqueName);
        Assert.IsTrue(data.GetProperty("isAddToSolution").GetBoolean());
    }

    private void SeedDashboardSolution()
    {
        var orgService = _ctx.GetOrganizationService();
        var publisher = orgService.Create(new Entity("publisher") { ["customizationprefix"] = "ab" });
        orgService.Create(new Entity("solution")
        {
            ["publisherid"] = new EntityReference("publisher", publisher),
            ["friendlyname"] = "Dashboard Solution",
            ["uniquename"] = "dashboards_solution"
        });
    }

    [TestMethod]
    public async Task Create_WithoutSysAdminRole_DoesNotWrite()
    {
        _service.Roles.Clear();
        var result = await NewTool().manage_form(null!, "create", "account", form_name: "New Form",
            form_type: 7, formxml: ValidFormXml);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "requires the 'System Administrator' role");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public async Task Create_PublishFails_ReturnsCreatedIdAndRetryDoesNotCreateAgain()
    {
        _service.FailPublish = true;
        var tool = NewTool();
        var first = await tool.manage_form(null!, "create", "account", form_name: "New Form",
            form_type: 7, formxml: ValidFormXml);
        Assert.IsTrue(first.IsError == true);
        var data = Structured(first);
        Assert.AreEqual("created_publish_failed", data.GetProperty("status").GetString());
        var id = data.GetProperty("formId").GetString();
        Assert.IsTrue(Guid.TryParse(id, out _));

        var retry = await tool.manage_form(null!, "create", "account", form_name: "New Form",
            form_type: 7, formxml: ValidFormXml);
        Assert.IsTrue(retry.IsError == true);
        StringAssert.Contains(Text(retry), id!);
        Assert.AreEqual(1, _service.Creates);
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
    public async Task Update_Operations_UnsupportedFieldProperty_BlocksEntireBatch()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: """
            [
              {"action":"manage_fields","manage_action":"add","tab":"tab_general","section":"general_section","fields":["name"]},
              {"action":"manage_fields","manage_action":"update","fields":[{"field":"name","show_lable":false}]}
            ]
            """);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "unsupported properties: show_lable");
        StringAssert.Contains(Text(result), "Supported keys:");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_Operations_FieldAndSectionProperties_AreSavedAndPublished()
    {
        var id = SeedForm("Account Main");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: """
            [
              {"action":"manage_section","manage_action":"add","tab":"tab_general","name":"details","label":"Details",
               "columns":2,"show_label":false,"fields":["name"]},
              {"action":"manage_fields","manage_action":"update","tab":"tab_general","section":"details",
               "fields":[{"field":"name","show_label":false}]}
            ]
            """);

        Assert.IsFalse(result.IsError == true, Text(result));
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(1, _service.Publishes);
        var saved = _service.Retrieve("systemform", id, new ColumnSet("formxml"));
        var section = XDocument.Parse(saved.GetAttributeValue<string>("formxml")).Descendants("section")
            .Single(element => (string?)element.Attribute("name") == "details");
        Assert.AreEqual("11", section.Attribute("columns")?.Value);
        Assert.AreEqual("false", section.Attribute("showlabel")?.Value);
        var cell = section.Descendants("cell").Single(element => element.Element("control") != null);
        Assert.AreEqual("false", cell.Attribute("showlabel")?.Value);
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
    public async Task NavigationList_MergesMetadataSystemItemsAndFormOverrides()
    {
        SeedNavigationMetadata();
        _service.Roles.Clear();
        var id = SeedForm("Related", formXml: ValidFormXml.Replace("</form>", """
            <Navigation><NavBar>
              <NavBarByRelationshipItem Id="navEmployees" RelationshipName="account_employees" Area="Sales" Sequence="35" Show="false">
                <Titles><Title LCID="1033" Text="Staff" /></Titles>
              </NavBarByRelationshipItem>
              <NavBarByRelationshipItem Id="navAudit" RelationshipName="hardcoded_{B7196B13-6B9D-42CD-BD58-B19A3953126F}navAudit" Show="false" />
              <NavBarItem Id="navSupport" Icon="support.png" Url="/support" Area="Info" Sequence="42">
                <Titles><Title LCID="1033" Text="Support" /></Titles>
              </NavBarItem>
            </NavBar></Navigation></form>
            """));

        var entries = await ReadNavigation(id);
        Assert.HasCount(8, entries);
        Assert.IsFalse(entries.ContainsKey("nav_account_employees"));
        Assert.IsFalse(entries.ContainsKey("nav_account_hidden"));
        AssertNavigation(entries["navEmployees"], "relationship", "account_employees", "Staff", "Sales", 35, false);
        AssertNavigation(entries["navConnections"], "relationship", "account_connection1", "Connections", "Info", 8500, true);
        AssertNavigation(entries["nav_account_skills"], "relationship", "account_skills", "Skills", "Marketing", 210, true);
        AssertNavigation(entries["navAudit"], "system", null, "Audit History", "Info", 9600, false);
        AssertNavigation(entries["navAsyncOperations"], "system", null, "Background Processes", "ProcessCenter", 9500, true);
        AssertNavigation(entries["navProcessSessions"], "system", null, "Dialog Sessions", "ProcessCenter", 9700, true);
        AssertNavigation(entries["navSPDocuments"], "system", null, "Documents", "Info", null, true);
        AssertNavigation(entries["navSupport"], "system", null, "Support", "Info", 42, true);
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_Operations_Navigation_HidesAndShowsRelationshipsAndSystemItems()
    {
        SeedNavigationMetadata();
        var id = SeedForm("Related");
        const string hide = """
            [{"action":"manage_navigation","manage_action":"hide","items":[
                {"relationship_name":"account_employees"},{"nav_id":"navConnections"},
                {"nav_id":"navaudit"},{"nav_id":"navAsyncOperations"},{"nav_id":"navProcessSessions"}
            ]}]
            """;
        await ApplyNavigation(id, hide);

        var items = ReadNavBar(id).Elements().ToDictionary(element => (string)element.Attribute("Id")!);
        Assert.HasCount(5, items);
        Assert.IsTrue(items.Values.All(item => item.Name == "NavBarByRelationshipItem"));
        Assert.AreEqual("account_employees", (string?)items["nav_account_employees"].Attribute("RelationshipName"));
        Assert.AreEqual("account_connection1", (string?)items["navConnections"].Attribute("RelationshipName"));
        foreach (var systemId in new[] { "navAudit", "navAsyncOperations", "navProcessSessions" })
            Assert.AreEqual($"hardcoded_{{B7196B13-6B9D-42CD-BD58-B19A3953126F}}{systemId}",
                (string?)items[systemId].Attribute("RelationshipName"));
        Assert.AreEqual("Audit History", (string?)items["navAudit"].Element("Titles")?.Element("Title")?.Attribute("Text"));
        Assert.IsTrue(items.Values.All(item => (string?)item.Attribute("Show") == "false"));

        var hidden = await ReadNavigation(id);
        AssertNavigation(hidden["nav_account_employees"], "relationship", "account_employees", "Employees", "Info", 120, false);
        Assert.IsFalse(hidden["navConnections"].GetProperty("visible").GetBoolean());
        Assert.IsFalse(hidden["navAudit"].GetProperty("visible").GetBoolean());
        Assert.IsFalse(hidden["navAsyncOperations"].GetProperty("visible").GetBoolean());
        AssertNavigation(hidden["navProcessSessions"], "system", null, "Dialog Sessions", "ProcessCenter", 9700, false);

        await ApplyNavigation(id, """
            [
              {"action":"manage_navigation","manage_action":"show","nav_id":"nav_account_employees"},
              {"action":"manage_navigation","manage_action":"show","items":[
                 {"relationship_name":"account_connection1"},{"nav_id":"navAudit"},{"nav_id":"navAsyncOperations"}
              ]},
              {"action":"manage_navigation","manage_action":"update","nav_id":"navProcessSessions","visible":true}
            ]
            """);
        var shown = ReadNavBar(id).Elements().ToList();
        Assert.HasCount(5, shown);
        Assert.IsTrue(shown.All(item => (string?)item.Attribute("Show") == "true"));
        var visible = await ReadNavigation(id);
        Assert.IsTrue(items.Keys.All(key => visible[key].GetProperty("visible").GetBoolean()));
    }

    [TestMethod]
    [DataRow("hide", false)]
    [DataRow("show", true)]
    [DataRow("update", false)]
    [DataRow("update", true)]
    public async Task Update_Operations_Navigation_RejectsVisibilityChangesOnCustomLinks(string action, bool visible)
    {
        var id = SeedForm("Related", formXml: ValidFormXml.Replace("</form>", """
            <Navigation><NavBar>
              <NavBarItem Id="navSupport" Icon="support.png" Url="/support">
                <Titles><Title LCID="1033" Text="Support" /></Titles>
              </NavBarItem>
            </NavBar></Navigation></form>
            """));
        var operation = new Dictionary<string, object>
        {
            ["action"] = "manage_navigation", ["manage_action"] = action, ["nav_id"] = "navSupport"
        };
        if (action == "update")
            operation["visible"] = visible;

        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(),
            operations: JsonSerializer.Serialize(new[] { operation }));

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Cannot change visibility for navigation item 'navSupport'.");
        StringAssert.Contains(Text(result), "FormXML does not allow Show on a custom NavBarItem.");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task Update_Operations_Navigation_RejectsNewOverrideForUnmappedBuiltInItem()
    {
        SeedNavigationMetadata();
        var id = SeedForm("Related");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: """
            [{"action":"manage_navigation","manage_action":"hide","nav_id":"navSPDocuments"}]
            """);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Cannot create a FormXML override for built-in navigation item 'navSPDocuments'.");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public void Navigation_FormXmlXsdRejectsShowOnCustomLinks()
    {
        var getSchemaSet = typeof(ManageFormTool).GetMethod("GetSchemaSet", BindingFlags.NonPublic | BindingFlags.Static)!;
        var schemas = (XmlSchemaSet)getSchemaSet.Invoke(null, null)!;
        var document = XDocument.Parse(ValidFormXml.Replace("</form>", """
            <Navigation><NavBar>
              <NavBarByRelationshipItem Id="navAudit" RelationshipName="hardcoded_{B7196B13-6B9D-42CD-BD58-B19A3953126F}navAudit" Show="false" />
              <NavBarItem Id="navSupport" Icon="support.png" Url="/support">
                <Titles><Title LCID="1033" Text="Support" /></Titles>
              </NavBarItem>
            </NavBar></Navigation></form>
            """));
        document.Validate(schemas, null);

        document.Descendants("NavBarItem").Single().SetAttributeValue("Show", "false");
        var error = Assert.ThrowsExactly<XmlSchemaValidationException>(() => document.Validate(schemas, null));
        StringAssert.Contains(error.Message, "'Show' attribute is not declared");
    }

    [TestMethod]
    public async Task Update_Operations_Navigation_PreservesLegacyTagsAndTranslationsAndRemovesOverride()
    {
        SeedNavigationMetadata();
        var id = SeedForm("Related", formXml: ValidFormXml.Replace("</form>", """
            <Navigation>
              <NavBarAreas><NavBarArea Id="Info"><Titles><Title LCID="1033" Text="Common" /></Titles></NavBarArea></NavBarAreas>
              <NavBar>
                <NavBarByRelationshipItem Id="navConnections" RelationshipName="hardcoded_{B7196B13-6B9D-42CD-BD58-B19A3953126F}navConnections" Show="false">
                  <Titles><Title LCID="1033" Text="Connections" /><Title LCID="1066" Text="Kết nối" /></Titles>
                </NavBarByRelationshipItem>
              </NavBar>
            </Navigation></form>
            """));

        await ApplyNavigation(id, """
            [{"action":"manage_navigation","manage_action":"update","relationship_name":"account_connection1",
              "area":"Service","sequence":22,"label":"Partners","visible":false}]
            """);
        var navBar = ReadNavBar(id);
        var connection = navBar.Elements().Single();
        Assert.AreEqual("NavBarByRelationshipItem", connection.Name.LocalName);
        StringAssert.StartsWith((string?)connection.Attribute("RelationshipName"), "hardcoded_");
        Assert.AreEqual("Kết nối", (string?)connection.Element("Titles")?.Elements("Title").Single(title => (int?)title.Attribute("LCID") == 1066).Attribute("Text"));
        AssertNavigation((await ReadNavigation(id))["navConnections"], "relationship", "account_connection1", "Partners", "Service", 22, false);

        await ApplyNavigation(id, """
            [{"action":"manage_navigation","manage_action":"remove","nav_id":"navConnections"}]
            """);
        navBar = ReadNavBar(id);
        Assert.IsFalse(navBar.HasElements);
        Assert.IsNotNull(navBar.Parent?.Element("NavBarAreas"));
        AssertNavigation((await ReadNavigation(id))["navConnections"], "relationship", "account_connection1", "Connections", "Info", 8500, true);
    }

    [TestMethod]
    public async Task Update_Operations_Navigation_UnknownBatchItemDoesNotSaveChanges()
    {
        SeedNavigationMetadata();
        var id = SeedForm("Related");
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: """
            [{"action":"manage_navigation","manage_action":"hide","items":[
                {"nav_id":"navAudit"},{"nav_id":"navMissing"}
            ]}]
            """);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Related navigation item 'navMissing' was not found");
        Assert.AreEqual(0, _service.Updates);
    }

    private async Task<Dictionary<string, JsonElement>> ReadNavigation(Guid id)
    {
        var result = await NewTool().manage_form(null!, "navigation_list", "account", form_id: id.ToString());
        Assert.IsFalse(result.IsError == true, Text(result));
        var data = Structured(result);
        Assert.AreEqual("navigation_list", data.GetProperty("action").GetString());
        var items = data.GetProperty("navigation");
        Assert.AreEqual(items.GetArrayLength(), data.GetProperty("totalCount").GetInt32());
        return items.EnumerateArray().ToDictionary(item => item.GetProperty("id").GetString()!);
    }

    private async Task ApplyNavigation(Guid id, string operations)
    {
        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: operations);
        Assert.IsFalse(result.IsError == true, Text(result));
        var data = Structured(result);
        Assert.IsTrue(data.GetProperty("validated").GetBoolean());
        Assert.IsFalse(data.TryGetProperty("validationWarnings", out _));
    }

    private XElement ReadNavBar(Guid id)
    {
        var form = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet("formxml"));
        return XElement.Parse(form.GetAttributeValue<string>("formxml")).Element("Navigation")!.Element("NavBar")!;
    }

    private static void AssertNavigation(JsonElement item, string type, string? relationship, string label, string area, int? sequence, bool visible)
    {
        Assert.AreEqual(type, item.GetProperty("type").GetString());
        Assert.AreEqual(relationship, item.GetProperty("relationshipName").GetString());
        Assert.AreEqual(label, item.GetProperty("label").GetString());
        Assert.AreEqual(area, item.GetProperty("area").GetString());
        var sequenceValue = item.GetProperty("sequence");
        Assert.AreEqual(sequence, sequenceValue.ValueKind == JsonValueKind.Null ? (int?)null : sequenceValue.GetInt32());
        Assert.AreEqual(visible, item.GetProperty("visible").GetBoolean());
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
    [DataRow("form", "form", "onload")]
    [DataRow("tab", "tab:tab_general", "ontabstatechange")]
    [DataRow("control", "field:name", "onchange")]
    [DataRow("cell", "field:name", "onchange")]
    public async Task Update_Operations_RemoveLastEventHandler_SavesSchemaValidFormXml(string scope, string target, string eventName)
    {
        var document = XDocument.Parse(ValidFormXml.Replace("<rows />", """
            <rows><row><cell><control id="name" datafieldname="name" /></cell></row></rows>
            """));
        document.Descendants(scope).Single().Add(XElement.Parse($$"""
            <events><!-- Event registrations --><event name="{{eventName}}"><Handlers>
              <Handler functionName="Account.handleEvent" libraryName="new_/account.js"
                handlerUniqueId="{0741E9D2-CD1C-4F87-A2C9-3CC3703886C3}" />
            </Handlers></event></events>
            """));
        document.Root!.Add(XElement.Parse("""
            <formLibraries><Library name="new_/account.js" libraryUniqueId="{82C3E1F6-9895-4A2E-9E71-47FB0F08910E}" /></formLibraries>
            """));
        var id = SeedForm("Event Form", formXml: document.ToString());

        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: $$"""
            [{"action":"manage_event","manage_action":"remove","event_name":"{{eventName}}",
              "function_name":"Account.handleEvent","library_name":"new_/account.js","target":"{{target}}"}]
            """);

        Assert.IsFalse(result.IsError == true, Text(result));
        var saved = ReadSavedFormXml(id);
        Assert.IsNull(saved.Descendants(scope).Single().Element("events"));
        Assert.AreEqual("new_/account.js", (string?)saved.Root!.Element("formLibraries")?.Element("Library")?.Attribute("name"));
    }

    [TestMethod]
    public async Task Update_Operations_RemoveLastLibrary_SavesSchemaValidFormXml()
    {
        var document = XDocument.Parse(ValidFormXml);
        document.Root!.Add(XElement.Parse("""
            <formLibraries><!-- Registered scripts -->
              <Library name="new_/account.js" libraryUniqueId="{82C3E1F6-9895-4A2E-9E71-47FB0F08910E}" />
            </formLibraries>
            """));
        var id = SeedForm("Library Form", formXml: document.ToString());

        var result = await NewTool().manage_form(null!, "update", "account", form_id: id.ToString(), operations: """
            [{"action":"manage_library","manage_action":"remove","library_name":"new_/account.js"}]
            """);

        Assert.IsFalse(result.IsError == true, Text(result));
        Assert.IsNull(ReadSavedFormXml(id).Root!.Element("formLibraries"));
    }

    private XDocument ReadSavedFormXml(Guid id)
    {
        Assert.AreEqual(1, _service.Updates);
        var updated = _ctx.GetOrganizationService().Retrieve("systemform", id, new ColumnSet("formxml"));
        var document = XDocument.Parse(updated.GetAttributeValue<string>("formxml"));
        var getSchemaSet = typeof(ManageFormTool).GetMethod("GetSchemaSet", BindingFlags.NonPublic | BindingFlags.Static)!;
        var schemas = (XmlSchemaSet)getSchemaSet.Invoke(null, null)!;
        Assert.IsTrue(schemas.Count > 0);
        document.Validate(schemas, null);
        return document;
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

    // Layout and fallback shapes reduced from the Microsoft CoE admin_App and admin_Environment exports.
    private const string PcfFieldClassId = "{4273EDBD-AC1D-40D3-9FB2-095C621B552D}";
    private const string PcfGridClassId = "{E7A81278-8635-4D9E-8D4D-59480B391C5B}";
    private const string PcfHostClassId = "{F9A8A302-114E-466A-B582-6771B2AE0D92}";
    private const string PcfFieldGuid = "{60d9b26a-4672-2c96-1d5b-a823e8ad64bc}";
    private const string PcfGridGuid = "{B339949E-2C38-C5DE-DD18-DE00662EAAE6}";
    private const string NativeView = "{0206FE31-9325-4CDE-BA6B-B188E27E0D4F}";
    private const string PcfView = "{7EA45CAD-438B-EB11-A812-000D3A1F6308}";

    private const string FieldManifest = """
        <manifest><control namespace="Contoso" constructor="Lookup" version="1.2.3">
          <type-group name="Text"><type>SingleLine.Text</type><type>SingleLine.Email</type></type-group>
          <property name="value" of-type-group="Text" usage="bound" required="true" />
          <property name="enabled" of-type="TwoOptions" usage="input" required="true" default-value="true" />
          <property name="limit" of-type="Whole.None" usage="input" />
          <property name="output" of-type="SingleLine.Text" usage="output" />
        </control></manifest>
        """;

    private const string GridManifest = """
        <manifest><control namespace="Contoso" constructor="Grid" version="1.0.0">
          <data-set name="Items">
            <property-set name="HighlightColumn" of-type="SingleLine.Text" usage="bound" required="true" />
          </data-set>
          <property name="enabled" of-type="TwoOptions" usage="input" default-value="true" />
        </control></manifest>
        """;

    private void SeedPcf(string name, string manifest)
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("customcontrol", id)
        {
            ["customcontrolid"] = id,
            ["name"] = name,
            ["version"] = "9.9.9",
            ["manifest"] = manifest
        });
    }

    private static XElement PcfTarget(XDocument xml, string id) => xml.Descendants("control")
        .Single(control => (string?)control.Attribute("id") == id);

    private static XElement PcfAt(XDocument xml, string instance, int factor) => xml.Descendants("controlDescription")
        .Single(description => (string?)description.Attribute("forControl") == instance)
        .Elements("customControl").Single(custom => (int?)custom.Attribute("formFactor") == factor);

    private XDocument ReadFormXml(Guid id) =>
        XDocument.Parse(_service.Retrieve("systemform", id, new ColumnSet("formxml")).GetAttributeValue<string>("formxml"));

    private Task<CallToolResult> ApplyPcf(Guid id, string operations, bool dryRun = false) =>
        NewTool(dryRun).manage_form(null!, "update", "account", id.ToString(), operations: $"[{operations}]");

    private static XDocument PcfForm(bool header = false)
    {
        var form = XDocument.Parse(ValidFormXml);
        var rows = form.Descendants("rows").Single();
        rows.Add(XElement.Parse($$"""
            <row><cell id="{D4FEE359-F7BF-4569-A26B-C66BC890847F}">
              <control id="name" classid="{{PcfFieldClassId}}" datafieldname="name" disabled="false" uniqueid="{{PcfFieldGuid}}"/>
            </cell></row>
            """));
        rows.Add(XElement.Parse($$"""
            <row><cell id="{0D0B6603-4D73-4604-8E3A-287BF74A5B43}">
              <control id="Contacts_Subgrid" classid="{{PcfGridClassId}}" uniqueid="{{PcfGridGuid}}">
                <parameters><TargetEntityType>contact</TargetEntityType><ViewId>{{NativeView}}</ViewId>
                  <ViewIds>{{NativeView}}</ViewIds><EnableViewPicker>true</EnableViewPicker>
                  <RelationshipName>contact_customer_accounts</RelationshipName>
                </parameters>
              </control>
            </cell></row>
            """));
        if (header)
            form.Root!.Add(XElement.Parse($$"""
                <header id="{120634B0-F471-4830-BCBC-5947C05F2DA3}"><rows><row>
                  <cell id="{35E74264-6901-469C-9827-EE7DBC3A1A06}"><control id="header_name" classid="{{PcfFieldClassId}}" datafieldname="name" /></cell>
                </row></rows></header>
                """));
        return form;
    }

    [TestMethod]
    public void PcfDiscovery_FiltersAndDescribesManifests()
    {
        SeedPcf("Contoso.Lookup", FieldManifest);
        SeedPcf("Contoso.Grid", GridManifest);
        SeedPcf("Contoso.Broken", "<manifest>");
        SeedPcf("Other.Lookup", FieldManifest);
        var tool = new GetCustomControlsTool(_service);

        var result = tool.get_custom_controls("Contoso.", "prefix", "field", "SingleLine.Email");
        Assert.IsFalse(result.IsError == true, Text(result));
        var controls = Structured(result).GetProperty("customControls").EnumerateArray().ToArray();
        Assert.HasCount(2, controls);
        var field = controls.Single(item => item.GetProperty("name").GetString() == "Contoso.Lookup");
        Assert.AreEqual("1.2.3", field.GetProperty("version").GetString());
        Assert.AreEqual("Text", field.GetProperty("properties")[0].GetProperty("ofTypeGroup").GetString());
        Assert.AreEqual("output", field.GetProperty("properties")[3].GetProperty("usage").GetString());
        Assert.IsNotNull(controls.Single(item => item.GetProperty("name").GetString() == "Contoso.Broken").GetProperty("manifestError").GetString());

        var dataset = Structured(tool.get_custom_controls("Grid", kind: "dataset")).GetProperty("customControls")[0];
        Assert.AreEqual("Items", dataset.GetProperty("datasets")[0].GetProperty("name").GetString());
        Assert.AreEqual("HighlightColumn", dataset.GetProperty("datasets")[0].GetProperty("propertySets")[0].GetProperty("name").GetString());
        Assert.HasCount(0, Structured(tool.get_custom_controls("Contoso.Lookup", "exact", data_type: "Lookup.Simple"))
            .GetProperty("customControls").EnumerateArray().ToArray());
    }

    [TestMethod]
    [DataRow("suffix", "", "name_match must be", "Pass name_match=")]
    [DataRow("exact", "grid", "kind must be", "Pass kind=")]
    public void PcfDiscovery_InvalidFiltersReturnActionableHints(string match, string kind, string error, string hint)
    {
        var result = new GetCustomControlsTool(_service).get_custom_controls(name_match: match, kind: kind);
        Assert.IsTrue(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), $"[Error] {error}");
        StringAssert.Contains(Text(result), $"[Hint] {hint}");
    }

    [TestMethod]
    public async Task PcfField_BindTwoInstances_Update_ReplaceAndUnbindPerClient()
    {
        SeedPcf("Contoso.A", FieldManifest);
        SeedPcf("Contoso.B", FieldManifest);
        var id = SeedForm("PCF form", formXml: PcfForm(header: true).ToString());
        const string body = """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"name","field":"name",
             "custom_control_name":"Contoso.A","form_factors":[2]}
            """;
        const string header = """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"header_name","field":"name",
             "custom_control_name":"Contoso.A","form_factors":[0,1,2]}
            """;
        var ambiguous = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","field":"name"}
            """);
        Assert.IsTrue(ambiguous.IsError == true, Text(ambiguous));
        StringAssert.Contains(Text(ambiguous), "header_name");
        var mismatch = await ApplyPcf(id, body.Replace("\"field\":\"name\"", "\"field\":\"fullname\""));
        Assert.IsTrue(mismatch.IsError == true, Text(mismatch));

        var bind = await ApplyPcf(id, body + "," + header);
        Assert.IsFalse(bind.IsError == true, Text(bind));
        var xml = ReadFormXml(id);
        Assert.HasCount(2, xml.Descendants("controlDescription").ToArray());
        Assert.AreEqual(PcfFieldGuid, (string?)PcfTarget(xml, "name").Attribute("uniqueid"));
        Assert.AreEqual("Contoso.A", (string?)PcfAt(xml, PcfFieldGuid, 2).Attribute("name"));
        Assert.AreEqual(PcfFieldClassId, (string?)PcfAt(xml, PcfFieldGuid, 0).Attribute("id"));
        Assert.IsFalse((await ApplyPcf(id, body)).IsError == true);
        Assert.IsTrue(XNode.DeepEquals(xml, ReadFormXml(id)));

        const string patch = """
            {"action":"manage_custom_control","manage_action":"update","control_id":"name",
             "custom_control_name":"Contoso.A","form_factors":[2],"parameters":{"enabled":{"value":false},"limit":{"value":0}}}
            """;
        var updated = await ApplyPcf(id, patch);
        Assert.IsFalse(updated.IsError == true, Text(updated));
        var parameters = PcfAt(ReadFormXml(id), PcfFieldGuid, 2).Element("parameters")!;
        Assert.AreEqual("name", (string?)parameters.Element("value"));
        Assert.AreEqual("false", (string?)parameters.Element("enabled"));
        Assert.AreEqual("0", (string?)parameters.Element("limit"));

        var b = body.Replace("Contoso.A", "Contoso.B");
        var rejected = await ApplyPcf(id, b);
        Assert.IsTrue(rejected.IsError == true, Text(rejected));
        StringAssert.Contains(Text(rejected), "replace: true");
        var phone = await ApplyPcf(id, b.Replace("[2]", "[0]"));
        Assert.IsFalse(phone.IsError == true, Text(phone));
        var ambiguousUnbind = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","control_id":"name"}
            """);
        Assert.IsTrue(ambiguousUnbind.IsError == true, Text(ambiguousUnbind));
        StringAssert.Contains(Text(ambiguousUnbind), "multiple PCFs");
        var replace = await ApplyPcf(id, b.Replace("[2]", "[2],\"replace\":true"));
        Assert.IsFalse(replace.IsError == true, Text(replace));
        Assert.AreEqual("Contoso.B", (string?)PcfAt(ReadFormXml(id), PcfFieldGuid, 0).Attribute("name"));
        Assert.AreEqual("Contoso.B", (string?)PcfAt(ReadFormXml(id), PcfFieldGuid, 2).Attribute("name"));
        var unbind = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","control_id":"name","form_factors":[2]}
            """);
        Assert.IsFalse(unbind.IsError == true, Text(unbind));
        Assert.AreEqual("Contoso.B", (string?)PcfAt(ReadFormXml(id), PcfFieldGuid, 0).Attribute("name"));
        Assert.AreEqual(PcfFieldClassId, (string?)PcfAt(ReadFormXml(id), PcfFieldGuid, 2).Attribute("id"));
        var last = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","control_id":"name"}
            """);
        Assert.IsFalse(last.IsError == true, Text(last));
        xml = ReadFormXml(id);
        Assert.AreEqual(PcfFieldClassId, (string?)PcfTarget(xml, "name").Attribute("classid"));
        Assert.AreEqual(PcfFieldGuid, (string?)PcfTarget(xml, "name").Attribute("uniqueid"));
        Assert.HasCount(1, xml.Descendants("controlDescription").ToArray());
    }

    [TestMethod]
    public async Task PcfSubgrid_PreservesNativeAndPerClientViews_AndRejectsParentField()
    {
        SeedPcf("Contoso.Grid", GridManifest);
        var source = PcfForm();
        var id = SeedForm("PCF form", formXml: source.ToString());
        const string bind = """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"Contacts_Subgrid",
             "custom_control_name":"Contoso.Grid","form_factors":[2],
             "parameters":{"Items":{"source":"subgrid","property_sets":{"HighlightColumn":{"field":"fullname"}}}}}
            """;
        var invalid = await ApplyPcf(id, bind.Replace("fullname", "name"));
        Assert.IsTrue(invalid.IsError == true, Text(invalid));
        StringAssert.Contains(Text(invalid), "table 'contact'");

        var result = await ApplyPcf(id, bind);
        Assert.IsFalse(result.IsError == true, Text(result));
        var xml = ReadFormXml(id);
        var subgrid = PcfTarget(xml, "Contacts_Subgrid");
        Assert.AreEqual(PcfHostClassId, (string?)subgrid.Attribute("classid"));
        Assert.AreEqual(true, (bool?)subgrid.Attribute("indicationOfSubgrid"));
        var dataset = PcfAt(xml, PcfGridGuid, 2).Descendants("data-set").Single();
        Assert.AreEqual("contact", (string?)dataset.Element("TargetEntityType"));
        Assert.AreEqual("contact_customer_accounts", (string?)dataset.Element("RelationshipName"));
        Assert.AreEqual(NativeView, (string?)dataset.Element("ViewId"));
        Assert.AreEqual(NativeView, (string?)dataset.Element("FilteredViewIds"));
        Assert.AreEqual("true", (string?)dataset.Element("EnableViewPicker"));
        Assert.AreEqual("fullname", (string?)dataset.Element("HighlightColumn"));
        Assert.IsNull(dataset.Element("property-set"));

        dataset.SetElementValue("ViewId", PcfView);
        _ctx.GetOrganizationService().Update(new Entity("systemform", id) { ["formxml"] = xml.ToString() });
        var patch = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"update","control_id":"Contacts_Subgrid",
             "custom_control_name":"Contoso.Grid","form_factors":[2],"parameters":{"enabled":{"value":false}}}
            """);
        Assert.IsFalse(patch.IsError == true, Text(patch));
        var patched = ReadFormXml(id);
        Assert.AreEqual(PcfView, (string?)PcfAt(patched, PcfGridGuid, 2).Descendants("ViewId").Single());
        Assert.AreEqual("fullname", (string?)PcfAt(patched, PcfGridGuid, 2).Descendants("HighlightColumn").Single());
        Assert.AreEqual(NativeView, (string?)PcfTarget(patched, "Contacts_Subgrid").Descendants("ViewId").Single());

        var undone = await NewTool().manage_form(null!, "undo", "account", id.ToString(),
            formxml: Structured(patch).GetProperty("backupPath").GetString()!);
        Assert.IsFalse(undone.IsError == true, Text(undone));
        Assert.IsNull(PcfAt(ReadFormXml(id), PcfGridGuid, 2).Descendants("enabled").SingleOrDefault());
        var unbind = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","control_id":"Contacts_Subgrid"}
            """);
        Assert.IsFalse(unbind.IsError == true, Text(unbind));
        var restored = ReadFormXml(id);
        Assert.AreEqual(PcfGridClassId, (string?)PcfTarget(restored, "Contacts_Subgrid").Attribute("classid"));
        Assert.IsTrue(XNode.DeepEquals(PcfTarget(source, "Contacts_Subgrid").Element("parameters"),
            PcfTarget(restored, "Contacts_Subgrid").Element("parameters")));
        Assert.IsNull(restored.Root!.Element("controlDescriptions"));
    }

    [TestMethod]
    public async Task PcfSubgrid_CalendarUsesExportedDatasetMappingsAndPreservesUntouchedMappings()
    {
        const string calendarName = "MscrmControls.Calendar.CalendarControl";
        SeedPcf(calendarName, """
            <manifest><control namespace="MscrmControls.Calendar" constructor="CalendarControl">
              <data-set name="Calendar">
                <property-set name="StartDate" of-type="DateAndTime.DateAndTime" usage="bound" required="true" />
                <property-set name="Description" of-type="SingleLine.Text" usage="input" required="true" />
              </data-set>
              <property name="MinimumDuration" of-type="Whole.Duration" usage="input" />
            </control></manifest>
            """);
        var contact = _service.Entities.Single(entity => entity.LogicalName == "contact");
        Set(contact, "Attributes", new AttributeMetadata[]
        {
            contact.Attributes.Single(),
            new DateTimeAttributeMetadata { LogicalName = "createdon", Format = DateTimeFormat.DateAndTime },
            new DateTimeAttributeMetadata { LogicalName = "modifiedon", Format = DateTimeFormat.DateAndTime }
        });

        var id = SeedForm("Calendar PCF", formXml: PcfForm().ToString());
        var bind = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"Contacts_Subgrid",
             "custom_control_name":"MscrmControls.Calendar.CalendarControl","form_factors":[1,2],
             "parameters":{"Calendar":{"source":"subgrid","property_sets":{
               "StartDate":{"field":"createdon"},"Description":{"field":"fullname"}
             }},"MinimumDuration":{"value":30}}}
            """);
        Assert.IsFalse(bind.IsError == true, Text(bind));
        var boundXml = ReadFormXml(id);
        var web = PcfAt(boundXml, PcfGridGuid, 2).Element("parameters")!;
        var dataset = web.Element("data-set")!;

        // Shape from the Dataverse CalendarControl export in microsoft/AdvocacyPlatform.
        Assert.AreEqual("Calendar", (string?)dataset.Attribute("name"));
        Assert.IsTrue(XNode.DeepEquals(new XElement("StartDate", "createdon"), dataset.Element("StartDate")));
        Assert.IsTrue(XNode.DeepEquals(new XElement("Description", "fullname"), dataset.Element("Description")));
        Assert.IsNull(dataset.Element("property-set"));
        Assert.IsTrue(XNode.DeepEquals(XElement.Parse("""
            <MinimumDuration static="true" type="Whole.Duration">30</MinimumDuration>
            """), web.Element("MinimumDuration")));

        var updated = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"update","control_id":"Contacts_Subgrid",
             "custom_control_name":"MscrmControls.Calendar.CalendarControl","form_factors":[2],
             "parameters":{"Calendar":{"property_sets":{"StartDate":{"field":"modifiedon"}}}}}
            """);
        Assert.IsFalse(updated.IsError == true, Text(updated));
        var updatedXml = ReadFormXml(id);
        var updatedWeb = PcfAt(updatedXml, PcfGridGuid, 2).Element("parameters")!;
        var updatedDataset = updatedWeb.Element("data-set")!;
        Assert.AreEqual("modifiedon", (string?)updatedDataset.Elements("StartDate").Single());
        Assert.IsTrue(XNode.DeepEquals(dataset.Element("Description"), updatedDataset.Element("Description")));
        Assert.IsTrue(XNode.DeepEquals(web.Element("MinimumDuration"), updatedWeb.Element("MinimumDuration")));
        Assert.IsTrue(XNode.DeepEquals(PcfAt(boundXml, PcfGridGuid, 1), PcfAt(updatedXml, PcfGridGuid, 1)));
    }

    [TestMethod]
    [DataRow("Whole.Duration", "30", true)]
    [DataRow("Whole.TimeZone", "0", true)]
    [DataRow("Whole.Language", "1033", true)]
    [DataRow("Whole.Duration", "30.5", false)]
    [DataRow("Whole.TimeZone", "2147483648", false)]
    [DataRow("Whole.Language", "\"1033\"", false)]
    public async Task PcfStaticWholeTypes_RequireJsonInt32(string type, string literal, bool valid)
    {
        SeedPcf("Contoso.A", FieldManifest.Replace("Whole.None", type));
        var id = SeedForm("PCF whole value", formXml: PcfForm().ToString());
        var result = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"bind","field":"name",
             "custom_control_name":"Contoso.A","form_factors":[2],
             "parameters":{"value":{"field":"name"},"limit":{"value":__LITERAL__}}}
            """.Replace("__LITERAL__", literal));
        if (!valid)
        {
            Assert.IsTrue(result.IsError == true, Text(result));
            StringAssert.Contains(Text(result), $"does not match the manifest types: {type}");
            Assert.AreEqual(0, _service.Updates);
            return;
        }

        Assert.IsFalse(result.IsError == true, Text(result));
        var value = PcfAt(ReadFormXml(id), PcfFieldGuid, 2).Descendants("limit").Single();
        Assert.AreEqual(literal, value.Value);
        Assert.AreEqual(type, (string?)value.Attribute("type"));
        Assert.AreEqual(true, (bool?)value.Attribute("static"));
    }

    [TestMethod]
    public async Task PcfBatch_DryRunAndInvalidManifestBindingsLeaveFormUntouched()
    {
        SeedPcf("Contoso.A", FieldManifest);
        var source = PcfForm();
        var id = SeedForm("PCF form", formXml: source.ToString());
        const string bind = """
            {"action":"manage_custom_control","manage_action":"bind","field":"name","custom_control_name":"Contoso.A","form_factors":[2]}
            """;
        var preview = await ApplyPcf(id, bind, dryRun: true);
        Assert.IsFalse(preview.IsError == true, Text(preview));
        Assert.AreEqual("not_executed", Structured(preview).GetProperty("status").GetString());

        var result = await ApplyPcf(id, bind + "," + """
            {"action":"manage_custom_control","manage_action":"update","field":"name","custom_control_name":"Contoso.A",
             "form_factors":[2],"parameters":{"enabled":{"value":"false"}}}
            """);
        Assert.IsTrue(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "does not match the manifest types");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
        Assert.IsFalse(Directory.Exists(BackupDir("account")));
        Assert.IsTrue(XNode.DeepEquals(source, ReadFormXml(id)));
    }

    [TestMethod]
    public async Task PcfBindings_FollowMovedFields_AndCleanUpOnlyRemovedTargets()
    {
        SeedPcf("Contoso.A", FieldManifest);
        var id = SeedForm("PCF form", formXml: PcfForm(header: true).ToString());
        var result = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"name","custom_control_name":"Contoso.A","form_factors":[2]},
            {"action":"manage_custom_control","manage_action":"bind","control_id":"header_name","custom_control_name":"Contoso.A","form_factors":[2]},
            {"action":"manage_section","manage_action":"add","tab":"tab_general","name":"other","label":"Other"},
            {"action":"manage_fields","manage_action":"move","tab":"tab_general","section":"general_section",
             "target_tab":"tab_general","target_section":"other","fields":["name"]},
            {"action":"manage_section","manage_action":"remove","tab":"tab_general","section":"general_section"}
            """);
        Assert.IsFalse(result.IsError == true, Text(result));
        var moved = ReadFormXml(id);
        Assert.AreEqual("other", (string?)PcfTarget(moved, "name").Ancestors("section").Single().Attribute("name"));
        Assert.AreEqual("Contoso.A", (string?)PcfAt(moved, PcfFieldGuid, 2).Attribute("name"));
        var removed = await ApplyPcf(id, """
            {"action":"manage_section","manage_action":"remove","tab":"tab_general","section":"other"}
            """);
        Assert.IsFalse(removed.IsError == true, Text(removed));
        var remaining = ReadFormXml(id).Descendants("controlDescription").Single();
        Assert.AreNotEqual(PcfFieldGuid, (string?)remaining.Attribute("forControl"));
    }

    [TestMethod]
    public async Task PcfBind_CanFollowFieldAdd_AndMissingFallbackBlocksUnbind()
    {
        SeedPcf("Contoso.A", FieldManifest);
        var id = SeedForm("PCF form");
        var added = await ApplyPcf(id, AddFieldOps[1..^1] + "," + """
            {"action":"manage_custom_control","manage_action":"bind","control_id":"name","custom_control_name":"Contoso.A","form_factors":[2]}
            """);
        Assert.IsFalse(added.IsError == true, Text(added));

        var xml = ReadFormXml(id);
        xml.Descendants("customControl").Single(node => node.Attribute("formFactor") == null).Remove();
        _ctx.GetOrganizationService().Update(new Entity("systemform", id) { ["formxml"] = xml.ToString() });
        var result = await ApplyPcf(id, """
            {"action":"manage_custom_control","manage_action":"unbind","control_id":"name"}
            """);
        Assert.IsTrue(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "OOB fallback");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(1, _service.Publishes);
        Assert.IsTrue(XNode.DeepEquals(xml, ReadFormXml(id)));
    }

    private sealed class FormOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();

        /// <summary>Roles returned for the RoleGateHelper FetchExpression (entity name='role').</summary>
        public readonly List<string> Roles = new() { "System Administrator" };

        /// <summary>When true, PublishXmlRequest throws so PublishHelper returns false.</summary>
        public bool FailPublish;
        public bool FailSolution;
        public readonly List<string> PublishRequests = new();
        public readonly List<AddSolutionComponentRequest> SolutionRequests = new();

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
            if (request is PublishXmlRequest publish)
            {
                PublishRequests.Add(publish.ParameterXml);
                if (FailPublish) throw new InvalidOperationException("Simulated publish failure (FailPublish).");
                Publishes++;
                return new OrganizationResponse();
            }
            if (request is AddSolutionComponentRequest association)
            {
                SolutionRequests.Add(association);
                if (FailSolution) throw new InvalidOperationException("Simulated solution failure.");
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
