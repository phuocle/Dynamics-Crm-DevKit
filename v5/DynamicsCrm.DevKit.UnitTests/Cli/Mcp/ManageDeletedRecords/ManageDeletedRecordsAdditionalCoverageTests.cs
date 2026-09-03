using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageDeletedRecords;

[TestClass]
public sealed class ManageDeletedRecordsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageDeletedRecordsTool);

    private static ManageDeletedRecordsTool Tool(bool dryRun = true, bool mutationAllowed = true) =>
        new(null!, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationAllowed));

    [TestMethod]
    public void Constructor_RequiresOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageDeletedRecordsTool(null!, null!, new McpExecutionContext(true)));
        Assert.Throws<ArgumentNullException>(() => new ManageDeletedRecordsTool(null!, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    public void PublicTurn_NormalizesCaseAndWhitespace_InDryRun()
    {
        var tool = Tool();

        var on = tool.manage_deleted_records("turn", turn: " ON ", retention_days: 1);
        var off = tool.manage_deleted_records("turn", turn: " off ", retention_days: 30);

        Assert.IsNull(on.IsError);
        Assert.IsNull(off.IsError);
        StringAssert.Contains(Text(on), "Would turn soft-delete ON with retention_days=1");
        StringAssert.Contains(Text(off), "Would turn soft-delete OFF");
    }

    [TestMethod]
    public void Helpers_CoverPluralizationFallbackAndRawValues()
    {
        Assert.AreEqual("categoryid", Static("GetPrimaryKeyAttribute", "categories"));
        Assert.AreEqual("buid", Static("GetPrimaryKeyAttribute", "bus"));
        Assert.AreEqual("widgetid", Static("GetPrimaryKeyAttribute", "widget"));
        Assert.AreEqual("System.Object", Static("FormatRawValue", new object()));
        Assert.AreEqual("", Static("EscapeXml", ""));
        Assert.IsNull(Static("EscapeXml", new object[] { null! }));
    }

    [TestMethod]
    public void MutationHelpers_RejectDirectCalls_WhenContextBlocksMutations()
    {
        var tool = Tool(dryRun: false, mutationAllowed: true);

        var off = Assert.Throws<TargetInvocationException>(() => Instance(tool, "TurnOff"));
        var on = Assert.Throws<TargetInvocationException>(() => Instance(tool, "TurnOn", 0));

        Assert.IsInstanceOfType(off.InnerException, typeof(InvalidOperationException));
        Assert.IsInstanceOfType(on.InnerException, typeof(InvalidOperationException));
    }

    [TestMethod]
    public void PublicActions_RejectMissingAndMalformedInputsBeforeServiceAccess()
    {
        var tool = Tool();
        Assert.IsNotNull(tool.manage_deleted_records("").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("list").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("detail").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("detail", entity_name: "account").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("detail", entity_name: "account", record_id: "bad-guid").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("restore").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("restore", entity_name: "account", record_ids: new[] { "bad-guid" }).IsError);
        Assert.IsNotNull(tool.manage_deleted_records("turn", turn: "sideways").IsError);
        Assert.IsNotNull(tool.manage_deleted_records("unknown").IsError);
    }

    [TestMethod]
    public void PublicRestore_NormalizesEmptyPrefixAndFiltersBlankIds()
    {
        var tool = Tool();
        var result = tool.manage_deleted_records("restore", entity_name: "", record_id: " ",
            record_ids: new[] { " ", "" }, name_prefix: null!);
        Assert.IsNotNull(result.IsError);
        var withInvalidEntity = tool.manage_deleted_records("restore", entity_name: " ",
            record_ids: new[] { "00000000-0000-0000-0000-000000000001" }, name_prefix: "");
        Assert.IsNotNull(withInvalidEntity.IsError);
    }

    private static object Static(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;

    private static object Instance(ManageDeletedRecordsTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(tool, args)!;

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) =>
        ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
}
