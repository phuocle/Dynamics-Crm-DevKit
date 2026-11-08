using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// Extra manage_app coverage on a FakeSdkClient: update_navigation guards
/// (missing appmoduleidunique, entity validation blocked), the icon web
/// resource resolution failure on create, and the ValidateApp response
/// shapes without a ValidationIssueList or with opaque issue objects.
/// </summary>
[TestClass]
public sealed class ManageAppFakeSdkExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity _appModule = null!;
    private Entity? _publisher;
    private Entity? _solution;
    private EntityMetadata? _accountMetadata;
    private EntityMetadata? _retrieveEntityResult;
    private Entity? _webResource;
    private List<Entity> _sitemapComponents = new();
    private string? _sitemapXml;
    private object? _validateAppPayload;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _appModule = new Entity("appmodule", Guid.NewGuid())
        {
            ["name"] = "Sales Hub",
            ["uniquename"] = "saleshub",
            ["appmoduleid"] = Guid.NewGuid(),
            ["appmoduleidunique"] = Guid.NewGuid()
        };
        _publisher = new Entity("publisher", Guid.NewGuid())
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
        _solution = new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", _publisher.Id)
        };
        _accountMetadata = TestMetadata.Entity("account", "Account");
        _retrieveEntityResult = _accountMetadata;
        _webResource = null;
        _sitemapComponents = new List<Entity>();
        _sitemapXml = "<SiteMap><Area Id='area_default'><Group Id='group_default' /></Area></SiteMap>";
        _validateAppPayload = null;

        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "publisher" && _publisher != null && id == _publisher.Id) return _publisher;
            return new Entity(entityName, id);
        };
    }

    public void Dispose() => _fake.Dispose();

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = new[] { _accountMetadata! } }
        },
        RetrieveEntityRequest req when _retrieveEntityResult != null => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _retrieveEntityResult }
        },
        OrganizationRequest { RequestName: "ValidateApp" } => new OrganizationResponse
        {
            Results = { ["AppValidationResponse"] = _validateAppPayload ?? (object)new object() }
        },
        _ => new OrganizationResponse()
    };

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        if (query is QueryExpression qe)
        {
            switch (qe.EntityName)
            {
                case "appmodule":
                {
                    var uniqueNameEqual = qe.Criteria.Conditions.Any(c =>
                        c.AttributeName == "uniquename" && c.Operator == ConditionOperator.Equal);
                    if (uniqueNameEqual) return new EntityCollection();
                    return new EntityCollection(new[] { _appModule });
                }
                case "solution":
                    return _solution != null ? new EntityCollection(new[] { _solution }) : new EntityCollection();
                case "webresource":
                    return _webResource != null ? new EntityCollection(new[] { _webResource }) : new EntityCollection();
                case "appmodulecomponent":
                    return new EntityCollection(_sitemapComponents);
                case "sitemap":
                    return _sitemapXml != null
                        ? new EntityCollection(new[] { new Entity("sitemap", Guid.NewGuid()) { ["sitemapxml"] = _sitemapXml } })
                        : new EntityCollection();
                default:
                    return new EntityCollection();
            }
        }
        return new EntityCollection();
    }

    private ManageAppTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    [TestMethod]
    public async System.Threading.Tasks.Task Create_UnknownIconWebResourceName_ReturnsError()
    {
        var result = await NewTool().manage_app(null!, action: "create", solution_name: "DevKit", display_name: "New App",
            icon_webresource: "devkit_/icons/missing.svg");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "icon_webresource 'devkit_/icons/missing.svg'");
        StringAssert.Contains(result.GetText(), "was not found");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task UpdateNavigation_AppWithoutAppModuleIdUnique_ReturnsError()
    {
        _appModule["appmoduleidunique"] = null;

        var result = await NewTool().manage_app(null!, app: "Sales Hub", action: "update_navigation",
            operations: """[{"action":"add_area","label":"X"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "has no appmoduleidunique");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task UpdateNavigation_EntityMetadataIdMissing_BlocksEntityValidation()
    {
        // RetrieveEntityRequest returns metadata without a MetadataId so
        // BuildEntityAppComponents fails and the navigation update is blocked.
        var noId = TestMetadata.Entity("account", "Account");
        TestMetadata.Set(noId, nameof(EntityMetadata.MetadataId), null);
        _retrieveEntityResult = noId;
        _sitemapComponents.Add(new Entity("appmodulecomponent", Guid.NewGuid())
        {
            ["appmoduleidunique"] = _appModule.GetAttributeValue<Guid>("appmoduleidunique"),
            ["componenttype"] = new OptionSetValue(62),
            ["objectid"] = Guid.NewGuid()
        });

        var result = await NewTool().manage_app(null!, app: "Sales Hub", action: "update_navigation",
            operations: """[{"action":"add_item","area":"area_default","group":"group_default","entity":"Account"}]""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Entity validation failed");
        StringAssert.Contains(result.GetText(), "blocked_entity_validation");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task ValidateApp_ResponseWithoutIssueList_StatusValidated()
    {
        // Plain object payload: no ValidationIssueList property → no issues extracted.
        _validateAppPayload = new object();

        var result = await NewTool().manage_app(null!, app: "Sales Hub", action: "validate");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "validated");
        StringAssert.Contains(result.GetText(), "Sales Hub");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task ValidateApp_OpaqueIssues_FallBackToIssueToString()
    {
        _validateAppPayload = new
        {
            ValidationIssueList = new List<string> { "FormLibA references a missing web resource" }
        };

        var result = await NewTool().manage_app(null!, app: "Sales Hub", action: "validate");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "validation_failed. 1 error(s).");
        // The issue message is carried in the structured ValidationErrors payload.
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "FormLibA references a missing web resource");
    }
}
