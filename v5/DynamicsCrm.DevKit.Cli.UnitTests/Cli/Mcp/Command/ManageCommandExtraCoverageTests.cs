using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Command;

[TestClass]
public sealed class ManageCommandExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<Entity> _appActions = new();
    private readonly List<Entity> _appModules = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _appActions.Clear();
        _appModules.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

        var appModule = new Entity("appmodule", Guid.NewGuid());
        appModule["name"] = "Sales Hub";
        appModule["uniquename"] = "saleshub";
        _appModules.Add(appModule);

        var appAction = new Entity("appaction", Guid.NewGuid());
        appAction["name"] = "btn_custom";
        appAction["buttonlabeltext"] = "Custom Button";
        appAction["contextvalue"] = "account";
        appAction["location"] = new OptionSetValue(0); // Form
        appAction["type"] = new OptionSetValue(0);
        appAction["origin"] = new OptionSetValue(0);
        appAction["onclickeventtype"] = new OptionSetValue(1);
        appAction["visibilitytype"] = new OptionSetValue(0);
        appAction["statecode"] = new OptionSetValue(0);
        appAction["hidden"] = false;
        appAction["isdisabled"] = false;
        appAction["sequence"] = 10;
        _appActions.Add(appAction);

        var flyoutAction = new Entity("appaction", Guid.NewGuid());
        flyoutAction["name"] = "btn_flyout";
        flyoutAction["buttonlabeltext"] = "Flyout Button";
        flyoutAction["contextvalue"] = "account";
        flyoutAction["location"] = new OptionSetValue(0);
        flyoutAction["type"] = new OptionSetValue(1); // Dropdown
        flyoutAction["origin"] = new OptionSetValue(0);
        flyoutAction["onclickeventtype"] = new OptionSetValue(0);
        flyoutAction["visibilitytype"] = new OptionSetValue(0);
        flyoutAction["statecode"] = new OptionSetValue(0);
        flyoutAction["hidden"] = false;
        flyoutAction["isdisabled"] = false;
        flyoutAction["sequence"] = 20;
        flyoutAction["appmoduleid"] = new EntityReference("appmodule", _appModules[0].Id);
        _appActions.Add(flyoutAction);

        var splitAction = new Entity("appaction", Guid.NewGuid());
        splitAction["name"] = "btn_split";
        splitAction["buttonlabeltext"] = "Split Button";
        splitAction["contextvalue"] = "account";
        splitAction["location"] = new OptionSetValue(0);
        splitAction["type"] = new OptionSetValue(2); // Split
        splitAction["origin"] = new OptionSetValue(0);
        splitAction["onclickeventtype"] = new OptionSetValue(1);
        splitAction["visibilitytype"] = new OptionSetValue(0);
        splitAction["statecode"] = new OptionSetValue(0);
        splitAction["hidden"] = false;
        splitAction["isdisabled"] = false;
        splitAction["sequence"] = 30;
        _appActions.Add(splitAction);

        var childAction = new Entity("appaction", Guid.NewGuid());
        childAction["name"] = "btn_child";
        childAction["buttonlabeltext"] = "Child Item";
        childAction["contextvalue"] = "account";
        childAction["location"] = new OptionSetValue(0);
        childAction["type"] = new OptionSetValue(0);
        childAction["origin"] = new OptionSetValue(0);
        childAction["statecode"] = new OptionSetValue(0);
        childAction["sequence"] = 40;
        childAction["parentappactionid"] = new EntityReference("appaction", flyoutAction.Id);
        _appActions.Add(childAction);

        _fake.OnExecute = request =>
        {
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                RetrieveEntityRequest req => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = accountMeta }
                },
                RetrieveMultipleRequest req => new RetrieveMultipleResponse
                {
                    Results = { ["EntityCollection"] = FilterAppActions(req, _appActions) }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                DeleteRequest => new DeleteResponse(),
                _ => new OrganizationResponse()
            };
        };
        _fake.OnCreate = entity => Guid.NewGuid();
        _fake.OnUpdate = entity => { };
        _fake.OnDelete = (entityName, id) => { };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "appaction")
            {
                var action = _appActions.Find(a => a.Id == id) ?? _appActions[0];
                return action;
            }
            return new Entity(entityName, id);
        };
    }

    private static EntityCollection FilterAppActions(RetrieveMultipleRequest req, List<Entity> allActions)
    {
        if (req.Query is FetchExpression fetch)
        {
            var xml = fetch.Query;
            foreach (var action in allActions)
            {
                if (xml.Contains(action.Id.ToString()))
                {
                    return new EntityCollection(new List<Entity> { action });
                }
            }
        }
        return new EntityCollection(allActions);
    }

    private ManageCommandTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: false));

    [TestMethod]
    public void ManageCommand_ActionEmpty_ReturnsError()
    {
        var tool = CreateTool();
        var res = tool.manage_command(action: "");
        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "action is required");
    }

    [TestMethod]
    public void ManageCommand_InvalidAction_ReturnsError()
    {
        var tool = CreateTool();
        var res = tool.manage_command(action: "invalid_action");
        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "Invalid action");
    }

    [TestMethod]
    public void ManageCommand_ListValidationErrors()
    {
        var tool = CreateTool();
        Assert.IsTrue(tool.manage_command(action: "list", location: "invalid_loc").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "list", origin: "invalid_orig").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "list", action_type: "invalid_act").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "list", max_records: 0).IsError == true);
    }

    [TestMethod]
    public void ManageCommand_ListSuccess()
    {
        var tool = CreateTool();
        var res = tool.manage_command(action: "list", entity_name: "account", location: "form", origin: "default");
        Assert.IsFalse(res.IsError == true, res.GetText());
    }

    [TestMethod]
    public void ManageCommand_DetailValidation()
    {
        var tool = CreateTool();
        Assert.IsTrue(tool.manage_command(action: "detail").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "detail", command_id: "not-a-guid").IsError == true);
    }

    [TestMethod]
    public void ManageCommand_DetailByCommandId_Success()
    {
        var tool = CreateTool();
        var id = _appActions[0].Id.ToString();
        var res = tool.manage_command(action: "detail", command_id: id);
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "btn_custom");
    }

    [TestMethod]
    public void ManageCommand_CreateValidationErrors()
    {
        var tool = CreateTool();
        Assert.IsTrue(tool.manage_command(action: "create", entity_name: "", location: "form", label: "Btn").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "create", entity_name: "account", location: "", label: "Btn").IsError == true);
        Assert.IsTrue(tool.manage_command(action: "create", entity_name: "account", location: "form", label: "").IsError == true);
    }

    [TestMethod]
    public void ManageCommand_CreateSuccess()
    {
        var tool = CreateTool();
        var appId = _appModules[0].Id.ToString();
        var res = tool.manage_command(
            action: "create",
            entity_name: "account",
            location: "form",
            app_id: appId,
            label: "New Test Button",
            onclick_type: "javascript",
            javascript_function: "WebResource.myFunc",
            font_icon: "Accept");

        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "created successfully");
    }

    [TestMethod]
    public void ManageCommand_UpdateValidationAndSuccess()
    {
        var tool = CreateTool();
        var id = _appActions[0].Id.ToString();

        Assert.IsTrue(tool.manage_command(action: "update", command_id: "").IsError == true);

        var updateRes = tool.manage_command(action: "update", command_id: id, label: "Updated Button");
        Assert.IsFalse(updateRes.IsError == true, updateRes.GetText());
    }

    [TestMethod]
    public void ManageCommand_HideShow_Success()
    {
        var tool = CreateTool();
        var id = _appActions[0].Id.ToString();

        var hideRes = tool.manage_command(action: "hide", command_id: id);
        Assert.IsFalse(hideRes.IsError == true, hideRes.GetText());

        var showRes = tool.manage_command(action: "show", command_id: id);
        Assert.IsFalse(showRes.IsError == true, showRes.GetText());
    }

    [TestMethod]
    public void ManageCommand_FlyoutActions_Success()
    {
        var tool = CreateTool();
        var appId = _appModules[0].Id.ToString();
        var flyoutId = _appActions[1].Id.ToString();

        var addFlyoutRes = tool.manage_command(
            action: "add_flyout",
            entity_name: "account",
            location: "form",
            app_id: appId,
            label: "My Flyout",
            items: "[{\"label\":\"Item 1\"}]");
        Assert.IsFalse(addFlyoutRes.IsError == true, addFlyoutRes.GetText());

        var updateFlyoutRes = tool.manage_command(
            action: "update_flyout",
            command_id: flyoutId,
            label: "Updated Flyout");
        Assert.IsFalse(updateFlyoutRes.IsError == true, updateFlyoutRes.GetText());

        var addFlyoutItemRes = tool.manage_command(
            action: "add_flyout_item",
            flyout_command_id: flyoutId,
            label: "Item 1");
        Assert.IsFalse(addFlyoutItemRes.IsError == true, addFlyoutItemRes.GetText());

        var childId = _appActions[3].Id.ToString();
        var removeFlyoutItemRes = tool.manage_command(
            action: "remove_flyout_item",
            command_id: childId);
        Assert.IsFalse(removeFlyoutItemRes.IsError == true, removeFlyoutItemRes.GetText());
    }

    [TestMethod]
    public void ManageCommand_SplitButtonActions_Success()
    {
        var tool = CreateTool();
        var appId = _appModules[0].Id.ToString();
        var splitId = _appActions[2].Id.ToString();

        var addSplitRes = tool.manage_command(
            action: "add_split_button",
            entity_name: "account",
            location: "form",
            app_id: appId,
            label: "My Split Button",
            items: "[{\"label\":\"Item 1\"}]");
        Assert.IsFalse(addSplitRes.IsError == true, addSplitRes.GetText());

        var updateSplitRes = tool.manage_command(
            action: "update_split_button",
            command_id: splitId,
            label: "Updated Split Button");
        Assert.IsFalse(updateSplitRes.IsError == true, updateSplitRes.GetText());
    }
}
