using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Additional CompactFormatter tests for EntityMetadata-based methods:
/// FormatEntitySummaryTable, FormatOptionSetList, FormatOptionSetDetail.
/// Uses reflection to set internal properties on metadata objects.
/// </summary>
[TestClass]
public class CompactFormatterMetadataTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter")!;

    // FormatOptionSetList / FormatOptionSetDetail were moved to MarkdownFormatter and now emit
    // markdown table output (not the old tab-delimited CompactFormatter contract).
    private static readonly Type MarkdownFormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.MarkdownFormatter")!;

    // ──────────────────────────────────────────────
    // FormatEntitySummaryTable
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatEntitySummaryTableMethod = FormatterType
        .GetMethod("FormatEntitySummaryTable", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatEntitySummaryTable(IEnumerable<EntityMetadata> entities)
    {
        return (string)FormatEntitySummaryTableMethod.Invoke(null, new object[] { entities })!;
    }

    private static EntityMetadata CreateEntityMetadata(string logicalName, bool isCustom = false, bool isActivity = false)
    {
        var meta = new EntityMetadata();
        typeof(EntityMetadata).GetProperty("LogicalName")!.SetValue(meta, logicalName);
        typeof(EntityMetadata).GetProperty("IsCustomEntity")!.SetValue(meta, (bool?)isCustom);
        typeof(EntityMetadata).GetProperty("IsActivity")!.SetValue(meta, (bool?)isActivity);
        return meta;
    }

    [TestMethod]
    public void FormatEntitySummaryTable_EmptyList_ShowsZeroTotal()
    {
        var result = FormatEntitySummaryTable(Enumerable.Empty<EntityMetadata>());

        Assert.IsTrue(result.Contains("[Entities] 0 total"));
        Assert.IsTrue(result.Contains("LogicalName\tDisplayName\tOwnershipType\tIsCustom\tIsActivity"));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_SingleEntity_FormatsCorrectly()
    {
        var entities = new[] { CreateEntityMetadata("account") };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("[Entities] 1 total"));
        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("No")); // isCustom = false, isActivity = false
    }

    [TestMethod]
    public void FormatEntitySummaryTable_CustomEntity_ShowsYes()
    {
        var entities = new[] { CreateEntityMetadata("new_custom", isCustom: true) };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("new_custom\t\t\tYes\tNo")); // DisplayName empty, OwnershipType empty, IsCustom=Yes, IsActivity=No
    }

    [TestMethod]
    public void FormatEntitySummaryTable_ActivityEntity_ShowsYes()
    {
        var entities = new[] { CreateEntityMetadata("email", isActivity: true) };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("Yes")); // IsActivity = Yes
        // IsActivity is the last column
        var lines = result.Split('\n');
        // Data line should end with Yes
        Assert.IsTrue(lines.Any(l => l.Contains("email") && l.TrimEnd().EndsWith("Yes")));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_MultipleEntities_ShowsCount()
    {
        var entities = new[]
        {
            CreateEntityMetadata("account"),
            CreateEntityMetadata("contact"),
            CreateEntityMetadata("lead")
        };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("[Entities] 3 total"));
        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("contact"));
        Assert.IsTrue(result.Contains("lead"));
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetList
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatOptionSetListMethod = MarkdownFormatterType
        .GetMethod("FormatOptionSetList", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatOptionSetList(IEnumerable<OptionSetMetadataBase> optionSets)
    {
        return (string)FormatOptionSetListMethod.Invoke(null, new object[] { optionSets })!;
    }

    [TestMethod]
    public void FormatOptionSetList_EmptyList_ShowsZeroTotal()
    {
        var result = FormatOptionSetList(Enumerable.Empty<OptionSetMetadataBase>());

        Assert.IsTrue(result.Contains("# Global Option Sets — 0"));
        Assert.IsTrue(result.Contains("| Name | DisplayName | Type | IsGlobal |"));
    }

    [TestMethod]
    public void FormatOptionSetList_SingleOptionSet_FormatsRow()
    {
        var os = new OptionSetMetadata { Name = "my_status" };
        typeof(OptionSetMetadata).GetProperty("IsGlobal")!.SetValue(os, (bool?)true);

        var result = FormatOptionSetList(new[] { os });

        Assert.IsTrue(result.Contains("# Global Option Sets — 1"));
        Assert.IsTrue(result.Contains("my_status"));
        Assert.IsTrue(result.Contains("| Yes |")); // IsGlobal = Yes in markdown table cell
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetDetail
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatOptionSetDetailMethod = MarkdownFormatterType
        .GetMethod("FormatOptionSetDetail", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatOptionSetDetail(OptionSetMetadataBase optionSet)
    {
        return (string)FormatOptionSetDetailMethod.Invoke(null, new object[] { optionSet })!;
    }

    [TestMethod]
    public void FormatOptionSetDetail_WithOptions_ShowsOptionsTable()
    {
        var os = new OptionSetMetadata(new OptionMetadataCollection(new List<OptionMetadata>
        {
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Active", 1033), 0),
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Inactive", 1033), 1)
        }))
        {
            Name = "test_status"
        };

        var result = FormatOptionSetDetail(os);

        Assert.IsTrue(result.Contains("# test_status (`test_status`)"));
        Assert.IsTrue(result.Contains("## Options — 2"));
        Assert.IsTrue(result.Contains("| Value | Label | Description |"));
        // Verify option values are present (0 and 1) in markdown table rows
        Assert.IsTrue(result.Contains("| 0 |"));
        Assert.IsTrue(result.Contains("| 1 |"));
    }

    [TestMethod]
    public void FormatOptionSetDetail_BooleanOptionSet_ShowsTrueFalse()
    {
        var boolOs = new BooleanOptionSetMetadata
        {
            Name = "test_boolean",
            TrueOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Yes", 1033), 1),
            FalseOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("No", 1033), 0)
        };

        var result = FormatOptionSetDetail(boolOs);

        Assert.IsTrue(result.Contains("# test_boolean (`test_boolean`)"));
        Assert.IsTrue(result.Contains("## Options"));
        Assert.IsTrue(result.Contains("| Value | Label |"));
        // Verify both option values (1 for true, 0 for false) in markdown rows
        Assert.IsTrue(result.Contains("| 1 |"));
        Assert.IsTrue(result.Contains("| 0 |"));
    }

    [TestMethod]
    public void FormatOptionSetDetail_EmptyOptions_NoOptionsSection()
    {
        var os = new OptionSetMetadata { Name = "empty_optionset" };

        var result = FormatOptionSetDetail(os);

        Assert.IsTrue(result.Contains("# empty_optionset (`empty_optionset`)"));
        Assert.IsTrue(result.Contains("| Property | Value |"));
        // No Options section when options are empty
        Assert.IsFalse(result.Contains("## Options"));
    }

    [TestMethod]
    public void FormatOptionSetDetail_OptionsOrderedByValue()
    {
        var options = new OptionMetadataCollection(new List<OptionMetadata>
        {
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Third", 1033), 300),
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("First", 1033), 100),
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Second", 1033), 200)
        });

        var os = new OptionSetMetadata(options) { Name = "ordered_test" };
        var result = FormatOptionSetDetail(os);

        // Options should be sorted by Value (100, 200, 300) in markdown table rows
        var idx100 = result.IndexOf("| 100 |");
        var idx200 = result.IndexOf("| 200 |");
        var idx300 = result.IndexOf("| 300 |");
        Assert.IsTrue(idx100 >= 0, "100 should be present");
        Assert.IsTrue(idx200 >= 0, "200 should be present");
        Assert.IsTrue(idx300 >= 0, "300 should be present");
        Assert.IsTrue(idx100 < idx200, "100 should come before 200");
        Assert.IsTrue(idx200 < idx300, "200 should come before 300");
    }
}
