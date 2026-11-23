using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Command;

[TestClass]
[DoNotParallelize]
public sealed class ManageCommandSolutionFakeSdkTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _appActions = new();
    private readonly List<Entity> _appModules = new();
    private readonly List<Entity> _solutions = new();
    private readonly List<Entity> _publishers = new();
    private EntityMetadata _accountMeta = null!;
    private Entity? _entityRecord;
    private readonly List<Entity> _createdEntities = new();
    private readonly List<Entity> _updatedEntities = new();
    private readonly List<AddSolutionComponentRequest> _addedSolutionComponents = new();

    private const string SolutionUniqueName = "custom_solution";
    private const string SolutionFriendlyName = "Custom Solution";
    private static readonly Guid SolutionId = Guid.NewGuid();
    private static readonly Guid PublisherId = Guid.NewGuid();

    [TestInitialize]
    public void Setup()
    {
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        _fake = new FakeSdkClient();
        _accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _appActions.Clear();
        _createdEntities.Clear();
        _updatedEntities.Clear();
        _addedSolutionComponents.Clear();

        var appModuleId = Guid.NewGuid();
        _appModules.Clear();
        _appModules.Add(new Entity("appmodule", appModuleId)
        {
            ["name"] = "Sales Hub",
            ["uniquename"] = "saleshub"
        });

        _publishers.Clear();
        _publishers.Add(new Entity("publisher", PublisherId)
        {
            ["customizationprefix"] = "cust",
            ["customizationoptionvalueprefix"] = 10000
        });

        _solutions.Clear();
        _solutions.Add(new Entity("solution", SolutionId)
        {
            ["solutionid"] = SolutionId,
            ["uniquename"] = SolutionUniqueName,
            ["friendlyname"] = SolutionFriendlyName,
            ["ismanaged"] = false,
            ["publisherid"] = new EntityReference("publisher", PublisherId)
        });

        _entityRecord = new Entity("entity", Guid.NewGuid()) { ["logicalname"] = "account" };

        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "appmodule")
                return _appModules.Find(a => a.Id == id) ?? new Entity("appmodule", id);
            if (entityName == "publisher")
                return _publishers.Find(p => p.Id == id) ?? new Entity("publisher", id);
            if (entityName == "solution")
                return _solutions.Find(s => s.Id == id) ?? new Entity("solution", id);
            if (entityName == "appaction")
                return _appActions.Find(a => a.Id == id) ?? new Entity("appaction", id);
            return new Entity(entityName, id);
        };
        _fake.OnCreate = entity =>
        {
            if (entity.Id == Guid.Empty)
                entity.Id = Guid.NewGuid();
            _createdEntities.Add(entity);
            _appActions.Add(entity);
            return entity.Id;
        };
        _fake.OnUpdate = entity =>
        {
            _updatedEntities.Add(entity);
            var stored = _appActions.Find(a => a.Id == entity.Id);
            if (stored != null)
            {
                foreach (var attr in entity.Attributes)
                    stored[attr.Key] = attr.Value;
            }
        };
    }

    [TestCleanup]
    public void Cleanup()
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
        AddSolutionComponentRequest req => HandleAddSolutionComponent(req),
        PublishXmlRequest => new OrganizationResponse(),
        _ => new OrganizationResponse()
    };

    private OrganizationResponse HandleAddSolutionComponent(AddSolutionComponentRequest req)
    {
        _addedSolutionComponents.Add(req);
        return new AddSolutionComponentResponse();
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var fetch = fe.Query;
            if (fetch.Contains("entity name='appaction'"))
            {
                if (fetch.Contains("aggregate='count'"))
                {
                    var countEntity = new Entity();
                    countEntity["cnt"] = new AliasedValue("appaction", "cnt", 0);
                    return new EntityCollection(new[] { countEntity });
                }
                if (fetch.Contains("condition attribute='appactionid'"))
                {
                    var idValue = fetch.Split(new[] { "condition attribute='appactionid'" }, StringSplitOptions.None)[1]
                        .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                        .Split('\'')[0];
                    var match = _appActions.FirstOrDefault(a => a.Id == Guid.Parse(idValue));
                    return match != null ? new EntityCollection(new[] { match }) : new EntityCollection();
                }
                if (fetch.Contains("type' operator='eq' value='3'") && fetch.Contains("parentappactionid"))
                {
                    var idValue = fetch.Split(new[] { "value='" }, StringSplitOptions.None)[1]
                        .Split('\'')[0];
                    var match = _appActions.FirstOrDefault(a =>
                        a.GetAttributeValue<OptionSetValue>("type")?.Value == 3 &&
                        a.GetAttributeValue<EntityReference>("parentappactionid")?.Id == Guid.Parse(idValue));
                    return match != null ? new EntityCollection(new[] { match }) : new EntityCollection();
                }
                if (fetch.Contains("condition attribute='name'"))
                {
                    var nameValue = fetch.Split(new[] { "condition attribute='name'" }, StringSplitOptions.None)[1]
                        .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                        .Split('\'')[0];
                    var matches = _appActions.Where(a => a.GetAttributeValue<string>("name") == nameValue).ToList();
                    if (fetch.Contains("condition attribute='contextvalue'"))
                    {
                        var contextVal = fetch.Split(new[] { "condition attribute='contextvalue'" }, StringSplitOptions.None)[1]
                            .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                            .Split('\'')[0];
                        matches = matches.Where(a => string.Equals(a.GetAttributeValue<string>("contextvalue"), contextVal, StringComparison.OrdinalIgnoreCase)).ToList();
                    }
                    return new EntityCollection(matches);
                }
                if (fetch.Contains("buttonlabeltext"))
                {
                    var labelVal = fetch.Split(new[] { "condition attribute='buttonlabeltext'" }, StringSplitOptions.None)[1]
                        .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                        .Split('\'')[0];
                    var matches = _appActions.Where(a => string.Equals(a.GetAttributeValue<string>("buttonlabeltext"), labelVal, StringComparison.OrdinalIgnoreCase)).ToList();
                    if (fetch.Contains("condition attribute='contextvalue'"))
                    {
                        var contextVal = fetch.Split(new[] { "condition attribute='contextvalue'" }, StringSplitOptions.None)[1]
                            .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                            .Split('\'')[0];
                        matches = matches.Where(a => string.Equals(a.GetAttributeValue<string>("contextvalue"), contextVal, StringComparison.OrdinalIgnoreCase)).ToList();
                    }
                    if (fetch.Contains("condition attribute='context'"))
                    {
                        var ctxVal = int.Parse(fetch.Split(new[] { "condition attribute='context'" }, StringSplitOptions.None)[1]
                            .Split(new[] { "value='" }, StringSplitOptions.None)[1]
                            .Split('\'')[0]);
                        matches = matches.Where(a => a.GetAttributeValue<OptionSetValue>("context")?.Value == ctxVal).ToList();
                    }
                    return new EntityCollection(matches);
                }
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
                "solution" => new EntityCollection(_solutions),
                "appmodule" => new EntityCollection(_appModules),
                "appaction" => new EntityCollection(_appActions),
                _ => new EntityCollection()
            };
        }

        return new EntityCollection();
    }

    private ManageCommandTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    [TestMethod]
    public void Create_WithSolutionDisplayName_ResolvesAndAddsAppActionToSolution()
    {
        var result = NewTool().manage_command(
            action: "create",
            label: "Custom Action",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        Assert.AreEqual("AddSolutionComponentRequest", json.GetProperty("addToSolutionMethod").GetString());
        Assert.AreEqual(1, _addedSolutionComponents.Count);
        Assert.AreEqual(10326, _addedSolutionComponents[0].ComponentType);
        Assert.AreEqual("custom_solution", _addedSolutionComponents[0].SolutionUniqueName);
        var commandId = Guid.Parse(json.GetProperty("commandId").GetString()!);
        Assert.AreEqual(commandId, _addedSolutionComponents[0].ComponentId);
    }

    [TestMethod]
    public void Create_WithInvalidSolution_ReturnsError()
    {
        var result = NewTool().manage_command(
            action: "create",
            label: "Custom Action",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            solution_name: "NonExistentSolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
        Assert.AreEqual(0, _addedSolutionComponents.Count);
        Assert.AreEqual(0, _createdEntities.Count);
    }

    [TestMethod]
    public void Create_DryRun_WithSolutionName_ReturnsDryRunData()
    {
        var result = NewTool(dryRun: true).manage_command(
            action: "create",
            label: "Custom Action",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        Assert.AreEqual(0, _createdEntities.Count);
        Assert.AreEqual(0, _addedSolutionComponents.Count);
    }

    [TestMethod]
    public void Hide_OobOverride_WithSolutionName_AddsOverrideToSolution()
    {
        var oob = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "Mscrm.Form.{!EntityLogicalName}.Activate",
            ["buttonlabeltext"] = "Activate",
            ["context"] = new OptionSetValue(0),
            ["contextvalue"] = "",
            ["location"] = new OptionSetValue(0),
            ["origin"] = new OptionSetValue(1),
            ["statecode"] = new OptionSetValue(0),
            ["hidden"] = false
        };
        _appActions.Add(oob);

        var result = NewTool().manage_command(
            action: "hide",
            command_id: oob.Id.ToString(),
            entity_name: "account",
            scope: "table",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        Assert.AreEqual(1, _addedSolutionComponents.Count);
        Assert.AreEqual(10326, _addedSolutionComponents[0].ComponentType);
        Assert.AreEqual("custom_solution", _addedSolutionComponents[0].SolutionUniqueName);
    }

    [TestMethod]
    public void AddFlyout_WithSolutionName_AddsAllComponentsToSolution()
    {
        var result = NewTool().manage_command(
            action: "add_flyout",
            label: "My Flyout",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            items: "[{\"label\":\"Item A\"},{\"label\":\"Item B\"}]",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        // 1 dropdown + 1 group + 2 items = 4 appactions added to solution
        Assert.AreEqual(4, _addedSolutionComponents.Count);
        Assert.IsTrue(_addedSolutionComponents.All(c => c.ComponentType == 10326));
        Assert.IsTrue(_addedSolutionComponents.All(c => c.SolutionUniqueName == "custom_solution"));
    }

    [TestMethod]
    public void AddSplitButton_WithSolutionName_AddsAllComponentsToSolution()
    {
        var result = NewTool().manage_command(
            action: "add_split_button",
            label: "My Split",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            items: "[{\"label\":\"Primary\"}]",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        // 1 split button + 1 group + 1 item = 3 appactions added to solution
        Assert.AreEqual(3, _addedSolutionComponents.Count);
        Assert.IsTrue(_addedSolutionComponents.All(c => c.ComponentType == 10326));
        Assert.IsTrue(_addedSolutionComponents.All(c => c.SolutionUniqueName == "custom_solution"));
    }

    [TestMethod]
    public void AddFlyoutItem_WithSolutionName_AddsItemToSolution()
    {
        var dropdown = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "cust_my_flyout",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", _appModules[0].Id),
            ["statecode"] = new OptionSetValue(0)
        };
        _appActions.Add(dropdown);

        var group = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "cust_my_flyout_group",
            ["type"] = new OptionSetValue(3),
            ["parentappactionid"] = new EntityReference("appaction", dropdown.Id),
            ["statecode"] = new OptionSetValue(0)
        };
        _appActions.Add(group);

        var result = NewTool().manage_command(
            action: "add_flyout_item",
            flyout_command_id: dropdown.Id.ToString(),
            label: "New Item",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        Assert.AreEqual(1, _addedSolutionComponents.Count);
        Assert.AreEqual(10326, _addedSolutionComponents[0].ComponentType);
        Assert.AreEqual("custom_solution", _addedSolutionComponents[0].SolutionUniqueName);
    }

    [TestMethod]
    public void AddFlyoutItem_WhenGroupMissing_AutoCreatesGroupAndAddsBothToSolution()
    {
        var dropdown = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "cust.account.MyFlyout.Form.Dropdown",
            ["type"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["appmoduleid"] = new EntityReference("appmodule", _appModules[0].Id),
            ["statecode"] = new OptionSetValue(0)
        };
        _appActions.Add(dropdown);

        var result = NewTool().manage_command(
            action: "add_flyout_item",
            flyout_command_id: dropdown.Id.ToString(),
            label: "Auto Group Item",
            solution_name: "Custom Solution");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var json = result.StructuredContent.Value;
        Assert.AreEqual(true, json.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", json.GetProperty("solutionName").GetString());
        // Both the item and the auto-created group must be added to the solution
        Assert.AreEqual(2, _addedSolutionComponents.Count);
        Assert.IsTrue(_addedSolutionComponents.All(c => c.ComponentType == 10326));
        Assert.IsTrue(_addedSolutionComponents.All(c => c.SolutionUniqueName == "custom_solution"));
    }

    [TestMethod]
    public void Create_WithManagedSolution_ReturnsError()
    {
        _solutions[0]["ismanaged"] = true;

        var result = NewTool().manage_command(
            action: "create",
            label: "Custom Action",
            entity_name: "account",
            app_name: "Sales Hub",
            location: "form",
            solution_name: "Custom Solution");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "is managed");
        Assert.AreEqual(0, _createdEntities.Count);
        Assert.AreEqual(0, _addedSolutionComponents.Count);
    }

    [TestMethod]
    public void Update_AndHideExisting_WithSolutionName_AddsCommandToSolution()
    {
        var cmd = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "cust.account.Btn.Form.Button",
            ["buttonlabeltext"] = "Btn",
            ["context"] = new OptionSetValue(1),
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["type"] = new OptionSetValue(0),
            ["origin"] = new OptionSetValue(0),
            ["statecode"] = new OptionSetValue(0),
            ["hidden"] = false,
            ["appmoduleid"] = new EntityReference("appmodule", _appModules[0].Id)
        };
        _appActions.Add(cmd);

        var updateRes = NewTool().manage_command(
            action: "update",
            command_id: cmd.Id.ToString(),
            label: "Btn Updated",
            solution_name: "Custom Solution");

        Assert.IsFalse(updateRes.IsError == true, updateRes.GetText());
        Assert.AreEqual(true, updateRes.StructuredContent!.Value.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", updateRes.StructuredContent!.Value.GetProperty("solutionName").GetString());
        Assert.AreEqual(1, _addedSolutionComponents.Count);
        Assert.AreEqual(cmd.Id, _addedSolutionComponents[0].ComponentId);

        _addedSolutionComponents.Clear();
        var hideRes = NewTool().manage_command(
            action: "hide",
            command_id: cmd.Id.ToString(),
            solution_name: "Custom Solution");

        Assert.IsFalse(hideRes.IsError == true, hideRes.GetText());
        Assert.AreEqual(true, hideRes.StructuredContent!.Value.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("custom_solution", hideRes.StructuredContent!.Value.GetProperty("solutionName").GetString());
        Assert.AreEqual(1, _addedSolutionComponents.Count);
        Assert.AreEqual(cmd.Id, _addedSolutionComponents[0].ComponentId);
    }

    [TestMethod]
    public void DryRun_WithoutOrgService_WithSolutionName_ReturnsPreview()
    {
        var dryTool = new ManageCommandTool(null!, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.BlockedContext());
        var res = dryTool.manage_command(
            action: "create",
            label: "Btn",
            entity_name: "account",
            location: "form",
            solution_name: "my_unmanaged_sol");

        Assert.IsFalse(res.IsError == true, res.GetText());
        Assert.AreEqual(true, res.StructuredContent!.Value.GetProperty("isAddToSolution").GetBoolean());
        Assert.AreEqual("my_unmanaged_sol", res.StructuredContent!.Value.GetProperty("solutionName").GetString());
    }
}
