using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for MarkdownFormatter — formats metadata, messages, and FetchXML results as Markdown tables.
/// The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class MarkdownFormatterTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.MarkdownFormatter")!;

    // ──────────────────────────────────────────────
    // FormatMessages
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatMessagesMethod = FormatterType
        .GetMethod("FormatMessages", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatMessages(string scope, IEnumerable<string> sdk, IEnumerable<string> actions, IEnumerable<string> apis)
    {
        return (string)FormatMessagesMethod.Invoke(null, new object[] { scope, sdk, actions, apis })!;
    }

    [TestMethod]
    public void FormatMessages_AllEmpty_ReturnsHeaderAndSummaryTable()
    {
        var result = FormatMessages("account", Array.Empty<string>(), Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("# Messages for `account`"));
        // Summary table should always be present
        Assert.IsTrue(result.Contains("| Category | Count |"));
        Assert.IsTrue(result.Contains("| SDK Messages | 0 |"));
        Assert.IsTrue(result.Contains("| Custom Actions | 0 |"));
        Assert.IsTrue(result.Contains("| Custom APIs | 0 |"));
        // No section headers when empty
        Assert.IsFalse(result.Contains("## SDK Messages"));
    }

    [TestMethod]
    public void FormatMessages_WithSdkMessages_MarkdownBulletList()
    {
        var sdk = new[] { "Create", "Update" };
        var result = FormatMessages("account", sdk, Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("## SDK Messages — 2"));
        Assert.IsTrue(result.Contains("- Create"));
        Assert.IsTrue(result.Contains("- Update"));
        // Summary row should show count
        Assert.IsTrue(result.Contains("| SDK Messages | 2 |"));
    }

    [TestMethod]
    public void FormatMessages_WithCustomActions_ShowsSection()
    {
        var actions = new[] { "MyAction1", "MyAction2" };
        var result = FormatMessages("contact", Array.Empty<string>(), actions, Array.Empty<string>());

        Assert.IsTrue(result.Contains("## Custom Actions — 2"));
        Assert.IsTrue(result.Contains("- MyAction1"));
    }

    [TestMethod]
    public void FormatMessages_WithCustomApis_ShowsSection()
    {
        var apis = new[] { "custom_api_1" };
        var result = FormatMessages("none", Array.Empty<string>(), Array.Empty<string>(), apis);

        Assert.IsTrue(result.Contains("## Custom APIs — 1"));
        Assert.IsTrue(result.Contains("- custom_api_1"));
    }

    [TestMethod]
    public void FormatMessages_IncludesSummaryTable()
    {
        var sdk = new[] { "Create" };
        var actions = new[] { "Action1", "Action2" };
        var apis = new[] { "Api1" };
        var result = FormatMessages("account", sdk, actions, apis);

        Assert.IsTrue(result.Contains("| SDK Messages | 1 |"));
        Assert.IsTrue(result.Contains("| Custom Actions | 2 |"));
        Assert.IsTrue(result.Contains("| Custom APIs | 1 |"));
    }

    [TestMethod]
    public void FormatMessages_DeduplicatesAndSorts()
    {
        var sdk = new[] { "Update", "CREATE", "Create", "Delete" };
        var result = FormatMessages("account", sdk, Array.Empty<string>(), Array.Empty<string>());

        // DistinctSorted: case-insensitive dedup, then sort
        Assert.IsTrue(result.Contains("## SDK Messages — 3"));
    }

    [TestMethod]
    public void FormatMessages_NullLists_HandlesGracefully()
    {
        var result = FormatMessages("account", null!, null!, null!);

        Assert.IsTrue(result.Contains("# Messages for `account`"));
        Assert.IsTrue(result.Contains("| SDK Messages | 0 |"));
    }

    [TestMethod]
    public void FormatMessages_ScopeIncludedInHeader()
    {
        var result = FormatMessages("opportunity", Array.Empty<string>(), Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("# Messages for `opportunity`"));
    }

    // ──────────────────────────────────────────────
    // FormatFetchXmlResults
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatFetchXmlResultsMethod = FormatterType
        .GetMethod("FormatFetchXmlResults", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatFetchXmlResults(IEnumerable<Dictionary<string, string>> records, int totalReturned, bool hasMore)
    {
        return (string)FormatFetchXmlResultsMethod.Invoke(null, new object[] { records, totalReturned, hasMore })!;
    }

    [TestMethod]
    public void FormatFetchXmlResults_EmptyRecords_ReturnsMessage()
    {
        var result = FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, false);

        Assert.IsTrue(result.Contains("Returned **0** records (has_more: false)"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EmptyRecords_HasMore()
    {
        var result = FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, true);

        Assert.IsTrue(result.Contains("has_more: true"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_FormatsAsMarkdownTable()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["name"] = "Contoso", ["city"] = "Seattle" },
            new() { ["name"] = "Fabrikam", ["city"] = "Portland" }
        };

        var result = FormatFetchXmlResults(records, 2, false);

        // Markdown table structure
        Assert.IsTrue(result.Contains("| city | name |")); // Keys sorted alphabetically
        Assert.IsTrue(result.Contains("| --- | --- |"));
        Assert.IsTrue(result.Contains("| Seattle | Contoso |"));
        Assert.IsTrue(result.Contains("| Portland | Fabrikam |"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesPipeInValues()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["name"] = "A|B|C" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        Assert.IsTrue(result.Contains("A\\|B\\|C"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesNewlineInValues()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["desc"] = "Line1\nLine2" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        Assert.IsTrue(result.Contains("Line1 Line2"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_ColumnsSortedAlphabetically()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["zfield"] = "Z", ["afield"] = "A", ["mfield"] = "M" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        var afieldIdx = result.IndexOf("afield");
        var mfieldIdx = result.IndexOf("mfield");
        var zfieldIdx = result.IndexOf("zfield");
        Assert.IsTrue(afieldIdx < mfieldIdx);
        Assert.IsTrue(mfieldIdx < zfieldIdx);
    }

    [TestMethod]
    public void FormatFetchXmlResults_MissingKeysInSomeRecords_ShowsEmpty()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["name"] = "A", ["phone"] = "123" },
            new() { ["name"] = "B" }
        };

        var result = FormatFetchXmlResults(records, 2, false);

        // Both columns should be in the header
        Assert.IsTrue(result.Contains("name"));
        Assert.IsTrue(result.Contains("phone"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_TotalReturned_ShowsInHeader()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["name"] = "Test" }
        };

        var result = FormatFetchXmlResults(records, 50, true);

        Assert.IsTrue(result.Contains("Returned **50** records"));
    }
}
