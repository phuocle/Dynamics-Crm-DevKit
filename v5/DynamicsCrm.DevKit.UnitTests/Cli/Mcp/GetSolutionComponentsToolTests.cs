using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GetSolutionComponentsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSolutionComponentsTool);

    private static readonly MethodInfo GetTypeNameMethod = ToolType
        .GetMethod("GetTypeName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo GetComponentApiNameMethod = ToolType
        .GetMethod("GetComponentApiName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string GetTypeName(int typeId) =>
        (string)GetTypeNameMethod.Invoke(null, new object[] { typeId })!;

    private static string GetComponentApiName(int typeId) =>
        (string)GetComponentApiNameMethod.Invoke(null, new object[] { typeId })!;

    // ──────────────────────────────────────────────
    // GetTypeName — classic component types
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetTypeName_Entity_ReturnsEntity()
        => Assert.AreEqual("Entity", GetTypeName(1));

    [TestMethod]
    public void GetTypeName_WebResource_ReturnsWebResource()
        => Assert.AreEqual("Web Resource", GetTypeName(61));

    [TestMethod]
    public void GetTypeName_PluginAssembly_ReturnsPluginAssembly()
        => Assert.AreEqual("Plugin Assembly", GetTypeName(91));

    [TestMethod]
    public void GetTypeName_CanvasApp_ReturnsCanvasApp()
        => Assert.AreEqual("Canvas App", GetTypeName(300));

    [TestMethod]
    public void GetTypeName_EnvironmentVariableValue_ReturnsCorrectName()
        => Assert.AreEqual("Environment Variable Value", GetTypeName(381));

    // ──────────────────────────────────────────────
    // GetTypeName — modern component types (Finding 1)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetTypeName_181_ReturnsSdkMessagePair()
        => Assert.AreEqual("SDK Message Pair", GetTypeName(181));

    [TestMethod]
    public void GetTypeName_10032_ReturnsManagedIdentity()
        => Assert.AreEqual("Managed Identity", GetTypeName(10032));

    [TestMethod]
    public void GetTypeName_10036_ReturnsCustomApi()
        => Assert.AreEqual("Custom API", GetTypeName(10036));

    [TestMethod]
    public void GetTypeName_10037_ReturnsCustomApiRequestParameter()
        => Assert.AreEqual("Custom API Request Parameter", GetTypeName(10037));

    [TestMethod]
    public void GetTypeName_10038_ReturnsCustomApiResponseProperty()
        => Assert.AreEqual("Custom API Response Property", GetTypeName(10038));

    [TestMethod]
    public void GetTypeName_10039_ReturnsPluginPackage()
        => Assert.AreEqual("Plugin Package", GetTypeName(10039));

    [TestMethod]
    public void GetTypeName_10088_ReturnsAppElement()
        => Assert.AreEqual("App Element", GetTypeName(10088));

    [TestMethod]
    public void GetTypeName_10091_ReturnsAppSetting()
        => Assert.AreEqual("App Setting", GetTypeName(10091));

    [TestMethod]
    public void GetTypeName_10326_ReturnsAppAction()
        => Assert.AreEqual("App Action", GetTypeName(10326));

    [TestMethod]
    public void GetTypeName_UnknownType_ReturnsFallbackFormat()
        => Assert.AreEqual("Type_99999", GetTypeName(99999));

    // ──────────────────────────────────────────────
    // GetComponentApiName — classic types
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetComponentApiName_Entity_ReturnsEntity()
        => Assert.AreEqual("Entity", GetComponentApiName(1));

    [TestMethod]
    public void GetComponentApiName_WebResource_ReturnsWebResource()
        => Assert.AreEqual("WebResource", GetComponentApiName(61));

    [TestMethod]
    public void GetComponentApiName_PluginAssembly_ReturnsPluginAssembly()
        => Assert.AreEqual("PluginAssembly", GetComponentApiName(91));

    // ──────────────────────────────────────────────
    // GetComponentApiName — modern types (Finding 2)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetComponentApiName_181_ReturnsSdkMessagePair()
        => Assert.AreEqual("SdkMessagePair", GetComponentApiName(181));

    [TestMethod]
    public void GetComponentApiName_10032_ReturnsManagedIdentity()
        => Assert.AreEqual("ManagedIdentity", GetComponentApiName(10032));

    [TestMethod]
    public void GetComponentApiName_10036_ReturnsCustomApi()
        => Assert.AreEqual("CustomApi", GetComponentApiName(10036));

    [TestMethod]
    public void GetComponentApiName_10039_ReturnsPluginPackage()
        => Assert.AreEqual("PluginPackage", GetComponentApiName(10039));

    [TestMethod]
    public void GetComponentApiName_10326_ReturnsAppAction()
        => Assert.AreEqual("AppAction", GetComponentApiName(10326));

    [TestMethod]
    public void GetComponentApiName_UnknownType_FallsBackToDisplayName()
    {
        // Type 300 is in ComponentTypeNames as "Canvas App" but also in ComponentApiNames as "CanvasApp"
        // Test a type that is ONLY in ComponentTypeNames (not ComponentApiNames) — none exist now
        // So test that a completely unknown type returns the typeId as string
        Assert.AreEqual("99999", GetComponentApiName(99999));
    }

    // ──────────────────────────────────────────────
    // Input validation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetSolutionComponents_EmptyName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSolutionComponentsTool(null!);
        var result = tool.get_solution_components("");
        Assert.IsTrue(result.Contains("Error"), "Empty name should return error");
        Assert.IsTrue(result.Contains("required"), "Error should mention 'required'");
    }

    [TestMethod]
    public void GetSolutionComponents_WhitespaceOnly_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSolutionComponentsTool(null!);
        var result = tool.get_solution_components("   ");
        Assert.IsTrue(result.Contains("Error"), "Whitespace-only name should return error");
    }
}
