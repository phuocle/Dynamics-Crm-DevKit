using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteFetchXml;

[TestClass]
public sealed class ExecuteFetchXmlAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteFetchXmlTool);
    private static readonly MethodInfo ExecuteMethod = ToolType.GetMethod(
        "execute_fetchxml", BindingFlags.Public | BindingFlags.Instance)!;
    private static readonly MethodInfo GetSingleEntityMethod = ToolType.GetMethod(
        "GetSingleEntity", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static object CreateTool() => Activator.CreateInstance(ToolType, new object?[] { null })!;

    private static string Execute(object tool, string fetchXml, int maxRecords = 10, bool getAll = false)
        => ((CallToolResult)ExecuteMethod.Invoke(tool, new object?[] { fetchXml, maxRecords, getAll })!).GetText();

    [TestMethod]
    public void ExecuteFetchXml_MalformedInnerXml_ReturnsFriendlyValidationError()
    {
        var result = Execute(CreateTool(), "<fetch><entity name='account'></fetch>");

        StringAssert.Contains(result, "not well-formed XML");
    }

    [TestMethod]
    public void ExecuteFetchXml_ManagedPagingAttributesAreRejected()
    {
        var result = Execute(CreateTool(), "<fetch page='2'><entity name='account'/></fetch>");

        StringAssert.Contains(result, "Do not set top, count, page, or paging-cookie");
    }

    [TestMethod]
    public void ExecuteFetchXml_ManagedTopAttributeIsRejected()
    {
        var result = Execute(CreateTool(), "<fetch top='1'><entity name='account'/></fetch>");

        StringAssert.Contains(result, "Do not set top, count, page, or paging-cookie");
    }

    [TestMethod]
    public void ExecuteFetchXml_MixedCaseFetchTagsAreAcceptedBeforeExecution()
    {
        var result = Execute(CreateTool(), "<FETCH><entity name='account'/></FETCH>");

        Assert.IsTrue(result.StartsWith("[Error]"), result);
        Assert.IsFalse(result.Contains("must contain one complete"), result);
    }

    [TestMethod]
    public void GetSingleEntity_EmptyRecords_ReturnsNull()
    {
        var result = InvokeGetSingleEntity(new List<Dictionary<string, string>>());

        Assert.IsNull(result);
    }

    [TestMethod]
    public void GetSingleEntity_OneEntity_ReturnsEntityName()
    {
        var result = InvokeGetSingleEntity(new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account", ["_id"] = "1" },
            new() { ["_entity"] = "account", ["_id"] = "2" }
        });

        Assert.AreEqual("account", result);
    }

    [TestMethod]
    public void GetSingleEntity_MultipleEntities_ReturnsNull()
    {
        var result = InvokeGetSingleEntity(new List<Dictionary<string, string>>
        {
            new() { ["_entity"] = "account" },
            new() { ["_entity"] = "contact" }
        });

        Assert.IsNull(result);
    }

    [TestMethod]
    public void GetSingleEntity_MissingEntityKey_ReturnsNull()
    {
        var result = InvokeGetSingleEntity(new List<Dictionary<string, string>>
        {
            new() { ["_id"] = "1" }
        });

        Assert.IsNull(result);
    }

    private static string? InvokeGetSingleEntity(List<Dictionary<string, string>> records)
        => (string?)GetSingleEntityMethod.Invoke(null, new object[] { records });
}
