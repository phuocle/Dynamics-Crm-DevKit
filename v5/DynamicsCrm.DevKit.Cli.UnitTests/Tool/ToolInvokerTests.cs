using DynamicsCrm.DevKit.Cli.Tool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

/// <summary>
/// In-process invocation over the shared catalog: happy path through the same
/// DI registrations the stdio host uses, dry-run mutation blocking, handler
/// error results, and invocation-level failure documentation.
/// </summary>
[TestClass]
public sealed class ToolInvokerTests
{
    // ──────────────────────────────────────────────
    // Happy path: list through the invocation scope
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Invoke_ManageViewList_ReturnsSuccessResult()
    {
        using var fake = new FakeSdkClient();
        fake.OnExecute = request =>
        {
            if (request is RetrieveAllEntitiesRequest)
                return RetrieveAllEntities(ContactMetadata());
            return new OrganizationResponse();
        };
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" }
            ? Collection(new Entity("savedquery", Guid.NewGuid())
            {
                ["name"] = "Active Contacts",
                ["querytype"] = 0,
                ["isdefault"] = true,
                ["statecode"] = new OptionSetValue(0),
                ["ismanaged"] = false,
            })
            : new EntityCollection();

        var services = ToolServices.CreateInvocationServices(fake.Client, dryRun: false, impersonatedUserDisplay: null);
        try
        {
            var outcome = await ToolInvoker.InvokeAsync(
                ManageView(),
                new JsonObject
                {
                    ["action"] = "list",
                    ["entity_name"] = "contact",
                },
                services);

            Assert.IsNull(outcome.Exception, $"unexpected exception: {outcome.Exception?.Message}");
            Assert.IsNotNull(outcome.Result);
            Assert.IsFalse(outcome.Result.IsError == true, Text(outcome.Result));
            StringAssert.Contains(Text(outcome.Result), "[Success]");
            Assert.IsNotNull(outcome.Result.StructuredContent);
            Assert.AreEqual("success", outcome.Result.StructuredContent.Value.GetProperty("status").GetString());
            Assert.AreEqual("list", outcome.Result.StructuredContent.Value.GetProperty("action").GetString());
        }
        finally
        {
            await ((IAsyncDisposable)services).DisposeAsync();
        }
    }

    // ──────────────────────────────────────────────
    // Mutation blocked: dry-run policy from the same registration path
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Invoke_ManageViewRename_WithDryRun_ReturnsDryRunResultWithoutMutation()
    {
        var viewId = Guid.NewGuid();
        using var fake = new FakeSdkClient();
        var updateReachedDataverse = false;
        fake.OnUpdate = _ => updateReachedDataverse = true;
        fake.OnExecute = request =>
        {
            if (request is RetrieveAllEntitiesRequest)
                return RetrieveAllEntities(ContactMetadata());
            return new OrganizationResponse();
        };
        fake.OnRetrieveMultiple = query => query is QueryExpression { EntityName: "savedquery" } expression &&
                expression.Criteria.Conditions.Any(c => c.AttributeName == "savedqueryid" && c.Operator == ConditionOperator.Equal)
            ? Collection(new Entity("savedquery", viewId)
            {
                ["name"] = "Old Name",
                ["returnedtypecode"] = "contact",
                ["querytype"] = 0,
            })
            : new EntityCollection();

        var services = ToolServices.CreateInvocationServices(fake.Client, dryRun: true, impersonatedUserDisplay: null);
        try
        {
            var outcome = await ToolInvoker.InvokeAsync(
                ManageView(),
                new JsonObject
                {
                    ["action"] = "rename",
                    ["entity_name"] = "contact",
                    ["view_id"] = viewId.ToString(),
                    ["view_name"] = "Renamed View",
                },
                services);

            Assert.IsNull(outcome.Exception, $"unexpected exception: {outcome.Exception?.Message}");
            Assert.IsNotNull(outcome.Result);
            StringAssert.Contains(Text(outcome.Result), "[DryRun]");
            StringAssert.Contains(Text(outcome.Result), "Would RENAME");
            Assert.IsFalse(updateReachedDataverse, "no update may reach Dataverse while mutations are blocked");
            Assert.IsNotNull(outcome.Result.StructuredContent);
            Assert.AreEqual("not_executed", outcome.Result.StructuredContent.Value.GetProperty("status").GetString());
        }
        finally
        {
            await ((IAsyncDisposable)services).DisposeAsync();
        }
    }

