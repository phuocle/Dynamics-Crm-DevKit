using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class ExecuteSqlExtraCoverageTests
{
    private FakeSdkClient _fake = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private ExecuteSqlTool CreateTool()
    {
        var webApi = new ServiceClientWebApiExecutor(_fake.Client);
        var metaService = new MetadataService(_fake.Client);
        return new ExecuteSqlTool(webApi, metaService);
    }

    [TestMethod]
    public async Task ExecuteSql_ValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.execute_sql(sql: "")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT name FROM account; SELECT name FROM contact")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "UPDATE account SET name='x'")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT * FROM account")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT name, COUNT(1) FROM account GROUP BY name HAVING COUNT(1) > 1")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT name FROM account WHERE id IN (SELECT id FROM contact)")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT name FROM account ORDER BY name OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY")).IsError == true);
        Assert.IsTrue((await tool.execute_sql(sql: "SELECT name FROM account", max_records: 0)).IsError == true);
    }
}
