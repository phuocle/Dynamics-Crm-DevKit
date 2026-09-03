using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageCommand;

/// <summary>
/// Verifies the in-memory Dataverse behavior available to MCP tests and covers
/// command paths which intentionally return before a live ServiceClient is used.
/// ServiceClient cannot be replaced by FakeXrmEasy: its SDK CRUD methods are final.
/// </summary>
[TestClass]
public sealed class ManageCommandFakeXrmEasyCoverageTests
{
    private static readonly Type ToolType = typeof(ManageCommandTool);
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    [TestMethod]
    public void FakeXrmEasy_CanSimulateAppActionFetchXml_ButNotServiceClient()
    {
        var context = MiddlewareBuilder.New()
            .AddCrud()
            .UseCrud()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        var fakeService = context.GetOrganizationService();
        var commandId = Guid.NewGuid();
        fakeService.Create(new Entity("appaction", commandId)
        {
            ["buttonlabeltext"] = "Approve",
            ["contextvalue"] = "account"
        });

        var rows = fakeService.RetrieveMultiple(new FetchExpression(
            "<fetch><entity name='appaction'><attribute name='buttonlabeltext'/><filter><condition attribute='contextvalue' operator='eq' value='account'/></filter></entity></fetch>"));
        Assert.AreEqual(1, rows.Entities.Count);
        Assert.AreEqual("Approve", rows.Entities[0].GetAttributeValue<string>("buttonlabeltext"));

        var retrieveMultiple = typeof(ServiceClient).GetMethod(nameof(ServiceClient.RetrieveMultiple), new[] { typeof(QueryBase) })!;
        Assert.IsTrue(retrieveMultiple.IsFinal,
            "ServiceClient.RetrieveMultiple is final, so FakeXrmEasy's IOrganizationService cannot be substituted without a production seam.");
    }

    [TestMethod]
    public void CreateFlyoutItem_InvalidOnclickType_ReturnsBeforeDataverseMutation()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var result = Invoke(tool, "CreateFlyoutItem",
            "account", 0, Guid.NewGuid(), "sales", "devkit", null, Guid.NewGuid(), "More", "Form",
            "Approve", "unsupported", "", "", 100);

        Assert.AreEqual("Invalid onclick_type 'unsupported'. Use 'none', 'javascript', or 'formula'.", TupleItem<string>(result, 1));
        Assert.IsNull(TupleItem<string>(result, 2));
    }

    [TestMethod]
    public void CreateActions_InvalidAppGuid_ReturnFriendlyErrorsBeforeServiceClient()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));

        StringAssert.Contains(Text(tool.manage_command(action: "create", entity_name: "account", location: "form", label: "Go", app_id: "bad")), "not a valid app_id GUID");
        StringAssert.Contains(Text(tool.manage_command(action: "add_flyout", entity_name: "account", location: "form", label: "More", app_id: "bad", items: "[{\"label\":\"One\"}]")), "not a valid app_id GUID");
        StringAssert.Contains(Text(tool.manage_command(action: "add_split_button", entity_name: "account", location: "form", label: "More", app_id: "bad", items: "[{\"label\":\"One\"}]")), "not a valid app_id GUID");
    }

    private static object Invoke(ManageCommandTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateInstance)!.Invoke(tool, args)!;

    private static T TupleItem<T>(object tuple, int oneBasedIndex) =>
        (T)tuple.GetType().GetField($"Item{oneBasedIndex}")!.GetValue(tuple)!;

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) =>
        result.Content?[0] is ModelContextProtocol.Protocol.TextContentBlock text ? text.Text ?? "" : "";
}
