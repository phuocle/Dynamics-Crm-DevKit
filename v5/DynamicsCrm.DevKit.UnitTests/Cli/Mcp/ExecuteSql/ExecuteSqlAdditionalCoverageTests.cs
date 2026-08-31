using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteSql;

[TestClass]
public sealed class ExecuteSqlAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool);
    private static readonly MethodInfo ContainsSemicolonMethod = ToolType.GetMethod(
        "ContainsSemicolonOutsideLiteral", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static ServiceClient UninitializedServiceClient()
        => (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));

    private static MetadataService UninitializedMetadataService()
        => (MetadataService)RuntimeHelpers.GetUninitializedObject(typeof(MetadataService));

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool CreateTool()
        => new(UninitializedServiceClient(), UninitializedMetadataService());

    [TestMethod]
    public void Constructor_NullServiceClient_Throws()
    {
        AssertArgumentNull(() =>
            new DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool(null!, UninitializedMetadataService()));
    }

    [TestMethod]
    public void Constructor_NullMetadataService_Throws()
    {
        AssertArgumentNull(() =>
            new DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteSqlTool(UninitializedServiceClient(), null!));
    }

    [TestMethod]
    public async Task ExecuteSql_Whitespace_ReturnsRequiredError()
    {
        var result = await CreateTool().execute_sql("   ");

        StringAssert.Contains(result.GetText(), "sql is required");
    }

    [TestMethod]
    public async Task ExecuteSql_NonSelect_ReturnsReadOnlyError()
    {
        var result = await CreateTool().execute_sql("UPDATE account SET name = 'x'");

        StringAssert.Contains(result.GetText(), "Only SELECT statements are supported");
    }

    [TestMethod]
    public async Task ExecuteSql_SelectStarWithTrailingTerminator_ReturnsError()
    {
        var result = await CreateTool().execute_sql("SELECT * FROM account;");

        StringAssert.Contains(result.GetText(), "SELECT * is not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_TopQueryIsUnwrappedBeforeValidation()
    {
        var result = await CreateTool().execute_sql("SELECT TOP 5 * FROM account", max_records: 10);

        StringAssert.Contains(result.GetText(), "SELECT * is not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_MultipleStatementsAreRejected()
    {
        var result = await CreateTool().execute_sql("SELECT name FROM account; SELECT name FROM contact");

        StringAssert.Contains(result.GetText(), "Multiple statements are not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_HavingIsRejected()
    {
        var result = await CreateTool().execute_sql("SELECT name FROM account GROUP BY name HAVING COUNT(*) > 1");

        StringAssert.Contains(result.GetText(), "HAVING clause is not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_ExistsSubqueryIsRejected()
    {
        var result = await CreateTool().execute_sql(
            "SELECT name FROM account WHERE EXISTS (SELECT 1 FROM contact)");

        StringAssert.Contains(result.GetText(), "Subqueries in WHERE clause are not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_WhereSubqueryIsRejected()
    {
        var result = await CreateTool().execute_sql(
            "SELECT name FROM account WHERE id IN (SELECT parentcustomerid FROM contact)");

        StringAssert.Contains(result.GetText(), "Subqueries in WHERE clause are not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_OffsetFetchIsRejected()
    {
        var result = await CreateTool().execute_sql("SELECT name FROM account OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY");

        StringAssert.Contains(result.GetText(), "OFFSET/FETCH is not supported");
    }

    [TestMethod]
    public async Task ExecuteSql_InvalidMaxRecordsIsRejected()
    {
        var result = await CreateTool().execute_sql("SELECT name FROM account", max_records: 0);

        StringAssert.Contains(result.GetText(), "max_records must be between 1 and 50000");
    }

    [TestMethod]
    public void ContainsSemicolonOutsideLiteral_HandlesEscapedQuotes()
    {
        Assert.IsTrue(InvokeContainsSemicolon("SELECT name FROM account; SELECT name FROM contact"));
        Assert.IsFalse(InvokeContainsSemicolon("SELECT name FROM account WHERE name = 'a;b'"));
        Assert.IsFalse(InvokeContainsSemicolon("SELECT name FROM account WHERE name = 'Bob''s account'"));
        Assert.IsFalse(InvokeContainsSemicolon("SELECT name FROM account"));
    }

    private static bool InvokeContainsSemicolon(string sql)
        => (bool)ContainsSemicolonMethod.Invoke(null, new object[] { sql })!;

    private static void AssertArgumentNull(Action action)
    {
        try
        {
            action();
            Assert.Fail("Expected ArgumentNullException.");
        }
        catch (ArgumentNullException)
        {
            // Expected.
        }
    }
}
