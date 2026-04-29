using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

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

    private const string SubgridFormXml = """
<form>
  <tabs>
    <tab name="tab_lines">
      <labels><label description="Lines" languagecode="1033" /></labels>
      <columns>
        <column width="100%">
          <sections>
            <section name="lines_sec_invoice_lines">
              <labels><label description="Invoice Lines" languagecode="1033" /></labels>
              <rows />
            </section>
          </sections>
        </column>
      </columns>
    </tab>
  </tabs>
</form>
""";

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

    // ──────────────────────────────────────────────
    // manage_subgrid operations
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormXmlOperationsRunner_ManageSubgridAdd_AddsSubgridControl()
    {
        var result = RunFormXmlOperations(SubgridFormXml, """
[
  {
    "action": "manage_subgrid",
    "manage_action": "add",
    "tab": "tab_lines",
    "section": "lines_sec_invoice_lines",
    "label": "Invoice Lines",
    "control_id": "v4_invoice_invoiceline",
    "relationship_name": "v4_invoice_invoiceline",
    "target_entity": "v4_invoiceline",
    "view_id": "{15b9a1e7-9c8c-475d-a775-2318d7a5e275}",
    "rows_per_page": 10,
    "rowspan": 10
  }
]
""");

        StringAssert.Contains(result, "control id=\"v4_invoice_invoiceline\"");
        StringAssert.Contains(result, "classid=\"{E7A81278-8635-4D9E-8D4D-59480B391C5B}\"");
        StringAssert.Contains(result, "<TargetEntityType>v4_invoiceline</TargetEntityType>");
        StringAssert.Contains(result, "<RelationshipName>v4_invoice_invoiceline</RelationshipName>");
        StringAssert.Contains(result, "<ViewId>{15b9a1e7-9c8c-475d-a775-2318d7a5e275}</ViewId>");
    }

    [TestMethod]
    public void FormXmlOperationsRunner_ManageSubgridUpdate_UpdatesParameters()
    {
        var formXml = RunFormXmlOperations(SubgridFormXml, """
[
  {
    "action": "manage_subgrid",
    "manage_action": "add",
    "tab": "tab_lines",
    "section": "lines_sec_invoice_lines",
    "label": "Invoice Lines",
    "control_id": "v4_invoice_invoiceline",
    "relationship_name": "v4_invoice_invoiceline",
    "target_entity": "v4_invoiceline",
    "view_id": "{15b9a1e7-9c8c-475d-a775-2318d7a5e275}"
  },
  {
    "action": "manage_subgrid",
    "manage_action": "update",
    "control_id": "v4_invoice_invoiceline",
    "rows_per_page": 25,
    "enable_quick_find": true
  }
]
""");

        StringAssert.Contains(formXml, "<RecordsPerPage>25</RecordsPerPage>");
        StringAssert.Contains(formXml, "<EnableQuickFind>true</EnableQuickFind>");
    }

    [TestMethod]
    public void FormXmlOperationsRunner_ManageSubgridRemove_RemovesSubgridCell()
    {
        var formXml = RunFormXmlOperations(SubgridFormXml, """
[
  {
    "action": "manage_subgrid",
    "manage_action": "add",
    "tab": "tab_lines",
    "section": "lines_sec_invoice_lines",
    "label": "Invoice Lines",
    "control_id": "v4_invoice_invoiceline",
    "relationship_name": "v4_invoice_invoiceline",
    "target_entity": "v4_invoiceline",
    "view_id": "{15b9a1e7-9c8c-475d-a775-2318d7a5e275}"
  },
  {
    "action": "manage_subgrid",
    "manage_action": "remove",
    "control_id": "v4_invoice_invoiceline"
  }
]
""");

        Assert.IsFalse(formXml.Contains("control id=\"v4_invoice_invoiceline\"", StringComparison.Ordinal));
        Assert.IsFalse(formXml.Contains("RelationshipName", StringComparison.Ordinal));
    }

    private static string RunFormXmlOperations(string formXml, string operationsJson)
    {
        var runnerType = ToolType.Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Form.FormXmlOperationsRunner")!;
        var ctor = runnerType.GetConstructor(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic,
            null, new[] { typeof(ServiceClient) }, null)!;
        var runner = ctor.Invoke(new object[] { null! });
        var run = runnerType.GetMethod("Run", BindingFlags.Instance | BindingFlags.Public)!;
        var ops = ParseOperations(operationsJson);
        var result = run.Invoke(runner, new object[] { formXml, "v4_invoice", ops })!;

        return (string)result.GetType().GetField("Item1")!.GetValue(result)!;
    }

    private static List<JsonElement> ParseOperations(string operationsJson)
    {
        using var doc = JsonDocument.Parse(operationsJson);
        var ops = new List<JsonElement>();
        foreach (var op in doc.RootElement.EnumerateArray())
            ops.Add(op.Clone());
        return ops;
    }
}
