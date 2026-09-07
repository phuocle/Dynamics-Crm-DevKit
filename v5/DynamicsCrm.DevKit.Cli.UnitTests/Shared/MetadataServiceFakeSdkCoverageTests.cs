using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// MetadataService methods that issue FetchExpression / RetrieveMetadataChanges
/// requests, driven through a FakeSdkClient router: SDK messages, plugin
/// input/output parameters, custom actions/apis, data sources, impersonation,
/// language code, comment (d.ts) reading, and dialog forms.
/// </summary>
[TestClass]
public sealed class MetadataServiceFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private MetadataService _service = null!;
    private List<Entity> _sdkMessages = null!;
    private List<Entity> _sdkMessageRequests = null!;
    private List<Entity> _sdkMessageResponses = null!;
    private List<Entity> _customApis = null!;
    private List<Entity> _systemUsers = null!;
    private List<Entity> _organization = null!;
    private List<Entity> _dialogForms = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _sdkMessages = new List<Entity>();
        _sdkMessageRequests = new List<Entity>();
        _sdkMessageResponses = new List<Entity>();
        _customApis = new List<Entity>();
        _systemUsers = new List<Entity>();
        _organization = new List<Entity>();
        _dialogForms = new List<Entity>();
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _service = new MetadataService(_fake.Client);
    }

    public void Dispose()
    {
        _fake.Dispose();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveEntityRequest r => new RetrieveEntityResponse
        {
            Results =
            {
                ["EntityMetadata"] = Entity(1, r.LogicalName),
            }
        },
        RetrieveMetadataChangesRequest => new RetrieveMetadataChangesResponse
        {
            Results = { ["EntityMetadata"] = new EntityMetadataCollection { Entity(10001, "newdatasource"), Entity(10002, "neworder") } }
        },
        RetrieveProvisionedLanguagesRequest => new RetrieveProvisionedLanguagesResponse
        {
            Results = { ["RetrieveProvisionedLanguages"] = new[] { 1033, 1066 } }
        },
        _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
    };

    private static EntityMetadata Entity(int objectKeyCode, string logicalName)
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))!.SetValue(meta, logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.SchemaName))!.SetValue(meta, "New" + logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ObjectTypeCode))!.SetValue(meta, (int?)objectKeyCode);
        return meta;
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        var fetch = ((query as FetchExpression)?.Query ?? string.Empty).Replace(Quote, Apostrophe);
        if (fetch.Contains("entity name='sdkmessage'") && !fetch.Contains("sdkmessagerequest") && !fetch.Contains("sdkmessageresponse"))
            return new EntityCollection(_sdkMessages);
        if (fetch.Contains("entity name='sdkmessagerequest'"))
            return new EntityCollection(_sdkMessageRequests);
        if (fetch.Contains("entity name='sdkmessageresponse'"))
            return new EntityCollection(_sdkMessageResponses);
        if (fetch.Contains("entity name='customapi'"))
            return new EntityCollection(_customApis);
        if (fetch.Contains("entity name='systemuser'"))
            return new EntityCollection(_systemUsers);
        if (fetch.Contains("entity name='organization'"))
            return new EntityCollection(_organization);
        if (fetch.Contains("entity name='systemform'"))
            return new EntityCollection(_dialogForms);
        return new EntityCollection();
    }

    private const string Logical = "account";
    private const string Quote = "\"";
    private const string Apostrophe = "'";

    private static Entity SdkMessage(string name) =>
        new("sdkmessage", Guid.NewGuid()) { ["name"] = name };

    [TestMethod]
    public async Task GetSdkMessagesAsync_ReturnsSortedDistinctNames()
    {
        _sdkMessages.Add(SdkMessage("Create"));
        _sdkMessages.Add(SdkMessage("Delete"));
        _sdkMessages.Add(SdkMessage("Create"));

        var result = await _service.GetSdkMessagesAsync(Logical);

        Assert.HasCount(2, result, "duplicates collapse");
        Assert.AreEqual("Create", result[0].Name);
        Assert.AreEqual("Delete", result[1].Name);
    }

    [TestMethod]
    public async Task GetSdkMessagesNoneAsync_RoutedWhenLogicalNameNone()
    {
        _sdkMessages.Add(SdkMessage("WhoAmI"));
        _sdkMessages.Add(SdkMessage("Initialize"));

        var result = await _service.GetSdkMessagesAsync("none");

        Assert.HasCount(2, result);
        Assert.AreEqual("Initialize", result[0].Name);
    }

    [TestMethod]
    public async Task GetPluginInputOutputParametersAsync_MapsAliasedFields()
    {
        var requestId = Guid.NewGuid();
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest", requestId)
        {
            ["f.name"] = new AliasedValue("sdkmessagerequestfield", "name", "Target"),
            ["f.clrparser"] = new AliasedValue("sdkmessagerequestfield", "clrparser", "Microsoft.Xrm.Sdk.Entity, Microsoft.Xrm.Sdk"),
            ["f.optional"] = new AliasedValue("sdkmessagerequestfield", "optional", false),
            ["f.position"] = new AliasedValue("sdkmessagerequestfield", "position", 1)
        });
        _sdkMessageResponses.Add(new Entity("sdkmessageresponse", Guid.NewGuid())
        {
            ["f.name"] = new AliasedValue("sdkmessageresponsefield", "name", "id"),
            ["f.clrformatter"] = new AliasedValue("sdkmessageresponsefield", "clrformatter", "System.Guid, mscorlib"),
            ["f.position"] = new AliasedValue("sdkmessageresponsefield", "position", 0)
        });

        var result = await _service.GetPluginInputOutputParametersAsync(Logical, "Create");

        Assert.HasCount(2, result);
        Assert.AreEqual("Target", result[0].Name);
        Assert.AreEqual("Microsoft.Xrm.Sdk.Entity", result[0].Type);
        Assert.AreEqual(1, result[0].Position);
        Assert.AreEqual("id", result[1].Name);
    }

    [TestMethod]
    public async Task GetPluginCommentAsync_BuildsCommentBlock()
    {
        var requestId = Guid.NewGuid();
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest", requestId)
        {
            ["f.name"] = new AliasedValue("sdkmessagerequestfield", "name", "Target"),
            ["f.clrparser"] = new AliasedValue("sdkmessagerequestfield", "clrparser", "Microsoft.Xrm.Sdk.Entity"),
            ["f.optional"] = new AliasedValue("sdkmessagerequestfield", "optional", false),
            ["f.position"] = new AliasedValue("sdkmessagerequestfield", "position", 1)
        });

        var comment = await _service.GetPluginCommentAsync(Logical, "Create");

        StringAssert.Contains(comment, "InputParameters:");
        StringAssert.Contains(comment, "Target");
        StringAssert.Contains(comment, "OutputParameters:");

        var empty = await _service.GetPluginCommentAsync("", "");
        Assert.AreEqual(string.Empty, empty);
    }

    [TestMethod]
    public async Task GetCustomActions_NoOverload_FiltersNone()
    {
        var row = new Entity("sdkmessagerequest", Guid.NewGuid())
        {
            ["name"] = "my_CustomAction",
            ["primaryobjecttypecode"] = "none"
        };
        _sdkMessageRequests.Add(row);
        _sdkMessageRequests.Add(new Entity("sdkmessagerequest", Guid.NewGuid())
        {
            ["name"] = "other_BoundAction",
            ["primaryobjecttypecode"] = "account"
        });

        var result = await _service.GetCustomActionsAsync();

        Assert.HasCount(1, result, "only 'none' primary object type rows survive.");
        Assert.AreEqual("my_CustomAction", result[0].Name);
    }

    [TestMethod]
    public async Task GetCustomActions_WithLogicalName_ReturnsMessages()
    {
        _sdkMessages.Add(SdkMessage("all_MyAction"));

        var result = await _service.GetCustomActionsAsync(Logical);

        Assert.HasCount(1, result);
        Assert.AreEqual("all_MyAction", result[0].Name);
    }

    [TestMethod]
    public async Task GetCustomApisAsync_ReturnsMessageNames()
    {
        _customApis.Add(new Entity("customapi", Guid.NewGuid())
        {
            ["name"] = "all_MyApi",
            ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "all_MyApiMessage" },
            ["boundentitylogicalname"] = Logical
        });

        var bound = await _service.GetCustomApisAsync(Logical);
        Assert.HasCount(1, bound);
        Assert.AreEqual("all_MyApiMessage", bound[0].Name);

        _customApis.Clear();
        _customApis.Add(new Entity("customapi", Guid.NewGuid())
        {
            ["name"] = "all_Unbound",
            ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "all_UnboundMsg" }
        });
        var none = await _service.GetCustomApisAsync("none");
        Assert.HasCount(1, none);
    }

    [TestMethod]
    public async Task GetAllDataSourceAsync_And_IsExistDataSourceAsync_ReturnDataSources()
    {
        var sources = await _service.GetAllDataSourceAsync();
        Assert.HasCount(2, sources);
        Assert.AreEqual("newdatasource", sources[0].LogicalName);

        Assert.IsTrue(await _service.IsExistDataSourceAsync("neworder"));
        Assert.IsFalse(await _service.IsExistDataSourceAsync("nosuch"));
    }

    [TestMethod]
    public async Task GetProvisionedLanguagesAsync_MapsKnownLanguages()
    {
        var languages = await _service.GetProvisionedLanguagesAsync();
        Assert.IsTrue(languages.Any(x => x.SchemaName == "English-United States"));
        Assert.IsTrue(languages.Any(x => x.SchemaName == "Vietnamese-Viet Nam"));
    }

    [TestMethod]
    public async Task GetImpersonatingUserIdAsync_NullEmptyAndFound()
    {
        Assert.IsNull(await _service.GetImpersonatingUserIdAsync(""));

        var result = await _service.GetImpersonatingUserIdAsync("Nobody");
        Assert.IsNull(result);

        var userId = Guid.NewGuid();
        _systemUsers.Add(new Entity("systemuser", userId) { ["fullname"] = "Jane" });
        var found = await _service.GetImpersonatingUserIdAsync("Jane");
        Assert.AreEqual(userId, found);
    }

    [TestMethod]
    public async Task GetLanguageCodeAsync_ReturnsOrganizationLanguage()
    {
        _organization.Add(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1066 });
        Assert.AreEqual(1066, await _service.GetLanguageCodeAsync());

        _organization.Clear();
        Assert.AreEqual(1033, await _service.GetLanguageCodeAsync(),
            "Missing organization row falls back to 1033.");
    }

    [TestMethod]
    public async Task GetCommentAsync_ReadsLastLineJson_AndFallsBack()
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.d.ts");
        File.WriteAllLines(path, new[]
        {
            "export declare class Account { }",
            "//{\"JsForm\":[\"Account\"],\"JsWebApi\":true,\"Version\":\"\"}"
        });
        try
        {
            var comment = await _service.GetCommentAsync(Logical, path);
            Assert.IsTrue(comment.UseForm);
            Assert.IsTrue(comment.UseWebApi);
            Assert.AreNotEqual("", comment.Version);
        }
        finally { File.Delete(path); }

        var badPath = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}.d.ts");
        File.WriteAllLines(badPath, new[] { "not json at all" });
        try
        {
            var fallback = await _service.GetCommentAsync(Logical, badPath);
            Assert.IsFalse(fallback.UseForm);
            Assert.IsFalse(fallback.UseWebApi);
        }
        finally { File.Delete(badPath); }
    }

    [TestMethod]
    public async Task GetCommentAsync_MissingFile_UsesSeededForms()
    {
        XrmHelper.EntitiesFormXml = new List<SystemForm>
        {
            new() { Name = "Form", EntityLogicalName = Logical, FormType = FormType.Main, FormXml = "<form/>" }
        };

        var comment = await _service.GetCommentAsync(Logical, Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".d.ts"));
        Assert.IsTrue(comment.UseForm, "Seeded forms → form generation enabled.");
    }

    [TestMethod]
    public async Task GetEntityDialogFormsAsync_MapsRows()
    {
        _dialogForms.Add(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "My Dialog",
            ["description"] = "Dialog description",
            ["formxml"] = "<form/>",
            ["type"] = new OptionSetValue(1),
            ["objecttypecode"] = Logical,
            ["formid"] = Guid.NewGuid(),
            ["uniquename"] = "MyDialog"
        });

        var forms = await _service.GetEntityDialogFormsAsync();

        Assert.HasCount(1, forms);
        Assert.AreEqual("My Dialog", forms[0].Name);
        Assert.AreEqual(FormType.Dialog, forms[0].FormType);
    }

    [TestMethod]
    public void GetSafeEntityName_And_CanUseAsAlias_EscapeReservedWords()
    {
        Assert.AreEqual("_class", InvokePrivateStatic<string>("GetSafeEntityName", "class"));
        Assert.AreEqual("account", InvokePrivateStatic<string>("GetSafeEntityName", "account"));
        Assert.IsFalse(InvokePrivateStatic<bool>("CanUseAsAlias", "static"));
        Assert.IsTrue(InvokePrivateStatic<bool>("CanUseAsAlias", "account"));
    }

    private static T InvokePrivateStatic<T>(string name, params object?[] args) =>
        (T)typeof(MetadataService).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
