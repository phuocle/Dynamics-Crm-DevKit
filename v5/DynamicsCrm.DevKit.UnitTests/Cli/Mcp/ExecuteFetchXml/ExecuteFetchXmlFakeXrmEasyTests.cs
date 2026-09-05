using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteFetchXml;

/// <summary>
/// Phase 1 seam proof: <see cref="ExecuteFetchXmlTool"/> now depends on
/// <see cref="Microsoft.Xrm.Sdk.IOrganizationService"/>, so FakeXrmEasy's in-memory
/// context drives the full execute_fetchxml path (RetrieveMultiple → ConvertEntities →
/// FetchXmlResult) with no live org. Before Phase 1 the ctor required a concrete
/// ServiceClient and none of these data paths could run in a unit test.
/// </summary>
[TestClass]
public sealed class ExecuteFetchXmlFakeXrmEasyTests
{
    private static IXrmFakedContext NewContext() => MiddlewareBuilder.New()
        .AddCrud()
        .UseCrud()
        .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
        .Build();

    private static void SeedAccount(IXrmFakedContext context, string name, string telephone)
    {
        var account = new Entity("account", Guid.NewGuid())
        {
            ["name"] = name,
            ["telephone1"] = telephone
        };
        context.GetOrganizationService().Create(account);
    }

    [TestMethod]
    public void ExecuteFetchXml_ReturnsSeededRecords_FromInMemoryOrg()
    {
        var context = NewContext();
        SeedAccount(context, "Contoso", "111");
        SeedAccount(context, "Fabrikam", "222");
        var tool = new ExecuteFetchXmlTool(context.GetOrganizationService());

        var result = tool.execute_fetchxml(
            "<fetch><entity name='account'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>");

        Assert.AreEqual("[Success] 2 records returned.", result.GetText());
        Assert.IsTrue(result.StructuredContent.HasValue);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual(2, structured.GetProperty("totalReturned").GetInt32());
        Assert.IsFalse(structured.GetProperty("hasMore").GetBoolean());
        Assert.AreEqual("account", structured.GetProperty("entity").GetString());
        var names = structured.GetProperty("records").EnumerateArray()
            .Select(r => r.GetProperty("name").GetString())
            .OrderBy(n => n)
            .ToArray();
        CollectionAssert.AreEqual(new[] { "Contoso", "Fabrikam" }, names);
    }

    [TestMethod]
    public void ExecuteFetchXml_FiltersRecords_WithCondition()
    {
        var context = NewContext();
        SeedAccount(context, "Contoso", "111");
        SeedAccount(context, "Fabrikam", "222");
        var tool = new ExecuteFetchXmlTool(context.GetOrganizationService());

        var result = tool.execute_fetchxml(
            "<fetch><entity name='account'><attribute name='name'/>" +
            "<filter><condition attribute='name' operator='eq' value='Fabrikam'/></filter>" +
            "</entity></fetch>");

        Assert.AreEqual("[Success] 1 records returned.", result.GetText());
        var records = result.StructuredContent!.Value.GetProperty("records");
        Assert.AreEqual(1, records.GetArrayLength());
        Assert.AreEqual("Fabrikam", records[0].GetProperty("name").GetString());
    }

    [TestMethod]
    public void ExecuteFetchXml_EmptyResult_StillReturnsSuccess()
    {
        var context = NewContext();
        var tool = new ExecuteFetchXmlTool(context.GetOrganizationService());

        var result = tool.execute_fetchxml(
            "<fetch><entity name='account'><attribute name='name'/></entity></fetch>");

        Assert.AreEqual("[Success] 0 records returned.", result.GetText());
        Assert.AreEqual(0, result.StructuredContent!.Value.GetProperty("records").GetArrayLength());
        Assert.IsFalse(result.StructuredContent!.Value.GetProperty("hasMore").GetBoolean());
    }
}
