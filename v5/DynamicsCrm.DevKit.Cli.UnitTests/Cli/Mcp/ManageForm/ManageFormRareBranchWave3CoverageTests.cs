using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageForm;

/// <summary>
/// Rare-branch coverage for ManageFormTool: create/solution validation gates,
/// form-type and entity mismatch errors on detail/update, the retrieve-unpublished
/// fallback, backup JSON fallback paths, and the XML declaration strip helper.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageFormRareBranchWave3CoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;
    private Guid _entityFormId;
    private Guid _dashboardFormId;

    private const string ValidFormXml =
        "<form><tabs><tab name=\"tab_general\" id=\"{D2B7AB0D-AD02-4B3E-9C61-C72D8D9F2A11}\" showlabel=\"true\" locklevel=\"0\" expanded=\"true\"><labels><label description=\"General\" languagecode=\"1033\" /></labels><columns><column width=\"100%\"><sections><section name=\"general_section\" id=\"{1D3C5F62-9A44-4B7F-8E1B-6C7B54B0A331}\" showlabel=\"false\" locklevel=\"0\" columns=\"1\" labelwidth=\"115\"><labels><label description=\"General\" languagecode=\"1033\" /></labels><rows /></section></sections></column></columns></tab></tabs></form>";

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-form-wave3-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
        _entityFormId = Guid.NewGuid();
        _dashboardFormId = Guid.NewGuid();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public async Task Create_Validation_Gates()
    {
        var tool = NewTool(canCreateForms: true);
        var missingName = await tool.manage_form(null!, "create", entity_name: "account", form_type: 7);
        StringAssert.Contains(Text(missingName), "form_name must contain 1 to 100 characters");

        var withFormId = await tool.manage_form(null!, "create", entity_name: "account",
            form_name: "OK", form_type: 7, form_id: Guid.NewGuid().ToString());
        StringAssert.Contains(Text(withFormId), "does not accept form_id or operations");

        var missingXml = await tool.manage_form(null!, "create", entity_name: "account", form_name: "OK", form_type: 7);
        StringAssert.Contains(Text(missingXml), "formxml is required when action='create'");

        var missingFile = await tool.manage_form(null!, "create", entity_name: "account",
            form_name: "OK", form_type: 7, formxml: Path.Combine(_tempDir, "no-such-file.xml"));
        StringAssert.Contains(Text(missingFile), "FormXML file not found at");
    }

    [TestMethod]
    public async Task Create_Blocked_When_Entity_Cannot_Create_Forms()
    {
        var tool = NewTool(canCreateForms: false);
        var blocked = await tool.manage_form(null!, "create", entity_name: "account",
            form_name: "OK", form_type: 7, formxml: ValidFormXml);
        StringAssert.Contains(Text(blocked), "Dataverse does not allow new forms on 'account'");
    }

    [TestMethod]
    public async Task SolutionName_Gates()
    {
        var tool = NewTool(canCreateForms: true);
        var unsupported = await tool.manage_form(null!, "list", entity_name: "account", solution_name: "all_in_one");
        StringAssert.Contains(Text(unsupported), "solution_name is supported for");

        var unresolved = await tool.manage_form(null!, "create", entity_name: "account",
            form_name: "OK", form_type: 7, formxml: ValidFormXml, solution_name: "NoSuchSolution");
        StringAssert.Contains(Text(unresolved), "Use inspect_metadata(resource='solution_components') to find valid solution names");
    }

    [TestMethod]
    public async Task Detail_And_Update_FormType_Mismatches()
    {
        var tool = NewTool(canCreateForms: true);
        var detailWithoutEntity = await tool.manage_form(null!, "detail",
            form_id: _entityFormId.ToString());
        StringAssert.Contains(Text(detailWithoutEntity), "is not a system dashboard");

        var entityNameOnDashboard = await tool.manage_form(null!, "update",
            entity_name: "account", form_id: _dashboardFormId.ToString(), formxml: ValidFormXml);
        StringAssert.Contains(Text(entityNameOnDashboard), "is a system dashboard. Omit entity_name");

        var mismatchedEntity = await tool.manage_form(null!, "update",
            entity_name: "contact", form_id: _entityFormId.ToString(), formxml: ValidFormXml);
        StringAssert.Contains(Text(mismatchedEntity), "belongs to 'account', not 'contact'");

        var validBackup = Path.Combine(_tempDir, "undo-" + Guid.NewGuid().ToString("N") + ".json");
        File.WriteAllText(validBackup, JsonSerializer.Serialize(new Dictionary<string, string>
        {
            ["entity"] = "account",
            ["formId"] = Guid.Empty.ToString(),
            ["formName"] = "Backup",
            ["timestamp"] = "2026-11-22T00:00:00",
            ["formxml"] = ValidFormXml
        }));
        var undoTypeMismatch = await tool.manage_form(null!, "undo", entity_name: "account",
            form_id: _dashboardFormId.ToString(), formxml: validBackup);
        StringAssert.Contains(Text(undoTypeMismatch), "does not match the requested form type");
    }

    [TestMethod]
    public async Task Undo_InvalidBackupJson_Falls_Back_To_Raw_Read()
    {
        var tool = NewTool(canCreateForms: true);
        var badBackup = Path.Combine(_tempDir, "bad-" + Guid.NewGuid().ToString("N") + ".json");
        File.WriteAllText(badBackup, "<form>this is not json</form>");
        var result = await tool.manage_form(null!, "undo", entity_name: "account",
            form_id: _entityFormId.ToString(), operations: badBackup);
        Assert.IsTrue(result.IsError);
    }

    [TestMethod]
    public void StripXmlDeclaration_Without_Declaration_Returns_Input()
    {
        var tool = NewTool(canCreateForms: true);
        var method = typeof(ManageFormTool).GetMethod("StripXmlDeclaration", BindingFlags.NonPublic | BindingFlags.Instance)
            ?? typeof(ManageFormTool).GetMethod("StripXmlDeclaration", BindingFlags.NonPublic | BindingFlags.Static)!;
        var input = "<form><tabs /></form>";
        var result = method.IsStatic
            ? (string)method.Invoke(null, new object[] { input })!
            : (string)method.Invoke(tool, new object[] { input })!;
        Assert.AreEqual(input, result);
    }

    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // fixtures
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

    private ManageFormTool NewTool(bool canCreateForms)
    {
        var ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        var service = ctx.GetOrganizationService();
        service.Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        SeedForm(service, _entityFormId, "Seed Form", "account", 2);
        SeedForm(service, _dashboardFormId, "Seed Dashboard", "account", 0);

        var decorated = new FormScriptOrgService(service)
        {
            Entities =
            {
                MakeEntityMetadata("account", "Account", canCreateForms),
                MakeEntityMetadata("contact", "Contact", true)
            }
        };
        return new ManageFormTool(decorated, new McpDryRunOptions(), new McpExecutionContext(false));
    }

    private static void SeedForm(IOrganizationService service, Guid id, string name, string entity, int type)
    {
        service.Create(new Entity("systemform", id)
        {
            ["formid"] = id,
            ["name"] = name,
            ["objecttypecode"] = entity,
            ["type"] = new OptionSetValue(type),
            ["formactivationstate"] = new OptionSetValue(1),
            ["isdefault"] = false,
            ["ismanaged"] = false,
            ["version"] = 1,
            ["description"] = "seeded",
            ["formxml"] = ValidFormXml
        });
    }

    private static void Set(object target, string property, object value) =>
        target.GetType().GetProperty(property)!.SetValue(target, value);

    private static EntityMetadata MakeEntityMetadata(string logical, string display, bool canCreateForms)
    {
        var name = new StringAttributeMetadata { LogicalName = "name", SchemaName = "name", DisplayName = MakeLabel("Name") };
        var meta = new EntityMetadata { LogicalName = logical, SchemaName = display, DisplayName = MakeLabel(display) };
        Set(meta, "PrimaryIdAttribute", logical + "id");
        Set(meta, "PrimaryNameAttribute", "name");
        Set(meta, "ObjectTypeCode", 1);
        Set(meta, "Attributes", new AttributeMetadata[] { name });
        Set(meta, "CanCreateForms", new BooleanManagedProperty(canCreateForms));
        return meta;
    }

    private static Label MakeLabel(string text) =>
        new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private static string Text(CallToolResult r) =>
        r.Content.OfType<TextContentBlock>().FirstOrDefault()?.Text ?? string.Empty;

    private sealed class FormScriptOrgService(IOrganizationService inner) : IOrganizationService
    {
        public readonly List<EntityMetadata> Entities = new();
        public readonly List<string> Roles = new() { "System Administrator" };

        public Guid Create(Entity entity) => inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => inner.Update(entity);
        public void Delete(string entityName, Guid id) => inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is RetrieveUnpublishedMultipleRequest)
            {
                var unpublished = new RetrieveUnpublishedMultipleResponse();
                unpublished.Results["EntityCollection"] = new EntityCollection();
                return unpublished;
            }
            if (request is PublishXmlRequest)
                return new OrganizationResponse();
            if (request is AddSolutionComponentRequest)
                return new OrganizationResponse();
            if (request is RetrieveAllEntitiesRequest all)
            {
                var resp = new RetrieveAllEntitiesResponse();
                resp.Results["EntityMetadata"] = Entities.ToArray();
                return resp;
            }
            if (request is RetrieveEntityRequest retrieveEntity)
            {
                var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                var resp = new RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta ?? new EntityMetadata { LogicalName = retrieveEntity.LogicalName };
                return resp;
            }
            if (request is WhoAmIRequest who)
            {
                var resp = new WhoAmIResponse();
                resp.Results["UserId"] = Guid.NewGuid();
                return resp;
            }
            return inner.Execute(request);
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
            return inner.RetrieveMultiple(query);
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    }
}
