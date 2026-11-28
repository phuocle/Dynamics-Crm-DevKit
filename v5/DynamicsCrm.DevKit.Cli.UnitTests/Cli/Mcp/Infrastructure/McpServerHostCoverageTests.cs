using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
public sealed class McpServerHostCoverageTests
{
    [TestMethod]
    public void GetToolCatalog_IncludesAllEnabledTools()
    {
        var names = McpServerHost.GetToolCatalog().Select(tool => tool.Name).ToArray();

        Assert.AreEqual(29, names.Length);
        CollectionAssert.AllItemsAreUnique(names);
        CollectionAssert.Contains(names, "get_context");
        CollectionAssert.Contains(names, "read_instruction");
        CollectionAssert.Contains(names, "query_data");
        CollectionAssert.Contains(names, "inspect_metadata");
        CollectionAssert.Contains(names, "inspect_automation");
        CollectionAssert.Contains(names, "inspect_diagnostics");
        CollectionAssert.Contains(names, "manage_record");
        CollectionAssert.Contains(names, "upsert_records");
    }

    [TestMethod]
    public void BuildServerInstructions_IncludesInstanceFallbackGroupConnectionSourceAndConnectedOrg()
    {
        var groupInstructions = McpServerHost.BuildServerInstructions(
            serverName: "devkit-codex-2",
            toolCount: 41,
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
        StringAssert.Contains(groupInstructions, "Available tools: 41.");

        var explicitInstructions = McpServerHost.BuildServerInstructions(
            serverName: null,
            toolCount: 41,
            connectedOrgUriActual: new Uri("https://explicit.crm.dynamics.com/"),
            connectedOrgFriendlyName: "Explicit Org",
            connectedOrgUniqueName: "unq_explicit",
            connectedOrgVersion: new Version(9, 2, 0, 0),
            impersonatedUserDisplay: "Alice (alice@contoso.com)",
            envGroup: "99",
            connectionSource: null,
            usedFallback: false);

        StringAssert.Contains(explicitInstructions, "Instance: DynamicsCrm.DevKit | ");
        StringAssert.Contains(explicitInstructions, "Fallback group: 99 (DEVKIT_99_*; fallback not used)");
        StringAssert.Contains(explicitInstructions, "Connection source: command-line arguments (fallback not used)");
        StringAssert.Contains(explicitInstructions, "Impersonating: Alice (alice@contoso.com)");
    }
}
