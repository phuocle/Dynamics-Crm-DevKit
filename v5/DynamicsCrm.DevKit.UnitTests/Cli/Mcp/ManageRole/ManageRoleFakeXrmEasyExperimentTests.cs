using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using System.Runtime.CompilerServices;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleFakeXrmEasyExperimentTests
{
    [TestMethod]
    [Ignore("ServiceClient concrete methods cannot be redirected to FakeXrmEasy without a production seam; production code must remain unchanged.")]
    public void ServiceClient_TestOrganizationServiceBackingField_CanRunRoleListQuery()
    {
        var context = MiddlewareBuilder.New()
            .AddCrud().UseCrud()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        var roleId = Guid.NewGuid();
        context.Initialize(new[]
        {
            new Entity("role", roleId)
            {
                ["roleid"] = roleId,
                ["name"] = "Salesperson",
                ["ismanaged"] = false
            }
        });

        var client = (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));
        typeof(ServiceClient).GetField("<_testOrgSvcInterface>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)!
            .SetValue(client, context.GetOrganizationService());

        var tool = new ManageRoleTool(client, new McpDryRunOptions(), new McpExecutionContext(true));
        var result = (ModelContextProtocol.Protocol.CallToolResult)typeof(ManageRoleTool)
            .GetMethod("HandleList", BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(tool, new object[] { "Sales", "", 10 })!;

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text, "1 role");
    }
}
