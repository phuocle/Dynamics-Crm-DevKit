using DynamicsCrm.DevKit.Cli.Mcp.Resources;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Resources;

/// <summary>
/// Tests for InstructionResources — static string methods returning FormXML and View instructions.
/// These are public methods, so no reflection needed.
/// </summary>
[TestClass]
public class InstructionResourcesTests
{
    // ──────────────────────────────────────────────
    // FormXmlInstructions
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormXmlInstructions_ReturnsNonEmpty()
    {
        var result = InstructionResources.FormXmlInstructions();

        Assert.IsNotNull(result);
        Assert.IsTrue(result.Length > 0, "Should return non-empty content");
    }

    [TestMethod]
    public void FormXmlInstructions_ContainsBackupSection()
    {
        var result = InstructionResources.FormXmlInstructions();

        Assert.IsTrue(result.Contains("Backup Before ANY Modification"), "Should contain critical backup instructions");
    }

    [TestMethod]
    public void FormXmlInstructions_ContainsRollbackProcedure()
    {
        var result = InstructionResources.FormXmlInstructions();

        Assert.IsTrue(result.Contains("Rollback Procedure"), "Should contain rollback procedure");
    }

    [TestMethod]
    public void FormXmlInstructions_ContainsControlClassIds()
    {
        var result = InstructionResources.FormXmlInstructions();

        // Text/String control ClassId
        Assert.IsTrue(result.Contains("4273EDBD-AC1D-40d3-9FB2-095C621B552D"), "Should contain Text control ClassId");
        // Lookup control ClassId
        Assert.IsTrue(result.Contains("270BD3DB-D9AF-4782-9025-509E298DEC0A"), "Should contain Lookup control ClassId");
    }

    [TestMethod]
    public void FormXmlInstructions_ContainsNamingConventions()
    {
        var result = InstructionResources.FormXmlInstructions();

        Assert.IsTrue(result.Contains("Naming Conventions"), "Should contain naming conventions");
        Assert.IsTrue(result.Contains("tab_"), "Should mention tab naming pattern");
    }

    [TestMethod]
    public void FormXmlInstructions_ContainsStructureReference()
    {
        var result = InstructionResources.FormXmlInstructions();

        Assert.IsTrue(result.Contains("Structure Reference"), "Should contain structure reference");
        Assert.IsTrue(result.Contains("<form>"), "Should contain form XML structure");
    }

