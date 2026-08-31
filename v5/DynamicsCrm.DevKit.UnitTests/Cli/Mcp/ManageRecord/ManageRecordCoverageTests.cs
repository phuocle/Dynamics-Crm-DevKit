using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRecord;

[TestClass]
public sealed class ManageRecordCoverageTests
{
    private static ManageRecordTool CreateTool(bool dryRun = true) =>
        new(null!, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(true));

    [TestMethod]
    public void CountFields_CountsCaseInsensitiveUniqueProperties()
    {
        var count = (int)InvokeStatic("CountFields", "{\"Name\":\"one\",\"name\":\"two\",\"number\":1}");

        Assert.AreEqual(2, count);
    }

    [TestMethod]
    public void FormatRecordFields_OrdersAndFormatsAttributes()
    {
        var id = Guid.Parse("11111111-1111-1111-1111-111111111111");
        var entity = new Entity("account", id)
        {
            ["name"] = "Contoso",
            ["number"] = 7,
            ["ownerid"] = new EntityReference("systemuser", id) { Name = "Ada" },
            ["selfid"] = id
        };

        var fields = (Dictionary<string, string>)InvokeStatic("FormatRecordFields", entity);
        var text = (string)InvokeStatic("FormatRecord", entity);

        Assert.AreEqual(4, fields.Count);
        Assert.AreEqual("Contoso", fields["name"]);
        Assert.IsTrue(text.StartsWith(id.ToString() + Environment.NewLine, StringComparison.Ordinal));
        StringAssert.Contains(text, "name: Contoso");
        StringAssert.Contains(text, "ownerid: Ada (systemuser:" + id + ")");
        Assert.IsFalse(text.Contains("selfid:", StringComparison.Ordinal));
    }

    [TestMethod]
    public void BuildColumnSet_EmptyColumns_SelectsAllColumns()
    {
        var all = (ColumnSet)InvokeStatic("BuildColumnSet", null!, "account", "");
        var whitespace = (ColumnSet)InvokeStatic("BuildColumnSet", null!, "account", " , ");

        Assert.IsTrue(all.AllColumns);
        Assert.IsTrue(whitespace.AllColumns);
    }

    [TestMethod]
    public void HandleCreateUpdateDelete_DryRun_ReturnsStructuredPreviews()
    {
        var tool = CreateTool();
        var create = (CallToolResult)Invoke(tool, "HandleCreate", "account", "{\"name\":\"Contoso\",\"number\":1}");
        var update = (CallToolResult)Invoke(tool, "HandleUpdate", "account", "22222222-2222-2222-2222-222222222222", "{\"name\":\"New\"}");
        var delete = (CallToolResult)Invoke(tool, "HandleDelete", "account", "33333333-3333-3333-3333-333333333333");

        Assert.IsFalse(create.IsError == true);
        Assert.IsFalse(update.IsError == true);
        Assert.IsFalse(delete.IsError == true);
        AssertDryRun(create, "CREATE");
        AssertDryRun(update, "UPDATE");
        AssertDryRun(delete, "DELETE");
    }

    [TestMethod]
    public void PublicValidation_CoversActionAndRequiredArguments()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.manage_record().IsError);
        Assert.IsTrue(tool.manage_record("read").Contains("entity_name is required"));
        Assert.IsTrue(tool.manage_record("unknown", "account").Contains("Invalid action"));
        Assert.IsTrue(tool.manage_record("read", "account").Contains("record_id is required"));
        Assert.IsTrue(tool.manage_record("read", "account", "bad-id").Contains("not a valid GUID"));
        Assert.IsTrue(tool.manage_record("create", "account").Contains("fields_json is required"));
        Assert.IsTrue(tool.manage_record("create", "account", "11111111-1111-1111-1111-111111111111", "{\"name\":\"x\"}").Contains("must be empty"));
        Assert.IsTrue(tool.manage_record("associate", "account", "11111111-1111-1111-1111-111111111111").Contains("related_entity_name is required"));
    }

    private static void AssertDryRun(CallToolResult result, string action)
    {
        StringAssert.Contains(result.GetText(), "[DryRun]");
        StringAssert.Contains(result.GetText(), action);
        Assert.IsNotNull(result.StructuredContent);
    }

    private static object Invoke(object instance, string name, params object[] arguments) =>
        typeof(ManageRecordTool).GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(instance, arguments)!;

    private static object InvokeStatic(string name, params object[] arguments) =>
        typeof(ManageRecordTool).GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!
            .Invoke(null, arguments)!;
}
