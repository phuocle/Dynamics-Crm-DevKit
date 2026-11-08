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

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageView;

/// <summary>
/// Extra manage_view coverage on a FakeSdkClient: the invalid
/// imageproviderfunctionname branch of the cell-update icon validation
/// (empty and whitespace-only function names are rejected with the
/// custom-icon hint).
/// </summary>
[TestClass]
public sealed class ManageViewFakeSdkExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity _view = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        var contactMeta = TestMetadata.Entity("contact", "Contact",
            TestMetadata.String("fullname", "Full Name"),
            TestMetadata.Lookup("accountid", "Account", "account"));
        var accountMeta = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name", "Account Name"),
            TestMetadata.Lookup("accountid", "Account", "contact"));

        _view = new Entity("savedquery", Guid.NewGuid())
        {
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='name' /></entity></fetch>",
            ["layoutxml"] = "<grid><row><cell name='name' width='200' /></row></grid>",
            ["name"] = "Active Accounts",
            ["returnedtypecode"] = "account",
            ["querytype"] = 0
        };

        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[] { accountMeta, contactMeta } }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = r.LogicalName == "contact" ? contactMeta : accountMeta }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression qe && qe.EntityName == "savedquery")
                return new EntityCollection(new[] { _view });
            return new EntityCollection();
        };
    }

    public void Dispose() => _fake.Dispose();

    private ManageViewTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext(), null!);

    [TestMethod]
    public async System.Threading.Tasks.Task Update_CellUpdates_WhitespaceIconFunctionName_IsBlocked()
    {
        var result = await NewTool().manage_view(null!, entity_name: "Account", view_id: _view.Id.ToString(),
            action: "update", cell_updates_json: """
[{ "cell_name": "name", "set_attributes": { "imageproviderfunctionname": "   " } }]
""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "imageproviderfunctionname");
        StringAssert.Contains(result.GetText(), "non-empty JS function name without whitespace");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Update_CellUpdates_EmptyIconFunctionName_IsBlocked()
    {
        var result = await NewTool().manage_view(null!, entity_name: "Account", view_id: _view.Id.ToString(),
            action: "update", cell_updates_json: """
[{ "cell_name": "name", "set_attributes": { "imageproviderfunctionname": "" } }]
""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "imageproviderfunctionname '' on cell 'name' is invalid");
    }

    [TestMethod]
    public async System.Threading.Tasks.Task Update_CellUpdates_ValidFunction_MissingWebResource_IsBlocked()
    {
        // A non-empty function name passes function validation and reaches the
        // web-resource existence check, which fails on the in-memory fake.
        var result = await NewTool().manage_view(null!, entity_name: "Account", view_id: _view.Id.ToString(),
            action: "update", cell_updates_json: """
[{ "cell_name": "name", "set_attributes": { "imageproviderfunctionname": "Contoso.icon", "imageproviderwebresource": "devkit_/missing.js" } }]
""");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "JS web resource 'devkit_/missing.js' not found");
        StringAssert.Contains(result.GetText(), "manage_webresource");
    }
}