    // ──────────────────────────────────────────────
    // ViewInstructions
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ViewInstructions_ReturnsNonEmpty()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsNotNull(result);
        Assert.IsTrue(result.Length > 0, "Should return non-empty content");
    }

    [TestMethod]
    public void ViewInstructions_ContainsBackupSection()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsTrue(result.Contains("Auto Backup"), "Should contain critical backup instructions");
    }

    [TestMethod]
    public void ViewInstructions_ContainsRollbackProcedure()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsTrue(result.Contains("Rollback (If View Breaks)"), "Should contain rollback procedure");
    }

    [TestMethod]
    public void ViewInstructions_ContainsFetchXmlSection()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsTrue(result.Contains("FetchXML"), "Should contain FetchXML section");
    }

    [TestMethod]
    public void ViewInstructions_ContainsLayoutXmlSection()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsTrue(result.Contains("LayoutXML"), "Should contain LayoutXML section");
    }

    [TestMethod]
    public void ViewInstructions_ContainsSyncRule()
    {
        var result = InstructionResources.ViewInstructions();

        // The sync rule: every attribute in FetchXML must have a corresponding cell in LayoutXML
        Assert.IsTrue(result.Contains("same order"), "Should mention sync between FetchXML and LayoutXML");
    }

    [TestMethod]
    public void ViewInstructions_ContainsColumnWidths()
    {
        var result = InstructionResources.ViewInstructions();

        Assert.IsTrue(result.Contains("width"), "Should contain column width guidance");
    }

    [TestMethod]
    public void ManageAppInstructions_ContainsNavigationWorkflow()
    {
        var result = InstructionResources.ManageAppInstructions();

        Assert.IsTrue(result.Length > 0);
        StringAssert.Contains(result, "Read Before Write Workflow");
        StringAssert.Contains(result, "update_navigation");
        StringAssert.Contains(result, "add_area");
    }

    [TestMethod]
    public void SchemaToolsGuide_ContainsTableColumnRelationshipGuidance()
    {
        var result = InstructionResources.SchemaToolsGuide();

        Assert.IsTrue(result.Length > 0);
        StringAssert.Contains(result, "manage_table");
        StringAssert.Contains(result, "manage_column");
        StringAssert.Contains(result, "manage_relationship");
    }

    [TestMethod]
    public void DataOperationsGuide_ContainsBulkAndSingleRecordGuidance()
    {
        var result = InstructionResources.DataOperationsGuide();

        Assert.IsTrue(result.Length > 0);
        StringAssert.Contains(result, "manage_record");
        StringAssert.Contains(result, "execute_fetchxml");
        StringAssert.Contains(result, "search_records");
    }

    [TestMethod]
    public void ServerLogicGuide_ContainsPluginWorkflowFlowGuidance()
    {
        var result = InstructionResources.ServerLogicGuide();

        Assert.IsTrue(result.Length > 0);
        StringAssert.Contains(result, "get_plugins");
        StringAssert.Contains(result, "get_workflows");
        StringAssert.Contains(result, "get_flows");
    }

    [TestMethod]
    public void SqlInstructions_ContainsSchemaAndQueryRules()
    {
        var result = InstructionResources.SqlInstructions();

        Assert.IsTrue(result.Length > 0);
        StringAssert.Contains(result, "# Dataverse SQL Query Rules");
        StringAssert.Contains(result, "SELECT *");
        StringAssert.Contains(result, "DATEADD");
        StringAssert.Contains(result, "get_tables");
    }

    [TestMethod]
    public void SqlInstructions_UsesCurrentMetadataParametersAndDateDetailLevel()
    {
        var result = InstructionResources.SqlInstructions();

        StringAssert.Contains(result, "get_tables(entity_name='account', detail_level='standard')");
        StringAssert.Contains(result, "get_tables(entity_name='account', filter='createdon', detail_level='full')");
        Assert.IsFalse(result.Contains("get_tables(name="));
        Assert.IsFalse(result.Contains("include_columns"));
        StringAssert.Contains(result, "primaryIdAttribute");
        StringAssert.Contains(result, "`email` is `activityid`");
        StringAssert.Contains(result, "`behavior` field (`DateTimeBehavior`");
        foreach (var behavior in new[] { "UserLocal", "DateOnly", "TimeZoneIndependent" })
            StringAssert.Contains(result, behavior);
    }

    [TestMethod]
    public void SqlInstructions_RewritesMembershipAndAggregateFiltersWithoutChangingTheirMeaning()
    {
        var result = InstructionResources.SqlInstructions();

        StringAssert.Contains(result, "SELECT a.accountid, a.name FROM account AS a WHERE a.accountid IN (SELECT c.parentcustomerid FROM contact AS c WHERE c.statecode = 0)");
        StringAssert.Contains(result, "SELECT DISTINCT a.accountid, a.name FROM account AS a INNER JOIN contact AS c ON a.accountid = c.parentcustomerid WHERE c.statecode = 0");
        Assert.IsFalse(result.Contains("WHERE id IN"));
        Assert.IsFalse(result.Contains("SELECT accountid FROM contact"));
        StringAssert.Contains(result, "Do not assume every `EXISTS` or `NOT EXISTS`");
        StringAssert.Contains(result, "keep `contact_count > 5` client-side");
        StringAssert.Contains(result, "checking `result_truncated=false`");
        StringAssert.Contains(result, "`WHERE` filters input before aggregation");
        StringAssert.Contains(result, "not equivalent to filtering groups");
        StringAssert.Contains(result, "derive the year and count rows per year client-side after checking `result_truncated=false`");
    }

    [TestMethod]
    public void SqlInstructions_ExplainsOutputCompletenessAndTopConversion()
    {
        var result = InstructionResources.SqlInstructions();

        foreach (var contract in new[]
        {
            "1–50000, default 5000", "get_all=false", "get_all=true",
            "TOP n", "TOP (n)", "DISTINCT TOP n", "min(max_records, n)",
            "result_truncated=true", "rows were omitted", "continuation was left unread",
            "Reaching the cap alone does not prove truncation", " (partial results)",
            "`request_url` is the last request made", "not a resume token",
            "0x8004E023", "not fixed by lowering `max_records`"
        })
            StringAssert.Contains(result, contract);
        StringAssert.Contains(result, "returns guidance to call `execute_sql`; it does not execute SQL");
        Assert.IsFalse(result.Contains("redirected here"));
    }

    [TestMethod]
    public void SqlInstructions_LinksSqlRulesAndLimitsJoinAndDateFunctionAdvice()
    {
        var result = InstructionResources.SqlInstructions();
        const string sqlDocumentation = "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql";

        StringAssert.Contains(result, sqlDocumentation + ")");
        StringAssert.Contains(result, sqlDocumentation + "#additional-on-filters");
        StringAssert.Contains(result, sqlDocumentation + "#using-dateadd-and-getutcdate-functions");
        StringAssert.Contains(result, "equality between a column from each table");
        StringAssert.Contains(result, "using `AND`");
        StringAssert.Contains(result, "apply those filters to the joined table");
        StringAssert.Contains(result, "applies in `WHERE` and `ON`");
        StringAssert.Contains(result, "never to column arguments");
        StringAssert.Contains(result, "#ordering-and-paging");
    }
}
