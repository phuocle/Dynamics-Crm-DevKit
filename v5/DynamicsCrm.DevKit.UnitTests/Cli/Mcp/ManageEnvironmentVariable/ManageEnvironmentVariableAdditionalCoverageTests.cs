using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageEnvironmentVariable;

[TestClass]
public sealed class ManageEnvironmentVariableAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageEnvironmentVariableTool);

    [TestMethod]
    public void MaskIfSecret_CoversSecretAndNonSecretValues()
    {
        Assert.AreEqual("(secret)", InvokeStatic<string>("MaskIfSecret", "Secret", "top-secret"));
        Assert.AreEqual("visible", InvokeStatic<string>("MaskIfSecret", "String", "visible"));
        Assert.AreEqual("", InvokeStatic<string>("MaskIfSecret", "Secret", ""));
    }

    [TestMethod]
    public void ResolveDefinitionInput_EmptyNameReturnsValidationErrorWithoutNetwork()
    {
        var tool = new ManageEnvironmentVariableTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var result = ToolType.GetMethod("ResolveDefinitionInput", BindingFlags.NonPublic | BindingFlags.Instance)!
            .Invoke(tool, new object?[] { " " });
        var error = result!.GetType().GetField("Item3")!.GetValue(result) as string;
        Assert.AreEqual("variable_name is required.", error);
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
