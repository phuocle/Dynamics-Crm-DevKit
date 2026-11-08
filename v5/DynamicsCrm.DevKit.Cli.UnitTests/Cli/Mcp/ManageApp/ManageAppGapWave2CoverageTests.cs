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
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// Wave-2 gap coverage for ManageAppTool: the icon GUID-not-found branch on
/// create and the ValidateApp payload that is present but null (the issue
/// extractor returns no issues instead of throwing).
///
/// NOTE (dead code — not coverable):
/// - HandleCreate ~240-249 and HandleUpdateNavigation ~552-571 (the
///   "failed XSD validation" blocks): the sitemap XML is tool-generated
///   (starter sitemap or merged from a parsed org sitemap), and the
///   embedded SiteMap.xsd accepts it — the error blocks never fire.
/// - ValidateSiteMapXml ~1236-1237 (`schemaSet == null || Count == 0`):
///   the CLI assembly always embeds SiteMap.xsd/SiteMapType.xsd, so the
///   schema set is never empty.
/// - ResolveEntityMetadataId ~1021-1032: private method with no callers.
/// </summary>
[TestClass]
public sealed class ManageAppGapWave2CoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity _appModule = null!;
    private Entity? _publisher;
    private Entity? _solution;
    private EntityMetadata? _accountMetadata;
    private Entity? _webResource;
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
        _webResource = null;
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
        RetrieveEntityRequest => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _accountMetadata! }
        },
        // A present-but-null AppValidationResponse exercises the null
        // payload guard of the issue extractor.
        OrganizationRequest { RequestName: "ValidateApp" } => new OrganizationResponse
        {
            Results = { ["AppValidationResponse"] = _validateAppPayload! }
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
                    return new EntityCollection();
                case "sitemap":
                    return new EntityCollection(new[]
                    {
                        new Entity("sitemap", Guid.NewGuid())
                        {
                            ["sitemapxml"] = "<SiteMap><Area Id='area_default'><Group Id='group_default' /></Area></SiteMap>"
                        }
                    });
                default:
                    return new EntityCollection();
            }
        }
        return new EntityCollection();
    }

    private ManageAppTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    [TestMethod]
    public async Task Create_IconGuidNotFound_ReturnsError()
    {
        var missingIconId = Guid.NewGuid();
        var result = await NewTool().manage_app(null!, action: "create", solution_name: "DevKit",
            display_name: "Icon App", icon_webresource: missingIconId.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), $"icon_webresource GUID '{missingIconId}' was not found.");
    }

    [TestMethod]
    public async Task ValidateApp_NullValidationResponse_ReportsValidated()
    {
        var result = await NewTool().manage_app(null!, app: "Sales Hub", action: "validate");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "validated");
        StringAssert.Contains(result.GetText(), "Sales Hub");
        var json = result.StructuredContent?.GetRawText() ?? "";
        Assert.IsFalse(json.Contains("validation_failed"));
    }
}
