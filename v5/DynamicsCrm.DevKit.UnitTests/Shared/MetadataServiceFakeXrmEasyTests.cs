using FakeItEasy;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Shared;

/// <summary>
/// FakeXrmEasy-driven coverage for <see cref="MetadataService"/> (Phase 2 seam:
/// ctor takes IOrganizationServiceAsync2).
/// </summary>
[TestClass]
public sealed class MetadataServiceFakeXrmEasyTests
{
    private IXrmFakedContext _context = null!;
    private MetadataService _service = null!;
    private FakeRetrieveEntityExecutor _metadataExecutor = null!;
    private FakeRetrieveAllEntitiesExecutor _allMetadataExecutor = null!;

    [TestInitialize]
    public void Setup()
    {
        _metadataExecutor = new FakeRetrieveEntityExecutor();
        _allMetadataExecutor = new FakeRetrieveAllEntitiesExecutor();
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(new FakeProvisionedLanguagesExecutor())
            .AddFakeMessageExecutor(_metadataExecutor)
            .AddFakeMessageExecutor(_allMetadataExecutor)
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _context.InitializeMetadata(SystemFormMetadata());
        _context.InitializeMetadata(WorkflowMetadata());
        _service = new MetadataService(_context.GetAsyncOrganizationService2());
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    private void Seed(Entity entity) => _context.GetOrganizationService().Create(entity);

    private static EntityMetadata BuildEntityMetadata(string logicalName, string schemaName, string displayName, params AttributeMetadata[] attributes)
    {
        var metadata = new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            DisplayName = new Label(displayName, 1033),
            Description = new Label($"{displayName} description", 1033)
        };
        if (attributes.Length > 0)
            typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))!.SetValue(metadata, attributes);
        return metadata;
    }

    private static StringAttributeMetadata StringAttr(string logicalName, string displayName)
        => new() { LogicalName = logicalName, SchemaName = displayName, DisplayName = new Label(displayName, 1033) };

    private static void SetMetadata(EntityMetadata metadata, string property, object? value) =>
        typeof(EntityMetadata).GetProperty(property)!.SetValue(metadata, value);

    private sealed class FakeProvisionedLanguagesExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request) => request is RetrieveProvisionedLanguagesRequest;
        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var response = new RetrieveProvisionedLanguagesResponse();
            response.Results["RetrieveProvisionedLanguages"] = new[] { 1033, 1036 };
            return response;
        }
        public Type GetResponsibleRequestType() => typeof(RetrieveProvisionedLanguagesRequest);
    }

    /// <summary>
    /// RetrieveEntityRequest is not supported by the non-commercial FakeXrmEasy
    /// middleware, so answer it from a local metadata list.
    /// </summary>
    private sealed class FakeRetrieveEntityExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<EntityMetadata> Metadata { get; } = new();

        public bool CanExecute(OrganizationRequest request) => request is RetrieveEntityRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var retrieveEntity = (RetrieveEntityRequest)request;
            var metadata = Metadata.FirstOrDefault(m => m.LogicalName == retrieveEntity.LogicalName)
                ?? throw new InvalidOperationException($"Metadata not found: {retrieveEntity.LogicalName}");
            var response = new RetrieveEntityResponse();
            response.Results["EntityMetadata"] = metadata;
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveEntityRequest);
    }

    /// <summary>
    /// RetrieveAllEntitiesRequest is not supported by the non-commercial FakeXrmEasy
    /// middleware, so answer it from a local metadata list.
    /// </summary>
    private sealed class FakeRetrieveAllEntitiesExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<EntityMetadata> Metadata { get; } = new();

        public bool CanExecute(OrganizationRequest request) => request is RetrieveAllEntitiesRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var response = new RetrieveAllEntitiesResponse();
            response.Results["EntityMetadata"] = Metadata.ToArray();
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveAllEntitiesRequest);
    }

    private static EntityMetadata SystemFormMetadata() => BuildEntityMetadata("systemform", "SystemForm", "System Form",
        new UniqueIdentifierAttributeMetadata { LogicalName = "formid" },
        new PicklistAttributeMetadata { LogicalName = "type" },
        new PicklistAttributeMetadata { LogicalName = "formactivationstate" },
        new BooleanAttributeMetadata { LogicalName = "ismanaged" },
        StringAttr("name", "Name"), StringAttr("description", "Description"),
        StringAttr("formxml", "Form Xml"), StringAttr("objecttypecode", "Object Type Code"),
        StringAttr("uniquename", "Unique Name"));

    private static EntityMetadata WorkflowMetadata()
    {
        var metadata = BuildEntityMetadata("workflow", "Workflow", "Workflow",
        new UniqueIdentifierAttributeMetadata { LogicalName = "workflowid" },
        new PicklistAttributeMetadata { LogicalName = "category" },
        new IntegerAttributeMetadata { LogicalName = "statecode" },
        new PicklistAttributeMetadata { LogicalName = "businessprocesstype" },
        StringAttr("primaryentity", "Primary Entity"),
        StringAttr("name", "Name"), StringAttr("xaml", "Xaml"), StringAttr("uniquename", "Unique Name"));
        SetMetadata(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "workflowid");
        return metadata;
    }

    [TestMethod]
    public async Task GetProvisionedLanguagesAsync_MapsProvisionedCodes()
    {
        var result = await _service.GetProvisionedLanguagesAsync();

        Assert.AreEqual(2, result.Count);
        Assert.IsTrue(result.Any(x => x.LogicalName == "1033"));
        Assert.IsTrue(result.Any(x => x.LogicalName == "1036"));
    }

    [TestMethod]
    public async Task GetLanguageCodeAsync_ReturnsSeededValue_And_Defaults()
    {
        Seed(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1036 });
        Assert.AreEqual(1036, await _service.GetLanguageCodeAsync());

        var empty = MiddlewareBuilder.New().AddCrud().UseCrud()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial).Build();
        var service = new MetadataService(empty.GetAsyncOrganizationService2());
        Assert.AreEqual(1033, await service.GetLanguageCodeAsync());
    }

    [TestMethod]
    public async Task FetchEntityMetadataAsync_ReturnsInitializedMetadata()
    {
        _metadataExecutor.Metadata.Add(BuildEntityMetadata("account", "Account", "Account", StringAttr("name", "Name")));

        var sync = _service.FetchEntityMetadata("account");
        var asyncResult = await _service.FetchEntityMetadataAsync("account");

        Assert.AreEqual("Account", sync.SchemaName);
        Assert.AreEqual("Account", asyncResult.SchemaName);
        Assert.AreEqual("name", asyncResult.Attributes!.Single().LogicalName);
    }

    [TestMethod]
    public async Task GetEntitiesMetadataAsync_ByEntityFilters_ReturnsAll()
    {
        _allMetadataExecutor.Metadata.Add(BuildEntityMetadata("account", "Account", "Account"));
        _allMetadataExecutor.Metadata.Add(BuildEntityMetadata("contact", "Contact", "Contact"));

        var all = await _service.GetEntitiesMetadataAsync(EntityFilters.Entity);
        var schemaNames = await _service.GetAllEntitiesSchemaAsync(EntityFilters.Entity);

        Assert.IsTrue(all.Count >= 2);
        CollectionAssert.Contains(schemaNames, "Account");
        CollectionAssert.Contains(schemaNames, "Contact");
    }

    [TestMethod]
    public async Task GetEntitiesMetadataAsync_BySchemaNames_UsesStaticCache()
    {
        var cached = BuildEntityMetadata("account", "Account", "Account");
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { cached };

        var result = await _service.GetEntitiesMetadataAsync(new List<string> { "Account" });

        Assert.AreEqual(1, result.Count);
        Assert.AreSame(cached, result[0]);
    }

    [TestMethod]
    public async Task ReadEntitiesMetadataAsync_PopulatesStaticCache()
    {
        _allMetadataExecutor.Metadata.Add(BuildEntityMetadata("account", "Account", "Account"));

        await _service.ReadEntitiesMetadataAsync(EntityFilters.Entity);

        Assert.IsTrue(XrmHelper.EntitiesMetadata.Count >= 1);
        Assert.IsTrue(XrmHelper.EntitiesMetadata.Any(x => x.SchemaName == "Account"));
    }

    [TestMethod]
    public async Task GetEntitiesFormXmlAsync_ReadsSeededSystemForms()
    {
        var formId = Guid.NewGuid();
        Seed(new Entity("systemform", formId)
        {
            ["name"] = "Information",
            ["description"] = "Main form",
            ["formxml"] = "<form><tabs /></form>",
            ["type"] = new OptionSetValue(2),
            ["objecttypecode"] = "account",
            ["formactivationstate"] = new OptionSetValue(1),
            ["formid"] = formId
        });
        Seed(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Inactive",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue(2),
            ["objecttypecode"] = "contact",
            ["formactivationstate"] = new OptionSetValue(0)
        });

        var forms = await _service.GetEntitiesFormXmlAsync();

        Assert.AreEqual(1, forms.Count);
        Assert.AreEqual("Information", forms[0].Name);
        Assert.AreEqual("account", forms[0].EntityLogicalName);
        Assert.AreEqual(FormType.Main, forms[0].FormType);
        Assert.AreEqual(formId, forms[0].FormId);
    }

    [TestMethod]
    public async Task ReadEntitiesFormXmlAsync_PopulatesStaticCache_ThenGetEntityFormsFilters()
    {
        Seed(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Information",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue(2),
            ["objecttypecode"] = "account",
            ["formactivationstate"] = new OptionSetValue(1)
        });
        Seed(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Quick",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue(7),
            ["objecttypecode"] = "account",
            ["formactivationstate"] = new OptionSetValue(1)
        });

        await _service.ReadEntitiesFormXmlAsync();

        Assert.AreEqual(2, XrmHelper.EntitiesFormXml.Count);
        var accountForms = await _service.GetEntityFormsAsync("account");
        Assert.AreEqual(2, accountForms.Count);
        Assert.IsTrue(accountForms.Any(x => x.IsQuickCreate && x.FormType == FormType.QuickCreate));
        Assert.IsTrue(accountForms.Any(x => !x.IsQuickCreate && x.FormType == FormType.Main));
    }

    [TestMethod]
    public async Task GetEntityProcessFormAsync_ReturnsBpfForms()
    {
        // FakeXrmEasy fetch evaluation drops workflow rows when a <filter> has more
        // than one condition, so stub ExecuteAsync directly for this path (the
        // 1-arg RetrieveMultipleAsync call binds to an extension that wraps
        // ExecuteAsync(RetrieveMultipleRequest)).
        var stub = A.Fake<IOrganizationServiceAsync2>();
        var rows = new EntityCollection(new List<Entity>
        {
            new("workflow", Guid.NewGuid()) { ["name"] = "BPF", ["xaml"] = "Process: account" }
        });
        A.CallTo(() => stub.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(_ => Task.FromResult(rows));
        var service = new MetadataService(stub);

        var forms = await service.GetEntityProcessFormAsync(1, "account");

        Assert.AreEqual(1, forms.Count);
        Assert.AreEqual("BPF", forms[0].Name);
        Assert.AreEqual("account", forms[0].EntityLogicalName);
        Assert.AreEqual("Process: account", forms[0].xaml);
    }

    [TestMethod]
    public async Task GetEntityDialogFormsAsync_ReturnsActiveUnmanagedDialogs()
    {
        var dialogId = Guid.NewGuid();
        Seed(new Entity("systemform", dialogId)
        {
            ["name"] = "Dialog",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue(8),
            ["objecttypecode"] = "account",
            ["formactivationstate"] = new OptionSetValue(1),
            ["ismanaged"] = false,
            ["formid"] = dialogId,
            ["uniquename"] = "dialog_unique"
        });
        Seed(new Entity("systemform", Guid.NewGuid())
        {
            ["name"] = "Main",
            ["formxml"] = "<form />",
            ["type"] = new OptionSetValue(2),
            ["objecttypecode"] = "account",
            ["formactivationstate"] = new OptionSetValue(1),
            ["ismanaged"] = false
        });

        var dialogs = await _service.GetEntityDialogFormsAsync();

        Assert.AreEqual(1, dialogs.Count);
        Assert.AreEqual("Dialog", dialogs[0].Name);
        Assert.AreEqual(FormType.Dialog, dialogs[0].FormType);
        Assert.AreEqual("dialog_unique", dialogs[0].UniqueName);
        Assert.AreEqual(dialogId, dialogs[0].FormId);
    }

    [TestMethod]
    public async Task GetImpersonatingUserIdAsync_ByFullName()
    {
        Assert.IsNull(await _service.GetImpersonatingUserIdAsync(""));
        var userId = Guid.NewGuid();
        Seed(new Entity("systemuser", userId) { ["fullname"] = "Deployment User" });

        Assert.AreEqual(userId, await _service.GetImpersonatingUserIdAsync("Deployment User"));
        Assert.IsNull(await _service.GetImpersonatingUserIdAsync("Nobody"));
    }

    [TestMethod]
    public async Task GetCommentAsync_NoDtsFile_UsesFormXmlCache()
    {
        XrmHelper.EntitiesFormXml = new List<SystemForm>
        {
            new() { Name = "Information", FormType = FormType.Main, EntityLogicalName = "account" }
        };
        var missingFile = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N") + ".d.ts");

        var comment = await _service.GetCommentAsync("account", missingFile);

        Assert.IsTrue(comment.UseForm);
        Assert.IsTrue(comment.UseWebApi);
        Assert.AreEqual(Const.Version, comment.Version);
    }

    [TestMethod]
    public async Task GetCommentAsync_ExistingDtsFile_ReadsOldComment()
    {
        var file = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N") + ".d.ts");
        await File.WriteAllLinesAsync(file,
        [
            "// generated",
            "//{'Version':'1.0.0','UseForm':false,'UseWebApi':false,'JsForm':['Information'],'JsWebApi':true}"
        ]);
        try
        {
            var comment = await _service.GetCommentAsync("account", file);

            Assert.IsTrue(comment.UseForm);
            Assert.IsTrue(comment.UseWebApi);
            Assert.AreEqual("1.0.0", comment.Version);
        }
        finally
        {
            File.Delete(file);
        }
    }

    [TestMethod]
    public async Task GetPluginCommentAsync_EmptyArgs_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, await _service.GetPluginCommentAsync("", "Create"));
        Assert.AreEqual(string.Empty, await _service.GetPluginCommentAsync("account", ""));
    }

    [TestMethod]
    public void GetListXrmEntity_MapsEntitiesAndAttributes()
    {
        var metadata = BuildEntityMetadata("account", "Account", "Account",
            StringAttr("name", "Name"), StringAttr("telephone1", "Telephone"));
        SetMetadata(metadata, nameof(EntityMetadata.ObjectTypeCode), (int?)1);
        SetMetadata(metadata, nameof(EntityMetadata.IsCustomEntity), (bool?)false);
        SetMetadata(metadata, nameof(EntityMetadata.PrimaryImageAttribute), "entityimage");
        SetMetadata(metadata, nameof(EntityMetadata.EntitySetName), "accounts");
        var contact = BuildEntityMetadata("contact", "Contact", "Contact", StringAttr("fullname", "Full Name"));

        var list = MetadataService.GetListXrmEntity(new List<EntityMetadata> { metadata, contact });

        Assert.AreEqual(2, list.Count);
        var account = list.Single(x => x.LogicalName == "account");
        Assert.AreEqual("Account", account.SchemaName);
        Assert.AreEqual("Account", account.DisplayName);
        Assert.AreEqual(1, account.EntityTypeCode);
        Assert.IsFalse(account.IsCustomEntity);
        Assert.IsTrue(account.HasImage);
        Assert.AreEqual("accounts", account.EntitySetName);
        var contactResult = list.Single(x => x.LogicalName == "contact");
        Assert.IsFalse(contactResult.HasImage);
        Assert.AreEqual(-1, contactResult.EntityTypeCode);
        Assert.AreEqual(string.Empty, contactResult.EntitySetName);
    }
}
