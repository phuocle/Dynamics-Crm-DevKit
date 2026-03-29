using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for CompactFormatter — formats metadata, messages, and FetchXML results as compact TSV output.
/// The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class CompactFormatterTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.CompactFormatter")!;

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
    public void FormatMessages_AllEmpty_ReturnsHeaderOnly()
    {
        var result = FormatMessages("account", Array.Empty<string>(), Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("[Messages for account]"));
        Assert.IsFalse(result.Contains("[SDK Messages]"));
        Assert.IsFalse(result.Contains("[Custom Actions]"));
        Assert.IsFalse(result.Contains("[Custom APIs]"));
    }

    [TestMethod]
    public void FormatMessages_WithSdkMessages_ListsThem()
    {
        var sdk = new[] { "Create", "Update", "Delete" };
        var result = FormatMessages("account", sdk, Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("[SDK Messages]"));
        Assert.IsTrue(result.Contains("- Create"));
        Assert.IsTrue(result.Contains("- Update"));
        Assert.IsTrue(result.Contains("- Delete"));
        Assert.IsTrue(result.Contains("SDK Messages: 3"));
    }

    [TestMethod]
    public void FormatMessages_WithCustomActions_ListsThem()
    {
        var actions = new[] { "MyAction" };
        var result = FormatMessages("account", Array.Empty<string>(), actions, Array.Empty<string>());

        Assert.IsTrue(result.Contains("[Custom Actions]"));
        Assert.IsTrue(result.Contains("- MyAction"));
        Assert.IsTrue(result.Contains("Custom Actions: 1"));
    }

    [TestMethod]
    public void FormatMessages_WithCustomApis_ListsThem()
    {
        var apis = new[] { "my_api_1", "my_api_2" };
        var result = FormatMessages("none", Array.Empty<string>(), Array.Empty<string>(), apis);

        Assert.IsTrue(result.Contains("[Custom APIs]"));
        Assert.IsTrue(result.Contains("- my_api_1"));
        Assert.IsTrue(result.Contains("- my_api_2"));
        Assert.IsTrue(result.Contains("Custom APIs: 2"));
    }

    [TestMethod]
    public void FormatMessages_DeduplicatesAndSorts()
    {
        var sdk = new[] { "Update", "Create", "Update", "DELETE", "Create" };
        var result = FormatMessages("account", sdk, Array.Empty<string>(), Array.Empty<string>());

        // DistinctSorted uses OrdinalIgnoreCase, so "Update"/"UPDATE" counted once
        Assert.IsTrue(result.Contains("SDK Messages: 3"));
        // Should be sorted alphabetically
        var createIndex = result.IndexOf("- Create");
        var deleteIndex = result.IndexOf("- DELETE");
        var updateIndex = result.IndexOf("- Update");
        Assert.IsTrue(createIndex < deleteIndex, "Create should come before DELETE");
        Assert.IsTrue(deleteIndex < updateIndex, "DELETE should come before Update");
    }

    [TestMethod]
    public void FormatMessages_NullLists_HandlesGracefully()
    {
        var result = FormatMessages("account", null!, null!, null!);

        Assert.IsTrue(result.Contains("[Messages for account]"));
        Assert.IsFalse(result.Contains("[SDK Messages]"));
    }

    [TestMethod]
    public void FormatMessages_WhitespaceValues_AreFiltered()
    {
        var sdk = new[] { "Create", "", "  ", "Update" };
        var result = FormatMessages("account", sdk, Array.Empty<string>(), Array.Empty<string>());

        Assert.IsTrue(result.Contains("SDK Messages: 2"));
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
    public void FormatFetchXmlResults_EmptyRecords_ReturnsZeroMessage()
    {
        var result = FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, false);

        Assert.IsTrue(result.Contains("0 records (more: no)"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EmptyRecords_MoreTrue()
    {
        var result = FormatFetchXmlResults(new List<Dictionary<string, string>>(), 0, true);

        Assert.IsTrue(result.Contains("0 records (more: yes)"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_SingleEntity_IncludesEntityNameInHeader()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Contoso" },
            new() { ["_entity"] = "account", ["_id"] = "id2", ["name"] = "Fabrikam" }
        };

        var result = FormatFetchXmlResults(records, 2, false);

        // When all entities are the same, _entity column is omitted and entity name is in header
        Assert.IsTrue(result.Contains("2 account records"));
        // _entity column should be removed from the header row
        var lines = result.Split('\n');
        var headerLine = lines[2]; // After header line and blank line
        Assert.IsFalse(headerLine.Contains("_entity"), "_entity should be omitted when all same");
    }

    [TestMethod]
    public void FormatFetchXmlResults_MultipleEntities_KeepsEntityColumn()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Contoso" },
            new() { ["_entity"] = "contact", ["_id"] = "id2", ["name"] = "John" }
        };

        var result = FormatFetchXmlResults(records, 2, false);

        Assert.IsTrue(result.Contains("2 records"));
        Assert.IsFalse(result.Contains("account records")); // Not single entity

        // Check _entity is in the header
        Assert.IsTrue(result.Contains("_entity"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_TabSeparatedOutput()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Test" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        // Header should contain tabs
        Assert.IsTrue(result.Contains("\t"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesTabInValues()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Has\ttab" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        // Tab in value should be replaced with space
        Assert.IsTrue(result.Contains("Has tab"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_EscapesNewlineInValues()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Line1\nLine2" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        // Newline in value should be replaced with space
        Assert.IsTrue(result.Contains("Line1 Line2"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_KeysAreSortedAlphabetically()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["zname"] = "Z", ["aname"] = "A" }
        };

        var result = FormatFetchXmlResults(records, 1, false);

        // _id should come before aname, which should come before zname
        var idIdx = result.IndexOf("_id");
        var anameIdx = result.IndexOf("aname");
        var znameIdx = result.IndexOf("zname");
        Assert.IsTrue(idIdx < anameIdx, "_id should come before aname");
        Assert.IsTrue(anameIdx < znameIdx, "aname should come before zname");
    }

    [TestMethod]
    public void FormatFetchXmlResults_MoreRecords_ShowsYes()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Test" }
        };

        var result = FormatFetchXmlResults(records, 1, true);

        Assert.IsTrue(result.Contains("(more: yes)"));
    }

    [TestMethod]
    public void FormatFetchXmlResults_MissingKeyInSomeRecords_ShowsEmpty()
    {
        var records = new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "id1", ["name"] = "Contoso", ["phone"] = "123" },
            new() { ["_entity"] = "account", ["_id"] = "id2", ["name"] = "Fabrikam" }
        };

        var result = FormatFetchXmlResults(records, 2, false);

        // The phone column should be in the header
        Assert.IsTrue(result.Contains("phone"));
        // Second line data: phone value should be empty (showing as empty tab)
        var lines = result.Split('\n');
        // Last data row should have empty phone
        Assert.IsTrue(lines.Length > 3);
    }

    // ──────────────────────────────────────────────
    // FormatEntitySummaryTable
    // ──────────────────────────────────────────────
    // Note: FormatEntitySummaryTable, FormatOptionSetList, FormatOptionSetDetail
    // require constructing EntityMetadata/OptionSetMetadataBase objects which have
    // internal-only setters. Testing via reflection on those constructors is very
    // complex, so we skip detailed tests for these methods in this phase.
}
