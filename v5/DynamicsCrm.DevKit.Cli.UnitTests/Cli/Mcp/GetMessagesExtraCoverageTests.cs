using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class GetMessagesExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();

        var accMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        TestMetadata.Set(accMeta, nameof(EntityMetadata.ObjectTypeCode), (int?)1);
        _entities.Add(accMeta);

        _fake.OnExecute = request =>
        {
            if (request is RetrieveAllEntitiesRequest)
            {
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                };
            }
            if (request is RetrieveEntityRequest rer)
            {
                var meta = _entities.Find(e => e.LogicalName == rer.LogicalName) ?? accMeta;
                return new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = meta }
                };
            }
            return new OrganizationResponse();
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private GetMessagesTool CreateTool()
    {
        var metaService = new MetadataService(_fake.Client);
        return new GetMessagesTool(metaService, _fake.Client);
    }

    [TestMethod]
    public async Task GetMessages_List_Success()
    {
        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            if (query is FetchExpression fe)
            {
                var fetch = fe.Query;
                if (fetch.Contains("name='sdkmessage'"))
                {
                    var msg = new Entity("sdkmessage", Guid.NewGuid()) { ["name"] = "Create" };
                    ec.Entities.Add(msg);
                }
                else if (fetch.Contains("name='workflow'"))
                {
                    var action = new Entity("workflow", Guid.NewGuid()) { ["name"] = "CustomAction1" };
                    ec.Entities.Add(action);
                }
                else if (fetch.Contains("name='customapi'"))
                {
                    var api = new Entity("customapi", Guid.NewGuid()) { ["name"] = "CustomApi1" };
                    ec.Entities.Add(api);
                }
            }
            return ec;
        };

        var tool = CreateTool();
        var resGlobal = await tool.get_messages(entity_name: "none", include_custom_actions: true, max_records: 50);
        Assert.IsFalse(resGlobal.IsError == true, resGlobal.GetText());

        var resAccount = await tool.get_messages(entity_name: "account", include_custom_actions: false, max_records: 1000);
        Assert.IsFalse(resAccount.IsError == true, resAccount.GetText());
    }

    [TestMethod]
    public async Task GetMessages_Detail_SdkMessage()
    {
        var sdkMsgId = Guid.NewGuid();

        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            if (query is FetchExpression fe)
            {
                var fetch = fe.Query;
                if (fetch.Contains("name='sdkmessage'") && fetch.Contains("Create"))
                {
                    var msg = new Entity("sdkmessage", sdkMsgId)
                    {
                        ["sdkmessageid"] = sdkMsgId,
                        ["name"] = "Create",
                        ["isactive"] = true,
                        ["availability"] = 0,
                        ["categoryname"] = "Standard"
                    };
                    ec.Entities.Add(msg);
                }
                else if (fetch.Contains("name='workflow'"))
                {
                    // No workflow custom action matching
                }
                else if (fetch.Contains("name='sdkmessagefilter'"))
                {
                    var filter = new Entity("sdkmessagefilter", Guid.NewGuid())
                    {
                        ["primaryobjecttypecode"] = "account"
                    };
                    ec.Entities.Add(filter);
                }
                else if (fetch.Contains("name='sdkmessageprocessingstep'"))
                {
                    var stepCount = new Entity();
                    stepCount["cnt"] = new AliasedValue("sdkmessageprocessingstep", "cnt", 3);
                    ec.Entities.Add(stepCount);
                }
            }
            return ec;
        };

        var tool = CreateTool();
        var res = await tool.get_messages(message_name: "Create");
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Create");
        StringAssert.Contains(res.GetText(), "3 plugin steps");
    }

    [TestMethod]
    public async Task GetMessages_Detail_CustomActionWithXaml()
    {
        var actionId = Guid.NewGuid();
        var xaml = @"<Activity x:Class=""new_MyCustomAction"">
            <x:Property Name=""InputString"" Type=""InArgument(x:String)"">
                <x:Property.Attributes>
                    <mxsw:ArgumentRequiredAttribute Value=""True"" />
                    <mxsw:ArgumentDescriptionAttribute Value=""Input param description"" />
                </x:Property.Attributes>
            </x:Property>
            <x:Property Name=""TargetAccount"" Type=""InArgument(mxs:EntityReference)"">
                <x:Property.Attributes>
                    <mxsw:ArgumentEntityAttribute Value=""account"" />
                </x:Property.Attributes>
            </x:Property>
            <x:Property Name=""OutputResult"" Type=""OutArgument(x:String)"" />
        </Activity>";

        _fake.OnRetrieveMultiple = query =>
        {
            var ec = new EntityCollection();
            if (query is FetchExpression fe)
            {
                var fetch = fe.Query;
                if (fetch.Contains("name='workflow'") && fetch.Contains("MyCustomAction"))
                {
                    var action = new Entity("workflow", actionId)
                    {
                        ["workflowid"] = actionId,
                        ["name"] = "MyCustomAction",
                        ["uniquename"] = "new_MyCustomAction",
                        ["primaryentity"] = "account",
                        ["scope"] = new OptionSetValue(4),
                        ["statecode"] = new OptionSetValue(1),
                        ["ismanaged"] = false,
                        ["iscustomizable"] = new BooleanManagedProperty(true),
                        ["modifiedon"] = DateTime.UtcNow,
                        ["xaml"] = xaml
                    };
                    ec.Entities.Add(action);
                }
                else if (fetch.Contains("name='workflow'") && fetch.Contains(actionId.ToString()))
                {
                    var action = new Entity("workflow", actionId)
                    {
                        ["xaml"] = xaml
                    };
                    ec.Entities.Add(action);
                }
            }
            return ec;
        };

        var tool = CreateTool();
        var res = await tool.get_messages(message_name: "MyCustomAction");
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "MyCustomAction");
        StringAssert.Contains(res.GetText(), "input params");
    }

    [TestMethod]
    public async Task GetMessages_NotFound_ReturnsError()
    {
        _fake.OnRetrieveMultiple = query => new EntityCollection();
        var tool = CreateTool();
        var res = await tool.get_messages(message_name: "NonExistentAction");
        Assert.IsTrue(res.IsError == true);
    }
}
