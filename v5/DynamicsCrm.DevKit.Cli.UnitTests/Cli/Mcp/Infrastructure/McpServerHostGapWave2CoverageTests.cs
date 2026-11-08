using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// Wave-2 gap coverage for McpServerHost: the DisabledToolSet exclusion
/// branch of the tool-catalog builder.
///
/// NOTE (not coverable without starting the real stdio server):
/// - RunAsync's success body (~56-133): everything past the category check
///   builds a Host and ends in `builder.Build().RunAsync()` — the MCP stdio
///   loop reads the real stdin, so a unit test cannot pass through it
///   without hosting the actual server.
/// - The AddConsole logger lambda (~63-65), the AddMcpServer options lambda
///   (~76-87, ServerInfo/ServerInstructions) and the PostConfigure filter
///   lambda (~113-125) only run while that host starts.
/// - The DisabledToolSet Where/SelectMany lambdas (~102-103) only execute
///   inside RunAsync when the set is non-empty (it is empty by default).
/// - GetFilteredToolTypeNames ~178 (readonly skip) is exercised through the
///   existing level-1 catalog test.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class McpServerHostGapWave2CoverageTests
{
    [TestMethod]
    public void GetFilteredToolTypeNames_DisabledType_IsExcludedFromCatalog()
    {
        var all = InvokeFilteredToolNames(2);
        Assert.IsTrue(all.Contains("whoami"), "the whoami tool is part of the default catalog.");

        try
        {
            // DisabledToolSet holds TYPE names (nameof-style), not tool names.
            McpServerHost.DisabledToolSet.Add("WhoAmITool");
            var filtered = InvokeFilteredToolNames(2);

            Assert.AreEqual(all.Count - 1, filtered.Count);
            Assert.IsFalse(filtered.Contains("whoami"));
        }
        finally
        {
            McpServerHost.DisabledToolSet.Remove("WhoAmITool");
        }

        // Restored: the catalog is complete again.
        Assert.AreEqual(all.Count, InvokeFilteredToolNames(2).Count);
    }

    [TestMethod]
    public void ToolResourceMap_CoversExactlyTheDisabledToolContract()
    {
        // The resource map keys must stay valid type names (nameof-based at
        // the declaration site) and every entry must map at least one resource.
        foreach (var (typeName, resources) in McpServerHost.ToolResourceMap)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(typeName), typeName);
            Assert.IsTrue(resources.Length > 0, typeName);
            Assert.IsTrue(resources.All(r => !string.IsNullOrWhiteSpace(r)), typeName);
        }

        // Empty by default: no tool is disabled and no resource is filtered.
        Assert.AreEqual(0, McpServerHost.DisabledToolSet.Count);
    }

    [TestMethod]
    public void RunAsync_WhitespaceAndUnknownCategories_AreRejected()
    {
        var empty = Assert.ThrowsExactly<InvalidOperationException>(() =>
            new McpServerHost(null!).RunAsync("   ").GetAwaiter().GetResult());
        StringAssert.Contains(empty.Message, "Unknown tool category");

        var unknown = Assert.ThrowsExactly<InvalidOperationException>(() =>
            new McpServerHost(null!).RunAsync("advanced").GetAwaiter().GetResult());
        StringAssert.Contains(unknown.Message, "readonly");
        StringAssert.Contains(unknown.Message, "all");
    }

    private static System.Collections.Generic.HashSet<string> InvokeFilteredToolNames(int level)
    {
        var method = typeof(McpServerHost).GetMethod(
            "GetFilteredToolTypeNames",
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
        Assert.IsNotNull(method);
        return (System.Collections.Generic.HashSet<string>)method!.Invoke(null, new object[] { level })!;
    }
}
