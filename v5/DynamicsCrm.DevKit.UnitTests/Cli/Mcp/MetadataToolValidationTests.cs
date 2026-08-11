using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for metadata tool input validation:
/// GetTablesTool — the only metadata tool with a testable validation path.
/// Other metadata tools have no static methods and no input validation — they depend entirely on MetadataService/ServiceClient.
/// </summary>
[TestClass]
public class MetadataToolValidationTests
{
    // ──────────────────────────────────────────────
    // ──────────────────────────────────────────────
    // GetTablesTool
    // ──────────────────────────────────────────────

    private static readonly Type GetTablesToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.GetTablesTool")!;

    private static object CreateGetTablesTool()
    {
        return Activator.CreateInstance(GetTablesToolType, new object?[] { null })!;
    }

    private static string InvokeGetTables(object tool, string entityName)
    {
        var method = GetTablesToolType.GetMethod("get_tables")!;
        var task = (System.Threading.Tasks.Task<CallToolResult>)method.Invoke(tool, new object[] { entityName, "", false, false, "", "compact", 100 })!;
        var result = task.GetAwaiter().GetResult();
        var text = result.Content.Count > 0 && result.Content[0] is ModelContextProtocol.Protocol.TextContentBlock tb ? tb.Text : "";
        return text;
    }

    [TestMethod]
    public void GetTables_EmptyEntityName_ReturnsErrorWhenServiceClientNull()
    {
        var tool = CreateGetTablesTool();
        var result = InvokeGetTables(tool, "");
        Assert.IsTrue(result.StartsWith("[Error]"));
    }

    [TestMethod]
    public void GetTables_WhitespaceEntityName_ReturnsErrorWhenServiceClientNull()
    {
        var tool = CreateGetTablesTool();
        var result = InvokeGetTables(tool, "   ");
        Assert.IsTrue(result.StartsWith("[Error]"));
    }

    [TestMethod]
    public void GetTables_NullEntityName_ReturnsErrorWhenServiceClientNull()
    {
        var tool = CreateGetTablesTool();
        var result = InvokeGetTables(tool, null!);
        Assert.IsTrue(result.StartsWith("[Error]"));
    }
}
