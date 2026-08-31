using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

/// <summary>
/// Additional MarkdownFormatter tests for EntityMetadata-based methods:
/// FormatEntitySummaryTable, FormatOptionSetList, FormatOptionSetDetail.
/// Mirrors CompactFormatterMetadataTests but validates markdown output format.
/// </summary>
[TestClass]
public class MarkdownFormatterMetadataTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
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
    public void FormatEntitySummaryTable_UsesMarkdownTableFormat()
    {
        var entities = new[] { CreateEntityMetadata("account") };
        var result = FormatEntitySummaryTable(entities);

        // Markdown format uses # header and | separators
        Assert.IsTrue(result.Contains("# Entities"));
        Assert.IsTrue(result.Contains("| LogicalName |"));
        Assert.IsTrue(result.Contains("| --- |"));
        Assert.IsTrue(result.Contains("| account |"));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_EmptyList_ShowsZeroCount()
    {
        var result = FormatEntitySummaryTable(Enumerable.Empty<EntityMetadata>());

        Assert.IsTrue(result.Contains("# Entities — 0"));
        Assert.IsTrue(result.Contains("| --- |"));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_MultipleEntities_ShowsCountInHeader()
    {
        var entities = new[]
        {
            CreateEntityMetadata("account"),
            CreateEntityMetadata("contact"),
            CreateEntityMetadata("lead")
        };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("# Entities — 3"));
    }

    [TestMethod]
    public void FormatEntitySummaryTable_CustomEntity_ShowsYesInPipe()
    {
        var entities = new[] { CreateEntityMetadata("new_custom", isCustom: true) };
        var result = FormatEntitySummaryTable(entities);

        Assert.IsTrue(result.Contains("| Yes |"));
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetList
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatOptionSetListMethod = FormatterType
        .GetMethod("FormatOptionSetList", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatOptionSetList(IEnumerable<OptionSetMetadataBase> optionSets)
    {
        return (string)FormatOptionSetListMethod.Invoke(null, new object[] { optionSets })!;
    }

    [TestMethod]
    public void FormatOptionSetList_UsesMarkdownTableFormat()
    {
        var os = new OptionSetMetadata { Name = "my_status" };
        typeof(OptionSetMetadata).GetProperty("IsGlobal")!.SetValue(os, (bool?)true);

        var result = FormatOptionSetList(new[] { os });

        Assert.IsTrue(result.Contains("# Global Option Sets"));
        Assert.IsTrue(result.Contains("| Name |"));
        Assert.IsTrue(result.Contains("| --- |"));
        Assert.IsTrue(result.Contains("| my_status |"));
    }

    [TestMethod]
    public void FormatOptionSetList_EmptyList_ShowsZeroCount()
    {
        var result = FormatOptionSetList(Enumerable.Empty<OptionSetMetadataBase>());

        Assert.IsTrue(result.Contains("# Global Option Sets — 0"));
    }

    // ──────────────────────────────────────────────
    // FormatOptionSetDetail
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatOptionSetDetailMethod = FormatterType
        .GetMethod("FormatOptionSetDetail", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatOptionSetDetail(OptionSetMetadataBase optionSet)
    {
        return (string)FormatOptionSetDetailMethod.Invoke(null, new object[] { optionSet })!;
    }

    [TestMethod]
    public void FormatOptionSetDetail_UsesMarkdownFormat()
    {
        var os = new OptionSetMetadata(new OptionMetadataCollection(new List<OptionMetadata>
        {
            new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Active", 1033), 0),
        }))
        {
            Name = "test_status"
        };

        var result = FormatOptionSetDetail(os);

        // Should use markdown headers and tables
        Assert.IsTrue(result.Contains("# "));
        Assert.IsTrue(result.Contains("| Property | Value |"));
        Assert.IsTrue(result.Contains("| --- | --- |"));
        Assert.IsTrue(result.Contains("## Options"));
        Assert.IsTrue(result.Contains("| Value | Label | Description |"));
    }

    [TestMethod]
    public void FormatOptionSetDetail_BooleanOptionSet_ShowsOptionsTable()
    {
        var boolOs = new BooleanOptionSetMetadata
        {
            Name = "bool_test",
            TrueOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Yes", 1033), 1),
            FalseOption = new OptionMetadata(new Microsoft.Xrm.Sdk.Label("No", 1033), 0)
        };

        var result = FormatOptionSetDetail(boolOs);

        Assert.IsTrue(result.Contains("## Options"));
        Assert.IsTrue(result.Contains("| Value | Label |"));
        Assert.IsTrue(result.Contains("| 1 |"));
        Assert.IsTrue(result.Contains("| 0 |"));
    }

    [TestMethod]
    public void FormatOptionSetDetail_EmptyOptions_NoOptionsSection()
    {
        var os = new OptionSetMetadata { Name = "empty" };
        var result = FormatOptionSetDetail(os);

        Assert.IsFalse(result.Contains("## Options"));
    }
}
