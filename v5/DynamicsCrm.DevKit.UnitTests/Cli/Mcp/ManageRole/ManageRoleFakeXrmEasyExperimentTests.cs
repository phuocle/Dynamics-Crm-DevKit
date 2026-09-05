using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRole;

[TestClass]
public sealed class ManageRoleFakeXrmEasyExperimentTests
{
    [TestMethod]
    public void HandleList_RoleListQuery_RunsAgainstFakeXrmEasy()
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

        var tool = new ManageRoleTool(context.GetOrganizationService(), new McpDryRunOptions(), new McpExecutionContext(true));
        var result = (ModelContextProtocol.Protocol.CallToolResult)typeof(ManageRoleTool)
            .GetMethod("HandleList", BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(tool, new object[] { "Sales", "", 10 })!;

        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text, "1 role");
    }
}