    // ──────────────────────────────────────────────
    // Handler error result: domain validation surfaces as IsError CallToolResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Invoke_ManageViewList_EmptyEntityName_ReturnsIsErrorResult()
    {
        using var fake = new FakeSdkClient();
        var services = ToolServices.CreateInvocationServices(fake.Client, dryRun: false, impersonatedUserDisplay: null);
        try
        {
            var outcome = await ToolInvoker.InvokeAsync(
                ManageView(),
                new JsonObject
                {
                    ["action"] = "list",
                    ["entity_name"] = "",
                },
                services);

            Assert.IsNull(outcome.Exception, $"unexpected exception: {outcome.Exception?.Message}");
            Assert.IsNotNull(outcome.Result, "handler domain validation must come back as a CallToolResult");
            Assert.AreEqual(true, outcome.Result.IsError);
            StringAssert.Contains(Text(outcome.Result), "entity_name is required");
        }
        finally
        {
            await ((IAsyncDisposable)services).DisposeAsync();
        }
    }

    // ──────────────────────────────────────────────
    // Invocation-level failures: binding errors surface as exceptions
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Invoke_WrongArgumentType_ReturnsExceptionOutcome()
    {
        using var fake = new FakeSdkClient();
        var services = ToolServices.CreateInvocationServices(fake.Client, dryRun: false, impersonatedUserDisplay: null);
        try
        {
            var outcome = await ToolInvoker.InvokeAsync(
                ManageView(),
                new JsonObject
                {
                    ["action"] = new JsonObject { ["nested"] = true },
                    ["entity_name"] = "contact",
                },
                services);

            Assert.IsNull(outcome.Result, "a JSON binding failure must not become a CallToolResult");
            Assert.IsNotNull(outcome.Exception);
            Assert.IsNotEmpty(outcome.Exception.Message);
        }
        finally
        {
            await ((IAsyncDisposable)services).DisposeAsync();
        }
    }

    // ──────────────────────────────────────────────
    // Documented behavior: direct dispatch resolves the tool by the McpServerTool
    // instance; CallToolRequestParams.Name is never re-resolved.
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Invoke_ParamsNameMismatch_DirectDispatchIgnoresParamsName()
    {
        using var fake = new FakeSdkClient();
        var services = ToolServices.CreateInvocationServices(fake.Client, dryRun: false, impersonatedUserDisplay: null);
        var server = ToolServer.Create(services);
        try
        {
            var request = new RequestContext<CallToolRequestParams>(
                server,
                new JsonRpcRequest
                {
                    Id = new RequestId("1"),
                    Method = "tools/call",
                },
                new CallToolRequestParams
                {
                    Name = "definitely_not_a_registered_tool",
                    Arguments = new Dictionary<string, JsonElement>
                    {
                        ["action"] = JsonSerializer.SerializeToElement("list"),
                        ["entity_name"] = JsonSerializer.SerializeToElement(""),
                    },
                });

            var result = await ManageView().Tool.InvokeAsync(request);

            StringAssert.Contains(Text(result), "entity_name is required", "the named tool was dispatched, not 'definitely_not_a_registered_tool'");
            Assert.AreEqual(true, result.IsError);
        }
        finally
        {
            await server.DisposeAsync();
            await ((IAsyncDisposable)services).DisposeAsync();
        }
    }

    // ──────────────────────────────────────────────
    // Helpers
    // ──────────────────────────────────────────────

    private static ToolCatalogEntry ManageView() =>
        ToolCatalog.Find("manage_view")
        ?? throw new InvalidOperationException("manage_view not found in the catalog");

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) => result.GetText();

    private static EntityCollection Collection(params Entity[] entities)
    {
        var collection = new EntityCollection();
        foreach (var entity in entities) collection.Entities.Add(entity);
        return collection;
    }

    private static EntityMetadata ContactMetadata() => new()
    {
        LogicalName = "contact",
        SchemaName = "Contact",
        DisplayName = new Label("Contact", 1033),
    };

    private static OrganizationResponse RetrieveAllEntities(params EntityMetadata[] metadata)
    {
        var response = new RetrieveAllEntitiesResponse();
        response.Results["EntityMetadata"] = metadata;
        return response;
    }
}
