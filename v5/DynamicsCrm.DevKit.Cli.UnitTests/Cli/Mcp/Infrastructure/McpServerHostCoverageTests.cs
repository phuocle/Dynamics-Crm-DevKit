using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
public sealed class McpServerHostCoverageTests
{
    [TestMethod]
    public void GetToolCount_ReturnsExpectedCumulativeCatalogCounts()
    {
        var readOnlyCount = McpServerHost.GetToolCount(1);
        var allCount = McpServerHost.GetToolCount(2);

        Assert.AreEqual(18, readOnlyCount);
        Assert.AreEqual(40, allCount);
        Assert.IsTrue(allCount > readOnlyCount);
    }

    [TestMethod]
    public void FilteredToolNames_ReadOnlyExcludesMutationAndAllIncludesBoth()
    {
        var readOnly = InvokeFilteredToolNames(1);
        var all = InvokeFilteredToolNames(2);

        Assert.AreEqual(18, readOnly.Count);
        Assert.AreEqual(40, all.Count);
        CollectionAssert.IsSubsetOf(readOnly.ToList(), all.ToList());
        Assert.IsTrue(all.Except(readOnly).Any());
    }

    [TestMethod]
    public void RunAsync_UnknownCategory_ReportsSupportedCategories()
    {
        var exception = Expect<InvalidOperationException>(
            () => new McpServerHost(null!).RunAsync("basic").GetAwaiter().GetResult());

        StringAssert.Contains(exception.Message, "Unknown tool category 'basic'");
        StringAssert.Contains(exception.Message, "readonly (18 tools), all (40 tools)");
        StringAssert.Contains(exception.Message, "basic/standard/advanced were removed");
    }

    [TestMethod]
    public void BuildServerInstructions_IncludesInstanceFallbackGroupConnectionSourceAndConnectedOrg()
    {
        var groupInstructions = McpServerHost.BuildServerInstructions(
            serverName: "devkit-codex-2",
            displayCategory: "all",
            toolCount: 40,
            connectedOrgUriActual: new Uri("https://org-one.crm.dynamics.com/"),
            connectedOrgFriendlyName: "Org One",
            connectedOrgUniqueName: "unq_one",
            connectedOrgVersion: new Version(9, 2, 0, 0),
            impersonatedUserDisplay: null,
            envGroup: "1",
            connectionSource: "project .env (DEVKIT_1_*)",
            usedFallback: true);

        StringAssert.Contains(groupInstructions, "Instance: devkit-codex-2");
        StringAssert.Contains(groupInstructions, "Fallback group: 1 (DEVKIT_1_*)");
        StringAssert.Contains(groupInstructions, "Connection source: project .env (DEVKIT_1_*)");
        StringAssert.Contains(groupInstructions, "Connected to Dataverse environment: https://org-one.crm.dynamics.com/");
        StringAssert.Contains(groupInstructions, "Org: Org One (unq_one)");

        var explicitInstructions = McpServerHost.BuildServerInstructions(
            serverName: null,
            displayCategory: "readonly",
            toolCount: 18,
            connectedOrgUriActual: new Uri("https://explicit.crm.dynamics.com/"),
            connectedOrgFriendlyName: "Explicit Org",
            connectedOrgUniqueName: "unq_explicit",
            connectedOrgVersion: new Version(9, 2, 0, 0),
            impersonatedUserDisplay: "Alice (alice@contoso.com)",
            envGroup: "99",
            connectionSource: null,
            usedFallback: false);

        StringAssert.Contains(explicitInstructions, "Instance: DynamicsCrm.DevKit (readonly)");
        StringAssert.Contains(explicitInstructions, "Fallback group: 99 (DEVKIT_99_*; fallback not used)");
        StringAssert.Contains(explicitInstructions, "Connection source: command-line arguments (fallback not used)");
        StringAssert.Contains(explicitInstructions, "Impersonating: Alice (alice@contoso.com)");
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
