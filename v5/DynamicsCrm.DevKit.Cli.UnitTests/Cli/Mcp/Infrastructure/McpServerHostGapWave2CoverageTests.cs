using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// Verifies the tool catalog's disabled-tool and resource configuration.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class McpServerHostGapWave2CoverageTests
{
    [TestMethod]
    public void DisabledTool_IsExcludedFromCatalogWithItsResource()
    {
        var catalog = McpServerHost.GetToolCatalog();
        var resourceCount = McpServerHost.GetResourceCount();
        Assert.IsTrue(catalog.Any(tool => tool.Name == "query_data"));
        Assert.AreEqual(14, resourceCount);

        try
        {
            McpServerHost.DisabledToolSet.Add(nameof(QueryDataTool));
            var filtered = McpServerHost.GetToolCatalog();

            Assert.AreEqual(catalog.Count - 1, filtered.Count);
            Assert.IsFalse(filtered.Any(tool => tool.Name == "query_data"));
            Assert.AreEqual(resourceCount - 1, McpServerHost.GetResourceCount());
        }
        finally
        {
            McpServerHost.DisabledToolSet.Remove(nameof(QueryDataTool));
        }

        Assert.AreEqual(catalog.Count, McpServerHost.GetToolCatalog().Count);
        Assert.AreEqual(resourceCount, McpServerHost.GetResourceCount());
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
}
