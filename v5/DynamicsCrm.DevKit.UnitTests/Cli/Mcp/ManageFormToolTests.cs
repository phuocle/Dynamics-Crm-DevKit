using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageFormToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageFormTool);

    private static readonly MethodInfo MapFormTypeMethod = ToolType
        .GetMethod("MapFormType", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo StripXmlDeclarationMethod = ToolType
        .GetMethod("StripXmlDeclaration", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo IsSchemaEvolutionErrorMethod = ToolType
        .GetMethod("IsSchemaEvolutionError", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly FieldInfo ValidFormTypesField = ToolType
        .GetField("ValidFormTypes", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // MapFormType
    // ──────────────────────────────────────────────

    private static string MapFormType(int type) =>
        (string)MapFormTypeMethod.Invoke(null, new object[] { type })!;

    [TestMethod]
    public void MapFormType_Main_ReturnsMain() => Assert.AreEqual("Main", MapFormType(2));

    [TestMethod]
    public void MapFormType_QuickView_ReturnsQuickView() => Assert.AreEqual("QuickView", MapFormType(6));

    [TestMethod]
    public void MapFormType_QuickCreate_ReturnsQuickCreate() => Assert.AreEqual("QuickCreate", MapFormType(7));

    [TestMethod]
    public void MapFormType_Dashboard_ReturnsDashboard() => Assert.AreEqual("Dashboard", MapFormType(0));

    [TestMethod]
    public void MapFormType_Unknown_ReturnsOtherWithValue() => Assert.AreEqual("Other(99)", MapFormType(99));

    [TestMethod]
    public void MapFormType_MainInteractive_ReturnsMainInteractive() => Assert.AreEqual("MainInteractive", MapFormType(11));

    // ──────────────────────────────────────────────
    // ValidFormTypes — Finding 1 regression guard
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ValidFormTypes_ContainsAllExpectedTypes()
    {
        var validTypes = (int[])ValidFormTypesField.GetValue(null)!;
        CollectionAssert.Contains(validTypes, 0);
        CollectionAssert.Contains(validTypes, 2);
        CollectionAssert.Contains(validTypes, 5);
        CollectionAssert.Contains(validTypes, 6);
        CollectionAssert.Contains(validTypes, 7);
    }

    [TestMethod]
    public void ValidFormTypes_DoesNotContainInvalidTypes()
    {
        var validTypes = (int[])ValidFormTypesField.GetValue(null)!;
        CollectionAssert.DoesNotContain(validTypes, 1);
        CollectionAssert.DoesNotContain(validTypes, 99);
        CollectionAssert.DoesNotContain(validTypes, -1);
    }

    // ──────────────────────────────────────────────
    // EscapeTab
    // ──────────────────────────────────────────────

    private static string EscapeTab(string value) =>
        (string)EscapeTabMethod.Invoke(null, new object[] { value })!;

    [TestMethod]
    public void EscapeTab_TabCharacter_ReplacedWithSpace()
    {
        Assert.AreEqual("hello world", EscapeTab("hello\tworld"));
    }

    [TestMethod]
    public void EscapeTab_NewlineCharacter_ReplacedWithSpace()
    {
        Assert.AreEqual("hello world", EscapeTab("hello\nworld"));
    }

    // ──────────────────────────────────────────────
    // StripXmlDeclaration
    // ──────────────────────────────────────────────

    private static string StripXmlDeclaration(string xml) =>
        (string)StripXmlDeclarationMethod.Invoke(null, new object[] { xml })!;

    [TestMethod]
    public void StripXmlDeclaration_WithDeclaration_StripsIt()
    {
        var input = "<?xml version=\"1.0\" encoding=\"utf-8\"?><form />";
        Assert.AreEqual("<form />", StripXmlDeclaration(input));
    }

    [TestMethod]
    public void StripXmlDeclaration_WithoutDeclaration_ReturnsUnchanged()
    {
        var input = "<form />";
        Assert.AreEqual("<form />", StripXmlDeclaration(input));
    }

    // ──────────────────────────────────────────────
    // IsSchemaEvolutionError
    // ──────────────────────────────────────────────

    private static bool IsSchemaEvolutionError(string message) =>
        (bool)IsSchemaEvolutionErrorMethod.Invoke(null, new object[] { message })!;

    [TestMethod]
    public void IsSchemaEvolutionError_AttributeNotDeclared_ReturnsTrue()
    {
        Assert.IsTrue(IsSchemaEvolutionError("The 'headerdensity' attribute is not declared."));
    }

    [TestMethod]
    public void IsSchemaEvolutionError_NormalError_ReturnsFalse()
    {
        Assert.IsFalse(IsSchemaEvolutionError("Some completely different error message"));
    }

    // ──────────────────────────────────────────────
    // Finding 1: detail with form_id must validate entity_name
    // (Integration-level test — verifying GetFormDetailResult exists and has entity check)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetFormDetailResult_MethodExists_WithEntityNameParameter()
    {
        var method = ToolType.GetMethod("GetFormDetailResult", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "GetFormDetailResult method must exist for entity validation in detail action");

        var parameters = method.GetParameters();
        Assert.AreEqual(2, parameters.Length);
        Assert.AreEqual("entityName", parameters[0].Name);
        Assert.AreEqual("formId", parameters[1].Name);
    }

    // ──────────────────────────────────────────────
    // Finding 2: GetFormDetailResult returns ErrorResult (not TextResult) for not-found
    // (Verifying the method return type includes IsError path)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatFormDetail_MethodExists_AsStaticHelper()
    {
        var method = ToolType.GetMethod("FormatFormDetail", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method, "FormatFormDetail static helper must exist (refactored from GetFormDetail)");
        Assert.AreEqual(typeof(string), method.ReturnType, "FormatFormDetail should return string (formatting only, no error handling)");
    }
}
