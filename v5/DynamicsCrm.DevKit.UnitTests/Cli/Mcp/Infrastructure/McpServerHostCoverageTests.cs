using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
public sealed class McpServerHostCoverageTests
{
    [TestMethod]
    public void GetToolCount_ReturnsExpectedCumulativeCatalogCounts()
    {
        var readOnlyCount = McpServerHost.GetToolCount(1);
        var allCount = McpServerHost.GetToolCount(2);

        Assert.AreEqual(17, readOnlyCount);
        Assert.AreEqual(38, allCount);
        Assert.IsTrue(allCount > readOnlyCount);
    }

    [TestMethod]
    public void FilteredToolNames_ReadOnlyExcludesMutationAndAllIncludesBoth()
    {
        var readOnly = InvokeFilteredToolNames(1);
        var all = InvokeFilteredToolNames(2);

        Assert.AreEqual(17, readOnly.Count);
        Assert.AreEqual(38, all.Count);
        CollectionAssert.IsSubsetOf(readOnly.ToList(), all.ToList());
        Assert.IsTrue(all.Except(readOnly).Any());
    }

    [TestMethod]
    public void RunAsync_UnknownCategory_ReportsSupportedCategories()
    {
        var exception = Expect<InvalidOperationException>(
            () => new McpServerHost(null!).RunAsync("basic").GetAwaiter().GetResult());

        StringAssert.Contains(exception.Message, "Unknown tool category 'basic'");
        StringAssert.Contains(exception.Message, "readonly (17 tools), all (38 tools)");
        StringAssert.Contains(exception.Message, "basic/standard/advanced were removed");
    }

    private static System.Collections.Generic.HashSet<string> InvokeFilteredToolNames(int level)
    {
        var method = typeof(McpServerHost).GetMethod(
            "GetFilteredToolTypeNames",
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
        Assert.IsNotNull(method);
        return (System.Collections.Generic.HashSet<string>)method!.Invoke(null, new object[] { level })!;
    }

    private static TException Expect<TException>(Action action)
        where TException : Exception
    {
        try
        {
            action();
        }
        catch (TException exception)
        {
            return exception;
        }

        Assert.Fail($"Expected {typeof(TException).Name}.");
        return null!;
    }
}
