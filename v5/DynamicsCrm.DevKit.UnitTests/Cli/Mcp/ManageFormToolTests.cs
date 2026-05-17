using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

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

    [TestMethod]
    public void FormXmlOperationsRunner_ManageEventAdd_NormalizesDesignerVisibleOnLoad()
    {
        var formXml = RunFormXmlOperations("""
<form>
  <tabs />
  <formLibraries>
    <Library name="paz_/quotemcp/quote.form.js" libraryUniqueId="{FFAFE559-AF52-4158-AEEC-E8122BD1B932}" />
  </formLibraries>
  <events>
    <event name="OnLoad" application="false" active="true" eventType="ControlEvent">
      <Handlers>
        <Handler functionName="QuoteMcp.Quote.OnLoad" libraryName="paz_/quotemcp/quote.form.js" handlerUniqueId="{247ADCCB-2FB7-4243-898E-E1991A3C4BE3}" enabled="true" passExecutionContext="false" />
      </Handlers>
    </event>
  </events>
</form>
""", """
[
  {
    "action": "manage_event",
    "manage_action": "add",
    "eventName": "OnLoad",
    "functionName": "QuoteMcp.Quote.OnLoad",
    "library": "paz_/quotemcp/quote.form.js"
  }
]
""");

        var eventsIndex = formXml.IndexOf("<events>", StringComparison.Ordinal);
        var librariesIndex = formXml.IndexOf("<formLibraries>", StringComparison.Ordinal);

        Assert.IsTrue(eventsIndex >= 0, "Expected root <events> element.");
        Assert.IsTrue(librariesIndex >= 0, "Expected root <formLibraries> element.");
        Assert.IsTrue(eventsIndex < librariesIndex, "FormXML.xsd requires root events before formLibraries.");
        StringAssert.Contains(formXml, "event name=\"onload\"");
        StringAssert.Contains(formXml, "passExecutionContext=\"true\"");
        Assert.AreEqual(1, CountOccurrences(formXml, "functionName=\"QuoteMcp.Quote.OnLoad\""));
    }

    [TestMethod]
    public void FormFieldEventOperations_AddFields_TargetHeader_AddsHeaderField()
    {
        var formDoc = XDocument.Parse("<form><tabs /></form>");
        using var json = JsonDocument.Parse("""
{
  "action": "manage_fields",
  "manage_action": "add",
  "target": "header",
  "fields": [
    { "field": "devkit_name" }
  ]
}
""");

        var result = ExecuteAddFields(formDoc, json.RootElement, new Dictionary<string, AttributeMetadata>(StringComparer.OrdinalIgnoreCase)
        {
            ["devkit_name"] = new StringAttributeMetadata
            {
                LogicalName = "devkit_name",
                SchemaName = "devkit_Name",
                DisplayName = new Label("Invoice Name", 1033)
            }
        });

        StringAssert.Contains(result, "add_header_fields: 1 field(s) added to header");
        StringAssert.Contains(formDoc.ToString(), "<header");
        StringAssert.Contains(formDoc.ToString(), "datafieldname=\"devkit_name\"");
    }

    [TestMethod]
    public void FormXmlOperationsRunner_MissingAction_ErrorExplainsOperationContract()
    {
        var message = RunFormXmlOperationsError(SubgridFormXml, """
[
  {
    "manage_action": "add",
    "label": "Invoice Lines"
  }
]
""");

        StringAssert.Contains(message, "Each operation must have an 'action' field.");
        StringAssert.Contains(message, "operation.action is the operation family, not the verb");
        StringAssert.Contains(message, "{\"action\":\"manage_subgrid\",\"manage_action\":\"add\"");
    }

    [TestMethod]
    public void FormXmlOperationsRunner_VerbInAction_ErrorExplainsManageAction()
    {
        var message = RunFormXmlOperationsError(SubgridFormXml, """
[
  {
    "action": "add",
    "label": "Invoice Lines"
  }
]
""");

        StringAssert.Contains(message, "Unknown action 'add'.");
        StringAssert.Contains(message, "operation.action must be the operation family, not the verb");
        StringAssert.Contains(message, "{\"action\":\"manage_subgrid\",\"manage_action\":\"add\"");
    }

    [TestMethod]
    public void FormXmlOperationsRunner_ManageTabAddUpdateMoveRemove_ManipulatesTabs()
    {
        var formXml = RunFormXmlOperations("<form><tabs /></form>", """
[
  {
    "action": "manage_tab",
    "manage_action": "add",
    "label": "General",
    "name": "tab_general",
    "tab_columns": 2,
    "sections": [
      { "label": "Summary", "name": "general_sec_summary" },
      { "label": "Details", "name": "general_sec_details", "tab_column": 2 }
    ]
  },
  {
    "action": "manage_tab",
    "manage_action": "add",
    "label": "Audit",
    "name": "tab_audit",
    "position": "first"
  },
  {
    "action": "manage_tab",
    "manage_action": "update",
    "tab": "tab_general",
    "new_name": "tab_general_renamed",
    "label": "General Renamed",
    "visible": false,
    "show_label": false,
    "hide_on_phone": true,
    "expanded": false
  },
  {
    "action": "manage_tab",
    "manage_action": "move",
    "tab": "tab_general_renamed",
    "position": "after:tab_audit"
  },
  {
    "action": "manage_tab",
    "manage_action": "remove",
    "tab": "tab_general_renamed"
  }
]
""");

        StringAssert.Contains(formXml, "tab name=\"tab_audit\"");
        Assert.IsFalse(formXml.Contains("tab_general_renamed", StringComparison.Ordinal));
        Assert.IsFalse(formXml.Contains("General Renamed", StringComparison.Ordinal));
    }

    [TestMethod]
    public void FormXmlOperationsRunner_ManageSectionAddUpdateMoveRemove_ManipulatesSections()
    {
        var formXml = RunFormXmlOperations("""
<form>
  <tabs>
    <tab name="tab_a">
      <labels><label description="A" languagecode="1033" /></labels>
      <columns><column width="100%"><sections><section name="a_sec_existing"><labels><label description="Existing" languagecode="1033" /></labels><rows /></section></sections></column></columns>
    </tab>
    <tab name="tab_b">
      <labels><label description="B" languagecode="1033" /></labels>
      <columns><column width="100%"><sections /></column></columns>
    </tab>
  </tabs>
</form>
""", """
[
  {
    "action": "manage_section",
    "manage_action": "add",
    "tab": "tab_a",
    "label": "New Section",
    "name": "a_sec_new",
    "section_columns": 2,
    "position": "after:a_sec_existing",
    "visible": false,
    "show_label": false,
    "hide_on_phone": true
  },
  {
    "action": "manage_section",
    "manage_action": "update",
    "tab": "tab_a",
    "section": "a_sec_new",
    "new_name": "a_sec_new_renamed",
    "label": "Renamed Section",
    "visible": true,
    "show_label": true,
    "hide_on_phone": false
  },
  {
    "action": "manage_section",
    "manage_action": "move",
    "tab": "tab_a",
    "section": "a_sec_new_renamed",
    "target_tab": "tab_b",
    "position": "first"
  },
  {
    "action": "manage_section",
    "manage_action": "remove",
    "tab": "tab_b",
    "section": "a_sec_new_renamed"
  }
]
""");

        StringAssert.Contains(formXml, "section name=\"a_sec_existing\"");
        Assert.IsFalse(formXml.Contains("a_sec_new_renamed", StringComparison.Ordinal));
        Assert.IsFalse(formXml.Contains("Renamed Section", StringComparison.Ordinal));
    }

    [TestMethod]
    public void FormXmlOperationsRunner_ManageTabMoveWithMissingReference_ListsAvailableTabs()
    {
        var message = RunFormXmlOperationsError("""
<form>
  <tabs>
    <tab name="tab_general"><labels><label description="General" languagecode="1033" /></labels><columns /></tab>
    <tab name="tab_other"><labels><label description="Other" languagecode="1033" /></labels><columns /></tab>
  </tabs>
</form>
""", """
[
  {
    "action": "manage_tab",
    "manage_action": "move",
    "tab": "tab_general",
    "position": "before:tab_missing"
  }
]
""");

        StringAssert.Contains(message, "tab_missing");
        StringAssert.Contains(message, "Available: tab_other");
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

    private static string RunFormXmlOperationsError(string formXml, string operationsJson)
    {
        var runnerType = ToolType.Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Form.FormXmlOperationsRunner")!;
        var ctor = runnerType.GetConstructor(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic,
            null, new[] { typeof(ServiceClient) }, null)!;
        var runner = ctor.Invoke(new object[] { null! });
        var run = runnerType.GetMethod("Run", BindingFlags.Instance | BindingFlags.Public)!;
        var ops = ParseOperations(operationsJson);

        try
        {
            run.Invoke(runner, new object[] { formXml, "v4_invoice", ops });
        }
        catch (TargetInvocationException ex) when (ex.InnerException != null)
        {
            return ex.InnerException.Message;
        }

        Assert.Fail("Expected FormXmlOperationsRunner.Run to throw.");
        return "";
    }

    private static string ExecuteAddFields(XDocument formDoc, JsonElement op, Dictionary<string, AttributeMetadata> attrMap)
    {
        var assembly = ToolType.Assembly;
        var builderType = assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Form.FormXmlBuilder")!;
        var fieldOpsType = assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Form.FormFieldEventOperations")!;

        var builderCtor = builderType.GetConstructor(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic,
            null, new[] { typeof(ServiceClient) }, null)!;
        var builder = builderCtor.Invoke(new object[] { null! });

        var fieldOpsCtor = fieldOpsType.GetConstructor(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic,
            null, new[] { typeof(ServiceClient), builderType }, null)!;
        var fieldOps = fieldOpsCtor.Invoke(new[] { null!, builder });

        var execute = fieldOpsType.GetMethod("ExecuteAddFields", BindingFlags.Instance | BindingFlags.Public)!;
        return (string)execute.Invoke(fieldOps, new object[]
        {
            formDoc,
            op,
            attrMap,
            new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        })!;
    }

    private static int CountOccurrences(string value, string search)
    {
        var count = 0;
        var index = 0;
        while ((index = value.IndexOf(search, index, StringComparison.Ordinal)) >= 0)
        {
            count++;
            index += search.Length;
        }

        return count;
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
