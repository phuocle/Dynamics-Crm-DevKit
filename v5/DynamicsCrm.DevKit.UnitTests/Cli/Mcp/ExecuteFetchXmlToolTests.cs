using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ExecuteFetchXmlToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteFetchXmlTool);

    private static readonly MethodInfo ExecuteMethod = ToolType
        .GetMethod("execute_fetchxml", BindingFlags.Public | BindingFlags.Instance)!;

    /// <summary>
    /// Creates an instance with a null ServiceClient — only useful for testing
    /// validation paths that return before touching the ServiceClient.
    /// </summary>
    private static object CreateTool() =>
        Activator.CreateInstance(ToolType, new object?[] { null })!;

    [TestMethod]
    public void ExecuteFetchXml_EmptyFetchXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("required"));
    }

    [TestMethod]
    public void ExecuteFetchXml_WhitespaceOnlyFetchXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "   ", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }

    [TestMethod]
    public void ExecuteFetchXml_ZeroMaxRecords_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", 0, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("positive"));
    }

    [TestMethod]
    public void ExecuteFetchXml_NegativeMaxRecords_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", -1, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }

    [TestMethod]
    public void ExecuteFetchXml_InvalidXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "not xml", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }
}
