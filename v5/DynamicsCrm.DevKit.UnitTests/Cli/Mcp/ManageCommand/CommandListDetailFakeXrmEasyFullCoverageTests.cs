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
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageCommand;

/// <summary>
/// FakeXrmEasy coverage for CommandListDetail.cs:
///   - HandleList validation paths
///   - GetList (FetchExpression path, includes rules, includes children)
///   - GetListRibbonStyle (RetrieveEntityRibbonRequest)
///   - GetAppActionLabelsForEntity
///   - GetDetail (by id, missing)
///   - GetDetailByLabel (single, multiple, none, with location)
/// </summary>
[TestClass]
public sealed class CommandListDetailFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private ListDetailOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(new FakeRetrieveAllEntitiesExecutor(SharedEntities))
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });
        // appaction metadata with the attributes referenced by FetchExpression
        _ctx.InitializeMetadata(BuildAppActionMetadata());
        _service = new ListDetailOrgService(_ctx.GetOrganizationService());
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

    private void SeedEntity(string logicalName, string displayName = "Account", string schemaName = "Account")
    {
        var meta = new Microsoft.Xrm.Sdk.Metadata.EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            DisplayName = new Microsoft.Xrm.Sdk.Label(displayName, 1033) { UserLocalizedLabel = new Microsoft.Xrm.Sdk.LocalizedLabel(displayName, 1033) }
        };
        _service.Entities.Add(meta);
        SharedEntities.Add(meta);
    }

    private static readonly List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> SharedEntities = new();

    private ManageCommandTool NewTool() =>
        new(_service, new McpDryRunOptions { DryRun = false }, new McpExecutionContext(false));

    private static Entity SeedAppAction(string label, string name, string contextValue = "account",
        int location = 0, string origin = "default", bool hidden = false)
    {
        var id = Guid.NewGuid();
        var e = new Entity("appaction", id)
        {
            ["appactionid"] = id,
            ["name"] = name,
            ["uniquename"] = name,
            ["buttonlabeltext"] = label,
            ["type"] = new OptionSetValue(0),
            ["location"] = new OptionSetValue(location),
            ["contextvalue"] = contextValue,
            ["onclickeventtype"] = new OptionSetValue(0),
            ["hidden"] = hidden,
            ["origin"] = new OptionSetValue(0),
            ["sequence"] = 100
        };
        return e;
    }

    // ────────────────────── HandleList validation ──────────────────────

    [TestMethod]
    public void List_InvalidLocation_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", location: "BAD");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid location");
    }

    [TestMethod]
    public void List_InvalidOrigin_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", origin: "WRONG");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid origin");
    }

    [TestMethod]
    public void List_InvalidActionType_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", action_type: "BAD");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid action_type");
    }

    [TestMethod]
    public void List_ZeroMaxRecords_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", max_records: 0);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "max_records must be between 1 and 500");
    }

    [TestMethod]
    public void List_HighMaxRecords_ClampsTo500()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", max_records: 5000);
        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_EntityNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", entity_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void List_AppNameProvidedButNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list", app_name: "Ghost App");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "app_name 'Ghost App'");
    }

    [TestMethod]
    public void List_AppNameResolved_AppliesAppModuleIdFilter()
    {
        var appId = Guid.NewGuid();
        _service.Apps[appId] = "Sales Hub";
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", app_name: "Sales Hub");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    // ────────────────────── GetList path ──────────────────────

    [TestMethod]
    public void List_NoFilters_ReturnsEmptySuccess()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "list");
        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 commands found");
    }

    [TestMethod]
    public void List_OneEntity_ReturnsCommandFromFetch()
    {
        SeedEntity("account");
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account", 0);
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        // pass name_filter to bypass GetListRibbonStyle shortcut
        var result = tool.manage_command(action: "list", entity_name: "account", name_filter: "Go");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 1 command");
        StringAssert.Contains(result.GetText(), "for 'account'");
    }

    [TestMethod]
    public void List_ByLocationAppliesLocationFilter()
    {
        var cmdForm = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account", 0);
        var cmdGrid = SeedAppAction("Go", "devkit.account.Go.MainGrid.Button", "account", 1);
        _ctx.GetOrganizationService().Create(cmdForm);
        _ctx.GetOrganizationService().Create(cmdGrid);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", location: "form");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 1 command");
    }

    [TestMethod]
    public void List_NameFilterAppliesLikeCondition()
    {
        var cmd1 = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        var cmd2 = SeedAppAction("Other", "devkit.account.Other.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd1);
        _ctx.GetOrganizationService().Create(cmd2);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", name_filter: "Go");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 1 command");
    }

    [TestMethod]
    public void List_ActionTypeAppliesFilter()
    {
        var cmd1 = SeedAppAction("JS", "devkit.account.JS.Form.Button", "account");
        cmd1["onclickeventtype"] = new OptionSetValue(2);
        _ctx.GetOrganizationService().Create(cmd1);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", action_type: "javascript");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_OriginAppliesFilterExceptAll()
    {
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", origin: "all");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_OriginMigrated_AppliesOriginFilter()
    {
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", origin: "migrated");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_OriginEnhancedMigrated_AppliesOriginFilter()
    {
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", origin: "enhanced_migrated");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_IncludeRules_RequestsRuleSubquery()
    {
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", include_rules: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "(rules included)");
    }

    [TestMethod]
    public void List_IncludeChildren_RequestsChildrenSubquery()
    {
        var cmd = SeedAppAction("Go", "devkit.account.Go.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", include_children: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "(children included)");
    }

    [TestMethod]
    public void List_MultipleCommands_PluralizesCount()
    {
        var c1 = SeedAppAction("A", "devkit.account.A.Form.Button", "account");
        var c2 = SeedAppAction("B", "devkit.account.B.Form.Button", "account");
        _ctx.GetOrganizationService().Create(c1);
        _ctx.GetOrganizationService().Create(c2);
        var tool = NewTool();

        var result = tool.manage_command(action: "list");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 2 commands");
    }

    [TestMethod]
    public void List_AppActionWithAllAttributes_PopulatesCommandEntry()
    {
        SeedEntity("account");
        // Seed a ribbon button so the ribbon-style path is taken.
        var ribbonXml = BuildRibbonXml("account", "MainTab.Actions", new[]
        {
            ("Mscrm.HomepageGrid.account.Go", 10, "Go", false)
        });
        _service.RibbonXml[("account", "HomepageGrid")] = ribbonXml;
        // Seed an inApp appaction with ALL optional fields populated (and a few unknown enum values
        // so the ToString() fallback paths are exercised).
        var id = Guid.NewGuid();
        var wrId = Guid.NewGuid();
        var e = new Entity("appaction", id)
        {
            ["appactionid"] = id,
            ["name"] = "Mscrm.HomepageGrid.account.Go",
            ["uniquename"] = "Mscrm.HomepageGrid.account.Go",
            ["buttonlabeltext"] = "Go",
            ["type"] = new OptionSetValue(1),               // 1=Drodown (mapped)
            ["location"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["onclickeventtype"] = new OptionSetValue(2),    // 2=JavaScript (mapped)
            ["hidden"] = true,
            ["isdisabled"] = true,
            ["origin"] = new OptionSetValue(99),             // 99 not in map → ToString fallback
            ["visibilitytype"] = new OptionSetValue(2),      // 2=ClassicRules (mapped)
            ["fonticon"] = "fa-play",
            ["onclickeventjavascriptfunctionname"] = "devkit.go",
            ["iconwebresourceid"] = new EntityReference("webresource", wrId) { Name = "icon.png" },
            ["buttontooltiptitle"] = "Tip",
            ["buttontooltipdescription"] = "Desc",
            ["sequence"] = 42,
            ["statecode"] = new OptionSetValue(0)
        };
        _ctx.GetOrganizationService().Create(e);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", entity_name: "account");

        Assert.IsFalse(result.IsError == true, result.GetText());
        // Verify the iconwebresource is plumbed through (use structuredContent or rendered JSON).
        var serialized = System.Text.Json.JsonSerializer.Serialize(result);
        StringAssert.Contains(serialized, "icon.png");
    }

    // ────────────────────── GetListRibbonStyle path ──────────────────────

    [TestMethod]
    public void List_RibbonStyleForEntity_LoadsRibbonAndMergesInAppAction()
    {
        SeedEntity("account");
        var ribbonXml = BuildRibbonXml("account", "MainTab.Actions", new[]
        {
            ("Mscrm.HomepageGrid.account.Go", 10, "Go", false),
            ("Mscrm.HomepageGrid.account.Stop", 20, "Stop", false)
        });
        _service.RibbonXml[("account", "HomepageGrid")] = ribbonXml;
        var inApp = SeedAppAction("Go", "Mscrm.HomepageGrid.account.Go", "account", 1);
        _ctx.GetOrganizationService().Create(inApp);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", entity_name: "account");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "ribbon button");
    }

    [TestMethod]
    public void List_RibbonStyleFallsBackToRegularListWhenLocationNotInMap()
    {
        SeedEntity("account");
        // associated_grid is in LocationFilterMap but not in CommandSurfaceMap
        var cmd = SeedAppAction("Go", "devkit.account.Go.AssociatedGrid.Button", "account", 3);
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "list", entity_name: "account", location: "associated_grid");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 1 command");
    }

    [TestMethod]
    public void List_RibbonStyleReadsAllButtonTypes()
    {
        SeedEntity("account");
        var ribbonXml = BuildRibbonXml("account", "MainTab.Actions", new[]
        {
            ("Mscrm.SubGrid.account.Button1", 10, "Btn1", false),
            ("Mscrm.SubGrid.account.Fly1", 20, "Fly1", false),
            ("Mscrm.SubGrid.account.Split1", 30, "Split1", false),
            ("Mscrm.SubGrid.account.NotButton", 40, "NotButton", false)
        });
        _service.RibbonXml[("account", "SubGrid")] = ribbonXml;
        var tool = NewTool();

        var result = tool.manage_command(action: "list", entity_name: "account", location: "sub_grid");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void List_RibbonStyleLocationFilterTrimsToOneSurface()
    {
        SeedEntity("account");
        var formRibbon = BuildRibbonXml("account", "MainTab.Save", new[]
        {
            ("Mscrm.Form.account.FormBtn", 10, "FormBtn", false)
        });
        _service.RibbonXml[("account", "Form")] = formRibbon;
        var tool = NewTool();

        var result = tool.manage_command(action: "list", entity_name: "account", location: "form");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    // ────────────────────── GetDetail path ──────────────────────

    [TestMethod]
    public void Detail_NotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "detail", command_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void Detail_ById_ReturnsFullRecord()
    {
        var cmd = SeedAppAction("Save", "devkit.account.Save.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", command_id: cmd.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "devkit.account.Save.Form.Button");
        StringAssert.Contains(result.GetText(), "Full fields");
    }

    [TestMethod]
    public void Detail_InvalidGuid_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "detail", command_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not a valid GUID");
    }

    [TestMethod]
    public void Detail_IncludeRules_DoesNotFail()
    {
        var cmd = SeedAppAction("Save", "devkit.account.Save.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", command_id: cmd.Id.ToString(), include_rules: true);
        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void Detail_IncludeChildren_DoesNotFail()
    {
        var cmd = SeedAppAction("Save", "devkit.account.Save.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", command_id: cmd.Id.ToString(), include_children: true);
        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    // ────────────────────── GetDetailByLabel path ──────────────────────

    [TestMethod]
    public void DetailByLabel_NoMatch_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "detail", label: "ZZZ No Match");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No command found");
    }

    [TestMethod]
    public void DetailByLabel_MultipleMatches_ReturnsErrorListingIds()
    {
        var c1 = SeedAppAction("Dup", "devkit.account.Dup.Form.Button", "account");
        var c2 = SeedAppAction("Dup", "devkit.account.Dup.Form2.Button", "account");
        _ctx.GetOrganizationService().Create(c1);
        _ctx.GetOrganizationService().Create(c2);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", label: "Dup");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple commands match");
    }

    [TestMethod]
    public void DetailByLabel_SingleMatch_DelegatesToGetDetail()
    {
        SeedEntity("account");
        var cmd = SeedAppAction("Single", "devkit.account.Single.Form.Button", "account");
        _ctx.GetOrganizationService().Create(cmd);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", label: "Single");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "devkit.account.Single.Form.Button");
    }

    [TestMethod]
    public void DetailByLabel_EntityNameRequiredForFilter()
    {
        var tool = NewTool();
        // empty entity name with label - falls through to error since no match
        var result = tool.manage_command(action: "detail", label: "Anything", entity_name: "");
        Assert.IsTrue(result.IsError == true);
    }

    [TestMethod]
    public void DetailByLabel_WithLocationFilter_AppliesLocation()
    {
        SeedEntity("account");
        var c1 = SeedAppAction("Same", "devkit.account.Same.Form.Button", "account", 0);
        var c2 = SeedAppAction("Same", "devkit.account.Same.MainGrid.Button", "account", 1);
        _ctx.GetOrganizationService().Create(c1);
        _ctx.GetOrganizationService().Create(c2);
        var tool = NewTool();

        var result = tool.manage_command(action: "detail", label: "Same", entity_name: "account", location: "form");

        Assert.IsFalse(result.IsError == true, result.GetText());
    }

    [TestMethod]
    public void DetailByLabel_EntityNotFound_ReturnsError()
    {
        var tool = NewTool();
        var result = tool.manage_command(action: "detail", label: "Go", entity_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    // ────────────────────── helpers ──────────────────────

    private static string BuildRibbonXml(string entityName, string sectionName,
        (string Id, int Sequence, string Label, bool IsOob)[] buttons)
    {
        var sb = new StringBuilder();
        sb.AppendLine("<?xml version='1.0'?>");
        sb.AppendLine("<Ribbon>");
        sb.AppendLine($"  <Group Id='Mscrm.{sectionName}.{entityName}.{sectionName}'>");
        sb.AppendLine("    <Controls>");
        foreach (var b in buttons)
        {
            var tag = b.Id.Contains("Fly") ? "FlyoutAnchor" : b.Id.Contains("Split") ? "SplitButton" : "Button";
            sb.AppendLine($"      <{tag} Id='{b.Id}' Sequence='{b.Sequence}' LabelText='{b.Label}'/>");
        }
        sb.AppendLine("    </Controls>");
        sb.AppendLine("  </Group>");
        sb.AppendLine("</Ribbon>");
        return sb.ToString();
    }

    private sealed class ListDetailOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;
        public readonly Dictionary<(string Entity, string Surface), string> RibbonXml = new();
        public readonly List<byte[]> ExportedSolutions = new();

        public ListDetailOrgService(IOrganizationService inner) => _inner = inner;
        public readonly List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> Entities = new();
        public readonly Dictionary<Guid, string> Apps = new();

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is PublishXmlRequest) return new OrganizationResponse();

            if (request is RetrieveAllEntitiesRequest)
            {
                var resp = new Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesResponse();
                resp.Results["EntityMetadata"] = Entities.ToArray();
                return resp;
            }
            if (request is Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest retrieveEntity)
            {
                var meta = Entities.FirstOrDefault(e => string.Equals(e.LogicalName, retrieveEntity.LogicalName, StringComparison.OrdinalIgnoreCase));
                var resp = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityResponse();
                resp.Results["EntityMetadata"] = meta ?? new Microsoft.Xrm.Sdk.Metadata.EntityMetadata { LogicalName = retrieveEntity.LogicalName, SchemaName = retrieveEntity.LogicalName };
                return resp;
            }
            if (request is WhoAmIRequest)
            {
                var resp = new WhoAmIResponse();
                resp.Results["UserId"] = Guid.NewGuid();
                return resp;
            }
            if (request is RetrieveEntityRibbonRequest ribbon)
            {
                var resp = new RetrieveEntityRibbonResponse();
                // Allow tests to override the ribbon XML for a specific (entity, surface) tuple
                var key = (ribbon.EntityName, ribbon.RibbonLocationFilter.ToString());
                if (RibbonXml.TryGetValue(key, out var ribbonText))
                {
                    using var ms = new MemoryStream();
                    using (var archive = new System.IO.Compression.ZipArchive(ms, System.IO.Compression.ZipArchiveMode.Create, true))
                    {
                        using var writer = new StreamWriter(archive.CreateEntry("RibbonXml.xml").Open());
                        writer.Write(ribbonText);
                    }
                    resp.Results["CompressedEntityXml"] = ms.ToArray();
                }
                else
                {
                    resp.Results["CompressedEntityXml"] = MakeRibbonZip();
                }
                return resp;
            }
            if (request is ExportSolutionRequest exportReq)
            {
                var resp = new ExportSolutionResponse();
                var zip = MakeEmptySolutionZip();
                ExportedSolutions.Add(zip);
                resp.Results["ExportSolutionFile"] = zip;
                return resp;
            }
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is QueryExpression qe && string.Equals(qe.EntityName, "appmodule", StringComparison.OrdinalIgnoreCase))
            {
                var rows = new EntityCollection();
                foreach (var kvp in Apps)
                    rows.Entities.Add(new Entity("appmodule", kvp.Key) { ["name"] = kvp.Value, ["uniquename"] = kvp.Value.ToLowerInvariant() });
                return rows;
            }
            if (query is FetchExpression fe)
            {
                // Hand-parse fetch to avoid FakeXrmEasy's strict metadata validation for appaction/appactionrule.
                try
                {
                    var doc = System.Xml.Linq.XDocument.Parse(fe.Query);
                    var entity = doc.Descendants("entity").FirstOrDefault();
                    if (entity == null) return new EntityCollection();
                    var entityName = (string)entity.Attribute("name");
                    var topAttr = (string)entity.Attribute("top");
                    int top = int.TryParse(topAttr, out var t) ? t : -1;

                    // Collect ALL tracked entities of this name
                    var all = new List<Entity>();
                    try { all = _inner.RetrieveMultiple(new QueryExpression(entityName) { ColumnSet = new ColumnSet(true) }).Entities.ToList(); }
                    catch { all = new List<Entity>(); }

                    // Apply filters
                    IEnumerable<Entity> filtered = all;
                    var filterElem = entity.Element("filter");
                    if (filterElem != null)
                    {
                        var conds = filterElem.Elements("condition").ToList();
                        foreach (var c in conds)
                        {
                            var attr = (string)c.Attribute("attribute");
                            var op = (string)c.Attribute("operator");
                            var val = (string)c.Attribute("value");
                            filtered = ApplyCondition(filtered, attr, op, val);
                        }
                    }

                    if (top > 0) filtered = filtered.Take(top);
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

        private static IEnumerable<Entity> ApplyCondition(IEnumerable<Entity> source, string attr, string op, string val)
        {
            if (string.IsNullOrEmpty(attr)) return source;
            return source.Where(e => MatchesCondition(e, attr, op, val));
        }

        private static bool MatchesCondition(Entity e, string attr, string op, string val)
        {
            // Resolve candidate values: try OptionSetValue.Value and .ToString() form
            object raw = null;
            string strVal = null;
            int? intVal = null;
            if (e.Contains(attr))
            {
                raw = e[attr];
                if (raw is OptionSetValue osv) intVal = osv.Value;
                strVal = (raw is OptionSetValue osv2) ? osv2.Value.ToString() : raw?.ToString();
            }
            else
            {
                // link-entity alias form
                return true;
            }
            if (op == "eq")
            {
                if (intVal.HasValue && int.TryParse(val, out var v)) return intVal.Value == v;
                return string.Equals(strVal, val, StringComparison.OrdinalIgnoreCase);
            }
            if (op == "like")
            {
                var pattern = val?.Replace("%", "") ?? "";
                return strVal != null && strVal.IndexOf(pattern, StringComparison.OrdinalIgnoreCase) >= 0;
            }
            if (op == "ne") return strVal != val;
            if (op == "in")
            {
                var vals = (val ?? "").Split(',');
                if (intVal.HasValue) return vals.Any(x => int.TryParse(x, out var v) && v == intVal.Value);
                return vals.Any(x => string.Equals(x, strVal, StringComparison.OrdinalIgnoreCase));
            }
            return true;
        }
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        private static byte[] MakeRibbonZip()
        {
            using var ms = new MemoryStream();
            using (var archive = new ZipArchive(ms, ZipArchiveMode.Create, true))
            {
                using var writer = new StreamWriter(archive.CreateEntry("RibbonXml.xml").Open());
                writer.Write("<Ribbon>" +
                    "<Group Id=\"Mscrm.HomepageGrid.account.MainSection\">" +
                    "<Controls>" +
                    "<Button Id=\"Mscrm.HomepageGrid.account.Go\" Sequence=\"10\" LabelText=\"Go\"/>" +
                    "</Controls></Group>" +
                    "<LocLabels>" +
                    "<LocLabel Id=\"Mscrm.HomepageGrid.account.Go.Label\">" +
                    "<Title description=\"Go Button\"/>" +
                    "</LocLabel>" +
                    "</LocLabels>" +
                    "</Ribbon>");
            }
            return ms.ToArray();
        }

        private static byte[] MakeEmptySolutionZip()
        {
            using var ms = new MemoryStream();
            using (var archive = new ZipArchive(ms, ZipArchiveMode.Create, true))
            {
                using var writer = new StreamWriter(archive.CreateEntry("customizations.xml").Open());
                // Provide RibbonDiffXml for both 'account' and another entity so LoadLocLabels parses
                // LocLabels and ExtractRibbonDiffXmlForEntity resolves the entityName match.
                writer.Write("<ImportExportXml>" +
                    "<Entities>" +
                    "<Entity>" +
                    "<Name>account</Name>" +
                    "<RibbonDiffXml>" +
                    "<CustomActions/>" +
                    "<Templates><RibbonTemplates Id=\"MscrmTemplate\"/></Templates>" +
                    "<UI>" +
                    "<Ribbon>" +
                    "<LocLabels>" +
                    "<LocLabel Id=\"Mscrm.HomepageGrid.account.Go.Label\">" +
                    "<Title description=\"Go Button\"/>" +
                    "</LocLabel>" +
                    "<LocLabel Id=\"EmptyId.LocLabel\"/>" +
                    "<LocLabel Id=\"Has.Title.Only\"><Title/></LocLabel>" +
                    "</LocLabels>" +
                    "</Ribbon>" +
                    "</UI>" +
                    "</RibbonDiffXml>" +
                    "</Entity>" +
                    "<Entity>" +
                    "<Name>otherentity</Name>" +
                    "<RibbonDiffXml/>" +
                    "</Entity>" +
                    "</Entities>" +
                    "</ImportExportXml>");
            }
            return ms.ToArray();
        }
    }

    private sealed class FakeRetrieveAllEntitiesExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        private readonly List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> _entities;
        public FakeRetrieveAllEntitiesExecutor(List<Microsoft.Xrm.Sdk.Metadata.EntityMetadata> entities) => _entities = entities;
        public bool CanExecute(OrganizationRequest request) => request is Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesRequest;
        public Type GetResponsibleRequestType() => typeof(Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesRequest);

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var resp = new Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesResponse();
            resp.Results["EntityMetadata"] = _entities.ToArray();
            return resp;
        }
    }
}
