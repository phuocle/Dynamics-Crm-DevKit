using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageDeletedRecords;

[TestClass]
public sealed class ManageDeletedRecordsCoverageTests
{
    private static ManageDeletedRecordsTool CreateTool(bool dryRun = true) =>
        new(null!, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(true), null!);

    [TestMethod]
    public void FetchAndNameHelpers_BuildExpectedValues()
    {
        var fetch = (string)InvokeStatic("BuildListFetchXml", "account", "accountid", "name", "A&B <x>", 42);
        var noFilter = (string)InvokeStatic("BuildListFetchXml", "account", "accountid", "name", "", 5);

        StringAssert.Contains(fetch, "top='42'");
        StringAssert.Contains(fetch, "datasource='bin'");
        StringAssert.Contains(fetch, "value='%A&amp;B &lt;x&gt;%'");
        Assert.IsFalse(noFilter.Contains("<filter", StringComparison.Ordinal));
        Assert.AreEqual("companyid", InvokeStatic("GetPrimaryKeyAttribute", "companies"));
        Assert.AreEqual("accountid", InvokeStatic("GetPrimaryKeyAttribute", "accounts"));
        Assert.AreEqual("accountid", InvokeStatic("GetPrimaryKeyAttribute", "account"));
        Assert.AreEqual("name", InvokeStatic("GetPrimaryNameAttribute", "account"));
    }

    [TestMethod]
    public void ValueAndDateHelpers_FormatSupportedDataverseValues()
    {
        var id = Guid.Parse("44444444-4444-4444-4444-444444444444");
        Assert.AreEqual("", InvokeStatic("FormatRawValue", (object)null!));
        Assert.AreEqual("Account", InvokeStatic("FormatRawValue", new EntityReference("account", id) { Name = "Account" }));
        Assert.AreEqual("account:" + id, InvokeStatic("FormatRawValue", new EntityReference("account", id)));
        Assert.AreEqual("42", InvokeStatic("FormatRawValue", new OptionSetValue(42)));
        Assert.AreEqual("12.50", InvokeStatic("FormatRawValue", new Money(12.5m)));
        Assert.AreEqual("Yes", InvokeStatic("FormatRawValue", true));
        Assert.AreEqual("No", InvokeStatic("FormatRawValue", false));
        Assert.AreEqual(id.ToString(), InvokeStatic("FormatRawValue", id));
        Assert.AreEqual("2026-08-31 12:34:56", InvokeStatic("FormatRawValue", new DateTime(2026, 8, 31, 12, 34, 56)));
        Assert.AreEqual("2026-08-31 12:34:56", InvokeStatic("FormatDate", new DateTime(2026, 8, 31, 12, 34, 56)));
        Assert.IsNull(InvokeStatic("FormatDate", (object)null!));
        Assert.AreEqual("A&amp;B &lt;x&gt; &quot;q&quot; &apos;p&apos;", InvokeStatic("EscapeXml", "A&B <x> \"q\" 'p'"));
    }

    [TestMethod]
    public void PublicValidation_RejectsInvalidActionsAndIdentifiers()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.manage_deleted_records("").Contains("action is required"));
        Assert.IsTrue(tool.manage_deleted_records("unknown").Contains("Invalid action"));
        Assert.IsTrue(tool.manage_deleted_records("list").Contains("entity_name is required"));
        Assert.IsTrue(tool.manage_deleted_records("detail").Contains("entity_name is required"));
        Assert.IsTrue(tool.manage_deleted_records("detail", "account").Contains("record_id is required"));
        Assert.IsTrue(tool.manage_deleted_records("detail", "account", "bad-id").Contains("not a valid GUID"));
        Assert.IsTrue(tool.manage_deleted_records("restore").Contains("record_id or record_ids is required"));
        Assert.IsTrue(tool.manage_deleted_records("restore", "account", record_ids: new[] { "bad-id" }).Contains("record_ids[0]"));
        Assert.IsTrue(tool.manage_deleted_records("restore", record_ids: new[] { "55555555-5555-5555-5555-555555555555" }).Contains("entity_name is required"));
        Assert.IsTrue(tool.manage_deleted_records("turn").Contains("turn='' is not valid"));
    }

    [TestMethod]
    public void ExecuteRestore_AndTurn_ValidateBeforeDataverse()
    {
        var tool = CreateTool();
        var restoreMissing = (CallToolResult)Invoke(tool, "ExecuteRestore", "account", null!, null!, "[RESTORE] ");
        var restoreInvalid = (CallToolResult)Invoke(tool, "ExecuteRestore", "account", null!, new[] { "bad-id" }, "[RESTORE] ");
        var turnOn = (CallToolResult)Invoke(tool, "ExecuteTurn", "on", 14);
        var turnOff = (CallToolResult)Invoke(tool, "ExecuteTurn", "off", 99);

        Assert.IsTrue(restoreMissing.Contains("record_id or record_ids is required"));
        Assert.IsTrue(restoreInvalid.Contains("record_ids[0]"));
        Assert.IsTrue(turnOn.Contains("Would turn soft-delete ON with retention_days=14"));
        Assert.IsTrue(turnOff.Contains("Would turn soft-delete OFF"));
        Assert.IsTrue(turnOn.StructuredContent.HasValue);
        Assert.IsTrue(turnOff.StructuredContent.HasValue);
    }

    private static object Invoke(object instance, string name, params object[] arguments) =>
        typeof(ManageDeletedRecordsTool).GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(instance, arguments)!;

    private static object InvokeStatic(string name, params object[] arguments) =>
        typeof(ManageDeletedRecordsTool).GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!
            .Invoke(null, arguments)!;
}
