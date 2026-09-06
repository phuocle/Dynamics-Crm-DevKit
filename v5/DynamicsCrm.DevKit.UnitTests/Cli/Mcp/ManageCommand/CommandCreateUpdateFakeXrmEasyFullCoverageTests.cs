using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
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
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageCommand;

/// <summary>
/// FakeXrmEasy-driven coverage for CommandCreateUpdate.cs (HandleCreate, HandleUpdate).
/// All read paths (RetrieveAllEntities, RetrieveEntity, RetrieveMultiple) and mutating
/// SDK calls (Create, Update, Publish) go through the CommandOrgService decorator.
/// </summary>
[TestClass]
public sealed class CommandCreateUpdateFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private CommandOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        // Seed organization row + a publisher for DisplayNameFirstResolver
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });

        _service = new CommandOrgService(_ctx.GetOrganizationService());
    }

    private ManageCommandTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static Guid SeedAppModule(IXrmFakedContext ctx, string name = "My App", string unique = "myapp")
    {
        var id = Guid.NewGuid();
        ctx.GetOrganizationService().Create(new Entity("appmodule", id)
        {
            ["appmoduleid"] = id,
            ["name"] = name,
            ["uniquename"] = unique
        });
        return id;
    }

    private static void SeedEntityMetadata(CommandOrgService svc, string logicalName, string displayName = "Account", string schemaName = "Account", string prefix = "devkit")
    {
        svc.Entities.Add(new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            DisplayName = new Label(displayName, 1033) { UserLocalizedLabel = new LocalizedLabel(displayName, 1033) }
        });
    }

    // ──────────────────────────────────────────────
    // Create — validation paths (no network needed)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_DryRun_ReturnsPreviewWithoutMutation()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        Assert.AreEqual(0, _service.Creates, "DryRun must not call Create");
    }

    [TestMethod]
    public void Create_MissingEntityName_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            location: "form", label: "Go", app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void Create_MissingLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", label: "Go", app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "location is required");
    }

    [TestMethod]
    public void Create_MissingLabel_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "label is required");
    }

    [TestMethod]
    public void Create_InvalidLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "BAD_LOC", label: "Go", app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid location");
    }

    [TestMethod]
    public void Create_InvalidAppId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go", app_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not a valid app_id GUID");
    }

    [TestMethod]
    public void Create_MissingApp_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "app_id or app_name is required");
    }

    [TestMethod]
    public void Create_InvalidOnclickType_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(), onclick_type: "BAD_TYPE");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type");
    }

    [TestMethod]
    public void Create_EntityNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "ghost", location: "form", label: "Go", app_id: appId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void Create_IconWebResourceNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(), icon_webresource: "ghost_/icon_.svg");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "web_resource 'ghost_/icon_.svg'");
    }

    [TestMethod]
    public void Create_JsWebResourceNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();
        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(),
            onclick_type: "javascript", javascript_webresource: "ghost_.js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "web_resource 'ghost_.js'");
    }

    // ──────────────────────────────────────────────
    // Create — happy paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_MinimalInput_CreatesEntityAndPublishes()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go", app_id: appId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Command 'Go' created successfully");
        Assert.IsTrue(_service.Creates >= 1, "HandleCreate should call Create");
        Assert.IsTrue(_service.Publishes >= 1, "HandleCreate should publish entity");
    }

    [TestMethod]
    public void Create_WithFontIconAndTooltip_NormalizesIconAndAttachesTooltip()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        _service.WebResources[Guid.NewGuid()] = "icon_/icon_.svg";
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(),
            font_icon: "SalesPlaybook",
            tooltip_title: "Tip Title",
            tooltip_description: "Tip Desc",
            sequence: 200,
            hidden: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(_service.LastCreatedEntity?.GetAttributeValue<string>("fonticon") == "$clientsvg:SalesPlaybook");
        Assert.AreEqual("Tip Title", _service.LastCreatedEntity?.GetAttributeValue<string>("buttontooltiptitle"));
        Assert.AreEqual(200m, _service.LastCreatedEntity?.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual(true, _service.LastCreatedEntity?.GetAttributeValue<bool>("hidden"));
    }

    [TestMethod]
    public void Create_WithFontIconAlreadyPrefixed_DoesNotDoublePrefix()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(), font_icon: "$webresource:foo.svg");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("$webresource:foo.svg", _service.LastCreatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void Create_WithIconWebResourceGuid_ResolvesAndAttaches()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var iconId = Guid.NewGuid();
        _service.WebResources[iconId] = "icon_/icon_.svg";
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(), icon_webresource: iconId.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        var iconRef = _service.LastCreatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid");
        Assert.IsNotNull(iconRef);
        Assert.AreEqual(iconId, iconRef.Id);
    }

    [TestMethod]
    public void Create_JavaScriptOnClickOnForm_AttachesDefaultCrmParameters()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var wrId = Guid.NewGuid();
        _service.WebResources[wrId] = "lib_/lib_.js";
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(),
            onclick_type: "javascript",
            javascript_webresource: wrId.ToString(),
            javascript_function: "Contoso.go");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("[{\"type\":5},{\"type\":2},{\"type\":3}]",
            _service.LastCreatedEntity?.GetAttributeValue<string>("onclickeventjavascriptparameters"));
    }

    [TestMethod]
    public void Create_JavaScriptOnClickOnMainGrid_AttachesGridDefaultParameters()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "main_grid", label: "Go",
            app_id: appId.ToString(), onclick_type: "javascript");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
            _service.LastCreatedEntity?.GetAttributeValue<string>("onclickeventjavascriptparameters"));
    }

    [TestMethod]
    public void Create_JavaScriptOnClickOnDashboard_DoesNotSetDefaultParameters()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "dashboard", label: "Go",
            app_id: appId.ToString(), onclick_type: "javascript");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastCreatedEntity?.GetAttributeValue<string>("onclickeventjavascriptparameters"));
    }

    [TestMethod]
    public void Create_ZeroSequence_UsesDefault()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go",
            app_id: appId.ToString(), sequence: 0);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(100m, _service.LastCreatedEntity?.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void Create_AppNameResolution_ResolvesToAppId()
    {
        var appId = SeedAppModule(_ctx, name: "Sales App", unique: "salesapp");
        SeedEntityMetadata(_service, "account");
        _service.Apps[appId] = "Sales App";
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go", app_name: "Sales App");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(_service.Creates >= 1);
    }

    [TestMethod]
    public void Create_AppNameNotFound_ReturnsError()
    {
        SeedEntityMetadata(_service, "account");
        var tool = NewTool();

        var result = tool.manage_command(action: "create",
            entity_name: "account", location: "form", label: "Go", app_name: "Ghost App");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "app_name");
    }

    // ──────────────────────────────────────────────
    // Update — validation paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_DryRun_ReturnsPreviewWithoutMutation()
    {
        var cmdId = Guid.NewGuid();
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), label: "New");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void Update_MissingCommandId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update", label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "command_id is required");
    }

    [TestMethod]
    public void Update_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: "not-a-guid", label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not a valid GUID");
    }

    [TestMethod]
    public void Update_CommandNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: Guid.NewGuid().ToString(), label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void Update_NoFields_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No fields to update");
    }

    [TestMethod]
    public void Update_InvalidOnclickType_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), onclick_type: "BAD");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type");
    }

    [TestMethod]
    public void Update_JsWebResourceNotFound_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), javascript_webresource: "ghost_.js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "web_resource 'ghost_.js'");
    }

    [TestMethod]
    public void Update_IconWebResourceNotFound_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), icon_webresource: "ghost_.svg");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "web_resource 'ghost_.svg'");
    }

    // ──────────────────────────────────────────────
    // Update — happy paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_LabelOnly_UpdatesAndPublishes()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();

        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), label: "Save");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "label='Save'");
        Assert.AreEqual("Save", _service.LastUpdatedEntity?.GetAttributeValue<string>("buttonlabeltext"));
        Assert.IsTrue(_service.Updates >= 1);
        Assert.IsTrue(_service.Publishes >= 1);
    }

    [TestMethod]
    public void Update_AllFields_AppliesEachChange()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var wrId = Guid.NewGuid();
        _service.WebResources[wrId] = "lib_/lib_.js";
        var tool = NewTool();

        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(),
            label: "Save", sequence: 250, onclick_type: "javascript",
            javascript_webresource: wrId.ToString(), javascript_function: "fn",
            font_icon: "Accept", tooltip_title: "Tip", tooltip_description: "Body");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var e = _service.LastUpdatedEntity!;
        Assert.AreEqual("Save", e.GetAttributeValue<string>("buttonlabeltext"));
        Assert.AreEqual(250m, e.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual(2, e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value);
        Assert.AreEqual("fn", e.GetAttributeValue<string>("onclickeventjavascriptfunctionname"));
        Assert.AreEqual("$clientsvg:Accept", e.GetAttributeValue<string>("fonticon"));
        Assert.AreEqual("Tip", e.GetAttributeValue<string>("buttontooltiptitle"));
    }

    [TestMethod]
    public void Update_FontIconNone_ClearsFontIcon()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account",
            ["fonticon"] = "old"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), font_icon: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void Update_IconWebResourceNone_ClearsIconWebResource()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account",
            ["iconwebresourceid"] = new EntityReference("webresource", Guid.NewGuid())
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), icon_webresource: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid"));
    }

    [TestMethod]
    public void Update_IconWebResourceByGuid_ResolvesAndAttaches()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var iconId = Guid.NewGuid();
        _service.WebResources[iconId] = "icon_/icon_.svg";
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), icon_webresource: iconId.ToString());
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(iconId, _service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid")?.Id);
    }

    [TestMethod]
    public void Update_FontIconPrefixed_NormalizesKeepsValue()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["name"] = "devkit.account.Go.Form.Button",
            ["buttonlabeltext"] = "Go",
            ["contextvalue"] = "account"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update", command_id: cmdId.ToString(), font_icon: "$webresource:foo.svg");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("$webresource:foo.svg", _service.LastUpdatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    // ──────────────────────────────────────────────
    // IOrganizationService decorator
    // ──────────────────────────────────────────────

    private sealed class CommandOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();
        public readonly Dictionary<Guid, string> WebResources = new();
        public readonly Dictionary<Guid, string> Apps = new();

        public int Creates;
        public int Updates;
        public int Publishes;
        public Entity? LastCreatedEntity;
        public Entity? LastUpdatedEntity;

        public CommandOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            LastCreatedEntity = entity;
            return _inner.Create(entity);
        }
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            _inner.Retrieve(entityName, id, columnSet);
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
            if (request is RetrieveAllEntitiesRequest retrieveAll)
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
            if (request is Microsoft.Crm.Sdk.Messages.RetrieveEntityRibbonRequest)
            {
                var resp = new Microsoft.Crm.Sdk.Messages.RetrieveEntityRibbonResponse();
                resp.Results["CompressedEntityXml"] = MakeEmptyZip();
                return resp;
            }
            if (request is Microsoft.Crm.Sdk.Messages.ExportSolutionRequest)
            {
                var resp = new Microsoft.Crm.Sdk.Messages.ExportSolutionResponse();
                resp.Results["ExportSolutionFile"] = MakeEmptyZip();
                return resp;
            }
            return _inner.Execute(request);
        }
        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            // appmodule lookups — match display name like-condition
            if (query is QueryExpression qe && string.Equals(qe.EntityName, "appmodule", StringComparison.OrdinalIgnoreCase))
            {
                var rows = new EntityCollection();
                var terms = ExtractLikeTerms(qe.Criteria);
                foreach (var kvp in Apps)
                {
                    if (terms.Count == 0 || terms.Any(t => kvp.Value.Contains(t, StringComparison.OrdinalIgnoreCase)))
                        rows.Entities.Add(new Entity("appmodule", kvp.Key)
                        {
                            ["appmoduleid"] = kvp.Key,
                            ["appmoduleidunique"] = kvp.Key,
                            ["name"] = kvp.Value,
                            ["uniquename"] = kvp.Value.ToLowerInvariant()
                        });
                }
                return rows;
            }
            // webresource lookups — match by name or guid
            if (query is QueryExpression qe2 && string.Equals(qe2.EntityName, "webresource", StringComparison.OrdinalIgnoreCase))
            {
                var rows = new EntityCollection();
                var terms = ExtractLikeTerms(qe2.Criteria);
                foreach (var kvp in WebResources)
                {
                    var matches = terms.Count == 0 || terms.Any(t => kvp.Value.Contains(t, StringComparison.OrdinalIgnoreCase));
                    if (!matches && Guid.TryParse(terms.FirstOrDefault(), out var g) && g == kvp.Key) matches = true;
                    if (matches)
                        rows.Entities.Add(new Entity("webresource", kvp.Key) { ["name"] = kvp.Value });
                }
                return rows;
            }
            // entity lookups (for publisher prefix / contextentity)
            if (query is QueryExpression qe3 && string.Equals(qe3.EntityName, "entity", StringComparison.OrdinalIgnoreCase))
            {
                var rows = new EntityCollection();
                var terms = ExtractLikeTerms(qe3.Criteria);
                foreach (var meta in Entities)
                {
                    if (terms.Count == 0 || terms.Any(t => meta.LogicalName.Contains(t, StringComparison.OrdinalIgnoreCase)))
                        rows.Entities.Add(new Entity("entity", Guid.NewGuid()) { ["logicalname"] = meta.LogicalName });
                }
                return rows;
            }
            return _inner.RetrieveMultiple(query);
        }

        private static List<string> ExtractLikeTerms(FilterExpression? filter)
        {
            var terms = new List<string>();
            if (filter == null) return terms;
            foreach (var cond in filter.Conditions)
            {
                if (cond.Operator != ConditionOperator.Like && cond.Operator != ConditionOperator.Equal) continue;
                foreach (var v in cond.Values)
                {
                    var s = v?.ToString();
                    if (string.IsNullOrEmpty(s)) continue;
                    if (s.StartsWith("%") && s.EndsWith("%")) s = s.Substring(1, s.Length - 2);
                    terms.Add(s);
                }
            }
            return terms;
        }
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        private static byte[] MakeEmptyZip()
        {
            using var ms = new System.IO.MemoryStream();
            using (var archive = new System.IO.Compression.ZipArchive(ms, System.IO.Compression.ZipArchiveMode.Create, true))
            {
                using var writer = new System.IO.StreamWriter(archive.CreateEntry("customizations.xml").Open());
                writer.Write("<ImportExportXml/>");
            }
            return ms.ToArray();
        }
    }
}
