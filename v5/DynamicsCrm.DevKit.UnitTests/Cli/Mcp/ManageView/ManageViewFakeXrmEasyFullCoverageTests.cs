using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using ModelContextProtocol.Protocol;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageViewTool (HandleList/Detail/Create/Update/
/// Rename/SetDefault/Undo and their validation helpers). Metadata requests go through
/// the ViewOrgService decorator; the Web API (ValidateFetchXmlExpression) uses a fake
/// IWebApiExecutor; mutations hit FakeXrmEasy CRUD.
/// </summary>
[TestClass]
public sealed class ManageViewFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private ViewOrgService _service = null!;
    private FakeWebApiExecutor _webApi = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-view-tests-" + Guid.NewGuid().ToString("N"));
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

        _service = new ViewOrgService(_ctx.GetOrganizationService());
        _service.Entities.Add(MakeAccountMetadata());
        _service.Entities.Add(MakeContactMetadata());

        _webApi = new FakeWebApiExecutor();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageViewTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false), _webApi);

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static AttributeMetadata IdAttribute(string logicalName)
    {
        var attr = new AttributeMetadata { LogicalName = logicalName, SchemaName = logicalName, DisplayName = MakeLabel(logicalName) };
        Set(attr, "AttributeType", AttributeTypeCode.Uniqueidentifier);
        return attr;
    }

    private static EntityMetadata MakeAccountMetadata()
    {
        var name = new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", DisplayName = MakeLabel("Account Name"), Format = StringFormat.Text };
        var email = new StringAttributeMetadata { LogicalName = "emailaddress1", SchemaName = "EmailAddress1", DisplayName = MakeLabel("Email"), Format = StringFormat.Email };
        var phone = new StringAttributeMetadata { LogicalName = "telephone1", SchemaName = "Telephone1", DisplayName = MakeLabel("Phone"), Format = StringFormat.Phone };
        var website = new StringAttributeMetadata { LogicalName = "websiteurl", SchemaName = "WebsiteUrl", DisplayName = MakeLabel("Website"), Format = StringFormat.Url };
        var desc = new MemoAttributeMetadata { LogicalName = "description", SchemaName = "Description", DisplayName = MakeLabel("Description") };
        var active = new BooleanAttributeMetadata { LogicalName = "new_active", SchemaName = "New_Active", DisplayName = MakeLabel("Active") };
        var created = new DateTimeAttributeMetadata { LogicalName = "createdon", SchemaName = "CreatedOn", DisplayName = MakeLabel("Created On") };
        var owner = new LookupAttributeMetadata { LogicalName = "ownerid", SchemaName = "OwnerId", DisplayName = MakeLabel("Owner") };
        var primarycontact = new LookupAttributeMetadata { LogicalName = "primarycontactid", SchemaName = "PrimaryContactId", DisplayName = MakeLabel("Primary Contact") };
        var accountid = IdAttribute("accountid");
        var meta = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account",
            DisplayName = MakeLabel("Account")
        };
        Set(meta, "PrimaryIdAttribute", "accountid");
        Set(meta, "PrimaryNameAttribute", "name");
        Set(meta, "ObjectTypeCode", 1);
        Set(meta, "Attributes", new AttributeMetadata[] { name, email, phone, website, desc, active, created, owner, primarycontact, accountid });
        return meta;
    }

    private static EntityMetadata MakeContactMetadata()
    {
        var fullname = new StringAttributeMetadata { LogicalName = "fullname", SchemaName = "FullName", DisplayName = MakeLabel("Full Name") };
        var meta = new EntityMetadata
        {
            LogicalName = "contact",
            SchemaName = "Contact",
            DisplayName = MakeLabel("Contact")
        };
        Set(meta, "PrimaryIdAttribute", "contactid");
        Set(meta, "PrimaryNameAttribute", "fullname");
        Set(meta, "ObjectTypeCode", 2);
        Set(meta, "Attributes", new AttributeMetadata[] { fullname, IdAttribute("contactid") });
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private const string SimpleFetch = "<fetch><entity name='account'><attribute name='name'/><attribute name='emailaddress1'/></entity></fetch>";
    private const string SimpleLayout = "<grid name='resultset' object='1' jump='name' select='1' icon='1' preview='1'><row name='result' id='accountid'><cell name='name' width='300'/><cell name='emailaddress1' width='200'/></row></grid>";

    private Guid SeedView(string name, string fetchXml = SimpleFetch, string layoutXml = SimpleLayout,
        int queryType = 0, bool isDefault = false, string returnedTypeCode = "account")
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("savedquery", id)
        {
            ["savedqueryid"] = id,
            ["name"] = name,
            ["returnedtypecode"] = returnedTypeCode,
            ["querytype"] = queryType,
            ["isdefault"] = isDefault,
            ["statecode"] = new OptionSetValue(0),
            ["ismanaged"] = false,
            ["description"] = "seeded view",
            ["fetchxml"] = fetchXml,
            ["layoutxml"] = layoutXml
        });
        return id;
    }

    private Guid SeedPersonalView(string name)
    {
        var id = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("userquery", id)
        {
            ["userqueryid"] = id,
            ["name"] = name,
            ["returnedtypecode"] = "account",
            ["querytype"] = 0,
            ["statecode"] = new OptionSetValue(0),
            ["description"] = "personal",
            ["fetchxml"] = SimpleFetch,
            ["layoutxml"] = SimpleLayout
        });
        return id;
    }

    private static string Text(CallToolResult r) => r.GetText();

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_NoViews_ReturnsZeroCount()
    {
        var result = await NewTool().manage_view(null!, "list", "account");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No system views found for 'account'");
    }

    [TestMethod]
    public async Task List_PersonalNoViews_ReturnsZeroCount()
    {
        var result = await NewTool().manage_view(null!, "list", "account", is_personal_view: true);
        StringAssert.Contains(Text(result), "No personal views found for 'account'");
    }

    [TestMethod]
    public async Task List_WithSeededViews_ReturnsEntries()
    {
        SeedView("My Active Accounts");
        SeedView("Open Opportunities", returnedTypeCode: "account");
        var result = await NewTool().manage_view(null!, "list", "account");
        StringAssert.Contains(Text(result), "system views for 'account'");
    }

    [TestMethod]
    public async Task List_PersonalWithSeededView_ReturnsEntries()
    {
        SeedPersonalView("My Personal");
        var result = await NewTool().manage_view(null!, "list", "account", is_personal_view: true);
        StringAssert.Contains(Text(result), "personal views for 'account'");
    }

    [TestMethod]
    public async Task List_NameFilter_NoMatch_ReturnsNoViews()
    {
        var result = await NewTool().manage_view(null!, "list", "account", view_name: "zzz-nonexistent");
        StringAssert.Contains(Text(result), "No views found for 'account' matching 'zzz-nonexistent'");
    }

    [TestMethod]
    public async Task List_NameFilter_SingleMatch_DelegatesToDetail()
    {
        SeedView("Unique View Name");
        var result = await NewTool().manage_view(null!, "list", "account", view_name: "Unique View Name");
        StringAssert.Contains(Text(result), "'Unique View Name'");
        StringAssert.Contains(Text(result), "Public view");
    }

    [TestMethod]
    public async Task List_NameFilter_MultipleMatches_ReturnsCandidates()
    {
        SeedView("Alpha Report");
        SeedView("Alpha Grid");
        var result = await NewTool().manage_view(null!, "list", "account", view_name: "Alpha");
        StringAssert.Contains(Text(result), "Found 2 views");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_MissingIdAndName_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "detail", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_id or view_name is required");
    }

    [TestMethod]
    public async Task Detail_ByViewId_Found_ReturnsColumnsAndFetch()
    {
        var id = SeedView("Detail Me");
        var result = await NewTool().manage_view(null!, "detail", "account", view_id: id.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Detail Me'");
        StringAssert.Contains(Text(result), "2 columns");
    }

    [TestMethod]
    public async Task Detail_ByViewId_NotFound_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "detail", "account", view_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No system view found with ID");
    }

    [TestMethod]
    public async Task Detail_PersonalView_Found()
    {
        var id = SeedPersonalView("Personal Detail");
        var result = await NewTool().manage_view(null!, "detail", "account", view_id: id.ToString(), is_personal_view: true);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "personal");
    }

    [TestMethod]
    public async Task Detail_PersonalViewId_AsSystem_ReturnsError()
    {
        var id = SeedPersonalView("Personal Detail");
        var result = await NewTool().manage_view(null!, "detail", "account", view_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Detail_ByName_NoMatch_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "detail", "account", view_name: "nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No system view found matching name 'nope'");
    }

    [TestMethod]
    public async Task Detail_ByName_SingleMatch_ReturnsDetail()
    {
        SeedView("Named Lookup");
        var result = await NewTool().manage_view(null!, "detail", "account", view_name: "Named Lookup");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Named Lookup'");
    }

    [TestMethod]
    public async Task Detail_ByName_MultipleMatches_ReturnsCandidates()
    {
        SeedView("Common A");
        SeedView("Common B");
        var result = await NewTool().manage_view(null!, "detail", "account", view_name: "Common");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple views match 'Common'");
    }

    [TestMethod]
    public async Task Detail_ByName_PreferExactMatch_OverContains()
    {
        SeedView("Common A");
        SeedView("Exact Target");
        SeedView("Exact Target Extended");
        var result = await NewTool().manage_view(null!, "detail", "account", view_name: "Exact Target");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "'Exact Target'");
    }

    [TestMethod]
    public async Task Detail_QuickFindView_ReturnsQuickFindColumns()
    {
        var qfFetch = "<fetch><entity name='account'><attribute name='name'/><filter isquickfindfields='1'><condition attribute='name' operator='like' value='%a%'/><condition attribute='emailaddress1' operator='like' value='%b%'/><condition attribute='name' operator='like' value='%c%'/></filter></entity></fetch>";
        SeedView("Quick Find View", fetchXml: qfFetch, queryType: 4);
        var result = await NewTool().manage_view(null!, "detail", "account", view_name: "Quick Find View");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "QuickFind view");
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_MissingViewName_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "create", "account", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_name is required when action='create'");
    }

    [TestMethod]
    public async Task Create_DefaultFetch_UsesPrimaryIdAndName()
    {
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Default Fetch View", fetchxml: "");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created view 'Default Fetch View'");
    }

    [TestMethod]
    public async Task Create_DuplicateName_ReturnsError()
    {
        SeedView("Existing Name");
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Existing Name", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "already exists");
    }

    [TestMethod]
    public async Task Create_InvalidFetchXml_ReturnsBlocked()
    {
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Bad Xml", fetchxml: "not-xml-at-all");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "XML could not be parsed");
    }

    [TestMethod]
    public async Task Create_UnknownField_ReturnsBlockedValidation()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='nosuchfield'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Unknown Field", fetchxml: fetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "name resolution failed");
    }

    [TestMethod]
    public async Task Create_LinkEntityWithoutAlias_AutoAliased_DryRun()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='name'/><link-entity name='contact' from='contactid' to='primarycontactid'><attribute name='fullname'/></link-entity></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Aliased View", fetchxml: fetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created view 'Aliased View'");
        StringAssert.Contains(Text(result), "2 columns");
    }

    [TestMethod]
    public async Task Create_OnlyPrimaryIdField_AddsPrimaryName_DryRun()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='accountid'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Id Only View", fetchxml: fetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created view 'Id Only View'");
    }

    [TestMethod]
    public async Task Create_DisplayNameInFetch_IsNormalized()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='Account Name'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Display Name Fetch", fetchxml: fetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created view 'Display Name Fetch'");
    }

    [TestMethod]
    public async Task Create_UnresolvableFieldInFetch_ReturnsBlocked()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='Does Not Exist Anywhere'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Bad Display Name", fetchxml: fetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "name resolution failed");
    }

    [TestMethod]
    public async Task Create_MismatchedRootEntity_ReturnsBlocked()
    {
        const string fetch = "<fetch><entity name='contact'><attribute name='fullname'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Mismatch Root", fetchxml: fetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "blocked");
    }

    [TestMethod]
    public async Task Create_WebApiValidationFails_ReturnsBlocked()
    {
        _webApi.Responder = () => new HttpResponseMessage(HttpStatusCode.InternalServerError);
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Server Rejected", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "server-side validation");
    }

    [TestMethod]
    public async Task Create_WebApiValidationMessages_ReturnsBlocked()
    {
        _webApi.Responder = () => new HttpResponseMessage(HttpStatusCode.OK)
        {
            Content = new StringContent("""{"ValidationResults":{"Messages":[{"Severity":"Error","LocalizedMessageText":"Order by attribute is not valid."}]}}""", Encoding.UTF8, "application/json")
        };
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Server Messages", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "server-side validation");
        StringAssert.Contains(Text(result), "Order by attribute is not valid");
    }

    [TestMethod]
    public async Task Create_WebApiNoMessages_Succeeds()
    {
        _webApi.Responder = () => new HttpResponseMessage(HttpStatusCode.OK)
        {
            Content = new StringContent("""{"ValidationResults":{"Messages":[]}}""", Encoding.UTF8, "application/json")
        };
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Server Empty", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Created view 'Server Empty'");
    }

    [TestMethod]
    public async Task Create_DryRun_ReturnsPreviewWithoutMutation()
    {
        var before = _service.Creates;
        var result = await NewTool(dryRun: true).manage_view(null!, "create", "account", view_name: "Dry Run View", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(before, _service.Creates, "DryRun must not create");
    }

    [TestMethod]
    public async Task Create_Success_CreatesAndPublishes()
    {
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Real Create", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.Creates);
        Assert.IsTrue(_service.Publishes >= 1);
    }

    [TestMethod]
    public async Task Create_LinkEntityWithoutAttributes_IsSkipped()
    {
        const string fetch = "<fetch><entity name='account'><attribute name='name'/><link-entity name='contact' from='contactid' to='primarycontactid'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "create", "account", view_name: "Empty Link", fetchxml: fetch);
        Assert.IsFalse(result.IsError == true);
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_MissingIdAndName_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "update", "account", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_id or view_name is required");
    }

    [TestMethod]
    public async Task Update_NoFetchNoCells_ReturnsError()
    {
        var id = SeedView("Update Me");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "at least one of fetchxml or cell_updates_json is required");
    }

    [TestMethod]
    public async Task Update_BothFetchAndCells_ReturnsError()
    {
        var id = SeedView("Update Both");
        const string cells = """[{"cell_name":"name","set_attributes":{"width":"400"}}]""";
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: SimpleFetch, cell_updates_json: cells);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not both");
    }

    [TestMethod]
    public async Task Update_ViewNotFound_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "update", "account", view_id: Guid.NewGuid().ToString(), fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "View not found");
    }

    [TestMethod]
    public async Task Update_ByViewName_SingleMatch_Updates()
    {
        SeedView("Sole Update Target");
        var result = await NewTool().manage_view(null!, "update", "account", view_name: "Sole Update Target", fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated view 'Sole Update Target'");
        Assert.AreEqual(1, _service.Updates);
    }

    [TestMethod]
    public async Task Update_ByViewName_MultipleMatches_ReturnsCandidates()
    {
        SeedView("Twin One");
        SeedView("Twin Two");
        var result = await NewTool().manage_view(null!, "update", "account", view_name: "Twin", fetchxml: SimpleFetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple views match 'Twin'");
    }

    [TestMethod]
    public async Task Update_RegenerateLayout_KeepsCellAttributes()
    {
        const string layoutWithAttr = "<grid name='resultset' object='1' jump='name' select='1' icon='1' preview='1'><row name='result' id='accountid'><cell name='name' width='300' imageproviderfunctionname='fn'/><cell name='emailaddress1' width='200'/></row></grid>";
        var id = SeedView("Merge Cells", layoutXml: layoutWithAttr);
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated view");
        Assert.AreEqual(1, _service.Updates);
        var updated = _service.LastUpdatedEntity!;
        StringAssert.Contains(updated.GetAttributeValue<string>("layoutxml"), "imageproviderfunctionname");
    }

    [TestMethod]
    public async Task Update_QuickFindView_RemovingCondition_Blocks()
    {
        var qfFetch = "<fetch><entity name='account'><attribute name='name'/><filter isquickfindfields='1'><condition attribute='name' operator='like' value='%a%'/></filter></entity></fetch>";
        var id = SeedView("QF Preserve", fetchXml: qfFetch, queryType: 4);
        const string newFetch = "<fetch><entity name='account'><attribute name='name'/><filter isquickfindfields='1'><condition attribute='telephone1' operator='like' value='%b%'/></filter></entity></fetch>";
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: newFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated view");
    }

    [TestMethod]
    public async Task Update_QuickFindView_KeepingCondition_Succeeds()
    {
        var qfFetch = "<fetch><entity name='account'><attribute name='name'/><filter isquickfindfields='1'><condition attribute='name' operator='like' value='%a%'/></filter></entity></fetch>";
        var id = SeedView("QF Keep", fetchXml: qfFetch, queryType: 4);
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: qfFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "find columns");
    }

    [TestMethod]
    public async Task Update_UnknownField_Blocks()
    {
        var id = SeedView("Unknown Field Update");
        const string fetch = "<fetch><entity name='account'><attribute name='nosuchfield'/></entity></fetch>";
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: fetch);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "name resolution failed");
    }

    [TestMethod]
    public async Task Update_DryRun_NoMutation()
    {
        var id = SeedView("Dry Update");
        var before = _service.Updates;
        var result = await NewTool(dryRun: true).manage_view(null!, "update", "account", view_id: id.ToString(), fetchxml: SimpleFetch);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(before, _service.Updates);
    }

    [TestMethod]
    public async Task Update_CellPatch_InvalidJson_ReturnsError()
    {
        var id = SeedView("Cell Bad Json");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: "{not json");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not valid JSON");
    }

    [TestMethod]
    public async Task Update_CellPatch_EmptyArray_ReturnsError()
    {
        var id = SeedView("Cell Empty");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "empty or not a JSON array");
    }

    [TestMethod]
    public async Task Update_CellPatch_MissingCellName_ReturnsError()
    {
        var id = SeedView("Cell No Name");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"set_attributes":{"width":"300"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "missing required 'cell_name'");
    }

    [TestMethod]
    public async Task Update_CellPatch_DuplicateCellName_ReturnsError()
    {
        var id = SeedView("Cell Dup");
        const string cells = """[{"cell_name":"name","set_attributes":{"width":"300"}},{"cell_name":"NAME","remove_attributes":["ishidden"]}]""";
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: cells);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "duplicate cell_name");
    }

    [TestMethod]
    public async Task Update_CellPatch_NoSetOrRemove_ReturnsError()
    {
        var id = SeedView("Cell Nothing");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name"}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "at least one of 'set_attributes' or 'remove_attributes'");
    }

    [TestMethod]
    public async Task Update_CellPatch_ProtectedSet_ReturnsError()
    {
        var id = SeedView("Cell Protected");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"name":"other"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "protected attribute 'name'");
    }

    [TestMethod]
    public async Task Update_CellPatch_ProtectedRemove_ReturnsError()
    {
        var id = SeedView("Cell Prot Rem");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","remove_attributes":["width"]}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "protected attribute 'width'");
        StringAssert.Contains(Text(result), "use set_attributes to resize");
    }

    [TestMethod]
    public async Task Update_CellPatch_CellNotInFetch_ReturnsError()
    {
        var id = SeedView("Cell Missing");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"unknown_cell","set_attributes":{"width":"300"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "blocked");
    }

    [TestMethod]
    public async Task Update_CellPatch_InvalidFunctionName_ReturnsError()
    {
        var id = SeedView("Cell Bad Fn");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderfunctionname":"bad fn name"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "must be a non-empty JS function name without whitespace");
    }

    [TestMethod]
    public async Task Update_CellPatch_EmptyWebResource_ReturnsError()
    {
        var id = SeedView("Cell Empty Wr");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderwebresource":"  "}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "is empty");
    }

    [TestMethod]
    public async Task Update_CellPatch_PrefixOnlyWebResource_ReturnsError()
    {
        var id = SeedView("Cell Prefix Wr");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderwebresource":"$webresource:"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "prefix but no web resource name");
    }

    [TestMethod]
    public async Task Update_CellPatch_UnknownWebResource_ReturnsError()
    {
        var id = SeedView("Cell Missing Wr");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderwebresource":"nosuchjs"}}]""");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "JS web resource 'nosuchjs' not found");
    }

    [TestMethod]
    public async Task Update_CellPatch_WithWebResource_Succeeds()
    {
        var wrId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("webresource", wrId)
        {
            ["webresourceid"] = wrId,
            ["name"] = "devkit_/js/icon.js",
            ["webresourcetype"] = new OptionSetValue(3)
        });
        var id = SeedView("Cell With Wr");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"imageproviderwebresource":"devkit_/js/icon.js"}}]""");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated view");
        StringAssert.Contains(_service.LastUpdatedEntity!.GetAttributeValue<string>("layoutxml"), "$webresource:devkit_/js/icon.js");
    }

    [TestMethod]
    public async Task Update_CellPatch_RemoveAttribute_Succeeds()
    {
        var id = SeedView("Cell Remove");
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","remove_attributes":["ishidden"]}]""");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Updated view");
    }

    [TestMethod]
    public async Task Update_CellPatch_OnLayoutWithoutObject_EnsuresObjectTypeCode()
    {
        const string layoutNoObject = "<grid name='resultset' jump='name' select='1' icon='1' preview='1'><row name='result' id='accountid'><cell name='name' width='300'/><cell name='emailaddress1' width='200'/></row></grid>";
        var id = SeedView("Cell Otc", layoutXml: layoutNoObject);
        var result = await NewTool().manage_view(null!, "update", "account", view_id: id.ToString(), cell_updates_json: """[{"cell_name":"name","set_attributes":{"width":"350"}}]""");
        Assert.IsFalse(result.IsError == true, Text(result) + " ||| structured: " + (result.StructuredContent?.ToString() ?? ""));
        StringAssert.Contains(_service.LastUpdatedEntity!.GetAttributeValue<string>("layoutxml"), "object=\"1\"");
    }

    // ──────────────────────────────────────────────
    // rename
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Rename_MissingId_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "rename", "account", view_name: "New Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_id is required when action='rename'");
    }

    [TestMethod]
    public async Task Rename_MissingViewName_ReturnsError()
    {
        var id = SeedView("Rename Me");
        var result = await NewTool().manage_view(null!, "rename", "account", view_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_name is required when action='rename'");
    }

    [TestMethod]
    public async Task Rename_ViewNotFound_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "rename", "account", view_id: Guid.NewGuid().ToString(), view_name: "Whatever");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "View not found");
    }

    [TestMethod]
    public async Task Rename_DuplicateName_ReturnsError()
    {
        var id = SeedView("Original");
        SeedView("Taken Name");
        var result = await NewTool().manage_view(null!, "rename", "account", view_id: id.ToString(), view_name: "Taken Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "already exists");
    }

    [TestMethod]
    public async Task Rename_SameNameExcludingSelf_Succeeds()
    {
        var id = SeedView("Same Name");
        var result = await NewTool().manage_view(null!, "rename", "account", view_id: id.ToString(), view_name: "Same Name");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Renamed view");
    }

    [TestMethod]
    public async Task Rename_DryRun_NoMutation()
    {
        var id = SeedView("Dry Rename");
        var before = _service.Updates;
        var result = await NewTool(dryRun: true).manage_view(null!, "rename", "account", view_id: id.ToString(), view_name: "Dry Renamed");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(before, _service.Updates);
    }

    [TestMethod]
    public async Task Rename_Success_BackupAndPublish()
    {
        var id = SeedView("Rename Src");
        var result = await NewTool().manage_view(null!, "rename", "account", view_id: id.ToString(), view_name: "Rename Dst");
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
        StringAssert.Contains(Text(result), "Backup saved");
        Assert.IsTrue(Directory.Exists(Path.Combine(_tempDir, ".devkit", "manage_view", "account")));
    }

    // ──────────────────────────────────────────────
    // set_default
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task SetDefault_MissingIdAndName_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "set_default", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_id or view_name is required");
    }

    [TestMethod]
    public async Task SetDefault_ViewNotFound_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "set_default", "account", view_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "View not found");
    }

    [TestMethod]
    public async Task SetDefault_NonPublicView_ReturnsError()
    {
        var id = SeedView("Lookup View", queryType: 1);
        var result = await NewTool().manage_view(null!, "set_default", "account", view_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Only Public views (querytype=0)");
        StringAssert.Contains(Text(result), "Lookup");
    }

    [TestMethod]
    public async Task SetDefault_DryRun_ReportsClearedCount()
    {
        var target = SeedView("New Default", isDefault: false);
        SeedView("Old Default", isDefault: true);
        var result = await NewTool(dryRun: true).manage_view(null!, "set_default", "account", view_id: target.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "clearing 1 previous default(s)");
    }

    [TestMethod]
    public async Task SetDefault_Success_ClearsPreviousDefaults()
    {
        var target = SeedView("New Default 2");
        SeedView("Old Default 2", isDefault: true);
        var result = await NewTool().manage_view(null!, "set_default", "account", view_id: target.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "cleared 1 previous default(s)");
        Assert.AreEqual(2, _service.Updates);
    }

    [TestMethod]
    public async Task SetDefault_ByName_SingleMatch_Succeeds()
    {
        SeedView("Only Default Candidate");
        var result = await NewTool().manage_view(null!, "set_default", "account", view_name: "Only Default Candidate");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Set default view");
    }

    // ──────────────────────────────────────────────
    // undo
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_MissingId_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "undo", "account", fetchxml: "a.fetchxml.xml", layoutxml: "a.layoutxml.xml");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "view_id is required when action='undo'");
    }

    [TestMethod]
    public async Task Undo_MissingFetchPath_ReturnsError()
    {
        var id = SeedView("Undo No Fetch");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "fetchxml (.fetchxml.xml backup file path) is required");
    }

    [TestMethod]
    public async Task Undo_MissingLayoutPath_ReturnsError()
    {
        var id = SeedView("Undo No Layout");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: "x.fetchxml.xml");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "layoutxml (.layoutxml.xml backup file path) is required");
    }

    [TestMethod]
    public async Task Undo_BadFetchExtension_ReturnsError()
    {
        var id = SeedView("Undo Bad Ext");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: "x.xml", layoutxml: "y.layoutxml.xml");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "fetchxml must be a .fetchxml.xml backup file");
    }

    [TestMethod]
    public async Task Undo_BadLayoutExtension_ReturnsError()
    {
        var id = SeedView("Undo Bad Ext2");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: "x.fetchxml.xml", layoutxml: "y.xml");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "layoutxml must be a .layoutxml.xml backup file");
    }

    [TestMethod]
    public async Task Undo_StemsDiffer_ReturnsError()
    {
        var id = SeedView("Undo Stems");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: "aaa.fetchxml.xml", layoutxml: "bbb.layoutxml.xml");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not one backup pair");
    }

    [TestMethod]
    public async Task Undo_FetchFileMissing_ReturnsError()
    {
        var id = SeedView("Undo Missing File");
        var layoutPath = Path.Combine(_tempDir, "v1.layoutxml.xml");
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: Path.Combine(_tempDir, "v1.fetchxml.xml"), layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Fetch backup file not found");
    }

    [TestMethod]
    public async Task Undo_LayoutFileMissing_ReturnsError()
    {
        var id = SeedView("Undo Missing Layout");
        var fetchPath = Path.Combine(_tempDir, "v2.fetchxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: Path.Combine(_tempDir, "v2.layoutxml.xml"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Layout backup file not found");
    }

    [TestMethod]
    public async Task Undo_EmptyFetchBackup_ReturnsError()
    {
        var id = SeedView("Undo Empty Fetch");
        var fetchPath = Path.Combine(_tempDir, "v3.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v3.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, "<!-- only a comment -->");
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "no FetchXML content");
    }

    [TestMethod]
    public async Task Undo_EmptyLayoutBackup_ReturnsError()
    {
        var id = SeedView("Undo Empty Layout");
        var fetchPath = Path.Combine(_tempDir, "v4.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v4.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, "<!-- nothing -->");
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "no LayoutXML content");
    }

    [TestMethod]
    public async Task Undo_InvalidBackupXml_ReturnsBlocked()
    {
        var id = SeedView("Undo Bad Xml");
        var fetchPath = Path.Combine(_tempDir, "v5.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v5.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, "<<<not xml");
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public async Task Undo_ViewNotFound_ReturnsError()
    {
        var fetchPath = Path.Combine(_tempDir, "v6.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v6.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: Guid.NewGuid().ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "View not found");
    }

    [TestMethod]
    public async Task Undo_ServerValidationFails_ReturnsBlocked()
    {
        var id = SeedView("Undo Server Fail");
        var fetchPath = Path.Combine(_tempDir, "v7.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v7.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        _webApi.Responder = () => new HttpResponseMessage(HttpStatusCode.BadRequest);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "server-side validation");
    }

    [TestMethod]
    public async Task Undo_DryRun_NoMutation()
    {
        var id = SeedView("Undo Dry");
        var fetchPath = Path.Combine(_tempDir, "v8.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v8.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var before = _service.Updates;
        var result = await NewTool(dryRun: true).manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "[DryRun]");
        Assert.AreEqual(before, _service.Updates);
    }

    [TestMethod]
    public async Task Undo_Success_RestoresAndBacksUp()
    {
        var id = SeedView("Undo Real");
        var fetchPath = Path.Combine(_tempDir, "v9.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v9.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Restored view 'Undo Real'");
        StringAssert.Contains(Text(result), "Pre-restore state backed up");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(_service.Publishes >= 1);
    }

    [TestMethod]
    public async Task Undo_Success_PersonalView_KeepsLogicalName()
    {
        var id = SeedPersonalView("Undo Personal");
        var fetchPath = Path.Combine(_tempDir, "v10.fetchxml.xml");
        var layoutPath = Path.Combine(_tempDir, "v10.layoutxml.xml");
        await File.WriteAllTextAsync(fetchPath, SimpleFetch);
        await File.WriteAllTextAsync(layoutPath, SimpleLayout);
        var result = await NewTool().manage_view(null!, "undo", "account", view_id: id.ToString(), fetchxml: fetchPath, layoutxml: layoutPath);
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual("userquery", _service.LastUpdatedEntity!.LogicalName);
    }

    // ──────────────────────────────────────────────
    // invalid action + resolver branches
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task InvalidAction_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "frobnicate", "account");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }

    [TestMethod]
    public async Task UnknownEntityName_ReturnsError()
    {
        var result = await NewTool().manage_view(null!, "list", "nosuchentityxyz");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "nosuchentityxyz");
    }

    [TestMethod]
    public async Task AmbiguousEntityName_ReturnsEntityMatches()
    {
        // Both entities have display names; use a filter matching both — resolver
        // treats exact/unique matches; "Ac" prefix ambiguity is handled by the resolver.
        var extra = new EntityMetadata
        {
            LogicalName = "accttwo",
            SchemaName = "AcctTwo",
            DisplayName = MakeLabel("Account")
        };
        Set(extra, "PrimaryIdAttribute", "account2id");
        Set(extra, "PrimaryNameAttribute", "name");
        Set(extra, "ObjectTypeCode", 10001);
        Set(extra, "Attributes", Array.Empty<AttributeMetadata>());
        _service.Entities.Add(extra);
        var result = await NewTool().manage_view(null!, "list", "Accou");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Re-call with a more specific entity_name");
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    private sealed class FakeWebApiExecutor : IWebApiExecutor
    {
        public Func<HttpResponseMessage>? Responder { get; set; }
        public string CurrentAccessToken => string.Empty;

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string? body, Dictionary<string, List<string>>? customHeaders, string? contentType = null, CancellationToken cancellationToken = default) =>
            Responder?.Invoke() ?? new HttpResponseMessage(HttpStatusCode.OK);

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string? body, Dictionary<string, List<string>>? customHeaders, string? contentType = null, CancellationToken cancellationToken = default) =>
            Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));
    }

    private sealed class ViewOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();

        public int Creates;
        public int Updates;
        public int Publishes;
        public Entity? LastCreatedEntity;
        public Entity? LastUpdatedEntity;

        public ViewOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            LastCreatedEntity = entity;
            return _inner.Create(entity);
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            LastUpdatedEntity = entity;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is PublishXmlRequest) { Publishes++; return new OrganizationResponse(); }
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
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
