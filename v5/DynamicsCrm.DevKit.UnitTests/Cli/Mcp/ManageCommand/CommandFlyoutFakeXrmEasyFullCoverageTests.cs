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
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageCommand;

/// <summary>
/// FakeXrmEasy-driven coverage for CommandFlyout.cs:
///   - HandleAddFlyout (validation, dropdown/group/items, all option branches)
///   - HandleUpdateFlyout (validation, all update fields, type-check)
///   - HandleAddSplitButton (validation, JS main, dropdown/group/items)
///   - HandleUpdateSplitButton (validation, all update fields, type-check)
///   - HandleAddFlyoutItem (validation, group lookup, item creation)
///   - HandleRemoveFlyoutItem (validation, type-check, parent-check, delete)
///   - CreateFlyoutItem, FindFlyoutGroup, CountFlyoutItems, DeriveFlyoutSafeLabel
/// </summary>
[TestClass]
public sealed class CommandFlyoutFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private FlyoutOrgService _service = null!;

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

        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new FlyoutOrgService(_ctx.GetOrganizationService());

        // Register appaction metadata so EntityReference("appaction", id) on appactionid/parentappactionid
        // is accepted by FakeXrmEasy, and FetchExpression against appaction works.
        _ctx.InitializeMetadata(BuildAppActionMetadata());

        // Register appmodule metadata so EntityReference("appmodule", id) on appmoduleid is accepted.
        _ctx.InitializeMetadata(BuildAppModuleMetadata());
    }

    private static Microsoft.Xrm.Sdk.Metadata.EntityMetadata BuildAppActionMetadata()
    {
        var attrs = new List<Microsoft.Xrm.Sdk.Metadata.AttributeMetadata>
        {
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "appactionid" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "name" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "uniquename" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "buttonlabeltext" },
            new Microsoft.Xrm.Sdk.Metadata.IntegerAttributeMetadata { LogicalName = "type" },
            new Microsoft.Xrm.Sdk.Metadata.IntegerAttributeMetadata { LogicalName = "location" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "contextvalue" },
            new Microsoft.Xrm.Sdk.Metadata.IntegerAttributeMetadata { LogicalName = "onclickeventtype" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "onclickeventjavascriptfunctionname" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "fonticon" },
            new Microsoft.Xrm.Sdk.Metadata.IntegerAttributeMetadata { LogicalName = "origin" },
            new Microsoft.Xrm.Sdk.Metadata.DecimalAttributeMetadata { LogicalName = "sequence" },
            new Microsoft.Xrm.Sdk.Metadata.BooleanAttributeMetadata { LogicalName = "hidden" },
            new Microsoft.Xrm.Sdk.Metadata.BooleanAttributeMetadata { LogicalName = "isdisabled" },
            new Microsoft.Xrm.Sdk.Metadata.IntegerAttributeMetadata { LogicalName = "visibilitytype" },
            new Microsoft.Xrm.Sdk.Metadata.LookupAttributeMetadata { LogicalName = "parentappactionid" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "clienttype" },
            new Microsoft.Xrm.Sdk.Metadata.LookupAttributeMetadata { LogicalName = "appmoduleid" },
            new Microsoft.Xrm.Sdk.Metadata.LookupAttributeMetadata { LogicalName = "iconwebresourceid" },
            new Microsoft.Xrm.Sdk.Metadata.LookupAttributeMetadata { LogicalName = "onclickeventjavascriptwebresourceid" },
            new Microsoft.Xrm.Sdk.Metadata.LookupAttributeMetadata { LogicalName = "contextentity" },
            new Microsoft.Xrm.Sdk.Metadata.StateAttributeMetadata { LogicalName = "statecode" }
        };
        var meta = new Microsoft.Xrm.Sdk.Metadata.EntityMetadata
        {
            LogicalName = "appaction",
            SchemaName = "AppAction",
            DisplayName = new Microsoft.Xrm.Sdk.Label("AppAction", 1033) { UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel("AppAction", 1033) }
        };
        typeof(Microsoft.Xrm.Sdk.Metadata.EntityMetadata)
            .GetProperty(nameof(Microsoft.Xrm.Sdk.Metadata.EntityMetadata.Attributes))!
            .SetValue(meta, attrs.ToArray());
        return meta;
    }

    private static Microsoft.Xrm.Sdk.Metadata.EntityMetadata BuildAppModuleMetadata()
    {
        var attrs = new List<Microsoft.Xrm.Sdk.Metadata.AttributeMetadata>
        {
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "appmoduleid" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "name" },
            new Microsoft.Xrm.Sdk.Metadata.StringAttributeMetadata { LogicalName = "uniquename" }
        };
        var meta = new Microsoft.Xrm.Sdk.Metadata.EntityMetadata
        {
            LogicalName = "appmodule",
            SchemaName = "AppModule",
            DisplayName = new Microsoft.Xrm.Sdk.Label("App Module", 1033) { UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel("App Module", 1033) }
        };
        typeof(Microsoft.Xrm.Sdk.Metadata.EntityMetadata)
            .GetProperty(nameof(Microsoft.Xrm.Sdk.Metadata.EntityMetadata.Attributes))!
            .SetValue(meta, attrs.ToArray());
        return meta;
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

    private Guid SeedAppModuleId(Guid appId, string name = "MyApp", string unique = "myapp")
    {
        _ctx.GetOrganizationService().Create(new Entity("appmodule", appId)
        {
            ["appmoduleid"] = appId,
            ["name"] = name,
            ["uniquename"] = unique
        });
        _service.Apps[appId] = name;
        return appId;
    }

    private void SeedEntity(string logicalName, string displayName = "Account", string schemaName = "Account")
    {
        _service.Entities.Add(new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            DisplayName = new Label(displayName, 1033) { UserLocalizedLabel = new LocalizedLabel(displayName, 1033) }
        });
    }

    // ──────────────────── HandleAddFlyout: validation ────────────────────

    [TestMethod]
    public void AddFlyout_DryRun_ReturnsPreviewNoMutation()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: Guid.NewGuid().ToString(),
            items: "[{\"label\":\"Item 1\"}]");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void AddFlyout_MissingEntityName_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            location: "form", label: "MyMenu",
            app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void AddFlyout_MissingLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", label: "MyMenu",
            app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "location is required");
    }

    [TestMethod]
    public void AddFlyout_MissingLabel_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form",
            app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "label is required");
    }

    [TestMethod]
    public void AddFlyout_MissingItems_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "items is required");
    }

    [TestMethod]
    public void AddFlyout_InvalidLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "BAD_LOC", label: "MyMenu",
            app_id: Guid.NewGuid().ToString(),
            items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid location");
    }

    [TestMethod]
    public void AddFlyout_ItemsNotJsonArray_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), items: "{\"label\":\"X\"}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "items must be a JSON array");
    }

    [TestMethod]
    public void AddFlyout_EmptyItemsArray_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "at least 1 item");
    }

    [TestMethod]
    public void AddFlyout_AppNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: Guid.NewGuid().ToString(),
            items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddFlyout_EntityNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "ghost", location: "form", label: "MyMenu",
            app_id: appId.ToString(), items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void AddFlyout_IconWebResourceNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), icon_webresource: "ghost_.svg",
            items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'ghost_.svg' was not found");
    }

    [TestMethod]
    public void AddFlyout_ItemMissingLabel_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"onclick_type\":\"javascript\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "missing 'label'");
    }

    // ──────────────────── HandleAddFlyout: happy paths ────────────────────

    [TestMethod]
    public void AddFlyout_Minimal_CreatesDropdownGroupAndItems()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "My Menu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"Item 1\"},{\"label\":\"Item 2\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Flyout 'My Menu' created");
        // 1 dropdown + 1 group + 2 items = 4 creates
        Assert.IsTrue(_service.Creates >= 4, $"Expected ≥4 creates, got {_service.Creates}");
    }

    [TestMethod]
    public void AddFlyout_WithFontIcon_AndIcon_AndTooltip()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        _service.WebResources[Guid.NewGuid()] = "icon_/icon_.svg";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), font_icon: "SalesPlaybook",
            icon_webresource: "icon_/icon_.svg",
            tooltip_title: "Title", tooltip_description: "Desc",
            sequence: 200, hidden: true,
            items: "[{\"label\":\"Item 1\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var dropdown = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<string>("name")?.Contains("MyMenu") == true &&
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 1);
        Assert.IsNotNull(dropdown, "Expected a Dropdown (type=1) to be created");
        Assert.AreEqual("SalesPlaybook", dropdown!.GetAttributeValue<string>("fonticon"));
        Assert.AreEqual(200m, dropdown.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual(true, dropdown.GetAttributeValue<bool>("hidden"));
        Assert.AreEqual("Title", dropdown.GetAttributeValue<string>("buttontooltiptitle"));
    }

    [TestMethod]
    public void AddFlyout_FontIconPrefixed_NormalizesKeepsValue()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), font_icon: "$webresource:foo.svg",
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var dropdown = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 1);
        Assert.AreEqual("$webresource:foo.svg", dropdown!.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void AddFlyout_AppName_ResolvesViaLookup()
    {
        SeedAppModule(_ctx, name: "Sales App", unique: "salesapp");
        _service.Apps[_ctx.GetOrganizationService().RetrieveMultiple(new QueryExpression("appmodule")).Entities[0].Id] = "Sales App";
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_name: "Sales App",
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void AddFlyout_SequenceZero_DefaultsTo85()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(), sequence: 0,
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var dropdown = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 1);
        Assert.AreEqual(85m, dropdown!.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void AddFlyout_ItemSequenceFromJson_UsedInItem()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"X\",\"sequence\":\"42\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var item = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 0 &&
            e.GetAttributeValue<string>("name")?.Contains(".X.") == true);
        Assert.IsNotNull(item);
        Assert.AreEqual(42m, item!.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void AddFlyout_ItemInvalidOnclickType_ReturnsErrorAndRollsBackMessage()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"X\",\"onclick_type\":\"BAD\"}]");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Error creating item 'X'");
    }

    [TestMethod]
    public void AddFlyout_ItemJsWebResource_AttachedToItem()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var jsId = Guid.NewGuid();
        _service.WebResources[jsId] = "lib_/main_.js";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"X\",\"onclick_type\":\"javascript\",\"javascript_webresource\":\"lib_/main_.js\",\"javascript_function\":\"doIt\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var item = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 0 &&
            e.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid") != null);
        Assert.IsNotNull(item);
        Assert.AreEqual(jsId, item!.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid")!.Id);
        Assert.AreEqual("doIt", item.GetAttributeValue<string>("onclickeventjavascriptfunctionname"));
    }

    [TestMethod]
    public void AddFlyout_ItemJsWebResource_NotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "form", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"X\",\"onclick_type\":\"javascript\",\"javascript_webresource\":\"ghost_.js\"}]");

        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddFlyout_ItemJsLocationMainGrid_AppliesDefaultParams()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout",
            entity_name: "account", location: "main_grid", label: "MyMenu",
            app_id: appId.ToString(),
            items: "[{\"label\":\"X\",\"onclick_type\":\"javascript\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var item = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 0);
        Assert.IsNotNull(item);
        var dp = item!.GetAttributeValue<string>("onclickeventjavascriptparameters");
        Assert.IsTrue(dp?.Contains("\"type\":12") == true, $"expected default params for main_grid, got {dp}");
    }

    // ──────────────────── HandleUpdateFlyout ────────────────────

    [TestMethod]
    public void UpdateFlyout_DryRun_ReturnsPreview()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "update_flyout",
            command_id: Guid.NewGuid().ToString(), label: "New");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void UpdateFlyout_MissingCommandId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout", label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "command_id is required");
    }

    [TestMethod]
    public void UpdateFlyout_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: "not-a-guid", label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a valid GUID");
    }

    [TestMethod]
    public void UpdateFlyout_NotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: Guid.NewGuid().ToString(), label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void UpdateFlyout_WrongType_NotDropdown_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.btn",
            ["type"] = new OptionSetValue(0) // Standard, not Dropdown
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), label: "New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a Dropdown Button");
    }

    [TestMethod]
    public void UpdateFlyout_NoFields_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No fields to update");
    }

    [TestMethod]
    public void UpdateFlyout_LabelOnly_Succeeds()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), label: "Renamed");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("Renamed", _service.LastUpdatedEntity?.GetAttributeValue<string>("buttonlabeltext"));
    }

    [TestMethod]
    public void UpdateFlyout_SequenceOnly_Applied()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), sequence: 50);
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(50m, _service.LastUpdatedEntity?.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void UpdateFlyout_FontIconNone_Clears()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1),
            ["fonticon"] = "$clientsvg:Old"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), font_icon: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void UpdateFlyout_FontIconValue_NormalizesAndSets()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), font_icon: "NewIcon");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("$clientsvg:NewIcon", _service.LastUpdatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void UpdateFlyout_IconWebResourceNone_Clears()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1),
            ["iconwebresourceid"] = new EntityReference("webresource", Guid.NewGuid())
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), icon_webresource: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid"));
    }

    [TestMethod]
    public void UpdateFlyout_IconWebResourceByName_Resolves()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var iconId = Guid.NewGuid();
        _service.WebResources[iconId] = "icon_/icon_.svg";
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), icon_webresource: "icon_/icon_.svg");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(iconId, _service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid")?.Id);
    }

    [TestMethod]
    public void UpdateFlyout_IconWebResourceNotFound_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(), icon_webresource: "ghost_.svg");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateFlyout_TooltipTitleDescription_Attached()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(),
            tooltip_title: "T", tooltip_description: "D");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("T", _service.LastUpdatedEntity?.GetAttributeValue<string>("buttontooltiptitle"));
        Assert.AreEqual("D", _service.LastUpdatedEntity?.GetAttributeValue<string>("buttontooltipdescription"));
    }

    [TestMethod]
    public void UpdateFlyout_AllFields_AppliedTogether()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "test.dropdown",
            ["type"] = new OptionSetValue(1)
        });
        var iconId = Guid.NewGuid();
        _service.WebResources[iconId] = "icon_/icon_.svg";
        var tool = NewTool();
        var result = tool.manage_command(action: "update_flyout",
            command_id: cmdId.ToString(),
            label: "L", sequence: 10, font_icon: "Ico",
            icon_webresource: "icon_/icon_.svg",
            tooltip_title: "TT", tooltip_description: "TD");
        Assert.IsFalse(result.IsError == true, result.GetText());
        var e = _service.LastUpdatedEntity!;
        Assert.AreEqual("L", e.GetAttributeValue<string>("buttonlabeltext"));
        Assert.AreEqual(10m, e.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual("$clientsvg:Ico", e.GetAttributeValue<string>("fonticon"));
        Assert.AreEqual(iconId, e.GetAttributeValue<EntityReference>("iconwebresourceid")?.Id);
    }

    // ──────────────────── HandleAddSplitButton: validation ────────────────────

    [TestMethod]
    public void AddSplitButton_DryRun_ReturnsPreview()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void AddSplitButton_MissingEntityName_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            location: "form", label: "S", app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_MissingLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", label: "S", app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_MissingLabel_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", app_id: Guid.NewGuid().ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_MissingItems_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S", app_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_InvalidLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "BAD", label: "S",
            app_id: Guid.NewGuid().ToString(), items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_InvalidOnclickType_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S",
            app_id: appId.ToString(), onclick_type: "BAD",
            items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type");
    }

    [TestMethod]
    public void AddSplitButton_ItemsNotArray_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S",
            app_id: appId.ToString(), items: "{\"label\":\"X\"}");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_EmptyItemsArray_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S",
            app_id: appId.ToString(), items: "[]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_AppNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S",
            app_id: Guid.NewGuid().ToString(), items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_EntityNotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "ghost", location: "form", label: "S",
            app_id: appId.ToString(), items: "[{\"label\":\"X\"}]");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_ItemMissingLabel_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();
        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "S",
            app_id: appId.ToString(), items: "[{}]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "missing 'label'");
    }

    // ──────────────────── HandleAddSplitButton: happy paths ────────────────────

    [TestMethod]
    public void AddSplitButton_NoneType_CreatesSplitGroupItems()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), onclick_type: "none",
            items: "[{\"label\":\"Item 1\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Split Button 'Split' created");
        var split = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 2);
        Assert.IsNotNull(split, "Expected Split (type=2) record");
        Assert.AreEqual(0, split!.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value);
    }

    [TestMethod]
    public void AddSplitButton_JavaScriptType_AttachesJsAndParams()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var jsId = Guid.NewGuid();
        _service.WebResources[jsId] = "lib_/main_.js";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "main_grid", label: "Split",
            app_id: appId.ToString(), onclick_type: "javascript",
            javascript_webresource: "lib_/main_.js", javascript_function: "go",
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var split = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 2);
        Assert.IsNotNull(split);
        Assert.AreEqual(2, split!.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value);
        Assert.AreEqual(jsId, split.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid")?.Id);
        Assert.AreEqual("go", split.GetAttributeValue<string>("onclickeventjavascriptfunctionname"));
        var dp = split.GetAttributeValue<string>("onclickeventjavascriptparameters");
        Assert.IsTrue(dp?.Contains("\"type\":12") == true);
    }

    [TestMethod]
    public void AddSplitButton_JavaScriptWebResource_NotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), onclick_type: "javascript",
            javascript_webresource: "ghost_.js", javascript_function: "fn",
            items: "[{\"label\":\"X\"}]");

        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_IconWebResource_NotFound_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), icon_webresource: "ghost_.svg",
            items: "[{\"label\":\"X\"}]");

        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddSplitButton_ItemErrorAfterSplitCreated_ReturnsError()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), onclick_type: "none",
            items: "[{\"label\":\"X\",\"onclick_type\":\"BAD\"}]");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "partially created");
    }

    [TestMethod]
    public void AddSplitButton_SequenceZero_DefaultsTo85()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), sequence: 0,
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var split = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 2);
        Assert.AreEqual(85m, split!.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void AddSplitButton_WithFontIcon_AndTooltip_AndHidden()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        _service.WebResources[Guid.NewGuid()] = "icon_/icon_.svg";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), font_icon: "SalesPlaybook",
            icon_webresource: "icon_/icon_.svg",
            tooltip_title: "T", tooltip_description: "D",
            hidden: true, items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var split = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 2);
        Assert.AreEqual("$clientsvg:SalesPlaybook", split!.GetAttributeValue<string>("fonticon"));
        Assert.AreEqual("T", split.GetAttributeValue<string>("buttontooltiptitle"));
        Assert.AreEqual(true, split.GetAttributeValue<bool>("hidden"));
    }

    [TestMethod]
    public void AddSplitButton_JavaScriptDefaultParams_Form()
    {
        var appId = SeedAppModule(_ctx);
        SeedEntity("account");
        var tool = NewTool();

        var result = tool.manage_command(action: "add_split_button",
            entity_name: "account", location: "form", label: "Split",
            app_id: appId.ToString(), onclick_type: "javascript",
            items: "[{\"label\":\"X\"}]");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var split = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 2);
        var dp = split!.GetAttributeValue<string>("onclickeventjavascriptparameters");
        Assert.IsTrue(dp?.Contains("\"type\":5") == true, $"expected form default params, got {dp}");
    }

    // ──────────────────── HandleUpdateSplitButton ────────────────────

    [TestMethod]
    public void UpdateSplitButton_DryRun_ReturnsPreview()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "update_split_button",
            command_id: Guid.NewGuid().ToString(), label: "New");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void UpdateSplitButton_MissingCommandId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button", label: "X");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateSplitButton_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: "not-a-guid", label: "X");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateSplitButton_NotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: Guid.NewGuid().ToString(), label: "X");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateSplitButton_WrongType_NotSplit_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(1) // Dropdown, not Split
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a Split Button");
    }

    [TestMethod]
    public void UpdateSplitButton_NoFields_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No fields to update");
    }

    [TestMethod]
    public void UpdateSplitButton_LabelOnly_Succeeds()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), label: "NewName");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("NewName", _service.LastUpdatedEntity?.GetAttributeValue<string>("buttonlabeltext"));
    }

    [TestMethod]
    public void UpdateSplitButton_InvalidOnclickType_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), onclick_type: "BAD");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type");
    }

    [TestMethod]
    public void UpdateSplitButton_OnclickType_Attached()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), onclick_type: "javascript");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(2, _service.LastUpdatedEntity?.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value);
    }

    [TestMethod]
    public void UpdateSplitButton_JsWebResource_NotFound_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), javascript_webresource: "ghost_.js");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateSplitButton_JsWebResource_Attached()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var jsId = Guid.NewGuid();
        _service.WebResources[jsId] = "lib_/main_.js";
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(),
            javascript_webresource: "lib_/main_.js", javascript_function: "do");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(jsId, _service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid")?.Id);
        Assert.AreEqual("do", _service.LastUpdatedEntity?.GetAttributeValue<string>("onclickeventjavascriptfunctionname"));
    }

    [TestMethod]
    public void UpdateSplitButton_FontIconNone_Clears()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2),
            ["fonticon"] = "$clientsvg:Old"
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), font_icon: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<string>("fonticon"));
    }

    [TestMethod]
    public void UpdateSplitButton_IconWebResourceNone_Clears()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2),
            ["iconwebresourceid"] = new EntityReference("webresource", Guid.NewGuid())
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), icon_webresource: "none");
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNull(_service.LastUpdatedEntity?.GetAttributeValue<EntityReference>("iconwebresourceid"));
    }

    [TestMethod]
    public void UpdateSplitButton_IconWebResourceNotFound_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(), icon_webresource: "ghost_.svg");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void UpdateSplitButton_Tooltips_AndSequence_Applied()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "update_split_button",
            command_id: cmdId.ToString(),
            sequence: 25, tooltip_title: "TT", tooltip_description: "DD");
        Assert.IsFalse(result.IsError == true, result.GetText());
        var e = _service.LastUpdatedEntity!;
        Assert.AreEqual(25m, e.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual("TT", e.GetAttributeValue<string>("buttontooltiptitle"));
        Assert.AreEqual("DD", e.GetAttributeValue<string>("buttontooltipdescription"));
    }

    // ──────────────────── HandleAddFlyoutItem ────────────────────

    [TestMethod]
    public void AddFlyoutItem_DryRun_ReturnsPreview()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: Guid.NewGuid().ToString(), label: "X");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void AddFlyoutItem_MissingFlyoutId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item", label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "flyout_command_id is required");
    }

    [TestMethod]
    public void AddFlyoutItem_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: "not-a-guid", label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a valid GUID");
    }

    [TestMethod]
    public void AddFlyoutItem_MissingLabel_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "label is required");
    }

    [TestMethod]
    public void AddFlyoutItem_FlyoutNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: Guid.NewGuid().ToString(), label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void AddFlyoutItem_FlyoutNotDropdownOrSplit_ReturnsError()
    {
        var flyoutId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(0) // Standard, not Dropdown/Split
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is not a Dropdown or Split Button");
    }

    [TestMethod]
    public void AddFlyoutItem_NoAppModule_ReturnsError()
    {
        var flyoutId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "no associated app module");
    }

    [TestMethod]
    public void AddFlyoutItem_InvalidOnclickType_ReturnsError()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var tool = NewTool();
        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X", onclick_type: "BAD");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type");
    }

    [TestMethod]
    public void AddFlyoutItem_NoGroup_AutoCreatesOne_AndAddsItem()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "Item1");

        Assert.IsFalse(result.IsError == true, result.GetText());
        // 1 group + 1 item = 2 creates
        Assert.IsTrue(_service.Creates >= 2, $"Expected ≥2 creates, got {_service.Creates}");
    }

    [TestMethod]
    public void AddFlyoutItem_ExistingGroup_AddsItemToIt()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        var groupId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _ctx.GetOrganizationService().Create(new Entity("appaction", groupId)
        {
            ["appactionid"] = groupId,
            ["name"] = "devkit.account.MyMenu.Form.Group",
            ["type"] = new OptionSetValue(3), // Group
            ["parentappactionid"] = new EntityReference("appaction", flyoutId),
            ["statecode"] = new OptionSetValue(0)
        });
        _service.Apps[appId] = "MyApp";
        var createsBefore = _service.Creates;
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "Item1");

        Assert.IsFalse(result.IsError == true, result.GetText());
        // only 1 item (group already existed)
        Assert.AreEqual(createsBefore + 1, _service.Creates);
    }

    [TestMethod]
    public void AddFlyoutItem_JavaScript_AttachedWithParams()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var jsId = Guid.NewGuid();
        _service.WebResources[jsId] = "lib_/main_.js";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "JSItem",
            onclick_type: "javascript",
            javascript_webresource: "lib_/main_.js", javascript_function: "go");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var item = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 0);
        Assert.IsNotNull(item);
        Assert.AreEqual(2, item!.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value);
        Assert.AreEqual(jsId, item.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid")?.Id);
        Assert.AreEqual("go", item.GetAttributeValue<string>("onclickeventjavascriptfunctionname"));
    }

    [TestMethod]
    public void AddFlyoutItem_JavaScriptWebResource_NotFound_ReturnsError()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X",
            onclick_type: "javascript", javascript_webresource: "ghost_.js");

        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void AddFlyoutItem_SequenceProvided_UsedOverAutoAssign()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X", sequence: 7777);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var item = _service.CreatedEntities.FirstOrDefault(e =>
            e.GetAttributeValue<OptionSetValue>("type")?.Value == 0);
        Assert.AreEqual(7777m, item!.GetAttributeValue<decimal>("sequence"));
    }

    [TestMethod]
    public void AddFlyoutItem_SplitButtonType_AlsoAllowed()
    {
        var flyoutId = Guid.NewGuid();
        var appId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", flyoutId)
        {
            ["appactionid"] = flyoutId,
            ["name"] = "devkit.account.MyMenu.Form.Split",
            ["type"] = new OptionSetValue(2), // Split
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", appId)
        });
        _service.Apps[appId] = "MyApp";
        var tool = NewTool();

        var result = tool.manage_command(action: "add_flyout_item",
            flyout_command_id: flyoutId.ToString(), label: "X");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    // ──────────────────── HandleRemoveFlyoutItem ────────────────────

    [TestMethod]
    public void RemoveFlyoutItem_DryRun_ReturnsPreview()
    {
        var tool = NewTool(dryRun: true);
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
    }

    [TestMethod]
    public void RemoveFlyoutItem_MissingCommandId_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "command_id is required");
    }

    [TestMethod]
    public void RemoveFlyoutItem_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void RemoveFlyoutItem_NotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void RemoveFlyoutItem_DropdownType_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(1)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Cannot remove a Dropdown Button");
    }

    [TestMethod]
    public void RemoveFlyoutItem_SplitType_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(2)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Cannot remove a Split Button");
    }

    [TestMethod]
    public void RemoveFlyoutItem_GroupType_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(3)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Cannot directly remove a Group");
    }

    [TestMethod]
    public void RemoveFlyoutItem_NoParent_ReturnsError()
    {
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "x",
            ["type"] = new OptionSetValue(0) // Standard
            // no parentappactionid
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: cmdId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "no parent");
    }

    [TestMethod]
    public void RemoveFlyoutItem_StandardWithParent_Deletes()
    {
        var parentId = Guid.NewGuid();
        var cmdId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("appaction", parentId)
        {
            ["appactionid"] = parentId,
            ["name"] = "parent",
            ["type"] = new OptionSetValue(3)
        });
        _ctx.GetOrganizationService().Create(new Entity("appaction", cmdId)
        {
            ["appactionid"] = cmdId,
            ["name"] = "child.item",
            ["buttonlabeltext"] = "Item",
            ["type"] = new OptionSetValue(0),
            ["parentappactionid"] = new EntityReference("appaction", parentId)
        });
        var tool = NewTool();
        var result = tool.manage_command(action: "remove_flyout_item",
            command_id: cmdId.ToString());
        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "deleted successfully");
        Assert.AreEqual(1, _service.Deletes);
    }

    // ──────────────────── Decorator ────────────────────

    private sealed class FlyoutOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly List<EntityMetadata> Entities = new();
        public readonly Dictionary<Guid, string> WebResources = new();
        public readonly Dictionary<Guid, string> Apps = new();

        public int Creates;
        public int Updates;
        public int Deletes;
        public int Publishes;
        public Entity? LastCreatedEntity;
        public Entity? LastUpdatedEntity;
        public readonly List<Entity> CreatedEntities = new();

        public FlyoutOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            LastCreatedEntity = entity;
            CreatedEntities.Add(entity);
            return _inner.Create(entity);
        }
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet)
        {
            try
            {
                return _inner.Retrieve(entityName, id, columnSet);
            }
            catch
            {
                // Fall back to stub for appmodule when test only added the EntityReference but no record.
                if (string.Equals(entityName, "appmodule", StringComparison.OrdinalIgnoreCase) && Apps.TryGetValue(id, out var appName))
                {
                    return new Entity("appmodule", id)
                    {
                        ["appmoduleid"] = id,
                        ["name"] = appName,
                        ["uniquename"] = appName.ToLowerInvariant()
                    };
                }
                throw;
            }
        }
        public void Update(Entity entity)
        {
            Updates++;
            LastUpdatedEntity = entity;
            _inner.Update(entity);
        }
        public void Delete(string entityName, Guid id)
        {
            Deletes++;
            _inner.Delete(entityName, id);
        }
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
                            ["name"] = kvp.Value,
                            ["uniquename"] = kvp.Value.ToLowerInvariant()
                        });
                }
                return rows;
            }
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
            // Hand-parse FetchExpression (for FindFlyoutGroup, CountFlyoutItems, RetrieveAppActionOrNull)
            if (query is FetchExpression fe)
            {
                try
                {
                    var doc = XDocument.Parse(fe.Query);
                    var entity = doc.Descendants("entity").FirstOrDefault();
                    if (entity == null) return new EntityCollection();
                    var entityName = (string)entity.Attribute("name");
                    var all = new List<Entity>();
                    try { all = _inner.RetrieveMultiple(new QueryExpression(entityName) { ColumnSet = new ColumnSet(true) }).Entities.ToList(); }
                    catch { all = new List<Entity>(); }

                    IEnumerable<Entity> filtered = all;
                    var filterElem = entity.Element("filter");
                    if (filterElem != null)
                    {
                        foreach (var c in filterElem.Elements("condition"))
                        {
                            var attr = (string)c.Attribute("attribute");
                            var op = (string)c.Attribute("operator");
                            var val = (string)c.Attribute("value");
                            filtered = filtered.Where(e => MatchesCondition(e, attr, op, val));
                        }
                    }

                    // Handle aggregate count for CountFlyoutItems
                    var aggregateAttr = entity.Attribute("aggregate");
                    if (aggregateAttr != null && aggregateAttr.Value == "true")
                    {
                        var cnt = filtered.Count();
                        var aggEntity = new Entity(entityName) { ["cnt"] = cnt };
                        return new EntityCollection(new List<Entity> { aggEntity });
                    }

                    var result = new EntityCollection();
                    foreach (var e in filtered) result.Entities.Add(e);
                    return result;
                }
                catch
                {
                    return new EntityCollection();
                }
            }
            return _inner.RetrieveMultiple(query);
        }

        private static bool MatchesCondition(Entity e, string attr, string op, string val)
        {
            if (string.IsNullOrEmpty(attr)) return true;
            int? intVal = null;
            string strVal = null;
            if (e.Contains(attr))
            {
                var raw = e[attr];
                if (raw is OptionSetValue osv) intVal = osv.Value;
                else if (raw is EntityReference er) strVal = er.Id.ToString();
                else if (raw is Guid g) strVal = g.ToString();
                else strVal = (raw is OptionSetValue osv2) ? osv2.Value.ToString() : raw?.ToString();
            }
            else return true;
            if (op == "eq")
            {
                if (intVal.HasValue && int.TryParse(val, out var v)) return intVal.Value == v;
                return string.Equals(strVal, val, StringComparison.OrdinalIgnoreCase);
            }
            if (op == "like") return strVal != null && strVal.IndexOf(val?.Replace("%", "") ?? "", StringComparison.OrdinalIgnoreCase) >= 0;
            if (op == "ne") return strVal != val;
            return true;
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
    }
}
