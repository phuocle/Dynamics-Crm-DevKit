using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Command;

/// <summary>
/// FakeSdkClient coverage for manage_command hide/show and the flyout update
/// paths: command_id lookup (not found, OOB override delete, no-op, toggle),
/// label-based lookup (found/not found, entity/location/app validation),
/// classic-ribbon blocking via the devkit_ribbon solution export, override
/// creation from an OOB template, and font/icon clearing on update_split_button.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageCommandHideShowFakeSdkTests
{
    private FakeSdkClient _fake = null!;
    private List<Entity> _appActions = new();
    private List<Entity> _appModules = new();
    private EntityMetadata _accountMeta = null!;
    private List<Entity> _labelLookupRows = new();
    private List<Entity> _oobTemplateRows = new();
    private Entity? _entityRecord;
    private byte[]? _ribbonSolutionZip;
    private readonly List<Entity> _updatedEntities = new();
    private readonly List<Guid> _deletedIds = new();
    private readonly List<Entity> _createdEntities = new();

    [TestInitialize]
    public void Setup()
    {
        // Skip the 5s publish propagation wait — the fake service has no delay.
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        _fake = new FakeSdkClient();
        _accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _appActions = new List<Entity>();
        _appModules = new List<Entity>
        {
            new Entity("appmodule", Guid.NewGuid()) { ["name"] = "Sales Hub", ["uniquename"] = "saleshub" }
        };
        _labelLookupRows = new List<Entity>();
        _oobTemplateRows = new List<Entity>();
        _entityRecord = new Entity("entity", Guid.NewGuid()) { ["logicalname"] = "account" };
        // Default export has no LocLabel matching the test label — classic-ribbon
        // detection returns false so hide/show proceeds. The blocked test swaps it.
        _ribbonSolutionZip = RibbonZip("Unrelated Label");
        _updatedEntities.Clear();
        _deletedIds.Clear();
        _createdEntities.Clear();

        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "appmodule")
                return _appModules.Find(a => a.Id == id) ?? new Entity("appmodule", id);
            return new Entity(entityName, id);
        };
        _fake.OnUpdate = entity =>
        {
            _updatedEntities.Add(entity);
            // Merge into the stored row so subsequent lookups observe the update.
            var stored = _appActions.Find(a => a.Id == entity.Id);
            if (stored != null)
                foreach (var a in entity.Attributes)
                    stored[a.Key] = a.Value;
        };
        _fake.OnDelete = (entityName, id) => _deletedIds.Add(id);
        _fake.OnCreate = entity =>
        {
            _createdEntities.Add(entity);
            return Guid.NewGuid();
        };
    }

    public void Dispose()
    {
        _fake.Dispose();
        MetadataOperationWaitHelper.WaitScalePercent = 100;
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = new[] { _accountMeta } }
        },
        RetrieveEntityRequest => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _accountMeta }
        },
        ExportSolutionRequest => new ExportSolutionResponse
        {
            Results = { ["ExportSolutionFile"] = _ribbonSolutionZip ?? Array.Empty<byte>() }
        },
        PublishXmlRequest => new OrganizationResponse(),
        _ => new OrganizationResponse()
    };

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query;
            if (fetch.Contains("entity name='appaction'"))
            {
                if (fetch.Contains("attribute='appactionid'"))
                {
                    var idValue = fetch.Split(new[] { "value='" }, StringSplitOptions.None)[1]
                        .Split('\'')[0];
                    var match = _appActions.FirstOrDefault(a => a.Id == Guid.Parse(idValue));
                    return match != null ? new EntityCollection(new[] { match }) : new EntityCollection();
                }
                if (fetch.Contains("buttonlabeltext"))
                    return new EntityCollection(_labelLookupRows);
                if (fetch.Contains("attribute='name'"))
                    return new EntityCollection(_oobTemplateRows);
                return new EntityCollection();
            }
            if (fetch.Contains("entity name='entity'"))
                return _entityRecord != null ? new EntityCollection(new[] { _entityRecord }) : new EntityCollection();
            return new EntityCollection();
        }

        if (query is QueryExpression qe)
        {
            return qe.EntityName switch
            {
                "appmodule" => new EntityCollection(_appModules),
                "appaction" => new EntityCollection(_appActions),
                _ => new EntityCollection()
            };
        }
        return new EntityCollection();
    }

    private ManageCommandTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    private Entity NewCommand(bool hidden = false, int origin = 0, string? name = null, int type = 0)
    {
        var id = Guid.NewGuid();
        var e = new Entity("appaction", id)
        {
            ["name"] = name ?? "dev_cmd",
            ["buttonlabeltext"] = "My Button",
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["type"] = new OptionSetValue(type),
            ["origin"] = new OptionSetValue(origin),
            ["statecode"] = new OptionSetValue(0),
            ["hidden"] = hidden,
            ["isdisabled"] = false,
            ["sequence"] = 10m
        };
        _appActions.Add(e);
        return e;
    }

    private static byte[] RibbonZip(string label) => BuildZip($"""
<RibbonDefinitions>
  <Entity>
    <Name>account</Name>
    <RibbonDiffXml>
      <LocLabels>
        <LocLabel Id="lbl.1"><Titles><Title description="{label}" languagecode="1033" /></Titles></LocLabel>
      </LocLabels>
    </RibbonDiffXml>
  </Entity>
</RibbonDefinitions>
""");

    private static byte[] BuildZip(string customizationsXml)
    {
        using var ms = new MemoryStream();
        using (var archive = new ZipArchive(ms, ZipArchiveMode.Create, leaveOpen: true))
        {
            var entry = archive.CreateEntry("customizations.xml");
            using var writer = new StreamWriter(entry.Open(), new UTF8Encoding(false));
            writer.Write(customizationsXml);
        }
        return ms.ToArray();
    }

    // ── command_id path ──

    [TestMethod]
    public void Show_CommandIdNotFound_ReturnsError()
    {
        var result = NewTool().manage_command(action: "show", command_id: Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
        StringAssert.Contains(result.GetText(), "manage_command(action='list')");
    }

    [TestMethod]
    public void Show_OobOverrideCommand_DeletesOverrideAndPublishes()
    {
        var oob = NewCommand(hidden: true, origin: 2, name: "Mscrm.Form.{!EntityLogicalName}.Activate");

        var result = NewTool().manage_command(action: "show", command_id: oob.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "OOB command override");
        StringAssert.Contains(result.GetText(), "deleted");
        CollectionAssert.Contains(_deletedIds, oob.Id);
    }

    [TestMethod]
    public void Hide_AlreadyHidden_IsNoOp()
    {
        var cmd = NewCommand(hidden: true);

        var result = NewTool().manage_command(action: "hide", command_id: cmd.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "already hidden");
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    public void Show_AlreadyVisible_IsNoOp()
    {
        var cmd = NewCommand(hidden: false);

        var result = NewTool().manage_command(action: "show", command_id: cmd.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "already visible");
        Assert.AreEqual(0, _updatedEntities.Count);
    }

    [TestMethod]
    public void Hide_ThenShow_TogglesHiddenFlag()
    {
        var cmd = NewCommand(hidden: false);
        var tool = NewTool();

        var hide = tool.manage_command(action: "hide", command_id: cmd.Id.ToString());
        Assert.IsFalse(hide.IsError == true, hide.GetText());
        StringAssert.Contains(hide.GetText(), "is now hidden");
        Assert.AreEqual(1, _updatedEntities.Count);
        Assert.AreEqual(true, _updatedEntities[0].GetAttributeValue<bool>("hidden"));

        var show = tool.manage_command(action: "show", command_id: cmd.Id.ToString());
        Assert.IsFalse(show.IsError == true, show.GetText());
        StringAssert.Contains(show.GetText(), "is now visible");
        Assert.AreEqual(false, _updatedEntities[1].GetAttributeValue<bool>("hidden"));
    }

    // ── label path validation ──

    [TestMethod]
    public void Show_LabelWithoutEntity_ReturnsError()
    {
        var result = NewTool().manage_command(action: "show", label: "My Button");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void Show_LabelWithoutLocation_ReturnsError()
    {
        var result = NewTool().manage_command(action: "show", label: "My Button", entity_name: "Account");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "location is required");
    }

    [TestMethod]
    public void Hide_LabelWithoutApp_ReturnsError()
    {
        var result = NewTool().manage_command(action: "hide", label: "My Button",
            entity_name: "Account", location: "form");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "app_id or app_name is required");
    }

    [TestMethod]
    public void Show_LabelWithInvalidLocation_ReturnsError()
    {
        var result = NewTool().manage_command(action: "show", label: "My Button",
            entity_name: "Account", location: "ribbon_bar");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid location 'ribbon_bar'");
    }

    [TestMethod]
    public void Show_LabelWithUnknownEntity_ReturnsResolutionError()
    {
        var emptyEntitiesMeta = new List<EntityMetadata>();
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = emptyEntitiesMeta.ToArray() }
            },
            _ => new OrganizationResponse()
        };

        var result = NewTool().manage_command(action: "show", label: "My Button",
            entity_name: "Nope", location: "form");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "entity_name 'Nope'");
    }

    // ── label path success flows ──

    [TestMethod]
    public void Show_NoOverrideRecord_OobVisibleByDefault()
    {
        _labelLookupRows.Clear();

        var result = NewTool().manage_command(action: "show", label: "My Button",
            entity_name: "Account", location: "form");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "no appaction override record");
        StringAssert.Contains(result.GetText(), "visible by default");
    }

    [TestMethod]
    public void Hide_LabelFound_ClassicRibbonButton_Blocked()
    {
        _labelLookupRows.Clear();
        _ribbonSolutionZip = RibbonZip("My Button");

        var result = NewTool().manage_command(action: "hide", label: "My Button",
            entity_name: "Account", location: "form", app_id: _appModules[0].Id.ToString());

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "classic ribbon button");
        StringAssert.Contains(result.GetText(), "manage_ribbon");
    }

    [TestMethod]
    public void Hide_LabelFound_TogglesHidden()
    {
        var found = NewCommand(hidden: false);
        _labelLookupRows = new List<Entity> { found };

        var result = NewTool().manage_command(action: "hide", label: "My Button",
            entity_name: "Account", location: "form", app_id: _appModules[0].Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "is now hidden");
        Assert.AreEqual(1, _updatedEntities.Count);
        Assert.AreEqual(found.Id, _updatedEntities[0].Id);
    }

    [TestMethod]
    public void Hide_LabelNotFound_CreatesAppActionOverrideWithOobTemplate()
    {
        _labelLookupRows.Clear();
        var template = new Entity("appaction", Guid.NewGuid())
        {
            ["sequence"] = 42m,
            ["fonticon"] = "Accept",
            ["onclickeventtype"] = new OptionSetValue(0),
            ["visibilitytype"] = new OptionSetValue(0)
        };
        _oobTemplateRows = new List<Entity> { template };

        var result = NewTool().manage_command(action: "hide", label: "My Button",
            entity_name: "Account", location: "form", app_id: _appModules[0].Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created appaction override");
        StringAssert.Contains(result.GetText(), "is now hidden");
        var created = _createdEntities.Single(e => e.LogicalName == "appaction");
        Assert.AreEqual("Mscrm.Form.{!EntityLogicalName}.MyButton", created.GetAttributeValue<string>("name"));
        Assert.AreEqual(42m, created.GetAttributeValue<decimal>("sequence"));
        Assert.AreEqual("Accept", created.GetAttributeValue<string>("fonticon"));
        Assert.AreEqual(true, created.GetAttributeValue<bool>("hidden"));
    }

    [TestMethod]
    public void Hide_LabelNotFound_NoOobTemplate_DefaultsSequence()
    {
        _labelLookupRows.Clear();
        _oobTemplateRows.Clear();

        var result = NewTool().manage_command(action: "hide", label: "My Button",
            entity_name: "Account", location: "form", app_name: "Sales Hub");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Created appaction override");
        var created = _createdEntities.Single(e => e.LogicalName == "appaction");
        Assert.AreEqual(100m, created.GetAttributeValue<decimal>("sequence"));
    }

    // ── flyout / split update paths ──

    [TestMethod]
    public void UpdateSplitButton_ClearsFontIconAndIconWebResource()
    {
        var split = NewCommand(type: 2, name: "dev_split");

        var result = NewTool().manage_command(action: "update_split_button", command_id: split.Id.ToString(),
            font_icon: "none", icon_webresource: "none", tooltip_title: "Split T", tooltip_description: "Split D");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "fontIcon=cleared");
        StringAssert.Contains(result.GetText(), "iconWebResource=cleared");
        var updated = _updatedEntities.Single(e => e.Id == split.Id);
        Assert.AreEqual("Split T", updated.GetAttributeValue<string>("buttontooltiptitle"));
    }

    [TestMethod]
    public void AddFlyoutItem_InvalidOnclickType_ReturnsError()
    {
        var flyout = NewCommand(type: 1, name: "dev_flyout");
        flyout["appmoduleid"] = new EntityReference("appmodule", _appModules[0].Id);

        var result = NewTool().manage_command(action: "add_flyout_item", flyout_command_id: flyout.Id.ToString(),
            label: "Item", onclick_type: "macro");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid onclick_type 'macro'");
    }
}
